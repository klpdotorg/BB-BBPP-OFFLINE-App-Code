Game.NSF_9A_G6level1 = function () { };


Game.NSF_9A_G6level1.prototype =
{

    init: function (game) {
        _this = this;

        //* language is passed as parameter.
        _this.languageSelected = window.languageSelected;

        if (_this.languageSelected == null
            || _this.languageSelected == " "
            || _this.languageSelected == "") {
            _this.languageSelected = "English";
        }
        else console.log("Language selected: " + _this.languageSelected);

        _this.clickSound = document.createElement('audio');
        _this.clickSoundsrc = document.createElement('source');
        _this.clickSoundsrc.setAttribute("src", window.baseUrl + "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.celebrationSound = document.createElement('audio');
        _this.celebrationSoundsrc = document.createElement('source');
        _this.celebrationSoundsrc.setAttribute("src", window.baseUrl + "sounds/celebration.mp3");
        _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

        telInitializerbbpp.gameIdInit("NSF_9A_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },

    create: function (game) {
        //* show the demo video
        _this.time.events.add(1, function () {
            _this.ViewDemoVideo();
        });

        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        _this.time.events.add(500, function () {
            _this.gameCreate();
        });
    },


    ViewDemoVideo: function () {
        //* pause the game before going to the demovideo 
        _this.game.paused = true;
        _this.DemoVideo();  //* at the end of demo video/skip pressed, it will unpause the game.
    },

    gameCreate: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.count1 = 0;
        _this.wholeNoQues = -1;

        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.number;
        _this.selectedAns1 = '';

        _this.qn_flag = 1;
        _this.draggableObj = [];
        _this.askedQues = [-1, -1, -1];

        //* User Progress variables for BB++ app
        //   _this.userHasPlayed = 0;
        //   _this.timeinMinutes;
        //   _this.timeinSeconds;
        //   _this.game_id;
        //   _this.score = 0;
        //   _this.gradeTopics;
           _this.microConcepts;
            
        //   _this.grade;

        //        _this.shake = new Phaser.Plugin.Shake(game);
        //        game.plugins.add(_this.shake);
        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');


        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.stopVoice();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50, function () {
                _this.state.start('grade6NumberSystems', true, false);
            });
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            //console.log("Hello");
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                if (_this.qn_flag == 1) {
                    if (_this.Question1) {
                        _this.Question1.pause();
                        _this.Question1.currentTime = 0;
                    }
                    _this.askQn1();
                }


                _this.time.events.add(4000, function () {
                    _this.speakerbtnClicked = false;
                    _this.EnableVoice();

                });
            }


        }, _this);
        _this.boxesObj = [];
        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);


        _this.time.events.add(2000, _this.getQuestion);

        // _this.pos = [80, 110, 140, 170, 200, 230, 260, 290, 320, 350, 380, 410, 440, 470, 500, 530, 560, 590, 620, 650, 680, 710, 740, 770];

    },

    //* function to enable the speaker button once pressed.
    EnableVoice: function () {
        //console.log("SBtn: " + _this.speakerbtnClicked + " RBtn: " + _this.rightbtnClicked);
        if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
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
    },


    askQn1: function () {
        // console.log("Select on the White strip to color");
        // Checking if already for same is audio is playing
        if (_this.Question1) {
            _this.Question1.pause();
            _this.Question1.currentTime = 0;
        }
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-9A-G6/" +
            _this.languageSelected + "/NSF-9-G6-a.mp3");
        _this.Question1.appendChild(_this.Question1src);
        _this.Question1.play();
    },

    getQuestion: function () {
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
        _this.askQn1();
        _this.initialScreen();

        _this.questionid = 1;
        // _this.randomizing_elements();
    },

    stopVoice: function () {
        if (_this.Question1) {
            if (_this.Question1.contains(_this.Question1src)) {
                _this.Question1.removeChild(_this.Question1src);
                _this.Question1src = null;
            }

            if (!_this.Question1.paused) {
                _this.Question1.pause();
                _this.Question1.currentTime = 0.0;
            }
            _this.Question1 = null;
            _this.Question1src = null;
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

    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        // _this.userHasPlayed = 1;
        // _this.game_id='NSF_9A_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Fractions";
       _this.microConcepts = "Number Systems";
        _this.count1++;
        anim.play();
    },

    celebration: function () {
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
    },
    initialScreen: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
        _this.scale = _this.add.image(48, 240, 'scale');
        _this.slider = _this.add.image(48, 235, 'arrow')
        _this.slider.scale.setTo(0.85)
        if (_this.count1 == 0) {
            _this.showDrag();

        }
        else {
            _this.EnableSlider();
        }
        // _this.slider.events.onDragStop.add(_this.dragStop, _this);

        _this.zero = _this.add.text(47, 305, 0, { fontSize: '24px' })
        _this.one = _this.add.text(290, 305, 1, { fontSize: '24px' })
        _this.two = _this.add.text(533, 305, 2, { fontSize: '24px' })
        _this.three = _this.add.text(774, 305, 3, { fontSize: '24px' })

        // _this.scale.frame=10;
        _this.rightbtn = _this.add.sprite(820, 235, 'Rightbtn')
        // _this.rightbtn.frame=1
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this);

        // _this.rightbtn.input.events.onClick()


        _this.quesBox = _this.add.image(840, 70, 'QuesBox');

        _this.randomize();
    },

    EnableSlider: function () {
        _this.slider.inputEnabled = true;
        _this.slider.input.useHandCursor = true;

        _this.slider.input.allowVerticalDrag = false;
        _this.slider.input.allowHorizontalDrag = true;
        _this.slider.input.enableDrag(true);
        _this.slider.visible = true;
        _this.slider.input.dragFromCenter = false;

        _this.slider.events.onDragUpdate.add(_this.dragStop1, _this);
    },

    randomize: function () {

        // _this.numerator % _this.denominator >=0.5 
        // _this.denominator = 8;
        _this.denominator = Math.floor(Math.random() * (8 - 2 + 1) + 2);
        for (var i = 0; i <= _this.count1; i++) {
            if (_this.denominator == _this.askedQues[i]) {
                _this.denominator = Math.floor(Math.random() * (8 - 2 + 1) + 2);
                i = -1;
            }
            else if (_this.askedQues[i] == -1) {
                break;
            }
        }
        _this.askedQues[_this.count1] = _this.denominator;
        // _this.denominator=7;
        _this.numerator = 1;

        while (_this.numerator / _this.denominator < 0.5) {
            _this.numerator = Math.floor(Math.random() * (_this.denominator * 3 - 1) + 1);
        }

        // console.log(_this.numerator, _this.denominator);
        _this.fillQuesBox();
    },


    showDrag: function () {
        _this.tempGroup = _this.add.group();

        _this.tempSlider = _this.add.image(48, 235, 'arrow')
        _this.tempSlider.scale.setTo(0.85)
        _this.tempGroup.addChild(_this.tempSlider);

        _this.time.events.add(1000, function () {
            _this.hand = _this.add.image(50, 230, 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
            _this.tempGroup.addChild(_this.hand);
        });
        _this.time.events.add(1500, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.tempGroup);
            tempDragAction.to({ x: 230, y: 1 }, 800, 'Linear', true, 0);
            tempDragAction.start();
        });

        //* destroy the group after the show after a delay
        _this.time.events.add(3000, function () {
            _this.tempGroup.destroy();
            _this.EnableSlider();
        });
    },

    fillQuesBox: function () {

        _this.NumeratorText = _this.add.text(36, 35, _this.numerator, { fontSize: '24px' });
        _this.NumeratorText.anchor.setTo(0.5);

        _this.DenominatorText = _this.add.text(30, 49, _this.denominator, { fontSize: '24px' })
        _this.quesBox.addChild(_this.NumeratorText)
        _this.quesBox.addChild(_this.DenominatorText)
        _this.NumeratorText.fill = '#FF0000';
        _this.DenominatorText.fill = '#FF0000';

    },

    dragStop1: function (sprite, pointer) {
        if (_this.graphics)
            _this.graphics.destroy();
        if (pointer.x >= 60 && pointer.x <= 780) {

            // console.log(pointer.x, pointer.y)
            _this.graphics = _this.add.graphics();
            _this.graphics.beginFill(0xFFF00, 1)
            // _this.graphics.drawRect(140,242.5,50-140,42.5);

            if (pointer.x >= 770)
                _this.graphics.drawRect(778, 242.5, 50 - 778, 42.5);
            else if (pointer.x >= 740)
                _this.graphics.drawRect(748, 242.5, 50 - 748, 42.5);
            else if (pointer.x >= 710)
                _this.graphics.drawRect(718, 242.5, 50 - 718, 42.5);
            else if (pointer.x >= 680)
                _this.graphics.drawRect(688, 242.5, 50 - 688, 42.5);
            else if (pointer.x >= 650)
                _this.graphics.drawRect(658, 242.5, 50 - 658, 42.5);
            else if (pointer.x >= 620)
                _this.graphics.drawRect(628, 242.5, 50 - 628, 42.5);
            else if (pointer.x >= 590)
                _this.graphics.drawRect(598, 242.5, 50 - 598, 42.5);
            else if (pointer.x >= 560)
                _this.graphics.drawRect(565, 242.5, 50 - 565, 42.5);
            else if (pointer.x >= 530)
                _this.graphics.drawRect(535, 242.5, 50 - 535, 42.5);
            else if (pointer.x >= 500)
                _this.graphics.drawRect(505, 242.5, 50 - 505, 42.5);
            else if (pointer.x >= 470)
                _this.graphics.drawRect(475, 242.5, 50 - 475, 42.5);
            else if (pointer.x >= 440)
                _this.graphics.drawRect(445, 242.5, 50 - 445, 42.5);
            else if (pointer.x >= 410)
                _this.graphics.drawRect(415, 242.5, 50 - 415, 42.5);
            else if (pointer.x >= 380)
                _this.graphics.drawRect(385, 242.5, 50 - 385, 42.5);
            else if (pointer.x >= 350)
                _this.graphics.drawRect(355, 242.5, 50 - 355, 42.5);
            else if (pointer.x >= 320) {
                // console.log("yes")
                _this.graphics.drawRect(323, 242.5, 50 - 323, 42.5);
            }
            else if (pointer.x >= 290) {
                _this.graphics.drawRect(295, 242.5, 50 - 295, 42.5);
            }
            else if (pointer.x >= 260)
                _this.graphics.drawRect(265, 242.5, 50 - 265, 42.5);
            else if (pointer.x >= 230)
                _this.graphics.drawRect(230, 242.5, 50 - 230, 42.5);
            else if (pointer.x >= 200) {
                _this.graphics.drawRect(200, 242.5, 50 - 200, 42.5);
            }
            else if (pointer.x >= 170)
                _this.graphics.drawRect(170, 242.5, 50 - 170, 42.5);
            else if (pointer.x >= 140)
                _this.graphics.drawRect(140, 242.5, 50 - 140, 42.5);
            else if (pointer.x >= 110)
                _this.graphics.drawRect(110, 242.5, 50 - 110, 42.5);
            else if (pointer.x >= 80)
                _this.graphics.drawRect(80, 242.5, 50 - 80, 42.5);

            _this.pointer = pointer.x;

            // Third for horizontal  first for x posn
            // 2nd for vertical 4th for bounds breadth 30 diff
            _this.scale.bringToTop();
            _this.slider.bringToTop();
        }
        else if (pointer.x > 780) {
            // console.log("gedgtydcg")
            _this.slider.x = 770;
            _this.slider.y = 235;
            _this.graphics = _this.add.graphics();
            _this.graphics.beginFill(0xFFF00, 1)
            _this.graphics.drawRect(778, 242.5, 50 - 778, 42.5);
            _this.scale.bringToTop();
            _this.slider.bringToTop();
        }
        else if (pointer.x < 60) {
            // console.log("gedgtydcg")
            _this.slider.x = 48;
            _this.slider.y = 235;

        }

    },


    nextquestion: function () {

        if (_this.count1 < 3) {
            _this.initialScreen();

        }
        else {

            _this.qn_flag = 0;
            // Calligng second part of the game NSF-9B
            _this.state.start('NSF_9B_G6level1', false, false, _this.minutes, _this.seconds, _this.counterForTimer,gameID);

        }
    },


    eraseScreen: function (target) {

        // console.log("erasing screen");

        _this.scale.destroy();
        _this.slider.destroy();
        _this.graphics.destroy();
        _this.zero.destroy();
        _this.one.destroy();
        _this.two.destroy();
        _this.three.destroy();
        _this.rightbtn.destroy();
        _this.quesBox.destroy();
        _this.numPos.destroy();
        _this.denomPos.destroy();
        _this.line.destroy();
    },

    rightbtnClicked: function () {

        _this.noofAttempts++;
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.frame = 1;
        _this.slider.input.draggable = false
        // Making speaker button consistent for next game
        if (_this.count1 == 2)
            _this.qn_flag = 0;
        if (_this.iscorrect()) {

            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.showAns();

            _this.celebration();
            _this.time.events.add(2500, function () {
                _this.eraseScreen();
                _this.nextquestion();

            });

        } else {
            _this.wrongSound.play();

            _this.slider.x = 48;
            _this.slider.y = 235;
            _this.graphics.destroy();
            _this.slider.input.draggable = true;
            _this.rightbtn.inputEnabled = true;
            _this.rightbtn.frame = 0;

        }

    },
    iscorrect: function () {
        // + 50 bcoz scale starts from 50 to 780 
        // Scale has length 720 total

        if (_this.pointer >= (720 / (_this.denominator * 3)) * _this.numerator + 15 && _this.pointer <= (720 / (_this.denominator * 3)) * _this.numerator + 90) {
            // console.log("true")
            return true;
        }
        else {
            // console.log("false")
            return false;
        }

    },

    showAns: function () {
        _this.graphics.destroy();
        _this.graphics = _this.add.graphics();
        _this.graphics.beginFill(0xFFF00, 1)


        var correctPos = (720 / (_this.denominator * 3)) * _this.numerator + 52;

        if (_this.numerator / _this.denominator <= 1) {
            _this.graphics.drawRect(correctPos, 242.5, 50 - correctPos, 42.5);
        }
        else {
            var correctPos1 = (720 / (_this.denominator * 3)) * _this.numerator + 57;
            _this.graphics.drawRect(correctPos1, 242.5, 50 - correctPos1, 42.5);

        }
        _this.scale.bringToTop();
        _this.slider.bringToTop();
        _this.slider.x = correctPos - 5;

        if (_this.numerator < 10)
            _this.numPos = _this.add.text(correctPos - 5, 180, _this.numerator, { fontSize: '24px' })
        else
            _this.numPos = _this.add.text(correctPos - 12, 180, _this.numerator, { fontSize: '24px' })
        _this.line = _this.add.graphics();
        _this.line.lineStyle(2, 0xFF0000);
        _this.line.moveTo(correctPos + 22, 210);
        _this.line.lineTo(correctPos - 12, 210);

        _this.denomPos = _this.add.text(correctPos - 5, 210, _this.denominator, { fontSize: '24px' })
        _this.numPos.fill = '#FF0000';
        _this.denomPos.fill = '#FF0000';



    },

    //* functions related to showing the demo video. 
    //* the game is paused before calling this. Once the demo video 
    //* completes or skip button is pressed, it makes _this.game.paused = false.

    DemoVideo: function () {
        //* In this game, you will estimate -the position of a fraction- on the number line 
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-9A-G6/" +
            _this.languageSelected + "/NSF-9-G6-demo.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* Slide the arrow and show the given fraction on the number line
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-9A-G6/" +
            _this.languageSelected + "/NSF-9-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Slide the arrow and estimate what is the given fraction closer to
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-9B-G6/" +
            _this.languageSelected + "/NSF-9-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.showDemoVideo();  //* call the function to show the video

        // _this.backbtn1 = _this.add.sprite(10, 6, 'backbtn');
        // _this.backbtn1.inputEnabled = true;
        // _this.backbtn1.input.useHandCursor = true;
        // _this.backbtn1.events.onInputDown.add(function ()
        // {   
        //     _this.clickSound.play();
        //     //_this.stopVideo();
        //     _this.stopAudio();
        //     _this.game.paused = false;
        //     _this.state.start('grade6NumberSystems',true,false);
        // });

        _this.skip = _this.add.image(870, 460, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.clickSound.play();
            //_this.stopVideo();
            _this.stopAudio();
            _this.videoWorld.destroy();
            _this.skip.destroy();
            _this.game.paused = false;  //* restart the game
        });
    },

    //* function to stop the video and audio if they are playing.
    stopVideo: function () {
        console.log("inside stop video");
        if (_this.demoVideo_1) {
            console.log("removing the video");
            _this.demoVideo_1.destroy();
            _this.videoWorld.destroy();
        }
    },

    stopAudio: function () {
        //* clear all the timers first

        if (_this.dvPause1) clearTimeout(_this.dvPause1);
        if (_this.dvPause2) clearTimeout(_this.dvPause2);

        if (_this.demoAudio1) {
            console.log("removing the demo audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.q1Sound) {
            console.log("removing the q1");
            _this.q1Sound.removeEventListener('ended', _this.qA1);
            _this.q1Sound.pause();
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }

        if (_this.q2Sound) {
            console.log("removing the q2");
            _this.q2Sound.removeEventListener('ended', _this.qA2);
            _this.q2Sound.pause();
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }

        //_this.backbtn1.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                   //* skip button destroyed
        // _this.backbtn1.destroy();               //* backbutton button destroyed
    },

    //* event functions for demo audio and question audios. 
    //* do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    qA1: function () {
        console.log("inside qA1. Playback rate: " + _this.demoVideo_1.playbackRate);
        //_this.demoVideo_1.playbackRate = 1;  //* restart video after q1 is played
    },

    qA2: function () {
        console.log("inside qA2. Playback rate: " + _this.demoVideo_1.playbackRate);
        //_this.demoVideo_1.playbackRate = 1;  //* restart video after q2 is played
    },

    showDemoVideo: function () {
        //* As _this.game is paused, phaser time events cannot be used since its timer is stopped.
        //* so we have to use js timers as required

        _this.demoAudio1.play();
        _this.demoVideo_1 = _this.add.video('nsf9_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSF-9-G6_1.mp4");
        _this.videoWorld = _this.demoVideo_1.addToWorld();

        _this.dvPause1 = setTimeout(function ()    //* pause the video at 9 seconds and play the question 1
        {
            clearTimeout(_this.dvPause1);
            //_this.demoVideo_1.playbackRate = 0; 
            _this.q1Sound.play();
        }, 9000);

        _this.q1Sound.addEventListener('ended', _this.qA1);  //* after q1 is played, restart the video.

        _this.dvPause2 = setTimeout(function ()    //* pause the video at 32 seconds and play the question 2
        {
            clearTimeout(_this.dvPause2);
            //_this.demoVideo_1.playbackRate = 0; 
            _this.q2Sound.play();
        }, 26000);

        _this.q2Sound.addEventListener('ended', _this.qA2);  //* after q2 is played, restart the video.

        _this.demoVideo_1.onComplete.add(function ()   //* on completion of demovideo close the video
        {
            _this.stopAudio();                  //* stop timers and audios
            _this.demoVideo_1.stop(false);      //* stop video.
            _this.videoWorld.destroy();         //* destroy the video, gets removed from screen.
            _this.game.paused = false;          //* now, unpause the game, so that it continues.
        });
    }
}

//* video related commands
//        _this.video.changeSource("assets/demoVideos/7_1_1.mp4");
//        _this.videoWorld = this.video.addToWorld();
//        _this.video2.stop(false);
//        _this.video2.onComplete.add(function() {})
//        _this.video3.playbackRate = 1;
//        _this.game.paused = true; //* pauses the game.
//        _this.videoWorld.destroy(); //* removes video from screen   
