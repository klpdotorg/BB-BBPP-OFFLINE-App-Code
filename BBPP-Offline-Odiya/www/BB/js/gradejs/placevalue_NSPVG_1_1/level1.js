Game.placevalue_NSPVG_1_1level1=function(){};


//var cursors;
//var spaceKey;



Game.placevalue_NSPVG_1_1level1.prototype={

    init:function(param,score)
    {
        _this = this;

        _this.gameid = "Game 1.6";

		this.Stararr = param;
		this.score = score;
		if(window.quizQuest == false)
			this.score =parseInt(window.score);
        
        /*_this.currentTime = window.timeSaveFunc();
       _this.saveGameplay = 
       {
          id_game:_this.gameid, 
          access_token:window.acctkn, 
          start_time:_this.currentTime
       } 
       _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        //   telInitializer.gameIdInit("unity1_6",gradeSelected);
        telInitializer2.gameIdInit2("NSPVG1.1");

    },

    preload:function(game){
        if(!window.grade1NSPVG1_1){

            window.grade1NSPVG1_1 = true;

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

        this.load.image('unity16_BG_01', window.baseUrl+'assets/gradeAssets/unity/1.6/BG_01.png');
        this.load.image('unity16_Bubble', window.baseUrl+'assets/gradeAssets/unity/1.6/Bubble.png');
        
        this.load.image('unity16_topic',window.baseUrl+'assets/gradeAssets/unity/1.6/topic.png');
        this.load.image('unity16_practice',window.baseUrl+'assets/gradeAssets/unity/1.6/practice.png');
        
       
        this.load.atlas('unity16_BubbleAni', window.baseUrl+'assets/gradeAssets/unity/1.6/BubbleAni.png', window.baseUrl+'json/gradeJson/unity/1.6/BubbleAni.json');

        this.load.image('unity2_6_1_bg',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_6_1_backg',window.baseUrl+'assets/commonAssets/backg.png');
        this.load.image('unity2_6_1_topbar', window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_6_1_numbg', window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.image('unity2_6_1_tittleBar', window.baseUrl+'assets/commonAssets/tittleBaar.png');
       
        this.load.atlas('unity2_6_1_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.6.1/backbtn.json');
        this.load.atlas('unity2_6_1_speaker',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.6.1/speaker.json');
        this.load.atlas('unity2_6_1_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        

        this.load.image('unity2_6_2_bg',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_6_2_backg',window.baseUrl+'assets/commonAssets/backg.png');
        this.load.image('unity2_6_2_topbar', window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_6_2_numbg', window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.image('unity2_6_2_tittleBar', window.baseUrl+'assets/commonAssets/tittleBaar.png');
       
        this.load.atlas('unity2_6_2_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.6.1/backbtn.json');
        this.load.atlas('unity2_6_2_speaker',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.6.1/speaker.json');
        this.load.atlas('unity2_6_2_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        

        this.load.image('unity2_6_3_bg',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_6_3_backg',window.baseUrl+'assets/commonAssets/backg.png');
        this.load.image('unity2_6_3_topbar', window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_6_3_numbg', window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.image('unity2_6_3_tittleBar', window.baseUrl+'assets/commonAssets/tittleBaar.png');
       
        this.load.atlas('unity2_6_3_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.6.1/backbtn.json');
        this.load.atlas('unity2_6_3_speaker',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.6.1/speaker.json');
        this.load.atlas('unity2_6_3_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        



        this.load.image('unity2_6_1_Base', window.baseUrl+'assets/gradeAssets/2.6.1/Base.png');
        this.load.image('unity2_6_1_Rectangle', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle.png');
        this.load.image('unity2_6_1_Rectangle 2', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle 2.png');
        this.load.atlas('unity2_6_1_box', window.baseUrl+'assets/gradeAssets/2.6.1/box.png', window.baseUrl+'json/gradeJson/2.6.1/box.json');
        
        this.load.atlas('unity2_6_1_glow1',window.baseUrl+'assets/gradeAssets/2.6.1/glow1.png',window.baseUrl+'json/gradeJson/2.6.1/glow1.json');
        
        this.load.atlas('unity2_6_1_rightmark',window.baseUrl+'assets/gradeAssets/2.6.1/rightmark.png',window.baseUrl+'json/gradeJson/2.6.1/rightmark.json');
    
        this.load.image('unity2_6_3_Base', window.baseUrl+'assets/gradeAssets/2.6.1/Base.png');
        this.load.image('unity2_6_3_Rectangle', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle.png');
        this.load.image('unity2_6_3_Rectangle 2', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle 2.png');
        this.load.atlas('unity2_6_3_box', window.baseUrl+'assets/gradeAssets/2.6.1/box.png', window.baseUrl+'json/gradeJson/2.6.1/box.json');
        
        this.load.atlas('unity2_6_3_glow1',window.baseUrl+'assets/gradeAssets/2.6.1/glow1.png',window.baseUrl+'json/gradeJson/2.6.1/glow1.json');
        
        this.load.atlas('unity2_6_3_rightmark',window.baseUrl+'assets/gradeAssets/2.6.1/rightmark.png',window.baseUrl+'json/gradeJson/2.6.1/rightmark.json');

        this.load.image('unity2_6_2_Base', window.baseUrl+'assets/gradeAssets/2.6.1/Base.png');
        this.load.image('unity2_6_2_Rectangle', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle.png');
        this.load.image('unity2_6_2_Rectangle 2', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle 2.png');
        this.load.atlas('unity2_6_2_box', window.baseUrl+'assets/gradeAssets/2.6.1/box.png', window.baseUrl+'json/gradeJson/2.6.1/box.json');
        
        this.load.atlas('unity2_6_2_glow1',window.baseUrl+'assets/gradeAssets/2.6.1/glow1.png',window.baseUrl+'json/gradeJson/2.6.1/glow1.json');
        
        this.load.atlas('unity2_6_2_rightmark',window.baseUrl+'assets/gradeAssets/2.6.1/rightmark.png',window.baseUrl+'json/gradeJson/2.6.1/rightmark.json');
       

    }

    },
    create:function(game){
        this.Stararr = [];
        _this.amplify = null;

        //_this.baudio = _this.add.audio('baudio');
        // _this.baudio.play();
        //_this.baudio.loopFull(1);
        _this.sceneCount = 0;
        _this.noofAttempts;
        _this.timer;
        _this.AnsTimerCount;
        _this.bubbleImage;
        _this.timer1;
        _this.counterForTimer  =0;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.timeDisplay ;
        _this.allowClick = false;

        _this.mainFlag;
        _this.anim5;
        _this.wmusic;
        _this.count;
        _this.clickSound;
        _this.starsGroup;

        _this.noofAttempts=0;
        _this.AnsTimerCount=0;
        _this.bubbleImage = null;
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);
        _this.no11 = 0;
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;

        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9];

        _this.qArrays = _this.shuffle(_this.qArrays);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity16_BG_01');
        _this.soundurl=window.baseUrl+"questionSounds/unity/1.6/English/Game1_6.mp3";
        commonNavBar.addNavBar(game,null,"numbersense4");
        commonNavBar.addTimerToTheGame(game,0,0,0);
        commonNavBar.startTimer(game);
        commonNavBar.addScore(game,this.score);
        _this.generateStarsForTheScene(8);
        _this.getQuestion();

        _this.time.events.repeat(Phaser.Timer.SECOND * 10, 10, this.createBall, _this);

        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        if(window.languageSelected=="English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.6/English/Game1_6.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.6/Hindi/Game1_6.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.6/Kannada/Game1_6.mp3");
        }
		else if(window.languageSelected=="Marathi")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.6/Marathi/Game1_6.mp3");
						}
						else if(window.languageSelected=="Telugu")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.6/Telugu/Game1_6.mp3");
						}
						else if(window.languageSelected=="Tamil")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.6/Tamil/Game1_6.mp3");
						}
						else if(window.languageSelected=="Urdu")
						{
							_this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.6/Urdu/Game1_6.mp3");
						}
        else if(window.languageSelected=="Gujarati")
        {
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/1.6/Game1_6.mp3");
        }
        else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.6/Odiya/1.6.mp3");
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },

    createBall:function()
    {
        _this.bubble = _this.add.audio('bubble');
        _this.bubble.play();
        if(window.languageSelected=="Odiya")
            _this.bubble.volume = 0.15;
    },

    shuffle: function(array) 
    {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) 
        {
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

    getQuestion:function(target)
    {
        _this.allowClick = true;
        /*commonNavBar.speakerbtn.inputEnabled=true;
        commonNavBar.speakerbtn.events.onInputDown.add(function(){
            commonNavBar.speakerClicked(_this.soundurl);
        },this);*/

        //        _this.speakerbtn = _this.add.sprite(620,5,'speakerBtn');

        //commonNavBar.speakerbtn.inputEnabled = true;
        commonNavBar.speakerbtn.events.onInputDown.add(function()
                                                       {
            commonNavBar.playClickSound();
            _this.getVoice();

        },_this);

        _this.noofAttempts = 0;
        _this.AnsTimerCount=0;
        _this.sceneCount++;

        if(_this.no11==0 ){               
            if(window.languageSelected!="Odiya")
                _this.time.events.add(7000, function(){_this.getVoice();},_this);
            else
                _this.time.events.add(10000, function(){_this.getVoice();},_this);
        }
        else{
            this.getVoice();
        }  


        switch(_this.qArrays[_this.no11])
        {
            case 1: _this.questionid = 1;
                _this.selectAns = 1;
                _this.opt = [1,6,3,8,7,5,11,15,16,14];
                _this.addBubble();
                break;
            case 2: _this.questionid = 1;
                _this.selectAns = 2;
                _this.opt = [1,2,4,6,8,7,12,15,16,17];
                _this.addBubble();
                break;
            case 3: _this.questionid = 1;
                _this.selectAns = 3;
                _this.opt = [3,13,16,14,7,6,4,19,5,9];
                _this.addBubble();
                break;
            case 4: _this.questionid = 1;
                _this.selectAns = 4;
                _this.opt = [1,14,18,8,7,6,4,15,5,9];
                _this.addBubble();
                break;
            case 5: _this.questionid = 1;
                _this.selectAns = 5;
                _this.opt = [13,1,10,8,7,6,4,15,5,12];
                _this.addBubble();
                break;
            case 6: _this.questionid = 1;
                _this.selectAns = 6;
                _this.opt = [13,1,10,8,3,6,4,16,5,12];
                _this.addBubble();
                break;
            case 7: _this.questionid = 1;
                _this.selectAns = 7;
                _this.opt = [13,1,10,8,7,6,4,15,5,14];
                _this.addBubble();
                break;
            case 8: _this.questionid = 1;
                _this.selectAns = 8;
                _this.opt = [18,1,10,8,3,9,4,16,5,14];
                _this.addBubble();
                break;
            case 9: _this.questionid = 1;
                _this.selectAns = 9;
                _this.opt = [18,1,10,8,7,6,4,16,9,19];
                _this.addBubble();
                break;
        } 

        telInitializer2.gameQuestionStart(this,_this.questionid);
    },

    addBubble:function(){
        //        _this.input.enabled = true;
        _this.bubbleImage = _this.add.group();
        _this.bubbleImage.enableBody = true;

        bubbleImage = _this.add.physicsGroup(Phaser.Physics.ARCADE);
        _this.xArray = new Array()
        //_this.xArray = [150,230,310,490,560,620,700,750,380,450];
        _this.xArray = [40,130,220,310,400,490,580,670,770,860];
        _this.xArray = _this.shuffle(_this.xArray);
        _this.yArray = new Array();
        //_this.yArray = [50,120,170,240,300,370,450,80,200,340];
        _this.yArray = [50,95,130,170,210,250,290,330,370,410];
        _this.yArray = _this.shuffle(_this.yArray);
        for (var i = 0; i < 10; i++)
        {
            // _this.s = _this.bubbleImage.create(_this.rnd.integerInRange(100, 700), _this.rnd.integerInRange(200, 300), 'unity16_Bubble');
            //_this.s = _this.bubbleImage.create( _this.xArray[Math.floor(Math.random()*_this.xArray.length)],_this.yArray[Math.floor(Math.random()*_this.yArray.length)], 'unity16_Bubble');
            _this.s  = _this.bubbleImage.create( _this.xArray[i], _this.yArray[i], 'unity16_Bubble');
            _this.s.name = _this.opt[i];
            // _this.s.scale.setTo(0.5,0.5);
            _this.s.anchor.setTo(0.5,0.5);
            //_this.s.body.velocity.set(_this.rnd.integerInRange(-200, 200), _this.rnd.integerInRange(-200, 200));
            _this.s.body.velocity.set(_this.rnd.integerInRange(-80, 80), _this.rnd.integerInRange(-80, 80));

            _this.enterTxt = _this.add.text(-2,1, _this.opt[i]);
            //titletext.scale.setTo(1.5);
            _this.enterTxt.anchor.setTo(0.5,0.5);
            _this.enterTxt.align = 'center';

            _this.enterTxt.font = 'Oh Whale';
            _this.enterTxt.fontSize = 50;
            //text.fontWeight = 'bold';
            _this.enterTxt.fill = '#007470';

            _this.enterTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            _this.s.addChild(_this.enterTxt);
            //bubbleImage.add(enterTxt);
            _this.s.inputEnabled = true;
            _this.s.input.useHandCursor = true;
            _this.s.events.onInputDown.add(_this.numClicked,_this);

        }

        /*_this.graphics =_this.add.graphics(100, 100);

        _this.graphics.lineStyle(2, 0x0000FF, 1);
        _this.graphics.drawRect(-90, -50, 950, 480);*/

        _this.bubbleImage.setAll('body.collideWorldBounds', true);
        _this.physics.arcade.setBounds(0, 40, 960, 500);
        _this.bubbleImage.setAll('body.bounce.x', 1);
        _this.bubbleImage.setAll('body.bounce.y', 1);

    },


    numClicked:function(target){

        if(_this.allowClick == true) {

            console.log("Im Clicked "+target.name);
            console.log(_this.s.key);
            ////console.log("Im Clicked "+_this.bubbleImage.getByName(target.name).key);
            if (_this.s.key === 'unity16_Bubble')
            {
                if( _this.selectAns == target.name){
                    target.events.onInputDown.removeAll();
                    _this.bubbleBurst = _this.add.audio('bubbleBurst');
                    _this.bubbleBurst.play();
                    _this.bubbleImage.getByName(target.name).loadTexture('unity16_BubbleAni',0, false);
                    _this.bubbleImage.getByName(target.name).animations.add('unity16_BubbleAni');
                    _this.bubbleImage.getByName(target.name).animations.play('unity16_BubbleAni', 10, false);
                    //  _this.physics.enable( [ _this.bubbleImage.getByName(target.name) ], Phaser.Physics.ARCADE);
                    // _this.bubbleImage.getByName(target.name).body.enable = false;
                    _this.correctAns(target);
                    _this.time.events.add(500, function()
                                          {
                        _this.bubbleImage.getByName(target.name).body.gravity.y = 500;
                        _this.bubbleImage.getByName(target.name).body.collideWorldBounds = false;
                        _this.bubbleImage.getByName(target.name).body.checkCollision.down = false;
                        //_this.bubbleImage.getChildAt(target.name).visible = false;
                    },this);
                }
                else
                {
                    _this. wrongAns(target);
                }
            }
            _this.allowClick = false;
        }
    },
    
    update:function()
    {

        _this.physics.arcade.collide(_this.bubbleImage);

    },

    removeEverthing:function() 
    {
        _this.no11++;

        console.log("--------------------------"+_this.no11);
        if(_this.no11<4)
        {
            _this.wrong = true;
            //var timerStopVar = commonNavBar.stopTimer();
            ////console.log("removeEverthing");

            _this.count =0;
            _this.bubbleImage.destroy();
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
            _this.count1++;
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
            console.log("else");
            //            _this.input.enabled = true;
            var timerStopVar = commonNavBar.stopTimer();
            commonNavBar.stopVoice();
             commonNavBar.navBar = null;
                                commonNavBar.backbtn = null;
                                commonNavBar.mcIcon = null;
                                commonNavBar.speakerbtn = null;
            _this.state.start('placevalue_NSPVG_1_1level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
        }
    },

    correctAns:function(target)
    { 

        telInitializer2.gameCorrectAns();
        ////console.log("correct Answer" +target.name);
        _this.noofAttempts++;
        target.events.onInputDown.removeAll();

        /*_this.currentTime = window.timeSaveFunc();
        _this.saveAsment = 
            { 
            id_game_play: _this.savedVar,
            id_question: _this.questionid,  
            pass: "yes",
            time2answer: _this.AnsTimerCount,
            attempts: _this.noofAttempts,
            date_time_submission: _this.currentTime, 
            access_token: window.acctkn 
        }*/

        //absdsjsapi.saveAssessment(_this.saveAsment);


        //  telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

        ////console.log("QuestionNo :"+_this.questionNo);
        _this.group1Anim = _this.add.group();

        //        _this.speakerbtn.inputEnabled=false;
        _this.celebration = true;   

        commonNavBar.playCelebrationSound();
        this.Stararr.push(3);
        _this.time.events.add(1500, _this.removeEverthing, _this);
        ////console.log("correct target:"+target);

        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);

        _this.AnsTimerCount=0;

        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play();     
        if(window.quizQuest == true)
		{
			commonNavBar.updateScore(+5);
		}
    },

    wrongAns:function(target)
    {

        telInitializer2.gameWrongAns();
        ////console.log("Wrong Answer");
        ////console.log("wrong target :"+target.name);
        //target.tint = 0xA9A9A9;

        _this.noofAttempts++;
        _this.starsGroup.getChildAt(_this.count1).frame = 1;
        this.Stararr.push(1);
        /*_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
            { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "unity16_"+target.name, 
            access_token: window.acctkn
        } */

        //absdsjsapi.saveInteractEvent(_this.interactEvent);

        _this.shake.shake(10, target);

        commonNavBar.playWrongCelebrationSound();
        _this.time.events.add(1500, _this.removeEverthing, _this);

          if(window.quizQuest == true)
		{
			commonNavBar.updateScore(-5);
		}                         
    },

    stopvoice:function()
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
                ////console.log("here");
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

    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();
        for (var i = 0; i < count; i++)
        {
            _this.starsGroup.create(_this.world.centerX, 8, 'cstarAnim');
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

    getVoice:function()
    {
        _this.stopvoice();
        ////console.log("fffffff"+_this.qArrays[_this.no11]);
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        switch(_this.qArrays[_this.no11])
        {
            case 1: if(window.languageSelected=="English")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/1.mp3");
                            }
                        else if(window.languageSelected=="Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/1.mp3");
                            }
                        else if(window.languageSelected=="Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/1.mp3");
                            }
							else if(window.languageSelected=="Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No1.mp3");
                            }
							else if(window.languageSelected=="Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No1.mp3");
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No1.mp3");
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No1.mp3");
                            }
							
                            else if(window.languageSelected=="Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No1.mp3");
                        }
						else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/1.mp3");
                            }
                        break;
            case 2: if(window.languageSelected=="English")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/2.mp3");
                            }
                        else if(window.languageSelected=="Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/2.mp3");
                            }
                        else if(window.languageSelected=="Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/2.mp3");
                            }
							else if(window.languageSelected=="Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No2.mp3");
                            }
							else if(window.languageSelected=="Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No2.mp3");
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No2.mp3");
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No2.mp3");
                            }
                            else if(window.languageSelected=="Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No2.mp3");
                        }
						else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/2.mp3");
                            }
                        break;
            case 3: if(window.languageSelected=="English")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/3.mp3");
                            }
                        else if(window.languageSelected=="Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/3.mp3");
                            }
                        else if(window.languageSelected=="Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/3.mp3");
                            }
							else if(window.languageSelected=="Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No3.mp3");
                            }
							else if(window.languageSelected=="Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No3.mp3");
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No3.mp3");
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No3.mp3");
                            }
                            else if(window.languageSelected=="Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No3.mp3");
                        }
						else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/3.mp3");
                            }
                        break;
                    break;
            case 4:if(window.languageSelected=="English")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/4.mp3");
                            }
                        else if(window.languageSelected=="Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/4.mp3");
                            }
                        else if(window.languageSelected=="Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/4.mp3");
                            }
							else if(window.languageSelected=="Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No4.mp3");
                            }
							else if(window.languageSelected=="Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No4.mp3");
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No4.mp3");
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No4.mp3");
                            }
                            else if(window.languageSelected=="Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No4.mp3");
                        }
						else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/4.mp3");
                            }
                        break;
            case 5:if(window.languageSelected=="English")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/5.mp3");
                            }
                        else if(window.languageSelected=="Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/5.mp3");
                            }
                        else if(window.languageSelected=="Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/5.mp3");
                            }
							else if(window.languageSelected=="Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No5.mp3");
                            }
							else if(window.languageSelected=="Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No5.mp3");
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No5.mp3");
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No5.mp3");
                            }
                            else if(window.languageSelected=="Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No5.mp3");
                        }
						else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/5.mp3");
                            }
                        break;
            case 6:if(window.languageSelected=="English")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/6.mp3");
                            }
                        else if(window.languageSelected=="Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/6.mp3");
                            }
                        else if(window.languageSelected=="Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/6.mp3");
                            }
							else if(window.languageSelected=="Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No6.mp3");
                            }
							else if(window.languageSelected=="Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No6.mp3");
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No6.mp3");
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No6.mp3");
                            }
                            else if(window.languageSelected=="Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No6.mp3");
                        }
						else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/6.mp3");
                            }
                        break;
            case 7:if(window.languageSelected=="English")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/7.mp3");
                            }
                        else if(window.languageSelected=="Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/7.mp3");
                            }
                        else if(window.languageSelected=="Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/7.mp3");
                            }
							else if(window.languageSelected=="Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No7.mp3");
                            }
							else if(window.languageSelected=="Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No7.mp3");
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No7.mp3");
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No7.mp3");
                            }
                            else if(window.languageSelected=="Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No7.mp3");
                        }
						else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/7.mp3");
                            }
                        break;
            case 8:if(window.languageSelected=="English")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/8.mp3");
                            }
                        else if(window.languageSelected=="Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/8.mp3");
                            }
                        else if(window.languageSelected=="Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/8.mp3");
                            }
							else if(window.languageSelected=="Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No8.mp3");
                            }
							else if(window.languageSelected=="Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No8.mp3");
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No8.mp3");
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No8.mp3");
                            }
                            else if(window.languageSelected=="Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No8.mp3");
                        }
						else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/8.mp3");
                            }
                        break;
            case 9:if(window.languageSelected=="English")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/English/9.mp3");
                            }
                        else if(window.languageSelected=="Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Hindi/9.mp3");
                            }
                        else if(window.languageSelected=="Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Kannada/9.mp3");
                            }
							else if(window.languageSelected=="Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Marathi/No9.mp3");
                            }
							else if(window.languageSelected=="Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Telugu/No9.mp3");
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Tamil/No9.mp3");
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Urdu/No9.mp3");
                            }
                            else if(window.languageSelected=="Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No9.mp3");
                        }
						else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.1/Odiya/9.mp3");
                            }
                        break;
        }
        _this.playQuestionSound.appendChild(_this.src);
           _this.playQuestionSound.play();
    },

    shutdown:function()
    {
        _this.stopvoice();

        if(_this.bubble)
        {
            if(_this.bubble.isPlaying)
                _this.bubble.stop();
        }
    }

};