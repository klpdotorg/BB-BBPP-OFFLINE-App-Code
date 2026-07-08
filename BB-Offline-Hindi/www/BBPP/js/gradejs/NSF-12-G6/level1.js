Game.NSF_12_G6level1 = function () { };


Game.NSF_12_G6level1.prototype =
{

    init: function () {
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

        telInitializerbbpp.gameIdInit("NSF_12_G6", gradeSelected);
        console.log(gameID, "gameID...");
    },


    create: function (game) {

        //* show the demo video
        _this.time.events.add(1, function () {
            _this.ViewDemoVideo();
        });

        //* start the game with delay. Since the Demo video will pause the game, the timer will freeze
        //* and then start after the game is unpaused and continues to call the gameCreate function.
        _this.time.events.add(1500, function () {
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

        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        // //* BB plus variables
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

        _this.qn_flag = -1;
        _this.voicecnt = 0;

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        _this.navBar = _this.add.sprite(0, 0, 'navBar');
        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');

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

        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;
        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                if (_this.qn_flag == 1) {
                    _this.voiceNote1();
                }
                if (_this.qn_flag == 2) {
                    _this.voiceNote2();
                }
                if (_this.qn_flag == 3) {
                    _this.voiceNote3();
                }
                if (_this.qn_flag == 4) {
                    _this.voiceNote4();
                }

                _this.time.events.add(5000, function () {
                    _this.speakerbtn.inputEnabled = true;
                    _this.speakerbtn.input.useHandCursor = true;
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

        _this.Question1;
        _this.Question2;
        _this.Question3;
        _this.Question4;

        _this.generateStarsForTheScene(6);

        _this.numGroup;
        _this.target = 1;

        //* first digit and second digit of number selected on number pad
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';

        _this.numberBoxPlacing = [];
        _this.tweens = 0;

        //*x coordinate for question cubes
        _this.Left_cube_X_Horizontal = [111, 145, 179, 213, 247, 281, 315, 349, 383, 417, 451, 485, 519, 553, 587, 621];
        _this.Left_cube_Y_Horizontal = 120;

        _this.Left_cube_X_Vertical = 206;
        _this.Left_cube_Y_Vertical = [315, 281, 247, 213, 179, 145];

        _this.workspace_Horizontal_right_X = [71, 105, 139, 173, 207, 241, 275, 309, 343, 377, 411, 445, 479, 513, 547, 581];
        _this.workspace_Horizontal_right_Y = 310;

        //111, 145, 179, 213, 247, 281, 315, 349, 383, 417, 451, 485, 519, 553, 587, 621
        _this.workspace_Horizontal_left_X = [71, 105, 139, 173, 207, 241, 275, 309, 343, 377, 411, 445, 479, 513, 547, 581];
        _this.workspace_Horizontal_left_Y = 220;

        _this.workspace_Vertical_left_X = 304;
        _this.workspace_Vertical_left_Y = [315, 281, 247, 213, 179, 145];

        _this.workspace_Vertical_right_X = 389;
        _this.workspace_Vertical_right_Y = [315, 281, 247, 213, 179, 145];

        _this.Right_cube_X_Horizontal = [111, 145, 179, 213, 247, 281, 315, 349, 383, 417, 451, 485, 519, 553, 587, 621];
        _this.Right_cube_Y_Horizontal = 410;

        _this.Right_cube_X_Vertical = 480;
        _this.Right_cube_Y_Vertical = [315, 281, 247, 213, 179, 145];

        _this.fractionBoxCount = 0;
        _this.top1 = -1;
        _this.top2 = -1;
        _this.top = -1;

        //* start the game with first question
        _this.time.events.add(500, _this.getQuestion);
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
        _this.count = 0;
        _this.randomizing_elements();
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

        if (_this.Question4) {
            if (_this.Question4.contains(_this.Question4src)) {
                _this.Question4.removeChild(_this.Question4src);
                _this.Question4src = null;
            }

            if (!_this.Question4.paused) {
                _this.Question4.pause();
                _this.Question4.currentTime = 0.0;
            }
            _this.Question4 = null;
            _this.Question4src = null;
        }

        if (_this.celebrationSound) {
            if (_this.celebrationSound.isPlaying) {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }
    },

    pauseVoice: function () {
        if (_this.Question1) {
            _this.Question1.pause();
            _this.Question1.currentTime = 0.0;
            _this.Question1.pause();
            _this.Question1.currentTime = 0.0;
        }
        if (_this.Question2) {
            _this.Question2.pause();
            _this.Question2.currentTime = 0.0;
            _this.Question2.pause();
            _this.Question2.currentTime = 0.0;
        }
        if (_this.Question3) {
            _this.Question3.pause();
            _this.Question3.currentTime = 0.0;
            _this.Question3.pause();
            _this.Question3.currentTime = 0.0;
        }
        if (_this.Question4) {
            _this.Question4.pause();
            _this.Question4.currentTime = 0.0;
            _this.Question4.pause();
            _this.Question4.currentTime = 0.0;
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

        _this.left_numerator = _this.Questions[_this.count][0];
        _this.left_denominator = _this.Questions[_this.count][1];
        _this.right_numerator = _this.Questions[_this.count][2];
        _this.right_denominator = _this.Questions[_this.count][3];

        if (_this.Questions[_this.count][4] === 16) {
            _this.bigBox = _this.add.image(25, 180, 'bigBox');
            _this.bigBox_1 = _this.add.image(25, 180, 'bigBox_1');
            _this.bigBox_1.visible = false;

            _this.empty_box = _this.add.group();
            _this.fractions = _this.add.group();
            _this.Bg_fraction_left = _this.add.sprite(25, 90, 'fraction_Bg');
            _this.Bg_fraction_left.frame = 0;
            _this.fractions.addChild(_this.Bg_fraction_left);

            _this.Bg_fraction_right = _this.add.sprite(25, 385, 'fraction_Bg');
            _this.Bg_fraction_right.frame = 0;
            _this.fractions.addChild(_this.Bg_fraction_right);

            _this.smallBox = _this.add.image(800, 50, 'smallBox');
        }
        else if (_this.Questions[_this.count][4] === 6) {
            _this.bigBox = _this.add.image(275, 60, 'smallBox_1');
            _this.bigBox_1 = _this.add.image(275, 60, 'bigBox_2');
            _this.bigBox_1.visible = false;

            _this.empty_box = _this.add.group();
            _this.fractions = _this.add.group();
            _this.bigBox.scale.setTo(1.3, 1.6);
            _this.Bg_fraction_left = _this.add.sprite(201, 370, 'fraction_Bg');
            _this.Bg_fraction_left.frame = 0;
            _this.fractions.addChild(_this.Bg_fraction_left);

            _this.Bg_fraction_right = _this.add.sprite(475, 370, 'fraction_Bg');
            _this.Bg_fraction_right.frame = 0;
            _this.fractions.addChild(_this.Bg_fraction_right);

            _this.smallBox = _this.add.image(750, 102, 'smallBox');
        }

        if (_this.left_numerator > 9) {
            _this.Question_left_Box_numerator = _this.add.text(23, 20, _this.left_numerator);
            _this.Question_left_Box_numerator.fill = '#38B8E1';
        }

        else {
            _this.Question_left_Box_numerator = _this.add.text(30, 20, _this.left_numerator);
            _this.Question_left_Box_numerator.fill = '#38B8E1';
        }

        if (_this.right_numerator > 9) {
            _this.Question_right_Box_numerator = _this.add.text(87, 20, _this.right_numerator);
            _this.Question_right_Box_numerator.fill = '#38B8E1';
        }

        else {
            _this.Question_right_Box_numerator = _this.add.text(90, 20, _this.right_numerator);
            _this.Question_right_Box_numerator.fill = '#38B8E1';
        }

        if (_this.left_denominator > 9) {
            _this.Question_left_Box_denomenator = _this.add.text(23, 48, _this.left_denominator);
            _this.Question_left_Box_denomenator.fill = '#38B8E1';
        }

        else {
            _this.Question_left_Box_denomenator = _this.add.text(30, 48, _this.left_denominator);
            _this.Question_left_Box_denomenator.fill = '#38B8E1';
        }

        if (_this.right_denominator > 9) {
            _this.Question_right_Box_denomenator = _this.add.text(87, 48, _this.right_denominator);
            _this.Question_right_Box_denomenator.fill = '#38B8E1';
        }

        else {
            _this.Question_right_Box_denomenator = _this.add.text(90, 48, _this.right_denominator);
            _this.Question_right_Box_denomenator.fill = '#38B8E1';
        }

        _this.smallBox.addChild(_this.Question_left_Box_numerator);
        _this.smallBox.addChild(_this.Question_left_Box_denomenator);
        _this.smallBox.addChild(_this.Question_right_Box_numerator);
        _this.smallBox.addChild(_this.Question_right_Box_denomenator);

        _this.plus = _this.add.text(63, 35, '+');
        _this.plus.fill = '#38B8E1';
        _this.smallBox.addChild(_this.plus);

        _this.addQn_cubes_to_screen();

        _this.time.events.add(500, function () {
            if (_this.count == 0) {
                _this.voiceNote1();
                _this.time.events.add(3000, function () {
                    _this.qn_flag = 1;
                    _this.drag_cubesAction_Vertical();
                    _this.time.events.add(1000, function () {
                        _this.EnableSelectedCube(1);
                        _this.EnableSelectedCube(2);
                    });
                });
            }
            else {
                _this.qn_flag = 1;
                _this.EnableSelectedCube(1);
                _this.EnableSelectedCube(2);
            }
        });

    },

    voiceNote1: function () {
        _this.pauseVoice()
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-12-G6/" + _this.languageSelected + "/NSF-12-G6-a.mp3");
        _this.Question1.appendChild(_this.Question1src);

        _this.Question1.play();

    },

    voiceNote2: function () {

        _this.pauseVoice();
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/NSF-12-G6/" + _this.languageSelected + "/NSF-12-G6-b.mp3");
        _this.Question2.appendChild(_this.Question2src);

        _this.Question2.play();

    },

    voiceNote3: function () {
        _this.pauseVoice();
        _this.Question3 = document.createElement('audio');
        _this.Question3src = document.createElement('source');
        _this.Question3src.setAttribute("src", window.baseUrl + "questionSounds/NSF-12-G6/" + _this.languageSelected + "/EnterEqFr.mp3");
        _this.Question3.appendChild(_this.Question3src);

        _this.Question3.play();
    },

    voiceNote4: function () {
        _this.pauseVoice();
        _this.Question4 = document.createElement('audio');
        _this.Question4src = document.createElement('source');
        _this.Question4src.setAttribute("src", window.baseUrl + "questionSounds/NSF-12-G6/" + _this.languageSelected + "/NSF-12-G6-d.mp3");
        _this.Question4.appendChild(_this.Question4src);
        _this.Question4.play();
    },

    drag_cubesAction_Vertical: function () {
        _this.tempCubeGroup = _this.add.group();
        for (var i = 0; i < _this.left_denominator; i++) {
            _this.tempCube = _this.add.sprite(_this.Left_cube_X_Vertical, _this.Left_cube_Y_Vertical[i], '4-colour-cube');
            _this.tempCube.frame = 3;
            _this.tempCubeGroup.addChild(_this.tempCube);
        }

        for (var k = _this.left_denominator - 1; k >= _this.left_denominator - _this.left_numerator; k--) {
            _this.tempCubeGroup.getChildAt(k).frame = 2;
        }

        _this.time.events.add(1000, function () {
            _this.hand = _this.add.image(_this.Left_cube_X_Vertical + 20, _this.Left_cube_Y_Vertical[0], 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
            _this.tempCubeGroup.addChild(_this.hand);
        });

        _this.time.events.add(1500, function () {
            tempDragAction = _this.add.tween(_this.tempCubeGroup);
            tempDragAction.to({ x: 110, y: 1 }, 500, 'Linear', true, 0);
            tempDragAction.start();
        });

        _this.time.events.add(3000, function () {
            _this.tempCubeGroup.destroy();
        });
    },

    EnableSelectedCube: function (target) {
        var denominator = target === 1 ? _this.left_denominator : _this.right_denominator;
        if (_this.Questions[_this.count][4] === 16) {
            for (l = 0; l < denominator; l++) {
                let currentCube;
                if (target === 1)
                    currentCube = _this.objGroup1.getChildAt(l);
                else
                    currentCube = _this.objGroup2.getChildAt(l);

                currentCube.inputEnabled = true;
                currentCube.input.useHandCursor = true;
                currentCube.input.enableDrag(true);

                if (target === 1) {
                    currentCube.events.onDragUpdate.add(_this.Horizontal_Selected_left_dragUpdate, currentCube);
                    currentCube.events.onDragStop.add(_this.Horizontal_Selected_left_dragStop, currentCube);
                }
                else {
                    currentCube.events.onDragUpdate.add(_this.Horizontal_Selected_right_dragUpdate, currentCube);
                    currentCube.events.onDragStop.add(_this.Horizontal_Selected_right_dragStop, currentCube);
                }
            }
        }
        else if (_this.Questions[_this.count][4] === 6) {
            for (l = 0; l < denominator; l++) {
                let currentCube;
                if (target === 1)
                    currentCube = _this.objGroup1.getChildAt(l);
                else
                    currentCube = _this.objGroup2.getChildAt(l);

                currentCube.inputEnabled = true;
                currentCube.input.useHandCursor = true;
                currentCube.input.enableDrag(true);

                if (target === 1) {
                    currentCube.events.onDragUpdate.add(_this.Vertical_Selected_left_dragUpdate, currentCube);
                    currentCube.events.onDragStop.add(_this.Vertical_Selected_left_dragStop, currentCube);
                }
                else {
                    currentCube.events.onDragUpdate.add(_this.Vertical_Selected_right_dragUpdate, currentCube);
                    currentCube.events.onDragStop.add(_this.Vertical_Selected_right_dragStop, currentCube);
                }
            }
        }
    },

    DisableSelectedCube: function (target) {
        var denominator = target === 1 ? _this.left_denominator : _this.right_denominator;
        if (_this.Questions[_this.count][4] === 16) {
            for (l = 0; l < denominator; l++) {
                let currentCube;
                if (target === 1)
                    currentCube = _this.objGroup1.getChildAt(l);
                else
                    currentCube = _this.objGroup2.getChildAt(l);
                currentCube.inputEnabled = false;
            }
        }
        else if (_this.Questions[_this.count][4] === 6) {
            for (l = 0; l < denominator; l++) {
                let currentCube;
                if (target === 1)
                    currentCube = _this.objGroup1.getChildAt(l);
                else
                    currentCube = _this.objGroup2.getChildAt(l);
                currentCube.inputEnabled = false;
            }
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

        _this.objGroup2 = _this.add.group();
        _this.objGroup1 = _this.add.group();

        if (_this.left_denominator > 9) {
            _this.left_Box_denomenator = _this.add.text(11, 40, _this.left_denominator);
            _this.left_Box_denomenator.fill = '#38B8E1';
        }
        else {
            _this.left_Box_denomenator = _this.add.text(15, 40, _this.left_denominator);
            _this.left_Box_denomenator.fill = '#38B8E1';
        }

        if (_this.left_numerator > 9) {
            _this.left_Box_numerator = _this.add.text(11, 10, _this.left_numerator);
            _this.left_Box_numerator.fill = '#38B8E1';
        }
        else {
            _this.left_Box_numerator = _this.add.text(15, 10, _this.left_numerator);
            _this.left_Box_numerator.fill = '#38B8E1';
        }

        if (_this.right_denominator > 9) {
            _this.right_Box_denomenator = _this.add.text(11, 40, _this.right_denominator);
            _this.right_Box_denomenator.fill = '#38B8E1';
        }
        else {
            _this.right_Box_denomenator = _this.add.text(15, 40, _this.right_denominator);
            _this.right_Box_denomenator.fill = '#38B8E1';
        }

        if (_this.right_numerator > 9) {
            _this.right_Box_numerator = _this.add.text(11, 10, _this.right_numerator);
            _this.right_Box_numerator.fill = '#38B8E1';
        }
        else {
            _this.right_Box_numerator = _this.add.text(15, 10, _this.right_numerator);
            _this.right_Box_numerator.fill = '#38B8E1';
        }

        _this.Bg_fraction_left.addChild(_this.left_Box_numerator);
        _this.Bg_fraction_left.addChild(_this.left_Box_denomenator);

        _this.Bg_fraction_right.addChild(_this.right_Box_numerator);
        _this.Bg_fraction_right.addChild(_this.right_Box_denomenator);

        if (_this.Questions[_this.count][4] === 16) {
            for (i = 0; i < _this.left_denominator; i++) {
                _this.Question_cube1cpy = _this.objGroup1cpy.create(_this.Left_cube_X_Horizontal[i], _this.Left_cube_Y_Horizontal, '4-colour-cube_Horizontal');
                _this.Question_cube1 = _this.objGroup1.create(_this.Left_cube_X_Horizontal[i], _this.Left_cube_Y_Horizontal, '4-colour-cube_Horizontal');
                _this.Question_cube1.name = "" + i;
                _this.Question_cube1.frame = 4;
                _this.Question_cube1cpy.frame = 4;
            }

            for (k = _this.objGroup1.length - 1; k >= _this.left_denominator - _this.left_numerator; k--) {
                _this.objGroup1.getChildAt(k).frame = 1;
                _this.objGroup1cpy.getChildAt(k).frame = 1;
            }

            for (i = 0; i < _this.right_denominator; i++) {
                _this.Question_cube2cpy = _this.objGroup2cpy.create(_this.Right_cube_X_Horizontal[i], _this.Right_cube_Y_Horizontal, '4-colour-cube_Horizontal');
                _this.Question_cube2 = _this.objGroup2.create(_this.Right_cube_X_Horizontal[i], _this.Right_cube_Y_Horizontal, '4-colour-cube_Horizontal'); _this.Question_cube2.name = "" + i;
                _this.Question_cube2.frame = 4;
                _this.Question_cube2cpy.frame = 4;
            }

            for (k = _this.objGroup2.length - 1; k >= _this.right_denominator - _this.right_numerator; k--) {
                _this.objGroup2.getChildAt(k).frame = 2;
                _this.objGroup2cpy.getChildAt(k).frame = 2;
            }
        }
        else {
            for (i = 0; i < _this.left_denominator; i++) {
                _this.Question_cube1cpy = _this.objGroup1cpy.create(_this.Left_cube_X_Vertical, _this.Left_cube_Y_Vertical[i], '4-colour-cube');
                _this.Question_cube1 = _this.objGroup1.create(_this.Left_cube_X_Vertical, _this.Left_cube_Y_Vertical[i], '4-colour-cube');
                _this.Question_cube1.name = "" + i;
                _this.Question_cube1.frame = 3;
                _this.Question_cube1cpy.frame = 3;
            }

            for (k = _this.objGroup1.length - 1; k >= _this.left_denominator - _this.left_numerator; k--) {
                _this.objGroup1.getChildAt(k).frame = 2;
                _this.objGroup1cpy.getChildAt(k).frame = 2;
            }

            for (i = 0; i < _this.right_denominator; i++) {
                _this.Question_cube2cpy = _this.objGroup2cpy.create(_this.Right_cube_X_Vertical, _this.Right_cube_Y_Vertical[i], '4-colour-cube');
                _this.Question_cube2 = _this.objGroup2.create(_this.Right_cube_X_Vertical, _this.Right_cube_Y_Vertical[i], '4-colour-cube');
                _this.Question_cube2.name = "" + i;
                _this.Question_cube2.frame = 3;
                _this.Question_cube2cpy.frame = 3;
            }

            for (k = _this.objGroup2.length - 1; k >= _this.right_denominator - _this.right_numerator; k--) {
                _this.objGroup2.getChildAt(k).frame = 1;
                _this.objGroup2cpy.getChildAt(k).frame = 1;
            }
        }
    },

    next_step: function () {
        if (_this.currentoptionIndx == 0 && _this.count == 0) {
            _this.voiceNote2();
        }
        _this.time.events.add(5000, function () {
            _this.qn_flag = 2;
            _this.appear_thumbs_upDown();
        });
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
            for (i = _this.top1 + 1; i < _this.left_denominator + _this.top1 + 1; i++) {
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
            if (_this.top1 > _this.top2 && _this.top1 < 16) {
                _this.DisableSelectedCube(1);
                _this.EnableSelectedCube(2);
            }
            else if (_this.top1 === _this.top2) {
                _this.DisableSelectedCube(1);
                _this.giveShadeSound.play();
                _this.objGroup1.destroy();
                _this.objGroup2.destroy();
                _this.green = 0;
                _this.blue = 0;

                for (let i = 0; i < _this.objGroup1full.length; i++) {
                    if (_this.objGroup1full.getChildAt(i).frame == 1) {
                        _this.green++;
                    }
                    _this.objGroup1full.getChildAt(i).frame = 4;
                }

                for (let i = 0; i < _this.objGroup2full.length; i++) {
                    if (_this.objGroup2full.getChildAt(i).frame == 2) {
                        _this.blue++;
                    }
                    _this.objGroup2full.getChildAt(i).frame = 4;
                }

                for (let i = 0; i < _this.green; i++) {
                    _this.objGroup1full.getChildAt(_this.objGroup1full.length - i - 1).frame = 1;
                }

                for (let i = 0; i < _this.blue; i++) {
                    _this.objGroup2full.getChildAt(_this.objGroup2full.length - i - 1).frame = 2;
                }
                _this.bigBox.scale.setTo(1.15, 1);
                _this.addNumberPad(2);
                _this.time.events.add(1000, function () {
                    _this.Horizontal_before_appear_numpad(1);
                });
            }
            else {
                _this.EnableSelectedCube(1);
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
                _this.objGroup1.getChildAt(i - _this.top2 + _this.left_denominator - 1).y = _this.workspace_Horizontal_left_Y;
            }
        }
    },

    Horizontal_Selected_right_dragUpdate: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var draggedCubeY = target.y;

        for (let k = Number(target.name) + 1; k < _this.right_denominator; k++) {
            _this.objGroup2.getChildAt(k).y = draggedCubeY;
            _this.objGroup2.getChildAt(k).x = draggedCubeX + 34 * frontpos;
            frontpos++;
        }

        for (let k = Number(target.name) - 1; k >= 0; k--) {
            _this.objGroup2.getChildAt(k).y = draggedCubeY;
            _this.objGroup2.getChildAt(k).x = draggedCubeX - 34 * backpos;
            backpos++;
        }
    },

    Horizontal_Selected_right_dragStop: function (target) {
        _this.clickSound.play();
        if (target.y >= 150 && target.y <= 555) {
            for (i = _this.top2 + 1; i < _this.right_denominator + _this.top2 + 1; i++) {
                currentCube = _this.objGroup2.getChildAt(i - _this.top2 - 1);
                currentCube.x = _this.workspace_Horizontal_right_X[i];
                currentCube.y = _this.workspace_Horizontal_right_Y;

                optionCubeCpy = _this.objGroup2full.create(_this.workspace_Horizontal_right_X[i], _this.workspace_Horizontal_right_Y, '4-colour-cube_Horizontal');
                optionCubeCpy.name = "" + i;
                optionCubeCpy.frame = currentCube.frame;
                optionCubeCpy.visible = true;

                currentCube.events.onDragStop.removeAll();
            }
            _this.top2 = _this.top2 + _this.right_denominator;
            if (_this.top2 > _this.top1 && _this.top2 < 16) {
                _this.DisableSelectedCube(2);
                _this.EnableSelectedCube(1);
            }
            else if (_this.top1 === _this.top2) {
                _this.DisableSelectedCube(2);
                _this.giveShadeSound.play();
                _this.objGroup1.destroy();
                _this.objGroup2.destroy();
                _this.green = 0;
                _this.blue = 0;

                for (let i = 0; i < _this.objGroup1full.length; i++) {
                    if (_this.objGroup1full.getChildAt(i).frame == 1) {
                        _this.green++;
                    }
                    _this.objGroup1full.getChildAt(i).frame = 4;
                }

                for (let i = 0; i < _this.objGroup2full.length; i++) {
                    if (_this.objGroup2full.getChildAt(i).frame == 2) {
                        _this.blue++;
                    }
                    _this.objGroup2full.getChildAt(i).frame = 4;
                }

                for (let i = 0; i < _this.green; i++) {
                    _this.objGroup1full.getChildAt(_this.objGroup1full.length - i - 1).frame = 1;
                }

                for (let i = 0; i < _this.blue; i++) {
                    _this.objGroup2full.getChildAt(_this.objGroup2full.length - i - 1).frame = 2;
                }
                _this.bigBox.scale.setTo(1.15, 1);
                _this.addNumberPad(2);
                _this.time.events.add(1000, function () {
                    _this.Horizontal_before_appear_numpad(1);
                });
            }
            else {
                _this.EnableSelectedCube(2);
            }
        }

        else if (_this.top2 === -1) {
            for (var i = 0; i < _this.right_denominator; i++) {
                _this.objGroup2.getChildAt(i).x = _this.Right_cube_X_Horizontal[i];
                _this.objGroup2.getChildAt(i).y = _this.Right_cube_Y_Horizontal;
            }
        }

        else {
            for (var i = _this.top2 - _this.right_denominator + 1; i < _this.top2 + 1; i++) {
                _this.objGroup2.getChildAt(i - _this.top2 + _this.right_denominator - 1).x = _this.workspace_Horizontal_right_X[i];
                _this.objGroup2.getChildAt(i - _this.top2 + _this.right_denominator - 1).y = _this.workspace_Horizontal_right_Y;
            }
        }
    },

    Vertical_Selected_right_dragUpdate: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;

        for (let k = Number(target.name) + 1; k < _this.right_denominator; k++) {
            _this.objGroup2.getChildAt(k).y = dragggedCubeY - 34 * frontpos;
            _this.objGroup2.getChildAt(k).x = draggedCubeX;
            frontpos++;
        }
        for (let k = Number(target.name) - 1; k >= 0; k--) {
            _this.objGroup2.getChildAt(k).y = dragggedCubeY + 34 * backpos;
            _this.objGroup2.getChildAt(k).x = draggedCubeX;
            backpos++;
        }
    },

    numerator_right_dragUpdate: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;

        for (let k = Number(target.name) - 1; k >= _this.objGroup2full.length - _this.blue; k--) {
            _this.objGroup2full.getChildAt(k).y = dragggedCubeY + 34 * backpos;
            _this.objGroup2full.getChildAt(k).x = draggedCubeX;
            backpos++;
        }

        for (let k = Number(target.name) + 1; k < _this.objGroup2full.length; k++) {
            _this.objGroup2full.getChildAt(k).y = dragggedCubeY - 34 * frontpos;
            _this.objGroup2full.getChildAt(k).x = draggedCubeX;
            frontpos++;
        }
    },

    numerator_right_Horizontal_dragUpdate: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var draggedCubeY = target.y;

        for (let k = Number(target.name) - 1; k >= _this.objGroup2full.length - _this.blue; k--) {
            _this.objGroup2full.getChildAt(k).x = draggedCubeX - 34 * backpos;
            _this.objGroup2full.getChildAt(k).y = draggedCubeY;
            backpos++;
        }

        for (let k = Number(target.name) + 1; k < _this.objGroup2full.length; k++) {
            _this.objGroup2full.getChildAt(k).x = draggedCubeX + 34 * frontpos;
            _this.objGroup2full.getChildAt(k).y = draggedCubeY;
            frontpos++;
        }
    },

    Vertical_Selected_right_dragStop: function (target) {
        _this.clickSound.play();
        if (target.x >= 150 && target.x <= 555) {
            for (i = _this.top2 + 1; i < _this.right_denominator + _this.top2 + 1; i++) {
                currentCube = _this.objGroup2.getChildAt(i - _this.top2 - 1);
                currentCube.x = _this.workspace_Vertical_right_X;
                currentCube.y = _this.workspace_Vertical_right_Y[i];

                optionCubeCpy = _this.objGroup2full.create(_this.workspace_Vertical_right_X, _this.workspace_Vertical_right_Y[i], '4-colour-cube');
                optionCubeCpy.name = "" + i;
                optionCubeCpy.frame = currentCube.frame;
                optionCubeCpy.visible = true;

                currentCube.events.onDragStop.removeAll();
            }
            _this.top2 = _this.top2 + _this.right_denominator;
            if (_this.tweens == 0 && _this.top1 != -1 && _this.top2 != -1) {
                _this.drag_cubesAction_WS_Ver();
                _this.tweens = 1;
            }
            if (_this.top2 > _this.top1 && _this.top2 < 6) {
                _this.DisableSelectedCube(2);
                _this.EnableSelectedCube(1);
            }
            else if (_this.top1 === _this.top2) {
                _this.DisableSelectedCube(2);
                _this.giveShadeSound.play();
                _this.objGroup1.destroy();
                _this.objGroup2.destroy();
                _this.green = 0;
                _this.blue = 0;

                for (let i = 0; i < _this.objGroup1full.length; i++) {
                    if (_this.objGroup1full.getChildAt(i).frame == 2) {
                        _this.green++;
                    }
                    _this.objGroup1full.getChildAt(i).frame = 3;
                }

                for (let i = 0; i < _this.objGroup2full.length; i++) {
                    if (_this.objGroup2full.getChildAt(i).frame == 1) {
                        _this.blue++;
                    }
                    _this.objGroup2full.getChildAt(i).frame = 3;
                }

                for (let i = 0; i < _this.green; i++) {
                    _this.objGroup1full.getChildAt(_this.objGroup1full.length - i - 1).frame = 2;
                }

                for (let i = 0; i < _this.blue; i++) {
                    _this.objGroup2full.getChildAt(_this.objGroup2full.length - i - 1).frame = 1;
                }
                _this.bigBox.scale.setTo(1.3, 2);
                _this.addNumberPad(1);
                _this.time.events.add(1000, function () {
                    _this.Ver_before_appear_numpad(1);
                });
            }
            else {
                _this.EnableSelectedCube(2);
            }
        }

        else if (_this.top2 == -1) {
            for (var i = 0; i < _this.right_denominator; i++) {
                _this.objGroup2.getChildAt(i).x = _this.Right_cube_X_Vertical;
                _this.objGroup2.getChildAt(i).y = _this.Right_cube_Y_Vertical[i];
            }
        }

        else {
            for (var i = _this.top2 - _this.right_denominator + 1; i < _this.top2 + 1; i++) {
                _this.objGroup2.getChildAt(i - _this.top2 + _this.right_denominator - 1).x = _this.workspace_Vertical_right_X;
                _this.objGroup2.getChildAt(i - _this.top2 + _this.right_denominator - 1).y = _this.workspace_Vertical_right_Y[i];
            }
        }
    },

    Vertical_Selected_left_dragUpdate: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;

        for (let k = Number(target.name) + 1; k < _this.left_denominator; k++) {
            _this.objGroup1.getChildAt(k).y = dragggedCubeY - 34 * frontpos;
            _this.objGroup1.getChildAt(k).x = draggedCubeX;
            frontpos++;
        }
        for (let k = Number(target.name) - 1; k >= 0; k--) {
            _this.objGroup1.getChildAt(k).y = dragggedCubeY + 34 * backpos;
            _this.objGroup1.getChildAt(k).x = draggedCubeX;
            backpos++;
        }
    },

    numerator_left_dragUpdate: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var dragggedCubeY = target.y;

        for (let k = Number(target.name) + 1; k < _this.objGroup1full.length; k++) {
            _this.objGroup1full.getChildAt(k).y = dragggedCubeY - 34 * frontpos;
            _this.objGroup1full.getChildAt(k).x = draggedCubeX;
            frontpos++;
        }
        for (let k = Number(target.name) - 1; k >= _this.objGroup1full.length - _this.green; k--) {
            _this.objGroup1full.getChildAt(k).y = dragggedCubeY + 34 * backpos;
            _this.objGroup1full.getChildAt(k).x = draggedCubeX;
            backpos++;
        }
    },

    numerator_left_Horizontal_dragUpdate: function (target) {
        var frontpos = 1;
        var backpos = 1;

        var draggedCubeX = target.x;
        var draggedCubeY = target.y;

        for (let k = Number(target.name) + 1; k < _this.objGroup1full.length; k++) {
            _this.objGroup1full.getChildAt(k).x = draggedCubeX + 34 * frontpos;
            _this.objGroup1full.getChildAt(k).y = draggedCubeY;
            frontpos++;
        }
        for (let k = Number(target.name) - 1; k >= _this.objGroup1full.length - _this.green; k--) {
            _this.objGroup1full.getChildAt(k).x = draggedCubeX - 34 * backpos;
            _this.objGroup1full.getChildAt(k).y = draggedCubeY;
            backpos++;
        }
    },

    Vertical_Selected_left_dragStop: function (target) {
        _this.clickSound.play();
        if (target.x >= 150 && target.x <= 555) {
            for (i = _this.top1 + 1; i < _this.left_denominator + _this.top1 + 1; i++) {
                currentCube = _this.objGroup1.getChildAt(i - _this.top1 - 1);
                currentCube.x = _this.workspace_Vertical_left_X;
                currentCube.y = _this.workspace_Vertical_left_Y[i];

                optionCubeCpy = _this.objGroup1full.create(_this.workspace_Vertical_left_X, _this.workspace_Vertical_left_Y[i], '4-colour-cube');
                optionCubeCpy.name = "" + i;
                optionCubeCpy.frame = currentCube.frame;
                optionCubeCpy.visible = true;

                currentCube.events.onDragStop.removeAll();
            }
            _this.top1 = _this.top1 + _this.left_denominator;
            if (_this.tweens == 0 && _this.top1 != -1 && _this.top2 != -1) {
                _this.drag_cubesAction_WS_Ver();
                _this.tweens = 1;
            }
            if (_this.top1 > _this.top2 && _this.top1 < 6) {
                _this.DisableSelectedCube(1);
                _this.EnableSelectedCube(2);
            }
            else if (_this.top1 === _this.top2) {
                _this.DisableSelectedCube(1);
                _this.giveShadeSound.play();
                _this.objGroup1.destroy();
                _this.objGroup2.destroy();
                _this.green = 0;
                _this.blue = 0;

                for (let i = 0; i < _this.objGroup1full.length; i++) {
                    if (_this.objGroup1full.getChildAt(i).frame == 2) {
                        _this.green++;
                    }
                    _this.objGroup1full.getChildAt(i).frame = 3;
                }

                for (let i = 0; i < _this.objGroup2full.length; i++) {
                    if (_this.objGroup2full.getChildAt(i).frame == 1) {
                        _this.blue++;
                    }
                    _this.objGroup2full.getChildAt(i).frame = 3;
                }

                for (let i = 0; i < _this.green; i++) {
                    _this.objGroup1full.getChildAt(_this.objGroup1full.length - i - 1).frame = 2;
                }

                for (let i = 0; i < _this.blue; i++) {
                    _this.objGroup2full.getChildAt(_this.objGroup2full.length - i - 1).frame = 1;
                }
                _this.bigBox.scale.setTo(1.3, 2);
                _this.addNumberPad(1);
                _this.time.events.add(1000, function () {
                    _this.Ver_before_appear_numpad(1);
                });
            }
            else {
                _this.EnableSelectedCube(1);
            }

        }

        else if (_this.top1 === -1) {
            for (var i = 0; i < _this.left_denominator; i++) {
                _this.objGroup1.getChildAt(i).x = _this.Left_cube_X_Vertical;
                _this.objGroup1.getChildAt(i).y = _this.Left_cube_Y_Vertical[i];
            }
        }

        else {
            for (var i = _this.top1 - _this.left_denominator + 1; i < _this.top1 + 1; i++) {
                _this.objGroup1.getChildAt(i - _this.top1 + _this.left_denominator - 1).x = _this.workspace_Vertical_left_X;
                _this.objGroup1.getChildAt(i - _this.top1 + _this.left_denominator - 1).y = _this.workspace_Vertical_left_Y[i];
            }
        }
    },

    Ver_enableBoxes: function () {
        _this.denominator = undefined;
        _this.numerator = true;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.enterFractionBox1.frame = 1;
        _this.enterFractionBox2.frame = 0;

        _this.enterFractionBox1.inputEnabled = true;
        _this.enterFractionBox1.input.useHandCursor = true;
        _this.enterFractionBox1.events.onInputDown.add(function () {
            _this.denominator = false;
            _this.numerator = true;

            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.enterFractionBox1.frame = 1;
            _this.enterFractionBox2.frame = 0;
        });

        _this.enterFractionBox2.visible = true;
        _this.enterFractionBox2.inputEnabled = true;
        _this.enterFractionBox2.input.useHandCursor = true;
        _this.enterFractionBox2.events.onInputDown.add(function () {
            _this.denominator = true;
            _this.numerator = false;

            _this.selectedAns1 = '';
            _this.selectedAns2 = '';

            _this.enterFractionBox2.frame = 1;
            _this.enterFractionBox1.frame = 0;
        });
    },

    Ver_before_appear_numpad: function (target) {
        if (target === 1) {
            _this.enterFractionBox1 = _this.add.sprite(309, 369, 'newBox');
            _this.enterFractionBox1.scale.setTo(0.8);
            _this.enterFractionBox1.visible = true;
            _this.BlueLine = _this.add.image(312, 409, 'blueLine');

            _this.enterFractionBox2 = _this.add.sprite(309, 412, 'newBox');
            _this.enterFractionBox2.scale.setTo(0.8);
            _this.enterFractionBox2.visible = true;

            _this.empty_box.addChild(_this.enterFractionBox1);
            _this.empty_box.addChild(_this.BlueLine);
            _this.empty_box.addChild(_this.enterFractionBox2);

            _this.enterFraction = _this.add.sprite(302, 370, 'fraction_Bg');
            _this.enterFraction.frame = 5;
            _this.enterFraction.visible = false;
            _this.fractions.addChild(_this.enterFraction);
        }

        else {
            _this.enterFractionBox1 = _this.add.sprite(395, 369, 'newBox');
            _this.enterFractionBox1.scale.setTo(0.8);
            _this.enterFractionBox1.visible = true;
            _this.BlueLine = _this.add.image(398, 409, 'blueLine');

            _this.enterFractionBox2 = _this.add.sprite(395, 412, 'newBox');
            _this.enterFractionBox2.scale.setTo(0.8);
            _this.enterFractionBox2.visible = true;

            _this.empty_box.addChild(_this.enterFractionBox1);
            _this.empty_box.addChild(_this.BlueLine);
            _this.empty_box.addChild(_this.enterFractionBox2);

            _this.enterFraction = _this.add.sprite(388, 370, 'fraction_Bg');
            _this.enterFraction.frame = 5;
            _this.enterFraction.visible = false;
            _this.fractions.addChild(_this.enterFraction);
        }

        if (_this.count == 0 && _this.voicecnt == 0) {
            _this.voiceNote3();
            _this.voicecnt++;
        }


        _this.time.events.add(1000, function () {
            _this.qn_flag = 3;
            _this.Ver_enableBoxes();
        });
    },

    Horizontal_before_appear_numpad: function (target) {
        if (target === 1) {
            _this.enterFractionBox1 = _this.add.sprite(760, 200, 'newBox');
            _this.enterFractionBox1.scale.setTo(0.8);
            _this.enterFractionBox1.visible = true;
            _this.BlueLine = _this.add.image(763, 238, 'blueLine');

            _this.enterFractionBox2 = _this.add.sprite(760, 240, 'newBox');
            _this.enterFractionBox2.scale.setTo(0.8);
            _this.enterFractionBox2.visible = true;

            _this.empty_box.addChild(_this.enterFractionBox1);
            _this.empty_box.addChild(_this.BlueLine);
            _this.empty_box.addChild(_this.enterFractionBox2);

            _this.enterFraction = _this.add.sprite(757, 200, 'fraction_Bg');
            _this.enterFraction.frame = 5;
            _this.enterFraction.visible = false;
            _this.fractions.addChild(_this.enterFraction);
        }

        else {
            _this.enterFractionBox1 = _this.add.sprite(760, 290, 'newBox');
            _this.enterFractionBox1.scale.setTo(0.8);
            _this.enterFractionBox1.visible = true;
            _this.BlueLine = _this.add.image(763, 328, 'blueLine');

            _this.enterFractionBox2 = _this.add.sprite(760, 330, 'newBox');
            _this.enterFractionBox2.scale.setTo(0.8);
            _this.enterFractionBox2.visible = true;

            _this.empty_box.addChild(_this.enterFractionBox1);
            _this.empty_box.addChild(_this.BlueLine);
            _this.empty_box.addChild(_this.enterFractionBox2);

            _this.enterFraction = _this.add.sprite(757, 290, 'fraction_Bg');
            _this.enterFraction.frame = 5;
            _this.enterFraction.visible = false;
            _this.fractions.addChild(_this.enterFraction);
        }

        if (_this.count == 0)
            _this.voiceNote3();

        _this.time.events.add(1000, function () {
            _this.qn_flag = 3;
            _this.Ver_enableBoxes();
        });
    },

    Ver_enableBoxes: function () {
        _this.denominator = undefined;
        _this.numerator = true;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.enterFractionBox1.frame = 1;
        _this.enterFractionBox2.frame = 0;

        _this.enterFractionBox1.inputEnabled = true;
        _this.enterFractionBox1.input.useHandCursor = true;
        _this.enterFractionBox1.events.onInputDown.add(function () {
            _this.denominator = false;
            _this.numerator = true;

            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.enterFractionBox1.frame = 1;
            _this.enterFractionBox2.frame = 0;
        });

        _this.enterFractionBox2.visible = true;
        _this.enterFractionBox2.inputEnabled = true;
        _this.enterFractionBox2.input.useHandCursor = true;
        _this.enterFractionBox2.events.onInputDown.add(function () {
            _this.denominator = true;
            _this.numerator = false;

            _this.selectedAns1 = '';
            _this.selectedAns2 = '';

            _this.enterFractionBox2.frame = 1;
            _this.enterFractionBox1.frame = 0;
        });
    },

    randomizing_elements: function () {
        _this.Questions = [];

        _this.left_denominator;
        _this.right_denominator;

        var numerators_left = [];
        var numerators_right = [];

        let left_remainders = [2, 3, 4, 6];

        for (var i = 0; i < 3; i++) {
            while (1) {
                left_remainders = _this.shuffle(left_remainders);
                _this.left_denominator = left_remainders[0];
                var number1;
                var number2;
                for (var j = 1; j < 4; j++) {
                    number1 = _this.left_denominator > left_remainders[j] ? left_remainders[j] : _this.left_denominator;
                    number2 = _this.left_denominator < left_remainders[j] ? left_remainders[j] : _this.left_denominator;
                    for (var k = 2; number1 % number2 != 0; k++) {
                        number1 = (_this.left_denominator > left_remainders[j] ? left_remainders[j] : _this.left_denominator) * (k);
                    }

                    if (number1 <= 6) {
                        _this.right_denominator = left_remainders[j];
                        break;
                    }
                }

                numerators_left = [];
                numerators_right = [];

                for (let j = 1; j < _this.left_denominator; j++) {
                    for (let k = 1; k < _this.right_denominator; k++) {
                        if ((k * (Math.floor(number1 / _this.right_denominator)) + j * (Math.floor(number1 / _this.left_denominator))) < number1) {
                            numerators_left.push(j);
                            numerators_right.push(k);
                        }
                    }
                }
                console.log(numerators_right.length);
                var choice = Math.floor(Math.random() * (numerators_right.length));
                _this.left_numerator = numerators_left[choice];
                _this.right_numerator = numerators_right[choice];

                if (numerators_right.length !== 0) {
                    var k = 0;
                    for (k = 0; k < _this.Questions.length; k++) {
                        if (_this.Questions[k][0] == _this.left_numerator && _this.Questions[k][1] == _this.left_denominator && _this.Questions[k][2] == _this.right_numerator && _this.Questions[k][3] == _this.right_denominator || _this.Questions[k][2] == _this.left_numerator && _this.Questions[k][3] == _this.left_denominator && _this.Questions[k][0] == _this.right_numerator && _this.Questions[k][1] == _this.right_denominator) {
                            break;
                        }
                    }
                    if (k != _this.Questions.length)
                        continue;
                    _this.Questions.push([_this.left_numerator, _this.left_denominator, _this.right_numerator, _this.right_denominator, 6]);
                    break;
                }
            }
        }

        left_remainders = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16];

        for (var i = 0; i < 3; i++) {
            while (1) {
                left_remainders = _this.shuffle(left_remainders);
                _this.left_denominator = left_remainders[0];
                var number1;
                var number2;
                for (var j = 1; j < left_remainders.length; j++) {
                    number1 = _this.left_denominator > left_remainders[j] ? left_remainders[j] : _this.left_denominator;
                    number2 = _this.left_denominator < left_remainders[j] ? left_remainders[j] : _this.left_denominator;
                    for (var k = 2; number1 % number2 != 0; k++) {
                        number1 = (_this.left_denominator > left_remainders[j] ? left_remainders[j] : _this.left_denominator) * (k);
                    }
                    if (number1 <= 16) {
                        _this.right_denominator = left_remainders[j];
                        break;
                    }
                }

                numerators_left = [];
                numerators_right = [];

                for (let j = 1; j < _this.left_denominator; j++) {
                    for (let k = 1; k < _this.right_denominator; k++) {
                        if ((k * (Math.floor(number1 / _this.right_denominator)) + j * (Math.floor(number1 / _this.left_denominator))) < number1) {
                            numerators_left.push(j);
                            numerators_right.push(k);
                        }
                    }
                }
                console.log(numerators_right.length);
                var choice = Math.floor(Math.random() * (numerators_right.length));
                _this.left_numerator = numerators_left[choice];
                _this.right_numerator = numerators_right[choice];

                if (numerators_right.length !== 0) {
                    var k;
                    for (k = 0; k < _this.Questions.length; k++) {
                        if (_this.Questions[k][0] == _this.left_numerator && _this.Questions[k][1] == _this.left_denominator && _this.Questions[k][2] == _this.right_numerator && _this.Questions[k][3] == _this.right_denominator || _this.Questions[k][2] == _this.left_numerator && _this.Questions[k][3] == _this.left_denominator && _this.Questions[k][0] == _this.right_numerator && _this.Questions[k][1] == _this.right_denominator) {
                            break;
                        }
                    }
                    if (k != _this.Questions.length)
                        continue;
                    _this.Questions.push([_this.left_numerator, _this.left_denominator, _this.right_numerator, _this.right_denominator, 16]);
                    break;
                }
            }
        }

        _this.Questions = _this.shuffle(_this.Questions);
        _this.Questions.pop();

        var choice = Math.floor(Math.random() * (2));
        if (choice == 0) {
            while (1) {
                let left_remainders = [2, 3, 4, 6];
                left_remainders = _this.shuffle(left_remainders);
                console.log(left_remainders);
                _this.left_denominator = left_remainders[0];
                var number1;
                var number2;
                console.log(_this.left_denominator);
                for (var j = 1; j < 4; j++) {
                    number1 = _this.left_denominator > left_remainders[j] ? left_remainders[j] : _this.left_denominator;
                    number2 = _this.left_denominator < left_remainders[j] ? left_remainders[j] : _this.left_denominator;

                    for (var k = 2; number1 % number2 != 0; k++) {
                        number1 = (_this.left_denominator > left_remainders[j] ? left_remainders[j] : _this.left_denominator) * (k);
                    }

                    if (number1 <= 6) {
                        _this.right_denominator = left_remainders[j];
                        break;
                    }
                }

                numerators_left = [];
                numerators_right = [];

                for (let j = 1; j < _this.left_denominator; j++) {
                    for (let k = 1; k < _this.right_denominator; k++) {
                        if ((k * (Math.floor(number1 / _this.right_denominator)) + j * (Math.floor(number1 / _this.left_denominator))) === number1) {
                            numerators_left.push(j);
                            numerators_right.push(k);
                        }
                    }
                }

                var choice = Math.floor(Math.random() * (numerators_right.length));
                _this.left_numerator = numerators_left[choice];
                _this.right_numerator = numerators_right[choice];

                if (numerators_right.length !== 0) {
                    _this.Questions.push([_this.left_numerator, _this.left_denominator, _this.right_numerator, _this.right_denominator, 6]);
                    break;
                }
            }
        }

        else {
            while (1) {
                let left_remainders = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16];
                left_remainders = _this.shuffle(left_remainders);
                _this.left_denominator = left_remainders[0];
                var number1;
                var number2;
                for (var j = 1; j < left_remainders.length; j++) {
                    number1 = _this.left_denominator > left_remainders[j] ? left_remainders[j] : _this.left_denominator;
                    number2 = _this.left_denominator < left_remainders[j] ? left_remainders[j] : _this.left_denominator;
                    for (var k = 2; number1 % number2 != 0; k++) {
                        number1 = (_this.left_denominator > left_remainders[j] ? left_remainders[j] : _this.left_denominator) * (k);
                    }
                    if (number1 <= 16) {
                        _this.right_denominator = left_remainders[j];
                        break;
                    }
                }

                numerators_left = [];
                numerators_right = [];

                for (let j = 1; j < _this.left_denominator; j++) {
                    for (let k = 1; k < _this.right_denominator; k++) {
                        if ((k * (Math.floor(number1 / _this.right_denominator)) + j * (Math.floor(number1 / _this.left_denominator))) == number1) {
                            numerators_left.push(j);
                            numerators_right.push(k);
                        }
                    }
                }
                console.log(numerators_right.length);
                var choice = Math.floor(Math.random() * (numerators_right.length));
                _this.left_numerator = numerators_left[choice];
                _this.right_numerator = numerators_right[choice];

                if (numerators_right.length !== 0) {
                    _this.Questions.push([_this.left_numerator, _this.left_denominator, _this.right_numerator, _this.right_denominator, 16]);
                    break;
                }
            }
        }

        do {
            _this.Questions = _this.shuffle(_this.Questions);
        } while (_this.Questions[0][4] != 6);
    },

    //* to show drag action to user within the workspace.
    drag_cubesAction_WS_Ver: function () {
        _this.tempQnCubeGroup = _this.add.group();
        _this.tempOptCubeGroup = _this.add.group();

        if (_this.top1 < _this.top2) {
            for (var l = 0; l < _this.left_denominator; l++) {
                _this.tempQnCube = _this.add.sprite(_this.workspace_Vertical_left_X, _this.workspace_Vertical_left_Y[l], '4-colour-cube');
                _this.tempQnCube.frame = 3;
                _this.tempQnCubeGroup.addChild(_this.tempQnCube);
            }

            for (var m = _this.left_denominator - 1; m >= _this.left_denominator - _this.left_numerator; m--) {
                _this.tempQnCubeGroup.getChildAt(m).frame = 2;
            }

            _this.time.events.add(1000, function () {
                _this.hand = _this.add.image(_this.workspace_Vertical_left_X + 20, _this.workspace_Vertical_left_Y[0], 'hand');
                _this.hand.scale.setTo(0.5, 0.5);
                _this.tempQnCubeGroup.addChild(_this.hand);
            });

            //* tween it till the next vertical space on the cubes.
            _this.time.events.add(1500, function () {
                //* add tween to this temp group and tween it upwards to show drag action
                tempDragAction = _this.add.tween(_this.tempQnCubeGroup);
                tempDragAction.to({ y: -34.5 * _this.left_denominator }, 800, 'Linear', true, 0);
                tempDragAction.start();
            });

            //* destroy the group after the show after a delay
            _this.time.events.add(3000, function () {
                _this.tempQnCubeGroup.destroy();
            });
        }

        //* question cubes are more. then tween the option cubes.
        else {
            for (var n = 0; n < _this.right_denominator; n++) {
                //* create temp group of Qstn cubes to show dragging action to user. 
                _this.tempOptCube = _this.add.sprite(_this.workspace_Vertical_right_X, _this.workspace_Vertical_right_Y[n], '4-colour-cube');
                _this.tempOptCube.frame = 3;
                _this.tempOptCubeGroup.addChild(_this.tempOptCube);
            }

            for (var m = _this.right_denominator - 1; m >= (_this.right_denominator - _this.right_numerator); m--) {
                //*add cube image for num with diff clr cube
                _this.tempOptCubeGroup.getChildAt(m).frame = 1;
            }

            _this.time.events.add(1000, function () {
                _this.hand = _this.add.image(_this.workspace_Vertical_right_X + 20, _this.workspace_Vertical_right_Y[0], 'hand');
                _this.hand.scale.setTo(0.5, 0.5);
                _this.tempOptCubeGroup.addChild(_this.hand);
            });

            _this.time.events.add(1500, function () {
                //* add tween to this temp group and tween it upwards to show drag action
                tempDragAction = _this.add.tween(_this.tempOptCubeGroup);
                tempDragAction.to({ y: -34.5 * _this.right_denominator }, 800, 'Linear', true, 0);
                tempDragAction.start();
            });

            _this.time.events.add(3000, function () {
                _this.tempOptCubeGroup.destroy();
            });
        }
    },

    addNumberPad: function (target) {
        _this.numpad = true;
        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        bottomnumpadbg.scale.setTo(1, 1);
        bottomnumpadbg.name = "numpadbg";
        _this.x = 70;
        _this.numGroup.visible = false;

        for (var i = 0; i < 10; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 552, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.8, 0.8);
            _this.numbg.name = i + 1;
            _this.numbg.frame = i;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked1, _this);

            _this.x += 73;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 552, 'Numberpad');
        _this.wrongbtn.frame = 10;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.8, 0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked1, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 552, 'Numberpad');
        _this.rightbtn.frame = 11;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.8, 0.8);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;

        if (target == 1) {
            _this.rightbtn.events.onInputDown.removeAll();
            _this.enterTxt1 = null;
            _this.enterTxt2 = null;
            _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this);
        }
        else if (target == 2) {
            _this.rightbtn.events.onInputDown.removeAll();
            _this.enterTxt1 = null;
            _this.enterTxt2 = null;
            _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked_Horizontal, _this);
        }

        _this.numpadTween = _this.add.tween(_this.numGroup);
        _this.tweenNumPad();
    },

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.eraseScreen();
    },

    wrongbtnClicked1: function (target) {
        _this.clickSound.play();
        _this.eraseScreen1();
    },

    eraseScreen: function (target) {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt2);
        _this.enterTxt2.destroy();
        _this.enterTxt2 = null;
        _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt1);
        _this.enterTxt1.destroy();
        _this.enterTxt1 = null;
    },

    eraseScreen1: function (target) {
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        if (_this.denominator == true && _this.enterTxt2 != null) {
            _this.enterFractionBox2.removeChild(_this.enterTxt2);
            _this.enterTxt2.destroy();
            _this.enterTxt2 = null;
        }
        else if (_this.numerator == true && _this.enterTxt1 != null) {
            _this.enterFractionBox2.removeChild(_this.enterTxt1);
            _this.enterTxt1.destroy();
            _this.enterTxt1 = null;
        }
    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },

    numClicked: function (target) {
        _this.clickSound.play();
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
            _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt2);
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) {
                _this.enterTxt2 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt2.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }
            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) >= 10) {
                _this.enterTxt2 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//43 88
                _this.enterTxt2.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }

            _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).addChild(_this.enterTxt2);
            _this.fractionBoxDenoGroup.getChildAt(_this.fractionBoxCount).getChildAt(0).name = _this.enterTxt2.name;
            _this.enterTxt2.align = 'right';
            _this.enterTxt2.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt2.fill = '#65B4C3';
            _this.enterTxt2.fontWeight = 'Normal';
            _this.enterTxt2.visible = true;

        }
        else if (_this.numerator == true) {
            _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).removeChild(_this.enterTxt1);
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) < 10) {
                _this.enterTxt1 = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//20,10
                _this.enterTxt1.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }
            else if (Number('' + _this.selectedAns1 + _this.selectedAns2) >= 10) {
                _this.enterTxt1 = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });//36 23
                _this.enterTxt1.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }
            _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).addChild(_this.enterTxt1);
            _this.fractionBoxNumGroup.getChildAt(_this.fractionBoxCount).getChildAt(0).name = _this.enterTxt1.name;
            _this.enterTxt1.align = 'right';
            _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt1.fill = '#65B4C3';
            _this.enterTxt1.fontWeight = 'Normal';
            _this.enterTxt1.visible = true;
        }
    },

    numClicked1: function (target) {
        _this.clickSound.play();
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
            _this.enterFractionBox2.removeChild(_this.enterTxt2);

            if (Number('' + _this.selectedAns1 + _this.selectedAns2) >= 10) {
                _this.enterTxt2 = _this.add.text(10, 10, Number("" + var_selectedAns1 + var_selectedAns2), { fontSize: '30px' });//43 88
                _this.enterTxt2.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }
            else {
                _this.enterTxt2 = _this.add.text(18, 10, Number("" + var_selectedAns1 + var_selectedAns2), { fontSize: '30px' });//43 88
                _this.enterTxt2.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }

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

            if (Number('' + _this.selectedAns1 + _this.selectedAns2) >= 10) {
                _this.enterTxt1 = _this.add.text(10, 10, Number("" + var_selectedAns1 + var_selectedAns2), { fontSize: '30px' });//36 23
                _this.enterTxt1.name = Number('' + var_selectedAns1 + var_selectedAns2);
            }

            else {
                _this.enterTxt1 = _this.add.text(18, 10, Number("" + var_selectedAns1 + var_selectedAns2), { fontSize: '30px' });//20,10
                _this.enterTxt1.name = Number('' + var_selectedAns1 + var_selectedAns2);

            }

            _this.enterFractionBox1.addChild(_this.enterTxt1);
            _this.enterFractionBox1.name = _this.enterTxt1.name;


            _this.enterTxt1.align = 'right';
            _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
            _this.enterTxt1.fill = '#65B4C3';
            _this.enterTxt1.fontWeight = 'Normal';
            _this.enterTxt1.visible = true;
        }
    },

    rightbtnClicked: function () {
        _this.clickSound.play();

        if (_this.enterTxt1 == null || _this.enterTxt2 == null) {
            _this.wrongSound.play();
            if (_this.enterTxt2 != null) {
                _this.enterFractionBox2.removeChild(_this.enterTxt2);
                _this.enterTxt2.destroy();
                _this.enterTxt2 = null;
            }
            if (_this.enterTxt1 != null) {
                _this.enterFractionBox1.removeChild(_this.enterTxt1);
                _this.enterTxt1.destroy();
                _this.enterTxt1 = null;
            }
            _this.enterFractionBox1.frame = 1;
            _this.enterFractionBox2.frame = 0;
            _this.numerator = true;
            _this.denominator = false;
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
        }
        else if (_this.target == 1) {
            if ((Number(_this.enterTxt1.name) == _this.green) && (Number(_this.enterTxt2.name) == _this.objGroup1full.length)) {
                _this.counterCelebrationSound.play();
                _this.target = 2;

                let Left_numerator;
                let Left_denomenator;

                if (Number(_this.enterTxt1.name) > 9) {
                    Left_numerator = _this.add.text(11, 10, _this.enterTxt1.name);
                    Left_numerator.fill = '#FF0000';
                }
                else {
                    Left_numerator = _this.add.text(15, 10, _this.enterTxt1.name);
                    Left_numerator.fill = '#FF0000';
                }

                if (Number(_this.enterTxt2.name) > 9) {
                    Left_denomenator = _this.add.text(11, 40, _this.enterTxt2.name);
                    Left_denomenator.fill = '#FF0000';
                }
                else {
                    Left_denomenator = _this.add.text(15, 40, _this.enterTxt2.name);
                    Left_denomenator.fill = '#FF0000';
                }

                _this.enterFraction.addChild(Left_numerator);
                _this.enterFraction.addChild(Left_denomenator);

                _this.enterFraction.visible = true;
                _this.enterTxt1 = null;
                _this.enterTxt2 = null;

                for (let i = 0; i < _this.empty_box.length; i++) {
                    let element = _this.empty_box.getChildAt(i);
                    element.visible = false;
                }

                _this.time.events.add(1000, function () {
                    _this.Ver_before_appear_numpad(2);
                });
            }
            else {
                _this.wrongSound.play();
                if (_this.enterTxt2 != null) {
                    _this.enterFractionBox2.removeChild(_this.enterTxt2);
                    _this.enterTxt2.destroy();
                    _this.enterTxt2 = null;
                }
                if (_this.enterTxt1 != null) {
                    _this.enterFractionBox1.removeChild(_this.enterTxt1);
                    _this.enterTxt1.destroy();
                    _this.enterTxt1 = null;
                }
                _this.enterFractionBox1.frame = 1;
                _this.enterFractionBox2.frame = 0;
                _this.numerator = true;
                _this.denominator = false;
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
            }
        }
        else if (_this.target == 2) {
            if ((Number(_this.enterTxt1.name) == _this.blue) && (Number(_this.enterTxt2.name) == _this.objGroup2full.length)) {
                _this.counterCelebrationSound.play();

                let Right_denomenator;
                let Right_numerator;
                if (Number(_this.enterTxt1.name) > 9) {
                    Right_numerator = _this.add.text(11, 10, _this.enterTxt1.name);
                    Right_numerator.fill = '#FF0000';
                }
                else {
                    Right_numerator = _this.add.text(15, 10, _this.enterTxt1.name);
                    Right_numerator.fill = '#FF0000';
                }

                if (Number(_this.enterTxt2.name) > 9) {
                    Right_denomenator = _this.add.text(11, 40, _this.enterTxt2.name);
                    Right_denomenator.fill = '#FF0000';
                }
                else {
                    Right_denomenator = _this.add.text(15, 40, _this.enterTxt2.name);
                    Right_denomenator.fill = '#FF0000';
                }

                _this.enterFraction.addChild(Right_numerator);
                _this.enterFraction.addChild(Right_denomenator);

                _this.enterFraction.visible = true;

                _this.bigBox.visible = false;
                _this.bigBox_1.visible = true;

                _this.bigBox_1.scale.setTo(0.8, 1);
                _this.bigBox_1.x = 150;
                _this.bigBox_1.y = 55;

                _this.enterTxt1 = null;
                _this.enterTxt2 = null;

                for (let i = 0; i < _this.empty_box.length; i++) {
                    let element = _this.empty_box.getChildAt(i);
                    element.visible = false;
                }

                for (let i = 0; i < _this.objGroup1full.length; i++) {
                    var hole = _this.add.sprite(_this.workspace_Vertical_left_X, _this.workspace_Vertical_left_Y[i], '4-colour-cube');
                    hole.frame = 0;
                    _this.holes_workspace.addChild(hole);
                }

                for (let i = 0; i < _this.objGroup2full.length; i++) {
                    var hole = _this.add.sprite(_this.workspace_Vertical_right_X, _this.workspace_Vertical_right_Y[i], '4-colour-cube');
                    hole.frame = 0;
                    _this.holes_workspace.addChild(hole);
                }

                for (let i = 0; i < _this.objGroup1cpy.length; i++) {
                    var cubes = _this.objGroup1cpy.getChildAt(i);
                    cubes.visible = false;
                }

                for (let i = 0; i < _this.objGroup2cpy.length; i++) {
                    var cubes = _this.objGroup2cpy.getChildAt(i);
                    cubes.visible = false;
                }

                _this.Bg_fraction_left.y = 60;
                _this.Bg_fraction_right.y = 60;

                var numerator_left = _this.add.text(15, 10, _this.green);
                numerator_left.fill = '#38B8E1';
                var denomenator_left = _this.add.text(15, 40, _this.objGroup1full.length);
                denomenator_left.fill = '#38B8E1';
                var numerator_right = _this.add.text(15, 10, _this.blue);
                numerator_right.fill = '#38B8E1';
                var denomenator_right = _this.add.text(15, 40, _this.objGroup2full.length);
                denomenator_right.fill = '#38B8E1';

                let Fraction_left = _this.add.sprite(296, 60, 'fraction_Bg');
                Fraction_left.frame = 0;

                Fraction_left.addChild(numerator_left);
                Fraction_left.addChild(denomenator_left);
                _this.fractions.addChild(Fraction_left);

                let Fraction_right = _this.add.sprite(382, 60, 'fraction_Bg');
                Fraction_right.frame = 0;

                Fraction_right.addChild(numerator_right);
                Fraction_right.addChild(denomenator_right);
                _this.fractions.addChild(Fraction_right);

                let equals_1 = _this.add.text(265, 85, "=");
                equals_1.fill = '#FF0000';
                _this.equalsGroup.addChild(equals_1);

                let equals_2 = _this.add.text(447, 85, "=");
                equals_2.fill = '#FF0000';
                _this.equalsGroup.addChild(equals_2);

                let equals_3 = _this.add.text(480, 400, "=");
                equals_3.fill = '#FF0000';
                _this.equalsGroup.addChild(equals_3);

                _this.plus = _this.add.text(360, 395, '+');
                _this.plus.fill = "#FF0000";

                if (_this.count == 0) {
                    _this.time.events.add(1000, function () {
                        _this.voiceNote2();
                    });
                }
                _this.time.events.add(3000, function () {
                    _this.qn_flag = 2;
                });

                _this.create_hole_and_itsfunction();
            }
            else {
                _this.wrongSound.play();
                if (_this.enterTxt2 != null) {
                    _this.enterFractionBox2.removeChild(_this.enterTxt2);
                    _this.enterTxt2.destroy();
                    _this.enterTxt2 = null;
                }
                if (_this.enterTxt1 != null) {
                    _this.enterFractionBox1.removeChild(_this.enterTxt1);
                    _this.enterTxt1.destroy();
                    _this.enterTxt1 = null;
                }
                _this.enterFractionBox1.frame = 1;
                _this.enterFractionBox2.frame = 0;
                _this.numerator = true;
                _this.denominator = false;
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
            }
        }
        else {
            _this.wrongSound.play();
            if (_this.enterTxt2 != null) {
                _this.enterFractionBox2.removeChild(_this.enterTxt2);
                _this.enterTxt2.destroy();
                _this.enterTxt2 = null;
            }
            if (_this.enterTxt1 != null) {
                _this.enterFractionBox1.removeChild(_this.enterTxt1);
                _this.enterTxt1.destroy();
                _this.enterTxt1 = null;
            }
            _this.enterFractionBox1.frame = 1;
            _this.enterFractionBox2.frame = 0;
            _this.numerator = true;
            _this.denominator = false;
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
        }
    },


    rightbtnClicked_Horizontal: function () {
        _this.clickSound.play();
        if (_this.enterTxt1 == null || _this.enterTxt2 == null) {
            _this.wrongSound.play();
            if (_this.enterTxt2 != null) {
                _this.enterFractionBox2.removeChild(_this.enterTxt2);
                _this.enterTxt2.destroy();
                _this.enterTxt2 = null;
            }
            if (_this.enterTxt1 != null) {
                _this.enterFractionBox1.removeChild(_this.enterTxt1);
                _this.enterTxt1.destroy();
                _this.enterTxt1 = null;
            }
            _this.enterFractionBox1.frame = 1;
            _this.enterFractionBox2.frame = 0;
            _this.numerator = true;
            _this.denominator = false;
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
        }
        else if (_this.target == 1) {
            if ((Number(_this.enterTxt1.name) == _this.green) && (Number(_this.enterTxt2.name) == _this.objGroup1full.length)) {
                _this.counterCelebrationSound.play();
                _this.target = 2;
                let Left_numerator;
                let Left_denomenator;

                if (Number(_this.enterTxt1.name) > 9) {
                    Left_numerator = _this.add.text(10, 10, _this.enterTxt1.name);
                    Left_numerator.fill = '#FF0000';
                }
                else {
                    Left_numerator = _this.add.text(15, 10, _this.enterTxt1.name);
                    Left_numerator.fill = '#FF0000';
                }

                if (Number(_this.enterTxt2.name) > 9) {
                    Left_denomenator = _this.add.text(10, 40, _this.enterTxt2.name);
                    Left_denomenator.fill = '#FF0000';
                }
                else {
                    Left_denomenator = _this.add.text(15, 40, _this.enterTxt2.name);
                    Left_denomenator.fill = '#FF0000';
                }


                _this.enterFraction.addChild(Left_numerator);
                _this.enterFraction.addChild(Left_denomenator);
                _this.enterTxt1 = null;
                _this.enterTxt2 = null;

                _this.enterFraction.visible = true;

                for (let i = 0; i < _this.empty_box.length; i++) {
                    let element = _this.empty_box.getChildAt(i);
                    element.visible = false;
                }
                _this.time.events.add(1000, function () {
                    _this.Horizontal_before_appear_numpad(2);
                });
            }
            else {
                _this.wrongSound.play();
                if (_this.enterTxt2 != null) {
                    _this.enterFractionBox2.removeChild(_this.enterTxt2);
                    _this.enterTxt2.destroy();
                    _this.enterTxt2 = null;
                }
                if (_this.enterTxt1 != null) {
                    _this.enterFractionBox1.removeChild(_this.enterTxt1);
                    _this.enterTxt1.destroy();
                    _this.enterTxt1 = null;
                }
                _this.enterFractionBox1.frame = 1;
                _this.enterFractionBox2.frame = 0;
                _this.numerator = true;
                _this.denominator = false;
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
            }
        }
        else if (_this.target == 2) {
            if ((Number(_this.enterTxt1.name) == _this.blue) && (Number(_this.enterTxt2.name) == _this.objGroup2full.length)) {
                _this.counterCelebrationSound.play();
                let Right_denomenator;
                let Right_numerator;
                if (Number(_this.enterTxt1.name) > 9) {
                    Right_numerator = _this.add.text(10, 10, _this.enterTxt1.name);
                    Right_numerator.fill = '#FF0000';
                }
                else {
                    Right_numerator = _this.add.text(15, 10, _this.enterTxt1.name);
                    Right_numerator.fill = '#FF0000';
                }

                if (Number(_this.enterTxt2.name) > 9) {
                    Right_denomenator = _this.add.text(10, 40, _this.enterTxt2.name);
                    Right_denomenator.fill = '#FF0000';
                }
                else {
                    Right_denomenator = _this.add.text(15, 40, _this.enterTxt2.name);
                    Right_denomenator.fill = '#FF0000';
                }

                _this.enterFraction.addChild(Right_numerator);
                _this.enterFraction.addChild(Right_denomenator);

                _this.enterFraction.visible = true;

                _this.enterTxt1 = null;
                _this.enterTxt2 = null;

                _this.bigBox_1.visible = true;
                _this.bigBox.visible = false;

                for (let i = 0; i < _this.objGroup1full.length; i++) {
                    var hole = _this.add.sprite(_this.workspace_Horizontal_left_X[i], _this.workspace_Horizontal_left_Y, '4-colour-cube_Horizontal');
                    hole.frame = 0;
                    _this.holes_workspace.addChild(hole);
                }

                for (let i = 0; i < _this.objGroup2full.length; i++) {
                    var hole = _this.add.sprite(_this.workspace_Horizontal_right_X[i], _this.workspace_Horizontal_right_Y, '4-colour-cube_Horizontal');
                    hole.frame = 0;
                    _this.holes_workspace.addChild(hole);
                }

                for (let i = 0; i < _this.objGroup1cpy.length; i++) {
                    var cubes = _this.objGroup1cpy.getChildAt(i);
                    cubes.visible = false;
                }

                for (let i = 0; i < _this.objGroup2cpy.length; i++) {
                    var cubes = _this.objGroup2cpy.getChildAt(i);
                    cubes.visible = false;
                }

                for (let i = 0; i < _this.empty_box.length; i++) {
                    let element = _this.empty_box.getChildAt(i);
                    element.visible = false;
                }

                if (_this.count == 0) {
                    _this.time.events.add(1000, function () {
                        _this.voiceNote2();
                    });
                }
                _this.time.events.add(3000, function () {
                    _this.qn_flag = 2;
                });

                _this.Bg_fraction_left.x = 850;
                _this.Bg_fraction_right.x = 850;

                _this.Bg_fraction_left.y = 200;
                _this.Bg_fraction_right.y = 290;

                let equals_1 = _this.add.text(820, 230, "=");
                equals_1.fill = '#FF0000';
                _this.equalsGroup.addChild(equals_1);

                let equals_2 = _this.add.text(820, 315, "=");
                equals_2.fill = '#FF0000';
                _this.equalsGroup.addChild(equals_2);

                _this.create_hole_and_itsfunction_Horizontal();
            }
            else {
                _this.wrongSound.play();
                if (_this.enterTxt2 != null) {
                    _this.enterFractionBox2.removeChild(_this.enterTxt2);
                    _this.enterTxt2.destroy();
                    _this.enterTxt2 = null;
                }
                if (_this.enterTxt1 != null) {
                    _this.enterFractionBox1.removeChild(_this.enterTxt1);
                    _this.enterTxt1.destroy();
                    _this.enterTxt1 = null;
                }
                _this.enterFractionBox1.frame = 1;
                _this.enterFractionBox2.frame = 0;
                _this.numerator = true;
                _this.denominator = false;
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
            }
        }
        else {
            _this.wrongSound.play();
            if (_this.enterTxt2 != null) {
                _this.enterFractionBox2.removeChild(_this.enterTxt2);
                _this.enterTxt2.destroy();
                _this.enterTxt2 = null;
            }
            if (_this.enterTxt1 != null) {
                _this.enterFractionBox1.removeChild(_this.enterTxt1);
                _this.enterTxt1.destroy();
                _this.enterTxt1 = null;
            }
            _this.enterFractionBox1.frame = 1;
            _this.enterFractionBox2.frame = 0;
            _this.numerator = true;
            _this.denominator = false;
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
        }
    },

    rightbtnClicked_3: function () {
        _this.noofAttempts++;
        _this.clickSound.play();
        if (_this.enterTxt1 == null || _this.enterTxt2 == null) {
            _this.wrongSound.play();
            if (_this.enterTxt2 != null) {
                _this.enterFractionBox2.removeChild(_this.enterTxt2);
                _this.enterTxt2.destroy();
                _this.enterTxt2 = null;
            }
            if (_this.enterTxt1 != null) {
                _this.enterFractionBox1.removeChild(_this.enterTxt1);
                _this.enterTxt1.destroy();
                _this.enterTxt1 = null;
            }
            _this.enterFractionBox1.frame = 1;
            _this.enterFractionBox2.frame = 0;
            _this.numerator = true;
            _this.denominator = false;
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
        }
        else if ((Number(_this.enterTxt1.name) === _this.green + _this.blue) && (Number(_this.enterTxt2.name) === _this.objGroup1full.length + _this.green) || (Number(_this.enterTxt2.name) < _this.objGroup1full.length + _this.green && (_this.objGroup1full.length + _this.green) / Number(_this.enterTxt2.name) == (_this.green + _this.blue) / Number(_this.enterTxt1.name))) {
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.celebrationSound.play();
            let denomenator;
            let numerator;
            if (Number(_this.enterTxt1.name) > 9) {
                numerator = _this.add.text(10, 10, _this.enterTxt1.name);
                numerator.fill = '#FF0000';
            }
            else {
                numerator = _this.add.text(15, 10, _this.enterTxt1.name);
                numerator.fill = '#FF0000';
            }

            if (Number(_this.enterTxt2.name) > 9) {
                denomenator = _this.add.text(10, 40, _this.enterTxt2.name);
                denomenator.fill = '#FF0000';
            }
            else {
                denomenator = _this.add.text(15, 40, _this.enterTxt2.name);
                denomenator.fill = '#FF0000';
            }

            _this.enterFraction.addChild(numerator);
            _this.enterFraction.addChild(denomenator);

            _this.enterFraction.visible = true;

            for (let i = 0; i < _this.empty_box.length; i++) {
                let element = _this.empty_box.getChildAt(i);
                element.visible = false;
            }

            _this.enterTxt1 = null;
            _this.enterTxt2 = null;

            _this.starActions();
            _this.nextquestion();
        }
        else {
            _this.wrongSound.play();
            if (_this.enterTxt2 != null) {
                _this.enterFractionBox2.removeChild(_this.enterTxt2);
                _this.enterTxt2.destroy();
                _this.enterTxt2 = null;
            }
            if (_this.enterTxt1 != null) {
                _this.enterFractionBox1.removeChild(_this.enterTxt1);
                _this.enterTxt1.destroy();
                _this.enterTxt1 = null;
            }
            _this.enterFractionBox1.frame = 1;
            _this.enterFractionBox2.frame = 0;
            _this.numerator = true;
            _this.denominator = false;
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
        }
    },

    rightbtnClicked1: function (target) {
        _this.noofAttempts++;
        _this.clickSound.play();

        if (_this.enterTxt1 == null || _this.enterTxt2 == null) {
            _this.wrongSound.play();
            _this.enterFractionBox2.removeChild(_this.enterTxt2);
            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            _this.Ver_enableBoxes();
        }

        else if (_this.rightbtn_evaluation()) {
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.celebrationSound.play();
            _this.starActions();

            _this.enterFractionBox1.destroy();
            _this.enterFractionBox2.destroy();
            _this.BlueLine.destroy();

            _this.numGroup.destroy();
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.enterTxt1 = null;
            _this.enterTxt2 = null;
            _this.time.events.add(3000, function () {
                _this.equals.destroy();
                _this.optionCubeGroupCpy.destroy();
                _this.QnCubeGroupCpy.destroy();

                _this.nextquestion();
            });
        }
        else {
            _this.wrongSound.play();
            _this.enterFractionBox2.removeChild(_this.enterTxt2);
            _this.enterFractionBox1.removeChild(_this.enterTxt1);
            _this.Ver_enableBoxes();
        }
    },

    create_hole_and_itsfunction: function () {
        for (var i = 0; i < _this.objGroup1full.length; i++) {
            var hole = _this.add.sprite(540, _this.Left_cube_Y_Vertical[i], '4-colour-cube');
            hole.frame = 0;
            _this.holes.addChild(hole);
        }
        for (var i = 0; i < _this.green; i++) {
            var green_element = _this.objGroup1full.getChildAt(_this.objGroup1full.length - i - 1);
            green_element.name = "" + _this.objGroup1full.length - i - 1;
            green_element.inputEnabled = true;
            green_element.input.useHandCursor = true;
            green_element.input.enableDrag(true);
            green_element.events.onDragUpdate.add(_this.numerator_left_dragUpdate, green_element);
            green_element.events.onDragStop.add(_this.hole_1, green_element);
        }

        for (var i = 0; i < _this.blue; i++) {
            _this.blue_element = _this.objGroup2full.getChildAt(_this.objGroup2full.length - i - 1);
            _this.blue_element.name = "" + _this.objGroup2full.length - i - 1;
            _this.blue_element.inputEnabled = true;
            _this.blue_element.input.useHandCursor = true;
            _this.blue_element.input.enableDrag(true);
            _this.blue_element.events.onDragUpdate.add(_this.numerator_right_dragUpdate, _this.blue_element);
            _this.blue_element.events.onDragStop.add(_this.hole_2, _this.blue_element);
        }

    },

    create_hole_and_itsfunction_Horizontal: function () {
        for (var i = 0; i < _this.objGroup1full.length; i++) {
            var hole = _this.add.sprite(_this.workspace_Horizontal_right_X[i], 400, '4-colour-cube_Horizontal');
            hole.frame = 0;
            _this.holes.addChild(hole);
        }
        for (var i = 0; i < _this.green; i++) {
            let green_element = _this.objGroup1full.getChildAt(_this.objGroup1full.length - i - 1);
            green_element.name = "" + _this.objGroup1full.length - i - 1;
            green_element.inputEnabled = true;
            green_element.input.useHandCursor = true;
            green_element.input.enableDrag(true);
            green_element.events.onDragUpdate.add(_this.numerator_left_Horizontal_dragUpdate, green_element);
            green_element.events.onDragStop.add(_this.hole_1_Horizontal, green_element);
        }

        for (var i = 0; i < _this.blue; i++) {
            let blue_element = _this.objGroup2full.getChildAt(_this.objGroup2full.length - i - 1);
            blue_element.name = "" + _this.objGroup2full.length - i - 1;
            blue_element.inputEnabled = true;
            blue_element.input.useHandCursor = true;
            blue_element.input.enableDrag(true);
            blue_element.events.onDragUpdate.add(_this.numerator_right_Horizontal_dragUpdate, blue_element);
            blue_element.events.onDragStop.add(_this.hole_2_Horizontal, blue_element);
        }
    },

    hole_1: function (target) {
        _this.clickSound.play();
        if (_this.top == -1)
            _this.tempGroup = _this.add.group();
        if (target.x >= 350 && target.x <= 660) {
            for (i = 0; i < _this.green; i++) {
                currentCube = _this.objGroup1full.getChildAt(_this.objGroup1full.length - 1);
                _this.tempGroup.addChild(currentCube);
                currentCube.bringToTop();
                currentCube.x = 540;
                currentCube.y = _this.Left_cube_Y_Vertical[i + _this.top + 1];
                _this.holes.getChildAt(i + _this.top + 1).visible = false;
                currentCube.events.onDragStop.removeAll();
            }
            _this.top = _this.top + _this.green;

            for (i = 0; i < _this.tempGroup.length; i++) {
                currentCube = _this.tempGroup.getChildAt(i);
                currentCube.inputEnabled = false;
            }

            if (_this.top == _this.blue + _this.green - 1) {
                _this.time.events.add(1000, function () {
                    _this.giveShadeSound.play();
                    for (i = 0; i < _this.holes.length; i++) {
                        let hole = _this.holes.getChildAt(i);
                        hole.visible = true;
                        hole.frame = 3;
                    }
                    for (i = 0; i < _this.tempGroup.length; i++) {
                        let element = _this.tempGroup.getChildAt(_this.tempGroup.length - i - 1);
                        element.y = _this.Right_cube_Y_Vertical[_this.objGroup1full.length + _this.green - i - 1];
                    }
                });
                _this.time.events.add(2000, function () {
                    _this.third_stage();
                });
            }
        }

        else {
            for (var i = _this.objGroup1full.length - 1; i >= _this.objGroup1full.length - _this.green; i--) {
                _this.objGroup1full.getChildAt(i).x = _this.workspace_Vertical_left_X;
                _this.objGroup1full.getChildAt(i).y = _this.workspace_Vertical_left_Y[i];
            }
        }
    },

    hole_1_Horizontal: function (target) {
        _this.clickSound.play();
        if (_this.top == -1)
            _this.tempGroup = _this.add.group();
        if (target.y >= 350 && target.y <= 660) {
            for (i = 0; i < _this.green; i++) {
                currentCube = _this.objGroup1full.getChildAt(_this.objGroup1full.length - 1);
                _this.tempGroup.addChild(currentCube);
                currentCube.bringToTop();
                currentCube.y = 400;
                currentCube.x = _this.workspace_Horizontal_left_X[i + _this.top + 1];
                _this.holes.getChildAt(i + _this.top + 1).visible = false;
                currentCube.events.onDragStop.removeAll();
            }
            _this.top = _this.green + _this.top;

            for (i = 0; i < _this.tempGroup.length; i++) {
                currentCube = _this.tempGroup.getChildAt(i);
                currentCube.inputEnabled = false;
            }

            if (_this.top == _this.blue + _this.green - 1) {
                _this.time.events.add(1000, function () {
                    _this.giveShadeSound.play();
                    for (i = 0; i < _this.holes.length; i++) {
                        let hole = _this.holes.getChildAt(i);
                        hole.visible = true;
                        hole.frame = 4;
                    }

                    for (i = 0; i < _this.tempGroup.length; i++) {
                        let element = _this.tempGroup.getChildAt(_this.tempGroup.length - i - 1);
                        element.x = _this.workspace_Horizontal_right_X[_this.objGroup1full.length + _this.green - i - 1];
                    }
                });
                _this.time.events.add(2000, function () {
                    _this.third_stage_Horizontal();
                });
            }
        }

        else {
            for (var i = _this.objGroup1full.length - 1; i >= _this.objGroup1full.length - _this.green; i--) {
                _this.objGroup1full.getChildAt(i).x = _this.workspace_Horizontal_left_X[i];
                _this.objGroup1full.getChildAt(i).y = _this.workspace_Horizontal_left_Y;
            }
        }
    },

    hole_2: function (target) {
        _this.clickSound.play();
        if (_this.top == -1)
            _this.tempGroup = _this.add.group();
        if (target.x >= 350 && target.x <= 660) {
            for (i = 0; i < _this.blue; i++) {
                currentCube = _this.objGroup2full.getChildAt(_this.objGroup2full.length - 1);
                _this.tempGroup.addChild(currentCube);
                currentCube.bringToTop();
                currentCube.x = 540;
                currentCube.y = _this.Right_cube_Y_Vertical[i + _this.top + 1];
                _this.holes.getChildAt(i + _this.top + 1).visible = false;
                currentCube.events.onDragStop.removeAll();
            }

            _this.top = _this.top + _this.blue;

            for (i = 0; i < _this.tempGroup.length; i++) {
                currentCube = _this.tempGroup.getChildAt(i);
                currentCube.inputEnabled = false;
            }

            if (_this.top == _this.blue + _this.green - 1) {
                _this.time.events.add(1000, function () {
                    _this.giveShadeSound.play();
                    for (i = 0; i < _this.holes.length; i++) {
                        let hole = _this.holes.getChildAt(i);
                        hole.visible = true;
                        hole.frame = 3;
                    }
                    for (i = 0; i < _this.tempGroup.length; i++) {
                        let element = _this.tempGroup.getChildAt(_this.tempGroup.length - i - 1);
                        element.y = _this.Right_cube_Y_Vertical[_this.objGroup1full.length + _this.green - i - 1];
                    }
                });

                _this.time.events.add(2000, function () {
                    _this.third_stage();
                });
            }
        }
        else {
            for (var i = _this.objGroup2full.length - 1; i >= _this.objGroup2full.length - _this.blue; i--) {
                _this.objGroup2full.getChildAt(i).x = _this.workspace_Vertical_right_X;
                _this.objGroup2full.getChildAt(i).y = _this.workspace_Vertical_right_Y[i];
            }
        }
    },

    hole_2_Horizontal: function (target) {
        _this.clickSound.play();
        if (_this.top == -1)
            _this.tempGroup = _this.add.group();
        if (target.y >= 350 && target.x <= 660) {
            for (i = 0; i < _this.blue; i++) {
                currentCube = _this.objGroup2full.getChildAt(_this.objGroup2full.length - 1);
                _this.tempGroup.addChild(currentCube);
                currentCube.bringToTop();
                currentCube.y = 400;
                currentCube.x = _this.workspace_Horizontal_right_X[i + _this.top + 1];
                _this.holes.getChildAt(i + _this.top + 1).visible = false;
                currentCube.events.onDragStop.removeAll();
            }

            _this.top = _this.top + _this.blue;

            for (i = 0; i < _this.tempGroup.length; i++) {
                currentCube = _this.tempGroup.getChildAt(i);
                currentCube.inputEnabled = false;
            }

            if (_this.top === _this.blue + _this.green - 1) {
                _this.time.events.add(1000, function () {
                    _this.giveShadeSound.play();
                    for (i = 0; i < _this.holes.length; i++) {
                        let hole = _this.holes.getChildAt(i);
                        hole.visible = true;
                        hole.frame = 4;
                    }

                    for (i = 0; i < _this.tempGroup.length; i++) {
                        let element = _this.tempGroup.getChildAt(_this.tempGroup.length - i - 1);
                        element.x = _this.workspace_Horizontal_right_X[_this.objGroup1full.length + _this.green - i - 1];
                    }

                });
                _this.time.events.add(2000, function () {
                    _this.third_stage_Horizontal();
                });
            }
        }
        else {
            for (var i = _this.objGroup2full.length - 1; i >= _this.objGroup2full.length - _this.blue; i--) {
                _this.objGroup2full.getChildAt(i).x = _this.workspace_Horizontal_right_X[i];
                _this.objGroup2full.getChildAt(i).y = _this.workspace_Horizontal_right_Y;
            }
        }
    },

    third_stage: function () {
        _this.smallBox.x = 160;
        _this.smallBox.y = 374;
        _this.smallBox.scale.setTo(0.8);

        for (var i = 0; i < _this.tempGroup.length; i++) {
            _this.tempGroup.getChildAt(_this.tempGroup.length - i - 1).frame = 5;
        }

        let equals_3 = _this.add.text(275, 400, "=");
        equals_3.fill = '#FF0000';
        _this.equalsGroup.addChild(equals_3);

        _this.rightbtn.events.onInputDown.removeAll();
        _this.enterTxt1 = null;
        _this.enterTxt2 = null;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked_3, _this);

        _this.enterFractionBox1 = _this.add.sprite(540, 369, 'newBox');
        _this.enterFractionBox1.scale.setTo(0.8);
        _this.enterFractionBox1.visible = true;
        _this.BlueLine = _this.add.image(542, 409, 'blueLine');

        _this.enterFractionBox2 = _this.add.sprite(540, 412, 'newBox');
        _this.enterFractionBox2.scale.setTo(0.8);
        _this.enterFractionBox2.visible = true;

        _this.enterFraction = _this.add.sprite(540, 370, 'fraction_Bg');
        _this.enterFraction.frame = 5;
        _this.enterFraction.visible = false;
        _this.fractions.addChild(_this.enterFraction);

        _this.empty_box.addChild(_this.enterFractionBox1);
        _this.empty_box.addChild(_this.BlueLine);
        _this.empty_box.addChild(_this.enterFractionBox2);

        if (_this.count == 0)
            _this.voiceNote4();

        _this.time.events.add(1000, function () {
            _this.qn_flag = 4;
            _this.Ver_enableBoxes();
        });
    },

    third_stage_Horizontal: function () {
        _this.bigBox_1.x += 10;
        _this.smallBox.y = 390;
        _this.smallBox.x = 647;
        _this.smallBox.scale.setTo(0.7);

        for (let i = 0; i < _this.fractions.length; i++) {
            let element = _this.fractions.getChildAt(i);
            element.scale.setTo(0.8)
        }

        for (let i = 0; i < _this.equalsGroup.length; i++) {
            let element = _this.equalsGroup.getChildAt(i);
            element.scale.setTo(0.8);
        }

        _this.rightbtn.events.onInputDown.removeAll();
        _this.enterTxt1 = null;
        _this.enterTxt2 = null;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked_3, _this);

        _this.enterFractionBox1 = _this.add.sprite(890, 385, 'newBox');
        _this.enterFractionBox1.scale.setTo(0.7);
        _this.enterFractionBox1.visible = true;
        _this.BlueLine = _this.add.image(890, 420, 'blueLine');

        _this.enterFractionBox2 = _this.add.sprite(890, 425, 'newBox');
        _this.enterFractionBox2.scale.setTo(0.7);
        _this.enterFractionBox2.visible = true;

        _this.enterFraction = _this.add.sprite(770, 395, 'fraction_Bg');
        _this.enterFraction.scale.setTo(0.7);
        _this.enterFraction.frame = 0;

        if (_this.green > 9) {
            Left_numerator = _this.add.text(11, 10, _this.green);
            Left_numerator.fill = '#FF0000';
        }
        else {
            Left_numerator = _this.add.text(15, 10, _this.green);
            Left_numerator.fill = '#FF0000';
        }

        if (_this.objGroup1full.length + _this.green > 9) {
            Left_denomenator = _this.add.text(11, 40, _this.objGroup1full.length + _this.green);
            Left_denomenator.fill = '#FF0000';
        }
        else {
            Left_denomenator = _this.add.text(15, 40, _this.objGroup1full.length + _this.green);
            Left_denomenator.fill = '#FF0000';
        }

        _this.enterFraction.addChild(Left_numerator);
        _this.enterFraction.addChild(Left_denomenator);
        _this.enterFraction.frame = 5;
        _this.fractions.addChild(_this.enterFraction);

        _this.enterFraction = _this.add.sprite(830, 395, 'fraction_Bg');
        _this.enterFraction.scale.setTo(0.7);
        _this.enterFraction.frame = 0;
        if (_this.blue > 9) {
            Right_numerator = _this.add.text(11, 10, _this.blue);
            Right_numerator.fill = '#FF0000';
        }
        else {
            Right_numerator = _this.add.text(15, 10, _this.blue);
            Right_numerator.fill = '#FF0000';
        }

        if (_this.objGroup2full.length + _this.blue > 9) {
            Right_denomenator = _this.add.text(11, 40, _this.objGroup2full.length + _this.blue);
            Right_denomenator.fill = '#FF0000';
        }
        else {
            Right_denomenator = _this.add.text(15, 40, _this.objGroup2full.length + _this.blue);
            Right_denomenator.fill = '#FF0000';
        }

        _this.enterFraction.addChild(Right_numerator);
        _this.enterFraction.addChild(Right_denomenator);
        _this.enterFraction.frame = 5;
        _this.fractions.addChild(_this.enterFraction);

        _this.enterFraction = _this.add.sprite(890, 395, 'fraction_Bg');
        _this.enterFraction.scale.setTo(0.7);
        _this.enterFraction.frame = 5;
        _this.enterFraction.visible = false;
        _this.fractions.addChild(_this.enterFraction);

        _this.equals = _this.add.text(871, 412, "=");
        _this.equals.scale.setTo(0.7);
        _this.equals.fill = '#FF0000';
        _this.equalsGroup.addChild(_this.equals);

        _this.equals = _this.add.text(750, 412, "=");
        _this.equals.scale.setTo(0.7);
        _this.equals.fill = '#FF0000';
        _this.equalsGroup.addChild(_this.equals);

        _this.equals = _this.add.text(812, 412, "+");
        _this.equals.scale.setTo(0.7);
        _this.equals.fill = '#FF0000';
        _this.equalsGroup.addChild(_this.equals);

        _this.empty_box.addChild(_this.enterFractionBox1);
        _this.empty_box.addChild(_this.BlueLine);
        _this.empty_box.addChild(_this.enterFractionBox2);

        for (let i = 0; i < _this.tempGroup.length; i++) {
            _this.tempGroup.getChildAt(i).frame = 5;
        }
        if (_this.count == 0)
            _this.voiceNote4();

        _this.time.events.add(1000, function () {
            _this.qn_flag = 4;
            _this.Ver_enableBoxes();
        });
    },

    nextquestion: function () {
        _this.time.events.add(2000, function () {
            _this.objGroup1full.destroy();
            _this.objGroup2full.destroy();
            _this.objGroup1.destroy();
            _this.objGroup2.destroy();
            _this.objGroup1cpy.destroy();
            _this.objGroup2cpy.destroy();
            _this.holes.destroy();
            _this.numGroup.destroy();
            _this.holes_workspace.destroy();
            _this.equalsGroup.destroy();
            _this.fractions.destroy();
            _this.empty_box.destroy();
            _this.tempGroup.destroy();

            _this.target = 1;

            _this.qn_flag = -1;
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.enterTxt1 = null;
            _this.enterTxt2 = null;
            _this.top1 = -1;
            _this.top2 = -1;
            _this.top = -1;

            _this.bigBox.destroy();
            _this.bigBox_1.destroy();
            _this.plus.destroy();
            _this.smallBox.destroy();
            _this.Bg_fraction_left.destroy();
            _this.Bg_fraction_right.destroy();
            _this.enterFraction.destroy();;

            if (_this.count < 6) {
                _this.gotoFractions();
            }
            else {
                _this.timer1.stop();
                _this.timer1 = null;
                _this.time.events.add(5000, function () {
                    //_this.state.start('score');
                    _this.state.start('score', true, false,gameID,_this.microConcepts);
                });
            }
        });
    },

    starActions: function () {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NSF_12_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Fractions";
         _this.microConcepts = "Number Systems";
        _this.count++;
        anim.play();
    },


    shutdown: function () {
        _this.stopVoice();
    },

    DemoVideo: function () {
        //* This game is about addition of unlike fractions. 
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSF-12-G6/" +
            _this.languageSelected + "/NSF-12-G6-demo-1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* Observe the given fractions. 
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/NSF-12-G6/" +
            _this.languageSelected + "/NSF-12-G6-demo-2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //* Find their equivalent fractions to have the same denominators. Use Least Common Multiple method. 
        _this.demoAudio3 = document.createElement('audio');
        _this.demoAudio3src = document.createElement('source');
        _this.demoAudio3src.setAttribute("src", window.baseUrl + "questionSounds/NSF-12-G6/" +
            _this.languageSelected + "/NSF-12-G6-demo-3.mp3");
        _this.demoAudio3.appendChild(_this.demoAudio3src);

        //* enter the equivalent fractions.
        _this.q0Sound = document.createElement('audio');
        _this.q0Soundsrc = document.createElement('source');
        _this.q0Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-12-G6/" +
            _this.languageSelected + "/EnterEqFr.mp3");
        _this.q0Sound.appendChild(_this.q0Soundsrc);

        //* Convert the given unlike fractions to like fractions. And add them.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-12-G6/" +
            _this.languageSelected + "/NSF-12-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Add the fractions by dragging them to the whole. 
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-12-G6/" +
            _this.languageSelected + "/NSF-12-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //*Count the added cubes. 
        //        _this.q3Sound = document.createElement('audio');
        //        _this.q3Soundsrc = document.createElement('source');
        //        _this.q3Soundsrc.setAttribute("src", "questionSounds/NSF-12-G6/" + 
        //                                         _this.languageSelected + "/NSF-12-G6-c.mp3");
        //        _this.q3Sound.appendChild(_this.q3Soundsrc);

        //*Enter the answer  
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSF-12-G6/" +
            _this.languageSelected + "/NSF-12-G6-d.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        _this.showDemoVideo();  //* call the function to show the video

        // _this.backbtn1 = _this.add.sprite(10, 6, 'backbtn');
        // _this.backbtn1.inputEnabled = true;
        // _this.backbtn1.input.useHandCursor = true;
        // _this.backbtn1.events.onInputDown.add(function ()
        // {   
        //    // _this.stopVideo();
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

        if (_this.q0Timer) clearTimeout(_this.q0Timer);
        if (_this.q1Timer) clearTimeout(_this.q1Timer);
        if (_this.q2Timer) clearTimeout(_this.q2Timer);
        //        if (_this.q3Timer) clearTimeout(_this.q3Timer);
        if (_this.q4Timer) clearTimeout(_this.q4Timer);

        if (_this.demoAudio1) {
            console.log("removing the demo audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1.removeEventListener('ended', _this.dA1);
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.demoAudio2) {
            console.log("removing the demo audio1");
            _this.demoAudio2.pause();
            _this.demoAudio2.removeEventListener('ended', _this.dA2);
            _this.demoAudio2 = null;
            _this.demoAudio2src = null;
        }

        if (_this.demoAudio3) {
            console.log("removing the demo audio1");
            _this.demoAudio3.pause();
            _this.demoAudio3.removeEventListener('ended', _this.dA3);
            _this.demoAudio3 = null;
            _this.demoAudio3src = null;
        }

        if (_this.q0Sound) {
            console.log("removing the q1");
            _this.q0Sound.pause();
            _this.q0Sound = null;
            _this.q0Soundsrc = null;
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

        //        if (_this.q3Sound)
        //        {
        //            console.log("removing the q3");
        //            _this.q3Sound.pause();
        //            _this.q3Sound = null;
        //            _this.q3Soundsrc = null;
        //        }

        if (_this.q4Sound) {
            console.log("removing the q4");
            _this.q4Sound.pause();
            _this.q4Sound = null;
            _this.q4Soundsrc = null;
        }

        //  _this.backbtn1.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                   //* skip button destroyed
        // _this.backbtn1.destroy();               //* backbutton button destroyed
    },

    //* event functions for demo audio and question audios. 
    //* do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    dA1: function () {
        _this.demoAudio2.play();
    },

    dA2: function () {
        _this.demoAudio3.play();
    },

    dA3: function () {
        _this.q1Sound.play();
    },

    showDemoVideo: function () {
        //* As _this.game is paused, phaser time events cannot be used since its timer is stopped.
        //* so we have to use js timers as required

        _this.demoAudio1.play();
        _this.demoVideo_1 = _this.add.video('nsf12_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSF-12-G6.mp4");
        _this.videoWorld = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.addEventListener('ended', _this.dA1);  //* play demo audio 2
        _this.demoAudio2.addEventListener('ended', _this.dA2);  //* play demo audio 3
        _this.demoAudio3.addEventListener('ended', _this.dA3);  //* play qn 1

        _this.q0Timer = setTimeout(function ()    //* q2 js timer to play q2 after 53 seconds.
        {
            clearTimeout(_this.q0Timer);         //* clear the time once its used.
            _this.q0Sound.play();
        }, 38000);

        _this.q1Timer = setTimeout(function ()    //* q2 js timer to play q2 after 53 seconds.
        {
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 53000);

        // _this.q2Timer = setTimeout(function()    //* q2 js timer to play q2 after 58 seconds.
        // {
        //     clearTimeout(_this.q2Timer);         //* clear the time once its used.
        //     _this.q3Sound.play();
        //     console.log("qn3");
        // }, 58000); 

        _this.q4Timer = setTimeout(function ()    //* q4 js timer to play q4 after 60 seconds.
        {
            clearTimeout(_this.q4Timer);         //* clear the time once its used.
            _this.q4Sound.play();
        }, 60000);



        _this.demoVideo_1.onComplete.add(function ()   //* on completion of demovideo close the video
        {
            _this.stopAudio();                  //* stop timers and audios
            _this.demoVideo_1.stop(false);      //* stop vide.
            _this.videoWorld.destroy();         //* destroy the video, gets removed from screen.
            _this.game.paused = false;          //* now, unpause the game, so that it continues.
        });
    }

}