Game.NSD_2B_G6level1 = function () { };


Game.NSD_2B_G6level1.prototype =
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

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");
        _this.wrongSound.appendChild(_this.wrongSoundsrc);

        _this.giveShadeSound = document.createElement('audio');
        _this.giveShadeSoundsrc = document.createElement('source');
        _this.giveShadeSoundsrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.giveShadeSound.appendChild(_this.giveShadeSoundsrc);

        _this.nextOptionSound = document.createElement('audio');
        _this.nextOptionSoundsrc = document.createElement('source');
        _this.nextOptionSoundsrc.setAttribute("src", window.baseUrl + "sounds/Next_option_sound.mp3");
        _this.nextOptionSound.appendChild(_this.nextOptionSoundsrc);


        _this.Ask_Question1 = _this.createAudio("NSD-2B-G6A");
        _this.Ask_Question2 = _this.createAudio("NSD-2B-G6B");
        _this.Ask_Question3 = _this.createAudio("NSD-2B-G6C");

        telInitializerbbpp.gameIdInit("NSD_2B_G6", gradeSelected);
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
        _this.selectedAns1 = ''
        _this.selectedAns2 = ''
        _this.selectedAns3 = ''
        _this.selectedAns4 = ''

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

        _this.hint_flag = 0;// * hint flag zero
        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.Question_flag = -1;
        valuesCombinations = []

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
                if (_this.Question_flag == 2) {
                    _this.Ask_Question2.play();
                }
                if (_this.Question_flag == 3) {
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

            //* hintbtn false
            _this.hintBtn.inputEnabled = false;
            _this.hintBtn.input.useHandCursor = false;
            //* show the demo video
            _this.time.events.add(1, function () {
                _this.ViewDemoVideo();
            });

        });

        _this.numGroup;

        _this.generateStarsForTheScene(5);

        _this.target = 1;

        _this.Left_cube_X_Horizontal = [111, 145, 179, 213, 247, 281, 315, 349, 383, 417, 451, 485, 519, 553, 587, 621];
        _this.Left_cube_Y_Horizontal = 120;

        _this.workspace_Horizontal_right_X = [71, 105, 139, 173, 207, 241, 275, 309, 343, 377, 411, 445, 479, 513, 547, 581];
        _this.workspace_Horizontal_right_Y = 310;

        _this.workspace_Horizontal_left_X = [71, 105, 139, 173, 207, 241, 275, 309, 343, 377, 411, 445, 479, 513, 547, 581];
        _this.workspace_Horizontal_left_Y = 220;

        _this.Right_cube_X_Horizontal = [111, 145, 179, 213, 247, 281, 315, 349, 383, 417, 451, 485, 519, 553, 587, 621];
        _this.Right_cube_Y_Horizontal = 410;

        _this.top1 = -1;
        _this.top = -1;

        _this.Questions = [[1, 2], [1, 5], [2, 5], [3, 5], [4, 5]];
        _this.shuffle(_this.Questions);
        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);
    },


    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-2B-G6/" + _this.languageSelected + "/" + src + ".mp3");
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
        _this.gotoFractions();

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
        else if (_this.Ask_Question2) {
            _this.Ask_Question2.pause();
            _this.Ask_Question2 = null;
        }
        else {
            if (_this.Ask_Question3) {
                _this.Ask_Question3.pause();
                _this.Ask_Question3 = null;
            }
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

        _this.left_numerator = _this.Questions[_this.count1][0];
        _this.left_denominator = _this.Questions[_this.count1][1];

        _this.bigBox = _this.add.image(25, 180, 'bigBox');
        _this.bigBox.scale.setTo(1, 0.6);

        _this.empty_box = _this.add.group();
        _this.fractions = _this.add.group();
        _this.Bg_fraction_left = _this.add.sprite(25, 90, 'fraction_Bg');
        _this.Bg_fraction_left.frame = 5;
        _this.fractions.addChild(_this.Bg_fraction_left);

        _this.Question_left_Box_numerator = _this.add.text(17, 7, _this.left_numerator);
        _this.Question_left_Box_numerator.fill = '#F0461D';

        _this.Question_left_Box_denomenator = _this.add.text(17, 43, _this.left_denominator);
        _this.Question_left_Box_denomenator.fill = '#F0461D';

        _this.Bg_fraction_left.addChild(_this.Question_left_Box_numerator);
        _this.Bg_fraction_left.addChild(_this.Question_left_Box_denomenator);

        _this.addQn_cubes_to_screen();

        _this.time.events.add(500, function () {
            if (_this.count1 == 0) {
                _this.Ask_Question1.play();
                _this.time.events.add(1000, function () {
                    _this.drag_cubesAction();
                }, _this);

                _this.time.events.add(3000, function () {
                    _this.Question_flag = 1;
                    _this.EnableSelectedCube();
                }, _this);
            }
            else {
                _this.Question_flag = 1;
                _this.EnableSelectedCube();
            }
        }, _this);

        _this.tick = _this.add.sprite(840, 210, 'tick');
        _this.tick.inputEnabled = true;
        _this.tick.frame = 0;
        _this.tick.events.onInputDown.add(_this.tickClicked, _this);

    },

    drag_cubesAction: function () {
        _this.tempCubeGroup = _this.add.group();
        for (let i = 0; i < _this.left_denominator; i++) {
            _this.tempCube = _this.objGroup1.create(_this.Left_cube_X_Horizontal[i], _this.Left_cube_Y_Horizontal, '4-colour-cube_Horizontal');
            _this.tempCube.name = "" + i;
            _this.tempCube.frame = 4;
            _this.tempCubeGroup.addChild(_this.tempCube);
        }

        for (let k = _this.objGroup1.length - 1; k >= _this.left_denominator - _this.left_numerator; k--) {
            _this.tempCubeGroup.getChildAt(k).frame = 1;
        }

        _this.time.events.add(500, function () {
            _this.hand = _this.add.image(_this.Left_cube_X_Horizontal[0], _this.Left_cube_Y_Horizontal, 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
            _this.tempCubeGroup.addChild(_this.hand);
        });

        _this.time.events.add(1000, function () {
            tempDragAction = _this.add.tween(_this.tempCubeGroup);
            tempDragAction.to({ x: -20, y: 110 }, 500, 'Linear', true, 0);
            tempDragAction.start();
        });

        _this.time.events.add(1700, function () {
            _this.tempCubeGroup.destroy();
        });
    },

    EnableSelectedCube: function () {
        var denominator = _this.left_denominator;
        for (let l = 0; l < denominator; l++) {
            let currentCube;
            currentCube = _this.objGroup1.getChildAt(l);

            currentCube.inputEnabled = true;
            currentCube.input.useHandCursor = true;
            currentCube.input.enableDrag(true);
            currentCube.events.onDragUpdate.add(_this.Horizontal_Selected_left_dragUpdate, currentCube, _this);
            currentCube.events.onDragStop.add(_this.Horizontal_Selected_left_dragStop, currentCube, _this);

        }

    },

    DisableSelectedCube: function () {
        console.log("disbabligg")

        var denominator = _this.left_denominator;
        for (let l = 0; l < denominator; l++) {
            let currentCube;
            currentCube = _this.objGroup1.getChildAt(l);
            currentCube.inputEnabled = false;
        }
    },

    addQn_cubes_to_screen: function () {

        _this.holes_workspace = _this.add.group();
        _this.equalsGroup = _this.add.group();
        _this.holes = _this.add.group();
        _this.objGroup1full = _this.add.group();
        _this.objGroup2full = _this.add.group();
        _this.objGroup1cpy = _this.add.group();
        _this.objGroup2cpy = _this.add.group();

        _this.objGroup1 = _this.add.group();

        for (let i = 0; i < _this.left_denominator; i++) {
            _this.Question_cube1cpy = _this.objGroup1cpy.create(_this.Left_cube_X_Horizontal[i], _this.Left_cube_Y_Horizontal, '4-colour-cube_Horizontal');
            _this.Question_cube1 = _this.objGroup1.create(_this.Left_cube_X_Horizontal[i], _this.Left_cube_Y_Horizontal, '4-colour-cube_Horizontal');
            _this.Question_cube1.name = "" + i;
            _this.Question_cube1.frame = 4;
            _this.Question_cube1cpy.frame = 4;
        }

        for (let k = _this.objGroup1.length - 1; k >= _this.left_denominator - _this.left_numerator; k--) {
            _this.objGroup1.getChildAt(k).frame = 1;
            _this.objGroup1cpy.getChildAt(k).frame = 1;
        }
    },

    Horizontal_Selected_left_dragUpdate: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var draggedCubeY = target.y;

        for (let k = Number(target.name) + 1; k < _this.left_denominator; k++) {
            _this.objGroup1.getChildAt(k).y = draggedCubeY;
            _this.objGroup1.getChildAt(k).x = draggedCubeX + 34 * frontpos;
            frontpos++;
        }

        for (let k = Number(target.name) - 1; k >= 0; k--) {
            _this.objGroup1.getChildAt(k).y = draggedCubeY;
            _this.objGroup1.getChildAt(k).x = draggedCubeX - 34 * backpos;
            backpos++;
        }

    },

    Horizontal_Selected_left_dragStop: function (target) {

        _this.clickSound.play();
        if (target.y >= 150 && target.y <= 555) {
            for (let i = _this.top1 + 1; i < _this.left_denominator + _this.top1 + 1; i++) {
                currentCube = _this.objGroup1.getChildAt(i - _this.top1 - 1);
                currentCube.x = _this.workspace_Horizontal_left_X[i];
                currentCube.y = _this.workspace_Horizontal_left_Y;

                optionCubeCpy = _this.objGroup1full.create(_this.workspace_Horizontal_left_X[i], _this.workspace_Horizontal_left_Y, '4-colour-cube_Horizontal');
                optionCubeCpy.name = "" + i;
                optionCubeCpy.frame = currentCube.frame;
                optionCubeCpy.visible = true;

                currentCube.events.onDragStop.removeAll();
            }
            _this.top1 = _this.top1 + _this.left_denominator;
            if (_this.top1 + _this.left_denominator > 15 && _this.top1 < 16) {
                _this.DisableSelectedCube();
            }
            else {
                _this.EnableSelectedCube();
            }

        }

        else if (_this.top1 === -1) {
            for (var i = 0; i < _this.left_denominator; i++) {
                _this.objGroup1.getChildAt(i).x = _this.Left_cube_X_Horizontal[i];
                _this.objGroup1.getChildAt(i).y = _this.Left_cube_Y_Horizontal;
            }
        }

        else {
            for (var i = _this.top1 - _this.left_denominator + 1; i < _this.top1 + 1; i++) {
                _this.objGroup1.getChildAt(i - _this.top1 + _this.left_denominator - 1).x = _this.workspace_Horizontal_left_X[i];
                _this.objGroup1.getChildAt(i - _this.top1 + _this.left_denominator - 1).y = _this.workspace_Horizontal_left_Y;
            }
        }


    },

    shuffle: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex][0];
            array[currentIndex][0] = array[randomIndex][0];
            array[randomIndex][0] = temporaryValue;

            temporaryValue = array[currentIndex][1];
            array[currentIndex][1] = array[randomIndex][1];
            array[randomIndex][1] = temporaryValue;
        }

        return array;
    },

    tickClicked: function () {
        _this.tick.frame = 1;
        _this.tick.inputEnabled = false;
        if (_this.top1 === 9) {
            _this.counterCelebrationSound.play();
            _this.time.events.add(1000, function () {
                _this.tick.visible = false;
                _this.addNumberPad();
                _this.deno = _this.add.sprite(480, 242, 'text');
                _this.deno.frame = 1;
                _this.nume = _this.add.sprite(480, 187, 'text');
                _this.nume.visible = false;
                _this.line = _this.add.image(487, 237, 'blueLine');
                _this.numerator = false;
                _this.denominator = true;
                _this.target = 1;
                _this.objGroup1.destroy();

                if (_this.count1 == 0)
                    _this.Ask_Question2.play();
                _this.Question_flag = 2;

                for (let i = 0; i < 10; i++) {
                    if (_this.objGroup1full.getChildAt(i).frame === 1) {
                        _this.time.events.add(100 * i, function () {
                            _this.objGroup1full.getChildAt(i).frame = 4;
                        });
                    }
                }

                for (let i = 9, k = 11; i >= 10 - (10 / _this.left_denominator) * _this.left_numerator; i--, k++) {
                    _this.time.events.add(100 * k, function () {
                        _this.objGroup1full.getChildAt(i).frame = 1;
                    });
                }

                _this.equal1 = _this.add.text(450, 220, "=", { fontSize: '30px' });

                _this.equal1.align = 'right';
                _this.equal1.font = "Akzidenz-Grotesk BQ";
                _this.equal1.fill = '#F0461D';
                _this.equal1.fontWeight = 'Normal';
                _this.equal1.visible = true;
            });
        }
        else {
            _this.wrongSound.play();
            _this.tick.inputEnabled = true;
            _this.tick.frame = 0;
            _this.objGroup1full.destroy();
            _this.objGroup1.destroy();
            _this.objGroup1full = _this.add.group();
            _this.objGroup1 = _this.add.group();

            for (let i = 0; i < _this.left_denominator; i++) {
                _this.Question_cube1 = _this.objGroup1.create(_this.Left_cube_X_Horizontal[i], _this.Left_cube_Y_Horizontal, '4-colour-cube_Horizontal');
                _this.Question_cube1.name = "" + i;
                _this.Question_cube1.frame = 4;
            }

            for (let k = _this.objGroup1.length - 1; k >= _this.left_denominator - _this.left_numerator; k--) {
                _this.objGroup1.getChildAt(k).frame = 1;
            }

            _this.EnableSelectedCube();
            _this.top1 = -1;
            _this.top = -1;

        }
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

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.eraseScreen();
    },

    eraseScreen: function (target) {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        if (_this.denominator == true && _this.enterTxt != null) {
            _this.deno.removeChild(_this.enterTxt);
            _this.enterTxt.destroy();
            _this.enterTxt = null;
        }
        else if (_this.numerator == true && _this.enterTxt != null) {
            _this.nume.removeChild(_this.enterTxt);
            _this.enterTxt.destroy();
            _this.enterTxt = null;
        }
    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },

    numClicked: function (target) {
        _this.clickSound.play();
        var_selectedAns1 = " "
        var_selectedAns2 = " "

        if (_this.selectedAns2 === '') {
            if (_this.selectedAns1 === 0 && target.name !== 0) {
                _this.selectedAns2 = target.name;
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
            _this.deno.removeChild(_this.enterTxt);

            if (Number('' + _this.selectedAns1 + _this.selectedAns2) >= 10) {
                _this.enterTxt = _this.add.text(8, 10, Number("" + var_selectedAns1 + var_selectedAns2), { fontSize: '30px' });//43 88
                _this.enterTxt.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }
            else {
                _this.enterTxt = _this.add.text(18, 10, Number("" + var_selectedAns1 + var_selectedAns2), { fontSize: '30px' });//43 88
                _this.enterTxt.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }

            _this.deno.addChild(_this.enterTxt);
            _this.deno.name = _this.enterTxt.name;
            _this.enterTxt.align = 'right';
            _this.enterTxt.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt.fill = '#65B4C3';
            _this.enterTxt.fontWeight = 'Normal';
            _this.enterTxt.visible = true;

        }
        else if (_this.numerator == true) {
            _this.nume.removeChild(_this.enterTxt);

            if (Number('' + _this.selectedAns1 + _this.selectedAns2) >= 10) {
                _this.enterTxt = _this.add.text(8, 10, Number("" + var_selectedAns1 + var_selectedAns2), { fontSize: '30px' });//36 23
                _this.enterTxt.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }

            else {
                _this.enterTxt = _this.add.text(18, 10, Number("" + var_selectedAns1 + var_selectedAns2), { fontSize: '30px' });//20,10
                _this.enterTxt.name = Number('' + var_selectedAns1 + var_selectedAns2);

            }

            _this.nume.addChild(_this.enterTxt);
            _this.nume.name = _this.enterTxt.name;

            _this.enterTxt.align = 'right';
            _this.enterTxt.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt.fill = '#65B4C3';
            _this.enterTxt.fontWeight = 'Normal';
            _this.enterTxt.visible = true;
        }
    },

    rightbtnClicked: function () {
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        if (_this.enterTxt == null || _this.enterTxt.name == "") {
            _this.wrongSound.play();
            _this.rightbtn.inputEnabled = true;
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
        }
        else if (_this.target == 1) {
            if ((Number(_this.enterTxt.name) == 10)) {
                _this.time.events.add(500, function () {
                    _this.counterCelebrationSound.play();
                    _this.numerator = true;
                    _this.denominator = false;
                    _this.nume.frame = 1;
                    _this.deno.frame = 0;
                    _this.rightbtn.inputEnabled = true;
                    _this.target = 2;

                    _this.deno.removeChild(_this.enterTxt);

                    if (Number('' + _this.selectedAns1 + _this.selectedAns2) >= 10) {
                        _this.enterTxt_1 = _this.add.text(8, 10, Number("" + var_selectedAns1 + var_selectedAns2), { fontSize: '30px' });//43 88
                        _this.enterTxt_1.name = Number('' + var_selectedAns1 + var_selectedAns2);
                    }
                    else {
                        _this.enterTxt_1 = _this.add.text(18, 10, Number("" + var_selectedAns1 + var_selectedAns2), { fontSize: '30px' });//43 88
                        _this.enterTxt_1.name = Number('' + var_selectedAns1 + var_selectedAns2);
                    }

                    _this.selectedAns1 = '';
                    _this.selectedAns2 = '';

                    _this.deno.addChild(_this.enterTxt_1);
                    _this.deno.name = _this.enterTxt_1.name;
                    _this.enterTxt_1.align = 'right';
                    _this.enterTxt_1.font = "Akzidenz-Grotesk BQ";
                    _this.enterTxt_1.fill = '#65B4C3';
                    _this.enterTxt_1.fontWeight = 'Normal';
                    _this.enterTxt_1.visible = true;

                    _this.enterTxt.destroy();
                    _this.enterTxt = null;

                    _this.nume.visible = true;
                });
            }
            else {
                _this.wrongSound.play();
                _this.rightbtn.inputEnabled = true;
                if (_this.enterTxt != null) {
                    _this.deno.removeChild(_this.enterTxt);
                    _this.enterTxt.destroy();
                    _this.enterTxt = null;
                }
                _this.deno.frame = 1;
                _this.nume.frame = 0;
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
            }
        }
        else if (_this.target == 2) {
            if ((Number(_this.enterTxt.name) === (10 / _this.left_denominator) * _this.left_numerator)) {
                _this.time.events.add(500, function () {
                    _this.counterCelebrationSound.play();
                    _this.numerator = false;
                    _this.denominator = false;
                    _this.nume.frame = 0;
                    _this.deno.frame = 0;
                    _this.rightbtn.inputEnabled = true;
                    _this.target = 3;

                    _this.nume.removeChild(_this.enterTxt);

                    if (Number('' + _this.selectedAns1 + _this.selectedAns2) >= 10) {
                        _this.enterTxt_2 = _this.add.text(8, 10, Number("" + var_selectedAns1 + var_selectedAns2), { fontSize: '30px' });//36 23
                        _this.enterTxt_2.name = Number('' + var_selectedAns1 + var_selectedAns2);
                    }

                    else {
                        _this.enterTxt_2 = _this.add.text(18, 10, Number("" + var_selectedAns1 + var_selectedAns2), { fontSize: '30px' });//20,10
                        _this.enterTxt_2.name = Number('' + var_selectedAns1 + var_selectedAns2);

                    }

                    _this.selectedAns1 = '';
                    _this.selectedAns2 = '';

                    _this.nume.addChild(_this.enterTxt_2);
                    _this.nume.name = _this.enterTxt_2.name;

                    _this.enterTxt_2.align = 'right';
                    _this.enterTxt_2.font = "Akzidenz-Grotesk BQ";
                    _this.enterTxt_2.fill = '#65B4C3';
                    _this.enterTxt_2.fontWeight = 'Normal';
                    _this.enterTxt_2.visible = true;

                    _this.enterTxt.destroy();
                    _this.enterTxt = null;

                    _this.numGroup.destroy();
                    _this.addNumberPad_1();

                    _this.AnswerBox = _this.add.image(560, 215, 'text');
                    _this.AnswerBox.scale.setTo(1.4, 1);

                    _this.equal2 = _this.add.text(535, 220, "=", { fontSize: '30px' });

                    _this.equal2.align = 'right';
                    _this.equal2.font = "Akzidenz-Grotesk BQ";
                    _this.equal2.fill = '#F0461D';
                    _this.equal2.fontWeight = 'Normal';
                    _this.equal2.visible = true;

                    if (_this.count1 == 0)
                        _this.Ask_Question3.play();
                    _this.Question_flag = 3;

                });
            }
            else {
                _this.wrongSound.play();
                _this.rightbtn.inputEnabled = true;
                if (_this.enterTxt != null) {
                    _this.nume.removeChild(_this.enterTxt);
                    _this.enterTxt.destroy();
                    _this.enterTxt = null;
                }
                _this.deno.frame = 0;
                _this.nume.frame = 1;
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
            }
        }
    },


    addNumberPad_1: function () {

        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';
        _this.selectedAns4 = '';

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        //bottomnumpadbg.anchor.setTo(0.5);
        bottomnumpadbg.scale.setTo(1, 1);

        // bottomnumpadbg.name = "numpadbg";

        _this.x = 40;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;

        for (let i = 0; i < 11; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            if (i == 10)
                _this.numbg.name = '.';
            else if (i == 9)
                _this.numbg.name = 0;
            else
                _this.numbg.name = i + 1;
            _this.numbg.frame = i;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked_1, _this);

            _this.x += 73;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 0, 552, 'Numberpad');
        _this.wrongbtn.frame = 11;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked_1, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 73, 552, 'Numberpad');
        _this.rightbtn.frame = 12;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked_1, _this);

        _this.enterTxt = _this.add.text(8, 8, "");
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fontSize = "30px";
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.fill = '#65B4C3';

        //_this.objGroup.add(_this.ScreenTextBox);
        _this.numpadTween = _this.add.tween(_this.numGroup);
        _this.tweenNumPad_1();
    },

    // numClicked_1: function (target) {
    //     _this.clickSound.play();


    //     if (_this.selectedAns1 === '') {
    //         _this.selectedAns1 = target.name;
    //     }
    //     else if (_this.selectedAns2 === '') {
    //         _this.selectedAns2 = target.name;
    //     }
    //     else if (_this.selectedAns3 === '') {
    //         _this.selectedAns3 = target.name;
    //     }

    //     _this.AnswerBox.removeChild(_this.enterTxt);
    //     _this.enterTxt = '';

    //     if (_this.selectedAns1 !== '' && _this.selectedAns2 !== '' && _this.selectedAns3 === '') {
    //         _this.enterTxt = _this.add.text(15, 10, "" + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3, { fontSize: '30px' });//36 23
    //         _this.enterTxt.name = '' + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3;
    //     }

    //     else if (_this.selectedAns1 !== '' && _this.selectedAns2 !== '' && _this.selectedAns3 !== '') {
    //         _this.enterTxt = _this.add.text(10, 10, "" + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3, { fontSize: '30px' });//36 23
    //         _this.enterTxt.name = '' + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3;
    //     }

    //     else if (_this.selectedAns1 !== '' && _this.selectedAns2 === '' && _this.selectedAns3 === '') {
    //         _this.enterTxt = _this.add.text(20, 10, "" + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3, { fontSize: '30px' });//20,10
    //         _this.enterTxt.name = '' + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3;

    //     }
    //     else {
    //         _this.enterTxt = _this.add.text(15, 10, "" + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3, { fontSize: '30px' });//20,10
    //         _this.enterTxt.name = '' + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3;
    //     }

    //     _this.AnswerBox.addChild(_this.enterTxt);
    //     _this.AnswerBox.name = _this.enterTxt.name;

    //     _this.enterTxt.align = 'right';
    //     _this.enterTxt.font = "Akzidenz-Grotesk BQ";
    //     _this.enterTxt.fill = '#65B4C3';
    //     _this.enterTxt.fontWeight = 'Normal';
    //     _this.enterTxt.scale.setTo(0.7146, 1);
    //     _this.enterTxt.visible = true;

    // }, 

    //edited on 11-03-2023
    //added selectedans4.
    numClicked_1: function (target) {
        console.log("numClicked_1");
        _this.clickSound.play();


        if (_this.selectedAns1 === '') {
            _this.selectedAns1 = target.name;
        }
        else if (_this.selectedAns2 === '') {
            _this.selectedAns2 = target.name;
        }
        else if (_this.selectedAns3 === '') {
            _this.selectedAns3 = target.name;
        }
        else if (_this.selectedAns4 === '') {
            _this.selectedAns4 = target.name;
        }

        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.enterTxt = '';

        if (_this.selectedAns1 !== '' && _this.selectedAns2 !== '' && _this.selectedAns3 === '') {
            console.log("1");
            _this.enterTxt = _this.add.text(15, 10, "" + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3, { fontSize: '23px' });//36 23
            _this.enterTxt.name = '' + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3;
        }
        else if (_this.selectedAns1 !== '' && _this.selectedAns2 !== '' && _this.selectedAns3 === '' && _this.selectedAns4 === '') {
            console.log("2");
            _this.enterTxt = _this.add.text(15, 10, "" + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3 + _this.selectedAns4, { fontSize: '23px' });//36 23
            _this.enterTxt.name = '' + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3 + _this.selectedAns4;
        }

        else if (_this.selectedAns1 !== '' && _this.selectedAns2 !== '' && _this.selectedAns3 !== '' && _this.selectedAns4 === '') {
            console.log("4");
            _this.enterTxt = _this.add.text(10, 10, "" + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3 + _this.selectedAns4, { fontSize: '23px' });//36 23
            _this.enterTxt.name = '' + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3 + _this.selectedAns4;
        }

        else if (_this.selectedAns1 !== '' && _this.selectedAns2 !== '' && _this.selectedAns3 !== '' && _this.selectedAns4 !== '') {
            console.log("5");
            _this.enterTxt = _this.add.text(10, 10, "" + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3 + _this.selectedAns4, { fontSize: '23px' });//36 23
            _this.enterTxt.name = '' + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3 + _this.selectedAns4;
        }

        else if (_this.selectedAns1 !== '' && _this.selectedAns2 === '' && _this.selectedAns3 === '') {
            console.log("6");
            _this.enterTxt = _this.add.text(20, 10, "" + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3, { fontSize: '23px' });//20,10
            _this.enterTxt.name = '' + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3;

        }
        else if (_this.selectedAns1 !== '' && _this.selectedAns2 === '' && _this.selectedAns3 === '' && _this.selectedAns4 === '') {
            console.log("7");
            _this.enterTxt = _this.add.text(20, 10, "" + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3 + _this.selectedAns4, { fontSize: '23px' });//20,10
            _this.enterTxt.name = '' + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3 + _this.selectedAns4;

        }
        else {
            console.log("8");
            _this.enterTxt = _this.add.text(15, 10, "" + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3 + _this.selectedAns4, { fontSize: '23px' });//20,10
            _this.enterTxt.name = '' + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3 + _this.selectedAns4;
        }

        _this.AnswerBox.addChild(_this.enterTxt);
        _this.AnswerBox.name = _this.enterTxt.name;

        _this.enterTxt.align = 'right';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.fontWeight = 'Normal';
        _this.enterTxt.scale.setTo(0.7146, 1);
        _this.enterTxt.visible = true;

        console.log(_this.selectedAns1, "_this.selectedAns1 ")
        console.log(_this.selectedAns2, "_this.selectedAns2 ")
        console.log(_this.selectedAns3, "_this.selectedAns3 ")
        console.log(_this.selectedAns4, "_this.selectedAns4 ")

    },


    rightbtnClicked_1: function () {
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.noofAttempts++;
        // console.log(Number('' + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3), (1 / _this.left_denominator) * _this.left_numerator);

        if (Number('' + _this.selectedAns1 + _this.selectedAns2 + _this.selectedAns3 + _this.selectedAns4) * 10 == (10 / _this.left_denominator) * _this.left_numerator && _this.selectedAns4 == 0) {


            _this.celebrationSound.play();
            _this.starActions(_this.count1);
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.time.events.add(2000, function () {
                _this.bigBox.destroy();
                _this.objGroup1.destroy();
                _this.objGroup1full.destroy();
                _this.equal1.destroy();
                _this.equal2.destroy();
                _this.AnswerBox.destroy();
                _this.deno.destroy();
                _this.nume.destroy();
                _this.fractions.destroy();
                _this.objGroup1cpy.destroy();
                _this.line.destroy();

                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
                _this.selectedAns3 = '';
                _this.selectedAns4 = '';

                _this.enterTxt.destroy();
                _this.numGroup.destroy();

                _this.top1 = -1;
                _this.top = -1;

                if (_this.count1 < 5)
                    _this.time.events.add(1000, _this.gotoFractions, _this);

                else {
                    _this.time.events.add(1500, () => {
                        // _this.state.start('score', true, false);
                        _this.state.start('score', true, false,gameID,_this.microConcepts);

                    }, _this)
                }


            });
        }

        else {
            _this.rightbtn.inputEnabled = true;
            _this.wrongSound.play();
            _this.wrongbtnClicked_1();
        }
    },

    wrongbtnClicked_1: function (target) {
        _this.clickSound.play();
        _this.eraseScreen_1();
    },

    eraseScreen_1: function (target) {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';
        _this.selectedAns4 = '';
        if (_this.enterTxt != null) {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.enterTxt.destroy();
            _this.enterTxt = null;
        }
    },

    tweenNumPad_1: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

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
        // _this.game_id = "NSD_2B_G6";
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
        //*  This game helps us convert fractions into decimal numbers.
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSD-2B-G6/" + _this.languageSelected + "/DV-NSD_2B_G6A.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //*  Decimal fractions are fractions with denominators 10, 100, 1000 and so on.
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/NSD-2B-G6/" + _this.languageSelected + "/DV-NSD_2B_G6B.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //* Drag the unifix cubes and find the equivalent decimal fraction
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-2B-G6/" +
            _this.languageSelected + "/NSD-2B-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Count and type the decimal fraction
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-2B-G6/" +
            _this.languageSelected + "/NSD-2B-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* Convert the fraction into a decimal number and type the answer.
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-2B-G6/" +
            _this.languageSelected + "/NSD-2B-G6C.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

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

        if (_this.demoAudio2Timer) clearTimeout(_this.demoAudio2Timer);
        if (_this.q1Timer) clearTimeout(_this.q1Timer);
        if (_this.q3Timer) clearTimeout(_this.q3Timer);

        if (_this.demoAudio1) {
            console.log("removing the demo audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.demoAudio2) {
            console.log("removing the demo audio1");
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

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed

    },

    dA1: function () {
        _this.demoVideo_1.playbackRate = 0;
        _this.q2Sound.play();
    },

    q21: function () {
        _this.demoVideo_1.playbackRate = 1;
    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('nsd2b_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSD-2B-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        //* play the demo audio1 
        _this.demoAudio1.play();

        _this.q1Timer = setTimeout(function ()    //* q1 js timer to play q1Timer after 6500 seconds.
        {
            console.log("inside q1sound.....")
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 6500);

        _this.demoAudio2Timer = setTimeout(function ()    //* da2 js timer to play demoAudio2Timer after 4 seconds.
        {
            console.log("inside da2sound.....")
            clearTimeout(_this.demoAudio2Timer);         //* clear the time once its used.
            _this.demoAudio2.play();
        }, 13000);

        _this.demoAudio2.addEventListener('ended', _this.dA1);

        _this.q2Sound.addEventListener('ended', _this.q21);

        _this.q3Timer = setTimeout(function ()    //* q3 js timer to play q3Timer after 38 seconds.
        {
            console.log("inside q3sound.....")
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 36000);

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