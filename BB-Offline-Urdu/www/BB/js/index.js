// Game.indexBBPP = function () {

// };

// Game.indexBBPP.prototype = {

var app = {

  // for force update 
  // APP_VERSION_CODE: 73, // keep in sync with config.xml android-versionCode 
  APP_VERSION_NAME: null,
  // UPDATE_CONFIG_URL: 'https://abbmath.klp.org.in/AppUpdate/app-update-config.json',
  // UPDATE_CONFIG_URL: window.ApiConfig.url('appupdate'),
  // DEFAULT_STORE_URL: 'https://play.google.com/store/apps/details?id=com.akshara.easymath',

  // Application Constructor
  initialize: function () {
    console.log("initialize app bb");
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function () {
    console.log("Device ready");

    // try {
    //   facebookConnectPlugin.activateApp();
    //   console.log("Facebook App Events activated");
    // } catch (e) {
    //   console.log("FB plugin not available", e);
    // }

    // push notification initialization
    initFirebasePush();

    var _this = this;

    // ✅ Get ONLY version name
    if (cordova && cordova.getAppVersion) {

      cordova.getAppVersion.getVersionNumber().then(function (versionName) {

        console.log("Version Name:", versionName);

        // ✅ store version name
        app.APP_VERSION_NAME = versionName;

        // start app AFTER getting version
        _this.receivedEvent('deviceready');

      }).catch(function (err) {

        console.error("AppVersion plugin error:", err);

        // fallback
        app.APP_VERSION_NAME = "0.0.0";

        _this.receivedEvent('deviceready');
      });

    } else {

      console.warn("AppVersion plugin not available");

      app.APP_VERSION_NAME = "0.0.0";

      _this.receivedEvent('deviceready');
    }

    // this.receivedEvent('deviceready');
    AndroidFullScreen.immersiveMode(successFunction, errorFunction);
  },


  receivedEvent: function (id) {

    console.log("received event");


    // bbreglogin.initializeDB();

    // var game = new Phaser.Game(540, 960, Phaser.CANVAS, 'phaser_canvas', { preload: this.preload, create: this.create }, false, true, null);
    // push notification
    window.game = new Phaser.Game(540, 960, Phaser.CANVAS, 'phaser_canvas', { preload: this.preload, create: this.create }, false, true, null);
    var game = window.game;

    game.state.add('boot', Game.boot);
    game.state.add('langSelectScreen', Game.langSelectScreen);
    game.state.add('preloader', Game.preloader);
    game.state.add('adSplashScreenbb', Game.adSplashScreenbb);
    game.state.add('userprogress', Game.userprogress);
    game.state.add('userprogress2', Game.userprogress2);
    game.state.add('appLoginScreen', Game.appLoginScreen);
    game.state.add('appLoginEditScreen', Game.appLoginEditScreen);
    game.state.add('editLangScreen', Game.editLangScreen);
    game.state.add('registrationLangSelectionScreen', Game.registrationLangSelectionScreen);
    // game.state.add('registrationPicSelectionScreen', Game.registrationPicSelectionScreen);
    game.state.add('index2', Game.index2);

    // game.state.add('bbppb', Game.bbppb);
    game.state.add('preloaderbbpp', Game.preloaderbbpp);
    game.state.add('adSplashScreenbbpp', Game.adSplashScreenbbpp);
    game.state.add('userprogressbbpp', Game.userprogressbbpp);
    game.state.add('userprogress2bbpp', Game.userprogress2bbpp);
    game.state.add('appLoginScreenbbpp', Game.appLoginScreenbbpp);
    game.state.add('appLoginEditScreenbbpp', Game.appLoginEditScreenbbpp);
    game.state.add('editLangScreenbbpp', Game.editLangScreenbbpp);
    game.state.add('registrationLangSelectionScreenbbpp', Game.registrationLangSelectionScreenbbpp);
    // game.state.add('registrationPicSelectionScreenbbpp', Game.registrationPicSelectionScreenbbpp);
    game.state.add('index2bbpp', Game.index2bbpp);

    game.state.add('mainScreen', Game.mainScreen);

  },

  preload: function (game) {
    game.load.video('demo', './demo.mp4');
    game.load.image('splash', 'BB/assets/splash.png');
    //added for extra splash image on 05/11/2025
    // game.load.image('adSplashEng', 'BB/assets/MOB-APP-ENG.jpg');
    // game.load.image('adSplashKan', 'BB/assets/MOB-APP-KAN.jpg');
    // game.load.image('adSplashHin', 'BB/assets/MOB-APP-HIN.jpg');
    // game.load.image('adSplashOdi', 'BB/assets/MOB-APP-ODI.jpg');
    // game.load.image('adSplashMar', 'BB/assets/MOB-APP-MAR.jpg');
    // game.load.image('adSplashTam', 'BB/assets/MOB-APP-TAM.jpg');
    // game.load.image('adSplashTlg', 'BB/assets/MOB-APP-TLG.jpg');
    // game.load.image('adSplashUrd', 'BB/assets/MOB-APP-URD.jpg');
    // game.load.image('adSplashGuj', 'BB/assets/MOB-APP-GUJ.jpg');
    // game.load.image('closeIcon', 'BB/assets/closeIcon.png');
    // game.load.image('splash', 'BBPP/assets/splash.png');
    game.load.image('helpIcon', './helpIcon.png');
    game.load.image('closeIcon', './closeIcon.png');
    game.load.image('registrationbg_1', 'BBPP/assets/registrationbg.png');
    game.load.image('graphicBg', 'BBPP/assets/graphicBg.png');
    game.load.image('carrotIcon', 'BBPP/assets/carrotIcon.png');
    game.load.image('regBackArrow', 'BBPP/assets/regBackArrow.png');
    game.load.image('userEditBtn', 'BBPP/assets/userEditBtn.png');
    game.load.image('userProgressBtn', 'BBPP/assets/userProgressBtn.png');
    game.load.atlas('fish', 'BBPP/assets/fish.png', 'BBPP/assets/fish.json');
    game.load.atlas('butterfly', 'BBPP/assets/butterfly.png', 'BBPP/assets/butterfly.json');
    game.load.atlas('flower', 'BBPP/assets/flower.png', 'BBPP/assets/flower.json');
    game.load.atlas('parrot', 'BBPP/assets/parrot.png', 'BBPP/assets/parrot.json');
    game.load.atlas('sun', 'BBPP/assets/sun.png', 'BBPP/assets/sun.json');
    game.load.atlas('tree', 'BBPP/assets/tree.png', 'BBPP/assets/tree.json');
    game.load.atlas('regTickBtn', 'BBPP/assets/regTickBtn.png', 'BBPP/assets/regTickBtn.json');
    game.load.atlas('regandstsrtBtn', 'BBPP/assets/regandstsrtBtn.png', 'BBPP/assets/regandstsrtBtn.json');
    game.load.atlas('regloding', 'BBPP/assets/loding.png', 'BBPP/assets/loding.json');
    game.load.image('registrationbg', 'BBPP/assets/registrationbg.png');
    game.load.atlas('mainCloud', 'BBPP/assets/gradeSelectionScreenAssets/grade1Cloudnew.png', 'BBPP/assets/gradeSelectionScreenAssets/grade1Cloudnew.json');

    game.load.bitmapFont('regFont', 'regFont.png', 'regFont.xml');
    game.load.image('logo', 'BB/assets/logo.png');
  },

  create: function (game) {
    console.log("I am in index.js");

    //* Date 12-08-2023sw
    //* Generating BBplusplus app in two ways online & offline
    //* Here we are setting a variaable to indicate which apk we are going to generate 
    //* app_Mode is variable we are going to use to indicate online/offline
    this.app_Mode = "offline"; //online//* Set to to offline if you want to generate offline app
    if (this.app_Mode == "offline") {
      window.languageSelected = "Urdu"; //* Set this variable based on the language you need to generate - Offline
    }
    console.log(this.app_Mode, "App MODE ///");
    game.input.maxPointers = 1;
    window.app_Mode = this.app_Mode;
    console.log(window.app_Mode, "window MODE ///");
    game.stage.disableVisibilityChange = true;

    this.app_Grade = "offline"; //online//* Set to to offline if you want to generate offline app
    if (this.app_Grade == "offline") {
      window.languageSelected = "Urdu"; //* Set this variable based on the language you need to generate - Offline
    }
    console.log(this.app_Grade, "App MODE ///");
    window.app_Grade = this.app_Grade;
    console.log(window.app_Grade, "window MODE ///");

    //setting scale and orientation for the game.
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.updateLayout(true);
    game.scale.forceOrientation(true, false);


    game.stage.backgroundColor = '#71c5cf';
    var splash = game.add.sprite(game.world.centerX, game.world.centerY, 'splash');
    splash.scale.setTo(0.5, 0.5);
    splash.anchor.setTo(0.5);

    console.log(game);

    this.game.add.text(0, 0, "hack", { font: "1px myfont", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px gradefont", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px regfont1", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px regfont2", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px regfont3", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px regfont4", fill: "#FFFFFF" });

    game.time.events.add(1000, function () {//600
      game.time.events.removeAll();
      // console.log("Timeout completed, showing ad splash");
      // splash.destroy();
      // self.showAdSplash(game, self.app_Mode);
      // setTimeout(() => {
      //   var adsplash = game.add.sprite(game.world.centerX, game.world.centerY, 'adSplashKan');
      //   adsplash.scale.setTo(0.5, 0.5);
      //   adsplash.anchor.setTo(0.5);
      // }, 3000);
      // setTimeout(() => {
      game.state.start('mainScreen', true, false, this.app_Mode);
      // }, 4000);



    }, this);

    // for force update
    var _this = this;

    // app.checkForceUpdate(game, function () {
    //   game.time.events.add(1000, function () {
    //     game.time.events.removeAll();
    //     game.state.start('mainScreen', true, false, _this.app_Mode);

    //   }, _this);
    // });

  },
  // for force update
  checkForceUpdate: function (game, onAllowedToProceed) {
    var _this = this;
    var url = app.UPDATE_CONFIG_URL + "?t=" + Date.now();

    function compareVersions(v1, v2) {
      var a = v1.split('.').map(Number);
      var b = v2.split('.').map(Number);

      var len = Math.max(a.length, b.length);

      for (var i = 0; i < len; i++) {
        var num1 = a[i] || 0;
        var num2 = b[i] || 0;

        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
      }

      return 0;
    }

    fetch(url)
      .then(function (response) {
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.json();
      })
      .then(function (config) {
        var forceUpdate = (config.forceUpdate === undefined) ? true : !!config.forceUpdate;
        var minVersionName = config.minVersionName;
        var storeUrl = config.storeUrl || app.DEFAULT_STORE_URL;
        var message = config.message || "A new version is required to continue.";

        if (
          forceUpdate &&
          compareVersions(minVersionName, app.APP_VERSION_NAME) === 1
        ) {
          app.showForceUpdateScreen(game, message, storeUrl);
        } else {
          onAllowedToProceed();
        }
      })
      .catch(function (err) {
        console.log("Force update check failed:", err);
        onAllowedToProceed();
      });
  },
  // for force update
  showForceUpdateScreen: function (game, message, storeUrl) {

    // ===== Overlay =====
    var overlay = game.add.graphics(0, 0);
    overlay.beginFill(0x000000, 0.7);
    overlay.drawRect(0, 0, 540, 960);
    overlay.endFill();

    // ===== Popup Group =====
    var popup = game.add.group();

    var panelWidth = 460;
    var panelHeight = 400;
    var panelX = (540 - panelWidth) / 2;
    var panelY = (960 - panelHeight) / 2;

    // Shadow
    var shadow = game.add.graphics(panelX + 6, panelY + 6);
    shadow.beginFill(0x000000, 0.25);
    shadow.drawRoundedRect(0, 0, panelWidth, panelHeight, 20);
    shadow.endFill();
    popup.add(shadow);

    // Panel
    var panel = game.add.graphics(panelX, panelY);
    panel.beginFill(0xFFFFFF, 1);
    panel.lineStyle(2, 0xE0E0E0, 1);
    panel.drawRoundedRect(0, 0, panelWidth, panelHeight, 20);
    panel.endFill();
    popup.add(panel);

    // ===== Logo Image =====
    var logo = game.add.sprite(panelX + panelWidth / 2, panelY + 70, 'logo');
    logo.anchor.set(0.5);
    logo.scale.setTo(0.5);   // adjust if needed
    popup.add(logo);

    // ===== Title =====
    var title = game.add.text(panelX + panelWidth / 2, panelY + 150, "Update Required");
    title.anchor.set(0.5);
    title.font = "regfont4";
    title.fontSize = "26px";
    title.fill = "#333333";
    popup.add(title);

    // ===== Message =====
    var msg = game.add.text(panelX + panelWidth / 2, panelY + 210, message);
    msg.anchor.set(0.5);
    msg.align = "center";
    msg.font = "regfont3";
    msg.fontSize = "18px";
    msg.fill = "#666666";
    msg.wordWrap = true;
    msg.wordWrapWidth = panelWidth - 60;
    popup.add(msg);

    // ===== Yellow Button (Drawn, No Sprite) =====
    var btnWidth = 230;
    var btnHeight = 65;
    var btnX = panelX + panelWidth / 2;
    var btnY = panelY + panelHeight - 80;

    var button = game.add.graphics(btnX - btnWidth / 2, btnY - btnHeight / 2);
    button.beginFill(0xF5D300, 1); // Building Blocks yellow
    button.drawRoundedRect(0, 0, btnWidth, btnHeight, 20);
    button.endFill();
    button.inputEnabled = true;
    button.input.useHandCursor = true;
    popup.add(button);

    // Button Text (Dark for contrast)
    var btnTxt = game.add.text(btnX, btnY + 5, "UPDATE NOW");
    btnTxt.anchor.set(0.5);
    btnTxt.font = "regfont1";
    btnTxt.fontSize = "20px";
    btnTxt.fill = "#1A1A1A";
    popup.add(btnTxt);

    // ===== Button Animations =====

    // Pulse animation
    var pulseTween = game.add.tween(button.scale)
      .to({ x: 0.98, y: 0.98 }, 700, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);

    // Hover effects
    button.events.onInputOver.add(function () {
      game.add.tween(button.scale)
        .to({ x: 1.03, y: 1.03 }, 120, Phaser.Easing.Quadratic.Out, true);
    });

    button.events.onInputOut.add(function () {
      game.add.tween(button.scale)
        .to({ x: 0.92, y: 0.92 }, 120, Phaser.Easing.Quadratic.Out, true);
    });

    // ===== Popup Entrance Animation =====
    popup.scale.setTo(0.9);
    popup.alpha = 0;

    game.add.tween(popup.scale)
      .to({ x: 1, y: 1 }, 450, Phaser.Easing.Back.Out, true);

    game.add.tween(popup)
      .to({ alpha: 1 }, 300, Phaser.Easing.Linear.None, true);

    // ===== Button Click Action =====
    button.events.onInputDown.add(function () {

      pulseTween.stop();

      game.add.tween(button.scale)
        .to({ x: 0.88, y: 0.88 }, 100, Phaser.Easing.Quadratic.In, true);

      try {
        if (typeof nativeApp !== "undefined" && nativeApp.openPlaystore) {
          nativeApp.openPlaystore(storeUrl);
        } else {
          window.open(storeUrl, "_system");
        }
      } catch (e) {
        window.open(storeUrl, "_system");
      }

      setTimeout(function () {
        if (navigator.app && navigator.app.exitApp) {
          navigator.app.exitApp();
        }
      }, 1400);


    }, this);
  },

};


function initFirebasePush() {
  if (!window.FirebasePlugin) {
    console.warn("FirebasePlugin not available");
    return;
  }

  FirebasePlugin.hasPermission(function (hasPermission) {
    if (!hasPermission) {
      FirebasePlugin.grantPermission(
        function () { console.log("Push permission granted"); },
        function (err) { console.error("grantPermission failed", err); }
      );
    }
  }, function (err) {
    console.error("hasPermission failed", err);
  });

  // 1️⃣ Get FCM token
  FirebasePlugin.getToken(function (token) {
    console.log("FCM token:", token);
    if (!token || token === "null" || token.trim() === "") {
      console.warn("FCM token not ready, skipping...");
      return;
    }
    // persist token so other screens can access it
    localStorage.setItem("fcm_token", token);

    syncFcmTokenSimple(token);

  }, function (err) {
    console.error("Failed to get FCM token", err);
  });

  // 2️⃣ Token refresh
  FirebasePlugin.onTokenRefresh(function (token) {
    console.log("FCM token refreshed:", token);
    if (!token || token === "null" || token.trim() === "") {
      console.warn("Refreshed token invalid, skipping...");
      return;
    }

    localStorage.setItem("fcm_token", token);

    syncFcmTokenSimple(token);

  }, function (err) {
    console.error("onTokenRefresh error", err);
  });

  // 3️⃣ Receive notifications
  FirebasePlugin.onMessageReceived(function (message) {
    console.log("Push message received:", message);
    console.log("FULL MESSAGE:", JSON.stringify(message));
    // Notification tapped
    var isTapped = message.tap || message.wasTapped || false;

    if (isTapped) {
      tracknotificationopen(message);
    }

    // fallback: if app opened via notification
    if (message.notification_type) {
      tracknotificationopen(message);
    }
  }, function (err) {
    console.error("onMessageReceived error", err);
  });
}

function tracknotificationopen(message) {
  try {
    var notificationType =
      message.notification_type ||
      (message.data && message.data.notification_type) ||
      "";

    var accessToken =
      localStorage.getItem("access_token") ||
      localStorage.getItem("acc_token") ||
      window.acctkn ||
      "";

    if (!notificationType) {
      console.warn("tracknotificationopen skipped: notification_type missing", message);
      return;
    }

    if (!accessToken) {
      console.warn("Access token missing, storing notification for later");

      try {
        localStorage.setItem("pending_notification", JSON.stringify(message));
      } catch (e) {
        console.error("Failed to store pending notification", e);
      }

      return;
    }

    console.log(window.ApiConfig.url("tracknotificationopen"), "tracknotificationopen api call");

    var apiurl = window.ApiConfig.url("tracknotificationopen");

    fetch(apiurl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_token: accessToken,
        notification_type: notificationType
      })
    })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        console.log("tracknotificationopen response:", d);
      })
      .catch(function (e) {
        console.error("tracknotificationopen failed:", e);
      });

  } catch (e) {
    console.error("tracknotificationopen exception:", e);
  }
}

