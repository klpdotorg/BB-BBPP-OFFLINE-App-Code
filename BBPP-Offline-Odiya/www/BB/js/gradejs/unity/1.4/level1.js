Game.unity1_4level1=function(){};

Game.unity1_4level1.prototype ={
    
    init:function(game)
    {
       _this= this;
       
       _this.gameid = "Game 1.4";
       
       /*_this.currentTime = window.timeSaveFunc();
       _this.saveGameplay = 
       {
          id_game:_this.gameid, 
          access_token:window.acctkn, 
          start_time:_this.currentTime
       } 
       _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

       telInitializer.gameIdInit("unity1_4",gradeSelected);

        
    },

    preload:function(game){
        if(!window.grade1NSN4){

            window.grade1NSN4 = true;

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

            this.load.atlas('unity1_4Tick', window.baseUrl+'assets/gradeAssets/unity/1.4/Tick.png', window.baseUrl+'json/gradeJson/unity/1.4/Tick.json');
        
        //game assets.
        this.load.image('unity1_4BG_01', window.baseUrl+'assets/gradeAssets/unity/1.4/BG_01.png');
        this.load.image('unity1_4NumberKey', window.baseUrl+'assets/gradeAssets/unity/1.4/NumberKey.png');
        this.load.image('unity1_4practice',window.baseUrl+'assets/gradeAssets/unity/1.4/practice.png');
        this.load.image('unity1_4topic',window.baseUrl+'assets/gradeAssets/unity/1.4/topic.png');
        //this.load.image('unity1_4backgrd', window.baseUrl+'assets/gradeAssets/unity/1.4/backgrd.png');
        //this.load.image('unity1_4Tick', window.baseUrl+'assets/gradeAssets/unity/1.4/Tick.png');

        this.load.atlas('unity1_4backgrd', window.baseUrl+'assets/gradeAssets/unity/1.1/backgrd.png',window.baseUrl+'json/gradeJson/unity/1.1/backgrd.json');
        
        
        this.load.atlas('unity1_4ice_1', window.baseUrl+'assets/gradeAssets/unity/1.4/1.png', window.baseUrl+'json/gradeJson/unity/1.4/1.json');
        this.load.atlas('unity1_4flowe_aim', window.baseUrl+'assets/gradeAssets/unity/1.4/flowe_aim.png', window.baseUrl+'json/gradeJson/unity/1.4/flowe_aim.json');
        this.load.atlas('unity1_4ball_anim', window.baseUrl+'assets/gradeAssets/unity/1.4/ball_anim.png', window.baseUrl+'json/gradeJson/unity/1.4/ball_anim.json');
        
        this.load.atlas('unity1_4ice_anim', window.baseUrl+'assets/gradeAssets/unity/1.4/ice_anim.png', window.baseUrl+'json/gradeJson/unity/1.4/ice_anim.json');
        this.load.atlas('unity1_4ball_anim2', window.baseUrl+'assets/gradeAssets/unity/1.4/ball_anim2.png', window.baseUrl+'json/gradeJson/unity/1.4/ball_anim2.json');
        this.load.atlas('unity1_4flowe_aim2', window.baseUrl+'assets/gradeAssets/unity/1.4/flowe_aim2.png', window.baseUrl+'json/gradeJson/unity/1.4/flowe_aim2.json');
    }

    },
    
	create:function(game){

		_this.group1childVisible = 0;//candys
        _this.group2childVisible = 0;
        _this.group3childVisible = 0;
        _this.candyaudio = 0;
        _this.candyaudio1 = 0;
        _this.candyaudio2 = 0;
        
        _this.flower1childVisible = 0;//flowers
        _this.flower2childVisible = 0;
        _this.flower3childVisible = 0;
        _this.flowerVoice = 0;
        _this.flowerVoice1 = 0;
        _this.flowerVoice2 = 0;
        
        _this.ball1childVisible = 0;//balls
        _this.ball2childVisible = 0;
        _this.ball3childVisible = 0;
        _this.ballVoice = 0;
        _this.ballVoice1 = 0;
        _this.ballVoice2 = 0;
        
        _this.amplify = null;
        _this.sceneCount = 0;
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.group1;
        _this.group2;
        _this.group3;
        _this.group1Anim;
        _this.ShakeObjectGroup1;
        _this.ShakeObjectGroup2;
        _this.ShakeObjectGroup3;
        _this.ShakeObjectGroup4;
        _this.unity1_4NumberKey;
        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        
        _this.background;
        _this.click3;
        _this.click4;
        _this.rightCount ;
        _this.opt1;
        _this.opt2;
        _this.opt3;
        _this.wmusic;
        _this.count;
        _this.clickSound;

        _this.starsGroup;
        _this.unity1_4backgrd1;
        _this.unity1_4backgrd2;
        _this.unity1_4backgrd3;
        
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9];
        
        _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity1_4BG_01');
        _this.navBar = this.add.sprite(0,0,'unity1_4navBar');
        _this.navBar.scale.setTo(1,1);
        _this.backbtn = this.add.button(-3,3,'newCommonBackBtnForAll',function(){ 
               _this.backbtn.events.onInputDown.removeAll();
               //_this.stopVoice();
               _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
               _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this,0,1,2);
        
        _this.speakerbtn = _this.add.sprite(600,6,'unity1_4CommonSpeakerBtn');
        _this.speakerbtn.events.onInputDown.add(function()
        {

          _this.clickSound = _this.add.audio('ClickSound');
          _this.clickSound.play();

           _this.getVoice();

        },_this);
        
        _this.timebg = this.add.sprite(305,6,'unity1_4timebg');
        /*_this.topicOutline = this.add.sprite(70,5,'unity1_4topicOutline');
        _this.practice = this.add.sprite(78,10,'unity1_4practice');
        _this.topic = this.add.sprite(165,10,'unity1_4topic');*/
        
        _this.timeDisplay = this.add.text(330,22,_this.minutes + ' : '+ _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);
        _this.getQuestion();
        
        //Language selection Sounds
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        if(window.languageSelected=="English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/question1.4.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/question1.4Hin.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/question1.4kan.mp3");
        }
		else if(window.languageSelected=="Marathi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Marathi/question1.4.mp3");
        }
		else if(window.languageSelected=="Telugu")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Telugu/question1.4.mp3");
        }
		else if(window.languageSelected=="Tamil")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Tamil/question1.4.mp3");
        }
		else if(window.languageSelected=="Urdu")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Urdu/question1.4.mp3");
        }
        else if(window.languageSelected=="Gujarati")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/1.4/question1.4.mp3");
            }
		else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/1.4.mp3");
			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();

    },
    
    updateTimer:function() 
    {
        _this.counterForTimer++;
        ////console.log("lololil"+counterForTimer);
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            
            if(_this.minutes<10){
                _this.minutes =  _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes =  _this.minutes+1;
            }
        }
        else
        {
            if (_this.counterForTimer < 10)        
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
        //timer.setText(minutes + ':'+ seconds );
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
    	//console.log("getQuestion :"+_this.no11);
        //console.log("getQuestion :"+_this.qArrays[_this.no11]);
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
                         {
                            _this.AnsTimerCount++;
                        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function()
        {
            _this.updateTimer();
        }, _this);
        _this.timer1.start();
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        
        _this.questionid = 1;
        
        //_this.no11 = 3;
    	switch(_this.qArrays[_this.no11])
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
    		case 7: _this.gotoSeventhQuestion();
    				break;
            case 8: _this.gotoEighthQuestion();
    				break;
            case 9: _this.gotoNinethQuestion();
    				break;
    	}
        
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
                //console.log("here");
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
			_this.starsGroup.create(_this.world.centerX-15, 10, 'unity1_4starAnim');
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

    addQuestion:function(no22)
    {
        //console.log("addQuestion");
        _this.time.events.add(900, function(){
            var tween = _this.add.tween(flagGroup1);
            tween.to({ x: -1000 }, 0, 'Linear', true, 0);
            tween.onComplete.add(_this.changeQuestion, _this);

        }, _this);
    },
    
    createCandy:function(group)
    {
        _this.candy1 = group.create(_this.world.centerX-70,_this.world.centerY-70,'unity1_4ice_1');  
        _this.candy1.name = "candy1";
        _this.candy1.anchor.setTo(0.5);
        _this.candy1.scale.setTo(0.5);
        
        _this.candy1.inputEnabled = true;
        _this.candy1.input.useHandCursor = true;
        
        _this.candy2 = group.create(_this.world.centerX,_this.world.centerY-70,'unity1_4ice_1');  
        _this.candy2.name = "candy2";
        _this.candy2.anchor.setTo(0.5);
        _this.candy2.scale.setTo(0.5);
        _this.candy2.inputEnabled = true;
        _this.candy2.input.useHandCursor = true;
        
        _this.candy3 = group.create(_this.world.centerX+70,_this.world.centerY-70,'unity1_4ice_1');  
        _this.candy3.anchor.setTo(0.5);
        _this.candy3.scale.setTo(0.5);
        _this.candy3.name = "candy3";
        _this.candy3.inputEnabled = true;
        _this.candy3.input.useHandCursor = true;
        
        _this.candy4 = group.create(_this.world.centerX-70,_this.world.centerY,'unity1_4ice_1');  
        _this.candy4.anchor.setTo(0.5);
        _this.candy4.scale.setTo(0.5);
        _this.candy4.name = "candy4";
        _this.candy4.inputEnabled = true;
        _this.candy4.input.useHandCursor = true;
        
        _this.candy5 = group.create(_this.world.centerX,_this.world.centerY,'unity1_4ice_1');  
        _this.candy5.anchor.setTo(0.5);
        _this.candy5.scale.setTo(0.5);
        _this.candy5.name = "candy5";
        _this.candy5.inputEnabled = true;
        _this.candy5.input.useHandCursor = true;
        
        _this.candy6 = group.create(_this.world.centerX+70,_this.world.centerY,'unity1_4ice_1');  
        _this.candy6.anchor.setTo(0.5);
        _this.candy6.scale.setTo(0.5);
        _this.candy6.name = "candy6";
        _this.candy6.inputEnabled = true;
        _this.candy6.input.useHandCursor = true;
        
        _this.candy7 = group.create(_this.world.centerX-70,_this.world.centerY+70,'unity1_4ice_1');  
        _this.candy7.anchor.setTo(0.5);
        _this.candy7.scale.setTo(0.5);
        _this.candy7.name = "candy7";
        _this.candy7.inputEnabled = true;
        _this.candy7.input.useHandCursor = true;
        
        _this.candy8 = group.create(_this.world.centerX,_this.world.centerY+70,'unity1_4ice_1');  
        _this.candy8.anchor.setTo(0.5);
        _this.candy8.scale.setTo(0.5);
        _this.candy8.name = "candy8";
        _this.candy8.inputEnabled = true;
        _this.candy8.input.useHandCursor = true;
        
        _this.candy9 = group.create(_this.world.centerX+70,_this.world.centerY+70,'unity1_4ice_1');  
        _this.candy9.anchor.setTo(0.5);
        _this.candy9.scale.setTo(0.5);
        _this.candy9.name = "candy9";
        _this.candy9.inputEnabled = true;
        _this.candy9.input.useHandCursor = true;

    },
    
    createCandyright:function(groupAnim)
    {
        _this.unity1_4backgrd = groupAnim.create(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd.name = "candyBg";
        _this.unity1_4backgrd.scale.setTo(0.5);
        _this.unity1_4backgrd.anchor.setTo(0.5);
        
        _this.candyAnim1 = groupAnim.create(_this.world.centerX-70,_this.world.centerY-70,'unity1_4ice_anim');  
        _this.candyAnim1.name = "candyAnim1";
        _this.candyAnim1.anchor.setTo(0.5);
        _this.candyAnim1.scale.setTo(0.5);
        
        _this.candyAnim2 = groupAnim.create(_this.world.centerX,_this.world.centerY-70,'unity1_4ice_anim');  
        _this.candyAnim2.name = "candyAnim2";
        _this.candyAnim2.anchor.setTo(0.5);
        _this.candyAnim2.scale.setTo(0.5);
        
        _this.candyAnim3 = groupAnim.create(_this.world.centerX+70,_this.world.centerY-70,'unity1_4ice_anim');  
        _this.candyAnim3.anchor.setTo(0.5);
        _this.candyAnim3.scale.setTo(0.5);
        _this.candyAnim3.name = "candyAnim3";
        
        _this.candyAnim4 = groupAnim.create(_this.world.centerX-70,_this.world.centerY,'unity1_4ice_anim');  
        _this.candyAnim4.anchor.setTo(0.5);
        _this.candyAnim4.scale.setTo(0.5);
        _this.candyAnim4.name = "candyAnim4";
        
        _this.candyAnim5 = groupAnim.create(_this.world.centerX,_this.world.centerY,'unity1_4ice_anim');  
        _this.candyAnim5.anchor.setTo(0.5);
        _this.candyAnim5.scale.setTo(0.5);
        _this.candyAnim5.name = "candyAnim5";
        
        _this.candyAnim6 = groupAnim.create(_this.world.centerX+70,_this.world.centerY,'unity1_4ice_anim');  
        _this.candyAnim6.anchor.setTo(0.5);
        _this.candyAnim6.scale.setTo(0.5);
        _this.candyAnim6.name = "candyAnim6";
        
        _this.candyAnim7 = groupAnim.create(_this.world.centerX-70,_this.world.centerY+70,'unity1_4ice_anim');  
        _this.candyAnim7.anchor.setTo(0.5);
        _this.candyAnim7.scale.setTo(0.5);
        _this.candyAnim7.name = "candyAnim7";
        
        _this.candyAnim8 = groupAnim.create(_this.world.centerX,_this.world.centerY+70,'unity1_4ice_anim');  
        _this.candyAnim8.anchor.setTo(0.5);
        _this.candyAnim8.scale.setTo(0.5);
        _this.candyAnim8.name = "candyAnim8";
        
        _this.candyAnim9 = groupAnim.create(_this.world.centerX+70,_this.world.centerY+70,'unity1_4ice_anim');  
        _this.candyAnim9.anchor.setTo(0.5);
        _this.candyAnim9.scale.setTo(0.5);
        _this.candyAnim9.name = "candyAnim9";
    },
    
    createflowerRight:function(groupAnim)
    { 
        _this.candyAnim1 = groupAnim.create(_this.world.centerX-70,_this.world.centerY-70,'unity1_4flowe_aim2');  
        _this.candyAnim1.name = "candyAnim1";
        _this.candyAnim1.anchor.setTo(0.5);
        _this.candyAnim1.scale.setTo(0.5);
        
        _this.candyAnim2 = groupAnim.create(_this.world.centerX,_this.world.centerY-70,'unity1_4flowe_aim2');  
        _this.candyAnim2.name = "candyAnim2";
        _this.candyAnim2.anchor.setTo(0.5);
        _this.candyAnim2.scale.setTo(0.5);
        
        _this.candyAnim3 = groupAnim.create(_this.world.centerX+70,_this.world.centerY-70,'unity1_4flowe_aim2');  
        _this.candyAnim3.anchor.setTo(0.5);
        _this.candyAnim3.scale.setTo(0.5);
        _this.candyAnim3.name = "candyAnim3";
        
        _this.candyAnim4 = groupAnim.create(_this.world.centerX-70,_this.world.centerY,'unity1_4flowe_aim2');  
        _this.candyAnim4.anchor.setTo(0.5);
        _this.candyAnim4.scale.setTo(0.5);
        _this.candyAnim4.name = "candyAnim4";
        
        _this.candyAnim5 = groupAnim.create(_this.world.centerX,_this.world.centerY,'unity1_4flowe_aim2');  
        _this.candyAnim5.anchor.setTo(0.5);
        _this.candyAnim5.scale.setTo(0.5);
        _this.candyAnim5.name = "candyAnim5";
        
        _this.candyAnim6 = groupAnim.create(_this.world.centerX+70,_this.world.centerY,'unity1_4flowe_aim2');  
        _this.candyAnim6.anchor.setTo(0.5);
        _this.candyAnim6.scale.setTo(0.5);
        _this.candyAnim6.name = "candyAnim6";
        
        _this.candyAnim7 = groupAnim.create(_this.world.centerX-70,_this.world.centerY+70,'unity1_4flowe_aim2');  
        _this.candyAnim7.anchor.setTo(0.5);
        _this.candyAnim7.scale.setTo(0.5);
        _this.candyAnim7.name = "candyAnim7";
        
        _this.candyAnim8 = groupAnim.create(_this.world.centerX,_this.world.centerY+70,'unity1_4flowe_aim2');  
        _this.candyAnim8.anchor.setTo(0.5);
        _this.candyAnim8.scale.setTo(0.5);
        _this.candyAnim8.name = "candyAnim8";
        
        _this.candyAnim9 = groupAnim.create(_this.world.centerX+70,_this.world.centerY+70,'unity1_4flowe_aim2');  
        _this.candyAnim9.anchor.setTo(0.5);
        _this.candyAnim9.scale.setTo(0.5);
        _this.candyAnim9.name = "candyAnim9";
    },

    createflower:function(group_flower)
    {
        
        _this.flower1 = group_flower.create(_this.world.centerX-70,_this.world.centerY-70,'unity1_4flowe_aim');  
        _this.flower1.name = "unity1_4flowe_aim1";
        _this.flower1.anchor.setTo(0.5);
        _this.flower1.scale.setTo(0.5);
        _this.flower1.inputEnabled = true;
        _this.flower1.input.useHandCursor = true;
        
        _this.flower2 = group_flower.create(_this.world.centerX,_this.world.centerY-70,'unity1_4flowe_aim');  
        _this.flower2.name = "unity1_4flowe_aim2";
        _this.flower2.anchor.setTo(0.5);
        _this.flower2.scale.setTo(0.5);
        _this.flower2.inputEnabled = true;
        _this.flower2.input.useHandCursor = true;
        
        _this.flower3 = group_flower.create(_this.world.centerX+70,_this.world.centerY-70,'unity1_4flowe_aim');  
        _this.flower3.anchor.setTo(0.5);
        _this.flower3.scale.setTo(0.5);
        _this.flower3.name = "unity1_4flowe_aim3";
        _this.flower3.inputEnabled = true;
        _this.flower3.input.useHandCursor = true;
        
        _this.flower4 = group_flower.create(_this.world.centerX-70,_this.world.centerY,'unity1_4flowe_aim');  
        _this.flower4.anchor.setTo(0.5);
        _this.flower4.scale.setTo(0.5);
        _this.flower4.name = "unity1_4flowe_aim4";
        _this.flower4.inputEnabled = true;
        _this.flower4.input.useHandCursor = true;
        
        _this.flower5 = group_flower.create(_this.world.centerX,_this.world.centerY,'unity1_4flowe_aim');  
        _this.flower5.anchor.setTo(0.5);
        _this.flower5.scale.setTo(0.5);
        _this.flower5.name = "unity1_4flowe_aim5";
        _this.flower5.inputEnabled = true;
        _this.flower5.input.useHandCursor = true;
        
        _this.flower6 = group_flower.create(_this.world.centerX+70,_this.world.centerY,'unity1_4flowe_aim');  
        _this.flower6.anchor.setTo(0.5);
        _this.flower6.scale.setTo(0.5);
        _this.flower6.name = "unity1_4flowe_aim6";
        _this.flower6.inputEnabled = true;
        _this.flower6.input.useHandCursor = true;
        
        _this.flower7 = group_flower.create(_this.world.centerX-70,_this.world.centerY+70,'unity1_4flowe_aim');  
        _this.flower7.anchor.setTo(0.5);
        _this.flower7.scale.setTo(0.5);
        _this.flower7.name = "unity1_4flowe_aim7";
        _this.flower7.inputEnabled = true;
        _this.flower7.input.useHandCursor = true;
        
        _this.flower8 = group_flower.create(_this.world.centerX,_this.world.centerY+70,'unity1_4flowe_aim');  
        _this.flower8.anchor.setTo(0.5);
        _this.flower8.scale.setTo(0.5);
        _this.flower8.name = "unity1_4flowe_aim8";
        _this.flower8.inputEnabled = true;
        _this.flower8.input.useHandCursor = true;
        
        _this.flower9 = group_flower.create(_this.world.centerX+70,_this.world.centerY+70,'unity1_4flowe_aim');  
        _this.flower9.anchor.setTo(0.5);
        _this.flower9.scale.setTo(0.5);
        _this.flower9.name = "unity1_4flowe_aim9";
        _this.flower9.inputEnabled = true;
        _this.flower9.input.useHandCursor = true;
    },
    
    createball:function(group_ball)
    {
        _this.unity1_4backgrd = group_ball.create(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd.scale.setTo(0.5);
        _this.unity1_4backgrd.anchor.setTo(0.5);
        
        _this.ball1 = group_ball.create(_this.world.centerX-70,_this.world.centerY-70,'unity1_4ball_anim');  
        _this.ball1.name = "unity1_4ball_anim1";
        _this.ball1.anchor.setTo(0.5);
        _this.ball1.scale.setTo(0.5);
        _this.ball1.inputEnabled = true;
        _this.ball1.input.useHandCursor = true;
        
        _this.ball2 = group_ball.create(_this.world.centerX,_this.world.centerY-70,'unity1_4ball_anim');  
        _this.ball2.name = "unity1_4ball_anim2";
        _this.ball2.anchor.setTo(0.5);
        _this.ball2.scale.setTo(0.5);
        _this.ball2.inputEnabled = true;
        _this.ball2.input.useHandCursor = true;
        
        _this.ball3 = group_ball.create(_this.world.centerX+70,_this.world.centerY-70,'unity1_4ball_anim');  
        _this.ball3.anchor.setTo(0.5);
        _this.ball3.scale.setTo(0.5);
        _this.ball3.name = "unity1_4ball_anim3";
        _this.ball3.inputEnabled = true;
        _this.ball3.input.useHandCursor = true;
        
        _this.ball4 = group_ball.create(_this.world.centerX-70,_this.world.centerY,'unity1_4ball_anim');  
        _this.ball4.anchor.setTo(0.5);
        _this.ball4.scale.setTo(0.5);
        _this.ball4.name = "unity1_4ball_anim4";
        _this.ball4.inputEnabled = true;
        _this.ball4.input.useHandCursor = true;
        
        _this.ball5 = group_ball.create(_this.world.centerX,_this.world.centerY,'unity1_4ball_anim');  
        _this.ball5.anchor.setTo(0.5);
        _this.ball5.scale.setTo(0.5);
        _this.ball5.name = "unity1_4ball_anim5";
        _this.ball5.inputEnabled = true;
        _this.ball5.input.useHandCursor = true;
        
        _this.ball6 = group_ball.create(_this.world.centerX+70,_this.world.centerY,'unity1_4ball_anim');  
        _this.ball6.anchor.setTo(0.5);
        _this.ball6.scale.setTo(0.5);
        _this.ball6.name = "unity1_4ball_anim6";
        _this.ball6.inputEnabled = true;
        _this.ball6.input.useHandCursor = true;
        
        _this.ball7 = group_ball.create(_this.world.centerX-70,_this.world.centerY+70,'unity1_4ball_anim');  
        _this.ball7.anchor.setTo(0.5);
        _this.ball7.scale.setTo(0.5);
        _this.ball7.name = "unity1_4ball_anim7";
        _this.ball7.inputEnabled = true;
        _this.ball7.input.useHandCursor = true;
        
        _this.ball8 = group_ball.create(_this.world.centerX,_this.world.centerY+70,'unity1_4ball_anim');  
        _this.ball8.anchor.setTo(0.5);
        _this.ball8.scale.setTo(0.5);
        _this.ball8.name = "unity1_4ball_anim8";
        _this.ball8.inputEnabled = true;
        _this.ball8.input.useHandCursor = true;
        
        _this.ball9 = group_ball.create(_this.world.centerX+70,_this.world.centerY+70,'unity1_4ball_anim');  
        _this.ball9.anchor.setTo(0.5);
        _this.ball9.scale.setTo(0.5);
        _this.ball9.name = "unity1_4ball_anim9";
        _this.ball9.inputEnabled = true;
        _this.ball9.input.useHandCursor = true;
    },
    
    createballright:function(group_ball)
    {
        _this.unity1_4backgrd = group_ball.create(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd.scale.setTo(0.5);
        _this.unity1_4backgrd.anchor.setTo(0.5);
        
        _this.ball1 = group_ball.create(_this.world.centerX-70,_this.world.centerY-70,'unity1_4ball_anim2');  
        _this.ball1.name = "unity1_4ball_anim1";
        _this.ball1.anchor.setTo(0.5);
        _this.ball1.scale.setTo(0.5);
        
        _this.ball2 = group_ball.create(_this.world.centerX,_this.world.centerY-70,'unity1_4ball_anim2');  
        _this.ball2.name = "unity1_4ball_anim2";
        _this.ball2.anchor.setTo(0.5);
        _this.ball2.scale.setTo(0.5);
        
        _this.ball3 = group_ball.create(_this.world.centerX+70,_this.world.centerY-70,'unity1_4ball_anim2');  
        _this.ball3.anchor.setTo(0.5);
        _this.ball3.scale.setTo(0.5);
        _this.ball3.name = "unity1_4ball_anim3";
        
        _this.ball4 = group_ball.create(_this.world.centerX-70,_this.world.centerY,'unity1_4ball_anim2');  
        _this.ball4.anchor.setTo(0.5);
        _this.ball4.scale.setTo(0.5);
        _this.ball4.name = "unity1_4ball_anim4";
        
        _this.ball5 = group_ball.create(_this.world.centerX,_this.world.centerY,'unity1_4ball_anim2');  
        _this.ball5.anchor.setTo(0.5);
        _this.ball5.scale.setTo(0.5);
        _this.ball5.name = "unity1_4ball_anim5";
        
        _this.ball6 = group_ball.create(_this.world.centerX+70,_this.world.centerY,'unity1_4ball_anim2');  
        _this.ball6.anchor.setTo(0.5);
        _this.ball6.scale.setTo(0.5);
        _this.ball6.name = "unity1_4ball_anim6";
        
        _this.ball7 = group_ball.create(_this.world.centerX-70,_this.world.centerY+70,'unity1_4ball_anim2');  
        _this.ball7.anchor.setTo(0.5);
        _this.ball7.scale.setTo(0.5);
        _this.ball7.name = "unity1_4ball_anim7";
        
        _this.ball8 = group_ball.create(_this.world.centerX,_this.world.centerY+70,'unity1_4ball_anim2');  
        _this.ball8.anchor.setTo(0.5);
        _this.ball8.scale.setTo(0.5);
        _this.ball8.name = "unity1_4ball_anim8";
        
        _this.ball9 = group_ball.create(_this.world.centerX+70,_this.world.centerY+70,'unity1_4ball_anim2');  
        _this.ball9.anchor.setTo(0.5);
        _this.ball9.scale.setTo(0.5);
        _this.ball9.name = "unity1_4ball_anim9";
    },
    
    candyVoice:function(target)
    {
        console.log("candyVoice "+target.key);
        
        _this.candyaudio++;
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        if(target.key=='unity1_4ice_1')
        {
            target.loadTexture('unity1_4ice_anim', 0, false);
        }
            
        _this.time.events.add(2000, function()
        { 
            //_this.candyAnim1.destroy();
            target.loadTexture('unity1_4ice_1', 0, false);
        }, this);
        
        if(_this.candyaudio==1)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/1.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/1.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/1.mp3");
            }
            else if(window.languageSelected=="Gujarati")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No1.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/1.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio==2)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/2.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/2.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/2.mp3");
            }
            else if(window.languageSelected=="Gujarati")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No2.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/2.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 

        }
        
        if(_this.candyaudio==3)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/3.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/3.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/3.mp3");
            }
            else if(window.languageSelected=="Gujarati")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No3.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/3.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio==4)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/4.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/4.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/4.mp3");
            }
            else if(window.languageSelected=="Gujarati")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No4.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/4.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio==5)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/5.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/5.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/5.mp3");
            }
            else if(window.languageSelected=="Gujarati")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No5.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/5.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio==6)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/6.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/6.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/6.mp3");
            }
            else if(window.languageSelected=="Gujarati")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No6.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/6.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
           } 
        }
        
        if(_this.candyaudio==7)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/7.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/7.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/7.mp3");
            }
            else if(window.languageSelected=="Gujarati")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No7.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/7.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio==8)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/8.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/8.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/8.mp3");
            }
            else if(window.languageSelected=="Gujarati")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No8.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/8.mp3");
   			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio==9)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/9.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/9.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/9.mp3");
            }
            else if(window.languageSelected=="Gujarati")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/numbers/No9.mp3");
            }
   		   else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/9.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        
        if(_this.candyaudio>=_this.group1childVisible)
            {
                _this.candyaudio = 0;
            }

        
    },
    
    candyVoice2:function(target)
    {
        console.log("candyVoice "+target.key);
        
        _this.candyaudio2++;
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        if(target.key=='unity1_4ice_1')
        {
            target.loadTexture('unity1_4ice_anim', 0, false);
        }
            
        _this.time.events.add(2000, function()
        { 
            //_this.candyAnim1.destroy();
            target.loadTexture('unity1_4ice_1', 0, false);
        }, this);
        
        if(_this.candyaudio2==1)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/1.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/1.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/1.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/1.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
            //_this.candy1.destroy();
            
//            _this.candyAnim1 = _this.add.sprite(_this.world.centerX-370,_this.world.centerY-70,'unity1.4ice_anim'); 
//            _this.candyAnim1.anchor.setTo(0.5);
//            _this.candyAnim1.scale.setTo(0.5);
//            _this.candyAnim1 =_this.candyAnim1.animations.add('walk');
//            _this.candyAnim1.play(10,true);
            
            
            
             //_this.candy1.events.onInputDown.removeAll();
        }
        
        if(_this.candyaudio2==2)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/2.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/2.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/2.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/2.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
            
           
        }
        
        if(_this.candyaudio2==3)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/3.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/3.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/3.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/3.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio2==4)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/4.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/4.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/4.mp3");
            }
   		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/4.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio2==5)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/5.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/5.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/5.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/5.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio2==6)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/6.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/6.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/6.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/6.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio2==7)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/7.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/7.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/7.mp3");
            }
    		else 
            {
               _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/7.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio2==8)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/8.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/8.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/8.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/8.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio2==9)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/9.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/9.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/9.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/9.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        
        if(_this.candyaudio2>=_this.group3childVisible)
        {
            _this.candyaudio2 = 0;
        }

        
    },
    
    candyVoice1:function(target)
    {
        console.log("candyVoice "+target.key);
        
        _this.candyaudio1++;
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        if(target.key=='unity1_4ice_1')
        {
            target.loadTexture('unity1_4ice_anim', 0, false);
        }
            
        _this.time.events.add(2000, function()
        { 
            //_this.candyAnim1.destroy();
            target.loadTexture('unity1_4ice_1', 0, false);
        }, this);
        
        if(_this.candyaudio1==1)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/1.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/1.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/1.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/1.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
  
        }
        
        if(_this.candyaudio1==2)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/2.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/2.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/2.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/2.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
            
           
        }
        
        if(_this.candyaudio1==3)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/3.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/3.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/3.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/3.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio1==4)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/4.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/4.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/4.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/4.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio1==5)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/5.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/5.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/5.mp3");
            }
   		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/5.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio1==6)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/6.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/6.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/6.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/6.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio1==7)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/7.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/7.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/7.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/7.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio1==8)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/8.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/8.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/8.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/8.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.candyaudio1==9)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/9.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/9.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/9.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/9.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        
        if(_this.candyaudio1>=_this.group2childVisible)
            {
                _this.candyaudio1 = 0;
            }

        
    },
    
    flowerAudio:function(target)
    {
        console.log("flowerVoice "+target.key);
        
        _this.flowerVoice++;
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        if(target.key=='unity1_4flowe_aim')
        {
            target.loadTexture('unity1_4flowe_aim2', 0, false);
        }

        _this.time.events.add(2000, function()
        { 
            //_this.candyAnim1.destroy();
            target.loadTexture('unity1_4flowe_aim', 0, false);
        }, this);
        
        if(_this.flowerVoice==1)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/1.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/1.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/1.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/1.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice==2)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/2.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/2.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/2.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/2.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
            
           
        }
        
        if(_this.flowerVoice==3)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/3.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/3.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/3.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/3.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice==4)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/4.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/4.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/4.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/4.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice==5)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/5.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/5.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/5.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/5.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice==6)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/6.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/6.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/6.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/6.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice==7)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/7.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/7.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/7.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/7.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice==8)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/8.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/8.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/8.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/8.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice==9)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/9.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/9.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/9.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/9.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        
        if(_this.flowerVoice>=_this.flower1childVisible)
        {
            _this.flowerVoice = 0;
        }
        
    },
    
    flowerAudio1:function(target)
    {
        console.log("flowerVoice "+target.key);
        
        _this.flowerVoice1++;
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        if(target.key=='unity1_4flowe_aim')
        {
            target.loadTexture('unity1_4flowe_aim2', 0, false);
        }

        _this.time.events.add(1500, function()
        { 
            //_this.candyAnim1.destroy();
            target.loadTexture('unity1_4flowe_aim', 0, false);
        }, this);
        
        if(_this.flowerVoice1==1)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/1.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/1.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/1.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/1.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice1==2)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/2.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/2.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/2.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/2.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
            
           
        }
        
        if(_this.flowerVoice1==3)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/3.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/3.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/3.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/3.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice1==4)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/4.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/4.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/4.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/4.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        
        if(_this.flowerVoice1==5)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/5.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/5.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/5.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/5.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice1==6)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/6.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/6.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/6.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/6.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
           } 
        }
        
        if(_this.flowerVoice1==7)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/7.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/7.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/7.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/7.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice1==8)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/8.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/8.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/8.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/8.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice1==9)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/9.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/9.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/9.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/9.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        
        if(_this.flowerVoice1>=_this.flower2childVisible)
        {
            _this.flowerVoice1 = 0;
        }

    },
       
    flowerAudio2:function(target)
    {
        console.log("flowerVoice "+target.key);
        
        _this.flowerVoice2++;
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        if(target.key=='unity1_4flowe_aim')
        {
            target.loadTexture('unity1_4flowe_aim2', 0, false);
        }

        _this.time.events.add(1500, function()
        { 
            //_this.candyAnim1.destroy();
            target.loadTexture('unity1_4flowe_aim', 0, false);
        }, this);
        
        if(_this.flowerVoice2==1)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/1.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/1.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/1.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/1.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice2==2)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/2.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/2.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/2.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/2.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            }  
           
        }
        
        if(_this.flowerVoice2==3)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/3.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/3.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/3.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/3.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice2==4)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/4.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/4.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/4.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/4.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        
        if(_this.flowerVoice2==5)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/5.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/5.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/5.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/5.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice2==6)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/6.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/6.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/6.mp3");
            }
    		else 
            {
               _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/6.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice2==7)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/7.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/7.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/7.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/7.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice2==8)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/8.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/8.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/8.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/8.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.flowerVoice2==9)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/9.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/9.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/9.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/9.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        
        if(_this.flowerVoice2>=_this.flower3childVisible)
        {
            _this.flowerVoice2 = 0;
        }
    },
  
    ballAudio:function(target)
    {
        console.log("ballVoice "+target.key);
        
        _this.ballVoice++;
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        if(target.key=='unity1_4ball_anim')
        {
            target.loadTexture('unity1_4ball_anim2', 0, false);
        }

        _this.time.events.add(2000, function()
        { 
            //_this.candyAnim1.destroy();
            target.loadTexture('unity1_4ball_anim', 0, false);
        }, this);
        
        if(_this.ballVoice==1)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/1.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/1.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/1.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/1.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice==2)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/2.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/2.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/2.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/2.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
            
           
        }
        
        if(_this.ballVoice==3)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/3.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/3.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/3.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/3.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice==4)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/4.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/4.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/4.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/4.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice==5)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/5.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/5.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/5.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/5.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice==6)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/6.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/6.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/6.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/6.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice==7)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/7.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/7.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/7.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/7.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice==8)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/8.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/8.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/8.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/8.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice==9)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/9.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/9.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/9.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/9.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        
        if(_this.ballVoice>=_this.ball1childVisible)
        {
            _this.ballVoice = 0;
        } 
    },
    
    ballAudio1:function(target)
    {
        console.log("ballVoice "+target.key);
        
        _this.ballVoice1++;
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        if(target.key=='unity1_4ball_anim')
        {
            target.loadTexture('unity1_4ball_anim2', 0, false);
        }

        _this.time.events.add(2000, function()
        { 
            //_this.candyAnim1.destroy();
            target.loadTexture('unity1_4ball_anim', 0, false);
        }, this);
        
        if(_this.ballVoice1==1)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/1.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/1.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/1.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/1.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice1==2)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/2.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/2.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/2.mp3");
            }
    		else 
           {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/2.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
            
           
        }
        
        if(_this.ballVoice1==3)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/3.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/3.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/3.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/3.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice1==4)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/4.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/4.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/4.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/4.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice1==5)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/5.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/5.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/5.mp3");
            }
    		else 
           {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/5.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice1==6)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/6.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/6.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/6.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/6.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice1==7)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/7.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/7.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/7.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/7.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice1==8)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/8.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/8.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/8.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/8.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice1==9)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/9.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/9.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/9.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/9.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        
        if(_this.ballVoice1>=_this.ball2childVisible)
        {
            _this.ballVoice1 = 0;
        } 
    },
    
    ballAudio2:function(target)
    {
        console.log("ballVoice "+target.key);
        
        _this.ballVoice2++;
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        if(target.key=='unity1_4ball_anim')
        {
            target.loadTexture('unity1_4ball_anim2', 0, false);
        }

        _this.time.events.add(2000, function()
        { 
            //_this.candyAnim1.destroy();
            target.loadTexture('unity1_4ball_anim', 0, false);
        }, this);
        
        if(_this.ballVoice2==1)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/1.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/1.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/1.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/1.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice2==2)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/2.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/2.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/2.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/2.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice2==3)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/3.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/3.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/3.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/3.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice2==4)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/4.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/4.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/4.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/4.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice2==5)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/5.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/5.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/5.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/5.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice2==6)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/6.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/6.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/6.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/6.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice2==7)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/7.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/7.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/7.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/7.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice2==8)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/8.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/8.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/8.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/8.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        if(_this.ballVoice2==9)
        {
           console.log("eeeeeeeeeeeeeeeeee");
            
            if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/9.mp3");
            }
            else if(window.languageSelected=="Hindi")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/9.mp3");
            }
            else if(window.languageSelected=="Kannada")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/9.mp3");
            }
    		else 
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/9.mp3");
    			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            } 
        }
        
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        
        if(_this.ballVoice2>=_this.ball3childVisible)
        {
            _this.ballVoice2 = 0;
        } 
    },


    gotoFirstQuestion:function()
    {  
        _this.stopVoice(); 
       // console.log("gotoFirstQuestion");
       
        if(_this.no11==0)
        {                                                              //8,9,6---------------------------8
           // questionSoundEng.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundHin.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundKan.onStop.add(function(){ _this.getVoice();}, _this.; 
        }
        else
        {
            // _this.getVoice();
        }
       
        _this.questionNo = 1;
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
    	_this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
    
        _this.unity1_4NumberKey = _this.add.sprite(_this.world.centerX,_this.world.centerY-170,'unity1_4NumberKey');  
        _this.unity1_4NumberKey.name = "unity1_4NumberKey";
        _this.unity1_4NumberKey.anchor.setTo(0.5);
        _this.unity1_4NumberKey.scale.setTo(0.5);
        _this.unity1_4NumberKey.width = 70;
        _this.unity1_4NumberKey.height = 70;
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#46A1A7";
        _this.text.fontWeight = 'normal'
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        //_this.text.scale.setTo(3,3); 
        
        _this.unity1_4NumberKey.addChild(_this.text);
      
        _this.unity1_4backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd1.name = "candyBg";
        _this.unity1_4backgrd1.scale.setTo(0.5);
        _this.unity1_4backgrd1.anchor.setTo(0.5);
        _this.unity1_4backgrd1.name="unity1_4Tick1";
       _this.unity1_4backgrd1.frame=0;
        _this.unity1_4backgrd1.inputEnabled=true;
        _this.unity1_4backgrd1.input.priorityID = 2;
        _this.unity1_4backgrd1.input.useHandCursor=true;
        _this.unity1_4backgrd1.events.onInputDown.add(_this.correctAns,_this);

        _this.unity1_4backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd2.name = "candyBg";
        _this.unity1_4backgrd2.scale.setTo(0.5);
        _this.unity1_4backgrd2.anchor.setTo(0.5);
        _this.unity1_4backgrd2.frame=0;
         _this.unity1_4backgrd2.name="unity1_4Tick2";
        _this.unity1_4backgrd2.inputEnabled=true;
        _this.unity1_4backgrd2.input.priorityID = 2;
        _this.unity1_4backgrd2.input.useHandCursor=true;
        _this.unity1_4backgrd2.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.unity1_4backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd3.name = "candyBg";
        _this.unity1_4backgrd3.scale.setTo(0.5);
        _this.unity1_4backgrd3.anchor.setTo(0.5);
        _this.unity1_4backgrd3.frame=0;
         _this.unity1_4backgrd3.name="unity1_4Tick3";
        _this.unity1_4backgrd3.inputEnabled=true;
        _this.unity1_4backgrd3.input.priorityID = 2;
        _this.unity1_4backgrd3.input.useHandCursor=true;
        _this.unity1_4backgrd3.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.group1.x -= 300;
        _this.group3.x += 300; 

        _this.createCandy(_this.group1);
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
        _this.createCandy(_this.group2);
        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        _this.group2.name= "wrongAnswer1";
        
        _this.createCandy(_this.group3);
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');
        _this.group3.name= "wrongAnswer2";

        _this.group1.getChildAt(4).visible = false;
        
        _this.group3.getChildAt(3).visible = false;
        _this.group3.getChildAt(4).visible = false;
        _this.group3.getChildAt(5).visible = false;
        
       /* _this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.5,0.5);
        _this.opt1.name = 'unity1_4Tick1';

        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt2.anchor.setTo(0.5);
        // _this.opt2.scale.setTo(0.5,0.5);
        _this.opt2.name = 'unity1_4Tick2';
        
        _this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt3.anchor.setTo(0.5);
       // _this.opt3.scale.setTo(0.5,0.5);
        _this.opt3.name = 'unity1_4Tick3';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);*/
        
        flagGroup1 = _this.add.group();
        
    	_this.ShakeObjectGroup1.add(_this.unity1_4backgrd1);
    	_this.ShakeObjectGroup2.add(_this.unity1_4backgrd2);
    	_this.ShakeObjectGroup3.add(_this.unity1_4backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
       /* 
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        flagGroup1.add(_this.opt3);*/
        
        flagGroup1.add(_this.unity1_4NumberKey);
    	
    	flagGroup1.x = 1000;
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this.tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.group1childVisible = 8;
        _this.group2childVisible = 9;
        _this.group3childVisible = 6;
        
       /* _this.group1.onChildInputDown.add(_this.candyVoice, _this);
        _this.group2.onChildInputDown.add(_this.candyVoice1, _this);
        _this.group3.onChildInputDown.add(_this.candyVoice2, _this);*/

      /*  if(commonNavBar.hintflag==1){

        }*/

    },
   
    gotoSecondQuestion:function()
    {
        //_this.stopVoice();
       
        if(_this.no11==0)
        {                                                             
           // questionSoundEng.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundHin.onStop.add(function(){ _this.getVoice();}, _this.;   
           // questionSoundKan.onStop.add(function(){ _this.getVoice();}, _this.; 
        }
        else
        {
            // _this.getVoice();
        } 
       // _this.no11++;                                               //4,3,7-----------------4
        _this.questionNo = 2;
        
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
        _this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.unity1_4NumberKey = _this.add.sprite(_this.world.centerX,_this.world.centerY-170,'unity1_4NumberKey');  
        _this.unity1_4NumberKey.name = "unity1_4NumberKey";
        _this.unity1_4NumberKey.anchor.setTo(0.5);
        _this.unity1_4NumberKey.scale.setTo(0.5);
        _this.unity1_4NumberKey.width = 70;
        _this.unity1_4NumberKey.height = 70;
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#46A1A7";
        _this.text.fontWeight = 'normal'
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        
        _this.unity1_4NumberKey.addChild(_this.text);
        
        _this.unity1_4backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd1.name = "candyBg";
        _this.unity1_4backgrd1.scale.setTo(0.5);
        _this.unity1_4backgrd1.anchor.setTo(0.5);
        _this.unity1_4backgrd1.frame=0;
         _this.unity1_4backgrd1.name="unity1_4Tick1";
        _this.unity1_4backgrd1.inputEnabled=true;
        _this.unity1_4backgrd1.input.priorityID = 2;
        _this.unity1_4backgrd1.input.useHandCursor=true;
        _this.unity1_4backgrd1.events.onInputDown.add(_this.correctAns,_this);

        
        _this.unity1_4backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd2.name = "candyBg";
        _this.unity1_4backgrd2.scale.setTo(0.5);
        _this.unity1_4backgrd2.anchor.setTo(0.5);
         _this.unity1_4backgrd2.name="unity1_4Tick2";
         _this.unity1_4backgrd2.frame=0;
        _this.unity1_4backgrd2.inputEnabled=true;
        _this.unity1_4backgrd2.input.priorityID = 2;
        _this.unity1_4backgrd2.input.useHandCursor=true;
        _this.unity1_4backgrd2.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.unity1_4backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd3.name = "candyBg";
        _this.unity1_4backgrd3.scale.setTo(0.5);
        _this.unity1_4backgrd3.anchor.setTo(0.5);
         _this.unity1_4backgrd3.name="unity1_4Tick3";
         _this.unity1_4backgrd3.frame=0;
        _this.unity1_4backgrd3.inputEnabled=true;
        _this.unity1_4backgrd3.input.priorityID = 2;
        _this.unity1_4backgrd3.input.useHandCursor=true;
        _this.unity1_4backgrd3.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.group1.x -= 300;
        _this.group3.x += 300; 

        _this.createflower(_this.group1);
        _this.createflower(_this.group2);
        _this.createflower(_this.group3);
        
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
      /*  _this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.5,0.5);
        _this.opt1.name = 'unity1_4Tick1';*/

        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        
        /*_this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt2.anchor.setTo(0.5);
        // _this.opt2.scale.setTo(0.5,0.5);
        _this.opt2.name = "unity1_4Tick2";*/
        
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');

     /*   _this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt3.anchor.setTo(0.5);
       // _this.opt3.scale.setTo(0.5,0.5);
        _this.opt3.name= "unity1_4Tick3";*/
        
     /*   _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);*/
        
        _this.group1.getChildAt(1).visible = false;
        _this.group1.getChildAt(3).visible = false;
        _this.group1.getChildAt(4).visible = false;
        _this.group1.getChildAt(5).visible = false;
        _this.group1.getChildAt(7).visible = false;
        
        _this.group2.getChildAt(0).visible = false;
        _this.group2.getChildAt(1).visible = false;
        _this.group2.getChildAt(2).visible = false;
        _this.group2.getChildAt(6).visible = false;
        _this.group2.getChildAt(7).visible = false;
        _this.group2.getChildAt(8).visible = false;
       
    
        _this.group3.getChildAt(6).visible = false;
        _this.group3.getChildAt(8).visible = false;
    
        
        flagGroup1 = _this.add.group();
        _this.ShakeObjectGroup1.add(_this.unity1_4backgrd1);
    	_this.ShakeObjectGroup2.add(_this.unity1_4backgrd2);
    	_this.ShakeObjectGroup3.add(_this.unity1_4backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
        /*flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        flagGroup1.add(_this.opt3);*/
        
        flagGroup1.add(_this.unity1_4NumberKey);
    	
    	flagGroup1.x = 1000;
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this.tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.flower1childVisible = 4;
        _this.flower2childVisible = 3;
        _this.flower3childVisible = 7;
   
      /*  _this.group1.onChildInputDown.add(_this.flowerAudio, _this);
        _this.group2.onChildInputDown.add(_this.flowerAudio1, _this);
        _this.group3.onChildInputDown.add(_this.flowerAudio2, _this);
*/
    },
   
    gotoThirdQuestion:function()
    {
		//_this.stopVoice();
        if(_this.no11==0)
        {                                                       
           // questionSoundEng.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundHin.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundKan.onStop.add(function(){ _this.getVoice();}, _this.; 
        }
        else
        {
            // _this.getVoice();
        }
                                                   
        _this.questionNo = 3;                         //3,4,9--------3;
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
        
        
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
    /*    _this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.5,0.5);
        _this.opt1.name = 'unity1_4Tick1';*/

        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        
       /* _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt2.anchor.setTo(0.5);
        // _this.opt2.scale.setTo(0.5,0.5);
        _this.opt2.name="unity1_4Tick2";*/
        
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');

        /*_this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt3.anchor.setTo(0.5);
       // _this.opt3.scale.setTo(0.5,0.5);
        _this.opt3.name = "unity1_4Tick3";*/
        
        _this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.unity1_4NumberKey = _this.add.sprite(_this.world.centerX,_this.world.centerY-170,'unity1_4NumberKey');  
        _this.unity1_4NumberKey.name = "unity1_4NumberKey";
        _this.unity1_4NumberKey.anchor.setTo(0.5);
        _this.unity1_4NumberKey.scale.setTo(0.5);
        _this.unity1_4NumberKey.width = 70;
        _this.unity1_4NumberKey.height = 70;
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#46A1A7";
        _this.text.fontWeight = 'normal'
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        
        _this.unity1_4NumberKey.addChild(_this.text);
        
        _this.unity1_4backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd1.name = "candyBg";
        _this.unity1_4backgrd1.scale.setTo(0.5);
        _this.unity1_4backgrd1.anchor.setTo(0.5);
         _this.unity1_4backgrd1.name="unity1_4Tick1";
         _this.unity1_4backgrd1.frame=0;
        _this.unity1_4backgrd1.inputEnabled=true;
        _this.unity1_4backgrd1.input.priorityID = 2;
        _this.unity1_4backgrd1.input.useHandCursor=true;
        _this.unity1_4backgrd1.events.onInputDown.add(_this.correctAns,_this);

        
        _this.unity1_4backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd2.name = "candyBg";
        _this.unity1_4backgrd2.scale.setTo(0.5);
        _this.unity1_4backgrd2.anchor.setTo(0.5);
         _this.unity1_4backgrd2.name="unity1_4Tick2";
         _this.unity1_4backgrd2.frame=0;
        _this.unity1_4backgrd2.inputEnabled=true;
        _this.unity1_4backgrd2.input.priorityID = 2;
        _this.unity1_4backgrd2.input.useHandCursor=true;
        _this.unity1_4backgrd2.events.onInputDown.add(_this.wrongAns,_this);

        _this.unity1_4backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd3.name = "candyBg";
        _this.unity1_4backgrd3.scale.setTo(0.5);
        _this.unity1_4backgrd3.anchor.setTo(0.5);
         _this.unity1_4backgrd3.name="unity1_4Tick3";
         _this.unity1_4backgrd3.frame=0;
        _this.unity1_4backgrd3.inputEnabled=true;
        _this.unity1_4backgrd3.input.priorityID = 2;
        _this.unity1_4backgrd3.input.useHandCursor=true;
        _this.unity1_4backgrd3.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.group1.x -= 300;
        _this.group3.x += 300; 
        
        _this.createball(_this.group1);
        _this.createball(_this.group2);
        _this.createball(_this.group3);
        
       /* _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);*/
        
        _this.group2.getChildAt(2).visible = false;
        _this.group2.getChildAt(4).visible = false;
        _this.group2.getChildAt(5).visible = false;
        _this.group2.getChildAt(6).visible = false;
        _this.group2.getChildAt(8).visible = false;
        
        _this.group1.getChildAt(0).visible = false;
        _this.group1.getChildAt(1).visible = false;
        _this.group1.getChildAt(2).visible = false;
        _this.group1.getChildAt(3).visible = false;
        //_this.group1.getChildAt(6).visible = false;
        _this.group1.getChildAt(7).visible = false;
        _this.group1.getChildAt(8).visible = false;
        _this.group1.getChildAt(9).visible = false;
        
        flagGroup1 = _this.add.group();
        _this.ShakeObjectGroup1.add(_this.unity1_4backgrd1);
    	_this.ShakeObjectGroup2.add(_this.unity1_4backgrd2);
    	_this.ShakeObjectGroup3.add(_this.unity1_4backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
      /*  flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        flagGroup1.add(_this.opt3);*/
        
        flagGroup1.add(_this.unity1_4NumberKey);
    	
    	flagGroup1.x = 1000;
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this.tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.ball1childVisible = 3;//balls
        _this.ball2childVisible = 4;
        _this.ball3childVisible = 9;
        
       /* _this.group1.onChildInputDown.add(_this.ballAudio, _this);
        _this.group2.onChildInputDown.add(_this.ballAudio1, _this);
        _this.group3.onChildInputDown.add(_this.ballAudio2, _this);*/
    },
   
    gotoFourthQuestion:function()
    {
		// _this.stopVoice();
        if(_this.no11==0)
        {                                                       
          //  questionSoundEng.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundHin.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundKan.onStop.add(function(){ _this.getVoice();}, _this.; 
        }
        else
        {
             //_this.getVoice();
        }
        _this.questionNo = 4;           //1,3,5----------1 done
        
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
        
        
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
       /* _this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.5,0.5);
        _this.opt1.name = 'unity1_4Tick1';
*/
        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        
        /*_this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt2.anchor.setTo(0.5);
        // _this.opt2.scale.setTo(0.5,0.5);
        _this.opt2.name="unity1_4Tick2";
        */
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');

        /*_this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt3.anchor.setTo(0.5);
       // _this.opt3.scale.setTo(0.5,0.5);
        _this.opt3.name = "unity1_4Tick3";
       */ 
        _this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.unity1_4NumberKey = _this.add.sprite(_this.world.centerX,_this.world.centerY-170,'unity1_4NumberKey');  
        _this.unity1_4NumberKey.name = "unity1_4NumberKey";
        _this.unity1_4NumberKey.anchor.setTo(0.5);
        _this.unity1_4NumberKey.scale.setTo(0.5);
        _this.unity1_4NumberKey.width = 70;
        _this.unity1_4NumberKey.height = 70;
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#46A1A7";
        _this.text.fontWeight = 'normal'
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        
        _this.unity1_4NumberKey.addChild(_this.text);
        
        _this.unity1_4backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd1.name = "candyBg";
        _this.unity1_4backgrd1.scale.setTo(0.5);
        _this.unity1_4backgrd1.anchor.setTo(0.5);
        _this.unity1_4backgrd1.frame=0;
         _this.unity1_4backgrd1.name="unity1_4Tick1";
        _this.unity1_4backgrd1.inputEnabled=true;
        _this.unity1_4backgrd1.input.priorityID = 2;
        _this.unity1_4backgrd1.input.useHandCursor=true;
        _this.unity1_4backgrd1.events.onInputDown.add(_this.correctAns,_this);

        
        _this.unity1_4backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd2.name = "candyBg";
        _this.unity1_4backgrd2.scale.setTo(0.5);
        _this.unity1_4backgrd2.anchor.setTo(0.5);
        _this.unity1_4backgrd2.frame=0;
         _this.unity1_4backgrd2.name="unity1_4Tick2";
        _this.unity1_4backgrd2.inputEnabled=true;
        _this.unity1_4backgrd2.input.priorityID = 2;
        _this.unity1_4backgrd2.input.useHandCursor=true;
        _this.unity1_4backgrd2.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.unity1_4backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd3.name = "candyBg";
        _this.unity1_4backgrd3.scale.setTo(0.5);
        _this.unity1_4backgrd3.anchor.setTo(0.5);
         _this.unity1_4backgrd3.name="unity1_4Tick3";
         _this.unity1_4backgrd3.frame=0;
        _this.unity1_4backgrd3.inputEnabled=true;
        _this.unity1_4backgrd3.input.priorityID = 2;
        _this.unity1_4backgrd3.input.useHandCursor=true;
        _this.unity1_4backgrd3.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.group1.x -= 300;
        _this.group3.x += 300; 
        
        _this.createball(_this.group1);
        _this.createball(_this.group2);
        _this.createball(_this.group3);
        
       /* _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
       */ 
        _this.group1.getChildAt(0).visible = false;
        _this.group1.getChildAt(1).visible = false;
        _this.group1.getChildAt(2).visible = false;
        _this.group1.getChildAt(3).visible = false;
        _this.group1.getChildAt(4).visible = false;
        _this.group1.getChildAt(6).visible = false;
        _this.group1.getChildAt(7).visible = false;
        _this.group1.getChildAt(8).visible = false;
        _this.group1.getChildAt(9).visible = false;
        
        _this.group2.getChildAt(2).visible = false;
        _this.group2.getChildAt(4).visible = false;
        _this.group2.getChildAt(5).visible = false;
        _this.group2.getChildAt(6).visible = false;
        _this.group2.getChildAt(8).visible = false;
        

        _this.group3.getChildAt(2).visible = false;
        _this.group3.getChildAt(4).visible = false;
        _this.group3.getChildAt(6).visible = false;
        _this.group3.getChildAt(8).visible = false;
 
        
        flagGroup1 = _this.add.group();
        _this.ShakeObjectGroup1.add(_this.unity1_4backgrd1);
    	_this.ShakeObjectGroup2.add(_this.unity1_4backgrd2);
    	_this.ShakeObjectGroup3.add(_this.unity1_4backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
        /*flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        flagGroup1.add(_this.opt3);
        */
        flagGroup1.add(_this.unity1_4NumberKey);
    	
    	flagGroup1.x = 1000;
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
    	var tween = _this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0, 'Linear', true, 0);
        var tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	tween1.to({ x: 0 }, 0, 'Linear', true, 0);
        
        var tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	tween2.to({ x: 0 }, 0, 'Linear', true, 0);
        var tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.ball1childVisible = 1;//balls
        _this.ball2childVisible = 3;
        _this.ball3childVisible = 5;
        
        /*_this.group1.onChildInputDown.add(_this.ballAudio, _this);
        _this.group2.onChildInputDown.add(_this.ballAudio1, _this);
        _this.group3.onChildInputDown.add(_this.ballAudio2, _this);
*/
        
                                        
    

    },

    gotoFifthQuestion:function()
    {
	// _this.stopVoice();
	if(_this.no11==0)
        {                                                       
          //  questionSoundEng.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundHin.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundKan.onStop.add(function(){ _this.getVoice();}, _this.; 
        }
        else
        {
            // _this.getVoice();
        }
        _this.questionNo = 5;//5,2,3------------2
        
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
        
        
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
        /*_this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.5,0.5);
        _this.opt1.name = 'unity1_4Tick1';
*/
        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        
        /*_this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt2.anchor.setTo(0.5);
        // _this.opt2.scale.setTo(0.5,0.5);
        _this.opt2.name="unity1_4Tick2";
       */ 
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');

        /*_this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt3.anchor.setTo(0.5);
       // _this.opt3.scale.setTo(0.5,0.5);
        _this.opt3.name = "unity1_4Tick3";
       */ 
        _this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.unity1_4NumberKey = _this.add.sprite(_this.world.centerX,_this.world.centerY-170,'unity1_4NumberKey');  
        _this.unity1_4NumberKey.name = "unity1_4NumberKey";
        _this.unity1_4NumberKey.anchor.setTo(0.5);
        _this.unity1_4NumberKey.scale.setTo(0.5);
        _this.unity1_4NumberKey.width = 70;
        _this.unity1_4NumberKey.height = 70;
        
        _this.text = this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#46A1A7";
        _this.text.fontWeight = 'normal'
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        
        _this.unity1_4NumberKey.addChild(_this.text);
        
        _this.unity1_4backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd1.name = "candyBg";
        _this.unity1_4backgrd1.scale.setTo(0.5);
        _this.unity1_4backgrd1.anchor.setTo(0.5);
         _this.unity1_4backgrd1.name="unity1_4Tick1";
         _this.unity1_4backgrd1.frame=0;
        _this.unity1_4backgrd1.inputEnabled=true;
        _this.unity1_4backgrd1.input.priorityID = 2;
        _this.unity1_4backgrd1.input.useHandCursor=true;
        _this.unity1_4backgrd1.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.unity1_4backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd2.name = "candyBg";
        _this.unity1_4backgrd2.scale.setTo(0.5);
        _this.unity1_4backgrd2.anchor.setTo(0.5);
         _this.unity1_4backgrd2.name="unity1_4Tick2";
         _this.unity1_4backgrd2.frame=0;
        _this.unity1_4backgrd2.inputEnabled=true;
        _this.unity1_4backgrd2.input.priorityID = 2;
        _this.unity1_4backgrd2.input.useHandCursor=true;
        _this.unity1_4backgrd2.events.onInputDown.add(_this.correctAns,_this);

        
        _this.unity1_4backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd3.name = "candyBg";
        _this.unity1_4backgrd3.scale.setTo(0.5);
        _this.unity1_4backgrd3.anchor.setTo(0.5);
         _this.unity1_4backgrd3.name="unity1_4Tick3";
         _this.unity1_4backgrd3.frame=0;
        _this.unity1_4backgrd3.inputEnabled=true;
        _this.unity1_4backgrd3.input.priorityID = 2;
        _this.unity1_4backgrd3.input.useHandCursor=true;
        _this.unity1_4backgrd3.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.group1.x -= 300;
        _this.group3.x += 300; 
        
        _this.createball(_this.group1);
        _this.createball(_this.group2);
        _this.createball(_this.group3);
        
       /* _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
     */  
        _this.group1.getChildAt(2).visible = false;
        _this.group1.getChildAt(4).visible = false;
        _this.group1.getChildAt(6).visible = false;
        _this.group1.getChildAt(8).visible = false;
        
        _this.group2.getChildAt(0).visible = false;
        _this.group2.getChildAt(1).visible = false;
        _this.group2.getChildAt(2).visible = false;
        _this.group2.getChildAt(3).visible = false;
        _this.group2.getChildAt(5).visible = false;
        _this.group2.getChildAt(7).visible = false;
        _this.group2.getChildAt(8).visible = false;
        _this.group2.getChildAt(9).visible = false;
        
        _this.group3.getChildAt(2).visible = false;
        _this.group3.getChildAt(4).visible = false;
        _this.group3.getChildAt(5).visible = false;
        _this.group3.getChildAt(6).visible = false;
        _this.group3.getChildAt(8).visible = false;
        
        flagGroup1 = _this.add.group();
        _this.ShakeObjectGroup1.add(_this.unity1_4backgrd1);
    	_this.ShakeObjectGroup2.add(_this.unity1_4backgrd2);
    	_this.ShakeObjectGroup3.add(_this.unity1_4backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
       /* flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        flagGroup1.add(_this.opt3);
       */ 
        flagGroup1.add(_this.unity1_4NumberKey);
    	flagGroup1.x = 1000;
        
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this.tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.ball1childVisible = 5;//balls
        _this.ball2childVisible = 2;
        _this.ball3childVisible = 3;
        
       /* _this.group1.onChildInputDown.add(_this.ballAudio, _this);
        _this.group2.onChildInputDown.add(_this.ballAudio1, _this);
        _this.group3.onChildInputDown.add(_this.ballAudio2, _this);
      */
    },

    gotoSixthQuestion:function()
    {
		//_this.stopVoice();
        if(_this.no11==0)
        {                                                       
          //  questionSoundEng.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundHin.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundKan.onStop.add(function(){ _this.getVoice();}, _this.; 
        }
        else
        {
            // _this.getVoice();
        }
        _this.questionNo = 6;   //1,9,4-----------9
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
    	_this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.unity1_4NumberKey = _this.add.sprite(_this.world.centerX,_this.world.centerY-170,'unity1_4NumberKey');  
        _this.unity1_4NumberKey.name = "unity1_4NumberKey";
        _this.unity1_4NumberKey.anchor.setTo(0.5);
        _this.unity1_4NumberKey.scale.setTo(0.5);
        _this.unity1_4NumberKey.width = 70;
        _this.unity1_4NumberKey.height = 70;
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#46A1A7";
        _this.text.fontWeight = 'normal'
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        
        _this.unity1_4NumberKey.addChild(_this.text);
        
        _this.unity1_4backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd1.name = "candyBg";
        _this.unity1_4backgrd1.scale.setTo(0.5);
        _this.unity1_4backgrd1.anchor.setTo(0.5);
         _this.unity1_4backgrd1.name="unity1_4Tick1";
         _this.unity1_4backgrd1.frame=0;
        _this.unity1_4backgrd1.inputEnabled=true;
        _this.unity1_4backgrd1.input.priorityID = 2;
        _this.unity1_4backgrd1.input.useHandCursor=true;
        _this.unity1_4backgrd1.events.onInputDown.add(_this.wrongAns,_this);

        _this.unity1_4backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd2.name = "candyBg";
        _this.unity1_4backgrd2.scale.setTo(0.5);
        _this.unity1_4backgrd2.anchor.setTo(0.5);
         _this.unity1_4backgrd2.name="unity1_4Tick2";
         _this.unity1_4backgrd2.frame=0;
        _this.unity1_4backgrd2.inputEnabled=true;
        _this.unity1_4backgrd2.input.priorityID = 2;
        _this.unity1_4backgrd2.input.useHandCursor=true;
        _this.unity1_4backgrd2.events.onInputDown.add(_this.correctAns,_this);

        
        _this.unity1_4backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd3.name = "candyBg";
        _this.unity1_4backgrd3.scale.setTo(0.5);
        _this.unity1_4backgrd3.anchor.setTo(0.5);
         _this.unity1_4backgrd3.name="unity1_4Tick3";
         _this.unity1_4backgrd3.frame=0;
        _this.unity1_4backgrd3.inputEnabled=true;
        _this.unity1_4backgrd3.input.priorityID = 2;
        _this.unity1_4backgrd3.input.useHandCursor=true;
        _this.unity1_4backgrd3.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.group1.x -= 300;
        _this.group3.x += 300; 

        _this.createCandy(_this.group1);
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
        _this.createCandy(_this.group2);
        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        _this.group2.name= "wrongAnswer1";
        
        _this.createCandy(_this.group3);
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');
        _this.group3.name= "wrongAnswer2";

        _this.group1.getChildAt(0).visible = false;
        _this.group1.getChildAt(1).visible = false;
        _this.group1.getChildAt(2).visible = false;
        _this.group1.getChildAt(3).visible = false;
        _this.group1.getChildAt(5).visible = false;
        _this.group1.getChildAt(6).visible = false;
        _this.group1.getChildAt(7).visible = false;
        _this.group1.getChildAt(8).visible = false;
        
        _this.group3.getChildAt(1).visible = false;
        _this.group3.getChildAt(3).visible = false;
        _this.group3.getChildAt(4).visible = false;
        _this.group3.getChildAt(5).visible = false;
        _this.group3.getChildAt(7).visible = false;
        
        
       /* _this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.5,0.5);
        _this.opt1.name = 'unity1_4Tick1';

        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt2.anchor.setTo(0.5);
        // _this.opt2.scale.setTo(0.5,0.5);
        _this.opt2.name = 'unity1_4Tick2';
        
        _this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt3.anchor.setTo(0.5);
       // _this.opt3.scale.setTo(0.5,0.5);
        _this.opt3.name = 'unity1_4Tick3';*/
        
        /*_this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);

        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        
     */   flagGroup1 = _this.add.group();
    	_this.ShakeObjectGroup1.add(_this.unity1_4backgrd1);
    	_this.ShakeObjectGroup2.add(_this.unity1_4backgrd2);
    	_this.ShakeObjectGroup3.add(_this.unity1_4backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
        /*flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        flagGroup1.add(_this.opt3);
       */ 
        flagGroup1.add(_this.unity1_4NumberKey);
    	
    	flagGroup1.x = 1000;
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
    	var tween = _this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        var tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	tween1.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        var tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	tween2.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        var tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	tween3.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        _this.group1childVisible = 1;
        _this.group2childVisible = 9;
        _this.group3childVisible = 4;
        
       /* _this.group1.onChildInputDown.add(_this.candyVoice, _this);
        _this.group2.onChildInputDown.add(_this.candyVoice1, _this);
        _this.group3.onChildInputDown.add(_this.candyVoice2, _this);
*/    },
    
    gotoSeventhQuestion:function()
    {
        //_this.stopVoice();
        if(_this.no11==0)
        {                                                       
          //  questionSoundEng.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundHin.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundKan.onStop.add(function(){ _this.getVoice();}, _this.; 
        }
        else
        {
            // _this.getVoice();
        }
        _this.questionNo = 7;       //2,5,7-------------------7
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
    	_this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.unity1_4NumberKey = _this.add.sprite(_this.world.centerX,_this.world.centerY-170,'unity1_4NumberKey');  
        _this.unity1_4NumberKey.name = "unity1_4NumberKey";
        _this.unity1_4NumberKey.anchor.setTo(0.5);
        _this.unity1_4NumberKey.scale.setTo(0.5);
        _this.unity1_4NumberKey.width = 70;
        _this.unity1_4NumberKey.height = 70;
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#46A1A7";
        _this.text.fontWeight = 'normal'
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        
        _this.unity1_4NumberKey.addChild(_this.text);
        
        _this.unity1_4backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd1.name = "candyBg";
        _this.unity1_4backgrd1.scale.setTo(0.5);
        _this.unity1_4backgrd1.anchor.setTo(0.5);
         _this.unity1_4backgrd1.name="unity1_4Tick1";
         _this.unity1_4backgrd1.frame=0;
        _this.unity1_4backgrd1.inputEnabled=true;
        _this.unity1_4backgrd1.input.priorityID = 2;
        _this.unity1_4backgrd1.input.useHandCursor=true;
        _this.unity1_4backgrd1.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.unity1_4backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd2.name = "candyBg";
        _this.unity1_4backgrd2.scale.setTo(0.5);
        _this.unity1_4backgrd2.anchor.setTo(0.5);
         _this.unity1_4backgrd2.name="unity1_4Tick2";
         _this.unity1_4backgrd2.frame=0;
        _this.unity1_4backgrd2.inputEnabled=true;
        _this.unity1_4backgrd2.input.priorityID = 2;
        _this.unity1_4backgrd2.input.useHandCursor=true;
        _this.unity1_4backgrd2.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.unity1_4backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd3.name = "candyBg";
        _this.unity1_4backgrd3.scale.setTo(0.5);
        _this.unity1_4backgrd3.anchor.setTo(0.5);
         _this.unity1_4backgrd3.name="unity1_4Tick3";
         _this.unity1_4backgrd3.frame=0;
        _this.unity1_4backgrd3.inputEnabled=true;
        _this.unity1_4backgrd3.input.priorityID = 2;
        _this.unity1_4backgrd3.input.useHandCursor=true;
        _this.unity1_4backgrd3.events.onInputDown.add(_this.correctAns,_this);

        
        _this.group1.x -= 300;
        _this.group3.x += 300; 

        _this.createCandy(_this.group1);
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
        _this.createCandy(_this.group2);
        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        _this.group2.name= "wrongAnswer1";
        
        _this.createCandy(_this.group3);
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');
        _this.group3.name= "wrongAnswer2";

        _this.group1.getChildAt(0).visible = false;
        _this.group1.getChildAt(1).visible = false;
        _this.group1.getChildAt(2).visible = false;
        _this.group1.getChildAt(4).visible = false;
        _this.group1.getChildAt(6).visible = false;
        _this.group1.getChildAt(7).visible = false;
        _this.group1.getChildAt(8).visible = false;
        
        _this.group2.getChildAt(1).visible = false;
        _this.group2.getChildAt(3).visible = false;
        _this.group2.getChildAt(5).visible = false;
        _this.group2.getChildAt(7).visible = false;
    
        _this.group3.getChildAt(6).visible = false;
        _this.group3.getChildAt(8).visible = false;
        
        /*_this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.5,0.5);
        _this.opt1.name = 'unity1_4Tick1';

        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt2.anchor.setTo(0.5);
        // _this.opt2.scale.setTo(0.5,0.5);
        _this.opt2.name = 'unity1_4Tick2';
        
        _this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt3.anchor.setTo(0.5);
       // _this.opt3.scale.setTo(0.5,0.5);
        _this.opt3.name = 'unity1_4Tick3';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.correctAns,_this);
        */
        flagGroup1 = _this.add.group();
    	_this.ShakeObjectGroup1.add(_this.unity1_4backgrd1);
    	_this.ShakeObjectGroup2.add(_this.unity1_4backgrd2);
    	_this.ShakeObjectGroup3.add(_this.unity1_4backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
        /*flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        flagGroup1.add(_this.opt3);
        */
        flagGroup1.add(_this.unity1_4NumberKey);
    	
    	flagGroup1.x = 1000;
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this.tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0); 
        
        _this.group1childVisible = 2;
        _this.group2childVisible = 5;
        _this.group3childVisible = 7;
        
       /* _this.group1.onChildInputDown.add(_this.candyVoice, _this);
        _this.group2.onChildInputDown.add(_this.candyVoice1, _this);
        _this.group3.onChildInputDown.add(_this.candyVoice2, _this);
   */ },

    gotoEighthQuestion:function()
    {
       // _this.stopVoice();
        if(_this.no11==0)
        {                                                       
           // questionSoundEng.onStop.add(function(){ _this.getVoice();}, _this.;   
           // questionSoundHin.onStop.add(function(){ _this.getVoice();}, _this.;   
           // questionSoundKan.onStop.add(function(){ _this.getVoice();}, _this.; 
        }
        else
        {
            // _this.getVoice();
        }
        _this.questionNo = 8;  //6,2,5----------------5
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
        _this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.unity1_4NumberKey = _this.add.sprite(_this.world.centerX,_this.world.centerY-170,'unity1_4NumberKey');  
        _this.unity1_4NumberKey.name = "unity1_4NumberKey";
        _this.unity1_4NumberKey.anchor.setTo(0.5);
        _this.unity1_4NumberKey.scale.setTo(0.5);
        _this.unity1_4NumberKey.width = 70;
        _this.unity1_4NumberKey.height = 70;
        
        _this.text = this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#46A1A7";
        _this.text.fontWeight = 'normal'
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        
        _this.unity1_4NumberKey.addChild(_this.text);
        
        _this.unity1_4backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd1.name = "candyBg";
        _this.unity1_4backgrd1.scale.setTo(0.5);
        _this.unity1_4backgrd1.anchor.setTo(0.5);
         _this.unity1_4backgrd1.name="unity1_4Tick1";
         _this.unity1_4backgrd1.frame=0;
        _this.unity1_4backgrd1.inputEnabled=true;
        _this.unity1_4backgrd1.input.priorityID = 2;
        _this.unity1_4backgrd1.input.useHandCursor=true;
        _this.unity1_4backgrd1.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.unity1_4backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd2.name = "candyBg";
        _this.unity1_4backgrd2.scale.setTo(0.5);
        _this.unity1_4backgrd2.anchor.setTo(0.5);
         _this.unity1_4backgrd2.name="unity1_4Tick2";
         _this.unity1_4backgrd2.frame=0;
        _this.unity1_4backgrd2.inputEnabled=true;
        _this.unity1_4backgrd2.input.priorityID = 2;
        _this.unity1_4backgrd2.input.useHandCursor=true;
        _this.unity1_4backgrd2.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.unity1_4backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd3.name = "candyBg";
        _this.unity1_4backgrd3.scale.setTo(0.5);
        _this.unity1_4backgrd3.anchor.setTo(0.5);
         _this.unity1_4backgrd3.name="unity1_4Tick3";
         _this.unity1_4backgrd3.frame=0;
        _this.unity1_4backgrd3.inputEnabled=true;
        _this.unity1_4backgrd3.input.priorityID = 2;
        _this.unity1_4backgrd3.input.useHandCursor=true;
        _this.unity1_4backgrd3.events.onInputDown.add(_this.correctAns,_this);

        
        _this.group1.x -= 300;
        _this.group3.x += 300; 
        
        _this.createflower(_this.group1);
        _this.createflower(_this.group2);
        _this.createflower(_this.group3);
        
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
       /* _this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.5,0.5);
        _this.opt1.name = 'unity1_4Tick1';
*/
        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        
       /* _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt2.anchor.setTo(0.5);
        // _this.opt2.scale.setTo(0.5,0.5);
        _this.opt2.name = "unity1_4Tick2";
      */  
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');

       /* _this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt3.anchor.setTo(0.5);
       // _this.opt3.scale.setTo(0.5,0.5);
        _this.opt3.name= "unity1_4Tick3";
      */  
        /*_this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.correctAns,_this);
        */
        _this.group1.getChildAt(3).visible = false;
        _this.group1.getChildAt(4).visible = false;
        _this.group1.getChildAt(5).visible = false;
        
        _this.group2.getChildAt(0).visible = false;
        _this.group2.getChildAt(1).visible = false;
        _this.group2.getChildAt(2).visible = false;
        _this.group2.getChildAt(4).visible = false;
        _this.group2.getChildAt(6).visible = false;
        _this.group2.getChildAt(7).visible = false;
        _this.group2.getChildAt(8).visible = false;
    
        _this.group3.getChildAt(1).visible = false;
        _this.group3.getChildAt(3).visible = false;
        _this.group3.getChildAt(5).visible = false;
        _this.group3.getChildAt(7).visible = false;
        
        flagGroup1 = _this.add.group();
        _this.ShakeObjectGroup1.add(_this.unity1_4backgrd1);
    	_this.ShakeObjectGroup2.add(_this.unity1_4backgrd2);
    	_this.ShakeObjectGroup3.add(_this.unity1_4backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
        /*flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        flagGroup1.add(_this.opt3);
      */  
        flagGroup1.add(_this.unity1_4NumberKey);
    	
    	flagGroup1.x = 1000;
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this.tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.flower1childVisible = 6;
        _this.flower2childVisible = 2;
        _this.flower3childVisible = 5;
   
       /* _this.group1.onChildInputDown.add(_this.flowerAudio, _this);
        _this.group2.onChildInputDown.add(_this.flowerAudio1, _this);
        _this.group3.onChildInputDown.add(_this.flowerAudio2, _this);
*/
    },

    gotoNinethQuestion:function()
    {
      	// _this.stopVoice();
        if(_this.no11==0)
        {                                                       
          //  questionSoundEng.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundHin.onStop.add(function(){ _this.getVoice();}, _this.;   
          //  questionSoundKan.onStop.add(function(){ _this.getVoice();}, _this.; 
        }
        else
        {
           //  _this.getVoice();
        } 
       
        _this.questionNo = 9; //5,6,4-------------------6
        
        _this.group1 = _this.add.group();
    	_this.group2 = _this.add.group();
    	_this.group3 = _this.add.group();
        
        _this.ShakeObjectGroup1 = _this.add.group();
    	_this.ShakeObjectGroup2 = _this.add.group();
    	_this.ShakeObjectGroup3 = _this.add.group();
        
        _this.unity1_4NumberKey = _this.add.sprite(_this.world.centerX,_this.world.centerY-170,'unity1_4NumberKey');  
        _this.unity1_4NumberKey.name = "unity1_4NumberKey";
        _this.unity1_4NumberKey.anchor.setTo(0.5);
        _this.unity1_4NumberKey.scale.setTo(0.5);
        _this.unity1_4NumberKey.width = 70;
        _this.unity1_4NumberKey.height = 70;
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#46A1A7";
        _this.text.fontWeight = 'normal'
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 60;
        
        _this.unity1_4NumberKey.addChild(_this.text);
        
        _this.unity1_4backgrd1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd1.name = "candyBg";
        _this.unity1_4backgrd1.scale.setTo(0.5);
        _this.unity1_4backgrd1.anchor.setTo(0.5);
         _this.unity1_4backgrd1.name="unity1_4Tick1";
         _this.unity1_4backgrd1.frame=0;
        _this.unity1_4backgrd1.inputEnabled=true;
        _this.unity1_4backgrd1.input.priorityID = 2;
        _this.unity1_4backgrd1.input.useHandCursor=true;
        _this.unity1_4backgrd1.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.unity1_4backgrd2 = _this.add.sprite(_this.world.centerX,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd2.name = "candyBg";
        _this.unity1_4backgrd2.scale.setTo(0.5);
        _this.unity1_4backgrd2.anchor.setTo(0.5);
         _this.unity1_4backgrd2.name="unity1_4Tick2";
         _this.unity1_4backgrd2.frame=0;
        _this.unity1_4backgrd2.inputEnabled=true;
        _this.unity1_4backgrd2.input.priorityID = 2;
        _this.unity1_4backgrd2.input.useHandCursor=true;
        _this.unity1_4backgrd2.events.onInputDown.add(_this.correctAns,_this);

        
        _this.unity1_4backgrd3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY,'unity1_4backgrd');
        _this.unity1_4backgrd3.name = "candyBg";
        _this.unity1_4backgrd3.scale.setTo(0.5);
        _this.unity1_4backgrd3.anchor.setTo(0.5);
         _this.unity1_4backgrd3.name="unity1_4Tick3";
         _this.unity1_4backgrd3.frame=0;
        _this.unity1_4backgrd3.inputEnabled=true;
        _this.unity1_4backgrd3.input.priorityID = 2;
        _this.unity1_4backgrd3.input.useHandCursor=true;
        _this.unity1_4backgrd3.events.onInputDown.add(_this.wrongAns,_this);

        
        _this.group1.x -= 300;
        _this.group3.x += 300; 

        _this.createflower(_this.group1);
        _this.createflower(_this.group2);
        _this.createflower(_this.group3);
        
        _this.group1.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group1.callAll('animations.play', 'animations', 'spin');
        
        /*_this.opt1 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.5,0.5);
        _this.opt1.name = 'unity1_4Tick1';
*/
        _this.group2.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group2.callAll('animations.play', 'animations', 'spin');
        
       /* _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt2.anchor.setTo(0.5);
        // _this.opt2.scale.setTo(0.5,0.5);
        _this.opt2.name = "unity1_4Tick2";
       */ 
        _this.group3.callAll('animations.add', 'animations', 'spin', 0, 10, true);
        _this.group3.callAll('animations.play', 'animations', 'spin');

        /*_this.opt3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY+170, 'unity1_4Tick');
    	_this.opt3.anchor.setTo(0.5);
       // _this.opt3.scale.setTo(0.5,0.5);
        _this.opt3.name= "unity1_4Tick3";
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);

        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
      */  
        _this.group1.getChildAt(1).visible = false;
        _this.group1.getChildAt(3).visible = false;
        _this.group1.getChildAt(5).visible = false;
        _this.group1.getChildAt(7).visible = false;
  
        _this.group2.getChildAt(3).visible = false;
        _this.group2.getChildAt(4).visible = false;
        _this.group2.getChildAt(5).visible = false;
        
        _this.group3.getChildAt(1).visible = false;
        _this.group3.getChildAt(3).visible = false;
        _this.group3.getChildAt(4).visible = false;
        _this.group3.getChildAt(5).visible = false;
        _this.group3.getChildAt(7).visible = false;

        flagGroup1 = _this.add.group();
        _this.ShakeObjectGroup1.add(_this.unity1_4backgrd1);
    	_this.ShakeObjectGroup2.add(_this.unity1_4backgrd2);
    	_this.ShakeObjectGroup3.add(_this.unity1_4backgrd3);
        
    	_this.ShakeObjectGroup1.add(_this.group1);
    	_this.ShakeObjectGroup2.add(_this.group2);
    	_this.ShakeObjectGroup3.add(_this.group3);
        
        /*flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        flagGroup1.add(_this.opt3);
       */ 
        flagGroup1.add(_this.unity1_4NumberKey);
    	
    	flagGroup1.x = 1000;
    	_this.ShakeObjectGroup1.x = 1000;
    	_this.ShakeObjectGroup2.x = 1000;
    	_this.ShakeObjectGroup3.x = 1000;
        
    	_this.tween = _this.add.tween(flagGroup1);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween1 = _this.add.tween(_this.ShakeObjectGroup1);
    	_this.tween1.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween2 = _this.add.tween(_this.ShakeObjectGroup2);
    	_this.tween2.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween3 = _this.add.tween(_this.ShakeObjectGroup3);
    	_this.tween3.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.flower1childVisible = 5;
        _this.flower2childVisible = 6;
        _this.flower3childVisible = 4;
   
       /* _this.group1.onChildInputDown.add(_this.flowerAudio, _this);
        _this.group2.onChildInputDown.add(_this.flowerAudio1, _this);
        _this.group3.onChildInputDown.add(_this.flowerAudio2, _this);
*/
    },

	changeQuestion:function()
	{
		flagGroup1.destroy();
		if(_this.no11<6)
		{
            count++;
			_this.getQuestion();
		}
		else
		{
            //console.log("gameEnd");
            _this.stopVoice();
            _this.state.start('level2');
		}
	},
   
    removeEverthing:function() 
    {
        _this.no11++;
        _this.count1++;
        //console.log("--------------------------"+_this.no11);
        
        if(_this.no11<6)
        {
            wrong = true;
            _this.timer1.stop();
            //console.log("removeEverthing");
            _this.MaintweenDestroy = _this.add.tween(_this.ShakeObjectGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);

            _this.MaintweenDestroy1 = _this.add.tween(_this.ShakeObjectGroup2);
            _this.MaintweenDestroy1.to({ x: -1000}, 0, 'Linear', true, 0);

            _this.MaintweenDestroy2 = _this.add.tween(_this.ShakeObjectGroup3);
            _this.MaintweenDestroy2.to({ x: -1000}, 0, 'Linear', true, 0);

            _this.MaintweenDestroy2 = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy2.to({ x: -1000}, 0, 'Linear', true, 0);

            _this.MaintweenDestroy2 = _this.add.tween(_this.ShakeObjectGroup4);
            _this.MaintweenDestroy2.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("here its");
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.count =0;
                _this.ShakeObjectGroup1.destroy();
                _this.ShakeObjectGroup2.destroy();
                _this.ShakeObjectGroup3.destroy();
                _this.ShakeObjectGroup4.destroy();
                _this.getQuestion();
            },_this);   
        }
        else
        {
            _this.stopVoice();
            _this.timer1.stop();
            _this.timer1=null;
            _this.state.start('unity1_4Score');
        }
    },
    
	correctAns:function(target)
	{
        //console.log("correct Answer"+target.name);
        //console.log(_this.questionNo);
        target.frame = 1;
        _this.ShakeObjectGroup4 = _this.add.group();
        _this.group1Anim = _this.add.group();
        
        _this.noofAttempts++;
       /* _this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level1.4_"+target.name, 
            access_token: window.acctkn 
        } 

        absdsjsapi.saveInteractEvent(_this.interactEvent);*/


        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
         _this.currentTime = window.timeSaveFunc();
        
        _this.saveAsment = 
        { 
            id_game_play: _this.savedVar,
            id_question: _this.questionid,  
            pass: "yes",
            time2answer: _this.AnsTimerCount,
            attempts: _this.noofAttempts,
            date_time_submission: _this.currentTime, 
            access_token: window.acctkn 
        }

      //  absdsjsapi.saveAssessment(_this.saveAsment);

      telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
        if(_this.questionNo==1)
        {
            _this.createCandyright(_this.group1Anim);
            _this.group1Anim.x -= 300;
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group1.destroy();
            _this.group1Anim.getChildAt(5).visible = false;
        }
        else if(_this.questionNo == 2)
        {
            _this.group1Anim.x -= 300;
            _this.createflowerRight(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group1.destroy();
            _this.group1Anim.getChildAt(1).visible = false;
            _this.group1Anim.getChildAt(3).visible = false;
            _this.group1Anim.getChildAt(4).visible = false;
            _this.group1Anim.getChildAt(5).visible = false;
            _this.group1Anim.getChildAt(7).visible = false;
        } 
        else if(_this.questionNo == 3)
        {
            _this.group1Anim.x -= 300;
            _this.createballright(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group1.destroy();
            
            _this.group1Anim.getChildAt(1).visible = false;
            _this.group1Anim.getChildAt(2).visible = false;
            _this.group1Anim.getChildAt(3).visible = false;
            _this.group1Anim.getChildAt(7).visible = false;
            _this.group1Anim.getChildAt(8).visible = false;
            _this.group1Anim.getChildAt(9).visible = false;
        }  
        else if(_this.questionNo == 4)
        {
            _this.group1Anim.x -= 300;
            _this.createballright(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group1.destroy();
        
            _this.group1Anim.getChildAt(1).visible = false;
            _this.group1Anim.getChildAt(2).visible = false;
            _this.group1Anim.getChildAt(3).visible = false;
            _this.group1Anim.getChildAt(4).visible = false;
            _this.group1Anim.getChildAt(6).visible = false;
            _this.group1Anim.getChildAt(7).visible = false;
            _this.group1Anim.getChildAt(8).visible = false;
            _this.group1Anim.getChildAt(9).visible = false;
        }
        else if(_this.questionNo == 5)
        {
            //_this.group1Anim.x -= 300;
            _this.createballright(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group2.destroy();
            
            _this.group1Anim.getChildAt(1).visible = false;
            _this.group1Anim.getChildAt(2).visible = false;
            _this.group1Anim.getChildAt(3).visible = false;
            _this.group1Anim.getChildAt(5).visible = false;
            _this.group1Anim.getChildAt(7).visible = false;
            _this.group1Anim.getChildAt(8).visible = false;
            _this.group1Anim.getChildAt(9).visible = false;
        }
        else if(_this.questionNo == 6)
        {
            //_this.group1Anim.x -= 300;
            _this.createCandyright(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group2.destroy();
            
        }
        else if(_this.questionNo == 7)
        {
            _this.group1Anim.x += 300;
            _this.createCandyright(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            
            _this.group3.destroy();
           
            _this.group1Anim.getChildAt(7).visible = false;
            _this.group1Anim.getChildAt(9).visible = false;
        }
        else if(_this.questionNo == 8)
        {
            _this.group1Anim.x += 300;
            _this.createflowerRight(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            _this.group3.destroy();
            
            _this.group1Anim.getChildAt(1).visible = false;
            _this.group1Anim.getChildAt(3).visible = false;
            _this.group1Anim.getChildAt(5).visible = false;
            _this.group1Anim.getChildAt(7).visible = false;
        }
        else
        {
            //_this.group1Anim.x += 300;
            _this.createflowerRight(_this.group1Anim);
            _this.group1Anim.callAll('animations.add', 'animations', 'spin', 0, 10, true);
            _this.group1Anim.callAll('animations.play', 'animations', 'spin');
            
            _this.group2.destroy();

            _this.group1Anim.getChildAt(3).visible = false;
            _this.group1Anim.getChildAt(4).visible = false;
            _this.group1Anim.getChildAt(5).visible = false;
        }
        
         target.events.onInputDown.removeAll();
        
        _this.ShakeObjectGroup4.add(_this.group1Anim);
        _this.speakerbtn.inputEnabled=false;
        _this.celebration = true;
        
        _this.click3 = _this.add.audio('ClickSound');
        _this.click3.play();
        _this.time.events.add(100,function(){
            _this.cmusic = _this.add.audio('celebr');
            _this.cmusic.play();
        },_this);
        _this.time.events.add(2200, _this.removeEverthing, _this);
        //console.log("correct target:"+target);
        
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        //console.log("starAnim:"+_this.starAnim);
        
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play();     
	},

    wrongAns:function(target)
	{
        //console.log("wrong"+target.name);
        //console.log("wrong");
        //console.log("wrong target :"+target.name);
        //target.tint = 0xA9A9A9;
        
        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level1.4_"+target.name,  
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        if(target.name=='unity1_4Tick1')
        {
            _this.shake.shake(10, _this.ShakeObjectGroup1);
        } 
        else if(target.name=='unity1_4Tick2')
        {
            _this.shake.shake(10, _this.ShakeObjectGroup2);
        }
        else if(target.name=='unity1_4Tick3')
        {
            _this.shake.shake(10, _this.ShakeObjectGroup3);
        }
           
        _this.click4 = _this.add.audio('ClickSound');
        _this.click4.play();
        _this.time.events.add(100,function(){
		  _this.wmusic = _this.add.audio('waudio');
		  _this.wmusic.play();
        },_this);
       _this.time.events.add(500, function(){ target.frame = 0;}, _this);
	},
    
    getVoice:function()
    {
        _this.stopVoice();
        //console.log("fffffff"+_this.qArrays[_this.no11]);
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.no11])
        {
            case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:if(selctedLang.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/English/question1.4.mp3");
                    }
                    else if(selctedLang.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Hindi/question1.4Hin.mp3");
                    }
                    else if(selctedLang.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Kannada/question1.4kan.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/1.4/question1.4.mp3");
                    }
					else if(window.languageSelected=="Marathi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Marathi/question1.4.mp3");
        }
		else if(window.languageSelected=="Telugu")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Telugu/question1.4.mp3");
        }
		else if(window.languageSelected=="Tamil")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Tamil/question1.4.mp3");
        }
		else if(window.languageSelected=="Urdu")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Urdu/question1.4.mp3");
        }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.4/Odiya/1.4.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },


    shutdown:function()
    {
        _this.stopVoice();
    }

};