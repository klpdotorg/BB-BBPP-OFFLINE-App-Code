Game.NSF_10_G6level1 = function () { };


Game.NSF_10_G6level1.prototype =
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


        _this.nextoptionSound = document.createElement('audio');
        _this.nextoptionSoundsrc = document.createElement('source');
        _this.nextoptionSoundsrc.setAttribute("src", window.baseUrl + "sounds/Next_option_sound.mp3");
        _this.nextoptionSound.appendChild(_this.nextoptionSoundsrc);

        telInitializerbbpp.gameIdInit("NSF_10_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },

    create: function (game) {

        //* show the demo video
        _this.time.events.add(1, function () {
            _this.ViewDemoVideo();
        });

        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        _this.time.events.add(1000, function () {
            _this.gameCreate();
        });
    },

    ViewDemoVideo: function () {
        //* pause the game before going to the demovideo 
        _this.game.paused = true;
        _this.DemoVideo();  //* at the end of demo video/skip pressed, it will unpause the game.
    },

    gameCreate: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.count1 = 0;
        _this.wholeNoQues = -1;

        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.number;
        _this.selectedAns1 = '';

        _this.qn_flag = -1;
        _this.loopCount = 0;
        _this.uniqueD = 0;
        _this.draggableObj = [];

        _this.askedNum1 = [-1, -1, -1, -1, -1, -1];
        _this.askedNum2 = [-1, -1, -1, -1, -1, -1]
        _this.askedDenom = [-1, -1, -1, -1, -1, -1];

        //  //* User Progress variables for BB++ app
        //  _this.userHasPlayed = 0;
        //  _this.timeinMinutes;
        //  _this.timeinSeconds;
        //  _this.game_id;
        //  _this.score = 0;
        //  _this.gradeTopics;
          _this.microConcepts;
        //  _this.grade;

        // _this.shake = new Phaser.Plugin.Shake(game);
        // game.plugins.add(_this.shake);

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');


        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.stopVoice();
            _this.backbtn.events.onInputDown.removeAll();
            _this.time.events.add(50, function () {
                _this.state.start('grade6NumberSystems', true, false);
            });
        });
        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            ////console.log("Hello");
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                if (_this.qn_flag == 1) {
                    _this.askQn1();
                }
                if (_this.qn_flag == 2) {
                    _this.askQn2();
                }
                if (_this.qn_flag == 3) {
                    _this.askQn3();
                }

                _this.time.events.add(4000, function () {
                    _this.speakerbtnClicked = false;
                    _this.EnableVoice();

                });
            }


        }, _this);
        _this.boxesObj = [];
        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);

        _this.time.events.add(2000, _this.getQuestion);

        _this.fractionX = [70, 160];
        _this.fraction2X = [285, 370];
        _this.fractionY = [90, 150, 210, 270];
        _this.fraction2Y = [90, 150, 210, 270];

        _this.denominator = false;
        _this.numerator = false;
    },

    //* function to enable the speaker button once pressed.
    EnableVoice: function () {
        ////console.log("SBtn: " + _this.speakerbtnClicked + " RBtn: " + _this.rightbtnClicked);
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


    askQn1: function () {
        //console.log("What are the fractions shown here?");
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-10-G6/" +
            _this.languageSelected + "/NSF-10-G6-a.mp3");
        _this.Question1.appendChild(_this.Question1src);
        _this.Question1.play();
    },

    //question 2
    askQn2: function () {
        //console.log('Add the fractions by dragging them to the whole');
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NSF-10-G6/" +
            _this.languageSelected + "/NSF-10-G6-b.mp3");
        _this.Question2.appendChild(_this.Question2src);
        _this.Question2.play();
    },
    askQn3: function () {
        //console.log('Enter the answer');
        _this.Question3 = document.createElement('audio');
        _this.Question3src = document.createElement('source');
        _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NSF-10-G6/" +
            _this.languageSelected + "/NSF-10-G6-c.mp3");
        _this.Question3.appendChild(_this.Question3src);
        _this.Question3.play();
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

        _this.questionid = 1;
    },


    stopVoice: function () {

        if (_this.Question1) {
            if (_this.Question1.contains(_this.Question1src)) {
                _this.Question1.removeChild(_this.Question1src);
                _this.Question1src = null;
            }

            if (!_this.Question1.paused) {
                _this.Question1.pause();
                _this.Question1.currentTime = 0.0;
            }
            _this.Question1 = null;
            _this.Question1src = null;
        }

        if (_this.Question2) {
            if (_this.Question2.contains(_this.Question2src)) {
                _this.Question2.removeChild(_this.Question2src);
                _this.Question2src = null;
            }

            if (!_this.Question2.paused) {
                _this.Question2.pause();
                _this.Question2.currentTime = 0.0;
            }
            _this.Question2 = null;
            _this.Question2src = null;
        }

        if (_this.Question3) {
            if (_this.Question3.contains(_this.Question3src)) {
                _this.Question3.removeChild(_this.Question3src);
                _this.Question3src = null;
            }

            if (!_this.Question3.paused) {
                _this.Question3.pause();
                _this.Question3.currentTime = 0.0;
            }
            _this.Question3 = null;
            _this.Question3src = null;
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
        // _this.game_id = "NSF_10_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Fractions";
         _this.microConcepts = "Number Systems";
        _this.count1++;
        anim.play();
    },

    celebration: function () {
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
    },

    randomizing_elements: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        _this.flag = 0;
        var PossibleDenomiators = [3, 4, 5, 6, 7, 8, 9];

        //console.log("in randomisation")
        _this.loopCount += 1;
        if (_this.loopCount > 4) {
            //  terminating the loop here not to create infinite loop
            //console.log("denom  = ",_this.DenominatorValue)

            for (var i = 0; i < PossibleDenomiators.length; i++) {
                for (var k = 0; k < _this.count1; k++) {
                    if (PossibleDenomiators[i] == _this.askedDenom[k]) {
                        _this.flag = 1;
                        //console.log("denom  = ",_this.DenominatorValue)
                        //console.log(PossibleDenomiators[i]);
                        //console.log(askedDenom[k]);

                        break;
                    }
                }
                if (_this.flag == 0) {
                    //console.log("denom  = ",_this.DenominatorValue)

                    _this.DenominatorValue = PossibleDenomiators[i];
                    _this.uniqueD = 1;
                    //console.log("denom  = ",_this.DenominatorValue)

                    var max = _this.DenominatorValue;
                    var min = 1;
                    //console.log(min, max);
                    _this.NumeratorValue1 = Math.floor(Math.random() * (max - min) + min);
                    max = _this.DenominatorValue - _this.NumeratorValue1;
                    _this.NumeratorValue2 = Math.floor(Math.random() * (max - min) + min);
                    var maxNum = _this.NumeratorValue1 + _this.NumeratorValue2;
                    if (maxNum == _this.DenominatorValue && _this.wholeNoQues == 1) {
                        //console.log("yes whole")
                        while (maxNum == _this.DenominatorValue) {
                            //console.log("yes ", maxNum, _this.NumeratorValue1, _this.NumeratorValue2)
                            max = _this.DenominatorValue;

                            _this.NumeratorValue1 = Math.floor(Math.random() * (max - min) + min);
                            max = _this.DenominatorValue - _this.NumeratorValue1;

                            _this.NumeratorValue2 = Math.floor(Math.random() * (max - min) + min);
                            maxNum = _this.NumeratorValue1 + _this.NumeratorValue2;

                        }

                    }
                    else if (maxNum == _this.DenominatorValue) {
                        //console.log("yes wholenum")
                        _this.wholeNoQues = 1;

                    }
                    if (_this.count1 >= 4 && _this.wholeNoQues == -1) {
                        //console.log("yes wholenum")
                        _this.wholeNoQues = 1;
                        _this.NumeratorValue2 = max;
                    }
                    //console.log("yes break")

                    break;
                }
            }

        }
        if (_this.uniqueD != 1) {
            _this.DenominatorValue = PossibleDenomiators[Math.floor(Math.random() * PossibleDenomiators.length)];
            var max = _this.DenominatorValue;
            var min = 1;
            //console.log(min, max);
            _this.NumeratorValue1 = Math.floor(Math.random() * (max - min) + min);
            max = _this.DenominatorValue - _this.NumeratorValue1;
            _this.NumeratorValue2 = Math.floor(Math.random() * (max - min) + min);
            var maxNum = _this.NumeratorValue1 + _this.NumeratorValue2;
        }

        //console.log(_this.NumeratorValue1, _this.NumeratorValue2)

        if (_this.checkRandomize() == true) {
            //console.log("yes true")
            if (maxNum == _this.DenominatorValue && _this.wholeNoQues == 1) {
                //console.log("yes whole")
                while (maxNum == _this.DenominatorValue) {
                    //console.log("yes ", maxNum, _this.NumeratorValue1, _this.NumeratorValue2)
                    max = _this.DenominatorValue;

                    _this.NumeratorValue1 = Math.floor(Math.random() * (max - min) + min);
                    max = _this.DenominatorValue - _this.NumeratorValue1;

                    _this.NumeratorValue2 = Math.floor(Math.random() * (max - min) + min);
                    maxNum = _this.NumeratorValue1 + _this.NumeratorValue2;

                }

            }
            else if (maxNum == _this.DenominatorValue) {
                //console.log("yes wholenum")
                _this.wholeNoQues = 1;
                //console.log(_this.NumeratorValue1, _this.NumeratorValue2)


            }
            if (_this.count1 >= 4 && _this.wholeNoQues == -1) {
                //console.log("yes wholenum")
                _this.wholeNoQues = 1;
                _this.NumeratorValue2 = max;
                //console.log(_this.NumeratorValue1, _this.NumeratorValue2)

            }

            _this.askedDenom[_this.count1] = _this.DenominatorValue;
            _this.askedNum1[_this.count1] = _this.NumeratorValue1;
            _this.askedNum2[_this.count1] = _this.NumeratorValue2;

            switch (_this.DenominatorValue) {

                case 3: var trayPiecesArray = ["1x3traypiecesblue", "1x3traypiecesgreen"];
                    var trayPiece = trayPiecesArray[Math.floor(Math.random() * trayPiecesArray.length)];
                    _this.displayfractionsOnScreen(trayPiece, 3);
                    break;

                case 4: var trayPiecesArray = ["1x4traypiecesblue", "1x4traypiecespink", "1x4traypiecesgreen"];
                    var trayPiece = trayPiecesArray[Math.floor(Math.random() * trayPiecesArray.length)];
                    _this.displayfractionsOnScreen(trayPiece, 4);
                    break;

                case 5: _this.displayfractionsOnScreen("1x5traypieces", 5);
                    break;

                case 6: _this.displayfractionsOnScreen("1x6traypieces", 6);
                    break;
                case 7: _this.displayfractionsOnScreen("1x7traypieces", 7);
                    break;
                case 8: _this.displayfractionsOnScreen("1x8traypieces", 8);
                    break;

                case 9: _this.displayfractionsOnScreen("1x9traypieces", 9);
                    break;

            }

        }
        else {
            _this.randomizing_elements();
        }

    },
    checkRandomize: function () {
        //console.log("checking")
        for (i = 0; i <= _this.count1; i++) {
            if (_this.DenominatorValue == _this.askedDenom[i]) {
                i = -1;
                return false;

            }
            else if (_this.askedDenom[i] == -1) {
                return true;
            }
        }
        return true;

    },

    getBaseDisplayed: function (baseName1) {
        _this.emptyBox1 = _this.add.image(680, 200, baseName1);
        _this.emptyBox1.anchor.setTo(0.5);
        _this.emptyBox1.scale.setTo(1.0);
        _this.emptyBox1.visible = true;
    },

    onScreenDisplay: function (fractioName) {

        _this.trayBox1 = _this.add.image(40, 60, 'Tray');
        _this.trayBox1.scale.setTo(1.0);

        _this.trayBox2 = _this.add.image(255, 60, 'Tray');
        _this.trayBox2.scale.setTo(1.0);

        switch (fractioName) {


            case '1x3traypiecesblue': _this.getBaseDisplayed('1x3baseblue');
                break;

            case '1x3traypiecesgreen': _this.getBaseDisplayed('1x3basegreen');
                break;

            case '1x4traypiecesblue': _this.getBaseDisplayed('1x4baseblue');
                break;

            case '1x4traypiecespink': _this.getBaseDisplayed('1x4base');
                break;

            case '1x4traypiecesgreen': _this.getBaseDisplayed('Ovalbase');
                break;

            case '1x5traypieces': _this.getBaseDisplayed('1x5base');
                break;

            case '1x6traypieces': _this.getBaseDisplayed('1x6base');
                break;
            case '1x7traypieces': _this.getBaseDisplayed('1x7base');
                break;
            case '1x8traypieces': _this.getBaseDisplayed('1x8base');
                break;

            case '1x9traypieces': _this.getBaseDisplayed('1x9base');
                break;

        }

    },
    displayfraction: function (denominator) {

        //console.log("hey im here");
        _this.box_flag = 1;

        _this.mybox1 = _this.add.image(95, 350, 'yellowtextbox');
        _this.mybox1.scale.setTo(1.0);
        _this.mybox1.visible = false;

        _this.enterFractionBox1 = _this.add.sprite(100, 350, 'SquareBox');//825 230
        _this.enterFractionBox1.scale.setTo(0.8);
        _this.enterFractionBox1.visible = true;
        _this.enablebox();
        _this.graphics1 = _this.add.graphics();
        _this.graphics1.lineStyle(4, 0xff0000);
        _this.graphics1.moveTo(138, 395);
        _this.graphics1.lineTo(104, 395);

        _this.displaydenominator1 = _this.add.text(112, 400, denominator, { fontSize: '26px' });
        _this.displaydenominator1.align = 'right';
        _this.displaydenominator1.font = "Akzidenz-Grotesk BQ";
        _this.displaydenominator1.fill = '#FF0000';
        _this.displaydenominator1.fontWeight = 'Normal';
        _this.displaydenominator1.visible = true;
        _this.qn_flag = 1;

        if (_this.count1 < 1)
            _this.askQn1();
        _this.time.events.add(2000, function () {

            _this.numberPad1();
        });

    },
    displayfraction2: function (denominator) {
        _this.box_flag = 2;
        _this.qn_flag = 1;

        _this.mybox2 = _this.add.image(310, 350, 'yellowtextbox');
        _this.mybox2.scale.setTo(1.0);
        _this.mybox2.visible = false;

        _this.enterFractionBox1 = _this.add.sprite(315, 350, 'SquareBox');//825 230
        _this.enterFractionBox1.scale.setTo(0.8);
        _this.enterFractionBox1.visible = true;
        _this.enablebox();
        _this.graphics2 = _this.add.graphics();
        _this.graphics2.lineStyle(4, 0xff0000);
        _this.graphics2.moveTo(353, 395);
        _this.graphics2.lineTo(319, 395);
        _this.displaydenominator2 = _this.add.text(327, 400, denominator, { fontSize: '26px' });
        _this.displaydenominator2.align = 'right';
        _this.displaydenominator2.font = "Akzidenz-Grotesk BQ";
        _this.displaydenominator2.fill = '#FF0000';
        _this.displaydenominator2.fontWeight = 'Normal';
        _this.displaydenominator2.visible = true;
    },

    displayfractionsOnScreen: function (fractionName, denominator) {
        _this.fractionName = fractionName;
        _this.onScreenDisplay(_this.fractionName);
        _this.fractionGroup = _this.add.group();
        _this.DenominatorValue = denominator;
        _this.Counter = 0;

        //console.log(_this.DenominatorValue);
        var row = 0;
        var col = 0;

        //console.log("num1 and num2 ", _this.NumeratorValue1 + "" + _this.NumeratorValue2)

        for (i = 1; i <= _this.NumeratorValue1; i++) {
            //console.log("numerator", _this.NumeratorValue1);
            _this.fractionbox = _this.add.sprite(_this.fractionX[row], _this.fractionY[col], _this.fractionName);

            _this.fractionbox.width = 35;
            _this.fractionbox.height = 47;

            if (fractionName == '1x4traypiecesgreen') {
                _this.fractionbox.width = 40;
                _this.fractionbox.height = 50;
            }
            if (fractionName == '1x3traypiecesgreen') {
                _this.fractionbox.width = 50;
                _this.fractionbox.height = 70;
            }
            this.draggableObj.push(_this.fractionbox);


            _this.fractionbox.inputEnabled = true;
            _this.fractionbox.input.useHandCursor = true;
            // _this.fractionbox.input.enableDrag(true);
            _this.fractionbox.visible = true;
            _this.fractionGroup.addChild(_this.fractionbox);
            // _this.fractionbox.events.onDragStop.add(_this.dragStop1, _this);
            row += 1;
            if (row >= 2) {
                row = 0;
                col = col + 1;
            }

        }
        _this.displayfraction(denominator);

        row = 0;
        col = 0;
        for (i = 1; i <= _this.NumeratorValue2; i++) {
            //console.log("numerator", _this.NumeratorValue2);
            _this.fractionbox = _this.add.sprite(_this.fraction2X[row], _this.fraction2Y[col], _this.fractionName);
            _this.fractionbox.width = 35;
            _this.fractionbox.height = 47;

            if (fractionName == '1x4traypiecesgreen') {
                _this.fractionbox.width = 40;
                _this.fractionbox.height = 50;
            }
            if (fractionName == '1x3traypiecesgreen') {
                _this.fractionbox.width = 50;
                _this.fractionbox.height = 70;
            }
            _this.draggableObj.push(_this.fractionbox);
            _this.fractionbox.inputEnabled = true;
            _this.fractionbox.input.useHandCursor = true;
            // _this.fractionbox.input.enableDrag(true);
            _this.fractionbox.visible = true;
            _this.fractionGroup.addChild(_this.fractionbox);
            // _this.fractionbox.events.onDragStop.add(_this.dragStop1, _this);
            row += 1;
            if (row >= 2) {
                row = 0;
                col = col + 1;
            }


        }
        // _this.drag_cubesAction_Ver();

    },
    //* to show drag action to user from outside to workspace.
    drag_cubesAction_Ver: function () {

        _this.tempCubeGroup = _this.add.group();
        //* create temp group of cubes to show dragging action to user. 
        _this.tempCube = _this.add.sprite(_this.fractionX[0], _this.fractionY[0], _this.fractionName);
        _this.tempCube.width = 35;
        _this.tempCube.height = 47;
        if (_this.fractionName == '1x4traypiecesgreen') {
            _this.tempCube.width = 40;
            _this.tempCube.height = 50;
        }
        if (_this.fractionName == '1x3traypiecesgreen') {
            _this.tempCube.width = 50;
            _this.tempCube.height = 70;
        }
        _this.tempCubeGroup.addChild(_this.tempCube);

        _this.time.events.add(1000, function () {
            _this.hand = _this.add.image(_this.fractionX[0] + 20, _this.fractionY[0], 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
            _this.tempCubeGroup.addChild(_this.hand);
        });

        switch (_this.fractionName) {
            case '1x3traypiecesblue': _this.positionX = 553;
                _this.positionY = 73;
                break;

            case '1x3traypiecesgreen': _this.positionX = 575.6;
                _this.positionY = 97;
                break;

            case '1x4traypiecespink': _this.positionX = 543.5;
                _this.positionY = 64;
                break;

            case '1x4traypiecesblue': _this.positionX = 547.5;
                _this.positionY = 73;
                break;

            case '1x4traypiecesgreen': _this.positionX = 542;
                _this.positionY = 64;
                break;

            case '1x5traypieces': _this.positionX = 545.5;
                _this.positionY = 75;
                break;

            case '1x6traypieces': _this.positionX = 545;
                _this.positionY = 65.4;
                break;
            case '1x7traypieces': _this.positionX = 525;
                _this.positionY = 75;
                break;
            case '1x8traypieces': _this.positionX = 515;
                _this.positionY = 75;
                break;

            case '1x9traypieces': _this.positionX = 468.5;
                _this.positionY = 115;
                break;

        }

        _this.time.events.add(1500, function () {
            //* add tween to temp group and tween it to work space.
            tempDragAction = _this.add.tween(_this.tempCubeGroup);
            tempDragAction.to({ x: _this.positionX - _this.fractionX[0], y: _this.positionY - _this.fractionY[0] }, 1600, 'Linear', true, 0);
            tempDragAction.start();
        });

        _this.time.events.add(3000, function () {

            switch (_this.fractionName) {
                case '1x3traypiecesblue':
                    _this.tempBox = _this.add.sprite(553, 73, '1x3piecesblue');
                    _this.tempBox.scale.setTo(1.7);
                    break;

                case '1x3traypiecesgreen':
                    _this.tempBox = _this.add.sprite(575.6, 97, '1X3greenpieces_1');
                    _this.tempBox.scale.setTo(1);
                    break;

                case '1x4traypiecespink':
                    _this.tempBox = _this.add.sprite(543.5, 63.5, '1X4piecespink');
                    _this.tempBox.scale.setTo(1);
                    break;

                case '1x4traypiecesblue':
                    _this.tempBox = _this.add.sprite(547.5, 67, '1x4piecesblue');
                    _this.tempBox.scale.setTo(1.7, 1.78);
                    break;

                case '1x4traypiecesgreen': _this.tempBox = _this.add.sprite(542, 64, '1X4pieces_1');
                    _this.tempBox.scale.setTo(1.02);
                    break;

                case '1x5traypieces':
                    _this.tempBox = _this.add.sprite(545.5, 65, '1x5pieces');
                    _this.tempBox.scale.setTo(1.8);
                    break;

                case '1x6traypieces':
                    _this.tempBox = _this.add.sprite(545, 66, '1x6pieces');
                    _this.tempBox.scale.setTo(1.008);
                    break;
                case '1x7traypieces':
                    _this.tempBox = _this.add.sprite(468.5, 115, '1x7pieces');
                    _this.tempBox.scale.setTo(1.04, 1.015);
                    break;
                case '1x8traypieces':
                    _this.tempBox = _this.add.sprite(469, 115, '1x8pieces');
                    _this.tempBox.scale.setTo(1.05, 1.015);
                    break;

                case '1x9traypieces':
                    _this.tempBox = _this.add.sprite(468.5, 115, '1x9pieces');
                    _this.tempBox.scale.setTo(1.05, 1.02);
                    break;

            }
            _this.tempCubeGroup.destroy();

        });
        _this.time.events.add(4000, function () {
            _this.tempBox.destroy();
            _this.draggableObj.forEach(element => {
                element.input.enableDrag(true);
                element.events.onDragStop.add(_this.dragStop1, _this);

            });
        });
        //* destroy the group after the show after a delay

    },


    getRectangularBase1x3Filled: function (counter, sprite) {
        //console.log(counter);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x3box = _this.add.sprite(553, 73, '1x3piecesblue');
                _this.rectangleBase1x3box.scale.setTo(1.7);
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x3box = _this.add.sprite(637, 73, '1x3piecesblue');
                _this.rectangleBase1x3box.scale.setTo(1.7);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x3box = _this.add.sprite(721.5, 73, '1x3piecesblue');
                _this.rectangleBase1x3box.scale.setTo(1.75, 1.7);
                break;

        }
        _this.boxesObj.push(_this.rectangleBase1x3box);

    },

    getRectangularBase1x4Filled: function (counter, sprite) {
        //console.log(counter);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x4box = _this.add.sprite(547.5, 67, '1x4piecesblue');
                _this.rectangleBase1x4box.scale.setTo(1.7, 1.78);
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x4box = _this.add.sprite(612.5, 67, '1x4piecesblue');
                _this.rectangleBase1x4box.scale.setTo(1.7, 1.78);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x4box = _this.add.sprite(678, 67, '1x4piecesblue');
                _this.rectangleBase1x4box.scale.setTo(1.78);
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x4box = _this.add.sprite(746, 67, '1x4piecesblue');
                _this.rectangleBase1x4box.scale.setTo(1.78);
                break;

        }
        _this.boxesObj.push(_this.rectangleBase1x4box);

    },


    getRectangularBase1x5Filled: function (counter, sprite) {
        //console.log(counter);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x5box = _this.add.sprite(545.5, 65, '1x5pieces');
                _this.rectangleBase1x5box.scale.setTo(1.8);
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x5box = _this.add.sprite(598.5, 65, '1x5pieces');
                _this.rectangleBase1x5box.scale.setTo(1.8);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x5box = _this.add.sprite(650.3, 65, '1x5pieces');
                _this.rectangleBase1x5box.scale.setTo(1.9, 1.8);
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x5box = _this.add.sprite(705, 65, '1x5pieces');
                _this.rectangleBase1x5box.scale.setTo(1.9, 1.8);
                break;

            case 5: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x5box = _this.add.sprite(757.4, 65, '1x5pieces');
                _this.rectangleBase1x5box.scale.setTo(1.9, 1.8);
                break;

        }
        _this.boxesObj.push(_this.rectangleBase1x5box);

    },

    getRectangularBase1x6Filled: function (counter, sprite) {
        //console.log(counter);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x6box = _this.add.sprite(545, 65.4, '1x6pieces');
                _this.rectangleBase1x6box.scale.setTo(1.008);
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x6box = _this.add.sprite(589.8, 65.4, '1x6pieces');
                _this.rectangleBase1x6box.scale.setTo(1.008);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x6box = _this.add.sprite(634.6, 65.4, '1x6pieces');
                _this.rectangleBase1x6box.scale.setTo(1);
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x6box = _this.add.sprite(679.4, 65.4, '1x6pieces');
                _this.rectangleBase1x6box.scale.setTo(1);
                break;

            case 5: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x6box = _this.add.sprite(724.2, 65.4, '1x6pieces');
                _this.rectangleBase1x6box.scale.setTo(1);
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x6box = _this.add.sprite(769, 65.2, '1x6pieces');
                _this.rectangleBase1x6box.scale.setTo(1);
                break;

        }
        _this.boxesObj.push(_this.rectangleBase1x6box);

    },
    getRectangularBase1x7Filled: function (counter, sprite) {
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x7box = _this.add.sprite(468.5, 115, '1x7pieces');
                _this.rectangleBase1x7box.scale.setTo(1.05, 1.02);
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x7box = _this.add.sprite(527, 115, '1x7pieces');
                _this.rectangleBase1x7box.scale.setTo(1.08, 1.02);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x7box = _this.add.sprite(588.5, 115, '1x7pieces');
                _this.rectangleBase1x7box.scale.setTo(1.08, 1.02);
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x7box = _this.add.sprite(648.5, 115, '1x7pieces');
                _this.rectangleBase1x7box.scale.setTo(1.08, 1.02);
                break;

            case 5: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x7box = _this.add.sprite(708, 115, '1x7pieces');
                _this.rectangleBase1x7box.scale.setTo(1.08, 1.02);
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x7box = _this.add.sprite(766, 115, '1x7pieces');
                _this.rectangleBase1x7box.scale.setTo(1.08, 1.02);
                break;

            case 7: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x7box = _this.add.sprite(826, 115, '1x7pieces');
                _this.rectangleBase1x7box.scale.setTo(1.08, 1.02);
                break;



        }
        _this.boxesObj.push(_this.rectangleBase1x7box);

    },
    getRectangularBase1x8Filled: function (counter, sprite) {
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(468.5, 115, '1x8pieces');
                _this.rectangleBase1x8box.scale.setTo(1.06, 1.02);
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(520, 115, '1x8pieces');
                _this.rectangleBase1x8box.scale.setTo(1.08, 1.02);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(573, 115, '1x8pieces');
                _this.rectangleBase1x8box.scale.setTo(1.08, 1.02);
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(626, 115, '1x8pieces');
                _this.rectangleBase1x8box.scale.setTo(1.08, 1.02);
                break;

            case 5: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(678, 115, '1x8pieces');
                _this.rectangleBase1x8box.scale.setTo(1.08, 1.02);
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(729, 115, '1x8pieces');
                _this.rectangleBase1x8box.scale.setTo(1.07, 1.02);
                break;

            case 7: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(780, 115, '1x8pieces');
                _this.rectangleBase1x8box.scale.setTo(1.08, 1.02);
                break;

            case 8: sprite.destroy();
                _this.rectangleBase1x8box = _this.add.sprite(833, 115, '1x8pieces');
                _this.rectangleBase1x8box.scale.setTo(1.09, 1.02);
                break;



        }
        _this.boxesObj.push(_this.rectangleBase1x8box);

    },

    getRectangularBase1x9Filled: function (counter, sprite) {
        //console.log(counter);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(468.5, 115, '1x9pieces');
                _this.rectangleBase1x9box.scale.setTo(1.05, 1.02);
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(514, 115, '1x9pieces');
                _this.rectangleBase1x9box.scale.setTo(1.08, 1.02);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(561, 115, '1x9pieces');
                _this.rectangleBase1x9box.scale.setTo(1.08, 1.02);
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(608, 115, '1x9pieces');
                _this.rectangleBase1x9box.scale.setTo(1.08, 1.02);
                break;

            case 5: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(655, 115, '1x9pieces');
                _this.rectangleBase1x9box.scale.setTo(1.08, 1.02);
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(702, 115, '1x9pieces');
                _this.rectangleBase1x9box.scale.setTo(1.07, 1.02);
                break;

            case 7: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(748.5, 115, '1x9pieces');
                _this.rectangleBase1x9box.scale.setTo(1.07, 1.02);
                break;

            case 8: sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(794.5, 115, '1x9pieces');
                _this.rectangleBase1x9box.scale.setTo(1.07, 1.02);
                break;

            case 9: //console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box = _this.add.sprite(840, 115, '1x9pieces');
                _this.rectangleBase1x9box.scale.setTo(1.08, 1.02);
                break;

        }
        _this.boxesObj.push(_this.rectangleBase1x9box);

    },


    getCircleBase1x3Filled: function (counter, sprite) {
        //console.log(counter);

        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.circleBase1x3box = _this.add.sprite(575.6, 97, '1X3greenpieces_1');
                _this.circleBase1x3box.scale.setTo(1);
                break;

            case 2: sprite.destroy();
                _this.circleBase1x3box = _this.add.sprite(678, 97, '1X3greenpieces_2');
                _this.circleBase1x3box.scale.setTo(1);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.circleBase1x3box = _this.add.sprite(589.4, 200, '1X3greenpieces_3');
                _this.circleBase1x3box.scale.setTo(1);
                break;

        }
        _this.boxesObj.push(_this.circleBase1x3box);

    },

    getCircleBase1x4Filled: function (counter, sprite) {
        //console.log(counter);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.circleBase1x4box = _this.add.sprite(542, 64, '1X4pieces_1');
                _this.circleBase1x4box.scale.setTo(1.02);
                break;

            case 2: sprite.destroy();
                _this.circleBase1x4box = _this.add.sprite(676, 64, '1X4pieces_2');
                _this.circleBase1x4box.scale.setTo(1.02);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.circleBase1x4box = _this.add.sprite(542, 200, '1X4pieces_3');
                _this.circleBase1x4box.scale.setTo(1.02);
                break;

            case 4: sprite.destroy();
                _this.circleBase1x4box = _this.add.sprite(676, 200, '1X4pieces_4');
                _this.circleBase1x4box.scale.setTo(1.02);
                break;

        }
        _this.boxesObj.push(_this.circleBase1x4box);

    },


    getSquareBase1x4Filled: function (counter, sprite) {
        //console.log(counter);
        switch (counter) {
            case 1: //console.log(counter);
                sprite.destroy();
                _this.squareBase1x4box = _this.add.sprite(543.5, 63.5, '1X4piecespink');
                _this.squareBase1x4box.scale.setTo(1);
                break;

            case 2: sprite.destroy();
                _this.squareBase1x4box = _this.add.sprite(678, 63.5, '1X4piecespink');
                _this.squareBase1x4box.scale.setTo(1);
                break;

            case 3: //console.log(counter);
                sprite.destroy();
                _this.squareBase1x4box = _this.add.sprite(543.5, 200, '1X4piecespink');
                _this.squareBase1x4box.scale.setTo(1);
                break;

            case 4: sprite.destroy();
                _this.squareBase1x4box = _this.add.sprite(678, 200, '1X4piecespink');
                _this.squareBase1x4box.scale.setTo(1);
                break;

        }
        _this.boxesObj.push(_this.squareBase1x4box);

    },

    dragStop1: function (sprite, pointer) {
        _this.NumeratorValue = _this.NumeratorValue2 + _this.NumeratorValue1;
        //console.log(_this.fractionbox.x);
        _this.Counter += 1;
        switch (_this.fractionName) {

            case '1x3traypiecesblue': _this.getRectangularBase1x3Filled(_this.Counter, sprite);
                break;

            case '1x3traypiecesgreen': _this.getCircleBase1x3Filled(_this.Counter, sprite);
                break;

            case '1x4traypiecespink': _this.getSquareBase1x4Filled(_this.Counter, sprite);
                break;

            case '1x4traypiecesblue': _this.getRectangularBase1x4Filled(_this.Counter, sprite);
                break;

            case '1x4traypiecesgreen': _this.getCircleBase1x4Filled(_this.Counter, sprite);
                break;

            case '1x5traypieces': _this.getRectangularBase1x5Filled(_this.Counter, sprite);
                break;

            case '1x6traypieces': _this.getRectangularBase1x6Filled(_this.Counter, sprite);
                break;
            case '1x7traypieces': _this.getRectangularBase1x7Filled(_this.Counter, sprite);
                break;
            case '1x8traypieces': _this.getRectangularBase1x8Filled(_this.Counter, sprite);
                break;

            case '1x9traypieces': _this.getRectangularBase1x9Filled(_this.Counter, sprite);
                break;
        }

        if (_this.Counter == _this.NumeratorValue) {
            // _this.counterCelebrationSound.play();

            _this.getProperFraction();

        }
    },

    displayNumberbox1: function () {

        _this.mybox3 = _this.add.image(655, 350, 'yellowtextbox');
        _this.mybox3.scale.setTo(1.0);
        _this.mybox3.visible = false;


        _this.enterFractionBox1 = _this.add.sprite(660, 350, 'SquareBox');//825 230
        _this.enterFractionBox1.scale.setTo(0.8);
        _this.enterFractionBox1.visible = true;

        _this.graphics3 = _this.add.graphics();
        _this.graphics3.lineStyle(4, 0x65B4C3);
        _this.graphics3.moveTo(698, 395);
        _this.graphics3.lineTo(664, 395);

        _this.enterFractionBox2 = _this.add.sprite(660, 400, 'SquareBox');//825 165
        _this.enterFractionBox2.scale.setTo(0.8);
        _this.enterFractionBox2.visible = true;
        _this.numerator = true;

        _this.enableBoxes();
        _this.enterTxt1 = null;
        _this.enterTxt2 = null;

    },
    enablebox: function () {
        _this.denominator = undefined;

        _this.numerator = true;
        _this.selectedAns1 = '';
        _this.enterFractionBox1.frame = 1;

        _this.enterFractionBox1.inputEnabled = true;
        _this.enterFractionBox1.input.useHandCursor = true;

    },

    enableBoxes: function () {


        _this.denominator = undefined;
        _this.numerator = true;
        _this.selectedAns1 = '';
        _this.enterFractionBox1.frame = 1;
        _this.enterFractionBox2.frame = 0;

        _this.enterFractionBox1.inputEnabled = true;
        _this.enterFractionBox1.input.useHandCursor = true;

        //console.log("yes its null")
        _this.enterFractionBox1.events.onInputDown.add(function () {
            if (_this.enterTxt1 == null || _this.enterTxt1.name == null) {
                _this.numerator = true;

                _this.selectedAns1 = '';
            }
            _this.denominator = false;

            _this.enterFractionBox1.frame = 1;
            _this.enterFractionBox2.frame = 0;

        });

        _this.enterFractionBox2.visible = true;
        _this.enterFractionBox2.inputEnabled = true;
        _this.enterFractionBox2.input.useHandCursor = true;

        _this.enterFractionBox2.events.onInputDown.add(function () {
            if (_this.enterTxt2 == null) {
                _this.denominator = true;
                _this.selectedAns1 = '';

            }
            _this.numerator = false;

            _this.enterFractionBox2.frame = 1;
            _this.enterFractionBox1.frame = 0;

        });

    },


    getProperFraction: function () {
        //console.log("inside get displaynumpox ");
        _this.displayEqualsSign();
        _this.displayNumberbox1();
        _this.qn_flag = 3;
        if (_this.count1 < 1)
            _this.askQn3();

        _this.numberPad1();


    },

    nextquestion: function () {

        if (_this.count1 < 6) {
            _this.denominator = false;
            _this.numerator = false;
            _this.loopCount = 0;
            _this.uniqueD = 0;
            _this.randomizing_elements();
        }
        else {
            //console.log("here end");
            _this.timer1.stop();
            _this.timer1 = null;
            _this.time.events.add(1000, function () {
                //_this.state.start('score');
                _this.state.start('score', true, false,gameID,_this.microConcepts);
            });
        }
    },


    numberPad1: function () {
        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        bottomnumpadbg.scale.setTo(1, 1);

        bottomnumpadbg.name = "numpadbg";

        _this.x = 60;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;

        for (var i = 0; i < 10; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.7, 0.7);
            _this.numbg.name = i + 1;
            _this.numbg.frame = i;
            if (_this.numbg.name == 10)
                _this.numbg.name = 0;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked, _this);

            _this.x += 73;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, 'Numberpad');
        _this.wrongbtn.frame = 10;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.7, 0.7);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, 'Numberpad');
        _this.rightbtn.frame = 11;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.7, 0.7);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this);

        _this.numpadTween = _this.add.tween(_this.numGroup);
        //tween in the number pad after a second.
        _this.tweenNumPad();

    },

    wrongbtnClicked: function (target) {

        _this.clickSound.play();

        _this.selectedAns1 = '';
        // if whole number box is to be erased
        if (_this.whole == 1) {
            _this.enterFractionBox1.removeChild(_this.enterTxt1);

            _this.enterTxt1 = null;
            _this.enablebox();
        }
        else if (_this.enterFractionBox1.frame == 1) {
            //console.log("heyy");
            _this.enterFractionBox1.removeChild(_this.enterTxt1);

            _this.enterTxt1 = null;
            _this.enablebox();
        }
        else if (_this.enterFractionBox2.frame == 1) {

            _this.enterFractionBox2.removeChild(_this.enterTxt2);

            _this.enterTxt2 = null;

            _this.numerator = undefined;

            _this.denominator = true;
            _this.selectedAns1 = '';
            _this.enterFractionBox2.frame = 1;

            _this.enterFractionBox2.inputEnabled = true;
            _this.enterFractionBox2.input.useHandCursor = true;

        }

    },
    wrongAnsClicked: function (target) {

        _this.wrongSound.play();

        _this.selectedAns1 = '';
        _this.enterFractionBox1.removeChild(_this.enterTxt1);

        _this.enterTxt1 = null;
        _this.enablebox();

    },


    eraseScreen: function (target) {

        //console.log("erasing screen");

        _this.enterFractionBox1.destroy();
        _this.selectedAns1 = '';
        _this.numGroup.destroy();

        // Destroying Tray objects
        _this.trayBox1.destroy();
        _this.trayBox2.destroy();

        // Destroying Graphics Object
        _this.graphics.destroy();
        _this.graphics1.destroy();
        _this.graphics2.destroy();
        _this.graphics3.destroy();
        _this.graphicsAddHr.destroy();
        _this.graphicsAddVr.destroy();
        _this.graphicsEq1.destroy();
        _this.graphicsEq2.destroy();

        // _this.enterTxt1.destroy();
        // _this.enterTxt2.destroy();
        _this.emptyBox1.destroy();

        // Destroying Numerators and Denominators texts
        _this.displaynumerator.destroy();
        _this.displaydenominator.destroy();
        _this.displaynumerator1.destroy();
        _this.displaynumerator2.destroy();
        _this.displaydenominator1.destroy();
        _this.displaydenominator2.destroy();

        // Destroying Yellow boxes
        _this.mybox1.destroy();
        _this.mybox2.destroy();
        _this.mybox3.destroy();
        _this.enterTxt1 = null;
        _this.enterTxt2 = null;

        // Destryoying each sprite in the whole
        _this.boxesObj.forEach(element => {
            element.destroy();
        });

    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);
    },
    numClicked: function (target) {
        _this.clickSound.play();

        //console.log("Number clicked is ", target.name);
        _this.selectedAns1 = target.name;
        var_selectedAns1 = _this.selectedAns1;

        if (_this.denominator == true) {
            _this.denominator = false;

            // _this.enterFractionBox2.frame = 0;
            _this.enterFractionBox2.removeChild(_this.enterTxt2);
            _this.enterTxt2 = _this.add.text(18, 10, "" + var_selectedAns1, { fontSize: '30px' });//43 88
            _this.enterTxt2.name = Number('' + var_selectedAns1);
            //console.log(_this.enterTxt2.name);
            //console.log(Number('' + var_selectedAns1));
            _this.enterFractionBox2.addChild(_this.enterTxt2);
            _this.enterFractionBox2.name = _this.enterTxt2.name;
            _this.enterTxt2.align = 'right';
            _this.enterTxt2.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt2.fill = '#65B4C3';
            _this.enterTxt2.fontWeight = 'Normal';
            _this.enterTxt2.visible = true;

        }
        else if (_this.numerator == true) {
            //console.log("numer")
            _this.numerator = false;
            // _this.enterFractionBox1.frame = 0;

            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            _this.enterTxt1 = _this.add.text(18, 10, "" + var_selectedAns1, { fontSize: '30px' });//36 23
            _this.enterTxt1.name = Number('' + var_selectedAns1);
            _this.enterFractionBox1.addChild(_this.enterTxt1);
            _this.enterFractionBox1.name = _this.enterTxt1.name;
            _this.enterTxt1.align = 'right';
            _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt1.fill = '#65B4C3';
            _this.enterTxt1.fontWeight = 'Normal';
            _this.enterTxt1.visible = true;


        }

    },
    wholeNumberAnswer: function () {
        _this.displayEqualsSign2();
        _this.enterFractionBox1 = _this.add.sprite(820, 380, 'SquareBox');//825 230
        _this.enterFractionBox1.scale.setTo(0.8);
        _this.enterFractionBox1.visible = true;

        _this.enablebox();
    },
    displayPlusSign: function () {

        _this.graphicsAddHr = _this.add.graphics();
        _this.graphicsAddHr.lineStyle(6, 0x65B4C3);
        _this.graphicsAddHr.moveTo(232, 400);
        _this.graphicsAddHr.lineTo(256, 400);

        _this.graphicsAddVr = _this.add.graphics();
        _this.graphicsAddVr.lineStyle(6, 0x65B4C3);
        _this.graphicsAddVr.moveTo(244, 388.0);
        _this.graphicsAddVr.lineTo(244, 413);

    },
    displayEqualsSign: function () {
        _this.graphicsEq1 = _this.add.graphics();
        _this.graphicsEq1.lineStyle(6, 0x65B4C3);
        _this.graphicsEq1.moveTo(460, 400);
        _this.graphicsEq1.lineTo(484, 400);

        _this.graphicsEq2 = _this.add.graphics();
        _this.graphicsEq2.lineStyle(6, 0x65B4C3);
        _this.graphicsEq2.moveTo(460, 410);
        _this.graphicsEq2.lineTo(484, 410);

    },
    displayEqualsSign2: function () {
        _this.graphicsEq12 = _this.add.graphics();
        _this.graphicsEq12.lineStyle(6, 0x65B4C3);
        _this.graphicsEq12.moveTo(760, 400);
        _this.graphicsEq12.lineTo(784, 400);

        _this.graphicsEq22 = _this.add.graphics();
        _this.graphicsEq22.lineStyle(6, 0x65B4C3);
        _this.graphicsEq22.moveTo(760, 410);
        _this.graphicsEq22.lineTo(784, 410);

    },

    rightbtnClicked: function () {

        _this.clickSound.play();
        if (_this.whole == 1 && _this.enterTxt1 == null) {
            //console.log("in here")
            _this.wrongSound.play();
            _this.enterFractionBox1.removeChild(_this.enterTxt1);


        }
        else if (_this.enterTxt1 == null && _this.enterTxt2 != null) {
            _this.wrongSound.play();
            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            _this.enterFractionBox2.removeChild(_this.enterTxt2);
            _this.enterFractionBox2.frame = 0;

            _this.enterTxt1 = null;
            _this.enterTxt2 = null;
            _this.numerator = true;
            _this.enableBoxes();
        }
        else if (_this.enterTxt1 == null && _this.denominator == true) {
            _this.wrongSound.play();
            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            _this.enterFractionBox2.removeChild(_this.enterTxt1);
            _this.enterTxt1 = null;
            _this.enterTxt2 = null;
            _this.numerator = true;

            _this.enterFractionBox2.frame = 0;
            _this.enterFractionBox1.frame = 0;
            _this.enableBoxes();
        }
        else if (_this.enterTxt1 == null) {

            _this.wrongSound.play();
            _this.numerator = true;


            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            _this.enablebox();
        }
        // Checking if text is entered for the whole number
        else if (_this.whole == 1) {
            _this.noofAttempts++;
            //console.log(_this.enterTxt1.name);
            if (Number(_this.enterTxt1.name) == 1) {
                _this.enterFractionBox1.frame = 0;
                _this.whole = 0;
                _this.numGroup.visible = false;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.celebration();
                _this.time.events.add(1000, () => {
                    _this.graphicsEq12.destroy();
                    _this.graphicsEq22.destroy();
                });
                _this.time.events.add(1000, _this.eraseScreen);
                _this.time.events.add(1000, _this.nextquestion);

            }
            else {
                //console.log("wrong")
                _this.wrongAnsClicked();
            }
        }
        // Checking if text/numerator for the first tray box is entered
        else if (_this.box_flag == 1) {
            //console.log(_this.enterTxt1.name);

            if (Number(_this.enterTxt1.name) == _this.NumeratorValue1) {
                _this.numerator = false;
                _this.enterFractionBox1.frame = 0;
                //console.log("playing")
                _this.counterCelebrationSound.play();
                _this.selectedAns1 = '';
                _this.enterFractionBox1.destroy();
                _this.displaynumerator1 = _this.add.text(_this.enterFractionBox1.x + 12, 360, _this.NumeratorValue1, { fontSize: '26px' });
                _this.displaynumerator1.align = 'right';
                _this.displaynumerator1.font = "Akzidenz-Grotesk BQ";
                _this.displaynumerator1.fill = '#FF0000';
                _this.displaynumerator1.fontWeight = 'Normal';
                _this.displaynumerator1.visible = true;
                _this.enterTxt1 = null;
                _this.mybox1.visible = true;

                _this.displayfraction2(_this.DenominatorValue);

            }
            else {
                _this.wrongAnsClicked();
            }

        }
        // Checking if text/numerator for the second tray box is entered
        else if (_this.box_flag == 2) {
            //console.log(_this.enterTxt1.name);
            if (Number(_this.enterTxt1.name) == _this.NumeratorValue2) {
                //console.log(_this.DenominatorValue);
                //console.log("playing sound")

                _this.selectedAns1 = '';
                _this.enterFractionBox1.destroy();
                _this.displaynumerator2 = _this.add.text(_this.enterFractionBox1.x + 12, 360, _this.NumeratorValue2, { fontSize: '26px' });
                _this.displaynumerator2.align = 'right';
                _this.displaynumerator2.font = "Akzidenz-Grotesk BQ";
                _this.displaynumerator2.fill = '#FF0000';
                _this.displaynumerator2.fontWeight = 'Normal';
                _this.displaynumerator2.visible = true;
                _this.counterCelebrationSound.pause();
                _this.counterCelebrationSound.currentTime = 0;

                _this.counterCelebrationSound.play();


                _this.enterTxt1 = null;
                _this.mybox2.visible = true;
                _this.box_flag = -1;
                _this.displayPlusSign();
                _this.numGroup.visible = false;
                _this.qn_flag = 2;
                if (_this.count1 < 1)
                    _this.askQn2();

                if (_this.count1 < 1)
                    _this.drag_cubesAction_Ver();
                else {
                    _this.draggableObj.forEach(element => {
                        element.input.enableDrag(true);
                        element.events.onDragStop.add(_this.dragStop1, _this);

                    });

                }

            }
            else {
                _this.wrongAnsClicked();

            }
        }
        else {
            _this.box_flag = -1;
            //console.log(_this.NumeratorValue1, " ", _this.NumeratorValue2);
            _this.NumeratorValue = _this.NumeratorValue1 + _this.NumeratorValue2
            if (_this.enterTxt2 == null) {

                _this.wrongSound.play();
                _this.selectedAns1 = '';
                _this.enterFractionBox1.removeChild(_this.enterTxt1);
                _this.enterFractionBox2.removeChild(_this.enterTxt2);
                _this.enterTxt1 = null;

                _this.numerator = true;
                _this.enableBoxes();
            }
            // call a function and check in for loop 

            else if (_this.checkEquivalent()) {
                //console.log(_this.DenominatorValue);
                // _this.celebrationSound.play();
                _this.selectedAns1 = '';
                _this.enterFractionBox1.destroy();
                _this.enterFractionBox2.destroy();
                _this.displaynumerator = _this.add.text(672, 360, Number(_this.enterTxt1.name), { fontSize: '26px' });
                _this.displaydenominator = _this.add.text(672, 400, Number(_this.enterTxt2.name), { fontSize: '26px' });

                _this.graphics = _this.add.graphics();
                _this.graphics.lineStyle(4, 0xff0000);
                _this.graphics.moveTo(698, 395);
                _this.graphics.lineTo(664, 395);

                _this.displaynumerator.fill = '#FF0000';
                _this.displaydenominator.fill = '#FF0000';

                _this.mybox3.visible = true;
                //console.log(_this.NumeratorValue, _this.DenominatorValue)
                if ((_this.NumeratorValue % _this.DenominatorValue) == 0) {
                    _this.counterCelebrationSound.play();

                    _this.whole = 1;
                    _this.enterTxt1 = null;
                    _this.wholeNumberAnswer();
                }
                else {
                    _this.noofAttempts++;
                    _this.numGroup.visible = false;
                    _this.enterTxt1 = null;
                    _this.enterTxt2 = null;

                    telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                    _this.celebration();

                    _this.time.events.add(1000, _this.eraseScreen);
                    _this.time.events.add(1000, _this.nextquestion);
                }
            }
            else {
                _this.noofAttempts++;
                _this.wrongSound.play();
                _this.selectedAns1 = '';

                _this.enterFractionBox1.removeChild(_this.enterTxt1);
                _this.enterFractionBox2.removeChild(_this.enterTxt2);
                _this.enterFractionBox2.frame = 0;
                _this.enterFractionBox1.frame = 0;

                _this.enterTxt1 = null;
                _this.enterTxt2 = null;
                _this.numerator = true;
                _this.enableBoxes();
            }
        }
    },
    checkEquivalent: function () {
        for (var k = 1; k <= _this.NumeratorValue; k++) {
            if ((Number(_this.enterTxt1.name) == _this.NumeratorValue / k && Number(_this.enterTxt2.name) == _this.DenominatorValue / k)) {
                return true;
            }
        }
        return false;
    },

    //* functions related to showing the demo video. 
    //* the game is paused before calling this. Once the demo video 
    //* completes or skip button is pressed, it makes _this.game.paused = false.

    DemoVideo: function () {
        //This game is about addition of like fractions
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-10-G6/" +
            _this.languageSelected + "/NSF-10-G6-demo.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //What are the fractions shown here?;
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-10-G6/" +
            _this.languageSelected + "/NSF-10-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //Add the fractions by dragging them to the whole;
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-10-G6/" +
            _this.languageSelected + "/NSF-10-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //Enter the answer;
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-10-G6/" +
            _this.languageSelected + "/NSF-10-G6-c.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        _this.showDemoVideo();  //* call the function to show the video

        // _this.backbtn1 = _this.add.sprite(10, 6, 'backbtn');
        // _this.backbtn1.inputEnabled = true;
        // _this.backbtn1.input.useHandCursor = true;
        // _this.backbtn1.events.onInputDown.add(function ()
        // {   
        //     //_this.stopVideo();
        //     _this.stopAudio();
        //     _this.game.paused = false;
        //     _this.state.start('grade6NumberSystems',true,false);
        // });

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            //_this.clickSound.play();
            //_this.stopVideo();
            _this.stopAudio();
            _this.videoWorld.destroy();
            _this.skip.destroy();
            _this.game.paused = false;  //* restart the game
        });
    },

    //* function to stop the video and audio if they are playing.
    stopVideo: function () {
        console.log("inside stop video");
        if (_this.demoVideo_1) {
            console.log("removing the video");
            _this.demoVideo_1.destroy();
            _this.videoWorld.destroy();
        }
    },

    stopAudio: function () {
        //* clear all the timers first
        if (_this.q2Timer) clearTimeout(_this.q2Timer);

        if (_this.q3Timer) clearTimeout(_this.q3Timer);

        if (_this.demoAudio1) {
            console.log("removing the demo audio1");
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
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }

        if (_this.q3Sound) {
            console.log("removing the q3");
            _this.q3Sound.pause();
            _this.q3Sound = null;
            _this.q3Soundsrc = null;
        }

        // _this.backbtn1.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                   //* skip button destroyed
        //_this.backbtn1.destroy();               //* backbutton button destroyed
    },

    dA1: function () {
        _this.q1Sound.play();
    },

    showDemoVideo: function () {
        //* As _this.game is paused, phaser time events cannot be used since its timer is stopped.
        //* so we have to use js timers as required
        _this.demoAudio1.play();
        _this.demoVideo_1 = _this.add.video('nsf10');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSF-10-G6.mp4");
        _this.videoWorld = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.addEventListener('ended', _this.dA1);  //* play question 1

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2 after 18 seconds.
        {
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 18000);

        _this.q3Timer = setTimeout(function ()    //* q3 js timer to play q3 after 48 seconds.
        {
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 30000);

        _this.demoVideo_1.onComplete.add(function ()   //* on completion of demovideo close the video
        {
            _this.stopAudio();                  //* stop timers and audios
            _this.demoVideo_1.stop(false);      //* stop vide.
            _this.videoWorld.destroy();         //* destroy the video, gets removed from screen.
            _this.game.paused = false;          //* now, unpause the game, so that it continues.
        });
    },

    //* video related commands     
    //        _this.video.changeSource("assets/demoVideos/7_1_1.mp4");
    //        _this.videoWorld = this.video.addToWorld();
    //        _this.video2.stop(false);
    //        _this.video2.onComplete.add(function() {})
    //        _this.video3.playbackRate = 1; 
    //        _this.game.paused = true; //* pauses the game.
    //        _this.videoWorld.destroy(); //* removes video from screen   

}
