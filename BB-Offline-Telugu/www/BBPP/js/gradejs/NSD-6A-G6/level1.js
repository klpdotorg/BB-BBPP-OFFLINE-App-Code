Game.NSD_6A_G6level1 = function () { };


Game.NSD_6A_G6level1.prototype =
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


        _this.Ask_Question1 = _this.createAudio("NSD-6A-G6A");
        _this.Ask_Question2 = _this.createAudio("NSD-6A-G6B");
        _this.Ask_Question3 = _this.createAudio("NSD-6A-G6B");
        _this.Ask_Question4 = _this.createAudio("NSD-6A-G6C");
        _this.Ask_Question5 = _this.createAudio("NSD-6A-G6D");
        _this.Ask_Question6 = _this.createAudio("NSD-6A-G6E");

        telInitializerbbpp.gameIdInit("NSD_6A_G6", gradeSelected);
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

        //  //* User Progress variables for BB++ app
        //  _this.userHasPlayed = 0;
        //  _this.timeinMinutes;
        //  _this.timeinSeconds;
        //  _this.game_id;
        //  _this.score = 0;
        //  _this.gradeTopics;
         _this.microConcepts;
        //  _this.grade;

        _this.seconds = 0;
        _this.minutes = 0;
        _this.selectedAns1 = ''
        _this.selectedAns2 = ''
        _this.selectedAns3 = ''

        _this.part1 = false;
        _this.part2 = false;
        _this.part3 = false;
        _this.part4 = false;
        _this.finalAns = false;

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
            // _this.stopVoice();
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
                if (_this.Question_flag == 3) {
                    _this.Ask_Question3.play();
                }
                if (_this.Question_flag == 4) {
                    _this.Ask_Question4.play();
                }
                if (_this.Question_flag == 5) {
                    _this.Ask_Question5.play();
                }
                if (_this.Question_flag == 6) {
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
        // _this.hintBtn = _this.add.sprite(670,6,'bulb');
        // _this.hintBtn.scale.setTo(0.5,0.6);
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
            _this.time.events.add(1, function () {
                _this.ViewDemoVideo();
            });

        });

        _this.numGroup;
        _this.grid = [];
        _this.greenBoxArr = [];
        _this.orangeBoxArr = []

        _this.generateStarsForTheScene(6);

        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);
    },


    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-6A-G6/" + _this.languageSelected + "/" + src + ".mp3");
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
        _this.showInitialScreen();

        _this.questionid = 1;

    },
    stopVoice: function () {
        _this.Ask_Question1.pause();
        _this.Ask_Question1 = null;

        _this.Ask_Question2.pause();
        _this.Ask_Question2 = null;

        _this.Ask_Question3.pause();
        _this.Ask_Question3 = null;

        _this.Ask_Question4.pause();
        _this.Ask_Question4 = null;

        _this.Ask_Question5.pause();
        _this.Ask_Question5 = null;

        _this.Ask_Question6.pause();
        _this.Ask_Question6 = null;

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
    getRandomValue: function (randomVal2, i, wholeIdx) {
        value2Array = [3, 5, 7, 9, 11]
        value2WArray = [2, 4, 6, 8, 10]
        value5Array = [6, 7, 8, 9, 11, 12, 13, 14]
        value5WArray = [5, 10, 15]
        value10Array = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        value10WArray = [10, 20, 30]
        value4WArray = [4, 8, 12, 16]
        value4Array = [5, 6, 7, 9, 10, 11, 13, 14, 15]


        if (i == wholeIdx) {
            if (randomVal2 == 2) {
                randomVal1 = value2WArray[Math.floor(Math.random() * value2WArray.length)];

            } else if (randomVal2 == 4) {
                randomVal1 = value4WArray[Math.floor(Math.random() * value4WArray.length)];

            } else if (randomVal2 == 5) {
                randomVal1 = value5WArray[Math.floor(Math.random() * value5WArray.length)];

            } else if (randomVal2 == 10) {
                randomVal1 = value10WArray[Math.floor(Math.random() * value10WArray.length)];
            }
        }
        else {

            if (randomVal2 == 2) {
                randomVal1 = value2Array[Math.floor(Math.random() * value2Array.length)];

            } else if (randomVal2 == 4) {
                randomVal1 = value4Array[Math.floor(Math.random() * value4Array.length)];

            } else if (randomVal2 == 5) {
                randomVal1 = value5Array[Math.floor(Math.random() * value5Array.length)];

            } else if (randomVal2 == 10) {
                randomVal1 = value10Array[Math.floor(Math.random() * value10Array.length)];
            }
        }

        return randomVal1;
    },
    StoreArrayValues: function () {
        // Generate 6Aven numbers and multiples of five and 2 odd
        qnCounts = []
        denomCounts = [0, 0, 0, 0]
        exclude = []
        _this.numArray = []
        _this.denomArray = []
        valuesCombinations = []

        var wholeIdx = Math.floor(Math.random() * 6)
        denom = [2, 4, 5, 10]  //only 2 denom should be repeated

        for (i = 0; i < 6; i++) {
            {
                if (i > 1) {
                    if (denomCounts[0] >= 2 && !exclude.includes(2)) {
                        exclude.push(2)
                    }
                    else if (denomCounts[1] >= 2 && !exclude.includes(4)) {
                        exclude.push(4)
                    }
                    else if (denomCounts[2] >= 2 && !exclude.includes(5)) {
                        exclude.push(5)
                    }
                    else if (denomCounts[3] >= 2 && !exclude.includes(10)) {
                        exclude.push(10)
                    }

                }
                if (i == 5) {
                    if (!_this.denomArray.includes(2))
                        randomVal2 = 2;
                    if (!_this.denomArray.includes(4))
                        randomVal2 = 4
                    if (!_this.denomArray.includes(5))
                        randomVal2 = 5
                    if (!_this.denomArray.includes(10))
                        randomVal2 = 10
                }
                else
                    randomVal2 = denom[Math.floor(Math.random() * denom.length)];

                randomVal1 = _this.getRandomValue(randomVal2, i, wholeIdx)
                value = (randomVal1) / randomVal2

                for (j = 0; j <= i; j++) {

                    if (valuesCombinations[j] == value || qnCounts[randomVal1 - 1] > 1 || exclude.includes(randomVal2)) {

                        if (i == 5) {
                            if (!_this.denomArray.includes(2))
                                randomVal2 = 2;
                            else if (!_this.denomArray.includes(4))
                                randomVal2 = 4
                            else if (!_this.denomArray.includes(5))
                                randomVal2 = 5
                            else if (!_this.denomArray.includes(10))
                                randomVal2 = 10
                            else
                                randomVal2 = denom[Math.floor(Math.random() * denom.length)];

                        }
                        else
                            randomVal2 = denom[Math.floor(Math.random() * denom.length)];

                        randomVal1 = _this.getRandomValue(randomVal2, i, wholeIdx)
                        value = (randomVal1) / randomVal2
                        j = -1;
                    }

                }
            }
            qnCounts[randomVal1 - 1] += 1;
            if (randomVal2 == 2)
                denomCounts[0] += 1;
            if (randomVal2 == 4)
                denomCounts[1] += 1;
            if (randomVal2 == 5)
                denomCounts[2] += 1;
            if (randomVal2 == 10)
                denomCounts[3] += 1;
            _this.numArray[i] = randomVal1;
            _this.denomArray[i] = randomVal2;
            valuesCombinations[i] = value

        }
        console.log(_this.numArray);
        console.log(_this.denomArray);
        console.log(valuesCombinations);
    },
    showInitialScreen: function () {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        _this.greenBoxArr = [];
        _this.orangeBoxArr = []

        _this.table1 = _this.add.sprite(400, 275, 'TextTable1')
        _this.table1.visible = false;

        _this.AnswerBox = _this.add.sprite(30, 70, 'white-box')
        _this.AnswerBox.frame = 1;
        _this.questionBox = _this.add.sprite(830, 65, 'Text box_2');
        _this.questionBox.scale.setTo(0.23, 0.26)


        if (_this.numArray[_this.count1] > 9)
            _this.text2 = _this.add.text(868, 75, _this.numArray[_this.count1])
        else
            _this.text2 = _this.add.text(875, 75, _this.numArray[_this.count1])
        _this.applyingStyle(_this.text2)
        _this.text2.fill = '#FF0000';
        _this.text2.fontSize = "26px"

        _this.lineq = _this.add.graphics();
        _this.lineq.lineStyle(3, 0xFF0000);
        if (_this.numArray[_this.count1] > 9 && _this.denomArray[_this.count1] > 9) {
            var linex = 865;
            _this.lineq.moveTo(linex, 104);
            _this.lineq.lineTo(linex + 40, 104);
        }

        else {
            var linex = 865;
            _this.lineq.moveTo(linex, 104);
            _this.lineq.lineTo(linex + 35, 104);
        }

        if (_this.denomArray[_this.count1] > 9)
            var linex = 868
        else
            var linex = 875;
        _this.text3 = _this.add.text(linex, 105, _this.denomArray[_this.count1])
        _this.applyingStyle(_this.text3)
        _this.text3.fill = '#FF0000';
        _this.text3.fontSize = "26px"

        _this.addNumberPad1();
        _this.part1 = true;
        _this.fouransLen = 0;
        _this.finalval = '';
        if (_this.count1 == 0) {
            _this.Ask_Question1.play();
        }
        _this.Question_flag = 1;
        _this.showGrayBoxes()

        _this.yellowBoxObj = []

        for (i = 0; i <= Math.floor(_this.numArray[_this.count1] / _this.denomArray[_this.count1]) - 1; i++) {

            if (_this.numArray[_this.count1] % _this.denomArray[_this.count1] == 0)
                _this.yellowBox = _this.add.sprite(300 - i * 14, 70 + i * 14, 'yellowBox')
            else
                _this.yellowBox = _this.add.sprite(150 - i * 14, 70 + i * 14, 'yellowBox')

            _this.yellowBox.scale.setTo(0.24);
            _this.yellowBoxObj.push(_this.yellowBox)
            _this.yellowBox.alpha = 1;
            for (j = i - 1; j >= 0; j--) {
                _this.yellowBoxObj[j].bringToTop()
            }

            _this.yellowBox.visible = false;
        }

    },
    // Display initial grayBoxes
    showGrayBoxes: function () {
        _this.grayboxes = [];

        if (_this.denomArray[_this.count1] == 5 || _this.denomArray[_this.count1] == 10) {
            _this.box1 = _this.add.sprite(40, 160, 'grayBox');
            _this.box1.scale.setTo(0.91, 1)
            _this.grayboxes.push(_this.box1)

            _this.box2 = _this.add.sprite(320, 160, 'grayBox');
            _this.box2.scale.setTo(0.91, 1)
            _this.grayboxes.push(_this.box2)

            _this.box3 = _this.add.sprite(600, 160, 'grayBox')
            _this.box3.scale.setTo(0.91, 1)
            _this.grayboxes.push(_this.box3)

        }
        else if (_this.denomArray[_this.count1] == 2) {
            _this.box1 = _this.add.sprite(80, 127, 'grayBox');
            _this.box1.scale.setTo(0.63, 0.59)
            _this.grayboxes.push(_this.box1)

            _this.box2 = _this.add.sprite(270, 127, 'grayBox');
            _this.box2.scale.setTo(0.63, 0.59)
            _this.grayboxes.push(_this.box2)

            _this.box3 = _this.add.sprite(460, 127, 'grayBox')
            _this.box3.scale.setTo(0.63, 0.59)
            _this.grayboxes.push(_this.box3)

            _this.box4 = _this.add.sprite(650, 127, 'grayBox');
            _this.box4.scale.setTo(0.63, 0.59)
            _this.grayboxes.push(_this.box4)


            _this.box5 = _this.add.sprite(270, 300, 'grayBox');
            _this.box5.scale.setTo(0.63, 0.59)
            _this.grayboxes.push(_this.box5)

            _this.box6 = _this.add.sprite(460, 300, 'grayBox');
            _this.box6.scale.setTo(0.63, 0.59)
            _this.grayboxes.push(_this.box6)

        }
        else if (_this.denomArray[_this.count1] == 4) {
            _this.box1 = _this.add.sprite(40, 180, 'grayBox');
            _this.box1.scale.setTo(0.74)
            _this.grayboxes.push(_this.box1)

            _this.box2 = _this.add.sprite(260, 180, 'grayBox');
            _this.box2.scale.setTo(0.74)
            _this.grayboxes.push(_this.box2)

            _this.box3 = _this.add.sprite(480, 180, 'grayBox')
            _this.box3.scale.setTo(0.74)
            _this.grayboxes.push(_this.box3)

            _this.box4 = _this.add.sprite(700, 180, 'grayBox');
            _this.box4.scale.setTo(0.74)
            _this.grayboxes.push(_this.box4)

        }

    },
    rightbtnClicked: function () {
        _this.userselected = 0;
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;
        _this.rightbtn_is_Clicked = true;

        if (_this.part1 == true) {
            if (_this.AnswerBox.name == _this.denomArray[_this.count1]) {
                _this.counterCelebrationSound.play()
                _this.part1 = false;
                _this.part2 = true;

                _this.time.events.add(500, () => {
                    _this.numGroup.destroy();
                    _this.AnswerBox.destroy()

                })
                _this.time.events.add(100, _this.divide2X2Grid, _this)
            }
            else {
                _this.wrongAnsClicked()
                _this.rightbtn.inputEnabled = true;
            }
        }
        else if (_this.part2 == true) {
            _this.rightbtn.frame = 1;

            if (_this.boxesNumCount == _this.numArray[_this.count1]) {
                _this.counterCelebrationSound.play()
                _this.part2 = false
                _this.denomArraySprites.forEach(element => {
                    element.inputEnabled = false;
                });
                _this.add.tween(_this.rightbtn).to({ alpha: 0 }, 700, 'Linear', true, 0);
                _this.add.tween(_this.selectBtn).to({ alpha: 0 }, 700, 'Linear', true, 0);
                _this.add.tween(_this.orangeBox).to({ alpha: 0 }, 700, 'Linear', true, 0);
                _this.time.events.add(500, () => {
                    _this.reArrangeBoxes()
                })

            }
            else {
                _this.wrongAnsClicked()
                _this.rightbtn.inputEnabled = true;
                _this.time.events.add(300, () => {
                    _this.rightbtn.frame = 0;
                })
            }
        }
        else if (_this.twofractionboxes == true) {

            if ((_this.AnswerBox.name == (100 / _this.denomArray[_this.count1]) * (_this.numArray[_this.count1] % _this.denomArray[_this.count1]) && _this.AnswerBox1.name == 100) || (_this.AnswerBox.name == ((100 / _this.denomArray[_this.count1]) * (_this.numArray[_this.count1] % _this.denomArray[_this.count1])) / 10 && _this.AnswerBox1.name == 10)) {
                _this.counterCelebrationSound.play()
                _this.twofractionboxes = false;
                _this.AnswerBox.frame = 0;
                _this.AnswerBox1.frame = 0;
                _this.part4 = true;

                _this.time.events.add(500, () => {
                    _this.numGroup.destroy();
                    _this.disableInputs();
                    _this.showtable1()
                })

            }
            else {
                _this.wrongAnsClicked()
                _this.rightbtn.inputEnabled = true;
            }
        }
        else if (_this.part4 == true) {
            if (_this.part11 == true) {
                var ans = '' + _this.yellowBoxObj.length;
            }
            else if (_this.part12 == true) {
                var ans = '' + _this.greenBoxArr.length
            }
            else if (_this.part13 == true) {
                var ans = '' + _this.orangeBoxgrp.length
            }
            else if (_this.finalAns == true) {
                var ans = '' + valuesCombinations[_this.count1]
            }

            if ((Number(_this.AnswerBox.name) == Number(ans)) && (_this.AnswerBox.name != '')) {

                if (_this.fouransLen == 2 && _this.dotselected == true) {
                    _this.AnswerBox.removeChild(_this.enterTxt);
                    _this.enterTxt = _this.add.text(30, 8, "" + _this.AnswerBox.name + ".0", { fontSize: '30px' });

                    _this.applyingStyle(_this.enterTxt);
                    _this.AnswerBox.addChild(_this.enterTxt);
                    _this.AnswerBox.name = Number(_this.finalval);
                    _this.enterTxt.visible = true

                }
                _this.AnswerBox.frame = 0;
                _this.counterCelebrationSound.currentTime = 0;

                _this.counterCelebrationSound.play();

                if (_this.part11 == true) {

                    _this.part11 = false;
                    _this.part12 = true;
                    _this.box11 = _this.AnswerBox
                    _this.enterTxt = '';
                    _this.AnswerBox = null;

                    _this.showfractionbox(340, 12);

                }
                else if (_this.part12 == true) {
                    _this.part12 = false;
                    _this.part13 = true;
                    _this.box12 = _this.AnswerBox
                    _this.enterTxt = '';
                    _this.AnswerBox = null;

                    _this.showfractionbox(550, 12);

                }
                else if (_this.part13 == true) {
                    _this.part13 = false;
                    _this.finalAns = true;
                    _this.box13 = _this.AnswerBox
                    _this.enterTxt = '';
                    _this.AnswerBox = null;

                    _this.showfinalAnswer();

                }

                else if (_this.finalAns == true) {
                    _this.noofAttempts++;
                    telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                    _this.part4 = false;
                    _this.correctAns();
                    _this.finalAns = false;
                    _this.AnswerBox.name = ''
                    _this.selectedAns1 = ''
                    _this.selectedAns2 = ''
                    _this.selectedAns3 = ''
                    _this.enterTxt = ''
                    _this.rightbtn.inputEnabled = true;
                    _this.fourNotEntered = false;

                }

                _this.fourNotEntered = false;
                _this.rightbtn.inputEnabled = true;
                _this.disableInputs();

            }
            else {
                _this.noofAttempts++;
                _this.wrongAnsClicked()
                _this.rightbtn.inputEnabled = true;

            }
        }

    },
    showfinalAnswer: function () {
        if (_this.count1 == 0) {

            _this.Ask_Question6.play();
        }
        _this.Question_flag = 6;

        _this.AnswerBox = _this.add.sprite(800, 390, 'Text box')

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
    divide2X2Grid: function () {
        _this.denomArraySprites = []
        _this.grayBoxesGroup = []
        _this.boxesNumCount = 0;
        _this.lastSelectedBoxIdx = 0;
        _this.idx = 0;
        _this.grayboxes.forEach(element => {
            element.visible = true;
            _this.tween = _this.add.tween(element).to({ alpha: 0 }, 700, 'Linear', true, 0);
        });

        _this.time.events.add(500, () => {

            if (_this.denomArray[_this.count1] == 2) {
                for (i = 0; i < _this.grayboxes.length; i++) {

                    gray = _this.add.sprite(_this.grayboxes[i].x, _this.grayboxes[i].y, 'grayBox')
                    gray.width = _this.grayboxes[i].width;
                    gray.height = _this.grayboxes[i].height;
                    gray.alpha = 0.2
                    _this.grayBoxesGroup.push(gray)
                    bluebox = _this.add.sprite(0, 0, '2X1_a')
                    bluebox.frame = 1;
                    bluebox.scale.setTo(1.64, 1.63)
                    gray.addChild(bluebox)
                    _this.denomArraySprites.push(bluebox)

                    bluebox1 = _this.add.sprite(0 + 137, 0, '2X1_a')
                    bluebox1.frame = 1;
                    bluebox1.scale.setTo(1.64, 1.63)
                    gray.addChild(bluebox1)
                    _this.denomArraySprites.push(bluebox1)

                }
            }
            if (_this.denomArray[_this.count1] == 4) {
                for (i = 0; i < _this.grayboxes.length; i++) {
                    gray = _this.add.sprite(_this.grayboxes[i].x, _this.grayboxes[i].y, 'grayBox')
                    gray.width = _this.grayboxes[i].width;
                    gray.height = _this.grayboxes[i].height;
                    gray.alpha = 0.2
                    _this.grayBoxesGroup.push(gray)

                    for (j = 0; j < 2; j++) {
                        bluebox = _this.add.sprite(0 + j * 136.5, 0, '4X1_a')
                        bluebox.frame = 1;
                        _this.denomArraySprites.push(bluebox)
                        // bluebox.alpha = 0.2;
                        gray.addChild(bluebox)

                        bluebox.scale.setTo(1.35, 1.36)

                        bluebox1 = _this.add.sprite(0 + j * 136.5, 0 + 137, '4X1_a')
                        bluebox1.frame = 1;
                        _this.denomArraySprites.push(bluebox1)
                        bluebox1.scale.setTo(1.35, 1.36)
                        gray.addChild(bluebox1)
                    }
                }
            }
            if (_this.denomArray[_this.count1] == 5) {
                for (i = 0; i < _this.grayboxes.length; i++) {
                    gray = _this.add.sprite(_this.grayboxes[i].x, _this.grayboxes[i].y, 'grayBox')
                    gray.width = _this.grayboxes[i].width;
                    gray.height = _this.grayboxes[i].height;
                    gray.alpha = 0.2
                    _this.grayBoxesGroup.push(gray)

                    for (j = 0; j < 5; j++) {


                        bluebox = _this.add.sprite(0 + j * 55, 0, '5X1_a')
                        bluebox.frame = 1;
                        bluebox.scale.setTo(1.1, 1.02)
                        gray.addChild(bluebox)
                        _this.denomArraySprites.push(bluebox)
                    }

                }
            }
            if (_this.denomArray[_this.count1] == 10) {
                for (i = 0; i < _this.grayboxes.length; i++) {
                    gray = _this.add.sprite(_this.grayboxes[i].x, _this.grayboxes[i].y, 'grayBox')
                    gray.width = _this.grayboxes[i].width;
                    gray.height = _this.grayboxes[i].height;
                    gray.alpha = 0.2
                    _this.grayBoxesGroup.push(gray)


                    for (j = 0; j < 5; j++) {
                        bluebox = _this.add.sprite(0 + j * 55, 0, '10X1_a')
                        bluebox.frame = 1;
                        _this.denomArraySprites.push(bluebox)
                        // bluebox.alpha = 0.2;
                        gray.addChild(bluebox)

                        bluebox.scale.setTo(1.1, 1.025)
                        bluebox1 = _this.add.sprite(0 + j * 55, 0 + 138, '10X1_a')
                        bluebox1.frame = 1;
                        _this.denomArraySprites.push(bluebox1)
                        gray.addChild(bluebox1)
                        bluebox1.scale.setTo(1.1, 1.025)

                    }

                }
            }

            for (s = 0; s < 1; s++) {
                _this.grayBoxesGroup[s].visible = true;
                _this.tween = _this.add.tween(_this.grayBoxesGroup[s]).to({ alpha: 1 }, 700, 'Linear', true, 0);

            }
            for (k = 1; k < _this.grayBoxesGroup.length; k++) {
                _this.grayBoxesGroup[k].visible = true;
                _this.tween = _this.add.tween(_this.grayBoxesGroup[k]).to({ alpha: 0.5 }, 700, 'Linear', true, 0);

            }
            _this.time.events.add(1300, () => {

                _this.denomArraySprites.forEach(element => {
                    // element.alpha = 1;
                    _this.tween.stop()

                    if (_this.count1 > 0) {
                        // Enable first box elements
                        for (t = 0; t < _this.denomArray[_this.count1]; t++) {
                            _this.denomArraySprites[t].inputEnabled = true;
                            _this.denomArraySprites[t].events.onInputDown.add(_this.boxSelected, _this);
                        }
                    }

                });
                if (_this.count1 == 0) {
                    _this.showTappingDemo();
                }
                _this.Question_flag = 3;
                _this.showorangeBox();
                _this.rightbtn = _this.add.sprite(860, 440, 'TickBtn')
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this)

                _this.SelectAlllBoxes()

            })
        })

    },
    showTappingDemo: function () {
        _this.Ask_Question3.play();

        var ycor, xcor;
        ycor = 380;

        if (_this.denomArray[_this.count1] == 2) {
            xcor = 90;
            ycor = 250;
        }
        else if (_this.denomArray[_this.count1] == 4) {
            xcor = 100;
            ycor = 260;
        }
        else if (_this.denomArray[_this.count1] == 5) { xcor = 80; }
        else if (_this.denomArray[_this.count1] == 10) {
            xcor = 75;
            ycor = 270
        }
        _this.hand = _this.add.sprite(xcor, ycor, 'hand');
        _this.hand.scale.setTo(0.6)


        _this.time.events.add(300, () => {
            _this.hand.scale.setTo(0.55);
            _this.denomArraySprites[0].frame = 0;
            _this.clickSound.play();
            _this.time.events.add(400, () => {
                _this.hand.scale.setTo(0.6);
                _this.denomArraySprites[0].frame = 1;

                _this.time.events.add(300, () => {
                    _this.hand.destroy();
                    for (t = 0; t < _this.denomArray[_this.count1]; t++) {
                        _this.denomArraySprites[t].inputEnabled = true;
                        _this.denomArraySprites[t].events.onInputDown.add(_this.boxSelected, _this);
                    }


                })

            })
        })

    },
    SelectAlllBoxes: function () {

        _this.selectBtn = _this.add.sprite(750, 445, 'selectAllBtn')
        _this.selectBtn.scale.setTo(0.6)
        _this.selectBtn.inputEnabled = true;
        _this.selectBtn.input.enableDrag(true)
        _this.selectBtn.events.onDragStop.add(_this.btnStop, _this)

    },
    btnStop: function (target) {


        for (i = 0; i < _this.grayBoxesGroup.length; i++) {
            if (_this.checkOverlap(target, _this.grayBoxesGroup[i]) && (_this.grayBoxesGroup[i].alpha == 1)) {

                if (_this.countNoofselections(_this.denomArray[_this.count1] * i) < _this.denomArray[_this.count1]) {
                    // Means all zero disable prev box, convrt to blue and then enable next box
                    // _this.snapSound.play()
                    _this.clickSound.play()
                    _this.boxesNumCount += ((_this.denomArray[_this.count1] - _this.countNoofselections(_this.denomArray[_this.count1] * i)));

                    if (_this.idx > 0) {
                        _this.tween = _this.add.tween(_this.grayBoxesGroup[((_this.idx + 1) / _this.denomArray[_this.count1]) - 1]).to({ alpha: 0.7 }, 200, 'Linear', true, 0);
                        for (t = _this.idx - _this.denomArray[_this.count1] + 1; t <= _this.idx; t++) {
                            _this.denomArraySprites[t].inputEnabled = false;
                        }
                    }

                    // coloring all blue
                    _this.tween = _this.add.tween(_this.grayBoxesGroup[Math.floor((_this.idx + 1) / _this.denomArray[_this.count1])]).to({ alpha: 1 }, 200, 'Linear', true, 0);

                    if (_this.idx == 0) {
                        for (t = _this.idx; t < _this.idx + _this.denomArray[_this.count1]; t++) {
                            _this.denomArraySprites[t].inputEnabled = true;
                            _this.denomArraySprites[t].frame = 0
                            _this.denomArraySprites[t].events.onInputDown.add(_this.boxSelected, _this);
                        }
                    }
                    else {
                        for (t = _this.idx + 1; t <= _this.idx + _this.denomArray[_this.count1]; t++) {

                            _this.denomArraySprites[t].inputEnabled = true;
                            _this.denomArraySprites[t].events.onInputDown.add(_this.boxSelected, _this);
                            _this.denomArraySprites[t].frame = 0

                        }
                    }

                    if (_this.idx == 0)
                        _this.idx += (_this.denomArray[_this.count1] - 1)
                    else
                        _this.idx += (_this.denomArray[_this.count1])
                    // enabling next set
                    if (_this.idx + 1 < _this.denomArraySprites.length) {
                        _this.tween = _this.add.tween(_this.grayBoxesGroup[Math.floor((_this.idx + 1) / _this.denomArray[_this.count1])]).to({ alpha: 1 }, 200, 'Linear', true, 0);
                        for (t = _this.idx + 1; t <= _this.idx + _this.denomArray[_this.count1]; t++) {

                            _this.denomArraySprites[t].inputEnabled = true;
                            _this.denomArraySprites[t].events.onInputDown.add(_this.boxSelected, _this);
                        }
                    }
                }
                _this.textO1.setText(_this.boxesNumCount)
                if (_this.boxesNumCount > 9)
                    _this.textO1.x = 19;
                else
                    _this.textO1.x = 25;
            }
        }
        _this.selectBtn.x = 750;
        _this.selectBtn.y = 445;

    },
    boxSelected: function (target) {
        _this.clickSound.play()
        for (m = 0; m < _this.denomArraySprites.length; m++) {
            if (target == _this.denomArraySprites[m]) {
                var index = m;
            }
        }
        if (target.frame == 1) {
            target.frame = 0;
            if (_this.idx && (_this.idx + 1) % _this.denomArray[_this.count1] == 0 && index > _this.idx && _this.idx > 0) {
                _this.tween = _this.add.tween(_this.grayBoxesGroup[(_this.idx + 1) / _this.denomArray[_this.count1] - 1]).to({ alpha: 0.7 }, 200, 'Linear', true, 0);

                for (t = _this.idx - _this.denomArray[_this.count1] + 1; t <= _this.idx; t++) {
                    _this.denomArraySprites[t].inputEnabled = false;
                }
            }
            _this.boxesNumCount++;
        }
        else if (target.frame == 0) {

            target.frame = 1;
            _this.boxesNumCount--;
            if (_this.idx && _this.idx < _this.denomArraySprites.length - 1 && _this.nextBoxSelection(_this.idx) == 0 && _this.idx > 0) {
                _this.tween = _this.add.tween(_this.grayBoxesGroup[(_this.idx + 1) / _this.denomArray[_this.count1] - 1]).to({ alpha: 1 }, 200, 'Linear', true, 0);

                for (t = _this.idx - _this.denomArray[_this.count1] + 1; t <= _this.idx; t++) {
                    _this.denomArraySprites[t].inputEnabled = true;
                }

            }
            if (index <= _this.idx && _this.idx != _this.denomArraySprites.length - 1 && _this.idx > 0) {
                _this.tween = _this.add.tween(_this.grayBoxesGroup[(_this.idx + 1) / _this.denomArray[_this.count1]]).to({ alpha: 0.5 }, 200, 'Linear', true, 0);

                for (t = _this.idx + 1; t <= _this.idx + _this.denomArray[_this.count1]; t++) {
                    _this.denomArraySprites[t].inputEnabled = false;
                }
            }
        }
        _this.textO1.setText(_this.boxesNumCount)
        if (_this.boxesNumCount > 9)
            _this.textO1.x = 19;
        else
            _this.textO1.x = 25;



        framesCount = 0;
        _this.denomArraySprites.forEach((element, idx) => {
            if (element.frame == 0) {
                framesCount++;
                if (idx < _this.denomArray[_this.count1] - 1 && element.frame == 0)
                    _this.idx = 0;
                if ((idx + 1) % _this.denomArray[_this.count1] == 0 && idx == framesCount - 1) {
                    _this.idx = idx;

                }
            }
        });
        if (framesCount % _this.denomArray[_this.count1] == 0 && _this.denomArraySprites.length > (_this.idx + _this.denomArray[_this.count1]) && _this.idx > 0) {
            _this.tween = _this.add.tween(_this.grayBoxesGroup[(_this.idx + 1) / _this.denomArray[_this.count1]]).to({ alpha: 1 }, 200, 'Linear', true, 0);
            for (t = _this.idx + 1; t <= _this.idx + _this.denomArray[_this.count1]; t++) {
                _this.denomArraySprites[t].inputEnabled = true
                _this.denomArraySprites[t].events.onInputDown.add(_this.boxSelected, _this);
            }

            framesCount = 0;
        }

    },
    countNoofselections: function (inx) {
        var count = 0;
        for (j = inx; j < inx + _this.denomArray[_this.count1]; j++) {
            if (_this.denomArraySprites[j].frame == 0) {
                count++;
            }
        }
        return count;
    },
    nextBoxSelection: function (index) {
        var count = 0;
        for (j = index + 1; j <= index + _this.denomArray[_this.count1]; j++) {
            if (_this.denomArraySprites[j].frame == 0) {
                count++;
            }
        }
        return count;
    },
    showorangeBox: function () {
        _this.numGroup.destroy()
        if (_this.denomArray[_this.count1] == 2)
            _this.orangeBox = _this.add.sprite(10, 60, 'Text box_4');

        else
            _this.orangeBox = _this.add.sprite(30, 60, 'Text box_4');
        _this.orangeBox.frame = 1;
        _this.textO1 = _this.add.text(25, 17, '0');
        _this.applyingStyle(_this.textO1)
        _this.textO1.fill = '#FFFFFF';
        _this.textO1.scale.setTo(0.9)
        _this.orangeBox.addChild(_this.textO1)

        _this.line2 = _this.add.graphics();
        _this.line2.lineStyle(2, 0xFFFFFF);
        _this.line2.moveTo(17, 45);
        _this.line2.lineTo(22 + 30, 45);
        _this.orangeBox.addChild(_this.line2)
        // _this.denomArray[_this.count1] = 7
        if (_this.denomArray[_this.count1] <= 9)
            _this.textO2 = _this.add.text(25, 47, _this.denomArray[_this.count1]);
        else {
            _this.textO2 = _this.add.text(18, 47, _this.denomArray[_this.count1]);

        }
        _this.applyingStyle(_this.textO2)
        _this.textO2.fill = '#FFFFFF';
        _this.textO2.scale.setTo(0.9)

        _this.orangeBox.addChild(_this.textO2)

    },
    storeNewBoxes: function () {
        _this.wholeBoxArr = []

        for (t = 0; t <= _this.idx; t++) {
            _this.wholeBoxArr.push(_this.denomArraySprites[t])     //elements which needs to be converted in bluebox
        }
        {
            for (t = Math.floor(_this.numArray[_this.count1] / _this.denomArray[_this.count1]) + (_this.arr.length / _this.denomArray[_this.count1]); t < _this.grayBoxesGroup.length; t++) {
                _this.tween = _this.add.tween(_this.grayBoxesGroup[t]).to({ alpha: 0 }, 200, 'Linear', true, 0);
            }
        }

        _this.time.events.add(1000, () => {
            _this.makeBlueMBoxes();
        }, _this)
    },
    makeBlueMBoxes: function () {
        _this.blueBoxesArr = []

        _this.wholeBoxArr.forEach((element, idx) => {
            if ((idx + 1) % _this.denomArray[_this.count1] == 0) {

                _this.add.tween(_this.grayBoxesGroup[(Math.floor((idx) / _this.denomArray[_this.count1]))]).to({ alpha: 0 }, 500, 'Linear', true, 0);
            }
        });

        _this.time.events.add(200, () => {
            _this.wholeBoxArr.forEach((element, idx) => {
                if ((idx + 1) % _this.denomArray[_this.count1] == 0) {
                    _this.bluebox = _this.add.sprite(_this.grayBoxesGroup[(Math.floor((idx) / _this.denomArray[_this.count1]))].x, _this.grayBoxesGroup[(Math.floor((idx) / _this.denomArray[_this.count1]))].y, 'blueBox')
                    _this.bluebox.width = _this.grayBoxesGroup[(Math.floor((idx) / _this.denomArray[_this.count1]))].width
                    _this.bluebox.height = _this.grayBoxesGroup[(Math.floor((idx) / _this.denomArray[_this.count1]))].height
                    _this.bluebox.alpha = 0.2
                    _this.blueBoxesArr.push(_this.bluebox)
                    _this.add.tween(_this.bluebox).to({ alpha: 1 }, 700, 'Linear', true, 0);

                }
            });
        })
        _this.time.events.add(1000, () => {

            _this.convertBlueBoxesToYellow()

        }, _this)


    },
    convertBlueBoxesToYellow: function () {
        var waitingtime = 0;
        var scale = Number("0." + Math.floor(_this.bluebox.scale.x * 10))
        _this.gridBox = _this.grayBoxesGroup[Math.floor(_this.numArray[_this.count1] / _this.denomArray[_this.count1])];
        if (_this.wholeBoxArr.length / _this.denomArray[_this.count1] == 1) {
            // Means we can directly tween and convet
            if (_this.arr.length > 0)
                _this.blueTween = _this.add.tween(_this.bluebox).to({ x: 150, y: 70 }, 600, 'Linear', true, 0);
            else
                _this.blueTween = _this.add.tween(_this.bluebox).to({ x: 300, y: 70 }, 600, 'Linear', true, 0);

            _this.Gridtween = _this.add.tween(_this.grayBoxesGroup[Math.floor(_this.numArray[_this.count1] / _this.denomArray[_this.count1])]).to({ x: 480, y: 70 }, 600, 'Linear', true, 0);
            _this.blueTween.onComplete.add(() => {
                _this.time.events.add(100, () => {
                    _this.timerl = _this.time.create(false);

                    //  Set a TimerEvent to occur after 2 seconds
                    _this.timerl.loop(100, function () {
                        _this.bluebox.scale.setTo(scale + 0.1)
                        if (_this.gridBox)
                            _this.gridBox.scale.setTo(scale + 0.1)

                        scale = scale + 0.1

                        if (Math.ceil(scale * 10) == 10) {
                            _this.timerl.destroy()
                            if (_this.gridBox)
                                _this.gridBox.scale.setTo(0.978)
                            if (_this.denomArray[_this.count1] == 5) {
                                _this.gridBox.scale.setTo(1, 0.985)
                            }
                            if (_this.denomArray[_this.count1] == 4) {
                                _this.gridBox.scale.setTo(0.99, 0.985)
                            }

                            _this.showConversion()
                        }

                    }, _this);
                    _this.timerl.start()


                })
            })
        }
        else {
            // Means we can directly tween and convet

            if (_this.denomArray[_this.count1] == 5 || _this.denomArray[_this.count1] == 10) {
                for (i = 1; i < _this.blueBoxesArr.length; i++) {
                    _this.bluetween = _this.add.tween(_this.blueBoxesArr[i]).to({ x: _this.blueBoxesArr[0].x + i * 16, y: _this.blueBoxesArr[0].y - i * 14 }, 700 + (i - 1) * 300, 'Linear', true, 0);

                }
                waitingtime = 1000

            }
            else if (_this.denomArray[_this.count1] == 2 || _this.denomArray[_this.count1] == 4) {
                if (_this.denomArray[_this.count1] == 2 && _this.blueBoxesArr.length == 5) {
                    for (i = 1; i < _this.blueBoxesArr.length - 1; i++) {
                        _this.tween = _this.add.tween(_this.blueBoxesArr[i]).to({ x: _this.blueBoxesArr[0].x + i * 10, y: _this.blueBoxesArr[0].y - i * 10 }, 700 + (i - 1) * 300, 'Linear', true, 0);

                    }
                    _this.time.events.add(1600, () => {
                        _this.tween = _this.add.tween(_this.blueBoxesArr[4]).to({ x: _this.blueBoxesArr[0].x + 4 * 10, y: _this.blueBoxesArr[0].y - 4 * 10 }, 700, 'Linear', true, 0);

                    })
                    waitingtime = 3000

                }

                else {
                    for (i = 1; i < _this.blueBoxesArr.length; i++) {
                        _this.tween = _this.add.tween(_this.blueBoxesArr[i]).to({ x: _this.blueBoxesArr[0].x + i * 10, y: _this.blueBoxesArr[0].y - i * 10 }, 700 + (i - 1) * 300, 'Linear', true, 0);

                    }
                    waitingtime = 2000

                }

            }

            _this.time.events.add(waitingtime, () => {
                _this.time.events.add(1000, () => {

                    for (i = _this.blueBoxesArr.length - 1; i >= 0; i--) {
                        if (_this.arr.length > 0)
                            _this.blueTween = _this.add.tween(_this.blueBoxesArr[i]).to({ x: 150 - (i) * 15, y: 70 + (i) * 14 }, 500, 'Linear', true, 0);
                        else {
                            _this.blueTween = _this.add.tween(_this.blueBoxesArr[i]).to({ x: 300 - (i) * 15, y: 70 + (i) * 14 }, 500, 'Linear', true, 0);

                        }
                        _this.blueBoxesArr[i].bringToTop()
                    }
                    waitingtime += 600;

                    if (_this.arr.length > 0)
                        _this.Gridtween = _this.add.tween(_this.grayBoxesGroup[Math.floor(_this.numArray[_this.count1] / _this.denomArray[_this.count1])]).to({ x: 480, y: 70 }, 700, 'Linear', true, 0);

                    _this.time.events.add(waitingtime, () => {
                        {
                            _this.blueBoxesArr.forEach(element => {
                                element.scale.setTo(scale)
                            });
                            if (_this.gridBox)
                                _this.gridBox.scale.setTo(scale)

                            _this.time.events.add(100, () => {
                                _this.timerl = _this.time.create(false);

                                //  Set a TimerEvent to occur after 2 seconds
                                _this.timerl.loop(100, function () {
                                    if (_this.gridBox)
                                        _this.gridBox.scale.setTo(scale + 0.1)
                                    _this.blueBoxesArr.forEach(element => {
                                        element.scale.setTo(scale + 0.1)
                                    });
                                    scale = scale + 0.1

                                    if (Math.ceil(scale * 10) == 10) {
                                        if (_this.gridBox)
                                            _this.gridBox.scale.setTo(0.978)
                                        if (_this.denomArray[_this.count1] == 5) {
                                            _this.gridBox.scale.setTo(1, 0.985)
                                        }
                                        if (_this.denomArray[_this.count1] == 4) {
                                            _this.gridBox.scale.setTo(0.99, 0.985)
                                        }

                                        _this.timerl.destroy();

                                        _this.showConversion()
                                    }

                                }, _this);
                                _this.timerl.start()

                            })
                        }
                    })
                })
            })
        }

    },
    showConversion: function () {


        _this.time.events.add(600, () => {

            _this.blueBoxesArr.forEach(element => {
                _this.tween = _this.add.tween(element).to({ alpha: 0 }, 700, 'Linear', true, 0);

            });
            _this.time.events.add(300, () => {
                _this.yellowBoxObj.forEach(element => {
                    element.visible = true;
                    _this.tween = _this.add.tween(element).to({ alpha: 1 }, 700, 'Linear', true, 0);

                });

            })


            if (_this.arr.length > 0)
                _this.showGridConversion()
            else {
                _this.part4 = true;
                _this.time.events.add(2400, () => {
                    _this.disableInputs();
                    _this.counterCelebrationSound.play()
                    _this.showtable1()
                })
            }
        })


    },

    reArrangeBoxes: function () {
        _this.framechange.play()
        var gridShowTime;
        _this.arr = []

        if (_this.idx + 1 < _this.denomArraySprites.length && _this.numArray[_this.count1] % _this.denomArray[_this.count1] != 0) {

            for (t = _this.idx + 1; t <= _this.idx + _this.denomArray[_this.count1]; t++) {
                _this.arr.push(_this.denomArraySprites[t])          //arr now stores all elements with grid to be made
            }
        }

        if (_this.arr.length == 1 && _this.arr[0].frame == 0) {
            gridShowTime = 400;
        }
        else {
            if (_this.arr.length >= 1) {
                for (let i = _this.denomArray[_this.count1] - 1; i >= 0; i--) {
                    if (_this.arr[i].frame === 0) {
                        _this.time.events.add(100 * Math.abs(i - _this.arr.length - 1), function () {
                            _this.arr[i].frame = 1;
                        });
                    }
                }

                // from end they are again making it to green 
                for (let i = 0, k = _this.denomArray[_this.count1] + 2; i < (_this.numArray[_this.count1] % _this.denomArray[_this.count1]); i++, k++) {
                    _this.time.events.add(100 * k, function () {
                        _this.arr[i].frame = 0;
                    });
                }
            }
            gridShowTime = _this.arr.length * 200 + 400;
        }

        _this.time.events.add(gridShowTime, () => {
            // _this.showGridConversion()
            _this.storeNewBoxes()
        }, _this)
    },
    convertInGrid: function () {
        _this.grid = []

        if (_this.denomArray[_this.count1] == 2) {
            for (i = 0; i < 2; i++) {

                grid = _this.add.sprite(482 + i * 134, 71, '2X1_b');
                grid.frame = 1;
                _this.grid.push(grid)
            }
        }
        else if (_this.denomArray[_this.count1] == 4) {
            for (i = 0; i < 4; i++) {
                if (i % 2 != 0) {
                    grid = _this.add.sprite(481 + Math.floor(i / 2) * 135, 204, '4X1_b');
                }
                else {
                    grid = _this.add.sprite(481 + Math.floor(i / 2) * 135, 72, '4X1_b');
                }
                grid.scale.setTo(1.02, 1.02)
                grid.frame = 1;
                _this.grid.push(grid)
            }
        }
        else if (_this.denomArray[_this.count1] == 5) {
            for (i = 0; i < 5; i++) {

                grid = _this.add.sprite(480 + i * 55, 72, '5X1_b');
                grid.frame = 1;
                grid.scale.setTo(1.02, 1)

                _this.grid.push(grid)
            }
        }
        else if (_this.denomArray[_this.count1] == 10) {
            for (i = 0; i < 10; i++) {
                if (i % 2 != 0) {
                    grid = _this.add.sprite(481 + Math.floor(i / 2) * 54, 206, '10X1_b');
                }
                else {
                    grid = _this.add.sprite(481 + Math.floor(i / 2) * 54, 72, '10X1_b');
                }
                grid.scale.setTo(1.02, 1)
                grid.frame = 1;
                _this.grid.push(grid)
            }
        }

        for (i = 0; i < _this.numArray[_this.count1] % _this.denomArray[_this.count1]; i++) {
            _this.grid[i].frame = 0;
        }
        _this.grid.forEach(element => {
            element.alpha = 0.2
            element.visible = false;
        });
    },
    showGridConversion: function () {

        _this.snapSound.play()

        _this.convertInGrid();       //making the grid boxes / Now show using some anim

        _this.arr.forEach(element => {
            _this.add.tween(element).to({ alpha: 0 }, 700, 'Linear', true, 0);

        });
        _this.time.events.add(400, () => {
            _this.grid.forEach(element => {
                element.visible = true;
                _this.tween = _this.add.tween(element).to({ alpha: 1.0 }, 700, 'Linear', true, 0);

            });
            _this.time.events.add(1100, () => {
                _this.grid.forEach(element => {
                    _this.tween.stop()
                    element.alpha = 1;

                });
            })
        })


        // for green strips delay
        _this.time.events.add(1000, () => {

            _this.greenRedConversion()
        })


    },
    displayFractionBoxes: function () {
        _this.framechange.play()

        _this.time.events.add(500, () => {

            var addvar = 590;
            // _this.equalsSign();

            _this.disableInputs();

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

            _this.Question_flag = 4;
            if (_this.count1 == 0)
                _this.Ask_Question4.play();

            _this.addNumberPad1();
        })


    },
    equalsSign: function () {
        _this.eqSign1 = _this.add.graphics();
        _this.eqSign1.lineStyle(4, 0xFF0000);
        _this.eqSign1.moveTo(655 + 5, 370 + 38);
        _this.eqSign1.lineTo(655 + 22, 370 + 38);

        _this.eqSign2 = _this.add.graphics();
        _this.eqSign2.lineStyle(4, 0xFF0000);
        _this.eqSign2.moveTo(655 + 5, 370 + 48);
        _this.eqSign2.lineTo(655 + 22, 370 + 48);
    },

    greenRedConversion: function () {

        _this.greenBoxArr = [];
        _this.orangeBoxArr = []
        _this.graygrid = _this.add.sprite(380, 70.5, 'grid');
        _this.graygrid.visible = false;


        _this.arr.forEach(element => {
            element.visible = false
        });

        if (_this.denomArray[_this.count1] == 2 || _this.denomArray[_this.count1] == 5) {
            _this.showgreenBoxMove();
            if (_this.denomArray[_this.count1] == 2) {
                finalwaitTime = 1500 * 5;
            }

            else if (_this.denomArray[_this.count1] == 5) {
                finalwaitTime = 1500 * 2 * (_this.numArray[_this.count1] % _this.denomArray[_this.count1]) + 1000;
            }
            _this.time.events.add(finalwaitTime, _this.displayFractionBoxes, _this)

        }
        else if ((_this.denomArray[_this.count1] == 4 && (_this.numArray[_this.count1] % _this.denomArray[_this.count1]) % 2 == 0) || (_this.denomArray[_this.count1] == 10 && (_this.numArray[_this.count1] % _this.denomArray[_this.count1]) % 2 == 0)) {
            _this.showgreenBoxMove();
            if (_this.denomArray[_this.count1] == 4) {
                finalwaitTime = 1500 * 5;
            }
            else if (_this.denomArray[_this.count1] == 10) {
                finalwaitTime = 1500 * Math.floor((_this.numArray[_this.count1] % _this.denomArray[_this.count1]) / 2) * 2 + 1000
            }

            _this.time.events.add(finalwaitTime, _this.displayFractionBoxes, _this)

        }
        else if ((_this.denomArray[_this.count1] == 4 && _this.numArray[_this.count1] % _this.denomArray[_this.count1] == 1) || (_this.denomArray[_this.count1] == 10 && _this.numArray[_this.count1] % _this.denomArray[_this.count1] == 1)) {
            _this.showOrangeBoxMove();

            if ((_this.denomArray[_this.count1] == 4))
                var waititme2 = 1400 * 5
            else
                var waititme2 = 1400 * 2

            _this.time.events.add(waititme2, () => {
                _this.convertRedBacktoOrange()

                if (_this.denomArray[_this.count1] == 4) {
                    finalwaitTime = 1800 * 3;
                }
                else if (_this.denomArray[_this.count1] == 10) {
                    finalwaitTime = 1800 * 2
                }
                _this.time.events.add(finalwaitTime, _this.displayFractionBoxes, _this)

            })
        }
        else {
            _this.showgreenBoxMove();
            if ((_this.denomArray[_this.count1] == 4))
                var waititme = 1200 * 5
            else
                var waititme = 1200 * (Math.floor((_this.numArray[_this.count1] % _this.denomArray[_this.count1]) / 2) * 2)

            _this.time.events.add(waititme, () => {
                _this.showOrangeBoxMove()

                if ((_this.denomArray[_this.count1] == 4))
                    var waititme2 = 1400 * 5
                else
                    var waititme2 = 1400 * 2

                _this.time.events.add(waititme2, () => {
                    _this.convertRedBacktoOrange()

                    if (_this.denomArray[_this.count1] == 4) {
                        finalwaitTime = 1800 * 3;
                    }
                    else if (_this.denomArray[_this.count1] == 10) {
                        finalwaitTime = 1800 * 2
                    }
                    _this.time.events.add(finalwaitTime, _this.displayFractionBoxes, _this)

                })

            })
        }

    },
    orangeBoxGroup: function (x) {

        _this.orangeBoxgrp = _this.add.group();

        for (i = 0; i < 5; i++) {

            orangeB = _this.add.sprite(1000, i * 26.8 + 200, 'OrangeBox');
            orangeB.scale.setTo(1, 1.027)
            _this.orangeBoxgrp.add(orangeB)

        }

    },
    showOrangeBoxMove: function () {

        let j = 0;
        var num = 0, pos = 0;
        if (_this.denomArray[_this.count1] == 4) {
            num = 5;
            pos = _this.numArray[_this.count1] % _this.denomArray[_this.count1] == 1 ? -495 : -494 + (5 * 27)

        }
        else {
            num = 2;
            pos = -495 + (((_this.numArray[_this.count1] % _this.denomArray[_this.count1]) - 1) * 27);

        }

        _this.loop = _this.time.create(false)
        _this.loop.start();
        _this.loop.loop(1200, () => {

            if (j < num) {

                _this.orangeBoxGroup()
                _this.tween1 = _this.add.tween(_this.orangeBoxgrp);
                _this.orangeBoxArr.push(_this.orangeBoxgrp)
                _this.tween1.to({ x: pos - 25 + j * 27, y: -128 }, 600, 'Linear', true, 0);

                _this.world.bringToTop(_this.orangeBoxgrp)

            }


            if (j == num) {
                _this.loop.stop();
            }
            else {
                j++;
            }
        })
    },
    convertRedBacktoOrange: function () {
        _this.time.events.add(1000, () => {
            _this.grid.forEach(element => {
                element.frame = 1;
            });

        }, _this)

        let k = 0;
        var num = 0, pos = 0;
        if (_this.denomArray[_this.count1] == 4) {
            num = 2;
            // pos = _this.numArray[_this.count1]==1?480:480+(4*27)
            pos = _this.numArray[_this.count1] % _this.denomArray[_this.count1] == 1 ? -495 : -495 + (4 * 27)

        }
        else {
            num = 1;
            // pos = 480 + (_this.numArray[_this.count1] * 27);
            pos = 0;

        }

        _this.loop3 = _this.time.create(false)
        _this.loop3.start();
        _this.loop3.loop(1800, () => {
            if (k < num) {

                _this.tween1 = _this.add.tween(_this.orangeBoxArr[_this.orangeBoxArr.length - 1 - k]);

                xpos = _this.orangeBoxArr[k].x
                _this.tween1.to({ x: xpos, y: +4 }, 600, 'Linear', true, 0);
                _this.tween1.onComplete.add(() => {

                    if (_this.greenBoxArr.length > 0) {
                        var xpos = _this.greenBoxArr[_this.greenBoxArr.length - 1].x + 27;
                    }
                    else {
                        var xpos = 480;
                    }
                    _this.snapSound.currentTime = 0;
                    _this.snapSound.play();

                    var greenbox = _this.add.sprite(xpos, 71, 'greenBox')
                    greenbox.scale.setTo(0.99, 0.985)
                    _this.orangeBoxArr[k - 1].visible = false;
                    _this.orangeBoxArr[_this.orangeBoxArr.length - k].visible = false;

                    _this.greenBoxArr.push(greenbox)

                }, _this)
            }

            if (k == num) {
                _this.loop3.stop();
            }
            else {
                k++;
            }
        })
    },
    showgreenBoxMove: function () {
        let i = 0;
        var num = 0;
        if (_this.denomArray[_this.count1] == 2) {
            num = 5;
        }
        else if (_this.denomArray[_this.count1] == 4) {
            num = 5;
        }
        else if (_this.denomArray[_this.count1] == 5) {
            num = 2 * (_this.numArray[_this.count1] % _this.denomArray[_this.count1])
        }
        else {
            num = Math.floor((_this.numArray[_this.count1] % _this.denomArray[_this.count1]) / 2) * 2
        }

        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(1200, () => {

            if (i < num) {
                var greenbox = _this.add.sprite(1000, 200, 'greenBox')
                if (_this.denomArray[_this.count1] == 5)
                    var mul = 27.5
                else
                    var mul = 27;
                greenbox.scale.setTo(0.99, 0.985)
                _this.tween1 = _this.add.tween(greenbox);
                _this.greenBoxArr.push(greenbox)
                _this.tween1.to({ x: mul * i + 480, y: 71 }, 600, 'Linear', true, 0);
            }


            if (i == num) {
                _this.loope.stop();
            }
            else {
                i++;

            }

        })
    },
    wrongAnsClicked: function () {
        _this.wrongans.play();
        if (_this.part1 == true || _this.part3 == true || _this.part4 == true) {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.AnswerBox.name = '';
            _this.disableInputs()
        }
        else if (_this.part2 == true) {
            _this.boxesNumCount = 0;
            _this.textO1.setText(_this.boxesNumCount)
            if (_this.boxesNumCount > 9)
                _this.textO1.x = 19;
            else
                _this.textO1.x = 25;

            _this.denomArraySprites.forEach(element => {
                element.frame = 1;
            });
            for (t = 0; t < _this.denomArray[_this.count1]; t++) {
                _this.denomArraySprites[t].inputEnabled = true;
                _this.denomArraySprites[t].events.onInputDown.add(_this.boxSelected, _this);
            }
            _this.grayBoxesGroup.forEach(element => {
                element.alpha = 0.5
            });
            _this.grayBoxesGroup[0].alpha = 1;
            _this.idx = 0;

        }
        else if (_this.twofractionboxes == true) {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.AnswerBox.frame = 1;
            _this.q1 = true;
            _this.AnswerBox.name = "";

            _this.AnswerBox1.removeChild(_this.enterTxt1);
            _this.AnswerBox1.frame = 0;
            _this.q2 = false;
            _this.AnswerBox1.name = "";

            _this.selectedAns2 = '';
            _this.selectedAns1 = '';
            _this.selectedAns3 = '';
        }
    },
    addNumberPad1: function () {
        _this.numpad = true;
        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        bottomnumpadbg.scale.setTo(1, 1);
        bottomnumpadbg.name = "numpadbg";
        _this.x = 110;
        _this.numGroup.visible = false;

        for (var i = 0; i < 10; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.name = i + 1;
            _this.numbg.frame = i;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked, _this);

            _this.x += 66;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, 'Numberpad');
        _this.wrongbtn.frame = 11;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, 'Numberpad');
        _this.rightbtn.frame = 12;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;

        // _this.rightbtn.events.onInputDown.removeAll();

        _this.enterTxt = _this.add.text(8, 8, "");
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fontSize = "30px";
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.fill = '#65B4C3';

        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked);

        _this.numpadTween = _this.add.tween(_this.numGroup);
        _this.tweenNumPad();
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
    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        if (_this.part1 == true || _this.part2 == true || _this.part4 == true) {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.AnswerBox.name = '';
            _this.disableInputs();

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
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.selectedAns3 = ''

        }

    },
    disableInputs: function () {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.AnswerBox.name = '';
        if (_this.AnswerBox1)
            _this.AnswerBox1.name = '';

        _this.selectedAns3 = ''
        _this.fourNotEntered = false;
        _this.dotselected = false
        _this.fouransLen = 0;
        _this.finalval = ''


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

        if (_this.finalAns == true && _this.fouransLen != 3) {
            _this.finalval += ''
            _this.finalval += target.name
            if (target.name == '.')
                target.name = 11;
            _this.fouransLen += 1;
        }
        else if ((_this.part1 == true || _this.part2 == true || _this.part4 == true) && _this.fouransLen != 2) {
            _this.finalval += ''
            _this.finalval += target.name
            if (target.name == '0')
                target.name = 10;
            _this.fouransLen += 1;
        }

        // _this.finalAns == true && _this.fourNotEntered == false
        if (_this.finalAns == true && _this.fourNotEntered == false) {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.enterTxt.visible = false;

            if ((_this.fouransLen == 1))

                _this.enterTxt = _this.add.text(37, 8, "" + _this.finalval, { fontSize: '30px' });
            else if (_this.fouransLen == 2)

                _this.enterTxt = _this.add.text(32 - 2, 8, "" + _this.finalval, { fontSize: '30px' });
            else if (_this.fouransLen == 3)

                _this.enterTxt = _this.add.text(28 - 6, 8, "" + _this.finalval, { fontSize: '30px' });

            else {
                _this.enterTxt = _this.add.text(22 - 6, 8, "" + _this.finalval, { fontSize: '30px' });
                _this.fourNotEntered = true

            }
            _this.applyingStyle(_this.enterTxt);
            _this.AnswerBox.addChild(_this.enterTxt);
            _this.AnswerBox.name = Number(_this.finalval);
            _this.enterTxt.visible = true
        }
        else if (_this.part1 == true || _this.part2 == true || (_this.part4 == true && _this.finalAns != true)) {

            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.enterTxt.visible = false;

            if ((_this.fouransLen == 1))

                _this.enterTxt = _this.add.text(18, 9, "" + _this.finalval, { fontSize: '26px' });
            else if (_this.fouransLen == 2)

                _this.enterTxt = _this.add.text(11, 9, "" + _this.finalval, { fontSize: '26px' });

            _this.applyingStyle(_this.enterTxt);
            _this.AnswerBox.addChild(_this.enterTxt);
            _this.AnswerBox.name = _this.finalval;
            _this.enterTxt.visible = true
        }
        else if (_this.q1 == true) {
            _this.enterTxt.visible = false;
            _this.AnswerBox.removeChild(_this.enterTxt);
            if ((var_selectedAns2 === " "))

                _this.enterTxt = _this.add.text(19, 11, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '20px' });

            else if ((var_selectedAns3 === " "))
                _this.enterTxt = _this.add.text(15, 11, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '20px' });

            else {
                _this.enterTxt = _this.add.text(8, 11, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '20px' });
                // _this.enterTxt.scale.setTo(0.9, 1)
                _this.q1 = false;
                _this.fourNotEntered = true

            }
            _this.enterTxt.scale.setTo(1, 1.2)

            _this.applyingStyle(_this.enterTxt);

            _this.AnswerBox.addChild(_this.enterTxt);
            _this.AnswerBox.name = Number('' + var_selectedAns1 + var_selectedAns2 + var_selectedAns3);
        }

        else if (_this.q2 == true) {
            _this.AnswerBox1.removeChild(_this.enterTxt1);
            if ((var_selectedAns2 === " "))

                _this.enterTxt1 = _this.add.text(19, 11, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '20px' });
            else if ((var_selectedAns3 === " "))
                _this.enterTxt1 = _this.add.text(14, 11, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '20px' });

            else {
                _this.enterTxt1 = _this.add.text(8, 11, "" + var_selectedAns1 + var_selectedAns2 + var_selectedAns3, { fontSize: '20px' });
                // _this.enterTxt1.scale.setTo(0.9, 1)
                _this.q2 = false;
                _this.fourNotEntered = true

            }
            _this.enterTxt1.scale.setTo(1, 1.2)

            _this.applyingStyle(_this.enterTxt1);

            _this.AnswerBox1.addChild(_this.enterTxt1);
            _this.AnswerBox1.name = Number('' + var_selectedAns1 + var_selectedAns2 + var_selectedAns3);
        }

    },
    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

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
    destroryPart1: function () {


        _this.AnswerBox.destroy();
        _this.AnswerBox1.destroy();
        _this.divideSign.destroy();
        _this.orangeBox.destroy();
        _this.box1.destroy();


    },
    showBoxJumping: function () {

        {
            _this.showyellowBoxTween()
            time = 600 * _this.yellowBoxObj.length + 300;
            _this.time.events.add(time, () => {

                _this.showgreenBoxtween();
                time2 = 700 * _this.greenBoxArr.length + 600;

                _this.time.events.add(time2, () => {

                    if (_this.orangeBoxgrp.children.length > 1)
                        _this.showredBoxtween()
                    else {
                        _this.framechange.play();
                        _this.time.events.add(800, _this.showtable2)
                    }


                }, _this);

            }, _this)

        }
        _this.greenBoxposition()


    },
    greenBoxposition: function () {

        if (_this.greenBoxArr.length == 1) {
            _this.start1pos = 589 + 4 * 19;
            _this.start2pos = 188 + 4 * 18;
        }
        if (_this.greenBoxArr.length == 2) {
            _this.start1pos = 589 + 3.4 * 19;
            _this.start2pos = 188 + 3.5 * 18;
        }
        if (_this.greenBoxArr.length == 3) {
            _this.start1pos = 589 + 3 * 19;
            _this.start2pos = 188 + 3 * 18;
        }
        if (_this.greenBoxArr.length == 4) {
            _this.start1pos = 589 + 2.4 * 19;
            _this.start2pos = 188 + 2.5 * 18;
        }
        if (_this.greenBoxArr.length == 5) {
            _this.start1pos = 591 + 2 * 19;
            _this.start2pos = 190 + 2 * 18;
        }
        if (_this.greenBoxArr.length == 6) {
            _this.start1pos = 589 + 1.3 * 19;
            _this.start2pos = 188 + 1.5 * 18;
        }
        if (_this.greenBoxArr.length == 7) {
            _this.start1pos = 589 + 1 * 19;
            _this.start2pos = 188 + 1 * 18;
        }
        if (_this.greenBoxArr.length == 8) {
            _this.start1pos = 589 + 0.7 * 19;
            _this.start2pos = 188 + 0.8 * 18;
        }
        if (_this.greenBoxArr.length == 9) {
            _this.start1pos = 589;
            _this.start2pos = 188;
        }

    },

    showgreenBoxtween: function () {
        var s = 0;
        _this.loope4 = _this.time.create(false)
        _this.loope4.start();
        _this.loope4.loop(600, () => {

            if (s < _this.greenBoxArr.length) {
                _this.tween2 = _this.add.tween(_this.greenBoxArr[s]);
                _this.tween2.to({ x: _this.start1pos + s * 19, y: 344 }, 600, 'Linear', true, 0);
                _this.greenBoxArr[s].bringToTop();
                _this.greenBoxArr[s].scale.setTo(0.45, 0.58);
            }


            if (s == _this.greenBoxArr.length) {
                _this.loope4.stop();
            }
            else {
                s++;
            }
        })
    },
    showredBoxtween: function (i) {
        _this.startpos = 835;

        var m = 0;
        _this.loope5 = _this.time.create(false)
        _this.loope5.start();
        _this.loope5.loop(600, () => {

            if (m < 5) {
                _this.tween2 = _this.add.tween(_this.orangeBoxgrp.children[m]);
                _this.tween2.to({ x: _this.startpos, y: 350 + m * 28 }, 600, 'Linear', true, 0);
            }
            _this.world.bringToTop(_this.orangeBoxgrp)


            if (m == 5) {
                _this.loope5.stop();
            }
            else {
                m++;
            }
        })


        _this.time.events.add(800 * (_this.orangeBoxgrp.length) + 400, () => {
            _this.framechange.play();
            _this.time.events.add(600, _this.showtable2)

        }, _this)

    },
    resetYellowBoxes: function (idx) {
        for (t = _this.yellowBoxObj.length - 1; t >= 0; t--) {
            _this.yellowBoxObj[t].bringToTop()
        }

    },
    showyellowBoxTween: function () {

        var i = 0;
        _this.loope5 = _this.time.create(false)
        _this.loope5.start();
        if (_this.loope5)
            _this.loope5.loop(600, () => {

                if (_this.yellowBoxObj.length == 1) {
                    xp = 435;
                }
                if (_this.yellowBoxObj.length == 3) {
                    xp = 425;
                }
                if (_this.yellowBoxObj.length == 2) {
                    xp = 430;
                }
                if (_this.yellowBoxObj.length == 4) {
                    xp = 420;
                }
                if (_this.yellowBoxObj.length == 5) {
                    xp = 415;
                }

                if (i < _this.yellowBoxObj.length) {
                    _this.tweenyellow = _this.add.tween(_this.yellowBoxObj[i]);
                    _this.tweenyellow.to({ x: 10 + xp + i * 10, y: 392 - i * 9 }, 600, 'Linear', true, 0);
                    _this.yellowBoxObj[i].scale.setTo(0.087);
                    _this.resetYellowBoxes()
                }

                if (i == _this.yellowBoxObj.length) {
                    _this.loope5.stop();
                }
                else {
                    i++;
                }
            })

    },
    showtable1: function () {
        if (_this.arr.length > 0)
            _this.destroryPart1();
        _this.tableNotshown = false;
        if (_this.graygrid)
            _this.graygrid.visible = true;

        if (_this.gridBox) {
            _this.gridBox.visible = false;
            _this.gridBox.alpha = 0;
        }
        _this.arr.forEach(element => {
            element.destroy()
        });
        _this.grid.forEach(element => {
            element.destroy()
        });
        _this.orangeBoxArr.forEach(element => {
            element.destroy()
        });

        if (_this.arr.length > 0) {
            _this.yellowBoxObj.forEach(element => {
                element.x -= 70;
                element.scale.setTo(0.14)
            });
        }
        else {
            _this.yellowBoxObj.forEach(element => {
                element.x -= 120;
                element.scale.setTo(0.14)
            });
        }

        _this.finalarr = []
        if (_this.graygrid) {
            _this.graygrid.x = 259;
            _this.graygrid.scale.setTo(0.7, 0.67)
        }

        _this.greenBoxArr.forEach(element => {
            element.x -= 220;
            element.scale.setTo(0.69, 0.67)
            element.bringToTop()
        });
        for (i = 1; i < _this.greenBoxArr.length; i++) {
            _this.greenBoxArr[i].x -= 8 * i
        }
        _this.orangeBoxgrp = _this.add.group();

        if (_this.denomArray[_this.count1] == 4 && (_this.numArray[_this.count1] % _this.denomArray[_this.count1]) % 2 != 0) {
            for (i = 0; i < 5; i++) {
                // Shwing orange boxes
                orangeB = _this.add.sprite(_this.greenBoxArr[_this.greenBoxArr.length - 1].x + 18, i * 18.5 + 71.2, 'OrangeBox');
                orangeB.scale.setTo(0.69, 0.72)
                _this.orangeBoxgrp.add(orangeB)
            }
        }
        if (_this.denomArray[_this.count1] == 5) {
            for (i = 1; i < _this.grid.length; i++) {
                _this.grid[i].x -= 19 * i
            }
        }
        if (_this.denomArray[_this.count1] == 4) {
            for (i = 1; i < _this.grid.length; i++) {

                _this.grid[i].x -= 19 * i
            }
        }
        _this.table1.visible = true;
        _this.makeTableHeader();
        _this.showBoxJumping();
    },
    showtable2: function () {
        if (_this.count1 == 0) {

            _this.time.events.add(500, () => {
                _this.Ask_Question5.play();

            })
        }
        _this.Question_flag = 5;

        if (_this.graygrid)
            _this.graygrid.destroy();

        _this.greenBoxArr.forEach(element => {
            element.visible = false;
        });
        _this.orangeBoxgrp.visible = false;

        _this.yellowBoxObj.forEach(element => {
            element.visible = false;
        });


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

        _this.addObjectTabl2();
        _this.showfractionbox(120, 12)


        _this.fourNotEntered = false;
        _this.part11 = true;
        _this.selectedAns1 = ''
        _this.selectedAns2 = ''

        _this.addNumberPad();


    },
    addObjectTabl2: function () {
        {

            if (_this.yellowBoxObj.length == 1) {
                x = 40;
            }
            if (_this.yellowBoxObj.length == 3) {
                x = 31;
            }
            if (_this.yellowBoxObj.length == 2) {
                x = 36;
            }
            if (_this.yellowBoxObj.length == 4) {
                x = 26;
            }
            if (_this.yellowBoxObj.length == 5) {
                x = 20;
            }
            for (i = _this.yellowBoxObj.length - 1; i >= 0; i--) {
                var greenbox = _this.add.sprite(x + i * 10, 105 - i * 10, 'yellowBox')
                greenbox.scale.setTo(0.09, 0.07)
                _this.table1.addChild(greenbox)

            }

        }
        {
            for (i = 0; i < _this.greenBoxArr.length; i++) {
                var greenbox = _this.add.sprite(_this.start2pos + i * 18, 60, 'greenBox')
                greenbox.scale.setTo(0.55, 0.45)
                _this.table1.addChild(greenbox)

            }


            if (_this.denomArray[_this.count1] == 4 && (_this.numArray[_this.count1] % _this.denomArray[_this.count1]) % 2 != 0) {
                for (i = 0; i < 5; i++) {
                    // Shwing orange boxes
                    orangeB = _this.add.sprite(435, i * 20 + 75, 'OrangeBox');
                    orangeB.scale.setTo(0.69, 0.5)
                    _this.table1.addChild(orangeB)

                }
            }

        }

    },
    ClearAll: function () {

        if (_this.gridBox)
            _this.gridBox.destroy()
        _this.numGroup.destroy()
        _this.grayboxes.forEach(element => {
            element.destroy()
        });
        if (_this.questionBox)
            _this.questionBox.destroy();
        _this.table1.destroy()
        _this.orangeBoxgrp.destroy();
        _this.yellowBoxObj.forEach(element => {
            element.destroy()
        });
        _this.greenBoxArr.forEach(element => {
            element.destroy()
        });
        _this.eq1.destroy();
        _this.eq2.destroy();

        _this.AnswerBox.destroy();

        _this.line.destroy()
        _this.text2.destroy();
        _this.text3.destroy();

        _this.box11.destroy();
        _this.box12.destroy();
        _this.box13.destroy();
        _this.selectBtn.destroy();

        _this.lineq.destroy();


    },
    checkOverlap: function (spriteA, spriteB) {
        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
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
            _this.time.events.add(3000, _this.showInitialScreen);

        }
        else {
            _this.celebrationSound.play();
            _this.starActions(_this.count1);
            _this.time.events.add(2000, _this.ClearAll);
            _this.time.events.add(2500, () => {
                //_this.state.start('score', true, false);
                _this.state.start('score', true, false,gameID,_this.microConcepts);


            })
        }
    },
    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');

        //  //*star action changes
        //  _this.userHasPlayed =1;
        //  _this.timeinMinutes = _this.minutes;
        //  _this.timeinSeconds = _this.seconds;
        //  _this.game_id = "NSD_6A_G6";
        //  _this.grade = "6";
        //  _this.gradeTopics = "Decimals";
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
        //* In this game, we will be able to convert improper fractions to decimals.
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSD-6A-G6/" +
            _this.languageSelected + "/DV-NSD-6A-G6A.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* Observe the blue boxes turn into whole number squares, 1/10 strips and 1/100 square pieces.
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/NSD-6A-G6/" +
            _this.languageSelected + "/DV-NSD-6A-G6B.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //* Look at the given fraction. How many parts should each of these squares should be divided into? 
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-6A-G6/" +
            _this.languageSelected + "/NSD-6A-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Select the parts to show the given improper fraction.
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-6A-G6/" +
            _this.languageSelected + "/NSD-6A-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* Count the number of coloured parts in the grid and express it as fractions
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-6A-G6/" +
            _this.languageSelected + "/NSD-6A-G6C.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        //* Complete the place value chart.
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-6A-G6/" +
            _this.languageSelected + "/NSD-6A-G6D.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        //* Write the numbers from the place value chart in a decimal form
        _this.q5Sound = document.createElement('audio');
        _this.q5Soundsrc = document.createElement('source');
        _this.q5Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-6A-G6/" +
            _this.languageSelected + "/NSD-6A-G6E.mp3");
        _this.q5Sound.appendChild(_this.q5Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.stopAudio();

            if (_this.demoVideo_1)
                _this.demoVideo_1.stop(false);
            if (_this.videoWorld_1)
                _this.videoWorld_1.destroy();
            _this.game.paused = false;  //* restart the game
        });
    },

    stopAudio: function () {
        //* clear all the timers first

        if (_this.q1Timer) clearTimeout(_this.q1Timer);
        if (_this.q3Timer) clearTimeout(_this.q3Timer);
        if (_this.q2Timer) clearTimeout(_this.q2Timer);
        if (_this.q4Timer) clearTimeout(_this.q4Timer);
        if (_this.demoAudio2Timer) clearTimeout(_this.demoAudio2Timer);
        if (_this.q5Timer) clearTimeout(_this.q5Timer);

        if (_this.demoAudio1) {
            console.log("removing the demoAudio1");
            _this.demoAudio1.pause();
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.demoAudio2) {
            console.log("removing the demoAudio2");
            _this.demoAudio2.pause();
            _this.demoAudio2 = null;
            _this.demoAudio2src = null;
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

        if (_this.q4Sound) {
            console.log("removing the q4");
            _this.q4Sound.pause();
            _this.q4Sound = null;
            _this.q4Soundsrc = null;
        }

        if (_this.q5Sound) {
            console.log("removing the q5");
            _this.q5Sound.pause();
            _this.q5Sound = null;
            _this.q5Soundsrc = null;
        }

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed

    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('nsd6a_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSD-6A-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();
        _this.demoAudio1.play();

        _this.q1Timer = setTimeout(function ()    //* q1 js timer to play q1Timer after 7 seconds.
        {
            console.log("inside q1sound.....")
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 7000);

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 16 seconds.
        {
            console.log("inside q2sound.....")
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 16000);

        _this.demoAudio2Timer = setTimeout(function ()    //* demoAudio2 js timer to play demoAudio2Timer after 27 seconds.
        {
            console.log("inside demoAudio2sound.....")
            clearTimeout(_this.demoAudio2Timer);         //* clear the time once its used.
            _this.demoAudio2.play();
        }, 27000);

        _this.q3Timer = setTimeout(function ()    //* q3 js timer to play q3Timer after 47 seconds.
        {
            _this.demoVideo_1.playbackRate = 1.2;
            console.log("inside q3sound.....")
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 47000);

        _this.q4Timer = setTimeout(function ()    //* q4 js timer to play q4Timer after 78 seconds.
        {
            console.log("inside q4sound.....")
            _this.demoVideo_1.playbackRate = 1;
            clearTimeout(_this.q4Timer);         //* clear the time once its used.
            _this.q4Sound.play();
        }, 74000);

        _this.q5Timer = setTimeout(function ()    //* q5 js timer to play q5Timer after 80 seconds.
        {
            console.log("inside q5sound.....")
            clearTimeout(_this.q5Timer);         //* clear the time once its used.
            _this.q5Sound.play();
        }, 92000);

        _this.demoVideo_1.onComplete.add(function () {
            _this.stopAudio();
            _this.demoVideo_1.stop(false);
            _this.videoWorld_1.destroy();
            _this.game.paused = false;
        });
    }
}