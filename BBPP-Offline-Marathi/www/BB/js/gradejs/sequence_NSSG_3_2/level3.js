Game.sequence_NSSG_3_2level3=function(){};

Game.sequence_NSSG_3_2level3.prototype ={
    
    init:function(param,score,timerStopVar)
    {
        _this= this;
        this.Stararr = param;
         this.score = score;
        
        _this.gameid = "Game 2.2.2";
        this.timerStopVar = timerStopVar;
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity2_1_2_BG_01');

        if(window.languageSelected=="English")
                          _this.qsoundurl= window.baseUrl+"questionSounds/2.3.1/English/2.3.mp3";
                    else if(window.languageSelected=="Hindi")
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.3.1/Hindi/2.3.mp3";
                    else if(window.languageSelected=="Kannada")
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.3.1/Kannada/2.3.mp3";
                     else if(window.languageSelected=="Gujarati")
                         _this.qsoundurl= window.baseUrl+"questionSounds/Gujarati/unity/2.3.1/2.3.mp3";
					 else if(window.languageSelected=="Marathi")
                    {
                        _this.qsoundurl = window.baseUrl+"questionSounds/2.3.1/Marathi/2.3.mp3";
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.qsoundurl = window.baseUrl+"questionSounds/2.3.1/Telugu/2.3.mp3";
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.qsoundurl = window.baseUrl+window.baseUrl+"questionSounds/2.3.1/Tamil/2.3.mp3";
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.qsoundurl = window.baseUrl+window.baseUrl+"questionSounds/2.3.1/Urdu/2.3.mp3";
                    }
                    else
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.3.1/Odiya/2.3.1.mp3";

                     
        commonNavBar.addNavBar(this,_this.qsoundurl,"numbersense2");
        commonNavBar.addTimerToTheGame(this,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        commonNavBar.startTimer(this);
        commonNavBar.addScore(this,commonNavBar.getScore());
        
        this.hintparams=['NSSG3.2','level1',false,false,true,1];
      
        commonNavBar.addHint(this,this.hintparams);    
    commonNavBar.level2Bool = true;
},
    
	create:function(game)
    {

        this.playedwithHint = false;
        this.completelyplayed = false;


		_this.amplify = null;
		_this.starcount=6;
                _this.starcount1=7;

        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.CaterpillarGrp;
        countcorrect=2;
        countcorrect1=3;
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;


        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        
        _this.background;
        _this.click3;
        
        _this.click4;
        _this.rightCount ;
        
        _this.opt1;
        _this.wmusic;
        _this.wrong = true;
        _this.count;
        _this.clickSound;
        _this.change = 0;
      
        _this.starsGroup;
   
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=6;
        _this.count1=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        
        _this.qArrays = [1,2,3,4,5,6];
        
        _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        /*_this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Unity2_3_2BG_01');
        
        _this.navBar = _this.add.sprite(0,0,'Unity2_3_2navBar');
        _this.navBar.scale.setTo(1,1);
        
        _this.backbtn = _this.add.button(5,5,'Unity2_3_2backbtn',function(){ 
               _this.backbtn.events.onInputDown.removeAll();
               _this.stopVoice();
               _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
               _this.state.start('grade2levelSelectionScreen',true,false); 
        },_this,0,1,2);
        
        _this.speakerbtn = _this.add.sprite(600,5,'Unity2_3_2CommonSpeakerBtn');
        _this.speakerbtn.events.onInputDown.add(function()
        {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.getVoice();
        },_this);
        */
       // _this.timebg = _this.add.sprite(300,5,'Unity2_3_2timebg');
        /*_this.topicOutline = _this.add.sprite(70,5,'Unity2_3_2topicOutline');
        _this.practice = _this.add.sprite(78,10,'Unity2_3_2practice');
        _this.topic = _this.add.sprite(165,10,'Unity2_3_2topic');*/
        
        /*_this.timeDisplay = _this.add.text(325,20,_this.minutes + ' : '+ _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';
        */
        _this.generateStarsForTheScene(this,9);
        _this.getQuestion();
    
        //language selection sounds
        _this.getVoice();
    },
    
    updateTimer:function() 
    {
        _this.counterForTimer++;

        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            
            if(_this.minutes<10)
            {
                _this.minutes =  _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes =  _this.minutes+1;
            }
        }
        else
        {
            if (_this.counterForTimer < 10)        
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
     //   _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
        //timer.setText(minutes + ':'+ seconds );
    },
    
    shuffle: function(array) 
    {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) 
        {
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
    getQuestion1:function(target)
    {  
         _this.timer = _this.time.create(false);
        _this.timer.loop(1000, function()
        {
            _this.AnsTimerCount++;
        }, this);
        
        commonNavBar.enableHintIcon();
          switch(_this.qArrays[_this.no11])

        {
             case 1: _this.gotoFirstQuestion1();
                    break;
            case 2: _this.gotoSecondQuestion1();
                    break;
            case 3: _this.gotoThirdQuestion1();
                    break;
            case 4: _this.gotoFourthQuestion1();
                    break;
            case 5: _this.gotoFifthQuestion1();
                    break;
            case 6: _this.gotoSixthQuestion1();
                    break;
            /*case 7: _this.gotoSeventhQuestion1();
                    break;
            case 8: _this.gotoEighthQuestion1();
                    break;
            case 9: _this.gotoNinethQuestion1();
                    break;*/
            /*case 10: _this.gotoTenthQuestion1();
                    break; */ 
        }
       telInitializer2.gameQuestionStart(this,_this.questionid);
    },
gotoFirstQuestion1:function()
    {  
        _this.questionNo=1;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-310,_this.world.centerY-20,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "99");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX+60,_this.world.centerY-23,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "93");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "94");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX-120,_this.world.centerY-60,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "96");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "97");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6_6= _this.add.sprite(_this.world.centerX+178,_this.world.centerY-50,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_6_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6_6.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "91");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_6_6.addChild(_this.text);
        /***********************************************************/
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-250,_this.world.centerY-50,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX-60,_this.world.centerY-33,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX+120,_this.world.centerY-30,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-250,_this.world.centerY-50,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX-60,_this.world.centerY-33,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX+120,_this.world.centerY-30,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.7,0.7);
        
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        //_this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+252,_this.world.centerY-85,'Unity2_3_2astart');  
        _this.Caterpillar_head.name = "Unity2_3_2astart";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_2astart');
        //_this.Caterpillar_head.animations.play('Unity2_3_2astart', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+373,_this.world.centerY-30, 'unity2_1_2_Tick');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ///_this.opt1.frame = 1;
        _this.opt1.name="unity2_1_2_Tick1";
        
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(function(){
             commonNavBar.playClickSound();
            _this.correctAns1(_this.opt1);
        },this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "95");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "92");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "98");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
       // _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
        flagGroup1.add(_this.Caterpillar_body_head_6_6);
        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
               // _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                //_this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(107, 90, 50, 50);
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(300, 110, 50, 50);
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(475, 114, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(180, 250, 450, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                //_this.CaterpillarWhite.add(_this.graphics4);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_2astart', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            //_this.whiteGroup.add(_this.Caterpillar_body_head_4);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(107, 90, 50, 50);
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(300, 110, 50, 50);
            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(475, 114, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(180, 250, 450, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            //_this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoSecondQuestion1:function()
    {                                  
        //console.log("gotoSecondQuestion");
        _this.questionNo=2;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-310,_this.world.centerY-20,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "23");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "21");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX-120,_this.world.centerY-60,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "20");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "18");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5= _this.add.sprite(_this.world.centerX+60,_this.world.centerY-23,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "17");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6_6= _this.add.sprite(_this.world.centerX+178,_this.world.centerY-50,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_6_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6_6.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "15");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_6_6.addChild(_this.text);
        /***********************************************************/
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-250,_this.world.centerY-50,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX-60,_this.world.centerY-33,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX+120,_this.world.centerY-30,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        /*_this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-250,_this.world.centerY-50,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX-67,_this.world.centerY-33,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX+120,_this.world.centerY-30,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.7,0.7);
        
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        //_this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);*/
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+252,_this.world.centerY-85,'Unity2_3_2astart');  
        _this.Caterpillar_head.name = "Unity2_3_2astart";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_2astart');
        //_this.Caterpillar_head.animations.play('Unity2_3_2astart', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+373,_this.world.centerY-30, 'unity2_1_2_Tick');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //////_this.opt1.frame = 1;
        _this.opt1.name="unity2_1_2_Tick1";
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        //_this.opt1.events.onInputDown.add(_this.correctAns,_this);
        _this.opt1.events.onInputDown.add(function(){
            //console.log("tick here");
             /*_this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();*/
               commonNavBar.playClickSound();
            _this.correctAns1(_this.opt1);
        },this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "19");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "22");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "16");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
       // _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
        flagGroup1.add(_this.Caterpillar_body_head_6_6);
        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
           
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(107, 90, 50, 50);
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(300, 110, 50, 50);
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(475, 114, 50, 50);

                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(180, 250, 450, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                //_this.CaterpillarWhite.add(_this.graphics4);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_2astart', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            //_this.whiteGroup.add(_this.Caterpillar_body_head_4);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(107, 90, 50, 50);
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(300, 110, 50, 50);
            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(475, 114, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(180, 250, 450, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            //_this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoThirdQuestion1:function()
    {
        //console.log("gotoThirdQuestion");
        _this.questionNo = 3;
        
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-310,_this.world.centerY-20,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "64");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX+60,_this.world.centerY-23,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "58");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "59");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX-120,_this.world.centerY-60,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "61");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "62");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6_6= _this.add.sprite(_this.world.centerX+178,_this.world.centerY-50,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_6_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6_6.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "56");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_6_6.addChild(_this.text);
        /***********************************************************/
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-250,_this.world.centerY-50,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX-60,_this.world.centerY-33,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX+120,_this.world.centerY-30,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-250,_this.world.centerY-50,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX-60,_this.world.centerY-33,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX+120,_this.world.centerY-30,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.7,0.7);
        
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        //_this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+252,_this.world.centerY-85,'Unity2_3_2astart');  
        _this.Caterpillar_head.name = "Unity2_3_2astart";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_2astart');
        //_this.Caterpillar_head.animations.play('Unity2_3_2astart', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+373,_this.world.centerY-30, 'unity2_1_2_Tick');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //////_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        //_this.opt1.events.onInputDown.add(_this.correctAns,_this);
        _this.opt1.events.onInputDown.add(function(){
            //console.log("tick here");
           commonNavBar.playClickSound();
            _this.correctAns1(_this.opt1);
        },this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "57");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "60");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "63");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
       // _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
        flagGroup1.add(_this.Caterpillar_body_head_6_6);
        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
           
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(107, 90, 50, 50);
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(300, 110, 50, 50);
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(475, 114, 50, 50);

                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(180, 250, 450, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                //_this.CaterpillarWhite.add(_this.graphics4);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_3_2astart', 30, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            //_this.whiteGroup.add(_this.Caterpillar_body_head_4);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(107, 90, 50, 50);
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(300, 110, 50, 50);
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(475, 114, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(180, 250, 450, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            //_this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoFourthQuestion1:function()
    {
        //console.log("gotoFourthQuestion");
        
        _this.questionNo = 4;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-310,_this.world.centerY-20,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "89");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-250,_this.world.centerY-50,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "88");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3=_this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "87");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+60,_this.world.centerY-23,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "83");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5=_this.add.sprite(_this.world.centerX+120,_this.world.centerY-30,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "82");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6_6= _this.add.sprite(_this.world.centerX+178,_this.world.centerY-50,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_6_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6_6.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "81");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_6_6.addChild(_this.text);
       
        //Caterpillar White empty body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX-60,_this.world.centerY-33,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-120,_this.world.centerY-60,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        /*_this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX-60,_this.world.centerY-33,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3Copy= _this.add.sprite(_this.world.centerX-120,_this.world.centerY-60,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);*/
        
     
        //Caterpillar head
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX+252,_this.world.centerY-60,'Unity2_3_2astart');  
        _this.Caterpillar_head.name = "Unity2_3_2astart";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_2astart');
        //_this.Caterpillar_head.animations.play('Unity2_3_2astart', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+373,_this.world.centerY-30, 'unity2_1_2_Tick');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //////_this.opt1.frame = 1;
        _this.opt1.name="unity2_1_2_Tick1";
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        //_this.opt1.events.onInputDown.add(_this.correctAns,_this);
        _this.opt1.events.onInputDown.add(function(){
            //console.log("tick here");
             /*_this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();*/
               commonNavBar.playClickSound();
            _this.correctAns1(_this.opt1);
        },this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
    
        //Drag Caterpillar body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "85");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "84");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "86");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        
        //Adding groups 
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 =_this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
        flagGroup1.add(_this.Caterpillar_body_head_6_6);
        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
               // _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                
                _this.graphics5 = _this.add.graphics(100, 100);
                
                //draw rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(353,125, 50, 50);
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(293, 113, 50, 50);
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(230, 85, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(180, 250, 450, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                
                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_2astart', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
           
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
          
            _this.graphics5 = _this.add.graphics(100, 100);
            
            //draw rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(353,125, 50, 50);
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(293, 113, 50, 50);
            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(230, 85, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(180, 250, 450, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
        
        
    },
    
    gotoFifthQuestion1:function()
    {
        //console.log("gotoFifthQuestion");
        
        _this.questionNo = 5;
    
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
       // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-310,_this.world.centerY-20,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        
        _this.text = this.add.text(0, 0, "41");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-250,_this.world.centerY-50,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "40");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3=_this.add.sprite(_this.world.centerX+60,_this.world.centerY-23,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "35");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "39");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5=_this.add.sprite(_this.world.centerX+120,_this.world.centerY-30,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "34");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6_6= _this.add.sprite(_this.world.centerX+178,_this.world.centerY-50,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_6_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6_6.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "33");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_6_6.addChild(_this.text);
       
       
        _this.Caterpillar_body_head_1=  _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX-60,_this.world.centerY-33,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-120,_this.world.centerY-60,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX-60,_this.world.centerY-33,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3Copy= _this.add.sprite(_this.world.centerX-120,_this.world.centerY-60,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.7,0.7);
        
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        //_this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+252,_this.world.centerY-85,'Unity2_3_2astart');  
        _this.Caterpillar_head.name = "Unity2_3_2astart";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_2astart');
        //_this.Caterpillar_head.animations.play('Unity2_3_2astart', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+373,_this.world.centerY-30, 'unity2_1_2_Tick');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //////_this.opt1.frame = 1;
        _this.opt1.name="unity2_1_2_Tick1";
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        //_this.opt1.events.onInputDown.add(_this.correctAns,_this);
        _this.opt1.events.onInputDown.add(function(){
            //console.log("tick here");
             /*_this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();*/
               commonNavBar.playClickSound();
            _this.correctAns1(_this.opt1);
        },this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "36");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "38");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "37");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
        flagGroup1.add(_this.Caterpillar_body_head_6_6);
        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
               // _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                //_this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(353,125, 50, 50);
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(293, 113, 50, 50);
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(230, 85, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(180, 250, 450, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                //_this.CaterpillarWhite.add(_this.graphics4);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_2astart', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            //_this.whiteGroup.add(_this.Caterpillar_body_head_4);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
          
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(353,125, 50, 50);
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(293, 113, 50, 50);
            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(230, 85, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(180, 250, 450, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            //_this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },

    gotoSixthQuestion1:function()
    {
        //console.log("gotoSixthQuestion");
        
        _this.questionNo = 6;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
         // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-310,_this.world.centerY-20,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "18");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-250,_this.world.centerY-50,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "17");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3=_this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "16");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+60,_this.world.centerY-23,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5=_this.add.sprite(_this.world.centerX+120,_this.world.centerY-30,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6_6= _this.add.sprite(_this.world.centerX+178,_this.world.centerY-50,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_6_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6_6.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_6_6.addChild(_this.text);
       
       
        _this.Caterpillar_body_head_1=  _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX-60,_this.world.centerY-33,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-120,_this.world.centerY-60,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX,_this.world.centerY-10,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX-60,_this.world.centerY-33,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3Copy= _this.add.sprite(_this.world.centerX-120,_this.world.centerY-60,'Unity2_3_2aCaterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.7,0.7);
        
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        //_this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+252,_this.world.centerY-85,'Unity2_3_2astart');  
        _this.Caterpillar_head.name = "Unity2_3_2astart";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_2astart');
       // _this.Caterpillar_head.animations.play('Unity2_3_2astart', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+373,_this.world.centerY-30, 'unity2_1_2_Tick');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ////////_this.opt1.frame = 1;
        _this.opt1.name="unity2_1_2_Tick1";
        
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        //_this.opt1.events.onInputDown.add(_this.correctAns,_this);
        _this.opt1.events.onInputDown.add(function(){
            //console.log("tick here");
            commonNavBar.playClickSound();
            _this.correctAns1(_this.opt1);
        },this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_2aCaterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "14");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "15");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_2aCaterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "13");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
        flagGroup1.add(_this.Caterpillar_body_head_6_6);
        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
               // _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                //_this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(355,127, 50, 50);
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(295, 105, 50, 50);
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(234, 85, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(180, 250, 450, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                //_this.CaterpillarWhite.add(_this.graphics4);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_3_2astart', 30, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            //_this.whiteGroup.add(_this.Caterpillar_body_head_4);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
          
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(355,127, 50, 50);
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(295, 105, 50, 50);
            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(234, 85, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(180, 250, 450, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            //_this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
        
    },

    getQuestion:function(target)
    {
    	commonNavBar.enableHintIcon();
        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
        {
            _this.AnsTimerCount++;
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
//commonNavBar.startTimer();
        /*******************For Navigation Bar*********************/
       // _this.timer1 = _this.time.create(false);

       /* _this.timer1.loop(1000, function()
        {
            _this.updateTimer();
        }, _this);*/
        
       // _this.timer1.start();
        
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
       
       /* _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
       */ _this.questionid=1;
        
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
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },
    
    stopVoice:function()
    {
        if(_this.playQuestionSound)
        {
            if(_this.playQuestionSound.contains(_this.src))
            {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            
            if(!_this.playQuestionSound.paused)
            {
                //console.log("here");
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
    
    generateStarsForTheScene:function(game,count)
	{
		this.starsGroup = this.add.group();
        for (var i = 0; i < count; i++)
        {
            this.starsGroup.create(this.world.centerX, 8, 'cstarAnim');
            for(var j =0;j<i;j++)
            {
                if(this.starsGroup.getChildAt(j))
                {
                    this.starsGroup.getChildAt(j).x-=10;
                    this.starsGroup.getChildAt(i).x+=10;

                   
                }
            }
             if(this.Stararr[i])
                    {
                        
                        this.starsGroup.getChildAt(i).frame = this.Stararr[i];
                    }
        }        

        this.starsGroup.getChildAt(6).frame = 2;
        this.starsGroup.getChildAt(7).frame = 0;
        this.starsGroup.getChildAt(8).frame = 0;

      }, 						
	
    addQuestion:function(no22)
    {
        //console.log("addQuestion");
        _this.time.events.add(900, function(){
            var tween = _this.add.tween(flagGroup1);
            tween.to({ x: -1000 }, 0, 'Linear', true, 0);
            tween.onComplete.add(_this.changeQuestion, _this);

        }, _this);
    },
    onDragStart1:function(target)
    {
        commonNavBar.playClickSound();
        //console.log("onDragStart");
        
        _this.noofAttempts++;
        
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level2.3.2a_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        // _this.currentTime = window.timeSaveFunc();
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
        //telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
         
        _this.vx = target.x;   
        _this.vy = target.y; 
        
        target.input.enableDrag(true);
        
        target.events.onDragStop.add(function(target)
        {
            commonNavBar.playSnapSound();
           
            for(var i=0;i<_this.whiteGroup.length;i++)
            {
                if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Unity2_3_2aCaterpillar_body3'))
                { 
                    
                    _this.change++;
                    
                    _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);
                    
                    _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                    _this.text.font = "myfont";
                    _this.text.fill = "#ffffff";
                    _this.text.fontWeight = 'normal';
                    _this.text.anchor.set(0.5);
                    _this.text.fontSize = 60;
                    _this.whiteGroup.getChildAt(i).addChild(_this.text);
                    
                    target.visible = false;
                    //console.log("inputadded here");
                    
                    _this.whiteGroup.getChildAt(i).inputEnabled = true; 
                    _this.whiteGroup.getChildAt(i).input.useHandCursor = true;
                    _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder1,_this);
                    target.events.onInputDown.removeAll(); 
                    break;
                }
            }
            
            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
            
            if( _this.change>=3)
            {
                _this.opt1.inputEnabled = true;
                //_this.opt1.input.useHandCursor = true;
            }

        },_this);
          
    },
    dragStop1:function(target)
    {
        commonNavBar.playSnapSound();
        //console.log("drag stop here");

        for(var i=0;i<_this.whiteGroup.length;i++)
        {
            if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Unity2_3_2aCaterpillar_body3'))
            { 
                //console.log("drag stop here");
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);

                _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                _this.text.font = "myfont";
                _this.text.fill = "#ffffff";
                _this.text.fontWeight = 'normal';
                _this.text.anchor.set(0.5);
                _this.text.fontSize = 60;
                _this.whiteGroup.getChildAt(i).addChild(_this.text);

                //target.visible = false;
                target.removeChildAt(0);
                target.loadTexture('Unity2_3_2aCaterpillar_body3',0,false);
                //target.events.input.removeAll();

                _this.whiteGroup.getChildAt(i).inputEnabled = true;
                _this.whiteGroup.getChildAt(i).input.useHandCursor = true;

                //console.log("inputadded");

                _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder1,_this);

                break;
            }
            else if(_this.checkOverlap(target,_this.graphics5))
            {
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.change--;
                _this.opt1.inputEnabled = false;

                //console.log(" _this.change -- :" + _this.change);
                for(var m=0;m<_this.CaterpillarGrp.length;m++)
                {

                    if(_this.CaterpillarGrp.getChildAt(m).getChildAt(0).text == target.getChildAt(0).text)
                        {
                            _this.CaterpillarGrp.getChildAt(m).visible = true;
                            _this.CaterpillarGrp.getChildAt(m).events.onInputDown.add(_this.onDragStart1,_this);
                            break;
                        }

                }
                target.events.onInputDown.removeAll();
                target.removeChildAt(0);
                target.loadTexture('Unity2_3_2aCaterpillar_body3',0,false);

                break;
            }
        }

        target.x = _this.vx;   
        target.y = _this.vy;

        if( _this.change<3)
        {
            _this.opt1.inputEnabled = false;
            //_this.opt1.input.useHandCursor = false;
        }
    },
    
    onDragStart:function(target)
    {
       //console.log("onDragStart");
        
       // _this.noofAttempts++;
        
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level2.3.2_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        // _this.currentTime = window.timeSaveFunc();
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
        
         
        _this.vx = target.x;   
        _this.vy = target.y; 
        
        target.input.enableDrag(true);
        commonNavBar.playClickSound();

        target.events.onDragStop.add(function(target)
        {
            //console.log("target.key:"+target.key);
            commonNavBar.playSnapSound();
            for(var i=0;i<_this.whiteGroup.length;i++)
            {
                if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Unity2_3_2Caterpillar_Body3'))
                { 
                    //console.log("target.name:"+target.name);
                    
                    _this.change++;
                    //console.log("change value :"+_this.change);
                    
                    _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);
                    
                    _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                    _this.text.font = "myfont";
                    _this.text.fill = "#ffffff";
                    _this.text.fontWeight = 'normal';
                    _this.text.anchor.set(0.5);
                    _this.text.fontSize = 90;
                    _this.whiteGroup.getChildAt(i).addChild(_this.text);
                    
                    target.visible = false;
                    //console.log("inputadded here");
                    
                    _this.whiteGroup.getChildAt(i).inputEnabled = true; 
                    _this.whiteGroup.getChildAt(i).input.useHandCursor = true;
                    _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder,_this);
                    target.events.onInputDown.removeAll(); 
                    break;
                }
            }
            
            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
            
            if( _this.change>=4)
            {
                _this.opt1.inputEnabled = true;
                //_this.opt1.input.useHandCursor = true;
            }

        },_this);
          
    },
    
    checkFortheRightOrder:function(target)
    {
        //console.log("Drag out function");
        //console.log("check target.key:"+target.key);
        
        _this.vx = target.x;   
        _this.vy = target.y;
        
        //console.log("xxxxxxxxxxxxxx "+_this.vx)
        //console.log("yyyyyyyyyyyyyy "+_this.vy)
        //console.log("target.text "+target.getChildAt(0).text);
        
        target.input.enableDrag();
        target.events.onDragStop.add(this.dragStop,_this);
        
    },
    checkFortheRightOrder1:function(target)
    {
        //console.log("Drag out function");
        //console.log("check target.key:"+target.key);
        
        _this.vx = target.x;   
        _this.vy = target.y;
        
        //console.log("xxxxxxxxxxxxxx "+_this.vx)
        //console.log("yyyyyyyyyyyyyy "+_this.vy)
        //console.log("target.text "+target.getChildAt(0).text);
        
        target.input.enableDrag();
        target.events.onDragStop.add(this.dragStop1,_this);
        
    },
    
    dragStop:function(target)
    {
        
        //console.log("heereeeeeeeeeeeee");
       commonNavBar.playSnapSound();

        for(var i=0;i<_this.whiteGroup.length;i++)
        {
            if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Unity2_3_2Caterpillar_Body3'))
            { 
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);

                _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                _this.text.font = "myfont";
                _this.text.fill = "#ffffff";
                _this.text.fontWeight = 'normal';
                _this.text.anchor.set(0.5);
                _this.text.fontSize = 90;
                _this.whiteGroup.getChildAt(i).addChild(_this.text);

                //target.visible = false;
                target.removeChildAt(0);
                target.loadTexture('Unity2_3_2Caterpillar_Body3',0,false);
                //target.events.input.removeAll();

                _this.whiteGroup.getChildAt(i).inputEnabled = true;
                _this.whiteGroup.getChildAt(i).input.useHandCursor = true;

                //console.log("inputadded");

                _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder,_this);

                break;
            }
            else if(_this.checkOverlap(target,_this.graphics5))
            {
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.change--;
                _this.opt1.inputEnabled = false;

                //console.log(" _this.change -- :" + _this.change);
                for(var m=0;m<_this.CaterpillarGrp.length;m++)
                {

                    if(_this.CaterpillarGrp.getChildAt(m).getChildAt(0).text == target.getChildAt(0).text)
                        {
                            _this.CaterpillarGrp.getChildAt(m).visible = true;
                            _this.CaterpillarGrp.getChildAt(m).events.onInputDown.add(_this.onDragStart,_this);
                            break;
                        }

                }
                target.events.onInputDown.removeAll();
                target.removeChildAt(0);
                target.loadTexture('Unity2_3_2Caterpillar_Body3',0,false);

                break;
            }
        }

        target.x = _this.vx;   
        target.y = _this.vy;

        if( _this.change<4)
        {
            _this.opt1.inputEnabled = false;
           // _this.opt1.input.useHandCursor = false;
        }
    },
    
    gotoFirstQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo=1;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "19");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
          
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
         _this.text = this.add.text(0, 0, "20");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        _this.text = this.add.text(0, 0, "21");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
    
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "22");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);       
       
        _this.Caterpillar_body_head_5_5= _this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "23");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
        
        /***********************************************************/
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
      
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4=_this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.5,0.5)
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4Copy=_this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_2start');  
        _this.Caterpillar_head.name = "Unity2_3_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_2start');
        //_this.Caterpillar_head.animations.play('Unity2_3_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'unity2_1_2_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ////_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                //console.log("Head wrong aniamtion stop")
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name ='_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "26");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "25");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "24");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "27");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_8.addChild(_this.text)
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
    
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(492, 105, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(557, 105, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(627, 103, 50, 50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(700, 122, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_3_2start', 20, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(492, 105, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(557, 105, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(627, 103, 50, 50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(700, 122, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoSecondQuestion:function()
    {                                  
        //console.log("gotoSecondQuestion");
        _this.questionNo=2;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "72");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "73");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "74");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
    
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "75");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);       
       
        _this.Caterpillar_body_head_5_5= _this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "76");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
        
        /***********************************************************/
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
      
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4=_this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.5,0.5)
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4Copy=_this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_2start');  
        _this.Caterpillar_head.name = "Unity2_3_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_2start');
        //_this.Caterpillar_head.animations.play('Unity2_3_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'unity2_1_2_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ////_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                //console.log("stoppppppppppppppppppp")
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "79");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "78");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "77");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name ='_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "80");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_8.addChild(_this.text)
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
    
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(492, 105, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(557, 105, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(627, 103, 50, 50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(700, 122, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_2start', 20, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(492, 105, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(557, 105, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(627, 103, 50, 50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(700, 122, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoThirdQuestion:function()
    {
        //console.log("gotoThirdQuestion");
        _this.questionNo = 3;
    
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "76");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "78");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "80");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4=_this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "82");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5= _this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "84");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
       
        //Caterpillar White empty body
        
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2Copy= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);

        _this.Caterpillar_body_head_3Copy= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4Copy= _this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
        //Caterpillar head
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_2start');  
        _this.Caterpillar_head.name = "Unity2_3_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_2start');
        //_this.Caterpillar_head.animations.play('Unity2_3_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'unity2_1_2_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                //console.log("stoppppppppppppppppppp")
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
    
        //Drag Caterpillar body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "77");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "83");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "81");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "79");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_8.addChild(_this.text)
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        //Adding groups 
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 =_this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
    
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                
                _this.graphics5 = _this.add.graphics(100, 100);
                
                //draw rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(212, 105, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(350,122, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(488, 105, 50,50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(629, 102, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(100, 250,600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                
                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_2start', 20, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
           
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
          
            _this.graphics5 = _this.add.graphics(100, 100);
            
            //draw rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(212, 105, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(350,122, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(488, 105, 50,50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(629, 102, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoFourthQuestion:function()
    {
        //console.log("gotoFourthQuestion");
        
        _this.questionNo = 4;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "46");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "47");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3=_this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "48");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "53");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5= _this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "54");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
       
        //Caterpillar White empty body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3Copy= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4Copy= _this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
     
        //Caterpillar head
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_2start');  
        _this.Caterpillar_head.name = "Unity2_3_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_2start');
        //_this.Caterpillar_head.animations.play('Unity2_3_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'unity2_1_2_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                //console.log("stoppppppppppppppppppp")
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
    
        //Drag Caterpillar body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "49");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "50");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "51");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "52");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_8.addChild(_this.text)
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        
        //Adding groups 
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 =_this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
        //flagGroup1.add(_this.Caterpillar_body_head_6_6);
        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                
                _this.graphics5 = _this.add.graphics(100, 100);
                
                //draw rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(350,122, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(422, 123, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(488, 105, 50, 50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(558, 103, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                
                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_2start', 20, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
           
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
          
            _this.graphics5 = _this.add.graphics(100, 100);
            
            //draw rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(350,122, 50, 50);
            
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(422, 123, 50, 50);
            
            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(488, 105, 50, 50);
            
            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(558, 103, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
        
        
    },

    gotoFifthQuestion:function()
    {
        //console.log("gotoFifthQuestion");
        
        _this.questionNo = 5;
    
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
       // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "32");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "33");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3=_this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "34");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "39");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5= _this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "40");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
       
        //Caterpillar White empty body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3Copy= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4Copy= _this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
     
        //Caterpillar head
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_2start');  
        _this.Caterpillar_head.name = "Unity2_3_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_2start');
        //_this.Caterpillar_head.animations.play('Unity2_3_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'unity2_1_2_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                //console.log("stoppppppppppppppppppp")
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
    
        //Drag Caterpillar body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "35");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "36");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "37");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "38");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_8.addChild(_this.text)
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        
        //Adding groups 
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 =_this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
        //flagGroup1.add(_this.Caterpillar_body_head_6_6);
        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                
                _this.graphics5 = _this.add.graphics(100, 100);
                
                //draw rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(350,122, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(422, 123, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(488, 105, 50, 50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(558, 103, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                
                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_2start', 20, false);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
           
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
          
            _this.graphics5 = _this.add.graphics(100, 100);
            
            //draw rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(350,122, 50, 50);
            
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(422, 123, 50, 50);
            
            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(488, 105, 50, 50);
            
            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(558, 103, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },

    gotoSixthQuestion:function()
    {
        //console.log("gotoSixthQuestion");
        
        _this.questionNo = 6;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
    
        
        // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "90");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "92");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "94");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        
        _this.Caterpillar_body_head_4_4=_this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "96");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5= _this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body1');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "98");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
       
        //Caterpillar White empty body
        
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2Copy= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);

        _this.Caterpillar_body_head_3Copy= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4Copy= _this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_2Caterpillar_Body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
     
        //Caterpillar head
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_2start');  
        _this.Caterpillar_head.name = "Unity2_3_2start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_2start');
        //_this.Caterpillar_head.animations.play('Unity2_3_2start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'unity2_1_2_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ////_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                //console.log("stoppppppppppppppppppp")
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
    
        //Drag Caterpillar body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "91");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "97");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "93");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_2Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "95");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_8.addChild(_this.text)
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        //Adding groups 
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 =_this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
    
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                
                _this.graphics5 = _this.add.graphics(100, 100);
                
                //draw rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(212, 105, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(350,122, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(488, 105, 50,50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(629, 102, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                
                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_2start', 20, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
           
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
          
            _this.graphics5 = _this.add.graphics(100, 100);
            
            //draw rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(212, 105, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(350,122, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(488, 105, 50,50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(629, 102, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },

	changeQuestion:function()
	{
		flagGroup1.destroy();
		if(_this.no11<6)
		{
            count++;
			_this.getQuestion();
		}
		else
		{
            //console.log("gameEnd");
            _this.stopVoice();
            _this.state.start('level2');
		}
	},
    
    checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },  

   correctAns1: function(target)
    {
        //console.log("correct Answer");
        commonNavBar.disableHintIcon();
        _this.noofAttempts++;
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.3.2a_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        // _this.currentTime = window.timeSaveFunc();
        
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
        
        var correct = true;
        for(var i=0;i<3;i++)
        {
            if(i>0)
            {
                
                if(_this.questionNo==1)
                {
                
                   if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) - 3))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==2)
                {
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) - 3))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==3)
                {
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) - 3))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                    
                }
                else if(_this.questionNo==4)
                {
                    //console.log("_this.questionNo ==4");
                    //console.log(_this.whiteGroup.getChildAt(i).getChildAt(0).name);
                    //console.log((_this.whiteGroup.getChildAt(i-1).getChildAt(0).name)-1);
                    
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) + 1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                    
                }
                else if(_this.questionNo==5)
                {
                    //console.log("_this.questionNo ==5");
                    
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)+1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==6)
                {
                    //console.log("_this.questionNo ==6");

                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)+1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
            }
        }
        
        if(correct)
        {   
            telInitializer2.gameCorrectAns();
            //correct answer here
            //console.log("correct here");
            _this.opt1.events.onInputUp.removeAll();
            target.frame=1;
            
            if (_this.Caterpillar_head.key == 'Unity2_3_2astart')
            {
                _this.Caterpillar_head.loadTexture('unity2_1_2_Caterpillar_Happy', 0);
                _this.Caterpillar_head.animations.add('unity2_1_2_Caterpillar_Happy');
                _this.Caterpillar_head.animations.play('unity2_1_2_Caterpillar_Happy',null,true);
            }
            
            target.events.onInputDown.removeAll();
             
            //_this.wrong = true;
           // _this.speakerbtn.inputEnabled=false;
            _this.celebration = true;

             commonNavBar.playClickSound();
             commonNavBar.playCelebrationSound();
           

            _this.time.events.add(2000, _this.removeEverthing1, _this);

            _this.starAnim = _this.starsGroup.getChildAt(_this.count);
            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');
            _this.anim4.play(25,false);
             this.Stararr.push(3);
             target.events.onInputDown.removeAll();
             _this.sceneCount++;
  
        }

        else       
        { 
            telInitializer2.gameWrongAns();
            _this.opt1.events.onInputUp.removeAll();
             target.frame=1;
            _this.opt1.events.onInputUp.removeAll();
            //console.log("wrong target :"+target.name);
            //target.tint = 0xA9A9A9;
             target.frame=1;
            _this.starsGroup.getChildAt(_this.count).frame = 1;
             this.Stararr.push(1);
            //_this.wrong = false;
            //_this.currentTime = window.timeSaveFunc();
            _this.interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "level2.3.2a_"+target.name,  
                access_token: window.acctkn 
            }

            //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
            
            if (_this.Caterpillar_head.key == 'Unity2_3_2astart')
            {
                //console.log("wrong star")
                _this.Caterpillar_head.loadTexture('unity2_1_2_Caterpillar_Sad', 0);
                _this.Caterpillar_head.animations.add('unity2_1_2_Caterpillar_Sad');
                _this.Caterpillar_head.animations.play('unity2_1_2_Caterpillar_Sad',null,true);
            }
            
            target.events.onInputDown.removeAll();

            _this.timer3 = _this.time.create(false);

            //  Set a TimerEvent to occur after 2 seconds
            /*_this.time.events.add(1500, function()
            {
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
                _this.getQuestion1();
            }, this);*/

            commonNavBar.playClickSound();
            commonNavBar.playWrongCelebrationSound();
            target.events.onDragStop.removeAll(); 
            _this.time.events.add(2000, _this.removeEverthing1, _this);

        }
    },

    removeEverthing1: function() 
    {
        //console.log("removeEverthing");
        
        _this.wrong = true;
        _this.opt1.frame=0;
          
        if(_this.no11<2)
        {
            wrong = true;
           // _this.count++;
                  _this.no11++;
            _this.count++;
             this.starsGroup.getChildAt(_this.count).frame = 2; 
  
            _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhite);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
             _this.MaintweenDestroy = _this.add.tween(_this.whiteGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
                //_this.count =0;
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
                _this.getQuestion1();
            },_this);  
        }
        else
        {
  commonNavBar.stopTimer();
              commonNavBar.stopVoice();

                commonNavBar.disableNavBar();
				commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
		 _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhite);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
             _this.MaintweenDestroy = _this.add.tween(_this.whiteGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
                this.createScoreScene();
			},_this); 
        }
    },
    createScoreScene:function()
    {

        this.completelyplayed = true;
		
		this.backgroundtransp = this.add.tileSprite(0,0,this.world.width,this.world.height, 'transparent'); //BackGround Opacity

        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);
        
        /* this.tryAgainText = this.add.text(this.world.centerX,this.world.centerY,'Try Again !!');
        this.tryAgainText.anchor.setTo(0.5);
        this.tryAgainText.align = 'center';
        this.tryAgainText.fontWeight = 'bold';
        this.tryAgainText.fontSize = 40;
        this.tryAgainText.fill = 'White';
        this.tryAgainText.visible = false;
        
        this.terrificText = this.add.text(this.world.centerX,this.world.centerY,'Terrific !!');
        this.terrificText.anchor.setTo(0.5);
        this.terrificText.align = 'center';
        this.terrificText.fontWeight = 'bold';
        this.terrificText.fontSize = 40;
        this.terrificText.fill = 'White';
        this.terrificText.visible = false;
        
        this.verGoodText = this.add.text(this.world.centerX,this.world.centerY,'Very Good !!');
        this.verGoodText.anchor.setTo(0.5);
        this.verGoodText.align = 'center';
        this.verGoodText.fontWeight = 'bold';
        this.verGoodText.fontSize = 40;
        this.verGoodText.fill = 'White';
        this.verGoodText.visible = false;
        
        this.excellentText = this.add.text(this.world.centerX,this.world.centerY,'Excellent !!');
        this.excellentText.anchor.setTo(0.5);
        this.excellentText.align = 'center';
        this.excellentText.fontWeight = 'bold';
        this.excellentText.fontSize = 40;
        this.excellentText.fill = 'White';
        this.excellentText.visible = false; */
  
  this.happyemoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.happyemoji.anchor.setTo(0.5);
        this.happyemoji.scale.setTo(0.7,0.7);
        this.happyemoji.frame=0;
        this.happyemoji.visible = false;
        
        this.sademoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.sademoji.anchor.setTo(0.5);
        this.sademoji.scale.setTo(0.7,0.7);
        this.sademoji.frame=4;
        this.sademoji.visible = false;

        this.HomeBtn = this.add.sprite(this.world.centerX+140,this.world.centerY+80,'HomeBtn');
        this.HomeBtn.anchor.setTo(0.5);
        this.HomeBtn.inputEnabled = true;
        this.HomeBtn.events.onInputDown.add(this.homeClicked,this);

        this.replayBtn = this.add.sprite(this.world.centerX-140,this.world.centerY+80,'replayBtn');
        this.replayBtn.anchor.setTo(0.5);
        this.replayBtn.inputEnabled = true;
        this.replayBtn.events.onInputDown.add(this.replayClicked,this);

        this.generateStarsForScoreScene(this,9);   //Stars based on the Game
    },

    homeClicked:function()
    {
        commonNavBar.playClickSound();

        this.HomeBtn.events.onInputDown.removeAll();
        
        commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
                commonNavBar.navBar=null;

        this.score += this.scoreSceneScore;
		
		this.backgroundtransp.visible=false; //Remove BackGround Opacity

        _this.state.start('numbersense2',true,false);
        
    },

    replayClicked:function()
    {
        commonNavBar.playClickSound();

        this.replayBtn.events.onInputDown.removeAll();
        commonNavBar.deductScore(this,-5,true,false);

        this.score += this.scoreSceneScore;
        this.score -= 5;

        this.time.events.add(3000, function()
        { 
            commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
            commonNavBar.hint1=true,
            commonNavBar.hint2=true,
            commonNavBar.hint3=true,
			this.backgroundtransp.visible=false; //Remove BackGround Opacity
                        _this.time.events.add(500,function(){

           _this.state.start('sequence_NSSG_3_2level1',true,false);
           },this);
        }, this);
    },
