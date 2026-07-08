Game.ALP_01_G6level1 = function () { };


Game.ALP_01_G6level1.prototype =
{
    init: function (param, score) {
        _this = this;

        this.Stararr = param;
        this.score = score;
        _this = this;
        _this.languageSelected = window.languageSelected;

        if (_this.languageSelected == null
            || _this.languageSelected == " "
            || _this.languageSelected == "") {
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

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", window.baseUrl+ "sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.setAttribute("src", window.baseUrl+ "sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

        _this.Ask_Question1 = _this.createAudio("ALP-01-G6A");
        _this.Ask_Question2 = _this.createAudio("ALP-01-G6B");
        _this.Ask_Question3 = _this.createAudio("ALP-01-G6B");
        _this.Ask_Question4 = _this.createAudio("ALP-01-G6C");
        _this.Ask_Question5 = _this.createAudio("ALP-01-G6D");

        telInitializerbbpp.gameIdInit("ALP_01_G6", gradeSelected);
        console.log(gameID,"gameID...");
    },

    create:function(game)
    {
        _this.hintBtn = _this.add.sprite(670,6,'bulb');
        _this.hintBtn.scale.setTo(0.5,0.6);
        _this.hintBtn.visible = false;
        //* show the demo video
       _this.time.events.add(1, function()
        {
           
            _this.ViewDemoVideo(); 
        });
        
        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        _this.time.events.add(1500, function()
        {
            console.log("//////////////////")
            _this.gameCreate(game);
        });
    },
    
    ViewDemoVideo: function()
    {
        //* pause the game before going to the demovideo 
        _this.game.paused = true;
        _this.DemoVideo();  //* at the end of demo video/skip pressed, it will unpause the game.
    },

    gameCreate: function (game) {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

      //  _this.AnsTimerCount = 0;
        _this.count1 = 0;
        _this.speakerbtn;
        _this.background;
        _this.count = 0;
        _this.starsGroup;
        _this.selectedAns1='';
        _this.selectedAns2='';
        _this.AnswerBox;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.answer=0;
        _this.stage=0;
        _this.Question_flag=0;
        _this.starting=0;

        //  //*  User Progress variables for BB++ app
        //  _this.userHasPlayed = 0;
        //  _this.timeinMinutes;
        //  _this.timeinSeconds;
        //  _this.game_id;
        //  _this.score = 0;
        //  _this.gradeTopics;
         _this.microConcepts;
        //  _this.grade;
 

        _this.counterForTimer = 0;
        _this.array=["3n", "2n", "3n", "2n", "4n", "5n", "3n", "2n+1", "3n+1", "5n+1", "7n+1", "4n+1", "3n+1", "2n+1"];
        
        //* this.arr has one number for each pattern. The patterns are as below
        //* 0 - letter C 3 sticks
        //* 1 - letter L 2 sticks
        //* 2 - letter Z 3 sticks
        //* 3 - letter V 2 sticks
        //* 4 - letter E 4 sticks
        //* 5 - letter S 5 sticks
        //* 6 - letter F 3 sticks
        //* 7 - letter U 3 sticks
        //* 8 - letter A 4 sticks
        //* 9 - house 6 sticks
        //* 10 - octagone 8 sticks
        //* 11 - pentagon 5 sticks
        //* 12 - square 4 sticks
        //* 13 - triangle 3 sticks
        _this.arr=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        _this.shuffle(_this.arr);

        _this.hint_flag = 0;// * hint flag zero

        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
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

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();

                if (_this.Question_flag == 0) {
                    _this.Ask_Question1.play();
                }
                else if (_this.Question_flag == 1) {
                    _this.Ask_Question2.play();
                }
                else if (_this.Question_flag == 2) {
                    _this.Ask_Question3.play();
                }
                else if (_this.Question_flag == 3) {
                    _this.Ask_Question4.play();
                }
                else if (_this.Question_flag == 4) {
                    _this.Ask_Question5.play();
                }

                _this.time.events.add(4000, function () {
                    _this.speakerbtnClicked = false;
                    _this.EnableVoice();
                });
            }

        }, _this);

        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

         //bulb 
        //  _this.hintBtn = _this.add.sprite(670,6,'bulb');
        //  _this.hintBtn.scale.setTo(0.5,0.6);
        _this.hintBtn.bringToTop();
        _this.hintBtn.visible = true;
         _this.hintBtn.smoothed = false;
         _this.hintBtnAnim = _this.hintBtn.animations.add('hint');
         _this.hintBtnAnim.play(15);
         _this.hintBtnAnim.onComplete.add(function () {
             _this.hintBtnAnim.play(15);
         }, _this);
         _this.hintBtn.inputEnabled = true;
         _this.hintBtn.input.useHandCursor = true;
 
         _this.hintBtn.events.onInputDown.add(function () {
             console.log("inside hintbutton function"); 

             //* hintbtn false
            _this.hintBtn.inputEnabled = false;
            _this.hintBtn.input.useHandCursor = false; 

             //* show the demo video
             _this.time.events.add(1, function()
             {
                 _this.ViewDemoVideo(); 
             });
            
         });

        _this.generateStarsForTheScene(6);

        //* include variables for use - objGroup (where egg objects can be added)
        _this.objGroup;
        _this.numGroup;

        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);
    },
    
    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl+ "questionSounds/ALP-01-G6/" + _this.languageSelected + "/" + src + ".mp3");
        audio.appendChild(audiosrc);
        // audio.play();

        return audio;
    },

    //* function to enable the speaker button once pressed.
    EnableVoice: function () {
        if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
            _this.speakerbtnClicked = false;
        }
    },

    updateTimer: function () {
        _this.counterForTimer++;
        if (_this.counterForTimer > 59) {
            _this.counterForTimer = 0;

            if (_this.minutes < 10) {
                _this.minutes = _this.minutes + 1;
                _this.seconds = 00;
            }
            else {
                _this.minutes = _this.minutes + 1;
            }
        }
        else {
            if (_this.counterForTimer < 10)
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes + ':' + _this.seconds);
        //timer.setText(minutes + ':'+ seconds );
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

    getQuestion: function (target) {

        _this.sceneCount ++;
        _this.noofAttempts =0;
        _this.AnsTimerCount =0;
        
        _this.completed=0;
        _this.current=0;
        _this.choice=_this.arr[_this.starting++];
        //_this.choice= 12;

        if (_this.timer) {
            _this.timer.stop();
            _this.timer = null;
        }
        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function () {
            _this.AnsTimerCount++;
        }, _this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = _this.time.create(false);

        _this.timer1.loop(1000, function () {
            _this.updateTimer();
        }, _this);

        _this.timer1.start();

        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.

        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;

        _this.Question_flag=0;
        if(_this.starting===1)
            _this.Ask_Question1.play();

        _this.pattern =_this.add.group();
        if(_this.choice===0){
            var line2=_this.add.sprite(508, 120, 'matchLine');
            line2.frame=0;
            line2.angle+=90;
            line2.scale.setTo(1, 0.70);
            line2.anchor.setTo(0);
            var line1=_this.add.sprite(315, 130, 'matchLine');
            line1.frame=0;
            var line3=_this.add.sprite(508, 370, 'matchLine');
            line3.frame=0;
            line3.angle+=90;
            line3.scale.setTo(1, 0.70);
            line3.anchor.setTo(0);
            _this.pattern.addChild(line1);
            _this.pattern.addChild(line2);
            _this.pattern.addChild(line3);
            _this.current=3;
            _this.answer=3;
        }
        else if(_this.choice===1){
            var line1=_this.add.sprite(315, 150, 'matchLine');
            line1.frame=0;
            var line2=_this.add.sprite(335, 405, 'matchLine');
            line2.frame=0;
            line2.angle+=90;
            line2.anchor.setTo(1);
            line2.scale.setTo(1, 0.70);
            
            _this.pattern.addChild(line1);
            _this.pattern.addChild(line2);
            _this.current=2;
            _this.answer=2;
        }
        else if(_this.choice===2){
            var line2=_this.add.sprite(575, 170, 'matchLine');
            line2.frame=0;
            line2.angle+=90;
            line2.scale.setTo(1, 0.85);
            var line1=_this.add.sprite(565, 185, 'matchLine');
            line1.frame=0;
            line1.angle+=55;
            var line3=_this.add.sprite(575, 338, 'matchLine');
            line3.frame=0;
            line3.angle+=90;
            line3.scale.setTo(1, 0.85);
            _this.pattern.addChild(line1);
            _this.pattern.addChild(line2);
            _this.pattern.addChild(line3);
            _this.current=3;
            _this.answer=3;
        }
        else if(_this.choice===3){
            var line1=_this.add.sprite(315, 160, 'matchLine');
            line1.frame=0;
            line1.angle-=27.5;
            var line2=_this.add.sprite(555, 150, 'matchLine');
            line2.frame=0;
            line2.angle+=27.5;
            _this.pattern.addChild(line1);
            _this.pattern.addChild(line2);
            _this.current=2;
            _this.answer=2;
        }
        else if(_this.choice===4){
            var line2=_this.add.sprite(505, 115, 'matchLine');
            line2.frame=0;
            line2.angle+=90;
            line2.scale.setTo(1, 0.7);
            var line1=_this.add.sprite(315, 130, 'matchLine');
            line1.frame=0;
            var line3=_this.add.sprite(505, 370, 'matchLine');
            line3.frame=0;
            line3.angle+=90;
            line3.scale.setTo(1, 0.7);
            
            var line4=_this.add.sprite(505, 245, 'matchLine');
            line4.frame=0;
            line4.angle+=90;
            line4.scale.setTo(1, 0.7);
            
            _this.pattern.addChild(line1);
            _this.pattern.addChild(line2);
            _this.pattern.addChild(line3);
            _this.pattern.addChild(line4);
            _this.current=4;
            _this.answer=4;
        }
        else if(_this.choice===5){
            var line2=_this.add.sprite(527, 130, 'matchLine');
            line2.frame=0;
            line2.angle+=90;
            line2.scale.setTo(0.7);
            
            var line4=_this.add.sprite(527, 250, 'matchLine');
            line4.frame=0;
            line4.angle+=90;
            line4.scale.setTo(0.7);
            
            var line1=_this.add.sprite(340, 140, 'matchLine');
            line1.frame=0;
            line1.scale.setTo(0.7, 0.5);
            
            var line5=_this.add.sprite(512, 265, 'matchLine');
            line5.frame=0;
            line5.scale.setTo(0.7, 0.5);
            
            var line3=_this.add.sprite(343, 385, 'matchLine');
            line3.frame=0;
            line3.angle+=90;
            line3.scale.setTo(0.7, -0.7);
            
            _this.pattern.addChild(line1);
            _this.pattern.addChild(line2);
            _this.pattern.addChild(line3);
            _this.pattern.addChild(line4);
            _this.pattern.addChild(line5);
            _this.current=5;
            _this.answer=5;
        }
        else if(_this.choice===6){
            var line2=_this.add.sprite(527, 150, 'matchLine');
            line2.frame=0;
            line2.angle+=90;
            line2.scale.setTo(1,0.7);
            
            var line1=_this.add.sprite(335, 150, 'matchLine');
            line1.frame=0;
            
            var line4=_this.add.sprite(527, 265, 'matchLine');
            line4.frame=0;
            line4.angle+=90;
            line4.scale.setTo(1,0.7);
            
            _this.pattern.addChild(line1);
            _this.pattern.addChild(line2);
            _this.pattern.addChild(line4);
            _this.current=3;
            _this.answer=3;
        }
        else if(_this.choice===7){
            var line1=_this.add.sprite(315, 140, 'matchLine');
            line1.frame=0;
            //line1.scale.setTo(1,0.9);
            var line2=_this.add.sprite(520, 373, 'matchLine');
            line2.frame=0;
            line2.angle+=90;
            line2.scale.setTo(1,0.75);
            var line3=_this.add.sprite(518, 140, 'matchLine');
            line3.frame=0;
            _this.pattern.addChild(line1);
            _this.pattern.addChild(line2);
            _this.pattern.addChild(line3);
            _this.current=3;
            _this.answer=3;
        }
        else if(_this.choice===8){
            var line2=_this.add.sprite(558, 150, 'matchLine');
            line2.frame=0;
            line2.angle+=90;
            line2.scale.setTo(1,0.9)
            var line1=_this.add.sprite(315, 150, 'matchLine');
            line1.frame=0;
            var line3=_this.add.sprite(576, 403, 'matchLine');
            line3.frame=0;
            line3.angle+=180;
            var line4=_this.add.sprite(558, 263, 'matchLine');
            line4.frame=0;
            line4.angle+=90;
            line4.scale.setTo(1,0.9)
             _this.pattern.addChild(line1);
             _this.pattern.addChild(line2);
            _this.pattern.addChild(line3);
           _this.pattern.addChild(line4);
            _this.current=4;
            _this.answer=4;
        }
        else if(_this.choice===9){
            var line1=_this.add.sprite(325, 270, 'matchLine');
            line1.frame=0;
            line1.scale.setTo(1, 0.5);
            var line2=_this.add.sprite(565, 270, 'matchLine');
            line2.frame=0;
            line2.scale.setTo(1, 0.5);
            var line3=_this.add.sprite(568, 380, 'matchLine');
            line3.frame=0;
            line3.angle+=90;
            line3.scale.setTo(1, 0.91);
            var line4=_this.add.sprite(450, 186, 'matchLine');
            line4.frame=0;
            line4.angle+=60;
            line4.scale.setTo(1, 0.6);
            var line5=_this.add.sprite(450, 203, 'matchLine');
            line5.frame=0;
            line5.angle-=60;
            line5.scale.setTo(1, 0.6);
            var line6=_this.add.sprite(567, 265, 'matchLine');
            line6.frame=0;
            line6.angle+=90;
            line6.scale.setTo(1, 0.90);
            _this.pattern.addChild(line3);
            _this.pattern.addChild(line4);
            _this.pattern.addChild(line5);
            _this.pattern.addChild(line6);
            _this.pattern.addChild(line2);
            _this.pattern.addChild(line1);
            _this.current=6;
            _this.answer=6;
        }
        else if(_this.choice===10){
            var line2=_this.add.sprite(468, 160, 'matchLine');
            line2.frame=0;
            line2.angle+=90;
            var line1=_this.add.sprite(325, 235, 'matchLine');
            line1.frame=0;
            var line3=_this.add.sprite(470, 373, 'matchLine');
            line3.frame=0;
            line3.angle+=90;
            var line4=_this.add.sprite(535, 233, 'matchLine');
            line4.frame=0;

            var line5=_this.add.sprite(395, 160, 'matchLine');
            line5.frame=0;
            line5.angle+=45;
            line5.scale.setTo(0.4);
            var line6=_this.add.sprite(465, 166, 'matchLine');
            line6.frame=0;
            line6.angle-=45;
            line6.scale.setTo(0.4);

            var line7=_this.add.sprite(538, 301, 'matchLine');
            line7.frame=0;
            line7.angle+=45;
            line7.scale.setTo(0.4);
            var line8=_this.add.sprite(325, 311, 'matchLine');
            line8.frame=0;
            line8.angle-=45;
            line8.scale.setTo(0.4);

            _this.pattern.addChild(line1);
            _this.pattern.addChild(line2);
            _this.pattern.addChild(line3);
            _this.pattern.addChild(line4);
            _this.pattern.addChild(line5);
            _this.pattern.addChild(line6);
            _this.pattern.addChild(line7);
            _this.pattern.addChild(line8);

            line1.scale.setTo(1/3,0.28);
            line2.scale.setTo(1/3,0.28);
            line3.scale.setTo(1/3,0.28);
            line4.scale.setTo(1/3,0.28);

            _this.current=8;
            _this.answer=8;
        }
        else if(_this.choice===11){
            var line1=_this.add.sprite(325, 270, 'matchLine');
            line1.frame=0;
            line1.scale.setTo(1, 0.5);
            var line2=_this.add.sprite(565, 270, 'matchLine');
            line2.frame=0;
            line2.scale.setTo(1, 0.5);
            var line3=_this.add.sprite(567, 381, 'matchLine');
            line3.frame=0;
            line3.angle+=90;
            line3.scale.setTo(1,0.9);
            var line4=_this.add.sprite(450, 193, 'matchLine');
            line4.frame=0;
            line4.angle+=60;
            line4.scale.setTo(1, 0.54);
            var line5=_this.add.sprite(454, 210, 'matchLine');
            line5.frame=0;
            line5.angle-=60;
            line5.scale.setTo(1, 0.53);
            _this.pattern.addChild(line1);
            _this.pattern.addChild(line2);
            _this.pattern.addChild(line3);
            _this.pattern.addChild(line4);
           _this.pattern.addChild(line5);
            _this.current=5;
            _this.answer=5;
        }
        else if(_this.choice===12){
            var line2=_this.add.sprite(520, 120, 'matchLine');
            line2.frame=0;
            line2.angle+=90;
            line2.scale.setTo(1,0.75);
            var line1=_this.add.sprite(315, 130, 'matchLine');
            line1.frame=0;
            var line3=_this.add.sprite(520, 373, 'matchLine');
            line3.frame=0;
            line3.angle+=90;
            line3.scale.setTo(1,0.75);
            var line4=_this.add.sprite(514, 130, 'matchLine');
            line4.frame=0;
            _this.pattern.addChild(line1);
            _this.pattern.addChild(line2);
           _this.pattern.addChild(line3);
            _this.pattern.addChild(line4);
            _this.current=4;
            _this.answer=4;
        }
        else if(_this.choice===13){
            var line1=_this.add.sprite(445, 170, 'matchLine');
            line1.frame=0;
            line1.angle+=30;
            var line2=_this.add.sprite(587, 385, 'matchLine');
            line2.frame=0;
            line2.angle+=90;
            var line3=_this.add.sprite(599, 390, 'matchLine');
            line3.frame=0;
            line3.angle+=180-30;
            _this.pattern.addChild(line1);
            _this.pattern.addChild(line2);
            _this.pattern.addChild(line3);
            _this.current=3;
            _this.answer=3;
        }

        var tickBtn=_this.add.sprite(800, 250, 'TickBtn');
        _this.matchBox;
        tickBtn.frame=0;
        tickBtn.inputEnabled=true;
        tickBtn.events.onInputDown.add(function(target){
            _this.clickSound.play();
            target.inputEnabled=false;
            target.frame=1;
            if(_this.completed==_this.current){
                tickBtn.visible=false;
                _this.Question_flag=2;
                if(_this.starting===1)
                    _this.Ask_Question3.play();
                _this.matchBox=_this.add.image(365, 400, 'match3');
                _this.AnswerBox = _this.add.sprite(88, 11,'white-box');
                _this.AnswerBox.frame=1;
                console.log(_this.AnswerBox.frame);
                _this.matchBox.addChild(_this.AnswerBox);
                _this.addNumberPad();
            }
            else{
                target.frame=0;
                _this.noofAttempts ++;
                _this.wrongSound.play();
                target.inputEnabled=true;
            }

        }, tickBtn);
        _this.matchDrag=_this.add.image(115, 250, 'match1');
        _this.matchButton=_this.add.image(115, 250, 'match2');
        _this.matchDrag.frame=1;
        _this.matchDrag.inputEnabled=true;
        _this.matchDrag.input.useHandCursor=true;
        // _this.matchDrag.events.onInputDown.add(function(){
        //     _this.clickSound.play();
        // });
        //_this.matchDrag.input.enableDrag(true);
        _this.matchDrag.events.onInputDown.add(function(target){
            _this.clickSound.play();
            if(target.x>=0){
                for(let i=0;i<_this.pattern.length;i++){
                    if(_this.pattern.getChildAt(i).frame===0){
                        _this.pattern.getChildAt(i).frame=1;
                        _this.completed++;
                        break;
                    }
                }
            }
            
            target.x=115;
            target.y=250;
        }, _this.matchDrag);

         //* hintbtn will be true when the game is playing
         _this.hintBtn.inputEnabled = true;
         _this.hintBtn.input.useHandCursor = true;
         _this.hint_flag = 1;

         _this.questionid = 1;
    },

    stopVoice: function () {

        if(_this.Ask_Question1)
        {
            _this.Ask_Question1.pause();
            _this.Ask_Question1 = null; 
           //_this.VoiceNote1src = null;
        }
        if(_this.Ask_Question2)
        {
            _this.Ask_Question2.pause();
            _this.Ask_Question2 = null; 
           //_this.VoiceNote1src = null;
        }
        if(_this.Ask_Question3)
        {
            _this.Ask_Question3.pause();
            _this.Ask_Question3 = null; 
           //_this.VoiceNote1src = null;
        }
        if(_this.Ask_Question4)
        {
            _this.Ask_Question4.pause();
            _this.Ask_Question4 = null; 
           //_this.VoiceNote1src = null;
        }
        if(_this.Ask_Question5)
        {
            _this.Ask_Question5.pause();
            _this.Ask_Question5 = null; 
           //_this.VoiceNote1src = null;
        }

        if (_this.celebrationSound) {
            if (_this.celebrationSound.isPlaying) {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }
    },


    generateStarsForTheScene: function (count) {
        _this.starsGroup = _this.add.group();
        for (var i = 0; i < count; i++) {
            _this.starsGroup.create(_this.world.centerX - 15, 10, 'starAnim');
            for (var j = 0; j < i; j++) {
                if (_this.starsGroup.getChildAt(j)) {
                    _this.starsGroup.getChildAt(j).x -= 15;
                    _this.starsGroup.getChildAt(i).x += 15;
                }
            }
        }

    },

    //* Change this function to show small number pad as given in GDD. (no signs)
    addNumberPad:function()
    {
        _this.Choice=1;
        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();
        
        var bottomnumpadbg = _this.numGroup.create(0,515,'numpadbg');
        bottomnumpadbg.scale.setTo(1,1);
        
        bottomnumpadbg.name = "numpadbg";

        _this.x = 70;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;
        
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,552,'Numberpad'); 
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.8,0.8);
            _this.numbg.name =i+1;
            _this.numbg.frame=i;
                        
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
           
            _this.x+=73;           
        }

        _this.wrongbtn = _this.numGroup.create(_this.x+10,552,'Numberpad');
        _this.wrongbtn.frame = 10;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.8,0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked,_this);
                   
        _this.rightbtn = _this.numGroup.create(_this.x+80,552,'Numberpad');
        _this.rightbtn.frame = 11;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.8,0.8);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked,_this);
       
        _this.enterTxt = _this.add.text(-100,8, "");
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fontSize = "30px";
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.fill = '#65B4C3';
   
        _this.numpadTween = _this.add.tween(_this.numGroup);
        _this.AnswerBox.visible=true;
        //tween in the number pad after a second.
        _this.tweenNumPad();
        
    },
    
    wrongbtnClicked:function(target){
        _this.clickSound.play();
        _this.eraseScreen();
    },

    eraseScreen:function(target)
    {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.enterTxt.destroy();
        _this.enterTxt;
        _this.enterTxt.text = "";
    },

    tweenNumPad: function()
    {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x:0, y:-43},1000, 'Linear', true, 0);
        
    },
    numClicked:function(target)
    {
        _this.clickSound.play();
       if(_this.selectedAns2==='')
        {
            if (_this.selectedAns1===0 && target.name!==0)
            {
                _this.selectedAns2 = target.name;
            }
            else if(_this.selectedAns1!=='' && _this.selectedAns1!==0)
            {
                _this.selectedAns2 = target.name;
            }
            else if(_this.selectedAns1!== 0 && target.name==10)
            {
                _this.selectedAns1 = 0;
            }
            else
            {
                _this.selectedAns1 = target.name;
            }
        }
            
        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.enterTxt.visible=false;
        
        if (_this.selectedAns1 === 10) var_selectedAns1 = 0;
        else var_selectedAns1 = _this.selectedAns1;
        if (_this.selectedAns2 === 10) _this.selectedAns2 = 0;
        else var_selectedAns2 = _this.selectedAns2;


        if (_this.selectedAns1 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns1;
        
        if (_this.selectedAns2 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns2;
        
        if(_this.selectedAns2==="")
        _this.enterTxt = _this.add.text(17,10,"" +var_selectedAns1+var_selectedAns2, { fontSize: '30px' });
        else
        _this.enterTxt = _this.add.text(10,10,"" +var_selectedAns1+var_selectedAns2, { fontSize: '30px' });
        _this.enterTxt.align = 'right';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.fontWeight = 'normal';
        _this.AnswerBox.addChild(_this.enterTxt);
        _this.enterTxt.visible=true;   
    },
    rightbtnClicked:function()
    {
        _this.clickSound.play();
        if(Number(''+_this.selectedAns1+_this.selectedAns2)===_this.answer&&_this.answer===_this.completed&&_this.stage!==3)
        {
            _this.counterCelebrationSound.play();
            
            if(_this.stage===0){
                _this.rightbtn.inputEnabled = false;
                _this.rightbtn.input.useHandCursor = false;
                _this.rightbtn_is_Clicked=true;
                _this.time.events.add(2000, function () 
                {  
                    _this.numGroup.destroy();
                    _this.eraseScreen();
                    _this.matchButton.destroy();
                    _this.matchDrag.destroy();
                    _this.matchBox.destroy();
                    _this.pattern.destroy();   
                    
                    _this.Question_flag=1;
                    if(_this.starting===1){
                        _this.Ask_Question2.play();
                    }
                    _this.column=_this.add.image(50, 100, 'column1');
                    _this.matchDrag1=_this.add.image(60, 160, 'match1');
                    _this.matchDrag2=_this.add.image(60, 355, 'match1');
                    _this.n=_this.add.image(60, 275, 'textBox');
                    _this.Txt=_this.add.text(18,10, "n");;
                    _this.Txt.align = 'right';
                    _this.Txt.font = "Akzidenz-Grotesk BQ";
                    _this.Txt.fill = '#F04C23';
                    _this.Txt.fontWeight = 'normal';
                    _this.n.addChild(_this.Txt);
                    _this.addNumberPad();
                    _this.AnswerBox.destroy();
                    _this.AnswerBox=_this.add.sprite(370, 355, 'white-box');
                    _this.AnswerBox.frame=1;
                    console.log(_this.AnswerBox.frame);

                    _this.top1=_this.add.image(160, 275, 'textBox');
                    _this.Txt1=_this.add.text(18,10, "1");;
                    _this.Txt1.align = 'right';
                    _this.Txt1.font = "Akzidenz-Grotesk BQ";
                    _this.Txt1.fill = '#F04C23';
                    _this.Txt1.fontWeight = 'normal';
                    _this.top1.addChild(_this.Txt1);

                    _this.value1=_this.add.image(160, 355, 'textBox');
                    _this.Txt2=_this.add.text(18,10, String(_this.current));;
                    _this.Txt2.align = 'right';
                    _this.Txt2.font = "Akzidenz-Grotesk BQ";
                    _this.Txt2.fill = '#F04C23';
                    _this.Txt2.fontWeight = 'normal';
                    _this.value1.addChild(_this.Txt2);

                    _this.top2=_this.add.image(370, 275, 'textBox');
                    _this.Txt2=_this.add.text(18,10, "2");;
                    _this.Txt2.align = 'right';
                    _this.Txt2.font = "Akzidenz-Grotesk BQ";
                    _this.Txt2.fill = '#F04C23';
                    _this.Txt2.fontWeight = 'normal';
                    _this.top2.addChild(_this.Txt2);

                    _this.matchDrag1.frame=1;
                    _this.matchDrag2.frame=0;

                    _this.pattern =_this.add.group();
                    _this.completed=0;

                    if(_this.choice===0){
                        var line2=_this.add.sprite(242, 112, 'matchLine');
                        line2.frame=1;
                        line2.angle+=90;
                        var line1=_this.add.sprite(145, 115, 'matchLine');
                        line1.frame=1;
                        var line3=_this.add.sprite(242, 235, 'matchLine');
                        line3.frame=1;
                        line3.angle+=90;
                        line1.scale.setTo(0.5);
                        line2.scale.setTo(0.5,0.35);
                        line3.scale.setTo(0.5,0.35);
                        _this.pattern.addChild(line1);
                        _this.pattern.addChild(line2);
                        _this.pattern.addChild(line3);
                        _this.answer=6;
                    }
                    else if(_this.choice===1){
                        var line1=_this.add.sprite(140, 115, 'matchLine');
                        line1.frame=1;
                        var line2=_this.add.sprite(150, 243, 'matchLine');
                        line2.frame=1;
                        line2.angle+=90;
                        line2.anchor.setTo(1);
                        line1.scale.setTo(0.5);
                        line2.scale.setTo(0.5,0.35);
                        _this.pattern.addChild(line1);
                        _this.pattern.addChild(line2);
                        _this.answer=4;
                    }
                    else if(_this.choice===2){
                        var line2=_this.add.sprite(245, 132, 'matchLine');
                        line2.frame=1;
                        line2.angle+=90;
                        var line1=_this.add.sprite(240, 140, 'matchLine');
                        line1.frame=1;
                        line1.angle+=55;
                        var line3=_this.add.sprite(245, 217, 'matchLine');
                        line3.frame=1;
                        line3.angle+=90;
                        line1.scale.setTo(0.5);
                        line2.scale.setTo(0.5,0.5*0.85);
                        line3.scale.setTo(0.5,0.5*0.85);
                        _this.pattern.addChild(line1);
                        _this.pattern.addChild(line2);
                        _this.pattern.addChild(line3);
                        _this.answer=6;
                    }
                    else if(_this.choice===3){
                        var line1=_this.add.sprite(128, 140, 'matchLine');
                        line1.frame=1;
                        line1.angle-=27.5;
                        var line2=_this.add.sprite(248, 135, 'matchLine');
                        line2.frame=1;
                        line2.angle+=27.5;
                        _this.pattern.addChild(line1);
                        _this.pattern.addChild(line2);
                        line1.scale.setTo(0.5);
                        line2.scale.setTo(0.5);
                        _this.answer=4;
                    }
                    else if(_this.choice===4){
                        var line2=_this.add.sprite(237, 112, 'matchLine');
                        line2.frame=1;
                        line2.angle+=90;
                        var line1=_this.add.sprite(140, 115, 'matchLine');
                        line1.frame=1;
                        var line3=_this.add.sprite(237, 235, 'matchLine');
                        line3.frame=1;
                        line3.angle+=90;
                        var line4=_this.add.sprite(237, 175, 'matchLine');
                        line4.frame=1;
                        line4.angle+=90;
                        line1.scale.setTo(0.5);
                        line2.scale.setTo(0.5,0.35);
                        line3.scale.setTo(0.5,0.35);
                        line4.scale.setTo(0.5,0.35);
                        _this.pattern.addChild(line1);
                        _this.pattern.addChild(line2);
                        _this.pattern.addChild(line3);
                        _this.pattern.addChild(line4);
                        _this.answer=8;
                    }
                    else if(_this.choice===5){
                        var line2=_this.add.sprite(238, 115, 'matchLine');
                        line2.frame=1;
                        line2.angle+=90;
                        
                        var line4=_this.add.sprite(238, 175, 'matchLine');
                        line4.frame=1;
                        line4.angle+=90;
                        
                        var line1=_this.add.sprite(145, 120, 'matchLine');
                        line1.frame=1;
                        line1.scale.setTo(0.5*0.7, 0.25);
                        
                        var line5=_this.add.sprite(230, 181, 'matchLine');
                        line5.frame=1;
                        line5.scale.setTo(0.5*0.7, 0.25);
                        
                        var line3=_this.add.sprite(145, 241, 'matchLine');
                        line3.frame=1;
                        line3.angle+=90;
                        line3.scale.setTo(0.5*0.7, -0.5*0.7);

                        line2.scale.setTo(0.5*0.7);
                        line4.scale.setTo(0.5*0.7);
                        
                        _this.pattern.addChild(line1);
                        _this.pattern.addChild(line2);
                        _this.pattern.addChild(line3);
                        _this.pattern.addChild(line4);
                        _this.pattern.addChild(line5);
                        _this.answer=10;
                    }
                    else if(_this.choice===6){
                        var line2=_this.add.sprite(245, 115, 'matchLine');
                        line2.frame=1;
                        line2.angle+=90;
                        var line1=_this.add.sprite(129, 115, 'matchLine');
                        line1.frame=1;
                        var line4=_this.add.sprite(245, 175, 'matchLine');
                        line4.frame=1;
                        line4.angle+=90;
                        line1.scale.setTo(0.5);
                        line2.scale.setTo(0.5,0.43);
                        line4.scale.setTo(0.5,0.43);
                        _this.pattern.addChild(line1);
                        _this.pattern.addChild(line2);
                        _this.pattern.addChild(line4);
                        _this.answer=6;
                    }
                    else if(_this.choice===7){
                        var line1=_this.add.sprite(130, 115, 'matchLine');
                        line1.frame=1;
                        var line2=_this.add.sprite(227, 232, 'matchLine');
                        line2.frame=1;
                        line2.angle+=90;
                        var line3=_this.add.sprite(227, 115, 'matchLine');
                        line3.frame=1;
                        line1.scale.setTo(0.5);
                        line2.scale.setTo(0.5,0.35);
                        line3.scale.setTo(0.5);
                        _this.pattern.addChild(line1);
                        _this.pattern.addChild(line2);
                        _this.pattern.addChild(line3);
                        _this.answer=5;
                    }
                    else if(_this.choice===8){
                        var line2=_this.add.sprite(239, 115, 'matchLine');
                        line2.frame=1;
                        line2.angle+=90;
                        var line1=_this.add.sprite(130, 115, 'matchLine');
                        line1.frame=1;
                        var line3=_this.add.sprite(249, 241, 'matchLine');
                        line3.frame=1;
                        line3.angle+=180;
                        var line4=_this.add.sprite(239, 175, 'matchLine');
                        line4.frame=1;
                       line4.angle+=90;
                        line1.scale.setTo(0.5);
                        line2.scale.setTo(0.5,0.4);
                        line3.scale.setTo(0.5);
                        line4.scale.setTo(0.5,0.4);
                        _this.pattern.addChild(line1);
                        _this.pattern.addChild(line2);
                         _this.pattern.addChild(line3);
                        _this.pattern.addChild(line4);
                        _this.answer=7;
                    }
                    else if(_this.choice===9){
                        var line1=_this.add.sprite(128, 162, 'matchLine');
                        line1.frame=1;
                        line1.scale.setTo(0.5, 0.3);
                        var line2=_this.add.sprite(248, 163, 'matchLine');
                        line2.frame=1;
                        line2.scale.setTo(0.5, 0.3);
                        var line3=_this.add.sprite(252, 230, 'matchLine');
                        line3.frame=1;
                        line3.angle+=90;
                        line3.scale.setTo(0.5,0.47);
                        var line4=_this.add.sprite(190, 120, 'matchLine');
                        line4.frame=1;
                        line4.angle+=60;
                        line4.scale.setTo(0.5, 0.3);
                        var line5=_this.add.sprite(190, 128, 'matchLine');
                        line5.frame=1;
                        line5.angle-=60;
                        var line6=_this.add.sprite(249, 162, 'matchLine');
                        line6.frame=1;
                        line6.angle+=90;
                        line6.scale.setTo(0.5,0.44);
                        line5.scale.setTo(0.5, 0.3);
                         _this.pattern.addChild(line2);
                         _this.pattern.addChild(line3);
                        _this.pattern.addChild(line4);
                        _this.pattern.addChild(line5);
                        _this.pattern.addChild(line6);
                        _this.pattern.addChild(line1);
                        _this.answer=11;
                    }
                    else if(_this.choice===10){
                        var line2=_this.add.sprite(213, 128, 'matchLine');
                            line2.frame=1;
                            line2.angle+=90;
                            var line1=_this.add.sprite(140, 165, 'matchLine');
                            line1.frame=1;
                            var line3=_this.add.sprite(213, 233, 'matchLine');
                            line3.frame=1;
                            line3.angle+=90;
                            var line4=_this.add.sprite(245, 166, 'matchLine');
                            line4.frame=1;

                            var line5=_this.add.sprite(175, 127, 'matchLine');
                            line5.frame=1;
                            line5.angle+=45;
                            line5.scale.setTo(0.2);
                            var line6=_this.add.sprite(212, 132, 'matchLine');
                            line6.frame=1;
                            line6.angle-=45;
                            line6.scale.setTo(0.2);

                            var line7=_this.add.sprite(247, 200, 'matchLine');
                            line7.frame=1;
                            line7.angle+=45;
                            line7.scale.setTo(0.2);
                            var line8=_this.add.sprite(140, 203, 'matchLine');
                            line8.frame=1;
                            line8.angle-=45;
                            line8.scale.setTo(0.2);

                            _this.pattern.addChild(line1);
                            _this.pattern.addChild(line2);
                            _this.pattern.addChild(line3);
                            _this.pattern.addChild(line4);
                            _this.pattern.addChild(line5);
                            _this.pattern.addChild(line6);
                            _this.pattern.addChild(line7);
                            _this.pattern.addChild(line8);

                            line1.scale.setTo(1/6,0.14);
                            line2.scale.setTo(1/6,0.14);
                            line3.scale.setTo(1/6,0.14);
                            line4.scale.setTo(1/6,0.14);
                            _this.answer=15;
                    }
                    else if(_this.choice===11){
                        var line1=_this.add.sprite(128, 155, 'matchLine');
                        line1.frame=1;
                        line1.scale.setTo(0.5, 0.3);
                        var line2=_this.add.sprite(248, 155, 'matchLine');
                        line2.frame=1;
                        line2.scale.setTo(0.5, 0.3);
                        var line3=_this.add.sprite(250, 225, 'matchLine');
                        line3.frame=1;
                        line3.angle+=90;
                        line3.scale.setTo(0.5,0.45);
                        var line4=_this.add.sprite(189, 121, 'matchLine');
                        line4.frame=1;
                        line4.angle+=60;
                        line4.scale.setTo(0.5, 0.25);
                        var line5=_this.add.sprite(190, 130, 'matchLine');
                        line5.frame=1;
                        line5.angle-=60;
                        line5.scale.setTo(0.5, 0.26);
                        _this.pattern.addChild(line1);
                        _this.pattern.addChild(line2);
                        _this.pattern.addChild(line3);
                        _this.pattern.addChild(line4);
                        _this.pattern.addChild(line5);
                        _this.answer=9;
                    }
                    else if(_this.choice===12){
                        var line2=_this.add.sprite(235, 112, 'matchLine');
                        line2.frame=1;
                        line2.angle+=90;
                        var line1=_this.add.sprite(138, 115, 'matchLine');
                        line1.frame=1;
                        var line3=_this.add.sprite(235, 235, 'matchLine');
                        line3.frame=1;
                        line3.angle+=90;
                        var line4=_this.add.sprite(234, 115, 'matchLine');
                        line4.frame=1;
                        line1.scale.setTo(0.5);
                        line2.scale.setTo(0.5,0.35);
                        line3.scale.setTo(0.5,0.35);
                        line4.scale.setTo(0.5);
                        _this.pattern.addChild(line1);
                        _this.pattern.addChild(line2);
                        _this.pattern.addChild(line3);
                        _this.pattern.addChild(line4);
                        _this.answer=7;
                    }
                    else if(_this.choice===13){
                        var line3=_this.add.sprite(255, 226, 'matchLine');
                        line3.frame=1;
                        line3.angle+=180-30;
                        var line1=_this.add.sprite(185, 130, 'matchLine');
                        line1.frame=1;
                        line1.angle+=30;
                        var line2=_this.add.sprite(245, 224, 'matchLine');
                        line2.frame=1;
                        line2.angle+=90;

                        line1.scale.setTo(0.5,0.44);
                        line2.scale.setTo(0.5,0.42);
                        line3.scale.setTo(0.5,0.44);
                        _this.pattern.addChild(line1);
                        _this.pattern.addChild(line2);
                        _this.pattern.addChild(line3);
                        _this.answer=5;
                    }

                    _this.matchDrag=_this.add.image(60, 160, 'match1');

                    for(let i=0;i<2;i++){
                        if(_this.choice===0||_this.choice===12){
                            let l2=_this.add.sprite(387+98*i, 112, 'matchLine');
                            l2.frame=0;
                            l2.angle+=90;
                            
                            let l1=_this.add.sprite(290+98*i, 115, 'matchLine');
                            l1.frame=0;
                            let l3=_this.add.sprite(387+98*i, 235, 'matchLine');
                            l3.frame=0;
                            l3.angle+=90;
                            l1.scale.setTo(0.5);
                            l2.scale.setTo(0.5,0.35);
                            l3.scale.setTo(0.5,0.35);
                            _this.pattern.addChild(l1);
                            _this.pattern.addChild(l2);
                            _this.pattern.addChild(l3);
                        }
                        if(_this.choice===1||_this.choice===7){
                            let l1=_this.add.sprite(290+97*i, 115, 'matchLine');
                            l1.frame=0;
                            let l2=_this.add.sprite(300+97*i, 243, 'matchLine');
                            l2.frame=0;
                            l2.angle+=90;
                            l2.anchor.setTo(1);
                            l1.scale.setTo(0.5);
                            l2.scale.setTo(0.5,0.35);
                    
                            _this.pattern.addChild(l1);
                            _this.pattern.addChild(l2);
                        }
                        if(_this.choice===2){
                            let line2=_this.add.sprite(390+107*i, 132, 'matchLine');
                            line2.frame=0;
                            line2.angle+=90;
                            let line1=_this.add.sprite(385+107*i, 140, 'matchLine');
                            line1.frame=0;
                            line1.angle+=55;
                            let line3=_this.add.sprite(390+107*i, 217, 'matchLine');
                            line3.frame=0;
                            line3.angle+=90;
                            line1.scale.setTo(0.5);
                            line2.scale.setTo(0.5,0.5*0.85);
                            line3.scale.setTo(0.5,0.5*0.85);
                            _this.pattern.addChild(line1);
                            _this.pattern.addChild(line2);
                            _this.pattern.addChild(line3);
                            console.log( _this.pattern.length,"patt len")
                        }
                        if(_this.choice===3){
                            let line1=_this.add.sprite(271+120*i, 140, 'matchLine');
                            line1.frame=0;
                            line1.angle-=27.5;
                            let line2=_this.add.sprite(391+120*i, 135, 'matchLine');
                            line2.frame=0;
                            line2.angle+=27.5;
                            _this.pattern.addChild(line1);
                            _this.pattern.addChild(line2);
                            line1.scale.setTo(0.5);
                            line2.scale.setTo(0.5);
                        }
                        if(_this.choice===4){
                            let l2=_this.add.sprite(386+97*i, 112, 'matchLine');
                            l2.frame=0;
                            l2.angle+=90;
                            l2.scale.setTo(0.5,0.5*0.7);
                            
                            let l1=_this.add.sprite(290+97*i, 115, 'matchLine');
                            l1.frame=0;
                            l1.scale.setTo(0.5);
                            
                            let l3=_this.add.sprite(386+97*i, 235, 'matchLine');
                            l3.frame=0;
                            l3.angle+=90;
                            l3.scale.setTo(0.5,0.5*0.7);
                            
                            let l4=_this.add.sprite(386+98*i, 175, 'matchLine');
                            l4.frame=0;
                            l4.angle+=90;
                            l4.scale.setTo(0.5,0.5*0.7);
                            
                            _this.pattern.addChild(l1);
                            _this.pattern.addChild(l2);
                            _this.pattern.addChild(l3);
                            _this.pattern.addChild(l4);
                        }
                        if(_this.choice===5){
                            var line2=_this.add.sprite(381+92*i, 115, 'matchLine');
                            line2.frame=0;
                            line2.angle+=90;
                            
                            var line4=_this.add.sprite(381+92*i, 175, 'matchLine');
                            line4.frame=0;
                            line4.angle+=90;
                            
                            var line1=_this.add.sprite(288+92*i, 120, 'matchLine');
                            line1.frame=0;
                            line1.scale.setTo(0.5*0.7, 0.25);
                            
                            var line5=_this.add.sprite(373+92*i, 182, 'matchLine');
                            line5.frame=0;
                            line5.scale.setTo(0.5*0.7, 0.25);
                            
                            var line3=_this.add.sprite(288+92*i, 241, 'matchLine');
                            line3.frame=0;
                            line3.angle+=90;
                            line3.scale.setTo(0.5*0.7, -0.5*0.7);

                            line2.scale.setTo(0.5*0.7);
                            line4.scale.setTo(0.5*0.7);
                            
                            _this.pattern.addChild(line1);
                            _this.pattern.addChild(line2);
                            _this.pattern.addChild(line3);
                            _this.pattern.addChild(line4);
                            _this.pattern.addChild(line5);
                        }
                        if(_this.choice===6||_this.choice===8){
                            let l2=_this.add.sprite(391+119*i, 115, 'matchLine');//+120*i
                            l2.frame=0;
                            l2.angle+=90;
                            let l1=_this.add.sprite(273+118*i, 115, 'matchLine');//+118*i
                            l1.frame=0;
                            let l4=_this.add.sprite(391+119*i, 175, 'matchLine');//+120*i
                            l4.frame=0;
                            l4.angle+=90;
                            l1.scale.setTo(0.5);
                            l2.scale.setTo(0.5,0.43);
                            l4.scale.setTo(0.5,0.44);
                            _this.pattern.addChild(l1);
                            _this.pattern.addChild(l2);
                            _this.pattern.addChild(l4);  
                            console.log(_this.pattern.length, "pattern lennn");
                        }
                        if((_this.choice===7||_this.choice===12)&&i===1){
                            let l3=_this.add.sprite(364+120*i, 115, 'matchLine');
                            l3.frame=0;
                            l3.scale.setTo(0.5);
                            _this.pattern.addChild(l3);
                        }
                        if(_this.choice===9){
                            let line1=_this.add.sprite(130+120*i+140, 155, 'matchLine');
                            line1.frame=0;
                            line1.scale.setTo(0.5, 0.3);
                            if(i===1){
                                var line2=_this.add.sprite(248+120*i+140, 155, 'matchLine');
                                line2.frame=0;
                                line2.scale.setTo(0.5, 0.3);
                                _this.pattern.addChild(line2);
                            }
                            let line3=_this.add.sprite(253+120*i+140, 225, 'matchLine');
                            line3.frame=0;
                            line3.angle+=90;
                            line3.scale.setTo(0.5,0.47);
                            let line4=_this.add.sprite(191+120*i+140, 118, 'matchLine');
                            line4.frame=0;
                            line4.angle+=60;
                            line4.scale.setTo(0.5,0.28);
                            let line5=_this.add.sprite(189+120*i+140, 126, 'matchLine');
                            line5.frame=0; 
                            line5.angle-=60;
                            line5.scale.setTo(0.5, 0.28);
                            let l4=_this.add.sprite(391+120*i, 155, 'matchLine');
                            l4.frame=0;
                            l4.angle+=90;
                            l4.scale.setTo(0.5,0.45);
                            _this.pattern.addChild(line3);
                            _this.pattern.addChild(line4);
                            _this.pattern.addChild(line5);
                            _this.pattern.addChild(line1);
                            _this.pattern.addChild(l4);
                        }
                        if(_this.choice===10){
                            var line2=_this.add.sprite(212+105*i+150, 129, 'matchLine');
                            line2.frame=0;
                            line2.angle+=90;
                            var line1=_this.add.sprite(140+105*i+150, 164, 'matchLine');
                            line1.frame=0;
                            var line3=_this.add.sprite(213+105*i+150, 233, 'matchLine');
                            line3.frame=0;
                            line3.angle+=90;
                            if(i===1){
                                var line4=_this.add.sprite(245+105*i+150, 165, 'matchLine');
                                line4.frame=0;
                                line4.scale.setTo(1/6,0.14);
                                _this.pattern.addChild(line4);
                            }
                            var line5=_this.add.sprite(175+105*i+150, 127, 'matchLine');
                            line5.frame=0;
                            line5.angle+=45;
                            line5.scale.setTo(0.2);
                            var line6=_this.add.sprite(212+105*i+150, 131, 'matchLine');
                            line6.frame=0;
                            line6.angle-=45;
                            line6.scale.setTo(0.2);

                            var line7=_this.add.sprite(247+105*i+150, 200, 'matchLine');
                            line7.frame=0;
                            line7.angle+=45;
                            line7.scale.setTo(0.2);
                            var line8=_this.add.sprite(140+105*i+150, 203, 'matchLine');
                            line8.frame=0;
                            line8.angle-=45;
                            line8.scale.setTo(0.2);

                            _this.pattern.addChild(line1);
                            _this.pattern.addChild(line2);
                            _this.pattern.addChild(line3);
                            _this.pattern.addChild(line5);
                           _this.pattern.addChild(line6);
                            _this.pattern.addChild(line7);
                            _this.pattern.addChild(line8);

                            line1.scale.setTo(1/6,0.14);
                            line2.scale.setTo(1/6,0.14);
                            line3.scale.setTo(1/6,0.14);
                        }
                        if(_this.choice===11){
                            let line1=_this.add.sprite(128+120*i+140, 155, 'matchLine');
                            line1.frame=0;
                            line1.scale.setTo(0.5, 0.3);
                            if(i===1){
                                var line2=_this.add.sprite(248+120*i+140, 155, 'matchLine');
                                line2.frame=0;
                                line2.scale.setTo(0.5, 0.3);
                                _this.pattern.addChild(line2);
                            }
                            let line3=_this.add.sprite(251+120*i+140, 225, 'matchLine');
                            line3.frame=0;
                            line3.angle+=90;
                            line3.scale.setTo(0.5,0.46);
                            let line4=_this.add.sprite(187+120*i+140, 118, 'matchLine');
                            line4.frame=0;
                            line4.angle+=60;
                            line4.scale.setTo(0.5, 0.25);
                            let line5=_this.add.sprite(189+120*i+140, 126, 'matchLine');
                            line5.frame=0;
                            line5.angle-=60;
                            line5.scale.setTo(0.5, 0.28);
                            _this.pattern.addChild(line1);
                            _this.pattern.addChild(line3);
                            _this.pattern.addChild(line4);
                            _this.pattern.addChild(line5);
                        }
                        if(_this.choice===8&&i===1){
                            let line3=_this.add.sprite(401+119*i, 240, 'matchLine');
                            line3.frame=0;
                            line3.angle+=180;
                            line3.scale.setTo(0.5);
                            _this.pattern.addChild(line3);
                        }
                        if(_this.choice===13){
                            if(i!==1||i===1&&(i+1)%2!==0){
                                var line3=_this.add.sprite(240+140+120*i+20, 226, 'matchLine');
                                line3.frame=0;
                                line3.angle+=150;
                                line3.scale.setTo(0.5,0.44);
                                _this.pattern.addChild(line3);
                            }
                            if(i!==1||i===1&&(i+1)%2===0){
                                var line1=_this.add.sprite(170+140+120*i+20, 130, 'matchLine');
                                line1.frame=0;
                                line1.angle+=30;
                                line1.scale.setTo(0.5,0.44);
                                _this.pattern.addChild(line1);
                            }
                            
                            if((i+1)%2===0){
                                var line2=_this.add.sprite(168+140+120*i+20, 129, 'matchLine');
                                line2.frame=0;
                                line2.angle+=90;
                            }
                            else{
                                var line2=_this.add.sprite(229+140+120*i+20, 224, 'matchLine');
                                line2.frame=0;
                                line2.angle+=90;
                            }
                            line2.scale.setTo(0.5,0.42);
                            _this.pattern.addChild(line2);
                        }
                    }

                    _this.stage++;
                    _this.matchDrag.frame=1;
                    _this.matchDrag.inputEnabled=true;
                    _this.matchDrag.input.useHandCursor=true;
                   // _this.matchDrag.input.enableDrag(true);
                    // _this.matchDrag.events.onInputDown.add(function(){
                    //     _this.clickSound.play();
                    // });
                    _this.matchDrag.events.onInputDown.add(function(target){
                            _this.clickSound.play();
                            if(target.x>=0){
                                for(let i=0;i<_this.pattern.length;i++){
                                    if(_this.pattern.getChildAt(i).frame===0){
                                        _this.pattern.getChildAt(i).frame=1;
                                        _this.completed++;
                                        break;
                                    }
                                }
                            }
                            target.x=60;
                            target.y=160;
                        }, _this.matchDrag);
                });
            }
            else if(_this.stage===1){
                _this.time.events.add(2000, function () 
                {                    
                    _this.value3=_this.add.image(370, 355, 'white-box');
                    if(_this.answer>=10)
                    _this.Txt=_this.add.text(10,10, String(_this.answer));
                    else
                    _this.Txt=_this.add.text(20,10, String(_this.answer));
                    _this.Txt.align = 'right';
                    _this.Txt.font = "Akzidenz-Grotesk BQ";
                    _this.Txt.fill = '#65B4C3';
                    _this.Txt.fontWeight = 'normal';
                    _this.value3.addChild(_this.Txt);
                    _this.eraseScreen();

                    _this.AnswerBox.destroy();
                    _this.AnswerBox=_this.add.sprite(700, 355, 'white-box');
                    _this.AnswerBox.frame=1;
                    console.log(_this.AnswerBox.frame);

                    if(_this.starting===1){
                        _this.Ask_Question2.play();
                    }
                    _this.top3=_this.add.image(700, 275, 'textBox');
                    _this.Txt3=_this.add.text(18,10, "3");
                    _this.Txt3.align = 'right';
                    _this.Txt3.font = "Akzidenz-Grotesk BQ";
                    _this.Txt3.fill = '#F04C23';
                    _this.Txt3.fontWeight = 'normal';
                    _this.top3.addChild(_this.Txt3);

                    _this.matchDrag1.frame=1;
                    _this.matchDrag2.frame=0;

                    _this.completed=0;

                    if(_this.choice===0){
                          _this.answer=9;
                    }
                    else if(_this.choice===1){
                        _this.answer=6;
                    }
                    else if(_this.choice===2){
                        _this.answer=9;
                    }
                    else if(_this.choice===3){
                        _this.answer=6;
                    }
                    else if(_this.choice===4){
                        _this.answer=12;
                    }
                    else if(_this.choice===5){
                        _this.answer=15;
                    }
                    else if(_this.choice===6){
                        _this.answer=9;
                    }
                    else if(_this.choice===7){
                        _this.answer=7;
                    }
                    else if(_this.choice===8){
                        _this.answer=10;
                    }
                    else if(_this.choice===9){
                        _this.answer=16;
                    }
                    else if(_this.choice===10){
                        _this.answer=22;
                    }
                    else if(_this.choice===11){
                        _this.answer=13;
                    }
                    else if(_this.choice===12){
                        _this.answer=10;
                    }
                    else if(_this.choice===13){
                        _this.answer=7;
                    }
                    _this.stage++;

                    var r=0, s=0, t=0, u=0;
                    for(let i=0;i<3;i++){
                        if(_this.choice===0||_this.choice===12){
                            let l2=_this.add.sprite(647+98*i, 112, 'matchLine');
                            l2.frame=0;
                            l2.angle+=90;
                            let l1=_this.add.sprite(550+98*i, 115, 'matchLine');
                            l1.frame=0;
                            let l3=_this.add.sprite(647+98*i, 237, 'matchLine');
                            l3.frame=0;
                            l3.angle+=90;
                            l1.scale.setTo(0.5);
                            l2.scale.setTo(0.5,0.35);
                            l3.scale.setTo(0.5,0.35);
                            _this.pattern.addChild(l1);
                            _this.pattern.addChild(l2);
                            _this.pattern.addChild(l3);
                        }
                        if(_this.choice===1||_this.choice===7){
                            let l1=_this.add.sprite(570+97*i, 115, 'matchLine');
                            l1.frame=0;
                            let l2=_this.add.sprite(580+97*i, 243, 'matchLine');
                            l2.frame=0;
                            l2.angle+=90;
                            l1.scale.setTo(0.5);
                            l2.scale.setTo(0.5,0.35);
                            l2.anchor.setTo(1);
                            _this.pattern.addChild(l1);
                            _this.pattern.addChild(l2);
                        }
                        if(_this.choice===2){
                            let line2=_this.add.sprite(660+107*i, 132, 'matchLine');
                            line2.frame=0;
                            line2.angle+=90;
                            let line1=_this.add.sprite(655+107*i, 140, 'matchLine');
                            line1.frame=0;
                            line1.angle+=55;
                            let line3=_this.add.sprite(660+107*i, 217, 'matchLine');
                            line3.frame=0;
                            line3.angle+=90;
                            line1.scale.setTo(0.5);
                            line2.scale.setTo(0.5,0.5*0.85);
                            line3.scale.setTo(0.5,0.5*0.85);
                            _this.pattern.addChild(line1);
                            _this.pattern.addChild(line2);
                            _this.pattern.addChild(line3);
                        }
                        if(_this.choice===3){
                            let line1=_this.add.sprite(537+120*i, 140, 'matchLine');
                            line1.frame=0;
                            line1.angle-=27.5;
                            let line2=_this.add.sprite(657+120*i, 135, 'matchLine');
                            line2.frame=0;
                            line2.angle+=27.5;
                            _this.pattern.addChild(line1);
                            _this.pattern.addChild(line2);
                            line1.scale.setTo(0.5);
                            line2.scale.setTo(0.5);
                        }
                        if(_this.choice===4){
                            let l2=_this.add.sprite(656+97*i, 112, 'matchLine');
                            l2.frame=0;
                            l2.angle+=90;
                            let l1=_this.add.sprite(560+97*i, 115, 'matchLine');
                            l1.frame=0;
                            let l3=_this.add.sprite(656+97*i, 235, 'matchLine');
                            l3.frame=0;
                            l3.angle+=90;
                            let l4=_this.add.sprite(656+97*i, 175, 'matchLine');
                            l4.frame=0;
                            l4.angle+=90;
                            
                            l1.scale.setTo(0.5);
                            l2.scale.setTo(0.5,0.5*0.7);
                            l3.scale.setTo(0.5,0.5*0.7);
                            l4.scale.setTo(0.5,0.5*0.7);
                            
                            _this.pattern.addChild(l1);
                            _this.pattern.addChild(l2);
                            _this.pattern.addChild(l3);
                            _this.pattern.addChild(l4);
                        }
                        if(_this.choice===5){
                            var line2=_this.add.sprite(390+92*i+270, 115, 'matchLine');
                            line2.frame=0;
                            line2.angle+=90;
                            
                            var line4=_this.add.sprite(390+92*i+270, 175, 'matchLine');
                            line4.frame=0;
                            line4.angle+=90;
                            
                            var line1=_this.add.sprite(297+92*i+270, 120, 'matchLine');
                            line1.frame=0;
                            line1.scale.setTo(0.5*0.7, 0.25);
                            
                            var line5=_this.add.sprite(382+92*i+270, 182, 'matchLine');
                            line5.frame=0;
                            line5.scale.setTo(0.5*0.7, 0.25);
                            
                            var line3=_this.add.sprite(297+92*i+270, 241, 'matchLine');
                            line3.frame=0;
                            line3.angle+=90;
                            line3.scale.setTo(0.5*0.7, -0.5*0.7);

                            line2.scale.setTo(0.5*0.7);
                            line4.scale.setTo(0.5*0.7);
                            
                            _this.pattern.addChild(line1);
                            _this.pattern.addChild(line2);
                            _this.pattern.addChild(line3);
                            _this.pattern.addChild(line4);
                            _this.pattern.addChild(line5);
                        }
                        if(_this.choice===6||_this.choice===8){
                            let l2=_this.add.sprite(655+120*i, 115, 'matchLine');
                            l2.frame=0;
                            l2.angle+=90;
                            let l1=_this.add.sprite(536+120*i, 115, 'matchLine');
                            l1.frame=0;
                            let l4=_this.add.sprite(655+120*i, 175, 'matchLine');
                            l4.frame=0;
                            l4.angle+=90;
                            l1.scale.setTo(0.5);
                            l2.scale.setTo(0.5,0.44);
                            l4.scale.setTo(0.5,0.44);
                            _this.pattern.addChild(l1);
                            _this.pattern.addChild(l2);
                            _this.pattern.addChild(l4);
                        }
                        if(_this.choice===7 && i===2){
                            let l3=_this.add.sprite(619+120*i, 115, 'matchLine');
                            l3.frame=0;
                            l3.scale.setTo(0.5);
                            _this.pattern.addChild(l3);
                        }
                        if(_this.choice===12 && i===2){
                            let l3=_this.add.sprite(602+120*i, 115, 'matchLine');
                            l3.frame=0;
                            l3.scale.setTo(0.5);
                            _this.pattern.addChild(l3);
                        }
                        if(_this.choice===9){
                            let line1=_this.add.sprite(128+120*i+410, 155, 'matchLine');
                            line1.frame=0;
                            line1.scale.setTo(0.5, 0.3);
                            if(i===2){
                                var line2=_this.add.sprite(248+120*i+410, 155, 'matchLine');
                                line2.frame=0;
                                line2.scale.setTo(0.5, 0.3);
                                _this.pattern.addChild(line2);
                            }
                            let line3=_this.add.sprite(250+120*i+410, 225, 'matchLine');
                            line3.frame=0;
                            line3.angle+=90;
                            line3.scale.setTo(0.5,0.47);
                            let line4=_this.add.sprite(190+120*i+410, 115, 'matchLine');
                            line4.frame=0;
                            line4.angle+=60;
                            line4.scale.setTo(0.5, 0.28);
                            let line5=_this.add.sprite(189+120*i+410, 124, 'matchLine');
                            line5.frame=0;
                            line5.angle-=60;
                            let l4=_this.add.sprite(660+120*i, 155, 'matchLine');
                            l4.frame=0;
                            l4.angle+=90;
                            l4.scale.setTo(0.5,0.45);
                            line5.scale.setTo(0.5, 0.28);
                            _this.pattern.addChild(line3);
                            _this.pattern.addChild(line4);
                            _this.pattern.addChild(l4);
                            _this.pattern.addChild(line5);
                            _this.pattern.addChild(line1);
                        }
                        if(_this.choice===10){
                            var line2=_this.add.sprite(212+105*i+150+280, 130, 'matchLine');
                            line2.frame=0;
                            line2.angle+=90;
                            var line1=_this.add.sprite(140+105*i+150+280, 164, 'matchLine');
                            line1.frame=0;
                            var line3=_this.add.sprite(213+105*i+150+280, 233, 'matchLine');
                            line3.frame=0;
                            line3.angle+=90;
                            if(i===2){
                                var line4=_this.add.sprite(245+105*i+150+280, 166, 'matchLine');
                                line4.frame=0;
                                line4.scale.setTo(1/6,0.14);
                                _this.pattern.addChild(line4);
                            }
                            var line5=_this.add.sprite(175+105*i+150+280, 127, 'matchLine');
                            line5.frame=0;
                            line5.angle+=45;
                            line5.scale.setTo(0.2);
                            var line6=_this.add.sprite(212+105*i+150+280, 132, 'matchLine');
                            line6.frame=0;
                            line6.angle-=45;
                            line6.scale.setTo(0.2);

                            var line7=_this.add.sprite(247+105*i+150+280, 200, 'matchLine');
                            line7.frame=0;
                            line7.angle+=45;
                            line7.scale.setTo(0.2);
                            var line8=_this.add.sprite(140+105*i+150+280, 203, 'matchLine');
                            line8.frame=0;
                            line8.angle-=45;
                            line8.scale.setTo(0.2);

                            _this.pattern.addChild(line1);
                            _this.pattern.addChild(line2);
                            _this.pattern.addChild(line3);
                            _this.pattern.addChild(line5);
                            _this.pattern.addChild(line6);
                            _this.pattern.addChild(line7);
                            _this.pattern.addChild(line8);

                            line1.scale.setTo(1/6,0.14);
                            line2.scale.setTo(1/6,0.14);
                            line3.scale.setTo(1/6,0.14);
                        }
                        if(_this.choice===11){
                            let line1=_this.add.sprite(128+120*i+410, 155, 'matchLine');
                            line1.frame=0;
                            line1.scale.setTo(0.5, 0.3);
                            if(i===2){
                                var line2=_this.add.sprite(248+120*i+410, 155, 'matchLine');
                                line2.frame=0;
                                line2.scale.setTo(0.5, 0.3);
                                _this.pattern.addChild(line2);
                            }
                            let line3=_this.add.sprite(251+120*i+410, 225, 'matchLine');
                            line3.frame=0;
                            line3.angle+=90;
                            line3.scale.setTo(0.5,0.46);
                            let line4=_this.add.sprite(188+120*i+410, 120, 'matchLine');
                            line4.frame=0;
                            line4.angle+=60;
                            line4.scale.setTo(0.5, 0.25);
                            let line5=_this.add.sprite(188+120*i+410, 128, 'matchLine');
                            line5.frame=0;
                            line5.angle-=60;
                            line5.scale.setTo(0.5, 0.28);
                            _this.pattern.addChild(line1);
                            _this.pattern.addChild(line3);
                            _this.pattern.addChild(line4);
                            _this.pattern.addChild(line5);
                        }
                        if(_this.choice===13){
                            if(i===0){
                                var line1=_this.add.sprite(195+140+20+260+50, 130, 'matchLine');
                                line1.frame=0;
                                line1.angle+=30;
                                line1.scale.setTo(0.5,0.44);
                                _this.pattern.addChild(line1);
                            }
                            
                            if((i+1)%2===0){
                                var line2=_this.add.sprite(192+140+120*(t++)+20+380+50, 128, 'matchLine');
                                line2.frame=0;
                                line2.angle+=90;

                                var line4=_this.add.sprite(195+140+20+260+120*(++r)+50, 130, 'matchLine');
                                line4.frame=0;
                                line4.angle+=30;
                                line4.scale.setTo(0.5,0.44);
                                _this.pattern.addChild(line4);
                            }
                            else{
                                var line2=_this.add.sprite(253+140+120*(u++)+20+260+50, 225, 'matchLine');
                                line2.frame=0;
                                line2.angle+=90;

                                var line3=_this.add.sprite(264+140+120*(s++)+20+260+50, 227, 'matchLine');
                                line3.frame=0;
                                line3.angle+=150;
                                line3.scale.setTo(0.5,0.44);
                                _this.pattern.addChild(line3);
                            }
                            line2.scale.setTo(0.5,0.42);
                            _this.pattern.addChild(line2);
                        }
                        if(_this.choice===8&&i===2){
                            let line3=_this.add.sprite(665+120*i, 240, 'matchLine');
                            line3.frame=0;
                            line3.angle+=180;
                            line3.scale.setTo(0.5);
                            _this.pattern.addChild(line3);
                        }
                    }

                    _this.matchDrag.frame=1;
                    _this.matchDrag.inputEnabled=true;
                    _this.matchDrag.input.useHandCursor=true;
                    //_this.matchDrag.input.enableDrag(true);
                    // _this.matchDrag.events.onInputDown.add(function(){
                    //     _this.clickSound.play();
                    // });
                    _this.matchDrag.events.onInputDown.add(function(){
                            _this.clickSound.play();
                            if(target.x>=0){
                                for(let i=0;i<_this.pattern.length;i++){
                                    if(_this.pattern.getChildAt(i).frame===0){
                                        _this.pattern.getChildAt(i).frame=1;
                                        _this.completed++;
                                        break;
                                    }
                                }
                            }
                            target.x=60;
                            target.y=160;
                        }, _this.matchDrag);
                });
            }


            else if(_this.stage===2){
                _this.time.events.add(2000, function () 
                {                    
                    _this.value2=_this.add.image(700, 355, 'white-box');
                    _this.AnswerBox.visible=false;
                    _this.numGroup.destroy();
                    if(_this.answer>=10)
                    _this.Txt=_this.add.text(10,10, String(_this.answer));
                    else
                    _this.Txt=_this.add.text(20,10, String(_this.answer));
                    _this.Txt.align = 'right';
                    _this.Txt.font = "Akzidenz-Grotesk BQ";
                    _this.Txt.fill = '#65B4C3';
                    _this.Txt.fontWeight = 'normal';
                    _this.value2.addChild(_this.Txt);
                    _this.eraseScreen();
                    _this.blue=_this.add.image(50, 420, 'Blue');
                    _this.option1=_this.add.sprite(100, 440, 'Text box_1');
                    _this.option2=_this.add.sprite(340, 440, 'Text box_1');
                    _this.option3=_this.add.sprite(580, 440, 'Text box_1');

                    _this.option1.inputEnabled=true;
                    _this.option2.inputEnabled=true;
                    _this.option3.inputEnabled=true;

                    _this.Question_flag=3;
                    if(_this.starting===1)
                        _this.Ask_Question4.play();

                    _this.option1.events.onInputDown.add(function(){
                        _this.clickSound.play();
                        _this.option1.frame=1;
                        _this.option2.frame=0;
                        _this.option3.frame=0;
                    });

                    _this.option2.events.onInputDown.add(function(){
                        _this.clickSound.play();
                        _this.option1.frame=0;
                        _this.option2.frame=1;
                        _this.option3.frame=0;
                    });

                    _this.option3.events.onInputDown.add(function(){
                        _this.clickSound.play();
                        _this.option1.frame=0;
                        _this.option2.frame=0;
                        _this.option3.frame=1;
                    });

                    _this.tick=_this.add.sprite(780, 445, 'TickBtn');
                    _this.tick.inputEnabled=true;
                    _this.stage++;
                    _this.tick.events.onInputDown.add(function(target){
                        target.frame=1;
                        _this.clickSound.play(); 
                        if(_this.option1.frame===1&&num==0||_this.option2.frame===1&&num==1||_this.option3.frame===1&&num==2){
                            _this.clickSound.play();
                            _this.counterCelebrationSound.play();
                            _this.tick.inputEnabled=false;
                            _this.time.events.add(2000, function () 
                            {
                                _this.blue.destroy();
                                _this.tick.destroy();
                                _this.option1.destroy();
                                _this.option2.destroy();
                                _this.option3.destroy();
                                _this.pattern.destroy();
                                _this.top1.destroy();
                                _this.top2.destroy();
                                _this.top3.destroy();
                                _this.value1.destroy();
                                _this.value2.destroy();
                                _this.value3.destroy();
                                _this.n.destroy();
                                _this.matchDrag1.destroy();
                                _this.matchDrag2.destroy();
                                _this.column.destroy();
                                _this.matchDrag.destroy();
                                _this.AnswerBox.destroy();

                                _this.Question_flag=4;
                                if(_this.starting===1)
                                    _this.Ask_Question5.play();

                                _this.column=_this.add.image(50, 100, 'column2');
                                _this.matchDrag1=_this.add.image(60, 160, 'match1');
                                _this.matchDrag2=_this.add.image(60, 355, 'match1');
                                _this.n=_this.add.image(60, 275, 'textBox');
                                _this.Txt=_this.add.text(18,10, "n");;
                                _this.Txt.align = 'right';
                                _this.Txt.font = "Akzidenz-Grotesk BQ";
                                _this.Txt.fill = '#F04C23';
                                _this.Txt.fontWeight = 'normal';
                                _this.n.addChild(_this.Txt);
                                _this.addNumberPad();
                                _this.AnswerBox.destroy();
                                _this.AnswerBox=_this.add.sprite(520, 275, 'white-box');
                                _this.AnswerBox.frame=1;
                                console.log(_this.AnswerBox.frame);
                                _this.completed=0;

                                _this.top1=_this.add.image(150, 275, 'textBox');
                                _this.Txt1=_this.add.text(18,10, "1");;
                                _this.Txt1.align = 'right';
                                _this.Txt1.font = "Akzidenz-Grotesk BQ";
                                _this.Txt1.fill = '#F04C23';
                                _this.Txt1.fontWeight = 'normal';
                                _this.top1.addChild(_this.Txt1);

                                _this.value1=_this.add.image(150, 355, 'textBox');
                                _this.Txt2=_this.add.text(18,10, String(_this.current));
                                _this.Txt2.align = 'right';
                                _this.Txt2.font = "Akzidenz-Grotesk BQ";
                                _this.Txt2.fill = '#F04C23';
                                _this.Txt2.fontWeight = 'normal';
                                _this.value1.addChild(_this.Txt2);

                                _this.matchDrag1.frame=1;
                                _this.matchDrag2.frame=0;

                                _this.pattern =_this.add.group();
                                _this.completed=0;
                                

                                if(_this.choice===0){
                                    let line2=_this.add.sprite(210, 141, 'matchLine');
                                    line2.frame=1;
                                    line2.angle+=90;
                                    let line1=_this.add.sprite(145, 145, 'matchLine');
                                    line1.frame=1;
                                    let line3=_this.add.sprite(210, 215, 'matchLine');
                                    line3.frame=1;
                                    line3.angle+=90;
                                    _this.pattern.addChild(line1);
                                    _this.pattern.addChild(line2);
                                    _this.pattern.addChild(line3);
                                    line1.scale.setTo(0.3);
                                    line2.scale.setTo(0.3,0.24);
                                    line3.scale.setTo(0.3,0.24);
                                }
                                else if(_this.choice===1){
                                    let line1=_this.add.sprite(142, 145, 'matchLine');
                                    line1.frame=1;
                                    let line2=_this.add.sprite(150, 221, 'matchLine');
                                    line2.frame=1;
                                    line2.angle+=90;
                                    line2.anchor.setTo(1);
                                    line1.scale.setTo(0.3);
                                    line2.scale.setTo(0.3,0.2);
                                    _this.pattern.addChild(line1);
                                    _this.pattern.addChild(line2);
                                }
                                else if(_this.choice===2){
                                    let line2=_this.add.sprite(210, 155, 'matchLine');
                                    line2.frame=1;
                                    line2.angle+=90;
                                    let line1=_this.add.sprite(207, 160, 'matchLine');
                                    line1.frame=1;
                                    line1.angle+=55;
                                    let line3=_this.add.sprite(210, 205, 'matchLine');
                                    line3.frame=1;
                                    line3.angle+=90;
                                    line1.scale.setTo(0.3);
                                    line2.scale.setTo(0.3,0.3*0.85);
                                    line3.scale.setTo(0.3,0.3*0.85);
                                    _this.pattern.addChild(line1);
                                    _this.pattern.addChild(line2);
                                    _this.pattern.addChild(line3);
                                }
                                else if(_this.choice===3){
                                    let line1 = _this.add.sprite(131, 160, 'matchLine');
                                    line1.frame = 1;
                                    line1.angle -= 29;
                                    let line2 = _this.add.sprite(206, 157, 'matchLine');
                                    line2.frame = 1;
                                    line2.angle += 29;
                                    _this.pattern.addChild(line1);
                                    _this.pattern.addChild(line2);
                                    line1.scale.setTo(0.3);
                                    line2.scale.setTo(0.3);
                                }
                                else if(_this.choice===4){
                                    let line2=_this.add.sprite(208, 141, 'matchLine');
                                    line2.frame=1;
                                    line2.angle+=90;
                                    let line1=_this.add.sprite(150, 145, 'matchLine');
                                    line1.frame=1;
                                    let line3=_this.add.sprite(208, 218, 'matchLine');
                                    line3.frame=1;
                                    line3.angle+=90;
                                    let line4=_this.add.sprite(208, 180, 'matchLine');
                                    line4.frame=1;
                                    line4.angle+=90;
                                    
                                    _this.pattern.addChild(line1);
                                    _this.pattern.addChild(line2);
                                    _this.pattern.addChild(line3);
                                    _this.pattern.addChild(line4);
                                    
                                    line1.scale.setTo(0.3);
                                    line2.scale.setTo(0.3,0.3*0.7);
                                    line3.scale.setTo(0.3,0.3*0.7);
                                    line4.scale.setTo(0.3,0.3*0.7);
                                }
                                else if(_this.choice===5){
                                    var line2=_this.add.sprite(215, 142, 'matchLine');
                                    line2.frame=1;
                                    line2.angle+=90;
                                    
                                    var line4=_this.add.sprite(215, 180, 'matchLine');
                                    line4.frame=1;
                                    line4.angle+=90;
                                    
                                    var line1=_this.add.sprite(135, 148, 'matchLine');
                                    line1.frame=1;
                                    line1.scale.setTo(0.3, 0.15);
                                    
                                    var line5=_this.add.sprite(208, 187, 'matchLine');
                                    line5.frame=1;
                                    line5.scale.setTo(0.3, 0.15);
                                    
                                    var line3=_this.add.sprite(136, 222, 'matchLine');
                                    line3.frame=1;
                                    line3.angle+=90;
                                    line3.scale.setTo(0.3, -0.3);

                                    line2.scale.setTo(0.3);
                                    line4.scale.setTo(0.3);
                                    
                                    _this.pattern.addChild(line1);
                                    _this.pattern.addChild(line2);
                                    _this.pattern.addChild(line3);
                                    _this.pattern.addChild(line4);
                                    _this.pattern.addChild(line5);
                                }
                                else if(_this.choice===6){
                                    let line2=_this.add.sprite(210, 145, 'matchLine');
                                    line2.frame=1;
                                    line2.angle+=90;
                                    let line1=_this.add.sprite(140, 145, 'matchLine');
                                    line1.frame=1;
                                    let line4=_this.add.sprite(210, 180, 'matchLine');
                                    line4.frame=1;
                                    line4.angle+=90;
                                    _this.pattern.addChild(line1);
                                    _this.pattern.addChild(line2);
                                    _this.pattern.addChild(line4);
                                    line1.scale.setTo(0.3);
                                    line2.scale.setTo(0.3,0.26);
                                    line4.scale.setTo(0.3,0.26);
                                }
                                else if(_this.choice===7){
                                    let line1=_this.add.sprite(140, 145, 'matchLine');
                                    line1.frame=1;
                                    let line2=_this.add.sprite(200, 215, 'matchLine');
                                    line2.frame=1;
                                    line2.angle+=90;
                                    let line3=_this.add.sprite(200, 145, 'matchLine');
                                    line3.frame=1;
                                    _this.pattern.addChild(line1);
                                    _this.pattern.addChild(line2);
                                    _this.pattern.addChild(line3);
                                    line1.scale.setTo(0.3);
                                    line2.scale.setTo(0.3,0.22);
                                    line3.scale.setTo(0.3);
                                }
                                else if(_this.choice===8){
                                    let line2=_this.add.sprite(214, 145, 'matchLine');
                                    line2.frame=1;
                                    line2.angle+=90;
                                    let line1=_this.add.sprite(140, 145, 'matchLine');
                                    line1.frame=1;
                                    let line3=_this.add.sprite(220, 220, 'matchLine');
                                    line3.frame=1;
                                    line3.angle+=180;
                                    let line4=_this.add.sprite(214, 180, 'matchLine');
                                    line4.frame=1;
                                    line4.angle+=90;
                                    _this.pattern.addChild(line1);
                                    _this.pattern.addChild(line2);
                                    _this.pattern.addChild(line3);
                                    _this.pattern.addChild(line4);
                                    line1.scale.setTo(0.3);
                                    line2.scale.setTo(0.3,0.27);
                                    line3.scale.setTo(0.3);
                                    line4.scale.setTo(0.3,0.27);
                                }
                                else if(_this.choice===9){
                                    var line1=_this.add.sprite(138, 165, 'matchLine');
                                    line1.frame=1;
                                    line1.scale.setTo(0.3, 0.18);
                                    var line2=_this.add.sprite(210, 165, 'matchLine');
                                    line2.frame=1;
                                    line2.scale.setTo(0.3, 0.18);
                                    var line3=_this.add.sprite(210, 205, 'matchLine');
                                    line3.frame=1;
                                    line3.angle+=90;
                                    line3.scale.setTo(0.3,0.27);
                                    var line4=_this.add.sprite(174, 140, 'matchLine');
                                    line4.frame=1;
                                    line4.angle+=60;
                                    line4.scale.setTo(0.3, 0.17);
                                    var line5=_this.add.sprite(174, 145, 'matchLine');
                                    line5.frame=1;
                                    line5.angle-=60;
                                    line5.scale.setTo(0.3, 0.17);
                                    let line6=_this.add.sprite(210, 165, 'matchLine');
                                    line6.frame=1;
                                    line6.angle+=90;
                                    line6.scale.setTo(0.3,0.27);
                                    _this.pattern.addChild(line2);
                                    _this.pattern.addChild(line3);
                                    _this.pattern.addChild(line4);
                                    _this.pattern.addChild(line5);
                                    _this.pattern.addChild(line6);
                                    _this.pattern.addChild(line1);
                                }
                                else if(_this.choice===10){
                                    var line2=_this.add.sprite(195, 120, 'matchLine');
                                    line2.frame=1;
                                    line2.angle+=90;
                                    var line1=_this.add.sprite(123, 155, 'matchLine');
                                    line1.frame=1;
                                    var line3=_this.add.sprite(195, 223, 'matchLine');
                                    line3.frame=1;
                                    line3.angle+=90;
                                    var line4=_this.add.sprite(228, 155, 'matchLine');
                                    line4.frame=1;

                                    var line5=_this.add.sprite(158, 117, 'matchLine');
                                    line5.frame=1;
                                    line5.angle+=45;
                                    line5.scale.setTo(0.2);
                                    var line6=_this.add.sprite(195, 122, 'matchLine');
                                    line6.frame=1;
                                    line6.angle-=45;
                                    line6.scale.setTo(0.2);

                                    var line7=_this.add.sprite(230, 190, 'matchLine');
                                    line7.frame=1;
                                    line7.angle+=45;
                                    line7.scale.setTo(0.2);
                                    var line8=_this.add.sprite(123, 193, 'matchLine');
                                    line8.frame=1;
                                    line8.angle-=45;
                                    line8.scale.setTo(0.2);

                                    _this.pattern.addChild(line1);
                                    _this.pattern.addChild(line2);
                                    _this.pattern.addChild(line3);
                                    _this.pattern.addChild(line4);
                                    _this.pattern.addChild(line5);
                                    _this.pattern.addChild(line6);
                                    _this.pattern.addChild(line7);
                                    _this.pattern.addChild(line8);

                                    line1.scale.setTo(1/6,0.14);
                                    line2.scale.setTo(1/6,0.14);
                                    line3.scale.setTo(1/6,0.14);
                                    line4.scale.setTo(1/6,0.14);
                                }
                                else if(_this.choice===11){
                                    var line1=_this.add.sprite(138, 165, 'matchLine');
                                    line1.frame=1;
                                    line1.scale.setTo(0.3, 0.18);
                                    
                                    var line2=_this.add.sprite(210, 165, 'matchLine');
                                    line2.frame=1;
                                    line2.scale.setTo(0.3, 0.18);
                                    var line3=_this.add.sprite(211, 205, 'matchLine');
                                    line3.frame=1;
                                    line3.angle+=90;
                                    line3.scale.setTo(0.3,0.27);
                                    var line4=_this.add.sprite(174, 141, 'matchLine');
                                    line4.frame=1;
                                    line4.angle+=60;
                                    line4.scale.setTo(0.3, 0.16);
                                    var line5=_this.add.sprite(174, 147, 'matchLine');
                                    line5.frame=1;
                                    line5.angle-=60;
                                    line5.scale.setTo(0.3, 0.17);
                                    _this.pattern.addChild(line1);
                                    _this.pattern.addChild(line2);
                                    _this.pattern.addChild(line3);
                                    _this.pattern.addChild(line4);
                                    _this.pattern.addChild(line5);
                                }
                                else if(_this.choice===12){
                                    let line2=_this.add.sprite(204, 141, 'matchLine');
                                    line2.frame=1;
                                    line2.angle+=90;
                                    let line1=_this.add.sprite(140, 145, 'matchLine');
                                    line1.frame=1;
                                    let line3=_this.add.sprite(203, 215, 'matchLine');
                                    line3.frame=1;
                                    line3.angle+=90;
                                    let line4=_this.add.sprite(203, 145, 'matchLine');
                                    line4.frame=1;
                                    _this.pattern.addChild(line1);
                                    _this.pattern.addChild(line2);
                                    _this.pattern.addChild(line3);
                                    _this.pattern.addChild(line4);
                                    line1.scale.setTo(0.3);
                                    line2.scale.setTo(0.3,0.23);
                                    line3.scale.setTo(0.3,0.23);
                                    line4.scale.setTo(0.3);
                                }
                                else if(_this.choice===13){
                                    var line3=_this.add.sprite(213+5, 214, 'matchLine');
                                    line3.frame=1;
                                    line3.angle+=180-30;
                                    var line1=_this.add.sprite(168+5, 153, 'matchLine');
                                    line1.frame=1;
                                    line1.angle+=30;
                                    var line2=_this.add.sprite(205+5, 212, 'matchLine');
                                    line2.frame=1;
                                    line2.angle+=90;

                                    line1.scale.setTo(0.3,0.27);
                                    line2.scale.setTo(0.3,0.27);
                                    line3.scale.setTo(0.3,0.29);
                                    _this.pattern.addChild(line1);
                                    _this.pattern.addChild(line2);
                                    _this.pattern.addChild(line3);
                                }

                                _this.matchDrag=_this.add.image(60, 160, 'match1');

                                if(_this.choice!==10)
                                _this.answer= Math.floor(5*Math.random())+4;
                                //Math.floor(5*Math.random())+4;
                                //_this.answer = 8;
                                else    
                                _this.answer=Math.floor(3*Math.random())+4;
                                var r=0, s=0, t=0, u=0, j=0;
                                for(let i=0;i<_this.answer;i++){
                                    if(_this.choice===0||_this.choice===12){
                                        // let l2=_this.add.sprite(287+50*i, 148, 'matchLine');
                                        // l2.frame=0;
                                        // l2.angle+=90;
                                        // l2.anchor.setTo(1);
                                        // let l1=_this.add.sprite(280+50*i, 145, 'matchLine');
                                        // l1.frame=0;
                                        // let l3=_this.add.sprite(287+50*i, 222, 'matchLine');
                                        // l3.frame=0;
                                        // l3.angle+=90;
                                        // l3.anchor.setTo(1);
                                        
                                        // l1.scale.setTo(0.3);
                                        // l2.scale.setTo(0.3,0.18);
                                        // l3.scale.setTo(0.3,0.18);
                                        // _this.pattern.addChild(l1);
                                        // _this.pattern.addChild(l2);
                                        // _this.pattern.addChild(l3);
                                        
                                        let l2=_this.add.sprite(286+50*(i+j), 148, 'matchLine');
                                        l2.frame=0;
                                        l2.angle+=90;
                                        l2.anchor.setTo(1);
                                        let l1=_this.add.sprite(280+50*(i+j), 145, 'matchLine');
                                        l1.frame=0;
                                        let l3=_this.add.sprite(286+50*(i+j), 222, 'matchLine');
                                        l3.frame=0;
                                        l3.angle+=90;
                                        l3.anchor.setTo(1);
                                        
                                        l1.scale.setTo(0.3);
                                        l2.scale.setTo(0.3,0.24);
                                        l3.scale.setTo(0.3,0.24);
                                        j+=0.3
                                        _this.pattern.addChild(l1);
                                        _this.pattern.addChild(l2);
                                        _this.pattern.addChild(l3);
                                    }
                                    if(_this.choice===1||_this.choice===7){
                                        let l1=_this.add.sprite(280+60*i, 145, 'matchLine');
                                        l1.frame=0;
                                        let l2=_this.add.sprite(286+60*i, 221, 'matchLine');
                                        l2.frame=0;
                                        l2.angle+=90;
                                        l1.scale.setTo(0.3);
                                        l2.scale.setTo(0.3,0.22);
                                        l2.anchor.setTo(1);                                    
                                        _this.pattern.addChild(l1);
                                        _this.pattern.addChild(l2);
                                    }
                                    if(_this.choice===2){
                                        let line2=_this.add.sprite(330+64*i, 155, 'matchLine');
                                        line2.frame=0;
                                        line2.angle+=90;
                                        let line1=_this.add.sprite(327+64*i, 160, 'matchLine');
                                        line1.frame=0;
                                        line1.angle+=55;
                                        let line3=_this.add.sprite(330+64*i, 205, 'matchLine');
                                        line3.frame=0;
                                        line3.angle+=90;
                                        line1.scale.setTo(0.3);
                                        line2.scale.setTo(0.3,0.3*0.85);
                                        line3.scale.setTo(0.3,0.3*0.85);
                                        _this.pattern.addChild(line1);
                                        _this.pattern.addChild(line2);
                                        _this.pattern.addChild(line3);
                                    }
                                    if(_this.choice===3){
                                        let line1=_this.add.sprite(271+i*75, 160, 'matchLine');
                                        line1.frame=0;
                                        line1.angle-=29;
                                        let line2=_this.add.sprite(346+i*75, 157, 'matchLine');
                                        line2.frame=0;
                                        line2.angle+=29;
                                        _this.pattern.addChild(line1);
                                        _this.pattern.addChild(line2);
                                        line1.scale.setTo(0.3);
                                        line2.scale.setTo(0.3);
                                    }
                                    if(_this.choice===4){
                                        let l2=_this.add.sprite(348+58*i, 141, 'matchLine');
                                        l2.frame=0;
                                        l2.angle+=90;
                                        let l1=_this.add.sprite(290+58*i, 145, 'matchLine');
                                        l1.frame=0;
                                        let l3=_this.add.sprite(348+58*i, 218, 'matchLine');
                                        l3.frame=0;
                                        l3.angle+=90;
                                        let l4=_this.add.sprite(348+58*i, 180, 'matchLine');
                                        l4.frame=0;
                                        l4.angle+=90;
                                        l1.scale.setTo(0.3);
                                        l2.scale.setTo(0.3,0.7*0.3);
                                        l3.scale.setTo(0.3,0.7*0.3);
                                        l4.scale.setTo(0.3,0.7*0.3);
                                        _this.pattern.addChild(l1);
                                        _this.pattern.addChild(l2);
                                        _this.pattern.addChild(l3);
                                        _this.pattern.addChild(l4);
                                    }
                                    if(_this.choice===5){
                                        var line2=_this.add.sprite(215+80*i+122, 142, 'matchLine');
                                        line2.frame=0;
                                        line2.angle+=90;
                                        
                                        var line4=_this.add.sprite(215+80*i+122, 180, 'matchLine');
                                        line4.frame=0;
                                        line4.angle+=90;
                                        
                                        var line1=_this.add.sprite(135+80*i+122, 148, 'matchLine');
                                        line1.frame=0;
                                        line1.scale.setTo(0.3, 0.15);
                                        
                                        var line5=_this.add.sprite(208+80*i+122, 187, 'matchLine');
                                        line5.frame=0;
                                        line5.scale.setTo(0.3, 0.15);
                                        
                                        var line3=_this.add.sprite(136+80*i+122, 222, 'matchLine');
                                        line3.frame=0;
                                        line3.angle+=90;
                                        line3.scale.setTo(0.3, -0.3);

                                        line2.scale.setTo(0.3);
                                        line4.scale.setTo(0.3);
                                        
                                        _this.pattern.addChild(line1);
                                        _this.pattern.addChild(line2);
                                        _this.pattern.addChild(line3);
                                        _this.pattern.addChild(line4);
                                        _this.pattern.addChild(line5);
                                    }
                                    if(_this.choice===6||_this.choice===8){
                                        let l2=_this.add.sprite(350+70*i, 145, 'matchLine');
                                        l2.frame=0;
                                        l2.angle+=90;
                                        let l1=_this.add.sprite(280+70*i, 145, 'matchLine');
                                        l1.frame=0;
                                        let l4=_this.add.sprite(350+70*i, 180, 'matchLine');
                                        l4.frame=0;
                                        l4.angle+=90;
                                        l1.scale.setTo(0.3);
                                        l2.scale.setTo(0.3,0.26);
                                        l4.scale.setTo(0.3,0.26);
                                        _this.pattern.addChild(l1);
                                        _this.pattern.addChild(l2);
                                        _this.pattern.addChild(l4);
                                    }
                                    if(_this.choice===7 && i===_this.answer-1)
                                    {
                                        let l3=_this.add.sprite(280+60*(i+1), 145, 'matchLine');
                                        l3.frame=0;
                                        l3.scale.setTo(0.3);
                                        _this.pattern.addChild(l3);
                                        console.log(l3.x, l3.y, "x,y, 7777")
                                    }
                                    if(_this.choice===12 && i===_this.answer-1){
                                       // let l3=_this.add.sprite(230+70*i, 145, 'matchLine');
                                        // let l3=_this.add.sprite(280+50*(i+1), 145, 'matchLine');
                                        // l3.frame=0;
                                        // l3.scale.setTo(0.3);
                                        // _this.pattern.addChild(l3);
                                        // console.log(l3.x, l3.y, "x,y")
                                           // let l3=_this.add.sprite(230+70*i, 145, 'matchLine');
                                        let l3=_this.add.sprite( 280+50*(i+j+1), 145, 'matchLine');
                                        l3.frame=0;
                                        l3.scale.setTo(0.3);
                                        _this.pattern.addChild(l3);
                                        console.log(l3.x, l3.y, "x,y")
                                       
                                    }
                                    if(_this.choice===9){
                                        var line1=_this.add.sprite(138+140+70*i, 165, 'matchLine');
                                        line1.frame=0;
                                        line1.scale.setTo(0.3, 0.18);
                                        if(i===_this.answer-1){
                                            var line2=_this.add.sprite(210+140+70*i, 165, 'matchLine');
                                            line2.frame=0;
                                            line2.scale.setTo(0.3, 0.18);
                                            _this.pattern.addChild(line2);
                                        }
                                        var line3=_this.add.sprite(210+140+70*i, 205, 'matchLine');
                                        line3.frame=0;
                                        line3.angle+=90;
                                        line3.scale.setTo(0.3,0.27);
                                        var line4=_this.add.sprite(174+140+70*i, 140, 'matchLine');
                                        line4.frame=0;
                                        line4.angle+=60;
                                        line4.scale.setTo(0.3, 0.17);
                                        var line5=_this.add.sprite(174+140+70*i, 145, 'matchLine');
                                        line5.frame=0;
                                        line5.angle-=60;
                                        line5.scale.setTo(0.3, 0.17);
                                        let l4=_this.add.sprite(349+70*i, 165, 'matchLine');
                                        l4.frame=0;
                                        l4.angle+=90;
                                        l4.scale.setTo(0.3,0.27);
                                        _this.pattern.addChild(line3);
                                        _this.pattern.addChild(line4);
                                        _this.pattern.addChild(l4);
                                        _this.pattern.addChild(line5);
                                        _this.pattern.addChild(line1);
                                    }
                                    if(_this.choice===10){
                                        var line2=_this.add.sprite(197+105*i+130, 120, 'matchLine');
                                        line2.frame=0;
                                        line2.angle+=90;
                                        var line1=_this.add.sprite(125+105*i+130, 155, 'matchLine');
                                        line1.frame=0;
                                        var line3=_this.add.sprite(198+105*i+130, 223, 'matchLine');
                                        line3.frame=0;
                                        line3.angle+=90;
                                        if(i===_this.answer-1){
                                            var line4=_this.add.sprite(230+105*i+130, 155, 'matchLine');
                                            line4.frame=0;
                                            _this.pattern.addChild(line4);
                                            line4.scale.setTo(1/6,0.14);
                                        }
                                        var line5=_this.add.sprite(160+105*i+130, 117, 'matchLine');
                                        line5.frame=0;
                                        line5.angle+=45;
                                        line5.scale.setTo(0.2);
                                        var line6=_this.add.sprite(197+105*i+130, 122, 'matchLine');
                                        line6.frame=0;
                                        line6.angle-=45;
                                        line6.scale.setTo(0.2);
    
                                        var line7=_this.add.sprite(232+105*i+130, 190, 'matchLine');
                                        line7.frame=0;
                                        line7.angle+=45;
                                        line7.scale.setTo(0.2);
                                        var line8=_this.add.sprite(125+105*i+130, 193, 'matchLine');
                                        line8.frame=0;
                                        line8.angle-=45;
                                        line8.scale.setTo(0.2);
    
                                        _this.pattern.addChild(line1);
                                        _this.pattern.addChild(line2);
                                        _this.pattern.addChild(line3);
                                        _this.pattern.addChild(line5);
                                        _this.pattern.addChild(line6);
                                        _this.pattern.addChild(line7);
                                        _this.pattern.addChild(line8);
    
                                        line1.scale.setTo(1/6,0.14);
                                        line2.scale.setTo(1/6,0.14);
                                        line3.scale.setTo(1/6),0.14;
                                    }
                                    if(_this.choice===11){
                                        var line1=_this.add.sprite(138+140+70*i, 165, 'matchLine');
                                        line1.frame=0;
                                        line1.scale.setTo(0.3, 0.18);
                                        if(i===_this.answer-1){
                                            var line2=_this.add.sprite(210+140+70*i, 165, 'matchLine');
                                            line2.frame=0;
                                            line2.scale.setTo(0.3, 0.18);
                                            _this.pattern.addChild(line2);
                                        }
                                        var line3=_this.add.sprite(210+140+70*i, 205, 'matchLine');
                                        line3.frame=0;
                                        line3.angle+=90;
                                        line3.scale.setTo(0.3,0.27);
                                        var line4=_this.add.sprite(175+140+70*i, 142, 'matchLine');
                                        line4.frame=0;
                                        line4.angle+=60;
                                        line4.scale.setTo(0.3, 0.16);
                                        var line5=_this.add.sprite(174+140+70*i, 147, 'matchLine');
                                        line5.frame=0;
                                        line5.angle-=60;
                                        line5.scale.setTo(0.3, 0.17);
                                        _this.pattern.addChild(line1);
                                        _this.pattern.addChild(line3);
                                        _this.pattern.addChild(line4);
                                        _this.pattern.addChild(line5);
                                    }
                                    if(_this.choice===13){
                                        if(i===0){
                                            let line4=_this.add.sprite(404, 153, 'matchLine');
                                            line4.frame=0;
                                            line4.angle+=30;
                                            line4.scale.setTo(0.3,0.28);
                                            _this.pattern.addChild(line4);
                                        }

                                        if((i+1)%2===0){
                                            let line1=_this.add.sprite(204+70*(++r)+200, 154, 'matchLine');
                                            line1.frame=0;
                                            line1.angle+=30;

                                            let line2=_this.add.sprite(247+70*(s++)+230, 151, 'matchLine');
                                            line2.frame=0;
                                            line2.angle+=90;

                                            line1.scale.setTo(0.3,0.26);
                                            line2.scale.setTo(0.28);

                                            _this.pattern.addChild(line1);
                                            _this.pattern.addChild(line2);
                                        }
                                        else{
                                            let line3=_this.add.sprite(247+70*(t++)+200, 214, 'matchLine');
                                            line3.frame=0;
                                            line3.angle+=150;

                                            let line2=_this.add.sprite(244+70*(u++)+200, 215, 'matchLine');
                                            line2.frame=0;
                                            line2.angle+=90;
                                            line2.scale.setTo(0.28);
                                            line3.scale.setTo(0.3,0.28);

                                             _this.pattern.addChild(line2);
                                            _this.pattern.addChild(line3);
                                        } 
                                    }
                                    if(_this.choice===8&&i===_this.answer-1){
                                        let line3=_this.add.sprite(356+70*i, 220, 'matchLine');
                                        line3.frame=0;
                                        line3.angle+=180;
                                        line3.scale.setTo(0.3);
                                        _this.pattern.addChild(line3);
                                    }
                                }

                                _this.matchDrag.frame=1;
                                _this.matchDrag.inputEnabled=true;
                                _this.matchDrag.input.useHandCursor=true;
                                _this.matchDrag.events.onInputDown.add(function(target){
                                        _this.clickSound.play();
                                        if(target.x>=0){
                                            for(let i=0;i<_this.pattern.length;i++){
                                                if(_this.pattern.getChildAt(i).frame===0){
                                                    _this.pattern.getChildAt(i).frame=1;
                                                    _this.completed++;
                                                    break;
                                                }
                                            }
                                        }
                                        target.x=60;
                                        target.y=160;
                                 }, _this.matchDrag);
                            });
                        }
                        else{
                            _this.noofAttempts ++;
                            _this.wrongSound.play();
                        }
                    }, _this.tick);

                    let rand;
                    do{
                        rand=Math.floor(Math.random()*8);
                    }while(_this.array[rand]===_this.array[_this.choice]);

                    let value1=rand;

                    do{
                        rand=Math.floor(Math.random()*8);
                    }while(_this.array[rand]===_this.array[_this.choice]||_this.array[rand]===_this.array[value1]);

                    let value2=rand;
                    let num=Math.floor(Math.random()*3);
                    
                    if(_this.array[_this.choice].length>2)
                    _this.Txt=_this.add.text(45,20, _this.array[_this.choice]);
                    else
                    _this.Txt=_this.add.text(70,20, _this.array[_this.choice]);
                    _this.Txt.align = 'right';
                    _this.Txt.font = "Akzidenz-Grotesk BQ";
                    _this.Txt.fill = '#65B4C3';
                    _this.Txt.fontWeight = 'normal';

                    if(num===0){
                        _this.option1.addChild(_this.Txt);

                        if(_this.array[value1].length>2)
                        _this.Txt=_this.add.text(45,20, _this.array[value1]);
                        else
                        _this.Txt=_this.add.text(70,20, _this.array[value1]);
                        _this.Txt.align = 'right';
                        _this.Txt.font = "Akzidenz-Grotesk BQ";
                        _this.Txt.fill = '#65B4C3';
                        _this.Txt.fontWeight = 'normal';
                        _this.option2.addChild(_this.Txt);

                        if(_this.array[value2].length>2)
                        _this.Txt=_this.add.text(45,20, _this.array[value2]);
                        else
                        _this.Txt=_this.add.text(70,20, _this.array[value2]);
                        _this.Txt.align = 'right';
                        _this.Txt.font = "Akzidenz-Grotesk BQ";
                        _this.Txt.fill = '#65B4C3';
                        _this.Txt.fontWeight = 'normal';
                        _this.option3.addChild(_this.Txt);
                    }
                    else if(num===1){
                        _this.option2.addChild(_this.Txt);

                        if(_this.array[value1].length>2)
                        _this.Txt=_this.add.text(45,20, _this.array[value1]);
                        else
                        _this.Txt=_this.add.text(70,20, _this.array[value1]);
                        _this.Txt.align = 'right';
                        _this.Txt.font = "Akzidenz-Grotesk BQ";
                        _this.Txt.fill = '#65B4C3';
                        _this.Txt.fontWeight = 'normal';
                        _this.option1.addChild(_this.Txt);

                        if(_this.array[value2].length>2)
                        _this.Txt=_this.add.text(45,20, _this.array[value2]);
                        else
                        _this.Txt=_this.add.text(70,20, _this.array[value2]);
                        _this.Txt.align = 'right';
                        _this.Txt.font = "Akzidenz-Grotesk BQ";
                        _this.Txt.fill = '#65B4C3';
                        _this.Txt.fontWeight = 'normal';
                        _this.option3.addChild(_this.Txt);
                    }
                    else{
                        _this.option3.addChild(_this.Txt);

                        if(_this.array[value1].length>2)
                        _this.Txt=_this.add.text(45,20, _this.array[value1]);
                        else
                        _this.Txt=_this.add.text(70,20, _this.array[value1]);
                        _this.Txt.align = 'right';
                        _this.Txt.font = "Akzidenz-Grotesk BQ";
                        _this.Txt.fill = '#65B4C3';
                        _this.Txt.fontWeight = 'normal';
                        _this.option1.addChild(_this.Txt);

                        if(_this.array[value2].length>2)
                        _this.Txt=_this.add.text(45,20, _this.array[value2]);
                        else
                        _this.Txt=_this.add.text(70,20, _this.array[value2]);
                        _this.Txt.align = 'right';
                        _this.Txt.font = "Akzidenz-Grotesk BQ";
                        _this.Txt.fill = '#65B4C3';
                        _this.Txt.fontWeight = 'normal';
                        _this.option2.addChild(_this.Txt);
                    }
                });
            }
            else if(_this.stage===4){
                _this.celebration();
                _this.stage=0;
                _this.answer=0;
                _this.current=0;
                _this.choice=0;

                _this.time.events.add(2000, function () 
                {
                    _this.noofAttempts ++;
                    telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                    _this.Question_flag=0;
                    _this.eraseScreen();
                    _this.pattern.destroy();
                    _this.top1.destroy();
                    _this.top2.destroy();
                    _this.top3.destroy();
                    _this.value1.destroy();
                    _this.value2.destroy();
                    _this.value3.destroy();
                    _this.n.destroy();
                    _this.matchDrag1.destroy();
                    _this.matchDrag2.destroy();
                    _this.column.destroy();
                    _this.matchDrag.destroy();
                    console.log(_this.matchDrag);
                    _this.matchButton.destroy();
                    _this.AnswerBox.destroy();
                    _this.numGroup.destroy();
                    
                    if(_this.starting===6){
                       // _this.state.start('score'); 
                        _this.state.start('score', true, false,gameID,_this.microConcepts);
                    }
                    _this.getQuestion();
                });
            }
        }
        else if(Number(''+_this.selectedAns1+_this.selectedAns2)===_this.answer&&_this.stage===3){
            _this.top2=_this.add.image(520, 275, 'white-box');
            if(_this.answer>=10)
            _this.Txt3=_this.add.text(10,10, String(_this.answer));
            else
            _this.Txt3=_this.add.text(20,10, String(_this.answer));

            _this.Question_flag=1;
            if(_this.starting===1)
                _this.Ask_Question2.play();

            _this.Txt3.align = 'right';
            _this.Txt3.font = "Akzidenz-Grotesk BQ";
            _this.Txt3.fill = '#65B4C3';
            _this.Txt3.fontWeight = 'normal';
            _this.top2.addChild(_this.Txt3);
            _this.eraseScreen();
            _this.stage++;

            _this.AnswerBox.destroy();
            _this.answer=_this.calculate(_this.choice, _this.answer);
            _this.AnswerBox=_this.add.image(520, 355, 'white-box');
            _this.AnswerBox.frame=1;
            console.log(_this.AnswerBox.frame);
        }
        else
        {
            _this.noofAttempts ++;
            _this.wrongSound.play();
            _this.rightbtn.inputEnabled = true;
            _this.rightbtn.input.useHandCursor = true;
            _this.rightbtn_is_Clicked=false;
            _this.time.events.add(1000, function () 
            {
                _this.eraseScreen();
            });
        }
    },

    celebration:function()
    {
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
    },

    checkOverlap: function(spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
    
        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

    calculate: function (choice, number) {
        if(choice===0){
            return number*3;
        }
        else if(choice===1){
            return number*2;
        }
        else if(choice===2){
            return number*3;
        }
        else if(choice===3){
            return number*2;
        }
        else if(choice===4){
            return number*4;
        }
        else if(choice===5){
            return number*5;
        }
        else if(choice===6){
            return number*3;
        }
        else if(choice===7){
            return number*2+1;
        }
        else if(choice===8){
            return number*3+1;
        }
        else if(choice===9){
            return number*5+1;
        }
        else if(choice===10){
            return number*7+1;
        }
        else if(choice===11){
            return number*4+1;
        }
        else if(choice===12){
            return number*3+1;
        }
        else if(choice===13){
            return number*2+1;
        }
    },

    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');

        //   //* star Actions changes
        //   _this.userHasPlayed =1;
        //   _this.timeinMinutes = _this.minutes;
        //   _this.timeinSeconds = _this.seconds;
        //   _this.game_id = "ALP_01_G6";
        //   _this.grade = "6";
        //   _this.gradeTopics = "Variable and Equation";
        _this.microConcepts = "Algebra";

        _this.count1++;
        anim.play();
    },

    shutdown: function () {
        _this.stopVoice();
    },
  
    DemoVideo:function()
    {
        //*  use the derived Rule and find  number of match sticks 
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl+ "questionSounds/ALP-01-G6/" + _this.languageSelected + "/DV1-ALP-01-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //*  here rule is '3 n' , so total number of match sticks are 3 multiply by 8 which is equal to 24
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl+ "questionSounds/ALP-01-G6/" + _this.languageSelected + "/DV3-ALP-01-G6.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //*  Find a rule to give the number of match sticks required to make  the given pattern.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl+ "questionSounds/ALP-01-G6/" + 
                                        _this.languageSelected + "/ALP-01-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* enter the number of matchsticks required  for the pattern
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl+ "questionSounds/ALP-01-G6/" + 
                                        _this.languageSelected + "/ALP-01-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* Select the correct rule for the given pattern
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl+ "questionSounds/ALP-01-G6/" + 
                                        _this.languageSelected + "/ALP-01-G6C.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

       // *  Enter the number of patterns
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl+ "questionSounds/ALP-01-G6/" + 
                                        _this.languageSelected + "/ALP-01-G6D.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function ()
        {
            _this.stopAudio();
            if(_this.demoVideo_3)
                _this.demoVideo_3.stop(false);
            if(_this.demoVideo_2)
                _this.demoVideo_2.stop(false);
            if(_this.demoVideo_1)
                _this.demoVideo_1.stop(false);
            if(_this.videoWorld_1)
                _this.videoWorld_1.destroy();
            if(_this.videoWorld_2)
                _this.videoWorld_2.destroy();
            if(_this.videoWorld_3)
                _this.videoWorld_3.destroy();

            if(_this.hintBtn)
            {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true; 
            }
            _this.game.paused = false;  //* restart the game
        });
    },

    stopAudio: function()
    {    
        //* clear all the timers first

        if (_this.demoAudio1Timer) clearTimeout(_this.demoAudio1Timer);
        if (_this.demoAudio2Timer) clearTimeout(_this.demoAudio2Timer);
        if (_this.q2Timer) clearTimeout(_this.q2Timer); 
        if (_this.q3Timer) clearTimeout(_this.q3Timer); 
        if (_this.q4Timer) clearTimeout(_this.q4Timer);
        if (_this.q5Timer) clearTimeout(_this.q5Timer); 
        if (_this.demoVideo3PauseTimer) clearTimeout(_this.demoVideo3PauseTimer);
        
        if (_this.demoAudio1)
        {
            console.log("removing the demo audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.demoAudio2)
        {
            console.log("removing the demo audio1");
            _this.demoAudio2.pause();
            _this.demoAudio2 = null;
            _this.demoAudio2src = null;
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
            console.log("removing the q3");
            _this.q4Sound.pause();
            _this.q4Sound = null;
            _this.q4Soundsrc = null;
        }
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed
    },

    dA1: function()
    { 
        _this.time.events.add(36000, function(){
            console.log("dvo 2..");
            _this.demoAudio2.play();
        } );   
    },

    dA2: function()
    {
        _this.demoVideo_3.playbackRate = 1; 
    },

    showDemoVideo:function()
    {
        _this.demoVideo_1 = _this.add.video('alp01_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl+ "assets/demoVideos/ALP-01-G6_1.mp4");
        _this.video_playing = 1;        
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();
    
        _this.q1Sound.play();
        //* play the demo audio1 after 1 sec delay
        _this.q2Timer = setTimeout(function()    //* q2Sound js timer to play q2Timer after 1 seconds.
        {
            console.log("inside demoAudio1sound.....")
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 10000);
                     
        _this.demoVideo_1.onComplete.add(function()
        {
            console.log("audio2 ended - pause video1");
            _this.demoVideo_2 = _this.add.video('alp01_2');
            _this.demoVideo_2.play(false);
            _this.demoVideo_2.changeSource(window.baseUrl+ "assets/demoVideos/ALP-01-G6_2.mp4");  //* phaser needs this.to run in mobile
            _this.video_playing = 2;
            _this.videoWorld_2 = _this.demoVideo_2.addToWorld();
        
            _this.skip.bringToTop();

            _this.q3Timer = setTimeout(function()    //* q2Sound js timer to play q2Timer after 1 seconds.
            {
                console.log("inside q22.....")
                clearTimeout(_this.q3Timer);         //* clear the time once its used.
                _this.q2Sound.play();
            }, 1000);

            _this.q4Timer = setTimeout(function()    //* q2Sound js timer to play q2Timer after 15 seconds.
            {
                console.log("inside q22.....")
                clearTimeout(_this.q4Timer);         //* clear the time once its used.
                _this.q2Sound.play();
            }, 15000);

            _this.q5Timer = setTimeout(function()    //* q2 js q3Timer to play demoAudio1Timer after 32 seconds.
            {
                console.log("inside q3sound.....")
                clearTimeout(_this.q5Timer);         //* clear the time once its used.
                _this.q3Sound.play();
            }, 32000);

            _this.demoVideo_2.onComplete.add(function()
            {
                console.log("demovideo 2 completed......!!!1")
                _this.demoVideo_3 = _this.add.video('alp01_3');
                _this.demoVideo_3.play(false);
                _this.demoVideo_3.changeSource(window.baseUrl+ "assets/demoVideos/ALP-01-G6_3.mp4");  //* phaser needs this.to run in mobile
                _this.video_playing = 3;
                _this.videoWorld_3 = _this.demoVideo_3.addToWorld();
            
                _this.skip.bringToTop();
                _this.q4Sound.play();

                _this.q6Timer = setTimeout(function()    //* q2 js q3Timer to play demoAudio1Timer after 10 seconds.
                {
                    console.log("inside q2sound.....")
                    clearTimeout(_this.q6Timer);         //* clear the time once its used.
                    _this.q2Sound.play();
                }, 11000);

                _this.demoAudio1Timer = setTimeout(function()    //* demoAudio1 js timer to play demoAudio6Timer after 33 seconds.
                {
                    console.log("inside demoAudio1.....")
                    clearTimeout(_this.demoAudio1Timer); //* clear the time once its used.
                    _this.demoVideo_3.playbackRate = 0;        
                    _this.demoAudio1.play();
                }, 33000);

                _this.demoAudio2Timer = setTimeout(function()    //* demoAudio1 js timer to play demoAudio6Timer after 33 seconds.
                {
                    console.log("inside demoAudio1.....")
                    clearTimeout(_this.demoAudio2Timer); //* clear the time once its used.   
                    _this.demoAudio2.play();
                }, 43000);

                //_this.demoAudio1.addEventListener('ended', _this.dA1);

                _this.demoAudio2.addEventListener('ended', _this.dA2);

                _this.demoVideo_3.onComplete.add(function()
                {
                    console.log("demovideo 3 completed......!!!1")
                   
                    _this.stopAudio(); 
                    _this.demoVideo_3.stop(false);
                    _this.demoVideo_2.stop(false);
                    _this.demoVideo_1.stop(false);
                    _this.videoWorld_3.destroy();
                    _this.videoWorld_2.destroy();
                    _this.videoWorld_1.destroy();
                    if(_this.hintBtn)
                    {
                        _this.hintBtn.inputEnabled = true;
                        _this.hintBtn.input.useHandCursor = true; 
                    }
                    _this.game.paused = false; 
                    
                });

            });
            
        });
    }
}