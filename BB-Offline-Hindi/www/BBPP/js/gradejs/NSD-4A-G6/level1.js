Game.NSD_4A_G6level1 = function () { };


Game.NSD_4A_G6level1.prototype =
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

        _this.Ask_Question1 = _this.createAudio("NSD-4A-G6A");
        _this.Ask_Question2 = _this.createAudio("NSD-4A-G6B");

        telInitializerbbpp.gameIdInit("NSD_4A_G6", gradeSelected);
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

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        _this.hint_flag = 0;
        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        //   //*  User Progress variables for BB++ app
        //   _this.userHasPlayed = 0;
        //   _this.timeinMinutes;
        //   _this.timeinSeconds;
        //   _this.game_id;
        //   _this.score = 0;
        //   _this.gradeTopics;
        // _this.microConcepts;
        //   _this.grade;

        _this.Question_flag = -1;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';
        _this.selectedAns4 = '';

        // To keep track of decimal point
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
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-4A-G6/" + _this.languageSelected + "/" + src + ".mp3");
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
    stopVoice: function () {
        if (_this.Ask_Question1) {
            if (_this.Ask_Question1.contains(_this.src)) {
                _this.Ask_Question1.removeChild(_this.src);
                _this.src = null;
            }
            if (!_this.Ask_Question1.paused) {
                _this.Ask_Question1.pause();
                _this.playQuestionSound.currentTime = 0.0;
            }
            _this.Ask_Question1 = null;
            _this.src = null;
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
        NearestNum = [];
        valuesCombinations = []

        var getWholeIdx = Math.floor(Math.random() * 6)
        _this.got = false;
        for (let i = 0; i < 6; i++) {

            if (i == getWholeIdx) {
                var val = [1, 2, 3]
                Value1Array[i] = val[Math.floor(Math.random() * val.length)];
                Value10thArray[i] = 0;
                value = (Value1Array[i] + "." + Value10thArray[i])

            }
            else {
                Value1Array[i] = Math.floor(Math.random() * (3 - 0) + 0);
                Value10thArray[i] = Math.floor(Math.random() * (10 - 1) + 1);


                var value = (Value1Array[i] + "." + Value10thArray[i])
                for (k = 0; k < i; k++) {
                    if (valuesCombinations[k] == value) {
                        Value1Array[i] = Math.floor(Math.random() * (3 - 0) + 0);
                        Value10thArray[i] = Math.floor(Math.random() * (10 - 1) + 1);
                        value = (Value1Array[i] + "." + Value10thArray[i])

                        k = 0;
                    }
                }


            }
            valuesCombinations[i] = value;
            if (value >= 0.0 && value < 0.5)
                NearestNum[i] = 0
            else if (value >= 0.5 && value < 1.5)
                NearestNum[i] = 1
            else if (value >= 1.5 && value < 2.5)
                NearestNum[i] = 2
            else
                NearestNum[i] = 3
        }

        console.log(valuesCombinations)
        console.log(NearestNum)
        _this.ArrangeObjects()

    },
    ArrangeObjects: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        _this.userselectedBox = ''
        _this.part1 = true;
        _this.textTable = _this.add.sprite(25, 80, 'Table');
        _this.textTable.scale.setTo(1, 1);
        _this.maketable();
        _this.scale = _this.add.sprite(20, 210, 'scale')

        _this.showAnswerBox();
        _this.showOptions();
        _this.rightbtn = _this.add.sprite(830, 400, 'TickBtn')
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this)

        if (_this.count1 == 0) {
            _this.Ask_Question1.play();
        }
        _this.Question_flag = 1;
    },
    showAnswerBox: function () {
        _this.questionBox = _this.add.sprite(810, 80, 'Text box_2')
        var text = _this.add.text(20, 20, valuesCombinations[_this.count1])
        _this.applyingStyle(text)
        _this.questionBox.addChild(text)
    },
    showOptions: function () {
        _this.zeroBox = _this.add.sprite(20, 270, 'Text box_1')
        _this.zeroBox.scale.setTo(0.8)
        var zero = _this.add.text(22, 10, '0');
        zero.scale.setTo(1.3)
        zero.fill = '#FF0000'
        _this.zeroBox.addChild(zero)

        _this.oneBox = _this.add.sprite(303, 270, 'Text box_1')
        _this.oneBox.scale.setTo(0.8)
        var one = _this.add.text(22, 10, '1');
        one.scale.setTo(1.3)
        one.fill = '#FF0000'
        _this.oneBox.addChild(one)

        _this.twoBox = _this.add.sprite(603, 270, 'Text box_1')
        _this.twoBox.scale.setTo(0.8)
        var two = _this.add.text(22, 10, '2');
        two.scale.setTo(1.3)
        two.fill = '#FF0000'
        _this.twoBox.addChild(two)

        _this.threeBox = _this.add.sprite(900, 270, 'Text box_1')
        _this.threeBox.scale.setTo(0.8)
        var three = _this.add.text(22, 10, '3');
        three.scale.setTo(1.3)
        three.fill = '#FF0000'
        _this.threeBox.addChild(three)

    },
    boxSelected: function (target) {
        _this.clickSound.play();
        _this.zeroBox.frame = 0;
        _this.oneBox.frame = 0;
        _this.twoBox.frame = 0;
        _this.threeBox.frame = 0;
        target.frame = 1;
        _this.userselectedBox = target;

    },
    enableOp: function () {
        _this.zeroBox.inputEnabled = true;
        _this.zeroBox.events.onInputDown.add(_this.boxSelected, _this)

        _this.oneBox.inputEnabled = true;
        _this.oneBox.events.onInputDown.add(_this.boxSelected, _this)

        _this.twoBox.inputEnabled = true;
        _this.twoBox.events.onInputDown.add(_this.boxSelected, _this)

        _this.threeBox.inputEnabled = true;
        _this.threeBox.events.onInputDown.add(_this.boxSelected, _this)

        if (NearestNum[_this.count1] == 0) {
            _this.AnswerBox = _this.zeroBox
        }
        else if (NearestNum[_this.count1] == 1) {

            _this.AnswerBox = _this.oneBox

        }
        else if (NearestNum[_this.count1] == 2) {

            _this.AnswerBox = _this.twoBox

        }
        else if (NearestNum[_this.count1] == 3) {

            _this.AnswerBox = _this.threeBox

        }
    },
    reArrangeYellowCubes: function () {

        var count = 0;
        _this.convertA = []
        _this.convertR = []

        for (i = 0; i < _this.boxes.length; i++) {

            if (_this.boxes[i].key == 'red-box') {
                count = 0;
            }
            else if (_this.boxes[i].key == 'yellow-box') {
                count++;
            }
            if (count == 10) {
                count = 0;
                var currentx = _this.boxes[i - 9].x
                for (j = i - 9; j <= i; j++) {
                    _this.convertA.push(_this.boxes[j])
                }
                var redobj = _this.add.sprite(currentx, 6, 'red-box')
                redobj.alpha = 0.4
                redobj.visible = false;
                _this.convertR.push(redobj)
                _this.scale.addChild(redobj)
            }

        }
        if (_this.convertA.length >= 1) {
            _this.time.events.add(800, () => {
                _this.framechange.play()

            })

        }

        for (let i = 0; i < 6; i++) {
            _this.time.events.add(300 * i, function () {
                _this.convertA.forEach(element => {
                    element.alpha -= 0.1
                });
            });
        }
        _this.time.events.add(500, () => {
            for (let i = 0; i < 6; i++) {
                _this.time.events.add(300 * i, function () {
                    _this.convertR.forEach(element => {
                        element.visible = true;
                        element.alpha += 0.1
                    });
                });
            }
        })



    },
    rightbtnClicked: function () {
        _this.noofAttempts++;
        _this.userselected = 0;
        _this.clickSound.play();
        _this.rightbtn.frame = 1;
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        _this.rightbtn_is_Clicked = true;
        if (_this.part1 == true) {
            // whole number part entered evaluate
            // Rearrange 20yellow to one red

            for (i = 0; i < _this.scaleArr.length; i++) {
                if (_this.scaleArr[i] == true) {
                    _this.userselected++;
                }
            }

            if (_this.userselected == Value1Array[_this.count1] * 10 + Value10thArray[_this.count1]) {

                _this.part1 = false;
                _this.part2 = true;
                // _this.rightbtn.frame = 0;
                // if (_this.convertA.length > 1) {
                //     _this.time.events.add(700, () => {
                //         _this.celebrate();
                //     })
                // }
                // else {
                _this.celebrate();

                // }

                _this.reArrangeYellowCubes();


                if (_this.convertA.length >= 1) {
                    var tweenTime = 1800;
                }
                else {
                    var tweenTime = 1000;

                }
                _this.time.events.add(tweenTime, () => {
                    _this.rightbtn.frame = 0;

                    if (_this.count1 == 0)
                        _this.Ask_Question2.play();
                    _this.enableOp();
                    _this.time.events.add(1000, () => {
                        _this.rightbtn.inputEnabled = true;
                    })

                })
                _this.Question_flag = 2;

            }
            else {
                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                })
                _this.wrongSelected();

            }

        }
        else if (_this.part2 == true) {

            if (_this.AnswerBox == _this.userselectedBox) {
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.part2 = false;
                _this.correctAns();
                _this.time.events.add(1500, () => {
                    _this.rightbtn.inputEnabled = true;
                })
                // _this.rightbtn.inputEnabled = true;


            }
            else {
                _this.zeroBox.frame = 0;
                _this.oneBox.frame = 0;
                _this.twoBox.frame = 0;
                _this.threeBox.frame = 0;
                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                })
                _this.wrongSelected();
            }
        }
    },
    celebrate: function () {
        _this.counterCelebrationSound.pause();
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();
        _this.yellowBox.inputEnabled = false;
        _this.redBox.inputEnabled = false;
        _this.boxes.forEach(element => {
            element.inputEnabled = false
        });
        if (_this.newboxes) {
            _this.newboxes.forEach(element => {
                element.inputEnabled = false
            });
        }

    },
    wrongSelected: function () {
        _this.wrongans.play();

        _this.rightbtn.inputEnabled = true;
        if (_this.part1 == true) {
            _this.removepartA();
        }
        else {
            _this.removepartB();

        }

    },
    removepartA: function () {
        _this.time.events.add(300, () => {
            for (i = 0; i < _this.scale.children.length; i++) {
                _this.scale.getChildAt(i).visible = false;

            }
            for (i = 0; i < 30; i++) {
                _this.scaleArr[i] = false;
            }
            _this.allowyellow = true;
            _this.allowred = true;
            _this.userselected = 0;
        })

    },
    removepartB: function () {
        _this.userselectedBox = ''
    },
    maketable: function () {
        _this.scaleArr = []
        _this.boxes = []
        for (i = 0; i < 30; i++) {
            _this.scaleArr[i] = false
        }
        _this.yellowBoxtext = _this.add.text(10, 30, '0.1')
        _this.textTable.addChild(_this.yellowBoxtext)

        _this.eq1 = _this.add.graphics();
        _this.eq1.lineStyle(4, 0x000000);
        _this.eq1.moveTo(58, 40);
        _this.eq1.lineTo(73, 40);
        _this.textTable.addChild(_this.eq1)

        _this.eq2 = _this.add.graphics();
        _this.eq2.lineStyle(4, 0x000000);
        _this.eq2.moveTo(58, 50);
        _this.eq2.lineTo(73, 50);
        _this.textTable.addChild(_this.eq2)

        _this.yellowBox = _this.add.sprite(86, 24, 'yellow-box');
        // _this.yellowBox.scale.setTo(1,0.8);
        _this.textTable.addChild(_this.yellowBox)
        _this.yellowBox.inputEnabled = true;
        _this.yellowBox.input.enableDrag(true);
        _this.yellowBox.events.onDragStop.add(_this.yellowdragStop, _this.yellowBox);
        _this.yellowBox.events.onDragUpdate.add(_this.yellowdragUpdate, _this.yellowBox);


        _this.redBoxtext = _this.add.text(138, 30, '1')
        _this.textTable.addChild(_this.redBoxtext)

        _this.eq11 = _this.add.graphics();
        _this.eq11.lineStyle(4, 0x000000);
        _this.eq11.moveTo(163, 40);
        _this.eq11.lineTo(178, 40);
        _this.textTable.addChild(_this.eq11)

        _this.eq21 = _this.add.graphics();
        _this.eq21.lineStyle(4, 0x000000);
        _this.eq21.moveTo(163, 50);
        _this.eq21.lineTo(178, 50);
        _this.textTable.addChild(_this.eq21)

        _this.redBox = _this.add.sprite(190, 20, 'red-box')
        _this.textTable.addChild(_this.redBox)
        _this.redBox.inputEnabled = true;
        _this.redBox.input.enableDrag(true);
        _this.redBox.events.onDragStop.add(_this.ReddragStop, _this.redBox);
        _this.redBox.events.onDragUpdate.add(_this.ReddragUpdate, _this.redBox);

        _this.allowred = true;
        _this.allowyellow = true;

    },
    revStop: function (target) {
        if (_this.checkOverlap(target, _this.textTable)) {
            target.scale.setTo();
            target.visible = false;
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();
            // target.destroy();
            for (i = target.pointx; i < target.pointy; i++) {
                _this.scaleArr[i] = false;
            }
            _this.rearrangeCubes(target);
        }
        else {
            target.x = target.initialX
            target.y = target.initialY

        }
    },
    revUpdate: function (target) {
        target.bringToTop();
    },
    rearrangeCubes: function (target) {
        for (i = 0; i < 30; i++) {
            _this.scaleArr[i] = false
        }
        _this.allowred = true;
        _this.allowyellow = true;

        _this.newboxes = []
        for (x = 0; x < _this.boxes.length; x++) {
            if (_this.boxes[x].pointy - _this.boxes[x].pointx > 2 && _this.boxes[x].visible == true) {

                for (i = 0; i < _this.scaleArr.length; i++) {
                    if (i == 29 && _this.scaleArr[i] == true) {
                        // all filled nothing can be entered
                        _this.allowyellow = false
                    }
                    if (i == 20 && _this.scaleArr[i] == true) {
                        // all filled nothing can be entered
                        _this.allowred = false
                        break;
                    }
                    if (_this.scaleArr[i] == false && _this.allowred == true) {

                        var redobj = _this.add.sprite(i * 30 + 8, 6, 'red-box')
                        redobj.inputEnabled = true
                        redobj.input.enableDrag(true)
                        redobj.events.onDragStop.add(_this.revStop, _this)
                        redobj.events.onDragUpdate.add(_this.revUpdate, _this)

                        redobj.initialX = redobj.x
                        redobj.initialY = redobj.y

                        redobj.pointx = i
                        redobj.pointy = i + 10
                        _this.newboxes.push(redobj)
                        _this.scale.addChild(redobj)

                        for (k = i; k < i + 10; k++)
                            _this.scaleArr[k] = true
                        break;
                    }

                }
            }
            else if (_this.boxes[x].visible == true) {

                for (i = 0; i < _this.scaleArr.length; i++) {
                    if (i == 20 && _this.scaleArr[i] == true) {
                        _this.allowred = false
                    }
                    if (i == 29 && _this.scaleArr[i] == true) {
                        _this.allowyellow = false
                        break;
                    }
                    if (_this.scaleArr[i] == false && _this.allowyellow == true) {

                        var yellowobj = _this.add.sprite(i * 30 + 8, 6, 'yellow-box')
                        yellowobj.inputEnabled = true
                        yellowobj.input.enableDrag(true)
                        yellowobj.events.onDragStop.add(_this.revStop, _this)
                        yellowobj.events.onDragUpdate.add(_this.revUpdate, _this)
                        yellowobj.initialX = yellowobj.x
                        yellowobj.initialY = yellowobj.y

                        yellowobj.pointx = i
                        yellowobj.pointy = i + 1
                        _this.newboxes.push(yellowobj)
                        _this.scale.addChild(yellowobj)
                        _this.scaleArr[i] = true
                        break;
                    }


                }
            }
        }
        _this.boxes.forEach(element => {
            element.destroy();
        });
        _this.boxes = _this.newboxes
    },
    ReddragUpdate: function () {
        _this.redBox.bringToTop();
    },
    yellowdragUpdate: function () {
        _this.yellowBox.bringToTop();

    },
    ReddragStop: function (target) {
        if (_this.checkOverlap(target, _this.scale)) {
            _this.redBox.x = 190;
            _this.redBox.y = 20;
            for (i = 0; i < _this.scaleArr.length; i++) {
                if (i == 29 && _this.scaleArr[i] == true) {
                    // all filled nothing can be entered
                    _this.allowyellow = false
                }
                if (i == 20 && _this.scaleArr[i] == true) {
                    // all filled nothing can be entered
                    _this.allowred = false
                    break;
                }
                if (_this.scaleArr[i] == false && _this.allowred == true) {
                    _this.snapSound.currentTime = 0;
                    _this.snapSound.play();
                    var redobj = _this.add.sprite(i * 30 + 8, 6, 'red-box')
                    redobj.inputEnabled = true
                    redobj.input.enableDrag(true)
                    redobj.events.onDragStop.add(_this.revStop, _this)
                    redobj.events.onDragUpdate.add(_this.revUpdate, _this)

                    redobj.initialX = redobj.x
                    redobj.initialY = redobj.y

                    redobj.pointx = i
                    redobj.pointy = i + 10
                    _this.boxes.push(redobj)
                    _this.scale.addChild(redobj)

                    for (k = i; k < i + 10; k++)
                        _this.scaleArr[k] = true
                    break;
                }


            }
        }
        else {

            _this.redBox.x = 190;
            _this.redBox.y = 20;
        }

    },
    yellowdragStop: function (target) {
        if (_this.checkOverlap(target, _this.scale)) {
            _this.yellowBox.x = 87;
            _this.yellowBox.y = 24;

            for (i = 0; i < _this.scaleArr.length; i++) {
                if (i == 20 && _this.scaleArr[i] == true) {
                    // all filled nothing can be entered
                    _this.allowred = false
                }
                if (i == 29 && _this.scaleArr[i] == true) {
                    // all filled nothing can be entered
                    _this.allowyellow = false
                    break;
                }
                if (_this.scaleArr[i] == false && _this.allowyellow == true) {
                    _this.snapSound.currentTime = 0;
                    _this.snapSound.play();
                    var yellowobj = _this.add.sprite(i * 30 + 8, 6, 'yellow-box')
                    yellowobj.inputEnabled = true
                    yellowobj.input.enableDrag(true)
                    yellowobj.events.onDragStop.add(_this.revStop, _this)
                    yellowobj.events.onDragUpdate.add(_this.revUpdate, _this)
                    yellowobj.initialX = yellowobj.x
                    yellowobj.initialY = yellowobj.y

                    yellowobj.pointx = i
                    yellowobj.pointy = i + 1
                    _this.boxes.push(yellowobj)
                    _this.scale.addChild(yellowobj)
                    _this.scaleArr[i] = true
                    break;
                }
            }
        }
        else {
            _this.yellowBox.x = 87;
            _this.yellowBox.y = 24;
        }

    },
    ClearAll: function () {
        _this.scale.destroy();
        _this.textTable.destroy();
        _this.rightbtn.destroy();
        _this.questionBox.destroy();
        _this.zeroBox.destroy();
        _this.oneBox.destroy();
        _this.twoBox.destroy();
        _this.threeBox.destroy();


    },
    applyingStyle: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
    },
    checkOverlap: function (spriteA, spriteB) {
        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
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

        //  //* star Actions changes
        //  _this.userHasPlayed =1;
        //  _this.timeinMinutes = _this.minutes;
        //  _this.timeinSeconds = _this.seconds;
        //  _this.game_id = "NSD_4A_G6";
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
        //*  complete the picture for the given line of symmetry
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSD-4A-G6/" +
            _this.languageSelected + "/DV-NSD-4A-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-4A-G6/" +
            _this.languageSelected + "/NSD-4A-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-4A-G6/" +
            _this.languageSelected + "/NSD-4A-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(880, 330, 'skipArrow');       //* skip button shown at the bottom
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
            console.log("removing the q2");
            _this.q2Sound.pause();
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed
    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('nsd4a_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSD-4A-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.play();

        _this.q1Timer = setTimeout(function ()    //* q1Sound js timer to play q1Timer after 8 seconds.
        {
            console.log("inside demoAudio1sound.....")
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 10000);

        _this.q2Timer = setTimeout(function ()    //* q2Sound js timer to play q2Timer after 10 seconds.
        {
            console.log("inside demoAudio1sound.....")
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 21000);

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