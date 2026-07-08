Game.NS_FM_4A_G6level1 = function () { };

Game.NS_FM_4A_G6level1.prototype =
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

        _this.boxHighlight = document.createElement('audio');
        _this.boxHighlightsrc = document.createElement('source');
        _this.boxHighlightsrc.setAttribute("src", window.baseUrl + "sounds/Next_option_sound.mp3");
        _this.boxHighlight.appendChild(_this.boxHighlightsrc);

        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-4A-G6/" +
            _this.languageSelected + "/NS-FM-4-G6-a.mp3");
        _this.Question1.appendChild(_this.Question1src);

        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-4A-G6/" +
            _this.languageSelected + "/NS-FM-4-G6-b.mp3");
        _this.Question2.appendChild(_this.Question2src);

        telInitializerbbpp.gameIdInit("NSN_FM_4A_G6", gradeSelected);
        console.log(gameID,"gameID...");
    },

    create: function (game) {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        console.log("inside create ..........//");
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
        console.log("vew demo");
        //* pause the game before going to the demovideo 
        _this.game.paused = true;
        _this.DemoVideo();  //* at the end of demo video/skip pressed, it will unpause the game.
    },


    gameCreate: function (game) {
        _this.AnsTimerCount = 0;
        _this.count1 = 0;

        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.number;
        _this.position;
        _this.top = 0;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.repetition = 0;
        _this.Choice = 0;
        _this.Grouptile = _this.add.group();
        _this.tween1 = 0;
        _this.tween2 = 0;
        _this.thumbs = 0;

        // //* BB plus variables
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
        // _this.microConcepts;
        // _this.grade;

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



        _this.Counter_position = [55, 90, 125, 160, 195, 230, 265, 300, 335, 370, 405, 440, 475, 510, 545, 580, 615, 650, 685, 720, 755, 790];

        _this.Counter_position_emptyBox = [64, 100, 137, 173, 210, 246, 283, 319, 356, 393, 429, 466, 502, 539, 575, 612, 649, 686, 722, 759, 795, 832];
        _this.Question_option1 = [[4, 2], [6, 2], [8, 2], [10, 2], [12, 2], [14, 2], [16, 2], [18, 2], [20, 2], [22, 2], [6, 3], [9, 3], [12, 3], [18, 3], [21, 3], [8, 4], [12, 4], [16, 4], [20, 4], [10, 5], [15, 5], [20, 5], [12, 6], [18, 6], [14, 7], [21, 7], [16, 8], [18, 9], [20, 10], [22, 11]];
        _this.Question_option2 = [[18, 4], [18, 5], [18, 7], [17, 2], [17, 3], [17, 4], [17, 5], [17, 6], [17, 7], [16, 3], [16, 5], [16, 6], [16, 7], [15, 7], [15, 6], [15, 4], [15, 2], [14, 6], [14, 5], [14, 4], [14, 3], [13, 6], [13, 5], [13, 4], [13, 3], [13, 2], [12, 3], [12, 5], [11, 2], [11, 3], [11, 4], [11, 5], [11, 6], [10, 3], [10, 4], [10, 6], [9, 2], [9, 4], [9, 5], [9, 6], [8, 3], [8, 5], [8, 6]];
        _this.array_Questions;

        _this.AnswerBox = _this.add.sprite(840, 410, 'TextBox');
        _this.AnswerBox.visible = false;

        _this.getQuestion();
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
        var array_number = [30, 43, 4];
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

        _this.questionid = 1;
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
        // _this.userHasPlayed = 1;
        // _this.game_id = 'NS_FM_4A_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
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
        _this.array_Questions = [[_this.Question_option1[0][0], _this.Question_option1[0][1]], [_this.Question_option1[1][0], _this.Question_option1[1][1]], [_this.Question_option2[0][0], _this.Question_option2[0][1]], [_this.Question_option2[1][0], _this.Question_option2[1][1]]];
        _this.shuffle2D(_this.array_Questions, 2);
    },

    gotoMultiples: function (repetition) {
        _this.sceneCount++;
        _this.noofAttempts =0;
        _this.AnsTimerCount=0;
        _this.Num1 = _this.array_Questions[repetition][0];
        _this.Num2 = _this.array_Questions[repetition][1];
        _this.onScreenDisplay();
    },

    onScreenDisplay: function () {
        if (_this.count1 == 0) _this.Ask_Question(0);  //* ask this Qstn only for first question.
        _this.Choice = 0;

        _this.Qst_emptyBox = _this.add.sprite(55, 160, 'EmptyBox');
        _this.emptyBox = _this.add.sprite(55, 210, 'EmptyBox');
        _this.position_Box = 210;
        _this.emptyBox.visible = false;

        _this.emptyBox_Glow = _this.add.sprite(55, 210, 'EmptyBox_Glow');
        _this.emptyBox_Glow.visible = true;

        _this.GroupCopy = _this.add.group();

        _this.Group = _this.add.group();
        _this.Group_top = _this.add.group();
        _this.Group_Multiple = _this.add.group();

        _this.redBox = _this.add.sprite(45, 75, 'RedBox');
        _this.largeTxt = _this.add.text(65, 90, _this.Num1);
        _this.largeTxt.fill = '#FFFFFF';

        // * display the counters based  on _this.largerNum 
        for (let i = 0; i < _this.Num1; i++) {
            let Counter = _this.add.sprite(_this.Counter_position_emptyBox[i], 165, 'FourColorBox');
            _this.Group_Multiple.addChild(Counter);
            Counter.frame = 0;
        }

        for (let j = 0; j < _this.Num2; j++) {
            let Counter = _this.add.sprite(_this.Counter_position_emptyBox[j], 360, 'FourColorBox');
            Counter.frame = 1;
            Counter.name = String(j);
            Counter.inputEnabled = true;
            Counter.input.useHandCursor = true;
            Counter.events.onInputDown.add(_this.One_element_clicked, _this);
            _this.Group.addChild(Counter);
        }

        _this.redBox = _this.add.sprite(45, 410, 'RedBox');
        _this.smallTxt = _this.add.text(65, 425, _this.Num2);
        _this.smallTxt.fill = '#FFFFFF';

        if (_this.tween1 == 0) {
            for (let i = 0; i < _this.Num2; i++) {
                let Counter = _this.add.sprite(0, 0, 'FourColorBox');
                Counter.frame = 1;
                Counter.x = _this.Group.getChildAt(i).x;
                Counter.y = _this.Group.getChildAt(i).y;
                let CounterAnime = _this.add.tween(Counter);
                CounterAnime.to({ x: _this.Counter_position_emptyBox[i], y: 214 }, 1250, 'Quart', false, 0);
                CounterAnime.onComplete.add(function () { Counter.destroy(); });
                CounterAnime.start();
            }
            _this.tween1 = 1;
        }
    },

    One_element_clicked: function (target) {
        target.bringToTop = true;
        _this.clickSound.play();
        target.events.onInputDown.removeAll();
        target.events.onDragUpdate.removeAll();
        target.events.onDragStop.removeAll();
        let length = _this.Num2;
        let frame = _this.Group.getChildAt(0).frame;

        for (let i = 0; i < length; i++) {
            let Counter = _this.add.sprite(0, 0, 'FourColorBox');
            Counter.frame = frame;
            Counter.x = _this.Group.getChildAt(i).x;
            Counter.y = _this.Group.getChildAt(i).y;
            if (frame == 1 && _this.top != 0)
                _this.Group.getChildAt(i).frame = 2;
            else
                _this.Group.getChildAt(i).frame = 1;
            _this.GroupCopy.addChild(Counter);
        }

        for (let i = 0; i < length; i++) {
            let Counter;
            Counter = _this.Group.getChildAt(i);
            Counter.name = String(i);
            Counter.input.enableDrag(true);
            Counter.events.onDragUpdate.add(_this.dragUpdate, Counter);
            Counter.events.onDragStop.add(function (target) {
                Counter.events.onDragStop.removeAll();
                Counter.events.onDragUpdate.removeAll();
                Counter.events.onInputDown.removeAll();
                if (target.y >= 200 && target.y <= 255 && _this.Group.getChildAt(_this.Group.length - 1).x >= 64 && _this.Group.getChildAt(0).x <= 862 && _this.top <= 22) {
                    for (var i = 0; i < length; i++) {
                        _this.Group.getChildAt(i).inputEnabled = true;
                        _this.Group.getChildAt(i).input.useHandCursor = true;
                        _this.Group.getChildAt(i).input.enableDrag(false);
                        _this.Group.getChildAt(i).name = String(i);
                        _this.Group.getChildAt(i).x = _this.Counter_position_emptyBox[_this.top++];
                        _this.Group.getChildAt(i).y = 214;
                        _this.Group.getChildAt(i).events.onInputDown.add(_this.One_element_clicked, _this);
                    }
                    for (var i = 0; i < length; i++) {
                        _this.Group_top.addChild(_this.GroupCopy.getChildAt(0));
                    }
                    _this.time.events.add(500, function (top) {
                        if (_this.tween2 == 0 && _this.top > 0) {
                            for (let i = 0; i < _this.Num2; i++) {
                                let Counter = _this.add.sprite(0, 0, 'FourColorBox');
                                Counter.frame = 2;
                                Counter.x = _this.Group.getChildAt(i).x;
                                Counter.y = _this.Group.getChildAt(i).y;
                                let CounterAnime = _this.add.tween(Counter);
                                CounterAnime.to({ x: _this.Counter_position_emptyBox[i + _this.top], y: 214 }, 1250, 'Quart', false, 0);
                                CounterAnime.onComplete.add(function () { Counter.destroy(); });
                                CounterAnime.start();
                            }
                            _this.tween2 = 1;
                        }
                    }, _this.top);
                    if (_this.top >= _this.Num1) {
                        //* play positive or negative sound based on whether it is a factor or not.
                        if (_this.top == _this.Num1) _this.counterCelebrationSound.play();
                        else _this.counterCelebrationSound.play();

                        _this.emptyBox.visible = true;
                        _this.emptyBox_Glow.visible = false;
                        for (var i = 0; i < length; i++) {
                            _this.Group.getChildAt(i).inputEnabled = false;
                        }

                        _this.time.events.add(800, function (top) {
                            _this.evaluation();
                        });
                    }
                }
                else {
                    _this.Group.destroy();
                    _this.Group = _this.add.group();
                    for (let i = 0; i < length; i++) {
                        let Counter = _this.GroupCopy.getChildAt(0);
                        Counter.inputEnabled = true;
                        Counter.name = String(i);
                        Counter.input.useHandCursor = true;
                        _this.Group.addChild(Counter);
                        Counter.events.onInputDown.add(_this.One_element_clicked, _this);
                    }
                }
            }, _this);
        }
    },

    dragUpdate: function (Counter) {
        let frontpos = 1, backpos = 1;
        var number = _this.Num2;

        for (let k = Number(Counter.name) + 1; k < number; k++) {
            _this.Group.getChildAt(k).y = Counter.y;
            _this.Group.getChildAt(k).x = Counter.x + 30 * frontpos;
            frontpos++;
        }
        for (let k = Number(Counter.name) - 1; k >= 0; k--) {
            _this.Group.getChildAt(k).y = Counter.y;
            _this.Group.getChildAt(k).x = Counter.x - 30 * backpos;
            backpos++;
        }
    },

    evaluation: function () {
        if (_this.count1 == 0) _this.Ask_Question(1);
        _this.Choice = 1;
        _this.ThumbsDown = _this.add.sprite(800, 310, 'thumbsdown');
        _this.ThumbsUp = _this.add.sprite(725, 310, 'thumbsup');
        _this.rightbtn = _this.add.sprite(775, 425, 'rightbtn');
        _this.ThumbsDown.inputEnabled = true;
        _this.ThumbsUp.inputEnabled = true;
        _this.ThumbsUp.input.useHandCursor = true;
        _this.ThumbsDown.input.useHandCursor = true;

        _this.ThumbsDown.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.thumbs = 2;
            _this.ThumbsUp.frame = 0;
            _this.ThumbsDown.frame = 1;
        });
        _this.ThumbsUp.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.thumbs = 1;
            _this.ThumbsDown.frame = 0;
            _this.ThumbsUp.frame = 1;
        });
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(function () {
            _this.rightbtn.events.onInputDown.removeAll();

            _this.rightbtn.inputEnabled = false;
            _this.clickSound.play();
            _this.rightbtn.frame = 1;
            _this.ThumbsDown.inputEnabled = false;
            _this.ThumbsUp.inputEnabled = false;
            if ((_this.Num1 % _this.Num2 == 0 && _this.thumbs == 1) || (_this.Num1 % _this.Num2 != 0 && _this.thumbs == 2)) {
                let Group_Multiples1 = _this.add.group();
                let Group_Multiples2 = _this.add.group();
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.input.useHandCursor = true;
                _this.rightbtn_is_Clicked = false;

                _this.noofAttempts ++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.time.events.add(500, function () {
                    _this.celebration();
                });

                let k = 1;

                _this.time.events.add(500, function () {
                    if (_this.Num2 % 2 != 0) {
                        for (let i = 0; i < _this.top; i = i + Math.ceil(_this.Num2 / 2)) {
                            i = i + Math.floor(_this.Num2 / 2);
                            console.log(_this.Counter_position_emptyBox[i]);
                            let Multiples1 = _this.add.sprite(_this.Counter_position_emptyBox[i] - 8, 250, 'Numberbox');
                            if (_this.Num2 * k >= 10)
                                Multiples2 = _this.add.text(_this.Counter_position_emptyBox[i] + 2, 260, _this.Num2 * k++);
                            else
                                Multiples2 = _this.add.text(_this.Counter_position_emptyBox[i] + 12, 260, _this.Num2 * k++);
                            Group_Multiples1.addChild(Multiples1);
                            Group_Multiples2.addChild(Multiples2);

                        }
                    }
                    else {
                        for (let i = 0; i < _this.top; i = i + Math.ceil(_this.Num2 / 2)) {
                            i = i + Math.floor(_this.Num2 / 2);
                            console.log(_this.Counter_position_emptyBox[i]);
                            let Multiples1 = _this.add.sprite(_this.Counter_position_emptyBox[i] - 23, 260, 'Numberbox');

                            if (_this.Num2 * k >= 10)
                                Multiples2 = _this.add.text(_this.Counter_position_emptyBox[i] - 11, 270, _this.Num2 * k++);
                            else
                                Multiples2 = _this.add.text(_this.Counter_position_emptyBox[i] - 4, 270, _this.Num2 * k++);

                            Group_Multiples1.addChild(Multiples1);
                            Group_Multiples2.addChild(Multiples2);
                        }
                    }
                });

                _this.time.events.add(3000, function () {
                    _this.ThumbsDown.destroy();
                    _this.ThumbsUp.destroy();
                    _this.rightbtn.destroy();
                    _this.Group_top.destroy();
                    _this.Group.destroy();
                    _this.GroupCopy.destroy();
                    _this.largeTxt.destroy();
                    _this.smallTxt.destroy();
                    _this.repetition++;
                    _this.top = 0;
                    Group_Multiples1.destroy();
                    Group_Multiples2.destroy();
                    _this.Group_Multiple.destroy();
                    _this.Choice = 0;

                    if (_this.count1 < 3) {
                        _this.gotoMultiples(_this.repetition);
                    }
                    else {
                        _this.timer1.stop();
                        _this.state.start('NS_FM_4B_G6level1', false, false, _this.minutes, _this.seconds, _this.counterForTimer);
                    }
                });
            }
            else {
                _this.noofAttempts ++;
                _this.wrongSound.play();
                _this.time.events.add(2000, function () {
                    _this.rightbtn.inputEnabled = true;
                    _this.rightbtn.input.useHandCursor = true;
                    _this.rightbtn_is_Clicked = false;
                    _this.ThumbsDown.destroy();
                    _this.ThumbsUp.destroy();
                    _this.rightbtn.destroy();
                    _this.Group_top.destroy();
                    _this.Group.destroy();
                    _this.GroupCopy.destroy();
                    _this.Choice = 0;
                    _this.top = 0;
                    _this.onScreenDisplay();
                });
            }
        });
    },

    stopAudio: function () {
        if (_this.q2Timer) clearTimeout(_this.q2Timer);
        if (_this.q4Timer) clearTimeout(_this.q4Timer);

        if (_this.demoAudio1) {
            console.log("removing the audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1.removeEventListener('ended', _this.dA1);
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.q1Sound) {
            console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }

        if (_this.q2Sound) {
            console.log("removing the q2");
            _this.q2Sound.pause();
            _this.q2Sound.removeEventListener('ended', _this.q2S);
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }

        if (_this.q3Sound) {
            console.log("removing the q3");
            _this.q3Sound.pause();
            _this.q3Sound = null;
            _this.q3Soundsrc = null;
        }

        if (_this.q4Sound) {
            console.log("removing the q4");
            _this.q4Sound.pause();
            _this.q4Sound.removeEventListener('ended', _this.q4S);
            _this.q4Sound = null;
            _this.q4Soundsrc = null;
        }

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();
    },

    q2S: function () {
        //_this.demoVideo_2.play(false);
        _this.q2Sound.removeEventListener('ended', _this.q2S);
        _this.demoVideo_2.playbackRate = 1;
    },

    q4S: function () {
        _this.q4Sound.removeEventListener('ended', _this.q4S);
        _this.demoVideo_3.playbackRate = 1;
    },

    DemoVideo: function () {

        _this.clickSound = document.createElement('audio');
        _this.clickSoundsrc = document.createElement('source');
        _this.clickSoundsrc.setAttribute("src", window.baseUrl + "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.screen_opening = document.createElement('audio');
        _this.screen_openingsrc = document.createElement('source');
        _this.screen_openingsrc.setAttribute("src", window.baseUrl + "sounds/screen opening.wav");
        _this.screen_opening.appendChild(_this.screen_openingsrc);

        //* this is a game of multiples
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-4A-G6/" +
            _this.languageSelected + "/NS-FM-4B-G6 Demo.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);


        //* let us find if the bigger number a multiple of smaller one
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-4A-G6/" +
            _this.languageSelected + "/NS-FM-4-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* is the smaller number factor of bigger number?
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-4A-G6/" +
            _this.languageSelected + "/NS-FM-4-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* let us find if the larger number is a multiple of smaller number (4B game)
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-4B-G6/" +
            _this.languageSelected + "/NS-FM-4B-G6-a.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        //* number in the question is a multiple of which of the number options..(4B game)
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-4B-G6/" +
            _this.languageSelected + "/NS-FM-4B-G6-b.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();

        _this.skip = _this.add.image(870, 490, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.stopAudio();

            if (_this.demoVideo_1)
                _this.demoVideo_1.stop(false);
            if (_this.videoWorld1)
                _this.videoWorld1.destroy();

            if (_this.demoVideo_2)
                _this.demoVideo_2.stop(false);
            if (_this.videoWorld2)
                _this.videoWorld2.destroy();

            if (_this.demoVideo_3)
                _this.demoVideo_3.stop(false);
            if (_this.videoWorld3)
                _this.videoWorld3.destroy();

            _this.game.paused = false;  //* restart the game
        });

    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('fm_4_1');

        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NS-FM-4-G6_1.mp4");
        _this.videoWorld1 = _this.demoVideo_1.addToWorld();
        _this.video_playing = 1;
        // _this.demoVideo_1.playbackRate = 0.35;  

        _this.demoAudio1.play();

        _this.demoAudio1.addEventListener('ended', function()
        {
            _this.q1Sound.play();
        })

        _this.demoVideo_2 = _this.add.video('fm_4_2');
        _this.demoVideo_1.onComplete.add(function () {
            if (_this.demoVideo_1) _this.demoVideo_1.stop(false);
            _this.demoVideo_2.play(false);
            _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/NS-FM-4-G6_2.mp4");
            _this.videoWorld2 = _this.demoVideo_2.addToWorld();
            _this.video_playing = 2;

            _this.skip.bringToTop();
          
            _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 27 seconds.
            {
                console.log("inside q2sound.....")
                clearTimeout(_this.q2Timer);
                //_this.demoVideo_2.playbackRate = 0;      //* clear the time once its used.
                _this.q2Sound.play();
            }, 8000);

            _this.demoVideo_3 = _this.add.video('fm_4_3');
            _this.demoVideo_2.onComplete.add(function () {
                if (_this.demoVideo_2) _this.demoVideo_2.stop(false);
                _this.demoVideo_3.play(false);
                _this.demoVideo_3.changeSource(window.baseUrl + "assets/demoVideos/NS-FM-4-G6_3.mp4");
                _this.videoWorld3 = _this.demoVideo_3.addToWorld();
                _this.video_playing = 3;

                _this.skip.bringToTop();

                _this.q3Sound.play();

                _this.q4Timer = setTimeout(function ()    //* q3 js timer to play q3Timer after 47 seconds.
                {
                    console.log("inside q3sound.....")
                    clearTimeout(_this.q4Timer);
                    _this.demoVideo_3.playbackRate = 0;         //* clear the time once its used.
                    _this.q4Sound.play();
                }, 15000);

                _this.q4Sound.addEventListener('ended', _this.q4S);

                _this.demoVideo_3.onComplete.add(function () {
                    if (_this.demoVideo_3) _this.demoVideo_3.stop(false);
                    console.log("v3 over trigger the game");
                    if (_this.demoVideo_3) _this.demoVideo_3.stop(false);
                    _this.stopAudio();

                    if (_this.videoWorld1) {
                        _this.videoWorld1.destroy();
                    }
                    if (_this.videoWorld2) {
                        _this.videoWorld2.destroy();
                    }

                    if (_this.videoWorld3) {
                        _this.videoWorld3.destroy();
                    }
                    if (_this.demoVideo_1)
                        _this.demoVideo_1.stop(false);

                    if (_this.demoVideo_2)
                        _this.demoVideo_2.stop(false);

                    if (_this.demoVideo_3)
                        _this.demoVideo_3.stop(false);

                    _this.game.paused = false;
                });
            });

        });

    },
}



