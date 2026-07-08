Game.comparison_NSCG_1_1level2=function(){};

Game.comparison_NSCG_1_1level2.prototype ={
    
    init:function(param,score,timerStopVar)
    {
        _this= this;
        this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;
       // telInitializer.gameIdInit("Comparison4_2",gradeSelected);

    },
    
	create:function(game)
    {
        console.log("second level");
         _this.amplify = null;

        _this.sceneCount = 0;

        _this.qArrays;
        _this.count;
        _this.count1=3;
        _this.speakerbtn;
        _this.celebration;
        _this.CaterpillarGrp;
        
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
        _this.wrong = true;
        _this.count;
        _this.clickSound;
        _this.change = 0;
      
        _this.starsGroup;
       
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        
        _this.rightCount = 0;
        _this.no11 = 0;
      
        _this.count=0;
        _this.count1=3;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
        
        _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Unity4_2BG_01');
        
         

         if(window.languageSelected=="English")
                    {
                       _this.soundurl =window.baseUrl+"questionSounds/4.2/English/4.2.mp3";
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.soundurl =window.baseUrl+"questionSounds/4.2/Hindi/4.2.mp3";
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.soundurl =window.baseUrl+"questionSounds/4.2/Kannada/4.2.mp3";
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.soundurl = window.baseUrl+"questionSounds/Gujarati/4.2/4.2.mp3";
                    }
					else if(window.languageSelected=="Marathi")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/4.2/Marathi/4.2.mp3";
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/4.2/Telugu/4.2.mp3";
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/4.2/Tamil/4.2.mp3";
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/4.2/Urdu/4.2.mp3";
                    }
                    else
                    {
                        _this.soundurl =window.baseUrl+"questionSounds/4.2/Odiya/4.2.mp3";
                        
                    }


         commonNavBar.addNavBar(game,_this.soundurl,"numbersense3");
         commonNavBar.addTimerToTheGame(game,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        
         commonNavBar.addScore(game,this.score);
    
         this.hintparams=['NSCG1.1','level2',false,false,true,1];
         commonNavBar.addHint(game,this.hintparams);
        
         _this.generateStarsForTheScene(9);

        _this.getQuestion();
    
        //language selection sounds
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
    
        if(window.languageSelected=="English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2/English/4.2.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2/Hindi/4.2.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2/Kannada/4.2.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.2/4.2.mp3");
        }
		else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2/Marathi/4.2.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2/Telugu/4.2.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2/Tamil/4.2.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2/Urdu/4.2.mp3");
                    }
        else 
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2/Odiya/4.2.mp3");
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        
        _this.time.events.repeat(Phaser.Timer.SECOND * 8, 8, this.createBall, this);
    },
    
    createBall:function()
    {
        this.bubble = this.add.audio('bubble');
        _this.bubble.play();
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
    	console.log("getQuestion :"+_this.no11);
        console.log("getQuestion :"+_this.qArrays[_this.no11]);
        commonNavBar.startTimer(this);
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        _this.sceneCount++;
        
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
       
        _this.questionid = 1;
        
       // _this.no11 = 9;
        commonNavBar.speakerbtn.inputEnabled=true;
        commonNavBar.speakerbtn.events.onInputDown.add(function(){
            
            commonNavBar.speakerClicked(_this.soundurl);
        },this);
        
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
            case 10: _this.gotoTenthQuestion();
    				break;
    	}
        telInitializer2.gameQuestionStart(this,_this.questionid);
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
               // console.log("here");
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
    
            _this.starsGroup.create(_this.world.centerX, 10, 'cstarAnim');
            
            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
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
        _this.starsGroup.getChildAt(3).frame = 2;
       
    },
    
    gotoFirstQuestion:function()
    {  
      //  console.log("gotoFirstQuestion");
        _this.questionNo = 1;
        
         //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=2;
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=2;
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_2crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);

        _this.tick= _this.add.sprite(_this.world.centerX-60,_this.world.centerY+180,'Unity4_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.5,1.5);
        
        _this.tick.name = 'tick1';
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.correctAns,_this);
        
        _this.crossMark= _this.add.sprite(_this.world.centerX+60,_this.world.centerY+180,'Unity4_2crossMark');
        _this.crossMark.anchor.setTo(0.5);
        _this.crossMark.scale.setTo(1.5,1.5);
        
        _this.crossMark.name = 'tick2';
        _this.crossMark.inputEnabled = true;
        _this.crossMark.input.useHandCursor = true;
        _this.crossMark.events.onInputDown.add(_this.wrongAns,_this);
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.crossMark);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
                    
    },
    
    gotoSecondQuestion:function()
    {                                  
      //  console.log("gotoSecondQuestion");
        _this.questionNo=2;
       
         //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=3;
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame = 4;
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_2crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        _this.tick= _this.add.sprite(_this.world.centerX-60,_this.world.centerY+180,'Unity4_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.5,1.5);
        
        _this.tick.name = 'tick1';
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.crossMark= _this.add.sprite(_this.world.centerX+60,_this.world.centerY+180,'Unity4_2crossMark');
        _this.crossMark.anchor.setTo(0.5);
        _this.crossMark.scale.setTo(1.5,1.5);
        
        _this.crossMark.name = 'tick2';
        _this.crossMark.inputEnabled = true;
        _this.crossMark.input.useHandCursor = true;
        _this.crossMark.events.onInputDown.add(_this.correctAns,_this);
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.crossMark);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           
         
    },
   
    gotoThirdQuestion:function()
    {
      //  console.log("gotoThirdQuestion");
        _this.questionNo = 3;
       
         //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=4;
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=6;
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_2crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        _this.tick= _this.add.sprite(_this.world.centerX-60,_this.world.centerY+180,'Unity4_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.5,1.5);
        
        _this.tick.name = 'tick1';
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.crossMark= _this.add.sprite(_this.world.centerX+60,_this.world.centerY+180,'Unity4_2crossMark');
        _this.crossMark.anchor.setTo(0.5);
        _this.crossMark.scale.setTo(1.5,1.5);
        
        _this.crossMark.name = 'tick2';
        _this.crossMark.inputEnabled = true;
        _this.crossMark.input.useHandCursor = true;
        _this.crossMark.events.onInputDown.add(_this.correctAns,_this);
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.crossMark);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           
    },
   
    gotoFourthQuestion:function()
    {
      //  console.log("gotoFourthQuestion");
        _this.questionNo = 4;
        
          //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=5;
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=5;
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_2crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        _this.tick= _this.add.sprite(_this.world.centerX-60,_this.world.centerY+180,'Unity4_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.5,1.5);
        
        _this.tick.name = 'tick1';
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.correctAns,_this);
        
        _this.crossMark= _this.add.sprite(_this.world.centerX+60,_this.world.centerY+180,'Unity4_2crossMark');
        _this.crossMark.anchor.setTo(0.5);
        _this.crossMark.scale.setTo(1.5,1.5);
        
        _this.crossMark.name = 'tick2';
        _this.crossMark.inputEnabled = true;
        _this.crossMark.input.useHandCursor = true;
        _this.crossMark.events.onInputDown.add(_this.wrongAns,_this);
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.crossMark);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           
         
    },

    gotoFifthQuestion:function()
    {
       // console.log("gotoFifthQuestion");
        _this.questionNo = 5;
    
          //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=1;
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=1;
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_2crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        _this.tick= _this.add.sprite(_this.world.centerX-60,_this.world.centerY+180,'Unity4_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.5,1.5);
        
        _this.tick.name = 'tick1';
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.correctAns,_this);
        
        _this.crossMark= _this.add.sprite(_this.world.centerX+60,_this.world.centerY+180,'Unity4_2crossMark');
        _this.crossMark.anchor.setTo(0.5);
        _this.crossMark.scale.setTo(1.5,1.5);
        
        _this.crossMark.name = 'tick2';
        _this.crossMark.inputEnabled = true;
        _this.crossMark.input.useHandCursor = true;
        _this.crossMark.events.onInputDown.add(_this.wrongAns,_this);
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.crossMark);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
    },

    gotoSixthQuestion:function()
    {
      //  console.log("gotoSixthQuestion");
        _this.questionNo = 6;
        
         //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=4;
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=1;
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_2crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        _this.tick= _this.add.sprite(_this.world.centerX-60,_this.world.centerY+180,'Unity4_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.5,1.5);
        
        _this.tick.name = 'tick1';
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.crossMark= _this.add.sprite(_this.world.centerX+60,_this.world.centerY+180,'Unity4_2crossMark');
        _this.crossMark.anchor.setTo(0.5);
        _this.crossMark.scale.setTo(1.5,1.5);
        
        _this.crossMark.name = 'tick2';
        _this.crossMark.inputEnabled = true;
        _this.crossMark.input.useHandCursor = true;
        _this.crossMark.events.onInputDown.add(_this.correctAns,_this);
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.crossMark);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           
    },
    
    gotoSeventhQuestion:function()
    {  
       // console.log("gotoFirstQuestion");
        _this.questionNo = 7;
        
         //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame =0;
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=1;
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_2crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        _this.tick= _this.add.sprite(_this.world.centerX-60,_this.world.centerY+180,'Unity4_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.5,1.5);
        
        _this.tick.name = 'tick1';
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.crossMark= _this.add.sprite(_this.world.centerX+60,_this.world.centerY+180,'Unity4_2crossMark');
        _this.crossMark.anchor.setTo(0.5);
        _this.crossMark.scale.setTo(1.5,1.5);
        
        _this.crossMark.name = 'tick2';
        _this.crossMark.inputEnabled = true;
        _this.crossMark.input.useHandCursor = true;
        _this.crossMark.events.onInputDown.add(_this.correctAns,_this);
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.crossMark);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
         
    },
    
    gotoEighthQuestion:function()
    {  
       // console.log("gotoFirstQuestion");
        _this.questionNo = 98;
        
          //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=5;
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=4;
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_2crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
    
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        _this.tick= _this.add.sprite(_this.world.centerX-60,_this.world.centerY+180,'Unity4_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.5,1.5);
        
        _this.tick.name = 'tick1';
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.crossMark= _this.add.sprite(_this.world.centerX+60,_this.world.centerY+180,'Unity4_2crossMark');
        _this.crossMark.anchor.setTo(0.5);
        _this.crossMark.scale.setTo(1.5,1.5);
        
        _this.crossMark.name = 'tick2';
        _this.crossMark.inputEnabled = true;
        _this.crossMark.input.useHandCursor = true;
        _this.crossMark.events.onInputDown.add(_this.correctAns,_this);
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.crossMark);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           
    },
    
    gotoNinethQuestion:function()
    {
      //  console.log("gotoNinethQuestion");
        _this.questionNo = 9;
        
          //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame=2;
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=6;
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_2crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        _this.tick= _this.add.sprite(_this.world.centerX-60,_this.world.centerY+180,'Unity4_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.5,1.5);
        
        _this.tick.name = 'tick1';
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.crossMark= _this.add.sprite(_this.world.centerX+60,_this.world.centerY+180,'Unity4_2crossMark');
        _this.crossMark.anchor.setTo(0.5);
        _this.crossMark.scale.setTo(1.5,1.5);
        
        _this.crossMark.name = 'tick2';
        _this.crossMark.inputEnabled = true;
        _this.crossMark.input.useHandCursor = true;
        _this.crossMark.events.onInputDown.add(_this.correctAns,_this);
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.crossMark);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           
    },
    
    gotoTenthQuestion:function()
    {  
       // console.log("gotoTenthQuestion");
        _this.questionNo = 10;
        
         //fish box
        _this.fishbox1= _this.add.sprite(_this.world.centerX-300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox1.anchor.setTo(0.5);
        _this.fishbox1.scale.setTo(1,1);
        _this.fishbox1.frame =6;
        
        _this.fishbox2= _this.add.sprite(_this.world.centerX+300,_this.world.centerY-10,'Unity4_2fishbox');
        _this.fishbox2.anchor.setTo(0.5);
        _this.fishbox2.scale.setTo(1,1);
        _this.fishbox2.frame=6;
        
        // crocodile  Idle
        _this.crocodileIdle= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_2crocodileIdle');
        _this.crocodileIdle.anchor.setTo(0.5);
        _this.crocodileIdle.scale.setTo(1,1);
        
        _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
        _this.crocodileAni.play(10,true);
        
        _this.tick= _this.add.sprite(_this.world.centerX-60,_this.world.centerY+180,'Unity4_2tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.5,1.5);
        
        _this.tick.name = 'tick1';
        _this.tick.inputEnabled = true;
        _this.tick.input.useHandCursor = true;
        _this.tick.events.onInputDown.add(_this.correctAns,_this);
        
        _this.crossMark= _this.add.sprite(_this.world.centerX+60,_this.world.centerY+180,'Unity4_2crossMark');
        _this.crossMark.anchor.setTo(0.5);
        _this.crossMark.scale.setTo(1.5,1.5);
        
        _this.crossMark.name = 'tick2';
        _this.crossMark.inputEnabled = true;
        _this.crossMark.input.useHandCursor = true;
        _this.crossMark.events.onInputDown.add(_this.wrongAns,_this);
      
        _this.fishGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.fishGrp.add(_this.fishbox1);
        _this.fishGrp.add(_this.fishbox2);
        _this.fishGrp.add(_this.crocodileIdle);
        
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.crossMark);

        _this.fishGrp.x = 1000;
        _this.tween = _this.add.tween(_this.fishGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
         
    },
    
    
 	changeQuestion:function()
	{
		if(_this.no11<3)
		{
            count++;
			_this.getQuestion();
		}
		else
		{
           // console.log("gameEnd");
            _this.stopVoice();
            //_this.state.start('level2');
		}
	},
    
    checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },  
   
	correctAns:function(target)
	{
        telInitializer2.gameCorrectAns();
		commonNavBar.disableHintIcon();
       // console.log("correct Answer");
      //  console.log("_this.questionNo :"+_this.questionNo);
         _this.crossMark.inputEnabled=false;
        _this.tick.inputEnabled=false;
        if(target.name=='tick1')
        {
            _this.tick.frame = 1;
		if(_this.crocodileIdle.key === 'Unity4_2crocodileIdle')
			{
				_this.crocodileIdle.loadTexture('Unity4_2crocodileEqual', 0, false);
                _this.crocodileIdle.animations.add('openMouth');
                _this.crocodileIdle.animations.play('openMouth',10,false);
			}
        }
        
        if(target.name=='tick2')
        {
            _this.crossMark.frame =1;
			if(_this.crocodileIdle.key === 'Unity4_2crocodileIdle')
				{
					//_this.crocodileIdle.loadTexture('Unity4_2crocodileEqual',0, false);
					_this.crocodileIdle.animations.add('Level321_LeverYellow',[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
					_this.crocodileIdle.animations.play('Level321_LeverYellow',10,true);
				}
        }

        _this.noofAttempts++;

        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level4.2_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

        // _this.currentTime = window.timeSaveFunc();

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
       // telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

        

        commonNavBar.speakerbtn.inputEnabled=false;
        _this.celebration = true;

        commonNavBar.playClickSound();

        commonNavBar.playCelebrationSound();
        this.Stararr.push(3);
        
        _this.time.events.add(3200, _this.removeEverthing, _this);
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star',[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
        _this.anim4.play(10,false); 
        
    
	},

    wrongAns:function(target)
	{
        telInitializer2.gameWrongAns();
		commonNavBar.disableHintIcon();
      //  console.log("wrong function");
        _this.crossMark.inputEnabled=false;
        _this.tick.inputEnabled=false;
        _this.wrong = false;
        
        if(target.name=='tick1')
        {
            _this.tick.frame = 1;
        }
        
        if(target.name=='tick2')
        {
            _this.crossMark.frame =1;
        }
      
        _this.noofAttempts++;
        _this.starsGroup.getChildAt(_this.count1).frame = 1;
        this.Stararr.push(1);
       //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level4.3.1_",  
            access_token: window.acctkn 
        }

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
       // console.log("_this.crocodileIdle :"+_this.crocodileIdle.key);
        
        if(_this.crocodileIdle.key === 'Unity4_2crocodileIdle')
        {
            _this.crocodileIdle.loadTexture('Unity4_2crocodileEyerolling', 30, false);
            _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
            _this.crocodileAni.play(10,false);
        }
        
         _this.shake.shake(10, _this.crocodileIdle);
        
        //  Set a TimerEvent to occur after 2 seconds
        _this.time.events.add(1500, function()
        {
           // console.log("344444444444");
            
            if(target.name == 'tick1')
            {
                _this.tick.frame = 0;
            }

            if(target.name=='tick2')
            {
                _this.crossMark.frame =0;
            }

        
            _this.crocodileIdle.loadTexture('Unity4_2crocodileIdle', 0, false);
            _this.crocodileAni= _this.crocodileIdle.animations.add('walk');
            _this.crocodileAni.play(10,true);
            
        }, this);
        
        commonNavBar.playClickSound();
        
		commonNavBar.playWrongCelebrationSound();
    
        _this.time.events.add(2000,_this.removeEverthing,_this);
	},
    
    removeEverthing:function() 
    {
       // console.log("removeEverthing");
       // console.log("Question Number :"+_this.no11);
        
        _this.crossMark.frame =0;
        _this.tick.frame = 0;
        
        _this.no11++;
       
        _this.wrong = true;
      
        if(_this.no11<3)
        {
           // wrong = true;
            var timerStopVar = commonNavBar.stopTimer();
            _this.MaintweenDestroy = _this.add.tween(_this.fishGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.optionGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy.onComplete.add(function()
            {
                _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
                _this.count1++;
                _this.count =0;
                _this.fishGrp.destroy();
                _this.optionGrp.destroy();
				commonNavBar.enableHintIcon();
                _this.getQuestion();
            },_this);  
        }
        else
        {
			commonNavBar.enableHintIcon();
            //_this.stopVoice();
            var timerStopVar = commonNavBar.stopTimer();

            commonNavBar.stopVoice();
                                commonNavBar.navBar = null;
                                commonNavBar.backbtn = null;
                                commonNavBar.mcIcon = null;
                                commonNavBar.speakerbtn = null;

            _this.state.start('comparison_NSCG_1_1level3',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
        }
    },
    
    getVoice:function()
    {
        _this.stopVoice();
       // console.log("fffffff"+_this.qArrays[_this.no11]);
        
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
            case 8: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2/English/4.2.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.2/Hindi/4.2.mp3");
                    }
                     else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.2/Kannada/4.2.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.2/2.2.mp3");
                    }
					else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2/Marathi/4.2.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2/Telugu/4.2.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2/Tamil/4.2.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2/Urdu/4.2.mp3");
                    }
                    else 
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.2/Odiya/4.2.mp3");//window.baseUrl+"
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },

    shutdown:function()
    {
        _this.stopVoice();

        if(this.bubble)
        {
            if(this.bubble.isPlaying)
            {
                this.bubble.stop();
                this.bubble = null;
            }
        }
    }

};