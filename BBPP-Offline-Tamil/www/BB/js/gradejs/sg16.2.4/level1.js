Game.sg16_2_4level1=function(){};
	
	
	

Game.sg16_2_4level1.prototype={
    init:function(game)
	{
		_this = this;
      
		telInitializer.gameIdInit("SG16_2_4",gradeSelected);
	},

  preload:function(game){
        if(!window.grade4SG2){

            window.grade4SG2 = true;

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

            this.load.atlas('sg16_2_4_calNum',window.baseUrl+'assets/gradeAssets/sg16.2.4/calNum.png' ,window.baseUrl+'json/gradeJson/sg16.2.4/calNum.json');
    this.load.image('sg16_2_4_footer',window.baseUrl+'assets/commonAssets/bottomBar.png');
    this.load.image('sg16_2_4_box',window.baseUrl+'assets/gradeAssets/sg16.2.4/box.png');
     //Load 4.2A Assets
    
        this.load.image('sg16_2_4_table',window.baseUrl+'assets/gradeAssets/sg16.2.4/5.png');
        
        this.load.image('sg16_2_4_table1',window.baseUrl+'assets/gradeAssets/sg16.2.4/b1.png');
        
        this.load.atlas('sg16_2_4_circle',window.baseUrl+'assets/gradeAssets/sg16.2.4/01.png',window.baseUrl+'json/gradeJson/sg16.2.4/01.json');
        this.load.atlas('sg16_2_4_circle1',window.baseUrl+'assets/gradeAssets/sg16.2.4/n2.png',window.baseUrl+'json/gradeJson/sg16.2.4/n2.json');
        //this.load.atlas('lines',window.baseUrl+'assets/gradeAssets/sg16.2.4/2.png',window.baseUrl+'json/gradeJson/sg16.2.4/2.json');
        this.load.atlas('sg16_2_4_wheel',window.baseUrl+'assets/gradeAssets/sg16.2.4/02.png',window.baseUrl+'json/gradeJson/sg16.2.4/02.json');
        this.load.atlas('sg16_2_4_wheel1',window.baseUrl+'assets/gradeAssets/sg16.2.4/n1.png',window.baseUrl+'json/gradeJson/sg16.2.4/n1.json');
       
        
     

       
        this.load.atlas('sg16_2_4_rightBtn',window.baseUrl+'assets/gradeAssets/sg16.2.4/1.png' ,window.baseUrl+'json/gradeJson/sg16.2.4/1.json');
        this.load.atlas('sg16_2_4_eraser',window.baseUrl+'assets/gradeAssets/sg16.2.4/2.png' ,window.baseUrl+'json/gradeJson/sg16.2.4/2.json');

    }

    },


	create:function(game){
        _this.bg1=null;
_this.starsGroup=0;
_this.cloud=0;
_this.no1=0;
_this.mainFlag=0;
_this.opt1=0;
_this.opt2=0;
_this.opt3=0;
_this.no2=0;
_this.count1=0;
_this.count=0;
_this.qArrays=null;
_this.flagmain11Anim=0;
_this.animlev1=0;
_this.a1=0;
_this.Sprite=0;
_this.cloud2=0;_this.cloud3=0;_this.cloud4=0;_this.cloud5=0;_this.cloud6=0;_this.cloud7=0;_this.cloud8=0;
_this.optionsgrp=0;
_this.wronggraphics1=0;_this.wronggraphics2=0;_this.wronggraphics3=0;
_this.wrngGraphicgrp=0;
_this.sg16_2_4_boxb1;
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
_this.txtsg16_2_4_box=0;
_this.grpnum=new Array();
_this.sg16_2_4_boxclick=0;
_this.minutes=0;_this.seconds=0;_this.counterForTimer=0;

_this.noofAttempts=0;
        _this.AnsTimerCount=0;   
        _this.sceneCount=0;

_this.sg16_2_4_box=0;

    
        //baudio.play(); 
		//baudio.loopFull(0.6);
        _this.qArrays = new Array();
        _this.qArrays1 = new Array();
        _this.qArrays = [1,2,3,4,5];
        _this.qArrays1 = [6,7,8,9,10];
        
        _this.qArrays = this.shuffle(_this.qArrays);
        _this.qArrays1 = this.shuffle(_this.qArrays1);
        
        _this.questionArrayMain = [];
        
        for(var i=0;i<3;i++)
            {
                _this.questionArrayMain.push(_this.qArrays[i]);
            }
        
        for(var i=0;i<3;i++)
            {
                _this.questionArrayMain.push(_this.qArrays1[i]);
            }
        
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

       _this.state.start('grade1levelSelectionScreen',true,false);
    },this);

   /* _this.dottedsg16_2_4_box=this.add.sprite(70,7,'dottedsg16_2_4_box');
    _this.numTxt1 = this.add.text(45,17, 'PRACTICE');
    _this.numTxt1.anchor.setTo(0.5);
    _this.numTxt1.align = 'center';
    _this.numTxt1.font = 'Alte Haas Grotesk';
    _this.numTxt1.fontSize = 12;
    _this.numTxt1.fill = '#ffffff';
    _this.numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
    _this.dottedsg16_2_4_box.addChild(_this.numTxt1);
        
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
    //text.fontWeight = 'bold';
    _this.timeDisplay.fill = '#ADFF2F';
        _this.sg16_2_4_footer = this.add.sprite(0,480,'sg16_2_4_footer');
       // sg16_2_4_footer.scale.setTo(1,1);
       _this.speaker = this.add.sprite(600,6,'grade11_speaker');
        _this.speaker.inputEnabled = true;
        _this.speaker.events.onInputDown.add(function()
		{
		   _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
			_this.getVoice();
		},_this);
//         _this.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'sg16_2_4_table');
//	   _this.sprite.anchor.set(0.5);
//        _this.sprite.scale.setTo(0.91,1);
         _this.generateStarsForTheScene(6)
       
               //_this.no1++;
				this.getQuestion();
    
    },
    /***********************************getquestion************************/
    getQuestion:function(target)
    {
       if(!_this.timer)
        {
            _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
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
        this.stopVoice();
    	console.log("get"+_this.no1);
    	console.log("get:"+_this.qArrays[_this.no1]);
    	console.log("get2:"+_this.qArrays1[_this.no1]);
        _this.getVoice();
            switch(_this.questionArrayMain[_this.no1])//qArrays[no1])
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
    		case 6: console.log("case6");
                this.gotoSixthQuestion();
    				break;
    		case 7: console.log("case7"); 
                this.gotoSeventhQuestion();
    				break;
    		case 8: console.log("case8"); 
                this.gotoEighthQuestion();
    				break;
            case 9: console.log("case9"); 
                this.gotoNinthQuestion();
    				break;
            case 10: console.log("case10"); 
                this.gotoTenthQuestion();
    				break;
        }
        
    },
     addQuestion:function(no2)
    {

           console.log("here");
           this.time.events.add(2000, function(){
         
        
        _this.tween=this.add.tween(_this.group1).to( { x: 0 }, 0, 'Linear', true,0);
               _this.tween=this.add.tween(_this.group2).to( { x: 0 }, 0, 'Linear', true,0);
          //tween to exit the sg16_2_4_table after complete the question             
               
           _this.tween.onComplete.add(this.changeQuestion, this);

   
               
            }, this);

    },
   
    
    speakeron:function(){
        console.log("in funct");
        this.stopAllVoice();
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
            case 11:if(window.languageSelected=="English")
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
    /****************************firstquestionsg16_2_4_wheel************************/
     gotoFirstQuestion:function(){
         _this.Question = 1;
//          _this.no1++;
         console.log("first");
         
         _this.bounds = new Phaser.Rectangle(65, 52, 775, 475);
         
         _this.group2=this.add.group();
           _this.sprite = this.add.sprite(this.world.centerX-50, this.world.centerY-5, 'sg16_2_4_table1');
	   _this.sprite.anchor.set(0.5);
        _this.sprite.scale.setTo(0.90,1);
         
            _this.group1=this.add.group();
            
          _this.group2.add(_this.sprite);
            
         _this.opt1=this.add.sprite(450,455,'sg16_2_4_wheel1');
         _this.opt1.frame=3;
         _this.opt1.anchor.setTo(0.5,1);
         _this.opt1.scale.setTo(0.9,1);
         _this.opt1.name = "sg16_2_4_circle1";
         _this.opt1.alpha=0.7;
         _this.opt1.value =4;
          //_this.physics.p2.enable(_this.opt1);

         
          _this.sg16_2_4_box=this.add.sprite(840,250,'sg16_2_4_box');
         //_this.sg16_2_4_box.scale.setTo(0.85,0.65);
         _this.sg16_2_4_box.alpha=0; 
         _this.sg16_2_4_box.scale.setTo(1,1);
         _this.sg16_2_4_box.name="opt1sg16_2_4_box";
         
         this.addNumberPad();
         
         this.enablebuttons(_this.opt1.value);
          _this.sg16_2_4_box.alpha=1;
            _this.sg16_2_4_box.inputEnabled=true;
         
            console.log("sg16_2_4_box3");
            _this.sg16_2_4_boxclick=_this.sg16_2_4_box.name;
         
          
        //_this.group1.add(_this.sprite);
         _this.group1.add(_this.opt1);
          _this.group1.add(_this.sg16_2_4_box);  
         
            
         _this.group1.x=1000;
         _this.group2.x=1000;
          _this.tween=this.add.tween(_this.group2).to( { x: 0 }, 0, 'Linear', true,0);
        _this.tween=this.add.tween(_this.group1).to( { x: 0 }, 0, 'Linear', true,0);
        
         
          _this.addListeners();
         _this.opt1.input.boundsRect = _this.bounds;
       
        _this.tween.onComplete.add(function(){
  }, this);  
        
    },
   /*******************************secondquestionsg16_2_4_wheel*******************/
   gotoSecondQuestion:function(){
       _this.Question = 2;
//   _this.no1++;
         console.log("second");
       
        _this.bounds = new Phaser.Rectangle(112,99, 684, 380);
        _this.group2=this.add.group();
           _this.sprite = this.add.sprite(this.world.centerX-50, this.world.centerY-5, 'sg16_2_4_table1');
	   _this.sprite.anchor.set(0.5);
        _this.sprite.scale.setTo(0.90,1);
         
            _this.group1=this.add.group();
            
          _this.group2.add(_this.sprite);
       
//       _this.graphics = _this.add.graphics(_this.bounds.x-70, _this.bounds.y);
//        //_this.graphics.beginFill(0x000077);
//         _this.graphics.alpha=0.7;
//        _this.graphics.drawRect(0, 0, _this.bounds.width, _this.bounds.height);
         
       _this.opt1=this.add.sprite(449,455,'sg16_2_4_wheel1');
         _this.opt1.frame=8;
         _this.opt1.anchor.setTo(0.5,1);
         _this.opt1.scale.setTo(0.9,1);
         _this.opt1.name = "sg16_2_4_circle2";
         _this.opt1.alpha=0.8; 
         _this.opt1.value =6;
       
          _this.opt1.inputEnabled=true;
         _this.opt1.input.enableDrag(true);
       
           _this.sg16_2_4_box=this.add.sprite(840,250,'sg16_2_4_box');
        // _this.sg16_2_4_box.scale.setTo(0.85,0.65);
         _this.sg16_2_4_box.alpha=0; 
         _this.sg16_2_4_box.scale.setTo(1,1);
         _this.sg16_2_4_box.name="opt1sg16_2_4_box";
         
         this.addNumberPad();
      this.enablebuttons(_this.opt1.value);
          _this.sg16_2_4_box.alpha=1;
            _this.sg16_2_4_box.inputEnabled=true;

            console.log("sg16_2_4_box3");
            _this.sg16_2_4_boxclick=_this.sg16_2_4_box.name;


      
        
         //_this.group1.add(_this.sprite);
         _this.group1.add(_this.opt1);
          _this.group1.add(_this.sg16_2_4_box);  
         
            
         _this.group1.x=1000;
         _this.group2.x=1000;
          _this.tween=this.add.tween(_this.group2).to( { x: 0 }, 0, 'Linear', true,0);
        _this.tween=this.add.tween(_this.group1).to( { x: 0 }, 0, 'Linear', true,0);

       _this.addListeners();
       
        _this.opt1.input.boundsRect = _this.bounds;
        _this.tween.onComplete.add(function(){
  }, this);  
    	
    },
    /*****************************thirdquestionsg16_2_4_circle**********************/
      gotoThirdQuestion:function(){
      _this.Question = 3;
//          _this.no1++;
         console.log("third");
          
           _this.bounds = new Phaser.Rectangle(66, 47, 775, 478);
           _this.group2=this.add.group();
           _this.sprite = this.add.sprite(this.world.centerX-50, this.world.centerY-5, 'sg16_2_4_table1');
	   _this.sprite.anchor.set(0.5);
        _this.sprite.scale.setTo(0.90,1);
         
            _this.group1=this.add.group();
            
          _this.group2.add(_this.sprite);
          
         
       _this.opt1=this.add.sprite(449,450,'sg16_2_4_circle1');
         _this.opt1.frame=1;
         _this.opt1.anchor.setTo(0.5,1);
         _this.opt1.scale.setTo(0.9,1);
         _this.opt1.name = "sg16_2_4_wheel3";
         _this.opt1.alpha=0.8;
         _this.opt1.value =2;
         
           _this.opt1.inputEnabled=true;
         _this.opt1.input.enableDrag(true);
          
          _this.sg16_2_4_box=this.add.sprite(840,250,'sg16_2_4_box');
         //_this.sg16_2_4_box.scale.setTo(0.85,0.65);
         _this.sg16_2_4_box.alpha=0; 
         _this.sg16_2_4_box.scale.setTo(1,1);
         _this.sg16_2_4_box.name="opt1sg16_2_4_box";
         
         this.addNumberPad();
       this.enablebuttons(_this.opt1.value);
          _this.sg16_2_4_box.alpha=1;
            _this.sg16_2_4_box.inputEnabled=true;

            console.log("sg16_2_4_box3");
            _this.sg16_2_4_boxclick=_this.sg16_2_4_box.name;
         
        
         //_this.group1.add(_this.sprite);
         _this.group1.add(_this.opt1);
          _this.group1.add(_this.sg16_2_4_box);  
         
            
         _this.group1.x=1000;
         _this.group2.x=1000;
          _this.tween=this.add.tween(_this.group2).to( { x: 0 }, 0, 'Linear', true,0);
        _this.tween=this.add.tween(_this.group1).to( { x: 0 }, 0, 'Linear', true,0);
          
          _this.addListeners();
           _this.opt1.input.boundsRect = _this.bounds;
        _this.tween.onComplete.add(function(){
            }, this);  
    	   
    },
    /*********************************fourthquestionsg16_2_4_circle***********************/
       gotoFourthQuestion:function(){
         
    	 _this.Question = 4;
//         _this.no1++;
         console.log("four");
           
         _this.bounds = new Phaser.Rectangle(111,98, 684, 380);
           
            _this.group2=this.add.group();
           _this.sprite = this.add.sprite(this.world.centerX-50,this.world.centerY-5, 'sg16_2_4_table1');
	   _this.sprite.anchor.set(0.5);
        _this.sprite.scale.setTo(0.90,1);
         
            _this.group1=this.add.group();
            
          _this.group2.add(_this.sprite);
         
       _this.opt1=this.add.sprite(449,452,'sg16_2_4_circle1');
         _this.opt1.frame=6;
         _this.opt1.anchor.setTo(0.5,1);
         _this.opt1.scale.setTo(0.9,1);
         _this.opt1.name = "sg16_2_4_wheel4";
         _this.opt1.alpha=0.8;
         _this.opt1.value =3;
           
            _this.opt1.inputEnabled=true;
         _this.opt1.input.enableDrag(true);
       
          _this.sg16_2_4_box=this.add.sprite(840,250,'sg16_2_4_box');
        // _this.sg16_2_4_box.scale.setTo(0.85,0.65);
         _this.sg16_2_4_box.alpha=0; 
         _this.sg16_2_4_box.scale.setTo(1,1);
         _this.sg16_2_4_box.name="opt1sg16_2_4_box";
         
         this.addNumberPad();
      this.enablebuttons(_this.opt1.value);
          _this.sg16_2_4_box.alpha=1;
            _this.sg16_2_4_box.inputEnabled=true;

            console.log("sg16_2_4_box3");
            _this.sg16_2_4_boxclick=_this.sg16_2_4_box.name;

        
          //_this.group1.add(_this.sprite);
         _this.group1.add(_this.opt1);
          _this.group1.add(_this.sg16_2_4_box);  
         
            _this.addListeners();
         _this.group1.x=1000;
         _this.group2.x=1000;
          _this.tween=this.add.tween(_this.group2).to( { x: 0 }, 0, 'Linear', true,0);
        _this.tween=this.add.tween(_this.group1).to( { x: 0 }, 0, 'Linear', true,0);

           _this.opt1.input.boundsRect = _this.bounds;
           
        _this.tween.onComplete.add(function(){
  }, this);  
    },
     /*********************elevenquestion********************************************/
    gotoFifthQuestion:function(){
         
    	 _this.Question = 5;
//         _this.no1++;
         console.log("five");
           
         _this.bounds = new Phaser.Rectangle(111,98, 684, 380);
           
            _this.group2=this.add.group();
           _this.sprite = this.add.sprite(this.world.centerX-50, this.world.centerY-5, 'sg16_2_4_table1');
	   _this.sprite.anchor.set(0.5);
        _this.sprite.scale.setTo(0.90,1);
         
            _this.group1=this.add.group();
            
          _this.group2.add(_this.sprite);
         
       _this.opt1=this.add.sprite(449,451,'sg16_2_4_circle1');
         _this.opt1.frame=8;
         _this.opt1.anchor.setTo(0.5,1);
         _this.opt1.scale.setTo(0.9,1);
         _this.opt1.name = "sg16_2_4_wheel4";
         _this.opt1.alpha=0.8;
         _this.opt1.value =6;
           
            _this.opt1.inputEnabled=true;
         _this.opt1.input.enableDrag(true);
       
          _this.sg16_2_4_box=this.add.sprite(840,250,'sg16_2_4_box');
        // _this.sg16_2_4_box.scale.setTo(0.85,0.65);
         _this.sg16_2_4_box.alpha=0; 
         _this.sg16_2_4_box.scale.setTo(1,1);
         _this.sg16_2_4_box.name="opt1sg16_2_4_box";
         
         this.addNumberPad();
      this.enablebuttons(_this.opt1.value);
          _this.sg16_2_4_box.alpha=1;
            _this.sg16_2_4_box.inputEnabled=true;

            console.log("sg16_2_4_box3");
            _this.sg16_2_4_boxclick=_this.sg16_2_4_box.name;

        
          //_this.group1.add(_this.sprite);
         _this.group1.add(_this.opt1);
          _this.group1.add(_this.sg16_2_4_box);  
         
            _this.addListeners();
         _this.group1.x=1000;
         _this.group2.x=1000;
          _this.tween=this.add.tween(_this.group2).to( { x: 0 }, 0, 'Linear', true,0);
        _this.tween=this.add.tween(_this.group1).to( { x: 0 }, 0, 'Linear', true,0);

           _this.opt1.input.boundsRect = _this.bounds;
           
        _this.tween.onComplete.add(function(){
  }, this);  
    },
    
    /******************fifthquestionsg16_2_4_wheel***************************************/
     gotoSixthQuestion:function(){
         
    	
        _this.Question = 6;
//         _this.no1++;
         console.log("six");
        
         _this.bounds = new Phaser.Rectangle(110,41, 670, 485);
        
         _this.group2=this.add.group();
           _this.sprite = this.add.sprite(this.world.centerX-50, this.world.centerY-5, 'sg16_2_4_table');
	   _this.sprite.anchor.set(0.5);
        _this.sprite.scale.setTo(0.90,1);
         
            _this.group1=this.add.group();
            
          _this.group2.add(_this.sprite);
         
       _this.opt1=this.add.sprite(445,470,'sg16_2_4_wheel');
         _this.opt1.frame=1;
         _this.opt1.anchor.setTo(0.5,1);
         _this.opt1.scale.setTo(0.9,1);
         _this.opt1.name = "sg16_2_4_circle6";
         _this.opt1.alpha=0.8;
         _this.opt1.value =4;
        
         _this.opt1.inputEnabled=true;
         _this.opt1.input.enableDrag(true);
       
          _this.sg16_2_4_box=this.add.sprite(840,250,'sg16_2_4_box');
         //_this.sg16_2_4_box.scale.setTo(0.85,0.65);
         _this.sg16_2_4_box.alpha=0; 
         _this.sg16_2_4_box.scale.setTo(1,1);
         _this.sg16_2_4_box.name="opt1sg16_2_4_box";
         
         this.addNumberPad();
       this.enablebuttons(_this.opt1.value);
          _this.sg16_2_4_box.alpha=1;
            _this.sg16_2_4_box.inputEnabled=true;

            console.log("sg16_2_4_box3");
            _this.sg16_2_4_boxclick=_this.sg16_2_4_box.name;

       
        //_this.group1.add(_this.sprite);
         _this.group1.add(_this.opt1);
          _this.group1.add(_this.sg16_2_4_box);  
         
            _this.addListeners();
         _this.group1.x=1000;
         _this.group2.x=1000;
          _this.tween=this.add.tween(_this.group2).to( { x: 0 }, 0, 'Linear', true,0);
        _this.tween=this.add.tween(_this.group1).to( { x: 0 }, 0, 'Linear', true,0);
       // tween.onComplete.add(this.addQuestion, this);
         _this.opt1.input.boundsRect = _this.bounds;
        
        _this.tween.onComplete.add(function(){
  }, this);  
    },
    /***************sixthquestionsg16_2_4_wheel**************************************/
     gotoSeventhQuestion:function(){

    	
        _this.Question = 7;
//         _this.no1++;
         console.log("seven");
         
         _this.bounds = new Phaser.Rectangle(110,41, 670, 485);
         
         _this.group2=this.add.group();
           _this.sprite = this.add.sprite(this.world.centerX-50, this.world.centerY-5, 'sg16_2_4_table');
	   _this.sprite.anchor.set(0.5);
        _this.sprite.scale.setTo(0.90,1);
         
            _this.group1=this.add.group();
            
          _this.group2.add(_this.sprite);
         
       _this.opt1=this.add.sprite(445,471,'sg16_2_4_wheel');
         _this.opt1.frame=3;
         _this.opt1.anchor.setTo(0.5,1);
         _this.opt1.scale.setTo(0.9,1);
         _this.opt1.name = "sg16_2_4_wheel7";
         _this.opt1.alpha=0.8;
         _this.opt1.value =8;
         
          _this.opt1.inputEnabled=true;
         _this.opt1.input.enableDrag(true);
       
         _this.sg16_2_4_box=this.add.sprite(840,250,'sg16_2_4_box');
         //_this.sg16_2_4_box.scale.setTo(0.85,0.65);
         _this.sg16_2_4_box.alpha=0; 
         _this.sg16_2_4_box.scale.setTo(1,1);
         _this.sg16_2_4_box.name="opt1sg16_2_4_box";
         
         this.addNumberPad();
       this.enablebuttons(_this.opt1.value);
          _this.sg16_2_4_box.alpha=1;
            _this.sg16_2_4_box.inputEnabled=true;

            console.log("sg16_2_4_box3");
            _this.sg16_2_4_boxclick=_this.sg16_2_4_box.name;

        
          //_this.group1.add(_this.sprite);
         _this.group1.add(_this.opt1);
          _this.group1.add(_this.sg16_2_4_box);  
         
            _this.addListeners();
         _this.group1.x=1000;
         _this.group2.x=1000;
          _this.tween=this.add.tween(_this.group2).to( { x: 0 }, 0, 'Linear', true,0);
        _this.tween=this.add.tween(_this.group1).to( { x: 0 }, 0, 'Linear', true,0);
       // tween.onComplete.add(this.addQuestion, this);
         
         _this.opt1.input.boundsRect = _this.bounds;
         
        _this.tween.onComplete.add(function(){
  }, this);  
    },
    /**********************sevenquestionsg16_2_4_wheel*****************************************/
     gotoEighthQuestion:function(){

    	
         _this.Question = 8;
//         _this.no1++;
         console.log("eight");
          
          _this.bounds = new Phaser.Rectangle(152,85, 590, 397);
          
           _this.group2=this.add.group();
           _this.sprite = this.add.sprite(this.world.centerX-50,this.world.centerY-5, 'sg16_2_4_table');
	   _this.sprite.anchor.set(0.5);
        _this.sprite.scale.setTo(0.90,1);
         
            _this.group1=this.add.group();
            
          _this.group2.add(_this.sprite);
         
       _this.opt1=this.add.sprite(445,470,'sg16_2_4_wheel');
         _this.opt1.frame=8;
         _this.opt1.anchor.setTo(0.5,1);
         _this.opt1.scale.setTo(0.9,1);
         _this.opt1.name = "sg16_2_4_wheel8";
         _this.opt1.alpha=0.8;
         _this.opt1.value =10;
       
           _this.opt1.inputEnabled=true;
         _this.opt1.input.enableDrag(true);
          
          _this.sg16_2_4_box=this.add.sprite(840,250,'sg16_2_4_box');
         //_this.sg16_2_4_box.scale.setTo(0.85,0.65);
         _this.sg16_2_4_box.alpha=0; 
         _this.sg16_2_4_box.scale.setTo(1,1);
         _this.sg16_2_4_box.name="opt1sg16_2_4_box";
         
         this.addNumberPad();
       this.enablebuttons(_this.opt1.value);
          _this.sg16_2_4_box.alpha=1;
            _this.sg16_2_4_box.inputEnabled=true;

            console.log("sg16_2_4_box3");
            _this.sg16_2_4_boxclick=_this.sg16_2_4_box.name;

        
          //_this.group1.add(_this.sprite);
         _this.group1.add(_this.opt1);
          _this.group1.add(_this.sg16_2_4_box); 
         _this.addListeners();
            
         _this.group1.x=1000;
         _this.group2.x=1000;
          _this.tween=this.add.tween(_this.group2).to( { x: 0 }, 0, 'Linear', true,0);
        _this.tween=this.add.tween(_this.group1).to( { x: 0 }, 0, 'Linear', true,0);
       // tween.onComplete.add(this.addQuestion, this);
          
          
        _this.opt1.input.boundsRect = _this.bounds;  
        
        _this.tween.onComplete.add(function(){
  }, this);  
    },    
  /****************************************Tenthquestionsg16_2_4_circle*****************************/  
   gotoNinthQuestion:function(){

    	
         _this.Question = 9;
//         _this.no1++;
         console.log("nine");
        
        _this.bounds = new Phaser.Rectangle(151,85, 590, 397);
        
           _this.group2=this.add.group();
           _this.sprite = this.add.sprite(this.world.centerX-50, this.world.centerY-5, 'sg16_2_4_table');
	   _this.sprite.anchor.set(0.5);
        _this.sprite.scale.setTo(0.90,1);
         
            _this.group1=this.add.group();
            
          _this.group2.add(_this.sprite);
         
       _this.opt1=this.add.sprite(445,462,'sg16_2_4_circle');
         _this.opt1.frame=6;
         _this.opt1.anchor.setTo(0.5,1);
         _this.opt1.scale.setTo(0.9,1);
         _this.opt1.name = "sg16_2_4_circle11";
         _this.opt1.alpha=0.8;
         _this.opt1.value =5;
       
           _this.opt1.inputEnabled=true;
         _this.opt1.input.enableDrag(true);
          
          _this.sg16_2_4_box=this.add.sprite(840,250,'sg16_2_4_box');
         //_this.sg16_2_4_box.scale.setTo(0.85,0.65);
         _this.sg16_2_4_box.alpha=0; 
         _this.sg16_2_4_box.scale.setTo(1,1);
         _this.sg16_2_4_box.name="opt1sg16_2_4_box";
         
         this.addNumberPad();
       this.enablebuttons(_this.opt1.value);
          _this.sg16_2_4_box.alpha=1;
            _this.sg16_2_4_box.inputEnabled=true;

            console.log("sg16_2_4_box3");
            _this.sg16_2_4_boxclick=_this.sg16_2_4_box.name;

        
          //_this.group1.add(_this.sprite);
         _this.group1.add(_this.opt1);
          _this.group1.add(_this.sg16_2_4_box);  
         
            
         _this.group1.x=1000;
         _this.group2.x=1000;
          _this.tween=this.add.tween(_this.group2).to( { x: 0 }, 0, 'Linear', true,0);
        _this.tween=this.add.tween(_this.group1).to( { x: 0 }, 0, 'Linear', true,0);
       // tween.onComplete.add(this.addQuestion, this);

        _this.opt1.input.boundsRect = _this.bounds;
        
        _this.tween.onComplete.add(function(){
  }, this);  
    },
    /************************************Tenquestionsg16_2_4_circle***********************/
     gotoTenthQuestion:function(){

         _this.Question = 10;
//         _this.no1++;
         console.log("ten");
         
         _this.bounds = new Phaser.Rectangle(151,85, 590, 397);
         
           _this.group2=this.add.group();
           _this.sprite = this.add.sprite(this.world.centerX-50, this.world.centerY-5, 'sg16_2_4_table');
	   _this.sprite.anchor.set(0.5);
        _this.sprite.scale.setTo(0.90,1);
         
            _this.group1=this.add.group();
            
          _this.group2.add(_this.sprite);
         
       _this.opt1=this.add.sprite(445,463,'sg16_2_4_circle');
         _this.opt1.frame=8;
         _this.opt1.anchor.setTo(0.5,1);
         _this.opt1.scale.setTo(0.9,1);
         _this.opt1.name = "sg16_2_4_circle12";
         _this.opt1.alpha=0.8;
         _this.opt1.value =10;
       
           _this.opt1.inputEnabled=true;
         _this.opt1.input.enableDrag(true);
          
          _this.sg16_2_4_box=this.add.sprite(840,250,'sg16_2_4_box');
         //_this.sg16_2_4_box.scale.setTo(0.85,0.65);
         _this.sg16_2_4_box.alpha=0; 
         _this.sg16_2_4_box.scale.setTo(1,1);
         _this.sg16_2_4_box.name="opt1sg16_2_4_box";
         
         this.addNumberPad();
       this.enablebuttons(_this.opt1.value);
          _this.sg16_2_4_box.alpha=1;
            _this.sg16_2_4_box.inputEnabled=true;

            console.log("sg16_2_4_box3");
            _this.sg16_2_4_boxclick=_this.sg16_2_4_box.name;

        
          //_this.group1.add(_this.sprite);
         _this.group1.add(_this.opt1);
          _this.group1.add(_this.sg16_2_4_box);  
         
            
         _this.group1.x=1000;
         _this.group2.x=1000;
          _this.tween=this.add.tween(_this.group2).to( { x: 0 }, 0, 'Linear', true,0);
        _this.tween=this.add.tween(_this.group1).to( { x: 0 }, 0, 'Linear', true,0);
       // tween.onComplete.add(this.addQuestion, this);

         _this.opt1.input.boundsRect = _this.bounds; 
         
        _this.tween.onComplete.add(function(){
  }, this);  
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
        //_this.speaker.inputEnabled=false;
       _this.no1++;
        if(_this.Question==1)
        {
            _this.opt1.frame =4;
        }
        else if(_this.Question==2)
            {
                _this.opt1.frame=9;
            }
        else if(_this.Question==3)
            {
                _this.opt1.frame=2;
            }
        else if(_this.Question==4)
            {
                _this.opt1.frame=7;
            }
         else if(_this.Question==5)
            {
                _this.opt1.frame=9;
            }
        /************************************************/
        else if(_this.Question==6)
            {
                _this.opt1.frame=2;
            }
        else if(_this.Question==7)
            {
                _this.opt1.frame=4;
            }
        else if(_this.Question==8)
            {
                _this.opt1.frame=9;
            }
         /*else if(_this.Question==8)
            {
                _this.opt1.frame=4;
                
            }*/
         else if(_this.Question==9)
            {
                _this.opt1.frame=7;
            }
         else if(_this.Question==10)
            {
                _this.opt1.frame=9;
            }
       
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
           		
        
        _this.sg16_2_4_rightBtn.events.onInputDown.removeAll();
       _this.wrongbtn.events.onInputDown.removeAll();
        _this.sg16_2_4_box.events.onInputDown.removeAll();

        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }

        _this.questionid=1;
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
				this.state.start('sg16_2_4Score');
                 },this);
			}

	},
    
	changeQuestion:function()
	{
        _this.group1.destroy();
        _this.group2.destroy();
       // _this.sprite.destroy();
        _this.counterText2.destroy();
       // _this.sprite.destroy();
       
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
	},

    update:function(){

    },

    
    getVoice:function(){
       
        _this.stopVoice();	
        _this.playQuestionSound = document.createElement('audio');
                    _this.src = document.createElement('source');
        console.log("voice: "+_this.qArrays[_this.no1])
        console.log("voice2: "+_this.qArrays1[_this.no1])
        switch(_this.questionArrayMain[_this.no1])
        {
            case 1: 
            case 2:
                 if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/English/sg16.2.4d.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Hindi/sg16.2.4d.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Kannada/sg16.2.4d.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Gujrati/sg16.2.4d.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Marathi/sg16.2.4d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Telugu/sg16.2.4d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Tamil/sg16.2.4d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Urdu/sg16.2.4d.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Odiya/sg16.2.4d.mp3");  
                    }
                break;
            case 3:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/English/sg16.2.4a.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Hindi/sg16.2.4a.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Kannada/sg16.2.4a.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Gujrati/sg16.2.4a.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Marathi/sg16.2.4a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Telugu/sg16.2.4a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Tamil/sg16.2.4a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Urdu/sg16.2.4a.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Odiya/sg16.2.4a.mp3");
                        
                    }
                break;
            case 4:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/English/sg16.2.4a.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Hindi/sg16.2.4a.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Kannada/sg16.2.4a.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Gujrati/sg16.2.4a.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Marathi/sg16.2.4a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Telugu/sg16.2.4a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Tamil/sg16.2.4a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Urdu/sg16.2.4a.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Odiya/sg16.2.4a.mp3");
                        
                    }
                break;
            case 5:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/English/sg16.2.4c.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Hindi/sg16.2.4c.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Kannada/sg16.2.4c.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Gujrati/sg16.2.4c.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Marathi/sg16.2.4c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Telugu/sg16.2.4c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Tamil/sg16.2.4c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Urdu/sg16.2.4c.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Odiya/sg16.2.4c.mp3");  
                    }
                break;
            case 6:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/English/sg16.2.4b.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Hindi/sg16.2.4b.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Kannada/sg16.2.4b.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Gujrati/sg16.2.4b.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Marathi/sg16.2.4b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Telugu/sg16.2.4b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Tamil/sg16.2.4b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Urdu/sg16.2.4b.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Odiya/sg16.2.4b.mp3");  
                    }
                break;
            case 7:
            case 8:
                    if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/English/sg16.2.4d.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Hindi/sg16.2.4d.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Kannada/sg16.2.4d.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Gujrati/sg16.2.4d.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Marathi/sg16.2.4d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Telugu/sg16.2.4d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Tamil/sg16.2.4d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Urdu/sg16.2.4d.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Odiya/sg16.2.4d.mp3");  
                    }
                break;
            case 9:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/English/sg16.2.4a.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Hindi/sg16.2.4a.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Kannada/sg16.2.4a.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Gujrati/sg16.2.4a.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Marathi/sg16.2.4a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Telugu/sg16.2.4a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Tamil/sg16.2.4a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Urdu/sg16.2.4a.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Odiya/sg16.2.4a.mp3");
                        
                    }
                break;
            case 10:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/English/sg16.2.4c.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Hindi/sg16.2.4c.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Kannada/sg16.2.4c.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Gujrati/sg16.2.4c.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Marathi/sg16.2.4c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Telugu/sg16.2.4c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Tamil/sg16.2.4c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Urdu/sg16.2.4c.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.2.4/Odiya/sg16.2.4c.mp3");
                        
                    }
                break;
        }
        _this.playQuestionSound.appendChild(_this.src);
                    _this.playQuestionSound.play();
    },
    
    addNumberPad:function(){
        
        _this.numGroup = this.add.group();
        var x = 120;

        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(x,510,'sg16_2_4_calNum'); 
            _this.numbg.frame=i;
            _this.grpnum.push(_this.numbg);
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.5,0.5);
            _this.numbg.name = i;
            _this.numbg.inputEnabled = true;
         //   numbg.input.useHandCursor = false;
            _this.numbg.events.onInputDown.add(this.numClicked,this);
            x+=60;
        }
        
        
        _this.counterText2 = this.add.text(35,35, _this.selectedAns3="");
        _this.counterText2.anchor.setTo(0.5);
        _this.counterText2.align = 'center';
         _this.counterText2.font = 'myfont';
        _this.counterText2.fontWeight = 'Normal';
        _this.counterText2.fontSize = 45;
        _this.counterText2.fill = '#65B4C3';
        _this.counterText2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.sg16_2_4_box.addChild(_this.counterText2);
        
        
        
     //   txtsg16_2_4_box = this.add.sprite(x+50,508,'sg16_2_4_box');
     //   txtsg16_2_4_box.anchor.setTo(0.5);
      //  txtsg16_2_4_box.name = "txtsg16_2_4_box";
        
        _this.wrongbtn = _this.numGroup.create(x+60,510,'sg16_2_4_eraser');
        _this.wrongbtn.anchor.setTo(0.5);
       _this.wrongbtn.scale.setTo(0.5,0.5);
        _this.wrongbtn.name = "wrongbtn";

        _this.sg16_2_4_rightBtn =_this.numGroup.create(x+110,510,'sg16_2_4_rightBtn');
        _this.sg16_2_4_rightBtn.anchor.setTo(0.5);
        _this.sg16_2_4_rightBtn.scale.setTo(0.5,0.5);
        _this.sg16_2_4_rightBtn.name = "sg16_2_4_rightBtn";
       
       // _this.numGroup.add(_this.sg16_2_4_box);
    },
    
    numClicked:function(target){
        _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
        if(_this.sg16_2_4_boxclick=="opt1sg16_2_4_box")
        {
            console.log("option1"+_this.selectedAns3);
            if(_this.selectedAns3.length<2)
            {
                console.log("in thirddd");
                _this.selectedAns3+= target.name;
                console.log("third one");
                _this.counterText2.setText(_this.selectedAns3);
                //numGroup.getByName("opt1sg16_2_4_box").getChildAt(0).setText(selectedAns3);
                
            }
        }
        
        
        
    },
    
   enablebuttons:function(rightAns1){
        

        console.log("opt1 value==="+rightAns1);
//       _this.vibe=this.add.group();
//       _this.vibe.add(_this.opt1);
//       _this.vibe.add(_this.sg16_2_4_box);
            
        for(var i=0;i<10;i++)
        {
            _this.grpnum[i].inputEnabled=true;
            _this.grpnum[i].input.useHandCursor=true;
        }
        _this.wrongbtn.inputEnabled = true;
       _this.wrongbtn.input.useHandCursor = true;
        _this.sg16_2_4_rightBtn.inputEnabled = true;
        _this.sg16_2_4_rightBtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(function(){
            console.log("erase"+_this.sg16_2_4_boxclick);
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.wrongbtn.frame=1;
            if(_this.sg16_2_4_boxclick=="opt1sg16_2_4_box")
            {
                _this.selectedAns3="";
                _this.counterText2.setText("");
            }
            
        },this);
        _this.wrongbtn.events.onInputUp.add(function(target){
           target.frame=0;
       }, this)
        _this.sg16_2_4_rightBtn.events.onInputDown.add(function(target){

          _this.noofAttempts++;
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            target.frame=1;
            if((_this.selectedAns3==rightAns1||_this.selectedAns3=="0"+rightAns1))
            {
                this.correctAns();
            }
            else 
            {
                 
                 _this.wmusic = _this.add.audio('waudio');
		   _this.wmusic.play();
                  
                _this.flag;
                    _this.selectedAns3 = "";
                    _this.counterText2.setText("");
                console.log("wrongbutton");
                
                  
                      _this.shake.shake(10,_this.group1); 
                //_this.shake2.shake(10,_this.opt1);
            }
                   

              //  _this.numGroup.add(_this.sg16_2_4_box);
              
            
            
        },this);
        _this.sg16_2_4_rightBtn.events.onInputUp.add(function(target){
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
        sg16_2_4_rightBtn.events.onInputDown.removeAll();
        wrongbtn.events.onInputDown.removeAll();
        opt1.events.onInputDown.removeAll();
        opt2.events.onInputDown.removeAll();
        opt3.events.onInputDown.removeAll();
       // numGroup.inputEnabled=false;
        //sg16_2_4_boxclick='';
    }*/
    
};