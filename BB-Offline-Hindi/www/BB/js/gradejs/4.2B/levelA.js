Game.grade4_2Blevel1=function(){};
var bgA;
var starsGroup;
var cloud;
var no1;
var mainFlag;
var opt1,opt2,opt3;
var no2;
var count1;
var count;
var qArrays;
var flagmain11Anim;
var animlev1;
var a1;
var waterFilling;
var opt1,opt2,opt3;
var cloud2,cloud3,cloud4,cloud5,cloud6,cloud7,cloud8;
var optionsgrp;
var wronggraphics1,wronggraphics2,wronggraphics3;
var wrngGraphicgrp;
var boxb1,boxb2,boxb3;
var counterText;
var counterText1;
var counterText2;
var maingroup;
var darkbg1;
var darkbg2;
var value1=7;
var value2=11;
var value3=13;
var i,j,k;
var speaker;
var w1,w2;
var AnimOpt1,AnimOpt2,AnimOpt3;
var tick;
var noofAttempts;
var timer;
var AnsTimerCount;
var wronggraphics1,wronggraphics2,wronggraphics3;
var numGroup;
var enterTxt;
var txtbox;
var grpnum=new Array();
var boxclick;
var minutes,seconds,counterForTimer;
var numGroup;
var box,box1,box2;
var counterText;
var counterText1;
var gameid;
var noofAttempts;
var timer;
var AnsTimerCount;

