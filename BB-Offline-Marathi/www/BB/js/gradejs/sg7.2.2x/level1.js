Game.sg7_2_2xlevel1=function(){};
	
	
	

Game.sg7_2_2xlevel1.prototype={
    init:function(game)
	{
		_this = this;
       
		telInitializer.gameIdInit("SG7_2_2x",gradeSelected);

    //alert("here");
	},

  preload:function(game){
        if(!window.grade2SG4){

            window.grade2SG4 = true;

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

            this.load.atlas('SG3_1_1rightmark',window.baseUrl+'assets/gradeAssets/sg3.1.1/rightmark.png',window.baseUrl+'json/gradeJson/sg3.1.1/rightmark.json');
    

            this.load.image('sg7_2_2x_c1',window.baseUrl+'assets/gradeAssets/sg7.2.2x/1.png');
        this.load.image('sg7_2_2x_c3',window.baseUrl+'assets/gradeAssets/sg7.2.2x/3.png');
        this.load.image('sg7_2_2x_c6',window.baseUrl+'assets/gradeAssets/sg7.2.2x/6.png');
        this.load.image('sg7_2_2x_c7',window.baseUrl+'assets/gradeAssets/sg7.2.2x/5.png');
        this.load.image('sg7_2_2x_c8',window.baseUrl+'assets/gradeAssets/sg7.2.2x/10.png');
        
        this.load.image('sg7_2_2x_t1',window.baseUrl+'assets/gradeAssets/sg7.2.2x/7.png');
        this.load.image('sg7_2_2x_t2',window.baseUrl+'assets/gradeAssets/sg7.2.2x/8.png');
        this.load.image('sg7_2_2x_t3',window.baseUrl+'assets/gradeAssets/sg7.2.2x/9.png');
        
        this.load.image('sg7_2_2x_s1',window.baseUrl+'assets/gradeAssets/sg7.2.2x/13.png');
        this.load.image('sg7_2_2x_s2',window.baseUrl+'assets/gradeAssets/sg7.2.2x/14.png');
        this.load.image('sg7_2_2x_s3',window.baseUrl+'assets/gradeAssets/sg7.2.2x/20.png');
        
        this.load.image('sg7_2_2x_r2',window.baseUrl+'assets/gradeAssets/sg7.2.2x/25.png');
        this.load.image('sg7_2_2x_r3',window.baseUrl+'assets/gradeAssets/sg7.2.2x/26.png');
        this.load.image('sg7_2_2x_r6',window.baseUrl+'assets/gradeAssets/sg7.2.2x/29.png');
        this.load.image('sg7_2_2x_r7',window.baseUrl+'assets/gradeAssets/sg7.2.2x/30.png');
        this.load.image('sg7_2_2x_r8',window.baseUrl+'assets/gradeAssets/sg7.2.2x/32.png');
       
        this.load.atlas('sg7_2_2x_choice1',window.baseUrl+'assets/gradeAssets/sg7.2.2x/Op1.png',window.baseUrl+'json/gradeJson/sg7.2.2x/second/Op1.json');
        this.load.atlas('sg7_2_2x_choice2',window.baseUrl+'assets/gradeAssets/sg7.2.2x/Op2.png',window.baseUrl+'json/gradeJson/sg7.2.2x/second/Op2.json');
        this.load.atlas('sg7_2_2x_choice3',window.baseUrl+'assets/gradeAssets/sg7.2.2x/Op3.png',window.baseUrl+'json/gradeJson/sg7.2.2x/second/Op3.json');
        this.load.atlas('sg7_2_2x_choice4',window.baseUrl+'assets/gradeAssets/sg7.2.2x/Op4.png',window.baseUrl+'json/gradeJson/sg7.2.2x/second/Op4.json');
        this.load.atlas('sg7_2_2x_choice5',window.baseUrl+'assets/gradeAssets/sg7.2.2x/Op5.png',window.baseUrl+'json/gradeJson/sg7.2.2x/second/Op5.json');


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
_this.qArrays1=null;
_this.qArrays2=null;
_this.qArrays3=null;
_this.qArrays4=null;
_this.qArrays5=null;
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
        _this.count3=0;
        _this.count4=0;

        _this.noofAttempts=0;
       _this.sceneCount=0;
   _this.AnsTimerCount = 0;

        //baudio.play(); 
		//baudio.loopFull(0.6);
        _this.qArrays = new Array();
       _this.qArrays1 = new Array();
       _this.qArrays2 = new Array();
       _this.qArrays3 = new Array();
       _this.qArrays4 = new Array();
       _this.qArrays5 = new Array();
        _this.qArrays = [9,13,1];
       _this.qArrays1 = [10,2,14];
        _this.qArrays2= [11,15,3];
        _this.qArrays3= [4,12,16];
        _this.qArrays4= [7,8,10];
        _this.qArrays5= [5,6,3];
        
        _this.qArrays = this.shuffle(_this.qArrays);
        _this.qArrays1 = this.shuffle(_this.qArrays1);
        _this.qArrays2 = this.shuffle(_this.qArrays2);
        _this.qArrays3 = this.shuffle(_this.qArrays3);
        _this.qArrays4 = this.shuffle(_this.qArrays4);
        _this.qArrays5 = this.shuffle(_this.qArrays5);
       
       // counterText=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
       
        this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();

         _this.bg1 = this.add.sprite(0,0, 'commonBg2');
        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
    
    _this.TopBar.scale.setTo(1,1.1);

    _this.backbtn = this.add.sprite(-3,3,'newCommonBackBtnForAll');
    _this.backbtn.inputEnabled = true;
    _this.backbtn.events.onInputDown.add(function(){
        console.log("back");
        _this.backbtn.events.onInputDown.removeAll();
        this.stopVoice();
        _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();

       if(grade2Selected == false)
                _this.state.start('grade1levelSelectionScreen',true,false); 
            else
                _this.state.start('grade2levelSelectionScreen',true,false); 

    },this);
  
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
    _this.timeDisplay.fontSize = 20;
    _this.timeDisplay.fontWeight = 'Normal';
    _this.timeDisplay.fill = '#ADFF2F';
//        _this.footer = this.add.sprite(0,480,'footer');
       // footer.scale.setTo(1,1);
        _this.speaker = this.add.sprite(600,6,'grade11_speaker');
        _this.speaker.inputEnabled = true;
        _this.speaker.events.onInputDown.add(function()
		{
		   _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
			_this.getVoice();
		},_this);
         _this.generateStarsForTheScene(6)
         
       
             this.getQuestion();
     _this.getVoice();
    },
    /***********************************getquestion************************/
    getQuestion:function(target)
    {
        _this.noofAttempts=0;
       _this.sceneCount++;
      _this.AnsTimerCount = 0;

      _this.timer = this.time.create(false);
        _this.timer.loop(1000, function(){
                  _this.AnsTimerCount++;
        }, this);
        _this.timer.start();

        _this.timer1 = this.time.create(false);
        _this.timer1.loop(1000, function(){
                  this.updateTimer();
        }, this);
        _this.timer1.start();
        _this.grpnum=new Array();
        //_this.speaker.inputEnabled=false;
//        _this.speaker.input.useHandCursor = true;
       _this.stopVoice();
    	console.log("get"+_this.no1);
    	console.log("getq"+_this.qArrays[_this.no1]);
    	console.log("getq1"+_this.qArrays1[_this.no1]);
    	console.log("getq2"+_this.qArrays2[_this.no1]);
    	console.log("getq3"+_this.qArrays3[_this.no1]);
    	console.log("getq4"+_this.qArrays4[_this.no1]);
//        _this.getVoice();
        if(_this.no1==0)
            {
                switch(_this.qArrays[_this.no1])
                    {
                       case 9: console.log("case5");
                            this.gotonineQuestion();
    				        break; 
                      case 13: console.log("case5");
                            this.gotothirteenQuestion();
    				        break; 
                      case 1: console.log("case1"); 
                            this.gotoFirstQuestion();
                            break;  
                    }
            }
        else if(_this.no1==1)
            {
                switch(_this.qArrays1[0])
                    {
                      
                        case 10: console.log("case5");
                                this.gototenQuestion();
    				            break;
                        case 2:console.log("case2");
                                this.gotoSecondQuestion();
   				                 break;   
                        case 14: console.log("case5");
                                this.gotoforteenQuestion();
    				            break;
                    }
            }
        else if(_this.no1==2)
            {
                switch(_this.qArrays2[_this.no1])
                    {
                      case 11: console.log("case5");
                                this.gotoelevenQuestion();
    				            break;
                      case 15: console.log("case5");
                            this.gotofifteenQuestion();
    				        break; 
                      case 3: console.log("case3");
                                this.gotoThirdQuestion();
    				            break;  
                    }
            }
        else if(_this.no1==3)
            {
                switch(_this.qArrays3[0])
                    {
                       
                       case 4: console.log("case4");
                            this.gotoFourthQuestion();
    				        break; 
                        case 12: console.log("case5");
                                this.gototewlveQuestion();
    				            break;
                        case 16: console.log("case5");
                                this.gotosixteenQuestion();
    				            break; 
                    }
            }
        else if(_this.no1==4)
            {
              switch(_this.qArrays4[0])//qArrays[no1])
            {
                     case 7: console.log("case5");
                                this.gotoseventhQuestion();
    				            break;
                       case 8: console.log("case5");
                                this.gotoeightQuestion();
    				            break; 
                        case 10: console.log("case5");
                                this.gototenQuestion();
    				            break;
                    
            }  
            }
        else if(_this.no1==5)
        {
             switch(_this.qArrays5[0])
                 {
                      case 5: console.log("case5");
                            this.gotoFifthQuestion();
    				        break;
                     case 6: console.log("case5");
                            this.gotosixthQuestion();
    				        break; 
                    case 3: console.log("case3");
                                this.gotoThirdQuestion();
    				            break; 
                 }
        }
    },
     addQuestion:function(no2)
    {

           console.log("here");
           this.time.events.add(2000, function(){ 
                       _this.group1.destroy();
           
		if(_this.no1<6)
		{
            _this.count++;
           // _this.game.input.enabled = true;
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
				// text.fontWeight = 'bold';
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
            }, this);

    },
   
    
    speakeron:function(){
        console.log("in funct");
        _this.stopVoice();
        switch(qArrays[no1-1])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6: 
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:if(window.languageSelected=="English")
                        Eng_42B1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_42B1.play();
                    else
                        Kan_42B1.play();
                    break;
            
        }
    },
    
    stopAllVoice:function(){
        Eng_42B1.stop();
        Hin_42B1.stop();
        Kan_42B1.stop();
        
    },
    /****************************firstquestionwheel************************/
     gotoFirstQuestion:function(){
          _this.Question =1;
         _this.no1++;
         console.log("one");
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_c6');
         _this.circle.anchor.set(0.5);
        _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
         _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
        
    },
   /*******************************secondquestionwheel*******************/
   gotoSecondQuestion:function(){
       _this.Question =2;
         _this.no1++;
         console.log("two");
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_t2');
         _this.circle.anchor.set(0.5);
        _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
         _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
        
    },
    /*****************************thirdquestioncircle**********************/
      gotoThirdQuestion:function(){
          _this.Question =3;
         _this.no1++;
         console.log("three");
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_s3');
         _this.circle.anchor.set(0.5);
        _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
          _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
        
    },
    /*********************************fourthquestioncircle***********************/
       gotoFourthQuestion:function(){
         _this.Question =4;
         _this.no1++;
         console.log("four");
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_r3');
         _this.circle.anchor.set(0.5);
        _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
         _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
        
    },
    /******************fifthquestionwheel***************************************/
     gotoFifthQuestion:function(){
        _this.Question =5;
         _this.no1++;
         console.log("five");
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_r7');
         _this.circle.anchor.set(0.5);
        _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
         _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
        
    },
 /******************sixthquestionwheel***************************************/
     gotosixthQuestion:function(){
        _this.Question =6;
         _this.no1++;
         console.log("six");
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_r8');
         _this.circle.anchor.set(0.5);
        _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
         _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
        
    },
    /******************seventhquestionwheel***************************************/
    gotoseventhQuestion:function(){
       _this.Question =7;
         _this.no1++;
         console.log("seven");
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_c7');
         _this.circle.anchor.set(0.5);
        _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
         _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
        
    },
     /******************eightthquestionwheel***************************************/
    gotoeightQuestion:function(){
       _this.Question =8;
         _this.no1++;
         console.log("eight");
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_c8');
         _this.circle.anchor.set(0.5);
        _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
          _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
    },
    /******************ninequestionwheel***************************************/
     gotonineQuestion:function(){
       
        _this.Question = 9;
         _this.no1++;
         console.log("nine");
       
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_c1');
         _this.circle.anchor.set(0.5);
          _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
          _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
    },
    /******************tenquestionwheel***************************************/
    gototenQuestion:function(){
       
        _this.Question =10;
         _this.no1++;
         console.log("ten");
     
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_t1');
         _this.circle.anchor.set(0.5);
         _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
       _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
    },
   /*****************************elevenquestion*****************************************/ 
    gotoelevenQuestion:function(){
       
        _this.Question =11;
         _this.no1++;
         console.log("eleven");
       
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_s1');
         _this.circle.anchor.set(0.5);
          _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
       
         _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
    },
    /******************************tewelvequestion**********************************/
    gototewlveQuestion:function(){
       
        _this.Question =12;
         _this.no1++;
         console.log("twelve");
       
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_r2');
         _this.circle.anchor.set(0.5);
         _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
         _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
    },
    /*question********************************thirteen************************/
    gotothirteenQuestion:function(){
       
        _this.Question =13;
         _this.no1++;
         console.log("thirteen");
    
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_c3');
         _this.circle.anchor.set(0.5);
          _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
     
          _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
    },
    /*********************forteenquestion*********************************/
    gotoforteenQuestion:function(){
       
        _this.Question =14;
         _this.no1++;
         console.log("forteen");
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_t3');
         _this.circle.anchor.set(0.5);
         _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
          _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
    },
    /************************************fifteen*******************/
    gotofifteenQuestion:function(){
       
        _this.Question =15;
         _this.no1++;
         console.log("fifteen");
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_s2');
         _this.circle.anchor.set(0.5);
         _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
          _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
    },
     /**************************sixteen***********************************/
    gotosixteenQuestion:function(){
       
        _this.Question =16;
         _this.no1++;
         console.log("sixteen");
         _this.group1=this.add.group();
        _this.circle=_this.add.sprite(this.world.centerX-20, this.world.centerY-30,'sg7_2_2x_r6');
         _this.circle.anchor.set(0.5);
         _this.circle.y=-600;
         _this.tween=this.add.tween(_this.circle).to( { y: 230 }, 4000, Phaser.Easing.Bounce.Out, true,0);
          _this.opt1=_this.add.sprite(this.world.centerX-350, this.world.centerY+170,'sg7_2_2x_choice1');
         _this.opt1.anchor.set(0.5);
         _this.opt1.inputEnabled=true;
          _this.opt1.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
              
          },this);
         
         _this.opt2=_this.add.sprite(this.world.centerX-200, this.world.centerY+170,'sg7_2_2x_choice2');
         _this.opt2.anchor.set(0.5);
         _this.opt2.inputEnabled=true;
          _this.opt2.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt3=_this.add.sprite(this.world.centerX-50, this.world.centerY+170,'sg7_2_2x_choice3');
         _this.opt3.anchor.set(0.5);
         _this.opt3.inputEnabled=true;
          _this.opt3.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt4=_this.add.sprite(this.world.centerX+100, this.world.centerY+170,'sg7_2_2x_choice4');
         _this.opt4.anchor.set(0.5);
         _this.opt4.inputEnabled=true;
          _this.opt4.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         
         _this.opt5=_this.add.sprite(this.world.centerX+250, this.world.centerY+170,'sg7_2_2x_choice5');
         _this.opt5.anchor.set(0.5);
         _this.opt5.inputEnabled=true;
          _this.opt5.events.onInputDown.add(function(target){
               _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
             if(target.frame===1)
                  {
                      target.frame=0;
                  }
              else if(target.frame===0)
                  {
                      target.frame=1;
                  }
          },this);
         _this.group1.add(_this.circle);
         _this.group1.add(_this.opt1);
         _this.group1.add(_this.opt2);
         _this.group1.add(_this.opt3);
         _this.group1.add(_this.opt4);
         _this.group1.add(_this.opt5);
         this.enablebuttons();
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
    //_this.game.input.enabled = false;

    if(_this.group1)
    {
      _this.group1.setAll("inputEnabled",false);
    }
		console.log("correct");
        //_this.speaker.inputEnabled=false;
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
        _this.rightbtn.events.onInputDown.removeAll();

        if(_this.timer)
        {
          _this.timer.stop();
          _this.timer = null;
        }
        _this.questionid = 1;
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount); 
	},

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
                //_this.game.input.enabled = true;
				this.state.start('sg7_2_2xScore');
                 },this);
			}

	},
 
    update:function(){

    },

    
     getVoice:function(){
       
        _this.stopVoice();	
        _this.playQuestionSound = document.createElement('audio');
                    _this.src = document.createElement('source');
       if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2x/English/sg7.2.x.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2x/Hindi/sg7.2.x.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2x/Kannada/sg7.2.x.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2x/Gujrati/sg7.2.x.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2x/Marathi/sg7.2.x.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2x/Telugu/sg7.2.x.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2x/Tamil/sg7.2.x.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2x/Urdu/sg7.2.x.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2x/Odiya/sg7.2.x.mp3");  
                    }
        _this.playQuestionSound.appendChild(_this.src);
                    _this.playQuestionSound.play();
    },
  
   enablebuttons:function(){
         _this.numGroup = this.add.group();
       
        _this.rightbtn =_this.numGroup.create(860,270,'SG3_1_1rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1,1);
        _this.rightbtn.name = "rightbtn";

        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        
        _this.rightbtn.events.onInputDown.add(function(target){
          _this.noofAttempts++;
             _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            target.frame=1;
          if( _this.Question==1)
           {
                   if (_this.opt1.frame==1&&_this.opt4.frame==1&&_this.opt2.frame==0&&_this.opt3.frame==0&&_this.opt5.frame==0)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==2)
                {
                   if (_this.opt1.frame==1&&_this.opt4.frame==0&&_this.opt2.frame==1&&_this.opt3.frame==0&&_this.opt5.frame==0)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==3)
                {
                   if (_this.opt1.frame==0&&_this.opt4.frame==1&&_this.opt2.frame==0&&_this.opt3.frame==1&&_this.opt5.frame==0)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==4)
               {
                   if (_this.opt1.frame==0&&_this.opt4.frame==1&&_this.opt2.frame==0&&_this.opt3.frame==0&&_this.opt5.frame==0)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==5)
                {
                   if (_this.opt1.frame==0&&_this.opt4.frame==1&&_this.opt2.frame==0&&_this.opt3.frame==0&&_this.opt5.frame==0)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==6)
                {
                   if (_this.opt1.frame==0&&_this.opt4.frame==1&&_this.opt2.frame==0&&_this.opt3.frame==0&&_this.opt5.frame==0)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==7)
               {
                   if (_this.opt1.frame==0&&_this.opt4.frame==1&&_this.opt2.frame==0&&_this.opt3.frame==0&&_this.opt5.frame==1)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==8)
                {
                   if (_this.opt1.frame==1&&_this.opt4.frame==0&&_this.opt2.frame==1&&_this.opt3.frame==0&&_this.opt5.frame==0)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==9)
               {
                   if (_this.opt1.frame==0&&_this.opt4.frame==1&&_this.opt2.frame==0&&_this.opt3.frame==0&&_this.opt5.frame==1)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==10)
                {
                   if (_this.opt1.frame==1&&_this.opt4.frame==0&&_this.opt2.frame==1&&_this.opt3.frame==0&&_this.opt5.frame==0)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==11)
                {
                   if (_this.opt1.frame==0&&_this.opt4.frame==1&&_this.opt2.frame==0&&_this.opt3.frame==1&&_this.opt5.frame==0)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==12)
                {
                   if (_this.opt1.frame==0&&_this.opt4.frame==1&&_this.opt2.frame==0&&_this.opt3.frame==0&&_this.opt5.frame==0)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==13)
                {
                   if (_this.opt1.frame==1&&_this.opt4.frame==1&&_this.opt2.frame==0&&_this.opt3.frame==0&&_this.opt5.frame==0)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==14)
                {
                   if (_this.opt1.frame==1&&_this.opt4.frame==0&&_this.opt2.frame==1&&_this.opt3.frame==0&&_this.opt5.frame==0)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==15)
                {
                   if (_this.opt1.frame==0&&_this.opt4.frame==1&&_this.opt2.frame==0&&_this.opt3.frame==1&&_this.opt5.frame==0)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
            if( _this.Question==16)
                {
                   if (_this.opt1.frame==0&&_this.opt4.frame==1&&_this.opt2.frame==0&&_this.opt3.frame==0&&_this.opt5.frame==0)
             {
                _this.correctAns(); 
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
            }
                }
              //  _this.numGroup.add(_this.box);
            
        },this);
        _this.rightbtn.events.onInputUp.add(function(target){
           target.frame=0;
       }, this);
       
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
      //_this.game.input.enabled = true;
    }
    
};