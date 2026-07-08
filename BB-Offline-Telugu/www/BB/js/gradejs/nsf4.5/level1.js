Game.nsf4_5level1=function(){};
	
	
	

Game.nsf4_5level1.prototype={
    init:function(game)
	{
		_this = this;
       
		telInitializer.gameIdInit("NSF4_5",gradeSelected);
	},

    preload:function(game){
  if(!window.grade5NSF4){

            window.grade5NSF4 = true;

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

            //GAME ASSETS         

            this.load.image('F2_5backg',window.baseUrl+'assets/gradeAssets/nsf2.5/backg.png');

            this.load.image('nsf4_5_t1',window.baseUrl+'assets/gradeAssets/nsf4.5/number/1.png');
        this.load.image('nsf4_5_t2',window.baseUrl+'assets/gradeAssets/nsf4.5/number/2.png');
        this.load.image('nsf4_5_t3',window.baseUrl+'assets/gradeAssets/nsf4.5/number/3.png');
        this.load.image('nsf4_5_t4',window.baseUrl+'assets/gradeAssets/nsf4.5/number/4.png');
        this.load.image('nsf4_5_t5',window.baseUrl+'assets/gradeAssets/nsf4.5/number/5.png');
        this.load.image('nsf4_5_t6',window.baseUrl+'assets/gradeAssets/nsf4.5/number/6.png');
        this.load.image('nsf4_5_t7',window.baseUrl+'assets/gradeAssets/nsf4.5/number/7.png');
        this.load.image('nsf4_5_t8',window.baseUrl+'assets/gradeAssets/nsf4.5/number/8.png');
        this.load.image('nsf4_5_t9',window.baseUrl+'assets/gradeAssets/nsf4.5/number/9.png');
        this.load.image('nsf4_5_t10',window.baseUrl+'assets/gradeAssets/nsf4.5/number/10.png');
        this.load.image('nsf4_5_t11',window.baseUrl+'assets/gradeAssets/nsf4.5/number/11.png');
        this.load.image('nsf4_5_t12',window.baseUrl+'assets/gradeAssets/nsf4.5/number/12.png');
        
       
        this.load.image('nsf4_5_big3',window.baseUrl+'assets/gradeAssets/nsf4.5/num/w10004.png');
        this.load.image('nsf4_5_big4',window.baseUrl+'assets/gradeAssets/nsf4.5/num/w10005.png');
        
        this.load.image('nsf4_5_big22',window.baseUrl+'assets/gradeAssets/nsf4.5/num/r10001.png');
        this.load.image('nsf4_5_big23',window.baseUrl+'assets/gradeAssets/nsf4.5/num/r10002.png');
        
         this.load.image('nsf4_5_big1',window.baseUrl+'assets/gradeAssets/nsf4.5/num/q10007.png');
        this.load.image('nsf4_5_big2',window.baseUrl+'assets/gradeAssets/nsf4.5/num/q10008.png');
        this.load.image('nsf4_5_big5',window.baseUrl+'assets/gradeAssets/nsf4.5/num/q10003.png');
        this.load.image('nsf4_5_big6',window.baseUrl+'assets/gradeAssets/nsf4.5/num/q10004.png');
        
        this.load.image('nsf4_5_big7',window.baseUrl+'assets/gradeAssets/nsf4.5/num/e10008.png');
        this.load.image('nsf4_5_big8',window.baseUrl+'assets/gradeAssets/nsf4.5/num/e10007.png');
        this.load.image('nsf4_5_big9',window.baseUrl+'assets/gradeAssets/nsf4.5/num/e10004.png');
        this.load.image('nsf4_5_big10',window.baseUrl+'assets/gradeAssets/nsf4.5/num/e10005.png');
        this.load.image('nsf4_5_big11',window.baseUrl+'assets/gradeAssets/nsf4.5/num/e10001.png');
        this.load.image('nsf4_5_big12',window.baseUrl+'assets/gradeAssets/nsf4.5/num/e10002.png');
        
        this.load.image('nsf4_5_big13',window.baseUrl+'assets/gradeAssets/nsf4.5/num/7.png');
        this.load.image('nsf4_5_big14',window.baseUrl+'assets/gradeAssets/nsf4.5/num/5.png');
        this.load.image('nsf4_5_big15',window.baseUrl+'assets/gradeAssets/nsf4.5/num/9.png');
        this.load.image('nsf4_5_big16',window.baseUrl+'assets/gradeAssets/nsf4.5/num/4.png');
        this.load.image('nsf4_5_big17',window.baseUrl+'assets/gradeAssets/nsf4.5/num/11.png');
        this.load.image('nsf4_5_big18',window.baseUrl+'assets/gradeAssets/nsf4.5/num/12.png');
        this.load.image('nsf4_5_big19',window.baseUrl+'assets/gradeAssets/nsf4.5/num/8.png');
        this.load.image('nsf4_5_big20',window.baseUrl+'assets/gradeAssets/nsf4.5/num/1.png');
        this.load.image('nsf4_5_big21',window.baseUrl+'assets/gradeAssets/nsf4.5/num/3.png');
       
        this.load.atlas('nsf4_5_line1',window.baseUrl+'assets/gradeAssets/nsf4.5/w1.png',window.baseUrl+'json/gradeJson/nsf4.5/line/w1.json');
        this.load.atlas('nsf4_5_line2',window.baseUrl+'assets/gradeAssets/nsf4.5/w2.png',window.baseUrl+'json/gradeJson/nsf4.5/line/w2.json');
        this.load.atlas('nsf4_5_line3',window.baseUrl+'assets/gradeAssets/nsf4.5/w3.png',window.baseUrl+'json/gradeJson/nsf4.5/line/w3.json');
        this.load.atlas('nsf4_5_line4',window.baseUrl+'assets/gradeAssets/nsf4.5/w4.png',window.baseUrl+'json/gradeJson/nsf4.5/line/w4.json');
        this.load.atlas('nsf4_5_line5',window.baseUrl+'assets/gradeAssets/nsf4.5/w5.png',window.baseUrl+'json/gradeJson/nsf4.5/line/w5.json');
        this.load.atlas('nsf4_5_line6',window.baseUrl+'assets/gradeAssets/nsf4.5/w6.png',window.baseUrl+'json/gradeJson/nsf4.5/line/w6.json');
        this.load.atlas('nsf4_5_line7',window.baseUrl+'assets/gradeAssets/nsf4.5/w7.png',window.baseUrl+'json/gradeJson/nsf4.5/line/w7.json');
        this.load.atlas('nsf4_5_line8',window.baseUrl+'assets/gradeAssets/nsf4.5/w8.png',window.baseUrl+'json/gradeJson/nsf4.5/line/w8.json');
        this.load.atlas('nsf4_5_line9',window.baseUrl+'assets/gradeAssets/nsf4.5/w9.png',window.baseUrl+'json/gradeJson/nsf4.5/line/w9.json');
        this.load.atlas('nsf4_5_line10',window.baseUrl+'assets/gradeAssets/nsf4.5/w10.png',window.baseUrl+'json/gradeJson/nsf4.5/line/w10.json');
        this.load.atlas('nsf4_5_line11',window.baseUrl+'assets/gradeAssets/nsf4.5/w11.png',window.baseUrl+'json/gradeJson/nsf4.5/line/w11.json');
        this.load.atlas('nsf4_5_line12',window.baseUrl+'assets/gradeAssets/nsf4.5/w12.png',window.baseUrl+'json/gradeJson/nsf4.5/line/w12.json');
        this.load.atlas('nsf4_5_line13',window.baseUrl+'assets/gradeAssets/nsf4.5/w13.png',window.baseUrl+'json/gradeJson/nsf4.5/line/w13.json');
        this.load.atlas('nsf4_5_line14',window.baseUrl+'assets/gradeAssets/nsf4.5/w14.png',window.baseUrl+'json/gradeJson/nsf4.5/line/w14.json');
        
        this.load.atlas('nsf4_5_opt',window.baseUrl+'assets/gradeAssets/nsf4.5/B2.png',window.baseUrl+'json/gradeJson/nsf4.5/line/B2.json');
      }

    },


	create:function(game){
        _this.bg1=null;
_this.starsGroup=0;
_this.no1=0;
_this.mainFlag=0;
_this.opt1=null;
_this.opt2=null;
_this.opt3=null;
_this.opt4=null;
_this.opt9=null;
_this.no2=0;
_this.count1=0;
_this.count=0;
_this.qArrays=null;
_this.flagmain11Anim=0;
_this.animlev1=0;
_this.a1=0;
_this.Sprite=0;
_this.optionsgrp=0;
_this.wronggraphics1=0;_this.wronggraphics2=0;_this.wronggraphics3=0;
_this.wrngGraphicgrp=0;
_this.boxb1;
_this.counterText;
_this.counterText1;
_this.counterText2;
_this.maingroup;
_this.value1=7;
_this.value2=11;
_this.value3=13;
_this.i=0;_this.j=0;_this.k=0;
_this.speaker=0;
_this.w1=0;_this.w2=0;
_this.AnimOpt=0;_this.AnimOpt2=0;_this.AnimOpt3=0;
_this.tick=0;
_this.numGroup=0;
_this.enterTxt=0;
_this.txtbox=0;
_this.grpnum=new Array();
_this.boxclick=0;
_this.minutes=0;_this.seconds=0;_this.counterForTimer=0;

_this.box=0;

_this.noofAttempts=0;
    _this.AnsTimerCount=0;   
        _this.sceneCount=0;

        //baudio.play(); 
		//baudio.loopFull(0.6);
        _this.qArrays = new Array();
        _this.qArrays1 = new Array();
        _this.qArrays = [1,2,3,4,5,6];
        _this.qArrays1 = [7,8,9,10,11,12];
        _this.qArrays = this.shuffle(_this.qArrays);
        _this.qArrays1 = this.shuffle(_this.qArrays1);
       
       // counterText=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
       
        this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();

         _this.bg1 = this.add.sprite(0,0, 'F2_5backg');
        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
    
    _this.TopBar.scale.setTo(1,1.1);

    _this.backbtn = this.add.sprite(-3,3,'newCommonBackBtnForAll');
    _this.backbtn.inputEnabled = true;
    _this.backbtn.events.onInputDown.add(function(){
        console.log("back");
        _this.backbtn.events.onInputDown.removeAll();
        this.stopVoice();
        this.clickSound = this.add.audio('ClickSound');
            _this.clickSound.play();
       _this.state.start('grade1levelSelectionScreen',true,false); 
    },this);
  
         _this.clickSound = _this.add.audio('ClickSound');
     _this.snapSound = _this.add.audio('snapSound');
   /* _this.dottedBox=this.add.sprite(70,7,'dottedBox');
    _this.numTxt1 = this.add.text(45,17, 'PRACTICE');
    _this.numTxt1.anchor.setTo(0.5);
    _this.numTxt1.align = 'center';
    _this.numTxt1.font = 'Alte Haas Grotesk';
    _this.numTxt1.fontSize = 12;
    _this.numTxt1.fill = '#ffffff';
    _this.numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
    _this.dottedBox.addChild(_this.numTxt1);
        
    _this.numTxt2 = this.add.text(220,24, 'Subtraction');
    _this.numTxt2.anchor.setTo(0.5);
    _this.numTxt2.align = 'center';
    _this.numTxt2.font = 'Alte Haas Grotesk';
    _this.numTxt2.fontSize = 18;
    _this.numTxt2.fill = '#ffffff';
    _this.numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
        
   _this.timebg=this.add.sprite(305,6,'Level42C_timer');
    _this.timebg.scale.setTo(1.2,1);
        
    _this.timeDisplay = this.add.text(336,22,_this.minutes + ' : '+ _this.seconds);
    
    _this.timeDisplay.anchor.setTo(0.5);
    _this.timeDisplay.align = 'center';
     _this.timeDisplay.font = 'myfont';
     _this.timeDisplay.fontWeight = 'Normal';
    _this.timeDisplay.fontSize = 20;
    //text.fontWeight = 'nsf4_5_bold';
    _this.timeDisplay.fill = '#ADFF2F';
//        _this.footer = this.add.sprite(0,480,'footer');
       // footer.scale.setTo(1,1);
       _this.speaker = this.add.sprite(600,5,'grade11_speaker');
        _this.speaker.inputEnabled = true;
        _this.speaker.events.onInputDown.add(function()
		{
		   _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
			_this.getVoice();
		},_this);
         _this.generateStarsForTheScene(6);
               //_this.no1++;
             this.getQuestion();
 
    },
    /***********************************getquestion************************/
    getQuestion:function(target)
    {

        if(!_this.timer)
        {
          _this.sceneCount++;
          _this.noofAttempts=0;
          _this.AnsTimerCount=0;
            _this.timer = _this.time.create(false);

              //  Set a TimerEvent to occur after 2 seconds
              _this.timer.loop(1000, function(){
                   _this.AnsTimerCount++;
              }, this);
              //  Start the timer running - this is important!
              //  It won't start automatically, allowing you to hook it to button events and the like.
              _this.timer.start();
      }


        _this.timer1 = this.time.create(false);
        _this.timer1.loop(1000, function(){
                  this.updateTimer();
        }, this);
        _this.timer1.start();
        _this.grpnum=new Array();
       // _this.speaker.inputEnabled=false;
       // _this.speaker.input.useHandCursor = true;
        _this.getVoice();
    	console.log("get"+_this.no1);
    	console.log("get"+_this.qArrays[_this.no1]);
        if(_this.no1<3)
            {
            switch(_this.qArrays[_this.no1])//qArrays[no1])
            {
            case 1: console.log("case1"); 
                this.gotoFirstQuestion();
				    break;
            case 2:console.log("case2");
                this.gotoSecondQuestion();
   				     break;
    		case 3: console.log("case3");
                this.gotoThirdQuestion();
    				break;
    		case 4: console.log("case4");
                this.gotoFourthQuestion();
    				break;
            case 5: console.log("case5");
                this.gotoFifthQuestion();
    				break;
            case 6: console.log("case5");
                    this.gotosixthQuestion();
    				break;
            }
            }
        else{
        switch(_this.qArrays1[_this.no1])
            {
              case 7: console.log("case5");
                    this.gotoseventhQuestion();
    				break;
            case 8: console.log("case5");
                    this.gotoeighthQuestion();
    				break;
            case 9: console.log("case5");
                    this.gotoninthQuestion();
    				break;
            case 10: console.log("case5");
                    this.gototenthQuestion();
    				break;
            case 11: console.log("case5");
                    this.gotoeleventhQuestion();
    				break;
            case 12: console.log("case5");
                    this.gototwelethQuestion();
    				break;       
            }
        }
    },
     addQuestion:function(no2)
    {

           console.log("here");
           this.time.events.add(2000, function(){ 
               
           this.changeQuestion();
               
            }, this);

    },
   
    
   
    
    stopAllVoice:function(){
        Eng_42B1.stop();
        Hin_42B1.stop();
        Kan_42B1.stop();
        
    },
    /****************************firstquestionwheel************************/
     gotoFirstQuestion:function(){
         _this.Question = 1;
//          _this.no1++;
         console.log("first");
         _this.group1=_this.add.group();
         _this.line1=_this.add.sprite(180, this.world.centerY-70,'nsf4_5_line3');
         _this.line1.frame=1;
         _this.line1.inputEnabled=true;
//         _this.t1=_this.add.sprite(450, this.world.centerY-120,'nsf4_5_t1');
         _this.t7=_this.add.sprite(390, this.world.centerY-120,'nsf4_5_t7');
         _this.t5=_this.add.sprite(270, this.world.centerY-120,'nsf4_5_t5');
          _this.graphics1 = this.add.graphics(157,this.world.centerY-85);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.7);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
          _this.graphics1.inputEnabled=true;
        _this.graphics1.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics1.input.allowVerticalDrag = false;
            _this.graphics1.events.onDragUpdate.add(function(target){
                 console.log(target.x);
            if(target.x>=660)
            {    
                target.x = 655;
            }
            else if(target.x<154)
            {
                target.x = 157;
                _this.line1.frame=1;
            }
               if(target.x>200&&target.x<250)
                    {
                       _this.line1.frame=2; 
                    }
                if(target.x>250&&target.x<300)
                    {
                       _this.line1.frame=3; 
                    }
                if(target.x>300&&target.x<340)
                    {
                       _this.line1.frame=4; 
                    }
                if(target.x>340&&target.x<410)
                    {
                       _this.line1.frame=5; 
                    }
                if(target.x>410&&target.x<470)
                    {
                       _this.line1.frame=6; 
                    }
                if(target.x>470&&target.x<530)
                    {
                       _this.line1.frame=7; 
                    }
                if(target.x>530&&target.x<590)
                    {
                       _this.line1.frame=8; 
                    }
                if(target.x>590&&target.x<640)
                    {
                       _this.line1.frame=9; 
                    }
                if(target.x>640&&target.x<670)
                    {
                       _this.line1.frame=10; 
                    }
               
                 if(_this.line1.frame==4)
                 {
                   target.x=330;  
                 }
                else if(_this.line1.frame==2)
                    {
                     target.x=220;   
                    }
                else if(_this.line1.frame==3)
                    {
                     target.x=270;   
                    }
                else if(_this.line1.frame==5)
                    {
                     target.x=390;   
                    }
                else if(_this.line1.frame==6)
                    {
                     target.x=450;   
                    }
                else if(_this.line1.frame==7)
                    {
                     target.x=510;   
                    }
                else if(_this.line1.frame==1)
                    {
                     target.x=157;   
                    }
                else if(_this.line1.frame==8)
                    {
                     target.x=570;   
                    }
                else if(_this.line1.frame==9)
                    {
                     target.x=625;   
                    }
                else if(_this.line1.frame==10)
                    {
                     target.x=670;   
                    }
            },this);
               
        },this);
         _this.group2=_this.add.group();
         _this.option1=_this.add.sprite(300,this.world.centerY+70,'nsf4_5_opt');
         _this.option1.frame=0;
         _this.option1.inputEnabled=true;
         _this.label1=_this.add.sprite(350, this.world.centerY+95,'nsf4_5_big13');
       _this.label1.scale.setTo(1);
          _this.option1.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
         _this.clickSound.play();
             _this.option1.frame=1;
             _this.option2.frame=0;
              if(_this.line1.frame==4)
                  {
                    _this.correctAns();   
                  }
              else{
                   _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton");       
                _this.shake.shake(10,_this.group1);
                _this.option2.frame=0;
                _this.option1.frame=0;
              }
              },this);
         _this.option2=_this.add.sprite(500,this.world.centerY+70,'nsf4_5_opt');
         _this.option2.frame=0;
         _this.option2.inputEnabled=true;
         _this.label2=_this.add.sprite(550, this.world.centerY+95,'nsf4_5_big14');
         _this.label2.scale.setTo(1);
         _this.option2.events.onInputDown.add(function(target)
              {
                    _this.noofAttempts++;
                    _this.clickSound.play();
                     _this.option1.frame=0;
                     _this.option2.frame=1;
                     _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                        _this.flag;
                console.log("wrongbutton");       
                _this.shake.shake(10,_this.group1);
                _this.shake.shake(10,_this.group2);
                    _this.option2.frame=0;
                    _this.option1.frame=0;
              },this);
         _this.group1.add(_this.line1);
         _this.group1.add(_this.graphics1);
         _this.group1.add(_this.t5);
         _this.group1.add(_this.t7);
         _this.group2.add(_this.option1);
         _this.group2.add(_this.option2);
         _this.group2.add(_this.label1);
         _this.group2.add(_this.label2);
        
    },
   /*******************************secondquestionwheel*******************/
   gotoSecondQuestion:function(){
       _this.Question = 2;
//   _this.no1++;
         console.log("second");
     _this.group1=_this.add.group();
         _this.line1=_this.add.sprite(180, this.world.centerY-70,'nsf4_5_line3');
         _this.line1.frame=1;
         _this.line1.inputEnabled=true;
//         _this.t1=_this.add.sprite(450, this.world.centerY-120,'nsf4_5_t1');
         _this.t9=_this.add.sprite(600, this.world.centerY-120,'nsf4_5_t9');
         _this.t4=_this.add.sprite(530, this.world.centerY-120,'nsf4_5_t4');
           _this.graphics1 = this.add.graphics(157,this.world.centerY-85);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.7);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
          _this.graphics1.inputEnabled=true;
        _this.graphics1.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics1.input.allowVerticalDrag = false;
            _this.graphics1.events.onDragUpdate.add(function(target){
                 console.log(target.x);
            if(target.x>=660)
            {    
                target.x = 655;
            }
            else if(target.x<154)
            {
                target.x = 157;
                _this.line1.frame=1;
            }
               if(target.x>200&&target.x<250)
                    {
                       _this.line1.frame=2; 
                    }
                if(target.x>250&&target.x<300)
                    {
                       _this.line1.frame=3; 
                    }
                if(target.x>300&&target.x<340)
                    {
                       _this.line1.frame=4; 
                    }
                if(target.x>340&&target.x<410)
                    {
                       _this.line1.frame=5; 
                    }
                if(target.x>410&&target.x<470)
                    {
                       _this.line1.frame=6; 
                    }
                if(target.x>470&&target.x<530)
                    {
                       _this.line1.frame=7; 
                    }
                if(target.x>530&&target.x<590)
                    {
                       _this.line1.frame=8; 
                    }
                if(target.x>590&&target.x<640)
                    {
                       _this.line1.frame=9; 
                    }
                if(target.x>640&&target.x<670)
                    {
                       _this.line1.frame=10; 
                    }
               
                 if(_this.line1.frame==4)
                 {
                   target.x=330;  
                 }
                else if(_this.line1.frame==2)
                    {
                     target.x=220;   
                    }
                else if(_this.line1.frame==3)
                    {
                     target.x=270;   
                    }
                else if(_this.line1.frame==5)
                    {
                     target.x=390;   
                    }
                else if(_this.line1.frame==6)
                    {
                     target.x=450;   
                    }
                else if(_this.line1.frame==7)
                    {
                     target.x=510;   
                    }
                else if(_this.line1.frame==1)
                    {
                     target.x=157;   
                    }
                else if(_this.line1.frame==8)
                    {
                     target.x=570;   
                    }
                else if(_this.line1.frame==9)
                    {
                     target.x=625;   
                    }
                else if(_this.line1.frame==10)
                    {
                     target.x=670;   
                    }
            },this);
               
        },this);
         _this.group2=_this.add.group();
         _this.option1=_this.add.sprite(300,this.world.centerY+70,'nsf4_5_opt');
         _this.option1.frame=0;
         _this.option1.inputEnabled=true;
         _this.label1=_this.add.sprite(350, this.world.centerY+95,'nsf4_5_big15');
       _this.label1.scale.setTo(1);
          _this.option1.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
         _this.clickSound.play();
             _this.option1.frame=1;
             _this.option2.frame=0;
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                        _this.flag;
                console.log("wrongbutton");       
                _this.shake.shake(10,_this.group1);
                _this.shake.shake(10,_this.group2);
                    _this.option2.frame=0;
                    _this.option1.frame=0;
              },this);
         _this.option2=_this.add.sprite(500,this.world.centerY+70,'nsf4_5_opt');
         _this.option2.frame=0;
         _this.option2.inputEnabled=true;
         _this.label2=_this.add.sprite(550, this.world.centerY+95,'nsf4_5_big16');
         _this.label2.scale.setTo(1);
         _this.option2.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
                    _this.clickSound.play();
                     _this.option1.frame=0;
                     _this.option2.frame=1;
             if(_this.line1.frame==7)
                  {
                    _this.correctAns();   
                  }
              else{
                   _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton");       
                _this.shake.shake(10,_this.group1);
                _this.option2.frame=0;
                _this.option1.frame=0;
              } 
              },this);
         _this.group1.add(_this.line1);
         _this.group1.add(_this.graphics1);
         _this.group1.add(_this.t9);
         _this.group1.add(_this.t4);
         _this.group2.add(_this.option1);
         _this.group2.add(_this.option2);
         _this.group2.add(_this.label1);
         _this.group2.add(_this.label2);
    	
    },
    /*****************************thirdquestioncircle**********************/
      gotoThirdQuestion:function(){
      _this.Question = 3;
//          _this.no1++;
         console.log("third");
         _this.group1=_this.add.group();
         _this.line1=_this.add.sprite(180, this.world.centerY-70,'nsf4_5_line4');
         _this.line1.frame=1;
         _this.line1.inputEnabled=true;
//         _this.t1=_this.add.sprite(450, this.world.centerY-120,'nsf4_5_t1');
         _this.t9=_this.add.sprite(600, this.world.centerY-120,'nsf4_5_t9');
         _this.t8=_this.add.sprite(630, this.world.centerY-120,'nsf4_5_t8');
           _this.graphics1 = this.add.graphics(157,this.world.centerY-85);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.7);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
          _this.graphics1.inputEnabled=true;
        _this.graphics1.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics1.input.allowVerticalDrag = false;
            _this.graphics1.events.onDragUpdate.add(function(target){
                 console.log(target.x);
            if(target.x>=660)
            {    
                target.x = 655;
            }
            else if(target.x<154)
            {
                target.x = 157;
                _this.line1.frame=1;
            }
               if(target.x>200&&target.x<230)
                    {
                       _this.line1.frame=2; 
                    }
                if(target.x>230&&target.x<260)
                    {
                       _this.line1.frame=3; 
                    }
                if(target.x>260&&target.x<3100)
                    {
                       _this.line1.frame=4; 
                    }
                if(target.x>310&&target.x<350)
                    {
                       _this.line1.frame=5; 
                    }
                if(target.x>350&&target.x<380)
                    {
                       _this.line1.frame=6; 
                    }
                if(target.x>380&&target.x<440)
                    {
                       _this.line1.frame=7; 
                    }
                if(target.x>440&&target.x<480)
                    {
                       _this.line1.frame=8; 
                    }
                if(target.x>480&&target.x<510)
                    {
                       _this.line1.frame=9; 
                    }
                if(target.x>510&&target.x<570)
                    {
                       _this.line1.frame=10; 
                    }
                if(target.x>570&&target.x<610)
                    {
                       _this.line1.frame=11; 
                    }
                if(target.x>610&&target.x<640)
                    {
                       _this.line1.frame=12; 
                    }
                if(target.x>640&&target.x<670)
                    {
                       _this.line1.frame=14;
                    }
                if(_this.line1.frame==2)
                 {
                   target.x=205;  
                 }
                else if(_this.line1.frame==3)
                 {
                   target.x=240;  
                 }
                 else if(_this.line1.frame==4)
                 {
                   target.x=285;  
                 }
                else if(_this.line1.frame==5)
                 {
                   target.x=330;  
                 }
                else if(_this.line1.frame==6)
                 {
                   target.x=370;  
                 }
                else if(_this.line1.frame==7)
                    {
                     target.x=415;   
                    }
                else if(_this.line1.frame==1)
                    {
                     target.x=157;   
                    }
                else if(_this.line1.frame==8)
                 {
                   target.x=460;  
                 }
                else if(_this.line1.frame==9)
                 {
                   target.x=505;  
                 }
                else if(_this.line1.frame==10)
                    {
                     target.x=550;   
                    }
                else if(_this.line1.frame==11)
                    {
                     target.x=595;   
                    }
                else if(_this.line1.frame==12)
                    {
                     target.x=640;   
                    }
                else if(_this.line1.frame==14)
                    {
                     target.x=660;   
                    }
            },this);     
        },this);
         _this.group2=_this.add.group();
         _this.option1=_this.add.sprite(300,this.world.centerY+70,'nsf4_5_opt');
         _this.option1.frame=0;
         _this.option1.inputEnabled=true;
         _this.label1=_this.add.sprite(350, this.world.centerY+95,'nsf4_5_big15');
       _this.label1.scale.setTo(1);
          _this.option1.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
         _this.clickSound.play();
             _this.option1.frame=1;
             _this.option2.frame=0;
              if(_this.line1.frame==10)
                  {
                    _this.correctAns();   
                  }
              else{
                   _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton");       
                _this.shake.shake(10,_this.group1);
                _this.option2.frame=0;
                _this.option1.frame=0;
              } 
              },this);
         _this.option2=_this.add.sprite(500,this.world.centerY+70,'nsf4_5_opt');
         _this.option2.frame=0;
         _this.option2.inputEnabled=true;
         _this.label2=_this.add.sprite(550, this.world.centerY+95,'nsf4_5_big2');
         _this.label2.scale.setTo(1);
         _this.option2.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
                    _this.clickSound.play();
                     _this.option1.frame=0;
                     _this.option2.frame=1;
                        _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                        _this.flag;
                        console.log("wrongbutton");       
                        _this.shake.shake(10,_this.group1);
                    _this.shake.shake(10,_this.group2);
                    _this.option2.frame=0;
                    _this.option1.frame=0;
             
              },this);
         _this.group1.add(_this.line1);
         _this.group1.add(_this.graphics1);
         _this.group1.add(_this.t9);
         _this.group1.add(_this.t8);
         _this.group2.add(_this.option1);
         _this.group2.add(_this.option2);
         _this.group2.add(_this.label1);
         _this.group2.add(_this.label2);
    },
    /*********************************fourthquestioncircle***********************/
       gotoFourthQuestion:function(){
         
    	 _this.Question = 4;
//         _this.no1++;
         console.log("four");
        _this.group1=_this.add.group();
         _this.line1=_this.add.sprite(180, this.world.centerY-70,'nsf4_5_line4');
         _this.line1.frame=1;
         _this.line1.inputEnabled=true;
//         _this.t1=_this.add.sprite(450, this.world.centerY-120,'nsf4_5_t1');
         _this.t9=_this.add.sprite(340, this.world.centerY-120,'nsf4_5_t11');
         _this.t4=_this.add.sprite(250, this.world.centerY-120,'nsf4_5_t12');
           _this.graphics1 = this.add.graphics(157,this.world.centerY-85);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.7);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
          _this.graphics1.inputEnabled=true;
        _this.graphics1.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics1.input.allowVerticalDrag = false;
            _this.graphics1.events.onDragUpdate.add(function(target){
                 console.log(target.x);
             if(target.x>=660)
            {    
                target.x = 655;
            }
            else if(target.x<154)
            {
                target.x = 157;
                _this.line1.frame=1;
            }
               if(target.x>200&&target.x<210)
                    {
                       _this.line1.frame=2; 
                    }
                if(target.x>230&&target.x<250)
                    {
                       _this.line1.frame=3; 
                    }
                if(target.x>260&&target.x<290)
                    {
                       _this.line1.frame=4; 
                    }
                if(target.x>310&&target.x<340)
                    {
                       _this.line1.frame=5; 
                    }
                if(target.x>350&&target.x<370)
                    {
                       _this.line1.frame=6; 
                    }
                if(target.x>380&&target.x<420)
                    {
                       _this.line1.frame=7; 
                    }
                if(target.x>440&&target.x<470)
                    {
                       _this.line1.frame=8; 
                    }
                if(target.x>480&&target.x<500)
                    {
                       _this.line1.frame=9; 
                    }
                if(target.x>510&&target.x<550)
                    {
                       _this.line1.frame=10; 
                    }
                if(target.x>570&&target.x<600)
                    {
                       _this.line1.frame=11; 
                    }
                if(target.x>610&&target.x<630)
                    {
                       _this.line1.frame=12; 
                    }
                if(target.x>640&&target.x<670)
                    {
                       _this.line1.frame=14;
                    }
                if(_this.line1.frame==2)
                 {
                   target.x=205;  
                 }
                else if(_this.line1.frame==3)
                 {
                   target.x=240;  
                 }
                 else if(_this.line1.frame==4)
                 {
                   target.x=285;  
                 }
                else if(_this.line1.frame==5)
                 {
                   target.x=330;  
                 }
                else if(_this.line1.frame==6)
                 {
                   target.x=370;  
                 }
                else if(_this.line1.frame==7)
                    {
                     target.x=415;   
                    }
                else if(_this.line1.frame==1)
                    {
                     target.x=157;   
                    }
                else if(_this.line1.frame==8)
                 {
                   target.x=460;  
                 }
                else if(_this.line1.frame==9)
                 {
                   target.x=505;  
                 }
                else if(_this.line1.frame==10)
                    {
                     target.x=550;   
                    }
                else if(_this.line1.frame==11)
                    {
                     target.x=595;   
                    }
                else if(_this.line1.frame==12)
                    {
                     target.x=640;   
                    }
                else if(_this.line1.frame==14)
                    {
                     target.x=660;   
                    }
            },this);
               
        },this);
         _this.group2=_this.add.group();
         _this.option1=_this.add.sprite(300,this.world.centerY+70,'nsf4_5_opt');
         _this.option1.frame=0;
         _this.option1.inputEnabled=true;
         _this.label1=_this.add.sprite(350, this.world.centerY+95,'nsf4_5_big18');
       _this.label1.scale.setTo(1);
          _this.option1.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
         _this.clickSound.play();
             _this.option1.frame=1;
             _this.option2.frame=0;
              _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                        _this.flag;
                        console.log("wrongbutton");       
                        _this.shake.shake(10,_this.group1);
                    _this.shake.shake(10,_this.group2);
                    _this.option2.frame=0;
                    _this.option1.frame=0;
              },this);
         _this.option2=_this.add.sprite(500,this.world.centerY+70,'nsf4_5_opt');
         _this.option2.frame=0;
         _this.option2.inputEnabled=true;
         _this.label2=_this.add.sprite(550, this.world.centerY+95,'nsf4_5_big17');
         _this.label2.scale.setTo(1);
         _this.option2.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
                    _this.clickSound.play();
                     _this.option1.frame=0;
                     _this.option2.frame=1;
             if(_this.line1.frame==4)
                  {
                    _this.correctAns();   
                  }
              else{
                   _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton");       
                _this.shake.shake(10,_this.group1);
                _this.option2.frame=0;
                _this.option1.frame=0;
              } 
              },this);
         _this.group1.add(_this.line1);
         _this.group1.add(_this.graphics1);
         _this.group1.add(_this.t9);
         _this.group1.add(_this.t4);
         _this.group2.add(_this.option1);
         _this.group2.add(_this.option2);
         _this.group2.add(_this.label1);
         _this.group2.add(_this.label2);
    },
    /******************fifthquestionwheel***************************************/
     gotoFifthQuestion:function(){
        _this.Question = 5;
//         _this.no1++;
         console.log("five");
         _this.group1=_this.add.group();
         _this.line1=_this.add.sprite(180, this.world.centerY-70,'nsf4_5_line5');
         _this.line1.frame=1;
         _this.line1.inputEnabled=true;
//         _this.t1=_this.add.sprite(450, this.world.centerY-120,'nsf4_5_t1');
         _this.t9=_this.add.sprite(550, this.world.centerY-120,'nsf4_5_t4');
         _this.t4=_this.add.sprite(640, this.world.centerY-120,'nsf4_5_t8');
          _this.graphics1 = this.add.graphics(157,this.world.centerY-85);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.7);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
          _this.graphics1.inputEnabled=true;
        _this.graphics1.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics1.input.allowVerticalDrag = false;
            _this.graphics1.events.onDragUpdate.add(function(target){
                 console.log(target.x);
            if(target.x>=660)
            {    
                target.x = 655;
            }
            else if(target.x<154)
            {
                target.x = 157;
                _this.line1.frame=1;
            }
                if(target.x>200&&target.x<240)
                    {
                       _this.line1.frame=2; 
                    }
                if(target.x>240&&target.x<290)
                    {
                       _this.line1.frame=3; 
                    }
                if(target.x>290&&target.x<340)
                    {
                       _this.line1.frame=4; 
                    }
                if(target.x>340&&target.x<380)
                    {
                       _this.line1.frame=5; 
                    }
                if(target.x>380&&target.x<440)
                    {
                       _this.line1.frame=6; 
                    }
                if(target.x>440&&target.x<480)
                    {
                       _this.line1.frame=7; 
                    }
                if(target.x>480&&target.x<540)
                    {
                       _this.line1.frame=8; 
                    }
                if(target.x>540&&target.x<580)
                    {
                       _this.line1.frame=9;
                    }
                if(target.x>580&&target.x<640)
                    {
                       _this.line1.frame=10;
                    }
                if(target.x>640&&target.x<660)
                    {
                       _this.line1.frame=11; 
                    }
               
                if(_this.line1.frame==2)
                 {
                   target.x=210;  
                 } 
               else if(_this.line1.frame==3)
                 {
                   target.x=260;  
                 }
                else if(_this.line1.frame==4)
                 {
                   target.x=315;  
                 }
                else if(_this.line1.frame==5)
                    {
                     target.x=365;   
                    }
                else if(_this.line1.frame==6)
                    {
                     target.x=420;   
                    }
                else if(_this.line1.frame==1)
                    {
                     target.x=157;   
                    }
                else if(_this.line1.frame==7)
                    {
                     target.x=475;   
                    }
                else if(_this.line1.frame==8)
                    {
                     target.x=525;   
                    }
                else if(_this.line1.frame==9)
                    {
                     target.x=580;   
                    }
                else if(_this.line1.frame==10)
                    {
                     target.x=630;   
                    }
                else if(_this.line1.frame==11)
                    {
                     target.x=660;   
                    }
            },this);
               
        },this);
         _this.group2=_this.add.group();
         _this.option1=_this.add.sprite(300,this.world.centerY+70,'nsf4_5_opt');
         _this.option1.frame=0;
         _this.option1.inputEnabled=true;
         _this.label1=_this.add.sprite(350, this.world.centerY+95,'nsf4_5_big16');
       _this.label1.scale.setTo(1);
          _this.option1.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
         _this.clickSound.play();
             _this.option1.frame=1;
             _this.option2.frame=0;
              _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                        _this.flag;
                        console.log("wrongbutton");       
                        _this.shake.shake(10,_this.group1);
                    _this.shake.shake(10,_this.group2);
                    _this.option2.frame=0;
                    _this.option1.frame=0;
              },this);
         _this.option2=_this.add.sprite(500,this.world.centerY+70,'nsf4_5_opt');
         _this.option2.frame=0;
         _this.option2.inputEnabled=true;
         _this.label2=_this.add.sprite(550, this.world.centerY+95,'nsf4_5_big19');
         _this.label2.scale.setTo(1);
         _this.option2.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
                    _this.clickSound.play();
                     _this.option1.frame=0;
                     _this.option2.frame=1;
             if(_this.line1.frame==9)
                  {
                    _this.correctAns();   
                  }
              else{
                   _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton");       
                _this.shake.shake(10,_this.group1);
                _this.option2.frame=0;
                _this.option1.frame=0;
              } 
              },this);
         _this.group1.add(_this.line1);
         _this.group1.add(_this.graphics1);

         _this.group1.add(_this.t9);
         _this.group1.add(_this.t4);
         _this.group2.add(_this.option1);
         _this.group2.add(_this.option2);
         _this.group2.add(_this.label1);
         _this.group2.add(_this.label2);
    },
 /******************sixthquestionwheel***************************************/
     gotosixthQuestion:function(){
         
        _this.Question = 6;
//         _this.no1++;
         console.log("five");
        _this.group1=_this.add.group();
         _this.line1=_this.add.sprite(180, this.world.centerY-70,'nsf4_5_line9');
         _this.line1.frame=1;
         _this.line1.inputEnabled=true;
//         _this.t1=_this.add.sprite(450, this.world.centerY-120,'nsf4_5_t1');
         _this.t9=_this.add.sprite(445, this.world.centerY-120,'nsf4_5_t1');
         _this.t4=_this.add.sprite(490, this.world.centerY-120,'nsf4_5_t3');
          _this.graphics1 = this.add.graphics(157,this.world.centerY-85);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.7);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
          _this.graphics1.inputEnabled=true;
        _this.graphics1.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics1.input.allowVerticalDrag = false;
            _this.graphics1.events.onDragUpdate.add(function(target){
                 console.log(target.x);
            if(target.x>=660)
            {    
                target.x = 655;
            }
            else if(target.x<154)
            {
                target.x = 157; 
                _this.line1.frame=1;
            }
                if(target.x>190&&target.x<250)
                    {
                       _this.line1.frame=2; 
                    }
                if(target.x>250&&target.x<300)
                    {
                       _this.line1.frame=3; 
                    }
                if(target.x>300&&target.x<370)
                    {
                       _this.line1.frame=4; 
                    }
                if(target.x>375&&target.x<435)
                    {
                       _this.line1.frame=5;
                    }
                if(target.x>435&&target.x<495)
                    {
                       _this.line1.frame=6; 
                    }
                if(target.x>495&&target.x<550)
                    {
                       _this.line1.frame=7; 
                    }
                if(target.x>555&&target.x<615)
                    {
                       _this.line1.frame=8; 
                    }
                if(target.x>615&&target.x<650)
                    {
                       _this.line1.frame=9; 
                    }
                if(target.x>650&&target.x<680)
                    {
                       _this.line1.frame=10; 
                    }
                if(_this.line1.frame==2)
             {
               target.x=210;  
             }
                else if(_this.line1.frame==1)
                    {
                     target.x=157;   
                    }
                else if(_this.line1.frame==3)
                    {
                     target.x=270;   
                    }
                else if(_this.line1.frame==4)
                    {
                     target.x=330;   
                    }
                else if(_this.line1.frame==5)
                    {
                     target.x=395;   
                    }
                else if(_this.line1.frame==6)
                    {
                     target.x=450;   
                    }
                else if(_this.line1.frame==7)
                    {
                     target.x=510;   
                    }
                else if(_this.line1.frame==8)
                    {
                     target.x=570;   
                    }
                else if(_this.line1.frame==9)
                    {
                     target.x=630;   
                    }
                else if(_this.line1.frame==10)
                    {
                     target.x=660;   
                    }
                
            },this);
        },this);
         _this.group2=_this.add.group();
         _this.option1=_this.add.sprite(300,this.world.centerY+70,'nsf4_5_opt');
         _this.option1.frame=0;
         _this.option1.inputEnabled=true;
         _this.label1=_this.add.sprite(350, this.world.centerY+95,'nsf4_5_big21');
       _this.label1.scale.setTo(1);
          _this.option1.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
         _this.clickSound.play();
             _this.option1.frame=1;
             _this.option2.frame=0;
               if(_this.line1.frame==6)
                  {
                    _this.correctAns();   
                  }
              else{
                   _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton");       
                _this.shake.shake(10,_this.group1);
                _this.option2.frame=0;
                _this.option1.frame=0;
              }
              },this);
         _this.option2=_this.add.sprite(500,this.world.centerY+70,'nsf4_5_opt');
         _this.option2.frame=0;
         _this.option2.inputEnabled=true;
         _this.label2=_this.add.sprite(550, this.world.centerY+95,'nsf4_5_big20');
         _this.label2.scale.setTo(1);
         _this.option2.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
                    _this.clickSound.play();
                     _this.option1.frame=0;
                     _this.option2.frame=1;
             _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                        _this.flag;
                        console.log("wrongbutton");       
                        _this.shake.shake(10,_this.group1);
                    _this.shake.shake(10,_this.group2);
                    _this.option2.frame=0;
                    _this.option1.frame=0;
              },this);
         _this.group1.add(_this.line1);
         _this.group1.add(_this.graphics1);
         _this.group1.add(_this.t9);
         _this.group1.add(_this.t4);
         _this.group2.add(_this.option1);
         _this.group2.add(_this.option2);
         _this.group2.add(_this.label1);
         _this.group2.add(_this.label2);
    },
    
    
    
    /******************seventhquestionwheel***************************************/
     gotoseventhQuestion:function(){
         
        _this.Question = 7;
//         _this.no1++;
         console.log("five");
        _this.group1=_this.add.group();
         _this.line1=_this.add.sprite(180, this.world.centerY-70,'nsf4_5_line9');
         _this.line1.frame=1;
         _this.line1.inputEnabled=true;
//         _this.t1=_this.add.sprite(450, this.world.centerY-120,'nsf4_5_t1');
//         _this.t9=_this.add.sprite(650, this.world.centerY-120,'nsf4_5_t6');
         _this.t4=_this.add.sprite(600, this.world.centerY-120,'nsf4_5_t4');
          _this.graphics1 = this.add.graphics(157,this.world.centerY-85);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.7);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
          _this.graphics1.inputEnabled=true;
        _this.graphics1.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics1.input.allowVerticalDrag = false;
            _this.graphics1.events.onDragUpdate.add(function(target){
                 console.log(target.x);
            if(target.x>=660)
            {    
                target.x = 655;
            }
            else if(target.x<154)
            {
                target.x = 157; 
                _this.line1.frame=1;
            }
                if(target.x>190&&target.x<250)
                    {
                       _this.line1.frame=2; 
                    }
                if(target.x>250&&target.x<300)
                    {
                       _this.line1.frame=3; 
                    }
                if(target.x>300&&target.x<370)
                    {
                       _this.line1.frame=4; 
                    }
                if(target.x>375&&target.x<435)
                    {
                       _this.line1.frame=5;
                    }
                if(target.x>435&&target.x<495)
                    {
                       _this.line1.frame=6; 
                    }
                if(target.x>495&&target.x<550)
                    {
                       _this.line1.frame=7; 
                    }
                if(target.x>555&&target.x<615)
                    {
                       _this.line1.frame=8; 
                    }
                if(target.x>615&&target.x<650)
                    {
                       _this.line1.frame=9; 
                    }
                if(target.x>650&&target.x<680)
                    {
                       _this.line1.frame=10; 
                    }
                if(_this.line1.frame==2)
             {
               target.x=210;  
             }
                else if(_this.line1.frame==1)
                    {
                     target.x=157;   
                    }
                else if(_this.line1.frame==3)
                    {
                     target.x=270;   
                    }
                else if(_this.line1.frame==4)
                    {
                     target.x=330;   
                    }
                else if(_this.line1.frame==5)
                    {
                     target.x=395;   
                    }
                else if(_this.line1.frame==6)
                    {
                     target.x=450;   
                    }
                else if(_this.line1.frame==7)
                    {
                     target.x=510;   
                    }
                else if(_this.line1.frame==8)
                    {
                     target.x=570;   
                    }
                else if(_this.line1.frame==9)
                    {
                     target.x=630;   
                    }
                else if(_this.line1.frame==10)
                    {
                     target.x=660;   
                    }
                
            },this);
        },this);
         
         _this.group2=_this.add.group();
         _this.option1=_this.add.sprite(300,this.world.centerY+70,'nsf4_5_opt');
         _this.option1.frame=0;
         _this.option1.inputEnabled=true;
         _this.label1=_this.add.sprite(345, this.world.centerY+95,'nsf4_5_big2');
       _this.label1.scale.setTo(1);
          _this.option1.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
         _this.clickSound.play();
             _this.option1.frame=1;
             _this.option2.frame=0;
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                        _this.flag;
                        console.log("wrongbutton");       
                        _this.shake.shake(10,_this.group1);
                    _this.shake.shake(10,_this.group2);
                    _this.option2.frame=0;
                    _this.option1.frame=0;
              },this);
         _this.option2=_this.add.sprite(500,this.world.centerY+70,'nsf4_5_opt');
         _this.option2.frame=0;
         _this.option2.inputEnabled=true;
         _this.label2=_this.add.sprite(550, this.world.centerY+95,'nsf4_5_big1');
         _this.label2.scale.setTo(1);
         _this.option2.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
                    _this.clickSound.play();
                     _this.option1.frame=0;
                     _this.option2.frame=1;
             if(_this.line1.frame==8)
                  {
                    _this.correctAns();   
                  }
              else{
                   _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton");       
                _this.shake.shake(10,_this.group1);
                _this.option2.frame=0;
                _this.option1.frame=0;
              }
              },this);
         _this.group1.add(_this.line1);
         _this.group1.add(_this.graphics1);

         //_this.group1.add(_this.t9);
         _this.group1.add(_this.t4);
         _this.group2.add(_this.option1);
         _this.group2.add(_this.option2);
         _this.group2.add(_this.label1);
         _this.group2.add(_this.label2);
    },
    /******************eighthquestionwheel***************************************/
     gotoeighthQuestion:function(){
         
        _this.Question = 8;
//         _this.no1++;
         console.log("five");
        _this.group1=_this.add.group();
         _this.line1=_this.add.sprite(180, this.world.centerY-70,'nsf4_5_line8');
         _this.line1.frame=1;
         _this.line1.inputEnabled=true;
//         _this.t1=_this.add.sprite(450, this.world.centerY-120,'nsf4_5_t1');
         _this.t9=_this.add.sprite(460, this.world.centerY-120,'nsf4_5_t3');
        // _this.t4=_this.add.sprite(600, this.world.centerY-120,'nsf4_5_t4');
          _this.graphics1 = this.add.graphics(157,this.world.centerY-85);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.7);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
          _this.graphics1.inputEnabled=true;
        _this.graphics1.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics1.input.allowVerticalDrag = false;
            _this.graphics1.events.onDragUpdate.add(function(target){
                 console.log(target.x);
            if(target.x>=660)
            {    
                target.x = 655;
            }
            else if(target.x<154)
            {
                target.x = 157;
                _this.line1.frame=1;
            }
                if(target.x>200&&target.x<260)
                    {
                       _this.line1.frame=2; 
                    }
                if(target.x>260&&target.x<290)
                    {
                       _this.line1.frame=3; 
                    }
                if(target.x>320&&target.x<360)
                    {
                       _this.line1.frame=4; 
                    }
                if(target.x>390&&target.x<420)
                    {
                       _this.line1.frame=5;
                    }
                if(target.x>450&&target.x<490)
                    {
                       _this.line1.frame=6; 
                    }
                if(target.x>520&&target.x<550)
                    {
                       _this.line1.frame=7; 
                    }
                if(target.x>580&&target.x<610)
                    {
                       _this.line1.frame=8; 
                    }
                if(target.x>615&&target.x<635)
                    {
                       _this.line1.frame=9; 
                    }
                 if(_this.line1.frame==2)
                 {
                   target.x=220;  
                 }
                else if(_this.line1.frame==1)
                    {
                     target.x=157;   
                    }
                else if(_this.line1.frame==3)
                    {
                     target.x=290;   
                    }
                else if(_this.line1.frame==4)
                    {
                     target.x=360;   
                    }
                else if(_this.line1.frame==5)
                    {
                     target.x=420;   
                    }
                else if(_this.line1.frame==6)
                    {
                     target.x=490;   
                    }
                else if(_this.line1.frame==7)
                    {
                     target.x=555;   
                    }
                else if(_this.line1.frame==8)
                    {
                     target.x=615;   
                    }
                else if(_this.line1.frame==9)
                    {
                     target.x=660;   
                    }
            },this);
               
        },this);
         _this.group2=_this.add.group();
         _this.option1=_this.add.sprite(300,this.world.centerY+70,'nsf4_5_opt');
         _this.option1.frame=0;
         _this.option1.inputEnabled=true;
         _this.label1=_this.add.sprite(345, this.world.centerY+95,'nsf4_5_big4');
       _this.label1.scale.setTo(1);
          _this.option1.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
         _this.clickSound.play();
             _this.option1.frame=1;
             _this.option2.frame=0;
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                        _this.flag;
                        console.log("wrongbutton");       
                        _this.shake.shake(10,_this.group1);
                    _this.shake.shake(10,_this.group2);
                    _this.option2.frame=0;
                    _this.option1.frame=0;
              },this);
         _this.option2=_this.add.sprite(500,this.world.centerY+70,'nsf4_5_opt');
         _this.option2.frame=0;
         _this.option2.inputEnabled=true;
         _this.label2=_this.add.sprite(550, this.world.centerY+95,'nsf4_5_big3');
         _this.label2.scale.setTo(1);
         _this.option2.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
                    _this.clickSound.play();
                     _this.option1.frame=0;
                     _this.option2.frame=1;
             if(_this.line1.frame==5)
                  {
                    _this.correctAns();   
                  }
              else{
                   _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton");       
                _this.shake.shake(10,_this.group1);
                _this.option2.frame=0;
                _this.option1.frame=0;
              }
              },this);
         _this.group1.add(_this.line1);
         _this.group1.add(_this.graphics1);
