
Game.NSD_5A_G6level1 = function () { };
// var randarr;
// var orangeCoinArray;
// var coinset;
console.log("Inside level1 state");

//Orange: 1/100
//Green: 1/10
//Yellow: 1

Game.NSD_5A_G6level1.prototype = {
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
        _this.CashOutsrc.setAttribute("src", window.baseUrl + "sounds/CashOut.mp3");
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

        _this.Success = document.createElement('audio');
        _this.Successsrc = document.createElement('source');
        _this.Successsrc.setAttribute("src", window.baseUrl + "sounds/Success.mp3");
        _this.Success.appendChild(_this.Successsrc);

        telInitializerbbpp.gameIdInit("NSD_5A_G6", gradeSelected);
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
        _this.sceneCount1 = 0;
        _this.questionid = null;

        _this.background;

        _this.counterForTimer = 0;
        _this.count1 = 0;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.AnsTimerCount = 0;
        _this.starsGroup;

        //  //* User Progress variables for BB++ app
        //  _this.userHasPlayed = 0;
        //  _this.timeinMinutes;
        //  _this.timeinSeconds;
        //  _this.game_id;
        //  _this.score = 0;
        //  _this.gradeTopics;
          _this.microConcepts;
        //  _this.grade;

        _this.panel1;
        _this.panel5;
        _this.four_color_box1;
        _this.four_color_box2;
        _this.four_color_box;
        _this.plus_sign;
        _this.question_box;
        _this.sceneCount = 1;
        _this.row = 1;
        _this.row_height = 150;
        _this.scene1_answers_array = [];
        _this.scene3_answers_array = [];
        // _this.array_of_boxes = [];
        _this.square_box_Group;
        // _this.square_box_Group2;
        _this.coin_machine_panel;
        _this.lever1;
        _this.lever2;
        _this.lever3;

        _this.textBox_full = false;
        _this.glow_green_shown = false;
        _this.bundle1Created = false;
        _this.bundle1Dragged = false;
        _this.bundle2Created = false;
        _this.bundle2Dragged = false;

        _this.answer_flag = 1;
        _this.after_taking_carry_orange = 0;
        _this.after_taking_carry_green = 0;


        _this.black_text1;
        _this.black_text2
        _this.black_text3;
        _this.black_text4;
        _this.black_text5;
        _this.black_text6;
        _this.black_text7;
        _this.black_text8;

        _this.lever1_header;
        _this.lever2_header;
        _this.lever3_header;
        _this.Lever1Number;
        _this.Lever2Number;
        _this.Lever3Number;
        _this.Coin1_anim;
        _this.Coin2_anim;
        _this.Coin3_anim;


        _this.carry = 0;

        // _this.square_box_count = 1;
        // _this.square_text_box_array = [8];

        _this.hint_flag = 0;// * hint flag zero

        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.qArrays = new Array();
        _this.qArrays = [0, 1, 2, 3, 4, 5];
        _this.qArrays = this.shuffle(_this.qArrays);
        console.log("shuffled question array: " + _this.qArrays);
        // _this.index = 0;


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
                    _this.VoiceNote1.play();
                }
                else if (_this.Question_flag == 2) {
                    _this.VoiceNote2.play();
                }
                else if (_this.Question_flag == 3) {
                    _this.VoiceNote3.play();
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

        //bulb 
        // _this.hintBtn = _this.add.sprite(670,6,'bulb');
        // _this.hintBtn.scale.setTo(0.5,0.6);
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

    getVoice: function () {

        _this.stopVoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        _this.src.setAttribute("src", window.baseUrl + "questionSounds/NSD-5A-G6/English/Instruction1.mp3");

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();

    },

    //* function to enable the speaker button once pressed.
    EnableVoice: function () {
        console.log("speeeeeker")
        if (_this.speakerbtnClicked == false && _this.rightbtn_Clicked == false) {
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
            _this.speakerbtnClicked = false;
        }
    },

    VoiceNote1Fn: function () {
        console.log("Question");
        _this.Question_flag = -1;
        _this.VoiceNote1 = document.createElement('audio');
        _this.VoiceNote1src = document.createElement('source');
        _this.VoiceNote1src.setAttribute("src", window.baseUrl + "questionSounds/NSD-5A-G6/" + _this.languageSelected + "/NSD-5A-G6A.mp3");
        _this.VoiceNote1.appendChild(_this.VoiceNote1src);
        _this.VoiceNote1.play();

        // _this.time.events.add(3000, function () {
        //     console.log("completed")
        //     _this.Question_flag = 1;
        // })

    },

    VoiceNote2Fn: function () {
        if (_this.VoiceNote1) _this.VoiceNote1.pause();
        _this.VoiceNote2 = document.createElement('audio');
        _this.VoiceNote2src = document.createElement('source');
        _this.VoiceNote2src.setAttribute("src", window.baseUrl + "questionSounds/NSD-5A-G6/" + _this.languageSelected + "/NSD-5A-G6B.mp3");
        _this.VoiceNote2.appendChild(_this.VoiceNote2src);
        _this.VoiceNote2.play();


    },

    VoiceNote3Fn: function () {
        _this.VoiceNote3 = document.createElement('audio');
        _this.VoiceNote3src = document.createElement('source');
        _this.VoiceNote3src.setAttribute("src", window.baseUrl + "questionSounds/NSD-5A-G6/" + _this.languageSelected + "/NSD-5A-G6C.mp3");
        _this.VoiceNote3.appendChild(_this.VoiceNote3src);
        _this.VoiceNote3.play();

    },

    //To go through
    stopVoice: function () {
        // _timer1.stop();
        if (_this.playQuestionSound) {
            if (_this.playQuestionSound.contains(_this.src)) {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            if (!_this.playQuestionSound.paused) {
                _this.playQuestionSound.pause();
                _this.playQuestionSound.currentTime = 0.0;
            }
            _this.playQuestionSound = null;
            _this.src = null;
        }
        if (_this.VoiceNote1) {
            _this.VoiceNote1.pause();
            _this.VoiceNote1 = null;
            _this.VoiceNote1src = null;
        }
        if (_this.VoiceNote2) {
            _this.VoiceNote2.pause();
            _this.VoiceNote2 = null;
            _this.VoiceNote2src = null;
        }
        if (_this.VoiceNote3) {
            _this.VoiceNote3.pause();
            _this.VoiceNote3 = null;
            _this.VoiceNote3src = null;
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
        _this.VoiceNote1Fn();
        _this.time.events.add(3000, function () {
            console.log("completed")
            _this.Question_flag = 1;
        })
        _this.Initial_randomizing();


        //Call display scene
        this.display_scene(_this.sceneCount);

        //* hintbtn will be true when the game is playing
        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1;
    },

    showfractionbox: function (addvar, yvalue) {
        // console.log("showfractionbox called with: ", addvar, yvalue);
        _this.onebox = true;
        _this.box_flag = 1;
        _this.AnswerBox = _this.square_box_Group.create(addvar, yvalue, 'square_text_box');
        _this.AnswerBox.scale.setTo(1, 1);
        // _this.array_of_boxes.push(_this.AnswerBox);
        // console.log(_this.array_of_boxes);
        _this.AnswerBox.frame = 1;
    },

    change_row_height: function () {
        // console.log("row = ", _this.row);
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
        _this.sceneCount1++;
        console.log("display Scene called using n = ", n);
        //Scene1 - User enters values in the color box from the question shown below.

        _this.qnumber = _this.qArrays[_this.count1]; //count1 is for keeping track of which question is getting selected among the 6 we initially randomized

        if (n == 1) {

            console.log("count1: ", _this.count1);


            //Add intial panel to screen
            _this.panel5 = _this.add.sprite(25, 58, 'panel5');
            _this.panel5.visible = true;
            _this.panel5.scale.setTo(0.23, 0.24);
            _this.four_color_box1 = _this.add.sprite(170, 75, '4_color_box1');
            _this.four_color_box1.visible = true;
            _this.plus_sign = _this.add.sprite(120, 180, 'plus_sign');
            _this.plus_sign.visible = true;
            _this.question_box = _this.add.sprite(252, 360, 'text_box1');
            _this.question_box.visible = true;

            //Printing Question
            _this.left_eqn_text = _this.add.text(290, 370, parseFloat(_this.questionLeftArray[_this.qnumber]));
            _this.applyingStyle(_this.left_eqn_text);
            _this.ques_plus_sign = _this.add.text(356, 370, '+');
            _this.applyingStyle(_this.ques_plus_sign);
            _this.right_eqn_text = _this.add.text(386, 370, parseFloat(_this.questionRightArray[_this.qnumber]));
            _this.applyingStyle(_this.right_eqn_text);


            _this.makeTableHeader();

            _this.square_box_Group = _this.add.group();
            _this.showfractionbox(200, _this.row_height);
            _this.part = 1;
            _this.addNumberPad();

        }
        // _this.scene1_answers_array = [3, '.', 5, 6, 5, '.', 6, 6];
        ///////////////////////////////////////////////////////////////////////
        //Scene 2 - with counter on side panel and black text on color box intially
        if (n == 2) {
            console.log("Scene 2")

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


            // let width = [200, 299, 390, 485];




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
                    console.log(i);
                    _this.counter_top_texts = _this.add.text(counter_width[i], 35, element);
                    _this.applyingStyle2(_this.counter_top_texts)
                    _this.counter_top_texts.scale.setTo(scale3, scale3);
                    _this.counter_box.addChild(_this.counter_top_texts);
                    console.log("element", element);
                    console.log("_this.counter_box", _this.counter_box);
                    console.log("CounterGroup", _this.counterGroup.length);
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
                        console.log(i);
                        _this.counter_bottom_texts = _this.add.text(counter_width[i % 4], 80, element);
                        _this.applyingStyle2(_this.counter_bottom_texts);
                        _this.counter_bottom_texts.scale.setTo(scale3, scale3);
                        _this.counter_box.addChild(_this.counter_bottom_texts);
                        console.log("element", element);
                        console.log("_this.counter_box", _this.counter_box);
                    }
                }
            })

            tween8.onComplete.add(function () {
                _this.sceneCount = 3; //Calling for scene 3 - with coing machine
                _this.display_scene(_this.sceneCount);
                console.log("_this.counter_box", _this.counter_box);
                console.log("CounterGroup", _this.counterGroup.length);
            })

            // var timeout1 = setTimeout(function () {
            //     _this.erase_row1_Text();
            //     // _this.top_black_text_group.destroy();
            // }, 2000);

            // var timeout2 = setTimeout(function () {
            //     for (i = 0; i < 4; i++) {
            //         if (i != 1) {
            //             const element = _this.scene1_answers_array[i];
            //             _this.counter_top_texts = _this.add.text(counter_width[i], 35, element);
            //             _this.counter_top_texts.scale.setTo(scale3, scale3);
            //             _this.counter_box.addChild(_this.counter_top_texts);
            //         }
            //     }
            //     _this.colorboxtocounterbox.play();
            // }, 2500);

            // var timeout3 = setTimeout(function () {
            //     _this.erase_row2_Text();
            //     // _this.bottom_black_text_group.destroy();
            // }, 3500);

            // var timeout4 = setTimeout(function () {
            //     for (; i < 8; i++) {
            //         if (i != 5) {
            //             const element = _this.scene1_answers_array[i];
            //             _this.counter_bottom_texts = _this.add.text(counter_width[i % 4], 80, element);
            //             _this.counter_bottom_texts.scale.setTo(scale3, scale3);
            //             _this.counter_box.addChild(_this.counter_bottom_texts);
            //         }
            //     }
            //     _this.colorboxtocounterbox.play();
            // }, 4000);


        }
        ///////////////////////////////////////////////////////////////////////

        // Scene 3: scene with Coin machine
        if (n == 3) {
            console.log("scene 3");

            if (_this.count1 == 0) {
                _this.Question_flag = -1;
                _this.VoiceNote2Fn();
            }
            // _this.time.events.add(2000, function () {
            _this.Question_flag = 2;
            //})
            //Destroying the black text '.'  already on screen
            _this.black_text2.destroy();
            _this.black_text6.destroy();


            _this.four_color_box1.destroy();


            //Loading coin machine:
            _this.coin_machine_panel = _this.add.image(16, 58, 'panel2');

            _this.makeCounter(3);  //To show frame = 2 of the counter box image (Text box 5.png)
            _this.drag_remaining = 0;
            //Placing assets on screen
            _this.make_coin_machine_top();


            _this.fill_with_coins_question();

        }

        if (n == 4) { //similar to n == 2.

            console.log("scene 4");
            if (_this.count1 == 0) {
                _this.Question_flag = -1;
                _this.VoiceNote3Fn();
            }
            // _this.time.events.add(2000, function () {
            _this.Question_flag = 3;
            //})
            _this.coin_machine_panel.destroy();

            _this.Coin1_anim.destroy();
            _this.Coin1_position2.destroy();
            _this.Coin2_anim.destroy();
            _this.Coin2_position2.destroy();
            _this.Coin3_anim.destroy();
            _this.numGroup.destroy();

            _this.four_color_box2 = _this.add.sprite(170, 75, '4_color_box2');

            _this.plus_sign = _this.add.sprite(120, 180, 'plus_sign');
            _this.plus_sign.visible = true;

            _this.equal_sign = _this.add.text(125, 320, '=');
            _this.equal_sign.scale.setTo(1.5, 1.5);
            _this.equal_sign.visible = true;

            _this.makeTableHeader();



            _this.row = 1;
            _this.change_row_height();


            _this.black_text_new1 = _this.add.text(200 + 10, _this.row_height + 5, _this.scene1_answers_array[0]);
            _this.applyingStyle2(_this.black_text_new1);
            _this.black_text_new2 = _this.add.text(299 + 10, _this.row_height + 5, _this.scene1_answers_array[1]);
            _this.applyingStyle2(_this.black_text_new2);
            _this.black_text_new3 = _this.add.text(390 + 10, _this.row_height + 5, _this.scene1_answers_array[2]);
            _this.applyingStyle2(_this.black_text_new3);
            _this.black_text_new4 = _this.add.text(485 + 10, _this.row_height + 5, _this.scene1_answers_array[3]);
            _this.applyingStyle2(_this.black_text_new4);

            _this.row = 2;
            _this.change_row_height();

            _this.black_text_new5 = _this.add.text(200 + 10, _this.row_height + 5, _this.scene1_answers_array[4]);
            _this.applyingStyle2(_this.black_text_new5);
            _this.black_text_new6 = _this.add.text(299 + 10, _this.row_height + 5, _this.scene1_answers_array[5]);
            _this.applyingStyle2(_this.black_text_new6);
            _this.black_text_new7 = _this.add.text(390 + 10, _this.row_height + 5, _this.scene1_answers_array[6]);
            _this.applyingStyle2(_this.black_text_new7);
            _this.black_text_new8 = _this.add.text(485 + 10, _this.row_height + 5, _this.scene1_answers_array[7]);
            _this.applyingStyle2(_this.black_text_new8);

            console.log(_this.scene3_answers_array);
            _this.black_text_counter_1 = _this.add.text(855 + 12, 315 + 5, _this.scene3_answers_array[0]);
            _this.applyingStyle2(_this.black_text_counter_1);
            _this.black_text_counter_2 = _this.add.text(804 + 12, 315 + 5, _this.scene3_answers_array[1]);
            _this.applyingStyle2(_this.black_text_counter_2);
            _this.black_text_counter_3 = _this.add.text(754 + 12, 315 + 5, _this.scene3_answers_array[2]);
            _this.applyingStyle2(_this.black_text_counter_3);

            _this.square_box_Group3 = _this.add.group();

            _this.row_height = 320;

            _this.showfractionbox_3(200, _this.row_height);

            _this.addNumberPad();

        }
    },


    make_coin_machine_top: function () {
        let scale = 1;
        let lever_height = 20;
        _this.lever1 = _this.add.image(528, lever_height, 'orange_lever');
        _this.lever1.scale.setTo(scale, scale);
        _this.lever1.frame = 0;
        _this.lever1.name = "lever1";
        _this.coin_machine_panel.addChild(_this.lever1);

        _this.lever2 = _this.add.image(305, lever_height, 'green_lever');
        _this.lever2.scale.setTo(scale, scale);
        _this.lever2.name = "lever2";

        _this.coin_machine_panel.addChild(_this.lever2);

        _this.lever3 = _this.add.image(70, lever_height, 'yellow_lever');
        _this.lever3.scale.setTo(scale, scale);
        _this.lever3.name = "lever3";
        _this.coin_machine_panel.addChild(_this.lever3);


        //Printing place values (headers) of the levers.
        let scale1 = 0.5;
        _this.lever1_header = _this.add.text(9, 10, '1/100');
        _this.lever1_header.scale.setTo(scale1, scale1);
        _this.lever1_header.fill = '#ffffff';
        _this.lever1.addChild(_this.lever1_header);

        _this.lever2_header = _this.add.text(10, 10, '1/10');
        _this.lever2_header.scale.setTo(scale1, scale1);
        _this.lever2_header.fill = '#ffffff';
        _this.lever2.addChild(_this.lever2_header);

        _this.lever3_header = _this.add.text(22, 10, '1');
        _this.lever3_header.scale.setTo(scale1, scale1);
        _this.lever3_header.fill = '#ffffff';
        _this.lever3.addChild(_this.lever3_header);


        //Starting with number on lever to be 0 (frame 0 of numberVSmall)
        _this.Lever1Number = _this.add.sprite(9, 35, 'numberVSmall');
        _this.Lever1Number.frame = 0;
        _this.lever1.addChild(_this.Lever1Number);

        _this.Lever2Number = _this.add.sprite(9, 35, 'numberVSmall');//304,83
        _this.Lever2Number.frame = 0;
        _this.lever2.addChild(_this.Lever2Number);

        _this.Lever3Number = _this.add.sprite(9, 35, 'numberVSmall');
        _this.Lever3Number.frame = 0;
        _this.lever3.addChild(_this.Lever3Number);

        _this.lever1.inputEnabled = false;
        _this.lever2.inputEnabled = false;
        _this.lever3.inputEnabled = false;
    },

    //Fills up coin machine panel with the initial coins using the top row from the counter box
    fill_with_coins_question: function () {

        _this.correct_sum_lever1 = Number(_this.scene1_answers_array[3]) + Number(_this.scene1_answers_array[7]);
        _this.correct_sum_lever2 = Number(_this.scene1_answers_array[2]) + Number(_this.scene1_answers_array[6]);
        _this.correct_sum_lever3 = Number(_this.scene1_answers_array[0]) + Number(_this.scene1_answers_array[4]);

        console.log("_this.correct_sum_lever1", _this.correct_sum_lever1);
        console.log("_this.correct_sum_lever2", _this.correct_sum_lever2);
        console.log("_this.correct_sum_lever3", _this.correct_sum_lever3);
        //Showing initial coins on the screen

        //Frames logic: After every 4 frames, the type of pile of coins repeat with one less coin in it.
        //In total: 40 frames

        //To get the top right number from the counter box to print the coins accordingly in the coin machine
        _this.frame_coin1_index = Number(_this.scene1_answers_array[3]);
        _this.Coin1_anim = _this.add.sprite(554, 220, 'orange_coin_anim');
        _this.Coin1_anim.frame = 40 - 4 * _this.frame_coin1_index;

        _this.Coin1_position2 = _this.add.sprite(554 - 90, 220, 'orange_coin_anim');
        _this.Coin1_position2.frame = 0;
        _this.Coin1_position2.name = "lever1"
        _this.Coin1_position2.visible = false;

        _this.frame_coin2_index = Number(_this.scene1_answers_array[2]);
        _this.Coin2_anim = _this.add.sprite(328, 220, 'green_coin_anim');
        _this.Coin2_anim.frame = 40 - 4 * _this.frame_coin2_index;

        _this.Coin2_position2 = _this.add.sprite(328 - 90, 220, 'green_coin_anim');
        _this.Coin2_position2.frame = 0;
        _this.Coin2_position2.visible = false;
        _this.Coin2_position2.name = "lever2"

        //_this.scene1_answers_array[1] will be containing '.', so we omit that index when printing coins
        _this.frame_coin3_index = Number(_this.scene1_answers_array[0]);
        _this.Coin3_anim = _this.add.sprite(98, 220, 'yellow_coin_anim');
        _this.Coin3_anim.frame = 40 - 4 * _this.frame_coin3_index;


        _this.lever1.inputEnabled = false;
        _this.lever2.inputEnabled = false;
        _this.lever3.inputEnabled = false;

        _this.num1_bottom = Number(_this.scene1_answers_array[7]);
        _this.num2_bottom = Number(_this.scene1_answers_array[6]);
        _this.num3_bottom = Number(_this.scene1_answers_array[4]);

        if (_this.num1_bottom == 0) {
            _this.lever1.inputEnabled = false;
            _this.lever3.inputEnabled = false;

            // _this.lever1.input.useHandCursor = false;
            _this.lever2.inputEnabled = true;
            console.log.apply("lever2 = true");

            _this.lever2.input.useHandCursor = true;
            _this.lever2.events.onInputDown.add(_this.Lever2Clicked, _this);
            _this.coins2_shown = _this.frame_coin2_index;

            if (_this.num2_bottom == 0) {
                _this.lever1.inputEnabled = false;
                _this.lever2.inputEnabled = false;

                // _this.lever1.input.useHandCursor = false;

                _this.lever3.inputEnabled = true;
                console.log.apply("lever3 = true")
                _this.lever3.input.useHandCursor = true;
                _this.lever3.events.onInputDown.add(_this.Lever3Clicked, _this);
                _this.coins3_shown = _this.frame_coin3_index;
            }
            else {
                _this.lever2.inputEnabled = true;
                _this.lever2.input.useHandCursor = true;

                _this.lever1.inputEnabled = false;
                _this.lever3.inputEnabled = false;

                _this.lever2.events.onInputDown.add(_this.Lever2Clicked, _this);
                _this.coins2_shown = _this.frame_coin2_index;
            }
        }
        else {
            _this.lever1.inputEnabled = true;
            _this.lever1.input.useHandCursor = true;

            _this.lever2.inputEnabled = false;
            console.log("lever 2 and 3 disabled");
            _this.lever3.inputEnabled = false;

            _this.lever1.events.onInputDown.add(_this.Lever1Clicked, _this);
            _this.coins1_shown = _this.frame_coin1_index;
        }

        // console.log(_this.num2_bottom);



        ////////////////////////////////////////////////////


        // _this.lever3.events.onInputDown.add(_this.Lever3Clicked, _this);
        // _this.coins3_shown = _this.frame_coin3_index;

        // _this.lever2.events.onInputDown.add(_this.Lever2Clicked, _this);
    },

    check_sum1: function () {
        if ((_this.coins1_shown == _this.correct_sum_lever1 && _this.bundle1Created == false) ||
            (_this.bundle1Created == true && _this.coins1_shown == _this.correct_sum_lever1)) {

            console.log("lever1 correct sum acheived");
            _this.lever1Anim.stop();
            _this.lever1.inputEnabled = false;
            _this.lever1.input.useHandCursor = false;
            if (_this.bundle1Created == false && _this.bundle1Dragged == false) {
                _this.lever2.inputEnabled = true;
                _this.lever2.input.useHandCursor = true;

                _this.lever2.events.onInputDown.add(_this.Lever2Clicked, _this);
                _this.coins2_shown = _this.frame_coin2_index;
            }
            if ((_this.num2_bottom == 0 && _this.bundle1Created == true && _this.bundle1Dragged == true) || (_this.num2_bottom == 0 && _this.bundle1Created == false && _this.bundle1Dragged == false)) {
                if ((_this.num3_bottom == 0 && _this.drag_remaining == 0 && _this.bundle1Created == true && _this.bundle1Dragged == true) || (_this.num3_bottom == 0 && _this.drag_remaining == 0 && _this.bundle1Created == false && _this.bundle1Dragged == false)) {

                    console.log("_this.num3_bottom = 0");
                    _this.print_inputBox_counter();
                    _this.lever2.inputEnabled = false;
                    //_this.lever2.input.useHandCursor = false;
                }
                else {
                    console.log("_this.num2_bottom = 0");
                    _this.lever2.inputEnabled = false;
                    // _this.lever2.input.useHandCursor = false;

                    _this.lever3.inputEnabled = true;
                    _this.lever3.input.useHandCursor = true;
                    _this.lever3.events.onInputDown.add(_this.Lever3Clicked, _this);
                    _this.coins3_shown = _this.frame_coin3_index;

                }
            }
        }
    },

    check_sum2: function () {
        if ((_this.coins2_shown == _this.correct_sum_lever2 && _this.bundle2Created == false) ||
            (_this.bundle2Created == true && _this.coins2_shown == _this.correct_sum_lever2)) {
            console.log("lever2 correct sum acheived");
            _this.lever2Anim.stop();

            _this.lever2.inputEnabled = false;
            _this.lever2.input.useHandCursor = false;

            if (_this.bundle2Created == false && _this.bundle2Dragged == false) {
                _this.lever3.inputEnabled = true;
                _this.lever3.input.useHandCursor = true;

                console.log("Entering lever3 from check_sum2");
                _this.lever3.events.onInputDown.add(_this.Lever3Clicked, _this);
                _this.coins3_shown = _this.frame_coin3_index;
            }

            if (_this.num3_bottom == 0 && _this.drag_remaining == 0 && _this.bundle2Created == true && _this.bundle2Dragged == true) {

                console.log("_this.num3_bottom = 0");

                _this.lever3.inputEnabled = false;
                _this.lever3.input.useHandCursor = false;

                _this.print_inputBox_counter();
            }
            else if (_this.num3_bottom == 0 && _this.drag_remaining == 0 && _this.bundle2Created == false && _this.bundle2Dragged == false) {

                console.log("_this.num3_bottom = 0");

                _this.lever3.inputEnabled = false;
                _this.lever3.input.useHandCursor = false;

                _this.print_inputBox_counter();
            }

        }
    },

    check_sum3: function () {
        if (_this.coins3_shown == _this.correct_sum_lever3) {
            _this.lever3.inputEnabled = false;
            _this.lever3.input.useHandCursor = false;
        }

        console.log("Entering last if in check_sum3");
        if (_this.coins3_shown == _this.correct_sum_lever3 && _this.drag_remaining == 0) {
            console.log("lever3 correct sum acheived");
            _this.lever3Anim.stop();

            // _this.lever3.inputEnabled = false;
            // _this.lever3.input.useHandCursor = false;

            _this.print_inputBox_counter();
        }

    },

    //function called if lever1 (orange) is clicked
    Lever1Clicked: function (target) {

        if (_this.scene1_answers_array[7] != 0) {
            _this.Coin1_anim.visible = true;
            _this.Lever1Number.frame++;
            _this.coins1_shown++;
        }


        console.log(_this.coins1_shown, _this.correct_sum_lever1);

        //Drop 1 coin A/C to counter top row

        if (_this.num1_bottom != 0 && _this.correct_sum_lever1 != 0) {

            if (_this.moved_to_left == 1) {
                var frame1 = 40;
                var frame2 = 36;
                console.log("frame1 = 40");
                _this.moved_to_left = 0;
            }
            else {
                var frame1 = 40 - (4 * (_this.frame_coin1_index)); //frame_coin1_index shows the number of coins appearing on the screen.
                var frame2 = 40 - (4 * (1 + _this.frame_coin1_index));
                console.log("frame2 = ", frame2);
            }

            console.log(_this.frame_coin1_index);
            // console.log(_this.frame_coin1_index + 1);
            // console.log(4 * (_this.frame_coin1_index + 1));

            var frame_array = [];

            for (let i = frame1; i >= frame2; i--) {
                frame_array.push(i);
            }

            console.log("frame1: ", frame1, "frame2: ", frame2, "frame_array: ", frame_array);
            console.log("frame_coin1_index", _this.frame_coin1_index);
            _this.one_coin1_drop_anim = _this.Coin1_anim.animations.add('play', frame_array);
            _this.one_coin1_drop_anim.play(20);
            _this.one_coin1_drop_anim.onComplete.add(function () {
                console.log("coin1 drop oncomplete");
                // _this.time.events.add(1000, function () {
                // })
            })
        }

        _this.CoinDrop.play();
        _this.lever1Anim = _this.lever1.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        _this.lever1Anim.play(15); //argument is directly proportional to time taken for animation


        //Validation of sum
        // if (_this.coins1_shown == _this.correct_sum_lever1 && _this.coins1_shown != 10) {
        // }

        console.log("before", _this.frame_coin1_index);

        if (_this.coins1_shown <= _this.correct_sum_lever1) {
            _this.frame_coin1_index++;
        }
        console.log("after", _this.frame_coin1_index);


        if (_this.frame_coin1_index > 9 || (_this.correct_sum_lever1 == 10 && _this.coins1_shown == 10)) {
            _this.Coin1_position2.visible = true;
            _this.frame_coin1_index = 0;
            _this.bundle1Created = true;
            _this.Coin1_anim.visible = false;

            _this.glow_sprite_orange(_this.Coin1_position2);
        }
        if (_this.frame_coin1_index == 9) {
            _this.moved_to_left = 1;
        }

        _this.check_sum1();

    },

    Lever2Clicked: function () {

        if ((_this.scene1_answers_array[6] != 0) && (_this.after_taking_carry_orange != 1)) {
            // _this.Coin2_anim.visible = true;
            _this.Lever2Number.frame++;
            _this.coins2_shown++;
        }

        console.log(_this.coins2_shown, _this.correct_sum_lever2);

        //Drop 1 coin A/C to counter top row

        console.log("Just outside if coin drop animation")
        if (_this.after_taking_carry_orange || (_this.num2_bottom != 0 && (_this.correct_sum_lever2 != 0))) {
            console.log("Entered coin drop animation if loop")
            if (_this.moved_to_left == 1) {
                var frame1 = 40;
                var frame2 = 36;
                console.log("frame1 = 40");
                _this.moved_to_left = 0;
            }
            else {
                var frame1 = 40 - 4 * _this.frame_coin2_index; //frame_coin1_index shows the number of coins appearing on the screen.
                var frame2 = 40 - (4 * (1 + _this.frame_coin2_index));
            }

            // console.log(_this.frame_coin2_index);
            // console.log(_this.frame_coin1_index + 1);
            // console.log(4 * (_this.frame_coin1_index + 1));

            var frame_array = [];

            for (let i = frame1; i >= frame2; i--) {
                frame_array.push(i);
            }

            _this.Coin2_anim.visible = true;

            console.log("frame1: ", frame1, "frame2: ", frame2, "frame_array: ", frame_array);
            _this.one_coin2_drop_anim = _this.Coin2_anim.animations.add('play', frame_array);
            _this.one_coin2_drop_anim.play(20);
            _this.one_coin2_drop_anim.onComplete.add(function () {
                console.log("coin2 drop oncomplete");
            })
        }

        _this.CoinDrop.play();
        _this.lever2Anim = _this.lever2.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        _this.lever2Anim.play(15); //argument is directly proportional to time taken for animation


        console.log("before", _this.frame_coin2_index);

        if (_this.coins2_shown <= _this.correct_sum_lever2) {
            _this.frame_coin2_index++;
        }
        console.log("after", _this.frame_coin2_index);

        if (_this.frame_coin2_index > 9) {
            //if (_this.frame_coin2_index > 9) {
            _this.Coin2_position2.visible = true;
            console.log("inside if whn bundle is created");
            _this.Coin2_anim.visible = false;
            _this.bundle2Created = true;
            _this.frame_coin2_index = 0;
            _this.drag_remaining = 1; //to check if we need to drag pile of coin2 before going to next scene
            _this.glow_sprite_green(_this.Coin2_position2);
        }

        if (_this.frame_coin2_index == 9) {
            _this.moved_to_left = 1;
        }

        if (_this.after_taking_carry_orange != 1) {
            _this.check_sum2();
            //_this.after_taking_carry_orange = 0;
        }

    },

    Lever3Clicked: function (target) {
        if (_this.scene1_answers_array[4] != 0 && _this.after_taking_carry_green != 1 && _this.coins3_shown <= _this.correct_sum_lever3) {
            _this.coins3_shown++;
            _this.Lever3Number.frame++;
            console.log("coins3_shown increased")
        }


        console.log(_this.coins3_shown, _this.correct_sum_lever3);

        //Drop 1 coin A/C to counter top row
        if (_this.after_taking_carry_green || (_this.num3_bottom != 0 && _this.correct_sum_lever3 != 0)) {
            console.log("Entered coin drop anim if")
            var frame1 = 40 - 4 * _this.frame_coin3_index; //frame_coin1_index shows the number of coins appearing on the screen.
            var frame2 = 40 - (4 * (1 + _this.frame_coin3_index));

            // console.log(_this.frame_coin3_index);
            // console.log(_this.frame_coin1_index + 1);
            // console.log(4 * (_this.frame_coin1_index + 1));

            var frame_array = [];

            for (let i = frame1; i >= frame2; i--) {
                frame_array.push(i);
            }

            console.log("frame1: ", frame1, "frame2: ", frame2, "frame_array: ", frame_array);
            _this.one_coin3_drop_anim = _this.Coin3_anim.animations.add('play', frame_array);
            _this.one_coin3_drop_anim.play(20);
            _this.one_coin3_drop_anim.onComplete.add(function () {
                console.log("coin3 drop complete");
            })
        }

        _this.CoinDrop.play();
        _this.lever3Anim = _this.lever3.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        _this.lever3Anim.play(15); //argument is directly proportional to time taken for animation


        //Validation of sum
        if (_this.coins3_shown <= _this.correct_sum_lever3) {
            // console.log("")
            _this.frame_coin3_index++;
        }

        // if(_this.after_taking_carry_green == 1 && _this.frame_coin3_index == (_this.correct_sum_lever3 + 1)){
        //     _this.check_sum3();
        // }

        if (_this.after_taking_carry_green != 1) {
            _this.check_sum3();
        }


    },


    //prints square boxes for the counter box
    showfractionbox_2: function (xvalue, yvalue) {
        console.log("showfractionbox_2 called with: ", xvalue, yvalue);
        _this.onebox = true;
        _this.box_flag = 1;

        _this.AnswerBox = _this.square_box_Group2.create(xvalue, yvalue, 'square_text_box');
        _this.AnswerBox.scale.setTo(0.92, 0.95);

        _this.AnswerBox.frame = 1;
    },

    showfractionbox_3: function (xvalue, yvalue) {
        console.log("showfractionbox_3 called with: ", xvalue, yvalue);
        _this.onebox = true;
        _this.box_flag = 1;

        _this.AnswerBox = _this.square_box_Group3.create(xvalue, yvalue, 'square_text_box');
        _this.AnswerBox.scale.setTo(1, 1);

        _this.AnswerBox.frame = 1;
    },



    print_inputBox_counter: function () {
        _this.numGroup.destroy();
        console.log("print_inputBox_counter called");
        _this.square_box_Group2 = _this.add.group();

        // _this.counter_input_boxes = _this.add.group();
        this.counter_flag = 1;
        _this.showfractionbox_2(855, 315);

        _this.correct_counter_sum1 = _this.correct_sum_lever1;
        _this.correct_counter_sum2 = _this.correct_sum_lever2;
        _this.correct_counter_sum3 = _this.correct_sum_lever3;

        if (_this.correct_counter_sum1 > 9) {
            _this.carry = Math.floor(_this.correct_counter_sum1 / 10);
            _this.correct_counter_sum1 %= 10;

            _this.correct_counter_sum2 += _this.carry;
            _this.carry = 0;
        }

        if (_this.correct_counter_sum2 > 9) {
            _this.carry = Math.floor(_this.correct_counter_sum2 / 10);
            _this.correct_counter_sum2 %= 10;

            _this.correct_counter_sum3 += _this.carry;
            _this.carry = 0;
        }



        _this.addNumberPad();
    },

    glow_sprite_orange: function (coin) {
        console.log(coin);
        _this.glow_orange = _this.add.sprite(-20, 15, 'glow');
        _this.glow_orange.visible = true;
        _this.glow_orange.height += 10;
        _this.glow_orange.width += 30;
        coin.addChild(_this.glow_orange);

        coin.inputEnabled = true;
        coin.input.enableDrag(true);

        coin.events.onDragStart.add(_this.onDragStart, _this);
        coin.events.onDragStop.add(_this.onDragStop, _this);
        // _this.tween = _this.add.tween(coin);
        // _this.tween_coin = _this.add.tween(_this.glow);
    },


    glow_sprite_green: function (coin) {
        console.log(coin);

        //if (!_this.glow_green_shown) {
        _this.glow_green = _this.add.sprite(-20, 15, 'glow');
        _this.glow_green.visible = true;
        _this.glow_green_shown = true;
        _this.glow_green.height += 10;
        _this.glow_green.width += 30;

        coin.addChild(_this.glow_green);
        coin.inputEnabled = true;
        coin.input.enableDrag(true);

        coin.events.onDragStart.add(_this.onDragStart, _this);
        coin.events.onDragStop.add(_this.onDragStop, _this);
        //}



        // _this.tween = _this.add.tween(coin);
        // _this.tween_coin = _this.add.tween(_this.glow);
    },


    erase_row1_Text: function () {
        console.log("Erasing first num")
        _this.black_text1.destroy();
        // _this.black_text2.destroy();
        _this.black_text3.destroy();
        _this.black_text4.destroy();
    },

    erase_row2_Text: function () {
        console.log("Erasing first num")
        _this.black_text5.destroy();
        // _this.black_text6.destroy();
        _this.black_text7.destroy();
        _this.black_text8.destroy();
    },

    makeTableHeader: function () {
        var scale1 = 0.8;
        var scale2 = 0.7;

        console.log(_this.sceneCount);

        if (_this.sceneCount == 2 || _this.sceneCount == 1) {
            _this.four_color_box = _this.four_color_box1;
        }
        else {
            _this.four_color_box = _this.four_color_box2;
        }

        _this.first_header_one = _this.add.text(42, 13, '1');
        _this.applyingStyle2(_this.first_header_one)
        _this.four_color_box.addChild(_this.first_header_one);
        _this.first_header_one.scale.setTo(scale1, scale1);

        _this.second_header_dot = _this.add.text(140, 13, '.');
        _this.four_color_box.addChild(_this.second_header_dot);
        _this.second_header_dot.scale.setTo(scale1, scale1)

        _this.third_header_nr = _this.add.text(140 + 93, 2, '1');
        _this.applyingStyle2(_this.third_header_nr) //Numerator for third header
        _this.four_color_box.addChild(_this.third_header_nr);
        _this.third_header_nr.scale.setTo(scale2, scale2);
        _this.third_header_line = _this.add.graphics();
        _this.third_header_line.lineStyle(2);
        _this.third_header_line.moveTo(140 + 80, 28); //line drawn in third header starts from here.
        _this.third_header_line.lineTo(140 + 120, 28); //line drawn is ended here.
        _this.four_color_box.addChild(_this.third_header_line);
        _this.third_header_dr = _this.add.text(140 + 87, 32, '10');
        _this.applyingStyle2(_this.third_header_dr)
        _this.four_color_box.addChild(_this.third_header_dr);
        _this.third_header_dr.scale.setTo(scale2, scale2);


        _this.fourth_header_nr = _this.add.text(140 + 93 + 93, 2, '1'); //Numerator for third header
        _this.applyingStyle2(_this.fourth_header_nr)
        _this.four_color_box.addChild(_this.fourth_header_nr);
        _this.fourth_header_nr.scale.setTo(scale2, scale2);
        _this.fourth_header_line = _this.add.graphics();
        _this.fourth_header_line.lineStyle(2);
        _this.fourth_header_line.moveTo(313, 28); //line drawn in third header starts from here. 
        _this.fourth_header_line.lineTo(355, 28); //line drawn is ended here.
        _this.four_color_box.addChild(_this.fourth_header_line);
        _this.fourth_header_dr = _this.add.text(140 + 87 + 89, 32, '100');
        _this.applyingStyle2(_this.fourth_header_dr)
        _this.four_color_box.addChild(_this.fourth_header_dr);
        _this.fourth_header_dr.scale.setTo(scale2, scale2);

    },

    makeCounter: function (n) {

        _this.counter_box = _this.counterGroup.create(745, 167, 'counter_box');

        _this.counter_box.frame = n - 1;
        // _this.plus_sign = _this.add.sprite(720, 180, 'plus_sign');

        _this.makeCounterHeader();
        _this.plus_sign_counter = _this.add.sprite(-40, 65, 'plus_sign');
        _this.counter_box.addChild(_this.plus_sign_counter);
    },
    makeCounterHeader: function () {
        var scale1 = 0.5;
        _this.first_counter_header = _this.add.text(22, 5, '1');
        _this.applyingStyle2(_this.first_counter_header)
        _this.first_counter_header.scale.setTo(scale1, scale1);
        _this.first_counter_header.fill = '#ffffff';
        _this.counter_box.addChild(_this.first_counter_header);

        _this.second_counter_header = _this.add.text(65, 5, '1/10');
        _this.applyingStyle2(_this.second_counter_header)
        _this.second_counter_header.scale.setTo(scale1, scale1);
        _this.second_counter_header.fill = '#ffffff';
        _this.counter_box.addChild(_this.second_counter_header);

        _this.third_counter_header = _this.add.text(112, 5, '1/100');
        _this.applyingStyle2(_this.third_counter_header)
        _this.third_counter_header.scale.setTo(scale1, scale1);
        _this.third_counter_header.fill = '#ffffff';
        _this.counter_box.addChild(_this.third_counter_header);
    },

    addNumberPad: function () {
        console.log(_this.sceneCount);

        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 512, 'numpadbg');
        //bottomnumpadbg.anchor.setTo(0.5);
        bottomnumpadbg.scale.setTo(1, 1);

        // bottomnumpadbg.name = "numpadbg";

        _this.x = 40;
        // set the number pad invisible initially. only after tweening it is made visible
        _this.numGroup.visible = false;

        for (var i = 0; i < 11; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 548, 'Numberpad');
            _this.numbg.anchor.setTo(0.5);
            // _this.numbg.scale.setTo(0.9);
            _this.numbg.name = i + 1;
            _this.numbg.frame = i;

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;

            // if (_this.sceneCount == 1) { //for scene 1
            _this.numbg.events.onInputDown.add(_this.numClicked, _this);
            // }
            // else if (_this.sceneCount == 3) {
            //     _this.numbg.events.onInputDown.add(_this.numClicked2, _this);
            // }
            // else if (_this.sceneCount == 4) {
            //     _this.numbg.events.onInputDown.add(_this.numClicked3, _this);
            // }

            _this.x += 73;
        }

        _this.wrongbtn = _this.numGroup.create(_this.x + 10, 548, 'Numberpad');
        _this.wrongbtn.frame = 11;
        _this.wrongbtn.anchor.setTo(0.5);
        // _this.wrongbtn.scale.setTo(0.8, 0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.wrongbtnClicked, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 80, 548, 'Numberpad');
        _this.rightbtn.frame = 12;
        _this.rightbtn.anchor.setTo(0.5);
        // _this.rightbtn.scale.setTo(0.8, 0.8);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.carry = 0;
        if (_this.sceneCount == 1)
            _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this);
        else if (_this.sceneCount == 3)
            _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked_2, _this);
        else if (_this.sceneCount == 4)
            _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked_3, _this);


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


    rightbtnClicked_2: function () {
        console.log("rightbtnClicked_2 function called with answerbox name: ", _this.AnswerBox.name);
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        let user_sum = _this.AnswerBox.name;

        // _this.rightbtn_is_Clicked = true;

        if (_this.counter_flag == 1) {
            // var correct_sum = _this.correct_sum_lever1;

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
            // if (_this.carry != 0) {
            //     _this.correct_sum_lever2 += _this.carry;
            //     _this.carry = 0;
            // }
            // var correct_sum = _this.correct_sum_lever2;
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
                _this.sceneCount = 4; //Answer given in left most or the 3rd box on counter is correct then move on to next scene (4)
                _this.display_scene(_this.sceneCount);
            }
            else {
                _this.wrongSelected();
            }
        }

        console.log(x, y);
        console.log(_this.counter_flag);

        // if (correct_sum > 9) {
        //     _this.carry = Math.floor(correct_sum / 10);
        //     correct_sum %= 10;
        // }

        // if (user_sum == correct_sum && _this.counter_flag != 3) {
        //     // console.log("check1");
        //     _this.scene3_answers_array.push(String(_this.AnswerBox.name)); //Pushing in an array to later show these answers in scene 2, in black.
        //     _this.celebrate();
        //     _this.counter_flag++;
        //     _this.showfractionbox_2(x, y);
        //     _this.rightbtn.inputEnabled = true;
        // }
        // else if (user_sum == correct_sum && _this.counter_flag == 3) {
        //     // console.log("check2");
        //     _this.scene3_answers_array.push(String(_this.AnswerBox.name)); //Pushing in an array to later show these answers in scene 2, in black.
        //     _this.celebrate();
        //     _this.square_box_Group2.destroy();
        //     _this.sceneCount = 4; //Answer given in left most or the 3rd box on counter is correct then move on to next scene (4)
        //     _this.display_scene(_this.sceneCount);
        // }
        // else {
        //     _this.wrongSelected();
        // }

    },

    rightbtnClicked_3: function () {
        console.log("rightbtnClicked_3 function called with answerbox name: ", _this.AnswerBox.name);
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;


        //[200, 299, 390, 485]


        if (_this.answer_flag == 1) {
            x = 294;
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
            console.log("correct ans... print new box");
            _this.celebrate();
            _this.answer_flag++;
            _this.showfractionbox_3(x, _this.row_height);
            _this.rightbtn.inputEnabled = true;
        }
        else if (_this.AnswerBox.name === correct_sum && _this.answer_flag == 4) {
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount1);

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
        console.log("rightbtnClicked function called with answerbox name: ", _this.AnswerBox.name);
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        // _this.rightbtn_is_Clicked = true;

        var correct_left_array = this.num_to_numArray(_this.questionLeftArray[_this.qnumber]);
        var correct_right_array = this.num_to_numArray(_this.questionRightArray[_this.qnumber]);
        // var correct_decimal_symbol = Number('.');

        if (_this.row == 1) {
            if (_this.part == 1) {
                var correctans = correct_left_array[0];
                console.log("correct ans: ", correctans);
                console.log("answer: ", _this.AnswerBox.name);
                if (_this.AnswerBox.name === correctans) {
                    console.log(_this.AnswerBox.name);
                    _this.part = 2;

                    _this.scene1_answers_array.push(String(_this.AnswerBox.name)); //Pushing in an array to later show these answers in scene 2, in black.
                    _this.celebrate();
                    _this.showfractionbox(295, _this.row_height);
                    _this.rightbtn.inputEnabled = true;

                }
                else {
                    console.log("wrong ans selected")
                    _this.wrongSelected();
                }
            }
            else if (_this.part == 2) {
                var correctans = 11;
                console.log("correct ans: ", correctans);
                console.log("answer: ", _this.AnswerBox.name);
                if (_this.AnswerBox.name === correctans) {
                    _this.part = 3;
                    _this.AnswerBox.frame = 0;
                    _this.scene1_answers_array.push(String('.'));
                    _this.celebrate();
                    _this.showfractionbox(390, _this.row_height);
                    _this.rightbtn.inputEnabled = true;
                }
                else {
                    console.log("wrong ans selected")
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
                    console.log("wrong ans selected")
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
                    console.log("wrong ans selected")
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
                    _this.showfractionbox(295, _this.row_height);
                    _this.rightbtn.inputEnabled = true;

                }
                else {
                    console.log("wrong ans selected")
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
                    console.log("wrong ans selected")
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
                    console.log("wrong ans selected")
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
                    _this.sceneCount++;
                    this.display_scene(_this.sceneCount);
                }
                else {
                    console.log("wrong ans selected")
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

        //target.name is always a number, 
        //for 0, it's 0 (we set it to 0, initially it was 10)
        //for '.' it's 11

        if (_this.AnswerBox.name == '') {
            console.log("In numclicked function");
            console.log("target name passed to target", target.name);
            _this.clickSound.play();
            // var_selectedAns1 = " ";

            // _this.selectedAns1 = "";

            showntxt = target.name;

            if (target.name == 11) {
                showntxt = '.';
            }


            if (target.name == 10) {
                showntxt = 0;
                target.name = 0;
            }

            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.enterTxt.visible = false;

            _this.enterTxt = _this.add.text((target.name == 11 ? 18 : 14), 5, "" + showntxt, { fontSize: '30px' }); //WHen showing decimal ('.'), we need it in the center by giving x = 18.

            _this.applyingStyle(_this.enterTxt);
            _this.AnswerBox.addChild(_this.enterTxt);

            _this.AnswerBox.name = Number("" + target.name);

            _this.enterTxt.visible = true;
        }

        // _this.textBox_full = true;


    },
    applyingStyle: function (target) {
        if (target.name == 11) {
            console.log("padding 2px");
            // target.padding = '2px';
        }
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
    },

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        // _this.fourNotEntered = false;
        // _this.fouransLen = 0;
        // _this.finalval = "";
        // _this.dotselected = false;

        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.AnswerBox.frame = 1;

        _this.selectedAns1 = '';

        _this.AnswerBox.name = '';

    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);
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

    Initial_randomizing: function () {
        // Type 1: one decimal with a zero in the 1/100’s place
        // Type 2: normal question with no constraint
        // Type 3: whole number and a decimal
        // Include 2 questions without regrouping --- i = 5 and 6.
        // Include 4 questions with regroupings and carryovers respectively.
        _this.questionTypeArray = [1, 2, 3];
        _this.count_without_regrouping = 0;
        _this.count_with_regrouping = 0;
        _this.questionLeftArray = [];
        _this.questionRightArray = [];
        _this.i = 0;

        //Randomizing question values
        //For randomizing between a max number and a min:
        //Math.random() * (max - min) + min;
        //toFixed() is for rounding the number upto 2 decimal places

        //Generating 2 Questions of Type 1 : with 0 at 1/100th place
        for (_this.i = 1; _this.i <= 2; _this.i++) {
            _this.qflag = 1;
            _this.num1 = (Math.random() * (9.98 - 0.01) + 0.01).toFixed(2);
            _this.num2 = (Math.random() * (9.99 - _this.num1 - 0.01) + 0.01).toFixed(2);

            // _this.num2 = (Math.random() * (9.99 - 0.01) + 0.10).toFixed(2);

            if (_this.num1 > _this.num2) {
                // _this.num2  = Number(Number(_this.num2).toFixed(1)).toFixed(2);
                _this.num1 = Number.parseFloat(Number.parseFloat(_this.num1).toFixed(1)).toFixed(2);
            }
            else {
                _this.num2 = Number.parseFloat(Number.parseFloat(_this.num2).toFixed(1)).toFixed(2);
            }
            _this.Convert_to_with_regrouping(_this.num1, _this.num2);

            // console.log("Question No. " + _this.i + " with regrouping : " + _this.num1 + " + " + _this.num2);
            console.log("Question No. " + _this.i + " : " + _this.num1 + " + " + _this.num2);
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

        //todo: validation when 0 arrives
        //todo - fixed: carry over problem
        //todo - fixed: coin machine defect - coins don't drop when lever clicked faster - some cases


        //Generating 3 Questions of Type 2: with 2 decimal points, normal
        //Two with regrouping
        //One without regrouping --- i = 5
        for (_this.i = 3; _this.i <= 5; _this.i++) {
            _this.qflag = 2;
            _this.num1 = (Math.random() * (9.98 - 0.01) + 0.01).toFixed(2);
            _this.num2 = (Math.random() * (9.99 - _this.num1 - 0.01) + 0.01).toFixed(2);

            if (_this.i == 5) {
                _this.Convert_to_without_regrouping(_this.num1, _this.num2);
            }
            else {
                _this.Convert_to_with_regrouping(_this.num1, _this.num2);
            }
            console.log("Question No. " + _this.i + " : " + _this.num1 + " + " + _this.num2);
            _this.questionLeftArray.push(_this.num1);
            _this.questionRightArray.push(_this.num2);
        }
        ///////////////////////////////////////////////////////////////////////////////

        //Generating 1 Question with while number and a decimal
        _this.num1 = (Math.random() * (8.99 - 0.01) + 0.01).toFixed(2); //We can't get 9 at 1's place otherwise whatever we add to it it will exceed the limit and we can't add 0.
        // if(_this.num1.toFixed(0) == 9){
        //     _this.num2 = Number((Math.random() * (9.99 - _this.num1 - 1.00) + 1.00).toFixed(0)).toFixed(2);
        // }
        _this.firstDigit = Number(_this.num1).toFixed(0);

        if (_this.firstDigit > _this.num1) { //first digit is rounded up, else: rounded down, so do nothing
            _this.firstDigit -= 1;
        }

        _this.num2 = (Math.random() * (9 - _this.firstDigit - 1) + 1).toFixed(0); //1 as lower limit because otherwise it will also produce 0.00

        // _this.num2 = Math.trunc(number*100)/100


        // _this.num2 = Number((Math.random() * (9 - _this.firstDigit - 1) + 1).toFixed(0)).toFixed(2); //1 as lower limit because otherwise it will also produce 0.00

        //It's without regrouping by default
        console.log("Question No. 6 : " + _this.num1 + " + " + _this.num2);
        console.log('firstDigit', _this.firstDigit);
        console.log('num1', _this.num1);
        console.log('num2', _this.num2);

        _this.questionLeftArray.push(_this.num1);
        _this.questionRightArray.push(_this.num2);
        ///////////////////////////////////////////////////////////////////////////////

        console.log("Left Array: " + _this.questionLeftArray);
        console.log("Right Array: " + _this.questionRightArray);
    },

    Convert_to_without_regrouping: function (n1, n2) {
        //Coverting to regrouping numbers
        if (_this.count_without_regrouping < 2) {
            _this.count_without_regrouping++;

            arrNum1 = this.num_to_numArray(n1);
            arrNum2 = this.num_to_numArray(n2);

            for (var i = arrNum1.length; i > 0; i--) {
                if (arrNum1[i] + arrNum2[i] > 9) {
                    // console.log("sum>9 for " + arrNum1[i] + " and " + arrNum2[i]);
                    if (arrNum1[i] > arrNum2[i]) {
                        arrNum1[i] = 1; //if the sum of digits exceeds 9, i.e. avoiding regrouping
                    }
                    else {
                        arrNum2[i] = 1;
                    }
                }
            }

            // console.log("array num1 after setting 1s: " + arrNum1);
            // console.log("array num2 after setting 1s:: " + arrNum2);

            //Converting int array into a decimal number:
            var number1 = this.array_to_decimal(arrNum1);
            var number2 = this.array_to_decimal(arrNum2);
            _this.num1 = number1.toFixed(2);
            _this.num2 = number2.toFixed(2);
            console.log('num1', _this.num1);
            console.log('num2', _this.num2);
        }

    },
    Convert_to_with_regrouping: function (n1, n2) {
        if (_this.count_with_regrouping < 4) {
            _this.count_with_regrouping++;

            // console.log("n1: " + n1);

            arrNum1 = this.num_to_numArray(n1);
            arrNum2 = this.num_to_numArray(n2);

            // console.log("arrNum1: " + arrNum1);

            //We run for loop from 1/10th place to avoid the 1/100th place to be 
            //considered for regrouping in the case of Type1 questions (_this.i = 1 and 2)
            //so that the last number remains 0
            if (_this.i == 3 || _this.i == 4 || _this.i == 5) {
                length = arrNum1.length;
                // console.log(_this.i);
            }
            else {
                length = arrNum1.length - 2;
            }


            for (var i = length; i > 0; i--) {
                var num_to_add = 0;

                if (arrNum1[i] + arrNum2[i] < 9) {
                    // console.log("for i = ", _this.i, ":", arrNum1[i], arrNum2[i]);
                    // console.log("sum < 9 for i = " + i + " : " + arrNum1[i] + " and " + arrNum2[i]);
                    while ((arrNum1[i] + arrNum2[i] < 9) && (_this.num1 + _this.num2 < 9.99)) {
                        num_to_add++;
                        if (number1 > number2) {
                            arrNum2[i] += num_to_add;
                        }
                        else {
                            arrNum1[i] += num_to_add;
                        }
                    }
                    // if (number1 > number2) {
                    //     arrNum2[i] = 9; //if the sum is less than 9, change the current digit of smaller number
                    // }
                    // else {
                    //     arrNum1[i] = 9;
                    // }
                }
            }

            var number1 = this.array_to_decimal(arrNum1);
            var number2 = this.array_to_decimal(arrNum2);

            // console.log(arrNum1, arrNum2);
            // console.log(number1, number2) ;

            if (number1 + number2 > 9.99) {
                if (number1 > number2) {
                    // console.log("sum exceeded for ", _this.i, number1, number2)
                    arr = this.num_to_numArray(number1);
                    number1 -= arr[0];
                }
            }

            // console.log(_this.i, number1, number2);
            _this.num1 = number1.toFixed(2);
            _this.num2 = number2.toFixed(2);
            console.log('num1', _this.num1);
            console.log('num2', _this.num2);
        }
    },

    num_to_numArray: function (n) {
        sNum = n.toString();

        // console.log("string num1: " + sNum1);
        // console.log("string num2: " + sNum2);

        arrNum = [];

        for (var i = 0; i < 4; i++) {
            if (!isNaN(+sNum.charAt(i))) {
                arrNum.push(+sNum.charAt(i));
            }
        }

        // console.log("array num1: " + arrNum1);
        // console.log("array num2: " + arrNum2);

        return arrNum;
    },
    array_to_decimal: function (arr) {
        var num = 0;
        for (var j = 0, mul = 1; j < arr.length; j++, mul = mul / 10) {
            num += arr[j] * mul;

            // console.log("number 1: " + number1);
            // console.log("number 2: " + number2);
        }
        return num;
    },
    makeTableHeader2: function () {
        _this.hundred = _this.add.text(80, 15, '100')
        _this.applyingStyle2(_this.hundred)
        _this.table2.addChild(_this.hundred)

        _this.tens = _this.add.text(270, 15, '10')
        _this.applyingStyle2(_this.tens)
        _this.table2.addChild(_this.tens)

        _this.ones = _this.add.text(480, 15, '1')
        _this.applyingStyle2(_this.ones)
        _this.table2.addChild(_this.ones)

        _this.tenth1 = _this.add.text(630, 6, '1')
        _this.applyingStyle2(_this.tenth1)
        _this.tenth1.scale.setTo(0.9)
        _this.table2.addChild(_this.tenth1)

        _this.tenth2 = _this.add.graphics();
        _this.tenth2.lineStyle(3, 0x808080);
        _this.tenth2.moveTo(625, 33);
        _this.tenth2.lineTo(654, 33);
        _this.table2.addChild(_this.tenth2)

        _this.tenth3 = _this.add.text(625, 33, '10')
        _this.applyingStyle2(_this.tenth3)
        _this.tenth3.scale.setTo(0.9)
        _this.table2.addChild(_this.tenth3)
    },

    onDragStart: function (target) {
        _this.clickSound.play();
        // _this.glow_orange.destroy();
        //console.log("target name=="+target.name);
    },

    onDragStop: function (target) {
        _this.snapSound.play();
        console.log(target.name);

        if (target.name == _this.lever1.name) {
            if (_this.checkOverlap(target, _this.lever1)) {

                target.x = 540 - 90;
                target.y = 220;

                _this.CashOut.play();
                console.log("overlapped and matched lever 1");
                _this.bundle1Dragged = true;
                _this.glow_orange.destroy();

                // _this.Coin1_position2.destroy();
                var rev_array_frame = [];
                for (let i = 0; i <= 40; i++) {
                    rev_array_frame.push(i);
                }

                var Coin1_position2_reverse_anim = _this.Coin1_position2.animations.add('orange_coin_anim', rev_array_frame);
                Coin1_position2_reverse_anim.play(30);
                console.log("Coin1_position2_reverse_anim");
                Coin1_position2_reverse_anim.onComplete.add(function () {

                    // _this.CashOut.stop();
                    _this.CoinDrop.play();

                    coinset = "full";

                });

                var timeout5 = setTimeout(function () {
                    // var frame1 = 40 - 4 * _this.frame_coin2_index; //frame_coin1_index shows the number of coins appearing on the screen.
                    // var frame2 = 40 - (4 * (1 + _this.frame_coin2_index));

                    // var frame_array = [];

                    // for (let i = frame1; i >= frame2; i--) {
                    //     frame_array.push(i);
                    // }
                    // // console.log("frame1: ", frame1, "frame2: ", frame2, "frame_array: ", frame_array);
                    // _this.one_coin2_drop_anim = _this.Coin2_anim.animations.add('play', frame_array);
                    // _this.one_coin2_drop_anim.play(15);

                    // _this.frame_coin2_index++;
                    // _this.coins2_shown++;

                    _this.after_taking_carry_orange = 1; //using _this.after_taking_carry as a flag for telling the Lever2clicked function to run accoidingly if we just need 1 coin adding animation.
                    _this.Lever2Clicked();
                    _this.after_taking_carry_orange = 0;
                }, 1500);

                if ((_this.num2_bottom == 0 && _this.bundle1Created == true && _this.bundle1Dragged == true)) {
                    if ((_this.num3_bottom == 0 && _this.drag_remaining == 0 && _this.bundle1Created == true && _this.bundle1Dragged == true)) {

                        console.log("_this.num3_bottom = 0");
                        _this.print_inputBox_counter();
                        _this.lever2.inputEnabled = false;
                        //_this.lever2.input.useHandCursor = false;
                    }
                    else {
                        console.log("_this.num2_bottom = 0");
                        _this.lever2.inputEnabled = false;
                        // _this.lever2.input.useHandCursor = false;

                        _this.lever3.inputEnabled = true;
                        _this.lever3.input.useHandCursor = true;
                        _this.lever3.events.onInputDown.add(_this.Lever3Clicked, _this);
                        _this.coins3_shown = _this.frame_coin3_index;

                    }
                }

                if (timeout5) {
                    console.log("inside timeout5");
                    _this.lever2.inputEnabled = true;
                    _this.lever2.input.useHandCursor = true;
                    _this.coins2_shown = _this.frame_coin2_index;
                    _this.lever2.events.onInputDown.add(_this.Lever2Clicked, _this);
                }
            }
            else {
                target.x = 540 - 90;
                target.y = 220;
            }
        }
        else if (target.name == _this.lever2.name) {

            if (_this.checkOverlap(target, _this.lever2)) {
                target.x = 328 - 90;
                target.y = 220;

                _this.CashOut.play();
                console.log("overlapped and matched");
                _this.bundle2Dragged = true;
                _this.glow_green.destroy();
                _this.drag_remaining = 0;

                // _this.Coin1_position2.destroy();
                var rev_array_frame = [];
                for (let i = 0; i <= 40; i++) {
                    rev_array_frame.push(i);
                }

                var Coin2_position2_reverse_anim = _this.Coin2_position2.animations.add('green_coin_anim', rev_array_frame);
                Coin2_position2_reverse_anim.play(30);
                console.log("Coin2_position2_reverse_anim");
                Coin2_position2_reverse_anim.onComplete.add(function () {

                    // _this.CashOut.stop();
                    _this.CoinDrop.play();

                    coinset = "full";

                });

                var timeout6 = setTimeout(function () {
                    // var frame1 = 40 - 4 * _this.frame_coin3_index; //frame_coin1_index shows the number of coins appearing on the screen.
                    // var frame2 = 40 - (4 * (1 + _this.frame_coin3_index));

                    // var frame_array = [];

                    // for (let i = frame1; i >= frame2; i--) {
                    //     frame_array.push(i);
                    // }
                    // // console.log("frame1: ", frame1, "frame2: ", frame2, "frame_array: ", frame_array);
                    // _this.one_coin3_drop_anim = _this.Coin3_anim.animations.add('play', frame_array);
                    // _this.one_coin3_drop_anim.play(15);

                    // _this.frame_coin3_index++;

                    _this.after_taking_carry_green = 1; //using _this.after_taking_carry as a flag for telling the Lever2clicked function to run accoidingly if we just need 1 coin adding animation.
                    _this.Lever3Clicked();
                    _this.after_taking_carry_green = 0;

                }, 1500);

                if (timeout6 && _this.num3_bottom == 0 && _this.drag_remaining == 0 && _this.bundle2Created == true && _this.bundle2Dragged == true) {
                    console.log("_this.num3_bottom = 0");
                    _this.lever3.inputEnabled = false;
                    //_this.lever3.input.useHandCursor = false;
                    _this.print_inputBox_counter();
                    timeout6 = 0;
                }
                if (timeout6) {
                    _this.lever3.inputEnabled = true;
                    _this.lever3.input.useHandCursor = true;

                    console.log("Entering lever3 from check_sum2");
                    _this.lever3.events.onInputDown.add(_this.Lever3Clicked, _this);
                    _this.coins3_shown = _this.frame_coin3_index;
                }
            }
            else {
                target.x = 328 - 90;
                target.y = 220;
            }


            // if (_this.num3_bottom == 0 && _this.bundle2Created == true && _this.bundle2Dragged == true) {

            //     console.log("_this.num3_bottom = 0");

            //     _this.lever3.inputEnabled = false;
            //     _this.lever3.input.useHandCursor = false;

            //     _this.print_inputBox_counter();
            // }
        }
    },

    checkOverlap: function (spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },

    eraseScreen: function () {
        _this.panel1.destroy();
        _this.four_color_box1.destroy();
        _this.four_color_box2.destroy();
        _this.four_color_box.destroy();
        _this.plus_sign.destroy();
        _this.ques_plus_sign.destroy();
        _this.question_box.destroy();
        _this.left_eqn_text.destroy();
        _this.right_eqn_text.destroy();
        _this.ques_plus_sign.destroy();
        _this.plus_sign.destroy();
        _this.equal_sign.destroy();
        _this.plus_sign_counter.destroy();
        _this.counter_top_texts.destroy();
        _this.counter_bottom_texts.destroy();
        _this.counterGroup.destroy();
        _this.scene1_answers_array = [];
        _this.scene3_answers_array = [];
        _this.carry = 0;


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

        _this.square_box_Group.destroy();
        _this.square_box_Group2.destroy();
        _this.square_box_Group3.destroy();
        _this.numGroup.destroy();

    },

    applyingStyle2: function (target) {

        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fontWeight = 'normal';
        target.visible = true;
    },

    nextquestion: function () {
        if (_this.count1 < 6) {
            //  _this.enterFractionBox1.frame = 1;
            //  _this.enterFractionBox2.frame = 0;
            _this.qflag = 1;
            _this.row = 1;
            _this.Question_flag = 1;
            _this.change_row_height();
            _this.sceneCount = 1;
            _this.answer_flag = 1;
            _this.bundle1Created = false;
            _this.bundle1Dragged = false;
            _this.bundle2Created = false;
            _this.bundle2Dragged = false;
            _this.time.events.add(1000, function () {
                _this.display_scene(_this.sceneCount);
            });
        }
        else {
            _this.timer1.stop();
            _this.timer1 = null;
            _this.time.events.add(1000, function () {
                //_this.state.start('score');
                _this.state.start('score', true, false,gameID,_this.microConcepts);
            });
        }
    },

    celebration: function () {
        //_this.numGroup.destroy();
        _this.celebrationSound.play();
        _this.starActions(_this.count1);
    },

    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        //_this.anim.play();

        // //*star action changes
        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NSD_5A_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Decimals";
    _this.microConcepts = "Number Systems";

        _this.count1++;
        anim.play();
    },


    DemoVideo: function () {
        //*  In this game, we will add decimal numbers using a coin machine.
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NSD-5A-G6/" + _this.languageSelected + "/DV-NSD-5A-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* Enter the numbers given in the question in the correct place values.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-5A-G6/" +
            _this.languageSelected + "/NSD-5A-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Add the given numbers using the coin machine.
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-5A-G6/" +
            _this.languageSelected + "/NSD-5A-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* Type the answer in the place value chart.
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NSD-5A-G6/" +
            _this.languageSelected + "/NSD-5A-G6C.mp3");
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
        _this.demoVideo_1 = _this.add.video('nsd5a_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NSD-5A-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        //* play the demo audio1 
        _this.demoAudio1.play();

        _this.q1Timer = setTimeout(function ()    //* q1 js timer to play q1Timer after 8 seconds.
        {
            console.log("inside Qa1sound.....");
            _this.demoVideo_1.playbackRate = 1.2;
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 8000);

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 33 seconds.
        {
            console.log("inside q2sound.....");
            _this.demoVideo_1.playbackRate = 1;
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 30000);

        _this.q3Timer = setTimeout(function ()    //* q3 js timer to play q3Timer after 1.16 min.
        {
            console.log("inside q3sound.....")
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 72000);

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



