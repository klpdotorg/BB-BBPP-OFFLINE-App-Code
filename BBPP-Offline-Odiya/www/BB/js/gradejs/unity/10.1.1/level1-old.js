Game.unity10_1_1level1=function(){};


Game.unity10_1_1level1.prototype={


   init:function(game)
	{
		_this = this;
		telInitializer.gameIdInit("unity10_1_1",gradeSelected);
	},
    
	create:function(game){
       
	   _this.amplify = null;
	   
        _this.YellowAnimInc = 0;
        _this.GreenAnimInc = 0;
        _this.BlueAnimInc = 0;
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
         _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
        _this.checkNumber1 = 0
        _this.checkNumber2 = 0
        
        _this.animArraylength = 9;
        _this.qArrays = _this.shuffle( _this.qArrays);
        
        
         _this.count=0;
         _this.count1=0;
		 _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

             _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level321_bg1');
             _this.navBar = _this.add.sprite(0,0,'Level321_navBar');
             _this.navBar.scale.setTo(1,1);
             _this.timebg = _this.add.sprite(305,6,'Level321_timebg');
             /*_this.topicOutline = _this.add.sprite(70,5,'Level321_topicOutline');
             _this.practice = _this.add.sprite(78,10,'Level321_practice');
             _this.topic = _this.add.sprite(165,10,'Level321_topic');*/
        
        
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

       _this.speakerbtn = _this.add.sprite(600,6,'Level321_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);
        
        
        _this.coinPannel = _this.add.sprite(100,58,'Level321_coinMachinePannel');
        _this.Pannel = _this.add.sprite(658,145,'Level321_pannel');
        
        _this.coinBoxGreen = _this.add.sprite(150,95,'Level1011_coinDecrease');
        _this.coinBoxGreen.name = "coinBoxGreen";
        _this.coinBoxGreen.frame =3
        _this.coinBoxBlue = _this.add.sprite(315,95,'Level1011_coinDecrease');
        _this.coinBoxBlue.name ="coinBoxBlue";
        _this.coinBoxBlue.frame = 2;
        _this.coinBoxYellow = _this.add.sprite(480,95,'Level1011_coinDecrease');
        _this.coinBoxYellow.name = "coinBoxYellow";
        _this.coinBoxYellow.frame = 1;
        
         _this.exchangeGreen = _this.add.sprite(160,160,'Level1011_coinExchange');
         _this.exchangeGreen.name = "exchangeGreen";
         _this.exchangeBlue = _this.add.sprite(325,160,'Level1011_coinExchange');
         _this.exchangeBlue.name ="exchangeBlue";

        _this.Level321_OneToHundred1 = _this.add.sprite(195,75,'Level321_OneToHundred');
        _this.Level321_OneToHundred10 = _this.add.sprite(360,75,'Level321_OneToHundred');
        _this.Level321_OneToHundred10.frame = 1;
        _this.Level321_OneToHundred100 = _this.add.sprite(525,75,'Level321_OneToHundred');
        _this.Level321_OneToHundred100.frame = 2;
		
		_this.Level321_OneToHundredE1 = _this.add.sprite(675,134,'Level321_OneToHundred');
        _this.Level321_OneToHundredE10 = _this.add.sprite(730,134,'Level321_OneToHundred');
        _this.Level321_OneToHundredE10.frame = 1;
        _this.Level321_OneToHundredE100 = _this.add.sprite(787,134,'Level321_OneToHundred');
        _this.Level321_OneToHundredE100.frame = 2;
		
    
        _this.LeverGreenNumber = _this.add.sprite(155,98,'Level321_numberVSmall');
        _this.LeverGreenNumber.frame = 0;
        _this.LeverBlueNumber = _this.add.sprite(320,98,'Level321_numberVSmall');
        _this.LeverBlueNumber.frame = 0;
        _this.LeverYellowNumber = _this.add.sprite(484,98,'Level321_numberVSmall');
        _this.LeverYellowNumber.frame = 0;
        
        _this.shakeGroup = _this.add.group();
         _this.numBox1 = _this.add.sprite(723,305,'Level321_numberBox');
         _this.numBox1.name = "numBox1";
         _this.numBox2 = _this.add.sprite(775,305,'Level321_numberBox');
         _this.numBox2.name = "numBox2";
         _this.numBox3 = _this.add.sprite(671,305,'Level321_numberBox');
         _this.numBox3.name = "numBox3";
        _this.shakeGroup.add(_this.numBox1);
        _this.shakeGroup.add(_this.numBox2);
       // _this.shakeGroup.add(_this.numBox3);
        
        _this.minus = _this.add.sprite(650,230,'Level1011_Minus');
        
        _this.askNumber1 = _this.add.sprite(725,165,'Level321_numberSmall');
         _this.askNumber1.frame = 1;
        
        _this.askNumber2 = _this.add.sprite(780,165,'Level321_numberSmall');
        _this.askNumber2.frame = 1;
        
        _this.askNumber3 = _this.add.sprite(725,235,'Level321_numberSmall');
         _this.askNumber3.frame = 1;
        
        _this.askNumber4 = _this.add.sprite(780,235,'Level321_numberSmall');
        _this.askNumber4.frame = 1;

         _this.numBoxNum1 = _this.add.sprite(730,308,'Level321_numberSmall');
       // _this.numBoxNum1 = _this.add.sprite(510,95,'Level321_numberSmall');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.scale.setTo(0.9,0.9);
       // _this.numBoxNum1.frame  = 1;
        //_this.numBoxNum1.visible = false;
        
        _this.numBoxNum2 = _this.add.sprite(782,308,'Level321_numberSmall');
         _this.numBox2Pressed = false;
        //_this.numBoxNum2.frame  = 3;
         _this.numBoxNum2.scale.setTo(0.9,0.9);
       // _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(677,308,'Level321_numberSmall');
         _this.numBox3Pressed = false;
        //_this.numBoxNum3.frame  = 4;
         _this.numBoxNum3.scale.setTo(0.9,0.9);
        //_this.numBoxNum3.visible = false;
        
         _this.generateStarsForTheScene(6);
        //  _this.no1++;
        //_this.getVoice();
        _this.getQuestion();
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


        _this.noofAttempts=0;
        _this.AnsTimerCount=0;
        
        _this.timer = _this.time.create(false);
         _this.displayNopad = true;
         _this.toCheckNumberPad = true;
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
         //_this.no1 = 24;
     //console.log("Q "+_this.qArrays[_this.no1]);
    	switch(_this.qArrays[_this.no1])    
    	{
    		case 1: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 7;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =10;                 //19-6
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =7;
                    _this.checkNumber1 = 6;
                    _this.rightAns = 13;
                    _this.toDisplayNoPad = 6;
    				break;
    		case 2: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 7;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =10;             //19-5
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =6;
                    _this.checkNumber1 = 5;
                    _this.rightAns = 14;
                    _this.toDisplayNoPad = 5;
    				break;
    		case 3: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 7;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =10;         //19-4
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =5;
                    _this.checkNumber1 = 4;
                    _this.rightAns = 15;
                    _this.toDisplayNoPad = 4;
    				break;
    		case 4: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 6;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =9;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =7;
                    _this.checkNumber1 = 6;
                    _this.rightAns = 12;
                    _this.toDisplayNoPad = 6;
    				break;
    		case 5: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 6;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =9;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =3;
                    _this.checkNumber1 = 2;
                    _this.rightAns = 16;
                    _this.toDisplayNoPad = 2;
    				break;
            case 6: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 6;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =9;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =4;
                    _this.checkNumber1 = 3;
                    _this.rightAns = 15;
                    _this.toDisplayNoPad = 3;
    				break;
            case 7: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 6;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =9;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =6;
                    _this.checkNumber1 = 5;
                    _this.rightAns = 13;
                    _this.toDisplayNoPad = 5;
    				break;
            case 8: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 5;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =8;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =5;
                    _this.checkNumber1 = 4;
                    _this.rightAns = 13;
                    _this.toDisplayNoPad = 4;
    				break;
          case 9: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 5;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =8;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =6;
                    _this.checkNumber1 = 5;
                    _this.rightAns = 12;
                    _this.toDisplayNoPad = 5;
    				break;
        case 10: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 4;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =7;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =4;
                    _this.checkNumber1 = 3;
                    _this.rightAns = 13;
                    _this.toDisplayNoPad = 3;
    				break;
        case 11: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 4;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =7;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =5;
                    _this.checkNumber1 = 4;
                    _this.rightAns = 12;
                    _this.toDisplayNoPad = 4;
    				break; 
        case 12: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 4;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =7;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =3;
                    _this.checkNumber1 = 2;
                    _this.rightAns = 14;
                    _this.toDisplayNoPad = 2;
    				break; 
        case 13: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                   _this.wCoin = _this.Coin1.frame = 3;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =6;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =3;
                    _this.checkNumber1 = 2;
                    _this.rightAns = 13;
                    _this.toDisplayNoPad = 2;
    				break;
        case 14: //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 3;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =6;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =4;
                    _this.checkNumber1 = 3;
                    _this.rightAns = 12;
                    _this.toDisplayNoPad = 3;
    				break;
        case 15:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 2;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =5;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =3;
                    _this.checkNumber1 = 2;
                    _this.rightAns = 12;
                    _this.toDisplayNoPad = 2;
    				break;
        case 16:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 2;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =5;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =2;
                    _this.checkNumber1 = 1;
                    _this.rightAns = 13;
                    _this.toDisplayNoPad = 1;
    				break; 
        case 17:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 1;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =4;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =2;
                    _this.checkNumber1 = 1;
                    _this.rightAns = 12;
                    _this.toDisplayNoPad = 1;
    				break;
        case 18:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 245;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 7;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =10;                 //19-8
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =9;
                    _this.checkNumber1 = 8;
                    _this.rightAns = 11;
                    _this.toDisplayNoPad = 8;
    				break;
        case 19:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 265;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 6;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =9;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =8;
                    _this.checkNumber1 = 7;
                    _this.rightAns = 11;
                    _this.toDisplayNoPad = 7;
    				break; 
        case 20:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 285;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 5;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =8;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =7;
                    _this.checkNumber1 = 6;
                    _this.rightAns = 11;
                    _this.toDisplayNoPad = 6;
    				break;
            
        case 21:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 305;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 4;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame = 2;
                    _this.askNumber2.frame =7;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =6;
                    _this.checkNumber1 = 5;
                    _this.rightAns = 11;
                    _this.toDisplayNoPad = 5;
    				break; 
        case 22:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 325;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 3;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame =2;
                    _this.askNumber2.frame =6;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =5;
                    _this.checkNumber1 = 4;
                    _this.rightAns = 11;
                    _this.toDisplayNoPad = 4;
    				break;
        case 23:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 344;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 2;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame =2;
                    _this.askNumber2.frame =5;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =4;
                    _this.checkNumber1 = 3;
                    _this.rightAns = 11;
                    _this.toDisplayNoPad = 3;
    				break;
        case 24:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 364;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 1;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame =2;
                    _this.askNumber2.frame =4;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =3;
                    _this.checkNumber1 = 2;
                    _this.rightAns = 11;
                    _this.toDisplayNoPad = 2;
    				break; 
        case 25:    //_this.questionid = "10.1_1#SCR-"+_this.sceneCount;
                    _this.yaxisYCopy = _this.yaxisY = 384;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.wCoin = _this.Coin1.frame = 0;
                    _this.Coin10.frame = 0;
                    _this.askNumber1.frame =2;
                    _this.askNumber2.frame =3;
                    _this.askNumber3.frame =0;
                    _this.askNumber4.frame =2;
                    _this.checkNumber1 = 1;
                    _this.rightAns = 11;
                    _this.toDisplayNoPad = 1;
    				break;
           
    	}
     _this.questionid = 1;
    },
    

  inputDownFunctionForLeverAndBox :function(){
      
      _this.coinBoxYellow.animations.add('Level1011_coinDecrease',[0,1]);
       _this.coinBoxYellow.animations.play('Level1011_coinDecrease',5,true);
      
        _this.xaxisYCopy = _this.xaxisY = 507.5;//245 for 9 ,
        _this.xaxisBCopy = _this.xaxisB = 348;
        _this.yaxisBCopy = _this.yaxisB = 395;
      if(_this.qArrays[_this.no1]<4){
           _this.yaxisYCopy = _this.yaxisY = 245;
       }
       else if(_this.qArrays[_this.no1]<8){
           _this.yaxisYCopy = _this.yaxisY = 265; 
       }
      else if(_this.qArrays[_this.no1]<10){
           _this.yaxisYCopy = _this.yaxisY = 285; 
       }
      else if(_this.qArrays[_this.no1]<13){
           _this.yaxisYCopy = _this.yaxisY = 305; 
       }
      else if(_this.qArrays[_this.no1]<15){
           _this.yaxisYCopy = _this.yaxisY = 325;   
       } 
      else if(_this.qArrays[_this.no1]<17){
           _this.yaxisYCopy = _this.yaxisY = 345;   
       }
       else if(_this.qArrays[_this.no1]<18){
           _this.yaxisYCopy = _this.yaxisY = 365;   
       }
     
        _this.Coin1 = _this.add.sprite(500,220,'Level321_Coin1');
         _this.Coin10 = _this.add.sprite(340,220,'Level321_Coin10');
        _this.Coin10.visible = false;
        
         _this.yellowCoin = _this.add.sprite(507.5,_this.yaxisY,'Level1011_YellowCoin');
         _this.yellowCoin.name = "YellowCoin";
         _this.yellowCoin.inputEnabled = true;
         _this.yellowCoin.input.useHandCursor = true;
         _this.yellowCoin.events.onInputDown.add(_this.singleCoinClickd,_this);
     
         _this.blueCoin = _this.add.sprite(348,_this.yaxisB,'Level1011_BlueCoin');
         _this.blueCoin.name = "BlueCoin";
        /* _this.blueCoin.inputEnabled = true;
         _this.blueCoin.input.useHandCursor = true;*/
         _this.blueCoin.events.onInputDown.add(_this.singleCoinClickd,_this);
   
  },
 gotoFirstQuestion:function(){

        _this.inputDownFunctionForLeverAndBox();
            _this.Coin1.frame = 7;
            _this.Coin10.frame = 0;
            _this.askNumber1.frame = 2;
            _this.askNumber2.frame =10;
            _this.askNumber3.frame =0;
            _this.askNumber4.frame =2;
            _this.checkNumber1 = 1;
            _this.rightAns = 18;
            _this.toDisplayNoPad = 1;
     },    
 singleCoinClickd:function(target){
     
        _this.vx = target.x;   
        _this.vy = target.y; 
          target.input.enableDrag(true);
        //console.log(" target " +target.name);
        //console.log(" yellowCoin.y " +_this.yaxis);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        target.events.onDragStop.add(
            function(target){
                
                 if(_this.checkOverlap(target,_this.coinBoxYellow) && (target.name == "YellowCoin")){
                     //console.log("Hit");
                     if(_this.YellowAnimInc<_this.checkNumber1){
                         
                         _this.coinFall = _this.add.audio('coinFall');
                         _this.coinFall.play();
                         _this.yaxisY +=19.5;
                         _this.yellowCoin.y =_this.yaxisY;
                         _this.yellowCoin.x =_this.xaxisY;
                         _this.Coin1.frame--;
                         //console.log("11111111 "+  _this.Coin1.frame);
                         /* if(_this.Coin1.frame ==0)
                             _this.Coin1.visible  = false;*/
                         _this.LeverYellowNumber.frame++;
                        _this.YellowAnimInc++;
                         //console.log(_this.YellowAnimInc, _this.checkNumber1);
                         if(_this.YellowAnimInc ==_this.checkNumber1){
                             if(_this.Coin1.frame ==0 && _this.qArrays[_this.no1]>17)
                                _this.Coin1.visible  = false;
                             
                             _this.blueCoin.inputEnabled = true;
                             _this.blueCoin.input.useHandCursor = true;
                         }
                     }
                     else{
                         target.x = _this.vx;   
                         target.y = _this.vy;
                     }
                 }
                else if(_this.checkOverlap(target,_this.coinBoxBlue) && (target.name == "BlueCoin")){
                     //console.log("Hit");
                    if(_this.BlueAnimInc<_this.checkNumber2){
                         _this.coinFall = _this.add.audio('coinFall');
                         _this.coinFall.play();
                         _this.yaxisB +=18.5;
                         _this.blueCoin.visible = false;
                         _this.blueCoin.y =_this.yaxisB;
                         _this.blueCoin.x =_this.xaxisB;
                         _this.Coin10.frame--;
                         _this.LeverBlueNumber.frame++;
                         _this.BlueAnimInc++;
                    }
                  else{
                        target.x = _this.vx;  
                        target.y = _this.vy;
                }
             }
          else{
                target.x = _this.vx;   
                target.y = _this.vy;
            }
            target.events.onDragStop.removeAll(); 
                
        if(  _this.toDisplayNoPad == (_this.BlueAnimInc + _this.YellowAnimInc))
        {
            if( _this.toCheckNumberPad)
            {
                _this.coinBoxYellow.animations.stop(null,null);
                 _this.coinBoxYellow.frame = 1;
                //console.log("im here hre hre");
                _this.addNumberPad();
                _this.numBox2.frame = 1;
                _this.numBox2Pressed = true;
                _this.toCheckNumberPad = false;
                _this.displayNopad = true;
            }
        }
                
         },_this);
 },
    
checkOverlap:function(spriteA, spriteB) 
{

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

},
    addNumberPad:function(){
        
        _this.numBackground = this.add.sprite(480,505,'Level321_numBG');
        _this.numBackground.anchor.setTo(0.5);
        _this.numGroup = _this.add.group();
         _this.numGroup.add(_this.numBackground);
        //objGroup = this.add.group();
        _this.x = 80;
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,505,'Level321_NumberKey');  
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
        _this.eraser = _this.numGroup.create(_this.x+30,505,'Level321_erase');
        _this.eraser.anchor.setTo(0.5);
        //_this.eraser.scale.setTo(0.5);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(_this.x+90,505,'Level321_rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.name = "eraser";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        
         _this.eraser.events.onInputDown.add(function(){
             _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
                _this.eraser.frame = 1;
                /*if(_this.numBox1Pressed){
                    _this.numBoxNum1.visible = false;
                }
                else if(_this.numBox2Pressed){
                    _this.numBoxNum2.visible = false;
                }
                else if(_this.numBox3Pressed)
                {
                    _this.numBoxNum3.visible = false;
                }*/
                _this.numBoxNum1.visible = false;
                _this.numBoxNum2.visible = false;
                _this.numBoxNum3.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox2.frame = 1;
                    _this.numBox2Pressed = true;
                    _this.numBox1Pressed = false;
                    _this.toCheckNumberPad = false;
             
             _this.time.events.add(500, function(){_this.eraser.frame = 0}, _this);
         },this);
        
         _this.rightbtn.events.onInputDown.add(function(target){

           _this.noofAttempts++;
            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
             _this.rightbtn.frame = 1;
             _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3;
             //console.log("selected Answer "+ _this.selectedAns);
            if( _this.selectedAns== _this.rightAns ||"0"+_this.selectedAns == _this.rightAns)  
                {
                    //console.log("correct");
                    target.events.onInputDown.removeAll();
                    
                    _this.celebr = _this.add.audio('celebr');
                    _this.celebr.play();
                     _this.starAnim =  _this.starsGroup.getChildAt(_this.count1);
                   
                     _this.starAnim.smoothed = false;
                     _this.anim4 = _this.starAnim.animations.add('star');
                     _this.anim4.play();
                     _this.count1++;
                     _this.yellowCoin.visible = false;
                     _this.blueCoin.visible = false;
                     _this.Coin1.visible = true;
                    /*if(_this.qArrays[_this.no1]>8)
                        _this.Coin10.visible = false;
                    else*/
                        _this.Coin10.visible = true;
                    if(_this.qArrays[_this.no1]>17){
                            _this.Coin1.frame =_this.Coin1.frame+10;
                        }
                    else{
                            _this.Coin1.frame =_this.Coin1.frame+11;
                        }
                    _this.Coin10.frame =_this.Coin10.frame+10 ;
                    _this.numBox1.frame = 1;
                    _this.numBox2.frame = 1;
                   // _this.numBox3.frame = 1;
                    _this.numGroup.y = 00;
                    _this.tween1 = _this.add.tween(_this.numGroup);
                    _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                     _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);


                     if(_this.timer)
                     {
                          _this.timer.stop();
                          _this.timer = null;
                     }

                     console.log("here");
                     telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                }
            else
                { 
                    //console.log("wrong");
                     _this.rightbtn.frame = 1;
                    _this.blueCoin.inputEnabled = false;
                    _this.numBox3.frame = 0;
                    _this.numBox1.frame = 0;
                    _this.numBox2.frame = 0;
                    
                    _this.Coin10.frame = 0;
                    _this.Coin1.frame = _this.wCoin;
                    _this.BlueAnimInc = 0;
                    _this.YellowAnimInc = 0;
                    _this.numGroup.destroy();
                    
                    _this.LeverBlueNumber.frame= 0;
                    _this.LeverYellowNumber.frame= 0;
                    
                    _this.yaxisY = _this.yaxisYCopy;
                    _this.xaxisY = _this.xaxisYCopy;
                    _this.yaxisB = _this.yaxisBCopy;
                    _this.xaxisB = _this.xaxisBCopy;
                    _this.yellowCoin.y = _this.yaxisY;
                    _this.yellowCoin.x = _this.xaxisY;
                    _this.blueCoin.y =  _this.yaxisB;
                    _this.blueCoin.x = _this.xaxisB;
                    
                    _this.numBox2Pressed = false;
                    _this.numBox1Pressed = false;
                    _this.numBox3Pressed = false;
                    _this.toCheckNumberPad = true;
                    
                    _this.shake.shake(10, _this.shakeGroup);
                    _this.selectedAns = " ";
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    _this.waudio = _this.add.audio('waudio');
                    _this.waudio.play();
                     _this.numBoxNum1.visible = false;
                     _this.numBoxNum2.visible = false;
                     _this.numBoxNum3.visible = false;
                    
                    _this.coinBoxYellow.animations.add('Level1011_coinDecrease',[0,1]);
                    _this.coinBoxYellow.animations.play('Level1011_coinDecrease',5,true);
                    
                    /*if(_this.qArrays[_this.no1]>18)
                        _this.blueCoin.visible = true;*/
                     if(_this.qArrays[_this.no1]>17)
                            _this.Coin1.visible  = true;
                }
  
        },this);
       
        if(_this.displayNopad){
            //console.log("llllllllllllllllllllllll");
            _this.numGroup.y = 50;
             _this.displayNopad = false;
            _this.tween = _this.add.tween(_this.numGroup);
            _this.tween.to({ y: 0 }, 0, 'Linear', true, 0); 
        }
        
    },
    
     numClicked:function(target){
         
           //console.log(target.name);
         _this.clickSound = _this.add.audio('ClickSound');
         _this.clickSound.play();
         
         if(_this.numBox1Pressed){
             _this.numBoxNum1.visible = true;
             _this.selectedAns1 = target.name;
             _this.numBoxNum1.frame = target.name+1;
             
             _this.numBox1.frame = 1;
            // _this.numBox3.frame = 1;
             _this.numBox2Pressed = false;
             _this.numBox1Pressed = true;
         }
         else if(_this.numBox2Pressed){
             _this.numBoxNum2.visible = true;
             _this.selectedAns2 = target.name;
             _this.numBoxNum2.frame = target.name+1;
 
             _this.numBox2.frame = 0;
             _this.numBox1.frame = 1;
             _this.numBox1Pressed = true;
             _this.numBox2Pressed = false;
         }
       /* else if(_this.numBox3Pressed)
             {
                 //console.log("YYYYYYYYYYYY");
                 _this.numBoxNum3.visible = true;
                 _this.selectedAns3 = target.name;
                 _this.numBoxNum3.frame = target.name+1;
             }*/
         //console.log("1 "+_this.selectedAns1);
         //console.log("2 "+_this.selectedAns2);
         //console.log("3 "+_this.selectedAns3);
         
         /*if(_this.numBox2Pressed == true){
             _this.numBox2.frame = 0;
             _this.numBox1.frame = 1;
            _this.numBox1Pressed = true;
             _this.numBox2Pressed == false;
         }*/
         
         //console.log("2 "+this.numBox1Pressed);
         //console.log("2 "+this.numBox2Pressed);
         //console.log("2 "+this.numBox3Pressed);
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
            // _this.no1++;
              _this.wrong = true;
            ////console.log("here its");
             _this.timer1.stop();
                _this.count =0;
                 _this.sceneCount++;
            _this.LeverYellowNumber.frame = 0;
            _this.LeverBlueNumber.frame = 0;
            _this.numBox1.frame = 0;
            _this.numBox2.frame = 0;
            _this.numBox3.frame = 0;
            _this.displayNumber1 = 0;
            _this.askNumber1.frame = 0;
            _this.displayNumber2 = 0;
            _this.askNumber2.frame =0;
            _this.rightAns = 503;
             _this.numBox3Pressed = false;
             _this.numBox1Pressed = false;
            _this.BlueAnimInc = 0;
            _this.YellowAnimInc = 0;
            _this.Coin1.destroy();
            _this.Coin10.destroy();
            _this.yellowCoin.destroy();
            _this.blueCoin.destroy();
            _this.numGroup.destroy();
            _this.numBoxNum1.visible = false;
            _this.numBoxNum2.visible = false;
             _this.numBoxNum3.visible = false;
            _this.selectedAns = " ";
            _this.getQuestion();
            
        }
        else
        {
             _this.timer1.stop();
            _this.timer1 = null;
            _this.counterForTimer = null;
             _this.stopVoice();
            _this.state.start('unity10_1_1Score');
        }
    },
    
    generateStarsForTheScene:function(count)
	{
		 _this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			 _this.starsGroup.create(_this.world.centerX-15, 10, 'Level321_starAnim');
            
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
       
          
          //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime,
                    event_type: "click", 
                    res_id: "level12_TickMark", 
                    access_token: window.acctkn 
               } 
               
        //  absdsjsapi.saveInteractEvent(_this.interactEvent);       

        
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
                    
                    _this.time.events.add(500, function(){_this.removeEverthing();},_this);            
},
wrongAns:function(target)
	{
        _this.noofAttempts++;
          
          //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "click",
                    res_id: "level12_TickMark",
                    access_token: window.acctkn
               } 
               
        //  absdsjsapi.saveInteractEvent(_this.interactEvent);   
          
       
        _this.timer1.stop();	
         _this.wrong = false;
        _this.basketback.visible = false;
        
		 _this.shake.shake(10,  _this.basket);
		 _this.wmusic = _this.add.audio('waudio');
		 _this.wmusic.play();
      
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor=true;
         _this.w = 8;
        _this.checkMangoes = 0;
        for(var i =0;i<9;i++){
          _this.objectGroup.getChildAt(i).visible = false;
        }
        _this.time.events.add(500, function(){ target.events.onInputDown.removeAll();_this.getQuestion();},_this);
	},
      
    update:function(){

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
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/English/Game 10.1.1.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Hindi/Game 10.1.1.mp3");
                        }
                        else if(window.languageSelected=="Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Kannada/Game 10.1.1.mp3");
                        }
						else if(window.languageSelected=="Gujarati")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.2.1/10.1.1.mp3");
						}
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Odiya/10.1.1.mp3");
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
		if(_this.amplify!=null)
		{
			_this.amplify.context.close();
			_this.amplify = null;
		}
            
        },

      shutdown:function()
        {
            _this.stopVoice();
        }
};