Game.AL_MEM_G6level1=function(){};


Game.AL_MEM_G6level1.prototype = 
{
    
    init:function()
    {
        _this= this;
        _this.languageSelected = window.languageSelected;
        
        if (_this.languageSelected == null 
            || _this.languageSelected == " "
            || _this.languageSelected == "")
        {
            _this.languageSelected = "English";
        }
        else console.log("Language selected: " + _this.languageSelected);
        
        _this.clickSound = document.createElement('audio');
        _this.clickSoundsrc = document.createElement('source');
        _this.clickSoundsrc.setAttribute("src", window.baseUrl+ "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.celebrationSound = document.createElement('audio');
        _this.celebrationSoundsrc = document.createElement('source');
        _this.celebrationSoundsrc.setAttribute("src", window.baseUrl+ "sounds/celebration.mp3");
        _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.setAttribute("src", window.baseUrl+ "sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", window.baseUrl+ "sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc); 
        
        _this.giveShadeSound = document.createElement('audio');
        _this.giveShadeSoundsrc = document.createElement('source');
        _this.giveShadeSoundsrc.setAttribute("src", window.baseUrl+ "sounds/Frame_change_sound.mp3");
        _this.giveShadeSound.appendChild(_this.giveShadeSoundsrc); 

        _this.nextOptionSound = document.createElement('audio');
        _this.nextOptionSoundsrc = document.createElement('source');
        _this.nextOptionSoundsrc.setAttribute("src", window.baseUrl+ "sounds/Next_option_sound.mp3");
        _this.nextOptionSound.appendChild(_this.nextOptionSoundsrc); 

        _this.negativeAlertSound = document.createElement('audio');
        _this.negativeAlertSoundsrc = document.createElement('source');
        _this.negativeAlertSoundsrc.setAttribute("src", window.baseUrl+ "sounds/Negative_alert_sound.mp3");
        _this.negativeAlertSound.appendChild(_this.negativeAlertSoundsrc); 

        telInitializerbbpp.gameIdInit("AL_MEM_G6",gradeSelected);
        console.log(gameID,"gameID ///////////////");
    },

 
    create:function(game)
    {
        _this.counters=1;
       _this.time.events.add(1500, function()
        {
            _this.gameCreate();
        });
    },
    
    ViewDemoVideo: function()
    {
        //* pause the game before going to the demovideo 
        _this.game.paused = true;
        _this.DemoVideo();  //* at the end of demo video/skip pressed, it will unpause the game.
    },
    
    gameCreate: function()
    {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.speakerbtn;
        _this.background;  
        _this.starsGroup;
        
        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;
        
        _this.speakerbtnClicked=false;
        _this.rightbtn_is_Clicked=false;
        _this.handDisplayed = false;

        // //*  User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
        _this.microConcepts;
        // _this.grade;

        _this.qn_flag=-1;
        _this.matched=0;
        _this.voiceCnt = 0;
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'BG');
        _this.navBar = _this.add.sprite(0,0,'navBar');
        _this.speakerbtn = _this.add.sprite(600,6,'CommonSpeakerBtn');

        _this.backbtn = _this.add.sprite(10, 6, 'backbtn');

        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.stopVoice();
            _this.time.events.removeAll();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50, function () {
                _this.state.start('grade6Algebra', true, false);
            });
        });
        
        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;
        _this.speakerbtn.events.onInputDown.add(function () 
        {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) 
            {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                if(_this.qn_flag == 1)
                {
                    _this.voiceNote1();
                }
                if(_this.qn_flag == 2)
                {
                    _this.voiceNote2();
                }
                _this.time.events.add(8000, function () 
                {
                    _this.speakerbtn.inputEnabled = true;
                    _this.speakerbtn.input.useHandCursor = true;
                    _this.speakerbtnClicked = false;
                    _this.EnableVoice();
                });
            }

        }, _this);

        _this.timebg = _this.add.sprite(305,6,'timebg');
        _this.timeDisplay = _this.add.text(330,22,_this.minutes + ' : '+ _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

        _this.Question1;
        _this.Question2;
        _this.Question3;

        _this.generateStarsForTheScene(4);
        
        _this.numGroup;

        //* first digit and second digit of number selected on number pad
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';

        _this.tweens=0;
        _this.cardClicked = false;  //* set flag to check if at least once the closed card is clicked
        
        //*hand1 is used to show equation 2nd time onwards.
        _this.hand1 = _this.add.image(770,200, 'hand'); 
        _this.hand1.visible = false;
        //* show all time is the duration for which all cards are opened and shown to user to memorise.
        //* first time, it is higher time like 12K. Next time onwards, it it set to a lower value.
        //* Show equation time is same as show all time initially. This is to trigger hand symbol  
        //* showing Question equation on the right side
        _this.showAllTime = 12000;
        _this.showEquationTime = _this.showAllTime;
        
        //* start the game with first question
        _this.time.events.add(100, _this.getQuestion);

    },

    //* function to enable the speaker button once pressed.
    EnableVoice: function () 
    {
        if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) 
        {
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
            _this.speakerbtnClicked = false;
        }
    },

    updateTimer:function() 
    {
        _this.counterForTimer++;
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
    },
    
    getQuestion:function(target)
    {
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
        }, _this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = _this.time.create(false);

        _this.timer1.loop(1000, function()
        {
            _this.updateTimer();
        }, _this);
        
        _this.timer1.start();
        
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.count=0;
        _this.values=0;

        _this.Questions=[];
        
        _this.sum2;
        _this.sumAns;
        _this.sum1;
        
        while(true){
            _this.sum1 = Math.floor(Math.random()*99)+1;
            _this.sumAns=Math.floor(Math.random()*(_this.sum1-1))+1;
            _this.sum2 =_this.sum1 - _this.sumAns;
            
            if(_this.sum2>0){
                _this.Questions.push([_this.sum1, _this.sum2, 0, _this.sum1-_this.sum2]);
               break;
            }
        }
        
        console.log("SSSSSSSSSSSSS" + _this.sum1 + " " + _this.sum2 + " " + _this.sumAns);
        
        _this.sub1;
        _this.sub2;
        _this.subAns;
        while(true){
            _this.subAns=Math.floor(Math.random()*99)+1;
            _this.sub1=Math.floor(Math.random()*(_this.subAns-1))+1;
            _this.sub2=_this.subAns - _this.sub1;
            if(_this.subAns != _this.sumAns){   //* avoid same answer with sum
                _this.Questions.push([_this.sub1, _this.sub2, 1, _this.sub1+_this.sub2]);
                break;
            }
        }
        
        console.log("BBBBBBBBBBBBB" + _this.sub1 + " " + _this.sub2 + " " + _this.subAns);

        _this.mul1;
        _this.mul2;
        _this.mulAns;
        while(true){
            
            _this.mul1=Math.floor(Math.random()*99)+1;
            _this.mul2=Math.floor(Math.random()*(_this.mul1-1))+1;
            _this.mulAns=Math.floor(_this.mul1/_this.mul2); //* divide & then floor it to get whole num
            
            console.log("LL 1:" + _this.mul1 + "LL 2:" + _this.mul2 + "LL 3:" + _this.mulAns );
            _this.mul1=_this.mulAns*_this.mul2; //* change mul1 to get a proper product.
            if(_this.mulAns != _this.subAns && _this.mulAns != _this.sumAns ){  
                //* avoid same answer with sum and sub
                _this.Questions.push([_this.mul1, _this.mul2, 2, _this.mul1/_this.mul2]);
                break;
            }
        }
        
        console.log("LLLLLLLLLLLLLLL" + _this.mul1 + " " + _this.mul2 + " " + _this.mulAns);

        _this.div1;
        _this.div2;
        _this.divAns;
        while(true){
            _this.div1=Math.floor(Math.random()*99)+1;
            _this.div2=Math.floor(Math.random()*(_this.div1-1))+1;
            _this.divAns=Math.floor(_this.div1/_this.div2); //* divide & then floor it to get whole num
            
            console.log("DD 1:" + _this.div1 + "DD 2:" + _this.div2 + "DD 3:" + _this.divAns );
            
            _this.div1=_this.divAns*_this.div2; //* change div1 to get a proper product.           
            if(_this.divAns != _this.subAns && _this.divAns != _this.sumAns &&
               _this.divAns != _this.mulAns){
                //* avoid same answer with sum sub and mul
                _this.Questions.push([_this.div1, _this.div2, 3, _this.div1/_this.div2]);
                break;
            }
        }
        
        console.log("DDDDDDDDDDDDDD" + _this.div1 + " " + _this.div2 + " " + _this.divAns);
        
        _this.options=[];
        _this.options.push(_this.Questions[0][3]);
        _this.options.push(_this.Questions[1][3]);
        _this.options.push(_this.Questions[2][3]);
        _this.options.push(_this.Questions[3][3]);
        var value = 0;
        var pointer = 1;
        var j=0;
        while(true){
            value=Math.floor(Math.random()*99)+1;
            pointer=1;
            for(j=0;j<_this.options.length;j++){
                if(_this.options[j]==value){
                    pointer=0;
                    break;
                }
            }

            if(pointer===1){
                _this.options.push(value);
                if(_this.options.length==9){
                    break;
                }
            }
        }

        console.log(_this.options);
        
        _this.shuffle(_this.options);
        _this.shuffle(_this.Questions);
        
        _this.Question();

         _this.questionid = 1;
    },
    
    stopVoice:function()
    {
        if(_this.Question1)
        {
            if(_this.Question1.contains(_this.Question1src))
            {
                _this.Question1.removeChild(_this.Question1src);
                _this.Question1src = null;
            }
            
            if(!_this.Question1.paused)
            {
                _this.Question1.pause();
                _this.Question1.currentTime=0.0;
            }
            _this.Question1 = null;
            _this.Question1src = null;
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
    
    pauseVoice: function()
    {        
        if(_this.Question1)
        {
            _this.Question1.pause();
            _this.Question1.currentTime = 0.0;
            _this.Question1.pause();
            _this.Question1.currentTime = 0.0;   
        } 
    },
    
    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();
        for (var i = 0; i < count; i++)
        {
            _this.starsGroup.create(_this.world.centerX-15, 10, 'starAnim');
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
    
    Question:function()
    {
        _this.outside=_this.add.group();
        _this.inside=_this.add.group();

//        _this.x=[80, 300, 520];
//        _this.y=[70, 180, 290]; //400
        _this.x=[80, 300, 520];
        _this.y=[120, 230, 340];      
        
        _this.complete=0;

        _this.qn_flag = 1;

        if(_this.count == 0)
        {   
            _this.voiceNote1();
            _this.hand = _this.add.image(60,120, 'hand')
            _this.hand.scale.setTo(0.50);
            _this.hand.rotation = 1.5;

            _this.time.events.add(200,function() {
                _this.tempDragAction =_this.add.tween(_this.hand);
                _this.tempDragAction.to({ x:60, y:380}, 4000, 'Linear', true, 0);
                _this.tempDragAction.start();
            });

            _this.time.events.add(4600,function(){
                //_this.hand.destroy();
            });
        }

        for(let i=0;i<3;i++){ //*i is decreased for showing 9 cards only 
            for(let j=0;j<3;j++){
                let outside=_this.add.image(_this.x[j], _this.y[i], 'inside');
                let inside=_this.add.image(_this.x[j], _this.y[i], 'in');
                inside.visible=false;
                outside.inputEnabled=true;

                _this.outside.addChild(outside);
                _this.inside.addChild(inside);
            }
        }

        let scale=[0.6, 0.65, 0.7, 0.75];
        let x=[780, 775, 770, 765]
//        let y=[80, 100, 120, 140];
        let y=[120, 140, 160, 180];
        _this.inside_Question=[];
        _this.outside_Question=[];

        _this.outside_Question[0]=_this.add.image(x[0], y[0], 'outside');
        _this.inside_Question[0]=_this.add.image(x[0], y[0], 'in');
        _this.inside_Question[0].visible=false;

        _this.outside_Question[0].scale.setTo(scale[0]);
        _this.inside_Question[0].scale.setTo(scale[0]);

        _this.outside_Question[1]=_this.add.image(x[1], y[1], 'outside');
        _this.inside_Question[1]=_this.add.image(x[1], y[1], 'in');
        _this.inside_Question[1].visible=false;

        _this.outside_Question[1].scale.setTo(scale[1]);
        _this.inside_Question[1].scale.setTo(scale[1]);

        _this.outside_Question[2]=_this.add.image(x[2], y[2], 'outside');
        _this.inside_Question[2]=_this.add.image(x[2], y[2], 'in');
        _this.inside_Question[2].visible=false;

        _this.outside_Question[2].scale.setTo(scale[2]);
        _this.inside_Question[2].scale.setTo(scale[2]);

        _this.outside_Question[3]=_this.add.image(x[3], y[3], 'outside');
        _this.inside_Question[3]=_this.add.image(x[3], y[3], 'in');
        _this.inside_Question[3].visible=false;

        _this.outside_Question[3].scale.setTo(scale[3]);
        _this.inside_Question[3].scale.setTo(scale[3]);

        _this.up=_this.add.image(770, 280, 'Thumbs_UP');
        _this.down=_this.add.image(850, 280, 'Thumbs_Down');

        _this.up.visible=false;
        _this.down.visible=false;

        _this.completed=[0, 0, 0, 0];
        _this.arr=[0, 1, 2, 3];
    
        _this.showAll();

        _this.chances=[[3, 3], [3, 3], [3, 3], [3, 3]]
        _this.turns();
    },

    turns: function(){
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount ++;

        let k=0;
            while(k<_this.inside.length){
                let length=k+1;
                let inside=_this.inside.getChildAt(k);
                let outside=_this.outside.getChildAt(k++);

                if(outside.visible===true){
                    outside.inputEnable=true;
                    outside.events.onInputDown.removeAll();
                }

                outside.events.onInputDown.add(function(target){
                    target.visible=false;
                    inside.visible=true;
                    
                    //* set the cardClicked flag if at least once the card is clicked
                    //* Since user has clicked the card already
                    //* setting the this flag will prevent showing the hand
                    //*  animation of card clicking.
                    _this.cardClicked = true;  

                    if(_this.chances[_this.arr[0]][0]>0){
                        _this.chances[_this.arr[0]][0]--;
                    }
                    else if(_this.chances[_this.arr[0]][1]>0){
                        _this.chances[_this.arr[0]][1]--;
                    }
                    for(let i=0;i<_this.inside.length;i++){
                        _this.outside.getChildAt(i).inputEnabled=false;
                    }
                    target.inputEnabled=false;
                    let text=_this.add.text(70, 40, 'n');
                    text.align = 'center';
                    text.font = 'Oh Whale';
                    text.fontSize = 30;
                    text.fill = '#FF0000';
                    let value = _this.add.text(90, 40, ' = '+_this.options[length-1]);
                    value.align = 'center';
                    value.font = 'Oh Whale';
                    value.fontSize = 30;
                    value.fill = '#65B4C3';

                    inside.addChild(value);
                    inside.addChild(text);

                    _this.up.visible=true;
                    _this.down.visible=true;

                    _this.up.inputEnabled=true;
                    _this.down.inputEnabled=true;

                    if(_this.count == 0 && _this.handDisplayed == false)
                    {
                        //* when a card is pressed, if hand is still showing equation, stop it
                        if (_this.tempDragAction) _this.tempDragAction.stop();  
                        
                        _this.handDisplayed = true;
                        _this.time.events.add(100,function(){
                            _this.tempDragAction =_this.add.tween(_this.hand);
                            _this.tempDragAction.to({ x:770, y:350}, 2000, 'Linear', true, 0);
                            _this.tempDragAction.start();
                        });
                        _this.time.events.add(3200,function(){
                            _this.tempDragAction =_this.add.tween(_this.hand);
                            _this.tempDragAction.to({ x:900, y:350}, 2000, 'Linear', true, 0);
                            _this.tempDragAction.start();
                        });

                        _this.time.events.add(8200,function(){
                            if(_this.hand) _this.hand.destroy();
                        });
                    }

                    _this.up.events.onInputDown.add(function(){
                        _this.up.frame=1;
                        _this.down.frame=0;
                        _this.lastAnswerCorrect = false;
                        _this.wrongSoundPlayed = false;
                        
                        _this.time.events.add(500,function(){
                            if(_this.hand) _this.hand.destroy();
                        });
                        
                        _this.up.events.onInputDown.removeAll();
                        _this.down.events.onInputDown.removeAll();

                        inside.removeChild(value);
                        inside.removeChild(text);

                        if(_this.options[length-1]===_this.Questions[_this.arr[0]][3]){
                            _this.complete++;
                            _this.completed[0]=1;
                            _this.up.frame=0;
                            _this.down.frame=0;

                            _this.up.visible=false;
                            _this.down.visible=false;
                            
                            if (_this.hand) _this.hand.destroy();

                            for(let i=0;i<_this.inside.length;i++){
                                _this.outside.getChildAt(i).inputEnabled=true;
                                if(!(_this.outside.getChildAt(i).visible===false&&_this.inside.getChildAt(i).visible===false)){
                                    _this.outside.getChildAt(i).visible=true;
                                    _this.inside.getChildAt(i).visible=false;
                                }
                            }

                            _this.noofAttempts++;
                            _this.time.events.add(10,function()
                            {
                                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                                _this.celebrationSound.play();
                                _this.starActions();
                            });
                            
                            _this.lastAnswerCorrect = true;

                            _this.inside.getChildAt(length-1).visible=false;
                            _this.outside.getChildAt(length-1).visible=false;

                            _this.addCube();
                        }
                        else{
                            _this.noofAttempts++;
                            _this.wrongSound.play();
                            _this.up.inputEnabled=true;
                            _this.down.inputEnabled=true;
                            _this.up.frame=0;
                            _this.down.frame=0;
                            _this.wrongSoundPlayed = true;

                            for(let i=0;i<_this.inside.length;i++){
                                _this.outside.getChildAt(i).inputEnabled=true;
                                if(!(_this.outside.getChildAt(i).visible===false&&_this.inside.getChildAt(i).visible===false)){
                                    _this.outside.getChildAt(i).visible=true;
                                    _this.inside.getChildAt(i).visible=false;
                                }

                            }

                            _this.up.visible=false;
                            _this.down.visible=false;

                            _this.up.frame=0;
                        }

                        if(_this.chances[_this.arr[0]][0]===0&&_this.chances[_this.arr[0]][1]===3){
                            _this.turns();
                        }

                        else if(_this.chances[_this.arr[0]][0]===0&&_this.chances[_this.arr[0]][1]===0){
                            _this.chances[_this.arr[0]][0]=3;
                            _this.chances[_this.arr[0]][1]=3;

                            _this.showAll();
                        }
                    });

                    _this.down.events.onInputDown.add(function(){
                        _this.up.frame=0;
                        _this.down.frame=1;
                        _this.lastAnswerCorrect = false;
                        _this.wrongSoundPlayed = false;

                        _this.up.events.onInputDown.removeAll();
                        _this.down.events.onInputDown.removeAll();
                        
                        _this.time.events.add(500,function(){
                            if(_this.hand) _this.hand.destroy();
                        });

                        inside.removeChild(value);
                        inside.removeChild(text);

                        if(_this.options[length-1]!==_this.Questions[_this.arr[0]][3]){
                            for(let i=0;i<_this.inside.length;i++){
                                _this.outside.getChildAt(i).inputEnabled=true;
                                if(!(_this.outside.getChildAt(i).visible===false&&_this.inside.getChildAt(i).visible===false)){
                                    _this.outside.getChildAt(i).visible=true;
                                    _this.inside.getChildAt(i).visible=false;
                                }
                            }

                            _this.up.frame=0;
                            _this.down.frame=0;

                            _this.up.visible=false;
                            _this.down.visible=false;
                            if (_this.hand) _this.hand.destroy();  //* destroy demo hand if exists
                        }
                        else{
                            _this.wrongSound.play();
                            _this.up.inputEnabled=true;
                                _this.down.inputEnabled=true;
                            _this.wrongSoundPlayed = true;

                                _this.down.frame=0;

                                _this.up.frame=0;
                                _this.down.frame=0;

                                for(let i=0;i<_this.inside.length;i++){
                                    _this.outside.getChildAt(i).inputEnabled=true;
                                    if(!(_this.outside.getChildAt(i).visible===false&&_this.inside.getChildAt(i).visible===false)){
                                        _this.outside.getChildAt(i).visible=true;
                                        _this.inside.getChildAt(i).visible=false;
                                    }
                                }

                                _this.up.visible=false;
                                _this.down.visible=false;
                            
                        }

                        if(_this.chances[_this.arr[0]][0]===0&&_this.chances[_this.arr[0]][1]===3){
                            _this.turns();
                        }

                        else if(_this.chances[_this.arr[0]][0]===0&&_this.chances[_this.arr[0]][1]===0){
                            _this.chances[_this.arr[0]][0]=3;
                            _this.chances[_this.arr[0]][1]=3;

                            _this.showAll();
                        }
                    });
                }, _this);
            }

        if(_this.counters===1){
            _this.counters--;
            
            //*time delay (same as show all time) after which equation is shown by hand symbol
            _this.time.events.add(_this.showEquationTime, function(){
                _this.qn_flag = -1;
                _this.qn_flag = 2;
                if(_this.count == 0)
                {   
                    _this.voiceNote2();
                    //_this.hand = _this.add.image(770,200, 'hand');
                    _this.hand.rotation = 0;
                    _this.hand.x = 770;
                    _this.hand.y = 230;
                    _this.hand.scale.setTo(0.50);
                    _this.hand.bringToTop();

                    _this.time.events.add(1000,function() 
                    {
                        if (_this.cardClicked == false)  //*dont show equation if card is clicked alrdy
                        {
                            _this.tempDragAction =_this.add.tween(_this.hand);
                            _this.tempDragAction.to({ x:900, y:230}, 3000, 'Linear', true, 0);
                            _this.tempDragAction.start();
                        }
                    });

                    _this.time.events.add(4800,function()
                    {
                        if (_this.cardClicked == false) //*dont show crd clck if card is clickd alrdy
                        {                        
                            _this.tempDragAction =_this.add.tween(_this.hand);
                            _this.tempDragAction.to({ x:600, y:240}, 3000, 'Linear', true, 0);
                            _this.tempDragAction.start();
                        }
                    });

                    _this.time.events.add(8000,function()  
                    {
                        if (_this.cardClicked == false) //*dont show cardclick if card is clicked alrdy
                        {
                        _this.hand.x = 600;  //* move the hand symbol on one of the cards to show clck
                        _this.hand.y = 240;
                        
                        _this.hand.scale.setTo(0.50);
                        _this.time.events.add(500, () => 
                        {
                            if (_this.cardClicked == false) //*dont show crdclck if crd is clckd alrdy
                            {
                            _this.hand.scale.setTo(0.45); //* showing click action by reducing size
                            _this.time.events.add(500, () =>
                            {
                                if (_this.cardClicked == false)
                                { //*dont show crdclck if crd is clckd alrdy
                                _this.hand.scale.setTo(0.5);
                                _this.time.events.add(450, () => 
                                {
                                    if (_this.cardClicked == false)
                                    { //*dont show crdclck if crd is clckd alrdy
                                    _this.tempDragAction =_this.add.tween(_this.hand);
                                    _this.tempDragAction.to({ x:880, y:460}, 2000, 'Linear', true, 0);
                                    _this.tempDragAction.start();
                                    }
                                });
                                }
                            });
                            }
                        });
                        }    //* if cardclicked == false
                    });
                }

                while(true){
                    let temp=_this.arr[0];
                    for(let j=0;j<4;j++){
                        _this.arr[j]=_this.arr[(j+1)%4];
                    } 
                    _this.arr[3]=temp;
    
                    temp=_this.completed[0];
                    for(let j=0;j<4;j++){
                        _this.completed[j]=_this.completed[(j+1)%4];
                    } 
                    _this.completed[3]=temp;
    
                    for(let i=3;i>=0;i--){
                        _this.inside_Question[i].visible=false;
                        _this.outside_Question[i].visible=false;
                    }
    
                    let k=3;
                    for(let i=0;i<4;i++){
                        if(_this.completed[i]==0){
                            if(_this.chances[_this.arr[i]][0]===3&&_this.chances[_this.arr[i]][1]===3){
                                _this.inside_Question[k].visible=false;
                                _this.outside_Question[k--].visible=true;
                            }else{
                                _this.inside_Question[k].visible=true;
                                _this.outside_Question[k--].visible=false;
                            }
                        }
                    }
    
                    if(_this.completed[0]==0){
                        break;
                    }
                }
                
                if(_this.completed[0]==0){
                    _this.inside_Question[3].visible=true;
                    _this.outside_Question[3].visible=false;
            
                    if(_this.question!=undefined){
                        _this.inside_Question[3].removeChild(_this.question[0]);
                        _this.inside_Question[3].removeChild(_this.question[1]);
                        _this.inside_Question[3].removeChild(_this.question[2]);
                    }
                    
                    _this.question=[];
                }
                else{
                        _this.inside_Question[3].visible=false;
                        _this.outside_Question[3].visible=false;
                }
                
    
                for(let i=0;i<4;i++){
                    console.log(_this.arr[i], _this.Questions);
                }
                
                if(_this.Questions[_this.arr[0]][2]==0){
                    _this.question[0] = _this.add.text(48, 40, ''+_this.Questions[_this.arr[0]][1]+' + ');
                    _this.question[1] = _this.add.text(108, 40, 'n ');
                    _this.question[2] = _this.add.text(128, 40, '= '+_this.Questions[_this.arr[0]][0]);
    
                    _this.question[0].align = 'center';
                    _this.question[0].font = 'Oh Whale';
                    _this.question[0].fontSize = 30;
                    _this.question[0].fill = '#65B4C3';
    
                    _this.question[1].align = 'center';
                    _this.question[1].font = 'Oh Whale';
                    _this.question[1].fontSize = 30;
                    _this.question[1].fill = '#FF0000';
    
                    _this.question[2].align = 'center';
                    _this.question[2].font = 'Oh Whale';
                    _this.question[2].fontSize = 30;
                    _this.question[2].fill = '#65B4C3';
    
                    _this.inside_Question[3].addChild(_this.question[0]);
                    _this.inside_Question[3].addChild(_this.question[1]);
                    _this.inside_Question[3].addChild(_this.question[2]);
                }
                else if(_this.Questions[_this.arr[0]][2]==1){
                    _this.question[0] = _this.add.text(48, 40, 'n ');
                    _this.question[1] = _this.add.text(68, 40, '- '+_this.Questions[_this.arr[0]][0]+' = '+_this.Questions[_this.arr[0]][1]);
    
                    _this.question[0].align = 'center';
                    _this.question[0].font = 'Oh Whale';
                    _this.question[0].fontSize = 30;
                    _this.question[0].fill = '#FF0000';
    
                    _this.question[1].align = 'center';
                    _this.question[1].font = 'Oh Whale';
                    _this.question[1].fontSize = 30;
                    _this.question[1].fill = '#65B4C3';
    
                    _this.inside_Question[3].addChild(_this.question[0]);
                    _this.inside_Question[3].addChild(_this.question[1]);
                }
                else if(_this.Questions[_this.arr[0]][2]==2){
                    _this.question[0] = _this.add.text(48, 40, 'n ');
                    _this.question[1] = _this.add.text(68, 40, 'x '+_this.Questions[_this.arr[0]][1]+' = '+_this.Questions[_this.arr[0]][0]);
    
                    _this.question[0].align = 'center';
                    _this.question[0].font = 'Oh Whale';
                    _this.question[0].fontSize = 30;
                    _this.question[0].fill = '#FF0000';
    
                    _this.question[1].align = 'center';
                    _this.question[1].font = 'Oh Whale';
                    _this.question[1].fontSize = 30;
                    _this.question[1].fill = '#65B4C3';
    
                    _this.inside_Question[3].addChild(_this.question[0]);
                    _this.inside_Question[3].addChild(_this.question[1]);
                }
                else {
                    _this.question[0] = _this.add.text(48, 40, ''+_this.Questions[_this.arr[0]][0]+' / ');
                    _this.question[1] = _this.add.text(100, 40, 'n ');
                    _this.question[2] = _this.add.text(128, 40, '= '+_this.Questions[_this.arr[0]][1]);
    
                    _this.question[0].align = 'center';
                    _this.question[0].font = 'Oh Whale';
                    _this.question[0].fontSize = 30;
                    _this.question[0].fill = '#65B4C3';
    
                    _this.question[1].align = 'center';
                    _this.question[1].font = 'Oh Whale';
                    _this.question[1].fontSize = 30;
                    _this.question[1].fill = '#FF0000';
    
                    _this.question[2].align = 'center';
                    _this.question[2].font = 'Oh Whale';
                    _this.question[2].fontSize = 30;
                    _this.question[2].fill = '#65B4C3';
    
                    _this.inside_Question[3].addChild(_this.question[0]);
                    _this.inside_Question[3].addChild(_this.question[1]);
                    _this.inside_Question[3].addChild(_this.question[2]);
                }
            });
            
        }
        else{
            while(true){
                let temp=_this.arr[0];
                for(let j=0;j<4;j++){
                    _this.arr[j]=_this.arr[(j+1)%4];
                } 
                _this.arr[3]=temp;

                temp=_this.completed[0];
                for(let j=0;j<4;j++){
                    _this.completed[j]=_this.completed[(j+1)%4];
                } 
                _this.completed[3]=temp;

                for(let i=3;i>=0;i--){
                    _this.inside_Question[i].visible=false;
                    _this.outside_Question[i].visible=false;
                }

                let k=3;
                for(let i=0;i<4;i++){
                    if(_this.completed[i]==0){
                        if(_this.chances[_this.arr[i]][0]===3&&_this.chances[_this.arr[i]][1]===3){
                            _this.inside_Question[k].visible=false;
                            _this.outside_Question[k--].visible=true;
                        }else{
                            _this.inside_Question[k].visible=true;
                            _this.outside_Question[k--].visible=false;
                        }
                    }
                }

                if(_this.completed[0]==0){
                    break;
                }
            }
            
            if(_this.completed[0]==0){
                
                if (_this.lastAnswerCorrect == false)
                {
                    if (_this.wrongSoundPlayed == true)
                    {
                        //* wait for sometime and then play alert for question Eq change
                        _this.time.events.add(1200,function()
                        {
                            _this.negativeAlertSound.play();
                            _this.showEquation();  //* show the hand symbol to show changed equation
                        });

                    }
                    else 
                    {
                        //* if no sound played, play the sound immediately.
                        _this.negativeAlertSound.play();
                        _this.showEquation(); //* show the hand symbol to show changed equation
                        
                    }
                }
                
                if (_this.lastAnswerCorrect == true)
                {
                    _this.time.events.add(1500,function()
                    {
                        _this.nextOptionSound.play();
                        _this.showEquation(); //* show the hand symbol to show changed equation
                    });
                }
                
                
                _this.inside_Question[3].visible=true;
                _this.outside_Question[3].visible=false;
                        
                if(_this.question!=undefined){
                    _this.inside_Question[3].removeChild(_this.question[0]);
                    _this.inside_Question[3].removeChild(_this.question[1]);
                    _this.inside_Question[3].removeChild(_this.question[2]);
                }
                
                _this.question=[];
            }
            else{
                    _this.inside_Question[3].visible=false;
                    _this.outside_Question[3].visible=false;
            }
            
            for(let i=0;i<4;i++){
                console.log(_this.arr[i], _this.Questions);
            }
            
            if(_this.Questions[_this.arr[0]][2]==0){
                _this.question[0] = _this.add.text(48, 40, ''+_this.Questions[_this.arr[0]][1]+' + ');
                _this.question[1] = _this.add.text(108, 40, 'n ');
                _this.question[2] = _this.add.text(128, 40, '= '+_this.Questions[_this.arr[0]][0]);

                _this.question[0].align = 'center';
                _this.question[0].font = 'Oh Whale';
                _this.question[0].fontSize = 30;
                _this.question[0].fill = '#65B4C3';

                _this.question[1].align = 'center';
                _this.question[1].font = 'Oh Whale';
                _this.question[1].fontSize = 30;
                _this.question[1].fill = '#FF0000';

                _this.question[2].align = 'center';
                _this.question[2].font = 'Oh Whale';
                _this.question[2].fontSize = 30;
                _this.question[2].fill = '#65B4C3';

                _this.inside_Question[3].addChild(_this.question[0]);
                _this.inside_Question[3].addChild(_this.question[1]);
                _this.inside_Question[3].addChild(_this.question[2]);
            }
            else if(_this.Questions[_this.arr[0]][2]==1){
                _this.question[0] = _this.add.text(48, 40, 'n ');
                _this.question[1] = _this.add.text(68, 40, '- '+_this.Questions[_this.arr[0]][0]+' = '+_this.Questions[_this.arr[0]][1]);

                _this.question[0].align = 'center';
                _this.question[0].font = 'Oh Whale';
                _this.question[0].fontSize = 30;
                _this.question[0].fill = '#FF0000';

                _this.question[1].align = 'center';
                _this.question[1].font = 'Oh Whale';
                _this.question[1].fontSize = 30;
                _this.question[1].fill = '#65B4C3';

                _this.inside_Question[3].addChild(_this.question[0]);
                _this.inside_Question[3].addChild(_this.question[1]);
            }
            else if(_this.Questions[_this.arr[0]][2]==2){
                _this.question[0] = _this.add.text(48, 40, 'n ');
                _this.question[1] = _this.add.text(68, 40, 'x '+_this.Questions[_this.arr[0]][1]+' = '+_this.Questions[_this.arr[0]][0]);

                _this.question[0].align = 'center';
                _this.question[0].font = 'Oh Whale';
                _this.question[0].fontSize = 30;
                _this.question[0].fill = '#FF0000';

                _this.question[1].align = 'center';
                _this.question[1].font = 'Oh Whale';
                _this.question[1].fontSize = 30;
                _this.question[1].fill = '#65B4C3';

                _this.inside_Question[3].addChild(_this.question[0]);
                _this.inside_Question[3].addChild(_this.question[1]);
            }
            else {
                _this.question[0] = _this.add.text(48, 40, ''+_this.Questions[_this.arr[0]][0]+' / ');
                _this.question[1] = _this.add.text(100, 40, 'n ');
                _this.question[2] = _this.add.text(128, 40, '= '+_this.Questions[_this.arr[0]][1]);

                _this.question[0].align = 'center';
                _this.question[0].font = 'Oh Whale';
                _this.question[0].fontSize = 30;
                _this.question[0].fill = '#65B4C3';

                _this.question[1].align = 'center';
                _this.question[1].font = 'Oh Whale';
                _this.question[1].fontSize = 30;
                _this.question[1].fill = '#FF0000';

                _this.question[2].align = 'center';
                _this.question[2].font = 'Oh Whale';
                _this.question[2].fontSize = 30;
                _this.question[2].fill = '#65B4C3';

                _this.inside_Question[3].addChild(_this.question[0]);
                _this.inside_Question[3].addChild(_this.question[1]);
                _this.inside_Question[3].addChild(_this.question[2]);
            }
        }
    },
    
    showEquation: function()
    //* show hand symbol across the question equation
    {
        _this.hand1.x = 770;
        _this.hand1.y = 230;
        _this.hand1.scale.setTo(0.50);
        _this.hand1.bringToTop();
        _this.hand1.visible = true;

        _this.time.events.add(10,function() 
        {
            _this.tempDragAction1 =_this.add.tween(_this.hand1);
            _this.tempDragAction1.to({ x:900, y:230}, 1500, 'Linear', true, 0);
            _this.tempDragAction1.start();
        });
        
        _this.time.events.add(1600,function()
        {
            _this.hand1.visible = false;
        });
    },

    voiceNote1:function()
    {
        _this.qn_flag = -1;
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl+ "questionSounds/AL-MEM-G6/" + _this.languageSelected + "/AL-MEM-G6B.mp3");
        _this.Question1.appendChild(_this.Question1src);
        _this.Question1.play();
        _this.time.events.add(1100,function(){
            _this.qn_flag = 1;
        });
    },

    voiceNote2:function()
    {
        _this.qn_flag = -1;
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl+ "questionSounds/AL-MEM-G6/" + _this.languageSelected + "/AL-MEM-G6C.mp3");
        _this.Question2.appendChild(_this.Question2src);
        _this.Question2.play();
        _this.time.events.add(2100,function(){
            _this.qn_flag = 2;
        });
    },

    shuffle: function (array) {
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

    addCube: function(){
        if(_this.values==0){
            _this.cover1=_this.add.image(750, 410, 'in');
            _this.cover1.scale.setTo(0.4);
            _this.value1=_this.add.image(750, 420, 'outside');
            _this.value1.scale.setTo(0.4, 0.8*0.4);
            _this.values++;
            _this.turns();
        }
        else if(_this.values==1){
            _this.cover1=_this.add.image(845, 410, 'in');
            _this.cover1.scale.setTo(0.4);
            _this.value1=_this.add.image(845, 420, 'outside');
            _this.value1.scale.setTo(0.4, 0.8*0.4);
            _this.values++;
            _this.turns();
        }
        else if(_this.values==2){
            _this.cover1=_this.add.image(750, 460, 'in');
            _this.cover1.scale.setTo(0.4);
            _this.value1=_this.add.image(750, 470, 'outside');
            _this.value1.scale.setTo(0.4, 0.8*0.4);
            _this.values++;
            _this.turns();
        }
        else if(_this.values==3) {
            _this.cover1=_this.add.image(845, 460, 'in');
            _this.cover1.scale.setTo(0.4);
            _this.value1=_this.add.image(845, 470, 'outside');
            _this.value1.scale.setTo(0.4, 0.8*0.4);
            _this.values++;
            _this.inside_Question[3].visible=false;
            _this.outside_Question[3].visible=false;
            _this.time.events.add(1000, function(){
                //_this.state.start('score', true, false);    
                _this.state.start('score', true, false, gameID,_this.microConcepts);
            });
        }
    },

    showAll: function(){
        for(let i=0;i<_this.inside.length;i++){
            if(!(_this.inside.getChildAt(i).visible===false&&_this.outside.getChildAt(i).visible===false)){
                _this.inside.getChildAt(i).visible=true;
                _this.outside.getChildAt(i).visible=false;

                let text=_this.add.text(70, 40, 'n');
                text.align = 'center';
                text.font = 'Oh Whale';
                text.fontSize = 30;
                text.fill = '#FF0000';

                let value = _this.add.text(90, 40, ' = '+_this.options[i]);
                value.align = 'center';
                value.font = 'Oh Whale';
                value.fontSize = 30;
                value.fill = '#65B4C3';

                _this.inside.getChildAt(i).addChild(value);
                _this.inside.getChildAt(i).addChild(text);
                
                //* showalltime delay for which cards are shown and then they are closed.
                //* first time it is 12K and then gets set to 8K. 2nd time onwards, cards are opened for
                //* for a shorter duration.
                _this.time.events.add(_this.showAllTime, function()
                {
                    _this.showAllTime = 8000;
                    _this.inside.getChildAt(i).visible=false;
                    _this.outside.getChildAt(i).visible=true;
                    _this.inside.getChildAt(i).removeChild(value);
                    _this.inside.getChildAt(i).removeChild(text);
                });
            }
        }
    },

    starActions : function()
    {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');

        //  //* star Actions changes
        //  _this.userHasPlayed =1;
        //  _this.timeinMinutes = _this.minutes;
        //  _this.timeinSeconds = _this.seconds;
        //  _this.game_id = "AL_MEM_G6";
        //  _this.grade = "6";
        //  _this.gradeTopics = "Variable and Equation";
         _this.microConcepts = "Algebra";

        _this.count++;
        anim.play();
    },
    
    
    shutdown:function()
    {
        _this.stopVoice();
    }, 
    
    DemoVideo:function()
    {
        //* This game is about subtraction of unlike fractions. 
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl+ "questionSounds/AL-MEM01-G6/" + 
                                         _this.languageSelected + "/AL-MEM01-G6-demo-1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* Observe the given fractions. 
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl+ "questionSounds/AL-MEM01-G6/" + 
                                         _this.languageSelected + "/AL-MEM01-G6-demo-2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //* Find their equivalent fractions which have the same denominators using Least Common Multiple method.
        _this.demoAudio3 = document.createElement('audio');
        _this.demoAudio3src = document.createElement('source');
        _this.demoAudio3src.setAttribute("src", window.baseUrl+ "questionSounds/AL-MEM01-G6/" + 
                                         _this.languageSelected + "/AL-MEM01-G6-demo-3.mp3");
        _this.demoAudio3.appendChild(_this.demoAudio3src);

        //* Convert the given unlike fractions to like fractions and subtract them.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl+ "questionSounds/AL-MEM01-G6/" + 
                                         _this.languageSelected + "/AL-MEM01-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Convert the given unlike fractions to like fractions and subtract them.
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl+ "questionSounds/AL-MEM01-G6/" + 
                                         _this.languageSelected + "/AL-MEM01-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* enter the equi fractions
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl+ "questionSounds/AL-MEM01-G6/" + 
                                         _this.languageSelected + "/AL-MEM01-G6-c.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        //* Drag the remaining fraction cubes to the whole.
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl+ "questionSounds/AL-MEM01-G6/" + 
                                         _this.languageSelected + "/AL-MEM01-G6-d.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        //* Enter your answer 
        _this.q5Sound = document.createElement('audio');
        _this.q5Soundsrc = document.createElement('source');
        _this.q5Soundsrc.setAttribute("src", window.baseUrl+ "questionSounds/AL-MEM01-G6/" + 
                                         _this.languageSelected + "/AL-MEM01-G6-e.mp3");
        _this.q5Sound.appendChild(_this.q5Soundsrc);

        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function ()
        {
            //_this.clickSound.play();
            _this.stopVideo();
            _this.stopAudio();
            _this.videoWorld.destroy();
            _this.skip.destroy();
            _this.game.paused = false;  //* restart the game
        });
    },

    //* function to stop the video and audio if they are playing.
    stopVideo: function()
    {
        console.log("inside stop video");
        if (_this.demoVideo_1)
        {
            console.log("removing the video");
            _this.demoVideo_1.destroy();
            _this.videoWorld.destroy();
        }
    },

    stopAudio: function()
    {    
        //* clear all the timers first
        
        if (_this.q2Timer) clearTimeout(_this.q2Timer);      
        if (_this.q3Timer) clearTimeout(_this.q3Timer);
        if (_this.q4Timer) clearTimeout(_this.q4Timer);
        if (_this.q5Timer) clearTimeout(_this.q5Timer);
        
        if (_this.demoAudio1)
        {
            console.log("removing the demo audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1.removeEventListener('ended', _this.dA1);
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.demoAudio2)
        {
            console.log("removing the demo audio1");
            _this.demoAudio2.pause();
            _this.demoAudio2.removeEventListener('ended', _this.dA2);
            _this.demoAudio2 = null;
            _this.demoAudio2src = null;
        }

        if (_this.demoAudio3)
        {
            console.log("removing the demo audio1");
            _this.demoAudio3.pause();
            _this.demoAudio3.removeEventListener('ended', _this.dA3);
            _this.demoAudio3 = null;
            _this.demoAudio3src = null;
        }
        
        if (_this.q1Sound)
        {
            console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }
        
        if (_this.q2Sound)
        {
            console.log("removing the q2");
            _this.q2Sound.pause();
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }
        
        if (_this.q3Sound)
        {
            console.log("removing the q3");
            _this.q3Sound.pause();
            _this.q3Sound = null;
            _this.q3Soundsrc = null;
        }

        if (_this.q4Sound)
        {
            console.log("removing the q4");
            _this.q4Sound.pause();
            _this.q4Sound = null;
            _this.q4Soundsrc = null;
        }

        if (_this.q5Sound)
        {
            console.log("removing the q5");
            _this.q5Sound.pause();
            _this.q5Sound = null;
            _this.q5Soundsrc = null;
        }

        //_this.time.events.removeAll(); cannot remove time events...animations wont work if removed
        _this.skip.events.onInputDown.removeAll();
    },

    //* event functions for demo audio and question audios. 
    //* do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    dA1: function()
    {
        _this.demoAudio2.play();
    },

    dA2: function()
    {
        _this.demoAudio3.play();
    },

    dA3: function()
    {
        _this.q1Sound.play();
    },

    showDemoVideo:function()
    {
        //* As _this.game is paused, phaser time events cannot be used since its timer is stopped.
        //* so we have to use js timers as required

        _this.demoAudio1.play(); 
        _this.demoVideo_1 = _this.add.video('nsf15_1');              
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl+ "assets/demoVideos/AL-MEM01-G6_1.mp4");
        _this.videoWorld = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.addEventListener('ended', _this.dA1);  //* play demo 1
        _this.demoAudio2.addEventListener('ended', _this.dA2);  //* play demo 2
        _this.demoAudio3.addEventListener('ended', _this.dA3);  //* play demo 3


        _this.q2Timer = setTimeout(function()    //* q1 js timer to play q1 after 18 seconds.
        {
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 36000);

        _this.q3Timer = setTimeout(function()    //* q1 js timer to play q1 after 18 seconds.
        {
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 51000);

        _this.q4Timer = setTimeout(function()    //* q2 js timer to play q2 after 18 seconds.
        {
            clearTimeout(_this.q4Timer);         //* clear the time once its used.
            _this.q4Sound.play();
        }, 55000);

        _this.q5Timer = setTimeout(function()    //* q4 js timer to play q4 after 18 seconds.
        {
            clearTimeout(_this.q5Timer);         //* clear the time once its used.
            _this.q5Sound.play();
        }, 60000);

        _this.demoVideo_1.onComplete.add(function()   //* on completion of demovideo close the video
        {
            _this.stopAudio();                  //* stop timers and audios
            _this.demoVideo_1.stop(false);      //* stop vide.
            _this.skip.events.onInputDown.removeAll();
            _this.videoWorld.destroy();         //* destroy the video, gets removed from screen.
            _this.skip.destroy();               //* skip button destroyed
            _this.game.paused = false;          //* now, unpause the game, so that it continues.
        });
    }
}