#!/usr/bin/env node
/*
Generates one full project copy per language, pre-configured for offline mode.

For every language, this:
  1. Copies the whole repo (minus .git/node_modules/platforms) into a sibling
     folder named "<Prefix>-Offline-<Language>" (Prefix is BB or BBPP).
  2. In that copy's www/BB/js/index.js, sets this.app_Mode = "offline" and
     window.languageSelected = "<Language>".

BB gets all 9 languages it supports offline (appLoginEditScreen.js).
BBPP gets only the 6 languages its offline asset-download logic
(appLoginEditScreenbbpp.js) actually handles today (Gujarati/Telugu/Urdu
are commented out there).

Usage:
  node generate-offline-builds.js                          # prompts for language(s), builds everything
  node generate-offline-builds.js --only BB                # only the BB set
  node generate-offline-builds.js --only BBPP --languages Hindi,Tamil
  node generate-offline-builds.js --patch-only             # skip copying, just rewrite index.js in existing folders
  node generate-offline-builds.js --languages all           # skip the prompt, use each prefix's full default list
*/

"use strict";

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const SCRIPT_DIR = __dirname;

const BB_LANGUAGES = ["English", "Hindi", "Kannada", "Odiya", "Gujarati", "Marathi", "Telugu", "Tamil", "Urdu"];
const BBPP_LANGUAGES = ["English", "Hindi", "Kannada", "Odiya", "Marathi", "Tamil"];

const EXCLUDE_DIRS = new Set([".git", "node_modules", "platforms"]);

function printHelp() {
  console.log(`Usage: node generate-offline-builds.js [options]

Options:
  --only <BB|BBPP|All>       Which project(s) to build (default: All)
  --languages <list>         Comma-separated languages, or "all" for the
                              default list of each prefix. Skips the prompt.
  --source-root <path>       Repo to copy from (default: this script's folder)
  --output-root <path>       Where "<Prefix>-Offline-<Language>" folders go
                              (default: the parent of this script's folder)
  --patch-only                Skip copying, just rewrite index.js in existing folders
  -h, --help                  Show this help
`);
}

function parseArgs(argv) {
  const options = {
    sourceRoot: SCRIPT_DIR,
    outputRoot: path.dirname(SCRIPT_DIR),
    only: "All",
    languages: null,
    patchOnly: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    switch (arg) {
      case "-h":
      case "--help":
        printHelp();
        process.exit(0);
        break;
      case "--only": {
        const value = argv[++i];
        if (!["BB", "BBPP", "All"].includes(value)) {
          throw new Error(`Invalid --only value "${value}". Expected BB, BBPP, or All.`);
        }
        options.only = value;
        break;
      }
      case "--languages": {
        const value = argv[++i];
        if (!value || value.trim().toLowerCase() === "all") {
          options.languages = null;
        } else {
          options.languages = value.split(",").map((s) => s.trim()).filter(Boolean);
        }
        break;
      }
      case "--source-root":
        options.sourceRoot = argv[++i];
        break;
      case "--output-root":
        options.outputRoot = argv[++i];
        break;
      case "--patch-only":
        options.patchOnly = true;
        break;
      default:
        throw new Error(`Unknown argument: ${arg}. Use --help for usage.`);
    }
  }

  return options;
}

function promptLanguages() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Enter language(s) to build, comma-separated (or "all" for each project\'s default list) [all]: ', (answer) => {
      rl.close();
      const trimmed = answer.trim();
      if (!trimmed || trimmed.toLowerCase() === "all") {
        resolve(null);
      } else {
        resolve(trimmed.split(",").map((s) => s.trim()).filter(Boolean));
      }
    });
  });
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

function setOfflineLanguage(targetPath, language) {
  const indexJsPath = path.join(targetPath, "www", "BB", "js", "index.js");
  if (!fs.existsSync(indexJsPath)) {
    throw new Error(`index.js not found at ${indexJsPath}`);
  }

  let content = fs.readFileSync(indexJsPath, "utf8");

  content = content.replace(/this\.app_Mode = "online";/, 'this.app_Mode = "offline";');
  content = content.replace(
    /(this\.app_Mode == "offline"\) \{\r?\n\s*window\.languageSelected = )"[^"]*"(;)/,
    (_match, prefix, suffix) => `${prefix}"${language}"${suffix}`
  );

  fs.writeFileSync(indexJsPath, content, "utf8");
}

function newOfflineLanguageBuild(prefix, language, options) {
  const targetName = `${prefix}-Offline-${language}`;
  const targetPath = path.join(options.outputRoot, targetName);

  if (options.patchOnly) {
    if (!fs.existsSync(targetPath)) {
      console.warn(`WARNING: ${targetName} does not exist, skipping (PatchOnly)`);
      return;
    }
  } else {
    console.log(`Copying ${targetName} ...`);
    copyDir(options.sourceRoot, targetPath);
  }

  setOfflineLanguage(targetPath, language);
  console.log(`  -> ${targetName} : app_Mode=offline, languageSelected=${language}`);
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  if (!options.languages && process.stdin.isTTY) {
    options.languages = await promptLanguages();
  }

  if (options.only === "BB" || options.only === "All") {
    const langs = options.languages || BB_LANGUAGES;
    for (const lang of langs) {
      newOfflineLanguageBuild("BB", lang, options);
    }
  }

  if (options.only === "BBPP" || options.only === "All") {
    const langs = options.languages || BBPP_LANGUAGES;
    for (const lang of langs) {
      newOfflineLanguageBuild("BBPP", lang, options);
    }
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
