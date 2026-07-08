Game.adSplashScreenbbpp = function () { };
Game.adSplashScreenbbpp.prototype = {

    init: function (user, app_Mode) {
        console.log("i'm inside ad splash screen");

        _this = this;
        _this.user = user;
        console.log(_this.user);
        _this.app_Mode = app_Mode;

        window.user = user;
        if (user.deviceid) {
            window.user.deviceid = user.deviceid;
        } else if (user.deviceId) {
            window.user.deviceid = user.deviceId;
        }
        console.log(user.deviceId, user.deviceid, "user.deviceId >>");
        screen.orientation.lock('portrait');
        AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_LOW_PROFILE, null, null);
        _this.game.scale.setGameSize(540, 960);
        _this.scale.forceOrientation(true, false);
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },

    onDeviceReady: function () {
        AndroidFullScreen.immersiveMode(successFunction, errorFunction);
    },

    preload: function (game) {
        _this = this;

    },

    create: function (game) {
        console.log("I am in adSplashScreenbbpp....");

        // Load the JSON config dynamically from server
        _this.configImgUrl = 'https://abbmath.klp.org.in/bbplusplus/assets1/posterImage/config/splash-image.json';

        fetch('https://abbmath.klp.org.in/bbplusplus/assets1/posterImage/config/splash-config.json')
            .then(response => response.json())
            .then(config => {
                console.log("Splash config loaded:", config);
                // find poster from server config
                _this.splashType = config.poster1 ? 'poster1' : null;

                if (!_this.splashType) {
                    // DELETE any previously downloaded splash images
                    const path = cordova.file.externalDataDirectory + "splashAds/";
                    window.resolveLocalFileSystemURL(path, dir => {
                        let reader = dir.createReader();
                        reader.readEntries(entries => {
                            entries.forEach(entry => {
                                entry.remove(() => console.log("Deleted old splash:", entry.name));
                            });
                        });
                    }, err => console.log("No splash folder, skip"));
                    _this.state.start('appLoginEditScreenbbpp', true, false, _this.user, _this.app_Mode);
                    return;
                }

                // Local folder path
                _this.basePathSplash = cordova.file.externalDataDirectory + "splashAds/";

                // Step 2: ensure folder exists
                ensureSplashFolder(_this.basePathSplash, () => {

                    console.log("Splash folder ensured.....");

                    // Step 3: fetch splash image list
                    fetch(_this.configImgUrl)
                        .then(res => res.json())
                        .then(list => {

                            // Step 4: download missing images
                            downloadSplashImages(list, () => {

                                const splashImages = {
                                    english: "adSplashENG",
                                    kannada: "adSplashKAN",
                                    hindi: "adSplashHIN",
                                    odiya: "adSplashODI",
                                    marathi: "adSplashMAR",
                                    tamil: "adSplashTAM"
                                };

                                _this.lang = (_this.user.language || "english").toLowerCase();

                                const selectedKey =
                                    splashImages[_this.lang] || splashImages["english"];

                                const langList = {
                                    english: "ENG",
                                    kannada: "KAN",
                                    hindi: "HIN",
                                    odiya: "ODI",
                                    marathi: "MAR",
                                    tamil: "TAM"
                                };

                                const fileName = "MOB-APP-" + langList[_this.lang] + ".jpg";
                                const filePath = _this.basePathSplash + fileName;
                                let cacheBuster = "?v=" + Date.now();

                                // Step 5: load local image to Phaser
                                game.load.image(selectedKey, filePath + cacheBuster);
                                game.load.start();

                                game.load.onLoadComplete.add(() => {

                                    // Step 6: show splash image
                                    const adsplash = game.add.sprite(
                                        game.world.centerX,
                                        game.world.centerY,
                                        selectedKey
                                    );
                                    adsplash.anchor.setTo(0.5);
                                    adsplash.scale.setTo(0.5);

                                    // Step 7: close button
                                    const closeBtn = game.add.sprite(40, 40, "closeIcon");
                                    closeBtn.anchor.setTo(0.5);
                                    closeBtn.scale.setTo(0.8);
                                    closeBtn.inputEnabled = true;

                                    closeBtn.events.onInputDown.add(() => {
                                        adsplash.destroy();
                                        closeBtn.destroy();
                                        _this.state.start("appLoginEditScreenbbpp", true, false, _this.user, _this.app_Mode);
                                    });

                                });

                            });

                        });

                });

            })
            .catch(err => {
                console.error("Failed to load splash config:", err);
                _this.state.start('appLoginEditScreenbbpp', true, false, _this.user, _this.app_Mode);
            });

    }

};

function ensureSplashFolder(path, callback) {
    window.resolveLocalFileSystemURL(
        path,
        () => callback(), // exists
        () => {
            window.resolveLocalFileSystemURL(
                cordova.file.externalDataDirectory,
                root => {
                    root.getDirectory("splashAds", { create: true }, () => {
                        callback();
                    });
                }
            );
        }
    );
}

function downloadSplashImages(list, callback) {
    console.log("inside downloadSplashImages");

    let pending = list.length;

    list.forEach(file => {
        const serverURL = "https://abbmath.klp.org.in/bbplusplus/assets1/posterImage/" + file;
        const localPath = _this.basePathSplash + file;

        // STEP 1: Check if file already exists
        window.resolveLocalFileSystemURL(
            localPath,
            () => {
                console.log("Exists:", file);
                if (--pending === 0) callback();
            },
            () => {
                // STEP 2: File not found → download using fetch
                console.log("Downloading:", file);

                fetch(serverURL)
                    .then(response => response.blob())
                    .then(blob => {
                        const folderPath = _this.basePathSplash;

                        // STEP 3: Get folder reference
                        window.resolveLocalFileSystemURL(
                            folderPath,
                            dirEntry => {
                                // STEP 4: Create file in folder
                                dirEntry.getFile(file, { create: true }, fileEntry => {
                                    fileEntry.createWriter(writer => {

                                        writer.onwriteend = () => {
                                            console.log("Downloaded:", file);
                                            if (--pending === 0) callback();
                                        };

                                        writer.onerror = err => {
                                            console.error("Write error:", err);
                                            if (--pending === 0) callback();
                                        };

                                        writer.write(blob);
                                    });
                                });
                            },
                            err => {
                                console.error("Folder not found:", err);
                                if (--pending === 0) callback();
                            }
                        );
                    })
                    .catch(err => {
                        console.error("Fetch failed:", file, err);
                        if (--pending === 0) callback();
                    });
            }
        );
    });
}

function successFunction() {
    console.log('Immersive mode set successfully.');
}

function errorFunction(error) {
    console.error('Error setting immersive mode:', error);
}