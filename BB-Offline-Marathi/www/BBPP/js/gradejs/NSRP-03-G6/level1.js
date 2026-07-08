Game.NSRP_03_G6level1 = function () { };


Game.NSRP_03_G6level1.prototype =
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
        _this.clickSoundsrc.setAttribute("src", window.baseUrl+"sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.celebrationSound = document.createElement('audio');
        _this.celebrationSoundsrc = document.createElement('source');
        _this.celebrationSoundsrc.setAttribute("src", window.baseUrl+"sounds/celebration.mp3");
        _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

        _this.counterCelebrationSound = document.createElement('audio');
        _this.counterCelebrationSoundsrc = document.createElement('source');
        _this.counterCelebrationSoundsrc.setAttribute("src", window.baseUrl+"sounds/counter_celebration.mp3");
        _this.counterCelebrationSound.appendChild(_this.counterCelebrationSoundsrc);

        _this.wrongans = document.createElement('audio');
        _this.wronganssrc = document.createElement('source');
        _this.wronganssrc.setAttribute("src", window.baseUrl+"sounds/WrongCelebrationSound.mp3");
        _this.wrongans.appendChild(_this.wronganssrc);

        _this.framechange = document.createElement('audio');
        _this.framechangesrc = document.createElement('source');
        _this.framechangesrc.setAttribute("src", window.baseUrl+"sounds/Frame_change_sound.mp3");
        _this.framechange.appendChild(_this.framechangesrc);

        _this.snapSound = document.createElement('audio');
        _this.snapSoundsrc = document.createElement('source');
        _this.snapSoundsrc.setAttribute("src", window.baseUrl+"sounds/snapSound.mp3");
        _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.Ask_Question1 = _this.createAudio("NSRP-03-G6A");
        _this.Ask_Question2 = _this.createAudio("NSRP-03-G6B");
        _this.Ask_Question3 = _this.createAudio("NSRP-03-G6C");

        telInitializerbbpp.gameIdInit("NSRP_3_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },

    create: function (game) {


        _this.hintBtn = _this.add.sprite(670,6,'bulb');
        _this.hintBtn.scale.setTo(0.5,0.6);
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

        // //* BB plus variables
        //  _this.userHasPlayed = 0;
        //  _this.timeinMinutes;
        //  _this.timeinSeconds;
        //  _this.game_id;
        //  _this.score = 0;
        //  _this.gradeTopics;
     _this.microConcepts;
        //  _this.grade;

        _this.counterForTimer = 0;

        _this.hint_flag = 0;
        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.Question_flag = -1;


        // To keep track of decimal point
        _this.fourNotEntered = false

        _this.time.events.add(40, () => {


            _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');

            //** include the background file, navigation bar, stars, timer objects.

            _this.navBar = _this.add.sprite(0, 0, 'navBar');

            _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
            _this.backbtn.inputEnabled = true;
            _this.backbtn.input.useHandCursor = true;
            _this.backbtn.events.onInputDown.add(function () {
                //_this.state.start('NSRP_02_G6Score');
               // _this.stopVoice();
                _this.time.events.removeAll();
                _this.backbtn.events.onInputDown.removeAll();
                _this.time.events.add(50,function()
                {
                    _this.state.start('grade6NumberSystems',true,false);
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
                    } else if (_this.Question_flag == 3) {
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

            _this.selectedAns1 = '';
            _this.selectedAns2 = '';

            _this.twofractionboxes = false;
            _this.b1 = false;
            _this.b2 = false;
            _this.b3 = false;


            //* start the game with first question
            _this.time.events.add(500, _this.getQuestion);

            ques = [1, 2, 3, 4]
            ques = _this.shuffle(ques);

            _this.questions = [];
            _this.questions[0] = ques[0];
            _this.questions[1] = ques[1];
            _this.questions[2] = ques[2];
            _this.questions[3] = ques[3];
            _this.questions[4] = 5;
            _this.questions[5] = 6;
        })


    },


    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl+"questionSounds/NSRP-03-G6/" + _this.languageSelected + "/" + src + ".mp3");
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
        _this.StoreRandomisedValues();
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
        console.log("ehyello")
        _this.Ask_Question1.pause();
        _this.Ask_Question1 = null;
        _this.Ask_Question2.pause();
        _this.Ask_Question2 = null;

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
    selectRatio: function (size, i, isone) {
        type13 = [12, 21];
        type15 = [12, 21, 13, 31, 23, 32, 41, 14]
        if (isone == true)
            type15 = [23, 32]
        type14 = [12, 21, 31, 13];
        type17 = [13, 31, 14, 41, 15, 51, 16, 61, 23, 32, 25, 52, 34, 43]
        if (isone)
            type17 = [23, 32, 25, 52, 34, 43]
        type18 = [14, 41, 15, 51, 16, 61, 23, 32, 25, 52, 34, 43, 35, 53, 17, 71]
        if (isone)
            type18 = [23, 32, 25, 52, 34, 43, 35, 53]
        type16 = [59, 95, 57, 75, 56, 67, 85, 58, 65, 76, 27, 72, 29, 92, 114, 133, 97, 79]


        type27 = [12, 21, 11, 22];
        type28 = [12, 21, 31, 13, 11, 22, 33]
        type216 = [35, 53, 14, 41, 26, 62, 12, 21, 15, 51, 16, 61, 71, 17, 34, 43, 25, 52, 11, 22, 33, 44, 55, 77, 66]
        if (isone == true) {
            type216 = [35, 53, 34, 43, 25, 52, 26, 62, 44, 33, 22, 55, 66, 77]
        }
        if (size % 2 != 0)
            typearr[i] = 1        //round shaped
        else if (size == 4 || size == 16)
            typearr[i] = 2;
        else {
            typearr[i] = Math.floor(Math.random() * 2) + 1;
        }

        if (i < 3) {

            if (size == 3)
                valuesCombinations[i] = type13[Math.floor(Math.random() * type13.length)]
            else if (size == 4)
                valuesCombinations[i] = type14[Math.floor(Math.random() * type14.length)]
            else if (size == 5)
                valuesCombinations[i] = type15[Math.floor(Math.random() * type15.length)]
            else if (size == 7)
                valuesCombinations[i] = type17[Math.floor(Math.random() * type17.length)]
            else if (size == 8)
                valuesCombinations[i] = type18[Math.floor(Math.random() * type18.length)]
            else if (size == 16)
                valuesCombinations[i] = type16[Math.floor(Math.random() * type16.length)]


        }
        else {
            // console.log(size)
            if (size == 7)
                valuesCombinations[i] = type27[Math.floor(Math.random() * type27.length)]
            else if (size == 8)
                valuesCombinations[i] = type28[Math.floor(Math.random() * type28.length)]
            else if (size == 16) {
                // console.log(type216)
                // console.log(type216.length)
                valuesCombinations[i] = type216[Math.floor(Math.random() * type216.length)]
                // console.log(valuesCombinations[i])

            }

        }
    },
    StoreRandomisedValues: function () {
        valuesCombinations = []
        cakeSizeArr = []
        counts1 = 0;
        cake2ar = []
        typearr = []
        sameValexits = false
        type1Ch = [3, 5, 7, 8, 4, 16]
        type2Ch = [7, 8, 16]
        var isone = false

        for (i = 0; i < 6; i++) {

            if (i == 3) {
                isone = false
                counts1 = 0;
            }

            if (i < 3) {
                if (isone == true)
                    type1Ch = [5, 7, 8, 16]

                cakeSizeArr[i] = type1Ch[Math.floor(Math.random() * type1Ch.length)];

                _this.selectRatio(cakeSizeArr[i], i, isone)
                for (k = 0; k < i; k++) {
                    if (valuesCombinations[k] == valuesCombinations[i] || (cakeSizeArr[k] == cakeSizeArr[i]) || (Math.floor(valuesCombinations[k] / 10) == valuesCombinations[i] % 10 && valuesCombinations[k] % 10 == Math.floor(valuesCombinations[i] / 10))) {
                        cakeSizeArr[i] = type1Ch[Math.floor(Math.random() * type1Ch.length)];
                        _this.selectRatio(cakeSizeArr[i], i, isone)
                        k = -1;
                    }
                }

            }
            else {

                if (i > 4) {
                    if (cakeSizeArr[i - 1] == 16 && cakeSizeArr[i - 2] == 16)
                        type2Ch = [7, 8];
                }
                if (i > 3) {
                    if (cakeSizeArr[i - 1] == 8)
                        type2Ch = [7, 16]
                    if (cakeSizeArr[i - 1] == 7)
                        type2Ch = [8, 16]
                }
                cakeSizeArr[i] = type2Ch[Math.floor(Math.random() * type2Ch.length)];

                _this.selectRatio(cakeSizeArr[i], i, isone)

                for (k = 3; k < i; k++) {

                    if (valuesCombinations[k] == valuesCombinations[i] || (sameValexits && (valuesCombinations[i] % 11 == 0)) || (Math.floor(valuesCombinations[k] / 10) == valuesCombinations[i] % 10 && valuesCombinations[k] % 10 == Math.floor(valuesCombinations[i] / 10))) {
                        cakeSizeArr[i] = type2Ch[Math.floor(Math.random() * type2Ch.length)];
                        _this.selectRatio(cakeSizeArr[i], i, isone)

                        k = 2;
                    }
                }
                cake2ar.push(cakeSizeArr[i])
                if (valuesCombinations[i] % 11 == 0) {
                    sameValexits = true;
                }
            }

            if (valuesCombinations[i] % 10 == 1 || Math.floor(valuesCombinations[i] / 10) == 1) {
                counts1 += 1;

            }
            if (counts1 == 1)
                isone = true;

        }

        console.log(typearr)
        console.log(cakeSizeArr)
        console.log(valuesCombinations)

        _this.ArrangeObjects()

    },
    showQuestionBox: function () {
        _this.questionBox = _this.add.sprite(820, 70, 'Text box_2')
        if (Math.floor(valuesCombinations[_this.count1] / 10) <= 9)
            text1 = _this.add.text(28, 20, Math.floor(valuesCombinations[_this.count1] / 10))
        else
            text1 = _this.add.text(20, 20, Math.floor(valuesCombinations[_this.count1] / 10))

        _this.applyingStyle(text1);

        text2 = _this.add.text(48, 19, ':')

        _this.applyingStyle(text2);
        text3 = _this.add.text(63, 20, Math.floor(valuesCombinations[_this.count1] % 10))
        _this.applyingStyle(text3);

        if (Math.floor(valuesCombinations[_this.count1] / 10) > 9) {
            text2.x += 5;
            text3.x += 5
        }
        _this.questionBox.addChild(text1)
        _this.questionBox.addChild(text2)
        _this.questionBox.addChild(text3)
        text1.fill = '#FF0000';
        text2.fill = '#FF0000';
        text3.fill = '#FF0000';

    },
    ArrangeObjects: function () {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount ++;

        _this.showQuestionBox()
        _this.Question_flag = 1;
        if (_this.count1 == 0) {
            _this.Ask_Question1.play()
        }
        _this.showQnPlates()

        _this.rightbtn = _this.add.sprite(850, 425, 'TickBtn');
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this)

    },
    showQnPlates: function () {

        if (typearr[_this.count1] == 1) {
            // Circular Plates
            _this.whitePlate = _this.add.sprite(320, 90, 'WhitePlate');
            _this.whitePlate.scale.setTo(0.55, 0.65)

            _this.greenPlate = _this.add.sprite(550, 220, 'GreenPlate');
            _this.greenPlate.scale.setTo(0.5, 0.6)

            _this.orangePlate = _this.add.sprite(110, 220, 'OrangePlate');
            _this.orangePlate.scale.setTo(0.5, 0.6)

            _this.arrangeCakePiceRound();

        }
        else {
            _this.whitePlate = _this.add.sprite(270, 90, 'WhiteTray');
            _this.whitePlate.scale.setTo(0.55, 0.6)

            _this.greenPlate = _this.add.sprite(550, 220, 'GreenTray');
            _this.greenPlate.scale.setTo(0.45, 0.6)

            _this.orangePlate = _this.add.sprite(110, 220, 'OrangeTray');
            _this.orangePlate.scale.setTo(0.45, 0.6)

            _this.arrangeCakePiceRect();

        }

    },
    arrangeCakePiceRound: function () {

        _this.greencount = 0;
        _this.orangecount = 0;
        _this.whitecount = cakeSizeArr[_this.count1]
        _this.whitearr = [];
        _this.orangearr = [];
        _this.greenarr = [];
        for (k = 0; k < cakeSizeArr[_this.count1]; k++) {
            _this.orangearr[k] = null
            _this.greenarr[k] = null
        }
        _this.getCakeIdx();
        if (cakeSizeArr[_this.count1] == 3) {

            for (i = 0; i < whiter3x.length; i++) {
                cakepice2 = _this.add.sprite(whiter3x[i], whiter3y[i], `3pieceCake${i + 1}`)
                cakepice2.scale.setTo(0.4)
                cakepice2.ix = cakepice2.x
                cakepice2.iy = cakepice2.y
                _this.whitePlate.addChild(cakepice2)
            }

        }
        if (cakeSizeArr[_this.count1] == 5) {

            for (i = 0; i < whiter5x.length; i++) {
                cakepice2 = _this.add.sprite(whiter5x[i], whiter5y[i], `5pieceCake${i + 1}`)
                cakepice2.scale.setTo(0.4)
                cakepice2.ix = cakepice2.x
                cakepice2.iy = cakepice2.y
                _this.whitePlate.addChild(cakepice2)
            }

        }

        if (cakeSizeArr[_this.count1] == 7) {

            for (i = 0; i < whiter7x.length; i++) {
                cakepice2 = _this.add.sprite(whiter7x[i], whiter7y[i], `7pieceCake${i + 1}`)
                cakepice2.scale.setTo(0.35)
                cakepice2.ix = cakepice2.x
                cakepice2.iy = cakepice2.y
                _this.whitePlate.addChild(cakepice2)
            }

        }

        if (cakeSizeArr[_this.count1] == 8) {

            for (i = 0; i < whiter8x.length; i++) {
                cakepice2 = _this.add.sprite(whiter8x[i], whiter8y[i], `8pieceCake${i + 1}`)
                cakepice2.scale.setTo(0.35)
                cakepice2.ix = cakepice2.x
                cakepice2.iy = cakepice2.y
                _this.whitePlate.addChild(cakepice2)
            }

        }

        // cakepice1 = _this.add.sprite(168, 115, '8pieceCake8')
        // cakepice1.scale.setTo(0.35)
        // cakepice1.ix = cakepice1.x
        // cakepice1.iy = cakepice1.y
        // _this.whitePlate.addChild(cakepice1)


        _this.whitePlate.children.forEach((element, idx) => {
            element.inputEnabled = true;
            element.input.enableDrag(true)
            element.index = idx;
            element.events.onDragUpdate.add(_this.cakeDrag, _this)
            element.events.onDragStart.add(_this.cakeDragStart, _this)

            element.events.onDragStop.add(_this.RoundcakeDragStop, _this)
            _this.whitearr.push(element)

        });

    },
    arrangeCakePiceRect: function () {
        // cakeSizeArr[_this.count1] = 16

        _this.greencount = 0;
        _this.orangecount = 0;
        _this.whitecount = cakeSizeArr[_this.count1]
        _this.whitearr = [];
        _this.orangearr = [];
        _this.greenarr = []
        for (k = 0; k < cakeSizeArr[_this.count1]; k++) {
            _this.orangearr[k] = null
            _this.greenarr[k] = null
        }
        _this.getCakeIdx()


        if (cakeSizeArr[_this.count1] == 4) {
            for (i = 0; i < white4x.length; i++) {
                cakepice2 = _this.add.sprite(white4x[i], white4y[i], 'RectCake')
                cakepice2.scale.setTo(0.45)
                cakepice2.ix = cakepice2.x
                cakepice2.iy = cakepice2.y
                _this.whitePlate.addChild(cakepice2)
            }
        }

        if (cakeSizeArr[_this.count1] == 8) {

            for (i = 0; i < white8x.length; i++) {
                cakepice2 = _this.add.sprite(white8x[i], white8y[i], 'RectCake')
                cakepice2.scale.setTo(0.4)
                cakepice2.ix = cakepice2.x
                cakepice2.iy = cakepice2.y
                _this.whitePlate.addChild(cakepice2)
            }
        }

        if (cakeSizeArr[_this.count1] == 16) {

            for (i = 0; i < white16x.length; i++) {
                cakepice2 = _this.add.sprite(white16x[i], white16y[i], 'RectCake')
                cakepice2.scale.setTo(0.4)
                cakepice2.ix = cakepice2.x
                cakepice2.iy = cakepice2.y
                _this.whitePlate.addChild(cakepice2)
            }
        }


        _this.whitePlate.children.forEach((element, idx) => {
            element.inputEnabled = true;
            element.input.enableDrag(true)
            element.index = idx;
            element.events.onDragUpdate.add(_this.cakeDrag, _this)
            element.events.onDragStart.add(_this.cakeDragStart, _this)

            element.events.onDragStop.add(_this.cakeDragStop, _this)
            _this.whitearr.push(element)

        });
    },
    getCakeIdx: function () {

        whiter3x = [130, 110, 240];
        whiter3y = [10, 70, 70];

        whiter5x = [153, 95, 232, 107, 228];
        whiter5y = [-5, 30, 30, 105, 105];

        whiter7x = [169, 95, 97, 237, 239, 135, 220];
        whiter7y = [-5, 20, 85, 20, 85, 113, 113];

        whiter8x = [190, 111, 85, 245, 257, 94, 245, 168];
        whiter8y = [-5, 11, 60, 14, 72, 109, 110, 115];

        white4x = [265, 190, 340, 260]
        white4y = [60, 90, 100, 130]

        white8x = [205, 130, 270, 190, 335, 255, 400, 320];
        white8y = [25, 50, 60, 90, 100, 130, 140, 170];

        white16x = [280, 205, 130, 55, 345, 270, 195, 120, 410, 335, 260, 185, 475, 400, 325, 250];
        white16y = [5, 25, 50, 70, 40, 60, 85, 110, 75, 100, 125, 150, 110, 140, 165, 190];

        if (typearr[_this.count1] == 2) {
            if (cakeSizeArr[_this.count1] == 4) {

                Rect4x = [284, 197, 354, 264]
                Rect4y = [58, 84, 98, 126]

            }

            if (cakeSizeArr[_this.count1] == 8) {

                Rect4x = [215, 137, 280, 197, 345, 262, 410, 327];
                Rect4y = [23, 46, 58, 86, 98, 126, 138, 166];
            }

            if (cakeSizeArr[_this.count1] == 16) {

                Rect4x = [290, 212, 140, 62, 355, 278, 205, 127, 420, 342, 270, 192, 485, 407, 335, 257];
                Rect4y = [3, 26, 49, 72, 38, 59, 83, 106, 73, 96, 123, 146, 108, 136, 163, 186];
            }
        }

        else if (typearr[_this.count1] == 1) {
            if (cakeSizeArr[_this.count1] == 3) {

                Rect4x = [140, 117, 237]
                Rect4y = [18, 76, 78]

            }

            if (cakeSizeArr[_this.count1] == 5) {

                Rect4x = [163, 102, 243, 114, 238];
                Rect4y = [3, 36, 36, 108, 108];
            }

            if (cakeSizeArr[_this.count1] == 7) {

                Rect4x = [179, 102, 107, 244, 249, 142, 230];
                Rect4y = [3, 26, 91, 26, 96, 116, 116];
            }

            if (cakeSizeArr[_this.count1] == 8) {

                Rect4x = [200, 118, 95, 252, 267, 101, 255, 175];
                Rect4y = [3, 17, 68, 20, 80, 115, 118, 121];
            }

        }

    },
    cakeDrag: function (element) {
        element.bringToTop()
    },
    cakeDragStart: function () {
        // _this.snapSound.currentTime = 0;
        // _this.snapSound.play();

    },
    cakeDragStop: function (element) {
        _this.getCakeIdx()
        _this.snapSound.currentTime = 0;
        _this.snapSound.play();
        if (_this.checkOverlap(_this.orangePlate, element)) {

            for (i = 0; i < _this.orangearr.length; i++) {

                element.destroy();

                if (!_this.orangearr[i]) {
                    element.visible = false;
                    element.inputEnabled = false
                    orangeBoxCake2 = _this.add.sprite(Rect4x[i], Rect4y[i], 'RectCake')
                    orangeBoxCake2.scale.setTo(0.4)
                    orangeBoxCake2.ix = orangeBoxCake2.x
                    orangeBoxCake2.iy = orangeBoxCake2.y
                    orangeBoxCake2.index = i

                    _this.orangePlate.addChild(orangeBoxCake2)
                    _this.greencount += 1;
                    _this.whitecount -= 1;
                    _this.whitearr[element.index] = null;

                    _this.orangearr[i] = orangeBoxCake2
                    _this.orangePlate.children.forEach(element => {
                        element.inputEnabled = true;
                        element.input.enableDrag(true)
                        element.events.onDragUpdate.add(_this.cakeDrag, _this)
                        element.events.onDragStart.add(_this.cakeDragStart, _this)

                        element.events.onDragStop.add(_this.cakeDragRevStop, _this)

                    });

                    break;
                }

            }

            for (j = i; j < _this.orangearr.length; j++) {
                if (_this.orangearr[j]) {

                    _this.orangearr[j].inputEnabled = false;
                    _this.orangearr[j].visible = false;
                    cakepice2 = _this.add.sprite(_this.orangearr[j].x, _this.orangearr[j].y, 'RectCake')
                    cakepice2.scale.setTo(0.4)
                    cakepice2.ix = cakepice2.x
                    cakepice2.iy = cakepice2.y
                    _this.orangePlate.addChild(cakepice2)
                    cakepice2.index = _this.orangearr[j].index;
                    cakepice2.inputEnabled = true;
                    cakepice2.input.enableDrag(true)
                    cakepice2.events.onDragUpdate.add(_this.cakeDrag, _this)
                    cakepice2.events.onDragStart.add(_this.cakeDragStart, _this)
                    cakepice2.events.onDragStop.add(_this.cakeDragRevStop, _this)
                    _this.orangearr[j] = cakepice2
                    _this.orangearr[j].visible = true

                }
            }

        }
        else if (_this.checkOverlap(_this.greenPlate, element)) {

            for (i = 0; i < _this.greenarr.length; i++) {

                element.destroy();

                if (!_this.greenarr[i]) {
                    element.visible = false;
                    element.inputEnabled = false
                    orangeBoxCake2 = _this.add.sprite(Rect4x[i], Rect4y[i], 'RectCake')
                    orangeBoxCake2.scale.setTo(0.4)
                    orangeBoxCake2.ix = orangeBoxCake2.x
                    orangeBoxCake2.iy = orangeBoxCake2.y
                    orangeBoxCake2.index = i
                    orangeBoxCake2.name = 'green'

                    _this.greenPlate.addChild(orangeBoxCake2)
                    _this.greencount += 1;
                    _this.whitecount -= 1;
                    _this.whitearr[element.index] = null;

                    _this.greenarr[i] = orangeBoxCake2
                    _this.greenPlate.children.forEach(element => {
                        element.inputEnabled = true;
                        element.input.enableDrag(true)
                        element.events.onDragUpdate.add(_this.cakeDrag, _this)
                        element.events.onDragStart.add(_this.cakeDragStart, _this)
                        element.events.onDragStop.add(_this.cakeDragRevStop, _this)

                    });

                    break;
                }

            }

            for (j = i; j < _this.greenarr.length; j++) {
                if (_this.greenarr[j]) {

                    _this.greenarr[j].inputEnabled = false;
                    _this.greenarr[j].visible = false;
                    cakepice2 = _this.add.sprite(_this.greenarr[j].x, _this.greenarr[j].y, 'RectCake')
                    cakepice2.scale.setTo(0.4)
                    cakepice2.ix = cakepice2.x
                    cakepice2.iy = cakepice2.y
                    cakepice2.name = 'green'

                    _this.greenPlate.addChild(cakepice2)
                    cakepice2.index = _this.greenarr[j].index;
                    cakepice2.inputEnabled = true;
                    cakepice2.input.enableDrag(true)
                    cakepice2.events.onDragUpdate.add(_this.cakeDrag, _this)
                    cakepice2.events.onDragStart.add(_this.cakeDragStart, _this)

                    cakepice2.events.onDragStop.add(_this.cakeDragRevStop, _this)

                    _this.greenarr[j] = cakepice2
                    _this.greenarr[j].visible = true

                }
            }

        }
        else {
            if (_this.whitearr.includes(element)) {
                element.x = element.ix;
                element.y = element.iy;
            }
        }
    },
    RoundcakeDragStop: function (element) {
        _this.snapSound.currentTime = 0;
        _this.getCakeIdx()
        _this.snapSound.play();

        if (_this.checkOverlap(_this.orangePlate, element)) {

            for (i = 0; i < _this.orangearr.length; i++) {

                element.destroy();

                if (!_this.orangearr[i]) {
                    element.visible = false;
                    element.inputEnabled = false
                    orangeBoxCake2 = _this.add.sprite(Rect4x[i], Rect4y[i], `${cakeSizeArr[_this.count1]}pieceCake${i + 1}`)
                    orangeBoxCake2.scale.setTo(0.35)
                    orangeBoxCake2.ix = orangeBoxCake2.x
                    orangeBoxCake2.iy = orangeBoxCake2.y
                    orangeBoxCake2.index = i

                    _this.orangePlate.addChild(orangeBoxCake2)
                    _this.greencount += 1;
                    _this.whitecount -= 1;
                    _this.whitearr[element.index] = null;

                    _this.orangearr[i] = orangeBoxCake2
                    _this.orangePlate.children.forEach(element => {
                        element.inputEnabled = true;
                        element.input.enableDrag(true)
                        element.events.onDragUpdate.add(_this.cakeDrag, _this)
                        element.events.onDragStart.add(_this.cakeDragStart, _this)

                        element.events.onDragStop.add(_this.RoundcakeDragRevStop, _this)

                    });

                    break;
                }

            }

            for (j = i; j < _this.orangearr.length; j++) {
                if (_this.orangearr[j]) {

                    _this.orangearr[j].inputEnabled = false;
                    _this.orangearr[j].visible = false;
                    cakepice2 = _this.add.sprite(_this.orangearr[j].x, _this.orangearr[j].y, `${cakeSizeArr[_this.count1]}pieceCake${j + 1}`)
                    cakepice2.scale.setTo(0.35)
                    cakepice2.ix = cakepice2.x
                    cakepice2.iy = cakepice2.y
                    _this.orangePlate.addChild(cakepice2)
                    cakepice2.index = _this.orangearr[j].index;
                    cakepice2.inputEnabled = true;
                    cakepice2.input.enableDrag(true)
                    cakepice2.events.onDragUpdate.add(_this.cakeDrag, _this)
                    cakepice2.events.onDragStart.add(_this.cakeDragStart, _this)
                    cakepice2.events.onDragStop.add(_this.RoundcakeDragRevStop, _this)
                    _this.orangearr[j] = cakepice2
                    _this.orangearr[j].visible = true

                }
            }

        }
        else if (_this.checkOverlap(_this.greenPlate, element)) {

            for (i = 0; i < _this.greenarr.length; i++) {

                element.destroy();

                if (!_this.greenarr[i]) {
                    element.visible = false;
                    element.inputEnabled = false
                    orangeBoxCake2 = _this.add.sprite(Rect4x[i], Rect4y[i], `${cakeSizeArr[_this.count1]}pieceCake${i + 1}`)
                    orangeBoxCake2.scale.setTo(0.35)
                    orangeBoxCake2.ix = orangeBoxCake2.x
                    orangeBoxCake2.iy = orangeBoxCake2.y
                    orangeBoxCake2.index = i
                    orangeBoxCake2.name = 'green'

                    _this.greenPlate.addChild(orangeBoxCake2)
                    _this.greencount += 1;
                    _this.whitecount -= 1;
                    _this.whitearr[element.index] = null;

                    _this.greenarr[i] = orangeBoxCake2
                    _this.greenPlate.children.forEach(element => {
                        element.inputEnabled = true;
                        element.input.enableDrag(true)
                        element.events.onDragUpdate.add(_this.cakeDrag, _this)
                        element.events.onDragStart.add(_this.cakeDragStart, _this)

                        element.events.onDragStop.add(_this.RoundcakeDragRevStop, _this)

                    });

                    break;
                }

            }

            for (j = i; j < _this.greenarr.length; j++) {
                if (_this.greenarr[j]) {

                    _this.greenarr[j].inputEnabled = false;
                    _this.greenarr[j].visible = false;

                    cakepice2 = _this.add.sprite(_this.greenarr[j].x, _this.greenarr[j].y, `${cakeSizeArr[_this.count1]}pieceCake${j + 1}`)
                    cakepice2.scale.setTo(0.35)
                    cakepice2.ix = cakepice2.x
                    cakepice2.iy = cakepice2.y
                    cakepice2.name = 'green'

                    _this.greenPlate.addChild(cakepice2)
                    cakepice2.index = _this.greenarr[j].index;
                    cakepice2.inputEnabled = true;
                    cakepice2.input.enableDrag(true)
                    cakepice2.events.onDragUpdate.add(_this.cakeDrag, _this)
                    cakepice2.events.onDragStart.add(_this.cakeDragStart, _this)
                    cakepice2.events.onDragStop.add(_this.RoundcakeDragRevStop, _this)

                    _this.greenarr[j] = cakepice2
                    _this.greenarr[j].visible = true

                }
            }




        }
        else {

            if (_this.whitearr.includes(element)) {
                element.x = element.ix;
                element.y = element.iy;
            }

        }
    },
    RoundcakeDragRevStop: function (element) {

        _this.snapSound.currentTime = 0;
        _this.snapSound.play();

        if (_this.checkOverlap(element, _this.whitePlate)) {
            element.visible = false;
            _this.greencount -= 1
            element.destroy();

            if (element.name == 'green') {
                _this.greenarr[element.index] = null;

            }
            else {
                _this.orangearr[element.index] = null;

            }
            for (i = 0; i < _this.whitearr.length; i++) {
                if (!_this.whitearr[i]) {


                    if (cakeSizeArr[_this.count1] == 8) {
                        cakepice2 = _this.add.sprite(whiter8x[i], whiter8y[i], `${cakeSizeArr[_this.count1]}pieceCake${i + 1}`)
                        cakepice2.scale.setTo(0.35)
                    }
                    else if (cakeSizeArr[_this.count1] == 3) {
                        cakepice2 = _this.add.sprite(whiter3x[i], whiter3y[i], `${cakeSizeArr[_this.count1]}pieceCake${i + 1}`)
                        cakepice2.scale.setTo(0.4)
                    }
                    else if (cakeSizeArr[_this.count1] == 5) {
                        cakepice2 = _this.add.sprite(whiter5x[i], whiter5y[i], `${cakeSizeArr[_this.count1]}pieceCake${i + 1}`)
                        cakepice2.scale.setTo(0.4)
                    }
                    else if (cakeSizeArr[_this.count1] == 7) {
                        cakepice2 = _this.add.sprite(whiter7x[i], whiter7y[i], `${cakeSizeArr[_this.count1]}pieceCake${i + 1}`)
                        cakepice2.scale.setTo(0.35)
                    }


                    cakepice2.ix = cakepice2.x
                    cakepice2.iy = cakepice2.y
                    _this.whitePlate.addChild(cakepice2)
                    cakepice2.index = i;
                    cakepice2.inputEnabled = true;
                    cakepice2.input.enableDrag(true)
                    cakepice2.events.onDragUpdate.add(_this.cakeDrag, _this)
                    cakepice2.events.onDragStart.add(_this.cakeDragStart, _this)

                    cakepice2.events.onDragStop.add(_this.RoundcakeDragStop, _this)
                    _this.whitearr[i] = cakepice2


                    break;

                }
            }

            // Rearranging cake pieces to maintain their order
            for (j = i; j < _this.whitearr.length; j++) {
                if (_this.whitearr[j]) {

                    _this.whitearr[j].inputEnabled = false;
                    _this.whitearr[j].visible = false
                    cakepice2 = _this.add.sprite(_this.whitearr[j].x, _this.whitearr[j].y, `${cakeSizeArr[_this.count1]}pieceCake${j + 1}`)


                    if (cakeSizeArr[_this.count1] == 3) {
                        cakepice2.scale.setTo(0.4)
                    }
                    else if (cakeSizeArr[_this.count1] == 5) {
                        cakepice2.scale.setTo(0.4)
                    }
                    else if (cakeSizeArr[_this.count1] == 7) {
                        cakepice2.scale.setTo(0.35)

                    }
                    else if (cakeSizeArr[_this.count1] == 8) {
                        cakepice2.scale.setTo(0.35)

                    }

                    cakepice2.ix = cakepice2.x
                    cakepice2.iy = cakepice2.y
                    _this.whitePlate.addChild(cakepice2)
                    cakepice2.index = _this.whitearr[j].index;
                    cakepice2.inputEnabled = true;
                    cakepice2.input.enableDrag(true)

                    cakepice2.events.onDragUpdate.add(_this.cakeDrag, _this)
                    cakepice2.events.onDragStart.add(_this.cakeDragStart, _this)

                    cakepice2.events.onDragStop.add(_this.RoundcakeDragStop, _this)
                    _this.whitearr[j] = cakepice2;
                    _this.whitearr[j].visible = true


                }
            }
            _this.whitecount += 1
        }
        else {

            element.x = element.ix;
            element.y = element.iy;

        }

    },
    cakeDragRevStop: function (element) {

        _this.snapSound.currentTime = 0;
        _this.snapSound.play();

        if (_this.checkOverlap(element, _this.whitePlate)) {
            element.visible = false;
            _this.greencount -= 1
            element.destroy();

            if (element.name == 'green') {
                _this.greenarr[element.index] = null;
            }
            else {
                _this.orangearr[element.index] = null;
            }
            for (i = 0; i < _this.whitearr.length; i++) {
                if (!_this.whitearr[i]) {


                    if (cakeSizeArr[_this.count1] == 8) {
                        cakepice2 = _this.add.sprite(white8x[i], white8y[i], 'RectCake')
                        cakepice2.scale.setTo(0.4)
                    }
                    else if (cakeSizeArr[_this.count1] == 4) {
                        cakepice2 = _this.add.sprite(white4x[i], white4y[i], 'RectCake')
                        cakepice2.scale.setTo(0.45)
                    }
                    else if (cakeSizeArr[_this.count1] == 16) {
                        cakepice2 = _this.add.sprite(white16x[i], white16y[i], 'RectCake')
                        cakepice2.scale.setTo(0.4)
                    }

                    cakepice2.ix = cakepice2.x
                    cakepice2.iy = cakepice2.y
                    _this.whitePlate.addChild(cakepice2)
                    cakepice2.index = i;
                    cakepice2.inputEnabled = true;
                    cakepice2.input.enableDrag(true)
                    cakepice2.events.onDragUpdate.add(_this.cakeDrag, _this)
                    cakepice2.events.onDragStart.add(_this.cakeDragStart, _this)

                    cakepice2.events.onDragStop.add(_this.cakeDragStop, _this)
                    _this.whitearr[i] = cakepice2


                    break;

                }
            }

            // Rearranging cake pieces to maintain their order
            for (j = i; j < _this.whitearr.length; j++) {
                if (_this.whitearr[j]) {

                    _this.whitearr[j].inputEnabled = false;
                    _this.whitearr[j].visible = false
                    cakepice2 = _this.add.sprite(_this.whitearr[j].x, _this.whitearr[j].y, 'RectCake')

                    if (cakeSizeArr[_this.count1] == 8) {
                        // cakepice2 = _this.add.sprite(white8x[i], white8y[i], 'RectCake')
                        cakepice2.scale.setTo(0.4)
                    }
                    else if (cakeSizeArr[_this.count1] == 4) {
                        cakepice2.scale.setTo(0.45)
                    }
                    else if (cakeSizeArr[_this.count1] == 16) {
                        cakepice2.scale.setTo(0.4)

                    }

                    cakepice2.ix = cakepice2.x
                    cakepice2.iy = cakepice2.y
                    _this.whitePlate.addChild(cakepice2)
                    cakepice2.index = _this.whitearr[j].index;
                    cakepice2.inputEnabled = true;
                    cakepice2.input.enableDrag(true)

                    cakepice2.events.onDragUpdate.add(_this.cakeDrag, _this)
                    cakepice2.events.onDragStart.add(_this.cakeDragStart, _this)

                    cakepice2.events.onDragStop.add(_this.cakeDragStop, _this)
                    _this.whitearr[j] = cakepice2;
                    _this.whitearr[j].visible = true


                }
            }
            _this.whitecount += 1
        }
        else {

            element.x = element.ix;
            element.y = element.iy;

        }

    },
    showfraction2Boxes: function (addvar, y) {
        _this.twofractionboxes = true;
        _this.onebox = false;

        _this.AnswerBox = _this.add.image(addvar, y, 'white-box');
        _this.AnswerBox.scale.setTo(1.2, 1)

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

            }
        });


        _this.divideSign = _this.add.graphics();
        _this.divideSign.lineStyle(4, 0x65B4C3);
        _this.divideSign.moveTo(addvar + 5, y + 52);
        _this.divideSign.lineTo(addvar + 58, y + 52);

        _this.AnswerBox1 = _this.add.image(addvar, y + 55, 'white-box');
        _this.AnswerBox1.scale.setTo(1.2, 1)

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

            }
        });


    },
    showfractionBoxes: function () {
        console.log("boxes")
        // _this.Question_flag = 2;
        // if (_this.count1 == 0)
        //     _this.Ask_Question2.play();
        if (_this.count1 >= 3) {
            console.log("boxes1")
            for (i = 1; i < cakeSizeArr[_this.count1]; i++) {

                if (Math.floor(valuesCombinations[_this.count1] / 10) % i == 0 && (valuesCombinations[_this.count1] % 10) % i == 0) {
                    _this.smallestNumRatio = Math.floor(valuesCombinations[_this.count1] / 10) / i;
                    _this.smallestdenomRatio = Math.floor(valuesCombinations[_this.count1] % 10) / i;

                }

            }

            for (i = 1; i < cakeSizeArr[_this.count1]; i++) {
                console.log("boxes2")

                if ((_this.smallestNumRatio * i) + (_this.smallestdenomRatio * i) <= cakeSizeArr[_this.count1]) {
                    // _this.Orans = Math.floor(valuesCombinations[_this.count1] / 10) * i;
                    // _this.Grans = Math.floor(valuesCombinations[_this.count1] % 10) * i;
                    _this.Orans = _this.smallestNumRatio * i;
                    _this.Grans = _this.smallestdenomRatio * i;


                }
            }

            if ((cakeSizeArr[_this.count1] - _this.Orans - _this.Grans) > 0) {
                console.log("remaining")

                if (typearr[_this.count1] == 2)
                    // console.log("boxes")
                    _this.showfraction2Boxes(650, 100)          // whitearr is not empty
                else
                    _this.showfraction2Boxes(600, 100)
                console.log("boxes3")
                _this.b1 = true;
                _this.Question_flag = 3;
            }

            else {
                console.log("orange")
                //* play the audio for orange plate

                if (typearr[_this.count1] == 2)
                    _this.showfraction2Boxes(400, 350)             //orangeplate
                else

                    _this.showfraction2Boxes(350, 350)
                _this.b2 = true;
                console.log("boxes4")
                _this.Question_flag = 2;
            }
            // _this.showfraction2Boxes(860,350)            //green plate
        }
        else if (typearr[_this.count1] == 2) {

            if ((cakeSizeArr[_this.count1] - Math.floor(valuesCombinations[_this.count1] / 10) - valuesCombinations[_this.count1] % 10) > 0) {
                _this.showfraction2Boxes(650, 100)
                _this.Question_flag = 3;
                if (_this.count1 == 0) {
                    _this.time.events.add(550, function () {
                        _this.Ask_Question3.play();
                    })
                }
                _this.b1 = true;
                console.log("boxes5")
                _this.Question_flag = 3;
            }

            else {
                _this.Question_flag = 2;
                if (_this.count1 == 0) {
                    _this.time.events.add(550, function () {
                        _this.Ask_Question2.play();
                    })
                }
                console.log("boxes6")
                _this.showfraction2Boxes(400, 350)             //orangeplate
                _this.b2 = true;
            }
            // _this.showfraction2Boxes(860,350)            //green plate
        }
        else {
            if ((cakeSizeArr[_this.count1] - Math.floor(valuesCombinations[_this.count1] / 10) - valuesCombinations[_this.count1] % 10) > 0) {
                _this.Question_flag = 3;
                if (_this.count1 == 0) {
                    _this.time.events.add(550, function () {
                        _this.Ask_Question3.play();
                    })
                }
                _this.showfraction2Boxes(600, 100)          // whitearr is not empty
                _this.b1 = true;
                console.log("boxes7")
            }
            else {
                console.log("boxes8")
                _this.Question_flag = 2;
                if (_this.count1 == 0) {
                    _this.time.events.add(550, function () {
                        _this.Ask_Question2.play();
                    })
                }
                _this.showfraction2Boxes(350, 350)
                _this.b2 = true;
            }
            // _this.showfraction2Boxes(800,350)            
        }
        _this.addNumberPad()
    },
    addNumberPad: function () {
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
    numClicked: function (target) {
        _this.clickSound.play();
        var_selectedAns1 = " "
        var_selectedAns2 = " "

        if (target.name == 10)
            target.name = 0;

        if (_this.selectedAns1 === '') {
            _this.selectedAns1 = target.name;
            var_selectedAns1 = _this.selectedAns1;
        }
        else if (_this.selectedAns2 === '') {
            _this.selectedAns2 = target.name;
            var_selectedAns1 = _this.selectedAns1;
            var_selectedAns2 = _this.selectedAns2;
        }

        if (_this.fourNotEntered == false) {

            if (_this.q1 == true) {
                _this.enterTxt.visible = false;
                _this.AnswerBox.removeChild(_this.enterTxt);
                if ((var_selectedAns2 === " "))

                    _this.enterTxt = _this.add.text(19, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '26px' });
                else {
                    _this.enterTxt = _this.add.text(11, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '26px' });
                    _this.q1 = false;
                    _this.fourNotEntered = true

                }

                _this.applyingStyle(_this.enterTxt);
                _this.AnswerBox.addChild(_this.enterTxt);
                _this.AnswerBox.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }

            else if (_this.q2 == true) {
                _this.AnswerBox1.removeChild(_this.enterTxt1);
                if ((var_selectedAns2 === " "))

                    _this.enterTxt1 = _this.add.text(19, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '26px' });
                else {
                    _this.enterTxt1 = _this.add.text(11, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '26px' });
                    _this.q2 = false;
                    _this.fourNotEntered = true

                }

                _this.applyingStyle(_this.enterTxt1);

                _this.AnswerBox1.addChild(_this.enterTxt1);
                _this.AnswerBox1.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }
        }
    },
    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.fourNotEntered = false;
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

    },
    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },
    emptyInputs: function () {

        _this.AnswerBox.frame = 0;
        _this.AnswerBox1.frame = 0;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.enterTxt = '';
        _this.enterTxt1 = '';
        _this.AnswerBox = null;
        _this.AnswerBox1 = null;
        _this.fourNotEntered = false;


    },
    rightbtnClicked: function () {
         _this.noofAttempts++;
         
        _this.userselected = 0;
        _this.clickSound.play();
        if (!_this.twofractionboxes)
            _this.rightbtn.frame = 1;
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;
        _this.rightbtn_is_Clicked = true;

        if (!_this.twofractionboxes) {
            // whole number part entered evaluate
            _this.disableCakes()
            orangeC = 0;
            greenC = 0;

            _this.orangearr.forEach(element => {
                if (element) {
                    orangeC += 1;
                }
            });
            _this.greenarr.forEach(element => {
                if (element) {
                    greenC += 1;
                }
            });
            if (_this.count1 >= 3) {
                //   Converting given ratio in smallest num possible

                for (i = 1; i < cakeSizeArr[_this.count1]; i++) {

                    if (Math.floor(valuesCombinations[_this.count1] / 10) % i == 0 && (valuesCombinations[_this.count1] % 10) % i == 0) {
                        _this.smallestNumRatio = Math.floor(valuesCombinations[_this.count1] / 10) / i;
                        _this.smallestdenomRatio = Math.floor(valuesCombinations[_this.count1] % 10) / i;

                    }

                }

                for (i = 1; i < cakeSizeArr[_this.count1]; i++) {

                    if ((_this.smallestNumRatio * i) + ((_this.smallestdenomRatio) * i) <= cakeSizeArr[_this.count1]) {
                        _this.Orans = _this.smallestNumRatio * i;
                        _this.Grans = _this.smallestdenomRatio * i;

                    }
                }
                _this.a1 = _this.Orans;
                _this.a2 = _this.Grans

            }
            else {
                _this.a1 = Math.floor(valuesCombinations[_this.count1] / 10);
                _this.a2 = valuesCombinations[_this.count1] % 10;

            }
            if (orangeC == _this.a1 && greenC == _this.a2) {

                _this.celebrate()
                _this.add.tween(_this.rightbtn).to({ alpha: 0 }, 700, 'Linear', true)

                _this.time.events.add(500, () => {
                    _this.showfractionBoxes();

                })

            }
            else {
                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                })
                _this.wrongSelected();

            }
        }
        else {
            _this.getAnswers()
            _this.isCorrectAns = false;

            if (_this.getAnswers()) {


                if (_this.b1 == true) {
                    _this.box1 = _this.AnswerBox;
                    _this.box2 = _this.AnswerBox1;
                    _this.box1.inputEnabled = false;
                    _this.box2.inputEnabled = false;
                    _this.line1 = _this.divideSign;
                    _this.b1 = false;
                    _this.b2 = true;
                    _this.emptyInputs();
                    _this.celebrate();

                    _this.rightbtn.inputEnabled = true;

                    if (typearr[_this.count1] == 2) {
                        _this.Question_flag = 2;
                        if (_this.count1 == 0) {
                            _this.time.events.add(550, function () {
                                _this.Ask_Question2.play();
                            })
                        }
                        console.log("boxes 9")
                        _this.showfraction2Boxes(400, 350)             //orangeplate
                    }
                    else {
                        console.log("boxes 111")
                        _this.Question_flag = 2;
                        if (_this.count1 == 0) {
                            _this.time.events.add(550, function () {
                                _this.Ask_Question2.play();
                            })
                        }
                        _this.showfraction2Boxes(350, 350)             //orangeplate
                    }

                }
                else if (_this.b2 == true) {
                    _this.box3 = _this.AnswerBox;
                    _this.box4 = _this.AnswerBox1;
                    _this.line2 = _this.divideSign;

                    _this.b2 = false;
                    _this.b3 = true;
                    _this.box3.inputEnabled = false;
                    _this.box4.inputEnabled = false;
                    _this.emptyInputs();
                    _this.celebrate();

                    _this.rightbtn.inputEnabled = true;

                    if (typearr[_this.count1] == 2) {
                        _this.Question_flag = 2;
                        if (_this.count1 == 0) {
                            _this.time.events.add(550, function () {
                                _this.Ask_Question2.play();
                            })
                        }
                        console.log("boxes 222")
                        _this.showfraction2Boxes(860, 350)            //green plate
                    }
                    else {
                        _this.Question_flag = 2;
                        if (_this.count1 == 0) {
                            _this.time.events.add(550, function () {
                                _this.Ask_Question2.play();
                            })
                        }
                        console.log("boxes 3333")
                        _this.showfraction2Boxes(800, 350)            //green plate
                    }

                }
                else if (_this.b3 == true) {
                    _this.box5 = _this.AnswerBox;
                    _this.box6 = _this.AnswerBox1;
                    _this.box5.inputEnabled = false;
                    _this.box6.inputEnabled = false;
                    _this.line3 = _this.divideSign;
                    _this.b3 = false;
                    _this.emptyInputs()
                    _this.correctAns();

                }

            }
            else {
                _this.time.events.add(500, () => {
                    if (!_this.twofractionboxes)
                        _this.rightbtn.frame = 0;
                })
                _this.wrongSelected();


            }
        }
    },
    validateAnswer: function (num, denom, correctNum, correctDenom) {
        for (i = 1; i < cakeSizeArr[_this.count1]; i++) {
            if (num == correctNum / i && denom == correctDenom / i && denom <= correctDenom && num <= correctNum) {
                return true;
            }
        }
    },
    getAnswers: function () {


        if (_this.count1 < 3) {
            if (_this.b1 == true) {

                _this.ans = cakeSizeArr[_this.count1] - Math.floor(valuesCombinations[_this.count1] / 10) - valuesCombinations[_this.count1] % 10
            }
            else if (_this.b2 == true) {
                _this.ans = Math.floor(valuesCombinations[_this.count1] / 10);

            }
            else if (_this.b3 == true) {
                _this.ans = Math.floor(valuesCombinations[_this.count1] % 10);


            }
            return _this.validateAnswer(_this.AnswerBox.name, _this.AnswerBox1.name, _this.ans, cakeSizeArr[_this.count1])


        }
        else {
            for (i = 1; i < cakeSizeArr[_this.count1]; i++) {

                if (Math.floor(valuesCombinations[_this.count1] / 10) % i == 0 && (valuesCombinations[_this.count1] % 10) % i == 0) {
                    _this.smallestNumRatio = Math.floor(valuesCombinations[_this.count1] / 10) / i;
                    _this.smallestdenomRatio = Math.floor(valuesCombinations[_this.count1] % 10) / i;

                }

            }

            for (i = 1; i < cakeSizeArr[_this.count1]; i++) {

                if ((_this.smallestNumRatio * i) + (_this.smallestdenomRatio * i) <= cakeSizeArr[_this.count1]) {

                    _this.Orans = _this.smallestNumRatio * i;
                    _this.Grans = _this.smallestdenomRatio * i;

                }

            }
            if (_this.b1 == true) {
                _this.ans = cakeSizeArr[_this.count1] - _this.Orans - _this.Grans;
            }
            else if (_this.b2 == true) {
                _this.ans = _this.Orans;
            }
            else if (_this.b3 == true) {
                _this.ans = _this.Grans;

            }
            return _this.validateAnswer(_this.AnswerBox.name, _this.AnswerBox1.name, _this.ans, cakeSizeArr[_this.count1])


        }


    },
    celebrate: function () {
        _this.counterCelebrationSound.pause();
        _this.counterCelebrationSound.currentTime = 0;
        _this.counterCelebrationSound.play();


    },
    destroycakes: function () {
        _this.whitearr.forEach(element => {
            if (element) {
                element.destroy()
            }
        })
        _this.whitePlate.children.forEach(element => {
            if (element) {
                element.destroy()
            }
        })
        _this.orangePlate.children.forEach(element => {
            if (element) {
                element.destroy()
            }
        })
        _this.greenPlate.children.forEach(element => {
            if (element) {
                element.destroy()
            }
        })
        _this.orangearr.forEach(element => {
            if (element) {
                element.destroy()
            }
        })
        _this.greenarr.forEach(element => {
            if (element) {
                element.destroy()
            }
        });
    },
    disableCakes: function () {
        _this.whitearr.forEach(element => {
            if (element) {
                element.inputEnabled = false;
            }
        })
        _this.whitePlate.children.forEach(element => {
            if (element) {
                element.inputEnabled = false;
            }
        })
        _this.orangearr.forEach(element => {
            if (element) {
                element.inputEnabled = false;
            }
        })
        _this.greenarr.forEach(element => {
            if (element) {
                element.inputEnabled = false;
            }
        });
    },
    wrongSelected: function () {
        _this.wrongans.play();
        _this.rightbtn.inputEnabled = true;
        if (!_this.twofractionboxes) {
            _this.time.events.add(500, () => {
                _this.destroycakes();

                if (typearr[_this.count1] == 1) {
                    _this.arrangeCakePiceRound();
                }
                else {
                    _this.arrangeCakePiceRect();

                }
            })

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

            _this.fourNotEntered = false;
        }

    },

    ClearAll: function () {

        _this.twofractionboxes = false;
        _this.numGroup.destroy();
        _this.destroycakes();
        _this.whitePlate.destroy();
        _this.orangePlate.destroy();
        _this.greenPlate.destroy();
        _this.questionBox.destroy();
        if (_this.box1)
            _this.box1.destroy();
        if (_this.box2)
            _this.box2.destroy();
        if (_this.line1)
            _this.line1.destroy();
        _this.box3.destroy();
        _this.box4.destroy();
        _this.box5.destroy();
        _this.box6.destroy();
        _this.line2.destroy();
        _this.line3.destroy();

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
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

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
                _this.state.start('score',true,false,gameID,_this.microConcepts);
            })
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
        // _this.game_id = "NSRP_3_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Ratio and Proportion";
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
        //* Distribute the whole cake as per given Ratio
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl+"questionSounds/NSRP-03-G6/" +
            _this.languageSelected + "/NSRP-03-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Enter the fraction of distributed cake  
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl+"questionSounds/NSRP-03-G6/" +
            _this.languageSelected + "/NSRP-03-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* Enter the fraction of cake which is not distributed 
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl+"questionSounds/NSRP-03-G6/" +
            _this.languageSelected + "/NSRP-03-G6C.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(850, 130, 'skipArrow');       //* skip button shown at the bottom
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
            console.log("removing the q2");
            _this.q3Sound.pause();
            _this.q3Sound = null;
            _this.q3Soundsrc = null;
        }

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed

    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('nsrp03_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl+"assets/demoVideos/NSRP-03-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        _this.q1Timer = setTimeout(function ()    //* q1 js timer to play q1Timer after 3 seconds.
        {
            console.log("inside q1sound.....")
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 3000);

        _this.q3Timer = setTimeout(function ()    //* q3 js timer to play q3Timer after 18 seconds.
        {
            console.log("inside q3sound.....")
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 18000);

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 34 seconds.
        {
            console.log("inside q2sound.....")
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 34000);

        _this.q4Timer = setTimeout(function ()    //* q4 js timer to play q4Timer after 43 seconds.
        {
            console.log("inside q2sound.....")
            clearTimeout(_this.q4Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 43000);

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