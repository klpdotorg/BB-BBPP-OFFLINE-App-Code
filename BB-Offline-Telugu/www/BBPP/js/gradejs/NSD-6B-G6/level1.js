Game.NSD_6B_G6level1 = function () { };


Game.NSD_6B_G6level1.prototype =
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


        _this.Ask_Question1 = _this.createAudio("NSD-6B-G6A");
        _this.Ask_Question2 = _this.createAudio("NSD-6B-G6B");
        _this.Ask_Question3 = _this.createAudio("NSD-6B-G6C");
        _this.Ask_Question4 = _this.createAudio("NSD-6B-G6D");
        _this.Ask_Question5 = _this.createAudio("NSD-6B-G6E");
        _this.Ask_Question6 = _this.createAudio("NSD-6B-G6F");


        telInitializerbbpp.gameIdInit("NSD_6B_G6", gradeSelected);
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
        _this.selectedAns3 = ''

        _this.part1 = false;
        _this.part2 = false;
        _this.part3 = false;
        _this.part4 = false;
        _this.finalAns = false;

        _this.counterForTimer = 0;

        _this.hint_flag = 0;
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
                console.log(_this.hintBtn.inputEnabled, "status of hintBtn");
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
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-6B-G6/" + _this.languageSelected + "/" + src + ".mp3");
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

        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        // Stores Random Question values in Array
        _this.StoreArrayValues();
        _this.showInitialScreen();

        console.log("inside get question.....");
        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1;
    },
    stopVoice: function () {
        console.log("hello")
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
    StoreArrayValues: function () {
        // Generate 6Bven numbers and multiples of five and 2 odd
        qnCounts = [0, 0, 0, 0, 0]
        denomCounts = [0, 0, 0, 0]
        exclude = []
        _this.numArray = []
        _this.denomArray = []
        _this.wholeArray = []

        valuesCombinations = []
        wholeoptions = [1, 2, 3, 4, 5]
        denom = [2, 4, 5, 10]  //only 2 denom should be repeated
        // num shoule be 1 - denom-1

        for (i = 0; i < 6; i++) {
            {

                randomVal1 = wholeoptions[Math.floor(Math.random() * wholeoptions.length)];
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
                randomVal3 = Math.floor(Math.random() * (randomVal2 - 1) + 1)
                value = (randomVal2 * randomVal1 + randomVal3) / randomVal2
                for (j = 0; j <= i; j++) {

                    if (valuesCombinations[j] == value || qnCounts[randomVal1 - 1] > 1 || exclude.includes(randomVal2)) {
                        randomVal1 = wholeoptions[Math.floor(Math.random() * wholeoptions.length)];

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
                        randomVal3 = Math.floor(Math.random() * (randomVal2 - 1 - 1) + 1);
                        value = (randomVal2 * randomVal1 + randomVal3) / randomVal2
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
                denomCounts[5] += 1;
            if (randomVal2 == 10)
                denomCounts[10] += 1;
            _this.numArray[i] = randomVal3;
            _this.denomArray[i] = randomVal2;
            _this.wholeArray[i] = randomVal1;
            valuesCombinations[i] = value


        }
        console.log(_this.wholeArray);
        console.log(_this.numArray);
        console.log(_this.denomArray);
        console.log(valuesCombinations);

    },
    showInitialScreen: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        _this.table1 = _this.add.sprite(400, 275, 'TextTable1')
        _this.table1.visible = false;


        _this.AnswerBox = _this.add.sprite(30, 70, 'white-box')
        _this.AnswerBox.frame = 1;

        _this.questionBox = _this.add.sprite(840, 70, 'Text box_2');
        _this.questionBox.scale.setTo(0.30, 0.32)




        if (_this.denomArray[_this.count1] > 9) {
            _this.text1 = _this.add.text(860, 90, _this.wholeArray[_this.count1]);
            _this.applyingStyle(_this.text1)
            _this.text1.fill = '#FF0000';

            _this.text2 = _this.add.text(887, 80, _this.numArray[_this.count1])
            _this.applyingStyle(_this.text2)
            _this.text2.fontSize = "22px";
            _this.text2.fill = '#FF0000';

            _this.lineq = _this.add.graphics();
            _this.lineq.lineStyle(2, 0xFF0000);
            _this.lineq.moveTo(880, 105);
            _this.lineq.lineTo(880 + 30, 105);


            _this.text3 = _this.add.text(880, 105, _this.denomArray[_this.count1])

            _this.applyingStyle(_this.text3)
            _this.text3.fontSize = "22px";
            _this.text3.fill = '#FF0000';
        }
        else {
            _this.text1 = _this.add.text(863, 90, _this.wholeArray[_this.count1]);
            _this.applyingStyle(_this.text1)
            _this.text1.fill = '#FF0000';

            _this.text2 = _this.add.text(888, 80, _this.numArray[_this.count1])
            _this.applyingStyle(_this.text2)
            _this.text2.fontSize = "22px";
            _this.text2.fill = '#FF0000';

            _this.lineq = _this.add.graphics();
            _this.lineq.lineStyle(2, 0xFF0000);
            _this.lineq.moveTo(882, 105);
            _this.lineq.lineTo(882 + 28, 105);

            _this.text3 = _this.add.text(888, 105, _this.denomArray[_this.count1])

            _this.applyingStyle(_this.text3)
            _this.text3.fontSize = "22px";
            _this.text3.fill = '#FF0000';
        }

        _this.addNumberPad1();
        _this.part1 = true;
        _this.fouransLen = 0;
        _this.finalval = '';
        if (_this.count1 == 0) {
            _this.Ask_Question1.play();

        }
        _this.Question_flag = 1;


    },
    rightbtnClicked: function () {
        _this.userselected = 0;
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;
        _this.rightbtn_is_Clicked = true;

        if (_this.part1 == true) {
            if (_this.AnswerBox.name == _this.wholeArray[_this.count1]) {
                _this.counterCelebrationSound.play()
                _this.part1 = false;
                _this.part2 = true;

                _this.time.events.add(500, () => {
                    // _this.add.tween(_this.numGroup).to({ alpha: 0.0 }, 800, 'Linear', true, 0);
                    // _this.add.tween(_this.AnswerBox).to({ alpha: 0.0 }, 800, 'Linear', true, 0);
                    _this.numGroup.destroy();
                    _this.AnswerBox.destroy()

                })
                _this.time.events.add(100, _this.showYellowBoxes, _this)

            }
            else {
                _this.wrongAnsClicked()
                _this.rightbtn.inputEnabled = true;
            }
        }
        else if (_this.part2 == true) {
            if (_this.AnswerBox.name == _this.denomArray[_this.count1]) {
                _this.counterCelebrationSound.play()
                _this.part2 = false
                _this.part3 = true;

                _this.time.events.add(500, () => {
                    // _this.add.tween(_this.AnswerBox).to({ alpha: 0.0 }, 800, 'Linear', true, 0);
                    _this.AnswerBox.destroy()
                    _this.numGroup.destroy();

                    // _this.add.tween(_this.graybox).to({ alpha: 1.0 }, 800, 'Linear', true, 0);
                    _this.divideGrid()

                })

            }
            else {
                _this.wrongAnsClicked()
                _this.rightbtn.inputEnabled = true;
            }
        }
        else if (_this.part3 == true) {
            _this.rightbtn.frame = 1;

            if (_this.boxesNumCount == _this.numArray[_this.count1]) {
                _this.counterCelebrationSound.play()
                _this.part3 = false
                _this.arr.forEach(element => {
                    element.inputEnabled = false;
                });

                _this.rightbtn.destroy();

                _this.time.events.add(500, () => {
                    _this.reArrangeBoxes()
                })
                // _this.time.events.add(1000, _this.showYellowBoxes, _this)

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

            if ((_this.AnswerBox.name == (100 / _this.denomArray[_this.count1]) * _this.numArray[_this.count1] && _this.AnswerBox1.name == 100) || (_this.AnswerBox.name == ((100 / _this.denomArray[_this.count1]) * _this.numArray[_this.count1]) / 10 && _this.AnswerBox1.name == 10)) {
                _this.counterCelebrationSound.play()
                _this.twofractionboxes = false;
                _this.AnswerBox.frame = 0;
                _this.AnswerBox1.frame = 0;
                _this.part4 = true;

                _this.time.events.add(500, () => {

                    _this.numGroup.destroy();
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
                console.log(ans)
            }
            else if (_this.finalAns == true) {
                var ans = '' + valuesCombinations[_this.count1]
            }

            if ((Number(_this.AnswerBox.name) == Number(ans)) && (_this.AnswerBox.name != '')) {

                _this.AnswerBox.frame = 0;
                _this.counterCelebrationSound.currentTime = 0;

                _this.counterCelebrationSound.play();

                if (_this.part11 == true) {

                    _this.part11 = false;
                    _this.part12 = true;
                    _this.box1 = _this.AnswerBox
                    _this.enterTxt = '';
                    _this.AnswerBox = null;

                    _this.showfractionbox(340, 12);

                }
                else if (_this.part12 == true) {
                    _this.part12 = false;
                    _this.part13 = true;
                    _this.box2 = _this.AnswerBox
                    _this.enterTxt = '';
                    _this.AnswerBox = null;

                    _this.showfractionbox(550, 12);

                }
                else if (_this.part13 == true) {
                    _this.part13 = false;
                    _this.finalAns = true;
                    _this.box3 = _this.AnswerBox
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
    showYellowBoxes: function () {
        _this.yellowBoxObj = []
        _this.slideGrp = _this.add.group();



        _this.disableInputs();
        for (i = _this.wholeArray[_this.count1] - 1; i >= 0; i--) {

            _this.yellowBox = _this.add.sprite(150 - i * 14, 70 + i * 14, 'yellowBox')
            _this.yellowBox.scale.setTo(0.24);
            _this.yellowBoxObj.push(_this.yellowBox)
            _this.slideGrp.add(_this.yellowBox);

        }

        _this.yellowBoxObj.forEach(element => {
            element.bringToTop()
        });

        _this.graybox = _this.add.sprite(480, 70, 'grayBox')
        _this.graybox.scale.setTo(0.24)

        _this.slideGrp.add(_this.graybox);
        _this.slideGrp.x = -1000;
        var tween = _this.add.tween(_this.slideGrp);
        tween.to({ x: 0 }, 2000, 'Linear', true, 0);

        tween.onComplete.add(() => {
            _this.time.events.add(500, () => {
                _this.box1 = _this.add.sprite(250, 404, 'Text box 2')
                _this.box1.scale.setTo(0.8)
                text = _this.add.text(30, 15, _this.wholeArray[_this.count1])
                text.scale.setTo(1.2)
                _this.applyingStyle(text)
                text.fill = '#FF0000';
                _this.box1.addChild(text)

                if (_this.count1 == 0) {
                    _this.Ask_Question2.play();
                }

                _this.AnswerBox = _this.add.sprite(600, 406, 'white-box')
                _this.AnswerBox.frame = 1;
                _this.addNumberPad1()
            })


        }, _this)
        _this.Question_flag = 2;
    },

    divideGrid: function () {
        _this.denom2Array = []
        _this.denom4Array = []
        _this.denom5Array = []
        _this.denom10Array = []
        _this.boxesNumCount = 0;
        _this.Ask_Question2.pause();
        _this.Ask_Question2.currentTime = 0;
        _this.graybox.scale.setTo(0.24, 0.238)

        _this.Question_flag = 3;
        if (_this.denomArray[_this.count1] == 2) {
            for (i = 0; i < _this.denomArray[_this.count1]; i++) {
                bluebox = _this.add.sprite(i * 136 + 480, 70, '2X1_a')
                bluebox.scale.setTo(1.61, 1.61)
                bluebox.frame = 1;
                _this.denom2Array.push(bluebox)
                bluebox.alpha = 0.2;
                bluebox.visible = false;
                // bluebox.inputEnabled = true;
                // bluebox.events.onInputDown.add(_this.boxSelected, _this)
            }
            _this.denom2Array[0].x += 2;
        }
        else if (_this.denomArray[_this.count1] == 5) {
            for (i = 0; i < _this.denomArray[_this.count1]; i++) {
                bluebox = _this.add.sprite(i * 55 + 480, 71, '5X1_a')
                bluebox.scale.setTo(1.09, 1.0)
                bluebox.frame = 1;
                bluebox.alpha = 0.2;
                bluebox.visible = false;
                _this.denom5Array.push(bluebox)
                // bluebox.inputEnabled = true;
                // bluebox.events.onInputDown.add(_this.boxSelected, _this)

            }
        }

        else if (_this.denomArray[_this.count1] == 4) {
            for (i = 0; i < 2; i++) {
                bluebox = _this.add.sprite(i * 136 + 480, 71, '4X1_a')
                bluebox.scale.setTo(1.34, 1.32)
                bluebox.frame = 1;
                bluebox.alpha = 0.2;
                bluebox.visible = false;
                _this.denom4Array.push(bluebox)


                bluebox1 = _this.add.sprite(i * 136 + 480, 205, '4X1_a')
                bluebox1.scale.setTo(1.34, 1.32)
                bluebox1.frame = 1;
                bluebox1.alpha = 0.2;
                bluebox1.visible = false;
                _this.denom4Array.push(bluebox1)

                // bluebox.inputEnabled = true;
                // bluebox.events.onInputDown.add(_this.boxSelected, _this)
            }
        }

        else if (_this.denomArray[_this.count1] == 10) {
            for (i = 0; i < 5; i++) {
                bluebox = _this.add.sprite(i * 54 + 480, 70, '10X1_a')
                bluebox.scale.setTo(1.1, 1)
                bluebox.frame = 1;
                bluebox.alpha = 0.2;
                bluebox.visible = false;
                _this.denom10Array.push(bluebox)
                // bluebox.inputEnabled = true;
                // bluebox.events.onInputDown.add(_this.boxSelected, _this)

                bluebox1 = _this.add.sprite(i * 54 + 480, 138 + 67, '10X1_a')
                bluebox1.scale.setTo(1.1, 1.0)
                bluebox1.frame = 1;
                bluebox1.alpha = 0.2;
                bluebox1.visible = false;
                _this.denom10Array.push(bluebox1)
            }
        }
        _this.time.events.add(500, () => {

            _this.add.tween(_this.graybox).to({ alpha: 0.5 }, 800, 'Linear', true, 0);

        })
        if (_this.denomArray[_this.count1] == 2) {
            _this.arr = _this.denom2Array
        }
        else if (_this.denomArray[_this.count1] == 4) {
            _this.arr = _this.denom4Array
        }
        else if (_this.denomArray[_this.count1] == 5) {
            _this.arr = _this.denom5Array
        }
        else {
            _this.arr = _this.denom10Array

        }
        _this.time.events.add(800, () => {

            _this.arr.forEach(element => {
                element.visible = true;
                _this.tween = _this.add.tween(element).to({ alpha: 1 }, 700, 'Linear', true, 0);
            });
            _this.time.events.add(800, () => {
                // _this.graybox.scale.setTo(0.24, 0.238)
            })
            _this.time.events.add(1200, () => {

                _this.arr.forEach(element => {
                    element.alpha = 1;
                    _this.tween.stop()

                    if (_this.count1 > 0) {

                        element.inputEnabled = true;
                        element.events.onInputDown.add(_this.boxSelected, _this)
                    }

                });
                if (_this.count1 == 0) {
                    _this.showTappingDemo();
                }
                _this.showorangeBox();
                _this.rightbtn = _this.add.sprite(820, 400, 'TickBtn')
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this)


            })

        })

    },
    showTappingDemo: function () {
        _this.Ask_Question3.play();

        var ycor, xcor;
        ycor = 300;

        if (_this.denomArray[_this.count1] == 2) {
            xcor = 600
        }
        else if (_this.denomArray[_this.count1] == 4) {
            xcor = 600;
            ycor = 180;
        }
        else if (_this.denomArray[_this.count1] == 5) { xcor = 520; }
        else if (_this.denomArray[_this.count1] == 10) {
            xcor = 520;
            ycor = 180
        }
        _this.hand = _this.add.sprite(xcor, ycor, 'hand');
        _this.hand.scale.setTo(0.6)


        _this.time.events.add(300, () => {
            _this.hand.scale.setTo(0.55);
            _this.arr[0].frame = 0;
            _this.clickSound.play();
            _this.time.events.add(400, () => {
                _this.hand.scale.setTo(0.6);
                _this.arr[0].frame = 1;

                _this.time.events.add(300, () => {
                    _this.hand.destroy();
                    _this.arr.forEach(element => {
                        element.inputEnabled = true;
                        element.events.onInputDown.add(_this.boxSelected, _this)

                    });
                })

            })
        })

    },
    boxSelected: function (target) {
        _this.clickSound.play()
        if (target.frame == 1) {
            target.frame = 0;
            _this.boxesNumCount++;
        }
        else if (target.frame == 0) {

            target.frame = 1;
            _this.boxesNumCount--;
        }
        _this.textO1.setText(_this.boxesNumCount)

    },
    showorangeBox: function () {
        _this.orangeBox = _this.add.sprite(580, 365, 'Text box_4');
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
    reArrangeBoxes: function () {
        _this.framechange.play()
        var gridShowTime;

        if (_this.numArray[_this.count1] == 1 && _this.arr[0].frame == 0) {
            gridShowTime = 400;
        }
        else {
            for (let i = _this.denomArray[_this.count1] - 1; i >= 0; i--) {
                if (_this.arr[i].frame === 0) {
                    _this.time.events.add(100 * Math.abs(i - _this.arr.length - 1), function () {
                        _this.arr[i].frame = 1;
                    });
                }
            }

            // from end they are again making it to green 
            for (let i = 0, k = _this.denomArray[_this.count1] + 2; i < (_this.numArray[_this.count1]); i++, k++) {
                _this.time.events.add(100 * k, function () {
                    _this.arr[i].frame = 0;
                });
            }
            gridShowTime = _this.arr.length * 200 + 300;
        }

        _this.time.events.add(gridShowTime, () => {
            _this.showGridConversion()
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
                    grid = _this.add.sprite(481 + Math.floor(i / 2) * 135, 206, '4X1_b');
                }
                else {
                    grid = _this.add.sprite(481 + Math.floor(i / 2) * 135, 72, '4X1_b');
                }
                grid.scale.setTo(1.02, 1)
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

        for (i = 0; i < _this.numArray[_this.count1]; i++) {
            _this.grid[i].frame = 0;
        }
        _this.grid.forEach(element => {
            element.alpha = 0.2
            element.visible = false;
        });
    },
    showGridConversion: function () {

        _this.orangeBox.frame = 0;
        _this.textO1.fill = '#FF0000';
        _this.textO2.fill = '#FF0000';

        _this.line3 = _this.add.graphics();
        _this.line3.lineStyle(2, 0xFF0000);
        _this.line3.moveTo(17, 45);
        _this.line3.lineTo(22 + 30, 45);
        _this.orangeBox.addChild(_this.line3)

        _this.snapSound.play()


        _this.convertInGrid();       //making the grid boxes / Now show using some anim

        _this.arr.forEach(element => {
            _this.add.tween(element).to({ alpha: 0.4 }, 700, 'Linear', true, 0);

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


        // to change green strips delay
        _this.time.events.add(1000, () => {
            _this.greenRedConversion()
        })


    },
    displayFractionBoxes: function () {
        _this.framechange.play()

        _this.time.events.add(500, () => {

            var addvar = 692;
            _this.equalsSign();

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
                finalwaitTime = 1500 * 2 * _this.numArray[_this.count1] + 1000;
            }
            _this.time.events.add(finalwaitTime, _this.displayFractionBoxes, _this)

        }
        else if ((_this.denomArray[_this.count1] == 4 && _this.numArray[_this.count1] % 2 == 0) || (_this.denomArray[_this.count1] == 10 && _this.numArray[_this.count1] % 2 == 0)) {
            _this.showgreenBoxMove();
            if (_this.denomArray[_this.count1] == 4) {
                finalwaitTime = 1500 * 5;
            }
            else if (_this.denomArray[_this.count1] == 10) {
                finalwaitTime = 1500 * Math.floor(_this.numArray[_this.count1] / 2) * 2 + 1000
            }
            _this.time.events.add(finalwaitTime, _this.displayFractionBoxes, _this)


        }
        else if ((_this.denomArray[_this.count1] == 4 && _this.numArray[_this.count1] == 1) || (_this.denomArray[_this.count1] == 10 && _this.numArray[_this.count1] == 1)) {
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
                var waititme = 1200 * (Math.floor(_this.numArray[_this.count1] / 2) * 2)

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
            pos = _this.numArray[_this.count1] == 1 ? -495 : -494 + (5 * 27)

        }
        else {
            num = 2;
            pos = -495 + ((_this.numArray[_this.count1] - 1) * 27);

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
            pos = _this.numArray[_this.count1] == 1 ? -495 : -495 + (4 * 27)

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
            num = 2 * _this.numArray[_this.count1]
        }
        else {
            num = Math.floor(_this.numArray[_this.count1] / 2) * 2
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
        if (_this.part1 == true || _this.part2 == true || _this.part4 == true) {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.AnswerBox.name = '';
            _this.disableInputs()
        }
        else if (_this.part3 == true) {
            // _this.orangeBox.destroy();
            _this.boxesNumCount = 0;
            _this.textO1.setText(_this.boxesNumCount)

            _this.boxesNumCount = 0;
            _this.arr.forEach(element => {
                element.frame = 1;
            });
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
            // _this.enterTxt.scale.setTo(1.2, 1.4)

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
        _this.eqSign1.destroy();
        _this.eqSign2.destroy();
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
            _this.start2pos = 188 + 2.6 * 18;
        }
        if (_this.greenBoxArr.length == 5) {
            _this.start1pos = 591 + 2 * 19;
            _this.start2pos = 190 + 2 * 18;
        }
        if (_this.greenBoxArr.length == 6) {
            _this.start1pos = 589 + 1.4 * 19;
            _this.start2pos = 188 + 1.7 * 18;
        }
        if (_this.greenBoxArr.length == 7) {
            _this.start1pos = 589 + 1 * 19;
            _this.start2pos = 188 + 1 * 18;
        }
        if (_this.greenBoxArr.length == 8) {
            _this.start1pos = 589 + 0.6 * 19;
            _this.start2pos = 188 + 0.7 * 18;
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
        _this.destroryPart1();
        _this.tableNotshown = false;
        // _this.graygrid = _this.add.sprite(380,70,'grid');
        _this.graygrid.visible = true;
        _this.graybox.destroy()
        _this.arr.forEach(element => {
            element.destroy()
        });
        _this.grid.forEach(element => {
            element.destroy()
        });
        _this.orangeBoxArr.forEach(element => {
            element.destroy()
        });

        _this.yellowBoxObj.forEach(element => {
            element.x -= 70;
            element.scale.setTo(0.14)
        });

        _this.finalarr = []
        _this.graygrid.x = 259;
        _this.graygrid.scale.setTo(0.7, 0.67)

        _this.greenBoxArr.forEach(element => {
            element.x -= 220;
            element.scale.setTo(0.69, 0.67)
            element.bringToTop()
        });
        for (i = 1; i < _this.greenBoxArr.length; i++) {
            _this.greenBoxArr[i].x -= 8 * i
        }
        _this.orangeBoxgrp = _this.add.group();

        if (_this.denomArray[_this.count1] == 4 && _this.numArray[_this.count1] % 2 != 0) {
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
                x = 30;
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


            if (_this.denomArray[_this.count1] == 4 && _this.numArray[_this.count1] % 2 != 0) {
                for (i = 0; i < 5; i++) {
                    // Shwing orange boxes
                    orangeB = _this.add.sprite(435, i * 20 + 75, 'OrangeBox');
                    orangeB.scale.setTo(0.69, 0.5)
                    // _this.orangeBoxgrp.add(orangeB)
                    _this.table1.addChild(orangeB)

                }
            }

        }

    },
    ClearAll: function () {

        _this.numGroup.destroy()
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
        _this.box1.destroy();
        _this.box2.destroy();
        _this.box3.destroy();

        _this.line.destroy()
        _this.text1.destroy();
        _this.text2.destroy();
        _this.text3.destroy();

        _this.lineq.destroy();


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

        // //*star action changes
        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NSD_6B_G6";
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
        //* In this game, we will be able to convert mixed fractions to decimals.
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSD-6B-G6/" +
            _this.languageSelected + "/DV-NSD-6B-G6A.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* Observe the blue box turn into 1/10 strips and 1/100 square pieces.
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/NSD-6B-G6/" +
            _this.languageSelected + "/DV-NSD-6B-G6B.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //* Identify and type the whole number in the given mixed fraction. 
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-6B-G6/" +
            _this.languageSelected + "/NSD-6B-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Look at the given fraction and write the number of parts the square should be divided into.
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-6B-G6/" +
            _this.languageSelected + "/NSD-6B-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* Select the parts to show the fraction.
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-6B-G6/" +
            _this.languageSelected + "/NSD-6B-G6C.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        //* Count the number of coloured parts in the grid and express it as fractions
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-6B-G6/" +
            _this.languageSelected + "/NSD-6B-G6D.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        //* Complete the place value chart.
        _this.q5Sound = document.createElement('audio');
        _this.q5Soundsrc = document.createElement('source');
        _this.q5Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-6B-G6/" +
            _this.languageSelected + "/NSD-6B-G6E.mp3");
        _this.q5Sound.appendChild(_this.q5Soundsrc);

        //* Write the numbers from the place value chart in a decimal form
        _this.q6Sound = document.createElement('audio');
        _this.q6Soundsrc = document.createElement('source');
        _this.q6Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-6B-G6/" +
            _this.languageSelected + "/NSD-6B-G6F.mp3");
        _this.q6Sound.appendChild(_this.q6Soundsrc);

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
        if (_this.q3Timer) clearTimeout(_this.q3Timer);
        if (_this.q2Timer) clearTimeout(_this.q2Timer);
        if (_this.q4Timer) clearTimeout(_this.q4Timer);
        if (_this.demoAudio2Timer) clearTimeout(_this.demoAudio2Timer);
        if (_this.q5Timer) clearTimeout(_this.q5Timer);
        if (_this.q6Timer) clearTimeout(_this.q6Timer);

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

        if (_this.q6Sound) {
            console.log("removing the q6");
            _this.q6Sound.pause();
            _this.q6Sound = null;
            _this.q6Soundsrc = null;
        }

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed

    },
    dA1: function () {
        _this.q2Sound.play();
    },

    dA2: function () {
        _this.demoAudio2.play();
    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('nsd6b_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSD-6B-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();
        _this.demoAudio1.play();

        _this.q1Timer = setTimeout(function ()    //* q1 js timer to play q1Timer after 11 seconds.
        {
            console.log("inside q1sound.....")
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 8000);

        _this.q1Sound.addEventListener('ended', _this.dA1);  //* after demoAudio is played, start q1

        _this.q3Timer = setTimeout(function ()    //* q3 js timer to play q3Timer after 24 seconds.
        {
            console.log("inside q3sound.....")
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 24000);

        _this.q3Sound.addEventListener('ended', _this.dA2);  //* after q3 is played, start demoaudio2

        _this.q4Timer = setTimeout(function ()    //* q4 js timer to play q4Timer after 39 seconds.
        {
            console.log("inside q4sound.....")
            clearTimeout(_this.q4Timer);         //* clear the time once its used.
            _this.q4Sound.play();
        }, 39000);

        _this.q5Timer = setTimeout(function ()    //* q5 js timer to play q5Timer after 67 seconds.
        {
            console.log("inside q5sound.....")
            clearTimeout(_this.q5Timer);         //* clear the time once its used.
            _this.q5Sound.play();
        }, 67000);

        _this.q6Timer = setTimeout(function ()    //* q6 js timer to play q6Timer after 82 seconds.
        {
            console.log("inside q6sound.....")
            clearTimeout(_this.q6Timer);         //* clear the time once its used.
            _this.q6Sound.play();
        }, 82000);

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