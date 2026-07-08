Game.NSF_7_G6level1 = function () { };


Game.NSF_7_G6level1.prototype =
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

        _this.giveShadeSound = document.createElement('audio');
        _this.giveShadeSoundsrc = document.createElement('source');
        _this.giveShadeSoundsrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.giveShadeSound.appendChild(_this.giveShadeSoundsrc);

        _this.nextOptionSound = document.createElement('audio');
        _this.nextOptionSoundsrc = document.createElement('source');
        _this.nextOptionSoundsrc.setAttribute("src", window.baseUrl + "sounds/Next_option_sound.mp3");
        _this.nextOptionSound.appendChild(_this.nextOptionSoundsrc);


        telInitializerbbpp.gameIdInit("NSF_7_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },


    create: function (game) {

        //* show the demo video
        _this.time.events.add(1, function () {
            _this.ViewDemoVideo();
        });

        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        _this.time.events.add(600, function () {
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
        _this.count = 0;
        //_this.in;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        //  //* User Progress variables for BB++ app
        //  _this.userHasPlayed = 0;
        //  _this.timeinMinutes;
        //  _this.timeinSeconds;
        //  _this.game_id;
        //  _this.score = 0;
        //  _this.gradeTopics;
          _this.microConcepts;
        //  _this.grade;

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;
        _this.qn_flag = -1;

        //** include the background file, navigation bar, stars, timer objects.
        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        _this.navBar = _this.add.sprite(0, 0, 'navBar');
        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

        _this.backbtn = _this.add.sprite(10, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.stopVoice();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50, function () {
                _this.state.start('grade6NumberSystems', true, false);
            });
        });

        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                console.log(_this.speakerbtnClicked);
                console.log(_this.rightbtn_is_Clicked);
                console.log(_this.qn_flag);
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                if (_this.qn_flag == 1) {
                    _this.voiceNote1();
                }
                if (_this.qn_flag == 2) {
                    _this.voiceNote2();
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

        //* include variables for use - objGroup (where cube objects can be added)
        _this.objGroup;
        _this.numGroup;

        //* first digit and second digit of number selected on number pad
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';

        // _this.enterTxt1 = "";
        // _this.enterTxt2 = "";

        //* Horizontal or Vertical cubes to be shown for shuffling. 1 - Horizontal, 2 - Vertical.
        _this.HzOrVertArray = [2, 1, 1, 1, 1, 1];

        //*array for create 28 instance 
        _this.elementArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 24, 26, 27, 28];
        _this.elementArray2 = [1, 1, 2, 2, 3, 3]; // 1 - equal 2 - greter 3 - lesser
        // _this.elementArray3=[1,2,3,4,5,6,25]
        // _this.elementArray4=[1,2,3,5];

        _this.eleArray1_ver = [1, 2, 3, 5, 8, 9, 10];//equal
        _this.eleArray2_ver = [1, 2, 3, 4, 5, 7, 8, 9];//greater 10
        _this.eleArray3_ver = [1, 2, 3, 5, 6, 8, 9, 11];//lesser

        _this.elementArray1_Vertical = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        //*x coordinate for upper cubes
        _this.Upper_Hz_X = [111, 145, 179, 213, 247, 281, 315, 349];//[128,162,196,230,264,298,332,366];
        _this.Upper_Hz_Y = 140;

        _this.Upper_Ver_X = 195; //170
        _this.Upper_Ver_Y = [350, 316, 282, 248, 214, 180, 146];


        _this.ws_Hz_X = [67, 101, 135, 169, 203, 237, 271, 305, 339, 373, 407, 441, 475, 509, 543, 577, 611];
        _this.ws_lowerCubes_Y = 125;
        _this.ws_UpperCubes_Y = 30;

        _this.ws_Ver_X = 300; //370
        _this.ws_Ver_Y = [350, 316, 282, 248, 214, 180];

        _this.Lower_Hz_X = [110, 144, 178, 212, 246, 280, 314, 348, 382, 416, 450, 484, 518, 552, 586, 620, 654];//[106,140,174,208,242,276,310,344,378,412,446,480,514,548,582,616,650];
        _this.Lower_Hz_Y = 420;

        _this.Lower_Ver_X = 480; //455
        _this.Lower_Ver_Y = [350, 316, 282, 248, 214, 180];

        _this.lengthMatch = false;
        _this.tickbtn = false;
        _this.tweenCount = 0; // calculate demo only once
        //*array to decide how many numbers equivalent and non equivqlent factor
        _this.Equivalent_NonEquivalentArray = [1, 2, 3, 4];
        //* start the game with first question

        _this.time.events.add(1000, _this.getQuestion);
    },

    //* function to enable the speaker button once pressed.
    EnableVoice: function () {
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
        //timer.setText(minutes + ':'+ seconds );
    },

    shuffle: function (array) {
        //console.log('hi');
        var currentIndex = array.length, temporaryValue, randomIndex;
        //console.log('_this.currentIndex');

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

        //* randomize the numbers, horizontal or vertical box and decide numerator and denominator

        //_this.Decide_Nonequi_Fractions();
        _this.randomizing_elements();
        if (_this.HzOrVertArray[_this.count1] == 1) {
            _this.gotoEachinstance(_this.elementArray1[0]);
            console.log("paaing num into gotoEachinstance: " + _this.elementArray1[0])
            _this.Decide_Fractions();
        }
        else if (_this.HzOrVertArray[_this.count1] == 2) {
            if (_this.elementArray2[_this.count1] == 1) {
                _this.gotoEachinstance_Vertical(_this.eleArray1_ver[_this.count1]);
            }
            else if (_this.elementArray2[_this.count1] == 2) {
                _this.gotoEachinstance_Vertical(_this.eleArray2_ver[_this.count1]);
            }
            else if (_this.elementArray2[_this.count1] == 3) {
                _this.gotoEachinstance_Vertical(_this.eleArray3_ver[_this.count1]);
            }
            _this.Decide_Fractions();
        }
        _this.gotoFractions();

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

    gotoFractions: function () {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
        //* get  vertical / horizontal from the array shuffled.
        //_this.HzOrVert = _this.HzOrVertArray[ use index varialbe used for this array];        
        //* load the initial screen here options and question will display
        _this.LoadInitialScreen();
        if (_this.count1 == 0) {
            _this.voiceNote1();
        }

        _this.time.events.add(100, _this.show_drag_action);
        //_this.show_drag_action
        //* with a delay enabling the every option box         
        //* add a delay if reqquired and show number pad
        _this.time.events.add(1000, function () {
            _this.qn_flag = 1;
            //_this.enable_options();
            //_this.create_Qncubes();
            _this.createUpperCubes();
            _this.createLowerCubes();
            if (_this.count1 == 0 && _this.tweenCount == 0) {
                _this.drag_cubesAction_WS_Ver();
                _this.tweenCount++;

            }
            _this.time.events.add(1100, _this.Check_Dragenable_cubes);

        });


    },

    voiceNote1: function () {
        _this.stopVoice();
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-7-G6/" +
            _this.languageSelected + "/NSF-7-G6-a.mp3");
        _this.Question1.appendChild(_this.Question1src);

        _this.Question1.play();
    },

    voiceNote2: function () {
        _this.stopVoice();
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NSF-7-G6/" +
            _this.languageSelected + "/NSF-7-G6-b.mp3");
        _this.Question2.appendChild(_this.Question2src);

        _this.Question2.play();
    },

    createUpperCubes: function () {
        _this.objGroup2.destroy();
        console.log("hhhh");

        _this.upperCubeGrpCpy = _this.add.group();
        _this.upperCubeGrp = _this.add.group();
        _this.Array_Uppercube = [];

        if (_this.HzOrVertArray[_this.count1] == 1) {
            for (i = 0; i < _this.upper_denominator; i++) {
                _this.UpperCube = _this.upperCubeGrp.create(_this.ws_Hz_X[i] - 49, 30, 'YG_Hz');
                _this.UpperCube.name = i;
                _this.Array_Uppercube[i] = _this.UpperCube.name;
                _this.UpperCube.frame = 0;

                //* create a copy of the selected cube group in workspace. it will sit behind Qstion group in WS
                UpperCubeCpy = _this.upperCubeGrpCpy.create(_this.ws_Hz_X[i] - 49, 30, 'YG_Hz');
                UpperCubeCpy.name = "" + i;
                UpperCubeCpy.frame = 0;
            }
            _this.bigBox.addChild(_this.upperCubeGrpCpy);
            _this.bigBox.addChild(_this.upperCubeGrp);
        }
        else {
            console.log("here");
            for (i = 0; i < _this.upper_denominator; i++) {
                console.log(_this.upper_denominator);
                _this.UpperCube = _this.upperCubeGrp.create(_this.ws_Ver_X, _this.ws_Ver_Y[i], 'YG_Ver');
                _this.UpperCube.name = i;
                _this.Array_Uppercube[i] = _this.UpperCube.name;
                _this.UpperCube.frame = 0;

                //* create a copy of the selected cube group in workspace. it will sit behind Qstion group in WS
                UpperCubeCpy = _this.upperCubeGrpCpy.create(_this.ws_Ver_X, _this.ws_Ver_Y[i], 'YG_Ver');
                UpperCubeCpy.name = "" + i;
                UpperCubeCpy.frame = 0;

            }
        }

        for (k = _this.upperCubeGrp.length - 1; k >= _this.upper_denominator - _this.upper_numerator; k--) {
            _this.upperCubeGrp.getChildAt(k).frame = 1;
            _this.upperCubeGrpCpy.getChildAt(k).frame = 1;
        }


    },

    createLowerCubes: function () {
        _this.objGroup4.destroy();
        _this.lowerCubeGrpCpy = _this.add.group();
        _this.lowerCubeGrp = _this.add.group();

        _this.Array_Lowercube = [];
        console.log("hhhh");
        if (_this.HzOrVertArray[_this.count1] == 1) {
            for (i = 0; i < _this.lower_denominator; i++) {
                console.log("hhhh");
                _this.lowercube = _this.lowerCubeGrp.create(_this.ws_Hz_X[i] - 49, _this.ws_lowerCubes_Y, 'YB_Hz');
                _this.lowercube.name = i;
                _this.Array_Lowercube[i] = _this.lowercube.name;
                _this.lowercube.frame = 0;

                LowerCubeCpy = _this.lowerCubeGrpCpy.create(_this.ws_Hz_X[i] - 49, _this.ws_lowerCubes_Y, 'YB_Hz');
                LowerCubeCpy.name = "" + i;
                LowerCubeCpy.frame = 0;
            }
            _this.bigBox.addChild(_this.lowerCubeGrpCpy);
            _this.bigBox.addChild(_this.lowerCubeGrp);

        }
        else {
            for (i = 0; i < _this.lower_denominator; i++) {
                _this.lowercube = _this.lowerCubeGrp.create(_this.ws_Ver_X + 90, _this.ws_Ver_Y[i], 'YB_Ver');
                _this.lowercube.name = i;
                _this.Array_Lowercube[i] = _this.lowercube.name;
                _this.lowercube.frame = 0;

                LowerCubeCpy = _this.lowerCubeGrpCpy.create(_this.ws_Ver_X + 90, _this.ws_Ver_Y[i], 'YB_Ver');
                LowerCubeCpy.name = "" + i;
                LowerCubeCpy.frame = 0;
            }

        }
        for (k = _this.lowerCubeGrp.length - 1; k >= _this.lower_denominator - _this.lower_numerator; k--) {
            //*add cube image for num with diff clr cube
            _this.lowerCubeGrp.getChildAt(k).frame = 1;
            _this.lowerCubeGrpCpy.getChildAt(k).frame = 1;
            //* add to questionCubeGroup                    
        }

    },

    checkOverlap: function (spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },

    enableSymbols: function () {
        console.log("hello");
        _this.AnsBox.frame = 1;
        //_this.tickbtn.frame = 0;


        _this.greaterSym.inputEnabled = true;
        _this.greaterSym.input.useHandCursor = true;
        _this.greaterSym.events.onInputDown.add(_this.greaterSymClicked, _this.greaterSym);
        _this.greaterSym.name = 3;

        _this.lesserSym.inputEnabled = true;
        _this.lesserSym.input.useHandCursor = true;
        _this.lesserSym.events.onInputDown.add(_this.lesserSymClicked, _this.lesserSym);
        _this.lesserSym.name = 2;

        _this.equalSym.inputEnabled = true;
        _this.equalSym.input.useHandCursor = true;
        _this.equalSym.events.onInputDown.add(_this.equalSymClicked, _this.equalSym);
        _this.equalSym.name = 1;
    },

    greaterSymClicked: function (target) {
        _this.lesserSym.frame = 0;
        _this.equalSym.frame = 0;
        _this.vx = target.x;
        _this.vy = target.y;
        target.frame = 1;
        _this.clickSound.play();
        target.input.enableDrag(true);
        target.events.onDragStop.add(_this.checkoverlap_placing, _this.greaterSym);
    },

    lesserSymClicked: function (target) {
        _this.vx = target.x;
        _this.vy = target.y;
        target.frame = 1;
        _this.equalSym.frame = 0;
        _this.greaterSym.frame = 0;
        _this.clickSound.play();
        target.input.enableDrag(true);
        target.events.onDragStop.add(_this.checkoverlap_placing, _this.lesserSym);
    },

    equalSymClicked: function (target) {
        _this.vx = target.x;
        _this.vy = target.y;
        target.frame = 1;
        _this.greaterSym.frame = 0;
        _this.lesserSym.frame = 0;
        _this.clickSound.play();
        target.input.enableDrag(true);
        target.events.onDragStop.add(_this.checkoverlap_placing, _this.equalSym);
    },

    checkoverlap_placing: function (target) {
        if (_this.checkOverlap(target, _this.AnsBox)) {
            _this.AnsBox.removeChild(_this.AnsSym);
            console.log(_this.AnsBox.name);
            target.frame = 0;
            if (target.name == 1) {
                equals = _this.add.text(17, 10, "=");
                equals.fill = "#FF0000";
                _this.AnsSym = equals;
                _this.AnsBox.addChild(equals);
            }
            else if (target.name == 2) {
                lesser = _this.add.text(16, 10, "<");
                lesser.fill = "#FF0000";
                _this.AnsSym = lesser;
                _this.AnsBox.addChild(lesser);
            }
            else if (target.name == 3) {
                greater = _this.add.text(18, 10, ">");
                greater.fill = "#FF0000";
                _this.AnsSym = greater;
                _this.AnsBox.addChild(greater);
            }

            console.log(target.name);
            _this.AnsBox.name = target.name;
            if (_this.tickbtn == false) {
                _this.tickbtn = true;
                _this.tickbtn = _this.add.sprite(800, 400, "tickbtn");
                _this.tickbtn.frame = 0;
                _this.tickbtn.inputEnabled = true;
                _this.tickbtn.input.useHandCursor = true;
                _this.tickbtn.events.onInputDown.add(_this.tickbtnClicked);
            }
        }

        target.x = _this.vx;
        target.y = _this.vy;

    },

    tickbtnClicked: function () {
        _this.tickbtn.frame = 1;
        _this.greaterSym.inputEnabled = false;
        _this.lesserSym.inputEnabled = false;
        _this.equalSym.inputEnabled = false;
        //_this.tickbtn.inputEnabled = false;
        _this.evaluation();
    },

    evaluation: function () {
        console.log(_this.elementArray2[_this.count1]);
        console.log(_this.AnsBox.name);
        _this.noofAttempts++;
        if (_this.elementArray2[_this.count1] == _this.AnsBox.name) {
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.celebrationSound.play();
            _this.starActions();
            _this.tickbtn.destroy();
            //_this.nextquestion();
            _this.time.events.add(1500, function () {
                _this.destroyObj();
                _this.nextquestion();
            });
        }
        else {
            _this.wrongSound.play();
            _this.AnsBox.frame = 0;
            _this.time.events.add(1000, function () { _this.tickbtn.frame = 0; });
            //_this.time.events.add(500,_this.destroyObj);            
            // if(_this.HzOrVertArray[_this.count1] == 1)
            // {
            //     _this.time.events.add(500,function(){
            //         _this.gotoEachinstance(_this.elementArray1[_this.count1]);
            //         _this.Same_Fractions();
            //         _this.gotoFractions();
            //     });                
            // }
            // else if(_this.HzOrVertArray[_this.count1] == 2)
            // {
            //     _this.time.events.add(500,function()
            //     {
            //         if(_this.elementArray2[_this.count1] == 1)
            //         {
            //             _this.gotoEachinstance_Vertical(_this.eleArray1_ver[_this.count1]);
            //         }            
            //         else if(_this.elementArray2[_this.count1] == 2)
            //         {
            //             _this.gotoEachinstance_Vertical(_this.eleArray2_ver[_this.count1]);
            //         } 
            //         else if(_this.elementArray2[_this.count1] == 3)
            //         {
            //             _this.gotoEachinstance_Vertical(_this.eleArray3_ver[_this.count1]);
            //         }   
            //         _this.Same_Fractions();
            //         _this.gotoFractions();
            //     }); 
            // }
            _this.AnsBox.removeChild(_this.AnsSym);
            _this.enableSymbols();
        }
    },

    //* to show drag action to user within the workspace.
    drag_cubesAction_WS_Ver: function () {
        //var denominator_length = _this.selectedCubeGroup.length;
        _this.tempUpperCubeGroup = _this.add.group();
        _this.tempLowerCubeGroup = _this.add.group();

        //* tween Question / Option cubes whichever is smaller in length

        //* if question cubes (question denominator) is less than the option cubes
        if (_this.Array_Lowercube.length < _this.Array_Uppercube.length) {
            //* go till length of denominator of question & create temp cubes on the question cubes.
            for (var l = 0; l < _this.lower_denominator; l++) {
                //* create temp group of Qstn cubes to show dragging action to user. 
                _this.templowerCube = _this.add.sprite(_this.ws_Ver_X + 90, _this.ws_Ver_Y[l], 'YB_Ver');
                //_this.ws_Hz_X[i]-49,_this.ws_lowerCubes_Y
                _this.tempLowerCubeGroup.addChild(_this.templowerCube);
            }
            //* color the numberators there.
            for (var m = _this.lowerCubeGrp.length - 1; m >= _this.lower_denominator - _this.lower_numerator; m--) {
                //*add cube image for num with diff clr cube
                _this.tempLowerCubeGroup.getChildAt(m).frame = 1;
            }

            //* add a hand symbol on those cube for tweening.
            _this.time.events.add(1000, function () {
                console.log("here");
                _this.hand = _this.add.image(_this.ws_Ver_X + 115, _this.ws_Ver_Y[0], 'hand');
                _this.hand.scale.setTo(0.5, 0.5);
                _this.tempLowerCubeGroup.addChild(_this.hand);
            });

            //* tween it till the next vertical space on the cubes.
            _this.time.events.add(1500, function () {
                //* add tween to this temp group and tween it upwards to show drag action
                tempDragAction = _this.add.tween(_this.tempLowerCubeGroup);
                tempDragAction.to({ y: -34.5 * _this.lower_denominator }, 800, 'Linear', true, 0);
                tempDragAction.start();
            });

            //* destroy the group after the show after a delay
            _this.time.events.add(3000, function () {
                _this.tempLowerCubeGroup.destroy();
            });
        }

        //* question cubes are more. then tween the option cubes.
        else if (_this.Array_Lowercube.length > _this.Array_Uppercube.length) {
            for (var n = 0; n < _this.upper_denominator; n++) {
                //* create temp group of Qstn cubes to show dragging action to user. 
                _this.tempUpperCube = _this.add.sprite(_this.ws_Ver_X, _this.Lower_Ver_Y[n], 'YG_Ver');
                _this.tempUpperCubeGroup.addChild(_this.tempUpperCube);
            }
            for (var m = _this.upperCubeGrp.length - 1; m >= (_this.upper_denominator - _this.upper_numerator); m--) {
                //*add cube image for num with diff clr cube
                _this.tempUpperCubeGroup.getChildAt(m).frame = 1;
            }
            _this.time.events.add(1000, function () {
                _this.hand = _this.add.image(_this.ws_Ver_X + 20, _this.Lower_Ver_Y[0], 'hand');
                _this.hand.scale.setTo(0.5, 0.5);
                _this.tempUpperCubeGroup.addChild(_this.hand);
            });

            _this.time.events.add(1500, function () {
                //* add tween to this temp group and tween it upwards to show drag action
                tempDragAction = _this.add.tween(_this.tempUpperCubeGroup);
                tempDragAction.to({ y: -34.5 * _this.upper_denominator }, 800, 'Linear', true, 0);
                tempDragAction.start();
            });

            //* destroy the group after the show after a delay
            _this.time.events.add(3000, function () {
                _this.tempUpperCubeGroup.destroy();
            });
        }
    },

    LowerCube_dragUpdate: function (target) {
        //console.log("inside drag update");
        //* Work space drag stop for selectedCubeGroup. target is one counter which is dragged
        //* target.name has its position number. All counter in front and back, change the x,y
        //* with a displacement from the dragged counter. There are two for loops for this.

        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;

        for (let k = Number(target.name) + 1; k < _this.lower_denominator; k++) {
            _this.lowerCubeGrp.getChildAt(k).y = dragggedCubeY;
            _this.lowerCubeGrp.getChildAt(k).x = draggedCubeX + 34 * frontpos;

            frontpos++;
        }

        for (let k = Number(target.name) - 1; k >= 0; k--) {
            //console.log("hi");
            _this.lowerCubeGrp.getChildAt(k).y = dragggedCubeY;
            _this.lowerCubeGrp.getChildAt(k).x = draggedCubeX - 34 * backpos;

            backpos++;
        }
    },

    LowerCube_dragStop: function (target) {
        //* dragstop function for selectedCubeGroup. 
        //* if the dragged area is workspace, then create a copy of itself & hide the copy below it in work place.
        //* if dropped else where, then go back to the original place.
        _this.clickSound.play();
        j = _this.Array_Lowercube.length;

        if (target.y <= 360 && target.y >= 100)  //* if within range target.x>=50 && target.x<=616 && 
        {
            for (i = 0; i < _this.lower_denominator; i++) {
                //* set the x,y of the selected group to sit properly in work space.
                current_ws_cube = _this.lowerCubeGrp.getChildAt(i);
                console.log(current_ws_cube.y);
                current_ws_cube.x = _this.ws_Hz_X[j] - 49;
                current_ws_cube.y = _this.ws_lowerCubes_Y;
                //current_ws_cube.visible = true;

                //* create a copy of the selected cube group in workspace. it will sit behind selected group in WS
                lowerCubeCpy = _this.lowerCubeGrpCpy.create(_this.ws_Hz_X[j] - 49, _this.ws_lowerCubes_Y, 'YB_Hz');
                lowerCubeCpy.name = "" + i;
                lowerCubeCpy.frame = current_ws_cube.frame;
                lowerCubeCpy.visible = true;

                _this.Array_Lowercube[j] = i;

                j++;
            }

            _this.Check_Dragenable_cubes();
        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            console.log("else part");
            j--; //* reduce by 1 (from length) for it to go back previous cube index.
            for (var i = _this.lower_denominator - 1; i >= 0; i--) {
                _this.lowerCubeGrp.getChildAt(i).x = _this.ws_Hz_X[j] - 49;
                _this.lowerCubeGrp.getChildAt(i).y = _this.ws_lowerCubes_Y;
                j--;
            }
        }
        //_this.bigBox.addChild(_this.lowerCubeGrpCpy);    
    },

    Ver_LowerCube_dragUpdate: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;
        for (let k = Number(target.name) + 1; k < _this.lower_denominator; k++) {
            _this.lowerCubeGrp.getChildAt(k).y = dragggedCubeY - 34 * frontpos;
            _this.lowerCubeGrp.getChildAt(k).x = draggedCubeX;

            frontpos++;
        }
        for (let k = Number(target.name) - 1; k >= 0; k--) {
            //console.log("hi");
            _this.lowerCubeGrp.getChildAt(k).y = dragggedCubeY + 34 * backpos;
            _this.lowerCubeGrp.getChildAt(k).x = draggedCubeX;

            backpos++;
        }
    },

    Ver_LowerCube_dragStop: function (target) {
        _this.clickSound.play();
        j = _this.Array_Lowercube.length;
        console.log(target.y);
        if (target.x >= 355 && target.x <= 455)  //* if within range  && target.y <= 340 && target.y >=170
        {
            for (i = 0; i < _this.lower_denominator; i++) {
                //* set the x,y of the selected group to sit properly in work space.
                current_ws_cube = _this.lowerCubeGrp.getChildAt(i);
                current_ws_cube.x = _this.ws_Ver_X + 90;
                current_ws_cube.y = _this.ws_Ver_Y[j];

                //* create a copy of the selected cube group in workspace. it will sit behind selected group in WS
                lowerCubeCpy = _this.lowerCubeGrpCpy.create(_this.ws_Ver_X + 90, _this.ws_Ver_Y[j], 'YB_Ver');
                lowerCubeCpy.name = "" + i;
                lowerCubeCpy.frame = current_ws_cube.frame;
                lowerCubeCpy.visible = true;

                _this.Array_Lowercube[j] = i;
                //console.log("option cube copy: " + optionCubeCpy.x + " " + optionCubeCpy.y +" " + _this.optionCubeGroupCpy.length + " " + optionCubeCpy.frame + " " + + _this.Array_Optcube.length);
                j++;
            }
            if (_this.count1 == 0 && _this.tweenCount == 0) {
                console.log("hh");
                _this.drag_cubesAction_WS_Ver();
                _this.tweenCount++;

            }
            _this.Check_Dragenable_cubes();
        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            console.log("koo");
            j--; //* reduce by 1 (from length) for it to go back previous cube index.
            for (var i = _this.lower_denominator - 1; i >= 0; i--) {
                _this.lowerCubeGrp.getChildAt(i).x = _this.ws_Ver_X + 90;
                _this.lowerCubeGrp.getChildAt(i).y = _this.ws_Ver_Y[j];
                j--;
            }
        }
    },

    UpperCube_dragUpdate: function (target) {
        //console.log("inside drag update");
        //* Work space drag stop for selectedCubeGroup. target is one counter which is dragged
        //* target.name has its position number. All counter in front and back, change the x,y
        //* with a displacement from the dragged counter. There are two for loops for this.

        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;

        for (let k = Number(target.name) + 1; k < _this.upper_denominator; k++) {
            _this.upperCubeGrp.getChildAt(k).y = dragggedCubeY;
            _this.upperCubeGrp.getChildAt(k).x = draggedCubeX + 34 * frontpos;

            frontpos++;
        }

        for (let k = Number(target.name) - 1; k >= 0; k--) {
            //console.log("hi");
            _this.upperCubeGrp.getChildAt(k).y = dragggedCubeY;
            _this.upperCubeGrp.getChildAt(k).x = draggedCubeX - 34 * backpos;

            backpos++;
        }

    },

    UpperCube_dragStop: function (target) {
        //console.log("Question drag stop function in work space. ....: ");
        //* dragstop function for QnCubesGroup. 
        //* if the dragged area is workspace, then create a copy of itself & hide the copy below it in work place.
        //* if dropped else where, then go back to the original place.
        _this.clickSound.play();
        j = _this.Array_Uppercube.length;

        if (target.y <= 50 && target.y >= 0)  //* if within range target.x>=50 && target.x<=616 && 
        {
            for (i = 0; i < _this.upper_denominator; i++) {
                //* set the x,y of the question group to sit properly in work space.
                current_ws_cube = _this.upperCubeGrp.getChildAt(i);
                current_ws_cube.x = _this.ws_Hz_X[j] - 49;
                current_ws_cube.y = 30;

                //* create a copy of the selected cube group in workspace. it will sit behind selected group in WS
                upperCubeCpy = _this.upperCubeGrpCpy.create(_this.ws_Hz_X[j] - 49, 30, 'YG_Hz');
                upperCubeCpy.name = "" + i;
                upperCubeCpy.frame = current_ws_cube.frame;
                upperCubeCpy.visible = true;

                _this.Array_Uppercube[j] = i;
                //console.log("question cube copy: " + qnCubeCpy.x + " " + qnCubeCpy.y +" " + _this.QnCubeGroupCpy.length + " " + qnCubeCpy.frame + " " + + _this.Array_Qncube.length);
                j++;
            }
            _this.Check_Dragenable_cubes();
        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            //console.log(" Question drag else part...J: " + j);
            j--; //* reduce by 1 (from length) for it to go back previous cube index.
            for (var i = _this.upper_denominator - 1; i >= 0; i--)  //* go back each cube resetting x,y values
            {
                _this.upperCubeGrp.getChildAt(i).x = _this.ws_Hz_X[j] - 54;
                _this.upperCubeGrp.getChildAt(i).y = 30;

                //console.log(" resetting...X: " + _this.ws_Hz_X[j] + " " + _this.QnCubeGroup.getChildAt(i).x);
                j--;
            }
        }
    },

    Ver_UpperCube_dragUpdate: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;

        for (let k = Number(target.name) + 1; k < _this.upper_denominator; k++) {
            _this.upperCubeGrp.getChildAt(k).y = dragggedCubeY - 34 * frontpos;
            _this.upperCubeGrp.getChildAt(k).x = draggedCubeX;

            frontpos++;
        }

        for (let k = Number(target.name) - 1; k >= 0; k--) {
            //console.log("hi");
            _this.upperCubeGrp.getChildAt(k).y = dragggedCubeY + 34 * backpos;
            _this.upperCubeGrp.getChildAt(k).x = draggedCubeX;

            backpos++;
        }
    },

    Ver_UpperCube_dragStop: function (target) {
        _this.clickSound.play();
        j = _this.Array_Uppercube.length;

        if (target.x >= 285 && target.x <= 325)  //* if within range  && target.y <= 360 && target.y >=170
        {
            console.log("here");
            for (i = 0; i < _this.upper_denominator; i++) {
                //* set the x,y of the question group to sit properly in work space.
                current_ws_cube = _this.upperCubeGrp.getChildAt(i);
                current_ws_cube.x = _this.ws_Ver_X;//_this.ws_Ver_X-90;
                current_ws_cube.y = _this.ws_Ver_Y[j];

                //* create a copy of the selected cube group in workspace. it will sit behind selected group in WS
                upperCubeCpy = _this.upperCubeGrpCpy.create(_this.ws_Ver_X, _this.ws_Ver_Y[j], 'YG_Ver');//_this.ws_Ver_X-90,_this.ws_Ver_Y[j],'YG_Ver' 
                upperCubeCpy.name = "" + i;
                upperCubeCpy.frame = current_ws_cube.frame;
                upperCubeCpy.visible = true;

                _this.Array_Uppercube[j] = i;
                //console.log("question cube copy: " + qnCubeCpy.x + " " + qnCubeCpy.y +" " + _this.QnCubeGroupCpy.length + " " + qnCubeCpy.frame + " " + + _this.Array_Qncube.length);
                j++;
            }

            _this.Check_Dragenable_cubes();
        }
        else  //* if it is dropped else where, simply move it back to original position.
        {
            console.log(" Question drag else part...J: " + j);
            j--; //* reduce by 1 (from length) for it to go back previous cube index.
            for (var i = _this.upper_denominator - 1; i >= 0; i--)  //* go back each cube resetting x,y values
            {
                _this.upperCubeGrp.getChildAt(i).x = _this.ws_Ver_X;//_this.ws_Ver_X-90; 
                _this.upperCubeGrp.getChildAt(i).y = _this.ws_Ver_Y[j];

                //console.log(" resetting...X: " + _this.ws_Hz_X[j] + " " + _this.QnCubeGroup.getChildAt(i).x);
                j--;
            }
        }
    },

    Check_Dragenable_cubes: function () {
        console.log(_this.lengthMatch);

        //_this.time.events.add(1500,function(){
        if (_this.HzOrVertArray[_this.count1] == 1) {
            _this.Check_DragEnable();
        }
        else if (_this.HzOrVertArray[_this.count1] == 2) {
            _this.Ver_Check_DragEnable();
        }

        if (_this.lengthMatch == true) {
            console.log("hmm");
            if (_this.count1 == 0) {
                _this.voiceNote2();
            }

            //_this.time.events.add(2000,function(){
            _this.qn_flag = 2;
            _this.enableSymbols();
            console.log(_this.upperCubeGrp.length);
            //});
        }
        //}); 
    },

    Check_DragEnable: function () {

        //* Compare array lengths of option fraction and question fraction
        //* if they are the same, then stop dragging. Show thumbps up/down & ask audio qst etc.
        //* if Qst < Opt, then enable Qst cubes.
        //* otherwise, enable Opt cubes to be dragged.

        //console.log("Check Drag Enable: Array lengths Qst: Opt " + _this.Array_Qncube.length + " " + _this.Array_Optcube.length);

        //* first disable both the Question cubes and option cubes initially.
        //* based on the length, enable one of those two sets.
        console.log(_this.upperCubeGrp.length);
        let upperCube = _this.upperCubeGrp.getChildAt(0); //* get first question cube.
        if (upperCube.inputEnabled == true) //* if one of the chid is enabled, then disable all.
        {
            for (l = 0; l < _this.upper_denominator; l++)   //* go till length of denominator of question & disable.
            {
                //* remove all events
                upperCube = _this.upperCubeGrp.getChildAt(l);
                upperCube.input.enableDrag(false);
                upperCube.events.onInputDown.removeAll();
                upperCube.events.onDragUpdate.removeAll();
                upperCube.events.onDragStop.removeAll();
                upperCube.inputEnabled = false;
            }
        }

        let lowerCube = _this.lowerCubeGrp.getChildAt(0);     //* get first option cube. 
        if (lowerCube.inputEnabled == true) //* if one is enabled, then remove events from all.
        {
            for (l = 0; l < _this.lower_denominator; l++) //* remove all its events once.
            {
                lowerCube = _this.lowerCubeGrp.getChildAt(l);
                lowerCube.input.enableDrag(false);
                lowerCube.events.onInputDown.removeAll();
                lowerCube.events.onDragUpdate.removeAll();
                lowerCube.events.onDragStop.removeAll();
                lowerCube.inputEnabled = false;
            }
        }

        if (_this.Array_Lowercube.length > _this.Array_Uppercube.length) {
            for (l = 0; l < _this.upper_denominator; l++)   //* go till length of denominator of question.
            {
                //* enabling Qn cube events.
                upperCube = _this.upperCubeGrp.getChildAt(l);

                //* add all events to question cubes since it has to be enabled now.
                upperCube.inputEnabled = true;
                upperCube.input.useHandCursor = true;
                upperCube.input.enableDrag(true);
                upperCube.events.onDragUpdate.add(_this.UpperCube_dragUpdate, upperCube);
                upperCube.events.onDragStop.add(_this.UpperCube_dragStop, upperCube);
            }
        }

        else if (_this.Array_Lowercube.length < _this.Array_Uppercube.length) {
            for (l = 0; l < _this.lower_denominator; l++) {
                lowercube = _this.lowerCubeGrp.getChildAt(l);
                //* add all events to question cubes.
                lowercube.inputEnabled = true;
                lowercube.input.useHandCursor = true;
                lowercube.input.enableDrag(true);
                lowercube.events.onDragUpdate.add(_this.LowerCube_dragUpdate, lowercube);
                lowercube.events.onDragStop.add(_this.LowerCube_dragStop, lowercube);
            }
        }
        else if (_this.Array_Lowercube.length == _this.Array_Uppercube.length) {
            //console.log( "reached equal length..stopping dragging.................");
            //console.log(_this.Array_Qncube.length);
            _this.lengthMatch = true;
            console.log(_this.lowerCubeGrp.length);
            _this.lowerCubeGrp.destroy();
            _this.upperCubeGrp.destroy();

            Qst_drag_count = _this.Array_Uppercube.length / _this.upper_denominator;
            total_Qst_frame = Qst_drag_count * _this.upper_numerator;

            opt_drag_count = _this.Array_Lowercube.length / _this.lower_denominator;
            //console.log(_this.selectedOption_Denominator);
            total_opt_frame = opt_drag_count * _this.lower_numerator;
            //console.log(_this.selectedOption_Numerator);
            _this.giveShadeSound.play();
            for (let i = 0; i < _this.Array_Uppercube.length - total_Qst_frame; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.upperCubeGrpCpy.getChildAt(i).frame = 0;
                });
            }
            for (let i = _this.Array_Uppercube.length - total_Qst_frame; i < _this.Array_Uppercube.length - 1; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.upperCubeGrpCpy.getChildAt(i).frame = 1;
                });
            }

            for (let i = 0; i < _this.Array_Lowercube.length - total_opt_frame; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.lowerCubeGrpCpy.getChildAt(i).frame = 0;
                });
            }
            for (let i = _this.Array_Lowercube.length - 1; i >= _this.Array_Lowercube.length - total_opt_frame; i--) {
                _this.time.events.add(50 * i, function () {
                    _this.lowerCubeGrpCpy.getChildAt(i).frame = 1;
                });
            }
        }
    },

    Ver_Check_DragEnable: function () {
        _this.SelectedCube = false;

        //* Compare array lengths of option fraction and question fraction
        //* if they are the same, then stop dragging. Show thumbps up/down & ask audio qst etc.
        //* if Qst < Opt, then enable Qst cubes.
        //* otherwise, enable Opt cubes to be dragged.

        //console.log("Check Drag Enable: Array lengths Qst: Opt " + _this.Array_Qncube.length + " " + _this.Array_Optcube.length);

        //* first disable both the Question cubes and option cubes initially.
        //* based on the length, enable one of those two sets.

        let upperCube = _this.upperCubeGrp.getChildAt(0); //* get first question cube.
        if (upperCube.inputEnabled == true) //* if one of the chid is enabled, then disable all.
        {
            for (l = 0; l < _this.upper_denominator; l++)   //* go till length of denominator of question & disable.
            {
                //* remove all events
                upperCube = _this.upperCubeGrp.getChildAt(l);
                upperCube.input.enableDrag(false);
                upperCube.events.onInputDown.removeAll();
                upperCube.events.onDragUpdate.removeAll();
                upperCube.events.onDragStop.removeAll();
                upperCube.inputEnabled = false;
            }
        }

        let lowerCube = _this.lowerCubeGrp.getChildAt(0);     //* get first option cube. 
        if (lowerCube.inputEnabled == true) //* if one is enabled, then remove events from all.
        {
            for (l = 0; l < _this.lower_denominator; l++) //* remove all its events once.
            {
                lowerCube = _this.lowerCubeGrp.getChildAt(l);
                lowerCube.input.enableDrag(false);
                lowerCube.events.onInputDown.removeAll();
                lowerCube.events.onDragUpdate.removeAll();
                lowerCube.events.onDragStop.removeAll();
                lowerCube.inputEnabled = false;
            }
        }

        if (_this.Array_Lowercube.length > _this.Array_Uppercube.length) {
            for (l = 0; l < _this.upper_denominator; l++)   //* go till length of denominator of question.
            {
                //* enabling Qn cube events.
                upperCube = _this.upperCubeGrp.getChildAt(l);

                //* add all events to question cubes since it has to be enabled now.
                upperCube.inputEnabled = true;
                upperCube.input.useHandCursor = true;
                upperCube.input.enableDrag(true);
                upperCube.events.onDragUpdate.add(_this.Ver_UpperCube_dragUpdate, upperCube);
                upperCube.events.onDragStop.add(_this.Ver_UpperCube_dragStop, upperCube);
            }
        }

        else if (_this.Array_Lowercube.length < _this.Array_Uppercube.length) {
            for (l = 0; l < _this.lower_denominator; l++) {
                lowercube = _this.lowerCubeGrp.getChildAt(l);
                //* add all events to question cubes.
                lowercube.inputEnabled = true;
                lowercube.input.useHandCursor = true;
                lowercube.input.enableDrag(true);
                lowercube.events.onDragUpdate.add(_this.Ver_LowerCube_dragUpdate, lowercube);
                lowercube.events.onDragStop.add(_this.Ver_LowerCube_dragStop, lowercube);
            }
        }
        else if (_this.Array_Lowercube.length == _this.Array_Uppercube.length) {
            //console.log( "reached equal length..stopping dragging.................");
            //console.log(_this.Array_Qncube.length);
            _this.lengthMatch = true;
            _this.lowerCubeGrp.destroy();
            _this.upperCubeGrp.destroy();

            Qst_drag_count = _this.Array_Uppercube.length / _this.upper_denominator;
            total_Qst_frame = Qst_drag_count * _this.upper_numerator;

            opt_drag_count = _this.Array_Lowercube.length / _this.lower_denominator;
            //console.log(_this.selectedOption_Denominator);
            total_opt_frame = opt_drag_count * _this.lower_numerator;
            //console.log(_this.selectedOption_Numerator);
            _this.giveShadeSound.play();
            for (let i = 0; i < _this.Array_Uppercube.length - total_Qst_frame; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.upperCubeGrpCpy.getChildAt(i).frame = 0;
                });
            }
            for (let i = _this.Array_Uppercube.length - total_Qst_frame; i < _this.Array_Uppercube.length - 1; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.upperCubeGrpCpy.getChildAt(i).frame = 1;
                });
            }

            for (let i = 0; i < _this.Array_Lowercube.length - total_opt_frame; i++) {
                _this.time.events.add(50 * i, function () {
                    _this.lowerCubeGrpCpy.getChildAt(i).frame = 0;
                });
            }
            for (let i = _this.Array_Lowercube.length - 1; i >= _this.Array_Lowercube.length - total_opt_frame; i--) {
                _this.time.events.add(50 * i, function () {
                    _this.lowerCubeGrpCpy.getChildAt(i).frame = 1;
                });
            }
        }
    },

    //* load all the initial screen elements based on the options chosen by randomizing function 
    LoadInitialScreen: function () {
        console.log(_this.lower_denominator);
        console.log(_this.lower_numerator);
        _this.fractionBg1 = _this.add.sprite(720, 110, 'fraction_Bg');
        _this.fractionBg2 = _this.add.sprite(850, 110, 'fraction_Bg');
        _this.AnsBox = _this.add.sprite(785, 125, 'newBox');
        _this.displayLowerFraction(_this.fractionBg2);
        _this.displayUpperFraction(_this.fractionBg1);

        _this.greaterSymCpy = _this.add.sprite(842, 210, "greater");
        _this.greaterSym = _this.add.sprite(842, 210, "greater");
        _this.lesserSymCpy = _this.add.sprite(735, 210, "lesser");
        _this.lesserSym = _this.add.sprite(735, 210, "lesser");
        _this.equalSymCpy = _this.add.sprite(788, 210, "equal");
        _this.equalSym = _this.add.sprite(788, 210, "equal");

        if (_this.HzOrVertArray[_this.count1] == 1) {
            _this.bigBox = _this.add.image(50, 200, 'bigBox');
            _this.upperFractionBg = _this.add.sprite(50, 110, 'fraction_Bg');
            _this.upperFractionBg.frame = 0;

            _this.lowerFractionBg = _this.add.sprite(50, 405, 'fraction_Bg');
            _this.displayLowerFraction(_this.lowerFractionBg);
            _this.displayUpperFraction(_this.upperFractionBg);
        }
        else if (_this.HzOrVertArray[_this.count1] == 2) {
            _this.bigBox = _this.add.image(275, 105, 'smallBox'); //250
            _this.bigBox.scale.setTo(1.3, 1.6);
            _this.upperFractionBg = _this.add.sprite(190, 415, 'fraction_Bg'); //165

            _this.lowerFractionBg = _this.add.sprite(480, 412, 'fraction_Bg');
            _this.displayLowerFraction(_this.lowerFractionBg); // left fraction
            _this.displayUpperFraction(_this.upperFractionBg); //right fraction
        }
        console.log(_this.upper_denominator);
        console.log(_this.upper_numerator);
        console.log(_this.lower_denominator);
        console.log(_this.lower_numerator);
        _this.add_cubes_to_screen();  // add cubes according to question asked  
    },

    add_cubes_to_screen: function () {
        //_this.Bg_fraction = _this.add.sprite(50,100,'fraction_Bg');
        _this.objGroup1 = _this.add.group();
        _this.objGroup2 = _this.add.group();
        _this.objGroup3 = _this.add.group();
        _this.objGroup4 = _this.add.group();

        if (_this.HzOrVertArray[_this.count1] == 1) {
            for (i = 0; i < _this.upper_denominator; i++) {
                console.log(_this.upper_denominator);
                _this.uppercubes = _this.objGroup1.create(_this.Upper_Hz_X[i], _this.Upper_Hz_Y, 'YG_Hz');
                _this.tweencubes1 = _this.objGroup2.create(_this.Upper_Hz_X[i], _this.Upper_Hz_Y, 'YG_Hz');
                //* add cube image for num with diff clr cube                                          
            }
            for (k = _this.objGroup1.length - 1; k >= _this.upper_denominator - _this.upper_numerator; k--) {
                //*add cube image for num with diff clr cube
                _this.objGroup1.getChildAt(k).frame = 1;
                _this.objGroup2.getChildAt(k).frame = 1;
                //* add to questionCubeGroup                    
            }

            for (i = 0; i < _this.lower_denominator; i++) {
                _this.lowercubes = _this.objGroup3.create(_this.Lower_Hz_X[i], _this.Lower_Hz_Y, 'YB_Hz');
                _this.tweencubes2 = _this.objGroup4.create(_this.Lower_Hz_X[i], _this.Lower_Hz_Y, 'YB_Hz');

            }
            for (k = _this.objGroup3.length - 1; k >= _this.lower_denominator - _this.lower_numerator; k--) {
                //*add cube image for num with diff clr cube
                _this.objGroup3.getChildAt(k).frame = 1;
                _this.objGroup4.getChildAt(k).frame = 1;
                //* add to questionCubeGroup                    
            }
        }
        else {
            //* vertical          
            for (i = 0; i < _this.upper_denominator; i++) {
                console.log(_this.upper_denominator);
                _this.uppercubes = _this.objGroup1.create(_this.Upper_Ver_X, _this.Upper_Ver_Y[i], 'YG_Ver');
                _this.tweencubes1 = _this.objGroup2.create(_this.Upper_Ver_X, _this.Upper_Ver_Y[i], 'YG_Ver');

                //* add cube image for num with diff clr cube                                          
            }
            for (k = _this.objGroup1.length - 1; k >= _this.upper_denominator - _this.upper_numerator; k--) {
                //*add cube image for num with diff clr cube
                _this.objGroup1.getChildAt(k).frame = 1;
                _this.objGroup2.getChildAt(k).frame = 1;
                //* add to questionCubeGroup                    
            }

            for (i = 0; i < _this.lower_denominator; i++) {
                _this.lowercubes = _this.objGroup3.create(_this.Lower_Ver_X, _this.Lower_Ver_Y[i], 'YB_Ver');
                _this.tweencubes2 = _this.objGroup4.create(_this.Lower_Ver_X, _this.Lower_Ver_Y[i], 'YB_Ver');

            }
            for (k = _this.objGroup3.length - 1; k >= _this.lower_denominator - _this.lower_numerator; k--) {
                //*add cube image for num with diff clr cube
                _this.objGroup3.getChildAt(k).frame = 1;
                _this.objGroup4.getChildAt(k).frame = 1;
                //* add to questionCubeGroup                    
            }
        }
        //_this.show_drag_action(); //* counter tween to work space by the game 
        //*then enable counter to drag to work space

    },

    show_drag_action: function () {
        console.log("show drag action");
        if (_this.HzOrVertArray[_this.count1] == 1) {
            //_this.bigBox.addChild(_this.objGroup1);
            // console.log(_this.objGroup1.getChildAt(0).x);
            // console.log(_this.objGroup1.getChildAt(0).y);
            trayDragActionUpper = _this.add.tween(_this.objGroup2);
            trayDragActionUpper.to({ x: -43, y: 90 }, 900, 'Linear', true, 0);
            trayDragActionUpper.start();

            trayDragActionLower = _this.add.tween(_this.objGroup4);
            trayDragActionLower.to({ x: -42, y: -95 }, 900, 'Linear', true, 0);
            trayDragActionLower.start();
        }
        else {
            //_this.bigBox.addChild(_this.objGroup1);
            trayDragAction = _this.add.tween(_this.objGroup2);
            trayDragAction.to({ x: 105, y: 0 }, 1000, 'Linear', true, 0);
            trayDragAction.start();

            trayDragAction = _this.add.tween(_this.objGroup4);
            trayDragAction.to({ x: -90, y: 0 }, 1000, 'Linear', true, 0);
            trayDragAction.start();

        }

        //_this.objGroup1.destroy();               
    },

    displayLowerFraction: function (target) {
        if (_this.lower_denominator >= 10) {
            console.log("here");
            _this.lower_denominator1 = _this.add.text(10, 40, _this.lower_denominator);//60 450
            target.addChild(_this.lower_denominator1);

        }
        else if (_this.lower_denominator < 10) {
            console.log("here");
            _this.lower_denominator1 = _this.add.text(15, 40, _this.lower_denominator);
            target.addChild(_this.lower_denominator1);
        }

        if (_this.lower_numerator >= 10) {
            console.log("here");
            _this.lower_numerator1 = _this.add.text(10, 10, _this.lower_numerator);
            target.addChild(_this.lower_numerator1);
        }
        else if (_this.lower_numerator < 10) {
            console.log("here");
            _this.lower_numerator1 = _this.add.text(16, 10, _this.lower_numerator);
            target.addChild(_this.lower_numerator1);
        }

        _this.lower_denominator1.fill = '#65B4C3';
        _this.lower_numerator1.fill = '#65B4C3';
    },

    displayUpperFraction: function (target) {
        if (_this.upper_denominator >= 10) {
            console.log("here");
            _this.upper_denominator1 = _this.add.text(10, 40, _this.upper_denominator);//60 450
            target.addChild(_this.upper_denominator1);

        }
        else if (_this.upper_denominator < 10) {
            console.log("here");
            _this.upper_denominator1 = _this.add.text(15, 40, _this.upper_denominator);
            target.addChild(_this.upper_denominator1);
        }

        if (_this.upper_numerator >= 10) {
            console.log("here");
            _this.upper_numerator1 = _this.add.text(10, 10, _this.upper_numerator);
            target.addChild(_this.upper_numerator1);
        }
        else if (_this.upper_numerator < 10) {
            console.log("here");
            _this.upper_numerator1 = _this.add.text(16, 10, _this.upper_numerator);
            target.addChild(_this.upper_numerator1);
        }

        _this.upper_denominator1.fill = '#65B4C3';
        _this.upper_numerator1.fill = '#65B4C3';
    },


    //* shuffle the Horizontal or Vertical representation array for selecting one randomly.
    //* decing numerator and denominator for vetical and hozizontal
    randomizing_elements: function () {
        //_this.HzOrVertArray = _this.shuffle(_this.HzOrVertArray);
        _this.elementArray2 = _this.shuffle(_this.elementArray2);
        if (_this.HzOrVertArray[_this.count1] == 1) {
            //_this.Equivalent_NonEquivalentArray = _this.shuffle(_this.Equivalent_NonEquivalentArray);
            _this.elementArray1 = _this.shuffle(_this.elementArray1);

            console.log(_this.elementArray2[0]);
        }
        else if (_this.HzOrVertArray[_this.count1] == 2) {
            //_this.Equivalent_NonEquivalentArray = [1,1,1,1];
            console.log("hi");

            _this.elementArray1_Vertical = _this.shuffle(_this.elementArray1_Vertical);
            _this.eleArray1_ver = _this.shuffle(_this.eleArray1_ver);
            _this.eleArray2_ver = _this.shuffle(_this.eleArray2_ver);
            _this.eleArray3_ver = _this.shuffle(_this.eleArray3_ver);

        }
    },

    //*function to decide how many are equivalent fraction and how many are non equivalent fraction
    Decide_Fractions: function () {
        // _this.lower_denominator = 5;
        // _this.lower_numerator = 4;
        console.log(_this.upper_numerator + "/" + _this.upper_denominator);
        index = 0;
        if (_this.elementArray2[_this.count1] == 1) {
            equalArraylen = _this.equal_denominatorArray.length;
            if (equalArraylen != 1) {
                index = Math.floor(Math.random() * (equalArraylen - 1)) + 1;
            }
            console.log("equal");
            _this.lower_denominator = _this.equal_denominatorArray[index];
            _this.lower_numerator = _this.equal_numeratorArray[index];
        }
        else if (_this.elementArray2[_this.count1] == 2) {
            greaterArraylen = _this.greater_denominatorArray.length;
            if (greaterArraylen != 1) {
                index = Math.floor(Math.random() * (greaterArraylen - 1)) + 1;
            }
            console.log("greater");
            _this.lower_denominator = _this.greater_denominatorArray[index];
            _this.lower_numerator = _this.greater_numeratorArray[index];
        }
        else {
            lesserArraylen = _this.lesser_numeratorArray.length;
            if (lesserArraylen != 1) {
                index = Math.floor(Math.random() * (lesserArraylen - 1)) + 1;

            }
            console.log("lesser");
            _this.lower_denominator = _this.lesser_denominatorArray[index];
            _this.lower_numerator = _this.lesser_numeratorArray[index];
        }
        console.log(_this.lower_numerator + "/" + _this.lower_denominator);
    },

    Same_Fractions: function () {
        if (_this.elementArray2[_this.count1] == 1) {
            _this.lower_denominator = _this.equal_denominatorArray[index];
            _this.lower_numerator = _this.equal_numeratorArray[index];
        }
        else if (_this.elementArray2[_this.count1] == 2) {
            console.log("greater");
            _this.lower_denominator = _this.greater_denominatorArray[index];
            _this.lower_numerator = _this.greater_numeratorArray[index];
        }
        else {
            console.log("lesser");
            _this.lower_denominator = _this.lesser_denominatorArray[index];
            _this.lower_numerator = _this.lesser_numeratorArray[index];
        }
    },

    Decide_Fractions_Vertical: function () {
        // if(_this.Equivalent_NonEquivalentArray[0]==1) //* means 0 1 1 1 0-equivalent 1-non equivalent
        // {
        console.log("1 equalent");
        _this.fraction_Combination_Array = [0, 1, 1, 1];
        _this.gotoEachinstance_Vertical(_this.elementArray1_Vertical[0]);
        console.log("which num is passing: " + _this.elementArray1_Vertical[0]);
        //}
    },

    //* here we can go each instance they given is design 
    gotoEachinstance: function (target) {
        switch (target) {
            case 1: _this.upper_denominator = 2;
                _this.upper_numerator = 1;

                _this.equal_denominatorArray = [4, 6, 8, 10, 12, 14, 16];
                _this.equal_numeratorArray = [2, 3, 4, 5, 6, 7, 8];

                _this.greater_numeratorArray = [2, 3, 3, 4, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 8, 9, 7, 8, 9, 10, 11, 8, 9, 10, 11, 12, 13, 9, 10, 11, 12, 13, 14, 15];
                _this.greater_denominatorArray = [3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 10, 10, 10, 10, 12, 12, 12, 12, 12, 14, 14, 14, 14, 14, 14, 16, 16, 16, 16, 16, 16, 16];

                _this.lesser_numeratorArray = [1, 1, 1, 2, 1, 2, 1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7];
                _this.lesser_denominatorArray = [3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 10, 10, 10, 10, 12, 12, 12, 12, 12, 14, 14, 14, 14, 14, 14, 16, 16, 16, 16, 16, 16, 16];
                break;
            case 2: _this.upper_numerator = 1;
                _this.upper_denominator = 3;

                _this.equal_numeratorArray = [2, 3, 4, 5];
                _this.equal_denominatorArray = [6, 9, 12, 15];

                _this.greater_numeratorArray = [1, 2, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 7, 8, 5, 6, 7, 8, 9, 10, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14];
                _this.greater_denominatorArray = [2, 3, 4, 4, 5, 5, 5, 6, 6, 6, 9, 9, 9, 9, 9, 12, 12, 12, 12, 12, 12, 12, 15, 15, 15, 15, 15, 15, 15, 15, 15];

                _this.lesser_numeratorArray = [1, 1, 1, 1, 2, 1, 2, 3, 1, 2, 3, 4];
                _this.lesser_denominatorArray = [4, 5, 6, 9, 9, 12, 12, 12, 15, 15, 15, 15];
                break;
            case 3: _this.upper_numerator = 2;
                _this.upper_denominator = 3;

                _this.equal_numeratorArray = [3, 4, 6];
                _this.equal_denominatorArray = [5, 6, 9];

                _this.greater_numeratorArray = [3, 4, 5, 7, 8];
                _this.greater_denominatorArray = [4, 5, 6, 9, 9];

                _this.lesser_numeratorArray = [1, 1, 1, 2, 1, 2, 1, 2, 3, 1, 2, 3, 4, 5];
                _this.lesser_denominatorArray = [2, 3, 4, 4, 5, 5, 6, 6, 6, 9, 9, 9, 9, 9];
                break;
            case 4: _this.upper_numerator = 1;
                _this.upper_denominator = 4;

                _this.equal_numeratorArray = [2, 3, 4];
                _this.equal_denominatorArray = [8, 12, 16];

                _this.greater_numeratorArray = [1, 1, 2, 2, 3, 2, 3, 4, 5, 3, 4, 5, 6, 7, 4, 5, 6, 7, 8, 9, 10, 11, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
                _this.greater_denominatorArray = [2, 3, 3, 4, 4, 6, 6, 6, 6, 8, 8, 8, 8, 8, 12, 12, 12, 12, 12, 12, 12, 12, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16];

                _this.lesser_numeratorArray = [1, 1, 1, 2, 1, 2, 3];
                _this.lesser_denominatorArray = [6, 8, 12, 12, 16, 16, 16];
                break;
            case 5: _this.upper_numerator = 2;
                _this.upper_denominator = 4;

                _this.equal_numeratorArray = [1, 3, 4, 6, 8];
                _this.equal_denominatorArray = [2, 6, 8, 12, 16];

                _this.greater_numeratorArray = [2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10, 11, 9, 10, 11, 12, 13, 14, 15];
                _this.greater_denominatorArray = [3, 4, 6, 6, 8, 8, 8, 12, 12, 12, 12, 12, 16, 16, 16, 16, 16, 16, 16];

                _this.lesser_numeratorArray = [1, 1, 1, 2, 1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7];
                _this.lesser_denominatorArray = [3, 4, 6, 6, 8, 8, 8, 12, 12, 12, 12, 12, 16, 16, 16, 16, 16, 16, 16];
                break;
            case 6:
                _this.upper_numerator = 3;
                _this.upper_denominator = 4;

                _this.equal_numeratorArray = [6, 9, 12];
                _this.equal_denominatorArray = [8, 12, 16];

                _this.greater_numeratorArray = [5, 7, 10, 11, 13, 14, 15];
                _this.greater_denominatorArray = [6, 8, 12, 12, 16, 16, 16];

                _this.lesser_numeratorArray = [1, 1, 2, 1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
                _this.lesser_denominatorArray = [2, 3, 3, 4, 4, 6, 6, 6, 6, 8, 8, 8, 8, 8, 12, 12, 12, 12, 12, 12, 12, 12, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16];
                break;
            case 7:
                _this.upper_numerator = 1;
                _this.upper_denominator = 5;

                _this.equal_numeratorArray = [2, 3];
                _this.equal_denominatorArray = [10, 15];

                _this.greater_numeratorArray = [1, 1, 2, 2, 3, 4, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
                _this.greater_denominatorArray = [2, 3, 3, 5, 5, 5, 10, 10, 10, 10, 10, 10, 10, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15];

                _this.lesser_numeratorArray = [1, 1, 2];
                _this.lesser_denominatorArray = [10, 15, 15];
                break;
            case 8:
                _this.upper_numerator = 2;
                _this.upper_denominator = 5;

                _this.equal_numeratorArray = [4, 6];
                _this.equal_denominatorArray = [10, 15];

                _this.greater_numeratorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 10, 11, 12, 13, 14];
                _this.greater_denominatorArray = [2, 3, 5, 5, 10, 10, 10, 10, 15, 15, 15, 15, 15, 15, 15, 15];

                _this.lesser_numeratorArray = [1, 1, 1, 2, 3, 1, 2, 3, 4, 5];
                _this.lesser_denominatorArray = [3, 5, 10, 10, 10, 15, 15, 15, 15, 15];
                break;
            case 9:
                _this.upper_numerator = 3;
                _this.upper_denominator = 5;

                _this.equal_numeratorArray = [6, 9];
                _this.equal_denominatorArray = [10, 15];

                _this.greater_numeratorArray = [4, 7, 8, 9, 10, 11, 12, 13, 14];
                _this.greater_denominatorArray = [5, 10, 10, 10, 15, 15, 15, 15, 15];

                _this.lesser_numeratorArray = [1, 1, 2, 1, 2, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8];
                _this.lesser_denominatorArray = [2, 3, 3, 5, 5, 10, 10, 10, 10, 10, 15, 15, 15, 15, 15, 15, 15, 15];
                break;
            case 10:
                _this.upper_numerator = 4;
                _this.upper_denominator = 5;

                _this.equal_numeratorArray = [8, 12];
                _this.equal_denominatorArray = [10, 15];

                _this.greater_numeratorArray = [9, 13, 14];
                _this.greater_denominatorArray = [10, 15, 15];

                _this.lesser_numeratorArray = [1, 1, 2, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
                _this.lesser_denominatorArray = [2, 3, 3, 5, 5, 5, 10, 10, 10, 10, 10, 10, 10, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, , 15];
                break;
            case 11:
                _this.upper_numerator = 1;
                _this.upper_denominator = 6;

                _this.equal_numeratorArray = [2];
                _this.equal_denominatorArray = [12];

                _this.greater_numeratorArray = [1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11];
                _this.greater_denominatorArray = [2, 3, 4, 4, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12];

                _this.lesser_numeratorArray = [1];
                _this.lesser_denominatorArray = [12];
                break;
            case 12:
                _this.upper_numerator = 2;
                _this.upper_denominator = 6;

                _this.equal_numeratorArray = [1, 4];
                _this.equal_denominatorArray = [3, 12];

                _this.greater_numeratorArray = [1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11];
                _this.greater_denominatorArray = [2, 3, 4, 4, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12];

                _this.lesser_numeratorArray = [1, 1, 1, 2, 3];
                _this.lesser_denominatorArray = [4, 6, 12, 12, 12];
                break;
            case 13:
                _this.upper_numerator = 3;
                _this.upper_denominator = 6;

                _this.equal_numeratorArray = [1, 2, 6];
                _this.equal_denominatorArray = [2, 4, 12];

                _this.greater_numeratorArray = [2, 3, 7, 8, 9, 10, 11];
                _this.greater_denominatorArray = [3, 4, 12, 12, 12, 12, 12];

                _this.lesser_numeratorArray = [1, 1, 1, 2, 4, 5, 1, 2, 3, 4, 5];
                _this.lesser_denominatorArray = [3, 4, 6, 6, 6, 6, 12, 12, 12, 12, 12];

                break;
            case 14:
                _this.upper_numerator = 4;
                _this.upper_denominator = 6;

                _this.equal_numeratorArray = [2, 8];
                _this.equal_denominatorArray = [3, 12];

                _this.greater_numeratorArray = [3, 5, 9, 10, 11,];
                _this.greater_denominatorArray = [4, 6, 12, 12, 12];

                _this.lesser_numeratorArray = [1, 1, 1, 2, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7];
                _this.lesser_denominatorArray = [2, 3, 4, 4, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12];
                break;
            case 15:
                _this.upper_numerator = 5;
                _this.upper_denominator = 6;

                _this.equal_numeratorArray = [10];
                _this.equal_denominatorArray = [12];

                _this.greater_numeratorArray = [11];
                _this.greater_denominatorArray = [12];

                _this.lesser_numeratorArray = [1, 1, 2, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                _this.lesser_denominatorArray = [2, 3, 3, 4, 4, 4, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 12];
                break;
            case 16:
                _this.upper_numerator = 1;
                _this.upper_denominator = 7;

                _this.equal_numeratorArray = [2];
                _this.equal_denominatorArray = [14];

                _this.greater_numeratorArray = [1, 2, 3, 4, 5, 6, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,];
                _this.greater_denominatorArray = [2, 7, 7, 7, 7, 7, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14];

                _this.lesser_numeratorArray = [1];
                _this.lesser_denominatorArray = [14];
                break;
            case 17:
                _this.upper_numerator = 2;
                _this.upper_denominator = 7;

                _this.equal_numeratorArray = [4];
                _this.equal_denominatorArray = [14];

                _this.greater_numeratorArray = [1, 3, 4, 5, 6, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                _this.greater_denominatorArray = [2, 7, 7, 7, 7, 14, 14, 14, 14, 14, 14, 14, 14, 14];

                _this.lesser_numeratorArray = [1, 1, 2, 3];
                _this.lesser_denominatorArray = [7, 14, 14, 14];
                break;
            case 18:
                _this.upper_numerator = 3;
                _this.upper_denominator = 7;

                _this.equal_numeratorArray = [6];
                _this.equal_denominatorArray = [14];

                _this.greater_numeratorArray = [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                _this.greater_denominatorArray = [2, 7, 7, 7, 14, 14, 14, 14, 14, 14, 14];

                _this.lesser_numeratorArray = [1, 2, 1, 2, 3, 4, 5];
                _this.lesser_denominatorArray = [7, 7, 14, 14, 14, 14, 14];
                break;
            case 19:
                _this.upper_numerator = 4;
                _this.upper_denominator = 7;

                _this.equal_numeratorArray = [4, 8];
                _this.equal_denominatorArray = [7, 14];

                _this.greater_numeratorArray = [5, 6, 9, 11, 12, 13];
                _this.greater_denominatorArray = [7, 7, 14, 14, 14, 14];

                _this.lesser_numeratorArray = [1, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7];
                _this.lesser_denominatorArray = [2, 7, 7, 7, 14, 14, 14, 14, 14, 14, 14];
                break;
            case 20:
                _this.upper_numerator = 5;
                _this.upper_denominator = 7;

                _this.equal_numeratorArray = [10];
                _this.equal_denominatorArray = [14];

                _this.greater_numeratorArray = [6, 11, 12, 13];
                _this.greater_denominatorArray = [7, 14, 14, 14];

                _this.lesser_numeratorArray = [1, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                _this.lesser_denominatorArray = [2, 7, 7, 7, 7, 14, 14, 14, 14, 14, 14, 14, 14, 14];
                break;
            case 21:
                _this.upper_numerator = 6;
                _this.upper_denominator = 7;

                _this.equal_numeratorArray = [12];
                _this.equal_denominatorArray = [14];

                _this.greater_numeratorArray = [13];
                _this.greater_denominatorArray = [14];

                _this.lesser_numeratorArray = [1, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
                _this.lesser_denominatorArray = [2, 7, 7, 7, 7, 7, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14];

                break;
            case 22:
                _this.upper_numerator = 1;
                _this.upper_denominator = 8;

                _this.equal_numeratorArray = [2];
                _this.equal_denominatorArray = [16];

                _this.greater_numeratorArray = [1, 2, 3, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
                _this.greater_denominatorArray = [2, 4, 4, 8, 8, 8, 8, 8, 8, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16];

                _this.lesser_numeratorArray = [1, 1];
                _this.lesser_denominatorArray = [4, 16];
                break;
            case 23:
                _this.upper_numerator = 2;
                _this.upper_denominator = 8;

                _this.equal_numeratorArray = [1, 4];
                _this.equal_denominatorArray = [4, 16];

                _this.greater_numeratorArray = [2, 3, 3, 4, 5, 6, 7, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
                _this.greater_denominatorArray = [4, 4, 8, 8, 8, 8, 8, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16];

                _this.lesser_numeratorArray = [1, 1, 2, 3];
                _this.lesser_denominatorArray = [8, 16, 16, 16];
                break;
            case 24:
                _this.upper_numerator = 3;
                _this.upper_denominator = 8;

                _this.equal_numeratorArray = [6];
                _this.equal_denominatorArray = [16];

                _this.greater_numeratorArray = [2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15];
                _this.greater_denominatorArray = [4, 4, 8, 8, 8, 8, 16, 16, 16, 16, 16, 16, 16, 16, 16];

                _this.lesser_numeratorArray = [1, 1, 2, 2, 3, 4, 5];
                _this.lesser_denominatorArray = [4, 8, 8, 16, 16, 16, 16];
                break;
            case 25:
                _this.upper_numerator = 4;
                _this.upper_denominator = 8;

                _this.equal_numeratorArray = [1, 2, 8];
                _this.equal_denominatorArray = [2, 4, 16];

                _this.greater_numeratorArray = [3, 5, 7, 9, 10, 11, 12, 13, 14, 15];
                _this.greater_denominatorArray = [4, 8, 8, 16, 16, 16, 16, 16, 16, 16];

                _this.lesser_numeratorArray = [1, 1, 2, 3, 6, 1, 2, 3, 4, 5, 6, 7];
                _this.lesser_denominatorArray = [4, 8, 8, 8, 8, 16, 16, 16, 16, 16, 16, 16];
                break;
            case 26:
                _this.upper_numerator = 5;
                _this.upper_denominator = 8;

                _this.equal_numeratorArray = [10];
                _this.equal_denominatorArray = [16];

                _this.greater_numeratorArray = [3, 7, 11, 12, 13, 14, 15];
                _this.greater_denominatorArray = [4, 8, 16, 16, 16, 16, 16];

                _this.lesser_numeratorArray = [1, 2, 1, 2, 3, 4, 6, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                _this.lesser_denominatorArray = [4, 4, 8, 8, 8, 8, 8, 16, 16, 16, 16, 16, 16, 16, 16, 16];
                break;
            case 27:
                _this.upper_numerator = 6;
                _this.upper_denominator = 8;

                _this.equal_numeratorArray = [3, 12];
                _this.equal_denominatorArray = [4, 16];

                _this.greater_numeratorArray = [7, 13, 14, 15];
                _this.greater_denominatorArray = [8, 16, 16, 16];

                _this.lesser_numeratorArray = [1, 2, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
                _this.lesser_denominatorArray = [4, 4, 8, 8, 8, 8, 8, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16];
                break;
            case 28:
                _this.upper_numerator = 7;
                _this.upper_denominator = 8;

                _this.equal_numeratorArray = [14];
                _this.equal_denominatorArray = [16];

                _this.greater_numeratorArray = [15];
                _this.greater_denominatorArray = [16];

                _this.lesser_numeratorArray = [1, 2, 3, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                _this.lesser_denominatorArray = [4, 4, 4, 8, 8, 8, 8, 8, 8, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16];
                break;
        }
        console.log("option" + _this.elementArray2[_this.count1]);
        //_this.equi_denominatorArray = _this.shuffle(_this.equi_denominatorArray);         
        //_this.equi_numeratorArray = _this.shuffle(_this.equi_numeratorArray);

    },

    gotoEachinstance_Vertical: function (target) {
        switch (target) {
            case 1: _this.upper_numerator = 1;
                _this.upper_denominator = 2;

                _this.equal_numeratorArray = [2, 3];
                _this.equal_denominatorArray = [4, 6];

                _this.greater_numeratorArray = [2, 3, 4, 5];
                _this.greater_denominatorArray = [3, 4, 6, 6];

                _this.lesser_numeratorArray = [1, 1, 1, 2];
                _this.lesser_denominatorArray = [3, 4, 6, 6];
                break;

            case 2: _this.upper_numerator = 1;
                _this.upper_denominator = 3;

                _this.equal_numeratorArray = [2];
                _this.equal_denominatorArray = [6];

                _this.greater_numeratorArray = [1, 2, 3, 4, 5];
                _this.greater_denominatorArray = [2, 3, 6, 6, 6];

                _this.lesser_numeratorArray = [1];
                _this.lesser_denominatorArray = [6];

                break;

            case 3: _this.upper_numerator = 2;
                _this.upper_denominator = 3;

                _this.equal_numeratorArray = [4];
                _this.equal_denominatorArray = [6];

                _this.greater_numeratorArray = [5];
                _this.greater_denominatorArray = [6];

                _this.lesser_numeratorArray = [1, 1, 2, 3];
                _this.lesser_denominatorArray = [2, 6, 6, 6];

                break;
            case 4: _this.upper_numerator = 1;
                _this.upper_denominator = 4;

                _this.greater_numeratorArray = [1, 2, 3];
                _this.greater_denominatorArray = [2, 4, 4];

                break;
            case 5: _this.upper_numerator = 2;
                _this.upper_denominator = 4;

                _this.equal_numeratorArray = [1];
                _this.equal_denominatorArray = [2];

                _this.greater_numeratorArray = [3];
                _this.greater_denominatorArray = [4];

                _this.lesser_numeratorArray = [1];
                _this.lesser_denominatorArray = [4];
                break;
            case 6: _this.upper_numerator = 3;
                _this.upper_denominator = 4;

                _this.lesser_numeratorArray = [1, 1, 2];
                _this.lesser_denominatorArray = [2, 4, 4];
                break;
            case 7: _this.upper_numerator = 1;
                _this.upper_denominator = 6;

                _this.greater_numeratorArray = [1, 1, 2, 2, 3, 4, 5];//1,2,3,
                _this.greater_denominatorArray = [2, 3, 3, 6, 6, 6, 6];//4,4,4,
                break;
            case 8: _this.upper_numerator = 2;
                _this.upper_denominator = 6;

                _this.equal_numeratorArray = [1];
                _this.equal_denominatorArray = [3];

                _this.greater_numeratorArray = [1, 2, 3, 4, 5];//3/4 2/4
                _this.greater_denominatorArray = [2, 3, 6, 6, 6];

                _this.lesser_numeratorArray = [1, 1];
                _this.lesser_denominatorArray = [4, 6];
                break;
            case 9: _this.upper_numerator = 3;
                _this.upper_denominator = 6;

                _this.equal_numeratorArray = [1];//2/4
                _this.equal_denominatorArray = [2];

                _this.greater_numeratorArray = [2, 4, 5];//3/4
                _this.greater_denominatorArray = [3, 6, 6];

                _this.lesser_numeratorArray = [1, 1, 2];//1/4
                _this.lesser_denominatorArray = [3, 6, 6];
                break;
            case 10: _this.upper_numerator = 4;
                _this.upper_denominator = 6;

                _this.equal_numeratorArray = [2];
                _this.equal_denominatorArray = [3];

                // _this.greater_numeratorArray = [3];
                // _this.greater_denominatorArray = [4];

                _this.lesser_numeratorArray = [1, 1, 1, 2, 3];//1/4 2/4
                _this.lesser_denominatorArray = [2, 3, 6, 6, 6];
                break;
            case 11: _this.upper_numerator = 5;
                _this.upper_denominator = 6;

                _this.lesser_numeratorArray = [1, 1, 2, 1, 2, 3, 4];//1/4 2/4
                _this.lesser_denominatorArray = [2, 3, 3, 6, 6, 6, 6];
                break;
        }

    },

    nextquestion: function () {
        _this.lengthMatch = false;
        _this.count1++;
        // _this.destroyObj();
        if (_this.count1 < 6) {
            if (_this.HzOrVertArray[_this.count1] == 1) {
                //_this.time.events.add(1000,function(){
                _this.gotoEachinstance(_this.elementArray1[_this.count1]);
                _this.Decide_Fractions();
                _this.gotoFractions();
                //});

            }
            else if (_this.HzOrVertArray[_this.count1] == 2) {
                // _this.time.events.add(1000,function()
                // {
                if (_this.elementArray2[_this.count1] == 1) {
                    _this.gotoEachinstance_Vertical(_this.eleArray1_ver[_this.count1]);
                }
                else if (_this.elementArray2[_this.count1] == 2) {
                    _this.gotoEachinstance_Vertical(_this.eleArray2_ver[_this.count1]);
                }
                else if (_this.elementArray2[_this.count1] == 3) {
                    _this.gotoEachinstance_Vertical(_this.eleArray3_ver[_this.count1]);
                }
                _this.Decide_Fractions();
                _this.gotoFractions();
                // });

            }
            console.log(_this.count1);

        }
        else {
            _this.stopVoice();
            _this.timer1.stop();
            _this.timer1 = null;
            //* transition to score. Score App version will show score menu - home/replay/next.
            //* Score Diksha version will end the session and show the score.
            //* appropriate version of the score should be present in commonjsfiles folder.
            _this.time.events.add(50, function () {
                //_this.state.start('score');
                _this.state.start('score', true, false,gameID,_this.microConcepts);
            });
            //_this.time.events.add(1000,function(){ _this.state.start('unity2_1_1aScore')});

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
        // _this.game_id = "NSF_7_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Fractions";
        _this.microConcepts = "Number Systems";
        //_this.anim.play();

        anim.play();
    },

    destroyObj: function () {
        _this.bigBox.destroy();
        _this.lowerCubeGrp.destroy();
        _this.lowerCubeGrpCpy.destroy();
        _this.upperCubeGrp.destroy();
        _this.upperCubeGrpCpy.destroy();
        _this.fractionBg1.destroy();
        _this.fractionBg2.destroy();
        _this.AnsBox.destroy();
        //_this.tickbtn.destroy();
        _this.tickbtn = false;
        _this.upperFractionBg.destroy();
        _this.lowerFractionBg.destroy();
        _this.greaterSym.destroy();
        _this.greaterSymCpy.destroy();
        _this.lesserSym.destroy();
        _this.lesserSymCpy.destroy();
        _this.equalSym.destroy();
        _this.equalSymCpy.destroy();
        _this.objGroup1.destroy();
        _this.objGroup3.destroy();
    },


    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },

    //* functions related to showing the demo video. 
    //* the game is paused before calling this. Once the demo video 
    //* completes or skip button is pressed, it makes _this.game.paused = false.

    DemoVideo: function () {
        //* This game is about comparison of fractions. If they are unlike fractions, 
        //* convert them to like fractions and compare.
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-7-G6/" +
            _this.languageSelected + "/NSF-7-G6-demo.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* Compare the fractions.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-7-G6/" +
            _this.languageSelected + "/NSF-7-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Place the appropriate comparison sign. 
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-7-G6/" +
            _this.languageSelected + "/NSF-7-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.showDemoVideo();  //* call the function to show the video

        // _this.backbtn1 = _this.add.sprite(10, 6, 'backbtn');
        // _this.backbtn1.inputEnabled = true;
        // _this.backbtn1.input.useHandCursor = true;
        // _this.backbtn1.events.onInputDown.add(function ()
        // {   
        //     _this.clickSound.play();
        //    // _this.stopVideo();
        //     _this.stopAudio();
        //     _this.game.paused = false;
        //     _this.state.start('grade6NumberSystems',true,false);
        // });

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.clickSound.play();
            // _this.stopVideo();
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
        if (_this.dvPause) clearTimeout(_this.dvPause);

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

        // _this.backbtn1.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                   //* skip button destroyed
        // _this.backbtn1.destroy();               //* backbutton button destroyed
    },

    //* event functions for demo audio and question audios. 
    //* do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    dA1: function () {
        _this.q1Sound.play();
        console.log("inside dA1. Playback rate: " + _this.demoVideo_1.playbackRate);
        _this.demoVideo_1.playbackRate = 1;
    },

    showDemoVideo: function () {
        //* As _this.game is paused, phaser time events cannot be used since its timer is stopped.
        //* so we have to use js timers as required

        _this.demoAudio1.play();
        _this.demoVideo_1 = _this.add.video('nsf7_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSF-7-G6_1.mp4");
        _this.videoWorld = _this.demoVideo_1.addToWorld();

        _this.dvPause = setTimeout(function ()    //* pause the video at 2 seconds.
        {
            _this.demoVideo_1.playbackRate = 0;
        }, 2000);

        _this.demoAudio1.addEventListener('ended', _this.dA1);  //* play question 1 & re-start video

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2 after 15 seconds.
        {
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 21000);

        _this.demoVideo_1.onComplete.add(function ()   //* on completion of demovideo close the video
        {
            _this.stopAudio();                  //* stop timers and audios
            _this.demoVideo_1.stop(false);      //* stop vide.
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