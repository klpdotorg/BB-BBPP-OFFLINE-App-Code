Game.unity4_2_3level1=function(){};


Game.unity4_2_3level1.prototype={


    init:function(game)
	{
		_this = this;
		telInitializer.gameIdInit("unity_4_2_2",gradeSelected);
	},

    preload:function(game){
        if(!window.grade3NSC1){

            window.grade3NSC1 = true;

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

        this.load.image('Level423_bg1', window.baseUrl+'assets/commonAssets/BG.png');
    
        //this.load.atlas('Level321_numberBig','assets/gradeAssets/4.2.3/numberBig.png' ,'json/gradeJson/4.2.3/numberBig.json');
       
        this.load.atlas('Level423_Coin1', window.baseUrl+'assets/gradeAssets/4.2.3/Coin 1.png' , window.baseUrl+'json/gradeJson/4.2.3/Coin 1.json');
        this.load.atlas('Level423_Coin10', window.baseUrl+'assets/gradeAssets/4.2.3/Coin 10.png' , window.baseUrl+'json/gradeJson/4.2.3/Coin 10.json');
        this.load.atlas('Level423_Coin100', window.baseUrl+'assets/gradeAssets/4.2.3/Coin 100.png' , window.baseUrl+'json/gradeJson/4.2.3/Coin 100.json');
        //this.load.atlas('Level423_OneToHundred', window.baseUrl+'assets/gradeAssets/4.2.3/1-100.png' , window.baseUrl+'json/gradeJson/4.2.3/1-100.json');
        
        this.load.atlas('Level423_boxBig', window.baseUrl+'assets/gradeAssets/4.2.3/boxSmall.png' , window.baseUrl+'json/gradeJson/4.2.3/boxSmall.json');
        this.load.atlas('Level423_lessThan', window.baseUrl+'assets/gradeAssets/4.2.3/lessThanSmall.png' , window.baseUrl+'json/gradeJson/4.2.3/lessThanSmall.json');
        this.load.atlas('Level423_greaterThan', window.baseUrl+'assets/gradeAssets/4.2.3/greaterThanSmall.png' , window.baseUrl+'json/gradeJson/4.2.3/greaterThanSmall.json');
        this.load.atlas('Level423_equal', window.baseUrl+'assets/gradeAssets/4.2.3/equal.png' , window.baseUrl+'json/gradeJson/4.2.3/equal.json');
        
        this.load.image('Level4_2_3_BlueCoin', window.baseUrl+'assets/gradeAssets/4.2.3/blueSingleCoin.png');
        this.load.image('Level4_2_3_GreenCoin', window.baseUrl+'assets/gradeAssets/4.2.3/greenSingleCoin.png');
        this.load.image('Level4_2_3_YellowCoin', window.baseUrl+'assets/gradeAssets/4.2.3/yellowSingleCoin.png');
        this.load.image('Level4_2_3_tray', window.baseUrl+'assets/gradeAssets/4.2.3/tray.png');
        this.load.image('Level4_2_3_greyTray', window.baseUrl+'assets/gradeAssets/4.2.3/greyTray.png');
        this.load.image('Level4_2_3_bigsmall', window.baseUrl+'assets/gradeAssets/4.2.3/bigBox.png');
        this.load.image('Level4_2_3_hand', window.baseUrl+'assets/gradeAssets/4.2.3/hand.png');
       

    }

    },
    
	create:function(game){
       
        _this.GreenAnimIncLeft = 0;
        _this.checkNumberGreenL = 0;
        _this.GreenAnimIncRight = 0;
        _this.checkNumberGreenR = 0;
        
        _this.BlueAnimIncLeft = 0;
        _this.checkNumberBlueL = 0;
        _this.BlueAnimIncRight = 0;
        _this.checkNumberBlueR = 0;
        
        _this.YellowAnimIncLeft = 0;
        _this.checkNumberYellowL = 0;
       _this.YellowAnimIncRight = 0;
        _this.checkNumberYellowR = 0;
        
        _this.YellowAnimInc = 0;
        _this.BlueAnimInc = 0;
        _this.BlueAnimIncEx = 0;
        _this.GreenAnimIncEx = 0;
        _this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=1;
        _this.someVar = 0;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.checkMangoes = 0;
        _this.selectedAns = "";
        
        
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.rightAns = "";
        _this.toDisplayNoPad = 0;
        //baudio.play(); 
		//baudio.loopFull(1);
         _this.w = 8;
         _this.z = 0;
         _this.wrong = true;
        _this.displayNopad = false;
        _this.toCheckNumberPad = false;
         _this.no1=0;
         _this.qArrays = [2,4,5,6,7,8,9,10,11];
      
        _this.checkNumber1 = 0;
        _this.checkNumber2 = 0;
        _this.blueLevelEnable = false;
        
        _this.animArraylength = 9;
        _this.qArrays = _this.shuffle( _this.qArrays);
        
        
         _this.count=0;
         _this.count1=0;
		 _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

             _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level423_bg1');
             _this.navBar = _this.add.sprite(0,0,'Level42C_Topbar');
             _this.navBar.scale.setTo(1,1);
             _this.timebg = _this.add.sprite(305,6,'Level42C_timer');
        
        
             _this.timeDisplay = _this.add.text(330,22, _this.minutes + ' : '+  _this.seconds);
             _this.timeDisplay.anchor.setTo(0.5);
             _this.timeDisplay.align = 'center';
             _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontWeight = 'normal';
             _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
             _this.timeDisplay.fill = '#ADFF2F';
         
       
       _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            ////console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'grade11_speaker');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);
        

         _this.trayLeft = _this.add.sprite(70,340,'Level4_2_3_tray');
         _this.trayRight = _this.add.sprite(570,340,'Level4_2_3_tray');
        
       
            _this.greytrayL = _this.add.sprite(90,180,'Level4_2_3_greyTray');
            _this.greytrayL.scale.setTo(1.8,1)
            _this.greytrayR = _this.add.sprite(590,180,'Level4_2_3_greyTray');
            _this.greytrayR.scale.setTo(1.8,1)
            
             _this.bigBox = _this.add.sprite(415,320,'Level423_boxBig');
        
              _this.bgBox1 = _this.add.sprite(440,460,'Level4_2_3_bigsmall');
              _this.bgBox2 = _this.add.sprite(290,460,'Level4_2_3_bigsmall');
              _this.bgBox3 = _this.add.sprite(580,460,'Level4_2_3_bigsmall');

             
        
         _this.generateStarsForTheScene(6);
        //  _this.no1++;
      
        _this.getQuestion();
          _this.getVoice(); 
    },

    updateTimer:function() {
     _this.counterForTimer++;
    // ////console.log("lololil"+_this.counterForTimer);
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
    {  //console.log("get Question "+_this.no1);
        _this.timer = _this.time.create(false);
         _this.displayNopad = true;
         _this.toCheckNumberPad = true;

         _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
          //  Set a TimerEvent to occur after 2 seconds
          _this.timer.loop(1000, function(){
               _this.AnsTimerCount++;
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
        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        ////console.log(" _this.no1"+ _this.no1);
         //_this.no1 =0;
     //console.log("Q "+_this.qArrays[_this.no1]);
    	switch(_this.qArrays[_this.no1])    
    	{
    		case 1:_this.gotoFirstQuestion();
    				break;
            case 2:_this.gotoSecondQuestion();
                    break; 
            case 3:_this.gotoThirdQuestion();
                    break;
            case 4:_this.gotoFourthQuestion();
                    break;
            case 5:_this.gotoFifthQuestion();
                    break;
            case 6:_this.gotoSixthQuestion();
                    break;
            case 7:_this.gotoSeventhQuestion();
                    break;
            case 8:_this.gotoEightQuestion();
                    break;
            case 9:_this.gotoNinethQuestion();
                    break;
            case 10:_this.gotoTenthQuestion();
                    break;
            case 11:_this.gotoEleventhQuestion();
                    break;
           
    	}
     _this.questionid = 1;
    },
    
displayCrocshere:function()
    {
              _this.crocEqual = _this.add.sprite(440,460,'Level423_equal');
              _this.crocEqual.inputEnabled = true;
              _this.crocEqual.input.useHandCursor = true;
              _this.crocEqual.events.onInputDown.add(_this.dragCrocToBox,_this);

              _this.crocLessThan = _this.add.sprite(290,460,'Level423_lessThan');
              _this.crocLessThan.inputEnabled = true;
              _this.crocLessThan.input.useHandCursor = true;
              _this.crocLessThan.events.onInputDown.add(_this.dragCrocToBox,_this);

              _this.crocGreaterThan = _this.add.sprite(580,460,'Level423_greaterThan');
              _this.crocGreaterThan.inputEnabled = true;
              _this.crocGreaterThan.input.useHandCursor = true;
              _this.crocGreaterThan.events.onInputDown.add(_this.dragCrocToBox,_this);
    },
  inputDownFunctionForLeverAndBox :function(){
      
            console.log("once !!!!!!");
            _this.xaxisYCopy = _this.xaxisYL = 286.5;//245 for 9 ,
            _this.xaxisBCopy = _this.xaxisBL = 206;
            _this.xaxisGCopy = _this.xaxisGL = 127;
      
            _this.xaxisYCopy = _this.xaxisYR = 786.5;//245 for 9 ,
            _this.xaxisBCopy = _this.xaxisBR = 706;
            _this.xaxisGCopy = _this.xaxisGR = 622;
    
            _this.Coin1LeftAbove = _this.add.sprite(280,18,'Level423_Coin1');
            _this.Coin1LeftAbove.scale.setTo(0.9,0.9);
            _this.Coin10LeftAbove = _this.add.sprite(200,20,'Level423_Coin10');
            _this.Coin10LeftAbove.scale.setTo(0.9,0.9);
            _this.Coin100LeftAbove = _this.add.sprite(115,20,'Level423_Coin100');
            _this.Coin100LeftAbove.scale.setTo(0.9,0.9);
      
            _this.Coin100LeftAbove.frame= 0;
            _this.Coin10LeftAbove.frame= 0;
            _this.Coin1LeftAbove.frame= 0;
            _this.Coin100LeftAbove.visible = false;
            _this.Coin10LeftAbove.visible = false;
            _this.Coin1LeftAbove.visible = false;
      
            _this.Coin1RightAbove = _this.add.sprite(770,18,'Level423_Coin1');
            _this.Coin1RightAbove.scale.setTo(0.9,0.9);
            _this.Coin10RightAbove = _this.add.sprite(700,20,'Level423_Coin10');
            _this.Coin10RightAbove.scale.setTo(0.9,0.9);
            _this.Coin100RightAbove = _this.add.sprite(620,20,'Level423_Coin100');
            _this.Coin100RightAbove.scale.setTo(0.9,0.9);
      
            _this.Coin100RightAbove.visible = false;
            _this.Coin10RightAbove.visible = false;
            _this.Coin1RightAbove.visible = false;
      
      
            _this.Coin1Left = _this.add.sprite(280,230,'Level423_Coin1');
            _this.Coin1Left.scale.setTo(0.85,0.85);
            _this.Coin10Left = _this.add.sprite(200,230,'Level423_Coin10');
            _this.Coin10Left.scale.setTo(0.85,0.85);
            _this.Coin100Left = _this.add.sprite(115,230,'Level423_Coin100');
            _this.Coin100Left.scale.setTo(0.85,0.85);
      
            _this.Coin1Right = _this.add.sprite(780,230,'Level423_Coin1');
            _this.Coin1Right.scale.setTo(0.85,0.85);
            _this.Coin10Right = _this.add.sprite(700,230,'Level423_Coin10');
            _this.Coin10Right.scale.setTo(0.85,0.85);
            _this.Coin100Right = _this.add.sprite(610,230,'Level423_Coin100');
            _this.Coin100Right.scale.setTo(0.85,0.85);
        
        
         _this.yellowCoinLeft = _this.add.sprite(286.5,_this.yaxisYL,'Level4_2_3_YellowCoin');
         _this.yellowCoinLeft.scale.setTo(0.85,0.85);
         _this.yellowCoinLeft.name = "YellowCoinLeft";
         
      
         _this.blueCoinLeft = _this.add.sprite(206,_this.yaxisBL,'Level4_2_3_BlueCoin');
         _this.blueCoinLeft.scale.setTo(0.85,0.85);
         _this.blueCoinLeft.name = "BlueCoinLeft";
      
        
         _this.greenCoinLeft = _this.add.sprite(127,_this.yaxisGL,'Level4_2_3_GreenCoin');
         _this.greenCoinLeft.scale.setTo(0.85,0.85);
         _this.greenCoinLeft.name = "GreenCoinLeft";
         _this.greenCoinLeft.inputEnabled = true;
         _this.greenCoinLeft.events.onInputDown.add(_this.singleCoinClickdGreen,_this);
      
         _this.yellowCoinRight = _this.add.sprite(786.5,_this.yaxisYR,'Level4_2_3_YellowCoin');
         _this.yellowCoinRight.scale.setTo(0.85,0.85);
         _this.yellowCoinRight.name = "YellowCoinRight";
        
      
        _this.blueCoinRight = _this.add.sprite(706,_this.yaxisBR,'Level4_2_3_BlueCoin');
        _this.blueCoinRight.scale.setTo(0.85,0.85);
        _this.blueCoinRight.name = "BlueCoinRight";
    
         _this.greenCoinRight = _this.add.sprite(622,_this.yaxisGR,'Level4_2_3_GreenCoin');
         _this.greenCoinRight.scale.setTo(0.85,0.85);
         _this.greenCoinRight.name = "GreenCoinRight";
      
       _this.graphics1 = _this.add.graphics(50, 50);
       _this.graphics1.lineStyle(2, 0x0000FF, 1);
       _this.graphics1.drawRect(40, 50, 280, 130);
       _this.graphics1.visible = false;
      
       _this.graphics2 = _this.add.graphics(50, 50);
       _this.graphics2.lineStyle(2, 0x0000FF, 1);
       _this.graphics2.drawRect(540, 50, 280, 130);
       _this.graphics2.visible = false;
      
       _this.hand = _this.add.sprite(145,_this.yaxisGL,'Level4_2_3_hand');
        var tween1 = this.add.tween(_this.greenCoinLeft);
        tween1.to({ x:127 , y:180}, 1000, 'Linear', true, 0);
        
        var tween1 = this.add.tween(_this.hand);
        tween1.to({ x:127 , y:180}, 1000, 'Linear', true, 0);
             tween1.onComplete.add(function(){
                 var tween2 = this.add.tween(_this.greenCoinLeft);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1000, 'Linear', true, 0);
                 var tween2 = this.add.tween(_this.hand);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1000, 'Linear', true, 0);
                  tween2.onComplete.add(function(){
                 _this.hand.visible = false;
                },this);
            },this);
   
  },
gotoFirstQuestion:function(){
     _this.displayCrocshere();
     _this.checkNumberGreenL = 7;
     _this.checkNumberGreenR = 7;
     
     _this.enableBlueCoin = 8;
     _this.dropBlueCoin = 0;
     
     _this.checkNumberBlueL = 7;
     _this.checkNumberBlueR = 7;
     
     _this.checkNumberYellowL = 7;
     _this.checkNumberYellowR = 7;
     _this.enableYellowCoin = 8;
     _this.dropYellowCoin = 0;
     
      _this.crocEqual.name = "R";
      _this.crocLessThan.name = "W";
      _this.crocGreaterThan.name = "W";
      
     _this.yaxisYGCopyL = _this.yaxisGL = 265;
     _this.yaxisYBCopyL = _this.yaxisBL = 266;
     _this.yaxisYYCopyL = _this.yaxisYL = 268;

     _this.yaxisYGCopyR = _this.yaxisGR = 265;
     _this.yaxisYBCopyR = _this.yaxisBR = 266;
     _this.yaxisYYCopyR = _this.yaxisYR = 268;
     
     _this.inputDownFunctionForLeverAndBox();
     _this.Coin100Left.frame= 6;
      _this.Coin10Left.frame= 6;
      _this.Coin1Left.frame= 6;
      _this.Coin100Right.frame= 6;
      _this.Coin10Right.frame= 6;
      _this.Coin1Right.frame= 6;
     
     },  
gotoSecondQuestion:function(){
     _this.displayCrocshere();
     _this.checkNumberGreenL = 6;
     _this.checkNumberGreenR = 6;
    
     _this.enableBlueCoin = 7;
     _this.dropBlueCoin = 0;
     
     _this.checkNumberBlueL = 6;
     _this.checkNumberBlueR = 6;

     
     _this.checkNumberYellowL = 6;
     _this.checkNumberYellowR = 6;
     _this.enableYellowCoin = 7;
     _this.dropYellowCoin = 0;

      _this.crocEqual.name = "R";
      _this.crocLessThan.name = "W";
      _this.crocGreaterThan.name = "W";
      
     _this.yaxisYGCopyL = _this.yaxisGL = 283;
     _this.yaxisYBCopyL = _this.yaxisBL = 283;
     _this.yaxisYYCopyL = _this.yaxisYL = 285;

     _this.yaxisYGCopyR = _this.yaxisGR = 283;
     _this.yaxisYBCopyR = _this.yaxisBR = 283;
     _this.yaxisYYCopyR = _this.yaxisYR = 285;
     
     _this.inputDownFunctionForLeverAndBox();
      _this.Coin100Left.frame= 5;
      _this.Coin10Left.frame= 5;
      _this.Coin1Left.frame= 5;
      _this.Coin100Right.frame= 5;
      _this.Coin10Right.frame= 5;
      _this.Coin1Right.frame= 5;
     }, 
gotoThirdQuestion:function(){
     _this.displayCrocshere();
     _this.checkNumberGreenL = 3;
     _this.checkNumberGreenR = 3;
    
     _this.enableBlueCoin = 4;
     _this.dropBlueCoin = 0;
     
     _this.checkNumberBlueL = 3;
     _this.checkNumberBlueR = 3;
     
     _this.checkNumberYellowL = 3;
     _this.checkNumberYellowR = 3;
    
     _this.enableYellowCoin = 4;
     _this.dropYellowCoin = 0;

      _this.crocEqual.name = "R";
      _this.crocLessThan.name = "W";
      _this.crocGreaterThan.name = "W";
      
     _this.yaxisYGCopyL = _this.yaxisGL = 332;
     _this.yaxisYBCopyL = _this.yaxisBL = 332;
     _this.yaxisYYCopyL = _this.yaxisYL = 333;

     _this.yaxisYGCopyR = _this.yaxisGR = 332;
     _this.yaxisYBCopyR = _this.yaxisBR = 332;
     _this.yaxisYYCopyR = _this.yaxisYR = 333;
     
     _this.inputDownFunctionForLeverAndBox();
      _this.Coin100Left.frame= 2;
      _this.Coin10Left.frame= 2;
      _this.Coin1Left.frame= 2;
      _this.Coin100Right.frame= 2;
      _this.Coin10Right.frame= 2;
      _this.Coin1Right.frame= 2;
     },
gotoFourthQuestion:function(){
     _this.displayCrocshere();
     _this.checkNumberGreenL = 7;
     _this.checkNumberGreenR = 7;
     
     _this.enableBlueCoin = 8;
     _this.dropBlueCoin = 0;
     
     _this.checkNumberBlueL = 7;
     _this.checkNumberBlueR = 7;
     
     _this.checkNumberYellowL = 5;
     _this.checkNumberYellowR = 5;
    
     _this.enableYellowCoin = 8;
     _this.dropYellowCoin = 0;
     
      _this.crocEqual.name = "W";
      _this.crocLessThan.name = "W";
      _this.crocGreaterThan.name = "R";
      
     _this.yaxisYGCopyL = _this.yaxisGL = 265;
     _this.yaxisYBCopyL = _this.yaxisBL = 266;
     _this.yaxisYYCopyL = _this.yaxisYL = 268;

     _this.yaxisYGCopyR = _this.yaxisGR = 265;
     _this.yaxisYBCopyR = _this.yaxisBR = 266;
     _this.yaxisYYCopyR = _this.yaxisYR = 303;
     
     _this.inputDownFunctionForLeverAndBox();
     _this.Coin100Left.frame= 6;
      _this.Coin10Left.frame= 6;
      _this.Coin1Left.frame= 6;
      _this.Coin100Right.frame= 6;
      _this.Coin10Right.frame= 6;
      _this.Coin1Right.frame= 4;
     }, 
gotoFifthQuestion:function(){
     _this.displayCrocshere();
     _this.checkNumberGreenL = 7;
     _this.checkNumberGreenR = 7;
     
     _this.enableBlueCoin = 8;
     _this.dropBlueCoin = 0;
     
     _this.checkNumberBlueL = 7;
     _this.checkNumberBlueR = 7;
     
     _this.checkNumberYellowL = 4;
     _this.checkNumberYellowR = 4;
    
     _this.enableYellowCoin = 8;
     _this.dropYellowCoin = 0;
     
      _this.crocEqual.name = "W";
      _this.crocLessThan.name = "R";
      _this.crocGreaterThan.name = "W";
      
     _this.yaxisYGCopyL = _this.yaxisGL = 265;
     _this.yaxisYBCopyL = _this.yaxisBL = 266;
     _this.yaxisYYCopyL = _this.yaxisYL = 318;

     _this.yaxisYGCopyR = _this.yaxisGR = 265;
     _this.yaxisYBCopyR = _this.yaxisBR = 266;
     _this.yaxisYYCopyR = _this.yaxisYR = 285;
     
     _this.inputDownFunctionForLeverAndBox();
     _this.Coin100Left.frame= 6;
      _this.Coin10Left.frame= 6;
      _this.Coin1Left.frame= 3;
      _this.Coin100Right.frame= 6;
      _this.Coin10Right.frame= 6;
      _this.Coin1Right.frame= 5;
     },
gotoSixthQuestion:function(){
     _this.displayCrocshere();
     _this.checkNumberGreenL = 7;
     _this.checkNumberGreenR = 7;
     
     _this.enableBlueCoin = 8;
     _this.dropBlueCoin = 0;
     
     _this.checkNumberBlueL = 5;
     _this.checkNumberBlueR = 5;
     
     _this.checkNumberYellowL = 6;
     _this.checkNumberYellowR = 6;
    
     _this.enableYellowCoin = 6;
     _this.dropYellowCoin = 0;
     
      _this.crocEqual.name = "W";
      _this.crocLessThan.name = "R";
      _this.crocGreaterThan.name = "W";
      
     _this.yaxisYGCopyL = _this.yaxisGL = 265;
     _this.yaxisYBCopyL = _this.yaxisBL = 300;
     _this.yaxisYYCopyL = _this.yaxisYL = 285;

     _this.yaxisYGCopyR = _this.yaxisGR = 265;
     _this.yaxisYBCopyR = _this.yaxisBR = 266;
     _this.yaxisYYCopyR = _this.yaxisYR = 285;
     
     _this.inputDownFunctionForLeverAndBox();
     _this.Coin100Left.frame= 6;
      _this.Coin10Left.frame= 4;
      _this.Coin1Left.frame= 5;
      _this.Coin100Right.frame= 6;
      _this.Coin10Right.frame= 6;
      _this.Coin1Right.frame= 5;
     }, 
gotoSeventhQuestion:function(){
     _this.displayCrocshere();
     _this.checkNumberGreenL = 7;
     _this.checkNumberGreenR = 7;
     
     _this.enableBlueCoin = 8;
     _this.dropBlueCoin = 0;
     
     _this.checkNumberBlueL = 4;
     _this.checkNumberBlueR = 4;
     
     _this.checkNumberYellowL = 6;
     _this.checkNumberYellowR = 6;
    
     _this.enableYellowCoin = 5;
     _this.dropYellowCoin = 0;
     
      _this.crocEqual.name = "W";
      _this.crocLessThan.name = "W";
      _this.crocGreaterThan.name = "R";
      
     _this.yaxisYGCopyL = _this.yaxisGL = 265;
     _this.yaxisYBCopyL = _this.yaxisBL = 266;
     _this.yaxisYYCopyL = _this.yaxisYL = 285;

     _this.yaxisYGCopyR = _this.yaxisGR = 265;
     _this.yaxisYBCopyR = _this.yaxisBR = 315;
     _this.yaxisYYCopyR = _this.yaxisYR = 285;
     
     _this.inputDownFunctionForLeverAndBox();
     _this.Coin100Left.frame= 6;
      _this.Coin10Left.frame= 6;
      _this.Coin1Left.frame= 5;
      _this.Coin100Right.frame= 6;
      _this.Coin10Right.frame= 3;
      _this.Coin1Right.frame= 5;
     }, 
gotoEightQuestion:function(){
     _this.displayCrocshere();
     _this.checkNumberGreenL = 6;
     _this.checkNumberGreenR = 6;
     
     _this.enableBlueCoin = 7;
     _this.dropBlueCoin = 0;
     
     _this.checkNumberBlueL = 4;
     _this.checkNumberBlueR = 4;
     
     _this.checkNumberYellowL = 6;
     _this.checkNumberYellowR = 6;
    
     _this.enableYellowCoin = 5;
     _this.dropYellowCoin = 0;
     
      _this.crocEqual.name = "W";
      _this.crocLessThan.name = "W";
      _this.crocGreaterThan.name = "R";
      
     _this.yaxisYGCopyL = _this.yaxisGL = 265;
     _this.yaxisYBCopyL = _this.yaxisBL = 315;
     _this.yaxisYYCopyL = _this.yaxisYL = 285;

     _this.yaxisYGCopyR = _this.yaxisGR = 282;
     _this.yaxisYBCopyR = _this.yaxisBR = 315;
     _this.yaxisYYCopyR = _this.yaxisYR = 285;
     
     _this.inputDownFunctionForLeverAndBox();
     _this.Coin100Left.frame= 6;
      _this.Coin10Left.frame= 3;
      _this.Coin1Left.frame= 5;
      _this.Coin100Right.frame= 5;
      _this.Coin10Right.frame= 3;
      _this.Coin1Right.frame= 5;
     }, 
gotoNinethQuestion:function(){
     _this.displayCrocshere();
     _this.checkNumberGreenL = 4;
     _this.checkNumberGreenR = 4;
     
     _this.enableBlueCoin = 5;
     _this.dropBlueCoin = 0;
     
     _this.checkNumberBlueL = 4;
     _this.checkNumberBlueR = 4;
     
     _this.checkNumberYellowL = 6;
     _this.checkNumberYellowR = 6;
    
     _this.enableYellowCoin = 5;
     _this.dropYellowCoin = 0;
     
      _this.crocEqual.name = "W";
      _this.crocLessThan.name = "R";
      _this.crocGreaterThan.name = "W";
      
     _this.yaxisYGCopyL = _this.yaxisGL = 315;
     _this.yaxisYBCopyL = _this.yaxisBL = 315;
     _this.yaxisYYCopyL = _this.yaxisYL = 285;

     _this.yaxisYGCopyR = _this.yaxisGR = 282;
     _this.yaxisYBCopyR = _this.yaxisBR = 315;
     _this.yaxisYYCopyR = _this.yaxisYR = 285;
     
      _this.inputDownFunctionForLeverAndBox();
      _this.Coin100Left.frame= 3;
      _this.Coin10Left.frame= 3;
      _this.Coin1Left.frame= 5;
      _this.Coin100Right.frame= 5;
      _this.Coin10Right.frame= 3;
      _this.Coin1Right.frame= 5;
     }, 
gotoTenthQuestion:function(){
     _this.displayCrocshere();
     _this.checkNumberGreenL = 6;
     _this.checkNumberGreenR = 6;
     
     _this.enableBlueCoin = 7;
     _this.dropBlueCoin = 0;
     
     _this.checkNumberBlueL = 4;
     _this.checkNumberBlueR = 4;
     
     _this.checkNumberYellowL = 6;
     _this.checkNumberYellowR = 6;
    
     _this.enableYellowCoin = 5;
     _this.dropYellowCoin = 0;
     
      _this.crocEqual.name = "W";
      _this.crocLessThan.name = "R";
      _this.crocGreaterThan.name = "W";
      
     _this.yaxisYGCopyL = _this.yaxisGL = 282;
     _this.yaxisYBCopyL = _this.yaxisBL = 315;
     _this.yaxisYYCopyL = _this.yaxisYL = 285;

     _this.yaxisYGCopyR = _this.yaxisGR = 282;
     _this.yaxisYBCopyR = _this.yaxisBR = 298;
     _this.yaxisYYCopyR = _this.yaxisYR = 252;
     
      _this.inputDownFunctionForLeverAndBox();
      _this.Coin100Left.frame= 5;
      _this.Coin10Left.frame= 3;
      _this.Coin1Left.frame= 5;
      _this.Coin100Right.frame= 5;
      _this.Coin10Right.frame= 4;
      _this.Coin1Right.frame= 8;
     }, 
gotoEleventhQuestion:function(){
     _this.displayCrocshere();
     _this.checkNumberGreenL = 6;
     _this.checkNumberGreenR = 6;
     
     _this.enableBlueCoin = 7;
     _this.dropBlueCoin = 0;
     
     _this.checkNumberBlueL = 5;
     _this.checkNumberBlueR = 5;
     
     _this.checkNumberYellowL = 6;
     _this.checkNumberYellowR = 6;
    
     _this.enableYellowCoin = 5;
     _this.dropYellowCoin = 0;
     
      _this.crocEqual.name = "W";
      _this.crocLessThan.name = "W";
      _this.crocGreaterThan.name = "R";
      
     _this.yaxisYGCopyL = _this.yaxisGL = 282;
     _this.yaxisYBCopyL = _this.yaxisBL = 250;
     _this.yaxisYYCopyL = _this.yaxisYL = 270;

     _this.yaxisYGCopyR = _this.yaxisGR = 282;
     _this.yaxisYBCopyR = _this.yaxisBR = 298;
     _this.yaxisYYCopyR = _this.yaxisYR = 285;
     
      _this.inputDownFunctionForLeverAndBox();
      _this.Coin100Left.frame= 5;
      _this.Coin10Left.frame= 7;
      _this.Coin1Left.frame= 6;
      _this.Coin100Right.frame= 5;
      _this.Coin10Right.frame= 4;
      _this.Coin1Right.frame= 5;
     }, 
dragCrocToBox:function(target){
    
     _this.vx = target.x;   
     _this.vy = target.y; 
      target.input.enableDrag(true);
     _this.clickSound = _this.add.audio('ClickSound');
     _this.clickSound.play();
     target.events.onDragStop.add(
            function(target){
                      if(_this.checkOverlap(target, _this.bigBox) &&(target.name == "R"))
                          {
                              console.log("GGG"+target.key);
                                _this.crocEqual.inputEnabled = false;
                                _this.crocLessThan.inputEnabled = false;
                              _this.crocGreaterThan.inputEnabled = false;
                              _this.correctAns(target);
                               target.x = 424;
                               target.y = 327;
                               target.scale.setTo(1.35,1.35);
                              if(target.key == "Level423_equal")
                              {
                                 target.animations.add('Level423_equal',[0,1,2,3,4,5,6,7,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8]);
                                 target.animations.play('Level423_equal',5);
                              } 
                             else if(target.key == "Level423_greaterThan")
                              {
                                 target.animations.add('Level423_greaterThan',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
                                 target.animations.play('Level423_greaterThan',5);
                              }
                              else{
                                   target.animations.add('Level423_lessThan',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
                                   target.animations.play('Level423_lessThan',5);
                              }
                          }
                        else
                            {
                                target.x = _this.vx;
                                target.y = _this.vy;   
                            }
                      if(_this.checkOverlap(target, _this.bigBox) &&(target.name == "W"))
                            {
                                _this.wrongAns(target);
                                target.x = _this.vx;
                                target.y = _this.vy;  
                            }
                
                     
                target.events.onDragStop.removeAll(); 
            },_this);
                
},
singleCoinClickdGreen:function(target){
     
        _this.vx = target.x;   
        _this.vy = target.y; 
          target.input.enableDrag(true);
        //console.log(" target " +target.name);
        //console.log(" yellowCoin.y " +_this.yaxis);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(
            function(target){

                 if(_this.checkOverlap(target, _this.graphics1) && (target.name == "GreenCoinLeft")){
                     _this.coinFall = _this.add.audio('coinFall');
                     _this.coinFall.play();
                     

                     if(_this.qArrays[_this.no1] == 1 ||_this.qArrays[_this.no1] == 2 ||_this.qArrays[_this.no1] == 3||_this.qArrays[_this.no1] == 4||_this.qArrays[_this.no1] == 5||_this.qArrays[_this.no1] == 6||_this.qArrays[_this.no1] == 7||_this.qArrays[_this.no1] == 8||_this.qArrays[_this.no1] == 9||_this.qArrays[_this.no1] == 10||_this.qArrays[_this.no1] == 11)
                        {
                            
                            var tween1 = this.add.tween(_this.greenCoinRight);
                             tween1.to({ x:622 , y:180}, 300, 'Linear', true, 0);
                             tween1.onComplete.add(function(){
                                 _this.hand.visible = false;
                                 
                                  if(_this.yaxisGR == _this.yaxisYGCopyR)
                                    _this.Coin100RightAbove.visible = true;
                                else
                                   _this.Coin100RightAbove.frame++;

                                  _this.yaxisGR +=16.5;
                                  _this.greenCoinRight.y =_this.yaxisGR;
                                  _this.greenCoinRight.x =_this.xaxisGR;
                                  _this.Coin100Right.frame--;
                                  _this.GreenAnimIncRight++;
                                  //_this.dropBlueCoin++;
                                  if(_this.qArrays[_this.no1] == 9)
                                      {
                                         if(_this.checkNumberGreenR ==  _this.GreenAnimIncRight)
                                            {
                                                //_this.Coin100Right.visible = false;
                                            }
                                        else if(_this.checkNumberGreenR+1 ==  _this.GreenAnimIncRight)
                                             {
                                                _this.greenCoinRight.inputEnabled = false;
                                             }
                             
                                        }
                                 else{
                                    if(_this.checkNumberGreenR ==  _this.GreenAnimIncRight)
                                        {
                                            _this.Coin100Right.visible = false;
                                        }
                                    else if(_this.checkNumberGreenR+1 ==  _this.GreenAnimIncRight)
                                         {
                                            _this.greenCoinRight.visible = false;
                                         }
                                 }
                                 
                            },this);
                            console.log("_this.dropBlueCoin "+_this.dropBlueCoin);
                            
                         if(_this.yaxisGL == _this.yaxisYGCopyL)
                            _this.Coin100LeftAbove.visible = true;
                         else
                               _this.Coin100LeftAbove.frame++;

                          _this.yaxisGL +=16.5;
                          _this.greenCoinLeft.y =_this.yaxisGL;
                          _this.greenCoinLeft.x =_this.xaxisGL;
                          _this.Coin100Left.frame--;
                          _this.GreenAnimIncLeft++;
                          _this.dropBlueCoin++;
                            if(_this.qArrays[_this.no1] == 8)
                              {
                                  if(_this.checkNumberGreenL ==  _this.GreenAnimIncLeft)
                                    {
                                       // _this.Coin100Left.visible = false;
                                    }
                                 else if(_this.checkNumberGreenL+1 ==  _this.GreenAnimIncLeft)
                                     {
                                        _this.greenCoinLeft.inputEnabled = false;
                                     }
                              }
                            else{
                                if(_this.checkNumberGreenL ==  _this.GreenAnimIncLeft)
                                    {
                                        _this.Coin100Left.visible = false;
                                    }
                                 else if(_this.checkNumberGreenL+1 ==  _this.GreenAnimIncLeft)
                                     {
                                        _this.greenCoinLeft.visible = false;
                                     }
                            }
                        }
                     else if(_this.qArrays[_this.no1] == 8)
                         {
                             if(_this.yaxisGL == _this.yaxisYGCopyL)
                            _this.Coin100LeftAbove.visible = true;
                         else
                               _this.Coin100LeftAbove.frame++;

                          _this.yaxisGL +=16.5;
                          _this.greenCoinLeft.y =_this.yaxisGL;
                          _this.greenCoinLeft.x =_this.xaxisGL;
                          _this.Coin100Left.frame--;
                          _this.GreenAnimIncLeft++;
                          _this.dropBlueCoin++;
                        if(_this.checkNumberGreenL ==  _this.GreenAnimIncLeft)
                            {
                               // _this.Coin100Left.visible = false;
                            }
                         else if(_this.checkNumberGreenL+1 ==  _this.GreenAnimIncLeft)
                             {
                                _this.greenCoinLeft.inputEnabled = false;
                             }
                         }
                     } 
                   /* 
                        else if(this.qArrays[_this.no1] == 9)
                            {
                                if(_this.yaxisGR == _this.yaxisYGCopyR)
                                     _this.Coin100RightAbove.visible = true;
                                 else
                                       _this.Coin100RightAbove.frame++;

                                      _this.yaxisGR +=16.5;
                                      _this.greenCoinRight.y =_this.yaxisGR;
                                      _this.greenCoinRight.x =_this.xaxisGR;
                                      _this.Coin100Right.frame--;
                                      _this.GreenAnimIncRight++;
                                      _this.dropBlueCoin++;
                                if(_this.checkNumberGreenR ==  _this.GreenAnimIncRight)
                                    {
                                        //_this.Coin100Right.visible = false;
                                    }
                                else if(_this.checkNumberGreenR+1 ==  _this.GreenAnimIncRight)
                                     {
                                        _this.greenCoinRight.inputEnabled = false;
                                     }
                            }
                     }*/
                else
                    {
                        target.x = _this.vx;
                        target.y = _this.vy;
                       
                    }
                if(this.enableBlueCoin ==_this.dropBlueCoin)
                    {
                        _this.hand1 = _this.add.sprite(206,_this.yaxisBL,'Level4_2_3_hand');
                         var tween1 = this.add.tween(_this.blueCoinLeft);
                                tween1.to({ x:206 , y:180}, 1000, 'Linear', true, 0);
                                var tween1 = this.add.tween(_this.hand1);
                                tween1.to({ x:206 , y:180}, 1000, 'Linear', true, 0);
                                     tween1.onComplete.add(function(){
                                         var tween2 = this.add.tween(_this.blueCoinLeft);
                                         tween2.to({ x:_this.xaxisBL , y:_this.yaxisBL}, 1000, 'Linear', true, 0);
                                         var tween2 = this.add.tween(_this.hand1);
                                         tween2.to({ x:_this.xaxisBL , y:_this.yaxisBL}, 1000, 'Linear', true, 0);
                                       tween2.onComplete.add(function(){
                                                 _this.hand1.visible = false;
                                                 _this.blueCoinLeft.inputEnabled = true;
                                                 _this.blueCoinLeft.events.onInputDown.add(_this.singleCoinClickdBlue,_this);
                                             
                                      
                                        },this);
                                    },this);
                        
                    }
                 target.events.onDragStop.removeAll(); 
        },_this);
 }, 
singleCoinClickdBlue:function(target){
     
        _this.vx = target.x;   
        _this.vy = target.y; 
          target.input.enableDrag(true);
        //console.log(" target " +target.name);
        //console.log(" yellowCoin.y " +_this.yaxis);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(
            function(target){
                
                 if(_this.checkOverlap(target, _this.graphics1) && (target.name == "BlueCoinLeft")){
                     _this.coinFall = _this.add.audio('coinFall');
                    _this.coinFall.play();
                          if(_this.qArrays[_this.no1] == 1 ||_this.qArrays[_this.no1] == 2 ||_this.qArrays[_this.no1] == 3||_this.qArrays[_this.no1] == 4||_this.qArrays[_this.no1] == 5||_this.qArrays[_this.no1] == 6||_this.qArrays[_this.no1] == 7||_this.qArrays[_this.no1] == 8||_this.qArrays[_this.no1] == 9||_this.qArrays[_this.no1] == 10||_this.qArrays[_this.no1] == 11)
                        {
                            var tween1 = this.add.tween(_this.blueCoinRight);
                             tween1.to({ x:706 , y:180}, 500, 'Linear', true, 0);
                             tween1.onComplete.add(function(){
                                 if(_this.yaxisBR == _this.yaxisYBCopyR)
                                    _this.Coin10RightAbove.visible = true;
                                 else
                                    _this.Coin10RightAbove.frame++;

                                      _this.yaxisBR +=16.5;
                                      _this.blueCoinRight.y =_this.yaxisBR;
                                      _this.blueCoinRight.x =_this.xaxisBR;
                                      _this.Coin10Right.frame--;
                                      _this.BlueAnimIncRight++;
                                     // _this.dropYellowCoin++;
                                 if(_this.qArrays[_this.no1] == 6 || _this.qArrays[_this.no1] == 10)
                                     {
                                          if(_this.checkNumberBlueR ==  _this.BlueAnimIncRight)
                                            {
                                               //_this.Coin10Right.visible = false;
                                            }
                                        else if(_this.checkNumberBlueR+1 ==  _this.BlueAnimIncRight)
                                             {
                                                _this.blueCoinRight.inputEnabled = false;
                                             }
                                     }
                                 else
                                     {
                                        if(_this.checkNumberBlueR ==  _this.BlueAnimIncRight)
                                            {
                                               _this.Coin10Right.visible = false;
                                            }
                                        else if(_this.checkNumberBlueR+1 ==  _this.BlueAnimIncRight)
                                             {
                                                _this.blueCoinRight.visible = false;
                                             }
                                     }
                             },this);
                                 
                         if(_this.yaxisBL == _this.yaxisYBCopyL)
                            _this.Coin10LeftAbove.visible = true;
                         else
                               _this.Coin10LeftAbove.frame++;

                          _this.yaxisBL +=16.5;
                          _this.blueCoinLeft.y =_this.yaxisBL;
                          _this.blueCoinLeft.x =_this.xaxisBL;
                          _this.Coin10Left.frame--;
                          _this.BlueAnimIncLeft++;
                         _this.dropYellowCoin++;
                     
                             if(_this.qArrays[_this.no1] == 7||_this.qArrays[_this.no1] == 11)
                                 {
                                      if(_this.checkNumberBlueL ==  _this.BlueAnimIncLeft)
                                    {
                                        //_this.Coin10Left.visible = false;
                                    }
                                 else if(_this.checkNumberBlueL+1 ==  _this.BlueAnimIncLeft)
                                     {
                                        _this.blueCoinLeft.inputEnabled = false;
                                     }
                                 }
                            else{
                                if(_this.checkNumberBlueL ==  _this.BlueAnimIncLeft)
                                    {
                                        _this.Coin10Left.visible = false;
                                    }
                                 else if(_this.checkNumberBlueL+1 ==  _this.BlueAnimIncLeft)
                                     {
                                        _this.blueCoinLeft.visible = false;
                                     }
                            }
                        }
                     } 
                else
                    {
                        target.x = _this.vx;
                        target.y = _this.vy;
                       
                    }
                 if(this.enableYellowCoin ==_this.dropYellowCoin)
                    {
                        _this.hand2 = _this.add.sprite(286,_this.yaxisYL,'Level4_2_3_hand');
                         var tween1 = this.add.tween(_this.yellowCoinLeft);
                                tween1.to({ x:286.5 , y:180}, 1000, 'Linear', true, 0);
                         var tween1 = this.add.tween(_this.hand2);
                                tween1.to({ x:286.5 , y:180}, 1000, 'Linear', true, 0);
                                     tween1.onComplete.add(function(){
                                         var tween2 = this.add.tween(_this.yellowCoinLeft);
                                         tween2.to({ x:_this.xaxisYL , y:_this.yaxisYL}, 1000, 'Linear', true, 0);
                                         var tween2 = this.add.tween(_this.hand2);
                                           tween2.to({ x:_this.xaxisYL , y:_this.yaxisYL}, 1000, 'Linear', true, 0);
                                         tween2.onComplete.add(function(){
                                                _this.hand2.visible = false;
                                                 _this.yellowCoinLeft.inputEnabled = true;
                                                 _this.yellowCoinLeft.events.onInputDown.add(_this.singleCoinClickdYellow,_this);

                                        },this);
                                    },this);
                        
                       
                    }
                 target.events.onDragStop.removeAll(); 
        },_this);
 }, 
singleCoinClickdYellow:function(target){
     
        _this.vx = target.x;   
        _this.vy = target.y; 
          target.input.enableDrag(true);
        //console.log(" target " +target.name);
        //console.log(" yellowCoin.y " +_this.yaxis);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(
            function(target){
                
                 if(_this.checkOverlap(target, _this.graphics1) && (target.name == "YellowCoinLeft")){
                     _this.coinFall = _this.add.audio('coinFall');
                     _this.coinFall.play();
                        if(_this.qArrays[_this.no1] == 1 ||_this.qArrays[_this.no1] == 2 ||_this.qArrays[_this.no1] == 3||_this.qArrays[_this.no1] == 4||_this.qArrays[_this.no1] == 5||_this.qArrays[_this.no1] == 6||_this.qArrays[_this.no1] == 7||_this.qArrays[_this.no1] == 8||_this.qArrays[_this.no1] == 9||_this.qArrays[_this.no1] == 10||_this.qArrays[_this.no1] == 11)
                        {
                             var tween1 = this.add.tween(_this.yellowCoinRight);
                             tween1.to({ x:786 , y:180}, 500, 'Linear', true, 0);
                             tween1.onComplete.add(function(){
                                 
                                 if(_this.yaxisYR == _this.yaxisYYCopyR)
                                 _this.Coin1RightAbove.visible = true;
                             else
                                  _this.Coin1RightAbove.frame++;

                                  _this.yaxisYR +=16.5;
                                  _this.yellowCoinRight.y =_this.yaxisYR;
                                  _this.yellowCoinRight.x =_this.xaxisYR;
                                  _this.Coin1Right.frame--;
                                  _this.YellowAnimIncRight++;
                                 
                                  if(_this.qArrays[_this.no1]==5||_this.qArrays[_this.no1] == 10)
                                {
                                        if(_this.checkNumberYellowR ==  _this.YellowAnimIncRight)
                                        {
                                           // _this.Coin1Right.visible = false;
                                        }
                                        else if(_this.checkNumberYellowR+1 ==  _this.YellowAnimIncRight)
                                         {
                                            _this.yellowCoinRight.inputEnabled = false;
                                         }
                                }
                                 else
                                     {
                                        if(_this.checkNumberYellowR ==  _this.YellowAnimIncRight)
                                            {
                                                _this.Coin1Right.visible = false;
                                            }
                                        else if(_this.checkNumberYellowR+1 ==  _this.YellowAnimIncRight)
                                             {
                                                _this.yellowCoinRight.visible = false;
                                             }
                                     }
                            },this); 
                             if(_this.yaxisYL == _this.yaxisYYCopyL)
                                _this.Coin1LeftAbove.visible = true;
                             else
                                   _this.Coin1LeftAbove.frame++;

                              _this.yaxisYL +=16.5;
                              _this.yellowCoinLeft.y =_this.yaxisYL;
                              _this.yellowCoinLeft.x =_this.xaxisYL;
                              _this.Coin1Left.frame--;
                              _this.YellowAnimIncLeft++;
                            if(_this.qArrays[_this.no1]==4 ||_this.qArrays[_this.no1] == 11)
                                {
                                     if(_this.checkNumberYellowL ==  _this.YellowAnimIncLeft)
                                    {
                                       // _this.Coin1Left.inputEnabled = false;
                                    }
                                  else if(_this.checkNumberYellowL+1 ==  _this.YellowAnimIncLeft)
                                    {
                                        _this.yellowCoinLeft.inputEnabled = false;
                                    }
                                }
                        
                            else
                                {
                                    if(_this.checkNumberYellowL ==  _this.YellowAnimIncLeft)
                                    {
                                        _this.Coin1Left.visible = false;
                                    }
                                   else if(_this.checkNumberYellowL+1 ==  _this.YellowAnimIncLeft)
                                     {
                                        _this.yellowCoinLeft.visible = false;
                                     }
                                }
                        }
                    /* else if(_this.qArrays[_this.no1]==4)
                        {
                             if(_this.yaxisYL == _this.yaxisYYCopyL)
                                _this.Coin1LeftAbove.visible = true;
                             else
                                   _this.Coin1LeftAbove.frame++;

                              _this.yaxisYL +=16.5;
                              _this.yellowCoinLeft.y =_this.yaxisYL;
                              _this.yellowCoinLeft.x =_this.xaxisYL;
                              _this.Coin1Left.frame--;
                              _this.YellowAnimIncLeft++;

                            if(_this.checkNumberYellowL ==  _this.YellowAnimIncLeft)
                                {
                                   // _this.Coin1Left.inputEnabled = false;
                                }
                             else if(_this.checkNumberYellowL+1 ==  _this.YellowAnimIncLeft)
                                {
                                    _this.yellowCoinLeft.inputEnabled = false;
                                }
                        }*/
                     } 
                   /* else if(_this.qArrays[_this.no1]==5)
                        {
                            if(_this.yaxisYR == _this.yaxisYYCopyR)
                                 _this.Coin1RightAbove.visible = true;
                             else
                                  _this.Coin1RightAbove.frame++;

                                  _this.yaxisYR +=16.5;
                                  _this.yellowCoinRight.y =_this.yaxisYR;
                                  _this.yellowCoinRight.x =_this.xaxisYR;
                                  _this.Coin1Right.frame--;
                                  _this.YellowAnimIncRight++;
                            if(_this.checkNumberYellowR ==  _this.YellowAnimIncRight)
                                {
                                   // _this.Coin1Right.visible = false;
                                }
                            else if(_this.checkNumberYellowR+1 ==  _this.YellowAnimIncRight)
                                 {
                                    _this.yellowCoinRight.inputEnabled = false;
                                 }
                        }
                     }*/
                else
                    {
                        target.x = _this.vx;
                        target.y = _this.vy;
                       
                    }
                 target.events.onDragStop.removeAll(); 
        },_this);
 },
    
checkOverlap:function(spriteA, spriteB) 
{

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

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
    
    removeEverthing:function() 
    {
         _this.no1++;
        ////console.log("--------------------------"+ _this.no1);
        if( _this.no1<6)
        {
             _this.timer1.stop();
            _this.sceneCount++;
           
        _this.GreenAnimIncLeft = 0;
        _this.checkNumberGreenL = 0;
        _this.GreenAnimIncRight = 0;
        _this.checkNumberGreenR = 0;
        
        _this.BlueAnimIncLeft = 0;
        _this.checkNumberBlueL = 0;
        _this.BlueAnimIncRight = 0;
        _this.checkNumberBlueR = 0;
        
        _this.YellowAnimIncLeft = 0;
        _this.checkNumberYellowL = 0;
        _this.YellowAnimIncRight = 0;
        _this.checkNumberYellowR = 0;
            
        _this.Coin1LeftAbove.destroy();
        _this.Coin10LeftAbove.destroy();
        _this.Coin100LeftAbove.destroy();
        
        _this.Coin1RightAbove.destroy();
        _this.Coin10RightAbove.destroy();
        _this.Coin100RightAbove.destroy();
            
        _this.yellowCoinLeft.destroy();
        _this.blueCoinLeft.destroy();
        _this.greenCoinLeft.destroy();
        _this.yellowCoinRight.destroy();
        _this.blueCoinRight.destroy();
        _this.greenCoinRight.destroy();
            
        _this.Coin1Left.destroy();
        _this.Coin10Left.destroy();
        _this.Coin100Left.destroy();
        _this.Coin1Right.destroy();
        _this.Coin10Right.destroy();
        _this.Coin100Right.destroy();
            
        _this.crocEqual.destroy();
        _this.crocLessThan.destroy();
        _this.crocGreaterThan.destroy();

        _this.graphics1.destroy();
        _this.graphics2.destroy();
        if( _this.hand)
            _this.hand.destroy();
         if( _this.hand1)
            _this.hand1.destroy();
         if( _this.hand2)
            _this.hand2.destroy();

            
            _this.getQuestion();
            
        }
        else
        {
             _this.timer1.stop();
            _this.timer1 = null;
            _this.counterForTimer = null;
             _this.stopVoice();
            _this.state.start('unity4_2_3Score');
        }
    },
    
    generateStarsForTheScene:function(count)
	{
		 _this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			 _this.starsGroup.create(_this.world.centerX-15, 10, 'starAnim1');
            
			for(var j =0;j<i;j++)
			{
				if( _this.starsGroup.getChildAt(j))
				{
					 _this.starsGroup.getChildAt(j).x-=15;
					 _this.starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
	correctAns:function(target)
	{
        _this.noofAttempts++;
          
            
           if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }

               if(_this.AnsTimerCount<=0||_this.AnsTimerCount==null||_this.AnsTimerCount==undefined)
                _this.AnsTimerCount = 1;
            
      telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
            target.events.onInputDown.removeAll();
             _this.stopVoice();
        
        	       _this.speakerbtn.inputEnabled=false;
                    _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
                   // ////console.log(starAnim); 
                     _this.starAnim.smoothed = false;
                     _this.anim4 =  _this.starAnim.animations.add('star');
                    _this.celebr = _this.add.audio('celebr');
                     _this.celebr.play();
                     _this.anim4.play();

                     _this.count1++;
                    
                    _this.time.events.add(2000, function(){_this.removeEverthing();},_this);            
},
wrongAns:function(target)
	{
        _this.noofAttempts++;
               
        _this.timer1.stop();
        
		 _this.shake.shake(10,  target);
		 _this.wmusic = _this.add.audio('waudio');
		 _this.wmusic.play();
      
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor=true;

        //_this.time.events.add(500, function(){ target.events.onInputDown.removeAll();_},_this);
	},
      
    update:function(){

    },
    
    getVoice:function(){
        ////console.log("voice "+ _this.qArrays[ _this.no1]);
            _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
		  _this.src = document.createElement('source');
            switch( _this.qArrays[ _this.no1])
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
                case 11:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.3/English/Level 4_2_3.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.3/Hindi/Level 4_2_3.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.3/Kannada/Level 4_2_3.mp3");
                        }
						else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.2/Marathi/4.2.2.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.2/Telugu/4.2.2.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.2/Tamil/4.2.2.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.2/Urdu/4.2.2.mp3");
                        }
                        else if(window.languageSelected=="Gujarati")
                        {
                             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.2.2/4.2.2.mp3");
                        }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.3/Odiya/Level 4_2_3.mp3");//window.baseUrl+
							_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                        break;
            }
        _this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.play();
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
    
      shutdown:function()
        {
            _this.stopVoice();
        }
};