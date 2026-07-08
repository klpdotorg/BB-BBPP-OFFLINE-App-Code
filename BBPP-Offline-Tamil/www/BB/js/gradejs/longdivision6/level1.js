Game.longdivision6=function(){};

Game.longdivision6.prototype={
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
        telInitializer.gameIdInit("NSN2",gradeSelected);

    },

    preload:function(game){
        if(!window.longdivision6){

            window.longdivision6 = true;

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
            this.load.image('NSN2skipDemoVideos',window.baseUrl+'assets/NSN2/gradeAssets/skipArrow.png');
        
        //common for all games.
        this.load.atlas('NSN2backNSN2btn',window.baseUrl+'assets/NSN2/commonAssets/backbtn.png' ,window.baseUrl+'json/NSN2/gradeJson/backbtn.json');
        this.load.atlas('NSN2CommonSpeakerNSN2btn',window.baseUrl+'assets/NSN2/commonAssets/speaker.png' ,window.baseUrl+'json/NSN2/gradeJson/speaker.json');
        this.load.atlas('NSN2starAnim',window.baseUrl+'assets/NSN2/commonAssets/starAnim.png',window.baseUrl+'json/NSN2/gradeJson/starAnim.json');
        this.load.atlas('NSN2replay',window.baseUrl+'assets/NSN2/commonAssets/reply.png' ,window.baseUrl+'json/NSN2/gradeJson/reply.json');
        this.load.atlas('NSN2btn',window.baseUrl+'assets/NSN2/commonAssets/btn.png',window.baseUrl+'json/NSN2/gradeJson/btn.json');
        
        this.load.image('NSN2background1',window.baseUrl+'assets/NSN2/commonAssets/bg1.png');
        this.load.image('NSN2tittleBar',window.baseUrl+'assets/NSN2/commonAssets/tittleBar.png');
        this.load.image('NSN2navBar',window.baseUrl+'assets/NSN2/commonAssets/navBar.png');
        this.load.image('NSN2timeNSN2bg',window.baseUrl+'assets/NSN2/commonAssets/timebg.png');
        
        //this.load.atlas('mic',window.baseUrl+'assets/NSN2/commonAssets/mic.png',window.baseUrl+'json/NSN2/gradeJson/mic.json');
        this.load.atlas('NSN2mesg',window.baseUrl+'assets/NSN2/commonAssets/callout btn.png',window.baseUrl+'json/NSN2/gradeJson/callout btn.json');
        this.load.image('NSN2score',window.baseUrl+'assets/NSN2/commonAssets/scoreBg.png');
        this.load.atlas('NSN2pointAnim',window.baseUrl+'assets/NSN2/commonAssets/whiteminusBg.png',window.baseUrl+'json/NSN2/gradeJson/whiteminusBg.json');
       
        //game assets.
        this.load.image('NSN2bg',window.baseUrl+'assets/NSN2/commonAssets/bg.png');
        this.load.image('NSN2mainbox',window.baseUrl+'assets/NSN2/gradeAssets/box.png');
        this.load.image('NSN2circle1',window.baseUrl+'assets/NSN2/gradeAssets/circle_1.png');
        this.load.image('NSN2circle2',window.baseUrl+'assets/NSN2/gradeAssets/circle_2.png');
        this.load.image('NSN2circle3',window.baseUrl+'assets/NSN2/gradeAssets/circle_3.png');
        this.load.image('NSN2circle4',window.baseUrl+'assets/NSN2/gradeAssets/circle_6.png');
        this.load.image('NSN2circle5',window.baseUrl+'assets/NSN2/gradeAssets/circle_10.png');
        this.load.image('NSN2circle6',window.baseUrl+'assets/NSN2/gradeAssets/circle_15.png');
        this.load.image('NSN2circle7',window.baseUrl+'assets/NSN2/gradeAssets/circle_21.png');
        this.load.image('NSN2circle8',window.baseUrl+'assets/NSN2/gradeAssets/circle_28.png');
        this.load.image('NSN2circle9',window.baseUrl+'assets/NSN2/gradeAssets/circle_36.png');
        this.load.image('NSN2square1',window.baseUrl+'assets/NSN2/gradeAssets/square_1.png');
        this.load.image('NSN2square2',window.baseUrl+'assets/NSN2/gradeAssets/square_2.png');
        this.load.image('NSN2square3',window.baseUrl+'assets/NSN2/gradeAssets/square_9.png');
        this.load.image('NSN2square4',window.baseUrl+'assets/NSN2/gradeAssets/square_16.png');
        this.load.image('NSN2square5',window.baseUrl+'assets/NSN2/gradeAssets/square_25.png');
        this.load.image('NSN2square6',window.baseUrl+'assets/NSN2/gradeAssets/square_36.png');
        this.load.image('NSN2square7',window.baseUrl+'assets/NSN2/gradeAssets/square_49.png');
        
        this.load.atlas('NSN2trianglebox',window.baseUrl+'assets/NSN2/gradeAssets/triangle box.png',window.baseUrl+'json/NSN2/gradeJson/triangle box.json');
        this.load.atlas('NSN2squarebox',window.baseUrl+'assets/NSN2/gradeAssets/square box.png',window.baseUrl+'json/NSN2/gradeJson/square box.json');
        this.load.atlas('NSN2tick',window.baseUrl+'assets/NSN2/gradeAssets/tickMark.png',window.baseUrl+'json/NSN2/gradeJson/tickMark.json');
        this.load.atlas('NSN2icon1',window.baseUrl+'assets/NSN2/gradeAssets/icon1.png',window.baseUrl+'json/NSN2/gradeJson/icon1.json');
        this.load.atlas('NSN2icon2',window.baseUrl+'assets/NSN2/gradeAssets/icon2.png',window.baseUrl+'json/NSN2/gradeJson/icon2.json');
        this.load.atlas('NSN2icon3',window.baseUrl+'assets/NSN2/gradeAssets/icon3.png',window.baseUrl+'json/NSN2/gradeJson/icon3.json');
        this.load.atlas('NSN2icon4',window.baseUrl+'assets/NSN2/gradeAssets/icon4.png',window.baseUrl+'json/NSN2/gradeJson/icon4.json');
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
        _this.added=0;
        _this.voice_sqr=0;
        _this.voice_tri=0;
        
        _this.qArrays = new Array(); 
        
        _this.qArrays = [1,2,3,4,5,6,7,8];    
        _this.qArrays = _this.shuffle(_this.qArrays);
        
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(-2,-2,_this.world.width,_this.world.height,'NSN2bg');
        
        _this.navBar = _this.add.sprite(0,0,'NSN2navBar');
        _this.navBar.scale.setTo(1,1.1);
        
        _this.backbtn = _this.add.sprite(10,7,'NSN2backNSN2btn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function(){
                 _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade4levelSelectionScreen',true,false); 
        },_this);

        _this.speakerbtn = _this.add.button(575,7,'NSN2CommonSpeakerNSN2btn',function(){},this,1,0,2);
        _this.speakerbtn.events.onInputDown.add(function()
        { 
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);
        
        _this.timebg = _this.add.sprite(305,9,'NSN2timeNSN2bg');
        _this.timebg.name="common_timebg";
        //_this.timebg.scale.setTo(1,1);

        _this.timeDisplay = _this.add.text(331,25,_this.minutes + ' : '+ this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'myfont';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';
        
        /*_this.mesg = _this.add.sprite(65,7,'NSN2mesg');
        _this.mesg.scale.setTo(1,1);
        
        _this.score=this.add.sprite(800,7,'NSN2score');
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
         _this.opt=2;
         _this.boxGrp = _this.add.group();
         _this.objGrp2 = _this.add.group();
         _this.objGrp1 = _this.add.group();
         
         if(_this.voice_sqr==0)
             {
                 _this.getVoice();
                 _this.voice_sqr++;
             }
         
         _this.mainbox = _this.add.sprite(190,282,'NSN2mainbox');
         _this.mainbox.anchor.setTo(0.5);
         
         _this.box = _this.add.sprite(560,282,'NSN2squarebox');
         _this.box.anchor.setTo(0.5);
         
         _this.rightmark = _this.add.sprite(860,150,'NSN2icon1');
         _this.rightmark.anchor.setTo(0.5);
         
         _this.wrongmark = _this.add.sprite(860,260,'NSN2icon2');
         _this.wrongmark.anchor.setTo(0.5);
         
         _this.tick = _this.add.sprite(860,420,'NSN2tick');
         _this.tick.anchor.setTo(0.5);
         
         _this.text1 = _this.add.text(287,132,"50");
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#000000";
         _this.fontWeight = 'normal';
         _this.text1.fontSize = 30;
         
         _this.square1 = _this.add.sprite(98,130,'NSN2square1');
         _this.square1.anchor.setTo(0.5);
         _this.square1.inputEnabled = true;
         _this.square1.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square2 = _this.add.sprite(133,130,'NSN2square1');
         _this.square2.anchor.setTo(0.5);
         _this.square2.inputEnabled = true;
         _this.square2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square3 = _this.add.sprite(168,130,'NSN2square1');
         _this.square3.anchor.setTo(0.5);
         _this.square3.inputEnabled = true;
         _this.square3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square4 = _this.add.sprite(203,130,'NSN2square1');
         _this.square4.anchor.setTo(0.5);
         _this.square4.inputEnabled = true;
         _this.square4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square5 = _this.add.sprite(238,130,'NSN2square1');
         _this.square5.anchor.setTo(0.5);
         _this.square5.inputEnabled = true;
         _this.square5.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square6 = _this.add.sprite(98,164,'NSN2square1');
         _this.square6.anchor.setTo(0.5);
         _this.square6.inputEnabled = true;
         _this.square6.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square7 = _this.add.sprite(133,164,'NSN2square1');
         _this.square7.anchor.setTo(0.5);
         _this.square7.inputEnabled = true;
         _this.square7.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square8 = _this.add.sprite(168,164,'NSN2square1');
         _this.square8.anchor.setTo(0.5);
         _this.square8.inputEnabled = true;
         _this.square8.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square9 = _this.add.sprite(203,164,'NSN2square1');
         _this.square9.anchor.setTo(0.5);
         _this.square9.inputEnabled = true;
         _this.square9.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square10 = _this.add.sprite(238,164,'NSN2square1');
         _this.square10.anchor.setTo(0.5);
         _this.square10.inputEnabled = true;
         _this.square10.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square11 = _this.add.sprite(98,199,'NSN2square1');
         _this.square11.anchor.setTo(0.5);
         _this.square11.inputEnabled = true;
         _this.square11.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square12 = _this.add.sprite(133,199,'NSN2square1');
         _this.square12.anchor.setTo(0.5);
         _this.square12.inputEnabled = true;
         _this.square12.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square13 = _this.add.sprite(168,199,'NSN2square1');
         _this.square13.anchor.setTo(0.5);
         _this.square13.inputEnabled = true;
         _this.square13.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square14 = _this.add.sprite(203,199,'NSN2square1');
         _this.square14.anchor.setTo(0.5);
         _this.square14.inputEnabled = true;
         _this.square14.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square15 = _this.add.sprite(238,199,'NSN2square1');
         _this.square15.anchor.setTo(0.5);
         _this.square15.inputEnabled = true;
         _this.square15.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square16 = _this.add.sprite(98,233,'NSN2square1');
         _this.square16.anchor.setTo(0.5);
         _this.square16.inputEnabled = true;
         _this.square16.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square17 = _this.add.sprite(133,233,'NSN2square1');
         _this.square17.anchor.setTo(0.5);
         _this.square17.inputEnabled = true;
         _this.square17.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square18 = _this.add.sprite(168,233,'NSN2square1');
         _this.square18.anchor.setTo(0.5);
         _this.square18.inputEnabled = true;
         _this.square18.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square19 = _this.add.sprite(203,233,'NSN2square1');
         _this.square19.anchor.setTo(0.5);
         _this.square19.inputEnabled = true;
         _this.square19.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square20 = _this.add.sprite(238,233,'NSN2square1');
         _this.square20.anchor.setTo(0.5);
         _this.square20.inputEnabled = true;
         _this.square20.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square21 = _this.add.sprite(98,268,'NSN2square1');
         _this.square21.anchor.setTo(0.5);
         _this.square21.inputEnabled = true;
         _this.square21.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square22 = _this.add.sprite(133,268,'NSN2square1');
         _this.square22.anchor.setTo(0.5);
         _this.square22.inputEnabled = true;
         _this.square22.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square23 = _this.add.sprite(168,268,'NSN2square1');
         _this.square23.anchor.setTo(0.5);
         _this.square23.inputEnabled = true;
         _this.square23.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square24 = _this.add.sprite(203,268,'NSN2square1');
         _this.square24.anchor.setTo(0.5);
         _this.square24.inputEnabled = true;
         _this.square24.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square25 = _this.add.sprite(238,268,'NSN2square1');
         _this.square25.anchor.setTo(0.5);
         _this.square25.inputEnabled = true;
         _this.square25.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square26 = _this.add.sprite(98,303,'NSN2square1');
         _this.square26.anchor.setTo(0.5);
         _this.square26.inputEnabled = true;
         _this.square26.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square27 = _this.add.sprite(133,303,'NSN2square1');
         _this.square27.anchor.setTo(0.5);
         _this.square27.inputEnabled = true;
         _this.square27.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square28 = _this.add.sprite(168,303,'NSN2square1');
         _this.square28.anchor.setTo(0.5);
         _this.square28.inputEnabled = true;
         _this.square28.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square29 = _this.add.sprite(203,303,'NSN2square1');
         _this.square29.anchor.setTo(0.5);
         _this.square29.inputEnabled = true;
         _this.square29.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square30 = _this.add.sprite(238,303,'NSN2square1');
         _this.square30.anchor.setTo(0.5);
         _this.square30.inputEnabled = true;
         _this.square30.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square31 = _this.add.sprite(98,338,'NSN2square1');
         _this.square31.anchor.setTo(0.5);
         _this.square31.inputEnabled = true;
         _this.square31.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square32 = _this.add.sprite(133,338,'NSN2square1');
         _this.square32.anchor.setTo(0.5);
         _this.square32.inputEnabled = true;
         _this.square32.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square33 = _this.add.sprite(168,338,'NSN2square1');
         _this.square33.anchor.setTo(0.5);
         _this.square33.inputEnabled = true;
         _this.square33.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square34 = _this.add.sprite(203,338,'NSN2square1');
         _this.square34.anchor.setTo(0.5);
         _this.square34.inputEnabled = true;
         _this.square34.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square35 = _this.add.sprite(238,338,'NSN2square1');
         _this.square35.anchor.setTo(0.5);
         _this.square35.inputEnabled = true;
         _this.square35.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square36 = _this.add.sprite(98,372,'NSN2square1');
         _this.square36.anchor.setTo(0.5);
         _this.square36.inputEnabled = true;
         _this.square36.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square37 = _this.add.sprite(133,372,'NSN2square1');
         _this.square37.anchor.setTo(0.5);
         _this.square37.inputEnabled = true;
         _this.square37.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square38 = _this.add.sprite(168,372,'NSN2square1');
         _this.square38.anchor.setTo(0.5);
         _this.square38.inputEnabled = true;
         _this.square38.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square39 = _this.add.sprite(203,372,'NSN2square1');
         _this.square39.anchor.setTo(0.5);
         _this.square39.inputEnabled = true;
         _this.square39.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square40 = _this.add.sprite(238,372,'NSN2square1');
         _this.square40.anchor.setTo(0.5);
         _this.square40.inputEnabled = true;
         _this.square40.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square41 = _this.add.sprite(98,406,'NSN2square1');
         _this.square41.anchor.setTo(0.5);
         _this.square41.inputEnabled = true;
         _this.square41.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square42 = _this.add.sprite(133,406,'NSN2square1');
         _this.square42.anchor.setTo(0.5);
         _this.square42.inputEnabled = true;
         _this.square42.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square43 = _this.add.sprite(168,406,'NSN2square1');
         _this.square43.anchor.setTo(0.5);
         _this.square43.inputEnabled = true;
         _this.square43.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square44 = _this.add.sprite(203,406,'NSN2square1');
         _this.square44.anchor.setTo(0.5);
         _this.square44.inputEnabled = true;
         _this.square44.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square45 = _this.add.sprite(238,406,'NSN2square1');
         _this.square45.anchor.setTo(0.5);
         _this.square45.inputEnabled = true;
         _this.square45.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square46 = _this.add.sprite(98,440,'NSN2square1');
         _this.square46.anchor.setTo(0.5);
         _this.square46.inputEnabled = true;
         _this.square46.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square47 = _this.add.sprite(133,440,'NSN2square1');
         _this.square47.anchor.setTo(0.5);
         _this.square47.inputEnabled = true;
         _this.square47.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square48 = _this.add.sprite(168,440,'NSN2square1');
         _this.square48.anchor.setTo(0.5);
         _this.square48.inputEnabled = true;
         _this.square48.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square49 = _this.add.sprite(203,440,'NSN2square1');
         _this.square49.anchor.setTo(0.5);
         _this.square49.inputEnabled = true;
         _this.square49.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square50 = _this.add.sprite(238,440,'NSN2square1');
         _this.square50.anchor.setTo(0.5);
         _this.square50.inputEnabled = true;
         _this.square50.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.child11 = _this.add.graphics(-10, -10);
         _this.child11.lineStyle(2, 0x0000FF, 1);
         _this.child11.drawRect(5, 5, 10, 10);
         _this.child11.visible = false;
         
         _this.sqr11 = _this.add.sprite(410,432,'NSN2square7');
         _this.sqr11.anchor.setTo(0.5);
         _this.sqr11.addChild(_this.child11);
         _this.sqr11.visible=false;
         
         _this.child12 = _this.add.graphics(-10, -10);
         _this.child12.lineStyle(2, 0x0000FF, 1);
         _this.child12.drawRect(5, 5, 10, 10);
         _this.child12.visible = false;
         
         _this.sqr12 = _this.add.sprite(460,432,'NSN2square7');
         _this.sqr12.anchor.setTo(0.5);
         _this.sqr12.addChild(_this.child12);
         _this.sqr12.visible=false;
         
         _this.child13 = _this.add.graphics(-10, -10);
         _this.child13.lineStyle(2, 0x0000FF, 1);
         _this.child13.drawRect(5, 5, 10, 10);
         _this.child13.visible = false;
         
         _this.sqr13 = _this.add.sprite(510,432,'NSN2square7');
         _this.sqr13.anchor.setTo(0.5);
         _this.sqr13.addChild(_this.child13);
         _this.sqr13.visible=false;
         
         _this.child14 = _this.add.graphics(-10, -10);
         _this.child14.lineStyle(2, 0x0000FF, 1);
         _this.child14.drawRect(5, 5, 10, 10);
         _this.child14.visible = false;
         
         _this.sqr14 = _this.add.sprite(560,432,'NSN2square7');
         _this.sqr14.anchor.setTo(0.5);
         _this.sqr14.addChild(_this.child14);
         _this.sqr14.visible=false;
         
         _this.child15 = _this.add.graphics(-10, -10);
         _this.child15.lineStyle(2, 0x0000FF, 1);
         _this.child15.drawRect(5, 5, 10, 10);
         _this.child15.visible = false;
         
         _this.sqr15 = _this.add.sprite(610,432,'NSN2square7');
         _this.sqr15.anchor.setTo(0.5);
         _this.sqr15.addChild(_this.child15);
         _this.sqr15.visible=false;
         
         _this.child16 = _this.add.graphics(-10, -10);
         _this.child16.lineStyle(2, 0x0000FF, 1);
         _this.child16.drawRect(5, 5, 10, 10);
         _this.child16.visible = false;
         
         _this.sqr16 = _this.add.sprite(660,432,'NSN2square7');
         _this.sqr16.anchor.setTo(0.5);
         _this.sqr16.addChild(_this.child16);
         _this.sqr16.visible=false;
         
         _this.child17 = _this.add.graphics(-10, -10);
         _this.child17.lineStyle(2, 0x0000FF, 1);
         _this.child17.drawRect(5, 5, 10, 10);
         _this.child17.visible = false;
         
         _this.sqr17 = _this.add.sprite(710,432,'NSN2square7');
         _this.sqr17.anchor.setTo(0.5);
         _this.sqr17.addChild(_this.child17);
         _this.sqr17.visible=false;
         
         _this.child21 = _this.add.graphics(-10, -10);
         _this.child21.lineStyle(2, 0x0000FF, 1);
         _this.child21.drawRect(5, 5, 10, 10);
         _this.child21.visible = false;
         
         _this.sqr21 = _this.add.sprite(410,382,'NSN2square7');
         _this.sqr21.anchor.setTo(0.5);
         _this.sqr21.addChild(_this.child21);
         _this.sqr21.visible=false;
         
         _this.child22 = _this.add.graphics(-10, -10);
         _this.child22.lineStyle(2, 0x0000FF, 1);
         _this.child22.drawRect(5, 5, 10, 10);
         _this.child22.visible = false;
    
         _this.sqr22 = _this.add.sprite(460,382,'NSN2square7');
         _this.sqr22.anchor.setTo(0.5);
         _this.sqr22.addChild(_this.child22);
         _this.sqr22.visible=false;
         
         _this.child23 = _this.add.graphics(-10, -10);
         _this.child23.lineStyle(2, 0x0000FF, 1);
         _this.child23.drawRect(5, 5, 10, 10);
         _this.child23.visible = false;
         
         _this.sqr23 = _this.add.sprite(510,382,'NSN2square7');
         _this.sqr23.anchor.setTo(0.5);
         _this.sqr23.addChild(_this.child23);
         _this.sqr23.visible=false;
         
         _this.child24 = _this.add.graphics(-10, -10);
         _this.child24.lineStyle(2, 0x0000FF, 1);
         _this.child24.drawRect(5, 5, 10, 10);
         _this.child24.visible = false;

         _this.sqr24 = _this.add.sprite(560,382,'NSN2square7');
         _this.sqr24.anchor.setTo(0.5);
         _this.sqr24.addChild(_this.child24);
         _this.sqr24.visible=false;
         
         _this.child25 = _this.add.graphics(-10, -10);
         _this.child25.lineStyle(2, 0x0000FF, 1);
         _this.child25.drawRect(5, 5, 10, 10);
         _this.child25.visible = false;
         
         _this.sqr25 = _this.add.sprite(610,382,'NSN2square7');
         _this.sqr25.anchor.setTo(0.5);
         _this.sqr25.addChild(_this.child25);
         _this.sqr25.visible=false;
         
         _this.child26 = _this.add.graphics(-10, -10);
         _this.child26.lineStyle(2, 0x0000FF, 1);
         _this.child26.drawRect(5, 5, 10, 10);
         _this.child26.visible = false;

         _this.sqr26 = _this.add.sprite(660,382,'NSN2square7');
         _this.sqr26.anchor.setTo(0.5);
         _this.sqr26.addChild(_this.child26);
         _this.sqr26.visible=false;
         
         _this.child27 = _this.add.graphics(-10, -10);
         _this.child27.lineStyle(2, 0x0000FF, 1);
         _this.child27.drawRect(5, 5, 10, 10);
         _this.child27.visible = false;

         _this.sqr27 = _this.add.sprite(710,382,'NSN2square7');
         _this.sqr27.anchor.setTo(0.5);
         _this.sqr27.addChild(_this.child27);
         _this.sqr27.visible=false;
         
         _this.child31 = _this.add.graphics(-10, -10);
         _this.child31.lineStyle(2, 0x0000FF, 1);
         _this.child31.drawRect(5, 5, 10, 10);
         _this.child31.visible = false;

         _this.sqr31 = _this.add.sprite(410,332,'NSN2square7');
         _this.sqr31.anchor.setTo(0.5);
         _this.sqr31.addChild(_this.child31);
         _this.sqr31.visible=false;
         
         _this.child32 = _this.add.graphics(-10, -10);
         _this.child32.lineStyle(2, 0x0000FF, 1);
         _this.child32.drawRect(5, 5, 10, 10);
         _this.child32.visible = false;

         _this.sqr32 = _this.add.sprite(460,332,'NSN2square7');
         _this.sqr32.anchor.setTo(0.5);
         _this.sqr32.addChild(_this.child32);
         _this.sqr32.visible=false;
         
         _this.child33 = _this.add.graphics(-10, -10);
         _this.child33.lineStyle(2, 0x0000FF, 1);
         _this.child33.drawRect(5, 5, 10, 10);
         _this.child33.visible = false;

         _this.sqr33 = _this.add.sprite(510,332,'NSN2square7');
         _this.sqr33.anchor.setTo(0.5);
         _this.sqr33.addChild(_this.child33);
         _this.sqr33.visible=false;
         
         _this.child34 = _this.add.graphics(-10, -10);
         _this.child34.lineStyle(2, 0x0000FF, 1);
         _this.child34.drawRect(5, 5, 10, 10);
         _this.child34.visible = false;

         _this.sqr34 = _this.add.sprite(560,332,'NSN2square7');
         _this.sqr34.anchor.setTo(0.5);
         _this.sqr34.addChild(_this.child34);
         _this.sqr34.visible=false;
         
         _this.child35 = _this.add.graphics(-10, -10);
         _this.child35.lineStyle(2, 0x0000FF, 1);
         _this.child35.drawRect(5, 5, 10, 10);
         _this.child35.visible = false;

         _this.sqr35 = _this.add.sprite(610,332,'NSN2square7');
         _this.sqr35.anchor.setTo(0.5);
         _this.sqr35.addChild(_this.child35);
         _this.sqr35.visible=false;
         
         _this.child36 = _this.add.graphics(-10, -10);
         _this.child36.lineStyle(2, 0x0000FF, 1);
         _this.child36.drawRect(5, 5, 10, 10);
         _this.child36.visible = false;

         _this.sqr36 = _this.add.sprite(660,332,'NSN2square7');
         _this.sqr36.anchor.setTo(0.5);
         _this.sqr36.addChild(_this.child36);
         _this.sqr36.visible=false;
         
         _this.child37 = _this.add.graphics(-10, -10);
         _this.child37.lineStyle(2, 0x0000FF, 1);
         _this.child37.drawRect(5, 5, 10, 10);
         _this.child37.visible = false;

         _this.sqr37 = _this.add.sprite(710,332,'NSN2square7');
         _this.sqr37.anchor.setTo(0.5);
         _this.sqr37.addChild(_this.child37);
         _this.sqr37.visible=false;
         
         _this.child41 = _this.add.graphics(-10, -10);
         _this.child41.lineStyle(2, 0x0000FF, 1);
         _this.child41.drawRect(5, 5, 10, 10);
         _this.child41.visible = false;

         _this.sqr41 = _this.add.sprite(410,282,'NSN2square7');
         _this.sqr41.anchor.setTo(0.5);
         _this.sqr41.addChild(_this.child41);
         _this.sqr41.visible=false;
         
         _this.child42 = _this.add.graphics(-10, -10);
         _this.child42.lineStyle(2, 0x0000FF, 1);
         _this.child42.drawRect(5, 5, 10, 10);
         _this.child42.visible = false;

         _this.sqr42 = _this.add.sprite(460,282,'NSN2square7');
         _this.sqr42.anchor.setTo(0.5);
         _this.sqr42.addChild(_this.child42);
         _this.sqr42.visible=false;
         
         _this.child43 = _this.add.graphics(-10, -10);
         _this.child43.lineStyle(2, 0x0000FF, 1);
         _this.child43.drawRect(5, 5, 10, 10);
         _this.child43.visible = false;

         _this.sqr43 = _this.add.sprite(510,282,'NSN2square7');
         _this.sqr43.anchor.setTo(0.5);
         _this.sqr43.addChild(_this.child43);
         _this.sqr43.visible=false;
         
         _this.child44 = _this.add.graphics(-10, -10);
         _this.child44.lineStyle(2, 0x0000FF, 1);
         _this.child44.drawRect(5, 5, 10, 10);
         _this.child44.visible = false;

         _this.sqr44 = _this.add.sprite(560,282,'NSN2square7');
         _this.sqr44.anchor.setTo(0.5);
         _this.sqr44.addChild(_this.child44);
         _this.sqr44.visible=false;
         
         _this.child45 = _this.add.graphics(-10, -10);
         _this.child45.lineStyle(2, 0x0000FF, 1);
         _this.child45.drawRect(5, 5, 10, 10);
         _this.child45.visible = false;

         _this.sqr45 = _this.add.sprite(610,282,'NSN2square7');
         _this.sqr45.anchor.setTo(0.5);
         _this.sqr45.addChild(_this.child45);
         _this.sqr45.visible=false;
         
         _this.child46 = _this.add.graphics(-10, -10);
         _this.child46.lineStyle(2, 0x0000FF, 1);
         _this.child46.drawRect(5, 5, 10, 10);
         _this.child46.visible = false;

         _this.sqr46 = _this.add.sprite(660,282,'NSN2square7');
         _this.sqr46.anchor.setTo(0.5);
         _this.sqr46.addChild(_this.child46);
         _this.sqr46.visible=false;
         
         _this.child47 = _this.add.graphics(-10, -10);
         _this.child47.lineStyle(2, 0x0000FF, 1);
         _this.child47.drawRect(5, 5, 10, 10);
         _this.child47.visible = false;

         _this.sqr47 = _this.add.sprite(710,282,'NSN2square7');
         _this.sqr47.anchor.setTo(0.5);
         _this.sqr47.addChild(_this.child47);
         _this.sqr47.visible=false;
         
         _this.child51 = _this.add.graphics(-10, -10);
         _this.child51.lineStyle(2, 0x0000FF, 1);
         _this.child51.drawRect(5, 5, 10, 10);
         _this.child51.visible = false;

         _this.sqr51 = _this.add.sprite(410,233,'NSN2square7');
         _this.sqr51.anchor.setTo(0.5);
         _this.sqr51.addChild(_this.child51);
         _this.sqr51.visible=false;
         
         _this.child52 = _this.add.graphics(-10, -10);
         _this.child52.lineStyle(2, 0x0000FF, 1);
         _this.child52.drawRect(5, 5, 10, 10);
         _this.child52.visible = false;
         
         _this.sqr52 = _this.add.sprite(460,233,'NSN2square7');
         _this.sqr52.anchor.setTo(0.5);
         _this.sqr52.addChild(_this.child52);
         _this.sqr52.visible=false;
         
         _this.child53 = _this.add.graphics(-10, -10);
         _this.child53.lineStyle(2, 0x0000FF, 1);
         _this.child53.drawRect(5, 5, 10, 10);
         _this.child53.visible = false;
         
         _this.sqr53 = _this.add.sprite(510,233,'NSN2square7');
         _this.sqr53.anchor.setTo(0.5);
         _this.sqr53.addChild(_this.child53);
         _this.sqr53.visible=false;
         
         _this.child54 = _this.add.graphics(-10, -10);
         _this.child54.lineStyle(2, 0x0000FF, 1);
         _this.child54.drawRect(5, 5, 10, 10);
         _this.child54.visible = false;
         
         _this.sqr54 = _this.add.sprite(560,233,'NSN2square7');
         _this.sqr54.anchor.setTo(0.5);
         _this.sqr54.addChild(_this.child54);
         _this.sqr54.visible=false;
         
         _this.child55 = _this.add.graphics(-10, -10);
         _this.child55.lineStyle(2, 0x0000FF, 1);
         _this.child55.drawRect(5, 5, 10, 10);
         _this.child55.visible = false;
         
         _this.sqr55 = _this.add.sprite(610,233,'NSN2square7');
         _this.sqr55.anchor.setTo(0.5);
         _this.sqr55.addChild(_this.child55);
         _this.sqr55.visible=false;
         
         _this.child56 = _this.add.graphics(-10, -10);
         _this.child56.lineStyle(2, 0x0000FF, 1);
         _this.child56.drawRect(5, 5, 10, 10);
         _this.child56.visible = false;
         
         _this.sqr56 = _this.add.sprite(660,233,'NSN2square7');
         _this.sqr56.anchor.setTo(0.5);
         _this.sqr56.addChild(_this.child56);
         _this.sqr56.visible=false;
         
         _this.child57 = _this.add.graphics(-10, -10);
         _this.child57.lineStyle(2, 0x0000FF, 1);
         _this.child57.drawRect(5, 5, 10, 10);
         _this.child57.visible = false;
         
         _this.sqr57 = _this.add.sprite(710,233,'NSN2square7');
         _this.sqr57.anchor.setTo(0.5);
         _this.sqr57.addChild(_this.child57);
         _this.sqr57.visible=false;
         
         _this.child61 = _this.add.graphics(-10, -10);
         _this.child61.lineStyle(2, 0x0000FF, 1);
         _this.child61.drawRect(5, 5, 10, 10);
         _this.child61.visible = false;
         
         _this.sqr61 = _this.add.sprite(410,183,'NSN2square7');
         _this.sqr61.anchor.setTo(0.5);
         _this.sqr61.addChild(_this.child61);
         _this.sqr61.visible=false;
         
         _this.child62 = _this.add.graphics(-10, -10);
         _this.child62.lineStyle(2, 0x0000FF, 1);
         _this.child62.drawRect(5, 5, 10, 10);
         _this.child62.visible = false;
         
         _this.sqr62 = _this.add.sprite(460,183,'NSN2square7');
         _this.sqr62.anchor.setTo(0.5);
         _this.sqr62.addChild(_this.child62);
         _this.sqr62.visible=false;
         
         _this.child63 = _this.add.graphics(-10, -10);
         _this.child63.lineStyle(2, 0x0000FF, 1);
         _this.child63.drawRect(5, 5, 10, 10);
         _this.child63.visible = false;
         
         _this.sqr63 = _this.add.sprite(510,183,'NSN2square7');
         _this.sqr63.anchor.setTo(0.5);
         _this.sqr63.addChild(_this.child63);
         _this.sqr63.visible=false;
         
         _this.child64 = _this.add.graphics(-10, -10);
         _this.child64.lineStyle(2, 0x0000FF, 1);
         _this.child64.drawRect(5, 5, 10, 10);
         _this.child64.visible = false;
         
         _this.sqr64 = _this.add.sprite(560,183,'NSN2square7');
         _this.sqr64.anchor.setTo(0.5);
         _this.sqr64.addChild(_this.child64);
         _this.sqr64.visible=false;
         
         _this.child65 = _this.add.graphics(-10, -10);
         _this.child65.lineStyle(2, 0x0000FF, 1);
         _this.child65.drawRect(5, 5, 10, 10);
         _this.child65.visible = false;
         
         _this.sqr65 = _this.add.sprite(610,183,'NSN2square7');
         _this.sqr65.anchor.setTo(0.5);
         _this.sqr65.addChild(_this.child65);
         _this.sqr65.visible=false;
         
         _this.child66 = _this.add.graphics(-10, -10);
         _this.child66.lineStyle(2, 0x0000FF, 1);
         _this.child66.drawRect(5, 5, 10, 10);
         _this.child66.visible = false;
         
         _this.sqr66 = _this.add.sprite(660,183,'NSN2square7');
         _this.sqr66.anchor.setTo(0.5);
         _this.sqr66.addChild(_this.child66);
         _this.sqr66.visible=false;
         
         _this.child67 = _this.add.graphics(-10, -10);
         _this.child67.lineStyle(2, 0x0000FF, 1);
         _this.child67.drawRect(5, 5, 10, 10);
         _this.child67.visible = false;
         
         _this.sqr67 = _this.add.sprite(710,183,'NSN2square7');
         _this.sqr67.anchor.setTo(0.5);
         _this.sqr67.addChild(_this.child67);
         _this.sqr67.visible=false;
         
         _this.child71 = _this.add.graphics(-10, -10);
         _this.child71.lineStyle(2, 0x0000FF, 1);
         _this.child71.drawRect(5, 5, 10, 10);
         _this.child71.visible = false;
         
         _this.sqr71 = _this.add.sprite(410,133,'NSN2square7');
         _this.sqr71.anchor.setTo(0.5);
         _this.sqr71.addChild(_this.child71);
         _this.sqr71.visible=false;
         
         _this.child72 = _this.add.graphics(-10, -10);
         _this.child72.lineStyle(2, 0x0000FF, 1);
         _this.child72.drawRect(5, 5, 10, 10);
         _this.child72.visible = false;
         
         _this.sqr72 = _this.add.sprite(460,133,'NSN2square7');
         _this.sqr72.anchor.setTo(0.5);
         _this.sqr72.addChild(_this.child72);
         _this.sqr72.visible=false;
         
         _this.child73 = _this.add.graphics(-10, -10);
         _this.child73.lineStyle(2, 0x0000FF, 1);
         _this.child73.drawRect(5, 5, 10, 10);
         _this.child73.visible = false;
         
         _this.sqr73 = _this.add.sprite(510,133,'NSN2square7');
         _this.sqr73.anchor.setTo(0.5);
         _this.sqr73.addChild(_this.child73);
         _this.sqr73.visible=false;
         
         _this.child74 = _this.add.graphics(-10, -10);
         _this.child74.lineStyle(2, 0x0000FF, 1);
         _this.child74.drawRect(5, 5, 10, 10);
         _this.child74.visible = false;
         
         _this.sqr74 = _this.add.sprite(560,133,'NSN2square7');
         _this.sqr74.anchor.setTo(0.5);
         _this.sqr74.addChild(_this.child74);
         _this.sqr74.visible=false;
         
         _this.child75 = _this.add.graphics(-10, -10);
         _this.child75.lineStyle(2, 0x0000FF, 1);
         _this.child75.drawRect(5, 5, 10, 10);
         _this.child75.visible = false;
         
         _this.sqr75 = _this.add.sprite(610,133,'NSN2square7');
         _this.sqr75.anchor.setTo(0.5);
         _this.sqr75.addChild(_this.child75);
         _this.sqr75.visible=false;
         
         _this.child76 = _this.add.graphics(-10, -10);
         _this.child76.lineStyle(2, 0x0000FF, 1);
         _this.child76.drawRect(5, 5, 10, 10);
         _this.child76.visible = false;
         
         _this.sqr76 = _this.add.sprite(660,133,'NSN2square7');
         _this.sqr76.anchor.setTo(0.5);
         _this.sqr76.addChild(_this.child76);
         _this.sqr76.visible=false;
         
         _this.child77 = _this.add.graphics(-10, -10);
         _this.child77.lineStyle(2, 0x0000FF, 1);
         _this.child77.drawRect(5, 5, 10, 10);
         _this.child77.visible = false;
         
         _this.sqr77 = _this.add.sprite(710,133,'NSN2square7');
         _this.sqr77.anchor.setTo(0.5);
         _this.sqr77.addChild(_this.child77);
         _this.sqr77.visible=false;
         
         _this.num=49;
         
         _this.boxGrp.add(_this.mainbox);
         _this.boxGrp.add(_this.box);
         _this.boxGrp.add(_this.text1);
         _this.boxGrp.add(_this.rightmark);
         _this.boxGrp.add(_this.wrongmark);
         _this.boxGrp.add(_this.tick);
         
         _this.objGrp2.add(_this.sqr11); _this.objGrp2.add(_this.sqr12);
         _this.objGrp2.add(_this.sqr13); _this.objGrp2.add(_this.sqr14);
         _this.objGrp2.add(_this.sqr15); _this.objGrp2.add(_this.sqr16);
         _this.objGrp2.add(_this.sqr17); _this.objGrp2.add(_this.sqr21); 
         _this.objGrp2.add(_this.sqr22); _this.objGrp2.add(_this.sqr23); 
         _this.objGrp2.add(_this.sqr24); _this.objGrp2.add(_this.sqr25);
         _this.objGrp2.add(_this.sqr26); _this.objGrp2.add(_this.sqr27);
         _this.objGrp2.add(_this.sqr31); _this.objGrp2.add(_this.sqr32);
         _this.objGrp2.add(_this.sqr33); _this.objGrp2.add(_this.sqr34);
         _this.objGrp2.add(_this.sqr35); _this.objGrp2.add(_this.sqr36);
         _this.objGrp2.add(_this.sqr37); _this.objGrp2.add(_this.sqr41); 
         _this.objGrp2.add(_this.sqr42); _this.objGrp2.add(_this.sqr43); 
         _this.objGrp2.add(_this.sqr44); _this.objGrp2.add(_this.sqr45);
         _this.objGrp2.add(_this.sqr46); _this.objGrp2.add(_this.sqr47);
         _this.objGrp2.add(_this.sqr51); _this.objGrp2.add(_this.sqr52);
         _this.objGrp2.add(_this.sqr53); _this.objGrp2.add(_this.sqr54);
         _this.objGrp2.add(_this.sqr55); _this.objGrp2.add(_this.sqr56);
         _this.objGrp2.add(_this.sqr57); _this.objGrp2.add(_this.sqr61); 
         _this.objGrp2.add(_this.sqr62); _this.objGrp2.add(_this.sqr63); 
         _this.objGrp2.add(_this.sqr64); _this.objGrp2.add(_this.sqr65);
         _this.objGrp2.add(_this.sqr66); _this.objGrp2.add(_this.sqr67);
         _this.objGrp2.add(_this.sqr71); _this.objGrp2.add(_this.sqr72);
         _this.objGrp2.add(_this.sqr73); _this.objGrp2.add(_this.sqr74);
         _this.objGrp2.add(_this.sqr75); _this.objGrp2.add(_this.sqr76);
         _this.objGrp2.add(_this.sqr77);
         
         _this.objGrp1.add(_this.square1); _this.objGrp1.add(_this.square2); 
         _this.objGrp1.add(_this.square3); _this.objGrp1.add(_this.square4);
         _this.objGrp1.add(_this.square5); _this.objGrp1.add(_this.square6);
         _this.objGrp1.add(_this.square7); _this.objGrp1.add(_this.square8);
         _this.objGrp1.add(_this.square9); _this.objGrp1.add(_this.square10);
         _this.objGrp1.add(_this.square11); _this.objGrp1.add(_this.square12);
         _this.objGrp1.add(_this.square13); _this.objGrp1.add(_this.square14);
         _this.objGrp1.add(_this.square15); _this.objGrp1.add(_this.square16);
         _this.objGrp1.add(_this.square17); _this.objGrp1.add(_this.square18);
         _this.objGrp1.add(_this.square19); _this.objGrp1.add(_this.square20);
         _this.objGrp1.add(_this.square21); _this.objGrp1.add(_this.square22);
         _this.objGrp1.add(_this.square23); _this.objGrp1.add(_this.square24);
         _this.objGrp1.add(_this.square25); _this.objGrp1.add(_this.square26);
         _this.objGrp1.add(_this.square27); _this.objGrp1.add(_this.square28);
         _this.objGrp1.add(_this.square29); _this.objGrp1.add(_this.square30);
         _this.objGrp1.add(_this.square31); _this.objGrp1.add(_this.square32); 
         _this.objGrp1.add(_this.square33); _this.objGrp1.add(_this.square34);
         _this.objGrp1.add(_this.square35); _this.objGrp1.add(_this.square36);
         _this.objGrp1.add(_this.square37); _this.objGrp1.add(_this.square38);
         _this.objGrp1.add(_this.square39); _this.objGrp1.add(_this.square40);
         _this.objGrp1.add(_this.square41); _this.objGrp1.add(_this.square42); 
         _this.objGrp1.add(_this.square43); _this.objGrp1.add(_this.square44);
         _this.objGrp1.add(_this.square45); _this.objGrp1.add(_this.square46);
         _this.objGrp1.add(_this.square47); _this.objGrp1.add(_this.square48);
         _this.objGrp1.add(_this.square49); _this.objGrp1.add(_this.square50);
         
    },
    
     gotoSecondQuestion:function(){

         _this.questionNo = 2;
         _this.opt=2;
         _this.boxGrp = _this.add.group();
         _this.objGrp2 = _this.add.group();
         _this.objGrp1 = _this.add.group();
         
         if(_this.voice_sqr==0)
             {
                 _this.getVoice();
                 _this.voice_sqr++;
             }
         
         _this.mainbox = _this.add.sprite(190,282,'NSN2mainbox');
         _this.mainbox.anchor.setTo(0.5);
         
         _this.box = _this.add.sprite(560,282,'NSN2squarebox');
         _this.box.anchor.setTo(0.5);
         
         _this.rightmark = _this.add.sprite(860,150,'NSN2icon1');
         _this.rightmark.anchor.setTo(0.5);
         
         _this.wrongmark = _this.add.sprite(860,260,'NSN2icon2');
         _this.wrongmark.anchor.setTo(0.5);
         
         _this.tick = _this.add.sprite(860,420,'NSN2tick');
         _this.tick.anchor.setTo(0.5);
         
         _this.text1 = _this.add.text(287,132,"28");//25
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#000000";
         _this.fontWeight = 'normal';
         _this.text1.fontSize = 30;
         
         _this.square1 = _this.add.sprite(98,130,'NSN2square1');
         _this.square1.anchor.setTo(0.5);
         _this.square1.inputEnabled = true;
         _this.square1.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square2 = _this.add.sprite(133,130,'NSN2square1');
         _this.square2.anchor.setTo(0.5);
         _this.square2.inputEnabled = true;
         _this.square2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square3 = _this.add.sprite(168,130,'NSN2square1');
         _this.square3.anchor.setTo(0.5);
         _this.square3.inputEnabled = true;
         _this.square3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square4 = _this.add.sprite(203,130,'NSN2square1');
         _this.square4.anchor.setTo(0.5);
         _this.square4.inputEnabled = true;
         _this.square4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square5 = _this.add.sprite(238,130,'NSN2square1');
         _this.square5.anchor.setTo(0.5);
         _this.square5.inputEnabled = true;
         _this.square5.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square6 = _this.add.sprite(98,164,'NSN2square1');
         _this.square6.anchor.setTo(0.5);
         _this.square6.inputEnabled = true;
         _this.square6.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square7 = _this.add.sprite(133,164,'NSN2square1');
         _this.square7.anchor.setTo(0.5);
         _this.square7.inputEnabled = true;
         _this.square7.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square8 = _this.add.sprite(168,164,'NSN2square1');
         _this.square8.anchor.setTo(0.5);
         _this.square8.inputEnabled = true;
         _this.square8.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square9 = _this.add.sprite(203,164,'NSN2square1');
         _this.square9.anchor.setTo(0.5);
         _this.square9.inputEnabled = true;
         _this.square9.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square10 = _this.add.sprite(238,164,'NSN2square1');
         _this.square10.anchor.setTo(0.5);
         _this.square10.inputEnabled = true;
         _this.square10.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square11 = _this.add.sprite(98,199,'NSN2square1');
         _this.square11.anchor.setTo(0.5);
         _this.square11.inputEnabled = true;
         _this.square11.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square12 = _this.add.sprite(133,199,'NSN2square1');
         _this.square12.anchor.setTo(0.5);
         _this.square12.inputEnabled = true;
         _this.square12.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square13 = _this.add.sprite(168,199,'NSN2square1');
         _this.square13.anchor.setTo(0.5);
         _this.square13.inputEnabled = true;
         _this.square13.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square14 = _this.add.sprite(203,199,'NSN2square1');
         _this.square14.anchor.setTo(0.5);
         _this.square14.inputEnabled = true;
         _this.square14.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square15 = _this.add.sprite(238,199,'NSN2square1');
         _this.square15.anchor.setTo(0.5);
         _this.square15.inputEnabled = true;
         _this.square15.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square16 = _this.add.sprite(98,233,'NSN2square1');
         _this.square16.anchor.setTo(0.5);
         _this.square16.inputEnabled = true;
         _this.square16.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square17 = _this.add.sprite(133,233,'NSN2square1');
         _this.square17.anchor.setTo(0.5);
         _this.square17.inputEnabled = true;
         _this.square17.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square18 = _this.add.sprite(168,233,'NSN2square1');
         _this.square18.anchor.setTo(0.5);
         _this.square18.inputEnabled = true;
         _this.square18.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square19 = _this.add.sprite(203,233,'NSN2square1');
         _this.square19.anchor.setTo(0.5);
         _this.square19.inputEnabled = true;
         _this.square19.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square20 = _this.add.sprite(238,233,'NSN2square1');
         _this.square20.anchor.setTo(0.5);
         _this.square20.inputEnabled = true;
         _this.square20.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square21 = _this.add.sprite(98,268,'NSN2square1');
         _this.square21.anchor.setTo(0.5);
         _this.square21.inputEnabled = true;
         _this.square21.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square22 = _this.add.sprite(133,268,'NSN2square1');
         _this.square22.anchor.setTo(0.5);
         _this.square22.inputEnabled = true;
         _this.square22.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square23 = _this.add.sprite(168,268,'NSN2square1');
         _this.square23.anchor.setTo(0.5);
         _this.square23.inputEnabled = true;
         _this.square23.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square24 = _this.add.sprite(203,268,'NSN2square1');
         _this.square24.anchor.setTo(0.5);
         _this.square24.inputEnabled = true;
         _this.square24.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square25 = _this.add.sprite(238,268,'NSN2square1');
         _this.square25.anchor.setTo(0.5);
         _this.square25.inputEnabled = true;
         _this.square25.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square26 = _this.add.sprite(98,303,'NSN2square1');
         _this.square26.anchor.setTo(0.5);
         _this.square26.inputEnabled = true;
         _this.square26.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square27 = _this.add.sprite(133,303,'NSN2square1');
         _this.square27.anchor.setTo(0.5);
         _this.square27.inputEnabled = true;
         _this.square27.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square28 = _this.add.sprite(168,303,'NSN2square1');
         _this.square28.anchor.setTo(0.5);
         _this.square28.inputEnabled = true;
         _this.square28.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.child11 = _this.add.graphics(-10, -10);
         _this.child11.lineStyle(2, 0x0000FF, 1);
         _this.child11.drawRect(5, 5, 10, 10);
         _this.child11.visible = false;
         
         _this.sqr11 = _this.add.sprite(420,422,'NSN2square5');
         _this.sqr11.anchor.setTo(0.5);
         _this.sqr11.addChild(_this.child11);
         _this.sqr11.visible=false;
         
         _this.child12 = _this.add.graphics(-10, -10);
         _this.child12.lineStyle(2, 0x0000FF, 1);
         _this.child12.drawRect(5, 5, 10, 10);
         _this.child12.visible = false;
         
         _this.sqr12 = _this.add.sprite(490,422,'NSN2square5');
         _this.sqr12.anchor.setTo(0.5);
         _this.sqr12.addChild(_this.child12);
         _this.sqr12.visible=false;
         
         _this.child13 = _this.add.graphics(-10, -10);
         _this.child13.lineStyle(2, 0x0000FF, 1);
         _this.child13.drawRect(5, 5, 10, 10);
         _this.child13.visible = false;
         
         _this.sqr13 = _this.add.sprite(560,422,'NSN2square5');
         _this.sqr13.anchor.setTo(0.5);
         _this.sqr13.addChild(_this.child13);
         _this.sqr13.visible=false;
         
         _this.child14 = _this.add.graphics(-10, -10);
         _this.child14.lineStyle(2, 0x0000FF, 1);
         _this.child14.drawRect(5, 5, 10, 10);
         _this.child14.visible = false;
         
         _this.sqr14 = _this.add.sprite(630,422,'NSN2square5');
         _this.sqr14.anchor.setTo(0.5);
         _this.sqr14.addChild(_this.child14);
         _this.sqr14.visible=false;
         
         _this.child15 = _this.add.graphics(-10, -10);
         _this.child15.lineStyle(2, 0x0000FF, 1);
         _this.child15.drawRect(5, 5, 10, 10);
         _this.child15.visible = false;
         
         _this.sqr15 = _this.add.sprite(700,422,'NSN2square5');
         _this.sqr15.anchor.setTo(0.5);
         _this.sqr15.addChild(_this.child15);
         _this.sqr15.visible=false;
         
         _this.child21 = _this.add.graphics(-10, -10);
         _this.child21.lineStyle(2, 0x0000FF, 1);
         _this.child21.drawRect(5, 5, 10, 10);
         _this.child21.visible = false;
         
         _this.sqr21 = _this.add.sprite(420,352,'NSN2square5');
         _this.sqr21.anchor.setTo(0.5);
         _this.sqr21.addChild(_this.child21);
         _this.sqr21.visible=false;
         
         _this.child22 = _this.add.graphics(-10, -10);
         _this.child22.lineStyle(2, 0x0000FF, 1);
         _this.child22.drawRect(5, 5, 10, 10);
         _this.child22.visible = false;
    
         _this.sqr22 = _this.add.sprite(490,352,'NSN2square5');
         _this.sqr22.anchor.setTo(0.5);
         _this.sqr22.addChild(_this.child22);
         _this.sqr22.visible=false;
         
         _this.child23 = _this.add.graphics(-10, -10);
         _this.child23.lineStyle(2, 0x0000FF, 1);
         _this.child23.drawRect(5, 5, 10, 10);
         _this.child23.visible = false;
         
         _this.sqr23 = _this.add.sprite(560,352,'NSN2square5');
         _this.sqr23.anchor.setTo(0.5);
         _this.sqr23.addChild(_this.child23);
         _this.sqr23.visible=false;
         
         _this.child24 = _this.add.graphics(-10, -10);
         _this.child24.lineStyle(2, 0x0000FF, 1);
         _this.child24.drawRect(5, 5, 10, 10);
         _this.child24.visible = false;

         _this.sqr24 = _this.add.sprite(630,352,'NSN2square5');
         _this.sqr24.anchor.setTo(0.5);
         _this.sqr24.addChild(_this.child24);
         _this.sqr24.visible=false;
         
         _this.child25 = _this.add.graphics(-10, -10);
         _this.child25.lineStyle(2, 0x0000FF, 1);
         _this.child25.drawRect(5, 5, 10, 10);
         _this.child25.visible = false;
         
         _this.sqr25 = _this.add.sprite(700,352,'NSN2square5');
         _this.sqr25.anchor.setTo(0.5);
         _this.sqr25.addChild(_this.child25);
         _this.sqr25.visible=false;
         
         _this.child31 = _this.add.graphics(-10, -10);
         _this.child31.lineStyle(2, 0x0000FF, 1);
         _this.child31.drawRect(5, 5, 10, 10);
         _this.child31.visible = false;

         _this.sqr31 = _this.add.sprite(420,282,'NSN2square5');
         _this.sqr31.anchor.setTo(0.5);
         _this.sqr31.addChild(_this.child31);
         _this.sqr31.visible=false;
         
         _this.child32 = _this.add.graphics(-10, -10);
         _this.child32.lineStyle(2, 0x0000FF, 1);
         _this.child32.drawRect(5, 5, 10, 10);
         _this.child32.visible = false;

         _this.sqr32 = _this.add.sprite(490,282,'NSN2square5');
         _this.sqr32.anchor.setTo(0.5);
         _this.sqr32.addChild(_this.child32);
         _this.sqr32.visible=false;
         
         _this.child33 = _this.add.graphics(-10, -10);
         _this.child33.lineStyle(2, 0x0000FF, 1);
         _this.child33.drawRect(5, 5, 10, 10);
         _this.child33.visible = false;

         _this.sqr33 = _this.add.sprite(560,282,'NSN2square5');
         _this.sqr33.anchor.setTo(0.5);
         _this.sqr33.addChild(_this.child33);
         _this.sqr33.visible=false;
         
         _this.child34 = _this.add.graphics(-10, -10);
         _this.child34.lineStyle(2, 0x0000FF, 1);
         _this.child34.drawRect(5, 5, 10, 10);
         _this.child34.visible = false;

         _this.sqr34 = _this.add.sprite(630,282,'NSN2square5');
         _this.sqr34.anchor.setTo(0.5);
         _this.sqr34.addChild(_this.child34);
         _this.sqr34.visible=false;
         
         _this.child35 = _this.add.graphics(-10, -10);
         _this.child35.lineStyle(2, 0x0000FF, 1);
         _this.child35.drawRect(5, 5, 10, 10);
         _this.child35.visible = false;

         _this.sqr35 = _this.add.sprite(700,282,'NSN2square5');
         _this.sqr35.anchor.setTo(0.5);
         _this.sqr35.addChild(_this.child35);
         _this.sqr35.visible=false;
         
         _this.child41 = _this.add.graphics(-10, -10);
         _this.child41.lineStyle(2, 0x0000FF, 1);
         _this.child41.drawRect(5, 5, 10, 10);
         _this.child41.visible = false;

         _this.sqr41 = _this.add.sprite(420,212,'NSN2square5');
         _this.sqr41.anchor.setTo(0.5);
         _this.sqr41.addChild(_this.child41);
         _this.sqr41.visible=false;
         
         _this.child42 = _this.add.graphics(-10, -10);
         _this.child42.lineStyle(2, 0x0000FF, 1);
         _this.child42.drawRect(5, 5, 10, 10);
         _this.child42.visible = false;

         _this.sqr42 = _this.add.sprite(490,212,'NSN2square5');
         _this.sqr42.anchor.setTo(0.5);
         _this.sqr42.addChild(_this.child42);
         _this.sqr42.visible=false;
         
         _this.child43 = _this.add.graphics(-10, -10);
         _this.child43.lineStyle(2, 0x0000FF, 1);
         _this.child43.drawRect(5, 5, 10, 10);
         _this.child43.visible = false;

         _this.sqr43 = _this.add.sprite(560,212,'NSN2square5');
         _this.sqr43.anchor.setTo(0.5);
         _this.sqr43.addChild(_this.child43);
         _this.sqr43.visible=false;
         
         _this.child44 = _this.add.graphics(-10, -10);
         _this.child44.lineStyle(2, 0x0000FF, 1);
         _this.child44.drawRect(5, 5, 10, 10);
         _this.child44.visible = false;

         _this.sqr44 = _this.add.sprite(630,212,'NSN2square5');
         _this.sqr44.anchor.setTo(0.5);
         _this.sqr44.addChild(_this.child44);
         _this.sqr44.visible=false;
         
         _this.child45 = _this.add.graphics(-10, -10);
         _this.child45.lineStyle(2, 0x0000FF, 1);
         _this.child45.drawRect(5, 5, 10, 10);
         _this.child45.visible = false;

         _this.sqr45 = _this.add.sprite(700,212,'NSN2square5');
         _this.sqr45.anchor.setTo(0.5);
         _this.sqr45.addChild(_this.child45);
         _this.sqr45.visible=false;
         
         _this.child51 = _this.add.graphics(-10, -10);
         _this.child51.lineStyle(2, 0x0000FF, 1);
         _this.child51.drawRect(5, 5, 10, 10);
         _this.child51.visible = false;

         _this.sqr51 = _this.add.sprite(420,142,'NSN2square5');
         _this.sqr51.anchor.setTo(0.5);
         _this.sqr51.addChild(_this.child51);
         _this.sqr51.visible=false;
         
         _this.child52 = _this.add.graphics(-10, -10);
         _this.child52.lineStyle(2, 0x0000FF, 1);
         _this.child52.drawRect(5, 5, 10, 10);
         _this.child52.visible = false;
         
         _this.sqr52 = _this.add.sprite(490,142,'NSN2square5');
         _this.sqr52.anchor.setTo(0.5);
         _this.sqr52.addChild(_this.child52);
         _this.sqr52.visible=false;
         
         _this.child53 = _this.add.graphics(-10, -10);
         _this.child53.lineStyle(2, 0x0000FF, 1);
         _this.child53.drawRect(5, 5, 10, 10);
         _this.child53.visible = false;
         
         _this.sqr53 = _this.add.sprite(560,142,'NSN2square5');
         _this.sqr53.anchor.setTo(0.5);
         _this.sqr53.addChild(_this.child53);
         _this.sqr53.visible=false;
         
         _this.child54 = _this.add.graphics(-10, -10);
         _this.child54.lineStyle(2, 0x0000FF, 1);
         _this.child54.drawRect(5, 5, 10, 10);
         _this.child54.visible = false;
         
         _this.sqr54 = _this.add.sprite(630,142,'NSN2square5');
         _this.sqr54.anchor.setTo(0.5);
         _this.sqr54.addChild(_this.child54);
         _this.sqr54.visible=false;
         
         _this.child55 = _this.add.graphics(-10, -10);
         _this.child55.lineStyle(2, 0x0000FF, 1);
         _this.child55.drawRect(5, 5, 10, 10);
         _this.child55.visible = false;
         
         _this.sqr55 = _this.add.sprite(700,142,'NSN2square5');
         _this.sqr55.anchor.setTo(0.5);
         _this.sqr55.addChild(_this.child55);
         _this.sqr55.visible=false;
         
         _this.num=25;
         
         _this.boxGrp.add(_this.mainbox);
         _this.boxGrp.add(_this.box);
         _this.boxGrp.add(_this.text1);
         _this.boxGrp.add(_this.rightmark);
         _this.boxGrp.add(_this.wrongmark);
         _this.boxGrp.add(_this.tick);
         
         _this.objGrp2.add(_this.sqr11); _this.objGrp2.add(_this.sqr12);
         _this.objGrp2.add(_this.sqr13); _this.objGrp2.add(_this.sqr14);
         _this.objGrp2.add(_this.sqr15); _this.objGrp2.add(_this.sqr21); 
         _this.objGrp2.add(_this.sqr22); _this.objGrp2.add(_this.sqr23); 
         _this.objGrp2.add(_this.sqr24); _this.objGrp2.add(_this.sqr25);
         _this.objGrp2.add(_this.sqr31); _this.objGrp2.add(_this.sqr32);
         _this.objGrp2.add(_this.sqr33); _this.objGrp2.add(_this.sqr34);
         _this.objGrp2.add(_this.sqr35); _this.objGrp2.add(_this.sqr41); 
         _this.objGrp2.add(_this.sqr42); _this.objGrp2.add(_this.sqr43); 
         _this.objGrp2.add(_this.sqr44); _this.objGrp2.add(_this.sqr45);
         _this.objGrp2.add(_this.sqr51); _this.objGrp2.add(_this.sqr52);
         _this.objGrp2.add(_this.sqr53); _this.objGrp2.add(_this.sqr54);
         _this.objGrp2.add(_this.sqr55);
         
         _this.objGrp1.add(_this.square1); _this.objGrp1.add(_this.square2); 
         _this.objGrp1.add(_this.square3); _this.objGrp1.add(_this.square4);
         _this.objGrp1.add(_this.square5); _this.objGrp1.add(_this.square6);
         _this.objGrp1.add(_this.square7); _this.objGrp1.add(_this.square8);
         _this.objGrp1.add(_this.square9); _this.objGrp1.add(_this.square10);
         _this.objGrp1.add(_this.square11); _this.objGrp1.add(_this.square12);
         _this.objGrp1.add(_this.square13); _this.objGrp1.add(_this.square14);
         _this.objGrp1.add(_this.square15); _this.objGrp1.add(_this.square16);
         _this.objGrp1.add(_this.square17); _this.objGrp1.add(_this.square18);
         _this.objGrp1.add(_this.square19); _this.objGrp1.add(_this.square20);
         _this.objGrp1.add(_this.square21); _this.objGrp1.add(_this.square22);
         _this.objGrp1.add(_this.square23); _this.objGrp1.add(_this.square24);
         _this.objGrp1.add(_this.square25); _this.objGrp1.add(_this.square26);
         _this.objGrp1.add(_this.square27); _this.objGrp1.add(_this.square28);
         
    },
    
    gotoThirdQuestion:function(){
        
         _this.questionNo = 3;
         _this.opt=1;
         _this.boxGrp = _this.add.group();
         _this.objGrp2 = _this.add.group();
         _this.objGrp1 = _this.add.group();
        
         if(_this.voice_sqr==0)
             {
                 _this.getVoice();
                 _this.voice_sqr++;
             }
        
         _this.mainbox = _this.add.sprite(190,282,'NSN2mainbox');
         _this.mainbox.anchor.setTo(0.5);
         
         _this.box = _this.add.sprite(560,282,'NSN2squarebox');
         _this.box.anchor.setTo(0.5);
         
         _this.rightmark = _this.add.sprite(860,150,'NSN2icon1');
         _this.rightmark.anchor.setTo(0.5);
         
         _this.wrongmark = _this.add.sprite(860,260,'NSN2icon2');
         _this.wrongmark.anchor.setTo(0.5);
         
         _this.tick = _this.add.sprite(860,420,'NSN2tick');
         _this.tick.anchor.setTo(0.5);
         
         _this.text1 = _this.add.text(287,132,"16");
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#000000";
         _this.fontWeight = 'normal';
         _this.text1.fontSize = 30;
         
         _this.square1 = _this.add.sprite(98,130,'NSN2square1');
         _this.square1.anchor.setTo(0.5);
         _this.square1.inputEnabled = true;
         _this.square1.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square2 = _this.add.sprite(133,130,'NSN2square1');
         _this.square2.anchor.setTo(0.5);
         _this.square2.inputEnabled = true;
         _this.square2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square3 = _this.add.sprite(168,130,'NSN2square1');
         _this.square3.anchor.setTo(0.5);
         _this.square3.inputEnabled = true;
         _this.square3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square4 = _this.add.sprite(203,130,'NSN2square1');
         _this.square4.anchor.setTo(0.5);
         _this.square4.inputEnabled = true;
         _this.square4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square5 = _this.add.sprite(238,130,'NSN2square1');
         _this.square5.anchor.setTo(0.5);
         _this.square5.inputEnabled = true;
         _this.square5.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square6 = _this.add.sprite(98,164,'NSN2square1');
         _this.square6.anchor.setTo(0.5);
         _this.square6.inputEnabled = true;
         _this.square6.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square7 = _this.add.sprite(133,164,'NSN2square1');
         _this.square7.anchor.setTo(0.5);
         _this.square7.inputEnabled = true;
         _this.square7.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square8 = _this.add.sprite(168,164,'NSN2square1');
         _this.square8.anchor.setTo(0.5);
         _this.square8.inputEnabled = true;
         _this.square8.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square9 = _this.add.sprite(203,164,'NSN2square1');
         _this.square9.anchor.setTo(0.5);
         _this.square9.inputEnabled = true;
         _this.square9.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square10 = _this.add.sprite(238,164,'NSN2square1');
         _this.square10.anchor.setTo(0.5);
         _this.square10.inputEnabled = true;
         _this.square10.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square11 = _this.add.sprite(98,199,'NSN2square1');
         _this.square11.anchor.setTo(0.5);
         _this.square11.inputEnabled = true;
         _this.square11.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square12 = _this.add.sprite(133,199,'NSN2square1');
         _this.square12.anchor.setTo(0.5);
         _this.square12.inputEnabled = true;
         _this.square12.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square13 = _this.add.sprite(168,199,'NSN2square1');
         _this.square13.anchor.setTo(0.5);
         _this.square13.inputEnabled = true;
         _this.square13.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square14 = _this.add.sprite(203,199,'NSN2square1');
         _this.square14.anchor.setTo(0.5);
         _this.square14.inputEnabled = true;
         _this.square14.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square15 = _this.add.sprite(238,199,'NSN2square1');
         _this.square15.anchor.setTo(0.5);
         _this.square15.inputEnabled = true;
         _this.square15.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square16 = _this.add.sprite(98,233,'NSN2square1');
         _this.square16.anchor.setTo(0.5);
         _this.square16.inputEnabled = true;
         _this.square16.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.child11 = _this.add.graphics(-10, -10);
         _this.child11.lineStyle(2, 0x0000FF, 1);
         _this.child11.drawRect(5, 5, 10, 10);
         _this.child11.visible = false;
         
         _this.sqr11 = _this.add.sprite(428,415,'NSN2square4');
         _this.sqr11.anchor.setTo(0.5);
         _this.sqr11.addChild(_this.child11);
         _this.sqr11.visible=false;
         
         _this.child12 = _this.add.graphics(-10, -10);
         _this.child12.lineStyle(2, 0x0000FF, 1);
         _this.child12.drawRect(5, 5, 10, 10);
         _this.child12.visible = false;
         
         _this.sqr12 = _this.add.sprite(516,415,'NSN2square4');
         _this.sqr12.anchor.setTo(0.5);
         _this.sqr12.addChild(_this.child12);
         _this.sqr12.visible=false;
         
         _this.child13 = _this.add.graphics(-10, -10);
         _this.child13.lineStyle(2, 0x0000FF, 1);
         _this.child13.drawRect(5, 5, 10, 10);
         _this.child13.visible = false;
         
         _this.sqr13 = _this.add.sprite(603,415,'NSN2square4');
         _this.sqr13.anchor.setTo(0.5);
         _this.sqr13.addChild(_this.child13);
         _this.sqr13.visible=false;
         
         _this.child14 = _this.add.graphics(-10, -10);
         _this.child14.lineStyle(2, 0x0000FF, 1);
         _this.child14.drawRect(5, 5, 10, 10);
         _this.child14.visible = false;
         
         _this.sqr14 = _this.add.sprite(691,415,'NSN2square4');
         _this.sqr14.anchor.setTo(0.5);
         _this.sqr14.addChild(_this.child14);
         _this.sqr14.visible=false;
         
         _this.child21 = _this.add.graphics(-10, -10);
         _this.child21.lineStyle(2, 0x0000FF, 1);
         _this.child21.drawRect(5, 5, 10, 10);
         _this.child21.visible = false;
         
         _this.sqr21 = _this.add.sprite(428,327,'NSN2square4');
         _this.sqr21.anchor.setTo(0.5);
         _this.sqr21.addChild(_this.child21);
         _this.sqr21.visible=false;
         
         _this.child22 = _this.add.graphics(-10, -10);
         _this.child22.lineStyle(2, 0x0000FF, 1);
         _this.child22.drawRect(5, 5, 10, 10);
         _this.child22.visible = false;
    
         _this.sqr22 = _this.add.sprite(516,327,'NSN2square4');
         _this.sqr22.anchor.setTo(0.5);
         _this.sqr22.addChild(_this.child22);
         _this.sqr22.visible=false;
         
         _this.child23 = _this.add.graphics(-10, -10);
         _this.child23.lineStyle(2, 0x0000FF, 1);
         _this.child23.drawRect(5, 5, 10, 10);
         _this.child23.visible = false;
         
         _this.sqr23 = _this.add.sprite(603,327,'NSN2square4');
         _this.sqr23.anchor.setTo(0.5);
         _this.sqr23.addChild(_this.child23);
         _this.sqr23.visible=false;
         
         _this.child24 = _this.add.graphics(-10, -10);
         _this.child24.lineStyle(2, 0x0000FF, 1);
         _this.child24.drawRect(5, 5, 10, 10);
         _this.child24.visible = false;

         _this.sqr24 = _this.add.sprite(691,327,'NSN2square4');
         _this.sqr24.anchor.setTo(0.5);
         _this.sqr24.addChild(_this.child24);
         _this.sqr24.visible=false;
         
         _this.child31 = _this.add.graphics(-10, -10);
         _this.child31.lineStyle(2, 0x0000FF, 1);
         _this.child31.drawRect(5, 5, 10, 10);
         _this.child31.visible = false;

         _this.sqr31 = _this.add.sprite(428,239,'NSN2square4');
         _this.sqr31.anchor.setTo(0.5);
         _this.sqr31.addChild(_this.child31);
         _this.sqr31.visible=false;
         
         _this.child32 = _this.add.graphics(-10, -10);
         _this.child32.lineStyle(2, 0x0000FF, 1);
         _this.child32.drawRect(5, 5, 10, 10);
         _this.child32.visible = false;

         _this.sqr32 = _this.add.sprite(516,239,'NSN2square4');
         _this.sqr32.anchor.setTo(0.5);
         _this.sqr32.addChild(_this.child32);
         _this.sqr32.visible=false;
         
         _this.child33 = _this.add.graphics(-10, -10);
         _this.child33.lineStyle(2, 0x0000FF, 1);
         _this.child33.drawRect(5, 5, 10, 10);
         _this.child33.visible = false;

         _this.sqr33 = _this.add.sprite(603,239,'NSN2square4');
         _this.sqr33.anchor.setTo(0.5);
         _this.sqr33.addChild(_this.child33);
         _this.sqr33.visible=false;
         
         _this.child34 = _this.add.graphics(-10, -10);
         _this.child34.lineStyle(2, 0x0000FF, 1);
         _this.child34.drawRect(5, 5, 10, 10);
         _this.child34.visible = false;

         _this.sqr34 = _this.add.sprite(691,239,'NSN2square4');
         _this.sqr34.anchor.setTo(0.5);
         _this.sqr34.addChild(_this.child34);
         _this.sqr34.visible=false;
         
         _this.child41 = _this.add.graphics(-10, -10);
         _this.child41.lineStyle(2, 0x0000FF, 1);
         _this.child41.drawRect(5, 5, 10, 10);
         _this.child41.visible = false;

         _this.sqr41 = _this.add.sprite(428,151,'NSN2square4');
         _this.sqr41.anchor.setTo(0.5);
         _this.sqr41.addChild(_this.child41);
         _this.sqr41.visible=false;
         
         _this.child42 = _this.add.graphics(-10, -10);
         _this.child42.lineStyle(2, 0x0000FF, 1);
         _this.child42.drawRect(5, 5, 10, 10);
         _this.child42.visible = false;

         _this.sqr42 = _this.add.sprite(516,151,'NSN2square4');
         _this.sqr42.anchor.setTo(0.5);
         _this.sqr42.addChild(_this.child42);
         _this.sqr42.visible=false;
         
         _this.child43 = _this.add.graphics(-10, -10);
         _this.child43.lineStyle(2, 0x0000FF, 1);
         _this.child43.drawRect(5, 5, 10, 10);
         _this.child43.visible = false;

         _this.sqr43 = _this.add.sprite(603,151,'NSN2square4');
         _this.sqr43.anchor.setTo(0.5);
         _this.sqr43.addChild(_this.child43);
         _this.sqr43.visible=false;
         
         _this.child44 = _this.add.graphics(-10, -10);
         _this.child44.lineStyle(2, 0x0000FF, 1);
         _this.child44.drawRect(5, 5, 10, 10);
         _this.child44.visible = false;

         _this.sqr44 = _this.add.sprite(691,151,'NSN2square4');
         _this.sqr44.anchor.setTo(0.5);
         _this.sqr44.addChild(_this.child44);
         _this.sqr44.visible=false;
         
         _this.num=16;
         
         _this.boxGrp.add(_this.mainbox);
         _this.boxGrp.add(_this.box);
         _this.boxGrp.add(_this.text1);
         _this.boxGrp.add(_this.rightmark);
         _this.boxGrp.add(_this.wrongmark);
         _this.boxGrp.add(_this.tick);
         
         _this.objGrp2.add(_this.sqr11); _this.objGrp2.add(_this.sqr12);
         _this.objGrp2.add(_this.sqr13); _this.objGrp2.add(_this.sqr14);
         _this.objGrp2.add(_this.sqr21); _this.objGrp2.add(_this.sqr22); 
         _this.objGrp2.add(_this.sqr23); _this.objGrp2.add(_this.sqr24); 
         _this.objGrp2.add(_this.sqr31); _this.objGrp2.add(_this.sqr32);
         _this.objGrp2.add(_this.sqr33); _this.objGrp2.add(_this.sqr34);
         _this.objGrp2.add(_this.sqr41); _this.objGrp2.add(_this.sqr42); 
         _this.objGrp2.add(_this.sqr43); _this.objGrp2.add(_this.sqr44);
         
         _this.objGrp1.add(_this.square1); _this.objGrp1.add(_this.square2); 
         _this.objGrp1.add(_this.square3); _this.objGrp1.add(_this.square4);
         _this.objGrp1.add(_this.square5); _this.objGrp1.add(_this.square6);
         _this.objGrp1.add(_this.square7); _this.objGrp1.add(_this.square8);
         _this.objGrp1.add(_this.square9); _this.objGrp1.add(_this.square10);
         _this.objGrp1.add(_this.square11); _this.objGrp1.add(_this.square12);
         _this.objGrp1.add(_this.square13); _this.objGrp1.add(_this.square14);
         _this.objGrp1.add(_this.square15); _this.objGrp1.add(_this.square16);
         
    },
    
     gotoFourthQuestion:function(){

         _this.questionNo = 4;
         _this.opt=1;
         _this.boxGrp = _this.add.group();
         _this.objGrp2 = _this.add.group();
         _this.objGrp1 = _this.add.group();
         
         if(_this.voice_sqr==0)
             {
                 _this.getVoice();
                 _this.voice_sqr++;
             }
         
         _this.mainbox = _this.add.sprite(190,282,'NSN2mainbox');
         _this.mainbox.anchor.setTo(0.5);
         
         _this.box = _this.add.sprite(560,282,'NSN2squarebox');
         _this.box.anchor.setTo(0.5);
         
         _this.rightmark = _this.add.sprite(860,150,'NSN2icon1');
         _this.rightmark.anchor.setTo(0.5);
         
         _this.wrongmark = _this.add.sprite(860,260,'NSN2icon2');
         _this.wrongmark.anchor.setTo(0.5);
         
         _this.tick = _this.add.sprite(860,420,'NSN2tick');
         _this.tick.anchor.setTo(0.5);
         
         _this.text1 = _this.add.text(287,132,"9");
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#000000";
         _this.fontWeight = 'normal';
         _this.text1.fontSize = 30;
         
         /*_this.square1 = _this.add.sprite(107,142,'NSN2square2');
         _this.square1.anchor.setTo(0.5);
         _this.square1.inputEnabled = true;
         _this.square1.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square2 = _this.add.sprite(165,142,'NSN2square2');
         _this.square2.anchor.setTo(0.5);
         _this.square2.inputEnabled = true;
         _this.square2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square3 = _this.add.sprite(225,142,'NSN2square2');
         _this.square3.anchor.setTo(0.5);
         _this.square3.inputEnabled = true;
         _this.square3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square4 = _this.add.sprite(107,200,'NSN2square2');
         _this.square4.anchor.setTo(0.5);
         _this.square4.inputEnabled = true;
         _this.square4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square5 = _this.add.sprite(165,200,'NSN2square2');
         _this.square5.anchor.setTo(0.5);
         _this.square5.inputEnabled = true;
         _this.square5.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square6 = _this.add.sprite(225,200,'NSN2square2');
         _this.square6.anchor.setTo(0.5);
         _this.square6.inputEnabled = true; 
         _this.square6.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square7 = _this.add.sprite(107,258,'NSN2square2');
         _this.square7.anchor.setTo(0.5);
         _this.square7.inputEnabled = true;
         _this.square7.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square8 = _this.add.sprite(165,258,'NSN2square2');
         _this.square8.anchor.setTo(0.5);
         _this.square8.inputEnabled = true;
         _this.square8.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square9 = _this.add.sprite(225,258,'NSN2square2');
         _this.square9.anchor.setTo(0.5);
         _this.square9.inputEnabled = true;
         _this.square9.events.onInputDown.add(_this.onDragstart,_this);*/
         
         _this.square1 = _this.add.sprite(98,130,'NSN2square1');
         _this.square1.anchor.setTo(0.5);
         _this.square1.inputEnabled = true;
         _this.square1.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square2 = _this.add.sprite(133,130,'NSN2square1');
         _this.square2.anchor.setTo(0.5);
         _this.square2.inputEnabled = true;
         _this.square2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square3 = _this.add.sprite(168,130,'NSN2square1');
         _this.square3.anchor.setTo(0.5);
         _this.square3.inputEnabled = true;
         _this.square3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square4 = _this.add.sprite(203,130,'NSN2square1');
         _this.square4.anchor.setTo(0.5);
         _this.square4.inputEnabled = true;
         _this.square4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square5 = _this.add.sprite(238,130,'NSN2square1');
         _this.square5.anchor.setTo(0.5);
         _this.square5.inputEnabled = true;
         _this.square5.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square6 = _this.add.sprite(98,164,'NSN2square1');
         _this.square6.anchor.setTo(0.5);
         _this.square6.inputEnabled = true;
         _this.square6.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square7 = _this.add.sprite(133,164,'NSN2square1');
         _this.square7.anchor.setTo(0.5);
         _this.square7.inputEnabled = true;
         _this.square7.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square8 = _this.add.sprite(168,164,'NSN2square1');
         _this.square8.anchor.setTo(0.5);
         _this.square8.inputEnabled = true;
         _this.square8.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.square9 = _this.add.sprite(203,164,'NSN2square1');
         _this.square9.anchor.setTo(0.5);
         _this.square9.inputEnabled = true;
         _this.square9.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.child11 = _this.add.graphics(-10, -10);
         _this.child11.lineStyle(2, 0x0000FF, 1);
         _this.child11.drawRect(-10, -10, 50, 50);
         _this.child11.visible = false;
         
         _this.sqr11 = _this.add.sprite(444,399,'NSN2square3');
         _this.sqr11.anchor.setTo(0.5);
         _this.sqr11.addChild(_this.child11);
         _this.sqr11.visible=false;
         
         _this.child12 = _this.add.graphics(-10, -10);
         _this.child12.lineStyle(2, 0x0000FF, 1);
         _this.child12.drawRect(-10, -10, 50, 50);
         _this.child12.visible = false;
         
         _this.sqr12 = _this.add.sprite(560,399,'NSN2square3');
         _this.sqr12.anchor.setTo(0.5);
         _this.sqr12.addChild(_this.child12);
         _this.sqr12.visible=false;
         
         _this.child13 = _this.add.graphics(-10, -10);
         _this.child13.lineStyle(2, 0x0000FF, 1);
         _this.child13.drawRect(-10, -10, 50, 50);
         _this.child13.visible = false;
         
         _this.sqr13 = _this.add.sprite(677,399,'NSN2square3');
         _this.sqr13.anchor.setTo(0.5);
         _this.sqr13.addChild(_this.child13);
         _this.sqr13.visible=false;
         
         _this.child21 = _this.add.graphics(-10, -10);
         _this.child21.lineStyle(2, 0x0000FF, 1);
         _this.child21.drawRect(-10, -10, 50, 50);
         _this.child21.visible = false;
         
         _this.sqr21 = _this.add.sprite(444,282,'NSN2square3');
         _this.sqr21.anchor.setTo(0.5);
         _this.sqr21.addChild(_this.child21);
         _this.sqr21.visible=false;
         
         _this.child22 = _this.add.graphics(-10, -10);
         _this.child22.lineStyle(2, 0x0000FF, 1);
         _this.child22.drawRect(-10, -10, 50, 50);
         _this.child22.visible = false;
    
         _this.sqr22 = _this.add.sprite(560,282,'NSN2square3');
         _this.sqr22.anchor.setTo(0.5);
         _this.sqr22.addChild(_this.child22);
         _this.sqr22.visible=false;
         
         _this.child23 = _this.add.graphics(-10, -10);
         _this.child23.lineStyle(2, 0x0000FF, 1);
         _this.child23.drawRect(-10, -10, 50, 50);
         _this.child23.visible = false;
         
         _this.sqr23 = _this.add.sprite(677,282,'NSN2square3');
         _this.sqr23.anchor.setTo(0.5);
         _this.sqr23.addChild(_this.child23);
         _this.sqr23.visible=false;
         
         _this.child31 = _this.add.graphics(-10, -10);
         _this.child31.lineStyle(2, 0x0000FF, 1);
         _this.child31.drawRect(-10, -10, 50, 50);
         _this.child31.visible = false;

         _this.sqr31 = _this.add.sprite(444,165,'NSN2square3');
         _this.sqr31.anchor.setTo(0.5);
         _this.sqr31.addChild(_this.child31);
         _this.sqr31.visible=false;
         
         _this.child32 = _this.add.graphics(-10, -10);
         _this.child32.lineStyle(2, 0x0000FF, 1);
         _this.child32.drawRect(-10, -10, 50, 50);
         _this.child32.visible = false;

         _this.sqr32 = _this.add.sprite(560,165,'NSN2square3');
         _this.sqr32.anchor.setTo(0.5);
         _this.sqr32.addChild(_this.child32);
         _this.sqr32.visible=false;
         
         _this.child33 = _this.add.graphics(-10, -10);
         _this.child33.lineStyle(2, 0x0000FF, 1);
         _this.child33.drawRect(-10, -10, 50, 50);
         _this.child33.visible = false;

         _this.sqr33 = _this.add.sprite(677,165,'NSN2square3');
         _this.sqr33.anchor.setTo(0.5);
         _this.sqr33.addChild(_this.child33);
         _this.sqr33.visible=false;
         
         _this.num=9;
         
         _this.boxGrp.add(_this.mainbox);
         _this.boxGrp.add(_this.box);
         _this.boxGrp.add(_this.text1);
         _this.boxGrp.add(_this.rightmark);
         _this.boxGrp.add(_this.wrongmark);
         _this.boxGrp.add(_this.tick);
         
         _this.objGrp2.add(_this.sqr11); _this.objGrp2.add(_this.sqr12);
         _this.objGrp2.add(_this.sqr13); _this.objGrp2.add(_this.sqr21); 
         _this.objGrp2.add(_this.sqr22); _this.objGrp2.add(_this.sqr23);  
         _this.objGrp2.add(_this.sqr31); _this.objGrp2.add(_this.sqr32);
         _this.objGrp2.add(_this.sqr33);
         
         _this.objGrp1.add(_this.square1); _this.objGrp1.add(_this.square2); 
         _this.objGrp1.add(_this.square3); _this.objGrp1.add(_this.square4);
         _this.objGrp1.add(_this.square5); _this.objGrp1.add(_this.square6);
         _this.objGrp1.add(_this.square7); _this.objGrp1.add(_this.square8);
         _this.objGrp1.add(_this.square9);
         
    },
    
    gotoFifthQuestion:function(){

         _this.questionNo = 5;
         _this.opt=1;
         _this.boxGrp = _this.add.group(); 
         _this.objGrp2 = _this.add.group();
         _this.objGrp1 = _this.add.group();
        
        if(_this.voce_tri==0)
             {
                 _this.getVoice();
                 _this.voce_tri++;
             }
         
         _this.mainbox = _this.add.sprite(190,282,'NSN2mainbox');
         _this.mainbox.anchor.setTo(0.5);
         
         _this.box = _this.add.sprite(560,282,'NSN2trianglebox');
         _this.box.anchor.setTo(0.5);
         
         _this.rightmark = _this.add.sprite(860,150,'NSN2icon3');
         _this.rightmark.anchor.setTo(0.5);
         
         _this.wrongmark = _this.add.sprite(860,260,'NSN2icon4');
         _this.wrongmark.anchor.setTo(0.5);
         
         _this.tick = _this.add.sprite(860,420,'NSN2tick');
         _this.tick.anchor.setTo(0.5);
         
         _this.text1 = _this.add.text(287,132,"36");
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#000000";
         _this.fontWeight = 'normal';
         _this.text1.fontSize = 30;
        
         _this.circle1 = _this.add.sprite(98,130,'NSN2circle1');
         _this.circle1.anchor.setTo(0.5);
         _this.circle1.inputEnabled = true;
         _this.circle1.events.onInputDown.add(_this.onDragstart,_this);
        
         _this.circle2 = _this.add.sprite(133,130,'NSN2circle1');
         _this.circle2.anchor.setTo(0.5);
         _this.circle2.inputEnabled = true;
         _this.circle2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle3 = _this.add.sprite(168,130,'NSN2circle1');
         _this.circle3.anchor.setTo(0.5);
         _this.circle3.inputEnabled = true;
         _this.circle3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle4 = _this.add.sprite(203,130,'NSN2circle1');
         _this.circle4.anchor.setTo(0.5);
         _this.circle4.inputEnabled = true;
         _this.circle4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle5 = _this.add.sprite(238,130,'NSN2circle1');
         _this.circle5.anchor.setTo(0.5);
         _this.circle5.inputEnabled = true;
         _this.circle5.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle6 = _this.add.sprite(98,164,'NSN2circle1');
         _this.circle6.anchor.setTo(0.5);
         _this.circle6.inputEnabled = true;
         _this.circle6.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle7 = _this.add.sprite(133,164,'NSN2circle1');
         _this.circle7.anchor.setTo(0.5);
         _this.circle7.inputEnabled = true;
         _this.circle7.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle8 = _this.add.sprite(168,164,'NSN2circle1');
         _this.circle8.anchor.setTo(0.5);
         _this.circle8.inputEnabled = true;
         _this.circle8.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle9 = _this.add.sprite(203,164,'NSN2circle1');
         _this.circle9.anchor.setTo(0.5);
         _this.circle9.inputEnabled = true;
         _this.circle9.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle10 = _this.add.sprite(238,164,'NSN2circle1');
         _this.circle10.anchor.setTo(0.5);
         _this.circle10.inputEnabled = true;
         _this.circle10.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle11 = _this.add.sprite(98,199,'NSN2circle1');
         _this.circle11.anchor.setTo(0.5);
         _this.circle11.inputEnabled = true;
         _this.circle11.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle12 = _this.add.sprite(133,199,'NSN2circle1');
         _this.circle12.anchor.setTo(0.5);
         _this.circle12.inputEnabled = true;
         _this.circle12.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle13 = _this.add.sprite(168,199,'NSN2circle1');
         _this.circle13.anchor.setTo(0.5);
         _this.circle13.inputEnabled = true;
         _this.circle13.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle14 = _this.add.sprite(203,199,'NSN2circle1');
         _this.circle14.anchor.setTo(0.5);
         _this.circle14.inputEnabled = true;
         _this.circle14.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle15 = _this.add.sprite(238,199,'NSN2circle1');
         _this.circle15.anchor.setTo(0.5);
         _this.circle15.inputEnabled = true;
         _this.circle15.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle16 = _this.add.sprite(98,233,'NSN2circle1');
         _this.circle16.anchor.setTo(0.5);
         _this.circle16.inputEnabled = true;
         _this.circle16.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle17 = _this.add.sprite(133,233,'NSN2circle1');
         _this.circle17.anchor.setTo(0.5);
         _this.circle17.inputEnabled = true;
         _this.circle17.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle18 = _this.add.sprite(168,233,'NSN2circle1');
         _this.circle18.anchor.setTo(0.5);
         _this.circle18.inputEnabled = true;
         _this.circle18.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle19 = _this.add.sprite(203,233,'NSN2circle1');
         _this.circle19.anchor.setTo(0.5);
         _this.circle19.inputEnabled = true;
         _this.circle19.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle20 = _this.add.sprite(238,233,'NSN2circle1');
         _this.circle20.anchor.setTo(0.5);
         _this.circle20.inputEnabled = true;
         _this.circle20.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle21 = _this.add.sprite(98,268,'NSN2circle1');
         _this.circle21.anchor.setTo(0.5);
         _this.circle21.inputEnabled = true;
         _this.circle21.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle22 = _this.add.sprite(133,268,'NSN2circle1');
         _this.circle22.anchor.setTo(0.5);
         _this.circle22.inputEnabled = true;
         _this.circle22.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle23 = _this.add.sprite(168,268,'NSN2circle1');
         _this.circle23.anchor.setTo(0.5);
         _this.circle23.inputEnabled = true;
         _this.circle23.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle24 = _this.add.sprite(203,268,'NSN2circle1');
         _this.circle24.anchor.setTo(0.5);
         _this.circle24.inputEnabled = true;
         _this.circle24.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle25 = _this.add.sprite(238,268,'NSN2circle1');
         _this.circle25.anchor.setTo(0.5);
         _this.circle25.inputEnabled = true;
         _this.circle25.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle26 = _this.add.sprite(98,303,'NSN2circle1');
         _this.circle26.anchor.setTo(0.5);
         _this.circle26.inputEnabled = true;
         _this.circle26.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle27 = _this.add.sprite(133,303,'NSN2circle1');
         _this.circle27.anchor.setTo(0.5);
         _this.circle27.inputEnabled = true;
         _this.circle27.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle28 = _this.add.sprite(168,303,'NSN2circle1');
         _this.circle28.anchor.setTo(0.5);
         _this.circle28.inputEnabled = true;
         _this.circle28.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle29 = _this.add.sprite(203,303,'NSN2circle1');
         _this.circle29.anchor.setTo(0.5);
         _this.circle29.inputEnabled = true;
         _this.circle29.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle30 = _this.add.sprite(238,303,'NSN2circle1');
         _this.circle30.anchor.setTo(0.5);
         _this.circle30.inputEnabled = true;
         _this.circle30.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle31 = _this.add.sprite(98,338,'NSN2circle1');
         _this.circle31.anchor.setTo(0.5);
         _this.circle31.inputEnabled = true;
         _this.circle31.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle32 = _this.add.sprite(133,338,'NSN2circle1');
         _this.circle32.anchor.setTo(0.5);
         _this.circle32.inputEnabled = true;
         _this.circle32.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle33 = _this.add.sprite(168,338,'NSN2circle1');
         _this.circle33.anchor.setTo(0.5);
         _this.circle33.inputEnabled = true;
         _this.circle33.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle34 = _this.add.sprite(203,338,'NSN2circle1');
         _this.circle34.anchor.setTo(0.5);
         _this.circle34.inputEnabled = true;
         _this.circle34.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle35 = _this.add.sprite(238,338,'NSN2circle1');
         _this.circle35.anchor.setTo(0.5);
         _this.circle35.inputEnabled = true;
         _this.circle35.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle36 = _this.add.sprite(98,372,'NSN2circle1');
         _this.circle36.anchor.setTo(0.5);
         _this.circle36.inputEnabled = true;
         _this.circle36.events.onInputDown.add(_this.onDragstart,_this);
        
         _this.child11 = _this.add.graphics(-10, -10);
         _this.child11.lineStyle(2, 0x0000FF, 1);
         _this.child11.drawRect(5, 5, 10, 10);
         _this.child11.visible = false;
        
         _this.circles11 = _this.add.sprite(402,432,'NSN2circle9');
         _this.circles11.anchor.setTo(0.5);
         _this.circles11.addChild(_this.child11);
         _this.circles11.visible=false;
        
         _this.child12 = _this.add.graphics(-10, -10);
         _this.child12.lineStyle(2, 0x0000FF, 1);
         _this.child12.drawRect(5, 5, 10, 10);
         _this.child12.visible = false;
        
         _this.circles12 = _this.add.sprite(447,432,'NSN2circle9');
         _this.circles12.anchor.setTo(0.5);
         _this.circles12.addChild(_this.child12);
         _this.circles12.visible=false;
        
         _this.child13 = _this.add.graphics(-10, -10);
         _this.child13.lineStyle(2, 0x0000FF, 1);
         _this.child13.drawRect(5, 5, 10, 10);
         _this.child13.visible = false;
        
         _this.circles13 = _this.add.sprite(492,432,'NSN2circle9');
         _this.circles13.anchor.setTo(0.5);
         _this.circles13.addChild(_this.child13);
         _this.circles13.visible=false;
        
         _this.child14 = _this.add.graphics(-10, -10);
         _this.child14.lineStyle(2, 0x0000FF, 1);
         _this.child14.drawRect(5, 5, 10, 10);
         _this.child14.visible = false;
        
         _this.circles14 = _this.add.sprite(537,432,'NSN2circle9');
         _this.circles14.anchor.setTo(0.5);
         _this.circles14.addChild(_this.child14);
         _this.circles14.visible=false;
        
         _this.child15 = _this.add.graphics(-10, -10);
         _this.child15.lineStyle(2, 0x0000FF, 1);
         _this.child15.drawRect(5, 5, 10, 10);
         _this.child15.visible = false;
        
         _this.circles15 = _this.add.sprite(582,432,'NSN2circle9');
         _this.circles15.anchor.setTo(0.5);
         _this.circles15.addChild(_this.child15);
         _this.circles15.visible=false;
        
         _this.child16 = _this.add.graphics(-10, -10);
         _this.child16.lineStyle(2, 0x0000FF, 1);
         _this.child16.drawRect(5, 5, 10, 10);
         _this.child16.visible = false;
        
         _this.circles16 = _this.add.sprite(627,432,'NSN2circle9');
         _this.circles16.anchor.setTo(0.5);
         _this.circles16.addChild(_this.child16);
         _this.circles16.visible=false;
        
         _this.child17 = _this.add.graphics(-10, -10);
         _this.child17.lineStyle(2, 0x0000FF, 1);
         _this.child17.drawRect(5, 5, 10, 10);
         _this.child17.visible = false;
        
         _this.circles17 = _this.add.sprite(672,432,'NSN2circle9');
         _this.circles17.anchor.setTo(0.5);
         _this.circles17.addChild(_this.child17);
         _this.circles17.visible=false;
        
         _this.child18 = _this.add.graphics(-10, -10);
         _this.child18.lineStyle(2, 0x0000FF, 1);
         _this.child18.drawRect(5, 5, 10, 10);
         _this.child18.visible = false;
        
         _this.circles18 = _this.add.sprite(717,432,'NSN2circle9');
         _this.circles18.anchor.setTo(0.5);
         _this.circles18.addChild(_this.child18);
         _this.circles18.visible=false;
        
         _this.child21 = _this.add.graphics(-10, -10);
         _this.child21.lineStyle(2, 0x0000FF, 1);
         _this.child21.drawRect(5, 5, 10, 10);
         _this.child21.visible = false;
        
         _this.circles21 = _this.add.sprite(425,392,'NSN2circle9');
         _this.circles21.anchor.setTo(0.5);
         _this.circles21.addChild(_this.child21);
         _this.circles21.visible=false;
        
         _this.child22 = _this.add.graphics(-10, -10);
         _this.child22.lineStyle(2, 0x0000FF, 1);
         _this.child22.drawRect(5, 5, 10, 10);
         _this.child22.visible = false;
        
         _this.circles22 = _this.add.sprite(470,392,'NSN2circle9');
         _this.circles22.anchor.setTo(0.5);
         _this.circles22.addChild(_this.child22);
         _this.circles22.visible=false;
        
         _this.child23 = _this.add.graphics(-10, -10);
         _this.child23.lineStyle(2, 0x0000FF, 1);
         _this.child23.drawRect(5, 5, 10, 10);
         _this.child23.visible = false;
        
         _this.circles23 = _this.add.sprite(515,392,'NSN2circle9');
         _this.circles23.anchor.setTo(0.5);
         _this.circles23.addChild(_this.child23);
         _this.circles23.visible=false;
        
         _this.child24 = _this.add.graphics(-10, -10);
         _this.child24.lineStyle(2, 0x0000FF, 1);
         _this.child24.drawRect(5, 5, 10, 10);
         _this.child24.visible = false;
        
         _this.circles24 = _this.add.sprite(560,392,'NSN2circle9');
         _this.circles24.anchor.setTo(0.5);
         _this.circles24.addChild(_this.child24);
         _this.circles24.visible=false;
        
         _this.child25 = _this.add.graphics(-10, -10);
         _this.child25.lineStyle(2, 0x0000FF, 1);
         _this.child25.drawRect(5, 5, 10, 10);
         _this.child25.visible = false;
        
         _this.circles25 = _this.add.sprite(605,392,'NSN2circle9');
         _this.circles25.anchor.setTo(0.5);
         _this.circles25.addChild(_this.child25);
         _this.circles25.visible=false;
        
         _this.child26 = _this.add.graphics(-10, -10);
         _this.child26.lineStyle(2, 0x0000FF, 1);
         _this.child26.drawRect(5, 5, 10, 10);
         _this.child26.visible = false;
        
         _this.circles26 = _this.add.sprite(650,392,'NSN2circle9');
         _this.circles26.anchor.setTo(0.5);
         _this.circles26.addChild(_this.child26);
         _this.circles26.visible=false;
        
         _this.child27 = _this.add.graphics(-10, -10);
         _this.child27.lineStyle(2, 0x0000FF, 1);
         _this.child27.drawRect(5, 5, 10, 10);
         _this.child27.visible = false;
        
         _this.circles27 = _this.add.sprite(695,392,'NSN2circle9');
         _this.circles27.anchor.setTo(0.5);
         _this.circles27.addChild(_this.child27);
         _this.circles27.visible=false;
        
         _this.child31 = _this.add.graphics(-10, -10);
         _this.child31.lineStyle(2, 0x0000FF, 1);
         _this.child31.drawRect(5, 5, 10, 10);
         _this.child31.visible = false;
        
         _this.circles31 = _this.add.sprite(447,352,'NSN2circle9');
         _this.circles31.anchor.setTo(0.5);
         _this.circles31.addChild(_this.child31);
         _this.circles31.visible=false;
        
         _this.child32 = _this.add.graphics(-10, -10);
         _this.child32.lineStyle(2, 0x0000FF, 1);
         _this.child32.drawRect(5, 5, 10, 10);
         _this.child32.visible = false;
        
         _this.circles32 = _this.add.sprite(492,352,'NSN2circle9');
         _this.circles32.anchor.setTo(0.5);
         _this.circles32.addChild(_this.child32);
         _this.circles32.visible=false;
        
         _this.child33 = _this.add.graphics(-10, -10);
         _this.child33.lineStyle(2, 0x0000FF, 1);
         _this.child33.drawRect(5, 5, 10, 10);
         _this.child33.visible = false;
        
         _this.circles33 = _this.add.sprite(537,352,'NSN2circle9');
         _this.circles33.anchor.setTo(0.5);
         _this.circles33.addChild(_this.child33);
         _this.circles33.visible=false;
        
         _this.child34 = _this.add.graphics(-10, -10);
         _this.child34.lineStyle(2, 0x0000FF, 1);
         _this.child34.drawRect(5, 5, 10, 10);
         _this.child34.visible = false;
        
         _this.circles34 = _this.add.sprite(582,352,'NSN2circle9');
         _this.circles34.anchor.setTo(0.5);
         _this.circles34.addChild(_this.child34);
         _this.circles34.visible=false;
        
         _this.child35 = _this.add.graphics(-10, -10);
         _this.child35.lineStyle(2, 0x0000FF, 1);
         _this.child35.drawRect(5, 5, 10, 10);
         _this.child35.visible = false;
        
         _this.circles35 = _this.add.sprite(627,352,'NSN2circle9');
         _this.circles35.anchor.setTo(0.5);
         _this.circles35.addChild(_this.child35);
         _this.circles35.visible=false;
        
         _this.child36 = _this.add.graphics(-10, -10);
         _this.child36.lineStyle(2, 0x0000FF, 1);
         _this.child36.drawRect(5, 5, 10, 10);
         _this.child36.visible = false;
        
         _this.circles36 = _this.add.sprite(672,352,'NSN2circle9');
         _this.circles36.anchor.setTo(0.5);
         _this.circles36.addChild(_this.child36);
         _this.circles36.visible=false;
        
         _this.child41 = _this.add.graphics(-10, -10);
         _this.child41.lineStyle(2, 0x0000FF, 1);
         _this.child41.drawRect(5, 5, 10, 10);
         _this.child41.visible = false;
        
         _this.circles41 = _this.add.sprite(470,312,'NSN2circle9');
         _this.circles41.anchor.setTo(0.5);
         _this.circles41.addChild(_this.child41);
         _this.circles41.visible=false;
        
         _this.child42 = _this.add.graphics(-10, -10);
         _this.child42.lineStyle(2, 0x0000FF, 1);
         _this.child42.drawRect(5, 5, 10, 10);
         _this.child42.visible = false;
        
         _this.circles42 = _this.add.sprite(515,312,'NSN2circle9');
         _this.circles42.anchor.setTo(0.5);
         _this.circles42.addChild(_this.child42);
         _this.circles42.visible=false;
        
         _this.child43 = _this.add.graphics(-10, -10);
         _this.child43.lineStyle(2, 0x0000FF, 1);
         _this.child43.drawRect(5, 5, 10, 10);
         _this.child43.visible = false;
        
         _this.circles43 = _this.add.sprite(560,312,'NSN2circle9');
         _this.circles43.anchor.setTo(0.5);
         _this.circles43.addChild(_this.child43);
         _this.circles43.visible=false;
        
         _this.child44 = _this.add.graphics(-10, -10);
         _this.child44.lineStyle(2, 0x0000FF, 1);
         _this.child44.drawRect(5, 5, 10, 10);
         _this.child44.visible = false;
        
         _this.circles44 = _this.add.sprite(605,312,'NSN2circle9');
         _this.circles44.anchor.setTo(0.5);
         _this.circles44.addChild(_this.child44);
         _this.circles44.visible=false;
        
         _this.child45 = _this.add.graphics(-10, -10);
         _this.child45.lineStyle(2, 0x0000FF, 1);
         _this.child45.drawRect(5, 5, 10, 10);
         _this.child45.visible = false;
        
         _this.circles45 = _this.add.sprite(650,312,'NSN2circle9');
         _this.circles45.anchor.setTo(0.5);
         _this.circles45.addChild(_this.child45);
         _this.circles45.visible=false;
        
         _this.child51 = _this.add.graphics(-10, -10);
         _this.child51.lineStyle(2, 0x0000FF, 1);
         _this.child51.drawRect(5, 5, 10, 10);
         _this.child51.visible = false;
        
         _this.circles51 = _this.add.sprite(492,272,'NSN2circle9');
         _this.circles51.anchor.setTo(0.5);
         _this.circles51.addChild(_this.child51);
         _this.circles51.visible=false;
        
         _this.child52 = _this.add.graphics(-10, -10);
         _this.child52.lineStyle(2, 0x0000FF, 1);
         _this.child52.drawRect(5, 5, 10, 10);
         _this.child52.visible = false;
         
         _this.circles52 = _this.add.sprite(537,272,'NSN2circle9');
         _this.circles52.anchor.setTo(0.5);
         _this.circles52.addChild(_this.child52);
         _this.circles52.visible=false;
        
         _this.child53 = _this.add.graphics(-10, -10);
         _this.child53.lineStyle(2, 0x0000FF, 1);
         _this.child53.drawRect(5, 5, 10, 10);
         _this.child53.visible = false;
        
         _this.circles53 = _this.add.sprite(582,272,'NSN2circle9');
         _this.circles53.anchor.setTo(0.5);
         _this.circles53.addChild(_this.child53);
         _this.circles53.visible=false;
        
         _this.child54 = _this.add.graphics(-10, -10);
         _this.child54.lineStyle(2, 0x0000FF, 1);
         _this.child54.drawRect(5, 5, 10, 10);
         _this.child54.visible = false;
        
         _this.circles54 = _this.add.sprite(627,272,'NSN2circle9');
         _this.circles54.anchor.setTo(0.5);
         _this.circles54.addChild(_this.child54);
         _this.circles54.visible=false;
        
         _this.child61 = _this.add.graphics(-10, -10);
         _this.child61.lineStyle(2, 0x0000FF, 1);
         _this.child61.drawRect(5, 5, 10, 10);
         _this.child61.visible = false;
        
         _this.circles61 = _this.add.sprite(514,232,'NSN2circle9');
         _this.circles61.anchor.setTo(0.5);
         _this.circles61.addChild(_this.child61);
         _this.circles61.visible=false;
        
         _this.child62 = _this.add.graphics(-10, -10);
         _this.child62.lineStyle(2, 0x0000FF, 1);
         _this.child62.drawRect(5, 5, 10, 10);
         _this.child62.visible = false;

         _this.circles62 = _this.add.sprite(559,232,'NSN2circle9');
         _this.circles62.anchor.setTo(0.5);
         _this.circles62.addChild(_this.child62);
         _this.circles62.visible=false;
        
         _this.child63 = _this.add.graphics(-10, -10);
         _this.child63.lineStyle(2, 0x0000FF, 1);
         _this.child63.drawRect(5, 5, 10, 10);
         _this.child63.visible = false;
        
         _this.circles63 = _this.add.sprite(604,232,'NSN2circle9');
         _this.circles63.anchor.setTo(0.5);
         _this.circles63.addChild(_this.child63);
         _this.circles63.visible=false;
        
         _this.child71 = _this.add.graphics(-10, -10);
         _this.child71.lineStyle(2, 0x0000FF, 1);
         _this.child71.drawRect(5, 5, 10, 10);
         _this.child71.visible = false;
        
         _this.circles71 = _this.add.sprite(537,192,'NSN2circle9');
         _this.circles71.anchor.setTo(0.5);
         _this.circles71.addChild(_this.child71);
         _this.circles71.visible=false;
        
         _this.child72 = _this.add.graphics(-10, -10);
         _this.child72.lineStyle(2, 0x0000FF, 1);
         _this.child72.drawRect(5, 5, 10, 10);
         _this.child72.visible = false;
        
         _this.circles72 = _this.add.sprite(582,192,'NSN2circle9');
         _this.circles72.anchor.setTo(0.5);
         _this.circles72.addChild(_this.child72);
         _this.circles72.visible=false;
        
         _this.child81 = _this.add.graphics(-10, -10);
         _this.child81.lineStyle(2, 0x0000FF, 1);
         _this.child81.drawRect(5, 5, 10, 10);
         _this.child81.visible = false;
        
         _this.circles81 = _this.add.sprite(559,152,'NSN2circle9');
         _this.circles81.anchor.setTo(0.5);
         _this.circles81.addChild(_this.child81);
         _this.circles81.visible=false;
        
         _this.num=36;
        
         _this.boxGrp.add(_this.mainbox);
         _this.boxGrp.add(_this.box);
         _this.boxGrp.add(_this.text1);
         _this.boxGrp.add(_this.rightmark);
         _this.boxGrp.add(_this.wrongmark);
         _this.boxGrp.add(_this.tick);
        
         _this.objGrp2.add(_this.circles11); _this.objGrp2.add(_this.circles12);
         _this.objGrp2.add(_this.circles13); _this.objGrp2.add(_this.circles14);
         _this.objGrp2.add(_this.circles15); _this.objGrp2.add(_this.circles16);
         _this.objGrp2.add(_this.circles17); _this.objGrp2.add(_this.circles18);
         _this.objGrp2.add(_this.circles21); _this.objGrp2.add(_this.circles22); 
         _this.objGrp2.add(_this.circles23); _this.objGrp2.add(_this.circles24); 
         _this.objGrp2.add(_this.circles25); _this.objGrp2.add(_this.circles26); 
         _this.objGrp2.add(_this.circles27); _this.objGrp2.add(_this.circles31); 
         _this.objGrp2.add(_this.circles32); _this.objGrp2.add(_this.circles33); 
         _this.objGrp2.add(_this.circles34); _this.objGrp2.add(_this.circles35); 
         _this.objGrp2.add(_this.circles36); _this.objGrp2.add(_this.circles41); 
         _this.objGrp2.add(_this.circles42); _this.objGrp2.add(_this.circles43); 
         _this.objGrp2.add(_this.circles44); _this.objGrp2.add(_this.circles45);
         _this.objGrp2.add(_this.circles51); _this.objGrp2.add(_this.circles52);
         _this.objGrp2.add(_this.circles53); _this.objGrp2.add(_this.circles54);
         _this.objGrp2.add(_this.circles61); _this.objGrp2.add(_this.circles62); 
         _this.objGrp2.add(_this.circles63); _this.objGrp2.add(_this.circles71); 
         _this.objGrp2.add(_this.circles72); _this.objGrp2.add(_this.circles81); 
         
         _this.objGrp1.add(_this.circle1); _this.objGrp1.add(_this.circle2); 
         _this.objGrp1.add(_this.circle3); _this.objGrp1.add(_this.circle4);
         _this.objGrp1.add(_this.circle5); _this.objGrp1.add(_this.circle6);
         _this.objGrp1.add(_this.circle7); _this.objGrp1.add(_this.circle8);
         _this.objGrp1.add(_this.circle9); _this.objGrp1.add(_this.circle10);
         _this.objGrp1.add(_this.circle11); _this.objGrp1.add(_this.circle12);
         _this.objGrp1.add(_this.circle13); _this.objGrp1.add(_this.circle14);
         _this.objGrp1.add(_this.circle15); _this.objGrp1.add(_this.circle16);
         _this.objGrp1.add(_this.circle17); _this.objGrp1.add(_this.circle18);
         _this.objGrp1.add(_this.circle19); _this.objGrp1.add(_this.circle20);
         _this.objGrp1.add(_this.circle21); _this.objGrp1.add(_this.circle22);
         _this.objGrp1.add(_this.circle23); _this.objGrp1.add(_this.circle24);
         _this.objGrp1.add(_this.circle25); _this.objGrp1.add(_this.circle26);
         _this.objGrp1.add(_this.circle27); _this.objGrp1.add(_this.circle28);
         _this.objGrp1.add(_this.circle29); _this.objGrp1.add(_this.circle30);
         _this.objGrp1.add(_this.circle31); _this.objGrp1.add(_this.circle32); 
         _this.objGrp1.add(_this.circle33); _this.objGrp1.add(_this.circle34);
         _this.objGrp1.add(_this.circle35); _this.objGrp1.add(_this.circle36);
         
        
    },
    
    gotoSixthQuestion:function(){

         _this.questionNo = 6;
         _this.opt=2;
         _this.boxGrp = _this.add.group(); 
         _this.objGrp2 = _this.add.group();
         _this.objGrp1 = _this.add.group();
        
        if(_this.voce_tri==0)
             {
                 _this.getVoice();
                 _this.voce_tri++;
             }
         
         _this.mainbox = _this.add.sprite(190,282,'NSN2mainbox');
         _this.mainbox.anchor.setTo(0.5);
         
         _this.box = _this.add.sprite(560,282,'NSN2trianglebox');
         _this.box.anchor.setTo(0.5);
         
         _this.rightmark = _this.add.sprite(860,150,'NSN2icon3');
         _this.rightmark.anchor.setTo(0.5);
         
         _this.wrongmark = _this.add.sprite(860,260,'NSN2icon4');
         _this.wrongmark.anchor.setTo(0.5);
         
         _this.tick = _this.add.sprite(860,420,'NSN2tick');
         _this.tick.anchor.setTo(0.5);
         
         _this.text1 = _this.add.text(287,132,"29");
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#000000";
         _this.fontWeight = 'normal';
         _this.text1.fontSize = 30;
        
         _this.circle1 = _this.add.sprite(98,130,'NSN2circle1');
         _this.circle1.anchor.setTo(0.5);
         _this.circle1.inputEnabled = true;
         _this.circle1.events.onInputDown.add(_this.onDragstart,_this);
        
         _this.circle2 = _this.add.sprite(133,130,'NSN2circle1');
         _this.circle2.anchor.setTo(0.5);
         _this.circle2.inputEnabled = true;
         _this.circle2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle3 = _this.add.sprite(168,130,'NSN2circle1');
         _this.circle3.anchor.setTo(0.5);
         _this.circle3.inputEnabled = true;
         _this.circle3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle4 = _this.add.sprite(203,130,'NSN2circle1');
         _this.circle4.anchor.setTo(0.5);
         _this.circle4.inputEnabled = true;
         _this.circle4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle5 = _this.add.sprite(238,130,'NSN2circle1');
         _this.circle5.anchor.setTo(0.5);
         _this.circle5.inputEnabled = true;
         _this.circle5.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle6 = _this.add.sprite(98,164,'NSN2circle1');
         _this.circle6.anchor.setTo(0.5);
         _this.circle6.inputEnabled = true;
         _this.circle6.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle7 = _this.add.sprite(133,164,'NSN2circle1');
         _this.circle7.anchor.setTo(0.5);
         _this.circle7.inputEnabled = true;
         _this.circle7.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle8 = _this.add.sprite(168,164,'NSN2circle1');
         _this.circle8.anchor.setTo(0.5);
         _this.circle8.inputEnabled = true;
         _this.circle8.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle9 = _this.add.sprite(203,164,'NSN2circle1');
         _this.circle9.anchor.setTo(0.5);
         _this.circle9.inputEnabled = true;
         _this.circle9.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle10 = _this.add.sprite(238,164,'NSN2circle1');
         _this.circle10.anchor.setTo(0.5);
         _this.circle10.inputEnabled = true;
         _this.circle10.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle11 = _this.add.sprite(98,199,'NSN2circle1');
         _this.circle11.anchor.setTo(0.5);
         _this.circle11.inputEnabled = true;
         _this.circle11.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle12 = _this.add.sprite(133,199,'NSN2circle1');
         _this.circle12.anchor.setTo(0.5);
         _this.circle12.inputEnabled = true;
         _this.circle12.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle13 = _this.add.sprite(168,199,'NSN2circle1');
         _this.circle13.anchor.setTo(0.5);
         _this.circle13.inputEnabled = true;
         _this.circle13.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle14 = _this.add.sprite(203,199,'NSN2circle1');
         _this.circle14.anchor.setTo(0.5);
         _this.circle14.inputEnabled = true;
         _this.circle14.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle15 = _this.add.sprite(238,199,'NSN2circle1');
         _this.circle15.anchor.setTo(0.5);
         _this.circle15.inputEnabled = true;
         _this.circle15.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle16 = _this.add.sprite(98,233,'NSN2circle1');
         _this.circle16.anchor.setTo(0.5);
         _this.circle16.inputEnabled = true;
         _this.circle16.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle17 = _this.add.sprite(133,233,'NSN2circle1');
         _this.circle17.anchor.setTo(0.5);
         _this.circle17.inputEnabled = true;
         _this.circle17.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle18 = _this.add.sprite(168,233,'NSN2circle1');
         _this.circle18.anchor.setTo(0.5);
         _this.circle18.inputEnabled = true;
         _this.circle18.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle19 = _this.add.sprite(203,233,'NSN2circle1');
         _this.circle19.anchor.setTo(0.5);
         _this.circle19.inputEnabled = true;
         _this.circle19.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle20 = _this.add.sprite(238,233,'NSN2circle1');
         _this.circle20.anchor.setTo(0.5);
         _this.circle20.inputEnabled = true;
         _this.circle20.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle21 = _this.add.sprite(98,268,'NSN2circle1');
         _this.circle21.anchor.setTo(0.5);
         _this.circle21.inputEnabled = true;
         _this.circle21.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle22 = _this.add.sprite(133,268,'NSN2circle1');
         _this.circle22.anchor.setTo(0.5);
         _this.circle22.inputEnabled = true;
         _this.circle22.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle23 = _this.add.sprite(168,268,'NSN2circle1');
         _this.circle23.anchor.setTo(0.5);
         _this.circle23.inputEnabled = true;
         _this.circle23.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle24 = _this.add.sprite(203,268,'NSN2circle1');
         _this.circle24.anchor.setTo(0.5);
         _this.circle24.inputEnabled = true;
         _this.circle24.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle25 = _this.add.sprite(238,268,'NSN2circle1');
         _this.circle25.anchor.setTo(0.5);
         _this.circle25.inputEnabled = true;
         _this.circle25.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle26 = _this.add.sprite(98,303,'NSN2circle1');
         _this.circle26.anchor.setTo(0.5);
         _this.circle26.inputEnabled = true;
         _this.circle26.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle27 = _this.add.sprite(133,303,'NSN2circle1');
         _this.circle27.anchor.setTo(0.5);
         _this.circle27.inputEnabled = true;
         _this.circle27.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle28 = _this.add.sprite(168,303,'NSN2circle1');
         _this.circle28.anchor.setTo(0.5);
         _this.circle28.inputEnabled = true;
         _this.circle28.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle29 = _this.add.sprite(203,303,'NSN2circle1');
         _this.circle29.anchor.setTo(0.5);
         _this.circle29.inputEnabled = true;
         _this.circle29.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.child11 = _this.add.graphics(-10, -10);
         _this.child11.lineStyle(2, 0x0000FF, 1);
         _this.child11.drawRect(5, 5, 10, 10);
         _this.child11.visible = false;
        
         _this.circles11 = _this.add.sprite(407,430,'NSN2circle8');
         _this.circles11.anchor.setTo(0.5);
         _this.circles11.addChild(_this.child11);
         _this.circles11.visible=false;
        
         _this.child12 = _this.add.graphics(-10, -10);
         _this.child12.lineStyle(2, 0x0000FF, 1);
         _this.child12.drawRect(5, 5, 10, 10);
         _this.child12.visible = false;
        
         _this.circles12 = _this.add.sprite(458,430,'NSN2circle8');
         _this.circles12.anchor.setTo(0.5);
         _this.circles12.addChild(_this.child12);
         _this.circles12.visible=false;
        
         _this.child13 = _this.add.graphics(-10, -10);
         _this.child13.lineStyle(2, 0x0000FF, 1);
         _this.child13.drawRect(5, 5, 10, 10);
         _this.child13.visible = false;
        
         _this.circles13 = _this.add.sprite(509,430,'NSN2circle8');
         _this.circles13.anchor.setTo(0.5);
         _this.circles13.addChild(_this.child13);
         _this.circles13.visible=false;
        
         _this.child14 = _this.add.graphics(-10, -10);
         _this.child14.lineStyle(2, 0x0000FF, 1);
         _this.child14.drawRect(5, 5, 10, 10);
         _this.child14.visible = false;
        
         _this.circles14 = _this.add.sprite(560,430,'NSN2circle8');
         _this.circles14.anchor.setTo(0.5);
         _this.circles14.addChild(_this.child14);
         _this.circles14.visible=false;
        
         _this.child15 = _this.add.graphics(-10, -10);
         _this.child15.lineStyle(2, 0x0000FF, 1);
         _this.child15.drawRect(5, 5, 10, 10);
         _this.child15.visible = false;
        
         _this.circles15 = _this.add.sprite(611,430,'NSN2circle8');
         _this.circles15.anchor.setTo(0.5);
         _this.circles15.addChild(_this.child15);
         _this.circles15.visible=false;
        
         _this.child16 = _this.add.graphics(-10, -10);
         _this.child16.lineStyle(2, 0x0000FF, 1);
         _this.child16.drawRect(5, 5, 10, 10);
         _this.child16.visible = false;
        
         _this.circles16 = _this.add.sprite(662,430,'NSN2circle8');
         _this.circles16.anchor.setTo(0.5);
         _this.circles16.addChild(_this.child16);
         _this.circles16.visible=false;
        
         _this.child17 = _this.add.graphics(-10, -10);
         _this.child17.lineStyle(2, 0x0000FF, 1);
         _this.child17.drawRect(5, 5, 10, 10);
         _this.child17.visible = false;
        
         _this.circles17 = _this.add.sprite(713,430,'NSN2circle8');
         _this.circles17.anchor.setTo(0.5);
         _this.circles17.addChild(_this.child17);
         _this.circles17.visible=false;
        
         _this.child21 = _this.add.graphics(-10, -10);
         _this.child21.lineStyle(2, 0x0000FF, 1);
         _this.child21.drawRect(5, 5, 10, 10);
         _this.child21.visible = false;
        
         _this.circles21 = _this.add.sprite(433,385,'NSN2circle8');
         _this.circles21.anchor.setTo(0.5);
         _this.circles21.addChild(_this.child21);
         _this.circles21.visible=false;
        
         _this.child22 = _this.add.graphics(-10, -10);
         _this.child22.lineStyle(2, 0x0000FF, 1);
         _this.child22.drawRect(5, 5, 10, 10);
         _this.child22.visible = false;
        
         _this.circles22 = _this.add.sprite(484,385,'NSN2circle8');
         _this.circles22.anchor.setTo(0.5);
         _this.circles22.addChild(_this.child22);
         _this.circles22.visible=false;
        
         _this.child23 = _this.add.graphics(-10, -10);
         _this.child23.lineStyle(2, 0x0000FF, 1);
         _this.child23.drawRect(5, 5, 10, 10);
         _this.child23.visible = false;
        
         _this.circles23 = _this.add.sprite(535,385,'NSN2circle8');
         _this.circles23.anchor.setTo(0.5);
         _this.circles23.addChild(_this.child23);
         _this.circles23.visible=false;
        
         _this.child24 = _this.add.graphics(-10, -10);
         _this.child24.lineStyle(2, 0x0000FF, 1);
         _this.child24.drawRect(5, 5, 10, 10);
         _this.child24.visible = false;
        
         _this.circles24 = _this.add.sprite(586,385,'NSN2circle8');
         _this.circles24.anchor.setTo(0.5);
         _this.circles24.addChild(_this.child24);
         _this.circles24.visible=false;
        
         _this.child25 = _this.add.graphics(-10, -10);
         _this.child25.lineStyle(2, 0x0000FF, 1);
         _this.child25.drawRect(5, 5, 10, 10);
         _this.child25.visible = false;
        
         _this.circles25 = _this.add.sprite(637,385,'NSN2circle8');
         _this.circles25.anchor.setTo(0.5);
         _this.circles25.addChild(_this.child25);
         _this.circles25.visible=false;
        
         _this.child26 = _this.add.graphics(-10, -10);
         _this.child26.lineStyle(2, 0x0000FF, 1);
         _this.child26.drawRect(5, 5, 10, 10);
         _this.child26.visible = false;
        
         _this.circles26 = _this.add.sprite(688,385,'NSN2circle8');
         _this.circles26.anchor.setTo(0.5);
         _this.circles26.addChild(_this.child26);
         _this.circles26.visible=false;
        
         _this.child31 = _this.add.graphics(-10, -10);
         _this.child31.lineStyle(2, 0x0000FF, 1);
         _this.child31.drawRect(5, 5, 10, 10);
         _this.child31.visible = false;
        
         _this.circles31 = _this.add.sprite(459,340,'NSN2circle8');
         _this.circles31.anchor.setTo(0.5);
         _this.circles31.addChild(_this.child31);
         _this.circles31.visible=false;
        
         _this.child32 = _this.add.graphics(-10, -10);
         _this.child32.lineStyle(2, 0x0000FF, 1);
         _this.child32.drawRect(5, 5, 10, 10);
         _this.child32.visible = false;
        
         _this.circles32 = _this.add.sprite(510,340,'NSN2circle8');
         _this.circles32.anchor.setTo(0.5);
         _this.circles32.addChild(_this.child32);
         _this.circles32.visible=false;
        
         _this.child33 = _this.add.graphics(-10, -10);
         _this.child33.lineStyle(2, 0x0000FF, 1);
         _this.child33.drawRect(5, 5, 10, 10);
         _this.child33.visible = false;
        
         _this.circles33 = _this.add.sprite(561,340,'NSN2circle8');
         _this.circles33.anchor.setTo(0.5);
         _this.circles33.addChild(_this.child33);
         _this.circles33.visible=false;
        
         _this.child34 = _this.add.graphics(-10, -10);
         _this.child34.lineStyle(2, 0x0000FF, 1);
         _this.child34.drawRect(5, 5, 10, 10);
         _this.child34.visible = false;
        
         _this.circles34 = _this.add.sprite(612,340,'NSN2circle8');
         _this.circles34.anchor.setTo(0.5);
         _this.circles34.addChild(_this.child34);
         _this.circles34.visible=false;
        
         _this.child35 = _this.add.graphics(-10, -10);
         _this.child35.lineStyle(2, 0x0000FF, 1);
         _this.child35.drawRect(5, 5, 10, 10);
         _this.child35.visible = false;
        
         _this.circles35 = _this.add.sprite(663,340,'NSN2circle8');
         _this.circles35.anchor.setTo(0.5);
         _this.circles35.addChild(_this.child35);
         _this.circles35.visible=false;
        
         _this.child41 = _this.add.graphics(-10, -10);
         _this.child41.lineStyle(2, 0x0000FF, 1);
         _this.child41.drawRect(5, 5, 10, 10);
         _this.child41.visible = false;
        
         _this.circles41 = _this.add.sprite(484,295,'NSN2circle8');
         _this.circles41.anchor.setTo(0.5);
         _this.circles41.addChild(_this.child41);
         _this.circles41.visible=false;
        
         _this.child42 = _this.add.graphics(-10, -10);
         _this.child42.lineStyle(2, 0x0000FF, 1);
         _this.child42.drawRect(5, 5, 10, 10);
         _this.child42.visible = false;
        
         _this.circles42 = _this.add.sprite(536,295,'NSN2circle8');
         _this.circles42.anchor.setTo(0.5);
         _this.circles42.addChild(_this.child42);
         _this.circles42.visible=false;
        
         _this.child43 = _this.add.graphics(-10, -10);
         _this.child43.lineStyle(2, 0x0000FF, 1);
         _this.child43.drawRect(5, 5, 10, 10);
         _this.child43.visible = false;
        
         _this.circles43 = _this.add.sprite(588,295,'NSN2circle8');
         _this.circles43.anchor.setTo(0.5);
         _this.circles43.addChild(_this.child43);
         _this.circles43.visible=false;
        
         _this.child44 = _this.add.graphics(-10, -10);
         _this.child44.lineStyle(2, 0x0000FF, 1);
         _this.child44.drawRect(5, 5, 10, 10);
         _this.child44.visible = false;
        
         _this.circles44 = _this.add.sprite(639,295,'NSN2circle8');
         _this.circles44.anchor.setTo(0.5);
         _this.circles44.addChild(_this.child44);
         _this.circles44.visible=false;
        
         _this.child51 = _this.add.graphics(-10, -10);
         _this.child51.lineStyle(2, 0x0000FF, 1);
         _this.child51.drawRect(5, 5, 10, 10);
         _this.child51.visible = false;
        
         _this.circles51 = _this.add.sprite(510,250,'NSN2circle8');
         _this.circles51.anchor.setTo(0.5);
         _this.circles51.addChild(_this.child51);
         _this.circles51.visible=false;
        
         _this.child52 = _this.add.graphics(-10, -10);
         _this.child52.lineStyle(2, 0x0000FF, 1);
         _this.child52.drawRect(5, 5, 10, 10);
         _this.child52.visible = false;
         
         _this.circles52 = _this.add.sprite(561,250,'NSN2circle8');
         _this.circles52.anchor.setTo(0.5);
         _this.circles52.addChild(_this.child52);
         _this.circles52.visible=false;
        
         _this.child53 = _this.add.graphics(-10, -10);
         _this.child53.lineStyle(2, 0x0000FF, 1);
         _this.child53.drawRect(5, 5, 10, 10);
         _this.child53.visible = false;
        
         _this.circles53 = _this.add.sprite(613,250,'NSN2circle8');
         _this.circles53.anchor.setTo(0.5);
         _this.circles53.addChild(_this.child53);
         _this.circles53.visible=false;
        
         _this.child61 = _this.add.graphics(-10, -10);
         _this.child61.lineStyle(2, 0x0000FF, 1);
         _this.child61.drawRect(5, 5, 10, 10);
         _this.child61.visible = false;
        
         _this.circles61 = _this.add.sprite(535,205,'NSN2circle8');
         _this.circles61.anchor.setTo(0.5);
         _this.circles61.addChild(_this.child61);
         _this.circles61.visible=false;
        
         _this.child62 = _this.add.graphics(-10, -10);
         _this.child62.lineStyle(2, 0x0000FF, 1);
         _this.child62.drawRect(5, 5, 10, 10);
         _this.child62.visible = false;

         _this.circles62 = _this.add.sprite(587,205,'NSN2circle8');
         _this.circles62.anchor.setTo(0.5);
         _this.circles62.addChild(_this.child62);
         _this.circles62.visible=false;
        
         _this.child71 = _this.add.graphics(-10, -10);
         _this.child71.lineStyle(2, 0x0000FF, 1);
         _this.child71.drawRect(5, 5, 10, 10);
         _this.child71.visible = false;
        
         _this.circles71 = _this.add.sprite(561,160,'NSN2circle8');
         _this.circles71.anchor.setTo(0.5);
         _this.circles71.addChild(_this.child71);
         _this.circles71.visible=false;
        
         _this.num=28;
        
         _this.boxGrp.add(_this.mainbox);
         _this.boxGrp.add(_this.box);
         _this.boxGrp.add(_this.text1);
         _this.boxGrp.add(_this.rightmark);
         _this.boxGrp.add(_this.wrongmark);
         _this.boxGrp.add(_this.tick);
        
         _this.objGrp2.add(_this.circles11); _this.objGrp2.add(_this.circles12);
         _this.objGrp2.add(_this.circles13); _this.objGrp2.add(_this.circles14);
         _this.objGrp2.add(_this.circles15); _this.objGrp2.add(_this.circles16);
         _this.objGrp2.add(_this.circles17); _this.objGrp2.add(_this.circles21); _this.objGrp2.add(_this.circles22); _this.objGrp2.add(_this.circles23); _this.objGrp2.add(_this.circles24); _this.objGrp2.add(_this.circles25); _this.objGrp2.add(_this.circles26); _this.objGrp2.add(_this.circles31); 
         _this.objGrp2.add(_this.circles32); _this.objGrp2.add(_this.circles33); 
         _this.objGrp2.add(_this.circles34); _this.objGrp2.add(_this.circles35); 
         _this.objGrp2.add(_this.circles41); _this.objGrp2.add(_this.circles42); _this.objGrp2.add(_this.circles43); _this.objGrp2.add(_this.circles44);
         _this.objGrp2.add(_this.circles51); _this.objGrp2.add(_this.circles52);
         _this.objGrp2.add(_this.circles53); _this.objGrp2.add(_this.circles61); _this.objGrp2.add(_this.circles62); _this.objGrp2.add(_this.circles71); 
         
         _this.objGrp1.add(_this.circle1); _this.objGrp1.add(_this.circle2); 
         _this.objGrp1.add(_this.circle3); _this.objGrp1.add(_this.circle4);
         _this.objGrp1.add(_this.circle5); _this.objGrp1.add(_this.circle6);
         _this.objGrp1.add(_this.circle7); _this.objGrp1.add(_this.circle8);
         _this.objGrp1.add(_this.circle9); _this.objGrp1.add(_this.circle10);
         _this.objGrp1.add(_this.circle11); _this.objGrp1.add(_this.circle12);
         _this.objGrp1.add(_this.circle13); _this.objGrp1.add(_this.circle14);
         _this.objGrp1.add(_this.circle15); _this.objGrp1.add(_this.circle16);
         _this.objGrp1.add(_this.circle17); _this.objGrp1.add(_this.circle18);
         _this.objGrp1.add(_this.circle19); _this.objGrp1.add(_this.circle20);
         _this.objGrp1.add(_this.circle21); _this.objGrp1.add(_this.circle22);
         _this.objGrp1.add(_this.circle23); _this.objGrp1.add(_this.circle24);
         _this.objGrp1.add(_this.circle25); _this.objGrp1.add(_this.circle26);
         _this.objGrp1.add(_this.circle27); _this.objGrp1.add(_this.circle28);
         _this.objGrp1.add(_this.circle29); 
    },
    
    gotoSeventhQuestion:function(){

         _this.questionNo = 7;
         _this.opt=1;
         _this.boxGrp = _this.add.group(); 
         _this.objGrp2 = _this.add.group();
         _this.objGrp1 = _this.add.group();
       
        if(_this.voce_tri==0)
             {
                 _this.getVoice();
                 _this.voce_tri++;
             }
        
         _this.mainbox = _this.add.sprite(190,282,'NSN2mainbox');
         _this.mainbox.anchor.setTo(0.5);
         
         _this.box = _this.add.sprite(560,282,'NSN2trianglebox');
         _this.box.anchor.setTo(0.5);
         
         _this.rightmark = _this.add.sprite(860,150,'NSN2icon3');
         _this.rightmark.anchor.setTo(0.5);
         
         _this.wrongmark = _this.add.sprite(860,260,'NSN2icon4');
         _this.wrongmark.anchor.setTo(0.5);
         
         _this.tick = _this.add.sprite(860,420,'NSN2tick');
         _this.tick.anchor.setTo(0.5);
         
         _this.text1 = _this.add.text(287,132,"15");
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#000000";
         _this.fontWeight = 'normal';
         _this.text1.fontSize = 30;
        
         _this.circle1 = _this.add.sprite(98,130,'NSN2circle1');
         _this.circle1.anchor.setTo(0.5);
         _this.circle1.inputEnabled = true;
         _this.circle1.events.onInputDown.add(_this.onDragstart,_this);
        
         _this.circle2 = _this.add.sprite(133,130,'NSN2circle1');
         _this.circle2.anchor.setTo(0.5);
         _this.circle2.inputEnabled = true;
         _this.circle2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle3 = _this.add.sprite(168,130,'NSN2circle1');
         _this.circle3.anchor.setTo(0.5);
         _this.circle3.inputEnabled = true;
         _this.circle3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle4 = _this.add.sprite(203,130,'NSN2circle1');
         _this.circle4.anchor.setTo(0.5);
         _this.circle4.inputEnabled = true;
         _this.circle4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle5 = _this.add.sprite(238,130,'NSN2circle1');
         _this.circle5.anchor.setTo(0.5);
         _this.circle5.inputEnabled = true;
         _this.circle5.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle6 = _this.add.sprite(98,164,'NSN2circle1');
         _this.circle6.anchor.setTo(0.5);
         _this.circle6.inputEnabled = true;
         _this.circle6.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle7 = _this.add.sprite(133,164,'NSN2circle1');
         _this.circle7.anchor.setTo(0.5);
         _this.circle7.inputEnabled = true;
         _this.circle7.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle8 = _this.add.sprite(168,164,'NSN2circle1');
         _this.circle8.anchor.setTo(0.5);
         _this.circle8.inputEnabled = true;
         _this.circle8.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle9 = _this.add.sprite(203,164,'NSN2circle1');
         _this.circle9.anchor.setTo(0.5);
         _this.circle9.inputEnabled = true;
         _this.circle9.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle10 = _this.add.sprite(238,164,'NSN2circle1');
         _this.circle10.anchor.setTo(0.5);
         _this.circle10.inputEnabled = true;
         _this.circle10.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle11 = _this.add.sprite(98,199,'NSN2circle1');
         _this.circle11.anchor.setTo(0.5);
         _this.circle11.inputEnabled = true;
         _this.circle11.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle12 = _this.add.sprite(133,199,'NSN2circle1');
         _this.circle12.anchor.setTo(0.5);
         _this.circle12.inputEnabled = true;
         _this.circle12.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle13 = _this.add.sprite(168,199,'NSN2circle1');
         _this.circle13.anchor.setTo(0.5);
         _this.circle13.inputEnabled = true;
         _this.circle13.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle14 = _this.add.sprite(203,199,'NSN2circle1');
         _this.circle14.anchor.setTo(0.5);
         _this.circle14.inputEnabled = true;
         _this.circle14.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle15 = _this.add.sprite(238,199,'NSN2circle1');
         _this.circle15.anchor.setTo(0.5);
         _this.circle15.inputEnabled = true;
         _this.circle15.events.onInputDown.add(_this.onDragstart,_this);
        
         _this.child11 = _this.add.graphics(-10, -10);
         _this.child11.lineStyle(2, 0x0000FF, 1);
         _this.child11.drawRect(5, 5, 10, 10);
         _this.child11.visible = false;
        
         _this.circles11 = _this.add.sprite(422,421,'NSN2circle6');
         _this.circles11.anchor.setTo(0.5);
         _this.circles11.addChild(_this.child11);
         _this.circles11.visible=false;
        
         _this.child12 = _this.add.graphics(-10, -10);
         _this.child12.lineStyle(2, 0x0000FF, 1);
         _this.child12.drawRect(5, 5, 10, 10);
         _this.child12.visible = false;
        
         _this.circles12 = _this.add.sprite(491,421,'NSN2circle6');
         _this.circles12.anchor.setTo(0.5);
         _this.circles12.addChild(_this.child12);
         _this.circles12.visible=false;
        
         _this.child13 = _this.add.graphics(-10, -10);
         _this.child13.lineStyle(2, 0x0000FF, 1);
         _this.child13.drawRect(5, 5, 10, 10);
         _this.child13.visible = false;
        
         _this.circles13 = _this.add.sprite(560,421,'NSN2circle6');
         _this.circles13.anchor.setTo(0.5);
         _this.circles13.addChild(_this.child13);
         _this.circles13.visible=false;
        
         _this.child14 = _this.add.graphics(-10, -10);
         _this.child14.lineStyle(2, 0x0000FF, 1);
         _this.child14.drawRect(5, 5, 10, 10);
         _this.child14.visible = false;
        
         _this.circles14 = _this.add.sprite(629,421,'NSN2circle6');
         _this.circles14.anchor.setTo(0.5);
         _this.circles14.addChild(_this.child14);
         _this.circles14.visible=false;
        
         _this.child15 = _this.add.graphics(-10, -10);
         _this.child15.lineStyle(2, 0x0000FF, 1);
         _this.child15.drawRect(5, 5, 10, 10);
         _this.child15.visible = false;
        
         _this.circles15 = _this.add.sprite(698,421,'NSN2circle6');
         _this.circles15.anchor.setTo(0.5);
         _this.circles15.addChild(_this.child15);
         _this.circles15.visible=false;
        
         _this.child21 = _this.add.graphics(-10, -10);
         _this.child21.lineStyle(2, 0x0000FF, 1);
         _this.child21.drawRect(5, 5, 10, 10);
         _this.child21.visible = false;
        
         _this.circles21 = _this.add.sprite(457,360,'NSN2circle6');
         _this.circles21.anchor.setTo(0.5);
         _this.circles21.addChild(_this.child21);
         _this.circles21.visible=false;
        
         _this.child22 = _this.add.graphics(-10, -10);
         _this.child22.lineStyle(2, 0x0000FF, 1);
         _this.child22.drawRect(5, 5, 10, 10);
         _this.child22.visible = false;
        
         _this.circles22 = _this.add.sprite(527,360,'NSN2circle6');
         _this.circles22.anchor.setTo(0.5);
         _this.circles22.addChild(_this.child22);
         _this.circles22.visible=false;
        
         _this.child23 = _this.add.graphics(-10, -10);
         _this.child23.lineStyle(2, 0x0000FF, 1);
         _this.child23.drawRect(5, 5, 10, 10);
         _this.child23.visible = false;
        
         _this.circles23 = _this.add.sprite(597,360,'NSN2circle6');
         _this.circles23.anchor.setTo(0.5);
         _this.circles23.addChild(_this.child23);
         _this.circles23.visible=false;
        
         _this.child24 = _this.add.graphics(-10, -10);
         _this.child24.lineStyle(2, 0x0000FF, 1);
         _this.child24.drawRect(5, 5, 10, 10);
         _this.child24.visible = false;
        
         _this.circles24 = _this.add.sprite(666,360,'NSN2circle6');
         _this.circles24.anchor.setTo(0.5);
         _this.circles24.addChild(_this.child24);
         _this.circles24.visible=false;
        
         _this.child31 = _this.add.graphics(-10, -10);
         _this.child31.lineStyle(2, 0x0000FF, 1);
         _this.child31.drawRect(5, 5, 10, 10);
         _this.child31.visible = false;
        
         _this.circles31 = _this.add.sprite(491,300,'NSN2circle6');
         _this.circles31.anchor.setTo(0.5);
         _this.circles31.addChild(_this.child31);
         _this.circles31.visible=false;
        
         _this.child32 = _this.add.graphics(-10, -10);
         _this.child32.lineStyle(2, 0x0000FF, 1);
         _this.child32.drawRect(5, 5, 10, 10);
         _this.child32.visible = false;
        
         _this.circles32 = _this.add.sprite(561,300,'NSN2circle6');
         _this.circles32.anchor.setTo(0.5);
         _this.circles32.addChild(_this.child32);
         _this.circles32.visible=false;
        
         _this.child33 = _this.add.graphics(-10, -10);
         _this.child33.lineStyle(2, 0x0000FF, 1);
         _this.child33.drawRect(5, 5, 10, 10);
         _this.child33.visible = false;
        
         _this.circles33 = _this.add.sprite(631,300,'NSN2circle6');
         _this.circles33.anchor.setTo(0.5);
         _this.circles33.addChild(_this.child33);
         _this.circles33.visible=false;
        
         _this.child41 = _this.add.graphics(-10, -10);
         _this.child41.lineStyle(2, 0x0000FF, 1);
         _this.child41.drawRect(5, 5, 10, 10);
         _this.child41.visible = false;
        
         _this.circles41 = _this.add.sprite(526,239,'NSN2circle6');
         _this.circles41.anchor.setTo(0.5);
         _this.circles41.addChild(_this.child41);
         _this.circles41.visible=false;
        
         _this.child42 = _this.add.graphics(-10, -10);
         _this.child42.lineStyle(2, 0x0000FF, 1);
         _this.child42.drawRect(5, 5, 10, 10);
         _this.child42.visible = false;
        
         _this.circles42 = _this.add.sprite(596,239,'NSN2circle6');
         _this.circles42.anchor.setTo(0.5);
         _this.circles42.addChild(_this.child42);
         _this.circles42.visible=false;
        
         _this.child51 = _this.add.graphics(-10, -10);
         _this.child51.lineStyle(2, 0x0000FF, 1);
         _this.child51.drawRect(5, 5, 10, 10);
         _this.child51.visible = false;
        
         _this.circles51 = _this.add.sprite(561,179,'NSN2circle6');
         _this.circles51.anchor.setTo(0.5);
         _this.circles51.addChild(_this.child51);
         _this.circles51.visible=false;
        
         _this.num=15;
        
         _this.boxGrp.add(_this.mainbox);
         _this.boxGrp.add(_this.box);
         _this.boxGrp.add(_this.text1);
         _this.boxGrp.add(_this.rightmark);
         _this.boxGrp.add(_this.wrongmark);
         _this.boxGrp.add(_this.tick);
        
         _this.objGrp2.add(_this.circles11); _this.objGrp2.add(_this.circles12);
         _this.objGrp2.add(_this.circles13); _this.objGrp2.add(_this.circles14);
         _this.objGrp2.add(_this.circles15); _this.objGrp2.add(_this.circles21); _this.objGrp2.add(_this.circles22); _this.objGrp2.add(_this.circles23); _this.objGrp2.add(_this.circles24); _this.objGrp2.add(_this.circles31); 
         _this.objGrp2.add(_this.circles32); _this.objGrp2.add(_this.circles33); 
         _this.objGrp2.add(_this.circles41); _this.objGrp2.add(_this.circles42); 
         _this.objGrp2.add(_this.circles51); 
         
         _this.objGrp1.add(_this.circle1); _this.objGrp1.add(_this.circle2); 
         _this.objGrp1.add(_this.circle3); _this.objGrp1.add(_this.circle4);
         _this.objGrp1.add(_this.circle5); _this.objGrp1.add(_this.circle6);
         _this.objGrp1.add(_this.circle7); _this.objGrp1.add(_this.circle8);
         _this.objGrp1.add(_this.circle9); _this.objGrp1.add(_this.circle10);
         _this.objGrp1.add(_this.circle11); _this.objGrp1.add(_this.circle12);
         _this.objGrp1.add(_this.circle13); _this.objGrp1.add(_this.circle14);
         _this.objGrp1.add(_this.circle15); 
    },
     
    gotoEighthQuestion:function(){

         _this.questionNo = 8;
         _this.opt=2;
         _this.boxGrp = _this.add.group(); 
         _this.objGrp2 = _this.add.group();
         _this.objGrp1 = _this.add.group();
        
        if(_this.voce_tri==0)
             {
                 _this.getVoice();
                 _this.voce_tri++;
             }
         
         _this.mainbox = _this.add.sprite(190,282,'NSN2mainbox');
         _this.mainbox.anchor.setTo(0.5);
         
         _this.box = _this.add.sprite(560,282,'NSN2trianglebox');
         _this.box.anchor.setTo(0.5);
         
         _this.rightmark = _this.add.sprite(860,150,'NSN2icon3');
         _this.rightmark.anchor.setTo(0.5);
         
         _this.wrongmark = _this.add.sprite(860,260,'NSN2icon4');
         _this.wrongmark.anchor.setTo(0.5);
         
         _this.tick = _this.add.sprite(860,420,'NSN2tick');
         _this.tick.anchor.setTo(0.5);
         
         _this.text1 = _this.add.text(287,132,"12");
         _this.text1.anchor.set(0.5);
         _this.text1.font = "myfont";
         _this.text1.fill = "#000000";
         _this.fontWeight = 'normal';
         _this.text1.fontSize = 30;
        
         _this.circle1 = _this.add.sprite(98,130,'NSN2circle1');
         _this.circle1.anchor.setTo(0.5);
         _this.circle1.inputEnabled = true;
         _this.circle1.events.onInputDown.add(_this.onDragstart,_this);
        
         _this.circle2 = _this.add.sprite(133,130,'NSN2circle1');
         _this.circle2.anchor.setTo(0.5);
         _this.circle2.inputEnabled = true;
         _this.circle2.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle3 = _this.add.sprite(168,130,'NSN2circle1');
         _this.circle3.anchor.setTo(0.5);
         _this.circle3.inputEnabled = true;
         _this.circle3.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle4 = _this.add.sprite(203,130,'NSN2circle1');
         _this.circle4.anchor.setTo(0.5);
         _this.circle4.inputEnabled = true;
         _this.circle4.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle5 = _this.add.sprite(238,130,'NSN2circle1');
         _this.circle5.anchor.setTo(0.5);
         _this.circle5.inputEnabled = true;
         _this.circle5.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle6 = _this.add.sprite(98,164,'NSN2circle1');
         _this.circle6.anchor.setTo(0.5);
         _this.circle6.inputEnabled = true;
         _this.circle6.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle7 = _this.add.sprite(133,164,'NSN2circle1');
         _this.circle7.anchor.setTo(0.5);
         _this.circle7.inputEnabled = true;
         _this.circle7.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle8 = _this.add.sprite(168,164,'NSN2circle1');
         _this.circle8.anchor.setTo(0.5);
         _this.circle8.inputEnabled = true;
         _this.circle8.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle9 = _this.add.sprite(203,164,'NSN2circle1');
         _this.circle9.anchor.setTo(0.5);
         _this.circle9.inputEnabled = true;
         _this.circle9.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle10 = _this.add.sprite(238,164,'NSN2circle1');
         _this.circle10.anchor.setTo(0.5);
         _this.circle10.inputEnabled = true;
         _this.circle10.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle11 = _this.add.sprite(98,199,'NSN2circle1');
         _this.circle11.anchor.setTo(0.5);
         _this.circle11.inputEnabled = true;
         _this.circle11.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.circle12 = _this.add.sprite(133,199,'NSN2circle1');
         _this.circle12.anchor.setTo(0.5);
         _this.circle12.inputEnabled = true;
         _this.circle12.events.onInputDown.add(_this.onDragstart,_this);
         
         _this.child11 = _this.add.graphics(-10, -10);
         _this.child11.lineStyle(2, 0x0000FF, 1);
         _this.child11.drawRect(5, 5, 10, 10);
         _this.child11.visible = false;
        
         _this.circles11 = _this.add.sprite(433,413,'NSN2circle5');
         _this.circles11.anchor.setTo(0.5);
         _this.circles11.addChild(_this.child11);
         _this.circles11.visible=false;
        
         _this.child12 = _this.add.graphics(-10, -10);
         _this.child12.lineStyle(2, 0x0000FF, 1);
         _this.child12.drawRect(5, 5, 10, 10);
         _this.child12.visible = false;
        
         _this.circles12 = _this.add.sprite(517,413,'NSN2circle5');
         _this.circles12.anchor.setTo(0.5);
         _this.circles12.addChild(_this.child12);
         _this.circles12.visible=false;
        
         _this.child13 = _this.add.graphics(-10, -10);
         _this.child13.lineStyle(2, 0x0000FF, 1);
         _this.child13.drawRect(5, 5, 10, 10);
         _this.child13.visible = false;
        
         _this.circles13 = _this.add.sprite(601,413,'NSN2circle5');
         _this.circles13.anchor.setTo(0.5);
         _this.circles13.addChild(_this.child13);
         _this.circles13.visible=false;
        
         _this.child14 = _this.add.graphics(-10, -10);
         _this.child14.lineStyle(2, 0x0000FF, 1);
         _this.child14.drawRect(5, 5, 10, 10);
         _this.child14.visible = false;
        
         _this.circles14 = _this.add.sprite(685,413,'NSN2circle5');
         _this.circles14.anchor.setTo(0.5);
         _this.circles14.addChild(_this.child14);
         _this.circles14.visible=false;
        
         _this.child21 = _this.add.graphics(-10, -10);
         _this.child21.lineStyle(2, 0x0000FF, 1);
         _this.child21.drawRect(5, 5, 10, 10);
         _this.child21.visible = false;
        
         _this.circles21 = _this.add.sprite(475,340,'NSN2circle5');
         _this.circles21.anchor.setTo(0.5);
         _this.circles21.addChild(_this.child21);
         _this.circles21.visible=false;
        
         _this.child22 = _this.add.graphics(-10, -10);
         _this.child22.lineStyle(2, 0x0000FF, 1);
         _this.child22.drawRect(5, 5, 10, 10);
         _this.child22.visible = false;
        
         _this.circles22 = _this.add.sprite(559,340,'NSN2circle5');
         _this.circles22.anchor.setTo(0.5);
         _this.circles22.addChild(_this.child22);
         _this.circles22.visible=false;
        
         _this.child23 = _this.add.graphics(-10, -10);
         _this.child23.lineStyle(2, 0x0000FF, 1);
         _this.child23.drawRect(5, 5, 10, 10);
         _this.child23.visible = false;
        
         _this.circles23 = _this.add.sprite(643,340,'NSN2circle5');
         _this.circles23.anchor.setTo(0.5);
         _this.circles23.addChild(_this.child23);
         _this.circles23.visible=false;
        
         _this.child31 = _this.add.graphics(-10, -10);
         _this.child31.lineStyle(2, 0x0000FF, 1);
         _this.child31.drawRect(5, 5, 10, 10);
         _this.child31.visible = false;
        
         _this.circles31 = _this.add.sprite(517,267,'NSN2circle5');
         _this.circles31.anchor.setTo(0.5);
         _this.circles31.addChild(_this.child31);
         _this.circles31.visible=false;
        
         _this.child32 = _this.add.graphics(-10, -10);
         _this.child32.lineStyle(2, 0x0000FF, 1);
         _this.child32.drawRect(5, 5, 10, 10);
         _this.child32.visible = false;
        
         _this.circles32 = _this.add.sprite(601,267,'NSN2circle5');
         _this.circles32.anchor.setTo(0.5);
         _this.circles32.addChild(_this.child32);
         _this.circles32.visible=false;
        
         _this.child41 = _this.add.graphics(-10, -10);
         _this.child41.lineStyle(2, 0x0000FF, 1);
         _this.child41.drawRect(5, 5, 10, 10);
         _this.child41.visible = false;
        
         _this.circles41 = _this.add.sprite(559,194,'NSN2circle5');
         _this.circles41.anchor.setTo(0.5);
         _this.circles41.addChild(_this.child41);
         _this.circles41.visible=false;
        
         _this.num=10;
        
         _this.boxGrp.add(_this.mainbox);
         _this.boxGrp.add(_this.box);
         _this.boxGrp.add(_this.text1);
         _this.boxGrp.add(_this.rightmark);
         _this.boxGrp.add(_this.wrongmark);
         _this.boxGrp.add(_this.tick);
        
         _this.objGrp2.add(_this.circles11); _this.objGrp2.add(_this.circles12);
         _this.objGrp2.add(_this.circles13); _this.objGrp2.add(_this.circles14);
         _this.objGrp2.add(_this.circles21); _this.objGrp2.add(_this.circles22); 
         _this.objGrp2.add(_this.circles23); _this.objGrp2.add(_this.circles31); 
         _this.objGrp2.add(_this.circles32); _this.objGrp2.add(_this.circles41); 
         
         _this.objGrp1.add(_this.circle1); _this.objGrp1.add(_this.circle2); 
         _this.objGrp1.add(_this.circle3); _this.objGrp1.add(_this.circle4);
         _this.objGrp1.add(_this.circle5); _this.objGrp1.add(_this.circle6);
         _this.objGrp1.add(_this.circle7); _this.objGrp1.add(_this.circle8);
         _this.objGrp1.add(_this.circle9); _this.objGrp1.add(_this.circle10);
         _this.objGrp1.add(_this.circle11); _this.objGrp1.add(_this.circle12);
         
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
                    res_id: "level1.4_"+target.name, 
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
            
              var currentTime = window.timeSaveFunc();
                var interactEvent = 
                { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid,  
                    date_time_event: currentTime, 
                    event_type: "drop", 
                    res_id: "Level1.4_"+target, 
                    access_token: window.acctkn 
                } 
                
                //var shake = true;
                
                 for(var i=0;i<_this.objGrp2.length;i++)
               {
                if(_this.checkOverlap(target,_this.objGrp2.getChildAt(i).getChildAt(0)) && _this.objGrp2.getAt(i).visible == false)
                {
                  _this.click = _this.add.audio('snapSound');
                  _this.click.play();
                   console.log(_this.added);
                  _this.added++;
                  _this.objGrp2.getAt(i).visible = true;
                   target.visible = false;
                  break;
                } 
           /* else if(_this.checkOverlap(target,_this.objGrp2.getChildAt(i).getChildAt(0)) && _this.objGrp2.getAt(i).visible == true)
            {
                      _this.shake.shake(10, target);
                  _this.time.events.add(800,function(){ 
                     // target.x = _this.vx;   
                     // target.y = _this.vy;
                      },_this);
                    
             }*/
               else
               {
                   target.x = _this.vx;   
                   target.y = _this.vy;
               }
                
            }
            target.events.onDragStop.removeAll(); 
            var ans = false;
            if(_this.added == _this.num)
                {
                   ans = true;
                
                }
                   if(ans)
                   {
                    _this.rightmark.inputEnabled=true;
                    _this.wrongmark.inputEnabled=true;
                    _this.rightmark.events.onInputDown.add(function(){
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.rightmark.frame=1;
                        _this.wrongmark.frame=0;
                        //_this.wrongmark.inputEnabled=false;
                        _this.tick.inputEnabled=true;
                    },_this);
                    _this.wrongmark.events.onInputDown.add(function(){
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.wrongmark.frame=1;
                        _this.rightmark.frame=0;
                        //_this.rightmark.inputEnabled=false;
                        _this.tick.inputEnabled=true;
                    },_this);
                
               _this.tick.events.onInputDown.add(function(){
                       _this.clickSound = _this.add.audio('ClickSound');
                       _this.clickSound.play();
                       _this.tick.inputEnabled=false;
                       _this.tick.frame=1;
               if(_this.rightmark.frame==1)
                  {
                   if(_this.opt==1)
                    { 
                        _this.box.frame=1;
                        _this.correctAns();
                     }
                else
                   {
                      _this.shake.shake(10, _this.rightmark);
                      _this.wrongAns();
                     _this.time.events.add(500,function(){
                      _this.tick.frame=0;
                      _this.rightmark.frame=0; 
                      _this.rightmark.inputEnabled=true;
                      _this.wrongmark.inputEnabled=true;
                     // _this.tick.inputEnabled=true;
                           },_this);
                   }
               }
             else if(_this.wrongmark.frame==1)
                  {
                      if(_this.opt==2)
                    {
                        _this.box.frame=1;
                        _this.correctAns();
                    }
               else
                 {
                    _this.shake.shake(10, _this.wrongmark); 
                    _this.wrongAns();
                    _this.time.events.add(500,function(){
                    _this.tick.frame=0;
                    _this.wrongmark.frame=0; 
                    _this.rightmark.inputEnabled=true;
                    _this.wrongmark.inputEnabled=true;
                    //_this.tick.inputEnabled=true;
                        },_this);
                 }
              }
               
                    },_this);
                   }
            
        },_this);                
    },
      
    correctAns:function(target)
    {
       
        //_this.stopvoice();

        
        _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         /*_this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "Click", 
                    res_id: "level1.4_"+target, 
                    access_token: window.acctkn 
               } 
               */
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
       /* _this.currentTime = window.timeSaveFunc();
               _this.saveAsment = 
               { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    pass: "yes",
                    time2answer: _this.AnsTimerCount,
                    attempts: _this.noofAttempts,
                    date_time_submission: _this.currentTime, 
                    access_token: window.acctkn 
               }*/
                    
               //absdsjsapi.saveAssessment(_this.saveAsment);


        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play();   
        //_this.speaker.inputEnabled=false;
        //_this.count1++;
       
        _this.celebration = true;
        
        _this.click3 = _this.add.audio('ClickSound');
        _this.click3.play();
        _this.cmusic = _this.add.audio('celebr');
        _this.cmusic.play();
        
        _this.tick.events.onInputDown.removeAll(); 
        _this.rightmark.events.onInputDown.removeAll(); 
        _this.wrongmark.events.onInputDown.removeAll(); 
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
    
     wrongAns:function(target)
    {
        console.log("wrong function");
        _this.wrong = false;
      
        _this.noofAttempts++;
        
       //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level1.4_",  
            access_token: window.acctkn 
        }

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        _this.timer3 = _this.time.create(false);
        
        
            //_this.click2 = _this.add.audio('ClickSound');
            //_this.click2.play();
        
            // _this.shake.shake(10, target);
            
              _this.wmusic = _this.add.audio('waudio');
              _this.wmusic.play(); 
               
           //_this.tick.events.onInputDown.removeAll(); 
        
          //_this.timer1.stop();
      
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
        _this.timer = _this.time.create(false);
        
        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function(){
            _this.AnsTimerCount++;
        }, _this);

        //  Start the _this.timer running - _this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        //_this.timer.start();


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
    
            _this.starsGroup.create(_this.world.centerX-30, 12, 'NSN2starAnim');
            
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
        console.log(_this.count1)
        _this.count1++;
        console.log(_this.no1)
        _this.no1++;
        _this.stopVoice();
        //_this.counter=0;
        
        if(_this.no1<6)
        {
             console.log("next")
            _this.objGrp1.destroy();
            _this.objGrp2.destroy();
            _this.boxGrp.destroy();
            _this.added=0;
            _this.getQuestion();
        }
        else
        {
             _this.time.events.add(500, function(){
             console.log("gameEnd");
           //_this.stopAllVoice();
             _this.stopVoice();
             _this.state.start('longdivision6Score',true,false);
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
            case 4:if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/English/nsnpg1.5_2.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Hindi/nsnpg1.5_2.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Kannada/nsnpg1.5_2.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Gujarati/nsnpg1.5_2.mp3");
                    }
                    else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Marathi/nsnpg1.5_2.mp3");
                    }
                    else if(window.languageSelected=="Odiya")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Odiya/nsnpg1.5_2.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Tamil/nsnpg1.5_2.mp3");
                    }
                    else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Telugu/nsnpg1.5_2.mp3");
                    }
                    else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Urdu/nsnpg1.5_2.mp3");
                    }
                break;
            case 5:
            case 6:
            case 7:
            case 8:if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/English/nsnpg1.5_1.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Hindi/nsnpg1.5_1.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Kannada/nsnpg1.5_1.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Gujarati/nsnpg1.5_1.mp3");
                    }
                    else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Marathi/nsnpg1.5_1.mp3");
                    }
                    else if(window.languageSelected=="Odiya")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Odiya/nsnpg1.5_1.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Tamil/nsnpg1.5_1.mp3");
                    }
                    else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Telugu/nsnpg1.5_1.mp3");
                    }
                    else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/NSN2/Urdu/nsnpg1.5_1.mp3");
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