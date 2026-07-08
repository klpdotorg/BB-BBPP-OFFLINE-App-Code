Game.division_NODG_1_2level1=function(){};


Game.division_NODG_1_2level1.prototype={


	init:function(param,score)
	{
		_this = this;
		this.Stararr = param;
        this.score = score;
		if(window.quizQuest == false)
			this.score =parseInt(window.score);
		

		telInitializer2.gameIdInit2("NODG1.2");
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

		_this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'grade161_bg1');
		commonNavBar.addNavBar(this,null,"numberoperation4");
		commonNavBar.addTimerToTheGame(this,0,0,0);
		commonNavBar.startTimer(this);
		commonNavBar.addScore(this,this.score);
		this.hintparams=['NODG1.2','level1',false,false,true,1];
		commonNavBar.addHint(this,this.hintparams);


		_this.lev=1;
		this.Stararr = [];
		hintparams=[];
		_this.amplify = null;
		_this.z=0;
		_this.y=740;
		_this.NoOfRabbit = -1;
		_this.YellowAnimInc = 0;
		_this.GreenAnimInc = 0;
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
		_this.w = 8;
		_this.z = 0;
		_this.wrong = true;
		_this.displayNopad = false;
		_this.toCheckNumberPad = false;
		_this.no1=0;
		_this.qArrays = [1,2,3,4,5,6,7,8,9,10];
		_this.checkNumber1 = 0
		_this.checkNumber2 = 0
		_this.blueLevelEnable = false;
		_this.animArraylength = 9;
		_this.qArrays = _this.shuffle( _this.qArrays);
		_this.count=0;
		_this.count1=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add( _this.shake);
		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();
				/*_this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'grade161_bg1');
				_this.navBar = _this.add.sprite(0,0,'grade161_TopBar');
				_this.navBar.scale.setTo(1,1);
				_this.timebg = _this.add.sprite(300,5,'grade161_timebg');
				*/_this.questBox = _this.add.sprite(100,50,'grade16_1_Box');
				_this.questBox.scale.setTo(0.8,0.9);
				_this.box1 = _this.add.sprite(890,355,'grade161_box1');
				_this.box1.scale.setTo(1.15,1.15);
				_this.box1.frame  = 0;
				_this.box1.anchor.setTo(0.5);
				/*_this.timeDisplay = _this.add.text(325,20, _this.minutes + ' : '+  _this.seconds);
						 _this.timeDisplay.anchor.setTo(0.5);
						 _this.timeDisplay.align = 'center';
						 _this.timeDisplay.font = 'myfont';
						_this.timeDisplay.fontWeight = 'normal';
						 _this.timeDisplay.fontSize = 20;
						//text.fontWeight = 'bold';
						 _this.timeDisplay.fill = '#ADFF2F';
				 
			 
			 _this.backbtn = _this.add.sprite(5,5,'grade11_backbtn');
				_this.backbtn.inputEnabled = true;
				_this.backbtn.events.onInputDown.add(function()
				{
						_this.backbtn.events.onInputDown.removeAll();
						_this.stopVoice();
						
						_this.clickSound = _this.add.audio('ClickSound');
						_this.clickSound.play();

						if(gradeSelected == 1)
							_this.state.start('grade1levelSelectionScreen',true,false); 
						else if(gradeSelected == 2)
							_this.state.start('grade2levelSelectionScreen',true,false); 
						else
							_this.state.start('grade3levelSelectionScreen',true,false); 
				},_this);
				*/
			/* _this.speakerbtn = _this.add.sprite(600,5,'Level42A_CommonSpeakerBtn');
				_this.speakerbtn.events.onInputDown.add(function()
				{
						
					 _this.clickSound = _this.add.audio('ClickSound');
					 _this.clickSound.play();
						
						_this.getVoice();
						
				},_this);
				
				*/ 

				_this.numBoxNum1 = _this.add.sprite(865,320,'grade161_greenNumbers');
				_this.numBox1Pressed = true;
				//_this.numBoxNum1.frame  = 1;
				_this.numBoxNum1.visible = false;
				_this.dblDigit=0;
				_this.generateStarsForTheScene(game,9);
				 // _this.no1++;
			 // _this.getVoice(); 

			 _this.getQuestion();
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
		{  ////console.log("get Question "+_this.no1);
			 /* _this.timer = _this.time.create(false);
				 _this.displayNopad = true;
				 _this.toCheckNumberPad = true;
					//  Set a TimerEvent to occur after 2 seconds
					_this.timer.loop(1000, function(){
							 _this.AnsTimerCount++;
					}, this);
					//  Start the timer running - this is important!
					//  It won't start automatically, allowing you to hook it to button events and the like.
					_this.timer.start();*/

					/**************************************************************************/ 
			 /* _this.timer1 = _this.time.create(false);
					_this.timer1.loop(1000, function(){
									_this.updateTimer();
					}, _this);
					_this.timer1.start();*/
					/**************************************************************************/ 

			 /* _this.speakerbtn.inputEnabled=true;
				_this.speakerbtn.input.useHandCursor = true;
			 */ //////console.log(" _this.no1"+ _this.no1);
				// _this.no1 = 1;
		 ////console.log("Q "+_this.qArrays[_this.no1]);
		 commonNavBar.enableHintIcon();
		 switch( _this.qArrays[ _this.no1]) 
		 // switch(1) 
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
		 _this.questionid = 1;
		 telInitializer2.gameQuestionStart(this,_this.questionid);
		},

		rabbitFirst:function(){
			
			if(_this.NoOfRabbit==_this.selectedAns)
			{
				_this.rabbitBegin.kill();
				_this.cloudBegin.destroy();
			}
			else{
				_this.rabbitBegin = _this.add.sprite(50,290,'grade16_1_RabitAnim');
				_this.rabbitBegin.scale.setTo(0.6,0.6);
				_this.rabbitBegin.animations.add('grade16_1_RabitAnim');
				_this.rabbitBegin.animations.play('grade16_1_RabitAnim',5,true);

				_this.cloudBegin = _this.add.sprite(100,120,'grade16_1_thinkingCloud');
				_this.cloudBegin.animations.add('grade16_1_thinkingCloud',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]);
				_this.cloudBegin.animations.play('grade16_1_thinkingCloud',50);

				_this.carrotInsidecloud();

				_this.carrot.inputEnabled = true;
				_this.carrot.input.useHandCursor = true;
				_this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
				_this.count = 1;

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
	

	gotoFirstQuestion:function(){

		_this.getVoice();

		_this.y=740;
		_this.carrotBackGroup = _this.add.group();
		_this.x = 470;
		_this.x1 = 20;
		_this.x2 = -440;
		for(var i=0;i<8;i++)
		{
			if(i<7){

				_this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade16_1_carrot');  
				_this.carrot.scale.setTo(0.5,0.5);
				_this.carrot.anchor.setTo(0.5);
			}
			if(i>=7 && i<13)
			{
				_this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade16_1_carrot');  
				_this.carrot.scale.setTo(0.5,0.5);
				_this.carrot.anchor.setTo(0.5);
			}
			if(i>=13 && i<20)
			{
				_this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade16_1_carrot');  
				_this.carrot.scale.setTo(0.5,0.5);
				_this.carrot.anchor.setTo(0.5);
			}

			_this.x+=70;
			_this.x1+=70;
			_this.x2+=70;

		}

		_this.questOneNum1 = _this.add.sprite(112,48.5,'grade161_greenNumbers');
		_this.questOneNum1.frame=7;
		_this.questOneNum1.fontSize = 29;
									 // _this.q1 = _this.add.audio('q1');
										//_this.q1.play();


										_this.dblDigit=0;

										_this.questOneNum2 = _this.add.sprite(209,48.5,'grade161_greenNumbers');
										_this.questOneNum2.frame=1;
										_this.questOneNum2.fontSize = 29;
										_this.divideSymbol = _this.add.sprite(141,48.5,'grade161_divide');
										_this.divideSymbol.fontSize = 15;

										_this.rabbitFirst();

										_this.carrotGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<8;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;
											_this.carrot.frame = 1;

											_this.carrot.inputEnabled = true;
											_this.carrot.input.useHandCursor = true;
											_this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
				}//console.log("/////////////////////////////////////////////////");
				_this.CarrotCount = 2;
				_this.m = 0;
				_this.checkCount = 2;
				_this.count = 1;
				_this.NoOfRabbit=0;
				_this.selectedAns=4;
			}, 
			gotoSecondQuestion:function(){
				_this.getVoice();

				_this.y=740;
				_this.carrotBackGroup = _this.add.group();
				_this.x = 470;
				_this.x1 = 20;
				_this.x2 = -440;
				for(var i=0;i<6;i++)
				{
					if(i<7){

						_this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade16_1_carrot');  
						_this.carrot.scale.setTo(0.5,0.5);
						_this.carrot.anchor.setTo(0.5);
					}
					if(i>=7 && i<13)
					{
						_this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade16_1_carrot');  
						_this.carrot.scale.setTo(0.5,0.5);
						_this.carrot.anchor.setTo(0.5);
					}
					if(i>=13 && i<20)
					{
						_this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade16_1_carrot');  
						_this.carrot.scale.setTo(0.5,0.5);
						_this.carrot.anchor.setTo(0.5);
					}

					_this.x+=70;
					_this.x1+=70;
					_this.x2+=70;

				}

				_this.questOneNum1 = _this.add.sprite(112,48.5,'grade161_greenNumbers');
				_this.questOneNum1.frame=5;
				_this.questOneNum1.fontSize = 29;
				_this.dblDigit=0;

				_this.questOneNum2 = _this.add.sprite(209,48.5,'grade161_greenNumbers');
				_this.questOneNum2.frame=2;
				_this.questOneNum2.fontSize = 29;
				_this.divideSymbol = _this.add.sprite(141,48.5,'grade161_divide');
				_this.divideSymbol.fontSize = 15;
				_this.rabbitFirst();

				_this.carrotGroup = _this.add.group();
				_this.x = 470;
				_this.x1 = 20;
				_this.x2 = -440;
				for(var i=0;i<6;i++)
				{
					if(i<6){

						_this.carrot = _this.carrotGroup.create(_this.x,100,'grade16_1_carrot');  
						_this.carrot.scale.setTo(0.5,0.5);
						_this.carrot.anchor.setTo(0.5);
					}
					_this.x+=70;
					_this.x1+=70;
					_this.x2+=70;
					_this.carrot.frame = 1;

					_this.carrot.inputEnabled = true;
					_this.carrot.input.useHandCursor = true;
					_this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
					_this.CarrotCount = 3;
					_this.m = 0;
					_this.checkCount = 3;
					_this.count = 1;
					_this.NoOfRabbit=0;
					_this.selectedAns=2;
				}

			}, 
			gotoThirdQuestion:function(){
				_this.getVoice();       
				_this.y=740;
				_this.carrotBackGroup = _this.add.group();
				_this.x = 470;
				_this.x1 = 20;
				_this.x2 = -440;
				for(var i=0;i<15;i++)
				{
					if(i<7){

						_this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade16_1_carrot');  
						_this.carrot.scale.setTo(0.5,0.5);
						_this.carrot.anchor.setTo(0.5);
					}
					if(i>=7 && i<13)
					{
						_this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade16_1_carrot');  
						_this.carrot.scale.setTo(0.5,0.5);
						_this.carrot.anchor.setTo(0.5);
					}
					if(i>=13 && i<20)
					{
						_this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade16_1_carrot');  
						_this.carrot.scale.setTo(0.5,0.5);
						_this.carrot.anchor.setTo(0.5);
					}

					_this.x+=70;
					_this.x1+=70;
					_this.x2+=70;

				}


				_this.questOneNum1 = _this.add.group();
				_this.questOne = _this.add.sprite(100,48.5,'grade161_greenNumbers');
				_this.questOne.frame=0;
				_this.questOne.fontSize = 26;
				_this.questOneNum1.add(_this.questOne);

				_this.questOneNum11 = _this.add.sprite(120,48.5,'grade161_greenNumbers');
				_this.questOneNum11.frame=4;
				_this.questOneNum11.fontSize = 26;

				_this.questOneNum1.add(_this.questOneNum11);
				_this.dblDigit=1;

									 /* _this.q1 = _this.add.audio('q1');
										_this.q1.play();
										*/
										_this.questOneNum2 = _this.add.sprite(209,48.5,'grade161_greenNumbers');
										_this.questOneNum2.frame=4;
										_this.questOneNum2.fontSize = 29;
										_this.divideSymbol = _this.add.sprite(145,48.5,'grade161_divide');
										_this.divideSymbol.fontSize = 15;

										_this.rabbitFirst();

										_this.carrotGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<15;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;
											_this.carrot.frame = 1;

											_this.carrot.inputEnabled = true;
											_this.carrot.input.useHandCursor = true;
											_this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
											_this.CarrotCount = 5;
											_this.m = 0;
											_this.checkCount = 5;
											_this.count = 1;
											_this.NoOfRabbit=0;
											_this.selectedAns=3;
										}

									}, 

									gotoFourthQuestion:function(){
										_this.getVoice();   
										_this.y=740;
										_this.carrotBackGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<12;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;

										}

										_this.questOneNum1 = _this.add.group();
										_this.questOne = _this.add.sprite(100,48.5,'grade161_greenNumbers');
										_this.questOne.frame=0;
										_this.questOne.fontSize = 26;
										_this.questOneNum1.add(_this.questOne);

										_this.questOneNum11 = _this.add.sprite(120,48.5,'grade161_greenNumbers');
										_this.questOneNum11.frame=1;
										_this.questOneNum11.fontSize = 26;

										_this.questOneNum1.add(_this.questOneNum11);
										_this.dblDigit=1;

									 /* _this.q1 = _this.add.audio('q1');
										_this.q1.play();
										*/
										_this.questOneNum2 = _this.add.sprite(209,48.5,'grade161_greenNumbers');
										_this.questOneNum2.frame=3;
										_this.questOneNum2.fontSize = 29;
										_this.divideSymbol = _this.add.sprite(145,48.5,'grade161_divide');
										_this.divideSymbol.fontSize = 15;

										_this.rabbitFirst();

										_this.carrotGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<12;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;
											_this.carrot.frame = 1;

											_this.carrot.inputEnabled = true;
											_this.carrot.input.useHandCursor = true;
											_this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
											_this.CarrotCount = 4;
											_this.m = 0;
											_this.checkCount = 4;
											_this.count = 1;
											_this.NoOfRabbit=0;
											_this.selectedAns=3;
										}

									}, 

									gotoFifthQuestion:function(){
										_this.getVoice();
										_this.y=740;

										_this.carrotBackGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<18;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;

										}

										_this.questOneNum1 = _this.add.group();
										_this.questOne = _this.add.sprite(100,48.5,'grade161_greenNumbers');
										_this.questOne.frame=0;
										_this.questOne.fontSize = 26;
										_this.questOneNum1.add(_this.questOne);

										_this.questOneNum11 = _this.add.sprite(120,48.5,'grade161_greenNumbers');
										_this.questOneNum11.frame=7;
										_this.questOneNum11.fontSize = 26;

										_this.questOneNum1.add(_this.questOneNum11);
										_this.dblDigit=1;

									 /* _this.q1 = _this.add.audio('q1');
										_this.q1.play();
										*/
										_this.questOneNum2 = _this.add.sprite(209,48.5,'grade161_greenNumbers');
										_this.questOneNum2.frame=5;
										_this.questOneNum2.fontSize = 29;
										_this.divideSymbol = _this.add.sprite(145,48.5,'grade161_divide');
										_this.divideSymbol.fontSize = 15;

										_this.rabbitFirst();

										_this.carrotGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<18;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;
											_this.carrot.frame = 1;

											_this.carrot.inputEnabled = true;
											_this.carrot.input.useHandCursor = true;
											_this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
											_this.CarrotCount = 6;
											_this.m = 0;
											_this.checkCount = 6;
											_this.count = 1;
											_this.NoOfRabbit=0;
											_this.selectedAns=3;
										}

									}, 

									gotoSixthQuestion:function(){

										_this.getVoice();
										_this.y=740;
										_this.carrotBackGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<4;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;

										}

										_this.questOneNum1 = _this.add.sprite(112,48.5,'grade161_greenNumbers');
										_this.questOneNum1.frame=3;
										_this.questOneNum1.fontSize = 29;
										_this.dblDigit=0;

										/*_this.questOneNum11 = _this.add.sprite(125,48.5,'grade161_greenNumbers');
										_this.questOneNum11.frame=4;
										_this.questOneNum11.fontSize = 35;*/
									/*  _this.q1 = _this.add.audio('q1');
										_this.q1.play();
										*/
										_this.questOneNum2 = _this.add.sprite(209,48.5,'grade161_greenNumbers');
										_this.questOneNum2.frame=1;
										_this.questOneNum2.fontSize = 29;
										_this.divideSymbol = _this.add.sprite(141,48.5,'grade161_divide');
										_this.divideSymbol.fontSize = 15;

										_this.rabbitFirst();

										_this.carrotGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<4;i++)
										{
											if(i<6){

												_this.carrot = _this.carrotGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;
											_this.carrot.frame = 1;

											_this.carrot.inputEnabled = true;
											_this.carrot.input.useHandCursor = true;
											_this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
											_this.CarrotCount = 2;
											_this.m = 0;
											_this.checkCount = 2;
											_this.count = 1;
											_this.NoOfRabbit=0;
											_this.selectedAns=2;
										}

									}, 

									gotoSeventhQuestion:function(){
										_this.y=740;
										_this.getVoice();    
										_this.carrotBackGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<9;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;

										}

										_this.questOneNum1 = _this.add.sprite(112,48.5,'grade161_greenNumbers');
										_this.questOneNum1.frame=8;
										_this.questOneNum1.fontSize = 29;
										_this.dblDigit=0;

										/*_this.questOneNum11 = _this.add.sprite(125,48.5,'grade161_greenNumbers');
										_this.questOneNum11.frame=4;
										_this.questOneNum11.fontSize = 35;
										_this.q1 = _this.add.audio('q1');
										_this.q1.play();
										*/
										_this.questOneNum2 = _this.add.sprite(209,48.5,'grade161_greenNumbers');
										_this.questOneNum2.frame=2;
										_this.questOneNum2.fontSize = 29;
										_this.divideSymbol = _this.add.sprite(141,48.5,'grade161_divide');
										_this.divideSymbol.fontSize = 15;

										_this.rabbitFirst();

										_this.carrotGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<9;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;
											_this.carrot.frame = 1;

											_this.carrot.inputEnabled = true;
											_this.carrot.input.useHandCursor = true;
											_this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
											_this.CarrotCount = 3;
											_this.m = 0;
											_this.checkCount = 3;
											_this.count = 1;
											_this.NoOfRabbit=0;
											_this.selectedAns=3;
										}

									}, 

									gotoEighthQuestion:function(){
										_this.getVoice();     
										_this.y = 740;

										_this.carrotBackGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<12;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;

										}

										_this.questOneNum1 = _this.add.group();
										_this.questOne = _this.add.sprite(100,48.5,'grade161_greenNumbers');
										_this.questOne.frame=0;
										_this.questOne.fontSize = 26;
										_this.questOneNum1.add(_this.questOne);

										_this.questOneNum11 = _this.add.sprite(120,48.5,'grade161_greenNumbers');
										_this.questOneNum11.frame=1;
										_this.questOneNum11.fontSize = 26;

										_this.questOneNum1.add(_this.questOneNum11);
										_this.dblDigit=1;

									 /* _this.q1 = _this.add.audio('q1');
										_this.q1.play();
										*/
										_this.questOneNum2 = _this.add.sprite(209,48.5,'grade161_greenNumbers');
										_this.questOneNum2.frame=1;
										_this.questOneNum2.fontSize = 26;
										_this.divideSymbol = _this.add.sprite(145,48.5,'grade161_divide');
										_this.divideSymbol.fontSize = 15;

										_this.rabbitFirst();

										_this.carrotGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<12;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;
											_this.carrot.frame = 1;

											_this.carrot.inputEnabled = true;
											_this.carrot.input.useHandCursor = true;
											_this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
											_this.CarrotCount = 2;
											_this.m = 0;
											_this.checkCount = 2;
											_this.count = 1;
											_this.NoOfRabbit=0;
											_this.selectedAns=6;
										}

									}, 

									gotoNinthQuestion:function(){
										_this.getVoice();
										_this.y = 740;

										_this.carrotBackGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<16;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;

										}

										_this.questOneNum1 = _this.add.sprite(100,48.5,'grade161_greenNumbers');
										_this.questOneNum1.frame=0;
										_this.questOneNum1.fontSize = 26;

										_this.questOneNum11 = _this.add.sprite(120,48.5,'grade161_greenNumbers');
										_this.questOneNum11.frame=5;
										_this.questOneNum11.fontSize = 26;
										_this.dblDigit=1;

									 /* _this.q1 = _this.add.audio('q1');
										_this.q1.play();
										*/
										_this.questOneNum2 = _this.add.sprite(209,48.5,'grade161_greenNumbers');
										_this.questOneNum2.frame=3;
										_this.questOneNum2.fontSize = 26;
										_this.divideSymbol = _this.add.sprite(145,48.5,'grade161_divide');
										_this.divideSymbol.fontSize = 15;

										_this.rabbitFirst();

										_this.carrotGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<16;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;
											_this.carrot.frame = 1;

											_this.carrot.inputEnabled = true;
											_this.carrot.input.useHandCursor = true;
											_this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
											_this.CarrotCount = 4;
											_this.m = 0;
											_this.checkCount = 4;
											_this.count = 1;
											_this.NoOfRabbit=0;
											_this.selectedAns=4;
										}

									}, 

									gotoTenthQuestion:function(){

										_this.getVoice(); 
										_this.y=740;
										_this.carrotBackGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<3;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;

										}

										_this.questOneNum1 = _this.add.sprite(112,48.5,'grade161_greenNumbers');
										_this.questOneNum1.frame=2;
										_this.questOneNum1.fontSize = 29;
				//_this.dblDigit=1;

										/*_this.questOneNum11 = _this.add.sprite(125,48.5,'grade161_greenNumbers');
										_this.questOneNum11.frame=4;
										_this.questOneNum11.fontSize = 35;
										_this.q1 = _this.add.audio('q1');
										_this.q1.play();*/

										_this.questOneNum2 = _this.add.sprite(209,48.5,'grade161_greenNumbers');
										_this.questOneNum2.frame=0;
										_this.questOneNum2.fontSize = 29;
										_this.divideSymbol = _this.add.sprite(141,48.5,'grade161_divide');
										_this.divideSymbol.fontSize = 15;

										_this.rabbitFirst();

										_this.carrotGroup = _this.add.group();
										_this.x = 470;
										_this.x1 = 20;
										_this.x2 = -440;
										for(var i=0;i<3;i++)
										{
											if(i<7){

												_this.carrot = _this.carrotGroup.create(_this.x,100,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=7 && i<13)
											{
												_this.carrot = _this.carrotGroup.create(_this.x1,180,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}
											if(i>=13 && i<20)
											{
												_this.carrot = _this.carrotGroup.create(_this.x2,260,'grade16_1_carrot');  
												_this.carrot.scale.setTo(0.5,0.5);
												_this.carrot.anchor.setTo(0.5);
											}

											_this.x+=70;
											_this.x1+=70;
											_this.x2+=70;
											_this.carrot.frame = 1;

											_this.carrot.inputEnabled = true;
											_this.carrot.input.useHandCursor = true;
											_this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
											_this.CarrotCount = 1;
											_this.m = 0;
											_this.checkCount = 1;
											_this.count = 1;
											_this.NoOfRabbit=0;
											_this.selectedAns=3;
										}

									}, 
									carrotInsidecloud:function()
									{
										_this.carrotCloudGroup = _this.add.group();
										_this.x = 170;
										_this.x1 = 10;
										_this.x2 = -200;
										for(var i=0;i<9;i++)
										{
											if(i<4){

												_this.carrotC = _this.carrotCloudGroup.create(_this.x,190,'grade16_1_carrot');  
												_this.carrotC.scale.setTo(0.4,0.4);
												_this.carrotC.anchor.setTo(0.5);
											}
											if(i>=4 && i<8)
											{
												_this.carrotC = _this.carrotCloudGroup.create(_this.x1,260,'grade16_1_carrot');  
												_this.carrotC.scale.setTo(0.4,0.4);
												_this.carrotC.anchor.setTo(0.5);
											}
											if(i>=8 )
											{
												_this.carrotC = _this.carrotCloudGroup.create(_this.x1,230,'grade16_1_carrot');  
												_this.carrotC.scale.setTo(0.4,0.4);
												_this.carrotC.anchor.setTo(0.5);
											}
											_this.x+=40;
											_this.x1+=40;
											_this.x2+=40;
											_this.carrotC.frame = 1;
											_this.carrotC.visible = false;
										}

									},


									carrotClicked1:function(target){

										commonNavBar.playClickSound();

										_this.vx = target.x;   
										_this.vy = target.y; 

										if(_this.count<=_this.CarrotCount){

											target.input.enableDrag(true);

											target.events.onDragStop.add(function(target){

												commonNavBar.playTapSound();

												for(var j =0;j<_this.CarrotCount;j++)
												{
													if(_this.checkOverlap(target,_this.cloudBegin))
													{
														if(_this.carrotCloudGroup.getChildAt(j).visible == false)
														{
															if(_this.checkCount ==_this.count)
															{
																console.log("in");
																setTimeout(function(){ 
																	_this.carrotCloudGroup.getChildAt(0).visible = false; 
																	_this.carrotCloudGroup.getChildAt(1).visible = false; 
																	_this.carrotCloudGroup.getChildAt(2).visible = false; 
																	_this.carrotCloudGroup.getChildAt(3).visible = false; 
																	_this.carrotCloudGroup.getChildAt(4).visible = false; 
																	_this.carrotCloudGroup.getChildAt(5).visible = false; 
																}, 50);
																console.log("rabbit before running");   

																_this.cloudBegin.kill();
																_this.cloudBegin = _this.add.sprite(100,120,'grade16_1_thinkingCloud');
																_this.cloudBegin.animations.add('grade16_1_thinkingCloud',[17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]);
																_this.cloudBegin.animations.play('grade16_1_thinkingCloud',20);    
																commonNavBar.playCarrotBiteSound();   
																setTimeout(function(){ _this.cloudBegin.destroy(); },1000);
																setTimeout(function(){ _this.rabbitFirst(); },1000);
																_this.rabbitBegin.kill();

																_this.grade16_1_Rabitidle = _this.add.sprite(340,370,'grade16_1_Rabitidle');
																_this.grade16_1_Rabitidle.scale.setTo(0.5,0.5);
																_this.grade16_1_Rabitidle.animations.add('grade16_1_Rabitidle',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,12]); 
																_this.grade16_1_Rabitidle.animations.play('grade16_1_Rabitidle',100);  
																_this.grade16_1_Rabitidle.x=50;
																_this.grade16_1_Rabitidle.y=290;
																var M1 = this.add.tween(_this.grade16_1_Rabitidle);
																M1.to({ x:_this.y-100 ,y:290}, 0, 'Linear', true, 0);
																commonNavBar.playRabbitSound();

																setTimeout(function(){ 

																	if(_this.NoOfRabbit==1){

																		_this.rabbitBegin1 = _this.add.sprite(_this.y,290,'grade16_1_RabitAnim');
																		_this.rabbitBegin1.scale.setTo(0.6,0.6);
																		_this.rabbitBegin1.animations.add('grade16_1_RabitAnim');
																		_this.rabbitBegin1.animations.play('grade16_1_RabitAnim',5,true);
																	}

																	if(_this.NoOfRabbit==2){

																		_this.rabbitBegin2 = _this.add.sprite(_this.y,290,'grade16_1_RabitAnim');
																		_this.rabbitBegin2.scale.setTo(0.6,0.6);
																		_this.rabbitBegin2.animations.add('grade16_1_RabitAnim');
																		_this.rabbitBegin2.animations.play('grade16_1_RabitAnim',5,true);
																	}

																	if(_this.NoOfRabbit==3){

																		_this.rabbitBegin3 = _this.add.sprite(_this.y,290,'grade16_1_RabitAnim');
																		_this.rabbitBegin3.scale.setTo(0.6,0.6);
																		_this.rabbitBegin3.animations.add('grade16_1_RabitAnim');
																		_this.rabbitBegin3.animations.play('grade16_1_RabitAnim',5,true);
																	}

																	if(_this.NoOfRabbit==4){

																		_this.rabbitBegin4 = _this.add.sprite(_this.y,290,'grade16_1_RabitAnim');
																		_this.rabbitBegin4.scale.setTo(0.6,0.6);
																		_this.rabbitBegin4.animations.add('grade16_1_RabitAnim');
																		_this.rabbitBegin4.animations.play('grade16_1_RabitAnim',5,true);
																	}

																	if(_this.NoOfRabbit==5){

																		_this.rabbitBegin5 = _this.add.sprite(_this.y,290,'grade16_1_RabitAnim');
																		_this.rabbitBegin5.scale.setTo(0.6,0.6);
																		_this.rabbitBegin5.animations.add('grade16_1_RabitAnim');
																		_this.rabbitBegin5.animations.play('grade16_1_RabitAnim',5,true);
																	}

																	if(_this.NoOfRabbit==6){

																		_this.rabbitBegin6 = _this.add.sprite(_this.y,290,'grade16_1_RabitAnim');
																		_this.rabbitBegin6.scale.setTo(0.6,0.6);
																		_this.rabbitBegin6.animations.add('grade16_1_RabitAnim');
																		_this.rabbitBegin6.animations.play('grade16_1_RabitAnim',5,true);
																	}
																},1000);

																setTimeout(function(){
																	_this.grade16_1_Rabitidle.kill();
																},1000);

																_this.y-=85;
																_this.NoOfRabbit+=1;

																if(_this.NoOfRabbit==_this.selectedAns)
																{ 
																	_this.addNumberPad();
																}

																_this.box1.inputEnabled = true;
																_this.box1.input.useHandCursor = true;
																_this.box1.events.onInputDown.add(function()
																{
																	if(_this.NoOfRabbit==_this.selectedAns){ }
																		else if(_this.NoOfRabbit<_this.selectedAns){
																			commonNavBar.playClickSound();
																			commonNavBar.playWrongCelebrationSound();
																		}
																	},this);


															}
															_this.count++;
															target.visible = false;
															_this.carrotCloudGroup.getChildAt(j).visible = true; 
															break;
														} 
													}            
												}

												target.events.onDragStop.removeAll();
												target.x = _this.vx;
												target.y = _this.vy;  

											},_this);
}
else if(_this.count==_this.CarrotCount){

	target.input.enableDrag(false);

}

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


			 //       _this.timer1.stop();  
			 _this.wrong = false;
			 _this.basketback.visible = false;

			 _this.shake.shake(10,  _this.basket);
			 _this.wmusic = _this.add.audio('waudio');
			 _this.wmusic.play();

			 /* _this.speakerbtn.inputEnabled=true;
				_this.speakerbtn.input.useHandCursor=true;
				*/ _this.w = 8;
				_this.checkMangoes = 0;
				for(var i =0;i<9;i++){
					_this.objectGroup.getChildAt(i).visible = false;
				}

				_this.time.events.add(500, function(){ target.events.onInputDown.removeAll();
					_this.getQuestion();},_this);
			},
			
			checkOverlap:function(spriteA, spriteB) 
			{

				var boundsA = spriteA.getBounds();
				var boundsB = spriteB.getBounds();

				return Phaser.Rectangle.intersects(boundsA, boundsB);

			},
			addNumberPad:function(){
				_this.z+=1;  
//console.log("z="+_this.z);      //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.numBackground = this.add.sprite(480,505,'grade161_numBG');    
_this.numBackground.anchor.setTo(0.5);
_this.numGroup = _this.add.group();
_this.numGroup.add(_this.numBackground);
				//objGroup = this.add.group();
				_this.x = 120;
				for(var i=2;i<11;i++)
				{
					_this.numbg = _this.numGroup.create(_this.x,505,'grade161_numberbox1');  
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

					_this.eraser = _this.numGroup.create(_this.x+30,507,'grade161_eraser');
					_this.eraser.anchor.setTo(0.5);
			// _this.eraser.scale.setTo(0.5);
			_this.eraser.name = "eraser";
			_this.eraser.inputEnabled = true;
			_this.eraser.input.useHandCursor = true;


			_this.rightbtn = _this.numGroup.create(_this.x+90,507,'grade161_tick');
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
					commonNavBar.playClickSound();
					_this.eraser.frame =1;
					setTimeout(function(){ _this.eraser.frame = 0;
					}, 200);


					if(_this.numBox1Pressed){
						_this.numBoxNum1.visible = false;

					}

				},this);
				
				_this.rightbtn.events.onInputDown.add(function(target){
					target.events.onInputDown.removeAll();
					commonNavBar.playClickSound();
					_this.rightbtn.frame =1;
					commonNavBar.disableHintIcon();
					setTimeout(function(){ _this.rightbtn.frame = 0;
					}, 200);




						 //console.log("selected Answer "+ _this.selectedAns);
						 if( _this.selectedAns== _this.selectedAns1)  
						 {
										//console.log("correct");
										telInitializer2.gameCorrectAns();
										_this.box1.frame=1;
										target.events.onInputDown.removeAll();
										
										commonNavBar.playCelebrationSound();
										_this.starAnim =  _this.starsGroup.getChildAt(_this.count1);

										_this.starAnim.smoothed = false;
										_this.anim4 = _this.starAnim.animations.add('star');
										_this.anim4.play(25,false);
										this.Stararr.push(3);
										_this.time.events.add(2000,_this.removeEverthing,_this);

										_this.count1++;

										_this.tween1 = _this.add.tween(_this.numGroup);

										_this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
										{
											commonNavBar.updateScore(+5);
										}					 
									}
									else
									{ 
										telInitializer2.gameWrongAns();
										_this.starsGroup.getChildAt(_this.count1).frame = 1;
										this.Stararr.push(1);
										_this.count1++;
										commonNavBar.playWrongCelebrationSound();
										_this.numBoxNum1.visible = false;
										_this.time.events.add(1000, function(){ _this.removeEverthing();}, _this);

if(window.quizQuest == true)
										{
											commonNavBar.updateScore(-5);
									}
									}
								},this);


			},

			numClicked:function(target)
			{

					 ////console.log(target.name);
					 commonNavBar.playClickSound();


					 if(_this.numBox1Pressed){
					 	_this.numBoxNum1.visible = true;
					 	_this.selectedAns1 = target.name-2;
					 	_this.numBoxNum1.frame = target.name-3;
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
		getVoice:function(){
				////console.log("voice "+ _this.qArrays[ _this.no1]);
						//_this.stopVoice();
					 //console.log(selctedLang);
					/*  _this.playQuestionSound = document.createElement('audio');
			_this.src = document.createElement('source');


			*/ 
			var temp = "";

			if(window.languageSelected == "English")
			{
				temp = window.baseUrl+"questionSounds/16.1/English/";
			}
			else if(window.languageSelected == "Hindi")
			{
				temp =window.baseUrl+"questionSounds/16.1/Hindi/";
			}
			else if(window.languageSelected == "Kannada")
			{
				temp =window.baseUrl+"questionSounds/16.1/Kannada/";
			}
			else if(window.languageSelected == "Gujarati")
			{
				temp =window.baseUrl+"questionSounds/Gujarati/16.1/";
			}
			else if(window.languageSelected=="Marathi")
                            {
                               temp =window.baseUrl+"questionSounds/16.1/Marathi/";
                            }
							else if(window.languageSelected=="Telugu")
                            {
                               temp =window.baseUrl+"questionSounds/16.1/Telugu/";
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                temp =window.baseUrl+"questionSounds/16.1/Tamil/";
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                temp =window.baseUrl+"questionSounds/16.1/Urdu/";
                            }
			else
			{
				temp =window.baseUrl+"questionSounds/16.1/Odiya/";
			}



			switch( _this.qArrays[ _this.no1])
			{


				case 1: commonNavBar.getVoice(temp+"Game16.2.2.mp3");
				this.src = temp+"Game16.2.2.mp3";
				break;
				case 2:commonNavBar.getVoice(temp+"Game16.2.3.mp3");
				this.src = temp+"Game16.2.3.mp3";
				break;
				case 3:commonNavBar.getVoice(temp+"Game16.2.5.mp3");
				this.src = temp+"Game16.2.5.mp3";
				break;
				case 4:commonNavBar.getVoice(temp+"Game16.2.4.mp3");
				this.src = temp+"Game16.2.4.mp3";
				break;
				case 5:commonNavBar.getVoice(temp+"Game16.2.6.mp3");
				this.src = temp+"Game16.2.6.mp3";
				break;
				case 6:commonNavBar.getVoice(temp+"Game16.2.2.mp3");
				this.src = temp+"Game16.2.2.mp3";
				break; 
				case 7:commonNavBar.getVoice(temp+"Game16.2.3.mp3");
				this.src = temp+"Game16.2.3.mp3";
				break;
				case 8:commonNavBar.getVoice(temp+"Game16.2.2.mp3");
				this.src = temp+"Game16.2.2.mp3";
				break;
				case 9:commonNavBar.getVoice(temp+"Game16.2.4.mp3");
				this.src = temp+"Game16.2.4.mp3";
				break;
				case 10:commonNavBar.getVoice(temp+"Game16.2.1.mp3");
				this.src = temp+"Game16.2.1.mp3";
				break;
			}

			commonNavBar.addNavBar(this,this.src,"numberoperation4");
			 /*_this.playQuestionSound.appendChild(_this.src);
				_this.playQuestionSound.play();


			*/  },

			removeEverthing:function() 
			{
				_this.no1++;
				if( _this.no1<4)
				{       
					this.starsGroup.getChildAt(_this.count1).frame = 2; 
					_this.wrong = true;
					_this.count =0;
					_this.box1.frame = 0;
					_this.y=740;
					_this.grade16_1_Rabitidle.destroy();
					if(_this.NoOfRabbit==1)
					{
						_this.rabbitBegin1.destroy();
						_this.numGroup.destroy();
					}
					if(_this.NoOfRabbit==2)
					{
						_this.rabbitBegin1.destroy();
						_this.rabbitBegin2.destroy();
						_this.numGroup.destroy();
					}
					if(_this.NoOfRabbit==3)
					{
						_this.rabbitBegin1.destroy();
						_this.rabbitBegin2.destroy();
						_this.rabbitBegin3.destroy();
						_this.numGroup.destroy();
					}
					if(_this.NoOfRabbit==4)
					{
						_this.rabbitBegin1.destroy();
						_this.rabbitBegin2.destroy();
						_this.rabbitBegin3.destroy();
						_this.rabbitBegin4.destroy();
						_this.numGroup.destroy();
					}
					if(_this.NoOfRabbit==5)
					{
						_this.rabbitBegin1.destroy();
						_this.rabbitBegin2.destroy();
						_this.rabbitBegin3.destroy();
						_this.rabbitBegin4.destroy();
						_this.rabbitBegin5.destroy();
						_this.numGroup.destroy();
					}
					if(_this.NoOfRabbit==6)
					{
						_this.rabbitBegin1.destroy();
						_this.rabbitBegin2.destroy();
						_this.rabbitBegin3.destroy();
						_this.rabbitBegin4.destroy();
						_this.rabbitBegin5.destroy();
						_this.rabbitBegin6.destroy();
						_this.numGroup.destroy();
					}

					_this.questOneNum1.destroy();
					if(_this.questOneNum11)
						_this.questOneNum11.destroy();
					_this.questOneNum2.destroy(); 
					_this.divideSymbol.destroy();
					_this.carrotBackGroup.destroy();
					_this.carrotGroup.destroy();
					_this.numBoxNum1.visible = false;
					_this.selectedAns = " ";
					_this.rabbitBegin.destroy();
					_this.rabbitBegin1.destroy();
					_this.cloudBegin.destroy();
					if(window.quizQuest == true)
				{
						var timerStopVar = commonNavBar.stopTimer();
						commonNavBar.disableNavBar();
						commonNavBar.soundVar=null,
						commonNavBar.questionArray=null,
						commonNavBar.questionCount=null,
						commonNavBar.soundUrl=null,
						commonNavBar.speakerbtn=null,
						
						quizCommonFile.changeQuestions(this.Stararr,commonNavBar.getScore());
					}
					else
					{
						_this.getQuestion();
					}

				}
				else
				{
					var timerStopVar = commonNavBar.stopTimer();
					commonNavBar.stopVoice();

					commonNavBar.navBar = null;
					commonNavBar.backbtn = null;
					commonNavBar.mcIcon = null;
					commonNavBar.speakerbtn = null;
					_this.state.start('division_NODG_1_2level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
				}
			},

			generateStarsForTheScene:function(game,count)
			{
				_this.starsGroup = _this.add.group();

				for (var i = 0; i <  count; i++)
				{

					_this.starsGroup.create(_this.world.centerX, 7, 'cstarAnim');

					for(var j =0;j<i;j++)
					{
						if(_this.starsGroup.getChildAt(j))
						{
							_this.starsGroup.getChildAt(j).x-=10;
							_this.starsGroup.getChildAt(i).x+=10;
						}
					}
				}
				_this.starsGroup.getChildAt(0).frame = 2; 
					if(window.quizQuest == true)
      {
          this.starsGroup.visible = false;
          
          this.quiztext = this.add.text(120,24, "\n"+window.quizText+"\n");
          this.quiztext.anchor.setTo(0.5);
          this.quiztext.align = 'center';
          this.quiztext.font = 'gradefont';
          this.quiztext.fontWeight = 'normal';
          this.quiztext.fontSize = 18;
          this.quiztext.fill = '#ADFF2F';
      }
			},
	/*correctAns:function()
	{
				_this.noofAttempts++;
					
						
					 if(_this.timer)
							 {
										_this.timer.stop();
										_this.timer = null;
							 }
		 //  telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
				
						//target.events.onInputDown.removeAll();
						// _this.stopVoice();
				
								 _this.speakerbtn.inputEnabled=false;
										_this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
									 // //////console.log(starAnim);
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
			},*/
			
			update:function(){

			},


			 /* stopVoice:function(){
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
				*/
				shutdown:function()
				{
						//_this.stopVoice();
					}
				};