Game.grade4_2Blevel1.prototype={
init:function(game)
    {
        _this = this;
        _this.clickSound = _this.add.audio('ClickSound');
        _this.waterFillingSound =_this.add.audio('waterFill');
        _this.watersplash =_this.add.audio('watersplash');
        _this.wmusic=_this.add.audio('waudio');
	    _this.cmusic=_this.add.audio('celebr');
		_this.gameid = "4.2B";
         
      /*  _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);
        */

        telInitializer.gameIdInit("volume4_2B",gradeSelected);
    },

     preload:function(game){
        if(!window.grade4MVG3){

            window.grade4MVG3 = true;

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

           this.load.image('Level42B_bgA',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/bgA.png');
        this.load.atlas('Level42B_btn',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/btn.png',window.baseUrl+'json/gradeJson/4.2B/btn.json');
        this.load.image('Level42B_bg3',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/bg3.png');
        this.load.image('Level42B_tittleBaar',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/tittleBaar.png');
        this.load.atlas('Level42B_replay',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/4.2B/reply.json');
        this.load.image('Level42B_footer',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/footer.png');
        this.load.image('Level42B_Topbar',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/Topbar.png');
        this.load.image('Level42B_timer',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/timer.png');
        this.load.image('Level42B_dottedBox',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/dottedBox.png');
        this.load.image('Level42B_c',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/c.png');
        this.load.atlas('Level42B_calNum',window.baseUrl+'assets/gradeAssets/4.2B/calNum.png' ,window.baseUrl+'json/gradeJson/4.2B/calNum.json');
        this.load.image('Level42B_redmark',window.baseUrl+'assets/gradeAssets/4.2B/redmark.png');
    
        this.load.atlas('Level42B_bucket',window.baseUrl+'assets/gradeAssets/4.2B/bucket.png' ,window.baseUrl+'json/gradeJson/4.2B/bucket.json');
        this.load.atlas('Level42B_box',window.baseUrl+'assets/gradeAssets/4.2B/box.png',window.baseUrl+'json/gradeJson/4.2B/box.json');
        this.load.atlas('Level42B_tank',window.baseUrl+'assets/gradeAssets/4.2B/tank.png' ,window.baseUrl+'json/gradeJson/4.2B/tank.json');
        this.load.atlas('Level42B_drum',window.baseUrl+'assets/gradeAssets/4.2B/drum.png' ,window.baseUrl+'json/gradeJson/4.2B/drum.json');
        this.load.atlas('Level42B_drum2',window.baseUrl+'assets/gradeAssets/4.2B/drum2.png' ,window.baseUrl+'json/gradeJson/4.2B/drum2.json');
        this.load.atlas('Level42B_pot',window.baseUrl+'assets/gradeAssets/4.2B/pot.png' ,window.baseUrl+'json/gradeJson/4.2B/pot.json');
        this.load.atlas('Level42B_pot2',window.baseUrl+'assets/gradeAssets/4.2B/pot2.png' ,window.baseUrl+'json/gradeJson/4.2B/pot2.json');
        this.load.image('Level42B_darkbg2',window.baseUrl+'assets/gradeAssets/4.2B/darkbg2.png');
        this.load.image('Level42B_mainbox',window.baseUrl+'assets/gradeAssets/4.2B/mainbox.png');
        this.load.atlas('Level42B_cooker',window.baseUrl+'assets/gradeAssets/4.2B/cooker.png' ,window.baseUrl+'json/gradeJson/4.2B/cooker.json');
        this.load.atlas('Level42B_bottle2',window.baseUrl+'assets/gradeAssets/4.2B/bottle2.png' ,window.baseUrl+'json/gradeJson/4.2B/bottle2.json');
        this.load.atlas('Level42B_jug2',window.baseUrl+'assets/gradeAssets/4.2B/jug2.png' ,window.baseUrl+'json/gradeJson/4.2B/jug2.json');
        this.load.atlas('Level42B_mugB',window.baseUrl+'assets/gradeAssets/4.2B/mug.png' ,window.baseUrl+'json/gradeJson/4.2B/mug.json');
        this.load.atlas('Level42B_orangebottleB',window.baseUrl+'assets/gradeAssets/4.2B/orangebottle.png' ,window.baseUrl+'json/gradeJson/4.2B/orangebottle.json');
         this.load.atlas('Level42B_orangebottlenew',window.baseUrl+'assets/gradeAssets/4.2B/orangebottlenew.png' ,window.baseUrl+'json/gradeJson/4.2B/orangebottlenew.json');
        this.load.atlas('Level42B_canB',window.baseUrl+'assets/gradeAssets/4.2B/can.png' ,window.baseUrl+'json/gradeJson/4.2B/can.json');
        this.load.atlas('Level42B_greenbot22',window.baseUrl+'assets/gradeAssets/4.2B/greenbot22.png' ,window.baseUrl+'json/gradeJson/4.2B/greenbot22.json');
        this.load.atlas('Level42B_bottle22',window.baseUrl+'assets/gradeAssets/4.2B/bottle22.png' ,window.baseUrl+'json/gradeJson/4.2B/bottle22.json');
        this.load.atlas('Level42B_pinkglass',window.baseUrl+'assets/gradeAssets/4.2B/pinkglass.png' ,window.baseUrl+'json/gradeJson/4.2B/pinkglass.json');
        this.load.atlas('Level42B_greencup',window.baseUrl+'assets/gradeAssets/4.2B/greencup.png' ,window.baseUrl+'json/gradeJson/4.2B/greencup.json');
        this.load.atlas('Level42B_smallbottle',window.baseUrl+'assets/gradeAssets/4.2B/smallbottle.png' ,window.baseUrl+'json/gradeJson/4.2B/smallbottle.json');
        this.load.atlas('Level42B_bottle44',window.baseUrl+'assets/gradeAssets/4.2B/bottle44.png' ,window.baseUrl+'json/gradeJson/4.2B/bottle44.json');
        this.load.atlas('Level42B_redmug',window.baseUrl+'assets/gradeAssets/4.2B/redmug.png' ,window.baseUrl+'json/gradeJson/4.2B/redmug.json');
        this.load.atlas('Level42B_glass44',window.baseUrl+'assets/gradeAssets/4.2B/glass44.png' ,window.baseUrl+'json/gradeJson/4.2B/glass44.json');
        this.load.atlas('Level42B_pot222',window.baseUrl+'assets/gradeAssets/4.2B/pot222.png' ,window.baseUrl+'json/gradeJson/4.2B/pot222.json');
        this.load.atlas('Level42B_can222',window.baseUrl+'assets/gradeAssets/4.2B/can222.png' ,window.baseUrl+'json/gradeJson/4.2B/can222.json');
        this.load.atlas('Level42B_watercontainer',window.baseUrl+'assets/gradeAssets/4.2B/watercontainer.png' ,window.baseUrl+'json/gradeJson/4.2B/watercontainer.json');
        this.load.image('Level42B_shadow7',window.baseUrl+'assets/gradeAssets/4.2B/shadow7.png');
        this.load.image('Level42B_shadow8',window.baseUrl+'assets/gradeAssets/4.2B/shadow8.png');
        this.load.image('Level42B_shadow9',window.baseUrl+'assets/gradeAssets/4.2B/shadow9.png');
        this.load.atlas('Level42B_a11',window.baseUrl+'assets/gradeAssets/4.2B/a11.png',window.baseUrl+'json/gradeJson/4.2B/a11.json');
        this.load.atlas('Level42B_boxb',window.baseUrl+'assets/gradeAssets/4.2B/boxb.png' ,window.baseUrl+'json/gradeJson/4.2B/boxb.json');
        this.load.atlas('Level42B_rightBtn',window.baseUrl+'assets/gradeAssets/4.2B/rightBtn.png' ,window.baseUrl+'json/gradeJson/4.2B/rightBtn.json');
        this.load.atlas('Level42B_eraser',window.baseUrl+'assets/gradeAssets/4.2B/eraser.png' ,window.baseUrl+'json/gradeJson/4.2B/eraser.json');


    }

    },


	create:function(game){
		_this.amplify = null;
		this.displaynopad=0;
        _this.boxposition=null;
        _this.countpos=0;
        wrongflag=0;
        _this.option1=0;
        _this.option2=0;
        noofAttempts=0;
        AnsTimerCount=0;
        _this.sceneCount=0;  
        //baudio.play(); 
		//baudio.loopFull(0.6);
        qArrays = new Array();
        qArrays = [1,2,3,4,5,6,7,8];
        qArrays = this.shuffle(qArrays);
        no1=0;
        no2=0;
        count1=0;
        count=0;
        minutes=0;
        seconds=0;
        counterForTimer=0;
       // counterText=0;
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

        this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();

         bg1 = this.add.sprite(0,0, 'Level42B_bgA');
        var TopBar=this.add.sprite(0,0,'Level42B_Topbar');
    
    TopBar.scale.setTo(1,1);
	_this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            //console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            //_this.stopVoice();
            _this.clickSound.play();
            _this.state.start('grade4levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'Level42A_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           
          _this.clickSound.play();
           
            _this.getVoice(no1);
            
        },_this);
    //  var lamp=this.add.sprite(910,7,'lamp');
    //  var points=this.add.sprite(720,7,'points');
    // var diamondBox=this.add.sprite(820,7,'diamondBox');
   /* var dottedBox=this.add.sprite(70,7,'Level42B_dottedBox');
    var numTxt1 = this.add.text(45,17, 'PRACTICE');
    numTxt1.anchor.setTo(0.5);
    numTxt1.align = 'center';
    numTxt1.font = 'Alte Haas Grotesk';
    numTxt1.fontSize = 12;
    numTxt1.fill = '#ffffff';
    numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
    dottedBox.addChild(numTxt1);*/
        
    /*var numTxt2 = this.add.text(195,24, 'Volume');
    numTxt2.anchor.setTo(0.5);
    numTxt2.align = 'center';
    numTxt2.font = 'Alte Haas Grotesk';
    numTxt2.fontSize = 18;
    numTxt2.fill = '#ffffff';
    numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
        
    var timebg=this.add.sprite(305,6,'Level42B_timer');
    timebg.scale.setTo(1,1);
        
    timeDisplay = this.add.text(330,22,minutes + ' : '+ seconds);
    
    timeDisplay.anchor.setTo(0.5);
    timeDisplay.align = 'center';
    timeDisplay.font = 'myfont';
    timeDisplay.fontWeight = 'normal';
    timeDisplay.fontSize = 20;
    //text.fontWeight = 'bold';
    timeDisplay.fill = '#ADFF2F';
        //var footer = this.add.sprite(0,465,'Level42B_footer');
       // footer.scale.setTo(1,1);
        
         this.generateStarsForTheScene(6)
       
                //no1++;
				this.getQuestion();

   
    
    },
    getQuestion:function(target)
    {
        noofAttempts = 0;
         AnsTimerCount=0;
         _this.sceneCount++;

        timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, function(){
            AnsTimerCount++;
			this.updateTimer();
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();


        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
    	////console.log("get"+no1);
		grpnum=new Array();
		_this.questionid = 1;
        switch(qArrays[no1])
    	{
    		case 1: this.gotoFirstQuestion();
    				break;
    		case 2: this.gotoSecondQuestion();
    				break;
    		case 3: this.gotoThirdQuestion();
    				break;
    		case 4: this.gotoFourthQuestion();
    				break;
    		case 5: this.gotoFifthQuestion();
    				break;
    		case 6: this.gotoSixthQuestion();
    				break;
    		case 7: this.gotoSeventhQuestion();
    				break;
            case 8: this.gotoEighthQuestion();
    				break;


    	}
        
    },
    addQuestion:function(no2)
    {
        if(timer!=null)
        {
            timer.stop();
           timer = null;
        }
           //console.log("here");
           this.time.events.add(2000, function(){
  
           //     var tween = this.add.tween(flagGroup1);
           //tween.to({ x: -1000 }, 0, 'Linear', true, 0);
               
                var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
         
        tween.to({ x: -1000 }, 0, 'Linear', true, 0);
        tween1.to({ x: -1000 }, 0, 'Linear', true, 0);
         tween2.to({ x: -1000 }, 0, 'Linear', true, 0);
          tween3.to({ x: -1000 }, 0, 'Linear', true, 0);
          
               
               
           tween.onComplete.add(this.changeQuestion, this);


               
               
               
            }, this);
            


    },
    
     gotoFirstQuestion:function(){
         var red1 = this.add.sprite(235,220,'Level42B_redmark');
         red1.scale.setTo(0.75,0.75);
         var red2 = this.add.sprite(465,240,'Level42B_redmark');
         red2.scale.setTo(0.75,0.75);
         var red3 = this.add.sprite(685,280,'Level42B_redmark');
         red3.scale.setTo(0.75,0.75);
         
    	 no1++;
         i=1;
         j=1;
         k=1;
         
         var sh1=this.add.sprite(151,397,'Level42B_shadow7');
         sh1.alpha=0.5;
         sh1.anchor.setTo(0.5,1);
         sh1.scale.setTo(0.8,1.3);
          
         var sh2=this.add.sprite(410,397,'Level42B_shadow8');
         sh2.alpha=0.5;
         sh2.anchor.setTo(0.5,1);
         sh2.scale.setTo(1.1,1.3);
         
         var sh3=this.add.sprite(665,397,'Level42B_shadow9');
         sh3.alpha=0.5;
         sh3.anchor.setTo(0.5,1);
         sh3.scale.setTo(0.6,0.9);
         
         box2=this.add.sprite(112,402,'Level42B_box');
         box2.scale.setTo(1,0.8);
         box2.alpha=0;
         box2.name="opt3box";
         
         box1=this.add.sprite(378,402,'Level42B_box');
         box1.scale.setTo(1,0.8);
         box1.alpha=0;
         box1.name="opt2box";
         
         box=this.add.sprite(628,402,'Level42B_box');
        box.scale.setTo(1,0.8);
         box.alpha=0; 
         box.name="opt1box";
         box.inputEnabled=true;
         
         boxb1=this.add.sprite(155,420,'Level42B_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;

         boxb2=this.add.sprite(415,420,'Level42B_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42B_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
         
         opt1=this.add.sprite(165,440,'Level42B_tank','<Group>_449 instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(1,0.9);
         opt1.name = "tank2";
         opt1.value = 13;

         opt2=this.add.sprite(425,435,'Level42B_drum','<Group>_450 instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,0.8);
         opt2.name = "drum2";
         opt2.value = 11;

         opt3=this.add.sprite(670,420,'Level42B_pot','<Group>_90 instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.8,0.8);
         opt3.name = "pot2";
         opt3.value = 7;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+220, this.world.centerY+20);
         wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
         wronggraphics1.beginFill(0xFF700B, 1);
         wronggraphics1.lineTo(0, 90);
         wronggraphics1.lineTo(130, 90);
         wronggraphics1.lineTo(130, 0);
         wronggraphics1.lineTo(0, 0);
         wronggraphics1.angle = 180;
         wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
         wronggraphics1.input.useHandCursor = true;
         
         wronggraphics2 = this.add.graphics(this.world.centerX+30, this.world.centerY+30);
         wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
         wronggraphics2.beginFill(0xFF700B, 1);
         wronggraphics2.lineTo(0, 130);
         wronggraphics2.lineTo(130, 130);
         wronggraphics2.lineTo(130, 0);
         wronggraphics2.lineTo(0, 0);
         wronggraphics2.angle = 180;
         wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = false;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-210, this.world.centerY+10);
         wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
         wronggraphics3.beginFill(0xFF700B, 1);
         wronggraphics3.lineTo(0, 170);
         wronggraphics3.lineTo(170, 170);
         wronggraphics3.lineTo(170, 0);
         wronggraphics3.lineTo(0, 0);
         wronggraphics3.angle = 180;
         wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = false;
     
         var mainbox=this.add.sprite(790,70,'Level42B_mainbox');
         mainbox.name = "mainbox";
        
         a1=this.add.sprite(797,68,'Level42B_a11','<Group>_373 instance 10000');
         if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(1300,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
         
         //this.addNumberPad(); 
         
         a1.name="a1";
         this.mains();
         a1.frame=0;
         
         darkbg1=this.add.sprite(0,43,'Level42B_darkbg2');
         darkbg1.scale.setTo(0.9,1);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,43,'Level42B_darkbg2');
         darkbg2.scale.setTo(0.8,1);
         darkbg2.visible=true;
     
         
         
         shadowgroup=this.add.group();
         optionsgrp = this.add.group();
         wrngGraphicgrp = this.add.group();
         maingroup = this.add.group();
          
         shadowgroup.add(sh1);
         shadowgroup.add(sh2);
         shadowgroup.add(sh3);
                
         optionsgrp.add(opt1);
         optionsgrp.add(opt2);
         optionsgrp.add(opt3);
         
         wrngGraphicgrp.add(wronggraphics1);
         wrngGraphicgrp.add(wronggraphics2);
         wrngGraphicgrp.add(wronggraphics3);
         
         maingroup.add(mainbox);
         maingroup.add(a1);
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
		 maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
         maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         //maingroup.add(numGroup);
         maingroup.add(red1);
         maingroup.add(red2);
         maingroup.add(red3);
         shadowgroup.x=1000;
         maingroup.x = 1000;
         optionsgrp.x=1000;
         
         
         var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
         var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
         tween.to({ x: 0 }, 0, 'Linear', true, 0);
         tween1.to({ x: 0 }, 0, 'Linear', true, 0);
         tween2.to({ x: 0 }, 0, 'Linear', true, 0);
         tween3.to({ x: 0 }, 0, 'Linear', true, 0);
    },
   
    gotoSecondQuestion:function(){

         var red1 = this.add.sprite(235,250,'Level42B_redmark');
         red1.scale.setTo(0.75,0.75);
         var red2 = this.add.sprite(427,228,'Level42B_redmark');
         red2.scale.setTo(0.75,0.75);
         var red3 = this.add.sprite(715,225,'Level42B_redmark');
         red3.scale.setTo(0.75,0.75);
        
    	 no1++;
         i=1;
         j=1;
         k=1;
         
         var sh1=this.add.sprite(150,380,'Level42B_shadow7');
         sh1.alpha=0.5;
         sh1.anchor.setTo(0.5,1);
         sh1.scale.setTo(0.75,1.3);
          
         var sh2=this.add.sprite(409,380,'Level42B_shadow8');
        sh2.alpha=0.5;
         sh2.anchor.setTo(0.5,1);
         sh2.scale.setTo(0.7,1);
         
         var sh3=this.add.sprite(665,380,'Level42B_shadow9');
        sh3.alpha=0.5;
         sh3.anchor.setTo(0.5,1);
         sh3.scale.setTo(0.6,0.9);
         
         boxb1=this.add.sprite(155,420,'Level42B_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42B_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42B_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
        
         box2=this.add.sprite(122,402,'Level42B_box');
         box2.scale.setTo(1,0.8);
         box2.alpha=0;
         box2.name="opt3box";
         
         box1=this.add.sprite(376,402,'Level42B_box');
         box1.scale.setTo(1,0.8);
         box1.alpha=0;
         box1.name="opt2box";
         
         box=this.add.sprite(635,402,'Level42B_box');
        box.scale.setTo(1,0.8);
         box.alpha=0; 
         box.name="opt1box";
         box.inputEnabled=true;
         
         opt1=this.add.sprite(178,464,'Level42B_cooker','<Group>_73 instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(0.8,0.9);
         opt1.name = "cookerB";
         opt1.value = 11;

         opt2=this.add.sprite(435,464,'Level42B_bottle2','<Group>_74 instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,1);
         opt2.name = "bottleB";
         opt2.value = 5;

         opt3=this.add.sprite(688,424,'Level42B_jug2','<Group>_57 instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.8,0.9);
         opt3.name = "jugB";
         opt3.value = 7;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+210, this.world.centerY+30);
         wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
         wronggraphics1.beginFill(0xFF700B, 1);
         wronggraphics1.lineTo(0, 140);
         wronggraphics1.lineTo(90, 140);
         wronggraphics1.lineTo(90, 0);
         wronggraphics1.lineTo(0, 0);
         wronggraphics1.angle = 180;
         wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
         wronggraphics1.input.useHandCursor = true;
         
         wronggraphics2 = this.add.graphics(this.world.centerX+5, this.world.centerY+36);
         wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
         wronggraphics2.beginFill(0xFF700B, 1);
         wronggraphics2.lineTo(0, 140);
         wronggraphics2.lineTo(90, 140);
         wronggraphics2.lineTo(90, 0);
         wronggraphics2.lineTo(0, 0);
         wronggraphics2.angle = 180;
         wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
         wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-230, this.world.centerY+17);
         wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
         wronggraphics3.beginFill(0xFF700B, 1);
         wronggraphics3.lineTo(0, 130);
         wronggraphics3.lineTo(170, 130);
         wronggraphics3.lineTo(170, 0);
         wronggraphics3.lineTo(0, 0);
         wronggraphics3.angle = 180;
         wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
         wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(790,70,'Level42B_mainbox');
         mainbox.name = "mainbox";
         
         a1=this.add.sprite(800,68,'Level42B_a11','<Group>_373 instance 10000');
         if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(1300,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
        
         //this.addNumberPad(); 
         a1.name="a1";
         this.mains();
         a1.frame=2;
       
         darkbg1=this.add.sprite(0,43,'Level42B_darkbg2');
         darkbg1.scale.setTo(0.9,1);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,43,'Level42B_darkbg2');
         darkbg2.scale.setTo(0.8,1);
         darkbg2.visible=true;
         
         shadowgroup=this.add.group();
         optionsgrp = this.add.group();
         wrngGraphicgrp = this.add.group();
         maingroup = this.add.group();
          
         shadowgroup.add(sh1);
         shadowgroup.add(sh2);
         shadowgroup.add(sh3);
                
         optionsgrp.add(opt1);
         optionsgrp.add(opt2);
         optionsgrp.add(opt3);
         
         wrngGraphicgrp.add(wronggraphics1);
         wrngGraphicgrp.add(wronggraphics2);
         wrngGraphicgrp.add(wronggraphics3);

         maingroup.add(mainbox);
         maingroup.add(a1);
     
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
         maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
         maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         //maingroup.add(numGroup);
         maingroup.add(red1);
         maingroup.add(red2);
         maingroup.add(red3);
         shadowgroup.x=1000;
         maingroup.x = 1000;
         optionsgrp.x=1000;
         var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
         var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
         tween.to({ x: 0 }, 0, 'Linear', true, 0);
         tween1.to({ x: 0 }, 0, 'Linear', true, 0);
         tween2.to({ x: 0 }, 0, 'Linear', true, 0);
         tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        
    },
    
      gotoThirdQuestion:function(){
         var red1 = this.add.sprite(197,190,'Level42B_redmark');
         red1.scale.setTo(0.75,0.75);
         var red2 = this.add.sprite(425,210,'Level42B_redmark');
         red2.scale.setTo(0.75,0.75);
         var red3 = this.add.sprite(718,210,'Level42B_redmark');
         red3.scale.setTo(0.75,0.75);

    	 no1++;
         i=1;
         j=1;
         k=1;
         
         var sh1=this.add.sprite(140,380,'Level42B_shadow7');
         sh1.alpha=0.5;
         sh1.anchor.setTo(0.5,1);
         sh1.scale.setTo(0.7,1.3);
          
         var sh2=this.add.sprite(413,375,'Level42B_shadow8');
          sh2.alpha=0.5;
         sh2.anchor.setTo(0.5,1);
         sh2.scale.setTo(0.5,1);
         
         var sh3=this.add.sprite(670,375,'Level42B_shadow9');
          sh3.alpha=0.5;
         sh3.anchor.setTo(0.5,1);
         sh3.scale.setTo(1.1,1);
          
         boxb1=this.add.sprite(155,420,'Level42B_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42B_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42B_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
         
         box2=this.add.sprite(106,402,'Level42B_box');
         box2.scale.setTo(1,0.8);
         box2.alpha=0;
         box2.name="opt3box";
         
         box1=this.add.sprite(380,402,'Level42B_box');
         box1.scale.setTo(1,0.8);
         box1.alpha=0;
         box1.name="opt2box";
         
         box=this.add.sprite(635,402,'Level42B_box');
        box.scale.setTo(1,0.8);
         box.alpha=0; 
         box.name="opt1box";
         box.inputEnabled=true;  
        
         opt1=this.add.sprite(165,418,'Level42B_mugB','<Group>_453 copy instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(0.8,0.8);
         opt1.name = "mugB";
         opt1.value = 9;

         opt2=this.add.sprite(418,385,'Level42B_orangebottlenew','<Group>_452 copy 3 instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,1);
         opt2.name = "orangebottleB";
         opt2.value = 3;

         opt3=this.add.sprite(685,422,'Level42B_canB','<Group>_51 copy instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.8,0.9);
         opt3.name = "canB";
         opt3.value = 11;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+210, this.world.centerY+40);
         wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
         wronggraphics1.beginFill(0xFF700B, 1);
         wronggraphics1.lineTo(0, 170);
         wronggraphics1.lineTo(90, 170);
         wronggraphics1.lineTo(90, 0);
         wronggraphics1.lineTo(0, 0);
         wronggraphics1.angle = 180;
         wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
         wronggraphics1.input.useHandCursor = true;
         
         wronggraphics2 = this.add.graphics(this.world.centerX-10, this.world.centerY+40);
         wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
         wronggraphics2.beginFill(0xFF700B, 1);
         wronggraphics2.lineTo(0, 170);
         wronggraphics2.lineTo(90, 170);
         wronggraphics2.lineTo(90, 0);
         wronggraphics2.lineTo(0, 0);
         wronggraphics2.angle = 180;
         wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
         wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-230, this.world.centerY+40);
         wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
         wronggraphics3.beginFill(0xFF700B, 1);
         wronggraphics3.lineTo(0, 170);
         wronggraphics3.lineTo(170, 170);
         wronggraphics3.lineTo(170, 0);
         wronggraphics3.lineTo(0, 0);
         wronggraphics3.angle = 180;
         wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
         wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(787,70,'Level42B_mainbox');
         mainbox.name = "mainbox";
         
         a1=this.add.sprite(795,70,'Level42B_a11','<Group>_373 instance 10000');
          if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(1300,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
          
         //this.addNumberPad(); 
         a1.name="a1";
         this.mains();
         a1.frame=4;
        
         darkbg1=this.add.sprite(0,43,'Level42B_darkbg2');
         darkbg1.scale.setTo(0.9,1);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,43,'Level42B_darkbg2');
         darkbg2.scale.setTo(0.8,1);
         darkbg2.visible=true;
    
         shadowgroup=this.add.group();
         optionsgrp = this.add.group();
         wrngGraphicgrp = this.add.group();
         maingroup = this.add.group();
          
         shadowgroup.add(sh1);
         shadowgroup.add(sh2);
         shadowgroup.add(sh3);
                
         optionsgrp.add(opt1);
         optionsgrp.add(opt2);
         optionsgrp.add(opt3);
         
         wrngGraphicgrp.add(wronggraphics1);
         wrngGraphicgrp.add(wronggraphics2);
         wrngGraphicgrp.add(wronggraphics3);
         
         maingroup.add(mainbox);
         maingroup.add(a1);
       
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
		 maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
         maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         //maingroup.add(numGroup);
         maingroup.add(red1);
         maingroup.add(red2);
         maingroup.add(red3);
         
         shadowgroup.x=1000;
         maingroup.x = 1000;
         optionsgrp.x=1000;
         var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
         var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
         tween.to({ x: 0 }, 0, 'Linear', true, 0);
         tween1.to({ x: 0 }, 0, 'Linear', true, 0);
         tween2.to({ x: 0 }, 0, 'Linear', true, 0);
         tween3.to({ x: 0 }, 0, 'Linear', true, 0); 

    },
    
       gotoFourthQuestion:function(){
         var red1 = this.add.sprite(165,202,'Level42B_redmark');
         red1.scale.setTo(0.75,0.75);
         var red2 = this.add.sprite(430,175,'Level42B_redmark');
         red2.scale.setTo(0.75,0.75);
         var red3 = this.add.sprite(682,240,'Level42B_redmark');
         red3.scale.setTo(0.75,0.75);
    	  no1++;
          i=1;
          j=1;
          k=1;
         
          var sh1=this.add.sprite(150,380,'Level42B_shadow7');
          sh1.alpha=0.5;
          sh1.anchor.setTo(0.5,1);
          sh1.scale.setTo(0.35,1);
          
          var sh2=this.add.sprite(415,380,'Level42B_shadow8');
           sh2.alpha=0.5;
          sh2.anchor.setTo(0.5,1);
          sh2.scale.setTo(0.7,1);
         
          var sh3=this.add.sprite(670,381,'Level42B_shadow9');
           sh3.alpha=0.5;
          sh3.anchor.setTo(0.5,1);
          sh3.scale.setTo(0.55,0.95);
           
          boxb1=this.add.sprite(155,420,'Level42B_boxb');
          boxb1.anchor.setTo(0.5,1);
          boxb1.scale.setTo(0.9,0.95);
          boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42B_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42B_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
           
         box2=this.add.sprite(116,402,'Level42B_box');
         box2.scale.setTo(1,0.8);
         box2.alpha=0;
         box2.name="opt3box";
         
         box1=this.add.sprite(380,402,'Level42B_box');
         box1.scale.setTo(1,0.8);
         box1.alpha=0;
         box1.name="opt2box";
         
         box=this.add.sprite(634,402,'Level42B_box');
        box.scale.setTo(1,0.8);
         box.alpha=0; 
         box.name="opt1box";
         box.inputEnabled=true;
         
          opt1=this.add.sprite(170,433,'Level42B_orangebottleB','<Group>_452 copy 3 instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(1.05,1.1);
         opt1.name = "orangebottleB";
         opt1.value = 6;

        opt2=this.add.sprite(430,432,'Level42B_greenbot22','<Group>_413 instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,1);
         opt2.name = "greenbot22";
        opt2.value = 6;

        opt3=this.add.sprite(694,464,'Level42B_bottle22','<Group>_74 copy 4 instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.9,1);
         opt3.name = "bottle22";
         opt3.value = 3;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+210, this.world.centerY+40);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics1.lineTo(0, 170);
        wronggraphics1.lineTo(90, 170);
        wronggraphics1.lineTo(90, 0);
        wronggraphics1.lineTo(0, 0);
       wronggraphics1.angle = 180;
       wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
         
                 wronggraphics2 = this.add.graphics(this.world.centerX-20, this.world.centerY+40);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         wronggraphics2.lineTo(0, 170);
        wronggraphics2.lineTo(90, 170);
        wronggraphics2.lineTo(90, 0);
        wronggraphics2.lineTo(0, 0);
       wronggraphics2.angle = 180;
       wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-230, this.world.centerY+40);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         wronggraphics3.lineTo(0, 170);
        wronggraphics3.lineTo(170, 170);
        wronggraphics3.lineTo(170, 0);
        wronggraphics3.lineTo(0, 0);
       wronggraphics3.angle = 180;
       wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(790,73,'Level42B_mainbox');
         mainbox.name = "mainbox";
         
          a1=this.add.sprite(798,69,'Level42B_a11','<Group>_373 instance 10000');
           if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(1300,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
         //this.addNumberPad(); 
         a1.name="a1";
         //a1.events.onInputDown.add(this.mains, this);
         this.mains();
         a1.frame=6;
         
   
         darkbg1=this.add.sprite(0,43,'Level42B_darkbg2');
         darkbg1.scale.setTo(0.9,1);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,43,'Level42B_darkbg2');
         darkbg2.scale.setTo(0.8,1);
         darkbg2.visible=true;
     
         
         
          shadowgroup=this.add.group();
          optionsgrp = this.add.group();
          wrngGraphicgrp = this.add.group();
          maingroup = this.add.group();
          
          shadowgroup.add(sh1);
          shadowgroup.add(sh2);
          shadowgroup.add(sh3);
                
        optionsgrp.add(opt1);
        optionsgrp.add(opt2);
        optionsgrp.add(opt3);
         
        wrngGraphicgrp.add(wronggraphics1);
        wrngGraphicgrp.add(wronggraphics2);
        wrngGraphicgrp.add(wronggraphics3);
         
        
         maingroup.add(mainbox);
         maingroup.add(a1);
        
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
		 maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
         maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         //maingroup.add(numGroup);
         maingroup.add(red1);
         maingroup.add(red2);
         maingroup.add(red3);
         
          shadowgroup.x=1000;
          maingroup.x = 1000;
         optionsgrp.x=1000;
          var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
        tween.to({ x: 0 }, 0, 'Linear', true, 0);
        tween1.to({ x: 0 }, 0, 'Linear', true, 0);
         tween2.to({ x: 0 }, 0, 'Linear', true, 0);
          tween3.to({ x: 0 }, 0, 'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

    },
    
     gotoFifthQuestion:function(){
         var red1 = this.add.sprite(194,243,'Level42B_redmark');
         red1.scale.setTo(0.75,0.75);
         var red2 = this.add.sprite(500,240,'Level42B_redmark');
         red2.scale.setTo(0.75,0.75);
         var red3 = this.add.sprite(682,270,'Level42B_redmark');
         red3.scale.setTo(0.75,0.75);

    	no1++;
           i=1;
         j=1;
         k=1;
         
          var sh1=this.add.sprite(150,360,'Level42B_shadow7');
         sh1.alpha=0.5;
         sh1.anchor.setTo(0.5,1);
          sh1.scale.setTo(0.35,1);
          
           var sh2=this.add.sprite(422,363,'Level42B_shadow8');
         sh2.alpha=0.5;
         sh2.anchor.setTo(0.5,1);
          sh2.scale.setTo(0.7,0.7);
         
            var sh3=this.add.sprite(665,360,'Level42B_shadow9');
         sh3.alpha=0.5;
         sh3.anchor.setTo(0.5,1);
          sh3.scale.setTo(0.5,0.7);
         
           boxb1=this.add.sprite(155,420,'Level42B_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42B_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42B_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
         
         box2=this.add.sprite(117,402,'Level42B_box');
         box2.scale.setTo(1,0.8);
         box2.alpha=0;
         box2.name="opt3box";
         
         box1=this.add.sprite(380,402,'Level42B_box');
         box1.scale.setTo(1,0.8);
         box1.alpha=0;
         box1.name="opt2box";
         
         box=this.add.sprite(632,402,'Level42B_box');
        box.scale.setTo(1,0.8);
         box.alpha=0; 
         box.name="opt1box";
         box.inputEnabled=true;
         
          opt1=this.add.sprite(170,415,'Level42B_pinkglass','<Group>_454 copy instance 10000');
         opt1.anchor.setTo(0.5,1);
         //opt1.scale.setTo(1,1);
         opt1.name = "pinkglass";
         opt1.value = 9;

        opt2=this.add.sprite(408,375,'Level42B_greencup','<Group>_455 copy 2 instance 10000');
         opt2.anchor.setTo(0.5,1);
         //opt2.scale.setTo(0.9,1);
         opt2.name = "greencup";
        opt2.value = 11;

        opt3=this.add.sprite(668,372,'Level42B_smallbottle','Symbol 19 instance 10001');
         opt3.anchor.setTo(0.5,1);
         //opt3.scale.setTo(0.9,1);
         opt3.name = "smallbottle";
         opt3.value = 5;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+210, this.world.centerY+90);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics1.lineTo(0, 170);
        wronggraphics1.lineTo(90, 170);
        wronggraphics1.lineTo(90, 0);
        wronggraphics1.lineTo(0, 0);
       wronggraphics1.angle = 180;
       wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
         
                 wronggraphics2 = this.add.graphics(this.world.centerX+5, this.world.centerY+96);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         wronggraphics2.lineTo(0, 170);
        wronggraphics2.lineTo(90, 170);
        wronggraphics2.lineTo(90, 0);
        wronggraphics2.lineTo(0, 0);
       wronggraphics2.angle = 180;
       wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-230, this.world.centerY+95);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         wronggraphics3.lineTo(0, 170);
        wronggraphics3.lineTo(170, 170);
        wronggraphics3.lineTo(170, 0);
        wronggraphics3.lineTo(0, 0);
       wronggraphics3.angle = 180;
  wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(790,70,'Level42B_mainbox');
         mainbox.name = "mainbox";
         
         a1=this.add.sprite(798,70,'Level42B_a11','<Group>_373 instance 10000');
         if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(1300,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
         //this.addNumberPad(); 
         a1.name="a1";
        // a1.events.onInputDown.add(this.addListeners, this);
         this.mains();
         a1.frame=8;
         
  
         darkbg1=this.add.sprite(0,43,'Level42B_darkbg2');
         darkbg1.scale.setTo(0.9,1);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,43,'Level42B_darkbg2');
         darkbg2.scale.setTo(0.8,1);
         darkbg2.visible=true;
     
        
         
          shadowgroup=this.add.group();
          optionsgrp = this.add.group();
        wrngGraphicgrp = this.add.group();
         maingroup = this.add.group();
          
          shadowgroup.add(sh1);
          shadowgroup.add(sh2);
          shadowgroup.add(sh3);
                
        optionsgrp.add(opt1);
        optionsgrp.add(opt2);
        optionsgrp.add(opt3);
         
        wrngGraphicgrp.add(wronggraphics1);
        wrngGraphicgrp.add(wronggraphics2);
        wrngGraphicgrp.add(wronggraphics3);
         
        
         maingroup.add(mainbox);
         maingroup.add(a1);
         
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
		 maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
         maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         //maingroup.add(numGroup);
         maingroup.add(red1);
         maingroup.add(red2);
         maingroup.add(red3);
         
          shadowgroup.x=1000;
          maingroup.x = 1000;
         optionsgrp.x=1000;
          var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
        tween.to({ x: 0 }, 0, 'Linear', true, 0);
        tween1.to({ x: 0 }, 0, 'Linear', true, 0);
         tween2.to({ x: 0 }, 0, 'Linear', true, 0);
          tween3.to({ x: 0 }, 0, 'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);
  
    },
    
    gotoSixthQuestion:function(){
        var red1 = this.add.sprite(182,235,'Level42B_redmark');
         red1.scale.setTo(0.75,0.75);
         var red2 = this.add.sprite(477,190,'Level42B_redmark');
         red2.scale.setTo(0.75,0.75);
         var red3 = this.add.sprite(708,285,'Level42B_redmark');
         red3.scale.setTo(0.75,0.75);
    	no1++;
          i=1;
         j=1;
         k=1;
         
          var sh1=this.add.sprite(150,380,'Level42B_shadow7');
        sh1.alpha=0.5;
         sh1.anchor.setTo(0.5,1);
          sh1.scale.setTo(0.35,1);
          
           var sh2=this.add.sprite(419,383,'Level42B_shadow8');
        sh2.alpha=0.5;
         sh2.anchor.setTo(0.5,1);
          sh2.scale.setTo(1.1,1);
         
            var sh3=this.add.sprite(661,383,'Level42B_shadow9');
        sh3.alpha=0.5;
         sh3.anchor.setTo(0.5,1);
          sh3.scale.setTo(0.7,0.7);
        
         boxb1=this.add.sprite(155,420,'Level42B_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42B_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42B_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
        
         box2=this.add.sprite(113,402,'Level42B_box');
         box2.scale.setTo(1,0.8);
         box2.alpha=0;
         box2.name="opt3box";
         
         box1=this.add.sprite(387,402,'Level42B_box');
         box1.scale.setTo(1,0.8);
         box1.alpha=0;
         box1.name="opt2box";
         
         box=this.add.sprite(623,402,'Level42B_box');
        box.scale.setTo(1,0.8);
         box.alpha=0; 
         box.name="opt1box";
         box.inputEnabled=true;
         
          opt1=this.add.sprite(170,437,'Level42B_pot2','<Group>_90 copy 4 instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(1,1);
         opt1.name = "greenpot";
         opt1.value = 4;

        opt2=this.add.sprite(433,433,'Level42B_drum2','<Group>_450 copy 2 instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,1);
         opt2.name = "drum222";
        opt2.value = 7;

        opt3=this.add.sprite(688,470,'Level42B_bucket','<Group>_15 instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.9,1);
         opt3.name = "bucket33";
         opt3.value = 3;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+190, this.world.centerY+40);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics1.lineTo(0, 170);
        wronggraphics1.lineTo(90, 170);
        wronggraphics1.lineTo(90, 0);
        wronggraphics1.lineTo(0, 0);
       wronggraphics1.angle = 180;
       wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
         
                 wronggraphics2 = this.add.graphics(this.world.centerX-20, this.world.centerY+40);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         wronggraphics2.lineTo(0, 170);
        wronggraphics2.lineTo(120, 170);
        wronggraphics2.lineTo(120, 0);
        wronggraphics2.lineTo(0, 0);
       wronggraphics2.angle = 180;
       wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-230, this.world.centerY+40);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         wronggraphics3.lineTo(0, 170);
        wronggraphics3.lineTo(170, 170);
        wronggraphics3.lineTo(170, 0);
        wronggraphics3.lineTo(0, 0);
       wronggraphics3.angle = 180;
      wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(783,70,'Level42B_mainbox');
         mainbox.name = "mainbox";
         
         a1=this.add.sprite(790,68,'Level42B_a11','<Group>_373 instance 10000');
        if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(1300,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
        //this.addNumberPad(); 
         a1.name="a1";
         //a1.events.onInputDown.add(this.addListeners, this);
        
        this.mains();
        a1.frame=10;
         
    
         
         darkbg1=this.add.sprite(0,43,'Level42B_darkbg2');
         darkbg1.scale.setTo(0.9,1);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,43,'Level42B_darkbg2');
         darkbg2.scale.setTo(0.8,1);
         darkbg2.visible=true;
     
         
          shadowgroup=this.add.group();
          optionsgrp = this.add.group();
        wrngGraphicgrp = this.add.group();
         maingroup = this.add.group();
          
          shadowgroup.add(sh1);
          shadowgroup.add(sh2);
          shadowgroup.add(sh3);
                
        optionsgrp.add(opt1);
        optionsgrp.add(opt2);
        optionsgrp.add(opt3);
         
        wrngGraphicgrp.add(wronggraphics1);
        wrngGraphicgrp.add(wronggraphics2);
        wrngGraphicgrp.add(wronggraphics3);
         
        
         maingroup.add(mainbox);
         maingroup.add(a1);
         
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
		 maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
         maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         //maingroup.add(numGroup);
         maingroup.add(red1);
         maingroup.add(red2);
         maingroup.add(red3);
         
          shadowgroup.x=1000;
          maingroup.x = 1000;
         optionsgrp.x=1000;
          var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
        tween.to({ x: 0 }, 0, 'Linear', true, 0);
        tween1.to({ x: 0 }, 0, 'Linear', true, 0);
         tween2.to({ x: 0 }, 0, 'Linear', true, 0);
          tween3.to({ x: 0 }, 0, 'Linear', true, 0);
       
    },
     gotoSeventhQuestion:function(){
         var red1 = this.add.sprite(167,220,'Level42B_redmark');
         red1.scale.setTo(0.75,0.75);
         var red2 = this.add.sprite(475,210,'Level42B_redmark');
         red2.scale.setTo(0.75,0.75);
         var red3 = this.add.sprite(693,278,'Level42B_redmark');
         red3.scale.setTo(0.75,0.75);
    	no1++;
           i=1;
         j=1;
         k=1;
         
          var sh1=this.add.sprite(147,375,'Level42B_shadow7');
         sh1.alpha=0.5;
         sh1.anchor.setTo(0.5,1);
          sh1.scale.setTo(0.35,1);
          
           var sh2=this.add.sprite(415,375,'Level42B_shadow8');
         sh2.alpha=0.5;
         sh2.anchor.setTo(0.5,1);
          sh2.scale.setTo(0.9,1);
         
            var sh3=this.add.sprite(659,375,'Level42B_shadow9');
         sh3.alpha=0.5;
         sh3.anchor.setTo(0.5,1);
          sh3.scale.setTo(0.5,0.7);
         
         boxb1=this.add.sprite(155,420,'Level42B_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42B_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42B_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
         
         box2=this.add.sprite(114,402,'Level42B_box');
         box2.scale.setTo(1,0.8);
         box2.alpha=0;
         box2.name="opt3box";
         
         box1=this.add.sprite(374,402,'Level42B_box');
         box1.scale.setTo(1,0.8);
         box1.alpha=0;
         box1.name="opt2box";
         
         box=this.add.sprite(627,402,'Level42B_box');
        box.scale.setTo(1,0.8);
         box.alpha=0; 
         box.name="opt1box";
         box.inputEnabled=true;
         
          opt1=this.add.sprite(175,457,'Level42B_bottle44','<Group>_74 copy 5 instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(1,1);
         opt1.name = "bottle44";
         opt1.value = 4;

         opt2=this.add.sprite(433,425,'Level42B_redmug','<Group>_458 instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,1);
         opt2.name = "redmug";
        opt2.value = 6;

        opt3=this.add.sprite(676,431,'Level42B_glass44','<Group>_454 copy 3 instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.9,1);
         opt3.name = "glass44";
         opt3.value = 3;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+190, this.world.centerY+40);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics1.lineTo(0, 170);
        wronggraphics1.lineTo(90, 170);
        wronggraphics1.lineTo(90, 0);
        wronggraphics1.lineTo(0, 0);
       wronggraphics1.angle = 180;
       wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
         
                 wronggraphics2 = this.add.graphics(this.world.centerX-20, this.world.centerY+40);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         wronggraphics2.lineTo(0, 170);
        wronggraphics2.lineTo(120, 170);
        wronggraphics2.lineTo(120, 0);
        wronggraphics2.lineTo(0, 0);
       wronggraphics2.angle = 180;
     wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-230, this.world.centerY+40);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         wronggraphics3.lineTo(0, 170);
        wronggraphics3.lineTo(170, 170);
        wronggraphics3.lineTo(170, 0);
        wronggraphics3.lineTo(0, 0);
       wronggraphics3.angle = 180;
      wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(795,65,'Level42B_mainbox');
         mainbox.name = "mainbox";
         
         a1=this.add.sprite(805,62,'Level42B_a11','<Group>_373 instance 10000');
         if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(1300,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
         //this.addNumberPad(); 
         a1.name="a1";
         //a1.events.onInputDown.add(this.addListeners, this);
         this.mains();
         a1.frame=12;
         
         
         darkbg1=this.add.sprite(0,43,'Level42B_darkbg2');
         darkbg1.scale.setTo(0.9,1);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,43,'Level42B_darkbg2');
         darkbg2.scale.setTo(0.8,1);
         darkbg2.visible=true;
     
         
          shadowgroup=this.add.group();
          optionsgrp = this.add.group();
        wrngGraphicgrp = this.add.group();
         maingroup = this.add.group();
          
          shadowgroup.add(sh1);
          shadowgroup.add(sh2);
          shadowgroup.add(sh3);
                
        optionsgrp.add(opt1);
        optionsgrp.add(opt2);
        optionsgrp.add(opt3);
         
        wrngGraphicgrp.add(wronggraphics1);
        wrngGraphicgrp.add(wronggraphics2);
        wrngGraphicgrp.add(wronggraphics3);
         
        
         maingroup.add(mainbox);
         maingroup.add(a1);
         
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
		 maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
         maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         //maingroup.add(numGroup);
         maingroup.add(red1);
         maingroup.add(red2);
         maingroup.add(red3);
         
          shadowgroup.x=1000;
          maingroup.x = 1000;
         optionsgrp.x=1000;
          var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
        tween.to({ x: 0 }, 0, 'Linear', true, 0);
        tween1.to({ x: 0 }, 0, 'Linear', true, 0);
         tween2.to({ x: 0 }, 0, 'Linear', true, 0);
          tween3.to({ x: 0 }, 0, 'Linear', true, 0);
    },
    
      gotoEighthQuestion:function(){
         var red1 = this.add.sprite(223,212,'Level42B_redmark');
         red1.scale.setTo(0.75,0.75);
         var red2 = this.add.sprite(455,265,'Level42B_redmark');
         red2.scale.setTo(0.75,0.75);
         var red3 = this.add.sprite(710,252,'Level42B_redmark');
         red3.scale.setTo(0.75,0.75);
    	no1++;
            i=1;
         j=1;
         k=1;
         
          var sh1=this.add.sprite(147,372,'Level42B_shadow7');
          sh1.alpha=0.5;
         sh1.anchor.setTo(0.5,1);
          sh1.scale.setTo(0.5,1);
          
           var sh2=this.add.sprite(415,375,'Level42B_shadow8');
          sh2.alpha=0.5;
         sh2.anchor.setTo(0.5,1);
          sh2.scale.setTo(0.8,1);
         
            var sh3=this.add.sprite(665,373,'Level42B_shadow9');
          sh3.alpha=0.5;
         sh3.anchor.setTo(0.5,1);
          sh3.scale.setTo(1.3,0.7);
          
        boxb1=this.add.sprite(155,420,'Level42B_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42B_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42B_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
          
         box2=this.add.sprite(117,402,'Level42B_box');
         box2.scale.setTo(1,0.8);
         box2.alpha=0;
         box2.name="opt3box";
         
         box1=this.add.sprite(385,402,'Level42B_box');
         box1.scale.setTo(1,0.8);
         box1.alpha=0;
         box1.name="opt2box";
         
         box=this.add.sprite(635,402,'Level42B_box');
        box.scale.setTo(1,0.8);
         box.alpha=0; 
         box.name="opt1box";
         box.inputEnabled=true;
         
          opt1=this.add.sprite(164,412,'Level42B_pot222','<Group>_460 instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(1,1);
         opt1.name = "pot222";
         opt1.value = 5;

        opt2=this.add.sprite(444,460,'Level42B_can222','<Group>_51 copy 2 instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,1);
         opt2.name = "can222";
        opt2.value = 3;

        opt3=this.add.sprite(676,423,'Level42B_watercontainer','<Group>_6_0 instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.8,0.9);
         opt3.name = "watercontainer";
         opt3.value = 4;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+200, this.world.centerY+40);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics1.lineTo(0, 170);
        wronggraphics1.lineTo(90, 170);
        wronggraphics1.lineTo(90, 0);
        wronggraphics1.lineTo(0, 0);
       wronggraphics1.angle = 180;
       wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
         
                 wronggraphics2 = this.add.graphics(this.world.centerX-20, this.world.centerY+40);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         wronggraphics2.lineTo(0, 170);
        wronggraphics2.lineTo(120, 170);
        wronggraphics2.lineTo(120, 0);
        wronggraphics2.lineTo(0, 0);
       wronggraphics2.angle = 180;
     wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-230, this.world.centerY+40);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         wronggraphics3.lineTo(0, 170);
        wronggraphics3.lineTo(170, 170);
        wronggraphics3.lineTo(170, 0);
        wronggraphics3.lineTo(0, 0);
       wronggraphics3.angle = 180;
      wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(790,70,'Level42B_mainbox');
         mainbox.name = "mainbox";
         
         a1=this.add.sprite(798,70,'Level42B_a11','<Group>_373 instance 10000');
          if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(1300,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
         //this.addNumberPad(); 
         a1.name="a1";
         //a1.events.onInputDown.add(this.addListeners, this);
          this.mains();
          a1.frame=14;
         
   
         
         darkbg1=this.add.sprite(0,43,'Level42B_darkbg2');
         darkbg1.scale.setTo(0.9,1);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,43,'Level42B_darkbg2');
         darkbg2.scale.setTo(0.8,1);
         darkbg2.visible=true;
     
       
         
          shadowgroup=this.add.group();
          optionsgrp = this.add.group();
        wrngGraphicgrp = this.add.group();
         maingroup = this.add.group();
          
          shadowgroup.add(sh1);
          shadowgroup.add(sh2);
          shadowgroup.add(sh3);
                
        optionsgrp.add(opt1);
        optionsgrp.add(opt2);
        optionsgrp.add(opt3);
         
        wrngGraphicgrp.add(wronggraphics1);
        wrngGraphicgrp.add(wronggraphics2);
        wrngGraphicgrp.add(wronggraphics3);
         
        
         maingroup.add(mainbox);
         maingroup.add(a1);
         
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
		 maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
         maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         //maingroup.add(numGroup);
         maingroup.add(red1);
         maingroup.add(red2);
         maingroup.add(red3);
          
          
          shadowgroup.x=1000;
          maingroup.x = 1000;
         optionsgrp.x=1000;
          var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
        tween.to({ x: 0 }, 0, 'Linear', true, 0);
        tween1.to({ x: 0 }, 0, 'Linear', true, 0);
         tween2.to({ x: 0 }, 0, 'Linear', true, 0);
          tween3.to({ x: 0 }, 0, 'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

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
    
    
    generateStarsForTheScene:function(count)
	{
		starsGroup = this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			starsGroup.create(this.world.centerX-15, 10, 'starAnim1');
			for(var j =0;j<i;j++)
			{
				if(starsGroup.getChildAt(j))
				{
					starsGroup.getChildAt(j).x-=15;
					starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
     mains:function(){
        //console.log("remove");
		if(_this.boxposition=="last"){
            i=1;
            opt3.frame=1;     
         }if(_this.boxposition=="middle"){
             j=1;
             //orangebottleB
           /*  if(((opt2.name=="greenbot22" || opt2.name=="drum222" || opt2.name=="redmug" || opt2.name=="can222" || opt2.name=="bottleB") &&*/ if(wrongflag==0)
            opt2.frame=0;     
             else
                 opt2.frame=1;
         }if(_this.boxposition=="first"){
             k=1;
            opt1.frame=1;     
         }

         _this.boxposition = null;
        a1.events.onInputDown.add(function(){
            _this.clickSound.play();
            i++;   
            //console.log("value of i==="+i);
            if(i<=opt3.value)
            {
                
                _this.waterFillingSound.play();
                opt3.frame += 1; 
                
                //console.log(i);
              // var temp = parseInt(counterText2.text)+1;
              //  //console.log(temp);
                //if(temp<opt3.value-1)
                //    counterText2.setText(temp);
               // else
                if(i==opt3.value)
                {
                   // box.alpha=1;
                    //a1.inputEnabled=false;
                    _this.waterFillingSound.pause();
                    _this.watersplash.play();
                  //  temp = parseInt(counterText2.text)+1;
                 //   counterText2.setText(temp);
                    //waterFilling.pause();
                    // waudio.play();
                    //shake.shake(10, opt3);
                    //opt3.frame=1;
                    //this.mains();
                    a1.inputEnabled=false;
                    this.time.events.add(500, function(){
                    box.alpha=1;
                    box.frame=1;
                    box.inputEnabled=true;
                    box.events.onInputDown.add(function(){
                        box.frame=1;
                        console.log("box");
                       boxclick=box.name;
                    },this);
                    if(this.displaynopad==0)
                    this.addNumberPad();
                    this.displaynopad++;
                    boxclick="opt1box";
                    for(var i=0;i<10;i++)
                    {
                        grpnum[i].inputEnabled=true;
                        grpnum[i].input.useHandCursor=true;
                    }
                   // darkbg2.visible=false;
                        
                     //   a1.inputEnabled=true;
                  /*      if(opt2.name != "greencup")
                    opt2.frame += 1;*/
                    },this);
                }
            }
            else
            {
                //console.log("in here");
                j++;
                if(j<=opt2.value)
                {
                    
                   _this.waterFillingSound.play();
                  
                    opt2.frame += 1; 
                //    var temp = parseInt(counterText1.text)+1;
               //     if(temp<opt2.value-1)
                //        counterText1.setText(temp);
                    //waterFillingSound.stop();
                   // else
                    if(j==opt2.value)
                    {
                        //console.log("in else");
                        _this.waterFillingSound.pause();
                    _this.watersplash.play();
                  //      temp = parseInt(counterText1.text)+1;
                   //     counterText1.setText(temp);
                       // waterFilling.pause();
                         //waudio.play();
                        //shake.shake(10, opt2);
                        a1.inputEnabled=false;
                        this.time.events.add(500, function(){
                            box.frame=0;
                            box1.frame=1;
                            box1.alpha=1;
                            box1.inputEnabled=true;
                            box1.events.onInputDown.add(function(){
                                box1.frame=1;
                                console.log("box1");
                               boxclick=box1.name;
                            },this);
                    if(this.displaynopad==0)
                    this.addNumberPad();
                    this.displaynopad++;
                    boxclick="opt2box";
                    //    darkbg1.visible=false;
                     //       a1.inputEnabled=true;
                          //      opt1.frame += 1;
                            
                                
                             },this);
                    }
                }
                else
                {
					boxclick="opt3box";
                    //console.log("opt1.value=="+opt1.value);
                    k++;
                    if(k<=opt1.value)
                    {   
                         _this.waterFillingSound.play();
                       
                        opt1.frame += 1;
                        //console.log("k.value=="+k);
                        if(k==opt1.value)
                        {
							//this.addNumberPad();
                            this.enablebuttons((opt1.value-1),(opt2.value-1),(opt3.value-1));
                            //box.alpha=1;
                            //box1.alpha=1;
							box1.frame=0;
                            box2.frame=1;
                            box2.alpha=1;
                            
                            box2.inputEnabled=true;
							
                            
                            box2.events.onInputDown.add(function(){
                                //console.log("box2");
								box2.frame=1;
                               boxclick=box2.name;
                            },this);
                           
                            _this.waterFillingSound.pause();
                            _this.watersplash.play();
                          
                        }
                    }
                }
                
            }
            
            
         
        },this);
        
    },
    
	correctAns:function()
	{
		wrongflag=0;
		//console.log("correct");
		numGroup.y = 00;
        var tween1 = _this.add.tween(numGroup);
        tween1.to({ y: 100 }, 0, 'Linear', true, 0);
        boxclick="";
        _this.displaynopad=false;
        noofAttempts++;


        
                                    if(timer!=null)
                            {
                                timer.stop();
                               timer = null;
                            }

                             /*var currentTime = window.timeSaveFunc();
                                var saveAsment = 
                                { 
                                    id_game_play: _this.savedVar,
                                    id_question: _this.questionid,  
                                    pass: "Yes",
                                    time2answer: AnsTimerCount,
                                    attempts: noofAttempts,
                                    date_time_submission: currentTime, 
                                    access_token: window.acctkn 
                                }*/
                        
                       // absdsjsapi.saveAssessment(saveAsment);

                       telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);

                        
        _this.speakerbtn.inputEnabled=false;
        boxb1.visible=true;
        boxb2.visible=true;
        boxb3.visible=true;
		_this.option1=0;
        _this.option2=0;
        
        if(qArrays[no1-1]==1){
            _this.tween1 = this.add.tween(opt3.scale);
            _this.tween1.to({ x:0.97 , y:0.97}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                _this.tween2 = this.add.tween(opt3.scale);
                        _this.tween2.to({ x:0.94 , y:0.94}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                                _this.tween1 = this.add.tween(opt3.scale);
                                _this.tween1.to({ x:0.97 , y:0.97}, 300, 'Linear', true, 0);
                                _this.tween1.onComplete.add(function(){
                                    _this.tween2 = this.add.tween(opt3.scale);
                                    _this.tween2.to({ x:0.94 , y:0.94}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
            _this.tween3 = this.add.tween(opt2.scale);
            _this.tween3.to({ x:0.92 , y:0.92}, 300, 'Linear', true, 0);
            _this.tween3.onComplete.add(function(){
                _this.tween4 = this.add.tween(opt2.scale);
                        _this.tween4.to({ x:0.89 , y:0.89}, 300, 'Linear', true, 0);
                        _this.tween4.onComplete.add(function(){
                                _this.tween3 = this.add.tween(opt2.scale);
                                _this.tween3.to({ x:0.92 , y:0.92}, 300, 'Linear', true, 0);
                                _this.tween3.onComplete.add(function(){
                                    _this.tween4 = this.add.tween(opt2.scale);
                                    _this.tween4.to({ x:0.89 , y:0.89}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
            _this.tween5 = this.add.tween(opt1.scale);
            _this.tween5.to({ x:1 , y:1}, 300, 'Linear', true, 0);
            _this.tween5.onComplete.add(function(){
                _this.tween6 = this.add.tween(opt1.scale);
                        _this.tween6.to({ x:0.97 , y:0.97}, 300, 'Linear', true, 0);
                        _this.tween6.onComplete.add(function(){
                                _this.tween5 = this.add.tween(opt1.scale);
                                _this.tween5.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                                _this.tween5.onComplete.add(function(){
                                    _this.tween6 = this.add.tween(opt1.scale);
                                    _this.tween6.to({ x:0.97 , y:0.97}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
        }
        else if(qArrays[no1-1]==2){
            _this.tween1 = this.add.tween(opt3.scale);
            _this.tween1.to({ x:0.97 , y:0.97}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                _this.tween2 = this.add.tween(opt3.scale);
                        _this.tween2.to({ x:0.92 , y:0.92}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                                _this.tween1 = this.add.tween(opt3.scale);
                                _this.tween1.to({ x:0.97 , y:0.97}, 300, 'Linear', true, 0);
                                _this.tween1.onComplete.add(function(){
                                    _this.tween2 = this.add.tween(opt3.scale);
                                    _this.tween2.to({ x:0.92 , y:0.92}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
            _this.tween3 = this.add.tween(opt2.scale);
            _this.tween3.to({ x:1.05 , y:1.05}, 300, 'Linear', true, 0);
            _this.tween3.onComplete.add(function(){
                _this.tween4 = this.add.tween(opt2.scale);
                        _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween4.onComplete.add(function(){
                                _this.tween3 = this.add.tween(opt2.scale);
                                _this.tween3.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
                                _this.tween3.onComplete.add(function(){
                                    _this.tween4 = this.add.tween(opt2.scale);
                                    _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
            _this.tween5 = this.add.tween(opt1.scale);
            _this.tween5.to({ x:1 , y:1}, 300, 'Linear', true, 0);
            _this.tween5.onComplete.add(function(){
                _this.tween6 = this.add.tween(opt1.scale);
                        _this.tween6.to({ x:0.94 , y:0.94}, 300, 'Linear', true, 0);
                        _this.tween6.onComplete.add(function(){
                                _this.tween5 = this.add.tween(opt1.scale);
                                _this.tween5.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                                _this.tween5.onComplete.add(function(){
                                    _this.tween6 = this.add.tween(opt1.scale);
                                    _this.tween6.to({ x:0.94 , y:0.94}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
        }
        else  if(qArrays[no1-1]==3){
            _this.tween1 = this.add.tween(opt3.scale);
            _this.tween1.to({ x:0.97 , y:0.97}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                _this.tween2 = this.add.tween(opt3.scale);
                        _this.tween2.to({ x:0.94 , y:0.94}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                                _this.tween1 = this.add.tween(opt3.scale);
                                _this.tween1.to({ x:0.97 , y:0.97}, 300, 'Linear', true, 0);
                                _this.tween1.onComplete.add(function(){
                                    _this.tween2 = this.add.tween(opt3.scale);
                                    _this.tween2.to({ x:0.94 , y:0.94}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
            _this.tween3 = this.add.tween(opt2.scale);
            _this.tween3.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
            _this.tween3.onComplete.add(function(){
                _this.tween4 = this.add.tween(opt2.scale);
                        _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween4.onComplete.add(function(){
                                _this.tween3 = this.add.tween(opt2.scale);
                                _this.tween3.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
                                _this.tween3.onComplete.add(function(){
                                    _this.tween4 = this.add.tween(opt2.scale);
                                    _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
            _this.tween5 = this.add.tween(opt1.scale);
            _this.tween5.to({ x:0.87 , y:0.87}, 300, 'Linear', true, 0);
            _this.tween5.onComplete.add(function(){
                _this.tween6 = this.add.tween(opt1.scale);
                        _this.tween6.to({ x:0.84 , y:0.84}, 300, 'Linear', true, 0);
                        _this.tween6.onComplete.add(function(){
                                _this.tween5 = this.add.tween(opt1.scale);
                                _this.tween5.to({ x:0.87 , y:0.87}, 300, 'Linear', true, 0);
                                _this.tween5.onComplete.add(function(){
                                    _this.tween6 = this.add.tween(opt1.scale);
                                    _this.tween6.to({ x:0.84 , y:0.84}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
        }
        else if(qArrays[no1-1]==4){
            _this.tween1 = this.add.tween(opt3.scale);
            _this.tween1.to({ x:1.06 , y:1.06}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                _this.tween2 = this.add.tween(opt3.scale);
                        _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                                _this.tween1 = this.add.tween(opt3.scale);
                                _this.tween1.to({ x:1.06 , y:1.06}, 300, 'Linear', true, 0);
                                _this.tween1.onComplete.add(function(){
                                    _this.tween2 = this.add.tween(opt3.scale);
                                    _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
            _this.tween3 = this.add.tween(opt2.scale);
            _this.tween3.to({ x:1.06 , y:1.06}, 300, 'Linear', true, 0);
            _this.tween3.onComplete.add(function(){
                _this.tween4 = this.add.tween(opt2.scale);
                        _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween4.onComplete.add(function(){
                                _this.tween3 = this.add.tween(opt2.scale);
                                _this.tween3.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
                                _this.tween3.onComplete.add(function(){
                                    _this.tween4 = this.add.tween(opt2.scale);
                                    _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
            _this.tween5 = this.add.tween(opt1.scale);
            _this.tween5.to({ x:1.15 , y:1.15}, 300, 'Linear', true, 0);
            _this.tween5.onComplete.add(function(){
                _this.tween6 = this.add.tween(opt1.scale);
                        _this.tween6.to({ x:1.12 , y:1.12}, 300, 'Linear', true, 0);
                        _this.tween6.onComplete.add(function(){
                                _this.tween5 = this.add.tween(opt1.scale);
                                _this.tween5.to({ x:1.15 , y:1.15}, 300, 'Linear', true, 0);
                                _this.tween5.onComplete.add(function(){
                                    _this.tween6 = this.add.tween(opt1.scale);
                                    _this.tween6.to({ x:1.12 , y:1.12}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
        }
        else if(qArrays[no1-1]==5 || qArrays[no1-1]==6 || qArrays[no1-1]==7){
            _this.tween1 = this.add.tween(opt3.scale);
            _this.tween1.to({ x:1.06 , y:1.06}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                _this.tween2 = this.add.tween(opt3.scale);
                        _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                                _this.tween1 = this.add.tween(opt3.scale);
                                _this.tween1.to({ x:1.04 , y:1.04}, 300, 'Linear', true, 0);
                                _this.tween1.onComplete.add(function(){
                                    _this.tween2 = this.add.tween(opt3.scale);
                                    _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
            _this.tween3 = this.add.tween(opt2.scale);
            _this.tween3.to({ x:1.05 , y:1.05}, 300, 'Linear', true, 0);
            _this.tween3.onComplete.add(function(){
                _this.tween4 = this.add.tween(opt2.scale);
                        _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween4.onComplete.add(function(){
                                _this.tween3 = this.add.tween(opt2.scale);
                                _this.tween3.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
                                _this.tween3.onComplete.add(function(){
                                    _this.tween4 = this.add.tween(opt2.scale);
                                    _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
            _this.tween5 = this.add.tween(opt1.scale);
            _this.tween5.to({ x:1.02 , y:1.02}, 300, 'Linear', true, 0);
            _this.tween5.onComplete.add(function(){
                _this.tween6 = this.add.tween(opt1.scale);
                        _this.tween6.to({ x:0.97 , y:0.97}, 300, 'Linear', true, 0);
                        _this.tween6.onComplete.add(function(){
                                _this.tween5 = this.add.tween(opt1.scale);
                                _this.tween5.to({ x:1.02 , y:1.02}, 300, 'Linear', true, 0);
                                _this.tween5.onComplete.add(function(){
                                    _this.tween6 = this.add.tween(opt1.scale);
                                    _this.tween6.to({ x:0.97 , y:0.97}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
        }
        else if(qArrays[no1-1]==8){
            _this.tween1 = this.add.tween(opt3.scale);
            _this.tween1.to({ x:1 , y:1}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                _this.tween2 = this.add.tween(opt3.scale);
                        _this.tween2.to({ x:0.92 , y:0.92}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                                _this.tween1 = this.add.tween(opt3.scale);
                                _this.tween1.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                                _this.tween1.onComplete.add(function(){
                                    _this.tween2 = this.add.tween(opt3.scale);
                                    _this.tween2.to({ x:0.92 , y:0.92}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
            _this.tween3 = this.add.tween(opt2.scale);
            _this.tween3.to({ x:1.05 , y:1.05}, 300, 'Linear', true, 0);
            _this.tween3.onComplete.add(function(){
                _this.tween4 = this.add.tween(opt2.scale);
                        _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween4.onComplete.add(function(){
                                _this.tween3 = this.add.tween(opt2.scale);
                                _this.tween3.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
                                _this.tween3.onComplete.add(function(){
                                    _this.tween4 = this.add.tween(opt2.scale);
                                    _this.tween4.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
            _this.tween5 = this.add.tween(opt1.scale);
            _this.tween5.to({ x:1.02 , y:1.02}, 300, 'Linear', true, 0);
            _this.tween5.onComplete.add(function(){
                _this.tween6 = this.add.tween(opt1.scale);
                        _this.tween6.to({ x:0.97 , y:0.97}, 300, 'Linear', true, 0);
                        _this.tween6.onComplete.add(function(){
                                _this.tween5 = this.add.tween(opt1.scale);
                                _this.tween5.to({ x:1.02 , y:1.02}, 300, 'Linear', true, 0);
                                _this.tween5.onComplete.add(function(){
                                    _this.tween6 = this.add.tween(opt1.scale);
                                    _this.tween6.to({ x:0.97 , y:0.97}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
        }
       // AnimOpt1 =opt1.animations.add('flag1',["a2","a1"]);
       //  AnimOpt1.play(2.8,true);
        var bAnim = boxb1.animations.add('flag2',["b2","b1"]);
        bAnim.play(2.8,true);
        
      // AnimOpt2 =opt2.animations.add('flag3',["a2","a1"]);
      //  AnimOpt2.play(2.8,true);
        var bAnim1 = boxb2.animations.add('flag4',["b2","b1"]);
        bAnim1.play(2.8,true);
        
       // AnimOpt3 =opt3.animations.add('flag5',["a2","a1"]);
       // AnimOpt3.play(2.8,true);
        var bAnim2 = boxb3.animations.add('flag6',["b2","b1"]);
        bAnim2.play(2.8,true);
 
		celebration = true;
		
     	_this.cmusic.play();
	//	var tween1 = _this.add.tween(numGroup);
     //   tween1.to({ y: 100 }, 0, 'Linear', true, 0);
        this.time.events.add(500, this.removeCelebration, this);


		
        //target.tint = 0xA9A9A9;
        
        var starAnim = starsGroup.getChildAt(count1);
		//console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();        		
        
        a1.events.onInputDown.removeAll();
        rightbtn.events.onInputDown.removeAll();
        wrongbtn.events.onInputDown.removeAll();
        opt1.events.onInputDown.removeAll();
        opt2.events.onInputDown.removeAll();
        opt3.events.onInputDown.removeAll();
        box.events.onInputDown.removeAll();
        box1.events.onInputDown.removeAll();
        box2.events.onInputDown.removeAll();
        
        
	},


    wrongAns:function()
	{
        //console.log("wrong");
        	

		//scoretext.setText(selctedLang.score+' : '+score);
        //console.log(target);
        //target.tint = 0xA9A9A9;
        
		shake.shake(10, target);
		_this.wmusic.play();
        
        //wmusic1 = this.add.audio('aiyoh');
		//wmusic1.play();
        	//this.disableListeners();
        //target.events.onInputDown.removeAll();
	},
    
    	removeCelebration:function()
	{
        //console.log("remove everythg");
        	
       

		//console.log("removeCeleb");
		celebration = false;
		//celebAnim.destroy();
		//rightCount--;
		//console.log("no"+no1);
		//this.input.enabled = true;
			
		     count1++;
		//if(rightCount<=0)
		//{		
            //console.log("vamitha");
            
			if(no1<6)
			{
                //console.log("addq");
                 this.addQuestion(count1);
			}
			else
			{
               // timer.stop();
                 this.time.events.add(2000, function(){
				//console.log("gameEnd");
				this.state.start('grade4_2BScore');
                 },this);
			}

	},
    
    
	changeQuestion:function()
	{
		shadowgroup.destroy();
        optionsgrp.destroy();
        wrngGraphicgrp.destroy();
        maingroup.destroy();
        
       

         
		if(no1<6)
		{
            count++;
			this.getQuestion();
		}
		else
		{
			//console.log("gameEnd");
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

    
    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2B/English/4.2B1.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2B/Hindi/4.2B1.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2B/Kannada/4.2B1.mp3");
                    }
					else if(window.languageSelected=="Gujarati")
					{
						 _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.2A/4.2B1.mp3");
					}
					else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2B/Marathi/4.2B1.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2B/telugu/4.2B1.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2B/Tamil/4.2B1.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2B/Urdu/4.2B1.mp3");
                    }
					else 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2B/Odiya/4.2B1.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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
                 //console.log("stop"); 
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
    
    addNumberPad:function(){
        
        numGroup = this.add.group();
        
        var x = 80;
		var footer = this.add.sprite(0,465,'Level42B_footer');
		numGroup.add(footer);
        for(var i=0;i<10;i++)
        {
            var numbg = numGroup.create(x,503,'Level42B_calNum'); 
            numbg.frame=i;
            if(i<9)
                numbg.name = i+1;
            else
                numbg.name = 0;
			numbg.frame = i;
            grpnum.push(numbg);
            numbg.anchor.setTo(0.5);
            numbg.scale.setTo(0.6,0.6);
            //numbg.name = i;
            numbg.inputEnabled = true;
            //numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            x+=70;
        }
        
        counterText = this.add.text(35,37,selectedAns1="");
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';
        counterText.font = 'myfont';
        counterText.fontSize = 35;
        counterText.fill = '#65B4C3';
        counterText.fontWeight = 'normal';
        counterText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        box2.addChild(counterText);
         
        counterText1 = this.add.text(35,37, selectedAns2="");
        counterText1.anchor.setTo(0.5);
        counterText1.align = 'center';
        counterText1.font = 'myfont';
        counterText1.fontSize = 35;
        counterText1.fill = '#65B4C3';
        counterText1.fontWeight = 'normal';
        counterText1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        box1.addChild(counterText1);
         
        counterText2 = this.add.text(35,37, selectedAns3="");
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';
        counterText2.font = 'myfont';
        counterText2.fontSize = 35;
        counterText2.fill = '#65B4C3';
        counterText2.fontWeight = 'normal';
        counterText2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        box.addChild(counterText2);
        
        
        
     //   txtbox = this.add.sprite(x+50,508,'Level42B_box');
     //   txtbox.anchor.setTo(0.5);
      //  txtbox.name = "txtbox";
        
        wrongbtn = numGroup.create(x+30,506,'Level42A_eraser','Symbol 14 copy 5 instance 10000');
        wrongbtn.anchor.setTo(0.5);
        wrongbtn.scale.setTo(1.20,1.20);
        wrongbtn.name = "wrongbtn";

        rightbtn = numGroup.create(x+95,506,'Level42A_rightBtn','Symbol 14 copy instance 10000');
        rightbtn.anchor.setTo(0.5);
        rightbtn.scale.setTo(1.20,1.20);
        rightbtn.name = "rightbtn";
       
        
        //numGroup.add(footer);
		
		
		numGroup.y=50;
		var tweenopt = this.add.tween(numGroup);
        tweenopt.to({ y: 0}, 0, 'Linear', true, 0);
    },
    
    numClicked:function(target){
        _this.clickSound.play();
        if(boxclick=="opt1box")
        {
			box.frame=0;
			_this.option1++;
            //console.log("option1"+selectedAns3);
			if(qArrays[no1-1] == 3){
				if(selectedAns3.length<=2)
                    {
                        console.log("in secondll");
                        selectedAns3 += target.name;
                        console.log("second one");
                        counterText2.setText(selectedAns3);
                        if(selectedAns3.length == 2){
                        darkbg2.visible=false;
                        a1.inputEnabled=true;
                        if((opt2.name !="greencup") && _this.option1==2)
                            opt2.frame += 1;
                            
                       /*     if(opt2.name!="greenbot22" && opt2.name!="orangebottleB" && ){//greencup
                        opt2.frame=0;
                    }else{
                        opt2.frame=1;
                    }*/
                      }
                    }
                }
            else{
            	if(selectedAns3.length<2)
            	{
                //console.log("in thirddd");
                selectedAns3+= target.name;
                //console.log("third one");
                counterText2.setText(selectedAns3);
                //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);
                //new added
                 darkbg2.visible=false;
                 a1.inputEnabled=true;
                 if(_this.option1==1)
                   opt2.frame += 1;
            }
        }
		wrongbtn.inputEnabled = true;
                    wrongbtn.input.useHandCursor = true;
                    rightbtn.inputEnabled = true;
                    rightbtn.input.useHandCursor = true;
            
        }
        if(boxclick=="opt2box")
        {
			box1.frame=0;
			_this.option2++;
            //console.log("option2"+selectedAns2);
			if(qArrays[no1-1] == 1 || qArrays[no1-1] == 5){
               if(selectedAns2.length<=2)
                {
                    console.log("in secondll");
                    selectedAns2 += target.name;
                    console.log("second one"+_this.option2);
                    counterText1.setText(selectedAns2);
                    //numGroup.getByName("opt2box").getChildAt(0).setText(selectedAns2);
                    //new added
                    if(selectedAns2.length == 2){
                        darkbg1.visible=false;
                    a1.inputEnabled=true;
                        if(_this.option2==2){
                            opt1.frame += 1;
                        }
                    
                    }
                    
                }
            }
            else{           
            if(selectedAns2.length<2)
            {
                //console.log("in secondll");
                selectedAns2 += target.name;
                //console.log("second one");
                counterText1.setText(selectedAns2);
                //numGroup.getByName("opt2box").getChildAt(0).setText(selectedAns2);
            	//new added
                darkbg1.visible=false;
                a1.inputEnabled=true;
                if(_this.option2==1){
                  opt1.frame += 1;
                }
    		  }
			}
        }
        if(boxclick=="opt3box")
        {
            //console.log("option3"+selectedAns1);
			box2.frame=0;
            if(selectedAns1.length<2)
            {
                //console.log("in firstdd");
                selectedAns1 += target.name;
                //console.log("first one"+selectedAns1);
                counterText.setText(selectedAns1);
                //numGroup.getByName("opt3box").getChildAt(0).setText(selectedAns1);
            }
        }
        
        wrongbtn.events.onInputDown.add(function(){
            
            wrongbtn.frameName="Symbol 14 copy 5 instance 10001";
            console.log("erase"+boxclick);
            _this.clickSound.play();
            if(boxclick=="opt1box")
            {
                selectedAns3="";
                counterText2.setText("");
                this.time.events.add(1000,function(){
                    wrongbtn.frameName="Symbol 14 copy 5 instance 10000";
                },this);
            }
            else if(boxclick=="opt2box")
            {
                selectedAns2="";
                counterText1.setText("");
                this.time.events.add(1000,function(){
                    wrongbtn.frameName="Symbol 14 copy 5 instance 10000";
                },this);
            }
            else if(boxclick=="opt3box")
            {
                selectedAns1="";
                counterText.setText("");
                this.time.events.add(1000,function(){
                    wrongbtn.frameName="Symbol 14 copy 5 instance 10000";
                },this);
            }
        },this);
    },
    
    enablebuttons:function(rightAns1,rightAns2,rightAns3){
        
        //console.log("opt1 value==="+rightAns1);
            //console.log("opt2 value==="+rightAns2);
            //console.log("opt3 value==="+rightAns3);
        for(var i=0;i<10;i++)
        {
            grpnum[i].inputEnabled=true;
            grpnum[i].input.useHandCursor=true;
        }
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        wrongbtn.events.onInputDown.add(function(target){
			target.frame = 1;
            //console.log("erase"+boxclick);
            _this.clickSound.play();
            if(boxclick=="opt1box")
            {
                selectedAns3="";
                counterText2.setText("");
            }
            else if(boxclick=="opt2box")
            {
                selectedAns2="";
                counterText1.setText("");
            }
            else if(boxclick=="opt3box")
            {
                selectedAns1="";
                counterText.setText("");
            }
			this.time.events.add(300, function(){
                target.frame = 0;
            },this);
        },this);
        
        rightbtn.events.onInputDown.add(function(target){
			target.frame = 1;
            noofAttempts++;
            _this.clickSound.play();
         
            if((selectedAns1==rightAns1||selectedAns1=="0"+rightAns1)  && (selectedAns2==rightAns2||selectedAns2=="0"+rightAns2) && (selectedAns3==rightAns3||selectedAns3=="0"+rightAns3))
            {
				
                this.correctAns();
				
            }
            else 
            {
				wrongflag=1;
                _this.wmusic.play();
                
                var flag;
                if(selectedAns1==rightAns1 || selectedAns1=="0"+rightAns1)
                {
                    counterText.setText(selectedAns1);
                }
                else
                {
					_this.boxposition = "first";
                    selectedAns1 = "";
                    counterText.setText("");
                    shake.shake(10,box2);
					opt1.frame=1;
                    a1.inputEnabled=true;
                   a1.events.onInputDown.removeAll();
               
                    this.mains();
                }
                if(selectedAns2==rightAns2 || selectedAns2=="0"+rightAns2)
                {
                    counterText1.setText(selectedAns2); 
                }
                else
                {
					
					_this.boxposition = "middle";
                    selectedAns2 = "";
                    counterText1.setText("");
                    if(selectedAns1=="" || selectedAns3==""){
                      this.time.events.add(50,function(){
                          shake.shake(10,box1);
                      },this);  
                    }else{
                       shake.shake(10,box1); 
                    } 
					if(opt2.name!="greencup")
                    opt2.frame=1;
                    else
                    opt2.frame=0;
                    a1.inputEnabled=true;
                   a1.events.onInputDown.removeAll();
               
                    this.mains();
                   
                }
                if(selectedAns3==rightAns3 || selectedAns3=="0"+rightAns3)
                {
                    counterText2.setText(selectedAns3);
                }
                else
                {
					_this.boxposition = "last";
                    selectedAns3 = "";
                    counterText2.setText("");
                    if(selectedAns1=="" || selectedAns2==""){
                      this.time.events.add(80,function(){
                          shake.shake(10,box);
                      },this);  
                    }else{
                       shake.shake(10,box); 
                    }
					opt3.frame=1;
                    a1.inputEnabled=true;
                   a1.events.onInputDown.removeAll();
               
                    this.mains();
                   
                
                   
                }

               // numGroup.add(box);
                //numGroup.add(box1);
                //numGroup.add(box2);
						
					this.time.events.add(300, function(){
					target.frame = 0;
				},this);
              
            }
            
        },this);
       
    },
    
    updateTimer:function() {
        
     counterForTimer++;
     if(counterForTimer>59)
         {
          counterForTimer = 0;
           if(minutes<10){
                 minutes =  minutes+1;
                 seconds = 00;
                        }
             else{
                 minutes =  minutes+1;
                   
                 }
         }
                else{
                        if (counterForTimer < 10)        
                                seconds = '0' + counterForTimer;
                        else
                                seconds = counterForTimer;
                    }
     timeDisplay.setText(minutes+':' + seconds);
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
        delete bgA;
        delete starsGroup;
        no1=0;
        delete mainFlag;
        opt1=0;
        opt2=0;
        opt3=0;
        no2=0;
        count1=0;
        count=0;
        delete qArrays;
        delete flagmain11Anim;
        delete animlev1;
        delete a1;
        delete waterFilling;

        delete cloud2,cloud3,cloud4,cloud5,cloud6,cloud7,cloud8;
        delete optionsgrp;
        delete wronggraphics1,wronggraphics2,wronggraphics3;
        delete wrngGraphicgrp;
        delete boxb1,boxb2,boxb3;
         counterText=0;
         counterText1=0;
         counterText2=0;
        delete maingroup;
        delete darkbg1;
        delete darkbg2;
         value1=0;
         value2=0;
         value3=0;
         i=0;
         j=0;
         k=0;
        delete speaker;
        delete w1,w2;
        delete AnimOpt1,AnimOpt2,AnimOpt3;
        delete tick;
         noofAttempts=0;
        delete timer;
         AnsTimerCount=0;

        delete numGroup;
        delete enterTxt;
        delete txtbox;
        delete grpnum;
        delete boxclick;
         minutes=0;
         seconds=0;
         counterForTimer=0;
        delete numGroup;
        delete box,box1,box2;

         gameid=null;
    }
    
};