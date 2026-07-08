Game.grade4NumberSense=function(game){
	
};

Game.grade4NumberSense.prototype={

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

		//nativeApp.screenViewStringPass("Practice_activity_list","grade4NumberScene");
		
		_this = this;

		this.game.input.enabled = false;
		this.video = null;
		this.video1 = null;
		this.video2 = null;

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

		 grade4NumberSenseSelected = true;
		 grade5NumberSenseSelected = false;
		 grade4MeasurementSelected = false;


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

            grade4NumberSenseSelected = false;
			
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
		_this.placeValueGroup = _this.add.group();
		_this.spatialRelationshipGroup2 = _this.add.group();
		
		
		
		
		_this.spatialRelationshipTopic();
		_this.placeValueTopic();
		_this.spatialRelationshipTopic2();

		_this.spatialRelationshipGroup.x = 0;
		_this.spatialRelationshipGroup.y = 0;

		_this.placeValueGroup.x = 0;
		_this.placeValueGroup.y = 250;

		_this.spatialRelationshipGroup2.x = 0;
		_this.spatialRelationshipGroup2.y = 500;
		
		
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
		_this.graphicsBg.addChild(_this.placeValueGroup);
		_this.graphicsBg.addChild(_this.spatialRelationshipGroup2);
		
		
		
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
						if(_this.graphicsBg.y<=-312)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -312;
						}
						
						//game.input.enabled = true;
					}, _this);
					_this.tween.onUpdateCallback(function(){
						_this.tap = false;
						if(_this.graphicsBg.y<=-312)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -312;
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
					else if(_this.graphicsBg.y<=-312)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -312;
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
						else if(_this.graphicsBg.y<=-312)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -312;
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
			_this.graphicsBg.y = -312;

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
	
	
	spatialRelationshipTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xD957A0, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,250,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		_this.topicTitleText = this.add.text(220, 85, ' \n '+window.selctedLang.fractionTitle+' \n ');
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
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.spatialRelationship1 = _this.add.sprite(100,120,'nsf1.4');
		
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

					_this.spatialRelationshipGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video.play(false);
					
					this.video.changeSource(window.baseUrl+"assets/demoVideos/nsf1_4.mp4");

					
					//this.video.addToWorld(0,0,0,0,1.25,1.32);
					this.video.addToWorld();
					
					this.video.play(false);
					this.video.mute = true;

					if(window.languageSelected == "Kannada" || window.languageSelected == "Gujarati" || window.languageSelected == "Tamil" || window.languageSelected == "Marathi" || window.languageSelected == "Urdu")
					{
						this.video.playbackRate = 0.8;
					}
					
					_this.playDemoVideos('nsf1_4');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(750,420,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video.stop(false);
						this.game.input.enabled = true;
						_this.state.start('nsf1_4level1',true,false);
						
					},_this);
					},_this);


					this.video.onComplete.add(function(){

						_this.stopDemoVoice();
	                    //this.video = null;
		                     _this.state.start('nsf1_4level1',true,false);
	                    },this);//



					//telInitializer.gameIdInit("pinwheel1_1A",1);
					/*var t1=0,t2=0;

					if(window.languageSelected == "English")
					{
						t1=5000;
						t2=12000;
					}
					else if(window.languageSelected == "Hindi")
					{
						t1=4800;
						t2=11900;
					}
					else if(window.languageSelected == "Gujarati")
					{
						t1=4900;
						t2=11900;
					}
					else if(window.languageSelected == "Odiya")
					{
						t1=7000;
						t2=11500;
					}
					else
					{
						t1=6000;
						t2=11300;
					}

					_this.time.events.add(t1, function(){
						_this.pauseDemoVoice();
						
					},_this);

					_this.time.events.add(t2, function(){
						_this.resumeDemoVoice();
						
					},_this);*/
					
				}
			},_this);
			
		},_this);

		
		_this.spatialRelationship2 = _this.add.sprite(300,120,'nsf2.4');
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

			if(this.video1==null)
			{	
				this.video1 = this.add.video('demo7_1_1');
				
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					_this.spatialRelationshipGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video1.play(false);
					
					this.video1.changeSource(window.baseUrl+"assets/demoVideos/nsf2_4.mp4");

					
					this.video1.addToWorld();
					//this.video1.addToWorld(0,0,0,0,1.05,1.13);
					
					this.video1.play(false);
					this.video1.mute = true;

					this.video1.playbackRate = 1.2;
					if(window.languageSelected == "Tamil")
					{
						this.video1.playbackRate = 1;
					}
					
					_this.playDemoVideos('nsf2_4');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(840,420,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video1.stop(false);
						this.game.input.enabled = true;
						_this.state.start('nsf2_4level1',true,false);
						
					},_this);
					},_this);


					this.video1.onComplete.add(function(){

						_this.stopDemoVoice();
	                    //this.video1 = null;
		                     _this.state.start('nsf2_4level1',true,false);
	                    },this);//

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					/*var t1=0,t2=0;

					if(window.languageSelected == "English")
					{
						t1=5000;
						t2=12000;
					}
					else if(window.languageSelected == "Hindi")
					{
						t1=4800;
						t2=11900;
					}
					else if(window.languageSelected == "Gujarati")
					{
						t1=4900;
						t2=11900;
					}
					else if(window.languageSelected == "Odiya")
					{
						t1=7000;
						t2=11500;
					}
					else
					{
						t1=6000;
						t2=11300;
					}

					_this.time.events.add(t1, function(){
						_this.pauseDemoVoice();
						
					},_this);

					_this.time.events.add(t2, function(){
						_this.resumeDemoVoice();
						
					},_this);*/
				}
			},_this);
			
		},_this);

		_this.spatialRelationship3 = _this.add.sprite(500,120,'nsf3.4');
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

			if(this.video2==null)
			{	
				this.video2 = this.add.video('demo7_1_1');
				
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("pinwheel1_1A",1);

					_this.spatialRelationshipGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";
					
					this.video2.play(false);
					
					this.video2.changeSource(window.baseUrl+"assets/demoVideos/nsf3_4.mp4");

					
					this.video2.addToWorld();
					//this.video2.addToWorld(0,0,0,0,1.25,1.32);
					
					this.video2.play(false);
					this.video2.mute = true;
					
					_this.playDemoVideos('nsf3_4');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(840,410,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video2.stop(false);
						this.game.input.enabled = true;
						_this.state.start('nsf3_4level1',true,false);
						
					},_this);
					},_this);


					this.video2.onComplete.add(function(){

						_this.stopDemoVoice();
	                    //this.video2 = null;
		                     _this.state.start('nsf3_4level1',true,false);
	                    },this);//

					//telInitializer.gameIdInit("pinwheel1_1A",1);
					/*var t1=0,t2=0;

					if(window.languageSelected == "English")
					{
						t1=5000;
						t2=12000;
					}
					else if(window.languageSelected == "Hindi")
					{
						t1=4800;
						t2=11900;
					}
					else if(window.languageSelected == "Gujarati")
					{
						t1=4900;
						t2=11900;
					}
					else if(window.languageSelected == "Odiya")
					{
						t1=7000;
						t2=11500;
					}
					else
					{
						t1=6000;
						t2=11300;
					}

					_this.time.events.add(t1, function(){
						_this.pauseDemoVoice();
						
					},_this);

					_this.time.events.add(t2, function(){
						_this.resumeDemoVoice();
						
					},_this);*/
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

		
		
		
	},

	placeValueTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xD957A0, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,250,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		_this.topicTitleText = this.add.text(220, 85, ' \n '+window.selctedLang.placeValueTitle+' \n ');
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
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.placevalue1 = _this.add.sprite(100,120,'pv1.4');
		
		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.placevalue1Txt = this.add.text(225, 192, ' \n 1 \n ');
		_this.placevalue1Txt.anchor.setTo(0.5);
		_this.placevalue1Txt.align = 'center';
		
				
		_this.placevalue1Txt.font = 'gradefont';
		_this.placevalue1Txt.fontSize = 20;
		_this.placevalue1Txt.fontWeight = 'normal';
		_this.placevalue1Txt.fill = 'white';

		_this.placevalue1Txt.wordWrap = true;
		_this.placevalue1Txt.wordWrapWidth = 500;
		

		_this.placevalue1.inputEnabled = true;
		_this.placevalue1.input.useHandCursor = true;
		_this.placevalue1.name = "Fractions 1.1 A";
		_this.placevalue1.events.onInputDown.add(function(target){

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

					_this.placeValueGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video.play(false);
					
					this.video.changeSource(window.baseUrl+"assets/demoVideos/pv1.4.mp4");

					
					//this.video.addToWorld(0,0,0,0,1.25,1.32);
					this.video.addToWorld();
					
					this.video.play(false);
					this.video.mute = true;

					if(window.languageSelected == "Kannada" || window.languageSelected == "Gujarati")
					{
						//this.video.playbackRate = 0.8;
					}
					
					//_this.playDemoVideos('nsf1_4');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(850,420,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video.stop(false);
						this.game.input.enabled = true;
						_this.state.start('pv1_4level1',true,false);
						
					},_this);
					},_this);


					this.video.onComplete.add(function(){

						_this.stopDemoVoice();
	                    //this.video = null;
		                     _this.state.start('pv1_4level1',true,false);
	                    },this);//



					//telInitializer.gameIdInit("pinwheel1_1A",1);
					/*var t1=0,t2=0;

					if(window.languageSelected == "English")
					{
						t1=5000;
						t2=12000;
					}
					else if(window.languageSelected == "Hindi")
					{
						t1=4800;
						t2=11900;
					}
					else if(window.languageSelected == "Gujarati")
					{
						t1=4900;
						t2=11900;
					}
					else if(window.languageSelected == "Odiya")
					{
						t1=7000;
						t2=11500;
					}
					else
					{
						t1=6000;
						t2=11300;
					}

					_this.time.events.add(t1, function(){
						_this.pauseDemoVoice();
						
					},_this);

					_this.time.events.add(t2, function(){
						_this.resumeDemoVoice();
						
					},_this);*/
					
				}
			},_this);
			
		},_this);

		
		_this.placevalue2 = _this.add.sprite(300,120,'pv2.4');
		
		_this.bgGraphic2 = this.add.graphics(410,175);
		_this.bgGraphic2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic2.beginFill(0x493A19, 1);
		_this.bgGraphic2.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic2.boundsPadding = 0;

		_this.placevalue2Txt = this.add.text(425, 192, ' \n 2 \n ');
		_this.placevalue2Txt.anchor.setTo(0.5);
		_this.placevalue2Txt.align = 'center';
		
				
		_this.placevalue2Txt.font = 'gradefont';
		_this.placevalue2Txt.fontSize = 20;
		_this.placevalue2Txt.fontWeight = 'normal';
		_this.placevalue2Txt.fill = 'white';

		_this.placevalue2Txt.wordWrap = true;
		_this.placevalue2Txt.wordWrapWidth = 500;
		

		_this.placevalue2.inputEnabled = true;
		_this.placevalue2.input.useHandCursor = true;
		_this.placevalue2.name = "Fractions 1.1 A";
		_this.placevalue2.events.onInputDown.add(function(target){

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

					_this.placeValueGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video.play(false);
					
					this.video.changeSource(window.baseUrl+"assets/demoVideos/pv2.4.mp4");
					
					if(window.languageSelected == "Tamil" || window.languageSelected == "Marathi")
					{
						this.video.playbackRate = 0.8;
					}

					
					//this.video.addToWorld(0,0,0,0,1.25,1.32);
					this.video.addToWorld();
					
					this.video.play(false);
					this.video.mute = true;

					if(window.languageSelected == "Kannada" || window.languageSelected == "Gujarati")
					{
						//this.video.playbackRate = 0.8;
					}
					
					_this.playDemoVideos('pv2_4');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(850,420,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video.stop(false);
						this.game.input.enabled = true;
						_this.state.start('pv2_4level1',true,false);
						
					},_this);
					},_this);


					this.video.onComplete.add(function(){

						_this.stopDemoVoice();
	                    //this.video = null;
		                     _this.state.start('pv2_4level1',true,false);
	                    },this);//



					//telInitializer.gameIdInit("pinwheel1_1A",1);
					/*var t1=0,t2=0;

					if(window.languageSelected == "English")
					{
						t1=5000;
						t2=12000;
					}
					else if(window.languageSelected == "Hindi")
					{
						t1=4800;
						t2=11900;
					}
					else if(window.languageSelected == "Gujarati")
					{
						t1=4900;
						t2=11900;
					}
					else if(window.languageSelected == "Odiya")
					{
						t1=7000;
						t2=11500;
					}
					else
					{
						t1=6000;
						t2=11300;
					}

					_this.time.events.add(t1, function(){
						_this.pauseDemoVoice();
						
					},_this);

					_this.time.events.add(t2, function(){
						_this.resumeDemoVoice();
						
					},_this);*/
					
				}
			},_this);
			
		},_this);

		_this.placevalue3 = _this.add.sprite(500,120,'pv3.4');
		
		_this.bgGraphic3 = this.add.graphics(610,175);
		_this.bgGraphic3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic3.beginFill(0x493A19, 1);
		_this.bgGraphic3.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic3.boundsPadding = 0;

		_this.placevalue3Txt = this.add.text(625, 192, ' \n 3 \n ');
		_this.placevalue3Txt.anchor.setTo(0.5);
		_this.placevalue3Txt.align = 'center';
		
				
		_this.placevalue3Txt.font = 'gradefont';
		_this.placevalue3Txt.fontSize = 20;
		_this.placevalue3Txt.fontWeight = 'normal';
		_this.placevalue3Txt.fill = 'white';

		_this.placevalue2Txt.wordWrap = true;
		_this.placevalue2Txt.wordWrapWidth = 500;
		

		_this.placevalue3.inputEnabled = true;
		_this.placevalue3.input.useHandCursor = true;
		_this.placevalue3.name = "Fractions 1.1 A";
		_this.placevalue3.events.onInputDown.add(function(target){

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

					_this.placeValueGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video.play(false);
					
					this.video.changeSource(window.baseUrl+"assets/demoVideos/pv3.4.mp4");

					
					//this.video.addToWorld(0,0,0,0,1.25,1.32);
					this.video.addToWorld();
					
					this.video.play(false);
					this.video.mute = true;

					if(window.languageSelected == "Kannada" || window.languageSelected == "Gujarati")
					{
						//this.video.playbackRate = 0.8;
					}
					
					//_this.playDemoVideos('nsf1_4');

					_this.time.events.add(500, function(){
					_this.skipDemos = _this.add.sprite(850,420,'skipDemoVideos');
					document.getElementById('phaser_canvas').style.pointerEvents = "initial";
					_this.skipDemos.inputEnabled = true;
					_this.skipDemos.events.onInputDown.add(function(){
						_this.stopDemoVoice();
						this.video.stop(false);
						this.game.input.enabled = true;
						_this.state.start('pv3_4level1',true,false);
						
					},_this);
					},_this);


					this.video.onComplete.add(function(){

						_this.stopDemoVoice();
	                    //this.video = null;
		                     _this.state.start('pv3_4level1',true,false);
	                    },this);//



					//telInitializer.gameIdInit("pinwheel1_1A",1);
					/*var t1=0,t2=0;

					if(window.languageSelected == "English")
					{
						t1=5000;
						t2=12000;
					}
					else if(window.languageSelected == "Hindi")
					{
						t1=4800;
						t2=11900;
					}
					else if(window.languageSelected == "Gujarati")
					{
						t1=4900;
						t2=11900;
					}
					else if(window.languageSelected == "Odiya")
					{
						t1=7000;
						t2=11500;
					}
					else
					{
						t1=6000;
						t2=11300;
					}

					_this.time.events.add(t1, function(){
						_this.pauseDemoVoice();
						
					},_this);

					_this.time.events.add(t2, function(){
						_this.resumeDemoVoice();
						
					},_this);*/
					
				}
			},_this);
			
		},_this);

		


		
		
		
		_this.placeValueGroup.add(_this.topicTxtBg);
		_this.placeValueGroup.add(_this.topicTitleText);
		_this.placeValueGroup.add(_this.topicBg);

		_this.placeValueGroup.add(_this.placevalue1);
		_this.placeValueGroup.add(_this.bgGraphic1);
		_this.placeValueGroup.add(_this.placevalue1Txt);

		_this.placeValueGroup.add(_this.placevalue2);
		_this.placeValueGroup.add(_this.bgGraphic2);
		_this.placeValueGroup.add(_this.placevalue2Txt);

		_this.placeValueGroup.add(_this.placevalue3);
		_this.placeValueGroup.add(_this.bgGraphic3);
		_this.placeValueGroup.add(_this.placevalue3Txt);		
		
	},

	spatialRelationshipTopic2:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xD957A0, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,250,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		_this.topicTitleText = this.add.text(220, 85, ' \n '+window.selctedLang.numberTitle+' \n ');
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
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		

		_this.spatialRelationship4 = _this.add.sprite(100,120,'longdivision4');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic4 = this.add.graphics(210,175);
		_this.bgGraphic4.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic4.beginFill(0x493A19, 1);
		_this.bgGraphic4.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic4.boundsPadding = 0;

		_this.spatialRelationship4Txt = this.add.text(225, 192, ' \n 1 \n ');
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

					_this.spatialRelationshipGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video.play(false);
					
					this.video.changeSource(window.baseUrl+"assets/newGames/longdivision4.mp4");

					
					//this.video.addToWorld(0,0,0,0,1.25,1.32);
					this.video.addToWorld();
					
					this.video.play(false);
					//this.video.mute = true;

					/*if(window.languageSelected == "Kannada" || window.languageSelected == "Gujarati")
					{
						this.video.playbackRate = 0.8;
					}*/
					
					this.firstVoice2();
            this.time.events.add(8500, function(){
                this.secondVoice2(); 
           },this);
		                
             this.time.events.add(1000, function(){
				this.skipDemos = this.add.sprite(833,415,'skipDemoVideos');
				document.getElementById('phaser_canvas').style.pointerEvents = "initial";
				this.skipDemos.inputEnabled = true;
				this.skipDemos.events.onInputDown.add(function(){
					//this.video.stop(false);
                    this.stopVoice();
                    this.video.play(true);
					this.video = null;
					this.state.start('longdivision4');
				},this);
            },this);
             this.video.onComplete.add(function(){
             this.video.play(true);
             this.video = null; 
             this.state.start('longdivision4');
        },this);
            /****************************************************/
					
				}
			},_this);
			
		},_this);


		
		_this.spatialRelationship6 = _this.add.sprite(300,120,'longdivision6');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic6 = this.add.graphics(410,175);
		_this.bgGraphic6.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic6.beginFill(0x493A19, 1);
		_this.bgGraphic6.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic6.boundsPadding = 0;

		_this.spatialRelationship6Txt = this.add.text(425, 192, ' \n 2 \n ');
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

					_this.spatialRelationshipGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video.play(false);
					
					this.video.changeSource(window.baseUrl+"assets/newGames/longdivision6.mp4");

					
					//this.video.addToWorld(0,0,0,0,1.25,1.32);
					this.video.addToWorld();
					
					this.video.play(false);
					//this.video.mute = true;

					/*if(window.languageSelected == "Kannada" || window.languageSelected == "Gujarati")
					{
						this.video.playbackRate = 0.8;
					}*/
					
					this.time.events.add(1000, function(){
				this.skipDemos = this.add.sprite(835,425,'skipDemoVideos');
				document.getElementById('phaser_canvas').style.pointerEvents = "initial";
				this.skipDemos.inputEnabled = true;
                
                this.playQuestionSound = document.createElement('audio');
                this.src = document.createElement('source');
          if(window.languageSelected=="English")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN2/English/nsnpg1.5_3.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN2/Hindi/nsnpg1.5_3.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN2/Kannada/nsnpg1.5_3.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN2/Gujarati/nsnpg1.5_3.mp3");
                    }
                    else if(window.languageSelected=="Marathi")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN2/Marathi/nsnpg1.5_3.mp3");
                    }
                    else if(window.languageSelected=="Odiya")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN2/Odiya/nsnpg1.5_3.mp3");
                    }
                    else if(window.languageSelected=="Tamil")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN2/Tamil/nsnpg1.5_3.mp3");
                    }
                    else if(window.languageSelected=="Telugu")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN2/Telugu/nsnpg1.5_3.mp3");
                    }
                    else if(window.languageSelected=="Urdu")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN2/Urdu/nsnpg1.5_3.mp3");
                    }
               this.playQuestionSound.appendChild(this.src);
               this.playQuestionSound.play();
                
				this.skipDemos.events.onInputDown.add(function(){
					this.video.play(true);
                    this.playQuestionSound.pause();
                    //this.video.stop(false);
					this.video = null;
					this.state.start('longdivision6');
				},this);
            },this);
             this.video.onComplete.add(function(){
             this.video = null;
			this.state.start('longdivision6');
                    },this);
     
            /****************************************************/
					
				}
			},_this);
			
		},_this);

		

	
		
		
		_this.spatialRelationshipGroup2.add(_this.topicTxtBg);
		_this.spatialRelationshipGroup2.add(_this.topicTitleText);
		_this.spatialRelationshipGroup2.add(_this.topicBg);

		

		_this.spatialRelationshipGroup2.add(_this.spatialRelationship4);
		_this.spatialRelationshipGroup2.add(_this.bgGraphic4);
		_this.spatialRelationshipGroup2.add(_this.spatialRelationship4Txt);


		_this.spatialRelationshipGroup2.add(_this.spatialRelationship6);
		_this.spatialRelationshipGroup2.add(_this.bgGraphic6);
		_this.spatialRelationshipGroup2.add(_this.spatialRelationship6Txt);		
		
	},

	firstVoice2:function(target){
        // console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        this.playQuestionSound = document.createElement('audio');
        
        if(window.languageSelected=="English")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/English/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Hindi/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Kannada/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Gujarati/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Marathi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Marathi/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Odiya")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Odiya/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Tamil")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Tamil/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Telugu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Telugu/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Urdu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Urdu/Fill_the_boxes.mp3");
        }
                    
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },

    secondVoice2:function(target){
        // console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        this.playQuestionSound = document.createElement('audio');
        
        if(window.languageSelected=="English")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/English/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Hindi/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Kannada/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Gujarati/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Marathi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Marathi/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Odiya")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Odiya/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Tamil")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Tamil/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Telugu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Telugu/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Urdu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/NSN1/Urdu/Drag_the_pictures.mp3");
        }
                    
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },

    stopVoice:function()
	{		
		// _timer1.stop();
		if(this.playQuestionSound)
		{
			if(this.playQuestionSound.contains(this.src))
			{
				this.playQuestionSound.removeChild(this.src);
				this.src = null;
			}
			if(!this.playQuestionSound.paused)
			{
				this.playQuestionSound.pause();
				this.playQuestionSound.currentTime = 0.0;
			}
			this.playQuestionSound = null;
			this.src = null;
		}
			
		if(this.celebrationSound)
		{
			if(this.celebrationSound.isPlaying)
			{
				this.celebrationSound.stop();
				this.celebrationSound = null;
			}
		}

		if(this.amplify!=null)
		{
			this.amplify.context.close();
			this.amplify = null;
		}

	},



	
	playDemoVideos:function(target){
		// console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(target)
        {
            case 'nsf1_4':  if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/English/nsf1.4.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Hindi/nsf1.4.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Kannada/nsf1.4.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Marathi/nsf1.4.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Telugu/nsf1.4.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Tamil/nsf1.4.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Urdu/nsf1.4.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Gujrati/nsf1.4.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Odiya/nsf1.4.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 'nsf2_4':  if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/English/nsf2.4E.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Hindi/nsf2.4H.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Kannada/nsf2.4K.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Marathi/nsf2.4.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Telugu/nsf2.4.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Tamil/nsf2.4.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Urdu/nsf2.4.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Gujarati/nsf2.4G.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf2.4/Odiya/nsf2.4.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 'nsf3_4':  if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/English/3.4E.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Hindi/3.4H.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Kannada/3.4K.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Marathi/nsf3.4.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Telugu/nsf3.4.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Tamil/nsf3.4.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Urdu/nsf3.4.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Gujarati/3.4G.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Odiya/3.4O.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
             case 'pv2_4':  if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/English/NSPVG2.4E.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Hindi/NSPVG2.4H.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Kannada/NSPVG2.4K.mp3");
                    }
					else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Marathi/NSPVG2.4.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Telugu/NSPVG2.4.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Tamil/NSPVG2.4.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Urdu/NSPVG2.4.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Gujarati/NSPVG2.4G.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv2.4/Odiya/NSPVG2.4.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
             }
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
	

	pauseDemoVoice:function(){
            if(_this.playQuestionSound)
		   {
			
			if(!_this.playQuestionSound.paused)
			{
				_this.playQuestionSound.pause();
				//_this.playQuestionSound.currentTime = 0.0;
			}
		}
	},

	resumeDemoVoice:function(){
            if(_this.playQuestionSound)
		   {
			
			if(_this.playQuestionSound.paused)
			{
				_this.playQuestionSound.play();
				//_this.playQuestionSound.currentTime = 0.0;
			}
		}
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
		_this.stopDemoVoice();
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
		
	}
	
};