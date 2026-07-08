Game.grade7_1level1=function(){};



Game.grade7_1level1.prototype={


     init:function(game)
    {
        _this = this;
        
       telInitializer.gameIdInit("time7_1",gradeSelected);
        

    },

    preload:function(game){
        if(!window.grade3MT1){

            window.grade3MT1 = true;

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

        this.load.image('Level71_bg',window.baseUrl+'assets/gradeAssets/7.1/bg.png');
        //this.load.image('Level71_bg2',window.baseUrl+'assets/gradeAssets/7.1/bg2.png');
        this.load.image('Level71_backg',window.baseUrl+'assets/gradeAssets/7.1/backg.png');
        this.load.atlas('Level71_clock1',window.baseUrl+'assets/gradeAssets/7.1/clock1.png' ,window.baseUrl+'json/gradeJson/7.1/clock1.json');
        this.load.atlas('Level71_clock2',window.baseUrl+'assets/gradeAssets/7.1/clock2.png' ,window.baseUrl+'json/gradeJson/7.1/clock2.json');
        //this.load.atlas('Level71_clock3',window.baseUrl+'assets/gradeAssets/7.1/clock3.png' ,window.baseUrl+'json.gradeJson/7.1/clock3.json');
        //this.load.atlas('Level71_timer',window.baseUrl+'assets/gradeAssets/7.1/timer.png',window.baseUrl+'json.gradeJson/7.1/timer.json');
        

        //this.load.image('Level71_questionBackground', 'questionBackground.png');

        // this.load.audio('Level71_baudio', ['BackgroundSound.mp3', 'BackgroundSound.ogg']);
        // this.load.audio('Level71_waudio', ['WrongCelebrationSound.mp3', 'WrongCelebrationSound.ogg']);
        //this.load.audio('Level71_ClickSound', 'ClickSound.mp3');
        // this.load.audio('Level71_baudio1', ['BackgroundMusic.mp3', 'BackgroundMusic.ogg']);
        // this.load.audio('Level71_celebr', 'celebration.mp3');

        //this.load.image('Level71_playBg', 'playbg.png');
        
        this.load.image('Level71_langBg', window.baseUrl+'assets/gradeAssets/7.1/langbg.png');
        
        
        //this.load.atlas('Level71_heading',window.baseUrl+'assets/gradeAssets/7.1/hedding.png' ,window.baseUrl+'json.gradeJson/7.1/heading.json');
        //this.load.atlas('Level71_heading1',window.baseUrl+'assets/gradeAssets/7.1/heading1.png' ,window.baseUrl+'json.gradeJson/7.1/heading1.json');
        //this.load.image('Level71_line','Line.png');
        //this.load.image('Level71_celeb', window.baseUrl+'assets/gradeAssets/7.1/c.png');
        this.load.atlas('Level71_CommonBackBtn',window.baseUrl+'assets/gradeAssets/7.1/backbtn.png' ,window.baseUrl+'json/gradeJson/7.1/backbtn.json');
        this.load.atlas('Level71_CommonSpeakerBtn',window.baseUrl+'assets/gradeAssets/7.1/speaker.png' ,window.baseUrl+'json/gradeJson/7.1/speaker.json');
        this.load.image('Level71_headingLine', window.baseUrl+'assets/gradeAssets/7.1/headingLine.png');
        
        this.load.atlas('Level71_starAnim',window.baseUrl+'assets/gradeAssets/7.1/starAnim.png',window.baseUrl+'json/gradeJson/7.1/starAnim.json');
        this.load.atlas('Level71_btn',window.baseUrl+'assets/gradeAssets/7.1/btn.png',window.baseUrl+'json/gradeJson/7.1/btn.json');
        this.load.image('Level71_tittleBar', window.baseUrl+'assets/gradeAssets/7.1/tittleBar.png');
        this.load.atlas('Level71_replay', window.baseUrl+'assets/gradeAssets/7.1/reply.png', window.baseUrl+'json/gradeJson/7.1/reply.json');
        
         // this.load.atlas('Level71_numbg',window.baseUrl+'assets/gradeAssets/7.1/numbg.png',window.baseUrl+'json.gradeJson/7.1/numbg.json'); 
         this.load.atlas('Level71_numbers',window.baseUrl+'assets/gradeAssets/7.1/numbers.png',window.baseUrl+'json/gradeJson/7.1/numbers.json');
         //this.load.atlas('Level71_numbers2',window.baseUrl+'assets/gradeAssets/7.1/numbers2.png',window.baseUrl+'json.gradeJson/7.1/numbers2.json');
       
         
         this.load.atlas('Level71_n1',window.baseUrl+'assets/gradeAssets/7.1/one.png',window.baseUrl+'json/gradeJson/7.1/one.json');
         this.load.atlas('Level71_n2',window.baseUrl+'assets/gradeAssets/7.1/two.png',window.baseUrl+'json/gradeJson/7.1/two.json');
         this.load.atlas('Level71_n3',window.baseUrl+'assets/gradeAssets/7.1/three.png',window.baseUrl+'json/gradeJson/7.1/three.json');
         this.load.atlas('Level71_n4',window.baseUrl+'assets/gradeAssets/7.1/four.png',window.baseUrl+'json/gradeJson/7.1/four.json');
         this.load.atlas('Level71_n5',window.baseUrl+'assets/gradeAssets/7.1/five.png',window.baseUrl+'json/gradeJson/7.1/five.json');
         this.load.atlas('Level71_n6',window.baseUrl+'assets/gradeAssets/7.1/six.png',window.baseUrl+'json/gradeJson/7.1/six.json');
         this.load.atlas('Level71_n7',window.baseUrl+'assets/gradeAssets/7.1/seven.png',window.baseUrl+'json/gradeJson/7.1/seven.json');
         this.load.atlas('Level71_n8',window.baseUrl+'assets/gradeAssets/7.1/eight.png',window.baseUrl+'json/gradeJson/7.1/eight.json');
         this.load.atlas('Level71_n9',window.baseUrl+'assets/gradeAssets/7.1/nine.png',window.baseUrl+'json/gradeJson/7.1/nine.json');
         this.load.atlas('Level71_n10',window.baseUrl+'assets/gradeAssets/7.1/ten.png',window.baseUrl+'json/gradeJson/7.1/ten.json');
         this.load.atlas('Level71_n11',window.baseUrl+'assets/gradeAssets/7.1/eleven.png',window.baseUrl+'json/gradeJson/7.1/eleven.json');
         this.load.atlas('Level71_n12',window.baseUrl+'assets/gradeAssets/7.1/twelve.png',window.baseUrl+'json/gradeJson/7.1/twelve.json');

          //this.load.atlas('num',window.baseUrl+'assets/num.png',window.baseUrl+'json/num.json');
         this.load.atlas('Level71_rightmark',window.baseUrl+'assets/gradeAssets/7.1/rightmark.png',window.baseUrl+'json/gradeJson/7.1/rightmark.json');
        // this.load.image('leftdir',window.baseUrl+'assets/leftdir.png');
         this.load.atlas('Level71_rightdir1',window.baseUrl+'assets/gradeAssets/7.1/rightdir1.png',window.baseUrl+'json/gradeJson/7.1/rightdir1.json');
        // this.load.image('rightdir2',window.baseUrl+'assets/rightdir2.png');
         this.load.atlas('Level71_topdir',window.baseUrl+'assets/gradeAssets/7.1/topdir.png',window.baseUrl+'json/gradeJson/7.1/topdir.json');
        

    }

    },
    
    
	create:function(game){
        
		_this.amplify = null;
        _this.questionid = null;
        _this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=0;
		
		_this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		
        
     _this.minutehand;
     _this.hourhand;
     _this.rightCount = 0 ;    
     _this.numGrp;
     _this.randomgrp;
        _this.correctflag = 0
        _this.correct = 0
              
        _this.baudio = _this.add.audio('clocktick');
         _this.baudio.play();
         _this.baudio.loopFull(1);
        
        _this.n1Check = false;
        _this.n2Check = false;
        _this.n3Check = false;
        _this.n4Check = false;
        
        _this.questionNo = 0;
        _this.wrongFlag = 0;
        _this.toCheck = true;
        _this.toCheck1 = true;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.AnsTimerCount=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6];
        _this.qArrays = _this.shuffle(_this.qArrays);

        
        background = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height, 'Level71_backg');
        
		_this.TopBar=_this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.scale.setTo(1,1);
		
      _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            ////console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopvoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade3levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'Level42A_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice1();
            
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
		
        _this.generateStarsForTheScene(6);
            
        _this.rightmark = _this.add.sprite(780,300,'Level71_rightmark')
        _this.rightmark.alpha = 0;
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


    getQuestion:function(target)
    {
         _this.noofAttempts = 0;
        _this.sceneCount++;
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
		
    	//console.log("get"+_this.qArrays[_this.no11]);
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
       // _this.no11 = 1;
        
         _this.questionid =1;
    	switch(_this.qArrays[_this.no11])
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
            
    	}
        
       
        
    },
    stopvoice:function(){
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
   
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			_this.starsGroup.create(_this.world.centerX-15, 10, 'starAnim1');
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
  
    update:function(){
//    	if(celebration1)
//		{
//			celebAnim1.tilePosition.y += 8;
//		}
    },


 gotoFirstQuestion:function(){
       
     _this.questionid = 1;
     _this.questionNo = 1;
        _this.getVoice1();
        _this.clockgroup=_this.add.group();
        _this.randomgrp1=_this.add.group();
    	//_this.no11++;
        _this.clock = _this.add.sprite(490,300,'Level71_clock1');
    	_this.clock.anchor.setTo(0.5);
        _this.clock.scale.setTo(1,1);
     
        _this.randomgrp=_this.add.group();
     
        _this.circlegraphics1 = _this.add.graphics(0, 0);
        _this.circlegraphics1.beginFill(0x0FFFF, 1);
        _this.circlegraphics1.drawCircle(-50, -10, 38);
        _this.circlegraphics1.x = 614;
        _this.circlegraphics1.y = 215;
        _this.circlegraphics1.alpha = 0;
        _this.circlegraphics1.name = "one";
        _this.circlegraphics1.boundsPadding = 0;
     
        _this.circlegraphics2 = _this.add.graphics(0, 0);
        _this.circlegraphics2.beginFill(0xFF0000, 1);
        _this.circlegraphics2.drawCircle(-50, -10, 37);
        _this.circlegraphics2.x = 610;
        _this.circlegraphics2.y = 460;
        _this.circlegraphics2.alpha = 0;
        _this.circlegraphics2.name = "five";
        _this.circlegraphics2.boundsPadding = 0;
     
        _this.circlegraphics3 = _this.add.graphics(0, 0);
        _this.circlegraphics3.beginFill(0xFF00FF, 1);
        _this.circlegraphics3.drawCircle(-50, -10, 37);
        _this.circlegraphics3.x = 415;
        _this.circlegraphics3.y = 405;
        _this.circlegraphics3.alpha = 0;
        _this.circlegraphics3.name = "eight";
        _this.circlegraphics3.boundsPadding = 0;
     
        _this.circlegraphics4 = _this.add.graphics(0, 0);
        _this.circlegraphics4.beginFill(0x08000, 1);
        _this.circlegraphics4.drawCircle(-50, -10, 37);
        _this.circlegraphics4.x = 410;
        _this.circlegraphics4.y = 270;
        _this.circlegraphics4.alpha = 0;
        _this.circlegraphics4.name = "ten";
        _this.circlegraphics4.boundsPadding = 0;
     
       _this.randomgrp.add(_this.circlegraphics1);
       _this.randomgrp.add(_this.circlegraphics2);
       _this.randomgrp.add(_this.circlegraphics3);
       _this.randomgrp.add(_this.circlegraphics4);
    	
        _this.numGrp = _this.add.group();
        
        _this.numb1 = _this.add.sprite(564,205,'Level71_numbers');
        _this.numb1.anchor.setTo(0.5);
        _this.numb1.scale.setTo(0.7,0.7);
        _this.numb1.name = "one";
        
    
        _this.numb2 = _this.add.sprite(618,255,'Level71_numbers');
    	_this.numb2.anchor.setTo(0.5);
    	_this.numb2.scale.setTo(0.7,0.7);
    	_this.numb2.frame = 2;
        _this.numb2.name = "two";
     
        _this.numb3 = _this.add.sprite(638,328,'Level71_numbers');
    	_this.numb3.anchor.setTo(0.5);
    	_this.numb3.scale.setTo(0.7,0.7);
        _this.numb3.frame = 3;
        _this.numb3.name ="three";
     
        _this.numb4 = _this.add.sprite(615,398,'Level71_numbers');
    	_this.numb4.anchor.setTo(0.5);
    	_this.numb4.scale.setTo(0.7,0.7);
        _this.numb4.frame = 4;
        _this.numb4.name= "four";
     
        _this.numb5 = _this.add.sprite(560,450,'Level71_numbers');
        _this.numb5.anchor.setTo(0.5);
        _this.numb5.scale.setTo(0.7,0.7);
        _this.numb5.name = "five";
       
     
        _this.numb6 = _this.add.sprite(490,476,'Level71_numbers');
    	_this.numb6.anchor.setTo(0.5);
    	_this.numb6.scale.setTo(0.7,0.7);
        _this.numb6.frame = 6;
        _this.numb6.name = "six";
     
        _this.numb7 = _this.add.sprite(415,450,'Level71_numbers');
    	_this.numb7.anchor.setTo(0.5);
    	_this.numb7.scale.setTo(0.7,0.7);
    	_this.numb7.frame = 7;
        _this.numb7.name = "seven";
     
        
        _this.numb8 = _this.add.sprite(365,395,'Level71_numbers');
        _this.numb8.anchor.setTo(0.5);
        _this.numb8.scale.setTo(0.7,0.7);
        _this.numb8.name = "eight";
        
        
        _this.numb9 = _this.add.sprite(342,327,'Level71_numbers');
    	_this.numb9.anchor.setTo(0.5);
    	_this.numb9.scale.setTo(0.7,0.7);
    	_this.numb9.frame = 9;
        _this.numb9.name = "nine";
     
        _this.numb10 = _this.add.sprite(360,260,'Level71_numbers');
        _this.numb10.anchor.setTo(0.5);
        _this.numb10.scale.setTo(0.7,0.7);
        _this.numb10.name = "ten";
        

        _this.numb11 = _this.add.sprite(410,205,'Level71_numbers');
    	_this.numb11.anchor.setTo(0.5);
    	_this.numb11.scale.setTo(0.7,0.7);
    	_this.numb11.frame = 11;
        _this.numb11.name ="eleven";
     
        _this.numb12 = _this.add.sprite(490,180,'Level71_numbers');
    	_this.numb12.anchor.setTo(0.5);
    	_this.numb12.scale.setTo(0.7,0.7);
    	_this.numb12.frame = 12;
        _this.numb12.name = "twelve"
       
        _this.minutehand = _this.add.sprite(490,275,'Level71_topdir');
    	_this.minutehand.anchor.setTo(0.5);
    	_this.minutehand.scale.setTo(1.4,0.9);
        _this.minutehand.angle=90;
    	
     
        _this.hourhand = _this.add.sprite(539,333,'Level71_rightdir1');
        _this.hourhand.anchor.setTo(0.5);
        _this.hourhand.scale.setTo(1.3,1);
        _this.hourhand.angle=-2;
        
       
        _this.numGrp.add(_this.numb1);
        _this.numGrp.add(_this.numb2);
        _this.numGrp.add(_this.numb3);
        _this.numGrp.add(_this.numb4);
        _this.numGrp.add(_this.numb5);
        _this.numGrp.add(_this.numb6);
        _this.numGrp.add(_this.numb7);
        _this.numGrp.add(_this.numb8);
        _this.numGrp.add(_this.numb9);
        _this.numGrp.add(_this.numb10);
        _this.numGrp.add(_this.numb11);
        _this.numGrp.add(_this.numb12);
      
        
      
        
        _this.rightmark = _this.add.sprite(850,300,'Level71_rightmark');
        _this.rightmark.name = "rightmark";
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.alpha = 100;
        _this.rightmark.scale.setTo(1.2,1.2);
        _this.rightmark.inputEnabled=true;
        _this.rightmark.events.onInputDown.add(_this.clickTickMark,_this)
      
        
        
        _this.num1 = _this.add.sprite(150,200,'Level71_n1');
        _this.num1.anchor.setTo(0.5);
        _this.num1.scale.setTo(0.9,0.9);
        _this.num1.name = "one";
        _this.num1.inputEnabled = true;
        _this.num1.input.useHandCursor = true;
        _this.num1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.num2 = _this.add.sprite(200,270,'Level71_n5');
        _this.num2.anchor.setTo(0.5);
        _this.num2.scale.setTo(0.9,0.9);
        _this.num2.name = "five"; 
        _this.num2.inputEnabled = true;
        _this.num2.input.useHandCursor = true;
        _this.num2.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.num3 = _this.add.sprite(160,350,'Level71_n8');
        _this.num3.anchor.setTo(0.5);
        _this.num3.scale.setTo(0.9,0.9);
        _this.num3.name = "eight";
        _this.num3.inputEnabled = true;
        _this.num3.input.useHandCursor = true;
        _this.num3.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.num4 = _this.add.sprite(200,420,'Level71_n10');
        _this.num4.anchor.setTo(0.5);
        _this.num4.scale.setTo(0.9,0.9);
        _this.num4.name = "ten";
        _this.num4.inputEnabled = true;
        _this.num4.input.useHandCursor = true;
        _this.num4.events.onInputDown.add(_this.onDragStart,_this);
     

          _this.numGrp.add(_this.rightmark);
     _this.clockgroup.add(_this.clock);
     _this.clockgroup.add(_this.numGrp);
     _this.randomgrp1.add(_this.num1);
     _this.randomgrp1.add(_this.num2);
     _this.randomgrp1.add(_this.num3);
     _this.randomgrp1.add(_this.num4);
     //_this.clockgroup.add(_this.randomgrp);
     _this.clockgroup.add(_this.rightmark);
     _this.clockgroup.add(_this.minutehand);
     _this.clockgroup.add(_this.hourhand);
     _this.clockgroup.x=960;
     _this.randomgrp.x=960;
     _this.randomgrp1.x=960;
         _this.tween = _this.add.tween(_this.clockgroup);
           _this.tween.to({ x: 0}, 1500, 'Linear', true, 0);
     _this.tween = _this.add.tween(_this.randomgrp);
           _this.tween.to({ x: 0}, 1500, 'Linear', true, 0); 
     _this.tween = _this.add.tween(_this.randomgrp1);
           _this.tween.to({ x: 0}, 1500, 'Linear', true, 0);
    
     },
    
   
    addListeners:function(target)
    {
        target.input.enableDrag();
        target.events.onDragStart.add(_this.onDragStart, _this);
        target.events.onDragStop.add(_this.onDragStop, _this);
        
    },
    
    
   onDragStart:function(target){
       
      //  console.log("startdrag");
    	/*targetCoordinatesX = target.x;
    	targetCoordinatesY= target.y;*/
      _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level7.1_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
       
        _this.vx = target.x;   
        _this.vy = target.y; 
        target.input.enableDrag(true);
      
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
        target.bringToTop(_this.clock);
       
        target.events.onDragStop.add(
        function(target){
            
            _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
          
            
        for(var i=0;i<_this.randomgrp.length;i++)
         {
            if(_this.checkOverlap(target,_this.randomgrp.getChildAt(i)))
                {
                    _this.correct++;
								
                    ////console.log("overlappedtrgt "+target.name);
                    ////console.log("overlappedgrp "+_this.randomgrp.getChildAt(i).name);
                    target.x=_this.randomgrp.getChildAt(i).x-48;
                    target.y=_this.randomgrp.getChildAt(i).y-8;
                    if(target.name==_this.randomgrp.getChildAt(i).name)
                    {
                        if(target.name ==_this.randomgrp.getChildAt(0).name)
                            {
                                _this.n1Check = true;
                                _this.correctflag++;
                               // _this.wrongFlag--;
                                _this.num1.inputEnabled = false;
                                ////console.log("fdsdfdfdfdfdf 0 "+_this.randomgrp.getChildAt(0).name);
                            } 
                        else if(target.name ==_this.randomgrp.getChildAt(1).name)
                            {
                                _this.n2Check = true;
                                 _this.correctflag++;
                              //   _this.wrongFlag--;
                                 _this.num2.inputEnabled = false;
                                ////console.log("fdsdfdfdfdfdf 1 "+_this.randomgrp.getChildAt(1).name);
                            }
                       else if(target.name ==_this.randomgrp.getChildAt(2).name)
                            {
                                _this.n3Check = true;
                                 _this.correctflag++;
                               //  _this.wrongFlag--;
                                 _this.num3.inputEnabled = false;
                                ////console.log("fdsdfdfdfdfdf 2 "+_this.randomgrp.getChildAt(2).name);
                            }
                        else if(target.name ==_this.randomgrp.getChildAt(3).name)
                            {
                                _this.n4Check = true;
                                 _this.correctflag++;
                                 //_this.wrongFlag--;
                                 _this.num4.inputEnabled = false;
                                ////console.log("fdsdfdfdfdfdf 3 "+_this.randomgrp.getChildAt(3).name);
                            }  
                       // console.log("right");
                        
                        ////console.log("correctflag ::: "+correctflag);
                        
                       // _this.numGrp.getByName.frameName = target.name;
                        break;
                    }
                    else{
                       // console.log("wng");
                       // _this.wrongFlag++;
                        break;
                    }
                }
        }
        target.events.onDragStop.removeAll(); 
       /* target.x = vx;   
        target.y = vy;*/
          },_this); 
       if(_this.correct >= 3){
           _this.rightmark.frame =1;
           _this.rightmark.inputEnabled=true;
           _this.rightmark.events.onInputDown.add(_this.clickTickMark,_this);
        }
    
           },

    clickTickMark:function(target){
       
            _this.noofAttempts++;
            
        target.events.onInputDown.removeAll(); 
                  //console.log("correctflag "+_this.correctflag);
                  ////console.log("_this.wrongFlag "+_this.wrongFlag);
                 if(_this.correctflag >= 4){
                        _this.toCheck = false;
                        _this.click1 = _this.add.audio('ClickSound');
                        _this.click1.play();
						_this.sound = _this.add.audio('click');
                                _this.sound.play();
                        _this.num1.frame=1;
                        _this.num2.frame=1;
                        _this.num3.frame=1;
                        _this.num4.frame=1;
                        _this.clock.frame=1;
                        _this.correctAns();
                    }
                 else 
                     {
                          _this.wrongAns();
                     }
                },

    
    onDragStop:function(target){
       
        for(var i=0;i<_this.randomgrp.length;i++)
        {
            
            if(_this.checkOverlap(target,_this.randomgrp.getChildAt(i)))
                {
                    _this.correct++;
                    //console.log("matched "+_this.correctflag);
                    //console.log("overlappedtrgt "+target.name);
                    //console.log("overlappedgrp "+_this.randomgrp.getChildAt(i).name);
                    target.x=_this.randomgrp.getChildAt(i).x-48;
                    target.y=_this.randomgrp.getChildAt(i).y-8;
                    if(target.name==_this.randomgrp.getChildAt(i).name)
                    {
                        _this.correctflag++;
                        target.inputEnabled="false";
                        break;
                    }
                    else
                   {
                       // correctflag--;
                        
                        ////console.log("not matched"+_this.randomgrp.getChildAt(i).x);
                        ////console.log("not matched "+correctflag); 
                    }
                 
                       }    
                  }      
                               _this.rightmark.inputEnabled=true;
                               
                                if(_this.correctflag==4)
                              {
                                  _this.rightmark.frame=1;
                              }
                    else
                       
                            /*    if(correct==4)
                              {
                                  _this.rightmark.frame=1;
                              }
                    */
                                _this.rightmark.events.onInputDown.add(function(target){
                                    target.events.onInputDown.removeAll(); 
                                        if(_this.correctflag==4)
                                        {
                                            _this.toCheck = false;
                                           _this.click1 = _this.add.audio('ClickSound');
                                            _this.click1.play();
                                            _this.numb[0].frame=1;
                                            _this.numb[1].frame=1;
                                            _this.numb[2].frame=1;
                                            _this.numb[3].frame=1;
                                            _this.correctAns();  
                                        }
                                     else
                                    {
                                        _this.wrongAns();
                                    }

                                },_this); 
                               
                             
                
           
    	
    },
        
	checkOverlap:function(spriteA, spriteB) 
	{

	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
    },
    
    
    gotoSecondQuestion:function(){
         _this.questionid = 1;
        _this.questionNo = 2;
         _this.getVoice1();
        _this.clockgroup=_this.add.group();
        _this.randomgrp1=_this.add.group();
    	//_this.no11++;
        _this.clock = _this.add.sprite(490,300,'Level71_clock1');
    	_this.clock.anchor.setTo(0.5);
        _this.clock.scale.setTo(1,1);
     
        _this.randomgrp=_this.add.group();
     
        _this.circlegraphics1 = _this.add.graphics(0, 0);
        _this.circlegraphics1.beginFill(0x0FFFF, 1);
        _this.circlegraphics1.drawCircle(-50, -10, 38);
        _this.circlegraphics1.x = 668;
        _this.circlegraphics1.y = 265;
        _this.circlegraphics1.alpha = 0;
        _this.circlegraphics1.name = "two";
        _this.circlegraphics1.boundsPadding = 0;
     
       _this.circlegraphics2 = _this.add.graphics(0, 0);
        _this.circlegraphics2.beginFill(0xFF0000, 1);
        _this.circlegraphics2.drawCircle(-50, -10, 37);
        _this.circlegraphics2.x = 665;
        _this.circlegraphics2.y = 408;
        _this.circlegraphics2.alpha = 0;
        _this.circlegraphics2.name = "four";
        _this.circlegraphics2.boundsPadding = 0;
     
        _this.circlegraphics3 = _this.add.graphics(0, 0);
        _this.circlegraphics3.beginFill(0xFF00FF, 1);
        _this.circlegraphics3.drawCircle(-50, -10, 37);
        _this.circlegraphics3.x = 465;
        _this.circlegraphics3.y = 460;
        _this.circlegraphics3.alpha = 0;
        _this.circlegraphics3.name = "seven";
        _this.circlegraphics3.boundsPadding = 0;
     
         _this.circlegraphics4 = _this.add.graphics(0, 0);
        _this.circlegraphics4.beginFill(0x08000, 1);
        _this.circlegraphics4.drawCircle(-50, -10, 37);
        _this.circlegraphics4.x = 460;
        _this.circlegraphics4.y = 215;
        _this.circlegraphics4.alpha = 0;
        _this.circlegraphics4.name = "eleven";
        _this.circlegraphics4.boundsPadding = 0;
     
       _this.randomgrp.add(_this.circlegraphics1);
       _this.randomgrp.add(_this.circlegraphics2);
       _this.randomgrp.add(_this.circlegraphics3);
       _this.randomgrp.add(_this.circlegraphics4);
    	
        _this.numGrp = _this.add.group();
        
        _this.numb1 = _this.add.sprite(564,205,'Level71_numbers');
        _this.numb1.anchor.setTo(0.5);
        _this.numb1.scale.setTo(0.7,0.7);
        _this.numb1.name = "one";
        _this.numb1.frame = 1;
        
    
        _this.numb2 = _this.add.sprite(618,255,'Level71_numbers');
    	_this.numb2.anchor.setTo(0.5);
    	_this.numb2.scale.setTo(0.7,0.7);
    	//_this.numb2.frame = 2;
        _this.numb2.name = "two";
     
        _this.numb3 = _this.add.sprite(638,328,'Level71_numbers');
    	_this.numb3.anchor.setTo(0.5);
    	_this.numb3.scale.setTo(0.7,0.7);
        _this.numb3.frame = 3;
        _this.numb3.name ="three";
     
        _this.numb4 = _this.add.sprite(615,398,'Level71_numbers');
    	_this.numb4.anchor.setTo(0.5);
    	_this.numb4.scale.setTo(0.7,0.7);
       // _this.numb4.frame = 4;
        _this.numb4.name= "four";
     
        _this.numb5 = _this.add.sprite(560,450,'Level71_numbers');
        _this.numb5.anchor.setTo(0.5);
        _this.numb5.scale.setTo(0.7,0.7);
        _this.numb5.name = "five";
        _this.numb5.frame = 5
       
     
        _this.numb6 = _this.add.sprite(490,476,'Level71_numbers');
    	_this.numb6.anchor.setTo(0.5);
    	_this.numb6.scale.setTo(0.7,0.7);
        _this.numb6.frame = 6;
        _this.numb6.name = "six";
     
        _this.numb7 = _this.add.sprite(415,450,'Level71_numbers');
    	_this.numb7.anchor.setTo(0.5);
    	_this.numb7.scale.setTo(0.7,0.7);
    	//_this.numb7.frame = 7;
        _this.numb7.name = "seven";
     
        
        _this.numb8 = _this.add.sprite(365,395,'Level71_numbers');
        _this.numb8.anchor.setTo(0.5);
        _this.numb8.scale.setTo(0.7,0.7);
        _this.numb8.name = "eight";
        _this.numb8.frame = 8;
        
        
        _this.numb9 = _this.add.sprite(342,327,'Level71_numbers');
    	_this.numb9.anchor.setTo(0.5);
    	_this.numb9.scale.setTo(0.7,0.7);
    	_this.numb9.frame = 9;
        _this.numb9.name = "nine";
     
        _this.numb10 = _this.add.sprite(360,260,'Level71_numbers');
        _this.numb10.anchor.setTo(0.5);
        _this.numb10.scale.setTo(0.7,0.7);
        _this.numb10.name = "ten";
        _this.numb10.frame = 10;
        

        _this.numb11 = _this.add.sprite(410,205,'Level71_numbers');
    	_this.numb11.anchor.setTo(0.5);
    	_this.numb11.scale.setTo(0.7,0.7);
    	//_this.numb11.frame = 11;
        _this.numb11.name ="eleven";
     
        _this.numb12 = _this.add.sprite(490,180,'Level71_numbers');
    	_this.numb12.anchor.setTo(0.5);
    	_this.numb12.scale.setTo(0.7,0.7);
    	_this.numb12.frame = 12;
        _this.numb12.name = "twelve";
       
        _this.minutehand = _this.add.sprite(490,275,'Level71_topdir');
    	_this.minutehand.anchor.setTo(0.5);
    	_this.minutehand.scale.setTo(1.4,0.9);
        _this.minutehand.angle=90;
    	
     
        _this.hourhand = _this.add.sprite(539,333,'Level71_rightdir1');
        _this.hourhand.anchor.setTo(0.5);
        _this.hourhand.scale.setTo(1.3,1);
        _this.hourhand.angle=-2;
        
       
        _this.numGrp.add(_this.numb1);
        _this.numGrp.add(_this.numb2);
        _this.numGrp.add(_this.numb3);
        _this.numGrp.add(_this.numb4);
        _this.numGrp.add(_this.numb5);
        _this.numGrp.add(_this.numb6);
        _this.numGrp.add(_this.numb7);
        _this.numGrp.add(_this.numb8);
        _this.numGrp.add(_this.numb9);
        _this.numGrp.add(_this.numb10);
        _this.numGrp.add(_this.numb11);
        _this.numGrp.add(_this.numb12);
      
        
      
        
        _this.rightmark = _this.add.sprite(850,300,'Level71_rightmark')
        _this.rightmark.name = "Level71_rightmark";
        _this.rightmark.alpha = 100;
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2);
      
        
        
        _this.num1 = _this.add.sprite(150,200,'Level71_n2');
        _this.num1.anchor.setTo(0.5);
        _this.num1.scale.setTo(0.9,0.9);
        _this.num1.name = "two";
        _this.num1.inputEnabled = true;
        _this.num1.input.useHandCursor = true;
        _this.num1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.num2 = _this.add.sprite(200,270,'Level71_n4');
        _this.num2.anchor.setTo(0.5);
        _this.num2.scale.setTo(0.9,0.9);
        _this.num2.name = "four"; 
        _this.num2.inputEnabled = true;
        _this.num2.input.useHandCursor = true;
        _this.num2.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.num3 = _this.add.sprite(160,350,'Level71_n7');
        _this.num3.anchor.setTo(0.5);
        _this.num3.scale.setTo(0.9,0.9);
        _this.num3.name = "seven";
        _this.num3.inputEnabled = true;
        _this.num3.input.useHandCursor = true;
        _this.num3.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.num4 = _this.add.sprite(200,420,'Level71_n11');
        _this.num4.anchor.setTo(0.5);
        _this.num4.scale.setTo(0.9,0.9);
        _this.num4.name = "eleven";
        _this.num4.inputEnabled = true;
        _this.num4.input.useHandCursor = true;
        _this.num4.events.onInputDown.add(_this.onDragStart,_this);
     
       
          _this.numGrp.add(_this.rightmark);
     _this.clockgroup.add(_this.clock);
     _this.clockgroup.add(_this.numGrp);
     _this.randomgrp1.add(_this.num1);
     _this.randomgrp1.add(_this.num2);
     _this.randomgrp1.add(_this.num3);
     _this.randomgrp1.add(_this.num4);
     //_this.clockgroup.add(_this.randomgrp);
     _this.clockgroup.add(_this.rightmark);
     _this.clockgroup.add(_this.minutehand);
     _this.clockgroup.add(_this.hourhand);
     _this.clockgroup.x=960;
     _this.randomgrp.x=960;
     _this.randomgrp1.x=960;
         _this.tween = _this.add.tween(_this.clockgroup);
           _this.tween.to({ x: 0}, 1500, 'Linear', true, 0);
     _this.tween = _this.add.tween(_this.randomgrp);
           _this.tween.to({ x: 0}, 1500, 'Linear', true, 0);
        _this.tween = _this.add.tween(_this.randomgrp1);
           _this.tween.to({ x: 0}, 1500, 'Linear', true, 0);
        

    },
    
    
    gotoThirdQuestion:function(){ 
         _this.questionid = 1;
        _this.questionNo = 3;
        _this.getVoice1();
        _this.clockgroup=_this.add.group();
        _this.randomgrp1=_this.add.group();
    	//_this.no11++;
        _this.clock = _this.add.sprite(490,300,'Level71_clock1');
    	_this.clock.anchor.setTo(0.5);
        _this.clock.scale.setTo(1,1);
     
        _this.randomgrp=_this.add.group();
     
        _this.circlegraphics1 = _this.add.graphics(0, 0);
        _this.circlegraphics1.beginFill(0x0FFFF, 1);
        _this.circlegraphics1.drawCircle(-50, -10, 38);
        _this.circlegraphics1.x = 688;
        _this.circlegraphics1.y = 338;
        _this.circlegraphics1.alpha = 0;
        _this.circlegraphics1.name = "three";
        _this.circlegraphics1.boundsPadding = 0;
     
        _this.circlegraphics2 = _this.add.graphics(0, 0);
        _this.circlegraphics2.beginFill(0xFF0000, 1);
        _this.circlegraphics2.drawCircle(-50, -10, 37);
        _this.circlegraphics2.x = 540;
        _this.circlegraphics2.y = 486;
        _this.circlegraphics2.alpha = 0;
        _this.circlegraphics2.name = "six";
        _this.circlegraphics2.boundsPadding = 0;
     
        _this.circlegraphics3 = _this.add.graphics(0, 0);
        _this.circlegraphics3.beginFill(0xFF00FF, 1);
        _this.circlegraphics3.drawCircle(-50, -10, 37);
        _this.circlegraphics3.x = 392;
        _this.circlegraphics3.y = 337;
        _this.circlegraphics3.alpha = 0;
        _this.circlegraphics3.name = "nine";
        _this.circlegraphics3.boundsPadding = 0;
     
       _this.circlegraphics4 = _this.add.graphics(0, 0);
        _this.circlegraphics4.beginFill(0x08000, 1);
        _this.circlegraphics4.drawCircle(-50, -10, 37);
        _this.circlegraphics4.x = 540;
        _this.circlegraphics4.y = 190;
        _this.circlegraphics4.alpha = 0;
        _this.circlegraphics4.name = "twelve";
        _this.circlegraphics4.boundsPadding = 0;
     
       _this.randomgrp.add(_this.circlegraphics1);
       _this.randomgrp.add(_this.circlegraphics2);
       _this.randomgrp.add(_this.circlegraphics3);
       _this.randomgrp.add(_this.circlegraphics4);
    	
        _this.numGrp = _this.add.group();
        
        _this.numb1 = _this.add.sprite(564,205,'Level71_numbers');
        _this.numb1.anchor.setTo(0.5);
        _this.numb1.scale.setTo(0.7,0.7);
        _this.numb1.name = "one";
        _this.numb1.frame = 1;
        
    
        _this.numb2 = _this.add.sprite(618,255,'Level71_numbers');
    	_this.numb2.anchor.setTo(0.5);
    	_this.numb2.scale.setTo(0.7,0.7);
    	_this.numb2.frame = 2;
        _this.numb2.name = "two";
     
        _this.numb3 = _this.add.sprite(638,328,'Level71_numbers');
    	_this.numb3.anchor.setTo(0.5);
    	_this.numb3.scale.setTo(0.7,0.7);
        //_this.numb3.frame = 3;
        _this.numb3.name ="three";
     
        _this.numb4 = _this.add.sprite(615,398,'Level71_numbers');
    	_this.numb4.anchor.setTo(0.5);
    	_this.numb4.scale.setTo(0.7,0.7);
        _this.numb4.frame = 4;
        _this.numb4.name= "four";
     
        _this.numb5 = _this.add.sprite(560,450,'Level71_numbers');
        _this.numb5.anchor.setTo(0.5);
        _this.numb5.scale.setTo(0.7,0.7);
        _this.numb5.name = "five";
        _this.numb5.frame = 5
       
     
        _this.numb6 = _this.add.sprite(490,476,'Level71_numbers');
    	_this.numb6.anchor.setTo(0.5);
    	_this.numb6.scale.setTo(0.7,0.7);
       // _this.numb6.frame = 6;
        _this.numb6.name = "six";
     
        _this.numb7 = _this.add.sprite(415,450,'Level71_numbers');
    	_this.numb7.anchor.setTo(0.5);
    	_this.numb7.scale.setTo(0.7,0.7);
    	_this.numb7.frame = 7;
        _this.numb7.name = "seven";
     
        
        _this.numb8 = _this.add.sprite(365,395,'Level71_numbers');
        _this.numb8.anchor.setTo(0.5);
        _this.numb8.scale.setTo(0.7,0.7);
        _this.numb8.name = "eight";
        _this.numb8.frame = 8;
        
        
        _this.numb9 = _this.add.sprite(342,327,'Level71_numbers');
    	_this.numb9.anchor.setTo(0.5);
    	_this.numb9.scale.setTo(0.7,0.7);
    	//_this.numb9.frame = 9;
        _this.numb9.name = "nine";
     
        _this.numb10 = _this.add.sprite(360,260,'Level71_numbers');
        _this.numb10.anchor.setTo(0.5);
        _this.numb10.scale.setTo(0.7,0.7);
        _this.numb10.name = "ten";
        _this.numb10.frame = 10;
        

        _this.numb11 = _this.add.sprite(410,205,'Level71_numbers');
    	_this.numb11.anchor.setTo(0.5);
    	_this.numb11.scale.setTo(0.7,0.7);
    	_this.numb11.frame = 11;
        _this.numb11.name ="eleven";
     
        _this.numb12 = _this.add.sprite(490,180,'Level71_numbers');
    	_this.numb12.anchor.setTo(0.5);
    	_this.numb12.scale.setTo(0.7,0.7);
    	//_this.numb12.frame = 12;
        _this.numb12.name = "twelve";
       
        _this.minutehand = _this.add.sprite(490,275,'Level71_topdir');
    	_this.minutehand.anchor.setTo(0.5);
    	_this.minutehand.scale.setTo(1.4,0.9);
        _this.minutehand.angle=90;
    	
     
        _this.hourhand = _this.add.sprite(539,333,'Level71_rightdir1');
        _this.hourhand.anchor.setTo(0.5);
        _this.hourhand.scale.setTo(1.3,1);
        _this.hourhand.angle=-2;
        
       
        _this.numGrp.add(_this.numb1);
        _this.numGrp.add(_this.numb2);
        _this.numGrp.add(_this.numb3);
        _this.numGrp.add(_this.numb4);
        _this.numGrp.add(_this.numb5);
        _this.numGrp.add(_this.numb6);
        _this.numGrp.add(_this.numb7);
        _this.numGrp.add(_this.numb8);
        _this.numGrp.add(_this.numb9);
        _this.numGrp.add(_this.numb10);
        _this.numGrp.add(_this.numb11);
        _this.numGrp.add(_this.numb12);
      
        
      
        
        _this.rightmark = _this.add.sprite(850,300,'Level71_rightmark')
        _this.rightmark.name = "rightmark";
        _this.rightmark.alpha = 100;
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2);
      
        
        
        _this.num1 = _this.add.sprite(150,200,'Level71_n3');
        _this.num1.anchor.setTo(0.5);
        _this.num1.scale.setTo(0.9,0.9);
        _this.num1.name = "three";
        _this.num1.inputEnabled = true;
        _this.num1.input.useHandCursor = true;
        _this.num1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.num2 = _this.add.sprite(200,270,'Level71_n6');
        _this.num2.anchor.setTo(0.5);
        _this.num2.scale.setTo(0.9,0.9);
        _this.num2.name = "six"; 
        _this.num2.inputEnabled = true;
        _this.num2.input.useHandCursor = true;
        _this.num2.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.num3 = _this.add.sprite(160,350,'Level71_n9');
        _this.num3.anchor.setTo(0.5);
        _this.num3.scale.setTo(0.9,0.9);
        _this.num3.name = "nine";
        _this.num3.inputEnabled = true;
        _this.num3.input.useHandCursor = true;
        _this.num3.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.num4 = _this.add.sprite(200,420,'Level71_n12');
        _this.num4.anchor.setTo(0.5);
        _this.num4.scale.setTo(0.9,0.9);
        _this.num4.name = "twelve";
        _this.num4.inputEnabled = true;
        _this.num4.input.useHandCursor = true;
        _this.num4.events.onInputDown.add(_this.onDragStart,_this);
     
          _this.numGrp.add(_this.rightmark);
     _this.clockgroup.add(_this.clock);
     _this.clockgroup.add(_this.numGrp);
     _this.randomgrp1.add(_this.num1);
     _this.randomgrp1.add(_this.num2);
     _this.randomgrp1.add(_this.num3);
     _this.randomgrp1.add(_this.num4);
     //_this.clockgroup.add(_this.randomgrp);
     _this.clockgroup.add(_this.rightmark);
     _this.clockgroup.add(_this.minutehand);
     _this.clockgroup.add(_this.hourhand);
     _this.clockgroup.x=960;
     _this.randomgrp.x=960;
     _this.randomgrp1.x=960;
         _this.tween = _this.add.tween(_this.clockgroup);
           _this.tween.to({ x: 0}, 1500, 'Linear', true, 0);
     _this.tween = _this.add.tween(_this.randomgrp);
           _this.tween.to({ x: 0}, 1500, 'Linear', true, 0);
        _this.tween = _this.add.tween(_this.randomgrp1);
           _this.tween.to({ x: 0}, 1500, 'Linear', true, 0);
        },
   
    
    gotoFourthQuestion:function(){
         _this.questionid = 1;
        //_this.no11++;
        _this.getVoice1();
        _this.randomgrp=_this.add.group();
        _this.randomgrp1=_this.add.group();
         _this.numGrp=_this.add.group();
    	_this.clock = _this.add.sprite(490,300,'Level71_clock2');
    	_this.clock.anchor.setTo(0.5);
        _this.clock.scale.setTo(1,1);
        
        _this.minutehand = _this.add.sprite(490,275,'Level71_topdir');
    	_this.minutehand.anchor.setTo(0.5);
    	_this.minutehand.scale.setTo(1.4,0.9);
        _this.minutehand.angle=90;
        _this.minutehand.name = "topdir";
    	
     
        _this.hourhand = _this.add.sprite(539,333,'Level71_rightdir1');
        _this.hourhand.anchor.setTo(0.5);
        _this.hourhand.scale.setTo(1.3,1);
        _this.hourhand.angle=-2;
        _this.hourhand.name="rightdir1";
        
       
        
        _this.numb3 = _this.add.sprite(638,328,'Level71_n3');
    	_this.numb3.anchor.setTo(0.5);
    	//_this.numb3.scale.setTo(0.7,0.7);
       //_this.numb3.frame = 3;
        _this.numb3.name ="three";
        _this.numb3.alpha=0;
       
        _this.circlegraphics1 = _this.add.graphics(0, 0);
        _this.circlegraphics1.beginFill(0x0FFFF, 1);
        _this.circlegraphics1.drawCircle(-50, -10, 40);
        _this.circlegraphics1.x = 687;
        _this.circlegraphics1.y = 336;
        _this.circlegraphics1.alpha = 0;
        _this.circlegraphics1.name = "graphics3";
        _this.circlegraphics1.boundsPadding = 0;
        _this.circlegraphics1.inputEnabled=true;
        
     
        _this.circlegraphics2 = _this.add.graphics(0, 0);
        _this.circlegraphics2.beginFill(0xFF0000, 1);
        _this.circlegraphics2.drawCircle(-50, -10, 40);
        _this.circlegraphics2.x = 543;
        _this.circlegraphics2.y = 190;
        _this.circlegraphics2.alpha = 0;
        _this.circlegraphics2.name = "graphics12";
        _this.circlegraphics2.boundsPadding = 0;
        _this.circlegraphics2.inputEnabled=true;
        _this.CheckAnswer('h');
       
        
     _this.clockgroup=_this.add.group();   
     _this.clockgroup.add(_this.clock);
     _this.clockgroup.add(_this.minutehand);
     _this.clockgroup.add(_this.hourhand);
     _this.clockgroup.add(_this.numb3);  
     _this.clockgroup.add(_this.circlegraphics1);
     _this.clockgroup.add(_this.circlegraphics2);
     _this.clockgroup.x=960;
     
     _this.tween = _this.add.tween(_this.clockgroup);
            _this.tween.to({ x: 0}, 1500, 'Linear', true, 0);
            _this.tween.onComplete.add(function(){
                //_this.addQuestion(count);
            }, _this);
    
    },
    
    
    CheckAnswer:function(status){
        ////console.log("_this.status=="+_this.status);
        
        switch(status)
        { 
            
            case "h":  //Eng_71H.play();
                       _this.circlegraphics1.events.onInputDown.add(function(target){
                          
                            _this.noofAttempts++;
                           target.events.onInputDown.removeAll(); 
                             _this.sound = _this.add.audio('click');
                                _this.sound.play();
                                 _this.hourhand.frame=1; 
                                 _this.numb3.alpha=500;
                                 _this.numb3.frame=1;
                                 _this.numb3.inputEnabled=true;
                           _this.clock.frame=1;
                                _this.time.events.add(700,function(){
                                _this.correctAns();
                           },_this);
                              
                                //clock.frame=1;
                                },_this); //get voice for hour hand
                                          
                                _this.circlegraphics2.events.onInputDown.add(function(){
                                    _this.noofAttempts++;
                                   
                                     _this.wmusic = _this.add.audio('waudio');
                                        _this.wmusic.play();
                                         _this.shake.shake(10, _this.clockgroup);
                                        
            
                                },_this); 
                                break;
            
            case "m": //Eng_71M.play();
                _this.circlegraphics1.events.onInputDown.add(function(){
                            _this.noofAttempts++;
                                  _this.wmusic = _this.add.audio('waudio');
                                _this.wmusic.play();
                                  _this.shake.shake(10, _this.clockgroup);
                                },_this); //get voice for hour hand
                            
                                  _this.circlegraphics2.events.onInputDown.add(function(target){

                                    _this.noofAttempts++;
                                  
                                    
                                      target.events.onInputDown.removeAll(); 
                                   //_this.minutehand.frame=1;
                                  // _this.minutehand.inputEnabled=true;
                                     
        
                                _this.sound = _this.add.audio('click');
                                _this.sound.play();
                                        
                                           _this.minutehand.frame=1;
                                           _this.numb2.alpha=500;
                                           _this.numb2.frame=1;
                                           _this.numb2.inputEnabled=true;
                                      _this.clock.frame=1;
                                      _this.time.events.add(700,function(){ 
                                _this.correctAns(); 
                                     },_this);
                                },_this); 
                                    
            break;
        }
         
    },    
     
    
    gotoFifthQuestion:function(){
         _this.questionid = 1;
    	//_this.no11++;
        _this.getVoice1();
         _this.randomgrp=_this.add.group();
         _this.randomgrp1=_this.add.group();
         _this.numGrp=_this.add.group();
        _this.clock = _this.add.sprite(490,300,'Level71_clock2');
    	_this.clock.anchor.setTo(0.5);
        _this.clock.scale.setTo(1,1);
        
        _this.minutehand = _this.add.sprite(492,382,'Level71_topdir');
    	_this.minutehand.anchor.setTo(0.5);
    	_this.minutehand.scale.setTo(1.3,0.9);
    	_this.minutehand.angle=-90;
     
        _this.hourhand = _this.add.sprite(442,327,'Level71_rightdir1');
        _this.hourhand.anchor.setTo(0.5);
        _this.hourhand.scale.setTo(1.3,1);
        _this.hourhand.angle=179;
        
         
        _this.numb3 = _this.add.sprite(342,327,'Level71_n9');
    	_this.numb3.anchor.setTo(0.5);
    	//_this.numb9.scale.setTo(0.7,0.7);
    	//_this.numb9.frame = 9;
        _this.numb3.name = "nine";
       
        _this.circlegraphics1 = _this.add.graphics(0, 0);
        _this.circlegraphics1.beginFill(0x0FFFF, 1);
        _this.circlegraphics1.drawCircle(-50, -10, 40);
        _this.circlegraphics1.x = 393;
        _this.circlegraphics1.y = 335;
        _this.circlegraphics1.alpha = 0;
        _this.circlegraphics1.name = "graphics9";
        _this.circlegraphics1.boundsPadding = 0;
        _this.circlegraphics1.inputEnabled=true;
        
     
        _this.circlegraphics2 = _this.add.graphics(0, 0);
        _this.circlegraphics2.beginFill(0xFF0000, 1);
        _this.circlegraphics2.drawCircle(-50, -10, 40);
        _this.circlegraphics2.x = 542;
        _this.circlegraphics2.y = 484;
        _this.circlegraphics2.alpha = 0;
        _this.circlegraphics2.name = "graphics6";
        _this.circlegraphics2.boundsPadding = 0;
        _this.circlegraphics2.inputEnabled=true;
        _this.CheckAnswer('h');
        _this.status=["h","m"];
        ////console.log("sttaus0=="+_this.status[0]);
        
     _this.clockgroup=_this.add.group();   
     _this.clockgroup.add(_this.clock);
     _this.clockgroup.add(_this.minutehand);
     _this.clockgroup.add(_this.hourhand);
     _this.clockgroup.add(_this.numb3);
     _this.clockgroup.add(_this.circlegraphics1);
     _this.clockgroup.add(_this.circlegraphics2);
     _this.clockgroup.x=960;
     _this.tween = _this.add.tween(_this.clockgroup);
            _this.tween.to({ x: 0}, 1500, 'Linear', true, 0);
           _this.tween.onComplete.add(function(){
                //_this.addQuestion(count);
            }, _this);
       
      //  _this.getVoice(_this.status);
              
    },
    
                  
     gotoSixthQuestion:function(){
          _this.questionid = 1;
    	//_this.no11++;
          _this.getVoice1();
         _this.randomgrp=_this.add.group();
         _this.randomgrp1=_this.add.group();
         _this.numGrp=_this.add.group();
    	 _this.clock = _this.add.sprite(490,300,'Level71_clock2');
    	 _this.clock.anchor.setTo(0.5);
        _this.clock.scale.setTo(1,1);
        
        _this.minutehand = _this.add.sprite(550,300,'Level71_topdir');
    	_this.minutehand.anchor.setTo(0.4);
    	_this.minutehand.scale.setTo(1.3,1);
    	_this.minutehand.angle=150;
     
        _this.hourhand = _this.add.sprite(511,360,'Level71_rightdir1');
        _this.hourhand.anchor.setTo(0.4);
        _this.hourhand.scale.setTo(1.3,0.9);
        _this.hourhand.angle=56;
         
        _this.numb2 = _this.add.sprite(618,260,'Level71_n2');
    	_this.numb2.anchor.setTo(0.5);
    	
        _this.numb2.name = "two";
       
        _this.circlegraphics1 = _this.add.graphics(0, 0);
        _this.circlegraphics1.beginFill(0x0FFFF, 1);
        _this.circlegraphics1.drawCircle(-50, -10, 40);
        _this.circlegraphics1.x = 622;
        _this.circlegraphics1.y = 460;
        _this.circlegraphics1.alpha = 0;
        _this.circlegraphics1.name = "graphics5";
        _this.circlegraphics1.boundsPadding = 0;
        _this.circlegraphics1.inputEnabled=true;
        
     
        _this.circlegraphics2 = _this.add.graphics(0, 0);
        _this.circlegraphics2.beginFill(0xFF0000, 1);
        _this.circlegraphics2.drawCircle(-50, -10, 40);
        _this.circlegraphics2.x = 668;
        _this.circlegraphics2.y = 270;
        _this.circlegraphics2.alpha = 0;
        _this.circlegraphics2.name = "graphics2";
        _this.circlegraphics2.boundsPadding = 0;
        _this.circlegraphics2.inputEnabled=true;
        _this.CheckAnswer('m');
       
        
     _this.clockgroup=_this.add.group();   
     _this.clockgroup.add(_this.clock);
     _this.clockgroup.add(_this.minutehand);
     _this.clockgroup.add(_this.hourhand);
     _this.clockgroup.add(_this.numb2);  
     _this.clockgroup.add(_this.circlegraphics1);
     _this.clockgroup.add(_this.circlegraphics2);
     _this.clockgroup.x=960;
    _this.tween = _this.add.tween(_this.clockgroup);
            _this.tween.to({ x: 0}, 1500, 'Linear', true, 0);
            _this.tween.onComplete.add(function(){
            }, _this);
       
    
        
                       
    },


   
	removeCelebration:function()
	{
		_this.timer1.stop();
      //  console.log("removeCeleb");
		_this.celebration = false;
        _this.rightmark.frame=0;
        _this.correctflag=0;
        _this.correct=0;
        _this.wrongFlag =0;
		    
        _this.no11++;
		
		  if(_this.no11<6)
                    {
                        
                        _this.tween = _this.add.tween(_this.clockgroup);
                        _this.tween.to({ x:-1000}, 1500, 'Linear', true, 0); 
                        _this.tween = _this.add.tween(_this.randomgrp);
                        _this.tween.to({ x:-1000}, 1500, 'Linear', true, 0);
                        _this.tween = _this.add.tween(_this.randomgrp1);
                        _this.tween.to({ x:-1000}, 1500, 'Linear', true, 0);
                        _this.tween.onComplete.add(function(){
                        _this.clockgroup.destroy();
                        _this.numGrp.destroy();
                        _this.randomgrp.destroy();
                        _this.randomgrp1.destroy();
                            _this.n1Check = false;
                            _this.n2Check = false;
                            _this.n3Check = false;
                            _this.n4Check = false;
                            _this.input.enabled = true;
                        _this.getQuestion();
                        }, _this);
                    }
        
                else
                    {
						_this.timer1.stop();
						_this.timer1 = null;
                        _this.input.enabled = true;
                       // _this.stopvoice();
                        _this.state.start('grade7_1Score');
                  }
		
	},
    
	correctAns:function()
	{
        _this.stopvoice();
    
        
        _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
       /*  _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "Click", 
                    res_id: "level7.1_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
          */
        
       if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }
        _this.currentTime = window.timeSaveFunc();
               _this.saveAsment = 
               { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    pass: "yes",
                    time2answer: _this.AnsTimerCount,
                    attempts: _this.noofAttempts,
                    date_time_submission: _this.currentTime, 
                    access_token: window.acctkn 
               }
                    
               //absdsjsapi.saveAssessment(_this.saveAsment);
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
       
        
        
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
		////console.log(starAnim);
        
        _this.AnsTimerCount=0;
        
		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();   
		////console.log("correct11");
        _this.speakerbtn.inputEnabled=false;
          _this.count1++;
		_this.celebration = true;
		
        
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
     	_this.cmusic = _this.add.audio('celebr');
		_this.cmusic.play();

        _this.time.events.add(1000, _this.removeCelebration, _this);

	},
    
    wrongAns:function(target)
	{
        _this.noofAttempts++;
         _this.stopvoice();
        _this.toCheck1= false;
        _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
          _this.shake.shake(10, _this.clockgroup);
  
  
        if(_this.questionNo<=3){
             _this.rightmark.frame=0;
            if(!_this.n1Check){
            _this.num1.x=150;
            _this.num1.y=200;
            }
            if(!_this.n2Check){
            _this.num2.x=200;
            _this.num2.y=270;
            }
            if(!_this.n3Check){
            _this.num3.x=160;
            _this.num3.y=350;
            }
            if(!_this.n4Check){
            _this.num4.x=200;
            _this.num4.y=420;
            }
            
        }
	},
    
  getVoice1:function(){
        _this.stopvoice();
      
       _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
      
        switch(_this.qArrays[_this.no11])
        {
            case 1:
            case 2:
            case 3:if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/English/7.1A.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Hindi/7.1A.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Kannada/7.1A.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                        {
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/7.1/7.1A.mp3");
                        }
						else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Marathi/7.1A.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Telugu/7.1A.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Tamil/7.1A.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Urdu/7.1A.mp3");
                      } 
					else
                    {
                        _this.src.setAttribute("src", "sounds/7.1_1.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 4:if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/English/7.1H.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Hindi/7.1H.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Kannada/7.1H.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                        {
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/7.1/7.1H.mp3");
                        }
						else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Marathi/7.1H.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Telugu/7.1H.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Tamil/7.1H.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Urdu/7.1H.mp3");
                      } 
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Odiya/7.1_2.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 5:if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/English/7.1H.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Hindi/7.1H.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Kannada/7.1H.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                        {
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/7.1/7.1H.mp3");
                        }
						else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Marathi/7.1H.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Telugu/7.1H.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Tamil/7.1H.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Urdu/7.1H.mp3");
                      } 
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Odiya/7.1_2.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 6:if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/English/7.1M.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Hindi/7.1M.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Kannada/7.1M.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                        {
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/7.1/7.1M.mp3");
                        }
						else if(window.languageSelected == "Marathi")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Marathi/7.1M.mp3");
                      } 
					  else if(window.languageSelected == "Telugu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Telugu/7.1M.mp3");
                      } 
					  else if(window.languageSelected == "Tamil")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Tamil/7.1M.mp3");
                      } 
					  else if(window.languageSelected == "Urdu")
                      {
                           _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Urdu/7.1M.mp3");
                      } 
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.1/Odiya/7.1_3.mp3");
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

