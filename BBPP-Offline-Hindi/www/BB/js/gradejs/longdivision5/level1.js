Game.longdivision5=function(){};

Game.longdivision5.prototype={
init:function(game)
    {
        _this = this;
        
        
       // _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
       // _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);
        
        telInitializer.gameIdInit("longmult",gradeSelected);
    },

    preload:function(game){
        if(!window.longdivision5){

            window.longdivision5 = true;

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
            this.load.image('NOLMskipDemoVideos',window.baseUrl+'assets/NOLM/gradeAssets/skipArrow.png');
        
        //common for all games.
        this.load.atlas('NOLMbackNOLMbtn',window.baseUrl+'assets/NOLM/commonAssets/backbtn.png' ,window.baseUrl+'json/NOLM/gradeJson/backbtn.json');
        this.load.atlas('NOLMCommonSpeakerNOLMbtn',window.baseUrl+'assets/NOLM/commonAssets/speaker.png' ,window.baseUrl+'json/NOLM/gradeJson/speaker.json');
        this.load.atlas('NOLMstarAnim',window.baseUrl+'assets/NOLM/commonAssets/starAnim.png',window.baseUrl+'json/NOLM/gradeJson/starAnim.json');
        this.load.atlas('NOLMreplay',window.baseUrl+'assets/NOLM/commonAssets/reply.png' ,window.baseUrl+'json/NOLM/gradeJson/reply.json');
        this.load.atlas('NOLMbtn',window.baseUrl+'assets/NOLM/commonAssets/btn.png',window.baseUrl+'json/NOLM/gradeJson/btn.json');
        
        this.load.image('NOLMbackground1',window.baseUrl+'assets/NOLM/commonAssets/bg1.png');
        this.load.image('NOLMtittleBar',window.baseUrl+'assets/NOLM/commonAssets/tittleBar.png');
        this.load.image('NOLMnavBar',window.baseUrl+'assets/NOLM/commonAssets/navBar.png');
        this.load.image('NOLMtimeNOLMbg',window.baseUrl+'assets/NOLM/commonAssets/timebg.png');
        
        //this.load.atlas('mic',window.baseUrl+'assets/NOLM/commonAssets/mic.png',window.baseUrl+'json/NOLM/gradeJson/mic.json');
        this.load.atlas('NOLMmesg',window.baseUrl+'assets/NOLM/commonAssets/callout btn.png',window.baseUrl+'json/NOLM/gradeJson/callout btn.json');
        this.load.image('NOLMscore',window.baseUrl+'assets/NOLM/commonAssets/scoreBg.png');
        this.load.atlas('NOLMpointAnim',window.baseUrl+'assets/NOLM/commonAssets/whiteminusBg.png',window.baseUrl+'json/NOLM/gradeJson/whiteminusBg.json');
       
        //game assets.
        this.load.image('NOLMbg',window.baseUrl+'assets/NOLM/commonAssets/bg.png');
        //this.load.image('NOLMbox1',window.baseUrl+'assets/NOLM/gradeAssets/mainbox.png');
        this.load.image('NOLMbox1',window.baseUrl+'assets/NOLM/gradeAssets/mainbox1.png');
        this.load.image('NOLMbox2',window.baseUrl+'assets/NOLM/gradeAssets/questionbox.png');
        this.load.image('NOLMbox3',window.baseUrl+'assets/NOLM/gradeAssets/checkbox.png');
        this.load.atlas('NOLMbox4',window.baseUrl+'assets/NOLM/gradeAssets/ansbox.png',window.baseUrl+'json/NOLM/gradeJson/ansbox.json');
        this.load.atlas('NOLMbox5',window.baseUrl+'assets/NOLM/gradeAssets/Box3.png',window.baseUrl+'json/NOLM/gradeJson/Box3.json');
        this.load.atlas('NOLMnum_box',window.baseUrl+'assets/NOLM/gradeAssets/ans box glow.png',window.baseUrl+'json/NOLM/gradeJson/ans box glow.json');
        this.load.image('num_NOLMbg',window.baseUrl+'assets/NOLM/gradeAssets/b2.png');
        this.load.atlas('NOLMnumberpad',window.baseUrl+'assets/NOLM/gradeAssets/numberpad.png',window.baseUrl+'json/NOLM/gradeJson/numberpad.json');
        this.load.atlas('NOLMeraser',window.baseUrl+'assets/NOLM/gradeAssets/erase.png',window.baseUrl+'json/NOLM/gradeJson/erase.json');
        this.load.atlas('NOLMtick',window.baseUrl+'assets/NOLM/gradeAssets/tickMark.png',window.baseUrl+'json/NOLM/gradeJson/tickMark.json');
    }

    },
    
	create:function(game)
    {

  

        _this.score1 = 0;
        _this.no1=0;
        _this.count1=0;
        _this.count=0;
        _this.counter = 0;
        _this.amplify = null;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer1 = null;
        _this.noofAttempts=0;
        _this.AnsTimerCount=0;
        _this.sceneCount = 0;
        _this.voicevalue1 = false;
        _this.voicevalue2 = false;
        _this.voicevalue3 = false;
        _this.voicevalue4 = false;
        _this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.selectedAns4 = "";
         added1=0;
         added2=0;
         added3=0;
         added4=0;
        _this.voicecount=0;
        
        _this.change=0;
        
        _this.qArrays = new Array(); 
        
        _this.qArrays = [1,2,3,4,5,6,7,8];   
        _this.qArrays = _this.shuffle(_this.qArrays);
        
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(-2,-2,_this.world.width,_this.world.height,'NOLMbg');
        
        _this.navBar = _this.add.sprite(0,0,'NOLMnavBar');
        _this.navBar.scale.setTo(1,1.1);
        
        _this.backbtn = _this.add.sprite(10,7,'NOLMbackNOLMbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade4levelSelectionScreen',true,false); 
 

        },_this);

        _this.speakerbtn = _this.add.button(575,7,'NOLMCommonSpeakerNOLMbtn',function(){},this,1,0,2);
        _this.speakerbtn.events.onInputDown.add(function()
        { 
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);
        
        _this.timebg = _this.add.sprite(305,9,'NOLMtimeNOLMbg');
        _this.timebg.name="common_timebg";
        //_this.timebg.scale.setTo(1,1);

        _this.timeDisplay = _this.add.text(331,25,_this.minutes + ' : '+ this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'myfont';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';
        
        /*_this.mesg = _this.add.sprite(65,7,'NOLMmesg');
        _this.mesg.scale.setTo(1,1);
        
        _this.score=this.add.sprite(800,7,'NOLMscore');
        _this.score.scale.setTo(1,1);*/
        
        //Create the score label
       /* _this.scoreLabel = _this.game.add.text(_this.game.world.centerX+418, 24, "0", {font: "20px myfont", fill: "#ADFF2F"}); 
        _this.scoreLabel.anchor.setTo(0.5);
        _this.scoreLabel.align = 'center';*/

        _this.generateStarsForTheScene(6);
        _this.getQuestion();
        _this.getVoice();
    },
        
   /* incrementScore: function(){

        //Increase the score by ten and update the total score label text
        _this.score1 += 10;   
        _this.scoreLabel.setText(_this.score1);
        
    },*/
    
     gotoFirstQuestion:function(){
         _this.questionNo = 1;
         _this.objGrp1 = _this.add.group();
         //_this.objGrp2 = _this.add.group();
         _this.boxGrp = _this.add.group();
         _this.objGrp = _this.add.group();
         _this.graphicsGrp = _this.add.group();
         
         _this.mainbox = _this.add.sprite(327,276,'NOLMbox1');//290,250
         _this.mainbox.anchor.setTo(0.5);
         
         _this.box1 = _this.add.sprite(250,236,'NOLMbox5');//252,235
         _this.box1.anchor.setTo(0.5);
         
         _this.box2 = _this.add.sprite(409,236,'NOLMbox5');//412,235
         _this.box2.anchor.setTo(0.5);
         
         _this.box3 = _this.add.sprite(250,320,'NOLMbox5');//252,322
         _this.box3.anchor.setTo(0.5);
         
         _this.box4 = _this.add.sprite(409,320,'NOLMbox5');//412,322
         _this.box4.anchor.setTo(0.5);
         
         _this.num1 = _this.add.sprite(250,162,'NOLMnum_box');
         _this.num1.anchor.set(0.5);
         //_this.num1.inputEnabled=true;
         _this.num1.name="numbox1";
         //_this.num1.input.useHandCursor=true;
         _this.num1.events.onInputDown.add(function(target)
              {
                    added1=0;
                    console.log(added1)
                 _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num1.name;
                        _this.num1.frame=1;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num2 = _this.add.sprite(410,162,'NOLMnum_box');
         _this.num2.anchor.set(0.5);
         //_this.num2.inputEnabled=true;
         _this.num2.name="numbox2";
         //_this.num2.input.useHandCursor=true;
         _this.num2.events.onInputDown.add(function(target)
              {
                      added2=0;
                    console.log(added2)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num2.name;
                        _this.num1.frame=0;
                        _this.num2.frame=1;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num3 = _this.add.sprite(125,238,'NOLMnum_box');
         _this.num3.anchor.set(0.5);
         //_this.num3.inputEnabled=true;
         _this.num3.name="numbox3";
         //_this.num3.input.useHandCursor=true;
         _this.num3.events.onInputDown.add(function(target)
              {
                    added3=0;
                    console.log(added3)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num3.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=1;
                        _this.num4.frame=0;
                     /*if(_this.voicecount==0)
                                {
                               _this.voicevalue1 = false;
                               _this.voicevalue2 = true;
                               _this.voicevalue3 = false;
                               _this.voicevalue4 = false;
                               _this.getVoice();
                               _this.voicecount++;
                               } */
              },_this);
         
         _this.num4 = _this.add.sprite(125,325,'NOLMnum_box');
         _this.num4.anchor.set(0.5);
         //_this.num4.inputEnabled=true;
         _this.num4.name="numbox4";
         //_this.num4.input.useHandCursor=true;
         _this.num4.events.onInputDown.add(function(target)
              {
                    added4=0;
                    console.log(added4)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num4.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=1;
              },_this);
         
         _this.questionbox = _this.add.sprite(820,160,'NOLMbox2');
         _this.questionbox.anchor.setTo(0.5);
         
         _this.num = _this.add.text(-3,-3,"23 x 54");//818,157
         _this.num.anchor.set(0.5);
         _this.num.font = "myfont";
         _this.num.fill = "#17202A";
         _this.num.fontWeight = 'normal';
         _this.num.fontSize = 40;
         _this.questionbox.addChild(_this.num);
         
         _this.plus1 = _this.add.text(327,155,"+");
         _this.plus1.anchor.set(0.5);
         //_this.plus1.font = "myfont";
         _this.plus1.fill = "#17202A";
         _this.plus1.fontWeight = 'normal';
         _this.plus1.fontSize = 35;
         
         _this.plus2 = _this.add.text(123,280,"+");
         _this.plus2.anchor.set(0.5);
         //_this.plus2.font = "myfont";
         _this.plus2.fill = "#17202A";
         _this.plus2.fontWeight = 'normal';
         _this.plus2.fontSize = 25;
         
         _this.time.events.add(1000,function(){
             _this.num1.inputEnabled=true;
             _this.num2.inputEnabled=true;
             _this.num3.inputEnabled=true;
             _this.num4.inputEnabled=true;
             _this.num1.frame=1;
             _this.selectedBox = _this.num1.name;
             _this.addNumberPad();
             _this.voicevalue1 = true;
             _this.voicevalue2 = false;
             _this.voicevalue3 = false;
             _this.voicevalue4 = false;
             _this.getVoice();
         },_this);
         
         _this.Ans=20;
         _this.Ans1=3;
         _this.Ans2=50;
         _this.Ans3=4;
         
         _this.text1 = _this.add.text(0,0,"150");//632,158
         _this.text1.anchor.set(0.5);
         _this.text1.font = 'myfont';
         _this.text1.fill = "#FFFFFF";
         _this.text1.fontWeight = 'Normal';
         _this.text1.fontSize = 40;
         
         _this.b1 = _this.add.sprite(615,160,'NOLMbox3');
         _this.b1.anchor.setTo(0.5);
         _this.b1.visible=false;
         _this.b1.addChild(_this.text1);
         _this.b1.inputEnabled =true;
         _this.b1.events.onInputDown.add(_this.onDragstart,_this);
  
         _this.text2 = _this.add.text(0,0,"12");//642,258
         _this.text2.anchor.set(0.5);
         _this.text2.font = "myfont";
         _this.text2.fill = "#FFFFFF";
         _this.text2.fontWeight = 'normal';
         _this.text2.fontSize = 40;
         
         _this.b2 = _this.add.sprite(615,260,'NOLMbox3');
         _this.b2.anchor.setTo(0.5);
         _this.b2.visible=false;
         _this.b2.addChild(_this.text2);
         _this.b2.inputEnabled =true;
         _this.b2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text3 = _this.add.text(0,0,"80");//640,358
         _this.text3.anchor.set(0.5);
         _this.text3.font = "myfont";
         _this.text3.fill = "#FFFFFF";
         _this.text3.fontWeight = 'normal';
         _this.text3.fontSize = 40;
         
         _this.b3 = _this.add.sprite(615,360,'NOLMbox3');
         _this.b3.anchor.setTo(0.5);
         _this.b3.visible=false;
         _this.b3.addChild(_this.text3);
         _this.b3.inputEnabled =true;
         _this.b3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text4 = _this.add.text(0,0,"1000");//625,458
         _this.text4.anchor.set(0.5);
         _this.text4.font = "myfont";
         _this.text4.fill = "#FFFFFF";
         _this.text4.fontWeight = 'normal';
         _this.text4.fontSize = 40;
         
         _this.b4 = _this.add.sprite(615,460,'NOLMbox3');
         _this.b4.anchor.setTo(0.5);
         _this.b4.visible=false;
         _this.b4.addChild(_this.text4);
         _this.b4.inputEnabled =true;
         _this.b4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.graphics1 = _this.add.graphics(100,100);
         _this.graphics1.lineStyle(2, 0x0000FF, 1);
         _this.graphics1.drawRect(85, 102, 130, 65);
         
         _this.graphics2 = _this.add.graphics(100,100);
         _this.graphics2.lineStyle(2, 0x0000FF, 1);
         _this.graphics2.drawRect(244, 102, 130, 65);
         
         _this.graphics3 = _this.add.graphics(100,100);
         _this.graphics3.lineStyle(2, 0x0000FF, 1);
         _this.graphics3.drawRect(85, 188, 130, 65);
         
         _this.graphics4 = _this.add.graphics(100,100);
         _this.graphics4.lineStyle(2, 0x0000FF, 1);
         _this.graphics4.drawRect(244, 188, 130, 65);
         
         _this.graphics5 = _this.add.graphics(100,100);
         _this.graphics5.lineStyle(2, 0x0000FF, 1);
         _this.graphics5.drawRect(440, 15, 150, 380);
         
         _this.graphicsGrp.add(_this.graphics1);
         _this.graphicsGrp.add(_this.graphics2);
         _this.graphicsGrp.add(_this.graphics3);
         _this.graphicsGrp.add(_this.graphics4);
         _this.graphicsGrp.add(_this.graphics5);
         _this.graphicsGrp.alpha=0;
         
         _this.dragAns1=1000;
         _this.dragAns2=150;
         _this.dragAns3=80;
         _this.dragAns4=12;
         
         _this.text11 = _this.add.text(0,0,"1150");//632,158
         _this.text11.anchor.set(0.5);
         _this.text11.font = "myfont";
         _this.text11.fill = "#FFFFFF";
         _this.text11.fontWeight = 'normal';
         _this.text11.fontSize = 40;
         
         _this.b11 = _this.add.sprite(615,235,'NOLMbox3');
         _this.b11.anchor.setTo(0.5);
         _this.b11.visible=false;
         _this.b11.addChild(_this.text11);
         
         _this.text12 = _this.add.text(7,0,"92");//632,158
         _this.text12.anchor.set(0.5);
         _this.text12.font = "myfont";
         _this.text12.fill = "#FFFFFF";
         _this.text12.fontWeight = 'normal';
         _this.text12.fontSize = 40;
         
         _this.b12 = _this.add.sprite(615,322,'NOLMbox3');
         _this.b12.anchor.setTo(0.5);
         _this.b12.visible=false;
         _this.b12.addChild(_this.text12);
         
         _this.plus3 = _this.add.text(525,280,"+");
         _this.plus3.anchor.set(0.5);
         //_this.plus3.font = "myfont";
         _this.plus3.fill = "#17202A";
         _this.plus3.fontWeight = 'normal';
         _this.plus3.fontSize = 40;
         _this.plus3.visible=false;
         
         _this.equal = _this.add.text(522,410,"=");
         _this.equal.anchor.set(0.5);
         //_this.equal.font = "myfont";
         _this.equal.fill = "#17202A";
         _this.equal.fontWeight = 'normal';
         _this.equal.fontSize = 40;
         _this.equal.visible=false;
         
         _this.b13 = _this.add.sprite(615,410,'NOLMbox4');
         _this.b13.anchor.setTo(0.5);
         _this.b13.visible=false;
         
         _this.rightAns=1242;
         
         _this.tick = _this.add.sprite(830,300,"tick");
         _this.tick.anchor.setTo(0.5);
         _this.tick.frame=0;
         _this.tick.visible=false;
         
         _this.tick.events.onInputUp.add(function(target){
            target.frame = 0;
            },this);
         _this.tick.events.onInputDown.add(_this.clickTickMark,_this);
         
         _this.boxGrp.add(_this.box1);
         _this.boxGrp.add(_this.box2);
         _this.boxGrp.add(_this.box3);
         _this.boxGrp.add(_this.box4);
         
         _this.objGrp.add(_this.b1);
         _this.objGrp.add(_this.b2);
         _this.objGrp.add(_this.b3);
         _this.objGrp.add(_this.b4);
         
         _this.objGrp1.add(_this.num1);
         _this.objGrp1.add(_this.num2);
         _this.objGrp1.add(_this.num3);
         _this.objGrp1.add(_this.num4);
         _this.objGrp1.add(_this.mainbox);
         _this.objGrp1.add(_this.questionbox);
         _this.objGrp1.add(_this.plus1);
         _this.objGrp1.add(_this.plus2);
         _this.objGrp1.add(_this.b11);
         _this.objGrp1.add(_this.b12);
         _this.objGrp1.add(_this.plus3);
         _this.objGrp1.add(_this.equal);
    },
    
     gotoSecondQuestion:function(){

         _this.questionNo = 2;
         _this.objGrp1 = _this.add.group();
         _this.boxGrp = _this.add.group();
         _this.objGrp = _this.add.group();
         _this.graphicsGrp = _this.add.group();
         
         _this.mainbox = _this.add.sprite(327,276,'NOLMbox1');//290,250
         _this.mainbox.anchor.setTo(0.5);
         
         _this.box1 = _this.add.sprite(250,236,'NOLMbox5');//252,235
         _this.box1.anchor.setTo(0.5);
         
         _this.box2 = _this.add.sprite(409,236,'NOLMbox5');//412,235
         _this.box2.anchor.setTo(0.5);
         
         _this.box3 = _this.add.sprite(250,320,'NOLMbox5');//252,322
         _this.box3.anchor.setTo(0.5);
         
         _this.box4 = _this.add.sprite(409,320,'NOLMbox5');//412,322
         _this.box4.anchor.setTo(0.5);
         
         _this.num1 = _this.add.sprite(250,162,'NOLMnum_box');
         _this.num1.anchor.set(0.5);
         //_this.num1.inputEnabled=true;
         _this.num1.name="numbox1";
         //_this.num1.input.useHandCursor=true;
         _this.num1.events.onInputDown.add(function(target)
              {
                    added1=0;
                    console.log(added1)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num1.name;
                        _this.num1.frame=1;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num2 = _this.add.sprite(410,162,'NOLMnum_box');
         _this.num2.anchor.set(0.5);
         //_this.num2.inputEnabled=true;
         _this.num2.name="numbox2";
         //_this.num2.input.useHandCursor=true;
         _this.num2.events.onInputDown.add(function(target)
              {
                    added2=0;
                    console.log(added2)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num2.name;
                        _this.num1.frame=0;
                        _this.num2.frame=1;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num3 = _this.add.sprite(125,238,'NOLMnum_box');
         _this.num3.anchor.set(0.5);
         //_this.num3.inputEnabled=true;
         _this.num3.name="numbox3";
         //_this.num3.input.useHandCursor=true;
         _this.num3.events.onInputDown.add(function(target)
              {
                     added3=0;
                    console.log(added3)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num3.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=1;
                        _this.num4.frame=0;
              },_this);
         
         _this.num4 = _this.add.sprite(125,325,'NOLMnum_box');
         _this.num4.anchor.set(0.5);
         //_this.num4.inputEnabled=true;
         _this.num4.name="numbox4";
         //_this.num4.input.useHandCursor=true;
         _this.num4.events.onInputDown.add(function(target)
              {
                     added4=0;
                    console.log(added4)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num4.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=1;
              },_this);
         
         _this.questionbox = _this.add.sprite(820,160,'NOLMbox2');
         _this.questionbox.anchor.setTo(0.5);
         
         _this.num = _this.add.text(-3,-3,"37 x 46");
         _this.num.anchor.set(0.5);
         _this.num.font = "myfont";
         _this.num.fill = "#17202A";
         _this.num.fontWeight = 'normal';
         _this.num.fontSize = 40;
         _this.questionbox.addChild(_this.num);
         
         _this.plus1 = _this.add.text(327,155,"+");
         _this.plus1.anchor.set(0.5);
         //_this.plus1.font = "myfont";
         _this.plus1.fill = "#17202A";
         _this.plus1.fontWeight = 'normal';
         _this.plus1.fontSize = 35;
         
         _this.plus2 = _this.add.text(123,280,"+");
         _this.plus2.anchor.set(0.5);
         //_this.plus2.font = "myfont";
         _this.plus2.fill = "#17202A";
         _this.plus2.fontWeight = 'normal';
         _this.plus2.fontSize = 25;
         
        _this.time.events.add(1000,function(){
             _this.num1.inputEnabled=true;
             _this.num2.inputEnabled=true;
             _this.num3.inputEnabled=true;
             _this.num4.inputEnabled=true;
             _this.num1.frame=1;
             _this.selectedBox = _this.num1.name;
             _this.addNumberPad();
             _this.voicevalue1 = true;
             _this.voicevalue2 = false;
             _this.voicevalue3 = false;
             _this.voicevalue4 = false;
             _this.getVoice();
         },_this);
         
         _this.Ans=30;
         _this.Ans1=7;
         _this.Ans2=40;
         _this.Ans3=6;
         
         _this.text1 = _this.add.text(0,0,"42");//632,158
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#FFFFFF";
         _this.text1.fontWeight = 'normal';
         _this.text1.fontSize = 40;
         
         _this.b1 = _this.add.sprite(615,160,'NOLMbox3');
         _this.b1.anchor.setTo(0.5);
         _this.b1.visible=false;
         _this.b1.addChild(_this.text1);
         _this.b1.inputEnabled =true;
         _this.b1.events.onInputDown.add(_this.onDragstart,_this);
  
         _this.text2 = _this.add.text(0,0,"280");//642,258
         _this.text2.anchor.set(0.5);
         _this.text2.font = "myfont";
         _this.text2.fill = "#FFFFFF";
         _this.text2.fontWeight = 'normal';
         _this.text2.fontSize = 40;
         
         _this.b2 = _this.add.sprite(615,260,'NOLMbox3');
         _this.b2.anchor.setTo(0.5);
         _this.b2.visible=false;
         _this.b2.addChild(_this.text2);
         _this.b2.inputEnabled =true;
         _this.b2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text3 = _this.add.text(0,0,"1200");//640,358
         _this.text3.anchor.set(0.5);
         _this.text3.font = "myfont";
         _this.text3.fill = "#FFFFFF";
         _this.text3.fontWeight = 'normal';
         _this.text3.fontSize = 40;
         
         _this.b3 = _this.add.sprite(615,360,'NOLMbox3');
         _this.b3.anchor.setTo(0.5);
         _this.b3.visible=false;
         _this.b3.addChild(_this.text3);
         _this.b3.inputEnabled =true;
         _this.b3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text4 = _this.add.text(0,0,"180");//625,458
         _this.text4.anchor.set(0.5);
         _this.text4.font = "myfont";
         _this.text4.fill = "#FFFFFF";
         _this.text4.fontWeight = 'normal';
         _this.text4.fontSize = 40;
         
         _this.b4 = _this.add.sprite(615,460,'NOLMbox3');
         _this.b4.anchor.setTo(0.5);
         _this.b4.visible=false;
         _this.b4.addChild(_this.text4);
         _this.b4.inputEnabled =true;
         _this.b4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.graphics1 = _this.add.graphics(100,100);
         _this.graphics1.lineStyle(2, 0x0000FF, 1);
         _this.graphics1.drawRect(85, 102, 130, 65);
         
         _this.graphics2 = _this.add.graphics(100,100);
         _this.graphics2.lineStyle(2, 0x0000FF, 1);
         _this.graphics2.drawRect(244, 102, 130, 65);
         
         _this.graphics3 = _this.add.graphics(100,100);
         _this.graphics3.lineStyle(2, 0x0000FF, 1);
         _this.graphics3.drawRect(85, 188, 130, 65);
         
         _this.graphics4 = _this.add.graphics(100,100);
         _this.graphics4.lineStyle(2, 0x0000FF, 1);
         _this.graphics4.drawRect(244, 188, 130, 65);
         
         _this.graphics5 = _this.add.graphics(100,100);
         _this.graphics5.lineStyle(2, 0x0000FF, 1);
         _this.graphics5.drawRect(440, 15, 150, 380);
         
         _this.graphicsGrp.add(_this.graphics1);
         _this.graphicsGrp.add(_this.graphics2);
         _this.graphicsGrp.add(_this.graphics3);
         _this.graphicsGrp.add(_this.graphics4);
         _this.graphicsGrp.add(_this.graphics5);
         _this.graphicsGrp.alpha=0;
         
         _this.dragAns1=1200;
         _this.dragAns2=280;
         _this.dragAns3=180;
         _this.dragAns4=42;
         
         _this.text11 = _this.add.text(0,0,"1480");//632,158
         _this.text11.anchor.set(0.5);
         _this.text11.font = "myfont";
         _this.text11.fill = "#FFFFFF";
         _this.text11.fontWeight = 'normal';
         _this.text11.fontSize = 40;
         
         _this.b11 = _this.add.sprite(615,235,'NOLMbox3');
         _this.b11.anchor.setTo(0.5);
         _this.b11.visible=false;
         _this.b11.addChild(_this.text11);
         
         _this.text12 = _this.add.text(6,0,"222");//632,158
         _this.text12.anchor.set(0.5);
         _this.text12.font = "myfont";
         _this.text12.fill = "#FFFFFF";
         _this.text12.fontWeight = 'normal';
         _this.text12.fontSize = 40;
         
         _this.b12 = _this.add.sprite(615,322,'NOLMbox3');
         _this.b12.anchor.setTo(0.5);
         _this.b12.visible=false;
         _this.b12.addChild(_this.text12);
         
         _this.plus3 = _this.add.text(525,280,"+");
         _this.plus3.anchor.set(0.5);
         //_this.plus3.font = "myfont";
         _this.plus3.fill = "#17202A";
         _this.plus3.fontWeight = 'normal';
         _this.plus3.fontSize = 40;
         _this.plus3.visible=false;
         
         _this.equal = _this.add.text(522,410,"=");
         _this.equal.anchor.set(0.5);
         //_this.equal.font = "myfont";
         _this.equal.fill = "#17202A";
         _this.equal.fontWeight = 'normal';
         _this.equal.fontSize = 40;
         _this.equal.visible=false;
         
         _this.b13 = _this.add.sprite(615,410,'NOLMbox4');
         _this.b13.anchor.setTo(0.5);
         _this.b13.visible=false;
         
         _this.rightAns=1702;
         
         _this.tick = _this.add.sprite(830,300,"tick");
         _this.tick.anchor.setTo(0.5);
         _this.tick.frame=0;
         _this.tick.visible=false;
         
         _this.tick.events.onInputUp.add(function(target){
            target.frame = 0;
            },this);
         _this.tick.events.onInputDown.add(_this.clickTickMark,_this);
         
         _this.boxGrp.add(_this.box1);
         _this.boxGrp.add(_this.box2);
         _this.boxGrp.add(_this.box3);
         _this.boxGrp.add(_this.box4);
         
         _this.objGrp.add(_this.b1);
         _this.objGrp.add(_this.b2);
         _this.objGrp.add(_this.b3);
         _this.objGrp.add(_this.b4);
         
         _this.objGrp1.add(_this.num1);
         _this.objGrp1.add(_this.num2);
         _this.objGrp1.add(_this.num3);
         _this.objGrp1.add(_this.num4);
         _this.objGrp1.add(_this.mainbox);
         _this.objGrp1.add(_this.questionbox);
         _this.objGrp1.add(_this.plus1);
         _this.objGrp1.add(_this.plus2);
         _this.objGrp1.add(_this.b11);
         _this.objGrp1.add(_this.b12);
         _this.objGrp1.add(_this.plus3);
         _this.objGrp1.add(_this.equal); 
    },
    
    gotoThirdQuestion:function(){
        
         _this.questionNo = 3;
         _this.objGrp1 = _this.add.group();
         _this.boxGrp = _this.add.group();
         _this.objGrp = _this.add.group();
         _this.graphicsGrp = _this.add.group();
         
         _this.mainbox = _this.add.sprite(327,276,'NOLMbox1');//290,250
         _this.mainbox.anchor.setTo(0.5);
        
         _this.box1 = _this.add.sprite(250,236,'NOLMbox5');//252,235
         _this.box1.anchor.setTo(0.5);
         
         _this.box2 = _this.add.sprite(409,236,'NOLMbox5');//412,235
         _this.box2.anchor.setTo(0.5);
         
         _this.box3 = _this.add.sprite(250,320,'NOLMbox5');//252,322
         _this.box3.anchor.setTo(0.5);
         
         _this.box4 = _this.add.sprite(409,320,'NOLMbox5');//412,322
         _this.box4.anchor.setTo(0.5);
        
         _this.num1 = _this.add.sprite(250,162,'NOLMnum_box');
         _this.num1.anchor.set(0.5);
         //_this.num1.inputEnabled=true;
         _this.num1.name="numbox1";
         //_this.num1.input.useHandCursor=true;
         _this.num1.events.onInputDown.add(function(target)
              {
                     added1=0;
                    console.log(added1)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num1.name;
                        _this.num1.frame=1;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num2 = _this.add.sprite(410,162,'NOLMnum_box');
         _this.num2.anchor.set(0.5);
        //_this.num2.inputEnabled=true;
         _this.num2.name="numbox2";
         //_this.num2.input.useHandCursor=true;
         _this.num2.events.onInputDown.add(function(target)
              {
                     added2=0;
                    console.log(added2)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num2.name;
                        _this.num1.frame=0;
                        _this.num2.frame=1;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num3 = _this.add.sprite(125,238,'NOLMnum_box');
         _this.num3.anchor.set(0.5);
         //_this.num3.inputEnabled=true;
         _this.num3.name="numbox3";
         //_this.num3.input.useHandCursor=true;
         _this.num3.events.onInputDown.add(function(target)
              {
                     added3=0;
                    console.log(added3)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num3.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=1;
                        _this.num4.frame=0;
              },_this);
         
         _this.num4 = _this.add.sprite(125,325,'NOLMnum_box');
         _this.num4.anchor.set(0.5);
         //_this.num4.inputEnabled=true;
         _this.num4.name="numbox4";
         //_this.num4.input.useHandCursor=true;
         _this.num4.events.onInputDown.add(function(target)
              {
                     added4=0;
                    console.log(added4)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num4.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=1;
              },_this);
         
         _this.questionbox = _this.add.sprite(820,160,'NOLMbox2');
         _this.questionbox.anchor.setTo(0.5);
        
         _this.num = _this.add.text(-3,-3,"25 x 42");
         _this.num.anchor.set(0.5);
         _this.num.font = "myfont";
         _this.num.fill = "#17202A";
         _this.num.fontWeight = 'normal';
         _this.num.fontSize = 40;
         _this.questionbox.addChild(_this.num);
         
         _this.plus1 = _this.add.text(327,155,"+");
         _this.plus1.anchor.set(0.5);
         //_this.plus1.font = "myfont";
         _this.plus1.fill = "#17202A";
         _this.plus1.fontWeight = 'normal';
         _this.plus1.fontSize = 35;
         
         _this.plus2 = _this.add.text(123,280,"+");
         _this.plus2.anchor.set(0.5);
         //_this.plus2.font = "myfont";
         _this.plus2.fill = "#17202A";
         _this.plus2.fontWeight = 'normal';
         _this.plus2.fontSize = 25;
        
         _this.time.events.add(1000,function(){
             _this.num1.inputEnabled=true;
             _this.num2.inputEnabled=true;
             _this.num3.inputEnabled=true;
             _this.num4.inputEnabled=true;
             _this.num1.frame=1;
             _this.selectedBox = _this.num1.name;
             _this.addNumberPad();
             _this.voicevalue1 = true;
             _this.voicevalue2 = false;
             _this.voicevalue3 = false;
             _this.voicevalue4 = false;
             _this.getVoice();
         },_this);
         
         _this.Ans=20;
         _this.Ans1=5;
         _this.Ans2=40;
         _this.Ans3=2;
         
         _this.text1 = _this.add.text(0,0,"800");//632,158
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#FFFFFF";
         _this.text1.fontWeight = 'normal';
         _this.text1.fontSize = 40;
         
         _this.b1 = _this.add.sprite(615,160,'NOLMbox3');
         _this.b1.anchor.setTo(0.5);
         _this.b1.visible=false;
         _this.b1.addChild(_this.text1);
         _this.b1.inputEnabled =true;
         _this.b1.events.onInputDown.add(_this.onDragstart,_this);
  
         _this.text2 = _this.add.text(0,0,"40");//642,258
         _this.text2.anchor.set(0.5);
         _this.text2.font = "myfont";
         _this.text2.fill = "#FFFFFF";
         _this.text2.fontWeight = 'normal';
         _this.text2.fontSize = 40;
         
         _this.b2 = _this.add.sprite(615,260,'NOLMbox3');
         _this.b2.anchor.setTo(0.5);
         _this.b2.visible=false;
         _this.b2.addChild(_this.text2);
         _this.b2.inputEnabled =true;
         _this.b2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text3 = _this.add.text(0,0,"200");//640,358
         _this.text3.anchor.set(0.5);
         _this.text3.font = "myfont";
         _this.text3.fill = "#FFFFFF";
         _this.text3.fontWeight = 'normal';
         _this.text3.fontSize = 40;
         
         _this.b3 = _this.add.sprite(615,360,'NOLMbox3');
         _this.b3.anchor.setTo(0.5);
         _this.b3.visible=false;
         _this.b3.addChild(_this.text3);
         _this.b3.inputEnabled =true;
         _this.b3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text4 = _this.add.text(0,0,"10");//625,458
         _this.text4.anchor.set(0.5);
         _this.text4.font = "myfont";
         _this.text4.fill = "#FFFFFF";
         _this.text4.fontWeight = 'normal';
         _this.text4.fontSize = 40;
         
         _this.b4 = _this.add.sprite(615,460,'NOLMbox3');
         _this.b4.anchor.setTo(0.5);
         _this.b4.visible=false;
         _this.b4.addChild(_this.text4);
         _this.b4.inputEnabled =true;
         _this.b4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.graphics1 = _this.add.graphics(100,100);
         _this.graphics1.lineStyle(2, 0x0000FF, 1);
         _this.graphics1.drawRect(85, 102, 130, 65);
         
         _this.graphics2 = _this.add.graphics(100,100);
         _this.graphics2.lineStyle(2, 0x0000FF, 1);
         _this.graphics2.drawRect(244, 102, 130, 65);
         
         _this.graphics3 = _this.add.graphics(100,100);
         _this.graphics3.lineStyle(2, 0x0000FF, 1);
         _this.graphics3.drawRect(85, 188, 130, 65);
         
         _this.graphics4 = _this.add.graphics(100,100);
         _this.graphics4.lineStyle(2, 0x0000FF, 1);
         _this.graphics4.drawRect(244, 188, 130, 65);
        
         _this.graphics5 = _this.add.graphics(100,100);
         _this.graphics5.lineStyle(2, 0x0000FF, 1);
         _this.graphics5.drawRect(440, 15, 150, 380);
         
         _this.graphicsGrp.add(_this.graphics1);
         _this.graphicsGrp.add(_this.graphics2);
         _this.graphicsGrp.add(_this.graphics3);
         _this.graphicsGrp.add(_this.graphics4);
         _this.graphicsGrp.add(_this.graphics5);
         _this.graphicsGrp.alpha=0;
        
         _this.dragAns1=800;
         _this.dragAns2=200;
         _this.dragAns3=40;
         _this.dragAns4=10;
         
         _this.text11 = _this.add.text(0,0,"1000");//632,158
         _this.text11.anchor.set(0.5);
         _this.text11.font = "myfont";
         _this.text11.fill = "#FFFFFF";
         _this.text11.fontWeight = 'normal';
         _this.text11.fontSize = 40;
         
         _this.b11 = _this.add.sprite(615,235,'NOLMbox3');
         _this.b11.anchor.setTo(0.5);
         _this.b11.visible=false;
         _this.b11.addChild(_this.text11);
         
         _this.text12 = _this.add.text(15,0,"50");//632,158
         _this.text12.anchor.set(0.5);
         _this.text12.font = "myfont";
         _this.text12.fill = "#FFFFFF";
         _this.text12.fontWeight = 'normal';
         _this.text12.fontSize = 40;
         
         _this.b12 = _this.add.sprite(615,322,'NOLMbox3');
         _this.b12.anchor.setTo(0.5);
         _this.b12.visible=false;
         _this.b12.addChild(_this.text12);
         
         _this.plus3 = _this.add.text(525,280,"+");
         _this.plus3.anchor.set(0.5);
         //_this.plus3.font = "myfont";
         _this.plus3.fill = "#17202A";
         _this.plus3.fontWeight = 'normal';
         _this.plus3.fontSize = 40;
         _this.plus3.visible=false;
         
         _this.equal = _this.add.text(522,410,"=");
         _this.equal.anchor.set(0.5);
         //_this.equal.font = "myfont";
         _this.equal.fill = "#17202A";
         _this.equal.fontWeight = 'normal';
         _this.equal.fontSize = 40;
         _this.equal.visible=false;
         
         _this.b13 = _this.add.sprite(615,410,'NOLMbox4');
         _this.b13.anchor.setTo(0.5);
         _this.b13.visible=false;
         
         _this.rightAns=1050;
        
         _this.tick = _this.add.sprite(830,300,"tick");
         _this.tick.anchor.setTo(0.5);
         _this.tick.frame=0;
         _this.tick.visible=false;
         
         _this.tick.events.onInputUp.add(function(target){
            target.frame = 0;
            },this);
         _this.tick.events.onInputDown.add(_this.clickTickMark,_this);
         
         _this.boxGrp.add(_this.box1);
         _this.boxGrp.add(_this.box2);
         _this.boxGrp.add(_this.box3);
         _this.boxGrp.add(_this.box4);
        
         _this.objGrp.add(_this.b1);
         _this.objGrp.add(_this.b2);
         _this.objGrp.add(_this.b3);
         _this.objGrp.add(_this.b4);
         
         _this.objGrp1.add(_this.num1);
         _this.objGrp1.add(_this.num2);
         _this.objGrp1.add(_this.num3);
         _this.objGrp1.add(_this.num4);
         _this.objGrp1.add(_this.mainbox);
         _this.objGrp1.add(_this.questionbox);
         _this.objGrp1.add(_this.plus1);
         _this.objGrp1.add(_this.plus2);
         _this.objGrp1.add(_this.b11);
         _this.objGrp1.add(_this.b12);
         _this.objGrp1.add(_this.plus3);
         _this.objGrp1.add(_this.equal);
        
    },
    
     gotoFourthQuestion:function(){

         _this.questionNo = 4;
         _this.objGrp1 = _this.add.group();
         _this.boxGrp = _this.add.group();
         _this.objGrp = _this.add.group();
         _this.graphicsGrp = _this.add.group();
         
         _this.mainbox = _this.add.sprite(327,276,'NOLMbox1');//290,250
         _this.mainbox.anchor.setTo(0.5);
         
         _this.box1 = _this.add.sprite(250,236,'NOLMbox5');//252,235
         _this.box1.anchor.setTo(0.5);
         
         _this.box2 = _this.add.sprite(409,236,'NOLMbox5');//412,235
         _this.box2.anchor.setTo(0.5);
         
         _this.box3 = _this.add.sprite(250,320,'NOLMbox5');//252,322
         _this.box3.anchor.setTo(0.5);
         
         _this.box4 = _this.add.sprite(409,320,'NOLMbox5');//412,322
         _this.box4.anchor.setTo(0.5);
         
         _this.num1 = _this.add.sprite(250,162,'NOLMnum_box');
         _this.num1.anchor.set(0.5);
         //_this.num1.inputEnabled=true;
         _this.num1.name="numbox1";
         //_this.num1.input.useHandCursor=true;
         _this.num1.events.onInputDown.add(function(target)
              {
                     added1=0;
                    console.log(added1)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num1.name;
                        _this.num1.frame=1;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num2 = _this.add.sprite(410,162,'NOLMnum_box');
         _this.num2.anchor.set(0.5);
         //_this.num2.inputEnabled=true;
         _this.num2.name="numbox2";
         //_this.num2.input.useHandCursor=true;
         _this.num2.events.onInputDown.add(function(target)
              {
                     added2=0;
                    console.log(added2)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num2.name;
                        _this.num1.frame=0;
                        _this.num2.frame=1;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num3 = _this.add.sprite(125,238,'NOLMnum_box');
         _this.num3.anchor.set(0.5);
         //_this.num3.inputEnabled=true;
         _this.num3.name="numbox3";
         //_this.num3.input.useHandCursor=true;
         _this.num3.events.onInputDown.add(function(target)
              {
                      added3=0;
                    console.log(added3)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num3.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=1;
                        _this.num4.frame=0;
              },_this);
         
         _this.num4 = _this.add.sprite(125,325,'NOLMnum_box');
         _this.num4.anchor.set(0.5);
         //_this.num4.inputEnabled=true;
         _this.num4.name="numbox4";
         //_this.num4.input.useHandCursor=true;
         _this.num4.events.onInputDown.add(function(target)
              {
                    added4=0;
                    console.log(added4)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num4.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=1;
              },_this);
         
         _this.questionbox = _this.add.sprite(820,160,'NOLMbox2');
         _this.questionbox.anchor.setTo(0.5);
         
         _this.num = _this.add.text(-3,-3,"15 x 57");
         _this.num.anchor.set(0.5);
         _this.num.font = "myfont";
         _this.num.fill = "#17202A";
         _this.num.fontWeight = 'normal';
         _this.num.fontSize = 40;
         _this.questionbox.addChild(_this.num);
         
         _this.plus1 = _this.add.text(327,155,"+");
         _this.plus1.anchor.set(0.5);
         //_this.plus1.font = "myfont";
         _this.plus1.fill = "#17202A";
         _this.plus1.fontWeight = 'normal';
         _this.plus1.fontSize = 35;
         
         _this.plus2 = _this.add.text(123,280,"+");
         _this.plus2.anchor.set(0.5);
         //_this.plus2.font = "myfont";
         _this.plus2.fill = "#17202A";
         _this.plus2.fontWeight = 'normal';
         _this.plus2.fontSize = 25;
         
         _this.time.events.add(1000,function(){
             _this.num1.inputEnabled=true;
             _this.num2.inputEnabled=true;
             _this.num3.inputEnabled=true;
             _this.num4.inputEnabled=true;
             _this.num1.frame=1;
             _this.selectedBox = _this.num1.name;
             _this.addNumberPad();
             _this.voicevalue1 = true;
             _this.voicevalue2 = false;
             _this.voicevalue3 = false;
             _this.voicevalue4 = false;
             _this.getVoice();
         },_this);
         
         _this.Ans=10;
         _this.Ans1=5;
         _this.Ans2=50;
         _this.Ans3=7;
         
         _this.text1 = _this.add.text(0,0,"250");//632,158
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#FFFFFF";
         _this.text1.fontWeight = 'normal';
         _this.text1.fontSize = 40;
         
         _this.b1 = _this.add.sprite(615,160,'NOLMbox3');
         _this.b1.anchor.setTo(0.5);
         _this.b1.visible=false;
         _this.b1.addChild(_this.text1);
         _this.b1.inputEnabled =true;
         _this.b1.events.onInputDown.add(_this.onDragstart,_this);
  
         _this.text2 = _this.add.text(0,0,"70");//642,258
         _this.text2.anchor.set(0.5);
         _this.text2.font = "myfont";
         _this.text2.fill = "#FFFFFF";
         _this.text2.fontWeight = 'normal';
         _this.text2.fontSize = 40;
         
         _this.b2 = _this.add.sprite(615,260,'NOLMbox3');
         _this.b2.anchor.setTo(0.5);
         _this.b2.visible=false;
         _this.b2.addChild(_this.text2);
         _this.b2.inputEnabled =true;
         _this.b2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text3 = _this.add.text(0,0,"500");//640,358
         _this.text3.anchor.set(0.5);
         _this.text3.font = "myfont";
         _this.text3.fill = "#FFFFFF";
         _this.text3.fontWeight = 'normal';
         _this.text3.fontSize = 40;
         
         _this.b3 = _this.add.sprite(615,360,'NOLMbox3');
         _this.b3.anchor.setTo(0.5);
         _this.b3.visible=false;
         _this.b3.addChild(_this.text3);
         _this.b3.inputEnabled =true;
         _this.b3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text4 = _this.add.text(0,0,"35");//625,458
         _this.text4.anchor.set(0.5);
         _this.text4.font = "myfont";
         _this.text4.fill = "#FFFFFF";
         _this.text4.fontWeight = 'normal';
         _this.text4.fontSize = 40;
         
         _this.b4 = _this.add.sprite(615,460,'NOLMbox3');
         _this.b4.anchor.setTo(0.5);
         _this.b4.visible=false;
         _this.b4.addChild(_this.text4);
         _this.b4.inputEnabled =true;
         _this.b4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.graphics1 = _this.add.graphics(100,100);
         _this.graphics1.lineStyle(2, 0x0000FF, 1);
         _this.graphics1.drawRect(85, 102, 130, 65);
         
         _this.graphics2 = _this.add.graphics(100,100);
         _this.graphics2.lineStyle(2, 0x0000FF, 1);
         _this.graphics2.drawRect(244, 102, 130, 65);
         
         _this.graphics3 = _this.add.graphics(100,100);
         _this.graphics3.lineStyle(2, 0x0000FF, 1);
         _this.graphics3.drawRect(85, 188, 130, 65);
         
         _this.graphics4 = _this.add.graphics(100,100);
         _this.graphics4.lineStyle(2, 0x0000FF, 1);
         _this.graphics4.drawRect(244, 188, 130, 65);
         
         _this.graphics5 = _this.add.graphics(100,100);
         _this.graphics5.lineStyle(2, 0x0000FF, 1);
         _this.graphics5.drawRect(440, 15, 150, 380);
         
         _this.graphicsGrp.add(_this.graphics1);
         _this.graphicsGrp.add(_this.graphics2);
         _this.graphicsGrp.add(_this.graphics3);
         _this.graphicsGrp.add(_this.graphics4);
         _this.graphicsGrp.add(_this.graphics5);
         _this.graphicsGrp.alpha=0;
         
         _this.dragAns1=500;
         _this.dragAns2=250;
         _this.dragAns3=70;
         _this.dragAns4=35;
         
         _this.text11 = _this.add.text(0,0,"750");//632,158
         _this.text11.anchor.set(0.5);
         _this.text11.font = "myfont";
         _this.text11.fill = "#FFFFFF";
         _this.text11.fontWeight = 'normal';
         _this.text11.fontSize = 40;
         
         _this.b11 = _this.add.sprite(615,235,'NOLMbox3');
         _this.b11.anchor.setTo(0.5);
         _this.b11.visible=false;
         _this.b11.addChild(_this.text11);
         
         _this.text12 = _this.add.text(0,0,"105");//632,158
         _this.text12.anchor.set(0.5);
         _this.text12.font = "myfont";
         _this.text12.fill = "#FFFFFF";
         _this.text12.fontWeight = 'normal';
         _this.text12.fontSize = 40;
         
         _this.b12 = _this.add.sprite(615,322,'NOLMbox3');
         _this.b12.anchor.setTo(0.5);
         _this.b12.visible=false;
         _this.b12.addChild(_this.text12);
         
         _this.plus3 = _this.add.text(525,280,"+");
         _this.plus3.anchor.set(0.5);
         //_this.plus3.font = "myfont";
         _this.plus3.fill = "#17202A";
         _this.plus3.fontWeight = 'normal';
         _this.plus3.fontSize = 40;
         _this.plus3.visible=false;
         
         _this.equal = _this.add.text(522,410,"=");
         _this.equal.anchor.set(0.5);
         //_this.equal.font = "myfont";
         _this.equal.fill = "#17202A";
         _this.equal.fontWeight = 'normal';
         _this.equal.fontSize = 40;
         _this.equal.visible=false;
         
         _this.b13 = _this.add.sprite(615,410,'NOLMbox4');
         _this.b13.anchor.setTo(0.5);
         _this.b13.visible=false;
         
         _this.rightAns=855;
         
         _this.tick = _this.add.sprite(830,300,"tick");
         _this.tick.anchor.setTo(0.5);
         _this.tick.frame=0;
         _this.tick.visible=false;
         
         _this.tick.events.onInputUp.add(function(target){
            target.frame = 0;
            },this);
         _this.tick.events.onInputDown.add(_this.clickTickMark,_this);
         
         _this.boxGrp.add(_this.box1);
         _this.boxGrp.add(_this.box2);
         _this.boxGrp.add(_this.box3);
         _this.boxGrp.add(_this.box4);
         
         _this.objGrp.add(_this.b1);
         _this.objGrp.add(_this.b2);
         _this.objGrp.add(_this.b3);
         _this.objGrp.add(_this.b4);
         
         _this.objGrp1.add(_this.num1);
         _this.objGrp1.add(_this.num2);
         _this.objGrp1.add(_this.num3);
         _this.objGrp1.add(_this.num4);
         _this.objGrp1.add(_this.mainbox);
         _this.objGrp1.add(_this.questionbox);
         _this.objGrp1.add(_this.plus1);
         _this.objGrp1.add(_this.plus2);
         _this.objGrp1.add(_this.b11);
         _this.objGrp1.add(_this.b12);
         _this.objGrp1.add(_this.plus3);
         _this.objGrp1.add(_this.equal);
         
    },
    
    gotoFifthQuestion:function(){

         _this.questionNo = 5;
         _this.objGrp1 = _this.add.group();
         _this.boxGrp = _this.add.group();
         _this.objGrp = _this.add.group();
         _this.graphicsGrp = _this.add.group();
         
         _this.mainbox = _this.add.sprite(327,276,'NOLMbox1');//290,250
         _this.mainbox.anchor.setTo(0.5);
        
         _this.box1 = _this.add.sprite(250,236,'NOLMbox5');//252,235
         _this.box1.anchor.setTo(0.5);
         
         _this.box2 = _this.add.sprite(409,236,'NOLMbox5');//412,235
         _this.box2.anchor.setTo(0.5);
         
         _this.box3 = _this.add.sprite(250,320,'NOLMbox5');//252,322
         _this.box3.anchor.setTo(0.5);
         
         _this.box4 = _this.add.sprite(409,320,'NOLMbox5');//412,322
         _this.box4.anchor.setTo(0.5);
        
         _this.num1 = _this.add.sprite(250,162,'NOLMnum_box');
         _this.num1.anchor.set(0.5);
         //_this.num1.inputEnabled=true;
         _this.num1.name="numbox1";
         //_this.num1.input.useHandCursor=true;
         _this.num1.events.onInputDown.add(function(target)
              {
                     added1=0;
                    console.log(added1)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num1.name;
                        _this.num1.frame=1;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num2 = _this.add.sprite(410,162,'NOLMnum_box');
         _this.num2.anchor.set(0.5);
         //_this.num2.inputEnabled=true;
         _this.num2.name="numbox2";
         //_this.num2.input.useHandCursor=true;
         _this.num2.events.onInputDown.add(function(target)
              {
                     added2=0;
                    console.log(added2)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num2.name;
                        _this.num1.frame=0;
                        _this.num2.frame=1;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num3 = _this.add.sprite(125,238,'NOLMnum_box');
         _this.num3.anchor.set(0.5);
         //_this.num3.inputEnabled=true;
         _this.num3.name="numbox3";
         //_this.num3.input.useHandCursor=true;
         _this.num3.events.onInputDown.add(function(target)
              {
                        added3=0;
                    console.log(added3)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num3.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=1;
                        _this.num4.frame=0;
              },_this);
         
         _this.num4 = _this.add.sprite(125,325,'NOLMnum_box');
         _this.num4.anchor.set(0.5);
         //_this.num4.inputEnabled=true;
         _this.num4.name="numbox4";
         //_this.num4.input.useHandCursor=true;
         _this.num4.events.onInputDown.add(function(target)
              {
                    added4=0;
                    console.log(added4)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num4.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=1;
              },_this);
         
         _this.questionbox = _this.add.sprite(820,160,'NOLMbox2');
         _this.questionbox.anchor.setTo(0.5);
        
         _this.num = _this.add.text(-3,-3,"28 x 39");
         _this.num.anchor.set(0.5);
         _this.num.font = "myfont";
         _this.num.fill = "#17202A";
         _this.num.fontWeight = 'normal';
         _this.num.fontSize = 40;
         _this.questionbox.addChild(_this.num);
         
         _this.plus1 = _this.add.text(327,155,"+");
         _this.plus1.anchor.set(0.5);
         //_this.plus1.font = "myfont";
         _this.plus1.fill = "#17202A";
         _this.plus1.fontWeight = 'normal';
         _this.plus1.fontSize = 35;
         
         _this.plus2 = _this.add.text(123,280,"+");
         _this.plus2.anchor.set(0.5);
         //_this.plus2.font = "myfont";
         _this.plus2.fill = "#17202A";
         _this.plus2.fontWeight = 'normal';
         _this.plus2.fontSize = 25;
         
         _this.time.events.add(1000,function(){
             _this.num1.inputEnabled=true;
             _this.num2.inputEnabled=true;
             _this.num3.inputEnabled=true;
             _this.num4.inputEnabled=true;
             _this.num1.frame=1;
             _this.selectedBox = _this.num1.name;
             _this.addNumberPad();
             _this.voicevalue1 = true;
             _this.voicevalue2 = false;
             _this.voicevalue3 = false;
             _this.voicevalue4 = false;
             _this.getVoice();
         },_this);
         
         _this.Ans=20;
         _this.Ans1=8;
         _this.Ans2=30;
         _this.Ans3=9;
         
         _this.text1 = _this.add.text(0,0,"180");//632,158
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#FFFFFF";
         _this.text1.fontWeight = 'normal';
         _this.text1.fontSize = 40;
         
         _this.b1 = _this.add.sprite(615,160,'NOLMbox3');
         _this.b1.anchor.setTo(0.5);
         _this.b1.visible=false;
         _this.b1.addChild(_this.text1);
         _this.b1.inputEnabled =true;
         _this.b1.events.onInputDown.add(_this.onDragstart,_this);
  
         _this.text2 = _this.add.text(0,0,"240");//642,258
         _this.text2.anchor.set(0.5);
         _this.text2.font = "myfont";
         _this.text2.fill = "#FFFFFF";
         _this.text2.fontWeight = 'normal';
         _this.text2.fontSize = 40;
         
         _this.b2 = _this.add.sprite(615,260,'NOLMbox3');
         _this.b2.anchor.setTo(0.5);
         _this.b2.visible=false;
         _this.b2.addChild(_this.text2);
         _this.b2.inputEnabled =true;
         _this.b2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text3 = _this.add.text(0,0,"72");//640,358
         _this.text3.anchor.set(0.5);
         _this.text3.font = "myfont";
         _this.text3.fill = "#FFFFFF";
         _this.text3.fontWeight = 'normal';
         _this.text3.fontSize = 40;
         
         _this.b3 = _this.add.sprite(615,360,'NOLMbox3');
         _this.b3.anchor.setTo(0.5);
         _this.b3.visible=false;
         _this.b3.addChild(_this.text3);
         _this.b3.inputEnabled =true;
         _this.b3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text4 = _this.add.text(0,0,"600");//625,458
         _this.text4.anchor.set(0.5);
         _this.text4.font = "myfont";
         _this.text4.fill = "#FFFFFF";
         _this.text4.fontWeight = 'normal';
         _this.text4.fontSize = 40;
         
         _this.b4 = _this.add.sprite(615,460,'NOLMbox3');
         _this.b4.anchor.setTo(0.5);
         _this.b4.visible=false;
         _this.b4.addChild(_this.text4);
         _this.b4.inputEnabled =true;
         _this.b4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.graphics1 = _this.add.graphics(100,100);
         _this.graphics1.lineStyle(2, 0x0000FF, 1);
         _this.graphics1.drawRect(85, 102, 130, 65);
         
         _this.graphics2 = _this.add.graphics(100,100);
         _this.graphics2.lineStyle(2, 0x0000FF, 1);
         _this.graphics2.drawRect(244, 102, 130, 65);
         
         _this.graphics3 = _this.add.graphics(100,100);
         _this.graphics3.lineStyle(2, 0x0000FF, 1);
         _this.graphics3.drawRect(85, 188, 130, 65);
         
         _this.graphics4 = _this.add.graphics(100,100);
         _this.graphics4.lineStyle(2, 0x0000FF, 1);
         _this.graphics4.drawRect(244, 188, 130, 65);
        
         _this.graphics5 = _this.add.graphics(100,100);
         _this.graphics5.lineStyle(2, 0x0000FF, 1);
         _this.graphics5.drawRect(440, 15, 150, 380);
         
         _this.graphicsGrp.add(_this.graphics1);
         _this.graphicsGrp.add(_this.graphics2);
         _this.graphicsGrp.add(_this.graphics3);
         _this.graphicsGrp.add(_this.graphics4);
         _this.graphicsGrp.add(_this.graphics5);
         _this.graphicsGrp.alpha=0;
        
         _this.dragAns1=600;
         _this.dragAns2=240;
         _this.dragAns3=180;
         _this.dragAns4=72;
         
         _this.text11 = _this.add.text(0,0,"840");//632,158
         _this.text11.anchor.set(0.5);
         _this.text11.font = "myfont";
         _this.text11.fill = "#FFFFFF";
         _this.text11.fontWeight = 'normal';
         _this.text11.fontSize = 40;
         
         _this.b11 = _this.add.sprite(615,235,'NOLMbox3');
         _this.b11.anchor.setTo(0.5);
         _this.b11.visible=false;
         _this.b11.addChild(_this.text11);
         
         _this.text12 = _this.add.text(0,0,"252");//632,158
         _this.text12.anchor.set(0.5);
         _this.text12.font = "myfont";
         _this.text12.fill = "#FFFFFF";
         _this.text12.fontWeight = 'normal';
         _this.text12.fontSize = 40;
         
         _this.b12 = _this.add.sprite(615,322,'NOLMbox3');
         _this.b12.anchor.setTo(0.5);
         _this.b12.visible=false;
         _this.b12.addChild(_this.text12);
         
         _this.plus3 = _this.add.text(525,280,"+");
         _this.plus3.anchor.set(0.5);
         //_this.plus3.font = "myfont";
         _this.plus3.fill = "#17202A";
         _this.plus3.fontWeight = 'normal';
         _this.plus3.fontSize = 40;
         _this.plus3.visible=false;
         
         _this.equal = _this.add.text(522,410,"=");
         _this.equal.anchor.set(0.5);
         //_this.equal.font = "myfont";
         _this.equal.fill = "#17202A";
         _this.equal.fontWeight = 'normal';
         _this.equal.fontSize = 40;
         _this.equal.visible=false;
         
         _this.b13 = _this.add.sprite(615,410,'NOLMbox4');
         _this.b13.anchor.setTo(0.5);
         _this.b13.visible=false;
         
         _this.rightAns=1092;
         
         _this.tick = _this.add.sprite(830,300,"tick");
         _this.tick.anchor.setTo(0.5);
         _this.tick.frame=0;
         _this.tick.visible=false;
         
         _this.tick.events.onInputUp.add(function(target){
            target.frame = 0;
            },this);
         _this.tick.events.onInputDown.add(_this.clickTickMark,_this);
         
         _this.boxGrp.add(_this.box1);
         _this.boxGrp.add(_this.box2);
         _this.boxGrp.add(_this.box3);
         _this.boxGrp.add(_this.box4);
         
         _this.objGrp.add(_this.b1);
         _this.objGrp.add(_this.b2);
         _this.objGrp.add(_this.b3);
         _this.objGrp.add(_this.b4);
         
         _this.objGrp1.add(_this.num1);
         _this.objGrp1.add(_this.num2);
         _this.objGrp1.add(_this.num3);
         _this.objGrp1.add(_this.num4);
         _this.objGrp1.add(_this.mainbox);
         _this.objGrp1.add(_this.questionbox);
         _this.objGrp1.add(_this.plus1);
         _this.objGrp1.add(_this.plus2);
         _this.objGrp1.add(_this.b11);
         _this.objGrp1.add(_this.b12);
         _this.objGrp1.add(_this.plus3);
         _this.objGrp1.add(_this.equal);
    },
    
    gotoSixthQuestion:function(){

         _this.questionNo = 6;
         _this.objGrp1 = _this.add.group();
         _this.boxGrp = _this.add.group();
         _this.objGrp = _this.add.group();
         _this.graphicsGrp = _this.add.group();
         
         _this.mainbox = _this.add.sprite(327,276,'NOLMbox1');//290,250
         _this.mainbox.anchor.setTo(0.5);
        
         _this.box1 = _this.add.sprite(250,236,'NOLMbox5');//252,235
         _this.box1.anchor.setTo(0.5);
         
         _this.box2 = _this.add.sprite(409,236,'NOLMbox5');//412,235
         _this.box2.anchor.setTo(0.5);
         
         _this.box3 = _this.add.sprite(250,320,'NOLMbox5');//252,322
         _this.box3.anchor.setTo(0.5);
         
         _this.box4 = _this.add.sprite(409,320,'NOLMbox5');//412,322
         _this.box4.anchor.setTo(0.5);
        
         _this.num1 = _this.add.sprite(250,162,'NOLMnum_box');
         _this.num1.anchor.set(0.5);
         //_this.num1.inputEnabled=true;
         _this.num1.name="numbox1";
         //_this.num1.input.useHandCursor=true;
         _this.num1.events.onInputDown.add(function(target)
              {
                     added1=0;
                    console.log(added1)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num1.name;
                        _this.num1.frame=1;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num2 = _this.add.sprite(410,162,'NOLMnum_box');
         _this.num2.anchor.set(0.5);
         //_this.num2.inputEnabled=true;
         _this.num2.name="numbox2";
         //_this.num2.input.useHandCursor=true;
         _this.num2.events.onInputDown.add(function(target)
              {
                     added2=0;
                    console.log(added2)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num2.name;
                        _this.num1.frame=0;
                        _this.num2.frame=1;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num3 = _this.add.sprite(125,238,'NOLMnum_box');
         _this.num3.anchor.set(0.5);
         //_this.num3.inputEnabled=true;
         _this.num3.name="numbox3";
         //_this.num3.input.useHandCursor=true;
         _this.num3.events.onInputDown.add(function(target)
              {
                        added3=0;
                    console.log(added3)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num3.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=1;
                        _this.num4.frame=0;
              },_this);
         
         _this.num4 = _this.add.sprite(125,325,'NOLMnum_box');
         _this.num4.anchor.set(0.5);
         //_this.num4.inputEnabled=true;
         _this.num4.name="numbox4";
         //_this.num4.input.useHandCursor=true;
         _this.num4.events.onInputDown.add(function(target)
              {
                    added4=0;
                    console.log(added4)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num4.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=1;
              },_this);
         
         _this.questionbox = _this.add.sprite(820,160,'NOLMbox2');
         _this.questionbox.anchor.setTo(0.5);
        
         _this.num = _this.add.text(-3,-3,"32 x 61");
         _this.num.anchor.set(0.5);
         _this.num.font = "myfont";
         _this.num.fill = "#17202A";
         _this.num.fontWeight = 'normal';
         _this.num.fontSize = 40;
         _this.questionbox.addChild(_this.num);
         
         _this.plus1 = _this.add.text(327,155,"+");
         _this.plus1.anchor.set(0.5);
         //_this.plus1.font = "myfont";
         _this.plus1.fill = "#17202A";
         _this.plus1.fontWeight = 'normal';
         _this.plus1.fontSize = 35;
         
         _this.plus2 = _this.add.text(123,280,"+");
         _this.plus2.anchor.set(0.5);
         //_this.plus2.font = "myfont";
         _this.plus2.fill = "#17202A";
         _this.plus2.fontWeight = 'normal';
         _this.plus2.fontSize = 25;
         
         _this.time.events.add(1000,function(){
             _this.num1.inputEnabled=true;
             _this.num2.inputEnabled=true;
             _this.num3.inputEnabled=true;
             _this.num4.inputEnabled=true;
             _this.num1.frame=1;
             _this.selectedBox = _this.num1.name;
             _this.addNumberPad();
             _this.voicevalue1 = true;
             _this.voicevalue2 = false;
             _this.voicevalue3 = false;
             _this.voicevalue4 = false;
             _this.getVoice();
         },_this);
         
         _this.Ans=30;
         _this.Ans1=2;
         _this.Ans2=60;
         _this.Ans3=1;
         
         _this.text1 = _this.add.text(0,0,"2");//632,158
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#FFFFFF";
         _this.text1.fontWeight = 'normal';
         _this.text1.fontSize = 40;
         
         _this.b1 = _this.add.sprite(615,160,'NOLMbox3');
         _this.b1.anchor.setTo(0.5);
         _this.b1.visible=false;
         _this.b1.addChild(_this.text1);
         _this.b1.inputEnabled =true;
         _this.b1.events.onInputDown.add(_this.onDragstart,_this);
  
         _this.text2 = _this.add.text(0,0,"120");//642,258
         _this.text2.anchor.set(0.5);
         _this.text2.font = "myfont";
         _this.text2.fill = "#FFFFFF";
         _this.text2.fontWeight = 'normal';
         _this.text2.fontSize = 40;
         
         _this.b2 = _this.add.sprite(615,260,'NOLMbox3');
         _this.b2.anchor.setTo(0.5);
         _this.b2.visible=false;
         _this.b2.addChild(_this.text2);
         _this.b2.inputEnabled =true;
         _this.b2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text3 = _this.add.text(0,0,"1800");//640,358
         _this.text3.anchor.set(0.5);
         _this.text3.font = "myfont";
         _this.text3.fill = "#FFFFFF";
         _this.text3.fontWeight = 'normal';
         _this.text3.fontSize = 40;
         
         _this.b3 = _this.add.sprite(615,360,'NOLMbox3');
         _this.b3.anchor.setTo(0.5);
         _this.b3.visible=false;
         _this.b3.addChild(_this.text3);
         _this.b3.inputEnabled =true;
         _this.b3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text4 = _this.add.text(0,0,"30");//625,458
         _this.text4.anchor.set(0.5);
         _this.text4.font = "myfont";
         _this.text4.fill = "#FFFFFF";
         _this.text4.fontWeight = 'normal';
         _this.text4.fontSize = 40;
         
         _this.b4 = _this.add.sprite(615,460,'NOLMbox3');
         _this.b4.anchor.setTo(0.5);
         _this.b4.visible=false;
         _this.b4.addChild(_this.text4);
         _this.b4.inputEnabled =true;
         _this.b4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.graphics1 = _this.add.graphics(100,100);
         _this.graphics1.lineStyle(2, 0x0000FF, 1);
         _this.graphics1.drawRect(85, 102, 130, 65);
         
         _this.graphics2 = _this.add.graphics(100,100);
         _this.graphics2.lineStyle(2, 0x0000FF, 1);
         _this.graphics2.drawRect(244, 102, 130, 65);
         
         _this.graphics3 = _this.add.graphics(100,100);
         _this.graphics3.lineStyle(2, 0x0000FF, 1);
         _this.graphics3.drawRect(85, 188, 130, 65);
         
         _this.graphics4 = _this.add.graphics(100,100);
         _this.graphics4.lineStyle(2, 0x0000FF, 1);
         _this.graphics4.drawRect(244, 188, 130, 65);
        
         _this.graphics5 = _this.add.graphics(100,100);
         _this.graphics5.lineStyle(2, 0x0000FF, 1);
         _this.graphics5.drawRect(440, 15, 150, 380);
         
         _this.graphicsGrp.add(_this.graphics1);
         _this.graphicsGrp.add(_this.graphics2);
         _this.graphicsGrp.add(_this.graphics3);
         _this.graphicsGrp.add(_this.graphics4);
         _this.graphicsGrp.add(_this.graphics5);
         _this.graphicsGrp.alpha=0;
        
         _this.dragAns1=1800;
         _this.dragAns2=120;
         _this.dragAns3=30;
         _this.dragAns4=2;
         
         _this.text11 = _this.add.text(0,0,"1920");//632,158
         _this.text11.anchor.set(0.5);
         _this.text11.font = "myfont";
         _this.text11.fill = "#FFFFFF";
         _this.text11.fontWeight = 'normal';
         _this.text11.fontSize = 40;
         
         _this.b11 = _this.add.sprite(615,235,'NOLMbox3');
         _this.b11.anchor.setTo(0.5);
         _this.b11.visible=false;
         _this.b11.addChild(_this.text11);
         
         _this.text12 = _this.add.text(12,0,"32");//632,158
         _this.text12.anchor.set(0.5);
         _this.text12.font = "myfont";
         _this.text12.fill = "#FFFFFF";
         _this.text12.fontWeight = 'normal';
         _this.text12.fontSize = 40;
         
         _this.b12 = _this.add.sprite(615,322,'NOLMbox3');
         _this.b12.anchor.setTo(0.5);
         _this.b12.visible=false;
         _this.b12.addChild(_this.text12);
         
         _this.plus3 = _this.add.text(525,280,"+");
         _this.plus3.anchor.set(0.5);
         //_this.plus3.font = "myfont";
         _this.plus3.fill = "#17202A";
         _this.plus3.fontWeight = 'normal';
         _this.plus3.fontSize = 40;
         _this.plus3.visible=false;
         
         _this.equal = _this.add.text(522,410,"=");
         _this.equal.anchor.set(0.5);
         //_this.equal.font = "myfont";
         _this.equal.fill = "#17202A";
         _this.equal.fontWeight = 'normal';
         _this.equal.fontSize = 40;
         _this.equal.visible=false;
         
         _this.b13 = _this.add.sprite(615,410,'NOLMbox4');
         _this.b13.anchor.setTo(0.5);
         _this.b13.visible=false;
         
         _this.rightAns=1952;
         
         _this.tick = _this.add.sprite(830,300,"tick");
         _this.tick.anchor.setTo(0.5);
         _this.tick.frame=0;
         _this.tick.visible=false;
         
         _this.tick.events.onInputUp.add(function(target){
            target.frame = 0;
            },this);
         _this.tick.events.onInputDown.add(_this.clickTickMark,_this);
         
         _this.boxGrp.add(_this.box1);
         _this.boxGrp.add(_this.box2);
         _this.boxGrp.add(_this.box3);
         _this.boxGrp.add(_this.box4);
         
         _this.objGrp.add(_this.b1);
         _this.objGrp.add(_this.b2);
         _this.objGrp.add(_this.b3);
         _this.objGrp.add(_this.b4);
         
         _this.objGrp1.add(_this.num1);
         _this.objGrp1.add(_this.num2);
         _this.objGrp1.add(_this.num3);
         _this.objGrp1.add(_this.num4);
         _this.objGrp1.add(_this.mainbox);
         _this.objGrp1.add(_this.questionbox);
         _this.objGrp1.add(_this.plus1);
         _this.objGrp1.add(_this.plus2);
         _this.objGrp1.add(_this.b11);
         _this.objGrp1.add(_this.b12);
         _this.objGrp1.add(_this.plus3);
         _this.objGrp1.add(_this.equal);  
    },
    
    gotoSeventhQuestion:function(){

         _this.questionNo = 7;
         _this.objGrp1 = _this.add.group();
         _this.boxGrp = _this.add.group();
         _this.objGrp = _this.add.group();
         _this.graphicsGrp = _this.add.group();
         
         _this.mainbox = _this.add.sprite(327,276,'NOLMbox1');//290,250
         _this.mainbox.anchor.setTo(0.5);
        
         _this.box1 = _this.add.sprite(250,236,'NOLMbox5');//252,235
         _this.box1.anchor.setTo(0.5);
         
         _this.box2 = _this.add.sprite(409,236,'NOLMbox5');//412,235
         _this.box2.anchor.setTo(0.5);
         
         _this.box3 = _this.add.sprite(250,320,'NOLMbox5');//252,322
         _this.box3.anchor.setTo(0.5);
         
         _this.box4 = _this.add.sprite(409,320,'NOLMbox5');//412,322
         _this.box4.anchor.setTo(0.5);
        
         _this.num1 = _this.add.sprite(250,162,'NOLMnum_box');
         _this.num1.anchor.set(0.5);
         //_this.num1.inputEnabled=true;
         _this.num1.name="numbox1";
         //_this.num1.input.useHandCursor=true;
         _this.num1.events.onInputDown.add(function(target)
              {
                       added1=0;
                    console.log(added1)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num1.name;
                        _this.num1.frame=1;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num2 = _this.add.sprite(410,162,'NOLMnum_box');
         _this.num2.anchor.set(0.5);
         //_this.num2.inputEnabled=true;
         _this.num2.name="numbox2";
         //_this.num2.input.useHandCursor=true;
         _this.num2.events.onInputDown.add(function(target)
              {
                      added2=0;
                    console.log(added2)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num2.name;
                        _this.num1.frame=0;
                        _this.num2.frame=1;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num3 = _this.add.sprite(125,238,'NOLMnum_box');
         _this.num3.anchor.set(0.5);
         //_this.num3.inputEnabled=true;
         _this.num3.name="numbox3";
         //_this.num3.input.useHandCursor=true;
         _this.num3.events.onInputDown.add(function(target)
              {
                        added3=0;
                    console.log(added3)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num3.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=1;
                        _this.num4.frame=0;
              },_this);
         
         _this.num4 = _this.add.sprite(125,325,'NOLMnum_box');
         _this.num4.anchor.set(0.5);
         //_this.num4.inputEnabled=true;
         _this.num4.name="numbox4";
         //_this.num4.input.useHandCursor=true;
         _this.num4.events.onInputDown.add(function(target)
              {
                    added4=0;
                    console.log(added4)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num4.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=1;
              },_this);
         
         _this.questionbox = _this.add.sprite(820,160,'NOLMbox2');
         _this.questionbox.anchor.setTo(0.5);
        
         _this.num = _this.add.text(-3,-3,"19 x 55");
         _this.num.anchor.set(0.5);
         _this.num.font = "myfont";
         _this.num.fill = "#17202A";
         _this.num.fontWeight = 'normal';
         _this.num.fontSize = 40;
         _this.questionbox.addChild(_this.num);
         
         _this.plus1 = _this.add.text(327,155,"+");
         _this.plus1.anchor.set(0.5);
         //_this.plus1.font = "myfont";
         _this.plus1.fill = "#17202A";
         _this.plus1.fontWeight = 'normal';
         _this.plus1.fontSize = 35;
         
         _this.plus2 = _this.add.text(123,280,"+");
         _this.plus2.anchor.set(0.5);
         //_this.plus2.font = "myfont";
         _this.plus2.fill = "#17202A";
         _this.plus2.fontWeight = 'normal';
         _this.plus2.fontSize = 25;
         
         _this.time.events.add(1000,function(){
             _this.num1.inputEnabled=true;
             _this.num2.inputEnabled=true;
             _this.num3.inputEnabled=true;
             _this.num4.inputEnabled=true;
             _this.num1.frame=1;
             _this.selectedBox = _this.num1.name;
             _this.addNumberPad();
             _this.voicevalue1 = true;
             _this.voicevalue2 = false;
             _this.voicevalue3 = false;
             _this.voicevalue4 = false;
             _this.getVoice();
         },_this);
         
         _this.Ans=10;
         _this.Ans1=9;
         _this.Ans2=50;
         _this.Ans3=5;
         
         _this.text1 = _this.add.text(0,0,"500");//632,158
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#FFFFFF";
         _this.text1.fontWeight = 'normal';
         _this.text1.fontSize = 40;
         
         _this.b1 = _this.add.sprite(615,160,'NOLMbox3');
         _this.b1.anchor.setTo(0.5);
         _this.b1.visible=false;
         _this.b1.addChild(_this.text1);
         _this.b1.inputEnabled =true;
         _this.b1.events.onInputDown.add(_this.onDragstart,_this);
  
         _this.text2 = _this.add.text(0,0,"450");//642,258
         _this.text2.anchor.set(0.5);
         _this.text2.font = "myfont";
         _this.text2.fill = "#FFFFFF";
         _this.text2.fontWeight = 'normal';
         _this.text2.fontSize = 40;
         
         _this.b2 = _this.add.sprite(615,260,'NOLMbox3');
         _this.b2.anchor.setTo(0.5);
         _this.b2.visible=false;
         _this.b2.addChild(_this.text2);
         _this.b2.inputEnabled =true;
         _this.b2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text3 = _this.add.text(0,0,"50");//640,358
         _this.text3.anchor.set(0.5);
         _this.text3.font = "myfont";
         _this.text3.fill = "#FFFFFF";
         _this.text3.fontWeight = 'normal';
         _this.text3.fontSize = 40;
         
         _this.b3 = _this.add.sprite(615,360,'NOLMbox3');
         _this.b3.anchor.setTo(0.5);
         _this.b3.visible=false;
         _this.b3.addChild(_this.text3);
         _this.b3.inputEnabled =true;
         _this.b3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text4 = _this.add.text(0,0,"45");//625,458
         _this.text4.anchor.set(0.5);
         _this.text4.font = "myfont";
         _this.text4.fill = "#FFFFFF";
         _this.text4.fontWeight = 'normal';
         _this.text4.fontSize = 40;
         
         _this.b4 = _this.add.sprite(615,460,'NOLMbox3');
         _this.b4.anchor.setTo(0.5);
         _this.b4.visible=false;
         _this.b4.addChild(_this.text4);
         _this.b4.inputEnabled =true;
         _this.b4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.graphics1 = _this.add.graphics(100,100);
         _this.graphics1.lineStyle(2, 0x0000FF, 1);
         _this.graphics1.drawRect(85, 102, 130, 65);
        
         _this.graphics2 = _this.add.graphics(100,100);
         _this.graphics2.lineStyle(2, 0x0000FF, 1);
         _this.graphics2.drawRect(244, 102, 130, 65);
         
         _this.graphics3 = _this.add.graphics(100,100);
         _this.graphics3.lineStyle(2, 0x0000FF, 1);
         _this.graphics3.drawRect(85, 188, 130, 65);
         
         _this.graphics4 = _this.add.graphics(100,100);
         _this.graphics4.lineStyle(2, 0x0000FF, 1);
         _this.graphics4.drawRect(244, 188, 130, 65);
        
         _this.graphics5 = _this.add.graphics(100,100);
         _this.graphics5.lineStyle(2, 0x0000FF, 1);
         _this.graphics5.drawRect(440, 15, 150, 380);
         
         _this.graphicsGrp.add(_this.graphics1);
         _this.graphicsGrp.add(_this.graphics2);
         _this.graphicsGrp.add(_this.graphics3);
         _this.graphicsGrp.add(_this.graphics4);
         _this.graphicsGrp.add(_this.graphics5);
         _this.graphicsGrp.alpha=0;
        
         _this.dragAns1=500;
         _this.dragAns2=450;
         _this.dragAns3=50;
         _this.dragAns4=45;
         
         _this.text11 = _this.add.text(0,0,"950");//632,158
         _this.text11.anchor.set(0.5);
         _this.text11.font = "myfont";
         _this.text11.fill = "#FFFFFF";
         _this.text11.fontWeight = 'normal';
         _this.text11.fontSize = 40;
         
         _this.b11 = _this.add.sprite(615,235,'NOLMbox3');
         _this.b11.anchor.setTo(0.5);
         _this.b11.visible=false;
         _this.b11.addChild(_this.text11);
         
         _this.text12 = _this.add.text(7,0,"95");//632,158
         _this.text12.anchor.set(0.5);
         _this.text12.font = "myfont";
         _this.text12.fill = "#FFFFFF";
         _this.text12.fontWeight = 'normal';
         _this.text12.fontSize = 40;
         
         _this.b12 = _this.add.sprite(615,322,'NOLMbox3');
         _this.b12.anchor.setTo(0.5);
         _this.b12.visible=false;
         _this.b12.addChild(_this.text12);
         
         _this.plus3 = _this.add.text(525,280,"+");
         _this.plus3.anchor.set(0.5);
         //_this.plus3.font = "myfont";
         _this.plus3.fill = "#17202A";
         _this.plus3.fontWeight = 'normal';
         _this.plus3.fontSize = 40;
         _this.plus3.visible=false;
         
         _this.equal = _this.add.text(522,410,"=");
         _this.equal.anchor.set(0.5);
         //_this.equal.font = "myfont";
         _this.equal.fill = "#17202A";
         _this.equal.fontWeight = 'normal';
         _this.equal.fontSize = 40;
         _this.equal.visible=false;
         
         _this.b13 = _this.add.sprite(615,410,'NOLMbox4');
         _this.b13.anchor.setTo(0.5);
         _this.b13.visible=false;
         
         _this.rightAns=1045;
         
         _this.tick = _this.add.sprite(830,300,"tick");
         _this.tick.anchor.setTo(0.5);
         _this.tick.frame=0;
         _this.tick.visible=false;
         
         _this.tick.events.onInputUp.add(function(target){
            target.frame = 0;
            },this);
         _this.tick.events.onInputDown.add(_this.clickTickMark,_this);
         
         _this.boxGrp.add(_this.box1);
         _this.boxGrp.add(_this.box2);
         _this.boxGrp.add(_this.box3);
         _this.boxGrp.add(_this.box4);
        
         _this.objGrp.add(_this.b1);
         _this.objGrp.add(_this.b2);
         _this.objGrp.add(_this.b3);
         _this.objGrp.add(_this.b4);
         
         _this.objGrp1.add(_this.num1);
         _this.objGrp1.add(_this.num2);
         _this.objGrp1.add(_this.num3);
         _this.objGrp1.add(_this.num4);
         _this.objGrp1.add(_this.mainbox);
         _this.objGrp1.add(_this.questionbox);
         _this.objGrp1.add(_this.plus1);
         _this.objGrp1.add(_this.plus2);
         _this.objGrp1.add(_this.b11);
         _this.objGrp1.add(_this.b12);
         _this.objGrp1.add(_this.plus3);
         _this.objGrp1.add(_this.equal);
         
    },
     gotoEighthQuestion:function(){

         _this.questionNo = 8;
         _this.objGrp1 = _this.add.group();
         _this.boxGrp = _this.add.group();
         _this.objGrp = _this.add.group();
         _this.graphicsGrp = _this.add.group();
         
         _this.mainbox = _this.add.sprite(327,276,'NOLMbox1');//290,250
         _this.mainbox.anchor.setTo(0.5);
         
         _this.box1 = _this.add.sprite(250,236,'NOLMbox5');//252,235
         _this.box1.anchor.setTo(0.5);
         
         _this.box2 = _this.add.sprite(409,236,'NOLMbox5');//412,235
         _this.box2.anchor.setTo(0.5);
         
         _this.box3 = _this.add.sprite(250,320,'NOLMbox5');//252,322
         _this.box3.anchor.setTo(0.5);
         
         _this.box4 = _this.add.sprite(409,320,'NOLMbox5');//412,322
         _this.box4.anchor.setTo(0.5);
         
         _this.num1 = _this.add.sprite(250,162,'NOLMnum_box');
         _this.num1.anchor.set(0.5);
         //_this.num1.inputEnabled=true;
         _this.num1.name="numbox1";
         //_this.num1.input.useHandCursor=true;
         _this.num1.events.onInputDown.add(function(target)
              {
                       added1=0;
                    console.log(added1) 
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num1.name;
                        _this.num1.frame=1;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num2 = _this.add.sprite(410,162,'NOLMnum_box');
         _this.num2.anchor.set(0.5);
         //_this.num2.inputEnabled=true;
         _this.num2.name="numbox2";
         //_this.num2.input.useHandCursor=true;
         _this.num2.events.onInputDown.add(function(target)
              {
                     added2=0;
                    console.log(added2)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num2.name;
                        _this.num1.frame=0;
                        _this.num2.frame=1;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
              },_this);
         
         _this.num3 = _this.add.sprite(125,238,'NOLMnum_box');
         _this.num3.anchor.set(0.5);
         //_this.num3.inputEnabled=true;
         _this.num3.name="numbox3";
         //_this.num3.input.useHandCursor=true;
         _this.num3.events.onInputDown.add(function(target)
              {
                        added3=0;
                    console.log(added3)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num3.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=1;
                        _this.num4.frame=0;
              },_this);
         
         _this.num4 = _this.add.sprite(125,325,'NOLMnum_box');
         _this.num4.anchor.set(0.5);
         //_this.num4.inputEnabled=true;
         _this.num4.name="numbox4";
         //_this.num4.input.useHandCursor=true;
         _this.num4.events.onInputDown.add(function(target)
              {
                    added4=0;
                    console.log(added4)
                  _this.clickSound = _this.add.audio('ClickSound');
                  _this.clickSound.play();
                  _this.selectedBox = _this.num4.name;
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=1;
              },_this);
         
         _this.questionbox = _this.add.sprite(820,160,'NOLMbox2');
         _this.questionbox.anchor.setTo(0.5);
         
         _this.num = _this.add.text(-3,-3,"24 x 34");
         _this.num.anchor.set(0.5);
         _this.num.font = "myfont";
         _this.num.fill = "#17202A";
         _this.num.fontWeight = 'normal';
         _this.num.fontSize = 40;
         _this.questionbox.addChild(_this.num);
         
         _this.plus1 = _this.add.text(327,155,"+");
         _this.plus1.anchor.set(0.5);
         //_this.plus1.font = "myfont";
         _this.plus1.fill = "#17202A";
         _this.plus1.fontWeight = 'normal';
         _this.plus1.fontSize = 35;
         
         _this.plus2 = _this.add.text(123,280,"+");
         _this.plus2.anchor.set(0.5);
         //_this.plus2.font = "myfont";
         _this.plus2.fill = "#17202A";
         _this.plus2.fontWeight = 'normal';
         _this.plus2.fontSize = 25;
         
         _this.time.events.add(1000,function(){
             _this.num1.inputEnabled=true;
             _this.num2.inputEnabled=true;
             _this.num3.inputEnabled=true;
             _this.num4.inputEnabled=true;
             _this.num1.frame=1;
             _this.selectedBox = _this.num1.name;
             _this.addNumberPad();
             _this.voicevalue1 = true;
             _this.voicevalue2 = false;
             _this.voicevalue3 = false;
             _this.voicevalue4 = false;
             _this.getVoice();
         },_this);
         
         _this.Ans=20;
         _this.Ans1=4;
         _this.Ans2=30;
         _this.Ans3=4;
         
         _this.text1 = _this.add.text(0,0,"120");//632,158
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#FFFFFF";
         _this.text1.fontWeight = 'normal';
         _this.text1.fontSize = 40;
         
         _this.b1 = _this.add.sprite(615,160,'NOLMbox3');
         _this.b1.anchor.setTo(0.5);
         _this.b1.visible=false;
         _this.b1.addChild(_this.text1);
         _this.b1.inputEnabled =true;
         _this.b1.events.onInputDown.add(_this.onDragstart,_this);
  
         _this.text2 = _this.add.text(0,0,"80");//642,258
         _this.text2.anchor.set(0.5);
         _this.text2.font = "myfont";
         _this.text2.fill = "#FFFFFF";
         _this.text2.fontWeight = 'normal';
         _this.text2.fontSize = 40;
         
         _this.b2 = _this.add.sprite(615,260,'NOLMbox3');
         _this.b2.anchor.setTo(0.5);
         _this.b2.visible=false;
         _this.b2.addChild(_this.text2);
         _this.b2.inputEnabled =true;
         _this.b2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text3 = _this.add.text(0,0,"600");//640,358
         _this.text3.anchor.set(0.5);
         _this.text3.font = "myfont";
         _this.text3.fill = "#FFFFFF";
         _this.text3.fontWeight = 'normal';
         _this.text3.fontSize = 40;
         
         _this.b3 = _this.add.sprite(615,360,'NOLMbox3');
         _this.b3.anchor.setTo(0.5);
         _this.b3.visible=false;
         _this.b3.addChild(_this.text3);
         _this.b3.inputEnabled =true;
         _this.b3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.text4 = _this.add.text(0,0,"16");//625,458
         _this.text4.anchor.set(0.5);
         _this.text4.font = "myfont";
         _this.text4.fill = "#FFFFFF";
         _this.text4.fontWeight = 'normal';
         _this.text4.fontSize = 40;
         
         _this.b4 = _this.add.sprite(615,460,'NOLMbox3');
         _this.b4.anchor.setTo(0.5);
         _this.b4.visible=false;
         _this.b4.addChild(_this.text4);
         _this.b4.inputEnabled =true;
         _this.b4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.graphics1 = _this.add.graphics(100,100);
         _this.graphics1.lineStyle(2, 0x0000FF, 1);
         _this.graphics1.drawRect(85, 102, 130, 65);
         
         _this.graphics2 = _this.add.graphics(100,100);
         _this.graphics2.lineStyle(2, 0x0000FF, 1);
         _this.graphics2.drawRect(244, 102, 130, 65);
         
         _this.graphics3 = _this.add.graphics(100,100);
         _this.graphics3.lineStyle(2, 0x0000FF, 1);
         _this.graphics3.drawRect(85, 188, 130, 65);
         
         _this.graphics4 = _this.add.graphics(100,100);
         _this.graphics4.lineStyle(2, 0x0000FF, 1);
         _this.graphics4.drawRect(244, 188, 130, 65);
         
         _this.graphics5 = _this.add.graphics(100,100);
         _this.graphics5.lineStyle(2, 0x0000FF, 1);
         _this.graphics5.drawRect(440, 15, 150, 380);
         
         _this.graphicsGrp.add(_this.graphics1);
         _this.graphicsGrp.add(_this.graphics2);
         _this.graphicsGrp.add(_this.graphics3);
         _this.graphicsGrp.add(_this.graphics4);
         _this.graphicsGrp.add(_this.graphics5);
         _this.graphicsGrp.alpha=0;
         
         _this.dragAns1=600;
         _this.dragAns2=120;
         _this.dragAns3=80;
         _this.dragAns4=16;
         
         _this.text11 = _this.add.text(0,0,"720");//632,158
         _this.text11.anchor.set(0.5);
         _this.text11.font = "myfont";
         _this.text11.fill = "#FFFFFF";
         _this.text11.fontWeight = 'normal';
         _this.text11.fontSize = 40;
         
         _this.b11 = _this.add.sprite(615,235,'NOLMbox3');
         _this.b11.anchor.setTo(0.5);
         _this.b11.visible=false;
         _this.b11.addChild(_this.text11);
         
         _this.text12 = _this.add.text(7,0,"96");//632,158
         _this.text12.anchor.set(0.5);
         _this.text12.font = "myfont";
         _this.text12.fill = "#FFFFFF";
         _this.text12.fontWeight = 'normal';
         _this.text12.fontSize = 40;
         
         _this.b12 = _this.add.sprite(615,322,'NOLMbox3');
         _this.b12.anchor.setTo(0.5);
         _this.b12.visible=false;
         _this.b12.addChild(_this.text12);
         
         _this.plus3 = _this.add.text(525,280,"+");
         _this.plus3.anchor.set(0.5);
         //_this.plus3.font = "myfont";
         _this.plus3.fill = "#17202A";
         _this.plus3.fontWeight = 'normal';
         _this.plus3.fontSize = 40;
         _this.plus3.visible=false;
         
         _this.equal = _this.add.text(522,410,"=");
         _this.equal.anchor.set(0.5);
         //_this.equal.font = "myfont";
         _this.equal.fill = "#17202A";
         _this.equal.fontWeight = 'normal';
         _this.equal.fontSize = 40;
         _this.equal.visible=false;
         
         _this.b13 = _this.add.sprite(615,410,'NOLMbox4');
         _this.b13.anchor.setTo(0.5);
         _this.b13.visible=false;
         
         _this.rightAns=816;
         
         _this.tick = _this.add.sprite(830,300,"tick");
         _this.tick.anchor.setTo(0.5);
         _this.tick.frame=0;
         _this.tick.visible=false;
         
         _this.tick.events.onInputUp.add(function(target){
            target.frame = 0;
            },this);
         _this.tick.events.onInputDown.add(_this.clickTickMark,_this);
         
         _this.boxGrp.add(_this.box1);
         _this.boxGrp.add(_this.box2);
         _this.boxGrp.add(_this.box3);
         _this.boxGrp.add(_this.box4);
         
         _this.objGrp.add(_this.b1);
         _this.objGrp.add(_this.b2);
         _this.objGrp.add(_this.b3);
         _this.objGrp.add(_this.b4);
         
         _this.objGrp1.add(_this.num1);
         _this.objGrp1.add(_this.num2);
         _this.objGrp1.add(_this.num3);
         _this.objGrp1.add(_this.num4);
         _this.objGrp1.add(_this.mainbox);
         _this.objGrp1.add(_this.questionbox);
         _this.objGrp1.add(_this.plus1);
         _this.objGrp1.add(_this.plus2);
         _this.objGrp1.add(_this.b11);
         _this.objGrp1.add(_this.b12);
         _this.objGrp1.add(_this.plus3);
         _this.objGrp1.add(_this.equal);
         
    },

    addNumberPad:function(target){
      _this.numBackground = _this.add.sprite(480,505,'num_NOLMbg');
      _this.numBackground.anchor.setTo(0.5);
      _this.numGroup = _this.add.group();
      _this.numGroup.add(_this.numBackground);
      _this.objGroup = _this.add.group();
      _this.x = 80;
        
        for(var i=1;i<11;i++)
        {
           
            _this.numbg = _this.numGroup.create(_this.x,505,'NOLMnumberpad');  
            _this.numbg.anchor.setTo(0.5);
           // _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.name = i;
            _this.numbg.frame = i;
            
            
            _this.numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Alte Haas Grotesk';
            _this.numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            _this.numTxt.fill = '#FFFFFF';
            _this.numTxt.visible=false;
            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild(_this.numTxt);

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(this.numClicked,this);  
            
            _this.x+=70;
        }
        
         _this.numGroup.y = 50;
         var Maintween = this.add.tween(_this.numGroup);
         Maintween.to({ y:0}, 0, 'Linear', true, 0);
       
        _this.numText1 = _this.add.text(0,-5, _this.selectedAns="");
        _this.numText1.anchor.setTo(0.5);
        _this.numText1.align = 'center';
        _this.numText1.font = 'myfont';
        _this.numText1.fontWeight = 'Normal';
        _this.numText1.fontSize = 40;
        _this.numText1.fill = '#65B4C3';
        _this.numText1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.num1.addChild(_this.numText1);
      
        _this.numText2 = _this.add.text(0,-5, _this.selectedAns1="");
        _this.numText2.anchor.setTo(0.5);
        _this.numText2.align = 'center';
        _this.numText2.font = 'myfont';
        _this.numText2.fontWeight = 'Normal';
        _this.numText2.fontSize = 40;
        _this.numText2.fill = '#65B4C3';
        _this.numText2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.num2.addChild(_this.numText2);
     
        _this.numText3 = _this.add.text(0,0, _this.selectedAns2="");
        _this.numText3.anchor.setTo(0.5);
        _this.numText3.align = 'center';
        _this.numText3.font = 'myfont';
        _this.numText3.fontWeight = 'Normal';
        _this.numText3.fontSize = 40;
        _this.numText3.fill = '#65B4C3';
        _this.numText3.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.num3.addChild(_this.numText3);
     
        _this.numText4 = _this.add.text(0,0, _this.selectedAns3="");
        _this.numText4.anchor.setTo(0.5);
        _this.numText4.align = 'center';
        _this.numText4.font = 'myfont';
        _this.numText4.fontWeight = 'Normal';
        _this.numText4.fontSize = 40;
        _this.numText4.fill = '#65B4C3';
        _this.numText4.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.num4.addChild(_this.numText4);
        
        _this.eraser = _this.numGroup.create(_this.x+10,508,'NOLMeraser');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.scale.setTo(0.5,0.5);
        _this.eraser.inputEnabled = true;
        _this.eraser.name = "eraser";
        _this.eraser.events.onInputDown.add(function(){
            _this.clickSound.play();
           _this.eraser.frame=1;
            if(_this.selectedBox == "numbox1")
            {
              if(added1<=2)
                {
                    added1=0;
                    console.log(added1);
                   _this.num1.frame=1;
                   _this.num2.frame=0; 
                   _this.numText1.setText("");
                   _this.selectedAns=""; 
                }
            }
            if(_this.selectedBox == "numbox2")
            {
                if(added2<=1)
                {
                    added2=0;
                    console.log(added2);
                   _this.num2.frame=1;
                   _this.num3.frame=0; 
                  _this.numText2.setText("");
                  _this.selectedAns1=""; 
                }
            }
            if(_this.selectedBox == "numbox3")
            {
                if(added3<=2)
                {
                    added3=0;
                    console.log(added3);
                   _this.num3.frame=1;
                   _this.num4.frame=0; 
                   _this.numText3.setText("");
                   _this.selectedAns2=""; 
                }
            }
            if(_this.selectedBox == "numbox4")
            {
                if(added4<=1)
                {
                    added4=0;
                    console.log(added4);
                    _this.num4.frame=1;
                  _this.numText4.setText("");
                  _this.selectedAns3=""; 
                }
            }
              
      _this.time.events.add(100,function(){
           _this.eraser.frame=0;
      },this);
      },this);

        _this.rightbtn =_this.numGroup.create(_this.x+90,513,'NOLMtick');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.events.onInputDown.add(function(){
              _this.clickSound.play();
              _this.rightbtn.frame=1;
            if((_this.selectedAns==_this.Ans||_this.selectedAns=="0"+_this.Ans)&&(_this.selectedAns1==_this.Ans1||_this.selectedAns1=="0"+_this.Ans1)&&(_this.selectedAns2==_this.Ans2||_this.selectedAns2=="0"+_this.Ans2)&&(_this.selectedAns3==_this.Ans3||_this.selectedAns3=="0"+_this.Ans3))  
                {
                        _this.num1.frame=0;
                        _this.num2.frame=0;
                        _this.num3.frame=0;
                        _this.num4.frame=0;
                    _this.num1.inputEnabled=false;
                    _this.num2.inputEnabled=false;
                    _this.num3.inputEnabled=false;
                    _this.num4.inputEnabled=false;
                    console.log("correct");
                    var Maintween = this.add.tween(_this.numGroup);
                     Maintween.to({ y:80}, 0, 'Linear', true, 0);
                    Maintween.onComplete.add(function(){
                     _this.b1.visible=true;
                     _this.b2.visible=true;
                     _this.b3.visible=true;
                     _this.b4.visible=true;
                     _this.b1.inputEnabled=true;
                     _this.b2.inputEnabled=true;
                     _this.b3.inputEnabled=true;
                     _this.b4.inputEnabled=true;
                        _this.voicevalue1 = false;
                        _this.voicevalue2 = false;
                        _this.voicevalue3 = true;
                        _this.voicevalue4 = false;
                        _this.getVoice();
                    },_this);
                }
             else
             {
                     _this.num1.frame=1; added1=0;
                     _this.num2.frame=0; added2=0;
                     _this.num3.frame=0; added3=0;
                     _this.num4.frame=0; added4=0;
                    _this.selectedBox = _this.num1.name;
                    _this.numText1.setText("");
                    _this.selectedAns=""; 
                    _this.numText2.setText("");
                    _this.selectedAns1=""; 
                    _this.numText3.setText("");
                    _this.selectedAns2=""; 
                    _this.numText4.setText("");
                    _this.selectedAns3=""; 
                    _this.num1.inputEnabled=false;
                    _this.num2.inputEnabled=false;
                    _this.num3.inputEnabled=false;
                    _this.num4.inputEnabled=false;
                 _this.wmusic = _this.add.audio('waudio');
                 _this.wmusic.play();
                 _this.time.events.add(500,function(){
                    _this.rightbtn.frame = 0;
                    _this.num1.inputEnabled=true;
                    _this.num2.inputEnabled=true;
                    _this.num3.inputEnabled=true;
                    _this.num4.inputEnabled=true;
                     },_this);
             }
         },_this);
   },
 
    numClicked:function(target){
     _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id:  "level1.4_"+target.name, 
                    access_token: window.acctkn 
               } 

            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
         
          
              if(_this.selectedBox == "numbox1")
                   {
                       if(_this.selectedAns.length<2)
                      {
                        
                       var number = Number(target.name);
                   if(number == 10)
                     number = 0;

                 if(_this.selectedAns!=""||_this.selectedAns!=null)
                     {
                     _this.selectedAns += number;
                         added1++;
                       console.log(added1)
                     }
                 else
                     _this.selectedAns = number;
                    
                _this.numText1.setText(_this.selectedAns);
                       if(added1==2)
                           {
                               _this.num1.frame=0;
                               _this.num2.frame=1;
                               _this.selectedBox = _this.num2.name; 
                           }
                    
                  }
            }
           else if(_this.selectedBox == "numbox2")
                  {
                      if(_this.selectedAns1.length<1)
                      {        
                     var number = Number(target.name);
                   if(number == 10)
                     number = 0;

                 if(_this.selectedAns1!=""||_this.selectedAns1!=null)
                     {
                         added2++;
                      console.log(added2)
                      _this.selectedAns1 += number;
                     }
                 else
                     _this.selectedAns1 = number;
                    _this.numText2.setText(_this.selectedAns1);
                      if(added2==1)
                           {
                               _this.num2.frame=0;
                               _this.num3.frame=1;
                               _this.selectedBox = _this.num3.name;
                               if(_this.voicecount==0)
                                {
                               _this.voicevalue1 = false;
                               _this.voicevalue2 = true;
                               _this.voicevalue3 = false;
                               _this.voicevalue4 = false;
                               _this.getVoice();
                               _this.voicecount++;
                               } 
                           }
                  }
              }
              else if(_this.selectedBox == "numbox3")
                    {
                 if(_this.selectedAns2.length<2)
                    {
                     var number = Number(target.name);
                   if(number == 10)
                     number = 0;

                 if(_this.selectedAns2!=""||_this.selectedAns2!=null)
                     {
                         added3++;
                      console.log(added3)
                      _this.selectedAns2 += number;
                     }
                     
                 else
                     _this.selectedAns2 = number;
                    _this.numText3.setText(_this.selectedAns2);
                        if(added3==2)
                           {
                               _this.num3.frame=0;
                               _this.num4.frame=1;
                               _this.selectedBox = _this.num4.name; 
                           }
                 }
              }
         else if(_this.selectedBox == "numbox4")
                   {
                       if(_this.selectedAns3.length<1)
                 {
                     var number = Number(target.name);
                   if(number == 10)
                     number = 0;

                 if(_this.selectedAns3!=""||_this.selectedAns3!=null)
                     {
                         added4++;
                      console.log(added4)
                      _this.selectedAns3 += number;
                     }
                     
                 else
                     _this.selectedAns3 = number;
                    _this.numText4.setText(_this.selectedAns3);
                       if(added4==1)
                           {
                               _this.num3.frame=0;
                               _this.num4.frame=1; 
                           }
                   
                }
              }
          
    },
    
  onDragstart:function(target)
    {
         // _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level1.5_"+target.name, 
                    access_token: window.acctkn 
               }  
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
         
         _this.vx = target.x;   
         _this.vy = target.y; 
          //target.inputEnabled =true;
          target.input.enableDrag(true);
        
        _this.click = _this.add.audio('ClickSound');
        _this.click.play();
        
        target.events.onDragStop.add(function(target){
                _this.click = _this.add.audio('snapSound');
                _this.click.play();
              var currentTime = window.timeSaveFunc();
                var interactEvent = 
                { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid,  
                    date_time_event: currentTime, 
                    event_type: "drop", 
                    res_id: "Level32B_"+target.name, 
                    access_token: window.acctkn 
                } 
                
                //absdsjsapi.saveInteractEvent(interactEvent);
                
                 for(var i=0;i<_this.boxGrp.length;i++)
            {
                if(_this.checkOverlap(target,_this.graphicsGrp.getChildAt(i)) && (_this.boxGrp.getChildAt(i).key == 'NOLMbox5'))
                { 
                    _this.change++;
                    
                    _this.boxGrp.getChildAt(i).loadTexture(target.key,0,false);
                    
                    _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                    _this.text.anchor.set(0.5);
                    _this.text.font = "myfont";
                    _this.text.fill = "#FFFFFF";
                    _this.text.fontWeight = 'normal';
                    _this.text.fontSize = 40;
                    _this.text.stroke = '#FFFFFF';
                    //_this.text.strokeThickness = 1;
                    _this.boxGrp.getChildAt(i).addChild(_this.text);
                    
                     target.visible = false;
                    
                    _this.boxGrp.getChildAt(i).inputEnabled = true; 
                    _this.boxGrp.getChildAt(i).input.useHandCursor = true;
                    _this.boxGrp.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder,_this);
                    target.events.onInputDown.removeAll(); 
                    break;
                }
            }
            
            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
            
            if( _this.change>=4)
            {
                _this.tick.visible =true;
                _this.tick.inputEnabled=true;
            }
        },_this);                
    },
    
     checkFortheRightOrder :function(target)
    {
        
        _this.vx = target.x;   
        _this.vy = target.y;

        target.input.enableDrag();
        target.events.onDragStop.add(this.dragStop,_this);
        
    },
    dragStop:function(target)
    {
        _this.click1 = this.add.audio('snapSound');
        _this.click1.play();
        
        for(var i=0;i<_this.boxGrp.length;i++)
        {
            if(_this.checkOverlap(target,_this.graphicsGrp.getChildAt(i)) && (_this.boxGrp.getChildAt(i).key == 'NOLMbox5'))
            { 
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.boxGrp.getChildAt(i).loadTexture(target.key,0,false);

                _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                _this.text.anchor.set(0.5);
                _this.text.font = "myfont";
                _this.text.fill = "#FFFFFF";
                _this.text.fontWeight = 'normal';
                _this.text.fontSize = 40;
                _this.text.stroke = '#FFFFFF';
                //_this.text.strokeThickness = 1;
                _this.boxGrp.getChildAt(i).addChild(_this.text);

                //target.visible = false;
                target.removeChildAt(0);
                target.loadTexture('NOLMbox5',0,false);
                //target.events.input.removeAll();

                _this.boxGrp.getChildAt(i).inputEnabled = true;
                _this.boxGrp.getChildAt(i).input.useHandCursor = true;

                _this.boxGrp.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder,_this);

                break;
            }
            else if(_this.checkOverlap(target,_this.graphics5))
            {
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.change--;

                for(var m=0;m<_this.objGrp.length;m++)
                {

                    if(_this.objGrp.getChildAt(m).getChildAt(0).text == target.getChildAt(0).text)
                    {
                        _this.objGrp.getChildAt(m).visible = true;
                        _this.objGrp.getChildAt(m).inputEnabled = true;
                        _this.objGrp.getChildAt(m).input.useHandCursor = true;
                        _this.objGrp.getChildAt(m).events.onInputDown.add(_this.onDragstart,_this);
                        break;
                    }

                }
                
                target.events.onInputDown.removeAll();
                target.removeChildAt(0);
                target.loadTexture('NOLMbox5',0,false);

                break;
            }
        }

        target.x = _this.vx;   
        target.y = _this.vy;
        
        if( _this.change<4)
        {
            _this.tick.inputEnabled=false;
            _this.tick.visible = false;
        }
    },
    
    clickTickMark:function(target)
     {  
         _this.clickSound = _this.add.audio('ClickSound');
         _this.clickSound.play();
         target.frame=1;
         var correct = false;
         
          if(Number(_this.boxGrp.getChildAt(0).getChildAt(0).text)==_this.dragAns1 &&Number(_this.boxGrp.getChildAt(1).getChildAt(0).text)==_this.dragAns2 &&Number(_this.boxGrp.getChildAt(2).getChildAt(0).text)==_this.dragAns3 &&Number(_this.boxGrp.getChildAt(3).getChildAt(0).text)==_this.dragAns4)
                   {
                       correct = true;
                       target.events.onInputDown.removeAll();
                       //break;
                   }
         
         if(correct)
        {
            for(var k=0;k<_this.objGrp.length;k++)
                {
                    _this.objGrp.getChildAt(k).inputEnabled=false;
                    _this.boxGrp.getChildAt(k).inputEnabled=false;
                }
            _this.time.events.add(1000,function(){
                    _this.b11.visible = true;
                    _this.b12.visible = true;
                      target.destroy();
                 _this.time.events.add(1000,function(){
                     _this.plus3.visible=true;
                     _this.equal.visible=true;
                     _this.b13.visible=true;
                  _this.time.events.add(1000,function(){
                      _this.addNumberPad1();
                        _this.voicevalue1 = false;
                        _this.voicevalue2 = false;
                        _this.voicevalue3 = false;
                        _this.voicevalue4 = true;
                        _this.getVoice();
                  },_this);
                 },_this);
                },_this);
        }
         else
         {
                     _this.wmusic = _this.add.audio('waudio');
                     _this.wmusic.play();
                      target.inputEnabled=false;
                    _this.time.events.add(1000,function(){
                     target.visible=false;
                        _this.change=0;
                for(var j=0;j<_this.objGrp.length;j++)
                {
                        _this.boxGrp.getChildAt(j).loadTexture('NOLMbox5',0,false);
                        _this.boxGrp.getChildAt(j).removeChildAt(0);
                        _this.objGrp.getChildAt(j).visible = true;
                        _this.objGrp.getChildAt(j).inputEnabled = true;
                        _this.objGrp.getChildAt(j).input.useHandCursor = true;
                        _this.objGrp.getChildAt(j).events.onInputDown.add(_this.onDragstart,_this);
                }
                    },_this);
         }
     },
    
    addNumberPad1:function(){
        
      _this.numBackground = _this.add.sprite(480,505,'num_NOLMbg');
      _this.numBackground.anchor.setTo(0.5);
      _this.numGroup = _this.add.group();
      _this.numGroup.add(_this.numBackground);
      _this.objGroup = _this.add.group();
      _this.x = 80;
        
        for(var i=1;i<11;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,505,'NOLMnumberpad');  
            _this.numbg.anchor.setTo(0.5);
           // _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.name = i;
            _this.numbg.frame = i;
            
            
            _this.numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Alte Haas Grotesk';
            _this.numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            _this.numTxt.fill = '#FFFFFF';
            _this.numTxt.visible=false;
            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild(_this.numTxt);

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(this.numClicked1,this);
            
            
            _this.x+=70;
        }
         
         _this.b13.inputEnabled = true;
         _this.b13.frame = 1;
         _this.b13.name = "txtbox4";
      
        _this.wrongbtn = _this.numGroup.create(_this.x+10,508,'NOLMeraser');
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.5,0.5);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
       
        _this.rightbtn = _this.numGroup.create(_this.x+90,513,'NOLMtick');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1.05,1.05);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.frame = 0;
        //_this.rightbtn.inputEnabled = true;
        //_this.rightbtn.input.useHandCursor = true;
        
        _this.enterTxt4 = _this.add.text(0,0, _this.selectedAns4);
        //titletext.scale.setTo(1.5);
        _this.enterTxt4.anchor.setTo(0.5);
        _this.enterTxt4.scale.setTo(1.1,1.1);
        _this.enterTxt4.align = 'center';
        _this.enterTxt4.font = 'myfont';
        _this.enterTxt4.fontSize = 35;
        _this.enterTxt4.fontWeight = 'normal';
        _this.enterTxt4.fill = '#65B4C3';

        _this.enterTxt4.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        _this.b13.addChild(_this.enterTxt4);
        //_this.numGroup.add(_this.b13);
        _this.objGroup.add(_this.b13);
        
        _this.numGroup.y = 50;
         var Maintween = this.add.tween(_this.numGroup);
        Maintween.to({ y:0}, 0, 'Linear', true, 0);
        
        _this.wrongbtn.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
        
        var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: window.gameid, 
                id_question: window.gameid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: target.name,
                access_token: window.acctkn 
            } 
            //absdsjsapi.saveInteractEvent(interactEvent);
            
                   _this.wrongbtn.frame = 1;
                   _this.enterTxt4.setText("");
                   _this.selectedAns4="";
                
            _this.time.events.add(1000, function(){
               _this.wrongbtn.frame = 0
            },_this);
            },_this);
        
         _this.rightbtn.events.onInputDown.add(function(target){
            _this.noofAttempts++;
            _this.rightbtn.inputEnabled = false;
            console.log("right btn");
           //_this.speakerbtn.inputEnabled=false;
           _this.click = _this.add.audio('ClickSound');
           _this.click.play();
            _this.rightbtn.frame = 1;
             //this.time.events.add(500, function(){rightbtn.frame = 0},this);
            console.log(_this.selectedAns4);
            if(_this.selectedAns4==_this.rightAns||_this.selectedAns4=="0"+_this.rightAns|| _this.selectedAns4=="00"+_this.rightAns||_this.selectedAns4=="000"+_this.rightAns)  
                { 
                    console.log("correct");
                    var Maintween = this.add.tween(_this.numGroup);
                     Maintween.to({ y:80}, 0, 'Linear', true, 0);
                    Maintween.onComplete.add(function(){
                       // anim = _this.b13.animations.add('glow');
                       // anim.play(5,true);
                        _this.correctAns();
                    },_this);
                }
             else
             {
                 _this.selectedAns4="";
                 _this.enterTxt4.setText("");
                
                //_this.stopvoice();
       
                _this.shake.shake(10, _this.objGroup);
                //_this.noofAttempts++;
               //_this.currentTime = window.timeSaveFunc();
               _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: target, 
                    access_token: window.acctkn 
               } 

              //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
              _this.wmusic = _this.add.audio('waudio');
              _this.wmusic.play();
              _this.b13.frame=0;
              //target.events.onInputDown.removeAll();
                 _this.time.events.add(1000,function(){
                 _this.rightbtn.frame = 0;
                     _this.b13.frame=1;
                 _this.rightbtn.inputEnabled = true;
                     },_this);
             }
         },_this);
        
    },
    
    numClicked1:function(target){
         
         var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: window.gameid, 
                id_question: window.gameid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: target.name,
                access_token: window.acctkn 
            } 
            //absdsjsapi.saveInteractEvent(interactEvent);  
       // target.frame = 1;
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        if(_this.selectedAns4.length<4)
          {
                 var number = Number(target.name);
                 if(number == 10)
                     number = 0;

                 if(_this.selectedAns4!=""||_this.selectedAns4!=null)
                     _this.selectedAns4 += number;
                 else
                     _this.selectedAns4 = number;

                _this.objGroup.getByName("txtbox4").getChildAt(0).setText(_this.selectedAns4); 
                 _this.rightbtn.inputEnabled = true;
                }
    },
    
     correctAns:function(target)
    {
       
        //_this.stopvoice();

        
        //_this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "Click", 
                    res_id: "level1.5_"+target, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
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


        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play();   
        //_this.speaker.inputEnabled=false;
        console.log(_this.count1)
        _this.count1++;
       
        _this.celebration = true;
        
        _this.click3 = _this.add.audio('ClickSound');
        _this.click3.play();
        _this.cmusic = _this.add.audio('celebr');
        _this.cmusic.play();
        
        //target.events.onInputDown.removeAll(); 
        _this.time.events.add(1000, _this.removeEverthing, _this);

        if(_this.timer)
                    {
                        _this.timer.stop();
                       _this.timer = null; 
                    }
                    _this.sceneCount++;
       telInitializer.tele_saveAssessment(1,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
    },

    
    checkOverlap:function(spriteA, spriteB) 
    {

        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
        
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
        _this.AnsTimerCount = 0;

        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        _this.timer = _this.time.create(false);
        
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
        
       // _this.speakerbtn.inputEnabled=true;
       // _this.speakerbtn.input.useHandCursor = true;
        console.log("get"+_this.no1);
        console.log("get------ "+_this.qArrays[_this.no1]);
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
                    _this.gotoSeventhQuestion();
                    break;
            case 8:
                    _this.questionid = 8;
                    _this.gotoEighthQuestion();
                    break;
        }
     },
    
   
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
    
            _this.starsGroup.create(_this.world.centerX-30, 12, 'NOLMstarAnim');
            
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
    
    
    removeEverthing:function()
    {
        celebration = false;
        //_this.timer1.stop();
        _this.no1++;
        //_this.counter=0;
        _this.stopVoice();
        
        if(_this.no1<6)
        {
            _this.objGrp.destroy();
            _this.objGrp1.destroy();
            _this.boxGrp.destroy();
            _this.objGroup.destroy();
            _this.graphicsGrp.destroy();
            _this.getQuestion();
            _this.selectedAns = "";
            _this.selectedAns1 = "";
            _this.selectedAns2 = "";
            _this.selectedAns3 = "";
            _this.selectedAns4 = "";
             added1=0;added2=0;added3=0;added4=0;
            _this.voicecount=0;
            _this.change=0;
        }
        else
        {
             _this.time.events.add(500, function(){
             console.log("gameEnd");
           //_this.stopAllVoice();
             _this.stopVoice();
             _this.state.start('longdivision5Score',true,false);
             },_this);
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
            case 8:if(window.languageSelected=="English")
                    {
                    if(_this.voicevalue1==true && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/English/nolmg1.4_1.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==true && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/English/nolmg1.4_2.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==true && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/English/nolmg1.4_3.mp3");
                    }
                 else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==true)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/English/nolmg1.4_4.mp3");
                    }
                break;
                    }
                else if(window.languageSelected=="Hindi")
                    {
                     if(_this.voicevalue1==true && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Hindi/nolmg1.4_1.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==true && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Hindi/nolmg1.4_2.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==true && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Hindi/nolmg1.4_3.mp3");
                    }
                 else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==true)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Hindi/nolmg1.4_4.mp3");
                    }
                break;
                    }
                 else if(window.languageSelected=="Kannada")
                    {
                     if(_this.voicevalue1==true && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Kannada/nolmg1.4_1.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==true && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Kannada/nolmg1.4_2.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==true && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Kannada/nolmg1.4_3.mp3");
                    }
                 else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==true)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Kannada/nolmg1.4_4.mp3");
                    }
                break;
                    }
                else if(window.languageSelected=="Gujarati")
                    {
                     if(_this.voicevalue1==true && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Gujarati/nolmg1.4_1.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==true && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Gujarati/nolmg1.4_2.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==true && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Gujarati/nolmg1.4_3.mp3");
                    }
                 else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==true)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Gujarati/nolmg1.4_4.mp3");
                    }
                break;
                    }
                else if(window.languageSelected=="Marathi")
                    {
                     if(_this.voicevalue1==true && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Marathi/nolmg1.4_1.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==true && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Marathi/nolmg1.4_2.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==true && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Marathi/nolmg1.4_3.mp3");
                    }
                 else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==true)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Marathi/nolmg1.4_4.mp3");
                    }
                break;
                    }
                 else if(window.languageSelected=="Odiya")
                    {
                     if(_this.voicevalue1==true && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Odiya/nolmg1.4_1.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==true && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Odiya/nolmg1.4_2.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==true && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Odiya/nolmg1.4_3.mp3");
                    }
                 else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==true)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Odiya/nolmg1.4_4.mp3");
                    }
                      _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);  
                break;
                    }
                else if(window.languageSelected=="Tamil")
                    {
                     if(_this.voicevalue1==true && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Tamil/nolmg1.4_1.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==true && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Tamil/nolmg1.4_2.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==true && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Tamil/nolmg1.4_3.mp3");
                    }
                 else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==true)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Tamil/nolmg1.4_4.mp3");
                    }
                      _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);  
                break;
                    }
                else if(window.languageSelected=="Telugu")
                    {
                     if(_this.voicevalue1==true && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Telugu/nolmg1.4_1.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==true && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Telugu/nolmg1.4_2.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==true && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Telugu/nolmg1.4_3.mp3");
                    }
                 else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==true)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Telugu/nolmg1.4_4.mp3");
                    }
                      _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);  
                   break;
                    }
                else if(window.languageSelected=="Urdu")
                    {
                     if(_this.voicevalue1==true && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Urdu/nolmg1.4_1.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==true && _this.voicevalue3==false && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Urdu/nolmg1.4_2.mp3");
                    }
                   else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==true && _this.voicevalue4==false)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Urdu/nolmg1.4_3.mp3");
                    }
                 else if(_this.voicevalue1==false && _this.voicevalue2==false && _this.voicevalue3==false && _this.voicevalue4==true)
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Urdu/nolmg1.4_4.mp3");
                    }
                      _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);  
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