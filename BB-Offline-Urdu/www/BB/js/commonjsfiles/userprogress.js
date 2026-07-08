Game.userprogress = function (game) {

};

var pie;
var _this;

Game.userprogress.prototype = {

	init: function (user) {
		//window.avatarName = user;
	},

	preload: function (game) {

		if (window.avatarName.toLowerCase() == "fish")
			game.load.atlas('avatar', 'BB/assets/fish.png', 'BB/assets/fish.json');
		else if (window.avatarName.toLowerCase() == "butterfly")
			game.load.atlas('avatar', 'BB/assets/butterfly.png', 'BB/assets/butterfly.json');
		else if (window.avatarName.toLowerCase() == "flower")
			game.load.atlas('avatar', 'BB/assets/flower.png', 'BB/assets/flower.json');
		else if (window.avatarName.toLowerCase() == "parrot")
			game.load.atlas('avatar', 'BB/assets/parrot.png', 'BB/assets/parrot.json');
		else if (window.avatarName.toLowerCase() == "sun")
			game.load.atlas('avatar', 'BB/assets/sun.png', 'BB/assets/sun.json');
		else if (window.avatarName.toLowerCase() == "tree")
			game.load.atlas('avatar', 'BB/assets/tree.png', 'BB/assets/tree.json');

		game.load.image('scrollWhite', 'BB/assets/scrollWhite.png');
		game.load.image('scrollBlack', 'BB/assets/scrollBlack.png');

		game.time.advancedTiming = true;
	},

	create: function (game) {

		this.numberSenseTotal = 92;//92
		this.numberoperationTotal = 46;
		this.measurementTotal = 39;
		this.shapesTotal = 32;
		this.datahandlingTotal = 4;

		this.cnumberSenseTotal = 22;
		this.cnumberoperationTotal = 17;
		this.cmeasurementTotal = 12;

		this.cnumbersTotal = 2;
		this.csequenceTotal = 6;
		this.ccomparisonTotal = 4;
		this.cplacevalueTotal = 6;
		this.cfractionTotal = 4;

		this.cadditionTotal = 4;
		this.csubtractionTotal = 4;
		this.cmultiplicationTotal = 5;
		this.cdivisionTotal = 4;

		this.clengthTotal = 3;
		this.cweightTotal = 3;
		this.ctimeTotal = 3;
		this.cvolumeTotal = 3;


		this.cnumbersensePlayedFromServer = 0;
		this.cmeasurementPlayedFromServer = 0;
		this.cnumberoperationPlayedFromServer = 0;

		this.cnumbersPlayedFromServer = 0;
		this.csequencePlayedFromServer = 0;
		this.ccomparisonPlayedFromServer = 0;
		this.cplacevaluePlayedFromServer = 0;
		this.cfractionPlayedFromServer = 0;

		this.cadditionPlayedFromServer = 0;
		this.csubtractionPlayedFromServer = 0;
		this.cmultiplicationPlayedFromServer = 0;
		this.cdivisionPlayedFromServer = 0;

		this.clengthPlayedFromServer = 0;
		this.cweightPlayedFromServer = 0;
		this.ctimePlayedFromServer = 0;
		this.cvolumePlayedFromServer = 0;


		/*this.numbersenseGamescoreTotal = 206; 
		this.measurementGamescoreTotal = 180; 
		this.numberoperationGamescoreTotal = 695; */

		this.numbersensescoreTotal = 1030;
		this.measurementscoreTotal = 180;
		this.numberoperationscoreTotal = 695;

		this.numbersenseScore = 0;
		this.measurementScore = 0;
		this.numberoperationScore = 0;


		this.gameModeBg = game.add.image(0, 0, 'gameModeBg');

		console.log(window.deviceId,"user progress window.deviceId");
		console.log(window.user ,"user progress window.user");
		console.log(window.user.grade ,"user progress window.user.grade");

		// var jsondata = { name: window.avatarName, deviceid: window.deviceId };
		var jsondata = {
			name: window.avatarName,
			deviceid: window.deviceId,
			grade: window.user.grade
		};

		_this = this;

		this.responseData = null;

		if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
			console.log("sync telemetry" + navigator.connection.type);
			// var apiurl = "https://abbmath.klp.org.in/abbchmprm/assets/userprogress/userprogress";
			//var apiurl = "https://10.0.2.2/abbchmprm/assets/userprogress/userprogress";
			console.log("user progress api");
			
			var apiurl = window.ApiConfig.url('userprogress');

			console.log("RESTAPImgr.invokeRESTAPI: apiname:" + apiurl + "jsondata" + JSON.stringify(jsondata));
			nativeApp.CallUserProgressBeforeFEtchingData();

			$.ajax({
				url: apiurl,
				type: "POST",
				dataType: "json",
				// async:false, // set to false to perform a synchronous request
				data: JSON.stringify(jsondata),
				contentType: 'application/json; charset=UTF-8',
				accepts: 'application/json',
				success: function (jsonresp) {


					if (jsonresp.status == "success") {
						_this.responseData = jsonresp;
						console.log(_this.responseData);
						_this.afterDataFetched(game);

					}
					else {
						nativeApp.CallUserProgressFetchError();
					}

				},
				// error: function (error) {
				// 	console.log(error);
				// 	nativeApp.CallUserProgressFetchError();
				// }
				error: function (xhr, status, error) {
					console.log("userprogress error status", status);
					console.log("userprogress error message", error);
					console.log("userprogress raw response", xhr && xhr.responseText);
					nativeApp.CallUserProgressFetchError();
				}

			});
		}
		else {
			nativeApp.CallUserProgress();
		}


		this.gameModeNavBar = game.add.image(0, 0, 'gameModeNavBar');

		this.gameModeBackBtn = game.add.image(30, 21, 'gameModeBackBtn');
		this.gameModeBackBtn.anchor.setTo(0.5);
		this.gameModeBackBtn.inputEnabled = true;
		this.gameModeBackBtn.input.useHandCursor = true;
		this.gameModeBackBtn.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();

			if (window.prevScreen == "gameModeSelectionScreen" && window.currScreen == "gameModeSelectionScreen") {
				this.state.start('gameModeSelectionScreen', true, false);
			}
			else {
				this.state.start('gradeSelectionScreen', true, false);
			}

		}, this);

		this.gameModeShareBtn = game.add.image(920, 21, 'shareIcon');
		this.gameModeShareBtn.anchor.setTo(0.5);
		this.gameModeShareBtn.scale.setTo(0.8);
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

		this.avatar = this.add.sprite(100, 21, 'avatar');
		this.avatar.scale.setTo(0.21);
		this.avatar.anchor.setTo(0.5);
		this.avatar.visible = false;

	},

	secondsToHms: function (d) {
		d = Number(d);
		var h = Math.floor(d / 3600);
		var m = Math.floor(d % 3600 / 60);
		var s = Math.floor(d % 3600 % 60);

		var hDisplay = h > 0 ? h + (h == 1 ? " hr, " : " hrs, ") : "0 hr, ";
		var mDisplay = m > 0 ? m + (m == 1 ? " min " : " mins ") : "0 min ";
		//var sDisplay = s > 0 ? s + (s == 1 ? " sec" : " sec") : "";
		//return hDisplay + mDisplay + sDisplay; 
		return hDisplay + mDisplay;
	},

	afterDataFetched: function (game) {

		//alert(this.responseData.status)

		this.practiceModeTime = parseInt(this.responseData.PMST);
		this.challengeModeTime = parseInt(this.responseData.CMST);

		if (isNaN(this.practiceModeTime))
			this.practiceModeTime = 0;
		if (isNaN(this.challengeModeTime))
			this.challengeModeTime = 0;


		this.practiceModeTime = this.secondsToHms(this.practiceModeTime);
		this.challengeModeTime = this.secondsToHms(this.challengeModeTime);

		this.cnumbersensePlayedFromServer = parseInt(this.responseData.CNS);
		this.cmeasurementPlayedFromServer = parseInt(this.responseData.CM);
		this.cnumberoperationPlayedFromServer = parseInt(this.responseData.CNO);

		this.cnumbersPlayedFromServer = parseInt(this.responseData.CNSN);
		this.csequencePlayedFromServer = parseInt(this.responseData.CNSS);
		this.ccomparisonPlayedFromServer = parseInt(this.responseData.CNSC);
		this.cplacevaluePlayedFromServer = parseInt(this.responseData.CNSPV);
		this.cfractionPlayedFromServer = parseInt(this.responseData.CNSF);

		this.cadditionPlayedFromServer = parseInt(this.responseData.CNOA);
		this.csubtractionPlayedFromServer = parseInt(this.responseData.CNOS);
		this.cmultiplicationPlayedFromServer = parseInt(this.responseData.CNOM);
		this.cdivisionPlayedFromServer = parseInt(this.responseData.CNOD);

		this.clengthPlayedFromServer = parseInt(this.responseData.CML);
		this.cweightPlayedFromServer = parseInt(this.responseData.CMW);
		this.ctimePlayedFromServer = parseInt(this.responseData.CMTi);
		this.cvolumePlayedFromServer = parseInt(this.responseData.CMV);


		this.numbersensePersent = Math.round((parseInt(this.responseData.PNS) / this.numberSenseTotal) * 100);
		this.measurementPersent = Math.round((parseInt(this.responseData.PM) / this.measurementTotal) * 100);
		this.numberoperationPersent = Math.round((parseInt(this.responseData.PNO) / this.numberoperationTotal) * 100);
		this.shapesPersent = Math.round((parseInt(this.responseData.PSG) / this.shapesTotal) * 100);
		this.datahandlingPersent = Math.round((parseInt(this.responseData.PDH) / this.datahandlingTotal) * 100);


		this.cnumbersensePersent = Math.round((parseInt(this.responseData.CNS) / this.cnumberSenseTotal) * 100);
		this.cmeasurementPersent = Math.round((parseInt(this.responseData.CM) / this.cmeasurementTotal) * 100);
		this.cnumberoperationPersent = Math.round((parseInt(this.responseData.CNO) / this.cnumberoperationTotal) * 100);


		this.passcount = parseInt(this.responseData.CNSP);
		this.failcount = parseInt(this.responseData.CNSFF);
		this.hintcount = parseInt(this.responseData.CNSH);
		this.totalgameplayed = parseInt(this.responseData.CNST);

		this.passcount1 = parseInt(this.responseData.CMP);
		this.failcount1 = parseInt(this.responseData.CMF);
		this.hintcount1 = parseInt(this.responseData.CMH);
		this.totalgameplayed1 = parseInt(this.responseData.CMT);

		this.passcount2 = parseInt(this.responseData.CNOP);
		this.failcount2 = parseInt(this.responseData.CNOF);
		this.hintcount2 = parseInt(this.responseData.CNOH);
		this.totalgameplayed2 = parseInt(this.responseData.CNOT);


		if (isNaN(this.hintcount))
			this.hintcount = 0;
		if (isNaN(this.hintcount1))
			this.hintcount1 = 0;
		if (isNaN(this.hintcount2))
			this.hintcount2 = 0;



		if (this.hintcount > this.passcount)
			this.passcount = this.hintcount + 2;
		if (this.hintcount1 > this.passcount1)
			this.passcount1 = this.hintcount1 + 2;
		if (this.hintcount2 > this.passcount2)
			this.passcount2 = this.hintcount2 + 2;



		console.log("1 " + this.passcount);
		console.log("2 " + this.hintcount);
		console.log("3 " + this.numbersensescoreTotal);
		console.log("4 " + this.totalgameplayed);


		if (this.totalgameplayed > 0)
			this.numbersenseScore = Math.round((((this.passcount * 5) - (this.hintcount * 3)) / ((this.passcount * 5) + this.failcount)) * 100);
		if (this.totalgameplayed1 > 0)
			this.measurementScore = Math.round((((this.passcount1 * 5) - (this.hintcount1 * 3)) / ((this.passcount1 * 5) + this.failcount1)) * 100);
		if (this.totalgameplayed2 > 0)
			this.numberoperationScore = Math.round((((this.passcount2 * 5) - (this.hintcount2 * 3)) / ((this.passcount2 * 5) + this.failcount2)) * 100);


		console.log(this.numbersenseScore, this.measurementScore, this.numberoperationScore);


		this.getchallengemodevalue(game);


		var practiceText = "Practice";
		var challengeText = "Challenge";
		var TotalLearningText = "Total learning time";
		var completedText = "Completed";
		var scoreText = "Score";

		if (window.languageSelected == "Kannada") {
			practiceText = "ಪ್ರಾಕ್ಟೀಸ್";
			challengeText = "ಚಾಲೆಂಜ್";
			TotalLearningText = "ಒಟ್ಟು ಕಲಿಕೆಯ ಸಮಯ :";
			completedText = "ಪೂರ್ಣ";
			scoreText = "ಅಂಕ";
		}
		else if (window.languageSelected == "Hindi") {
			practiceText = "प्रैक्टिस";
			challengeText = "चैलेंज";
			TotalLearningText = "कुल सीखने का समय :";
			completedText = "पूर्ण";
			scoreText = "स्कोर";
		}
		else if (window.languageSelected == "Odiya") {
			practiceText = "ପ୍ରାକ୍ଟିସ";
			challengeText = "ଚ୍ୟାଲେଞ୍ଜ";
			TotalLearningText = "ଟୋଟାଲ  ଲେଆର୍ନିଙ୍ଗ  ର୍ଟମେ :";
			completedText = "ସମ୍ପୂର୍ଣ୍ଣ";
			scoreText = "ପ୍ରାପ୍ତାଙ୍କ";
		}
		else if (window.languageSelected == "Gujarati") {
			practiceText = "અભ્યાસ";
			challengeText = "પડકાર";
			TotalLearningText = "કુલ ભણવાનો સમય :";
			completedText = "પૂર્ણ";
			scoreText = "આંક";
		}
		else {
			practiceText = "Practice";
			challengeText = "Challenge";
			TotalLearningText = "Total learning time :";
			completedText = "Completed";
			scoreText = "Score";
		}

		this.graphics = game.add.graphics(10, 50);
		this.graphics.lineStyle(2, 0x000000, 1);
		this.graphics.beginFill(0xFFFF0B, 0.5);
		this.graphics.drawRect(50, 10, 400, 40);

		this.graphics1 = game.add.graphics(450, 50);
		this.graphics1.lineStyle(2, 0x000000, 1);
		this.graphics1.beginFill(0xFFFF0B, 0.5);
		this.graphics1.drawRect(50, 10, 400, 40);

		this.graphics2 = game.add.graphics(10, 90);
		this.graphics2.lineStyle(2, 0x000000, 1);
		this.graphics2.beginFill(0xFFFFFF, 1);
		this.graphics2.drawRect(50, 10, 400, 430);

		this.graphics3 = game.add.graphics(450, 90);
		this.graphics3.lineStyle(2, 0x000000, 1);
		this.graphics3.beginFill(0xFFFFFF, 1);
		this.graphics3.drawRect(50, 10, 400, 430);

		this.graphics4 = game.add.graphics(10, 120);
		this.graphics4.lineStyle(2, 0x000000, 1);
		//this.graphics2.beginFill(0xFFFF0B,0.5);
		this.graphics4.drawRect(70, 10, 360, 390);

		this.graphics5 = game.add.graphics(450, 120);
		this.graphics5.lineStyle(2, 0x000000, 1);
		//this.graphics2.beginFill(0xFFFF0B,0.5);
		this.graphics5.drawRect(70, 10, 360, 390);


		this.practicemodeTxt = this.add.text(140, 80, practiceText);
		this.practicemodeTxt.anchor.setTo(0.5);
		this.practicemodeTxt.align = 'center';
		this.practicemodeTxt.fontSize = 32;
		this.practicemodeTxt.fontWeight = 'normal';
		this.practicemodeTxt.fill = '#000000';
		this.practicemodeTxt.wordWrap = true;
		this.practicemodeTxt.wordWrapWidth = 500;

		this.practicemodeTotalLearningTimeTxt = this.add.text(180, 118, TotalLearningText);
		this.practicemodeTotalLearningTimeTxt.anchor.setTo(0.5);
		this.practicemodeTotalLearningTimeTxt.align = 'center';
		this.practicemodeTotalLearningTimeTxt.fontSize = 24;
		this.practicemodeTotalLearningTimeTxt.fontWeight = 'normal';
		this.practicemodeTotalLearningTimeTxt.fill = '#000000';
		this.practicemodeTotalLearningTimeTxt.wordWrap = true;
		this.practicemodeTotalLearningTimeTxt.wordWrapWidth = 500;

		this.timeIcon = game.add.sprite(320, 116, 'timeIcon');
		this.timeIcon.frame = 0;
		this.timeIcon.anchor.setTo(0.5);
		this.timeIcon.scale.setTo(1.2);

		//alert(this.practiceModeTime);

		this.practicemodeTimeTxt = this.add.text(400, 118, this.practiceModeTime);
		this.practicemodeTimeTxt.anchor.setTo(0.5);
		this.practicemodeTimeTxt.align = 'center';
		this.practicemodeTimeTxt.fontSize = 18;
		this.practicemodeTimeTxt.fontWeight = 'normal';
		this.practicemodeTimeTxt.fill = '#000000';
		this.practicemodeTimeTxt.wordWrap = true;
		this.practicemodeTimeTxt.wordWrapWidth = 500;

		this.practicemodeTxt = this.add.text(580, 80, challengeText);
		this.practicemodeTxt.anchor.setTo(0.5);
		this.practicemodeTxt.align = 'center';
		this.practicemodeTxt.fontSize = 32;
		this.practicemodeTxt.fontWeight = 'normal';
		this.practicemodeTxt.fill = '#000000';
		this.practicemodeTxt.wordWrap = true;
		this.practicemodeTxt.wordWrapWidth = 500;

		this.challengemodeTotalLearningTimeTxt = this.add.text(620, 118, TotalLearningText);
		this.challengemodeTotalLearningTimeTxt.anchor.setTo(0.5);
		this.challengemodeTotalLearningTimeTxt.align = 'center';
		this.challengemodeTotalLearningTimeTxt.fontSize = 24;
		this.challengemodeTotalLearningTimeTxt.fontWeight = 'normal';
		this.challengemodeTotalLearningTimeTxt.fill = '#000000';
		this.challengemodeTotalLearningTimeTxt.wordWrap = true;
		this.challengemodeTotalLearningTimeTxt.wordWrapWidth = 500;


		this.timeIcon = game.add.sprite(760, 116, 'timeIcon');
		this.timeIcon.frame = 0;
		this.timeIcon.anchor.setTo(0.5);
		this.timeIcon.scale.setTo(1.2);

		this.challengemodeTimeTxt = this.add.text(840, 118, this.challengeModeTime);
		this.challengemodeTimeTxt.anchor.setTo(0.5);
		this.challengemodeTimeTxt.align = 'center';
		this.challengemodeTimeTxt.fontSize = 18;
		this.challengemodeTimeTxt.fontWeight = 'normal';
		this.challengemodeTimeTxt.fill = '#000000';
		this.challengemodeTimeTxt.wordWrap = true;
		this.challengemodeTimeTxt.wordWrapWidth = 500;



		this.addScrollingtouserprogress(game, completedText);


		this.cnumberSenseTree = game.add.sprite(580, 180, 'MicroConceptTree');
		this.cnumberSenseTree.frame = 0;
		this.cnumberSenseTree.anchor.setTo(0.5);
		this.cnumberSenseTree.scale.setTo(0.6, 0.38);

		this.cnumberSenseTree.inputEnabled = true;
		this.cnumberSenseTree.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			this.state.start('userprogress2', true, false, "NumberSense", this.responseData, this.responseData);
		}, this);

		this.cnumberSenseTreeTxt = this.add.text(580, 170, window.selctedLang.McTopicText1);
		this.cnumberSenseTreeTxt.anchor.setTo(0.5);
		this.cnumberSenseTreeTxt.align = 'center';
		this.cnumberSenseTreeTxt.fontSize = 12;
		this.cnumberSenseTreeTxt.fontWeight = 'normal';
		this.cnumberSenseTreeTxt.fill = '#FFFFFF';
		this.cnumberSenseTreeTxt.wordWrap = true;
		this.cnumberSenseTreeTxt.wordWrapWidth = 500;

		this.cmeasurementTree = game.add.sprite(580, 280, 'MicroConceptTree');
		this.cmeasurementTree.frame = 1;
		this.cmeasurementTree.anchor.setTo(0.5);
		this.cmeasurementTree.scale.setTo(0.6, 0.38);
		this.cmeasurementTree.inputEnabled = true;
		this.cmeasurementTree.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			this.state.start('userprogress2', true, false, "Measurement", this.responseData, this.responseData);
		}, this);

		this.cmeasurementTreeTxt = this.add.text(580, 270, window.selctedLang.McTopicText2);
		this.cmeasurementTreeTxt.anchor.setTo(0.5);
		this.cmeasurementTreeTxt.align = 'center';
		this.cmeasurementTreeTxt.fontSize = 12;
		this.cmeasurementTreeTxt.fontWeight = 'normal';
		this.cmeasurementTreeTxt.fill = '#FFFFFF';
		this.cmeasurementTreeTxt.wordWrap = true;
		this.cmeasurementTreeTxt.wordWrapWidth = 500;

		this.cnumberoperationTree = game.add.sprite(580, 380, 'MicroConceptTree');
		this.cnumberoperationTree.frame = 2;
		this.cnumberoperationTree.anchor.setTo(0.5);
		this.cnumberoperationTree.scale.setTo(0.6, 0.38);
		this.cnumberoperationTree.inputEnabled = true;
		this.cnumberoperationTree.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			this.state.start('userprogress2', true, false, "NumberOperation", this.responseData, this.responseData);
		}, this);

		this.cnumberoperationTreeTxt = this.add.text(580, 370, window.selctedLang.McTopicText5);
		this.cnumberoperationTreeTxt.anchor.setTo(0.5);
		this.cnumberoperationTreeTxt.align = 'center';
		this.cnumberoperationTreeTxt.fontSize = 12;
		this.cnumberoperationTreeTxt.fontWeight = 'normal';
		this.cnumberoperationTreeTxt.fill = '#FFFFFF';
		this.cnumberoperationTreeTxt.wordWrap = true;
		this.cnumberoperationTreeTxt.wordWrapWidth = 500;
		this.cnumberoperationTreeTxt.lineSpacing = -10;


		this.ccompletedTxt = this.add.text(700, 140, completedText);
		this.ccompletedTxt.anchor.setTo(0.5);
		this.ccompletedTxt.align = 'center';
		this.ccompletedTxt.fontSize = 14;
		this.ccompletedTxt.fontWeight = 'normal';
		this.ccompletedTxt.fill = '#000000';
		this.ccompletedTxt.wordWrap = true;
		this.ccompletedTxt.wordWrapWidth = 500;

		this.cScoreTxt = this.add.text(830, 140, scoreText);
		this.cScoreTxt.anchor.setTo(0.5);
		this.cScoreTxt.align = 'center';
		this.cScoreTxt.fontSize = 14;
		this.cScoreTxt.fontWeight = 'normal';
		this.cScoreTxt.fill = '#000000';
		this.cScoreTxt.wordWrap = true;
		this.cScoreTxt.wordWrapWidth = 500;

		this.cnumbersensePrgress = game.add.sprite(700, 180, 'progressCircle');
		this.cnumbersensePrgress.frame = this.cnumberoperationPersent - 1;
		this.cnumbersensePrgress.anchor.setTo(0.5);
		this.cnumbersensePrgress.scale.setTo(1.5);

		this.cnumbersensePrgress.inputEnabled = true;
		this.cnumbersensePrgress.events.onInputDown.add(function () {
			this.state.start('userprogress2', true, false, "NumberSense", this.responseData, this.responseData);
		}, this);

		this.cnumbersensePrgressTxt = this.add.text(700, 180, this.cnumbersensePersent + '%');
		this.cnumbersensePrgressTxt.anchor.setTo(0.5);
		this.cnumbersensePrgressTxt.align = 'center';
		this.cnumbersensePrgressTxt.fontSize = 20;
		this.cnumbersensePrgressTxt.fontWeight = 'normal';
		this.cnumbersensePrgressTxt.fill = '#000000';
		this.cnumbersensePrgressTxt.wordWrap = true;
		this.cnumbersensePrgressTxt.wordWrapWidth = 500;


		this.cnumbersensePrgressTotalTxt = this.add.text(760, 180, this.cnumbersensePlayedFromServer + '/' + this.cnumberSenseTotal);
		this.cnumbersensePrgressTotalTxt.anchor.setTo(0.5);
		this.cnumbersensePrgressTotalTxt.align = 'center';
		this.cnumbersensePrgressTotalTxt.fontSize = 20;
		this.cnumbersensePrgressTotalTxt.fontWeight = 'normal';
		this.cnumbersensePrgressTotalTxt.fill = '#000000';
		this.cnumbersensePrgressTotalTxt.wordWrap = true;
		this.cnumbersensePrgressTotalTxt.wordWrapWidth = 500;

		this.cmeasurementPrgress = game.add.sprite(700, 280, 'progressCircle');
		this.cmeasurementPrgress.frame = this.cmeasurementPersent - 1;
		this.cmeasurementPrgress.anchor.setTo(0.5);
		this.cmeasurementPrgress.scale.setTo(1.5);
		this.cmeasurementPrgress.inputEnabled = true;
		this.cmeasurementPrgress.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			this.state.start('userprogress2', true, false, "Measurement", this.responseData, this.responseData);
		}, this);

		this.cmeasurementPrgressTxt = this.add.text(700, 280, this.cmeasurementPersent + '%');
		this.cmeasurementPrgressTxt.anchor.setTo(0.5);
		this.cmeasurementPrgressTxt.align = 'center';
		this.cmeasurementPrgressTxt.fontSize = 20;
		this.cmeasurementPrgressTxt.fontWeight = 'normal';
		this.cmeasurementPrgressTxt.fill = '#000000';
		this.cmeasurementPrgressTxt.wordWrap = true;
		this.cmeasurementPrgressTxt.wordWrapWidth = 500;

		this.cmeasurementPrgressTotalTxt = this.add.text(760, 280, this.cmeasurementPlayedFromServer + '/' + this.cmeasurementTotal);
		this.cmeasurementPrgressTotalTxt.anchor.setTo(0.5);
		this.cmeasurementPrgressTotalTxt.align = 'center';
		this.cmeasurementPrgressTotalTxt.fontSize = 20;
		this.cmeasurementPrgressTotalTxt.fontWeight = 'normal';
		this.cmeasurementPrgressTotalTxt.fill = '#000000';
		this.cmeasurementPrgressTotalTxt.wordWrap = true;
		this.cmeasurementPrgressTotalTxt.wordWrapWidth = 500;

		this.cnumberoperationPrgress = game.add.sprite(700, 380, 'progressCircle');
		this.cnumberoperationPrgress.frame = this.cnumberoperationPersent - 1;
		this.cnumberoperationPrgress.anchor.setTo(0.5);
		this.cnumberoperationPrgress.scale.setTo(1.5);
		this.cnumberoperationPrgress.inputEnabled = true;
		this.cnumberoperationPrgress.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			this.state.start('userprogress2', true, false, "NumberOperation", this.responseData, this.responseData);
		}, this);

		this.cnumberoperationPrgressTxt = this.add.text(700, 380, this.cnumberoperationPersent + '%');
		this.cnumberoperationPrgressTxt.anchor.setTo(0.5);
		this.cnumberoperationPrgressTxt.align = 'center';
		this.cnumberoperationPrgressTxt.fontSize = 20;
		this.cnumberoperationPrgressTxt.fontWeight = 'normal';
		this.cnumberoperationPrgressTxt.fill = '#000000';
		this.cnumberoperationPrgressTxt.wordWrap = true;
		this.cnumberoperationPrgressTxt.wordWrapWidth = 500;

		this.cnumberoperationPrgressTotalTxt = this.add.text(760, 380, this.cnumberoperationPlayedFromServer + '/' + this.cnumberoperationTotal);
		this.cnumberoperationPrgressTotalTxt.anchor.setTo(0.5);
		this.cnumberoperationPrgressTotalTxt.align = 'center';
		this.cnumberoperationPrgressTotalTxt.fontSize = 20;
		this.cnumberoperationPrgressTotalTxt.fontWeight = 'normal';
		this.cnumberoperationPrgressTotalTxt.fill = '#000000';
		this.cnumberoperationPrgressTotalTxt.wordWrap = true;
		this.cnumberoperationPrgressTotalTxt.wordWrapWidth = 500;



		this.cnumbersensePrgress = game.add.sprite(830, 180, 'progressCircle');
		this.cnumbersensePrgress.frame = this.numbersenseScore - 1;
		this.cnumbersensePrgress.anchor.setTo(0.5);
		this.cnumbersensePrgress.scale.setTo(1.5);

		this.cnumbersensePrgress.inputEnabled = true;
		this.cnumbersensePrgress.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			this.state.start('userprogress2', true, false, "NumberSense", this.responseData, this.responseData);
		}, this);

		this.cnumbersensePrgressScoreTxt = this.add.text(830, 180, this.numbersenseScore + '%');
		this.cnumbersensePrgressScoreTxt.anchor.setTo(0.5);
		this.cnumbersensePrgressScoreTxt.align = 'center';
		this.cnumbersensePrgressScoreTxt.fontSize = 20;
		this.cnumbersensePrgressScoreTxt.fontWeight = 'normal';
		this.cnumbersensePrgressScoreTxt.fill = '#000000';
		this.cnumbersensePrgressScoreTxt.wordWrap = true;
		this.cnumbersensePrgressScoreTxt.wordWrapWidth = 500;

		this.cmeasurementPrgress = game.add.sprite(830, 280, 'progressCircle');
		this.cmeasurementPrgress.frame = this.measurementScore - 1;
		this.cmeasurementPrgress.anchor.setTo(0.5);
		this.cmeasurementPrgress.scale.setTo(1.5);
		this.cmeasurementPrgress.inputEnabled = true;
		this.cmeasurementPrgress.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			this.state.start('userprogress2', true, false, "Measurement", this.responseData, this.responseData);
		}, this);

		this.cmeasurementPrgressScoreTxt = this.add.text(830, 280, this.measurementScore + '%');
		this.cmeasurementPrgressScoreTxt.anchor.setTo(0.5);
		this.cmeasurementPrgressScoreTxt.align = 'center';
		this.cmeasurementPrgressScoreTxt.fontSize = 20;
		this.cmeasurementPrgressScoreTxt.fontWeight = 'normal';
		this.cmeasurementPrgressScoreTxt.fill = '#000000';
		this.cmeasurementPrgressScoreTxt.wordWrap = true;
		this.cmeasurementPrgressScoreTxt.wordWrapWidth = 500;

		this.cnumberoperationPrgress = game.add.sprite(830, 380, 'progressCircle');
		this.cnumberoperationPrgress.frame = this.numberoperationScore - 1;
		this.cnumberoperationPrgress.anchor.setTo(0.5);
		this.cnumberoperationPrgress.scale.setTo(1.5);

		this.cnumberoperationPrgress.inputEnabled = true;
		this.cnumberoperationPrgress.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			this.state.start('userprogress2', true, false, "NumberOperation", this.responseData, this.responseData);
		}, this);

		this.cnumberoperationPrgressScoreTxt = this.add.text(830, 380, this.numberoperationScore + '%');
		this.cnumberoperationPrgressScoreTxt.anchor.setTo(0.5);
		this.cnumberoperationPrgressScoreTxt.align = 'center';
		this.cnumberoperationPrgressScoreTxt.fontSize = 20;
		this.cnumberoperationPrgressScoreTxt.fontWeight = 'normal';
		this.cnumberoperationPrgressScoreTxt.fill = '#000000';
		this.cnumberoperationPrgressScoreTxt.wordWrap = true;
		this.cnumberoperationPrgressScoreTxt.wordWrapWidth = 500;

	},

	addScrollingtouserprogress: function (game, completedText) {


		_this.groupScroll = _this.add.group();

		this.numberSenseTree = game.add.sprite(140, 180, 'MicroConceptTree');
		this.numberSenseTree.frame = 0;
		this.numberSenseTree.anchor.setTo(0.5);
		this.numberSenseTree.scale.setTo(0.6, 0.38);
		this.numberSenseTree.inputEnabled = true;
		this.numberSenseTree.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			this.state.start('userprogress2', true, false, "NumberSense", this.responseData, this.responseData);
		}, this);

		this.numberSenseTreeTxt = this.add.text(140, 170, window.selctedLang.McTopicText1);
		this.numberSenseTreeTxt.anchor.setTo(0.5);
		this.numberSenseTreeTxt.align = 'center';
		this.numberSenseTreeTxt.fontSize = 12;
		this.numberSenseTreeTxt.fontWeight = 'normal';
		this.numberSenseTreeTxt.fill = '#FFFFFF';
		this.numberSenseTreeTxt.wordWrap = true;
		this.numberSenseTreeTxt.wordWrapWidth = 500;

		this.measurementTree = game.add.sprite(140, 280, 'MicroConceptTree');
		this.measurementTree.frame = 1;
		this.measurementTree.anchor.setTo(0.5);
		this.measurementTree.scale.setTo(0.6, 0.38);
		this.measurementTree.inputEnabled = true;
		this.measurementTree.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			this.state.start('userprogress2', true, false, "Measurement", this.responseData, this.responseData);
		}, this);

		this.measurementTreeTxt = this.add.text(140, 270, window.selctedLang.McTopicText2);
		this.measurementTreeTxt.anchor.setTo(0.5);
		this.measurementTreeTxt.align = 'center';
		this.measurementTreeTxt.fontSize = 12;
		this.measurementTreeTxt.fontWeight = 'normal';
		this.measurementTreeTxt.fill = '#FFFFFF';
		this.measurementTreeTxt.wordWrap = true;
		this.measurementTreeTxt.wordWrapWidth = 500;

		this.numberoperationTree = game.add.sprite(140, 380, 'MicroConceptTree');
		this.numberoperationTree.frame = 2;
		this.numberoperationTree.anchor.setTo(0.5);
		this.numberoperationTree.scale.setTo(0.6, 0.38);
		this.numberoperationTree.inputEnabled = true;
		this.numberoperationTree.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			this.state.start('userprogress2', true, false, "NumberOperation", this.responseData, this.responseData);
		}, this);

		this.numberoperationTreeTxt = this.add.text(140, 370, window.selctedLang.McTopicText5);
		this.numberoperationTreeTxt.anchor.setTo(0.5);
		this.numberoperationTreeTxt.align = 'center';
		this.numberoperationTreeTxt.fontSize = 12;
		this.numberoperationTreeTxt.fontWeight = 'normal';
		this.numberoperationTreeTxt.fill = '#FFFFFF';
		this.numberoperationTreeTxt.wordWrap = true;
		this.numberoperationTreeTxt.wordWrapWidth = 500;
		this.numberoperationTreeTxt.lineSpacing = -10;

		this.shapesTree = game.add.sprite(140, 480, 'MicroConceptTree');
		this.shapesTree.frame = 3;
		this.shapesTree.anchor.setTo(0.5);
		this.shapesTree.scale.setTo(0.6, 0.38);

		this.shapesTreeTxt = this.add.text(140, 470, window.selctedLang.McTopicText3);
		this.shapesTreeTxt.anchor.setTo(0.5);
		this.shapesTreeTxt.align = 'center';
		this.shapesTreeTxt.fontSize = 12;
		this.shapesTreeTxt.fontWeight = 'normal';
		this.shapesTreeTxt.fill = '#FFFFFF';
		this.shapesTreeTxt.wordWrap = true;
		this.shapesTreeTxt.wordWrapWidth = 500;

		this.datahandlingTree = game.add.sprite(140, 580, 'MicroConceptTree');
		this.datahandlingTree.frame = 4;
		this.datahandlingTree.anchor.setTo(0.5);
		this.datahandlingTree.scale.setTo(0.6, 0.38);

		this.datahandlingTreeTxt = this.add.text(140, 570, window.selctedLang.McTopicText4);
		this.datahandlingTreeTxt.anchor.setTo(0.5);
		this.datahandlingTreeTxt.align = 'center';
		this.datahandlingTreeTxt.fontSize = 12;
		this.datahandlingTreeTxt.fontWeight = 'normal';
		this.datahandlingTreeTxt.fill = '#FFFFFF';
		this.datahandlingTreeTxt.wordWrap = true;
		this.datahandlingTreeTxt.wordWrapWidth = 500;

		this.completedTxt = this.add.text(320, 140, completedText);
		this.completedTxt.anchor.setTo(0.5);
		this.completedTxt.align = 'center';
		this.completedTxt.fontSize = 14;
		this.completedTxt.fontWeight = 'normal';
		this.completedTxt.fill = '#000000';
		this.completedTxt.wordWrap = true;
		this.completedTxt.wordWrapWidth = 500;

		this.numbersensePrgress = game.add.sprite(320, 180, 'progressCircle');
		this.numbersensePrgress.frame = this.numbersensePersent - 1;
		this.numbersensePrgress.anchor.setTo(0.5);
		this.numbersensePrgress.scale.setTo(1.5);


		this.numbersensePrgress.inputEnabled = true;
		this.numbersensePrgress.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			this.state.start('userprogress2', true, false, "NumberSense", this.responseData, this.responseData);
		}, this);

		this.numbersensePrgressTxt = this.add.text(320, 180, this.numbersensePersent + '%');
		this.numbersensePrgressTxt.anchor.setTo(0.5);
		this.numbersensePrgressTxt.align = 'center';
		this.numbersensePrgressTxt.fontSize = 20;
		this.numbersensePrgressTxt.fontWeight = 'normal';
		this.numbersensePrgressTxt.fill = '#000000';
		this.numbersensePrgressTxt.wordWrap = true;
		this.numbersensePrgressTxt.wordWrapWidth = 500;

		this.numbersensePrgressTotalTxt = this.add.text(390, 180, this.responseData.PNS + '/' + this.numberSenseTotal);
		this.numbersensePrgressTotalTxt.anchor.setTo(0.5);
		this.numbersensePrgressTotalTxt.align = 'center';
		this.numbersensePrgressTotalTxt.fontSize = 20;
		this.numbersensePrgressTotalTxt.fontWeight = 'normal';
		this.numbersensePrgressTotalTxt.fill = '#000000';
		this.numbersensePrgressTotalTxt.wordWrap = true;
		this.numbersensePrgressTotalTxt.wordWrapWidth = 500;

		this.measurementPrgress = game.add.sprite(320, 280, 'progressCircle');
		this.measurementPrgress.frame = this.measurementPersent - 1;
		this.measurementPrgress.anchor.setTo(0.5);
		this.measurementPrgress.scale.setTo(1.5);
		this.measurementPrgress.inputEnabled = true;
		this.measurementPrgress.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			this.state.start('userprogress2', true, false, "Measurement", this.responseData, this.responseData);
		}, this);

		this.measurementPrgressTxt = this.add.text(320, 280, this.measurementPersent + '%');
		this.measurementPrgressTxt.anchor.setTo(0.5);
		this.measurementPrgressTxt.align = 'center';
		this.measurementPrgressTxt.fontSize = 20;
		this.measurementPrgressTxt.fontWeight = 'normal';
		this.measurementPrgressTxt.fill = '#000000';
		this.measurementPrgressTxt.wordWrap = true;
		this.measurementPrgressTxt.wordWrapWidth = 500;

		this.measurementPrgressTotalTxt = this.add.text(390, 280, this.responseData.PM + '/' + this.measurementTotal);
		this.measurementPrgressTotalTxt.anchor.setTo(0.5);
		this.measurementPrgressTotalTxt.align = 'center';
		this.measurementPrgressTotalTxt.fontSize = 20;
		this.measurementPrgressTotalTxt.fontWeight = 'normal';
		this.measurementPrgressTotalTxt.fill = '#000000';
		this.measurementPrgressTotalTxt.wordWrap = true;
		this.measurementPrgressTotalTxt.wordWrapWidth = 500;

		this.numberoperationPrgress = game.add.sprite(320, 380, 'progressCircle');
		this.numberoperationPrgress.frame = this.numberoperationPersent - 1;
		this.numberoperationPrgress.anchor.setTo(0.5);
		this.numberoperationPrgress.scale.setTo(1.5);

		this.numberoperationPrgress.inputEnabled = true;
		this.numberoperationPrgress.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			this.state.start('userprogress2', true, false, "NumberOperation", this.responseData, this.responseData);
		}, this);

		this.numberoperationPrgressTxt = this.add.text(320, 380, this.numberoperationPersent + '%');
		this.numberoperationPrgressTxt.anchor.setTo(0.5);
		this.numberoperationPrgressTxt.align = 'center';
		this.numberoperationPrgressTxt.fontSize = 20;
		this.numberoperationPrgressTxt.fontWeight = 'normal';
		this.numberoperationPrgressTxt.fill = '#000000';
		this.numberoperationPrgressTxt.wordWrap = true;
		this.numberoperationPrgressTxt.wordWrapWidth = 500;

		this.numberoperationPrgressTotalTxt = this.add.text(390, 380, this.responseData.PNO + '/' + this.numberoperationTotal);
		this.numberoperationPrgressTotalTxt.anchor.setTo(0.5);
		this.numberoperationPrgressTotalTxt.align = 'center';
		this.numberoperationPrgressTotalTxt.fontSize = 20;
		this.numberoperationPrgressTotalTxt.fontWeight = 'normal';
		this.numberoperationPrgressTotalTxt.fill = '#000000';
		this.numberoperationPrgressTotalTxt.wordWrap = true;
		this.numberoperationPrgressTotalTxt.wordWrapWidth = 500;

		this.shapesPrgress = game.add.sprite(320, 480, 'progressCircle');
		this.shapesPrgress.frame = this.shapesPersent - 1;
		this.shapesPrgress.anchor.setTo(0.5);
		this.shapesPrgress.scale.setTo(1.5);

		this.shapesPrgressTxt = this.add.text(320, 480, this.shapesPersent + '%');
		this.shapesPrgressTxt.anchor.setTo(0.5);
		this.shapesPrgressTxt.align = 'center';
		this.shapesPrgressTxt.fontSize = 20;
		this.shapesPrgressTxt.fontWeight = 'normal';
		this.shapesPrgressTxt.fill = '#000000';
		this.shapesPrgressTxt.wordWrap = true;
		this.shapesPrgressTxt.wordWrapWidth = 500;

		this.shapesPrgressTotalTxt = this.add.text(390, 480, this.responseData.PSG + '/' + this.shapesTotal);
		this.shapesPrgressTotalTxt.anchor.setTo(0.5);
		this.shapesPrgressTotalTxt.align = 'center';
		this.shapesPrgressTotalTxt.fontSize = 20;
		this.shapesPrgressTotalTxt.fontWeight = 'normal';
		this.shapesPrgressTotalTxt.fill = '#000000';
		this.shapesPrgressTotalTxt.wordWrap = true;
		this.shapesPrgressTotalTxt.wordWrapWidth = 500;

		this.datahandlingPrgress = game.add.sprite(320, 580, 'progressCircle');
		this.datahandlingPrgress.frame = this.datahandlingPersent - 1;
		this.datahandlingPrgress.anchor.setTo(0.5);
		this.datahandlingPrgress.scale.setTo(1.5);

		this.datahandlingPrgressTxt = this.add.text(320, 580, this.datahandlingPersent + '%');
		this.datahandlingPrgressTxt.anchor.setTo(0.5);
		this.datahandlingPrgressTxt.align = 'center';
		this.datahandlingPrgressTxt.fontSize = 20;
		this.datahandlingPrgressTxt.fontWeight = 'normal';
		this.datahandlingPrgressTxt.fill = '#000000';
		this.datahandlingPrgressTxt.wordWrap = true;
		this.datahandlingPrgressTxt.wordWrapWidth = 500;

		this.datahandlingPrgressTotalTxt = this.add.text(390, 580, this.responseData.PDH + '/' + this.datahandlingTotal);
		this.datahandlingPrgressTotalTxt.anchor.setTo(0.5);
		this.datahandlingPrgressTotalTxt.align = 'center';
		this.datahandlingPrgressTotalTxt.fontSize = 20;
		this.datahandlingPrgressTotalTxt.fontWeight = 'normal';
		this.datahandlingPrgressTotalTxt.fill = '#000000';
		this.datahandlingPrgressTotalTxt.wordWrap = true;
		this.datahandlingPrgressTotalTxt.wordWrapWidth = 500;


		_this.swipeUpFlag = true;
		_this.swipeDownFlag = false;

		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xA24098, 0);
		_this.graphicsBg.drawRect(70, 10, 350, 800);
		_this.graphicsBg.boundsPadding = 0;

		_this.mask = _this.add.graphics(10, 135);
		_this.mask.lineStyle(0, 0xFFFFFF, 0);
		_this.mask.beginFill(0xA24098, 1);
		_this.mask.drawRect(70, 10, 360, 375);
		_this.mask.boundsPadding = 0;

		_this.graphicsBg.mask = _this.mask;





		_this.graphicsBg.addChild(this.numberSenseTree);
		_this.graphicsBg.addChild(this.numberSenseTreeTxt);
		_this.graphicsBg.addChild(this.measurementTree);
		_this.graphicsBg.addChild(this.measurementTreeTxt);
		_this.graphicsBg.addChild(this.numberoperationTree);
		_this.graphicsBg.addChild(this.numberoperationTreeTxt);
		_this.graphicsBg.addChild(this.shapesTree);
		_this.graphicsBg.addChild(this.shapesTreeTxt);
		_this.graphicsBg.addChild(this.datahandlingTree);
		_this.graphicsBg.addChild(this.datahandlingTreeTxt);
		_this.graphicsBg.addChild(this.numbersensePrgress);
		_this.graphicsBg.addChild(this.numbersensePrgressTxt);
		_this.graphicsBg.addChild(this.numbersensePrgressTotalTxt);
		_this.graphicsBg.addChild(this.measurementPrgress);
		_this.graphicsBg.addChild(this.measurementPrgressTxt);
		_this.graphicsBg.addChild(this.measurementPrgressTotalTxt);
		_this.graphicsBg.addChild(this.numberoperationPrgress);
		_this.graphicsBg.addChild(this.numberoperationPrgressTxt);
		_this.graphicsBg.addChild(this.numberoperationPrgressTotalTxt);
		_this.graphicsBg.addChild(this.shapesPrgress);
		_this.graphicsBg.addChild(this.shapesPrgressTxt);
		_this.graphicsBg.addChild(this.shapesPrgressTotalTxt);
		_this.graphicsBg.addChild(this.datahandlingPrgress);
		_this.graphicsBg.addChild(this.datahandlingPrgressTxt);
		_this.graphicsBg.addChild(this.datahandlingPrgressTotalTxt);


		_this.scrollWhite = _this.add.sprite(425, 130, 'scrollWhite');
		_this.scrollBlack = _this.add.sprite(428, 135, 'scrollBlack');

		_this.graphicsBg.inputEnabled = true;
		_this.graphicsBg.input.enableDrag();
		_this.graphicsBg.input.allowHorizontalDrag = false;
		_this.graphicsBg.events.onDragUpdate.add(function (target) {
			console.log(_this.graphicsBg.y);

			if (_this.graphicsBg.y > 0)
				_this.graphicsBg.y = 0;
			if (_this.graphicsBg.y < -95)
				_this.graphicsBg.y = -95;

			/*if(_this.scrollBlack.y>-47){
				_this.scrollBlack.y = 210;
				_this.graphicsBg.y = -95;
			}
			else if(_this.scrollBlack.y<-47){
				_this.scrollBlack.y = 135;
				_this.graphicsBg.y = 0;
			}*/

		}, true);

		_this.scrollBlack.inputEnabled = true;

		_this.scrollBlack.input.enableDrag();
		_this.scrollBlack.input.allowHorizontalDrag = false;
		_this.scrollBlack.events.onDragUpdate.add(function (target) {
			console.log(_this.scrollBlack.y);


			if (_this.scrollBlack.y < 135)
				_this.scrollBlack.y = 135;

			if (_this.scrollBlack.y > 210)
				_this.scrollBlack.y = 210;

			if (_this.scrollBlack.y > 172) {
				_this.scrollBlack.y = 210;
				_this.graphicsBg.y = -95;
			}
			else if (_this.scrollBlack.y < 172) {
				_this.scrollBlack.y = 135;
				_this.graphicsBg.y = 0;
			}


		}, true);

	},

	getchallengemodevalue: function (game) {

		var numbersArray = [window.avatarName + "number_NSNG_1_1state", window.avatarName + "number_NSNG_2_1state"];

		var sequenceArray = [window.avatarName + "sequence_NSSG_1_1state", window.avatarName + "sequence_NSSG_2_1state",
		window.avatarName + "sequence_NSSG_3_2state", window.avatarName + "sequence_NSSG_4_2state",
		window.avatarName + "sequence_NSSG_5_3state", window.avatarName + "sequence_NSSG_6_3state"];

		var comparisonArray = [window.avatarName + "comparison_NSCG_1_1state", window.avatarName + "comparison_NSCG_2_1state",
		window.avatarName + "comparison_NSCG_4_2state", window.avatarName + "comparison_NSCG_5_3state"];

		var placevalueArray = [window.avatarName + "placevalue_NSPVG_1_1state", window.avatarName + "placevalue_NSPVG_2_1state",
		window.avatarName + "placevalue_NSPVG_4_2state", window.avatarName + "placevalue_NSPVG_6_3state",
		window.avatarName + "placevalue_NSPVG_5_2state", window.avatarName + "placevalue_NSPVG_7_3state"];

		var fractionArray = [window.avatarName + "fraction_NSFG_1_1state", window.avatarName + "fraction_NSFG_2_1state",
		window.avatarName + "fraction_NSFG_3_1state", window.avatarName + "fraction_NSFG_4_1state"];



		for (var i = 0; i < this.cnumbersPlayedFromServer; i++) {

			if (localStorage.getItem(numbersArray[i]) == "fullycomplete")
				localStorage.setItem(numbersArray[i], "fullycomplete");
			else if (localStorage.getItem(numbersArray[i]) == "playedwithhint")
				localStorage.setItem(numbersArray[i], "playedwithhint");
			else
				localStorage.setItem(numbersArray[i], "canplay");

			if (i != 0)
				localStorage.setItem(numbersArray[i - 1], "fullycomplete");

		}

		console.log(this.cnumbersPlayedFromServer);
		console.log("seq" + this.csequencePlayedFromServer);
		console.log(this.ccomparisonPlayedFromServer);
		console.log(this.cplacevaluePlayedFromServer);
		console.log(this.cfractionPlayedFromServer);

		for (var i = 0; i < this.csequencePlayedFromServer; i++) {
			if (localStorage.getItem(sequenceArray[i]) == "fullycomplete")
				localStorage.setItem(sequenceArray[i], "fullycomplete");
			else if (localStorage.getItem(sequenceArray[i]) == "playedwithhint")
				localStorage.setItem(sequenceArray[i], "playedwithhint");
			else
				localStorage.setItem(sequenceArray[i], "canplay");

			if (i != 0)
				localStorage.setItem(sequenceArray[i - 1], "fullycomplete");
		}


		for (var i = 0; i < this.ccomparisonPlayedFromServer; i++) {
			if (localStorage.getItem(comparisonArray[i]) == "fullycomplete")
				localStorage.setItem(comparisonArray[i], "fullycomplete");
			else if (localStorage.getItem(comparisonArray[i]) == "playedwithhint")
				localStorage.setItem(comparisonArray[i], "playedwithhint");
			else
				localStorage.setItem(comparisonArray[i], "canplay");

			if (i != 0)
				localStorage.setItem(comparisonArray[i - 1], "fullycomplete");
		}


		for (var i = 0; i < this.cplacevaluePlayedFromServer; i++) {
			if (localStorage.getItem(placevalueArray[i]) == "fullycomplete")
				localStorage.setItem(placevalueArray[i], "fullycomplete");
			else if (localStorage.getItem(placevalueArray[i]) == "playedwithhint")
				localStorage.setItem(placevalueArray[i], "playedwithhint");
			else
				localStorage.setItem(placevalueArray[i], "canplay");

			if (i != 0)
				localStorage.setItem(placevalueArray[i - 1], "fullycomplete");
		}


		for (var i = 0; i < this.cfractionPlayedFromServer; i++) {
			if (localStorage.getItem(fractionArray[i]) == "fullycomplete")
				localStorage.setItem(fractionArray[i], "fullycomplete");
			else if (localStorage.getItem(fractionArray[i]) == "playedwithhint")
				localStorage.setItem(fractionArray[i], "playedwithhint");
			else
				localStorage.setItem(fractionArray[i], "canplay");

			if (i != 0)
				localStorage.setItem(fractionArray[i - 1], "fullycomplete");
		}


		var additionArray = [window.avatarName + "addition_NOAG_1_1state", window.avatarName + "addition_NOAG_2_1state",
		window.avatarName + "addition_NOAG_3_2state", window.avatarName + "addition_NOAG_4_3state"];

		var subtractionArray = [window.avatarName + "subtraction_NOSG_1_1state", window.avatarName + "subtraction_NOSG_2_1state",
		window.avatarName + "subtraction_NOSG_3_2state", window.avatarName + "subtraction_NOSG_4_3state"];

		var multiplicationArray = [window.avatarName + "multiplication_NOMG_1_1state", window.avatarName + "multiplication_NOMG_2_1state",
		window.avatarName + "multiplication_NOMG_3_1state", window.avatarName + "multiplication_NOMG_4_2state",
		window.avatarName + "multiplication_NOMG_5_3state"];

		var divisionArray = [window.avatarName + "division_NODG_1_2state", window.avatarName + "division_NODG_2_2state",
		window.avatarName + "division_NODG_3_2state", window.avatarName + "division_NODG_4_2state"];


		for (var i = 0; i < this.cadditionPlayedFromServer; i++) {
			if (localStorage.getItem(additionArray[i]) == "fullycomplete")
				localStorage.setItem(additionArray[i], "fullycomplete");
			else if (localStorage.getItem(additionArray[i]) == "playedwithhint")
				localStorage.setItem(additionArray[i], "playedwithhint");
			else
				localStorage.setItem(additionArray[i], "canplay");

			if (i != 0)
				localStorage.setItem(additionArray[i - 1], "fullycomplete");
		}


		for (var i = 0; i < this.csubtractionPlayedFromServer; i++) {
			if (localStorage.getItem(subtractionArray[i]) == "fullycomplete")
				localStorage.setItem(subtractionArray[i], "fullycomplete");
			else if (localStorage.getItem(subtractionArray[i]) == "playedwithhint")
				localStorage.setItem(subtractionArray[i], "playedwithhint");
			else
				localStorage.setItem(subtractionArray[i], "canplay");

			if (i != 0)
				localStorage.setItem(subtractionArray[i - 1], "fullycomplete");
		}


		for (var i = 0; i < this.cmultiplicationPlayedFromServer; i++) {
			if (localStorage.getItem(multiplicationArray[i]) == "fullycomplete")
				localStorage.setItem(multiplicationArray[i], "fullycomplete");
			else if (localStorage.getItem(multiplicationArray[i]) == "playedwithhint")
				localStorage.setItem(multiplicationArray[i], "playedwithhint");
			else
				localStorage.setItem(multiplicationArray[i], "canplay");

			if (i != 0)
				localStorage.setItem(multiplicationArray[i - 1], "fullycomplete");
		}


		for (var i = 0; i < this.cdivisionPlayedFromServer; i++) {
			if (localStorage.getItem(divisionArray[i]) == "fullycomplete")
				localStorage.setItem(divisionArray[i], "fullycomplete");
			else if (localStorage.getItem(divisionArray[i]) == "playedwithhint")
				localStorage.setItem(divisionArray[i], "playedwithhint");
			else
				localStorage.setItem(divisionArray[i], "canplay");

			if (i != 0)
				localStorage.setItem(divisionArray[i - 1], "fullycomplete");
		}

		var lengthArray = [window.avatarName + "length_MLG_1_1state", window.avatarName + "length_MLG_2_1state", window.avatarName + "length_MLG_3_2state"];
		var volumehArray = [window.avatarName + "volume_MVG_1_4state", window.avatarName + "volume_MVG_2_4state", window.avatarName + "volume_MVG_3_4state"];
		var weightArray = [window.avatarName + "weight_MWG_1_1state", window.avatarName + "weight_MWG_2_2state", window.avatarName + "weight_MWG_3_2state"];
		var timeArray = [window.avatarName + "time_MTG_1_1state", window.avatarName + "time_MTG_2_3state", window.avatarName + "time_MTG_3_3state"];

		for (var i = 0; i < this.clengthPlayedFromServer; i++) {
			if (localStorage.getItem(lengthArray[i]) == "fullycomplete")
				localStorage.setItem(lengthArray[i], "fullycomplete");
			else if (localStorage.getItem(lengthArray[i]) == "playedwithhint")
				localStorage.setItem(lengthArray[i], "playedwithhint");
			else
				localStorage.setItem(lengthArray[i], "canplay");

			if (i != 0)
				localStorage.setItem(lengthArray[i - 1], "fullycomplete");
		}


		for (var i = 0; i < this.cvolumePlayedFromServer; i++) {
			if (localStorage.getItem(volumehArray[i]) == "fullycomplete")
				localStorage.setItem(volumehArray[i], "fullycomplete");
			else if (localStorage.getItem(volumehArray[i]) == "playedwithhint")
				localStorage.setItem(volumehArray[i], "playedwithhint");
			else
				localStorage.setItem(volumehArray[i], "canplay");

			if (i != 0)
				localStorage.setItem(volumehArray[i - 1], "fullycomplete");
		}


		for (var i = 0; i < this.cweightPlayedFromServer; i++) {
			if (localStorage.getItem(weightArray[i]) == "fullycomplete")
				localStorage.setItem(weightArray[i], "fullycomplete");
			else if (localStorage.getItem(weightArray[i]) == "playedwithhint")
				localStorage.setItem(weightArray[i], "playedwithhint");
			else
				localStorage.setItem(weightArray[i], "canplay");

			if (i != 0)
				localStorage.setItem(weightArray[i - 1], "fullycomplete");
		}


		for (var i = 0; i < this.ctimePlayedFromServer; i++) {
			if (localStorage.getItem(timeArray[i]) == "fullycomplete")
				localStorage.setItem(timeArray[i], "fullycomplete");
			else if (localStorage.getItem(timeArray[i]) == "playedwithhint")
				localStorage.setItem(timeArray[i], "playedwithhint");
			else
				localStorage.setItem(timeArray[i], "canplay");

			if (i != 0)
				localStorage.setItem(timeArray[i - 1], "fullycomplete");
		}


		this.score = ((this.passcount + this.passcount1 + this.passcount2) * 5) - ((this.hintcount + this.hintcount1 + this.hintcount2) * 3) - ((this.totalgameplayed + this.totalgameplayed1 + this.totalgameplayed2) * 5);

		window.score = localStorage.getItem(window.avatarName + "Score");


		if (this.totalgameplayed > 0 || this.totalgameplayed1 > 0 || this.totalgameplayed2 > 0) {
			if (this.score > window.score && window.score != null && window.score != undefined && window.score != "" && window.score != NaN) {
				localStorage.setItem(window.avatarName + "Score", this.score);
			}
		}

	},

}
