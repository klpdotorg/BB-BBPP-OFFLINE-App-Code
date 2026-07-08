Game.grade4Shapes=function(game){
	
};

Game.grade4Shapes.prototype={

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

		 nativeApp.screenViewStringPass("Practice_activity_list","grade4ShapeScreen");
		
		_this = this;

		this.game.input.enabled = false;

		 grade1ShapesSenseSelected = false;
		 grade2ShapesSenseSelected = false;
		 grade3ShapesSenseSelected = false;
		 grade4ShapesSenseSelected = true;
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

		 grade4MeasurementSelected = false;
		 grade4NumberSenseSelected = false;
		 grade5NumberSenseSelected = false;


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

            grade4ShapesSenseSelected = false;
			
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
		
		
		_this.spatialRelationshipGroup = _this.add.group();
		
		
		
		
		_this.spatialRelationshipTopic();
		

		_this.spatialRelationshipGroup.x = 0;
		_this.spatialRelationshipGroup.y = 0;

	
		
		
		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xD957A0, 0);
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
		
	
		_this.graphicsBg.addChild(_this.spatialRelationshipGroup);
		
		
		
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
				/*_this.graphicsBg.inputEnabled = true;
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
					else if(_this.graphicsBg.y<=-1570)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -1570;
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
						else if(_this.graphicsBg.y<=-1570)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -1570;
						}
					
				},_this);*/

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

		
		/*if(gradeScreen)
		{
			_this.graphicsBg.y = -1570;

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
		}*/
		this.game.input.enabled = true;
	},
	
	
	spatialRelationshipTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xE05225, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,250,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		_this.topicTitleText = this.add.text(220, 85, ' \n '+window.selctedLang.McTopicText3+' \n ');
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
		_this.topicBg.beginFill(0xE05225, 1);
		_this.topicBg.drawRoundedRect(0,0,805,400,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.spatialRelationship1 = _this.add.sprite(100,120,'shape 16.1.4');
		
		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.spatialRelationship1Txt = this.add.text(225, 192, ' \n 1 \n ');
		_this.spatialRelationship1Txt.anchor.setTo(0.5);
		_this.spatialRelationship1Txt.align = 'center';
		
				
		_this.spatialRelationship1Txt.font = 'gradefont';
		_this.spatialRelationship1Txt.fontSize = 20;
		_this.spatialRelationship1Txt.fontWeight = 'normal';
		_this.spatialRelationship1Txt.fill = 'white';

		_this.spatialRelationship1Txt.wordWrap = true;
		_this.spatialRelationship1Txt.wordWrapWidth = 500;
		

		_this.spatialRelationship1.inputEnabled = true;
		_this.spatialRelationship1.input.useHandCursor = true;
		_this.spatialRelationship1.name = "Fractions 1.1 A";
		_this.spatialRelationship1.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					
					_this.state.start('sg16_1_4level1',true,false);
				}
			},_this);
			
		},_this);

		
		_this.spatialRelationship2 = _this.add.sprite(300,120,'shape 16.2.4');
		//_this.fractions1_2AScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2AScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic2 = this.add.graphics(410,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;

		_this.spatialRelationship2Txt = this.add.text(425, 192, ' \n 2 \n ');
		_this.spatialRelationship2Txt.anchor.setTo(0.5);
		_this.spatialRelationship2Txt.align = 'center';
		
				
		_this.spatialRelationship2Txt.font = 'gradefont';
		_this.spatialRelationship2Txt.fontSize = 20;
		_this.spatialRelationship2Txt.fontWeight = 'normal';
		_this.spatialRelationship2Txt.fill = 'white';

		_this.spatialRelationship2Txt.wordWrap = true;
		_this.spatialRelationship2Txt.wordWrapWidth = 500;
		//_this.fractions1_2AScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2AScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2AScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship2.inputEnabled = true;
		_this.spatialRelationship2.input.useHandCursor = true;
		_this.spatialRelationship2.name = "Fractions 1.1 A";
		_this.spatialRelationship2.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					
					_this.state.start('sg16_2_4level1',true,false);
				}
			},_this);
			
		},_this);

		_this.spatialRelationship3 = _this.add.sprite(500,120,'shape 17.1.4');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic3 = this.add.graphics(610,175);
		_this.bgGraphic3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic3.beginFill(0x493A19, 1);
		_this.bgGraphic3.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic3.boundsPadding = 0;

		_this.spatialRelationship3Txt = this.add.text(625, 192, ' \n 3 \n ');
		_this.spatialRelationship3Txt.anchor.setTo(0.5);
		_this.spatialRelationship3Txt.align = 'center';
		
				
		_this.spatialRelationship3Txt.font = 'gradefont';
		_this.spatialRelationship3Txt.fontSize = 20;
		_this.spatialRelationship3Txt.fontWeight = 'normal';
		_this.spatialRelationship3Txt.fill = 'white';

		_this.spatialRelationship3Txt.wordWrap = true;
		_this.spatialRelationship3Txt.wordWrapWidth = 500;
		//_this.fractions1_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship3.inputEnabled = true;
		_this.spatialRelationship3.input.useHandCursor = true;
		_this.spatialRelationship3.name = "Fractions 1.1 A";
		_this.spatialRelationship3.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					
					_this.state.start('sg17_1_4level1',true,false);
				}
			},_this);
			
		},_this);


		_this.spatialRelationship4 = _this.add.sprite(700,120,'shape 20.1.4');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic4 = this.add.graphics(810,175);
		_this.bgGraphic4.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic4.beginFill(0x493A19, 1);
		_this.bgGraphic4.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic4.boundsPadding = 0;

		_this.spatialRelationship4Txt = this.add.text(825, 192, ' \n 4 \n ');
		_this.spatialRelationship4Txt.anchor.setTo(0.5);
		_this.spatialRelationship4Txt.align = 'center';
		
				
		_this.spatialRelationship4Txt.font = 'gradefont';
		_this.spatialRelationship4Txt.fontSize = 20;
		_this.spatialRelationship4Txt.fontWeight = 'normal';
		_this.spatialRelationship4Txt.fill = 'white';

		_this.spatialRelationship4Txt.wordWrap = true;
		_this.spatialRelationship4Txt.wordWrapWidth = 500;
		//_this.fractions1_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship4.inputEnabled = true;
		_this.spatialRelationship4.input.useHandCursor = true;
		_this.spatialRelationship4.name = "Fractions 1.1 A";
		_this.spatialRelationship4.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					
					_this.state.start('sg20_1_4level1',true,false);
				}
			},_this);
			
		},_this);


		_this.spatialRelationship5 = _this.add.sprite(100,320,'shape 20.2.4');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic5 = this.add.graphics(210,375);
		_this.bgGraphic5.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic5.beginFill(0x493A19, 1);
		_this.bgGraphic5.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic5.boundsPadding = 0;

		_this.spatialRelationship5Txt = this.add.text(225, 392, ' \n 5 \n ');
		_this.spatialRelationship5Txt.anchor.setTo(0.5);
		_this.spatialRelationship5Txt.align = 'center';
		
				
		_this.spatialRelationship5Txt.font = 'gradefont';
		_this.spatialRelationship5Txt.fontSize = 20;
		_this.spatialRelationship5Txt.fontWeight = 'normal';
		_this.spatialRelationship5Txt.fill = 'white';

		_this.spatialRelationship5Txt.wordWrap = true;
		_this.spatialRelationship5Txt.wordWrapWidth = 500;
		//_this.fractions1_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship5.inputEnabled = true;
		_this.spatialRelationship5.input.useHandCursor = true;
		_this.spatialRelationship5.name = "Fractions 1.1 A";
		_this.spatialRelationship5.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					
					_this.state.start('sg20_2_4level1',true,false);
				}
			},_this);
			
		},_this);

		_this.spatialRelationship6 = _this.add.sprite(300,320,'shape 24.1.4');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic6 = this.add.graphics(410,375);
		_this.bgGraphic6.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic6.beginFill(0x493A19, 1);
		_this.bgGraphic6.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic6.boundsPadding = 0;

		_this.spatialRelationship6Txt = this.add.text(425, 392, ' \n 6 \n ');
		_this.spatialRelationship6Txt.anchor.setTo(0.5);
		_this.spatialRelationship6Txt.align = 'center';
		
				
		_this.spatialRelationship6Txt.font = 'gradefont';
		_this.spatialRelationship6Txt.fontSize = 20;
		_this.spatialRelationship6Txt.fontWeight = 'normal';
		_this.spatialRelationship6Txt.fill = 'white';

		_this.spatialRelationship6Txt.wordWrap = true;
		_this.spatialRelationship6Txt.wordWrapWidth = 500;
		//_this.fractions1_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship6.inputEnabled = true;
		_this.spatialRelationship6.input.useHandCursor = true;
		_this.spatialRelationship6.name = "Fractions 1.1 A";
		_this.spatialRelationship6.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					
					_this.state.start('sg24_1_4level1',true,false);
				}
			},_this);
			
		},_this);

		_this.spatialRelationship7 = _this.add.sprite(500,320,'shape 24.2.4');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic7 = this.add.graphics(610,375);
		_this.bgGraphic7.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic7.beginFill(0x493A19, 1);
		_this.bgGraphic7.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic7.boundsPadding = 0;

		_this.spatialRelationship7Txt = this.add.text(625, 392, ' \n 7 \n ');
		_this.spatialRelationship7Txt.anchor.setTo(0.5);
		_this.spatialRelationship7Txt.align = 'center';
		
				
		_this.spatialRelationship7Txt.font = 'gradefont';
		_this.spatialRelationship7Txt.fontSize = 20;
		_this.spatialRelationship7Txt.fontWeight = 'normal';
		_this.spatialRelationship7Txt.fill = 'white';

		_this.spatialRelationship7Txt.wordWrap = true;
		_this.spatialRelationship7Txt.wordWrapWidth = 500;
		//_this.fractions1_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.fractions1_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.fractions1_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.spatialRelationship7.inputEnabled = true;
		_this.spatialRelationship7.input.useHandCursor = true;
		_this.spatialRelationship7.name = "Fractions 1.1 A";
		_this.spatialRelationship7.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					
					_this.state.start('sg24_2_4level1',true,false);
				}
			},_this);
			
		},_this);

	
		
		
		_this.spatialRelationshipGroup.add(_this.topicTxtBg);
		_this.spatialRelationshipGroup.add(_this.topicTitleText);
		_this.spatialRelationshipGroup.add(_this.topicBg);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship1);
		_this.spatialRelationshipGroup.add(_this.bgGraphic1);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship1Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship2);
		_this.spatialRelationshipGroup.add(_this.bgGraphic2);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship2Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship3);
		_this.spatialRelationshipGroup.add(_this.bgGraphic3);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship3Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship4);
		_this.spatialRelationshipGroup.add(_this.bgGraphic4);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship4Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship5);
		_this.spatialRelationshipGroup.add(_this.bgGraphic5);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship5Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship6);
		_this.spatialRelationshipGroup.add(_this.bgGraphic6);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship6Txt);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship7);
		_this.spatialRelationshipGroup.add(_this.bgGraphic7);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship7Txt);

		
		
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