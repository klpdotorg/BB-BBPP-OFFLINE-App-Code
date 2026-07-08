Game.grade7_2level1=function(){};

Game.grade7_2level1.prototype={


     init:function(game)
    {
        _this = this;
        
        _this.gameid = "7.2";
        
        /*_this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid,
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        telInitializer.gameIdInit("time7_2",gradeSelected);
        
    },

    preload:function(game){
        if(!window.grade3MT2){

            window.grade3MT2 = true;

            var preloadGrp = _this.add.group();
            _this.preloadBarOutline = _this.add.sprite(_this.world.centerX,_this.world.centerY,'prgressbarOutLine');
            //_this.preloadBarOutline.anchor.setTo(0.5,0.5);
            _this.preloadBars = _this.add.sprite(_this.world.centerX,_this.world.centerY,'preloadBar');

            //_this.preloadBar.anchor.setTo(0.5,0.5);
            _this.time.advanceTiming=true;
            _this.load.setPreloadSprite(_this.preloadBars);

            preloadGrp.add(_this.preloadBarOutline);
            preloadGrp.add(_this.preloadBars);

            preloadGrp.x -= 105;
            this.load.image('Level72_bg1',window.baseUrl+'assets/gradeAssets/7.2/backg2.png');
            //        this.load.image('Level72_bg2',window.baseUrl+'assets/gradeAssets/7.2/bg2.png');
        this.load.image('Level72_bg2',window.baseUrl+'assets/gradeAssets/7.2/backg.png');

        this.load.atlas('numbg',window.baseUrl+'assets/gradeAssets/7.2/numbg.png' ,window.baseUrl+'json/gradeJson/7.2/numbg.json');
        this.load.atlas('rightBtn',window.baseUrl+'assets/gradeAssets/7.2/rightBtn.png' ,window.baseUrl+'json/gradeJson/7.2/rightBtn.json');
        this.load.atlas('wrongBtn',window.baseUrl+'assets/gradeAssets/7.2/wrongBtn.png' ,window.baseUrl+'json/gradeJson/7.2/wrongBtn.json');

        //My files to load
        this.load.atlas('Level72_tickMark',window.baseUrl+'assets/gradeAssets/7.2/tickMark.png' ,window.baseUrl+'json/gradeJson/7.2/tickMark.json');

        this.load.atlas('Level72_minHand',window.baseUrl+'assets/gradeAssets/7.2/minuteHand.png',window.baseUrl+'json/gradeJson/7.2/minuteHand.json');
        this.load.atlas('Level72_hourHand',window.baseUrl+'assets/gradeAssets/7.2/hourHand.png',window.baseUrl+'json/gradeJson/7.2/hourHand.json');
        this.load.atlas('Level72_circleToCover',window.baseUrl+'assets/gradeAssets/7.2/A3.png',window.baseUrl+'json/gradeJson/7.2/A3.json');

        this.load.image('Level72_hr',window.baseUrl+'assets/gradeAssets/7.2/hr.png');
        this.load.image('Level72_mn',window.baseUrl+'assets/gradeAssets/7.2/mn.png');

        this.load.atlas('Level72_clock',window.baseUrl+'assets/gradeAssets/7.2/clock.png' ,window.baseUrl+'json/gradeJson/7.2/clock.json');
        this.load.atlas('Level72_inputBox',window.baseUrl+'assets/gradeAssets/7.2/inputBox.png' ,window.baseUrl+'json/gradeJson/7.2/inputBox.json');
        this.load.atlas('Level72_showNumbers',window.baseUrl+'assets/gradeAssets/7.2/0To9.png' ,window.baseUrl+'json/gradeJson/7.2/0To9.json');
        

    }

    },
    
	create:function(game){
        
        
		_this.amplify = null;
		
        _this.questionid = null;
		_this.noofAttempts = 0;
		_this.AnsTimerCount = 0;
		_this.sceneCount = 1;
		
		_this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		
        
        _this.selectedAns = "";
        _this.rightAns = "";
        _this.rightAns1 = "";
        _this.rightAns2 = "";
        _this.rightAns3 = "";
        _this.rightAns4 = "";
        
        _this.theta = 0;
        _this.radius = 25;
        _this.radius1 = 50;
        _this.cX = 0;
        _this.cX1 =0;
        _this.cY =0;
        _this.cY1 =0;
        _this.arrow = 0;
        _this.target = 0;
        _this.circle =0 ;
        _this.circle1 = 0;
        
        
        _this.clockTick = _this.add.audio('clocktick');
         _this.clockTick.play();
         _this.clockTick.loopFull(1);
        
        _this.wrong = true;
        _this.no1=0;
       // _this.qArrays = [1,3,5,7,9,11];
        //_this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12];
        _this.qArrays = [1,2,3,4,5,6];
        _this.qArrays1 = [7,8,9,10,11,12];
       
        _this.qArrays = _this.shuffle(_this.qArrays);
        _this.qArrays1 = _this.shuffle(_this.qArrays1);
        
        _this.count=0;0
        _this.count1=0;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height, 'Level72_bg1');
        _this.bg2 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height, 'Level72_bg2');
		
		_this.TopBar=_this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.scale.setTo(1,1);
       
       _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            //console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade3levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'Level42A_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;baudio
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);

		_this.timebg=this.add.sprite(305,6,'Level42C_timer');
		_this.timebg.scale.setTo(1,1);
			
		_this.timeDisplay = this.add.text(330,22,_this.minutes + ' : '+ _this.seconds);
		
		_this.timeDisplay.anchor.setTo(0.5);
		_this.timeDisplay.align = 'center';
		_this.timeDisplay.font = 'myfont';
		_this.timeDisplay.fontWeight = 'normal';
		_this.timeDisplay.fontSize = 20;
		//text.fontWeight = 'bold';
		_this.timeDisplay.fill = '#ADFF2F';
		
        ClickSound = _this.add.audio('ClickSound');
        
        _this.graphics = this.add.graphics(0, 400);
		_this.graphics.beginFill(0xFF700B, 1);
		_this.graphics.drawRect(0,0,960,120);		
		_this.graphics.boundsPadding = 0;
		_this.graphics.alpha=0;
        
        _this.generateStarsForTheScene(6);
       // _this.no1++;
        _this.getQuestion();

    },
	
		updateTimer:function() {        
     _this.counterForTimer++;
     if(_this.counterForTimer>59)
         {
          _this.counterForTimer = 0;
           if(_this.minutes<10){
                 _this.minutes =  _this.minutes+1;
                 _this.seconds = 00;
                        }
             else{
                 _this.minutes =  _this.minutes+1;
                   
                 }
         }
                else{
                        if (_this.counterForTimer < 10)        
                                _this.seconds = '0' + _this.counterForTimer;
                        else
                                _this.seconds = _this.counterForTimer;
                    }
     _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
},

    shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
},

    getQuestion:function(target)
    {   
        _this.noofAttempts = 0;
        _this.AnsTimerCount=0;

		_this.timer = _this.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		_this.timer.loop(1000, function(){
			_this.AnsTimerCount++;
		}, _this);

		//  Start the _this.timer running - _this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		_this.timer.start();
		
		/**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
		
        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        
     _this.temp = 0;
        if(_this.no1<3)
        {
           _this.temp =  _this.qArrays[_this.no1];    
        }
        else
        {
            _this.temp =  _this.qArrays1[_this.no1];
        }
        //console.log("get"+_this.no1);
        //_this.no1 = 1;
        //temp=5;
    	switch(_this.temp)      
    	{
    		case 1: _this.gotoFirstQuestion();
    				break;
    		case 2: _this.gotoSecondQuestion();
    				break;
    		case 3: _this.gotoThirdQuestion();
    				break;
    		case 4: _this.gotoFourthQuestion();
    				break;
    		case 5: _this.gotoFifthQuestion();
    				break;
    		case 6: _this.gotoSixthQuestion();
    				break;
            case 7: _this.gotoSeventhQuestion();
    				break;
            case 8: _this.gotoEighthQuestion();
    				break;
            case 9: _this.gotoNinthQuestion();
    				break;
            case 10: _this.gotoTenthQuestion();
    				break;
            case 11: _this.gotoEleventhQuestion();
    				break;
            case 12: _this.gotoTwevelvethQuestion();
    				break;
           
    	}

    },
      
    gotoFirstQuestion:function(){
     _this.questionid = 1;
      _this.stopVoice();
        _this.bg1.visible = false;
        _this.bg2.visible = true;
        _this.questionNo = 1;
        //console.log("Question number "+_this.questionNo);
     if(_this.no1==0)
         {
            _this.getVoice();
         }
       
        _this.eqnum = 0;
         _this.objGroup = _this.add.group();
         _this.shakeObjectGroup = _this.add.group();
         
         _this.crocsGroup = _this.add.group();
         _this.addNumberPad();
         _this.b1 = _this.add.sprite(230,429,'Level72_clock');
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = "clock";
     
         _this.b2 = _this.add.sprite(600,270,'Level72_inputBox');
         _this.b2.anchor.setTo(0.5);
         _this.b2.name = "inputBox";
        
         _this.b3 = _this.add.sprite(236,272,'Level72_minHand');
         _this.b3.anchor.setTo(1,0.5);
         _this.b3.name = "minHand";
         _this.b3.angle = 360;
     
         _this.b4 = _this.add.sprite(224,273,'Level72_hourHand');
         _this.b4.anchor.setTo(0,0.5);
         _this.b4.name = "hourHand";
         _this.b4.angle = 355;
     
         _this.b7 = _this.add.sprite(230,269,'Level72_circleToCover');
         _this.b7.scale.setTo(1.1,1.1);
         _this.b7.anchor.setTo(0.5, 0.5);
         //_this.b7.inputEnabled = true;
         //_this.b7.input.useHandCursor = true;
         _this.b7.name = "circleToCover";
         _this.b7.angle = 270;
         
        _this.shakeObjectGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.shakeObjectGroup.add(_this.b3);
        _this.shakeObjectGroup.add(_this.b4);
        _this.shakeObjectGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.tickMark);
        
        _this.x = 500;
       _this.y = 276;
     
        for(var i=0;i<4;i++)
        {
           _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
           _this.box.name = "box"+i;
           _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
        
                _this.shakeObjectGroup.x = 1000;
                _this.objGroup.x = 1000;
               _this.numGroup.x = 1000;
                _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
                _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
                _this.Maintween1 = _this.add.tween(_this.objGroup);
                _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
                _this.Maintween2 = _this.add.tween(_this.numGroup);
                _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
                //_this.counterText.setText("0");
           
        _this.rightAns = "0245";
        _this.rightAns1 = "blank245";
        _this.rightAns2 = "2blank45";
     },    
    gotoSecondQuestion:function(){ 
        _this.questionid = 1;
         _this.stopVoice();
         _this.bg1.visible = false;
         _this.bg2.visible = true;
         _this.questionNo = 2;
         //console.log("Question number "+_this.questionNo);
         if(_this.no1==0)
         {
            _this.getVoice();
         }
        
        
         _this.shakeObjectGroup = _this.add.group();
         _this.objGroup = _this.add.group();
         _this.crocsGroup = _this.add.group();
        _this.addNumberPad();
         _this.b1 = _this.add.sprite(230,429,'Level72_clock');
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = "clock";
     
         _this.b2 = _this.add.sprite(600,270,'Level72_inputBox');
         _this.b2.anchor.setTo(0.5);
         _this.b2.name = "inputBox";
      
         _this.b3 = _this.add.sprite(222,270,'Level72_minHand');
         _this.b3.anchor.setTo(1,0.5);
         _this.b3.name = "minHand";
         _this.b3.angle = 180;
     
         _this.b4 = _this.add.sprite(229,275,'Level72_hourHand');
         _this.b4.anchor.setTo(0,0.5);
         _this.b4.name = "hourHand";
         _this.b4.angle = 270;
        
         _this.b7 = _this.add.sprite(230,269,'Level72_circleToCover');
         _this.b7.scale.setTo(1.1,1.1);
         _this.b7.anchor.setTo(0.5, 0.5);
         //_this.b7.inputEnabled = true;
         //_this.b7.input.useHandCursor = true;
         _this.b7.name = "circleToCover";
         _this.b7.angle = 270;
     
       
        
        _this.shakeObjectGroup.add( _this.b1);
        _this.objGroup.add( _this.b2);
        _this.shakeObjectGroup.add(_this.b3);
        _this.shakeObjectGroup.add(_this.b4);
        _this.shakeObjectGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.tickMark);
        
         _this.x = 500;
        _this.y = 276;
     
        for(var i=0;i<4;i++)
        {
            _this.box =  _this.objGroup.create( _this.x, _this.y,'Level72_showNumbers');
            _this.box.name = "box"+i;
            _this.box.anchor.setTo(0.5);
            if(i==1){
                 _this.x+=74;
            }
            else
                 _this.x+=59;
        }
      

                _this.shakeObjectGroup.x = 1000;
                _this.objGroup.x = 1000;
                 _this.numGroup.x = 1000;
                _this.Maintween =  _this.add.tween(_this.shakeObjectGroup);
                _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
               _this.Maintween1 =  _this.add.tween(_this.objGroup);
                _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
                _this.Maintween2 =  _this.add.tween(_this.numGroup);
                _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
                //_this.counterText.setText("0");
           
        _this.rightAns = "1215";
        
     },
    gotoThirdQuestion:function(){
        _this.questionid = 1;
         _this.stopVoice();
         _this.bg1.visible = false;
         _this.bg2.visible = true;
         _this.questionNo = 3;
         //console.log("Question number "+_this.questionNo);
         if(_this.no1==0)
         {
            _this.getVoice();
         }
       
        
         _this.shakeObjectGroup = _this.add.group();
         _this.objGroup = _this.add.group();
         _this.crocsGroup = _this.add.group();
         _this.addNumberPad();
         _this.b1 = _this.add.sprite(230,429,'Level72_clock');
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = "clock";
     
         _this.b2 = _this.add.sprite(600,270,'Level72_inputBox');
         _this.b2.anchor.setTo(0.5);
         _this.b2.name = "inputBox";
      
         _this.b3 = _this.add.sprite(230,264,'Level72_minHand');
         _this.b3.anchor.setTo(1,0.5);
         _this.b3.name = "minHand";
         _this.b3.angle = 270;
     
         _this.b4 = _this.add.sprite(236,269,'Level72_hourHand');
         _this.b4.anchor.setTo(0,0.5);
         _this.b4.name = "hourHand";
         _this.b4.angle = 180;
        
         _this.b7 = _this.add.sprite(231,269,'Level72_circleToCover');
         _this.b7.scale.setTo(1.1,1.1);
         _this.b7.anchor.setTo(0.5, 0.5);
         //_this.b7.inputEnabled = true;
         //_this.b7.input.useHandCursor = true;
         _this.b7.name = "circleToCover";
         _this.b7.angle = 270;
        
       
        
        _this.shakeObjectGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.shakeObjectGroup.add(_this.b3);
        _this.shakeObjectGroup.add(_this.b4);
        _this.shakeObjectGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.tickMark);
        
        _this.x = 500;
        _this.y = 276;
     
        for(var i=0;i<4;i++)
        {
           _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
           _this.box.name = "box"+i;
           _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
      /*  _this.objGroup.x = this.world.centerX;
        _this.objGroup.y= this.world.centerY; 
        _this.objGroup.pivot.x = this.world.centerX;
        _this.objGroup.pivot.y= this.world.centerY;*/
        
                _this.shakeObjectGroup.x = 1000;
                _this.objGroup.x = 1000;
                _this.numGroup.x = 1000;
                _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
                _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
                _this.Maintween1 = _this.add.tween(_this.objGroup);
                _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
                _this.Maintween2 = _this.add.tween(_this.numGroup);
                _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
                //_this.counterText.setText("0");
           
        _this.rightAns = "0930";
        _this.rightAns1 = "blank930";
        _this.rightAns2 = "9blank30";
        
     },
    gotoFourthQuestion:function(){
        _this.questionid = 1;
         _this.stopVoice();
         _this.bg1.visible = false;
         _this.bg2.visible = true;
          _this.questionNo = 4;
        //console.log("Question number "+_this.questionNo);
         if(_this.no1==0)
         {
            _this.getVoice();
         }
        
        
         _this.shakeObjectGroup = _this.add.group();
         _this.objGroup = _this.add.group();
         _this.crocsGroup = _this.add.group();
        _this.addNumberPad();
         _this.b1 = _this.add.sprite(230,429,'Level72_clock');
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = "clock";
     
         _this.b2 = _this.add.sprite(600,270,'Level72_inputBox');
         _this.b2.anchor.setTo(0.5);
         _this.b2.name = "inputBox";
      
         _this.b3 = _this.add.sprite(230,278,'Level72_minHand');
         _this.b3.anchor.setTo(1,0.5);
         _this.b3.name = "minHand";
         _this.b3.angle = 90;
     
         _this.b4 = _this.add.sprite(229,265,'Level72_hourHand');
         _this.b4.anchor.setTo(0,0.5);
         _this.b4.name = "hourHand";
         _this.b4.angle = 90;
        
         _this.b7 = _this.add.sprite(235,268,'Level72_circleToCover');
         _this.b7.scale.setTo(1.1,1.1);
         _this.b7.anchor.setTo(0.5, 0.5);
         //_this.b7.inputEnabled = true;
         //_this.b7.input.useHandCursor = true;
         _this.b7.name = "circleToCover";
         _this.b7.angle = 270;
       
        
        _this.shakeObjectGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.shakeObjectGroup.add(_this.b3);
        _this.shakeObjectGroup.add(_this.b4);
        _this.shakeObjectGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.tickMark);
        
        _this.x = 500;
       _this.y = 276;
     
        for(var i=0;i<4;i++)
        {
           _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
           _this.box.name = "box"+i;
           _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
      /*  _this.objGroup.x = this.world.centerX;
        _this.objGroup.y= this.world.centerY; 
        _this.objGroup.pivot.x = this.world.centerX;
        _this.objGroup.pivot.y= this.world.centerY;*/
        
                _this.shakeObjectGroup.x = 1000;
                _this.objGroup.x = 1000;
                _this.numGroup.x = 1000;
                _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
                _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
               _this.Maintween1 = _this.add.tween(_this.objGroup);
                _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
                _this.Maintween2 = _this.add.tween(_this.numGroup);
                _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
                //_this.counterText.setText("0");
           
        _this.rightAns = "0600";
        _this.rightAns1 = "blank600";
        _this.rightAns2 = "6blank00";
        _this.rightAns3 = "6blankblankblank";
        _this.rightAns4 = "blank6blankblank";
        _this.rightAns5 = "06blankblank";
        
     }, 
    gotoFifthQuestion:function(){
        _this.questionid = 1;
         _this.stopVoice();
         _this.bg1.visible = false;
         _this.bg2.visible = true;
          _this.questionNo = 5;
          //console.log("Question number "+_this.questionNo);
        if(_this.no1==0)
         {
            _this.getVoice();
         }
       
        
         _this.shakeObjectGroup = _this.add.group();
         _this.objGroup = _this.add.group();
         _this.crocsGroup = _this.add.group();
         _this.addNumberPad();
         _this.b1 = _this.add.sprite(230,429,'Level72_clock');
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = "clock";
     
         _this.b2 = _this.add.sprite(600,270,'Level72_inputBox');
         _this.b2.anchor.setTo(0.5);
         _this.b2.name = "inputBox";
      
         _this.b3 = _this.add.sprite(230,278,'Level72_minHand');
         _this.b3.anchor.setTo(1,0.5);
         _this.b3.name = "minHand";
         _this.b3.angle = 120;
     
         _this.b4 = _this.add.sprite(230,280,'Level72_hourHand');
         _this.b4.anchor.setTo(0,0.5);
         _this.b4.name = "hourHand";
         _this.b4.angle = 300;
       
         _this.b7 = _this.add.sprite(235,268,'Level72_circleToCover');
         _this.b7.scale.setTo(1.1,1.1);
         _this.b7.anchor.setTo(0.5, 0.5);
         //_this.b7.inputEnabled = true;
         //_this.b7.input.useHandCursor = true;
         _this.b7.name = "circleToCover";
         _this.b7.angle = 270;
        
        
        _this.shakeObjectGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.shakeObjectGroup.add(_this.b3);
        _this.shakeObjectGroup.add(_this.b4);
        _this.shakeObjectGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.tickMark);
        
        _this.x = 500;
        _this.y = 276;
     
        for(var i=0;i<4;i++)
        {
           _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
           _this.box.name = "box"+i;
           _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
      /*  _this.objGroup.x = this.world.centerX;
        _this.objGroup.y= this.world.centerY; 
        _this.objGroup.pivot.x = this.world.centerX;
        _this.objGroup.pivot.y= this.world.centerY;*/
        
                _this.shakeObjectGroup.x = 1000;
                _this.objGroup.x = 1000;
                _this.numGroup.x = 1000;
                _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
                _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
               _this.Maintween1 = _this.add.tween(_this.objGroup);
                _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
                _this.Maintween2 = _this.add.tween(_this.numGroup);
                _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
                //_this.counterText.setText("0");
           
        _this.rightAns = "0105";
        _this.rightAns1 = "blank105";
        _this.rightAns2 = "015blank";
        _this.rightAns3 = "blank15blank";
        _this.rightAns4 = "blank1blank5";
        
     },
    gotoSixthQuestion:function(){
        _this.questionid = 1;
         _this.stopVoice();
         _this.bg1.visible = false;
         _this.bg2.visible = true;
          _this.questionNo = 6;
         //console.log("Question number "+_this.questionNo);
        if(_this.no1==0)
         {
            _this.getVoice();
         }
       
         _this.objGroup = _this.add.group();
         _this.shakeObjectGroup = this.add.group();
        
         _this.crocsGroup = _this.add.group();
         _this.addNumberPad();
         _this.b1 = _this.add.sprite(230,429,'Level72_clock');
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = "clock";
     
         _this.b2 = _this.add.sprite(600,270,'Level72_inputBox');
         _this.b2.anchor.setTo(0.5);
         _this.b2.name = "inputBox";
      
         _this.b3 = _this.add.sprite(229,261,'Level72_minHand');
         _this.b3.anchor.setTo(1,0.5);
         _this.b3.name = "minHand";
         _this.b3.angle = 300;
     
         _this.b4 = _this.add.sprite(222,269,'Level72_hourHand');
         _this.b4.anchor.setTo(0,0.5);
         _this.b4.name = "hourHand";
         _this.b4.angle = 325;
        
         _this.b7 = _this.add.sprite(228,265,'Level72_circleToCover');
         _this.b7.scale.setTo(1.1,1.1);
         _this.b7.anchor.setTo(0.5, 0.5);
        // _this.b7.inputEnabled = true;
         //_this.b7.input.useHandCursor = true;
         _this.b7.name = "circleToCover";
         _this.b7.angle = 270;
       
        
        _this.shakeObjectGroup.add(_this.b1);
        _this.objGroup.add(_this.b2);
        _this.shakeObjectGroup.add(_this.b3);
        _this.shakeObjectGroup.add(_this.b4);
        _this.shakeObjectGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.tickMark);
        
        _this.x = 500;
        _this.y = 276;
     
        for(var i=0;i<4;i++)
        {
           _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
           _this.box.name = "box"+i;
           _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
      /*  _this.objGroup.x = this.world.centerX;
        _this.objGroup.y= this.world.centerY; 
        _this.objGroup.pivot.x = this.world.centerX;
        _this.objGroup.pivot.y= this.world.centerY;*/
        
                _this.shakeObjectGroup.x = 1000;
                _this.objGroup.x = 1000;
                _this.numGroup.x = 1000;
                _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
                _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
               _this.Maintween1 = _this.add.tween(_this.objGroup);
                _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0); 
                _this.Maintween2 = _this.add.tween(_this.numGroup);
                _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
                //_this.counterText.setText("0");
           
        _this.rightAns = "0135";
        _this.rightAns1 = "blank135";
        _this.rightAns2 = "1blank35";
        
     },
    
    gotoSeventhQuestion:function(){
        _this.questionid = 1;
         _this.stopVoice();
        if(_this.no1==3)
         {
            _this.getVoice();
         }
         _this.bg2.visible = false;
         _this.bg1.visible = true;
         _this.questionNo = 7;
         //console.log("Question number "+_this.questionNo);
        
         _this.shakeObjectGroup = _this.add.group();
         _this.objGroup = _this.add.group();
         _this.crocsGroup = _this.add.group();
         _this.b1 = _this.add.sprite(580,454,'Level72_clock');
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = "clock";
     
         _this.b2 = _this.add.sprite(225,280,'Level72_inputBox');
         _this.b2.anchor.setTo(0.5);
         _this.b2.name = "inputBox";
      
         _this.b3 = _this.add.sprite(579,298,'Level72_minHand');
         _this.b3.anchor.setTo(0.95, 0.5);
         _this.b3.name = "minHand";
         _this.b3.inputEnabled = true;
         _this.b3.input.useHandCursor = true;
         _this.b3.angle = 90;
         
         _this.b5 = _this.add.sprite(580,300,'Level72_mn');
         _this.b5.anchor.setTo(0.5, 0.5);
         _this.b5.name = "mn";
         _this.b5.inputEnabled = true;
         _this.b5.input.useHandCursor = true;
         _this.b5.input.enableDrag(true);
         _this.b5.angle = 270;
         _this.b5.alpha = 0;
     
         _this.b4 = _this.add.sprite(581,299,'Level72_hourHand');
         _this.b4.anchor.setTo(0.1, 0.45);
         _this.b4.inputEnabled = true;
         _this.b4.input.useHandCursor = true;
         //_this.b4.input.enableDrag(true);
         _this.b4.name = "hourHand";
         _this.b4.angle = 270;
        
         _this.b6 = _this.add.sprite(500,300,'Level72_hr');
         _this.b6.anchor.setTo(0.5, 0.5);
         _this.b6.inputEnabled = true;
         _this.b6.input.useHandCursor = true;
         _this.b6.input.enableDrag(true);
         _this.b6.name = "hr";
         _this.b6.angle = 270;
         _this.b6.alpha= 0;
        
         _this.b7 = _this.add.sprite(583,298,'Level72_circleToCover');
         _this.b7.scale.setTo(1.1,1.1);
         _this.b7.anchor.setTo(0.5, 0.5);
         _this.b7.inputEnabled = true;
         _this.b7.input.useHandCursor = true;
         _this.b7.name = "circleToCover";
         _this.b7.angle = 270;
        
        
        _this.cX = _this.b1.centerX;
        _this.cY = _this.b1.centerY+20;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2,0xFF0000);
        _this.circle.drawCircle(_this.cX,_this.cY,_this.radius*2);
        _this.circle.alpha = 0;
        
        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2,0xFF0000);
        _this.circle1.drawCircle(_this.cX,_this.cY,_this.radius1*2);
        _this.circle1.alpha=0;
        _this.b5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
        _this.b6.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.moveSpriteOnCircle(_this.cX,0);
        _this.moveSpriteOnCircle1(_this.cX,0);
        
        //_this.b3.rotation = this.physics.arcade.angleBetween(b3,b4);
        _this.tickMark = _this.add.sprite(800,240,'Level72_tickMark');
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckangle,_this);
        
        _this.crocsGroup.add(_this.b1);
        _this.shakeObjectGroup.add(_this.b2);
        _this.crocsGroup.add(_this.b3);
        _this.crocsGroup.add(_this.b4);
        _this.crocsGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.circle);
        _this.shakeObjectGroup.add(_this.circle1);
        _this.crocsGroup.add(_this.b5);
        _this.crocsGroup.add(_this.b6);
        _this.shakeObjectGroup.add(_this.tickMark);
        
        _this.x = 124;
       _this.y = 285;
        
     
        for(var i=0;i<4;i++)
        {
           _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
           _this.box.name = "box"+i;
           _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
            }
                _this.objGroup.getByName("box0").frame = 1;
                _this.objGroup.getByName("box1").frame = 10;
                _this.objGroup.getByName("box2").frame = 1;
                _this.objGroup.getByName("box3").frame = 1;
         if(_this.wrong){
                _this.shakeObjectGroup.x = 1000;
                _this.objGroup.x = 1000;
                _this.crocsGroup.x = 1000;
                _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
                _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
                _this.Maintween1 = _this.add.tween(_this.objGroup);
                _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
               _this.Maintween2 = _this.add.tween(_this.crocsGroup);
                _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);  
         }
     },
    gotoEighthQuestion:function(){
        _this.questionid = 1;
         _this.stopVoice();
        if(_this.no1==3)
         {
            _this.getVoice();
         }
         _this.bg2.visible = false;
        _this.bg1.visible = true;
         _this.questionNo = 8;
        //console.log("Question number "+_this.questionNo);
         _this.shakeObjectGroup = _this.add.group();
         _this.crocsGroup = _this.add.group();
         _this.objGroup = _this.add.group();
         _this.b1 = _this.add.sprite(580,454,'Level72_clock');
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = "clock";
     
         _this.b2 = _this.add.sprite(225,280,'Level72_inputBox');
         _this.b2.anchor.setTo(0.5);
         _this.b2.name = "inputBox";
      
         _this.b3 = _this.add.sprite(581,298,'Level72_minHand');
         _this.b3.anchor.setTo(0.95, 0.5);
         _this.b3.name = "minHand";
         _this.b3.inputEnabled = true;
         _this.b3.input.useHandCursor = true;
         _this.b3.angle = 90;
         
         _this.b5 = _this.add.sprite(580,300,'Level72_mn');
         _this.b5.anchor.setTo(0.5, 0.5);
         _this.b5.name = "mn";
         _this.b5.inputEnabled = true;
         _this.b5.input.useHandCursor = true;
         _this.b5.input.enableDrag(true);
         _this.b5.angle = 270;
         _this.b5.alpha = 0;
     
         _this.b4 = _this.add.sprite(581,299,'Level72_hourHand');
         _this.b4.anchor.setTo(0.1, 0.45);
         _this.b4.inputEnabled = true;
         _this.b4.input.useHandCursor = true;
         //_this.b4.input.enableDrag(true);
         _this.b4.name = "hourHand";
         _this.b4.angle = 270;
        
         _this.b6 = _this.add.sprite(500,300,'Level72_hr');
         _this.b6.anchor.setTo(0.5, 0.5);
         _this.b6.inputEnabled = true;
         _this.b6.input.useHandCursor = true;
         _this.b6.input.enableDrag(true);
         _this.b6.name = "hr";
         _this.b6.angle = 270;
         _this.b6.alpha= 0;
        
         _this.b7 = _this.add.sprite(583,298,'Level72_circleToCover');
         _this.b7.scale.setTo(1.1,1.1);
         _this.b7.anchor.setTo(0.5, 0.5);
         _this.b7.inputEnabled = true;
         _this.b7.input.useHandCursor = true;
         _this.b7.name = "circleToCover";
         _this.b7.angle = 270;
        
        
        _this.cX = _this.b1.centerX;
        _this.cY = _this.b1.centerY+20;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2,0xFF0000);
        _this.circle.drawCircle(_this.cX,_this.cY,_this.radius*2);
        _this.circle.alpha = 0;
        
        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2,0xFF0000);
        _this.circle1.drawCircle(_this.cX,_this.cY,_this.radius1*2);
        _this.circle1.alpha=0;
        _this.b5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
        _this.b6.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.moveSpriteOnCircle(_this.cX,0);
        _this.moveSpriteOnCircle1(_this.cX,0);
        
        //_this.b3.rotation = this.physics.arcade.angleBetween(b3,b4);
        _this.tickMark = _this.add.sprite(800,240,'Level72_tickMark');
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckangle,_this);
        
        _this.crocsGroup.add(_this.b1);
        _this.shakeObjectGroup.add(_this.b2);
        _this.crocsGroup.add(_this.b3);
        _this.crocsGroup.add(_this.b4);
        _this.crocsGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.circle);
        _this.shakeObjectGroup.add(_this.circle1);
        _this.crocsGroup.add(_this.b5);
        _this.crocsGroup.add(_this.b6);
        _this.shakeObjectGroup.add(_this.tickMark);
        
        _this.x = 124;
        _this.y = 285;
        
     
        for(var i=0;i<4;i++)
        {
           _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
           _this.box.name = "box"+i;
           _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
                _this.objGroup.getByName("box0").frame = 2;
                _this.objGroup.getByName("box1").frame = 3;
                _this.objGroup.getByName("box2").frame = 4;
                _this.objGroup.getByName("box3").frame = 1;
        if(_this.wrong){
                _this.shakeObjectGroup.x = 1000;
                _this.crocsGroup.x = 1000;
                _this.objGroup.x = 1000;
                _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
                _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
                _this.Maintween1 = _this.add.tween(_this.objGroup);
                _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);  
                _this.Maintween2 = _this.add.tween(_this.crocsGroup);
                _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);  
         }
        
     },
    gotoNinthQuestion:function(){
        _this.questionid = 1;
         this.stopVoice();
        if(_this.no1==3)
         {
            _this.getVoice();
         }
         _this.bg2.visible = false;
        _this.bg1.visible = true;
         _this.questionNo = 9;
         //console.log("Question number "+_this.questionNo);
         _this.shakeObjectGroup = _this.add.group();
         _this.objGroup = _this.add.group();
         _this.crocsGroup = _this.add.group();
         _this.b1 = _this.add.sprite(580,454,'Level72_clock');
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = "clock";
     
         _this.b2 = _this.add.sprite(225,280,'Level72_inputBox');
         _this.b2.anchor.setTo(0.5);
         _this.b2.name = "inputBox";
      
         _this.b3 = _this.add.sprite(579,299,'Level72_minHand');
         _this.b3.anchor.setTo(0.95, 0.5);
         _this.b3.name = "minHand";
         _this.b3.inputEnabled = true;
         _this.b3.input.useHandCursor = true;
         _this.b3.angle = 90;
         
         _this.b5 = _this.add.sprite(580,300,'Level72_mn');
         _this.b5.anchor.setTo(0.5, 0.5);
         _this.b5.name = "mn";
         _this.b5.inputEnabled = true;
         _this.b5.input.useHandCursor = true;
         _this.b5.input.enableDrag(true);
         _this.b5.angle = 270;
         _this.b5.alpha = 0;
     
         _this.b4 = _this.add.sprite(581,299,'Level72_hourHand');
         _this.b4.anchor.setTo(0.1, 0.45);
         _this.b4.inputEnabled = true;
         _this.b4.input.useHandCursor = true;
         //_this.b4.input.enableDrag(true);
         _this.b4.name = "hourHand";
         _this.b4.angle = 270;
        
         _this.b6 = _this.add.sprite(500,300,'Level72_hr');
         _this.b6.anchor.setTo(0.5, 0.5);
         _this.b6.inputEnabled = true;
         _this.b6.input.useHandCursor = true;
         _this.b6.input.enableDrag(true);
         _this.b6.name = "hr";
         _this.b6.angle = 270;
         _this.b6.alpha= 0;
        
         _this.b7 = _this.add.sprite(583,298,'Level72_circleToCover');
         _this.b7.scale.setTo(1.1,1.1);
         _this.b7.anchor.setTo(0.5, 0.5);
         _this.b7.inputEnabled = true;
         _this.b7.input.useHandCursor = true;
         _this.b7.name = "circleToCover";
         _this.b7.angle = 270;
        
        _this.cX = _this.b1.centerX;
        _this.cY = _this.b1.centerY+20;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2,0xFF0000);
        _this.circle.drawCircle(_this.cX,_this.cY,_this.radius*2);
        _this.circle.alpha = 0;
        
        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2,0xFF0000);
        _this.circle1.drawCircle(_this.cX,_this.cY,_this.radius1*2);
        _this.circle1.alpha=0;
        _this.b5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
        _this.b6.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.moveSpriteOnCircle(_this.cX,0);
        _this.moveSpriteOnCircle1(_this.cX,0);
        
        //_this.b3.rotation = this.physics.arcade.angleBetween(b3,b4);
        _this.tickMark = _this.add.sprite(800,240,'Level72_tickMark');
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckangle,_this);
        
        _this.crocsGroup.add(_this.b1);
        _this.shakeObjectGroup.add(_this.b2);
        _this.crocsGroup.add(_this.b3);
        _this.crocsGroup.add(_this.b4);
        _this.crocsGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.circle);
        _this.shakeObjectGroup.add(_this.circle1);
        _this.crocsGroup.add(_this.b5);
        _this.crocsGroup.add(_this.b6);
        _this.shakeObjectGroup.add(_this.tickMark);
        
        _this.x = 124;
        _this.y = 285;
        
     
        for(var i=0;i<4;i++)
        {
           _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
           _this.box.name = "box"+i;
           _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
               _this.x+=59;
        }
                _this.objGroup.getByName("box0").frame = 1;
                _this.objGroup.getByName("box1").frame = 8;
                _this.objGroup.getByName("box2").frame = 2;
                _this.objGroup.getByName("box3").frame = 6;
        if(_this.wrong){
                _this.shakeObjectGroup.x = 1000;
                _this.objGroup.x = 1000;
                _this.crocsGroup.x = 1000;
                _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
                _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
                _this.Maintween1 = _this.add.tween(_this.objGroup);
                _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);  
               _this.Maintween2 = _this.add.tween(_this.crocsGroup);
                _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);  
         }
      
        
     },
    gotoTenthQuestion:function(){
    _this.questionid = 1;
         _this.stopVoice();
        if(_this.no1==3)
         {
            _this.getVoice();
         }
         _this.bg2.visible = false;
        _this.bg1.visible = true;
        _this.questionNo = 10;
         //console.log("Question number "+_this.questionNo);
         _this.shakeObjectGroup = _this.add.group();
         _this.objGroup = _this.add.group();
         _this.crocsGroup = _this.add.group();
         _this.b1 = _this.add.sprite(580,454,'Level72_clock');
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = "clock";
     
         _this.b2 = _this.add.sprite(225,280,'Level72_inputBox');
         _this.b2.anchor.setTo(0.5);
         _this.b2.name = "inputBox";
      
         _this.b3 = _this.add.sprite(580,299,'Level72_minHand');
         _this.b3.anchor.setTo(0.95, 0.5);
         _this.b3.name = "minHand";
         _this.b3.inputEnabled = true;
         _this.b3.input.useHandCursor = true;
         _this.b3.angle = 90;
         
         _this.b5 = _this.add.sprite(580,300,'Level72_mn');
         _this.b5.anchor.setTo(0.5, 0.5);
         _this.b5.name = "mn";
         _this.b5.inputEnabled = true;
         _this.b5.input.useHandCursor = true;
         _this.b5.input.enableDrag(true);
         _this.b5.angle = 270;
         _this.b5.alpha = 0;
     
         _this.b4 = _this.add.sprite(581,299,'Level72_hourHand');
         _this.b4.anchor.setTo(0.1, 0.45);
         _this.b4.inputEnabled = true;
         _this.b4.input.useHandCursor = true;
         //_this.b4.input.enableDrag(true);
         _this.b4.name = "hourHand";
         _this.b4.angle = 270;
        
         _this.b6 = _this.add.sprite(500,300,'Level72_hr');
         _this.b6.anchor.setTo(0.5, 0.5);
         _this.b6.inputEnabled = true;
         _this.b6.input.useHandCursor = true;
         _this.b6.input.enableDrag(true);
         _this.b6.name = "hr";
         _this.b6.angle = 270;
         _this.b6.alpha= 0;
        
         _this.b7 = _this.add.sprite(583,298,'Level72_circleToCover');
         _this.b7.scale.setTo(1.1,1.1);
         _this.b7.anchor.setTo(0.5, 0.5);
         _this.b7.inputEnabled = true;
         _this.b7.input.useHandCursor = true;
         _this.b7.name = "circleToCover";
         _this.b7.angle = 270;
        
        _this.cX = _this.b1.centerX;
        _this.cY = _this.b1.centerY+20;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2,0xFF0000);
        _this.circle.drawCircle(_this.cX,_this.cY,_this.radius*2);
        _this.circle.alpha = 0;
        
        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2,0xFF0000);
        _this.circle1.drawCircle(_this.cX,_this.cY,_this.radius1*2);
        _this.circle1.alpha=0;
        _this.b5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
        _this.b6.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.moveSpriteOnCircle(_this.cX,0);
        _this.moveSpriteOnCircle1(_this.cX,0);
        
        //_this.b3.rotation = this.physics.arcade.angleBetween(b3,b4);
        _this.tickMark = _this.add.sprite(800,240,'Level72_tickMark');
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckangle,_this);
        
        _this.crocsGroup.add(_this.b1);
        _this.shakeObjectGroup.add(_this.b2);
        _this.crocsGroup.add(_this.b3);
        _this.crocsGroup.add(_this.b4);
        _this.crocsGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.circle);
        _this.shakeObjectGroup.add(_this.circle1);
        _this.crocsGroup.add(_this.b5);
        _this.crocsGroup.add(_this.b6);
        _this.shakeObjectGroup.add(_this.tickMark);
        
        _this.x = 124;
        _this.y = 285;
        
     
        for(var i=0;i<4;i++)
        {
           _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
           _this.box.name = "box"+i;
           _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
                _this.objGroup.getByName("box0").frame = 1;
                _this.objGroup.getByName("box1").frame = 5;
                _this.objGroup.getByName("box2").frame = 5;
                _this.objGroup.getByName("box3").frame = 6;
        if(_this.wrong){
                _this.shakeObjectGroup.x = 1000;
                _this.objGroup.x = 1000;
                _this.crocsGroup.x = 1000;
                _this.Maintween = this.add.tween(_this.shakeObjectGroup);
                _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
                _this.Maintween1 = this.add.tween(_this.objGroup);
                _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0); 
                _this.Maintween2 = this.add.tween(_this.crocsGroup);
                _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);  
         }
      
    },
    gotoEleventhQuestion:function(){
    _this.questionid = 1;
         _this.stopVoice();
        if(_this.no1==3)
         {
            _this.getVoice();
         }
         _this.bg2.visible = false;
        _this.bg1.visible = true;
   _this.questionNo = 11;
         //console.log("Question number "+_this.questionNo);
         _this.shakeObjectGroup = _this.add.group();
         _this.objGroup = _this.add.group();
         _this.crocsGroup = _this.add.group();
         _this.b1 = _this.add.sprite(580,454,'Level72_clock');
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = "clock";
     
         _this.b2 = _this.add.sprite(225,280,'Level72_inputBox');
         _this.b2.anchor.setTo(0.5);
         _this.b2.name = "inputBox";
      
         _this.b3 = _this.add.sprite(580,299,'Level72_minHand');
         _this.b3.anchor.setTo(0.95, 0.5);
         _this.b3.name = "minHand";
         _this.b3.inputEnabled = true;
         _this.b3.input.useHandCursor = true;
         _this.b3.angle = 90;
         
         _this.b5 = _this.add.sprite(580,300,'Level72_mn');
         _this.b5.anchor.setTo(0.5, 0.5);
         _this.b5.name = "mn";
         _this.b5.inputEnabled = true;
         _this.b5.input.useHandCursor = true;
         _this.b5.input.enableDrag(true);
         _this.b5.angle = 270;
         _this.b5.alpha = 0;
     
         _this.b4 = _this.add.sprite(581,300,'Level72_hourHand');
         _this.b4.anchor.setTo(0.1, 0.45);
         _this.b4.inputEnabled = true;
         _this.b4.input.useHandCursor = true;
         //_this.b4.input.enableDrag(true);
         _this.b4.name = "hourHand";
         _this.b4.angle = 270;
        
         _this.b6 = _this.add.sprite(500,300,'Level72_hr');
         _this.b6.anchor.setTo(0.5, 0.5);
         _this.b6.inputEnabled = true;
         _this.b6.input.useHandCursor = true;
         _this.b6.input.enableDrag(true);
         _this.b6.name = "hr";
         _this.b6.angle = 270;
         _this.b6.alpha= 0;
        
         _this.b7 = _this.add.sprite(583,298,'Level72_circleToCover');
         _this.b7.scale.setTo(1.1,1.1);
         _this.b7.anchor.setTo(0.5, 0.5);
         _this.b7.inputEnabled = true;
         _this.b7.input.useHandCursor = true;
         _this.b7.name = "circleToCover";
         _this.b7.angle = 270;
        
        
        _this.cX = _this.b1.centerX;
        _this.cY = _this.b1.centerY+20;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2,0xFF0000);
        _this.circle.drawCircle(_this.cX,_this.cY,_this.radius*2);
        _this.circle.alpha = 0;
        
        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2,0xFF0000);
        _this.circle1.drawCircle(_this.cX,_this.cY,_this.radius1*2);
        _this.circle1.alpha=0;
        _this.b5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
        _this.b6.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.moveSpriteOnCircle(_this.cX,0);
        _this.moveSpriteOnCircle1(_this.cX,0);
        
        //_this.b3.rotation = this.physics.arcade.angleBetween(b3,b4);
        _this.tickMark = _this.add.sprite(800,240,'Level72_tickMark');
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckangle,_this);
        
        _this.crocsGroup.add(_this.b1);
        _this.shakeObjectGroup.add(_this.b2);
        _this.crocsGroup.add(_this.b3);
        _this.crocsGroup.add(_this.b4);
        _this.crocsGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.circle);
        _this.shakeObjectGroup.add(_this.circle1);
        _this.crocsGroup.add(_this.b5);
        _this.crocsGroup.add(_this.b6);
        _this.shakeObjectGroup.add(_this.tickMark);
        
        _this.x = 124;
        _this.y = 285;
        
     
        for(var i=0;i<4;i++)
        {
           _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
           _this.box.name = "box"+i;
           _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
                _this.objGroup.getByName("box0").frame = 1;
                _this.objGroup.getByName("box1").frame = 6;
                _this.objGroup.getByName("box2").frame = 5;
                _this.objGroup.getByName("box3").frame = 1;
        if(_this.wrong){
                _this.shakeObjectGroup.x = 1000;
                _this.objGroup.x = 1000;
                _this.crocsGroup.x = 1000;
                _this.Maintween = this.add.tween(_this.shakeObjectGroup);
                _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
                _this.Maintween1 = this.add.tween(_this.objGroup);
                _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0); 
                _this.Maintween2 = this.add.tween(_this.crocsGroup);
                _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);  
         } 
},
    gotoTwevelvethQuestion:function(){
    _this.questionid = 1;
         _this.stopVoice();
        if(_this.no1==3)
         {
            _this.getVoice();
         }
         _this.bg2.visible = false;
         _this.bg1.visible = true;
         _this.questionNo = 12;
         //console.log("Question number "+_this.questionNo);
         _this.shakeObjectGroup = _this.add.group();
         _this.crocsGroup = _this.add.group();
         _this.objGroup = _this.add.group();
         _this.b1 = _this.add.sprite(580,454,'Level72_clock');
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = "clock";
     
         _this.b2 = _this.add.sprite(225,280,'Level72_inputBox');
         _this.b2.anchor.setTo(0.5);
         _this.b2.name = "inputBox";
      
         _this.b3 = _this.add.sprite(580,300,'Level72_minHand');
         //_this.b3.anchor.setTo(0.95, 0.5);
         _this.b3.anchor.setTo(0.95, 0.5);
         _this.b3.name = "minHand";
         _this.b3.inputEnabled = true;
         _this.b3.input.useHandCursor = true;
         _this.b3.angle = 90;
         
         _this.b5 = _this.add.sprite(580,300,'Level72_mn');
         _this.b5.anchor.setTo(0.5, 0.5);
         _this.b5.name = "mn";
         _this.b5.inputEnabled = true;
         _this.b5.input.useHandCursor = true;
         _this.b5.input.enableDrag(true);
         _this.b5.angle = 270;
         _this.b5.alpha = 0;
     
         _this.b4 = _this.add.sprite(581,300,'Level72_hourHand');
         //_this.b4.anchor.setTo(0.1, 0.45);
         _this.b4.anchor.setTo(0.1, 0.45);
         _this.b4.inputEnabled = true;
         _this.b4.input.useHandCursor = true;
         //_this.b4.input.enableDrag(true);
         _this.b4.name = "hourHand";
         _this.b4.angle = 270;
        
         _this.b6 = _this.add.sprite(500,300,'Level72_hr');
         _this.b6.anchor.setTo(0.5, 0.5);
         _this.b6.inputEnabled = true;
         _this.b6.input.useHandCursor = true;
         _this.b6.input.enableDrag(true);
         _this.b6.name = "hr";
         _this.b6.angle = 270;
         _this.b6.alpha= 0; 
        
         _this.b7 = _this.add.sprite(583,298,'Level72_circleToCover');
         _this.b7.scale.setTo(1.1,1.1);
         _this.b7.anchor.setTo(0.5, 0.5);
         _this.b7.inputEnabled = true;
         _this.b7.input.useHandCursor = true;
         _this.b7.name = "circleToCover";
         _this.b7.angle = 270;
       
        
        _this.cX = _this.b1.centerX;
        _this.cY = _this.b1.centerY+20;

        _this.circle = _this.add.graphics();
        _this.circle.lineStyle(2,0xFF0000);
        _this.circle.drawCircle(_this.cX,_this.cY,_this.radius*2);
        _this.circle.alpha = 0;
        
        _this.circle1 = _this.add.graphics();
        _this.circle1.lineStyle(2,0xFF0000);
        _this.circle1.drawCircle(_this.cX,_this.cY,_this.radius1*2);
        _this.circle1.alpha=0;
        _this.b5.events.onDragUpdate.add(_this.onDragUpdate1, _this);
        _this.b6.events.onDragUpdate.add(_this.onDragUpdate, _this);
        _this.moveSpriteOnCircle(_this.cX,0);
        _this.moveSpriteOnCircle1(_this.cX,0);
        
        //_this.b3.rotation = this.physics.arcade.angleBetween(b3,b4);
        _this.tickMark = _this.add.sprite(800,240,'Level72_tickMark');
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckangle,_this);
        
        _this.crocsGroup.add(_this.b1);
        _this.shakeObjectGroup.add(_this.b2);
        _this.crocsGroup.add(_this.b3);
        _this.crocsGroup.add(_this.b4);
        _this.crocsGroup.add(_this.b7);
        _this.shakeObjectGroup.add(_this.circle);
        _this.shakeObjectGroup.add(_this.circle1);
        _this.crocsGroup.add(_this.b5);
        _this.crocsGroup.add(_this.b6);
        _this.shakeObjectGroup.add(_this.tickMark);
        
        _this.x = 124;
        _this.y = 285;
        
     
        for(var i=0;i<4;i++)
        {
           _this.box =  _this.objGroup.create(_this.x,_this.y,'Level72_showNumbers');
           _this.box.name = "box"+i;
           _this.box.anchor.setTo(0.5);
            if(i==1){
                _this.x+=74;
            }
            else
                _this.x+=59;
        }
                _this.objGroup.getByName("box0").frame = 1;
                _this.objGroup.getByName("box1").frame = 5;
                _this.objGroup.getByName("box2").frame = 6;
                _this.objGroup.getByName("box3").frame = 6;
        if(_this.wrong){
                _this.shakeObjectGroup.x = 1000;
                _this.objGroup.x = 1000;
                _this.crocsGroup.x = 1000;
                _this.Maintween = _this.add.tween(_this.shakeObjectGroup);
                _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
                _this.Maintween1 = _this.add.tween(_this.objGroup);
                _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);  
                _this.Maintween2 = _this.add.tween(_this.crocsGroup);
                _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);  
         } 
    },
    
 onDragUpdate:function() {
      _this.b6.events.onDragStart.add(
            function(target){
                
              //  var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "drag", 
				res_id: "Level7.2_hourHand", 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
            },_this);
    
    _this.b6.events.onDragStop.add(
            function(target){
                
              //  var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "drop", 
				res_id: "Level7.2_hourHand", 
				access_token: window.acctkn 
			} 
            },_this);
			//absdsjsapi.saveInteractEvent(interactEvent);
    var mouseX = _this.input.x;
    var mouseY = _this.input.y;
    _this.moveSpriteOnCircle(mouseX, mouseY);
    _this.b4.rotation = _this.physics.arcade.angleBetween(_this.b4,_this.b6);
    _this.b6.rotation = _this.physics.arcade.angleBetween(_this.b6,_this.b4);   
    //console.log("Hour "+_this.b4.angle);
    _this.b6.events.onDragStop.removeAll(); 
},
onDragUpdate1:function() {
    
    _this.b5.events.onDragStart.add(
            function(target){
                
              //  var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "drag", 
				res_id: "Level7.2_minHand", 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
            },_this);
    
    _this.b5.events.onDragStop.add(
            function(target){
                
              //  var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "drop", 
				res_id: "Level7.2_minHand",  
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
            },_this);
    
    var mouseX = _this.input.x;
    var mouseY = _this.input.y;
    this.moveSpriteOnCircle1(mouseX, mouseY)
     
    _this.b3.rotation = _this.physics.arcade.angleBetween(_this.b5,_this.b3);
    _this.b5.rotation = _this.physics.arcade.angleBetween(_this.b5,_this.b3);
    //console.log("Min :"+_this.b5.angle);
        _this.b5.events.onDragStop.removeAll(); 
},
 moveSpriteOnCircle:function(x,y) {
    
    _this.theta = Math.atan2(x-_this.cX, y-_this.cY)
    
    var newX = Math.sin(_this.theta) * _this.radius;
    var newY = Math.cos(_this.theta) * _this.radius;
    
    _this.b6.x=_this.cX + newX;
    _this.b6.y=_this.cY + newY;
      
}, 
moveSpriteOnCircle1:function(x,y) {
    
    _this.theta = Math.atan2(x-_this.cX, y-_this.cY)
    
    var newX = Math.sin(_this.theta) * _this.radius1;
    var newY = Math.cos(_this.theta) * _this.radius1;
    
    _this.b5.x=_this.cX + newX;
    _this.b5.y=_this.cY + newY;
},
toCheckangle :function (target){
    
    	_this.noofAttempts++;
			//var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "Level7.2_TickButton", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
    
     target.events.onInputDown.removeAll();
    //console.log("Tick");
    //console.log(_this.b3.angle);
    //console.log(_this.b4.angle);
    _this.tickMark.frame=1;
    if(_this.questionNo ==7){
        if((_this.b3.angle>75 && _this.b3.angle<105)&&(_this.b4.angle>-180 && _this.b4.angle<-165 || _this.b4.angle>165 && _this.b4.angle<180))
        {
           //console.log("owow");
            _this.correctAns();
        }
        else
            _this.wrongAns();
    } 
    if(_this.questionNo ==8){
        if((_this.b3.angle>-107 && _this.b3.angle<-73)&&(_this.b4.angle>-110 && _this.b4.angle<-75 ))//|| _this.b4.angle>175 && _this.b4.angle<180))
        {
           //console.log("owow");
            _this.correctAns();
        }
        else
            _this.wrongAns();
    }
    if(_this.questionNo ==9){
        if((_this.b4.angle>102 && _this.b4.angle<134)&&(_this.b3.angle>-180 && _this.b3.angle<-165 || _this.b3.angle>165 && _this.b3.angle<180))
        {
           //console.log("owow");
            _this.correctAns();
        }
        else
            _this.wrongAns();
    }  
    if(_this.questionNo ==10){
        if((_this.b4.angle>13 && _this.b4.angle<44)&&(_this.b3.angle>-18 && _this.b3.angle<-0 || _this.b3.angle>0 && _this.b3.angle<15))
        {
           //console.log("owow");
            _this.correctAns();
        }
        else
           _this.wrongAns();
    } 
    if(_this.questionNo ==11){
        if((_this.b4.angle>44 && _this.b4.angle<78)&&(_this.b3.angle>-47 && _this.b3.angle<-12 ))//|| _this.b3.angle>0 && _this.b3.angle<10))
        {
            //console.log("owow");
            _this.correctAns();
        }
        else
            _this.wrongAns();
    } if(_this.questionNo ==12){
        if((_this.b4.angle>13 && _this.b4.angle<46)&&(_this.b3.angle>40 && _this.b3.angle<75 ))
        {
            //console.log("owow");
            _this.correctAns();
        }
        else
            _this.wrongAns();
    } 
},

    addNumberPad:function(){
        
        _this.numGroup = this.add.group();
        //_this.objGroup = this.add.group();
        _this.x = 230;
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,500,'numbg');  
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.name = i;
            
            _this.numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Alte Haas Grotesk';
            _this.numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            _this.numTxt.fill = '#C21626';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild(_this.numTxt);
            
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=50;
        }

       
      //  _this.wrongbtn.events.onInputDown.add(function(){ClickSound.play();enterTxt.setText("");_this.selectedAns="";},this);
        _this.tickMark = _this.add.sprite(800,230,'Level72_tickMark');
        _this.tickMark.inputEnabled = true; 
        _this.tickMark.input.useHandCursor = true; 
        _this.tickMark.events.onInputDown.add(function(target){
            
           // var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "Click", 
                res_id: "Level7.2_TickButton", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            
            
             //console.log("1"+_this.objGroup.getByName("box0").frameName);
             //console.log("2"+_this.objGroup.getByName("box1").frameName);
            _this.selectedAns+=_this.objGroup.getByName("box0").frameName
            _this.selectedAns+=_this.objGroup.getByName("box1").frameName
            _this.selectedAns+=_this.objGroup.getByName("box2").frameName
            _this.selectedAns+=_this.objGroup.getByName("box3").frameName
             _this.stopVoice();
            _this.speakerbtn.inputEnabled=false;
            _this.tickMark.frame = 1;
            ClickSound.play();
            //console.log(_this.selectedAns);
            //console.log("r "+_this.rightAns);
            //if(_this.selectedAns==_this.rightAns||_this.selectedAns=="0"+_this.rightAns||_this.selectedAns=="00"+_this.rightAns)  
            if(_this.selectedAns==_this.rightAns||_this.selectedAns==_this.rightAns1||_this.selectedAns==_this.rightAns2||_this.selectedAns==_this.rightAns3||_this.selectedAns==_this.rightAns4)  
                {
                    //console.log("correct");
                    target.events.onInputDown.removeAll();
                    /*_this.objGroup.getByName('tape15cm').frame = 1;
                    _this.objGroup.getByName('tape15cm').frameName = _this.rightAns;*/
                    //mainSprite.frame = 1;
                        //console.log("wrong");
                    _this.noofAttempts++;
                            if(_this.timer)
                            {
                                _this.timer.stop();
                                _this.timer = null;
                            }
                       _this.currentTime = window.timeSaveFunc();
                                var saveAsment = 
                                { 
                                    id_game_play: _this.savedVar,
                                    id_question: _this.questionid,   
                                    pass: "Yes",
                                    time2answer: _this.AnsTimerCount,
                                    attempts: _this.noofAttempts,
                                    date_time_submission: _this.currentTime, 
                                    access_token: window.acctkn 
                                }

                       // absdsjsapi.saveAssessment(saveAsment);

                       telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
            
                      _this.chime = _this.add.audio('buzzSound');
                    _this.chime.play();
                    //var anim = equation.animations.add('equation');
                    //anim.play(1);
                    this.time.events.add(500, function(){
                    
                    _this.celebr = _this.add.audio('celebr');
                    _this.celebr.play();
                    
                    _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                   // //console.log(starAnim);
                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
                    _this.anim4.play();
                    //anim.onComplete.add(function(){this.removeEverthing();},this);
                   // this.time.events.add(3000, function(){this.removeEverthing();},this);
                    _this.count1++;
                    //equation.frame = eqnum+1;
                   // txtbox.frame = 1;
                  /*  _this.tween = this.add.tween(equation.scale);
                    _this.tween.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);*/
                     _this.b2.frame = 1;
                    _this.tween1 = this.add.tween(_this.b2.scale);
                    _this.tween1.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
                    _this.tween2 = this.add.tween(_this.objGroup.getByName("box0").scale);
                    _this.tween2.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0);
                    _this.tween3 = this.add.tween(_this.objGroup.getByName("box1").scale);
                    _this.tween3.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0);
                    _this.tween4 = this.add.tween(_this.objGroup.getByName("box2").scale);
                    _this.tween4.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0);
                    _this.tween5 = this.add.tween(_this.objGroup.getByName("box3").scale);
                    _this.tween5.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0);
                    _this.tween1.onComplete.add(function(){
                      
                       // equation.frame = eqnum;
                        //txtbox.frame = 0;
                        
                        /*_this.tween1 = this.add.tween(equation.scale);
                        tween1.to({ x:1 , y:1}, 300, 'Linear', true, 0);*/
                       
                        _this.tween2 = this.add.tween(_this.b2.scale);
                        _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween1 = this.add.tween(_this.objGroup.getByName("box0").scale);
                        _this.tween1.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween3 = this.add.tween(_this.objGroup.getByName("box1").scale);
                        _this.tween3.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween4 = this.add.tween(_this.objGroup.getByName("box2").scale);
                        _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween5 = this.add.tween(_this.objGroup.getByName("box3").scale);
                        _this.tween5.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                          
                        _this.tween2.onComplete.add(function(){
                         _this.tween1 = this.add.tween(_this.b2.scale);
                         _this.tween1.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
                         _this.tween2 = this.add.tween(_this.objGroup.getByName("box0").scale);
                         _this.tween2.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0); 
                        _this.tween3 = this.add.tween(_this.objGroup.getByName("box1").scale);
                         _this.tween3.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0);
                        _this.tween4 = this.add.tween(_this.objGroup.getByName("box2").scale);
                         _this.tween4.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0);
                        _this.tween5 = this.add.tween(_this.objGroup.getByName("box3").scale);
                         _this.tween5.to({ x:1.2 , y:1.2}, 300, 'Linear', true, 0);
                        _this.tween1.onComplete.add(function(){
                             _this.tween2 = this.add.tween(_this.b2.scale);
                             _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                            _this.tween1 = this.add.tween(_this.objGroup.getByName("box0").scale);
                             _this.tween1.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                            _this.tween5 = this.add.tween(_this.objGroup.getByName("box1").scale);
                             _this.tween5.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                            _this.tween3 = this.add.tween(_this.objGroup.getByName("box2").scale);
                             _this.tween3.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                            _this.tween4 = this.add.tween(_this.objGroup.getByName("box3").scale);
                             _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                    },_this);
                    },_this);
                    },_this);
                    },_this);
                    _this.time.events.add(2000, function(){_this.removeEverthing();},_this);
                }
            else
                {
                    _this.noofAttempts++;
                    //console.log("_this.wrong");
                    _this.selectedAns = "";
                   // enterTxt.setText("");
                    _this.shake.shake(10, _this.objGroup);
                    _this.wmusic = this.add.audio('waudio');
		              _this.wmusic.play(); 
                    //aiyoh.play(); 
                    _this.speakerbtn.inputEnabled=true;
                    _this.speakerbtn.input.useHandCursor=true;
                   _this.time.events.add(1000, function(){_this.backToOriginalPosition();},_this);
  
                }
        },_this);
    },
    
     numClicked:function(target){
        //console.log(target.name);
        //console.log("l " +_this.selectedAns.length);
        //console.log("ll " +_this.objGroup.children.length);

        _this.vx = target.x;   
        _this.vy = target.y; 
          target.input.enableDrag(true);
         
			//var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "drag", 
				res_id: "Level7.2_"+target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
             
       //target.frame = 1;
      _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
        target.events.onDragStop.add(
            function(target){
                
              //  var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drop", 
                res_id: "Level7.2_"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
                
                 
             for(var i=0;i<4;i++)
                {
                            //console.log("lll " +_this.objGroup.getByName("box0"));
                            //console.log("llll " +_this.objGroup.getByName("box0").frameName);
                    if(_this.checkOverlap(target,_this.objGroup.getByName("box0")))
                        {
                            
                                    //console.log("insider");
                                    //console.log(_this.objGroup.getByName("box0").frame);
                                    _this.objGroup.getByName("box0").frame = target.name+1;
                                   // _this.selectedAns += target.name;
                                    //numGroup.getByName("txtbox").getChildAt(0).setText(_this.selectedAns);
                            break;
                                
                        }
                    if(_this.checkOverlap(target,_this.objGroup.getByName("box1")))
                        {
                                    
                                    //console.log("insider1");
                                    //console.log(_this.objGroup.getByName("box1").frame);
                                    _this.objGroup.getByName("box1").frame = target.name+1;
                                   // _this.selectedAns += target.name;
                                    //numGroup.getByName("txtbox").getChildAt(0).setText(_this.selectedAns);
                            break;
                                
                        }
                    if(_this.checkOverlap(target,_this.objGroup.getByName("box2")))
                        {
                                   
                                    //console.log("insider2");
                                    //console.log(_this.objGroup.getByName("box2").frame);
                                    _this.objGroup.getByName("box2").frame = target.name+1;
                                   // _this.selectedAns += target.name;
                                    //numGroup.getByName("txtbox").getChildAt(0).setText(_this.selectedAns);
                            break;
                                
                        }
                    if(_this.checkOverlap(target,_this.objGroup.getByName("box3")))
                        {
                                
                                    //console.log("insider3");
                                    //console.log(_this.objGroup.getByName("box3").frame);
                                    _this.objGroup.getByName("box3").frame = target.name+1;
                                   // _this.selectedAns += target.name;
                                    //numGroup.getByName("txtbox").getChildAt(0).setText(_this.selectedAns);
                            break;
                                
                        }
                }
                target.events.onDragStop.removeAll(); 
                target.x = _this.vx;   
                target.y = _this.vy;
                            
             },_this);
/*        if(_this.selectedAns.length<1)
        {
            //console.log(_this.objGroup.getByName("box0").frame);
            _this.objGroup.getByName("box0").frame = target.name+1;
            _this.selectedAns += target.name;
            //numGroup.getByName("txtbox").getChildAt(0).setText(_this.selectedAns);
        }
        else if(_this.selectedAns.length<2)
        {
            //console.log(_this.objGroup.getByName("box1").frame);
            _this.objGroup.getByName("box1").frame = target.name+1;
            _this.selectedAns += target.name;
            //numGroup.getByName("txtbox").getChildAt(0).setText(_this.selectedAns);
        } 
         else if(_this.selectedAns.length<3)
        {
            //console.log(_this.objGroup.getByName("box2").frame);
            _this.objGroup.getByName("box2").frame = target.name+1;
            _this.selectedAns += target.name;
            //numGroup.getByName("txtbox").getChildAt(0).setText(_this.selectedAns);
        }
        else if(_this.selectedAns.length<4)
        {
            //console.log(_this.objGroup.getByName("box3").frame);
            _this.objGroup.getByName("box3").frame = target.name+1;
            _this.selectedAns += target.name;
            //numGroup.getByName("txtbox").getChildAt(0).setText(_this.selectedAns);
        }*/
        
       ////console.log(_this.selectedAns);
        
    },
checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);

	},
    
    removeEverthing:function() 
    {
		_this.timer1.stop();
      //  gameBoxGroup.destroy();
      //  _this.crocsGroup.destroy();
      //  _this.objGroup.destroy();
        _this.no1++;
        //console.log("--------------------------"+_this.no1);
        if(_this.no1<6)
        {
             _this.sceneCount++;
            //_this.no1++;
             _this.wrong = true;
            //console.log("here its");
           _this.MaintweenDestroy = this.add.tween(_this.shakeObjectGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);

            _this.MaintweenDestroy1 = this.add.tween(_this.objGroup);
            _this.MaintweenDestroy1.to({ x: -1000}, 0, 'Linear', true, 0);

            _this.MaintweenDestroy2 = this.add.tween(_this.crocsGroup);
            _this.MaintweenDestroy2.to({ x: -1000}, 0, 'Linear', true, 0);
            if(_this.questionNo<=6){
                _this.MaintweenDestroy2 = this.add.tween(_this.numGroup);
                _this.MaintweenDestroy2.to({ x: -1000}, 0, 'Linear', true, 0);
            }
            
            
            //console.log("here its");
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.count =0;
                _this.shakeObjectGroup.destroy();
                _this.objGroup.destroy();
                _this.crocsGroup.destroy();
                _this.countIncrement = 0;
                _this.selectedAns='';
                _this.getQuestion();
            },_this);
            
               
           // tween_this.count=0;
           // this.getQuestion(); 
               
        }
        else
        {
			_this.timer1.stop();
			_this.timer1 = null;
           // ////console.log("gameover");
            _this.selectedAns = '';
            _this.countIncrement = 0;
             _this.stopVoice();
            _this.state.start('grade7_2Score');
        }
    },
    backToOriginalPosition:function(){
       _this.tickMark.frame = 0;
//        _this.MaintweenDestroy = this.add.tween(_this.shakeObjectGroup);
//            MaintweenDestroy.to({ x: -100}, 0, 'Linear', true, 0);
//        
//        _this.MaintweenDestroy1 = this.add.tween(b3);
//            MaintweenDestroy1.to({ x: 160}, 0, 'Linear', true, 0);
        _this.objGroup.getByName("box0").frame = 0;
        _this.objGroup.getByName("box1").frame = 0;
        _this.objGroup.getByName("box2").frame = 0;
        _this.objGroup.getByName("box3").frame = 0;
        _this.selectedAns = "";
        _this.countIncrement = 0;
       /*_this.shakeObjectGroup.destroy();
       _this.b3.destroy();
       equation.destroy();
       _this.objGroup.destroy();*/
       // numGroup.destroy();
       // _this.wrong = false;
       // this.addNumberPad();
        //this.getQuestion();
        
    },
    
    
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			_this.starsGroup.create(this.world.centerX-15, 10, 'starAnim1');
            
			for(var j =0;j<i;j++)
			{
				if(_this.starsGroup.getChildAt(j))
				{
					_this.starsGroup.getChildAt(j).x-=15;
					_this.starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
	correctAns:function(target)
	{
        
        _this.noofAttempts++;
                            if(_this.timer)
                            {
                                _this.timer.stop();
                                _this.timer = null;
                            }
                       _this.currentTime = window.timeSaveFunc();
                                var saveAsment = 
                                { 
                                    id_game_play: _this.savedVar,
                                    id_question: _this.questionid,   
                                    pass: "Yes",
                                    time2answer: _this.AnsTimerCount,
                                    attempts: _this.noofAttempts,
                                    date_time_submission: _this.currentTime, 
                                    access_token: window.acctkn 
                                }

                     //   absdsjsapi.saveAssessment(saveAsment);

                        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
            
		//////console.log("correct");
             _this.stopVoice();
        	       _this.speakerbtn.inputEnabled=false;
        
                    /* _this.chime = _this.add.audio('buzzSound');
                    _this.chime.play();*/
					_this.sound = _this.add.audio('click');
                    _this.sound.play();
        
                    _this.time.events.add(300, function(){
                        
                    _this.celebr = _this.add.audio('celebr');
                    _this.celebr.play();
                        
                    _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                   // //console.log(starAnim);
                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
        
                    _this.anim4.play();
                    _this.count1++;
                    _this.b1.frame = 1;
                    _this.b3.frame = 1;
                    _this.b4.frame = 1;
                    _this.tween1 = this.add.tween(_this.b1.scale);
                    _this.tween1.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
                    _this.tween2 = this.add.tween(_this.b3.scale);
                    _this.tween2.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0); 
                    _this.tween3 = this.add.tween(_this.b4.scale);
                    _this.tween3.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0); 
                   _this.tween4 = this.add.tween(_this.b7.scale);
                    _this.tween4.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
                    _this.tween2.onComplete.add(function(){
            
                        _this.tween1 = this.add.tween(_this.b3.scale);
                        _this.tween1.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween2 = this.add.tween(_this.b1.scale);
                        _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween3 = this.add.tween(_this.b4.scale);
                        _this.tween3.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                        _this.tween4 = this.add.tween(_this.b7.scale);
                        _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                         _this.tween1 = this.add.tween(_this.b1.scale);
                         _this.tween1.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
                        _this.tween2 = this.add.tween(_this.b3.scale);
                         _this.tween2.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
                         _this.tween3 = this.add.tween(_this.b4.scale);
                         _this.tween3.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
                            _this.tween4 = this.add.tween(_this.b7.scale);
                         _this.tween4.to({ x:1.1 , y:1.1}, 300, 'Linear', true, 0);
                    _this.tween1.onComplete.add(function(){
                             _this.tween1 = this.add.tween(_this.b3.scale);
                             _this.tween1.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                        _this.tween2 = this.add.tween(_this.b1.scale);
                             _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                           _this.tween3 = this.add.tween(_this.b4.scale);
                            _this.tween3.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                        _this.tween4 = this.add.tween(_this.b7.scale);
                             _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                        },_this);
                    },_this);
                    },_this);
                    },_this);
                    _this.time.events.add(2000, function(){_this.removeEverthing();},_this);
	},

    wrongAns:function(target)
	{
       // ////console.log("_this.wrong");
        	
        _this.wrong = false;
		//scoretext.setText(selctedLang.score+' : '+score);
       // ////console.log(target);
        //target.tint = 0xA9A9A9;
        
		_this.shake.shake(10, _this.crocsGroup);
		_this.wmusic = this.add.audio('waudio');
		_this.wmusic.play();
      
         _this.speakerbtn.inputEnabled=true;
         _this.speakerbtn.input.useHandCursor=true;
         _this.time.events.add(1000, function(){_this.crocsGroup.destroy();_this.objGroup.destroy();_this.shakeObjectGroup.destroy();_this.timer1.stop();_this.getQuestion();},_this);
        /* _this.b3.anchor.setTo(0.95, 0.5);
         _this.b3.angle = 90;
         _this.b5.anchor.setTo(0.5, 0.5);
         _this.b5.alpha = 100;
         _this.b5.angle = 270;
         _this.b6.anchor.setTo(0.5, 0.5);
         _this.b6.angle = 270;
         _this.b6.alpha =100;
         _this.b4.anchor.setTo(0.1, 0.5);
         _this.b4.angle = 270;


         _this.b4.rotation = this.physics.arcade.angleBetween(b4,_this.b6);
         _this.b6.rotation = this.physics.arcade.angleBetween(_this.b6,b4); 
         _this.b3.rotation = this.physics.arcade.angleBetween(_this.b5,b3);
         _this.b5.rotation = this.physics.arcade.angleBetween(_this.b5,b3);*/
         
        
        	//this.disableListeners();
	},
    

    
    
    update:function(){

    },
    
    getVoice:function(){
        //console.log("voice");
            this.stopVoice();
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
            switch(_this.temp)
            {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:if(window.languageSelected=="English")
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/English/7.2_2.mp3");
                        else if(window.languageSelected=="Hindi")
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Hindi/7.2_2.mp3");
                        else if(window.languageSelected=="Kannada")
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Kannada/7.2_2.mp3");
                       else if(window.languageSelected=="Gujarati")
                        {
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/7.2/7.2_2.mp3");
                        }
						else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Marathi/7.2_2.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Telugu/7.2_2.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Tamil/7.2_2.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Urdu/7.2_2.mp3");
                      } 
					   else
					   {
                           this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Odiya/7.2_2.mp3");
							_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
					   }
                        break;
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:if(window.languageSelected=="English")
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/English/7.2_3.mp3");
                        else if(window.languageSelected=="Hindi")
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Hindi/7.2_3.mp3");
                        else if(window.languageSelected=="Kannada")
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Kannada/7.2_3.mp3");
                        else if(window.languageSelected=="Gujarati")
                        {
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/7.2/7.2_3.mp3");
                        }
						else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Marathi/7.2_3.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Telugu/7.2_3.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Tamil/7.2_3.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2/Urdu/7.2_3.mp3");
                      } 
						else
						{
                            _this.src.setAttribute("src", "sounds/7.3_3.mp3");
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
	
        stopVoice:function(){
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

                if(_this.celebrationSound)
                {
                    if(_this.celebrationSound.isPlaying)
                    {
                        _this.celebrationSound.stop();
                        _this.celebrationSound = null;
                    }
                }
				if(_this.amplify!=null)
				{
					_this.amplify.context.close();
					_this.amplify = null;
				}
        },

        shutdown:function()
        {
			_this.clockTick.loopFull(0);
			_this.clockTick.stop();
			_this.clockTick = null;
            _this.stopVoice();
        }

};