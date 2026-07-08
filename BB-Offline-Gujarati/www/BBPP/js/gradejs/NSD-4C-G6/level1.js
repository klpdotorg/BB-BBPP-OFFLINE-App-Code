Game.NSD_4C_G6level1 = function () { };


Game.NSD_4C_G6level1.prototype =
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

        _this.Ask_Question1 = _this.createAudio("NSD-4C-G6A");
        _this.Ask_Question2 = _this.createAudio("NSD-4C-G6B");
        _this.Ask_Question3 = _this.createAudio("NSD-4C-G6C");

        telInitializerbbpp.gameIdInit("NSD_4C_G6", gradeSelected);
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

        // //* User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
        _this.microConcepts;
        // _this.grade;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        _this.hint_flag = 0;// * hint flag zero

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
        //   _this.hintBtn = _this.add.sprite(670,6,'bulb');
        //   _this.hintBtn.scale.setTo(0.5,0.6);
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
            _this.time.events.add(1, function () {
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
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-4C-G6/" + _this.languageSelected + "/" + src + ".mp3");
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

        //* hintbtn will be true when the game is playing
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
    showfractionbox: function (addvar) {
        _this.onebox = true
        _this.finalAns = true;
        _this.finalval = "";
        _this.fouransLen = 0;
        _this.dotselected = false;
        _this.AnswerBox = _this.add.image(addvar, 328, 'white-box');
        _this.AnswerBox.scale.setTo(1.7, 1.1)
        _this.AnswerBox.frame = 1;
        _this.twofractionboxes = false;

    },
    showfraction2Boxes: function (addvar) {
        _this.twofractionboxes = true;
        _this.onebox = false;

        _this.AnswerBox = _this.add.image(addvar, 100, 'white-box');
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
        _this.divideSign.moveTo(addvar + 5, 110 + 43);
        _this.divideSign.lineTo(addvar + 62, 110 + 43);

        _this.AnswerBox1 = _this.add.image(addvar, 115 + 40, 'white-box');
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
        randvarArr1 = []
        randvarArr2 = []
        var num;
        var num2;
        Value10Array = [];
        Value100Array = [];

        Value10Array2 = [];
        Value100Array2 = [];

        _this.got = false;
        _this.equalValuesIdx = Math.floor(Math.random() * (6 - 0) + 0);
        _this.revQIdx = Math.floor(Math.random() * (6 - 0) + 0);
        while (_this.revQIdx == _this.equalValuesIdx) {
            _this.revQIdx = Math.floor(Math.random() * (6 - 0) + 0);
        }
        for (let i = 0; i < 6; i++) {

            randomVal1 = Math.floor(Math.random() * (99 - 1) + 1);
            for (j = 0; j < i; j++) {

                if (randomVal1 == randvarArr1[i]) {
                    randomVal1 = Math.floor(Math.random() * (99 - 1) + 1);

                    j = -1;
                }

            }
            if (_this.revQIdx == i) {
                num = randomVal1 % 10;
                num2 = (Math.floor(randomVal1 / 10)) % 10
                while (num == num2) {
                    // equals condition so drop

                    randomVal1 = Math.floor(Math.random() * (99 - 1) + 1);
                    for (j = 0; j < i; j++) {

                        if (randomVal1 == randvarArr1[i]) {
                            randomVal1 = Math.floor(Math.random() * (99 - 1) + 1);

                            j = -1;
                        }

                    }
                    num = randomVal1 % 10;
                    num2 = (Math.floor(randomVal1 / 10)) % 10


                }
                randomVal2 = num * 10 + num2
            }
            else if (_this.equalValuesIdx == i) {
                randomVal2 = randomVal1
            }
            else {


                if (randomVal1 < 92 && randomVal1 >= 9) {
                    max = randomVal1 + 5
                    min = randomVal1 - 5
                    randomVal2 = Math.floor(Math.random() * (max - min) + min);
                }
                else if (randomVal1 <= 95 && randomVal1 >= 9) {
                    max = randomVal1 + 4
                    min = randomVal1 - 5
                    randomVal2 = Math.floor(Math.random() * (max - min) + min);
                }
                else if (randomVal1 <= 9 && randomVal1 >= 2) {
                    max = randomVal1 + 5
                    min = 1
                    randomVal2 = Math.floor(Math.random() * (max - min) + min);
                }
                else if (randomVal1 < 2) {
                    max = randomVal1 + 5
                    min = 2
                    randomVal2 = Math.floor(Math.random() * (max - min) + min);
                }
                else {
                    max = randomVal1 - 1
                    min = randomVal1 - 5
                    randomVal2 = Math.floor(Math.random() * (max - min) + min);

                }
                for (j = 0; j <= i; j++) {

                    if (randomVal2 == randvarArr2[i] || randomVal1 == randomVal2 || randomVal2 == num * 10 + num2) {
                        if (randomVal1 < 92 && randomVal1 >= 9) {
                            max = randomVal1 + 5
                            min = randomVal1 - 5
                            randomVal2 = Math.floor(Math.random() * (max - min) + min);
                        }
                        else if (randomVal1 <= 95 && randomVal1 >= 9) {
                            max = randomVal1 + 5
                            min = randomVal1 - 5
                            randomVal2 = Math.floor(Math.random() * (max - min) + min);
                        }
                        else if (randomVal1 <= 9 && randomVal1 >= 2) {
                            max = randomVal1 + 5
                            min = 1
                            randomVal2 = Math.floor(Math.random() * (max - min) + min);
                        }
                        else if (randomVal1 < 2) {
                            max = randomVal1 + 5
                            min = 2
                            randomVal2 = Math.floor(Math.random() * (max - min) + min);
                        }
                        else {
                            max = randomVal1 - 1
                            min = randomVal1 - 5
                            randomVal2 = Math.floor(Math.random() * (max - min) + min);

                        }
                        j = -1;
                    }

                }

            }
            Value100Array[i] = randomVal1 % 10;
            Value10Array[i] = (randomVal1 - Value100Array[i]) / 10;
            Value100Array2[i] = randomVal2 % 10;
            Value10Array2[i] = (randomVal2 - Value100Array2[i]) / 10;

            randvarArr1[i] = randomVal1;
            randvarArr2[i] = randomVal2;


        }


        console.log(randvarArr1)
        console.log(randvarArr2)



    },
    Randomize: function () {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
        _this.secondPartNotShown = true;

        _this.makeGrayBox();
        if (_this.count1 == 0) {

            _this.Ask_Question1.play();
        }
        _this.Question_flag = 1;

    },

    makeGrayBox: function () {
        _this.grayBox = _this.add.sprite(30, 100, 'gray-box')
        _this.fracBox1 = true;
        for (i = 0; i < Value10Array[_this.count1]; i++) {
            var greenbox = _this.add.sprite(0, 246 - i * 27.3, 'green-box')
            greenbox.scale.setTo(1, 1)
            _this.grayBox.addChild(greenbox)

        }
        for (i = 0; i < Value100Array[_this.count1]; i++) {
            if (Value10Array[_this.count1] >= 1)
                var orangebox = _this.add.sprite(i * 27.3, _this.grayBox.getChildAt(Value10Array[_this.count1] - 1).y - 27, 'orange-box')
            else
                var orangebox = _this.add.sprite(i * 27.3, 246 - 0 * 27.3, 'orange-box')

            orangebox.scale.setTo(1, 1)
            _this.grayBox.addChild(orangebox)
        }

        _this.showfraction2Boxes(320)
        _this.addNumberPad()

        _this.grayBox2 = _this.add.sprite(650, 100, 'gray-box')
        for (i = 0; i < Value10Array2[_this.count1]; i++) {
            var greenbox = _this.add.sprite(0, 246 - i * 27.3, 'green-box')
            greenbox.scale.setTo(1, 1)
            _this.grayBox2.addChild(greenbox)

        }
        for (i = 0; i < Value100Array2[_this.count1]; i++) {
            if (Value10Array2[_this.count1] >= 1)
                var orangebox = _this.add.sprite(i * 27.3, _this.grayBox2.getChildAt(Value10Array2[_this.count1] - 1).y - 27, 'orange-box')
            else
                var orangebox = _this.add.sprite(i * 27.3, 246 - 0 * 27.3, 'orange-box')

            orangebox.scale.setTo(1, 1)
            _this.grayBox2.addChild(orangebox)
        }

        // _this.showfraction2Boxes(570)
    },
    rightbtnClicked: function () {
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        _this.rightbtn_is_Clicked = true;
        if (_this.fracBox1 == true) {
            // evalaute and then show table if correct
            _this.Validation1();
        }
        else if (_this.fracBox2 == true) {
            // enable fraction box 2
            _this.Validation1();

        }
        else if (_this.decBox1 == true) {
            _this.Validation();
        }
        else if (_this.decBox2 == true) {
            _this.Validation();
        }

    },
    Validation: function () {
        console.log("Validation1")
        if (_this.decBox1 == true) {
            boxname = '0.' + Value10Array[_this.count1] + Value100Array[_this.count1];
            boxname2 = '0.' + Value10Array[_this.count1];

            //edited on 17-01-2023
            boxname_1 = '.' + Value10Array[_this.count1] + Value100Array[_this.count1];
            boxname_12 = '.' + Value10Array[_this.count1];
        }
        else {
            boxname = '0.' + Value10Array2[_this.count1] + Value100Array2[_this.count1];
            boxname2 = '0.' + Value10Array2[_this.count1];

            //edited on 17-01-2023
            boxname_1 = '.' + Value10Array2[_this.count1] + Value100Array2[_this.count1];
            boxname_12 = '.' + Value10Array2[_this.count1];

        }
        //edited on 17-01-2023
        if (_this.decBox1 == true && Value100Array[_this.count1] == 0 && (_this.AnswerBox.name === boxname2 || _this.AnswerBox.name === boxname_12)) {
            _this.decBox1 = false;
            _this.decBox2 = true;
            _this.AnswerBox.inputEnabled = false
            _this.decBox1 = _this.AnswerBox;
            _this.celebrate();
            _this.showfractionbox(550)
            _this.rightbtn.inputEnabled = true;
        }
        //edited on 17-01-2023
        else if (_this.decBox2 == true && Value100Array2[_this.count1] == 0 && (_this.AnswerBox.name === boxname2 || _this.AnswerBox.name === boxname_12)) {
            _this.decBox2 = false;
            _this.part2 = true
            _this.finalAns = false;
            _this.decBox2 = _this.AnswerBox;
            _this.celebrate();
            _this.makeSignObjects();
        }
        //edited on 17-01-2023
        else if (_this.AnswerBox.name === boxname || _this.AnswerBox.name === boxname_1) {


            if (_this.decBox1 == true) {
                _this.decBox1 = false;
                _this.decBox2 = true;
                _this.AnswerBox.inputEnabled = false
                _this.decBox1 = _this.AnswerBox;
                _this.celebrate();
                _this.showfractionbox(550)
                _this.rightbtn.inputEnabled = true;

            }
            else {

                _this.decBox2 = false;
                _this.part2 = true
                _this.finalAns = false;
                _this.decBox2 = _this.AnswerBox;
                _this.celebrate();
                _this.makeSignObjects();
            }


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
        _this.AnswerBox.frame = 0;
        _this.AnswerBox.name = ''
        _this.AnswerBox = null;
        _this.selectedAns1 = ''
        _this.selectedAns2 = ''
        _this.selectedAns3 = ''

        _this.enterTxt = ''

        if (_this.AnswerBox1) {
            _this.AnswerBox1.frame = 0;

            _this.AnswerBox1.name = ''
            _this.AnswerBox1 = null;
        }
        _this.fourNotEntered = false;


    },
    Validation1: function () {
        if (_this.fracBox1 == true) {
            box1name = Value10Array[_this.count1] * 10 + Value100Array[_this.count1]

        }
        else {
            box1name = Value10Array2[_this.count1] * 10 + Value100Array2[_this.count1]

        }

        if (_this.AnswerBox.name === box1name && _this.AnswerBox1.name === 100) {


            if (_this.fracBox1 == true) {
                _this.fracBox1 = false;
                _this.fracBox2 = true;
                _this.AnswerBox.inputEnabled = false
                _this.AnswerBox1.inputEnabled = false
                _this.fbox1 = _this.AnswerBox;
                _this.fbox12 = _this.AnswerBox1;
                _this.fline1 = _this.divideSign;
                _this.celebrate();

                _this.showfraction2Boxes(571)

            }
            else if (_this.fracBox2 == true) {
                _this.fracBox2 = false;
                _this.AnswerBox.inputEnabled = false
                _this.AnswerBox1.inputEnabled = false
                _this.fbox2 = _this.AnswerBox;
                _this.fbox22 = _this.AnswerBox1;
                _this.fline2 = _this.divideSign;
                _this.celebrate();
                _this.askDecimalFrac();

            }
            _this.rightbtn.inputEnabled = true

        }

        else {
            _this.removeboth = true;
            _this.wrongSelected();

        }

    },
    askDecimalFrac: function () {
        if (_this.count1 == 0) {
            _this.Ask_Question2.play();
        }
        _this.Question_flag = 2;
        _this.showfractionbox(318)
        _this.decBox1 = true;
    },
    makeSignObjects: function () {

        _this.time.events.add(500, () => {

            _this.lesserSign = _this.add.sprite(370, 260, 'lesser-sign')
            _this.lesserSign.inputEnabled = true
            _this.lesserSign.input.enableDrag(true)
            _this.lesserSign.name = 'lessersign'
            _this.lesserSign.events.onDragStop.add(_this.signDrag, _this)
            _this.lesserSign.events.onDragUpdate.add(_this.signDragUpdate, _this)


            _this.equalsSign = _this.add.sprite(450, 260, 'equal-sign')
            _this.equalsSign.inputEnabled = true
            _this.equalsSign.input.enableDrag(true)
            _this.equalsSign.name = 'equalsign'
            _this.equalsSign.events.onDragStop.add(_this.signDrag, _this)
            _this.equalsSign.events.onDragUpdate.add(_this.signDragUpdate, _this)


            _this.greaterSign = _this.add.sprite(530, 260, 'greater-sign')
            _this.greaterSign.inputEnabled = true
            _this.greaterSign.input.enableDrag(true)
            _this.greaterSign.name = 'greatersign'
            _this.greaterSign.events.onDragStop.add(_this.signDrag, _this)
            _this.greaterSign.events.onDragUpdate.add(_this.signDragUpdate, _this)


            _this.dropBox = _this.add.sprite(450, 334, 'small-gray-box')
            _this.grayBoxEmpty = true
            _this.storeSignAns();
            _this.numGroup.destroy();

            if (_this.count1 == 0) {
                _this.Ask_Question3.play();
            }
            _this.Question_flag = 3;
        })

    },
    storeSignAns: function () {
        box1name = '0.' + Value10Array[_this.count1] + Value100Array[_this.count1]
        box2name = '0.' + Value10Array2[_this.count1] + Value100Array2[_this.count1]
        if (box1name == box2name) {
            _this.correctSign = _this.equalsSign
        }
        else if (box1name > box2name) {
            _this.correctSign = _this.greaterSign
        }
        else {
            _this.correctSign = _this.lesserSign
        }


    },
    signDragUpdate(target) {
        target.bringToTop();

    },
    showtickBtn: function () {
        _this.noofAttempts++;
        _this.tickbtn = _this.add.sprite(450, 400, 'TickBtn')
        _this.tickbtn.inputEnabled = true;
        _this.tickbtn.events.onInputDown.add(() => {
            _this.tickbtn.frame = 1;
            _this.tickbtn.inputEnabled = false;

            if (_this.userSeelectedSign == _this.correctSign) {
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.lesserSign.inputEnabled = false;
                _this.equalsSign.inputEnabled = false;
                _this.greaterSign.inputEnabled = false;
                _this.correctAns();
            }
            else {
                _this.wrongans.play();
                _this.tickbtn.frame = 0;
                _this.userSeelectedSign.frame = 0;
                _this.lesserSign.x = 370;
                _this.lesserSign.y = 260;
                _this.equalsSign.x = 450;
                _this.equalsSign.y = 260;
                _this.greaterSign.x = 530;
                _this.greaterSign.y = 260;
                _this.grayBoxEmpty = true;
                _this.tickbtn.inputEnabled = true;
            }

        })
    },
    signDrag: function (target) {
        target.bringToTop();
        if (_this.checkOverlap(target, _this.dropBox) && _this.grayBoxEmpty == true) {
            target.frame = 1;

            target.x = 448;
            target.y = 333;
            _this.snapSound.play();
            _this.grayBoxEmpty = false;
            _this.userSeelectedSign = target;

            if (!_this.tickbtn || _this.tickbtn.visible == false) {
                _this.showtickBtn();
            }
        }
        else if (_this.checkOverlap(target, _this.dropBox) && _this.grayBoxEmpty == false) {
            if (_this.userSeelectedSign == _this.lesserSign) {
                _this.userSeelectedSign.x = 370
            }
            else if (_this.userSeelectedSign == _this.greaterSign)
                _this.userSeelectedSign.x = 530
            else
                _this.userSeelectedSign.x = 450
            _this.userSeelectedSign.y = 260;
            _this.userSeelectedSign.frame = 0;
            _this.userSeelectedSign = ''
            target.frame = 1;

            target.x = 448;
            target.y = 333;
            _this.snapSound.play();
            _this.grayBoxEmpty = false;
            _this.userSeelectedSign = target;

        }
        else {
            if (target.name == 'greatersign') {
                target.x = 530
            }
            else if (target.name == 'lessersign')
                target.x = 370
            else
                target.x = 450
            target.y = 260;
            target.frame = 0;
            if (_this.lesserSign.x == 370 && _this.equalsSign.x == 450 && _this.greaterSign.x == 530) {
                _this.grayBoxEmpty = true;
            }

        }
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

                _this.enterTxt = _this.add.text(37 - 15, 9, "" + _this.finalval, { fontSize: '17px' });
            else if (_this.fouransLen == 2)

                _this.enterTxt = _this.add.text(32 - 4 - 12, 9, "" + _this.finalval, { fontSize: '17px' });
            else if (_this.fouransLen == 3)

                _this.enterTxt = _this.add.text(28 - 6 - 8, 9, "" + _this.finalval, { fontSize: '17px' });

            else {
                _this.enterTxt = _this.add.text(9.5, 9, "" + _this.finalval, { fontSize: '17px' });
                _this.fourNotEntered = true

            }
            _this.enterTxt.scale.setTo(1, 1.6)

            _this.applyingStyle(_this.enterTxt);
            _this.AnswerBox.addChild(_this.enterTxt);
            _this.AnswerBox.name = _this.finalval;
            _this.enterTxt.visible = true
        }
        else if (_this.fourNotEntered == false) {

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
            _this.AnswerBox.name = ''

        }
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';

    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },

    ClearAll: function () {

        _this.grayBox2.destroy();
        _this.grayBox.destroy();
        _this.lesserSign.destroy();
        _this.equalsSign.destroy();
        _this.greaterSign.destroy();
        _this.dropBox.destroy();

        _this.fbox1.destroy();
        _this.fbox12.destroy();
        _this.fline1.destroy();

        _this.fbox2.destroy();
        _this.fbox22.destroy();
        _this.fline2.destroy();

        _this.decBox1.destroy();
        _this.decBox2.destroy();

        _this.tickbtn.visible = false;
        _this.tickbtn.destroy();

    },
    checkOverlap: function (spriteA, spriteB) {
        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
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

            _this.celebrationSound.play();
            _this.starActions(_this.count1);
            _this.time.events.add(2000, _this.ClearAll);
            _this.time.events.add(2500, () => {
                //_this.state.start('score', true, false);
                this.state.start('score', true, false,gameID,_this.microConcepts);

            })
        }

    },
    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        //_this.anim.play();
        // //*star action changes
        // _this.userHasPlayed = 1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NSD_4C_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Decimals";
         _this.microConcepts = "Number Systems";

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
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSD-4C-G6/" +
            _this.languageSelected + "/DV-NSD-4C-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-4C-G6/" +
            _this.languageSelected + "/NSD-4C-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-4C-G6/" +
            _this.languageSelected + "/NSD-4C-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-4C-G6/" +
            _this.languageSelected + "/NSD-4C-G6C.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 430, 'skipArrow');       //* skip button shown at the bottom
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
        if (_this.q2Timer) clearTimeout(_this.q2Timer);
        if (_this.q3Timer) clearTimeout(_this.q3Timer);

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
        if (_this.q2Sound) {
            console.log("removing the q1");
            _this.q2Sound.pause();
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }
        if (_this.q3Sound) {
            console.log("removing the q1");
            _this.q3Sound.pause();
            _this.q3Sound = null;
            _this.q3Soundsrc = null;
        }
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed
    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('nsd4c_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSD-4C-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.play();

        _this.q1Timer = setTimeout(function ()    //* q1Sound js timer to play q1Timer after 8 seconds.
        {
            console.log("inside Q1sound.....");
            _this.demoVideo_1.playbackRate = 1.2;
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 8000);


        _this.q2Timer = setTimeout(function ()    //* q1Sound js timer to play q1Timer after 53 seconds.
        {
            console.log("inside Q2sound.....")
            _this.demoVideo_1.playbackRate = 1;
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 47000);

        _this.q3Timer = setTimeout(function ()    //* q1Sound js timer to play q1Timer after 70 seconds.
        {
            console.log("inside Q3sound.....")
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 60000);

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