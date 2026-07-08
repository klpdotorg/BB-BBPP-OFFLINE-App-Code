Game.AL_MAZE_G6level1 = function () { };


Game.AL_MAZE_G6level1.prototype =
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

        _this.levelCompleteSound = document.createElement('audio');
        _this.levelCompleteSoundsrc = document.createElement('source');
        _this.levelCompleteSoundsrc.setAttribute("src", window.baseUrl + "sounds/Level Complete.mp3");
        _this.levelCompleteSound.appendChild(_this.levelCompleteSoundsrc);

        _this.levelUp = document.createElement('audio');
        _this.levelUpsrc = document.createElement('source');
        _this.levelUpsrc.setAttribute("src", window.baseUrl + "sounds/Level Up.mp3");
        _this.levelUp.appendChild(_this.levelUpsrc);

        _this.giveShadeSound = document.createElement('audio');
        _this.giveShadeSoundsrc = document.createElement('source');
        _this.giveShadeSoundsrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.giveShadeSound.appendChild(_this.giveShadeSoundsrc);

        _this.nextOptionSound = document.createElement('audio');
        _this.nextOptionSoundsrc = document.createElement('source');
        _this.nextOptionSoundsrc.setAttribute("src", window.baseUrl + "sounds/Next_option_sound.mp3");
        _this.nextOptionSound.appendChild(_this.nextOptionSoundsrc);

        telInitializerbbpp.gameIdInit("AL_MAZE_G6", gradeSelected);
        console.log(gameID,"gameID ///////////////");
    },


    create: function (game) {
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
        _this.questionid = null;
        _this.noofAttempts = 0;
        _this.sceneCount = 0;
        _this.AnsTimerCount = 0;
        _this.NumSubAttempts = 0;

        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        _this.handisDisplayed = false;

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;

        // //*  User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
        _this.microConcepts;
        // _this.grade;

        _this.qn_flag = -1;
        _this.matched = 0;
        _this.voiceCnt = 0;
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
                _this.state.start('grade6Algebra', true, false);
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

        _this.generateStarsForTheScene(6);

        _this.numGroup;
        _this.target = 1;

        //* first digit and second digit of number selected on number pad
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.selectedAns3 = '';

        _this.numberBoxPlacing = [];
        _this.tweens = 0;

        //* start the game with first question
        _this.time.events.add(100, _this.getQuestion);
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
        _this.counters = 2;
        _this.Questions = [0, 1, 2, 3, 4, 5, 6, 7];
        _this.shuffle(_this.Questions);
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
        _this.time.events.add(500, function () {
            _this.qn_flag = 1;
            _this.Question_function();
        });
    },

    voiceNote1: function () {
        _this.pauseVoice()
        _this.Question1 = document.createElement('audio');
        _this.Question1src = document.createElement('source');
        _this.Question1src.setAttribute("src", window.baseUrl + "questionSounds/AL-MAZE-G6/" + _this.languageSelected + "/AL-MAZE-G6A.mp3");
        _this.Question1.appendChild(_this.Question1src);

        _this.Question1.play();

    },

    voiceNote2: function () {
        _this.pauseVoice();
        _this.Question2 = document.createElement('audio');
        _this.Question2src = document.createElement('source');
        _this.Question2src.setAttribute("src", window.baseUrl + "questionSounds/AL-MAZE-G6/" + _this.languageSelected + "/AL-MAZE-G6B.mp3");
        _this.Question2.appendChild(_this.Question2src);

        _this.Question2.play();

    },

    drag_cubesAction: function () {
        _this.tempCubeGroup = _this.add.group();
        for (i = 0; i < _this.left_denominator; i++) {
            _this.tempCube = _this.objGroup1.create(_this.Left_cube_X_Horizontal[i], _this.Left_cube_Y_Horizontal, '4-colour-cube_Horizontal');
            _this.tempCube.name = "" + i;
            _this.tempCube.frame = 4;
            _this.tempCubeGroup.addChild(_this.tempCube);
        }

        for (k = _this.objGroup1.length - 1; k >= _this.left_denominator - _this.left_numerator; k--) {
            _this.tempCubeGroup.getChildAt(k).frame = 1;
        }

        _this.time.events.add(1000, function () {
            _this.hand = _this.add.image(_this.Left_cube_X_Horizontal[0], _this.Left_cube_Y_Horizontal, 'hand');
            _this.hand.scale.setTo(0.5, 0.5);
            _this.tempCubeGroup.addChild(_this.hand);
        });

        _this.time.events.add(1500, function () {
            tempDragAction = _this.add.tween(_this.tempCubeGroup);
            tempDragAction.to({ x: -20, y: 110 }, 500, 'Linear', true, 0);
            tempDragAction.start();
        });

        _this.time.events.add(2000, function () {
            _this.tempCubeGroup.destroy();
        });
    },

    Question_function: function () {
        _this.up = _this.add.sprite(50, 100, 'up');
        _this.down = _this.add.sprite(50, 200, 'down');
        _this.right = _this.add.sprite(50, 300, 'right');
        _this.left = _this.add.sprite(50, 400, 'left');

        _this.path;

        if (_this.Questions[_this.count] === 0)
            _this.path = _this.add.sprite(150, 43, 'level1');
        else if (_this.Questions[_this.count] === 1)
            _this.path = _this.add.sprite(150, 43, 'level2');
        else if (_this.Questions[_this.count] === 2)
            _this.path = _this.add.sprite(150, 43, 'level3');
        else if (_this.Questions[_this.count] === 3)
            _this.path = _this.add.sprite(150, 43, 'level4');
        else if (_this.Questions[_this.count] === 4)
            _this.path = _this.add.sprite(150, 43, 'level5');
        else if (_this.Questions[_this.count] === 5)
            _this.path = _this.add.sprite(150, 43, 'level6');
        else if (_this.Questions[_this.count] === 6)
            _this.path = _this.add.sprite(150, 43, 'level7');
        else if (_this.Questions[_this.count] === 7)
            _this.path = _this.add.sprite(150, 43, 'level8');

        _this.path.frame = 0;

        _this.BlueBox = _this.add.image(720, 150, 'BlueBox');
        _this.BlueBox.scale.setTo(0.9, 1);

        _this.Question_box = _this.add.image(730, 70, 'bigBox_1');

        if (_this.count == 0) {
            _this.hand = _this.add.image(740, 120, 'hand')
            _this.hand.scale.setTo(0.50);

            _this.time.events.add(1000, function () {
                tempDragAction = _this.add.tween(_this.hand);
                _this.hand.bringToTop();
                tempDragAction.to({ x: 920, y: 120 }, 1200, 'Linear', true, 0);
                tempDragAction.start();
            });
            _this.time.events.add(3000, function () {
                tempDragAction = _this.add.tween(_this.hand);
                _this.hand.bringToTop();
                tempDragAction.to({ x: 920, y: 380 }, 2000, 'Linear', true, 0);
                tempDragAction.start();
            });

            _this.time.events.add(5200, function () {
                _this.hand.destroy();
                _this.hand = _this.add.image(825, 460, 'hand')
                _this.hand.scale.setTo(0.50);
                _this.time.events.add(500, () => {
                    _this.hand.scale.setTo(0.45);
                    _this.time.events.add(500, () => {
                        _this.hand.scale.setTo(0.5);
                        _this.time.events.add(450, () => {
                            _this.hand.destroy();
                        })
                    })
                })
            })
        }
        _this.Answer_1_glow = _this.add.image(730, 165, 'bigBox_2');
        _this.Answer_2_glow = _this.add.image(730, 245, 'bigBox_2');
        _this.Answer_3_glow = _this.add.image(730, 325, 'bigBox_2');

        _this.Answer_1 = _this.add.image(730, 165, 'bigBox_1');
        _this.Answer_2 = _this.add.image(730, 245, 'bigBox_1');
        _this.Answer_3 = _this.add.image(730, 325, 'bigBox_1');

        _this.Answer_1_glow.scale.setTo(0.9, 1);
        _this.Answer_2_glow.scale.setTo(0.9, 1);
        _this.Answer_3_glow.scale.setTo(0.9, 1);

        _this.Answer_1.scale.setTo(0.9, 1);
        _this.Answer_2.scale.setTo(0.9, 1);
        _this.Answer_3.scale.setTo(0.9, 1);

        _this.Answer_1.visible = false;
        _this.Answer_2.visible = false;
        _this.Answer_3.visible = false;
        _this.Answer_1_glow.visible = false;
        _this.Answer_2_glow.visible = false;
        _this.Answer_3_glow.visible = false;

        _this.Question_box.scale.setTo(0.9, 1);
        _this.BlueBox.visible = false;
        _this.Question_box.visible = false;

        _this.i = 0;
        _this.turns(2);
        //_this.sceneCount++;
        // _this.AnsTimerCount = 0;
    },

    turns: function (value) {
        _this.sceneCount++;
       // _this.noofAttempts = 0;
        // _this.AnsTimerCount =0;// 

        _this.Questions_1 = [];
        _this.array_1 = [0, 1, 2, 3];
        _this.shuffle(_this.array_1);
        _this.array_2 = [0, 1, 2, 3];
        _this.shuffle(_this.array_2);

        console.log(_this.array_1, _this.array_2);

        _this.ans2 = Math.floor(Math.random() * 96) + 2;
        var temp = 99 - _this.ans2;

        _this.sum2 = Math.floor(Math.random() * (temp - 1)) + 2;
        _this.sum1 = _this.ans2 + _this.sum2;

        _this.Questions_1.push([_this.sum1, _this.sum2, 0, _this.ans2]);
        console.log("SUM1,2,ans,temp : " + _this.sum1 + ' ' + _this.sum2 + ' ' + _this.ans2 + ' ' + temp);

        //        while(true){
        //            _this.sum2=Math.floor(Math.random()*99)+1;
        //            if(_this.sum1-_this.sum2>0){
        //                _this.Questions_1.push([_this.sum1, _this.sum2, 0, _this.sum1-_this.sum2]);
        //               break;
        //            }
        //        }

        _this.sub1 = Math.floor(Math.random() * 96) + 2;
        var temp = 99 - _this.sub1;
        _this.sub2 = Math.floor(Math.random() * (temp - 1)) + 2;
        _this.Questions_1.push([_this.sub1, _this.sub2, 1, _this.sub1 + _this.sub2]);
        console.log("SUB1,2,temp : " + _this.sub1 + ' ' + _this.sub2 + ' ' + temp);

        //        while(true){
        //            _this.sub2=Math.floor(Math.random()*99)+1;
        //            _this.sub1=Math.floor(Math.random()*99)+1;
        //            if(_this.sub1+_this.sub2<100){
        //                _this.Questions_1.push([_this.sub1, _this.sub2, 1, _this.sub1+_this.sub2]);
        //                break;
        //            }
        //        }

        //* generate first factor ans in range 2 to 48.
        //* divide 99 by this factor to get temp (max range of next factor mul2)
        //* generate next factor mul2 from 2 to temp
        //* multiply the two factors _this.ans and _this.mul2 to get _this.mul1
        //* store the numbers in the array for asking the questions.

        _this.ans = Math.floor(Math.random() * 48) + 2;
        var temp = Math.floor(99 / _this.ans);

        _this.mul2 = Math.floor(Math.random() * (temp - 1)) + 2;

        _this.mul1 = _this.ans * _this.mul2;
        _this.Questions_1.push([_this.mul1, _this.mul2, 2, _this.ans]);
        console.log("MUL1,2,ans,temp : " + _this.mul1 + ' ' + _this.mul2 + ' ' + _this.ans + ' ' + temp);

        //        _this.mul1;
        //        console.log("MUL111111111: " + _this.mul1);
        //        while(true){
        //            _this.mul2=Math.floor(Math.random()*98)+2;
        //            console.log("MUL111111111: " + _this.mul1);
        //            console.log("MUL22222222: " + _this.mul2);
        //            if(_this.mul1%_this.mul2==0 && _this.mul1!==_this.mul2){
        //                _this.Questions_1.push([_this.mul1, _this.mul2, 2, _this.mul1/_this.mul2]);
        //                break;
        //            }
        //        }

        _this.ans1 = Math.floor(Math.random() * 48) + 2;
        var temp1 = Math.floor(99 / _this.ans1);

        _this.div2 = Math.floor(Math.random() * (temp1 - 1)) + 2;

        _this.div1 = _this.ans1 * _this.div2;
        _this.Questions_1.push([_this.div1, _this.div2, 3, _this.ans1]);

        console.log("DIV1,2,ans,temp : " + _this.div1 + ' ' + _this.div2 + ' ' + _this.ans1 + ' ' + temp1);

        //        while(true){
        //            _this.div2=Math.floor(Math.random()*98)+2;
        //            console.log("DIV2222222: " + _this.div2);
        //            if(_this.div1%_this.div2==0 && _this.div1 !== _this.div2){
        //                _this.Questions_1.push([_this.div1, _this.div2, 3, _this.div1/_this.div2]);
        //                break;
        //            }
        //        }

        for (let i = 0; i < value; i++) {
            for (let j = 0; j < value - i - 1; j++) {
                if (_this.array_1[j] > _this.array_1[j + 1]) {
                    let temp = _this.array_1[j];
                    _this.array_1[j] = _this.array_1[j + 1];
                    _this.array_1[j + 1] = temp;
                }
            }
        }

        _this.red_position = [[[310, 314], [470, 178], [570, 290], [615, 365]],
        [[229, 266], [274, 201], [364, 202], [433, 180]],
        [[205, 292], [274, 315], [479, 452], [525, 340]],
        [[205, 292], [228, 265], [296, 110], [478, 155]],
        [[206, 272], [206, 250], [479, 293], [593, 273]],
        [[205, 336], [227, 225], [297, 110], [479, 359]],
        [[205, 292], [250, 292], [389, 362], [409, 407]],
        [[198, 295], [311, 272], [334, 318], [449, 500]]
        ];

        _this.arrow_position = [[[335, 326, 1], [494, 194, 1], [585, 291, 0], [616, 360, -1]],
        [[229, 266, -1], [289, 202, 0], [379, 202, 0], [448, 197, 1]],
        [[220, 310, 1], [289, 333, 1], [494, 470, 1], [525, 340, -1]],
        [[220, 293, 0], [246, 247, 0], [297, 108, -1], [493, 172, 1]],
        [[206, 273, -1], [220, 249, 0], [479, 293, -1], [610, 272, 0]],
        [[223, 338, 0], [228, 218, -1], [313, 110, 0], [495, 361, 0]],
        [[206, 290, -1], [267, 293, 0], [403, 378, 1], [425, 423, 1]],
        [[211, 315, 1], [327, 273, 0], [351, 318, 0], [448, 498, -1]],
        ];

        _this.arrow = [];
        _this.red = [];

        _this.v = value;

        _this.dots = _this.add.group();
        _this.time.events.add(500, function () {
            _this.path.frame = _this.array_1[_this.i] + 1;
            _this.display(value);
        });

    },

    display: function () {

        _this.time.events.add(300, function () {
            _this.question = [];
            _this.Answer_1.visible = true;
            _this.Answer_2.visible = true;
            _this.Answer_3.visible = true;
            _this.Answer_1_glow.visible = true;
            _this.Answer_2_glow.visible = true;
            _this.Answer_3_glow.visible = true;
            _this.BlueBox.visible = true;
            _this.Question_box.visible = true;
            _this.qn_flag = 1;
            if (_this.counters != 0) {
                _this.counters--;
                _this.voiceNote1();
            }
            if (_this.Questions_1[_this.array_2[_this.i]][2] == 0) {
                _this.question[0] = _this.add.text(48, 20, '' + _this.Questions_1[_this.array_2[_this.i]][1] + ' + ');
                _this.question[1] = _this.add.text(108, 20, 'n ');
                _this.question[2] = _this.add.text(128, 20, '= ' + _this.Questions_1[_this.array_2[_this.i]][0]);

                _this.question[0].align = 'center';
                _this.question[0].font = 'Oh Whale';
                _this.question[0].fontSize = 30;
                _this.question[0].fill = '#65B4C3';

                _this.question[1].align = 'center';
                _this.question[1].font = 'Oh Whale';
                _this.question[1].fontSize = 30;
                _this.question[1].fill = '#FF0000';

                _this.question[2].align = 'center';
                _this.question[2].font = 'Oh Whale';
                _this.question[2].fontSize = 30;
                _this.question[2].fill = '#65B4C3';

                _this.Question_box.addChild(_this.question[0]);
                _this.Question_box.addChild(_this.question[1]);
                _this.Question_box.addChild(_this.question[2]);
            }
            else if (_this.Questions_1[_this.array_2[_this.i]][2] == 1) {
                _this.question[0] = _this.add.text(48, 20, 'n ');
                _this.question[1] = _this.add.text(68, 20, '- ' + _this.Questions_1[_this.array_2[_this.i]][0] + ' = ' + _this.Questions_1[_this.array_2[_this.i]][1]);

                _this.question[0].align = 'center';
                _this.question[0].font = 'Oh Whale';
                _this.question[0].fontSize = 30;
                _this.question[0].fill = '#FF0000';

                _this.question[1].align = 'center';
                _this.question[1].font = 'Oh Whale';
                _this.question[1].fontSize = 30;
                _this.question[1].fill = '#65B4C3';

                _this.Question_box.addChild(_this.question[0]);
                _this.Question_box.addChild(_this.question[1]);
            }
            else if (_this.Questions_1[_this.array_2[_this.i]][2] == 2) {
                _this.question[0] = _this.add.text(48, 20, 'n ');
                _this.question[1] = _this.add.text(68, 20, 'x ' + _this.Questions_1[_this.array_2[_this.i]][1] + ' = ' + _this.Questions_1[_this.array_2[_this.i]][0]);

                _this.question[0].align = 'center';
                _this.question[0].font = 'Oh Whale';
                _this.question[0].fontSize = 30;
                _this.question[0].fill = '#FF0000';

                _this.question[1].align = 'center';
                _this.question[1].font = 'Oh Whale';
                _this.question[1].fontSize = 30;
                _this.question[1].fill = '#65B4C3';

                _this.Question_box.addChild(_this.question[0]);
                _this.Question_box.addChild(_this.question[1]);
            }
            else {
                _this.question[0] = _this.add.text(48, 20, '' + _this.Questions_1[_this.array_2[_this.i]][0] + ' / ');
                _this.question[1] = _this.add.text(100, 20, 'n ');
                _this.question[2] = _this.add.text(128, 20, '= ' + _this.Questions_1[_this.array_2[_this.i]][1]);

                _this.question[0].align = 'center';
                _this.question[0].font = 'Oh Whale';
                _this.question[0].fontSize = 30;
                _this.question[0].fill = '#65B4C3';

                _this.question[1].align = 'center';
                _this.question[1].font = 'Oh Whale';
                _this.question[1].fontSize = 30;
                _this.question[1].fill = '#FF0000';

                _this.question[2].align = 'center';
                _this.question[2].font = 'Oh Whale';
                _this.question[2].fontSize = 30;
                _this.question[2].fill = '#65B4C3';

                _this.Question_box.addChild(_this.question[0]);
                _this.Question_box.addChild(_this.question[1]);
                _this.Question_box.addChild(_this.question[2]);
            }



            _this.red = _this.add.image(_this.red_position[_this.Questions[_this.count]][_this.array_1[_this.i]][0], _this.red_position[_this.Questions[_this.count]][_this.array_1[_this.i]][1], 'Red');
            _this.dots.addChild(_this.red);
            _this.nextOptionSound.play();

            _this.display_options();

        });
    },

    display_options: function () {

        _this.a = [0, 1, 2];
        _this.shuffle(_this.a);

        _this.opt1;
        while (true) {
            _this.opt1 = Math.floor(Math.random() * 100);
            if (_this.opt1 != _this.Questions_1[_this.array_2[_this.i]][3]) {
                break;
            }
        }
        _this.opt2;
        while (true) {
            _this.opt2 = Math.floor(Math.random() * 100);
            if (_this.opt2 != _this.Questions_1[_this.array_2[_this.i]][3] && _this.opt2 != _this.opt1) {
                break;
            }
        }

        let text = _this.add.text(70, 20, 'n');
        text.align = 'center';
        text.font = 'Oh Whale';
        text.fontSize = 30;
        text.fill = '#FF0000';

        let value = _this.add.text(90, 20, ' = ' + _this.Questions_1[_this.array_2[_this.i]][3]);
        value.align = 'center';
        value.font = 'Oh Whale';
        value.fontSize = 30;
        value.fill = '#65B4C3';

        let t = _this.add.text(70, 20, 'n');
        t.align = 'center';
        t.font = 'Oh Whale';
        t.fontSize = 30;
        t.fill = '#FF0000';

        let v = _this.add.text(90, 20, ' = ' + _this.Questions_1[_this.array_2[_this.i]][3]);
        v.align = 'center';
        v.font = 'Oh Whale';
        v.fontSize = 30;
        v.fill = '#65B4C3';

        if (_this.a[0] === 0) {
            _this.Answer_1.addChild(text);
            _this.Answer_1.addChild(value);

            _this.Answer_1_glow.addChild(t);
            _this.Answer_1_glow.addChild(v);

            text = _this.add.text(70, 20, 'n');
            text.align = 'center';
            text.font = 'Oh Whale';
            text.fontSize = 30;
            text.fill = '#FF0000';

            value = _this.add.text(90, 20, ' = ' + _this.opt1);
            value.align = 'center';
            value.font = 'Oh Whale';
            value.fontSize = 30;
            value.fill = '#65B4C3';

            t = _this.add.text(70, 20, 'n');
            t.align = 'center';
            t.font = 'Oh Whale';
            t.fontSize = 30;
            t.fill = '#FF0000';

            v = _this.add.text(90, 20, ' = ' + _this.opt1);
            v.align = 'center';
            v.font = 'Oh Whale';
            v.fontSize = 30;
            v.fill = '#65B4C3';

            _this.Answer_2.addChild(text);
            _this.Answer_2.addChild(value);

            _this.Answer_2_glow.addChild(t);
            _this.Answer_2_glow.addChild(v);

            text = _this.add.text(70, 20, 'n');
            text.align = 'center';
            text.font = 'Oh Whale';
            text.fontSize = 30;
            text.fill = '#FF0000';

            value = _this.add.text(90, 20, ' = ' + _this.opt2);
            value.align = 'center';
            value.font = 'Oh Whale';
            value.fontSize = 30;
            value.fill = '#65B4C3';

            t = _this.add.text(70, 20, 'n');
            t.align = 'center';
            t.font = 'Oh Whale';
            t.fontSize = 30;
            t.fill = '#FF0000';

            v = _this.add.text(90, 20, ' = ' + _this.opt2);
            v.align = 'center';
            v.font = 'Oh Whale';
            v.fontSize = 30;
            v.fill = '#65B4C3';

            _this.Answer_3.addChild(text);
            _this.Answer_3.addChild(value);

            _this.Answer_3_glow.addChild(t);
            _this.Answer_3_glow.addChild(v);
        }
        else if (_this.a[0] === 1) {
            _this.Answer_2.addChild(text);
            _this.Answer_2.addChild(value);

            _this.Answer_2_glow.addChild(t);
            _this.Answer_2_glow.addChild(v);

            text = _this.add.text(70, 20, 'n');
            text.align = 'center';
            text.font = 'Oh Whale';
            text.fontSize = 30;
            text.fill = '#FF0000';

            value = _this.add.text(90, 20, ' = ' + _this.opt1);
            value.align = 'center';
            value.font = 'Oh Whale';
            value.fontSize = 30;
            value.fill = '#65B4C3';

            t = _this.add.text(70, 20, 'n');
            t.align = 'center';
            t.font = 'Oh Whale';
            t.fontSize = 30;
            t.fill = '#FF0000';

            v = _this.add.text(90, 20, ' = ' + _this.opt1);
            v.align = 'center';
            v.font = 'Oh Whale';
            v.fontSize = 30;
            v.fill = '#65B4C3';

            _this.Answer_1.addChild(text);
            _this.Answer_1.addChild(value);

            _this.Answer_1_glow.addChild(t);
            _this.Answer_1_glow.addChild(v);

            text = _this.add.text(70, 20, 'n');
            text.align = 'center';
            text.font = 'Oh Whale';
            text.fontSize = 30;
            text.fill = '#FF0000';

            value = _this.add.text(90, 20, ' = ' + _this.opt2);
            value.align = 'center';
            value.font = 'Oh Whale';
            value.fontSize = 30;
            value.fill = '#65B4C3';

            t = _this.add.text(70, 20, 'n');
            t.align = 'center';
            t.font = 'Oh Whale';
            t.fontSize = 30;
            t.fill = '#FF0000';

            v = _this.add.text(90, 20, ' = ' + _this.opt2);
            v.align = 'center';
            v.font = 'Oh Whale';
            v.fontSize = 30;
            v.fill = '#65B4C3';

            _this.Answer_3.addChild(text);
            _this.Answer_3.addChild(value);

            _this.Answer_3_glow.addChild(t);
            _this.Answer_3_glow.addChild(v);
        }
        else {
            _this.Answer_3.addChild(text);
            _this.Answer_3.addChild(value);

            _this.Answer_3_glow.addChild(t);
            _this.Answer_3_glow.addChild(v);

            text = _this.add.text(70, 20, 'n');
            text.align = 'center';
            text.font = 'Oh Whale';
            text.fontSize = 30;
            text.fill = '#FF0000';

            value = _this.add.text(90, 20, ' = ' + _this.opt1);
            value.align = 'center';
            value.font = 'Oh Whale';
            value.fontSize = 30;
            value.fill = '#65B4C3';

            t = _this.add.text(70, 20, 'n');
            t.align = 'center';
            t.font = 'Oh Whale';
            t.fontSize = 30;
            t.fill = '#FF0000';

            v = _this.add.text(90, 20, ' = ' + _this.opt1);
            v.align = 'center';
            v.font = 'Oh Whale';
            v.fontSize = 30;
            v.fill = '#65B4C3';

            _this.Answer_1.addChild(text);
            _this.Answer_1.addChild(value);

            _this.Answer_1_glow.addChild(t);
            _this.Answer_1_glow.addChild(v);

            text = _this.add.text(70, 20, 'n');
            text.align = 'center';
            text.font = 'Oh Whale';
            text.fontSize = 30;
            text.fill = '#FF0000';

            value = _this.add.text(90, 20, ' = ' + _this.opt2);
            value.align = 'center';
            value.font = 'Oh Whale';
            value.fontSize = 30;
            value.fill = '#65B4C3';

            t = _this.add.text(70, 20, 'n');
            t.align = 'center';
            t.font = 'Oh Whale';
            t.fontSize = 30;
            t.fill = '#FF0000';

            v = _this.add.text(90, 20, ' = ' + _this.opt2);
            v.align = 'center';
            v.font = 'Oh Whale';
            v.fontSize = 30;
            v.fill = '#65B4C3';

            _this.Answer_2.addChild(text);
            _this.Answer_2.addChild(value);

            _this.Answer_2_glow.addChild(t);
            _this.Answer_2_glow.addChild(v);
        }

        _this.Answer_1.inputEnabled = true;
        _this.Answer_2.inputEnabled = true;
        _this.Answer_3.inputEnabled = true;

        _this.Answer_1.events.onInputDown.add(function () {
            _this.Answer_1.visible = false;
            _this.Answer_2.visible = true;
            _this.Answer_3.visible = true;
        });

        _this.Answer_2.events.onInputDown.add(function () {
            _this.Answer_2.visible = false;
            _this.Answer_1.visible = true;
            _this.Answer_3.visible = true;
        });

        _this.Answer_3.events.onInputDown.add(function () {
            _this.Answer_3.visible = false;
            _this.Answer_1.visible = true;
            _this.Answer_2.visible = true;
        });

        _this.up.events.onInputDown.add(function () {
            _this.up.frame = 1;
            _this.right.frame = 0;
            _this.left.frame = 0;
            _this.down.frame = 0;

            if (_this.position === -1) {
                //_this.counterCelebrationSound.play();
                //_this.NumSubAttempts++;
                _this.up.events.onInputDown.removeAll();
                _this.down.events.onInputDown.removeAll();
                _this.left.events.onInputDown.removeAll();
                _this.right.events.onInputDown.removeAll();

                _this.i++;

                _this.levelCompleteSound.play();

                _this.disable();
                _this.position = -2;
                _this.second();
            } else {
               // _this.NumSubAttempts++;
                _this.wrongSound.play();
            }
        });
        _this.right.events.onInputDown.add(function () {
            _this.up.frame = 0;
            _this.right.frame = 1;
            _this.left.frame = 0;
            _this.down.frame = 0;

            if (_this.position === 0) {
                //_this.counterCelebrationSound.play();
              //  _this.NumSubAttempts++;
                _this.up.events.onInputDown.removeAll();
                _this.down.events.onInputDown.removeAll();
                _this.left.events.onInputDown.removeAll();
                _this.right.events.onInputDown.removeAll();

                _this.i++;

                _this.levelCompleteSound.play();

                _this.disable();
                _this.position = -2;
                _this.second();
            } else {
               // _this.NumSubAttempts++;
                _this.wrongSound.play();
            }
        });
        _this.left.events.onInputDown.add(function () {
            _this.up.frame = 0;
            _this.right.frame = 0;
            _this.left.frame = 1;
            _this.down.frame = 0;

           // _this.NumSubAttempts++;
            _this.wrongSound.play();
        });
        _this.down.events.onInputDown.add(function () {
            _this.up.frame = 0;
            _this.right.frame = 0;
            _this.left.frame = 0;
            _this.down.frame = 1;

            if (_this.position === 1) {
                //_this.counterCelebrationSound.play();
              //  _this.NumSubAttempts++;
                _this.up.events.onInputDown.removeAll();
                _this.down.events.onInputDown.removeAll();
                _this.left.events.onInputDown.removeAll();
                _this.right.events.onInputDown.removeAll();

                _this.i++;

                _this.levelCompleteSound.play();

                _this.disable();
                _this.position = -2;
                _this.second();
            } else {
                //_this.NumSubAttempts++;
                _this.wrongSound.play();
            }
        });

        _this.tick = _this.add.image(800, 425, 'tick');
        _this.position = -2;

        _this.tick.inputEnabled = true;
        _this.tick.useHandCursor = true;
        _this.tick.events.onInputDown.add(function () {
            _this.tick.frame = 1;
            _this.tr = 0;
            _this.tick.inputEnabled = false;

            if (_this.a[0] === 0) {
                if (_this.Answer_1.visible == false) {
                    _this.tr = 1;
                }
            }
            else if (_this.a[0] === 1) {
                if (_this.Answer_2.visible == false) {
                    _this.tr = 1;
                }
            }
            else if (_this.a[0] === 2) {
                if (_this.Answer_3.visible == false) {
                    _this.tr = 1;
                }
            }

            if (_this.tr === 1) {

                _this.arrows = _this.add.image(_this.arrow_position[_this.Questions[_this.count]][_this.array_1[_this.i]][0], _this.arrow_position[_this.Questions[_this.count]][_this.array_1[_this.i]][1], 'arrow');
                _this.arrows.scale.setTo(0.5);
                if (_this.arrow_position[_this.Questions[_this.count]][_this.array_1[_this.i]][2] === 1) {
                    _this.arrows.angle += 90;
                }
                else if (_this.arrow_position[_this.Questions[_this.count]][_this.array_1[_this.i]][2] === -1) {
                    _this.arrows.angle -= 90;
                }
                _this.counterCelebrationSound.play();
                _this.NumSubAttempts++;

                _this.tick.destroy();

                _this.enable();

                _this.position = _this.arrow_position[_this.Questions[_this.count]][_this.array_1[_this.i]][2];
                _this.qn_flag = 2;
                if (_this.counters != 0) {
                    _this.counters--;
                    _this.voiceNote2();
                }
                console.log("inside tr");
                if (_this.count == 0 && _this.handisDisplayed == false) {


                    _this.handisDisplayed = true;
                    _this.hand = _this.add.image(_this.arrow_position[_this.Questions[_this.count]][_this.array_1[_this.i]][0], _this.arrow_position[_this.Questions[_this.count]][_this.array_1[_this.i]][1] + 5, 'hand')
                    _this.hand.scale.setTo(0.5);
                    _this.hand.bringToTop();
                    _this.time.events.add(2000, function () {
                        _this.hand.destroy();
                        _this.hand = _this.add.image(100, 100, 'hand');
                        _this.hand.scale.setTo(0.5);
                        _this.hand.bringToTop();

                        _this.time.events.add(500, function () {
                            tempDragAction = _this.add.tween(_this.hand);
                            tempDragAction.to({ x: 100, y: 430 }, 1500, 'Linear', true, 0);
                            tempDragAction.start();
                        });

                        _this.time.events.add(3000, function () {
                            _this.hand.destroy();
                        });
                    });
                }

            }
            else {
                _this.NumSubAttempts++;

                _this.tick.frame = 0;
                _this.tick.inputEnabled = true;
                _this.wrongSound.play();
            }


        });
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

    enable: function () {
        _this.up.inputEnabled = true;
        _this.right.inputEnabled = true;
        _this.left.inputEnabled = true;
        _this.down.inputEnabled = true;
    },

    disable: function () {
        _this.up.inputEnabled = false;
        _this.right.inputEnabled = false;
        _this.left.inputEnabled = false;
        _this.down.inputEnabled = false;
    },

    findNoofattempts: function () {
        //*This is for BB APP purpose
        // NumSubAttempts  : Total attempt count for all sub questions.
        // NumSubQuestions : Number of sub questions for a given Question number.
        
        // NumAttemptsConsidered : Actual number of attempts we will consider at the Question level.
        
        // NumAttemptsConsidered  = (NumSubAttempts + (NumSubQuestions -1))/ NumSubQuestions
        
        // e.g When number of sub questions is 2:
        // if NumSubAttempts == 2;  NumAttemptsConsidered = (2 + (2 -1 )) / 2 = 1 (ignore remainder or decimal part)
        // if NumSubAttempts == 3;  NumAttemptsConsidered = (3 + (2 -1 )) / 2 = 2
        // if NumSubAttempts == 4;  NumAttemptsConsidered = (4 + (2 -1 )) / 2 = 2...
        
        
        // e.g When number of sub questions is 4:
        // if NumSubAttempts == 4;  NumAttemptsConsidered = (4 + (4 -1 )) / 4 = 1 (ignore remainder or decimal part)
        // if NumSubAttempts == 5;  NumAttemptsConsidered = (5 + (4 -1 )) / 4 = 2
        // if NumSubAttempts == 6;  NumAttemptsConsidered = (6 + (4 -1 )) / 4 = 2
        // if NumSubAttempts == 7;  NumAttemptsConsidered = (7 + (4 -1 )) / 4 = 2
        // if NumSubAttempts == 8;  NumAttemptsConsidered = (8 + (4 -1 )) / 4 = 2
        // if NumSubAttempts == 9;  NumAttemptsConsidered = (9 + (4 -1 )) / 4 = 3...
        //*code for MAZE game
        if (_this.count === 0 || _this.count === 1) {//1
            _this.NumAttemptsConsidered = (_this.NumSubAttempts + (2 - 1)) / 2;
            _this.noofAttempts = Math.floor(_this.NumAttemptsConsidered);
        } else if (_this.count === 2 || _this.count === 3) {//3

            _this.NumAttemptsConsidered = (_this.NumSubAttempts + (3 - 1)) / 3;
            _this.noofAttempts = Math.floor(_this.NumAttemptsConsidered);
        } else if (_this.count === 4 || _this.count === 5) {//4
            _this.NumAttemptsConsidered = (_this.NumSubAttempts + (4 - 1)) / 4;
            _this.noofAttempts = Math.floor(_this.NumAttemptsConsidered);
        }
        console.log(_this.NumSubAttempts, "_this.NumSubAttempts");
        console.log(_this.noofAttempts, "_this.noofAttempts");

        // _this.turns(2);
        //Math.floor(dividend / divisor);
    },

    second: function () {
        if (_this.arrows != undefined)
            _this.arrows.destroy();
        if (_this.i + 1 <= _this.v) {
            _this.path.frame = _this.array_1[_this.i] + 1;
        }
        else {
            _this.path.frame = 5;
        }
        _this.time.events.add(2000, function () {

            _this.Answer_1.destroy();
            _this.Answer_2.destroy();
            _this.Answer_3.destroy();
            _this.Answer_1_glow.destroy();
            _this.Answer_2_glow.destroy();
            _this.Answer_3_glow.destroy();
            _this.Question_box.destroy();

            _this.up.frame = 0;
            _this.right.frame = 0;
            _this.left.frame = 0;
            _this.down.frame = 0;

            _this.Question_box = _this.add.image(730, 70, 'bigBox_1');
            _this.position = -2;

            _this.Answer_1_glow = _this.add.image(730, 165, 'bigBox_2');
            _this.Answer_2_glow = _this.add.image(730, 245, 'bigBox_2');
            _this.Answer_3_glow = _this.add.image(730, 325, 'bigBox_2');

            _this.Answer_1 = _this.add.image(730, 165, 'bigBox_1');
            _this.Answer_2 = _this.add.image(730, 245, 'bigBox_1');
            _this.Answer_3 = _this.add.image(730, 325, 'bigBox_1');

            _this.Answer_1_glow.scale.setTo(0.9, 1);
            _this.Answer_2_glow.scale.setTo(0.9, 1);
            _this.Answer_3_glow.scale.setTo(0.9, 1);

            _this.Answer_1.scale.setTo(0.9, 1);
            _this.Answer_2.scale.setTo(0.9, 1);
            _this.Answer_3.scale.setTo(0.9, 1);

            _this.Answer_1.visible = false;
            _this.Answer_2.visible = false;
            _this.Answer_3.visible = false;
            _this.Answer_1_glow.visible = false;
            _this.Answer_2_glow.visible = false;
            _this.Answer_3_glow.visible = false;
            _this.BlueBox.visible = false;
            _this.Question_box.visible = false;

            _this.Question_box.scale.setTo(0.9, 1);

            if (_this.i + 1 <= _this.v) {
               // _this.NumSubAttempts++;
                _this.time.events.add(500, function () {
                    _this.display();
                });
            }
            else {
                // _this.noofAttempts++;
               // _this.NumSubAttempts++;
                _this.findNoofattempts();

                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
                _this.levelUp.play();
                _this.dots.destroy();
                _this.winningAction();
                _this.time.events.add(800, function () {
                    _this.i = 0;
                   // _this.NumSubAttempts++;
                   _this.NumSubAttempts =0;
                   _this.noofAttempts =0;
                   _this.AnsTimerCount = 0;

                    _this.starActions();
                    _this.celebrationSound.play();

                    _this.time.events.add(2500, function () {
                       
                        _this.path.destroy();
                        _this.winAnimObj.destroy();
                        if (_this.Questions[_this.count] === 0)
                            _this.path = _this.add.sprite(150, 43, 'level1');
                        else if (_this.Questions[_this.count] === 1)
                            _this.path = _this.add.sprite(150, 43, 'level2');
                        else if (_this.Questions[_this.count] === 2)
                            _this.path = _this.add.sprite(150, 43, 'level3');
                        else if (_this.Questions[_this.count] === 3)
                            _this.path = _this.add.sprite(150, 43, 'level4');
                        else if (_this.Questions[_this.count] === 4)
                            _this.path = _this.add.sprite(150, 43, 'level5');
                        else if (_this.Questions[_this.count] === 5)
                            _this.path = _this.add.sprite(150, 43, 'level6');
                        else if (_this.Questions[_this.count] === 6)
                            _this.path = _this.add.sprite(150, 43, 'level7');
                        else if (_this.Questions[_this.count] === 7)
                            _this.path = _this.add.sprite(150, 43, 'level8');

                        _this.path.frame = 0;

                        if (_this.count === 1)
                            _this.turns(2);
                        else if (_this.count === 2)
                            _this.turns(3);
                        else if (_this.count === 3)
                            _this.turns(3);
                        else if (_this.count === 4)
                            _this.turns(4);
                        else if (_this.count === 5)
                            _this.turns(4);
                        else

                            _this.state.start('score', true, false,gameID, _this.microConcepts);
                    });
                });
            }

        });
    },

    starActions: function () {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');

        // //* star Actions changes
        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "AL_MAZE_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Variable and Equation";
        _this.microConcepts = "Algebra";

        _this.count++;
        anim.play();
    },

    winningAction: function () {
        _this.winAnimObj = _this.add.sprite(_this.world.centerX, _this.world.centerY, 'WinAnim');
        _this.winAnimObj.anchor.setTo(0.5);

        //* for last question scale will be 1. For all others it is 0.5 (smaller trophy shown)
        if (_this.count < 5) _this.winAnimObj.scale.setTo(0.5);

        _this.Winanim = _this.winAnimObj.animations.add('WinAnim');
        _this.Winanim.play();
    },

    shutdown: function () {
        _this.stopVoice();
    },

    DemoVideo: function () {
        //* This game is about subtraction of unlike fractions. 
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/AL-MAZE-G6/" + _this.languageSelected + "/AL-MAZE-G6-demo-1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* Observe the given fractions. 
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/AL-MAZE-G6/" + _this.languageSelected + "/AL-MAZE-G6-demo-2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //* Find their equivalent fractions which have the same denominators using Least Common Multiple method.
        _this.demoAudio3 = document.createElement('audio');
        _this.demoAudio3src = document.createElement('source');
        _this.demoAudio3src.setAttribute("src", window.baseUrl + "questionSounds/AL-MAZE-G6/" +
            _this.languageSelected + "/AL-MAZE-G6-demo-3.mp3");
        _this.demoAudio3.appendChild(_this.demoAudio3src);

        //* Convert the given unlike fractions to like fractions and subtract them.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MAZE-G6/" +
            _this.languageSelected + "/AL-MAZE-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Convert the given unlike fractions to like fractions and subtract them.
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MAZE-G6/" +
            _this.languageSelected + "/AL-MAZE-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* enter the equi fractions
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MAZE-G6/" +
            _this.languageSelected + "/AL-MAZE-G6-c.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        //* Drag the remaining fraction cubes to the whole.
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MAZE-G6/" +
            _this.languageSelected + "/AL-MAZE-G6-d.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        //* Enter your answer 
        _this.q5Sound = document.createElement('audio');
        _this.q5Soundsrc = document.createElement('source');
        _this.q5Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-MAZE-G6/" +
            _this.languageSelected + "/AL-MAZE-G6-e.mp3");
        _this.q5Sound.appendChild(_this.q5Soundsrc);

        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            //_this.clickSound.play();
            _this.stopVideo();
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
        if (_this.q4Timer) clearTimeout(_this.q4Timer);
        if (_this.q5Timer) clearTimeout(_this.q5Timer);

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

        //_this.time.events.removeAll(); cannot remove time events...animations wont work if removed
        _this.skip.events.onInputDown.removeAll();
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
        _this.demoVideo_1 = _this.add.video('nsf15_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/AL-MAZE-G6_1.mp4");
        _this.videoWorld = _this.demoVideo_1.addToWorld();

        _this.demoAudio1.addEventListener('ended', _this.dA1);  //* play demo 1
        _this.demoAudio2.addEventListener('ended', _this.dA2);  //* play demo 2
        _this.demoAudio3.addEventListener('ended', _this.dA3);  //* play demo 3


        _this.q2Timer = setTimeout(function ()    //* q1 js timer to play q1 after 18 seconds.
        {
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 36000);

        _this.q3Timer = setTimeout(function ()    //* q1 js timer to play q1 after 18 seconds.
        {
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 51000);

        _this.q4Timer = setTimeout(function ()    //* q2 js timer to play q2 after 18 seconds.
        {
            clearTimeout(_this.q4Timer);         //* clear the time once its used.
            _this.q4Sound.play();
        }, 55000);

        _this.q5Timer = setTimeout(function ()    //* q4 js timer to play q4 after 18 seconds.
        {
            clearTimeout(_this.q5Timer);         //* clear the time once its used.
            _this.q5Sound.play();
        }, 60000);

        _this.demoVideo_1.onComplete.add(function ()   //* on completion of demovideo close the video
        {
            _this.stopAudio();                  //* stop timers and audios
            _this.demoVideo_1.stop(false);      //* stop vide.
            _this.skip.events.onInputDown.removeAll();
            _this.videoWorld.destroy();         //* destroy the video, gets removed from screen.
            _this.skip.destroy();               //* skip button destroyed
            _this.game.paused = false;          //* now, unpause the game, so that it continues.
        });
    }
}