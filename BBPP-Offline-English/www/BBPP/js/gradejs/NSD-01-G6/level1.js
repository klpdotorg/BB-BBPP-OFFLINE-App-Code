Game.NSD_1_G6level1 = function () { };


Game.NSD_1_G6level1.prototype =
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

        _this.framechange = document.createElement('audio');
        _this.framechangesrc = document.createElement('source');
        _this.framechangesrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.framechange.appendChild(_this.framechangesrc);

        _this.snapSound = document.createElement('audio');
        _this.snapSoundsrc = document.createElement('source');
        _this.snapSoundsrc.setAttribute("src", window.baseUrl + "sounds/snapSound.mp3");
        _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.Ask_Question1 = _this.createAudio("NSD-1-G6A");
        _this.Ask_Question2 = _this.createAudio("NSD-1-G6B");
        _this.Ask_Question3 = _this.createAudio("NSD-1-G6C");

        telInitializerbbpp.gameIdInit("NSD_01_G6", gradeSelected);
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

        // //*  User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
       _this.microConcepts;
        // _this.grade;

        _this.counterForTimer = 0;

        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.Question_flag = -1;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';
        _this.fourNotEntered = false


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
        // 1 - Type 1 ques  2- Type 2 ques 1st ques to be type 1

        _this.BlueFishPositionArray_X = [75 - 28, 145 - 35, 215 - 40, 285 - 45];
        // _this.FishPositionArray_y = [90, 130, 170, 210, 250];
        _this.FishPositionArray_y = [90 + 20, 130 + 20, 170 + 20, 210 + 20, 250 + 20];

        _this.RedFishPositionArray_X = [595 + 70, 665 + 65, 735 + 60, 805 + 60];

        _this.AnsFishPositionArray_X = [350, 418, 488, 558];
        _this.AnsFishPositionArray_Y = [250, 210, 170, 130, 90]


        _this.ValueZArray = [];
        _this.ValueYArray = [];
        _this.ValueXArray = [];

        _this.firstType1 = false
        _this.firstType2 = false

        _this.type21demoshown = false;
        _this.type22demoshown = false;
        _this.type1demoshown = false;



        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);
    },


    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-01-G6/" + _this.languageSelected + "/" + src + ".mp3");
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

        _this.Randomize();

        // _this.CallingFIBFn()

        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1;

    },

    stopVoice: function () {
        if (_this.Ask_Question1) {
            _this.Ask_Question1.pause();
            _this.Ask_Question1 = null;
        }
        if (_this.Ask_Question2) {
            _this.Ask_Question2.pause();
            _this.Ask_Question2 = null;
        }
        if (_this.Ask_Question3) {
            _this.Ask_Question3.pause();
            _this.Ask_Question3 = null;
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
    showfractionbox: function (addvar, yvalue) {
        _this.onebox = true

        _this.AnswerBox = _this.add.image(addvar, 380 + yvalue, 'white-box');
        _this.AnswerBox.scale.setTo(1.3, 1)
        _this.AnswerBox.frame = 1;
        _this.twofractionboxes = false;

    },
    showfraction2Boxes: function (addvar) {
        _this.twofractionboxes = true;
        _this.onebox = false;

        _this.AnswerBox = _this.add.image(addvar, 360, 'white-box');
        _this.AnswerBox.scale.setTo(1.3, 1)

        _this.AnswerBox.frame = 1;
        _this.q1 = true;

        _this.AnswerBox.inputEnabled = true;
        _this.AnswerBox.input.useHandCursor = true;
        _this.AnswerBox.events.onInputDown.add(function () {
            _this.AnswerBox.frame = 1;
            _this.AnswerBox1.frame = 0;
            _this.q2 = false;
            _this.clickSound.play();

            if (_this.AnswerBox.name == '') {
                _this.fourNotEntered = false
                _this.q1 = true;
                _this.q2 = false;
                _this.selectedAns2 = '';
                _this.selectedAns1 = '';
                _this.selectedAns3 = '';

            }
        });


        _this.divideSign = _this.add.graphics();
        _this.divideSign.lineStyle(4, 0x65B4C3);
        _this.divideSign.moveTo(addvar + 5, 370 + 43);
        _this.divideSign.lineTo(addvar + 62, 370 + 43);

        _this.AnswerBox1 = _this.add.image(addvar, 415, 'white-box');
        _this.AnswerBox1.scale.setTo(1.3, 1)

        _this.AnswerBox1.inputEnabled = true;
        _this.AnswerBox1.input.useHandCursor = true;
        _this.AnswerBox1.events.onInputDown.add(function () {
            _this.AnswerBox.frame = 0;
            _this.AnswerBox1.frame = 1;
            _this.q1 = false;
            _this.clickSound.play();

            if (_this.AnswerBox1.name == '') {
                _this.fourNotEntered = false
                _this.q2 = true;
                _this.q1 = false;
                _this.selectedAns2 = '';
                _this.selectedAns1 = '';
                _this.selectedAns3 = '';

            }
        });


    },
    StoreArrayValues: function () {
        // if (_this.count1 == 0) {
        rightValueX = 0;
        rightValueY = 0
        rightValueZ = 0
        Value1Array = [];
        Value10Array = [];
        Value100Array = [];

        _this.got = false;
        for (let i = 0; i < 6; i++) {
            if (i == 2) {
                Value10Array[i] = 0;
                Value100Array[i] = 0;
                Value1Array[i] = 1;


            }
            else {
                if (i < 2) {
                    Value1Array[i] = 0;

                }
                else {
                    Value1Array[i] = 1;

                }
                // Value between 0.1 to 0.99
                if (Value10Array.includes(0)) {

                    for (k = 0; k < i; k++) {
                        if (Value10Array[k] == 0 && k == 2) {
                            // Dont do anything
                        }
                        else if (Value10Array[k] == 0 && k != 2) {
                            _this.got = true;
                            randomVal = Math.floor(Math.random() * (99 - 10) + 10);

                        }

                    }

                }
                else {
                    randomVal = Math.floor(Math.random() * (99 - 1) + 1);

                }
                if (i > 1) {
                    var j = 0;
                    for (j = 0; j < i; j++) {

                        if ((randomVal == Value10Array[j] * 10 + Value100Array[j])) {
                            if (_this.got == false && i != 5)
                                randomVal = Math.floor(Math.random() * (99 - 1) + 1);
                            else if (_this.got == false && i == 5)
                                randomVal = Math.floor(Math.random() * (9 - 1) + 1);
                            else
                                randomVal = Math.floor(Math.random() * (99 - 10) + 10);

                            j = 0;
                        }
                        if (i == 5 && _this.got == false && Math.floor(randomVal / 10 != 0)) {
                            // No such element with 0 green stripes
                            randomVal = Math.floor(Math.random() * (9 - 1) + 1);
                            if (Math.random(randomVal / 10 == 0))
                                _this.got = true;

                            j = 0;

                        }
                    }

                }


                Value100Array[i] = randomVal % 10;
                Value10Array[i] = (randomVal - Value100Array[i]) / 10;

            }

        }
        console.log(Value1Array)
        console.log(Value10Array)
        console.log(Value100Array)


    },
    showQuesBox: function () {
        _this.questionBox = _this.add.sprite(840, 70, 'Text box_3');
        _this.questionBox.scale.setTo(0.32, 0.32)


        if (_this.count1 > 2) {
            _this.text1 = _this.add.text(855, 90, '1');
            _this.applyingStyle(_this.text1)
            _this.text1.fill = '#FF0000';

            if (Value10Array[_this.count1] * 10 + Value100Array[_this.count1] > 9)
                _this.text2 = _this.add.text(880, 80, Value10Array[_this.count1] * 10 + Value100Array[_this.count1])
            else {
                _this.text2 = _this.add.text(885, 80, Value10Array[_this.count1] * 10 + Value100Array[_this.count1])

            }
            _this.applyingStyle(_this.text2)
            _this.text2.fontSize = "22px";
            _this.text2.fill = '#FF0000';

            _this.lineq = _this.add.graphics();
            _this.lineq.lineStyle(2, 0xFF0000);
            _this.lineq.moveTo(880 - 6, 105);
            _this.lineq.lineTo(880 + 33, 105);


            _this.text3 = _this.add.text(880 - 7, 105, '100')

            _this.applyingStyle(_this.text3)
            _this.text3.fontSize = "22px";
            _this.text3.fill = '#FF0000';
        }
        else {

            if (_this.count1 == 2) {
                _this.text2 = _this.add.text(867, 80, '100')

            }
            else if (Value10Array[_this.count1] * 10 + Value100Array[_this.count1] > 9)
                _this.text2 = _this.add.text(868 + 6, 80, Value10Array[_this.count1] * 10 + Value100Array[_this.count1])
            else
                _this.text2 = _this.add.text(868 + 11, 80, Value10Array[_this.count1] * 10 + Value100Array[_this.count1])

            _this.applyingStyle(_this.text2)
            _this.text2.fontSize = "22px";
            _this.text2.fill = '#FF0000';

            _this.lineq = _this.add.graphics();
            _this.lineq.lineStyle(2, 0xFF0000);
            _this.lineq.moveTo(882 - 13, 105);
            _this.lineq.lineTo(882 + 28 - 5, 105);

            _this.text3 = _this.add.text(867, 105, '100')

            _this.applyingStyle(_this.text3)
            _this.text3.fontSize = "22px";
            _this.text3.fill = '#FF0000';
        }


    },
    Randomize: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        _this.tableNotshown = true;
        _this.secondPartNotShown = true;
        if (_this.count1 < 2) {
            _this.grayBox = _this.add.sprite(300, 70, 'gray-box')
            _this.makeGrayBox();
            _this.showfraction2Boxes(400);
            _this.addNumberPad();
        }
        else if (_this.count1 == 2) {
            _this.yellowBox = _this.add.sprite(300, 70, 'yellow-box')
            _this.yellowBox.frame = 1;
            _this.showfraction2Boxes(400);
            _this.addNumberPad();
        }
        else {
            _this.yellowBox = _this.add.sprite(160, 60, 'yellow-box')
            _this.grayBox = _this.add.sprite(520, 70, 'gray-box')
            _this.showfractionbox(270, 0);
            _this.makeGrayBox();
            _this.addNumberPad();
        }
        if (_this.count1 == 0) {

            _this.Ask_Question1.play();
        }
        _this.Question_flag = 1;

    },

    makeGrayBox: function () {

        for (i = 0; i < Value10Array[_this.count1]; i++) {
            var greenbox = _this.add.sprite(0, 246 - i * 27.3, 'green-box')
            greenbox.scale.setTo(1, 0.98)
            _this.grayBox.addChild(greenbox)

        }
        for (i = 0; i < Value100Array[_this.count1]; i++) {
            if (Value10Array[_this.count1] >= 1)
                var orangebox = _this.add.sprite(i * 27.3, _this.grayBox.getChildAt(Value10Array[_this.count1] - 1).y - 26, 'orange-box')
            else
                var orangebox = _this.add.sprite(i * 27.3, 246 - 0 * 27.3, 'orange-box')

            orangebox.scale.setTo(0.98, 1)
            _this.grayBox.addChild(orangebox)
        }
    },
    rightbtnClicked: function () {
        _this.noofAttempts++;
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        _this.rightbtn_is_Clicked = true;
        if (_this.count1 <= 2 && _this.tableNotshown == true) {
            // evalaute and then show table if correct
            _this.Validation1();
        }
        else if (_this.count1 > 2 && _this.secondPartNotShown == true) {
            // enable fraction box 2
            _this.validate();
        }
        else if (_this.count1 > 2 && _this.tableNotshown == true) {
            _this.Validation1();
        }
        else if (_this.tableNotshown == false) {
            if (_this.part1 == true) {
                // whole number part entered evaluate
                if (_this.AnswerBox.name === Value1Array[_this.count1]) {
                    _this.part1 = false;
                    _this.part2 = true;
                    _this.box1 = _this.AnswerBox
                    _this.AnswerBox.frame = 0;
                    _this.celebrate();
                    _this.showfractionbox(340, 12);
                    _this.fourNotEntered = false;
                    _this.rightbtn.inputEnabled = true;

                }
                else {
                    _this.removeboth = false;
                    _this.wrongSelected();

                }
            }
            else if (_this.part2 == true) {
                // 1/10th entered

                if (_this.AnswerBox.name === Value10Array[_this.count1]) {
                    _this.part2 = false;
                    _this.part3 = true;
                    _this.box2 = _this.AnswerBox
                    _this.AnswerBox.frame = 0;
                    _this.celebrate();
                    _this.fourNotEntered = false;
                    _this.showfractionbox(550, 12);
                    _this.rightbtn.inputEnabled = true;

                }
                else {
                    _this.removeboth = false;
                    _this.wrongSelected();
                }
            }
            else if (_this.part3 == true) {

                if (_this.AnswerBox.name === Value100Array[_this.count1]) {
                    _this.part3 = false;
                    _this.finalAns = true;
                    _this.box3 = _this.AnswerBox
                    _this.AnswerBox.frame = 0;
                    _this.celebrate();
                    _this.showQuesBox()
                    _this.showfinalAnswer();
                    _this.rightbtn.inputEnabled = true;
                    _this.fourNotEntered = false;

                }
                else {
                    _this.removeboth = false;
                    _this.wrongSelected();
                }
            }
            else if (_this.finalAns == true) {
                // final answer is entered

                if (_this.count1 == 2) {
                    if (_this.finalval == '1.00' || _this.finalval == '1.0' || _this.finalval == '1' || _this.finalval == '1.') {

                        if (_this.finalval == '1.') {
                            // Make it 1.0
                            _this.AnswerBox.removeChild(_this.enterTxt)
                            _this.enterTxt.visible = false;
                            _this.enterTxt = _this.add.text(21, 8, "" + "1.0", { fontSize: '30px' });
                            _this.applyingStyle(_this.enterTxt)
                            _this.AnswerBox.addChild(_this.enterTxt)
                            _this.enterTxt.visible = true;


                        }
                        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                        _this.correctAns();
                        _this.finalAns = false;
                        _this.AnswerBox.frame = 0;
                        _this.AnswerBox.name = ''
                        _this.selectedAns1 = ''
                        _this.selectedAns2 = ''
                        _this.selectedAns3 = ''
                        _this.enterTxt = ''
                        _this.rightbtn.inputEnabled = true;
                        _this.fourNotEntered = false;


                    }
                    else {
                        _this.removeboth = false;
                        _this.dotselected = false
                        _this.wrongSelected();
                    }
                }

                else if ((_this.finalval == Value1Array[_this.count1] + "." + Value10Array[_this.count1] + Value100Array[_this.count1]) || (Value100Array[_this.count1] == 0 && (_this.finalval == Value1Array[_this.count1] + "." + Value10Array[_this.count1]))) {
                    telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                    _this.correctAns();
                    _this.finalAns = false;
                    _this.AnswerBox.frame = 0;
                    _this.AnswerBox.name = ''
                    _this.selectedAns1 = ''
                    _this.selectedAns2 = ''
                    _this.selectedAns3 = ''
                    _this.enterTxt = ''
                    _this.rightbtn.inputEnabled = true;
                    _this.fourNotEntered = false;


                }
                //edited on 17-01-2023
                else if ((Value1Array[_this.count1] == 0 && _this.finalval == "." + Value10Array[_this.count1] + Value100Array[_this.count1]) || ((Value100Array[_this.count1] == 0 && Value1Array[_this.count1] == 0) && (_this.finalval == "." + Value10Array[_this.count1]))) {
                    console.log("zeroooooooooooo.........");
                    telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);


                    _this.correctAns();
                    _this.finalAns = false;
                    _this.AnswerBox.frame = 0;
                    _this.AnswerBox.name = ''
                    _this.selectedAns1 = ''
                    _this.selectedAns2 = ''
                    _this.selectedAns3 = ''
                    _this.enterTxt = ''
                    _this.rightbtn.inputEnabled = true;
                    _this.fourNotEntered = false;

                }
                else {
                    _this.removeboth = false;
                    _this.dotselected = false

                    _this.wrongSelected();

                }

            }
        }
    },
    destroryPart1: function () {
        _this.numGroup.destroy();
        _this.AnswerBox.destroy()
        if (_this.AnswerBox1)
            _this.AnswerBox1.destroy()
        if (_this.divideSign)
            _this.divideSign.destroy();
        if (_this.partAnswerBox)
            _this.partAnswerBox.destroy()

    },
    validate: function () {
        if (_this.AnswerBox.name == Value1Array[_this.count1]) {

            _this.partAnswerBox = _this.AnswerBox;
            _this.partAnswerBox.frame = 0;
            _this.partAnswerBox.inputEnabled = false;
            _this.celebrate();
            _this.showfraction2Boxes(640);
            _this.secondPartNotShown = false;
            _this.rightbtn.inputEnabled = true;

        }
        else {
            _this.removeboth = false;
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
    Validation1: function () {
        if (_this.count1 < 2 || _this.count1 > 2) {
            if (_this.AnswerBox.name == (Value10Array[_this.count1] * 10 + Value100Array[_this.count1]) && _this.AnswerBox1.name == 100) {

                _this.counterCelebrationSound.pause();
                _this.counterCelebrationSound.currentTime = 0;
                _this.counterCelebrationSound.play();
                _this.showtable1();
            }

            else {
                _this.removeboth = true;
                _this.wrongSelected();

            }
        }
        else if (_this.count1 == 2) {
            if (_this.AnswerBox.name == 100 && _this.AnswerBox1.name == 100) {
                _this.counterCelebrationSound.pause();
                _this.counterCelebrationSound.currentTime = 0;
                _this.counterCelebrationSound.play();
                _this.showtable1();
            }
            else {
                _this.removeboth = true;
                _this.wrongSelected();
            }
        }

    },
    wrongSelected: function () {
        _this.wrongans.play();
        _this.wrongbtnClicked();
        _this.rightbtn.inputEnabled = true;


    },
    makeTableHeader: function () {
        _this.ones = _this.add.text(80, 15, '1')
        _this.table1.addChild(_this.ones)
        _this.ones.fill = '#808080'

        _this.tenth1 = _this.add.text(256 + 3, 2, '1')
        _this.tenth1.scale.setTo(0.9)
        _this.tenth1.fill = '#808080'


        _this.table1.addChild(_this.tenth1)

        _this.tenth2 = _this.add.graphics();
        _this.tenth2.lineStyle(3, 0x808080);
        _this.tenth2.moveTo(250 + 3, 27);
        _this.tenth2.lineTo(280 + 3, 27);
        _this.tenth2.fill = '#808080'

        _this.table1.addChild(_this.tenth2)

        _this.tenth3 = _this.add.text(252 + 3, 27, '10')
        _this.tenth3.scale.setTo(0.8)
        _this.tenth3.fill = '#808080'

        _this.table1.addChild(_this.tenth3)

        _this.hundreth1 = _this.add.text(439 + 2 - 5, 2, '1')
        _this.hundreth1.scale.setTo(0.9)
        _this.hundreth1.fill = '#808080'


        _this.table1.addChild(_this.hundreth1)
        _this.hundreth2 = _this.add.graphics();
        _this.hundreth2.lineStyle(3, 0x808080);
        _this.hundreth2.moveTo(430 + 2 - 5, 27);
        _this.hundreth2.lineTo(468 + 2 - 5, 27);
        _this.hundreth2.fill = '#808080'

        _this.table1.addChild(_this.hundreth2)

        _this.hundreth3 = _this.add.text(430 + 2 - 5, 27, '100')
        _this.hundreth3.scale.setTo(0.8)
        _this.hundreth3.fill = '#808080'


        _this.table1.addChild(_this.hundreth3)
    },
    showtable1: function () {
        _this.destroryPart1();
        _this.tableNotshown = false;
        if (_this.count1 > 2) {
            _this.yellowBox.x -= 140;

            _this.yellowBox.scale.setTo(0.7)
            _this.grayBox.x -= 270;
            _this.grayBox.y -= 7;
            _this.grayBox.scale.setTo(0.7)

        }
        else if (_this.count1 < 2) {
            _this.grayBox.x -= 200;
            _this.grayBox.scale.setTo(0.8)

        }
        else {
            _this.yellowBox - 200;
            _this.yellowBox.scale.setTo(0.8)

        }
        _this.table1 = _this.add.sprite(400, 265, 'TextTable1')

        _this.makeTableHeader();
        _this.showBoxJumping();

        //  Show jumping of boxes to table
    },
    showBoxJumping: function () {
        _this.line2 = false;
        if (_this.count1 > 2) {
            if (_this.yellowBox) {
                _this.tween1 = _this.add.tween(_this.yellowBox);
                _this.tween1.to({ x: 419.5, y: 360 }, 800, 'Linear', true, 0);
                _this.yellowBox.bringToTop();
                _this.yellowBox.scale.setTo(0.5)
                // _this.snapSound.play();

            }
            if (_this.grayBox) {

                if (Value10Array[_this.count1 == 0])
                    _this.time.events.add(600, () => {
                        _this.showredBoxMove(0)
                    });
                else
                    _this.time.events.add(600, _this.showgreenBoxMove)

            }
        }
        else {
            if (_this.count1 == 2) {
                _this.tween1 = _this.add.tween(_this.yellowBox);
                _this.tween1.to({ x: 419.5, y: 360 }, 800, 'Linear', true, 0);
                _this.yellowBox.bringToTop();
                _this.yellowBox.scale.setTo(0.5)

                _this.time.events.add(1000, () => {
                    _this.yellowBox.frame = 0;
                    // _this.snapSound.play();
                    _this.time.events.add(500, () => {
                        _this.framechange.play();
                    })
                    _this.time.events.add(1000, _this.showtable2)

                })

            }
            else if (_this.count1 < 2) {

                if (Value10Array[_this.count1 == 0])
                    _this.showredBoxMove1(0);
                else
                    _this.showgreenBoxMove1();


            }
        }
    },
    showgreenBoxMove1: function () {
        let i = 0;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(600, () => {

            if (i < Value10Array[_this.count1]) {
                _this.tween1 = _this.add.tween(_this.grayBox.getChildAt(i));
                _this.tween1.to({ x: 610, y: 514 - i * 24 }, 600, 'Linear', true, 0);
                _this.grayBox.getChildAt(i).bringToTop();
                _this.grayBox.getChildAt(i).scale.setTo(0.75);
            }

            if (i == Value10Array[_this.count1]) {
                _this.loope.stop();
                _this.showredBoxMove1(i);
            }
            else {
                i++;
            }
        })
    },
    showredBoxMove1: function (i) {
        let j = 0;
        _this.loop = _this.time.create(false)
        _this.loop.start();
        _this.loop.loop(600, () => {

            if (j >= 5 || _this.line2 == true) {
                _this.line2 = true
                var y = 505 - 30;
                if (j == 5)
                    j = 0;
            }
            else {
                var y = 505
            }
            if (i < _this.grayBox.children.length) {
                _this.tween1 = _this.add.tween(_this.grayBox.getChildAt(i));
                _this.tween1.to({ x: 860 + j * 30, y: y }, 500, 'Linear', true, 0);
                _this.grayBox.getChildAt(i).bringToTop();
            }

            if (i == _this.grayBox.children.length) {
                _this.loop.stop();
                _this.time.events.add(500, () => {
                    console.log("playing sound")
                    _this.framechange.play();
                })
                _this.time.events.add(1000, _this.showtable2)
            }
            else {
                i++;
                j++;
            }
        })
    },
    showgreenBoxMove: function () {
        let i = 0;
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(600, () => {

            if (i < Value10Array[_this.count1]) {
                _this.tween1 = _this.add.tween(_this.grayBox.getChildAt(i));
                _this.tween1.to({ x: 479, y: 600 - i * 28 }, 600, 'Linear', true, 0);
                _this.grayBox.getChildAt(i).bringToTop();
                _this.grayBox.getChildAt(i).scale.setTo(0.88);
            }


            if (i == Value10Array[_this.count1]) {
                _this.loope.stop();
                _this.showredBoxMove(i);
            }
            else {
                i++;
            }
        })
    },
    showredBoxMove: function (i) {
        let j = 0;
        _this.loop = _this.time.create(false)
        _this.loop.start();
        _this.loop.loop(600, () => {

            if (j >= 5 || _this.line2 == true) {
                _this.line2 = true
                var y = 595 - 30;
                if (j == 5)
                    j = 0;
            }
            else {
                var y = 595
            }

            if (i < _this.grayBox.children.length) {
                _this.tween1 = _this.add.tween(_this.grayBox.getChildAt(i));
                _this.tween1.to({ x: 780 + j * 30, y: y }, 600, 'Linear', true, 0);
                _this.grayBox.getChildAt(i).bringToTop();
            }


            if (i == _this.grayBox.children.length) {
                _this.loop.stop();
                _this.time.events.add(500, () => {
                    console.log("playing sound")
                    _this.framechange.play();
                })
                _this.time.events.add(1000, _this.showtable2)
            }
            else {
                i++;
                j++;
            }
        })
    },
    showfinalAnswer: function () {
        if (_this.count1 == 0) {

            _this.Ask_Question3.play();
        }
        _this.Question_flag = 3;

        _this.AnswerBox = _this.add.sprite(800, 390, 'Text box_2')

        //    Equals sign with red 
        _this.eq1 = _this.add.text(746, 380, '__')
        _this.eq1.fill = '#FF0000';
        _this.eq1.scale.setTo(1, 1.3)


        _this.eq2 = _this.add.text(746, 390, '__')
        _this.eq2.fill = '#FF0000';
        _this.eq2.scale.setTo(1, 1.3)

        _this.finalAns = true;
        _this.finalval = "";
        _this.fouransLen = 0;
        _this.dotselected = false;


    },
    showtable2: function () {
        if (_this.count1 == 0) {

            _this.time.events.add(500, () => {
                _this.Ask_Question2.play();

            })
        }
        _this.Question_flag = 2;

        if (_this.yellowBox)
            _this.yellowBox.destroy();
        if (_this.grayBox)
            _this.grayBox.destroy();
        _this.table1.x -= 350;
        _this.table1.y -= 200;
        _this.table1.scale.setTo(1.2, 1.6)

        _this.ones.scale.setTo(0.8)
        _this.tenth1.scale.setTo(0.8);
        _this.tenth1.y += 2;
        _this.tenth1.x += 2
        _this.tenth3.scale.setTo(0.7);
        _this.tenth3.x += 2;

        _this.hundreth1.scale.setTo(0.8);
        _this.hundreth1.y += 2;
        _this.hundreth1.x += 1
        _this.hundreth3.scale.setTo(0.7);
        _this.hundreth3.x += 2;

        _this.line = _this.add.graphics();
        _this.line.lineStyle(3, 0x808080);
        _this.line.moveTo(55, 385);
        _this.line.lineTo(738 - 42, 385);

        // _this.showQuesBox()
        _this.addObjectTabl2();
        _this.showfractionbox(120, 12)
        _this.fourNotEntered = false;
        _this.part1 = true;
        _this.selectedAns1 = ''
        _this.selectedAns2 = ''
        _this.addNumberPad();


    },
    addObjectTabl2: function () {
        if (_this.count1 >= 2) {
            _this.yellowBox = _this.add.sprite(62, 180, 'yellow-box')
            _this.yellowBox.scale.setTo(0.7)
        }
        if (_this.count1 != 2) {
            for (i = 0; i < Value10Array[_this.count1]; i++) {
                var greenbox = _this.add.sprite(188, 180 - i * 15, 'green-box')
                greenbox.scale.setTo(0.6, 0.5)
                _this.table1.addChild(greenbox)

            }
            var j = 0;
            _this.line2 = false;
            for (i = 0; i < Value100Array[_this.count1]; i++) {

                if (j >= 5 || _this.line2 == true) {
                    _this.line2 = true
                    var y = 170 - 25;
                    if (j == 5)
                        j = 0;
                }
                else {
                    var y = 170
                }

                var orangebox = _this.add.sprite(j * 27.3 + 380, y, 'orange-box')
                orangebox.scale.setTo(0.8, 0.6)
                j++;

                _this.table1.addChild(orangebox)
            }
        }

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
        _this.clickSound.play();
        var_selectedAns1 = " "
        var_selectedAns2 = " "
        var_selectedAns3 = " "

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

        }


        if (_this.selectedAns1 === '') {
            _this.selectedAns1 = target.name;
            var_selectedAns1 = _this.selectedAns1;

        }
        else if (_this.selectedAns2 === '') {

            _this.selectedAns2 = target.name;
            var_selectedAns1 = _this.selectedAns1;
            var_selectedAns2 = _this.selectedAns2;


        }
        else if ((_this.selectedAns3 === '')) {

            _this.selectedAns3 = target.name;
            var_selectedAns1 = _this.selectedAns1;
            var_selectedAns2 = _this.selectedAns2;
            var_selectedAns3 = _this.selectedAns3;

        }



        if (_this.finalAns == true && _this.fouransLen != 4) {
            _this.finalval += ''
            _this.finalval += target.name
            if (target.name == '.')
                target.name = 11;
            _this.fouransLen += 1;
        }


        if (_this.finalAns == true && _this.fourNotEntered == false) {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.enterTxt.visible = false;

            if ((_this.fouransLen == 1))

                _this.enterTxt = _this.add.text(37, 8, "" + _this.finalval, { fontSize: '30px' });
            else if (_this.fouransLen == 2)

                _this.enterTxt = _this.add.text(32 - 4, 8, "" + _this.finalval, { fontSize: '30px' });
            else if (_this.fouransLen == 3)

                _this.enterTxt = _this.add.text(28 - 6, 8, "" + _this.finalval, { fontSize: '30px' });

            else {
                _this.enterTxt = _this.add.text(22 - 6, 8, "" + _this.finalval, { fontSize: '30px' });
                _this.fourNotEntered = true

            }
            // _this.enterTxt.scale.setTo(1.2, 1.4)

            _this.applyingStyle(_this.enterTxt);
            _this.AnswerBox.addChild(_this.enterTxt);
            _this.AnswerBox.name = Number(_this.finalval);
            _this.enterTxt.visible = true
        }
        else if (_this.fourNotEntered == false) {
            if ((_this.count1 <= 2 || _this.secondPartNotShown == false) && _this.onebox == false) {


                if (_this.q1 == true) {
                    _this.enterTxt.visible = false;
                    _this.AnswerBox.removeChild(_this.enterTxt);
                    if ((var_selectedAns2 === " "))

                        _this.enterTxt = _this.add.text(19, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '20px' });

                    else if ((var_selectedAns3 === " "))
                        _this.enterTxt = _this.add.text(14, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '20px' });

                    else {
                        _this.enterTxt = _this.add.text(8, 8, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '20px' });
                        // _this.enterTxt.scale.setTo(0.9, 1)
                        _this.q1 = false;
                        _this.fourNotEntered = true

                    }
                    _this.enterTxt.scale.setTo(1, 1.4)

                    _this.applyingStyle(_this.enterTxt);

                    _this.AnswerBox.addChild(_this.enterTxt);
                    _this.AnswerBox.name = Number('' + var_selectedAns1 + var_selectedAns2 + var_selectedAns3);
                }

                else if (_this.q2 == true) {
                    _this.AnswerBox1.removeChild(_this.enterTxt1);
                    if ((var_selectedAns2 === " "))

                        _this.enterTxt1 = _this.add.text(19, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '20px' });
                    else if ((var_selectedAns3 === " "))
                        _this.enterTxt1 = _this.add.text(14, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '20px' });

                    else {
                        _this.enterTxt1 = _this.add.text(8, 8, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '20px' });
                        // _this.enterTxt1.scale.setTo(0.9, 1)
                        _this.q2 = false;
                        _this.fourNotEntered = true

                    }
                    _this.enterTxt1.scale.setTo(1, 1.4)

                    _this.applyingStyle(_this.enterTxt1);

                    _this.AnswerBox1.addChild(_this.enterTxt1);
                    _this.AnswerBox1.name = Number('' + var_selectedAns1 + var_selectedAns2 + var_selectedAns3);
                }
            }
            else {
                _this.AnswerBox.removeChild(_this.enterTxt);
                _this.enterTxt.visible = false;
                if ((var_selectedAns2 === " ")) {

                    if (_this.tableNotshown == false) {
                        _this.fourNotEntered = true;
                        _this.enterTxt = _this.add.text(19, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '28px' });
                    }
                    else
                        _this.enterTxt = _this.add.text(19, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '20px' });

                }
                else if ((var_selectedAns3 === " "))
                    _this.enterTxt = _this.add.text(14, 8, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '20px' });

                else {
                    _this.enterTxt = _this.add.text(8, 8, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '20px' });

                    _this.fourNotEntered = true

                }
                if (_this.tableNotshown == true)
                    _this.enterTxt.scale.setTo(1, 1.4)

                _this.applyingStyle(_this.enterTxt);
                _this.AnswerBox.addChild(_this.enterTxt);
                _this.AnswerBox.name = Number("" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3);
                _this.enterTxt.visible = true

            }
        }
    },
    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.fourNotEntered = false;
        _this.fouransLen = 0;
        _this.finalval = "";
        _this.dotselected = false;
        if (_this.removeboth) {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.AnswerBox.frame = 1;
            _this.q1 = true;
            _this.AnswerBox.name = "";

            _this.AnswerBox1.removeChild(_this.enterTxt1);
            _this.AnswerBox1.frame = 0;
            _this.AnswerBox1.name = "";

            _this.removeboth = false;
        }
        else if (_this.twofractionboxes) {
            if (_this.AnswerBox.frame == 1) {
                _this.AnswerBox.removeChild(_this.enterTxt);
                _this.q1 = true;
                _this.AnswerBox.name = "";

            }
            else {
                _this.AnswerBox1.removeChild(_this.enterTxt1);
                _this.q2 = true;
                _this.AnswerBox1.name = "";


            }
        }
        else {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.AnswerBox.frame = 1;
        }
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';
        _this.AnswerBox.name = ''

    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },

    ClearAll: function () {
        _this.numGroup.destroy()
        if (_this.yellowBox)
            _this.yellowBox.destroy();
        _this.table1.destroy()
        _this.eq1.destroy();
        _this.eq2.destroy();
        _this.line.destroy();
        _this.AnswerBox.destroy();
        _this.box1.destroy();
        _this.box2.destroy();
        _this.box3.destroy();
        _this.questionBox.destroy();
        _this.text2.destroy();
        _this.text3.destroy();
        _this.lineq.destroy();
        if (_this.text1)
            _this.text1.destroy();



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
            _this.time.events.add(2000, _this.ClearAll);

            _this.time.events.add(3000, _this.Randomize);


        }

        else {

            _this.starActions(_this.count1);
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
        // _this.game_id = "NSD_01_G6";
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
        //*  This game helps us to understand how to convert proper fractions to decimals.
        //*  The yellow square stands for the fraction 100/100 which is nothing but the whole number 1.
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSD-01-G6/" + _this.languageSelected + "/DV-NSD-1-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //*  Count the number of coloured parts in the grid and express it as fractions
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-01-G6/" +
            _this.languageSelected + "/NSD-1-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //*  Complete the place value chart.
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", "questionSounds/NSD-01-G6/" +
            _this.languageSelected + "/NSD-1-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //*  Write the numbers from the place value chart in a decimal form
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-01-G6/" +
            _this.languageSelected + "/NSD-1-G6C.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 300, 'skipArrow');       //* skip button shown at the bottom
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
        if (_this.q2Timer) clearTimeout(_this.q2Timer);
        if (_this.q3Timer) clearTimeout(_this.q3Timer);

        if (_this.demoAudio1) {
            console.log("removing the demo audio1");
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

        if (_this.q2Sound) {
            console.log("removing the q2");
            _this.q2Sound.pause();
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }

        if (_this.q3Sound) {
            console.log("removing the q3");
            _this.q3Sound.pause();
            _this.q3Sound = null;
            _this.q3Soundsrc = null;
        }

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();              //* skip button destroyed
    },

    dA1: function () {
        console.log("the game is resumed");
        _this.q1Sound.play();
    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('nsd01_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSD-1-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.play();

        _this.demoAudio1.addEventListener('ended', _this.dA1);

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 27 seconds.
        {
            console.log("inside q2sound.....")
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 35000);

        _this.q3Timer = setTimeout(function ()    //* q3 js timer to play q3Timer after 47 seconds.
        {
            console.log("inside q3sound.....")
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 50000);

        _this.demoVideo_1.onComplete.add(function () {
            _this.stopAudio();
            _this.demoVideo_1.stop(false);
            _this.videoWorld_1.destroy();
            if (_this.hintBtn) {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
            }
            _this.game.paused = false;

        });
    }
}