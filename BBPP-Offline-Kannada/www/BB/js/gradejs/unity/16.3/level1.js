Game.unity16_3level1=function(){};


Game.unity16_3level1.prototype={


    init:function(game)
	{
		_this = this;

    _this.clickSound = document.createElement('audio');
        _this.clickSoundsrc = document.createElement('source');
        _this.clickSoundsrc.setAttribute("src", "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.celebrationSound = document.createElement('audio');
        _this.celebrationSoundsrc = document.createElement('source');
        _this.celebrationSoundsrc.setAttribute("src", "sounds/celebration.mp3");
        _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.setAttribute("src", "sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

		telInitializer.gameIdInit("unity16_3",gradeSelected);
	},

  preload:function(game){
        if(!window.grade1NOD2){

            window.grade1NOD2 = true;

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

            this.load.image('Unity12_3_3BG_01', window.baseUrl+'assets/gradeAssets/12.3.1/BG_01.png');

        this.load.image('grade161_bg1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/bg1.png');

    this.load.image('grade161_TopBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('grade161_timebg',window.baseUrl+'assets/commonAssets/timebg.png');

        this.load.image('grade162_bg1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/bg1.png');

    this.load.image('grade162_TopBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('grade162_timebg',window.baseUrl+'assets/commonAssets/timebg.png');

        this.load.image('grade163_bg1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/bg1.png');

    this.load.image('grade163_TopBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('grade163_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        

    this.load.image('grade161_numBG',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/b2.png');
        this.load.image('grade161_divide', window.baseUrl+'assets/gradeAssets/16.1/gameAssets/divide.png');
        this.load.image('grade161_equalSymbol', window.baseUrl+'assets/gradeAssets/16.1/gameAssets/equalSymbol.png');
        this.load.atlas('grade16_1_Rabitidle',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/Rabbit_Idle.png' ,window.baseUrl+'assets/gradeAssets/16.1/gameAssets/Rabbit_Idle.json');
        //this.load.atlas('grade161_box1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/text box.png' ,window.baseUrl+'json/gradeJson/16.1/text box.json');
        this.load.atlas('grade161_numberbox1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/txtbox.png' ,window.baseUrl+'json/gradeJson/16.1/txtbox.json');
       // this.load.atlas('grade61_carrotsAnim',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/carrotsAnim.png' ,window.baseUrl+'json/gradeJson/16.1/carrotsAnim.json');
        this.load.atlas('grade16_1_RabitAnim',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/RabitAnim.png' ,window.baseUrl+'json/gradeJson/16.1/RabitAnim.json');
      //  this.load.atlas('grade61_calNum',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/calNum.png' ,window.baseUrl+'json/gradeJson/16.1/calNum.json');
        this.load.atlas('grade161_greenNumbers',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/greenNumbers.png' ,window.baseUrl+'json/gradeJson/16.1/greenNumbers.json');
        this.load.atlas('grade16_1_carrot',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/carrot.png' ,window.baseUrl+'json/gradeJson/16.1/carrot.json');
      //  this.load.atlas('grade61_greenNumbers1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/greenNumbers1.png' ,window.baseUrl+'json/gradeJson/16.1/greenNumbers1.json');
        //this.load.atlas('grade61_greenNumbers2',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/greenNumbers2.png' ,window.baseUrl+'json/gradeJson/16.1/greenNumbers2.json');
        this.load.atlas('grade161_txtbox',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/txtbox.png' ,window.baseUrl+'json/gradeJson/16.1/txtbox.json');
        this.load.atlas('grade161_tick',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/tick.png' ,window.baseUrl+'json/gradeJson/16.1/tick.json');
        this.load.atlas('grade161_eraser',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/eraser.png' ,window.baseUrl+'json/gradeJson/16.1/eraser.json');
        this.load.atlas('grade16_1_thinkingCloud',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/cloud.png',window.baseUrl+'json/gradeJson/16.1/cloud.json');
        this.load.image('grade16_1_Box', window.baseUrl+'assets/gradeAssets/16.1/gameAssets/no box.png');

        this.load.atlas('grade161_box1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box1.png',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box1.json');
  
        this.load.image('Level162_numBG',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/b2.png');
        this.load.image('grade162_divide', window.baseUrl+'assets/gradeAssets/16.1/gameAssets/divide.png');
        this.load.atlas('grade162_1_Rabitidle',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/Rabbit_Idle.png' ,window.baseUrl+'assets/gradeAssets/16.1/gameAssets/Rabbit_Idle.json');
        this.load.atlas('grade162_numberbox1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/txtbox.png' ,window.baseUrl+'json/gradeJson/16.1/txtbox.json');
       // this.load.atlas('grade61_carrotsAnim',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/carrotsAnim.png' ,window.baseUrl+'json/gradeJson/16.1/carrotsAnim.json');
        this.load.atlas('grade162_1_RabitAnim',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/RabitAnim.png' ,window.baseUrl+'json/gradeJson/16.1/RabitAnim.json');
      //  this.load.atlas('grade61_calNum',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/calNum.png' ,window.baseUrl+'json/gradeJson/16.1/calNum.json');
        this.load.atlas('grade162_greenNumbers',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/greenNumbers.png' ,window.baseUrl+'json/gradeJson/16.1/greenNumbers.json');
        this.load.atlas('grade162_1_carrot',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/carrot.png' ,window.baseUrl+'json/gradeJson/16.1/carrot.json');
      //  this.load.atlas('grade61_greenNumbers1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/greenNumbers1.png' ,window.baseUrl+'json/gradeJson/16.1/greenNumbers1.json');
        //this.load.atlas('grade61_greenNumbers2',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/greenNumbers2.png' ,window.baseUrl+'json/gradeJson/16.1/greenNumbers2.json');
        this.load.atlas('grade162_tick',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/tick.png' ,window.baseUrl+'json/gradeJson/16.1/tick.json');
        this.load.atlas('grade162_eraser',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/eraser.png' ,window.baseUrl+'json/gradeJson/16.1/eraser.json');
        this.load.atlas('grade162_1_thinkingCloud',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/cloud.png',window.baseUrl+'json/gradeJson/16.1/cloud.json');
        this.load.image('grade162_1_Box', window.baseUrl+'assets/gradeAssets/16.1/gameAssets/no box.png');

       // this.load.atlas('grade62_box1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/text box.png' ,window.baseUrl+'json/gradeJson/16.1/text box.json');
        this.load.atlas('grade62_box1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box1.png',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box1.json')
        this.load.atlas('grade62_box2',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box2.png',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box2.json')
        
        this.load.image('Level163_numBG',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/b2.png');
        
        this.load.image('crate163', window.baseUrl+'assets/gradeAssets/16.1/gameAssets/101.png');
        this.load.atlas('box163',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/box1.png' ,window.baseUrl+'json/gradeJson/16.1/box1.json');
        this.load.atlas('divide163',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/0.0.png' ,window.baseUrl+'json/gradeJson/16.1/0.0.json');


        this.load.atlas('eggGroup163',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/eg 1 to 10.png' ,window.baseUrl+'json/gradeJson/16.1/eg 1 to 10.json');
        this.load.atlas('eggGroup1163',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/1 to 10 eg.png' ,window.baseUrl+'json/gradeJson/16.1/1 to 10 eg.json');

        this.load.atlas('grade163_box1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/text box.png' ,window.baseUrl+'json/gradeJson/16.1/text box.json');
        this.load.atlas('grade163_numberbox1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/txtbox.png' ,window.baseUrl+'json/gradeJson/16.1/txtbox.json');
        this.load.atlas('basket163',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/1234.png' ,window.baseUrl+'json/gradeJson/16.1/1234.json');

        this.load.atlas('grade163_tick',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/tick.png' ,window.baseUrl+'json/gradeJson/16.1/tick.json');
        this.load.atlas('grade163_eraser',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/eraser.png' ,window.baseUrl+'json/gradeJson/16.1/eraser.json');
       // this.load.atlas('grade16_1_thinkingCloud',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/cloud.png',window.baseUrl+'json/gradeJson/16.1/cloud.json');
        this.load.image('grade163_1_Box', window.baseUrl+'assets/gradeAssets/16.1/gameAssets/no box.png');

        this.load.atlas('grade163_greenNumbers',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/0 to 10.png' ,window.baseUrl+'json/gradeJson/16.1/0 to 10.json');


    }

    },
    
	create:function(game){

_this.amplify = null;
       _this.AnsTimerCount=0;   
        _this.sceneCount=0;
        _this.noofAttempts = 0;

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
        _this.w = 8;
         _this.no1=0;
         _this.qArrays = [1,2,3,4,5,6,7,9,10];
        _this.animArraylength = 9;
        _this.qArrays = _this.shuffle( _this.qArrays);
         _this.count=0;
         _this.count1=0;
		 _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);
        _this.physics.startSystem(Phaser.Physics.ARCADE);
		    _this.physics.setBoundsToWorld();
        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Unity12_3_3BG_01');
        _this.navBar = _this.add.sprite(0,0,'grade162_TopBar');

        _this.navBar.scale.setTo(1,1);
        _this.timebg = _this.add.sprite(305,6,'grade162_timebg');
      
        _this.whiteBox = _this.add.sprite(618,315,'box163');
        _this.whiteBox.scale.setTo(2.35,1.15);

        _this.questBox = _this.add.sprite(615,388,'grade163_1_Box');
        _this.questBox.scale.setTo(1.1,0.9);
  
        _this.Eggbox= _this.add.sprite(_this.world.centerX-200,_this.world.centerY-10,'crate163');
        _this.Eggbox.anchor.setTo(0.5);
        _this.Eggbox.scale.setTo(1,1);

        _this.ansBox = _this.add.sprite(775,395,'grade163_box1');
        _this.ansBox.frame=0;
        _this.ansBox.scale.setTo(0.45,0.45);
        _this.ansBox.inputEnabled = true;
        _this.ansBox.input.useHandCursor = true;
             
             _this.timeDisplay = _this.add.text(330,22, _this.minutes + ' : '+  _this.seconds);
             _this.timeDisplay.anchor.setTo(0.5);
             _this.timeDisplay.align = 'center';
             _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontWeight = 'normal';
             _this.timeDisplay.fontSize = 20;
             _this.timeDisplay.fill = '#ADFF2F';
         
     
       _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            _this.backbtn.events.onInputDown.removeAll();
          //  _this.stopVoice();
            
            //_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            if(gradeSelected == 1)
              _this.state.start('grade1levelSelectionScreen',true,false); 
            else if(gradeSelected == 2)
              _this.state.start('grade2levelSelectionScreen',true,false); 
            else
              _this.state.start('grade3levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'grade11_speaker');
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           //_this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
			_this.getVoice();
        },_this);
        
       

         _this.numBoxNum1 = _this.add.sprite(773,388,'grade163_greenNumbers');
        _this.numBox1Pressed = true;
         _this.numBoxNum2 = _this.add.sprite(865,145,'grade163_greenNumbers');
        _this.numBoxNum1.visible = false;
              _this.numBoxNum2.visible = false;

        _this.dblDigit=0;


      _this.generateStarsForTheScene(6);
        
        _this.getQuestion();
		_this.getVoice();
    },

	 getVoice:function(){
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
                case 15:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/16.3/English/Game16.3.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/16.3/Hindi/Game16.3.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/16.3/Kannada/Game16.3.mp3");
                        }
                        else if(window.languageSelected == "Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/16.3/Game16.3.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/16.3/Marathi/Game16.3.mp3");
                            }
							else if(window.languageSelected=="Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/16.3/Telugu/Game16.3.mp3");
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/16.3/Tamil/Game16.3.mp3");
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/16.3/Urdu/Game16.3.mp3");
                            }
                        else
                        {
                          _this.src.setAttribute("src", window.baseUrl+"questionSounds/16.3/Odiya/16.3.mp3");
                          _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }

                        break;
            }

          _this.playQuestionSound.appendChild(_this.src);
          _this.playQuestionSound.play();
      },
    updateTimer:function() {
     _this.counterForTimer++;
    // //////console.log("lololil"+_this.counterForTimer);
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

      _this.AnsTimerCount=0;   
        _this.sceneCount++;
        _this.noofAttempts = 0;



    ////console.log("get Question "+_this.no1);
        _this.timer = _this.time.create(false);
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


        //////console.log(" _this.no1"+ _this.no1);
        // _this.no1 = 1;
     ////console.log("Q "+_this.qArrays[_this.no1]);
            switch(_this.qArrays[_this.no1])
           //switch(6)
    	{
    		case 1: 
        _this.gotoFirstQuestion();
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
            case 7: _this.gotoSeventhQuestion();
            break;
            case 8: _this.gotoEighthQuestion();
            break;
            case 9: _this.gotoNinthQuestion();
            break;
        case 10: _this.gotoTenthQuestion();
            break;
    	}
                     // _this.assesStartEvent=RI.telemetryService.assessmentStart({"qid":_this.sceneCount.toString(),"subj":"Math","qlevel":"MEDIUM","data":{"maxscore":1}}) ;

     _this.questionid = 1;
    },
    

 gotoFirstQuestion:function(){
           
           _this.basket = _this.add.sprite(650,30,'basket163');
        _this.basket.scale.setTo(0.8,0.9);
        _this.basket.frame=0;
      
        _this.Eggbox1= _this.add.sprite(276,88.5,'eggGroup163');
        _this.Eggbox1.anchor.setTo(0.5);
        _this.Eggbox1.scale.setTo(0.9,0.9);
        _this.Eggbox1.frame=2;
        _this.Eggbox2= _this.add.sprite(276,128.5,'eggGroup163');
        _this.Eggbox2.anchor.setTo(0.5);
        _this.Eggbox2.scale.setTo(0.9,0.9);
        _this.Eggbox2.frame=2;
        _this.Eggbox3= _this.add.sprite(276,166.5,'eggGroup163');
        _this.Eggbox3.anchor.setTo(0.5);
        _this.Eggbox3.scale.setTo(0.9,0.9);
        _this.Eggbox3.frame=2;
        _this.Eggbox4= _this.add.sprite(276,204.5,'eggGroup163');
        _this.Eggbox4.anchor.setTo(0.5);
        _this.Eggbox4.scale.setTo(0.9,0.9);
        _this.Eggbox4.frame=2;
        _this.Eggbox5= _this.add.sprite(276,242.5,'eggGroup163');
        _this.Eggbox5.anchor.setTo(0.5);
        _this.Eggbox5.scale.setTo(0.9,0.9);
        _this.Eggbox5.frame=2;
        _this.Eggbox6= _this.add.sprite(276,280.5,'eggGroup163');
        _this.Eggbox6.anchor.setTo(0.5);
        _this.Eggbox6.scale.setTo(0.9,0.9);
        _this.Eggbox6.frame=2;
        _this.Eggbox7= _this.add.sprite(276,318.5,'eggGroup163');
        _this.Eggbox7.anchor.setTo(0.5);
        _this.Eggbox7.scale.setTo(0.9,0.9);
        _this.Eggbox7.frame=2;
        _this.mulQuestOneNum1 = _this.add.sprite(655,333,'grade163_greenNumbers');
        _this.mulQuestOneNum1.frame=7;
        _this.mulQuestOneNum1.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum1.fontSize = 1.15;
        _this.mulQuestOneNum2 = _this.add.sprite(710,333,'grade163_greenNumbers');
        _this.mulQuestOneNum2.frame=2;
        _this.mulQuestOneNum2.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum2.fontSize = 1.15;
        _this.multiplySymbol = _this.add.sprite(685,330,'divide163');
        _this.multiplySymbol.frame=0;
        _this.multiplySymbol.scale.setTo(0.8,0.8);
        _this.equalSymbol = _this.add.sprite(735,330,'divide163');
        _this.equalSymbol.frame=1;
        _this.equalSymbol.scale.setTo(0.8,0.8);
        _this.mulAns = _this.add.sprite(750,333,'grade163_greenNumbers');
        _this.mulAns.frame=1;
        _this.mulAns.scale.setTo(0.8,0.8);
        _this.mulAns.fontSize = 1;
        _this.mulAns1 = _this.add.sprite(765,333,'grade163_greenNumbers');
        _this.mulAns1.frame=4;
        _this.mulAns1.scale.setTo(0.8,0.8);
        _this.mulAns1.fontSize =  1.15;
        _this.divQuestOneNum1 = _this.add.sprite(620,390,'grade163_greenNumbers');
        _this.divQuestOneNum1.frame=1;
        _this.divQuestOneNum1.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
        _this.divQuestOneNum11= _this.add.sprite(638,390,'grade163_greenNumbers');
        _this.divQuestOneNum11.frame=4;
        _this.divQuestOneNum11.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
_this.divQuestOneNum2 = _this.add.sprite(705,388.5,'grade163_greenNumbers');
        _this.divQuestOneNum2.frame=2;
        _this.divQuestOneNum2.scale.setTo(1,1);
        _this.divQuestOneNum2.fontSize = 1.35;
        _this.divideSymbol = _this.add.sprite(675,383,'divide163');
        _this.divideSymbol.frame=2;
        _this.divideSymbol.scale.setTo(1,1);
        _this.equalSymbol1 = _this.add.sprite(740,389.5,'divide163');
        _this.equalSymbol1.frame=1;
        _this.equalSymbol1.scale.setTo(0.8,0.8);
            
       _this.Eggbox1.inputEnabled = true;
       _this.Eggbox1.input.useHandCursor = true;
       _this.Eggbox1.name="Eggbox1";
       _this.Eggbox1.events.onInputDown.add(_this.eggClicked,_this);
       _this.Eggbox2.inputEnabled = true;
       _this.Eggbox2.input.useHandCursor = true;
       _this.Eggbox2.events.onInputDown.add(_this.eggClicked,_this);
       _this.Eggbox2.name="Eggbox2";
       _this.Eggbox3.inputEnabled = true;
       _this.Eggbox3.input.useHandCursor = true;
       _this.Eggbox3.events.onInputDown.add(_this.eggClicked,_this);
       _this.Eggbox3.name="Eggbox3";
       _this.Eggbox4.inputEnabled = true;
       _this.Eggbox4.input.useHandCursor = true;
       _this.Eggbox4.events.onInputDown.add(_this.eggClicked,_this);
       _this.Eggbox4.name="Eggbox4";
       _this.Eggbox5.inputEnabled = true;
       _this.Eggbox5.input.useHandCursor = true;
       _this.Eggbox5.events.onInputDown.add(_this.eggClicked,_this);
       _this.Eggbox5.name="Eggbox5";
       _this.Eggbox6.inputEnabled = true;
       _this.Eggbox6.input.useHandCursor = true;
       _this.Eggbox6.events.onInputDown.add(_this.eggClicked,_this);
       _this.Eggbox6.name="Eggbox6";
       _this.Eggbox7.inputEnabled = true;
       _this.Eggbox7.input.useHandCursor = true;
       _this.Eggbox7.events.onInputDown.add(_this.eggClicked,_this);
       _this.Eggbox7.name="Eggbox7";
       _this.rightAns=7;


    _this.Eggbox1.canAdd = false;
    _this.Eggbox2.canAdd = false;
    _this.Eggbox3.canAdd = false;
    _this.Eggbox4.canAdd = false;
    _this.Eggbox5.canAdd = false;
        _this.Eggbox6.canAdd = false;

    _this.Eggbox7.canAdd = false;
    
 },

 eggClicked:function(target){
 //console.log("target name "+target.name);
 //console.log("target  "+target);
 //_this.noOfBasket=7;
 _this.vx = target.x;   
 _this.vy = target.y; 
  _this.Eggbox1.canAdd= true;
                                        //  RI.telemetryService.interact({"type":"DRAG","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

 target.input.enableDrag(true);

 //_this.clickSound = _this.add.audio('ClickSound');
 _this.clickSound.play();

 target.events.onDragStop.add(
 function(target){
                                                //RI.telemetryService.interact({"type":"DROP","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

 /*if( _this.w>=0)
 {
  */        if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox1.canAdd == true)
          {
                                //console.log("inside checkoverloap condition.....................11111111111");
                                //_this.clickSound = _this.add.audio('ClickSound');
                                _this.clickSound.play();
                                target.x =  '870';
                                target.y =  '60';
                                if(target.name=='Eggbox1') 
                                {
                                                                _this.Eggbox2.canAdd = true;

                                       //_this.basket.visible=false;
                                       _this.basket.visible=false;
                                        _this.Eggbox1.kill();
                                        _this.basket1 = _this.add.sprite(650,30,'basket163');
                                        _this.basket1.frame=1;
                                        if(_this.basket1.frame==1){_this.basket.kill();}
                                        _this.basket1.x=650;
                                        _this.basket1.y=30;
                                        var M1 = this.add.tween(_this.basket1);
                                        M1.to({ x: 800,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket1.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
 _this.ansBox.events.onInputDown.add(function(){
                                                          
                                                                      _this.noOfBasket=1;
         //  RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
console.log("noOfBasket  "+_this.noOfBasket);
                                         // if(_this.clickSound){_this.clickSound.destroy();}
                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
                                        setTimeout(function(){ /* _this.basket = _this.add.sprite(650,30,'basket163');
                                        _this.basket.scale.setTo(0.8,0.9);
                                        _this.basket.frame=0;*/
                                                 _this.basket.visible=true;
                                        }, 1000);
                                      }                 

                           }
     if(_this.checkOverlap(target, _this.basket) &&  _this.Eggbox2.canAdd == true)
          {
                     
                             if(target.name=='Eggbox2') 
                                      {                              _this.Eggbox3.canAdd = true;

                                        //_this.basket.visible=false;
                                                                               _this.basket.visible=false;

                                           // _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                        _this.basket2 = _this.add.sprite(650,30,'basket163');
                                         _this.basket2.scale.setTo(0.8,0.9);
                                        _this.basket2.frame=1;
                                        if(_this.basket2.frame==1){         _this.basket.visible=false;
}
                                         _this.basket2.x=650;
                                        _this.basket2.y=30;
                                        var M1 = this.add.tween(_this.basket2);
                                        M1.to({ x: 680,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket2.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
 _this.ansBox.events.onInputDown.add(function(){
                                                                   //  RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
                             _this.noOfBasket=2;         

                                         // if(_this.clickSound){_this.clickSound.destroy();}
                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                        setTimeout(function(){/*  _this.basket = _this.add.sprite(650,30,'basket163');
                                        _this.basket.scale.setTo(0.8,0.9);
                                        _this.basket.frame=0;*/
                                        _this.basket.visible=true;

                                        }, 1000);
                                      }  
}
if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox3.canAdd == true)
          {

                                       if(target.name=='Eggbox3') 
                                      {                              _this.Eggbox4.canAdd = true;

                                      _this.basket.visible=false;
                                          //  _this.Eggbox1.kill();
                                          //_this.Eggbox2.kill();
                                          _this.Eggbox3.kill();

                                        _this.basket3 = _this.add.sprite(650,30,'basket163');
                                         _this.basket3.scale.setTo(0.8,0.9);
                                        _this.basket3.frame=1;
                                        if(_this.basket3.frame==1){_this.basket.kill();}

                                         _this.basket3.x=650;
                                        _this.basket3.y=30;
                                        var M1 = this.add.tween(_this.basket3);
                                        M1.to({ x: 560,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket3.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket3.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket3.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
 _this.ansBox.events.onInputDown.add(function(){
                                                                   //  RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
                             _this.noOfBasket=3;         

                                         // if(_this.clickSound){_this.clickSound.destroy();}
                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                        setTimeout(function(){ _this.basket.visible=true;  
                                                     }, 1000);}
}
 if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox4.canAdd == true)
          {

                                       if(target.name=='Eggbox4') 
                                      {                              _this.Eggbox5.canAdd = true;

                                       _this.basket.visible=false;
                                        /*     _this.Eggbox1.kill();
                                          _this.Eggbox2.kill();
                                          _this.Eggbox3.kill();
                                        */  _this.Eggbox4.kill();
                                        _this.basket4 = _this.add.sprite(650,30,'basket163');
                                         _this.basket4.scale.setTo(0.8,0.9);
                                        _this.basket4.frame=1;
                                      if(_this.basket4.frame==1){_this.basket.kill();}

                                        _this.basket4.x=650;
                                        _this.basket4.y=30;
                                        var M1 = this.add.tween(_this.basket4);
                                        M1.to({ x: 800,y:200}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket4.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket4.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket4.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                         //_this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
 _this.ansBox.events.onInputDown.add(function(){
                                                                   //  RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
                             _this.noOfBasket=4;         

                                         // if(_this.clickSound){_this.clickSound.destroy();}
                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                              setTimeout(function(){ _this.basket.visible=true;   
                                                          }, 1000);}
}
 if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox5.canAdd == true)
          {

                                       if(target.name=='Eggbox5') 
                                      {                              _this.Eggbox6.canAdd = true;

                                       _this.basket.visible=false;
                                           /*  _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                            _this.Eggbox3.kill();
                                            _this.Eggbox4.kill();
                                         */   _this.Eggbox5.kill();
                                        _this.basket5 = _this.add.sprite(650,30,'basket163');
                                         _this.basket5.scale.setTo(0.8,0.9);
                                        _this.basket5.frame=1;
                                        if(_this.basket5.frame==1){_this.basket.kill();}

                                         _this.basket5.x=650;
                                        _this.basket5.y=30;
                                        var M1 = this.add.tween(_this.basket5);
                                        M1.to({ x: 680,y:200}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket5.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket5.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket5.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                       //  _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
 _this.ansBox.events.onInputDown.add(function(){
                                                                   //  RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
                             _this.noOfBasket=5;         

                                         // if(_this.clickSound){_this.clickSound.destroy();}
                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);}
}
  if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox6.canAdd == true)
          {

                                       if(target.name=='Eggbox6') 
                                      {                              _this.Eggbox7.canAdd = true;

                                      _this.basket.visible=false;
                                        /* _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                            _this.Eggbox3.kill();
                                            _this.Eggbox4.kill();
                                            _this.Eggbox5.kill();
                                      */      _this.Eggbox6.kill();
                                        _this.basket6 = _this.add.sprite(650,30,'basket163');
                                         _this.basket6.scale.setTo(0.8,0.9);
                                         _this.basket6.frame=1;
                                       if(_this.basket6.frame==1){_this.basket.kill();}

                                         _this.basket6.x=650;
                                        _this.basket6.y=30;
                                        var M1 = this.add.tween(_this.basket6);
                                        M1.to({ x: 560,y:200}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket6.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket6.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket6.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                      //  _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
 _this.ansBox.events.onInputDown.add(function(){
                                                                   //  RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
                             _this.noOfBasket=6;         

                                         // if(_this.clickSound){_this.clickSound.destroy();}
                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      } 
}
  if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox7.canAdd == true)
          {

                                        if(target.name=='Eggbox7') 
                                      {
                                       _this.basket.visible=false;

                                        /* _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                            _this.Eggbox3.kill();
                                            _this.Eggbox4.kill();
                                            _this.Eggbox5.kill();
                                            _this.Eggbox6.kill();
                                         */   _this.Eggbox7.kill();
                                        _this.basket7 = _this.add.sprite(650,30,'basket163');
                                         _this.basket7.scale.setTo(0.8,0.9);
                                        _this.basket7.frame=1;
                                       if(_this.basket7.frame==1){_this.basket.kill();}

                                        _this.basket7.x=650;
                                        _this.basket7.y=30;
                                        var M1 = this.add.tween(_this.basket7);
                                        M1.to({ x: 560,y:130}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket7.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket7.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket7.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                        _this.ansBox.events.onInputDown.add(function(){
                                                                           _this.noOfBasket=7;         
                     //  RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                         // if(_this.clickSound){_this.clickSound.destroy();}
                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);

                                      setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  

                          /*            
                             _this.w--;
                        }*/
                    }

                    else{
                               target.x =  _this.vx;
                              target.y =  _this.vy; 
                          
                          }
                target.events.onDragStop.removeAll(); 
               
                 },_this);
        
        
    },

    eggClicked2:function(target){
        //console.log("target name "+target.name);
                //console.log("target  "+target);
 _this.Eggbox1.canAdd         = true;
         _this.vx = target.x;   
         _this.vy = target.y; 
                                                 //RI.telemetryService.interact({"type":"DRAG","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

         target.input.enableDrag(true);
        //_this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
         target.events.onDragStop.add(

            function(target){
                                                            //RI.telemetryService.interact({"type":"DROP","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

         /*  if( _this.w>=0){
           */          if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox1.canAdd         == true)
          {
                     
                                //_this.clickSound = _this.add.audio('ClickSound');
                                _this.clickSound.play();
                                 target.x =  '870';
                                 target.y =  '60';
                                      if(target.name=='Eggbox1') 
                                      {
                                                                      _this.Eggbox2.canAdd = true;

                                        _this.basket.visible=false;
                                            _this.Eggbox1.kill();
                                        _this.basket1 = _this.add.sprite(650,30,'basket163');
                                        // _this.basket1.scale.setTo(0.8,0.9);
                                        _this.basket1.frame=4;

                                        if(_this.basket1.frame==4){_this.basket.kill();}
                                        _this.basket1.x=650;
                                        _this.basket1.y=30;
                                        var M1 = this.add.tween(_this.basket1);
                                        M1.to({ x: 800,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket1.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);

                                        _this.ansBox.events.onInputDown.add(function(){
                                                                       //RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=1;

                                            //if(_this.clickSound){_this.clickSound.destroy();}

                                          // _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this); // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);

                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);}               

                                    }
                                      if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox2.canAdd == true)
          {
                      
                                      
                             if(target.name=='Eggbox2') 
                                      {
                                        _this.basket.visible=false;
                                           // _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                        _this.basket2 = _this.add.sprite(650,30,'basket163');
                                         _this.basket2.scale.setTo(0.8,0.9);
                                        _this.basket2.frame=4;
                                        if(_this.basket2.frame==4){_this.basket.kill();}
                                         _this.basket2.x=650;
                                        _this.basket2.y=30;
                                        var M1 = this.add.tween(_this.basket2);
                                        M1.to({ x: 680,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket2.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
                                           _this.ansBox.events.onInputDown.add(function(){
                                                                       //RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=2;

                                            //if(_this.clickSound){_this.clickSound.destroy();}

                                          // _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                         setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  

                          /*            
                             _this.w--;
                        }*/
                    }

                    else{
                               target.x =  _this.vx;
                              target.y =  _this.vy; 
                          
                          }
                target.events.onDragStop.removeAll(); 
               
                 },_this);
        
        
    },

eggClicked3:function(target){
        //console.log("target name "+target.name);
                //console.log("target  "+target);

         _this.vx = target.x;   
         _this.vy = target.y; 
                                       _this.Eggbox1.canAdd= true;
                                       // RI.telemetryService.interact({"type":"DRAG","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

         target.input.enableDrag(true);
       // _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
         target.events.onDragStop.add(
            function(target){
                                                            //RI.telemetryService.interact({"type":"DROP","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

          /* if( _this.w>=0){
          */            if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox1.canAdd         == true)
          {
                     
                                //_this.clickSound = _this.add.audio('ClickSound');
                                _this.clickSound.play();
                                 target.x =  '870';
                                 target.y =  '60';
                                      if(target.name=='Eggbox1') 
                                      {

                                                                      _this.Eggbox2.canAdd = true;

                                        _this.basket.visible=false;
                                            _this.Eggbox1.kill();
                                        _this.basket1 = _this.add.sprite(650,30,'basket163');
                                        // _this.basket1.scale.setTo(0.8,0.9);
                                        _this.basket1.frame=2;

                                        if(_this.basket1.frame==2){_this.basket.kill();}
                                        _this.basket1.x=650;
                                        _this.basket1.y=30;
                                        var M1 = this.add.tween(_this.basket1);
                                        M1.to({ x: 800,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket1.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);

 _this.ansBox.events.onInputDown.add(function(){
                                                                   //    RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=1;

                                            // if(_this.clickSound){_this.clickSound.destroy();}

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                        setTimeout(function(){ _this.basket.visible=true;  
                                                     }, 1000);}               
}
if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox2.canAdd == true)
          {
                     
                                     if(target.name=='Eggbox2') 
                                      {

                                                                      _this.Eggbox3.canAdd = true;

                                        _this.basket.visible=false;
                                           // _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                        _this.basket2 = _this.add.sprite(650,30,'basket163');
                                        // _this.basket1.scale.setTo(0.8,0.9);
                                        _this.basket2.frame=2;

                                        if(_this.basket2.frame==2){_this.basket.kill();}
                                        _this.basket2.x=650;
                                        _this.basket2.y=30;
                                        var M1 = this.add.tween(_this.basket2);
                                        M1.to({ x: 680,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket2.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);

 _this.ansBox.events.onInputDown.add(function(){
                                                                   //    RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=2;

                                            // if(_this.clickSound){_this.clickSound.destroy();}

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                        setTimeout(function(){ _this.basket.visible=true;  
                                                     }, 1000);}               
}
if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox3.canAdd == true)
          {

                                      if(target.name=='Eggbox3') 
                                      {                              _this.Eggbox4.canAdd = true;

                                        _this.basket.visible=false;
                                          /*  _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                           */ _this.Eggbox3.kill();
                                        _this.basket3 = _this.add.sprite(650,30,'basket163');
                                        // _this.basket1.scale.setTo(0.8,0.9);
                                        _this.basket3.frame=2;

                                        if(_this.basket3.frame==2){_this.basket.kill();}
                                        _this.basket3.x=650;
                                        _this.basket3.y=30;
                                        var M1 = this.add.tween(_this.basket3);
                                        M1.to({ x: 560,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket3.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket3.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket3.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);

 _this.ansBox.events.onInputDown.add(function(){
                                                                   //    RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=3;

                                            // if(_this.clickSound){_this.clickSound.destroy();}

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                        setTimeout(function(){ _this.basket.visible=true; }, 1000);            

                            } 
                          }
if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox4.canAdd == true)
          {
                     
                          if(target.name=='Eggbox4') 
                                      {

                                        _this.basket.visible=false;
                                          /*  _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                            _this.Eggbox3.kill();
                                          */  _this.Eggbox4.kill();
                                        _this.basket4 = _this.add.sprite(650,30,'basket163');
                                         _this.basket4.scale.setTo(0.8,0.9);
                                        _this.basket4.frame=2;
                                        if(_this.basket4.frame==2){_this.basket.kill();}
                                         _this.basket4.x=650;
                                        _this.basket4.y=30;
                                        var M1 = this.add.tween(_this.basket4);
                                        M1.to({ x: 800,y:200}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket4.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket4.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket4.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
                                           _this.ansBox.events.onInputDown.add(function(){
                                                                   //    RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=4;

                                            // if(_this.clickSound){_this.clickSound.destroy();}

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  

                          /*            
                             _this.w--;
                        }*/
                    }

                    else{
                               target.x =  _this.vx;
                              target.y =  _this.vy; 
                          
                          }
                target.events.onDragStop.removeAll(); 
               
                 },_this);
        
    },
eggClicked4:function(target){
        //console.log("target name "+target.name);
                //console.log("target  "+target);
_this.Eggbox1.canAdd = true;
         _this.vx = target.x;   
         _this.vy = target.y; 
                                               //  RI.telemetryService.interact({"type":"DRAG","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

         target.input.enableDrag(true);
        //_this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
         target.events.onDragStop.add(
            function(target){
                                                       //     RI.telemetryService.interact({"type":"DROP","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

          /* if( _this.w>=0){
          */          if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox1.canAdd == true)
          {
                     
                                //_this.clickSound = _this.add.audio('ClickSound');
                                _this.clickSound.play();
                                 target.x =  '870';
                                 target.y =  '60';
                                      if(target.name=='Eggbox1') 
                                      {
                                                                      _this.Eggbox2.canAdd = true;

                                        _this.basket.visible=false;
                                            _this.Eggbox1.kill();
                                        _this.basket1 = _this.add.sprite(650,30,'basket163');
                                        // _this.basket1.scale.setTo(0.8,0.9);
                                        _this.basket1.frame=5;

                                        if(_this.basket1.frame==5){_this.basket.kill();}
                                        _this.basket1.x=650;
                                        _this.basket1.y=30;
                                        var M1 = this.add.tween(_this.basket1);
                                        M1.to({ x: 800,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket1.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);

_this.ansBox.events.onInputDown.add(function(){
                           //  RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=1;

                                            //if(_this.clickSound){_this.clickSound.destroy();}

                                          // _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
  
                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }                 
}
if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox2.canAdd == true)
          {

                                     if(target.name=='Eggbox2') 
                                      {
                                        _this.basket.visible=false;
                                            //_this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                        _this.basket2 = _this.add.sprite(650,30,'basket163');
                                        // _this.basket1.scale.setTo(0.8,0.9);
                                        _this.basket2.frame=5;

                                        if(_this.basket2.frame==5){_this.basket.kill();}
                                        _this.basket2.x=650;
                                        _this.basket2.y=30;
                                        var M1 = this.add.tween(_this.basket2);
                                        M1.to({ x: 680,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket2.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);

                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
_this.ansBox.events.onInputDown.add(function(){
                           //  RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=2;

                                            //if(_this.clickSound){_this.clickSound.destroy();}

                                          // _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                      setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  

                          /*            
                             _this.w--;
                        }*/
                    }

                    else{
                               target.x =  _this.vx;
                              target.y =  _this.vy; 
                          
                          }
                target.events.onDragStop.removeAll(); 
               
                 },_this);
        
        
    },

      eggClicked5:function(target){
        //console.log("target name "+target.name);
                //console.log("target  "+target);
_this.Eggbox1.canAdd=true;
         _this.vx = target.x;   
         _this.vy = target.y; 
                                               //  RI.telemetryService.interact({"type":"DRAG","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

         target.input.enableDrag(true);
       // _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
         target.events.onDragStop.add(
            function(target){
                                                           // RI.telemetryService.interact({"type":"DROP","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

           /*if( _this.w>=0){
           */         if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox1.canAdd         == true)
          {
                     
                                //_this.clickSound = _this.add.audio('ClickSound');
                                _this.clickSound.play();
                                 target.x =  '870';
                                 target.y =  '60';
                                      if(target.name=='Eggbox1') 
                                      {

                                                                      _this.Eggbox2.canAdd = true;

                                        _this.basket.visible=false;
                                            _this.Eggbox1.kill();
                                        _this.basket1 = _this.add.sprite(650,30,'basket163');
                                        // _this.basket1.scale.setTo(0.8,0.9);
                                        _this.basket1.frame=2;

                                        if(_this.basket1.frame==2){_this.basket.kill();}
                                        _this.basket1.x=650;
                                        _this.basket1.y=30;
                                        var M1 = this.add.tween(_this.basket1);
                                        M1.to({ x: 800,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket1.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);

_this.ansBox.events.onInputDown.add(function(){
                          //   RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=1;

                                           // if(_this.clickSound){_this.clickSound.destroy();}

                                          // _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
     
                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }                 

                                   }
                                   if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox2.canAdd == true)
          {
                       
                                      
                             if(target.name=='Eggbox2') 
                                      {

                                                                      _this.Eggbox3.canAdd = true;

                                        _this.basket.visible=false;
                                           // _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                        _this.basket2 = _this.add.sprite(650,30,'basket163');
                                         _this.basket2.scale.setTo(0.8,0.9);
                                        _this.basket2.frame=2;
                                        if(_this.basket2.frame==2){_this.basket.kill();}
                                         _this.basket2.x=650;
                                        _this.basket2.y=30;
                                        var M1 = this.add.tween(_this.basket2);
                                        M1.to({ x: 680,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket2.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
_this.ansBox.events.onInputDown.add(function(){
                          //   RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=2;

                                           // if(_this.clickSound){_this.clickSound.destroy();}

                                          // _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
     
                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  
}
if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox3.canAdd == true)
          {

                                       if(target.name=='Eggbox3') 
                                      {
                                                                      _this.Eggbox4.canAdd = true;

                                       _this.basket.visible=false;
                                          /*  _this.Eggbox1.kill();
                                          _this.Eggbox2.kill();
                                          */_this.Eggbox3.kill();

                                        _this.basket3 = _this.add.sprite(650,30,'basket163');
                                         _this.basket3.scale.setTo(0.8,0.9);
                                        _this.basket3.frame=2;
                                        if(_this.basket3.frame==2){_this.basket.kill();}

                                         _this.basket3.x=650;
                                        _this.basket3.y=30;
                                        var M1 = this.add.tween(_this.basket3);
                                        M1.to({ x: 560,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket3.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket3.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket3.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
_this.ansBox.events.onInputDown.add(function(){
                          //   RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=3;

                                           // if(_this.clickSound){_this.clickSound.destroy();}

                                          // _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
     
                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  
}
if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox4.canAdd == true)
          {

                                       if(target.name=='Eggbox4') 
                                      {
                                                                      _this.Eggbox5.canAdd = true;

                                       _this.basket.visible=false;
                                            /* _this.Eggbox1.kill();
                                          _this.Eggbox2.kill();
                                          _this.Eggbox3.kill();
                                         */ _this.Eggbox4.kill();
                                        _this.basket4 = _this.add.sprite(650,30,'basket163');
                                         _this.basket4.scale.setTo(0.8,0.9);
                                        _this.basket4.frame=2;
                                      if(_this.basket4.frame==2){_this.basket.kill();}

                                        _this.basket4.x=650;
                                        _this.basket4.y=30;
                                        var M1 = this.add.tween(_this.basket4);
                                        M1.to({ x: 800,y:200}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket4.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket4.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket4.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
_this.ansBox.events.onInputDown.add(function(){
                          //   RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=4;

                                           // if(_this.clickSound){_this.clickSound.destroy();}

                                          // _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
     
                                              setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  
                                    }
                                    if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox5.canAdd == true)
          {
                     

                                       if(target.name=='Eggbox5') 
                                      {


                                       _this.basket.visible=false;
                                           /*  _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                            _this.Eggbox3.kill();
                                            _this.Eggbox4.kill();
                                           */ _this.Eggbox5.kill();
                                        _this.basket5 = _this.add.sprite(650,30,'basket163');
                                         _this.basket5.scale.setTo(0.8,0.9);
                                        _this.basket5.frame=2;
                                        if(_this.basket5.frame==2){_this.basket.kill();}

                                         _this.basket5.x=650;
                                        _this.basket5.y=30;
                                        var M1 = this.add.tween(_this.basket5);
                                        M1.to({ x: 680,y:200}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket5.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket5.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket5.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                       //  _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
 _this.ansBox.events.onInputDown.add(function(){
                          //   RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=5;

                                           // if(_this.clickSound){_this.clickSound.destroy();}

                                          // _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                         setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  

                          /*            
                             _this.w--;
                        }*/
                    }

                    else{
                               target.x =  _this.vx;
                              target.y =  _this.vy; 
                          
                          }
                target.events.onDragStop.removeAll(); 
               
                 },_this);
        
    },

  eggClicked6:function(target){
        //console.log("target name "+target.name);
                //console.log("target  "+target);
                              _this.Eggbox1.canAdd = true;

         _this.vx = target.x;   
         _this.vy = target.y; 
                                              //   RI.telemetryService.interact({"type":"DRAG","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

         target.input.enableDrag(true);
       // _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
         target.events.onDragStop.add(
            function(target){
                                           //   RI.telemetryService.interact({"type":"DROP","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

               
if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox1.canAdd         == true)
          {
                     
                               // _this.clickSound = _this.add.audio('ClickSound');
                                _this.clickSound.play();
                                 target.x =  '870';
                                 target.y =  '60';
                                      if(target.name=='Eggbox1') 
                                      {

                                                                      _this.Eggbox2.canAdd = true;

                                        _this.basket.visible=false;
                                            _this.Eggbox1.kill();
                                        _this.basket1 = _this.add.sprite(650,30,'basket163');
                                        // _this.basket1.scale.setTo(0.8,0.9);
                                        _this.basket1.frame=2;

                                        if(_this.basket1.frame==2){_this.basket.kill();}
                                        _this.basket1.x=650;
                                        _this.basket1.y=30;
                                        var M1 = this.add.tween(_this.basket1);
                                        M1.to({ x: 800,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket1.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);

_this.ansBox.events.onInputDown.add(function(){
                            // RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=1;

                                          //  if(_this.clickSound){_this.clickSound.destroy();}

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);

                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }                 

                                   }
                                   if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox2.canAdd == true)
          {
                       
                                      
                             if(target.name=='Eggbox2') 
                                      {

                                                                      _this.Eggbox3.canAdd = true;

                                        _this.basket.visible=false;
                                           // _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                        _this.basket2 = _this.add.sprite(650,30,'basket163');
                                         _this.basket2.scale.setTo(0.8,0.9);
                                        _this.basket2.frame=2;
                                        if(_this.basket2.frame==2){_this.basket.kill();}
                                         _this.basket2.x=650;
                                        _this.basket2.y=30;
                                        var M1 = this.add.tween(_this.basket2);
                                        M1.to({ x: 680,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket2.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
_this.ansBox.events.onInputDown.add(function(){
                            // RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=2;

                                          //  if(_this.clickSound){_this.clickSound.destroy();}

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);

                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  
}
if(_this.checkOverlap(target, _this.basket)&&  _this.Eggbox3.canAdd == true)
          {

                                       if(target.name=='Eggbox3') 
                                      {

                                       _this.basket.visible=false;
                                          /*  _this.Eggbox1.kill();
                                          _this.Eggbox2.kill();
                                          */_this.Eggbox3.kill();

                                        _this.basket3 = _this.add.sprite(650,30,'basket163');
                                         _this.basket3.scale.setTo(0.8,0.9);
                                        _this.basket3.frame=2;
                                        if(_this.basket3.frame==2){_this.basket.kill();}

                                         _this.basket3.x=650;
                                        _this.basket3.y=30;
                                        var M1 = this.add.tween(_this.basket3);
                                        M1.to({ x: 560,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket3.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket3.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket3.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
_this.ansBox.events.onInputDown.add(function(){
                            // RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});
_this.noOfBasket=3;

                                          //  if(_this.clickSound){_this.clickSound.destroy();}

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);

                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  
}

          /* if( _this.w>=0){
           */         /*if(_this.checkOverlap(target, _this.basket) &&  _this.Eggbox1.canAdd == true)
          {
                     
                                _this.clickSound = _this.add.audio('ClickSound');
                                _this.clickSound.play();
                                 target.x =  '870';
                                 target.y =  '60';
                                      if(target.name=='Eggbox1') 
                                      {
                                      _this.Eggbox2.canAdd = true;

                                        _this.basket.visible=false;
                                            _this.Eggbox1.kill();
                                        _this.basket1 = _this.add.sprite(650,30,'basket163');
                                        // _this.basket1.scale.setTo(0.8,0.9);
                                        _this.basket1.frame=5;

                                        if(_this.basket1.frame==5){_this.basket.kill();}
                                        _this.basket1.x=650;
                                        _this.basket1.y=30;
                                        var M1 = this.add.tween(_this.basket1);
                                        M1.to({ x: 800,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket1.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);

                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);

                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }                 

                                }
          if(_this.checkOverlap(target, _this.basket) &&  _this.Eggbox2.canAdd == true)
          {
                          
                                      
                             if(target.name=='Eggbox2') 
                                      {
                                          _this.Eggbox3.canAdd = true;

                                        _this.basket.visible=false;
                                           // _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                        _this.basket2 = _this.add.sprite(650,30,'basket163');
                                         _this.basket2.scale.setTo(0.8,0.9);
                                        _this.basket2.frame=5;
                                        if(_this.basket2.frame==5){_this.basket.kill();}
                                         _this.basket2.x=650;
                                        _this.basket2.y=30;
                                        var M1 = this.add.tween(_this.basket2);
                                        M1.to({ x: 680,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket2.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);

                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  
                                    }
           if(_this.checkOverlap(target, _this.basket) &&  _this.Eggbox3.canAdd == true)
          {
                     

                                       if(target.name=='Eggbox3') 

                                       _this.basket.visible=false;*/
                                           /* _this.Eggbox1.kill();
                                          _this.Eggbox2.kill();
                                          _this.Eggbox3.kill();

                                        _this.basket3 = _this.add.sprite(650,30,'basket163');
                                         _this.basket3.scale.setTo(0.8,0.9);
                                        _this.basket3.frame=5;
                                        if(_this.basket3.frame==5){_this.basket.kill();}

                                         _this.basket3.x=650;
                                        _this.basket3.y=30;
                                        var M1 = this.add.tween(_this.basket3);
                                        M1.to({ x: 560,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket3.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket3.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket3.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
                                        _this.ansBox.events.onInputDown.add(function(){
                                           _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                         setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  

                          /*            
                             _this.w--;
                        }*/
                    

                    else{
                               target.x =  _this.vx;
                              target.y =  _this.vy; 
                          
                          }
                target.events.onDragStop.removeAll(); 
               
                 },_this);
        
        
    },

  eggClicked7:function(target){
        //console.log("target name "+target.name);
                //console.log("target  "+target);
_this.Eggbox1.canAdd=true;
 //console.log("target x "+target.x);
                //console.log("target y  "+target.y);
         _this.vx = target.x;   
         _this.vy = target.y; 
                                               //  RI.telemetryService.interact({"type":"DRAG","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

         target.input.enableDrag(true);
       // _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
         target.events.onDragStop.add(
            function(target){
                                                         //   RI.telemetryService.interact({"type":"DROP","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

           /*if( _this.w>=0){
           */         if(_this.checkOverlap(target, _this.basket) && _this.Eggbox1.canAdd==true)
                        {
                               // _this.clickSound = _this.add.audio('ClickSound');
                                _this.clickSound.play();
                                 target.x =  '870';
                                 target.y =  '60';
                                      if(target.name=='Eggbox1') 
                                      {
                                                                  _this.Eggbox2.canAdd=true;

                                        _this.basket.visible=false;
                                            _this.Eggbox1.kill();
                                        _this.basket1 = _this.add.sprite(650,30,'basket163');
                                        // _this.basket1.scale.setTo(0.8,0.9);
                                        _this.basket1.frame=7;

                                        if(_this.basket1.frame==7){_this.basket.kill();}
                                        _this.basket1.x=650;
                                        _this.basket1.y=30;
                                        var M1 = this.add.tween(_this.basket1);
                                        M1.to({ x: 800,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket1.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);

 _this.ansBox.events.onInputDown.add(function(){
                                                     //                  RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                                    _this.noOfBasket=1;
                                  //if(_this.clickSound){_this.clickSound.destroy();}

                                          // _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);

                                        setTimeout(function(){ _this.basket.visible=true;   }, 1000);
                                      }                 

                               }      
                        if(_this.checkOverlap(target, _this.basket) && _this.Eggbox2.canAdd==true)
                          { 
        
                             if(target.name=='Eggbox2') 
                                      {
                                        _this.basket.visible=false;
                                         //   _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                        _this.basket2 = _this.add.sprite(650,30,'basket163');
                                         _this.basket2.scale.setTo(0.8,0.9);
                                        _this.basket2.frame=7;
                                        if(_this.basket2.frame==7){_this.basket.kill();}
                                         _this.basket2.x=650;
                                        _this.basket2.y=30;
                                        var M1 = this.add.tween(_this.basket2);
                                        M1.to({ x: 680,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket2.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
                                          _this.ansBox.events.onInputDown.add(function(){
                                                     //                  RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                                    _this.noOfBasket=2;
                                  //if(_this.clickSound){_this.clickSound.destroy();}

                                          // _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);

                                        setTimeout(function(){ _this.basket.visible=true;    
                                                   }, 1000);
                                      }  

                          /*            
                             _this.w--;
                        }*/
                    }

                    else{
                               target.x =  _this.vx;
                              target.y =  _this.vy; 
                          
                          }
                target.events.onDragStop.removeAll(); 
               
                 },_this);
        
    },  eggClicked8:function(target){
        //console.log("target name "+target.name);
                //console.log("target  "+target);
_this.Eggbox1.canAdd=true;
         _this.vx = target.x;   
         _this.vy = target.y; 
                                         //        RI.telemetryService.interact({"type":"DRAG","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

         target.input.enableDrag(true);
        //_this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
         target.events.onDragStop.add(
            function(target){

                                                   //         RI.telemetryService.interact({"type":"DROP","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

          /* if( _this.w>=0){
          */          if(_this.checkOverlap(target, _this.basket) && _this.Eggbox1.canAdd)
                        {
                                //_this.clickSound = _this.add.audio('ClickSound');
                                _this.clickSound.play();
                                 target.x =  '870';
                                 target.y =  '60';
                                      if(target.name=='Eggbox1') 
                                      {

                                        _this.basket.visible=false;
                                            _this.Eggbox1.kill();
                                        _this.basket1 = _this.add.sprite(650,30,'basket163');
                                        // _this.basket1.scale.setTo(0.8,0.9);
                                        _this.basket1.frame=4;

                                        if(_this.basket1.frame==4){_this.basket.kill();}
                                        _this.basket1.x=650;
                                        _this.basket1.y=30;
                                        var M1 = this.add.tween(_this.basket1);
                                        M1.to({ x: 800,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket1.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);

                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
                                         _this.ansBox.events.onInputDown.add(function(){
                                                    //                 RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                                                                   /* if(_this.clickSound){
                                                                                      _this.clickSound.destroy();}
*/
                                         //  _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);

                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }                 
 
                            
                          /*   _this.w--;
                        }*/
                    }
                target.events.onDragStop.removeAll(); 
                target.x =  _this.vx;
                target.y =  _this.vy; 
                 },_this);
        
    },  eggClicked9:function(target){
        //console.log("target name "+target.name);
                //console.log("target  "+target);
_this.Eggbox1.canAdd=true;
         _this.vx = target.x;   
         _this.vy = target.y; 
                                           //      RI.telemetryService.interact({"type":"DRAG","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

         target.input.enableDrag(true);
       // _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
         target.events.onDragStop.add(
            function(target){
                                             //               RI.telemetryService.interact({"type":"DROP","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

         /*  if( _this.w>=0){
          */          if(_this.checkOverlap(target, _this.basket) && _this.Eggbox1.canAdd==true)
                        {
                                //_this.clickSound = _this.add.audio('ClickSound');
                                _this.clickSound.play();
                                 target.x =  '870';
                                 target.y =  '60';
                                      if(target.name=='Eggbox1') 
                                      {
                                        _this.Eggbox2.canAdd=true;

                                        _this.basket.visible=false;
                                            _this.Eggbox1.kill();
                                        _this.basket1 = _this.add.sprite(650,30,'basket163');
                                        // _this.basket1.scale.setTo(0.8,0.9);
                                        _this.basket1.frame=3;

                                        if(_this.basket1.frame==3){_this.basket.kill();}
                                        _this.basket1.x=650;
                                        _this.basket1.y=30;
                                        var M1 = this.add.tween(_this.basket1);
                                        M1.to({ x: 800,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket1.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);

_this.ansBox.events.onInputDown.add(function(){
                                                           //        RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                                                                 // if(_this.clickSound){_this.clickSound.destroy();}
_this.noOfBasket=1;

                                          // _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }                 

                                     }
                                     if(_this.checkOverlap(target, _this.basket) && _this.Eggbox2.canAdd==true)
                        {
                                      
                             if(target.name=='Eggbox2') 
                                      {
                                       _this.basket.visible=false;
                                           // _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                        _this.basket2 = _this.add.sprite(650,30,'basket163');
                                         _this.basket2.scale.setTo(0.8,0.9);
                                        _this.basket2.frame=3;
                                        if(_this.basket2.frame==3){_this.basket.kill();}
                                         _this.basket2.x=650;
                                        _this.basket2.y=30;
                                        var M1 = this.add.tween(_this.basket2);
                                        M1.to({ x: 680,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket2.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);
                                       _this.ansBox.events.onInputDown.add(function(){
                                                           //        RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                                                                 // if(_this.clickSound){_this.clickSound.destroy();}
_this.noOfBasket=2;

                                          // _this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                      },_this);
                                       setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  

                          /*            
                             _this.w--;
                        }*/
                    }

                    else{
                               target.x =  _this.vx;
                              target.y =  _this.vy; 
                          
                          }
                target.events.onDragStop.removeAll(); 
               
                 },_this);
        
    },  eggClicked10:function(target){
        //console.log("target name "+target.name);
                //console.log("target  "+target);
_this.Eggbox1.canAdd=true;

         _this.vx = target.x;   
         _this.vy = target.y; 
                                           //      RI.telemetryService.interact({"type":"DRAG","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

         target.input.enableDrag(true);
        //_this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
         target.events.onDragStop.add(
            function(target){
                                          //                  RI.telemetryService.interact({"type":"DROP","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

          /* if( _this.w>=0){
           */         if(_this.checkOverlap(target, _this.basket) && _this.Eggbox1.canAdd==true)
                        {
                                //_this.clickSound = _this.add.audio('ClickSound');
                                _this.clickSound.play();
                                 target.x =  '870';
                                 target.y =  '60';
                                      if(target.name=='Eggbox1') 
                                      {
                                        _this.Eggbox2.canAdd=true;

                                        _this.basket.visible=false;
                                            _this.Eggbox1.kill();
                                        _this.basket1 = _this.add.sprite(650,30,'basket163');
                                        // _this.basket1.scale.setTo(0.8,0.9);
                                        _this.basket1.frame=1;

                                        if(_this.basket1.frame==1){_this.basket.kill();}
                                        _this.basket1.x=650;
                                        _this.basket1.y=30;
                                        var M1 = this.add.tween(_this.basket1);
                                        M1.to({ x: 800,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket1.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket1.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);

 _this.ansBox.events.onInputDown.add(function(){
                                                            //         RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                                   /* if(_this.clickSound){

                                                      _this.clickSound.destroy();}
*/_this.noOfBasket=1;

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                  }, _this);
                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }                 

                                     }
                 if(_this.checkOverlap(target, _this.basket) && _this.Eggbox2.canAdd==true)
{
                                      
                             if(target.name=='Eggbox2') 
                                      {
                                        _this.Eggbox3.canAdd=true;

                                        //_this.basket.visible=false;
                                          //  _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                        _this.basket2 = _this.add.sprite(650,30,'basket163');
                                         _this.basket2.scale.setTo(0.8,0.9);
                                        _this.basket2.frame=1;
                                        if(_this.basket2.frame==1){_this.basket.kill();}
                                         _this.basket2.x=650;
                                        _this.basket2.y=30;
                                        var M1 = this.add.tween(_this.basket2);
                                        M1.to({ x: 680,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket2.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket2.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
 _this.ansBox.events.onInputDown.add(function(){
                                                            //         RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                                   /* if(_this.clickSound){

                                                      _this.clickSound.destroy();}
*/_this.noOfBasket=2;

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                  }, _this);
                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  
}
                if(_this.checkOverlap(target, _this.basket) && _this.Eggbox3.canAdd==true)

                               {        if(target.name=='Eggbox3') 
                                      {
                                        _this.Eggbox4.canAdd=true;

                                       //_this.basket.visible=false;
                                           /* _this.Eggbox1.kill();
                                          _this.Eggbox2.kill();
                                        */  _this.Eggbox3.kill();

                                        _this.basket3 = _this.add.sprite(650,30,'basket163');
                                         _this.basket3.scale.setTo(0.8,0.9);
                                        _this.basket3.frame=1;
                                        if(_this.basket3.frame==1){_this.basket.kill();}

                                         _this.basket3.x=650;
                                        _this.basket3.y=30;
                                        var M1 = this.add.tween(_this.basket3);
                                        M1.to({ x: 560,y:270}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket3.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket3.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket3.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
 _this.ansBox.events.onInputDown.add(function(){
                                                            //         RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                                   /* if(_this.clickSound){

                                                      _this.clickSound.destroy();}
*/_this.noOfBasket=3;

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                  }, _this);
                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  
                                    }
                      if(_this.checkOverlap(target, _this.basket) && _this.Eggbox4.canAdd==true)
{

                                       if(target.name=='Eggbox4') 
                                      {
                                        _this.Eggbox5.canAdd=true;

                                        //_this.basket.kill();
                                          /*   _this.Eggbox1.kill();
                                          _this.Eggbox2.kill();
                                          _this.Eggbox3.kill();
                                          */_this.Eggbox4.kill();
                                        _this.basket4 = _this.add.sprite(650,30,'basket163');
                                         _this.basket4.scale.setTo(0.8,0.9);
                                        _this.basket4.frame=1;
                                      if(_this.basket4.frame==1){_this.basket.kill();}

                                        _this.basket4.x=650;
                                        _this.basket4.y=30;
                                        var M1 = this.add.tween(_this.basket4);
                                        M1.to({ x: 800,y:200}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket4.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket4.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket4.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
 _this.ansBox.events.onInputDown.add(function(){
                                                            //         RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                                   /* if(_this.clickSound){

                                                      _this.clickSound.destroy();}
*/_this.noOfBasket=4;

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                  }, _this);
                                              setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  
}
 if(_this.checkOverlap(target, _this.basket) && _this.Eggbox5.canAdd==true)
{

                                       if(target.name=='Eggbox5') 
                                      {
                                        _this.Eggbox6.canAdd=true;

                                        //_this.basket.kill();
                                            /* _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                            _this.Eggbox3.kill();
                                            _this.Eggbox4.kill();
                                           */ _this.Eggbox5.kill();
                                        _this.basket5 = _this.add.sprite(650,30,'basket163');
                                         _this.basket5.scale.setTo(0.8,0.9);
                                        _this.basket5.frame=1;
                                        if(_this.basket5.frame==1){_this.basket.kill();}

                                         _this.basket5.x=650;
                                        _this.basket5.y=30;
                                        var M1 = this.add.tween(_this.basket5);
                                        M1.to({ x: 680,y:200}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket5.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket5.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket5.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
 _this.ansBox.events.onInputDown.add(function(){
                                                            //         RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                                   /* if(_this.clickSound){

                                                      _this.clickSound.destroy();}
*/_this.noOfBasket=5;

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                  }, _this);
                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  
}
 if(_this.checkOverlap(target, _this.basket) && _this.Eggbox6.canAdd==true)
{

                                       if(target.name=='Eggbox6') 
                                      {
                                        _this.Eggbox7.canAdd=true;

                                       //_this.basket.kill();
                                         /*_this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                            _this.Eggbox3.kill();
                                            _this.Eggbox4.kill();
                                            _this.Eggbox5.kill();
                                        */    _this.Eggbox6.kill();
                                        _this.basket6 = _this.add.sprite(650,30,'basket163');
                                         _this.basket6.scale.setTo(0.8,0.9);
                                         _this.basket6.frame=1;
                                       if(_this.basket6.frame==1){_this.basket.kill();}

                                         _this.basket6.x=650;
                                        _this.basket6.y=30;
                                        var M1 = this.add.tween(_this.basket6);
                                        M1.to({ x: 560,y:200}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket6.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket6.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket6.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
 _this.ansBox.events.onInputDown.add(function(){
                                                            //         RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                                   /* if(_this.clickSound){

                                                      _this.clickSound.destroy();}
*/_this.noOfBasket=6;

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                  }, _this);
                                        setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      } 
}
 if(_this.checkOverlap(target, _this.basket) && _this.Eggbox7.canAdd==true)
{

                                        if(target.name=='Eggbox7') 
                                      {
                                        _this.Eggbox8.canAdd=true;

                                       //_this.basket.visible=false;
                                         /*_this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                            _this.Eggbox3.kill();
                                            _this.Eggbox4.kill();
                                            _this.Eggbox5.kill();
                                            _this.Eggbox6.kill();
                                       */     _this.Eggbox7.kill();
                                        _this.basket7 = _this.add.sprite(650,30,'basket163');
                                         _this.basket7.scale.setTo(0.8,0.9);
                                        _this.basket7.frame=1;
                                       if(_this.basket7.frame==1){_this.basket.kill();}

                                        _this.basket7.x=650;
                                        _this.basket7.y=30;
                                        var M1 = this.add.tween(_this.basket7);
                                        M1.to({ x: 560,y:130}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket7.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket7.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket7.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                       
 _this.ansBox.events.onInputDown.add(function(){
                                                            //         RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                                   /* if(_this.clickSound){

                                                      _this.clickSound.destroy();}
*/_this.noOfBasket=7;

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                  }, _this);
                                       setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  
}
 if(_this.checkOverlap(target, _this.basket) && _this.Eggbox8.canAdd==true)
{

                                       if(target.name=='Eggbox8') 
                                      {
                                        _this.Eggbox9.canAdd=true;

                                       //_this.basket.visible=false;
                                         /*_this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                            _this.Eggbox3.kill();
                                            _this.Eggbox4.kill();
                                            _this.Eggbox5.kill();
                                            _this.Eggbox6.kill();
                                            _this.Eggbox7.kill();
                                         */    _this.Eggbox8.kill();
                                        _this.basket8 = _this.add.sprite(650,30,'basket163');
                                         _this.basket8.scale.setTo(0.8,0.9);
                                        _this.basket8.frame=1;
                                       if(_this.basket8.frame==1){_this.basket.kill();}

                                        _this.basket8.x=650;
                                        _this.basket8.y=30;
                                        var M1 = this.add.tween(_this.basket8);
                                        M1.to({ x: 680,y:130}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket8.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket8.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket8.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                       
 _this.ansBox.events.onInputDown.add(function(){
                                                            //         RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                                   /* if(_this.clickSound){

                                                      _this.clickSound.destroy();}
*/_this.noOfBasket=8;

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                  }, _this);
                                       setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  
                                        }
                                         if(_this.checkOverlap(target, _this.basket) && _this.Eggbox9.canAdd==true)
{

                             if(target.name=='Eggbox9') 
                                      {
                                       //_this.basket.visible=false;
                                        /* _this.Eggbox1.kill();
                                            _this.Eggbox2.kill();
                                            _this.Eggbox3.kill();
                                            _this.Eggbox4.kill();
                                            _this.Eggbox5.kill();
                                            _this.Eggbox6.kill();
                                            _this.Eggbox7.kill();
                                            _this.Eggbox8.kill();
                                       */     _this.Eggbox9.kill();
                                        _this.basket9 = _this.add.sprite(650,30,'basket163');
                                         _this.basket9.scale.setTo(0.8,0.9);
                                        _this.basket9.frame=1;
                                       if(_this.basket9.frame==1){_this.basket.kill();}

                                        _this.basket9.x=650;
                                        _this.basket9.y=30;
                                        var M1 = this.add.tween(_this.basket9);
                                        M1.to({ x: 800,y:130}, 0, 'Linear', true, 0);
                                        _this.tween1 = this.add.tween(_this.basket9.scale);
                                        _this.tween1.to({ x:0.8 , y:0.9}, 300, 'Linear', true, 0);
                                        _this.tween1.onComplete.add(function(){
                                        _this.tween2 = this.add.tween(_this.basket9.scale);
                                        _this.tween2.to({ x:0.7 , y:0.7}, 300, 'Linear', true, 0);
                                        _this.tween2.onComplete.add(function(){
                                        _this.tween1 = this.add.tween(_this.basket9.scale);
                                        _this.tween1.to({ x:0.45 , y:0.45}, 300, 'Linear', true, 0);
                                        },_this);
                                        },_this);
                                       
                                        _this.ansBox.events.onInputDown.add(function(){
                                                            //         RI.telemetryService.interact({"type":"TOUCH","id":_this.questionid.toString(),"extype":null,"eks":{stageId:"deviceready"}});

                                                   /* if(_this.clickSound){

                                                      _this.clickSound.destroy();}
*/_this.noOfBasket=9;

                                           //_this.clickSound = _this.add.audio('ClickSound');
                                           _this.clickSound.play();
                                       _this.ansBox.frame = 1;
                                        _this.addNumberPad();
                                  }, _this);
                                       setTimeout(function(){ _this.basket.visible=true;               }, 1000);
                                      }  

                          /*            
                             _this.w--;
                        }*/
                    }

                    else{
                               target.x =  _this.vx;
                              target.y =  _this.vy; 
                          
                          }
                target.events.onDragStop.removeAll(); 
               
                 },_this);
        
    },
    gotoSecondQuestion:function(){

       _this.basket = _this.add.sprite(650,30,'basket163');
        _this.basket.scale.setTo(0.8,0.9);
        _this.basket.frame=0;
      
        _this.Eggbox1= _this.add.sprite(279.5,88.5,'eggGroup163');
        _this.Eggbox1.anchor.setTo(0.5);
        _this.Eggbox1.scale.setTo(0.9,0.9);
        _this.Eggbox1.frame=8;
        _this.Eggbox2= _this.add.sprite(279.5,128.5,'eggGroup163');
        _this.Eggbox2.anchor.setTo(0.5);
        _this.Eggbox2.scale.setTo(0.9,0.9);
        _this.Eggbox2.frame=8;
       
        _this.mulQuestOneNum1 = _this.add.sprite(655,333,'grade163_greenNumbers');
        _this.mulQuestOneNum1.frame=2;
        _this.mulQuestOneNum1.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum1.fontSize = 1.15;
        _this.mulQuestOneNum2 = _this.add.sprite(710,333,'grade163_greenNumbers');
        _this.mulQuestOneNum2.frame=5;
        _this.mulQuestOneNum2.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum2.fontSize = 1.15;
        _this.multiplySymbol = _this.add.sprite(685,330,'divide163');
        _this.multiplySymbol.frame=0;
        _this.multiplySymbol.scale.setTo(0.8,0.8);
        _this.equalSymbol = _this.add.sprite(733,330,'divide163');
        _this.equalSymbol.frame=1;
        _this.equalSymbol.scale.setTo(0.8,0.8);
        _this.mulAns = _this.add.sprite(750,333,'grade163_greenNumbers');
        _this.mulAns.frame=1;
        _this.mulAns.scale.setTo(0.8,0.8);
        _this.mulAns.fontSize = 1;
        _this.mulAns1 = _this.add.sprite(765,333,'grade163_greenNumbers');
        _this.mulAns1.frame=0;
        _this.mulAns1.scale.setTo(0.8,0.8);
        _this.mulAns1.fontSize =  1.15;
        _this.divQuestOneNum1 = _this.add.sprite(620,390,'grade163_greenNumbers');
        _this.divQuestOneNum1.frame=1;
        _this.divQuestOneNum1.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
        _this.divQuestOneNum11= _this.add.sprite(638,390,'grade163_greenNumbers');
        _this.divQuestOneNum11.frame=0;
        _this.divQuestOneNum11.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
        _this.divQuestOneNum2 = _this.add.sprite(705,388.5,'grade163_greenNumbers');
        _this.divQuestOneNum2.frame=5;
        _this.divQuestOneNum2.scale.setTo(1,1);
        _this.divQuestOneNum2.fontSize = 1.35;
        _this.divideSymbol = _this.add.sprite(675,383,'divide163');
        _this.divideSymbol.frame=2;
        _this.divideSymbol.scale.setTo(1,1);
        _this.equalSymbol1 = _this.add.sprite(740,389.5,'divide163');
        _this.equalSymbol1.frame=1;
        _this.equalSymbol1.scale.setTo(0.8,0.8);
         _this.Eggbox1.inputEnabled = true;
        _this.Eggbox1.input.useHandCursor = true;
        _this.Eggbox1.name="Eggbox1";
        _this.Eggbox1.events.onInputDown.add(_this.eggClicked2,_this);
        _this.Eggbox2.inputEnabled = true;
        _this.Eggbox2.input.useHandCursor = true;
        _this.Eggbox2.events.onInputDown.add(_this.eggClicked2,_this);
        _this.Eggbox2.name="Eggbox2";
     _this.rightAns=2;

       
     }, 
    gotoThirdQuestion:function(){
 _this.basket = _this.add.sprite(650,30,'basket163');
            _this.basket.scale.setTo(0.8,0.9);
            _this.basket.frame=0;

      

                         _this.Eggbox1= _this.add.sprite(276,88.5,'eggGroup163');
        _this.Eggbox1.anchor.setTo(0.5);
        _this.Eggbox1.scale.setTo(0.9,0.9);
        _this.Eggbox1.frame=4;
        _this.Eggbox2= _this.add.sprite(276,128.5,'eggGroup163');
        _this.Eggbox2.anchor.setTo(0.5);
        _this.Eggbox2.scale.setTo(0.9,0.9);
        _this.Eggbox2.frame=4;
        _this.Eggbox3= _this.add.sprite(276,166.5,'eggGroup163');
        _this.Eggbox3.anchor.setTo(0.5);
        _this.Eggbox3.scale.setTo(0.9,0.9);
        _this.Eggbox3.frame=4;
        _this.Eggbox4= _this.add.sprite(276,204.5,'eggGroup163');
        _this.Eggbox4.anchor.setTo(0.5);
        _this.Eggbox4.scale.setTo(0.9,0.9);
        _this.Eggbox4.frame=4;
        
       
        _this.mulQuestOneNum1 = _this.add.sprite(660,333,'grade163_greenNumbers');
        _this.mulQuestOneNum1.frame=4;
        _this.mulQuestOneNum1.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum1.fontSize = 1.15;
        _this.mulQuestOneNum2 = _this.add.sprite(710,333,'grade163_greenNumbers');
        _this.mulQuestOneNum2.frame=3;
        _this.mulQuestOneNum2.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum2.fontSize = 1.15;
        _this.multiplySymbol = _this.add.sprite(687.5,330,'divide163');
        _this.multiplySymbol.frame=0;
        _this.multiplySymbol.scale.setTo(0.8,0.8);
        _this.equalSymbol = _this.add.sprite(733,330,'divide163');
        _this.equalSymbol.frame=1;
        _this.equalSymbol.scale.setTo(0.8,0.8);
        _this.mulAns = _this.add.sprite(750,333,'grade163_greenNumbers');
        _this.mulAns.frame=1;
        _this.mulAns.scale.setTo(0.8,0.8);
        _this.mulAns.fontSize = 1;
        _this.mulAns1 = _this.add.sprite(765,333,'grade163_greenNumbers');
        _this.mulAns1.frame=2;
        _this.mulAns1.scale.setTo(0.8,0.8);
        _this.mulAns1.fontSize =  1.15;
        _this.divQuestOneNum1 = _this.add.sprite(620,390,'grade163_greenNumbers');
        _this.divQuestOneNum1.frame=1;
        _this.divQuestOneNum1.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
        _this.divQuestOneNum11= _this.add.sprite(638,390,'grade163_greenNumbers');
        _this.divQuestOneNum11.frame=2;
        _this.divQuestOneNum11.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
        _this.divQuestOneNum2 = _this.add.sprite(705,388.5,'grade163_greenNumbers');
        _this.divQuestOneNum2.frame=3;
        _this.divQuestOneNum2.scale.setTo(1,1);
        _this.divQuestOneNum2.fontSize = 1.35;
        _this.divideSymbol = _this.add.sprite(675,383,'divide163');
        _this.divideSymbol.frame=2;
        _this.divideSymbol.scale.setTo(1,1);
        _this.equalSymbol1 = _this.add.sprite(740,389.5,'divide163');
        _this.equalSymbol1.frame=1;
        _this.equalSymbol1.scale.setTo(0.8,0.8);
        _this.Eggbox1.inputEnabled = true;
        _this.Eggbox1.input.useHandCursor = true;
        _this.Eggbox1.name="Eggbox1";
        _this.Eggbox1.events.onInputDown.add(_this.eggClicked3,_this);
        _this.Eggbox2.inputEnabled = true;
        _this.Eggbox2.input.useHandCursor = true;
        _this.Eggbox2.events.onInputDown.add(_this.eggClicked3,_this);
        _this.Eggbox2.name="Eggbox2";
        _this.Eggbox3.inputEnabled = true;
        _this.Eggbox3.input.useHandCursor = true;
        _this.Eggbox3.events.onInputDown.add(_this.eggClicked3,_this);
        _this.Eggbox3.name="Eggbox3";
        _this.Eggbox4.inputEnabled = true;
        _this.Eggbox4.input.useHandCursor = true;
        _this.Eggbox4.events.onInputDown.add(_this.eggClicked3,_this);
        _this.Eggbox4.name="Eggbox4";
     _this.rightAns=4;
     }, 

      gotoFourthQuestion:function(){

        _this.basket = _this.add.sprite(650,30,'basket163');
            _this.basket.scale.setTo(0.8,0.9);
            _this.basket.frame=0;

      	_this.Eggbox1= _this.add.sprite(280.5,88.5,'eggGroup163');
        _this.Eggbox1.anchor.setTo(0.5);
        _this.Eggbox1.scale.setTo(0.9,0.9);
        _this.Eggbox1.frame=10;
        _this.Eggbox2= _this.add.sprite(280.5,128.5,'eggGroup163');
        _this.Eggbox2.anchor.setTo(0.5);
        _this.Eggbox2.scale.setTo(0.9,0.9);
        _this.Eggbox2.frame=10;
        _this.mulQuestOneNum1 = _this.add.sprite(655,333,'grade163_greenNumbers');
        _this.mulQuestOneNum1.frame=2;
        _this.mulQuestOneNum1.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum1.fontSize = 1.15;
        _this.mulQuestOneNum2 = _this.add.sprite(710,333,'grade163_greenNumbers');
        _this.mulQuestOneNum2.frame=6;
        _this.mulQuestOneNum2.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum2.fontSize = 1.15;
        _this.multiplySymbol = _this.add.sprite(685,330,'divide163');
        _this.multiplySymbol.frame=0;
        _this.multiplySymbol.scale.setTo(0.8,0.8);
        _this.equalSymbol = _this.add.sprite(733,330,'divide163');
        _this.equalSymbol.frame=1;
        _this.equalSymbol.scale.setTo(0.8,0.8);
        _this.mulAns = _this.add.sprite(750,333,'grade163_greenNumbers');
        _this.mulAns.frame=1;
        _this.mulAns.scale.setTo(0.8,0.8);
        _this.mulAns.fontSize = 1;
        _this.mulAns1 = _this.add.sprite(765,333,'grade163_greenNumbers');
        _this.mulAns1.frame=2;
        _this.mulAns1.scale.setTo(0.8,0.8);
        _this.mulAns1.fontSize =  1.15;
        _this.divQuestOneNum1 = _this.add.sprite(620,390,'grade163_greenNumbers');
        _this.divQuestOneNum1.frame=1;
        _this.divQuestOneNum1.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
        _this.divQuestOneNum11= _this.add.sprite(638,390,'grade163_greenNumbers');
        _this.divQuestOneNum11.frame=2;
        _this.divQuestOneNum11.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
_this.divQuestOneNum2 = _this.add.sprite(705,388.5,'grade163_greenNumbers');
        _this.divQuestOneNum2.frame=6;
        _this.divQuestOneNum2.scale.setTo(1,1);
        _this.divQuestOneNum2.fontSize = 1.35;
        _this.divideSymbol = _this.add.sprite(675,383,'divide163');
        _this.divideSymbol.frame=2;
        _this.divideSymbol.scale.setTo(1,1);
        _this.equalSymbol1 = _this.add.sprite(740,389.5,'divide163');
        _this.equalSymbol1.frame=1;
        _this.equalSymbol1.scale.setTo(0.8,0.8);
            


        _this.Eggbox1.inputEnabled = true;
             _this.Eggbox1.input.useHandCursor = true;

 
_this.Eggbox1.name="Eggbox1";

_this.Eggbox1.events.onInputDown.add(function()
        {
     
             _this.eggClicked4(_this.Eggbox1);
        },_this);

     _this.Eggbox2.inputEnabled = true;
             _this.Eggbox2.input.useHandCursor = true;
_this.Eggbox2.events.onInputDown.add(function()
        {
            _this.eggClicked4(_this.Eggbox2);
        },_this);

             _this.Eggbox2.name="Eggbox2";
            _this.rightAns=2;

       
       
     }, 

     gotoFifthQuestion:function(){

_this.basket = _this.add.sprite(650,30,'basket163');
            _this.basket.scale.setTo(0.8,0.9);
            _this.basket.frame=0;


        _this.Eggbox1= _this.add.sprite(276.5,88.5,'eggGroup163');
        _this.Eggbox1.anchor.setTo(0.5);
        _this.Eggbox1.scale.setTo(0.9,0.9);
        _this.Eggbox1.frame=4;
        _this.Eggbox2= _this.add.sprite(276.5,128.5,'eggGroup163');
        _this.Eggbox2.anchor.setTo(0.5);
        _this.Eggbox2.scale.setTo(0.9,0.9);
        _this.Eggbox2.frame=4;
        _this.Eggbox3= _this.add.sprite(276.5,166.5,'eggGroup163');
        _this.Eggbox3.anchor.setTo(0.5);
        _this.Eggbox3.scale.setTo(0.9,0.9);
        _this.Eggbox3.frame=4;
        _this.Eggbox4= _this.add.sprite(276.5,204.5,'eggGroup163');
        _this.Eggbox4.anchor.setTo(0.5);
        _this.Eggbox4.scale.setTo(0.9,0.9);
        _this.Eggbox4.frame=4;
        _this.Eggbox5= _this.add.sprite(276.5,242.5,'eggGroup163');
        _this.Eggbox5.anchor.setTo(0.5);
        _this.Eggbox5.scale.setTo(0.9,0.9);
        _this.Eggbox5.frame=4;
        _this.mulQuestOneNum1 = _this.add.sprite(655,333,'grade163_greenNumbers');
        _this.mulQuestOneNum1.frame=5;
        _this.mulQuestOneNum1.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum1.fontSize = 1.15;
        _this.mulQuestOneNum2 = _this.add.sprite(710,333,'grade163_greenNumbers');
        _this.mulQuestOneNum2.frame=3;
        _this.mulQuestOneNum2.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum2.fontSize = 1.15;
        _this.multiplySymbol = _this.add.sprite(685,330,'divide163');
        _this.multiplySymbol.frame=0;
        _this.multiplySymbol.scale.setTo(0.8,0.8);
        _this.equalSymbol = _this.add.sprite(733,330,'divide163');
        _this.equalSymbol.frame=1;
        _this.equalSymbol.scale.setTo(0.8,0.8);
        _this.mulAns = _this.add.sprite(750,333,'grade163_greenNumbers');
        _this.mulAns.frame=1;
        _this.mulAns.scale.setTo(0.8,0.8);
        _this.mulAns.fontSize = 1;
        _this.mulAns1 = _this.add.sprite(765,333,'grade163_greenNumbers');
        _this.mulAns1.frame=5;
        _this.mulAns1.scale.setTo(0.8,0.8);
        _this.mulAns1.fontSize =  1.15;
        _this.divQuestOneNum1 = _this.add.sprite(620,390,'grade163_greenNumbers');
        _this.divQuestOneNum1.frame=1;
        _this.divQuestOneNum1.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
        _this.divQuestOneNum11= _this.add.sprite(638,390,'grade163_greenNumbers');
        _this.divQuestOneNum11.frame=5;
        _this.divQuestOneNum11.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
_this.divQuestOneNum2 = _this.add.sprite(705,388.5,'grade163_greenNumbers');
        _this.divQuestOneNum2.frame=3;
        _this.divQuestOneNum2.scale.setTo(1,1);
        _this.divQuestOneNum2.fontSize = 1.35;
        _this.divideSymbol = _this.add.sprite(675,383,'divide163');
        _this.divideSymbol.frame=2;
        _this.divideSymbol.scale.setTo(1,1);
        _this.equalSymbol1 = _this.add.sprite(740,389.5,'divide163');
        _this.equalSymbol1.frame=1;
        _this.equalSymbol1.scale.setTo(0.8,0.8);
            

                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);

        _this.Eggbox1.inputEnabled = true;
             _this.Eggbox1.input.useHandCursor = true;
            // _this.Eggbox1.events.onInputDown.add(_this.eggClicked,_this);
 
_this.Eggbox1.name="Eggbox1";

_this.Eggbox1.events.onInputDown.add(function()
        {
     
             _this.eggClicked5(_this.Eggbox1);
        },_this);

     _this.Eggbox2.inputEnabled = true;
             _this.Eggbox2.input.useHandCursor = true;
_this.Eggbox2.events.onInputDown.add(function()
        {
            _this.eggClicked5(_this.Eggbox2);
        },_this);

             _this.Eggbox2.name="Eggbox2";
        _this.Eggbox3.inputEnabled = true;
             _this.Eggbox3.input.useHandCursor = true;
             _this.Eggbox3.events.onInputDown.add(_this.eggClicked5,_this);

                          _this.Eggbox3.name="Eggbox3";

        _this.Eggbox4.inputEnabled = true;
             _this.Eggbox4.input.useHandCursor = true;
             _this.Eggbox4.events.onInputDown.add(_this.eggClicked5,_this);

                                       _this.Eggbox4.name="Eggbox4";

        _this.Eggbox5.inputEnabled = true;
             _this.Eggbox5.input.useHandCursor = true;
             _this.Eggbox5.events.onInputDown.add(_this.eggClicked5,_this);

                                       _this.Eggbox5.name="Eggbox5";

            _this.rightAns=5;
     }, 

     gotoSixthQuestion:function(){

_this.basket = _this.add.sprite(650,30,'basket163');
            _this.basket.scale.setTo(0.8,0.9);
            _this.basket.frame=0;

   
        _this.Eggbox1= _this.add.sprite(280,88.5,'eggGroup163');
        _this.Eggbox1.anchor.setTo(0.5);
        _this.Eggbox1.scale.setTo(0.9,0.9);
        _this.Eggbox1.frame=10;
        _this.Eggbox2= _this.add.sprite(280,128.5,'eggGroup163');
        _this.Eggbox2.anchor.setTo(0.5);
        _this.Eggbox2.scale.setTo(0.9,0.9);
        _this.Eggbox2.frame=10;
        _this.Eggbox3= _this.add.sprite(280,166.5,'eggGroup163');
        _this.Eggbox3.anchor.setTo(0.5);
        _this.Eggbox3.scale.setTo(0.9,0.9);
        _this.Eggbox3.frame=10;
       _this.mulQuestOneNum1 = _this.add.sprite(655,333,'grade163_greenNumbers');
        _this.mulQuestOneNum1.frame=3;
        _this.mulQuestOneNum1.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum1.fontSize = 1.15;
        _this.mulQuestOneNum2 = _this.add.sprite(710,333,'grade163_greenNumbers');
        _this.mulQuestOneNum2.frame=6;
        _this.mulQuestOneNum2.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum2.fontSize = 1.15;
        _this.multiplySymbol = _this.add.sprite(685,330,'divide163');
        _this.multiplySymbol.frame=0;
        _this.multiplySymbol.scale.setTo(0.8,0.8);
        _this.equalSymbol = _this.add.sprite(733,330,'divide163');
        _this.equalSymbol.frame=1;
        _this.equalSymbol.scale.setTo(0.8,0.8);
        _this.mulAns = _this.add.sprite(750,333,'grade163_greenNumbers');
        _this.mulAns.frame=1;
        _this.mulAns.scale.setTo(0.8,0.8);
        _this.mulAns.fontSize = 1;
        _this.mulAns1 = _this.add.sprite(765,333,'grade163_greenNumbers');
        _this.mulAns1.frame=8;
        _this.mulAns1.scale.setTo(0.8,0.8);
        _this.mulAns1.fontSize =  1.15;
        _this.divQuestOneNum1 = _this.add.sprite(620,390,'grade163_greenNumbers');
        _this.divQuestOneNum1.frame=1;
        _this.divQuestOneNum1.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
        _this.divQuestOneNum11= _this.add.sprite(638,390,'grade163_greenNumbers');
        _this.divQuestOneNum11.frame=8;
        _this.divQuestOneNum11.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
_this.divQuestOneNum2 = _this.add.sprite(705,388.5,'grade163_greenNumbers');
        _this.divQuestOneNum2.frame=6;
        _this.divQuestOneNum2.scale.setTo(1,1);
        _this.divQuestOneNum2.fontSize = 1.35;
        _this.divideSymbol = _this.add.sprite(675,383,'divide163');
        _this.divideSymbol.frame=2;
        _this.divideSymbol.scale.setTo(1,1);
        _this.equalSymbol1 = _this.add.sprite(740,389.5,'divide163');
        _this.equalSymbol1.frame=1;
        _this.equalSymbol1.scale.setTo(0.8,0.8);
            
                                     // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);

        _this.Eggbox1.inputEnabled = true;
             _this.Eggbox1.input.useHandCursor = true;
            // _this.Eggbox1.events.onInputDown.add(_this.eggClicked,_this);
 
_this.Eggbox1.name="Eggbox1";

_this.Eggbox1.events.onInputDown.add(function()
        {
     
             _this.eggClicked6(_this.Eggbox1);
        },_this);

     _this.Eggbox2.inputEnabled = true;
             _this.Eggbox2.input.useHandCursor = true;
_this.Eggbox2.events.onInputDown.add(function()
        {
            _this.eggClicked6(_this.Eggbox2);
        },_this);

             _this.Eggbox2.name="Eggbox2";
        _this.Eggbox3.inputEnabled = true;
             _this.Eggbox3.input.useHandCursor = true;
             _this.Eggbox3.events.onInputDown.add(_this.eggClicked6,_this);

                          _this.Eggbox3.name="Eggbox3";

            _this.rightAns=3;


     }, 

     gotoSeventhQuestion:function(){

      _this.basket = _this.add.sprite(650,30,'basket163');
            _this.basket.scale.setTo(0.8,0.9);
            _this.basket.frame=0;

        _this.Eggbox1= _this.add.sprite(281,88.5,'eggGroup163');
        _this.Eggbox1.anchor.setTo(0.5);
        _this.Eggbox1.scale.setTo(0.9,0.9);
        _this.Eggbox1.frame=14;
        _this.Eggbox2= _this.add.sprite(281,128.5,'eggGroup163');
        _this.Eggbox2.anchor.setTo(0.5);
        _this.Eggbox2.scale.setTo(0.9,0.9);
        _this.Eggbox2.frame=14;
        
        _this.mulQuestOneNum1 = _this.add.sprite(655,333,'grade163_greenNumbers');
        _this.mulQuestOneNum1.frame=2;
        _this.mulQuestOneNum1.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum1.fontSize = 1.15;
        _this.mulQuestOneNum2 = _this.add.sprite(710,333,'grade163_greenNumbers');
        _this.mulQuestOneNum2.frame=8;
        _this.mulQuestOneNum2.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum2.fontSize = 1.15;
        _this.multiplySymbol = _this.add.sprite(685,330,'divide163');
        _this.multiplySymbol.frame=0;
        _this.multiplySymbol.scale.setTo(0.8,0.8);
        _this.equalSymbol = _this.add.sprite(733,330,'divide163');
        _this.equalSymbol.frame=1;
        _this.equalSymbol.scale.setTo(0.8,0.8);
        _this.mulAns = _this.add.sprite(750,333,'grade163_greenNumbers');
        _this.mulAns.frame=1;
        _this.mulAns.scale.setTo(0.8,0.8);
        _this.mulAns.fontSize = 1;
        _this.mulAns1 = _this.add.sprite(765,333,'grade163_greenNumbers');
        _this.mulAns1.frame=6;
        _this.mulAns1.scale.setTo(0.8,0.8);
        _this.mulAns1.fontSize =  1.15;
        _this.divQuestOneNum1 = _this.add.sprite(620,390,'grade163_greenNumbers');
        _this.divQuestOneNum1.frame=1;
        _this.divQuestOneNum1.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
        _this.divQuestOneNum11= _this.add.sprite(638,390,'grade163_greenNumbers');
        _this.divQuestOneNum11.frame=6;
        _this.divQuestOneNum11.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
_this.divQuestOneNum2 = _this.add.sprite(705,388.5,'grade163_greenNumbers');
        _this.divQuestOneNum2.frame=8;
        _this.divQuestOneNum2.scale.setTo(1,1);
        _this.divQuestOneNum2.fontSize = 1.35;
        _this.divideSymbol = _this.add.sprite(675,383,'divide163');
        _this.divideSymbol.frame=2;
        _this.divideSymbol.scale.setTo(1,1);
        _this.equalSymbol1 = _this.add.sprite(740,389.5,'divide163');
        _this.equalSymbol1.frame=1;
        _this.equalSymbol1.scale.setTo(0.8,0.8);
            

                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);

        _this.Eggbox1.inputEnabled = true;
             _this.Eggbox1.input.useHandCursor = true;
            // _this.Eggbox1.events.onInputDown.add(_this.eggClicked,_this);
 
_this.Eggbox1.name="Eggbox1";

_this.Eggbox1.events.onInputDown.add(function()
        {
     
             _this.eggClicked7(_this.Eggbox1);
        },_this);

     _this.Eggbox2.inputEnabled = true;
             _this.Eggbox2.input.useHandCursor = true;
_this.Eggbox2.events.onInputDown.add(function()
        {
            _this.eggClicked7(_this.Eggbox2);
        },_this);

             _this.Eggbox2.name="Eggbox2";
         _this.rightAns=2;





     }, 

     gotoEighthQuestion:function(){

      _this.basket = _this.add.sprite(650,30,'basket163');
            _this.basket.scale.setTo(0.8,0.9);
            _this.basket.frame=0;

        _this.Eggbox1= _this.add.sprite(280,88.5,'eggGroup163');
        _this.Eggbox1.anchor.setTo(0.5);
        _this.Eggbox1.scale.setTo(0.9,0.9);
        _this.Eggbox1.frame=8;
       
        _this.mulQuestOneNum1 = _this.add.sprite(655,333,'grade163_greenNumbers');
        _this.mulQuestOneNum1.frame=1;
        _this.mulQuestOneNum1.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum1.fontSize = 1.15;
        _this.mulQuestOneNum2 = _this.add.sprite(710,333,'grade163_greenNumbers');
        _this.mulQuestOneNum2.frame=5;
        _this.mulQuestOneNum2.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum2.fontSize = 1.15;
        _this.multiplySymbol = _this.add.sprite(685,330,'divide163');
        _this.multiplySymbol.frame=0;
        _this.multiplySymbol.scale.setTo(0.8,0.8);
        _this.equalSymbol = _this.add.sprite(733,330,'divide163');
        _this.equalSymbol.frame=1;
        _this.equalSymbol.scale.setTo(0.8,0.8);
        _this.mulAns = _this.add.sprite(750,333,'grade163_greenNumbers');
        _this.mulAns.frame=5;
        _this.mulAns.scale.setTo(0.8,0.8);
        _this.mulAns.fontSize = 1;
         _this.divQuestOneNum1 = _this.add.sprite(637,390,'grade163_greenNumbers');
        _this.divQuestOneNum1.frame=5;
        _this.divQuestOneNum1.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
_this.divQuestOneNum2 = _this.add.sprite(705,388.5,'grade163_greenNumbers');
        _this.divQuestOneNum2.frame=5;
      
        _this.divQuestOneNum2.scale.setTo(1,1);
        _this.divQuestOneNum2.fontSize = 1.35;
        _this.divideSymbol = _this.add.sprite(675,383,'divide163');
        _this.divideSymbol.frame=2;
        _this.divideSymbol.scale.setTo(1,1);
        _this.equalSymbol1 = _this.add.sprite(740,389.5,'divide163');
        _this.equalSymbol1.frame=1;
        _this.equalSymbol1.scale.setTo(0.8,0.8);
            

                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);

        _this.Eggbox1.inputEnabled = true;
             _this.Eggbox1.input.useHandCursor = true;
            // _this.Eggbox1.events.onInputDown.add(_this.eggClicked,_this);
 
_this.Eggbox1.name="Eggbox1";

_this.Eggbox1.events.onInputDown.add(function()
        {
     
             _this.eggClicked8(_this.Eggbox1);
        },_this);

            _this.rightAns=1;


        
     }, 

     gotoNinthQuestion:function(){

      _this.basket = _this.add.sprite(650,30,'basket163');
            _this.basket.scale.setTo(0.8,0.9);
            _this.basket.frame=0;

        _this.Eggbox1= _this.add.sprite(280,88.5,'eggGroup163');
        _this.Eggbox1.anchor.setTo(0.5);
        _this.Eggbox1.scale.setTo(0.9,0.9);
        _this.Eggbox1.frame=6;
        _this.Eggbox2= _this.add.sprite(280,128.5,'eggGroup163');
        _this.Eggbox2.anchor.setTo(0.5);
        _this.Eggbox2.scale.setTo(0.9,0.9);
        _this.Eggbox2.frame=6;
       _this.mulQuestOneNum1 = _this.add.sprite(655,333,'grade163_greenNumbers');
        _this.mulQuestOneNum1.frame=2;
        _this.mulQuestOneNum1.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum1.fontSize = 1.15;
        _this.mulQuestOneNum2 = _this.add.sprite(710,333,'grade163_greenNumbers');
        _this.mulQuestOneNum2.frame=4;
        _this.mulQuestOneNum2.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum2.fontSize = 1.15;
        _this.multiplySymbol = _this.add.sprite(685,330,'divide163');
        _this.multiplySymbol.frame=0;
        _this.multiplySymbol.scale.setTo(0.8,0.8);
        _this.equalSymbol = _this.add.sprite(740,330,'divide163');
        _this.equalSymbol.frame=1;
        _this.equalSymbol.scale.setTo(0.8,0.8);
        _this.mulAns = _this.add.sprite(760,333,'grade163_greenNumbers');
        _this.mulAns.frame=8;
        _this.mulAns.scale.setTo(0.8,0.8);
        _this.mulAns.fontSize = 1;
        _this.divQuestOneNum1 = _this.add.sprite(637,390,'grade163_greenNumbers');
        _this.divQuestOneNum1.frame=8;
        _this.divQuestOneNum1.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
 _this.divQuestOneNum2 = _this.add.sprite(705,388.5,'grade163_greenNumbers');
        _this.divQuestOneNum2.frame=4;
        _this.divQuestOneNum2.scale.setTo(1,1);
        _this.divQuestOneNum2.fontSize = 1.35;
        _this.divideSymbol = _this.add.sprite(675,383,'divide163');
        _this.divideSymbol.frame=2;
        _this.divideSymbol.scale.setTo(1,1);
        _this.equalSymbol1 = _this.add.sprite(740,389.5,'divide163');
        _this.equalSymbol1.frame=1;
        _this.equalSymbol1.scale.setTo(0.8,0.8);
            

                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);

        _this.Eggbox1.inputEnabled = true;
             _this.Eggbox1.input.useHandCursor = true;
            // _this.Eggbox1.events.onInputDown.add(_this.eggClicked,_this);
 
_this.Eggbox1.name="Eggbox1";

_this.Eggbox1.events.onInputDown.add(function()
        {
     
             _this.eggClicked9(_this.Eggbox1);
        },_this);

     _this.Eggbox2.inputEnabled = true;
             _this.Eggbox2.input.useHandCursor = true;
_this.Eggbox2.events.onInputDown.add(function()
        {
            _this.eggClicked9(_this.Eggbox2);
        },_this);

             _this.Eggbox2.name="Eggbox2";
         
            _this.rightAns=2;


        
     }, 

     gotoTenthQuestion:function(){

_this.basket = _this.add.sprite(650,30,'basket163');
            _this.basket.scale.setTo(0.8,0.9);
            _this.basket.frame=0;

            _this.Eggbox1= _this.add.sprite(276,88.5,'eggGroup163');
        _this.Eggbox1.anchor.setTo(0.5);
        _this.Eggbox1.scale.setTo(0.9,0.9);
        _this.Eggbox1.frame=2;
        _this.Eggbox2= _this.add.sprite(276,128.5,'eggGroup163');
        _this.Eggbox2.anchor.setTo(0.5);
        _this.Eggbox2.scale.setTo(0.9,0.9);
        _this.Eggbox2.frame=2;
        _this.Eggbox3= _this.add.sprite(276,166.5,'eggGroup163');
        _this.Eggbox3.anchor.setTo(0.5);
        _this.Eggbox3.scale.setTo(0.9,0.9);
        _this.Eggbox3.frame=2;
        _this.Eggbox4= _this.add.sprite(276,204.5,'eggGroup163');
        _this.Eggbox4.anchor.setTo(0.5);
        _this.Eggbox4.scale.setTo(0.9,0.9);
        _this.Eggbox4.frame=2;
        _this.Eggbox5= _this.add.sprite(276,242.5,'eggGroup163');
        _this.Eggbox5.anchor.setTo(0.5);
        _this.Eggbox5.scale.setTo(0.9,0.9);
        _this.Eggbox5.frame=2;
        _this.Eggbox6= _this.add.sprite(276,280.5,'eggGroup163');
        _this.Eggbox6.anchor.setTo(0.5);
        _this.Eggbox6.scale.setTo(0.9,0.9);
        _this.Eggbox6.frame=2;
        _this.Eggbox7= _this.add.sprite(276,318.5,'eggGroup163');
        _this.Eggbox7.anchor.setTo(0.5);
        _this.Eggbox7.scale.setTo(0.9,0.9);
        _this.Eggbox7.frame=2;
        _this.Eggbox8= _this.add.sprite(276,356.5,'eggGroup163');
        _this.Eggbox8.anchor.setTo(0.5);
        _this.Eggbox8.scale.setTo(0.9,0.9);
        _this.Eggbox8.frame=2;
        _this.Eggbox9= _this.add.sprite(276,394.5,'eggGroup163');
        _this.Eggbox9.anchor.setTo(0.5);
        _this.Eggbox9.scale.setTo(0.9,0.9);
        _this.Eggbox9.frame=2;
        _this.mulQuestOneNum1 = _this.add.sprite(655,333,'grade163_greenNumbers');
        _this.mulQuestOneNum1.frame=2;
        _this.mulQuestOneNum1.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum1.fontSize = 1.15;
        _this.mulQuestOneNum2 = _this.add.sprite(710,333,'grade163_greenNumbers');
        _this.mulQuestOneNum2.frame=9;
        _this.mulQuestOneNum2.scale.setTo(0.8,0.8);
        _this.mulQuestOneNum2.fontSize = 1.15;
        _this.multiplySymbol = _this.add.sprite(685,330,'divide163');
        _this.multiplySymbol.frame=0;
        _this.multiplySymbol.scale.setTo(0.8,0.8);
        _this.equalSymbol = _this.add.sprite(733,330,'divide163');
        _this.equalSymbol.frame=1;
        _this.equalSymbol.scale.setTo(0.8,0.8);
        _this.mulAns = _this.add.sprite(750,333,'grade163_greenNumbers');
        _this.mulAns.frame=1;
        _this.mulAns.scale.setTo(0.8,0.8);
        _this.mulAns.fontSize = 1;
        _this.mulAns1 = _this.add.sprite(765,333,'grade163_greenNumbers');
        _this.mulAns1.frame=8;
        _this.mulAns1.scale.setTo(0.8,0.8);
        _this.mulAns1.fontSize =  1.15;
        _this.divQuestOneNum1 = _this.add.sprite(620,390,'grade163_greenNumbers');
        _this.divQuestOneNum1.frame=1;
        _this.divQuestOneNum1.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
        _this.divQuestOneNum11= _this.add.sprite(638,390,'grade163_greenNumbers');
        _this.divQuestOneNum11.frame=8;
        _this.divQuestOneNum11.scale.setTo(1,1);
        _this.divQuestOneNum1.fontSize = 1.35;
_this.divQuestOneNum2 = _this.add.sprite(705,388.5,'grade163_greenNumbers');
        _this.divQuestOneNum2.frame=2;
        _this.divQuestOneNum2.scale.setTo(1,1);
        _this.divQuestOneNum2.fontSize = 1.35;
        _this.divideSymbol = _this.add.sprite(675,383,'divide163');
        _this.divideSymbol.frame=2;
        _this.divideSymbol.scale.setTo(1,1);
        _this.equalSymbol1 = _this.add.sprite(740,389.5,'divide163');
        _this.equalSymbol1.frame=1;
        _this.equalSymbol1.scale.setTo(0.8,0.8);
            

                                        // _this.ansBox.events.onInputDown.add(_this.wrongTick,_this);

        _this.Eggbox1.inputEnabled = true;
             _this.Eggbox1.input.useHandCursor = true;
            // _this.Eggbox1.events.onInputDown.add(_this.eggClicked,_this);
 
_this.Eggbox1.name="Eggbox1";

_this.Eggbox1.events.onInputDown.add(function()
        {
     
             _this.eggClicked10(_this.Eggbox1);
        },_this);

     _this.Eggbox2.inputEnabled = true;
             _this.Eggbox2.input.useHandCursor = true;
_this.Eggbox2.events.onInputDown.add(function()
        {
            _this.eggClicked10(_this.Eggbox2);
        },_this);

             _this.Eggbox2.name="Eggbox2";
        _this.Eggbox3.inputEnabled = true;
             _this.Eggbox3.input.useHandCursor = true;
             _this.Eggbox3.events.onInputDown.add(_this.eggClicked10,_this);

                          _this.Eggbox3.name="Eggbox3";

        _this.Eggbox4.inputEnabled = true;
             _this.Eggbox4.input.useHandCursor = true;
             _this.Eggbox4.events.onInputDown.add(_this.eggClicked10,_this);

                                       _this.Eggbox4.name="Eggbox4";

        _this.Eggbox5.inputEnabled = true;
             _this.Eggbox5.input.useHandCursor = true;
             _this.Eggbox5.events.onInputDown.add(_this.eggClicked10,_this);

                                       _this.Eggbox5.name="Eggbox5";

       _this.Eggbox6.inputEnabled = true;
             _this.Eggbox6.input.useHandCursor = true;
             _this.Eggbox6.events.onInputDown.add(_this.eggClicked10,_this);

                                       _this.Eggbox6.name="Eggbox6";

       _this.Eggbox7.inputEnabled = true;
             _this.Eggbox7.input.useHandCursor = true;
             _this.Eggbox7.events.onInputDown.add(_this.eggClicked10,_this);
       
                                 _this.Eggbox7.name="Eggbox7";

_this.Eggbox8.inputEnabled = true;
             _this.Eggbox8.input.useHandCursor = true;
             _this.Eggbox8.events.onInputDown.add(_this.eggClicked10,_this);
       
                                 _this.Eggbox8.name="Eggbox8";

_this.Eggbox9.inputEnabled = true;
             _this.Eggbox9.input.useHandCursor = true;
             _this.Eggbox9.events.onInputDown.add(_this.eggClicked10,_this);
       
                                 _this.Eggbox9.name="Eggbox9";

            _this.rightAns=9;


     }, 
      
  checkOverlap:function(spriteA, spriteB) 
{
//console.log("checkOverlap");
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
////console.log("checkOverlap----------------"+Phaser.Rectangle.intersects(boundsA, boundsB));
return true;
   // return Phaser.Rectangle.intersects(boundsA, boundsB);
},
    addNumberPad:function(){
//_this.z+=1;  
////console.log("z="+_this.z);      //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
if(_this.numGroup)
  _this.numGroup.destroy();
        _this.numBackground = this.add.sprite(480,505,'Level163_numBG');    
            _this.numBackground.anchor.setTo(0.5);
        _this.numGroup = _this.add.group();
        _this.numGroup.add(_this.numBackground);
        //objGroup = this.add.group();
        _this.x = 120;
        for(var i=2;i<11;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,505,'grade163_numberbox1');  
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.anchor.setTo(0.5);
                     //_this.numGroup.visible=false;

            if(i<11)
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
  
 _this.eraser = _this.numGroup.create(_this.x+30,507,'grade163_eraser');
        _this.eraser.anchor.setTo(0.5);
      // _this.eraser.scale.setTo(0.5);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(_this.x+90,507,'grade163_tick');
        _this.rightbtn.anchor.setTo(0.5);
              // _this.rightbtn.scale.setTo(0.5);

        _this.rightbtn.name = "rightbtn";
        //_this.rightbtn.name = "eraser";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
         _this.numGroup.y = 50;
            _this.tween = _this.add.tween(_this.numGroup);
            _this.tween.to({ y: 0 }, 0, 'Linear', true, 0); 
_this.eraser.events.onInputDown.add(function(){
             //_this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
     _this.eraser.frame =1;
      setTimeout(function(){ _this.eraser.frame = 0;
          }, 200);


                if(_this.numBox1Pressed){
                    _this.numBoxNum1.visible = false;

                }
              if(_this.numBox2Pressed){
                    _this.numBoxNum2.visible = false;

                }
         },this);
        
         _this.rightbtn.events.onInputDown.add(function(target){
            //_this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
_this.rightbtn.frame =1;
      setTimeout(function(){ _this.rightbtn.frame = 0;
          }, 200);
      
            _this.noofAttempts++;

            
             //console.log("selected Answer "+ _this.selectedAns);
            if( _this.selectedAns1== _this.rightAns)  
                {

                   if(_this.timer)
                     {
                          _this.timer.stop();
                          _this.timer = null;
                     }

                     telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                    //console.log("correct");
                                                    //      RI.telemetryService.assess(_this.assesStartEvent,{"pass": true,"score": 1,"res": [],"mmc": [],"qindex": _this.sceneCount,"mc": [],"qtitle": "title","qdesc": ""});

                    target.events.onInputDown.removeAll();
                    
                    //_this.celebr = _this.add.audio('celebr');
                    _this.celebrationSound.play();
                     _this.starAnim =  _this.starsGroup.getChildAt(_this.count1);
                   
                     _this.starAnim.smoothed = false;
                     _this.anim4 = _this.starAnim.animations.add('star');
                     _this.anim4.play();
                     _this.count1++;

                      _this.tween1 = _this.add.tween(_this.numGroup);

                    _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                           _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);
                }
            else
                { 

                                                          //        RI.telemetryService.assess(_this.assesStartEvent,{"pass": false,"score": 0,"res": [],"mmc": [],"qindex": _this.sceneCount,"mc": [],"qtitle": "title","qdesc": ""});

 //_this.waudio = _this.add.audio('waudio');
                    _this.wrongSound.play();
                     _this.numBoxNum1.visible = false;
                                          _this.numBoxNum2.visible = false;
                                          _this.ansBox.frame=1;
                                          _this.numBox1Pressed=true;
                                         // _this.numBox2Pressed=false;

                  }
        },this);
       
      
    },
    
     numClicked:function(target)
     {
         
           ////console.log(target.name);
         //_this.clickSound = _this.add.audio('ClickSound');
         _this.clickSound.play();
         
if(_this.numBox1Pressed){
  
          _this.numBoxNum1.visible = true;
                    _this.numBoxNum2.visible = false;

             _this.selectedAns1 = target.name-2;
             _this.numBoxNum1.frame = target.name-2;
//console.log("_this.selectedAns1"+_this.selectedAns1);



//_this.box2.frame = 1;
          //  _this.numBox1Pressed = false;


             //console.log("numbo1pressed");
            //console.log("selectedAns1"+_this.selectedAns1);

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
   
    removeEverthing:function() 
    {
//console.log("npppppppp")

         _this.no1++;
        //console.log("--------------------------"+ _this.no1);
        if( _this.no1<6)
        {
            // _this.no1++;
                              
              _this.wrong = true;
            //////console.log("here its");
             _this.timer1.stop();
                _this.count =0;
                _this.ansBox.frame = 0;
                _this.numGroup.destroy();
                _this.numBoxNum1.visible=false;
                _this.mulQuestOneNum1.destroy();
        _this.mulQuestOneNum2.destroy();

         _this.multiplySymbol.destroy();
         _this.equalSymbol.destroy();
                  _this.equalSymbol1.destroy();

        _this.mulAns.destroy();
        if(_this.mulAns1)
          _this.mulAns1.destroy();
         if(_this.divQuestOneNum11)
          _this.divQuestOneNum11.destroy();
        _this.divQuestOneNum1.destroy();
         _this.divQuestOneNum2.destroy();
        _this.divideSymbol.destroy();
       _this.equalSymbol.destroy();
     if(_this.noOfBasket==7){
_this.basket1.destroy();
_this.basket2.destroy();
_this.basket3.destroy();
_this.basket4.destroy();
_this.basket5.destroy();
_this.basket6.destroy();
_this.basket7.destroy();
_this.basket.destroy();
}

 if(_this.noOfBasket==6){
_this.basket1.destroy();
_this.basket2.destroy();
_this.basket3.destroy();
_this.basket4.destroy();
_this.basket5.destroy();
_this.basket6.destroy();
_this.basket.destroy();
}
 if(_this.noOfBasket==8){
_this.basket1.destroy();
_this.basket2.destroy();
_this.basket3.destroy();
_this.basket4.destroy();
_this.basket5.destroy();
_this.basket6.destroy();
_this.basket7.destroy();
_this.basket8.destroy();

_this.basket.destroy();
}


if(_this.noOfBasket==9){
_this.basket1.destroy();
_this.basket2.destroy();
_this.basket3.destroy();
_this.basket4.destroy();
_this.basket5.destroy();
_this.basket6.destroy();
_this.basket7.destroy();
_this.basket8.destroy();
_this.basket9.destroy();
_this.basket.destroy();

}
if(_this.noOfBasket==1){
_this.basket1.destroy();
_this.basket.destroy();

}
 if(_this.noOfBasket==2){
_this.basket1.destroy();
_this.basket2.destroy();
_this.basket.destroy();

}
if(_this.noOfBasket==3){
_this.basket1.destroy();
_this.basket2.destroy();
_this.basket3.destroy();
_this.basket.destroy();

}
if(_this.noOfBasket==4){
_this.basket1.destroy();
_this.basket2.destroy();
_this.basket3.destroy();
_this.basket4.destroy();
_this.basket.destroy();

}
if(_this.noOfBasket==5){
_this.basket1.destroy();
_this.basket2.destroy();
_this.basket3.destroy();
_this.basket4.destroy();
_this.basket5.destroy();
_this.basket.destroy();

}
    
    if(_this.Eggbox1)
          _this.Eggbox1.destroy();
        if(_this.Eggbox2)
          _this.Eggbox2.destroy();
        if(_this.Eggbox3)
          _this.Eggbox3.destroy();
        if(_this.Eggbox4)
          _this.Eggbox4.destroy();
        if(_this.Eggbox5)
          _this.Eggbox5.destroy();
        if(_this.Eggbox6)
          _this.Eggbox6.destroy();
        if(_this.Eggbox7)
          _this.Eggbox7.destroy();
        if(_this.Eggbox8)
          _this.Eggbox8.destroy();
        if(_this.Eggbox9)
          _this.Eggbox9.destroy();
           _this.getQuestion();
        }
        else
        {
             _this.timer1.stop();
            _this.timer1 = null; 
            _this.counterForTimer = null;
             _this.stopVoice();
            _this.state.start('unity16_3Score');
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
  },
    update:function(){

    },
      shutdown:function()
        {
            _this.stopVoice();
           // RI.gotoEndPage();
        }
};