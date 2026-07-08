Game.pv3_5level1=function(){};
	
	
	

Game.pv3_5level1.prototype={
    init:function(game)
	{
		_this = this;
       
telInitializer.gameIdInit("pv3_4",gradeSelected);
	},

    preload:function()
    {

        if(!window.grade4PV3_5){

            window.grade4PV3_5 = true;

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

            this.load.image('pv3_4bgA',window.baseUrl+'assets/gradeAssets/pv1.4/bg2.png');
            
            this.load.atlas('pv3_4locker',window.baseUrl+'assets/gradeAssets/pv1.4/d2.png' ,window.baseUrl+'json/gradeJson/pv1.4/d2.json');
        this.load.image('pv3_4numscroll',window.baseUrl+'assets/gradeAssets/pv3.4/Tween.png');
        this.load.image('pv3_4case',window.baseUrl+'assets/gradeAssets/pv3.4/Symbol 3.png');
        this.load.image('pv3_4rotate2',window.baseUrl+'assets/gradeAssets/pv3.4/Symbol 37.png');
        
        this.load.image('pv3_4hand',window.baseUrl+'assets/gradeAssets/pv3.4/x3.png');
        this.load.atlas('pv3_44X4',window.baseUrl+'assets/gradeAssets/pv3.4/q6.png' ,window.baseUrl+'json/gradeJson/pv3.4/second/q6.json');
        this.load.atlas('pv3_45X5',window.baseUrl+'assets/gradeAssets/pv3.4/q7.png',window.baseUrl+'json/gradeJson/pv3.4/second/q7.json');
        this.load.atlas('pv3_4rotate',window.baseUrl+'assets/gradeAssets/pv3.4/d1.png' ,window.baseUrl+'json/gradeJson/pv3.4/second/d1.json');
        //this.load.atlas('pv3_4number',window.baseUrl+'assets/gradeAssets/pv3.4/number09.png' ,window.baseUrl+'json/gradeJson/pv3.4/second/number09.json');
        this.load.atlas('pv3_4red',window.baseUrl+'assets/gradeAssets/pv3.4/q1.png' ,window.baseUrl+'json/gradeJson/pv3.4/second/q1.json');
        this.load.atlas('pv3_4green',window.baseUrl+'assets/gradeAssets/pv3.4/q5.png' ,window.baseUrl+'json/gradeJson/pv3.4/second/q5.json');
        this.load.atlas('pv3_4blue',window.baseUrl+'assets/gradeAssets/pv3.4/q3.png' ,window.baseUrl+'json/gradeJson/pv3.4/second/q3.json');
        this.load.atlas('pv3_4yellow',window.baseUrl+'assets/gradeAssets/pv3.4/q4.png' ,window.baseUrl+'json/gradeJson/pv3.4/second/q4.json');
        this.load.atlas('pv3_4white',window.baseUrl+'assets/gradeAssets/pv3.4/q2.png' ,window.baseUrl+'json/gradeJson/pv3.4/second/q2.json');
        
        this.load.atlas('pv3_4right',window.baseUrl+'assets/commonAssets/tickBtn.png' ,window.baseUrl+'json/gradeJson/pv3.4/tickBtn.json');
            
        
            
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
_this.AudioPlay=false;
_this.animlev1=0;
_this.a1=0;
_this.Sprite=0;
_this.optionsgrp=0;
_this.wronggraphics1=0;_this.wronggraphics2=0;_this.wronggraphics3=0;
_this.wrngGraphicgrp=0;
_this.Sound=0;
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
_this.flag1=0;_this.flag2=0;_this.flag3=0;_this.flag4=0;
_this.tick=0;
_this.numGroup=0;
_this.enterTxt=0;
_this.txtbox=0;
_this.grpnum=new Array();
_this.boxclick=0;
_this.minutes=0;_this.seconds=0;_this.counterForTimer=0;
_this.c=0;
        _this.c2=0;
        _this.c3=0;
        _this.c4=0;
_this.box=0;
        _this.count3=0;
        _this.count4=0;

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;

        //baudio.play(); 
        //baudio.loopFull(0.6);
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6];
        _this.qArrays = this.shuffle(_this.qArrays);
       
       // counterText=0;
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);
       
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.setBoundsToWorld();

         _this.bg1 = this.add.sprite(0,0, 'pv3_4bgA');
        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
    
    _this.TopBar.scale.setTo(1,1.1);

    _this.backbtn = this.add.sprite(-3,3,'newCommonBackBtnForAll');
    _this.backbtn.inputEnabled = true;
    _this.backbtn.events.onInputDown.add(function(){
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
     _this.timeDisplay.fontWeight = 'Normal';
    _this.timeDisplay.fontSize = 20;
    //text.fontWeight = 'bold';
    _this.timeDisplay.fill = '#ADFF2F';
//        _this.footer = this.add.sprite(0,480,'footer');
       // footer.scale.setTo(1,1);
        _this.speaker = this.add.sprite(600,6,'grade11_speaker');
        _this.speaker.inputEnabled = true;
        _this.speaker.events.onInputDown.add(function()
        {
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            if(_this.Sound==0)
                {
                    _this.flag1=0;
                }
            _this.AudioPlay=false;
            _this.getVoice();
        },_this);
        
         _this.generateStarsForTheScene(6)
       
               //_this.no1++;
       
             this.getQuestion();
    
    },
    /***********************************getquestion************************/
    getQuestion:function(target)
    {

         _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
         _this.sceneCount++;

         _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function(){
            _this.AnsTimerCount++;
        }, _this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();
        
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
        console.log("getq"+_this.qArrays[_this.no1]);
        _this.getVoice();
            switch(_this.qArrays[_this.no1])//qArrays[no1])
            {
            case 1: 
                console.log("case1");
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
                this.gotosixthQuestion();
                    break;
                }
    },
     addQuestion:function(no2)
    {

           console.log("here");
           this.time.events.add(2000, function(){ 
                      
                       _this.locker.destroy();  
                       _this.case.destroy();  
                      _this.hand2.destroy();
                      _this.hand1.destroy();
                      _this.hand3.destroy();
               _this.flag1=0;
               _this.Sound=0;
               _this.AudioPlay=false;
               
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
            }, this);

    },


    gridset1:function()
    {
        _this.graphics1a = this.add.graphics(120, 172); 
    _this.graphics1a.drawRect(0, 0, 240,40);
        _this.g1aX=_this.graphics1a.x;
        _this.g1aY=_this.graphics1a.y;
        _this.graphics1a.inputEnabled=true;
        if(_this.graphics1a.visible==true)
            {
              _this.graphics1a.events.onInputDown.add(_this.dragStop1,_this);  
            }
         _this.graphics1b = this.add.graphics(120,232); 
    _this.graphics1b.drawRect(0, 0, 240,40); 
        _this.g1bX=_this.graphics1b.x;
        _this.g1bY=_this.graphics1b.y;
        _this.graphics1b.inputEnabled=false;
        if(_this.graphics1b.visible==true)
            {
                _this.graphics1b.events.onInputDown.add(_this.dragStop5,_this);  
            }
         _this.graphics1c = this.add.graphics(120,292); 
    _this.graphics1c.drawRect(0, 0, 240,40);
        _this.g1cX=_this.graphics1c.x;
        _this.g1cY=_this.graphics1c.y;
        _this.graphics1c.inputEnabled=false;
        if(_this.graphics1c.visible==true)
            {
        _this.graphics1c.events.onInputDown.add(_this.dragStop9,_this);
            }
         _this.graphics1d = this.add.graphics(120,352); 
    _this.graphics1d.drawRect(0, 0, 240,40);
        _this.g1dX=_this.graphics1d.x;
        _this.g1dY=_this.graphics1d.y;
        _this.graphics1d.inputEnabled=false;
        if(_this.graphics1d.visible==true)
            {
        _this.graphics1d.events.onInputDown.add(_this.dragStop13,_this);   
            }
         _this.graphics1e = this.add.graphics(120,412); 
//        _this.graphics1e.beginFill("0XFFFFFF");
    _this.graphics1e.drawRect(0, 0, 240,40);
        _this.g1eX=_this.graphics1e.x;
        _this.g1eY=_this.graphics1e.y;
        _this.graphics1e.inputEnabled=false;
        if(_this.graphics1e.visible==true)
            {
        _this.graphics1e.events.onInputDown.add(_this.dragStop17,_this);   
            }
        _this.n17=_this.add.sprite(33,23,'pv3_4white');
        _this.n17.anchor.setTo(0.5);
        _this.n17.alpha=1;
        _this.n17a=_this.add.sprite(33,22,'pv3_4white');
        _this.n17a.anchor.setTo(0.5);
        _this.n17a.alpha=1;
        _this.n17b=_this.add.sprite(33,20,'pv3_4white');
        _this.n17b.anchor.setTo(0.5);
        _this.n17b.alpha=1;
        _this.n17c=_this.add.sprite(33,18,'pv3_4white');
        _this.n17c.anchor.setTo(0.5);
        _this.n17c.alpha=1;
        _this.n17d=_this.add.sprite(33,18,'pv3_4white');
        _this.n17d.anchor.setTo(0.5);
        _this.n17d.alpha=1;
        
        _this.n1=_this.add.sprite(80,23,'pv3_4red');
        _this.n1.anchor.setTo(0.5);
        _this.n1.alpha=0.3;
        _this.n1a=_this.add.sprite(80,22,'pv3_4red');
        _this.n1a.anchor.setTo(0.5);
        _this.n1a.alpha=0.3;
        _this.n1b=_this.add.sprite(80,20,'pv3_4red');
        _this.n1b.anchor.setTo(0.5);
        _this.n1b.alpha=0.3;
        _this.n1c=_this.add.sprite(80,18,'pv3_4red');
        _this.n1c.anchor.setTo(0.5);
        _this.n1c.alpha=0.3;
        _this.n1d=_this.add.sprite(80,18,'pv3_4red');
        _this.n1d.anchor.setTo(0.5);
        _this.n1d.alpha=0.3;
        
        _this.n5=_this.add.sprite(126,23,'pv3_4green');
        _this.n5.anchor.setTo(0.5);
        _this.n5.alpha=0.3;
        _this.n5a=_this.add.sprite(126,22,'pv3_4green');
        _this.n5a.anchor.setTo(0.5);
        _this.n5a.alpha=0.3;
        _this.n5b=_this.add.sprite(126,20,'pv3_4green');
        _this.n5b.anchor.setTo(0.5);
        _this.n5b.alpha=0.3;
        _this.n5c=_this.add.sprite(126,18,'pv3_4green');
        _this.n5c.anchor.setTo(0.5);
        _this.n5c.alpha=0.3;
        _this.n5d=_this.add.sprite(126,18,'pv3_4green');
        _this.n5d.anchor.setTo(0.5);
        _this.n5d.alpha=0.3;
        
        _this.n9=_this.add.sprite(173,23,'pv3_4blue');
        _this.n9.anchor.setTo(0.5);
        _this.n9.alpha=0.3;
        _this.n9a=_this.add.sprite(173,22,'pv3_4blue');
        _this.n9a.anchor.setTo(0.5);
        _this.n9a.alpha=0.3;
        _this.n9b=_this.add.sprite(173,20,'pv3_4blue');
        _this.n9b.anchor.setTo(0.5);
        _this.n9b.alpha=0.3;
        _this.n9c=_this.add.sprite(173,18,'pv3_4blue');
        _this.n9c.anchor.setTo(0.5);
        _this.n9c.alpha=0.3;
        _this.n9d=_this.add.sprite(173,18,'pv3_4blue');
        _this.n9d.anchor.setTo(0.5);
        _this.n9d.alpha=0.3;
        
        _this.n13=_this.add.sprite(220,23,'pv3_4yellow');
        _this.n13.anchor.setTo(0.5);
        _this.n13.alpha=0.3;
        _this.n13a=_this.add.sprite(220,22,'pv3_4yellow');
        _this.n13a.anchor.setTo(0.5);
        _this.n13a.alpha=0.3;
        _this.n13b=_this.add.sprite(220,20,'pv3_4yellow');
        _this.n13b.anchor.setTo(0.5);
        _this.n13b.alpha=0.3;
        _this.n13c=_this.add.sprite(220,18,'pv3_4yellow');
        _this.n13c.anchor.setTo(0.5);
        _this.n13c.alpha=0.3;
        _this.n13d=_this.add.sprite(220,17,'pv3_4yellow');
        _this.n13d.anchor.setTo(0.5);
        _this.n13d.alpha=0.3;
        
         _this.graphics1a.addChild(_this.n17);
         _this.graphics1a.addChild(_this.n1);
        _this.graphics1a.addChild(_this.n5);
        _this.graphics1a.addChild(_this.n9);
        _this.graphics1a.addChild(_this.n13);
        
        _this.graphics1b.addChild(_this.n17a);
        _this.graphics1b.addChild(_this.n1a);
        _this.graphics1b.addChild(_this.n5a);
        _this.graphics1b.addChild(_this.n9a);
        _this.graphics1b.addChild(_this.n13a);
        
        _this.graphics1c.addChild(_this.n17b);
        _this.graphics1c.addChild(_this.n1b);
        _this.graphics1c.addChild(_this.n5b);
        _this.graphics1c.addChild(_this.n9b);
        _this.graphics1c.addChild(_this.n13b);
        
        _this.graphics1d.addChild(_this.n17c);
        _this.graphics1d.addChild(_this.n1c);
        _this.graphics1d.addChild(_this.n5c);
        _this.graphics1d.addChild(_this.n9c);
        _this.graphics1d.addChild(_this.n13c);
        
        _this.graphics1e.addChild(_this.n17d);
        _this.graphics1e.addChild(_this.n1d);
        _this.graphics1e.addChild(_this.n5d);
        _this.graphics1e.addChild(_this.n9d);
        _this.graphics1e.addChild(_this.n13d);
       
        _this.graphics1b.visible=false;
        _this.graphics1c.visible=false;
        _this.graphics1d.visible=false;
        _this.graphics1e.visible=false;
        _this.gridset2();
    },
    gridset2:function()
    {
        _this.graphics2a = this.add.graphics(120, 172); 
       
    _this.graphics2a.drawRect(0, 0, 240,40);
        _this.g2aX=_this.graphics2a.x;
        _this.g2aY=_this.graphics2a.y;
        _this.graphics2a.inputEnabled=true;
        if(_this.graphics2a.visible==true)
            {
              _this.graphics2a.events.onInputDown.add(_this.dragStop2,_this);  
            }
         _this.graphics2b = this.add.graphics(120,232); 
    
    _this.graphics2b.drawRect(0, 0, 240,40); 
        _this.g2bX=_this.graphics2b.x;
        _this.g2bY=_this.graphics2b.y;
        _this.graphics2b.inputEnabled=true;
        if(_this.graphics2b.visible==true)
            {
              _this.graphics2b.events.onInputDown.add(_this.dragStop6,_this);  
            }
         _this.graphics2c = this.add.graphics(120,292); 
       
    _this.graphics2c.drawRect(0, 0, 240,40);
        _this.g2cX=_this.graphics2c.x;
        _this.g2cY=_this.graphics2c.y;
        _this.graphics2c.inputEnabled=true;
        if(_this.graphics2c.visible==true)
            {
              _this.graphics2c.events.onInputDown.add(_this.dragStop10,_this);  
            }
         _this.graphics2d = this.add.graphics(120,352); 
        
    _this.graphics2d.drawRect(0, 0, 240,40);
        _this.g2dX=_this.graphics2d.x;
        _this.g2dY=_this.graphics2d.y;
        _this.graphics2d.inputEnabled=true;
        if(_this.graphics2d.visible==true)
            {
              _this.graphics2d.events.onInputDown.add(_this.dragStop14,_this);  
            }
        _this.graphics2e = this.add.graphics(120,412); 
//        _this.graphics1e.beginFill("0XFFFFFF");
        _this.graphics2e.drawRect(0, 0, 240,40);
        _this.g2eX=_this.graphics2e.x;
        _this.g2eY=_this.graphics2e.y;
        _this.graphics2e.inputEnabled=true;
        if(_this.graphics2e.visible==true)
            {
        _this.graphics2e.events.onInputDown.add(_this.dragStop18,_this);   
            }
        _this.n18=_this.add.sprite(33,23,'pv3_4white');
        _this.n18.anchor.setTo(0.5);
        _this.n18.alpha=1;
        _this.n18a=_this.add.sprite(33,22,'pv3_4white');
        _this.n18a.anchor.setTo(0.5);
        _this.n18a.alpha=1;
        _this.n18b=_this.add.sprite(33,20,'pv3_4white');
        _this.n18b.anchor.setTo(0.5);
        _this.n18b.alpha=1;
        _this.n18c=_this.add.sprite(33,18,'pv3_4white');
        _this.n18c.anchor.setTo(0.5);
        _this.n18c.alpha=1;
        _this.n18d=_this.add.sprite(33,18,'pv3_4white');
        _this.n18d.anchor.setTo(0.5);
        _this.n18d.alpha=1;
        
        _this.n2=_this.add.sprite(80,23,'pv3_4red');
        _this.n2.anchor.setTo(0.5);
        _this.n2.alpha=0.3;
        _this.n2a=_this.add.sprite(80,22,'pv3_4red');
        _this.n2a.anchor.setTo(0.5);
        _this.n2a.alpha=0.3;
        _this.n2b=_this.add.sprite(80,20,'pv3_4red');
        _this.n2b.anchor.setTo(0.5);
        _this.n2b.alpha=0.3;
        _this.n2c=_this.add.sprite(80,18,'pv3_4red');
        _this.n2c.anchor.setTo(0.5);
        _this.n2c.alpha=0.3;
        _this.n2d=_this.add.sprite(80,18,'pv3_4red');
        _this.n2d.anchor.setTo(0.5);
        _this.n2d.alpha=0.3;
        
        _this.n6=_this.add.sprite(126,23,'pv3_4green');
        _this.n6.anchor.setTo(0.5);
        _this.n6.alpha=0.3;
        _this.n6a=_this.add.sprite(126,22,'pv3_4green');
        _this.n6a.anchor.setTo(0.5);
        _this.n6a.alpha=0.3;
        _this.n6b=_this.add.sprite(126,20,'pv3_4green');
        _this.n6b.anchor.setTo(0.5);
        _this.n6b.alpha=0.3;
        _this.n6c=_this.add.sprite(126,18,'pv3_4green');
        _this.n6c.anchor.setTo(0.5);
        _this.n6c.alpha=0.3;
        _this.n6d=_this.add.sprite(126,18,'pv3_4green');
        _this.n6d.anchor.setTo(0.5);
        _this.n6d.alpha=0.3;
        
        _this.n10=_this.add.sprite(173,23,'pv3_4blue');
        _this.n10.anchor.setTo(0.5);
        _this.n10.alpha=0.3;
        _this.n10a=_this.add.sprite(173,22,'pv3_4blue');
        _this.n10a.anchor.setTo(0.5);
        _this.n10a.alpha=0.3;
        _this.n10b=_this.add.sprite(173,20,'pv3_4blue');
        _this.n10b.anchor.setTo(0.5);
        _this.n10b.alpha=0.3;
        _this.n10c=_this.add.sprite(173,18,'pv3_4blue');
        _this.n10c.anchor.setTo(0.5);
        _this.n10c.alpha=0.3;
        _this.n10d=_this.add.sprite(173,18,'pv3_4blue');
        _this.n10d.anchor.setTo(0.5);
        _this.n10d.alpha=0.3;
        
        _this.n14=_this.add.sprite(220,23,'pv3_4yellow');
        _this.n14.anchor.setTo(0.5);
        _this.n14.alpha=0.3;
        _this.n14a=_this.add.sprite(220,22,'pv3_4yellow');
        _this.n14a.anchor.setTo(0.5);
        _this.n14a.alpha=0.3;
        _this.n14b=_this.add.sprite(220,20,'pv3_4yellow');
        _this.n14b.anchor.setTo(0.5);
        _this.n14b.alpha=0.3;
        _this.n14c=_this.add.sprite(220,18,'pv3_4yellow');
        _this.n14c.anchor.setTo(0.5);
        _this.n14c.alpha=0.3;
        _this.n14d=_this.add.sprite(220,17,'pv3_4yellow');
        _this.n14d.anchor.setTo(0.5);
        _this.n14d.alpha=0.3;
        
        _this.graphics2a.addChild(_this.n18);
        _this.graphics2a.addChild(_this.n2);
        _this.graphics2a.addChild(_this.n6);
        _this.graphics2a.addChild(_this.n10);
        _this.graphics2a.addChild(_this.n14);
        
        _this.graphics2b.addChild(_this.n18a);
        _this.graphics2b.addChild(_this.n2a);
        _this.graphics2b.addChild(_this.n6a);
        _this.graphics2b.addChild(_this.n10a);
        _this.graphics2b.addChild(_this.n14a);
        
        _this.graphics2c.addChild(_this.n18b);
        _this.graphics2c.addChild(_this.n2b);
        _this.graphics2c.addChild(_this.n6b);
        _this.graphics2c.addChild(_this.n10b);
        _this.graphics2c.addChild(_this.n14b);
        
        _this.graphics2d.addChild(_this.n18c);
        _this.graphics2d.addChild(_this.n2c);
        _this.graphics2d.addChild(_this.n6c);
        _this.graphics2d.addChild(_this.n10c);
        _this.graphics2d.addChild(_this.n14c);
        
        _this.graphics2e.addChild(_this.n18d);
        _this.graphics2e.addChild(_this.n2d);
        _this.graphics2e.addChild(_this.n6d);
        _this.graphics2e.addChild(_this.n10d);
        _this.graphics2e.addChild(_this.n14d);
       
        _this.graphics2a.visible=false;
        _this.graphics2c.visible=false;
        _this.graphics2d.visible=false;
        _this.graphics2e.visible=false;
        _this.gridset3();
    },
    gridset3:function()
    {
        _this.graphics3a = this.add.graphics(120, 172); 
        
    _this.graphics3a.drawRect(0, 0, 240,40);
        _this.g3aX=_this.graphics3a.x;
        _this.g3aY=_this.graphics3a.y;
        _this.graphics3a.inputEnabled=true;
        if(_this.graphics3a.visible==true)
            {
              _this.graphics3a.events.onInputDown.add(_this.dragStop3,_this);  
            }
         _this.graphics3b = this.add.graphics(120,232); 
        
    _this.graphics3b.drawRect(0, 0, 240,40); 
        _this.g3bX=_this.graphics3b.x;
        _this.g3bY=_this.graphics3b.y;
        _this.graphics3b.inputEnabled=true;
        if(_this.graphics3b.visible==true)
            {
              _this.graphics3b.events.onInputDown.add(_this.dragStop7,_this);  
            }
         _this.graphics3c = this.add.graphics(120,292); 
       
    _this.graphics3c.drawRect(0, 0, 240,40);
        _this.g3cX=_this.graphics3c.x;
        _this.g3cY=_this.graphics3c.y;
        _this.graphics3c.inputEnabled=true;
        if(_this.graphics3c.visible==true)
            {
              _this.graphics3c.events.onInputDown.add(_this.dragStop11,_this);  
            }
         _this.graphics3d = this.add.graphics(120,352); 
       
    _this.graphics3d.drawRect(0, 0, 240,40);
        _this.g3dX=_this.graphics3d.x;
        _this.g3dY=_this.graphics3d.y;
        _this.graphics3d.inputEnabled=true;
        if(_this.graphics3d.visible==true)
            {
              _this.graphics3d.events.onInputDown.add(_this.dragStop15,_this);  
            }
        _this.graphics3e = this.add.graphics(120,412); 
//        _this.graphics1e.beginFill("0XFFFFFF");
        _this.graphics3e.drawRect(0, 0, 240,40);
        _this.g3eX=_this.graphics3e.x;
        _this.g3eY=_this.graphics3e.y;
        _this.graphics3e.inputEnabled=true;
        if(_this.graphics3e.visible==true)
            {
        _this.graphics3e.events.onInputDown.add(_this.dragStop19,_this);   
            }
        _this.n19=_this.add.sprite(33,23,'pv3_4white');
        _this.n19.anchor.setTo(0.5);
        _this.n19.alpha=1;
        _this.n19a=_this.add.sprite(33,22,'pv3_4white');
        _this.n19a.anchor.setTo(0.5);
        _this.n19a.alpha=1;
        _this.n19b=_this.add.sprite(33,20,'pv3_4white');
        _this.n19b.anchor.setTo(0.5);
        _this.n19b.alpha=1;
        _this.n19c=_this.add.sprite(33,18,'pv3_4white');
        _this.n19c.anchor.setTo(0.5);
        _this.n19c.alpha=1;
        _this.n19d=_this.add.sprite(33,18,'pv3_4white');
        _this.n19d.anchor.setTo(0.5);
        _this.n19d.alpha=1;
        
        _this.n3=_this.add.sprite(80,23,'pv3_4red');
        _this.n3.anchor.setTo(0.5);
        _this.n3.alpha=0.3;
        _this.n3a=_this.add.sprite(80,22,'pv3_4red');
        _this.n3a.anchor.setTo(0.5);
        _this.n3a.alpha=0.3;
        _this.n3b=_this.add.sprite(80,20,'pv3_4red');
        _this.n3b.anchor.setTo(0.5);
        _this.n3b.alpha=0.3;
        _this.n3c=_this.add.sprite(80,18,'pv3_4red');
        _this.n3c.anchor.setTo(0.5);
        _this.n3c.alpha=0.3;
        _this.n3d=_this.add.sprite(80,18,'pv3_4red');
        _this.n3d.anchor.setTo(0.5);
        _this.n3d.alpha=0.3;
        
        _this.n7=_this.add.sprite(126,23,'pv3_4green');
        _this.n7.anchor.setTo(0.5);
        _this.n7.alpha=0.3;
        _this.n7a=_this.add.sprite(126,22,'pv3_4green');
        _this.n7a.anchor.setTo(0.5);
        _this.n7a.alpha=0.3;
        _this.n7b=_this.add.sprite(126,20,'pv3_4green');
        _this.n7b.anchor.setTo(0.5);
        _this.n7b.alpha=0.3;
        _this.n7c=_this.add.sprite(126,18,'pv3_4green');
        _this.n7c.anchor.setTo(0.5);
        _this.n7c.alpha=0.3;
        _this.n7d=_this.add.sprite(126,18,'pv3_4green');
        _this.n7d.anchor.setTo(0.5);
        _this.n7d.alpha=0.3;
        
        _this.n11=_this.add.sprite(173,23,'pv3_4blue');
        _this.n11.anchor.setTo(0.5);
        _this.n11.alpha=0.3;
        _this.n11a=_this.add.sprite(173,22,'pv3_4blue');
        _this.n11a.anchor.setTo(0.5);
        _this.n11a.alpha=0.3;
        _this.n11b=_this.add.sprite(173,20,'pv3_4blue');
        _this.n11b.anchor.setTo(0.5);
        _this.n11b.alpha=0.3;
        _this.n11c=_this.add.sprite(173,18,'pv3_4blue');
        _this.n11c.anchor.setTo(0.5);
        _this.n11c.alpha=0.3;
        _this.n11d=_this.add.sprite(173,18,'pv3_4blue');
        _this.n11d.anchor.setTo(0.5);
        _this.n11d.alpha=0.3;
        
        _this.n15=_this.add.sprite(220,23,'pv3_4yellow');
        _this.n15.anchor.setTo(0.5);
        _this.n15.alpha=0.3;
        _this.n15a=_this.add.sprite(220,22,'pv3_4yellow');
        _this.n15a.anchor.setTo(0.5);
        _this.n15a.alpha=0.3;
        _this.n15b=_this.add.sprite(220,20,'pv3_4yellow');
        _this.n15b.anchor.setTo(0.5);
        _this.n15b.alpha=0.3;
        _this.n15c=_this.add.sprite(220,18,'pv3_4yellow');
        _this.n15c.anchor.setTo(0.5);
        _this.n15c.alpha=0.3;
        _this.n15d=_this.add.sprite(220,17,'pv3_4yellow');
        _this.n15d.anchor.setTo(0.5);
        _this.n15d.alpha=0.3;
        
        _this.graphics3a.addChild(_this.n19);
        _this.graphics3a.addChild(_this.n3);
        _this.graphics3a.addChild(_this.n7);
        _this.graphics3a.addChild(_this.n11);
        _this.graphics3a.addChild(_this.n15);
        
        _this.graphics3b.addChild(_this.n19a);
        _this.graphics3b.addChild(_this.n3a);
        _this.graphics3b.addChild(_this.n7a);
        _this.graphics3b.addChild(_this.n11a);
        _this.graphics3b.addChild(_this.n15a);
        
        _this.graphics3c.addChild(_this.n19b);
        _this.graphics3c.addChild(_this.n3b);
        _this.graphics3c.addChild(_this.n7b);
        _this.graphics3c.addChild(_this.n11b);
        _this.graphics3c.addChild(_this.n15b);
        
        _this.graphics3d.addChild(_this.n19c);
        _this.graphics3d.addChild(_this.n3c);
        _this.graphics3d.addChild(_this.n7c);
        _this.graphics3d.addChild(_this.n11c);
        _this.graphics3d.addChild(_this.n15c);
        
        _this.graphics3e.addChild(_this.n19d);
        _this.graphics3e.addChild(_this.n3d);
        _this.graphics3e.addChild(_this.n7d);
        _this.graphics3e.addChild(_this.n11d);
        _this.graphics3e.addChild(_this.n15d);
       
        _this.graphics3a.visible=false;
        _this.graphics3b.visible=false;
        _this.graphics3d.visible=false;
        _this.graphics3e.visible=false;
        
        _this.gridset4();
    },
    gridset4:function()
    {
        _this.graphics4a = this.add.graphics(120, 172); 
    _this.graphics4a.drawRect(0, 0, 240,40);
        _this.g4aX=_this.graphics4a.x;
        _this.g4aY=_this.graphics4a.y;
        _this.graphics4a.inputEnabled=true;
        if(_this.graphics4a.visible==true)
            {
              _this.graphics4a.events.onInputDown.add(_this.dragStop4,_this);  
            }
         _this.graphics4b = this.add.graphics(120,232); 
    _this.graphics4b.drawRect(0, 0, 240,40); 
        _this.g4bX=_this.graphics4b.x;
        _this.g4bY=_this.graphics4b.y;
        _this.graphics4b.inputEnabled=true;
        if(_this.graphics4b.visible==true)
            {
              _this.graphics4b.events.onInputDown.add(_this.dragStop8,_this);  
            }
         _this.graphics4c = this.add.graphics(120,292); 
    _this.graphics4c.drawRect(0, 0, 240,40);
        _this.g4cX=_this.graphics4c.x;
        _this.g4cY=_this.graphics4c.y;
        _this.graphics4c.inputEnabled=true;
        if(_this.graphics4c.visible==true)
            {
              _this.graphics4c.events.onInputDown.add(_this.dragStop12,_this);  
            }
         _this.graphics4d = this.add.graphics(120,352); 
    _this.graphics4d.drawRect(0, 0, 240,40);
        _this.g4dX=_this.graphics4d.x;
        _this.g4dY=_this.graphics4d.y;
        _this.graphics4d.inputEnabled=true;
        if(_this.graphics4d.visible==true)
            {
              _this.graphics4d.events.onInputDown.add(_this.dragStop16,_this);  
            }
        _this.graphics4e = this.add.graphics(120,412); 
//        _this.graphics1e.beginFill("0XFFFFFF");
        _this.graphics4e.drawRect(0, 0, 240,40);
        _this.g4eX=_this.graphics4e.x;
        _this.g4eY=_this.graphics4e.y;
        _this.graphics4e.inputEnabled=true;
        if(_this.graphics4e.visible==true)
            {
        _this.graphics4e.events.onInputDown.add(_this.dragStop20,_this);   
            }
        _this.n20=_this.add.sprite(33,23,'pv3_4white');
        _this.n20.anchor.setTo(0.5);
        _this.n20.alpha=1;
        _this.n20a=_this.add.sprite(33,22,'pv3_4white');
        _this.n20a.anchor.setTo(0.5);
        _this.n20a.alpha=1;
        _this.n20b=_this.add.sprite(33,20,'pv3_4white');
        _this.n20b.anchor.setTo(0.5);
        _this.n20b.alpha=1;
        _this.n20c=_this.add.sprite(33,18,'pv3_4white');
        _this.n20c.anchor.setTo(0.5);
        _this.n20c.alpha=1;
        _this.n20d=_this.add.sprite(33,18,'pv3_4white');
        _this.n20d.anchor.setTo(0.5);
        _this.n20d.alpha=1;
        
        _this.n4=_this.add.sprite(80,23,'pv3_4red');
        _this.n4.anchor.setTo(0.5);
        _this.n4.alpha=0.3;
        _this.n4a=_this.add.sprite(80,22,'pv3_4red');
        _this.n4a.anchor.setTo(0.5);
        _this.n4a.alpha=0.3;
        _this.n4b=_this.add.sprite(80,20,'pv3_4red');
        _this.n4b.anchor.setTo(0.5);
        _this.n4b.alpha=0.3;
        _this.n4c=_this.add.sprite(80,18,'pv3_4red');
        _this.n4c.anchor.setTo(0.5);
        _this.n4c.alpha=0.3;
        _this.n4d=_this.add.sprite(80,18,'pv3_4red');
        _this.n4d.anchor.setTo(0.5);
        _this.n4d.alpha=0.3;
        
        _this.n8=_this.add.sprite(126,23,'pv3_4green');
        _this.n8.anchor.setTo(0.5);
        _this.n8.alpha=0.3;
        _this.n8a=_this.add.sprite(126,22,'pv3_4green');
        _this.n8a.anchor.setTo(0.5);
        _this.n8a.alpha=0.3;
        _this.n8b=_this.add.sprite(126,20,'pv3_4green');
        _this.n8b.anchor.setTo(0.5);
        _this.n8b.alpha=0.3;
        _this.n8c=_this.add.sprite(126,18,'pv3_4green');
        _this.n8c.anchor.setTo(0.5);
        _this.n8c.alpha=0.3;
        _this.n8d=_this.add.sprite(126,18,'pv3_4green');
        _this.n8d.anchor.setTo(0.5);
        _this.n8d.alpha=0.3;
        
        _this.n12=_this.add.sprite(173,23,'pv3_4blue');
        _this.n12.anchor.setTo(0.5);
        _this.n12.alpha=0.3;
        _this.n12a=_this.add.sprite(173,22,'pv3_4blue');
        _this.n12a.anchor.setTo(0.5);
        _this.n12a.alpha=0.3;
        _this.n12b=_this.add.sprite(173,20,'pv3_4blue');
        _this.n12b.anchor.setTo(0.5);
        _this.n12b.alpha=0.3;
        _this.n12c=_this.add.sprite(173,18,'pv3_4blue');
        _this.n12c.anchor.setTo(0.5);
        _this.n12c.alpha=0.3;
        _this.n12d=_this.add.sprite(173,18,'pv3_4blue');
        _this.n12d.anchor.setTo(0.5);
        _this.n12d.alpha=0.3;
        
        _this.n16=_this.add.sprite(220,23,'pv3_4yellow');
        _this.n16.anchor.setTo(0.5);
        _this.n16.alpha=0.3;
        _this.n16a=_this.add.sprite(220,22,'pv3_4yellow');
        _this.n16a.anchor.setTo(0.5);
        _this.n16a.alpha=0.3;
        _this.n16b=_this.add.sprite(220,20,'pv3_4yellow');
        _this.n16b.anchor.setTo(0.5);
        _this.n16b.alpha=0.3;
        _this.n16c=_this.add.sprite(220,18,'pv3_4yellow');
        _this.n16c.anchor.setTo(0.5);
        _this.n16c.alpha=0.3;
        _this.n16d=_this.add.sprite(220,17,'pv3_4yellow');
        _this.n16d.anchor.setTo(0.5);
        _this.n16d.alpha=0.3;
        
        _this.graphics4a.addChild(_this.n20);
        _this.graphics4a.addChild(_this.n4);
        _this.graphics4a.addChild(_this.n8);
        _this.graphics4a.addChild(_this.n12);
        _this.graphics4a.addChild(_this.n16);
        
        _this.graphics4b.addChild(_this.n20a);
        _this.graphics4b.addChild(_this.n4a);
        _this.graphics4b.addChild(_this.n8a);
        _this.graphics4b.addChild(_this.n12a);
        _this.graphics4b.addChild(_this.n16a);
        
        _this.graphics4c.addChild(_this.n20b);
        _this.graphics4c.addChild(_this.n4b);
        _this.graphics4c.addChild(_this.n8b);
        _this.graphics4c.addChild(_this.n12b);
        _this.graphics4c.addChild(_this.n16b);
        
        _this.graphics4d.addChild(_this.n20c);
        _this.graphics4d.addChild(_this.n4c);
        _this.graphics4d.addChild(_this.n8c);
        _this.graphics4d.addChild(_this.n12c);
        _this.graphics4d.addChild(_this.n16c);
        
        _this.graphics4e.addChild(_this.n20d);
        _this.graphics4e.addChild(_this.n4d);
        _this.graphics4e.addChild(_this.n8d);
        _this.graphics4e.addChild(_this.n12d);
        _this.graphics4e.addChild(_this.n16d);
       
        _this.graphics4a.visible=false;
        _this.graphics4b.visible=false;
        _this.graphics4c.visible=false;
        _this.graphics4e.visible=false;
       _this.gridset5();
    },
    gridset5:function()
    {
        _this.graphics5a = this.add.graphics(120, 172); 
    _this.graphics5a.drawRect(0, 0, 240,40);
        _this.g5aX=_this.graphics5a.x;
        _this.g5aY=_this.graphics5a.y;
        _this.graphics5a.inputEnabled=true;
        if(_this.graphics5a.visible==true)
            {
              _this.graphics5a.events.onInputDown.add(_this.dragStop22,_this);  
            }
         _this.graphics5b = this.add.graphics(120,232); 
    _this.graphics5b.drawRect(0, 0, 240,40); 
        _this.g5bX=_this.graphics5b.x;
        _this.g5bY=_this.graphics5b.y;
        _this.graphics5b.inputEnabled=true;
        if(_this.graphics5b.visible==true)
            {
              _this.graphics5b.events.onInputDown.add(_this.dragStop23,_this);  
            }
         _this.graphics5c = this.add.graphics(120,292); 
    _this.graphics5c.drawRect(0, 0, 240,40);
        _this.g5cX=_this.graphics5c.x;
        _this.g5cY=_this.graphics5c.y;
        _this.graphics5c.inputEnabled=true;
        if(_this.graphics5c.visible==true)
            {
              _this.graphics5c.events.onInputDown.add(_this.dragStop24,_this);  
            }
         _this.graphics5d = this.add.graphics(120,352); 
    _this.graphics5d.drawRect(0, 0, 240,40);
        _this.g5dX=_this.graphics5d.x;
        _this.g5dY=_this.graphics5d.y;
        _this.graphics5d.inputEnabled=true;
        if(_this.graphics5d.visible==true)
            {
              _this.graphics5d.events.onInputDown.add(_this.dragStop25,_this);  
            }
        _this.graphics5e = this.add.graphics(120,412); 
//        _this.graphics1e.beginFill("0XFFFFFF");
        _this.graphics5e.drawRect(0, 0, 240,40);
        _this.g5eX=_this.graphics5e.x;
        _this.g5eY=_this.graphics5e.y;
        _this.graphics5e.inputEnabled=true;
        if(_this.graphics5e.visible==true)
            {
        _this.graphics5e.events.onInputDown.add(_this.dragStop21,_this);   
            }
        _this.n21=_this.add.sprite(33,23,'pv3_4white');
        _this.n21.anchor.setTo(0.5);
        _this.n21.alpha=1;
        _this.n21a=_this.add.sprite(33,22,'pv3_4white');
        _this.n21a.anchor.setTo(0.5);
        _this.n21a.alpha=1;
        _this.n21b=_this.add.sprite(33,20,'pv3_4white');
        _this.n21b.anchor.setTo(0.5);
        _this.n21b.alpha=1;
        _this.n21c=_this.add.sprite(33,18,'pv3_4white');
        _this.n21c.anchor.setTo(0.5);
        _this.n21c.alpha=1;
        _this.n21d=_this.add.sprite(33,18,'pv3_4white');
        _this.n21d.anchor.setTo(0.5);
        _this.n21d.alpha=1;
        
        _this.n22=_this.add.sprite(80,23,'pv3_4red');
        _this.n22.anchor.setTo(0.5);
        _this.n22.alpha=0.3;
        _this.n22a=_this.add.sprite(80,22,'pv3_4red');
        _this.n22a.anchor.setTo(0.5);
        _this.n22a.alpha=0.3;
        _this.n22b=_this.add.sprite(80,20,'pv3_4red');
        _this.n22b.anchor.setTo(0.5);
        _this.n22b.alpha=0.3;
        _this.n22c=_this.add.sprite(80,18,'pv3_4red');
        _this.n22c.anchor.setTo(0.5);
        _this.n22c.alpha=0.3;
        _this.n22d=_this.add.sprite(80,18,'pv3_4red');
        _this.n22d.anchor.setTo(0.5);
        _this.n22d.alpha=0.3;
        
        _this.n23=_this.add.sprite(126,23,'pv3_4green');
        _this.n23.anchor.setTo(0.5);
        _this.n23.alpha=0.3;
        _this.n23a=_this.add.sprite(126,22,'pv3_4green');
        _this.n23a.anchor.setTo(0.5);
        _this.n23a.alpha=0.3;
        _this.n23b=_this.add.sprite(126,20,'pv3_4green');
        _this.n23b.anchor.setTo(0.5);
        _this.n23b.alpha=0.3;
        _this.n23c=_this.add.sprite(126,18,'pv3_4green');
        _this.n23c.anchor.setTo(0.5);
        _this.n23c.alpha=0.3;
        _this.n23d=_this.add.sprite(126,18,'pv3_4green');
        _this.n23d.anchor.setTo(0.5);
        _this.n23d.alpha=0.3;
        
        _this.n24=_this.add.sprite(173,23,'pv3_4blue');
        _this.n24.anchor.setTo(0.5);
        _this.n24.alpha=0.3;
        _this.n24a=_this.add.sprite(173,22,'pv3_4blue');
        _this.n24a.anchor.setTo(0.5);
        _this.n24a.alpha=0.3;
        _this.n24b=_this.add.sprite(173,20,'pv3_4blue');
        _this.n24b.anchor.setTo(0.5);
        _this.n24b.alpha=0.3;
        _this.n24c=_this.add.sprite(173,18,'pv3_4blue');
        _this.n24c.anchor.setTo(0.5);
        _this.n24c.alpha=0.3;
        _this.n24d=_this.add.sprite(173,18,'pv3_4blue');
        _this.n24d.anchor.setTo(0.5);
        _this.n24d.alpha=0.3;
        
        _this.n25=_this.add.sprite(220,23,'pv3_4yellow');
        _this.n25.anchor.setTo(0.5);
        _this.n25.alpha=0.3;
        _this.n25a=_this.add.sprite(220,22,'pv3_4yellow');
        _this.n25a.anchor.setTo(0.5);
        _this.n25a.alpha=0.3;
        _this.n25b=_this.add.sprite(220,20,'pv3_4yellow');
        _this.n25b.anchor.setTo(0.5);
        _this.n25b.alpha=0.3;
        _this.n25c=_this.add.sprite(220,18,'pv3_4yellow');
        _this.n25c.anchor.setTo(0.5);
        _this.n25c.alpha=0.3;
        _this.n25d=_this.add.sprite(220,17,'pv3_4yellow');
        _this.n25d.anchor.setTo(0.5);
        _this.n25d.alpha=0.3;
        
        _this.graphics5a.addChild(_this.n21);
        _this.graphics5a.addChild(_this.n22);
        _this.graphics5a.addChild(_this.n23);
        _this.graphics5a.addChild(_this.n24);
        _this.graphics5a.addChild(_this.n25);
        
        _this.graphics5b.addChild(_this.n21a);
        _this.graphics5b.addChild(_this.n22a);
        _this.graphics5b.addChild(_this.n23a);
        _this.graphics5b.addChild(_this.n24a);
        _this.graphics5b.addChild(_this.n25a);
        
        _this.graphics5c.addChild(_this.n21b);
        _this.graphics5c.addChild(_this.n22b);
        _this.graphics5c.addChild(_this.n23b);
        _this.graphics5c.addChild(_this.n24b);
        _this.graphics5c.addChild(_this.n25b);
        
        _this.graphics5d.addChild(_this.n21c);
        _this.graphics5d.addChild(_this.n22c);
        _this.graphics5d.addChild(_this.n23c);
        _this.graphics5d.addChild(_this.n24c);
        _this.graphics5d.addChild(_this.n25c);
        
        _this.graphics5e.addChild(_this.n21d);
        _this.graphics5e.addChild(_this.n22d);
        _this.graphics5e.addChild(_this.n23d);
        _this.graphics5e.addChild(_this.n24d);
        _this.graphics5e.addChild(_this.n25d);
       
        _this.graphics5a.visible=false;
        _this.graphics5b.visible=false;
        _this.graphics5c.visible=false;
        _this.graphics5d.visible=false;
       
    },
    
    dragStop1:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            } 
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);     
    },
    dragStop2:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            }
             else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            }
             else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);    
    },
    dragStop3:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);     
    },
    dragStop4:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            } 
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop5:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            } 
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop6:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            } 
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop7:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            } 
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop8:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            } 
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop9:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop10:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop11:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop12:function(target)
    {
                 _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop13:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop14:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop15:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop16:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5e, target)&&_this.graphics5e.visible){
            target.visible=false;
            _this.graphics5e.visible=false;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    
    dragStop17:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
             else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop18:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            } 
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
             else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop19:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
             else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop20:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics5a, target)&&_this.graphics5a.visible){
            target.visible=false;
            _this.graphics5a.visible=false;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5b, target)&&_this.graphics5b.visible){
            target.visible=false;
            _this.graphics5b.visible=false;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5c, target)&&_this.graphics5c.visible){
            target.visible=false;
            _this.graphics5c.visible=false;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
             else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics5d, target)&&_this.graphics5d.visible){
            target.visible=false;
            _this.graphics5d.visible=false;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop21:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            }
             else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics1e.visible=true;
            _this.graphics1e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics2e.visible=true;
            _this.graphics2e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics3e.visible=true;
            _this.graphics3e.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics4e.visible=true;
            _this.graphics4e.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop22:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            }
             else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics1a.visible=true;
            _this.graphics1a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics2a.visible=true;
            _this.graphics2a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics3a.visible=true;
            _this.graphics3a.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics4a.visible=true;
            _this.graphics4a.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop23:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            }
             else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics1b.visible=true;
            _this.graphics1b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics2b.visible=true;
            _this.graphics2b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics3b.visible=true;
            _this.graphics3b.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics4b.visible=true;
            _this.graphics4b.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop24:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1d, target)&&_this.graphics1d.visible){
            target.visible=false;
            _this.graphics1d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2d, target)&&_this.graphics2d.visible){
            target.visible=false;
            _this.graphics2d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3d, target)&&_this.graphics3d.visible){
            target.visible=false;
            _this.graphics3d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4d, target)&&_this.graphics4d.visible){
            target.visible=false;
            _this.graphics4d.visible=false;
            _this.graphics5d.visible=true;
            _this.graphics5d.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            }
             else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics1c.visible=true;
            _this.graphics1c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics2c.visible=true;
            _this.graphics2c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics3c.visible=true;
            _this.graphics3c.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics4c.visible=true;
            _this.graphics4c.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    dragStop25:function(target)
    {
                  _this.snapSound = _this.add.audio('snapSound');
     _this.snapSound.play();
        target.input.allowHorizontalDrag = false;
        target.input.enableDrag();
        _this.world.bringToTop(target);
        _this.vx=target.x;
     console.log("vx1="+_this.vx)
          _this.vy=target.y;
     console.log("vy1="+_this.vy)
      if(target.y>=418)
            {
               target.y = 418;
            }
                else if(target.y<180)
            {
                target.y = 180;
            }  
        target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(_this.graphics1b, target)&&_this.graphics1b.visible){
            target.visible=false;
            _this.graphics1b.visible=false;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
        else if(_this.checkOverlap(_this.graphics2b, target)&&_this.graphics2b.visible){
            target.visible=false;
            _this.graphics2b.visible=false;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            } 
             else if(_this.checkOverlap(_this.graphics3b, target)&&_this.graphics3b.visible){
            target.visible=false;
            _this.graphics3b.visible=false;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            } 
            else if(_this.checkOverlap(_this.graphics4b, target)&&_this.graphics4b.visible){
            target.visible=false;
            _this.graphics4b.visible=false;
            _this.graphics5b.visible=true;
            _this.graphics5b.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1a, target)&&_this.graphics1a.visible){
            target.visible=false;
            _this.graphics1a.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2a, target)&&_this.graphics2a.visible){
            target.visible=false;
            _this.graphics2a.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3a, target)&&_this.graphics3a.visible){
            target.visible=false;
            _this.graphics3a.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4a, target)&&_this.graphics4a.visible){
            target.visible=false;
            _this.graphics4a.visible=false;
            _this.graphics5a.visible=true;
            _this.graphics5a.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics1c, target)&&_this.graphics1c.visible){
            target.visible=false;
            _this.graphics1c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2c, target)&&_this.graphics2c.visible){
            target.visible=false;
            _this.graphics2c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3c, target)&&_this.graphics3c.visible){
            target.visible=false;
            _this.graphics3c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4c, target)&&_this.graphics4c.visible){
            target.visible=false;
            _this.graphics4c.visible=false;
            _this.graphics5c.visible=true;
            _this.graphics5c.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            }
             else if(_this.checkOverlap(_this.graphics1e, target)&&_this.graphics1e.visible){
            target.visible=false;
            _this.graphics1e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics1d.visible=true;
            _this.graphics1d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics2e, target)&&_this.graphics2e.visible){
            target.visible=false;
            _this.graphics2e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics2d.visible=true;
            _this.graphics2d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics3e, target)&&_this.graphics3e.visible){
            target.visible=false;
            _this.graphics3e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics3d.visible=true;
            _this.graphics3d.inputEnabled=true;
            }
            else if(_this.checkOverlap(_this.graphics4e, target)&&_this.graphics4e.visible){
            target.visible=false;
            _this.graphics4e.visible=false;
            _this.graphics5e.visible=true;
            _this.graphics5e.inputEnabled=true;
            _this.graphics4d.visible=true;
            _this.graphics4d.inputEnabled=true;
            }
            target.events.onDragStop.removeAll();
          target.x=_this.vx;
           console.log("vx3="+_this.vx)
            target.y=_this.vy;
           console.log("vy3="+_this.vy)
           _this.checkmatch();
        },this);   
    },
    checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },
    setQuestion1:function()
    {
        if(_this.Question==1)
        {
            
        _this.n17.frame=3;
        _this.n1.frame=7;
        _this.n5.frame=5;
        _this.n9.frame=4;
        _this.n13.frame=3;
        
        _this.n17a.frame=3;
        _this.n1a.frame=7;
        _this.n5a.frame=5;
        _this.n9a.frame=4;
        _this.n13a.frame=3;
        
        _this.n17b.frame=3;
        _this.n1b.frame=7;
        _this.n5b.frame=5;
        _this.n9b.frame=4;
        _this.n13b.frame=3;
        
        _this.n17c.frame=3;
        _this.n1c.frame=7;
        _this.n5c.frame=5;
        _this.n9c.frame=4;
        _this.n13c.frame=3;
            
        _this.n17d.frame=3;
        _this.n1d.frame=7;
        _this.n5d.frame=5;
        _this.n9d.frame=4;
        _this.n13d.frame=3;
            
        _this.n18.frame=6;
        _this.n2.frame=6;
        _this.n6.frame=7;
        _this.n10.frame=5;
        _this.n14.frame=4;
        
        _this.n18a.frame=6;
        _this.n2a.frame=6;
        _this.n6a.frame=7;
        _this.n10a.frame=5;
        _this.n14a.frame=4;
        
        _this.n18b.frame=6;
        _this.n2b.frame=6;
        _this.n6b.frame=7;
        _this.n10b.frame=5;
        _this.n14b.frame=4;
        
        _this.n18c.frame=6;
        _this.n2c.frame=6;
        _this.n6c.frame=7;
        _this.n10c.frame=5;
        _this.n14c.frame=4;
            
        _this.n18d.frame=6;
        _this.n2d.frame=6;
        _this.n6d.frame=7;
        _this.n10d.frame=5;
        _this.n14d.frame=4;
        
        _this.n19.frame=4;
        _this.n3.frame=6;
        _this.n7.frame=6;
        _this.n11.frame=5;
        _this.n15.frame=1;
        
        _this.n19a.frame=4;
        _this.n3a.frame=6;
        _this.n7a.frame=6;
        _this.n11a.frame=5;
        _this.n15a.frame=1;
        
        _this.n19b.frame=4;
        _this.n3b.frame=6;
        _this.n7b.frame=6;
        _this.n11b.frame=5;
        _this.n15b.frame=1;
        
        _this.n19c.frame=4;
        _this.n3c.frame=6;
        _this.n7c.frame=6;
        _this.n11c.frame=5;
        _this.n15c.frame=1;
        
        _this.n19d.frame=4;
        _this.n3d.frame=6;
        _this.n7d.frame=6;
        _this.n11d.frame=5;
        _this.n15d.frame=1;
            
        _this.n20.frame=6;
        _this.n4.frame=7;
        _this.n8.frame=7;
        _this.n12.frame=5;
        _this.n16.frame=6;
        
        _this.n20a.frame=6;
        _this.n4a.frame=7;
        _this.n8a.frame=7;
        _this.n12a.frame=5;
        _this.n16a.frame=6;
        
        _this.n20b.frame=6;
        _this.n4b.frame=7;
        _this.n8b.frame=7;
        _this.n12b.frame=5;
        _this.n16b.frame=6;
        
        _this.n20c.frame=6;
        _this.n4c.frame=7;
        _this.n8c.frame=7;
        _this.n12c.frame=5;
        _this.n16c.frame=6;
            
        _this.n20d.frame=6;
        _this.n4d.frame=7;
        _this.n8d.frame=7;
        _this.n12d.frame=5;
        _this.n16d.frame=6;
            
        _this.n21.frame=5;
        _this.n22.frame=3;
        _this.n23.frame=7;
        _this.n24.frame=1;
        _this.n25.frame=6;
        
        _this.n21a.frame=5;
        _this.n22a.frame=3;
        _this.n23a.frame=7;
        _this.n24a.frame=1;
        _this.n25a.frame=6;
        
        _this.n21b.frame=5;
        _this.n22b.frame=3;
        _this.n23b.frame=7;
        _this.n24b.frame=1;
        _this.n25b.frame=6;
        
        _this.n21c.frame=5;
        _this.n22c.frame=3;
        _this.n23c.frame=7;
        _this.n24c.frame=1;
        _this.n25c.frame=6;
            
        _this.n21d.frame=5;
        _this.n22d.frame=3;
        _this.n23d.frame=7;
        _this.n24d.frame=1;
        _this.n25d.frame=6;
            
        }
        else if(_this.Question==2)
            {
        _this.n17.frame=8;
        _this.n1.frame=5;
        _this.n5.frame=2;
        _this.n9.frame=1;
        _this.n13.frame=1;
        
        _this.n17a.frame=8;
        _this.n1a.frame=5;
        _this.n5a.frame=2;
        _this.n9a.frame=1;
        _this.n13a.frame=1;
        
        _this.n17b.frame=8;
        _this.n1b.frame=5;
        _this.n5b.frame=2;
        _this.n9b.frame=1;
        _this.n13b.frame=1;
        
        _this.n17c.frame=8;
        _this.n1c.frame=5;
        _this.n5c.frame=2;
        _this.n9c.frame=1;
        _this.n13c.frame=1;
            
        _this.n17d.frame=8;
        _this.n1d.frame=5;
        _this.n5d.frame=2;
        _this.n9d.frame=1;
        _this.n13d.frame=1;
            
        _this.n18.frame=7;
        _this.n2.frame=6;
        _this.n6.frame=4;
        _this.n10.frame=5;
        _this.n14.frame=2;
        
        _this.n18a.frame=7;
        _this.n2a.frame=6;
        _this.n6a.frame=4;
        _this.n10a.frame=5;
        _this.n14a.frame=2;
        
        _this.n18b.frame=7;
        _this.n2b.frame=6;
        _this.n6b.frame=4;
        _this.n10b.frame=5;
        _this.n14b.frame=2;
        
        _this.n18c.frame=7;
        _this.n2c.frame=6;
        _this.n6c.frame=4;
        _this.n10c.frame=5;
        _this.n14c.frame=2;
            
        _this.n18d.frame=7;
        _this.n2d.frame=6;
        _this.n6d.frame=4;
        _this.n10d.frame=5;
        _this.n14d.frame=2;
        
        _this.n19.frame=7;
        _this.n3.frame=6;
        _this.n7.frame=5;
        _this.n11.frame=4;
        _this.n15.frame=4;
        
        _this.n19a.frame=7;
        _this.n3a.frame=6;
        _this.n7a.frame=5;
        _this.n11a.frame=4;
        _this.n15a.frame=4;
        
        _this.n19b.frame=7;
        _this.n3b.frame=6;
        _this.n7b.frame=5;
        _this.n11b.frame=4;
        _this.n15b.frame=4;
        
        _this.n19c.frame=7;
        _this.n3c.frame=6;
        _this.n7c.frame=5;
        _this.n11c.frame=4;
        _this.n15c.frame=4;
        
        _this.n19d.frame=7;
        _this.n3d.frame=6;
        _this.n7d.frame=5;
        _this.n11d.frame=4;
        _this.n15d.frame=4;
            
        _this.n20.frame=8;
        _this.n4.frame=7;
        _this.n8.frame=3;
        _this.n12.frame=3;
        _this.n16.frame=5;
        
        _this.n20a.frame=8;
        _this.n4a.frame=7;
        _this.n8a.frame=3;
        _this.n12a.frame=3;
        _this.n16a.frame=5;
        
        _this.n20b.frame=8;
        _this.n4b.frame=7;
        _this.n8b.frame=3;
        _this.n12b.frame=3;
        _this.n16b.frame=5;
        
        _this.n20c.frame=8;
        _this.n4c.frame=7;
        _this.n8c.frame=3;
        _this.n12c.frame=3;
        _this.n16c.frame=5;
            
        _this.n20d.frame=8;
        _this.n4d.frame=7;
        _this.n8d.frame=3;
        _this.n12d.frame=3;
        _this.n16d.frame=5;
            
        _this.n21.frame=9;
        _this.n22.frame=4;
        _this.n23.frame=2;
        _this.n24.frame=2;
        _this.n25.frame=4;
        
        _this.n21a.frame=9;
        _this.n22a.frame=4;
        _this.n23a.frame=2;
        _this.n24a.frame=2;
        _this.n25a.frame=4;
        
        _this.n21b.frame=9;
        _this.n22b.frame=4;
        _this.n23b.frame=2;
        _this.n24b.frame=2;
        _this.n25b.frame=4;
        
        _this.n21c.frame=9;
        _this.n22c.frame=4;
        _this.n23c.frame=2;
        _this.n24c.frame=2;
        _this.n25c.frame=4;
            
        _this.n21d.frame=9;
        _this.n22d.frame=4;
        _this.n23d.frame=2;
        _this.n24d.frame=2;
        _this.n25d.frame=4;  
            }
        else if(_this.Question==3)
            {
         _this.n17.frame=4;
        _this.n1.frame=3;
        _this.n5.frame=2;
        _this.n9.frame=4;
        _this.n13.frame=6;
        
        _this.n17a.frame=4;
        _this.n1a.frame=3;
        _this.n5a.frame=2;
        _this.n9a.frame=4;
        _this.n13a.frame=6;
        
        _this.n17b.frame=4;
        _this.n1b.frame=3;
        _this.n5b.frame=2;
        _this.n9b.frame=4;
        _this.n13b.frame=6;
        
        _this.n17c.frame=4;
        _this.n1c.frame=3;
        _this.n5c.frame=2;
        _this.n9c.frame=4;
        _this.n13c.frame=6;
            
        _this.n17d.frame=4;
        _this.n1d.frame=3;
        _this.n5d.frame=2;
        _this.n9d.frame=4;
        _this.n13d.frame=6;
            
        _this.n18.frame=4;
        _this.n2.frame=3;
        _this.n6.frame=2;
        _this.n10.frame=5;
        _this.n14.frame=2;
        
        _this.n18a.frame=4;
        _this.n2a.frame=3;
        _this.n6a.frame=2;
        _this.n10a.frame=5;
        _this.n14a.frame=2;
        
        _this.n18b.frame=4;
        _this.n2b.frame=3;
        _this.n6b.frame=2;
        _this.n10b.frame=5;
        _this.n14b.frame=2;
        
        _this.n18c.frame=4;
        _this.n2c.frame=3;
        _this.n6c.frame=2;
        _this.n10c.frame=5;
        _this.n14c.frame=2;
            
        _this.n18d.frame=4;
        _this.n2d.frame=3;
        _this.n6d.frame=2;
        _this.n10d.frame=5;
        _this.n14d.frame=2;
        
        _this.n19.frame=3;
        _this.n3.frame=4;
        _this.n7.frame=5;
        _this.n11.frame=3;
        _this.n15.frame=5;
        
        _this.n19a.frame=3;
        _this.n3a.frame=4;
        _this.n7a.frame=5;
        _this.n11a.frame=3;
        _this.n15a.frame=5;
        
        _this.n19b.frame=3;
        _this.n3b.frame=4;
        _this.n7b.frame=5;
        _this.n11b.frame=3;
        _this.n15b.frame=5;
        
        _this.n19c.frame=3;
        _this.n3c.frame=4;
        _this.n7c.frame=5;
        _this.n11c.frame=3;
        _this.n15c.frame=5;
        
        _this.n19d.frame=3;
        _this.n3d.frame=4;
        _this.n7d.frame=5;
        _this.n11d.frame=3;
        _this.n15d.frame=5;
            
        _this.n20.frame=7;
        _this.n4.frame=6;
        _this.n8.frame=4;
        _this.n12.frame=2;
        _this.n16.frame=1;
        
        _this.n20a.frame=7;
        _this.n4a.frame=6;
        _this.n8a.frame=4;
        _this.n12a.frame=2;
        _this.n16a.frame=1;
        
        _this.n20b.frame=7;
        _this.n4b.frame=6;
        _this.n8b.frame=4;
        _this.n12b.frame=2;
        _this.n16b.frame=1;
        
        _this.n20c.frame=7;
        _this.n4c.frame=6;
        _this.n8c.frame=4;
        _this.n12c.frame=2;
        _this.n16c.frame=1;
            
        _this.n20d.frame=7;
        _this.n4d.frame=6;
        _this.n8d.frame=4;
        _this.n12d.frame=2;
        _this.n16d.frame=1;
            
        _this.n21.frame=7;
        _this.n22.frame=5;
        _this.n23.frame=1;
        _this.n24.frame=1;
        _this.n25.frame=3;
        
        _this.n21a.frame=7;
        _this.n22a.frame=5;
        _this.n23a.frame=1;
        _this.n24a.frame=1;
        _this.n25a.frame=3;
        
        _this.n21b.frame=7;
        _this.n22b.frame=5;
        _this.n23b.frame=1;
        _this.n24b.frame=1;
        _this.n25b.frame=3;
        
        _this.n21c.frame=7;
        _this.n22c.frame=5;
        _this.n23c.frame=1;
        _this.n24c.frame=1;
        _this.n25c.frame=3;
            
        _this.n21d.frame=7;
        _this.n22d.frame=5;
        _this.n23d.frame=1;
        _this.n24d.frame=1;
        _this.n25d.frame=3;  
            }
        else if(_this.Question==4)
            {
        _this.n17.frame=5;
        _this.n1.frame=4;
        _this.n5.frame=5;
        _this.n9.frame=1;
        _this.n13.frame=1;
        
        _this.n17a.frame=5;
        _this.n1a.frame=4;
        _this.n5a.frame=5;
        _this.n9a.frame=1;
        _this.n13a.frame=1;
        
        _this.n17b.frame=5;
        _this.n1b.frame=4;
        _this.n5b.frame=5;
        _this.n9b.frame=1;
        _this.n13b.frame=1;
        
        _this.n17c.frame=5;
        _this.n1c.frame=4;
        _this.n5c.frame=5;
        _this.n9c.frame=1;
        _this.n13c.frame=1;
            
        _this.n17d.frame=5;
        _this.n1d.frame=4;
        _this.n5d.frame=5;
        _this.n9d.frame=1;
        _this.n13d.frame=1;
            
        _this.n18.frame=6;
        _this.n2.frame=3;
        _this.n6.frame=2;
        _this.n10.frame=4;
        _this.n14.frame=5;
        
        _this.n18a.frame=6;
        _this.n2a.frame=3;
        _this.n6a.frame=2;
        _this.n10a.frame=4;
        _this.n14a.frame=5;
        
        _this.n18b.frame=6;
        _this.n2b.frame=3;
        _this.n6b.frame=2;
        _this.n10b.frame=4;
        _this.n14b.frame=5;
        
        _this.n18c.frame=6;
        _this.n2c.frame=3;
        _this.n6c.frame=2;
        _this.n10c.frame=4;
        _this.n14c.frame=5;
            
        _this.n18d.frame=6;
        _this.n2d.frame=3;
        _this.n6d.frame=2;
        _this.n10d.frame=4;
        _this.n14d.frame=5;
        
        _this.n19.frame=6;
        _this.n3.frame=3;
        _this.n7.frame=2;
        _this.n11.frame=4;
        _this.n15.frame=4;
        
        _this.n19a.frame=6;
        _this.n3a.frame=3;
        _this.n7a.frame=2;
        _this.n11a.frame=4;
        _this.n15a.frame=4;
        
        _this.n19b.frame=6;
        _this.n3b.frame=3;
        _this.n7b.frame=2;
        _this.n11b.frame=4;
        _this.n15b.frame=4;
        
        _this.n19c.frame=6;
        _this.n3c.frame=3;
        _this.n7c.frame=2;
        _this.n11c.frame=4;
        _this.n15c.frame=4;
        
        _this.n19d.frame=6;
        _this.n3d.frame=3;
        _this.n7d.frame=2;
        _this.n11d.frame=4;
        _this.n15d.frame=4;
            
        _this.n20.frame=3;
        _this.n4.frame=2;
        _this.n8.frame=4;
        _this.n12.frame=3;
        _this.n16.frame=3;
        
        _this.n20a.frame=3;
        _this.n4a.frame=2;
        _this.n8a.frame=4;
        _this.n12a.frame=3;
        _this.n16a.frame=3;
        
        _this.n20b.frame=3;
        _this.n4b.frame=2;
        _this.n8b.frame=4;
        _this.n12b.frame=3;
        _this.n16b.frame=3;
        
        _this.n20c.frame=3;
        _this.n4c.frame=2;
        _this.n8c.frame=4;
        _this.n12c.frame=3;
        _this.n16c.frame=3;
            
        _this.n20d.frame=3;
        _this.n4d.frame=2;
        _this.n8d.frame=4;
        _this.n12d.frame=3;
        _this.n16d.frame=3;
            
        _this.n21.frame=3;
        _this.n22.frame=5;
        _this.n23.frame=1;
        _this.n24.frame=2;
        _this.n25.frame=1;
        
        _this.n21a.frame=3;
        _this.n22a.frame=5;
        _this.n23a.frame=1;
        _this.n24a.frame=2;
        _this.n25a.frame=1;
        
        _this.n21b.frame=3;
        _this.n22b.frame=5;
        _this.n23b.frame=1;
        _this.n24b.frame=2;
        _this.n25b.frame=1;
        
        _this.n21c.frame=3;
        _this.n22c.frame=5;
        _this.n23c.frame=1;
        _this.n24c.frame=2;
        _this.n25c.frame=1;
            
        _this.n21d.frame=3;
        _this.n22d.frame=5;
        _this.n23d.frame=1;
        _this.n24d.frame=2;
        _this.n25d.frame=1;  
            }
        else if(_this.Question==5)
            {
        _this.n17.frame=6;
        _this.n1.frame=5;
        _this.n5.frame=5;
        _this.n9.frame=1;
        _this.n13.frame=3;
        
        _this.n17a.frame=6;
        _this.n1a.frame=5;
        _this.n5a.frame=5;
        _this.n9a.frame=1;
        _this.n13a.frame=3;
        
        _this.n17b.frame=6;
        _this.n1b.frame=5;
        _this.n5b.frame=5;
        _this.n9b.frame=1;
        _this.n13b.frame=3;
        
        _this.n17c.frame=6;
        _this.n1c.frame=5;
        _this.n5c.frame=5;
        _this.n9c.frame=1;
        _this.n13c.frame=3;
            
        _this.n17d.frame=6;
        _this.n1d.frame=5;
        _this.n5d.frame=5;
        _this.n9d.frame=1;
        _this.n13d.frame=3;
            
        _this.n18.frame=5;
        _this.n2.frame=4;
        _this.n6.frame=3;
        _this.n10.frame=5;
        _this.n14.frame=4;
        
        _this.n18a.frame=5;
        _this.n2a.frame=4;
        _this.n6a.frame=3;
        _this.n10a.frame=5;
        _this.n14a.frame=4;
        
        _this.n18b.frame=5;
        _this.n2b.frame=4;
        _this.n6b.frame=3;
        _this.n10b.frame=5;
        _this.n14b.frame=4;
        
        _this.n18c.frame=5;
        _this.n2c.frame=4;
        _this.n6c.frame=3;
        _this.n10c.frame=5;
        _this.n14c.frame=4;
            
        _this.n18d.frame=5;
        _this.n2d.frame=4;
        _this.n6d.frame=3;
        _this.n10d.frame=5;
        _this.n14d.frame=4;
        
        _this.n19.frame=5;
        _this.n3.frame=4;
        _this.n7.frame=3;
        _this.n11.frame=4;
        _this.n15.frame=1;
        
        _this.n19a.frame=5;
        _this.n3a.frame=4;
        _this.n7a.frame=3;
        _this.n11a.frame=4;
        _this.n15a.frame=1;
        
        _this.n19b.frame=5;
        _this.n3b.frame=4;
        _this.n7b.frame=3;
        _this.n11b.frame=4;
        _this.n15b.frame=1;
        
        _this.n19c.frame=5;
        _this.n3c.frame=4;
        _this.n7c.frame=3;
        _this.n11c.frame=4;
        _this.n15c.frame=1;
        
        _this.n19d.frame=5;
        _this.n3d.frame=4;
        _this.n7d.frame=3;
        _this.n11d.frame=4;
        _this.n15d.frame=1;
            
        _this.n20.frame=6;
        _this.n4.frame=5;
        _this.n8.frame=3;
        _this.n12.frame=1;
        _this.n16.frame=2;
        
        _this.n20a.frame=6;
        _this.n4a.frame=5;
        _this.n8a.frame=3;
        _this.n12a.frame=1;
        _this.n16a.frame=2;
        
        _this.n20b.frame=6;
        _this.n4b.frame=5;
        _this.n8b.frame=3;
        _this.n12b.frame=1;
        _this.n16b.frame=2;
        
        _this.n20c.frame=6;
        _this.n4c.frame=5;
        _this.n8c.frame=3;
        _this.n12c.frame=1;
        _this.n16c.frame=2;
            
        _this.n20d.frame=6;
        _this.n4d.frame=5;
        _this.n8d.frame=3;
        _this.n12d.frame=1;
        _this.n16d.frame=2;
            
        _this.n21.frame=6;
        _this.n22.frame=4;
        _this.n23.frame=4;
        _this.n24.frame=2;
        _this.n25.frame=1;
        
        _this.n21a.frame=6;
        _this.n22a.frame=4;
        _this.n23a.frame=4;
        _this.n24a.frame=2;
        _this.n25a.frame=1;
        
        _this.n21b.frame=6;
        _this.n22b.frame=4;
        _this.n23b.frame=4;
        _this.n24b.frame=2;
        _this.n25b.frame=1;
        
        _this.n21c.frame=6;
        _this.n22c.frame=4;
        _this.n23c.frame=4;
        _this.n24c.frame=2;
        _this.n25c.frame=1;
            
        _this.n21d.frame=6;
        _this.n22d.frame=4;
        _this.n23d.frame=4;
        _this.n24d.frame=2;
        _this.n25d.frame=1;  
            }
         else if(_this.Question==6)
            {
        _this.n17.frame=5;
        _this.n1.frame=3;
        _this.n5.frame=5;
        _this.n9.frame=4;
        _this.n13.frame=3;
        
        _this.n17a.frame=5;
        _this.n1a.frame=3;
        _this.n5a.frame=5;
        _this.n9a.frame=4;
        _this.n13a.frame=3;
        
        _this.n17b.frame=5;
        _this.n1b.frame=3;
        _this.n5b.frame=5;
        _this.n9b.frame=4;
        _this.n13b.frame=3;
        
        _this.n17c.frame=5;
        _this.n1c.frame=3;
        _this.n5c.frame=5;
        _this.n9c.frame=4;
        _this.n13c.frame=3;
            
        _this.n17d.frame=5;
        _this.n1d.frame=3;
        _this.n5d.frame=5;
        _this.n9d.frame=4;
        _this.n13d.frame=3;
            
        _this.n18.frame=5;
        _this.n2.frame=4;
        _this.n6.frame=8;
        _this.n10.frame=9;
        _this.n14.frame=1;
        
        _this.n18a.frame=5;
        _this.n2a.frame=4;
        _this.n6a.frame=8;
        _this.n10a.frame=9;
        _this.n14a.frame=1;
        
        _this.n18b.frame=5;
        _this.n2b.frame=4;
        _this.n6b.frame=8;
        _this.n10b.frame=9;
        _this.n14b.frame=1;
        
        _this.n18c.frame=5;
        _this.n2c.frame=4;
        _this.n6c.frame=8;
        _this.n10c.frame=9;
        _this.n14c.frame=1;
            
        _this.n18d.frame=5;
        _this.n2d.frame=4;
        _this.n6d.frame=8;
        _this.n10d.frame=9;
        _this.n14d.frame=1;
        
        _this.n19.frame=6;
        _this.n3.frame=3;
        _this.n7.frame=5;
        _this.n11.frame=4;
        _this.n15.frame=8;
        
        _this.n19a.frame=6;
        _this.n3a.frame=3;
        _this.n7a.frame=5;
        _this.n11a.frame=4;
        _this.n15a.frame=8;
        
        _this.n19b.frame=6;
        _this.n3b.frame=3;
        _this.n7b.frame=5;
        _this.n11b.frame=4;
        _this.n15b.frame=8;
        
        _this.n19c.frame=6;
        _this.n3c.frame=3;
        _this.n7c.frame=5;
        _this.n11c.frame=4;
        _this.n15c.frame=8;
        
        _this.n19d.frame=6;
        _this.n3d.frame=3;
        _this.n7d.frame=5;
        _this.n11d.frame=4;
        _this.n15d.frame=8;
            
        _this.n20.frame=6;
        _this.n4.frame=7;
        _this.n8.frame=8;
        _this.n12.frame=5;
        _this.n16.frame=4;
        
        _this.n20a.frame=6;
        _this.n4a.frame=7;
        _this.n8a.frame=8;
        _this.n12a.frame=5;
        _this.n16a.frame=4;
        
        _this.n20b.frame=6;
        _this.n4b.frame=7;
        _this.n8b.frame=8;
        _this.n12b.frame=5;
        _this.n16b.frame=4;
        
        _this.n20c.frame=6;
        _this.n4c.frame=7;
        _this.n8c.frame=8;
        _this.n12c.frame=5;
        _this.n16c.frame=4;
            
        _this.n20d.frame=6;
        _this.n4d.frame=7;
        _this.n8d.frame=8;
        _this.n12d.frame=5;
        _this.n16d.frame=4;
            
        _this.n21.frame=7;
        _this.n22.frame=4;
        _this.n23.frame=3;
        _this.n24.frame=2;
        _this.n25.frame=1;
        
        _this.n21a.frame=7;
        _this.n22a.frame=4;
        _this.n23a.frame=3;
        _this.n24a.frame=2;
        _this.n25a.frame=1;
        
        _this.n21b.frame=7;
        _this.n22b.frame=4;
        _this.n23b.frame=3;
        _this.n24b.frame=2;
        _this.n25b.frame=1;
        
        _this.n21c.frame=7;
        _this.n22c.frame=4;
        _this.n23c.frame=3;
        _this.n24c.frame=2;
        _this.n25c.frame=1;
            
        _this.n21d.frame=7;
        _this.n22d.frame=4;
        _this.n23d.frame=3;
        _this.n24d.frame=2;
        _this.n25d.frame=1;  
            }
    },
    checkmatch:function()
    {
        if(_this.Question==1)
            {
            if((_this.graphics2a.visible==true)&&(_this.graphics4b.visible==true)&&(_this.graphics5c.visible==true)&&(_this.graphics3d.visible==true)&&(_this.graphics1e.visible==true))
        {
         _this.n1.alpha=1;
         _this.n1a.alpha=1;
         _this.n1b.alpha=1;
         _this.n1c.alpha=1;
         _this.n1d.alpha=1;
         _this.n2.alpha=1;
         _this.n2a.alpha=1;
         _this.n2b.alpha=1;
         _this.n2c.alpha=1;
         _this.n2d.alpha=1;
         _this.n3.alpha=1;
         _this.n3a.alpha=1;
         _this.n3b.alpha=1;
         _this.n3c.alpha=1;
         _this.n3d.alpha=1;
         _this.n4.alpha=1;
         _this.n4a.alpha=1;
         _this.n4b.alpha=1;
         _this.n4c.alpha=1;
         _this.n4d.alpha=1;
         _this.n22.alpha=1;
         _this.n22a.alpha=1;
         _this.n22b.alpha=1;
         _this.n22c.alpha=1;
         _this.n22d.alpha=1;
            _this.hand2.visible=true;
            _this.hand1.visible=false;
            _this.Sound=2;
            _this.flag1=1;
            this.time.events.add(4000, function(){ _this.hand2.visible=false;},this);
            _this.grid.frame=2;
        }
         if((_this.graphics4a.visible==true)&&(_this.graphics2b.visible==true)&&(_this.graphics5c.visible==true)&&(_this.graphics3d.visible==true)&&(_this.graphics1e.visible==true))
        {
           for(var i=1;i<26;i++)
           {
               _this["n"+i].alpha=1;
               _this["n"+i+"a"].alpha=1;
               _this["n"+i+"b"].alpha=1;
               _this["n"+i+"c"].alpha=1;
               _this["n"+i+"d"].alpha=1;
           }
            _this.hand2.visible=false;
            _this.hand1.visible=false;
            _this.Sound=1;
            _this.flag1=1;
            _this.grid.frame=5;
            for(var j=1;j<=5;j++)
                {
                        _this["graphics"+j+"a"].inputEnabled=false;
                        _this["graphics"+j+"b"].inputEnabled=false;
                        _this["graphics"+j+"c"].inputEnabled=false;
                        _this["graphics"+j+"d"].inputEnabled=false;
                        _this["graphics"+j+"e"].inputEnabled=false;
                }
        }
            }
        else if(_this.Question==2)
            {
             if((_this.graphics5a.visible==true)&&(_this.graphics1b.visible==true)&&(_this.graphics4c.visible==true)&&(_this.graphics2d.visible==true||_this.graphics3d.visible==true)&&(_this.graphics3e.visible==true||_this.graphics2e.visible==true))
        {
         _this.n1.alpha=1;
         _this.n1a.alpha=1;
         _this.n1b.alpha=1;
         _this.n1c.alpha=1;
         _this.n1d.alpha=1;
         _this.n2.alpha=1;
         _this.n2a.alpha=1;
         _this.n2b.alpha=1;
         _this.n2c.alpha=1;
         _this.n2d.alpha=1;
         _this.n3.alpha=1;
         _this.n3a.alpha=1;
         _this.n3b.alpha=1;
         _this.n3c.alpha=1;
         _this.n3d.alpha=1;
         _this.n4.alpha=1;
         _this.n4a.alpha=1;
         _this.n4b.alpha=1;
         _this.n4c.alpha=1;
         _this.n4d.alpha=1;
         _this.n22.alpha=1;
         _this.n22a.alpha=1;
         _this.n22b.alpha=1;
         _this.n22c.alpha=1;
         _this.n22d.alpha=1;
            _this.hand2.visible=true;
            _this.hand1.visible=false;
            _this.Sound=2;
            _this.flag1=1;
            this.time.events.add(4000, function(){ _this.hand2.visible=false;},this);
            _this.grid.frame=2;
        }
            if((_this.graphics5a.visible==true)&&(_this.graphics4b.visible==true)&&(_this.graphics1c.visible==true)&&(_this.graphics2d.visible==true||_this.graphics3d.visible==true)&&(_this.graphics3e.visible==true||_this.graphics2e.visible==true))
        {
        for(var i=1;i<=8;i++)
                {
                   _this["n"+i].alpha=1;
               _this["n"+i+"a"].alpha=1;
               _this["n"+i+"b"].alpha=1;
               _this["n"+i+"c"].alpha=1;
               _this["n"+i+"d"].alpha=1;
                }
         _this.n22.alpha=1;
         _this.n22a.alpha=1;
         _this.n22b.alpha=1;
         _this.n22c.alpha=1;
         _this.n22d.alpha=1;
            
         _this.n23.alpha=1;
         _this.n23a.alpha=1;
         _this.n23b.alpha=1;
         _this.n23c.alpha=1;
         _this.n23d.alpha=1;
            _this.hand3.visible=true;
            _this.hand1.visible=false;
            _this.hand2.visible=false;
            _this.Sound=3;
            _this.flag1=1;
            _this.AudioPlay=false;
            _this.grid.frame=3;
            this.time.events.add(4000, function(){ _this.hand3.visible=false;},this);
        }  
                if((_this.graphics5a.visible==true)&&(_this.graphics4b.visible==true)&&(_this.graphics1c.visible==true)&&(_this.graphics3d.visible==true)&&(_this.graphics2e.visible==true))
        {
         for(var i=1;i<26;i++)
           {
               _this["n"+i].alpha=1;
               _this["n"+i+"a"].alpha=1;
               _this["n"+i+"b"].alpha=1;
               _this["n"+i+"c"].alpha=1;
               _this["n"+i+"d"].alpha=1;
           }
            _this.hand3.visible=false;
            _this.hand1.visible=false;
            _this.hand2.visible=false;
            _this.Sound=1;
            _this.flag1=1;
            _this.grid.frame=5;
            for(var j=1;j<=5;j++)
                {
                        _this["graphics"+j+"a"].inputEnabled=false;
                        _this["graphics"+j+"b"].inputEnabled=false;
                        _this["graphics"+j+"c"].inputEnabled=false;
                        _this["graphics"+j+"d"].inputEnabled=false;
                        _this["graphics"+j+"e"].inputEnabled=false;
                }
        }
            }
        else if(_this.Question==3)
            {
             if((_this.graphics4a.visible==true)&&(_this.graphics5b.visible==true)&&(_this.graphics1c.visible==true||_this.graphics2c.visible==true)
                &&(_this.graphics2d.visible==true||_this.graphics1d.visible==true)&&(_this.graphics3e.visible==true))
        {
            for(var i=1;i<=12;i++)
                {
                   _this["n"+i].alpha=1;
               _this["n"+i+"a"].alpha=1;
               _this["n"+i+"b"].alpha=1;
               _this["n"+i+"c"].alpha=1;
               _this["n"+i+"d"].alpha=1;
                }
         _this.n22.alpha=1;
         _this.n22a.alpha=1;
         _this.n22b.alpha=1;
         _this.n22c.alpha=1;
         _this.n22d.alpha=1;
            
         _this.n23.alpha=1;
         _this.n23a.alpha=1;
         _this.n23b.alpha=1;
         _this.n23c.alpha=1;
         _this.n23d.alpha=1;
            
         _this.n24.alpha=1;
         _this.n24a.alpha=1;
         _this.n24b.alpha=1;
         _this.n24c.alpha=1;
         _this.n24d.alpha=1;
            _this.hand4.visible=true;
            _this.hand1.visible=false;
            _this.Sound=4;
            _this.flag1=1;
            this.time.events.add(4000, function(){ _this.hand4.visible=false;},this);
            _this.grid.frame=4;
        }
            if((_this.graphics5a.visible==true)&&(_this.graphics4b.visible==true)&&(_this.graphics1c.visible==true||_this.graphics2c.visible==true)
                &&(_this.graphics2d.visible==true||_this.graphics1d.visible==true)&&(_this.graphics3e.visible==true))
        {
         _this.n1.alpha=1;
         _this.n1a.alpha=1;
         _this.n1b.alpha=1;
         _this.n1c.alpha=1;
         _this.n1d.alpha=1;
         _this.n2.alpha=1;
         _this.n2a.alpha=1;
         _this.n2b.alpha=1;
         _this.n2c.alpha=1;
         _this.n2d.alpha=1;
         _this.n3.alpha=1;
         _this.n3a.alpha=1;
         _this.n3b.alpha=1;
         _this.n3c.alpha=1;
         _this.n3d.alpha=1;
         _this.n4.alpha=1;
         _this.n4a.alpha=1;
         _this.n4b.alpha=1;
         _this.n4c.alpha=1;
         _this.n4d.alpha=1;
         _this.n22.alpha=1;
         _this.n22a.alpha=1;
         _this.n22b.alpha=1;
         _this.n22c.alpha=1;
         _this.n22d.alpha=1;
            _this.hand2.visible=true;
            _this.hand1.visible=false;
            _this.hand4.visible=false;
            _this.Sound=2;
            _this.flag1=1;
            _this.AudioPlay=false;
            this.time.events.add(4000, function(){ _this.hand2.visible=false;},this);
            _this.grid.frame=2;
        }
                if((_this.graphics4a.visible==true)&&(_this.graphics5b.visible==true)&&(_this.graphics2c.visible==true)
                &&(_this.graphics1d.visible==true)&&(_this.graphics3e.visible==true))
                    {
                     for(var i=1;i<26;i++)
           {
               _this["n"+i].alpha=1;
               _this["n"+i+"a"].alpha=1;
               _this["n"+i+"b"].alpha=1;
               _this["n"+i+"c"].alpha=1;
               _this["n"+i+"d"].alpha=1;
           }
            _this.hand2.visible=false;
            _this.hand4.visible=false;
            _this.hand1.visible=false;
            _this.Sound=1;
            _this.flag1=1;
            _this.grid.frame=5;
            for(var j=1;j<=5;j++)
                {
                        _this["graphics"+j+"a"].inputEnabled=false;
                        _this["graphics"+j+"b"].inputEnabled=false;
                        _this["graphics"+j+"c"].inputEnabled=false;
                        _this["graphics"+j+"d"].inputEnabled=false;
                        _this["graphics"+j+"e"].inputEnabled=false;
                }   
                    }
                
            }
        else if(_this.Question==4)
            {
             if((_this.graphics2a.visible==true||_this.graphics3a.visible==true)&&(_this.graphics2b.visible==true||_this.graphics3b.visible==true)&&(_this.graphics1c.visible==true)&&
                (_this.graphics4d.visible==true||_this.graphics5d.visible==true)&&(_this.graphics4e.visible==true||_this.graphics5e.visible==true))
        {
         _this.n1.alpha=1;
         _this.n1a.alpha=1;
         _this.n1b.alpha=1;
         _this.n1c.alpha=1;
         _this.n1d.alpha=1;
         _this.n2.alpha=1;
         _this.n2a.alpha=1;
         _this.n2b.alpha=1;
         _this.n2c.alpha=1;
         _this.n2d.alpha=1;
         _this.n3.alpha=1;
         _this.n3a.alpha=1;
         _this.n3b.alpha=1;
         _this.n3c.alpha=1;
         _this.n3d.alpha=1;
         _this.n4.alpha=1;
         _this.n4a.alpha=1;
         _this.n4b.alpha=1;
         _this.n4c.alpha=1;
         _this.n4d.alpha=1;
         _this.n22.alpha=1;
         _this.n22a.alpha=1;
         _this.n22b.alpha=1;
         _this.n22c.alpha=1;
         _this.n22d.alpha=1;
            _this.hand2.visible=true;
            _this.hand1.visible=false;
            _this.Sound=2;
            _this.flag1=1;
            this.time.events.add(4000, function(){ _this.hand2.visible=false;},this);
            _this.grid.frame=2;
        }
            if((_this.graphics2a.visible==true||_this.graphics3a.visible==true)&&(_this.graphics2b.visible==true||_this.graphics3b.visible==true)&&(_this.graphics1c.visible==true)&&
               (_this.graphics5d.visible==true)&&(_this.graphics4e.visible==true))
        {
            for(var i=1;i<26;i++)
           {
               _this["n"+i].alpha=1;
               _this["n"+i+"a"].alpha=1;
               _this["n"+i+"b"].alpha=1;
               _this["n"+i+"c"].alpha=1;
               _this["n"+i+"d"].alpha=1;
           }
            _this.hand5.visible=true;
            _this.hand2.visible=false;
            _this.hand1.visible=false;
            _this.Sound=5;
            _this.flag1=1;
            _this.AudioPlay=false;
            this.time.events.add(4000, function(){ _this.hand5.visible=false;},this);
            _this.grid.frame=5;
        }
                if((_this.graphics2a.visible==true)&&(_this.graphics3b.visible==true)&&(_this.graphics1c.visible==true)&&
               (_this.graphics5d.visible==true)&&(_this.graphics4e.visible==true))
        {
            
         for(var i=1;i<26;i++)
           {
               _this["n"+i].alpha=1;
               _this["n"+i+"a"].alpha=1;
               _this["n"+i+"b"].alpha=1;
               _this["n"+i+"c"].alpha=1;
               _this["n"+i+"d"].alpha=1;
           }
            _this.hand5.visible=false;
            _this.hand2.visible=false;
            _this.hand1.visible=false;
            _this.Sound=1;
            _this.flag1=1;
            _this.grid.frame=5;
            for(var j=1;j<=5;j++)
                {
                        _this["graphics"+j+"a"].inputEnabled=false;
                        _this["graphics"+j+"b"].inputEnabled=false;
                        _this["graphics"+j+"c"].inputEnabled=false;
                        _this["graphics"+j+"d"].inputEnabled=false;
                        _this["graphics"+j+"e"].inputEnabled=false;
                }
        }
            }
        
        else if(_this.Question==5)
            {
             if((_this.graphics1a.visible==true||_this.graphics5a.visible==true||_this.graphics4a.visible==true)&&
                (_this.graphics1b.visible==true||_this.graphics5b.visible==true||_this.graphics4b.visible==true)&&(_this.graphics1c.visible==true||_this.graphics5c.visible==true||_this.graphics4c.visible==true)&&
               (_this.graphics2d.visible==true||_this.graphics3d.visible==true)&&
               (_this.graphics2e.visible==true||_this.graphics3e.visible==true))
                    {
         _this.n1.alpha=1;
         _this.n1a.alpha=1;
         _this.n1b.alpha=1;
         _this.n1c.alpha=1;
         _this.n1d.alpha=1;
         _this.n2.alpha=1;
         _this.n2a.alpha=1;
         _this.n2b.alpha=1;
         _this.n2c.alpha=1;
         _this.n2d.alpha=1;
         _this.n3.alpha=1;
         _this.n3a.alpha=1;
         _this.n3b.alpha=1;
         _this.n3c.alpha=1;
         _this.n3d.alpha=1;
         _this.n4.alpha=1;
         _this.n4a.alpha=1;
         _this.n4b.alpha=1;
         _this.n4c.alpha=1;
         _this.n4d.alpha=1;
         _this.n22.alpha=1;
         _this.n22a.alpha=1;
         _this.n22b.alpha=1;
         _this.n22c.alpha=1;
         _this.n22d.alpha=1;
            _this.grid.frame=2;
            _this.hand2.visible=true;
            _this.hand1.visible=false;
             _this.Sound=2;
             _this.flag1=1;
            this.time.events.add(4000, function(){ _this.hand2.visible=false;},this);
        }
            if((_this.graphics1a.visible==true||_this.graphics4a.visible==true)&&
                (_this.graphics1b.visible==true||_this.graphics4b.visible==true)&&(_this.graphics5c.visible==true)&&
               (_this.graphics2d.visible==true||_this.graphics3d.visible==true)&&
               (_this.graphics2e.visible==true||_this.graphics3e.visible==true))
                    {
         for(var i=1;i<=8;i++)
                {
                  _this["n"+i].alpha=1;
               _this["n"+i+"a"].alpha=1;
               _this["n"+i+"b"].alpha=1;
               _this["n"+i+"c"].alpha=1;
               _this["n"+i+"d"].alpha=1;  
                }
                     _this.n22.alpha=1;
                     _this.n22a.alpha=1;
                     _this.n22b.alpha=1;
                     _this.n22c.alpha=1;
                     _this.n22d.alpha=1;

                     _this.n23.alpha=1;
                     _this.n23a.alpha=1;
                     _this.n23b.alpha=1;
                     _this.n23c.alpha=1;
                     _this.n23d.alpha=1;
                        _this.grid.frame=4;
                        _this.hand3.visible=true;
                        _this.hand2.visible=false;
                        _this.hand1.visible=false;
                        _this.Sound=4;
                        _this.flag1=1;
                        _this.AudioPlay=false;
                        this.time.events.add(4000, function(){ _this.hand3.visible=false;},this);
            }
                if((_this.graphics1a.visible==true)&&(_this.graphics4b.visible==true)&&(_this.graphics5c.visible==true)
                   &&(_this.graphics2d.visible==true||_this.graphics3d.visible==true)&&
               (_this.graphics2e.visible==true||_this.graphics3e.visible==true))
                    {
                       for(var i=1;i<=12;i++)
                {
                  _this["n"+i].alpha=1;
               _this["n"+i+"a"].alpha=1;
               _this["n"+i+"b"].alpha=1;
               _this["n"+i+"c"].alpha=1;
               _this["n"+i+"d"].alpha=1;  
                }
         _this.n22.alpha=1;
         _this.n22a.alpha=1;
         _this.n22b.alpha=1;
         _this.n22c.alpha=1;
         _this.n22d.alpha=1;
            
         _this.n23.alpha=1;
         _this.n23a.alpha=1;
         _this.n23b.alpha=1;
         _this.n23c.alpha=1;
         _this.n23d.alpha=1;
                        
         _this.n24.alpha=1;
         _this.n24a.alpha=1;
         _this.n24b.alpha=1;
         _this.n24c.alpha=1;
         _this.n24d.alpha=1;
            _this.grid.frame=4;
            _this.hand4.visible=true;
            _this.hand2.visible=false; 
            _this.hand1.visible=false; 
            _this.hand3.visible=false; 
            _this.Sound=4;
            _this.flag1=1;
            _this.AudioPlay=false;
            this.time.events.add(4000, function(){ _this.hand4.visible=false;},this);
                    }
                if((_this.graphics1a.visible==true)&&
                (_this.graphics4b.visible==true)&&(_this.graphics5c.visible==true)&&
               (_this.graphics2d.visible==true)&&
               (_this.graphics3e.visible==true))
                    {
            
         for(var i=1;i<26;i++)
           {
               _this["n"+i].alpha=1;
               _this["n"+i+"a"].alpha=1;
               _this["n"+i+"b"].alpha=1;
               _this["n"+i+"c"].alpha=1;
               _this["n"+i+"d"].alpha=1;
           }
            _this.hand3.visible=false;
            _this.hand4.visible=false;
            _this.hand2.visible=false;
            _this.hand1.visible=false;
            _this.grid.frame=5;
            _this.Sound=1;
            _this.flag1=1;
            for(var j=1;j<=5;j++)
                {
                        _this["graphics"+j+"a"].inputEnabled=false;
                        _this["graphics"+j+"b"].inputEnabled=false;
                        _this["graphics"+j+"c"].inputEnabled=false;
                        _this["graphics"+j+"d"].inputEnabled=false;
                        _this["graphics"+j+"e"].inputEnabled=false;
                }
        }
            }
        else if(_this.Question==6)
            {
             if((_this.graphics5a.visible==true)&&(_this.graphics3b.visible==true||_this.graphics4b.visible==true)&&(_this.graphics3c.visible==true||_this.graphics4c.visible==true)&&
                (_this.graphics2d.visible==true||_this.graphics1d.visible==true)&&(_this.graphics2e.visible==true||_this.graphics1e.visible==true))
                    {
         _this.n1.alpha=1;
         _this.n1a.alpha=1;
         _this.n1b.alpha=1;
         _this.n1c.alpha=1;
         _this.n1d.alpha=1;
         _this.n2.alpha=1;
         _this.n2a.alpha=1;
         _this.n2b.alpha=1;
         _this.n2c.alpha=1;
         _this.n2d.alpha=1;
         _this.n3.alpha=1;
         _this.n3a.alpha=1;
         _this.n3b.alpha=1;
         _this.n3c.alpha=1;
         _this.n3d.alpha=1;
         _this.n4.alpha=1;
         _this.n4a.alpha=1;
         _this.n4b.alpha=1;
         _this.n4c.alpha=1;
         _this.n4d.alpha=1;
         _this.n22.alpha=1;
         _this.n22a.alpha=1;
         _this.n22b.alpha=1;
         _this.n22c.alpha=1;
         _this.n22d.alpha=1;
            _this.hand2.visible=true;
            _this.hand1.visible=false;
                        _this.Sound=2;
                        _this.flag1=1;
            this.time.events.add(4000, function(){ _this.hand2.visible=false;},this);
            _this.grid.frame=2;
        }
                if((_this.graphics5a.visible==true)&&(_this.graphics4b.visible==true)&&(_this.graphics3c.visible==true)&&
                (_this.graphics2d.visible==true)&&(_this.graphics1e.visible==true))
                   {   
                        for(var i=1;i<26;i++)
           {
               _this["n"+i].alpha=1;
               _this["n"+i+"a"].alpha=1;
               _this["n"+i+"b"].alpha=1;
               _this["n"+i+"c"].alpha=1;
               _this["n"+i+"d"].alpha=1;
           }
            _this.hand2.visible=false;
            _this.hand1.visible=false;
            _this.grid.frame=5;
                       _this.Sound=1;
                       _this.flag1=1;
            for(var j=1;j<=5;j++)
                {
                        _this["graphics"+j+"a"].inputEnabled=false;
                        _this["graphics"+j+"b"].inputEnabled=false;
                        _this["graphics"+j+"c"].inputEnabled=false;
                        _this["graphics"+j+"d"].inputEnabled=false;
                        _this["graphics"+j+"e"].inputEnabled=false;
                }
            }
            }
        _this.getVoice();
    },
    /****************************firstquestionwheel************************/
     gotoFirstQuestion:function(){
         _this.count3=0;
                      _this.count4=0;
         _this.Question = 1;
//          _this.no1++;
         console.log("first");
         _this.case=_this.add.sprite(400,300,'pv3_4case');
        _this.case.anchor.setTo(0.5);
        _this.case.scale.setTo(1);
         
          _this.locker=_this.add.sprite(375,290,'pv3_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(1);
        
        _this.rotate=_this.add.sprite(558,297,'pv3_4rotate');
        _this.rotate.anchor.setTo(0.4915, 0.486);
        _this.rotate.scale.setTo(1);
         
         _this.rotate1=_this.add.sprite(558,297,'pv3_4rotate2');
        _this.rotate1.anchor.setTo(0.5,0.5);
        _this.rotate1.scale.setTo(1);
         
        _this.grid=_this.add.sprite(248,295,'pv3_45X5');
        _this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1);
        _this.grid.frame=1;
         
         _this.hand1=_this.add.sprite(152,115,'pv3_4hand');
         _this.hand1.anchor.setTo(0.5);
         _this.hand1.scale.setTo(0.6);
         _this.hand1.visible=true;
         this.time.events.add(3000, function(){ _this.hand1.visible=false;},this);
         _this.hand2=_this.add.sprite(200,115,'pv3_4hand');
         _this.hand2.anchor.setTo(0.5);
         _this.hand2.scale.setTo(0.6);
         _this.hand2.visible=false;
         _this.hand3=_this.add.sprite(240,115,'pv3_4hand');
         _this.hand3.anchor.setTo(0.5);
         _this.hand3.scale.setTo(0.6);
         _this.hand3.visible=false;
         _this.hand4=_this.add.sprite(290,115,'pv3_4hand');
         _this.hand4.anchor.setTo(0.5);
         _this.hand4.scale.setTo(0.6);
         _this.hand4.visible=false;
         _this.hand5=_this.add.sprite(335,115,'pv3_4hand');
         _this.hand5.anchor.setTo(0.5);
         _this.hand5.scale.setTo(0.6);
         _this.hand5.visible=false;
       _this.gridset1();
         _this.setQuestion1();
         _this.enablebuttons();
             
    },
   /*******************************secondquestionwheel*******************/
   gotoSecondQuestion:function(){
       _this.count3=0;
                      _this.count4=0;
       _this.Question = 2;
//   _this.no1++;
         console.log("second");
      _this.case=_this.add.sprite(400,300,'pv3_4case');
        _this.case.anchor.setTo(0.5);
        _this.case.scale.setTo(1);
         
          _this.locker=_this.add.sprite(375,290,'pv3_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(1);
        
        _this.rotate=_this.add.sprite(558,297,'pv3_4rotate');
        _this.rotate.anchor.setTo(0.4915, 0.486);
        _this.rotate.scale.setTo(1);
         
         _this.rotate1=_this.add.sprite(558,297,'pv3_4rotate2');
        _this.rotate1.anchor.setTo(0.5,0.5);
        _this.rotate1.scale.setTo(1);
         
        _this.grid=_this.add.sprite(248,295,'pv3_45X5');
        _this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1);
        _this.grid.frame=1;
         
         _this.hand1=_this.add.sprite(152,115,'pv3_4hand');
         _this.hand1.anchor.setTo(0.5);
         _this.hand1.scale.setTo(0.6);
         _this.hand1.visible=true;
         this.time.events.add(3000, function(){ _this.hand1.visible=false;},this);
         _this.hand2=_this.add.sprite(200,115,'pv3_4hand');
         _this.hand2.anchor.setTo(0.5);
         _this.hand2.scale.setTo(0.6);
         _this.hand2.visible=false;
         _this.hand3=_this.add.sprite(240,115,'pv3_4hand');
         _this.hand3.anchor.setTo(0.5);
         _this.hand3.scale.setTo(0.6);
         _this.hand3.visible=false;
         _this.hand4=_this.add.sprite(290,115,'pv3_4hand');
         _this.hand4.anchor.setTo(0.5);
         _this.hand4.scale.setTo(0.6);
         _this.hand4.visible=false;
         _this.hand5=_this.add.sprite(335,115,'pv3_4hand');
         _this.hand5.anchor.setTo(0.5);
         _this.hand5.scale.setTo(0.6);
         _this.hand5.visible=false;
         
       _this.gridset1();
         _this.setQuestion1();
         _this.enablebuttons();
    },
    /*****************************thirdquestioncircle**********************/
      gotoThirdQuestion:function(){
          _this.count3=0;
                      _this.count4=0;
      _this.Question = 3;
//          _this.no1++;
         console.log("third");
       _this.case=_this.add.sprite(400,300,'pv3_4case');
        _this.case.anchor.setTo(0.5);
        _this.case.scale.setTo(1);
         
          _this.locker=_this.add.sprite(375,290,'pv3_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(1);
        
        _this.rotate=_this.add.sprite(558,297,'pv3_4rotate');
        _this.rotate.anchor.setTo(0.4915, 0.486);
        _this.rotate.scale.setTo(1);
         
         _this.rotate1=_this.add.sprite(558,297,'pv3_4rotate2');
        _this.rotate1.anchor.setTo(0.5,0.5);
        _this.rotate1.scale.setTo(1);
         
        _this.grid=_this.add.sprite(248,295,'pv3_45X5');
        _this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1);
        _this.grid.frame=1;
         
         _this.hand1=_this.add.sprite(152,115,'pv3_4hand');
         _this.hand1.anchor.setTo(0.5);
         _this.hand1.scale.setTo(0.6);
         _this.hand1.visible=true;
         this.time.events.add(3000, function(){ _this.hand1.visible=false;},this);
         _this.hand2=_this.add.sprite(200,115,'pv3_4hand');
         _this.hand2.anchor.setTo(0.5);
         _this.hand2.scale.setTo(0.6);
         _this.hand2.visible=false;
         _this.hand3=_this.add.sprite(240,115,'pv3_4hand');
         _this.hand3.anchor.setTo(0.5);
         _this.hand3.scale.setTo(0.6);
         _this.hand3.visible=false;
         _this.hand4=_this.add.sprite(290,115,'pv3_4hand');
         _this.hand4.anchor.setTo(0.5);
         _this.hand4.scale.setTo(0.6);
         _this.hand4.visible=false;
         _this.hand5=_this.add.sprite(335,115,'pv3_4hand');
         _this.hand5.anchor.setTo(0.5);
         _this.hand5.scale.setTo(0.6);
         _this.hand5.visible=false;
          
       _this.gridset1();
         _this.setQuestion1();
         _this.enablebuttons();
    },
    /*********************************fourthquestioncircle***********************/
       gotoFourthQuestion:function(){
         _this.count3=0;
                      _this.count4=0;
    	 _this.Question = 4;
//         _this.no1++;
         console.log("four");
         _this.case=_this.add.sprite(400,300,'pv3_4case');
        _this.case.anchor.setTo(0.5);
        _this.case.scale.setTo(1);
         
          _this.locker=_this.add.sprite(375,290,'pv3_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(1);
        
        _this.rotate=_this.add.sprite(558,297,'pv3_4rotate');
        _this.rotate.anchor.setTo(0.4915, 0.486);
        _this.rotate.scale.setTo(1);
         
         _this.rotate1=_this.add.sprite(558,297,'pv3_4rotate2');
        _this.rotate1.anchor.setTo(0.5,0.5);
        _this.rotate1.scale.setTo(1);
         
        _this.grid=_this.add.sprite(248,295,'pv3_45X5');
        _this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1);
        _this.grid.frame=1;
         
         _this.hand1=_this.add.sprite(152,115,'pv3_4hand');
         _this.hand1.anchor.setTo(0.5);
         _this.hand1.scale.setTo(0.6);
         _this.hand1.visible=true;
         this.time.events.add(3000, function(){ _this.hand1.visible=false;},this);
         _this.hand2=_this.add.sprite(200,115,'pv3_4hand');
         _this.hand2.anchor.setTo(0.5);
         _this.hand2.scale.setTo(0.6);
         _this.hand2.visible=false;
         _this.hand3=_this.add.sprite(240,115,'pv3_4hand');
         _this.hand3.anchor.setTo(0.5);
         _this.hand3.scale.setTo(0.6);
         _this.hand3.visible=false;
         _this.hand4=_this.add.sprite(290,115,'pv3_4hand');
         _this.hand4.anchor.setTo(0.5);
         _this.hand4.scale.setTo(0.6);
         _this.hand4.visible=false;
         _this.hand5=_this.add.sprite(335,115,'pv3_4hand');
         _this.hand5.anchor.setTo(0.5);
         _this.hand5.scale.setTo(0.6);
         _this.hand5.visible=false;
          
       _this.gridset1();
         _this.setQuestion1();
         _this.enablebuttons();
    },
    /******************fifthquestionwheel***************************************/
     gotoFifthQuestion:function(){
         _this.count3=0;
        _this.count4=0;
        _this.Question = 5;
//         _this.no1++;
         console.log("five");
        _this.case=_this.add.sprite(400,300,'pv3_4case');
        _this.case.anchor.setTo(0.5);
        _this.case.scale.setTo(1);
         
          _this.locker=_this.add.sprite(375,290,'pv3_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(1);
        
        _this.rotate=_this.add.sprite(558,297,'pv3_4rotate');
        _this.rotate.anchor.setTo(0.4915, 0.486);
        _this.rotate.scale.setTo(1);
         
         _this.rotate1=_this.add.sprite(558,297,'pv3_4rotate2');
        _this.rotate1.anchor.setTo(0.5,0.5);
        _this.rotate1.scale.setTo(1);
         
        _this.grid=_this.add.sprite(248,295,'pv3_45X5');
        _this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1);
        _this.grid.frame=1;
         
         _this.hand1=_this.add.sprite(152,115,'pv3_4hand');
         _this.hand1.anchor.setTo(0.5);
         _this.hand1.scale.setTo(0.6);
         _this.hand1.visible=true;
         this.time.events.add(3000, function(){ _this.hand1.visible=false;},this);
         _this.hand2=_this.add.sprite(200,115,'pv3_4hand');
         _this.hand2.anchor.setTo(0.5);
         _this.hand2.scale.setTo(0.6);
         _this.hand2.visible=false;
         _this.hand3=_this.add.sprite(240,115,'pv3_4hand');
         _this.hand3.anchor.setTo(0.5);
         _this.hand3.scale.setTo(0.6);
         _this.hand3.visible=false;
         _this.hand4=_this.add.sprite(290,115,'pv3_4hand');
         _this.hand4.anchor.setTo(0.5);
         _this.hand4.scale.setTo(0.6);
         _this.hand4.visible=false;
         _this.hand5=_this.add.sprite(335,115,'pv3_4hand');
         _this.hand5.anchor.setTo(0.5);
         _this.hand5.scale.setTo(0.6);
         _this.hand5.visible=false;
          
       _this.gridset1();
         _this.setQuestion1();
         _this.enablebuttons();
    },
 /******************sixthquestionwheel***************************************/
     gotosixthQuestion:function(){
         _this.count3=0;
                      _this.count4=0;
        _this.Question = 6;
//         _this.no1++;
         console.log("six");
        _this.case=_this.add.sprite(400,300,'pv3_4case');
        _this.case.anchor.setTo(0.5);
        _this.case.scale.setTo(1);
         
          _this.locker=_this.add.sprite(375,290,'pv3_4locker');
        _this.locker.anchor.setTo(0.5);
        _this.locker.scale.setTo(1);
        
        _this.rotate=_this.add.sprite(558,297,'pv3_4rotate');
        _this.rotate.anchor.setTo(0.4915, 0.486);
        _this.rotate.scale.setTo(1);
         
         _this.rotate1=_this.add.sprite(558,297,'pv3_4rotate2');
        _this.rotate1.anchor.setTo(0.5,0.5);
        _this.rotate1.scale.setTo(1);
         
        _this.grid=_this.add.sprite(248,295,'pv3_45X5');
        _this.grid.anchor.setTo(0.5);
        _this.grid.scale.setTo(1);
        _this.grid.frame=1;
         
         _this.hand1=_this.add.sprite(152,115,'pv3_4hand');
         _this.hand1.anchor.setTo(0.5);
         _this.hand1.scale.setTo(0.6);
         _this.hand1.visible=true;
         this.time.events.add(3000, function(){ _this.hand1.visible=false;},this);
         _this.hand2=_this.add.sprite(200,115,'pv3_4hand');
         _this.hand2.anchor.setTo(0.5);
         _this.hand2.scale.setTo(0.6);
         _this.hand2.visible=false;
         _this.hand3=_this.add.sprite(240,115,'pv3_4hand');
         _this.hand3.anchor.setTo(0.5);
         _this.hand3.scale.setTo(0.6);
         _this.hand3.visible=false;
         _this.hand4=_this.add.sprite(290,115,'pv3_4hand');
         _this.hand4.anchor.setTo(0.5);
         _this.hand4.scale.setTo(0.6);
         _this.hand4.visible=false;
         _this.hand5=_this.add.sprite(335,115,'pv3_4hand');
         _this.hand5.anchor.setTo(0.5);
         _this.hand5.scale.setTo(0.6);
         _this.hand5.visible=false;
          
       _this.gridset1();
         _this.setQuestion1();
         _this.enablebuttons();
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
				this.state.start('pv3_5Score');
                 },this);
			}

	},
 
   getVoice:function(){
       
        _this.stopVoice();	
        _this.playQuestionSound = document.createElement('audio');
                    _this.src = document.createElement('source');
        console.log("voice "+_this.qArrays[_this.no1])
        
        switch(_this.qArrays[_this.no1])
        {
            case 1:
                 if(_this.flag1==0&&_this.AudioPlay==false)
                    {
                      if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5a.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5a.mp3");
                    }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5a.mp3");
                        }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5a.mp3");  
                        }  
                        _this.flag1=1;
                        //_this.AudioPlay=true;
                    }
                else if(_this.Sound==2&&_this.flag1==1&&_this.AudioPlay==false)
                    {
                       if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5b.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5b.mp3");
                    }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5b.mp3");  
                        }  
                        _this.AudioPlay=true;
                    }
                break;
            case 2:
                 if(_this.flag1==0&&_this.AudioPlay==false)
                    {
                      if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5a.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5a.mp3");
                    }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5a.mp3");  
                        }  
                        _this.flag1=1;
                        //_this.AudioPlay=true;
                    }
                else if(_this.Sound==2&&_this.flag1==1&&_this.AudioPlay==false)
                    {
                       if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5b.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5b.mp3");
                    }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5b.mp3");
                        }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5b.mp3");  
                        }  
                        _this.AudioPlay=true;
                    }
                else if(_this.Sound==3&&_this.flag1==1&&_this.AudioPlay==false)
                    {
                       if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5c.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5c.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5c.mp3");
                        }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5c.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5c.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5c.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5c.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5c.mp3");
                    }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5c.mp3");  
                        }  
                        _this.AudioPlay=true;
                    }
                break;
            case 3:
                if(_this.flag1==0&&_this.AudioPlay==false)
                    {
                      if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5a.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5a.mp3");
                    }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5a.mp3");  
                        }  
                        _this.flag1=1;
                        //_this.AudioPlay=true;
                    }
                else if(_this.Sound==2&&_this.flag1==1&&_this.AudioPlay==false)
                    {
                       if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5b.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5b.mp3");
                    }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5b.mp3");  
                        }  
                        _this.AudioPlay=true;
                    }
                else if(_this.Sound==4&&_this.flag1==1&&_this.AudioPlay==false)
                    {
                       if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5d.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5d.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5d.mp3");
                        }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5d.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5d.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5d.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5d.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5d.mp3");
                    }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5d.mp3");  
                        }  
                        _this.AudioPlay=true;
                    }
                break;
            case 4:
                if(_this.flag1==0&&_this.AudioPlay==false)
                    {
                      if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5a.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5a.mp3");
                    }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5a.mp3");  
                        }  
                        _this.flag1=1;
                        //_this.AudioPlay=true;
                    }
                else if(_this.Sound==2&&_this.flag1==1&&_this.AudioPlay==false)
                    {
                       if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5b.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5b.mp3");
                    }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5b.mp3");  
                        }  
                        _this.AudioPlay=true;
                    }
                else if(_this.Sound==5&&_this.flag1==1&&_this.AudioPlay==false)
                    {
                       if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5e.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5e.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5e.mp3");
                        }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5e.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5e.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5e.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5e.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5e.mp3");
                    }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5e.mp3");  
                        }  
                        _this.AudioPlay=true;
                    }
                break;
            case 5: 
                if(_this.flag1==0&&_this.AudioPlay==false)
                    {
                      if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5a.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5a.mp3");
                    }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5a.mp3");  
                        }  
                        _this.flag1=1;
                        //_this.AudioPlay=true;
                    }
                else if(_this.Sound==2&&_this.flag1==1&&_this.AudioPlay==false)
                    {
                       if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5b.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5b.mp3");
                    }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5b.mp3");  
                        }  
                        _this.AudioPlay=true;
                    }
                else if(_this.Sound==4&&_this.flag1==1&&_this.AudioPlay==false)
                    {
                       if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5d.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5d.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5d.mp3");
                        }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5d.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5d.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5d.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5d.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5d.mp3");
                    }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5d.mp3");  
                        }  
                        _this.AudioPlay=true;
                    }
                break;
            case 6:
                if(_this.flag1==0&&_this.AudioPlay==false)
                    {
                      if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5a.mp3");
                        }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5a.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5a.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5a.mp3");
                    }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5a.mp3");  
                        }  
                        _this.flag1=1;
                        //_this.AudioPlay=true;
                    }
                else if(_this.Sound==2&&_this.flag1==1&&_this.AudioPlay==false)
                    {
                       if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/English/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Hindi/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Kannada/NSPVG3.5b.mp3");
                        }
                        else if(window.languageSelected == "Gujrati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Gujrati/NSPVG3.5b.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Marathi/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Telugu/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Tamil/NSPVG3.5b.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Urdu/NSPVG3.5b.mp3");
                    }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv3.5/Odiya/NSPVG3.5b.mp3");  
                        }  
                        _this.AudioPlay=true;
                    }
                
                break;
            
        }
        console.log("flag "+_this.flag1)
        console.log("flag2 "+_this.flag2)
        console.log("flag3 "+_this.flag3)
        _this.playQuestionSound.appendChild(_this.src);
                    _this.playQuestionSound.play();
    },
  
   enablebuttons:function(){
         _this.numGroup = this.add.group();
       
        _this.rightbtn =_this.numGroup.create(860,270,'pv3_4right');
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
            if((_this.graphics4a.visible==true)&&(_this.graphics2b.visible==true)&&(_this.graphics5c.visible==true)&&(_this.graphics3d.visible==true)&&(_this.graphics1e.visible==true))
            {
                _this.Rotate();
                this.time.events.add(2000, function(){ 
                     _this.rotate1.destroy();  
                       _this.rotate.destroy(); 
                    _this.grid.destroy();
                    for(var j=1;j<=5;j++)
                {
                        _this["graphics"+j+"a"].destroy();
                        _this["graphics"+j+"b"].destroy();
                        _this["graphics"+j+"c"].destroy();
                        _this["graphics"+j+"d"].destroy();
                        _this["graphics"+j+"e"].destroy();
                }  
                   // _this.locker.frame=1;
                   _this.animdoor = _this.locker.animations.add('door');
         _this.animdoor.play();
                                        _this.correctAns();   
                                                        },this);
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
            _this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                _this.shake.shake(10,_this.grid);
                _this.shake.shake(10,_this.locker);
                _this.shake.shake(10,_this.case);
				_this.rotate.frame=1;
                this.time.events.add(500, function(){
                    _this.rotate.frame=0;},this);
            }
          }
           else if( _this.Question==2)
          {
            if((_this.graphics5a.visible==true)&&(_this.graphics4b.visible==true)&&(_this.graphics1c.visible==true)&&(_this.graphics3d.visible==true)&&(_this.graphics2e.visible==true))
            {
              _this.Rotate();
                this.time.events.add(2000, function(){ 
                     _this.rotate1.destroy();  
                       _this.rotate.destroy(); 
                    _this.grid.destroy();
                    for(var j=1;j<=5;j++)
                {
                        _this["graphics"+j+"a"].destroy();
                        _this["graphics"+j+"b"].destroy();
                        _this["graphics"+j+"c"].destroy();
                        _this["graphics"+j+"d"].destroy();
                        _this["graphics"+j+"e"].destroy();
                }  
                    //_this.locker.frame=1;
                    _this.animdoor = _this.locker.animations.add('door');
         _this.animdoor.play();
                                        _this.correctAns();   
                                                        },this);
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
            _this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                _this.shake.shake(10,_this.grid);
                _this.shake.shake(10,_this.locker);
                _this.shake.shake(10,_this.case);
				_this.rotate.frame=1;
                this.time.events.add(500, function(){
                    _this.rotate.frame=0;},this);
            }
          }
          else if( _this.Question==3)
          {
            if((_this.graphics4a.visible==true)&&(_this.graphics5b.visible==true)&&(_this.graphics2c.visible==true)
                &&(_this.graphics1d.visible==true)&&(_this.graphics3e.visible==true))
            {
                _this.Rotate();
                this.time.events.add(2000, function(){ 
                     _this.rotate1.destroy();  
                       _this.rotate.destroy(); 
                    _this.grid.destroy();
                    for(var j=1;j<=5;j++)
                {
                        _this["graphics"+j+"a"].destroy();
                        _this["graphics"+j+"b"].destroy();
                        _this["graphics"+j+"c"].destroy();
                        _this["graphics"+j+"d"].destroy();
                        _this["graphics"+j+"e"].destroy();
                }  
                    //_this.locker.frame=1;
                    _this.animdoor = _this.locker.animations.add('door');
         _this.animdoor.play();
                                        _this.correctAns();   
                                                        },this);
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
            _this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                _this.shake.shake(10,_this.grid);
                _this.shake.shake(10,_this.locker);
                _this.shake.shake(10,_this.case);
				_this.rotate.frame=1;
                this.time.events.add(500, function(){
                    _this.rotate.frame=0;},this);
            }
          }
            else if( _this.Question==4)
          {
            if((_this.graphics2a.visible==true)&&(_this.graphics3b.visible==true)&&(_this.graphics1c.visible==true)&&
               (_this.graphics5d.visible==true)&&(_this.graphics4e.visible==true))
            {
                _this.Rotate();
                this.time.events.add(2000, function(){ 
                     _this.rotate1.destroy();  
                       _this.rotate.destroy(); 
                    _this.grid.destroy();
                    for(var j=1;j<=5;j++)
                {
                        _this["graphics"+j+"a"].destroy();
                        _this["graphics"+j+"b"].destroy();
                        _this["graphics"+j+"c"].destroy();
                        _this["graphics"+j+"d"].destroy();
                        _this["graphics"+j+"e"].destroy();
                }  
                    //_this.locker.frame=1;
                    _this.animdoor = _this.locker.animations.add('door');
         _this.animdoor.play();
                                        _this.correctAns();   
                                                        },this);
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
            _this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                _this.shake.shake(10,_this.grid);
                _this.shake.shake(10,_this.locker);
                _this.shake.shake(10,_this.case);
				_this.rotate.frame=1;
                this.time.events.add(500, function(){
                    _this.rotate.frame=0;},this);
            }
          }
            else if( _this.Question==5)
          {
            if((_this.graphics1a.visible==true)&&
                (_this.graphics4b.visible==true)&&(_this.graphics5c.visible==true)&&
               (_this.graphics2d.visible==true)&&
               (_this.graphics3e.visible==true))
            {
                _this.Rotate();
                this.time.events.add(2000, function(){ 
                     _this.rotate1.destroy();  
                       _this.rotate.destroy(); 
                    _this.grid.destroy();
                    for(var j=1;j<=5;j++)
                {
                        _this["graphics"+j+"a"].destroy();
                        _this["graphics"+j+"b"].destroy();
                        _this["graphics"+j+"c"].destroy();
                        _this["graphics"+j+"d"].destroy();
                        _this["graphics"+j+"e"].destroy();
                }  
                    //_this.locker.frame=1;
                    _this.animdoor = _this.locker.animations.add('door');
         _this.animdoor.play();
                                        _this.correctAns();   
                                                        },this);
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
            _this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                _this.shake.shake(10,_this.grid);
                _this.shake.shake(10,_this.locker);
                _this.shake.shake(10,_this.case);
				_this.rotate.frame=1;
                this.time.events.add(500, function(){
                    _this.rotate.frame=0;},this);
            }
          }
            else if( _this.Question==6)
          {
            if((_this.graphics5a.visible==true)&&(_this.graphics4b.visible==true)&&(_this.graphics3c.visible==true)&&
                (_this.graphics2d.visible==true)&&(_this.graphics1e.visible==true))
            {
                _this.Rotate();
                this.time.events.add(2000, function(){ 
                     _this.rotate1.destroy();  
                       _this.rotate.destroy(); 
                    _this.grid.destroy();
                    for(var j=1;j<=5;j++)
                {
                        _this["graphics"+j+"a"].destroy();
                        _this["graphics"+j+"b"].destroy();
                        _this["graphics"+j+"c"].destroy();
                        _this["graphics"+j+"d"].destroy();
                        _this["graphics"+j+"e"].destroy();
                }  
                    //_this.locker.frame=1;
                    _this.animdoor = _this.locker.animations.add('door');
         _this.animdoor.play();
                                        _this.correctAns();   
                                                        },this);
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
            _this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                _this.shake.shake(10,_this.grid);
                _this.shake.shake(10,_this.locker);
                _this.shake.shake(10,_this.case);
				_this.rotate.frame=1;
                this.time.events.add(500, function(){
                    _this.rotate.frame=0;},this);
            }
          }
        },this);
        _this.rightbtn.events.onInputUp.add(function(target){
           target.frame=0;
       }, this);
       
    },
     Rotate:function(){
//         _this.rotate.angle += 360;
         _this.add.tween(_this.rotate).to( { angle: 70 }, 1000, "Linear", true);

    _this.time.events.add(400, function(){ 
        _this.lockSound1 = _this.add.audio('lockSound1');
          _this.lockSound1.play(); 
    });
    _this.time.events.add(1500, function(){
        _this.add.tween(_this.rotate1).to( { angle: -50 }, 800, "Linear", true);
        _this.time.events.add(400, function () {
            _this.lockSound2 = _this.add.audio('lockSound2');
          _this.lockSound2.play();
        });
		
     });
         
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
    
};