#!/usr/bin/env node
/*
Generates one full BBPP project copy per target language, using this
BBPP-Offline-English folder as the template.

For every language, this:
  1. Copies the whole project (minus .git/node_modules/platforms) into a
     sibling folder named "BBPP-Offline-<Language>".
  2. Rewrites the English-specific values to the target language's values:
       - config.xml      : widget id + <name> (e.g. BBplusplusOffEng -> BBplusplusOffHin)
       - package.json     : "name" + "displayName" (e.g. enbbplusplus -> hibbplusplus)
       - www/BB/js/index.js : window.languageSelected
       - build.json + keystore : keystore filename/alias/passwords
  3. Reuses google-services.json unchanged (it already contains a Firebase
     client entry per BBplusplusOff<Suffix> package name, one file for all
     languages - never edit or regenerate it here).
  4. Generates a language-specific Android signing keystore (e.g.
     hibbplusplusoff.jks) with keytool, unless one already exists for that
     language (existing keystores are never regenerated unless
     --force-keystore is passed - overwriting a keystore that has already
     signed a published app breaks future updates).

The English source is never modified; every language is written into a
fresh sibling folder.

Adding a new language later: add one entry to the LANGUAGES map below
(canonical name -> { code, widgetSuffix }) and rerun.

Usage:
  node generate-language-builds.js Hindi,Kannada,Odiya,Tamil,Marathi
  node generate-language-builds.js hi,kn,od,tm,mr
  node generate-language-builds.js Hindi --force            # overwrite an existing BBPP-Offline-Hindi folder
  node generate-language-builds.js Hindi --force-keystore    # also regenerate its keystore (DANGEROUS - changes signing identity)
  node generate-language-builds.js --languages Tamil,Marathi --output-root "D:\some\other\parent"
*/

"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const SCRIPT_DIR = __dirname;

// Canonical language name -> its identity fields. Widget suffixes below
// match the BBplusplusOff<Suffix> package names already registered as
// Firebase clients in google-services.json - keep them in sync with that
// file if either changes.
const LANGUAGES = {
  Hindi: { code: "hi", widgetSuffix: "Hin" },
  Kannada: { code: "kn", widgetSuffix: "Kan" },
  Odiya: { code: "od", widgetSuffix: "Odi" },
  Tamil: { code: "tm", widgetSuffix: "Tam" },
  Marathi: { code: "mr", widgetSuffix: "Mar" },
  // Add more languages here, e.g.:
  // Gujarati: { code: "gu", widgetSuffix: "Guj" },
  // Telugu:   { code: "te", widgetSuffix: "Tel" },
  // Urdu:     { code: "ur", widgetSuffix: "Urd" },
};

const ENGLISH = { name: "English", code: "en", widgetSuffix: "Eng" };

const EXCLUDE_DIRS = new Set([".git", "node_modules", "platforms"]);

const KEYSTORE_VALIDITY_DAYS = 9999; // ~27 years - the original enbbplusplusoff.jks expired after 90 days
const KEYSTORE_DNAME = "CN=Pushpa Thantry, OU=Development, O=Akshara Foundation, L=Bengaluru, ST=Karnataka, C=IN";

function printHelp() {
  console.log(`Usage: node generate-language-builds.js <lang1,lang2,...> [options]

Languages may be given by name or code (case-insensitive), e.g.
"Hindi,Kannada" or "hi,kn". Known languages: ${Object.keys(LANGUAGES)
    .map((n) => `${n} (${LANGUAGES[n].code})`)
    .join(", ")}

Options:
  --languages <list>      Same as the positional language list.
  --source <path>          Template project to copy from (default: this script's folder)
  --output-root <path>     Where "BBPP-Offline-<Language>" folders go (default: parent of this script's folder)
  --force                  Overwrite an existing target language folder
  --force-keystore         Regenerate an existing keystore (DANGEROUS: changes the app's signing identity)
  -h, --help                Show this help
`);
}

function resolveLanguage(token) {
  const trimmed = token.trim();
  const byName = Object.keys(LANGUAGES).find((n) => n.toLowerCase() === trimmed.toLowerCase());
  if (byName) return byName;
  const byCode = Object.keys(LANGUAGES).find((n) => LANGUAGES[n].code.toLowerCase() === trimmed.toLowerCase());
  if (byCode) return byCode;
  return null;
}

