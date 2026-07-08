Game.placevalue_NSPVG_6_3level2=function(){};


Game.placevalue_NSPVG_6_3level2.prototype={


     init:function(param,score,timerStopVar)
	{
		_this = this;
		//telInitializer.gameIdInit("CoinMachine3_2_1",gradeSelected);
        this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;
       // alert(this.timerStopVar);
        console.log(this.timerStopVar);
	},
    
	create:function(game){

    this.playedwithHint = false;
        this.completelyplayed = false;
       
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
        _this.selectedAns4 = "";
        _this.selectedAns5 = "";
        _this.selectedAns6 = "";
        _this.rightAns = 0;
        _this.toDisplayNoPad = 0;
		_this.enableBlueLever = 0;
		_this.enableGreenLever = 0;
        //baudio.play(); 
		//baudio.loopFull(1);
         _this.w = 8;
         _this.z = 0;
         _this.wrong = true;
        _this.displayNopad = false;
        _this.toCheckNumberPad = false;
         _this.no1=0;
         _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        _this.displayNumber1 = 0;
        _this.displayNumber2 = 0;
        _this.displayNumber3 = 0;
        
        _this.animArraylength = 9;
         _this.qArrays = _this.shuffle( _this.qArrays);
        
        
         _this.count=0;
         _this.count1=4;
		 _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

           _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level321_bg1');
            
        if(window.languageSelected == "English")
                {
                   _this.soundurl =  window.baseUrl+"questionSounds/3.1.2/English/Game 3.2.2.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/3.1.2/Hindi/Game 3.2.2.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/3.1.2/Kannada/Game 3.2.2.mp3";
                }
				else if(window.languageSelected == "Gujarati")
				{
					_this.soundurl = window.baseUrl+"questionSounds/Gujarati/3.2.1/3.2.2.mp3";
				}
                else
                {
                    _this.soundurl =  window.baseUrl+"questionSounds/3.1.2/Odiya/3.2.2.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
             commonNavBar.addNavBar(this,_this.soundurl,"numbersense4");
             commonNavBar.addTimerToTheGame(this,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
             commonNavBar.startTimer(this);
             commonNavBar.addScore(this,this.score);
             this.hintparams=['NSPVG63','level2',false,false,true,1];
              commonNavBar.addHint(this,this.hintparams);
        
        _this.coinPannel = _this.add.sprite(70,58,'Level321_coinMachinePannel');
        _this.Pannel = _this.add.sprite(628,105,'Level322_pannel');
        
        _this.LeverGreen = _this.add.sprite(140,68,'Level321_LeverGreen');
         _this.LeverGreen.name = "LeverGreen";
        _this.LeverBlue = _this.add.sprite(300,68,'Level321_LeverBlue');
         _this.LeverBlue.name ="LeverBlue";
        _this.LeverYellow = _this.add.sprite(465,68,'Level321_LeverYellow');
        _this.LeverYellow.name = "LeverYellow";
        
        _this.Levercoin1 = _this.add.sprite(475,168,'Level321_coin1Anim');
        _this.Levercoin1.visible = false;
        _this.Levercoin10 = _this.add.sprite(315,168,'Level321_coin10Anim');
        _this.Levercoin10.visible = false; 
        
        _this.Levercoin100 = _this.add.sprite(155,168,'Level321_coin100Anim');
        _this.Levercoin100.visible = false;

        _this.Level321_OneToHundred1 = _this.add.sprite(152,72,'Level321_OneToHundred');
        _this.Level321_OneToHundred10 = _this.add.sprite(315,72,'Level321_OneToHundred');
        _this.Level321_OneToHundred10.frame = 1;
        _this.Level321_OneToHundred100 = _this.add.sprite(478,72,'Level321_OneToHundred');
        _this.Level321_OneToHundred100.frame = 2;
    
        _this.LeverGreenNumber = _this.add.sprite(158,95,'Level321_numberSmall');
        _this.LeverGreenNumber.frame = 1;
        _this.LeverGreenNumber.scale.setTo(0.8);
        _this.LeverBlueNumber = _this.add.sprite(317,95,'Level321_numberSmall');
        _this.LeverBlueNumber.frame = 1;
        _this.LeverBlueNumber.scale.setTo(0.8);
        _this.LeverYellowNumber = _this.add.sprite(482,95,'Level321_numberSmall');
        _this.LeverYellowNumber.frame = 1;
        _this.LeverYellowNumber.scale.setTo(0.8);
        
         _this.shakeGroup = _this.add.group();
         _this.numBox2 = _this.add.sprite(790,213,'Level321_numberBox1');
         _this.numBox2.name = "numBox2";
         _this.numBox1 = _this.add.sprite(720,213,'Level321_numberBox1');
         _this.numBox1.name = "numBox1";
         _this.numBox3 = _this.add.sprite(650,213,'Level321_numberBox1');
         _this.numBox3.name = "numBox3";
        
         _this.numBox4 = _this.add.sprite(790,278,'Level321_numberBox1');
         _this.numBox4.name = "numBox4";
         _this.numBox5 = _this.add.sprite(720,278,'Level321_numberBox1');
         _this.numBox5.name = "numBox5";
         _this.numBox6 = _this.add.sprite(790,343,'Level321_numberBox1');
         _this.numBox6.name = "numBox6";
        _this.shakeGroup.add(_this.numBox1);
        _this.shakeGroup.add(_this.numBox2);
        _this.shakeGroup.add(_this.numBox3);
        _this.shakeGroup.add(_this.numBox4);
        _this.shakeGroup.add(_this.numBox5);
        _this.shakeGroup.add(_this.numBox6);
        
        _this.askNumber1 = _this.add.sprite(656,115,'Level321_numberSmall');
         _this.askNumber1.frame = 1;
         _this.askNumber1.scale.setTo(1.1,1.1);
        
        _this.askNumber2 = _this.add.sprite(726,115,'Level321_numberSmall');
        _this.askNumber2.frame = 1;
         _this.askNumber2.scale.setTo(1.1,1.1);
        
        _this.askNumber3 = _this.add.sprite(797,115,'Level321_numberSmall');
        _this.askNumber3.frame = 1;
         _this.askNumber3.scale.setTo(1.1,1.1);

        _this.numBoxNum1 = _this.add.sprite(732,216,'Level321_numberSmall');
        _this.numBox1Pressed = false;
        //_this.numBoxNum1.frame  = 1;
        //_this.numBoxNum1.visible = false;
        
        _this.numBoxNum2 = _this.add.sprite(800,216,'Level321_numberSmall');
         _this.numBox2Pressed = false;
        //_this.numBoxNum2.frame  = 1;
       // _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(660,216,'Level321_numberSmall');
         _this.numBox3Pressed = false;
        //_this.numBoxNum3.frame  = 1;
        //_this.numBoxNum3.visible = false;
        
        _this.numBoxNum4 = _this.add.sprite(800,280,'Level321_numberSmall');
         _this.numBox4Pressed = false;
       // _this.numBoxNum4.frame  = 1;
        //_this.numBoxNum3.visible = false;
        
        _this.numBoxNum5 = _this.add.sprite(732,280,'Level321_numberSmall');
         _this.numBox5Pressed = false;
       // _this.numBoxNum5.frame  = 1;
        //_this.numBoxNum3.visible = false;
        
        
        _this.numBoxNum6 = _this.add.sprite(800,347,'Level321_numberSmall');
         _this.numBox6Pressed = false;
       // _this.numBoxNum6.frame  = 1;
        //_this.numBoxNum3.visible = false;
        
         _this.generateStarsForTheScene(8);
        //  _this.no1++;
       _this.getQuestion();
        
    },

    getQuestion:function(target)
    {  
        _this.sceneCount++;
		_this.noofAttempts = 0;
		_this.AnsTimerCount = 0;
        
        //console.log("get Question "+_this.no1);
        _this.animArrayCoin1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        _this.animArrayCoin10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        _this.animArrayCoin100 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        
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
        /*_this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
        
        //_this.speakerbtn.inputEnabled=true;
        //_this.speakerbtn.input.useHandCursor = true;
        ////console.log(" _this.no1"+ _this.no1);
         //_this.no1 = 19;
    	switch( _this.qArrays[_this.no1])      
    	{
    		case 1: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 1;
                    _this.askNumber1.frame = 2;
                    _this.displayNumber2 = 3;
                    _this.askNumber2.frame =4;
                    _this.displayNumber3 = 6;
                    _this.askNumber3.frame =7;
                    _this.toDisplayNoPad = 9;
                    _this.rightAns = "001036";
					_this.enableBlueLever = 6;
					_this.enableGreenLever = 3;
    				break;
    		case 2: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                   _this.displayNumber1 = 8;
                    _this.askNumber1.frame = 9;
                    _this.enableGreenLever = _this.displayNumber2 = 4;
                    _this.askNumber2.frame =5;
                    _this.enableBlueLever = _this.displayNumber3 = 3;
                    _this.askNumber3.frame =4;
                    _this.toDisplayNoPad = 14;
                    _this.rightAns = "008043";
    				break;
    		case 3: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 1;
                    _this.askNumber1.frame = 2;
                    _this.enableGreenLever = _this.displayNumber2 = 4;
                    _this.askNumber2.frame =5;
                    _this.enableBlueLever = _this.displayNumber3 = 1;
                    _this.askNumber3.frame =2;
                    _this.toDisplayNoPad = 5;
                    _this.rightAns = "001041";
    				break;
    		case 4: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 4;
                    _this.askNumber1.frame = 5;
                    _this.enableGreenLever = _this.displayNumber2 = 5;
                    _this.askNumber2.frame =6;
                    _this.enableBlueLever = _this.displayNumber3 = 1;
                    _this.askNumber3.frame =2;
                    _this.toDisplayNoPad = 9;
                    _this.rightAns = "004051";
    				break;
    		case 5: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 2;
                    _this.askNumber1.frame = 3;
                    _this.enableGreenLever = _this.displayNumber2 = 3;
                    _this.askNumber2.frame =4;
                    _this.enableBlueLever = _this.displayNumber3 = 3;
                    _this.askNumber3.frame =4;
                    _this.toDisplayNoPad = 7;
                    _this.rightAns = "002033";
    				break;
    		case 6: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 2;
                    _this.askNumber1.frame = 3;
                    _this.enableGreenLever = _this.displayNumber2 = 1;
                    _this.askNumber2.frame =2;
                    _this.enableBlueLever = _this.displayNumber3 = 4;
                    _this.askNumber3.frame =5;
                    _this.toDisplayNoPad = 6;
                    _this.rightAns = "002014";
    				break;
            case 7: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 2;
                    _this.askNumber1.frame = 3;
                    _this.enableGreenLever = _this.displayNumber2 = 4;
                    _this.askNumber2.frame =5;
                    _this.enableBlueLever = _this.displayNumber3 = 1;
                    _this.askNumber3.frame =2;
                    _this.toDisplayNoPad = 6;
                    _this.rightAns = "002041";
    				break;
            case 8: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 1;
                    _this.askNumber1.frame = 2;
                    _this.enableGreenLever = _this.displayNumber2 = 1;
                    _this.askNumber2.frame =2;
                    _this.enableBlueLever = _this.displayNumber3 = 8;
                    _this.askNumber3.frame =9;
                    _this.toDisplayNoPad = 9;
                    _this.rightAns = "001018";
    				break;
            case 9: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 4;
                    _this.askNumber1.frame = 5;
                    _this.enableGreenLever = _this.displayNumber2 = 1;
                    _this.askNumber2.frame =2;
                    _this.enableBlueLever = _this.displayNumber3 = 8;
                    _this.askNumber3.frame =9;
                    _this.toDisplayNoPad = 12;
                    _this.rightAns = "004018";
    				break;
          case 10: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                   _this.displayNumber1 = 5;
                    _this.askNumber1.frame = 6;
                    _this.enableGreenLever = _this.displayNumber2 = 6;
                    _this.askNumber2.frame =7;
                    _this.enableBlueLever = _this.displayNumber3 = 4;
                    _this.askNumber3.frame =5;
                    _this.toDisplayNoPad = 14;
                    _this.rightAns = "005064";
    				break;
        case 11: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 3;
                    _this.askNumber1.frame = 4;
                    _this.enableGreenLever = _this.displayNumber2 = 7;
                    _this.askNumber2.frame =8;
                    _this.enableBlueLever = _this.displayNumber3 = 4;
                    _this.askNumber3.frame =5;
                    _this.toDisplayNoPad = 13;
                    _this.rightAns = "003074";
    				break;
        case 12: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 2;
                    _this.askNumber1.frame = 3;
                    _this.enableGreenLever = _this.displayNumber2 = 8;
                    _this.askNumber2.frame =9;
                    _this.enableBlueLever = _this.displayNumber3 = 1;
                    _this.askNumber3.frame =2;
                    _this.toDisplayNoPad = 10;
                    _this.rightAns = "002081";
    				break; 
        case 13: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 7
                    _this.askNumber1.frame = 8;
                    _this.enableGreenLever = _this.displayNumber2 = 7;
                    _this.askNumber2.frame =8;
                    _this.enableBlueLever = _this.displayNumber3 = 7;
                    _this.askNumber3.frame =8;
                    _this.toDisplayNoPad = 20;
                    _this.rightAns = "007077";
    				break; 
        case 14: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 8;
                    _this.askNumber1.frame = 9;
                    _this.enableGreenLever = _this.displayNumber2 = 8;
                    _this.askNumber2.frame =9;
                    _this.enableBlueLever = _this.displayNumber3 = 2;
                    _this.askNumber3.frame =3;
                    _this.toDisplayNoPad = 17;
                    _this.rightAns = "008082";
    				break;
        case 15: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 5;
                    _this.askNumber1.frame = 6;
                    _this.enableGreenLever = _this.displayNumber2 = 6;
                    _this.askNumber2.frame =7;
                    _this.enableBlueLever = _this.displayNumber3 = 2;
                    _this.askNumber3.frame =3;
                    _this.toDisplayNoPad = 12;
                    _this.rightAns = "005062";
    				break;
        case 16: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                     _this.displayNumber1 = 3;
                    _this.askNumber1.frame = 4;
                    _this.enableGreenLever = _this.displayNumber2 = 4;
                    _this.askNumber2.frame =5;
                    _this.enableBlueLever = _this.displayNumber3 = 5;
                    _this.askNumber3.frame =6;
                    _this.toDisplayNoPad = 11;
                    _this.rightAns = "003045";
    				break;
        case 17: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 3;
                    _this.askNumber1.frame = 4;
                    _this.enableGreenLever = _this.displayNumber2 = 1;
                    _this.askNumber2.frame =2;
                    _this.enableBlueLever = _this.displayNumber3 = 5;
                    _this.askNumber3.frame =6;
                    _this.toDisplayNoPad = 8;
                    _this.rightAns = "003015";
    				break; 
       case 18: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 1;
                    _this.askNumber1.frame = 2;
                    _this.enableGreenLever = _this.displayNumber2 = 5;
                    _this.askNumber2.frame =6;
                    _this.enableBlueLever = _this.displayNumber3 = 2;
                    _this.askNumber3.frame =3;
                    _this.toDisplayNoPad = 7;
                    _this.rightAns = "001052";
    				break;
        case 19: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 7;
                    _this.askNumber1.frame = 8;
                    _this.enableGreenLever = _this.displayNumber2 = 3;
                    _this.askNumber2.frame =4;
                    _this.enableBlueLever = _this.displayNumber3 = 1;
                    _this.askNumber3.frame =2;
                    _this.toDisplayNoPad = 10;
                    _this.rightAns = "007031";
    				break;
       case 20: //_this.questionid = "3.2_1#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 9;
                    _this.askNumber1.frame = 10;
                    _this.enableGreenLever = _this.displayNumber2 = 3;
                    _this.askNumber2.frame =4;
                    _this.enableBlueLever = _this.displayNumber3 = 6;
                    _this.askNumber3.frame =7;
                    _this.toDisplayNoPad = 17;
                    _this.rightAns = "009036";
    				break;
           
    	}

      telInitializer2.gameQuestionStart(this,_this.questionid);
    },
  inputDownFunctionForLeverAndBox :function(){
      
      _this.Coin1 = _this.add.sprite(470,220,'Level321_Coin1');
      _this.Coin1.visible = false;
      _this.Coin10 = _this.add.sprite(310,220,'Level321_Coin10');
      _this.Coin10.visible = false;
      
      _this.Coin100 = _this.add.sprite(140,220,'Level321_Coin100');
      _this.Coin100.visible = false;
      
      _this.LeverYellow.inputEnabled = true;
      _this.LeverYellow.input.useHandCursor = true;
      _this.LeverYellow.events.onInputDown.add(_this.leve1Clicked,_this);
     
       _this.LeverBlue.inputEnabled = false;
      // _this.LeverBlue.input.useHandCursor = true;
       _this.LeverBlue.events.onInputDown.add(_this.leve1Clicked,_this); 
     
       _this.LeverGreen.inputEnabled = false;
	  
       //_this.LeverGreen.input.useHandCursor = true;
       _this.LeverGreen.events.onInputDown.add(_this.leve1Clicked,_this);
     
	  _this.LeverYellowanim = _this.LeverYellow.animations.add('Level722_LeverYellow',["Symbol 21 instance 10005","Symbol 21 instance 10000"]);
        _this.LeverYellowanim.play(2,true);
		
/*       _this.numBox1.inputEnabled = true;
       _this.numBox1.input.useHandCursor = true;
       _this.numBox1.events.onInputDown.add(_this.numberBoxClicked,_this);
     
       _this.numBox2.inputEnabled = true;
       _this.numBox2.input.useHandCursor = true;
       _this.numBox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
       _this.numBox3.inputEnabled = true;
       _this.numBox3.input.useHandCursor = true;
       _this.numBox3.events.onInputDown.add(_this.numberBoxClicked,_this);*/
  },
 
    numberBoxClicked:function(target){
        
        commonNavBar.playClickSound();
        
        if(target.name == "numBox1")
        {
             _this.numBox1Pressed = true;
             _this.numBox2Pressed = false;
             _this.numBox3Pressed = false;
             _this.numBox4Pressed = false;
             _this.numBox5Pressed = false;
             _this.numBox6Pressed = false;
            _this.numBox1.frame = 1;
            _this.numBox2.frame = 0;
            _this.numBox3.frame = 0;
            _this.numBox4.frame = 0;
            _this.numBox5.frame = 0;
            _this.numBox6.frame = 0;
        } 
        if(target.name == "numBox2")
        {
             _this.numBox2Pressed = true;
             _this.numBox1Pressed = false;
             _this.numBox3Pressed = false;
             _this.numBox4Pressed = false;
             _this.numBox5Pressed = false;
             _this.numBox6Pressed = false;
            _this.numBox2.frame = 1;
            _this.numBox1.frame = 0;
            _this.numBox3.frame = 0;
            _this.numBox4.frame = 0;
            _this.numBox5.frame = 0;
            _this.numBox6.frame = 0;
        }
        if(target.name == "numBox3")
        {
           _this.numBox3Pressed = true;
           _this.numBox1Pressed = false;
           _this.numBox2Pressed = false;
           _this.numBox4Pressed = false;
           _this.numBox5Pressed = false;
           _this.numBox6Pressed = false;
           _this.numBox3.frame = 1;
           _this.numBox1.frame = 0;
           _this.numBox2.frame = 0;
           _this.numBox4.frame = 0;
           _this.numBox5.frame = 0;
           _this.numBox6.frame = 0;
        }
        if(target.name == "numBox4")
        {
           _this.numBox4Pressed = true;
           _this.numBox1Pressed = false;
           _this.numBox2Pressed = false;
           _this.numBox3Pressed = false;
           _this.numBox5Pressed = false;
           _this.numBox6Pressed = false;
           _this.numBox4.frame = 1;
           _this.numBox1.frame = 0;
           _this.numBox2.frame = 0;
           _this.numBox3.frame = 0;
           _this.numBox5.frame = 0;
           _this.numBox6.frame = 0;
        }
        if(target.name == "numBox5")
        {
           _this.numBox5Pressed = true;
           _this.numBox1Pressed = false;
           _this.numBox2Pressed = false;
           _this.numBox3Pressed = false;
           _this.numBox4Pressed = false;
           _this.numBox6Pressed = false;
           _this.numBox5.frame = 1;
           _this.numBox1.frame = 0;
           _this.numBox2.frame = 0;
           _this.numBox3.frame = 0;
           _this.numBox4.frame = 0;
           _this.numBox6.frame = 0;
        } 
        if(target.name == "numBox6")
        {
           _this.numBox6Pressed = true;
           _this.numBox1Pressed = false;
           _this.numBox2Pressed = false;
           _this.numBox3Pressed = false;
           _this.numBox4Pressed = false;
           _this.numBox5Pressed = false;
           _this.numBox5.frame = 0;
           _this.numBox1.frame = 0;
           _this.numBox2.frame = 0;
           _this.numBox3.frame = 0;
           _this.numBox4.frame = 0;
           _this.numBox6.frame = 1;
        }
        
        if( _this.toCheckNumberPad)
        {
             _this.toCheckNumberPad = false;
            _this.addNumberPad();
        }
    },
    leve1Clicked:function(target,frame){
        
         //console.log("Im Clicked "+target.name);
        if(target.name == "LeverYellow"){
             
            if(_this.YellowAnimInc<_this.displayNumber3){
                _this.LeverYellow.animations.add('Level321_LeverYellow',[0,1,2,3,4,5,0]);
             _this.LeverYellow.animations.play('Level321_LeverYellow');  
               commonNavBar.playCoinFallSound();
                 _this.Levercoin1.visible = true;
                _this.Levercoin1.animations.add('Level321_coin1Anim',_this.animArrayCoin1);
                 _this.Levercoin1.animations.play('Level321_coin1Anim');
                 _this.Levercoin1.animations.currentAnim.onComplete.add(function () {
					 _this.LeverYellowanim.play(2,true);
                      _this.LeverYellowNumber.frame++;
                      _this.Coin1.visible = true;
                      _this.Levercoin1.visible = false;
                      _this.Coin1.frame =  _this.YellowAnimInc;
                      _this.YellowAnimInc++;
                       _this.animArrayCoin1.pop();
                     //console.log(" _this.YellowAnimInc "+ _this.YellowAnimInc);
					 if(_this.YellowAnimInc == _this.enableBlueLever)
					 {
						 _this.LeverBlue.inputEnabled = true;
						 _this.LeverYellowanim.stop(null,true);
						 _this.LeverYellow.frame = 0;
						  _this.LeverBlueanim = _this.LeverBlue.animations.add('Level722_LeverBlue',["Symbol 19 instance 10005","Symbol 19 instance 10000"]);
                           _this.LeverBlueanim.play(2,true);
					 }
                }, this);
            }
        }
        if(target.name == "LeverBlue"){
             
            if(_this.BlueAnimInc<_this.displayNumber2){
                
                _this.LeverBlue.animations.add('Level321_LeverBlue',[0,1,2,3,4,5,0]);
                _this.LeverBlue.animations.play('Level321_LeverBlue');
                commonNavBar.playCoinFallSound();
                 _this.Levercoin10.visible = true;
                _this.Levercoin10.animations.add('Level321_coin10Anim',_this.animArrayCoin10);
                 _this.Levercoin10.animations.play('Level321_coin10Anim');
                 _this.Levercoin10.animations.currentAnim.onComplete.add(function () {
					 _this.LeverBlueanim.play(2,true);
                      _this.LeverBlueNumber.frame++;
                      _this.Coin10.visible = true;
                      _this.Coin10.frame =  _this.BlueAnimInc;
                     _this.Levercoin10.visible = false;
                      _this.BlueAnimInc++;
                       _this.animArrayCoin10.pop();
                     //console.log("_this.BlueAnimInc "+_this.BlueAnimInc);
					 if(_this.BlueAnimInc == _this.enableGreenLever)
					 {
						 _this.LeverGreen.inputEnabled = true;
						 _this.LeverBlueanim.stop(null,true);
						 _this.LeverBlue.frame = 0;
						 _this.LeverGreenanim =_this.LeverGreen.animations.add('Level722_LeverGreen',["Symbol 20 instance 10005","Symbol 20 instance 10000"]);
                    _this.LeverGreenanim.play(2,true);
						 
					 }
                }, this);
            }
           
        }
        if(target.name == "LeverGreen"){
             
            if(_this.GreenAnimInc<_this.displayNumber1){
                
                _this.LeverGreen.animations.add('Level321_LeverGreen',[0,1,2,3,4,5,0]);
                _this.LeverGreen.animations.play('Level321_LeverGreen');
                commonNavBar.playCoinFallSound();
                 _this.Levercoin100.visible = true;
                _this.Levercoin100.animations.add('Level321_coin100Anim',_this.animArrayCoin100);
                 _this.Levercoin100.animations.play('Level321_coin100Anim');
                 _this.Levercoin100.animations.currentAnim.onComplete.add(function () {
					 _this.LeverGreenanim.play(2,true);
                      _this.LeverGreenNumber.frame++;
                      _this.Coin100.visible = true;
                      _this.Coin100.frame =  _this.GreenAnimInc;
                     _this.Levercoin100.visible = false;
                      _this.GreenAnimInc++;
                       _this.animArrayCoin100.pop();
                     //console.log("_this.GreenAnimInc "+_this.GreenAnimInc);
                }, this);
            }
         }
        if(  _this.toDisplayNoPad == (_this.BlueAnimInc + _this.YellowAnimInc + _this.GreenAnimInc))
            {
                 if( _this.toCheckNumberPad)
                {
           
					_this.time.events.add(500, function(){
					_this.LeverGreenanim.stop(null,true);
					_this.LeverGreen.frame = 0;
					}, _this);
					
                //console.log("im here hre hre");
                  _this.addNumberPad();
                 _this.numBox2.frame = 1;
                 _this.numBox2Pressed = true;
                 _this.toCheckNumberPad = false;
                    _this.displayNopad = true;
					
					 _this.numBox1.inputEnabled = true;
                   _this.numBox1.input.useHandCursor = true;
                   _this.numBox1.events.onInputDown.add(_this.numberBoxClicked,_this);

                   _this.numBox2.inputEnabled = true;
                   _this.numBox2.input.useHandCursor = true;
                   _this.numBox2.events.onInputDown.add(_this.numberBoxClicked,_this);

                   _this.numBox3.inputEnabled = true;
                   _this.numBox3.input.useHandCursor = true;
                   _this.numBox3.events.onInputDown.add(_this.numberBoxClicked,_this); 

                   _this.numBox4.inputEnabled = true;
                   _this.numBox4.input.useHandCursor = true;
                   _this.numBox4.events.onInputDown.add(_this.numberBoxClicked,_this);

                   _this.numBox5.inputEnabled = true;
                   _this.numBox5.input.useHandCursor = true;
                   _this.numBox5.events.onInputDown.add(_this.numberBoxClicked,_this);

                   _this.numBox6.inputEnabled = true;
                   _this.numBox6.input.useHandCursor = true;
                   _this.numBox6.events.onInputDown.add(_this.numberBoxClicked,_this);
               }
            }
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
             commonNavBar.playClickSound();
             _this.eraser.frame = 1;

                if(_this.numBox1Pressed){
                    _this.numBox1Pressed =  true;
                    _this.numBox2Pressed =  false;
                    _this.numBox3Pressed =  false;
                    _this.numBox4Pressed =  false;
                    _this.numBox5Pressed =  false;
                    _this.numBox6Pressed =  false;
                    _this.numBoxNum1.visible = false;
                    _this.numBox1.frame = 1;
                    _this.numBox3.frame = 0;
                    _this.numBox2.frame = 0;
                    _this.numBox4.frame = 0;
                    _this.numBox5.frame = 0;
                    _this.numBox6.frame = 0;
                }
                else if(_this.numBox2Pressed){
                    _this.numBox1Pressed =  false;
                    _this.numBox2Pressed =  true;
                    _this.numBox3Pressed =  false;
                    _this.numBox4Pressed =  false;
                    _this.numBox5Pressed =  false;
                    _this.numBox6Pressed =  false;
                    _this.numBoxNum2.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox2.frame = 1;
                    _this.numBox4.frame = 0;
                    _this.numBox5.frame = 0;
                    _this.numBox6.frame = 0;
                }
                else if(_this.numBox3Pressed)
                {
                    _this.numBox1Pressed =  false;
                    _this.numBox2Pressed =  false;
                    _this.numBox4Pressed =  false;
                    _this.numBox5Pressed =  false;
                    _this.numBox6Pressed =  false;
                    _this.numBox3Pressed =  true;
                    _this.numBoxNum3.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox3.frame = 1;
                    _this.numBox2.frame = 0;
                    _this.numBox4.frame = 0;
                    _this.numBox5.frame = 0;
                    _this.numBox6.frame = 0;
                } 
             else if(_this.numBox4Pressed)
                {
                    _this.numBox1Pressed =  false;
                    _this.numBox2Pressed =  false;
                    _this.numBox3Pressed =  false;
                    _this.numBox5Pressed =  false;
                    _this.numBox6Pressed =  false;
                    _this.numBox4Pressed =  true;
                    _this.numBoxNum4.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox4.frame = 1;
                    _this.numBox2.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox5.frame = 0;
                    _this.numBox6.frame = 0;
                } 
             else if(_this.numBox5Pressed)
                {
                    _this.numBox1Pressed =  false;
                    _this.numBox2Pressed =  false;
                    _this.numBox3Pressed =  false;
                    _this.numBox4Pressed =  false;
                    _this.numBox6Pressed =  false;
                    _this.numBox5Pressed =  true;
                    _this.numBoxNum5.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox5.frame = 1;
                    _this.numBox2.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox4.frame = 0;
                    _this.numBox6.frame = 0;
                }
             else if(_this.numBox6Pressed)
                {
                    _this.numBox1Pressed =  false;
                    _this.numBox2Pressed =  false;
                    _this.numBox3Pressed =  false;
                    _this.numBox4Pressed =  false;
                    _this.numBox5Pressed =  false;
                    _this.numBox6Pressed =  true;
                    _this.numBoxNum6.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox6.frame = 1;
                    _this.numBox2.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox4.frame = 0;
                    _this.numBox5.frame = 0;
                }
               /* _this.numBoxNum1.visible = false;
                _this.numBoxNum2.visible = false;
                _this.numBoxNum3.visible = false;
                _this.numBoxNum4.visible = false;
                _this.numBoxNum5.visible = false;
                _this.numBoxNum6.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox4.frame = 0;
                    _this.numBox5.frame = 0;
                    _this.numBox6.frame = 0;
                    _this.numBox2.frame = 1;
                    _this.numBox2Pressed = true;
                    _this.numBox1Pressed = false;*/
                    _this.toCheckNumberPad = false;
                    _this.time.events.add(500, function(){ _this.eraser.frame = 0;}, _this);
             
         },this);
        
         _this.rightbtn.events.onInputDown.add(function(target){

            _this.noofAttempts++;
            commonNavBar.playClickSound();
             _this.rightbtn.frame = 1;
             _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3+_this.selectedAns4+_this.selectedAns5+_this.selectedAns6;
             //console.log("selected Answer "+ _this.selectedAns);
             //console.log("Right Answer "+ _this.rightAns);
            if( _this.selectedAns== _this.rightAns)  
                {
                  telInitializer2.gameCorrectAns();
                    this.Stararr.push(3);
                    //console.log("correct");
                    target.events.onInputDown.removeAll();
                    
                    commonNavBar.playCelebrationSound();
                     _this.starAnim =  _this.starsGroup.getChildAt(_this.count1);
                   
                     _this.starAnim.smoothed = false;
                     _this.anim4 = _this.starAnim.animations.add('star');
                     _this.anim4.play();
                     //_this.count1++;
                    _this.Coin1.frame =_this.Coin1.frame+10 ;
                    _this.Coin10.frame =_this.Coin10.frame+10 ;
                    _this.Coin100.frame =_this.Coin100.frame+10 ;
                    _this.numBox1.frame = 1;
                    _this.numBox2.frame = 1;
                    _this.numBox3.frame = 1;
                    _this.numBox4.frame = 1;
                    _this.numBox5.frame = 1;
					
					 _this.numBox1.inputEnabled = false;
                     _this.numBox2.inputEnabled = false;
                     _this.numBox3.inputEnabled = false;
                     _this.numBox4.inputEnabled = false;
                     _this.numBox5.inputEnabled = false;
                     _this.numBox6.inputEnabled = false;
					 
                    _this.numGroup.y = 00;
                    _this.tween1 = _this.add.tween(_this.numGroup);
                    _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                     _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);

                     

                       _this.questionid = 1;
                // telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount); 
                }
            else
                { 
                  telInitializer2.gameWrongAns();
                    //console.log("wrong");
                    _this.rightbtn.frame = 1;
                      commonNavBar.stopVoice();
                      commonNavBar.playWrongCelebrationSound();
                    _this.starsGroup.getChildAt(_this.count1).frame = 1;
                     this.Stararr.push(1);
                     //_this.count1++;
                     target.events.onInputDown.removeAll();
                    _this.time.events.add(1000, function(){ _this.removeEverthing();}, _this);
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
         commonNavBar.playClickSound();
         
         if(_this.numBox1Pressed){
             _this.numBoxNum1.visible = true;
             _this.selectedAns1 = target.name;
             _this.numBoxNum1.frame = target.name+1;
             
             _this.numBox1.frame = 0;
             _this.numBox3.frame = 1;
             _this.numBox3Pressed = true;
             _this.numBox1Pressed = false;
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
        else if(_this.numBox3Pressed)
             {
                 _this.numBox3.frame = 0;
                 _this.numBox4.frame = 1;
                 
                 _this.numBox4Pressed = true;
                _this.numBox3Pressed = false;
                 
                 //console.log("YYYYYYYYYYYY");
                 _this.numBoxNum3.visible = true;
                 _this.selectedAns3 = target.name;
                 _this.numBoxNum3.frame = target.name+1;
             }
        else if(_this.numBox4Pressed){
            
            _this.numBox4.frame = 0;
            _this.numBox5.frame = 1;
                 
                _this.numBox5Pressed = true;
                _this.numBox4Pressed = false;
            
            _this.numBoxNum4.visible = true;
            _this.selectedAns4 = target.name;
            _this.numBoxNum4.frame = target.name+1;
        }
         
        else if(_this.numBox5Pressed){
            
            _this.numBox5.frame = 0;
            _this.numBox6.frame = 1;
                 
                _this.numBox6Pressed = true;
                _this.numBox5Pressed = false;
            
            _this.numBoxNum5.visible = true;
            _this.selectedAns5 = target.name;
            _this.numBoxNum5.frame = target.name+1;
        } 
         else if(_this.numBox6Pressed){
            
                _this.numBox1Pressed = false;
                _this.numBox5Pressed = false;
                _this.numBox6Pressed = true;
            
            _this.numBoxNum6.visible = true;
            _this.selectedAns6 = target.name;
            _this.numBoxNum6.frame = target.name+1;
        }
         //console.log("1 "+_this.selectedAns1);
         //console.log("2 "+_this.selectedAns2);
         //console.log("3 "+_this.selectedAns3);
         //console.log("4 "+_this.selectedAns4);
         //console.log("5 "+_this.selectedAns5);
         //console.log("6 "+_this.selectedAns6);
         
         /*if(_this.numBox2Pressed == true){
             _this.numBox2.frame = 0;
             _this.numBox1.frame = 1;
            _this.numBox1Pressed = true;
             _this.numBox2Pressed == false;
         }*/
         
         //console.log("2 "+this.numBox1Pressed);
         //console.log("2 "+this.numBox2Pressed);
         //console.log("2 "+this.numBox3Pressed);
         //console.log("2 "+this.numBox4Pressed);
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
         //_this.no1++;
         _this.noofAttempts=0;
       // _this.AnsTimerCount=0;
        ////console.log("--------------------------"+ _this.no1);
        if( _this.no1<3)
        {
            //_this.LeverBlue.inputEnabled = false;
             _this.no1++;
              _this.wrong = true;
            ////console.log("here its");
             //_this.timer1.stop();
                _this.count =0;
                 _this.sceneCount++;
            _this.numBox1.frame = 0;
            _this.numBox2.frame = 0;
            _this.numBox3.frame = 0;
            _this.numBox4.frame = 0;
            _this.numBox5.frame = 0;
            _this.numBox6.frame = 0;
            _this.displayNumber1 = 0;
            _this.askNumber1.frame = 0;
            _this.displayNumber2 = 0;
            _this.displayNumber3 = 0;
            _this.askNumber2.frame =0;
            _this.askNumber3.frame =0;
            _this.rightAns = 0;
             _this.numBox3Pressed = false;
             _this.numBox6Pressed = false;
             _this.numBox1Pressed = false;
             _this.Levercoin1.visible = false;
             _this.Levercoin10.visible = false;
             _this.Levercoin100.visible = false;
            _this.LeverBlueNumber.frame = 1;
            _this.LeverYellowNumber.frame = 1;
            _this.LeverGreenNumber.frame = 1;
            _this.BlueAnimInc = 0;
            _this.YellowAnimInc = 0;
            _this.GreenAnimInc = 0;
            _this.Coin1.destroy();
            _this.Coin10.destroy();
            _this.Coin100.destroy();
            _this.numGroup.destroy();
            _this.numBoxNum1.visible = false;
            _this.numBoxNum2.visible = false;
             _this.numBoxNum3.visible = false;
             _this.numBoxNum4.visible = false;
             _this.numBoxNum5.visible = false;
             _this.numBoxNum6.visible = false;
            _this.animArrayCoin100 =null;
            _this.animArrayCoin10 =null;
            _this.animArrayCoin1 =null;
            _this.selectedAns = " ";
			 _this.LeverBlue.inputEnabled = false;
			_this.LeverGreen.inputEnabled = false;
	   
            if(  _this.LeverBlueanim)
            {
                _this.LeverBlueanim.stop(null,true);
				_this.LeverBlue.frame = 0;
            }
            
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
            _this.count1++;
            _this.getQuestion();
            
        }
        else
        {
            commonNavBar.stopTimer();
            commonNavBar.stopVoice();
            commonNavBar.disableNavBar();
			commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
           this.createScoreScene(); 
        }
    },
    
    generateStarsForTheScene:function(count)
	{
		 _this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			 _this.starsGroup.create(_this.world.centerX, 10, 'cstarAnim');
            
			for(var j =0;j<i;j++)
			{
				if( _this.starsGroup.getChildAt(j))
				{
					 _this.starsGroup.getChildAt(j).x-=10;
					 _this.starsGroup.getChildAt(i).x+=10;
				}
			}
		if(this.Stararr[i])
                    {  
                        _this.starsGroup.getChildAt(i).frame = this.Stararr[i];
                    }
		}
        _this.starsGroup.getChildAt(4).frame = 2;		
    },
    
	
    
    createScoreScene:function()
    {
		this.completelyplayed = true;
	  
		this.backgroundtransp = this.add.tileSprite(0,0,this.world.width,this.world.height, 'transparent'); //BackGround Opacity

        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);
        
        /* this.tryAgainText = this.add.text(this.world.centerX,this.world.centerY,'Try Again !!');
        this.tryAgainText.anchor.setTo(0.5);
        this.tryAgainText.align = 'center';
        this.tryAgainText.fontWeight = 'bold';
        this.tryAgainText.fontSize = 40;
        this.tryAgainText.fill = 'White';
        this.tryAgainText.visible = false;
        
        this.terrificText = this.add.text(this.world.centerX,this.world.centerY,'Terrific !!');
        this.terrificText.anchor.setTo(0.5);
        this.terrificText.align = 'center';
        this.terrificText.fontWeight = 'bold';
        this.terrificText.fontSize = 40;
        this.terrificText.fill = 'White';
        this.terrificText.visible = false;
        
        this.verGoodText = this.add.text(this.world.centerX,this.world.centerY,'Very Good !!');
        this.verGoodText.anchor.setTo(0.5);
        this.verGoodText.align = 'center';
        this.verGoodText.fontWeight = 'bold';
        this.verGoodText.fontSize = 40;
        this.verGoodText.fill = 'White';
        this.verGoodText.visible = false;
        
        this.excellentText = this.add.text(this.world.centerX,this.world.centerY,'Excellent !!');
        this.excellentText.anchor.setTo(0.5);
        this.excellentText.align = 'center';
        this.excellentText.fontWeight = 'bold';
        this.excellentText.fontSize = 40;
        this.excellentText.fill = 'White';
        this.excellentText.visible = false; */
  
  this.happyemoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.happyemoji.anchor.setTo(0.5);
        this.happyemoji.scale.setTo(0.7,0.7);
        this.happyemoji.frame=0;
        this.happyemoji.visible = false;
        
        this.sademoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.sademoji.anchor.setTo(0.5);
        this.sademoji.scale.setTo(0.7,0.7);
        this.sademoji.frame=4;
        this.sademoji.visible = false;

        this.HomeBtn = this.add.sprite(this.world.centerX+140,this.world.centerY+80,'HomeBtn');
        this.HomeBtn.anchor.setTo(0.5);
        this.HomeBtn.inputEnabled = true;
        this.HomeBtn.events.onInputDown.add(this.homeClicked,this);


        this.replayBtn = this.add.sprite(this.world.centerX-140,this.world.centerY+80,'replayBtn');
        this.replayBtn.anchor.setTo(0.5);
        this.replayBtn.inputEnabled = true;
        this.replayBtn.events.onInputDown.add(this.replayClicked,this);

        this.generateStarsForScoreScene(this,8);   //Stars based on the Game
    },

    homeClicked:function()
    {
        commonNavBar.playClickSound();

        this.HomeBtn.events.onInputDown.removeAll();
        
        commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
                commonNavBar.navBar=null;

        this.score += this.scoreSceneScore;
		
		this.backgroundtransp.visible=false; //Remove BackGround Opacity

        _this.state.start('numbersense4',true,false);
        
    },


generateStarsForScoreScene:function(game,count)
    {
        //console.log("star");
        this.starsGroup = this.add.group();
        this.scoreSceneScore = 0;
        this.maxscore = count * 5;
        console.log(this.maxscore);

        for (var i = 0; i < count; i++)
        {
            if(this.Stararr[i]!=1)
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'star5');
                this.scoreSceneScore+=5;
            }
            else
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'dot');
                this.playedwithHint = true;
            }

            for(var j =0;j<=i;j++)
            {
                if(this.starsGroup.getChildAt(j))
                {
                    this.starsGroup.getChildAt(j).anchor.setTo(0.5);
                    this.starsGroup.getChildAt(j).x-=20;
                    this.starsGroup.getChildAt(i).x+=20;
                }
            }
        }    
         if((this.scoreSceneScore/this.maxscore) < 0.4){
            this.sademoji.visible = true;
        }else{
            this.happyemoji.visible = true;
        }
        commonNavBar.playCelebrationSound();      
        commonNavBar.deductScore(this,this.scoreSceneScore,false,false);  

        if(!this.playedwithHint)
        {
            this.replayBtn.visible = false;
        }      
    },
    
     replayClicked:function()
    {
        commonNavBar.playClickSound();

        this.replayBtn.events.onInputDown.removeAll();
        commonNavBar.deductScore(this,-5,true,false);

         this.score += this.scoreSceneScore;
        this.score -= 5;

        this.time.events.add(3500, function()
        { 
            commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
            commonNavBar.hint1=true,
            commonNavBar.hint2=true,
            commonNavBar.hint3=true,
			//this.backgroundtransp.visible=false; //Remove BackGround Opacity

      this.backgroundtransp.visible=false; //Remove BackGround Opacity
            _this.state.start('placevalue_NSPVG_6_3level1',true,false);
        }, this);
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
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/English/Game 3.2.2.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Hindi/Game 3.2.2.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Kannada/Game 3.2.2.mp3");
                        }
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Odiya/3.2.2.mp3");
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
    
    playDemoVideos:function(target){
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
         switch(target)
        {
                 case '3_2_2a':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 3.2.2.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 3.2.2.mp3");
							}
							else if(window.languageSelected=="Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 3.2.2.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/3.2.2.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;
			/*case '3_2_2b':  if(window.languageSelected == "English")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 3.2.1b.mp3");
							}
							else if(window.languageSelected == "Hindi")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 3.2.1b.mp3");
							}
							else if(window.languageSelected=="Kannada")
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 3.2.1b.mp3");
							}
							else
							{
								_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/3.2.1b.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
							}
							break;*/
            }
            _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
    
shutdown:function()
	{
		commonNavBar.stopVoice();

    window.score = this.score;
            localStorage.setItem(window.avatarName+"Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
              telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"placevalue_NSPVG_6_3state", "playedwithhint");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
              telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"placevalue_NSPVG_6_3state", "fullycomplete");
                localStorage.setItem(window.avatarName+"placevalue_NSPVG_5_2state", "canplay");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            } 

    }
    
};