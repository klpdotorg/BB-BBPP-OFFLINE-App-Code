Game.grade4Measurement=function(game){
	
};

Game.grade4Measurement.prototype={

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

		nativeApp.screenViewStringPass("Practice_activity_list","grade4Measurement");

		//console.log(_this.world);

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
		 grade3NumberOperationSelected = false;
		 grade3MeasurementSelected = false;

		 grade4MeasurementSelected = true;
		 grade4NumberSenseSelected = false;
		 grade5NumberSenseSelected = false;
		 
		 this.video = null;
		
		_this.input.enabled = false;
		_this.tween = null;
		_this.tap = false;
		_this.scrollMinY = -650;
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
			grade4MeasurementSelected = false;
			_this.state.start('gradeSelectionScreen',true,false);
		},_this);


		this.gameModeShareBtn = game.add.image(920,18,'shareIcon');
        		this.gameModeShareBtn.anchor.setTo(0.5);
        		this.gameModeShareBtn.scale.setTo(0.75);
        		this.gameModeShareBtn.inputEnabled = true;
        		this.gameModeShareBtn.input.priorityID = 1;
        		this.gameModeShareBtn.input.useHandCursor = true;
        		this.gameModeShareBtn.events.onInputDown.add(function()
        		{
        			this.clickSound = this.add.audio('ClickSound');
                	this.clickSound.play();
        			//if(appConfig.cordova && !appConfig.browser)
        			//{
        				nativeApp.ShareApp();
        			//}

        		},this);
		
		
		_this.grade4VolumeGroup = _this.add.group();
		_this.grade4conversionGroup = _this.add.group();
		_this.grade4TimeGroup = _this.add.group();
		
		
		_this.addGrade4VolumeTopic();
		_this.addGrade4ConversionTopic();
		_this.addGrade4TimeTopic();
		

		_this.grade4VolumeGroup.x = 0;
		_this.grade4VolumeGroup.y = 0;
		
		_this.grade4conversionGroup.x = 0;
		_this.grade4conversionGroup.y = 650;

		_this.grade4TimeGroup.x = 0;
		_this.grade4TimeGroup.y = 900;
		
		
		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xD957A0, 0);
		_this.graphicsBg.drawRect(0,0,960,600);
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
		
	
		_this.graphicsBg.addChild(_this.grade4VolumeGroup);
		_this.graphicsBg.addChild(_this.grade4conversionGroup);
		_this.graphicsBg.addChild(_this.grade4TimeGroup);
		
		
		
		_this.swipeUpFlag = true;
		_this.swipeDownFlag = false;
		_this.page = document.getElementById("body"); 
		_this.mc = new Hammer(_this.page);
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:true });

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
						if(_this.graphicsBg.y<=_this.scrollMinY)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = _this.scrollMinY;
						}
						
						//game.input.enabled = true;
					}, _this);
					_this.tween.onUpdateCallback(function(){
						_this.tap = false;
						if(_this.graphicsBg.y<=_this.scrollMinY)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = _this.scrollMinY;
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
					else if(_this.graphicsBg.y<=_this.scrollMinY)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = _this.scrollMinY;
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
						else if(_this.graphicsBg.y<=_this.scrollMinY)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = _this.scrollMinY;
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
			_this.graphicsBg.y = _this.scrollMinY;

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
	
	
	addGrade4VolumeTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		//_this.topicTitleText = _this.add.sprite(200, 83, 'volumeTitleTxt');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(185, 85, ' \n '+window.selctedLang.volumeTitle+' \n ');
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
		//topicBg.drawRoundedRect(0,0,805,400,30);
		_this.topicBg.drawRoundedRect(0,0,850,600,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.volumes4_1AScreen = _this.add.sprite(100,120,'volumes4_1AScreen');
		//_this.volumes4_1AScreenTxt = _this.add.sprite(175, 250, 'volume4_1A');
		//_this.volumes4_1AScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.volumes4_1AScreenTxt = this.add.text(225, 192, ' \n 1 \n ');
		_this.volumes4_1AScreenTxt.anchor.setTo(0.5);
		_this.volumes4_1AScreenTxt.align = 'center';
		
				
		_this.volumes4_1AScreenTxt.font = 'gradefont';
		_this.volumes4_1AScreenTxt.fontSize = 20;
		_this.volumes4_1AScreenTxt.fontWeight = 'normal';
		_this.volumes4_1AScreenTxt.fill = 'white';

		_this.volumes4_1AScreenTxt.wordWrap = true;
		_this.volumes4_1AScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_1AScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_1AScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_1AScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_1AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		  
		  
		_this.volumes4_1AScreen.inputEnabled = true;
		  _this.volumes4_1AScreen.input.useHandCursor = true;
		  _this.volumes4_1AScreen.events.onInputDown.add(function(target){
			   _this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_1Alevel1',true,false);
				}
			},_this);
		   
		  },_this);
		
		_this.volumes4_1BScreen = _this.add.sprite(300,120,'volumes4_1BScreen');
		//_this.volumes4_1BScreenTxt = _this.add.sprite(375, 250, 'volume4_1B');
		//_this.volumes4_1BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic2 = this.add.graphics(410,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;

		_this.volumes4_1BScreenTxt = this.add.text(425, 192, ' \n 2 \n ');
		_this.volumes4_1BScreenTxt.anchor.setTo(0.5);
		_this.volumes4_1BScreenTxt.align = 'center';
		
				
		_this.volumes4_1BScreenTxt.font = 'gradefont';
		_this.volumes4_1BScreenTxt.fontSize = 20;
		_this.volumes4_1BScreenTxt.fontWeight = 'normal';
		_this.volumes4_1BScreenTxt.fill = 'white';

		_this.volumes4_1BScreenTxt.wordWrap = true;
		_this.volumes4_1BScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_1BScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_1BScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_1BScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_1BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.volumes4_1BScreen.inputEnabled = true;
		_this.volumes4_1BScreen.input.useHandCursor = true;
		_this.volumes4_1BScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_1Blevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.volumes4_1CScreen = _this.add.sprite(500,120,'volumes4_1CScreen');
		//_this.volumes4_1CScreenTxt = _this.add.sprite(575, 250, 'volume4_1C');
		//_this.volumes4_1CScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic3 = this.add.graphics(610,175);
		_this.bgGraphic3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic3.beginFill(0x493A19, 1);
		_this.bgGraphic3.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic3.boundsPadding = 0;

		_this.volumes4_1CScreenTxt = this.add.text(625, 192, ' \n 3 \n ');
		_this.volumes4_1CScreenTxt.anchor.setTo(0.5);
		_this.volumes4_1CScreenTxt.align = 'center';
		
				
		_this.volumes4_1CScreenTxt.font = 'gradefont';
		_this.volumes4_1CScreenTxt.fontSize = 20;
		_this.volumes4_1CScreenTxt.fontWeight = 'normal';
		_this.volumes4_1CScreenTxt.fill = 'white';

		_this.volumes4_1CScreenTxt.wordWrap = true;
		_this.volumes4_1CScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_1CScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_1CScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_1CScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_1CScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.volumes4_1CScreen.inputEnabled = true;
		_this.volumes4_1CScreen.input.useHandCursor = true;
		_this.volumes4_1CScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_1Clevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.volumes4_2AScreen = _this.add.sprite(700,120,'volumes4_2AScreen');
		//_this.volumes4_2AScreenTxt = _this.add.sprite(775, 250, 'volume4_2A');
		//_this.volumes4_2AScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic4 = this.add.graphics(810,175);
		_this.bgGraphic4.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic4.beginFill(0x493A19, 1);
		_this.bgGraphic4.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic4.boundsPadding = 0;

		_this.volumes4_2AScreenTxt = this.add.text(825, 192, ' \n 4 \n ');
		_this.volumes4_2AScreenTxt.anchor.setTo(0.5);
		_this.volumes4_2AScreenTxt.align = 'center';
		
				
		_this.volumes4_2AScreenTxt.font = 'gradefont';
		_this.volumes4_2AScreenTxt.fontSize = 20;
		_this.volumes4_2AScreenTxt.fontWeight = 'normal';
		_this.volumes4_2AScreenTxt.fill = 'white';

		_this.volumes4_2AScreenTxt.wordWrap = true;
		_this.volumes4_2AScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_2AScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_2AScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_2AScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_2AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.volumes4_2AScreen.inputEnabled = true;
		_this.volumes4_2AScreen.input.useHandCursor = true;
		_this.volumes4_2AScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_2Alevel1',true,false);
				}
			},_this);
			
		},_this);
		
		_this.volumes4_2BScreen = _this.add.sprite(100,320,'volumes4_2BScreen');
		//_this.volumes4_2BScreenTxt = _this.add.sprite(175, 450, 'volume4_2B');
		//_this.volumes4_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic5 = this.add.graphics(210,375);
		_this.bgGraphic5.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic5.beginFill(0x493A19, 1);
		_this.bgGraphic5.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic5.boundsPadding = 0;

		_this.volumes4_2BScreenTxt = this.add.text(225, 392, ' \n 5 \n ');
		_this.volumes4_2BScreenTxt.anchor.setTo(0.5);
		_this.volumes4_2BScreenTxt.align = 'center';
		
				
		_this.volumes4_2BScreenTxt.font = 'gradefont';
		_this.volumes4_2BScreenTxt.fontSize = 20;
		_this.volumes4_2BScreenTxt.fontWeight = 'normal';
		_this.volumes4_2BScreenTxt.fill = 'white';

		_this.volumes4_2BScreenTxt.wordWrap = true;
		_this.volumes4_2BScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.volumes4_2BScreen.inputEnabled = true;
		_this.volumes4_2BScreen.input.useHandCursor = true;
		_this.volumes4_2BScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_2Blevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.volumes4_2CScreen = _this.add.sprite(300,320,'volumes4_2CScreen');
		//_this.volumes4_2CScreenTxt = _this.add.sprite(375, 450, 'volume4_2C');
		//_this.volumes4_2CScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic6 = this.add.graphics(410,375);
		_this.bgGraphic6.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic6.beginFill(0x493A19, 1);
		_this.bgGraphic6.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic6.boundsPadding = 0;

		_this.volumes4_2CScreenTxt = this.add.text(425, 392, ' \n 6 \n ');
		_this.volumes4_2CScreenTxt.anchor.setTo(0.5);
		_this.volumes4_2CScreenTxt.align = 'center';
		
				
		_this.volumes4_2CScreenTxt.font = 'gradefont';
		_this.volumes4_2CScreenTxt.fontSize = 20;
		_this.volumes4_2CScreenTxt.fontWeight = 'normal';
		_this.volumes4_2CScreenTxt.fill = 'white';

		_this.volumes4_2CScreenTxt.wordWrap = true;
		_this.volumes4_2CScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_2CScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_2CScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_2CScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_2CScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.volumes4_2CScreen.inputEnabled = true;
		_this.volumes4_2CScreen.input.useHandCursor = true;
		_this.volumes4_2CScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_2Clevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.volumes4_3AScreen = _this.add.sprite(500,320,'volumes4_3AScreen');
		//_this.volumes4_3AScreenTxt = _this.add.sprite(575, 450, 'volume4_3A');
		//_this.volumes4_3AScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic7 = this.add.graphics(610,375);
		_this.bgGraphic7.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic7.beginFill(0x493A19, 1);
		_this.bgGraphic7.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic7.boundsPadding = 0;

		_this.volumes4_3AScreenTxt = this.add.text(625, 392, ' \n 7 \n ');
		_this.volumes4_3AScreenTxt.anchor.setTo(0.5);
		_this.volumes4_3AScreenTxt.align = 'center';
		
				
		_this.volumes4_3AScreenTxt.font = 'gradefont';
		_this.volumes4_3AScreenTxt.fontSize = 20;
		_this.volumes4_3AScreenTxt.fontWeight = 'normal';
		_this.volumes4_3AScreenTxt.fill = 'white';

		_this.volumes4_3AScreenTxt.wordWrap = true;
		_this.volumes4_3AScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_3AScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_3AScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_3AScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_3AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.volumes4_3AScreen.inputEnabled = true;
		_this.volumes4_3AScreen.input.useHandCursor = true;
		_this.volumes4_3AScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_3Alevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.volumes4_3BScreen = _this.add.sprite(700,320,'volumes4_3BScreen');
		//_this.volumes4_3BScreenTxt = _this.add.sprite(775, 450, 'volume4_3B');
		//_this.volumes4_3BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic8 = this.add.graphics(810,375);
		_this.bgGraphic8.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic8.beginFill(0x493A19, 1);
		_this.bgGraphic8.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic8.boundsPadding = 0;

		_this.volumes4_3BScreenTxt = this.add.text(825, 392, ' \n 8 \n ');
		_this.volumes4_3BScreenTxt.anchor.setTo(0.5);
		_this.volumes4_3BScreenTxt.align = 'center';
		
				
		_this.volumes4_3BScreenTxt.font = 'gradefont';
		_this.volumes4_3BScreenTxt.fontSize = 20;
		_this.volumes4_3BScreenTxt.fontWeight = 'normal';
		_this.volumes4_3BScreenTxt.fill = 'white';

		_this.volumes4_3BScreenTxt.wordWrap = true;
		_this.volumes4_3BScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_3BScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_3BScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_3BScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_3BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.volumes4_3BScreen.inputEnabled = true;
		_this.volumes4_3BScreen.input.useHandCursor = true;
		_this.volumes4_3BScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_3Blevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.volumes4_3CScreen = _this.add.sprite(100,520,'volumes4_3CScreen');
		//_this.volumes4_3CScreenTxt = _this.add.sprite(175, 650, 'volume4_3C');
		//_this.volumes4_3CScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic9 = this.add.graphics(210,575);
		_this.bgGraphic9.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic9.beginFill(0x493A19, 1);
		_this.bgGraphic9.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic9.boundsPadding = 0;

		_this.volumes4_3CScreenTxt = this.add.text(225, 592, ' \n 9 \n ');
		_this.volumes4_3CScreenTxt.anchor.setTo(0.5);
		_this.volumes4_3CScreenTxt.align = 'center';
		
				
		_this.volumes4_3CScreenTxt.font = 'gradefont';
		_this.volumes4_3CScreenTxt.fontSize = 20;
		_this.volumes4_3CScreenTxt.fontWeight = 'normal';
		_this.volumes4_3CScreenTxt.fill = 'white';

		_this.volumes4_3CScreenTxt.wordWrap = true;
		_this.volumes4_3CScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_3CScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_3CScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_3CScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_3CScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.volumes4_3CScreen.inputEnabled = true;
		_this.volumes4_3CScreen.input.useHandCursor = true;
		_this.volumes4_3CScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_3Clevel1',true,false);
				}
			},_this);
		},_this);


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.volumes4_1AScreenTxt.frame = 1;
			_this.volumes4_1BScreenTxt.frame = 1;
			_this.volumes4_1CScreenTxt.frame = 1;
			_this.volumes4_2AScreenTxt.frame = 1;
			_this.volumes4_2BScreenTxt.frame = 1;
			_this.volumes4_2CScreenTxt.frame = 1;
			_this.volumes4_3AScreenTxt.frame = 1;
			_this.volumes4_3BScreenTxt.frame = 1;
			_this.volumes4_3CScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.volumes4_1AScreenTxt.frame = 2;
			_this.volumes4_1BScreenTxt.frame = 2;
			_this.volumes4_1CScreenTxt.frame = 2;
			_this.volumes4_2AScreenTxt.frame = 2;
			_this.volumes4_2BScreenTxt.frame = 2;
			_this.volumes4_2CScreenTxt.frame = 2;
			_this.volumes4_3AScreenTxt.frame = 2;
			_this.volumes4_3BScreenTxt.frame = 2;
			_this.volumes4_3CScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.volumes4_1AScreenTxt.frame = 0;
			_this.volumes4_1BScreenTxt.frame = 0;
			_this.volumes4_1CScreenTxt.frame = 0;
			_this.volumes4_2AScreenTxt.frame = 0;
			_this.volumes4_2BScreenTxt.frame = 0;
			_this.volumes4_2CScreenTxt.frame = 0;
			_this.volumes4_3AScreenTxt.frame = 0;
			_this.volumes4_3BScreenTxt.frame = 0;
			_this.volumes4_3CScreenTxt.frame = 0;
		}
		
		_this.grade4VolumeGroup.add(_this.topicTxtBg);
		_this.grade4VolumeGroup.add(_this.topicTitleText);
		_this.grade4VolumeGroup.add(_this.topicBg);

		_this.grade4VolumeGroup.add(_this.volumes4_1AScreen);
		_this.grade4VolumeGroup.add(_this.bgGraphic1);
		_this.grade4VolumeGroup.add(_this.volumes4_1AScreenTxt);

		_this.grade4VolumeGroup.add(_this.volumes4_1BScreen);		
		_this.grade4VolumeGroup.add(_this.bgGraphic2);		
		_this.grade4VolumeGroup.add(_this.volumes4_1BScreenTxt);

		_this.grade4VolumeGroup.add(_this.volumes4_1CScreen);
		_this.grade4VolumeGroup.add(_this.bgGraphic3);
		_this.grade4VolumeGroup.add(_this.volumes4_1CScreenTxt);

		_this.grade4VolumeGroup.add(_this.volumes4_2AScreen);
		_this.grade4VolumeGroup.add(_this.bgGraphic4);
		_this.grade4VolumeGroup.add(_this.volumes4_2AScreenTxt);

		_this.grade4VolumeGroup.add(_this.volumes4_2BScreen);
		_this.grade4VolumeGroup.add(_this.bgGraphic5);
		_this.grade4VolumeGroup.add(_this.volumes4_2BScreenTxt);

		_this.grade4VolumeGroup.add(_this.volumes4_2CScreen);
		_this.grade4VolumeGroup.add(_this.bgGraphic6);
		_this.grade4VolumeGroup.add(_this.volumes4_2CScreenTxt);

		_this.grade4VolumeGroup.add(_this.volumes4_3AScreen);
		_this.grade4VolumeGroup.add(_this.bgGraphic7);
		_this.grade4VolumeGroup.add(_this.volumes4_3AScreenTxt);

		_this.grade4VolumeGroup.add(_this.volumes4_3BScreen);
		_this.grade4VolumeGroup.add(_this.bgGraphic8);
		_this.grade4VolumeGroup.add(_this.volumes4_3BScreenTxt);

		_this.grade4VolumeGroup.add(_this.volumes4_3CScreen);
		_this.grade4VolumeGroup.add(_this.bgGraphic9);
		_this.grade4VolumeGroup.add(_this.volumes4_3CScreenTxt);
		
	},
	
	addGrade4ConversionTopic:function()
	{
		
		
		_this.conversionText = "CONVERSION";
		
		if(window.languageSelected == "Hindi")
			_this.conversionText = "रूपांतरण";
		else if(window.languageSelected == "Kannada")
			_this.conversionText = "ಪರಿವರ್ತನೆ";
		else if(window.languageSelected == "Odiya")
			_this.conversionText = "ରୂପାନ୍ତର";
		else if(window.languageSelected == "Gujarati")
			_this.conversionText = "રૂપાંતર";
		else if(window.languageSelected == "Marathi")
			_this.conversionText = "रूपांतरण";
		else if(window.languageSelected == "Telugu")
			_this.conversionText = "మార్పిడి";
		else if(window.languageSelected == "Tamil")
			_this.conversionText = "மாற்றம்";
		else if(window.languageSelected == "Urdu")
			_this.conversionText = "تبادلوں";
		else 
			_this.conversionText = "CONVERSION";
		
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0x139487, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		//_this.topicTitleText = _this.add.sprite(200, 83, 'volumeTitleTxt');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(185, 85, ' \n '+_this.conversionText+' \n ');
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
		//topicBg.drawRoundedRect(0,0,805,400,30);
		_this.topicBg.drawRoundedRect(0,0,850,150,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.volumes4_1AScreen = _this.add.sprite(100,120,'conversion');
		//_this.volumes4_1AScreenTxt = _this.add.sprite(175, 250, 'volume4_1A');
		//_this.volumes4_1AScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.volumes4_1AScreenTxt = this.add.text(225, 192, ' \n 1 \n ');
		_this.volumes4_1AScreenTxt.anchor.setTo(0.5);
		_this.volumes4_1AScreenTxt.align = 'center';
		
				
		_this.volumes4_1AScreenTxt.font = 'gradefont';
		_this.volumes4_1AScreenTxt.fontSize = 20;
		_this.volumes4_1AScreenTxt.fontWeight = 'normal';
		_this.volumes4_1AScreenTxt.fill = 'white';

		_this.volumes4_1AScreenTxt.wordWrap = true;
		_this.volumes4_1AScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_1AScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_1AScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_1AScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_1AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		  
		  
		_this.volumes4_1AScreen.inputEnabled = true;
		  _this.volumes4_1AScreen.input.useHandCursor = true;
		  _this.volumes4_1AScreen.events.onInputDown.add(function(target){
			  
			  if(this.video==null)
			{	
				this.video = this.add.video('demo7_1_1');
				
			}
			   _this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video.play(false);
					
					this.video.changeSource(window.baseUrl+"assets/conversion/demoVideos/DHDCG1_4.mp4");
					
					this.video.addToWorld();
					
					this.video.play(false);
					//this.game.input.enabled = false;
					
					/**************************Play Demo VO And Skip Demo *****************************/
					//_this.playDemoVideos('7_1_1');
					this.video.playbackRate = 0.7;    // slow down the video
					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(803,423,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						//_this.stopDemoVoice();
						this.video.stop(false);
						this.game.input.enabled = true;
						_this.state.start('conversion',true,false);
						
					},_this);
					},_this);
					
					/***********************************************************/
					
					
					this.video.onComplete.add(function(){
					this.game.input.enabled = true;
					_this.state.start('conversion',true,false);

					//_this.state.start('unity7_1_1demo',true,false);
					},this);
				}
			},_this);
		   
		  },_this);
		
		
		
		_this.grade4conversionGroup.add(_this.topicTxtBg);
		_this.grade4conversionGroup.add(_this.topicTitleText);
		_this.grade4conversionGroup.add(_this.topicBg);
		_this.grade4conversionGroup.add(_this.volumes4_1AScreen);
		_this.grade4conversionGroup.add(_this.bgGraphic1);
		_this.grade4conversionGroup.add(_this.volumes4_1AScreenTxt);
		
	},
	addGrade4TimeTopic:function()
	{
		_this.timeText = "TIME";

		if(window.languageSelected == "Hindi")
			_this.timeText = "\u0938\u092e\u092f";
		else if(window.languageSelected == "Kannada")
			_this.timeText = "\u0cb8\u0cae\u0caf";
		else if(window.languageSelected == "Odiya")
			_this.timeText = "\u0b38\u0b2e\u0b5f";
		else if(window.languageSelected == "Gujarati")
			_this.timeText = "\u0ab8\u0aae\u0aaf";
		else if(window.languageSelected == "Marathi")
			_this.timeText = "\u0935\u0947\u0933";
		else if(window.languageSelected == "Telugu")
			_this.timeText = "\u0c38\u0c2e\u0c2f\u0c02";
		else if(window.languageSelected == "Tamil")
			_this.timeText = "\u0ba8\u0bc7\u0bb0\u0bae\u0bcd";
		else if(window.languageSelected == "Urdu")
			_this.timeText = "\u0648\u0642\u062a";
		else
			_this.timeText = "TIME";
		
		_this.timeTopicTxtBg = _this.add.graphics(100, 60);
		_this.timeTopicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.timeTopicTxtBg.beginFill(0x139487, 1);
		_this.timeTopicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.timeTopicTxtBg.boundsPadding = 0;

		_this.timeTopicTitleText = this.add.text(185, 85, ' \n '+_this.timeText+' \n ');
		_this.timeTopicTitleText.anchor.setTo(0.5);
		_this.timeTopicTitleText.align = 'center';
		_this.timeTopicTitleText.font = 'gradefont';
		_this.timeTopicTitleText.fontSize = 26;
		_this.timeTopicTitleText.fontWeight = 'normal';
		_this.timeTopicTitleText.fill = 'white';
		_this.timeTopicTitleText.wordWrap = true;
		_this.timeTopicTitleText.wordWrapWidth = 500;
		
		_this.timeTopicBg = _this.add.graphics(75, 100);
		_this.timeTopicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.timeTopicBg.beginFill(0x139487, 1);
		_this.timeTopicBg.drawRoundedRect(0,0,850,150,30);
		_this.timeTopicBg.boundsPadding = 0;

		_this.timeMT5_1Screen = _this.add.sprite(100,120,'Time-MT5-1-G5');
		_this.timeMT5_1Badge = this.add.graphics(210,175);
		_this.timeMT5_1Badge.lineStyle(0, 0xFFFFFF, 0.8);
		_this.timeMT5_1Badge.beginFill(0x493A19, 1);
		_this.timeMT5_1Badge.drawRoundedRect(0,0,30,30,10);
		_this.timeMT5_1Badge.boundsPadding = 0;
		_this.timeMT5_1Txt = this.add.text(225, 192, ' \n 1 \n ');
		_this.timeMT5_1Txt.anchor.setTo(0.5);
		_this.timeMT5_1Txt.align = 'center';
		_this.timeMT5_1Txt.font = 'gradefont';
		_this.timeMT5_1Txt.fontSize = 20;
		_this.timeMT5_1Txt.fontWeight = 'normal';
		_this.timeMT5_1Txt.fill = 'white';
		_this.timeMT5_1Txt.wordWrap = true;
		_this.timeMT5_1Txt.wordWrapWidth = 500;

		_this.timeMT5_2Screen = _this.add.sprite(300,120,'Time-MT5-2-G5');
		_this.timeMT5_2Badge = this.add.graphics(410,175);
		_this.timeMT5_2Badge.lineStyle(0, 0xFFFFFF, 0.8);
		_this.timeMT5_2Badge.beginFill(0x493A19, 1);
		_this.timeMT5_2Badge.drawRoundedRect(0,0,30,30,10);
		_this.timeMT5_2Badge.boundsPadding = 0;
		_this.timeMT5_2Txt = this.add.text(425, 192, ' \n 2 \n ');
		_this.timeMT5_2Txt.anchor.setTo(0.5);
		_this.timeMT5_2Txt.align = 'center';
		_this.timeMT5_2Txt.font = 'gradefont';
		_this.timeMT5_2Txt.fontSize = 20;
		_this.timeMT5_2Txt.fontWeight = 'normal';
		_this.timeMT5_2Txt.fill = 'white';
		_this.timeMT5_2Txt.wordWrap = true;
		_this.timeMT5_2Txt.wordWrapWidth = 500;

		_this.timeMT5_1Screen.inputEnabled = true;
		_this.timeMT5_1Screen.input.useHandCursor = true;
		_this.timeMT5_1Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('Time_MT5_1_G5level1',true,false);
				}
			},_this);
		},_this);

		_this.timeMT5_2Screen.inputEnabled = true;
		_this.timeMT5_2Screen.input.useHandCursor = true;
		_this.timeMT5_2Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('Time_MT5_2_G5level1',true,false);
				}
			},_this);
		},_this);

		_this.grade4TimeGroup.add(_this.timeTopicTxtBg);
		_this.grade4TimeGroup.add(_this.timeTopicTitleText);
		_this.grade4TimeGroup.add(_this.timeTopicBg);
		_this.grade4TimeGroup.add(_this.timeMT5_1Screen);
		_this.grade4TimeGroup.add(_this.timeMT5_1Badge);
		_this.grade4TimeGroup.add(_this.timeMT5_1Txt);
		_this.grade4TimeGroup.add(_this.timeMT5_2Screen);
		_this.grade4TimeGroup.add(_this.timeMT5_2Badge);
		_this.grade4TimeGroup.add(_this.timeMT5_2Txt);
	},
	addGrade1WeightTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xD957A0, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		_this.topicTitleText = _this.add.sprite(200,83,'weightTitleTxt');
		_this.topicTitleText.anchor.setTo(0.5);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xD957A0, 1);
		_this.topicBg.drawRoundedRect(0,0,200,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.weight3_1Screen = _this.add.sprite(100,120,'game3.1ScreenShot');
		_this.weight3_1ScreenTxt = _this.add.sprite(185, 255, 'weight3_1');
		_this.weight3_1ScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_1Screen.inputEnabled = true;
		_this.weight3_1Screen.input.useHandCursor = true;
		_this.weight3_1Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_1level1',true,false);
				}
			},_this);
		},_this);
		
		_this.weight3_2AScreen = _this.add.sprite(300,120,'game3.2AScreenShot');
		_this.weight3_2AScreenTxt = _this.add.sprite(385, 255, 'weight3_2A');
		_this.weight3_2AScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_2AScreen.inputEnabled = true;
		_this.weight3_2AScreen.input.useHandCursor = true;
		_this.weight3_2AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_2Alevel1',true,false);
				}
			},_this);
		},_this);


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.weight3_1ScreenTxt.frame = 1;
			_this.weight3_2AScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.weight3_1ScreenTxt.frame = 2;
			_this.weight3_2AScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.weight3_1ScreenTxt.frame = 0;
			_this.weight3_2AScreenTxt.frame = 0;
		}
		
		
		_this.grade1WeightGroup.add(_this.topicTxtBg);
		_this.grade1WeightGroup.add(_this.topicTitleText);
		_this.grade1WeightGroup.add(_this.topicBg);
		_this.grade1WeightGroup.add(_this.weight3_1Screen);
		_this.grade1WeightGroup.add(_this.weight3_1ScreenTxt);
		_this.grade1WeightGroup.add(_this.weight3_2AScreen);
		_this.grade1WeightGroup.add(_this.weight3_2AScreenTxt);
		
	},

	addGrade1TimeTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xD957A0, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		_this.topicTitleText = _this.add.sprite(200,83,'weightTitleTxt');
		_this.topicTitleText.anchor.setTo(0.5);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xD957A0, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.weight3_1Screen = _this.add.sprite(100,120,'game3.1ScreenShot');
		_this.weight3_1ScreenTxt = _this.add.sprite(185, 255, 'weight3_1');
		_this.weight3_1ScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_1Screen.inputEnabled = true;
		_this.weight3_1Screen.input.useHandCursor = true;
		_this.weight3_1Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_1level1',true,false);
				}
			},_this);
		},_this);
		
		_this.weight3_2AScreen = _this.add.sprite(300,120,'game3.2AScreenShot');
		_this.weight3_2AScreenTxt = _this.add.sprite(385, 255, 'weight3_2A');
		_this.weight3_2AScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_2AScreen.inputEnabled = true;
		_this.weight3_2AScreen.input.useHandCursor = true;
		_this.weight3_2AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_2Alevel1',true,false);
				}
			},_this);
		},_this);

		


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.weight3_1ScreenTxt.frame = 1;
			_this.weight3_2AScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.weight3_1ScreenTxt.frame = 2;
			_this.weight3_2AScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.weight3_1ScreenTxt.frame = 0;
			_this.weight3_2AScreenTxt.frame = 0;
		}
		
		
		_this.grade1TimeGroup.add(_this.topicTxtBg);
		_this.grade1TimeGroup.add(_this.topicTitleText);
		_this.grade1TimeGroup.add(_this.topicBg);
		_this.grade1TimeGroup.add(_this.weight3_1Screen);
		_this.grade1TimeGroup.add(_this.weight3_1ScreenTxt);
		_this.grade1TimeGroup.add(_this.weight3_2AScreen);
		_this.grade1TimeGroup.add(_this.weight3_2AScreenTxt);
		
	},
	
	shutdown:function()
	{
		if(_this.mc)
		{
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:false });
		}
		document.removeEventListener("online", _this.syncTelFunc, false);

	}
	
};