function parseArgs(argv) {
  const options = {
    sourceRoot: SCRIPT_DIR,
    outputRoot: path.dirname(SCRIPT_DIR),
    languageArg: null,
    force: false,
    forceKeystore: false,
  };
  const positional = [];

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    switch (arg) {
      case "-h":
      case "--help":
        printHelp();
        process.exit(0);
        break;
      case "--languages":
        options.languageArg = argv[++i];
        break;
      case "--source":
        options.sourceRoot = path.resolve(argv[++i]);
        break;
      case "--output-root":
        options.outputRoot = path.resolve(argv[++i]);
        break;
      case "--force":
        options.force = true;
        break;
      case "--force-keystore":
        options.forceKeystore = true;
        break;
      default:
        if (arg.startsWith("--")) {
          throw new Error(`Unknown argument: ${arg}. Use --help for usage.`);
        }
        positional.push(arg);
    }
  }

  if (!options.languageArg) {
    options.languageArg = positional.join(",");
  }
  if (!options.languageArg) {
    throw new Error("No languages specified. Usage: node generate-language-builds.js <lang1,lang2,...>. Use --help for details.");
  }

  options.languageTokens = options.languageArg
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return options;
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && EXCLUDE_DIRS.has(entry.name)) {
      continue;
    }

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.isSymbolicLink()) {
      fs.symlinkSync(fs.readlinkSync(srcPath), destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function writeText(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

// Literal (non-regex) find/replace. Fails loudly if the expected text isn't
// found, or if it appears more than once and the caller didn't say `all`,
// so a template change upstream can't silently produce a half-patched copy.
function replaceLiteral(content, filePath, label, from, to, { all = false } = {}) {
  const count = content.split(from).length - 1;
  if (count === 0) {
    throw new Error(`Could not find ${label} ("${from}") in ${filePath}`);
  }
  if (!all && count > 1) {
    throw new Error(`Expected exactly one occurrence of ${label} in ${filePath}, found ${count}`);
  }
  return content.split(from).join(to);
}

function patchConfigXml(targetPath, cfg) {
  const filePath = path.join(targetPath, "config.xml");
  let content = readText(filePath);
  content = replaceLiteral(
    content,
    filePath,
    "widget id",
    `id="com.akshara.BBplusplusOff${ENGLISH.widgetSuffix}"`,
    `id="com.akshara.BBplusplusOff${cfg.widgetSuffix}"`
  );
  content = replaceLiteral(
    content,
    filePath,
    "app name",
    `<name>Building Blocks 6-8 ${ENGLISH.widgetSuffix}</name>`,
    `<name>Building Blocks 6-8 ${cfg.widgetSuffix}</name>`
  );
  writeText(filePath, content);
}

function patchPackageJson(targetPath, cfg) {
  const filePath = path.join(targetPath, "package.json");
  if (!fs.existsSync(filePath)) return;
  let content = readText(filePath);
  content = replaceLiteral(
    content,
    filePath,
    "package name",
    `"com.akshara.${ENGLISH.code}bbplusplus"`,
    `"com.akshara.${cfg.code}bbplusplus"`
  );
  content = replaceLiteral(
    content,
    filePath,
    "displayName",
    `"${ENGLISH.code.toUpperCase()}-BBplusplus"`,
    `"${cfg.code.toUpperCase()}-BBplusplus"`
  );
  writeText(filePath, content);
}

function patchIndexJs(targetPath, languageName) {
  const filePath = path.join(targetPath, "www", "BB", "js", "index.js");
  let content = readText(filePath);
  content = replaceLiteral(
    content,
    filePath,
    "window.languageSelected assignment",
    `window.languageSelected = "${ENGLISH.name}";`,
    `window.languageSelected = "${languageName}";`,
    { all: true }
  );
  writeText(filePath, content);
}

function resolveKeytoolPath() {
  const candidates = [];
  if (process.env.JAVA_HOME) {
    candidates.push(path.join(process.env.JAVA_HOME, "bin", process.platform === "win32" ? "keytool.exe" : "keytool"));
  }
  candidates.push("keytool");

  for (const candidate of candidates) {
    try {
      execFileSync(candidate, ["-help"], { stdio: "ignore" });
      return candidate;
    } catch (err) {
      // try next candidate
    }
  }
  throw new Error("keytool not found. Install a JDK and ensure keytool is on PATH, or set JAVA_HOME.");
}

function generateKeystore(keystorePath, alias, password, keytoolPath, force) {
  if (fs.existsSync(keystorePath)) {
    if (!force) {
      console.log(`  keystore already exists, leaving as-is: ${path.basename(keystorePath)} (use --force-keystore to regenerate)`);
      return;
    }
    console.warn(`  WARNING: regenerating existing keystore ${path.basename(keystorePath)} (--force-keystore) - this changes the app's signing identity and will break updates for any app already signed with it.`);
    fs.unlinkSync(keystorePath);
  }

  console.log(`  generating keystore ${path.basename(keystorePath)} ...`);
  execFileSync(
    keytoolPath,
    [
      "-genkeypair",
      "-v",
      "-keystore", keystorePath,
      "-alias", alias,
      "-keyalg", "RSA",
      "-keysize", "2048",
      "-validity", String(KEYSTORE_VALIDITY_DAYS),
      "-storepass", password,
      "-keypass", password,
      "-dname", KEYSTORE_DNAME,
    ],
    { stdio: "inherit" }
  );
}

function patchBuildJsonAndKeystore(targetPath, cfg, options) {
  const buildJsonPath = path.join(targetPath, "build.json");
  let content = readText(buildJsonPath);
  content = replaceLiteral(
    content,
    buildJsonPath,
    "keystore/alias/password",
    `${ENGLISH.code}bbplusplusoff`,
    `${cfg.code}bbplusplusoff`,
    { all: true }
  );
  writeText(buildJsonPath, content);

  // The copy still has English's keystore file; drop it and generate this
  // language's own instead of leaving a stale, unreferenced English key
  // sitting in the language folder.
  const englishKeystorePath = path.join(targetPath, `${ENGLISH.code}bbplusplusoff.jks`);
  if (fs.existsSync(englishKeystorePath)) {
    fs.unlinkSync(englishKeystorePath);
  }

  const keystorePath = path.join(targetPath, `${cfg.code}bbplusplusoff.jks`);
  const alias = `${cfg.code}bbplusplusoff`;
  generateKeystore(keystorePath, alias, alias, options.keytoolPath, options.forceKeystore);
}

function buildLanguage(languageName, options) {
  const cfg = LANGUAGES[languageName];
  const targetName = `BBPP-Offline-${languageName}`;
  const targetPath = path.join(options.outputRoot, targetName);

  console.log(`\n${targetName}`);

  if (fs.existsSync(targetPath)) {
    if (!options.force) {
      console.warn(`  SKIP: ${targetPath} already exists (use --force to overwrite)`);
      return;
    }
    console.log(`  removing existing folder (--force) ...`);
    fs.rmSync(targetPath, { recursive: true, force: true });
  }

  console.log(`  copying from ${options.sourceRoot} ...`);
  copyDir(options.sourceRoot, targetPath);

  patchConfigXml(targetPath, cfg);
  patchPackageJson(targetPath, cfg);
  patchIndexJs(targetPath, languageName);
  patchBuildJsonAndKeystore(targetPath, cfg, options);

  console.log(`  -> done: package=com.akshara.BBplusplusOff${cfg.widgetSuffix}, keystore=${cfg.code}bbplusplusoff.jks, languageSelected=${languageName}`);
}

function main() {
  const options = parseArgs(process.argv.slice(2));

  const resolvedLanguages = options.languageTokens.map((token) => {
    const name = resolveLanguage(token);
    if (!name) {
      const known = Object.keys(LANGUAGES)
        .map((n) => `${n} (${LANGUAGES[n].code})`)
        .join(", ");
      throw new Error(`Unknown language "${token}". Known languages: ${known}`);
    }
    return name;
  });

  const googleServicesPath = path.join(options.sourceRoot, "google-services.json");
  if (!fs.existsSync(googleServicesPath)) {
    throw new Error(`google-services.json not found in source root: ${options.sourceRoot}`);
  }

  options.keytoolPath = resolveKeytoolPath();

  for (const languageName of resolvedLanguages) {
    buildLanguage(languageName, options);
  }

  console.log("\nDone.");
}

try {
  main();
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
