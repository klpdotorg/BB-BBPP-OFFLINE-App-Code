Game.practiceModegradeSelectionScreenbbpp = function () {

};
grade2Selected = false;
var gradeSelected = null;
var gradeScreen = false;

var selectgrade6MicroConcept = false;
var selectgrade7MicroConcept = false;

var grade6NumberSystemsSelected = false;
var grade6AlgebraSelected = false;
var grade6RatioandProportionSelected = false;
var grade6GeometrySelected = false;
var grade6DecimalsSelected = false;

var grade7NumberSystemsSelected = false;
var grade7AlgebraSelected = false;
var grade7RatioandProportionSelected = false;
var grade7GeometrySelected = false;
var grade7DecimalsSelected = false;


Game.practiceModegradeSelectionScreenbbpp.prototype = {

	init: function () {
		_this = this;

		exitOnce = false;

		// 12-01-2023
		screen.orientation.lock('landscape');
		AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_FULLSCREEN, null, null);

		_this.game.scale.setGameSize(960, 540);

		_this.scale.forceOrientation(false, true);

		if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
			console.log("sync telemetry" + navigator.connection.type);
			abbprmdsjsapi.syncTelemetryData();
		}
		document.addEventListener("online", _this.syncTelFunc, false);

		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
	},

	onDeviceReady: function () {
		//this.receivedEvent('deviceready');
		AndroidFullScreen.immersiveMode(successFunction, errorFunction);
	},

	syncTelFunc: function () {
		if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
			console.log("sync telemetry" + navigator.connection.type);
			abbprmdsjsapi.syncTelemetryData();
		}
	},

	create: function (game) {
		console.log("I am in practicebbpp");

		window.prevScreen = "gameScreen";
		window.currScreen = "practiceModegradeSelectionScreenbbpp";

		nativeApp.screenViewStringPass("Practice_class_selection_screen", "Practice_class_selection_screen");

		if (selectgrade6MicroConcept == true) {
			_this.state.start('selectgrade6MicroConceptScreen', true, false);
		} else if (selectgrade7MicroConcept == true) {
			_this.state.start('selectgrade7MicroConceptScreen', true, false);
		}
		else {
			gradeSelected = null;
			gradeScreen = true;

			//adding bg, title to the scene.
			_this.game.stage.disableVisibilityChange = true;
			_this.input.enabled = true;
			_this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'gameselectBg');
			_this.gradeBackBtn = _this.add.sprite(-5, 3, 'gradeSceneBackBtn');
			_this.gradeBackBtn.inputEnabled = true;
			_this.gradeBackBtn.input.useHandCursor = true;
			_this.gradeBackBtn.events.onInputDown.add(function () {

				if (window.user.deviceId) {
					console.log(window.user.deviceId, "If condition Check");
					window.user.deviceid = window.user.deviceId;
				}
				console.log(window.user.deviceid, "PRACTICE JS BACK BTN");

				game.state.start('appLoginEditScreenbbpp', true, false, window.user, window.app_Mode);
				// game.state.start('adSplashScreenbbpp', true, false, window.user, window.app_Mode);

			}, _this);

			this.gameProgressBtn = game.add.image(820, 18, 'userProgressIcon');//870, 18,
			this.gameProgressBtn.anchor.setTo(0.5);
			this.gameProgressBtn.scale.setTo(0.8);
			this.gameProgressBtn.inputEnabled = true;
			this.gameProgressBtn.input.useHandCursor = true;
			this.gameProgressBtn.events.onInputDown.add(function () {
				this.clickSound = this.add.audio('ClickSound');
				this.clickSound.play();
				if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
					this.state.start('userprogressbbpp', true, false);
				} else {
					nativeApp.CallUserProgress();
				}
			}, this);


			this.gameModeShareBtn = game.add.image(870, 18, 'shareIcon');//920, 18,
			this.gameModeShareBtn.anchor.setTo(0.5);
			this.gameModeShareBtn.scale.setTo(0.75);
			this.gameModeShareBtn.inputEnabled = true;
			this.gameModeShareBtn.input.useHandCursor = true;
			this.gameModeShareBtn.events.onInputDown.add(function () {
				this.clickSound = this.add.audio('ClickSound');
				this.clickSound.play();
				nativeApp.ShareApp();
			}, this);

			if (this.video == null) {
				this.video = this.add.video('demo');

			}

			//adding grade clouds
			_this.grade6Cloud = _this.add.sprite(220, 180, 'gradeCloud');
			_this.grade6Cloud.anchor.setTo(0.5);
			_this.grade6Cloud.name = "grade6";
			_this.grade6Cloud.inputEnabled = true;
			_this.grade6Cloud.input.useHandCursor = true;
			_this.grade6Cloud.events.onInputDown.add(_this.gradeSelected, _this);
			_this.grade6CloudTxt = this.add.text(210, 178, ' \n' + window.selctedLang.grade6 + '\n ');
			_this.grade6CloudTxt.anchor.setTo(0.5);
			_this.grade6CloudTxt.align = 'center';
			_this.grade6CloudTxt.font = 'gradefont';
			if (_this.languageSelected == "Tamil")
				_this.grade6CloudTxt.fontSize = 30;
			else
				_this.grade6CloudTxt.fontSize = 34;
			_this.grade6CloudTxt.fontWeight = 'normal';
			_this.grade6CloudTxt.fill = '#563814';
			_this.grade6CloudTxt.wordWrap = true;
			_this.grade6CloudTxt.wordWrapWidth = 500;

			_this.grade7Cloud = _this.add.sprite(750, 200, 'gradeCloud');
			_this.grade7Cloud.anchor.setTo(0.5);
			_this.grade7Cloud.name = "grade7";
			_this.grade7Cloud.inputEnabled = true;
			_this.grade7Cloud.input.useHandCursor = true;
			_this.grade7Cloud.events.onInputDown.add(_this.gradeSelected, _this);
			_this.grade7CloudTxt = this.add.text(740, 198, ' \n' + window.selctedLang.grade7 + '\n ');
			_this.grade7CloudTxt.anchor.setTo(0.5);
			_this.grade7CloudTxt.align = 'center';
			_this.grade7CloudTxt.font = 'gradefont';
			if (_this.languageSelected == "Tamil")
				_this.grade7CloudTxt.fontSize = 30;
			else
				_this.grade7CloudTxt.fontSize = 34;
			_this.grade7CloudTxt.fontWeight = 'normal';
			_this.grade7CloudTxt.fill = '#563814';
			_this.grade7CloudTxt.wordWrap = true;
			_this.grade7CloudTxt.wordWrapWidth = 500;

			_this.grade8Cloud = _this.add.sprite(460, 330, 'gradeCloud');
			_this.grade8Cloud.anchor.setTo(0.5);
			_this.grade8Cloud.name = "grade8";
			_this.grade8Cloud.inputEnabled = true;
			_this.grade8Cloud.input.useHandCursor = true;
			_this.grade8Cloud.events.onInputDown.add(_this.gradeSelected, _this);
			_this.grade8CloudTxt = this.add.text(450, 328, ' \n' + window.selctedLang.grade8 + ' \n ');
			_this.grade8CloudTxt.anchor.setTo(0.5);
			_this.grade8CloudTxt.align = 'center';
			_this.grade8CloudTxt.font = 'gradefont';
			if (_this.languageSelected == "Tamil")
				_this.grade8CloudTxt.fontSize = 30;
			else
				_this.grade8CloudTxt.fontSize = 34;
			_this.grade8CloudTxt.fontWeight = 'normal';
			_this.grade8CloudTxt.fill = '#563814';
			_this.grade8CloudTxt.wordWrap = true;
			_this.grade8CloudTxt.wordWrapWidth = 500;

			_this.graphicsBg = _this.add.graphics(0, 0);
			_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
			_this.graphicsBg.beginFill(0xF7D519, 0);
			_this.graphicsBg.drawRect(0, 0, 1920, 540);
			_this.graphicsBg.boundsPadding = 0;


			//	_this.languageSelected = localStorage.getItem("language");

			if (_this.languageSelected == "HIN") {
				_this.grade6Cloud.frame = 1;
				_this.grade2Cloud.frame = 1;
				_this.grade8Cloud.frame = 1;
				//_this.grade4Cloud.frame = 1;
				//_this.grade5Cloud.frame = 1;
			}
			else if (_this.languageSelected == "KAN") {
				_this.grade6Cloud.frame = 2;
				_this.grade2Cloud.frame = 2;
				_this.grade8Cloud.frame = 2;
				//_this.grade4Cloud.frame = 2;
				//_this.grade5Cloud.frame = 2;
			}
			else {
				_this.grade6Cloud.frame = 0;
				_this.grade7Cloud.frame = 0;
				_this.grade8Cloud.frame = 0;
				// _this.grade4Cloud.frame = 0;
				// _this.grade5Cloud.frame = 0;
			}

			_this.graphicsBg.addChild(_this.grade6Cloud);
			_this.graphicsBg.addChild(_this.grade7Cloud);
			_this.graphicsBg.addChild(_this.grade8Cloud);

			_this.graphicsBg.addChild(_this.grade6CloudTxt);
			_this.graphicsBg.addChild(_this.grade7CloudTxt);
			_this.graphicsBg.addChild(_this.grade8CloudTxt);

		}

	},

	onMouseOver: function (target) {


	},

	gradeSelected: function (target) {

		_this.gradeBackBtn.events.onInputDown.removeAll();
		_this.grade6Cloud.events.onInputDown.removeAll();
		_this.grade7Cloud.events.onInputDown.removeAll();
		_this.grade8Cloud.events.onInputDown.removeAll();
		// _this.grade4Cloud.events.onInputDown.removeAll();

		_this.clickSound = _this.add.audio('ClickSound');
		_this.clickSound.play();


		switch (target.name) {
			case "grade6":
				gradeSelected = 6;
				grade2Selected = false;
				_this.state.start('selectgrade6MicroConceptScreen', true, false);
				break;
			case "grade7":
				gradeSelected = 7;
				grade2Selected = true;
				_this.state.start('selectgrade7MicroConceptScreen', true, false);
				break;
			case "grade8":
				gradeSelected = 8;
				grade2Selected = false;
				_this.state.start('selectgrade8MicroConceptScreen', true, false);
				break;
			case "grade4":
				gradeSelected = 4;
				grade2Selected = false;
				_this.state.start('selectgrade4MicroConceptScreen', true, false);
				break;
			case "grade5":
				gradeSelected = 5;
				grade2Selected = false;
				_this.state.start('selectgrade5MicroConceptScreen', true, false);
				break;
		}
	},

	shutdown: function () {
		window.currScreen = "";
		document.removeEventListener("online", _this.syncTelFunc, false);
	}

};
function successFunction() {
	console.log('Immersive mode set successfully.');
}

function errorFunction(error) {
	console.error('Error setting immersive mode:', error);
}
