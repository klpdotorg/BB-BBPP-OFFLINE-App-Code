Game.NSD_4E_G6level1 = function () { };


Game.NSD_4E_G6level1.prototype =
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

        _this.waterSound = document.createElement('audio');
        _this.waterSoundsrc = document.createElement('source');
        _this.waterSoundsrc.setAttribute("src", window.baseUrl + "sounds/waterFillingSound.mp3");
        _this.waterSound.appendChild(_this.waterSoundsrc);


        _this.waterSound2 = document.createElement('audio');
        _this.waterSound2src = document.createElement('source');
        _this.waterSound2src.setAttribute("src", window.baseUrl + "sounds/WaterFillNewSound.mpeg");
        _this.waterSound2.appendChild(_this.waterSound2src);


        _this.Ask_Question1 = _this.createAudio("NSD-4E-G6A");
        _this.Ask_Question2 = _this.createAudio("NSD-4E-G6B");

        telInitializerbbpp.gameIdInit("NSD_4E_G6", gradeSelected);
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
        _this.selectedAns1 = ''
        _this.selectedAns2 = ''

        _this.counterForTimer = 0;

        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.Question_flag = -1;
        valuesCombinations = []

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
                if (_this.Question_flag == 2) {
                    _this.Ask_Question2.play();
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
        // _this.hintBtn = _this.add.sprite(670, 6, 'bulb');
        // _this.hintBtn.scale.setTo(0.5, 0.6);
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

                _this.ViewDemoVideo();
            });
        });

        _this.numGroup;

        _this.generateStarsForTheScene(6);

        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);
    },


    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-4E-G6/" + _this.languageSelected + "/" + src + ".mp3");
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
        // Generate 4even numbers and multiples of five and 2 odd
        _this.QnArray = []
        QnArray2 = []
        valuesCombinations = []

        options = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

        for (i = 0; i < 6; i++) {
            {

                randomVal = Math.floor(Math.random() * (100 - 11) + 11);
                for (j = 0; j <= i; j++) {
                    if (randomVal == _this.QnArray[j] || options.includes(randomVal)) {
                        randomVal = Math.floor(Math.random() * (100 - 11) + 11);
                        j = -1;
                    }
                }
            }
            _this.QnArray[i] = randomVal

            var decnum = '0' + '.' + _this.QnArray[i]

            valuesCombinations[i] = decnum

        }

        console.log(valuesCombinations);
        _this.ArrangeObjects();

    },

    signclicked: function (target) {
        _this.clickSound.play();
        _this.sign11.frame = 0;
        _this.sign21.frame = 0;
        _this.sign22.frame = 0;
        _this.sign12.frame = 0;
        target.frame = 1;
        // Based on clicked sign,add or remove water in bucket
        if (target == _this.sign11) {
            if (Number(_this.text1._text == 0) && (Number(_this.text3._text) < 9 || (Number(_this.text3._text) == 9 && Number(_this.text4._text) == 0))) {
                _this.bucket.frame += 10;
                _this.clickSound.currentTime = 0;
                _this.waterSound2.currentTime = 0
                _this.waterSound.currentTime = 0
                _this.waterSound2.play();
                if (Number(_this.text3._text) == 9) {
                    _this.text1.setText('1')
                    _this.text3.setText('0')
                    _this.text4.setText('0')
                }
                else
                    _this.text3.setText(Number(_this.text3._text) + 1)
            }

        }
        if (target == _this.sign12) {
            if (Number(_this.text3._text) > 0) {
                _this.bucket.frame -= 10;
                _this.clickSound.currentTime = 0;
                _this.waterSound2.currentTime = 0;
                _this.waterSound.currentTime = 0
                _this.waterSound2.play();
                _this.text3.setText(Number(_this.text3._text) - 1)

            }
            else if (Number(_this.text1._text) == 1) {
                _this.bucket.frame -= 10;
                _this.text1.setText('0')
                _this.text3.setText('9')
                _this.text4.setText('0')
            }


        }
        if (target == _this.sign21) {
            if (((Number(_this.text3._text) <= 9 && Number(_this.text4._text) <= 9) && Number(_this.text1._text) == 0)) {
                if (Number(_this.text3._text) == 9 && Number(_this.text4._text) == 9) {
                    _this.text1.setText('1')
                    _this.text3.setText('0')
                    _this.text4.setText('0')
                }
                else if (Number(_this.text4._text) < 9)
                    _this.text4.setText(Number(_this.text4._text) + 1)
                else {
                    _this.text3.setText(Number(_this.text3._text) + 1)
                    _this.text4.setText('0')

                }
                _this.clickSound.currentTime = 0;
                _this.bucket.frame += 1;
                _this.waterSound.currentTime = 0
                _this.waterSound.play();
            }

        }
        if (target == _this.sign22) {
            if (Number(_this.text4._text) > 0 || Number(_this.text3._text) > 0) {

                if (Number(_this.text4._text) == 0) {
                    _this.text3.setText(Number(_this.text3._text) - 1)

                    _this.text4.setText('9')
                }
                else {
                    _this.text4.setText(Number(_this.text4._text) - 1)

                }
                _this.bucket.frame -= 1;
                _this.clickSound.currentTime = 0;

                _this.waterSound.currentTime = 0
                _this.waterSound.play();

            }
            else if (Number(_this.text1._text) == 1) {
                _this.bucket.frame -= 1;
                _this.text1.setText('0')
                _this.text3.setText('9')
                _this.text4.setText('9')

            }

        }
    },
    makeSignBoxes: function () {

        _this.signBox = _this.add.sprite(45, 80, 'box1')
        _this.tenthbox = _this.add.sprite(18, 33, 'Text box_1')
        var tens = _this.add.text(11, 10, '0.1')
        tens.fill = '#FFFFFF';
        _this.tenthbox.addChild(tens)
        _this.signBox.addChild(_this.tenthbox)
        _this.sign11 = _this.add.sprite(80, 8, 'Symbol+')
        _this.sign11.inputEnabled = true
        _this.sign11.events.onInputDown.add(_this.signclicked, _this);
        _this.sign12 = _this.add.sprite(80, 57, 'Symbol-')
        _this.sign12.inputEnabled = true
        _this.sign12.events.onInputDown.add(_this.signclicked, _this);
        _this.signBox.addChild(_this.sign11)
        _this.signBox.addChild(_this.sign12)

        _this.hundrethbox = _this.add.sprite(8, 142, 'Text box_2')
        var thundred = _this.add.text(11, 10, '0.01')
        thundred.fill = '#FFFFFF';
        _this.hundrethbox.addChild(thundred)
        _this.signBox.addChild(_this.hundrethbox)
        _this.sign21 = _this.add.sprite(80, 117, 'Symbol+')
        _this.sign21.inputEnabled = true
        _this.sign21.events.onInputDown.add(_this.signclicked, _this);
        _this.sign22 = _this.add.sprite(80, 117 + 49, 'Symbol-')
        _this.sign22.inputEnabled = true
        _this.sign22.events.onInputDown.add(_this.signclicked, _this);
        _this.signBox.addChild(_this.sign21)
        _this.signBox.addChild(_this.sign22)

    },
    ArrangeObjects: function () {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
        _this.showQuesBox();

        _this.makeSignBoxes();
        _this.bucket = _this.add.sprite(40, 40, 'bucket')
        _this.textmeter = _this.add.sprite(290, 320, 'textMeter')
        _this.bucket.addChild(_this.textmeter);

        _this.text1 = _this.add.text(32, 13, '0')
        _this.applyingStyle(_this.text1)
        _this.text1.fill = '#FF0000'
        _this.textmeter.addChild(_this.text1)

        _this.text2 = _this.add.text(32 + 38, 13, '.')
        _this.applyingStyle(_this.text2)
        _this.text2.fill = '#FF0000'
        _this.textmeter.addChild(_this.text2)

        _this.text3 = _this.add.text(32 + 70, 13, '0')
        _this.applyingStyle(_this.text3)
        _this.text3.fill = '#FF0000'
        _this.textmeter.addChild(_this.text3)

        _this.text4 = _this.add.text(32 + 104, 13, '0')
        _this.applyingStyle(_this.text4)
        _this.text4.fill = '#FF0000'
        _this.textmeter.addChild(_this.text4)

        _this.rightbtn = _this.add.sprite(830, 420, 'TickBtn')
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this)

        if (_this.count1 == 0) {
            _this.Ask_Question1.play();
        }
        _this.Question_flag = 1;
    },
    showQuesBox: function () {
        _this.questionBox = _this.add.sprite(810, 80, 'Text box_3')

        var text = _this.add.text(16, 18, valuesCombinations[_this.count1])

        _this.applyingStyle(text)
        text.scale.setTo(1.2, 1.1)
        _this.questionBox.addChild(text)
    },
    rightbtnClicked: function () {
        _this.userselected = 0;
        _this.clickSound.play();
        _this.rightbtn.frame = 1;
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        _this.rightbtn_is_Clicked = true;
        userselected = _this.text1._text + "." + _this.text3._text + _this.text4._text
        if (userselected === valuesCombinations[_this.count1]) {
            _this.sign11.inputEnabled = false;
            _this.sign12.inputEnabled = false;
            _this.sign21.inputEnabled = false;
            _this.sign22.inputEnabled = false;
            _this.counterCelebrationSound.play()

            _this.Part2();

            // _this.correctAns();
        }
        else {
            _this.time.events.add(500, () => {
                _this.rightbtn.frame = 0;
                _this.rightbtn.inputEnabled = true;
            })
            _this.wrongans.play();
            _this.bucket.frame = 0;
            _this.text1.setText('0')
            _this.text3.setText('0')
            _this.text4.setText('0')
            _this.sign11.frame = 0;
            _this.sign21.frame = 0;
            _this.sign22.frame = 0;
            _this.sign12.frame = 0;
        }

    },
    Part2: function () {
        var tween = _this.add.tween(_this.signBox);
        tween.to({ alpha: 0.10, alpha: 0 }, 500, 'Linear', true, 0)
        _this.time.events.add(500, () => {
            _this.rightbtn.destroy()

            var tween2 = _this.add.tween(_this.bucket);
            tween2.to({ x: _this.bucket.x - 280 }, 500, 'Linear', true, 0)
        })

        _this.time.events.add(1400, () => {
            var tween3 = _this.add.tween(_this.questionBox);
            tween3.to({ x: _this.questionBox.x - 180 - 25, y: _this.questionBox.y + 280 }, 700, 'Linear', true, 0)

            _this.time.events.add(1600, () => {
                _this.makeLesserSign()
            })
        })


    },
    makeLesserSign: function () {
        _this.AnswerBox = _this.add.sprite(460, 375, 'Text box_4')
        _this.lesserSign1 = _this.add.sprite(510 + 30, 372, 'lesserSign')
        _this.lesserSign2 = _this.add.sprite(670 + 30, 372, 'lesserSign')
        _this.snapSound.play()
        _this.part1 = true;
        _this.disableInputs();
        _this.addNumberPad();
        console.log(_this.count1)
        if (_this.count1 == 0) {
            _this.Ask_Question2.play();
        }
        _this.Question_flag = 2;

    },
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
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked2, _this);

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
    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.AnswerBox.name = ''
        }
        _this.disableInputs();

    },
    disableInputs: function () {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.AnswerBox.name = '';
        _this.fourNotEntered = false;
        _this.dotselected = false
        _this.fouransLen = 0;
        _this.finalAns = true;
        _this.finalval = ''
    },
    rightbtnClicked2: function () {

        console.log("yup")
        _this.ansBox1 = '0.' + Math.floor(valuesCombinations[_this.count1] * 10);

        //edited on 17-01-2023
        _this.ansBox_2 = '.' + Math.floor(valuesCombinations[_this.count1] * 10);
        _this.ansBox_3 = '.' + Math.floor(valuesCombinations[_this.count1] * 10) + "0";

        if (Number(valuesCombinations[_this.count1]) >= 0.91) {
            _this.ansBox2 = '1'
            _this.ansBox22 = '1.0'

        }
        else {
            _this.ansBox2 = '0.' + (Math.floor(valuesCombinations[_this.count1] * 10) + 1);
            _this.ansBox22 = '0.' + (Math.floor(valuesCombinations[_this.count1] * 10) + 1);

            //edited on 17-01-2023
            _this.ansBox21 = '.' + (Math.floor(valuesCombinations[_this.count1] * 10) + 1);
            _this.ansBox22_1 = '.' + (Math.floor(valuesCombinations[_this.count1] * 10) + 1);

            _this.ansBox21_1 = '.' + (Math.floor(valuesCombinations[_this.count1] * 10) + 1) + "0";
            _this.ansBox22_2 = '.' + (Math.floor(valuesCombinations[_this.count1] * 10) + 1) + "0";

        }


        if (_this.part1 == true) {
            //edited on 17-01-2023
            if (_this.AnswerBox.name === _this.ansBox1 || _this.AnswerBox.name === _this.ansBox_2 || _this.AnswerBox.name === _this.ansBox_3) {
                _this.counterCelebrationSound.play()
                _this.part1 = false;
                _this.part2 = true;
                _this.textbox1 = _this.AnswerBox
                _this.AnswerBox = null;
                _this.enterTxt = ''
                console.log(_this.AnswerBox)
                _this.AnswerBox = _this.add.sprite(780, 375, 'Text box_4')
                _this.disableInputs();

            }
            else {
                _this.wrongans.play();
                _this.AnswerBox.removeChild(_this.enterTxt);
                _this.disableInputs();
            }

        }
        else if (_this.part2 == true) {
            //edited on 17-01-2023
            _this.noofAttempts++;
            if ((_this.AnswerBox.name === _this.ansBox2 || _this.AnswerBox.name === _this.ansBox22) || (_this.AnswerBox.name === _this.ansBox21 || _this.AnswerBox.name === _this.ansBox22_1) || (_this.AnswerBox.name === _this.ansBox21_1 || _this.AnswerBox.name === _this.ansBox22_2)) {
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.counterCelebrationSound.play();
                _this.part2 = false;
                _this.textbox2 = _this.AnswerBox
                _this.AnswerBox = null;
                _this.enterTxt = '';
                _this.correctAns()
            }
            else {
                _this.wrongans.play();
                _this.AnswerBox.removeChild(_this.enterTxt);
                _this.disableInputs();
            }
        }
    },

    numClicked: function (target) {
        _this.clickSound.play();
        var_selectedAns1 = " "
        var_selectedAns2 = " "
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
        if (_this.finalAns == true && _this.fouransLen != 3) {
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

                _this.enterTxt = _this.add.text(37 - 15, 4, "" + _this.finalval, { fontSize: '28px' });
            else if (_this.fouransLen == 2)

                _this.enterTxt = _this.add.text(32 - 4 - 12, 4, "" + _this.finalval, { fontSize: '28px' });

            else {
                if (_this.dotselected == true)
                    _this.enterTxt = _this.add.text(13, 4, "" + _this.finalval, { fontSize: '28px' });
                else
                    _this.enterTxt = _this.add.text(9, 4, "" + _this.finalval, { fontSize: '28px' });

                _this.fourNotEntered = true
            }
            _this.applyingStyle(_this.enterTxt);
            _this.AnswerBox.addChild(_this.enterTxt);
            _this.AnswerBox.name = _this.finalval;
            _this.enterTxt.visible = true
        }

    },
    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },
    ClearAll: function () {

        _this.rightbtn.destroy();
        _this.numGroup.destroy()
        if (_this.questionBox)
            _this.questionBox.destroy();
        _this.bucket.destroy();
        _this.signBox.destroy();
        _this.textbox1.destroy();
        _this.textbox2.destroy();
        _this.lesserSign1.destroy();
        _this.lesserSign2.destroy();

    },
    applyingStyle: function (target) {
        target.align = 'right';
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
            _this.time.events.add(3000, _this.ArrangeObjects);

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

        // //*star action changes
        // _this.userHasPlayed = 1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NSD_4E_G6";
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
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSD-4E-G6/" +
            _this.languageSelected + "/DV-NSD-4E-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-4E-G6/" +
            _this.languageSelected + "/NSD-4E-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-4E-G6/" +
            _this.languageSelected + "/NSD-4E-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

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

    dA1: function () {
        _this.q1Sound.play();
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
        if (_this.q2Sound) {
            console.log("removing the q1");
            _this.q2Sound.pause();
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed
    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('nsd4e_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSD-4E-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.play();

        _this.demoAudio1.addEventListener('ended', _this.dA1);

        _this.q1Timer = setTimeout(function ()    //* q1Sound js timer to play q1Timer after 56 seconds.
        {
            console.log("inside demoAudio1sound.....")
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 23000);

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