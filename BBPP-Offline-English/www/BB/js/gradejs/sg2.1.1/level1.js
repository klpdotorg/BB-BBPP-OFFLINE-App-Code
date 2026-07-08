Game.sg2_1_1level1=function(){};


Game.sg2_1_1level1.prototype={

    init:function(game)
    {
        _this = this;
        //_this.gameid = "3.1";
        
        telInitializer.gameIdInit("SG2_1_1",gradeSelected);
      
    },

    preload:function(game){
        if(!window.grade1SG2){

            window.grade1SG2 = true;

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

        this.load.atlas('sg2_1_1roll',window.baseUrl+'assets/gradeAssets/sg2.1.1/roll.png',window.baseUrl+'json/gradeJson/sg2.1.1/roll.json');
        this.load.atlas('sg2_1_1slide',window.baseUrl+'assets/gradeAssets/sg2.1.1/slide.png',window.baseUrl+'json/gradeJson/sg2.1.1/slide.json');
        this.load.atlas('sg2_1_1orange-anim',window.baseUrl+'assets/gradeAssets/sg2.1.1/orange-anim.png',window.baseUrl+'json/gradeJson/sg2.1.1/orange-anim.json');
        this.load.atlas('sg2_1_1redball-anim',window.baseUrl+'assets/gradeAssets/sg2.1.1/redball-anim.png',window.baseUrl+'json/gradeJson/sg2.1.1/redball-anim.json');
        this.load.atlas('sg2_1_1watermelon-anim',window.baseUrl+'assets/gradeAssets/sg2.1.1/watermelon-anim.png',window.baseUrl+'json/gradeJson/sg2.1.1/watermelon-anim.json'); 
        this.load.atlas('sg2_1_1egg-anim',window.baseUrl+'assets/gradeAssets/sg2.1.1/egg-anim.png',window.baseUrl+'json/gradeJson/sg2.1.1/egg-anim.json');
        this.load.atlas('sg2_1_1rollingpin-anim',window.baseUrl+'assets/gradeAssets/sg2.1.1/rollingpin-anim.png',window.baseUrl+'json/gradeJson/sg2.1.1/rollingpin-anim.json');
        this.load.atlas('sg2_1_1tire-anim',window.baseUrl+'assets/gradeAssets/sg2.1.1/tire-anim.png',window.baseUrl+'json/gradeJson/sg2.1.1/tire-anim.json');
        
        this.load.atlas('sg2_1_1breadglow',window.baseUrl+'assets/gradeAssets/sg2.1.1/bread-glow.png',window.baseUrl+'json/gradeJson/sg2.1.1/bread-glow.json');
        this.load.atlas('sg2_1_1eraserglow',window.baseUrl+'assets/gradeAssets/sg2.1.1/eraser-glow.png',window.baseUrl+'json/gradeJson/sg2.1.1/eraser-glow.json');
        this.load.atlas('sg2_1_1giftboxglow',window.baseUrl+'assets/gradeAssets/sg2.1.1/giftbox-glow.png',window.baseUrl+'json/gradeJson/sg2.1.1/giftbox-glow.json');
        this.load.atlas('sg2_1_1keyglow',window.baseUrl+'assets/gradeAssets/sg2.1.1/key-glow.png',window.baseUrl+'json/gradeJson/sg2.1.1/key-glow.json');
        this.load.atlas('sg2_1_1shoeglow',window.baseUrl+'assets/gradeAssets/sg2.1.1/shoe-glow.png',window.baseUrl+'json/gradeJson/sg2.1.1/shoe-glow.json');
        this.load.atlas('sg2_1_1spannerglow',window.baseUrl+'assets/gradeAssets/sg2.1.1/spanner-glow.png',window.baseUrl+'json/gradeJson/sg2.1.1/spanner-glow.json');
                
        this.load.atlas('sg2_1_1orangeanimglow',window.baseUrl+'assets/gradeAssets/sg2.1.1/orange-animglow.png',window.baseUrl+'json/gradeJson/sg2.1.1/orange-animglow.json');
        this.load.atlas('sg2_1_1redballanimglow',window.baseUrl+'assets/gradeAssets/sg2.1.1/redball-animglow.png',window.baseUrl+'json/gradeJson/sg2.1.1/redball-animglow.json');
        this.load.atlas('sg2_1_1watermelonanimglow',window.baseUrl+'assets/gradeAssets/sg2.1.1/watermelon-animglow.png',window.baseUrl+'json/gradeJson/sg2.1.1/watermelon-animglow.json');
        this.load.atlas('sg2_1_1egganimglow',window.baseUrl+'assets/gradeAssets/sg2.1.1/egg-animglow.png',window.baseUrl+'json/gradeJson/sg2.1.1/egg-animglow.json');
        this.load.atlas('sg2_1_1rollingpinanimglow',window.baseUrl+'assets/gradeAssets/sg2.1.1/rollingpin-animglow.png',window.baseUrl+'json/gradeJson/sg2.1.1/rollingpin-animglow.json');
        this.load.atlas('sg2_1_1tireanimglow',window.baseUrl+'assets/gradeAssets/sg2.1.1/tire-animglow.png',window.baseUrl+'json/gradeJson/sg2.1.1/tire-animglow.json');


    }

    },


	create:function(game){

        _this.amplify = null;
        
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer1 = null;
        _this.rollingSound;
        _this.slidingSound;

		_this.noofAttempts=0;
		_this.AnsTimerCount=0;
        _this.sceneCount = 0;
        _this.soundPlayed = false;
		
       // baudio.play(); 
		//baudio.loopFull(0.6);
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12]; 
        _this.qArrays = _this.shuffle(_this.qArrays);
        
        _this.no1=0;
        _this.no2=0;
        _this.count1=0;
        _this.count=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'commonBg2');
        //_this.bg1.scale.setTo(1.05,1.12);
		
        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="sg2_1_1navBar";
        _this.TopBar.scale.setTo(1,1.1);
        
        _this.backbtn = this.add.button(-3,3,'newCommonBackBtnForAll',function(){console.log("here");},_this,0,1,2);
        //_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;


        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            if(grade2Selected == false)
                _this.state.start('grade1levelSelectionScreen',true,false); 
            else
                _this.state.start('grade2levelSelectionScreen',true,false); 

        },_this);

         _this.speakerbtn = this.add.button(595,7,'grade11_speaker',function(){},this,1,0,2);
       //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);

        _this.timebg=this.add.sprite(305,9,'Level42C_timer');
        _this.timebg.name="common_timebg";
        _this.timebg.scale.setTo(1,1);


            _this.timeDisplay = this.add.text(331,25,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';

         _this.generateStarsForTheScene(6);
        
         _this.getQuestion();
        
        
    },
    addQuestion:function(no2)
    {
           ////console.log("here");
        
                _this.time.events.add(200, function(){
                var tween = _this.add.tween(_this.flagGroup1);
           tween.to({ x: -1000 }, 0,'Linear', true, 0);
           tween.onComplete.add(_this.changeQuestion, _this);


            }, _this);
            
    },
               
     gotoFirstQuestion:function(){

    	//_this.no1++;
         
         
         _this.time.events.add(1600, function(){
         if(_this.soundPlayed == false)                         
         {_this.getVoice();                          
          _this.soundPlayed=true;                         
         }
         },_this);
         
         _this.slidingSound = _this.add.audio('slide');
         _this.slidingSound.play();
         
        
    	_this.mainFlag = _this.add.sprite(460,210,'sg2_1_1breadglow'); //330,303,'sg2_1_1bread'
    	_this.mainFlag.anchor.setTo(0.5);
         _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'sg2_1_1bread';
        //_this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         
    	_this.opt1 = _this.add.sprite(550,430,'sg2_1_1roll');
        _this.opt1.name = "sg2_1_1roll";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.9,0.9);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
         
        _this.opt2 = _this.add.sprite(390,430,'sg2_1_1slide');  //740,360,'sg2_1_1slide'
        _this.opt2.name = "sg2_1_1slide";
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.9,0.9);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);


    	_this.flagGroup1 = _this.add.group();
         
    	_this.flagGroup1.add(_this.mainFlag);
        
    	_this.flagGroup1.x = -500;
         var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);
        

        tween.onComplete.add(function(){

     }, _this);    
        
    },
    
     gotoSecondQuestion:function(){

    	//_this.no1++;
         
          _this.time.events.add(1600, function(){
         if(_this.soundPlayed == false)                         
         {_this.getVoice();                          
          _this.soundPlayed=true;                         
         }
         },_this);
   
         _this.slidingSound = _this.add.audio('slide');
         _this.slidingSound.play();
         
       // _this.sh1 = _this.add.sprite(340,414,'Level31_sh1');
        //_this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(460,210,'sg2_1_1eraserglow');
        _this.mainFlag.name = "sg2_1_1eraser";
    	_this.mainFlag.anchor.setTo(0.5);
         _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        //_this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
    	_this.opt1 = _this.add.sprite(550,430,'sg2_1_1roll');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.9,0.9);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
         _this.opt1.name = 'sg2_1_1roll';
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.opt2 = _this.add.sprite(390,430,'sg2_1_1slide');  //740,360,'sg2_1_1slide'
        _this.opt2.name = "sg2_1_1slide";
    	_this.opt2.anchor.setTo(0.5);
         _this.opt2.scale.setTo(0.9,0.9);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);


    	_this.flagGroup1 = _this.add.group();

    	     
    	_this.flagGroup1.add(_this.mainFlag);
        
    	_this.flagGroup1.x = -500;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
        
    },
    
    gotoThirdQuestion:function(){

    	//_this.no1++;
        
        _this.time.events.add(1600, function(){
         if(_this.soundPlayed == false)                         
         {_this.getVoice();                          
          _this.soundPlayed=true;                         
         }
         },_this);
   
        _this.slidingSound = _this.add.audio('slide');
         _this.slidingSound.play();
        
         
    	_this.opt1 = _this.add.sprite(550,430,'sg2_1_1roll');
    	_this.opt1.anchor.setTo(0.5);
         _this.opt1.scale.setTo(0.9,0.9);
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'sg2_1_1roll';
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.opt2 = _this.add.sprite(390,430,'sg2_1_1slide');  //740,360,'sg2_1_1slide'
        _this.opt2.name = "sg2_1_1slide";
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.9,0.9);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
                
    	_this.mainFlag = _this.add.sprite(460,210,'sg2_1_1giftboxglow');
        _this.mainFlag.name = "sg2_1_1giftbox";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        //_this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         
       
    	_this.flagGroup1 = _this.add.group();

    	  
    	_this.flagGroup1.add(_this.mainFlag);

    	_this.flagGroup1.x = -500;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
        
    },
    
     gotoFourthQuestion:function(){

    	//_this.no1++;
         
         _this.time.events.add(1600, function(){
         if(_this.soundPlayed == false)                         
         {_this.getVoice();                          
          _this.soundPlayed=true;                         
         }
         },_this);
         
         _this.slidingSound = _this.add.audio('slide');
         _this.slidingSound.play();
         
         
    	_this.opt1 = _this.add.sprite(550,430,'sg2_1_1roll');
        _this.opt1.name = "sg2_1_1roll";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.9,0.9);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
         
         _this.opt2 = _this.add.sprite(390,430,'sg2_1_1slide');  //740,360,'sg2_1_1slide'
        _this.opt2.name = "sg2_1_1slide";
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.9,0.9);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
         
    	_this.mainFlag = _this.add.sprite(460,210,'sg2_1_1keyglow');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'sg2_1_1key';
       // _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         
       
    	_this.flagGroup1 = _this.add.group();

    	 
    	_this.flagGroup1.add(_this.mainFlag);

    	_this.flagGroup1.x = -500;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
        
    },
    
    gotoFifthQuestion:function(){

    	//_this.no1++;
        
         _this.time.events.add(1600, function(){
         if(_this.soundPlayed == false)                         
         {_this.getVoice();                          
          _this.soundPlayed=true;                         
         }
         },_this);
        
        _this.slidingSound = _this.add.audio('slide');
         _this.slidingSound.play();
         
    	_this.mainFlag = _this.add.sprite(460,210,'sg2_1_1shoeglow');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'sg2_1_1shoe';
        //_this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
    	_this.opt1 = _this.add.sprite(550,430,'sg2_1_1roll');
        _this.opt1.name = "sg2_1_1roll";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.9,0.9);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.opt2 = _this.add.sprite(390,430,'sg2_1_1slide');  //740,360,'sg2_1_1slide'
        _this.opt2.name = "sg2_1_1slide";
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.9,0.9);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);

    	_this.flagGroup1 = _this.add.group();

    	     
    	_this.flagGroup1.add(_this.mainFlag);
        
    	_this.flagGroup1.x = -500;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
        
    },
    
    gotoSixthQuestion:function(){

    	//_this.no1++;
      
        _this.time.events.add(1600, function(){
        if(_this.soundPlayed == false)                         
        {_this.getVoice();                          
         _this.soundPlayed=true;                         
        }
         },_this);
   
       _this.slidingSound = _this.add.audio('slide');
         _this.slidingSound.play();
         
        
    	_this.mainFlag = _this.add.sprite(460,210,'sg2_1_1spannerglow');
        _this.mainFlag.name = "sg2_1_1spanner";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        //_this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
       
    	_this.opt1 = _this.add.sprite(550,430,'sg2_1_1roll');
        _this.opt1.name = "sg2_1_1roll";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.9,0.9);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.opt2 = _this.add.sprite(390,430,'sg2_1_1slide');  //740,360,'sg2_1_1slide'
        _this.opt2.name = "sg2_1_1slide";
    	_this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.9,0.9);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);


    	_this.flagGroup1 = _this.add.group();

    	     
    	_this.flagGroup1.add(_this.mainFlag);
        
    	_this.flagGroup1.x = -500;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
        
    },
    
     gotoSeventhQuestion:function(){

    	//_this.no1++;
          _this.time.events.add(3000, function(){
           if(_this.soundPlayed == false)                         
           {_this.getVoice();                          
            _this.soundPlayed=true;                         
           }
           },_this);
         
        
         _this.rollingSound = _this.add.audio('roll');
         _this.rollingSound.play();
          
         
         
         _this.anim1 = _this.mainFlag.animations.add('roll');
        _this.anim1.play(10, true);
        
        
    	_this.opt1 = _this.add.sprite(550,430,'sg2_1_1roll');
        _this.opt1.name = "sg2_1_1roll";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.9,0.9);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt2 = _this.add.sprite(390,430,'sg2_1_1slide');  //740,360,'sg2_1_1slide'
        _this.opt2.name = "sg2_1_1slide";
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.9,0.9);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
         
        
    	_this.flagGroup1 = _this.add.group();

    	  
    	_this.flagGroup1.add(_this.mainFlag);
      
    	_this.flagGroup1.x = -500;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 2500,'Linear', true, 100);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){
             _this.anim1.stop(null, true);
            _this.mainFlag.frame = 0;
     }, _this); 
        
    },
    
    gotoEighthQuestion:function(){

    	//_this.no1++;
          _this.time.events.add(3000, function(){
           if(_this.soundPlayed == false)                         
           {_this.getVoice();                          
            _this.soundPlayed=true;                         
           }
           },_this);
        
        _this.rollingSound = _this.add.audio('roll');
         _this.rollingSound.play();
        
        _this.anim1 = _this.mainFlag.animations.add('roll');
        _this.anim1.play(10, true);
        
    	_this.opt1 = _this.add.sprite(550,430,'sg2_1_1roll');
        _this.opt1.name = "sg2_1_1roll";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.9,0.9);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt2 = _this.add.sprite(390,430,'sg2_1_1slide');  //740,360,'sg2_1_1slide'
        _this.opt2.name = "sg2_1_1slide";
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.9,0.9);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

    	_this.flagGroup1 = _this.add.group();

    	     
    	_this.flagGroup1.add(_this.mainFlag);
        
    	_this.flagGroup1.x = -500;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 2500,'Linear', true, 100);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){
             _this.anim1.stop(null, true);
            _this.mainFlag.frame = 0;
     }, _this);
    
        
    },
    
       gotoNinethQuestion:function(){

    	//_this.no1++;
            _this.time.events.add(3000, function(){
           if(_this.soundPlayed == false)                         
           {_this.getVoice();                          
            _this.soundPlayed=true;                         
           }
           },_this);
           
           _this.rollingSound = _this.add.audio('roll');
         _this.rollingSound.play();
   
           _this.anim1 = _this.mainFlag.animations.add('roll');
        _this.anim1.play(10, true);
              
    	_this.opt1 = _this.add.sprite(550,430,'sg2_1_1roll');
        _this.opt1.name = "sg2_1_1roll";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.9,0.9);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt2 = _this.add.sprite(390,430,'sg2_1_1slide');  //740,360,'sg2_1_1slide'
        _this.opt2.name = "sg2_1_1slide";
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.9,0.9);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
           
    	_this.flagGroup1.y = -500;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ y: 0 }, 2500,'Linear', true, 100);
        //tween.onComplete.add(_this.addQuestion, _this);
           
        
        tween.onComplete.add(function(){
             _this.anim1.stop(null, true);
            _this.mainFlag.frame = 0;
     }, _this);
    
       },
    
       gotoTenthQuestion:function(){

    	//_this.no1++;
            _this.time.events.add(3000, function(){
           if(_this.soundPlayed == false)                         
           {_this.getVoice();                          
            _this.soundPlayed=true;                         
           }
           },_this);
           
           _this.rollingSound = _this.add.audio('roll');
         _this.rollingSound.play();
           
           _this.anim1 = _this.mainFlag.animations.add('roll');
        _this.anim1.play(10, true);
         
    	_this.opt1 = _this.add.sprite(550,430,'sg2_1_1roll');
        _this.opt1.name = "sg2_1_1roll";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.9,0.9);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt2 = _this.add.sprite(390,430,'sg2_1_1slide');  //740,360,'sg2_1_1slide'
        _this.opt2.name = "sg2_1_1slide";
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.9,0.9);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

    	_this.flagGroup1 = _this.add.group();

    	    
    	_this.flagGroup1.add(_this.mainFlag);
        
    	_this.flagGroup1.y = -500;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ y: 0 }, 2500,'Linear', true, 100);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){
             _this.anim1.stop(null, true);
            _this.mainFlag.frame = 0;
     }, _this);
        
       },
    
    gotoEleventhQuestion:function(){

    	//_this.no1++;
           _this.time.events.add(3000, function(){
           if(_this.soundPlayed == false)                         
           {_this.getVoice();                          
            _this.soundPlayed=true;                         
           }
           },_this);
        
          _this.rollingSound = _this.add.audio('roll');
          _this.rollingSound.play();

        _this.anim1 = _this.mainFlag.animations.add('roll');
        _this.anim1.play(10, true);
         
         
    	_this.opt1 = _this.add.sprite(550,430,'sg2_1_1roll');
        _this.opt1.name = "sg2_1_1roll";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.9,0.9);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt2 = _this.add.sprite(390,430,'sg2_1_1slide');  //740,360,'sg2_1_1slide'
        _this.opt2.name = "sg2_1_1slide";
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.9,0.9);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
        
    	_this.flagGroup1 = _this.add.group();

    	 
    	_this.flagGroup1.add(_this.mainFlag);

    	_this.flagGroup1.y = -500;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ y: 0 }, 2500,'Linear', true, 100);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){
             _this.anim1.stop(null, true);
            _this.mainFlag.frame = 0;
     }, _this);
     },
    
    gotoTwevelvethQuestion:function(){

    	//_this.no1++;
         _this.time.events.add(3000, function(){
           if(_this.soundPlayed == false)                         
           {_this.getVoice();                          
            _this.soundPlayed=true;                         
           }
           },_this);
         
         _this.rollingSound = _this.add.audio('roll');
         _this.rollingSound.play();
        
        _this.anim1 = _this.mainFlag.animations.add('roll');
        _this.anim1.play(10, true);
        
    	_this.opt1 = _this.add.sprite(550,430,'sg2_1_1roll');
        _this.opt1.name = "sg2_1_1roll";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.9,0.9);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
      
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt2 = _this.add.sprite(390,430,'sg2_1_1slide');  //740,360,'sg2_1_1slide'
        _this.opt2.name = "sg2_1_1slide";
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.9,0.9);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
      
    	_this.flagGroup1 = _this.add.group();

    	  
    	_this.flagGroup1.add(_this.mainFlag);
 
         
    	_this.flagGroup1.x = -500;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 2500,'Linear', true, 100);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){
             _this.anim1.stop(null, true);
            _this.mainFlag.frame = 0;
     }, _this);
     },
    
        
     updateTimer:function() {
     _this.counterForTimer++;
     //console.log("lololil"+counterForTimer);
     if(_this.counterForTimer>59)
         {
             _this.counterForTimer = 0;
             if(_this.minutes<10){
                 this.minutes =  this.minutes+1;
                 _this.seconds = 00;
             }
             else{
                 this.minutes =  this.minutes+1;
                   
                 }
         }
    else{
            if (_this.counterForTimer < 10)        
             this.seconds = '0' + this.counterForTimer;
            else
                this.seconds = this.counterForTimer;
        }
     this.timeDisplay.setText(_this.minutes+':' + this.seconds);
 
//timer.setText(minutes + ':'+ seconds );
},
    
       getQuestion:function(target)
     {
        _this.noofAttempts = 0;
		_this.AnsTimerCount = 0;
        _this.sceneCount++;
		_this.timer = _this.time.create(false);
         _this.obj1Array = [];
         
		//  Set a TimerEvent to occur after 2 seconds
		_this.timer.loop(1000, function(){
			_this.AnsTimerCount++;
		}, _this);

		//  Start the _this.timer running - _this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		_this.timer.start();


        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
        _this.timer1.start();
		
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
    	console.log("get"+_this.no1);
    	console.log("get!!!!!!!!!!!!! "+_this.qArrays[_this.no1]);
    	switch(_this.qArrays[_this.no1])
    // switch(_this.no1)
    	{
    		case 1: 
                    _this.questionid = 1;
                    _this.gotoFirstQuestion();
    				break;
    		case 2: 
                    _this.questionid = 2;
                    _this.gotoSecondQuestion();
    				break;
    		case 3: 
                    _this.questionid = 3;
                    _this.gotoThirdQuestion();
    				break;
    		case 4: 
                    _this.questionid = 4;
                    _this.gotoFourthQuestion();
    				break;
    		case 5: 
                    _this.questionid = 5;
                    _this.gotoFifthQuestion();
    				break;
    		case 6: 
                    _this.questionid = 6;
                    _this.gotoSixthQuestion();
    				break;
    		case 7: 
                    _this.questionid = 7;
                    _this.obj1Array = ['sg2_1_1orange-anim',460,210,"orange"];
                    _this.gotoQuestion(_this.obj1Array);
                    _this.gotoSeventhQuestion();
    				break;
            case 8: 
                    _this.questionid = 8;
                    _this.obj1Array = ['sg2_1_1redball-anim',460,210,"redball"];
                    _this.gotoQuestion(_this.obj1Array);
                    _this.gotoEighthQuestion();
    				break;
            case 9: 
                    _this.questionid = 9;
                    _this.obj1Array = ['sg2_1_1watermelon-anim',460,210,"watermelon"];
                    _this.gotoQuestion(_this.obj1Array);
                    _this.gotoNinethQuestion();
    				break;
            case 10: 
                    _this.questionid = 10;
                    _this.obj1Array = ['sg2_1_1egg-anim',460,210,"egg"];
                    _this.gotoQuestion(_this.obj1Array);
                    _this.gotoTenthQuestion();
    				break;
            case 11: 
                    _this.questionid = 11;
                    _this.obj1Array = ['sg2_1_1rollingpin-anim',460,210,"rollingpin"];
                    _this.gotoQuestion(_this.obj1Array);
                    _this.gotoEleventhQuestion();
    				break;
            case 12: 
                    _this.questionid = 12;
                    _this.obj1Array = ['sg2_1_1tire-anim',460,210,"tire"];
                    _this.gotoQuestion(_this.obj1Array);
                    _this.gotoTwevelvethQuestion();
    				break;
            
    }
    


     },
    
    gotoQuestion:function(obj1Array,obj2Array)
    {
        _this.mainFlag = _this.add.sprite(obj1Array[1],obj1Array[2],obj1Array[0]);
        _this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.name = obj1Array[3];
        _this.mainFlag.key = obj1Array[4];
        
    },
    
   // nothing:function(){
        
  //  },
    
    
    shuffle:function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        //While there remain elements to _this.shuffle...
        while (0 !== currentIndex) {
            
        //Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        //And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
},
    
    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            _this.starsGroup.create(_this.world.centerX-15, 12, 'starAnim1');
            
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
        _this.mainFlag.frame = 1;
		_this.noofAttempts++;
    
        console.log("correctAns"+target);
        console.log("correctAns"+target.name);
        target.events.onInputDown.removeAll();
                
			var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar,
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);

		if(_this.timer)
            {
                _this.timer.stop();
                _this.timer = null;
            }

        if(_this.timer1)
            {
                _this.timer1.stop();
                _this.timer1 = null;
            }

		var currentTime = window.timeSaveFunc();
				var saveAsment = 
				{ 
					id_game_play: _this.savedVar,
					id_question: _this.questionid,   
					pass: "Yes",
					time2answer: _this.AnsTimerCount,
					attempts: _this.noofAttempts,
					date_time_submission: currentTime, 
					access_token: window.acctkn 
				}
			
		//absdsjsapi.saveAssessment(saveAsment);

        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
		
		////console.log("correct");
        ////console.log("falseobject");
        _this.speakerbtn.inputEnabled=false; 
        //_this.mainFlag.inputEnabled = false;
        _this.opt1.inputEnabled = false;
        _this.opt2.inputEnabled = false;

        ////console.log(target.name);
        //_this.mainFlag.name = "";
        _this.opt1.name = "";
        _this.opt2.name = "";
        target.name = "rightAnswer";

        _this.animlev1 =target.animations.add('flag1');
        _this.animlev1.play(10,false);
        //target.frame=1;
        _this.time.events.add(1500, function(){
           _this.falling();
        },_this);
        
		celebration = true;
		_this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
                       
        cmusic = _this.add.audio('celebr');
		cmusic.play();

		////console.log(target);
        //target.tint = 0xA9A9A9;
        
        var starAnim = _this.starsGroup.getChildAt(_this.count1);
		////console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play(); 
        
   		target.events.onInputDown.removeAll();
           
        if(_this.questionid === 7){
            _this.mainFlag.loadTexture('sg2_1_1orangeanimglow', 0, false);
            
        }
        else if(_this.questionid === 8){
            _this.mainFlag.loadTexture('sg2_1_1redballanimglow', 0, false);
            
        }
        else if(_this.questionid === 9){
            _this.mainFlag.loadTexture('sg2_1_1watermelonanimglow', 0, false);
            
        }
        else if(_this.questionid === 10){
            _this.mainFlag.loadTexture('sg2_1_1egganimglow', 0, false);
              
        }
        else if(_this.questionid === 11){
            _this.mainFlag.loadTexture('sg2_1_1rollingpinanimglow', 0, false);
             
        }
        else if(_this.questionid === 12){
            _this.mainFlag.loadTexture('sg2_1_1tireanimglow', 0, false);
            
        }
	},
    
    falling:function(target){
         console.log("Fallingggggggggggggggggggggggggggg");
         //console.log(_this.opt1.name);
        if(_this.opt1.name=="rightAnswer")
            {
                _this.rolling();
            }
        if(_this.opt2.name=="rightAnswer")
            {
                _this.sliding();
            }
    },
    

    rolling:function(){
        console.log("rollingGGGGGGGGGGGGGGGGGGGGGGGGGGGGG "+_this.qArrays[_this.no1]);
   var group2 = _this.add.group();
        
        _this.flagGroup1.y = 0;
        if(_this.qArrays[_this.no1] == 9||_this.qArrays[_this.no1] == 10|| _this.qArrays[_this.no1] == 11)
            {
                console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYY");
                var tween = _this.add.tween(_this.flagGroup1);
                tween.to({ y: 700 }, 2500,'Linear', true, 0);
            }
        else
            {
                console.log("XXXXXXXXXXXXXXXXXXXXXXXXXX");
                var tween = _this.add.tween(_this.flagGroup1);
    	       tween.to({ x: 700 }, 2500,'Linear', true, 0);
            }
             
        _this.anim1 = _this.mainFlag.animations.add('roll');
        _this.anim1.play(10, true);
        
    	//group2.add(_this.sh2);     
    	group2.add(_this.opt1);
        group2.add(_this.opt2);
         _this.rollingSound = _this.add.audio('roll');
         _this.rollingSound.play();
        
      tween.onComplete.add(function(){
           _this.stopVoice();
          _this.time.events.add(100, _this.removeCelebration, _this);
     }, _this); 
        
    },
  
    sliding:function(){
   var group1 = _this.add.group();
        
        _this.flagGroup1.x = 0;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 700 }, 1500,'Linear', true, 0);

    	//group1.add(_this.sh1);     
    	group1.add(_this.opt1);
        group1.add(_this.opt2);
     
    	_this.slidingSound = _this.add.audio('slide');
         _this.slidingSound.play();
        
        tween.onComplete.add(function(){
           _this.stopVoice();
          _this.time.events.add(100, _this.removeCelebration, _this);
     }, _this); 
},
    
    wrongAns:function(target)
	{
		_this.noofAttempts++;
        ////console.log("wrong");
        
			var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,    
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);	


            /*var currentTime = window.timeSaveFunc();
                var saveAsment = 
                { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid,   
                    pass: "no",
                    time2answer: _this.AnsTimerCount,
                    attempts: _this.noofAttempts,
                    date_time_submission: currentTime, 
                    access_token: window.acctkn 
                }
            
        absdsjsapi.saveAssessment(saveAsment);*/
			
        ////console.log("wrong");
        	

		//scoretext.setText(selctedLang.score+' : '+score);
        ////console.log(target);
        //target.tint = 0xA9A9A9;
          
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
                
        _this.animlev1 =target.animations.add('flag1');
        _this.animlev1.play(10,false);
                            
		
        _this.shake.shake(10, _this.mainFlag);
        
		_this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        
        _this.time.events.add(800, function(){
           target.frame = 0;
        },_this);
        
        //_this.disableListeners();
        target.events.onInputDown.removeAll();
	},
        
    	removeCelebration:function()
	{
		////console.log("removeCeleb");
		celebration = false;
		//celebAnim.destroy();
		//rightCount--;
		////console.log("no"+_this.no1);
		//_this.input.enabled = true;
			_this.flagGroup1.destroy();
		     _this.count1++;


		//if(rightCount<=0)
		//{		
            
            
			if(_this.no1<5)
			{
                console.log("addq");
                _this.no1++;
                 _this.addQuestion(_this.count1);
			}
			else
			{
                 _this.time.events.add(500, function(){
				console.log("gameEnd");
               //_this.stopAllVoice();
               _this.stopVoice();
				_this.state.start('sg2_1_1Score',true,false);
                 },_this);
			}

	},
    
    
	changeQuestion:function()
	{
		_this.flagGroup1.destroy();
         
		if(_this.no1<6)
		{
            _this.count++;
            _this.opt1.destroy();
            _this.opt2.destroy();
			_this.getQuestion();
		}
		else
		{
			////console.log("gameEnd");

		}
	},
    
    getVoice:function(){
        
       _this.stopVoice();   
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
     console.log("hre="+_this.check);
        switch(_this.qArrays[_this.no1])
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
                    if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.1.1/English/sg2.1.1E.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.1.1/Hindi/sg2.1.1H.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.1.1/Kannada/sg2.1.1K.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.1.1/Gujarati/sg2.1.1G.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.1.1/Marathi/sg2.1.1.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.1.1/Telugu/sg2.1.1.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.1.1/Tamil/sg2.1.1.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.1.1/Urdu/sg2.1.1.mp3");
                    }
                    else
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg2.1.1/Odiya/sg2.1.1.mp3");
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


    update:function(){

    },
    
    shutdown:function()
    {
         _this.stopVoice();
    }
    
};