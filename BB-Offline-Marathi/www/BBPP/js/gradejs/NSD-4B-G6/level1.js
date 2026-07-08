Game.NSD_4B_G6level1 = function () { };


Game.NSD_4B_G6level1.prototype =
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
        _this.clickSoundsrc.setAttribute("src", window.baseUrl + "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.celebrationSound = document.createElement('audio');
        _this.celebrationSoundsrc = document.createElement('source');
        _this.celebrationSoundsrc.setAttribute("src", window.baseUrl + "sounds/celebration.mp3");
        _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", window.baseUrl + "sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);

        _this.wrongans = document.createElement('audio');
        _this.wronganssrc = document.createElement('source');
        _this.wronganssrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
        _this.wrongans.appendChild(_this.wronganssrc);

        _this.snapSound = document.createElement('audio');
        _this.snapSoundsrc = document.createElement('source');
        _this.snapSoundsrc.setAttribute("src", window.baseUrl + "sounds/snapSound.mp3");
        _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.Ask_Question1 = _this.createAudio("NSD-4B-G6A");
        _this.Ask_Question2 = _this.createAudio("NSD-4B-G6B");
        _this.Ask_Question3 = _this.createAudio("NSD-4B-G6C");
        _this.Ask_Question4 = _this.createAudio("NSD-4B-G6D");
        _this.Ask_Question5 = _this.createAudio("NSD-4B-G6E");
        _this.Ask_Question6 = _this.createAudio("NSD-4B-G6F");

        telInitializerbbpp.gameIdInit("NSD_4B_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },

    create: function (game) {

        _this.hintBtn = _this.add.sprite(670, 6, 'bulb');
        _this.hintBtn.scale.setTo(0.5, 0.6);
        _this.hintBtn.visible = false;
        //* show the demo video
        _this.time.events.add(1, function () {

            _this.ViewDemoVideo();
        });

        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        _this.time.events.add(1500, function () {
            console.log("//////////////////")
            _this.gameCreate(game);
        });
    },

    ViewDemoVideo: function () {
        //* pause the game before going to the demovideo 
        _this.game.paused = true;
        _this.DemoVideo();  //* at the end of demo video/skip pressed, it will unpause the game.
    },


    gameCreate: function (game) {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.count1 = 0;
        _this.speakerbtn;
        _this.background;
        _this.count = 0;
        //_this.in;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        // //*  User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
     _this.microConcepts;
        // _this.grade;


        _this.hint_flag = 0;
        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.Question_flag = -1;

        _this.twoNotEntered = false


        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        //** include the background file, navigation bar, stars, timer objects.

        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(10, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.stopVoice();
            _this.time.events.removeAll();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50, function () {
                _this.state.start('grade6NumberSystems', true, false);
            });
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();

                if (_this.Question_flag == 1) {
                    _this.Ask_Question1.play();
                }
                else if (_this.Question_flag == 2) {
                    _this.Ask_Question2.play();
                }
                else if (_this.Question_flag == 3) {
                    _this.Ask_Question3.play();
                }
                else if (_this.Question_flag == 4) {
                    _this.Ask_Question4.play();
                }
                else if (_this.Question_flag == 5) {
                    _this.Ask_Question5.play();
                }
                else if (_this.Question_flag == 6) {
                    _this.Ask_Question6.play();
                }


                _this.time.events.add(3000, function () {
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
            //* show the demo video
            _this.hintBtn.inputEnabled = false;
            _this.hintBtn.input.useHandCursor = false;

            _this.time.events.add(1, function () {
                console.log(_this.hintBtn.inputEnabled, "status of hintBtn");
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
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-4B-G6/" + _this.languageSelected + "/" + src + ".mp3");
        audio.appendChild(audiosrc);
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
    },
    getQuestion: function (target) {
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


        // Stores Random Question values in Array
        _this.StoreArrayValues();

        console.log("inside get question.....");
        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1;
        // _this.Randomize();

        // _this.CallingFIBFn()

    },

    stopVoice: function () {
        if (_this.Ask_Question1) {
            _this.Ask_Question1.pause();
            _this.Ask_Question1 = null;
        }
        else if (_this.Ask_Question2) {
            _this.Ask_Question2.pause();
            _this.Ask_Question2 = null;
        }
        else if (_this.Ask_Question3) {
            _this.Ask_Question3.pause();
            _this.Ask_Question3 = null;
        }
        else if (_this.Ask_Question4) {
            _this.Ask_Question4.pause();
            _this.Ask_Question4 = null;
        }
        else if (_this.Ask_Question5) {
            _this.Ask_Question5.pause();
            _this.Ask_Question5 = null;
        }
        else {
            if (_this.Ask_Question6) {
                _this.Ask_Question6.pause();
                _this.Ask_Question6 = null;
            }
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
    StoreArrayValues: function () {

        Value1Array = [];
        Value10thArray = [];
        _this.AnswerValues = [];

        _this.got = false;
        for (i = 0; i < 6; i++) {
            Value1Array[i] = Math.floor(Math.random() * (3 - 0) + 0);
            Value10thArray[i] = Math.floor(Math.random() * (10 - 1) + 1);
            value = Value1Array[i] + "." + Value10thArray[i];

            if (i < 3) {
                for (k = 0; k < i; k++) {
                    if ((Math.abs(_this.AnswerValues[k] - value)) < 0.2) {
                        Value1Array[i] = Math.floor(Math.random() * (3 - 0) + 0);
                        Value10thArray[i] = Math.floor(Math.random() * (10 - 1) + 1);
                        value = Value1Array[i] + "." + Value10thArray[i];
                        k = -1;
                    }
                }
            }
            if (i >= 3) {
                for (k = 3; k < i; k++) {
                    if ((Math.abs(_this.AnswerValues[k] - value)) < 0.2) {
                        Value1Array[i] = Math.floor(Math.random() * (3 - 0) + 0);
                        Value10thArray[i] = Math.floor(Math.random() * (10 - 1) + 1);
                        value = Value1Array[i] + "." + Value10thArray[i];
                        k = 2;
                    }
                }
            }
            for (k = 0; k < i; k++) {
                if (_this.AnswerValues[k] == value) {
                    Value1Array[i] = Math.floor(Math.random() * (3 - 0) + 0);
                    Value10thArray[i] = Math.floor(Math.random() * (10 - 1) + 1);
                    value = Value1Array[i] + "." + Value10thArray[i];
                    k = -1;
                }

            }
            _this.initialVal = value;
            if (i < 3) {
                for (var k = 0; k < i; k++) {

                    if ((Math.abs(_this.AnswerValues[k] - value)) < 0.2) {
                        if (_this.initialVal > 1.5) {

                            if (Value10thArray[i] > 0)
                                Value10thArray[i] -= 1;
                            else {
                                Value1Array[i] -= 1;
                                Value10thArray[i] = 9;
                            }
                        }
                        else {

                            if (Value10thArray[i] < 9)
                                Value1Array[i] += 1;
                            else {
                                Value1Array[i] -= 1;
                                Value10thArray[i] = 0;
                            }
                        }

                        value = Value1Array[i] + "." + Value10thArray[i];
                        k = -1;
                    }

                }
            }
            if (i >= 3) {
                for (var k = 3; k < i; k++) {
                    if ((Math.abs(_this.AnswerValues[k] - value)) < 0.2) {
                        if (_this.initialVal > 1.5) {
                            if (Value10thArray[i] > 0)
                                Value10thArray[i] -= 1;
                            else {
                                Value1Array[i] -= 1;
                                Value10thArray[i] = 9;
                            }
                        }
                        else {

                            if (Value10thArray[i] < 9)
                                Value10thArray[i] += 1;
                            else {
                                Value1Array[i] -= 1;
                                Value10thArray[i] = 0;
                            }
                        }

                        value = Value1Array[i] + "." + Value10thArray[i];
                        k = 2;
                    }
                }
            }

            _this.AnswerValues[i] = value;
        }

        console.log(Value1Array)
        console.log(Value10thArray)
        console.log(_this.AnswerValues)


        _this.makescale();
        _this.Randomize();
    },
    makescale: function () {
        _this.scale = _this.add.sprite(20, 200, 'scale');

        _this.zeroBox = _this.add.sprite(20, 255, 'Text box_1')
        var zero = _this.add.text(17, 8, '0');
        zero.fill = '#FF0000'
        _this.zeroBox.addChild(zero)

        _this.oneBox = _this.add.sprite(300, 255, 'Text box_1')
        var one = _this.add.text(17, 8, '1');
        one.fill = '#FF0000'
        _this.oneBox.addChild(one)

        _this.twoBox = _this.add.sprite(600, 255, 'Text box_1')
        var two = _this.add.text(17, 8, '2');
        two.fill = '#FF0000'
        _this.twoBox.addChild(two)

        _this.threeBox = _this.add.sprite(900, 255, 'Text box_1')
        var three = _this.add.text(17, 8, '3');
        three.fill = '#FF0000'
        _this.threeBox.addChild(three)


    },
    Randomize: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        if (_this.count1 == 3) {
            _this.makescale();

        }
        _this.time.events.add(600, () => {

            if (_this.count1 == 0) {
                _this.Question_flag = 1;
                _this.Ask_Question1.play();

            }
            if (_this.count1 == 1) {
                _this.Question_flag = 2;
                _this.Ask_Question2.play();

            }
            if (_this.count1 == 2) {
                _this.Question_flag = 3;
                _this.Ask_Question3.play();

            }
            if (_this.count1 == 3) {
                _this.Question_flag = 4;
                _this.Ask_Question4.play();

            }
            if (_this.count1 == 4) {
                _this.Question_flag = 5;
                _this.Ask_Question5.play();

            }
            if (_this.count1 == 5) {
                _this.Question_flag = 6;
                _this.Ask_Question6.play();

            }

        })

        _this.fouransLen = 0;
        _this.finalAns = true;
        _this.dotselected = false;
        _this.finalval = ''
        // Showing blue line for Ques

        _this.snapSound.play();

        if (Value10thArray[_this.count1] < 5 && Value1Array[_this.count1] == 0)
            var xcor = _this.scale.width / 30 - 3 + 29.2 * (Value1Array[_this.count1] * 10 + Value10thArray[_this.count1]);
        else if (Value10thArray[_this.count1] < 7 && Value1Array[_this.count1] == 0)
            var xcor = _this.scale.width / 30 - 3 + 29.5 * (Value1Array[_this.count1] * 10 + Value10thArray[_this.count1]);
        else if (Value1Array[_this.count1] == 1 || (Value10thArray[_this.count1] >= 7 && Value1Array[_this.count1] == 0))
            var xcor = _this.scale.width / 30 - 3 + 29.8 * (Value1Array[_this.count1] * 10 + Value10thArray[_this.count1]);
        else {
            var xcor = _this.scale.width / 30 - 3 + 29.9 * (Value1Array[_this.count1] * 10 + Value10thArray[_this.count1]);

        }
        _this.line = _this.add.sprite(xcor, 206.5, 'blueline')

        // show Answer box 
        _this.makeAnswerbox(xcor);

        // Number pad

    },
    makeAnswerbox: function (xcor) {
        _this.squareBox = _this.add.sprite(400, 350, 'Text box_2')
        _this.AnswerBox = _this.add.sprite(77, 10, 'white-box')
        _this.AnswerBox.scale.setTo(1.2, 1.06);
        _this.AnswerBox.frame = 1;

        _this.time.events.add(500, () => {
            _this.addNumberPad();


        })
        _this.squareBox.addChild(_this.AnswerBox);

        if (_this.count1 == 0)
            quesVar = 'A';
        else if (_this.count1 == 1)
            quesVar = 'B';
        else if (_this.count1 == 2)
            quesVar = 'C';
        else if (_this.count1 == 3)
            quesVar = 'D';
        else if (_this.count1 == 4)
            quesVar = 'E';
        else if (_this.count1 == 5)
            quesVar = 'F';

        // Upper question box (above scale)
        _this.qnBox = _this.add.sprite(xcor - 20, 155, 'Text box_1')
        var ques = _this.add.text(15, 10, quesVar)
        ques.fill = '#65B4C3'
        _this.qnBox.addChild(ques)


        _this.q = _this.add.text(20, 20, quesVar)
        _this.q.fill = '#65B4C3'
        _this.squareBox.addChild(_this.q)

        // Equals sign
        _this.eq1 = _this.add.graphics();
        _this.eq1.lineStyle(4, 0x65B4C3);
        _this.eq1.moveTo(50, 30);
        _this.eq1.lineTo(70, 30);
        _this.eq1.fill = '#65B4C3'
        _this.squareBox.addChild(_this.eq1)

        _this.eq2 = _this.add.graphics();
        _this.eq2.lineStyle(4, 0x65B4C3);
        _this.eq2.moveTo(50, 40);
        _this.eq2.lineTo(70, 40);
        _this.eq2.fill = '#65B4C3'
        _this.squareBox.addChild(_this.eq2)

    },
    rightbtnClicked: function () {
        console.log("right btn >>>");
        _this.noofAttempts++;
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        _this.rightbtn_is_Clicked = true;
        //edited on 17-01-2023
        if ((_this.AnswerBox.name === _this.AnswerValues[_this.count1]) || (_this.AnswerValues[_this.count1] < 1 && (_this.AnswerBox.name == "." + Value10thArray[_this.count1]))) {

            console.log("tick tick");
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.correctAns();
            _this.finalAns = false;
            _this.AnswerBox.frame = 0;
            _this.AnswerBox.name = ''
            _this.enterTxt = ''
            _this.twoNotEntered = false;

        }
        else {
            _this.dotselected = false
            _this.wrongSelected();

        }
    },

    celebrate: function () {
        _this.counterCelebrationSound.pause();
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();

        _this.AnswerBox.name = ''
        _this.AnswerBox = null;
        _this.selectedAns1 = ''
        _this.selectedAns2 = ''
        _this.selectedAns3 = ''

        _this.enterTxt = ''

    },
    wrongSelected: function () {
        _this.wrongans.play();
        _this.wrongbtnClicked();
        _this.rightbtn.inputEnabled = true;


    },


    //* Change this function to show small number pad as given in GDD. (no signs)
    addNumberPad: function () {

        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        //bottomnumpadbg.anchor.setTo(0.5);
        bottomnumpadbg.scale.setTo(1, 1);

        // bottomnumpadbg.name = "numpadbg";

        _this.x = 40;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;

        for (var i = 0; i < 11; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            // _this.numbg.scale.setTo(0.9);
            _this.numbg.name = i + 1;
            _this.numbg.frame = i;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked, _this);

            _this.x += 73;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, 'Numberpad');
        _this.wrongbtn.frame = 11;
        _this.wrongbtn.anchor.setTo(0.5);
        // _this.wrongbtn.scale.setTo(0.8, 0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, 'Numberpad');
        _this.rightbtn.frame = 12;
        _this.rightbtn.anchor.setTo(0.5);
        // _this.rightbtn.scale.setTo(0.8, 0.8);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this);

        _this.enterTxt = _this.add.text(8, 8, "");
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fontSize = "30px";
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.fill = '#65B4C3';

        //_this.objGroup.add(_this.ScreenTextBox);
        _this.numpadTween = _this.add.tween(_this.numGroup);

        //_this.ScreenTextTween = _this.add.tween(_this.ScreenTextBox);

        //tween in the number pad after a second.
        //_this.time.events.add(100, _this.tweenNumPad);
        _this.tweenNumPad();

        //after 2 seconds, show the screen text box as enabled
        //_this.time.events.add(2000, _this.enableScreenText);

    },

    numClicked: function (target) {
        // Only 2 digits and one point to be enetred rest not alloweed
        _this.clickSound.play();

        _this.dotEntered = false;
        if (target.name == 10)
            target.name = 0;
        if (target.name == 11 && _this.finalAns != true) {
            return
        }
        else if ((target.name == 11 || target.name == '.') && _this.finalAns == true && _this.dotselected == true) {
            return
        }
        else if (target.name == 11 && _this.finalAns == true) {
            target.name = "."
            _this.dotselected = true;
            _this.dotEntered = true;
        }
        if (_this.fouransLen == 2 && _this.dotselected != true) {
            _this.twoNotEntered = true;
        }
        if (_this.finalAns == true && _this.fouransLen != 3 && ((_this.twoNotEntered == false || _this.dotEntered == true))) {
            _this.finalval += ''
            _this.finalval += target.name
            if (target.name == '.')
                target.name = 11;

            _this.fouransLen += 1;

        }

        if (_this.finalAns == true && (_this.twoNotEntered == false || _this.dotEntered == true)) {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.enterTxt.visible = false;

            if ((_this.fouransLen == 1)) {
                _this.enterTxt = _this.add.text(18, 7, "" + _this.finalval, { fontSize: '24px' });

            }
            else if (_this.fouransLen == 2)

                _this.enterTxt = _this.add.text(11, 7, "" + _this.finalval, { fontSize: '24px' });

            else {

                _this.enterTxt = _this.add.text(9, 7, "" + _this.finalval, { fontSize: '24px' });
                _this.twoNotEntered = true

            }
            _this.enterTxt.scale.setTo(1, 1.2)

            _this.applyingStyle(_this.enterTxt);
            _this.AnswerBox.addChild(_this.enterTxt);
            _this.AnswerBox.name = _this.finalval;
            _this.enterTxt.visible = true
        }

    },
    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.twoNotEntered = false;
        _this.fouransLen = 0;
        _this.finalval = "";
        _this.dotselected = false;
        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.AnswerBox.frame = 1;

        _this.AnswerBox.name = ''

    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },
    storeAll: function () {
        if (_this.count1 == 1 || _this.count1 == 4) {

            _this.box1 = _this.qnBox
            _this.line1 = _this.line;
        }
        else if (_this.count1 == 2 || _this.count1 == 5) {

            _this.box2 = _this.qnBox
            _this.line2 = _this.line;
        }
        else {

            _this.box3 = _this.qnBox
            _this.line3 = _this.line;
        }
    },
    ClearHalf: function () {

        _this.rightbtn.inputEnabled = true;
        _this.numGroup.destroy();
        _this.squareBox.destroy();
        // _this.q.destroy();
        // _this.eq1.destroy();
        // _this.eq2.destroy();
        // _this.AnswerBox.destroy();

        if (_this.count1 == 3) {
            // Destroy a b and c
            _this.box1.destroy();
            _this.box2.destroy();
            _this.box3.destroy();
            _this.line1.destroy();
            _this.line2.destroy();
            _this.line3.destroy();
            _this.zeroBox.destroy();
            _this.twoBox.destroy();
            _this.oneBox.destroy();
            _this.threeBox.destroy();
            _this.scale.destroy();

        }
    },
    ClearAll: function () {
        _this.numGroup.destroy()
        _this.scale.destroy();
        _this.squareBox.destroy();
        _this.box1.destroy();
        _this.box2.destroy();
        _this.box3.destroy();
        _this.line1.destroy();
        _this.line2.destroy();
        _this.line3.destroy();
        _this.zeroBox.destroy();
        _this.twoBox.destroy();
        _this.oneBox.destroy();
        _this.threeBox.destroy();

    },
    applyingStyle: function (target) {
        target.align = 'center';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
    },

    correctAns: function () {

        if (_this.count1 < 5) {

            _this.celebrationSound.play();
            _this.starActions(_this.count1);
            _this.time.events.add(1000, _this.storeAll);
            _this.time.events.add(2000, _this.ClearHalf);
            _this.time.events.add(3000, _this.Randomize);


        }

        else {

            _this.celebrationSound.play();
            _this.starActions(_this.count1);
            _this.time.events.add(1000, _this.storeAll);
            _this.time.events.add(2000, _this.ClearAll);

            _this.time.events.add(2500, () => {
                // _this.state.start('score', true, false);
                _this.state.start('score', true, false,gameID,_this.microConcepts);
            })
        }

    },
    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');

        // //* star Actions changes
        // _this.userHasPlayed = 1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NSD_4B_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Decimals";
         _this.microConcepts = "Number Systems";


        //_this.anim.play();
        _this.count1++;
        anim.play();
    },


    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },

    DemoVideo: function () {
        //*  complete the picture for the given line of symmetry
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSD-4B-G6/" +
            _this.languageSelected + "/DV-NSD-4B-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-4B-G6/" +
            _this.languageSelected + "/NSD-4B-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(880, 320, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.stopAudio();
            if (_this.demoVideo_1)
                _this.demoVideo_1.stop(false);
            if (_this.videoWorld_1)
                _this.videoWorld_1.destroy();
            if (_this.hintBtn) {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
            }
            _this.game.paused = false;  //* restart the game
        });
    },

    stopAudio: function () {
        //* clear all the timers first
        if (_this.q1Timer) clearTimeout(_this.q1Timer);

        if (_this.demoAudio1) {
            console.log("removing the dv1");
            _this.demoAudio1.pause();
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }
        if (_this.q1Sound) {
            console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed
    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('nsd4b_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSD-4B-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.play();

        _this.q1Timer = setTimeout(function ()    //* q1Sound js timer to play q1Timer after 8 seconds.
        {
            console.log("inside demoAudio1sound.....")
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 10000);

        _this.demoVideo_1.onComplete.add(function () {
            _this.stopAudio();
            _this.demoVideo_1.stop(false);
            _this.videoWorld_1.destroy();

            if (_this.hintBtn) {
                console.log('inside show demo video..............');
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
            }
            _this.game.paused = false;
        });
    }
}