//         _this.group1.add(_this.t1);
         _this.group1.add(_this.t9);
//         _this.group1.add(_this.t4);
         _this.group2.add(_this.option1);
         _this.group2.add(_this.option2);
         _this.group2.add(_this.label1);
         _this.group2.add(_this.label2);
    },
    /******************ninthquestionwheel***************************************/
      gotoninthQuestion:function(){
         
        _this.Question = 9;
//         _this.no1++;
         console.log("nine");
        _this.group1=_this.add.group();
         _this.line1=_this.add.sprite(180, this.world.centerY-70,'nsf4_5_line9');
         _this.line1.frame=1;
         _this.line1.inputEnabled=true;
//         _this.t1=_this.add.sprite(450, this.world.centerY-120,'nsf4_5_t1');
         _this.t9=_this.add.sprite(370, this.world.centerY-120,'nsf4_5_t2');
         //_this.t4=_this.add.sprite(490, this.world.centerY-120,'nsf4_5_t3');
            _this.graphics1 = this.add.graphics(157,this.world.centerY-85);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.7);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
          _this.graphics1.inputEnabled=true;
        _this.graphics1.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics1.input.allowVerticalDrag = false;
            _this.graphics1.events.onDragUpdate.add(function(target){
                 console.log(target.x);
            if(target.x>=660)
            {    
                target.x = 655;
            }
            else if(target.x<154)
            {
                target.x = 157; 
                _this.line1.frame=1;
            }
                if(target.x>190&&target.x<210)
                    {
                       _this.line1.frame=2; 
                    }
                if(target.x>250&&target.x<270)
                    {
                       _this.line1.frame=3; 
                    }
                if(target.x>300&&target.x<330)
                    {
                       _this.line1.frame=4; 
                    }
                if(target.x>375&&target.x<395)
                    {
                       _this.line1.frame=5;
                    }
                if(target.x>435&&target.x<455)
                    {
                       _this.line1.frame=6; 
                    }
                if(target.x>495&&target.x<520)
                    {
                       _this.line1.frame=7; 
                    }
                if(target.x>555&&target.x<575)
                    {
                       _this.line1.frame=8; 
                    }
                if(target.x>615&&target.x<635)
                    {
                       _this.line1.frame=9; 
                    }
                if(target.x>650&&target.x<680)
                    {
                       _this.line1.frame=10; 
                    }
                if(_this.line1.frame==2)
             {
               target.x=210;  
             }
                else if(_this.line1.frame==1)
                    {
                     target.x=157;   
                    }
                else if(_this.line1.frame==3)
                    {
                     target.x=270;   
                    }
                else if(_this.line1.frame==4)
                    {
                     target.x=330;   
                    }
                else if(_this.line1.frame==5)
                    {
                     target.x=395;   
                    }
                else if(_this.line1.frame==6)
                    {
                     target.x=450;   
                    }
                else if(_this.line1.frame==7)
                    {
                     target.x=510;   
                    }
                else if(_this.line1.frame==8)
                    {
                     target.x=570;   
                    }
                else if(_this.line1.frame==9)
                    {
                     target.x=630;   
                    }
                else if(_this.line1.frame==10)
                    {
                     target.x=660;   
                    }
                
            },this);
        },this);
          
         _this.group2=_this.add.group();
         _this.option1=_this.add.sprite(300,this.world.centerY+70,'nsf4_5_opt');
         _this.option1.frame=0;
         _this.option1.inputEnabled=true;
         _this.label1=_this.add.sprite(345, this.world.centerY+95,'nsf4_5_big5');
       _this.label1.scale.setTo(1);
          _this.option1.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
         _this.clickSound.play();
             _this.option1.frame=1;
             _this.option2.frame=0;
              if(_this.line1.frame==4)
                  {
                    _this.correctAns();   
                  }
              else{
                   _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton");       
                _this.shake.shake(10,_this.group1);
                _this.option2.frame=0;
                _this.option1.frame=0;
              }
              },this);
         _this.option2=_this.add.sprite(500,this.world.centerY+70,'nsf4_5_opt');
         _this.option2.frame=0;
         _this.option2.inputEnabled=true;
         _this.label2=_this.add.sprite(550, this.world.centerY+95,'nsf4_5_big6');
         _this.label2.scale.setTo(1);
         _this.option2.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
                    _this.clickSound.play();
                     _this.option1.frame=0;
                     _this.option2.frame=1;
                            _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                        _this.flag;
                        console.log("wrongbutton");       
                        _this.shake.shake(10,_this.group1);
                    _this.shake.shake(10,_this.group2);
                    _this.option2.frame=0;
                    _this.option1.frame=0;
             
              },this);
         _this.group1.add(_this.line1);
         _this.group1.add(_this.graphics1);
         _this.group1.add(_this.t9);
        // _this.group1.add(_this.t4);
         _this.group2.add(_this.option1);
         _this.group2.add(_this.option2);
         _this.group2.add(_this.label1);
         _this.group2.add(_this.label2);
    },
     /******************tenthQuestionnwheel***************************************/
      gototenthQuestion:function(){
         
        _this.Question =10;
//         _this.no1++;
         console.log("ten");
        _this.group1=_this.add.group();
         _this.line1=_this.add.sprite(180, this.world.centerY-70,'nsf4_5_line13');
         _this.line1.frame=1;
         _this.line1.inputEnabled=true;
//         _this.t1=_this.add.sprite(450, this.world.centerY-120,'nsf4_5_t1');
         _this.t9=_this.add.sprite(460, this.world.centerY-120,'nsf4_5_t1');
         //_this.t4=_this.add.sprite(380, this.world.centerY-120,'nsf4_5_t2');
          _this.graphics1 = this.add.graphics(157,this.world.centerY-85);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.7);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
          _this.graphics1.inputEnabled=true;
        _this.graphics1.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics1.input.allowVerticalDrag = false;
            _this.graphics1.events.onDragUpdate.add(function(target){
                 console.log(target.x);
            if(target.x>=660)
            {    
                target.x = 655;
            }
            else if(target.x<154)
            {
                target.x = 157; 
                _this.line1.frame=1;
            }
                if(target.x>170&&target.x<200)
                    {
                       _this.line1.frame=2; 
                    }
                if(target.x>210&&target.x<230)
                    {
                       _this.line1.frame=3; 
                    }
                if(target.x>240&&target.x<260)
                    {
                       _this.line1.frame=4; 
                    }
                if(target.x>270&&target.x<300)
                    {
                       _this.line1.frame=5;
                    }
                if(target.x>310&&target.x<330)
                    {
                       _this.line1.frame=6; 
                    }
                if(target.x>340&&target.x<370)
                    {
                       _this.line1.frame=7; 
                    }
                if(target.x>380&&target.x<400)
                    {
                       _this.line1.frame=8; 
                    }
                if(target.x>410&&target.x<440)
                    {
                       _this.line1.frame=9; 
                    }
                if(target.x>450&&target.x<480)
                    {
                       _this.line1.frame=10; 
                    }
                if(target.x>490&&target.x<510)
                    {
                       _this.line1.frame=11; 
                    }
                if(target.x>520&&target.x<540)
                    {
                       _this.line1.frame=12; 
                    }
                if(target.x>550&&target.x<580)
                    {
                       _this.line1.frame=13; 
                    }
                if(target.x>590&&target.x<620)
                    {
                       _this.line1.frame=14; 
                    }
                if(target.x>630&&target.x<650)
                    {
                       _this.line1.frame=15; 
                    }
                if(target.x>655&&target.x<670)
                    {
                       _this.line1.frame=16; 
                    }
                if(_this.line1.frame==2)
             {
               target.x=190;  
             }
                else if(_this.line1.frame==1)
                    {
                     target.x=157;   
                    }
                else if(_this.line1.frame==3)
                    {
                     target.x=230;   
                    }
                else if(_this.line1.frame==4)
                    {
                     target.x=260;   
                    }
                else if(_this.line1.frame==5)
                    {
                     target.x=300;   
                    }
                else if(_this.line1.frame==6)
                    {
                     target.x=330;   
                    }
                else if(_this.line1.frame==7)
                    {
                     target.x=370;   
                    }
                else if(_this.line1.frame==8)
                    {
                     target.x=400;   
                    }
                else if(_this.line1.frame==9)
                    {
                     target.x=435;   
                    }
                else if(_this.line1.frame==10)
                    {
                     target.x=475;   
                    }
                else if(_this.line1.frame==11)
                    {
                     target.x=510;   
                    }
                else if(_this.line1.frame==12)
                    {
                     target.x=540;   
                    }
                else if(_this.line1.frame==13)
                    {
                     target.x=580;   
                    }
                else if(_this.line1.frame==14)
                    {
                     target.x=615;   
                    }
                else if(_this.line1.frame==15)
                    {
                     target.x=650;   
                    }
                else if(_this.line1.frame==16)
                    {
                     target.x=660;   
                    }
            },this);
        },this);
         _this.group2=_this.add.group();
         _this.option1=_this.add.sprite(300,this.world.centerY+70,'nsf4_5_opt');
         _this.option1.frame=0;
         _this.option1.inputEnabled=true;
         _this.label1=_this.add.sprite(345, this.world.centerY+95,'nsf4_5_big7');
       _this.label1.scale.setTo(1);
          _this.option1.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
         _this.clickSound.play();
             _this.option1.frame=1;
             _this.option2.frame=0;
              if(_this.line1.frame==9)
                  {
                    _this.correctAns();   
                  }
              else{
                   _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton");       
                _this.shake.shake(10,_this.group1);
                _this.option2.frame=0;
                _this.option1.frame=0;
              }
              },this);
         _this.option2=_this.add.sprite(500,this.world.centerY+70,'nsf4_5_opt');
         _this.option2.frame=0;
         _this.option2.inputEnabled=true;
         _this.label2=_this.add.sprite(545, this.world.centerY+95,'nsf4_5_big8');
         _this.label2.scale.setTo(1);
         _this.option2.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
                    _this.clickSound.play();
                     _this.option1.frame=0;
                     _this.option2.frame=1;
                            _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                        _this.flag;
                        console.log("wrongbutton");       
                        _this.shake.shake(10,_this.group1);
                    _this.shake.shake(10,_this.group2);
                    _this.option2.frame=0;
                    _this.option1.frame=0;
             
              },this);
         _this.group1.add(_this.line1);
         _this.group1.add(_this.graphics1);
