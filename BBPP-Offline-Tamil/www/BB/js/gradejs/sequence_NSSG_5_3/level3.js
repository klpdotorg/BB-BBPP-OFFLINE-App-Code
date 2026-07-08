Game.sequence_NSSG_5_3level3=function(){};

Game.sequence_NSSG_5_3level3.prototype ={
    
    init:function(param,score,timerStopVar)
    {
        _this= this;
        this.Stararr = param;
        this.score = score;
         this.timerStopVar = timerStopVar;
       // alert(this.timerStopVar);
        console.log(this.timerStopVar);
        //telInitializer.gameIdInit("sequence2_3_1",gradeSelected);
          _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Unity2_3_3BG_01');
          if(window.languageSelected=="English")
                          _this.qsoundurl= window.baseUrl+"questionSounds/2.3.1/English/2.3.mp3";
                    else if(window.languageSelected=="Hindi")
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.3.1/Hindi/2.3.mp3";
                    else if(window.languageSelected=="Kannada")
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.3.1/Kannada/2.3.mp3";
                     else if(window.languageSelected=="Gujarati")
                         _this.qsoundurl= window.baseUrl+"questionSounds/Gujarati/unity/2.3.1/2.3.mp3";
					 else if(window.languageSelected=="Marathi")
                    {
                        _this.qsoundurl = window.baseUrl+"questionSounds/2.3.1/Marathi/2.3.mp3";
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.qsoundurl = window.baseUrl+"questionSounds/2.3.1/Telugu/2.3.mp3";
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.qsoundurl = window.baseUrl+window.baseUrl+"questionSounds/2.3.1/Tamil/2.3.mp3";
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.qsoundurl = window.baseUrl+window.baseUrl+"questionSounds/2.3.1/Urdu/2.3.mp3";
                    }
                    else
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.3.1/Odiya/2.3.1.mp3";
                     
        commonNavBar.addNavBar(this,_this.qsoundurl,"numbersense2");
         commonNavBar.addTimerToTheGame(this,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        commonNavBar.startTimer(this);
        commonNavBar.addScore(this,this.score);
        //commonNavBar.addHint(this);
         this.hintparams=['NSSG5.3','level3',false,false,true,1];
        commonNavBar.addHint(this,this.hintparams);

        commonNavBar.level2Bool = true;
    },
    
	create:function(game)
    {

        this.playedwithHint = false;
        this.completelyplayed = false;


		_this.amplify = null;
		
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.CaterpillarGrp;
        //_this.correct;

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.stopq=0;
        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        
        _this.background;
        _this.click3;
        
        _this.click4;
        _this.rightCount ;
        
        _this.opt1;
       
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
        
        _this.qArrays = [1,2,3,4,5,6];
        
        _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        
       _this.generateStarsForTheScene(game,9);
        _this.getQuestion();
        commonNavBar.getVoice(_this.qsoundurl);
    
        
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
        commonNavBar.enableHintIcon();
    	
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
         if(_this.stopq == 0){
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
    	}
         }
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },
    
     getQuestion1:function(target)
    {
        commonNavBar.enableHintIcon();
    	console.log("*********************************");
        if(_this.stopq == 0){
    	switch(_this.qArrays[_this.no11])
    	{
    		case 1: _this.gotoFirstQuestion1();
    				break;
    		case 2: _this.gotoSecondQuestion1();
    				break;
    		case 3: _this.gotoThirdQuestion1();
    				break;
    		case 4: _this.gotoFourthQuestion1();
    				break;
    		case 5: _this.gotoFifthQuestion1();
    				break;
    		case 6: _this.gotoSixthQuestion1();
    				break;
    	}
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
    
   generateStarsForTheScene:function(game,count)
    {
        this.starsGroup = this.add.group();
        for (var i = 0; i < count; i++)
        {
            this.starsGroup.create(this.world.centerX, 10, 'cstarAnim');
            for(var j =0;j<i;j++)
            {
                if(this.starsGroup.getChildAt(j))
                {
                    this.starsGroup.getChildAt(j).x-=10;
                    this.starsGroup.getChildAt(i).x+=10;

                   
                }
            }
             if(this.Stararr[i])
                    {
                        
                        this.starsGroup.getChildAt(i).frame = this.Stararr[i];
                    }
        }        
        this.starsGroup.getChildAt(6).frame = 2;
        this.starsGroup.getChildAt(7).frame = 0;
        this.starsGroup.getChildAt(8).frame = 0;
        
       
        
    },
   
    
    onDragStart:function(target)
    {
       //console.log("onDragStart");
        
       // _this.noofAttempts++;
        
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level2.3.3_"+target.name, 
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
         
        _this.vx = target.x;   
        _this.vy = target.y; 
        
        target.input.enableDrag(true);
        commonNavBar.playClickSound();

        target.events.onDragStop.add(function(target)
        {
            //console.log("target.key:"+target.key);
          commonNavBar.playsnapSound();
            for(var i=0;i<_this.whiteGroup.length;i++)
            {
                if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Unity2_3_3Caterpillar_body3'))
                { 
                    //console.log("target.name:"+target.name);
                    
                    _this.change++;
                    //console.log("change value :"+_this.change);
                    
                    _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);
                    
                    _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                    _this.text.font = "myfont";
                    _this.text.fill = "#ffffff";
                    _this.text.fontWeight = 'normal';
                    _this.text.anchor.set(0.5);
                    _this.text.fontSize = 70;
                    _this.whiteGroup.getChildAt(i).addChild(_this.text);
                    
                    target.visible = false;
                    //console.log("inputadded here");
                    
                    _this.whiteGroup.getChildAt(i).inputEnabled = true; 
                    _this.whiteGroup.getChildAt(i).input.useHandCursor = true;
                    _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder,_this);
                    target.events.onInputDown.removeAll(); 
                    break;
                }
            }
            
            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
            
            if( _this.change>=5)
            {
                _this.opt1.inputEnabled = true;
                //_this.opt1.input.useHandCursor = true;
            }

        },_this);
          
    },
    
    checkFortheRightOrder :function(target)
    {
        
        _this.vx = target.x;   
        _this.vy = target.y;
        
        target.input.enableDrag();
        target.events.onDragStop.add(this.dragStop,_this);
        
    },
    
    dragStop:function(target)
    {
        //console.log("dragStop");
       commonNavBar.playsnapSound();

        for(var i=0;i<_this.whiteGroup.length;i++)
        {
            if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Unity2_3_3Caterpillar_body3'))
            { 
                target.input.disableDrag();
                target.events.onInputDown.removeAll();
                
                _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);

                _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                _this.text.font = "myfont";
                _this.text.fill = "#ffffff";
                _this.text.fontWeight = 'normal';
                _this.text.anchor.set(0.5);
                _this.text.fontSize = 70;
                _this.whiteGroup.getChildAt(i).addChild(_this.text);

                //target.visible = false;
                target.removeChildAt(0);
                target.loadTexture('Unity2_3_3Caterpillar_body3',0,false);
                //target.events.input.removeAll();

                _this.whiteGroup.getChildAt(i).inputEnabled = true;
                _this.whiteGroup.getChildAt(i).input.useHandCursor = true;

                //console.log("inputadded");

                _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder,_this);

                break;
            }
            else if(_this.checkOverlap(target,_this.graphics6))
            {
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.change--;
                _this.opt1.inputEnabled = false;

                //console.log(" _this.change -- :" + _this.change);
                for(var m=0;m<_this.CaterpillarGrp.length;m++)
                {

                    if(_this.CaterpillarGrp.getChildAt(m).getChildAt(0).text == target.getChildAt(0).text)
                        {
                            _this.CaterpillarGrp.getChildAt(m).visible = true;
                            _this.CaterpillarGrp.getChildAt(m).events.onInputDown.add(_this.onDragStart,_this);
                            break;
                        }

                }
                target.events.onInputDown.removeAll();
                target.removeChildAt(0);
                target.loadTexture('Unity2_3_3Caterpillar_body3',0,false);

                break;
            }
        }

        target.x = _this.vx;   
        target.y = _this.vy;

        if( _this.change<5)
        {
            _this.opt1.inputEnabled = false;
           // _this.opt1.input.useHandCursor = false;
        }
    },
    
    gotoFirstQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo=1;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
       // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "804");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "805");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "806");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
    
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "807");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);       
        
        /***********************************************************/
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
      
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5)
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5)
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2Copy= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4Copy=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_5Copy=_this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_5Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_5Copy.scale.setTo(0.5,0.5)
       
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_5Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_3start');  
        _this.Caterpillar_head.name = "Unity2_3_3start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_3start');
        //_this.Caterpillar_head.animations.play('start', 20, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'Unity2_3_3Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ////_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
         
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                //console.log("stoppppppppppppppppppp")
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
 
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "808");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "809");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "810");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_9=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_9.anchor.setTo(0.5);
        _this.Caterpillar_body_head_9.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_9.name ='_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "812");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_9.addChild(_this.text)
        _this.Caterpillar_body_head_9.inputEnabled = true;
        _this.Caterpillar_body_head_9.input.useHandCursor = true;
        _this.Caterpillar_body_head_9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_10=_this.add.sprite(_this.world.centerX-200,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_10.anchor.setTo(0.5);
        _this.Caterpillar_body_head_10.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_10.name ='_this.Caterpillar_body_head_9';
        
        _this.text = this.add.text(0, 0, "811");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_10.addChild(_this.text)
        _this.Caterpillar_body_head_10.inputEnabled = true;
        _this.Caterpillar_body_head_10.input.useHandCursor = true;
        _this.Caterpillar_body_head_10.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_9);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_10);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
    
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                _this.whiteGroup.add(_this.Caterpillar_body_head_5);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                _this.graphics6 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                  
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(420, 117, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(492, 105, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(557, 105, 50, 50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(627, 103, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(700, 122, 50, 50);
              
                _this.graphics6.lineStyle(2, 0x0000FF, 1);
                _this.graphics6.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                _this.CaterpillarWhite.add(_this.graphics5);

                _this.CaterpillarWhite.add(_this.graphics6);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_3_3start', 20, false);
                
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
            _this.whiteGroup.add(_this.Caterpillar_body_head_5);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);
            _this.graphics6 = _this.add.graphics(100, 100);


            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(420, 117, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(492, 105, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(557, 105, 50, 50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(627, 103, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(700, 122, 50, 50);

            _this.graphics6.lineStyle(2, 0x0000FF, 1);
            _this.graphics6.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);
            _this.CaterpillarWhite.add(_this.graphics5);

            _this.CaterpillarWhite.add(_this.graphics6);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoSecondQuestion:function()
    {                                  
        //console.log("gotoSecondQuestion");
        _this.questionNo=2;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "315");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "316");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "317");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
    
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "318");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);       
       
       /***********************************************************/
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
      
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5)
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5)
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2Copy= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4Copy=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_5Copy=_this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_5Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_5Copy.scale.setTo(0.5,0.5)
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_5Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_3start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_3start');
        //_this.Caterpillar_head.animations.play('start', 20, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'Unity2_3_3Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ////_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
         
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                //console.log("stoppppppppppppppppppp")
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
 
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "323");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "322");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "321");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_9=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_9.anchor.setTo(0.5);
        _this.Caterpillar_body_head_9.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_9.name ='_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "319");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_9.addChild(_this.text)
        _this.Caterpillar_body_head_9.inputEnabled = true;
        _this.Caterpillar_body_head_9.input.useHandCursor = true;
        _this.Caterpillar_body_head_9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_10=_this.add.sprite(_this.world.centerX-200,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_10.anchor.setTo(0.5);
        _this.Caterpillar_body_head_10.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_10.name ='_this.Caterpillar_body_head_9';
        
        _this.text = this.add.text(0, 0, "320");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_10.addChild(_this.text)
        _this.Caterpillar_body_head_10.inputEnabled = true;
        _this.Caterpillar_body_head_10.input.useHandCursor = true;
        _this.Caterpillar_body_head_10.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_9);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_10);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        //flagGroup1.add(_this.Caterpillar_body_head_5_5);
    
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                _this.whiteGroup.add(_this.Caterpillar_body_head_5);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                _this.graphics6 = _this.add.graphics(100, 100);
                
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(420, 117, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(492, 105, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(557, 105, 50, 50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(627, 103, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(700, 122, 50, 50);
                
                _this.graphics6.lineStyle(2, 0x0000FF, 1);
                _this.graphics6.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                _this.CaterpillarWhite.add(_this.graphics5);

                _this.CaterpillarWhite.add(_this.graphics6);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_3_3start', 20, false);
                
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
            _this.whiteGroup.add(_this.Caterpillar_body_head_5);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);
            _this.graphics6 = _this.add.graphics(100, 100);


            // draw a rectangle
             _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(420, 117, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(492, 105, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(557, 105, 50, 50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(627, 103, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(700, 122, 50, 50);

            _this.graphics6.lineStyle(2, 0x0000FF, 1);
            _this.graphics6.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);
            _this.CaterpillarWhite.add(_this.graphics5);

            _this.CaterpillarWhite.add(_this.graphics6);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoThirdQuestion:function()
    {
        //console.log("gotoThirdQuestion");
        _this.questionNo = 3;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);;
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "945");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "947");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "949");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "951");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        /***********************************Copy*****************************************/
        
        // Caterpillar white bodies 
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);;
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
    
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_4=_this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
       
        //Caterpillar White empty body
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);;
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
    
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_4Copy=_this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_5Copy= _this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_5Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5Copy.scale.setTo(0.5,0.5);
       
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_5Copy);
        
        //Caterpillar head
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_3start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_3start');
        
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'Unity2_3_3Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
    
        //Drag Caterpillar body
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "944");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "946");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "952");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_9=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_9.anchor.setTo(0.5);
        _this.Caterpillar_body_head_9.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_9.name ='_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "948");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_9.addChild(_this.text)
        _this.Caterpillar_body_head_9.inputEnabled = true;
        _this.Caterpillar_body_head_9.input.useHandCursor = true;
        _this.Caterpillar_body_head_9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_10=_this.add.sprite(_this.world.centerX-200,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_10.anchor.setTo(0.5);
        _this.Caterpillar_body_head_10.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_10.name ='_this.Caterpillar_body_head_9';
        
        _this.text = this.add.text(0, 0, "950");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_10.addChild(_this.text)
        _this.Caterpillar_body_head_10.inputEnabled = true;
        _this.Caterpillar_body_head_10.input.useHandCursor = true;
        _this.Caterpillar_body_head_10.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_9);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_10);
           
        flagGroup1 =_this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
    
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                _this.whiteGroup.add(_this.Caterpillar_body_head_5);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                
                _this.graphics5 = _this.add.graphics(100, 100);
                _this.graphics6 = _this.add.graphics(100, 100);
                
                //draw rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(140, 117, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(280,115, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(420, 115,50,50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(555, 102, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(690, 115,50, 50);
                
                _this.graphics6.lineStyle(2, 0x0000FF, 1);
                _this.graphics6.drawRect(100, 250,600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                
                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.add(_this.graphics6);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_3start', 20, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
            _this.whiteGroup.add(_this.Caterpillar_body_head_5);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);
            _this.graphics6 = _this.add.graphics(100, 100);

            //draw rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(140, 117, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(280,115, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(420, 115,50,50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(555, 102, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(690, 115,50, 50);

            _this.graphics6.lineStyle(2, 0x0000FF, 1);
            _this.graphics6.drawRect(100, 250,600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.add(_this.graphics6);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoFourthQuestion:function()
    {
        //console.log("gotoFourthQuestion");
        
        _this.questionNo = 4;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);;
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "964");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "966");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "968");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "970");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        /***********************************Copy*****************************************/
        
        // Caterpillar white bodies 
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);;
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
    
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_4=_this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
       
        //Caterpillar White empty body
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);;
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
    
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_4Copy=_this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_5Copy= _this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_5Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5Copy.scale.setTo(0.5,0.5);
       
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_5Copy);
        
        //Caterpillar head
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_3start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_3start');
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'Unity2_3_3Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
    
        //Drag Caterpillar body
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "963");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "969");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "965");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_9=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_9.anchor.setTo(0.5);
        _this.Caterpillar_body_head_9.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_9.name ='_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "967");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_9.addChild(_this.text)
        _this.Caterpillar_body_head_9.inputEnabled = true;
        _this.Caterpillar_body_head_9.input.useHandCursor = true;
        _this.Caterpillar_body_head_9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_10=_this.add.sprite(_this.world.centerX-200,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_10.anchor.setTo(0.5);
        _this.Caterpillar_body_head_10.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_10.name ='_this.Caterpillar_body_head_9';
        
        _this.text = this.add.text(0, 0, "971");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_10.addChild(_this.text)
        _this.Caterpillar_body_head_10.inputEnabled = true;
        _this.Caterpillar_body_head_10.input.useHandCursor = true;
        _this.Caterpillar_body_head_10.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_9);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_10);
           
        flagGroup1 =_this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
    
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                _this.whiteGroup.add(_this.Caterpillar_body_head_5);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                
                _this.graphics5 = _this.add.graphics(100, 100);
                _this.graphics6 = _this.add.graphics(100, 100);
                
                //draw rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(140, 117, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(280,115, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(420, 115,50,50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(555, 102, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(690, 115,50, 50);
                
                _this.graphics6.lineStyle(2, 0x0000FF, 1);
                _this.graphics6.drawRect(100, 250,600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                
                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.add(_this.graphics6);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_3start', 20, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
            _this.whiteGroup.add(_this.Caterpillar_body_head_5);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);
            _this.graphics6 = _this.add.graphics(100, 100);

            //draw rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(140, 117, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(280,115, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(420, 115,50,50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(555, 102, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(690, 115,50, 50);

            _this.graphics6.lineStyle(2, 0x0000FF, 1);
            _this.graphics6.drawRect(100, 250,600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.add(_this.graphics6);
            _this.CaterpillarWhite.alpha = 0;
            
        }
    },

    gotoFifthQuestion:function()
    {
        //console.log("gotoFifthQuestion");
        
        _this.questionNo = 5;
    
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
       // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "893");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "894");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3=_this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "895");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4=_this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_3Caterpillar_Body1');
        //_this.Caterpillar_body_head_4_4=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "901");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
       
        //Caterpillar White empty body
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3Copy= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4Copy= _this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_5Copy= _this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_5Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_5Copy);
    
        //Caterpillar head
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_3start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_3start');
       
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'Unity2_3_3Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
    
         //Drag Caterpillar body
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "896");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "897");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "898");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_9=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_9.anchor.setTo(0.5);
        _this.Caterpillar_body_head_9.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_9.name ='_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "899");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_9.addChild(_this.text)
        _this.Caterpillar_body_head_9.inputEnabled = true;
        _this.Caterpillar_body_head_9.input.useHandCursor = true;
        _this.Caterpillar_body_head_9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_10=_this.add.sprite(_this.world.centerX-200,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_10.anchor.setTo(0.5);
        _this.Caterpillar_body_head_10.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_10.name ='_this.Caterpillar_body_head_9';
        
        _this.text = this.add.text(0, 0, "900");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_10.addChild(_this.text)
        _this.Caterpillar_body_head_10.inputEnabled = true;
        _this.Caterpillar_body_head_10.input.useHandCursor = true;
        _this.Caterpillar_body_head_10.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_9);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_10);
           
        flagGroup1 =_this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);

        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                _this.whiteGroup.add(_this.Caterpillar_body_head_5);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                
                _this.graphics5 = _this.add.graphics(100, 100);
                _this.graphics6 = _this.add.graphics(100, 100);
                
                //draw rectangle
                
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(350, 123, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(420, 118, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(480, 103, 50,50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(560,105, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(625, 103, 50, 50);

                _this.graphics6.lineStyle(2, 0x0000FF, 1);
                _this.graphics6.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                _this.CaterpillarWhite.add(_this.graphics5);
                
                _this.CaterpillarWhite.add(_this.graphics6);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_3start', 20, false);
                
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
            _this.whiteGroup.add(_this.Caterpillar_body_head_5);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);
            _this.graphics6 = _this.add.graphics(100, 100);

            //draw rectangle

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(350, 123, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(420, 118, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(480, 103, 50,50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(560,105, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(625, 103, 50, 50);

            _this.graphics6.lineStyle(2, 0x0000FF, 1);
            _this.graphics6.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);
            _this.CaterpillarWhite.add(_this.graphics5);

            _this.CaterpillarWhite.add(_this.graphics6);
            _this.CaterpillarWhite.alpha = 0;

        }
    },

    gotoSixthQuestion:function()
    {
        //console.log("gotoSixthQuestion");
        
        _this.questionNo = 6;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        
       // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "310");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "311");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3=_this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "312");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4=_this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_3Caterpillar_Body1');
        //_this.Caterpillar_body_head_4_4=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "318");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
       
        //Caterpillar White empty body
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3Copy= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_4Copy= _this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_5Copy= _this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_3Caterpillar_body3');
        _this.Caterpillar_body_head_5Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_5Copy);
        
        //Caterpillar head
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_3start');  
        _this.Caterpillar_head.name = "Unity2_3_3start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_3start');
       
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'Unity2_3_3Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
    
         //Drag Caterpillar body
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "313");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "314");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "315");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_9=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body1');
        _this.Caterpillar_body_head_9.anchor.setTo(0.5);
        _this.Caterpillar_body_head_9.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_9.name ='_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "316");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_9.addChild(_this.text)
        _this.Caterpillar_body_head_9.inputEnabled = true;
        _this.Caterpillar_body_head_9.input.useHandCursor = true;
        _this.Caterpillar_body_head_9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_10=_this.add.sprite(_this.world.centerX-200,_this.world.centerY+125,'Unity2_3_3Caterpillar_Body2');
        _this.Caterpillar_body_head_10.anchor.setTo(0.5);
        _this.Caterpillar_body_head_10.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_10.name ='_this.Caterpillar_body_head_9';
        
        _this.text = this.add.text(0, 0, "317");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.Caterpillar_body_head_10.addChild(_this.text)
        _this.Caterpillar_body_head_10.inputEnabled = true;
        _this.Caterpillar_body_head_10.input.useHandCursor = true;
        _this.Caterpillar_body_head_10.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_9);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_10);
           
        flagGroup1 =_this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);

        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                _this.whiteGroup.add(_this.Caterpillar_body_head_5);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                
                _this.graphics5 = _this.add.graphics(100, 100);
                _this.graphics6 = _this.add.graphics(100, 100);
                
                //draw rectangle
                
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(350, 123, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(420, 118, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(480, 103, 50,50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(560,105, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(625, 103, 50, 50);

                _this.graphics6.lineStyle(2, 0x0000FF, 1);
                _this.graphics6.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                _this.CaterpillarWhite.add(_this.graphics5);
                
                _this.CaterpillarWhite.add(_this.graphics6);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_3start', 20, false);
                
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
            _this.whiteGroup.add(_this.Caterpillar_body_head_5);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);
            _this.graphics6 = _this.add.graphics(100, 100);

            //draw rectangle

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(350, 123, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(420, 118, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(480, 103, 50,50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(560,105, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(625, 103, 50, 50);

            _this.graphics6.lineStyle(2, 0x0000FF, 1);
            _this.graphics6.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);
            _this.CaterpillarWhite.add(_this.graphics5);

            _this.CaterpillarWhite.add(_this.graphics6);
            _this.CaterpillarWhite.alpha = 0;

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
        commonNavBar.disableHintIcon();
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        target.frame = 1;
        //_this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.3.3_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

      /*  if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        */
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
        
        var correct = true;
        for(var i=0;i<5;i++)
        {
            if(i>0)
            {
               // //console.log("aaaaaaaaa"+Number(_this.whiteGroup.getChildAt(i).text));
               // //console.log("bbbbbb"+Number(_this.whiteGroup.getChildAt(0).text));
                
                //console.log("ccccccccc"+Number(_this.whiteGroup.getChildAt(0).getChildAt(0).text));
                //console.log("dddddd"+Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text));
                
                
                if(_this.questionNo==1)
                {
                   if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)+1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==2)
                {
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) + 1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==3)
                {
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) + 2))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                    
                }
                else if(_this.questionNo==4)
                {
                    //console.log("_this.questionNo ==4");
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)+2))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                    
                }
                else if(_this.questionNo == 5)
                {
                    //console.log("_this.questionNo ==5");
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)+1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==6)
                {
                    //console.log("_this.questionNo ==6");
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)+1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
            }
        }
        
        if(correct)
        {   
            telInitializer2.gameCorrectAns();
            //correct answer here
            _this.opt1.events.onInputUp.removeAll();
            target.frame=1;
            if (_this.Caterpillar_head.key == 'Unity2_3_3start')
            {   
                _this.Caterpillar_head.loadTexture('Unity2_3_3Caterpillar_Happy', 0);
                _this.Caterpillar_head.animations.add('Unity2_3_3Caterpillar_Happy');
                _this.Caterpillar_head.animations.play('Unity2_3_3Caterpillar_Happy',20,true);
            }
            
            
             
            //_this.wrong = true;
           
            _this.celebration = true;
            commonNavBar.playClickSound();
             commonNavBar.playCelebrationSound();
            target.events.onInputDown.removeAll();
           _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');
            _this.anim4.play(25,false);
             this.Stararr.push(3);
            _this.time.events.add(2000,_this.removeEverthing,_this);
            _this.sceneCount++; 
        }
        else
        {     
            telInitializer2.gameWrongAns();
            //Wrong anwser here
            // _this.wrongAns();
              target.frame = 1;
             this.starsGroup.getChildAt(_this.count1).frame = 1;
             this.Stararr.push(1);
            _this.opt1.events.onInputUp.removeAll();
            //console.log("wrong target :"+target.name);
            //target.tint = 0xA9A9A9;

            //_this.wrong = false;

            _this.noofAttempts++;

            //_this.currentTime = window.timeSaveFunc();
            _this.interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "level2.3.3_"+target.name,  
                access_token: window.acctkn 
            }

            //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
            
            if (_this.Caterpillar_head.key == 'Unity2_3_3start')
            {
                _this.Caterpillar_head.loadTexture('Unity2_3_3wrong', 0);
                _this.Caterpillar_head.animations.add('Unity2_3_3wrong');
                _this.Caterpillar_head.animations.play('Unity2_3_3wrong',20,true);
            }
            
            //target.events.onInputDown.removeAll();

            _this.timer3 = _this.time.create(false);

            //  Set a TimerEvent to occur after 2 seconds
            /*_this.time.events.add(1500, function()
            {
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
               // _this.getQuestion1();
            }, this);*/

             commonNavBar.playClickSound();
             commonNavBar.playWrongCelebrationSound();
        
            target.events.onInputDown.removeAll();
            _this.time.events.add(2000, _this.removeEverthing, _this);
        }
	},
    
    removeEverthing:function() 
    {
        //console.log("removeEverthing");
        
        _this.opt1.frame = 0;
        _this.no11++;
        //_this.count1++;
        //console.log("Question Number :"+_this.no11);

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        if(_this.no11<2)
        {
           // wrong = true;
             this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
             _this.count1++;
             _this.wrong = true;
            
            
            _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhite);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
             _this.MaintweenDestroy = _this.add.tween(_this.whiteGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.count =0;
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
                _this.getQuestion1();
            },_this);  
        }
        else
        {
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
                // commonNavBar.stopTimer();
                 console.log("ddddddddddddddddddddddddddddddddddddddddd");
               _this.stopVoice();
            //commonNavBar.stopTimer();
               console.log("score");
                scoreflag=1;
                no11=0;
                countcorrect=0;
                
               // commonNavBar.stopTimer();
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
		 _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhite);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
             _this.MaintweenDestroy = _this.add.tween(_this.whiteGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
                this.createScoreScene();
				 },_this);  
        }
		
    },
    
    
    onDragStart1:function(target)
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
            res_id: "level2.3.3a_"+target.name, 
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
        //telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
         
        _this.vx = target.x;   
        _this.vy = target.y; 
        
        target.input.enableDrag(true);
         commonNavBar.playClickSound();

        target.events.onDragStop.add(function(target)
        {
            //console.log("target.key:"+target.key);
            commonNavBar.playsnapSound();
            for(var i=0;i<_this.whiteGroup.length;i++)
            {
                if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Unity2_3_3a_Caterpillar_body3'))
                { 
                    //console.log("target.name:"+target.name);
                    
                    _this.change++;
                    //console.log("change value :"+_this.change);
                    
                    _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);
                    
                    _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                    _this.text.font = "myfont";
                    _this.text.fill = "#ffffff";
                    _this.text.fontWeight = 'normal';
                    _this.text.anchor.set(0.5);
                    _this.text.fontSize = 45;
                    _this.whiteGroup.getChildAt(i).addChild(_this.text);
                    
                    target.visible = false;
                    //console.log("inputadded here");
                    
                    _this.whiteGroup.getChildAt(i).inputEnabled = true; 
                    _this.whiteGroup.getChildAt(i).input.useHandCursor = true;
                    _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder1,_this);
                    target.events.onInputDown.removeAll(); 
                    break;
                }
            }
            
            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
            
            if( _this.change>=5)
            {
                _this.opt1.inputEnabled = true;
                //_this.opt1.input.useHandCursor = true;
            }

        },_this);
          
    },
    
    checkFortheRightOrder1:function(target)
    {
        //console.log("Drag out function");
        //console.log("check target.key:"+target.key);
         commonNavBar.playClickSound();
        _this.vx = target.x;   
        _this.vy = target.y;
        
        target.input.enableDrag();
        target.events.onDragStop.add(this.dragStop1,_this);
        
    },
    
    dragStop1:function(target)
    {
        //console.log("dragStop");
        commonNavBar.playsnapSound();

        for(var i=0;i<_this.whiteGroup.length;i++)
        {
            if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Unity2_3_3a_Caterpillar_body3'))
            { 
                target.input.disableDrag();
                target.events.onInputDown.removeAll();
                
                _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);

                _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                _this.text.font = "myfont";
                _this.text.fill = "#ffffff";
                _this.text.fontWeight = 'normal';
                _this.text.anchor.set(0.5);
                _this.text.fontSize = 45;
                _this.whiteGroup.getChildAt(i).addChild(_this.text);

                //target.visible = false;
                target.removeChildAt(0);
                target.loadTexture('Unity2_3_3a_Caterpillar_body3',0,false);
                //target.events.input.removeAll();

                _this.whiteGroup.getChildAt(i).inputEnabled = true;
                _this.whiteGroup.getChildAt(i).input.useHandCursor = true;

                //console.log("inputadded");

                _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder1,_this);

                break;
            }
            else if(_this.checkOverlap(target,_this.graphics6))
            {
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.change--;
                _this.opt1.inputEnabled = false;

                //console.log(" _this.change -- :" + _this.change);
                for(var m=0;m<_this.CaterpillarGrp.length;m++)
                {

                    if(_this.CaterpillarGrp.getChildAt(m).getChildAt(0).text == target.getChildAt(0).text)
                        {
                            _this.CaterpillarGrp.getChildAt(m).visible = true;
                            _this.CaterpillarGrp.getChildAt(m).events.onInputDown.add(_this.onDragStart1,_this);
                            break;
                        }

                }
                target.events.onInputDown.removeAll();
                target.removeChildAt(0);
                target.loadTexture('Unity2_3_3a_Caterpillar_body3',0,false);

                break;
            }
        }

        target.x = _this.vx;   
        target.y = _this.vy;

        if( _this.change<5)
        {
            _this.opt1.inputEnabled = false;
           // _this.opt1.input.useHandCursor = false;
        }
    },
    
     gotoFirstQuestion1:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo=1;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
       // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-330,_this.world.centerY-15,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "109");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-270,_this.world.centerY-35,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "108");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "107");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
    
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-70,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "106");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);       
        
        /***********************************************************/
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-90,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-30,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
      
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX+30,_this.world.centerY-10,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_4=_this.add.sprite(_this.world.centerX+90,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX+150,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5)
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-90,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2Copy= _this.add.sprite(_this.world.centerX-30,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX+30,_this.world.centerY-10,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_4Copy=_this.add.sprite(_this.world.centerX+90,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_5Copy=_this.add.sprite(_this.world.centerX+150,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_5Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5Copy.scale.setTo(0.7,0.7);
       
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_5Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-75,'Unity2_3_3a_start');  
        _this.Caterpillar_head.name = "Unity2_3_3a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_3a_start');
        //_this.Caterpillar_head.animations.play('start', 20, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+360,_this.world.centerY-30, 'Unity2_3_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ////_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
         
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                //console.log("stoppppppppppppppppppp")
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
 
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "105");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "104");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "102");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_9=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_9.anchor.setTo(0.5);
        _this.Caterpillar_body_head_9.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_9.name ='_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "103");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_9.addChild(_this.text)
        _this.Caterpillar_body_head_9.inputEnabled = true;
        _this.Caterpillar_body_head_9.input.useHandCursor = true;
        _this.Caterpillar_body_head_9.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_10=_this.add.sprite(_this.world.centerX-200,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_10.anchor.setTo(0.5);
        _this.Caterpillar_body_head_10.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_10.name ='_this.Caterpillar_body_head_9';
        
        _this.text = this.add.text(0, 0, "101");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_10.addChild(_this.text)
        _this.Caterpillar_body_head_10.inputEnabled = true;
        _this.Caterpillar_body_head_10.input.useHandCursor = true;
        _this.Caterpillar_body_head_10.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_9);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_10);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
    
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                _this.whiteGroup.add(_this.Caterpillar_body_head_5);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                _this.graphics6 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                  
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(265, 90, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(325, 120, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(385, 135, 50, 50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(445, 115, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(505, 90, 50, 50);
              
                _this.graphics6.lineStyle(2, 0x0000FF, 1);
                _this.graphics6.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                _this.CaterpillarWhite.add(_this.graphics5);

                _this.CaterpillarWhite.add(_this.graphics6);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_3_3a_start', 35, true);
                
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
            _this.whiteGroup.add(_this.Caterpillar_body_head_5);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);
            _this.graphics6 = _this.add.graphics(100, 100);


            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(265, 90, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(325, 120, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(385, 135, 50, 50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(445, 115, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(505, 90, 50, 50);

            _this.graphics6.lineStyle(2, 0x0000FF, 1);
            _this.graphics6.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);
            _this.CaterpillarWhite.add(_this.graphics5);

            _this.CaterpillarWhite.add(_this.graphics6);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    
gotoSecondQuestion1:function()
    {  
        //console.log("gotoSecondQuestion");
        _this.questionNo=2;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
       // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-30,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "254");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX+30,_this.world.centerY-10,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "253");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "252");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
    
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+150,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "251");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);       
        
        /***********************************************************/
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-330,_this.world.centerY-15,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-270,_this.world.centerY-35,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
      
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX-210,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_4=_this.add.sprite(_this.world.centerX-150,_this.world.centerY-70,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX-90,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5)
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-330,_this.world.centerY-15,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2Copy= _this.add.sprite(_this.world.centerX-270,_this.world.centerY-35,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX-210,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_4Copy=_this.add.sprite(_this.world.centerX-150,_this.world.centerY-70,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_5Copy=_this.add.sprite(_this.world.centerX-90,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_5Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5Copy.scale.setTo(0.7,0.7);
       
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_5Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-75,'Unity2_3_3a_start');  
        _this.Caterpillar_head.name = "Unity2_3_3a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_3a_start');
        //_this.Caterpillar_head.animations.play('start', 20, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+360,_this.world.centerY-30, 'Unity2_3_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ////_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
         
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                //console.log("stoppppppppppppppppppp")
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
 
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "255");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "259");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "258");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_9=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_9.anchor.setTo(0.5);
        _this.Caterpillar_body_head_9.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_9.name ='_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "256");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_9.addChild(_this.text)
        _this.Caterpillar_body_head_9.inputEnabled = true;
        _this.Caterpillar_body_head_9.input.useHandCursor = true;
        _this.Caterpillar_body_head_9.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_10=_this.add.sprite(_this.world.centerX-200,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_10.anchor.setTo(0.5);
        _this.Caterpillar_body_head_10.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_10.name ='_this.Caterpillar_body_head_9';
        
        _this.text = this.add.text(0, 0, "257");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_10.addChild(_this.text)
        _this.Caterpillar_body_head_10.inputEnabled = true;
        _this.Caterpillar_body_head_10.input.useHandCursor = true;
        _this.Caterpillar_body_head_10.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_9);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_10);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
    
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                _this.whiteGroup.add(_this.Caterpillar_body_head_5);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                _this.graphics6 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                  
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(25, 125, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(85, 110, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(145,90, 50, 50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(205, 70, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(265, 90, 50, 50);
              
                _this.graphics6.lineStyle(2, 0x0000FF, 1);
                _this.graphics6.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                _this.CaterpillarWhite.add(_this.graphics5);

                _this.CaterpillarWhite.add(_this.graphics6);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_3_3a_start', 35, true);
                
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
            _this.whiteGroup.add(_this.Caterpillar_body_head_5);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);
            _this.graphics6 = _this.add.graphics(100, 100);


            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(25, 125, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(85, 110, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(145,90, 50, 50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(205, 70, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(265, 90, 50, 50);

            _this.graphics6.lineStyle(2, 0x0000FF, 1);
            _this.graphics6.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);
            _this.CaterpillarWhite.add(_this.graphics5);

            _this.CaterpillarWhite.add(_this.graphics6);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
 gotoThirdQuestion1:function()
    {  
        //console.log("gotoThirdQuestion");
        _this.questionNo=3;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
       // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-270,_this.world.centerY-35,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "398");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-70,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "396");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX-30,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "394");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
    
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "392");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);       
        
        /***********************************************************/
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-330,_this.world.centerY-15,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
      
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX-90,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_4=_this.add.sprite(_this.world.centerX+30,_this.world.centerY-10,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX+150,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5)
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-330,_this.world.centerY-15,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2Copy= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX-90,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_4Copy=_this.add.sprite(_this.world.centerX+30,_this.world.centerY-10,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_5Copy=_this.add.sprite(_this.world.centerX+150,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_5Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5Copy.scale.setTo(0.7,0.7);
       
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_5Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-75,'Unity2_3_3a_start');  
        _this.Caterpillar_head.name = "Unity2_3_3a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_3a_start');
        //_this.Caterpillar_head.animations.play('start', 20, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+360,_this.world.centerY-30, 'Unity2_3_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ////_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
         
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                //console.log("stoppppppppppppppppppp")
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
 
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "391");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "395");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "399");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_9=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_9.anchor.setTo(0.5);
        _this.Caterpillar_body_head_9.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_9.name ='_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "393");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_9.addChild(_this.text)
        _this.Caterpillar_body_head_9.inputEnabled = true;
        _this.Caterpillar_body_head_9.input.useHandCursor = true;
        _this.Caterpillar_body_head_9.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_10=_this.add.sprite(_this.world.centerX-200,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_10.anchor.setTo(0.5);
        _this.Caterpillar_body_head_10.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_10.name ='_this.Caterpillar_body_head_9';
        
        _this.text = this.add.text(0, 0, "397");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_10.addChild(_this.text)
        _this.Caterpillar_body_head_10.inputEnabled = true;
        _this.Caterpillar_body_head_10.input.useHandCursor = true;
        _this.Caterpillar_body_head_10.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_9);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_10);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
    
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                _this.whiteGroup.add(_this.Caterpillar_body_head_5);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                _this.graphics6 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                  
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(25, 125, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(145,90, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(265, 90, 50, 50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(385, 135, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(505, 90, 50, 50);
              
                _this.graphics6.lineStyle(2, 0x0000FF, 1);
                _this.graphics6.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                _this.CaterpillarWhite.add(_this.graphics5);

                _this.CaterpillarWhite.add(_this.graphics6);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_3_3a_start', 35, true);
                
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
            _this.whiteGroup.add(_this.Caterpillar_body_head_5);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);
            _this.graphics6 = _this.add.graphics(100, 100);


            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(25, 125, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(145, 90, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(265, 90, 50, 50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(385, 135, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(505, 90, 50, 50);

            _this.graphics6.lineStyle(2, 0x0000FF, 1);
            _this.graphics6.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);
            _this.CaterpillarWhite.add(_this.graphics5);

            _this.CaterpillarWhite.add(_this.graphics6);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoFourthQuestion1:function()
    {  
        //console.log("gotoFourthQuestion");
        _this.questionNo=4;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
       // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-330,_this.world.centerY-15,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "549");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-270,_this.world.centerY-35,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "548");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "547");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
    
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+150,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "541");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);       
        
        /***********************************************************/
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-150,_this.world.centerY-70,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-90,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
      
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX-30,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_4=_this.add.sprite(_this.world.centerX+30,_this.world.centerY-10,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX+90,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5)
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-150,_this.world.centerY-70,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2Copy= _this.add.sprite(_this.world.centerX-90,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX-30,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_4Copy=_this.add.sprite(_this.world.centerX+30,_this.world.centerY-10,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_5Copy=_this.add.sprite(_this.world.centerX+90,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_5Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5Copy.scale.setTo(0.7,0.7);
       
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_5Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-75,'Unity2_3_3a_start');  
        _this.Caterpillar_head.name = "Unity2_3_3a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_3a_start');
        //_this.Caterpillar_head.animations.play('start', 20, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+360,_this.world.centerY-30, 'Unity2_3_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ////_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
         
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                //console.log("stoppppppppppppppppppp")
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
 
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "545");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "544");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "546");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_9=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_9.anchor.setTo(0.5);
        _this.Caterpillar_body_head_9.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_9.name ='_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "542");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_9.addChild(_this.text)
        _this.Caterpillar_body_head_9.inputEnabled = true;
        _this.Caterpillar_body_head_9.input.useHandCursor = true;
        _this.Caterpillar_body_head_9.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_10=_this.add.sprite(_this.world.centerX-200,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_10.anchor.setTo(0.5);
        _this.Caterpillar_body_head_10.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_10.name ='_this.Caterpillar_body_head_9';
        
        _this.text = this.add.text(0, 0, "543");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_10.addChild(_this.text)
        _this.Caterpillar_body_head_10.inputEnabled = true;
        _this.Caterpillar_body_head_10.input.useHandCursor = true;
        _this.Caterpillar_body_head_10.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_9);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_10);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
    
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                _this.whiteGroup.add(_this.Caterpillar_body_head_5);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                _this.graphics6 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                  
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(205, 70, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(265,90, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(325, 120, 50, 50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(385, 135, 50, 50);
                
               _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(445, 115, 50, 50);
              
                _this.graphics6.lineStyle(2, 0x0000FF, 1);
                _this.graphics6.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                _this.CaterpillarWhite.add(_this.graphics5);

                _this.CaterpillarWhite.add(_this.graphics6);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_3_3a_start', 35, true);
                
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
            _this.whiteGroup.add(_this.Caterpillar_body_head_5);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);
            _this.graphics6 = _this.add.graphics(100, 100);


            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(205, 70, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(265,90, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(325, 120, 50, 50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(385, 135, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(445, 115, 50, 50);

            _this.graphics6.lineStyle(2, 0x0000FF, 1);
            _this.graphics6.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);
            _this.CaterpillarWhite.add(_this.graphics5);

            _this.CaterpillarWhite.add(_this.graphics6);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
   
  gotoFifthQuestion1:function()
    {  
        //console.log("gotoFifthQuestion");
        _this.questionNo=5;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
       // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-330,_this.world.centerY-15,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "829");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-270,_this.world.centerY-35,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "828");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "822");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
    
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+150,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "821");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);       
        
        /***********************************************************/
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-210,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-70,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
      
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX-90,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_4=_this.add.sprite(_this.world.centerX-30,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX+30,_this.world.centerY-10,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5)
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-210,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2Copy= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-70,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX-90,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_4Copy=_this.add.sprite(_this.world.centerX-30,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_5Copy=_this.add.sprite(_this.world.centerX+30,_this.world.centerY-10,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_5Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5Copy.scale.setTo(0.7,0.7);
       
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_5Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-75,'Unity2_3_3a_start');  
        _this.Caterpillar_head.name = "Unity2_3_3a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_3a_start');
        //_this.Caterpillar_head.animations.play('start', 20, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+360,_this.world.centerY-30, 'Unity2_3_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ////_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
         
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                //console.log("stoppppppppppppppppppp")
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
 
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "823");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "825");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "824");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_9=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_9.anchor.setTo(0.5);
        _this.Caterpillar_body_head_9.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_9.name ='_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "826");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_9.addChild(_this.text)
        _this.Caterpillar_body_head_9.inputEnabled = true;
        _this.Caterpillar_body_head_9.input.useHandCursor = true;
        _this.Caterpillar_body_head_9.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_10=_this.add.sprite(_this.world.centerX-200,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_10.anchor.setTo(0.5);
        _this.Caterpillar_body_head_10.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_10.name ='_this.Caterpillar_body_head_9';
        
        _this.text = this.add.text(0, 0, "827");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_10.addChild(_this.text)
        _this.Caterpillar_body_head_10.inputEnabled = true;
        _this.Caterpillar_body_head_10.input.useHandCursor = true;
        _this.Caterpillar_body_head_10.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_9);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_10);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
    
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                _this.whiteGroup.add(_this.Caterpillar_body_head_5);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                _this.graphics6 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                  
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(145, 90, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(205, 70, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(265,90, 50, 50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(325, 120, 50, 50);
                
               _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(385, 135, 50, 50);
              
                _this.graphics6.lineStyle(2, 0x0000FF, 1);
                _this.graphics6.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                _this.CaterpillarWhite.add(_this.graphics5);

                _this.CaterpillarWhite.add(_this.graphics6);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_3_3a_start', 35, true);
                
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
            _this.whiteGroup.add(_this.Caterpillar_body_head_5);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);
            _this.graphics6 = _this.add.graphics(100, 100);


            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(145, 90, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(205, 70, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(265,90, 50, 50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(325, 120, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(385, 135, 50, 50);

            _this.graphics6.lineStyle(2, 0x0000FF, 1);
            _this.graphics6.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);
            _this.CaterpillarWhite.add(_this.graphics5);

            _this.CaterpillarWhite.add(_this.graphics6);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
   gotoSixthQuestion1:function()
    {  
        //console.log("gotoSixthQuestion");
        _this.questionNo=6;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
       // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-330,_this.world.centerY-15,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "609");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX+30,_this.world.centerY-10,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "603");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "602");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
    
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+150,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "601");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);       
        
        /***********************************************************/
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-270,_this.world.centerY-35,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.7,0.7);
      
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX-150,_this.world.centerY-70,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_4=_this.add.sprite(_this.world.centerX-90,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX-30,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5)
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-270,_this.world.centerY-35,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_2Copy= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX-150,_this.world.centerY-70,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_4Copy=_this.add.sprite(_this.world.centerX-90,_this.world.centerY-50,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_4Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4Copy.scale.setTo(0.7,0.7);
        
        _this.Caterpillar_body_head_5Copy=_this.add.sprite(_this.world.centerX-30,_this.world.centerY-25,'Unity2_3_3a_Caterpillar_body3');
        _this.Caterpillar_body_head_5Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5Copy.scale.setTo(0.7,0.7);
       
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_5Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-75,'Unity2_3_3a_start');  
        _this.Caterpillar_head.name = "Unity2_3_3a_start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_3a_start');
        //_this.Caterpillar_head.animations.play('start', 20, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+360,_this.world.centerY-30, 'Unity2_3_3a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ////_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
         
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                //console.log("stoppppppppppppppppppp")
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
 
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "605");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "608");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_3a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_8.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "607");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        _this.Caterpillar_body_head_8.inputEnabled = true;
        _this.Caterpillar_body_head_8.input.useHandCursor = true;
        _this.Caterpillar_body_head_8.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_9=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_9.anchor.setTo(0.5);
        _this.Caterpillar_body_head_9.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_9.name ='_this.Caterpillar_body_head_8';
        
        _this.text = this.add.text(0, 0, "606");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_9.addChild(_this.text)
        _this.Caterpillar_body_head_9.inputEnabled = true;
        _this.Caterpillar_body_head_9.input.useHandCursor = true;
        _this.Caterpillar_body_head_9.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_10=_this.add.sprite(_this.world.centerX-200,_this.world.centerY+125,'Unity2_3_3a_Caterpillar_Body2');
        _this.Caterpillar_body_head_10.anchor.setTo(0.5);
        _this.Caterpillar_body_head_10.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_10.name ='_this.Caterpillar_body_head_9';
        
        _this.text = this.add.text(0, 0, "604");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 45;
        _this.Caterpillar_body_head_10.addChild(_this.text)
        _this.Caterpillar_body_head_10.inputEnabled = true;
        _this.Caterpillar_body_head_10.input.useHandCursor = true;
        _this.Caterpillar_body_head_10.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_9);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_10);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
    
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                _this.whiteGroup.add(_this.Caterpillar_body_head_5);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                _this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                _this.graphics6 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                  
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(85, 110, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(145, 90, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(205, 70, 50, 50);
                
                _this.graphics4.lineStyle(2, 0x0000FF, 1);
                _this.graphics4.drawRect(265,90, 50, 50);
                
               _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(325, 120, 50, 50);
              
                _this.graphics6.lineStyle(2, 0x0000FF, 1);
                _this.graphics6.drawRect(100, 250, 600, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                _this.CaterpillarWhite.add(_this.graphics4);
                _this.CaterpillarWhite.add(_this.graphics5);

                _this.CaterpillarWhite.add(_this.graphics6);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_3_3a_start', 35, true);
                
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            _this.whiteGroup.add(_this.Caterpillar_body_head_4);
            _this.whiteGroup.add(_this.Caterpillar_body_head_5);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);
            _this.graphics6 = _this.add.graphics(100, 100);


            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(85, 110, 50, 50);

            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(145, 90, 50, 50);

            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(205, 70, 50, 50);

            _this.graphics4.lineStyle(2, 0x0000FF, 1);
            _this.graphics4.drawRect(265,90, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(325, 120, 50, 50);

            _this.graphics6.lineStyle(2, 0x0000FF, 1);
            _this.graphics6.drawRect(100, 250, 600, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            _this.CaterpillarWhite.add(_this.graphics4);
            _this.CaterpillarWhite.add(_this.graphics5);

            _this.CaterpillarWhite.add(_this.graphics6);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
     checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },
    
    correctAns1:function(target)
	{
        commonNavBar.disableHintIcon();
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
         target.frame = 1;
        //_this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.3.3a_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

      /*  if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        */
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
        
        var correct = true;
        for(var i=0;i<5;i++)
        {
            if(i>0)
            {
               // //console.log("aaaaaaaaa"+Number(_this.whiteGroup.getChildAt(i).text));
               // //console.log("bbbbbb"+Number(_this.whiteGroup.getChildAt(0).text));
                
                //console.log("ccccccccc"+Number(_this.whiteGroup.getChildAt(0).getChildAt(0).text));
                //console.log("dddddd"+Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text));
                
                
                if(_this.questionNo==1)
                {
                   if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)-1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==2)
                {
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) -1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==3)
                {
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) - 2))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                    
                }
                else if(_this.questionNo==4)
                {
                    //console.log("_this.questionNo ==4");
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)-1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                    
                }
                else if(_this.questionNo == 5)
                {
                    //console.log("_this.questionNo ==5");
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)-1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==6)
                {
                    //console.log("_this.questionNo ==6");
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)-1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
            }
        }
        
        if(correct)
        {   
            telInitializer2.gameCorrectAns();
            //correct answer here
            _this.opt1.events.onInputUp.removeAll();
            target.frame=1;
            if (_this.Caterpillar_head.key == 'Unity2_3_3a_start')
            {   
                _this.Caterpillar_head.loadTexture('Unity2_3_3a_Caterpillar_Happy', 0);
                _this.Caterpillar_head.animations.add('Unity2_3_3a_Caterpillar_Happy');
                _this.Caterpillar_head.animations.play('Unity2_3_3a_Caterpillar_Happy',null,true);
            }
        
            _this.celebration = true;

             commonNavBar.playClickSound();
            commonNavBar.playCelebrationSound();
            _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');
            _this.anim4.play(25,false);
            this.Stararr.push(3);
           // this.starsGroup.getChildAt(countcorrect).frame = 2; 
           // countcorrect++;
            target.events.onInputDown.removeAll();
            _this.time.events.add(2000, _this.removeEverthing1, _this);
        }
        else
        {     
            telInitializer2.gameWrongAns();
            //Wrong anwser here
            // _this.wrongAns();
             target.frame = 1;
             this.starsGroup.getChildAt(_this.count1).frame = 1;
             this.Stararr.push(1);
            _this.opt1.events.onInputUp.removeAll();
            //console.log("wrong target :"+target.name);
            //target.tint = 0xA9A9A9;

           // _this.wrong = false;

            _this.noofAttempts++;

            //_this.currentTime = window.timeSaveFunc();
            _this.interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "level2.3.3a_"+target.name,  
                access_token: window.acctkn 
            }

            //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
            
            if (_this.Caterpillar_head.key == 'Unity2_3_3a_start')
            {
                _this.Caterpillar_head.loadTexture('Unity2_3_3a_wrong', 0);
                _this.Caterpillar_head.animations.add('Unity2_3_3a_wrong');
                _this.Caterpillar_head.animations.play('Unity2_3_3a_wrong',null,true);
            }
            
            _this.timer3 = _this.time.create(false);

            //  Set a TimerEvent to occur after 2 seconds
            /*_this.time.events.add(1500, function()
            {
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
                //_this.getQuestion1();
            }, this);*/

            commonNavBar.playsnapSound();
            commonNavBar.playWrongCelebrationSound();
           target.events.onInputDown.removeAll();
            //commonNavBar.stopTimer();
            _this.time.events.add(1000,_this.removeEverthing1,_this);
        }
	},

    removeEverthing1:function() 
    {
        //console.log("removeEverthing");
        
        //_this.wrong = true;
        _this.opt1.frame = 0;
        _this.no11++;
       // _this.count1++;
        //console.log("Question Number :"+_this.no11);
        
        if(_this.no11<3)
        {
           // wrong = true;
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
             _this.count1++;
             _this.wrong = true;
            
            _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhite);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
             _this.MaintweenDestroy = _this.add.tween(_this.whiteGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.count =0;
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
                _this.getQuestion1();
            },_this);  
        }
        else
        {
            //countIncrement = 0;
            _this.stopVoice();
            //commonNavBar.stopTimer();
              console.log("score");
                scoreflag=1;
                no11=0;
                countcorrect=0;
                
				
                //commonNavBar.stopTimer();
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
			this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhite);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
             _this.MaintweenDestroy = _this.add.tween(_this.whiteGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
                this.createScoreScene();
			},_this);  
        }
    },
    
   
    
    createScoreScene:function()
    {
        this.completelyplayed = true;

        _this.stopq=1;
		
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
		
		this.backgroundtransp.visible=false; //Remove BackGround Opacity

        _this.state.start('numbersense2',true,false);
        
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
        /* if((this.scoreSceneScore/this.maxscore) < 0.4){
            this.tryAgainText.visible = true;
        }else if(( (this.scoreSceneScore/this.maxscore) > 0.4) && ((this.scoreSceneScore/this.maxscore) < 0.7) ){
            this.terrificText.visible = true;
        }else if(( (this.scoreSceneScore/this.maxscore) > 0.7) && ((this.scoreSceneScore/this.maxscore) < 0.9) ){
            this.verGoodText.visible = true;
        }else if((this.scoreSceneScore/this.maxscore) > 0.9){
            this.excellentText.visible = true;
        } */
  
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
			this.backgroundtransp.visible=false; //Remove BackGround Opacity
            _this.state.start('sequence_NSSG_5_3level1',true,false);
        }, this);
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
            window.score = this.score;

            window.score += commonNavBar.deductForHint;

            commonNavBar.level2Bool = false;
            commonNavBar.deductForHint = 0;
            
            localStorage.setItem(window.avatarName+"Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer(); 
                localStorage.setItem(window.avatarName+"sequence_NSSG_5_3state", "playedwithhint");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer(); 
                localStorage.setItem(window.avatarName+"sequence_NSSG_5_3state", "fullycomplete");
                localStorage.setItem(window.avatarName+"sequence_NSSG_6_3state", "canplay");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }   
            
        }      
	
   
};