function flushPendingNotification() {
  try {
    var pending = localStorage.getItem("pending_notification");
    if (!pending) return;

    var message = JSON.parse(pending);

    console.log("Processing pending notification after login");

    localStorage.removeItem("pending_notification");

    tracknotificationopen(message);

  } catch (e) {
    console.error("Failed to process pending notification", e);
  }
}

function getStoredAccessToken() {
  return (
    localStorage.getItem("access_token") ||
    localStorage.getItem("acc_token") ||
    window.acctkn ||
    ""
  );
}

function sendFcmTokenToBackend(token, accessTokenOverride) {
  const accessToken = accessTokenOverride || getStoredAccessToken();

  if (!token) return;

  if (!accessToken) {
    localStorage.setItem("pending_fcm_token", token);
    console.warn("No access token, skipping FCM send");
    return;
  }

  var saveTokenUrl = window.ApiConfig.url('savefcmtoken');
  fetch(saveTokenUrl, {//https://abbmath.klp.org.in/abbchmprm/api/savefcmtoken.php
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_token: accessToken,
      fcm_token: token
    })
  })
    .then(r => r.json())
    .then(d => {
      console.log("savefcmtoken response:", d);
      if (d && d.status === "success") {
        localStorage.removeItem("pending_fcm_token");
        localStorage.setItem("last_sent_fcm_token", token);
      } else {
        localStorage.setItem("pending_fcm_token", token);
      }
    })
    .catch(e => {
      localStorage.setItem("pending_fcm_token", token);
      console.error("savefcmtoken failed:", e);
    });
}

function syncFcmTokenSimple(token) {
  try {
    if (!token || token === "null" || token.trim() === "") {
      console.warn("Invalid token, skipping sync");
      return;
    }

    var accessToken =
      localStorage.getItem("access_token") ||
      localStorage.getItem("acc_token") ||
      window.acctkn ||
      "";

    if (!token) return;

    var lastSentToken = localStorage.getItem("last_sent_fcm_token");

    // Prevent sending same token again
    if (lastSentToken === token) {
      console.log("FCM token already synced, skipping...");
      return;
    }

    if (!accessToken) {
      // store and send later
      localStorage.setItem("pending_fcm_token", token);
      console.warn("Access token missing, will send later");
      return;
    }

    console.log("Sending FCM token to backend...");
    sendFcmTokenToBackend(token, accessToken);


  } catch (e) {
    console.error("syncFcmTokenSimple error:", e);
  }
}

function successFunction() {
  console.log('Immersive mode set successfully.');
}

function errorFunction(error) {
  console.error('Error setting immersive mode:', error);
}
app.initialize();