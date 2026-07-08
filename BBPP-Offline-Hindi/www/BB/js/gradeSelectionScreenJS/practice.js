Game.practiceModegradeSelectionScreen = function () {

};
var grade2Selected = false;
var gradeSelected = null;
var gradeScreen = false;

var selectgrade1MicroConcept = false;
var selectgrade2MicroConcept = false;
var selectgrade3MicroConcept = false;
var selectgrade4MicroConcept = false;
var selectgrade5MicroConcept = false;

var grade1NumberSenseSelected = false;
var grade1NumberOperationSelected = false;
var grade1MeasurementSelected = false;
var grade1ShapesSenseSelected = false;

var grade2NumberSenseSelected = false;
var grade2NumberOperationSelected = false;
var grade2MeasurementSelected = false;
var grade2ShapesSenseSelected = false;

var grade3NumberSenseSelected = false;
var grade3NumberOperationSelected = false;
var grade3MeasurementSelected = false;
var grade3ShapesSenseSelected = false;

var grade4NumberSenseSelected = false;
var grade4MeasurementSelected = false;
var grade4NumberOperationSelected = false;
var grade4ShapesSenseSelected = false;
var grade4DataHandlingSelected = false;

var grade5NumberSenseSelected = false;
var grade5MeasurementSelected = false;
var grade5NumberOperationSelected = false;
var grade5ShapesSenseSelected = false;
var grade5DataHandlingSelected = false;