generateStarsForScoreScene:function(game,count)
    {
        //console.log("star");
        this.starsGroup = this.add.group();
        this.scoreSceneScore = 0;
        this.maxscore = count * 5;
        console.log(this.maxscore);
        
        for (var i = 0; i < count; i++)
        {
            if(this.Stararr[i]!=1)
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'star5');
                this.scoreSceneScore+=5;
            }
            else
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'dot');
                this.playedwithHint = true;
            }

            for(var j =0;j<=i;j++)
            {
                if(this.starsGroup.getChildAt(j))
                {
                    this.starsGroup.getChildAt(j).anchor.setTo(0.5);
                    this.starsGroup.getChildAt(j).x-=20;
                    this.starsGroup.getChildAt(i).x+=20;
                }
            }
        }    
        /* if((this.scoreSceneScore/this.maxscore) < 0.4){
            this.tryAgainText.visible = true;
        }else if(( (this.scoreSceneScore/this.maxscore) > 0.4) && ((this.scoreSceneScore/this.maxscore) < 0.7) ){
            this.terrificText.visible = true;
        }else if(( (this.scoreSceneScore/this.maxscore) > 0.7) && ((this.scoreSceneScore/this.maxscore) < 0.9) ){
            this.verGoodText.visible = true;
        }else if((this.scoreSceneScore/this.maxscore) > 0.9){
            this.excellentText.visible = true;
        } */
  
  if((this.scoreSceneScore/this.maxscore) < 0.4){
            this.sademoji.visible = true;
        }else{
            this.happyemoji.visible = true;
        }

        commonNavBar.playCelebrationSound();      
        commonNavBar.deductScore(this,this.scoreSceneScore,false,false);     

        if(!this.playedwithHint)
        {
            this.replayBtn.visible = false;
        }    
    },

    
	correctAns:function(target)
	{
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        commonNavBar.disableHintIcon();
        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.3.2_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        // _this.currentTime = window.timeSaveFunc();
        
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
        
        var correct = true;
        for(var i=0;i<4;i++)
        {
            if(i>0)
            {
               // //console.log("aaaaaaaaa"+Number(_this.whiteGroup.getChildAt(i).text));
               // //console.log("bbbbbb"+Number(_this.whiteGroup.getChildAt(0).text));
                
                //console.log("ccccccccc"+Number(_this.whiteGroup.getChildAt(0).getChildAt(0).text));
                //console.log("dddddd"+Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text));
                
                
                if(_this.questionNo==1)
                {
                   if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)+1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==2)
                {
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) + 1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==3)
                {
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) + 2))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                    
                }
                else if(_this.questionNo==4)
                {
                    //console.log("_this.questionNo ==4");
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)+1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                    
                }
                else if(_this.questionNo==5)
                {
                    //console.log("_this.questionNo ==5");
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)+1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==6)
                {
                    //console.log("_this.questionNo ==6");
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)+2))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
            }
        }
        
        if(correct)
        {   
            telInitializer2.gameCorrectAns();
            //correct answer here
            _this.opt1.events.onInputUp.removeAll();
            target.frame=1;
            if (_this.Caterpillar_head.key == 'Unity2_3_2start')
            {
                _this.Caterpillar_head.loadTexture('unity2_1_2_Caterpillar_Happy', 0);
                _this.Caterpillar_head.animations.add('unity2_1_2_Caterpillar_Happy');
                _this.Caterpillar_head.animations.play('unity2_1_2_Caterpillar_Happy',20,true);
            }
            
            target.events.onInputDown.removeAll();
             
            //_this.wrong = true;
            //_this.speakerbtn.inputEnabled=false;
            _this.celebration = true;

            commonNavBar.playClickSound();
           commonNavBar.playCelebrationSound();

            _this.time.events.add(2000, _this.removeEverthing, _this);

            _this.starAnim = _this.starsGroup.getChildAt(_this.count);
            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');
            _this.anim4.play(25,false);
            this.Stararr.push(3);
            _this.count++;
             this.starsGroup.getChildAt(_this.count).frame = 2; 
              target.events.onInputDown.removeAll();

             _this.sceneCount++; 

           // telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        }
        else
        {     
            telInitializer2.gameWrongAns();
            //Wrong anwser here
            // _this.wrongAns();
            target.frame=1;
            _this.opt1.events.onInputUp.removeAll();
            //console.log("wrong target :"+target.name);
            //target.tint = 0xA9A9A9;

            target.frame=1;
           _this.starsGroup.getChildAt(_this.count).frame = 1;
           this.Stararr.push(1);
           //_this.wrong = false;
           _this.count++;
           _this.starsGroup.getChildAt(_this.count).frame = 2;
            //_this.noofAttempts++;

            //_this.currentTime = window.timeSaveFunc();
            _this.interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "level2.3.2_"+target.name,  
                access_token: window.acctkn 
            }

            //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
            
             if (_this.Caterpillar_head.key == 'Unity2_3_2start')
            {
                //console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
                _this.Caterpillar_head.loadTexture('unity2_1_2_Caterpillar_Sad', 0);
                _this.Caterpillar_head.animations.add('unity2_1_2_Caterpillar_Sad');
                _this.Caterpillar_head.animations.play('unity2_1_2_Caterpillar_Sad',20,true);
            }
            
            target.events.onInputDown.removeAll();

            _this.timer3 = _this.time.create(false);

            //  Set a TimerEvent to occur after 2 seconds
            /*_this.time.events.add(1500, function()
            {
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
                _this.getQuestion();
            }, this);*/

            commonNavBar.playClickSound();
            commonNavBar.playWrongCelebrationSound();
            //commonNavBar.stopTimer();   
                        _this.time.events.add(2000, _this.removeEverthing, _this);

                 }
	},

    
    removeEverthing:function() 
    {
        //console.log("removeEverthing");

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        _this.wrong = true;
        _this.opt1.frame = 0;
        console.log("_this.no11 ssssssssssssssssssssss:"+_this.no11);
        _this.no11++;
        if(_this.no11<1)
        {
           wrong = true;
            
           
           // _this.timer1.stop();
            
            _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhite);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
             _this.MaintweenDestroy = _this.add.tween(_this.whiteGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
               // _this.count =0;
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
                _this.getQuestion1();
            },_this);  
        }
        else
        {

            wrong = true;
   
                   
            
            _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhite);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
             _this.MaintweenDestroy = _this.add.tween(_this.whiteGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy.onComplete.add(function(){
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
                _this.getQuestion1();
            },_this);
        }
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
	
    getVoice:function()
    {
        _this.stopVoice();
     
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(_this.qArrays[_this.no11])
        {
            case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:
            case 6: /*if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", "questionSounds/2.3.2/English/2.3.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", "questionSounds/2.3.2/Hindi/2.3.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", "questionSounds/2.3.2/Kannada/2.3.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", "questionSounds/2.3.2/Odiya/2.3.2.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }*/
                                        commonNavBar.getVoice(_this.qsoundurl);

        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },

    shutdown:function()
        {
            window.score = this.score;

            window.score += commonNavBar.deductForHint;

            commonNavBar.level2Bool = false;
            commonNavBar.deductForHint = 0;
            
            localStorage.setItem(window.avatarName+"Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"sequence_NSSG_3_2state", "playedwithhint");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"sequence_NSSG_3_2state", "fullycomplete");
                localStorage.setItem(window.avatarName+"sequence_NSSG_4_2state", "canplay");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }   
            
            
        }  

};