Game.registrationLangSelectionScreen = function () { };

Game.registrationLangSelectionScreen.prototype = {
  init: function (user) {
    _this = this;
    _this.user = user;
  },

  preload: function (game) { },

  create: function (game) {
    //Fullscreen.off();

    var splash = game.add.sprite(
      game.world.centerX,
      game.world.centerY,
      "registrationbg"
    );
    splash.scale.setTo(1);
    splash.anchor.setTo(0.5);

    var avatarSelected = "Fish"; // only avatar

    var titleBar = game.add.graphics(0, 0);
    titleBar.anchor.setTo(0.5);
    titleBar.lineStyle(2, 0x000000, 0.8);
    titleBar.beginFill(0x4e342e, 1);
    titleBar.drawRect(0, 0, 540, 80);

    if (_this.user) {
      var regBackArrow = game.add.sprite(40, 40, "regBackArrow");
      regBackArrow.scale.setTo(0.35);
      regBackArrow.anchor.setTo(0.5);

      var regBackArrowGrph = game.add.graphics(0, 0);
      regBackArrowGrph.beginFill(0x4e342e, 0.05);
      regBackArrowGrph.drawRect(-60, -60, 200, 200);
      regBackArrow.addChild(regBackArrowGrph);

      regBackArrow.inputEnabled = true;
      regBackArrow.events.onInputDown.add(function () {
        console.log(_this.user, "registrationPicSelectionScreen BB");
        game.state.start("appLoginScreen", true, false); //,lang
      }, this);

      document.addEventListener("backbutton", _this.goback, false);

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
    } else {
      var regBackArrow = game.add.sprite(40, 40, "regBackArrow");
      regBackArrow.scale.setTo(0.35);
      regBackArrow.anchor.setTo(0.5);

      var regBackArrowGrph = game.add.graphics(0, 0);
      regBackArrowGrph.beginFill(0x4e342e, 0.05);
      regBackArrowGrph.drawRect(-60, -60, 200, 200);
      regBackArrow.addChild(regBackArrowGrph);

      regBackArrow.inputEnabled = true;
      regBackArrow.events.onInputDown.add(function () {
        console.log(_this.user, "Back to Main screen bro!");
        game.state.start("mainScreen", true, false, "online"); //,lang
      }, this);

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
    }

    var graphicBg = game.add.sprite(
      game.world.centerX,
      game.world.centerY - 60,
      "graphicBg"
    );
    graphicBg.scale.setTo(0.6, 0.5);
    graphicBg.anchor.setTo(0.5);

    var carrotIcon = game.add.sprite(
      game.world.centerX + 110,
      game.world.centerY - 60,
      "carrotIcon"
    );
    carrotIcon.scale.setTo(0.7);
    carrotIcon.anchor.setTo(0.5);

    var regTickBtn = game.add.sprite(
      game.world.centerX,
      game.world.centerY + 90,
      "regTickBtn"
    );
    regTickBtn.scale.setTo(0.5);
    regTickBtn.anchor.setTo(0.5);

    this.selectLanguageText = game.add.text(
      game.world.centerX - 10,
      game.world.centerY - 57,
      "Select Language"
    );
    this.selectLanguageText.x = Math.round(this.selectLanguageText.x);
    this.selectLanguageText.anchor.setTo(0.5);
    this.selectLanguageText.align = "center";
    this.selectLanguageText.font = "regfont1";
    this.selectLanguageText.fontSize = "17pt";
    this.selectLanguageText.fontWeight = "normal";
    this.selectLanguageText.fill = "#000000";
    this.selectLanguageText.wordWrap = true;
    this.selectLanguageText.wordWrapWidth = 500;

    graphicBg.inputEnabled = true;
    graphicBg.events.onInputDown.add(function (target) {
      target.inputEnabled = false;

      this.languageSelectedGrp = game.add.group();

      var languageList = [
        "Select Language",
        "English",
        "हिंदी",
        "ಕನ್ನಡ",
        "ଓଡ଼ିଆ",
        "ગુજરાતી",
        "मराठी",
        "తెలుగు",
        "தமிழ்",
        "اردو",
      ];
      //var languageList = ["Select Language"];

      var x = game.world.centerX - 140;
      var y = game.world.centerY - 80;

      for (var i = 0; i < languageList.length; i++) {
        if (i != 0) y = y + 55;
        this.createDropDownMenu(
          game,
          languageList[i],
          i,
          x,
          y,
          this.languageSelectedGrp,
          target,
          languageList,
          regTickBtn
        );
      }
    }, this);
  },

  goback: function (e) {
    document.removeEventListener("backbutton", _this.goback, false);
    _this.state.start("appLoginScreen", true, false);//, lang
  },

  createDropDownMenu: function (
    game,
    lang,
    i,
    x,
    y,
    grp,
    targetGpc,
    list,
    regTickBtn
  ) {
    this["languagegraphicsBg" + i] = game.add.graphics(0, 0);
    this["languagegraphicsBg" + i].anchor.setTo(0.5);
    this["languagegraphicsBg" + i].name = lang;
    //this["languagegraphicsBg"+i].lineStyle(2, 0x000000, 0.8);
    this["languagegraphicsBg" + i].beginFill(0xffffff, 1);
    //this["languagegraphicsBg"+i].drawRoundedRect(x, y, 280, 45, 10);
    this["languagegraphicsBg" + i].drawRect(x, y, 280, 55);

    if (i + 1 < 10) {
      this["bdm" + i] = game.add.bitmapData(800, 600);
      this["bdm" + i].ctx.beginPath();
      this["bdm" + i].ctx.lineWidth = "5";
      this["bdm" + i].ctx.strokeStyle = "#000000";
      this["bdm" + i].ctx.setLineDash([2, 3]);
      this["bdm" + i].ctx.moveTo(0, 0);
      this["bdm" + i].ctx.lineTo(280, 0);
      //ctx.moveTo(100, 10);
      //ctx.quadraticCurveTo(230, 150, 250, 20);
      this["bdm" + i].ctx.stroke();
      this["bdm" + i].ctx.closePath();
      this["sprite" + i] = game.add.sprite(x, y + 52, this["bdm" + i]);
    }

    this["languageTxt" + i] = game.add.text(game.world.centerX, y + 28, lang);
    this["languageTxt" + i].x = Math.round(this["languageTxt" + i].x);
    this["languageTxt" + i].anchor.setTo(0.5);
    this["languageTxt" + i].align = "center";
    this["languageTxt" + i].font = "regfont1";
    this["languageTxt" + i].fontSize = "17pt";
    this["languageTxt" + i].fontWeight = "normal";
    this["languageTxt" + i].fill = "#000000";
    this["languageTxt" + i].wordWrap = true;
    this["languageTxt" + i].wordWrapWidth = 500;

    this["languagegraphicsBg" + i].inputEnabled = true;
    this["languagegraphicsBg" + i].events.onInputDown.add(function (target) {
      this.selectLanguageText.text = target.name;
      target.events.onInputDown.removeAll();
      grp.destroy();
      targetGpc.inputEnabled = true;
      regTickBtn.frame = 0;
      regTickBtn.inputEnabled = true;
      regTickBtn.events.onInputDown.removeAll();

      if (this.selectLanguageText.text !== list[0]) {
        regTickBtn.frame = 1;
        regTickBtn.inputEnabled = true;
        regTickBtn.events.onInputDown.add(function (targets) {
          var lang = null;

          if (target.name == "हिंदी") lang = "Hindi";
          else if (target.name == "ಕನ್ನಡ") lang = "Kannada";
          else if (target.name == "ଓଡ଼ିଆ") lang = "Odiya";
          else if (target.name == "ગુજરાતી") lang = "Gujarati";
          else if (target.name == "मराठी") lang = "Marathi";
          else if (target.name == "తెలుగు") lang = "Telugu";
          else if (target.name == "தமிழ்") lang = "Tamil";
          else if (target.name == "اردو") lang = "Urdu";
          else lang = "English";

          FirebasePlugin.logEvent("Select_language", {
            Select_language: lang,
            item_id: "",
          });
          FirebasePlugin.logEvent("Selected_Avatar", {
            Selected_Avatar: "Fish",
            item_id: "",
          });
          FirebasePlugin.logEvent("Button_click_tick_register", {
            Button_click_tick_regst: "",
            item_id: "",
          });
          this.register(targets, "Fish", lang);
        }, this);
      }
    }, this);

    //   FirebasePlugin.logEvent("Select_language", {
    //     Select_language: lang,
    //     item_id: "",
    //   });

    //   game.state.start(
    //     "registrationPicSelectionScreen",
    //     true,
    //     false,
    //     lang,
    //     _this.user
    //   );
    // }, this);
    //   }
    // }, this);

    grp.add(this["languagegraphicsBg" + i]);
    if (i + 1 < 10) grp.add(this["sprite" + i]);
    grp.add(this["languageTxt" + i]);
  },

  register: function (target, avatarSelected, lang) {
    target.inputEnabled = false;
    FirebasePlugin.getInstallationId(function (id) {
      console.log("Got installation ID: " + id);
      _this.language = lang;
      var fcmToken = localStorage.getItem("pending_fcm_token") || localStorage.getItem("fcm_token") || "";
      var lastLogin = new Date().toISOString();

      console.log(window.ApiConfig.url('register'), "register url");
      //var jsondata = { name: avatarSelected, gender: null, schooltype: "0", geo: "77.580643,12.972442", grade: "1st Grade", deviceid: device.serial + "_" + device.uuid, language: this.language, organization: "Akshara" };
      var jsondata = { name: avatarSelected, schooltype: "0", geo: "77.580643,12.972442", grade: "1st Grade", deviceid: id, language: _this.language, organization: "Akshara", avatarpic: avatarSelected, fcm_token: fcmToken, last_login: lastLogin, app_version_name: app.APP_VERSION_NAME };
      //var jsondata = {name:avatarSelected,gender:null,schooltype:"0",geo:"77.580643,12.972442",grade:"1st Grade",deviceid:123456,language:_this.language,organization:"Akshara"};
      console.log(jsondata);
      if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
        // var apiurl = "https://abbmath.klp.org.in/abbchmprm/register";
        console.log("inside api call register-------------------");
        console.log(window.ApiConfig.url('register'), "register url");
        var apiurl = window.ApiConfig.url('register');
        //var apiurl = "https://10.0.2.2/abbchmprm/register";         		        
        $.ajax({
          url: apiurl,
          type: "POST",
          dataType: "text",
          // dataType: "json",
          // async:false, // set to false to perform a synchronous request
          data: JSON.stringify(jsondata),
          contentType: 'application/json; charset=UTF-8',
          accepts: 'application/json',
          success: function (respText) {
            console.log(respText);
            console.log("raw register response text:", respText);
            // strip any prefix and parse
            var firstBrace = respText.indexOf('{');
            var payload = firstBrace >= 0 ? respText.substring(firstBrace) : respText;
            try {
              var jsonresp = JSON.parse(payload);
            } catch (e) {
              console.error("JSON parse failed:", e, "payload:", payload);
              target.inputEnabled = true;
              return;
            }
            console.log("register response:", jsonresp);
            if (jsonresp.status == "success") {
              console.log("success")
              // window.plugins.toast.show(jsonresp.status, 3000, "bottom");
              target.events.onInputDown.removeAll();
              _this.checkOnlineForData(avatarSelected);
            }
            else {
              window.plugins.toast.show(jsonresp.status + "\n" + jsonresp.description, 3000, "bottom");
              target.inputEnabled = true;
            }

          },
          // error: function (error) {
          error: function (jqXHR, textStatus, errorThrown) {
            // console.log(error);
            console.log("register api failed");
            console.log("url:", apiurl);
            console.log("status:", jqXHR && jqXHR.status);
            console.log("statusText:", jqXHR && jqXHR.statusText);
            console.log("textStatus:", textStatus);
            console.log("errorThrown:", errorThrown);
            console.log("responseText:", jqXHR && jqXHR.responseText);
            window.plugins.toast.show("Register failed: " + (jqXHR && jqXHR.status) + " " + (textStatus || ""), 3000, "bottom");
            // window.plugins.toast.show(error, 3000, "bottom");
            target.inputEnabled = true;
          }

        });
      }
      else {
        window.plugins.toast.show("please check your internet connection and try again", 3000, "bottom");
      }
    }, function (error) {
      console.error("Failed to get installation ID", error);
    });

  },

  checkOnlineForData: function (avatarName) {
    FirebasePlugin.getInstallationId(function (id) {
      console.log("Got installation ID: " + id);

      //var jsondata = { name: avatarName, deviceid: device.serial + "_" + device.uuid };
      var jsondata = { name: avatarName, deviceid: id, grade: "1st Grade", app_version_name: app.APP_VERSION_NAME };
      //var jsondata = {name:avatarName,deviceid:123456};

      if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
        // var apiurl = "https://abbmath.klp.org.in/abbchmprm/login";
        console.log(window.ApiConfig.url('login'), "login url");
        var apiurl = window.ApiConfig.url('login');
        //var apiurl = "https://10.0.2.2/abbchmprm/login";      		        
        $.ajax({
          url: apiurl,
          type: "POST",
          dataType: "json",
          // async:false, // set to false to perform a synchronous request
          data: JSON.stringify(jsondata),
          contentType: 'application/json; charset=UTF-8',
          accepts: 'application/json',
          success: function (jsonresp) {
            console.log(jsonresp);
            if (jsonresp.status == "success") {
              // window.plugins.toast.show(jsonresp.status, 3000, "bottom");
              _this.checkOnlineForData2(avatarName, jsonresp.description);

            }
            else {

            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log("login api failed");
            console.log("url:", apiurl);
            console.log("status:", jqXHR && jqXHR.status);
            console.log("statusText:", jqXHR && jqXHR.statusText);
            console.log("textStatus:", textStatus);
            console.log("errorThrown:", errorThrown);
            console.log("responseText:", jqXHR && jqXHR.responseText);
            window.plugins.toast.show("Login failed: " + (jqXHR && jqXHR.status) + " " + (textStatus || ""), 3000, "bottom");
          }
          // error: function (error) {
          //   console.log(error);
          //   window.plugins.toast.show(error, 1000, "bottom");
          // }
        });
      }
      else {
        window.plugins.toast.show("please check your internet connection and try again", 3000, "bottom");
        document.addEventListener("online", _this.checkNetwork, false);
      }
    }, function (error) {
      console.error("Failed to get installation ID", error);
    });
  },

  checkOnlineForData2: function (avatarName, acc_token) {
    FirebasePlugin.getInstallationId(function (id) {
      console.log("Got installation ID: " + id);

      //var jsondata = { name: avatarName, deviceid: device.serial + "_" + device.uuid };
      var jsondata = { name: avatarName, deviceid: id, grade: "1st Grade" };
      //var jsondata = {name:avatarName,deviceid:123456};
      console.log(window.ApiConfig.url('getchild'), "getchild url");
      if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
        // var apiurl = "https://abbmath.klp.org.in/abbchmprm/getchild";
        console.log(window.ApiConfig.url('getchild'), "getchild url");
        var apiurl = window.ApiConfig.url('getchild');
        //var apiurl = "https://10.0.2.2/abbchmprm/getchild";     		        
        $.ajax({
          url: apiurl,
          type: "POST",
          dataType: "json",
          // async:false, // set to false to perform a synchronous request
          data: JSON.stringify(jsondata),
          contentType: 'application/json; charset=UTF-8',
          accepts: 'application/json',
          success: function (jsonresp) {
            console.log(jsonresp);
            if (jsonresp.status == "success") {
              // window.plugins.toast.show(jsonresp.status, 3000, "bottom");
              bbreglogin.bbdbhandler.executeSql("insert into user(uid, name, language, deviceId, grade) values (?,?,?,?,?)", [acc_token, jsonresp.name, jsonresp.language, jsonresp.deviceid, (jsonresp.grade || '1st Grade')], null, null);
              jsonresp.uid = acc_token;
              // _this.state.start('appLoginEditScreen', true, false, jsonresp);
              _this.state.start('adSplashScreenbb', true, false, jsonresp);
            }
            else {
              console.log("getchild api returned non-success status:", jsonresp);
              window.plugins.toast.show((jsonresp && jsonresp.description) ? jsonresp.description : "Unable to fetch child data", 3000, "bottom");
            }
          },
          error: function (error) {
            window.plugins.toast.show(error, 3000, "bottom");

          }
        });
      }
      else {
        window.plugins.toast.show("please check your internet connection and try again", 3000, "bottom");
      }
    }, function (error) {
      console.error("Failed to get installation ID", error);
    });
  },

  shutdown: function () {
    document.removeEventListener("backbutton", _this.goback, false);
  },
};
