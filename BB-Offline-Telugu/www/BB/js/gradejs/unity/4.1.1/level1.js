Game.unity4_1_1Newlevel1=function(){};

Game.unity4_1_1Newlevel1.prototype ={
    
    init:function(game)
    {
        _this= this;
        telInitializer.gameIdInit("Comparison4_1_1New",gradeSelected);
    },

    preload:function(game){
        if(!window.grade1NSC5){

            window.grade1NSC5 = true;

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

        //this.load.image('Level31_bg1',window.baseUrl+'assets/gradeAssets/3.1/BG.png');

        this.load.image('Unity4_1_1BG_01', window.baseUrl+'assets/gradeAssets/4.1.1/BG_01.png');

        this.load.image('Unity4_1_1key',window.baseUrl+'assets/gradeAssets/4.1.1/key.png');
        this.load.image('Unity4_1_1hammer',window.baseUrl+'assets/gradeAssets/4.1.1/hammer.png');
        this.load.image('Unity4_1_1boader',window.baseUrl+'assets/gradeAssets/4.1.1/boader.png');
        this.load.image('Unity4_1_1soccer',window.baseUrl+'assets/gradeAssets/4.1.1/soccer.png');
       // this.load.image('Unity4_1_1threat',window.baseUrl+'assets/gradeAssets/4.1.1/threat.png');
        
        this.load.image('Unity4_1_1niddle',window.baseUrl+'assets/gradeAssets/4.1.1/niddle.png');
        //this.load.image('Unity4_1_1pencil',window.baseUrl+'assets/gradeAssets/4.1.1/pencil.png');
        
        this.load.atlas('Unity4_1_1tray',window.baseUrl+'assets/gradeAssets/4.1.1/tray.png',window.baseUrl+'json/gradeJson/4.1.1/tray.json');
        this.load.atlas('Unity4_1_1lock',window.baseUrl+'assets/gradeAssets/4.1.1/lock.png',window.baseUrl+'json/gradeJson/4.1.1/lock.json');
        this.load.atlas('Unity4_1_1nail',window.baseUrl+'assets/gradeAssets/4.1.1/nail.png',window.baseUrl+'json/gradeJson/4.1.1/nail.json');
        this.load.atlas('Unity4_1_1pencil',window.baseUrl+'assets/gradeAssets/4.1.1/pencil.png',window.baseUrl+'json/gradeJson/4.1.1/pencil.json');
        this.load.atlas('Unity4_1_1thread',window.baseUrl+'assets/gradeAssets/4.1.1/thread.png',window.baseUrl+'json/gradeJson/4.1.1/thread.json');
        
        this.load.atlas('Unity4_1_1cup',window.baseUrl+'assets/gradeAssets/4.1.1/cup.png',window.baseUrl+'json/gradeJson/4.1.1/cup.json');
        this.load.atlas('Unity4_1_1niddle1',window.baseUrl+'assets/gradeAssets/4.1.1/niddle1.png',window.baseUrl+'json/gradeJson/4.1.1/niddle1.json');
        this.load.atlas('Unity4_1_1cutter',window.baseUrl+'assets/gradeAssets/4.1.1/cutter.png',window.baseUrl+'json/gradeJson/4.1.1/cutter.json');
        
    
        this.load.atlas('Unity4_1_1tick', window.baseUrl+'assets/gradeAssets/4.1.1/tickMark.png', window.baseUrl+'json/gradeJson/4.1.1/tickMark.json');
        this.load.image('Unity4_1_1hand', window.baseUrl+'assets/gradeAssets/4.1.1/hand.png');
       

    }

    },
    
	create:function(game)
    {

        _this.sceneCount = 0;
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.increase=0;
        _this.increase1=0;
        _this.wrong;
        
        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        
        _this.background;
        _this.click3;
        _this.click4;
        _this.rightCount ;

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
      
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
        
        _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Unity4_1_1BG_01');
        
        _this.navBar = _this.add.sprite(0,0,'Level42C_Topbar');
        _this.navBar.scale.setTo(1,1);
        
        _this.backbtn = _this.add.button(-3,3,'newCommonBackBtnForAll',function(){ 
               _this.backbtn.events.onInputDown.removeAll();
               _this.stopVoice();
               _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
               _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this,0,1,2);
        
        _this.speakerbtn = _this.add.sprite(600,6,'grade11_speaker');
        _this.speakerbtn.events.onInputDown.add(function()
        {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();

            _this.getVoice();

        },_this);
        
        _this.timebg = _this.add.sprite(305,6,'Level42C_timer');

        _this.timeDisplay = _this.add.text(330,22,_this.minutes + ' : '+ _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';
        
        _this.generateStarsForTheScene(6);
        _this.getQuestion();
    
        //language selection sounds
        
//        _this.playQuestionSound = document.createElement('audio');
//        _this.src = document.createElement('source');
//    
//        if(window.languageSelected=="English")
//        {
//            _this.src.setAttribute("src", window.baseUrl+window.baseUrl+"questionSounds/4.1.1/English/4.2.mp3");
//        }
//        else if(window.languageSelected=="Hindi")
//        {
//            _this.src.setAttribute("src", window.baseUrl+window.baseUrl+"questionSounds/4.1.1/Hindi/4.2.mp3");
//        }
//        else if(window.languageSelected=="Kannada")
//        {
//            _this.src.setAttribute("src", window.baseUrl+window.baseUrl+"questionSounds/4.1.1/Kannada/4.2.mp3");
//        }
//        else
//        {
//            _this.src.setAttribute("src", window.baseUrl+window.baseUrl+"questionSounds/4.1.1/Odiya/4.2.mp3");
//        }
//        
//        _this.playQuestionSound.appendChild(_this.src);
//        _this.playQuestionSound.play();
    },

    updateTimer:function() 
    {
        _this.counterForTimer++;
        ////console.log("lololil"+counterForTimer);
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            
            if(_this.minutes<10){
                _this.minutes = _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes = _this.minutes+1;
            }
        }
        else
        {
            if(_this.counterForTimer < 10)        
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

        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }

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
    },
    
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = _this.add.group();
		for (var i = 0; i < count; i++)
		{
			_this.starsGroup.create(_this.world.centerX-15, 10, 'starAnim1');
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
    
    onDragStart:function(target)
    {
       //console.log("onDragStart");
        
        //_this.noofAttempts++;
        
        //_this.currentTime = window.timeSaveFunc();
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
        
        /*if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }*/
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
        ////telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
         
        _this.vx = target.x;   
        _this.vy = target.y; 
        
        target.input.enableDrag(true);
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();

        target.events.onDragStop.add(function(target)
        {
            //console.log("target.key:"+target.key);
            //console.log("target.name:"+target.name);
            //console.log("_this.lockGrp1222222222222:"+_this.lockGrp1.getChildAt(0));
            //console.log("_this.lockGrp1222:"+_this.lockGrp1.getChildAt(0).key);

            
            _this.click1 = _this.add.audio('snapSound');
            _this.click1.play();
            
            for(var i=0;i<_this.lockGrp1.length;i++)
            {
                if(_this.checkOverlap(target,_this.graphics1) && (_this.lockGrp1.getChildAt(i).visible==false))
                { 
                    //console.log("target.name inside :"+target.name);
                    _this.increase++;
                    _this.increase1++;
        
                    //console.log("increase  :"+_this.increase);
                    target.visible = false;
                    
                    _this.lockGrp1.getChildAt(i).visible = true;
                    //_this.keyGrp1.getChildAt(i).visible = true;

                    //_this.lockGrp.getChildAt(i).visible = false;
                    //_this.keyGrp.getChildAt(i).visible = false;

                    if(_this.increase == 1) // drag 1
                    {
                        if(_this.questionNo == 1)
                        {
                            var tween1 = this.add.tween(_this.key1);
                            tween1.to({ x:272 , y:123}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key1.visible = false;
                                _this.key1_1.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 2)
                        {
                            var tween1 = this.add.tween(_this.key1);
                            tween1.to({ x:240 , y:120}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key1.visible = false;
                                _this.key1_1.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 3)
                        {
                            var tween1 = this.add.tween(_this.key1);
                            tween1.to({ x:210 , y:125}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key1.visible = false;
                                _this.key1_1.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 4)
                        {
                            var tween1 = this.add.tween(_this.key1);
                            tween1.to({ x:220 , y:140}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key1.visible = false;
                                _this.key1_1.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 5)
                        {
                            var tween1 = this.add.tween(_this.key1);
                            tween1.to({ x:220 , y:120}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key1.visible = false;
                                _this.lock1_1.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 6)
                        {
                            var tween1 = this.add.tween(_this.key1);
                            tween1.to({ x:385 , y:120}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key1.visible = false;
                                _this.key1_1.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 7)
                        {
                            var tween1 = this.add.tween(_this.key1);
                            tween1.to({ x:245 , y:170}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key1.visible = false;
                                _this.key1_1.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 8)
                        {
                            var tween1 = this.add.tween(_this.key1);
                            tween1.to({ x:390 , y:140}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key1.visible = false;
                                _this.key1_1.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 9)
                        {
                            var tween1 = this.add.tween(_this.key1);
                            tween1.to({ x:220 , y:145}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key1.visible = false;
                                _this.key1_1.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 10)
                        {
                            var tween1 = this.add.tween(_this.key1);
                            tween1.to({ x:240 , y:150}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key1.visible = false;
                                _this.lock1_1.visible = true;
                            },_this);
                        }
                       
                   
                    }
                    else if(_this.increase == 2)//drag 2
                    {
                        if(_this.questionNo == 1)
                        {
                            var tween1 = this.add.tween(_this.key2);
                            tween1.to({ x:450 , y:123}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key2.visible = false;
                                _this.key1_2.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 2)
                        {
                            var tween1 = this.add.tween(_this.key2);
                            tween1.to({ x:420 , y:120}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key2.visible = false;
                                _this.key1_2.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 3)
                        {
                            var tween1 = this.add.tween(_this.key2);
                            tween1.to({ x:365 , y:125}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key2.visible = false;
                                _this.key1_2.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 4)
                        {
                            var tween1 = this.add.tween(_this.key2);
                            tween1.to({ x:390 , y:140}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key2.visible = false;
                                _this.key1_2.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 5)
                        {
                            var tween1 = this.add.tween(_this.key2);
                            tween1.to({ x:380 , y:120}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key2.visible = false;
                                _this.lock1_2.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 6)
                        {
                            var tween1 = this.add.tween(_this.key2);
                            tween1.to({ x:545 , y:120}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key2.visible = false;
                                _this.key1_2.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 7)
                        {
                            var tween1 = this.add.tween(_this.key2);
                            tween1.to({ x:440 , y:170}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key2.visible = false;
                                _this.key1_2.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 8)
                        {
                            var tween1 = this.add.tween(_this.key2);
                            tween1.to({ x:555 , y:140}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key2.visible = false;
                                _this.key1_2.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 9)
                        {
                            var tween1 = this.add.tween(_this.key2);
                            tween1.to({ x:390 , y:145}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key2.visible = false;
                                _this.key1_2.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 10)
                        {
                            var tween1 = this.add.tween(_this.key2);
                            tween1.to({ x:400 , y:150}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key2.visible = false;
                                _this.lock1_2.visible = true;
                            },_this);
                        }
                    }
                    else if(_this.increase == 3)//drag 3
                    {
                        if(_this.questionNo == 1)
                        {
                            var tween1 = this.add.tween(_this.key3);
                            tween1.to({ x:600 , y:123}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key3.visible = false;
                                _this.key1_3.visible = true;
                             },_this);
                        }
                        else if(_this.questionNo == 2)
                        {
                            var tween1 = this.add.tween(_this.key3);
                            tween1.to({ x:630 , y:120}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key3.visible = false;
                                _this.key1_3.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 3)
                        {
                            var tween1 = this.add.tween(_this.key3);
                            tween1.to({ x:540 , y:125}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key3.visible = false;
                                _this.key1_3.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 4)
                        {
                            var tween1 = this.add.tween(_this.key3);
                            tween1.to({ x:560 , y:140}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key3.visible = false;
                                _this.key1_3.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 5)
                        {
                            var tween1 = this.add.tween(_this.key3);
                            tween1.to({ x:560 , y:120}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key3.visible = false;
                                _this.lock1_3.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 6)
                        {
                            var tween1 = this.add.tween(_this.key3);
                            tween1.to({ x:685 , y:120}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key3.visible = false;
                                _this.key1_3.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 7)
                        {
                            var tween1 = this.add.tween(_this.key3);
                            tween1.to({ x:680 , y:170}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key3.visible = false;
                                _this.key1_3.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 8)
                        {
                            var tween1 = this.add.tween(_this.key3);
                            tween1.to({ x:390 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key3.visible = false;
                                _this.key1_3.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 9)
                        {
                            var tween1 = this.add.tween(_this.key3);
                            tween1.to({ x:560 , y:145}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key3.visible = false;
                                _this.key1_3.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 10)
                        {
                            var tween1 = this.add.tween(_this.key3);
                            tween1.to({ x:560 , y:150}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key3.visible = false;
                                _this.lock1_3.visible = true;
                            },_this);
                        }
                    }
                    else if(_this.increase == 4)//drag 4
                    {
                        if(_this.questionNo == 1)
                        {
                            var tween1 = this.add.tween(_this.key4);
                            tween1.to({ x:770 , y:123}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key4.visible = false;
                                _this.key1_4.visible = true;
                             },_this);
                        }
                        else if(_this.questionNo == 2)
                        {
                            var tween1 = this.add.tween(_this.key4);
                            tween1.to({ x:240 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key4.visible = false;
                                _this.key1_4.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 3)
                        {
                            var tween1 = this.add.tween(_this.key4);
                            tween1.to({ x:740 , y:125}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key4.visible = false;
                                _this.key1_4.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 4)
                        {
                            var tween1 = this.add.tween(_this.key4);
                            tween1.to({ x:715 , y:140}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key4.visible = false;
                                _this.key1_4.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 5)
                        {
                            var tween1 = this.add.tween(_this.key4);
                            tween1.to({ x:740 , y:120}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key4.visible = false;
                                _this.lock1_4.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 6)
                        {
                            var tween1 = this.add.tween(_this.key4);
                            tween1.to({ x:385 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key4.visible = false;
                                _this.key1_4.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 8)
                        {
                            var tween1 = this.add.tween(_this.key4);
                            tween1.to({ x:555 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key4.visible = false;
                                _this.key1_4.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 9)
                        {
                            var tween1 = this.add.tween(_this.key4);
                            tween1.to({ x:733 , y:145}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key4.visible = false;
                                _this.key1_4.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 10)
                        {
                            var tween1 = this.add.tween(_this.key4);
                            tween1.to({ x:730 , y:150}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key4.visible = false;
                                _this.lock1_4.visible = true;
                            },_this);
                        }
                    }
                    else if(_this.increase == 5) //drag 5
                    {
                        if(_this.questionNo == 1)
                        {
                            var tween1 = this.add.tween(_this.key5);
                            tween1.to({ x:272 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key5.visible = false;
                                _this.key1_5.visible = true;
                             },_this);
                        }
                        else if(_this.questionNo == 2)
                        {
                            var tween1 = this.add.tween(_this.key5);
                            tween1.to({ x:420 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key5.visible = false;
                                _this.key1_5.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 3)
                        {
                            var tween1 = this.add.tween(_this.key5);
                            tween1.to({ x:210 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key5.visible = false;
                                _this.key1_5.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 4)
                        {
                            var tween1 = this.add.tween(_this.key5);
                            tween1.to({ x:220 , y:235}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key5.visible = false;
                                _this.key1_5.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 5)
                        {
                            var tween1 = this.add.tween(_this.key5);
                            tween1.to({ x:220 , y:200}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key5.visible = false;
                                _this.lock1_5.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 6)
                        {
                            var tween1 = this.add.tween(_this.key5);
                            tween1.to({ x:545 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key5.visible = false;
                                _this.key1_5.visible = true;
                            },_this);
                        }
                    }
                    else if(_this.increase == 6) //drag 6
                    {
                        if(_this.questionNo == 1)
                        {
                            var tween1 = this.add.tween(_this.key6);
                            tween1.to({ x:450 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key6.visible = false;
                                _this.key1_6.visible = true;
                             },_this);
                        }
                        else if(_this.questionNo == 2)
                        {
                            var tween1 = this.add.tween(_this.key6);
                            tween1.to({ x:630 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key6.visible = false;
                                _this.key1_6.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 3)
                        {
                            var tween1 = this.add.tween(_this.key6);
                            tween1.to({ x:365 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key6.visible = false;
                                _this.key1_6.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 4)
                        {
                            var tween1 = this.add.tween(_this.key6);
                            tween1.to({ x:390 , y:235}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key6.visible = false;
                                _this.key1_6.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 5)
                        {
                            var tween1 = this.add.tween(_this.key6);
                            tween1.to({ x:380 , y:200}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key6.visible = false;
                                _this.lock1_6.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 6)
                        {
                            var tween1 = this.add.tween(_this.key6);
                            tween1.to({ x:685 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key6.visible = false;
                                _this.key1_6.visible = true;
                            },_this);
                        }
                    }
                    else if(_this.increase == 7) //drag 7
                    {
                        if(_this.questionNo == 1)
                        {
                            var tween1 = this.add.tween(_this.key7);
                            tween1.to({ x:600 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key7.visible = false;
                                _this.key1_7.visible = true;
                             },_this);
                        }
                        else if(_this.questionNo == 3)
                        {
                            var tween1 = this.add.tween(_this.key7);
                            tween1.to({ x:540 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key7.visible = false;
                                _this.key1_7.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 4)
                        {
                            var tween1 = this.add.tween(_this.key7);
                            tween1.to({ x:560 , y:235}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key7.visible = false;
                                _this.key1_7.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 5)
                        {
                            var tween1 = this.add.tween(_this.key7);
                            tween1.to({ x:560 , y:200}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key7.visible = false;
                                _this.lock1_7.visible = true;
                            },_this);
                        }
                    }
                    else if(_this.increase == 8) //drag 8
                    {
                        if(_this.questionNo == 1)
                        {
                            var tween1 = this.add.tween(_this.key8);
                            tween1.to({ x:770 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key8.visible = false;
                                _this.key1_8.visible = true;
                             },_this);
                        }
                        else if(_this.questionNo == 3)
                        {
                            var tween1 = this.add.tween(_this.key8);
                            tween1.to({ x:740 , y:220}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key8.visible = false;
                                _this.key1_8.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 4)
                        {
                            var tween1 = this.add.tween(_this.key8);
                            tween1.to({ x:715 , y:235}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key8.visible = false;
                                _this.key1_8.visible = true;
                            },_this);
                        }
                        else if(_this.questionNo == 5)
                        {
                            var tween1 = this.add.tween(_this.key8);
                            tween1.to({ x:740 , y:200}, 1000, 'Linear', true, 0);

                            tween1.onComplete.add(function(){
                                _this.key8.visible = false;
                                _this.lock1_8.visible = true;
                            },_this);
                        }
                    }

                    break;
                }

            }

            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
            
            if(_this.increase1==8 && _this.qArrays[_this.no11]==1)
            {
                _this.tick.inputEnabled = true;
                _this.tick1.inputEnabled = true;

            }
           
            if(_this.increase1 == 6 && _this.qArrays[_this.no11]==2)
            {
                //console.log("increase 6 and 2  :  ");
                
//                _this.lock1 =_this.key7.animations.add('walk');
//                _this.lock1.play(10,true);
//                
//                _this.lock1_1 =_this.key8.animations.add('walk');
//                _this.lock1_1.play(10,true);
//                
//                _this.lock1_2 =_this.key9.animations.add('walk');
//                _this.lock1_2.play(10,true);
                
                _this.tick.inputEnabled = true;
                _this.tick1.inputEnabled = true;
            }
            
            if(_this.increase1 == 8 && _this.qArrays[_this.no11] == 3)
            {
                _this.tick.inputEnabled = true;
                _this.tick1.inputEnabled = true;
            }
            
            if(_this.increase1 == 8 && _this.qArrays[_this.no11] == 4)
            {
                _this.tick.inputEnabled = true;
                _this.tick1.inputEnabled = true;
            }
            
            if(_this.increase1 == 8 && _this.qArrays[_this.no11] == 5)
            {
                _this.tick.inputEnabled = true;
                _this.tick1.inputEnabled = true;

            }
            
            if(_this.increase1 == 6 && _this.qArrays[_this.no11] == 6)
            {
                _this.tick.inputEnabled = true;
                _this.tick1.inputEnabled = true;

            }
            
            if(_this.increase1 == 3 && _this.qArrays[_this.no11]==7)
            {
                _this.tick.inputEnabled = true;
                _this.tick1.inputEnabled = true;
                 
            }
            
            if(_this.increase1 == 4 && _this.qArrays[_this.no11] == 8)
            {
                _this.tick.inputEnabled = true;
                _this.tick1.inputEnabled = true;
            }
               
            if(_this.increase1 == 4 && _this.qArrays[_this.no11]==9)
            {
                _this.tick.inputEnabled = true;
                _this.tick1.inputEnabled = true;
            }
            
            if(_this.increase1 == 4 && _this.qArrays[_this.no11]==10)
            {
                _this.tick.inputEnabled = true;
                _this.tick1.inputEnabled = true;

            }
 
 
        },_this);
          
    },
    
    gotoFirstQuestion:function()
    {  
        //console.log("gotoFirstQuestion");//less
        
        _this.getVoice();
       
        _this.questionNo = 1;
        
        _this.increase=0;
        _this.increase1=0;
        
        //tray box
        _this.tray= _this.add.sprite(_this.world.centerX-245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray.anchor.setTo(0.5);
        _this.tray.scale.setTo(1.4,1.4);
        _this.tray.frame=0;
        
        _this.tray1= _this.add.sprite(_this.world.centerX+245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray1.anchor.setTo(0.5);
        _this.tray1.scale.setTo(1.4,1.4);
        _this.tray1.frame=0;
        

        // lock
        _this.lock1_1 =_this.add.sprite(_this.world.centerX-270,_this.world.centerY-170,'Unity4_1_1lock');
        _this.lock1_1.anchor.setTo(0.5);
        _this.lock1_1.visible = false;
        
        _this.lock1_2 =_this.add.sprite(_this.world.centerX-100,_this.world.centerY-170,'Unity4_1_1lock');
        _this.lock1_2.anchor.setTo(0.5);
        _this.lock1_2.visible = false;
        
        _this.lock1_3 =_this.add.sprite(_this.world.centerX+60,_this.world.centerY-170,'Unity4_1_1lock');
        _this.lock1_3.anchor.setTo(0.5);
        _this.lock1_3.visible = false;
        
        _this.lock1_4 =_this.add.sprite(_this.world.centerX+220,_this.world.centerY-170,'Unity4_1_1lock');
        _this.lock1_4.anchor.setTo(0.5);
        _this.lock1_4.visible = false;
        
        _this.lock1_5 =_this.add.sprite(_this.world.centerX-270,_this.world.centerY-70,'Unity4_1_1lock');
        _this.lock1_5.anchor.setTo(0.5);
        _this.lock1_5.visible = false;
        
        _this.lock1_6 =_this.add.sprite(_this.world.centerX-100,_this.world.centerY-70,'Unity4_1_1lock');
        _this.lock1_6.anchor.setTo(0.5);
        _this.lock1_6.visible = false;
        
        _this.lock1_7 =_this.add.sprite(_this.world.centerX+60,_this.world.centerY-70,'Unity4_1_1lock');
        _this.lock1_7.anchor.setTo(0.5);
        _this.lock1_7.visible = false;
        
        _this.lock1_8 =_this.add.sprite(_this.world.centerX+220,_this.world.centerY-70,'Unity4_1_1lock');
        _this.lock1_8.anchor.setTo(0.5);
        _this.lock1_8.visible = false;
        
        
        

        //key
        
        _this.key1_1 =_this.add.sprite(_this.world.centerX-208,_this.world.centerY-150,'Unity4_1_1key');
        _this.key1_1.anchor.setTo(0.5);
        _this.key1_1.visible = false;
        
        _this.key1_2 =_this.add.sprite(_this.world.centerX-38,_this.world.centerY-150,'Unity4_1_1key');
        _this.key1_2.anchor.setTo(0.5);
        _this.key1_2.visible = false;
        
        _this.key1_3 =_this.add.sprite(_this.world.centerX+123,_this.world.centerY-150,'Unity4_1_1key');
        _this.key1_3.anchor.setTo(0.5);
        _this.key1_3.visible = false;
        
        _this.key1_4 =_this.add.sprite(_this.world.centerX+285,_this.world.centerY-150,'Unity4_1_1key');
        _this.key1_4.anchor.setTo(0.5);
        _this.key1_4.visible = false;
        
        _this.key1_5 =_this.add.sprite(_this.world.centerX-208,_this.world.centerY-50,'Unity4_1_1key');
        _this.key1_5.anchor.setTo(0.5);
        _this.key1_5.visible = false;
        
        _this.key1_6 =_this.add.sprite(_this.world.centerX-38,_this.world.centerY-50,'Unity4_1_1key');
        _this.key1_6.anchor.setTo(0.5);
        _this.key1_6.visible = false;
        
        _this.key1_7 =_this.add.sprite(_this.world.centerX+123,_this.world.centerY-50,'Unity4_1_1key');
        _this.key1_7.anchor.setTo(0.5);
        _this.key1_7.visible = false;
        
        _this.key1_8 =_this.add.sprite(_this.world.centerX+285,_this.world.centerY-50,'Unity4_1_1key');
        _this.key1_8.anchor.setTo(0.5);
        _this.key1_8.visible = false;

        //drag lock 
        _this.lock1 =_this.add.sprite(_this.world.centerX-345,_this.world.centerY+35,'Unity4_1_1lock');
        _this.lock1.anchor.setTo(0.5);
        _this.lock1.inputEnabled = true;
        _this.lock1.name="lock1";
        _this.lock1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.keynew = _this.add.sprite(_this.world.centerX-345,_this.world.centerY+35,'Unity4_1_1lock');
        _this.keynew.anchor.setTo(0.5);
        _this.keynew.visible=false;
        
        _this.lock2 =_this.add.sprite(_this.world.centerX-282,_this.world.centerY+35,'Unity4_1_1lock');
        _this.lock2.anchor.setTo(0.5);
        _this.lock2.inputEnabled = true;
        _this.lock2.name="lock2";
        _this.lock2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock3 =_this.add.sprite(_this.world.centerX-215,_this.world.centerY+35,'Unity4_1_1lock');
        _this.lock3.anchor.setTo(0.5);
        _this.lock3.inputEnabled = true;
        _this.lock3.name="lock3";
        _this.lock3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock4 =_this.add.sprite(_this.world.centerX-150,_this.world.centerY+35,'Unity4_1_1lock');
        _this.lock4.anchor.setTo(0.5);
        _this.lock4.inputEnabled = true;
        _this.lock4.name="lock4";
        _this.lock4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock5 =_this.add.sprite(_this.world.centerX-370,_this.world.centerY+95,'Unity4_1_1lock');
        _this.lock5.anchor.setTo(0.5);
        _this.lock5.inputEnabled = true;
        _this.lock5.name="lock5";
        _this.lock5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock6 =_this.add.sprite(_this.world.centerX-310,_this.world.centerY+95,'Unity4_1_1lock');
        _this.lock6.anchor.setTo(0.5);
        _this.lock6.inputEnabled = true;
        _this.lock6.name="lock5";
        _this.lock6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock7 =_this.add.sprite(_this.world.centerX-249,_this.world.centerY+95,'Unity4_1_1lock');
        _this.lock7.anchor.setTo(0.5);
        _this.lock7.inputEnabled = true;
        _this.lock7.name="lock7";
        _this.lock7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock8 =_this.add.sprite(_this.world.centerX-187,_this.world.centerY+95,'Unity4_1_1lock');
        _this.lock8.anchor.setTo(0.5);
        _this.lock8.inputEnabled = true;
        _this.lock8.name="lock8";
        _this.lock8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock9 =_this.add.sprite(_this.world.centerX-125,_this.world.centerY+95,'Unity4_1_1lock');
        _this.lock9.anchor.setTo(0.5);
        _this.lock9.inputEnabled = true;
        _this.lock9.name="lock9";
        _this.lock9.events.onInputDown.add(_this.onDragStart,_this);
        
        //drag key
        _this.key1 =_this.add.sprite(_this.world.centerX+145,_this.world.centerY+60,'Unity4_1_1key');
        _this.key1.anchor.setTo(0.5);
        _this.key1.name="key1";
        //_this.key1.inputEnabled = true;
        _this.key1.events.onInputDown.add(_this.onDragStart,_this);
 
        _this.key2 =_this.add.sprite(_this.world.centerX+220,_this.world.centerY+60,'Unity4_1_1key');
        _this.key2.anchor.setTo(0.5);
        _this.key2.name="key2";
        //_this.key2.inputEnabled = true;
        _this.key2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key3 =_this.add.sprite(_this.world.centerX+295,_this.world.centerY+60,'Unity4_1_1key');
        _this.key3.anchor.setTo(0.5);
        _this.key3.name="key3";
       // _this.key3.inputEnabled = true;
        _this.key3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key4 =_this.add.sprite(_this.world.centerX+365,_this.world.centerY+60,'Unity4_1_1key');
        _this.key4.anchor.setTo(0.5);
        _this.key4.name="key4";
        //_this.key4.inputEnabled = true;
        _this.key4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key5 =_this.add.sprite(_this.world.centerX+180,_this.world.centerY+115,'Unity4_1_1key');
        _this.key5.anchor.setTo(0.5);
        _this.key5.name="key5";
        //_this.key5.inputEnabled = true;
        _this.key5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key6 =_this.add.sprite(_this.world.centerX+249,_this.world.centerY+115,'Unity4_1_1key');
        _this.key6.anchor.setTo(0.5);
        _this.key6.name="key6";
        //_this.key6.inputEnabled = true;
        _this.key6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key7 =_this.add.sprite(_this.world.centerX+320,_this.world.centerY+115,'Unity4_1_1key');
        _this.key7.anchor.setTo(0.5);
        _this.key7.name="key7";
        //_this.key7.inputEnabled = true;
        _this.key7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key8 =_this.add.sprite(_this.world.centerX+390,_this.world.centerY+115,'Unity4_1_1key');
        _this.key8.anchor.setTo(0.5);
        _this.key8.name="key8";
        //_this.key8.inputEnabled = true;
        _this.key8.events.onInputDown.add(_this.onDragStart,_this);
  
        //button
        _this.tick=_this.add.sprite(_this.world.centerX-250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.2,1.2);
        _this.tick.frame = 0;
        _this.tick.name = 'tick';
        _this.tick.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.tick1=_this.add.sprite(_this.world.centerX+250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.2,1.2);
        _this.tick1.frame = 0;
        _this.tick1.name = 'tick1';
        _this.tick1.events.onInputDown.add(_this.correctAns,_this);

        _this.trayGrp = _this.add.group();
        _this.lockGrp = _this.add.group();
        _this.keyGrp = _this.add.group();

        _this.optionGrp = _this.add.group();

        _this.trayGrp.add(_this.tray);
        _this.trayGrp.add(_this.tray1);

        _this.lockGrp.add(_this.lock1);
        _this.lockGrp.add(_this.lock2);
        _this.lockGrp.add(_this.lock3);
        _this.lockGrp.add(_this.lock4);
        _this.lockGrp.add(_this.lock5);
        _this.lockGrp.add(_this.lock6);
        _this.lockGrp.add(_this.lock7);
        _this.lockGrp.add(_this.lock8);
        _this.lockGrp.add(_this.lock9);
        
        _this.keyGrp.add(_this.key1);
        _this.keyGrp.add(_this.key2);
        _this.keyGrp.add(_this.key3);
        _this.keyGrp.add(_this.key4);
        _this.keyGrp.add(_this.key5);
        _this.keyGrp.add(_this.key6);
        _this.keyGrp.add(_this.key7);
        _this.keyGrp.add(_this.key8);
        
        _this.lockGrp1=_this.add.group();
        _this.keyGrp1=_this.add.group();
        
        _this.lockGrp1.add(_this.lock1_1);
        _this.lockGrp1.add(_this.lock1_2);
        _this.lockGrp1.add(_this.lock1_3);
        _this.lockGrp1.add(_this.lock1_4);
        _this.lockGrp1.add(_this.lock1_5);
        _this.lockGrp1.add(_this.lock1_6);
        _this.lockGrp1.add(_this.lock1_7);
        _this.lockGrp1.add(_this.lock1_8);
        
        _this.keyGrp1.add(_this.key1_1);
        _this.keyGrp1.add(_this.key1_2);
        _this.keyGrp1.add(_this.key1_3);
        _this.keyGrp1.add(_this.key1_4);
        _this.keyGrp1.add(_this.key1_5);
        _this.keyGrp1.add(_this.key1_6);
        _this.keyGrp1.add(_this.key1_7);
        _this.keyGrp1.add(_this.key1_8);

        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.tick1);
  
        _this.trayGrp.x = 1000;
        _this.tween = _this.add.tween(_this.trayGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.keyGrp.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.keyGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
   
        _this.graphics1 = _this.add.graphics(100, 100);
                
        // draw a rectangle
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(10, -50, 650,190)
        _this.graphics1.alpha= 0;
        
        //_this.keynew = _this.add.sprite(_this.world.centerX-345,_this.world.centerY+35,'Unity4_1_1lock');
        //_this.keynew.anchor.setTo(0.5);
        
        _this.hand = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+25,'Unity4_1_1hand');
        _this.hand.anchor.setTo(0.5);
        _this.hand.scale.setTo(0.7);
        _this.hand.visible = false;
        
        _this.tween.onComplete.add(function()
        {
            var tween1 = this.add.tween(_this.hand);
            tween1.to({ x:250 , y:150}, 1000, 'Linear', true, 0);
            
            var tween2 = this.add.tween(_this.keynew);
            tween2.to({ x:200 , y:150}, 1000, 'Linear', true, 0);
            
            _this.hand.visible = true;
            _this.keynew.visible =true;
            
            tween1.onComplete.add(function(){
                 _this.keynew.visible =false;
                 _this.hand.visible = false;
            },this);
        
        },this);          
    },
    
    gotoSecondQuestion:function()
    {                                  
        //console.log("gotoSecondQuestion");//more
        _this.questionNo = 2;
        
        _this.increase=0;
        _this.increase1=0;
     
        _this.getVoice();

        //tray box
        _this.tray= _this.add.sprite(_this.world.centerX-245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray.anchor.setTo(0.5);
        _this.tray.scale.setTo(1.4,1.4);
        _this.tray.frame=0;
        
        _this.tray_1= _this.add.sprite(_this.world.centerX-246,_this.world.centerY+156,'Unity4_1_1boader');
        _this.tray_1.anchor.setTo(0.5);
        
        _this.tray1=_this.add.sprite(_this.world.centerX+245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray1.anchor.setTo(0.5);
        _this.tray1.scale.setTo(1.4,1.4);
        _this.tray1.frame=0;
        
        //hammer
        _this.lock1_1 =_this.add.sprite(_this.world.centerX-200,_this.world.centerY-160,'Unity4_1_1hammer');
        _this.lock1_1.anchor.setTo(0.5);
        _this.lock1_1.visible=false;
        
        _this.lock1_2 =_this.add.sprite(_this.world.centerX-10,_this.world.centerY-160,'Unity4_1_1hammer');
        _this.lock1_2.anchor.setTo(0.5);
        _this.lock1_2.visible=false;
        
        _this.lock1_3 =_this.add.sprite(_this.world.centerX+180,_this.world.centerY-160,'Unity4_1_1hammer');
        _this.lock1_3.anchor.setTo(0.5);
        _this.lock1_3.visible=false;
        
        _this.lock1_4 =_this.add.sprite(_this.world.centerX-200,_this.world.centerY-70,'Unity4_1_1hammer');
        _this.lock1_4.anchor.setTo(0.5);
        _this.lock1_4.visible=false;
        
        _this.lock1_5 =_this.add.sprite(_this.world.centerX-10,_this.world.centerY-70,'Unity4_1_1hammer');
        _this.lock1_5.anchor.setTo(0.5);
        _this.lock1_5.visible=false;
        
        _this.lock1_6 =_this.add.sprite(_this.world.centerX+180,_this.world.centerY-70,'Unity4_1_1hammer');
        _this.lock1_6.anchor.setTo(0.5);
        _this.lock1_6.visible=false;
        
        //nail
        _this.key1_1 =_this.add.sprite(_this.world.centerX-228,_this.world.centerY-140,'Unity4_1_1nail');
        _this.key1_1.anchor.setTo(0.5);
        _this.key1_1.visible=false;
        
        _this.key1_2 =_this.add.sprite(_this.world.centerX-38,_this.world.centerY-140,'Unity4_1_1nail');
        _this.key1_2.anchor.setTo(0.5);
        _this.key1_2.visible=false;
        
        _this.key1_3 =_this.add.sprite(_this.world.centerX+155,_this.world.centerY-140,'Unity4_1_1nail');
        _this.key1_3.anchor.setTo(0.5);
        _this.key1_3.visible=false;
        
        _this.key1_4 =_this.add.sprite(_this.world.centerX-228,_this.world.centerY-50,'Unity4_1_1nail');
        _this.key1_4.anchor.setTo(0.5);
        _this.key1_4.visible=false;
        
        _this.key1_5 =_this.add.sprite(_this.world.centerX-38,_this.world.centerY-50,'Unity4_1_1nail');
        _this.key1_5.anchor.setTo(0.5);
        _this.key1_5.visible=false;
        
        _this.key1_6 =_this.add.sprite(_this.world.centerX+155,_this.world.centerY-50,'Unity4_1_1nail');
        _this.key1_6.anchor.setTo(0.5);
        _this.key1_6.visible=false;
        
        //drag lock 
        _this.lock1 =_this.add.sprite(_this.world.centerX-310,_this.world.centerY+65,'Unity4_1_1hammer');
        _this.lock1.anchor.setTo(0.5);
        _this.lock1.inputEnabled = true;
        _this.lock1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.hammer =_this.add.sprite(_this.world.centerX-310,_this.world.centerY+65,'Unity4_1_1hammer');
        _this.hammer.anchor.setTo(0.5);
        _this.hammer.visible = false;
        
        _this.lock2 =_this.add.sprite(_this.world.centerX-150,_this.world.centerY+65,'Unity4_1_1hammer');
        _this.lock2.anchor.setTo(0.5);
        _this.lock2.inputEnabled = true;
        _this.lock2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock3 =_this.add.sprite(_this.world.centerX-335,_this.world.centerY+95,'Unity4_1_1hammer');
        _this.lock3.anchor.setTo(0.5);
        _this.lock3.inputEnabled = true;
        _this.lock3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock4 =_this.add.sprite(_this.world.centerX-175,_this.world.centerY+95,'Unity4_1_1hammer');
        _this.lock4.anchor.setTo(0.5);
        _this.lock4.inputEnabled = true;
        _this.lock4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock5 =_this.add.sprite(_this.world.centerX-360,_this.world.centerY+125,'Unity4_1_1hammer');
        _this.lock5.anchor.setTo(0.5);
        _this.lock5.inputEnabled = true;
        _this.lock5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock6 =_this.add.sprite(_this.world.centerX-205,_this.world.centerY+125,'Unity4_1_1hammer');
        _this.lock6.anchor.setTo(0.5);
        _this.lock6.inputEnabled = true;
        _this.lock6.events.onInputDown.add(_this.onDragStart,_this);

        //key
        _this.key1 =_this.add.sprite(_this.world.centerX+145,_this.world.centerY+70,'Unity4_1_1nail');
        _this.key1.anchor.setTo(0.5);
        
        _this.key2 =_this.add.sprite(_this.world.centerX+230,_this.world.centerY+70,'Unity4_1_1nail');
        _this.key2.anchor.setTo(0.5);
        
        _this.key3 =_this.add.sprite(_this.world.centerX+320,_this.world.centerY+70,'Unity4_1_1nail');
        _this.key3.anchor.setTo(0.5);
        
        _this.key4 =_this.add.sprite(_this.world.centerX+180,_this.world.centerY+92,'Unity4_1_1nail');
        _this.key4.anchor.setTo(0.5);
        
        _this.key5 =_this.add.sprite(_this.world.centerX+270,_this.world.centerY+92,'Unity4_1_1nail');
        _this.key5.anchor.setTo(0.5);
        
        _this.key6 =_this.add.sprite(_this.world.centerX+365,_this.world.centerY+92,'Unity4_1_1nail');
        _this.key6.anchor.setTo(0.5);
        
        _this.key7 =_this.add.sprite(_this.world.centerX+135,_this.world.centerY+120,'Unity4_1_1nail');
        _this.key7.anchor.setTo(0.5);
        
        _this.key8 =_this.add.sprite(_this.world.centerX+232,_this.world.centerY+120,'Unity4_1_1nail');
        _this.key8.anchor.setTo(0.5);
        
        _this.key9 =_this.add.sprite(_this.world.centerX+325,_this.world.centerY+120,'Unity4_1_1nail');
        _this.key9.anchor.setTo(0.5);
  
        //button
        _this.tick=_this.add.sprite(_this.world.centerX-250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.2,1.2);
        
        _this.tick.name = 'tick';
        _this.tick.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.tick1=_this.add.sprite(_this.world.centerX+250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.2,1.2);
        
        _this.tick1.name = 'tick1';
        _this.tick1.events.onInputDown.add(_this.correctAns,_this);

        _this.trayGrp = _this.add.group();
        _this.lockGrp = _this.add.group();
        _this.keyGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.trayGrp.add(_this.tray);
        _this.trayGrp.add(_this.tray1);
        
        _this.lockGrp.add(_this.lock1);
        _this.lockGrp.add(_this.lock2);
        _this.lockGrp.add(_this.lock3);
        _this.lockGrp.add(_this.lock4);
        _this.lockGrp.add(_this.lock5);
        _this.lockGrp.add(_this.lock6);
        _this.lockGrp.add(_this.tray_1);

        _this.keyGrp.add(_this.key1);
        _this.keyGrp.add(_this.key2);
        _this.keyGrp.add(_this.key3);
        _this.keyGrp.add(_this.key4);
        _this.keyGrp.add(_this.key5);
        _this.keyGrp.add(_this.key6);
        _this.keyGrp.add(_this.key7);
        _this.keyGrp.add(_this.key8);
        _this.keyGrp.add(_this.key9);

        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.tick1);
        
        _this.lockGrp1=_this.add.group();
        _this.keyGrp1=_this.add.group();
        
        _this.lockGrp1.add(_this.lock1_1);
        _this.lockGrp1.add(_this.lock1_2);
        _this.lockGrp1.add(_this.lock1_3);
        _this.lockGrp1.add(_this.lock1_4);
        _this.lockGrp1.add(_this.lock1_5);
        _this.lockGrp1.add(_this.lock1_6);
     
        _this.keyGrp1.add(_this.key1_1);
        _this.keyGrp1.add(_this.key1_2);
        _this.keyGrp1.add(_this.key1_3);
        _this.keyGrp1.add(_this.key1_4);
        _this.keyGrp1.add(_this.key1_5);
        _this.keyGrp1.add(_this.key1_6);
   
        _this.trayGrp.x = 1000;
        _this.tween = _this.add.tween(_this.trayGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.keyGrp.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.keyGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
         _this.graphics1 = _this.add.graphics(100, 100);
                
        // draw a rectangle
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(10, -50, 650,190)
        _this.graphics1.alpha= 0;
        
        _this.hand = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+80,'Unity4_1_1hand');
        _this.hand.anchor.setTo(0.5);
        _this.hand.scale.setTo(0.7);
        _this.hand.visible = false;
        
        _this.tween.onComplete.add(function()
        {
            var tween1 = this.add.tween(_this.hand);
            tween1.to({ x:250 , y:150}, 1000, 'Linear', true, 0);
            
            var tween2 = this.add.tween(_this.hammer);
            tween2.to({ x:200 , y:150}, 1000, 'Linear', true, 0);
            
            _this.hand.visible = true;
            _this.hammer.visible =true;
            
            tween2.onComplete.add(function(){
                 _this.hammer.visible =false;
                 _this.hand.visible = false;
            },this);
        
        },this);
        
    },
   
    gotoThirdQuestion:function()
    {
        //console.log("gotoThirdQuestion");//less
        _this.questionNo = 3;
        
        _this.increase=0;
        _this.increase1=0;
  
        _this.getVoice();
        

        //tray box
        _this.tray= _this.add.sprite(_this.world.centerX-245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray.anchor.setTo(0.5);
        _this.tray.scale.setTo(1.4,1.4);
        _this.tray.frame=0;
        
        _this.tray1= _this.add.sprite(_this.world.centerX+245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray1.anchor.setTo(0.5);
        _this.tray1.scale.setTo(1.4,1.4);
        _this.tray1.frame=0;
        
        //soccer
        _this.key1_1 =_this.add.sprite(_this.world.centerX-258,_this.world.centerY-128,'Unity4_1_1soccer');
        _this.key1_1.anchor.setTo(0.5);
        _this.key1_1.visible =false;
        
        _this.key1_2 =_this.add.sprite(_this.world.centerX-85,_this.world.centerY-128,'Unity4_1_1soccer');
        _this.key1_2.anchor.setTo(0.5);
        _this.key1_2.visible =false;
        
        _this.key1_3 =_this.add.sprite(_this.world.centerX+80,_this.world.centerY-128,'Unity4_1_1soccer');
        _this.key1_3.anchor.setTo(0.5);
        _this.key1_3.visible =false;
        
        _this.key1_4 =_this.add.sprite(_this.world.centerX+245,_this.world.centerY-128,'Unity4_1_1soccer');
        _this.key1_4.anchor.setTo(0.5);
        _this.key1_4.visible =false;
        
        _this.key1_5 =_this.add.sprite(_this.world.centerX-258,_this.world.centerY-38,'Unity4_1_1soccer');
        _this.key1_5.anchor.setTo(0.5);
        _this.key1_5.visible =false;
        
        _this.key1_6 =_this.add.sprite(_this.world.centerX-85,_this.world.centerY-38,'Unity4_1_1soccer');
        _this.key1_6.anchor.setTo(0.5);
        _this.key1_6.visible =false;
        
        _this.key1_7 =_this.add.sprite(_this.world.centerX+80,_this.world.centerY-38,'Unity4_1_1soccer');
        _this.key1_7.anchor.setTo(0.5);
        _this.key1_7.visible =false;
        
        _this.key1_8 =_this.add.sprite(_this.world.centerX+245,_this.world.centerY-38,'Unity4_1_1soccer');
        _this.key1_8.anchor.setTo(0.5);
        _this.key1_8.visible =false;
        
        // cup
        _this.lock1_1 =_this.add.sprite(_this.world.centerX-250,_this.world.centerY-150,'Unity4_1_1cup');
        _this.lock1_1.anchor.setTo(0.5);
        _this.lock1_1.visible =false;
        
        _this.lock1_2 =_this.add.sprite(_this.world.centerX-78,_this.world.centerY-150,'Unity4_1_1cup');
        _this.lock1_2.anchor.setTo(0.5);
        _this.lock1_2.visible =false;
        
        _this.lock1_3 =_this.add.sprite(_this.world.centerX+88,_this.world.centerY-150,'Unity4_1_1cup');
        _this.lock1_3.anchor.setTo(0.5);
        _this.lock1_3.visible =false;
        
        _this.lock1_4 =_this.add.sprite(_this.world.centerX+250,_this.world.centerY-150,'Unity4_1_1cup');
        _this.lock1_4.anchor.setTo(0.5);
        _this.lock1_4.visible =false;
        
        _this.lock1_5 =_this.add.sprite(_this.world.centerX-250,_this.world.centerY-60,'Unity4_1_1cup');
        _this.lock1_5.anchor.setTo(0.5);
        _this.lock1_5.visible =false;
        
        _this.lock1_6 =_this.add.sprite(_this.world.centerX-78,_this.world.centerY-60,'Unity4_1_1cup');
        _this.lock1_6.anchor.setTo(0.5);
        _this.lock1_6.visible =false;
        
        _this.lock1_7 =_this.add.sprite(_this.world.centerX+88,_this.world.centerY-60,'Unity4_1_1cup');
        _this.lock1_7.anchor.setTo(0.5);
        _this.lock1_7.visible =false;
        
        _this.lock1_8 =_this.add.sprite(_this.world.centerX+250,_this.world.centerY-60,'Unity4_1_1cup');
        _this.lock1_8.anchor.setTo(0.5);
        _this.lock1_8.visible =false;
     
        //drag lock 
        _this.lock1 =_this.add.sprite(_this.world.centerX-335,_this.world.centerY+40,'Unity4_1_1cup');
        _this.lock1.anchor.setTo(0.5);
        _this.lock1.inputEnabled = true;
        _this.lock1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.cup =_this.add.sprite(_this.world.centerX-335,_this.world.centerY+40,'Unity4_1_1cup');
        _this.cup.anchor.setTo(0.5);
        _this.cup.visible=false;
        
        _this.lock2 =_this.add.sprite(_this.world.centerX-243,_this.world.centerY+40,'Unity4_1_1cup');
        _this.lock2.anchor.setTo(0.5);
        _this.lock2.inputEnabled = true;
        _this.lock2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock3 =_this.add.sprite(_this.world.centerX-150,_this.world.centerY+40,'Unity4_1_1cup');
        _this.lock3.anchor.setTo(0.5);
        _this.lock3.inputEnabled = true;
        _this.lock3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock4 =_this.add.sprite(_this.world.centerX-347,_this.world.centerY+80,'Unity4_1_1cup');
        _this.lock4.anchor.setTo(0.5);
        _this.lock4.inputEnabled = true;
        _this.lock4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock5 =_this.add.sprite(_this.world.centerX-243,_this.world.centerY+80,'Unity4_1_1cup');
        _this.lock5.anchor.setTo(0.5);
        _this.lock5.inputEnabled = true;
        _this.lock5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock6 =_this.add.sprite(_this.world.centerX-143,_this.world.centerY+80,'Unity4_1_1cup');
        _this.lock6.anchor.setTo(0.5);
        _this.lock6.inputEnabled = true;
        _this.lock6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock7 =_this.add.sprite(_this.world.centerX-360,_this.world.centerY+117,'Unity4_1_1cup');
        _this.lock7.anchor.setTo(0.5);
        _this.lock7.inputEnabled = true;
        _this.lock7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock8 =_this.add.sprite(_this.world.centerX-243,_this.world.centerY+117,'Unity4_1_1cup');
        _this.lock8.anchor.setTo(0.5);
        _this.lock8.inputEnabled = true;
        _this.lock8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock9 =_this.add.sprite(_this.world.centerX-130,_this.world.centerY+117,'Unity4_1_1cup');
        _this.lock9.anchor.setTo(0.5);
        _this.lock9.inputEnabled = true;
        _this.lock9.events.onInputDown.add(_this.onDragStart,_this);

        //key
        _this.key1 =_this.add.sprite(_this.world.centerX+145,_this.world.centerY+60,'Unity4_1_1soccer');
        _this.key1.anchor.setTo(0.5);
        //_this.key1.inputEnabled = true;
        _this.key1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key2 =_this.add.sprite(_this.world.centerX+253,_this.world.centerY+60,'Unity4_1_1soccer');
        _this.key2.anchor.setTo(0.5);
        //_this.key2.inputEnabled = true;
        _this.key2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key3 =_this.add.sprite(_this.world.centerX+360,_this.world.centerY+60,'Unity4_1_1soccer');
        _this.key3.anchor.setTo(0.5);
        _this.key3.inputEnabled = true;
        _this.key3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key4 =_this.add.sprite(_this.world.centerX+130,_this.world.centerY+92,'Unity4_1_1soccer');
        _this.key4.anchor.setTo(0.5);
       // _this.key4.inputEnabled = true;
        _this.key4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key5 =_this.add.sprite(_this.world.centerX+253,_this.world.centerY+92,'Unity4_1_1soccer');
        _this.key5.anchor.setTo(0.5);
       // _this.key5.inputEnabled = true;
        _this.key5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key6 =_this.add.sprite(_this.world.centerX+370,_this.world.centerY+92,'Unity4_1_1soccer');
        _this.key6.anchor.setTo(0.5);
        //_this.key6.inputEnabled = true;
        _this.key6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key7 =_this.add.sprite(_this.world.centerX+120,_this.world.centerY+123,'Unity4_1_1soccer');
        _this.key7.anchor.setTo(0.5);
       //_this.key7.inputEnabled = true;
        _this.key7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key8 =_this.add.sprite(_this.world.centerX+380,_this.world.centerY+123,'Unity4_1_1soccer');
        _this.key8.anchor.setTo(0.5);
        //_this.key8.inputEnabled = true;
        _this.key8.events.onInputDown.add(_this.onDragStart,_this);
        
        //button
        _this.tick=_this.add.sprite(_this.world.centerX-250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.2,1.2);
        
        _this.tick.name = 'tick';
        _this.tick.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.tick1=_this.add.sprite(_this.world.centerX+250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.2,1.2);
        
        _this.tick1.name = 'tick1';
        _this.tick1.events.onInputDown.add(_this.correctAns,_this);

        _this.trayGrp = _this.add.group();
        _this.keyGrp = _this.add.group();
        _this.lockGrp = _this.add.group();
        
        _this.optionGrp = _this.add.group();
        
        _this.trayGrp.add(_this.tray);
        _this.trayGrp.add(_this.tray1);
        
        _this.lockGrp.add(_this.lock1);
        _this.lockGrp.add(_this.lock2);
        _this.lockGrp.add(_this.lock3);
        _this.lockGrp.add(_this.lock4);
        _this.lockGrp.add(_this.lock5);
        _this.lockGrp.add(_this.lock6);
        _this.lockGrp.add(_this.lock7);
        _this.lockGrp.add(_this.lock8);
        _this.lockGrp.add(_this.lock9);

        _this.keyGrp.add(_this.key1);
        _this.keyGrp.add(_this.key2);
        _this.keyGrp.add(_this.key3);
        _this.keyGrp.add(_this.key4);
        _this.keyGrp.add(_this.key5);
        _this.keyGrp.add(_this.key6);
        _this.keyGrp.add(_this.key7);
        _this.keyGrp.add(_this.key8);
   
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.tick1);
        
        _this.keyGrp1=_this.add.group();
        _this.lockGrp1=_this.add.group();

        _this.keyGrp1.add(_this.key1_1);
        _this.keyGrp1.add(_this.key1_2);
        _this.keyGrp1.add(_this.key1_3);
        _this.keyGrp1.add(_this.key1_4);
        _this.keyGrp1.add(_this.key1_5);
        _this.keyGrp1.add(_this.key1_6);
        _this.keyGrp1.add(_this.key1_7);
        _this.keyGrp1.add(_this.key1_8);
        
        _this.lockGrp1.add(_this.lock1_1);
        _this.lockGrp1.add(_this.lock1_2);
        _this.lockGrp1.add(_this.lock1_3);
        _this.lockGrp1.add(_this.lock1_4);
        _this.lockGrp1.add(_this.lock1_5);
        _this.lockGrp1.add(_this.lock1_6);
        _this.lockGrp1.add(_this.lock1_7);
        _this.lockGrp1.add(_this.lock1_8);
    
        _this.trayGrp.x = 1000;
        _this.tween = _this.add.tween(_this.trayGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.keyGrp.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.keyGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphics1 = _this.add.graphics(100, 100);
                
        // draw a rectangle
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(10, -50, 650,190)
        _this.graphics1.alpha= 0;
     
        _this.hand = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+80,'Unity4_1_1hand');
        _this.hand.anchor.setTo(0.5);
        _this.hand.scale.setTo(0.7);
        _this.hand.visible = false;
        
        _this.tween.onComplete.add(function()
        {
            var tween1 = this.add.tween(_this.hand);
            tween1.to({ x:250 , y:150}, 1000, 'Linear', true, 0);
            
            var tween2 = this.add.tween(_this.cup);
            tween2.to({ x:200 , y:150}, 1000, 'Linear', true, 0);
            
            _this.hand.visible = true;
            _this.cup.visible =true;
            
            tween2.onComplete.add(function(){
                 _this.cup.visible =false;
                 _this.hand.visible = false;
            },this);
        
        },this);
           
    },
   
    gotoFourthQuestion:function()
    {
        //console.log("gotoFourthQuestion");//more
        _this.questionNo = 4;
        
        _this.increase=0;
        _this.increase1=0;
      
        _this.getVoice();
        
        
        _this.lockGrp1=_this.add.group();
        _this.keyGrp1=_this.add.group();
        
        //tray box
        _this.tray= _this.add.sprite(_this.world.centerX-245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray.anchor.setTo(0.5);
        _this.tray.scale.setTo(1.4,1.4);
        _this.tray.frame=0;
        
        _this.tray1= _this.add.sprite(_this.world.centerX+245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray1.anchor.setTo(0.5);
        _this.tray1.scale.setTo(1.4,1.4);
        _this.tray1.frame=0;
        
         //niddle
        _this.key1_1 =_this.add.sprite(_this.world.centerX-258,_this.world.centerY-128,'Unity4_1_1niddle');
        _this.key1_1.anchor.setTo(0.5);
        _this.key1_1.visible =false;
        
        _this.key1_2 =_this.add.sprite(_this.world.centerX-85,_this.world.centerY-128,'Unity4_1_1niddle');
        _this.key1_2.anchor.setTo(0.5);
        _this.key1_2.visible =false;
        
        _this.key1_3 =_this.add.sprite(_this.world.centerX+80,_this.world.centerY-128,'Unity4_1_1niddle');
        _this.key1_3.anchor.setTo(0.5);
        _this.key1_3.visible =false;
        
        _this.key1_4 =_this.add.sprite(_this.world.centerX+245,_this.world.centerY-128,'Unity4_1_1niddle');
        _this.key1_4.anchor.setTo(0.5);
        _this.key1_4.visible =false;
        
        _this.key1_5 =_this.add.sprite(_this.world.centerX-258,_this.world.centerY-38,'Unity4_1_1niddle');
        _this.key1_5.anchor.setTo(0.5);
        _this.key1_5.visible =false;
        
        _this.key1_6 =_this.add.sprite(_this.world.centerX-85,_this.world.centerY-38,'Unity4_1_1niddle');
        _this.key1_6.anchor.setTo(0.5);
        _this.key1_6.visible =false;
        
        _this.key1_7 =_this.add.sprite(_this.world.centerX+80,_this.world.centerY-38,'Unity4_1_1niddle');
        _this.key1_7.anchor.setTo(0.5);
        _this.key1_7.visible =false;
        
        _this.key1_8 =_this.add.sprite(_this.world.centerX+245,_this.world.centerY-38,'Unity4_1_1niddle');
        _this.key1_8.anchor.setTo(0.5);
        _this.key1_8.visible =false;
        
        // threat
        _this.lock1_1 =_this.add.sprite(_this.world.centerX-280,_this.world.centerY-150,'Unity4_1_1thread');
        _this.lock1_1.anchor.setTo(0.5);
        _this.lock1_1.visible =false;
        
        _this.lock1_2 =_this.add.sprite(_this.world.centerX-108,_this.world.centerY-150,'Unity4_1_1thread');
        _this.lock1_2.anchor.setTo(0.5);
        _this.lock1_2.visible =false;
        
        _this.lock1_3 =_this.add.sprite(_this.world.centerX+58,_this.world.centerY-150,'Unity4_1_1thread');
        _this.lock1_3.anchor.setTo(0.5);
        _this.lock1_3.visible =false;
        
        _this.lock1_4 =_this.add.sprite(_this.world.centerX+220,_this.world.centerY-150,'Unity4_1_1thread');
        _this.lock1_4.anchor.setTo(0.5);
        _this.lock1_4.visible =false;
        
        _this.lock1_5 =_this.add.sprite(_this.world.centerX-280,_this.world.centerY-60,'Unity4_1_1thread');
        _this.lock1_5.anchor.setTo(0.5);
        _this.lock1_5.visible =false;
        
        _this.lock1_6 =_this.add.sprite(_this.world.centerX-108,_this.world.centerY-60,'Unity4_1_1thread');
        _this.lock1_6.anchor.setTo(0.5);
        _this.lock1_6.visible =false;
        
        _this.lock1_7 =_this.add.sprite(_this.world.centerX+58,_this.world.centerY-60,'Unity4_1_1thread');
        _this.lock1_7.anchor.setTo(0.5);
        _this.lock1_7.visible =false;
        
        _this.lock1_8 =_this.add.sprite(_this.world.centerX+220,_this.world.centerY-60,'Unity4_1_1thread');
        _this.lock1_8.anchor.setTo(0.5);
        _this.lock1_8.visible =false;
        
        //drag threat
        _this.lock1 =_this.add.sprite(_this.world.centerX-360,_this.world.centerY+75,'Unity4_1_1thread');
        _this.lock1.anchor.setTo(0.5);
        _this.lock1.inputEnabled = true;
        _this.lock1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.thread =_this.add.sprite(_this.world.centerX-360,_this.world.centerY+75,'Unity4_1_1thread');
        _this.thread.anchor.setTo(0.5);
        _this.thread.visible=false;
        
        _this.lock2 =_this.add.sprite(_this.world.centerX-280,_this.world.centerY+75,'Unity4_1_1thread');
        _this.lock2.anchor.setTo(0.5);
        _this.lock2.inputEnabled = true;
        _this.lock2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock3 =_this.add.sprite(_this.world.centerX-200,_this.world.centerY+75,'Unity4_1_1thread');
        _this.lock3.anchor.setTo(0.5);
        _this.lock3.inputEnabled = true;
        _this.lock3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock4 =_this.add.sprite(_this.world.centerX-125,_this.world.centerY+75,'Unity4_1_1thread');
        _this.lock4.anchor.setTo(0.5);
        _this.lock4.inputEnabled = true;
        _this.lock4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock5 =_this.add.sprite(_this.world.centerX-360,_this.world.centerY+120,'Unity4_1_1thread');
        _this.lock5.anchor.setTo(0.5);
        _this.lock5.inputEnabled = true;
        _this.lock5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock6 =_this.add.sprite(_this.world.centerX-280,_this.world.centerY+120,'Unity4_1_1thread');
        _this.lock6.anchor.setTo(0.5);
        _this.lock6.inputEnabled = true;
        _this.lock6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock7 =_this.add.sprite(_this.world.centerX-200,_this.world.centerY+120,'Unity4_1_1thread');
        _this.lock7.anchor.setTo(0.5);
        _this.lock7.inputEnabled = true;
        _this.lock7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock8 =_this.add.sprite(_this.world.centerX-125,_this.world.centerY+120,'Unity4_1_1thread');
        _this.lock8.anchor.setTo(0.5);
        _this.lock8.inputEnabled = true;
        _this.lock8.events.onInputDown.add(_this.onDragStart,_this);
        

        // drag niddle
        _this.key1 =_this.add.sprite(_this.world.centerX+160,_this.world.centerY+60,'Unity4_1_1niddle');
        _this.key1.anchor.setTo(0.5);
        //_this.key1.inputEnabled = true;
        _this.key1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key2 =_this.add.sprite(_this.world.centerX+340,_this.world.centerY+60,'Unity4_1_1niddle');
        _this.key2.anchor.setTo(0.5);
        //_this.key2.inputEnabled = true;
        _this.key2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key3 =_this.add.sprite(_this.world.centerX+150,_this.world.centerY+80,'Unity4_1_1niddle');
        _this.key3.anchor.setTo(0.5);
        //_this.key3.inputEnabled = true;
        _this.key3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key4 =_this.add.sprite(_this.world.centerX+350,_this.world.centerY+80,'Unity4_1_1niddle');
        _this.key4.anchor.setTo(0.5);
        //_this.key4.inputEnabled = true;
        _this.key4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key5 =_this.add.sprite(_this.world.centerX+140,_this.world.centerY+100,'Unity4_1_1niddle');
        _this.key5.anchor.setTo(0.5);
        //_this.key5.inputEnabled = true;
        _this.key5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key6 =_this.add.sprite(_this.world.centerX+360,_this.world.centerY+100,'Unity4_1_1niddle');
        _this.key6.anchor.setTo(0.5);
        //_this.key6.inputEnabled = true;
        _this.key6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key7 =_this.add.sprite(_this.world.centerX+130,_this.world.centerY+122,'Unity4_1_1niddle');
        _this.key7.anchor.setTo(0.5);
        //_this.key7.inputEnabled = true;
        _this.key7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key8 =_this.add.sprite(_this.world.centerX+370,_this.world.centerY+122,'Unity4_1_1niddle');
        _this.key8.anchor.setTo(0.5);
        //_this.key8.inputEnabled = true;
        _this.key8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key9 =_this.add.sprite(_this.world.centerX+240,_this.world.centerY+100,'Unity4_1_1niddle1');
        _this.key9.anchor.setTo(0.5);
        //_this.key9.inputEnabled = true;
        _this.key9.events.onInputDown.add(_this.onDragStart,_this);
        
        //button
        _this.tick =_this.add.sprite(_this.world.centerX-250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.2,1.2);
        _this.tick.frame = 0;
        _this.tick.name = 'tick';
        _this.tick.events.onInputDown.add(_this.correctAns,_this);
        
        _this.tick1=_this.add.sprite(_this.world.centerX+250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.2,1.2);
        _this.tick1.frame = 0;
        _this.tick1.name = 'tick1';
        _this.tick1.events.onInputDown.add(_this.wrongAns,_this);

        _this.trayGrp = _this.add.group();
        _this.lockGrp = _this.add.group();
        _this.keyGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.trayGrp.add(_this.tray);
        _this.trayGrp.add(_this.tray1);
        
        _this.lockGrp.add(_this.lock1);
        _this.lockGrp.add(_this.lock2);
        _this.lockGrp.add(_this.lock3);
        _this.lockGrp.add(_this.lock4);
        _this.lockGrp.add(_this.lock5);
        _this.lockGrp.add(_this.lock6);
        _this.lockGrp.add(_this.lock7);
        _this.lockGrp.add(_this.lock8);

        _this.keyGrp.add(_this.key1);
        _this.keyGrp.add(_this.key2);
        _this.keyGrp.add(_this.key3);
        _this.keyGrp.add(_this.key4);
        _this.keyGrp.add(_this.key5);
        _this.keyGrp.add(_this.key6);
        _this.keyGrp.add(_this.key7);
        _this.keyGrp.add(_this.key8);
        _this.keyGrp.add(_this.key9);
   
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.tick1);
        
        _this.keyGrp1.add(_this.key1_1);
        _this.keyGrp1.add(_this.key1_2);
        _this.keyGrp1.add(_this.key1_3);
        _this.keyGrp1.add(_this.key1_4);
        _this.keyGrp1.add(_this.key1_5);
        _this.keyGrp1.add(_this.key1_6);
        _this.keyGrp1.add(_this.key1_7);
        _this.keyGrp1.add(_this.key1_8);
        
        _this.lockGrp1.add(_this.lock1_1);
        _this.lockGrp1.add(_this.lock1_2);
        _this.lockGrp1.add(_this.lock1_3);
        _this.lockGrp1.add(_this.lock1_4);
        _this.lockGrp1.add(_this.lock1_5);
        _this.lockGrp1.add(_this.lock1_6);
        _this.lockGrp1.add(_this.lock1_7);
        _this.lockGrp1.add(_this.lock1_8);

        _this.trayGrp.x = 1000;
        _this.tween = _this.add.tween(_this.trayGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.keyGrp.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.keyGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphics1 = _this.add.graphics(100, 100);
                
        // draw a rectangle
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(10, -50, 650,190)
        _this.graphics1.alpha= 0;
     
        _this.hand = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+80,'Unity4_1_1hand');
        _this.hand.anchor.setTo(0.5);
        _this.hand.scale.setTo(0.7);
        _this.hand.visible = false;
        
        _this.tween.onComplete.add(function()
        {
            var tween1 = this.add.tween(_this.hand);
            tween1.to({ x:250 , y:150}, 1000, 'Linear', true, 0);
            
            var tween2 = this.add.tween(_this.thread);
            tween2.to({ x:200 , y:150}, 1000, 'Linear', true, 0);
            
            _this.hand.visible = true;
            _this.thread.visible =true;
            
            tween2.onComplete.add(function(){
                 _this.thread.visible =false;
                 _this.hand.visible = false;
            },this);
        
        },this);
           
    },

    gotoFifthQuestion:function()
    {
        //console.log("gotoFifthQuestion"); // more
        _this.questionNo = 5;
        
        _this.increase=0;
        _this.increase1=0;
   
        _this.getVoice();
        
        
        _this.lockGrp1=_this.add.group();
        _this.keyGrp1=_this.add.group();
    
        //tray box
        _this.tray= _this.add.sprite(_this.world.centerX-245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray.anchor.setTo(0.5);
        _this.tray.scale.setTo(1.4,1.4);
        _this.tray.frame = 0;
        
        _this.tray1= _this.add.sprite(_this.world.centerX+245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray1.anchor.setTo(0.5);
        _this.tray1.scale.setTo(1.4,1.4);
        _this.tray1.frame=0;
        
        // threat
        _this.lock1_1 =_this.add.sprite(_this.world.centerX-280,_this.world.centerY-160,'Unity4_1_1pencil');
        _this.lock1_1.anchor.setTo(0.5);
        _this.lock1_1.visible =false;
        
        _this.lock1_2 =_this.add.sprite(_this.world.centerX-98,_this.world.centerY-160,'Unity4_1_1pencil');
        _this.lock1_2.anchor.setTo(0.5);
        _this.lock1_2.visible =false;
        
        _this.lock1_3 =_this.add.sprite(_this.world.centerX+78,_this.world.centerY-160,'Unity4_1_1pencil');
        _this.lock1_3.anchor.setTo(0.5);
        _this.lock1_3.visible =false;
        
        _this.lock1_4 =_this.add.sprite(_this.world.centerX+250,_this.world.centerY-160,'Unity4_1_1pencil');
        _this.lock1_4.anchor.setTo(0.5);
        _this.lock1_4.visible =false;
        
        _this.lock1_5 =_this.add.sprite(_this.world.centerX-280,_this.world.centerY-70,'Unity4_1_1pencil');
        _this.lock1_5.anchor.setTo(0.5);
        _this.lock1_5.visible =false;
        
        _this.lock1_6 =_this.add.sprite(_this.world.centerX-98,_this.world.centerY-70,'Unity4_1_1pencil');
        _this.lock1_6.anchor.setTo(0.5);
        _this.lock1_6.visible =false;
        
        _this.lock1_7 =_this.add.sprite(_this.world.centerX+78,_this.world.centerY-70,'Unity4_1_1pencil');
        _this.lock1_7.anchor.setTo(0.5);
        _this.lock1_7.visible =false;
        
        _this.lock1_8 =_this.add.sprite(_this.world.centerX+250,_this.world.centerY-70,'Unity4_1_1pencil');
        _this.lock1_8.anchor.setTo(0.5);
        _this.lock1_8.visible =false;

         //pencil
        _this.key1_1 =_this.add.sprite(_this.world.centerX-290,_this.world.centerY-128,'Unity4_1_1cutter');
        _this.key1_1.anchor.setTo(0.5);
        _this.key1_1.visible =false;
        
        _this.key1_2 =_this.add.sprite(_this.world.centerX-105,_this.world.centerY-128,'Unity4_1_1cutter');
        _this.key1_2.anchor.setTo(0.5);
        _this.key1_2.visible =false;
        
        _this.key1_3 =_this.add.sprite(_this.world.centerX+70,_this.world.centerY-128,'Unity4_1_1cutter');
        _this.key1_3.anchor.setTo(0.5);
        _this.key1_3.visible =false;
        
        _this.key1_4 =_this.add.sprite(_this.world.centerX+235,_this.world.centerY-128,'Unity4_1_1cutter');
        _this.key1_4.anchor.setTo(0.5);
        _this.key1_4.visible =false;
        
        _this.key1_5 =_this.add.sprite(_this.world.centerX-290,_this.world.centerY-38,'Unity4_1_1cutter');
        _this.key1_5.anchor.setTo(0.5);
        _this.key1_5.visible =false;
        
        _this.key1_6 =_this.add.sprite(_this.world.centerX-105,_this.world.centerY-38,'Unity4_1_1cutter');
        _this.key1_6.anchor.setTo(0.5);
        _this.key1_6.visible =false;
        
        _this.key1_7 =_this.add.sprite(_this.world.centerX+70,_this.world.centerY-38,'Unity4_1_1cutter');
        _this.key1_7.anchor.setTo(0.5);
        _this.key1_7.visible =false;
        
        _this.key1_8 =_this.add.sprite(_this.world.centerX+235,_this.world.centerY-38,'Unity4_1_1cutter');
        _this.key1_8.anchor.setTo(0.5);
        _this.key1_8.visible =false;

        //lock 
        _this.lock1 =_this.add.sprite(_this.world.centerX-330,_this.world.centerY+50,'Unity4_1_1cutter');
        _this.lock1.anchor.setTo(0.5);
        _this.lock1.inputEnabled = true;
        _this.lock1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.cutter =_this.add.sprite(_this.world.centerX-330,_this.world.centerY+50,'Unity4_1_1cutter');
        _this.cutter.anchor.setTo(0.5);
        _this.cutter.visible=false;
        
        _this.lock2 =_this.add.sprite(_this.world.centerX-265,_this.world.centerY+50,'Unity4_1_1cutter');
        _this.lock2.anchor.setTo(0.5);
        _this.lock2.inputEnabled = true;
        _this.lock2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock3 =_this.add.sprite(_this.world.centerX-200,_this.world.centerY+50,'Unity4_1_1cutter');
        _this.lock3.anchor.setTo(0.5);
        _this.lock3.inputEnabled = true;
        _this.lock3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock4 =_this.add.sprite(_this.world.centerX-135,_this.world.centerY+50,'Unity4_1_1cutter');
        _this.lock4.anchor.setTo(0.5);
        _this.lock4.inputEnabled = true;
        _this.lock4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock5 =_this.add.sprite(_this.world.centerX-380,_this.world.centerY+115,'Unity4_1_1cutter');
        _this.lock5.anchor.setTo(0.5);
        _this.lock5.inputEnabled = true;
        _this.lock5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock6 =_this.add.sprite(_this.world.centerX-315,_this.world.centerY+115,'Unity4_1_1cutter');
        _this.lock6.anchor.setTo(0.5);
        _this.lock6.inputEnabled = true;
        _this.lock6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock7 =_this.add.sprite(_this.world.centerX-245,_this.world.centerY+115,'Unity4_1_1cutter');
        _this.lock7.anchor.setTo(0.5);
        _this.lock7.inputEnabled = true;
        _this.lock7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock8 =_this.add.sprite(_this.world.centerX-180,_this.world.centerY+115,'Unity4_1_1cutter');
        _this.lock8.anchor.setTo(0.5);
        _this.lock8.inputEnabled = true;
        _this.lock8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock9 =_this.add.sprite(_this.world.centerX-115,_this.world.centerY+115,'Unity4_1_1cutter');
        _this.lock9.anchor.setTo(0.5);
        _this.lock9.inputEnabled = true;
        _this.lock9.events.onInputDown.add(_this.onDragStart,_this);

        //key
        _this.key1 =_this.add.sprite(_this.world.centerX+178,_this.world.centerY+50,'Unity4_1_1pencil');
        _this.key1.anchor.setTo(0.5);
        //_this.key1.inputEnabled = true;
        _this.key1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key2 =_this.add.sprite(_this.world.centerX+330,_this.world.centerY+50,'Unity4_1_1pencil');
        _this.key2.anchor.setTo(0.5);
        //_this.key2.inputEnabled = true;
        _this.key2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key3 =_this.add.sprite(_this.world.centerX+165,_this.world.centerY+77,'Unity4_1_1pencil');
        _this.key3.anchor.setTo(0.5);
        //_this.key3.inputEnabled = true;
        _this.key3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key4 =_this.add.sprite(_this.world.centerX+320,_this.world.centerY+77,'Unity4_1_1pencil');
        _this.key4.anchor.setTo(0.5);
       //_this.key4.inputEnabled = true;
        _this.key4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key5 =_this.add.sprite(_this.world.centerX+150,_this.world.centerY+103,'Unity4_1_1pencil');
        _this.key5.anchor.setTo(0.5);
        //_this.key5.inputEnabled = true;
        _this.key5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key6 =_this.add.sprite(_this.world.centerX+305,_this.world.centerY+103,'Unity4_1_1pencil');
        _this.key6.anchor.setTo(0.5);
        //_this.key6.inputEnabled = true;
        _this.key6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key7 =_this.add.sprite(_this.world.centerX+135,_this.world.centerY+130,'Unity4_1_1pencil');
        _this.key7.anchor.setTo(0.5);
        //_this.key7.inputEnabled = true;
        _this.key7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key8 =_this.add.sprite(_this.world.centerX+295,_this.world.centerY+130,'Unity4_1_1pencil');
        _this.key8.anchor.setTo(0.5);
        //_this.key8.inputEnabled = true;
        _this.key8.events.onInputDown.add(_this.onDragStart,_this);
        
        //button
        _this.tick=_this.add.sprite(_this.world.centerX-250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.2,1.2);
        _this.tick.frame=0;
        _this.tick.name = 'tick';
        _this.tick.events.onInputDown.add(_this.correctAns,_this);
        
        _this.tick1=_this.add.sprite(_this.world.centerX+250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.2,1.2);
        _this.tick1.frame=0;
        _this.tick1.name = 'tick1';
        _this.tick1.events.onInputDown.add(_this.wrongAns,_this);

        _this.trayGrp = _this.add.group();
        _this.lockGrp = _this.add.group();
        _this.keyGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.trayGrp.add(_this.tray);
        _this.trayGrp.add(_this.tray1);
        
        _this.lockGrp.add(_this.lock1);
        _this.lockGrp.add(_this.lock2);
        _this.lockGrp.add(_this.lock3);
        _this.lockGrp.add(_this.lock4);
        _this.lockGrp.add(_this.lock5);
        _this.lockGrp.add(_this.lock6);
        _this.lockGrp.add(_this.lock7);
        _this.lockGrp.add(_this.lock8);
        _this.lockGrp.add(_this.lock9);

        _this.keyGrp.add(_this.key1);
        _this.keyGrp.add(_this.key2);
        _this.keyGrp.add(_this.key3);
        _this.keyGrp.add(_this.key4);
        _this.keyGrp.add(_this.key5);
        _this.keyGrp.add(_this.key6);
        _this.keyGrp.add(_this.key7);
        _this.keyGrp.add(_this.key8);
   
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.tick1);

        _this.lockGrp1.add(_this.key1_1);
        _this.lockGrp1.add(_this.key1_2);
        _this.lockGrp1.add(_this.key1_3);
        _this.lockGrp1.add(_this.key1_4);
        _this.lockGrp1.add(_this.key1_5);
        _this.lockGrp1.add(_this.key1_6);
        _this.lockGrp1.add(_this.key1_7);
        _this.lockGrp1.add(_this.key1_8);
        
        _this.keyGrp1.add(_this.lock1_1);
        _this.keyGrp1.add(_this.lock1_2);
        _this.keyGrp1.add(_this.lock1_3);
        _this.keyGrp1.add(_this.lock1_4);
        _this.keyGrp1.add(_this.lock1_5);
        _this.keyGrp1.add(_this.lock1_6);
        _this.keyGrp1.add(_this.lock1_7);
        _this.keyGrp1.add(_this.lock1_8);
        
        _this.trayGrp.x = 1000;
        _this.tween = _this.add.tween(_this.trayGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.keyGrp.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphics1 = _this.add.graphics(100, 100);
                
        // draw a rectangle
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(10, -50, 650,190)
        _this.graphics1.alpha= 0;
     
        _this.hand = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+80,'Unity4_1_1hand');
        _this.hand.anchor.setTo(0.5);
        _this.hand.scale.setTo(0.7);
        _this.hand.visible = false;
        
        _this.tween.onComplete.add(function()
        {
            var tween1 = this.add.tween(_this.hand);
            tween1.to({ x:250 , y:150}, 1000, 'Linear', true, 0);
            
            var tween2 = this.add.tween(_this.cutter);
            tween2.to({ x:200 , y:150}, 1000, 'Linear', true, 0);
            
            _this.hand.visible = true;
            _this.cutter.visible =true;
            
            tween2.onComplete.add(function(){
                 _this.cutter.visible =false;
                 _this.hand.visible = false;
            },this);
        
        },this);
    },

    gotoSixthQuestion:function()
    {
        //console.log("gotoSixthQuestion");//less
        _this.questionNo = 6;
        
        _this.increase=0;
        _this.increase1=0;
   
        _this.getVoice();
        
        //tray box
        _this.tray= _this.add.sprite(_this.world.centerX-245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray.anchor.setTo(0.5);
        _this.tray.scale.setTo(1.4,1.4);
        _this.tray.frame = 0;
        
        _this.tray1= _this.add.sprite(_this.world.centerX+245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray1.anchor.setTo(0.5);
        _this.tray1.scale.setTo(1.4,1.4);
        _this.tray1.frame = 0;

        // lock
        _this.lock1_1 =_this.add.sprite(_this.world.centerX-160,_this.world.centerY-170,'Unity4_1_1lock');
        _this.lock1_1.anchor.setTo(0.5);
        _this.lock1_1.visible = false;
        
        _this.lock1_2 =_this.add.sprite(_this.world.centerX-10,_this.world.centerY-170,'Unity4_1_1lock');
        _this.lock1_2.anchor.setTo(0.5);
        _this.lock1_2.visible = false;
        
        _this.lock1_3 =_this.add.sprite(_this.world.centerX+140,_this.world.centerY-170,'Unity4_1_1lock');
        _this.lock1_3.anchor.setTo(0.5);
        _this.lock1_3.visible = false;

        _this.lock1_4 =_this.add.sprite(_this.world.centerX-160,_this.world.centerY-70,'Unity4_1_1lock');
        _this.lock1_4.anchor.setTo(0.5);
        _this.lock1_4.visible = false;
        
        _this.lock1_5 =_this.add.sprite(_this.world.centerX-10,_this.world.centerY-70,'Unity4_1_1lock');
        _this.lock1_5.anchor.setTo(0.5);
        _this.lock1_5.visible = false;
        
        _this.lock1_6 =_this.add.sprite(_this.world.centerX+140,_this.world.centerY-70,'Unity4_1_1lock');
        _this.lock1_6.anchor.setTo(0.5);
        _this.lock1_6.visible = false;

        //key
        
        _this.key1_1 =_this.add.sprite(_this.world.centerX-90,_this.world.centerY-150,'Unity4_1_1key');
        _this.key1_1.anchor.setTo(0.5);
        _this.key1_1.visible = false;
        
        _this.key1_2 =_this.add.sprite(_this.world.centerX+60,_this.world.centerY-150,'Unity4_1_1key');
        _this.key1_2.anchor.setTo(0.5);
        _this.key1_2.visible = false;
        
        _this.key1_3 =_this.add.sprite(_this.world.centerX+210,_this.world.centerY-150,'Unity4_1_1key');
        _this.key1_3.anchor.setTo(0.5);
        _this.key1_3.visible = false;
        
        _this.key1_4 =_this.add.sprite(_this.world.centerX-90,_this.world.centerY-50,'Unity4_1_1key');
        _this.key1_4.anchor.setTo(0.5);
        _this.key1_4.visible = false;
        
        _this.key1_5 =_this.add.sprite(_this.world.centerX+60,_this.world.centerY-50,'Unity4_1_1key');
        _this.key1_5.anchor.setTo(0.5);
        _this.key1_5.visible = false;
        
        _this.key1_6 =_this.add.sprite(_this.world.centerX+210,_this.world.centerY-50,'Unity4_1_1key');
        _this.key1_6.anchor.setTo(0.5);
        _this.key1_6.visible = false;

        //drag lock 
        _this.lock1 =_this.add.sprite(_this.world.centerX-300,_this.world.centerY+35,'Unity4_1_1lock');
        _this.lock1.anchor.setTo(0.5);
        _this.lock1.inputEnabled = true;
        _this.lock1.name="lock1";
        _this.lock1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.locknew1=_this.add.sprite(_this.world.centerX-300,_this.world.centerY+35,'Unity4_1_1lock');
        _this.locknew1.anchor.setTo(0.5);
        _this.locknew1.visible=false;
        
        _this.lock2 =_this.add.sprite(_this.world.centerX-240,_this.world.centerY+35,'Unity4_1_1lock');
        _this.lock2.anchor.setTo(0.5);
        _this.lock2.inputEnabled = true;
        _this.lock2.name="lock2";
        _this.lock2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock3 =_this.add.sprite(_this.world.centerX-180,_this.world.centerY+35,'Unity4_1_1lock');
        _this.lock3.anchor.setTo(0.5);
        _this.lock3.inputEnabled = true;
        _this.lock3.name="lock3";
        _this.lock3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock4 =_this.add.sprite(_this.world.centerX-330,_this.world.centerY+95,'Unity4_1_1lock');
        _this.lock4.anchor.setTo(0.5);
        _this.lock4.inputEnabled = true;
        _this.lock4.name="lock5";
        _this.lock4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock5 =_this.add.sprite(_this.world.centerX-270,_this.world.centerY+95,'Unity4_1_1lock');
        _this.lock5.anchor.setTo(0.5);
        _this.lock5.inputEnabled = true;
        _this.lock5.name="lock5";
        _this.lock5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock6 =_this.add.sprite(_this.world.centerX-210,_this.world.centerY+95,'Unity4_1_1lock');
        _this.lock6.anchor.setTo(0.5);
        _this.lock6.inputEnabled = true;
        _this.lock6.name="lock7";
        _this.lock6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock7 =_this.add.sprite(_this.world.centerX-157,_this.world.centerY+95,'Unity4_1_1lock');
        _this.lock7.anchor.setTo(0.5);
        _this.lock7.inputEnabled = true;
        _this.lock7.name="lock8";
        _this.lock7.events.onInputDown.add(_this.onDragStart,_this);

        //drag key
        _this.key1 =_this.add.sprite(_this.world.centerX+145,_this.world.centerY+60,'Unity4_1_1key');
        _this.key1.anchor.setTo(0.5);
        _this.key1.name="key1";
        _this.key1.inputEnabled = true;
        _this.key1.events.onInputDown.add(_this.onDragStart,_this);
 
        _this.key2 =_this.add.sprite(_this.world.centerX+250,_this.world.centerY+60,'Unity4_1_1key');
        _this.key2.anchor.setTo(0.5);
        _this.key2.name="key2";
        //_this.key2.inputEnabled = true;
        _this.key2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key3 =_this.add.sprite(_this.world.centerX+350,_this.world.centerY+60,'Unity4_1_1key');
        _this.key3.anchor.setTo(0.5);
        _this.key3.name="key3";
        //_this.key3.inputEnabled = true;
        _this.key3.events.onInputDown.add(_this.onDragStart,_this);

        _this.key4 =_this.add.sprite(_this.world.centerX+160,_this.world.centerY+115,'Unity4_1_1key');
        _this.key4.anchor.setTo(0.5);
        _this.key4.name="key5";
        //_this.key4.inputEnabled = true;
        _this.key4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key5 =_this.add.sprite(_this.world.centerX+260,_this.world.centerY+115,'Unity4_1_1key');
        _this.key5.anchor.setTo(0.5);
        _this.key5.name="key6";
        //_this.key5.inputEnabled = true;
        _this.key5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key6 =_this.add.sprite(_this.world.centerX+350,_this.world.centerY+115,'Unity4_1_1key');
        _this.key6.anchor.setTo(0.5);
        _this.key6.name="key7";
        //_this.key6.inputEnabled = true;
        _this.key6.events.onInputDown.add(_this.onDragStart,_this);
  
        //button
        _this.tick=_this.add.sprite(_this.world.centerX-250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.2,1.2);
        _this.tick.frame = 0;
        _this.tick.name = 'tick';
        _this.tick.events.onInputDown.add(_this.correctAns,_this);
        
        _this.tick1=_this.add.sprite(_this.world.centerX+250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.2,1.2);
        _this.tick1.frame = 0;
        _this.tick1.name = 'tick1';
        _this.tick1.events.onInputDown.add(_this.wrongAns,_this);

        _this.trayGrp = _this.add.group();
        _this.lockGrp = _this.add.group();
        _this.keyGrp = _this.add.group();

        _this.optionGrp = _this.add.group();

        _this.trayGrp.add(_this.tray);
        _this.trayGrp.add(_this.tray1);

        _this.lockGrp.add(_this.lock1);
        _this.lockGrp.add(_this.lock2);
        _this.lockGrp.add(_this.lock3);
        _this.lockGrp.add(_this.lock4);
        _this.lockGrp.add(_this.lock5);
        _this.lockGrp.add(_this.lock6);
        _this.lockGrp.add(_this.lock7);
        
        _this.keyGrp.add(_this.key1);
        _this.keyGrp.add(_this.key2);
        _this.keyGrp.add(_this.key3);
        _this.keyGrp.add(_this.key4);
        _this.keyGrp.add(_this.key5);
        _this.keyGrp.add(_this.key6);
        
        _this.lockGrp1=_this.add.group();
        _this.keyGrp1=_this.add.group();
        
        _this.lockGrp1.add(_this.lock1_1);
        _this.lockGrp1.add(_this.lock1_2);
        _this.lockGrp1.add(_this.lock1_3);
        _this.lockGrp1.add(_this.lock1_4);
        _this.lockGrp1.add(_this.lock1_5);
        _this.lockGrp1.add(_this.lock1_6);
        
        _this.keyGrp1.add(_this.key1_1);
        _this.keyGrp1.add(_this.key1_2);
        _this.keyGrp1.add(_this.key1_3);
        _this.keyGrp1.add(_this.key1_4);
        _this.keyGrp1.add(_this.key1_5);
        _this.keyGrp1.add(_this.key1_6);
    
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.tick1);
  
        _this.trayGrp.x = 1000;
        _this.tween = _this.add.tween(_this.trayGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.keyGrp.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
         _this.lockGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.keyGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
   
        _this.graphics1 = _this.add.graphics(100, 100);
                
        // draw a rectangle
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(10, -50, 650,190)
        _this.graphics1.alpha= 0;
        
        _this.hand = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+80,'Unity4_1_1hand');
        _this.hand.anchor.setTo(0.5);
        _this.hand.scale.setTo(0.7);
        _this.hand.visible = false;
        
        _this.tween.onComplete.add(function()
        {
            var tween1 = this.add.tween(_this.hand);
            tween1.to({ x:250 , y:150}, 1000, 'Linear', true, 0);
            
            var tween2 = this.add.tween(_this.locknew1);
            tween2.to({ x:200 , y:150}, 1000, 'Linear', true, 0);
            
            _this.hand.visible = true;
            _this.locknew1.visible =true;
            
            tween2.onComplete.add(function(){
                 _this.locknew1.visible =false;
                 _this.hand.visible = false;
            },this);
        
        },this);
    },
    
    gotoSeventhQuestion:function()
    {
        //console.log("gotoSeventhQuestion");//more
        
        _this.questionNo = 7;
        
        _this.increase=0;
        _this.increase1=0;
        
        _this.getVoice();
        

        //tray box
        _this.tray= _this.add.sprite(_this.world.centerX-245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray.anchor.setTo(0.5);
        _this.tray.scale.setTo(1.4,1.4);
        _this.tray.frame=0;
        
        _this.tray_1= _this.add.sprite(_this.world.centerX-246,_this.world.centerY+156,'Unity4_1_1boader');
        _this.tray_1.anchor.setTo(0.5);
        _this.tray_1.visible=true;
        
        _this.tray1=_this.add.sprite(_this.world.centerX+245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray1.anchor.setTo(0.5);
        _this.tray1.scale.setTo(1.4,1.4);
        _this.tray1.frame=0;
        
        //hammer
        _this.lock1_1 =_this.add.sprite(_this.world.centerX-200,_this.world.centerY-120,'Unity4_1_1hammer');
        _this.lock1_1.anchor.setTo(0.5);
        _this.lock1_1.visible=false;
        
        _this.lock1_2 =_this.add.sprite(_this.world.centerX-10,_this.world.centerY-120,'Unity4_1_1hammer');
        _this.lock1_2.anchor.setTo(0.5);
        _this.lock1_2.visible=false;
        
        _this.lock1_3 =_this.add.sprite(_this.world.centerX+180,_this.world.centerY-120,'Unity4_1_1hammer');
        _this.lock1_3.anchor.setTo(0.5);
        _this.lock1_3.visible=false;

        //nail
        _this.key1_1 =_this.add.sprite(_this.world.centerX-228,_this.world.centerY-100,'Unity4_1_1nail');
        _this.key1_1.anchor.setTo(0.5);
        _this.key1_1.visible=false;
        
        _this.key1_2 =_this.add.sprite(_this.world.centerX-38,_this.world.centerY-100,'Unity4_1_1nail');
        _this.key1_2.anchor.setTo(0.5);
        _this.key1_2.visible=false;
        
        _this.key1_3 =_this.add.sprite(_this.world.centerX+155,_this.world.centerY-100,'Unity4_1_1nail');
        _this.key1_3.anchor.setTo(0.5);
        _this.key1_3.visible=false;
        
        //drag lock 
        _this.lock1 =_this.add.sprite(_this.world.centerX-310,_this.world.centerY+65,'Unity4_1_1hammer');
        _this.lock1.anchor.setTo(0.5);
        _this.lock1.inputEnabled = true;
        _this.lock1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.hammer1 =_this.add.sprite(_this.world.centerX-310,_this.world.centerY+65,'Unity4_1_1hammer');
        _this.hammer1.anchor.setTo(0.5);
        _this.hammer1.visible=false;
        
        _this.lock2 =_this.add.sprite(_this.world.centerX-150,_this.world.centerY+65,'Unity4_1_1hammer');
        _this.lock2.anchor.setTo(0.5);
        _this.lock2.inputEnabled = true;
        _this.lock2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock3 =_this.add.sprite(_this.world.centerX-240,_this.world.centerY+110,'Unity4_1_1hammer');
        _this.lock3.anchor.setTo(0.5);
        _this.lock3.inputEnabled = true;
        _this.lock3.events.onInputDown.add(_this.onDragStart,_this);

        //key
        _this.key1 =_this.add.sprite(_this.world.centerX+145,_this.world.centerY+70,'Unity4_1_1nail');
        _this.key1.anchor.setTo(0.5);
        
        _this.key2 =_this.add.sprite(_this.world.centerX+230,_this.world.centerY+70,'Unity4_1_1nail');
        _this.key2.anchor.setTo(0.5);
        
        _this.key3 =_this.add.sprite(_this.world.centerX+320,_this.world.centerY+70,'Unity4_1_1nail');
        _this.key3.anchor.setTo(0.5);
        
        _this.key4 =_this.add.sprite(_this.world.centerX+180,_this.world.centerY+92,'Unity4_1_1nail');
        _this.key4.anchor.setTo(0.5);
        
        _this.key5 =_this.add.sprite(_this.world.centerX+270,_this.world.centerY+92,'Unity4_1_1nail');
        _this.key5.anchor.setTo(0.5);
        
        _this.key6 =_this.add.sprite(_this.world.centerX+365,_this.world.centerY+92,'Unity4_1_1nail');
        _this.key6.anchor.setTo(0.5);
        
        _this.key7 =_this.add.sprite(_this.world.centerX+135,_this.world.centerY+120,'Unity4_1_1nail');
        _this.key7.anchor.setTo(0.5);
        
        _this.key8 =_this.add.sprite(_this.world.centerX+232,_this.world.centerY+120,'Unity4_1_1nail');
        _this.key8.anchor.setTo(0.5);
        
        _this.key9 =_this.add.sprite(_this.world.centerX+325,_this.world.centerY+120,'Unity4_1_1nail');
        _this.key9.anchor.setTo(0.5);
  
        //button
        _this.tick=_this.add.sprite(_this.world.centerX-250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.2,1.2);
        _this.tick.frame=0;
        _this.tick.name = 'tick';
        _this.tick.events.onInputDown.add(_this.correctAns,_this);
        
        _this.tick1=_this.add.sprite(_this.world.centerX+250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.2,1.2);
        _this.tick1.frame=0;
        _this.tick1.name = 'tick1';
        _this.tick1.events.onInputDown.add(_this.wrongAns,_this);

        _this.trayGrp = _this.add.group();
        _this.lockGrp = _this.add.group();
        _this.keyGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.trayGrp.add(_this.tray);
        _this.trayGrp.add(_this.tray1);
        
        _this.lockGrp.add(_this.lock1);
        _this.lockGrp.add(_this.lock2);
        _this.lockGrp.add(_this.lock3);
//        _this.lockGrp.add(_this.lock4);
//        _this.lockGrp.add(_this.lock5);
//        _this.lockGrp.add(_this.lock6);
        _this.lockGrp.add(_this.tray_1);

        _this.keyGrp.add(_this.key1);
        _this.keyGrp.add(_this.key2);
        _this.keyGrp.add(_this.key3);
        _this.keyGrp.add(_this.key4);
        _this.keyGrp.add(_this.key5);
        _this.keyGrp.add(_this.key6);
        _this.keyGrp.add(_this.key7);
        _this.keyGrp.add(_this.key8);
        _this.keyGrp.add(_this.key9);

        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.tick1);
        
        _this.lockGrp1=_this.add.group();
        _this.keyGrp1=_this.add.group();
        
        _this.lockGrp1.add(_this.lock1_1);
        _this.lockGrp1.add(_this.lock1_2);
        _this.lockGrp1.add(_this.lock1_3);

        _this.keyGrp1.add(_this.key1_1);
        _this.keyGrp1.add(_this.key1_2);
        _this.keyGrp1.add(_this.key1_3);

        _this.trayGrp.x = 1000;
        _this.tween = _this.add.tween(_this.trayGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.keyGrp.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.keyGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
         _this.graphics1 = _this.add.graphics(100, 100);
                
        // draw a rectangle
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(10, -50, 650,190)
        _this.graphics1.alpha= 0;
        
        _this.hand = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+80,'Unity4_1_1hand');
        _this.hand.anchor.setTo(0.5);
        _this.hand.scale.setTo(0.7);
        _this.hand.visible = false;
        
        _this.tween.onComplete.add(function()
        {
            var tween1 = this.add.tween(_this.hand);
            tween1.to({ x:250 , y:150}, 1000, 'Linear', true, 0);
            
            var tween2 = this.add.tween(_this.hammer1);
            tween2.to({ x:200 , y:150}, 1000, 'Linear', true, 0);
            
            _this.hand.visible = true;
            _this.hammer1.visible =true;
            
            tween2.onComplete.add(function(){
                 _this.hammer1.visible =false;
                 _this.hand.visible = false;
            },this);
        
        },this);
        
    },
    
    gotoEighthQuestion:function()
    {
         //console.log("gotoEighthQuestion");//less
        _this.questionNo = 8;
        
        _this.increase=0;
        _this.increase1=0;
        
        _this.getVoice();
        
        //tray box
        _this.tray= _this.add.sprite(_this.world.centerX-245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray.anchor.setTo(0.5);
        _this.tray.scale.setTo(1.4,1.4);
        _this.tray.frame=0;
        
        _this.tray1= _this.add.sprite(_this.world.centerX+245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray1.anchor.setTo(0.5);
        _this.tray1.scale.setTo(1.4,1.4);
        _this.tray1.frame=0;
        
        //soccer
        _this.key1_1 =_this.add.sprite(_this.world.centerX-85,_this.world.centerY-128,'Unity4_1_1soccer');
        _this.key1_1.anchor.setTo(0.5);
        _this.key1_1.visible =false;
        
        _this.key1_2 =_this.add.sprite(_this.world.centerX+80,_this.world.centerY-128,'Unity4_1_1soccer');
        _this.key1_2.anchor.setTo(0.5);
        _this.key1_2.visible =false;
        
        _this.key1_3 =_this.add.sprite(_this.world.centerX-85,_this.world.centerY-38,'Unity4_1_1soccer');
        _this.key1_3.anchor.setTo(0.5);
        _this.key1_3.visible =false;
        
        _this.key1_4 =_this.add.sprite(_this.world.centerX+80,_this.world.centerY-38,'Unity4_1_1soccer');
        _this.key1_4.anchor.setTo(0.5);
        _this.key1_4.visible =false;

        // cup    
        _this.lock1_1 =_this.add.sprite(_this.world.centerX-78,_this.world.centerY-150,'Unity4_1_1cup');
        _this.lock1_1.anchor.setTo(0.5);
        _this.lock1_1.visible =false;
        
        _this.lock1_2 =_this.add.sprite(_this.world.centerX+88,_this.world.centerY-150,'Unity4_1_1cup');
        _this.lock1_2.anchor.setTo(0.5);
        _this.lock1_2.visible =false;
 
        _this.lock1_3 =_this.add.sprite(_this.world.centerX-78,_this.world.centerY-60,'Unity4_1_1cup');
        _this.lock1_3.anchor.setTo(0.5);
        _this.lock1_3.visible =false;
        
        _this.lock1_4 =_this.add.sprite(_this.world.centerX+88,_this.world.centerY-60,'Unity4_1_1cup');
        _this.lock1_4.anchor.setTo(0.5);
        _this.lock1_4.visible =false;

        //drag lock 
        _this.lock1 =_this.add.sprite(_this.world.centerX-335,_this.world.centerY+60,'Unity4_1_1cup');
        _this.lock1.anchor.setTo(0.5);
        _this.lock1.inputEnabled = true;
        _this.lock1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.cup1 =_this.add.sprite(_this.world.centerX-335,_this.world.centerY+60,'Unity4_1_1cup');
        _this.cup1.anchor.setTo(0.5);
        _this.cup1.visible=false;
        
        _this.lock2 =_this.add.sprite(_this.world.centerX-243,_this.world.centerY+60,'Unity4_1_1cup');
        _this.lock2.anchor.setTo(0.5);
        _this.lock2.inputEnabled = true;
        _this.lock2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock3 =_this.add.sprite(_this.world.centerX-150,_this.world.centerY+60,'Unity4_1_1cup');
        _this.lock3.anchor.setTo(0.5);
        _this.lock3.inputEnabled = true;
        _this.lock3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock4 =_this.add.sprite(_this.world.centerX-347,_this.world.centerY+120,'Unity4_1_1cup');
        _this.lock4.anchor.setTo(0.5);
        _this.lock4.inputEnabled = true;
        _this.lock4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock5 =_this.add.sprite(_this.world.centerX-243,_this.world.centerY+120,'Unity4_1_1cup');
        _this.lock5.anchor.setTo(0.5);
        _this.lock5.inputEnabled = true;
        _this.lock5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock6 =_this.add.sprite(_this.world.centerX-143,_this.world.centerY+120,'Unity4_1_1cup');
        _this.lock6.anchor.setTo(0.5);
        _this.lock6.inputEnabled = true;
        _this.lock6.events.onInputDown.add(_this.onDragStart,_this);

        //key
        _this.key1 =_this.add.sprite(_this.world.centerX+145,_this.world.centerY+60,'Unity4_1_1soccer');
        _this.key1.anchor.setTo(0.5);
        //_this.key1.inputEnabled = true;
        _this.key1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key2 =_this.add.sprite(_this.world.centerX+253,_this.world.centerY+60,'Unity4_1_1soccer');
        _this.key2.anchor.setTo(0.5);
        //_this.key2.inputEnabled = true;
        _this.key2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key3 =_this.add.sprite(_this.world.centerX+360,_this.world.centerY+60,'Unity4_1_1soccer');
        _this.key3.anchor.setTo(0.5);
        //_this.key3.inputEnabled = true;
        _this.key3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key4 =_this.add.sprite(_this.world.centerX+253,_this.world.centerY+92,'Unity4_1_1soccer');
        _this.key4.anchor.setTo(0.5);
        //_this.key4.inputEnabled = true;
        _this.key4.events.onInputDown.add(_this.onDragStart,_this);
        
        //button
        _this.tick=_this.add.sprite(_this.world.centerX-250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.2,1.2);
        
        _this.tick.name = 'tick';
        _this.tick.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.tick1=_this.add.sprite(_this.world.centerX+250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.2,1.2);
        
        _this.tick1.name = 'tick1';
        _this.tick1.events.onInputDown.add(_this.correctAns,_this);

        _this.trayGrp = _this.add.group();
        _this.keyGrp = _this.add.group();
        _this.lockGrp = _this.add.group();
        
        _this.optionGrp = _this.add.group();
        
        _this.trayGrp.add(_this.tray);
        _this.trayGrp.add(_this.tray1);
        
        _this.lockGrp.add(_this.lock1);
        _this.lockGrp.add(_this.lock2);
        _this.lockGrp.add(_this.lock3);
        _this.lockGrp.add(_this.lock4);
        _this.lockGrp.add(_this.lock5);
        _this.lockGrp.add(_this.lock6);

        _this.keyGrp.add(_this.key1);
        _this.keyGrp.add(_this.key2);
        _this.keyGrp.add(_this.key3);
        _this.keyGrp.add(_this.key4);
   
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.tick1);
        
        _this.keyGrp1=_this.add.group();
        _this.lockGrp1=_this.add.group();

        _this.keyGrp1.add(_this.key1_1);
        _this.keyGrp1.add(_this.key1_2);
        _this.keyGrp1.add(_this.key1_3);
        _this.keyGrp1.add(_this.key1_4);

        _this.lockGrp1.add(_this.lock1_1);
        _this.lockGrp1.add(_this.lock1_2);
        _this.lockGrp1.add(_this.lock1_3);
        _this.lockGrp1.add(_this.lock1_4);
    
        _this.trayGrp.x = 1000;
        _this.tween = _this.add.tween(_this.trayGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.keyGrp.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.keyGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphics1 = _this.add.graphics(100, 100);
                
        // draw a rectangle
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(10, -50, 650,190)
        _this.graphics1.alpha= 0;
     
        _this.hand = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+80,'Unity4_1_1hand');
        _this.hand.anchor.setTo(0.5);
        _this.hand.scale.setTo(0.7);
        _this.hand.visible = false;
        
        _this.tween.onComplete.add(function()
        {
            var tween1 = this.add.tween(_this.hand);
            tween1.to({ x:250 , y:150}, 1000, 'Linear', true, 0);
            
            var tween2 = this.add.tween(_this.cup1);
            tween2.to({ x:200 , y:150}, 1000, 'Linear', true, 0);
            
            _this.hand.visible = true;
            _this.cup1.visible =true;
            
            tween2.onComplete.add(function(){
                 _this.cup1.visible =false;
                 _this.hand.visible = false;
            },this);
        
        },this);
           
    },
    
    gotoNinethQuestion:function()
    {
         //console.log("gotoNinethQuestion");//more
        _this.questionNo = 9;
        
        _this.increase=0;
        _this.increase1=0;
       
        _this.getVoice();
        
        
        _this.lockGrp1=_this.add.group();
        _this.keyGrp1=_this.add.group();
        
        //tray box
        _this.tray= _this.add.sprite(_this.world.centerX-245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray.anchor.setTo(0.5);
        _this.tray.scale.setTo(1.4,1.4);
        _this.tray.frame=0;
        
        _this.tray1= _this.add.sprite(_this.world.centerX+245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray1.anchor.setTo(0.5);
        _this.tray1.scale.setTo(1.4,1.4);
        _this.tray1.frame=0;
        
         //niddle
        _this.key1_1 =_this.add.sprite(_this.world.centerX-258,_this.world.centerY-128,'Unity4_1_1niddle');
        _this.key1_1.anchor.setTo(0.5);
        _this.key1_1.visible =false;
        
        _this.key1_2 =_this.add.sprite(_this.world.centerX-85,_this.world.centerY-128,'Unity4_1_1niddle');
        _this.key1_2.anchor.setTo(0.5);
        _this.key1_2.visible =false;
        
        _this.key1_3 =_this.add.sprite(_this.world.centerX+80,_this.world.centerY-128,'Unity4_1_1niddle');
        _this.key1_3.anchor.setTo(0.5);
        _this.key1_3.visible =false;
        
        _this.key1_4 =_this.add.sprite(_this.world.centerX+245,_this.world.centerY-128,'Unity4_1_1niddle');
        _this.key1_4.anchor.setTo(0.5);
        _this.key1_4.visible =false;
        
        // threat
        _this.lock1_1 =_this.add.sprite(_this.world.centerX-280,_this.world.centerY-150,'Unity4_1_1thread');
        _this.lock1_1.anchor.setTo(0.5);
        _this.lock1_1.visible =false;
        
        _this.lock1_2 =_this.add.sprite(_this.world.centerX-108,_this.world.centerY-150,'Unity4_1_1thread');
        _this.lock1_2.anchor.setTo(0.5);
        _this.lock1_2.visible =false;
        
        _this.lock1_3 =_this.add.sprite(_this.world.centerX+58,_this.world.centerY-150,'Unity4_1_1thread');
        _this.lock1_3.anchor.setTo(0.5);
        _this.lock1_3.visible =false;
        
        _this.lock1_4 =_this.add.sprite(_this.world.centerX+220,_this.world.centerY-150,'Unity4_1_1thread');
        _this.lock1_4.anchor.setTo(0.5);
        _this.lock1_4.visible =false;

        //drag niddle
        _this.lock1 =_this.add.sprite(_this.world.centerX-340,_this.world.centerY+60,'Unity4_1_1thread');
        _this.lock1.anchor.setTo(0.5);
        _this.lock1.inputEnabled = true;
        _this.lock1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.thread1 =_this.add.sprite(_this.world.centerX-340,_this.world.centerY+60,'Unity4_1_1thread');
        _this.thread1.anchor.setTo(0.5);
        _this.thread1.visible=false;
        
        _this.lock2 =_this.add.sprite(_this.world.centerX-240,_this.world.centerY+60,'Unity4_1_1thread');
        _this.lock2.anchor.setTo(0.5);
        _this.lock2.inputEnabled = true;
        _this.lock2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock3 =_this.add.sprite(_this.world.centerX-140,_this.world.centerY+60,'Unity4_1_1thread');
        _this.lock3.anchor.setTo(0.5);
        _this.lock3.inputEnabled = true;
        _this.lock3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock4 =_this.add.sprite(_this.world.centerX-340,_this.world.centerY+95,'Unity4_1_1thread');
        _this.lock4.anchor.setTo(0.5);
        _this.lock4.inputEnabled = true;
        _this.lock4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock5 =_this.add.sprite(_this.world.centerX-240,_this.world.centerY+95,'Unity4_1_1thread');
        _this.lock5.anchor.setTo(0.5);
        _this.lock5.inputEnabled = true;
        _this.lock5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock6 =_this.add.sprite(_this.world.centerX-140,_this.world.centerY+95,'Unity4_1_1thread');
        _this.lock6.anchor.setTo(0.5);
        _this.lock6.inputEnabled = true;
        _this.lock6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock7 =_this.add.sprite(_this.world.centerX-240,_this.world.centerY+130,'Unity4_1_1thread');
        _this.lock7.anchor.setTo(0.5);
        _this.lock7.inputEnabled = true;
        _this.lock7.events.onInputDown.add(_this.onDragStart,_this);


        // drag threat
        _this.key1 =_this.add.sprite(_this.world.centerX+165,_this.world.centerY+75,'Unity4_1_1niddle');
        _this.key1.anchor.setTo(0.5);
        //_this.key1.inputEnabled = true;
        _this.key1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key2 =_this.add.sprite(_this.world.centerX+310,_this.world.centerY+75,'Unity4_1_1niddle');
        _this.key2.anchor.setTo(0.5);
        //_this.key2.inputEnabled = true;
        _this.key2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key3 =_this.add.sprite(_this.world.centerX+165,_this.world.centerY+100,'Unity4_1_1niddle');
        _this.key3.anchor.setTo(0.5);
        //_this.key3.inputEnabled = true;
        _this.key3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key4 =_this.add.sprite(_this.world.centerX+310,_this.world.centerY+100,'Unity4_1_1niddle');
        _this.key4.anchor.setTo(0.5);
        //_this.key4.inputEnabled = true;
        _this.key4.events.onInputDown.add(_this.onDragStart,_this);
        
        //button
        _this.tick =_this.add.sprite(_this.world.centerX-250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.2,1.2);
        _this.tick.frame = 0;
        _this.tick.name = 'tick';
        _this.tick.events.onInputDown.add(_this.correctAns,_this);
        
        _this.tick1=_this.add.sprite(_this.world.centerX+250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.2,1.2);
        _this.tick1.frame = 0;
        _this.tick1.name = 'tick1';
        _this.tick1.events.onInputDown.add(_this.wrongAns,_this);

        _this.trayGrp = _this.add.group();
        _this.lockGrp = _this.add.group();
        _this.keyGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.trayGrp.add(_this.tray);
        _this.trayGrp.add(_this.tray1);
        
        _this.lockGrp.add(_this.lock1);
        _this.lockGrp.add(_this.lock2);
        _this.lockGrp.add(_this.lock3);
        _this.lockGrp.add(_this.lock4);
        _this.lockGrp.add(_this.lock5);
        _this.lockGrp.add(_this.lock6);
        _this.lockGrp.add(_this.lock7);

        _this.keyGrp.add(_this.key1);
        _this.keyGrp.add(_this.key2);
        _this.keyGrp.add(_this.key3);
        _this.keyGrp.add(_this.key4);
    
        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.tick1);
        
        _this.keyGrp1.add(_this.key1_1);
        _this.keyGrp1.add(_this.key1_2);
        _this.keyGrp1.add(_this.key1_3);
        _this.keyGrp1.add(_this.key1_4);
   
        _this.lockGrp1.add(_this.lock1_1);
        _this.lockGrp1.add(_this.lock1_2);
        _this.lockGrp1.add(_this.lock1_3);
        _this.lockGrp1.add(_this.lock1_4);
     
        _this.trayGrp.x = 1000;
        _this.tween = _this.add.tween(_this.trayGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.keyGrp.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.keyGrp1.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphics1 = _this.add.graphics(100, 100);
                
        // draw a rectangle
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(10, -50, 650,190)
        _this.graphics1.alpha= 0;
        
        _this.hand = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+80,'Unity4_1_1hand');
        _this.hand.anchor.setTo(0.5);
        _this.hand.scale.setTo(0.7);
        _this.hand.visible = false;
        
        _this.tween.onComplete.add(function()
        {
            var tween1 = this.add.tween(_this.hand);
            tween1.to({ x:250 , y:150}, 1000, 'Linear', true, 0);
            
            var tween2 = this.add.tween(_this.thread1);
            tween2.to({ x:200 , y:150}, 1000, 'Linear', true, 0);
            
            _this.hand.visible = true;
            _this.thread1.visible =true;
            
            tween2.onComplete.add(function(){
                 _this.thread1.visible =false;
                 _this.hand.visible = false;
            },this);
        
        },this);
           
    },
    
    gotoTenthQuestion:function()
    {
        //console.log("gotoTenthQuestion");//more
        _this.questionNo = 10;
        
        _this.increase=0;
        _this.increase1=0;
        _this.getVoice();
        
        _this.lockGrp1=_this.add.group();
        _this.keyGrp1=_this.add.group();
    
        //tray box
        _this.tray= _this.add.sprite(_this.world.centerX-245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray.anchor.setTo(0.5);
        _this.tray.scale.setTo(1.4,1.4);
        _this.tray.frame = 0;
        
        _this.tray1= _this.add.sprite(_this.world.centerX+245,_this.world.centerY+100,'Unity4_1_1tray');
        _this.tray1.anchor.setTo(0.5);
        _this.tray1.scale.setTo(1.4,1.4);
        _this.tray1.frame=0;
        
        //threat
        _this.lock1_1 =_this.add.sprite(_this.world.centerX-280,_this.world.centerY-140,'Unity4_1_1pencil');
        _this.lock1_1.anchor.setTo(0.5);
        _this.lock1_1.visible =false;
        
        _this.lock1_2 =_this.add.sprite(_this.world.centerX-98,_this.world.centerY-140,'Unity4_1_1pencil');
        _this.lock1_2.anchor.setTo(0.5);
        _this.lock1_2.visible =false;
        
        _this.lock1_3 =_this.add.sprite(_this.world.centerX+78,_this.world.centerY-140,'Unity4_1_1pencil');
        _this.lock1_3.anchor.setTo(0.5);
        _this.lock1_3.visible =false;
        
        _this.lock1_4 =_this.add.sprite(_this.world.centerX+250,_this.world.centerY-140,'Unity4_1_1pencil');
        _this.lock1_4.anchor.setTo(0.5);
        _this.lock1_4.visible =false;

        //pencil
        _this.key1_1 =_this.add.sprite(_this.world.centerX-290,_this.world.centerY-108,'Unity4_1_1cutter');
        _this.key1_1.anchor.setTo(0.5);
        _this.key1_1.visible =false;
        
        _this.key1_2 =_this.add.sprite(_this.world.centerX-105,_this.world.centerY-108,'Unity4_1_1cutter');
        _this.key1_2.anchor.setTo(0.5);
        _this.key1_2.visible =false;
        
        _this.key1_3 =_this.add.sprite(_this.world.centerX+70,_this.world.centerY-108,'Unity4_1_1cutter');
        _this.key1_3.anchor.setTo(0.5);
        _this.key1_3.visible =false;
        
        _this.key1_4 =_this.add.sprite(_this.world.centerX+235,_this.world.centerY-108,'Unity4_1_1cutter');
        _this.key1_4.anchor.setTo(0.5);
        _this.key1_4.visible =false;

        //drag lock 
        _this.lock1 =_this.add.sprite(_this.world.centerX-265,_this.world.centerY+50,'Unity4_1_1cutter');
        _this.lock1.anchor.setTo(0.5);
        _this.lock1.inputEnabled = true;
        _this.lock1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.cutter1 =_this.add.sprite(_this.world.centerX-265,_this.world.centerY+50,'Unity4_1_1cutter');
        _this.cutter1.anchor.setTo(0.5);
        _this.cutter1.visible=false;
        
        _this.cutter1 =_this.add.sprite(_this.world.centerX-265,_this.world.centerY+50,'Unity4_1_1cutter');
        _this.cutter1.anchor.setTo(0.5);
        _this.cutter1.visible=false;
        
        _this.lock2 =_this.add.sprite(_this.world.centerX-200,_this.world.centerY+50,'Unity4_1_1cutter');
        _this.lock2.anchor.setTo(0.5);
        _this.lock2.inputEnabled = true;
        _this.lock2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock3 =_this.add.sprite(_this.world.centerX-265,_this.world.centerY+115,'Unity4_1_1cutter');
        _this.lock3.anchor.setTo(0.5);
        _this.lock3.inputEnabled = true;
        _this.lock3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.lock4 =_this.add.sprite(_this.world.centerX-200,_this.world.centerY+115,'Unity4_1_1cutter');
        _this.lock4.anchor.setTo(0.5);
        _this.lock4.inputEnabled = true;
        _this.lock4.events.onInputDown.add(_this.onDragStart,_this);

        //drag key
        _this.key1 =_this.add.sprite(_this.world.centerX+178,_this.world.centerY+50,'Unity4_1_1pencil');
        _this.key1.anchor.setTo(0.5);
        //_this.key1.inputEnabled = true;
        _this.key1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key2 =_this.add.sprite(_this.world.centerX+330,_this.world.centerY+50,'Unity4_1_1pencil');
        _this.key2.anchor.setTo(0.5);
        //_this.key2.inputEnabled = true;
        _this.key2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key3 =_this.add.sprite(_this.world.centerX+160,_this.world.centerY+90,'Unity4_1_1pencil');
        _this.key3.anchor.setTo(0.5);
        //_this.key3.inputEnabled = true;
        _this.key3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key4 =_this.add.sprite(_this.world.centerX+320,_this.world.centerY+90,'Unity4_1_1pencil');
        _this.key4.anchor.setTo(0.5);
        //_this.key4.inputEnabled = true;
        _this.key4.events.onInputDown.add(_this.onDragStart,_this);

        _this.key5 =_this.add.sprite(_this.world.centerX+135,_this.world.centerY+130,'Unity4_1_1pencil');
        _this.key5.anchor.setTo(0.5);
        //_this.key5.inputEnabled = true;
        _this.key5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.key6 =_this.add.sprite(_this.world.centerX+295,_this.world.centerY+130,'Unity4_1_1pencil');
        _this.key6.anchor.setTo(0.5);
        //_this.key6.inputEnabled = true;
        _this.key6.events.onInputDown.add(_this.onDragStart,_this);
        
        //button
        _this.tick=_this.add.sprite(_this.world.centerX-250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.2,1.2);
        _this.tick.frame = 0;
        
        _this.tick.name = 'tick';
        _this.tick.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.tick1=_this.add.sprite(_this.world.centerX+250,_this.world.centerY+220,'Unity4_1_1tick');
        _this.tick1.anchor.setTo(0.5);
        _this.tick1.scale.setTo(1.2,1.2);
        _this.tick1.frame=0;
        
        _this.tick1.name = 'tick1';
        _this.tick1.events.onInputDown.add(_this.correctAns,_this);

        _this.trayGrp = _this.add.group();
        _this.lockGrp = _this.add.group();
        _this.keyGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.trayGrp.add(_this.tray);
        _this.trayGrp.add(_this.tray1);
        
        _this.lockGrp.add(_this.lock1);
        _this.lockGrp.add(_this.lock2);
        _this.lockGrp.add(_this.lock3);
        _this.lockGrp.add(_this.lock4);
  
        _this.keyGrp.add(_this.key1);
        _this.keyGrp.add(_this.key2);
        _this.keyGrp.add(_this.key3);
        _this.keyGrp.add(_this.key4);
        _this.keyGrp.add(_this.key5);
        _this.keyGrp.add(_this.key6);

        _this.optionGrp.add(_this.tick);
        _this.optionGrp.add(_this.tick1);
        
        _this.lockGrp1.add(_this.key1_1);
        _this.lockGrp1.add(_this.key1_2);
        _this.lockGrp1.add(_this.key1_3);
        _this.lockGrp1.add(_this.key1_4);

        _this.keyGrp1.add(_this.lock1_1);
        _this.keyGrp1.add(_this.lock1_2);
        _this.keyGrp1.add(_this.lock1_3);
        _this.keyGrp1.add(_this.lock1_4);

        _this.trayGrp.x = 1000;
        _this.tween = _this.add.tween(_this.trayGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.lockGrp.x = 1000;
        _this.tween = _this.add.tween(_this.lockGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.keyGrp.x = 1000;
        _this.tween = _this.add.tween(_this.keyGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.graphics1 = _this.add.graphics(100, 100);
                
        // draw a rectangle
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(10, -50, 650,190)
        _this.graphics1.alpha= 0;
     
        _this.hand = _this.add.sprite(_this.world.centerX-250,_this.world.centerY+80,'Unity4_1_1hand');
        _this.hand.anchor.setTo(0.5);
        _this.hand.scale.setTo(0.7);
        _this.hand.visible = false;
        
        _this.tween.onComplete.add(function()
        {
            var tween1 = this.add.tween(_this.hand);
            tween1.to({ x:270 , y:150}, 1000, 'Linear', true, 0);
            
            var tween2 = this.add.tween(_this.cutter1);
            tween2.to({ x:220 , y:150}, 1000, 'Linear', true, 0);
            
            _this.hand.visible = true;
            _this.cutter1.visible =true;
            
            tween2.onComplete.add(function(){
                 _this.cutter1.visible =false;
                 _this.hand.visible = false;
            },this);
        
        },this);
        
    },

    
 	changeQuestion:function()
	{
		if(_this.no11<6)
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
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        
        if(_this.questionNo == 7)
        {
            _this.tray_1.visible=false;
        }
        
        if(target.name=='tick')
        {
            _this.tick.frame = 1;
            _this.tray.frame =1;
            
            var tween1 = this.add.tween(_this.tray.scale);
            tween1.to({ x:1.4 , y:1.4}, 400, 'Linear', true, 0);
                tween1.onComplete.add(function(){
                          
                    var tween2 = this.add.tween(_this.tray.scale);
                    tween2.to({ x:1.2 , y:1.2}, 400, 'Linear', true, 0);
                          
                    tween2.onComplete.add(function(){
                        var tween1 = this.add.tween(_this.tray.scale);
                            tween1.to({ x:1.1 , y:1.1}, 400, 'Linear', true, 0);
                            tween1.onComplete.add(function(){
                            var tween2 = this.add.tween(_this.tray.scale);
                            tween2.to({ x:1.4 , y:1.4}, 400, 'Linear', true, 0);
                        },this);
                },this);
            },this);

            if(_this.questionNo == 5)
            {
                for(var k = 0;k<_this.lockGrp.length;k++)
                {
                    if(_this.lockGrp.getChildAt(k).visible == true)
                    {
                        _this.lock =_this.lockGrp.getChildAt(k).animations.add('walk');
                        _this.lock.play(10,true);
                    }
                 }
                var tween1 = this.add.tween(_this.lock1.scale);
                tween1.to({ x:1.4, y:1.4}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock1.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock1.scale);
                                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock1.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock2.scale);
                tween1.to({ x:1.4, y:1.4}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock2.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock2.scale);
                                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock2.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock3.scale);
                tween1.to({ x:1.4, y:1.4}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock3.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock3.scale);
                                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock3.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                var tween1 = this.add.tween(_this.lock4.scale);
                tween1.to({ x:1.4, y:1.4}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock4.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock4.scale);
                                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock4.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                var tween1 = this.add.tween(_this.lock5.scale);
                tween1.to({ x:1.4, y:1.4}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock5.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock5.scale);
                                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock5.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock6.scale);
                tween1.to({ x:1.4, y:1.4}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock6.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock6.scale);
                                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock6.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock7.scale);
                tween1.to({ x:1.4, y:1.4}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock7.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock7.scale);
                                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock7.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock8.scale);
                tween1.to({ x:1.4, y:1.4}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock8.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock8.scale);
                                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock8.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock9.scale);
                tween1.to({ x:1.4, y:1.4}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock9.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock9.scale);
                                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock9.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
            }
            
            if(_this.questionNo == 6)
            {
                for(var k = 0;k<_this.lockGrp.length;k++)
                {
                    if(_this.lockGrp.getChildAt(k).visible == true)
                    {
                        _this.lock =_this.lockGrp.getChildAt(k).animations.add('walk');
                        _this.lock.play(10,true);

                    }
                }
                
                var tween1 = this.add.tween(_this.lock1.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock1.scale);
                        tween2.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock1.scale);
                                tween1.to({ x:0.8 , y:0.8}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock1.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock2.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock2.scale);
                        tween2.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock2.scale);
                                tween1.to({ x:0.8 , y:0.8}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock2.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock3.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock3.scale);
                        tween2.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock3.scale);
                                tween1.to({ x:0.8 , y:0.8}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock3.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock4.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock4.scale);
                        tween2.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock4.scale);
                                tween1.to({ x:0.8 , y:0.8}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock4.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock5.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock5.scale);
                        tween2.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock5.scale);
                                tween1.to({ x:0.8 , y:0.8}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock5.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock6.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock6.scale);
                        tween2.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock6.scale);
                                tween1.to({ x:0.8 , y:0.8}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock6.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock7.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock7.scale);
                        tween2.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock7.scale);
                                tween1.to({ x:0.8 , y:0.8}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock7.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
            }
            
            if(_this.questionNo==8)
            {
                for(var k = 0;k<_this.lockGrp.length;k++)
                {
                    if(_this.lockGrp.getChildAt(k).visible == true)
                    {
                        _this.lock =_this.lockGrp.getChildAt(k).animations.add('walk');
                        _this.lock.play(10,true);
                    }
                 }
                
                var tween1 = this.add.tween(_this.lock1.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock1.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock1.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock1.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock2.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock2.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock2.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock2.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock3.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock3.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock3.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock3.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
               
                var tween1 = this.add.tween(_this.lock4.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock4.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock4.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock4.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock5.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock5.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock5.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock5.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
 
                var tween1 = this.add.tween(_this.lock6.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock6.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock6.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock6.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
            }
            
            if(_this.questionNo==9)
            {
                //console.log("increase 4 and 9  :");
                for(var k = 0;k<_this.lockGrp.length;k++)
                {
                    if(_this.lockGrp.getChildAt(k).visible == true)
                    {
                        _this.lock =_this.lockGrp.getChildAt(k).animations.add('walk');
                        _this.lock.play(10,true);
                    }
                 }
                
                var tween1 = this.add.tween(_this.lock1.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock1.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock1.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock1.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                
                var tween1 = this.add.tween(_this.lock2.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock2.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock2.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock2.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock3.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock3.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock3.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock3.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock4.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock4.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock4.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock4.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock5.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock5.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock5.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock5.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
 
                var tween1 = this.add.tween(_this.lock6.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock6.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock6.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock6.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.lock7.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.lock7.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.lock7.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.lock7.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
            }
        
        
        }
        
        if(target.name=='tick1')
        {
            _this.tick1.frame =1;
            _this.tray1.frame =1;
            
            var tween1 = this.add.tween(_this.tray1.scale);
            tween1.to({ x:1.4 , y:1.4}, 400, 'Linear', true, 0);
                tween1.onComplete.add(function(){
                          
                    var tween2 = this.add.tween(_this.tray1.scale);
                    tween2.to({ x:1.2 , y:1.2}, 400, 'Linear', true, 0);
                          
                    tween2.onComplete.add(function(){
                        var tween1 = this.add.tween(_this.tray1.scale);
                            tween1.to({ x:1.1 , y:1.1}, 400, 'Linear', true, 0);
                            tween1.onComplete.add(function(){
                            var tween2 = this.add.tween(_this.tray1.scale);
                            tween2.to({ x:1.4 , y:1.4}, 400, 'Linear', true, 0);
                        },this);
                },this);
            },this);
            
            if(_this.questionNo==2)
            {
                for(var k = 0;k<_this.keyGrp.length;k++)
                {
                    if(_this.keyGrp.getChildAt(k).visible == true)
                    {
                        _this.lock =_this.keyGrp.getChildAt(k).animations.add('walk');
                        _this.lock.play(10,true);
                    }
                 }
                
                var tween1 = this.add.tween(_this.key7.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.key7.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.key7.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.key7.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                
                var tween1 = this.add.tween(_this.key8.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.key8.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.key8.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.key8.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                
                var tween1 = this.add.tween(_this.key9.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.key9.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.key9.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.key9.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
            }
            
            /*if(_this.questionNo == 7)
            {
                
                for(var k = 0;k<_this.keyGrp.length;k++)
                {
                    if(_this.keyGrp.getChildAt(k).visible == true)
                    {
                        _this.lock =_this.keyGrp.getChildAt(k).animations.add('walk');
                        _this.lock.play(10,true);
                    }
                 }
                
                var tween1 = this.add.tween(_this.key1.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.key1.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.key1.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.key1.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.key2.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.key2.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.key2.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.key2.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.key3.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.key3.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.key3.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.key3.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.key4.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.key4.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.key4.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.key4.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                
                var tween1 = this.add.tween(_this.key5.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.key5.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.key5.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.key5.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.key6.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.key6.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.key6.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.key6.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.key7.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.key7.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.key7.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.key7.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                 var tween1 = this.add.tween(_this.key8.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.key8.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.key8.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.key8.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                var tween1 = this.add.tween(_this.key9.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.key9.scale);
                        tween2.to({ x:1.3 , y:1.3}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.key9.scale);
                                tween1.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.key9.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
            }*/
            
            if(_this.questionNo==10)
            {
                for(var k = 0;k<_this.keyGrp.length;k++)
                {
                    if(_this.keyGrp.getChildAt(k).visible == true)
                    {
                        _this.lock =_this.keyGrp.getChildAt(k).animations.add('walk');
                        _this.lock.play(10,true);
                    }
                 }
                
                var tween1 = this.add.tween(_this.key5.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.key5.scale);
                        tween2.to({ x:1.2 , y:1.2}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.key5.scale);
                                tween1.to({ x:0.8 , y:0.8}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.key5.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
                
                var tween1 = this.add.tween(_this.key6.scale);
                tween1.to({ x:1.1, y:1.1}, 200, 'Linear', true, 0);
                    tween1.onComplete.add(function(){

                        var tween2 = this.add.tween(_this.key6.scale);
                        tween2.to({ x:1.2, y:1.2}, 200, 'Linear', true, 0);

                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(_this.key6.scale);
                                tween1.to({ x:0.8 , y:0.8}, 200, 'Linear', true, 0);
                                tween1.onComplete.add(function(){
                                var tween2 = this.add.tween(_this.key6.scale);
                                tween2.to({ x:1, y:1}, 200, 'Linear', true, 0);
                            },this);
                    },this);
                },this);
                
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
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

        _this.speakerbtn.inputEnabled=false;
        _this.celebration = true;

        _this.click3 = _this.add.audio('ClickSound');
        _this.click3.play();

        _this.cmusic = _this.add.audio('celebr');
        _this.cmusic.play();

        _this.time.events.add(2000, _this.removeEverthing, _this);

        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play(); 
        
        target.events.onInputDown.removeAll();
    
	},
    
    removeEverthing:function() 
    {
        //console.log("removeEverthing");
        //console.log("Question Number :"+_this.no11);
        
        _this.tick.frame =0;
        _this.tick1.frame = 0;
        
        _this.tray.frame = 0;
        _this.tray1.frame = 0;
        
        _this.no11++;
        _this.count1++;
        _this.wrong = true;
      
        if(_this.no11<6)
        {
           // wrong = true;
            _this.timer1.stop();
            
            _this.MaintweenDestroy = _this.add.tween(_this.trayGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.lockGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.keyGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.lockGrp1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
           
            _this.MaintweenDestroy = _this.add.tween(_this.keyGrp1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.optionGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);


            _this.MaintweenDestroy.onComplete.add(function()
            {
                _this.count =0;
                _this.trayGrp.destroy();
                _this.lockGrp.destroy();
                _this.lockGrp1.destroy();
                _this.keyGrp.destroy();
                _this.keyGrp1.destroy();
                _this.optionGrp.destroy();
                
                _this.getQuestion();
            },_this);  
        }
        else
        {
            _this.stopVoice();
            _this.timer1.stop();
            _this.timer1=null;
            _this.state.start('unity4_1_1NewScore');
            
        }
    },
    
    wrongAns:function(target)
	{
        //console.log("wrong function");
        //console.log("wrong function :::"+target.name);
        _this.wrong = false;
        
        if(target.name=='tick')
        {
            _this.tick.frame = 1;
        }
        
        if(target.name=='tick1')
        {
            _this.tick1.frame =1;
        }
      
        _this.noofAttempts++;
        
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
        
        _this.timer3 = _this.time.create(false);
       
        if(_this.questionNo==1)
        {
            _this.shake.shake(10, _this.tray);
        }
        else if(_this.questionNo==2)
        {
             _this.shake.shake(10, _this.tray);
        }
        else if(_this.questionNo==3)
        {
             _this.shake.shake(10, _this.tray);
        }
        else if(_this.questionNo==4)
        {
             _this.shake.shake(10, _this.tray1);
        } 
        else if(_this.questionNo==5)
        {
             _this.shake.shake(10, _this.tray1);
        }
        else if(_this.questionNo==6)
        {
             _this.shake.shake(10, _this.tray1);
        }
        else if(_this.questionNo==7)
        {
             _this.shake.shake(10, _this.tray1);
        }
        else if(_this.questionNo==8)
        {
             _this.shake.shake(10, _this.tray);
        }
        else if(_this.questionNo==9)
        {
             _this.shake.shake(10, _this.tray1);
        }
        else
        {
            _this.shake.shake(10, _this.tray);
        }

        //  Set a TimerEvent to occur after 2 seconds
        _this.time.events.add(1500, function()
        {
            //console.log("inside the wrong");
            
            if(target.name == 'tick')
            {
                _this.tick.frame = 0;
                _this.tray.frame = 0;
            }

            if(target.name=='tick1')
            {
                _this.tick1.frame = 0;
                _this.tray1.frame = 0;
            }
            
        }, this);
        
        _this.click4 = _this.add.audio('ClickSound');
        _this.click4.play();
        
		_this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        
        _this.timer1.stop();
       
	},
    
  
    getVoice:function()
    {
        _this.stopVoice();
        //console.log("_this.no11  :"+_this.qArrays[_this.no11]);
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        

        switch(_this.qArrays[_this.no11])
        {
            case 1: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/English/lessobject.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Hindi/lessobjecthindi.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Kannada/lessobjectkannda.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Marathi/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Telugu/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Tamil/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Urdu/4.1.1_LessObj.mp3");
                        }
                    else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1.1/4.1.1_LessObj.mp3");
                          }
                    else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Odiya/4.1.1_a.mp3");
                    }
                    break;
                
            case 2: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/English/moreobject.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Hindi/moreobjecthindi.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Kannada/moreobjectkannda.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Marathi/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Telugu/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Tamil/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Urdu/4.1.1_MoreObj.mp3");
                        }
                    else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1.1/4.1.1_MoreObj.mp3");
                          }
                   else
                  {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Odiya/4.1.1_b.mp3");
                    }
                    break;
            case 3: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/English/lessobject.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Hindi/lessobjecthindi.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Kannada/lessobjectkannda.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Marathi/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Telugu/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Tamil/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Urdu/4.1.1_LessObj.mp3");
                        }
                    else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1.1/4.1.1_LessObj.mp3");
                          }
                    else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Odiya/4.1.1_a.mp3");
                    }
                    break;
            case 4:if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/English/lessobject.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Hindi/lessobjecthindi.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Kannada/lessobjectkannda.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Marathi/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Telugu/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Tamil/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Urdu/4.1.1_LessObj.mp3");
                        }
                    else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1.1/4.1.1_LessObj.mp3");
                          }
                    else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Odiya/4.1.1_a.mp3");
                    }
                    break;
            case 5:if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/English/moreobject.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Hindi/moreobjecthindi.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Kannada/moreobjectkannda.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Marathi/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Telugu/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Tamil/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Urdu/4.1.1_MoreObj.mp3");
                        }
                    else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1.1/4.1.1_MoreObj.mp3");
                          }
                    else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Odiya/4.1.1_b.mp3");
                    }
                    break;
            case 6:if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/English/moreobject.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Hindi/moreobjecthindi.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Kannada/moreobjectkannda.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1.1/4.1.1_MoreObj.mp3");
                          }
						  else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Marathi/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Telugu/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Tamil/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Urdu/4.1.1_MoreObj.mp3");
                        }
                    else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Odiya/4.1.1_b.mp3");
                    }
                    break;
            case 7:if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/English/lessobject.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Hindi/lessobjecthindi.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Kannada/lessobjectkannda.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1.1/4.1.1_LessObj.mp3");
                          }
						  else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Marathi/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Telugu/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Tamil/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Urdu/4.1.1_LessObj.mp3");
                        }
                    else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Odiya/4.1.1_a.mp3");
                    }
                    break;
            case 8: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/English/lessobject.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Hindi/lessobjecthindi.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Kannada/lessobjectkannda.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Marathi/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Telugu/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Tamil/4.1.1_LessObj.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Urdu/4.1.1_LessObj.mp3");
                        }
                    else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1.1/4.1.1_LessObj.mp3");
                          }
                    else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Odiya/4.1.1_a.mp3");
                    }
                    break;
            case 9: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/English/moreobject.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Hindi/moreobjecthindi.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Kannada/moreobjectkannda.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Marathi/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Telugu/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Tamil/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Urdu/4.1.1_MoreObj.mp3");
                        }
                    else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1.1/4.1.1_MoreObj.mp3");
                          }
                    else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Odiya/4.1.1_b.mp3");
                    }
                    break;
            case 10:if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/English/moreobject.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Hindi/moreobjecthindi.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Kannada/moreobjectkannda.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Marathi/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Telugu/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Tamil/4.1.1_MoreObj.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.1.1/Urdu/4.1.1_MoreObj.mp3");
                        }
                    else if(window.languageSelected=="Gujarati")
                          {
                               _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.1.1/4.1.1_MoreObj.mp3");
                          }
                    else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/4.1.1/Odiya/4.1.1_b.mp3");
                    }
                    break;
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    }

};