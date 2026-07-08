Game.sequence_NSSG_2_1level2=function(){};

Game.sequence_NSSG_2_1level2.prototype ={
    
    init:function(param,score,timerStopVar)
    {
        _this = this;
         this.Stararr = param;
         this.score = score;
         this.timerStopVar = timerStopVar;
        _this.gameid = "Game 2.5.1";
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'BG_01');

        if(window.languageSelected=="English")
                          _this.qsoundurl= window.baseUrl+"questionSounds/2.5.1/English/2.5.mp3";
                    else if(window.languageSelected=="Hindi")
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.5.1/Hindi/2.5.mp3";
                    else if(window.languageSelected=="Kannada")
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.5.1/Kannada/2.5.mp3";
                     else if(window.languageSelected=="Gujarati")
                         _this.qsoundurl= window.baseUrl+"questionSounds/Gujarati/unity/2.5.1/2.5.mp3";
					 else if(window.languageSelected=="Marathi")
                    {
                        _this.qsoundurl = window.baseUrl+"questionSounds/2.5.1/Marathi/2.5.mp3";
                    }
					else if(window.languageSelected=="Telugu")
                    {
                        _this.qsoundurl = window.baseUrl+"questionSounds/2.5.1/Telugu/2.5.mp3";
                    }
					else if(window.languageSelected=="Tamil")
                    {
                        _this.qsoundurl = window.baseUrl+"questionSounds/2.5.1/Tamil/2.5.mp3";
                    }
					else if(window.languageSelected=="Urdu")
                    {
                        _this.qsoundurl = window.baseUrl+"questionSounds/2.5.1/Urdu/2.5.mp3";
                    }
                    else
                        _this.qsoundurl= window.baseUrl+"questionSounds/2.5.1/Odiya/2.5.1.mp3";

         commonNavBar.addNavBar(this,_this.qsoundurl,"numbersense2");
         commonNavBar.addTimerToTheGame(this,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
         commonNavBar.startTimer(this);
         commonNavBar.addScore(this,commonNavBar.getScore());
         
         this.hintparams=['NSSG1.1','level1',false,false,true,1];
      
        commonNavBar.addHint(this,this.hintparams);

    },
    
	create:function(game)
    {
		_this.amplify = null;
        _this.qArrays;
         countcorrect=3;
        countcorrect1=5;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.CaterpillarGrp;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        _this.background;
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
        _this.backgrd1;
        _this.backgrd2;
        _this.backgrd3;
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
        _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add(_this.shake);
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=3;
        _this.celebration= false;
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8];
        _this.qArrays = _this.shuffle(_this.qArrays);
		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();
        _this.generateStarsForTheScene(game,9);
        _this.getQuestion();
    
        _this.getVoice();
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
        _this.questionid=1;
        //_this.no11++;
        console.log("_this.no11-----------------***********/////////"+_this.no11);
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
    getQuestion1:function(target)
    {  
        commonNavBar.enableHintIcon();
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
       // _this.sceneCount++;
        console.log("_this.no11-----------------***********/////////"+_this.no11);
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
            case 7: _this.gotoSeventhQuestion1();
                    break;
            case 8: _this.gotoEighthQuestion1();
                    break;
            case 9: _this.gotoNinethQuestion1();
                    break;
            case 10: _this.gotoTenthQuestion1();
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
    /*generateStarsForTheScene1:function(game,count)
    {
        this.starsGroup = this.add.group();
        for (var i = 0; i < count; i++)
        {
            this.starsGroup.create(this.world.centerX, 10, 'starAnim');
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
        this.starsGroup.getChildAt(5).frame = 2;
       
      }, 
*/
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
        this.starsGroup.getChildAt(3).frame = 2;
this.starsGroup.getChildAt(4).frame = 0;
this.starsGroup.getChildAt(5).frame = 0;
       // this.starsGroup.getChildAt(8).frame = 0;
        
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
              
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level2.5.1_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
       /* if(_this.timer)
        {
            commonNavBar.stopTimer();
           _this.timer = null;
        }*/

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
        
         
        _this.vx = target.x;   
        _this.vy = target.y; 
        
        target.input.enableDrag(true);
        commonNavBar.playClickSound();

        target.events.onDragStop.add(function(target)
        {

            for(var i=0;i<_this.whiteGroup.length;i++)
            {
                if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Caterpillar_Body3'))
                { 
                    
                    _this.change++;
                    _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);
                    _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                    _this.text.font = "myfont";
                    _this.text.fill = "#ffffff";
                    _this.text.fontWeight = 'normal';
                    _this.text.anchor.set(0.5);
                    _this.text.fontSize = 90;
                    _this.whiteGroup.getChildAt(i).addChild(_this.text);
                    
                    _this.dragedTxt = Number(target.getChildAt(0).text);
                    
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
            commonNavBar.playSnapSound();
           
            if( _this.change>=1)
            {
                _this.opt1.inputEnabled = true;
            }

        },_this);
          
    },
    
    checkFortheRightOrder:function(target)
    {
        //console.log("Drag out function");
        
        _this.vx = target.x;   
        _this.vy = target.y;

        target.input.enableDrag();
        target.events.onDragStop.add(this.dragStop,_this);
        
    },
    
    dragStop:function(target)
    {
        //console.log("dragStop function");
        
        commonNavBar.playSnapSound();

        for(var i=0;i<_this.whiteGroup.length;i++)
        {
            if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Caterpillar_Body3'))
            { 
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);

                _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                _this.text.font = "myfont";
                _this.text.fill = "#ffffff";
                _this.text.fontWeight = 'normal';
                _this.text.anchor.set(0.5);
                _this.text.fontSize = 90;
                _this.whiteGroup.getChildAt(i).addChild(_this.text);

                target.removeChildAt(0);
                target.loadTexture('Caterpillar_Body3',0,false);

                _this.whiteGroup.getChildAt(i).inputEnabled = true;
                _this.whiteGroup.getChildAt(i).input.useHandCursor = true;

                //console.log("inputadded here");

                _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder,_this);

                break;

            }

            else if(_this.checkOverlap(target,_this.graphics5))
            {
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.change--;
                _this.opt1.inputEnabled = false;

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
                target.loadTexture('Caterpillar_Body3',0,false);

                break;
            }
        }

        target.x = _this.vx;   
        target.y = _this.vy;
        
        if( _this.change<1)
        {
            _this.opt1.inputEnabled = false;
        }
    },
    
    gotoFirstQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 1;
        
        _this.rightAns = 7;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-68,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX+75,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-135,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
        // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body2');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(358, 135, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(358, 135, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoSecondQuestion:function()
    {                                  
        //console.log("gotoSecondQuestion");
        _this.questionNo=2;
        
        _this.rightAns = 5;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX-68,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX+75,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-135,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
       // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body1');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(358, 135, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(358, 135, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoThirdQuestion:function()
    {
        //console.log("gotoThirdQuestion");
        _this.questionNo = 3;
         _this.rightAns = 3;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX-68,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX+75,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-135,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
       // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body2');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(358, 135, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(358, 135, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoFourthQuestion:function()
    {
        //console.log("gotoFourthQuestion");
        
        _this.questionNo = 4;
        _this.rightAns = 6;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX-68,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX+75,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-135,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
       // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body1');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(358, 135, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(358, 135, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },

    gotoFifthQuestion:function()
    {
        //console.log("gotoFifthQuestion");
        
        _this.questionNo = 5;
    
         _this.rightAns = 2;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX-68,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX+75,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-135,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
       // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body2');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(358, 135, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(358, 135, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },

    gotoSixthQuestion:function()
    {
        //console.log("gotoSixthQuestion");
        
        _this.questionNo = 6;
        
        _this.rightAns = 4;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX-68,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX+75,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-135,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        _this.opt1.name = 'tick1';
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body2');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(358, 135, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(358, 135, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoSeventhQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 7;
        
        _this.rightAns = 8;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX-68,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX+75,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-135,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
        // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body2');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(358, 135, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(358, 135, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoEighthQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 8;
        
         _this.rightAns = 9;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX-68,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX+75,_this.world.centerY-10,'Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        
        _this.text = this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX+2,_this.world.centerY-22,'Caterpillar_Body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-135,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
       // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               //// _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body2');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(358, 135, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(358, 135, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
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
           // _this.stopVoice();
            _this.state.start('level2');
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
        target.frame = 1;
         _this.noofAttempts++;
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.5.1_"+target.name, 
            access_token: window.acctkn 
        } 

        
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
        
        if(_this.dragedTxt === _this.rightAns)
        {

            telInitializer2.gameCorrectAns();
            //correct answer
          //  target.frame=1;
            _this.opt1.events.onInputUp.removeAll();
            console.log("_this.Caterpillar_head.key "+_this.Caterpillar_head.key);
             if (_this.Caterpillar_head.key == 'start')
            {
                _this.Caterpillar_head.loadTexture('Caterpillar_Happy', 0);
                _this.Caterpillar_head.animations.add('Caterpillar_Happy');
                _this.Caterpillar_head.animations.play('Caterpillar_Happy',20,true);
            }
             //_this.wrong = true;
           // _this.speakerbtn.inputEnabled=false;
            _this.celebration = true;
            commonNavBar.playClickSound();

           // _this.cmusic = _this.add.audio('celebr');
commonNavBar.playCelebrationSound();
/*            _this.time.events.add(2000, _this.removeEverthing, _this);
*/
            _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');
            _this.anim4.play(25,false);
            this.Stararr.push(3);
            _this.sceneCount++;

             target.events.onInputDown.removeAll();
        _this.time.events.add(2000, _this.removeEverthing, _this);
        }
        else
        {     
            telInitializer2.gameWrongAns();
            //_this.wrongAns(); wrong function here
            //console.log("wrong function");
            //_this.dragedTxt = 0;
            target.frame=1;
             _this.starsGroup.getChildAt(_this.count1).frame = 1;
           this.Stararr.push(1);
                       // countcorrect++;

             _this.opt1.events.onInputUp.removeAll();
           // target.tint = 0xA9A9A9;

           // _this.wrong = false;
           //_this.currentTime = window.timeSaveFunc();
            _this.interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "level2.5.1_",  
                access_token: window.acctkn 
            }

            //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
            if (_this.Caterpillar_head.key == 'start')
            {
                console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
                _this.Caterpillar_head.loadTexture('wrong', 0);
                _this.Caterpillar_head.animations.add('wrong');
                _this.Caterpillar_head.animations.play('wrong',20,true);
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
               // _this.getQuestion1();
            }, this);*/

           // _this.click4 = _this.add.audio('ClickSound');
         commonNavBar.playSnapSound();
            commonNavBar.playWrongCelebrationSound();
            target.events.onInputDown.removeAll();
           // commonNavBar.stopTimer();
            _this.time.events.add(2000,_this.removeEverthing,_this);
            _this.dragedTxt = 0;

        }
	},
    removeEverthing:function() 
    {

       _this.opt1.frame = 0;
       _this.no11++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
             _this.starsGroup.getChildAt(_this.count1+1).frame = 2;
           _this.count1++;
            _this.wrong=true;
        if(_this.no11<1)
        {
             //wrong = true;
           // _this.timer1.stop();
          

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
                

            },_this);  
        }
        else
        {
            //_this.stopVoice();
             /*countcorrect++;
           this.starsGroup.getChildAt(countcorrect).frame = 2;
        */
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
            // commonNavBar.stopTimer();
             _this.getQuestion1();
				},_this);  
             //_this.starsGroup.getChildAt().frame = 2;
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
            res_id: "level2.5.1a_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
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
            
            commonNavBar.playDragMangoSound();
            for(var i=0;i<_this.whiteGroup.length;i++)
            {
                if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Caterpillar_Body31'))
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
                    _this.text.fontSize = 90;
                    _this.whiteGroup.getChildAt(i).addChild(_this.text);
                    
                    _this.dragedTxt = Number(target.getChildAt(0).text);
                    
                    target.visible = false;
                    //console.log("inputadded here");
                    
                    _this.whiteGroup.getChildAt(i).inputEnabled = true; 
                    _this.whiteGroup.getChildAt(i).input.useHandCursor = true;
                    _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder1,_this);
                    target.events.onInputDown.removeAll(); 
                    break;
                }
            }
            
            //_this.dragedTxt = 0;
            
            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
           commonNavBar.playSnapSound();

            if( _this.change>=1)
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
        
        _this.vx = target.x;   
        _this.vy = target.y;
        
        //console.log("xxxxxxxxxxxxxx "+_this.vx)
        //console.log("yyyyyyyyyyyyyy "+_this.vy)
        //console.log("target.text "+target.getChildAt(0).text);
    
        target.input.enableDrag();
        target.events.onDragStop.add(this.dragStop1,_this);
        
    },
    
    dragStop1:function(target)
    {
        //console.log("dragStop function");
        
                    commonNavBar.playSnapSound();
        for(var i=0;i<_this.whiteGroup.length;i++)
        {
            if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Caterpillar_Body31'))
            { 
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);

                _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                _this.text.font = "myfont";
                _this.text.fill = "#ffffff";
                _this.text.fontWeight = 'normal';
                _this.text.anchor.set(0.5);
                _this.text.fontSize = 90;
                _this.whiteGroup.getChildAt(i).addChild(_this.text);

                //target.visible = false;
                target.removeChildAt(0);
                target.loadTexture('Caterpillar_Body31',0,false);
                //target.events.input.removeAll();

                _this.whiteGroup.getChildAt(i).inputEnabled = true;
                _this.whiteGroup.getChildAt(i).input.useHandCursor = true;

                //console.log("inputadded here");

                _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder1,_this);

                break;
            }
            else if(_this.checkOverlap(target,_this.graphics5))
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
                //_this.dragedTxt = 0;
                target.events.onInputDown.removeAll();
                target.removeChildAt(0);
                target.loadTexture('Caterpillar_Body31',0,false);

                break;
            }
        }

        target.x = _this.vx;   
        target.y = _this.vy;
        
        if( _this.change<1)
        {
            _this.opt1.inputEnabled = false;
           // _this.opt1.input.useHandCursor = false;
        }
    },
    
    gotoFirstQuestion1:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 1;
        
        _this.rightAns = 7;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+80,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
        // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body11');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body21');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body11');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body21');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(290, 110, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(290, 110, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoSecondQuestion1:function()
    {                                  
        //console.log("gotoSecondQuestion");
        _this.questionNo=2;
        
        _this.rightAns = 5;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX+80,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
       // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body21');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body11');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body11');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body21');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(290, 110, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(290, 110, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoThirdQuestion1:function()
    {
        //console.log("gotoThirdQuestion");
        _this.questionNo = 3;
         _this.rightAns = 3;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX+80,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
       // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body11');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body21');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body11');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body21');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(290, 110, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(290, 110, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoFourthQuestion1:function()
    {
        //console.log("gotoFourthQuestion");
        
        _this.questionNo = 4;
        _this.rightAns = 6;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX+80,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
       // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body21');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body11');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body11');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body21');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(290, 110, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(290, 110, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },

    gotoFifthQuestion1:function()
    {
        //console.log("gotoFifthQuestion");
        
        _this.questionNo = 5;
    
         _this.rightAns = 2;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX+80,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
       // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body11');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body21');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body11');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body21');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(290, 110, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(290, 110, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },

    gotoSixthQuestion1:function()
    {
        //console.log("gotoSixthQuestion");
        
        _this.questionNo = 6;
        
        _this.rightAns = 4;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX+80,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
       // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body21');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body21');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body11');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body11');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(290, 110, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(290, 110, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoSeventhQuestion1:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 7;
        
        _this.rightAns = 8;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX+80,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
        // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body11');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body21');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body11');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);

        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body21');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(290, 110, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(290, 110, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoEighthQuestion1:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 8;
        
         _this.rightAns = 9;
        _this.dragedTxt = 0;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        //colored Caterpillarbody
        _this.Caterpillar_body_head_1_1=_this.add.sprite(_this.world.centerX,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2=_this.add.sprite(_this.world.centerX-130,_this.world.centerY-20,'Caterpillar_Body11');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5)
        _this.Caterpillar_body_head_2_2.scale.setTo(0.7,0.7);
        
        _this.text = this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        //White color body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.7,0.7);
           
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy=_this.add.sprite(_this.world.centerX-65,_this.world.centerY-32,'Caterpillar_Body31');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.7,0.7);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
       // _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX+80,_this.world.centerY-75,'start');  
        _this.Caterpillar_head.name = "start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('start');
       // _this.Caterpillar_head.animations.play('start', 30, false);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+250,_this.world.centerY-20, 'Tick');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        
        ////_this.opt1.frame=1;
        _this.opt1.name = 'tick1';
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(1000, function()
             {
               // _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        //drag body
        
        _this.Caterpillar_body_head_5=_this.add.sprite(_this.world.centerX-120,_this.world.centerY+175,'Caterpillar_Body11');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_5.addChild(_this.text)
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX-15,_this.world.centerY+120,'Caterpillar_Body21');
        //_this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+30,_this.world.centerY+155,'Caterpillar_Body11');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_6.addChild(_this.text);
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart1,_this);
        
        _this.Caterpillar_body_head_7=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+175,'Caterpillar_Body21');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.7,0.7);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 90;
        _this.Caterpillar_body_head_7.addChild(_this.text)
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart1,_this);
        
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_1_1);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_2_2);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        //flagGroup1.add(_this.Caterpillar_body_head_2);
       
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
          
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
               
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(290, 110, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(160, 230, 450, 150);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('start', 30, false);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
          
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);

            _this.graphics5 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(290, 110, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(160, 230, 450, 150);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    changeQuestion:function()
    {
        flagGroup1.destroy();
        if(_this.no11<1)
        {
            count++;
            _this.getQuestion();
        }
        else
        {
            //console.log("gameEnd");
            //_this.stopVoice();
            _this.state.start('level2');
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
        target.frame=1;
        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.5.1a_"+target.name, 
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
        
        if(_this.dragedTxt === _this.rightAns)
        {
            telInitializer2.gameCorrectAns();
            //correct answer
            target.frame=1;
            _this.opt1.events.onInputUp.removeAll();
            
            if (_this.Caterpillar_head.key == 'start')
            {
                _this.Caterpillar_head.loadTexture('Caterpillar_Happy', 0);
                _this.Caterpillar_head.animations.add('Caterpillar_Happy');
                _this.Caterpillar_head.animations.play('Caterpillar_Happy',null,true);
            }
            _this.celebration = true;
            commonNavBar.playClickSound();
            commonNavBar.playCelebrationSound();
            _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');
            _this.anim4.play(25,false);
            this.Stararr.push(3);
  _this.sceneCount++;
             target.events.onInputDown.removeAll();
        _this.time.events.add(2000, _this.removeEverthing1, _this);
        }
        else
        {     
            telInitializer2.gameWrongAns();
                        // _this.opt1.events.onInputUp.removeAll();

            target.frame=1;
             _this.starsGroup.getChildAt(_this.count1).frame = 1;
           this.Stararr.push(1);


            //_this.wrong = false;
            
            _this.interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "level2.5.1a_",  
                access_token: window.acctkn 
            }

            //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
            if (_this.Caterpillar_head.key == 'start')
            {
                //console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
                _this.Caterpillar_head.loadTexture('wrong', 0);
                _this.Caterpillar_head.animations.add('wrong');
                _this.Caterpillar_head.animations.play('wrong',null,true);
            }

            _this.timer3 = _this.time.create(false);

            //  Set a TimerEvent to occur after 2 seconds
           /* _this.time.events.add(500, function()
            {
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();

            }, this);*/

           commonNavBar.playSnapSound();
            commonNavBar.playWrongCelebrationSound();
            target.events.onInputDown.removeAll();
            //commonNavBar.stopTimer();
            _this.time.events.add(2000,_this.removeEverthing1,_this);
            _this.dragedTxt = 0;
            //_this.getQuestion1();
        }
    },
    
    removeEverthing1:function() 
    {
        console.log("removeEverthing1       saaaaaaaaaaaaaaaaaaaaa");
        
        _this.wrong = true;
       _this.no11++;
        //_this.count1++;
        console.log("_this.no11 :"+_this.no11);
        console.log("_this.no22 :"+_this.no22);

 
        
        if(_this.no11<3)
        {
           // wrong = true;
            //_this.timer1.stop();
        this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
        _this.count1++;
        _this.wrong=true;
            // commonNavBar.stopTimer();            

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
            
            console.log("inside removeEverthing1");
            _this.MaintweenDestroy.onComplete.add(function(){
               // _this.count =0;
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
                _this.getQuestion1();
                     //  _this.no11++;

            },_this);  
        }
        else
        {
           // _this.stopVoice();
           // _this.timer1.stop();
var timerStopVar = commonNavBar.stopTimer();
            commonNavBar.stopVoice();

             commonNavBar.disableNavBar();
                    commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
            commonNavBar.speakerbtn=null;

            _this.timer1=null;
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
            
            console.log("inside removeEverthing1");
            _this.MaintweenDestroy.onComplete.add(function(){
            _this.state.start('sequence_NSSG_2_1level3',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
			},_this);  
        }
    },
   
	
    getVoice:function()
    {
        //_this.stopVoice();
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
            case 8: /*if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", "questionSounds/2.5.1/English/2.5.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", "questionSounds/2.5.1/Hindi/2.5.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", "questionSounds/2.5.1/Kannada/2.5.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", "questionSounds/2.5.1/Odiya/2.5.1.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }*/  commonNavBar.getVoice(_this.qsoundurl);

        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    }

};