shutdown:function()
    {
		_this.baudio.loopFull(0);
        _this.baudio.stop();
        _this.baudio = null;
        _this.stopvoice();
        /*delete bg1;
        delete starsGroup;
        delete dragBox;
        delete count;
        delete gameBoxGroup;
        delete crocsGroup;
        delete tickMark;
        delete objGroup;
        delete rightOrderArray;
        delete glowOrderArray;
        delete no1;
        delete count;
        delete count1;
        delete qArrays;
        delete graphics;
        delete numGroup;
        delete selectedAns;
        delete selectedAns2;
        delete rightAns;
        delete mainSprite;
        delete  _this.speakerbtn;
        delete scale1Empty;
        delete scale2Empty;
        delete weightScale1,weightScale2,weightScale3,weightScale4;
        delete obj1Group,obj2Group;
        delete tweenVal,angleval;
        delete tempName,tp;
        delete tempAngle;
        delete tempweight1;
        delete tempweight2;
        delete q1Array;
        delete q2Array;
        delete q3Array;
        delete oneKgAngle,oneKgWeight,twoKgAngle,twoKgWeight,fiveKgAngle,fiveKgWeight,tenKgAngle,tenKgWeight;

        delete object1,object2,object3,object4,object5,object6,object7,object8,object9;
        delete timelang;

        delete timer;
        delete noofAttempts;
        delete AnsTimerCount;
        delete enterTxt,enterTxt2;

        delete gameid,_this.questionid;*/
    }

};