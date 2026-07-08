Game.comparison_NSCG_1_1level3=function(){};

Game.comparison_NSCG_1_1level3.prototype ={
    
    init:function(param,score,timerStopVar)
    {
        _this= this;
        this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;
       // telInitializer.gameIdInit("Comparison4_3_1",gradeSelected);
       commonNavBar.level2Bool = true;
    },
    
	create:function(game)
    {

        this.playedwithHint = false;
        this.completelyplayed = false;

        _this.amplify = null;
        
        _this.qArrays;
        _this.count;
        _this.count1=6;
        _this.speakerbtn;
        _this.celebration;
        _this.CaterpillarGrp;
        //_this.correct;

        _this.sceneCount = 0;
        
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
        _this.minutes = 0
        _this.counterForTimer = 0;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=6;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        
        _this.qArrays = [1,2,3,4,5,6,7,8];
        
        _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Unity4_2BG_01');
        
        

        if(window.languageSelected=="English")
                    {
                       _this.soundurl =window.baseUrl+"questionSounds/4.3.1/English/4.3.mp3";
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.soundurl =window.baseUrl+"questionSounds/4.3.1/Hindi/4.3.mp3";
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.soundurl =window.baseUrl+"questionSounds/4.3.1/Kannada/4.3.mp3";
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.soundurl = window.baseUrl+"questionSounds/Gujarati/4.3.1/4.3.mp3";
                    }
					else if(window.languageSelected=="Marathi")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/4.3.1/Marathi/4.3.mp3";
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/4.3.1/Telugu/4.3.mp3";
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/4.3.1/Tamil/4.3.mp3";
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.soundurl = window.baseUrl+"questionSounds/4.3.1/Urdu/4.3.mp3";
                    }
                    else
                    {
                        _this.soundurl =window.baseUrl+"questionSounds/4.3.1/Odiya/4.3.1.mp3";
                        
                    }


         commonNavBar.addNavBar(game,_this.soundurl,"numbersense3");
         commonNavBar.addTimerToTheGame(game,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
         
         commonNavBar.addScore(game,this.score);
        // commonNavBar.getVoice(_this.soundurl);
         this.hintparams=['NSCG1.1','level3',false,false,true,1];
         commonNavBar.addHint(game,this.hintparams);
        
         _this.generateStarsForTheScene(9);

        _this.getQuestion();
    
        //language selection sounds
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
    
        if(window.languageSelected=="English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/English/4.3.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/Hindi/4.3.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/Kannada/4.3.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
             _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.3.1/4.3.mp3");
        }
		else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/Marathi/4.3.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/Telugu/4.3.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/Tamil/4.3.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/Urdu/4.3.mp3");
                    }
        else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/Odiya/4.3.1.mp3");
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
    	//console.log("getQuestion :"+_this.no11);
        //console.log("getQuestion :"+_this.qArrays[_this.no11]);
        commonNavBar.startTimer(this);
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        _this.sceneCount++;
        
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
       
        _this.questionid = 1;
        
        //_this.no11 = 0;
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
        _this.starsGroup.getChildAt(6).frame = 2;
        _this.starsGroup.getChildAt(7).frame = 0;
        _this.starsGroup.getChildAt(8).frame = 0;
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
    
    onDragStart:function(target)
    {
        //console.log("onDragStart");
       
        _this.noofAttempts++;
        
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level4.3.1_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
       // commonNavBar.stopTimer();
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
        //telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
         
        _this.vx = target.x;   
        _this.vy = target.y; 
        
        target.input.enableDrag(true);

        commonNavBar.playClickSound();

        target.events.onDragStop.add(function(target)
        {
            _this.click1 = this.add.audio('snapSound');
            _this.click1.play();
            
            //console.log("target.key :"+target.key);
            
            for(var i=0;i<_this.dropboxGrp.length;i++)
            {
                if(_this.checkOverlap(target,_this.graphics1) && (target.name == 'tick1'))
                {
                    //console.log("target.name:"+target.name);

                    //_this.dropboxGrp.getChildAt(0).loadTexture(target.key,0,false);
                    
                    _this.correctAns();
                    
                    target.x = _this.dropbox.x;
                    target.y = _this.dropbox.y;
                    
                   //_this.dropbox.frame = 5;
                    
                    _this.drop= _this.dropbox.animations.add('walk');
                    _this.drop.play(10,true);
                    
                    //target.visible = false;
                    target.inputEnabled = false;
                    target.input.enableDrag(false);
                    target.events.onInputDown.removeAll(); 
                    
                    break;
                }
                else if(_this.checkOverlap(target,_this.graphics1) && (target.name != 'tick1'))
                {
                    _this.wrongAns();
                    target.events.onDragStop.removeAll(); 
                    target.x = _this.dropbox.x;
                    target.y = _this.dropbox.y;
                  //  target.x = _this.vx;   
                  //  target.y = _this.vy;
    
                }
                else
                {
                    target.events.onDragStop.removeAll(); 
                   
                    target.x = _this.vx;   
                    target.y = _this.vy;
                }
            }
            
            target.events.onDragStop.removeAll(); 
         
        },_this);    
    },
    
    gotoFirstQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 1;
        
         //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //options 
        _this.opt1 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);

        _this.opt3 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);
      
        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
            _this.graphics1 = _this.add.graphics(100, 100);
            
            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);
            _this.graphics1.alpha = 0;
            
       },this);
         
    },
    
    gotoSecondQuestion:function()
    {                                  
        //console.log("gotoSecondQuestion");
        _this.questionNo=2;
       
       // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        //options 
        _this.opt1 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
        //_this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);
        //_this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);
       // _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
           // _this.numberGrp.add(_this.dropboxGrp);
            
            _this.graphics1 = _this.add.graphics(100, 100);
            
            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);
    
            _this.graphics1.alpha = 0;
            
       },this);
         
    },
   
    gotoThirdQuestion:function()
    {
        //console.log("gotoThirdQuestion");
        _this.questionNo = 3;
       
        // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        //options 
        _this.opt2 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);

        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
     
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
            _this.graphics1 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);

            _this.graphics1.alpha = 0;
            
       },this);
         
    },
   
    gotoFourthQuestion:function()
    {
        //console.log("gotoFourthQuestion");
        _this.questionNo = 4;
        
        // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        //options 
        _this.opt1 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
        //_this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);
        //_this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);
       // _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
            
            _this.graphics1 = _this.add.graphics(100, 100);
    
            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);

            _this.graphics1.alpha = 0;
            
       },this);
         
    },

    gotoFifthQuestion:function()
    {
        //console.log("gotoFifthQuestion");
        _this.questionNo = 5;
    
         // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        //options 
        _this.opt3 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);

        _this.opt1 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
            _this.graphics1 = _this.add.graphics(100, 100);
    
            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);
            
            _this.graphics1.alpha = 0;
            
       },this);
         
    },

    gotoSixthQuestion:function()
    {
        //console.log("gotoSixthQuestion");
        _this.questionNo = 6;
        
        // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        //options 
    
        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
            _this.graphics1 = _this.add.graphics(100, 100);
            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);
       
            _this.graphics1.alpha = 0;
            
       },this);
         
    },
    
    gotoSeventhQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 7;
        
       // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        //options 
        _this.opt2 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
      
        _this.opt3 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
            _this.graphics1 = _this.add.graphics(100, 100);
    
            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);
        
            _this.graphics1.alpha = 0;
            
       },this);
         
    },
    
    gotoEighthQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 98;
        
        // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        //options 
        _this.opt3 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
            _this.graphics1 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);
        
            _this.graphics1.alpha = 0;
            
       },this);
         
    },
    
 	changeQuestion:function()
	{
		flagGroup1.destroy();
		if(_this.no11<3)
		{
            count++;
            
			_this.getQuestion();
		}
		else
		{
            //console.log("gameEnd");
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
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        //console.log("_thisdropbox.frame :"+_this.dropbox.frame);
    
        //_this.dropbox.frame = 1;
       // target.frame = 1;
        
        //_this.wrong = true;
         _this.opt1.inputEnabled=false;
        _this.opt2.inputEnabled=false;
        _this.opt3.inputEnabled=false;
        commonNavBar.speakerbtn.inputEnabled=false;
        _this.celebration = true;

        commonNavBar.playClickSound();

        commonNavBar.playCelebrationSound();
        this.Stararr.push(3);
        _this.time.events.add(2000, _this.removeEverthing, _this);

        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star',[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
        _this.anim4.play(10,false); 
	},

    wrongAns:function(target)
	{
        telInitializer2.gameWrongAns();
		commonNavBar.disableHintIcon();
        //console.log("wrong");
        _this.opt1.inputEnabled=false;
        _this.opt2.inputEnabled=false;
        _this.opt3.inputEnabled=false;
        _this.wrong = false;
        
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
        
        //  Set a TimerEvent to occur after 2 seconds
        /*_this.time.events.add(1500, function()
        {
            _this.numberGrp.destroy();
            _this.optionGrp.destroy();
            _this.dropboxGrp.destroy();
            _this.graphicsGrp.destroy();;
            _this.getQuestion();
            
        }, this);*/
      

        _this.shake.shake(10, _this.dropbox);
        
        commonNavBar.playClickSound();
        
		commonNavBar.playWrongCelebrationSound();
        
       // commonNavBar.stopTimer();
        _this.time.events.add(2000,_this.removeEverthing,_this);
	},
    
    removeEverthing:function() 
    {
        //console.log("removeEverthing");
        _this.wrong = true;
        //_this.dropbox.frame = 0;
        
       // _this.drop.stop();
        
        _this.no11++;
        
        //console.log("Question Number :"+_this.no11);
        
        if(_this.no11<3)
        {
           // wrong = true;
          //  commonNavBar.stopTimer();
            var timerStopVar = commonNavBar.stopTimer();
            _this.MaintweenDestroy = _this.add.tween(_this.numberGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.optionGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.dropboxGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
                _this.count1++;
                _this.count =0;
                _this.numberGrp.destroy();
                _this.optionGrp.destroy();
                _this.dropboxGrp.destroy();
              commonNavBar.enableHintIcon();
                _this.getQuestion();
            },_this);  
        }
        else
        {
            //_this.stopVoice();
            var timerStopVar = commonNavBar.stopTimer();
            //_this.state.start('unity4_3_1Score');
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
    
    createScoreScene:function()
    {

        this.completelyplayed = true;
		
		this.backgroundtransp = this.add.tileSprite(0,0,this.world.width,this.world.height, 'transparent'); //BackGround Opacity

        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);
  
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

        this.generateStarsForScoreScene(this,9);   //Stars based on the Game
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
		
		this.backgroundtransp.visible=false;

        _this.state.start('numbersense3',true,false);
        
    },

    generateStarsForScoreScene:function(game,count)
    {
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

        this.time.events.add(3000, function()
        { 
            commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
            commonNavBar.hint1=true,
            commonNavBar.hint2=true,
            commonNavBar.hint3=true,
			this.backgroundtransp.visible=false;
            _this.state.start('comparison_NSCG_1_1level1',true,false);
        }, this);
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
            case 8: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/English/4.3.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/Hindi/4.3.mp3");
                    }
                   else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/Kannada/4.3.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.3.1/4.3.mp3");
                    }
					else if(window.languageSelected=="Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/Marathi/4.3.mp3");
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/Telugu/4.3.mp3");
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/Tamil/4.3.mp3");
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/Urdu/4.3.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3.1/Odiya/4.3.1.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
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

        window.score = this.score;

        window.score += commonNavBar.deductForHint;

            commonNavBar.level2Bool = false;
            commonNavBar.deductForHint = 0;
            
            localStorage.setItem(window.avatarName+"Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"comparison_NSCG_1_1state", "playedwithhint");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"comparison_NSCG_1_1state", "fullycomplete");
                localStorage.setItem(window.avatarName+"comparison_NSCG_2_1state", "canplay");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }   

            
    }

};