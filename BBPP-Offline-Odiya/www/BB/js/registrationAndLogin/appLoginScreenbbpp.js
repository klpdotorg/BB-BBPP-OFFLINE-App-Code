Game.appLoginScreenbbpp = function () {

};

Game.appLoginScreenbbpp.prototype = {

	init: function (app_Mode, lang) {
		_this = this;
		_this.app_Mode = app_Mode;
		// if (typeof app_Mode === 'string') {
		// 	_this.app_Mode = app_Mode;
		// 	_this.language = lang || window.languageSelected || "English";
		// 	_this.user = null;
		// } else if (typeof app_Mode === 'object' && app_Mode !== null) {
		// 	_this.user = app_Mode;
		// 	_this.app_Mode = lang || window.app_Mode || "online";
		// 	_this.language = (_this.user && _this.user.language) || window.languageSelected || "English";
		// } else {
		// 	_this.app_Mode = window.app_Mode || "online";
		// 	_this.language = window.languageSelected || "English";
		// 	_this.user = null;
		// }

		console.log(_this.app_Mode, "_this.app_Mode in appLoginScreenbbpp");
		console.log(window.app_Mode, "FRom App MODE ///");

	},

	onDeviceReady: function () {
		//this.receivedEvent('deviceready');
		AndroidFullScreen.immersiveMode(successFunction, errorFunction);
	},

	preload: function (game) {

	},

	create: function (game) {
		console.log("I am in appLoginScreenbbpp");
		//AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_LOW_PROFILE, null, null);
		//AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_FULLSCREEN | AndroidFullScreen.SYSTEM_UI_FLAG_LOW_PROFILE, null, null);
		screen.orientation.lock('portrait');
		AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_LOW_PROFILE, null, null);
		_this.game.scale.setGameSize(540, 960);
		_this.scale.forceOrientation(true, false);

		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
		_this.checkPermission();

	},

	startGame: function () {
		// _this.avatarName = ['Fish', 'ButterFly', 'Flower', 'Parrot', 'Sun', 'Tree'];
		// Only keep a single avatar (Fish)
		_this.avatarName = ['Fish'];
		_this.checkForLoginData();

		_this.userArray = [];


		//Fullscreen.on();
		var splash = _this.add.sprite(_this.world.centerX, _this.world.centerY, 'registrationbg');
		splash.scale.setTo(1);
		splash.anchor.setTo(0.5);



		var titleBar = _this.add.graphics(0, 0);
		titleBar.anchor.setTo(0.5);
		titleBar.lineStyle(2, 0x000000, 0.8);
		titleBar.beginFill(0x4E342E, 1);
		titleBar.drawRect(0, 0, 540, 80);


		var titleTxt = _this.add.text(_this.world.centerX, 45, "Building Blocks 6-8 by Akshara");//-80
		titleTxt.x = Math.round(titleTxt.x);
		titleTxt.anchor.setTo(0.5);
		titleTxt.align = 'center';
		titleTxt.font = 'regfont4';
		titleTxt.fontSize = '22pt';
		titleTxt.fontWeight = 500;
		titleTxt.fill = '#FFFFFF';
		titleTxt.wordWrap = true;
		titleTxt.wordWrapWidth = 500;

		if (this.video == null) {
			this.video = this.add.video('demo');

		}


		_this.regBackArrow = _this.game.add.sprite(40, 40, 'regBackArrow');
		_this.regBackArrow.scale.setTo(0.35);
		_this.regBackArrow.anchor.setTo(0.5);


		var regBackArrowGrph = _this.game.add.graphics(0, 0);
		regBackArrowGrph.beginFill(0x4E342E, 0.05);
		regBackArrowGrph.drawRect(-60, -60, 200, 200);
		_this.regBackArrow.addChild(regBackArrowGrph);

		_this.regBackArrow.inputEnabled = true;
		_this.regBackArrow.events.onInputDown.add(function () {
			// app.initialize();
			_this.state.start('mainScreen', true, false, _this.app_Mode);
		}, _this);
	},

	checkPermission: function () {


		_this.startGame();
	},

	loadEverything: function (game) {
		var selectPicTxt = game.add.text(game.world.centerX, 150, "Sign in by Selecting \n your Avatar");
		//var selectPicTxt = game.add.bitmapText(200, 100, 'regFont',"Sign in by Selecting \n your Avatar",64);
		//alert(window.devicePixelRatio);

		selectPicTxt.x = Math.round(selectPicTxt.x);
		selectPicTxt.anchor.setTo(0.5);
		selectPicTxt.align = 'center';
		selectPicTxt.font = 'regfont3';


		selectPicTxt.fontSize = '26pt';

		selectPicTxt.fontWeight = 0;
		selectPicTxt.fill = '#494949';
		selectPicTxt.wordWrap = true;
		selectPicTxt.wordWrapWidth = 500;

		// _this.pos = [[150, 300], [390, 300], [150, 500], [390, 500], [150, 700], [390, 700]];
		_this.pos = [[game.world.centerX, 350]];


		_this.fish = game.add.image(150, 300, 'logo');
		_this.fish.scale.setTo(0.8);//0.8
		_this.fish.anchor.setTo(0.5);


		// _this.butterfly = game.add.sprite(390, 300, 'butterfly');
		// _this.butterfly.scale.setTo(0.8);
		// _this.butterfly.anchor.setTo(0.5);

		// _this.flower = game.add.sprite(150, 500, 'flower');
		// _this.flower.scale.setTo(0.8);
		// _this.flower.anchor.setTo(0.5);

		// _this.parrot = game.add.sprite(390, 500, 'parrot');
		// _this.parrot.scale.setTo(0.8);
		// _this.parrot.anchor.setTo(0.5);

		// _this.sun = game.add.sprite(150, 700, 'sun');
		// _this.sun.scale.setTo(0.8);
		// _this.sun.anchor.setTo(0.5);

		// _this.tree = game.add.sprite(390, 700, 'tree');
		// _this.tree.scale.setTo(0.8);
		// _this.tree.anchor.setTo(0.5);


		_this.fish.visible = false;
		_this.fish.inputEnabled = false;
		_this.fish.events.onInputDown.add(function () {
			for (var i = 0; i < _this.userArray.length; i++) {
				if (_this.userArray[i].name.toLowerCase() == "fish") {
					FirebasePlugin.logEvent("Click_avatar", { Click_avatar_value: _this.userArray[i].name, item_id: "" });

					//_this.state.start('index2',true,false,_this.user,false);//**If ONLINE 
					// _this.state.start('appLoginEditScreenbbpp', true, false, _this.userArray[i], _this.app_Mode);
					_this.state.start('adSplashScreenbbpp', true, false, _this.userArray[i], _this.app_Mode);
					return;
				}
			}
		}, this);


		// _this.butterfly.visible = false;
		// _this.butterfly.inputEnabled = false;
		// _this.butterfly.events.onInputDown.add(function () {
		// 	for (var i = 0; i < _this.userArray.length; i++) {
		// 		if (_this.userArray[i].name.toLowerCase() == "butterfly") {
		// 			FirebasePlugin.logEvent("Click_avatar", { Click_avatar_value: _this.userArray[i].name, item_id: "" });

		// 			//_this.state.start('index2',true,false,_this.user,false);//**If ONLINE 
		// 			// _this.state.start('appLoginEditScreenbbpp', true, false, _this.userArray[i], _this.app_Mode);
		// 			_this.state.start('adSplashScreenbbpp', true, false, _this.userArray[i], _this.app_Mode);
		// 			return;
		// 		}
		// 	}
		// }, this);

		// _this.flower.visible = false;
		// _this.flower.inputEnabled = false;
		// _this.flower.events.onInputDown.add(function () {
		// 	for (var i = 0; i < _this.userArray.length; i++) {
		// 		if (_this.userArray[i].name.toLowerCase() == "flower") {
		// 			FirebasePlugin.logEvent("Click_avatar", { Click_avatar_value: _this.userArray[i].name, item_id: "" });

		// 			//_this.state.start('index2',true,false,_this.user,false);//**If ONLINE 
		// 			// _this.state.start('appLoginEditScreenbbpp', true, false, _this.userArray[i], _this.app_Mode);
		// 			_this.state.start('adSplashScreenbbpp', true, false, _this.userArray[i], _this.app_Mode);

		// 			return;
		// 		}
		// 	}
		// }, this);

		// _this.parrot.visible = false;
		// _this.parrot.inputEnabled = false;
		// _this.parrot.events.onInputDown.add(function () {
		// 	for (var i = 0; i < _this.userArray.length; i++) {
		// 		if (_this.userArray[i].name.toLowerCase() == "parrot") {
		// 			FirebasePlugin.logEvent("Click_avatar", { Click_avatar_value: _this.userArray[i].name, item_id: "" });

		// 			//_this.state.start('index2',true,false,_this.user,false);//**If ONLINE 
		// 			// _this.state.start('appLoginEditScreenbbpp', true, false, _this.userArray[i], _this.app_Mode);
		// 			_this.state.start('adSplashScreenbbpp', true, false, _this.userArray[i], _this.app_Mode);

		// 			return;
		// 		}
		// 	}
		// }, this);

		// _this.sun.visible = false;
		// _this.sun.inputEnabled = false;
		// _this.sun.events.onInputDown.add(function () {
		// 	for (var i = 0; i < _this.userArray.length; i++) {
		// 		if (_this.userArray[i].name.toLowerCase() == "sun") {
		// 			FirebasePlugin.logEvent("Click_avatar", { Click_avatar_value: _this.userArray[i].name, item_id: "" });

		// 			//_this.state.start('index2',true,false,_this.user,false);//**If ONLINE 
		// 			// _this.state.start('appLoginEditScreenbbpp', true, false, _this.userArray[i], _this.app_Mode);
		// 			_this.state.start('adSplashScreenbbpp', true, false, _this.userArray[i], _this.app_Mode);

		// 			return;
		// 		}
		// 	}
		// }, this);

		// _this.tree.visible = false;
		// _this.tree.inputEnabled = false;
		// _this.tree.events.onInputDown.add(function () {
		// 	for (var i = 0; i < _this.userArray.length; i++) {
		// 		if (_this.userArray[i].name.toLowerCase() == "tree") {
		// 			FirebasePlugin.logEvent("Click_avatar", { Click_avatar_value: _this.userArray[i].name, item_id: "" });

		// 			//_this.state.start('index2',true,false,_this.user,false);//**If ONLINE 
		// 			// _this.state.start('appLoginEditScreenbbpp', true, false, _this.userArray[i], _this.app_Mode);//**Offline */
		// 			_this.state.start('adSplashScreenbbpp', true, false, _this.userArray[i], _this.app_Mode);

		// 			return;
		// 		}
		// 	}
		// }, this);



		/*var bmd = game.add.bitmapData(800,600);                
		bmd.ctx.beginPath();        
		bmd.ctx.lineWidth = "4";        
		bmd.ctx.strokeStyle = '#000000';        
		bmd.ctx.setLineDash([2,3]);        
		bmd.ctx.moveTo(10, 10);        
		bmd.ctx.lineTo(100 , 100);
		ctx.moveTo(100, 10);
		ctx.quadraticCurveTo(230, 150, 250, 20);        
		bmd.ctx.stroke();        
		bmd.ctx.closePath();        
		var sprite = game.add.sprite(200, 400, bmd);*/

		var orline1 = game.add.graphics(0, 0);
		//var graphics=game.add.graphics(line.start.x,line.start.y);//if you have a static line
		orline1.lineStyle(2.5, 0x000000, 1);
		orline1.moveTo(70, 820);//moving position of graphic if you draw mulitple lines
		orline1.lineTo(240, 820);
		orline1.endFill();
		orline1.visible = false;

		var orTxt = game.add.text(game.world.centerX, 820, "or");
		orTxt.anchor.setTo(0.5);
		orTxt.align = 'center';
		orTxt.font = 'regfont3';
		orTxt.fontSize = '24pt';
		orTxt.fontWeight = 'normal';
		orTxt.fill = '#494949';
		orTxt.wordWrap = true;
		orTxt.wordWrapWidth = 500;
		orTxt.visible = false;

		var orline2 = game.add.graphics(0, 0);
		//var graphics=game.add.graphics(line.start.x,line.start.y);//if you have a static line
		orline2.lineStyle(2.5, 0x000000, 1);
		orline2.moveTo(300, 820);//moving position of graphic if you draw mulitple lines
		orline2.lineTo(470, 820);
		orline2.endFill();
		orline2.visible = false;

		_this.regandstsrtBtn = _this.add.sprite(game.world.centerX, 880, 'regandstsrtBtn');
		_this.regandstsrtBtn.scale.setTo(0.9, 1);
		_this.regandstsrtBtn.anchor.setTo(0.5);
		_this.regandstsrtBtn.visible = false;

		_this.regandstsrtBtnTxt = _this.add.text(game.world.centerX, 882, "REGISTER");
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
		_this.regandstsrtBtnTxt.visible = false;



	},

	checkForLoginData: function () {
		bbregloginbbpp.bbdbhandler.executeSql('select * from user', [], this.localdatasuccess, this.localdatafailed);
	},

	localdatasuccess: function (result) {
		SpinnerDialog.hide();
		console.log("local data success", result);
		if (result.rows.length > 0) {
			// User(s) exist on device — directly open edit screen for the first user
			var firstUser = result.rows.item(0);
			// User(s) exist on device — directly open edit screen for the first user
			var firstUser = result.rows.item(0);
			console.log(firstUser, "firstUser......................");
			var jsondata = {
				name: firstUser.name,
				deviceid: firstUser.deviceid || firstUser.deviceId,
				grade: "6th Grade",
				app_version_name: app.APP_VERSION_NAME
			};

			$.ajax({
				url: window.ApiConfig.url('login'),
				type: "POST",
				dataType: "json",
				data: JSON.stringify(jsondata),
				contentType: 'application/json; charset=UTF-8',
				accepts: 'application/json',
				success: function (jsonresp) {
					console.log("auto login sync success", jsonresp);
					if (jsonresp.status == "success") {
						var freshToken = jsonresp.description || "";
						console.log(freshToken, "freshToken");

						if (freshToken) {
							window.acctkn = freshToken;

							var pendingToken = localStorage.getItem("pending_fcm_token");
							if (pendingToken) {
								console.log("Sending pending FCM token after login:", pendingToken);
								sendFcmTokenToBackend(pendingToken, freshToken);
							} else {
								// fallback: send current token
								var currentToken = localStorage.getItem("fcm_token");
								if (currentToken) {
									console.log("Sending current FCM token after login:", currentToken);
									sendFcmTokenToBackend(currentToken, freshToken);
								}
							}

							flushPendingNotification();
						}

						// send token after login
						var token = localStorage.getItem("fcm_token");
						if (token) {
							syncFcmTokenSimple(token);
						}

						// send pending token if exists
						var pending = localStorage.getItem("pending_fcm_token");
						if (pending) {
							sendFcmTokenToBackend(pending);
							localStorage.removeItem("pending_fcm_token");
						}
					}
				},
				error: function (error) {
					console.log("auto login sync failed", error);
				}
			});
			console.log(_this.app_Mode, "_this.app_Mode................");

			_this.state.start('appLoginEditScreenbbpp', true, false, firstUser, _this.app_Mode);
			return;
		} else {
			// No local users — continue with online check / registration flow
			// _this.checkOnlineForData();
			if (_this.app_Mode == "offline") {
				_this.state.start('appLoginEditScreenbbpp', true, false, window.languageSelected, _this.app_Mode);
			} else {
				_this.checkOnlineForData();
			}
		}
		// if (result.rows.length > 0) {

		// 	_this.loadEverything(_this);
		// 	for (var i = 0; i < result.rows.length; i++) {
		// 		console.log(result.rows.item(i));
		// 		_this.userArray.push(result.rows.item(i));

		// 		// _this["" + result.rows.item(i).name.toLowerCase()].visible = true;
		// 		// _this["" + result.rows.item(i).name.toLowerCase()].inputEnabled = true;
		// 		// _this["" + result.rows.item(i).name.toLowerCase()].x = _this.pos[i][0];
		// 		// _this["" + result.rows.item(i).name.toLowerCase()].y = _this.pos[i][1];
		// 		var avatarKey = result.rows.item(i).name.toLowerCase();
		// 		if (_this[avatarKey]) {
		// 			_this[avatarKey].visible = true;
		// 			_this[avatarKey].inputEnabled = true;
		// 			_this[avatarKey].x = _this.pos[i][0];
		// 			_this[avatarKey].y = _this.pos[i][1];
		// 		}


		// 	}
		// 	// if (_this.userArray.length < 6) {
		// 	if (_this.userArray.length < 1) {
		// 		_this.regandstsrtBtn.inputEnabled = true;
		// 		_this.regandstsrtBtn.events.onInputDown.add(function () {
		// 			FirebasePlugin.logEvent("Button_click_register", { Button_click: "", item_id: "" });
		// 			//* Alraedy reg case comes here
		// 			//* see if it online you want you can call registrationLangSelectionScreen
		// 			//* If it is offline you cannot call this call registrationPicSelectionScreen
		// 			if (_this.app_Mode == "online") {
		// 				console.log("Fresh reg online", _this.userArray, _this.app_Mode);
		// 				_this.state.start('registrationLangSelectionScreenbbpp', true, false, _this.userArray, _this.app_Mode);
		// 			} else {
		// 				console.log(_this.userArray);
		// 				// _this.state.start('registrationPicSelectionScreenbbpp', true, false, window.languageSelected, _this.userArray, _this.app_Mode);
		// 				_this.state.start('appLoginEditScreenbbpp', true, false, window.languageSelected, _this.userArray, _this.app_Mode);
		// 			}
		// 		}, _this);
		// 	}
		// 	else {
		// 		_this.regandstsrtBtn.frame = 1;
		// 	}

		// }
		// else {
		// 	//* You need to shut down the app once you showing the below toast msg for 20 sec 
		// 	//* Till then you call the checkOnlineForData() function in case if the user turns on the internet
		// 	//* later you can stop calling that function and close the app 

		// 	//window.plugins.toast.show("please Connect to the network to register", 20000, "center");
		// 	//SpinnerDialog.show(null, "Building Blocks 6-8 by Akshara is loading..", true);
		// 	_this.checkOnlineForData();

		// 	// _this.closingTimer = setTimeout(function ()    //* 
		// 	// {
		// 	// 	console.log("Going to close the App");
		// 	// 	clearTimeout(_this.closingTimer);         //* clear the time once its used.
		// 	// 	navigator.app.exitApp();
		// 	// }, 22000);

		// }

	},

	localdatasuccess2: function (result) {
		SpinnerDialog.hide();
		if (result.rows.length > 0) {
			_this.loadEverything(_this);
			for (var i = 0; i < result.rows.length; i++) {
				console.log(result.rows.item(i));
				_this.userArray.push(result.rows.item(i));

				// _this["" + result.rows.item(i).name.toLowerCase()].visible = true;
				// _this["" + result.rows.item(i).name.toLowerCase()].inputEnabled = true;
				// _this["" + result.rows.item(i).name.toLowerCase()].x = _this.pos[i][0];
				// _this["" + result.rows.item(i).name.toLowerCase()].y = _this.pos[i][1];
				var avatarKey = result.rows.item(i).name.toLowerCase();
				if (_this[avatarKey]) {
					_this[avatarKey].visible = true;
					_this[avatarKey].inputEnabled = true;
					_this[avatarKey].x = _this.pos[i][0];
					_this[avatarKey].y = _this.pos[i][1];
				}

			}
			// if (_this.userArray.length < 6) {
			if (_this.userArray.length < 1) {
				_this.regandstsrtBtn.inputEnabled = true;
				_this.regandstsrtBtn.events.onInputDown.add(function () {
					//* Alraedy reg case comes here
					//* see if it online you want you can call registrationLangSelectionScreen
					//* If it is offline you cannot call this call registrationPicSelectionScreen
					if (_this.app_Mode == "online") {
						_this.state.start('registrationLangSelectionScreenbbpp', true, false, _this.userArray, _this.app_Mode);
					} else {
						console.log(_this.userArray);
						_this.state.start('appLoginEditScreenbbpp', true, false, window.languageSelected, _this.userArray, _this.app_Mode);
						// _this.state.start('registrationPicSelectionScreenbbpp', true, false, window.languageSelected, _this.userArray, _this.app_Mode);
					}
				}, _this);
			}
			else {
				_this.regandstsrtBtn.frame = 1;
			}

		}
		else {
			//* Fresh registration case comes here
			//* see if it online you want you can call registrationLangSelectionScreen
			//* If it is offline you cannot call this call registrationPicSelectionScreen
			if (_this.app_Mode == "online") {
				_this.state.start('registrationLangSelectionScreenbbpp', true, false, _this.userArray, _this.app_Mode);
			} else {
				console.log("Pic selection")
				_this.state.start('appLoginEditScreenbbpp', true, false, window.languageSelected, _this.userArray, _this.app_Mode);
				// _this.state.start('registrationPicSelectionScreenbbpp', true, false, window.languageSelected, _this.userArray, _this.app_Mode);
			}

		}

	},


	localdatafailed: function (error) {
		window.plugins.toast.show("something went wrong Try Again", 3000, "bottom");
	},

	checkOnlineForData: function () {
		// console.log(device.serial + "_" + device.uuid);
		// var jsondata = { name: _this.avatarName[0], deviceid: device.serial + "_" + device.uuid };
		console.log("checkOnlineForData");
		FirebasePlugin.getInstallationId(function (id) {
			console.log("Got installation ID: " + id);
			var jsondata = { name: _this.avatarName[0], deviceid: id, grade: "6th Grade", app_version_name: app.APP_VERSION_NAME };
			console.log(jsondata);

			if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
				// var apiurl = "https://abbmath.klp.org.in/abbppchmprm/login";
				var apiurl = window.ApiConfig.url('login');
				//var apiurl = "https://10.0.2.2/abbppchmprm/login";
				$.ajax({
					url: apiurl,
					type: "POST",
					dataType: "json",
					//async:false, // set to false to perform a synchronous request
					data: JSON.stringify(jsondata),
					contentType: 'application/json; charset=UTF-8',
					accepts: 'application/json',
					success: function (jsonresp) {
						console.log(jsonresp);
						if (jsonresp.status == "success") {
							// window.plugins.toast.show(jsonresp.status, 3000, "bottom");
							_this.checkOnlineForData2(jsonresp.description);

						}
						else {
							//window.plugins.toast.show(jsonresp.status+"\n"+jsonresp.description, 3000, "bottom");
							_this.avatarName.shift();
							if (_this.avatarName.length > 0)
								_this.checkOnlineForData();
							else {
								console.log("finish");
								bbregloginbbpp.bbdbhandler.executeSql('select * from user', [], _this.localdatasuccess2, _this.localdatafailed);
							}
						}

					},
					error: function (error) {
						console.log(error);
						window.plugins.toast.show(error, 1000, "bottom");
					}

				});
			}
			else {
				// window.plugins.toast.show("please check your internet connection and try again", "long", "bottom");
				// // document.addEventListener("online", _this.checkNetwork, false);
				// // //*** 14-08-2023 */
				//  navigator.app.exitApp();
				_this.showToast("please check your internet connection and try again", 4000);
			}
		}, function (error) {
			console.error("Failed to get installation ID", error);
		});
	},

	showToast: function (message, duration) {
		window.plugins.toast.show(message, 'long', 'center');

		if (duration > 0) {
			setTimeout(function () {
				window.plugins.toast.hide();
				navigator.app.exitApp();
			}, duration);
		}
	},

	checkNetwork: function () {
		document.removeEventListener("online", _this.checkNetwork, false);
		_this.checkOnlineForData();
	},

	checkOnlineForData2: function (acc_token) {
		//	var jsondata = { name: _this.avatarName[0], deviceid: device.serial + "_" + device.uuid };
		FirebasePlugin.getInstallationId(function (id) {
			console.log("Got installation ID: " + id);

			var jsondata = { name: _this.avatarName[0], deviceid: id, grade: "6th Grade" };

			if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
				// var apiurl = "https://abbmath.klp.org.in/abbppchmprm/getchild";
				var apiurl = window.ApiConfig.url('getchild');
				//var apiurl = "https://10.0.2.2/abbppchmprm/getchild";

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

							bbregloginbbpp.bbdbhandler.executeSql("insert into user(uid, name, language, deviceId, grade) values (?,?,?,?,?)", [acc_token, jsonresp.name, jsonresp.language, jsonresp.deviceid, (jsonresp.grade || '6th Grade')], null, null);

							_this.avatarName.shift();
							if (_this.avatarName.length > 0)
								_this.checkOnlineForData();
							else {
								console.log("finish");
								bbregloginbbpp.bbdbhandler.executeSql('select * from user', [], _this.localdatasuccess, _this.localdatafailed);
							}

						}
						else {
							window.plugins.toast.show(jsonresp.status + "\n" + jsonresp.description, 3000, "bottom");
							_this.avatarName.shift();
							if (_this.avatarName.length > 0)
								_this.checkOnlineForData();
							else {
								console.log("finish");
								bbregloginbbpp.bbdbhandler.executeSql('select * from user', [], _this.localdatasuccess, _this.localdatafailed);
							}
						}
					},
					error: function (error) {
						console.log(error);
						window.plugins.toast.show(error, 3000, "bottom");

					}

				});
			}
			else {
				// window.plugins.toast.show("please check your internet connection and try again", "long", "bottom");
				// //*** 14-08-2023 */
				// navigator.app.exitApp();
				_this.showToast("please check your internet connection and try again", 4000);
			}
		}, function (error) {
			console.error("Failed to get installation ID", error);
		});
	},
};

function successFunction() {
	console.log('Immersive mode set successfully.');
}

function errorFunction(error) {
	console.error('Error setting immersive mode:', error);
}
