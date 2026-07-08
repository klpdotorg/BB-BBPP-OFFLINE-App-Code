Game.appLoginEditScreenbbpp = function () {

};

Game.appLoginEditScreenbbpp.prototype = {

	init: function (user, app_Mode) {
		// if(screen.orientation == 'landscape')
		// {
		console.log(user, "user");

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
		//}
		_this = this;
		_this.user = user;
		// _this.app_Mode = app_Mode;
		_this.app_Mode = "offline";
		console.log(_this.app_Mode, "_this.app_Mode login edit screen");


		var accessToken = this.user && this.user.uid ? this.user.uid : "";
		window.acctkn = accessToken;
	},

	onDeviceReady: function () {
		//this.receivedEvent('deviceready');
		AndroidFullScreen.immersiveMode(successFunction, errorFunction);
	},

	preload: function (game) {

	},

	create: function (game) {
		console.log("I am in appLoginEditScreenbbpp");
		_this = this;

		_this.i = 0;

		// user may arrive as a plain language string (fresh registration flow) or as a full
		// user object with a .language field (existing/offline user flow) — normalize once here.
		_this.language = (_this.user && typeof _this.user === 'object') ? _this.user.language : _this.user;

		//_this.basePath = cordova.file.externalRootDirectory+"Android/data/com.akshara.easymath/Files/Download/.gameFilesBBV5_0_5/www/";
		_this.basePath = cordova.file.externalRootDirectory + "Android/data/com.akshara.BBplusplusOffEng/Files/Download/.gameFilesBB++V10_2/www/";

		//* nEED to change this ****
		_this.fullSize = 290789494;

		_this.zipFiles = [["Assets1.zip", 981561], ["Assets2.zip", 87798759], ["Assets4.zip", 95186236], ["EnglishquestionSounds.zip", 103080138], ["sounds.zip", 3742800]];

		// _this.zipFiles = [["Assets1.zip", 981561], ["Assets2.zip", 87798759], ["Assets4.zip", 95186236], ["EnglishquestionSounds.zip", 103080138], ["HINquestionSounds.zip", 119374649],
		// ["KANquestionSounds.zip", 119941833], ["ODIquestionSounds.zip", 127903659], ["MARquestionSounds.zip", 136781929], ["TMquestionSounds.zip", 103175062], ["sounds.zip", 3742800]];

		_this.counter = 0;
		_this.counter1 = 0;

		//alert(_this.user);

		if (_this.language == "English") {
			console.log("inside english");

			_this.fileCheck = [
				[_this.basePath + "questionSounds/ALAS-01-G6/English", _this.language + "/EnglishquestionSounds.zip"],//ENG
				[_this.basePath + "assets/commonAssets", "Assets1.zip"],
				[_this.basePath + "assets/demoVideos", "Assets2.zip"],
				// [_this.basePath + "assets/exitAssets", _this.user ) + "/Assets3.zip"],
				[_this.basePath + "assets/gradeAssets", "Assets4.zip"],
				// [_this.basePath + "assets/gradeSelectionScreenAssets", _this.user ) + "/Assets5.zip"],
				[_this.basePath + "sounds", "sounds.zip"]
			];
		}
		else if (_this.language == "Hindi") {
			_this.fileCheck = [
				[_this.basePath + "questionSounds/ALAS-01-G6/Hindi", _this.language + "/HINquestionSounds.zip"],
				[_this.basePath + "assets/commonAssets", "Assets1.zip"],
				[_this.basePath + "assets/demoVideos", "Assets2.zip"],
				// [_this.basePath + "assets/exitAssets", _this.user ) + "/Assets3.zip"],
				[_this.basePath + "assets/gradeAssets", "Assets4.zip"],
				// [_this.basePath + "assets/gradeSelectionScreenAssets", _this.user ) + "/Assets5.zip"],
				[_this.basePath + "sounds", "sounds.zip"]
			];
		}
		else if (_this.language == "Kannada") {
			_this.fileCheck = [
				[_this.basePath + "questionSounds/ALAS-01-G6/Kannada", _this.language + "/KANquestionSounds.zip"],
				[_this.basePath + "assets/commonAssets", "Assets1.zip"],
				[_this.basePath + "assets/demoVideos", "Assets2.zip"],
				// [_this.basePath + "assets/exitAssets", _this.user ) + "/Assets3.zip"],
				[_this.basePath + "assets/gradeAssets", "Assets4.zip"],
				// [_this.basePath + "assets/gradeSelectionScreenAssets", _this.user ) + "/Assets5.zip"],
				[_this.basePath + "sounds", "sounds.zip"]
			];
		}
		else if (_this.language == "Odiya") {
			_this.fileCheck = [
				[_this.basePath + "questionSounds/ALAS-01-G6/Odiya", _this.language + "/ODIquestionSounds.zip"],
				[_this.basePath + "assets/commonAssets", "Assets1.zip"],
				[_this.basePath + "assets/demoVideos", "Assets2.zip"],
				// [_this.basePath + "assets/exitAssets", _this.user ) + "/Assets3.zip"],
				[_this.basePath + "assets/gradeAssets", "Assets4.zip"],
				// [_this.basePath + "assets/gradeSelectionScreenAssets", _this.user ) + "/Assets5.zip"],
				[_this.basePath + "sounds", "sounds.zip"]
			];
		}
		// else if(_this.user == "Gujarati")
		// {

		// }
		else if (_this.language == "Marathi") {
			_this.fileCheck = [
				[_this.basePath + "questionSounds/ALAS-01-G6/Marathi", _this.language + "/MARquestionSounds.zip"],
				[_this.basePath + "assets/commonAssets", "Assets1.zip"],
				[_this.basePath + "assets/demoVideos", "Assets2.zip"],
				// [_this.basePath + "assets/exitAssets", _this.user ) + "/Assets3.zip"],
				[_this.basePath + "assets/gradeAssets", "Assets4.zip"],
				// [_this.basePath + "assets/gradeSelectionScreenAssets", _this.user ) + "/Assets5.zip"],
				[_this.basePath + "sounds", "sounds.zip"]
			];
		}
		// else if(_this.user == "Telugu")
		// {

		// }
		else if (_this.language == "Tamil") {
			_this.fileCheck = [
				[_this.basePath + "questionSounds/ALAS-01-G6/Tamil", _this.language + "/TMquestionSounds.zip"],
				[_this.basePath + "assets/commonAssets", "Assets1.zip"],
				[_this.basePath + "assets/demoVideos", "Assets2.zip"],
				// [_this.basePath + "assets/exitAssets", _this.user ) + "/Assets3.zip"],
				[_this.basePath + "assets/gradeAssets", "Assets4.zip"],
				// [_this.basePath + "assets/gradeSelectionScreenAssets", _this.user ) + "/Assets5.zip"],
				[_this.basePath + "sounds", "sounds.zip"]
			];
		}

		_this.splash = game.add.sprite(game.world.centerX, game.world.centerY, 'registrationbg');
		_this.splash.scale.setTo(1);
		_this.splash.anchor.setTo(0.5);

		var titleBar = game.add.graphics(0, 0);
		titleBar.anchor.setTo(0.5);
		titleBar.lineStyle(2, 0x000000, 0.8);
		titleBar.beginFill(0x4E342E, 1);
		titleBar.drawRect(0, 0, 540, 80);


		_this.regBackArrow = game.add.sprite(40, 40, 'regBackArrow');
		_this.regBackArrow.scale.setTo(0.35);
		_this.regBackArrow.anchor.setTo(0.5);


		var regBackArrowGrph = game.add.graphics(0, 0);
		regBackArrowGrph.beginFill(0x4E342E, 0.05);
		regBackArrowGrph.drawRect(-60, -60, 200, 200);
		_this.regBackArrow.addChild(regBackArrowGrph);

		// _this.regBackArrow.inputEnabled = true;
		// _this.regBackArrow.events.onInputDown.add(function () {
		// 	_this.state.start('appLoginScreenbbpp', true, false, _this.app_Mode, _this.user);
		// }, _this);


		document.addEventListener('backbutton', function (e) {
			e.preventDefault();
		}, false);


		var titleTxt = game.add.text(game.world.centerX - 5, 45, "Building Blocks 6-8 by Akshara");
		titleTxt.x = Math.round(titleTxt.x);
		titleTxt.anchor.setTo(0.5);
		titleTxt.align = 'center';
		titleTxt.font = 'regfont4';
		titleTxt.fontSize = '22pt';
		titleTxt.fontWeight = 500;
		titleTxt.fill = '#FFFFFF';
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

		var welcome = welcomeTextMap[_this.language && _this.language] || welcomeTextMap.English;

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

		_this.regandstsrtBtn = _this.add.sprite(game.world.centerX, game.world.centerY + 150, 'regandstsrtBtn');
		_this.regandstsrtBtn.scale.setTo(0.8, 1);
		_this.regandstsrtBtn.anchor.setTo(0.5);

		var textLang = "";
		if (_this.language == "Hindi") {
			textLang = "शुरु";
		} else if (_this.language == "Kannada") {
			textLang = "ಪ್ರಾರಂಭಿಸಿ";
		} else if (_this.language == "Odiya") {
			textLang = "ଆରମ୍ଭ କରନ୍ତ";
		} else if (_this.language == "Gujarati") {
			textLang = "શરૂ કરો";
		} else if (_this.language == "Marathi") {
			textLang = "सुरू करा"
		}
		else if (_this.language == "Telugu") {
			textLang = "ప్రారంభించండి"
		}
		else if (_this.language == "Tamil") {
			textLang = "தொடக்கம்"
		}
		else if (_this.language == "Urdu") {
			textLang = "شروع کیجئے"
		} else {
			textLang = "START";
		}

		_this.regandstsrtBtnTxt = _this.add.text(game.world.centerX, game.world.centerY + 152, textLang);
		_this.regandstsrtBtnTxt.x = Math.round(_this.regandstsrtBtnTxt.x);
		_this.regandstsrtBtnTxt.anchor.setTo(0.5);
		_this.regandstsrtBtnTxt.align = 'center';
		_this.regandstsrtBtnTxt.font = 'regfont1';
		_this.regandstsrtBtnTxt.letterSpacing = 15;
		_this.regandstsrtBtnTxt.fontSize = '16pt';
		_this.regandstsrtBtnTxt.fontWeight = 500;
		_this.regandstsrtBtnTxt.fill = '#FFFFFF';
		_this.regandstsrtBtnTxt.wordWrap = true;
		_this.regandstsrtBtnTxt.wordWrapWidth = 500;

		_this.userEditBtn = _this.add.sprite(game.world.centerX - 150, game.world.centerY, 'userEditBtn');
		_this.userEditBtn.scale.setTo(0.4);
		_this.userEditBtn.anchor.setTo(0.5);
		_this.userEditBtn.inputEnabled = true;
		_this.userEditBtn.events.onInputDown.add(function () {
			console.log(_this.user, "userEditBTN edit screen");
			_this.state.start('editLangScreenbbpp', true, false, _this.user, _this.app_Mode);
		}, _this);
		_this.userEditBtn.visible = false;

		_this.userProgressBtn = _this.add.sprite(game.world.centerX + 150, game.world.centerY, 'userProgressBtn');
		_this.userProgressBtn.scale.setTo(0.4);
		_this.userProgressBtn.anchor.setTo(0.5);
		_this.userProgressBtn.inputEnabled = true;
		_this.userProgressBtn.events.onInputDown.add(function () {
			_this.state.start('index2bbpp', true, false, _this.user, "true", _this.app_Mode);
		}, _this);

		if (_this.app_Mode == "offline") {
			console.log("App Offline !!!");
			var isRegisteredUser = _this.user && typeof _this.user === 'object' && _this.user.uid;
			if (isRegisteredUser) {
				_this.checkIfAllAssetsPresent();
			} else {
				// fresh install, no server record yet — register before downloading assets
				_this.regandstsrtBtn.inputEnabled = false;
				_this.register(_this.regandstsrtBtn, "Fish", _this.language);
			}
		} else {
			console.log("App Online..... !!!");
			_this.regBackArrow.inputEnabled = true;
			_this.regBackArrow.events.onInputDown.add(function () {
				console.log(_this.user, "APPLOgEDitScreen Back btn !!!");
				// _this.state.start('appLoginScreenbbpp', true, false, _this.app_Mode, _this.user);
				_this.state.start('mainScreen', true, false, _this.app_Mode);
			}, _this);

			document.addEventListener('backbutton', _this.goback, false);

			_this.regandstsrtBtn.inputEnabled = true;
			_this.regandstsrtBtn.events.onInputDown.add(function () {
				FirebasePlugin.logEvent("Button_click_start", { Button_click_start: "", item_id: "" });
				console.log(_this.user, "moving to index 2 !");
				_this.state.start('index2bbpp', true, false, _this.user, false, _this.app_Mode);
			}, _this);
		}

	},

	register: function (target, avatarSelected, lang) {
		target.inputEnabled = false;
		FirebasePlugin.getInstallationId(function (id) {
			console.log("Got installation ID: " + id);
			_this.language = lang;
			var fcmToken = localStorage.getItem("pending_fcm_token") || localStorage.getItem("fcm_token") || "";
			var lastLogin = new Date().toISOString();

			var jsondata = { name: avatarSelected, gender: null, schooltype: "0", geo: "77.580643,12.972442", grade: "6th Grade", deviceid: id, language: _this.language, organization: "Akshara", avatarpic: avatarSelected, fcm_token: fcmToken, last_login: lastLogin, app_version_name: app.APP_VERSION_NAME };
			// var jsondata = { name: avatarSelected, gender: null, schooltype: "0", geo: "77.580643,12.972442", grade: "1st Grade", deviceid: id, language: _this.language, organization: "Akshara", avatarpic: avatarSelected, fcm_token: fcmToken, last_login: lastLogin, app_version_name: app.APP_VERSION_NAME };
			console.log(jsondata);
			if (
				navigator.connection.type != "none" &&
				navigator.connection.type != "unknown" &&
				navigator.connection.type != null &&
				navigator.connection.type != "undefined"
			) {
				// var apiurl = "https://abbmath.klp.org.in/abbppchmprm/register";
				var apiurl = window.ApiConfig.url('register');
				$.ajax({
					url: apiurl,
					type: "POST",
					dataType: "text",
					// dataType: "json",
					data: JSON.stringify(jsondata),
					contentType: "application/json; charset=UTF-8",
					accepts: "application/json",
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
					// success: function (jsonresp) {
					//   console.log(jsonresp);
					//   if (jsonresp.status == "success") {
					//     // window.plugins.toast.show(jsonresp.status, 3000, "bottom");
					//     target.events.onInputDown.removeAll();
					//     _this.checkOnlineForData(avatarSelected);
					//   } else {
					//     window.plugins.toast.show(
					//       jsonresp.status + "\n" + jsonresp.description,
					//       3000,
					//       "bottom"
					//     );
					//     target.inputEnabled = true;
					//   }
					// },
					// error: function (error) {
					//   console.log(error);
					//   window.plugins.toast.show(error, 3000, "bottom");
					//   target.inputEnabled = true;
					// },
				});
			} else {
				window.plugins.toast.show(
					"please check your internet connection and try again",
					3000,
					"bottom"
				);
				target.inputEnabled = true;
			}
		}, function (error) {
			console.error("Failed to get installation ID", error);
			target.inputEnabled = true;
		});
	},

	checkOnlineForData: function (avatarName) {
		FirebasePlugin.getInstallationId(function (id) {
			console.log("Got installation ID: " + id);
			var jsondata = { name: avatarName, deviceid: id, grade: "6th Grade", app_version_name: app.APP_VERSION_NAME };
			console.log(jsondata);
			if (
				navigator.connection.type != "none" &&
				navigator.connection.type != "unknown" &&
				navigator.connection.type != null &&
				navigator.connection.type != "undefined"
			) {
				var apiurl = window.ApiConfig.url('login');
				$.ajax({
					url: apiurl,
					type: "POST",
					dataType: "json",
					data: JSON.stringify(jsondata),
					contentType: "application/json; charset=UTF-8",
					accepts: "application/json",
					success: function (jsonresp) {
						console.log(jsonresp);
						if (jsonresp.status == "success") {
							_this.checkOnlineForData2(avatarName, jsonresp.description);
						} else {
							window.plugins.toast.show(jsonresp.status + "\n" + jsonresp.description, 3000, "bottom");
							_this.regandstsrtBtn.inputEnabled = true;
						}
					},
					error: function (jqXHR, textStatus, errorThrown) {
						console.log("login api failed", textStatus, errorThrown);
						window.plugins.toast.show("Login failed, please try again", 3000, "bottom");
						_this.regandstsrtBtn.inputEnabled = true;
					}
				});
			} else {
				window.plugins.toast.show(
					"please check your internet connection and try again",
					3000,
					"bottom"
				);
				_this.regandstsrtBtn.inputEnabled = true;
			}
		}, function (error) {
			console.error("Failed to get installation ID", error);
			_this.regandstsrtBtn.inputEnabled = true;
		});
	},

	checkOnlineForData2: function (avatarName, acc_token) {
		FirebasePlugin.getInstallationId(function (id) {
			console.log("Got installation ID: " + id);
			var jsondata = { name: avatarName, deviceid: id, grade: "6th Grade" };
			if (
				navigator.connection.type != "none" &&
				navigator.connection.type != "unknown" &&
				navigator.connection.type != null &&
				navigator.connection.type != "undefined"
			) {
				var apiurl = window.ApiConfig.url('getchild');
				$.ajax({
					url: apiurl,
					type: "POST",
					dataType: "json",
					data: JSON.stringify(jsondata),
					contentType: "application/json; charset=UTF-8",
					accepts: "application/json",
					success: function (jsonresp) {
						console.log(jsonresp);
						if (jsonresp.status == "success") {
							bbregloginbbpp.bbdbhandler.executeSql(
								"insert into user(uid, name, language, deviceId, grade) values (?,?,?,?,?)",
								[acc_token, jsonresp.name, jsonresp.language, jsonresp.deviceid, (jsonresp.grade || '6th Grade')],
								null, null
							);
							jsonresp.uid = acc_token;
							_this.user = jsonresp;
							window.acctkn = acc_token;
							_this.checkIfAllAssetsPresent();
						} else {
							window.plugins.toast.show(jsonresp.status + "\n" + jsonresp.description, 3000, "bottom");
							_this.regandstsrtBtn.inputEnabled = true;
						}
					},
					error: function (jqXHR, textStatus, errorThrown) {
						console.log("getchild api failed", textStatus, errorThrown);
						window.plugins.toast.show("Fetching profile failed, please try again", 3000, "bottom");
						_this.regandstsrtBtn.inputEnabled = true;
					}
				});
			} else {
				window.plugins.toast.show(
					"please check your internet connection and try again",
					3000,
					"bottom"
				);
				_this.regandstsrtBtn.inputEnabled = true;
			}
		}, function (error) {
			console.error("Failed to get installation ID", error);
			_this.regandstsrtBtn.inputEnabled = true;
		});
	},

	checkFileSize: function () {
		console.log("here");
		window.resolveLocalFileSystemURL(_this.basePath,
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

			}, function (error) {
				console.log("file not present:download");
				_this.counter = 0;
				_this.checkIfAllAssetsPresent();
			});
	},

	displayMessageAndDownloadAgain: function () {

		_this.splash.alpha = 0.5;

		_this.progressGroup = _this.add.group();

		_this.graphics = _this.add.graphics(10, 50);
		_this.graphics.lineStyle(1, 0x000000, 0);
		_this.graphics.beginFill(0xFFFFFF, 1);
		_this.graphics.drawRoundedRect(10, 350, 500, 260, 5);
		_this.graphics.inputEnabled = true;
		_this.graphics.events.onInputDown.add(function () {
			//do nothing
		}, _this);

		_this.pleaseWaitTxt = _this.add.text(55, 430, "Please wait..");
		_this.pleaseWaitTxt.x = Math.round(_this.pleaseWaitTxt.x);
		//_this.pleaseWaitTxt.anchor.setTo(0.5);
		_this.pleaseWaitTxt.align = 'center';
		_this.pleaseWaitTxt.font = 'regfont4';
		_this.pleaseWaitTxt.fontSize = '22pt';
		_this.pleaseWaitTxt.fontWeight = 'normal';
		_this.pleaseWaitTxt.fill = '#000000';
		_this.pleaseWaitTxt.wordWrap = true;
		_this.pleaseWaitTxt.wordWrapWidth = 500;

		_this.downloadProgressTxt = _this.add.text(55, 470, "Download in progress");
		_this.downloadProgressTxt.x = Math.round(_this.downloadProgressTxt.x);
		//_this.downloadProgressTxt.anchor.setTo(0.5);
		_this.downloadProgressTxt.align = 'center';
		_this.downloadProgressTxt.font = 'regfont3';
		_this.downloadProgressTxt.fontSize = '16pt';
		_this.downloadProgressTxt.fontWeight = 'normal';
		_this.downloadProgressTxt.fill = '#000000';
		_this.downloadProgressTxt.wordWrap = true;
		_this.downloadProgressTxt.wordWrapWidth = 500;

		_this.regloding = _this.add.sprite(50, 580, "regloding");
		_this.regloding.scale.setTo(0.48, 0.5);
		_this.regloding.frame = 0;

		_this.progressPercentageTxt = _this.add.text(50, 600, "0%");
		_this.progressPercentageTxt.x = Math.round(_this.progressPercentageTxt.x);
		//_this.downloadProgressTxt.anchor.setTo(0.5);
		_this.progressPercentageTxt.align = 'center';
		_this.progressPercentageTxt.font = 'regfont4';
		_this.progressPercentageTxt.fontSize = '16pt';
		_this.progressPercentageTxt.fontWeight = 'normal';
		_this.progressPercentageTxt.fill = '#000000';
		_this.progressPercentageTxt.wordWrap = true;
		_this.progressPercentageTxt.wordWrapWidth = 500;


		_this.progressPercentageTxt2 = _this.add.text(420, 600, "0/100");
		_this.progressPercentageTxt2.x = Math.round(_this.progressPercentageTxt2.x);
		//_this.progressPercentageTxt2.anchor.setTo(0.5);
		_this.progressPercentageTxt2.align = 'center';
		_this.progressPercentageTxt2.font = 'regfont3';
		_this.progressPercentageTxt2.fontSize = '16pt';
		_this.progressPercentageTxt2.fontWeight = 'normal';
		_this.progressPercentageTxt2.fill = '#000000';
		_this.progressPercentageTxt2.wordWrap = true;
		_this.progressPercentageTxt2.wordWrapWidth = 500;

		_this.noOfAssets = _this.add.text(300, 470, "1/5");
		_this.noOfAssets.x = Math.round(_this.noOfAssets.x);
		//_this.progressPercentageTxt2.anchor.setTo(0.5);
		_this.noOfAssets.align = 'center';
		_this.noOfAssets.font = 'regfont3';
		_this.noOfAssets.fontSize = '16pt';
		_this.noOfAssets.fontWeight = 'normal';
		_this.noOfAssets.fill = '#000000';
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
		window.resolveLocalFileSystemURL(filepath,
			function (fileEntry) {
				console.log("fileCheck present");
				_this.counter++;
				console.log(_this.counter, "counter>>>>>>");
				_this.checkIfAllAssetsPresent();
			}, function (error) {
				console.log("file not present:download" + filename, "error", error);
				_this.downloadFiles(filename);
			});
	},


	checkIfAllAssetsPresent: function () {
		if (_this.counter < _this.fileCheck.length) {
			_this.fileChecker(_this.fileCheck[_this.counter][0], _this.fileCheck[_this.counter][1]);
			console.log(_this.fileCheck[_this.counter][0], _this.fileCheck[_this.counter][1], "|||||||||||||||")
		}
		else {

			localStorage.setItem("downloadComplete", "true");
			window.baseUrl = cordova.file.externalRootDirectory + "Android/data/com.akshara.BBplusplusOffEng/Files/Download/.gameFilesBB++V10_2/www/";//cordova.file.externalDataDirectory + 

			_this.regBackArrow.inputEnabled = true;
			_this.regBackArrow.events.onInputDown.add(function () {
				_this.state.start('mainScreen', true, false, _this.app_Mode);
				// _this.state.start('appLoginScreenbbpp', true, false, _this.app_Mode, _this.user);
			}, _this);

			document.addEventListener('backbutton', _this.goback, false);



			_this.regandstsrtBtn.inputEnabled = true;
			_this.regandstsrtBtn.events.onInputDown.add(function () {
				FirebasePlugin.logEvent("Button_click_start", { Button_click_start: "", item_id: "" });
				_this.state.start('index2bbpp', true, false, _this.user, false, _this.app_Mode);
			}, _this);
		}

	},

	goback: function (e) {
		document.removeEventListener('backbutton', _this.goback, false);
		_this.state.start('mainScreen', true, false, _this.app_Mode);
		// _this.state.start('appLoginScreenbbpp', true, false, _this.app_Mode, _this.user);
	},

	downloadFiles: function (filename) {
		console.log("inside downloadFiles");
		if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
			_this.displayMessageAndDownloadAgain();

			//_this.baseUrl = "https://abbmath.klp.org.in/abbchmprm/assets/bb5_0_5/";
			_this.baseUrl = "https://abbmath.klp.org.in/bbplusplus/assets2/";
			//_this.baseUrl = "https://10.0.2.2/abbppchmprm/assets/bb5_0_5/";
			var fileTransfer = new FileTransfer();

			fileTransfer.onprogress = function (progressEvent) {
				console.log(progressEvent, "progressEvent");

				if (progressEvent.lengthComputable) {
					console.log("inside downloadFiles 2");
					//loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
					_this.regloding.frame = Math.round((progressEvent.loaded / progressEvent.total) * 100) - 1;
					_this.progressPercentageTxt.text = Math.round((progressEvent.loaded / progressEvent.total) * 100) + "%";
					_this.progressPercentageTxt2.text = Math.round((progressEvent.loaded / progressEvent.total) * 100) + "/100";

					if (filename != "EnglishquestionSounds.zip" && filename != "HindiquestionSounds.zip" && filename != "KannadaquestionSounds.zip" && filename != "OdiyaquestionSounds.zip" &&
						filename != "MarathiquestionSounds.zip" && filename != "TamilquestionSounds.zip") {
						console.log("Download !!!!!!");

						if (filename == _this.language + "/EnglishquestionSounds.zip") {
							console.log("QSound");
							_this.noOfAssets.text = "1/5";
						}
						else if (filename == "Assets1.zip") {
							console.log("QSound");
							_this.noOfAssets.text = "2/5";
						}
						else if (filename == "Assets2.zip") {
							console.log("QSound");
							_this.noOfAssets.text = "3/5";
						}

						else if (filename == "Assets4.zip") {
							console.log("QSound");
							_this.noOfAssets.text = "4/5";
						}

						else if (filename == "sounds.zip") {
							console.log("QSound");
							_this.noOfAssets.text = "5/5";
						}


						_this.noOfAssets.visible = true;
						//}
						//console.log((progressEvent.loaded / progressEvent.total) * 100);
					} else {
						//loadingStatus.increment();
						//console.log(loadingStatus);
					}
				}
			};

			var uri = encodeURI(_this.baseUrl + filename);
			console.log(_this.basePath + filename, "_this.basePath + filename");

			var startDownload = function () {
				fileTransfer.download(
					uri,
					_this.basePath + filename,
					function (entry) {
						console.log("download complete: " + entry.toURL());
						_this.unzipFile(_this.basePath, filename);
					},
					function (error) {
						console.log(error, "error");
						console.log("download error source " + error.source);
						console.log("download error target " + error.target);
						console.log("download error code" + error.code);
						_this.pleaseWaitTxt.text = "Download Failed";
						_this.downloadProgressTxt.text = "Something went wrong."

						document.addEventListener("online", _this.checkNetwork, false);
						window.plugins.toast.show("something went wrong with download please try again", 3000, "bottom");
					}
				);
			};

			// FileTransfer.download does not create missing destination folders (including
			// basePath itself on a fresh install), so build the whole target folder chain
			// from externalRootDirectory first or it fails with FILE_NOT_FOUND_ERR (code 1).
			var lastSlash = filename.lastIndexOf("/");
			var targetDir = _this.basePath.replace(cordova.file.externalRootDirectory, "") + (lastSlash > -1 ? filename.substring(0, lastSlash) : "");
			var folders = targetDir.split("/").filter(function (f) { return f.length > 0; });
			window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory, function (rootDirEntry) {
				_this.createDirectoryRecursively(rootDirEntry, folders, startDownload, function (dirError) {
					console.log("error creating download directory", dirError);
					startDownload();
				});
			}, function (rootError) {
				console.log("externalRootDirectory not found", rootError);
				startDownload();
			});
		}
		else {
			window.plugins.toast.show("please check your internet connection and try again", 3000, "bottom");
			document.addEventListener("online", _this.checkNetwork, false);

		}
	},

	checkNetwork: function () {
		document.removeEventListener("online", _this.checkNetwork, false);
		_this.game.state.start('appLoginEditScreenbbpp', true, false, _this.user, _this.app_Mode);
	},

	createDirectoryRecursively: function (baseEntry, folders, successCallback, errorCallback) {
		if (folders.length === 0) {
			successCallback(baseEntry);
			return;
		}
		var next = folders.shift();
		baseEntry.getDirectory(next, { create: true, exclusive: false }, function (dirEntry) {
			_this.createDirectoryRecursively(dirEntry, folders, successCallback, errorCallback);
		}, errorCallback);
	},

	unzipFile: function (path, filename) {
		zip.unzip(path + filename, _this.basePath, function (message) {
			console.log(message);
			if (message == 0) {
				_this.removeZipFile(path, filename);

			}
			else {
				console.log("error unzipping");
			}
		}, function (progressEvent) {
			//console.log(Math.round((progressEvent.loaded / progressEvent.total) * 100));
		});
	},

	removeZipFile: function (path, filename) {
		window.resolveLocalFileSystemURL(path + filename,
			function (fileEntry) {
				fileEntry.remove(function (file) {
					console.log("file removed!");
					_this.progressGroup.destroy();
					_this.splash.alpha = 1;
					_this.checkIfAllAssetsPresent();
				}, function (error) {
					console.log("error occurred: " + error.code);
				}, function () {
					console.log("file does not exist");
				});
			});
	},

	shutdown: function () {
		document.removeEventListener('backbutton', _this.goback, false);
	}
};
function successFunction() {
	console.log('Immersive mode set successfully.');
}

function errorFunction(error) {
	console.error('Error setting immersive mode:', error);
}