Game.practiceModegradeSelectionScreen.prototype = {

	init: function () {
		_this = this;

		exitOnce = false;

		if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
			console.log("sync telemetry" + navigator.connection.type);
			//absdsjsapi.syncTelemetryData();
		}
		document.addEventListener("online", _this.syncTelFunc, false);

		screen.orientation.lock('landscape');
		AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_FULLSCREEN, null, null);

		_this.game.scale.setGameSize(960, 540);

		_this.scale.forceOrientation(false, true);
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

	},

	onDeviceReady: function () {
		//this.receivedEvent('deviceready');
		AndroidFullScreen.immersiveMode(successFunction, errorFunction);
	},

	syncTelFunc: function () {
		if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
			console.log("sync telemetry" + navigator.connection.type);
			//absdsjsapi.syncTelemetryData();
		}
	},

	create: function (game) {

		window.prevScreen = "gameModeSelectionScreen";
		window.currScreen = "practiceModegradeSelectionScreen";

		nativeApp.screenViewStringPass("Practice_class_selection_screen", "Practice_class_selection_screen");

		if (selectgrade1MicroConcept == true) {
			_this.state.start('selectgrade1MicroConceptScreen', true, false);
		}
		else if (selectgrade2MicroConcept == true) {
			_this.state.start('selectgrade2MicroConceptScreen', true, false);
		}
		else if (selectgrade3MicroConcept == true) {
			_this.state.start('selectgrade3MicroConceptScreen', true, false);
		}
		else if (selectgrade4MicroConcept == true) {
			_this.state.start('selectgrade4MicroConceptScreen', true, false);
		}
		else if (selectgrade5MicroConcept == true) {
			_this.state.start('selectgrade5MicroConceptScreen', true, false);
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

				game.state.start('gameModeSelectionScreen', true, false);
			}, _this);

			this.gameProgressBtn = game.add.image(870, 18, 'userProgressIcon');
			this.gameProgressBtn.anchor.setTo(0.5);
			this.gameProgressBtn.scale.setTo(0.8);
			this.gameProgressBtn.inputEnabled = true;
			this.gameProgressBtn.input.useHandCursor = true;
			this.gameProgressBtn.events.onInputDown.add(function () {
				this.clickSound = this.add.audio('ClickSound');
				this.clickSound.play();
				if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
					this.state.start('userprogress', true, false);
				} else {
					nativeApp.CallUserProgress();
				}

			}, this);


			this.gameModeShareBtn = game.add.image(920, 18, 'shareIcon');
			this.gameModeShareBtn.anchor.setTo(0.5);
			this.gameModeShareBtn.scale.setTo(0.75);
			this.gameModeShareBtn.inputEnabled = true;
			this.gameModeShareBtn.input.useHandCursor = true;
			this.gameModeShareBtn.events.onInputDown.add(function () {
				this.clickSound = this.add.audio('ClickSound');
				this.clickSound.play();
				//if(appConfig.cordova && !appConfig.browser)
				//{
				nativeApp.ShareApp();
				//}

			}, this);


			if (this.video == null) {
				this.video = this.add.video('demo');

			}

			this.helpIcon = game.add.image(820, 21, 'helpIcon');
			this.helpIcon.scale.setTo(0.8);
			this.helpIcon.anchor.setTo(0.5);
			this.helpIcon.inputEnabled = true;
			this.helpIcon.input.useHandCursor = true;
			this.helpIcon.events.onInputDown.add(function () {
				this.clickSound = this.add.audio('ClickSound');
				this.clickSound.play();
				//if(appConfig.cordova && !appConfig.browser)
				//{
				_this.scale.forceOrientation(false, true);
				nativeApp.playHelp(this, "practiceModegradeSelectionScreen");
				//}

			}, this);

			//adding grade clouds
			//_this.grade1Cloud = _this.add.sprite(220,170,'grade1Cloud');
			_this.grade1Cloud = _this.add.sprite(220, 170, 'gradeCloud');
			_this.grade1Cloud.anchor.setTo(0.5);
			_this.grade1Cloud.name = "grade1";
			_this.grade1Cloud.inputEnabled = true;
			_this.grade1Cloud.input.useHandCursor = true;
			//_this.grade1Cloud.events.onInputOver.add(_this.onMouseOver,_this);
			_this.grade1Cloud.events.onInputDown.add(_this.gradeSelected, _this);




			_this.grade1CloudTxt = this.add.text(210, 168, ' \n ' + window.selctedLang.grade1 + ' \n ');
			_this.grade1CloudTxt.anchor.setTo(0.5);
			_this.grade1CloudTxt.align = 'center';


			_this.grade1CloudTxt.font = 'gradefont';

			if (window.languageSelected == "Tamil")
				_this.grade1CloudTxt.fontSize = 30;
			else
				_this.grade1CloudTxt.fontSize = 34;
			_this.grade1CloudTxt.fontWeight = 'normal';
			_this.grade1CloudTxt.fill = '#563814';

			_this.grade1CloudTxt.wordWrap = true;
			_this.grade1CloudTxt.wordWrapWidth = 500;
			
			_this.grade2Cloud = _this.add.sprite(750, 190, 'gradeCloud');

			_this.grade2Cloud.anchor.setTo(0.5);
			_this.grade2Cloud.name = "grade2";
			_this.grade2Cloud.inputEnabled = true;
			_this.grade2Cloud.input.useHandCursor = true;
			//grade2Cloud.events.onInputOver.add(_this.onMouseOver,_this);
			_this.grade2Cloud.events.onInputDown.add(_this.gradeSelected, _this);



			_this.grade2CloudTxt = this.add.text(740, 188, ' \n ' + window.selctedLang.grade2 + ' \n ');
			_this.grade2CloudTxt.anchor.setTo(0.5);
			_this.grade2CloudTxt.align = 'center';


			_this.grade2CloudTxt.font = 'gradefont';
			if (window.languageSelected == "Tamil")
				_this.grade2CloudTxt.fontSize = 30;
			else
				_this.grade2CloudTxt.fontSize = 34;
			_this.grade2CloudTxt.fontWeight = 'normal';
			_this.grade2CloudTxt.fill = '#563814';

			_this.grade2CloudTxt.wordWrap = true;
			_this.grade2CloudTxt.wordWrapWidth = 500;
		
			_this.grade3Cloud = _this.add.sprite(_this.world.centerX, _this.world.centerY, 'gradeCloud');

			_this.grade3Cloud.anchor.setTo(0.5);
			_this.grade3Cloud.name = "grade3";
			_this.grade3Cloud.inputEnabled = true;
			_this.grade3Cloud.input.useHandCursor = true;
			//grade3Cloud.events.onInputOver.add(_this.onMouseOver,_this);
			_this.grade3Cloud.events.onInputDown.add(_this.gradeSelected, _this);


			_this.grade3CloudTxt = this.add.text(_this.world.centerX, _this.world.centerY, ' \n ' + window.selctedLang.grade3 + ' \n ');
			_this.grade3CloudTxt.anchor.setTo(0.5);
			_this.grade3CloudTxt.align = 'center';


			_this.grade3CloudTxt.font = 'gradefont';
			if (window.languageSelected == "Tamil")
				_this.grade3CloudTxt.fontSize = 30;
			else
				_this.grade3CloudTxt.fontSize = 34;
			_this.grade3CloudTxt.fontWeight = 'normal';
			_this.grade3CloudTxt.fill = '#563814';

			_this.grade3CloudTxt.wordWrap = true;
			_this.grade3CloudTxt.wordWrapWidth = 500;
		
			_this.grade4Cloud = _this.add.sprite(250, 400, 'gradeCloud');

			_this.grade4Cloud.anchor.setTo(0.5);
			_this.grade4Cloud.name = "grade4";
			_this.grade4Cloud.inputEnabled = true;
			_this.grade4Cloud.input.useHandCursor = true;
			//grade4Cloud.events.onInputOver.add(_this.onMouseOver,_this);
			_this.grade4Cloud.events.onInputDown.add(_this.gradeSelected, _this);


			_this.grade4CloudTxt = this.add.text(240, 398, ' \n ' + window.selctedLang.grade4 + ' \n ');
			_this.grade4CloudTxt.anchor.setTo(0.5);
			_this.grade4CloudTxt.align = 'center';


			_this.grade4CloudTxt.font = 'gradefont';
			if (window.languageSelected == "Tamil")
				_this.grade4CloudTxt.fontSize = 30;
			else
				_this.grade4CloudTxt.fontSize = 34;
			_this.grade4CloudTxt.fontWeight = 'normal';
			_this.grade4CloudTxt.fill = '#563814';

			_this.grade4CloudTxt.wordWrap = true;
			_this.grade4CloudTxt.wordWrapWidth = 500;
		
			_this.grade5Cloud = _this.add.sprite(700, 420, 'gradeCloud');

			_this.grade5Cloud.anchor.setTo(0.5);
			_this.grade5Cloud.name = "grade5";
			_this.grade5Cloud.inputEnabled = true;
			_this.grade5Cloud.input.useHandCursor = true;
			//grade4Cloud.events.onInputOver.add(_this.onMouseOver,_this);
			_this.grade5Cloud.events.onInputDown.add(_this.gradeSelected, _this);


			_this.grade5CloudTxt = this.add.text(690, 418, ' \n ' + window.selctedLang.grade5 + ' \n ');
			_this.grade5CloudTxt.anchor.setTo(0.5);
			_this.grade5CloudTxt.align = 'center';


			_this.grade5CloudTxt.font = 'gradefont';
			if (window.languageSelected == "Tamil")
				_this.grade5CloudTxt.fontSize = 32;
			else
				_this.grade5CloudTxt.fontSize = 34;
			_this.grade5CloudTxt.fontWeight = 'normal';
			_this.grade5CloudTxt.fill = '#563814';

			_this.grade5CloudTxt.wordWrap = true;
			_this.grade5CloudTxt.wordWrapWidth = 500;
		
			_this.graphicsBg = _this.add.graphics(0, 0);
			_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
			_this.graphicsBg.beginFill(0xF7D519, 0);
			_this.graphicsBg.drawRect(0, 0, 1920, 540);
			_this.graphicsBg.boundsPadding = 0;

			if (window.languageSelected == "Hindi") {
				_this.grade1Cloud.frame = 1;
				_this.grade2Cloud.frame = 1;
				_this.grade3Cloud.frame = 1;
				_this.grade4Cloud.frame = 1;
				_this.grade5Cloud.frame = 1;
			}
			else if (window.languageSelected == "Kannada") {
				_this.grade1Cloud.frame = 2;
				_this.grade2Cloud.frame = 2;
				_this.grade3Cloud.frame = 2;
				_this.grade4Cloud.frame = 2;
				_this.grade5Cloud.frame = 2;
			}
			else {
				_this.grade1Cloud.frame = 0;
				_this.grade2Cloud.frame = 0;
				_this.grade3Cloud.frame = 0;
				_this.grade4Cloud.frame = 0;
				_this.grade5Cloud.frame = 0;
			}

			_this.graphicsBg.addChild(_this.grade1Cloud);
			_this.graphicsBg.addChild(_this.grade2Cloud);
			_this.graphicsBg.addChild(_this.grade3Cloud);
			_this.graphicsBg.addChild(_this.grade4Cloud);
			_this.graphicsBg.addChild(_this.grade5Cloud);


			_this.graphicsBg.addChild(_this.grade1CloudTxt);
			_this.graphicsBg.addChild(_this.grade2CloudTxt);
			_this.graphicsBg.addChild(_this.grade3CloudTxt);
			_this.graphicsBg.addChild(_this.grade4CloudTxt);
			_this.graphicsBg.addChild(_this.grade5CloudTxt);

		}
	},

	onMouseOver: function (target) {


	},

	gradeSelected: function (target) {

		_this.gradeBackBtn.events.onInputDown.removeAll();
		_this.grade1Cloud.events.onInputDown.removeAll();
		_this.grade2Cloud.events.onInputDown.removeAll();
		_this.grade3Cloud.events.onInputDown.removeAll();
		_this.grade4Cloud.events.onInputDown.removeAll();


		_this.clickSound = _this.add.audio('ClickSound');
		_this.clickSound.play();


		switch (target.name) {
			case "grade1":
				gradeSelected = 1;
				grade2Selected = false;
				_this.state.start('selectgrade1MicroConceptScreen', true, false);
				break;
			case "grade2":
				gradeSelected = 2;
				grade2Selected = true;
				_this.state.start('selectgrade2MicroConceptScreen', true, false);
				break;
			case "grade3":
				gradeSelected = 3;
				grade2Selected = false;
				_this.state.start('selectgrade3MicroConceptScreen', true, false);
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