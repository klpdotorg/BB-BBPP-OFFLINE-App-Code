Game.grade8Geometry=function(game){
	
};

Game.grade8Geometry.prototype={

	init:function()
	{
		_this = this;
		//console.log("sync telemetry"+navigator.connection.type);
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			console.log("sync telemetry"+navigator.connection.type);
			//absdsjsapi.syncTelemetryData();
		}
 
		document.addEventListener("online", _this.syncTelFunc, false);
	},
			
	syncTelFunc:function()
	{
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			console.log("sync telemetry"+navigator.connection.type);
			//absdsjsapi.syncTelemetryData();
		}
	},
	
	create:function(game){

		nativeApp.screenViewStringPass("Practice_activity_list","grade8Geometry");
		
		_this = this;

		this.game.input.enabled = false;

		grade8NumberSystemsSelected = false;
		grade8AlgebraSelected = false;
		// grade6RatioandProportionSelected = false;
		grade8GeometrySelected  = false;
		// grade6DecimalsSelected  = false;

		_this.tween = null;
		_this.tap = false;
		//adding bg, title to the scene.
		_this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'gameselectBg');
		
		_this.gradeBackBtn = _this.add.sprite(-5,3,'gradeSceneBackBtn');
		_this.gradeBackBtn.inputEnabled = true;
		_this.gradeBackBtn.input.useHandCursor = true;
		_this.gradeBackBtn.input.priorityID = 1;
		_this.gradeBackBtn.events.onInputDown.add(function(target){
			target.events.onInputDown.removeAll();
			//_this.cache.destroy();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
			grade6NumberSystemsSelected = false;
			_this.state.start('selectgrade8MicroConceptScreen',true,false);
		},_this);


		this.gameModeShareBtn = game.add.image(920,18,'shareIcon');
		this.gameModeShareBtn.anchor.setTo(0.5);
		this.gameModeShareBtn.scale.setTo(0.75);
		this.gameModeShareBtn.inputEnabled = true;
		this.gameModeShareBtn.input.useHandCursor = true;
		this.gameModeShareBtn.input.priorityID = 1;
		this.gameModeShareBtn.events.onInputDown.add(function()
		{
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			nativeApp.ShareApp();
		},this);
		
		
		_this.grade8ShapesGroup = _this.add.group();
		_this.grade8MensurationGroup = _this.add.group();
	
		_this.addgrade8ShapesTopic();
		_this.addgrade8MensurationTopic();

		_this.grade8ShapesGroup.x = 0;
		_this.grade8ShapesGroup.y = 0;
		
		_this.grade8MensurationGroup.x = 0;
		_this.grade8MensurationGroup.y = 300;

		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0x139487, 0);
		_this.graphicsBg.drawRect(0,0,960,4000);
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
		
		_this.graphicsBg.addChild(_this.grade8ShapesGroup);
		_this.graphicsBg.addChild(_this.grade8MensurationGroup);
		
		_this.swipeUpFlag = true;
		_this.swipeDownFlag = false;
		_this.page = document.getElementById("body"); 
		_this.mc = new Hammer(_this.page);
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:false });

			_this.mc.on("swipeleft", function () { 
				//console.log('swipeleft');
			}); 
          
           _this.mc.on("swiperight", function () { 
				//console.log('swiperight');
			});
			
			_this.mc.on("swipeup", function (v) { 
			
					_this.tween = game.add.tween(_this.graphicsBg);
					_this.tween.to({ y: _this.graphicsBg.y-(v.distance*(v.overallVelocity*2/-1))}, 0, 'Linear', true, 0);
					_this.tween.onComplete.add(function(){
					//	swipeDownFlag = true;
						_this.tween = null;
						if(_this.graphicsBg.y<=-1570)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -1570;
						}
						
						//game.input.enabled = true;
					}, _this);
					_this.tween.onUpdateCallback(function(){
						_this.tap = false;
						if(_this.graphicsBg.y<=-1570)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -1570;
							_this.tween.stop();
						}
					},_this);
					
			//	}
			}); 
			
			_this.mc.on("swipedown", function (v) { 
		
					_this.tween = game.add.tween(_this.graphicsBg);
					_this.tween.to({ y: _this.graphicsBg.y+(v.distance*(v.overallVelocity*2)) }, 0, 'Linear', true, 0);
					_this.tween.onComplete.add(function(){
					//	swipeUpFlag = true;
						_this.tween = null;
						if(_this.graphicsBg.y>=0)
						{
						//	swipeDownFlag = false;
							_this.graphicsBg.y = 0;
						}
						//game.input.enabled = true;
					}, _this);
					
					_this.tween.onUpdateCallback(function(){
						tap = false;
						if(_this.graphicsBg.y>=0)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = 0;
							_this.tween.stop();
						}
					},_this);
			//	}
			});

			_this.input.onDown.add(function(){
				if(_this.tween)
				{
					if(_this.tween.isRunning)
					{
						_this.tween.stop();
						//_this.tween = null;
					}
				}

				_this.graphicsBg.inputEnabled = true;
				_this.graphicsBg.input.enableDrag();
				_this.graphicsBg.input.allowHorizontalDrag = false;

				_this.graphicsBg.events.onDragUpdate.add(function(){
					_this.tap = false;
					if(_this.tween)
					{
						if(_this.tween.isRunning)
						{
							_this.tween.stop();
					
						}
					}
					if(_this.graphicsBg.y>=10)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = 0;
						}
					else if(_this.graphicsBg.y<=-2070)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -2070;
						}
				},_this);

				_this.graphicsBg.events.onDragStop.add(function(e){
					_this.tap = false;
					//console.log(e);
					if(_this.tween)
					{
						//if(tween.isRunning)
						_this.tween.stop();
						//_this.tween = null;
					}

						if(_this.graphicsBg.y>=0)
						{
						//	swipeDownFlag = false;
							_this.graphicsBg.y = 0;
						}
						else if(_this.graphicsBg.y<=-2070)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -2070;
						}
					
				},_this);
				
			},_this);
		
		_this.input.onTap.add(function(){
			//console.log("tap");
			_this.tap = true;
			_this.time.events.add(300, function(){
				_this.time.events.removeAll();
				_this.tap = false;
				//console.log("tapfalse");
			},_this);
		},_this);

		if(gradeScreen)
		{
			_this.graphicsBg.y = -2070;

			var gameScreenTween = game.add.tween(_this.graphicsBg);
			gameScreenTween.to({ y: 0}, 2000, 'Linear', true, 0);
			gameScreenTween.onComplete.add(function(){
					this.game.input.enabled = true;	

					if(_this.mc)
					{
						_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:true });
					}

			}, _this);

			gradeScreen = false;
		}
		else
		{
			if(_this.mc)
			{
				_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:true });
			}
			this.game.input.enabled = true;
		}

	},
	
	addgrade8ShapesTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		_this.topicTitleText = this.add.text(185, 85, ' \n '+window.selctedLang.shapesTitle+' \n ');
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
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;

		_this.GMSS_1_Screen = _this.add.sprite(100,120,'GMSS_01_Screen');
		_this.bgGraphicFr1 = this.add.graphics(210,175);
		_this.bgGraphicFr1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicFr1.beginFill(0x493A19, 1);
		_this.bgGraphicFr1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphicFr1.boundsPadding = 0;
		_this.GMSS_1_ScreenTxt = this.add.text(225, 192, ' \n '+window.selctedLang.GMSS_01_Screen+' \n ');
		_this.GMSS_1_ScreenTxt.anchor.setTo(0.5);
		_this.GMSS_1_ScreenTxt.align = 'center';
		_this.GMSS_1_ScreenTxt.font = 'gradefont';
		_this.GMSS_1_ScreenTxt.fontSize = 20;
		_this.GMSS_1_ScreenTxt.fontWeight = 'normal';
		_this.GMSS_1_ScreenTxt.fill = 'white';
		_this.GMSS_1_ScreenTxt.wordWrap = true;
		_this.GMSS_1_ScreenTxt.wordWrapWidth = 500;
		_this.GMSS_1_Screen.inputEnabled = true;
		_this.GMSS_1_Screen.input.useHandCursor = true;
		_this.GMSS_1_Screen.name = "GMSS-1";
		_this.GMSS_1_Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_GMSS_01_G8',true,false);
				}
			},_this);
		},_this);

		_this.GMSS_2_Screen = _this.add.sprite(300,120,'GMSS_02_Screen');
		_this.bgGraphicNum2 = this.add.graphics(410,175);
		_this.bgGraphicNum2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicNum2.beginFill(0x493A19, 1);
		_this.bgGraphicNum2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphicNum2.boundsPadding = 0;
		_this.GMSS_2_ScreenTxt = this.add.text(425, 192, ' \n '+window.selctedLang.GMSS_02_Screen+' \n ');
		_this.GMSS_2_ScreenTxt.anchor.setTo(0.5);
		_this.GMSS_2_ScreenTxt.align = 'center';
		_this.GMSS_2_ScreenTxt.font = 'gradefont';
		_this.GMSS_2_ScreenTxt.fontSize = 20;
		_this.GMSS_2_ScreenTxt.fontWeight = 'normal';
		_this.GMSS_2_ScreenTxt.fill = 'white';
		_this.GMSS_2_ScreenTxt.wordWrap = true;
		_this.GMSS_2_ScreenTxt.wordWrapWidth = 500;
		_this.GMSS_2_Screen.inputEnabled = true;
		_this.GMSS_2_Screen.input.useHandCursor = true;
		_this.GMSS_2_Screen.name = "GMSS-2";
		_this.GMSS_2_Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_GMSS_02_G8',true,false);
				}
			},_this);
		},_this);

		_this.GMSS_3_Screen = _this.add.sprite(500,120,'GMSS_03_Screen');
		_this.bgGraphicNum3 = this.add.graphics(610,175);
		_this.bgGraphicNum3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicNum3.beginFill(0x493A19, 1);
		_this.bgGraphicNum3.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphicNum3.boundsPadding = 0;
		_this.GMSS_3_ScreenTxt = this.add.text(625, 192, ' \n '+window.selctedLang.GMSS_03_Screen+' \n ');
		_this.GMSS_3_ScreenTxt.anchor.setTo(0.5);
		_this.GMSS_3_ScreenTxt.align = 'center';
		_this.GMSS_3_ScreenTxt.font = 'gradefont';
		_this.GMSS_3_ScreenTxt.fontSize = 20;
		_this.GMSS_3_ScreenTxt.fontWeight = 'normal';
		_this.GMSS_3_ScreenTxt.fill = 'white';
		_this.GMSS_3_ScreenTxt.wordWrap = true;
		_this.GMSS_3_ScreenTxt.wordWrapWidth = 500;
		_this.GMSS_3_Screen.inputEnabled = true;
		_this.GMSS_3_Screen.name = "GMSS-3";
		_this.GMSS_3_Screen.input.useHandCursor = true;
		_this.GMSS_3_Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				if(_this.tap)
				{					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_GMSS_03_G8',true,false);
				}
			},_this);
		},_this);

		if(window.languageSelected=="Hindi")
		{
			//_this.topicTitleText.frame = 1;
			//_this.fractions1_1AScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			//_this.topicTitleText.frame = 2;
			//_this.fractions1_1AScreenTxt.frame = 2;
		}
		else
		{
			//_this.topicTitleText.frame = 0;
			//_this.fractions1_1AScreenTxt.frame = 0;
		}
		
		_this.grade8ShapesGroup.add(_this.topicTxtBg);
		_this.grade8ShapesGroup.add(_this.topicTitleText);
		_this.grade8ShapesGroup.add(_this.topicBg);
		_this.grade8ShapesGroup.add(_this.GMSS_1_Screen);
		_this.grade8ShapesGroup.add(_this.bgGraphicFr1);
		_this.grade8ShapesGroup.add(_this.GMSS_1_ScreenTxt);
		_this.grade8ShapesGroup.add(_this.GMSS_2_Screen);
		_this.grade8ShapesGroup.add(_this.bgGraphicNum2);
		_this.grade8ShapesGroup.add(_this.GMSS_2_ScreenTxt);
		_this.grade8ShapesGroup.add(_this.GMSS_3_Screen);
		_this.grade8ShapesGroup.add(_this.bgGraphicNum3);
		_this.grade8ShapesGroup.add(_this.GMSS_3_ScreenTxt);
		
	},
	
	addgrade8MensurationTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 2);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,210,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		_this.topicTitleText = this.add.text(205, 85, ' \n '+window.selctedLang.mensurationTitle+' \n ');
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
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,400,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.GMM_01_Screen = _this.add.sprite(100,120,'GMM_1_Screen');
		_this.bgGraphicMM1 = this.add.graphics(210,175);
		_this.bgGraphicMM1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicMM1.beginFill(0x493A19, 1);
		_this.bgGraphicMM1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphicMM1.boundsPadding = 0;
		_this.GMM_01_ScreenTxt = this.add.text(225, 192, ' \n '+window.selctedLang.GMM_1_Screen+' \n ');
		_this.GMM_01_ScreenTxt.anchor.setTo(0.5);
		_this.GMM_01_ScreenTxt.align = 'center';
		_this.GMM_01_ScreenTxt.font = 'gradefont';
		_this.GMM_01_ScreenTxt.fontSize = 20;
		_this.GMM_01_ScreenTxt.fontWeight = 'normal';
		_this.GMM_01_ScreenTxt.fill = 'white';
		_this.GMM_01_ScreenTxt.wordWrap = true;
		_this.GMM_01_ScreenTxt.wordWrapWidth = 500;
		_this.GMM_01_Screen.inputEnabled = true;
		_this.GMM_01_Screen.input.useHandCursor = true;
		_this.GMM_01_Screen.name = "INT-1";
		_this.GMM_01_Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_GMM_01_G8',true,false);
				}
			},_this);
		},_this);

        _this.GMM_02_Screen = _this.add.sprite(300,120,'GMM_2_Screen');
		_this.bgGraphicMM2 = this.add.graphics(410,175);
		_this.bgGraphicMM2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicMM2.beginFill(0x493A19, 1);
		_this.bgGraphicMM2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphicMM2.boundsPadding = 0;
		_this.GMM_02_ScreenTxt = this.add.text(425, 192, ' \n '+window.selctedLang.GMM_2_Screen+' \n ');
		_this.GMM_02_ScreenTxt.anchor.setTo(0.5);
		_this.GMM_02_ScreenTxt.align = 'center';
		_this.GMM_02_ScreenTxt.font = 'gradefont'; 
		_this.GMM_02_ScreenTxt.fontSize = 20;
		_this.GMM_02_ScreenTxt.fontWeight = 'normal';
		_this.GMM_02_ScreenTxt.fill = 'white';
		_this.GMM_02_ScreenTxt.wordWrap = true;
		_this.GMM_02_ScreenTxt.wordWrapWidth = 500;
		_this.GMM_02_Screen.inputEnabled = true;
		_this.GMM_02_Screen.input.useHandCursor = true;
		_this.GMM_02_Screen.name = "INT-1";
		_this.GMM_02_Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_GMM_02_G8',true,false);
				}
			},_this);
		},_this);

        _this.GMM_03_Screen = _this.add.sprite(500,120,'GMM_3_Screen');
		_this.bgGraphicMM3 = this.add.graphics(610,175);
		_this.bgGraphicMM3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicMM3.beginFill(0x493A19, 1);
		_this.bgGraphicMM3.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphicMM3.boundsPadding = 0;
		_this.GMM_03_ScreenTxt = this.add.text(625, 192, ' \n '+window.selctedLang.GMM_3_Screen+' \n ');
		_this.GMM_03_ScreenTxt.anchor.setTo(0.5);
		_this.GMM_03_ScreenTxt.align = 'center';
		_this.GMM_03_ScreenTxt.font = 'gradefont';
		_this.GMM_03_ScreenTxt.fontSize = 20;
		_this.GMM_03_ScreenTxt.fontWeight = 'normal';
		_this.GMM_03_ScreenTxt.fill = 'white';
		_this.GMM_03_ScreenTxt.wordWrap = true;
		_this.GMM_03_ScreenTxt.wordWrapWidth = 500;
		_this.GMM_03_Screen.inputEnabled = true;
		_this.GMM_03_Screen.input.useHandCursor = true;
		_this.GMM_03_Screen.name = "INT-1";
		_this.GMM_03_Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_GMM_03_G8',true,false);
				}
			},_this);
		},_this);

        _this.GMM_04_Screen = _this.add.sprite(700,120,'GMM_4_Screen');
		_this.bgGraphicMM4 = this.add.graphics(810,175);
		_this.bgGraphicMM4.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicMM4.beginFill(0x493A19, 1);
		_this.bgGraphicMM4.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphicMM4.boundsPadding = 0;
		_this.GMM_04_ScreenTxt = this.add.text(825, 192, ' \n '+window.selctedLang.GMM_4_Screen+' \n ');
		_this.GMM_04_ScreenTxt.anchor.setTo(0.5);
		_this.GMM_04_ScreenTxt.align = 'center';
		_this.GMM_04_ScreenTxt.font = 'gradefont';
		_this.GMM_04_ScreenTxt.fontSize = 20;
		_this.GMM_04_ScreenTxt.fontWeight = 'normal';
		_this.GMM_04_ScreenTxt.fill = 'white';
		_this.GMM_04_ScreenTxt.wordWrap = true;
		_this.GMM_04_ScreenTxt.wordWrapWidth = 500;
		_this.GMM_04_Screen.inputEnabled = true;
		_this.GMM_04_Screen.input.useHandCursor = true;
		_this.GMM_04_Screen.name = "INT-1";
		_this.GMM_04_Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_GMM_04_G8',true,false);
				}
			},_this);
		},_this);

        _this.GMM_05_Screen = _this.add.sprite(100,320,'GMM_5_Screen');
		_this.bgGraphicMM5 = this.add.graphics(210,375);
		_this.bgGraphicMM5.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicMM5.beginFill(0x493A19, 1);
		_this.bgGraphicMM5.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphicMM5.boundsPadding = 0;
		_this.GMM_05_ScreenTxt = this.add.text(225, 392, ' \n '+window.selctedLang.GMM_5_Screen+' \n ');
		_this.GMM_05_ScreenTxt.anchor.setTo(0.5);
		_this.GMM_05_ScreenTxt.align = 'center';
		_this.GMM_05_ScreenTxt.font = 'gradefont';
		_this.GMM_05_ScreenTxt.fontSize = 20;
		_this.GMM_05_ScreenTxt.fontWeight = 'normal';
		_this.GMM_05_ScreenTxt.fill = 'white';
		_this.GMM_05_ScreenTxt.wordWrap = true;
		_this.GMM_05_ScreenTxt.wordWrapWidth = 500;
		_this.GMM_05_Screen.inputEnabled = true;
		_this.GMM_05_Screen.input.useHandCursor = true;
		_this.GMM_05_Screen.name = "INT-1";
		_this.GMM_05_Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_GMM_05_G8',true,false);
				}
			},_this);
		},_this);
		
		if(window.languageSelected=="Hindi")
		{
			
		}
		else if(window.languageSelected=="Kannada")
		{
			
		}
		else
		{
			
		}
		
		_this.grade8MensurationGroup.add(_this.topicTxtBg);
		_this.grade8MensurationGroup.add(_this.topicTitleText);
		_this.grade8MensurationGroup.add(_this.topicBg);

		_this.grade8MensurationGroup.add(_this.GMM_01_Screen);
		_this.grade8MensurationGroup.add(_this.bgGraphicMM1);
		_this.grade8MensurationGroup.add(_this.GMM_01_ScreenTxt);

        _this.grade8MensurationGroup.add(_this.GMM_02_Screen);
		_this.grade8MensurationGroup.add(_this.bgGraphicMM2);
		_this.grade8MensurationGroup.add(_this.GMM_02_ScreenTxt);

        _this.grade8MensurationGroup.add(_this.GMM_03_Screen);
		_this.grade8MensurationGroup.add(_this.bgGraphicMM3);
		_this.grade8MensurationGroup.add(_this.GMM_03_ScreenTxt);

        _this.grade8MensurationGroup.add(_this.GMM_04_Screen);
		_this.grade8MensurationGroup.add(_this.bgGraphicMM4);
		_this.grade8MensurationGroup.add(_this.GMM_04_ScreenTxt);

        _this.grade8MensurationGroup.add(_this.GMM_05_Screen);
		_this.grade8MensurationGroup.add(_this.bgGraphicMM5);
		_this.grade8MensurationGroup.add(_this.GMM_05_ScreenTxt);

	},	
	
};