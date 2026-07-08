Game.appLoginEditScreen = function () { };

Game.appLoginEditScreen.prototype = {
  init: function (user) {
    _this = this;
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

    _this.user = user;
    console.log(_this.user);
    console.log(this.user.uid, "this.user.uid", this.user, "this.user");

    var accessToken = this.user && this.user.uid ? this.user.uid : "";
    window.acctkn = accessToken;
  },

  preload: function (game) {

  },

  onDeviceReady: function () {
    //this.receivedEvent('deviceready');
    AndroidFullScreen.immersiveMode(successFunction, errorFunction);
  },

  create: function (game) {
    _this = this;

    _this.i = 0;

    _this.basePath =
      cordova.file.externalRootDirectory +
      "Android/data/com.akshara.BBplusplusOffKan/Files/Download/.gameFilesBBV5_0_5/www/";

    _this.fullSize = 121195371;

    _this.zipFiles = [
      ["Assets1.zip", 26430143],
      ["Assets2.zip", 39780906],
      ["Assets3.zip", 18453216],
      ["Assets4.zip", 14402031],
      ["Assets5.zip", 19891065],
      ["Assets6.zip", 19889389],
      ["English.zip", 23759971],
      ["Kannada.zip", 25787866],
      ["Hindi.zip", 25508626],
      ["Odiya.zip", 40129117],
      ["Gujarati.zip", 31882078],
      ["questionSounds.zip", 162758079],
    ];

    _this.counter = 0;
    _this.counter1 = 0;

    //alert(_this.user.language);

    if (_this.user.language == "English") {
      _this.fileCheck = [
        [_this.basePath + "questionSounds/1.1A/English", "English.zip"],
        [_this.basePath + "assets/commonAssets", "Assets1.zip"],
        [_this.basePath + "assets/demoVideos", "Assets2.zip"],
        [_this.basePath + "assets/conversion", "Assets3.zip"],
        [_this.basePath + "assets/questionSounds/shoppingGame", "Assets4.zip"],
        [_this.basePath + "assets/gradeAssets/4.1", "Assets5.zip"],
        [_this.basePath + "assets/gradeAssets/6.1", "Assets6.zip"],
        [_this.basePath + "assets/DH1", "Assets6New.zip"],
        [_this.basePath + "assets/AddNew", "Assets16.zip"],
      ];
    } else if (_this.user.language == "Hindi") {
      _this.fileCheck = [
        [_this.basePath + "questionSounds/1.1A/Hindi", "Hindi.zip"],
        [_this.basePath + "assets/commonAssets", "Assets1.zip"],
        [_this.basePath + "assets/demoVideos", "Assets2.zip"],
        [_this.basePath + "assets/conversion", "Assets3.zip"],
        [_this.basePath + "assets/questionSounds/shoppingGame", "Assets4.zip"],
        [_this.basePath + "assets/gradeAssets/4.1", "Assets5.zip"],
        [_this.basePath + "assets/gradeAssets/6.1", "Assets6.zip"],
        [_this.basePath + "assets/DH1", "Assets6New.zip"],
        [_this.basePath + "assets/AddNew", "Assets16.zip"],
      ];
    } else if (_this.user.language == "Kannada") {
      _this.fileCheck = [
        [_this.basePath + "questionSounds/1.1A/Kannada", "Kannada.zip"],
        [_this.basePath + "assets/commonAssets", "Assets1.zip"],
        [_this.basePath + "assets/demoVideos", "Assets2.zip"],
        [_this.basePath + "assets/conversion", "Assets3.zip"],
        [_this.basePath + "assets/questionSounds/shoppingGame", "Assets4.zip"],
        [_this.basePath + "assets/gradeAssets/4.1", "Assets5.zip"],
        [_this.basePath + "assets/gradeAssets/6.1", "Assets6.zip"],
        [_this.basePath + "assets/DH1", "Assets6New.zip"],
        [_this.basePath + "assets/AddNew", "Assets16.zip"],
      ];
    } else if (_this.user.language == "Odiya") {
      _this.fileCheck = [
        [_this.basePath + "questionSounds/1.1A/Odiya", "Odiya.zip"],
        [_this.basePath + "assets/commonAssets", "Assets1.zip"],
        [_this.basePath + "assets/demoVideos", "Assets2.zip"],
        [_this.basePath + "assets/conversion", "Assets3.zip"],
        [_this.basePath + "assets/questionSounds/shoppingGame", "Assets4.zip"],
        [_this.basePath + "assets/gradeAssets/4.1", "Assets5.zip"],
        [_this.basePath + "assets/gradeAssets/6.1", "Assets6.zip"],
        [_this.basePath + "assets/DH1", "Assets6New.zip"],
        [_this.basePath + "assets/AddNew", "Assets16.zip"],
      ];
    } else if (_this.user.language == "Gujarati") {
      _this.fileCheck = [
        [_this.basePath + "questionSounds/Gujarati", "Gujarati.zip"],
        [_this.basePath + "assets/commonAssets", "Assets1.zip"],
        [_this.basePath + "assets/demoVideos", "Assets2.zip"],
        [_this.basePath + "assets/conversion", "Assets3.zip"],
        [_this.basePath + "assets/questionSounds/shoppingGame", "Assets4.zip"],
        [_this.basePath + "assets/gradeAssets/4.1", "Assets5.zip"],
        [_this.basePath + "assets/gradeAssets/6.1", "Assets6.zip"],
        [_this.basePath + "assets/DH1", "Assets6New.zip"],
        [_this.basePath + "assets/AddNew", "Assets16.zip"],
      ];
    } else if (_this.user.language == "Marathi") {
      _this.fileCheck = [
        [_this.basePath + "questionSounds/1.1A/Marathi", "Marathi.zip"],
        [_this.basePath + "assets/commonAssets", "Assets1.zip"],
        [_this.basePath + "assets/demoVideos", "Assets2.zip"],
        [_this.basePath + "assets/conversion", "Assets3.zip"],
        [_this.basePath + "assets/questionSounds/shoppingGame", "Assets4.zip"],
        [_this.basePath + "assets/gradeAssets/4.1", "Assets5.zip"],
        [_this.basePath + "assets/gradeAssets/6.1", "Assets6.zip"],
        [_this.basePath + "assets/DH1", "Assets6New.zip"],
        [_this.basePath + "assets/AddNew", "Assets16.zip"],
      ];
    } else if (_this.user.language == "Telugu") {
      _this.fileCheck = [
        [_this.basePath + "questionSounds/1.1A/Telugu", "Telugu.zip"],
        [_this.basePath + "assets/commonAssets", "Assets1.zip"],
        [_this.basePath + "assets/demoVideos", "Assets2.zip"],
        [_this.basePath + "assets/conversion", "Assets3.zip"],
        [_this.basePath + "assets/questionSounds/shoppingGame", "Assets4.zip"],
        [_this.basePath + "assets/gradeAssets/4.1", "Assets5.zip"],
        [_this.basePath + "assets/gradeAssets/6.1", "Assets6.zip"],
        [_this.basePath + "assets/DH1", "Assets6New.zip"],
        [_this.basePath + "assets/AddNew", "Assets16.zip"],
      ];
    } else if (_this.user.language == "Tamil") {
      _this.fileCheck = [
        [_this.basePath + "questionSounds/1.1A/Tamil", "Tamil.zip"],
        [_this.basePath + "assets/commonAssets", "Assets1.zip"],
        [_this.basePath + "assets/demoVideos", "Assets2.zip"],
        [_this.basePath + "assets/conversion", "Assets3.zip"],
        [_this.basePath + "assets/questionSounds/shoppingGame", "Assets4.zip"],
        [_this.basePath + "assets/gradeAssets/4.1", "Assets5.zip"],
        [_this.basePath + "assets/gradeAssets/6.1", "Assets6.zip"],
        [_this.basePath + "assets/DH1", "Assets6New.zip"],
        [_this.basePath + "assets/AddNew", "Assets16.zip"],
      ];
    } else if (_this.user.language == "Urdu") {
      _this.fileCheck = [
        [_this.basePath + "questionSounds/1.1A/Urdu", "Urdu.zip"],
        [_this.basePath + "assets/commonAssets", "Assets1.zip"],
        [_this.basePath + "assets/demoVideos", "Assets2.zip"],
        [_this.basePath + "assets/conversion", "Assets3.zip"],
        [_this.basePath + "assets/questionSounds/shoppingGame", "Assets4.zip"],
        [_this.basePath + "assets/gradeAssets/4.1", "Assets5.zip"],
        [_this.basePath + "assets/gradeAssets/6.1", "Assets6.zip"],
        [_this.basePath + "assets/DH1", "Assets6New.zip"],
        [_this.basePath + "assets/AddNew", "Assets16.zip"],
      ];
    }

    _this.splash = game.add.sprite(
      game.world.centerX,
      game.world.centerY,
      "registrationbg"
    );
    _this.splash.scale.setTo(1);
    _this.splash.anchor.setTo(0.5);

    var titleBar = game.add.graphics(0, 0);
    titleBar.anchor.setTo(0.5);
    titleBar.lineStyle(2, 0x000000, 0.8);
    titleBar.beginFill(0x4e342e, 1);
    titleBar.drawRect(0, 0, 540, 80);

    _this.regBackArrow = game.add.sprite(40, 40, "regBackArrow");
    _this.regBackArrow.scale.setTo(0.35);
    _this.regBackArrow.anchor.setTo(0.5);

    var regBackArrowGrph = game.add.graphics(0, 0);
    regBackArrowGrph.beginFill(0x4e342e, 0.05);
    regBackArrowGrph.drawRect(-60, -60, 200, 200);
    _this.regBackArrow.addChild(regBackArrowGrph);

    document.addEventListener(
      "backbutton",
      function (e) {
        e.preventDefault();
      },
      false
    );

    var titleTxt = game.add.text(game.world.centerX - 5, 45, "Building Blocks 1-5 by Akshara");
    titleTxt.x = Math.round(titleTxt.x);
    titleTxt.anchor.setTo(0.5);
    titleTxt.align = "center";
    titleTxt.font = "regfont4";
    titleTxt.fontSize = "22pt";
    titleTxt.fontWeight = 500;
    titleTxt.fill = "#FFFFFF";
    titleTxt.wordWrap = true;
    titleTxt.wordWrapWidth = 500;

    var welcomeTextMap = {
      English: "Welcome to \n Building Blocks",
      Hindi: "बिल्डिंग ब्लॉक्स में \n आपका स्वागत है",
      Kannada: "ಬಿಲ್ಡಿಂಗ್ ಬ್ಲಾಕ್ಸ್‌ಗೆ \n ಸ್ವಾಗತ",
      Odiya: "ବିଲ୍ଡିଂ ବ୍ଲକ୍ସକୁ \n ସ୍ୱାଗତ",
      Gujarati: "બિલ્ડિંગ બ્લોક્સમાં \n આપનું સ્વાગત છે",
      Marathi: "बिल्डिंग ब्लॉक्समध्ये \n आपले स्वागत आहे",
      Telugu: "బిల్డింగ్ బ్లాక్స్‌కు \n స్వాగతం",
      Tamil: "பில்டிங் பிளாக்ஸ் இற்கு \n வரவேற்கிறோம்",
      Urdu: "بلڈنگ بلاکس میں \n خوش آمدید"
    };

    var welcome = welcomeTextMap[_this.user && _this.user.language] || welcomeTextMap.English;

    var selectPicTxt = game.add.text(game.world.centerX, 150, welcome);

    selectPicTxt.x = Math.round(selectPicTxt.x);
    selectPicTxt.anchor.setTo(0.5);
    selectPicTxt.align = 'center';
    selectPicTxt.font = 'regfont3';
    selectPicTxt.fontSize = '26pt';
    selectPicTxt.fontWeight = 0;
    selectPicTxt.fill = '#494949';
    selectPicTxt.wordWrap = true;
    selectPicTxt.wordWrapWidth = 500;

    var avatar = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');//_this.user.name.toLowerCase()

    avatar.scale.setTo(0.8);
    avatar.anchor.setTo(0.5);

    _this.regandstsrtBtn = _this.add.sprite(
      game.world.centerX,
      game.world.centerY + 150,
      "regandstsrtBtn"
    );
    _this.regandstsrtBtn.scale.setTo(0.8, 1);
    _this.regandstsrtBtn.anchor.setTo(0.5);

    var textLang = "";
    if (_this.user.language == "Hindi") {
      textLang = "शुरु";
    } else if (_this.user.language == "Kannada") {
      textLang = "ಪ್ರಾರಂಭಿಸಿ";
    } else if (_this.user.language == "Odiya") {
      textLang = "ଆରମ୍ଭ କରନ୍ତ";
    } else if (_this.user.language == "Gujarati") {
      textLang = "શરૂ કરો";
    } else if (_this.user.language == "Marathi") {
      textLang = "सुरू करा";
    } else if (_this.user.language == "Telugu") {
      textLang = "ప్రారంభించండి";
    } else if (_this.user.language == "Tamil") {
      textLang = "தொடக்கம்";
    } else if (_this.user.language == "Urdu") {
      textLang = "شروع کیجئے";
    } else {
      textLang = "START";
    }

    _this.regandstsrtBtnTxt = _this.add.text(
      game.world.centerX,
      game.world.centerY + 152,
      textLang
    );
    _this.regandstsrtBtnTxt.x = Math.round(_this.regandstsrtBtnTxt.x);
    _this.regandstsrtBtnTxt.anchor.setTo(0.5);
    _this.regandstsrtBtnTxt.align = "center";
    _this.regandstsrtBtnTxt.font = "regfont1";
    _this.regandstsrtBtnTxt.letterSpacing = 15;
    _this.regandstsrtBtnTxt.fontSize = "16pt";
    _this.regandstsrtBtnTxt.fontWeight = 500;
    _this.regandstsrtBtnTxt.fill = "#FFFFFF";
    _this.regandstsrtBtnTxt.wordWrap = true;
    _this.regandstsrtBtnTxt.wordWrapWidth = 500;

    _this.userEditBtn = _this.add.sprite(
      game.world.centerX - 150,
      game.world.centerY,
      "userEditBtn"
    );
    _this.userEditBtn.scale.setTo(0.4);
    _this.userEditBtn.anchor.setTo(0.5);
    _this.userEditBtn.inputEnabled = true;
    _this.userEditBtn.events.onInputDown.add(function () {
      _this.state.start("editLangScreen", true, false, _this.user);
    }, _this);

    _this.userProgressBtn = _this.add.sprite(
      game.world.centerX + 150,
      game.world.centerY,
      "userProgressBtn"
    );
    _this.userProgressBtn.scale.setTo(0.4);
    _this.userProgressBtn.anchor.setTo(0.5);
    _this.userProgressBtn.inputEnabled = true;
    _this.userProgressBtn.events.onInputDown.add(function () {
      _this.state.start("index2", true, false, _this.user, "true");
    }, _this);

    //* _this.checkIfAllAssetsPresent() was used in earlier BB version in order to download the assets from server as zip
    //* we are changing it now in BB & BB++ combined version we are making it online so we dont want this
    //* _this.checkIfAllAssetsPresent() function anymore
    // _this.checkIfAllAssetsPresent();
    _this.regBackArrow.inputEnabled = true;
    _this.regBackArrow.events.onInputDown.add(function () {
      console.log(_this.user, "APPLOgEDitScreen Back btn !!!");
      // _this.state.start("appLoginScreen", true, false, _this.user.language);
      _this.state.start('mainScreen', true, false, "online");
    }, _this);

    document.addEventListener("backbutton", _this.goback, false);

    _this.regandstsrtBtn.inputEnabled = true;
    _this.regandstsrtBtn.events.onInputDown.add(function () {
      FirebasePlugin.logEvent("Button_click_start", {
        Button_click_start: "",
        item_id: "",
      });
      console.log(_this.user, "moving to index 2 !");
      _this.state.start("index2", true, false, _this.user, false);
    }, _this);
  },

  checkFileSize: function () {
    console.log("here");
    window.resolveLocalFileSystemURL(
      _this.basePath,
      function (fileSystem) {
        console.log("file present");

        var reader = fileSystem.createReader();
        reader.readEntries(
          function (entries) {
            console.log(entries[1]);
          },
          function (err) {
            console.log(err);
          }
        );
      },
      function (error) {
        console.log("file not present:download");
        _this.counter = 0;
        _this.checkIfAllAssetsPresent();
      }
    );
  },

  displayMessageAndDownloadAgain: function () {
    _this.splash.alpha = 0.5;

    _this.progressGroup = _this.add.group();

    _this.graphics = _this.add.graphics(10, 50);
    _this.graphics.lineStyle(1, 0x000000, 0);
    _this.graphics.beginFill(0xffffff, 1);
    _this.graphics.drawRoundedRect(10, 350, 500, 260, 5);
    _this.graphics.inputEnabled = true;
    _this.graphics.events.onInputDown.add(function () {
      //do nothing
    }, _this);

    _this.pleaseWaitTxt = _this.add.text(55, 430, "Please wait..");
    _this.pleaseWaitTxt.x = Math.round(_this.pleaseWaitTxt.x);
    //_this.pleaseWaitTxt.anchor.setTo(0.5);
    _this.pleaseWaitTxt.align = "center";
    _this.pleaseWaitTxt.font = "regfont4";
    _this.pleaseWaitTxt.fontSize = "22pt";
    _this.pleaseWaitTxt.fontWeight = "normal";
    _this.pleaseWaitTxt.fill = "#000000";
    _this.pleaseWaitTxt.wordWrap = true;
    _this.pleaseWaitTxt.wordWrapWidth = 500;

    _this.downloadProgressTxt = _this.add.text(55, 470, "Download in progress");
    _this.downloadProgressTxt.x = Math.round(_this.downloadProgressTxt.x);
    //_this.downloadProgressTxt.anchor.setTo(0.5);
    _this.downloadProgressTxt.align = "center";
    _this.downloadProgressTxt.font = "regfont3";
    _this.downloadProgressTxt.fontSize = "16pt";
    _this.downloadProgressTxt.fontWeight = "normal";
    _this.downloadProgressTxt.fill = "#000000";
    _this.downloadProgressTxt.wordWrap = true;
    _this.downloadProgressTxt.wordWrapWidth = 500;

    _this.regloding = _this.add.sprite(50, 580, "regloding");
    _this.regloding.scale.setTo(0.48, 0.5);
    _this.regloding.frame = 0;

    _this.progressPercentageTxt = _this.add.text(50, 600, "0%");
    _this.progressPercentageTxt.x = Math.round(_this.progressPercentageTxt.x);
    //_this.downloadProgressTxt.anchor.setTo(0.5);
    _this.progressPercentageTxt.align = "center";
    _this.progressPercentageTxt.font = "regfont4";
    _this.progressPercentageTxt.fontSize = "16pt";
    _this.progressPercentageTxt.fontWeight = "normal";
    _this.progressPercentageTxt.fill = "#000000";
    _this.progressPercentageTxt.wordWrap = true;
    _this.progressPercentageTxt.wordWrapWidth = 500;

    _this.progressPercentageTxt2 = _this.add.text(420, 600, "0/100");
    _this.progressPercentageTxt2.x = Math.round(_this.progressPercentageTxt2.x);
    //_this.progressPercentageTxt2.anchor.setTo(0.5);
    _this.progressPercentageTxt2.align = "center";
    _this.progressPercentageTxt2.font = "regfont3";
    _this.progressPercentageTxt2.fontSize = "16pt";
    _this.progressPercentageTxt2.fontWeight = "normal";
    _this.progressPercentageTxt2.fill = "#000000";
    _this.progressPercentageTxt2.wordWrap = true;
    _this.progressPercentageTxt2.wordWrapWidth = 500;

    _this.noOfAssets = _this.add.text(300, 470, "1/6");
    _this.noOfAssets.x = Math.round(_this.noOfAssets.x);
    //_this.progressPercentageTxt2.anchor.setTo(0.5);
    _this.noOfAssets.align = "center";
    _this.noOfAssets.font = "regfont3";
    _this.noOfAssets.fontSize = "16pt";
    _this.noOfAssets.fontWeight = "normal";
    _this.noOfAssets.fill = "#000000";
    _this.noOfAssets.wordWrap = true;
    _this.noOfAssets.wordWrapWidth = 500;
    _this.noOfAssets.visible = false;

    _this.progressGroup.add(_this.graphics);
    _this.progressGroup.add(_this.pleaseWaitTxt);
    _this.progressGroup.add(_this.downloadProgressTxt);
    _this.progressGroup.add(_this.regloding);
    _this.progressGroup.add(_this.progressPercentageTxt);
    _this.progressGroup.add(_this.progressPercentageTxt2);
    _this.progressGroup.add(_this.noOfAssets);
  },

  fileChecker: function (filepath, filename) {
    window.resolveLocalFileSystemURL(
      filepath,
      function (fileEntry) {
        console.log("file present");
        _this.counter++;
        _this.checkIfAllAssetsPresent();
      },
      function (error) {
        console.log("file not present:download" + filename);
        _this.downloadFiles(filename);
      }
    );
  },

  checkIfAllAssetsPresent: function () {
    if (_this.counter < _this.fileCheck.length)
      _this.fileChecker(
        _this.fileCheck[_this.counter][0],
        _this.fileCheck[_this.counter][1]
      );
    else {
      //_this.checkFileSize();

      _this.regBackArrow.inputEnabled = true;
      _this.regBackArrow.events.onInputDown.add(function () {
        // _this.state.start("appLoginScreen", true, false);
        _this.state.start('mainScreen', true, false, "online");
      }, _this);

      document.addEventListener("backbutton", _this.goback, false);

      _this.regandstsrtBtn.inputEnabled = true;
      _this.regandstsrtBtn.events.onInputDown.add(function () {
        FirebasePlugin.logEvent("Button_click_start", {
          Button_click_start: "",
          item_id: "",
        });
        _this.state.start("index2", true, false, _this.user, false);
      }, _this);
    }
  },

  goback: function (e) {
    document.removeEventListener("backbutton", _this.goback, false);
    // _this.state.start("appLoginScreen", true, false);
    _this.state.start('mainScreen', true, false, "online");
  },

  downloadFiles: function (filename) {
    if (
      navigator.connection.type != "none" &&
      navigator.connection.type != "unknown" &&
      navigator.connection.type != null &&
      navigator.connection.type != "undefined"
    ) {
      _this.displayMessageAndDownloadAgain();

      _this.baseUrl = "https://abbmath.klp.org.in/bbOfflineAssets/bb5_0_5/";
      //_this.baseUrl = "https://10.0.2.2/abbchmprm/assets/bb5_0_5/";
      var fileTransfer = new FileTransfer();

      fileTransfer.onprogress = function (progressEvent) {
        if (progressEvent.lengthComputable) {
          //loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
          _this.regloding.frame =
            Math.round((progressEvent.loaded / progressEvent.total) * 100) - 1;
          _this.progressPercentageTxt.text =
            Math.round((progressEvent.loaded / progressEvent.total) * 100) +
            "%";
          _this.progressPercentageTxt2.text =
            Math.round((progressEvent.loaded / progressEvent.total) * 100) +
            "/100";

          if (
            filename != "English.zip" &&
            filename != "Hindi.zip" &&
            filename != "Kannada.zip" &&
            filename != "Odiya.zip" &&
            filename != "Gujarati.zip" &&
            filename != "Marathi.zip" &&
            filename != "Telugu.zip" &&
            filename != "Tamil.zip" &&
            filename != "Urdu.zip"
          ) {
            if (filename == "Assets1.zip") _this.noOfAssets.text = "1/7";
            else if (filename == "Assets2.zip") _this.noOfAssets.text = "2/7";
            else if (filename == "Assets3.zip") _this.noOfAssets.text = "3/7";
            else if (filename == "Assets4.zip") _this.noOfAssets.text = "4/7";
            else if (filename == "Assets5.zip") _this.noOfAssets.text = "5/7";
            else if (filename == "Assets6.zip") _this.noOfAssets.text = "6/7";
            else if (filename == "Assets6New.zip")
              _this.noOfAssets.text = "7/7";
            else if (filename == "Assets16.zip") _this.noOfAssets.text = "7/7";

            _this.noOfAssets.visible = true;
          }
          console.log((progressEvent.loaded / progressEvent.total) * 100);
        } else {
          //loadingStatus.increment();
          //console.log(loadingStatus);
        }
      };

      var uri = encodeURI(_this.baseUrl + filename);
      fileTransfer.download(
        uri,
        _this.basePath + filename,
        function (entry) {
          console.log("download complete: " + entry.toURL());
          _this.unzipFile(_this.basePath, filename);
        },
        function (error) {
          console.log("download error source " + error.source);
          console.log("download error target " + error.target);
          console.log("download error code" + error.code);
          _this.pleaseWaitTxt.text = "Download Failed";
          _this.downloadProgressTxt.text = "Something went wrong.";

          document.addEventListener("online", _this.checkNetwork, false);
          window.plugins.toast.show(
            "something went wrong with download please try again",
            3000,
            "bottom"
          );
        }
      );
    } else {
      window.plugins.toast.show(
        "please check your internet connection and try again",
        3000,
        "bottom"
      );
      document.addEventListener("online", _this.checkNetwork, false);
    }
  },

  checkNetwork: function () {
    document.removeEventListener("online", _this.checkNetwork, false);
    _this.game.state.start("appLoginEditScreen", true, false, _this.user);
  },

  unzipFile: function (path, filename) {
    zip.unzip(
      path + filename,
      _this.basePath,
      function (message) {
        console.log(message);
        if (message == 0) {
          _this.removeZipFile(path, filename);
        } else {
          console.log("error unzipping");
        }
      },
      function (progressEvent) {
        console.log(
          Math.round((progressEvent.loaded / progressEvent.total) * 100)
        );
      }
    );
  },

  removeZipFile: function (path, filename) {
    window.resolveLocalFileSystemURL(path + filename, function (fileEntry) {
      fileEntry.remove(
        function (file) {
          console.log("file removed!");
          _this.progressGroup.destroy();
          _this.splash.alpha = 1;
          _this.checkIfAllAssetsPresent();
        },
        function (error) {
          console.log("error occurred: " + error.code);
        },
        function () {
          console.log("file does not exist");
        }
      );
    });
  },

  shutdown: function () {
    document.removeEventListener("backbutton", _this.goback, false);
  },


};

function successFunction() {
  console.log('Immersive mode set successfully.');
}

function errorFunction(error) {
  console.error('Error setting immersive mode:', error);
}