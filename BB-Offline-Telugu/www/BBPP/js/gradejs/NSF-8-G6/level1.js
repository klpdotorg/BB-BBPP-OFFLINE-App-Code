Game.NSF_8_G6level1 = function () { };

Game.NSF_8_G6level1.prototype =
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

        _this.frameChangeSound = document.createElement('audio');
        _this.frameChangeSoundsrc = document.createElement('source');
        _this.frameChangeSoundsrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.frameChangeSound.appendChild(_this.frameChangeSoundsrc);

        _this.nextoptionSound = document.createElement('audio');
        _this.nextoptionSoundsrc = document.createElement('source');
        _this.nextoptionSoundsrc.setAttribute("src", window.baseUrl + "sounds/Next_option_sound.mp3");
        _this.nextoptionSound.appendChild(_this.nextoptionSoundsrc);

        telInitializerbbpp.gameIdInit("NSF_8_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },

    create: function (game) {
        //* show the demo video
        _this.time.events.add(1, function () {
            _this.ViewDemoVideo();
        });

        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        _this.time.events.add(500, function () {
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

        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.number;
        _this.position;

        _this.flag_tween = true;


        //to get the entered value of each box
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';

        // to store the random generated numerator and denominator value
        _this.DenominatorValue = 0;
        _this.NumeratorValue = 0;

        _this.Grouptile = _this.add.group();

        //to generate questions 
        _this.qn_flag = -1;

        // //* User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
         _this.microConcepts;
        // _this.grade;

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'Bg');

        //navbar
        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        //backbutton
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

        //speakerbutton
        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.speakerbtn.events.onInputDown.add(function () {
            //console.log("Hello");
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                console.log("inside spkr. Question flag: " + _this.qn_flag);

                if (_this.qn_flag == 0) {
                    _this.voicenote1();
                    //_this.Question1.pause();
                    //_this.Question2.pause();
                }
                if (_this.qn_flag == 1) {
                    _this.askQn1();
                }
                if (_this.qn_flag == 2) {
                    _this.askQn2();
                }

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

        _this.fractions_Array = [[1, 2, 3], [1, 2, 4], [1, 3, 4], [1, 3, 5], [1, 3, 6], [1, 4, 5], [1, 4, 6], [1, 4, 7], [1, 4, 8], [1, 5, 6], [1, 5, 7], [1, 5, 8], [1, 5, 9], [1, 5, 10], [1, 6, 7], [1, 6, 8], [1, 6, 9], [1, 6, 10], [1, 6, 11], [1, 6, 12], [1, 7, 8], [1, 7, 9], [1, 7, 10], [1, 7, 11], [1, 7, 12], [1, 7, 13], [1, 7, 14], [1, 8, 9], [1, 8, 10], [1, 8, 11], [1, 8, 12], [1, 8, 13], [1, 8, 14], [1, 8, 15], [1, 8, 16], [1, 9, 10], [1, 9, 11], [1, 9, 12], [1, 9, 13], [1, 9, 14], [1, 9, 15], [1, 9, 16], [1, 9, 17], [1, 9, 18]];

        //x and y position for placing fractions
        _this.fractionX = [35, 80, 125];
        _this.fractionY = [105, 165, 225, 285, 345, 405, 465];

        _this.circle1x2X = [35, 80, 125];
        _this.circle1x2Y = [105, 195];

        _this.circle1x4X = [35, 80, 125];
        _this.circle1x4Y = [105, 165, 225, 285, 345, 405, 465];

        //to evaulate
        _this.denominator = false;
        _this.numerator = false;

        _this.arr = [];
        _this.arr1 = [];
        _this.num = false;
        _this.denom = false;

        _this.denom1 = false;
        _this.rem1 = false;
        _this.quo1 = false;

        _this.wholeQ = false;

        _this.dragTweenObject = _this.add.group();

        _this.enterQuotientBox = _this.add.sprite(770, 210, 'SquareBox');
        _this.enterQuotientBox.scale.setTo(1.1);
        _this.enterQuotientBox.frame = 0;
        _this.enterQuotientBox.visible = false;

        _this.enterRemainderBox = _this.add.sprite(828, 183, 'SquareBox');
        _this.enterRemainderBox.scale.setTo(1.0);
        _this.enterRemainderBox.frame = 0;
        _this.enterRemainderBox.visible = false;

        _this.enterDenominatorBox = _this.add.sprite(828, 243, 'SquareBox');
        _this.enterDenominatorBox.scale.setTo(1.0);
        _this.enterDenominatorBox.frame = 0;
        _this.enterDenominatorBox.visible = false;

        _this.enterWholeNumberBox = _this.add.sprite(833, 210, 'SquareBox');
        _this.enterWholeNumberBox.scale.setTo(1.1);
        _this.enterWholeNumberBox.frame = 0;
        _this.enterWholeNumberBox.visible = false;
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
        var array_number = [22, 14, 50];
        //var array_number=[2, 3, 3];
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

    shuffle: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
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
        _this.uniqueDenGeneration();
        _this.time.events.add(1000, _this.show_drag_action);

        _this.questionid = 1;
    },

    show_drag_action: function () {
        _this.tempGroup = _this.add.group();
        _this.options = _this.add.image(40, 105, _this.fractionName);
        _this.tempGroup.addChild(_this.options);

        _this.hand = _this.add.image(40, 105, 'hand');
        _this.hand.scale.setTo(0.5, 0.5);
        _this.tempGroup.addChild(_this.hand);

        if (_this.fractionName == '1x7traypieces' || _this.fractionName == '1x8traypieces' || _this.fractionName == '1x9traypieces') {
            _this.drag_options = _this.add.tween(_this.tempGroup);
            _this.drag_options.to({ x: 200, y: 150 }, 1000, 'Linear', true, 0);
            _this.drag_options.start();
        }
        else {
            _this.drag_options = _this.add.tween(_this.tempGroup);
            _this.drag_options.to({ x: 200, y: 170 }, 1000, 'Linear', true, 0);
            _this.drag_options.start();
        }
        _this.displayDemoBasePiece();
    },

    displayDemoBasePiece: function () {
        _this.time.events.add(1000, function () {
            console.log("inside time event", _this.fractionName);
            _this.options.destroy();
            if (_this.fractionName == '1x2traypiecespink') {
                _this.squareBase1x2box = _this.add.sprite(200, 170, '1X2piecespink_1');
                _this.squareBase1x2box.scale.setTo(0.7);
                _this.squareBase1x2box.visible = true;
                _this.hand.bringToTop();
                //_this.dragTweenObject.addChild( _this.squareBase1x2box1);
            }
            else if (_this.fractionName == '1x2traypiecesgreen') {
                _this.circleBase1x2box = _this.add.sprite(200, 171.85, '1X2greenpieces_1');
                _this.circleBase1x2box.visible = true;
                _this.hand.bringToTop();
                //_this.dragTweenObject.addChild( _this.circleBase1x2box1);
            }
            else if (_this.fractionName == '1x3traypiecesblue') {
                _this.rectangleBase1x3box = _this.add.sprite(200, 170, '1x3piecesblue');
                _this.rectangleBase1x3box.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x3box.visible = true;
                _this.hand.bringToTop();
                //_this.dragTweenObject.addChild( _this.rectangleBase1x3box1);
            }
            else if (_this.fractionName == '1x3traypiecesgreen') {
                _this.circleBase1x3box = _this.add.sprite(200, 172, '1X3greenpieces_1');
                _this.circleBase1x3box.scale.setTo(1);
                _this.circleBase1x3box.visible = true;
                _this.hand.bringToTop();
                //_this.dragTweenObject.addChild( _this.circleBase1x3box1);
            }
            else if (_this.fractionName == '1x4traypiecesblue') {
                _this.rectangleBase1x4box = _this.add.sprite(200, 170, '1x4piecesblue');
                _this.rectangleBase1x4box.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x4box.visible = true;
                _this.hand.bringToTop();
                //_this.dragTweenObject.addChild( _this.rectangleBase1x4box1);
            }
            else if (_this.fractionName == '1x4traypiecespink') {
                _this.squareBase1x4box = _this.add.sprite(200, 170, '1X4piecespink');
                _this.squareBase1x4box.scale.setTo(0.7);
                _this.squareBase1x4box.visible = true;
                _this.hand.bringToTop();
                //_this.dragTweenObject.addChild( _this.squareBase1x4box1);
            }
            else if (_this.fractionName == '1x4traypiecesgreen') {
                _this.circleBase1x4box = _this.add.sprite(201, 170, '1X4pieces_1');
                _this.circleBase1x4box.scale.setTo(0.7);
                _this.circleBase1x4box.visible = true;
                _this.hand.bringToTop();
                //_this.dragTweenObject.addChild( _this.circleBase1x4box1);
            }
            else if (_this.fractionName == '1x5traypieces') {
                _this.rectangleBase1x5box = _this.add.sprite(200, 170, '1x5pieces');
                _this.rectangleBase1x5box.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x5box.visible = true;
                _this.hand.bringToTop();
                //_this.dragTweenObject.addChild( _this.rectangleBase1x5box1);
            }
            else if (_this.fractionName == '1x6traypieces') {
                _this.rectangleBase1x6box = _this.add.sprite(200, 170, '1x6pieces');
                _this.rectangleBase1x6box.scale.setTo(0.7);
                _this.rectangleBase1x6box.visible = true;
                _this.hand.bringToTop();
                // _this.dragTweenObject.addChild( _this.rectangleBase1x6box1);
            }
            else if (_this.fractionName == '1x7traypieces') {
                _this.rectangleBase1x7box = _this.add.sprite(201, 150, '1x7pieces');
                _this.rectangleBase1x7box.scale.setTo(0.7);
                _this.rectangleBase1x7box.visible = true;
                _this.hand.bringToTop();
                //_this.dragTweenObject.addChild( _this.rectangleBase1x7box1);
            }
            else if (_this.fractionName == '1x8traypieces') {
                _this.rectangleBase1x8box = _this.add.sprite(201, 150, '1x8pieces');
                _this.rectangleBase1x8box.scale.setTo(0.7);
                _this.rectangleBase1x8box.visible = true;
                _this.hand.bringToTop();
                //_this.dragTweenObject.addChild( _this.rectangleBase1x8box1);
            }
            else if (_this.fractionName == '1x9traypieces') {
                _this.rectangleBase1x9box = _this.add.sprite(201, 150, '1x9pieces');
                _this.rectangleBase1x9box.scale.setTo(0.7);
                _this.rectangleBase1x9box.visible = true;
                _this.hand.bringToTop();
                // _this.dragTweenObject.addChild( _this.rectangleBase1x9box1);
            }

        });
        console.log(_this.dragTweenObject);
        _this.time.events.add(2000, function () {
            _this.hand.destroy();
            if (_this.fractionName == '1x2traypiecespink') {
                _this.squareBase1x2box.visible = false;
                //_this.dragTweenObject.addChild( _this.squareBase1x2box1);
            }
            else if (_this.fractionName == '1x2traypiecesgreen') {
                _this.circleBase1x2box.visible = false;
                //_this.dragTweenObject.addChild( _this.circleBase1x2box1);
            }
            else if (_this.fractionName == '1x3traypiecesblue') {
                _this.rectangleBase1x3box.visible = false;
                //_this.dragTweenObject.addChild( _this.rectangleBase1x3box1);
            }
            else if (_this.fractionName == '1x3traypiecesgreen') {
                _this.circleBase1x3box.visible = false;
                //_this.dragTweenObject.addChild( _this.circleBase1x3box1);
            }
            else if (_this.fractionName == '1x4traypiecesblue') {
                _this.rectangleBase1x4box.visible = false;
                //_this.dragTweenObject.addChild( _this.rectangleBase1x4box1);
            }
            else if (_this.fractionName == '1x4traypiecespink') {
                _this.squareBase1x4box.visible = false;
                //_this.dragTweenObject.addChild( _this.squareBase1x4box1);
            }
            else if (_this.fractionName == '1x4traypiecesgreen') {
                _this.circleBase1x4box.visible = false;
                //_this.dragTweenObject.addChild( _this.circleBase1x4box1);
            }
            else if (_this.fractionName == '1x5traypieces') {
                _this.rectangleBase1x5box.visible = false;
                //_this.dragTweenObject.addChild( _this.rectangleBase1x5box1);
            }
            else if (_this.fractionName == '1x6traypieces') {
                _this.rectangleBase1x6box.visible = false;
                // _this.dragTweenObject.addChild( _this.rectangleBase1x6box1);
            }
            else if (_this.fractionName == '1x7traypieces') {
                _this.rectangleBase1x7box.visible = false;
                //_this.dragTweenObject.addChild( _this.rectangleBase1x7box1);
            }
            else if (_this.fractionName == '1x8traypieces') {
                _this.rectangleBase1x8box.visible = false;
                //_this.dragTweenObject.addChild( _this.rectangleBase1x8box1);
            }
            else if (_this.fractionName == '1x9traypieces') {
                _this.rectangleBase1x9box.visible = false;
                // _this.dragTweenObject.addChild( _this.rectangleBase1x9box1);
            }
        });
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

        if (_this.playsound1) {
            _this.playsound1.pause();
            _this.playsound1 = null;
            _this.playsound1src = null;
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

    starActions: function (target1, target2) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NSF_8_G6";
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

    //Drag and count pieces. Represent  the fraction
    voicenote1: function () {
        console.log("Drag and count pieces. Represent  the fraction");
        _this.playsound1 = document.createElement('audio');
        _this.playsound1src = document.createElement('source');
        _this.playsound1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-8-G6/" +
            _this.languageSelected + "/NSF-8-G6-a.mp3");

        _this.playsound1.appendChild(_this.playsound1src);
        _this.playsound1.play();
        //_this.qn_flag=-1; 
    },

    //question 1
    askQn1: function () {
        console.log("Enter the improper fraction");
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-8-G6/" +
            _this.languageSelected + "/NSF-8-G6-b.mp3");
        _this.Question1.appendChild(_this.Question1src);
        _this.Question1.play();
        //_this.qn_flag=-1;  
    },

    //question 2
    askQn2: function () {
        console.log('Enter the mixed fraction');
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NSF-8-G6/" +
            _this.languageSelected + "/NSF-8-G6-c.mp3");
        _this.Question2.appendChild(_this.Question2src);
        _this.Question2.play();
        //_this.qn_flag=-1;  
    },

    uniqueDenGeneration: function () {
        //possible denominators
        let denominatorArray = [2, 3, 4, 5, 6, 7, 8, 9];
        _this.possibleDen = _this.shuffle(denominatorArray);
        console.log(_this.possibleDen[_this.count1])

        _this.wholeNumberQn = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        console.log(_this.wholeNumberQn);

        _this.randomizing_elements(_this.possibleDen[_this.count1]);
    },

    //random function to generate denominator value
    randomizing_elements: function (value) {
        console.log(value);
        _this.DenominatorValue = value;
        switch (_this.DenominatorValue) {
            case 2: var trayPiecesArray = ["1x2traypiecespink", "1x2traypiecesgreen"];
                var trayPiece = trayPiecesArray[Math.floor(Math.random() * trayPiecesArray.length)];
                _this.displayfractionsOnScreen(trayPiece, 2);
                break;

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
        if (_this.count1 < 1) {
            _this.voicenote1();
        }
        _this.time.events.add(3200, function () {
            _this.qn_flag = 0;
        });
    },

    //to display the base
    getBaseDisplayed: function (baseName1, baseName2) {
        _this.emptyBox1 = _this.add.image(200, 170, baseName1);
        _this.emptyBox1.scale.setTo(0.7);
        _this.emptyBox1.visible = true;

        _this.emptyBox2 = _this.add.image(420, 170, baseName2);
        _this.emptyBox2.scale.setTo(0.7);
        _this.emptyBox2.visible = false;
    },

    getrectangleBaseDisplayed2: function (baseName1, baseName2) {
        _this.emptyBox1 = _this.add.image(200, 170, baseName1);
        _this.emptyBox1.scale.setTo(1.0);
        _this.emptyBox1.visible = true;

        _this.emptyBox2 = _this.add.image(420, 170, baseName2);
        _this.emptyBox2.scale.setTo(1.0);
        _this.emptyBox2.visible = false;
    },

    getcircleBaseDisplayed: function (baseName1, baseName2) {
        _this.emptyBox1 = _this.add.image(200, 170, baseName1);
        _this.emptyBox1.scale.setTo(1.0);
        _this.emptyBox1.visible = true;

        _this.emptyBox2 = _this.add.image(420, 170, baseName2);
        _this.emptyBox2.scale.setTo(1.0);
        _this.emptyBox2.visible = false;
    },

    getrectangleBaseDisplayed1: function (baseName1, baseName2) {
        _this.emptyBox1 = _this.add.image(200, 150, baseName1);
        _this.emptyBox1.scale.setTo(0.7);
        _this.emptyBox1.visible = true;

        _this.emptyBox2 = _this.add.image(200, 300, baseName2);
        _this.emptyBox2.scale.setTo(0.7);
        _this.emptyBox2.visible = false;
    },

    //to dsplay tray box on the screen
    //to generate base for each fraction name 
    onScreenDisplay: function (fractioName) {

        _this.trayBox = _this.add.image(25, 75, 'tray');
        _this.trayBox.scale.setTo(1.05);
        _this.trayBox.visible = true;

        switch (fractioName) {
            case '1x2traypiecespink': _this.getBaseDisplayed('1x2basepink1', '1x2basepink2');
                break;

            case '1x2traypiecesgreen': _this.getcircleBaseDisplayed('1x2basegreen2', '1x2basegreen3');
                break;

            case '1x3traypiecesblue': _this.getrectangleBaseDisplayed2('1x3baseblue', '1x3baseblue');
                break;

            case '1x3traypiecesgreen': _this.getcircleBaseDisplayed('1x3basegreen', '1x3basegreen');
                break;

            case '1x4traypiecesblue': _this.getrectangleBaseDisplayed2('1x4baseblue', '1x4baseblue');
                break;

            case '1x4traypiecespink': _this.getBaseDisplayed('1x4base', '1x4base');
                break;

            case '1x4traypiecesgreen': _this.getBaseDisplayed('Ovalbase', 'Ovalbase');
                break;

            case '1x5traypieces': _this.getrectangleBaseDisplayed2('1x5base', '1x5base');
                break;

            case '1x6traypieces': _this.getBaseDisplayed('1x6base', '1x6base');
                break;

            case '1x7traypieces': _this.getrectangleBaseDisplayed1('1x7base', '1x7base');
                break;

            case '1x8traypieces': _this.getrectangleBaseDisplayed1('1x8base', '1x8base');
                break;

            case '1x9traypieces': _this.getrectangleBaseDisplayed1('1x9base', '1x9base');
                break;

        }
    },

    //to display each fraction piece on screen
    displayfractionsOnScreen: function (fractionName, denominator) {
        _this.fractionName = fractionName;

        _this.onScreenDisplay(_this.fractionName);

        _this.fractionGroup = _this.add.group();

        _this.DenominatorValue = denominator;
        _this.Counter = 0;
        console.log(_this.DenominatorValue);

        var row = 0;
        var col = 0;

        var max = Math.floor((2 * _this.DenominatorValue) - 1);
        var min = Math.ceil(_this.DenominatorValue + 1);
        console.log(min, max);
        //to generate random numerator
        if (_this.count1 == _this.wholeNumberQn) {
            _this.NumeratorValue = Math.floor(2 * _this.DenominatorValue);
        }
        else {
            _this.NumeratorValue = Math.floor(Math.random() * (max - min + 1) + min);
        }

        if (_this.fractionName == '1x2traypiecesgreen') {
            for (i = 1; i <= _this.NumeratorValue; i++) {
                console.log("numerator", _this.NumeratorValue);
                _this.fractionbox = _this.add.sprite(_this.circle1x2X[row], _this.circle1x2Y[col], _this.fractionName);
                console.log(_this.fractionGroup.length);
                row += 1;
                if (row >= 3) {
                    row = 0;
                    col = col + 1;
                }
                _this.fractionGroup.addChild(_this.fractionbox);
            }
        }
        else {
            for (i = 1; i <= _this.NumeratorValue; i++) {
                console.log("numerator", _this.NumeratorValue);
                _this.fractionbox = _this.add.sprite(_this.fractionX[row], _this.fractionY[col], _this.fractionName);
                _this.fractionbox.width = 35;
                _this.fractionbox.height = 47;
                if (_this.fractionName == '1x4traypiecesgreen') {
                    _this.fractionbox.width = 40;
                    _this.fractionbox.height = 50;
                }
                console.log(_this.fractionGroup.length);
                row += 1;
                if (row >= 3) {
                    row = 0;
                    col = col + 1;
                }
                _this.fractionGroup.addChild(_this.fractionbox);
            }
        }
        _this.enableFractionBoxGrp();
    },

    enableFractionBoxGrp: function () {
        console.log("hihi");
        //for(let i=0;i<_this.fractionGroup.length;i++)
        _this.fractionGroup.forEach(element => {
            element.inputEnabled = true;
            element.input.useHandCursor = true;
            element.input.enableDrag(true);
            element.visible = true;
            _this.originalPositionX = element.x;
            _this.originalPositionY = element.y;
            console.log(_this.originalPositionX, _this.originalPositionY);
            element.events.onDragStop.add(_this.dragStop1, _this);
        });

        _this.fractionGroup.forEach(element => {
            element.bringToTop();
        });

    },

    getRectangularBase1x3Filled: function (counter, sprite) {
        console.log(counter);
        switch (counter) {
            case 1: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x3box1 = _this.add.sprite(200, 170, '1x3piecesblue');
                _this.rectangleBase1x3box1.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x3box1.visible = true;
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x3box2 = _this.add.sprite(249.8, 170, '1x3piecesblue');
                _this.rectangleBase1x3box2.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x3box2.visible = true;
                break;

            case 3: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x3box3 = _this.add.sprite(299.6, 170, '1x3piecesblue');
                _this.rectangleBase1x3box3.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x3box3.visible = true;
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x3box4 = _this.add.sprite(420, 170, '1x3piecesblue');
                _this.rectangleBase1x3box4.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x3box4.visible = true;
                break;

            case 5: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x3box5 = _this.add.sprite(469.8, 170, '1x3piecesblue');
                _this.rectangleBase1x3box5.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x3box5.visible = true;
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x3box6 = _this.add.sprite(519.6, 170, '1x3piecesblue');
                _this.rectangleBase1x3box6.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x3box6.visible = true;
                break;
        }

    },

    getRectangularBase1x4Filled: function (counter, sprite) {
        console.log(counter);
        switch (counter) {
            case 1: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x4box1 = _this.add.sprite(200, 170, '1x4piecesblue');
                _this.rectangleBase1x4box1.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x4box1.visible = true;
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x4box2 = _this.add.sprite(238.5, 170, '1x4piecesblue');
                _this.rectangleBase1x4box2.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x4box2.visible = true;
                break;

            case 3: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x4box3 = _this.add.sprite(276.4, 170, '1x4piecesblue');
                _this.rectangleBase1x4box3.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x4box3.visible = true;
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x4box4 = _this.add.sprite(314.4, 170, '1x4piecesblue');
                _this.rectangleBase1x4box4.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x4box4.visible = true;
                break;

            case 5: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x4box5 = _this.add.sprite(420, 170, '1x4piecesblue');
                _this.rectangleBase1x4box5.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x4box5.visible = true;
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x4box6 = _this.add.sprite(458.5, 170, '1x4piecesblue');
                _this.rectangleBase1x4box6.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x4box6.visible = true;
                break;

            case 7: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x4box7 = _this.add.sprite(496.4, 170, '1x4piecesblue');
                _this.rectangleBase1x4box7.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x4box7.visible = true;
                break;

            case 8: sprite.destroy();
                _this.rectangleBase1x4box8 = _this.add.sprite(534.4, 170, '1x4piecesblue');
                _this.rectangleBase1x4box8.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x4box8.visible = true;
                break;
        }

    },


    getRectangularBase1x5Filled: function (counter, sprite) {
        console.log(counter);
        switch (counter) {
            case 1: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x5box1 = _this.add.sprite(200, 170, '1x5pieces');
                _this.rectangleBase1x5box1.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x5box1.visible = true;
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x5box2 = _this.add.sprite(229.8, 170, '1x5pieces');
                _this.rectangleBase1x5box2.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x5box2.visible = true;
                break;

            case 3: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x5box3 = _this.add.sprite(259.8, 170, '1x5pieces');
                _this.rectangleBase1x5box3.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x5box3.visible = true;
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x5box4 = _this.add.sprite(290.8, 170, '1x5pieces');
                _this.rectangleBase1x5box4.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x5box4.visible = true;
                break;

            case 5: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x5box5 = _this.add.sprite(320.8, 170, '1x5pieces');
                _this.rectangleBase1x5box5.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x5box5.visible = true;
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x5box6 = _this.add.sprite(420, 170, '1x5pieces');
                _this.rectangleBase1x5box6.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x5box6.visible = true;
                break;

            case 7: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x5box7 = _this.add.sprite(449.8, 170, '1x5pieces');
                _this.rectangleBase1x5box7.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x5box7.visible = true;
                break;

            case 8: sprite.destroy();
                _this.rectangleBase1x5box8 = _this.add.sprite(479.8, 170, '1x5pieces');
                _this.rectangleBase1x5box8.scale.setTo(1.0, 1.015);
                _this.rectangleBase1x5box8.visible = true;
                break;

            case 9: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x5box9 = _this.add.sprite(510.8, 170, '1x5pieces');
                _this.rectangleBase1x5box9.scale.setTo(1.0);
                _this.rectangleBase1x5box9.visible = true;
                break;

            case 10: sprite.destroy();
                _this.rectangleBase1x5box10 = _this.add.sprite(540.8, 170, '1x5pieces');
                _this.rectangleBase1x5box10.scale.setTo(1.0);
                _this.rectangleBase1x5box10.visible = true;
                break;
        }

    },

    getRectangularBase1x6Filled: function (counter, sprite) {
        console.log(counter);
        switch (counter) {
            case 1: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x6box1 = _this.add.sprite(200, 170, '1x6pieces');
                _this.rectangleBase1x6box1.scale.setTo(0.7);
                _this.rectangleBase1x6box1.visible = true;
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x6box2 = _this.add.sprite(232, 170, '1x6pieces');
                _this.rectangleBase1x6box2.scale.setTo(0.7);
                _this.rectangleBase1x6box2.visible = true;
                break;

            case 3: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x6box3 = _this.add.sprite(264, 170, '1x6pieces');
                _this.rectangleBase1x6box3.scale.setTo(0.7);
                _this.rectangleBase1x6box3.visible = true;
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x6box4 = _this.add.sprite(296, 170, '1x6pieces');
                _this.rectangleBase1x6box4.scale.setTo(0.7);
                _this.rectangleBase1x6box4.visible = true;
                break;

            case 5: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x6box5 = _this.add.sprite(327, 170, '1x6pieces');
                _this.rectangleBase1x6box5.scale.setTo(0.7);
                _this.rectangleBase1x6box5.visible = true;
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x6box6 = _this.add.sprite(358, 170, '1x6pieces');
                _this.rectangleBase1x6box6.scale.setTo(0.7);
                _this.rectangleBase1x6box6.visible = true;
                break;

            case 7: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x6box7 = _this.add.sprite(420, 170, '1x6pieces');
                _this.rectangleBase1x6box7.scale.setTo(0.7);
                _this.rectangleBase1x6box7.visible = true;
                break;

            case 8: sprite.destroy();
                _this.rectangleBase1x6box8 = _this.add.sprite(452, 170, '1x6pieces');
                _this.rectangleBase1x6box8.scale.setTo(0.7);
                _this.rectangleBase1x6box8.visible = true;
                break;

            case 9: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x6box9 = _this.add.sprite(484, 170, '1x6pieces');
                _this.rectangleBase1x6box9.scale.setTo(0.7);
                _this.rectangleBase1x6box9.visible = true;
                break;

            case 10: sprite.destroy();
                _this.rectangleBase1x6box10 = _this.add.sprite(516, 170, '1x6pieces');
                _this.rectangleBase1x6box10.scale.setTo(0.7);
                _this.rectangleBase1x6box10.visible = true;
                break;

            case 11: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x6box11 = _this.add.sprite(547, 170, '1x6pieces');
                _this.rectangleBase1x6box11.scale.setTo(0.7);
                _this.rectangleBase1x6box11.visible = true;
                break;

            case 12: sprite.destroy();
                _this.rectangleBase1x6box12 = _this.add.sprite(578, 170, '1x6pieces');
                _this.rectangleBase1x6box12.scale.setTo(0.7);
                _this.rectangleBase1x6box12.visible = true;
                break;
        }

    },

    getRectangularBase1x7Filled: function (counter, sprite) {
        console.log(counter);
        switch (counter) {
            case 1: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x7box1 = _this.add.sprite(201, 150, '1x7pieces');
                _this.rectangleBase1x7box1.scale.setTo(0.7);
                _this.rectangleBase1x7box1.visible = true;
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x7box2 = _this.add.sprite(242.2, 150, '1x7pieces');
                _this.rectangleBase1x7box2.scale.setTo(0.7);
                _this.rectangleBase1x7box2.visible = true;
                break;

            case 3: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x7box3 = _this.add.sprite(285.3, 150, '1x7pieces');
                _this.rectangleBase1x7box3.scale.setTo(0.7);
                _this.rectangleBase1x7box3.visible = true;
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x7box4 = _this.add.sprite(328.2, 150, '1x7pieces');
                _this.rectangleBase1x7box4.scale.setTo(0.7);
                _this.rectangleBase1x7box4.visible = true;
                break;

            case 5: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x7box5 = _this.add.sprite(370, 150, '1x7pieces');
                _this.rectangleBase1x7box5.scale.setTo(0.7);
                _this.rectangleBase1x7box5.visible = true;
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x7box6 = _this.add.sprite(411, 150, '1x7pieces');
                _this.rectangleBase1x7box6.scale.setTo(0.7);
                _this.rectangleBase1x7box6.visible = true;
                break;

            case 7: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x7box7 = _this.add.sprite(452, 150, '1x7pieces');
                _this.rectangleBase1x7box7.scale.setTo(0.7);
                _this.rectangleBase1x7box7.visible = true;
                break;

            case 8: sprite.destroy();
                _this.rectangleBase1x7box8 = _this.add.sprite(201, 300, '1x7pieces');
                _this.rectangleBase1x7box8.scale.setTo(0.7);
                _this.rectangleBase1x7box8.visible = true;
                break;

            case 9: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x7box9 = _this.add.sprite(242.2, 300, '1x7pieces');
                _this.rectangleBase1x7box9.scale.setTo(0.7);
                _this.rectangleBase1x7box9.visible = true;
                break;

            case 10: sprite.destroy();
                _this.rectangleBase1x7box10 = _this.add.sprite(285.3, 300, '1x7pieces');
                _this.rectangleBase1x7box10.scale.setTo(0.7);
                _this.rectangleBase1x7box10.visible = true;
                break;

            case 11: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x7box11 = _this.add.sprite(328.2, 300, '1x7pieces');
                _this.rectangleBase1x7box11.scale.setTo(0.7);
                _this.rectangleBase1x7box11.visible = true;
                break;

            case 12: sprite.destroy();
                _this.rectangleBase1x7box12 = _this.add.sprite(370, 300, '1x7pieces');
                _this.rectangleBase1x7box12.scale.setTo(0.7);
                _this.rectangleBase1x7box12.visible = true;
                break;

            case 13: sprite.destroy();
                _this.rectangleBase1x7box13 = _this.add.sprite(411, 300, '1x7pieces');
                _this.rectangleBase1x7box13.scale.setTo(0.7);
                _this.rectangleBase1x7box13.visible = true;
                break;

            case 14: sprite.destroy();
                _this.rectangleBase1x7box14 = _this.add.sprite(452, 300, '1x7pieces');
                _this.rectangleBase1x7box14.scale.setTo(0.7);
                _this.rectangleBase1x7box14.visible = true;
                break;
        }

    },

    getRectangularBase1x8Filled: function (counter, sprite) {
        console.log(counter);
        switch (counter) {
            case 1: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box1 = _this.add.sprite(201, 150, '1x8pieces');
                _this.rectangleBase1x8box1.scale.setTo(0.7);
                _this.rectangleBase1x8box1.visible = true;
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x8box2 = _this.add.sprite(236.4, 150, '1x8pieces');
                _this.rectangleBase1x8box2.scale.setTo(0.7);
                _this.rectangleBase1x8box2.visible = true;
                break;

            case 3: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box3 = _this.add.sprite(273.8, 150, '1x8pieces');
                _this.rectangleBase1x8box3.scale.setTo(0.7);
                _this.rectangleBase1x8box3.visible = true;
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x8box4 = _this.add.sprite(311.5, 150, '1x8pieces');
                _this.rectangleBase1x8box4.scale.setTo(0.7);
                _this.rectangleBase1x8box4.visible = true;
                break;

            case 5: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box5 = _this.add.sprite(348.6, 150, '1x8pieces');
                _this.rectangleBase1x8box5.scale.setTo(0.7);
                _this.rectangleBase1x8box5.visible = true;
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x8box6 = _this.add.sprite(384, 150, '1x8pieces');
                _this.rectangleBase1x8box6.scale.setTo(0.7);
                _this.rectangleBase1x8box6.visible = true;
                break;

            case 7: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box7 = _this.add.sprite(420, 150, '1x8pieces');
                _this.rectangleBase1x8box7.scale.setTo(0.7);
                _this.rectangleBase1x8box7.visible = true;
                break;

            case 8: sprite.destroy();
                _this.rectangleBase1x8box8 = _this.add.sprite(456, 150, '1x8pieces');
                _this.rectangleBase1x8box8.scale.setTo(0.7);
                _this.rectangleBase1x8box8.visible = true;
                break;

            case 9: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box9 = _this.add.sprite(201, 300, '1x8pieces');
                _this.rectangleBase1x8box9.scale.setTo(0.7);
                _this.rectangleBase1x8box9.visible = true;
                break;

            case 10: sprite.destroy();
                _this.rectangleBase1x8box10 = _this.add.sprite(236.4, 300, '1x8pieces');
                _this.rectangleBase1x8box10.scale.setTo(0.7);
                _this.rectangleBase1x8box10.visible = true;
                break;

            case 11: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box11 = _this.add.sprite(273.8, 300, '1x8pieces');
                _this.rectangleBase1x8box11.scale.setTo(0.7);
                _this.rectangleBase1x8box11.visible = true;
                break;

            case 12: sprite.destroy();
                _this.rectangleBase1x8box12 = _this.add.sprite(311.5, 300, '1x8pieces');
                _this.rectangleBase1x8box12.scale.setTo(0.7);
                _this.rectangleBase1x8box12.visible = true;
                break;

            case 13: sprite.destroy();
                _this.rectangleBase1x8box13 = _this.add.sprite(348.6, 300, '1x8pieces');
                _this.rectangleBase1x8box13.scale.setTo(0.7);
                _this.rectangleBase1x8box13.visible = true;
                break;

            case 14: sprite.destroy();
                _this.rectangleBase1x8box14 = _this.add.sprite(384, 300, '1x8pieces');
                _this.rectangleBase1x8box14.scale.setTo(0.7);
                _this.rectangleBase1x8box14.visible = true;
                break;

            case 15: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x8box15 = _this.add.sprite(420, 300, '1x8pieces');
                _this.rectangleBase1x8box15.scale.setTo(0.7);
                _this.rectangleBase1x8box15.visible = true;
                break;

            case 16: sprite.destroy();
                _this.rectangleBase1x8box16 = _this.add.sprite(456, 300, '1x8pieces');
                _this.rectangleBase1x8box16.scale.setTo(0.7);
                _this.rectangleBase1x8box16.visible = true;
                break;

        }

    },

    getRectangularBase1x9Filled: function (counter, sprite) {
        console.log(counter);
        switch (counter) {
            case 1: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box1 = _this.add.sprite(201, 150, '1x9pieces');
                _this.rectangleBase1x9box1.scale.setTo(0.7);
                _this.rectangleBase1x9box1.visible = true;
                break;

            case 2: sprite.destroy();
                _this.rectangleBase1x9box2 = _this.add.sprite(232.5, 150, '1x9pieces');
                _this.rectangleBase1x9box2.scale.setTo(0.7);
                _this.rectangleBase1x9box2.visible = true;
                break;

            case 3: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box3 = _this.add.sprite(265.5, 150, '1x9pieces');
                _this.rectangleBase1x9box3.scale.setTo(0.7);
                _this.rectangleBase1x9box3.visible = true;
                break;

            case 4: sprite.destroy();
                _this.rectangleBase1x9box4 = _this.add.sprite(298.7, 150, '1x9pieces');
                _this.rectangleBase1x9box4.scale.setTo(0.7);
                _this.rectangleBase1x9box4.visible = true;
                break;

            case 5: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box5 = _this.add.sprite(330.6, 150, '1x9pieces');
                _this.rectangleBase1x9box5.scale.setTo(0.7);
                _this.rectangleBase1x9box5.visible = true;
                break;

            case 6: sprite.destroy();
                _this.rectangleBase1x9box6 = _this.add.sprite(362.7, 150, '1x9pieces');
                _this.rectangleBase1x9box6.scale.setTo(0.7);
                _this.rectangleBase1x9box6.visible = true;
                break;

            case 7: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box7 = _this.add.sprite(394.5, 150, '1x9pieces');
                _this.rectangleBase1x9box7.scale.setTo(0.7);
                _this.rectangleBase1x9box7.visible = true;
                break;

            case 8: sprite.destroy();
                _this.rectangleBase1x9box8 = _this.add.sprite(427.4, 150, '1x9pieces');
                _this.rectangleBase1x9box8.scale.setTo(0.7);
                _this.rectangleBase1x9box8.visible = true;
                break;

            case 9: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box9 = _this.add.sprite(460, 150, '1x9pieces');
                _this.rectangleBase1x9box9.scale.setTo(0.7);
                _this.rectangleBase1x9box9.visible = true;
                break;

            case 10: sprite.destroy();
                _this.rectangleBase1x9box10 = _this.add.sprite(201, 300, '1x9pieces');
                _this.rectangleBase1x9box10.scale.setTo(0.7);
                _this.rectangleBase1x9box10.visible = true;
                break;

            case 11: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box11 = _this.add.sprite(232.5, 300, '1x9pieces');
                _this.rectangleBase1x9box11.scale.setTo(0.7);
                _this.rectangleBase1x9box11.visible = true;
                break;

            case 12: sprite.destroy();
                _this.rectangleBase1x9box12 = _this.add.sprite(265.5, 300, '1x9pieces');
                _this.rectangleBase1x9box12.scale.setTo(0.7);
                _this.rectangleBase1x9box12.visible = true;
                break;

            case 13: sprite.destroy();
                _this.rectangleBase1x9box13 = _this.add.sprite(298.7, 300, '1x9pieces');
                _this.rectangleBase1x9box13.scale.setTo(0.7);
                _this.rectangleBase1x9box13.visible = true;
                break;

            case 14: sprite.destroy();
                _this.rectangleBase1x9box14 = _this.add.sprite(330.6, 300, '1x9pieces');
                _this.rectangleBase1x9box14.scale.setTo(0.7);
                _this.rectangleBase1x9box14.visible = true;
                break;

            case 15: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box15 = _this.add.sprite(362.7, 300, '1x9pieces');
                _this.rectangleBase1x9box15.scale.setTo(0.7);
                _this.rectangleBase1x9box15.visible = true;
                break;

            case 16: sprite.destroy();
                _this.rectangleBase1x9box16 = _this.add.sprite(394.5, 300, '1x9pieces');
                _this.rectangleBase1x9box16.scale.setTo(0.7);
                _this.rectangleBase1x9box16.visible = true;
                break;

            case 17: console.log(counter);
                sprite.destroy();
                _this.rectangleBase1x9box17 = _this.add.sprite(427.4, 300, '1x9pieces');
                _this.rectangleBase1x9box17.scale.setTo(0.7);
                _this.rectangleBase1x9box17.visible = true;
                break;

            case 18: sprite.destroy();
                _this.rectangleBase1x9box18 = _this.add.sprite(460, 300, '1x9pieces');
                _this.rectangleBase1x9box18.scale.setTo(0.7);
                _this.rectangleBase1x9box18.visible = true;
                break;
        }

    },

    getCircleBase1x2Filled: function (counter, sprite) {
        console.log(counter);
        switch (counter) {
            case 1: console.log(counter);
                sprite.destroy();
                _this.circleBase1x2box1 = _this.add.sprite(200, 171.85, '1X2greenpieces_1');
                _this.circleBase1x2box1.visible = true;
                break;

            case 2: sprite.destroy();
                _this.circleBase1x2box2 = _this.add.sprite(301, 171.8, '1X2greenpieces_2');
                _this.circleBase1x2box2.visible = true;
                break;

            case 3: console.log(counter);
                sprite.destroy();
                _this.circleBase1x2box3 = _this.add.sprite(422, 170, '1X2greenpieces_3');
                _this.circleBase1x2box3.visible = true;
                break;

            case 4: sprite.destroy();
                _this.circleBase1x2box4 = _this.add.sprite(421.9, 272, '1X2greenpieces_4');
                _this.circleBase1x2box4.visible = true;
                break;
        }
    },

    getCircleBase1x3Filled: function (counter, sprite) {
        console.log(counter);
        switch (counter) {
            case 1: console.log(counter);
                sprite.destroy();
                _this.circleBase1x3box1 = _this.add.sprite(200, 172, '1X3greenpieces_1');
                _this.circleBase1x3box1.scale.setTo(1);
                _this.circleBase1x3box1.visible = true;
                break;

            case 2: sprite.destroy();
                _this.circleBase1x3box2 = _this.add.sprite(301, 172, '1X3greenpieces_2');
                _this.circleBase1x3box2.scale.setTo(1);
                _this.circleBase1x3box2.visible = true;
                break;

            case 3: console.log(counter);
                sprite.destroy();
                _this.circleBase1x3box3 = _this.add.sprite(212.7, 274.8, '1X3greenpieces_3');
                _this.circleBase1x3box3.scale.setTo(1);
                _this.circleBase1x3box3.visible = true;
                break;

            case 4: sprite.destroy();
                _this.circleBase1x3box4 = _this.add.sprite(420, 172, '1X3greenpieces_1');
                _this.circleBase1x3box4.scale.setTo(1);
                _this.circleBase1x3box4.visible = true;
                break;

            case 5: console.log(counter);
                sprite.destroy();
                _this.circleBase1x3box5 = _this.add.sprite(521, 172, '1X3greenpieces_2');
                _this.circleBase1x3box5.scale.setTo(1);
                _this.circleBase1x3box5.visible = true;
                break;

            case 6: sprite.destroy();
                _this.circleBase1x3box6 = _this.add.sprite(432.7, 274.8, '1X3greenpieces_3');
                _this.circleBase1x3box6.scale.setTo(1);
                _this.circleBase1x3box6.visible = true;
                break;
        }
    },

    getCircleBase1x4Filled: function (counter, sprite) {
        console.log(counter);
        switch (counter) {
            case 1: console.log(counter);
                sprite.destroy();
                _this.circleBase1x4box1 = _this.add.sprite(201, 170, '1X4pieces_1');
                _this.circleBase1x4box1.scale.setTo(0.71);
                _this.circleBase1x4box1.visible = true;
                break;

            case 2: sprite.destroy();
                _this.circleBase1x4box2 = _this.add.sprite(297, 170, '1X4pieces_2');
                _this.circleBase1x4box2.scale.setTo(0.71);
                _this.circleBase1x4box2.visible = true;
                break;

            case 3: console.log(counter);
                sprite.destroy();
                _this.circleBase1x4box3 = _this.add.sprite(201, 266, '1X4pieces_3');
                _this.circleBase1x4box3.scale.setTo(0.71);
                _this.circleBase1x4box3.visible = true;
                break;

            case 4: sprite.destroy();
                _this.circleBase1x4box4 = _this.add.sprite(297, 266, '1X4pieces_4');
                _this.circleBase1x4box4.scale.setTo(0.71);
                _this.circleBase1x4box4.visible = true;
                break;

            case 5: console.log(counter);
                sprite.destroy();
                _this.circleBase1x4box5 = _this.add.sprite(420, 170, '1X4pieces_1');
                _this.circleBase1x4box5.scale.setTo(0.71);
                _this.circleBase1x4box5.visible = true;
                break;

            case 6: sprite.destroy();
                _this.circleBase1x4box6 = _this.add.sprite(516, 170, '1X4pieces_2');
                _this.circleBase1x4box6.scale.setTo(0.71);
                _this.circleBase1x4box6.visible = true;
                break;

            case 7: console.log(counter);
                sprite.destroy();
                _this.circleBase1x4box7 = _this.add.sprite(420, 266, '1X4pieces_3');
                _this.circleBase1x4box7.scale.setTo(0.71);
                _this.circleBase1x4box7.visible = true;
                break;

            case 8: sprite.destroy();
                _this.circleBase1x4box8 = _this.add.sprite(516, 266, '1X4pieces_4');
                _this.circleBase1x4box8.scale.setTo(0.71);
                _this.circleBase1x4box8.visible = true;
                break;
        }
    },

    getSquareBase1x2Filled: function (counter, sprite) {
        console.log(counter);
        console.log('1x2traypiecespink');
        switch (counter) {
            case 1: console.log(counter);
                sprite.destroy();
                _this.squareBase1x2box1 = _this.add.sprite(200, 170, '1X2piecespink_1');
                _this.squareBase1x2box1.scale.setTo(0.7);
                _this.squareBase1x2box1.visible = true;
                break;

            case 2: sprite.destroy();
                _this.squareBase1x2box2 = _this.add.sprite(200, 241, '1X2piecespink_1');
                _this.squareBase1x2box2.scale.setTo(0.7);
                _this.squareBase1x2box2.visible = true;
                break;

            case 3: console.log(counter);
                sprite.destroy();
                _this.squareBase1x2box3 = _this.add.sprite(420, 170, '1X2piecespink_2');
                _this.squareBase1x2box3.scale.setTo(0.7);
                _this.squareBase1x2box3.visible = true;
                break;

            case 4: sprite.destroy();
                _this.squareBase1x2box4 = _this.add.sprite(491, 170, '1X2piecespink_2');
                _this.squareBase1x2box4.scale.setTo(0.7);
                _this.squareBase1x2box4.visible = true;
                break;
        }
    },

    getSquareBase1x4Filled: function (counter, sprite) {
        console.log(counter);
        switch (counter) {
            case 1: console.log(counter);
                sprite.destroy();
                _this.squareBase1x4box1 = _this.add.sprite(200, 170, '1X4piecespink');
                _this.squareBase1x4box1.scale.setTo(0.7);
                _this.squareBase1x4box1.visible = true;
                break;

            case 2: sprite.destroy();
                _this.squareBase1x4box2 = _this.add.sprite(296, 170, '1X4piecespink');
                _this.squareBase1x4box2.scale.setTo(0.7);
                _this.squareBase1x4box2.visible = true;
                break;

            case 3: console.log(counter);
                sprite.destroy();
                _this.squareBase1x4box3 = _this.add.sprite(200, 266, '1X4piecespink');
                _this.squareBase1x4box3.scale.setTo(0.7);
                _this.squareBase1x4box3.visible = true;
                break;

            case 4: sprite.destroy();
                _this.squareBase1x4box4 = _this.add.sprite(296, 266, '1X4piecespink');
                _this.squareBase1x4box4.scale.setTo(0.7);
                _this.squareBase1x4box4.visible = true;
                break;

            case 5: console.log(counter);
                sprite.destroy();
                _this.squareBase1x4box5 = _this.add.sprite(420, 170, '1X4piecespink');
                _this.squareBase1x4box5.scale.setTo(0.7);
                _this.squareBase1x4box5.visible = true;
                break;

            case 6: sprite.destroy();
                _this.squareBase1x4box6 = _this.add.sprite(516, 170, '1X4piecespink');
                _this.squareBase1x4box6.scale.setTo(0.7);
                _this.squareBase1x4box6.visible = true;
                break;

            case 7: console.log(counter);
                sprite.destroy();
                _this.squareBase1x4box7 = _this.add.sprite(420, 266, '1X4piecespink');
                _this.squareBase1x4box7.scale.setTo(0.7);
                _this.squareBase1x4box7.visible = true;
                break;

            case 8: sprite.destroy();
                _this.squareBase1x4box8 = _this.add.sprite(516, 266, '1X4piecespink');
                _this.squareBase1x4box8.scale.setTo(0.7);
                _this.squareBase1x4box8.visible = true;
                break;
        }
    },

    dragStop1: function (sprite, pointer) {
        console.log(_this.originalPositionX, _this.originalPositionY);
        console.log("dragStop1");

        //to check the bounds when the fractions are dragged
        if ((pointer.x < 650) && (pointer.y <= 505)) {
            _this.Counter += 1;
            if (_this.Counter >= _this.DenominatorValue && _this.Counter <= _this.NumeratorValue) {
                _this.emptyBox2.visible = true;

                if (_this.Counter == _this.DenominatorValue || _this.Counter == _this.NumeratorValue) {
                    _this.frameChangeSound.pause();
                    _this.frameChangeSound.currentTime = 0;
                    _this.frameChangeSound.play();
                }
            }

            switch (_this.fractionName) {
                case '1x2traypiecespink': _this.getSquareBase1x2Filled(_this.Counter, sprite);
                    break;

                case '1x2traypiecesgreen': _this.getCircleBase1x2Filled(_this.Counter, sprite);
                    break;

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

        }
        else {
            //to drop into original position if the fractions are out of bounds
            console.log(_this.fractionbox.x);
            sprite.x = _this.originalPositionX;
            sprite.y = _this.originalPositionY;

        }

        //to display the answer box to enter improper fractions
        if (_this.Counter == _this.NumeratorValue) {
            _this.getImproperFraction();
        }
    },

    displayNumberbox1: function () {
        _this.AnswerBox1 = _this.add.sprite(650, 170, 'NumberBox1');

        _this.enterFractionBox1 = _this.add.sprite(676, 188, 'SquareBox');
        _this.enterFractionBox1.scale.setTo(1.0);
        _this.enterFractionBox1.visible = true;

        _this.enterFractionBox2 = _this.add.sprite(676, 248, 'SquareBox');
        _this.enterFractionBox2.scale.setTo(1.0);
        _this.enterFractionBox2.visible = true;
        _this.enableBoxes();
    },

    enableBoxes: function () {
        _this.denominator = undefined;
        _this.numerator = true;

        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.enterFractionBox1.frame = 1;
        _this.enterFractionBox2.frame = 0;

        _this.enterFractionBox1.inputEnabled = true;
        _this.enterFractionBox1.input.useHandCursor = true;
        _this.enterFractionBox1.events.onInputDown.add(function () {

            // if(_this.num== false){
            //_this.numerator = true;            
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            // }
            if (_this.enterTxt1) {
                _this.numerator = false;
                _this.denominator = false;
            }
            if (!_this.enterTxt1 || _this.enterTxt1 == null) {
                _this.numerator = true;
                _this.denominator = false;
            }


            console.log(_this.numerator);
            _this.enterFractionBox1.frame = 1;
            _this.enterFractionBox2.frame = 0;

        });

        _this.enterFractionBox2.visible = true;
        _this.enterFractionBox2.inputEnabled = true;
        _this.enterFractionBox2.input.useHandCursor = true;
        _this.enterFractionBox2.events.onInputDown.add(function () {
            //_this.denominator = true;
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            if (_this.enterTxt2) {
                _this.denominator = false;
            }
            else if (!_this.enterTxt2 || _this.enterTxt2 == null) {
                _this.denominator = true;
            }
            console.log(_this.denominator);
            _this.numerator = false;
            _this.enterFractionBox2.frame = 1;
            _this.enterFractionBox1.frame = 0;

        });
    },

    getImproperFraction: function () {
        _this.objGroup = _this.add.group();

        _this.displayNumberbox1();
        _this.qn_flag = 1;
        if (_this.count1 < 1) {
            _this.time.events.add(1200, function () { _this.askQn1(); });
        }
        _this.time.events.add(2000, function () {
            _this.qn_flag = 1;
            _this.numberPad();
        });
    },

    getMixedFraction: function () {
        _this.remainder = _this.NumeratorValue % _this.DenominatorValue;
        _this.newValue = _this.NumeratorValue - _this.remainder;
        _this.quotient = Math.floor(_this.newValue / _this.DenominatorValue);
        console.log(_this.remainder, _this.newValue, _this.quotient);

        _this.new_quotient = 0;
        _this.new_remainder = 0;
        _this.new_denominator = 0;

        if (_this.NumeratorValue == 6 && _this.DenominatorValue == 4) {
            _this.new_quotient = 1;
            _this.new_remainder = 1;
            _this.new_denominator = 2;
        }
        else if (_this.NumeratorValue == 8 && _this.DenominatorValue == 6) {
            _this.new_quotient = 1;
            _this.new_remainder = 1;
            _this.new_denominator = 3;
        }
        else if (_this.NumeratorValue == 9 && _this.DenominatorValue == 6) {
            _this.new_quotient = 1;
            _this.new_remainder = 1;
            _this.new_denominator = 2;
        }
        else if (_this.NumeratorValue == 10 && _this.DenominatorValue == 6) {
            _this.new_quotient = 1;
            _this.new_remainder = 2;
            _this.new_denominator = 3;
        }
        else if (_this.NumeratorValue == 10 && _this.DenominatorValue == 8) {
            _this.new_quotient = 1;
            _this.new_remainder = 1;
            _this.new_denominator = 4;
        }
        else if (_this.NumeratorValue == 12 && _this.DenominatorValue == 8) {
            _this.new_quotient = 1;
            _this.new_remainder = 1;
            _this.new_denominator = 2;
        }
        else if (_this.NumeratorValue == 14 && _this.DenominatorValue == 8) {
            _this.new_quotient = 1;
            _this.new_remainder = 3;
            _this.new_denominator = 4;
        }
        else if (_this.NumeratorValue == 12 && _this.DenominatorValue == 9) {
            _this.new_quotient = 1;
            _this.new_remainder = 1;
            _this.new_denominator = 3;
        }
        else if (_this.NumeratorValue == 15 && _this.DenominatorValue == 9) {
            _this.new_quotient = 1;
            _this.new_remainder = 2;
            _this.new_denominator = 3;
        }
    },

    displayNumberbox2: function () {
        _this.getMixedFraction();

        // _this.AnswerBox1.destroy();
        // _this.enterFractionBox1.visible = false;
        // _this.enterFractionBox2.visible = false;

        _this.AnswerBox2 = _this.add.sprite(650, 170, 'NumberBox2');
        _this.AnswerBox2.visible = true;
        _this.AnswerBox2.scale.setTo(0.8);

        if (_this.NumeratorValue >= 10) {
            _this.displaynumerator1 = _this.add.text(689, 204, _this.NumeratorValue, { fontSize: '27px' });
            _this.displaynumerator1.align = 'right';
            _this.displaynumerator1.font = "Akzidenz-Grotesk BQ";
            _this.displaynumerator1.fill = '#FFFFFF';
            _this.displaynumerator1.fontWeight = 'Normal';
            _this.displaynumerator1.visible = true;
        }
        else {
            _this.displaynumerator1 = _this.add.text(699, 204, _this.NumeratorValue, { fontSize: '27px' });
            _this.displaynumerator1.align = 'right';
            _this.displaynumerator1.font = "Akzidenz-Grotesk BQ";
            _this.displaynumerator1.fill = '#FFFFFF';
            _this.displaynumerator1.fontWeight = 'Normal';
            _this.displaynumerator1.visible = true;
        }
        _this.graphics1 = _this.add.graphics();
        _this.graphics1.lineStyle(4, 0xffffff);
        _this.graphics1.moveTo(728, 238);
        _this.graphics1.lineTo(685, 238);

        _this.displaydenominator1 = _this.add.text(699, 245, _this.DenominatorValue, { fontSize: '27px' });
        _this.displaydenominator1.align = 'right';
        _this.displaydenominator1.font = "Akzidenz-Grotesk BQ";
        _this.displaydenominator1.fill = '#FFFFFF';
        _this.displaydenominator1.fontWeight = 'Normal';
        _this.displaydenominator1.visible = true;

        //_this.enterQuotientBox=_this.add.sprite(770,210,'SquareBox');
        //_this.enterQuotientBox.scale.setTo(1.1);
        _this.enterQuotientBox.visible = true;
        _this.enterQuotientBox.bringToTop();

        //_this.enterRemainderBox=_this.add.sprite(828,183,'SquareBox');
        //_this.enterRemainderBox.scale.setTo(1.0);
        _this.enterRemainderBox.visible = true;
        _this.enterRemainderBox.bringToTop();

        //_this.enterDenominatorBox=_this.add.sprite(828,243,'SquareBox');
        //_this.enterDenominatorBox.scale.setTo(1.0);
        _this.enterDenominatorBox.visible = true;
        _this.enterDenominatorBox.bringToTop();

        _this.denominator = false;
        _this.numerator = false;

        _this.mixed_enableBoxes();

    },

    mixed_enableBoxes: function () {
        _this.denominator_value = undefined;
        _this.remainder_value = undefined;
        _this.quotient_value = true;
        _this.whole = false;

        _this.selectedAns1 = '';
        _this.selectedAns2 = '';

        _this.enterQuotientBox.frame = 1;
        _this.enterRemainderBox.frame = 0;
        _this.enterDenominatorBox.frame = 0;

        _this.enterQuotientBox.inputEnabled = true;
        _this.enterQuotientBox.input.useHandCursor = true;
        _this.enterQuotientBox.events.onInputDown.add(function () {
            //_this.quotient_value = true;
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            if (_this.enterTxt3) {
                _this.quotient_value = false;
            }
            if (!_this.enterTxt3 || _this.enterTxt3 == null) {
                _this.quotient_value = true;
            }
            console.log(_this.quotient_value);
            _this.denominator_value = false;
            _this.remainder_value = false;

            _this.enterQuotientBox.frame = 1;
            _this.enterRemainderBox.frame = 0;
            _this.enterDenominatorBox.frame = 0;

        });

        _this.enterRemainderBox.inputEnabled = true;
        _this.enterRemainderBox.input.useHandCursor = true;
        _this.enterRemainderBox.events.onInputDown.add(function () {
            //_this.remainder_value = true;
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            if (_this.enterTxt4) {
                _this.remainder_value = false;
            }
            if (!_this.enterTxt4 || _this.enterTxt4 == null) {
                _this.remainder_value = true;
            }
            console.log(_this.remainder_value);
            _this.denominator_value = false;

            _this.quotient_value = false;
            _this.enterQuotientBox.frame = 0;
            _this.enterRemainderBox.frame = 1;
            _this.enterDenominatorBox.frame = 0;

        });

        _this.enterDenominatorBox.inputEnabled = true;
        _this.enterDenominatorBox.input.useHandCursor = true;
        _this.enterDenominatorBox.events.onInputDown.add(function () {
            //_this.denominator_value = true;
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            if (_this.enterTxt5) {
                _this.denominator_value = false;
            }
            if (!_this.enterTxt5 || _this.enterTxt5 == null) {
                _this.denominator_value = true;
            }
            console.log(_this.denominator_value);
            _this.remainder_value = false;
            _this.quotient_value = false;
            _this.enterQuotientBox.frame = 0;
            _this.enterRemainderBox.frame = 0;
            _this.enterDenominatorBox.frame = 1;

        });


    },

    displayNumberbox3: function () {
        _this.AnswerBox1.destroy();

        _this.AnswerBox3 = _this.add.sprite(650, 170, 'number2bg');
        _this.AnswerBox3.scale.setTo(1.0);

        _this.fractionBox = _this.add.sprite(680, 190, 'fractionbox');
        _this.fractionBox.frame = 3;
        _this.fractionBox.scale.setTo(1.3);

        if (_this.NumeratorValue >= 10) {
            _this.displaynumerator2 = _this.add.text(698, 204, _this.NumeratorValue, { fontSize: '27px' });
            _this.displaynumerator2.align = 'right';
            _this.displaynumerator2.font = "Akzidenz-Grotesk BQ";
            _this.displaynumerator2.fill = '#FFFFFF';
            _this.displaynumerator2.fontWeight = 'Normal';
            _this.displaynumerator2.visible = true;
        }
        else {
            _this.displaynumerator2 = _this.add.text(705, 204, _this.NumeratorValue, { fontSize: '27px' });
            _this.displaynumerator2.align = 'right';
            _this.displaynumerator2.font = "Akzidenz-Grotesk BQ";
            _this.displaynumerator2.fill = '#FFFFFF';
            _this.displaynumerator2.fontWeight = 'Normal';
            _this.displaynumerator2.visible = true;
        }

        _this.displaydenominator2 = _this.add.text(705, 245, _this.DenominatorValue, { fontSize: '27px' });
        _this.displaydenominator2.align = 'right';
        _this.displaydenominator2.font = "Akzidenz-Grotesk BQ";
        _this.displaydenominator2.fill = '#FFFFFF';
        _this.displaydenominator2.fontWeight = 'Normal';
        _this.displaydenominator2.visible = true;

        _this.graphicsEq1 = _this.add.graphics();
        _this.graphicsEq1.lineStyle(6, 0xff0000);
        _this.graphicsEq1.moveTo(780, 233);
        _this.graphicsEq1.lineTo(804, 233);

        _this.graphicsEq2 = _this.add.graphics();
        _this.graphicsEq2.lineStyle(6, 0xff0000);
        _this.graphicsEq2.moveTo(780, 243);
        _this.graphicsEq2.lineTo(804, 243);

        // _this.enterWholeNumberBox=_this.add.sprite(813,210,'SquareBox');
        // _this.enterWholeNumberBox.scale.setTo(1.1);
        _this.enterWholeNumberBox.visible = true;
        _this.enterWholeNumberBox.bringToTop();

        _this.denominator_value = false;
        _this.quotient_value = false;
        _this.remainder_value = false;
        _this.enablebox();
    },

    enablebox: function () {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        console.log("whole");
        _this.denominator = undefined;

        _this.numerator = undefined;
        _this.enterWholeNumberBox.inputEnabled = true;
        _this.enterWholeNumberBox.input.useHandCursor = true;
        _this.whole = true;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        if (_this.enterTxt6) {
            _this.whole = false;
        }
        if (!_this.enterTxt6 || _this.enterTxt6 == null) {
            _this.whole = true;
        }
        _this.enterWholeNumberBox.frame = 1;

    },

    destroysquarefraction1x2: function (index) {

        switch (index) {
            case 1: _this.squareBase1x2box1.visible = false;
                break;
            case 2: _this.squareBase1x2box2.visible = false;
                break;
            case 3: _this.squareBase1x2box3.visible = false;
                break;
            case 4: _this.squareBase1x2box4.visible = false;
                break;

        }
    },

    destroysquarefraction1x4: function (index) {

        switch (index) {
            case 1: _this.squareBase1x4box1.visible = false;
                break;
            case 2: _this.squareBase1x4box2.visible = false;
                break;
            case 3: _this.squareBase1x4box3.visible = false;
                break;
            case 4: _this.squareBase1x4box4.visible = false;
                break;
            case 5: _this.squareBase1x4box5.visible = false;
                break;
            case 6: _this.squareBase1x4box6.visible = false;
                break;
            case 7: _this.squareBase1x4box7.visible = false;
                break;

            case 8: _this.squareBase1x4box8.visible = false;
                break;

        }
    },

    destroycirclefraction1x2: function (index) {

        switch (index) {
            case 1: _this.circleBase1x2box1.visible = false;
                break;
            case 2: _this.circleBase1x2box2.visible = false;
                break;
            case 3: _this.circleBase1x2box3.visible = false;
                break;
            case 4: _this.circleBase1x2box4.visible = false;
                break;
        }
    },

    destroycirclefraction1x3: function (index) {

        switch (index) {
            case 1: _this.circleBase1x3box1.visible = false;
                break;
            case 2: _this.circleBase1x3box2.visible = false;
                break;
            case 3: _this.circleBase1x3box3.visible = false;
                break;
            case 4: _this.circleBase1x3box4.visible = false;
                break;
            case 5: _this.circleBase1x3box5.visible = false;
                break;
            case 6: _this.circleBase1x3box6.visible = false;
                break;
        }
    },

    destroycirclefraction1x4: function (index) {

        switch (index) {
            case 1: _this.circleBase1x4box1.visible = false;
                break;
            case 2: _this.circleBase1x4box2.visible = false;
                break;
            case 3: _this.circleBase1x4box3.visible = false;
                break;
            case 4: _this.circleBase1x4box4.visible = false;
                break;
            case 5: _this.circleBase1x4box5.visible = false;
                break;
            case 6: _this.circleBase1x4box6.visible = false;
                break;
            case 7: _this.circleBase1x4box7.visible = false;
                break;

            case 8: _this.circleBase1x4box8.visible = false;
                break;

        }
    },

    destroyrectanglefraction1x3: function (index) {
        switch (index) {
            case 1: _this.rectangleBase1x3box1.visible = false;
                break;
            case 2: _this.rectangleBase1x3box2.visible = false;
                break;
            case 3: _this.rectangleBase1x3box3.visible = false;
                break;
            case 4: _this.rectangleBase1x3box4.visible = false;
                break;
            case 5: _this.rectangleBase1x3box5.visible = false;
                break;
            case 6: _this.rectangleBase1x3box6.visible = false;
                break;
        }
    },

    destroyrectanglefraction1x4: function (index) {
        switch (index) {
            case 1: _this.rectangleBase1x4box1.visible = false;
                break;
            case 2: _this.rectangleBase1x4box2.visible = false;
                break;
            case 3: _this.rectangleBase1x4box3.visible = false;
                break;
            case 4: _this.rectangleBase1x4box4.visible = false;
                break;
            case 5: _this.rectangleBase1x4box5.visible = false;
                break;
            case 6: _this.rectangleBase1x4box6.visible = false;
                break;
            case 7: _this.rectangleBase1x4box7.visible = false;
                break;

            case 8: _this.rectangleBase1x4box8.visible = false;
                break;

        }
    },

    destroyrectanglefraction1x5: function (index) {
        switch (index) {
            case 1: _this.rectangleBase1x5box1.visible = false;
                break;
            case 2: _this.rectangleBase1x5box2.visible = false;
                break;
            case 3: _this.rectangleBase1x5box3.visible = false;
                break;
            case 4: _this.rectangleBase1x5box4.visible = false;
                break;
            case 5: _this.rectangleBase1x5box5.visible = false;
                break;
            case 6: _this.rectangleBase1x5box6.visible = false;
                break;
            case 7: _this.rectangleBase1x5box7.visible = false;
                break;
            case 8: _this.rectangleBase1x5box8.visible = false;
                break;
            case 9: _this.rectangleBase1x5box9.visible = false;
                break;
            case 10: _this.rectangleBase1x5box10.visible = false;
                break;
        }
    },

    destroyrectanglefraction1x6: function (index) {
        switch (index) {
            case 1: _this.rectangleBase1x6box1.visible = false;
                break;
            case 2: _this.rectangleBase1x6box2.visible = false;
                break;
            case 3: _this.rectangleBase1x6box3.visible = false;
                break;
            case 4: _this.rectangleBase1x6box4.visible = false;
                break;
            case 5: _this.rectangleBase1x6box5.visible = false;
                break;
            case 6: _this.rectangleBase1x6box6.visible = false;
                break;
            case 7: _this.rectangleBase1x6box7.visible = false;
                break;
            case 8: _this.rectangleBase1x6box8.visible = false;
                break;
            case 9: _this.rectangleBase1x6box9.visible = false;
                break;
            case 10: _this.rectangleBase1x6box10.visible = false;
                break;
            case 11: _this.rectangleBase1x6box11.visible = false;
                break;
            case 12: _this.rectangleBase1x6box12.visible = false;
                break;
        }
    },

    destroyrectanglefraction1x7: function (index) {
        switch (index) {
            case 1: _this.rectangleBase1x7box1.visible = false;
                break;
            case 2: _this.rectangleBase1x7box2.visible = false;
                break;
            case 3: _this.rectangleBase1x7box3.visible = false;
                break;
            case 4: _this.rectangleBase1x7box4.visible = false;
                break;
            case 5: _this.rectangleBase1x7box5.visible = false;
                break;
            case 6: _this.rectangleBase1x7box6.visible = false;
                break;
            case 7: _this.rectangleBase1x7box7.visible = false;
                break;
            case 8: _this.rectangleBase1x7box8.visible = false;
                break;
            case 9: _this.rectangleBase1x7box9.visible = false;
                break;
            case 10: _this.rectangleBase1x7box10.visible = false;
                break;
            case 11: _this.rectangleBase1x7box11.visible = false;
                break;
            case 12: _this.rectangleBase1x7box12.visible = false;
                break;
            case 13: _this.rectangleBase1x7box13.visible = false;
                break;
            case 14: _this.rectangleBase1x7box14.visible = false;
                break;
        }
    },

    destroyrectanglefraction1x8: function (index) {
        switch (index) {
            case 1: _this.rectangleBase1x8box1.visible = false;
                break;
            case 2: _this.rectangleBase1x8box2.visible = false;
                break;
            case 3: _this.rectangleBase1x8box3.visible = false;
                break;
            case 4: _this.rectangleBase1x8box4.visible = false;
                break;
            case 5: _this.rectangleBase1x8box5.visible = false;
                break;
            case 6: _this.rectangleBase1x8box6.visible = false;
                break;
            case 7: _this.rectangleBase1x8box7.visible = false;
                break;
            case 8: _this.rectangleBase1x8box8.visible = false;
                break;
            case 9: _this.rectangleBase1x8box9.visible = false;
                break;
            case 10: _this.rectangleBase1x8box10.visible = false;
                break;
            case 11: _this.rectangleBase1x8box11.visible = false;
                break;
            case 12: _this.rectangleBase1x8box12.visible = false;
                break;
            case 13: _this.rectangleBase1x8box13.visible = false;
                break;
            case 14: _this.rectangleBase1x8box14.visible = false;
                break;
            case 15: _this.rectangleBase1x8box15.visible = false;
                break;
            case 16: _this.rectangleBase1x8box16.visible = false;
                break;
        }
    },

    destroyrectanglefraction1x9: function (index) {
        switch (index) {
            case 1: _this.rectangleBase1x9box1.visible = false;
                break;
            case 2: _this.rectangleBase1x9box2.visible = false;
                break;
            case 3: _this.rectangleBase1x9box3.visible = false;
                break;
            case 4: _this.rectangleBase1x9box4.visible = false;
                break;
            case 5: _this.rectangleBase1x9box5.visible = false;
                break;
            case 6: _this.rectangleBase1x9box6.visible = false;
                break;
            case 7: _this.rectangleBase1x9box7.visible = false;
                break;
            case 8: _this.rectangleBase1x9box8.visible = false;
                break;
            case 9: _this.rectangleBase1x9box9.visible = false;
                break;
            case 10: _this.rectangleBase1x9box10.visible = false;
                break;
            case 11: _this.rectangleBase1x9box11.visible = false;
                break;
            case 12: _this.rectangleBase1x9box12.visible = false;
                break;
            case 13: _this.rectangleBase1x9box13.visible = false;
                break;
            case 14: _this.rectangleBase1x9box14.visible = false;
                break;
            case 15: _this.rectangleBase1x9box15.visible = false;
                break;
            case 16: _this.rectangleBase1x9box16.visible = false;
                break;
            case 17: _this.rectangleBase1x9box17.visible = false;
                break;
            case 18: _this.rectangleBase1x9box18.visible = false;
                break;
        }
    },

    destroyEachFractions: function (fractionName) {
        switch (fractionName) {
            case '1x2traypiecespink': for (var i = 1; i <= _this.NumeratorValue; i++) {
                _this.destroysquarefraction1x2(i);
            }
                break;
            case '1x2traypiecesgreen': for (var i = 1; i <= _this.NumeratorValue; i++) {
                _this.destroycirclefraction1x2(i);
            }
                break;
            case '1x3traypiecesblue': for (var i = 1; i <= _this.NumeratorValue; i++) {
                _this.destroyrectanglefraction1x3(i);
            }
                break;
            case '1x3traypiecesgreen': for (var i = 1; i <= _this.NumeratorValue; i++) {
                _this.destroycirclefraction1x3(i);
            }
                break;

            case '1x4traypiecespink': for (var i = 1; i <= _this.NumeratorValue; i++) {
                _this.destroysquarefraction1x4(i);
            }
                break;

            case '1x4traypiecesblue': for (var i = 1; i <= _this.NumeratorValue; i++) {
                _this.destroyrectanglefraction1x4(i);
            }
                break;

            case '1x4traypiecesgreen': for (var i = 1; i <= _this.NumeratorValue; i++) {
                _this.destroycirclefraction1x4(i);
            }
                break;

            case '1x5traypieces': for (var i = 1; i <= _this.NumeratorValue; i++) {
                _this.destroyrectanglefraction1x5(i);
            }
                break;

            case '1x6traypieces': for (var i = 1; i <= _this.NumeratorValue; i++) {
                _this.destroyrectanglefraction1x6(i);
            }
                break;

            case '1x7traypieces': for (var i = 1; i <= _this.NumeratorValue; i++) {
                _this.destroyrectanglefraction1x7(i);
            }
                break;

            case '1x8traypieces': for (var i = 1; i <= _this.NumeratorValue; i++) {
                _this.destroyrectanglefraction1x8(i);
            }
                break;

            case '1x9traypieces': for (var i = 1; i <= _this.NumeratorValue; i++) {
                _this.destroyrectanglefraction1x9(i);
            }
                break;
        }

    },
    nextmixedfractionquestion: function () {
        _this.objGroup = _this.add.group();
        if (_this.NumeratorValue == 4 && _this.DenominatorValue == 2) {
            _this.new_quotient = 2;
            _this.new_remainder = 0;
            _this.new_denominator = 0;
            _this.displayNumberbox3();
        }
        else if (_this.NumeratorValue == 6 && _this.DenominatorValue == 3) {
            _this.new_quotient = 2;
            _this.new_remainder = 0;
            _this.new_denominator = 0;
            _this.displayNumberbox3();
        }
        else if (_this.NumeratorValue == 8 && _this.DenominatorValue == 4) {
            _this.new_quotient = 2;
            _this.new_remainder = 0;
            _this.new_denominator = 0;
            _this.displayNumberbox3();
        }
        else if (_this.NumeratorValue == 10 && _this.DenominatorValue == 5) {
            _this.new_quotient = 2;
            _this.new_remainder = 0;
            _this.new_denominator = 0;
            _this.displayNumberbox3();
        }
        else if (_this.NumeratorValue == 12 && _this.DenominatorValue == 6) {
            _this.new_quotient = 2;
            _this.new_remainder = 0;
            _this.new_denominator = 0;
            _this.displayNumberbox3();
        }
        else if (_this.NumeratorValue == 14 && _this.DenominatorValue == 7) {
            _this.new_quotient = 2;
            _this.new_remainder = 0;
            _this.new_denominator = 0;
            _this.displayNumberbox3();
        }
        else if (_this.NumeratorValue == 16 && _this.DenominatorValue == 8) {
            _this.new_quotient = 2;
            _this.new_remainder = 0;
            _this.new_denominator = 0;
            _this.displayNumberbox3();
        }
        else if (_this.NumeratorValue == 18 && _this.DenominatorValue == 9) {
            _this.new_quotient = 2;
            _this.new_remainder = 0;
            _this.new_denominator = 0;
            _this.displayNumberbox3();
        }
        else {
            _this.displayNumberbox2();
        }
        _this.qn_flag = 2;
        if (_this.count1 < 1)
            _this.askQn2();
        _this.time.events.add(2200, function () {
            _this.qn_flag = 2;
        });
    },

    nextquestion: function () {

        if (_this.count1 < 6) {
            _this.randomizing_elements(_this.possibleDen[_this.count1]);
        }
        else {
            console.log("here end");
            _this.timer1.stop();
            _this.timer1 = null;
            _this.time.events.add(1000, function () {
                //_this.state.start('score');
                _this.state.start('score', true, false,gameID,_this.microConcepts);
            });
        }
    },


    numberPad: function () {
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

        _this.numpadTween = _this.add.tween(_this.numGroup);
        //tween in the number pad after a second.
        _this.tweenNumPad();

    },

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        if (_this.enterFractionBox1.frame == 1 || _this.enterFractionBox2.frame == 1) {
            _this.eraseClicked1();
        }
        if (_this.enterWholeNumberBox.frame == 1) {
            _this.eraseClicked3();
        }
        if (_this.enterQuotientBox.frame == 1 || _this.enterRemainderBox.frame == 1 || _this.enterDenominatorBox.frame == 1) {
            _this.eraseClicked2();
        }

    },

    eraseClicked1: function (target) {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        if (_this.enterFractionBox1.frame == 1) {
            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            _this.enterTxt1;
            _this.enterTxt1 = null;
            _this.numerator = true;
            _this.whole = false;
            _this.denominator = undefined;
            _this.enterFractionBox1.frame = 1;

            _this.enterFractionBox1.inputEnabled = true;
            _this.enterFractionBox1.input.useHandCursor = true;

        }
        else if (_this.enterFractionBox2.frame == 1) {

            _this.enterFractionBox2.removeChild(_this.enterTxt2);
            _this.enterTxt2;
            _this.enterTxt2 = null;
            _this.numerator = undefined;
            _this.whole = false;
            _this.denominator = true;
            _this.enterFractionBox2.frame = 1;
            _this.enterFractionBox2.inputEnabled = true;
            _this.enterFractionBox2.input.useHandCursor = true;

        }
    },

    eraseClicked2: function (target) {
        console.log(_this.whole);
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';

        console.log(_this.enterDenominatorBox.frame, _this.enterRemainderBox.frame, _this.enterQuotientBox.frame);

        if (_this.enterDenominatorBox.frame == 1) {

            _this.enterDenominatorBox.removeChild(_this.enterTxt5);
            _this.enterTxt5;
            _this.enterTxt5 = null;
            _this.whole = false;
            _this.remainder_value = false;
            _this.quotient_value = false;
            _this.denominator_value = true;
            _this.enterDenominatorBox.frame = 1;

            _this.enterDenominatorBox.inputEnabled = true;
            _this.enterDenominatorBox.input.useHandCursor = true;
        }
        else if (_this.enterRemainderBox.frame == 1) {
            _this.enterRemainderBox.removeChild(_this.enterTxt4);
            _this.enterTxt4;
            _this.enterTxt4 = null;
            _this.whole = false;
            _this.remainder_value = true;
            _this.quotient_value = false;
            _this.denominator_value = false;
            _this.enterRemainderBox.frame = 1;

            _this.enterRemainderBox.inputEnabled = true;
            _this.enterRemainderBox.input.useHandCursor = true;
        }
        else if (_this.enterQuotientBox.frame == 1) {
            _this.enterQuotientBox.removeChild(_this.enterTxt3);
            _this.enterTxt3;
            _this.enterTxt3 = null;
            _this.whole = false;
            _this.remainder_value = false;
            _this.quotient_value = true;
            _this.denominator_value = false;
            _this.enterQuotientBox.frame = 1;

            _this.enterQuotientBox.inputEnabled = true;
            _this.enterQuotientBox.input.useHandCursor = true;

        }
    },

    eraseClicked3: function () {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.wholeQ = false;
        if (_this.enterWholeNumberBox.frame == 1) {

            _this.enterWholeNumberBox.removeChild(_this.enterTxt6);
            _this.enterTxt6;
            _this.enterTxt6 = null;
            _this.whole = true;
            _this.enterWholeNumberBox.frame = 1;

            _this.enterWholeNumberBox.inputEnabled = true;
            _this.enterWholeNumberBox.input.useHandCursor = true;

        }
    },
    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },
    numClicked: function (target) {
        //_this.rightbtn.inputEnabled = false;
        //_this.rightbtn.events.onInputDown.removeAll();
        console.log(_this.denominator, _this.numerator);
        console.log(_this.denominator, _this.numerator);
        console.log(_this.enterTxt1);

        _this.clickSound.play();
        console.log(target.name);
        console.log(_this.selectedAns2, _this.selectedAns1);
        if (_this.selectedAns2 === '') {
            //            console.log(target.name);
            if (_this.selectedAns1 === 0 && target.name !== 0) {
                _this.selectedAns2 = target.name;
                console.log(_this.selectedAns2);
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

        if (_this.selectedAns1 === 10) var_selectedAns1 = 0;
        else var_selectedAns1 = _this.selectedAns1;
        if (_this.selectedAns2 === 10) _this.selectedAns2 = 0;
        else var_selectedAns2 = _this.selectedAns2;


        if (_this.selectedAns1 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns1;

        if (_this.selectedAns2 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns2;

        if (_this.denominator == true) {
            _this.enterFractionBox2.removeChild(_this.enterTxt2);
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 0) {
                _this.enterTxt2 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt2.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt2.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            else if (Number('' + _this.selectedAns1) == 0 && Number('' + _this.selectedAns2) < 10) {
                _this.enterTxt2 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt2.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt2.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) {
                _this.enterTxt2 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt2.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt2.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) >= 10) {
                _this.enterTxt2 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt2.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt2.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            //_this.enterFractionBox2.frame=0;
            _this.denom = true;
            _this.enterFractionBox2.addChild(_this.enterTxt2);
            _this.enterFractionBox2.name = _this.enterTxt2.name;
            _this.enterTxt2.align = 'right';
            _this.enterTxt2.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt2.fill = '#65B4C3';
            _this.enterTxt2.fontWeight = 'Normal';
            _this.enterTxt2.visible = true;
        }
        else if (_this.numerator == true) {
            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 0) {
                _this.enterTxt1 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//20,10
                _this.enterTxt1.name = Number('' + var_selectedAns1 + var_selectedAns2);

            }
            else if (Number('' + _this.selectedAns1) == 0 && Number('' + _this.selectedAns2) < 10) {
                _this.enterTxt1 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt1.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt1.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) {
                _this.enterTxt1 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//20,10
                _this.enterTxt1.name = Number('' + var_selectedAns1 + var_selectedAns2);

            }
            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) >= 10) {
                _this.enterTxt1 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//36 23
                _this.enterTxt1.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }
            _this.num = true;
            _this.enterFractionBox1.addChild(_this.enterTxt1);
            _this.enterFractionBox1.name = _this.enterTxt1.name;
            console.log(_this.enterTxt1.name);

            _this.enterTxt1.align = 'right';
            _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt1.fill = '#65B4C3';
            _this.enterTxt1.fontWeight = 'Normal';
            _this.enterTxt1.visible = true;
            //}  

        }
        else if (_this.denominator_value == true) {
            // _this.enterDenominatorBox.frame = 0;
            _this.enterDenominatorBox.removeChild(_this.enterTxt5);
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 0) {
                _this.enterTxt5 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt5.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt5.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            else if (Number('' + _this.selectedAns1) == 0 && Number('' + _this.selectedAns2) < 10) {
                _this.enterTxt5 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt5.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt5.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) {
                _this.enterTxt5 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt5.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt5.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            else if (Number('' + var_selectedAns1 + var_selectedAns2) >= 10) {
                _this.enterTxt5 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt5.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt5.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            _this.denom1 = true;
            _this.enterDenominatorBox.addChild(_this.enterTxt5);
            _this.enterDenominatorBox.name = _this.enterTxt5.name;
            _this.enterTxt5.align = 'right';
            _this.enterTxt5.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt5.fill = '#65B4C3';
            _this.enterTxt5.fontWeight = 'Normal';
            _this.enterTxt5.visible = true;

        }
        else if (_this.remainder_value == true) {
            // _this.enterRemainderBox.frame = 0;
            _this.enterRemainderBox.removeChild(_this.enterTxt4);
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 0) {
                _this.enterTxt4 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt4.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt4.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            else if (Number('' + _this.selectedAns1) == 0 && Number('' + _this.selectedAns2) < 10) {
                _this.enterTxt4 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt4.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt4.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) {
                _this.enterTxt4 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt4.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt4.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            else if (Number('' + var_selectedAns1 + var_selectedAns2) >= 10) {
                _this.enterTxt4 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt4.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt4.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            _this.rem1 = true;
            _this.enterRemainderBox.addChild(_this.enterTxt4);
            _this.enterRemainderBox.name = _this.enterTxt4.name;
            _this.enterTxt4.align = 'right';
            _this.enterTxt4.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt4.fill = '#65B4C3';
            _this.enterTxt4.fontWeight = 'Normal';
            _this.enterTxt4.visible = true;

        }
        else if (_this.quotient_value == true) {
            //_this.enterQuotientBox.frame = 0;
            _this.enterQuotientBox.removeChild(_this.enterTxt3);
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 0) {
                _this.enterTxt3 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt3.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt3.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            else if (Number('' + _this.selectedAns1) == 0 && Number('' + _this.selectedAns2) < 10) {
                _this.enterTxt3 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt3.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt3.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) {
                _this.enterTxt3 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt3.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt3.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            else if (Number('' + var_selectedAns1 + var_selectedAns2) >= 10) {
                _this.enterTxt3 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt3.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt3.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            _this.quo1 = true;
            _this.enterQuotientBox.addChild(_this.enterTxt3);
            _this.enterQuotientBox.name = _this.enterTxt3.name;
            _this.enterTxt3.align = 'right';
            _this.enterTxt3.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt3.fill = '#65B4C3';
            _this.enterTxt3.fontWeight = 'Normal';
            _this.enterTxt3.visible = true;

        }
        else if (_this.whole == true) {
            console.log(_this.enterWholeNumberBox);
            _this.enterWholeNumberBox.removeChild(_this.enterTxt6);
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == 0) {
                _this.enterTxt6 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//20,10
                _this.enterTxt6.name = Number('' + var_selectedAns1 + var_selectedAns2);

            }
            else if (Number('' + _this.selectedAns1) == 0 && Number('' + _this.selectedAns2) < 10) {
                _this.enterTxt6 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt6.name = Number('' + var_selectedAns1 + var_selectedAns2);
                console.log(_this.enterTxt6.name);
                console.log(Number('' + var_selectedAns1 + var_selectedAns2));
            }
            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) {
                _this.enterTxt6 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//20,10
                _this.enterTxt6.name = Number('' + var_selectedAns1 + var_selectedAns2);

            }
            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) >= 10) {
                _this.enterTxt6 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//36 23
                _this.enterTxt6.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }
            _this.wholeQ = true;
            _this.enterWholeNumberBox.addChild(_this.enterTxt6);
            _this.enterWholeNumberBox.name = _this.enterTxt6.name;
            console.log(_this.enterTxt6.name);
            _this.enterTxt6.align = 'right';
            _this.enterTxt6.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt6.fill = '#65B4C3';
            _this.enterTxt6.fontWeight = 'Normal';
            _this.enterTxt6.visible = true;
        }

        _this.num = false;
    },

    rightbtnClicked: function () {
        _this.clickSound.play();
        // _this.rightbtn.inputEnabled = false;
        // _this.rightbtn.input.useHandCursor = false;
        // _this.rightbtn_is_Clicked=true;
        console.log(_this.denominator, _this.numerator, _this.enterFractionBox1.frame, _this.enterFractionBox2.frame);
        if (_this.denominator == true || _this.numerator == true || _this.enterFractionBox1.frame == 1 || _this.enterFractionBox2.frame == 1) {
            if (_this.enterTxt1 == null || _this.enterTxt2 == null) {
                _this.wrongSound.play();
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
                _this.enterFractionBox1.removeChild(_this.enterTxt1);
                _this.enterFractionBox2.removeChild(_this.enterTxt2);
                if (_this.enterTxt1 != null) {
                    _this.enterTxt1.destroy();
                    _this.enterTxt1 = null;
                }
                else if (_this.enterTxt2 != null) {
                    _this.enterTxt2.destroy();
                    _this.enterTxt2 = null;
                }
                _this.enableBoxes();
            }

            else {
                console.log(_this.DenominatorValue, Number(_this.enterTxt1.name));
                if (Number(_this.enterTxt2.name) == _this.DenominatorValue && Number(_this.enterTxt1.name) == _this.NumeratorValue) {
                    _this.counterCelebrationSound.play();
                    console.log(_this.DenominatorValue);
                    _this.selectedAns1 = '';
                    _this.selectedAns2 = '';
                    _this.enterFractionBox1.frame = 0;
                    _this.enterFractionBox2.frame = 0;
                    _this.enterFractionBox1.removeChild(_this.enterTxt1);
                    _this.enterFractionBox2.removeChild(_this.enterTxt2);
                    _this.enterTxt1 = null;
                    _this.enterTxt2 = null;
                    _this.enterFractionBox1.visible = false;
                    _this.enterFractionBox2.visible = false;
                    _this.AnswerBox1.destroy();
                    _this.nextmixedfractionquestion();
                }
                else if (Number(_this.enterTxt2.name) != _this.DenominatorValue || Number(_this.enterTxt1.name) != _this.NumeratorValue) {
                    _this.wrongSound.play();
                    _this.selectedAns1 = '';
                    _this.selectedAns2 = '';
                    _this.enterFractionBox1.removeChild(_this.enterTxt1);
                    _this.enterFractionBox2.removeChild(_this.enterTxt2);
                    _this.enterTxt1.destroy();
                    _this.enterTxt2.destroy();
                    _this.enterTxt1 = null;
                    _this.enterTxt2 = null;
                    _this.enableBoxes();
                }
                else {
                    _this.wrongSound.play();
                    _this.selectedAns1 = '';
                    _this.selectedAns2 = '';
                    _this.enterFractionBox1.removeChild(_this.enterTxt1);
                    _this.enterFractionBox2.removeChild(_this.enterTxt2);
                    _this.enterTxt1.destroy();
                    _this.enterTxt2.destroy();
                    _this.enterTxt1 = null;
                    _this.enterTxt2 = null;
                    _this.enableBoxes();
                }
            }
        }
        else {
            if (_this.whole == true) {
                if (_this.whole == true && _this.enterTxt6 == null) {
                    _this.wrongSound.play();
                    _this.selectedAns1 = '';
                    _this.selectedAns2 = '';
                    _this.enterWholeNumberBox.removeChild(_this.enterTxt6);
                    // _this.enterTxt6.destroy();
                    //_this.enterTxt6 = null;
                    _this.enablebox();
                }
                else {
                    _this.noofAttempts++;
                    if (_this.whole == true && _this.enterTxt6.name == _this.new_quotient) {
                        telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                        console.log(_this.enterTxt6.name);
                        _this.whole = false;
                        _this.celebration();
                        _this.selectedAns1 = '';
                        _this.selectedAns2 = '';
                        _this.enterWholeNumberBox.frame = 0;
                        _this.enterWholeNumberBox.removeChild(_this.enterTxt6);
                        _this.enterTxt6 = null;
                        _this.enterWholeNumberBox.visible = false;
                        _this.destroyEachFractions(_this.fractionName);
                        _this.fractionGroup.destroy();
                        _this.emptyBox1.visible = false;
                        _this.emptyBox2.visible = false;
                        _this.trayBox.visible = false;
                        _this.fractionBox.destroy();
                        _this.graphicsEq1.destroy();
                        _this.graphicsEq2.destroy();
                        _this.AnswerBox3.destroy();
                        _this.displaynumerator2.destroy();
                        _this.displaydenominator2.destroy();
                        _this.numGroup.destroy();
                        _this.dragTweenObject.destroy();
                        _this.time.events.add(2000, function () {
                            _this.nextquestion();
                        });
                    }
                    else {
                        _this.wrongSound.play();
                        _this.selectedAns1 = '';
                        _this.selectedAns2 = '';
                        _this.enterWholeNumberBox.removeChild(_this.enterTxt6);
                        _this.enterTxt6.destroy();
                        _this.enterTxt6 = null;
                        _this.enablebox();
                    }
                }
            }
            else if (_this.enterTxt3 == null || _this.enterTxt4 == null || _this.enterTxt5 == null) {
                _this.wrongSound.play();
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
                _this.enterQuotientBox.removeChild(_this.enterTxt3);
                _this.enterRemainderBox.removeChild(_this.enterTxt4);
                _this.enterDenominatorBox.removeChild(_this.enterTxt5);
                if (_this.enterTxt3 != null) {
                    _this.enterTxt3.destroy();
                    _this.enterTxt3 = null;
                }
                if (_this.enterTxt4 != null) {
                    _this.enterTxt4.destroy();
                    _this.enterTxt4 = null;
                }
                if (_this.enterTxt5 != null) {
                    _this.enterTxt5.destroy();
                    _this.enterTxt5 = null;
                }
                _this.mixed_enableBoxes();
            }
            else {
                _this.noofAttempts++;
                if (Number(_this.enterTxt3.name) == _this.quotient && Number(_this.enterTxt4.name) == _this.remainder && Number(_this.enterTxt5.name) == _this.DenominatorValue) {
                    telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                    _this.celebration();
                    _this.selectedAns1 = '';
                    _this.selectedAns2 = '';
                    _this.enterQuotientBox.frame = 0;
                    _this.enterRemainderBox.frame = 0;
                    _this.enterDenominatorBox.frame = 0;
                    _this.enterQuotientBox.removeChild(_this.enterTxt3);
                    _this.enterRemainderBox.removeChild(_this.enterTxt4);
                    _this.enterDenominatorBox.removeChild(_this.enterTxt5);
                    _this.enterTxt3 = null;
                    _this.enterTxt4 = null;
                    _this.enterTxt5 = null;
                    _this.enterQuotientBox.visible = false;
                    _this.enterRemainderBox.visible = false;
                    _this.enterDenominatorBox.visible = false;
                    _this.destroyEachFractions(_this.fractionName);
                    _this.fractionGroup.destroy();
                    _this.emptyBox1.visible = false;
                    _this.emptyBox2.visible = false;
                    _this.trayBox.visible = false;
                    _this.graphics1.destroy();
                    _this.AnswerBox2.destroy();
                    _this.displaynumerator1.destroy();
                    _this.displaydenominator1.destroy();
                    _this.numGroup.destroy();
                    _this.dragTweenObject.destroy();

                    _this.time.events.add(2000, function () {
                        _this.nextquestion();
                    });

                }
                else if (Number(_this.enterTxt3.name) == _this.new_quotient && Number(_this.enterTxt4.name) == _this.new_remainder && Number(_this.enterTxt5.name) == _this.new_denominator) {
                    telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                    _this.celebration();
                    _this.selectedAns1 = '';
                    _this.selectedAns2 = '';
                    _this.enterQuotientBox.frame = 0;
                    _this.enterRemainderBox.frame = 0;
                    _this.enterDenominatorBox.frame = 0;
                    _this.enterQuotientBox.removeChild(_this.enterTxt3);
                    _this.enterRemainderBox.removeChild(_this.enterTxt4);
                    _this.enterDenominatorBox.removeChild(_this.enterTxt5);
                    _this.enterTxt3 = null;
                    _this.enterTxt4 = null;
                    _this.enterTxt5 = null;
                    _this.enterQuotientBox.visible = false;
                    _this.enterRemainderBox.visible = false;
                    _this.enterDenominatorBox.visible = false;
                    _this.destroyEachFractions(_this.fractionName);
                    _this.fractionGroup.destroy();
                    _this.emptyBox1.visible = false;
                    _this.emptyBox2.visible = false;
                    _this.trayBox.visible = false;
                    _this.graphics1.destroy();
                    _this.AnswerBox2.destroy();
                    _this.displaynumerator1.destroy();
                    _this.displaydenominator1.destroy();
                    _this.numGroup.destroy();
                    _this.dragTweenObject.destroy();
                    _this.time.events.add(2000, function () {
                        _this.nextquestion();
                    });
                }
                else if (Number(_this.enterTxt3.name) != _this.new_quotient || Number(_this.enterTxt4.name) != _this.new_remainder || Number(_this.enterTxt5.name) != _this.new_denominator) {
                    _this.wrongSound.play();
                    _this.selectedAns1 = '';
                    _this.selectedAns2 = '';

                    _this.enterQuotientBox.removeChild(_this.enterTxt3);
                    _this.enterRemainderBox.removeChild(_this.enterTxt4);
                    _this.enterDenominatorBox.removeChild(_this.enterTxt5);
                    _this.enterTxt3.destroy();
                    _this.enterTxt4.destroy();
                    _this.enterTxt5.destroy();
                    _this.enterTxt3 = null;
                    _this.enterTxt4 = null;
                    _this.enterTxt5 = null;
                    _this.mixed_enableBoxes();
                }

                else if (Number(_this.enterTxt3.name) != _this.quotient || Number(_this.enterTxt4.name) != _this.remainder || Number(_this.enterTxt5.name) != _this.DenominatorValue) {
                    _this.wrongSound.play();
                    _this.selectedAns1 = '';
                    _this.selectedAns2 = '';
                    _this.enterQuotientBox.removeChild(_this.enterTxt3);
                    _this.enterRemainderBox.removeChild(_this.enterTxt4);
                    _this.enterDenominatorBox.removeChild(_this.enterTxt5);
                    _this.enterTxt3.destroy();
                    _this.enterTxt4.destroy();
                    _this.enterTxt5.destroy();
                    _this.enterTxt3 = null;
                    _this.enterTxt4 = null;
                    _this.enterTxt5 = null;
                    _this.mixed_enableBoxes();
                }

                else {
                    _this.wrongSound.play();
                    _this.selectedAns1 = '';
                    _this.selectedAns2 = '';
                    _this.enterQuotientBox.removeChild(_this.enterTxt3);
                    _this.enterRemainderBox.removeChild(_this.enterTxt4);
                    _this.enterDenominatorBox.removeChild(_this.enterTxt5);
                    _this.enterTxt3.destroy();
                    _this.enterTxt4.destroy();
                    _this.enterTxt5.destroy();
                    _this.enterTxt3 = null;
                    _this.enterTxt4 = null;
                    _this.enterTxt5 = null;
                    _this.mixed_enableBoxes();
                }
            }
        }

    },


    //* functions related to showing the demo video. 
    //* the game is paused before calling this. Once the demo video 
    //* completes or skip button is pressed, it makes _this.game.paused = false.

    DemoVideo: function () {
        //* You will understand the relationship between improper and mixed fractions in this game 
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-8-G6/" +
            _this.languageSelected + "/NSF-8-G6-demo.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* Drag and count pieces
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-8-G6/" +
            _this.languageSelected + "/NSF-8-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* What is the improper fraction shown here ?
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-8-G6/" +
            _this.languageSelected + "/NSF-8-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* Enter the mixed fraction
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-8-G6/" +
            _this.languageSelected + "/NSF-8-G6-c.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        _this.showDemoVideo();  //* call the function to show the video

        // _this.backbtn1 = _this.add.sprite(10, 6, 'backbtn');
        // _this.backbtn1.inputEnabled = true;
        // _this.backbtn1.input.useHandCursor = true;
        // _this.backbtn1.events.onInputDown.add(function ()
        // {   
        //     _this.clickSound.play();
        //     //_this.stopVideo();
        //     _this.stopAudio();
        //     _this.game.paused = false;
        //     _this.state.start('grade6NumberSystems',true,false);
        // });

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.clickSound.play();
            //_this.stopVideo();
            _this.stopAudio();
            _this.videoWorld.destroy();
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

        if (_this.dvTimer1) clearTimeout(_this.dvTimer1);
        if (_this.dvTimer2) clearTimeout(_this.dvTimer2);

        if (_this.demoAudio1) {
            console.log("removing the demo audio1");
            _this.demoAudio1.removeEventListener('ended', _this.dA1);
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
            console.log("removing the q2");
            _this.q3Sound.pause();
            _this.q3Sound = null;
            _this.q3Soundsrc = null;
        }

        // _this.backbtn1.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                   //* skip button destroyed
        //  _this.backbtn1.destroy();               //* backbutton button destroyed
    },

    //* event functions for demo audio and question audios. 
    //* do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    dA1: function () {
        console.log("inside dA1.");
        _this.q1Sound.play();    //* play the first question after demo audio is done playing
    },

    showDemoVideo: function () {
        //* As _this.game is paused, phaser time events cannot be used since its timer is stopped.
        //* so we have to use js timers as required

        _this.demoAudio1.play();
        _this.demoVideo_1 = _this.add.video('nsf8_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSF-8-G6_1.mp4");
        _this.videoWorld = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.addEventListener('ended', _this.dA1);  //* after demoAudio is played, start q1

        _this.dvTimer1 = setTimeout(function ()    //* play the third question after 20 seconds of playing video
        {
            clearTimeout(_this.dvTimer1);
            _this.q2Sound.play();
        }, 20000);

        _this.dvTimer2 = setTimeout(function ()    //* play the second question after 30 seconds of playing video
        {
            clearTimeout(_this.dvTimer2);
            _this.q3Sound.play();
        }, 30000);

        _this.demoVideo_1.onComplete.add(function ()   //* on completion of demovideo close the video
        {
            _this.stopAudio();                  //* stop timers and audios
            _this.demoVideo_1.stop(false);      //* stop video.
            _this.videoWorld.destroy();         //* destroy the video, gets removed from screen.
            _this.game.paused = false;          //* now, unpause the game, so that it continues.
        });
    }
}

//* video related commands
//        _this.video.changeSource("assets/demoVideos/7_1_1.mp4");
//        _this.videoWorld = this.video.addToWorld();
//        _this.video2.stop(false);
//        _this.video2.onComplete.add(function() {})
//        _this.video3.playbackRate = 1;
//        _this.game.paused = true; //* pauses the game.
//        _this.videoWorld.destroy(); //* removes video from screen   



