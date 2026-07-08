# BB-BBPP-OFFLINE-App-Code

Source code for the **offline** editions of **Building Blocks (BB)** and **Building Blocks++ (BBPP)** — Apache Cordova / Android math learning apps built by [Akshara Foundation](https://www.aksharafoundation.org/) / [KLP (Karnataka Learning Partnership)](https://klp.org.in/), with one app project per target language.

- **BB** — Building Blocks, grades **1–5**, 400+ interactive math games.
- **BBPP** — Building Blocks++, grades **6–8**, 400+ interactive math games.

Both product lines also ship in a combined, fully-online variant ("Building Blocks 1-8"); this repository contains the standalone **offline**, per-language Android builds.

Prebuilt, installable APKs for these apps are published separately in **[klpdotorg/BB-BBPP-Offline-Apks](https://github.com/klpdotorg/BB-BBPP-Offline-Apks)**.

## Repository structure

Each top-level folder is an independent Cordova project (own `www/`, `config.xml`, `package.json`, platform build, and signing keystore).

### BB — grades 1-5 (`BB-Offline-<Language>`)

| Folder | Widget / package ID | App name |
|---|---|---|
| `BB-Offline-English` | `com.akshara.easymathENG` | BB Offline English |
| `BB-Offline-Gujarati` | `com.akshara.easymathGUJ` | BB Offline Gujarati |
| `BB-Offline-Hindi` | `com.akshara.easymathHIN` | BB Offline Hindi |
| `BB-Offline-Kannada` | `com.akshara.easymathKAN` | BB Offline Kannada |
| `BB-Offline-Marathi` | `com.akshara.easymathMAR` | BB Offline Marathi |
| `BB-Offline-Odiya` | `com.akshara.easymathODI` | BB Offline Odiya |
| `BB-Offline-Tamil` | `com.akshara.easymathTAM` | BB Offline Tamil |
| `BB-Offline-Telugu` | `com.akshara.easymathTEL` | BB Offline Telugu |
| `BB-Offline-Urdu` | `com.akshara.easymathURD` | BB Offline Urdu |

### BBPP — grades 6-8 (`BBPP-Offline-<Language>`)

| Folder | Widget / package ID | App name |
|---|---|---|
| `BBPP-Offline-English` | `com.akshara.BBplusplusOffEng` | Building Blocks 6-8 Eng |
| `BBPP-Offline-Hindi` | `com.akshara.BBplusplusOffHin` | Building Blocks 6-8 Hin |
| `BBPP-Offline-Kannada` | `com.akshara.BBplusplusOffKan` | Building Blocks 6-8 Kan |
| `BBPP-Offline-Marathi` | `com.akshara.BBplusplusOffMar` | Building Blocks 6-8 Mar |
| `BBPP-Offline-Odiya` | `com.akshara.BBplusplusOffOdi` | Building Blocks 6-8 Odi |
| `BBPP-Offline-Tamil` | `com.akshara.BBplusplusOffTam` | Building Blocks 6-8 Tam |

> BBPP currently ships in 6 languages; BB ships in 9. Each folder's game assets live under `www/BB` and `www/BBPP` respectively (both directories are present in every project as a byproduct of the shared template, but only the relevant one is wired up as the entry point for that app).

### Per-project layout

Each `BB-Offline-*` / `BBPP-Offline-*` folder follows the same Cordova layout:

```
<App>/
├── config.xml           # Cordova widget config: app id, name, Android prefs, plugin config
├── package.json          # Cordova plugin list + npm metadata
├── build.json             # Android debug/release signing config (keystore, alias)
├── *.jks                  # Release keystore(s) for this app
├── google-services.json   # Firebase config for this app's package id
├── generate.js             # (BB-Offline-English only) scaffolds a new BB language folder
├── www/                    # App source (HTML/JS/assets) — BB and BBPP game code + shared registration/login/telemetry
├── res/                    # Android icons/splash resources
├── platforms/android/      # Generated Cordova Android platform project
└── plugins/                # Installed Cordova plugins
```

## Tech stack

- **Apache Cordova** (Android platform, `cordova-android` ^15)
- Game engine: Phaser-style `game.state` framework under `www/BB` / `www/BBPP`
- **Firebase** via `cordova-plugin-firebasex` (Analytics, Crashlytics, Performance, FCM push notifications)
- `cordova-sqlite-storage` for local/offline data
- Various Cordova plugins: device info, app version, network info, screen orientation, status bar, fullscreen, social sharing, toast, zip, file transfer, navigation bar, Android permissions/AndroidX adapter

## Prerequisites

- Node.js + npm
- Cordova CLI: `npm install -g cordova`
- Android SDK / a local JDK with `keytool` on `PATH` (needed for release signing and for `generate.js`)

## Building an app

From inside a specific app folder (e.g. `BB-Offline-Hindi`):

```bash
cordova platform remove android
cordova platform add android@14.0.0
cordova clean android
cordova build android              # debug build
cordova build android --release    # signed release build / .aab
```

Key `config.xml` Android preferences currently in use:

```xml
<preference name="android-minSdkVersion" value="23" />
<preference name="android-compileSdkVersion" value="36" />
<preference name="android-targetSdkVersion" value="36" />
```

If Firebase or SQLite plugins get out of sync after an Android platform bump, reinstall them:

```bash
cordova plugin remove cordova-plugin-firebasex
cordova plugin add cordova-plugin-firebasex@latest
cordova plugin remove cordova-sqlite-storage
cordova plugin add cordova-sqlite-storage@latest
```

> Keep the project path free of spaces — a space anywhere in the folder path breaks the Cordova/Gradle build.

### Release signing

Each app folder has its own `build.json` + `.jks` keystore (alias/password are per-app; see `build.json` in that folder — not reproduced here). `cordova build android --release` picks these up automatically.

## Related repositories

- **[klpdotorg/BB-BBPP-Offline-Apks](https://github.com/klpdotorg/BB-BBPP-Offline-Apks)** — prebuilt, installable APKs for the offline BB/BBPP apps in this repo.
