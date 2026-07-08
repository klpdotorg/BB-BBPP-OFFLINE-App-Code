Game.NS_LCM_1_G6level1 = function () { };

Game.NS_LCM_1_G6level1.prototype =
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

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", window.baseUrl + "sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);

        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NS-LCM-1-G6/" +
            _this.languageSelected + "/NS-LCM-1-G6-a.mp3");
        _this.Question1.appendChild(_this.Question1src);

        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NS-LCM-1-G6/" +
            _this.languageSelected + "/NS-LCM-1-G6-b.mp3");
        _this.Question2.appendChild(_this.Question2src);


        telInitializerbbpp.gameIdInit("NSN_LCM_1_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },


    create: function (game) {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.count1 = 0;

        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        // //* User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
        _this.microConcepts;
        //_this.grade;

        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.number;
        _this.position;
        _this.top1 = 0;
        _this.top2 = 0;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.repetition = 0;
        _this.Choice = 0;
        _this.Grouptile = _this.add.group();
        _this.tween1 = 0;
        _this.tween2 = 0;

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);
        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;

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
                _this.state.start('grade6NumberSystems', true, false);
            });
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            console.log("Hello");
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                _this.Ask_Question(_this.Choice);

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

        _this.generateStarsForTheScene(6);

        _this.time.events.add(2000, _this.getQuestion);

        _this.Counter_position = [55, 90, 125, 160, 195, 230, 265, 300, 335, 370, 405, 440, 475, 510, 545, 580, 615, 650, 685, 720, 755, 790];
        _this.Counter_position_emptyBox = [64, 100, 137, 173, 210, 246, 283, 319, 356, 393, 429, 466, 502, 539, 575, 612, 649, 686, 722, 759, 795, 832];

        _this.Question_option1 = [[2, 4, 4], [2, 6, 6], [2, 8, 8], [2, 10, 10], [2, 12, 12], [2, 14, 14], [2, 16, 16], [2, 18, 18], [2, 20, 20], [2, 22, 22], [3, 6, 6], [3, 9, 9], [3, 12, 12], [3, 18, 18], [3, 21, 21], [4, 8, 8], [4, 12, 12], [4, 16, 16], [4, 20, 20], [5, 10, 10], [5, 15, 15], [5, 20, 20], [6, 12, 12], [6, 18, 18], [7, 14, 14], [7, 21, 21], [8, 16, 16], [9, 18, 18]];

        _this.Question_option2 = [[2, 3, 6], [2, 5, 10], [2, 7, 14], [2, 9, 18], [2, 11, 22], [3, 4, 12], [3, 5, 15], [3, 7, 21], [4, 5, 20]];

        _this.Question_option3 = [[4, 6, 12], [6, 9, 18], [4, 10, 20]];
        _this.array_Questions;

        _this.AnswerBox = _this.add.sprite(840, 410, 'TextBox');
        _this.AnswerBox.visible = false;
    },

    Ask_Question: function (numberpad_is_up) {
        if (numberpad_is_up == 0) {
            _this.Question1.play();
        }
        else {
            _this.Question2.play();
        }
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

    shuffle2D: function (array, idx) {
        var array_number = [28, 9, 3, 6];
        var currentidx = array_number[idx];
        var temporaryValue, randomidx;

        //While there remain elements to shuffle...
        while (0 !== currentidx) {
            // Pick a remaining element...
            randomidx = Math.floor(Math.random() * currentidx);
            currentidx -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentidx][0];
            array[currentidx][0] = array[randomidx][0];
            array[randomidx][0] = temporaryValue;

            temporaryValue = array[currentidx][1];
            array[currentidx][1] = array[randomidx][1];
            array[randomidx][1] = temporaryValue;

            temporaryValue = array[currentidx][2];
            array[currentidx][2] = array[randomidx][2];
            array[randomidx][2] = temporaryValue;
        }

        return array;
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

        _this.randomizing_elements();
        _this.gotoMultiples(_this.repetition);

        _this.questionid =1;
    },



    stopVoice: function () {
        if (_this.Question1) {
            _this.Question1.pause();
            _this.Question1 = null;
            _this.Question1src = null;
        }

        if (_this.Question2) {
            _this.Question2.pause();
            _this.Question2 = null;
            _this.Question2src = null;
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
        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NS_LCM_1_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Numbers";
        _this.microConcepts = "Number Systems";
        _this.count1++;
        anim.play();
    },

    celebration: function () {
        _this.celebrationSound.play();
        _this.starActions(_this.count1);

    },

    randomizing_elements: function () {
        _this.shuffle2D(_this.Question_option1, 0);
        _this.shuffle2D(_this.Question_option2, 1);
        _this.shuffle2D(_this.Question_option3, 2);

        _this.array_Questions = [[_this.Question_option1[0][0], _this.Question_option1[0][1], _this.Question_option1[0][2]], [_this.Question_option1[1][0], _this.Question_option1[1][1], _this.Question_option1[1][2]], [_this.Question_option2[0][0], _this.Question_option2[0][1], _this.Question_option2[0][2]], [_this.Question_option2[1][0], _this.Question_option2[1][1], _this.Question_option2[1][2]], [_this.Question_option3[0][0], _this.Question_option3[0][1], _this.Question_option3[0][2]], [_this.Question_option3[1][0], _this.Question_option3[1][1], _this.Question_option3[1][2]]];

        _this.shuffle2D(_this.array_Questions, 3);
    },

    gotoMultiples: function (repetition) {
        _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        var index = Math.floor(Math.random() * 2);

        // _this.Big_Num = Math.floor(Math.random()*(160-3+1))+3;

        _this.Num1 = _this.array_Questions[repetition][index];

        console.log(" " + index + Number(!index));

        _this.Num2 = _this.array_Questions[repetition][Number(!index)];
        _this.answer = _this.array_Questions[repetition][2];
        _this.onScreenDisplay();
    },

    onScreenDisplay: function () {
        // * display empty counter box of size 22

        console.log("value of count1 is: " + _this.count1);
        if (_this.count1 <= 0)  //* only first time ask the question number 1.
        {
            console.log("asking question 1");
            _this.Ask_Question(0);

        }
        _this.Choice = 0;  //* if speaker button is pressed, let the firrst question play till numpad appears.
        _this.emptyBox1 = _this.add.sprite(55, 210, 'EmptyBox');
        _this.position_Box1 = 210;
        _this.emptyBox1.visible = false;

        _this.emptyBox2 = _this.add.sprite(55, 305, 'EmptyBox');
        _this.position_Box2 = 345;
        _this.emptyBox2.visible = true;

        _this.emptyBox1_Glow = _this.add.sprite(55, 210, 'EmptyBox_Glow');
        _this.emptyBox1_Glow.visible = true;

        _this.emptyBox2_Glow = _this.add.sprite(55, 305, 'EmptyBox_Glow');
        _this.emptyBox2_Glow.visible = false;


        _this.GroupCopy = _this.add.group();

        _this.Group1 = _this.add.group();
        _this.Group2 = _this.add.group();

        _this.Group_top = _this.add.group();
        _this.Group_bottom = _this.add.group();

        _this.redBox = _this.add.sprite(45, 75, 'RedBox');
        _this.largeTxt = _this.add.text(65, 90, _this.Num1);
        _this.largeTxt.fill = '#FFFFFF';

        // * display the counters based  on _this.largerNum 

        for (let i = 0; i < _this.Num1; i++) {
            let Counter = _this.add.sprite(_this.Counter_position[i], 160, 'FourColorBox');
            Counter.frame = 1;
            Counter.name = "1";
            Counter.inputEnabled = true;
            Counter.input.useHandCursor = true;
            Counter.events.onInputDown.add(_this.One_element_clicked, _this);
            _this.Group1.addChild(Counter);
        }

        for (let j = 0; j < _this.Num2; j++) {
            let Counter = _this.add.sprite(_this.Counter_position[j], 360, 'FourColorBox');
            Counter.frame = 0;
            Counter.name = "2";
            Counter.inputEnabled = false;
            Counter.events.onInputDown.add(_this.One_element_clicked, _this);
            _this.Group2.addChild(Counter);
        }

        _this.redBox = _this.add.sprite(45, 410, 'RedBox');
        _this.smallTxt = _this.add.text(65, 425, _this.Num2);
        _this.smallTxt.fill = '#FFFFFF';

        if (_this.tween1 == 0) {
            _this.time.events.add(1000, function () {
                _this.tempGroup = _this.add.group();

                for (let i = 0; i < _this.Num1; i++) {
                    let Counter = _this.add.sprite(0, 0, 'FourColorBox');
                    Counter.frame = 1;
                    Counter.x = _this.Group1.getChildAt(i).x;
                    Counter.y = _this.Group1.getChildAt(i).y;
                    _this.tempGroup.addChild(Counter);
                }

                _this.time.events.add(50, function () {
                    _this.hand = _this.add.image(_this.Group1.getChildAt(0).x, _this.Group1.getChildAt(0).y, 'hand');
                    _this.hand.scale.setTo(0.5, 0.5);
                    _this.tempGroup.addChild(_this.hand);
                });

                let CounterAnime = _this.add.tween(_this.tempGroup);
                CounterAnime.to({ x: +3, y: +55 }, 1250, 'Quart', false, 0);
                CounterAnime.onComplete.add(function () { _this.tempGroup.destroy(); });
                CounterAnime.start();
                _this.tween1 = 1;
            });
            _this.tween1 = 1;
        }
    },

    One_element_clicked: function (target) {
        target.bringToTop = true;
        _this.clickSound.play();
        target.events.onInputDown.removeAll();
        target.events.onDragUpdate.removeAll();
        target.events.onDragStop.removeAll();
        let length, frame;

        if (target.name === "1") {
            length = _this.Num1;
            frame = _this.Group1.getChildAt(0).frame;
        }
        else if (target.name === "2") {
            length = _this.Num2;
            frame = _this.Group2.getChildAt(0).frame;
        }

        for (let i = 0; i < length; i++) {
            let Counter = _this.add.sprite(0, 0, 'FourColorBox');
            if (length == _this.Num1) {
                Counter.frame = frame;
                Counter.x = _this.Group1.getChildAt(i).x;
                Counter.y = _this.Group1.getChildAt(i).y;
                if (frame == 1 && _this.top1 != 0)
                    _this.Group1.getChildAt(i).frame = 2;
                else
                    _this.Group1.getChildAt(i).frame = 1;
            }
            else {
                Counter.frame = frame;
                Counter.x = _this.Group2.getChildAt(i).x;
                Counter.y = _this.Group2.getChildAt(i).y;
                if (frame == 0 && _this.top2 != 0)
                    _this.Group2.getChildAt(i).frame = 3;
                else
                    _this.Group2.getChildAt(i).frame = 0;

            }
            _this.GroupCopy.addChild(Counter);
        }

        for (let i = 0; i < length; i++) {
            let Counter;
            if (length == _this.Num1) {
                Counter = _this.Group1.getChildAt(i);
                Counter.name = String(i) + "1";
            }
            else {
                Counter = _this.Group2.getChildAt(i);
                Counter.name = String(i) + "2";
            }
            Counter.input.enableDrag(true);
            Counter.events.onDragUpdate.add(_this.dragUpdate, Counter);
            Counter.events.onDragStop.add(function (target) {
                Counter.events.onDragStop.removeAll();
                Counter.events.onDragUpdate.removeAll();
                Counter.events.onInputDown.removeAll();
                if (target.y >= 200 && target.y <= 255 && length == _this.Num1 && _this.Group1.getChildAt(_this.Group1.length - 1).x >= 64 && _this.Group1.getChildAt(0).x <= 862 && _this.top1 <= 21 && _this.top1 <= _this.top2) {
                    for (var i = 0; i < length; i++) {
                        _this.Group1.getChildAt(i).name = "1";
                        _this.Group1.getChildAt(i).inputEnabled = true;
                        _this.Group1.getChildAt(i).input.enableDrag(false);
                        _this.Group1.getChildAt(i).x = _this.Counter_position_emptyBox[_this.top1++];
                        _this.Group1.getChildAt(i).y = 214;
                        _this.Group1.getChildAt(i).events.onInputDown.add(_this.One_element_clicked, _this);
                    }

                    for (var i = 0; i < length; i++) {
                        _this.Group_top.addChild(_this.GroupCopy.getChildAt(0));
                    }

                    if (_this.top1 == _this.top2) {
                        _this.counterCelebrationSound.play();
                        _this.emptyBox2_Glow.visible = false;
                        _this.emptyBox2.visible = true;
                        _this.emptyBox1.visible = true;
                        _this.emptyBox1_Glow.visible = false;
                        for (var i = 0; i < _this.Num1; i++) {
                            _this.Group1.getChildAt(i).inputEnabled = false;
                            _this.Group1.getChildAt(i).events.onInputDown.removeAll();
                        }
                        for (var i = 0; i < _this.Num2; i++) {
                            _this.Group2.getChildAt(i).inputEnabled = false;
                            _this.Group2.getChildAt(i).events.onInputDown.removeAll();
                        }

                        _this.time.events.add(500, function () {
                            if (_this.count1 == 0) _this.Ask_Question(1);
                            _this.Choice = 1;
                        });
                        _this.addNumberPad();
                    }
                    else if (_this.top1 < _this.top2) {
                        _this.emptyBox2_Glow.visible = false;
                        _this.emptyBox2.visible = true;
                        _this.emptyBox1.visible = false;
                        _this.emptyBox1_Glow.visible = true;
                    }
                    else {
                        for (var i = 0; i < _this.Num1; i++) {
                            _this.Group1.getChildAt(i).inputEnabled = false;
                        }
                        for (var i = 0; i < _this.Num2; i++) {
                            _this.Group2.getChildAt(i).inputEnabled = true;
                            _this.Group2.getChildAt(i).input.useHandCursor = true;
                        }
                        _this.emptyBox2_Glow.visible = true;
                        _this.emptyBox2.visible = false;
                        _this.emptyBox1.visible = true;
                        _this.emptyBox1_Glow.visible = false;
                    }
                    if (_this.top1 > _this.top2 && _this.top2 > 0 && _this.tween2 == 0) {
                        _this.time.events.add(400, function () {
                            _this.tempGroup = _this.add.group();
                            for (let i = 0; i < _this.Num2; i++) {
                                let Counter = _this.add.sprite(0, 0, 'FourColorBox');
                                Counter.frame = 0;
                                Counter.x = _this.Group2.getChildAt(i).x;
                                Counter.y = _this.Group2.getChildAt(i).y;
                                _this.tempGroup.addChild(Counter);
                            }
                            _this.time.events.add(0, function () {
                                _this.hand = _this.add.image(_this.Group2.getChildAt(0).x, _this.Group2.getChildAt(0).y, 'hand');
                                _this.hand.scale.setTo(0.5, 0.5);
                                _this.tempGroup.addChild(_this.hand);
                            });

                            let CounterAnime = _this.add.tween(_this.tempGroup);
                            CounterAnime.to({ x: _this.Counter_position_emptyBox[_this.top2] - 62 }, 1250, 'Quart', false, 0);
                            CounterAnime.onComplete.add(function () { _this.tempGroup.destroy(); });
                            CounterAnime.start();
                            _this.tween2 = 1;
                        });
                        _this.tween2 = 1;
                    }
                    else if (_this.top1 < _this.top2 && _this.top1 > 0 && _this.tween2 == 0) {
                        _this.time.events.add(400, function () {
                            _this.tempGroup = _this.add.group();
                            for (let i = 0; i < _this.Num2; i++) {
                                let Counter = _this.add.sprite(0, 0, 'FourColorBox');
                                Counter.frame = 0;
                                Counter.x = _this.Group1.getChildAt(i).x;
                                Counter.y = _this.Group1.getChildAt(i).y;
                                _this.tempGroup.addChild(Counter);
                            }
                            _this.time.events.add(0, function () {
                                _this.hand = _this.add.image(_this.Group1.getChildAt(0).x, _this.Group1.getChildAt(0).y, 'hand');
                                _this.hand.scale.setTo(0.5, 0.5);
                                _this.tempGroup.addChild(_this.hand);
                            });

                            let CounterAnime = _this.add.tween(_this.tempGroup);
                            CounterAnime.to({ x: _this.Counter_position_emptyBox[_this.top1] - 62 }, 1250, 'Quart', false, 0);
                            CounterAnime.onComplete.add(function () { _this.tempGroup.destroy(); });
                            CounterAnime.start();
                            _this.tween2 = 1;
                        });
                        _this.tween2 = 1;
                    }
                }
                else if (target.y >= 295 && target.y <= 360 && length == _this.Num2 && _this.Group1.getChildAt(_this.Group1.length - 1).x >= 64 && _this.Group1.getChildAt(0).x <= 862 && _this.top2 <= 21 && _this.top2 <= _this.top1) {
                    for (var i = 0; i < length; i++) {
                        _this.Group2.getChildAt(i).name = "2";
                        _this.Group2.getChildAt(i).inputEnabled = true;
                        _this.Group2.getChildAt(i).input.enableDrag(false);
                        _this.Group2.getChildAt(i).x = _this.Counter_position_emptyBox[_this.top2++];
                        _this.Group2.getChildAt(i).y = 309;
                        _this.Group2.getChildAt(i).events.onInputDown.add(_this.One_element_clicked, _this);
                    }
                    for (var i = 0; i < length; i++) {
                        _this.Group_bottom.addChild(_this.GroupCopy.getChildAt(0));
                    }
                    if (_this.top1 == _this.top2) {
                        _this.counterCelebrationSound.play();
                        _this.emptyBox2_Glow.visible = false;
                        _this.emptyBox2.visible = true;
                        _this.emptyBox1.visible = true;
                        _this.emptyBox1_Glow.visible = false;
                        for (var i = 0; i < _this.Num1; i++) {
                            _this.Group1.getChildAt(i).inputEnabled = false;
                            _this.Group1.getChildAt(i).events.onInputDown.removeAll();
                        }
                        for (var i = 0; i < _this.Num2; i++) {
                            _this.Group2.getChildAt(i).inputEnabled = false;
                            _this.Group2.getChildAt(i).events.onInputDown.removeAll();
                        }

                        _this.time.events.add(500, function () {
                            if (_this.count1 == 0) _this.Ask_Question(1);
                            _this.Choice = 1;
                        });

                        _this.addNumberPad();
                    }
                    else if (_this.top2 < _this.top1) {
                        _this.emptyBox2_Glow.visible = true;
                        _this.emptyBox2.visible = false;
                        _this.emptyBox1.visible = true;
                        _this.emptyBox1_Glow.visible = false;
                    }
                    else {
                        for (var i = 0; i < _this.Num1; i++) {
                            _this.Group1.getChildAt(i).inputEnabled = true;
                            _this.Group1.getChildAt(i).input.useHandCursor = true;
                        }
                        for (var i = 0; i < _this.Num2; i++) {
                            _this.Group2.getChildAt(i).inputEnabled = false;
                        }
                        _this.emptyBox2_Glow.visible = false;
                        _this.emptyBox2.visible = true;
                        _this.emptyBox1.visible = false;
                        _this.emptyBox1_Glow.visible = true;
                    }
                    if (_this.top1 > _this.top2 && _this.top2 > 0 && _this.tween2 == 0) {
                        _this.time.events.add(400, function () {
                            _this.tempGroup = _this.add.group();
                            for (let i = 0; i < _this.Num2; i++) {
                                let Counter = _this.add.sprite(0, 0, 'FourColorBox');
                                Counter.frame = 3;
                                Counter.x = _this.Group2.getChildAt(i).x;
                                Counter.y = _this.Group2.getChildAt(i).y;
                                _this.tempGroup.addChild(Counter);
                            }
                            _this.time.events.add(0, function () {
                                _this.hand = _this.add.image(_this.Group2.getChildAt(0).x, _this.Group2.getChildAt(0).y, 'hand');
                                _this.hand.scale.setTo(0.5, 0.5);
                                _this.tempGroup.addChild(_this.hand);
                            });

                            let CounterAnime = _this.add.tween(_this.tempGroup);
                            CounterAnime.to({ x: _this.Counter_position_emptyBox[_this.top2] - 62 }, 1250, 'Quart', false, 0);
                            CounterAnime.onComplete.add(function () { _this.tempGroup.destroy(); });
                            CounterAnime.start();
                            _this.tween2 = 1;
                        });
                        _this.tween2 = 1;
                    }
                    else if (_this.top1 < _this.top2 && _this.top1 > 0 && _this.tween2 == 0) {

                        _this.time.events.add(400, function () {
                            _this.tempGroup = _this.add.group();
                            for (let i = 0; i < _this.Num1; i++) {
                                let Counter = _this.add.sprite(0, 0, 'FourColorBox');
                                Counter.frame = 0;
                                Counter.x = _this.Group1.getChildAt(i).x;
                                Counter.y = _this.Group1.getChildAt(i).y;
                                _this.tempGroup.addChild(Counter);
                            }
                            _this.time.events.add(0, function () {
                                _this.hand = _this.add.image(_this.Group1.getChildAt(0).x, _this.Group1.getChildAt(0).y, 'hand');
                                _this.hand.scale.setTo(0.5, 0.5);
                                _this.tempGroup.addChild(_this.hand);
                            });

                            let CounterAnime = _this.add.tween(_this.tempGroup);
                            CounterAnime.to({ x: _this.Counter_position_emptyBox[_this.top1] - 62 }, 1250, 'Quart', false, 0);
                            CounterAnime.onComplete.add(function () { _this.tempGroup.destroy(); });
                            CounterAnime.start();
                            _this.tween2 = 1;
                        });
                        _this.tween2 = 1;
                    }
                }
                else {
                    if (length == _this.Num1) {
                        _this.Group1.destroy();
                        _this.Group1 = _this.add.group();
                        for (let i = 0; i < length; i++) {
                            let Counter = _this.GroupCopy.getChildAt(0);
                            Counter.inputEnabled = true;
                            Counter.input.useHandCursor = true;
                            _this.Group1.addChild(Counter);
                            Counter.name = "1";
                            Counter.events.onInputDown.add(_this.One_element_clicked, _this);
                        }
                    }
                    else {
                        _this.Group2.destroy();
                        _this.Group2 = _this.add.group();
                        for (let i = 0; i < length; i++) {
                            let Counter = _this.GroupCopy.getChildAt(0);
                            Counter.inputEnabled = true;
                            Counter.input.useHandCursor = true;
                            _this.Group2.addChild(Counter);
                            Counter.name = "2";
                            Counter.events.onInputDown.add(_this.One_element_clicked, _this);
                        }
                    }
                }
            }, _this);
        }
    },

    dragUpdate: function (Counter) {
        let frontpos = 1, backpos = 1;
        var number;
        var String = Number(Counter.name.substring(0, Counter.name.length - 1));

        if (Counter.name[Counter.name.length - 1] === "1") {
            number = _this.Num1;
        }
        else if (Counter.name[Counter.name.length - 1] === "2") {
            number = _this.Num2;
        }

        for (k = String + 1; k < number; k++) {
            if (number === _this.Num1) {
                _this.Group1.getChildAt(k).y = Counter.y;
                _this.Group1.getChildAt(k).x = Counter.x + 30 * frontpos;
            }
            else {
                _this.Group2.getChildAt(k).y = Counter.y;
                _this.Group2.getChildAt(k).x = Counter.x + 30 * frontpos;
            }
            frontpos++;

        }
        for (k = String - 1; k >= 0; k--) {
            if (number === _this.Num1) {
                _this.Group1.getChildAt(k).y = Counter.y;
                _this.Group1.getChildAt(k).x = Counter.x - 30 * backpos;
            }
            else {
                _this.Group2.getChildAt(k).y = Counter.y;
                _this.Group2.getChildAt(k).x = Counter.x - 30 * backpos;
            }
            backpos++;
        }
    },

    addNumberPad: function () {
        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        bottomnumpadbg.scale.setTo(1, 1);

        bottomnumpadbg.name = "numpadbg";

        _this.x = 70;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;

        for (var i = 0; i < 10; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.8, 0.8);
            _this.numbg.name = i + 1;
            _this.numbg.frame = i;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked, _this);

            _this.x += 73;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, 'Numberpad');
        _this.wrongbtn.frame = 10;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.8, 0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, 'Numberpad');
        _this.rightbtn.frame = 11;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.8, 0.8);
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

        _this.numpadTween = _this.add.tween(_this.numGroup);
        _this.AnswerBox.visible = true;
        //tween in the number pad after a second.
        _this.tweenNumPad();

    },

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.eraseScreen();
    },

    eraseScreen: function (target) {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.enterTxt.destroy();
        _this.enterTxt;
        _this.enterTxt.text = "";
    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },
    numClicked: function (target) {
        _this.clickSound.play();
        if (_this.selectedAns2 === '') {
            if (_this.selectedAns1 === 0 && target.name !== 0) {
                _this.selectedAns2 = target.name;
            }
            else if (_this.selectedAns1 !== '' && _this.selectedAns1 !== 0) {
                _this.selectedAns2 = target.name;
            }
            else if (_this.selectedAns1 !== 0 && target.name == 10) {
                _this.selectedAns1 = 0;
            }
            else {
                _this.selectedAns1 = target.name;
            }
        }

        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.enterTxt.visible = false;

        if (_this.selectedAns1 === 10) var_selectedAns1 = 0;
        else var_selectedAns1 = _this.selectedAns1;
        if (_this.selectedAns2 === 10) _this.selectedAns2 = 0;
        else var_selectedAns2 = _this.selectedAns2;


        if (_this.selectedAns1 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns1;

        if (_this.selectedAns2 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns2;

        _this.enterTxt = _this.add.text(15, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });

        _this.enterTxt.align = 'right';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.fontWeight = 'normal';
        _this.AnswerBox.addChild(_this.enterTxt);
        _this.enterTxt.visible = true;
    },

    rightbtnClicked: function () {
        _this.noofAttempts++;
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;
        _this.rightbtn_is_Clicked = true;
        if (Number('' + _this.selectedAns1 + _this.selectedAns2) === _this.answer) {
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.celebration();
            _this.repetition++;
            _this.top1 = 0;
            _this.top2 = 0;
            _this.time.events.add(2000, function () {
                _this.numGroup.destroy();
                _this.eraseScreen();
                _this.AnswerBox.visible = false;
                _this.Group1.destroy();
                _this.Group2.destroy();
                _this.Group_top.destroy();
                _this.Group_bottom.destroy();
                _this.GroupCopy.destroy();
                _this.smallTxt.destroy();
                _this.largeTxt.destroy();
                _this.emptyBox1.destroy();
                _this.emptyBox2.destroy();
                _this.emptyBox1_Glow.destroy();
                _this.emptyBox2_Glow.destroy();

            });

            if (_this.count1 < 6) {
                _this.time.events.add(2000, function () {
                    _this.rightbtn_is_Clicked = false;
                    _this.Choice = 0;
                    _this.speakerbtn.inputEnabled = true;
                    _this.gotoMultiples(_this.repetition);
                });
            }
            else {
                _this.timer1.stop();
                _this.timer1 = null;
                //_this.time.events.add(1000,function(){ window.parent.location.reload();});
                _this.time.events.add(900, function () {
                    //* transition to score. Score App version will show score menu - home/replay/next.
                    //* Score Diksha version will end the session and show the score.
                    //* appropriate version of the score should be present in commonjsfiles folder.
                    //_this.state.start('score');
                    _this.state.start('score', true, false, gameID, _this.microConcepts);
                });

            }
        }
        else {
            _this.wrongSound.play();
            _this.rightbtn.inputEnabled = true;
            _this.rightbtn.input.useHandCursor = true;
            _this.rightbtn_is_Clicked = false;
            _this.time.events.add(1000, function () {
                _this.Group1.destroy();
                _this.Group2.destroy();
                _this.Group_top.destroy();
                _this.Group_bottom.destroy();
                _this.GroupCopy.destroy();
                _this.top1 = 0;
                _this.top2 = 0;
                _this.numGroup.destroy();
                _this.eraseScreen();
                _this.AnswerBox.visible = false;
            });
            _this.time.events.add(2000, function () {
                _this.onScreenDisplay();
            });
        }
    },
}



