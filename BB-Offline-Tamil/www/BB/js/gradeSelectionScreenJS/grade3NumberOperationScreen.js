Game.grade3NumberOperation=function(game){
	
};

Game.grade3NumberOperation.prototype={

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

		nativeApp.screenViewStringPass("Practice_activity_list","grade3Measurement");
		
		_this = this;

		this.game.input.enabled = false;

		grade1ShapesSenseSelected = false;
		 grade2ShapesSenseSelected = false;
		 grade3ShapesSenseSelected = false;
		 grade4ShapesSenseSelected = false;
		 grade5ShapesSenseSelected = false;

		grade1NumberSenseSelected = false;
		 grade1NumberOperationSelected = false;
		 grade1MeasurementSelected = false;

		 grade2NumberSenseSelected = false;
		 grade2NumberOperationSelected = false;
		 grade2MeasurementSelected = false;

		 grade3NumberSenseSelected = false;
		 grade3NumberOperationSelected = true;
		 grade3MeasurementSelected = false;

		 grade4MeasurementSelected = false;
		 grade4NumberSenseSelected = false;
		 grade5NumberSenseSelected = false;

		this.video = null;
		this.video1 = null;
		this.video2 = null;
		this.video3 = null;
		this.video4 = null;
		this.video5 = null;
		this.video6 = null;
		
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
			grade3NumberOperationSelected = false;
			_this.state.start('gradeSelectionScreen',true,false);
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
        			//if(appConfig.cordova && !appConfig.browser)
        			//{
        				nativeApp.ShareApp();
        			//}

        		},this);
		
		
		_this.grade3FractionGroup = _this.add.group();
		_this.grade3LengthGroup = _this.add.group();
		_this.grade3WeightGroup = _this.add.group();
		_this.grade3TimeGroup = _this.add.group();

		_this.sequenceGroup = _this.add.group();
		_this.PlaceValueGroup = _this.add.group();
		_this.ComparisionOfNumbersGroup = _this.add.group();
		_this.additionwithPlaceValueGroup = _this.add.group();
		_this.SubtractionWithPlaceValueGroup = _this.add.group();
		_this.MultiplicationTableGroup = _this.add.group();
		//_this.multiplicationGridGroup = _this.add.group();
		//_this.multiplicationGridGroup2 = _this.add.group();
		_this.DivisionPart2Group = _this.add.group();
		
		/*_this.addGrade3FractionTopic();
		_this.addGrade3LengthTopic();
		_this.addGrade3WeightTopic();
		_this.addGrade3TimeTopic();

		_this.Sequence();
		_this.PlaceValue();
		_this.ComparisionOfNumbers();
		_this.additionwithPlaceValue();
		_this.SubstractionWithPlaceValue();
		_this.MultiplicationTable();
		//_this.multiplicationGrid();
		//_this.multiplicationGrid2();
		_this.DivisionPart2();*/

		_this.addGrade3LengthTopic();
		_this.addGrade3WeightTopic();
		_this.addGrade3TimeTopic();



		/*_this.grade3FractionGroup.x = 0;
		_this.grade3FractionGroup.y = 0;
		
		_this.grade3LengthGroup.x = 0;
		_this.grade3LengthGroup.y = 250;
		
		_this.grade3WeightGroup.x = 0;
		_this.grade3WeightGroup.y = 500;

		_this.grade3TimeGroup.x = 0;
		_this.grade3TimeGroup.y = 950;

		_this.sequenceGroup.x = 0;
		_this.sequenceGroup.y = 1200;

		_this.PlaceValueGroup.x = 0;
		_this.PlaceValueGroup.y = 2050;

		_this.ComparisionOfNumbersGroup.x = 0;
		_this.ComparisionOfNumbersGroup.y = 2300;

		_this.additionwithPlaceValueGroup.x = 0;
		_this.additionwithPlaceValueGroup.y = 2550;
		//_this.additionwithPlaceValueGroup.y = 1650;

		_this.SubtractionWithPlaceValueGroup.x = 0;
		_this.SubtractionWithPlaceValueGroup.y = 2800;
		//_this.SubtractionWithPlaceValueGroup.y = 1900;

		_this.MultiplicationTableGroup.x = 0;
		_this.MultiplicationTableGroup.y = 3050;

		//_this.multiplicationGridGroup.x = 0;
		//_this.multiplicationGridGroup.y = 2900;

		//_this.multiplicationGridGroup2.x = 0;
		//_this.multiplicationGridGroup2.y = 3150;

		_this.DivisionPart2Group.x = 0;
		_this.DivisionPart2Group.y = 470;*/

		_this.grade3LengthGroup.x = 0;
		_this.grade3LengthGroup.y = 0;
		
		_this.grade3WeightGroup.x = 0;
		_this.grade3WeightGroup.y = 250;

		_this.grade3TimeGroup.x = 0;
		_this.grade3TimeGroup.y = 700;
		
		
		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0x139487, 0);
		_this.graphicsBg.drawRect(0,0,960,470);
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
		
	
		_this.graphicsBg.addChild(_this.grade3FractionGroup);
		_this.graphicsBg.addChild(_this.grade3LengthGroup);
		_this.graphicsBg.addChild(_this.grade3WeightGroup);
		_this.graphicsBg.addChild(_this.grade3TimeGroup);
		_this.graphicsBg.addChild(_this.sequenceGroup);
		_this.graphicsBg.addChild(_this.PlaceValueGroup);
		_this.graphicsBg.addChild(_this.ComparisionOfNumbersGroup);
		_this.graphicsBg.addChild(_this.additionwithPlaceValueGroup);
		_this.graphicsBg.addChild(_this.SubtractionWithPlaceValueGroup);
		_this.graphicsBg.addChild(_this.MultiplicationTableGroup);
		//_this.graphicsBg.addChild(_this.multiplicationGridGroup);
		//_this.graphicsBg.addChild(_this.multiplicationGridGroup2);
		_this.graphicsBg.addChild(_this.DivisionPart2Group);
		
		
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
				//console.log(v);
				
				
			//	if(swipeUpFlag)
			//	{
					//game.input.enabled = false;

					_this.tween = game.add.tween(_this.graphicsBg);
					_this.tween.to({ y: _this.graphicsBg.y-(v.distance*(v.overallVelocity*2/-1))}, 0, 'Linear', true, 0);
					_this.tween.onComplete.add(function(){
					//	swipeDownFlag = true;
						_this.tween = null;
						if(_this.graphicsBg.y<=-470)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -470;
						}
						
						//game.input.enabled = true;
					}, _this);
					_this.tween.onUpdateCallback(function(){
						_this.tap = false;
						if(_this.graphicsBg.y<=-470)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -470;
							_this.tween.stop();
							//_this.tween = null;
							//game.input.enabled = true;
						}
					},_this);
					
			//	}
			}); 
			
			_this.mc.on("swipedown", function (v) { 
				
			//	if(swipeDownFlag)
			//	{
					//game.input.enabled = false;
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
							//_this.tween = null;
							//game.input.enabled = true;
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
							//_this.tween = null;
						}
					}
					if(_this.graphicsBg.y>=10)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = 0;
							//tween.stop();
							//game.input.enabled = true;
						}
					else if(_this.graphicsBg.y<=-470)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -470;
							//tween.stop();
							//game.input.enabled = true;
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
						else if(_this.graphicsBg.y<=-470)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -470;
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
			_this.graphicsBg.y = -470;

			var gameScreenTween = game.add.tween(_this.graphicsBg);
			gameScreenTween.to({ y: 0}, 0, 'Linear', true, 0);
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
	
	
	addGrade3FractionTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(215,83,'fractionsTitleTxt');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(185, 85, ' \n '+window.selctedLang.fractionTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.fractions1_1BScreen = _this.add.sprite(100,120,'fractions1_1Screen');
		//_this.fractions1_1BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1B');
		//_this.fractions1_1BScreenTxt.anchor.setTo(0.5);

		_this.fractions1_1BScreenTxt = this.add.text(175, 255, ' \n '+window.selctedLang.fraction1_1BDesc+' \n ');
		_this.fractions1_1BScreenTxt.anchor.setTo(0.5);
		_this.fractions1_1BScreenTxt.align = 'center';
		
				
		_this.fractions1_1BScreenTxt.font = 'gradefont';
		_this.fractions1_1BScreenTxt.fontSize = 20;
		_this.fractions1_1BScreenTxt.fontWeight = 'normal';
		_this.fractions1_1BScreenTxt.fill = 'white';

		_this.fractions1_1BScreenTxt.wordWrap = true;
		_this.fractions1_1BScreenTxt.wordWrapWidth = 500;
		//_this.fractions1_1BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_1BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_1BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_1BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.fractions1_1BScreen.inputEnabled = true;
		_this.fractions1_1BScreen.input.useHandCursor = true;
		_this.fractions1_1BScreen.name = "Fractions 1.1 B";
		_this.fractions1_1BScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade1_1Blevel1',true,false);
				}
			},_this);
			
		},_this);


		_this.fractions1_2AScreen = _this.add.sprite(300,120,'fractions1_2AScreen');
		//_this.fractions1_2AScreenTxt = _this.add.sprite(375,250,'pinwheel1_2A');
		//_this.fractions1_2AScreenTxt.anchor.setTo(0.5);

		_this.fractions1_2AScreenTxt = this.add.text(375, 255, ' \n '+window.selctedLang.fraction1_2ADesc+' \n ');
		_this.fractions1_2AScreenTxt.anchor.setTo(0.5);
		_this.fractions1_2AScreenTxt.align = 'center';
		
				
		_this.fractions1_2AScreenTxt.font = 'gradefont';
		_this.fractions1_2AScreenTxt.fontSize = 20;
		_this.fractions1_2AScreenTxt.fontWeight = 'normal';
		_this.fractions1_2AScreenTxt.fill = 'white';

		_this.fractions1_2AScreenTxt.wordWrap = true;
		_this.fractions1_2AScreenTxt.wordWrapWidth = 500;
		//_this.fractions1_2AScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2AScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2AScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.fractions1_2AScreen.inputEnabled = true;
		_this.fractions1_2AScreen.input.useHandCursor = true;
		_this.fractions1_2AScreen.name = "Fractions 1.2 A";
		_this.fractions1_2AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade1_2Alevel1',true,false);
				}
			},_this);
			
		},_this);

		_this.fractions1_2BScreen = _this.add.sprite(500,120,'fractions1_2BScreen');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(575,250,'pinwheel1_2B');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.fractions1_2BScreenTxt = this.add.text(575, 255, ' \n '+window.selctedLang.fraction1_2BDesc+' \n ');
		_this.fractions1_2BScreenTxt.anchor.setTo(0.5);
		_this.fractions1_2BScreenTxt.align = 'center';
		
				
		_this.fractions1_2BScreenTxt.font = 'gradefont';
		_this.fractions1_2BScreenTxt.fontSize = 20;
		_this.fractions1_2BScreenTxt.fontWeight = 'normal';
		_this.fractions1_2BScreenTxt.fill = 'white';

		_this.fractions1_2BScreenTxt.wordWrap = true;
		_this.fractions1_2BScreenTxt.wordWrapWidth = 500;
		//_this.fractions1_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.fractions1_2BScreen.inputEnabled = true;
		_this.fractions1_2BScreen.input.useHandCursor = true;
		_this.fractions1_2BScreen.name = "Fractions 1.2 B";
		_this.fractions1_2BScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade1_2Blevel1',true,false);
				}
			},_this);
			
		},_this);

		_this.fractions1_2CScreen = _this.add.sprite(700,120,'fractions1_2CScreen');
		//_this.fractions1_2CScreenTxt = _this.add.sprite(775,250,'pinwheel1_2C');
		//_this.fractions1_2CScreenTxt.anchor.setTo(0.5);

		_this.fractions1_2CScreenTxt = this.add.text(775, 255, ' \n '+window.selctedLang.fraction1_2CDesc+' \n ');
		_this.fractions1_2CScreenTxt.anchor.setTo(0.5);
		_this.fractions1_2CScreenTxt.align = 'center';
		
				
		_this.fractions1_2CScreenTxt.font = 'gradefont';
		_this.fractions1_2CScreenTxt.fontSize = 20;
		_this.fractions1_2CScreenTxt.fontWeight = 'normal';
		_this.fractions1_2CScreenTxt.fill = 'white';

		_this.fractions1_2CScreenTxt.wordWrap = true;
		_this.fractions1_2CScreenTxt.wordWrapWidth = 500;
		//_this.fractions1_2CScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2CScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2CScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2CScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.fractions1_2CScreen.inputEnabled = true;
		_this.fractions1_2CScreen.input.useHandCursor = true;
		_this.fractions1_2CScreen.name = "Fractions 1.2 C";
		_this.fractions1_2CScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade1_2Clevel1',true,false);
				}
			},_this);
			
		},_this);


		/*if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.fractions1_1BScreenTxt.frame = 1;
			_this.fractions1_2AScreenTxt.frame = 1;
			_this.fractions1_2BScreenTxt.frame = 1;
			_this.fractions1_2CScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.fractions1_1BScreenTxt.frame = 2;
			_this.fractions1_2AScreenTxt.frame = 2;
			_this.fractions1_2BScreenTxt.frame = 2;
			_this.fractions1_2CScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.fractions1_1BScreenTxt.frame = 0;
			_this.fractions1_2AScreenTxt.frame = 0;
			_this.fractions1_2BScreenTxt.frame = 0;
			_this.fractions1_2CScreenTxt.frame = 0;
		}*/
		
		
		
		
		_this.grade3FractionGroup.add(_this.topicTxtBg);
		_this.grade3FractionGroup.add(_this.topicTitleText);
		_this.grade3FractionGroup.add(_this.topicBg);
		_this.grade3FractionGroup.add(_this.fractions1_1BScreen);
		_this.grade3FractionGroup.add(_this.fractions1_1BScreenTxt);
		_this.grade3FractionGroup.add(_this.fractions1_2AScreen);
		_this.grade3FractionGroup.add(_this.fractions1_2AScreenTxt);
		_this.grade3FractionGroup.add(_this.fractions1_2BScreen);
		_this.grade3FractionGroup.add(_this.fractions1_2BScreenTxt);
		_this.grade3FractionGroup.add(_this.fractions1_2CScreen);
		_this.grade3FractionGroup.add(_this.fractions1_2CScreenTxt);
		
	},
	
	addGrade3LengthTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		//_this.topicTitleText = _this.add.sprite(215,83,'lengthTitleTxt');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(185, 85, ' \n '+window.selctedLang.lengthTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.length2_4AScreen = _this.add.sprite(100,120,'length2_4AScreen');
		//_this.length2_4AScreenTxt = _this.add.sprite(175, 250, 'length2_4A');
		//_this.length2_4AScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.length2_4AScreenTxt = this.add.text(225, 192, ' \n 1 \n ');
		_this.length2_4AScreenTxt.anchor.setTo(0.5);
		_this.length2_4AScreenTxt.align = 'center';
		
				
		_this.length2_4AScreenTxt.font = 'gradefont';
		_this.length2_4AScreenTxt.fontSize = 20;
		_this.length2_4AScreenTxt.fontWeight = 'normal';
		_this.length2_4AScreenTxt.fill = 'white';

		_this.length2_4AScreenTxt.wordWrap = true;
		_this.length2_4AScreenTxt.wordWrapWidth = 500;
		//_this.length2_4AScreenTxt.setTextBounds(0,0,500,500);
		//_this.length2_4AScreenTxt.padding.set(50, 50);
		
		
		//_this.length2_4AScreenTxt.useAdvancedWrap  = true;
		

		//_this.length2_4AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.length2_4AScreen.inputEnabled = true;
		_this.length2_4AScreen.name = "Length 2.4 A";
		_this.length2_4AScreen.input.useHandCursor = true;
		_this.length2_4AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_4Alevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.length2_4BScreen = _this.add.sprite(300,120,'length2_4BScreen');
		//_this.length2_4BScreenTxt = _this.add.sprite(375, 250, 'length2_4B');
		//_this.length2_4BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic2 = this.add.graphics(410,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;

		_this.length2_4BScreenTxt = this.add.text(425, 192, ' \n 2 \n ');
		_this.length2_4BScreenTxt.anchor.setTo(0.5);
		_this.length2_4BScreenTxt.align = 'center';
		
				
		_this.length2_4BScreenTxt.font = 'gradefont';
		_this.length2_4BScreenTxt.fontSize = 20;
		_this.length2_4BScreenTxt.fontWeight = 'normal';
		_this.length2_4BScreenTxt.fill = 'white';

		_this.length2_4BScreenTxt.wordWrap = true;
		_this.length2_4BScreenTxt.wordWrapWidth = 500;
		//_this.length2_4BScreenTxt.setTextBounds(0,0,500,500);
		//_this.length2_4BScreenTxt.padding.set(50, 50);
		
		
		//_this.length2_4BScreenTxt.useAdvancedWrap  = true;
		

		//_this.length2_4BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.length2_4BScreen.inputEnabled = true;
		_this.length2_4BScreen.input.useHandCursor = true;
		_this.length2_4BScreen.name = "Length 2.1 B";
		_this.length2_4BScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_4Blevel1',true,false);
				}
			},_this);
		},_this);
		
		
		/*if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.length2_4AScreenTxt.frame = 1;
			_this.length2_4BScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.length2_4AScreenTxt.frame = 2;
			_this.length2_4BScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.length2_4AScreenTxt.frame = 0;
			_this.length2_4BScreenTxt.frame = 0;
		}*/
		
		
		
		_this.grade3LengthGroup.add(_this.topicTxtBg);
		_this.grade3LengthGroup.add(_this.topicTitleText);
		_this.grade3LengthGroup.add(_this.topicBg);

		_this.grade3LengthGroup.add(_this.length2_4AScreen);
		_this.grade3LengthGroup.add(_this.bgGraphic1);
		_this.grade3LengthGroup.add(_this.length2_4AScreenTxt);

		_this.grade3LengthGroup.add(_this.length2_4BScreen);
		_this.grade3LengthGroup.add(_this.bgGraphic2);
		_this.grade3LengthGroup.add(_this.length2_4BScreenTxt);
		
		
		
	},
	
	addGrade3WeightTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		//_this.topicTitleText = _this.add.sprite(200,83,'weightTitleTxt');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(185, 85, ' \n '+window.selctedLang.weightTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,400,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.weight3_2BScreen = _this.add.sprite(100,120,'weight3_2BScreen');
		//_this.weight3_2BScreenTxt = _this.add.sprite(185, 255, 'weight3_2B');
		//_this.weight3_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.weight3_2BScreenTxt = this.add.text(225, 192, ' \n 1 \n ');
		_this.weight3_2BScreenTxt.anchor.setTo(0.5);
		_this.weight3_2BScreenTxt.align = 'center';
		
				
		_this.weight3_2BScreenTxt.font = 'gradefont';
		_this.weight3_2BScreenTxt.fontSize = 20;
		_this.weight3_2BScreenTxt.fontWeight = 'normal';
		_this.weight3_2BScreenTxt.fill = 'white';

		_this.weight3_2BScreenTxt.wordWrap = true;
		_this.weight3_2BScreenTxt.wordWrapWidth = 500;
		//_this.weight3_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.weight3_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.weight3_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.weight3_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);


		
		_this.weight3_2BScreen.inputEnabled = true;
		_this.weight3_2BScreen.input.useHandCursor = true;
		_this.weight3_2BScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_2Blevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.weight3_2CScreen = _this.add.sprite(300,120,'weight3_2CScreen');
		//_this.weight3_2CScreenTxt = _this.add.sprite(385, 255, 'weight3_2C');
		//_this.weight3_2CScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic2 = this.add.graphics(410,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;

		_this.weight3_2CScreenTxt = this.add.text(425, 192, ' \n 2 \n ');
		_this.weight3_2CScreenTxt.anchor.setTo(0.5);
		_this.weight3_2CScreenTxt.align = 'center';
		
				
		_this.weight3_2CScreenTxt.font = 'gradefont';
		_this.weight3_2CScreenTxt.fontSize = 20;
		_this.weight3_2CScreenTxt.fontWeight = 'normal';
		_this.weight3_2CScreenTxt.fill = 'white';

		_this.weight3_2CScreenTxt.wordWrap = true;
		_this.weight3_2CScreenTxt.wordWrapWidth = 500;
		//_this.weight3_2CScreenTxt.setTextBounds(0,0,500,500);
		//_this.weight3_2CScreenTxt.padding.set(50, 50);
		
		
		//_this.weight3_2CScreenTxt.useAdvancedWrap  = true;
		

		//_this.weight3_2CScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.weight3_2CScreen.inputEnabled = true;
		_this.weight3_2CScreen.input.useHandCursor = true;
		_this.weight3_2CScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_2Clevel1',true,false);
				}
			},_this);
		},_this);

		_this.weight3_2DScreen = _this.add.sprite(500,120,'weight3_2DScreen');
		//_this.weight3_2DScreenTxt = _this.add.sprite(575, 255, 'weight3_2D');
		//_this.weight3_2DScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic3 = this.add.graphics(610,175);
		_this.bgGraphic3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic3.beginFill(0x493A19, 1);
		_this.bgGraphic3.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic3.boundsPadding = 0;

		_this.weight3_2DScreenTxt = this.add.text(625, 192, ' \n 3 \n ');
		_this.weight3_2DScreenTxt.anchor.setTo(0.5);
		_this.weight3_2DScreenTxt.align = 'center';
		
				
		_this.weight3_2DScreenTxt.font = 'gradefont';
		_this.weight3_2DScreenTxt.fontSize = 20;
		_this.weight3_2DScreenTxt.fontWeight = 'normal';
		_this.weight3_2DScreenTxt.fill = 'white';

		_this.weight3_2DScreenTxt.wordWrap = true;
		_this.weight3_2DScreenTxt.wordWrapWidth = 500;
		//_this.weight3_2DScreenTxt.setTextBounds(0,0,500,500);
		//_this.weight3_2DScreenTxt.padding.set(50, 50);
		
		
		//_this.weight3_2DScreenTxt.useAdvancedWrap  = true;
		

		//_this.weight3_2DScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.weight3_2DScreen.inputEnabled = true;
		_this.weight3_2DScreen.input.useHandCursor = true;
		_this.weight3_2DScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_2Dlevel1',true,false);
				}
			},_this);
		},_this);

		_this.weight3_3AScreen = _this.add.sprite(700,120,'weight3_3AScreen');
		//_this.weight3_3AScreenTxt = _this.add.sprite(775, 255, 'weight3_3A');
		//_this.weight3_3AScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic4 = this.add.graphics(810,175);
		_this.bgGraphic4.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic4.beginFill(0x493A19, 1);
		_this.bgGraphic4.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic4.boundsPadding = 0;

		_this.weight3_3AScreenTxt = this.add.text(825, 192, ' \n 4 \n ');
		_this.weight3_3AScreenTxt.anchor.setTo(0.5);
		_this.weight3_3AScreenTxt.align = 'center';
		
				
		_this.weight3_3AScreenTxt.font = 'gradefont';
		_this.weight3_3AScreenTxt.fontSize = 20;
		_this.weight3_3AScreenTxt.fontWeight = 'normal';
		_this.weight3_3AScreenTxt.fill = 'white';

		_this.weight3_3AScreenTxt.wordWrap = true;
		_this.weight3_3AScreenTxt.wordWrapWidth = 500;
		//_this.weight3_3AScreenTxt.setTextBounds(0,0,500,500);
		//_this.weight3_3AScreenTxt.padding.set(50, 50);
		
		
		//_this.weight3_3AScreenTxt.useAdvancedWrap  = true;
		

		//_this.weight3_3AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.weight3_3AScreen.inputEnabled = true;
		_this.weight3_3AScreen.input.useHandCursor = true;
		_this.weight3_3AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_3Alevel1',true,false);
				}
			},_this);
		},_this);

		_this.weight3_3B1Screen = _this.add.sprite(100,320,'weight3_3B1Screen');
		//_this.weight3_3B1ScreenTxt = _this.add.sprite(175, 450, 'weight3_3B1');
		//_this.weight3_3B1ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic5 = this.add.graphics(210,375);
		_this.bgGraphic5.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic5.beginFill(0x493A19, 1);
		_this.bgGraphic5.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic5.boundsPadding = 0;

		_this.weight3_3B1ScreenTxt = this.add.text(225, 392, ' \n 5 \n ');
		_this.weight3_3B1ScreenTxt.anchor.setTo(0.5);
		_this.weight3_3B1ScreenTxt.align = 'center';
		
				
		_this.weight3_3B1ScreenTxt.font = 'gradefont';
		_this.weight3_3B1ScreenTxt.fontSize = 20;
		_this.weight3_3B1ScreenTxt.fontWeight = 'normal';
		_this.weight3_3B1ScreenTxt.fill = 'white';

		_this.weight3_3B1ScreenTxt.wordWrap = true;
		_this.weight3_3B1ScreenTxt.wordWrapWidth = 500;
		//_this.weight3_3B1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.weight3_3B1ScreenTxt.padding.set(50, 50);
		
		
		//_this.weight3_3B1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.weight3_3B1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);

		
		_this.weight3_3B1Screen.inputEnabled = true;
		_this.weight3_3B1Screen.input.useHandCursor = true;
		_this.weight3_3B1Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_3B1level1',true,false);
				}
			},_this);
		},_this);

		_this.weight3_3B2Screen = _this.add.sprite(300,320,'weight3_3B2Screen');
		//_this.weight3_3B2ScreenTxt = _this.add.sprite(375, 450, 'weight3_3B2');
		//_this.weight3_3B2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic6 = this.add.graphics(410,375);
		_this.bgGraphic6.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic6.beginFill(0x493A19, 1);
		_this.bgGraphic6.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic6.boundsPadding = 0;

		_this.weight3_3B2ScreenTxt = this.add.text(425, 392, ' \n 6 \n ');
		_this.weight3_3B2ScreenTxt.anchor.setTo(0.5);
		_this.weight3_3B2ScreenTxt.align = 'center';
		
				
		_this.weight3_3B2ScreenTxt.font = 'gradefont';
		_this.weight3_3B2ScreenTxt.fontSize = 20;
		_this.weight3_3B2ScreenTxt.fontWeight = 'normal';
		_this.weight3_3B2ScreenTxt.fill = 'white';

		_this.weight3_3B2ScreenTxt.wordWrap = true;
		_this.weight3_3B2ScreenTxt.wordWrapWidth = 500;
		//_this.weight3_3B2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.weight3_3B2ScreenTxt.padding.set(50, 50);
		
		
		//_this.weight3_3B2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.weight3_3B2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.weight3_3B2Screen.inputEnabled = true;
		_this.weight3_3B2Screen.input.useHandCursor = true;
		_this.weight3_3B2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_3B2level1',true,false);
				}
			},_this);
		},_this);


		/*if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.weight3_2BScreenTxt.frame = 1;
			_this.weight3_2CScreenTxt.frame = 1;
			_this.weight3_2DScreenTxt.frame = 1;
			_this.weight3_3AScreenTxt.frame = 1;
			_this.weight3_3B1ScreenTxt.frame = 1;
			_this.weight3_3B2ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.weight3_2BScreenTxt.frame = 2;
			_this.weight3_2CScreenTxt.frame = 2;
			_this.weight3_2DScreenTxt.frame = 2;
			_this.weight3_3AScreenTxt.frame = 2;
			_this.weight3_3B1ScreenTxt.frame = 2;
			_this.weight3_3B2ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.weight3_2BScreenTxt.frame = 0;
			_this.weight3_2CScreenTxt.frame = 0;
			_this.weight3_2DScreenTxt.frame = 0;
			_this.weight3_3AScreenTxt.frame = 0;
			_this.weight3_3B1ScreenTxt.frame = 0;
			_this.weight3_3B2ScreenTxt.frame = 0;
		}*/
		
		
		_this.grade3WeightGroup.add(_this.topicTxtBg);
		_this.grade3WeightGroup.add(_this.topicTitleText);
		_this.grade3WeightGroup.add(_this.topicBg);

		_this.grade3WeightGroup.add(_this.weight3_2BScreen);
		_this.grade3WeightGroup.add(_this.bgGraphic1);
		_this.grade3WeightGroup.add(_this.weight3_2BScreenTxt);

		_this.grade3WeightGroup.add(_this.weight3_2CScreen);
		_this.grade3WeightGroup.add(_this.bgGraphic2);
		_this.grade3WeightGroup.add(_this.weight3_2CScreenTxt);

		_this.grade3WeightGroup.add(_this.weight3_2DScreen);
		_this.grade3WeightGroup.add(_this.bgGraphic3);
		_this.grade3WeightGroup.add(_this.weight3_2DScreenTxt);

		_this.grade3WeightGroup.add(_this.weight3_3AScreen);
		_this.grade3WeightGroup.add(_this.bgGraphic4);
		_this.grade3WeightGroup.add(_this.weight3_3AScreenTxt);

		_this.grade3WeightGroup.add(_this.weight3_3B1Screen);
		_this.grade3WeightGroup.add(_this.bgGraphic5);
		_this.grade3WeightGroup.add(_this.weight3_3B1ScreenTxt);

		_this.grade3WeightGroup.add(_this.weight3_3B2Screen);
		_this.grade3WeightGroup.add(_this.bgGraphic6);
		_this.grade3WeightGroup.add(_this.weight3_3B2ScreenTxt);
		
	},

	addGrade3TimeTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		//_this.topicTitleText = _this.add.sprite(200,83,'timeTitleTxt');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(185, 85, ' \n '+window.selctedLang.timeTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.time7_1Screen = _this.add.sprite(100,120,'time7_1Screen');
		//_this.time7_1ScreenTxt = _this.add.sprite(175, 255, 'time7_1');
		//_this.time7_1ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.time7_1ScreenTxt = this.add.text(225, 192, ' \n 1 \n ');
		_this.time7_1ScreenTxt.anchor.setTo(0.5);
		_this.time7_1ScreenTxt.align = 'center';
		
				
		_this.time7_1ScreenTxt.font = 'gradefont';
		_this.time7_1ScreenTxt.fontSize = 20;
		_this.time7_1ScreenTxt.fontWeight = 'normal';
		_this.time7_1ScreenTxt.fill = 'white';

		_this.time7_1ScreenTxt.wordWrap = true;
		_this.time7_1ScreenTxt.wordWrapWidth = 500;
		//_this.time7_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.time7_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.time7_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.time7_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.time7_1Screen.inputEnabled = true;
		_this.time7_1Screen.input.useHandCursor = true;
		_this.time7_1Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade7_1level1',true,false);
				}
			},_this);
		},_this);
		
		_this.time7_2Screen = _this.add.sprite(300,120,'time7_2Screen');
		//_this.time7_2ScreenTxt = _this.add.sprite(375, 255, 'time7_2');
		//_this.time7_2ScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic2 = this.add.graphics(410,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;

		_this.time7_2ScreenTxt = this.add.text(425, 192, ' \n 2 \n ');
		_this.time7_2ScreenTxt.anchor.setTo(0.5);
		_this.time7_2ScreenTxt.align = 'center';
		
				
		_this.time7_2ScreenTxt.font = 'gradefont';
		_this.time7_2ScreenTxt.fontSize = 20;
		_this.time7_2ScreenTxt.fontWeight = 'normal';
		_this.time7_2ScreenTxt.fill = 'white';

		_this.time7_2ScreenTxt.wordWrap = true;
		_this.time7_2ScreenTxt.wordWrapWidth = 500;
		//_this.time7_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.time7_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.time7_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.time7_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);


		
		_this.time7_2Screen.inputEnabled = true;
		_this.time7_2Screen.input.useHandCursor = true;
		_this.time7_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade7_2level1',true,false);
				}
			},_this);
		},_this);
	
		


		/*if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.time7_1ScreenTxt.frame = 1;
			_this.time7_2ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.time7_1ScreenTxt.frame = 2;
			_this.time7_2ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.time7_1ScreenTxt.frame = 0;
			_this.time7_2ScreenTxt.frame = 0;
		}*/
		
		
		_this.grade3TimeGroup.add(_this.topicTxtBg);
		_this.grade3TimeGroup.add(_this.topicTitleText);
		_this.grade3TimeGroup.add(_this.topicBg);

		_this.grade3TimeGroup.add(_this.time7_1Screen);
		_this.grade3TimeGroup.add(_this.bgGraphic1);
		_this.grade3TimeGroup.add(_this.time7_1ScreenTxt);

		_this.grade3TimeGroup.add(_this.time7_2Screen);
		_this.grade3TimeGroup.add(_this.bgGraphic2);
		_this.grade3TimeGroup.add(_this.time7_2ScreenTxt);
		
	},

	Sequence:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,160,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(180,83,'sequence');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(182, 85, ' \n '+window.selctedLang.sequenceTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,800,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.Caterpillar2_1_3Screen  = _this.add.sprite(100,120,'unity2_1_1Screen');
		//_this.Caterpillar2_1_3ScreenTxt = _this.add.sprite(175,255,'Mr. Caterpillar 2.1.3');
		//_this.Caterpillar2_1_3ScreenTxt.anchor.setTo(0.5);

		_this.Caterpillar2_1_3ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.MrCaterpillar2_1_3+' \n ');
		_this.Caterpillar2_1_3ScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_1_3ScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_1_3ScreenTxt.font = 'gradefont';
		_this.Caterpillar2_1_3ScreenTxt.fontSize = 20;
		_this.Caterpillar2_1_3ScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_1_3ScreenTxt.fill = 'white';

		_this.Caterpillar2_1_3ScreenTxt.wordWrap = true;
		_this.Caterpillar2_1_3ScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_1_3ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_1_3ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_1_3ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_1_3ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_1_3Screen.inputEnabled = true;
		_this.Caterpillar2_1_3Screen.input.useHandCursor = true;
		_this.Caterpillar2_1_3Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_1_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_1",1);
					
					_this.state.start('unity2_1_3level1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_2_3Screen = _this.add.sprite(300,120,'unity2_2_1Screen');
		//_this.Caterpillar2_2_3ScreenTxt = _this.add.sprite(375,255,'Mr. Caterpillar 2.2.3');
		//_this.Caterpillar2_2_3ScreenTxt.anchor.setTo(0.5);
		
		_this.Caterpillar2_2_3ScreenTxt = this.add.text(375, 265, ' \n '+window.selctedLang.MrCaterpillar2_2_3+' \n ');
		_this.Caterpillar2_2_3ScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_2_3ScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_2_3ScreenTxt.font = 'gradefont';
		_this.Caterpillar2_2_3ScreenTxt.fontSize = 20;
		_this.Caterpillar2_2_3ScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_2_3ScreenTxt.fill = 'white';

		_this.Caterpillar2_2_3ScreenTxt.wordWrap = true;
		_this.Caterpillar2_2_3ScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_2_3ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_2_3ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_2_3ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_2_3ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);

		_this.Caterpillar2_2_3Screen.inputEnabled = true;
		_this.Caterpillar2_2_3Screen.input.useHandCursor = true;
		_this.Caterpillar2_2_3Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_2_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_2",1);

					_this.state.start('unity2_2_3level1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_3_3Screen = _this.add.sprite(500,120,'unity2_3_1Screen');
		//_this.Caterpillar2_3_3ScreenTxt = _this.add.sprite(575,255,'Mr. Caterpillar 2.3.3');
		//_this.Caterpillar2_3_3ScreenTxt.anchor.setTo(0.5);

		_this.Caterpillar2_3_3ScreenTxt = this.add.text(575, 265, ' \n '+window.selctedLang.MrCaterpillar2_3_3+' \n ');
		_this.Caterpillar2_3_3ScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_3_3ScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_3_3ScreenTxt.font = 'gradefont';
		_this.Caterpillar2_3_3ScreenTxt.fontSize = 20;
		_this.Caterpillar2_3_3ScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_3_3ScreenTxt.fill = 'white';

		_this.Caterpillar2_3_3ScreenTxt.wordWrap = true;
		_this.Caterpillar2_3_3ScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_3_3ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_3_3ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_3_3ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_3_3ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_3_3Screen.inputEnabled = true;
		_this.Caterpillar2_3_3Screen.input.useHandCursor = true;
		_this.Caterpillar2_3_3Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_3_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_3",1);
					
					_this.state.start('unity2_3_3level1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_4_3Screen = _this.add.sprite(700,120,'unity2_4_1Screen');
		//_this.Caterpillar2_4_3ScreenTxt = _this.add.sprite(775,255,'Mr. Caterpillar 2.4.3');
		//_this.Caterpillar2_4_3ScreenTxt.anchor.setTo(0.5);

		_this.Caterpillar2_4_3ScreenTxt = this.add.text(775, 265, ' \n '+window.selctedLang.MrCaterpillar2_4_3+' \n ');
		_this.Caterpillar2_4_3ScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_4_3ScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_4_3ScreenTxt.font = 'gradefont';
		_this.Caterpillar2_4_3ScreenTxt.fontSize = 20;
		_this.Caterpillar2_4_3ScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_4_3ScreenTxt.fill = 'white';

		_this.Caterpillar2_4_3ScreenTxt.wordWrap = true;
		_this.Caterpillar2_4_3ScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_4_3ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_4_3ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_4_3ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_4_3ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_4_3Screen.inputEnabled = true;
		_this.Caterpillar2_4_3Screen.input.useHandCursor = true;
		_this.Caterpillar2_4_3Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_4_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_4",1);
					
					_this.state.start('unity2_4_3level1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_5_2Screen = _this.add.sprite(100,320,'unity2_5_1');
		//_this.Caterpillar2_5_2ScreenTxt = _this.add.sprite(175,455,'Mr. Caterpillar 2.5.3');
		//_this.Caterpillar2_5_2ScreenTxt.anchor.setTo(0.5);

		_this.Caterpillar2_5_2ScreenTxt = this.add.text(175, 465, ' \n '+window.selctedLang.MrCaterpillar2_5_3+' \n ');
		_this.Caterpillar2_5_2ScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_5_2ScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_5_2ScreenTxt.font = 'gradefont';
		_this.Caterpillar2_5_2ScreenTxt.fontSize = 20;
		_this.Caterpillar2_5_2ScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_5_2ScreenTxt.fill = 'white';

		_this.Caterpillar2_5_2ScreenTxt.wordWrap = true;
		_this.Caterpillar2_5_2ScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_5_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_5_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_5_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_5_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_5_2Screen.inputEnabled = true;
		_this.Caterpillar2_5_2Screen.input.useHandCursor = true;
		_this.Caterpillar2_5_2Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_5_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_5",1);

					_this.state.start('unity2_5_3level1',true,false);
				}
			},_this);
			
		},_this);


		_this.NumberPuzzle2_6_3Screen = _this.add.sprite(300,320,'unity2_6_1');
		//_this.NumberPuzzle2_6_3ScreenTxt = _this.add.sprite(370,455,'Number Puzzle 2.6.3');
		//_this.NumberPuzzle2_6_3ScreenTxt.anchor.setTo(0.5);

		_this.NumberPuzzle2_6_3ScreenTxt = this.add.text(375, 465, ' \n '+window.selctedLang.NumberPuzzle2_6_3+' \n ');
		_this.NumberPuzzle2_6_3ScreenTxt.anchor.setTo(0.5);
		_this.NumberPuzzle2_6_3ScreenTxt.align = 'center';
		
				
		_this.NumberPuzzle2_6_3ScreenTxt.font = 'gradefont';
		_this.NumberPuzzle2_6_3ScreenTxt.fontSize = 20;
		_this.NumberPuzzle2_6_3ScreenTxt.fontWeight = 'normal';
		_this.NumberPuzzle2_6_3ScreenTxt.fill = 'white';

		_this.NumberPuzzle2_6_3ScreenTxt.wordWrap = true;
		_this.NumberPuzzle2_6_3ScreenTxt.wordWrapWidth = 500;
		//_this.NumberPuzzle2_6_3ScreenTxt.setTextBounds(0,0,500,500);
		//_this.NumberPuzzle2_6_3ScreenTxt.padding.set(50, 50);
		
		
		//_this.NumberPuzzle2_6_3ScreenTxt.useAdvancedWrap  = true;
		

		//_this.NumberPuzzle2_6_3ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.NumberPuzzle2_6_3Screen.inputEnabled = true;
		_this.NumberPuzzle2_6_3Screen.input.useHandCursor = true;
		_this.NumberPuzzle2_6_3Screen.name = "Fractions 1.1 A";
		_this.NumberPuzzle2_6_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_6",1);
					
					_this.state.start('unity2_6_3level1',true,false);
				}
			},_this);
			
		},_this);



		_this.Caterpillar2_1_3aScreen  = _this.add.sprite(500,320,'unity2_1_1aScreen');
		//_this.Caterpillar2_1_1ScreenTxt = _this.add.sprite(175,255,'Mr. Caterpillar 2.1.1');
		//_this.Caterpillar2_1_1ScreenTxt.anchor.setTo(0.5);

		_this.Caterpillar2_1_3aScreenTxt = this.add.text(575, 465, '7');
		_this.Caterpillar2_1_3aScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_1_3aScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_1_3aScreenTxt.font = 'gradefont';
		_this.Caterpillar2_1_3aScreenTxt.fontSize = 20;
		_this.Caterpillar2_1_3aScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_1_3aScreenTxt.fill = 'white';

		_this.Caterpillar2_1_3aScreenTxt.wordWrap = true;
		_this.Caterpillar2_1_3aScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_1_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_1_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_1_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_1_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_1_3aScreen.inputEnabled = true;
		_this.Caterpillar2_1_3aScreen.input.useHandCursor = true;
		_this.Caterpillar2_1_3aScreen.name = "Fractions 1.1 A";
		_this.Caterpillar2_1_3aScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_1",1);
					
					_this.state.start('unity2_1_3alevel1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_2_3aScreen = _this.add.sprite(700,320,'unity2_2_1aScreen');
		//_this.Caterpillar2_2_1ScreenTxt = _this.add.sprite(375,255,'Mr. Caterpillar 2.2.1');
		//_this.Caterpillar2_2_1ScreenTxt.anchor.setTo(0.5);

		_this.Caterpillar2_2_3aScreenTxt = this.add.text(775, 465, '8');
		_this.Caterpillar2_2_3aScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_2_3aScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_2_3aScreenTxt.font = 'gradefont';
		_this.Caterpillar2_2_3aScreenTxt.fontSize = 20;
		_this.Caterpillar2_2_3aScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_2_3aScreenTxt.fill = 'white';

		_this.Caterpillar2_2_3aScreenTxt.wordWrap = true;
		_this.Caterpillar2_2_3aScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_2_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_2_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_2_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_2_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_2_3aScreen.inputEnabled = true;
		_this.Caterpillar2_2_3aScreen.input.useHandCursor = true;
		_this.Caterpillar2_2_3aScreen.name = "Fractions 1.1 A";
		_this.Caterpillar2_2_3aScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_2",1);

					_this.state.start('unity2_2_3alevel1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_3_3aScreen = _this.add.sprite(100,520,'unity2_3_1aScreen');
		//_this.Caterpillar2_3_1ScreenTxt = _this.add.sprite(575,255,'Mr. Caterpillar 2.3.1');
		//_this.Caterpillar2_3_1ScreenTxt.anchor.setTo(0.5);

		_this.Caterpillar2_3_3aScreenTxt = this.add.text(175, 665, '9');
		_this.Caterpillar2_3_3aScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_3_3aScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_3_3aScreenTxt.font = 'gradefont';
		_this.Caterpillar2_3_3aScreenTxt.fontSize = 20;
		_this.Caterpillar2_3_3aScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_3_3aScreenTxt.fill = 'white';

		_this.Caterpillar2_3_3aScreenTxt.wordWrap = true;
		_this.Caterpillar2_3_3aScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_3_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_3_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_3_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_3_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_3_3aScreen.inputEnabled = true;
		_this.Caterpillar2_3_3aScreen.input.useHandCursor = true;
		_this.Caterpillar2_3_3aScreen.name = "Fractions 1.1 A";
		_this.Caterpillar2_3_3aScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_3",1);
					
					_this.state.start('unity2_3_3alevel1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_4_3aScreen = _this.add.sprite(300,520,'unity2_4_1aScreen');
		//_this.Caterpillar2_4_1ScreenTxt = _this.add.sprite(775,255,'Mr. Caterpillar 2.4.1');
		//_this.Caterpillar2_4_1ScreenTxt.anchor.setTo(0.5);

		_this.Caterpillar2_4_3aScreenTxt = this.add.text(375, 665, '10');
		_this.Caterpillar2_4_3aScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_4_3aScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_4_3aScreenTxt.font = 'gradefont';
		_this.Caterpillar2_4_3aScreenTxt.fontSize = 20;
		_this.Caterpillar2_4_3aScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_4_3aScreenTxt.fill = 'white';

		_this.Caterpillar2_4_3aScreenTxt.wordWrap = true;
		_this.Caterpillar2_4_3aScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_4_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_4_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_4_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_4_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_4_3aScreen.inputEnabled = true;
		_this.Caterpillar2_4_3aScreen.input.useHandCursor = true;
		_this.Caterpillar2_4_3aScreen.name = "Fractions 1.1 A";
		_this.Caterpillar2_4_3aScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_4",1);
					
					_this.state.start('unity2_4_3alevel1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_5_3aScreen = _this.add.sprite(500,520,'unity2_5_1a');
		//_this.Caterpillar2_5_1ScreenTxt = _this.add.sprite(175,455,'Mr. Caterpillar 2.5.1');
		//_this.Caterpillar2_5_1ScreenTxt.anchor.setTo(0.5);

		_this.Caterpillar2_5_3aScreenTxt = this.add.text(575, 665, '11');
		_this.Caterpillar2_5_3aScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_5_3aScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_5_3aScreenTxt.font = 'gradefont';
		_this.Caterpillar2_5_3aScreenTxt.fontSize = 20;
		_this.Caterpillar2_5_3aScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_5_3aScreenTxt.fill = 'white';

		_this.Caterpillar2_5_3aScreenTxt.wordWrap = true;
		_this.Caterpillar2_5_3aScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_5_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_5_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_5_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_5_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_5_3aScreen.inputEnabled = true;
		_this.Caterpillar2_5_3aScreen.input.useHandCursor = true;
		_this.Caterpillar2_5_3aScreen.name = "Fractions 1.1 A";
		_this.Caterpillar2_5_3aScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_5",1);

					_this.state.start('unity2_5_3alevel1',true,false);
				}
			},_this);
			
		},_this);




		

		_this.Caterpillar2_7_3Screen = _this.add.sprite(700,520,'unity2_7_3');
		//_this.Caterpillar2_5_1ScreenTxt = _this.add.sprite(175,455,'Mr. Caterpillar 2.5.1');
		//_this.Caterpillar2_5_1ScreenTxt.anchor.setTo(0.5);

		_this.Caterpillar2_7_3ScreenTxt = this.add.text(775, 665, '12');
		_this.Caterpillar2_7_3ScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_7_3ScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_7_3ScreenTxt.font = 'gradefont';
		_this.Caterpillar2_7_3ScreenTxt.fontSize = 20;
		_this.Caterpillar2_7_3ScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_7_3ScreenTxt.fill = 'white';

		_this.Caterpillar2_7_3ScreenTxt.wordWrap = true;
		_this.Caterpillar2_7_3ScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_5_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_5_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_5_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_5_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_7_3Screen.inputEnabled = true;
		_this.Caterpillar2_7_3Screen.input.useHandCursor = true;
		_this.Caterpillar2_7_3Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_7_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_5",1);

					_this.state.start('unity2_7_3level1',true,false);
				}
			},_this);
			
		},_this);



		_this.Caterpillar2_7_3aScreen = _this.add.sprite(100,720,'unity2_7_3a');
		//_this.Caterpillar2_5_1ScreenTxt = _this.add.sprite(175,455,'Mr. Caterpillar 2.5.1');
		//_this.Caterpillar2_5_1ScreenTxt.anchor.setTo(0.5);

		_this.Caterpillar2_7_3aScreenTxt = this.add.text(175, 865, '13');
		_this.Caterpillar2_7_3aScreenTxt.anchor.setTo(0.5);
		_this.Caterpillar2_7_3aScreenTxt.align = 'center';
		
				
		_this.Caterpillar2_7_3aScreenTxt.font = 'gradefont';
		_this.Caterpillar2_7_3aScreenTxt.fontSize = 20;
		_this.Caterpillar2_7_3aScreenTxt.fontWeight = 'normal';
		_this.Caterpillar2_7_3aScreenTxt.fill = 'white';

		_this.Caterpillar2_7_3aScreenTxt.wordWrap = true;
		_this.Caterpillar2_7_3aScreenTxt.wordWrapWidth = 500;
		//_this.Caterpillar2_5_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.Caterpillar2_5_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.Caterpillar2_5_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.Caterpillar2_5_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Caterpillar2_7_3aScreen.inputEnabled = true;
		_this.Caterpillar2_7_3aScreen.input.useHandCursor = true;
		_this.Caterpillar2_7_3aScreen.name = "Fractions 1.1 A";
		_this.Caterpillar2_7_3aScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_5",1);

					_this.state.start('unity2_7_3alevel1',true,false);
				}
			},_this);
			
		},_this);




		/*if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.Caterpillar2_1_3ScreenTxt.frame = 1;
			_this.Caterpillar2_2_3ScreenTxt.frame = 1;
			_this.Caterpillar2_3_3ScreenTxt.frame = 1;
			_this.Caterpillar2_4_3ScreenTxt.frame = 1;
			_this.Caterpillar2_5_2ScreenTxt.frame = 1;
			_this.NumberPuzzle2_6_3ScreenTxt.frame = 1;
			
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.Caterpillar2_1_3ScreenTxt.frame = 2;
			_this.Caterpillar2_2_3ScreenTxt.frame = 2;
			_this.Caterpillar2_3_3ScreenTxt.frame = 2;
			_this.Caterpillar2_4_3ScreenTxt.frame = 2;
			_this.Caterpillar2_5_2ScreenTxt.frame = 2;
			_this.NumberPuzzle2_6_3ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.Caterpillar2_1_3ScreenTxt.frame = 0;
			_this.Caterpillar2_2_3ScreenTxt.frame = 0;
			_this.Caterpillar2_3_3ScreenTxt.frame = 0;
			_this.Caterpillar2_4_3ScreenTxt.frame = 0;
			_this.Caterpillar2_5_2ScreenTxt.frame = 0;
			_this.NumberPuzzle2_6_3ScreenTxt.frame = 0;
		}*/
		
		
		
		
		_this.sequenceGroup.add(_this.topicTxtBg);
		_this.sequenceGroup.add(_this.topicTitleText);
		_this.sequenceGroup.add(_this.topicBg);
		_this.sequenceGroup.add(_this.Caterpillar2_1_3Screen);
		_this.sequenceGroup.add(_this.Caterpillar2_1_3ScreenTxt);
		_this.sequenceGroup.add(_this.Caterpillar2_2_3Screen);
		_this.sequenceGroup.add(_this.Caterpillar2_2_3ScreenTxt);
		_this.sequenceGroup.add(_this.Caterpillar2_3_3Screen);
		_this.sequenceGroup.add(_this.Caterpillar2_3_3ScreenTxt);
		_this.sequenceGroup.add(_this.Caterpillar2_4_3Screen);
		_this.sequenceGroup.add(_this.Caterpillar2_4_3ScreenTxt);
		_this.sequenceGroup.add(_this.Caterpillar2_5_2Screen);
		_this.sequenceGroup.add(_this.Caterpillar2_5_2ScreenTxt);
		_this.sequenceGroup.add(_this.NumberPuzzle2_6_3Screen);
		_this.sequenceGroup.add(_this.NumberPuzzle2_6_3ScreenTxt);


		_this.sequenceGroup.add(_this.Caterpillar2_1_3aScreen);
		_this.sequenceGroup.add(_this.Caterpillar2_1_3aScreenTxt);
		_this.sequenceGroup.add(_this.Caterpillar2_2_3aScreen);
		_this.sequenceGroup.add(_this.Caterpillar2_2_3aScreenTxt);
		_this.sequenceGroup.add(_this.Caterpillar2_3_3aScreen);
		_this.sequenceGroup.add(_this.Caterpillar2_3_3aScreenTxt);
		_this.sequenceGroup.add(_this.Caterpillar2_4_3aScreen);
		_this.sequenceGroup.add(_this.Caterpillar2_4_3aScreenTxt);
		_this.sequenceGroup.add(_this.Caterpillar2_5_3aScreen);
		_this.sequenceGroup.add(_this.Caterpillar2_5_3aScreenTxt);
		_this.sequenceGroup.add(_this.Caterpillar2_7_3Screen);
		_this.sequenceGroup.add(_this.Caterpillar2_7_3ScreenTxt);
		_this.sequenceGroup.add(_this.Caterpillar2_7_3aScreen);
		_this.sequenceGroup.add(_this.Caterpillar2_7_3aScreenTxt);

		
	},

	PlaceValue:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,175,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(180,83,'PLACE VALUE');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(182, 85, ' \n '+window.selctedLang.placeValueTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.placeValue3_1_2Screen = _this.add.sprite(100,120,'unity3.1.2');
		//_this.placeValue3_1_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 3.1.2');
		//_this.placeValue3_1_2ScreenTxt.anchor.setTo(0.5);

		_this.placeValue3_1_2ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.CoinMachine3_1_2+' \n ');
		_this.placeValue3_1_2ScreenTxt.anchor.setTo(0.5);
		_this.placeValue3_1_2ScreenTxt.align = 'center';
		
				
		_this.placeValue3_1_2ScreenTxt.font = 'gradefont';
		_this.placeValue3_1_2ScreenTxt.fontSize = 20;
		_this.placeValue3_1_2ScreenTxt.fontWeight = 'normal';
		_this.placeValue3_1_2ScreenTxt.fill = 'white';

		_this.placeValue3_1_2ScreenTxt.wordWrap = true;
		_this.placeValue3_1_2ScreenTxt.wordWrapWidth = 500;
		//_this.placeValue3_1_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.placeValue3_1_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.placeValue3_1_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.placeValue3_1_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.placeValue3_1_2Screen.inputEnabled = true;
		_this.placeValue3_1_2Screen.input.useHandCursor = true;
		_this.placeValue3_1_2Screen.name = "Fractions 1.1 A";
		_this.placeValue3_1_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity5_1",1);
					
					_this.state.start('unity3_1_2level1',true,false);
				}
			},_this);
			
		},_this);

		_this.placeValue3_2_2Screen = _this.add.sprite(300,120,'unity3.1.2');
		//_this.placeValue3_2_2ScreenTxt = _this.add.sprite(365,255,'Coin Machine 3.2.2');
		//_this.placeValue3_2_2ScreenTxt.anchor.setTo(0.5);

		_this.placeValue3_2_2ScreenTxt = this.add.text(375, 265, ' \n '+window.selctedLang.CoinMachine3_2_2+' \n ');
		_this.placeValue3_2_2ScreenTxt.anchor.setTo(0.5);
		_this.placeValue3_2_2ScreenTxt.align = 'center';
		
				
		_this.placeValue3_2_2ScreenTxt.font = 'gradefont';
		_this.placeValue3_2_2ScreenTxt.fontSize = 20;
		_this.placeValue3_2_2ScreenTxt.fontWeight = 'normal';
		_this.placeValue3_2_2ScreenTxt.fill = 'white';

		_this.placeValue3_2_2ScreenTxt.wordWrap = true;
		_this.placeValue3_2_2ScreenTxt.wordWrapWidth = 500;
		//_this.placeValue3_2_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.placeValue3_2_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.placeValue3_2_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.placeValue3_2_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.placeValue3_2_2Screen.inputEnabled = true;
		_this.placeValue3_2_2Screen.input.useHandCursor = true;
		_this.placeValue3_2_2Screen.name = "Fractions 1.1 A";
		_this.placeValue3_2_2Screen.events.onInputDown.add(function(target){

			if(this.video == null)
			{
				this.video = this.add.video('demo7_1_1');
				//this.video.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();


					this.video.play(false);
					this.video.changeSource(window.baseUrl+"assets/demoVideos/3_2_2.mp4");
					this.video.addToWorld();
					this.video.play(false);
					//this.game.input.enabled = false;
					
					/**************************Play Demo VO And Skip Demo *****************************/
					_this.playDemoVideos('3_2_2');
					this.video.playbackRate = 1;    // slow down the video
					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video.stop(false);
						this.game.input.enabled = true;
						_this.state.start('unity3_2_2level1',true,false);
						
					},_this);
					},_this);
					
					/***********************************************************/
					
					
					//this.video.play(false);
					this.video.onComplete.add(function(){
					
					this.game.input.enabled = true;
						_this.state.start('unity3_2_2level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);


		/*if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.placeValue3_1_2ScreenTxt.frame = 1;
			_this.placeValue3_2_2ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.placeValue3_1_2ScreenTxt.frame = 2;
			_this.placeValue3_2_2ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.placeValue3_1_2ScreenTxt.frame = 0;
			_this.placeValue3_2_2ScreenTxt.frame = 0;
		}*/
		
		
		
		
		_this.PlaceValueGroup.add(_this.topicTxtBg);
		_this.PlaceValueGroup.add(_this.topicTitleText);
		_this.PlaceValueGroup.add(_this.topicBg);
		_this.PlaceValueGroup.add(_this.placeValue3_1_2Screen);
		_this.PlaceValueGroup.add(_this.placeValue3_1_2ScreenTxt);
		_this.PlaceValueGroup.add(_this.placeValue3_2_2Screen);
		_this.PlaceValueGroup.add(_this.placeValue3_2_2ScreenTxt);
		
	},

	ComparisionOfNumbers:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,160,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(180,83,'NUMBERS');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(182, 85, ' \n '+window.selctedLang.numberTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		

		/*_this.TheCrocodile4_3_3Screen = _this.add.sprite(100,120,'unity1.3');
		//_this.CountingFish1_3ScreenTxt = _this.add.sprite(570,255,'Counting fish 1.3');
		//_this.CountingFish1_3ScreenTxt.anchor.setTo(0.5);

		_this.TheCrocodile4_3_3ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.TheCrocodile4_3_3+' \n ');
		_this.TheCrocodile4_3_3ScreenTxt.anchor.setTo(0.5);
		_this.TheCrocodile4_3_3ScreenTxt.align = 'center';
		
				
		_this.TheCrocodile4_3_3ScreenTxt.font = 'gradefont';
		_this.TheCrocodile4_3_3ScreenTxt.fontSize = 20;
		_this.TheCrocodile4_3_3ScreenTxt.fontWeight = 'normal';
		_this.TheCrocodile4_3_3ScreenTxt.fill = 'white';

		_this.TheCrocodile4_3_3ScreenTxt.wordWrap = true;
		_this.TheCrocodile4_3_3ScreenTxt.wordWrapWidth = 500;
		//_this.TheCrocodile4_3_3ScreenTxt.setTextBounds(0,0,500,500);
		//_this.TheCrocodile4_3_3ScreenTxt.padding.set(50, 50);
		
		
		//_this.TheCrocodile4_3_3ScreenTxt.useAdvancedWrap  = true;
		

		//_this.TheCrocodile4_3_3ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.TheCrocodile4_3_3Screen.inputEnabled = true;
		_this.TheCrocodile4_3_3Screen.input.useHandCursor = true;
		_this.TheCrocodile4_3_3Screen.name = "Fractions 1.1 A";
		_this.TheCrocodile4_3_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_3",1);
					
					_this.state.start('unity4_3_3level1',true,false);
				}
			},_this);
			
		},_this);*/


		_this.TreeClimbing4_4_3Screen = _this.add.sprite(100,120,'unity4_4_2');
		//_this.CountingFlowers1_4ScreenTxt = _this.add.sprite(765,255,'Counting flowers 1.4');
		//_this.CountingFlowers1_4ScreenTxt.anchor.setTo(0.5);

		_this.TreeClimbing4_4_3ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.TreeClimbing4_4_3+' \n ');
		_this.TreeClimbing4_4_3ScreenTxt.anchor.setTo(0.5);
		_this.TreeClimbing4_4_3ScreenTxt.align = 'center';
		
				
		_this.TreeClimbing4_4_3ScreenTxt.font = 'gradefont';
		_this.TreeClimbing4_4_3ScreenTxt.fontSize = 20;
		_this.TreeClimbing4_4_3ScreenTxt.fontWeight = 'normal';
		_this.TreeClimbing4_4_3ScreenTxt.fill = 'white';

		_this.TreeClimbing4_4_3ScreenTxt.wordWrap = true;
		_this.TreeClimbing4_4_3ScreenTxt.wordWrapWidth = 500;
		//_this.TreeClimbing4_4_3ScreenTxt.setTextBounds(0,0,500,500);
		//_this.TreeClimbing4_4_3ScreenTxt.padding.set(50, 50);
		
		
		//_this.TreeClimbing4_4_3ScreenTxt.useAdvancedWrap  = true;
		

		//_this.TreeClimbing4_4_3ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.TreeClimbing4_4_3Screen.inputEnabled = true;
		_this.TreeClimbing4_4_3Screen.input.useHandCursor = true;
		_this.TreeClimbing4_4_3Screen.name = "Fractions 1.1 A";
		_this.TreeClimbing4_4_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_4",1);
					
					_this.state.start('unity4_4_3level1',true,false);
				}
			},_this);
			
		},_this);


		_this.TreeClimbing4_5_3Screen = _this.add.sprite(300,120,'unity4_5_2');
		//_this.PluckingMangoes1_5ScreenTxt = _this.add.sprite(175,455,'Plucking mangoes 1.5');
		//_this.PluckingMangoes1_5ScreenTxt.anchor.setTo(0.5);

		_this.TreeClimbing4_5_3ScreenTxt = this.add.text(375, 265, ' \n '+window.selctedLang.TreeClimbing4_5_3+' \n ');
		_this.TreeClimbing4_5_3ScreenTxt.anchor.setTo(0.5);
		_this.TreeClimbing4_5_3ScreenTxt.align = 'center';
		
				
		_this.TreeClimbing4_5_3ScreenTxt.font = 'gradefont';
		_this.TreeClimbing4_5_3ScreenTxt.fontSize = 20;
		_this.TreeClimbing4_5_3ScreenTxt.fontWeight = 'normal';
		_this.TreeClimbing4_5_3ScreenTxt.fill = 'white';

		_this.TreeClimbing4_5_3ScreenTxt.wordWrap = true;
		_this.TreeClimbing4_5_3ScreenTxt.wordWrapWidth = 500;
		//_this.TreeClimbing4_5_3ScreenTxt.setTextBounds(0,0,500,500);
		//_this.TreeClimbing4_5_3ScreenTxt.padding.set(50, 50);
		
		
		//_this.TreeClimbing4_5_3ScreenTxt.useAdvancedWrap  = true;
		

		//_this.TreeClimbing4_5_3ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.TreeClimbing4_5_3Screen.inputEnabled = true;
		_this.TreeClimbing4_5_3Screen.input.useHandCursor = true;
		_this.TreeClimbing4_5_3Screen.name = "Fractions 1.1 A";
		_this.TreeClimbing4_5_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_5",1);

					_this.state.start('unity4_5_3level1',true,false);
				}
			},_this);
			
		},_this);


		_this.SmallorBig4_6_2Screen = _this.add.sprite(500,120,'unity4_6_1');
		//_this.PluckingMangoes1_5ScreenTxt = _this.add.sprite(175,455,'Plucking mangoes 1.5');
		//_this.PluckingMangoes1_5ScreenTxt.anchor.setTo(0.5);

		_this.SmallorBig4_6_2ScreenTxt = this.add.text(575, 265, ' \n '+window.selctedLang.SmallorBig4_6_2+' \n ');
		_this.SmallorBig4_6_2ScreenTxt.anchor.setTo(0.5);
		_this.SmallorBig4_6_2ScreenTxt.align = 'center';
		
				
		_this.SmallorBig4_6_2ScreenTxt.font = 'gradefont';
		_this.SmallorBig4_6_2ScreenTxt.fontSize = 20;
		_this.SmallorBig4_6_2ScreenTxt.fontWeight = 'normal';
		_this.SmallorBig4_6_2ScreenTxt.fill = 'white';

		_this.SmallorBig4_6_2ScreenTxt.wordWrap = true;
		_this.SmallorBig4_6_2ScreenTxt.wordWrapWidth = 500;
		//_this.SmallorBig4_6_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.SmallorBig4_6_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.SmallorBig4_6_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.SmallorBig4_6_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.SmallorBig4_6_2Screen.inputEnabled = true;
		_this.SmallorBig4_6_2Screen.input.useHandCursor = true;
		_this.SmallorBig4_6_2Screen.name = "Fractions 1.1 A";
		_this.SmallorBig4_6_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_5",1);

					_this.state.start('unity4_6_2level1',true,false);
				}
			},_this);
			
		},_this);




		if(window.languageSelected=="Hindi")
		{
			/*_this.topicTitleText.frame = 1;
			//_this.CountingIcecreams1_1ScreenTxt.frame = 1;
			_this.PluckingMangoes1_2ScreenTxt.frame = 1;
			_this.CountingFish1_3ScreenTxt.frame = 1;
			_this.CountingFlowers1_4ScreenTxt.frame = 1;
			_this.PluckingMangoes1_5ScreenTxt.frame = 1;
			_this.BurstingBubbles1_6ScreenTxt.frame = 1;
			_this.TracingNumbers1_7ScreenTxt.frame = 1;*/
		}
		else if(window.languageSelected=="Kannada")
		{
			/*_this.topicTitleText.frame = 2;
			//_this.CountingIcecreams1_1ScreenTxt.frame = 2;
			_this.PluckingMangoes1_2ScreenTxt.frame = 2;
			_this.CountingFish1_3ScreenTxt.frame = 2;
			_this.CountingFlowers1_4ScreenTxt.frame = 2;
			_this.PluckingMangoes1_5ScreenTxt.frame = 2;
			_this.BurstingBubbles1_6ScreenTxt.frame = 2;
			_this.TracingNumbers1_7ScreenTxt.frame = 2;*/
		}
		else
		{
			/*_this.topicTitleText.frame = 0;
			//_this.CountingIcecreams1_1ScreenTxt.frame = 0;
			_this.PluckingMangoes1_2ScreenTxt.frame = 0;
			_this.CountingFish1_3ScreenTxt.frame = 0;
			_this.CountingFlowers1_4ScreenTxt.frame = 0;
			_this.PluckingMangoes1_5ScreenTxt.frame = 0;
			_this.BurstingBubbles1_6ScreenTxt.frame = 0;
			_this.TracingNumbers1_7ScreenTxt.frame = 0;*/
		}
		
		
		
		
		_this.ComparisionOfNumbersGroup.add(_this.topicTxtBg);
		_this.ComparisionOfNumbersGroup.add(_this.topicTitleText);
		_this.ComparisionOfNumbersGroup.add(_this.topicBg);
		//_this.ComparisionOfNumbersGroup.add(_this.TheCrocodile4_3_3Screen);
		//_this.ComparisionOfNumbersGroup.add(_this.TheCrocodile4_3_3ScreenTxt);
		_this.ComparisionOfNumbersGroup.add(_this.TreeClimbing4_4_3Screen);
		_this.ComparisionOfNumbersGroup.add(_this.TreeClimbing4_4_3ScreenTxt);
		_this.ComparisionOfNumbersGroup.add(_this.TreeClimbing4_5_3Screen);
		_this.ComparisionOfNumbersGroup.add(_this.TreeClimbing4_5_3ScreenTxt);
		_this.ComparisionOfNumbersGroup.add(_this.SmallorBig4_6_2Screen);
		_this.ComparisionOfNumbersGroup.add(_this.SmallorBig4_6_2ScreenTxt);

	},

	additionwithPlaceValue:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,160,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(180,83,'ADDITION');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(182, 85, ' \n '+window.selctedLang.additionTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.coinMachine7_1_3Screen = _this.add.sprite(100,120,'unity7_2_1');
		//_this.coinMachine7_1_3ScreenTxt = _this.add.sprite(165,255,'Coin Machine 7.1.3');
		//_this.coinMachine7_1_3ScreenTxt.anchor.setTo(0.5);

		_this.coinMachine7_1_3ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.CoinMachine7_1_3+' \n ');
		_this.coinMachine7_1_3ScreenTxt.anchor.setTo(0.5);
		_this.coinMachine7_1_3ScreenTxt.align = 'center';
		
				
		_this.coinMachine7_1_3ScreenTxt.font = 'gradefont';
		_this.coinMachine7_1_3ScreenTxt.fontSize = 20;
		_this.coinMachine7_1_3ScreenTxt.fontWeight = 'normal';
		_this.coinMachine7_1_3ScreenTxt.fill = 'white';

		_this.coinMachine7_1_3ScreenTxt.wordWrap = true;
		_this.coinMachine7_1_3ScreenTxt.wordWrapWidth = 500;
		//_this.coinMachine7_1_3ScreenTxt.setTextBounds(0,0,500,500);
		//_this.coinMachine7_1_3ScreenTxt.padding.set(50, 50);
		
		
		//_this.coinMachine7_1_3ScreenTxt.useAdvancedWrap  = true;
		

		//_this.coinMachine7_1_3ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.coinMachine7_1_3Screen.inputEnabled = true;
		_this.coinMachine7_1_3Screen.input.useHandCursor = true;
		_this.coinMachine7_1_3Screen.name = "Fractions 1.1 A";
		_this.coinMachine7_1_3Screen.events.onInputDown.add(function(target){

			if(this.video1 == null)
			{
				this.video1 = this.add.video('demo7_1_1');
				//this.video1.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					this.video1.play(false);
					this.video1.changeSource(window.baseUrl+"assets/demoVideos/7_1_3.mp4");
					this.video1.addToWorld();
					this.video1.play(false);

					//this.game.input.enabled = false;
					/**************************Play Demo VO And Skip Demo *****************************/
					this.video1.playbackRate = 1;    // slow down the video
					_this.time.events.add(2000, function(){
						_this.playDemoVideos('7_1_3a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video1.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity7_1_3level1',true,false);		
							},_this);
						_this.time.events.add(7000, function(){
							_this.playDemoVideos('7_1_3b');
						},_this);
						_this.time.events.add(17000, function(){
							_this.playDemoVideos('7_1_3c');
						},_this);
					},_this);
					
					/***********************************************************/
					//this.video1.play(false);
					this.video1.onComplete.add(function(){
						
						this.game.input.enabled = true;
					
						_this.state.start('unity7_1_3level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);

		_this.coinMachine7_2_3Screen = _this.add.sprite(300,120,'unity7_2_1');
		//_this.coinMachine7_2_3ScreenTxt = _this.add.sprite(365,255,'Coin Machine 7.2.3');
		//_this.coinMachine7_2_3ScreenTxt.anchor.setTo(0.5);

		_this.coinMachine7_2_3ScreenTxt = this.add.text(375, 265, ' \n '+window.selctedLang.CoinMachine7_2_3+' \n ');
		_this.coinMachine7_2_3ScreenTxt.anchor.setTo(0.5);
		_this.coinMachine7_2_3ScreenTxt.align = 'center';
		
				
		_this.coinMachine7_2_3ScreenTxt.font = 'gradefont';
		_this.coinMachine7_2_3ScreenTxt.fontSize = 20;
		_this.coinMachine7_2_3ScreenTxt.fontWeight = 'normal';
		_this.coinMachine7_2_3ScreenTxt.fill = 'white';

		_this.coinMachine7_2_3ScreenTxt.wordWrap = true;
		_this.coinMachine7_2_3ScreenTxt.wordWrapWidth = 500;
		//_this.coinMachine7_2_3ScreenTxt.setTextBounds(0,0,500,500);
		//_this.coinMachine7_2_3ScreenTxt.padding.set(50, 50);
		
		
		//_this.coinMachine7_2_3ScreenTxt.useAdvancedWrap  = true;
		

		//_this.coinMachine7_2_3ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.coinMachine7_2_3Screen.inputEnabled = true;
		_this.coinMachine7_2_3Screen.input.useHandCursor = true;
		_this.coinMachine7_2_3Screen.name = "Fractions 1.1 A";
		_this.coinMachine7_2_3Screen.events.onInputDown.add(function(target){

			if(this.video2 == null)
			{
				this.video2 = this.add.video('demo7_1_1');
				//this.video2.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();


					this.video2.play(false);
					this.video2.changeSource(window.baseUrl+"assets/demoVideos/7_2_3.mp4");
					this.video2.addToWorld();
					this.video2.play(false);

					//this.game.input.enabled = false;
					
					/**************************Play Demo VO And Skip Demo *****************************/
					this.video2.playbackRate = 1;    // slow down the video
					_this.time.events.add(3000, function(){
						_this.playDemoVideos('7_2_3a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video2.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity7_2_3level1',true,false);		
							},_this);
						_this.time.events.add(7000, function(){
							_this.playDemoVideos('7_2_3b');
						},_this);
						_this.time.events.add(17000, function(){
							_this.playDemoVideos('7_2_3c');
						},_this);
						_this.time.events.add(26000, function(){
							_this.playDemoVideos('7_2_3d');
						},_this);
					},_this);
					
					/***********************************************************/
					

					//this.video2.play(false);
					this.video2.onComplete.add(function(){
					
						this.game.input.enabled = true;
						_this.state.start('unity7_2_3level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);


		/*if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.coinMachine7_1_3ScreenTxt.frame = 1;
			_this.coinMachine7_2_3ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.coinMachine7_1_3ScreenTxt.frame = 2;
			_this.coinMachine7_2_3ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.coinMachine7_1_3ScreenTxt.frame = 0;
			_this.coinMachine7_2_3ScreenTxt.frame = 0;
		}*/
		
		
		
		
		_this.additionwithPlaceValueGroup.add(_this.topicTxtBg);
		_this.additionwithPlaceValueGroup.add(_this.topicTitleText);
		_this.additionwithPlaceValueGroup.add(_this.topicBg);
		_this.additionwithPlaceValueGroup.add(_this.coinMachine7_1_3Screen);
		_this.additionwithPlaceValueGroup.add(_this.coinMachine7_1_3ScreenTxt);
		_this.additionwithPlaceValueGroup.add(_this.coinMachine7_2_3Screen);
		_this.additionwithPlaceValueGroup.add(_this.coinMachine7_2_3ScreenTxt);
		
	},

	SubstractionWithPlaceValue:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,200,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(195,83,'SUBTRACTION');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(200, 85, ' \n '+window.selctedLang.subtractionTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.coinMachine10_1_3Screen = _this.add.sprite(100,120,'unity10.1.2');
		//_this.coinMachine10_1_3ScreenTxt = _this.add.sprite(165,255,'Coin Machine 10.1.3');
		//_this.coinMachine10_1_3ScreenTxt.anchor.setTo(0.5);

		_this.coinMachine10_1_3ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.CoinMachine10_1_3+' \n ');
		_this.coinMachine10_1_3ScreenTxt.anchor.setTo(0.5);
		_this.coinMachine10_1_3ScreenTxt.align = 'center';
		
				
		_this.coinMachine10_1_3ScreenTxt.font = 'gradefont';
		_this.coinMachine10_1_3ScreenTxt.fontSize = 20;
		_this.coinMachine10_1_3ScreenTxt.fontWeight = 'normal';
		_this.coinMachine10_1_3ScreenTxt.fill = 'white';

		_this.coinMachine10_1_3ScreenTxt.wordWrap = true;
		_this.coinMachine10_1_3ScreenTxt.wordWrapWidth = 500;
		//_this.coinMachine10_1_3ScreenTxt.setTextBounds(0,0,500,500);
		//_this.coinMachine10_1_3ScreenTxt.padding.set(50, 50);
		
		
		//_this.coinMachine10_1_3ScreenTxt.useAdvancedWrap  = true;
		

		//_this.coinMachine10_1_3ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.coinMachine10_1_3Screen.inputEnabled = true;
		_this.coinMachine10_1_3Screen.input.useHandCursor = true;
		_this.coinMachine10_1_3Screen.name = "Fractions 1.1 A";
		_this.coinMachine10_1_3Screen.events.onInputDown.add(function(target){

			if(this.video3 == null)
			{
				this.video3 = this.add.video('demo7_1_1');
				//this.video3.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					this.video3.play(false);
					this.video3.changeSource(window.baseUrl+"assets/demoVideos/10_1_3.mp4");
					this.video3.addToWorld();
					this.video3.play(false);

					//this.game.input.enabled = false;
					/**************************Play Demo VO And Skip Demo *****************************/
					this.video3.playbackRate = 1;    // slow down the video
					_this.time.events.add(2000, function(){
						_this.playDemoVideos('10_1_3a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video3.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity10_1_3level1',true,false);		
							},_this);
						_this.time.events.add(5000, function(){
							_this.playDemoVideos('10_1_3b');
						},_this);
						_this.time.events.add(27000, function(){
							_this.playDemoVideos('10_1_3c');
						},_this);
					},_this);
					
					/***********************************************************/
					
					

					//this.video3.play(false);
					this.video3.onComplete.add(function(){
						
					this.game.input.enabled = true;
					
						_this.state.start('unity10_1_3level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);

		_this.coinMachine10_2_3Screen = _this.add.sprite(300,120,'unity10.2.2');
		//_this.coinMachine10_2_3ScreenTxt = _this.add.sprite(365,255,'Coin Machine 10.2.3');
		//_this.coinMachine10_2_3ScreenTxt.anchor.setTo(0.5);

		_this.coinMachine10_2_3ScreenTxt = this.add.text(375, 265, ' \n '+window.selctedLang.CoinMachine10_2_3+' \n ');
		_this.coinMachine10_2_3ScreenTxt.anchor.setTo(0.5);
		_this.coinMachine10_2_3ScreenTxt.align = 'center';
		
				
		_this.coinMachine10_2_3ScreenTxt.font = 'gradefont';
		_this.coinMachine10_2_3ScreenTxt.fontSize = 20;
		_this.coinMachine10_2_3ScreenTxt.fontWeight = 'normal';
		_this.coinMachine10_2_3ScreenTxt.fill = 'white';

		_this.coinMachine10_2_3ScreenTxt.wordWrap = true;
		_this.coinMachine10_2_3ScreenTxt.wordWrapWidth = 500;
		//_this.coinMachine10_2_3ScreenTxt.setTextBounds(0,0,500,500);
		//_this.coinMachine10_2_3ScreenTxt.padding.set(50, 50);
		
		
		//_this.coinMachine10_2_3ScreenTxt.useAdvancedWrap  = true;
		

		//_this.coinMachine10_2_3ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.coinMachine10_2_3Screen.inputEnabled = true;
		_this.coinMachine10_2_3Screen.input.useHandCursor = true;
		_this.coinMachine10_2_3Screen.name = "Fractions 1.1 A";
		_this.coinMachine10_2_3Screen.events.onInputDown.add(function(target){

			if(this.video4 == null)
			{
				this.video4 = this.add.video('demo7_1_1');
				//this.video4.addToWorld();
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					this.video4.play(false);
					this.video4.changeSource(window.baseUrl+"assets/demoVideos/10_2_3.mp4");
					this.video4.addToWorld();
					this.video4.play(false);

					//this.game.input.enabled = false;
					/**************************Play Demo VO And Skip Demo *****************************/
					this.video4.playbackRate = 1;    // slow down the video
					_this.time.events.add(2000, function(){
						_this.playDemoVideos('10_2_3a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video4.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity10_2_3level1',true,false);		
							},_this);
						_this.time.events.add(5000, function(){
							_this.playDemoVideos('10_2_3b');
						},_this);
						_this.time.events.add(21000, function(){
							_this.playDemoVideos('10_2_3c');
						},_this);
					  _this.time.events.add(4700, function(){
							_this.playDemoVideos('10_2_3d');
						},_this);
					},_this);
					
					/***********************************************************/

					//this.video4.play(false);
					this.video4.onComplete.add(function(){
						
					this.game.input.enabled = true;
					
						_this.state.start('unity10_2_3level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);


		/*if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.coinMachine10_1_3ScreenTxt.frame = 1;
			_this.coinMachine10_2_3ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.coinMachine10_1_3ScreenTxt.frame = 2;
			_this.coinMachine10_2_3ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.coinMachine10_1_3ScreenTxt.frame = 0;
			_this.coinMachine10_2_3ScreenTxt.frame = 0;
		}*/
		
		
		
		
		_this.SubtractionWithPlaceValueGroup.add(_this.topicTxtBg);
		_this.SubtractionWithPlaceValueGroup.add(_this.topicTitleText);
		_this.SubtractionWithPlaceValueGroup.add(_this.topicBg);
		_this.SubtractionWithPlaceValueGroup.add(_this.coinMachine10_1_3Screen);
		_this.SubtractionWithPlaceValueGroup.add(_this.coinMachine10_1_3ScreenTxt);
		_this.SubtractionWithPlaceValueGroup.add(_this.coinMachine10_2_3Screen);
		_this.SubtractionWithPlaceValueGroup.add(_this.coinMachine10_2_3ScreenTxt);
		
	},

	MultiplicationTable:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,230,400,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(215,83,'MULTIPLICATION');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(215, 85, ' \n '+window.selctedLang.multiplicationTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,400,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.multiplication12_1Screen = _this.add.sprite(100,120,'unity12_1');
		//_this.multiplication12_3_1ScreenTxt = _this.add.sprite(175,255,'A for Apple 11.1');
		//_this.multiplication12_3_1ScreenTxt.anchor.setTo(0.5);

		_this.multiplication12_1ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.Mulitiplication12_1+' \n ');
		_this.multiplication12_1ScreenTxt.anchor.setTo(0.5);
		_this.multiplication12_1ScreenTxt.align = 'center';
		
				
		_this.multiplication12_1ScreenTxt.font = 'gradefont';
		_this.multiplication12_1ScreenTxt.fontSize = 20;
		_this.multiplication12_1ScreenTxt.fontWeight = 'normal';
		_this.multiplication12_1ScreenTxt.fill = 'white';

		_this.multiplication12_1ScreenTxt.wordWrap = true;
		_this.multiplication12_1ScreenTxt.wordWrapWidth = 500;
		//_this.multiplication12_3_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.multiplication12_3_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.multiplication12_3_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.multiplication12_3_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication12_1Screen.inputEnabled = true;
		_this.multiplication12_1Screen.input.useHandCursor = true;
		_this.multiplication12_1Screen.name = "Fractions 1.1 A";
		_this.multiplication12_1Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity11_1",1);
					
					_this.state.start('unity12_1level1',true,false);
				}
			},_this);
			
		},_this);


		_this.multiplication12_2Screen = _this.add.sprite(300,120,'unity12_2');
		//_this.multiplication12_3_1ScreenTxt = _this.add.sprite(175,255,'A for Apple 11.1');
		//_this.multiplication12_3_1ScreenTxt.anchor.setTo(0.5);

		_this.multiplication12_2ScreenTxt = this.add.text(375, 265, ' \n '+window.selctedLang.Mulitiplication12_2+' \n ');
		_this.multiplication12_2ScreenTxt.anchor.setTo(0.5);
		_this.multiplication12_2ScreenTxt.align = 'center';
		
				
		_this.multiplication12_2ScreenTxt.font = 'gradefont';
		_this.multiplication12_2ScreenTxt.fontSize = 20;
		_this.multiplication12_2ScreenTxt.fontWeight = 'normal';
		_this.multiplication12_2ScreenTxt.fill = 'white';

		_this.multiplication12_2ScreenTxt.wordWrap = true;
		_this.multiplication12_2ScreenTxt.wordWrapWidth = 500;
		//_this.multiplication12_3_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.multiplication12_3_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.multiplication12_3_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.multiplication12_3_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication12_2Screen.inputEnabled = true;
		_this.multiplication12_2Screen.input.useHandCursor = true;
		_this.multiplication12_2Screen.name = "Fractions 1.1 A";
		_this.multiplication12_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity11_1",1);
					
					_this.state.start('unity12_2level1',true,false);
				}
			},_this);
			
		},_this);


		_this.multiplication12_3_2Screen = _this.add.sprite(500,120,'unity12_3_2');
		//_this.multiplication12_3_1ScreenTxt = _this.add.sprite(175,255,'A for Apple 11.1');
		//_this.multiplication12_3_1ScreenTxt.anchor.setTo(0.5);

		_this.multiplication12_3_2ScreenTxt = this.add.text(575, 265, ' \n '+window.selctedLang.Mulitiplication12_3_2+' \n ');
		_this.multiplication12_3_2ScreenTxt.anchor.setTo(0.5);
		_this.multiplication12_3_2ScreenTxt.align = 'center';
		
				
		_this.multiplication12_3_2ScreenTxt.font = 'gradefont';
		_this.multiplication12_3_2ScreenTxt.fontSize = 20;
		_this.multiplication12_3_2ScreenTxt.fontWeight = 'normal';
		_this.multiplication12_3_2ScreenTxt.fill = 'white';

		_this.multiplication12_3_2ScreenTxt.wordWrap = true;
		_this.multiplication12_3_2ScreenTxt.wordWrapWidth = 500;
		//_this.multiplication12_3_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.multiplication12_3_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.multiplication12_3_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.multiplication12_3_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication12_3_2Screen.inputEnabled = true;
		_this.multiplication12_3_2Screen.input.useHandCursor = true;
		_this.multiplication12_3_2Screen.name = "Fractions 1.1 A";
		_this.multiplication12_3_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity11_1",1);
					
					_this.state.start('unity12_3_2level1',true,false);
				}
			},_this);
			
		},_this);



		_this.multiplication12_3_3Screen = _this.add.sprite(700,120,'unity12_3_3');
		//_this.multiplication12_3_1ScreenTxt = _this.add.sprite(175,255,'A for Apple 11.1');
		//_this.multiplication12_3_1ScreenTxt.anchor.setTo(0.5);

		_this.multiplication12_3_3ScreenTxt = this.add.text(775, 265, ' \n '+window.selctedLang.Mulitiplication12_3_3+' \n ');
		_this.multiplication12_3_3ScreenTxt.anchor.setTo(0.5);
		_this.multiplication12_3_3ScreenTxt.align = 'center';
		
				
		_this.multiplication12_3_3ScreenTxt.font = 'gradefont';
		_this.multiplication12_3_3ScreenTxt.fontSize = 20;
		_this.multiplication12_3_3ScreenTxt.fontWeight = 'normal';
		_this.multiplication12_3_3ScreenTxt.fill = 'white';

		_this.multiplication12_3_3ScreenTxt.wordWrap = true;
		_this.multiplication12_3_3ScreenTxt.wordWrapWidth = 500;
		//_this.multiplication12_3_1ScreenTxt.setTextBounds(0,0,500,500);
		//_this.multiplication12_3_1ScreenTxt.padding.set(50, 50);
		
		
		//_this.multiplication12_3_1ScreenTxt.useAdvancedWrap  = true;
		

		//_this.multiplication12_3_1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication12_3_3Screen.inputEnabled = true;
		_this.multiplication12_3_3Screen.input.useHandCursor = true;
		_this.multiplication12_3_3Screen.name = "Fractions 1.1 A";
		_this.multiplication12_3_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity11_1",1);
					
					_this.state.start('unity12_3_3level1',true,false);
				}
			},_this);
			
		},_this);


		_this.multiplication13_1Screen = _this.add.sprite(100,320,'unity13_1');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.multiplication13_1ScreenTxt = this.add.text(175, 465, ' \n '+window.selctedLang.Mulitiplication13_1+' \n ');
		_this.multiplication13_1ScreenTxt.anchor.setTo(0.5);
		_this.multiplication13_1ScreenTxt.align = 'center';
		
				
		_this.multiplication13_1ScreenTxt.font = 'gradefont';
		_this.multiplication13_1ScreenTxt.fontSize = 20;
		_this.multiplication13_1ScreenTxt.fontWeight = 'normal';
		_this.multiplication13_1ScreenTxt.fill = 'white';

		_this.multiplication13_1ScreenTxt.wordWrap = true;
		_this.multiplication13_1ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication13_1Screen.inputEnabled = true;
		_this.multiplication13_1Screen.input.useHandCursor = true;
		_this.multiplication13_1Screen.name = "Fractions 1.1 A";
		_this.multiplication13_1Screen.events.onInputDown.add(function(target){

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					
					
					_this.state.start('unity13_1level1',true,false);
					
				}
			},_this);
			
		},_this);


		_this.multiplication14_1Screen = _this.add.sprite(300,320,'unity14_1');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.multiplication14_1ScreenTxt = this.add.text(375, 465, ' \n '+window.selctedLang.Mulitiplication14_1+' \n ');
		_this.multiplication14_1ScreenTxt.anchor.setTo(0.5);
		_this.multiplication14_1ScreenTxt.align = 'center';
		
				
		_this.multiplication14_1ScreenTxt.font = 'gradefont';
		_this.multiplication14_1ScreenTxt.fontSize = 20;
		_this.multiplication14_1ScreenTxt.fontWeight = 'normal';
		_this.multiplication14_1ScreenTxt.fill = 'white';

		_this.multiplication14_1ScreenTxt.wordWrap = true;
		_this.multiplication14_1ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication14_1Screen.inputEnabled = true;
		_this.multiplication14_1Screen.input.useHandCursor = true;
		_this.multiplication14_1Screen.name = "Fractions 1.1 A";
		_this.multiplication14_1Screen.events.onInputDown.add(function(target){

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					
					
					_this.state.start('unity14_1level1',true,false);
					
				}
			},_this);
			
		},_this);


		_this.multiplication14_2Screen = _this.add.sprite(500,320,'unity14_2');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.multiplication14_2ScreennTxt = this.add.text(575, 465, ' \n '+window.selctedLang.Mulitiplication14_2+' \n ');
		_this.multiplication14_2ScreennTxt.anchor.setTo(0.5);
		_this.multiplication14_2ScreennTxt.align = 'center';
		
				
		_this.multiplication14_2ScreennTxt.font = 'gradefont';
		_this.multiplication14_2ScreennTxt.fontSize = 20;
		_this.multiplication14_2ScreennTxt.fontWeight = 'normal';
		_this.multiplication14_2ScreennTxt.fill = 'white';

		_this.multiplication14_2ScreennTxt.wordWrap = true;
		_this.multiplication14_2ScreennTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication14_2Screen.inputEnabled = true;
		_this.multiplication14_2Screen.input.useHandCursor = true;
		_this.multiplication14_2Screen.name = "Fractions 1.1 A";
		_this.multiplication14_2Screen.events.onInputDown.add(function(target){

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					
					
					_this.state.start('unity14_2level1',true,false);
					
				}
			},_this);
			
		},_this);


		


		if(window.languageSelected=="Hindi")
		{
			//_this.topicTitleText.frame = 1;
			//_this.AforApple11_1ScreenTxt.frame = 1;
			//_this.AforApple11_2ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			//_this.topicTitleText.frame = 2;
			//_this.AforApple11_1ScreenTxt.frame = 2;
			//_this.AforApple11_2ScreenTxt.frame = 2;
		}
		else
		{
			//_this.topicTitleText.frame = 0;
			//_this.AforApple11_1ScreenTxt.frame = 0;
			//_this.AforApple11_2ScreenTxt.frame = 0;
		}
		
		
		//_this.AforApple11_2Screen.visible = false;
		//_this.AforApple11_2ScreenTxt.visible = false;
		
		_this.MultiplicationTableGroup.add(_this.topicTxtBg);
		_this.MultiplicationTableGroup.add(_this.topicTitleText);
		_this.MultiplicationTableGroup.add(_this.topicBg);
		_this.MultiplicationTableGroup.add(_this.multiplication12_1Screen);
		_this.MultiplicationTableGroup.add(_this.multiplication12_1ScreenTxt);
		_this.MultiplicationTableGroup.add(_this.multiplication12_2Screen);
		_this.MultiplicationTableGroup.add(_this.multiplication12_2ScreenTxt);
		_this.MultiplicationTableGroup.add(_this.multiplication12_3_2Screen);
		_this.MultiplicationTableGroup.add(_this.multiplication12_3_2ScreenTxt);
		_this.MultiplicationTableGroup.add(_this.multiplication12_3_3Screen);
		_this.MultiplicationTableGroup.add(_this.multiplication12_3_3ScreenTxt);
		_this.MultiplicationTableGroup.add(_this.multiplication13_1Screen);
		_this.MultiplicationTableGroup.add(_this.multiplication13_1ScreenTxt);
		_this.MultiplicationTableGroup.add(_this.multiplication14_1Screen);
		_this.MultiplicationTableGroup.add(_this.multiplication14_1ScreenTxt);
		_this.MultiplicationTableGroup.add(_this.multiplication14_2Screen);
		_this.MultiplicationTableGroup.add(_this.multiplication14_2ScreennTxt);

		
	},

	multiplicationGrid:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,230,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(215,83,'MULTIPLICATION');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(215, 85, ' \n '+window.selctedLang.multiplicationTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.multiplication13_1Screen = _this.add.sprite(100,120,'unity13_1');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.multiplication13_1ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.Mulitiplication13_1+' \n ');
		_this.multiplication13_1ScreenTxt.anchor.setTo(0.5);
		_this.multiplication13_1ScreenTxt.align = 'center';
		
				
		_this.multiplication13_1ScreenTxt.font = 'gradefont';
		_this.multiplication13_1ScreenTxt.fontSize = 20;
		_this.multiplication13_1ScreenTxt.fontWeight = 'normal';
		_this.multiplication13_1ScreenTxt.fill = 'white';

		_this.multiplication13_1ScreenTxt.wordWrap = true;
		_this.multiplication13_1ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication13_1Screen.inputEnabled = true;
		_this.multiplication13_1Screen.input.useHandCursor = true;
		_this.multiplication13_1Screen.name = "Fractions 1.1 A";
		_this.multiplication13_1Screen.events.onInputDown.add(function(target){

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					
					
					_this.state.start('unity13_1level1',true,false);
					
				}
			},_this);
			
		},_this);

		
		
		
		
		_this.multiplicationGridGroup.add(_this.topicTxtBg);
		_this.multiplicationGridGroup.add(_this.topicTitleText);
		_this.multiplicationGridGroup.add(_this.topicBg);
		_this.multiplicationGridGroup.add(_this.multiplication13_1Screen);
		_this.multiplicationGridGroup.add(_this.multiplication13_1ScreenTxt);
		
		
	},

	multiplicationGrid2:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,230,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(215,83,'MULTIPLICATION');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(215, 85, ' \n '+window.selctedLang.multiplicationTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.multiplication14_1Screen = _this.add.sprite(100,120,'unity14_1');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.multiplication14_1ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.Mulitiplication14_1+' \n ');
		_this.multiplication14_1ScreenTxt.anchor.setTo(0.5);
		_this.multiplication14_1ScreenTxt.align = 'center';
		
				
		_this.multiplication14_1ScreenTxt.font = 'gradefont';
		_this.multiplication14_1ScreenTxt.fontSize = 20;
		_this.multiplication14_1ScreenTxt.fontWeight = 'normal';
		_this.multiplication14_1ScreenTxt.fill = 'white';

		_this.multiplication14_1ScreenTxt.wordWrap = true;
		_this.multiplication14_1ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication14_1Screen.inputEnabled = true;
		_this.multiplication14_1Screen.input.useHandCursor = true;
		_this.multiplication14_1Screen.name = "Fractions 1.1 A";
		_this.multiplication14_1Screen.events.onInputDown.add(function(target){

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					
					
					_this.state.start('unity14_1level1',true,false);
					
				}
			},_this);
			
		},_this);


		_this.multiplication14_2Screen = _this.add.sprite(300,120,'unity14_2');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.multiplication14_2ScreennTxt = this.add.text(375, 265, ' \n '+window.selctedLang.Mulitiplication14_2+' \n ');
		_this.multiplication14_2ScreennTxt.anchor.setTo(0.5);
		_this.multiplication14_2ScreennTxt.align = 'center';
		
				
		_this.multiplication14_2ScreennTxt.font = 'gradefont';
		_this.multiplication14_2ScreennTxt.fontSize = 20;
		_this.multiplication14_2ScreennTxt.fontWeight = 'normal';
		_this.multiplication14_2ScreennTxt.fill = 'white';

		_this.multiplication14_2ScreennTxt.wordWrap = true;
		_this.multiplication14_2ScreennTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.multiplication14_2Screen.inputEnabled = true;
		_this.multiplication14_2Screen.input.useHandCursor = true;
		_this.multiplication14_2Screen.name = "Fractions 1.1 A";
		_this.multiplication14_2Screen.events.onInputDown.add(function(target){

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					
					
					_this.state.start('unity14_2level1',true,false);
					
				}
			},_this);
			
		},_this);

		
		
		
		
		_this.multiplicationGridGroup2.add(_this.topicTxtBg);
		_this.multiplicationGridGroup2.add(_this.topicTitleText);
		_this.multiplicationGridGroup2.add(_this.topicBg);
		_this.multiplicationGridGroup2.add(_this.multiplication14_1Screen);
		_this.multiplicationGridGroup2.add(_this.multiplication14_1ScreenTxt);
		_this.multiplicationGridGroup2.add(_this.multiplication14_2Screen);
		_this.multiplicationGridGroup2.add(_this.multiplication14_2ScreennTxt);
		
		
	},

	DivisionPart2:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,200,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		//_this.topicTitleText = _this.add.sprite(195,83,'DIVISION');
		//_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText = this.add.text(200, 85, ' \n '+window.selctedLang.divisionTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0x139487, 1);
		_this.topicBg.drawRoundedRect(0,0,805,400,30);
		_this.topicBg.boundsPadding = 0;



		_this.Division16_1Screen = _this.add.sprite(100,120,'unity16_1');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		//_this.Division16_1ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.FishInATank15_1+' \n ');
		_this.Division16_1ScreenTxt = this.add.text(175, 265, '1');
		_this.Division16_1ScreenTxt.anchor.setTo(0.5);
		_this.Division16_1ScreenTxt.align = 'center';
		
				
		_this.Division16_1ScreenTxt.font = 'gradefont';
		_this.Division16_1ScreenTxt.fontSize = 20;
		_this.Division16_1ScreenTxt.fontWeight = 'normal';
		_this.Division16_1ScreenTxt.fill = 'white';

		_this.Division16_1ScreenTxt.wordWrap = true;
		_this.Division16_1ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Division16_1Screen.inputEnabled = true;
		_this.Division16_1Screen.input.useHandCursor = true;
		_this.Division16_1Screen.name = "Fractions 1.1 A";
		_this.Division16_1Screen.events.onInputDown.add(function(target){

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					
					
					_this.state.start('unity16_1level1',true,false);

				}
			},_this);
			
		},_this);


		_this.Division16_2Screen = _this.add.sprite(300,120,'unity16_2');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		//_this.Division16_2ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.FishInATank15_1+' \n ');
		_this.Division16_2ScreenTxt = this.add.text(375, 265, '2');
		_this.Division16_2ScreenTxt.anchor.setTo(0.5);
		_this.Division16_2ScreenTxt.align = 'center';
		
				
		_this.Division16_2ScreenTxt.font = 'gradefont';
		_this.Division16_2ScreenTxt.fontSize = 20;
		_this.Division16_2ScreenTxt.fontWeight = 'normal';
		_this.Division16_2ScreenTxt.fill = 'white';

		_this.Division16_2ScreenTxt.wordWrap = true;
		_this.Division16_2ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Division16_2Screen.inputEnabled = true;
		_this.Division16_2Screen.input.useHandCursor = true;
		_this.Division16_2Screen.name = "Fractions 1.1 A";
		_this.Division16_2Screen.events.onInputDown.add(function(target){

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					
					
					_this.state.start('unity16_2level1',true,false);

				}
			},_this);
			
		},_this);


		_this.Division16_3Screen = _this.add.sprite(500,120,'unity16_3');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		//_this.Division16_2ScreenTxt = this.add.text(175, 265, ' \n '+window.selctedLang.FishInATank15_1+' \n ');
		_this.Division16_3ScreenTxt = this.add.text(575, 265, '3');
		_this.Division16_3ScreenTxt.anchor.setTo(0.5);
		_this.Division16_3ScreenTxt.align = 'center';
		
				
		_this.Division16_3ScreenTxt.font = 'gradefont';
		_this.Division16_3ScreenTxt.fontSize = 20;
		_this.Division16_3ScreenTxt.fontWeight = 'normal';
		_this.Division16_3ScreenTxt.fill = 'white';

		_this.Division16_3ScreenTxt.wordWrap = true;
		_this.Division16_3ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.Division16_3Screen.inputEnabled = true;
		_this.Division16_3Screen.input.useHandCursor = true;
		_this.Division16_3Screen.name = "Fractions 1.1 A";
		_this.Division16_3Screen.events.onInputDown.add(function(target){

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					
					
					_this.state.start('unity16_3level1',true,false);

				}
			},_this);
			
		},_this);


		
		_this.division17_2Screen = _this.add.sprite(700,120,'unity17.2');
		//_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		//_this.division17_2ScreenTxt.anchor.setTo(0.5);

		_this.division17_2ScreenTxt = this.add.text(775, 265, '4');
		_this.division17_2ScreenTxt.anchor.setTo(0.5);
		_this.division17_2ScreenTxt.align = 'center';
		
				
		_this.division17_2ScreenTxt.font = 'gradefont';
		_this.division17_2ScreenTxt.fontSize = 20;
		_this.division17_2ScreenTxt.fontWeight = 'normal';
		_this.division17_2ScreenTxt.fill = 'white';

		_this.division17_2ScreenTxt.wordWrap = true;
		_this.division17_2ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.division17_2Screen.inputEnabled = true;
		_this.division17_2Screen.input.useHandCursor = true;
		_this.division17_2Screen.name = "Fractions 1.1 A";
		_this.division17_2Screen.events.onInputDown.add(function(target){

			if(this.video5 == null)
			{
				this.video5 = this.add.video('demo7_1_1');
				//this.video5.addToWorld();
			}

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					this.video5.play(false);
					this.video5.changeSource(window.baseUrl+"assets/demoVideos/17_2.mp4");
					this.video5.addToWorld();
					this.video5.play(false);

					//this.game.input.enabled = false;
					/**************************Play Demo VO And Skip Demo *****************************/
					this.video5.playbackRate = 1;    // slow down the video
					_this.time.events.add(2000, function(){
						_this.playDemoVideos('17_2a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video5.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity17_2level1',true,false);
							},_this);
						_this.time.events.add(15000, function(){
							_this.playDemoVideos('17_2b');
						},_this);
						_this.time.events.add(39000, function(){
							_this.playDemoVideos('17_2c');
						},_this);
					},_this);
					
					/***********************************************************/
					//this.video5.play(false);
					this.video5.onComplete.add(function(){
					
					this.game.input.enabled = true;
						_this.state.start('unity17_2level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);

		_this.division17_3Screen = _this.add.sprite(100,320,'unity17.2');
		//_this.division17_3ScreenTxt = _this.add.sprite(365,250,'Coin Machine');
		//_this.division17_3ScreenTxt.anchor.setTo(0.5);

		_this.division17_3ScreenTxt = this.add.text(175, 465, '5');
		_this.division17_3ScreenTxt.anchor.setTo(0.5);
		_this.division17_3ScreenTxt.align = 'center';
		
				
		_this.division17_3ScreenTxt.font = 'gradefont';
		_this.division17_3ScreenTxt.fontSize = 20;
		_this.division17_3ScreenTxt.fontWeight = 'normal';
		_this.division17_3ScreenTxt.fill = 'white';

		_this.division17_3ScreenTxt.wordWrap = true;
		_this.division17_3ScreenTxt.wordWrapWidth = 500;
		//_this.division17_2ScreenTxt.setTextBounds(0,0,500,500);
		//_this.division17_2ScreenTxt.padding.set(50, 50);
		
		
		//_this.division17_2ScreenTxt.useAdvancedWrap  = true;
		

		//_this.division17_2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.division17_3Screen.inputEnabled = true;
		_this.division17_3Screen.input.useHandCursor = true;
		_this.division17_3Screen.name = "Fractions 1.1 A";
		_this.division17_3Screen.events.onInputDown.add(function(target){

			if(this.video6 == null)
			{
				this.video6 = this.add.video('demo7_1_1');
				//this.video6.addToWorld();
			}

			
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity8_1",1);

					this.video6.play(false);
					this.video6.changeSource(window.baseUrl+"assets/demoVideos/17_3.mp4");
					this.video6.addToWorld();
					this.video6.play(false);

					//this.game.input.enabled = false;
					
					/**************************Play Demo VO And Skip Demo *****************************/
					this.video6.playbackRate = 0.8;    // slow down the video
					_this.time.events.add(1000, function(){
						_this.playDemoVideos('17_3a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video6.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity17_2level1',true,false);
							},_this);
						_this.time.events.add(8000, function(){
							_this.playDemoVideos('17_3b');
						},_this);
						_this.time.events.add(22000, function(){
							_this.playDemoVideos('17_3c');
						},_this);
						_this.time.events.add(29000, function(){
							_this.playDemoVideos('17_3d');
						},_this);
					},_this);
					
					/***********************************************************/
					
					//this.video6.play(false);
					this.video6.onComplete.add(function(){
					
					this.game.input.enabled = true;
					
						_this.state.start('unity17_3level1',true,false);
					},_this);
				}
			},_this);
			
		},_this);


		/*if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.division17_2ScreenTxt.frame = 1;
			//_this.division17_3ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.division17_2ScreenTxt.frame = 2;
			//_this.division17_3ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.division17_2ScreenTxt.frame = 0;
			//_this.division17_3ScreenTxt.frame = 0;
		}
		*/
		
		
		
		_this.DivisionPart2Group.add(_this.topicTxtBg);
		_this.DivisionPart2Group.add(_this.topicTitleText);
		_this.DivisionPart2Group.add(_this.topicBg);
		_this.DivisionPart2Group.add(_this.Division16_1Screen);
		_this.DivisionPart2Group.add(_this.Division16_1ScreenTxt);
		_this.DivisionPart2Group.add(_this.Division16_2Screen);
		_this.DivisionPart2Group.add(_this.Division16_2ScreenTxt);
		_this.DivisionPart2Group.add(_this.Division16_3Screen);
		_this.DivisionPart2Group.add(_this.Division16_3ScreenTxt);
		_this.DivisionPart2Group.add(_this.division17_2Screen);
		_this.DivisionPart2Group.add(_this.division17_2ScreenTxt);
		_this.DivisionPart2Group.add(_this.division17_3Screen);
		_this.DivisionPart2Group.add(_this.division17_3ScreenTxt);
		
	},
	 playDemoVideos:function(target){
		// console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(target)
        {
            case '3_2_2':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "questionSounds/3.2.1/English/Game 3.1.2.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "questionSounds/3.2.1/Hindi/Game 3.1.2.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "questionSounds/3.2.1/Kannada/Game 3.1.2.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "questionSounds/3.2.1/Odiya/3.2.2.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
            case '7_1_3a': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 7.1.3a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 7.1.3a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 7.1.3a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/7.1.3a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '7_1_3b': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 7.1.3b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 7.1.3b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 7.1.3b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/7.1.3b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '7_1_3c': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 7.1.3c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 7.1.3c.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 7.1.3c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/7.1.3c.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
            case '7_2_3a': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 7.2.3a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 7.2.3a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 7.2.3a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/7.2.3a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '7_2_3b': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 7.2.3b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 7.2.3b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 7.2.3b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/7.2.3b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '7_2_3c': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 7.2.3c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 7.2.3c.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 7.2.3c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/7.2.3c.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '7_2_3d': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 7.2.3d.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 7.2.3d.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 7.2.3d.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/7.2.3d.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
            case '10_1_3a': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 10.1.3a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 10.1.3a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 10.1.3a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/10.1.3a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '10_1_3b': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 10.1.3b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 10.1.3b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 10.1.3b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/10.1.3b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '10_1_3c': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 10.1.3c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 10.1.3c.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 10.1.3c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/10.1.3c.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
            case '10_2_3a':if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 10.2.3a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 10.2.3a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 10.2.3a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/10.2.3a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '10_2_3b':if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 10.2.3b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 10.2.3b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 10.2.3b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/10.2.3b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '10_2_3c':if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 10.2.3c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 10.2.3c.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 10.2.3c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/10.2.3c.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '10_2_3d':if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 10.2.3d.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 10.2.3d.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 10.2.3d.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/10.2.3d.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
            case '17_2a':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 17.2a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 17.2a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 17.2a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/17.2a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '17_2b':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 17.2b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 17.2b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 17.2b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/17.2b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '17_2c':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 17.2c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 17.2c.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 17.2c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/17.2c.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
            case '17_3a': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 17.3a.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 17.3a.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 17.3a.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/17.3a.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
		    case '17_3b': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 17.3b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 17.3b.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 17.3b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/17.3b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '17_3c': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 17.3c.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 17.3c.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 17.3c.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/17.3c.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			case '17_3d': if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/English/Game 17.3d.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Hindi/Game 17.3d.mp3");
							}
							else if(window.languageSelected == "Kannada")
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Kannada/Game 17.3d.mp3");
							}
							else
							{
								_this.src.setAttribute("src", "assets/DemoVOs/Odiya/17.3d.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;

                
             }
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
	
		
	amplifyMedia:function(mediaElem, multiplier) {
		  var context = new (window.AudioContext || window.webkitAudioContext),
		      result = {
		        context: context,
		        source: context.createMediaElementSource(mediaElem),
		        gain: context.createGain(),
		        media: mediaElem,
		        amplify: function(multiplier) { result.gain.gain.value = multiplier; },
		        getAmpLevel: function() { return result.gain.gain.value; }
		      };
		  result.source.connect(result.gain);
		  result.gain.connect(context.destination);
		  result.amplify(multiplier);

		  return result;
	},
	
	stopDemoVoice:function(){
            if(_this.playQuestionSound)
		   {
			if(_this.playQuestionSound.contains(_this.src))
			{
				_this.playQuestionSound.removeChild(_this.src);
				_this.src = null;
			}
			if(!_this.playQuestionSound.paused)
			{
				_this.playQuestionSound.pause();
				_this.playQuestionSound.currentTime = 0.0;
			}
			_this.playQuestionSound = null;
			_this.src = null;
		}
	},
	
	shutdown:function()
	{
		if(_this.mc)
		{
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:false });
		}
		document.removeEventListener("online", _this.syncTelFunc, false);
		
		if(this.video)
		{
			this.video.destroy();
			this.video.removeVideoElement();
			this.video = null;
		}
		
		if(this.video1)
		{
			this.video1.destroy();
			this.video1.removeVideoElement();
			this.video1 = null;
		}
		if(this.video2)
		{
			this.video2.destroy();
			this.video2.removeVideoElement();
			this.video2 = null;
		}
		if(this.video3)
		{
			this.video3.destroy();
			this.video3.removeVideoElement();
			this.video3 = null;
		}
		if(this.video4)
		{
			this.video4.destroy();
			this.video4.removeVideoElement();
			this.video4 = null;
		}
		if(this.video5)
		{
			this.video5.destroy();
			this.video5.removeVideoElement();
			this.video5 = null;
		}
		if(this.video6)
		{
			this.video6.destroy();
			this.video6.removeVideoElement();
			this.video6 = null;
		}
		
		
		
		/*_this.clickSound = null;
		_this.mc = null;
		//_this = null;
		_this.tween = null;
		_this.tap = null;
		_this.background = null;
		_this.gradeBackBtn = null;
		_this.grade3FractionGroup = null;
		_this.grade3LengthGroup = null;
		_this.grade3WeightGroup = null;
		_this.graphicsBg = null;
		_this.mask = null;
		_this.swipeUpFlag = null;
		_this.swipeDownFlag = null;
		_this.page = null; 
		_this.input.onDown.removeAll();
		_this.input.onTap.removeAll();
		_this.time.events.removeAll();
		
		_this.topicTxtBg = null;
		_this.topicTitleText = null;
		_this.topicBg = null;
		
		_this.fractions1_1AScreen.events.onInputDown.removeAll();
		_this.fractions1_1AScreen = null;
		_this.fractions1_1AScreenTxt = null;
		
		_this.length2_1AScreen.events.onInputDown.removeAll();
		_this.length2_1AScreen = null;
		_this.length2_1AScreenTxt = null;
		
		_this.length2_1BScreen.events.onInputDown.removeAll();
		_this.length2_1BScreen = null;
		_this.length2_1BScreenTxt = null;
		
		_this.length2_2Screen.events.onInputDown.removeAll();
		_this.length2_2Screen = null;
		_this.length2_2ScreenTxt = null;
		
		_this.length2_3Screen.events.onInputDown.removeAll();
		_this.length2_3Screen = null;
		_this.length2_3ScreenTxt = null;
		
		_this.weight3_1Screen.events.onInputDown.removeAll();
		_this.weight3_1Screen = null;
		_this.weight3_1ScreenTxt = null;
		
		_this.weight3_2AScreen.events.onInputDown.removeAll();
		_this.weight3_2AScreen = null;
		_this.weight3_2AScreenTxt = null;
		
		console.log(_this.world);

		_this = null;*/

		/*_this.world.onChildInputDown.removeAll();
        _this.world.removeChildren(0, _this.world.length);

		_this = null;*/
	}
	
};