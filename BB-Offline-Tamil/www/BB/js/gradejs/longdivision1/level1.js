Game.longdivision1=function(){};

Game.longdivision1.prototype={
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
        
       telInitializer.gameIdInit("longdivison",gradeSelected);
    },

    preload:function(game){
        if(!window.longdivision1){

            window.longdivision1 = true;

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
            this.load.atlas('NOLDGbackbtn',window.baseUrl+'assets/NOLD/commonAssets/backbtn.png' ,window.baseUrl+'json/NOLDG1_4_5/backbtn.json');
        this.load.atlas('NOLDGCommonSpeakerBtn',window.baseUrl+'assets/NOLD/commonAssets/speaker.png' ,window.baseUrl+'json/NOLDG1_4_5/speaker.json');
        this.load.atlas('NOLDGstarAnim',window.baseUrl+'assets/NOLD/commonAssets/starAnim.png',window.baseUrl+'json/NOLDG1_4_5/starAnim.json');
        this.load.atlas('NOLDGreplay',window.baseUrl+'assets/NOLD/commonAssets/reply.png' ,window.baseUrl+'json/NOLDG1_4_5/reply.json');
        this.load.atlas('NOLDGbtn',window.baseUrl+'assets/NOLD/commonAssets/btn.png',window.baseUrl+'json/NOLDG1_4_5/btn.json');
        
        this.load.atlas('NOLDGnumpadNum',window.baseUrl+'assets/NOLD/commonAssets/numpadNum.png',window.baseUrl+'json/NOLDG1_4_5/numpadNum.json');
        this.load.atlas('NOLDGrightmark',window.baseUrl+'assets/NOLD/commonAssets/rightmark.png',window.baseUrl+'json/NOLDG1_4_5/rightmark.json');
        this.load.atlas('NOLDGerase',window.baseUrl+'assets/NOLD/commonAssets/erase.png',window.baseUrl+'json/NOLDG1_4_5/erase.json');
        
        this.load.image('NOLDGnumbg',window.baseUrl+'assets/NOLD/commonAssets/numbg.png');
        this.load.image('NOLDhand',window.baseUrl+'assets/NOLD/commonAssets/hand.png');
        this.load.image('NOLDGNOLDGsg7_1_2background1',window.baseUrl+'assets/NOLD/commonAssets/bg1.png');
        this.load.image('NOLDGsg7_1_2tittleBar',window.baseUrl+'assets/NOLD/commonAssets/tittleBar.png');
        this.load.image('NOLDGsg7_1_2navBar',window.baseUrl+'assets/NOLD/commonAssets/navBar.png');
        this.load.image('NOLDGsg7_1_2timebg',window.baseUrl+'assets/NOLD/commonAssets/timebg.png');
        this.load.image('NOLDGskipDemoVideos',window.baseUrl+'assets/NOLD/commonAssets/skipArrow.png');
       // this.load.image('sg7_1_2topicOutline',window.baseUrl+'assets/NOLD/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('NOLDGsg7_1_2background',window.baseUrl+'assets/NOLD/commonAssets/Bg.png');
              
        this.load.atlas('NOLDGsg7_1_2tick',window.baseUrl+'assets/NOLD/commonAssets/tickBtn.png',window.baseUrl+'json/NOLDG1_4_5/tickBtn.json');
        
        this.load.atlas('NOLDGblueCoin1to10',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/blueCoin1to10.png',window.baseUrl+'json/NOLDG1_4_5/blueCoin1to10.json');
        this.load.atlas('NOLDGblueCoinDrop',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/blueCoinDrop.png',window.baseUrl+'json/NOLDG1_4_5/blueCoinDrop.json');
        this.load.atlas('NOLDGnumbers',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/numbers.png',window.baseUrl+'json/NOLDG1_4_5/numbers.json');
        this.load.atlas('NOLDGyellowCoin1to10',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/yellowCoin1to10.png',window.baseUrl+'json/NOLDG1_4_5/yellowCoin1to10.json');
        this.load.atlas('NOLDGyellowCoin1to25',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/yellowCoin1to25.png',window.baseUrl+'json/NOLDG1_4_5/yellowCoin1to25.json');
        this.load.atlas('NOLDGyellowCoinDrop',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/yellowCoinDrop.png',window.baseUrl+'json/NOLDG1_4_5/yellowCoinDrop.json');
        this.load.atlas('numberBlue',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/numberBlue.png',window.baseUrl+'json/NOLDG1_4_5/numberBlue.json');
        this.load.atlas('NOLDGglowCoin',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/glowCoin.png',window.baseUrl+'json/NOLDG1_4_5/glowCoin.json');
        this.load.atlas('NOLDGwhiteTextBox',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/whiteTextBox.png',window.baseUrl+'json/NOLDG1_4_5/whiteTextBox.json');
        this.load.image('NOLDGboard',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/board.png');
        this.load.image('NOLDGangle',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/angle.png');
        this.load.image('NOLDGblueCoin',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/blueCoin.png');
        this.load.image('NOLDGdragObject',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/dragObject.png');
        this.load.image('NOLDGdragObject1',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/dragObject1.png');
        this.load.image('NOLDGdragObject2',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/dragObject2.png');
        this.load.image('NOLDGyellowCoin',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/yellowCoin.png');
       // this.load.image('NOLDGwhiteTextBox',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/whiteTextBox.png');
        this.load.image('NOLDGunderLine',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/underLine.png');
        this.load.image('NOLDblueCoinCut',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/blueCoinCut.png');
        this.load.image('NOLDyellowCoinCut',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/yellowCoinCut.png');
        this.load.image('NOLDdownArrow',window.baseUrl+'assets/NOLD/gradeAssets/NOLDG1_4_5/downArrow.png');

    }

    },
    
	create:function(game){


        noofAttempts=0;
        AnsTimerCount=0;
        _this.sceneCount = 0;
        
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer1 = null;
        _this.no1 = 0;
        _this.selectedAns = 0;
        _this.selectedAns1 = 0;
        _this.checkFor2dvdnt1 = 0;
        _this.checkFor2dvdnt2 = 0;
        _this.remainderEnd = 0;
        _this.count1 =0;
        _this.checkForDropB = 0;
        _this.blueCount1 = 0;
        _this.blueCount2 = 0;
        _this.blueCount3 = 0;
        _this.blueCount4 = 0;
        
        _this.blueCountCheck1 = 0;
        _this.yellowCountCheck1 = 0;
        
        _this.yellowCount1 = 0;
        _this.yellowCount2 = 0;
        _this.yellowCount3 = 0;
        _this.yellowCount4 = 0;
        
        _this.remaingBlueCoin = 0;
        _this.divisorFrame = 0;
        _this.divident1Frame = 0;
        _this.divident2Frame = 0;
        _this.yellowIncFrame =0;
        
        _this.questionNumber = 0;
        _this.VoiceNumber = 1;
        
        _this.qArray = new Array();
        _this.qArray = [2,3,4,5,6];
        _this.qArray = _this.shuffle(_this.qArray);
        _this.qArray.unshift(1);
        _this.quotientBox1Pressed = false;
        _this.quotientBox2Pressed = false;
        _this.divident3BoxPressed = false;
        _this.divident4BoxPressed = false;
        _this.divident5BoxPressed = false;
        _this.divident6BoxPressed = false;
        _this.divident7BoxPressed = false;
        _this.divident8BoxPressed = false;
        _this.draglastBlueCoin = false;
        
         _this.yellowDropAnim = [1,2,3,4,5,6,7,8,9,10];
        
   		 _this.shake = new Phaser.Plugin.Shake(game);
	      game.plugins.add(_this.shake);
       _this.physics.startSystem(Phaser.Physics.ARCADE);
       _this.physics.setBoundsToWorld();

       _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'NOLDGsg7_1_2background');
        //_this.bg1.scale.setTo(1.05,1.12);
		
        
        _this.TopBar=this.add.sprite(0,0,'NOLDGsg7_1_2navBar');
        _this.TopBar.name="NOLDGsg7_1_2navBar";
        _this.TopBar.scale.setTo(1,1.1);
        
        _this.backbtn = this.add.button(10,7,'NOLDGbackbtn',function(){console.log("here");},_this,0,1,2);
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
            _this.state.start('grade4levelSelectionScreen',true,false); 

        },_this);

         _this.speakerbtn = this.add.button(600,6,'NOLDGCommonSpeakerBtn',function(){},this,1,0,2);
       //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice(_this.VoiceNumber);
            
        },_this);

        
        _this.timebg=this.add.sprite(305,6,'NOLDGsg7_1_2timebg');
        _this.timebg.name="common_timebg";
        //_this.timebg.scale.setTo(1.2,1);


            _this.timeDisplay = this.add.text(330,22,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontSize = 20;
             _this.timeDisplay.fontWeight = 'normal';
            _this.timeDisplay.fill = '#ADFF2F';

        _this.board=this.add.sprite(40,70,'NOLDGboard');
        _this.dragObjectQ=this.add.sprite(280,290,'NOLDGdragObject');
        
        _this.generateStarsForTheScene(6);
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

        noofAttempts = 0;
         AnsTimerCount=0;
         _this.sceneCount++;

         
        _this.timer = _this.time.create(false);

          //  Set a TimerEvent to occur after 2 seconds
          _this.timer.loop(1000, function(){
               AnsTimerCount++;
          }, this);
          //  Start the timer running - this is important!
          //  It won't start automatically, allowing you to hook it to button events and the like.
          _this.timer.start();
        
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
        //_this.no1 = 5;
        
        switch(_this.qArray[_this.no1])
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
        _this.getVoice(_this.VoiceNumber);
    },
    gotoFirstQuestion:function()
    {
        _this.blueCountCheck1 = 2;
        _this.yellowCountCheck1 = 4;
        _this.checkForDropB = 8;
        _this.countForDropB = 0
        _this.remaingBlueCoin= 1;
        _this.yellowIncFrame = 17;
        _this.yellowremaining = 9;
        _this.countForDropY = 0;
        _this.checkForDropY = 16;
        _this.checkFor2dvdnt1 = 1;
        _this.checkFor2dvdnt2 = 6;
        _this.remainderEnd = 3;
        _this.divisorFrame = 4;
        _this.divident1Frame = 9;
        _this.divident2Frame = 9;
        _this.blueCoinFrame = 7;
        _this.yellowCoinFrame = 8;
        _this.BlueCoinShowFrame = 338;
        _this.YellowCoinShowFrame = 205;
        _this.loadAssetsForQuestion();
        
        _this.questionNumber = 1;
        _this.addCoinsToStick()
    },
    gotoSecondQuestion:function()
    {
        _this.blueCountCheck1 = 1;
        _this.yellowCountCheck1 = 3;
        _this.checkForDropB = 4;
        _this.countForDropB = 0;
        _this.remaingBlueCoin= 1;
        _this.yellowIncFrame = 12;
        _this.yellowremaining = 4;
        _this.countForDropY = 0;
        _this.checkForDropY = 12;
        _this.checkFor2dvdnt1 = 1;
        _this.checkFor2dvdnt2 = 2;
        _this.remainderEnd = 2;
        _this.divisorFrame = 4;
        _this.divident1Frame = 5;
        _this.divident2Frame = 4;
        _this.blueCoinFrame = 3;
        _this.yellowCoinFrame = 3;
        _this.BlueCoinShowFrame = 392;
        _this.YellowCoinShowFrame = 272;
        _this.loadAssetsForQuestion();
        
        _this.questionNumber = 2;
        _this.addCoinsToStick();
    },
    gotoThirdQuestion:function()
    {
        _this.blueCountCheck1 = 2;
        _this.yellowCountCheck1 = 5;
        _this.checkForDropB = 6;
        _this.countForDropB = 0;
        _this.remaingBlueCoin= 1;
        _this.yellowIncFrame = 14;
        _this.yellowremaining = 6;
        _this.countForDropY = 0;
        _this.checkForDropY = 15;
        _this.checkFor2dvdnt1 = 1;
        _this.checkFor2dvdnt2 = 5;
        _this.remainderEnd = 1;
        _this.divisorFrame = 3;
        _this.divident1Frame = 7;
        _this.divident2Frame = 6;
        _this.blueCoinFrame = 5;
        _this.yellowCoinFrame = 5;
        _this.BlueCoinShowFrame = 365;
        _this.YellowCoinShowFrame = 245;
        _this.loadAssetsForQuestion();
        
        _this.questionNumber = 3;
        
        _this.addCoinsToStick1();
    }, 
    gotoFourthQuestion:function()
    {
        _this.blueCountCheck1 = 1;
        _this.yellowCountCheck1 = 5;
        _this.checkForDropB = 3;
        _this.countForDropB = 0;
        _this.remaingBlueCoin= 1;
        _this.yellowIncFrame = 15;
        _this.yellowremaining = 7;
        _this.countForDropY = 0;
        _this.checkForDropY = 15;
        _this.checkFor2dvdnt1 = 1;
        _this.checkFor2dvdnt2 = 5;
        _this.remainderEnd = 2;
        _this.divisorFrame = 3;
        _this.divident1Frame = 4;
        _this.divident2Frame = 7;
        _this.blueCoinFrame = 2;
        _this.yellowCoinFrame = 6;
        _this.BlueCoinShowFrame = 404;
        _this.YellowCoinShowFrame = 232;
        _this.loadAssetsForQuestion();
        
        _this.questionNumber = 4;
        
        _this.addCoinsToStick1();
    },
    gotoFifthQuestion:function()
    {
        _this.blueCountCheck1 = 2;
        _this.yellowCountCheck1 = 7;
        _this.checkForDropB = 4;
        _this.countForDropB = 0;
        _this.remaingBlueCoin= 1;
        _this.yellowIncFrame = 13;
        _this.yellowremaining = 5;
        _this.countForDropY = 0;
        _this.checkForDropY = 14;
        _this.checkFor2dvdnt1 = 1;
        _this.checkFor2dvdnt2 = 4;
        _this.remainderEnd = 1;
        _this.divisorFrame = 2;
        _this.divident1Frame = 5;
        _this.divident2Frame = 5;
        _this.blueCoinFrame = 3;
        _this.yellowCoinFrame = 4;
        _this.BlueCoinShowFrame = 392;
        _this.YellowCoinShowFrame = 258;
        _this.loadAssetsForQuestion();
        
        _this.questionNumber = 5;
        
        _this.addCoinsToStick2();
    },
    gotoSixthQuestion:function()
    {
        _this.blueCountCheck1 = 3;
        _this.yellowCountCheck1 = 6;
        _this.checkForDropB = 6;
        _this.countForDropB = 0;
        _this.remaingBlueCoin= 1;
        _this.yellowIncFrame = 11;
        _this.yellowremaining = 3;
        _this.countForDropY = 0;
        _this.checkForDropY = 12;
        _this.checkFor2dvdnt1 = 1;
        _this.checkFor2dvdnt2 = 2;
        _this.remainderEnd = 1;
        _this.divisorFrame = 2;
        _this.divident1Frame = 7;
        _this.divident2Frame = 3;
        _this.blueCoinFrame = 5;
        _this.yellowCoinFrame = 2;
        _this.BlueCoinShowFrame = 365;
        _this.YellowCoinShowFrame = 285;
        _this.loadAssetsForQuestion();
        
        _this.questionNumber = 6;
        
        _this.addCoinsToStick2();
    },
    loadAssetsForQuestion:function()
    {
        _this.angle=this.add.sprite(120,145,'NOLDGangle');
        
        _this.divisor=this.add.sprite(80,150,'NOLDGnumbers');
        _this.divisor.frame =_this.divisorFrame;
        
       
        _this.divident1=this.add.sprite(130,150,'NOLDGnumbers');
        _this.divident1.frame = _this.divident1Frame;
        _this.divident2=this.add.sprite(170,150,'NOLDGnumbers');
        _this.divident2.frame = _this.divident2Frame; 
        
        _this.downArrow=this.add.sprite(170,205,'NOLDdownArrow');
        _this.downArrow.visible = false;
        _this.quotientBox1=this.add.sprite(125,95,'NOLDGwhiteTextBox');
        _this.quotientBox1.visible = false;
        _this.quotientText1=this.add.sprite(133,91,'numberBlue');
        //_this.quotientText1.frame = 9;
        _this.quotientBox2=this.add.sprite(167,95,'NOLDGwhiteTextBox');
        _this.quotientBox2.visible = false;
        _this.quotientText2=this.add.sprite(175,91,'numberBlue');

        _this.divident3=this.add.sprite(125,210,'NOLDGwhiteTextBox');
        _this.divident3.visible = false;
        _this.dividentText3=this.add.sprite(133,206,'numberBlue');
        
        _this.NOLDGunderLine1=this.add.sprite(122,260,'NOLDGunderLine');
        _this.NOLDGunderLine1.visible = false;
        
        _this.divident4=this.add.sprite(125,275,'NOLDGwhiteTextBox');
        _this.divident4.visible = false;
        _this.dividentText4=this.add.sprite(133,270,'numberBlue');
       
        
        _this.divident5=this.add.sprite(167,275,'NOLDGwhiteTextBox');
        _this.divident5.visible = false;
        _this.dividentText5=this.add.sprite(175,270,'numberBlue');
        
        _this.divident6=this.add.sprite(125,330,'NOLDGwhiteTextBox');
        _this.divident6.visible = false;
        _this.dividentText6=this.add.sprite(133,325,'numberBlue');
        
        _this.divident7=this.add.sprite(167,330,'NOLDGwhiteTextBox');
        _this.divident7.visible = false;
        _this.dividentText7=this.add.sprite(175,325,'numberBlue');
        
        _this.NOLDGunderLine2=this.add.sprite(122,380,'NOLDGunderLine');
        _this.NOLDGunderLine2.visible = false;
        
        _this.divident8=this.add.sprite(167,390,'NOLDGwhiteTextBox');
        _this.divident8.visible = false;
        _this.dividentText8=this.add.sprite(175,386,'numberBlue');
    },
    addCoinsToStick:function()
    {
        
        _this.dragObject1=this.add.sprite(535,70,'NOLDGdragObject');
        _this.dragObject2=this.add.sprite(750,70,'NOLDGdragObject');
        _this.dragObject3=this.add.sprite(535,290,'NOLDGdragObject');
        _this.dragObject4=this.add.sprite(750,290,'NOLDGdragObject');
        
        _this.displayCoinBlue=this.add.sprite(312,325,'NOLDGblueCoin1to10');
        _this.displayCoinBlue.frame = _this.blueCoinFrame;
        
        _this.displayCoinYellow=this.add.sprite(362,125,'NOLDGyellowCoin1to25');
        _this.displayCoinYellow.frame = _this.yellowCoinFrame;
        
        _this.dragCoinBlue=this.add.sprite(312,_this.BlueCoinShowFrame,'NOLDblueCoinCut');
        _this.dragCoinBlue.inputEnabled = true;
        _this.dragCoinBlue.events.onInputDown.add(_this.blueCoinClicked,_this);
        
        _this.yellowCoinDropAnim =this.add.sprite(362,170,'NOLDGyellowCoinDrop');
        _this.yellowCoinDropAnim.visible =false;
        
        _this.dragCoinYellow=this.add.sprite(362,_this.YellowCoinShowFrame,'NOLDyellowCoinCut');
        _this.dragCoinYellow.visible = false;
        
        
        _this.showCoinBlue1=this.add.sprite(567,105,'NOLDGblueCoin1to10');
        _this.showCoinBlue1.visible = false;
        _this.showCoinBlue2=this.add.sprite(782,105,'NOLDGblueCoin1to10');
        _this.showCoinBlue2.visible = false;
        _this.showCoinBlue3=this.add.sprite(567,325,'NOLDGblueCoin1to10');
        _this.showCoinBlue3.visible = false;
        _this.showCoinBlue4=this.add.sprite(782,325,'NOLDGblueCoin1to10');
        _this.showCoinBlue4.visible = false;
        
        _this.showCoinYellow1=this.add.sprite(617,105,'NOLDGyellowCoin1to10');
        _this.showCoinYellow1.visible = false;
        _this.showCoinYellow2=this.add.sprite(832,105,'NOLDGyellowCoin1to10');
        _this.showCoinYellow2.visible = false;
        _this.showCoinYellow3=this.add.sprite(617,325,'NOLDGyellowCoin1to10');
        _this.showCoinYellow3.visible = false;
        _this.showCoinYellow4=this.add.sprite(832,325,'NOLDGyellowCoin1to10');
        _this.showCoinYellow4.visible = false;
        
        //_this.BlinkquotientBox();
        //Tween hand and Blue coin******************************************
        
        
        if(_this.no1 == 0)
        {
        _this.NOLDGglowCoin=this.add.sprite(305,330,'NOLDGglowCoin');
        _this.anim = _this.NOLDGglowCoin.animations.add('glow');
        _this.anim.play(5,true);
            
        _this.tweenCoin=this.add.sprite(312,338,'NOLDGblueCoin');
        _this.NOLDGglowCoin.bringToTop(this);
        _this.showHand = _this.add.sprite(340,350,'NOLDhand');
        _this.showHand.scale.setTo(0.7);
        _this.tween1 = this.add.tween(_this.showHand);
        _this.tween1.to({ x: 580,y:200}, 0, 'Linear', true, 0);
        _this.tween2 = this.add.tween(_this.tweenCoin);
        _this.tween2.to({ x: 580,y:200}, 0, 'Linear', true, 0);
        _this.tween1.onComplete.add(function(){
              _this.showHand.kill();
              _this.tweenCoin.kill();
              _this.showCoinBlue1.visible = true;
            
            _this.tweenCoin=this.add.sprite(312,338,'NOLDGblueCoin');
            _this.showHand = _this.add.sprite(340,350,'NOLDhand');
            _this.showHand.scale.setTo(0.7);
            _this.tween1 = this.add.tween(_this.showHand);
            _this.tween1.to({ x: 790,y:200}, 0, 'Linear', true, 0);
            _this.tween2 = this.add.tween(_this.tweenCoin);
            _this.tween2.to({ x: 790,y:200}, 0, 'Linear', true, 0);
                _this.tween1.onComplete.add(function(){
                _this.showHand.kill();
                _this.tweenCoin.kill();
                _this.showCoinBlue2.visible = true;
                
                _this.tweenCoin=this.add.sprite(312,338,'NOLDGblueCoin');
                _this.showHand = _this.add.sprite(340,350,'NOLDhand');
                _this.showHand.scale.setTo(0.7);
                _this.tween1 = this.add.tween(_this.showHand);
                _this.tween1.to({ x: 580,y:420}, 0, 'Linear', true, 0);
                _this.tween2 = this.add.tween(_this.tweenCoin);
                _this.tween2.to({ x: 580,y:420}, 0, 'Linear', true, 0);
                _this.tween1.onComplete.add(function(){
                     _this.showHand.kill();
                     _this.tweenCoin.kill();
                     _this.showCoinBlue3.visible = true;
                     
                     _this.tweenCoin=this.add.sprite(312,338,'NOLDGblueCoin');
                     _this.showHand = _this.add.sprite(340,350,'NOLDhand');
                     _this.showHand.scale.setTo(0.7);
                     _this.tween1 = this.add.tween(_this.showHand);
                     _this.tween1.to({ x: 780,y:420}, 0, 'Linear', true, 0);
                     _this.tween2 = this.add.tween(_this.tweenCoin);
                     _this.tween2.to({ x: 780,y:420}, 0, 'Linear', true, 0);
                     _this.tween1.onComplete.add(function(){
                     _this.showHand.kill();
                     _this.tweenCoin.kill();
                         
                         _this.showCoinBlue4.visible = true;
                         _this.time.events.add(1000, function()
					       {
                             _this.NOLDGglowCoin.destroy();
                             _this.showCoinBlue1.visible = false;
                             _this.showCoinBlue2.visible = false;
                             _this.showCoinBlue3.visible = false;
                             _this.showCoinBlue4.visible = false;
                             _this.dragCoinBlue.inputEnabled = true;
                             _this.dragCoinBlue.input.useHandCursor = true;
                           },this);
                    },this);
                },this);
               },this);
            },this);
        }
        /**************************************************************************/
        _this.BlueGrp1 = _this.add.graphics(590, 70);
        _this.BlueGrp1.lineStyle(10, 0x0000ff);
        _this.BlueGrp1.moveTo(0, 0);
        _this.BlueGrp1.lineTo(0, 170);
        _this.BlueGrp1.alpha = 0;
        
        _this.BlueGrp2 = _this.add.graphics(805, 70);
        _this.BlueGrp2.lineStyle(10, 0x0000ff);
        _this.BlueGrp2.moveTo(0, 0);
        _this.BlueGrp2.lineTo(0, 170);
        _this.BlueGrp2.alpha = 0;
        
        _this.BlueGrp3 = _this.add.graphics(590, 290);
        _this.BlueGrp3.lineStyle(10, 0x0000ff);
        _this.BlueGrp3.moveTo(0, 0);
        _this.BlueGrp3.lineTo(0, 170);
        _this.BlueGrp3.alpha = 0;
        
        _this.BlueGrp4 = _this.add.graphics(805, 290);
        _this.BlueGrp4.lineStyle(10, 0x0000ff);
        _this.BlueGrp4.moveTo(0, 0);
        _this.BlueGrp4.lineTo(0, 170);
        _this.BlueGrp4.alpha = 0;
        
        _this.YellowGrp1 = _this.add.graphics(640, 70);
        _this.YellowGrp1.lineStyle(10, 0xffff00);
        _this.YellowGrp1.moveTo(0, 0);
        _this.YellowGrp1.lineTo(0, 170);
        _this.YellowGrp1.alpha = 0;
        
        _this.YellowGrp2 = _this.add.graphics(855, 70);
        _this.YellowGrp2.lineStyle(10, 0xffff00);
        _this.YellowGrp2.moveTo(0, 0);
        _this.YellowGrp2.lineTo(0, 170);
        _this.YellowGrp2.alpha = 0;
        
        _this.YellowGrp3 = _this.add.graphics(640, 290);
        _this.YellowGrp3.lineStyle(10, 0xffff00);
        _this.YellowGrp3.moveTo(0, 0);
        _this.YellowGrp3.lineTo(0, 170);
        _this.YellowGrp3.alpha = 0;
        
        _this.YellowGrp4 = _this.add.graphics(855, 290);
        _this.YellowGrp4.lineStyle(10, 0xffff00);
        _this.YellowGrp4.moveTo(0, 0);
        _this.YellowGrp4.lineTo(0, 170);
        _this.YellowGrp4.alpha = 0;
    },
    addCoinsToStick1:function()
    {
        _this.dragObject1=this.add.sprite(535,70,'NOLDGdragObject');
        _this.dragObject2=this.add.sprite(750,70,'NOLDGdragObject');
        _this.dragObject3=this.add.sprite(640,290,'NOLDGdragObject');
        _this.dragObject4=this.add.sprite(750,290,'NOLDGdragObject');
        _this.dragObject4.visible = false;
        _this.displayCoinBlue=this.add.sprite(312,325,'NOLDGblueCoin1to10');
        _this.displayCoinBlue.frame = _this.blueCoinFrame;
        
        _this.displayCoinYellow=this.add.sprite(362,125,'NOLDGyellowCoin1to25');
        _this.displayCoinYellow.frame = _this.yellowCoinFrame;
        
        _this.dragCoinBlue=this.add.sprite(312,_this.BlueCoinShowFrame,'NOLDblueCoinCut');
        _this.dragCoinBlue.inputEnabled = true;
        _this.dragCoinBlue.events.onInputDown.add(_this.blueCoinClicked1,_this);
        
        _this.yellowCoinDropAnim =this.add.sprite(362,170,'NOLDGyellowCoinDrop');
        _this.yellowCoinDropAnim.visible =false;
        
        _this.dragCoinYellow=this.add.sprite(362,_this.YellowCoinShowFrame,'NOLDyellowCoinCut');
        _this.dragCoinYellow.visible = false;
        
        
        _this.showCoinBlue1=this.add.sprite(567,105,'NOLDGblueCoin1to10');
        _this.showCoinBlue1.visible = false;
        _this.showCoinBlue2=this.add.sprite(782,105,'NOLDGblueCoin1to10');
        _this.showCoinBlue2.visible = false;
        _this.showCoinBlue3=this.add.sprite(672,325,'NOLDGblueCoin1to10');
        _this.showCoinBlue3.visible = false;
        _this.showCoinBlue4=this.add.sprite(782,325,'NOLDGblueCoin1to10');
        _this.showCoinBlue4.visible = false;
        
        _this.showCoinYellow1=this.add.sprite(617,105,'NOLDGyellowCoin1to10');
        _this.showCoinYellow1.visible = false;
        _this.showCoinYellow2=this.add.sprite(832,105,'NOLDGyellowCoin1to10');
        _this.showCoinYellow2.visible = false;
        _this.showCoinYellow3=this.add.sprite(722,325,'NOLDGyellowCoin1to10');
        _this.showCoinYellow3.visible = false;
        _this.showCoinYellow4=this.add.sprite(832,325,'NOLDGyellowCoin1to10');
        _this.showCoinYellow4.visible = false;
        
        //_this.BlinkquotientBox();
        //Tween hand and Blue coin******************************************
        
        
        if(_this.no1 == 0)
        {
        _this.NOLDGglowCoin=this.add.sprite(305,330,'NOLDGglowCoin');
        _this.anim = _this.NOLDGglowCoin.animations.add('glow');
        _this.anim.play(5,true);
            
        _this.tweenCoin=this.add.sprite(312,338,'NOLDGblueCoin');
        _this.NOLDGglowCoin.bringToTop(this);
        _this.showHand = _this.add.sprite(340,350,'NOLDhand');
        _this.showHand.scale.setTo(0.7);
        _this.tween1 = this.add.tween(_this.showHand);
        _this.tween1.to({ x: 580,y:200}, 0, 'Linear', true, 0);
        _this.tween2 = this.add.tween(_this.tweenCoin);
        _this.tween2.to({ x: 580,y:200}, 0, 'Linear', true, 0);
        _this.tween1.onComplete.add(function(){
              _this.showHand.kill();
              _this.tweenCoin.kill();
              _this.showCoinBlue1.visible = true;
            
            _this.tweenCoin=this.add.sprite(312,338,'NOLDGblueCoin');
            _this.showHand = _this.add.sprite(340,350,'NOLDhand');
            _this.showHand.scale.setTo(0.7);
            _this.tween1 = this.add.tween(_this.showHand);
            _this.tween1.to({ x: 790,y:200}, 0, 'Linear', true, 0);
            _this.tween2 = this.add.tween(_this.tweenCoin);
            _this.tween2.to({ x: 790,y:200}, 0, 'Linear', true, 0);
                _this.tween1.onComplete.add(function(){
                _this.showHand.kill();
                _this.tweenCoin.kill();
                _this.showCoinBlue2.visible = true;
                
                _this.tweenCoin=this.add.sprite(312,338,'NOLDGblueCoin');
                _this.showHand = _this.add.sprite(340,350,'NOLDhand');
                _this.showHand.scale.setTo(0.7);
                _this.tween1 = this.add.tween(_this.showHand);
                _this.tween1.to({ x: 580,y:420}, 0, 'Linear', true, 0);
                _this.tween2 = this.add.tween(_this.tweenCoin);
                _this.tween2.to({ x: 580,y:420}, 0, 'Linear', true, 0);
                _this.tween1.onComplete.add(function(){
                     _this.showHand.kill();
                     _this.tweenCoin.kill();
                     _this.showCoinBlue3.visible = true;
                     
                     _this.tweenCoin=this.add.sprite(312,338,'NOLDGblueCoin');
                     _this.showHand = _this.add.sprite(340,350,'NOLDhand');
                     _this.showHand.scale.setTo(0.7);
                     _this.tween1 = this.add.tween(_this.showHand);
                     _this.tween1.to({ x: 780,y:420}, 0, 'Linear', true, 0);
                     _this.tween2 = this.add.tween(_this.tweenCoin);
                     _this.tween2.to({ x: 780,y:420}, 0, 'Linear', true, 0);
                     _this.tween1.onComplete.add(function(){
                     _this.showHand.kill();
                     _this.tweenCoin.kill();
                         
                         _this.showCoinBlue4.visible = true;
                         _this.time.events.add(1000, function()
					       {
                             _this.NOLDGglowCoin.destroy();
                             _this.showCoinBlue1.visible = false;
                             _this.showCoinBlue2.visible = false;
                             _this.showCoinBlue3.visible = false;
                             _this.showCoinBlue4.visible = false;
                             _this.dragCoinBlue.inputEnabled = true;
                             _this.dragCoinBlue.input.useHandCursor = true;
                           },this);
                    },this);
                },this);
               },this);
            },this);
        }
        /**************************************************************************/
        _this.BlueGrp1 = _this.add.graphics(590, 70);
        _this.BlueGrp1.lineStyle(10, 0x0000ff);
        _this.BlueGrp1.moveTo(0, 0);
        _this.BlueGrp1.lineTo(0, 170);
        _this.BlueGrp1.alpha = 0;
        
        _this.BlueGrp2 = _this.add.graphics(805, 70);
        _this.BlueGrp2.lineStyle(10, 0x0000ff);
        _this.BlueGrp2.moveTo(0, 0);
        _this.BlueGrp2.lineTo(0, 170);
        _this.BlueGrp2.alpha = 0;
        
        _this.BlueGrp3 = _this.add.graphics(695, 290);
        _this.BlueGrp3.lineStyle(10, 0x0000ff);
        _this.BlueGrp3.moveTo(0, 0);
        _this.BlueGrp3.lineTo(0, 170);
        _this.BlueGrp3.alpha = 0;

        
        _this.YellowGrp1 = _this.add.graphics(640, 70);
        _this.YellowGrp1.lineStyle(10, 0xffff00);
        _this.YellowGrp1.moveTo(0, 0);
        _this.YellowGrp1.lineTo(0, 170);
        _this.YellowGrp1.alpha = 0;
        
        _this.YellowGrp2 = _this.add.graphics(855, 70);
        _this.YellowGrp2.lineStyle(10, 0xffff00);
        _this.YellowGrp2.moveTo(0, 0);
        _this.YellowGrp2.lineTo(0, 170);
        _this.YellowGrp2.alpha = 0;
        
        _this.YellowGrp3 = _this.add.graphics(745, 290);
        _this.YellowGrp3.lineStyle(10, 0xffff00);
        _this.YellowGrp3.moveTo(0, 0);
        _this.YellowGrp3.lineTo(0, 170);
        _this.YellowGrp3.alpha = 0;
        
    }, 
    addCoinsToStick2:function()
    {
        _this.dragObject1=this.add.sprite(535,170,'NOLDGdragObject');
        _this.dragObject2=this.add.sprite(750,170,'NOLDGdragObject');
        _this.dragObject3=this.add.sprite(640,290,'NOLDGdragObject');
        _this.dragObject3.visible = false;
        _this.dragObject4=this.add.sprite(750,290,'NOLDGdragObject');
        _this.dragObject4.visible = false;
        _this.displayCoinBlue=this.add.sprite(312,325,'NOLDGblueCoin1to10');
        _this.displayCoinBlue.frame = _this.blueCoinFrame;
        
        _this.displayCoinYellow=this.add.sprite(362,125,'NOLDGyellowCoin1to25');
        _this.displayCoinYellow.frame = _this.yellowCoinFrame;
        
        _this.dragCoinBlue=this.add.sprite(312,_this.BlueCoinShowFrame,'NOLDblueCoinCut');
        _this.dragCoinBlue.inputEnabled = true;
        _this.dragCoinBlue.events.onInputDown.add(_this.blueCoinClicked2,_this);
        
        _this.yellowCoinDropAnim =this.add.sprite(362,170,'NOLDGyellowCoinDrop');
        _this.yellowCoinDropAnim.visible =false;
        
        _this.dragCoinYellow=this.add.sprite(362,_this.YellowCoinShowFrame,'NOLDyellowCoinCut');
        _this.dragCoinYellow.visible = false;
        
        
        _this.showCoinBlue1=this.add.sprite(567,205,'NOLDGblueCoin1to10');
        _this.showCoinBlue1.visible = false;
        _this.showCoinBlue2=this.add.sprite(782,205,'NOLDGblueCoin1to10');
        _this.showCoinBlue2.visible = false;
        _this.showCoinBlue3=this.add.sprite(672,325,'NOLDGblueCoin1to10');
        _this.showCoinBlue3.visible = false;
        _this.showCoinBlue4=this.add.sprite(782,325,'NOLDGblueCoin1to10');
        _this.showCoinBlue4.visible = false;
        
        _this.showCoinYellow1=this.add.sprite(617,205,'NOLDGyellowCoin1to10');
        _this.showCoinYellow1.visible = false;
        _this.showCoinYellow2=this.add.sprite(832,205,'NOLDGyellowCoin1to10');
        _this.showCoinYellow2.visible = false;
        _this.showCoinYellow3=this.add.sprite(722,325,'NOLDGyellowCoin1to10');
        _this.showCoinYellow3.visible = false;
        _this.showCoinYellow4=this.add.sprite(832,325,'NOLDGyellowCoin1to10');
        _this.showCoinYellow4.visible = false;
        
        //_this.BlinkquotientBox();
        //Tween hand and Blue coin******************************************
        
        
        if(_this.no1 == 0)
        {
        _this.NOLDGglowCoin=this.add.sprite(305,330,'NOLDGglowCoin');
        _this.anim = _this.NOLDGglowCoin.animations.add('glow');
        _this.anim.play(5,true);
            
        _this.tweenCoin=this.add.sprite(312,338,'NOLDGblueCoin');
        _this.NOLDGglowCoin.bringToTop(this);
        _this.showHand = _this.add.sprite(340,350,'NOLDhand');
        _this.showHand.scale.setTo(0.7);
        _this.tween1 = this.add.tween(_this.showHand);
        _this.tween1.to({ x: 580,y:200}, 0, 'Linear', true, 0);
        _this.tween2 = this.add.tween(_this.tweenCoin);
        _this.tween2.to({ x: 580,y:200}, 0, 'Linear', true, 0);
        _this.tween1.onComplete.add(function(){
              _this.showHand.kill();
              _this.tweenCoin.kill();
              _this.showCoinBlue1.visible = true;
            
            _this.tweenCoin=this.add.sprite(312,338,'NOLDGblueCoin');
            _this.showHand = _this.add.sprite(340,350,'NOLDhand');
            _this.showHand.scale.setTo(0.7);
            _this.tween1 = this.add.tween(_this.showHand);
            _this.tween1.to({ x: 790,y:200}, 0, 'Linear', true, 0);
            _this.tween2 = this.add.tween(_this.tweenCoin);
            _this.tween2.to({ x: 790,y:200}, 0, 'Linear', true, 0);
                _this.tween1.onComplete.add(function(){
                _this.showHand.kill();
                _this.tweenCoin.kill();
                _this.showCoinBlue2.visible = true;
                
                _this.tweenCoin=this.add.sprite(312,338,'NOLDGblueCoin');
                _this.showHand = _this.add.sprite(340,350,'NOLDhand');
                _this.showHand.scale.setTo(0.7);
                _this.tween1 = this.add.tween(_this.showHand);
                _this.tween1.to({ x: 580,y:420}, 0, 'Linear', true, 0);
                _this.tween2 = this.add.tween(_this.tweenCoin);
                _this.tween2.to({ x: 580,y:420}, 0, 'Linear', true, 0);
                _this.tween1.onComplete.add(function(){
                     _this.showHand.kill();
                     _this.tweenCoin.kill();
                     _this.showCoinBlue3.visible = true;
                     
                     _this.tweenCoin=this.add.sprite(312,338,'NOLDGblueCoin');
                     _this.showHand = _this.add.sprite(340,350,'NOLDhand');
                     _this.showHand.scale.setTo(0.7);
                     _this.tween1 = this.add.tween(_this.showHand);
                     _this.tween1.to({ x: 780,y:420}, 0, 'Linear', true, 0);
                     _this.tween2 = this.add.tween(_this.tweenCoin);
                     _this.tween2.to({ x: 780,y:420}, 0, 'Linear', true, 0);
                     _this.tween1.onComplete.add(function(){
                     _this.showHand.kill();
                     _this.tweenCoin.kill();
                         
                         _this.showCoinBlue4.visible = true;
                         _this.time.events.add(1000, function()
					       {
                             _this.NOLDGglowCoin.destroy();
                             _this.showCoinBlue1.visible = false;
                             _this.showCoinBlue2.visible = false;
                             _this.showCoinBlue3.visible = false;
                             _this.showCoinBlue4.visible = false;
                             _this.dragCoinBlue.inputEnabled = true;
                             _this.dragCoinBlue.input.useHandCursor = true;
                           },this);
                    },this);
                },this);
               },this);
            },this);
        }
        /**************************************************************************/
        _this.BlueGrp1 = _this.add.graphics(590, 170);
        _this.BlueGrp1.lineStyle(10, 0x0000ff);
        _this.BlueGrp1.moveTo(0, 0);
        _this.BlueGrp1.lineTo(0, 170);
        _this.BlueGrp1.alpha = 0;
        
        _this.BlueGrp2 = _this.add.graphics(805, 170);
        _this.BlueGrp2.lineStyle(10, 0x0000ff);
        _this.BlueGrp2.moveTo(0, 0);
        _this.BlueGrp2.lineTo(0, 170);
        _this.BlueGrp2.alpha = 0;
        

        
        _this.YellowGrp1 = _this.add.graphics(640, 170);
        _this.YellowGrp1.lineStyle(10, 0xffff00);
        _this.YellowGrp1.moveTo(0, 0);
        _this.YellowGrp1.lineTo(0, 170);
        _this.YellowGrp1.alpha = 0;
        
        _this.YellowGrp2 = _this.add.graphics(855, 170);
        _this.YellowGrp2.lineStyle(10, 0xffff00);
        _this.YellowGrp2.moveTo(0, 0);
        _this.YellowGrp2.lineTo(0, 170);
        _this.YellowGrp2.alpha = 0;
        
    },
    blueCoinClicked:function(target)
    {
        _this.vx = target.x;   
        _this.vy = target.y; 
        target.input.enableDrag(true);
        target.loadTexture('NOLDGblueCoin', 0, false);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(function(target){
            target.events.onDragStop.removeAll();
            console.log('@@@@@@@@@@@ '+_this.displayCoinBlue.frame,_this.blueCount1,_this.blueCountCheck1);
            if((_this.checkOverlap(target,_this.BlueGrp1))&&(_this.blueCount1<_this.blueCountCheck1))
                {
                    _this.showCoinBlue1.visible = true;
                    if(_this.blueCount1 == 0)
                        {
                            _this.showCoinBlue1.frame = 0;
                        }
                    else
                        {
                            _this.showCoinBlue1.frame++;
                        }
                    _this.blueCount1++;
                    _this.countForDropB++;
                    target.loadTexture('NOLDblueCoinCut', 0, false);
                    target.x = _this.vx;
                    target.y = _this.vy+13.3;
                    _this.displayCoinBlue.frame--;
                  
                            if( _this.checkForDropB == _this.countForDropB)
                            {
                                _this.displayCoinBlue.visible = false;
                                _this.time.events.add(1000, function()
                                   {
                                    _this.BlinkquotientBox();
                                   },_this);
                            }
                        
                    
                }
            else if((_this.checkOverlap(target,_this.BlueGrp2))&&(_this.blueCount2<_this.blueCountCheck1))
                {
                    _this.showCoinBlue2.visible = true;
                    if(_this.blueCount2 == 0)
                        {
                            _this.showCoinBlue2.frame = 0;
                        }
                    else
                        {
                            _this.showCoinBlue2.frame++;
                        }
                    _this.blueCount2++;
                    _this.countForDropB++;
                    target.loadTexture('NOLDblueCoinCut', 0, false);
                    target.x = _this.vx;   
                     target.y = _this.vy+13.3;
                    _this.displayCoinBlue.frame--;
                   
                            if( _this.checkForDropB == _this.countForDropB)
                            {
                                _this.displayCoinBlue.visible = false;
                                _this.time.events.add(1000, function()
                                   {
                                    _this.BlinkquotientBox();
                                   },_this);
                            }
                        
                }
            else if((_this.checkOverlap(target,_this.BlueGrp3))&&(_this.blueCount3<_this.blueCountCheck1))
                {
                    _this.showCoinBlue3.visible = true;
                    if(_this.blueCount3 == 0)
                        {
                            _this.showCoinBlue3.frame = 0;
                        }
                    else
                        {
                            _this.showCoinBlue3.frame++;
                        }
                    _this.blueCount3++;
                    _this.countForDropB++;
                    target.loadTexture('NOLDblueCoinCut', 0, false);
                    target.x = _this.vx;   
                     target.y = _this.vy+13.3;
                    _this.displayCoinBlue.frame--;
                 
                            if( _this.checkForDropB == _this.countForDropB)
                            {
                                _this.displayCoinBlue.visible = false;
                                _this.time.events.add(1000, function()
                                   {
                                    _this.BlinkquotientBox();
                                   },_this);
                            }
                        
                }
            else if((_this.checkOverlap(target,_this.BlueGrp4))&&(_this.blueCount4<_this.blueCountCheck1))
                {
                    _this.showCoinBlue4.visible = true;
                    if(_this.blueCount4 == 0)
                        {
                            _this.showCoinBlue4.frame = 0;
                        }
                    else
                        {
                            _this.showCoinBlue4.frame++;
                        }
                    _this.blueCount4++;
                    _this.countForDropB++;
                    target.loadTexture('NOLDblueCoinCut', 0, false);
                    target.x = _this.vx; 
                    target.y = _this.vy+13.3;
                    _this.displayCoinBlue.frame--;
                    
        
                            if( _this.checkForDropB == _this.countForDropB)
                            {
                                _this.displayCoinBlue.visible = false;
                                _this.time.events.add(1000, function()
                                   {
                                    _this.BlinkquotientBox();
                                   },_this);
                            }
                        
                }
            else if((_this.checkOverlap(target,_this.dragObjectQ))&&(_this.draglastBlueCoin == true))
                {
                            target.visible = false;
                            _this.draglastBlueCoin = false;
                            _this.playYellowFallAnimation();
                }
            else
                {
                    target.loadTexture('NOLDblueCoinCut', 0, false);
                    target.x = _this.vx;
                    target.y = _this.vy;
                    
                }
            },_this);
    },
    blueCoinClicked1:function(target)
    {
        _this.vx = target.x;
        _this.vy = target.y;
        target.input.enableDrag(true);
        target.loadTexture('NOLDGblueCoin', 0, false);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(function(target){
            target.events.onDragStop.removeAll();
            console.log('@@@@@@@@@@@ '+_this.displayCoinBlue.frame,_this.blueCount1,_this.blueCountCheck1);
            if((_this.checkOverlap(target,_this.BlueGrp1))&&(_this.blueCount1<_this.blueCountCheck1))
                {
                    _this.showCoinBlue1.visible = true;
                    if(_this.blueCount1 == 0)
                        {
                            _this.showCoinBlue1.frame = 0;
                        }
                    else
                        {
                            _this.showCoinBlue1.frame++;
                        }
                    _this.blueCount1++;
                    _this.countForDropB++;
                    target.loadTexture('NOLDblueCoinCut', 0, false);
                    target.x = _this.vx;
                    target.y = _this.vy+13.3;
                    _this.displayCoinBlue.frame--;
                  
                            if( _this.checkForDropB == _this.countForDropB)
                            {
                                _this.displayCoinBlue.visible = false;
                                _this.time.events.add(1000, function()
                                   {
                                    _this.BlinkquotientBox();
                                   },_this);
                            }
                        
                    
                }
            else if((_this.checkOverlap(target,_this.BlueGrp2))&&(_this.blueCount2<_this.blueCountCheck1))
                {
                    _this.showCoinBlue2.visible = true;
                    if(_this.blueCount2 == 0)
                        {
                            _this.showCoinBlue2.frame = 0;
                        }
                    else
                        {
                            _this.showCoinBlue2.frame++;
                        }
                    _this.blueCount2++;
                    _this.countForDropB++;
                    target.loadTexture('NOLDblueCoinCut', 0, false);
                    target.x = _this.vx;   
                     target.y = _this.vy+13.3;
                    _this.displayCoinBlue.frame--;
                   
                            if( _this.checkForDropB == _this.countForDropB)
                            {
                                _this.displayCoinBlue.visible = false;
                                _this.time.events.add(1000, function()
                                   {
                                    _this.BlinkquotientBox();
                                   },_this);
                            }
                        
                }
            else if((_this.checkOverlap(target,_this.BlueGrp3))&&(_this.blueCount3<_this.blueCountCheck1))
                {
                    _this.showCoinBlue3.visible = true;
                    if(_this.blueCount3 == 0)
                        {
                            _this.showCoinBlue3.frame = 0;
                        }
                    else
                        {
                            _this.showCoinBlue3.frame++;
                        }
                    _this.blueCount3++;
                    _this.countForDropB++;
                    target.loadTexture('NOLDblueCoinCut', 0, false);
                    target.x = _this.vx;   
                     target.y = _this.vy+13.3;
                    _this.displayCoinBlue.frame--;
                 
                            if( _this.checkForDropB == _this.countForDropB)
                            {
                                _this.displayCoinBlue.visible = false;
                                _this.time.events.add(1000, function()
                                   {
                                    _this.BlinkquotientBox();
                                   },_this);
                            }
                        
                }
           
            else if((_this.checkOverlap(target,_this.dragObjectQ))&&(_this.draglastBlueCoin == true))
                {
                            target.visible = false;
                            _this.playYellowFallAnimation();
                }
            else
                {
                    target.loadTexture('NOLDblueCoinCut', 0, false);
                    target.x = _this.vx;
                    target.y = _this.vy;
                    
                }
            },_this);
    },
    blueCoinClicked2:function(target)
    {
        _this.vx = target.x;
        _this.vy = target.y;
        target.input.enableDrag(true);
        target.loadTexture('NOLDGblueCoin', 0, false);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(function(target){
            target.events.onDragStop.removeAll();
            console.log('@@@@@@@@@@@ '+_this.displayCoinBlue.frame,_this.blueCount1,_this.blueCountCheck1);
            if((_this.checkOverlap(target,_this.BlueGrp1))&&(_this.blueCount1<_this.blueCountCheck1))
                {
                    _this.showCoinBlue1.visible = true;
                    if(_this.blueCount1 == 0)
                        {
                            _this.showCoinBlue1.frame = 0;
                        }
                    else
                        {
                            _this.showCoinBlue1.frame++;
                        }
                    _this.blueCount1++;
                    _this.countForDropB++;
                    target.loadTexture('NOLDblueCoinCut', 0, false);
                    target.x = _this.vx;
                    target.y = _this.vy+13.3;
                    _this.displayCoinBlue.frame--;
                  
                            if( _this.checkForDropB == _this.countForDropB)
                            {
                                _this.displayCoinBlue.visible = false;
                                _this.time.events.add(1000, function()
                                   {
                                    _this.BlinkquotientBox();
                                   },_this);
                            }
                        
                    
                }
            else if((_this.checkOverlap(target,_this.BlueGrp2))&&(_this.blueCount2<_this.blueCountCheck1))
                {
                    _this.showCoinBlue2.visible = true;
                    if(_this.blueCount2 == 0)
                        {
                            _this.showCoinBlue2.frame = 0;
                        }
                    else
                        {
                            _this.showCoinBlue2.frame++;
                        }
                    _this.blueCount2++;
                    _this.countForDropB++;
                    target.loadTexture('NOLDblueCoinCut', 0, false);
                    target.x = _this.vx;   
                     target.y = _this.vy+13.3;
                    _this.displayCoinBlue.frame--;
                   
                            if( _this.checkForDropB == _this.countForDropB)
                            {
                                _this.displayCoinBlue.visible = false;
                                _this.time.events.add(1000, function()
                                   {
                                    _this.BlinkquotientBox();
                                   },_this);
                            }
                        
                }
           
            else if((_this.checkOverlap(target,_this.dragObjectQ))&&(_this.draglastBlueCoin == true))
                {
                            target.visible = false;
                            _this.playYellowFallAnimation();
                }
            else
                {
                    target.loadTexture('NOLDblueCoinCut', 0, false);
                    target.x = _this.vx;
                    target.y = _this.vy;
                    
                }
            },_this);
    },
    yellowCoinClicked:function(target)
    {
        _this.vx = target.x;   
        _this.vy = target.y; 
        target.input.enableDrag(true);
         target.loadTexture('NOLDGyellowCoin', 0, false);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(function(target){
            target.events.onDragStop.removeAll();
            if((_this.checkOverlap(target,_this.YellowGrp1))&&(_this.yellowCount1<_this.yellowCountCheck1))
                {
                    console.log("YELLOW");
                    _this.showCoinYellow1.visible = true;
                   if(_this.yellowCount1 == 0)
                        {
                            _this.showCoinYellow1.frame = 0;
                        }
                    else
                        {
                            _this.showCoinYellow1.frame++;
                        }
                    _this.countForDropY++;                   
                    _this.yellowCount1++;
                    target.loadTexture('NOLDyellowCoinCut', 0, false);
                    target.x = _this.vx;   
                    target.y = _this.vy+13.3;
                    _this.displayCoinYellow.frame--;
                    if(_this.checkForDropY == _this.countForDropY)
                        {
                            _this.time.events.add(1000, function()
                               {
                                _this.BlinkquotientBox2();
                               },_this);
                        }
                    
                } 
            else if((_this.checkOverlap(target,_this.YellowGrp2))&&(_this.yellowCount2<_this.yellowCountCheck1))
                {
                    console.log("YELLOW");
                    _this.showCoinYellow2.visible = true;
                   if(_this.yellowCount2 == 0)
                        {
                            _this.showCoinYellow2.frame = 0;
                        }
                    else
                        {
                            _this.showCoinYellow2.frame++;
                        }
                    _this.countForDropY++;
                    _this.yellowCount2++;
                    target.loadTexture('NOLDyellowCoinCut', 0, false);
                    target.x = _this.vx;   
                    target.y = _this.vy+13.3;
                    _this.displayCoinYellow.frame--;
                    if(_this.checkForDropY == _this.countForDropY)
                        {
                            _this.time.events.add(1000, function()
                               {
                                _this.BlinkquotientBox2();
                               },_this);
                        }
                }
            else if((_this.checkOverlap(target,_this.YellowGrp3))&&(_this.yellowCount3<_this.yellowCountCheck1))
                {
                    console.log("YELLOW");
                    _this.showCoinYellow3.visible = true;
                   if(_this.yellowCount3 == 0)
                        {
                            _this.showCoinYellow3.frame = 0;
                        }
                    else
                        {
                            _this.showCoinYellow3.frame++;
                        }
                    _this.yellowCount3++;
                    _this.countForDropY++;
                    target.loadTexture('NOLDyellowCoinCut', 0, false);
                    target.x = _this.vx;   
                    target.y = _this.vy+13.3;
                    _this.displayCoinYellow.frame--;
                    if(_this.checkForDropY == _this.countForDropY)
                        {
                            _this.time.events.add(1000, function()
                               {
                                _this.BlinkquotientBox2();
                               },_this);
                        }
                }
            else if((_this.checkOverlap(target,_this.YellowGrp4))&&(_this.yellowCount4<_this.yellowCountCheck1))
                {
                    console.log("YELLOW");
                    _this.showCoinYellow4.visible = true;
                   if(_this.yellowCount4 == 0)
                        {
                            _this.showCoinYellow4.frame = 0;
                        }
                    else
                        {
                            _this.showCoinYellow4.frame++;
                        }
                    _this.yellowCount4++;
                    _this.countForDropY++;
                    target.loadTexture('NOLDyellowCoinCut', 0, false);
                    target.x = _this.vx;   
                    target.y = _this.vy+13.3;
                    _this.displayCoinYellow.frame--;
                    if(_this.checkForDropY == _this.countForDropY)
                        {
                            _this.time.events.add(1000, function()
                               {
                                _this.BlinkquotientBox2();
                               },_this);
                        }
                }
            else
                {
                    target.loadTexture('NOLDyellowCoinCut', 0, false);
                    target.x = _this.vx;
                    target.y = _this.vy;
                }
            },_this);
    }, 
    yellowCoinClicked1:function(target)
    {
        _this.vx = target.x;   
        _this.vy = target.y; 
        target.input.enableDrag(true);
         target.loadTexture('NOLDGyellowCoin', 0, false);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(function(target){
            target.events.onDragStop.removeAll();
            if((_this.checkOverlap(target,_this.YellowGrp1))&&(_this.yellowCount1<_this.yellowCountCheck1))
                {
                    console.log("YELLOW");
                    _this.showCoinYellow1.visible = true;
                   if(_this.yellowCount1 == 0)
                        {
                            _this.showCoinYellow1.frame = 0;
                        }
                    else
                        {
                            _this.showCoinYellow1.frame++;
                        }
                    _this.countForDropY++;                   
                    _this.yellowCount1++;
                    target.loadTexture('NOLDyellowCoinCut', 0, false);
                    target.x = _this.vx;   
                    target.y = _this.vy+13.3;
                    _this.displayCoinYellow.frame--;
                    if(_this.checkForDropY == _this.countForDropY)
                        {
                            _this.time.events.add(1000, function()
                               {
                                _this.BlinkquotientBox2();
                               },_this);
                           if(_this.displayCoinYellow.frame == 0 && _this.questionNumber == 3)
                                {
                                    _this.displayCoinYellow.visible = false;
                                } 
                        }
                    
                } 
            else if((_this.checkOverlap(target,_this.YellowGrp2))&&(_this.yellowCount2<_this.yellowCountCheck1))
                {
                    console.log("YELLOW");
                    _this.showCoinYellow2.visible = true;
                   if(_this.yellowCount2 == 0)
                        {
                            _this.showCoinYellow2.frame = 0;
                        }
                    else
                        {
                            _this.showCoinYellow2.frame++;
                        }
                    _this.countForDropY++;
                    _this.yellowCount2++;
                    target.loadTexture('NOLDyellowCoinCut', 0, false);
                    target.x = _this.vx;   
                    target.y = _this.vy+13.3;
                    _this.displayCoinYellow.frame--;
                    if(_this.checkForDropY == _this.countForDropY)
                        {
                            _this.time.events.add(1000, function()
                               {
                                _this.BlinkquotientBox2();
                               },_this);
                            if(_this.displayCoinYellow.frame == 0 && _this.questionNumber == 3)
                                {
                                    _this.displayCoinYellow.visible = false;
                                }
                        }
                }
            else if((_this.checkOverlap(target,_this.YellowGrp3))&&(_this.yellowCount3<_this.yellowCountCheck1))
                {
                    console.log("YELLOW");
                    _this.showCoinYellow3.visible = true;
                   if(_this.yellowCount3 == 0)
                        {
                            _this.showCoinYellow3.frame = 0;
                        }
                    else
                        {
                            _this.showCoinYellow3.frame++;
                        }
                    _this.yellowCount3++;
                    _this.countForDropY++;
                    target.loadTexture('NOLDyellowCoinCut', 0, false);
                    target.x = _this.vx;   
                    target.y = _this.vy+13.3;
                    _this.displayCoinYellow.frame--;
                    if(_this.checkForDropY == _this.countForDropY)
                        {
                            _this.time.events.add(1000, function()
                               {
                                _this.BlinkquotientBox2();
                               },_this);
                            if(_this.displayCoinYellow.frame == 0 && _this.questionNumber == 3)
                                {
                                    _this.displayCoinYellow.visible = false;
                                }
                        }
                }
            else
                {
                    target.loadTexture('NOLDyellowCoinCut', 0, false);
                    target.x = _this.vx;
                    target.y = _this.vy;
                }
            },_this);
    },
    yellowCoinClicked2:function(target)
    {
        _this.vx = target.x;   
        _this.vy = target.y; 
        target.input.enableDrag(true);
         target.loadTexture('NOLDGyellowCoin', 0, false);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(function(target){
            target.events.onDragStop.removeAll();
            if((_this.checkOverlap(target,_this.YellowGrp1))&&(_this.yellowCount1<_this.yellowCountCheck1))
                {
                    console.log("YELLOW");
                    _this.showCoinYellow1.visible = true;
                   if(_this.yellowCount1 == 0)
                        {
                            _this.showCoinYellow1.frame = 0;
                        }
                    else
                        {
                            _this.showCoinYellow1.frame++;
                        }
                    _this.countForDropY++;                   
                    _this.yellowCount1++;
                    target.loadTexture('NOLDyellowCoinCut', 0, false);
                    target.x = _this.vx;   
                    target.y = _this.vy+13.3;
                    _this.displayCoinYellow.frame--;
                    if(_this.checkForDropY == _this.countForDropY)
                        {
                            _this.time.events.add(1000, function()
                               {
                                _this.BlinkquotientBox2();
                               },_this);
                           if((_this.displayCoinYellow.frame == 0 && _this.questionNumber == 5)||(_this.displayCoinYellow.frame == 0 && _this.questionNumber == 6))
                                {
                                    _this.displayCoinYellow.visible = false;
                                }
                        }
                    
                } 
            else if((_this.checkOverlap(target,_this.YellowGrp2))&&(_this.yellowCount2<_this.yellowCountCheck1))
                {
                    console.log("YELLOW");
                    _this.showCoinYellow2.visible = true;
                   if(_this.yellowCount2 == 0)
                        {
                            _this.showCoinYellow2.frame = 0;
                        }
                    else
                        {
                            _this.showCoinYellow2.frame++;
                        }
                    _this.countForDropY++;
                    _this.yellowCount2++;
                    target.loadTexture('NOLDyellowCoinCut', 0, false);
                    target.x = _this.vx;   
                    target.y = _this.vy+13.3;
                    _this.displayCoinYellow.frame--;
                    if(_this.checkForDropY == _this.countForDropY)
                        {
                            _this.time.events.add(1000, function()
                               {
                                _this.BlinkquotientBox2();
                               },_this);
                            if((_this.displayCoinYellow.frame == 0 && _this.questionNumber == 5)||(_this.displayCoinYellow.frame == 0 && _this.questionNumber == 6))
                                {
                                    _this.displayCoinYellow.visible = false;
                                }
                        }
                }
            else
                {
                    target.loadTexture('NOLDyellowCoinCut', 0, false);
                    target.x = _this.vx;
                    target.y = _this.vy;
                }
            },_this);
    },
    
    BlinkquotientBox:function()
    {
        _this.VoiceNumber = 2;
        _this.getVoice(_this.VoiceNumber);
        _this.addNumberPad();
        _this.quotientBox1Pressed = true;
        _this.quotientBox1.visible = true;
        _this.anim = _this.quotientBox1.animations.add('glow');
        _this.anim.play(5,true);
    }, 
    BlinkquotientBox2:function()
    {
        _this.VoiceNumber = 8;
        _this.getVoice(_this.VoiceNumber);
        _this.addNumberPad();
        _this.quotientBox2Pressed = true;
        _this.quotientBox2.visible = true;
        _this.anim = _this.quotientBox2.animations.add('glow');
        _this.anim.play(5,true);
    },
    BlinkDivident3Box:function()
    {
        _this.VoiceNumber = 3;
        _this.getVoice(_this.VoiceNumber);
        
        _this.addNumberPad();
        _this.divident3BoxPressed = true;
        _this.divident3.visible = true;
        _this.anim = _this.divident3.animations.add('glow');
        _this.anim.play(5,true);
    },
    BlinkDivident4Box:function()
    {
         _this.VoiceNumber = 4;
        _this.getVoice(_this.VoiceNumber);
        _this.NOLDGunderLine1.visible = true;
        _this.addNumberPad();
        _this.divident4BoxPressed = true;
        _this.divident4.visible = true;
        _this.anim = _this.divident4.animations.add('glow');
        _this.anim.play(5,true);
    },
    BlinkDivident5Box:function()
    {
        _this.VoiceNumber = 6;
        _this.getVoice(_this.VoiceNumber);
        _this.downArrow.visible = true;
        _this.addNumberPad();
        _this.divident5BoxPressed = true;
        _this.divident5.visible = true;
        _this.anim = _this.divident5.animations.add('glow');
        _this.anim.play(5,true);
    },
    BlinkDivident6And7Box:function()
    {
        _this.VoiceNumber = 9;
        _this.getVoice(_this.VoiceNumber);
        _this.addNumberPad();
        _this.divident6BoxPressed = true;
        _this.divident6.visible = true;
        /*_this.divident6.inputEnabled = true;
        _this.divident6.events.onInputDown.add(function(target){
            _this.anim1.stop(null,true);
            _this.divident7.frame = 0;
        },_this);*/
        
        _this.divident7.visible = true;
        _this.anim = _this.divident6.animations.add('glow');
        _this.anim.play(5,true);
    },
    BlinkDivident8Box:function()
    {
        _this.VoiceNumber = 10;
        _this.getVoice(_this.VoiceNumber);
        _this.addNumberPad();
        _this.divident8.visible = true;
        _this.NOLDGunderLine2.visible =true;
        _this.divident8BoxPressed = true;
        _this.anim = _this.divident8.animations.add('glow');
        _this.anim.play(5,true);
    },
    dragRemaingBlueToYellow:function()
    {
         if(_this.no1 == 0)
        {
            _this.tweenCoin=this.add.sprite(312,338,'NOLDGblueCoin');
            _this.NOLDGglowCoin.bringToTop(this);
            _this.showHand = _this.add.sprite(340,350,'NOLDhand');
            _this.showHand.scale.setTo(0.7);
            _this.tween1 = this.add.tween(_this.showHand);
            _this.tween1.to({ x: 370,y:150}, 0, 'Linear', true, 0);
            _this.tween2 = this.add.tween(_this.tweenCoin);
            _this.tween2.to({ x: 370,y:150}, 0, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                  _this.showHand.kill();
                  _this.tweenCoin.kill();
                  _this.showCoinBlue1.visible = true;
            },_this);
        }
        _this.VoiceNumber = 5;
        _this.getVoice(_this.VoiceNumber);
        
        _this.draglastBlueCoin = true;
        
        _this.dragObjectQ.loadTexture('NOLDGdragObject1', 0, false);
        _this.dragObjectQ.y = 169;
            
    },
    enableYellowToDrag:function()
    {
        if(_this.no1 == 0)
        { 
        _this.tweenCoin=this.add.sprite(352,200,'NOLDGyellowCoin');
   
        _this.showHand = _this.add.sprite(390,210,'NOLDhand');
        _this.showHand.scale.setTo(0.7);
        _this.tween1 = this.add.tween(_this.showHand);
        _this.tween1.to({ x: 620,y:200}, 0, 'Linear', true, 0);
        _this.tween2 = this.add.tween(_this.tweenCoin);
        _this.tween2.to({ x: 620,y:200}, 0, 'Linear', true, 0);
        _this.tween1.onComplete.add(function(){
              _this.showHand.kill();
              _this.tweenCoin.kill();
              _this.showCoinYellow1.visible = true;
            
            _this.tweenCoin=this.add.sprite(352,200,'NOLDGyellowCoin');
            _this.showHand = _this.add.sprite(390,210,'NOLDhand');
            _this.showHand.scale.setTo(0.7);
            _this.tween1 = this.add.tween(_this.showHand);
            _this.tween1.to({ x: 790,y:200}, 0, 'Linear', true, 0);
            _this.tween2 = this.add.tween(_this.tweenCoin);
            _this.tween2.to({ x: 790,y:200}, 0, 'Linear', true, 0);
                _this.tween1.onComplete.add(function(){
                _this.showHand.kill();
                _this.tweenCoin.kill();
                _this.showCoinYellow2.visible = true;
                
                _this.tweenCoin=this.add.sprite(352,200,'NOLDGyellowCoin');
                _this.showHand = _this.add.sprite(390,210,'NOLDhand');
                _this.showHand.scale.setTo(0.7);
                _this.tween1 = this.add.tween(_this.showHand);
                _this.tween1.to({ x: 580,y:420}, 0, 'Linear', true, 0);
                _this.tween2 = this.add.tween(_this.tweenCoin);
                _this.tween2.to({ x: 580,y:420}, 0, 'Linear', true, 0);
                _this.tween1.onComplete.add(function(){
                     _this.showHand.kill();
                     _this.tweenCoin.kill();
                     _this.showCoinYellow3.visible = true;
                     
                     _this.tweenCoin=this.add.sprite(352,200,'NOLDGyellowCoin');
                     _this.showHand = _this.add.sprite(390,210,'NOLDhand');
                     _this.showHand.scale.setTo(0.7);
                     _this.tween1 = this.add.tween(_this.showHand);
                     _this.tween1.to({ x: 780,y:420}, 0, 'Linear', true, 0);
                     _this.tween2 = this.add.tween(_this.tweenCoin);
                     _this.tween2.to({ x: 780,y:420}, 0, 'Linear', true, 0);
                     _this.tween1.onComplete.add(function(){
                     _this.showHand.kill();
                     _this.tweenCoin.kill();
                         
                         _this.showCoinYellow4.visible = true;
                         _this.time.events.add(1000, function()
					       {
                             _this.showCoinYellow1.visible = false;
                             _this.showCoinYellow2.visible = false;
                             _this.showCoinYellow3.visible = false;
                             _this.showCoinYellow4.visible = false;
                           },this);
                    },this);
                },this);
               },this);
            },this);
        }
        
        _this.VoiceNumber = 7;
        _this.getVoice(_this.VoiceNumber);
        
        _this.dragCoinYellow.inputEnabled = true;
        _this.dragCoinYellow.input.useHandCursor = true;
        if(_this.questionNumber == 3  || _this.questionNumber == 4)
            _this.dragCoinYellow.events.onInputDown.add(_this.yellowCoinClicked1,_this);
        else  if(_this.questionNumber == 5  || _this.questionNumber == 6)
            _this.dragCoinYellow.events.onInputDown.add(_this.yellowCoinClicked2,_this);
        else
            _this.dragCoinYellow.events.onInputDown.add(_this.yellowCoinClicked,_this);
    },
    playYellowFallAnimation:function()
    {
       _this.yellowCoinDropAnim.visible =true;
        _this.timerForAnim = _this.time.create(false);
        _this.timerForAnim.loop(400, function(){
        _this.yellowCoinDropAnim.visible = true;
        _this.yellowCoinDropAnim.animations.add('NOLDGyellowCoinDrop',_this.yellowDropAnim);
        _this.yellowCoinDropAnim.animations.play('NOLDGyellowCoinDrop',200);

        _this.yellowCoinDropAnim.animations.currentAnim.onComplete.add(function () {
            _this.yellowCoinDropAnim.visible = false;
            _this.yellowDropAnim.pop();
            _this.displayCoinYellow.frame++;
            if(_this.displayCoinYellow.frame == _this.yellowIncFrame)
            {
                _this.dragCoinYellow.visible = true;
                _this.timerForAnim.stop();
                _this.BlinkDivident5Box();
            }
         },_this);
        },_this);
        _this.timerForAnim.start(); 
    },
    update:function(){

    },
    checkOverlap:function(spriteA, spriteB) 
    {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },
    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            _this.starsGroup.create(_this.world.centerX-30, 12, 'NOLDGstarAnim');
            
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
    getVoice:function(value){
         _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
		  _this.src = document.createElement('source');
            switch(value)
            {
                    
                    
                case 1: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/distcoinequally.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/distcoinequally.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/distcoinequally.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/distcoinequally.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/distcoinequally.mp3");
                            }
							else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/distcoinequally.mp3");
                            }
							else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/distcoinequally.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/distcoinequally.mp3");
                            }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/distcoinequally.mp3");
                                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                case 2: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/howmanytens.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/howmanytens.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/howmanytens.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/howmanytens.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/howmanytens.mp3");
                            }
							else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/howmanytens.mp3");
                            }
							else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/howmanytens.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/howmanytens.mp3");
                            }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/howmanytens.mp3");
                                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                case 3: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/howmanytotal.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/howmanytotal.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/howmanytotal.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/howmanytotal.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/howmanytotal.mp3");
                            }
							else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/howmanytotal.mp3");
                            }
							else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/howmanytotal.mp3");
                            }
							else if(window.languageSelected == "urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/urdu/howmanytotal.mp3");
                            }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/howmanytotal.mp3");
                                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                case 4: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/howmanyremain.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/howmanyremain.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/howmanyremain.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/howmanyremain.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/howmanyremain.mp3");
                            }
							else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/howmanyremain.mp3");
                            }
							else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/howmanyremain.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/howmanyremain.mp3");
                            }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/howmanyremain.mp3");
                                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                case 5: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/exchangeremaining.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/exchangeremaining.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/exchangeremaining.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/exchangeremaining.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/exchangeremaining.mp3");
                            }
							else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/exchangeremaining.mp3");
                            }
							else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/exchangeremaining.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/exchangeremaining.mp3");
                            }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/exchangeremaining.mp3");
                                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                case 6: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/howmanyones.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/howmanyones.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/howmanyones.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/howmanyones.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/howmanyones.mp3");
                            }
							else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/howmanyones.mp3");
                            }
							else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/howmanyones.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/howmanyones.mp3");
                            }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/howmanyones.mp3");
                                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                case 7: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/distributeallones.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/distributeallones.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/distributeallones.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/distributeallones.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/distributeallones.mp3");
                            }
							else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/distributeallones.mp3");
                            }
							else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/distributeallones.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/distributeallones.mp3");
                            }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/distributeallones.mp3");
                                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                case 8: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/howmanyonesdisteach.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/howmanyonesdisteach.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/howmanyonesdisteach.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/howmanyonesdisteach.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/howmanyonesdisteach.mp3");
                            }
							else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/howmanyonesdisteach.mp3");
                            }
							else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/howmanyonesdisteach.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/howmanyonesdisteach.mp3");
                            }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/howmanyonesdisteach.mp3");
                                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                case 9: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/howmanytotalonesdist.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/howmanytotalonesdist.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/howmanytotalonesdist.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/howmanytotalonesdist.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/howmanytotalonesdist.mp3");
                            }
							else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/howmanytotalonesdist.mp3");
                            }
							else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/howmanytotalonesdist.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/howmanytotalonesdist.mp3");
                            }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/howmanytotalonesdist.mp3");
                                _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                case 10: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/howmanyonesareremai.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/howmanyonesareremai.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/howmanyonesareremai.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/howmanyonesareremai.mp3");
                            }
							else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/howmanyonesareremai.mp3");
                            }
							else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/howmanyonesareremai.mp3");
                            }
							else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/howmanyonesareremai.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/howmanyonesareremai.mp3");
                            }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/howmanyonesareremai.mp3");
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
    
        stopVoice:function(){
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
addNumberPad:function(){
        
        _this.numBackground = this.add.sprite(480,510,'NOLDGnumbg');
        _this.numBackground.anchor.setTo(0.5);
        _this.numGroup = _this.add.group();
         _this.numGroup.add(_this.numBackground);
        //objGroup = this.add.group();
        _this.x = 80;
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,510,'NOLDGnumpadNum');  
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.anchor.setTo(0.5);
            if(i<9)
                _this.numbg.name = i+1;
            else
                 _this.numbg.name = 0;
            _this.numbg.frame = i;
            
            _this.numTxt = this.add.text(-2,1);
            //titletext.scale.setTo(1.5);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Oh Whale';
            _this.numTxt.fontSize = 45;
            //text.fontWeight = 'bold';
            _this.numTxt.fill = '#000000';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild( _this.numTxt);
            
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=70;
        }
        _this.eraser = _this.numGroup.create(_this.x+30,510,'NOLDGerase');
        _this.eraser.anchor.setTo(0.5);
        //_this.eraser.scale.setTo(0.5);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(_this.x+90,510,'NOLDGrightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.name = "eraser";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        
         _this.eraser.events.onInputDown.add(function(){
             _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
             _this.eraser.frame = 1;
             _this.time.events.add(500, function(){
                 _this.eraser.frame = 0;                                                
             }, _this);
             if(_this.quotientBox1Pressed)
             {
                 _this.quotientText1.frame = 0;
                 _this.selectedAns = 0;
             }
             if(_this.quotientBox2Pressed)
             {
                 _this.quotientText2.frame = 0;
                 _this.selectedAns = 0;
             }
             if(_this.divident3BoxPressed)
             {
                 _this.dividentText3.frame = 0;
                 _this.selectedAns = 0;
             }
             if(_this.divident4BoxPressed)
             {
                 _this.dividentText4.frame = 0;
                 _this.selectedAns = 0;
             }
             if(_this.divident5BoxPressed)
             {
                  _this.dividentText5.frame = 0;
                  _this.selectedAns = 0;
             }
             if(_this.divident6BoxPressed)
             {
                  _this.dividentText6.frame = 0;
                  _this.selectedAns = 0;
             }
             if(_this.divident7BoxPressed)
             {
                  _this.dividentText7.frame = 0;
                  _this.selectedAns1 = 0;
             }
             if(_this.divident8BoxPressed)
             {
                  _this.dividentText8.frame = 0;
                  _this.selectedAns = 0;
             }
         },this);
        
         _this.rightbtn.events.onInputDown.add(function(target){

            noofAttempts++;
            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
             _this.rightbtn.frame = 1;
             _this.time.events.add(500, function(){
                 _this.rightbtn.frame = 0;                                 
             }, _this);
             console.log("selected Answer "+ _this.selectedAns,_this.selectedAns1);
            if( (_this.selectedAns== _this.blueCountCheck1)  &&(_this.quotientBox1Pressed))  
                {
                     console.log("correct");
                    _this.quotientBox1Pressed = false;
                    _this.anim.stop(null,true);
                    _this.quotientBox1.frame = 0;
                    _this.tween = _this.add.tween(_this.numGroup);
                    _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                        _this.BlinkDivident3Box(); 
                     },_this);
                }
             else if( (_this.selectedAns== _this.yellowCountCheck1)  &&(_this.quotientBox2Pressed))  
                {
                    console.log("correct");
                    _this.quotientBox2Pressed = false;
                    _this.anim.stop(null,true);
                    _this.quotientBox2.frame = 0;
                    _this.tween = _this.add.tween(_this.numGroup);
                    _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                        _this.BlinkDivident6And7Box(); 
                     },_this);
                }
             else if( (_this.selectedAns== _this.checkForDropB)  &&(_this.divident3BoxPressed))  
                {
                    console.log("correct");
                    _this.divident3BoxPressed = false;
                    _this.anim.stop(null,true);
                    _this.divident3.frame = 0;
                    _this.tween = _this.add.tween(_this.numGroup);
                    _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                        _this.BlinkDivident4Box();
                     },_this);
                }
             else if( (_this.selectedAns== _this.remaingBlueCoin)  &&(_this.divident4BoxPressed))  
                {
                    console.log("correct");
                    _this.divident4BoxPressed = false;
                    _this.anim.stop(null,true);
                    _this.divident4.frame = 0;
                    _this.tween = _this.add.tween(_this.numGroup);
                    _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                        _this.dragRemaingBlueToYellow();
                     },_this);
                }
             else if( (_this.selectedAns== _this.yellowremaining)  &&(_this.divident5BoxPressed))  
                {
                    console.log("correct");
                    _this.divident5BoxPressed = false;
                    _this.anim.stop(null,true);
                    _this.divident5.frame = 0;
                    _this.tween = _this.add.tween(_this.numGroup);
                    _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                        _this.enableYellowToDrag();
                     },_this);
                }
             else if( (_this.selectedAns== _this.remainderEnd)  &&(_this.divident8BoxPressed))  
                {
                    console.log("correct!!");
                    _this.divident8BoxPressed = false;
                    _this.anim.stop(null,true);
                    _this.divident8.frame = 0;
                    _this.tween = _this.add.tween(_this.numGroup);
                    _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                        _this.correctAnswer();
                     },_this);
                }
             else if( (_this.selectedAns == _this.checkFor2dvdnt1)  &&(_this.selectedAns1 == _this.checkFor2dvdnt2))  
                {
                    _this.checkFor2dvdnt1 = 0;
                    _this.checkFor2dvdnt2 = 0;
                    console.log("correct@");
                    _this.divident6BoxPressed = false;
                    _this.divident7BoxPressed = false;
                    _this.anim.stop(null,true);
                    _this.anim1.stop(null,true);
                    _this.divident6.frame = 0;
                    _this.divident7.frame = 0;
                    _this.tween = _this.add.tween(_this.numGroup);
                    _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                        _this.BlinkDivident8Box();
                     },_this);
                }
             else
                 {
                    this.wmusic = this.add.audio('waudio');
        this.wmusic.play();
                    
                     if(_this.quotientBox1Pressed)
                         {
                             _this.shake.shake(10, _this.quotientBox1);
                         }
                     if(_this.quotientBox2Pressed)
                         {
                             _this.shake.shake(10, _this.quotientBox2);
                         }
                     if(_this.divident3BoxPressed)
                         {
                             _this.shake.shake(10, _this.divident3);
                         }
                     if(_this.divident4BoxPressed)
                         {
                             _this.shake.shake(10, _this.divident4);
                         }
                     if(_this.divident5BoxPressed)
                         {
                             _this.shake.shake(10, _this.divident5);
                         }
                     if(_this.divident8BoxPressed)
                         {
                             _this.shake.shake(10, _this.divident8);
                         }
                    if(_this.divident6BoxPressed) 
                        {
                            _this.shake.shake(10, _this.divident6);
                        }
                     if(_this.divident7BoxPressed) 
                        {
                            _this.shake.shake(10, _this.divident7);
                        }
                    
                 }
        },this);
       
        
            _this.numGroup.y = 50;
            _this.displayNopad = false;
            _this.tween = _this.add.tween(_this.numGroup);
            _this.tween.to({ y: 0 }, 0, 'Linear', true, 0); 
        
        
    },
    
     numClicked:function(target){
         
           console.log(target.name);
         _this.clickSound = _this.add.audio('ClickSound');
         _this.clickSound.play();
         
         if(_this.quotientBox1Pressed)
         {
             _this.selectedAns = target.name;
             _this.quotientText1.frame = target.name+1;

         }
         if(_this.quotientBox2Pressed)
         {
             _this.selectedAns = target.name;
             _this.quotientText2.frame = target.name+1;

         }
         if(_this.divident3BoxPressed)
         {
             _this.selectedAns = target.name;
             _this.dividentText3.frame = target.name+1;

         }
         if(_this.divident4BoxPressed)
         {
             _this.selectedAns = target.name;
             _this.dividentText4.frame = target.name+1;

         }
         if(_this.divident5BoxPressed)
         {
             _this.selectedAns = target.name;
             _this.dividentText5.frame = target.name+1;

         }
         if(_this.divident6BoxPressed)
         {
             _this.selectedAns = target.name;
             _this.dividentText6.frame = target.name+1;
             _this.anim1 = _this.divident7.animations.add('glow');
             _this.anim1.play(5,true);
             _this.anim.stop(null,true);
             _this.time.events.add(200, function(){
               _this.divident6BoxPressed = false;
               _this.divident7BoxPressed = true;
                 _this.divident6.frame = 0;
             },_this);
         }
         if(_this.divident7BoxPressed)
         {
             _this.selectedAns1 = target.name;
             _this.dividentText7.frame = target.name+1;
             _this.time.events.add(200, function(){
                _this.divident7BoxPressed = false;
                _this.divident6BoxPressed = true;
                 _this.divident7.frame = 0;
             },_this);
             _this.anim = _this.divident6.animations.add('glow');
             _this.anim.play(5,true);
             _this.anim1.stop(null,true);
         }
         if(_this.divident8BoxPressed)
         {
             _this.selectedAns = target.name;
             _this.dividentText8.frame = target.name+1;
         }
    },
    correctAnswer:function()
    {
       _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
                  
       _this.starAnim.smoothed = false;
       _this.anim4 =  _this.starAnim.animations.add('star');
       _this.celebr = _this.add.audio('celebr');
       _this.celebr.play();
       _this.anim4.play();

       _this.count1++;

       if(_this.timer)
                    {
                        _this.timer.stop();
                       _this.timer = null; 
                    }

       telInitializer.tele_saveAssessment(1,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);

       _this.time.events.add(500, function(){_this.removeEverthing();},_this);            
          
    },