//         _this.group1.add(_this.t1);
         _this.group1.add(_this.t9);
         //_this.group1.add(_this.t4);
         _this.group2.add(_this.option1);
         _this.group2.add(_this.option2);
         _this.group2.add(_this.label1);
         _this.group2.add(_this.label2);
    },
    /******************elevenQuestionnwheel***************************************/
      gotoeleventhQuestion:function(){
         
        _this.Question =11;
        // _this.no1++;
         console.log("ten");
        _this.group1=_this.add.group();
         _this.line1=_this.add.sprite(180, this.world.centerY-70,'nsf4_5_line13');
         _this.line1.frame=1;
         _this.line1.inputEnabled=true;
//         _this.t1=_this.add.sprite(450, this.world.centerY-120,'nsf4_5_t1');
         _this.t9=_this.add.sprite(330, this.world.centerY-120,'nsf4_5_t5');
         //_this.t4=_this.add.sprite(220, this.world.centerY-120,'nsf4_5_t12');
          _this.graphics1 = this.add.graphics(157,this.world.centerY-85);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.7);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
          _this.graphics1.inputEnabled=true;
        _this.graphics1.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics1.input.allowVerticalDrag = false;
            _this.graphics1.events.onDragUpdate.add(function(target){
                 console.log(target.x);
            if(target.x>=660)
            {    
                target.x = 655;
            }
            else if(target.x<154)
            {
                target.x = 157; 
                _this.line1.frame=1;
            }
                if(target.x>170&&target.x<200)
                    {
                       _this.line1.frame=2; 
                    }
                if(target.x>210&&target.x<230)
                    {
                       _this.line1.frame=3; 
                    }
                if(target.x>240&&target.x<260)
                    {
                       _this.line1.frame=4; 
                    }
                if(target.x>270&&target.x<300)
                    {
                       _this.line1.frame=5;
                    }
                if(target.x>310&&target.x<330)
                    {
                       _this.line1.frame=6; 
                    }
                if(target.x>340&&target.x<370)
                    {
                       _this.line1.frame=7; 
                    }
                if(target.x>380&&target.x<400)
                    {
                       _this.line1.frame=8; 
                    }
                if(target.x>410&&target.x<440)
                    {
                       _this.line1.frame=9; 
                    }
                if(target.x>450&&target.x<480)
                    {
                       _this.line1.frame=10; 
                    }
                if(target.x>490&&target.x<510)
                    {
                       _this.line1.frame=11; 
                    }
                if(target.x>520&&target.x<540)
                    {
                       _this.line1.frame=12; 
                    }
                if(target.x>550&&target.x<580)
                    {
                       _this.line1.frame=13; 
                    }
                if(target.x>590&&target.x<620)
                    {
                       _this.line1.frame=14; 
                    }
                if(target.x>630&&target.x<650)
                    {
                       _this.line1.frame=15; 
                    }
                if(target.x>655&&target.x<670)
                    {
                       _this.line1.frame=16; 
                    }
                if(_this.line1.frame==2)
             {
               target.x=190;  
             }
                else if(_this.line1.frame==3)
                    {
                     target.x=230;   
                    }
                else if(_this.line1.frame==4)
                    {
                     target.x=260;   
                    }
                else if(_this.line1.frame==5)
                    {
                     target.x=300;   
                    }
                else if(_this.line1.frame==6)
                    {
                     target.x=330;   
                    }
                else if(_this.line1.frame==7)
                    {
                     target.x=370;   
                    }
                else if(_this.line1.frame==8)
                    {
                     target.x=400;   
                    }
                else if(_this.line1.frame==9)
                    {
                     target.x=435;   
                    }
                else if(_this.line1.frame==10)
                    {
                     target.x=475;   
                    }
                else if(_this.line1.frame==11)
                    {
                     target.x=510;   
                    }
                else if(_this.line1.frame==12)
                    {
                     target.x=540;   
                    }
                else if(_this.line1.frame==13)
                    {
                     target.x=580;   
                    }
                else if(_this.line1.frame==14)
                    {
                     target.x=615;   
                    }
                else if(_this.line1.frame==15)
                    {
                     target.x=650;   
                    }
                else if(_this.line1.frame==1)
                    {
                     target.x=157;   
                    }
                else if(_this.line1.frame==16)
                    {
                     target.x=660;   
                    }
            },this);
        },this);
         _this.group2=_this.add.group();
         _this.option1=_this.add.sprite(300,this.world.centerY+70,'nsf4_5_opt');
         _this.option1.frame=0;
         _this.option1.inputEnabled=true;
         _this.label1=_this.add.sprite(345, this.world.centerY+95,'nsf4_5_big9');
       _this.label1.scale.setTo(1);
          _this.option1.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
         _this.clickSound.play();
             _this.option1.frame=1;
             _this.option2.frame=0;
              if(_this.line1.frame==5)
                  {
                    _this.correctAns();   
                  }
              else{
                   _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton");       
                _this.shake.shake(10,_this.group1);
                _this.option2.frame=0;
                _this.option1.frame=0;
              }
              },this);
         _this.option2=_this.add.sprite(500,this.world.centerY+70,'nsf4_5_opt');
         _this.option2.frame=0;
         _this.option2.inputEnabled=true;
         _this.label2=_this.add.sprite(545, this.world.centerY+95,'nsf4_5_big10');
         _this.label2.scale.setTo(1);
         _this.option2.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
                    _this.clickSound.play();
                     _this.option1.frame=0;
                     _this.option2.frame=1;
                            _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                        _this.flag;
                        console.log("wrongbutton");       
                        _this.shake.shake(10,_this.group1);
                    _this.shake.shake(10,_this.group2);
                    _this.option2.frame=0;
                    _this.option1.frame=0;
             
              },this);
         _this.group1.add(_this.line1);
         _this.group1.add(_this.graphics1);
         _this.group1.add(_this.t9);
         //_this.group1.add(_this.t4);
         _this.group2.add(_this.option1);
         _this.group2.add(_this.option2);
         _this.group2.add(_this.label1);
         _this.group2.add(_this.label2);
    },
    /******************twelveQuestionnwheel***************************************/
      gototwelethQuestion:function(){
        _this.Question =12;
//         _this.no1++;
         console.log("twelve");
        _this.group1=_this.add.group();
         _this.line1=_this.add.sprite(180, this.world.centerY-70,'nsf4_5_line12');
         _this.line1.frame=1;
         _this.line1.inputEnabled=true;
//         _this.t1=_this.add.sprite(450, this.world.centerY-120,'nsf4_5_t1');
        // _this.t9=_this.add.sprite(290, this.world.centerY-120,'nsf4_5_t2');
         _this.t4=_this.add.sprite(235, this.world.centerY-120,'nsf4_5_t12');
           _this.graphics1 = this.add.graphics(157,this.world.centerY-85);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.7);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
          _this.graphics1.inputEnabled=true;
        _this.graphics1.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics1.input.allowVerticalDrag = false;
            _this.graphics1.events.onDragUpdate.add(function(target){
                 console.log(target.x);
            if(target.x>=660)
            {    
                target.x = 655;
            }
            else if(target.x<154)
            {
                target.x = 157; 
                _this.line1.frame=1;
            }
                if(target.x>190&&target.x<210)
                    {
                       _this.line1.frame=2; 
                    }
                if(target.x>220&&target.x<240)
                    {
                       _this.line1.frame=3; 
                    }
                if(target.x>250&&target.x<290)
                    {
                       _this.line1.frame=4; 
                    }
                if(target.x>300&&target.x<330)
                    {
                       _this.line1.frame=5;
                    }
                if(target.x>340&&target.x<380)
                    {
                       _this.line1.frame=6; 
                    }
                if(target.x>390&&target.x<420)
                    {
                       _this.line1.frame=7; 
                    }
                if(target.x>430&&target.x<470)
                    {
                       _this.line1.frame=8; 
                    }
                if(target.x>480&&target.x<510)
                    {
                       _this.line1.frame=9; 
                    }
                if(target.x>520&&target.x<560)
                    {
                       _this.line1.frame=10; 
                    }
                if(target.x>570&&target.x<600)
                    {
                       _this.line1.frame=11; 
                    }
                if(target.x>610&&target.x<640)
                    {
                       _this.line1.frame=12; 
                    }
                if(target.x>650&&target.x<670)
                    {
                       _this.line1.frame=13; 
                    }
                if(_this.line1.frame==2)
             {
               target.x=200;  
             }
                else if(_this.line1.frame==3)
                    {
                     target.x=240;   
                    }
                else if(_this.line1.frame==4)
                    {
                     target.x=285;   
                    }
                else if(_this.line1.frame==5)
                    {
                     target.x=330;   
                    }
                else if(_this.line1.frame==6)
                    {
                     target.x=375;   
                    }
                else if(_this.line1.frame==7)
                    {
                     target.x=420;   
                    }
                else if(_this.line1.frame==8)
                    {
                     target.x=470;   
                    }
                else if(_this.line1.frame==9)
                    {
                     target.x=510;   
                    }
                else if(_this.line1.frame==10)
                    {
                     target.x=555;   
                    }
                else if(_this.line1.frame==11)
                    {
                     target.x=600;   
                    }
                else if(_this.line1.frame==1)
                    {
                     target.x=157;   
                    }
                else if(_this.line1.frame==12)
                    {
                     target.x=640;   
                    }
                else if(_this.line1.frame==13)
                    {
                     target.x=660;   
                    }
                
            },this);
        },this);
         _this.group2=_this.add.group();
         _this.option1=_this.add.sprite(300,this.world.centerY+70,'nsf4_5_opt');
         _this.option1.frame=0;
         _this.option1.inputEnabled=true;
         _this.label1=_this.add.sprite(345, this.world.centerY+95,'nsf4_5_big23');
       _this.label1.scale.setTo(1);
          _this.option1.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
         _this.clickSound.play();
             _this.option1.frame=1;
             _this.option2.frame=0;
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                        _this.flag;
                        console.log("wrongbutton");       
                        _this.shake.shake(10,_this.group1);
                    _this.shake.shake(10,_this.group2);
                    _this.option2.frame=0;
                    _this.option1.frame=0;
              },this);
         _this.option2=_this.add.sprite(500,this.world.centerY+70,'nsf4_5_opt');
         _this.option2.frame=0;
         _this.option2.inputEnabled=true;
         _this.label2=_this.add.sprite(545, this.world.centerY+95,'nsf4_5_big22');
         _this.label2.scale.setTo(1);
         _this.option2.events.onInputDown.add(function(target)
              {
                _this.noofAttempts++;
                    _this.clickSound.play();
                     _this.option1.frame=0;
                     _this.option2.frame=1;
             if(_this.line1.frame==2)
                  {
                    _this.correctAns();   
                  }
              else{
                   _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton");       
                _this.shake.shake(10,_this.group1);
                _this.option2.frame=0;
                _this.option1.frame=0;
              }
              },this);
         _this.group1.add(_this.line1);
         _this.group1.add(_this.graphics1);
         //_this.group1.add(_this.t9);
         _this.group1.add(_this.t4);
         _this.group2.add(_this.option1);
         _this.group2.add(_this.option2);
         _this.group2.add(_this.label1);
         _this.group2.add(_this.label2);
    },
    addListeners:function()
	{
		_this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.checkAns,_this);

	},
    
    checkAns:function(target)
	{ 
        target.input.enableDrag(true);
       
    },
    
    
    shuffle: function(array) {
      _this.currentIndex = array.length, _this.temporaryValue, _this.randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== _this.currentIndex) {
            
        // Pick a remaining element...
        _this.randomIndex = Math.floor(Math.random() * _this.currentIndex);
        _this.currentIndex -= 1;

        // And swap it with the current element.
        _this.temporaryValue = array[_this.currentIndex];
        array[_this.currentIndex] = array[_this.randomIndex];
        array[_this.randomIndex] = _this.temporaryValue;
  }

  return array;
},
    
  
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = this.add.group();
		
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
    
	correctAns:function()
	{
		console.log("correct");
        _this.no1++;
//        _this.speaker.inputEnabled=false;
		_this.celebration = true;
     	_this.cmusic = this.add.audio('celebr');
		_this.cmusic.play();
        this.time.events.add(500, this.removeCelebration, this);
        //target.tint = 0xA9A9A9;
         _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
		console.log(_this.starAnim);
		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();
        _this.option1.events.onInputDown.removeAll();
        _this.option2.events.onInputDown.removeAll();
       // _this.group1.events.onInputDown.removeAll();

       if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }
            _this.questionid = 1;
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
	},


    /*wrongAns:function()
	{
        console.log("wrong");
        	

		//scoretext.setText(selctedLang.score+' : '+score);
        console.log(_this.target);
        //target.tint = 0xA9A9A9;
        
		_this.shake.shake(10, _this.target);
		_this.wmusic = this.add.audio('waudio');
		_this.wmusic.play();
        
        //wmusic1 = this.add.audio('aiyoh');
		//wmusic1.play();
        	//this.disableListeners();
        //target.events.onInputDown.removeAll();
	},*/
    
    	removeCelebration:function()
	{
        
        console.log("remove everythg");
		console.log("removeCeleb");
		_this.celebration = false;
		//celebAnim.destroy();
		//rightCount--;
		console.log("no"+_this.no1);
		//this.input.enabled = true;
        _this.count1++;
		//if(rightCount<=0)
		//{		
            console.log("vamitha");
            
			if(_this.no1<6)
			{
                 _this.timer1.stop();
                console.log("addq");
                 this.addQuestion(_this.count1);
			}
			else
			{
                _this.timer1.stop();
                 this.time.events.add(2000, function(){
				console.log("gameEnd");
                //this.stopAllVoice();
				this.state.start('nsf4_5Score');
                 },this);
			}

	},
    
    
	changeQuestion:function()
	{
       
            _this.group1.destroy();
            _this.group2.destroy();
    
		if(_this.no1<6)
		{
            _this.count++;
			this.getQuestion();
		}
		else
		{
			console.log("gameEnd");
				//this.input.enabled = false;
				// text = this.add.text(this.world.centerX, 450, '  Game Complete  ');

				// text.anchor.set(0.5);
				// text.align = 'center';

				// text.font = 'Arial Black';
				// text.fontSize = 70;
				// text.fontWeight = 'nsf4_5_bold';
				// text.fill = '#FFFFF';

				// text.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);
        
               //this.state.start('level2');
              //baudio.stop();
//            headingText2.destroy();
//            backbtn1.destroy();
//            speaker1.destroy();
//            starsGroup1.destroy();
//              
//            headingText2.visible=false;
//            backbtn1.visible=false;
//            speaker1.visible=false;
//            starsGroup1.visible=false;
		}
	},

    
    update:function(){

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
    getVoice:function(){
       
        _this.stopVoice();	
        _this.playQuestionSound = document.createElement('audio');
                    _this.src = document.createElement('source');
         console.log("voice"+_this.qArrays[_this.no1]);
        if(_this.no1<3)
        {
        switch(_this.qArrays[_this.no1])
        {
            case 1:
                
                   if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/English/nsf4.5b.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Hindi/nsf4.5b.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Kannada/nsf4.5b.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Gujrati/nsf4.5b.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Marathi/nsf4.5b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Telugu/nsf4.5b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Tamil/nsf4.5b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Urdu/nsf4.5b.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Odiya/nsf4.5b.mp3");  
                    }
                break;
            case 2:
                 if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/English/nsf4.5e.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Hindi/nsf4.5e.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Kannada/nsf4.5e.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Gujrati/nsf4.5e.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Marathi/nsf4.5e.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Telugu/nsf4.5e.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Tamil/nsf4.5e.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Urdu/nsf4.5e.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Odiya/nsf4.5e.mp3");
                        
                    }
                break;
            case 3:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/English/nsf4.5d.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Hindi/nsf4.5d.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Kannada/nsf4.5d.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Gujrati/nsf4.5d.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Marathi/nsf4.5d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Telugu/nsf4.5d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Tamil/nsf4.5d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Urdu/nsf4.5d.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Odiya/nsf4.5d.mp3");
                        
                    }
                break;
            case 4:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/English/nsf4.5c.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Hindi/nsf4.5c.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Kannada/nsf4.5c.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Gujrati/nsf4.5c.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Marathi/nsf4.5c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Telugu/nsf4.5c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Tamil/nsf4.5c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Urdu/nsf4.5c.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Odiya/nsf4.5c.mp3");
                        
                    }
                break;
            case 5:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/English/nsf4.5g.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Hindi/nsf4.5g.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Kannada/nsf4.5g.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Gujrati/nsf4.5g.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Marathi/nsf4.5g.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Telugu/nsf4.5g.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Tamil/nsf4.5g.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Urdu/nsf4.5g.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Odiya/nsf4.5g.mp3");  
                    }
                break;
            case 6:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/English/nsf4.5h.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Hindi/nsf4.5h.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Kannada/nsf4.5h.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Gujrati/nsf4.5h.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Marathi/nsf4.5h.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Telugu/nsf4.5h.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Tamil/nsf4.5h.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Urdu/nsf4.5h.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Odiya/nsf4.5h.mp3");  
                    }
                break;
            }
        }
        else 
            {
            switch(_this.qArrays1[_this.no1])
                {
             case 7:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/English/nsf4.5d.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Hindi/nsf4.5d.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Kannada/nsf4.5d.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Gujrati/nsf4.5d.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Marathi/nsf4.5d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Telugu/nsf4.5d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Tamil/nsf4.5d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Urdu/nsf4.5d.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Odiya/nsf4.5d.mp3");  
                    }
                break;
            case 8:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/English/nsf4.5e.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Hindi/nsf4.5e.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Kannada/nsf4.5e.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Gujrati/nsf4.5e.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Marathi/nsf4.5e.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Telugu/nsf4.5e.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Tamil/nsf4.5e.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Urdu/nsf4.5e.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Odiya/nsf4.5e.mp3");  
                    }
                break;
            case 9:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/English/nsf4.5b.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Hindi/nsf4.5b.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Kannada/nsf4.5b.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Gujrati/nsf4.5b.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Marathi/nsf4.5b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Telugu/nsf4.5b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Tamil/nsf4.5b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Urdu/nsf4.5b.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Odiya/nsf4.5b.mp3");  
                    }
                break;
            case 10:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/English/nsf4.5f.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Hindi/nsf4.5f.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Kannada/nsf4.5f.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Gujrati/nsf4.5f.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Marathi/nsf4.5f.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Telugu/nsf4.5f.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Tamil/nsf4.5f.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Urdu/nsf4.5f.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Odiya/nsf4.5f.mp3");  
                    }
                break;
            case 11:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/English/nsf4.5c.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Hindi/nsf4.5c.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Kannada/nsf4.5c.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Gujrati/nsf4.5c.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Marathi/nsf4.5c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Telugu/nsf4.5c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Tamil/nsf4.5c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Urdu/nsf4.5c.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Odiya/nsf4.5c.mp3");  
                    }
                break;
            case 12:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/English/nsf4.5a.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Hindi/nsf4.5a.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Kannada/nsf4.5a.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Gujrati/nsf4.5a.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Marathi/nsf4.5a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Telugu/nsf4.5a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Tamil/nsf4.5a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Urdu/nsf4.5a.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf4.5/Odiya/nsf4.5a.mp3");  
                    }
                break;
        }
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
  stopVoice:function()
	{		
		// _timer1.stop();
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
   /* disableallbuttons:function(){
        a1.events.onInputDown.removeAll();
        rightbtn.events.onInputDown.removeAll();
        wrongbtn.events.onInputDown.removeAll();
        opt1.events.onInputDown.removeAll();
        opt2.events.onInputDown.removeAll();
        opt3.events.onInputDown.removeAll();
       // numGroup.inputEnabled=false;
        //boxclick='';
    }*/
    shutdown:function()
    {
        _this.stopVoice();
    }
    
};