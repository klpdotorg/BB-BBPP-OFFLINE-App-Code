Game.grade7NumberSystems = function (game) {

};

Game.grade7NumberSystems.prototype = {

	init: function (game_id, userHasPlayed, timeInMinutes, timeInSeconds, score, gradeTopics, grade, microConcepts) {
		_this = this;
		if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
			console.log("sync telemetry" + navigator.connection.type);
		}

		document.addEventListener("online", _this.syncTelFunc, false);

		//Variables used for user progress
		_this.userHasPlayed = userHasPlayed;
		_this.timeInMinutes = timeInMinutes;
		_this.timeInSeconds = timeInSeconds;
		_this.score = score;
		_this.game_id = game_id;
		_this.gradeTopics = gradeTopics;
		_this.grade = grade;
		_this.microConcepts = microConcepts;


	},

	syncTelFunc: function () {
		if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
			console.log("sync telemetry" + navigator.connection.type);
			//absdsjsapi.syncTelemetryData();
		}
	},

	create: function (game) {


		nativeApp.screenViewStringPass("Practice_activity_list", "grade7NumberSystems");

		_this = this;

		this.game.input.enabled = false;

		grade7NumberSystemsSelected = false;
		grade7AlgebraSelected = false;
		grade7RatioandProportionSelected = false;
		grade7GeometrySelected = false;
		grade7DecimalsSelected = false;

		this.video = null;
		this.video1 = null;
		this.video2 = null;
		this.video3 = null;

		_this.tween = null;
		_this.tap = false;
		//adding bg, title to the scene.
		_this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'gameselectBg');

		_this.gradeBackBtn = _this.add.sprite(-5, 3, 'gradeSceneBackBtn');
		_this.gradeBackBtn.inputEnabled = true;
		_this.gradeBackBtn.input.useHandCursor = true;
		_this.gradeBackBtn.input.priorityID = 1;
		_this.gradeBackBtn.events.onInputDown.add(function (target) {
			target.events.onInputDown.removeAll();
			//_this.cache.destroy();
			_this.clickSound = _this.add.audio('ClickSound');
			_this.clickSound.play();
			grade7NumberSystemsSelected = false;
			_this.state.start('selectgrade7MicroConceptScreen', true, false);
		}, _this);

		this.gameModeShareBtn = game.add.image(920, 18, 'shareIcon');
		this.gameModeShareBtn.anchor.setTo(0.5);
		this.gameModeShareBtn.scale.setTo(0.75);
		this.gameModeShareBtn.inputEnabled = true;
		this.gameModeShareBtn.input.priorityID = 1;
		this.gameModeShareBtn.input.useHandCursor = true;
		this.gameModeShareBtn.events.onInputDown.add(function () {
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			nativeApp.ShareApp();
		}, this);


		_this.grade7NumbersGroup = _this.add.group();
		_this.grade7IntegersGroup = _this.add.group();
		_this.grade7FractionsGroup = _this.add.group();
		_this.grade7DecimalsGroup = _this.add.group();
		_this.grade7RatioandProportionGroup = _this.add.group();

		_this.addgrade7IntegersTopic();
		_this.addgrade7FractionsTopic();
		_this.addgrade7DecimalsTopic();

		_this.grade7IntegersGroup.x = 0;
		_this.grade7IntegersGroup.y = 0;

		_this.grade7FractionsGroup.x = 0;
		_this.grade7FractionsGroup.y = 500;

		_this.grade7DecimalsGroup.x = 0;
		_this.grade7DecimalsGroup.y = 1200;


		_this.grade7RatioandProportionGroup.x = 0;
		_this.grade7RatioandProportionGroup.y = 3230;

		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xD957A0, 0);
		_this.graphicsBg.drawRect(0, 0, 960, 4000);
		_this.graphicsBg.boundsPadding = 0;

		_this.mask = _this.add.graphics();
		_this.mask.position.x = 0;
		_this.mask.position.y = 35;
		_this.mask.beginFill(0, 1);
		_this.mask.moveTo(0, 0);
		_this.mask.lineTo(960, 0);
		_this.mask.lineTo(960, 505);
		_this.mask.lineTo(0, 505);
		_this.mask.lineTo(0, 0);
		_this.mask.endFill();
		_this.graphicsBg.mask = _this.mask;

		_this.graphicsBg.addChild(_this.grade7RatioandProportionGroup);
		_this.graphicsBg.addChild(_this.grade7DecimalsGroup);
		_this.graphicsBg.addChild(_this.grade7FractionsGroup);
		_this.graphicsBg.addChild(_this.grade7NumbersGroup);
		_this.graphicsBg.addChild(_this.grade7IntegersGroup);


		_this.swipeUpFlag = true;
		_this.swipeDownFlag = false;
		_this.page = document.getElementById("body");
		_this.mc = new Hammer(_this.page);
		_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL, enable: false });

		_this.mc.on("swipeleft", function () {
			//console.log('swipeleft');
		});

		_this.mc.on("swiperight", function () {
			//console.log('swiperight');
		});

		_this.mc.on("swipeup", function (v) {

			_this.tween = game.add.tween(_this.graphicsBg);
			_this.tween.to({ y: _this.graphicsBg.y - (v.distance * (v.overallVelocity * 2 / -1)) }, 0, 'Linear', true, 0);
			_this.tween.onComplete.add(function () {
				//	swipeDownFlag = true;
				_this.tween = null;
				if (_this.graphicsBg.y <= -3000) {
					//swipeUpFlag = false;
					_this.graphicsBg.y = -3000;
				}

				//game.input.enabled = true;
			}, _this);
			_this.tween.onUpdateCallback(function () {
				_this.tap = false;
				if (_this.graphicsBg.y <= -3000) {
					//swipeUpFlag = false;
					_this.graphicsBg.y = -3000;
					_this.tween.stop();
					//_this.tween = null;
					//game.input.enabled = true;
				}
			}, _this);

			//	}
		});

		_this.mc.on("swipedown", function (v) {

			_this.tween = game.add.tween(_this.graphicsBg);
			_this.tween.to({ y: _this.graphicsBg.y + (v.distance * (v.overallVelocity * 2)) }, 0, 'Linear', true, 0);
			_this.tween.onComplete.add(function () {
				//	swipeUpFlag = true;
				_this.tween = null;
				if (_this.graphicsBg.y >= 0) {
					//	swipeDownFlag = false;
					_this.graphicsBg.y = 0;
				}
				//game.input.enabled = true;
			}, _this);

			_this.tween.onUpdateCallback(function () {
				tap = false;
				if (_this.graphicsBg.y >= 0) {
					//swipeUpFlag = false;
					_this.graphicsBg.y = 0;
					_this.tween.stop();
					//_this.tween = null;
					//game.input.enabled = true;
				}
			}, _this);
			//	}
		});

		_this.input.onDown.add(function () {
			if (_this.tween) {
				if (_this.tween.isRunning) {
					_this.tween.stop();
					//_this.tween = null;
				}
			}
			_this.graphicsBg.inputEnabled = true;
			_this.graphicsBg.input.enableDrag();
			_this.graphicsBg.input.allowHorizontalDrag = false;

			_this.graphicsBg.events.onDragUpdate.add(function () {
				_this.tap = false;
				if (_this.tween) {
					if (_this.tween.isRunning) {
						_this.tween.stop();
						//_this.tween = null;
					}
				}
				if (_this.graphicsBg.y >= 10) {
					//swipeUpFlag = false;
					_this.graphicsBg.y = 0;
					//tween.stop();
					//game.input.enabled = true;
				}
				else if (_this.graphicsBg.y <= -3000) {
					//swipeUpFlag = false;
					_this.graphicsBg.y = -3000;

				}
			}, _this);

			_this.graphicsBg.events.onDragStop.add(function (e) {
				_this.tap = false;
				//console.log(e);
				if (_this.tween) {
					//if(tween.isRunning)
					_this.tween.stop();
					//_this.tween = null;
				}

				if (_this.graphicsBg.y >= 0) {
					//	swipeDownFlag = false;
					_this.graphicsBg.y = 0;
				}
				else if (_this.graphicsBg.y <= -3000) {
					//swipeUpFlag = false;
					_this.graphicsBg.y = -3000;
				}

			}, _this);

		}, _this);

		_this.input.onTap.add(function () {
			//console.log("tap");
			_this.tap = true;
			_this.time.events.add(3000, function () {
				_this.time.events.removeAll();
				_this.tap = false;
				//console.log("tapfalse");
			}, _this);
		}, _this);


		if (gradeScreen) {
			_this.graphicsBg.y = -3000;

			var gameScreenTween = game.add.tween(_this.graphicsBg);
			gameScreenTween.to({ y: 0 }, 2000, 'Linear', true, 0);
			gameScreenTween.onComplete.add(function () {
				this.game.input.enabled = true;

				if (_this.mc) {
					_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL, enable: true });
				}


			}, _this);


			gradeScreen = false;

		}
		else {
			if (_this.mc) {
				_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL, enable: true });
			}
			this.game.input.enabled = true;
		}

	},


	addgrade7FractionsTopic: function () {
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xD957A0, 1);
		_this.topicTxtBg.drawRoundedRect(0, 0, 170, 100, 10);
		_this.topicTxtBg.boundsPadding = 0;

		_this.topicTitleText = this.add.text(185, 85, ' \n ' + window.selctedLang.fractionTitle + ' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';
		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;

		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xD957A0, 1);
		_this.topicBg.drawRoundedRect(0, 0, 805, 600, 30);
		_this.topicBg.boundsPadding = 0;
		//NSF-CUIS-G7//NSF-ADSB//NSF-UNLAD//NSF-UNLSB//NSF-MLP-01//NSF-MLP-02//NSF-MLP-03//NSF-DWF-G7//NSF-DFW//NSF-DFF
		_this.NSF_CUIS_Screen = _this.add.sprite(100, 120, 'NSF_CUIS_Screen');//NSF_CUIS_Screen
		_this.bgGraphicFr1 = this.add.graphics(210, 175);
		_this.bgGraphicFr1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicFr1.beginFill(0x493A19, 1);
		_this.bgGraphicFr1.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicFr1.boundsPadding = 0;
		_this.NSF_CUIS_ScreenTxt = this.add.text(225, 192, ' \n ' + window.selctedLang.NSF_CUIS_Screen + ' \n ');//window.selctedLang.NSF_CUIS_Screen
		_this.NSF_CUIS_ScreenTxt.anchor.setTo(0.5);
		_this.NSF_CUIS_ScreenTxt.align = 'center';
		_this.NSF_CUIS_ScreenTxt.font = 'gradefont';
		_this.NSF_CUIS_ScreenTxt.fontSize = 20;
		_this.NSF_CUIS_ScreenTxt.fontWeight = 'normal';
		_this.NSF_CUIS_ScreenTxt.fill = 'white';
		_this.NSF_CUIS_ScreenTxt.wordWrap = true;
		_this.NSF_CUIS_ScreenTxt.wordWrapWidth = 500;
		_this.NSF_CUIS_Screen.inputEnabled = true;
		_this.NSF_CUIS_Screen.input.useHandCursor = true;
		_this.NSF_CUIS_Screen.name = "NSF-1";
		_this.NSF_CUIS_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSF_CUIS_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.NSF_ADSB_Screen = _this.add.sprite(300, 120, 'NSF_ADSB_Screen');//NSF_ADSB_Screen
		_this.bgGraphicFr2 = this.add.graphics(410, 175);
		_this.bgGraphicFr2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicFr2.beginFill(0x493A19, 1);
		_this.bgGraphicFr2.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicFr2.boundsPadding = 0;
		_this.NSF_ADSB_ScreenTxt = this.add.text(425, 192, ' \n ' + window.selctedLang.NSF_ADSB_Screen + ' \n ');//window.selctedLang.NSF_ADSB_Screen
		_this.NSF_ADSB_ScreenTxt.anchor.setTo(0.5);
		_this.NSF_ADSB_ScreenTxt.align = 'center';
		_this.NSF_ADSB_ScreenTxt.font = 'gradefont';
		_this.NSF_ADSB_ScreenTxt.fontSize = 20;
		_this.NSF_ADSB_ScreenTxt.fontWeight = 'normal';
		_this.NSF_ADSB_ScreenTxt.fill = 'white';
		_this.NSF_ADSB_ScreenTxt.wordWrap = true;
		_this.NSF_ADSB_ScreenTxt.wordWrapWidth = 500;
		_this.NSF_ADSB_Screen.inputEnabled = true;
		_this.NSF_ADSB_Screen.input.useHandCursor = true;
		_this.NSF_ADSB_Screen.name = "FSM-2";
		_this.NSF_ADSB_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSF_ADSB_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.NSF_UNLAD_Screen = _this.add.sprite(500, 120, 'NSF_UNLAD_Screen');//NSF_UNLAD_Screen
		_this.bgGraphicFr3 = this.add.graphics(610, 175);
		_this.bgGraphicFr3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicFr3.beginFill(0x493A19, 1);
		_this.bgGraphicFr3.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicFr3.boundsPadding = 0;
		_this.NSF_UNLAD_ScreenTxt = this.add.text(625, 192, ' \n ' + window.selctedLang.NSF_UNLAD_Screen + ' \n ');//window.selctedLang.NSF_UNLAD_Screen
		_this.NSF_UNLAD_ScreenTxt.anchor.setTo(0.5);
		_this.NSF_UNLAD_ScreenTxt.align = 'center';
		_this.NSF_UNLAD_ScreenTxt.font = 'gradefont';
		_this.NSF_UNLAD_ScreenTxt.fontSize = 20;
		_this.NSF_UNLAD_ScreenTxt.fontWeight = 'normal';
		_this.NSF_UNLAD_ScreenTxt.fill = 'white';
		_this.NSF_UNLAD_ScreenTxt.wordWrap = true;
		_this.NSF_UNLAD_ScreenTxt.wordWrapWidth = 500;
		_this.NSF_UNLAD_Screen.inputEnabled = true;
		_this.NSF_UNLAD_Screen.input.useHandCursor = true;
		_this.NSF_UNLAD_Screen.name = "NSF-3";
		_this.NSF_UNLAD_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSF_UNLAD_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.NSF_UNLSB_Screen = _this.add.sprite(700, 120, 'NSF_UNLSB_Screen');//NSF_UNLSB_Screen
		_this.bgGraphicFr4 = this.add.graphics(810, 175);
		_this.bgGraphicFr4.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicFr4.beginFill(0x493A19, 1);
		_this.bgGraphicFr4.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicFr4.boundsPadding = 0;
		_this.NSF_UNLSB_ScreenTxt = this.add.text(825, 192, ' \n ' + window.selctedLang.NSF_UNLSB_Screen + ' \n ');//window.selctedLang.NSF_UNLSB_Screen
		_this.NSF_UNLSB_ScreenTxt.anchor.setTo(0.5);
		_this.NSF_UNLSB_ScreenTxt.align = 'center';
		_this.NSF_UNLSB_ScreenTxt.font = 'gradefont';
		_this.NSF_UNLSB_ScreenTxt.fontSize = 20;
		_this.NSF_UNLSB_ScreenTxt.fontWeight = 'normal';
		_this.NSF_UNLSB_ScreenTxt.fill = 'white';
		_this.NSF_UNLSB_ScreenTxt.wordWrap = true;
		_this.NSF_UNLSB_ScreenTxt.wordWrapWidth = 500;
		_this.NSF_UNLSB_Screen.inputEnabled = true;
		_this.NSF_UNLSB_Screen.name = "NSF-4";
		_this.NSF_UNLSB_Screen.input.useHandCursor = true;
		_this.NSF_UNLSB_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSF_UNLSB_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.NSF_MLP_1_Screen = _this.add.sprite(100, 320, 'NSF_MLP_1_Screen');//NSF_MLP_1_Screen
		_this.bgGraphicFr5 = this.add.graphics(210, 375);
		_this.bgGraphicFr5.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicFr5.beginFill(0x493A19, 1);
		_this.bgGraphicFr5.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicFr5.boundsPadding = 0;
		_this.NSF_MLP_1_ScreenTxt = this.add.text(225, 392, ' \n ' + window.selctedLang.NSF_MLP_1_Screen + ' \n ');//window.selctedLang.NSF_MLP_1_Screen
		_this.NSF_MLP_1_ScreenTxt.anchor.setTo(0.5);
		_this.NSF_MLP_1_ScreenTxt.align = 'center';
		_this.NSF_MLP_1_ScreenTxt.font = 'gradefont';
		_this.NSF_MLP_1_ScreenTxt.fontSize = 20;
		_this.NSF_MLP_1_ScreenTxt.fontWeight = 'normal';
		_this.NSF_MLP_1_ScreenTxt.fill = 'white';
		_this.NSF_MLP_1_ScreenTxt.wordWrap = true;
		_this.NSF_MLP_1_ScreenTxt.wordWrapWidth = 500;
		_this.NSF_MLP_1_Screen.inputEnabled = true;
		_this.NSF_MLP_1_Screen.input.useHandCursor = true;
		_this.NSF_MLP_1_Screen.name = "FSM-5";
		_this.NSF_MLP_1_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSF_MLP_01_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.NSF_MLP_2_Screen = _this.add.sprite(300, 320, 'NSF_MLP_2_Screen');//NSF_MLP_2_Screen
		_this.bgGraphicFr6 = this.add.graphics(410, 375);
		_this.bgGraphicFr6.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicFr6.beginFill(0x493A19, 1);
		_this.bgGraphicFr6.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicFr6.boundsPadding = 0;
		_this.NSF_MLP_2_ScreenTxt = this.add.text(425, 392, ' \n ' + window.selctedLang.NSF_MLP_2_Screen + ' \n ');//window.selctedLang.NSF_MLP_2_Screen
		_this.NSF_MLP_2_ScreenTxt.anchor.setTo(0.5);
		_this.NSF_MLP_2_ScreenTxt.align = 'center';
		_this.NSF_MLP_2_ScreenTxt.font = 'gradefont';
		_this.NSF_MLP_2_ScreenTxt.fontSize = 20;
		_this.NSF_MLP_2_ScreenTxt.fontWeight = 'normal';
		_this.NSF_MLP_2_ScreenTxt.fill = 'white';
		_this.NSF_MLP_2_ScreenTxt.wordWrap = true;
		_this.NSF_MLP_2_ScreenTxt.wordWrapWidth = 500;
		_this.NSF_MLP_2_Screen.inputEnabled = true;
		_this.NSF_MLP_2_Screen.input.useHandCursor = true;
		_this.NSF_MLP_2_Screen.name = "NSF-6";
		_this.NSF_MLP_2_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSF_MLP_02_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.NSF_MLP_3_Screen = _this.add.sprite(500, 320, 'NSF_MLP_3_Screen');//NSF_MLP_3_Screen
		_this.bgGraphicFr7 = this.add.graphics(610, 375);
		_this.bgGraphicFr7.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicFr7.beginFill(0x493A19, 1);
		_this.bgGraphicFr7.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicFr7.boundsPadding = 0;
		_this.NSF_MLP_3_ScreenTxt = this.add.text(625, 392, ' \n ' + window.selctedLang.NSF_MLP_3_Screen + ' \n ');//window.selctedLang.NSF_MLP_3_Screen
		_this.NSF_MLP_3_ScreenTxt.anchor.setTo(0.5);
		_this.NSF_MLP_3_ScreenTxt.align = 'center';
		_this.NSF_MLP_3_ScreenTxt.font = 'gradefont';
		_this.NSF_MLP_3_ScreenTxt.fontSize = 20;
		_this.NSF_MLP_3_ScreenTxt.fontWeight = 'normal';
		_this.NSF_MLP_3_ScreenTxt.fill = 'white';
		_this.NSF_MLP_3_ScreenTxt.wordWrap = true;
		_this.NSF_MLP_3_ScreenTxt.wordWrapWidth = 500;
		_this.NSF_MLP_3_Screen.inputEnabled = true;
		_this.NSF_MLP_3_Screen.input.useHandCursor = true;
		_this.NSF_MLP_3_Screen.name = "NSF-7";
		_this.NSF_MLP_3_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSF_MLP_03_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.NSF_DWF_Screen = _this.add.sprite(700, 320, 'NSF_DWF_Screen');//NSF_DWF_Screen
		_this.bgGraphicFr8 = this.add.graphics(810, 375);
		_this.bgGraphicFr8.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicFr8.beginFill(0x493A19, 1);
		_this.bgGraphicFr8.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicFr8.boundsPadding = 0;
		_this.NSF_DWF_ScreenTxt = this.add.text(825, 392, ' \n ' + window.selctedLang.NSF_DWF_Screen + ' \n ');//window.selctedLang.NSF_DWF_Screen
		_this.NSF_DWF_ScreenTxt.anchor.setTo(0.5);
		_this.NSF_DWF_ScreenTxt.align = 'center';
		_this.NSF_DWF_ScreenTxt.font = 'gradefont';
		_this.NSF_DWF_ScreenTxt.fontSize = 20;
		_this.NSF_DWF_ScreenTxt.fontWeight = 'normal';
		_this.NSF_DWF_ScreenTxt.fill = 'white';
		_this.NSF_DWF_ScreenTxt.wordWrap = true;
		_this.NSF_DWF_ScreenTxt.wordWrapWidth = 500;
		_this.NSF_DWF_Screen.inputEnabled = true;
		_this.NSF_DWF_Screen.name = "NSF-8";
		_this.NSF_DWF_Screen.input.useHandCursor = true;
		_this.NSF_DWF_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSF_DWF_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.NSF_DFW_Screen = _this.add.sprite(100, 520, 'NSF_DFW_Screen');//NSF_DFW_Screen
		_this.bgGraphicFr9 = this.add.graphics(210, 575);
		_this.bgGraphicFr9.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicFr9.beginFill(0x493A19, 1);
		_this.bgGraphicFr9.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicFr9.boundsPadding = 0;
		_this.NSF_DFW_ScreenTxt = this.add.text(225, 592, ' \n ' + window.selctedLang.NSF_DFW_Screen + ' \n ');//window.selctedLang.NSF_DFW_Screen
		_this.NSF_DFW_ScreenTxt.anchor.setTo(0.5);
		_this.NSF_DFW_ScreenTxt.align = 'center';
		_this.NSF_DFW_ScreenTxt.font = 'gradefont';
		_this.NSF_DFW_ScreenTxt.fontSize = 20;
		_this.NSF_DFW_ScreenTxt.fontWeight = 'normal';
		_this.NSF_DFW_ScreenTxt.fill = 'white';
		_this.NSF_DFW_ScreenTxt.wordWrap = true;
		_this.NSF_DFW_ScreenTxt.wordWrapWidth = 500;
		_this.NSF_DFW_Screen.inputEnabled = true;
		_this.NSF_DFW_Screen.input.useHandCursor = true;
		_this.NSF_DFW_Screen.name = "NSF-9";
		_this.NSF_DFW_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSF_DFW_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.NSF_DFF_Screen = _this.add.sprite(300, 520, 'NSF_DFF_Screen');//NSF_DFF_Screen
		_this.bgGraphicFr10 = this.add.graphics(410, 575);
		_this.bgGraphicFr10.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicFr10.beginFill(0x493A19, 1);
		_this.bgGraphicFr10.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicFr10.boundsPadding = 0;
		_this.NSF_DFF_ScreenTxt = this.add.text(425, 592, ' \n ' + window.selctedLang.NSF_DFF_Screen + ' \n ');//window.selctedLang.NSF_DFF_Screen
		_this.NSF_DFF_ScreenTxt.anchor.setTo(0.5);
		_this.NSF_DFF_ScreenTxt.align = 'center';
		_this.NSF_DFF_ScreenTxt.font = 'gradefont';
		_this.NSF_DFF_ScreenTxt.fontSize = 20;
		_this.NSF_DFF_ScreenTxt.fontWeight = 'normal';
		_this.NSF_DFF_ScreenTxt.fill = 'white';
		_this.NSF_DFF_ScreenTxt.wordWrap = true;
		_this.NSF_DFF_ScreenTxt.wordWrapWidth = 500;
		_this.NSF_DFF_Screen.inputEnabled = true;
		_this.NSF_DFF_Screen.input.useHandCursor = true;
		_this.NSF_DFF_Screen.name = "NSF-10";
		_this.NSF_DFF_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSF_DFF_G7', true, false);
				}
			}, _this);
		}, _this);


		_this.grade7FractionsGroup.add(_this.topicTxtBg);
		_this.grade7FractionsGroup.add(_this.topicTitleText);
		_this.grade7FractionsGroup.add(_this.topicBg);
		_this.grade7FractionsGroup.add(_this.NSF_CUIS_Screen);
		_this.grade7FractionsGroup.add(_this.bgGraphicFr1);
		_this.grade7FractionsGroup.add(_this.NSF_CUIS_ScreenTxt);
		_this.grade7FractionsGroup.add(_this.NSF_ADSB_Screen);
		_this.grade7FractionsGroup.add(_this.bgGraphicFr2);
		_this.grade7FractionsGroup.add(_this.NSF_ADSB_ScreenTxt);
		_this.grade7FractionsGroup.add(_this.NSF_UNLAD_Screen);
		_this.grade7FractionsGroup.add(_this.bgGraphicFr3);
		_this.grade7FractionsGroup.add(_this.NSF_UNLAD_ScreenTxt);
		_this.grade7FractionsGroup.add(_this.NSF_UNLSB_Screen);
		_this.grade7FractionsGroup.add(_this.bgGraphicFr4);
		_this.grade7FractionsGroup.add(_this.NSF_UNLSB_ScreenTxt);
		_this.grade7FractionsGroup.add(_this.NSF_MLP_1_Screen);
		_this.grade7FractionsGroup.add(_this.bgGraphicFr5);
		_this.grade7FractionsGroup.add(_this.NSF_MLP_1_ScreenTxt);
		_this.grade7FractionsGroup.add(_this.NSF_MLP_2_Screen);
		_this.grade7FractionsGroup.add(_this.bgGraphicFr6);
		_this.grade7FractionsGroup.add(_this.NSF_MLP_2_ScreenTxt);
		_this.grade7FractionsGroup.add(_this.NSF_MLP_3_Screen);
		_this.grade7FractionsGroup.add(_this.bgGraphicFr7);
		_this.grade7FractionsGroup.add(_this.NSF_MLP_3_ScreenTxt);
		_this.grade7FractionsGroup.add(_this.NSF_DWF_Screen);
		_this.grade7FractionsGroup.add(_this.bgGraphicFr8);
		_this.grade7FractionsGroup.add(_this.NSF_DWF_ScreenTxt);
		_this.grade7FractionsGroup.add(_this.NSF_DFW_Screen);
		_this.grade7FractionsGroup.add(_this.bgGraphicFr9);
		_this.grade7FractionsGroup.add(_this.NSF_DFW_ScreenTxt);
		_this.grade7FractionsGroup.add(_this.NSF_DFF_Screen);
		_this.grade7FractionsGroup.add(_this.bgGraphicFr10);
		_this.grade7FractionsGroup.add(_this.NSF_DFF_ScreenTxt);

	},

	addgrade7DecimalsTopic: function () {
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xD957A0, 1);
		_this.topicTxtBg.drawRoundedRect(0, 0, 170, 100, 10);
		_this.topicTxtBg.boundsPadding = 0;

		_this.topicTitleText = this.add.text(185, 85, ' \n ' + window.selctedLang.decimalTitle + ' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';
		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;

		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xD957A0, 1);
		_this.topicBg.drawRoundedRect(0, 0, 805, 400, 30);
		_this.topicBg.boundsPadding = 0;

		_this.NSD_3A_Screen = _this.add.sprite(100, 120, 'NSD_1_G7Screen');
		_this.bgGraphicDec1 = this.add.graphics(210, 175);
		_this.bgGraphicDec1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicDec1.beginFill(0x493A19, 1);
		_this.bgGraphicDec1.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicDec1.boundsPadding = 0;
		_this.NSD_3A_ScreenTxt = this.add.text(225, 192, ' \n ' + window.selctedLang.NSD_1_G7Screen + ' \n ');
		_this.NSD_3A_ScreenTxt.anchor.setTo(0.5);
		_this.NSD_3A_ScreenTxt.align = 'center';
		_this.NSD_3A_ScreenTxt.font = 'gradefont';
		_this.NSD_3A_ScreenTxt.fontSize = 20;
		_this.NSD_3A_ScreenTxt.fontWeight = 'normal';
		_this.NSD_3A_ScreenTxt.fill = 'white';
		_this.NSD_3A_ScreenTxt.wordWrap = true;
		_this.NSD_3A_ScreenTxt.wordWrapWidth = 500;
		_this.NSD_3A_Screen.inputEnabled = true;
		_this.NSD_3A_Screen.input.useHandCursor = true;
		_this.NSD_3A_Screen.name = "NSD-3A";
		_this.NSD_3A_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSD_1_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.NSD_3B_Screen = _this.add.sprite(300, 120, 'NSD_2_Screen');
		_this.bgGraphicDec2 = this.add.graphics(410, 175);
		_this.bgGraphicDec2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicDec2.beginFill(0x493A19, 1);
		_this.bgGraphicDec2.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicDec2.boundsPadding = 0;
		_this.NSD_3B_ScreenTxt = this.add.text(425, 192, ' \n ' + window.selctedLang.NSD_2_G7Screen + ' \n ');
		_this.NSD_3B_ScreenTxt.anchor.setTo(0.5);
		_this.NSD_3B_ScreenTxt.align = 'center';
		_this.NSD_3B_ScreenTxt.font = 'gradefont';
		_this.NSD_3B_ScreenTxt.fontSize = 20;
		_this.NSD_3B_ScreenTxt.fontWeight = 'normal';
		_this.NSD_3B_ScreenTxt.fill = 'white';
		_this.NSD_3B_ScreenTxt.wordWrap = true;
		_this.NSD_3B_ScreenTxt.wordWrapWidth = 500;
		_this.NSD_3B_Screen.inputEnabled = true;
		_this.NSD_3B_Screen.input.useHandCursor = true;
		_this.NSD_3B_Screen.name = "NSD-3B";
		_this.NSD_3B_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSD_2_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.NSD_2A_Screen = _this.add.sprite(500, 120, 'NSD_3_Screen');
		_this.bgGraphicDec3 = this.add.graphics(610, 175);
		_this.bgGraphicDec3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicDec3.beginFill(0x493A19, 1);
		_this.bgGraphicDec3.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicDec3.boundsPadding = 0;
		_this.NSD_2A_ScreenTxt = this.add.text(625, 192, ' \n ' + window.selctedLang.NSD_3_G7Screen + ' \n ');
		_this.NSD_2A_ScreenTxt.anchor.setTo(0.5);
		_this.NSD_2A_ScreenTxt.align = 'center';
		_this.NSD_2A_ScreenTxt.font = 'gradefont';
		_this.NSD_2A_ScreenTxt.fontSize = 20;
		_this.NSD_2A_ScreenTxt.fontWeight = 'normal';
		_this.NSD_2A_ScreenTxt.fill = 'white';
		_this.NSD_2A_ScreenTxt.wordWrap = true;
		_this.NSD_2A_ScreenTxt.wordWrapWidth = 500;
		_this.NSD_2A_Screen.inputEnabled = true;
		_this.NSD_2A_Screen.name = "NSF-2A";
		_this.NSD_2A_Screen.input.useHandCursor = true;
		_this.NSD_2A_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSD_3_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.NSD_2B_Screen = _this.add.sprite(700, 120, 'NSD_4_Screen');
		_this.bgGraphicDec4 = this.add.graphics(810, 175);
		_this.bgGraphicDec4.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicDec4.beginFill(0x493A19, 1);
		_this.bgGraphicDec4.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicDec4.boundsPadding = 0;
		_this.NSD_2B_ScreenTxt = this.add.text(825, 192, ' \n ' + window.selctedLang.NSD_4_G7Screen + ' \n ');
		_this.NSD_2B_ScreenTxt.anchor.setTo(0.5);
		_this.NSD_2B_ScreenTxt.align = 'center';
		_this.NSD_2B_ScreenTxt.font = 'gradefont';
		_this.NSD_2B_ScreenTxt.fontSize = 20;
		_this.NSD_2B_ScreenTxt.fontWeight = 'normal';
		_this.NSD_2B_ScreenTxt.fill = 'white';
		_this.NSD_2B_ScreenTxt.wordWrap = true;
		_this.NSD_2B_ScreenTxt.wordWrapWidth = 500;
		_this.NSD_2B_Screen.inputEnabled = true;
		_this.NSD_2B_Screen.name = "NSD-2B";
		_this.NSD_2B_Screen.input.useHandCursor = true;
		_this.NSD_2B_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSD_4_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.NSD_1_Screen = _this.add.sprite(100, 320, 'NSD_5_Screen');
		_this.bgGraphicDec5 = this.add.graphics(210, 375);
		_this.bgGraphicDec5.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicDec5.beginFill(0x493A19, 1);
		_this.bgGraphicDec5.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicDec5.boundsPadding = 0;
		_this.NSD_1_ScreenTxt = this.add.text(225, 392, ' \n ' + window.selctedLang.NSD_5_G7Screen + ' \n ');
		_this.NSD_1_ScreenTxt.anchor.setTo(0.5);
		_this.NSD_1_ScreenTxt.align = 'center';
		_this.NSD_1_ScreenTxt.font = 'gradefont';
		_this.NSD_1_ScreenTxt.fontSize = 20;
		_this.NSD_1_ScreenTxt.fontWeight = 'normal';
		_this.NSD_1_ScreenTxt.fill = 'white';
		_this.NSD_1_ScreenTxt.wordWrap = true;
		_this.NSD_1_ScreenTxt.wordWrapWidth = 500;
		_this.NSD_1_Screen.inputEnabled = true;
		_this.NSD_1_Screen.input.useHandCursor = true;
		_this.NSD_1_Screen.name = "NSD-1";
		_this.NSD_1_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSD_5_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.NSD_6_Screen = _this.add.sprite(300, 320, 'NSD_6_Screen');
		_this.bgGraphicDec6 = this.add.graphics(410, 375);
		_this.bgGraphicDec6.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicDec6.beginFill(0x493A19, 1);
		_this.bgGraphicDec6.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicDec6.boundsPadding = 0;
		_this.NSD_6_ScreenTxt = this.add.text(425, 392, ' \n ' + window.selctedLang.NSD_6_G7Screen + ' \n ');
		_this.NSD_6_ScreenTxt.anchor.setTo(0.5);
		_this.NSD_6_ScreenTxt.align = 'center';
		_this.NSD_6_ScreenTxt.font = 'gradefont';
		_this.NSD_6_ScreenTxt.fontSize = 20;
		_this.NSD_6_ScreenTxt.fontWeight = 'normal';
		_this.NSD_6_ScreenTxt.fill = 'white';
		_this.NSD_6_ScreenTxt.wordWrap = true;
		_this.NSD_6_ScreenTxt.wordWrapWidth = 500;
		_this.NSD_6_Screen.inputEnabled = true;
		_this.NSD_6_Screen.input.useHandCursor = true;
		_this.NSD_6_Screen.name = "NSD-6A";
		_this.NSD_6_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NSD_6_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.grade7DecimalsGroup.add(_this.topicTxtBg);
		_this.grade7DecimalsGroup.add(_this.topicTitleText);
		_this.grade7DecimalsGroup.add(_this.topicBg);
		_this.grade7DecimalsGroup.add(_this.NSD_2A_Screen);
		_this.grade7DecimalsGroup.add(_this.bgGraphicDec3);
		_this.grade7DecimalsGroup.add(_this.NSD_2A_ScreenTxt);
		_this.grade7DecimalsGroup.add(_this.NSD_2B_Screen);
		_this.grade7DecimalsGroup.add(_this.bgGraphicDec4);
		_this.grade7DecimalsGroup.add(_this.NSD_2B_ScreenTxt);
		_this.grade7DecimalsGroup.add(_this.NSD_3A_Screen);
		_this.grade7DecimalsGroup.add(_this.bgGraphicDec1);
		_this.grade7DecimalsGroup.add(_this.NSD_3A_ScreenTxt);

		_this.grade7DecimalsGroup.add(_this.NSD_3B_Screen);
		_this.grade7DecimalsGroup.add(_this.bgGraphicDec2);
		_this.grade7DecimalsGroup.add(_this.NSD_3B_ScreenTxt);

		_this.grade7DecimalsGroup.add(_this.NSD_1_Screen);
		_this.grade7DecimalsGroup.add(_this.bgGraphicDec5);
		_this.grade7DecimalsGroup.add(_this.NSD_1_ScreenTxt);

		_this.grade7DecimalsGroup.add(_this.NSD_6_Screen);
		_this.grade7DecimalsGroup.add(_this.bgGraphicDec6);
		_this.grade7DecimalsGroup.add(_this.NSD_6_ScreenTxt);

	},


	addgrade7NumbersTopic: function () {
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xD957A0, 1);
		_this.topicTxtBg.drawRoundedRect(0, 0, 170, 100, 10);
		_this.topicTxtBg.boundsPadding = 0;

		_this.topicTitleText = this.add.text(185, 85, ' \n ' + window.selctedLang.numbersTitle + ' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';
		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;

		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xD957A0, 1);
		_this.topicBg.drawRoundedRect(0, 0, 805, 400, 30);
		_this.topicBg.boundsPadding = 0;

		_this.grade7NumbersGroup.add(_this.topicTxtBg);
		_this.grade7NumbersGroup.add(_this.topicTitleText);
		_this.grade7NumbersGroup.add(_this.topicBg);

	},

	addgrade7IntegersTopic: function () {
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xD957A0, 1);
		_this.topicTxtBg.drawRoundedRect(0, 0, 170, 100, 10);
		_this.topicTxtBg.boundsPadding = 0;

		_this.topicTitleText = this.add.text(185, 85, ' \n ' + window.selctedLang.integersTitle + ' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';
		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;

		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xD957A0, 1);
		_this.topicBg.drawRoundedRect(0, 0, 805, 400, 30);
		_this.topicBg.boundsPadding = 0;

		_this.INT_1_Screen = _this.add.sprite(100, 120, 'INT_DI_1_Screen');
		_this.bgGraphicInt1 = this.add.graphics(210, 175);
		_this.bgGraphicInt1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicInt1.beginFill(0x493A19, 1);
		_this.bgGraphicInt1.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicInt1.boundsPadding = 0;
		_this.INT_1_ScreenTxt = this.add.text(225, 192, ' \n ' + window.selctedLang.INT_DI1_Screen + ' \n ');
		_this.INT_1_ScreenTxt.anchor.setTo(0.5);
		_this.INT_1_ScreenTxt.align = 'center';
		_this.INT_1_ScreenTxt.font = 'gradefont';
		_this.INT_1_ScreenTxt.fontSize = 20;
		_this.INT_1_ScreenTxt.fontWeight = 'normal';
		_this.INT_1_ScreenTxt.fill = 'white';
		_this.INT_1_ScreenTxt.wordWrap = true;
		_this.INT_1_ScreenTxt.wordWrapWidth = 500;
		_this.INT_1_Screen.inputEnabled = true;
		_this.INT_1_Screen.input.useHandCursor = true;
		_this.INT_1_Screen.name = "INT-1";
		_this.INT_1_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_INT_DI1_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.INT_3_Screen = _this.add.sprite(300, 120, 'INT_DI_2_Screen');
		_this.bgGraphicInt2 = this.add.graphics(410, 175);
		_this.bgGraphicInt2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicInt2.beginFill(0x493A19, 1);
		_this.bgGraphicInt2.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicInt2.boundsPadding = 0;
		_this.INT_3_ScreenTxt = this.add.text(425, 192, ' \n ' + window.selctedLang.INT_DI2_Screen + ' \n ');
		_this.INT_3_ScreenTxt.anchor.setTo(0.5);
		_this.INT_3_ScreenTxt.align = 'center';
		_this.INT_3_ScreenTxt.font = 'gradefont';
		_this.INT_3_ScreenTxt.fontSize = 20;
		_this.INT_3_ScreenTxt.fontWeight = 'normal';
		_this.INT_3_ScreenTxt.fill = 'white';
		_this.INT_3_ScreenTxt.wordWrap = true;
		_this.INT_3_ScreenTxt.wordWrapWidth = 500;
		_this.INT_3_Screen.inputEnabled = true;
		_this.INT_3_Screen.input.useHandCursor = true;
		_this.INT_3_Screen.name = "INT-3";
		_this.INT_3_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_INT_DI2_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.INT_5_Screen = _this.add.sprite(500, 120, 'INT_DI_3_Screen');
		_this.bgGraphicInt3 = this.add.graphics(610, 175);
		_this.bgGraphicInt3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicInt3.beginFill(0x493A19, 1);
		_this.bgGraphicInt3.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicInt3.boundsPadding = 0;
		_this.INT_5_ScreenTxt = this.add.text(625, 192, ' \n ' + window.selctedLang.INT_DI3_Screen + ' \n ');
		_this.INT_5_ScreenTxt.anchor.setTo(0.5);
		_this.INT_5_ScreenTxt.align = 'center';
		_this.INT_5_ScreenTxt.font = 'gradefont';
		_this.INT_5_ScreenTxt.fontSize = 20;
		_this.INT_5_ScreenTxt.fontWeight = 'normal';
		_this.INT_5_ScreenTxt.fill = 'white';
		_this.INT_5_ScreenTxt.wordWrap = true;
		_this.INT_5_ScreenTxt.wordWrapWidth = 500;
		_this.INT_5_Screen.inputEnabled = true;
		_this.INT_5_Screen.input.useHandCursor = true;
		_this.INT_5_Screen.name = "INT-5";
		_this.INT_5_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_INT_DI3_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.INT_6_Screen = _this.add.sprite(700, 120, 'INT_DI_4_Screen');
		_this.bgGraphicInt4 = this.add.graphics(810, 175);
		_this.bgGraphicInt4.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicInt4.beginFill(0x493A19, 1);
		_this.bgGraphicInt4.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicInt4.boundsPadding = 0;
		_this.INT_6_ScreenTxt = this.add.text(825, 192, ' \n ' + window.selctedLang.INT_DI4_Screen + ' \n ');
		_this.INT_6_ScreenTxt.anchor.setTo(0.5);
		_this.INT_6_ScreenTxt.align = 'center';
		_this.INT_6_ScreenTxt.font = 'gradefont';
		_this.INT_6_ScreenTxt.fontSize = 20;
		_this.INT_6_ScreenTxt.fontWeight = 'normal';
		_this.INT_6_ScreenTxt.fill = 'white';
		_this.INT_6_ScreenTxt.wordWrap = true;
		_this.INT_6_ScreenTxt.wordWrapWidth = 500;
		_this.INT_6_Screen.inputEnabled = true;
		_this.INT_6_Screen.name = "INT-6";
		_this.INT_6_Screen.input.useHandCursor = true;
		_this.INT_6_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_INT_DI4_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.HornINT_5_Screen = _this.add.sprite(100, 320, 'INT_ML_1_Screen');
		_this.bgGraphicInt5 = this.add.graphics(210, 375);
		_this.bgGraphicInt5.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicInt5.beginFill(0x493A19, 1);
		_this.bgGraphicInt5.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicInt5.boundsPadding = 0;
		_this.HornINT_5_ScreenTxt = this.add.text(225, 392, ' \n ' + window.selctedLang.INT_ML1_Screen + ' \n ');
		_this.HornINT_5_ScreenTxt.anchor.setTo(0.5);
		_this.HornINT_5_ScreenTxt.align = 'center';
		_this.HornINT_5_ScreenTxt.font = 'gradefont';
		_this.HornINT_5_ScreenTxt.fontSize = 20;
		_this.HornINT_5_ScreenTxt.fontWeight = 'normal';
		_this.HornINT_5_ScreenTxt.fill = 'white';
		_this.HornINT_5_ScreenTxt.wordWrap = true;
		_this.HornINT_5_ScreenTxt.wordWrapWidth = 500;
		_this.HornINT_5_Screen.inputEnabled = true;
		_this.HornINT_5_Screen.input.useHandCursor = true;
		_this.HornINT_5_Screen.name = "HornINT-5";
		_this.HornINT_5_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_INT_ML1_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.HornINT_6_Screen = _this.add.sprite(300, 320, 'INT_ML_2_Screen');
		_this.bgGraphicInt6 = this.add.graphics(410, 375);
		_this.bgGraphicInt6.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicInt6.beginFill(0x493A19, 1);
		_this.bgGraphicInt6.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicInt6.boundsPadding = 0;
		_this.HornINT_6_ScreenTxt = this.add.text(425, 392, ' \n ' + window.selctedLang.INT_ML2_Screen + ' \n ');
		_this.HornINT_6_ScreenTxt.anchor.setTo(0.5);
		_this.HornINT_6_ScreenTxt.align = 'center';
		_this.HornINT_6_ScreenTxt.font = 'gradefont';
		_this.HornINT_6_ScreenTxt.fontSize = 20;
		_this.HornINT_6_ScreenTxt.fontWeight = 'normal';
		_this.HornINT_6_ScreenTxt.fill = 'white';
		_this.HornINT_6_ScreenTxt.wordWrap = true;
		_this.HornINT_6_ScreenTxt.wordWrapWidth = 500;
		_this.HornINT_6_Screen.inputEnabled = true;
		_this.HornINT_6_Screen.input.useHandCursor = true;
		_this.HornINT_6_Screen.name = "HornINT-6";
		_this.HornINT_6_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_INT_ML2_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.HornINT_13_Screen = _this.add.sprite(500, 320, 'INT_ML_3_Screen');
		_this.bgGraphicInt7 = this.add.graphics(610, 375);
		_this.bgGraphicInt7.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicInt7.beginFill(0x493A19, 1);
		_this.bgGraphicInt7.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicInt7.boundsPadding = 0;
		_this.HornINT_13_ScreenTxt = this.add.text(625, 392, ' \n ' + window.selctedLang.INT_ML3_Screen + ' \n ');
		_this.HornINT_13_ScreenTxt.anchor.setTo(0.5);
		_this.HornINT_13_ScreenTxt.align = 'center';
		_this.HornINT_13_ScreenTxt.font = 'gradefont';
		_this.HornINT_13_ScreenTxt.fontSize = 20;
		_this.HornINT_13_ScreenTxt.fontWeight = 'normal';
		_this.HornINT_13_ScreenTxt.fill = 'white';
		_this.HornINT_13_ScreenTxt.wordWrap = true;
		_this.HornINT_13_ScreenTxt.wordWrapWidth = 500;
		_this.HornINT_13_Screen.inputEnabled = true;
		_this.HornINT_13_Screen.input.useHandCursor = true;
		_this.HornINT_13_Screen.name = "HornINT-13";
		_this.HornINT_13_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_INT_ML3_G7', true, false);
				}
			}, _this);
		}, _this);

		_this.INT_7_Screen = _this.add.sprite(700, 320, 'INT_ML_4_Screen');
		_this.bgGraphicInt8 = this.add.graphics(810, 375);
		_this.bgGraphicInt8.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicInt8.beginFill(0x493A19, 1);
		_this.bgGraphicInt8.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicInt8.boundsPadding = 0;
		_this.INT_7_ScreenTxt = this.add.text(825, 392, ' \n ' + window.selctedLang.INT_ML4_Screen + ' \n ');
		_this.INT_7_ScreenTxt.anchor.setTo(0.5);
		_this.INT_7_ScreenTxt.align = 'center';
		_this.INT_7_ScreenTxt.font = 'gradefont';
		_this.INT_7_ScreenTxt.fontSize = 20;
		_this.INT_7_ScreenTxt.fontWeight = 'normal';
		_this.INT_7_ScreenTxt.fill = 'white';
		_this.INT_7_ScreenTxt.wordWrap = true;
		_this.INT_7_ScreenTxt.wordWrapWidth = 500;
		_this.INT_7_Screen.inputEnabled = true;
		_this.INT_7_Screen.name = "INT-7";
		_this.INT_7_Screen.input.useHandCursor = true;
		_this.INT_7_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_INT_ML4_G7', true, false);
				}
			}, _this);
		}, _this);


		_this.grade7IntegersGroup.add(_this.topicTxtBg);
		_this.grade7IntegersGroup.add(_this.topicTitleText);
		_this.grade7IntegersGroup.add(_this.topicBg);
		_this.grade7IntegersGroup.add(_this.INT_1_Screen);
		_this.grade7IntegersGroup.add(_this.bgGraphicInt1);
		_this.grade7IntegersGroup.add(_this.INT_1_ScreenTxt);
		_this.grade7IntegersGroup.add(_this.INT_3_Screen);
		_this.grade7IntegersGroup.add(_this.bgGraphicInt2);
		_this.grade7IntegersGroup.add(_this.INT_3_ScreenTxt);
		_this.grade7IntegersGroup.add(_this.INT_5_Screen);
		_this.grade7IntegersGroup.add(_this.bgGraphicInt3);
		_this.grade7IntegersGroup.add(_this.INT_5_ScreenTxt);
		_this.grade7IntegersGroup.add(_this.INT_6_Screen);
		_this.grade7IntegersGroup.add(_this.bgGraphicInt4);
		_this.grade7IntegersGroup.add(_this.INT_6_ScreenTxt);
		_this.grade7IntegersGroup.add(_this.HornINT_5_Screen);
		_this.grade7IntegersGroup.add(_this.bgGraphicInt5);
		_this.grade7IntegersGroup.add(_this.HornINT_5_ScreenTxt);
		_this.grade7IntegersGroup.add(_this.HornINT_6_Screen);
		_this.grade7IntegersGroup.add(_this.bgGraphicInt6);
		_this.grade7IntegersGroup.add(_this.HornINT_6_ScreenTxt);
		_this.grade7IntegersGroup.add(_this.HornINT_13_Screen);
		_this.grade7IntegersGroup.add(_this.bgGraphicInt7);
		_this.grade7IntegersGroup.add(_this.HornINT_13_ScreenTxt);
		_this.grade7IntegersGroup.add(_this.INT_7_Screen);
		_this.grade7IntegersGroup.add(_this.bgGraphicInt8);
		_this.grade7IntegersGroup.add(_this.INT_7_ScreenTxt);

	},

	amplifyMedia: function (mediaElem, multiplier) {
		var context = new (window.AudioContext || window.webkitAudioContext),
			result = {
				context: context,
				source: context.createMediaElementSource(mediaElem),
				gain: context.createGain(),
				media: mediaElem,
				amplify: function (multiplier) { result.gain.gain.value = multiplier; },
				getAmpLevel: function () { return result.gain.gain.value; }
			};
		result.source.connect(result.gain);
		result.gain.connect(context.destination);
		result.amplify(multiplier);

		return result;
	},

	stopDemoVoice: function () {
		if (_this.playQuestionSound) {
			if (_this.playQuestionSound.contains(_this.src)) {
				_this.playQuestionSound.removeChild(_this.src);
				_this.src = null;
			}
			if (!_this.playQuestionSound.paused) {
				_this.playQuestionSound.pause();
				_this.playQuestionSound.currentTime = 0.0;
			}
			_this.playQuestionSound = null;
			_this.src = null;
		}
	},
	shutdown: function () {
		if (_this.mc) {
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL, enable: false });
		}
		document.removeEventListener("online", _this.syncTelFunc, false);

		if (this.video) {
			this.video.destroy();
			this.video.removeVideoElement();
			this.video = null;
		}

		if (this.video1) {
			this.video1.destroy();
			this.video1.removeVideoElement();
			this.video1 = null;
		}
		if (this.video2) {
			this.video2.destroy();
			this.video2.removeVideoElement();
			this.video2 = null;
		}
		if (this.video3) {
			this.video3.destroy();
			this.video3.removeVideoElement();
			this.video3 = null;
		}

	},


	convertTimeinMinandSectoHrsMinsSecs: function (Hours1, Minutes1, Seconds1) {
		console.log("inside convert time", Hours1, Minutes1, Seconds1);

		const totalMinutes = Math.floor((parseInt(Seconds1) + parseInt(_this.timeInSeconds)) / 60) + (parseInt(Minutes1) + parseInt(_this.timeInMinutes));
		const Seconds2 = (parseInt(Seconds1) + parseInt(_this.timeInSeconds)) % 60;

		const Hours2 = Math.floor(totalMinutes / 60) + parseInt(Hours1);
		const Minutes2 = totalMinutes % 60;

		console.log("before adding");
		console.log("totalMinutes", totalMinutes);
		console.log("after adding");
		console.log("Seconds2", Seconds2);
		console.log("Hours2", Hours2);
		console.log("Minutes2", Minutes2)

		var save_assessment = {
			game_id: _this.game_id,
			totalLearningTimeinHrs: Hours2.toString(),
			totalLearningTimeinMins: Minutes2.toString(),
			totalLearningTimeinSecs: Seconds2.toString(),
		}
		console.log("save assessment", save_assessment);
		if (_this.userHasPlayed == 1) {
			BBplusplusdbDetails.updateRecordsUsingGameID(save_assessment);
		}

	}
};