
Game.NSD_5B_G6level1 = function () { };

Game.NSD_5B_G6level1.prototype = {
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

        _this.CashOut = document.createElement('audio');
        _this.CashOutsrc = document.createElement('source');
        _this.CashOutsrc.setAttribute("src", window.baseUrl + "sounds/CashOutNew.mp3");
        _this.CashOut.appendChild(_this.CashOutsrc);

        _this.CoinDrop = document.createElement('audio');
        _this.CoinDropsrc = document.createElement('source');
        _this.CoinDropsrc.setAttribute("src", window.baseUrl + "sounds/CoinDrop.mp3");
        _this.CoinDrop.appendChild(_this.CoinDropsrc);

        _this.colorboxtocounterbox = document.createElement('audio');
        _this.colorboxtocounterboxsrc = document.createElement('source');
        _this.colorboxtocounterboxsrc.setAttribute("src", window.baseUrl + "sounds/color_box_to_counter_box.mp3");
        _this.colorboxtocounterbox.appendChild(_this.colorboxtocounterboxsrc);

        _this.counterCelebration = document.createElement('audio');
        _this.counterCelebrationsrc = document.createElement('source');
        _this.counterCelebrationsrc.setAttribute("src", window.baseUrl + "sounds/counter_celebration.mp3");
        _this.counterCelebration.appendChild(_this.counterCelebrationsrc);

        _this.snapSound = document.createElement('audio');
        _this.snapSoundsrc = document.createElement('source');
        _this.snapSoundsrc.setAttribute("src", window.baseUrl + "sounds/snapSound.mp3");
        _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.frameSound = document.createElement('audio');
        _this.frameSoundsrc = document.createElement('source');
        _this.frameSoundsrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.frameSound.appendChild(_this.frameSoundsrc);

        _this.Success = document.createElement('audio');
        _this.Successsrc = document.createElement('source');
        _this.Successsrc.setAttribute("src", window.baseUrl + "sounds/Success.mp3");
        _this.Success.appendChild(_this.Successsrc);

        _this.VoiceNote1Fn = _this.createAudio("NSD-5B-G6A")
        _this.VoiceNote2Fn = _this.createAudio("NSD-5B-G6B")
        _this.VoiceNote3Fn = _this.createAudio("NSD-5B-G6C")

        telInitializerbbpp.gameIdInit("NSD_5B_G6", gradeSelected);
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

    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-5B-G6/" + _this.languageSelected + "/" + src + ".mp3");
        audio.appendChild(audiosrc);

        return audio;
    },

    gameCreate: function (game) {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        _this.background;
        _this.counterForTimer = 0;
        _this.count1 = 0;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.AnsTimerCount = 0;
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

        _this.panel1;
        _this.panel5;
        _this.four_color_box1;
        _this.four_color_box2;
        _this.four_color_box;
        _this.minus_sign;
        _this.question_box;
        _this.sceneCount1 = 1;
        _this.row = 1;
        _this.row_height = 150;
        _this.scene1_answers_array = [];
        _this.scene3_answers_array = [];
        _this.square_box_Group;
        _this.coin_machine_panel;

        _this.answer_flag = 1;
        _this.after_taking_carry = 0;

        _this.black_text1;
        _this.black_text2
        _this.black_text3;
        _this.black_text4;
        _this.black_text5;
        _this.black_text6;
        _this.black_text7;
        _this.black_text8;


        _this.Coin1_anim;
        _this.Coin2_anim;
        _this.Coin3_anim;

        _this.Question_flag = -1;

        _this.coin2limit_reached = false;
        _this.carry = 0;

        _this.hint_flag = 0;// * hint flag zero
        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.qArrays = new Array();
        _this.qArrays = [0, 1, 2, 3, 4, 5];
        _this.qArrays = this.shuffle(_this.qArrays);
        console.log("shuffled question array: " + _this.qArrays);

        // _this.shake = new Phaser.Plugin.Shake(game);
        // game.plugins.add(_this.shake);

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'BG');

        _this.navBar = _this.add.sprite(0, 0, 'navBar');
        _this.timebg = _this.add.sprite(305, 6, 'timebg');

        _this.tickbtn = _this.add.sprite(800, 405, 'tickbtn');
        _this.tickbtn.frame = 1;
        _this.tickbtn.visible = true;

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

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');
        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;

        _this.speakerbtn.events.onInputDown.add(function () {
            if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
                _this.clickSound.play();
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                if (_this.Question_flag == 1) {
                    _this.VoiceNote1Fn.play();
                }
                else if (_this.Question_flag == 2) {
                    _this.VoiceNote2Fn.play();
                }
                else if (_this.Question_flag == 3) {
                    _this.VoiceNote3Fn.play();
                }
                _this.time.events.add(3000, function () {
                    _this.speakerbtnClicked = false;
                    _this.EnableVoice();
                });
            }
        }, _this);
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';

        _this.Coin1_x = 554;
        _this.Coin1_y_offset = 17;

        //bulb 
        //   _this.hintBtn = _this.add.sprite(670,6,'bulb');
        //   _this.hintBtn.scale.setTo(0.5,0.6);
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

        _this.generateStarsForTheScene(6);

        _this.getQuestion();

    },
    generateStarsForTheScene: function (count) {
        _this.starsGroup = _this.add.group();
        for (let i = 0; i < count; i++) {
            _this.starsGroup.create(_this.world.centerX - 15, 10, 'starAnim');
            for (let j = 0; j < i; j++) {
                if (_this.starsGroup.getChildAt(j)) {
                    _this.starsGroup.getChildAt(j).x -= 15;
                    _this.starsGroup.getChildAt(i).x += 15;
                }
            }
        }

    },

    shuffle: function (array) {
        _this.currentIndex = array.length, _this.temporaryValue, _this.randomIndex;

        // While there remain elements to shuffle...
        while (0 !== _this.currentIndex) {

            // Pick a remaining element...
            _this.randomIndex = Math.floor(Math.random() * _this.currentIndex);
            _this.currentIndex -= 1;

            // And swap it with the current element.
            _this.temporaryValue = array[_this.currentIndex];
            array[_this.currentIndex] = array[_this.randomIndex];
            array[_this.randomIndex] = _this.temporaryValue;
        }

        return array;
    },

    //* function to enable the speaker button once pressed.
    EnableVoice: function () {

        if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
            _this.speakerbtnClicked = false;
        }
    },

    stopVoice: function () {
        // _timer1.stop();
        if (_this.VoiceNote1Fn) {
            _this.VoiceNote1Fn.pause();
            _this.VoiceNote1Fn = null;
        }
        if (_this.VoiceNote2Fn) {
            _this.VoiceNote2Fn.pause();
            _this.VoiceNote2Fn = null;
        }
        if (_this.VoiceNote3Fn) {
            _this.VoiceNote3Fn.pause();
            _this.VoiceNote3Fn = null;
        }

        if (_this.celebrationSound) {
            if (_this.celebrationSound.isPlaying) {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }

        if (_this.amplify != null) {
            _this.amplify.context.close();
            _this.amplify = null;
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

    getQuestion: function () {
        console.log("Getting Question")
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
        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        /************************$$$$$$$$$$**********************/

        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;
        _this.VoiceNote1Fn.play();
        _this.Question_flag = 1;
        _this.Initial_randomizing();

        //Call display scene
        _this.display_scene(_this.sceneCount1);

        //* hintbtn will be true when the game is playing
        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1;
    },

    showfractionbox: function (addvar, yvalue) {
        _this.onebox = true;
        _this.box_flag = 1;
        _this.AnswerBox = _this.square_box_Group.create(addvar, yvalue, 'square_text_box');
        _this.AnswerBox.scale.setTo(1, 1);
        _this.AnswerBox.frame = 1;
    },

    change_row_height: function () {
        if (_this.row == 1) {
            _this.row_height = 150;
        }
        else if (_this.row == 2) {
            _this.row_height = 235;
        }
    },
    display_scene: function (n) {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        _this.qnumber = _this.qArrays[_this.count1]; //count1 is for keeping track of which question is getting selected among the 6 we initially randomized

        if (n == 1) {
            //Add intial panel to screen
            _this.panel5 = _this.add.sprite(25, 58, 'panel5');
            _this.panel5.visible = true;
            _this.panel5.scale.setTo(0.23, 0.24);
            _this.four_color_box1 = _this.add.sprite(170, 75, '4_color_box1');
            _this.four_color_box1.visible = true;

            _this.plus_sign = _this.add.graphics();
            _this.plus_sign.lineStyle(5);
            _this.plus_sign.moveTo(50 + 80, 28 + 188);
            _this.plus_sign.lineTo(50 + 100, 28 + 188);

            _this.question_box = _this.add.sprite(252, 360, 'text_box1');
            _this.question_box.visible = true;

            //Printing Question
            _this.value = 5.28;
            if (parseFloat(_this.questionLeftArray[_this.qnumber]).toString().includes(".")) {
                if (parseFloat(_this.questionLeftArray[_this.qnumber]).toString().split(".")[1].length == 1)
                    _this.left_eqn_text = _this.add.text(300, 370, parseFloat(_this.questionLeftArray[_this.qnumber]));
                else
                    _this.left_eqn_text = _this.add.text(290, 370, parseFloat(_this.questionLeftArray[_this.qnumber]));
            }
            else {
                _this.left_eqn_text = _this.add.text(320, 370, parseFloat(_this.questionLeftArray[_this.qnumber]));
            }

            _this.applyingStyle(_this.left_eqn_text);
            _this.ques_plus_sign = _this.add.text(356, 370, '-');
            _this.applyingStyle(_this.ques_plus_sign);


            _this.right_eqn_text = _this.add.text(386, 370, parseFloat(_this.questionRightArray[_this.qnumber]));
            _this.applyingStyle(_this.right_eqn_text);


            _this.makeTableHeader();

            _this.square_box_Group = _this.add.group();
            _this.showfractionbox(200, _this.row_height);
            _this.part = 1;
            _this.addNumberPad();

        }
        ///////////////////////////////////////////////////////////////////////
        //Scene 2 - with counter on side panel and black text on color box intially
        if (n == 2) {
            _this.ques_plus_sign.destroy();
            _this.panel5.destroy();
            _this.ques_plus_sign = _this.add.text(380, 370, '+');
            _this.applyingStyle(_this.ques_plus_sign);
            _this.numGroup.destroy();

            _this.panel1 = _this.add.sprite(15, 58, 'panel1');

            _this.four_color_box1.destroy();

            _this.four_color_box1 = _this.add.sprite(170, 75, '4_color_box1');
            _this.four_color_box1.visible = true;
            _this.makeTableHeader();

            _this.numGroup.destroy();

            _this.plus_sign.destroy();

            _this.row = 1;
            _this.change_row_height();
            _this.square_box_Group.destroy();

            _this.counterGroup = _this.add.group();

            _this.makeCounter(1);

            _this.black_text1 = _this.add.text(200 + 10, _this.row_height + 5, _this.scene1_answers_array[0]);
            _this.applyingStyle2(_this.black_text1)
            _this.black_text2 = _this.add.text(299 + 10, _this.row_height + 5, _this.scene1_answers_array[1]);
            _this.applyingStyle2(_this.black_text2)
            _this.black_text3 = _this.add.text(390 + 10, _this.row_height + 5, _this.scene1_answers_array[2]);
            _this.applyingStyle2(_this.black_text3)
            _this.black_text4 = _this.add.text(485 + 10, _this.row_height + 5, _this.scene1_answers_array[3]);
            _this.applyingStyle2(_this.black_text4)

            _this.row = 2;
            _this.change_row_height();

            _this.black_text5 = _this.add.text(200 + 10, _this.row_height + 5, _this.scene1_answers_array[4]);
            _this.applyingStyle2(_this.black_text5)
            _this.black_text6 = _this.add.text(299 + 10, _this.row_height + 5, _this.scene1_answers_array[5]);
            _this.applyingStyle2(_this.black_text6)
            _this.black_text7 = _this.add.text(390 + 10, _this.row_height + 5, _this.scene1_answers_array[6]);
            _this.applyingStyle2(_this.black_text7)
            _this.black_text8 = _this.add.text(485 + 10, _this.row_height + 5, _this.scene1_answers_array[7]);
            _this.applyingStyle2(_this.black_text8)

            var counter_width = [767, 0, 817, 867] //0, because, we are not showing '.' which is at 2nd index, whose length doesn't matter. 
            var scale3 = 1.1;

            var tween1 = _this.add.tween(_this.black_text1);
            // var tween2 = _this.add.tween(_this.black_text2);
            var tween3 = _this.add.tween(_this.black_text3);
            var tween4 = _this.add.tween(_this.black_text4);
            var tween5 = _this.add.tween(_this.black_text5);
            // var tween6 = _this.add.tween(_this.black_text6);
            var tween7 = _this.add.tween(_this.black_text7);
            var tween8 = _this.add.tween(_this.black_text8);

            tween1.to({ x: counter_width[0], y: 202 }, 2000, 'Quart', true, 0);
            tween3.to({ x: counter_width[2], y: 202 }, 2000, 'Quart', true, 0);
            tween4.to({ x: counter_width[3], y: 202 }, 2000, 'Quart', true, 0);

            _this.colorboxtocounterbox.play();

            for (i = 0; i < 4; i++) {
                if (i != 1) {
                    const element = _this.scene1_answers_array[i];
                    _this.counter_top_texts = _this.add.text(counter_width[i], 35, element);
                    _this.counter_top_texts.scale.setTo(scale3, scale3);
                    _this.counter_box.addChild(_this.counter_top_texts);

                }
            }

            tween4.onComplete.add(function () {
                tween5.to({ x: counter_width[0], y: 247 }, 2000, 'Quart', true, 0);
                tween7.to({ x: counter_width[2], y: 247 }, 2000, 'Quart', true, 0);
                tween8.to({ x: counter_width[3], y: 247 }, 2000, 'Quart', true, 0);

                _this.colorboxtocounterbox.play();


                for (; i < 8; i++) {
                    if (i != 5) {
                        const element = _this.scene1_answers_array[i];
                        _this.counter_bottom_texts = _this.add.text(counter_width[i % 4], 80, element);
                        _this.counter_bottom_texts.scale.setTo(scale3, scale3);
                        _this.counter_box.addChild(_this.counter_bottom_texts);
                    }
                }
            })

            tween8.onComplete.add(function () {
                _this.sceneCount1 = 3; //Calling for scene 3 - with coing machine
                _this.frameSound.play()
                _this.display_scene(_this.sceneCount1);
            })

        }
        // Scene 3: scene with Coin machine
        if (n == 3) {
            if (_this.count1 == 0) {
                _this.time.events.add(500, () => {
                    _this.VoiceNote2Fn.play();
                })
                _this.Question_flag = -1;
                _this.time.events.add(2000, function () {
                    _this.Question_flag = 2;
                })
            }
            else
                _this.Question_flag = 2;


            _this.black_text2.destroy();
            _this.black_text6.destroy();
            _this.four_color_box1.destroy();

            //Loading coin machine:
            _this.coin_machine_panel = _this.add.image(16, 58, 'coin_machine_panel');
            _this.coin_machine_panel.scale.setTo(0.99, 0.98)

            _this.makeCounter(3);  //To show frame = 2 of the counter box image (Text box 5.png)
            _this.drag_remaining = 0;
            //Placing assets on screen
            _this.make_coin_machine_top();
            _this.fill_with_coins_question();

        }

        if (n == 4) { //similar to n == 2.

            if (_this.count1 == 0) {
                _this.Question_flag = -1;
                _this.VoiceNote3Fn.play();
                _this.time.events.add(2000, function () {
                    _this.Question_flag = 3;
                })
            }
            else
                _this.Question_flag = 3;


            _this.coin_machine_panel.destroy();
            _this.green_coin_group.destroy();
            _this.Orange_coin_group.destroy();
            _this.yellow_coin_group.destroy()
            _this.yellowLevel.destroy();
            _this.greenLevel.destroy()

            _this.numGroup.destroy();

            _this.four_color_box2 = _this.add.sprite(170, 75, '4_color_box2');

            _this.plus_sign = _this.add.graphics();
            _this.plus_sign.lineStyle(5);
            _this.plus_sign.moveTo(50 + 80, 28 + 188);
            _this.plus_sign.lineTo(50 + 100, 28 + 188);

            _this.equal_sign = _this.add.text(125, 320, '=');
            _this.equal_sign.scale.setTo(1.5, 1.5);
            _this.applyingStyle2(_this.equal_sign)
            _this.equal_sign.visible = true;

            _this.makeTableHeader();


            _this.row = 1;
            _this.change_row_height();


            _this.black_text_new1 = _this.add.text(200 + 10, _this.row_height + 5, _this.scene1_answers_array[0]);
            _this.applyingStyle2(_this.black_text_new1)

            _this.black_text_new2 = _this.add.text(299 + 10, _this.row_height + 5, _this.scene1_answers_array[1]);
            _this.applyingStyle2(_this.black_text_new2)

            _this.black_text_new3 = _this.add.text(390 + 10, _this.row_height + 5, _this.scene1_answers_array[2]);
            _this.applyingStyle2(_this.black_text_new3)

            _this.black_text_new4 = _this.add.text(485 + 10, _this.row_height + 5, _this.scene1_answers_array[3]);
            _this.applyingStyle2(_this.black_text_new4)


            _this.row = 2;
            _this.change_row_height();

            _this.black_text_new5 = _this.add.text(200 + 10, _this.row_height + 5, _this.scene1_answers_array[4]);
            _this.applyingStyle2(_this.black_text_new5)

            _this.black_text_new6 = _this.add.text(299 + 10, _this.row_height + 5, _this.scene1_answers_array[5]);
            _this.applyingStyle2(_this.black_text_new6)

            _this.black_text_new7 = _this.add.text(390 + 10, _this.row_height + 5, _this.scene1_answers_array[6]);
            _this.applyingStyle2(_this.black_text_new7)

            _this.black_text_new8 = _this.add.text(485 + 10, _this.row_height + 5, _this.scene1_answers_array[7]);
            _this.applyingStyle2(_this.black_text_new8)


            _this.black_text_counter_1 = _this.add.text(855 + 12, 315 + 5, _this.scene3_answers_array[0]);
            _this.applyingStyle2(_this.black_text_counter_1)

            _this.black_text_counter_2 = _this.add.text(804 + 12, 315 + 5, _this.scene3_answers_array[1]);
            _this.applyingStyle2(_this.black_text_counter_2)

            _this.black_text_counter_3 = _this.add.text(754 + 12, 315 + 5, _this.scene3_answers_array[2]);
            _this.applyingStyle2(_this.black_text_counter_3)


            _this.square_box_Group3 = _this.add.group();

            _this.row_height = 320;

            _this.showfractionbox_3(200, _this.row_height);

            _this.addNumberPad();

        }
    },

    make_coin_machine_top: function () {
        let scale = 1;
        let money_box_height = 15;
        _this.moneyBox1 = _this.add.image(500, money_box_height, 'orange_money_box');
        _this.moneyBox1.scale.setTo(scale, scale);
        _this.moneyBox1.frame = 0;
        _this.moneyBox1.name = "moneyBox1";
        _this.coin_machine_panel.addChild(_this.moneyBox1);

        // _this.add.tween(_this.moneyBox1).to({alpha:0.6},200,'Linear',true,0,-1,true)

        _this.moneyBox2 = _this.add.image(235 + 40, money_box_height, 'green_money_box');
        _this.moneyBox2.scale.setTo(scale, scale);
        _this.moneyBox2.name = "moneyBox2";

        _this.coin_machine_panel.addChild(_this.moneyBox2);

        _this.moneyBox3 = _this.add.image(30 + 40, money_box_height, 'yellow_money_box');
        _this.moneyBox3.scale.setTo(scale, scale);
        _this.moneyBox3.name = "moneyBox3";
        _this.coin_machine_panel.addChild(_this.moneyBox3);


        _this.yellowLevel = _this.add.sprite(105, 150, 'coinExhange')
        _this.yellowLevel.frame = 3;

        _this.greenLevel = _this.add.sprite(310, 150, 'coinExhange')
        _this.greenLevel.frame = 1;

        //Printing place values (headers) of the levers.
        let scale1 = 0.5;
        _this.moneyBox1_header = _this.add.text(9, 10, '1/100');
        _this.moneyBox1_header.scale.setTo(scale1, scale1);
        _this.moneyBox1_header.fill = '#ffffff';
        _this.moneyBox1.addChild(_this.moneyBox1_header);

        _this.moneyBox2_header = _this.add.text(10, 10, '1/10');
        _this.moneyBox2_header.scale.setTo(scale1, scale1);
        _this.moneyBox2_header.fill = '#ffffff';
        _this.moneyBox2.addChild(_this.moneyBox2_header);

        _this.moneyBox3_header = _this.add.text(22, 10, '1');
        _this.moneyBox3_header.scale.setTo(scale1, scale1);
        _this.moneyBox3_header.fill = '#ffffff';
        _this.moneyBox3.addChild(_this.moneyBox3_header);


        //Starting with number on lever to be 0 (frame 0 of numberVSmall)
        _this.moneyBox1Number = _this.add.sprite(9, 23, 'numberVSmall');
        _this.moneyBox1Number.frame = 0;
        _this.moneyBox1.addChild(_this.moneyBox1Number);

        _this.moneyBox2Number = _this.add.sprite(9, 23, 'numberVSmall');//304,83
        _this.moneyBox2Number.frame = 0;
        _this.moneyBox2.addChild(_this.moneyBox2Number);

        _this.moneyBox3Number = _this.add.sprite(9, 23, 'numberVSmall');
        _this.moneyBox3Number.frame = 0;
        _this.moneyBox3.addChild(_this.moneyBox3Number);

        _this.moneyBox1.inputEnabled = false;
        _this.moneyBox2.inputEnabled = false;
        _this.moneyBox3.inputEnabled = false;
    },

    //Fills up coin machine panel with the initial coins using the top row from the counter box

    fill_with_coins_question: function () {
        _this.Orange_coin_group = _this.add.group();
        _this.green_coin_group = _this.add.group();
        _this.yellow_coin_group = _this.add.group();
        _this.frame_coin1_index = Number(_this.scene1_answers_array[3]) + 0;
        //creating a pile of orange coins according to question'

        for (let i = 0; i < _this.frame_coin1_index; i++) {
            _this.Orange_1_coin = _this.add.sprite(554 - 23 - 10, 390 - (i * _this.Coin1_y_offset), 'coin_3');
            _this.Orange_1_coin.scale.setTo(1.2, 1)
            _this.Orange_coin_group.addChild(_this.Orange_1_coin);
            _this.Orange_1_coin.name = "moneyBox1"
            _this.Orange_1_coin.Xp = _this.Orange_1_coin.x;
            _this.Orange_1_coin.Yp = _this.Orange_1_coin.y;
        }

        for (let i = 0; i < Number(_this.scene1_answers_array[2]); i++) {
            _this.Orange_1_coin = _this.add.sprite(328 - 5 - 8, 390 - (i * _this.Coin1_y_offset), 'coin_2');
            _this.Orange_1_coin.scale.setTo(1.2, 1)
            _this.green_coin_group.addChild(_this.Orange_1_coin);
            _this.Orange_1_coin.name = "moneyBox2"
            _this.Orange_1_coin.Xp = _this.Orange_1_coin.x;
            _this.Orange_1_coin.Yp = _this.Orange_1_coin.y;

        }
        for (let i = 0; i < Number(_this.scene1_answers_array[0]); i++) {
            _this.Orange_1_coin = _this.add.sprite(98 + 20 - 8, 390 - (i * _this.Coin1_y_offset), 'coin_1');
            _this.Orange_1_coin.scale.setTo(1.2, 1)
            _this.Orange_1_coin.name = "moneyBox3"
            _this.Orange_1_coin.Xp = _this.Orange_1_coin.x;
            _this.Orange_1_coin.Yp = _this.Orange_1_coin.y;
            _this.yellow_coin_group.addChild(_this.Orange_1_coin);
        }

        _this.allowMoneyBoxDrag()
    },
    allowMoneyBoxDrag: function () {

        if (_this.scene1_answers_array[7] > 0 && _this.scene1_answers_array[3] > 0) {
            _this.Mtween1 = _this.add.tween(_this.moneyBox1).to({ alpha: 0.6 }, 200, 'Linear', true, 0, -1, true)

            _this.Orange_coin_group.children.forEach(element => {
                element.inputEnabled = true;
                element.input.enableDrag(true);
                element.events.onDragStart.add(_this.DragStart, _this)
                element.events.onDragStop.add(_this.DragStop, _this)
                element.events.onDragUpdate.add(_this.DragUpdate, _this)
            });
        }

        else if (_this.scene1_answers_array[7] > _this.scene1_answers_array[3] && _this.scene1_answers_array[3] == 0 && _this.scene1_answers_array[2] == 0) {
            // Highlight yellow level to show carry
            _this.Highlight_for_carry('moneyBox3')

        }

        else if (_this.scene1_answers_array[7] > _this.scene1_answers_array[3]) {
            _this.Highlight_for_carry('moneyBox2')

        }

        else if (_this.scene1_answers_array[6] > 0 && _this.scene1_answers_array[2] > 0) {
            _this.Mtween2 = _this.add.tween(_this.moneyBox2).to({ alpha: 0.6 }, 200, 'Linear', true, 0, -1, true)

            _this.green_coin_group.children.forEach((element) => {
                element.inputEnabled = true;
                element.input.enableDrag(true);
                element.events.onDragStart.add(_this.DragStart, _this)
                element.events.onDragStop.add(_this.DragStop, _this)
                element.events.onDragUpdate.add(_this.DragUpdate, _this)

            });
        }

        else if (_this.scene1_answers_array[6] > _this.scene1_answers_array[2]) {
            // show yellow level twinkiling 
            _this.Highlight_for_carry('moneyBox3')
        }

        else if (_this.scene1_answers_array[4] > 0) {
            _this.Mtween3 = _this.add.tween(_this.moneyBox3).to({ alpha: 0.6 }, 200, 'Linear', true, 0, -1, true)

            _this.yellow_coin_group.children.forEach((element) => {
                element.inputEnabled = true;
                element.input.enableDrag(true);
                element.events.onDragStart.add(_this.DragStart, _this)
                element.events.onDragStop.add(_this.DragStop, _this)
                element.events.onDragUpdate.add(_this.DragUpdate, _this)
            });
        }

    },

    moneyBox2DropAnim: function (target) {

        _this.frame_coin3_index = 0;
        _this.loopC = 1;
        _this.loope = _this.time.create(false);
        _this.loope.start();
        _this.tempgrp = _this.add.group()
        _this.green_coin_group = _this.add.group();

        _this.loope.loop(400, function () {

            _this.Orange_1_coin = _this.add.sprite(323 - 8, 220, 'coin_2');
            _this.Orange_1_coin.scale.setTo(1.2, 1)
            _this.Orange_1_coin.alpha = 0.8

            _this.green_coin_group.addChild(_this.Orange_1_coin);
            _this.Orange_1_coin.name = "moneyBox2"
            _this.Orange_1_coin.Xp = _this.Orange_1_coin.x;
            _this.Orange_1_coin.Yp = _this.Orange_1_coin.y;

            _this.tweengrp = _this.add.tween(_this.Orange_1_coin);
            _this.tweengrp.to({ alpha: 1, x: 323 - 8, y: 405 - (_this.loopC * _this.Coin1_y_offset) }, 390 - (_this.loopC * _this.Coin1_y_offset), 'Linear', true, 0);
            _this.CashOut.pause()
            _this.CashOut.currentTime = 0;

            _this.tweengrp.onComplete.add(() => {
                if (_this.loopC <= 9) {
                    _this.CoinDrop.pause();
                    _this.CoinDrop.currentTime = 0;
                    _this.CoinDrop.play();
                }
            })


            if (_this.loopC < 10) {
                _this.loopC++;

            }
            else {
                _this.loope.stop()

                if (_this.moneyBox1Number.frame < _this.scene1_answers_array[7]) {
                    // activate green level
                    _this.Highlight_for_carry('moneyBox2')
                }
                else {
                    _this.green_coin_group.children.forEach(element => {
                        element.inputEnabled = true;
                        element.input.enableDrag(true);
                        element.events.onDragStart.add(_this.DragStart, _this)
                        element.events.onDragStop.add(_this.DragStop, _this)
                        element.events.onDragUpdate.add(_this.DragUpdate, _this)
                    });
                    _this.Mtween2 = _this.add.tween(_this.moneyBox2).to({ alpha: 0.6 }, 200, 'Linear', true, 0, -1, true)

                }
            }
        }, _this)


    },
    moneyBox3DropAnim: function (target) {

        _this.tempgrp = _this.add.group()
        _this.frame_coin3_index = 0;
        _this.loopC = 0;
        _this.loope = _this.time.create(false);
        _this.loope.start();
        _this.Orange_coin_group = _this.add.group();


        _this.loope.loop(400, function () {

            _this.Orange_1_coin = _this.add.sprite(554 - 23 - 10, 200, 'coin_3');
            _this.Orange_1_coin.scale.setTo(1.2, 1)
            _this.Orange_1_coin.alpha = 0.8
            _this.Orange_coin_group.addChild(_this.Orange_1_coin);
            _this.Orange_1_coin.name = "moneyBox1"
            _this.Orange_1_coin.Xp = _this.Orange_1_coin.x;
            _this.Orange_1_coin.Yp = _this.Orange_1_coin.y;

            _this.tweengrp = _this.add.tween(_this.Orange_1_coin);
            _this.tweengrp.to({ alpha: 1, x: 554 - 23 - 10, y: 390 - (_this.loopC * _this.Coin1_y_offset) }, 390 - (_this.loopC * _this.Coin1_y_offset), 'Linear', true, 0);
            _this.CashOut.pause()
            _this.CashOut.currentTime = 0;


            _this.tweengrp.onComplete.add(() => {
                if (_this.loopC <= 9) {
                    _this.CoinDrop.pause();
                    _this.CoinDrop.currentTime = 0;
                    _this.CoinDrop.play();
                }
            })

            if (_this.loopC < 9) {
                _this.loopC++;
            }
            else {
                _this.loope.stop()
                _this.Mtween1 = _this.add.tween(_this.moneyBox1).to({ alpha: 0.6 }, 200, 'Linear', true, 0, -1, true)
                _this.Orange_coin_group.children.forEach(element => {
                    element.inputEnabled = true;
                    element.input.enableDrag(true);
                    element.events.onDragStart.add(_this.DragStart, _this)
                    element.events.onDragStop.add(_this.DragStop, _this)
                    element.events.onDragUpdate.add(_this.DragUpdate, _this)

                });

            }
        }, _this)

    },
    //prints square boxes for the counter box
    showfractionbox_2: function (xvalue, yvalue) {
        _this.onebox = true;
        _this.box_flag = 1;
        _this.AnswerBox = _this.square_box_Group2.create(xvalue, yvalue, 'square_text_box');
        _this.AnswerBox.scale.setTo(0.92, 0.95);
        _this.AnswerBox.frame = 1;
    },

    showfractionbox_3: function (xvalue, yvalue) {
        _this.onebox = true;
        _this.box_flag = 1;
        _this.AnswerBox = _this.square_box_Group3.create(xvalue, yvalue, 'square_text_box');
        _this.AnswerBox.scale.setTo(1, 1);
        _this.AnswerBox.frame = 1;
    },

    print_inputBox_counter: function () {
        _this.numGroup.destroy();
        _this.square_box_Group2 = _this.add.group();

        this.counter_flag = 1;
        _this.showfractionbox_2(855, 315);

        var num1 = Number(_this.questionLeftArray[_this.qArrays[_this.count1]]);
        var num2 = Number(_this.questionRightArray[_this.qArrays[_this.count1]]);
        var ans = Math.round((num1 - num2) * 100);

        _this.correct_counter_sum1 = ans % 10;
        _this.correct_counter_sum2 = Math.floor(ans / 10) % 10;
        _this.correct_counter_sum3 = Math.floor(ans / 100);


        _this.addNumberPad();
    },

    erase_row1_Text: function () {
        console.log("Erasing first num")
        _this.black_text1.destroy();
        _this.black_text3.destroy();
        _this.black_text4.destroy();
    },

    erase_row2_Text: function () {
        console.log("Erasing first num")
        _this.black_text5.destroy();
        _this.black_text7.destroy();
        _this.black_text8.destroy();
    },

    makeTableHeader: function () {
        var scale1 = 0.8;
        var scale2 = 0.7;

        if (_this.sceneCount1 == 2 || _this.sceneCount1 == 1) {
            _this.four_color_box = _this.four_color_box1;
        }
        else {
            _this.four_color_box = _this.four_color_box2;
        }

        _this.first_header_one = _this.add.text(42, 13, '1');
        _this.first_header_one.scale.setTo(scale1);
        _this.four_color_box.addChild(_this.first_header_one);
        _this.applyingStyle2(_this.first_header_one);


        _this.second_header_dot = _this.add.text(140, 13, '.');
        _this.second_header_dot.scale.setTo(scale1)
        _this.four_color_box.addChild(_this.second_header_dot);
        _this.applyingStyle2(_this.second_header_dot);


        _this.third_header_nr = _this.add.text(140 + 93, 2, '1'); //Numerator for third header
        _this.four_color_box.addChild(_this.third_header_nr);
        _this.third_header_nr.scale.setTo(scale2);
        _this.applyingStyle2(_this.third_header_nr);

        _this.third_header_line = _this.add.graphics();
        _this.third_header_line.lineStyle(2);
        _this.third_header_line.moveTo(140 + 80, 28); //line drawn in third header starts from here.
        _this.third_header_line.lineTo(140 + 120, 28); //line drawn is ended here.
        _this.four_color_box.addChild(_this.third_header_line);
        _this.third_header_dr = _this.add.text(140 + 87, 32, '10');
        _this.four_color_box.addChild(_this.third_header_dr);
        _this.third_header_dr.scale.setTo(scale2);
        _this.applyingStyle2(_this.third_header_dr);


        _this.fourth_header_nr = _this.add.text(140 + 93 + 93, 2, '1'); //Numerator for third header
        _this.four_color_box.addChild(_this.fourth_header_nr);
        _this.fourth_header_nr.scale.setTo(scale2)
        _this.applyingStyle2(_this.fourth_header_nr);


        _this.fourth_header_line = _this.add.graphics();
        _this.fourth_header_line.lineStyle(2);
        _this.fourth_header_line.moveTo(313, 28); //line drawn in third header starts from here. 
        _this.fourth_header_line.lineTo(355, 28); //line drawn is ended here.
        _this.four_color_box.addChild(_this.fourth_header_line);
        // _this.fourth_header_dr = _this.add.text(140 + 87 + 89, 32, '100');

        _this.fourth_header_dr = _this.add.text(140 + 87 + 89, 32, '100');
        _this.four_color_box.addChild(_this.fourth_header_dr);
        _this.fourth_header_dr.scale.setTo(scale2);
        _this.applyingStyle2(_this.fourth_header_dr);


    },

    makeCounter: function (n) {
        _this.counter_box = _this.counterGroup.create(745, 167, 'counter_box');
        _this.counter_box.frame = n - 1;
        _this.makeCounterHeader();
        _this.minus_sign_counter = _this.add.text(-25, 80, '-');
        _this.counter_box.addChild(_this.minus_sign_counter);
    },
    makeCounterHeader: function () {
        var scale1 = 0.5;
        _this.first_counter_header = _this.add.text(22, 5, '1');
        _this.first_counter_header.scale.setTo(scale1, scale1);
        _this.first_counter_header.fill = '#ffffff';
        _this.counter_box.addChild(_this.first_counter_header);

        _this.second_counter_header = _this.add.text(65, 5, '1/10');
        _this.second_counter_header.scale.setTo(scale1, scale1);
        _this.second_counter_header.fill = '#ffffff';
        _this.counter_box.addChild(_this.second_counter_header);

        _this.third_counter_header = _this.add.text(112, 5, '1/100');
        _this.third_counter_header.scale.setTo(scale1, scale1);
        _this.third_counter_header.fill = '#ffffff';
        _this.counter_box.addChild(_this.third_counter_header);
    },

    addNumberPad: function () {
        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 512, 'numpadbg');
        bottomnumpadbg.scale.setTo(1, 1);
        _this.x = 40;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;

        for (var i = 0; i < 11; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 548, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.name = i + 1;
            _this.numbg.frame = i;
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked, _this);
            _this.x += 73;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 548, 'Numberpad');
        _this.wrongbtn.frame = 11;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 548, 'Numberpad');
        _this.rightbtn.frame = 12;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.carry = 0;
        if (_this.sceneCount1 == 1)
            _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this);
        else if (_this.sceneCount1 == 3)
            _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked_2, _this);
        else if (_this.sceneCount1 == 4)
            _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked_3, _this);


        _this.enterTxt = _this.add.text(8, 8, "");
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fontSize = "30px";
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.fill = '#65B4C3';
        _this.numpadTween = _this.add.tween(_this.numGroup);

        //tween in the number pad after a second.
        //_this.time.events.add(100, _this.tweenNumPad);
        _this.tweenNumPad();

    },

    rightbtnClicked_2: function () {
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;
        let user_sum = _this.AnswerBox.name;
        if (_this.counter_flag == 1) {

            x = 804;
            y = 315;

            if (user_sum === _this.correct_counter_sum1) {
                _this.scene3_answers_array.push(String(_this.AnswerBox.name)); //Pushing in an array to later show these answers in scene 2, in black.
                _this.celebrate();
                _this.counter_flag++;
                _this.showfractionbox_2(x, y);
                _this.rightbtn.inputEnabled = true;
            }
            else {
                _this.wrongSelected();
            }

        }
        else if (_this.counter_flag == 2) {

            x = 754;
            y = 315;

            if (user_sum === _this.correct_counter_sum2) {
                _this.scene3_answers_array.push(String(_this.AnswerBox.name)); //Pushing in an array to later show these answers in scene 2, in black.
                _this.celebrate();
                _this.counter_flag++;
                _this.showfractionbox_2(x, y);
                _this.rightbtn.inputEnabled = true;
            }
            else {
                _this.wrongSelected();
            }
        }
        else {
            if (user_sum === _this.correct_counter_sum3) {
                _this.scene3_answers_array.push(String(_this.AnswerBox.name)); //Pushing in an array to later show these answers in scene 2, in black.
                _this.celebrate();
                _this.square_box_Group2.destroy();
                _this.sceneCount1 = 4; //Answer given in left most or the 3rd box on counter is correct then move on to next scene (4)
                _this.display_scene(_this.sceneCount1);
            }
            else {
                _this.wrongSelected();
            }
        }

    },

    rightbtnClicked_3: function () {
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        if (_this.answer_flag == 1) {
            x = 293;
            var correct_sum = Number(_this.scene3_answers_array[2]);
        }
        else if (_this.answer_flag == 2) {
            x = 390;
            var correct_sum = 11;
        }
        else if (_this.answer_flag == 3) {
            x = 485;
            var correct_sum = Number(_this.scene3_answers_array[1]);
        }
        else if (_this.answer_flag == 4) {
            var correct_sum = Number(_this.scene3_answers_array[0]);
        }


        if (_this.AnswerBox.name === correct_sum && _this.answer_flag != 4) {
            _this.celebrate();
            _this.answer_flag++;
            _this.showfractionbox_3(x, _this.row_height);
            _this.rightbtn.inputEnabled = true;
        }
        else if (_this.AnswerBox.name === correct_sum && _this.answer_flag == 4) {
            _this.noofAttempts++;
          
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.celebration();
            _this.numGroup.destroy();
            _this.numpad = 0;
            _this.time.events.add(2000, function () {
                _this.eraseScreen();
                _this.nextquestion();
            });
        }
        else {
            _this.noofAttempts++;
            _this.wrongSelected();
        }

    },

    celebrate: function () {
        _this.counterCelebration.pause();
        _this.counterCelebration.currentTime = 0;
        _this.counterCelebration.play();
        _this.AnswerBox.name = '';
        _this.AnswerBox = null;
        _this.enterTxt = ''
    },

    rightbtnClicked: function () {
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;
        var correct_left_array = this.num_to_numArray(_this.questionLeftArray[_this.qnumber]);
        var correct_right_array = this.num_to_numArray(_this.questionRightArray[_this.qnumber]);

        if (_this.row == 1) {
            if (_this.part == 1) {
                var correctans = correct_left_array[0];
                if (_this.AnswerBox.name === correctans) {
                    _this.part = 2;
                    _this.scene1_answers_array.push(String(_this.AnswerBox.name)); //Pushing in an array to later show these answers in scene 2, in black.
                    _this.celebrate();
                    _this.showfractionbox(293, _this.row_height);
                    _this.rightbtn.inputEnabled = true;

                }
                else {
                    _this.wrongSelected();
                }
            }
            else if (_this.part == 2) {
                var correctans = 11;
                if (_this.AnswerBox.name === correctans) {
                    _this.part = 3;
                    _this.AnswerBox.frame = 0;
                    _this.scene1_answers_array.push(String('.'));
                    _this.celebrate();
                    _this.showfractionbox(390, _this.row_height);
                    _this.rightbtn.inputEnabled = true;
                }
                else {
                    _this.wrongSelected();
                }
            }
            else if (_this.part == 3) {
                var correctans = correct_left_array[1];
                if (_this.AnswerBox.name === correctans) {
                    _this.part = 4;
                    _this.AnswerBox.frame = 0;
                    _this.scene1_answers_array.push(String(_this.AnswerBox.name));
                    _this.celebrate();
                    _this.showfractionbox(485, _this.row_height);
                    _this.rightbtn.inputEnabled = true;
                }
                else {
                    _this.wrongSelected();
                }
            }
            else if (_this.part == 4) {
                var correctans = correct_left_array[2];
                if (_this.AnswerBox.name === correctans) {
                    _this.part = 1;
                    _this.AnswerBox.frame = 0;
                    _this.scene1_answers_array.push(String(_this.AnswerBox.name));
                    _this.celebrate();
                    _this.row = 2; //Go to next row
                    this.change_row_height();
                    _this.showfractionbox(200, _this.row_height);
                    _this.rightbtn.inputEnabled = true;
                }
                else {
                    _this.wrongSelected();
                }
            }
        }
        else if (_this.row == 2) {
            if (_this.part == 1) {
                var correctans = correct_right_array[0];
                if (_this.AnswerBox.name === correctans) {
                    _this.part = 2;
                    _this.AnswerBox.frame = 0;
                    _this.scene1_answers_array.push(String(_this.AnswerBox.name));
                    _this.celebrate();
                    _this.showfractionbox(293, _this.row_height);
                    _this.rightbtn.inputEnabled = true;

                }
                else {
                    _this.wrongSelected();
                }
            }
            else if (_this.part == 2) {
                var correctans = 11;
                if (_this.AnswerBox.name === correctans) {
                    _this.part = 3;
                    _this.AnswerBox.frame = 0;
                    _this.scene1_answers_array.push('.');
                    _this.celebrate();
                    _this.showfractionbox(390, _this.row_height);
                    _this.rightbtn.inputEnabled = true;
                }
                else {
                    _this.wrongSelected();
                }
            }
            else if (_this.part == 3) {
                var correctans = correct_right_array[1];
                if (_this.AnswerBox.name === correctans) {
                    _this.part = 4;
                    _this.AnswerBox.frame = 0;
                    _this.scene1_answers_array.push(String(_this.AnswerBox.name));
                    _this.celebrate();
                    _this.showfractionbox(485, _this.row_height);
                    _this.rightbtn.inputEnabled = true;
                }
                else {
                    _this.wrongSelected();
                }
            }

            //This part if validated, send to counter screen, i.e. scene = 2
            else if (_this.part == 4) {
                var correctans = correct_right_array[2];
                if (_this.AnswerBox.name === correctans) {
                    _this.AnswerBox.frame = 0;
                    _this.scene1_answers_array.push(String(_this.AnswerBox.name));
                    _this.celebrate();
                    _this.rightbtn.inputEnabled = true;
                    _this.sceneCount1++;
                    this.display_scene(_this.sceneCount1);
                }
                else {
                    _this.wrongSelected();
                }
            }
        }
    },

    wrongSelected: function () {
        _this.wrongSound.play();
        _this.wrongbtnClicked();
        _this.rightbtn.inputEnabled = true;
    },

    numClicked: function (target) {

        _this.clickSound.play();
        showntxt = target.name;
        if (target.name == 11) {
            showntxt = '.';
        }

        if (target.name == 10) {
            showntxt = 0;
            target.name = 0;
        }

        if (_this.AnswerBox.name == '') {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.enterTxt.visible = false;

            _this.enterTxt = _this.add.text((target.name == 11 ? 18 : 14), 5, "" + showntxt, { fontSize: '30px' }); //WHen showing decimal ('.'), we need it in the center by giving x = 18.

            _this.applyingStyle(_this.enterTxt);
            _this.AnswerBox.addChild(_this.enterTxt);

            _this.AnswerBox.name = Number("" + target.name);

            _this.enterTxt.visible = true;
        }

    },
    applyingStyle: function (target) {

        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
    },
    applyingStyle2: function (target) {

        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fontWeight = 'normal';
        target.visible = true;
    },


    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.AnswerBox.frame = 1;
        _this.selectedAns1 = '';
        _this.AnswerBox.name = '';
    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);
    },

    Initial_randomizing: function () {
        _this.questionTypeArray = [1, 2, 3];
        _this.count_without_carry = 0;
        _this.count_with_carry = 0;
        _this.questionLeftArray = [];
        _this.questionRightArray = [];
        _this.i = 0;
        _this.iscarry = [1, 1, 1, 0, 0]
        _this.iscarry = _this.shuffle(_this.iscarry)

        //Generating 2 Questions of Type 1 : with 0 at 1/100th place
        for (_this.i = 1; _this.i <= 2; _this.i++) {
            // _this.qflag = 1;
            _this.num1 = (Math.random() * (9.99 - 0.02) + 0.02).toFixed(2);
            _this.num2 = (Math.random() * (9.98 - 0.01) + 0.01).toFixed(2);

            while (_this.num1.substr(2) == '00' || _this.num2.substr(2) == '00') {
                _this.num1 = (Math.random() * (9.99 - 0.02) + 0.02).toFixed(2);
                _this.num2 = (Math.random() * (9.98 - 0.01) + 0.01).toFixed(2);
            }
            if (_this.num1 < _this.num2) {
                let temp = _this.num1;
                _this.num1 = _this.num2;
                _this.num2 = temp;
            }

            // Making 2nd number 0 at end
            _this.num2 = Number.parseFloat(Number.parseFloat(_this.num2).toFixed(1)).toFixed(2);

            if (_this.iscarry[_this.i - 1] == 0)
                _this.Convert_to_without_carry(_this.num1, _this.num2);
            else
                _this.Convert_to_with_carry(_this.num1, _this.num2);

            if (_this.i == 1) {
                _this.questionLeftArray.push(_this.num1);
                _this.questionRightArray.push(_this.num2);
            }
            else {
                _this.questionLeftArray.push(_this.num1);
                _this.questionRightArray.push(_this.num2);
            }
        }
        ///////////////////////////////////////////////////////////////////////////////


        //Generating 3 Questions of Type 2: with 2 decimal points, normal
        //With carry
        for (_this.i = 3; _this.i <= 5; _this.i++) {
            // _this.qflag = 2;
            _this.num1 = (Math.random() * (9.99 - 0.02) + 0.02).toFixed(2);
            _this.num2 = (Math.random() * (8.99 - 0.01 + 1) + 0.01).toFixed(2);
            while (_this.num1.substr(2) == '00' || _this.num2.substr(2) == '00') {
                _this.num1 = (Math.random() * (9.99 - 0.02) + 0.02).toFixed(2);
                _this.num2 = (Math.random() * (9.98 - 0.01) + 0.01).toFixed(2);
            }
            if (_this.num1 < _this.num2) {
                let temp = _this.num1;
                _this.num1 = _this.num2;
                _this.num2 = temp;
            }

            if (_this.iscarry[_this.i - 1] == 0)
                _this.Convert_to_without_carry(_this.num1, _this.num2);
            else
                _this.Convert_to_with_carry(_this.num1, _this.num2);


            _this.questionLeftArray.push(_this.num1);
            _this.questionRightArray.push(_this.num2);
        }
        ///////////////////////////////////////////////////////////////////////////////

        //Generating 1 Question with while number and a decimal with carry over
        _this.num2 = (Math.random() * (8.99 - 0.01) + 0.01).toFixed(2);

        _this.firstDigit = Number(_this.num2).toFixed(0);

        _this.firstDigit = Number(_this.firstDigit)

        if (_this.firstDigit > Number(_this.num2)) { //first digit is rounded up, else: rounded down, so do nothing
            _this.firstDigit -= 1;
        }


        _this.num1 = (Math.random() * (7 - _this.firstDigit + 1) + _this.firstDigit + 1).toFixed(0); //_this.num1 should be larger so lower limit is first digit of num2

        if (Number(_this.num1) < Number(_this.num2)) {
            let temp = _this.num1;
            _this.num1 = _this.num2;
            _this.num2 = temp;
        }


        _this.questionLeftArray.push(_this.num1);
        _this.questionRightArray.push(_this.num2);
        ///////////////////////////////////////////////////////////////////////////////

        console.log("Left Array: " + _this.questionLeftArray);
        console.log("Right Array: " + _this.questionRightArray);
    },

    Convert_to_without_carry: function (n1, n2) {

        if (_this.count_without_carry < 2) {
            _this.count_without_carry++;

            arrNum1 = this.num_to_numArray(n1);
            arrNum2 = this.num_to_numArray(n2);

            if (arrNum1[2] <= arrNum2[2]) {
                if (arrNum2[2] == 9) {
                    arrNum2[2]--;
                }
                for (let add = 0; arrNum1[2] <= arrNum2[2] && add < 9; add++) {
                    arrNum1[2] += 1;
                }
            }

            if (arrNum1[1] < arrNum2[1]) {
                if (arrNum2[1] == 9) {
                    arrNum2[1]--;
                }
                for (let add = 0; arrNum1[1] <= arrNum2[1] && add < 9; add++) {
                    arrNum1[1] += 1;
                }
            }

            var number1 = this.array_to_decimal(arrNum1);
            var number2 = this.array_to_decimal(arrNum2);


            while (number1 - number2 <= 0.00) { //if the new number1 is smaller or equal to number2, then increase the last digit of number1 by 1 to avoid -ve and 0.00

                arr = _this.num_to_numArray(number1);
                arr1 = _this.num_to_numArray(number2);

                if (arr[0] != 9) {
                    arr[0] += 1;
                }
                else {
                    arr1[0] -= 1
                }
                number1 = this.array_to_decimal(arr);
                number2 = this.array_to_decimal(arr1);

            }

            _this.num1 = number1.toFixed(2);
            _this.num2 = number2.toFixed(2);

        }

    },
    Convert_to_with_carry: function (n1, n2) {
        if (_this.count_with_carry < 4) {
            _this.count_with_carry++;

            arrNum1 = this.num_to_numArray(n1);
            arrNum2 = this.num_to_numArray(n2);

            if (arrNum1[2] > arrNum2[2] && arrNum2[2] != 0) {
                for (let sub = 0; arrNum1[2] >= arrNum2[2] && (sub < 9 && sub >= 0); sub++) {
                    arrNum1[2] -= 1;
                }
            }
            else {
                if (arrNum1[2] >= arrNum2[2]) {
                    if (arrNum1[2] == arrNum2[2] || arrNum1[1] > arrNum2[1]) {

                        if (arrNum1[1] > arrNum2[1] && arrNum2[1] != 0) {

                            for (let sub = 0; arrNum1[1] >= arrNum2[1] && (sub < 9 && sub >= 0); sub++) {
                                arrNum1[1] -= 1;
                            }
                        }
                        else if (arrNum1[1] > arrNum2[1] && arrNum2[2] == 0) {
                            arrNum2[1] = 9;
                        }

                    }
                    else if (arrNum1[1] == arrNum2[1]) {
                        if (arrNum1[1] != 0) {
                            arrNum1[1] -= 1;
                        }
                        else {
                            arrNum2[1] = 9;
                            arrNum1[1] = Math.floor(Math.random() * (8 - 1 + 1) + 1)
                        }

                    }
                }
            }

            var number1 = this.array_to_decimal(arrNum1);
            var number2 = this.array_to_decimal(arrNum2);

            while (number1 - number2 <= 0.00) {
                arr = _this.num_to_numArray(number1);
                arr1 = _this.num_to_numArray(number2);
                if (arr[0] != 9) {
                    arr[0] += 1;
                }
                else {
                    arr1[0] -= 1
                }
                number1 = this.array_to_decimal(arr);
                number2 = this.array_to_decimal(arr1);

            }

            _this.num1 = number1.toFixed(2);
            _this.num2 = number2.toFixed(2);

        }
    },

    num_to_numArray: function (n) {
        sNum = n.toString();
        arrNum = [];

        for (var i = 0; i < 4; i++) {
            if (!isNaN(+sNum.charAt(i))) {
                arrNum.push(+sNum.charAt(i));
            }
        }
        return arrNum;
    },
    array_to_decimal: function (arr) {
        var num = 0;
        for (var j = 0, mul = 1; j < arr.length; j++, mul = mul / 10) {
            num += arr[j] * mul;
        }
        return num;
    },

    DragUpdate: function (target) {
        target.bringToTop();
        if (target.name == _this.moneyBox1.name) {
            for (let i = 0; i < _this.Orange_coin_group.children.length; i++) {

                if (_this.Orange_coin_group.children[i] != target) {
                    _this.Orange_coin_group.children[i].x = 554 - 23 - 10;
                    _this.Orange_coin_group.children[i].y = 390 - (i * _this.Coin1_y_offset);
                }
            }
        }
        else if (target.name == _this.moneyBox2.name) {

            for (let i = 0; i < _this.green_coin_group.children.length; i++) {
                if (_this.green_coin_group.children[i] != target) {
                    _this.green_coin_group.children[i].x = 323 - 8;
                    _this.green_coin_group.children[i].y = 390 - (i * _this.Coin1_y_offset);
                }
            }
        }
        else {

            for (let i = 0; i < _this.yellow_coin_group.children.length; i++) {

                if (_this.yellow_coin_group.children[i] != target) {
                    _this.yellow_coin_group.children[i].x = 98 + 20 - 8;
                    _this.yellow_coin_group.children[i].y = 390 - (i * _this.Coin1_y_offset);
                }
            }
        }
    },
    DragStart: function (target) {
        _this.clickSound.play();
        if (target.name == _this.moneyBox1.name) {
            for (let i = 0; i < _this.Orange_coin_group.children.length; i++) {
                if (_this.Orange_coin_group.children[i] != target) {
                    _this.Orange_coin_group.children[i].x = 554 - 23 - 10;
                    _this.Orange_coin_group.children[i].y = 390 - (i * _this.Coin1_y_offset);
                }
            }
        }
        else if (target.name == _this.moneyBox2.name) {
            for (let i = 0; i < _this.green_coin_group.children.length; i++) {
                if (_this.green_coin_group.children[i] != target) {
                    _this.green_coin_group.children[i].x = 323 - 8;
                    _this.green_coin_group.children[i].y = 390 - (i * _this.Coin1_y_offset);
                }
            }
        }
        else {
            for (let i = 0; i < _this.yellow_coin_group.children.length; i++) {
                if (_this.yellow_coin_group.children[i] != target) {
                    _this.yellow_coin_group.children[i].x = 98 + 20 - 8;
                    _this.yellow_coin_group.children[i].y = 390 - (i * _this.Coin1_y_offset);
                }
            }
        }
    },
    Highlight_for_carry(moneyBox) {
        if (moneyBox == _this.moneyBox2.name) {
            if (_this.Mtween1) {
                _this.Mtween1.stop();
                _this.moneyBox1.alpha = 1;

            }
            _this.Mtween4 = _this.add.tween(_this.greenLevel).to({ alpha: 0.6 }, 200, 'Linear', true, 0, -1, true)
            _this.green_coin_group.children.forEach(element => {
                element.inputEnabled = true;
                element.input.enableDrag(true);
                element.events.onDragStart.add(_this.DragStart, _this)
                element.events.onDragUpdate.add(_this.DragUpdate, _this)
                element.events.onDragStop.add(_this.DragCarryStop, _this)

            });

        }
        else if (moneyBox == _this.moneyBox3.name) {
            if (_this.Mtween2) {
                _this.Mtween2.stop();
                _this.moneyBox2.alpha = 1;
            }
            _this.Mtween5 = _this.add.tween(_this.yellowLevel).to({ alpha: 0.6 }, 200, 'Linear', true, 0, -1, true)
            _this.yellow_coin_group.children.forEach(element => {
                element.inputEnabled = true;
                element.input.enableDrag(true);
                element.events.onDragStart.add(_this.DragStart, _this)
                element.events.onDragUpdate.add(_this.DragUpdate, _this)

                element.events.onDragStop.add(_this.DragCarryStop, _this)

            });

        }
    },
    DragCarryStop: function (target) {
        // Inly for green and yellow level boxes
        if (target.name == _this.moneyBox2.name && _this.Mtween4.isRunning) {
            if (_this.checkOverlap(target, _this.greenLevel)) {

                _this.CashOut.play();
                target.destroy()
                _this.moneyBox2Number.frame -= 1;
                _this.green_coin_group.children.forEach(element => {
                    element.inputEnabled = false
                });
                _this.Mtween4.stop()
                _this.greenLevel.alpha = 1;
                _this.moneyBox3DropAnim()

            }

            for (let i = 0; i < _this.green_coin_group.children.length; i++) {

                _this.green_coin_group.children[i].x = 323 - 8;
                _this.green_coin_group.children[i].y = 390 - (i * _this.Coin1_y_offset);
            }
        }
        else if (target.name == _this.moneyBox3.name && _this.Mtween5.isRunning) {
            if (_this.checkOverlap(target, _this.yellowLevel)) {

                _this.CashOut.play();
                target.destroy()
                _this.moneyBox3Number.frame -= 1;
                _this.yellow_coin_group.children.forEach(element => {
                    element.inputEnabled = false
                });
                _this.Mtween5.stop()
                _this.yellowLevel.alpha = 1;
                _this.moneyBox2DropAnim()

            }

            for (let i = 0; i < _this.yellow_coin_group.children.length; i++) {

                _this.yellow_coin_group.children[i].x = 98 + 20 - 8;
                _this.yellow_coin_group.children[i].y = 390 - (i * _this.Coin1_y_offset);

            }
        }
    },

    DragStop: function (target) {
        _this.snapSound.play();

        if (target.name == _this.moneyBox1.name) {
            if (_this.checkOverlap(target, _this.moneyBox1)) {
                _this.CashOut.play();
                target.destroy()

                _this.moneyBox1Number.frame += 1;
                if (_this.moneyBox1Number.frame == _this.scene1_answers_array[7]) {
                    _this.Orange_coin_group.children.forEach(element => {
                        element.inputEnabled = false
                    });
                    _this.Mtween1.stop()
                    _this.moneyBox1.alpha = 1;
                    if (_this.scene1_answers_array[6] > 0) {
                        if (_this.green_coin_group.children.length > 0) {
                            _this.Mtween2 = _this.add.tween(_this.moneyBox2).to({ alpha: 0.6 }, 200, 'Linear', true, 0, -1, true)
                            _this.green_coin_group.children.forEach(element => {
                                element.inputEnabled = true;
                                element.input.enableDrag(true);

                                element.events.onDragStart.add(_this.DragStart, _this)
                                element.events.onDragStop.add(_this.DragStop, _this)
                                element.events.onDragUpdate.add(_this.DragUpdate, _this)


                            });
                        }
                        else {
                            _this.Highlight_for_carry('moneyBox3')
                        }
                    }
                    else if (_this.scene1_answers_array[4] > 0) {
                        _this.Mtween3 = _this.add.tween(_this.moneyBox3).to({ alpha: 0.6 }, 200, 'Linear', true, 0, -1, true)
                        _this.yellow_coin_group.children.forEach(element => {
                            element.inputEnabled = true;
                            element.input.enableDrag(true);

                            element.events.onDragStart.add(_this.DragStart, _this)
                            element.events.onDragStop.add(_this.DragStop, _this)
                            element.events.onDragUpdate.add(_this.DragUpdate, _this)


                        });
                    }
                    else if (_this.scene1_answers_array[4] == 0 && _this.scene1_answers_array[6] == 0) {
                        _this.print_inputBox_counter()

                    }
                }

                if (_this.moneyBox1Number.frame < _this.scene1_answers_array[7] && _this.Orange_coin_group.children.length == 0 && _this.green_coin_group.length == 0) {
                    // Highlight yellow level to show carry 2 times
                    _this.Highlight_for_carry('moneyBox3')
                }
                else if (_this.moneyBox1Number.frame < _this.scene1_answers_array[7] && _this.Orange_coin_group.children.length == 0) {
                    // Highlight green level to show carry
                    _this.Highlight_for_carry('moneyBox2')
                }

            }
            else {

            }

            for (let i = 0; i < _this.Orange_coin_group.children.length; i++) {

                _this.Orange_coin_group.children[i].x = 554 - 23 - 10;
                _this.Orange_coin_group.children[i].y = 390 - (i * _this.Coin1_y_offset);

            }
        }
        else if (target.name == _this.moneyBox2.name) {
            if (_this.checkOverlap(target, _this.moneyBox2)) {
                _this.CashOut.play();
                target.destroy()

                _this.moneyBox2Number.frame += 1;
                if (_this.moneyBox2Number.frame == _this.scene1_answers_array[6]) {
                    _this.green_coin_group.children.forEach(element => {
                        element.inputEnabled = false
                    });
                    _this.Mtween2.stop()
                    _this.moneyBox2.alpha = 1;

                    if (_this.scene1_answers_array[4] > 0) {
                        _this.Mtween3 = _this.add.tween(_this.moneyBox3).to({ alpha: 0.6 }, 200, 'Linear', true, 0, -1, true)
                        _this.yellow_coin_group.children.forEach(element => {
                            element.inputEnabled = true;
                            element.input.enableDrag(true);

                            element.events.onDragStart.add(_this.DragStart, _this)
                            element.events.onDragStop.add(_this.DragStop, _this)
                            element.events.onDragUpdate.add(_this.DragUpdate, _this)


                        });
                    }
                    else if (_this.scene1_answers_array[4] == 0) {
                        _this.print_inputBox_counter()

                    }
                }

                else if (_this.moneyBox2Number.frame < _this.scene1_answers_array[6] && _this.green_coin_group.children.length == 0) {
                    // Highlight yellow level to show carry
                    _this.Highlight_for_carry('moneyBox3')

                }


            }

            for (let i = 0; i < _this.green_coin_group.children.length; i++) {

                _this.green_coin_group.children[i].x = 323 - 8;
                _this.green_coin_group.children[i].y = 390 - (i * _this.Coin1_y_offset);
            }

        }
        else if (target.name == _this.moneyBox3.name) {
            if (_this.checkOverlap(target, _this.moneyBox3)) {
                _this.CashOut.play();
                target.destroy()

                _this.moneyBox3Number.frame += 1;
                if (_this.moneyBox3Number.frame == _this.scene1_answers_array[4]) {
                    _this.yellow_coin_group.children.forEach(element => {
                        element.inputEnabled = false
                    });
                    _this.Mtween3.stop()
                    _this.moneyBox3.alpha = 1;

                    _this.print_inputBox_counter()

                }

            }
            else {

            }

            for (let i = 0; i < _this.yellow_coin_group.children.length; i++) {

                _this.yellow_coin_group.children[i].x = 98 + 20 - 8;
                _this.yellow_coin_group.children[i].y = 390 - (i * _this.Coin1_y_offset);

            }

        }
    },

    checkOverlap: function (spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },

    eraseScreen: function () {
        _this.black_text1.destroy();
        _this.black_text2.destroy();
        _this.black_text3.destroy();
        _this.black_text4.destroy();
        _this.black_text5.destroy();
        _this.black_text6.destroy();
        _this.black_text7.destroy();
        _this.black_text8.destroy();

        _this.black_text_new1.destroy();
        _this.black_text_new2.destroy();
        _this.black_text_new3.destroy();
        _this.black_text_new4.destroy();
        _this.black_text_new5.destroy();
        _this.black_text_new6.destroy();
        _this.black_text_new7.destroy();
        _this.black_text_new8.destroy();

        _this.black_text_counter_1.destroy();
        _this.black_text_counter_2.destroy();
        _this.black_text_counter_3.destroy();

        _this.panel1.destroy();
        _this.equal_sign.destroy();
        _this.minus_sign_counter.destroy();
        _this.plus_sign.destroy()
        _this.ques_plus_sign.destroy()

        _this.question_box.destroy();
        _this.left_eqn_text.destroy();
        _this.right_eqn_text.destroy();


        _this.four_color_box1.destroy();
        _this.four_color_box2.destroy();
        _this.four_color_box.destroy();
        _this.counter_box.destroy()
        _this.counterGroup.destroy();


        _this.scene1_answers_array = [];
        _this.scene3_answers_array = [];
        _this.carry = 0;

        _this.square_box_Group.destroy();
        _this.square_box_Group2.destroy();
        _this.square_box_Group3.destroy();
        _this.numGroup.destroy();

    },

    nextquestion: function () {
        if (_this.count1 < 6) {

            _this.row = 1;
            _this.Question_flag = 1;
            _this.change_row_height();
            _this.sceneCount1 = 1;
            _this.answer_flag = 1;
            _this.time.events.add(1000, function () {
                _this.display_scene(_this.sceneCount1);
            });
        }
        else {
            _this.timer1.stop();
            _this.timer1 = null;
            _this.time.events.add(1000, function () {
                // _this.state.start('score', true, false);
                _this.state.start('score', true, false,gameID,_this.microConcepts);
            });
        }
    },

    celebration: function () {
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
    },

    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        //_this.anim.play();

        //  //*star action changes
        //  _this.userHasPlayed =1;
        //  _this.timeinMinutes = _this.minutes;
        //  _this.timeinSeconds = _this.seconds;
        //  _this.game_id = "NSD_5B_G6";
        //  _this.grade = "6";
        //  _this.gradeTopics = "Decimals";
         _this.microConcepts = "Number Systems";

        _this.count1++;
        anim.play();
    },

    shutdown: function () {
        _this.stopVoice();
        // RI.gotoEndPage();
        // telInitializerbbpp.tele_end();
    },

    DemoVideo: function () {
        //*  This game helps us convert decimals into lowest fractions
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSD-5B-G6/" + _this.languageSelected + "/DV-NSD-5B-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* Drag the strips and square pieces onto the grid to represent the given decimal number.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-5B-G6/" +
            _this.languageSelected + "/NSD-5B-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Write the corresponding fraction.
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-5B-G6/" +
            _this.languageSelected + "/NSD-5B-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* Now, select the lowest form of the fraction.
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-5B-G6/" +
            _this.languageSelected + "/NSD-5B-G6C.mp3");
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

        if (_this.q1Timer) clearTimeout(_this.q1Timer);
        if (_this.q2Timer) clearTimeout(_this.q2Timer);
        if (_this.q3Timer) clearTimeout(_this.q3Timer);

        if (_this.demoAudio1) {
            console.log("removing the demo audio1");
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
            console.log("removing the q3");
            _this.q3Sound.pause();
            _this.q3Sound = null;
            _this.q3Soundsrc = null;
        }

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed

    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('nsd5b_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSD-5B-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        //* play the demo audio1 
        _this.demoAudio1.play();

        _this.q1Timer = setTimeout(function ()    //* q1 js timer to play q1Timer after 7 seconds.
        {
            console.log("inside q1sound.....")
            _this.demoVideo_1.playbackRate = 1.2;
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 7000);

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 27 seconds.
        {
            console.log("inside q2sound.....")
            _this.demoVideo_1.playbackRate = 1;
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 33000);

        _this.q3Timer = setTimeout(function ()    //* q3 js timer to play q3Timer after 47 seconds.
        {
            console.log("inside q3sound.....")
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 74000);

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