removeEverthing:function() 
{
   _this.no1++;
        ////console.log("--------------------------"+ _this.no1);
        if( _this.no1<6)
        {
            _this.quotientBox1Pressed = false;
			_this.quotientBox2Pressed = false;
			_this.divident3BoxPressed = false;
			_this.divident4BoxPressed = false;
			_this.divident5BoxPressed = false;
			_this.divident6BoxPressed = false;
			_this.divident7BoxPressed = false;
			_this.divident8BoxPressed = false;
			_this.draglastBlueCoin = false;
            
            _this.checkFor2dvdnt1 = 0;
            _this.checkFor2dvdnt2 = 0;
            _this.remainderEnd = 0;
            _this.checkForDropB = 0;
            _this.blueCount1 = 0;
            _this.blueCount2 = 0;
            _this.blueCount3 = 0;
            _this.blueCount4 = 0;

            _this.blueCountCheck1 = 0;
            _this.yellowCountCheck1 = 0;

            _this.yellowCount1 = 0;
            _this.yellowCount2 = 0;
            _this.yellowCount3 = 0;
            _this.yellowCount4 = 0;

            _this.remaingBlueCoin = 0;
            _this.divisorFrame = 0;
            _this.divident1Frame = 0;
            _this.divident2Frame = 0;
            _this.yellowIncFrame =0;
            _this.VoiceNumber = 1;
             _this.timer1.stop();
             _this.count =0;
             _this.selectedAns = " ";
            _this.angle.destroy();
            _this.dragObjectQ.loadTexture('NOLDGdragObject1', 0, false);
            _this.divisor.destroy();
            _this.divident1.destroy();
            _this.divident2.destroy();
            _this.quotientBox1.destroy();
            _this.quotientText1.destroy();
            _this.quotientBox2.destroy();
            _this.quotientText2.destroy();
            _this.divident3.destroy();
            _this.dividentText3.destroy();
            _this.NOLDGunderLine1.destroy();
            _this.divident4.destroy();
            _this.dividentText4.destroy();
            _this.divident5.destroy();
            _this.dividentText5.destroy();
            _this.divident6.destroy();
            _this.dividentText6.destroy();
            _this.divident7.destroy();
            _this.dividentText7.destroy();
            _this.NOLDGunderLine2.destroy();
            _this.divident8.destroy();
            _this.dividentText8.destroy();
            
            _this.displayCoinBlue.destroy();
            _this.displayCoinYellow.destroy();
            _this.dragCoinBlue.destroy();
            _this.yellowCoinDropAnim.destroy();
            _this.dragCoinYellow.destroy();
            _this.showCoinBlue1.destroy();
            _this.showCoinBlue2.destroy();
            _this.showCoinBlue3.destroy();
            _this.showCoinBlue4.destroy();
            _this.showCoinYellow1.destroy();
            _this.showCoinYellow2.destroy();
            _this.showCoinYellow3.destroy();
            _this.showCoinYellow4.destroy();
            _this.dragObject1.destroy();
            _this.dragObject2.destroy();
            _this.dragObject3.destroy();
            _this.dragObject4.destroy();
            if(_this.NOLDGglowCoin)
                _this.NOLDGglowCoin.destroy();
            _this.downArrow.destroy();
             _this.getQuestion();
        }
    else
        {
            _this.state.start('longdivision1Score',true,false); 
        }
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
};