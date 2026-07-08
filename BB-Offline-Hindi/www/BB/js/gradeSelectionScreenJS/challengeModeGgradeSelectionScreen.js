Game.challengeModeGgradeSelectionScreen = function () {

};
var measurement1 = false;
var measurement2 = false;
var measurement3 = false;
var measurement4 = false;
var numberSense1 = false;
var numberSense2 = false;
var numberSense3 = false;
var numberSense4 = false;
var numberSense5 = false;
var numberSense6 = false;
var numberSense7 = false;
var numberOpertaion1 = false;
var numberOpertaion2 = false;
var numberOpertaion3 = false;
var numberOpertaion4 = false;

Game.challengeModeGgradeSelectionScreen.prototype = {

	init: function () {
		_this = this;

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

	create: function (game) {


		measurement1 = false;
		measurement2 = false;
		measurement3 = false;
		measurement4 = false;
		numberSense1 = false;
		numberSense2 = false;
		numberSense3 = false;
		numberSense4 = false;
		numberSense5 = false;
		numberSense6 = false;
		numberSense7 = false;
		numberOpertaion1 = false;
		numberOpertaion2 = false;
		numberOpertaion3 = false;
		numberOpertaion4 = false;

		window.prevScreen = "gameModeSelectionScreen";
		window.currScreen = "challengeModeGgradeSelectionScreen";

		nativeApp.screenViewStringPass("Challenge_topic_selection_screen", "Challenge_topic_selection");

		_this.game.stage.disableVisibilityChange = true;
		_this.input.enabled = true;

		_this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'landingBg');

		_this.navBar = _this.add.sprite(0, 0, 'landingnavBar');

		_this.backBtn = _this.add.sprite(30, 21, 'landingbackBtn');
		_this.backBtn.anchor.setTo(0.5);
		_this.backBtn.inputEnabled = true;
		_this.backBtn.events.onInputDown.add(function () {
			game.state.start('gameModeSelectionScreen', true, false);
		}, this);


		this.gameProgressBtn = game.add.image(920, 21, 'userProgressIcon');
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
			nativeApp.playHelp(this, "challengeModeGgradeSelectionScreen");
			//}

		}, this);

		this.scoreBg = this.add.sprite(750, 7, 'scoreBg');

		this.scoreVar = parseInt(window.score);

		this.scoreTxt = this.add.text(815, 24, this.scoreVar);
		this.scoreTxt.anchor.setTo(0.5);
		this.scoreTxt.align = 'center';
		this.scoreTxt.font = 'myfont';
		this.scoreTxt.fontWeight = 'normal';
		this.scoreTxt.fontSize = 20;
		this.scoreTxt.fill = '#ADFF2F';

		this.measurementState = localStorage.getItem("measurementPlayed");
		this.numbersenseState = localStorage.getItem("numbersensePlayed");
		this.numberoperationState = localStorage.getItem("numberoperationPlayed");

		this.addNumberSenseGroup();
		this.addMeasurementGroup();
		this.addNumberoperationGroup();
		this.addDatahandlingGroup();
		this.addshapesGroup();

	},

	addNumberSenseGroup: function () {
		this.numbersenseBoard = _this.add.sprite(150, 185, 'numbersenseBoard');
		this.numbersenseBoard.anchor.setTo(0.5);

		this.numbersenseTxt = this.add.text(150, 178, "Number Sense");
		this.numbersenseTxt.fontSize = 18;

		if (window.languageSelected == "Gujarati") {
			this.numbersenseTxt.setText("નંબર જ્ઞાન");
		}
		else if (window.languageSelected == "Hindi") {
			this.numbersenseTxt.setText("नंबर ज्ञान");
		}
		else if (window.languageSelected == "Kannada") {
			this.numbersenseTxt.setText("ಸಂಖ್ಯೆ ಪರಿಚಯ");
			this.numbersenseTxt.fontSize = 14;
		}
		else if (window.languageSelected == "Odiya") {
			this.numbersenseTxt.setText("ସଂଖ୍ୟା ପରିଚୟ");
		}
		else if (window.languageSelected == "Marathi") {
			this.numbersenseTxt.setText("संख्या ज्ञान");
		}
		else if (window.languageSelected == "Telugu") {
			this.numbersenseTxt.setText("అంకెల జ్ఞానం");
		}
		else if (window.languageSelected == "Tamil") {
			this.numbersenseTxt.setText("எண் அறிவு");
		}
		else if (window.languageSelected == "Urdu") {
			this.numbersenseTxt.setText("اعداد کی پہچان");
		}
		else {
			this.numbersenseTxt.setText("Number Sense");
		}

		this.numbersenseTxt.anchor.setTo(0.5);
		this.numbersenseTxt.align = 'center';

		this.numbersenseTxt.font = 'gradefont';

		this.numbersenseTxt.fill = '#FFFF00';


		this.numberSense1 = _this.add.sprite(90, 100, 'numberSense1');
		this.numberSense1.anchor.setTo(0.5);
		this.numberSense1.name = "numberSense1";
		this.numberSense1.inputEnabled = true;
		this.numberSense1.events.onInputDown.add(this.iconClicked, this);

		this.numberSense2 = _this.add.sprite(185, 110, 'numberSense2');
		this.numberSense2.anchor.setTo(0.5);
		this.numberSense2.name = "numberSense2";
		this.numberSense2.inputEnabled = true;
		this.numberSense2.events.onInputDown.add(this.iconClicked, this);

		this.numberSense3 = _this.add.sprite(250, 100, 'numberSense3');
		this.numberSense3.anchor.setTo(0.5);
		this.numberSense3.name = "numberSense3";
		this.numberSense3.inputEnabled = true;
		this.numberSense3.events.onInputDown.add(this.iconClicked, this);

		this.numberSense4 = _this.add.sprite(340, 100, 'numberSense4');
		this.numberSense4.anchor.setTo(0.5);
		this.numberSense4.name = "numberSense4";
		this.numberSense4.inputEnabled = true;
		this.numberSense4.events.onInputDown.add(this.iconClicked, this);

		this.numberSense5 = _this.add.sprite(410, 100, 'numberSense5');
		this.numberSense5.anchor.setTo(0.5);
		this.numberSense5.name = "numberSense5";
		this.numberSense5.inputEnabled = true;
		this.numberSense5.events.onInputDown.add(this.iconClicked, this);

		this.numberSense6 = _this.add.sprite(500, 100, 'numberSense6');
		this.numberSense6.anchor.setTo(0.5);
		this.numberSense6.name = "numberSense6";
		this.numberSense6.inputEnabled = true;
		this.numberSense6.events.onInputDown.add(this.iconClicked, this);

		this.numberSense7 = _this.add.sprite(590, 110, 'numberSense7');
		this.numberSense7.anchor.setTo(0.5);
		this.numberSense7.name = "numberSense7";
		this.numberSense7.inputEnabled = true;
		this.numberSense7.events.onInputDown.add(this.iconClicked, this);

		this.numbersenseGrp = this.add.group();
		this.numbersenseGrp.add(this.numberSense1);
		this.numbersenseGrp.add(this.numberSense2);
		this.numbersenseGrp.add(this.numberSense3);
		this.numbersenseGrp.add(this.numberSense4);
		this.numbersenseGrp.add(this.numberSense5);
		this.numbersenseGrp.add(this.numberSense6);
		this.numbersenseGrp.add(this.numberSense7);


		if (this.numbersenseState == "notplayed") {
			this.numbersenseGrp.setAll("frame", 0);
		}
		else if (this.numbersenseState == "played") {
			this.numbersenseGrp.setAll("frame", 1);
		}
		else {
			this.numbersenseGrp.setAll("frame", 2);
		}

		this.numberSense6.frame = 2;
		this.numberSense7.frame = 2;

		this.numberSense6.visible = false;
		this.numberSense7.visible = false;

		this.numbersenseGrp.setAll("frame", 1);
	},

	addMeasurementGroup: function () {
		this.measurementBoard = _this.add.sprite(765, 110, 'measurementBoard');
		this.measurementBoard.anchor.setTo(0.5);

		this.measurementTxt = this.add.text(765, 102, "Measurements");
		this.measurementTxt.fontSize = 18;

		if (window.languageSelected == "Gujarati") {
			this.measurementTxt.setText("માપ");
		}
		else if (window.languageSelected == "Hindi") {
			this.measurementTxt.setText("\n नाप तोल \n");
		}
		else if (window.languageSelected == "Kannada") {
			this.measurementTxt.setText("ಅಳತೆಗಳು");
			this.measurementTxt.fontSize = 16;
		}
		else if (window.languageSelected == "Odiya") {
			this.measurementTxt.setText("ମାପ");
		}
		else if (window.languageSelected == "Marathi") {
			this.measurementTxt.setText("मापने/एकके");
		}
		else if (window.languageSelected == "Telugu") {
			this.measurementTxt.setText("కొలతలు");
		}
		else if (window.languageSelected == "Tamil") {
			this.measurementTxt.setText("அளவீடுகள்");
		}
		else if (window.languageSelected == "Urdu") {
			this.measurementTxt.setText("پیمائش");
		}
		else {
			this.measurementTxt.setText("Measurements");
		}

		this.measurementTxt.anchor.setTo(0.5);
		this.measurementTxt.align = 'center';

		this.measurementTxt.font = 'gradefont';

		this.measurementTxt.fill = '#FFFF00';

		this.measurement1 = _this.add.sprite(900, 110, 'measurement1');
		this.measurement1.anchor.setTo(0.5);
		this.measurement1.name = "measurement1";
		this.measurement1.inputEnabled = true;
		this.measurement1.events.onInputDown.add(this.iconClicked, this);

		this.measurement2 = _this.add.sprite(850, 170, 'measurement2');
		this.measurement2.anchor.setTo(0.5);
		this.measurement2.name = "measurement5";
		this.measurement2.inputEnabled = true;
		this.measurement2.events.onInputDown.add(this.iconClicked, this);

		this.measurement3 = _this.add.sprite(900, 320, 'measurement3');
		this.measurement3.anchor.setTo(0.5);
		this.measurement3.name = "measurement3";
		this.measurement3.inputEnabled = true;
		this.measurement3.events.onInputDown.add(this.iconClicked, this);

		this.measurement4 = _this.add.sprite(810, 280, 'measurement4');
		this.measurement4.anchor.setTo(0.5);
		this.measurement4.name = "measurement4";
		this.measurement4.inputEnabled = true;
		this.measurement4.events.onInputDown.add(this.iconClicked, this);

		this.measurement5 = _this.add.sprite(750, 210, 'measurement5');
		this.measurement5.anchor.setTo(0.5);
		this.measurement5.name = "measurement2";
		this.measurement5.inputEnabled = true;
		this.measurement5.events.onInputDown.add(this.iconClicked, this);




		this.measurementGrp = this.add.group();
		this.measurementGrp.add(this.measurement1);
		this.measurementGrp.add(this.measurement2);
		this.measurementGrp.add(this.measurement3);
		this.measurementGrp.add(this.measurement4);
		this.measurementGrp.add(this.measurement5);

		if (this.measurementState == "notplayed") {
			this.measurementGrp.setAll("frame", 0);
		}
		else if (this.measurementState == "played") {
			this.measurementGrp.setAll("frame", 1);
		}
		else {
			this.measurementGrp.setAll("frame", 2);
		}

		this.measurement2.frame = 2;
		this.measurement2.visible = false;

		this.measurementGrp.setAll("frame", 1);
	},

	addNumberoperationGroup: function () {
		this.numberoperationBoard = _this.add.sprite(620, 200, 'numberoperationBoard');
		this.numberoperationBoard.anchor.setTo(0.5);

		this.numberoperationTxt = this.add.text(620, 192, "Number Operations");
		this.numberoperationTxt.fontSize = 18;

		if (window.languageSelected == "Gujarati") {
			this.numberoperationTxt.setText("નંબર સંચાલન");
		}
		else if (window.languageSelected == "Hindi") {
			this.numberoperationTxt.setText("नंबर संचालन");
		}
		else if (window.languageSelected == "Kannada") {
			this.numberoperationTxt.setText("ಮೂಲಕ್ರಿಯೆಗಳು");
			this.numberoperationTxt.fontSize = 16;
		}
		else if (window.languageSelected == "Odiya") {
			this.numberoperationTxt.setText("ସଂଖ୍ୟା ସଂଚାଳନ");
		}
		else if (window.languageSelected == "Marathi") {
			this.numberoperationTxt.setText("गणिती क्रिया");
		}
		else if (window.languageSelected == "Telugu") {
			this.numberoperationTxt.setText("అంకెల పరికర్మములు");
		}
		else if (window.languageSelected == "Tamil") {
			this.numberoperationTxt.setText("எண் செயல்பாடுகள்");
			this.numberoperationTxt.fontSize = 16;
			this.numberoperationBoard.scale.setTo(1.3);
		}
		else if (window.languageSelected == "Urdu") {
			this.numberoperationTxt.setText("اعدادی اعمال");
		}
		else {
			this.numberoperationTxt.setText("Number Operations");
		}

		this.numberoperationTxt.anchor.setTo(0.5);
		this.numberoperationTxt.align = 'center';

		this.numberoperationTxt.font = 'gradefont';

		this.numberoperationTxt.fill = '#FFFF00';

		this.numberOpertaion1 = _this.add.sprite(300, 270, 'numberOpertaion1');
		this.numberOpertaion1.anchor.setTo(0.5);
		this.numberOpertaion1.name = "numberOpertaion1";
		this.numberOpertaion1.inputEnabled = true;
		this.numberOpertaion1.events.onInputDown.add(this.iconClicked, this);

		this.numberOpertaion2 = _this.add.sprite(430, 280, 'numberOpertaion2');
		this.numberOpertaion2.anchor.setTo(0.5);
		this.numberOpertaion2.name = "numberOpertaion2";
		this.numberOpertaion2.inputEnabled = true;
		this.numberOpertaion2.events.onInputDown.add(this.iconClicked, this);

		this.numberOpertaion3 = _this.add.sprite(540, 290, 'numberOpertaion3');
		this.numberOpertaion3.anchor.setTo(0.5);
		this.numberOpertaion3.name = "numberOpertaion3";
		this.numberOpertaion3.inputEnabled = true;
		this.numberOpertaion3.events.onInputDown.add(this.iconClicked, this);

		this.numberOpertaion4 = _this.add.sprite(640, 270, 'numberOpertaion4');
		this.numberOpertaion4.anchor.setTo(0.5);
		this.numberOpertaion4.name = "numberOpertaion4";
		this.numberOpertaion4.inputEnabled = true;
		this.numberOpertaion4.events.onInputDown.add(this.iconClicked, this);

		this.numberOperationGrp = this.add.group();
		this.numberOperationGrp.add(this.numberOpertaion1);
		this.numberOperationGrp.add(this.numberOpertaion2);
		this.numberOperationGrp.add(this.numberOpertaion3);
		this.numberOperationGrp.add(this.numberOpertaion4);

		if (this.numberoperationState == "notplayed") {
			this.numberOperationGrp.setAll("frame", 0);
		}
		else if (this.numberoperationState == "played") {
			this.numberOperationGrp.setAll("frame", 1);
		}
		else {
			this.numberOperationGrp.setAll("frame", 2);
		}

		this.numberOperationGrp.setAll("frame", 1);


	},

	addDatahandlingGroup: function () {
		this.datahandlingBoard = _this.add.sprite(510, 380, 'datahandlingBoard');
		this.datahandlingBoard.anchor.setTo(0.5);
		this.datahandlingBoard.visible = false;

		this.dataHandling1 = _this.add.sprite(530, 460, 'dataHandling1');
		this.dataHandling1.anchor.setTo(0.5);

		this.dataHandling2 = _this.add.sprite(660, 410, 'dataHandling2');
		this.dataHandling2.anchor.setTo(0.5);

		this.dataHandling3 = _this.add.sprite(770, 480, 'dataHandling3');
		this.dataHandling3.anchor.setTo(0.5);

		this.dataHandling4 = _this.add.sprite(880, 490, 'dataHandling4');
		this.dataHandling4.anchor.setTo(0.5);

		this.dataHandlingGrp = this.add.group();
		this.dataHandlingGrp.add(this.dataHandling1);
		this.dataHandlingGrp.add(this.dataHandling2);
		this.dataHandlingGrp.add(this.dataHandling3);
		this.dataHandlingGrp.add(this.dataHandling4);

		this.dataHandlingGrp.setAll("frame", 2);
		this.dataHandlingGrp.visible = false;
	},

	addshapesGroup: function () {
		this.shapesBoard = _this.add.sprite(240, 490, 'shapesBoard');
		this.shapesBoard.anchor.setTo(0.5);
		this.shapesBoard.visible = false;

		this.shapes1 = _this.add.sprite(70, 290, 'shapes1');
		this.shapes1.anchor.setTo(0.5);

		this.shapes2 = _this.add.sprite(150, 370, 'shapes2');
		this.shapes2.anchor.setTo(0.5);

		this.shapes3 = _this.add.sprite(110, 470, 'shapes3');
		this.shapes3.anchor.setTo(0.5);

		this.shapes4 = _this.add.sprite(260, 400, 'shapes4');
		this.shapes4.anchor.setTo(0.5);

		this.shapes5 = _this.add.sprite(350, 470, 'shapes5');
		this.shapes5.anchor.setTo(0.5);

		this.shapesGrp = this.add.group();
		this.shapesGrp.add(this.shapes1);
		this.shapesGrp.add(this.shapes2);
		this.shapesGrp.add(this.shapes3);
		this.shapesGrp.add(this.shapes4);
		this.shapesGrp.add(this.shapes5);

		this.shapesGrp.setAll("frame", 2);
		this.shapesGrp.visible = false;
	},


	iconClicked: function (target) {
		if (target.name == "measurement1")
			_this.state.start('measurement1', true, false);
		else if (target.name == "measurement2")
			_this.state.start('measurement2', true, false);
		else if (target.name == "measurement3")
			_this.state.start('measurement3', true, false);
		else if (target.name == "measurement4")
			_this.state.start('measurement4', true, false);
		else if (target.name == "numberSense1")
			_this.state.start('numbersense1', true, false);
		else if (target.name == "numberSense2")
			_this.state.start('numbersense2', true, false);
		else if (target.name == "numberSense3")
			_this.state.start('numbersense3', true, false);
		else if (target.name == "numberSense4")
			_this.state.start('numbersense4', true, false);
		else if (target.name == "numberSense5")
			_this.state.start('numbersense5', true, false);
		else if (target.name == "numberSense6")
			_this.state.start('numbersense6', true, false);
		else if (target.name == "numberSense7")
			_this.state.start('numbersense7', true, false);
		else if (target.name == "numberOpertaion1")
			_this.state.start('numberoperation1', true, false);
		else if (target.name == "numberOpertaion2")
			_this.state.start('numberoperation2', true, false);
		else if (target.name == "numberOpertaion3")
			_this.state.start('numberoperation3', true, false);
		else if (target.name == "numberOpertaion4")
			_this.state.start('numberoperation4', true, false);
	},


	shutdown: function () {
		window.currScreen = "";
	}

};


function successFunction() {
	console.log('Immersive mode set successfully.');
}

function errorFunction(error) {
	console.error('Error setting immersive mode:', error);
}