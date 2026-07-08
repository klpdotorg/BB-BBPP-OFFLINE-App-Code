Game.ALS_01_MCQ_G6level1 = function () { };


Game.ALS_01_MCQ_G6level1.prototype =
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

        _this.puffSound = document.createElement('audio');
        _this.puffSoundsrc = document.createElement('source');
        _this.puffSoundsrc.setAttribute("src", window.baseUrl + "sounds/Bubble Burst.mp3");
        _this.puffSound.appendChild(_this.puffSoundsrc);

        _this.dropSound = document.createElement('audio');
        _this.dropSoundsrc = document.createElement('source');
        _this.dropSoundsrc.setAttribute("src", window.baseUrl + "sounds/goingdown.mp3");
        _this.dropSound.appendChild(_this.dropSoundsrc);


        _this.bubbleSound = document.createElement('audio');
        _this.bubbleSoundsrc = document.createElement('source');
        _this.bubbleSoundsrc.setAttribute("src", window.baseUrl + "sounds/WaterBubbling.mp3");
        _this.bubbleSound.appendChild(_this.bubbleSoundsrc);

        _this.Ask_Question1 = _this.createAudio("ALS-01-MCQ-G6A");
        _this.Ask_Question2 = _this.createAudio("ALS-01-MCQ-G6B");
        _this.Ask_Question3 = _this.createAudio("ALS-01-MCQ-G6C");
        _this.Ask_Question4 = _this.createAudio("ALS-01-MCQ-G6D");

        telInitializerbbpp.gameIdInit("ALS_01_G6", gradeSelected);
        console.log(gameID,"gameID...");
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
        _this.count = 0;
        //_this.in;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        // //*  User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
       _this.microConcepts;
        // _this.grade;

        _this.hint_flag = 0;// * hint flag zero
        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.Question_flag = -1;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.QType = [1, 2, 1, 2, 1, 2]
        _this.shuffle(_this.QType)

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        //** include the background file, navigation bar, stars, timer objects.
        _this.background2 = _this.add.tileSprite(0, -45, _this.world.width, _this.world.height, 'bg');
        _this.background3 = _this.add.tileSprite(0, -10, _this.world.width, _this.world.height, 'bg');
        if (_this.QType[0] == 1) {
            _this.background2.bringToTop();
        }
        else {
            _this.background3.bringToTop();

        }

        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
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
                else if (_this.Question_flag == 3) {
                    _this.Ask_Question3.play();
                } else if (_this.Question_flag == 4) {
                    _this.Ask_Question4.play();
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

        _this.generateStarsForTheScene(6);

        //* include variables for use - objGroup (where egg objects can be added)
        _this.objGroup;
        _this.numGroup;
        // 1 - Type 1 ques  2- Type 2 ques 1st ques to be type 1

        _this.firstType1 = false
        _this.firstType2 = false

        _this.type21demoshown = false;
        _this.type22demoshown = false;
        _this.type1demoshown = false;


        _this.BlueFishPositionArray_X = [75 - 28, 145 - 35, 215 - 40, 285 - 45];
        _this.FishPositionArray_y = [90 + 20, 130 + 20, 170 + 20, 210 + 20, 250 + 20];
        // _this.FishPositionArray_y = [250, 210, 170, 130, 90];

        _this.RedFishPositionArray_X = [595 + 70, 665 + 65, 735 + 60, 805 + 60];

        _this.AnsFishPositionArray_X = [350, 418, 488, 558];
        _this.AnsFishPositionArray_Y = [250, 210, 170, 130, 90]


        _this.ValueZArray = [];
        _this.ValueYArray = [];
        _this.ValueXArray = [];


        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);
    },
    showMappingDemo: function () {
        _this.bubbleSound.play();
        _this.type1demoshown = true;

        fish = _this.RedFishGroup.getChildAt(0);
        _this.hand = _this.add.image(fish.x + 20, fish.y + 30, 'hand')
        _this.hand.scale.setTo(0.55);
        // _this.puffSound.play();
        _this.time.events.add(400, () => {
            _this.hand.scale.setTo(0.5);
            fish.scale.setTo(1.1);
            _this.time.events.add(400, () => {
                _this.hand.scale.setTo(0.6);
                fish.scale.setTo(1);
                _this.time.events.add(450, () => {
                    _this.hand.destroy();
                })
            })

        })

    },
    showtank1ClickigDemo: function () {

        _this.type21demoshown = true;

        _this.hand = _this.add.image(_this.aquiriumBoxA.x + 200, 310, 'hand')
        _this.hand.scale.setTo(0.65);
        _this.time.events.add(400, () => {
            _this.hand.scale.setTo(0.6);
            _this.time.events.add(400, () => {
                _this.hand.scale.setTo(0.65);
                _this.time.events.add(450, () => {
                    _this.hand.destroy();
                })
            })

        })

    },
    showtank2ClickingDemo: function () {
        _this.type22demoshown = true;

        _this.hand = _this.add.image(_this.aquiriumBox2.x + 200, 310, 'hand')
        _this.hand.scale.setTo(0.65);
        _this.time.events.add(400, () => {
            _this.hand.scale.setTo(0.6);
            _this.time.events.add(400, () => {
                _this.hand.scale.setTo(0.65);
                _this.time.events.add(450, () => {
                    _this.hand.destroy();
                })
            })

        })
    },
    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/ALS-01-MCQ-G6/" + _this.languageSelected + "/" + src + ".mp3");
        audio.appendChild(audiosrc);
        // audio.play();

        return audio;
    },
    // Ask_Question1: function () {
    //     _this.Question1 = document.createElement('audio');
    //     _this.Question1src = document.createElement('source');
    //     _this.Question1src.setAttribute("src",  window.baseUrl+ "questionSounds/ALS-01-G6/English/V1.mp3");
    //     _this.Question1.appendChild(_this.Question1src);
    //     _this.Question1.play();

    // },
    // Ask_Question2: function () {
    //     _this.Question2 = document.createElement('audio');
    //     _this.Question2src = document.createElement('source');
    //     _this.Question2src.setAttribute("src",  window.baseUrl+ "questionSounds/ALS-01-G6/English/V2.mp3");
    //     _this.Question2.appendChild(_this.Question2src);
    //     _this.Question2.play();
    // },
    // Ask_Question3: function () {
    //     _this.Question3 = document.createElement('audio');
    //     _this.Question3src = document.createElement('source');
    //     _this.Question3src.setAttribute("src",  window.baseUrl+ "questionSounds/ALS-01-G6/English/V3.mp3");
    //     _this.Question3.appendChild(_this.Question3src);
    //     _this.Question3.play();
    // },
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
        //timer.setText(minutes + ':'+ seconds );
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

    getQuestion: function (target) {
        _this.sceneCount++;
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


        // _this.randomizing_elements2();
        _this.StoreArrayValues();

        _this.RandomizingTypes();

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
            //_this.VoiceNote1src = null;
        }
        if (_this.Ask_Question2) {
            _this.Ask_Question2.pause();
            _this.Ask_Question2 = null;
            //_this.VoiceNote1src = null;
        }
        if (_this.Ask_Question3) {
            _this.Ask_Question3.pause();
            _this.Ask_Question3 = null;
            //_this.VoiceNote1src = null;
        }
        if (_this.Ask_Question4) {
            _this.Ask_Question4.pause();
            _this.Ask_Question4 = null;
            //_this.VoiceNote1src = null;
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
    makeRedAquariumBox: function () {
        _this.graphicsImg = _this.add.graphics();
        _this.graphicsImg.beginFill(0xFF0000, 1)
        _this.graphicsImg.drawRect(35, 120, 68 * 4, 57 * 4);
    },
    showPart1Boxes: function (addvar) {
        _this.TextBox1 = _this.add.image(130, 330 + addvar, 'Text box_1');
        _this.TextBox1.scale.setTo(0.9);
        if (_this.QType[_this.count1] == 1) {
            if (_this.ValueXArray[_this.count1] > 9) {
                _this.ValuOfX = _this.add.text(23, 20, _this.ValueXArray[_this.count1]);

            }
            else {
                _this.ValuOfX = _this.add.text(30, 20, _this.ValueXArray[_this.count1]);

            }
            _this.ValuOfX.fill = '#65B4C3';

        }
        else {
            _this.ValuOfX = _this.add.text(30, 18, "a");
            _this.ValuOfX.fill = '#FF0000';

        }

        _this.TextBox1.addChild(_this.ValuOfX);

        _this.minusSign = _this.add.text(32, 20, '-')
        _this.minusSign.fill = '#65B4C3';
        _this.minusSignBox = _this.add.image(290, 330 + addvar, 'Text box_1');
        _this.minusSignBox.addChild(_this.minusSign);
        _this.minusSignBox.scale.setTo(0.9)


        _this.TextBox2 = _this.add.image(440, 330 + addvar, 'Text box_1');
        _this.TextBox2.scale.setTo(0.9);
        if (_this.QType[_this.count1] == 1) {

            _this.ValuOfA = _this.add.text(31, 18, "a");
            _this.ValuOfA.fill = '#FF0000';
        }
        else {
            if (_this.ValueXArray[_this.count1] > 9) {
                _this.ValuOfA = _this.add.text(23, 20, _this.ValueXArray[_this.count1]);

            }
            else {
                _this.ValuOfA = _this.add.text(30, 20, _this.ValueXArray[_this.count1]);

            }
            _this.ValuOfA.fill = '#65B4C3';

        }
        _this.TextBox2.addChild(_this.ValuOfA);

        var a = _this.add.text(31, 20, 'a');
        a.fill = "#FF0000"
        var equal = _this.add.text(60, 22, '=');
        equal.fill = "#65B4C3"
        _this.whiteAnswerBox = _this.add.image(90, 16, 'white-box')
        _this.AnswerBox = _this.add.image(410, 400 + addvar, 'Text box_3');
        _this.AnswerBox.addChild(a);
        _this.AnswerBox.addChild(equal);
        _this.AnswerBox.addChild(_this.whiteAnswerBox)
        _this.AnswerBox.visible = false;

        if (_this.ValueYArray[_this.count1] > 9) {
            _this.ValueOfY = _this.add.text(23, 20, _this.ValueYArray[_this.count1]);
        }
        else {
            _this.ValueOfY = _this.add.text(30, 20, _this.ValueYArray[_this.count1]);
        }
        // _this.ValueOfY.fontSize = "32px";
        _this.ValueOfY.fill = '#65B4C3';

        _this.EqualSign = _this.add.text(30, 22, '=');
        _this.EqualSign.fill = '#65B4C3';
        _this.EqualSignBox = _this.add.image(600, 330 + addvar, 'Text box_1');
        _this.EqualSignBox.addChild(_this.EqualSign);
        _this.EqualSignBox.scale.setTo(0.9)

        _this.TextBox3 = _this.add.image(755, 330 + addvar, 'Text box_1');
        _this.TextBox3.scale.setTo(0.9)
        _this.TextBox3.addChild(_this.ValueOfY);
    },
    makeAquariumBoxes: function (addvar) {
        //* three aquirium Box
        _this.aquiriumBox1 = _this.add.image(30, 80 + addvar, 'aquiriumBox');
        _this.aquiriumBox1.scale.setTo(0.75, 1)
        _this.Plant_1 = _this.add.image(80, 255 + addvar, 'Plant');
        _this.Grass_2_1 = _this.add.image(220, 225 + addvar, 'Grass_2');
        _this.image11_anim = _this.Grass_2_1.animations.add('draw');
        _this.image11_anim.play(15);
        _this.image11_anim.onComplete.add(function () {
            _this.image11_anim.play(15);

        }, _this);
        _this.Grass_1_2 = _this.add.sprite(305, 168 + addvar, 'Grass_1');
        _this.Grass_1_2.frame = 0;
        _this.image12_anim = _this.Grass_1_2.animations.add('draw');
        _this.image12_anim.play(15);
        _this.image12_anim.onComplete.add(function () {

            _this.image12_anim.play(15);


        }, _this);

        _this.Grass_1_1 = _this.add.sprite(35, 180 + addvar, 'Grass_1');
        _this.Grass_1_1.frame = 0;
        _this.image13_anim = _this.Grass_1_1.animations.add('draw');
        _this.image13_anim.play(15);
        _this.image13_anim.onComplete.add(function () {
            // _this.drawingsound.pause()
            // _this.image5.frame = 17;
            _this.image13_anim.play(15);
        }, _this);
        _this.Grass_1_2.scale.x *= -1;
        _this.sand1 = _this.add.sprite(34, 295 + addvar, 'sand');
        _this.sand1.scale.setTo(0.755, 1)


        _this.aquiriumBoxA = _this.add.image(340, 80 + addvar, 'aquiriumBox');
        _this.aquiriumBoxA.scale.setTo(0.75, 1)
        _this.Plant_A = _this.add.image(390, 255 + addvar, 'Plant');
        _this.Grass_2_A = _this.add.image(530, 225 + addvar, 'Grass_2');
        _this.image21_anim = _this.Grass_2_A.animations.add('draw');
        _this.image21_anim.play(15);
        _this.image21_anim.onComplete.add(function () {
            _this.image21_anim.play(15);

        }, _this);
        _this.Grass_1_2A = _this.add.sprite(615, 168 + addvar, 'Grass_1');
        _this.Grass_1_2A.frame = 0;
        _this.image22_anim = _this.Grass_1_2A.animations.add('draw');
        _this.image22_anim.play(15);
        _this.image22_anim.onComplete.add(function () {

            _this.image22_anim.play(15);


        }, _this);
        _this.Grass_1_1A = _this.add.sprite(345, 180 + addvar, 'Grass_1');
        _this.Grass_1_1A.frame = 0;

        _this.image23_anim = _this.Grass_1_1A.animations.add('draw');
        _this.image23_anim.play(15);
        _this.image23_anim.onComplete.add(function () {
            // _this.drawingsound.pause()
            // _this.image5.frame = 17;
            _this.image23_anim.play(15);

        }, _this);
        _this.Grass_1_2A.scale.x *= -1;
        _this.sandA = _this.add.sprite(344, 295 + addvar, 'sand');
        _this.sandA.scale.setTo(0.755, 1)
        // _this.image51 = _this.add.sprite(390,95,'bubbles')

        _this.aquiriumBox2 = _this.add.image(650, 80 + addvar, 'aquiriumBox');
        _this.aquiriumBox2.scale.setTo(0.75, 1)
        _this.Plant_2 = _this.add.image(835, 248 + addvar, 'Plant');
        _this.Grass_2_2 = _this.add.image(680, 223 + addvar, 'Grass_2');
        _this.image31_anim = _this.Grass_2_2.animations.add('draw');
        _this.image31_anim.play(15);
        _this.image31_anim.onComplete.add(function () {
            _this.image31_anim.play(15);

        }, _this);
        _this.Grass_1_3 = _this.add.sprite(654, 180 + addvar, 'Grass_1');
        _this.Grass_1_3.frame = 0;
        _this.image32_anim = _this.Grass_1_3.animations.add('draw');
        _this.image32_anim.play(15);
        _this.image32_anim.onComplete.add(function () {

            _this.image32_anim.play(15);


        }, _this);
        _this.Grass_1_4 = _this.add.sprite(925, 168 + addvar, 'Grass_1');
        _this.Grass_1_4.frame = 0;
        _this.image33_anim = _this.Grass_1_4.animations.add('draw');
        _this.image33_anim.play(15);
        _this.image33_anim.onComplete.add(function () {
            // _this.drawingsound.pause()
            // _this.image5.frame = 17;
            _this.image33_anim.play(15);

        }, _this);
        _this.Grass_1_4.scale.x *= -1;
        _this.sand2 = _this.add.sprite(654, 295 + addvar, 'sand');
        _this.sand2.scale.setTo(0.755, 1)

    },
    bubblesAnimation1: function () {
        // 390 95
        _this.imageb11 = _this.add.sprite(90, 95, 'bubbles')
        _this.imageb11_anim = _this.imageb11.animations.add('draw');
        _this.imageb11_anim.play(15);
        // _this.showBubbles(345, 150);

        _this.imageb11_anim.onComplete.add(function () {
            _this.imageb11_anim.play(15);
        }, _this);

        _this.imageb21 = _this.add.sprite(480 - 300, 75, 'bubbles')
        _this.imageb21_anim = _this.imageb21.animations.add('draw');
        _this.imageb21_anim.play(30);
        _this.imageb21_anim.onComplete.add(function () {
            // _this.drawingsound.pause()
            _this.imageb21.frame = 17;
            _this.imageb21_anim.play(30);

        }, _this);

        _this.imageb31 = _this.add.sprite(550 - 300, 95, 'bubbles')
        _this.imageb31_anim = _this.imageb31.animations.add('draw');
        _this.imageb31_anim.play(20);
        _this.imageb31_anim.onComplete.add(function () {
            // _this.drawingsound.pause()
            _this.imageb31.frame = 17;
            _this.imageb31_anim.play(20);

        }, _this);
    },
    bubblesAnimation2: function () {
        // 390 95
        _this.imageb1 = _this.add.sprite(390, 95, 'bubbles')
        _this.imageb1_anim = _this.imageb1.animations.add('draw');
        _this.imageb1_anim.play(20);
        // _this.showBubbles(345, 150);

        _this.imageb1_anim.onComplete.add(function () {
            _this.imageb1_anim.play(20);
        }, _this);


        _this.imageb2 = _this.add.sprite(480, 75, 'bubbles')
        _this.imageb2_anim = _this.imageb2.animations.add('draw');
        _this.imageb2_anim.play(15);
        _this.imageb2_anim.onComplete.add(function () {
            // _this.drawingsound.pause()
            _this.imageb2.frame = 17;
            _this.imageb2_anim.play(15);

        }, _this);

        _this.imageb3 = _this.add.sprite(550, 95, 'bubbles')
        _this.imageb3_anim = _this.imageb3.animations.add('draw');
        _this.imageb3_anim.play(36);
        _this.imageb3_anim.onComplete.add(function () {
            // _this.drawingsound.pause()
            _this.imageb3.frame = 17;
            _this.imageb3_anim.play(36);

        }, _this);
    },
    bubblesAnimation3: function () {
        // 390 95
        _this.imageb13 = _this.add.sprite(390 + 300, 95, 'bubbles')
        _this.imageb13_anim = _this.imageb13.animations.add('draw');
        _this.imageb13_anim.play(19);
        // _this.showBubbles(345, 150);

        _this.imageb13_anim.onComplete.add(function () {
            _this.imageb13_anim.play(19);
        }, _this);

        _this.imageb23 = _this.add.sprite(480 + 300, 75, 'bubbles')
        _this.imageb23_anim = _this.imageb23.animations.add('draw');
        _this.imageb23_anim.play(25);
        _this.imageb23_anim.onComplete.add(function () {
            // _this.drawingsound.pause()
            _this.imageb23.frame = 17;
            _this.imageb23_anim.play(25);

        }, _this);

        _this.imageb33 = _this.add.sprite(550 + 300, 95, 'bubbles')
        _this.imageb33_anim = _this.imageb33.animations.add('draw');
        _this.imageb33_anim.play(15);
        _this.imageb33_anim.onComplete.add(function () {
            // _this.drawingsound.pause()
            _this.imageb33.frame = 17;
            _this.imageb33_anim.play(15);

        }, _this);
    },
    StoreArrayValues: function () {
        // if (_this.count1 == 0) {
        rightValueX = 0;
        rightValueY = 0
        rightValueZ = 0
        ValueXArray = [];
        ValueYArray = [];
        ValueZArray = [];

        for (let i = 0; i < 3; i++) {
            rightValueZ = Math.floor(Math.random() * (8 - 1) + 1);
            for (var j = 0; j <= i - 1; j++) {
                if (rightValueZ == ValueZArray[j]) {
                    rightValueZ = Math.floor(Math.random() * (8 - 1) + 1);
                    j = 0;
                }
            }
            ValueZArray.push(rightValueZ);

            rightValueY = Math.floor(Math.random() * (20 - rightValueZ) + 1);
            for (j = 0; j <= i - 1; j++) {
                if (rightValueY == ValueYArray[j]) {
                    rightValueY = Math.floor(Math.random() * (20 - rightValueZ) + 1);
                    j = 0;
                }
            }
            ValueYArray.push(rightValueY);

            //* Finding X here
            leftValueX = rightValueZ + rightValueY;
            ValueXArray.push(leftValueX);

        }

        for (let i = 3; i < 6; i++) {
            rightValueY = Math.floor(Math.random() * (8 - 1) + 1);
            for (j = 3; j <= i - 1; j++) {
                if (rightValueY == ValueYArray[j]) {
                    rightValueY = Math.floor(Math.random() * (8 - 1) + 1);
                    j = 0;
                }
            }
            ValueYArray.push(rightValueY);


            rightValueX = Math.floor(Math.random() * (20 - 2 * rightValueY) + rightValueY + 1);
            for (var j = 3; j <= i - 1; j++) {
                if (rightValueX == ValueXArray[j]) {
                    rightValueX = Math.floor(Math.random() * (20 - 2 * rightValueY) + rightValueY + 1);
                    j = 0;
                }
            }
            ValueXArray.push(rightValueX);

            //* Finding X here
            leftValueZ = rightValueX + rightValueY;
            ValueZArray.push(leftValueZ);

        }
        // _this.ValueXArray.push(ValueXArray[0])
        // _this.ValueYArray.push(ValueYArray[0])
        // _this.ValueZArray.push(ValueZArray[0])
        type1 = 0;
        type2 = 0;
        _this.firstType1 = false;
        _this.firstType2 = false;

        for (i = 0; i < 6; i++) {
            if (_this.QType[i] == 1) {
                _this.ValueXArray.push(ValueXArray[0 + type1])
                _this.ValueYArray.push(ValueYArray[0 + type1])
                _this.ValueZArray.push(ValueZArray[0 + type1])
                if (_this.firstType1 == false) {
                    _this.firstType1 = true

                }
                type1 += 1;
            }
            else {
                _this.ValueXArray.push(ValueXArray[3 + type2])
                _this.ValueYArray.push(ValueYArray[3 + type2])
                _this.ValueZArray.push(ValueZArray[3 + type2])
                if (_this.firstType2 == false) {
                    _this.firstType2 = true


                }
                type2 += 1;
            }
        }

    },
    RandomizingTypes: function () {
        _this.sceneCount++;
        _this.AnsTimerCount = 0;
        _this.noofAttempts = 0;

        if (_this.QType[_this.count1] == 1) {

            _this.randomizing_elements();
            console.log("type 1")
        }
        else {

            _this.randomizing_elements2();
            console.log("type 2")
        }
    },
    randomizing_elements2: function () {
        _this.bubblesGrp = _this.add.group();
        if (_this.count1 == 0) {
            _this.Ask_Question1.play();
        }
        _this.Question_flag = 1;
        _this.bubblesAnimation2();
        _this.bubblesAnimation3();

        _this.makeAquariumBoxes(30);
        _this.makeRedAquariumBox();

        _this.BlueFishPositionArray_X = [75 - 28, 145 - 35, 215 - 40, 285 - 45];
        _this.FishPositionArray_y = [90 + 30, 130 + 30, 170 + 30, 210 + 30, 250 + 30];
        _this.RedFishPositionArray_X = [595 + 70, 665 + 65, 735 + 60, 805 + 60];

        _this.AnsFishPositionArray_X = [350, 418, 488, 558];
        _this.AnsFishPositionArray_Y = [250 + 30, 210 + 30, 170 + 30, 130 + 30, 90 + 30]

        _this.showPart1Boxes(30);

        _this.placingRedFish(_this.ValueZArray[_this.count1]);
        _this.world.bringToTop(_this.graphicsImg)

    },
    randomizing_elements: function () {
        _this.bubblesGrp = _this.add.group();
        if (_this.count1 == 0) {
            _this.Ask_Question4.play();
        }
        _this.Question_flag = 4;
        _this.bubblesAnimation1();
        _this.bubblesAnimation2();
        _this.bubblesAnimation3();

        _this.similarFontGrp = _this.add.group();

        _this.makeAquariumBoxes(0);
        _this.BlueFishPositionArray_X = [75 - 28, 145 - 35, 215 - 40, 285 - 45];
        _this.FishPositionArray_y = [90 + 10, 130 + 10, 170 + 10, 210 + 10, 250 + 10];
        _this.RedFishPositionArray_X = [595 + 70, 665 + 65, 735 + 60, 805 + 60];
        _this.AnsFishPositionArray_X = [350, 418, 488, 558];
        _this.AnsFishPositionArray_Y = [250, 210, 170, 130, 90]

        _this.showPart1Boxes(0);
        _this.placingBlueFish(_this.ValueXArray[_this.count1]);
        _this.placingRedFish_And_Evaluation(_this.ValueYArray[_this.count1]);

        // _this.CallingMCQFn();
        if (_this.firstType1 == true && _this.type1demoshown != true) {
            _this.time.events.add(1000, _this.showMappingDemo)
            // _this.showMappingDemo();
        }
        _this.fishLoop = 0;
        _this.redfishnewanim();
        _this.bluefishnewanim();

    },

    placingBlueFish: function (valueOfX) {
        _this.BlueFishGroup = _this.add.group();
        _this.BlueFishGroup2 = _this.add.group();

        var BlueFishCount = 0;
        _this.BlueFishNameArray = [];

        var reminder = valueOfX % 4;
        var qutient = valueOfX - reminder;
        var mainrow = qutient / 4;

        for (var i = 0; i < mainrow; i++) {
            for (j = 0; j < 4; j++) {
                _this.BlueFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X[j], _this.FishPositionArray_y[i], 'bluefishanim');
                _this.BlueFishInAquirium.scale.setTo(0.9, 1);
                fish = _this.add.sprite(_this.BlueFishPositionArray_X[j], _this.FishPositionArray_y[i] - 10, 'BlueFish');
                fish.visible = false
                fish.scale.setTo(0.9, 1);

                if (i % 2 != 0) {
                    // Flip Fish
                    _this.BlueFishInAquirium.anchor.setTo(1, 0);
                    _this.BlueFishInAquirium.scale.x *= -1;

                    fish.anchor.setTo(1, 0);
                    fish.scale.x *= -1;
                }
                _this.BlueFishInAquirium.name = BlueFishCount;
                fish.name = BlueFishCount;

                _this.BlueFishNameArray.push(_this.BlueFishInAquirium.name);
                _this.BlueFishGroup.addChild(_this.BlueFishInAquirium);
                _this.BlueFishGroup2.addChild(fish);

                BlueFishCount++;
            }
        }

        if (valueOfX % 4 != 0) {
            if (_this.valueOfX < 4) {
                _this.GenerateRemaingBlueFish(0, reminder, BlueFishCount);
            }
            else {
                _this.GenerateRemaingBlueFish(mainrow, reminder, BlueFishCount);
            }
        }

    },
    placingRedFish: function (valueOfX) {
        _this.RedFishGroup = _this.add.group();
        var RedFishCount = 0;
        _this.RedFishNameArray = [];

        var reminder = valueOfX % 4;
        var qutient = valueOfX - reminder;
        var mainrow = qutient / 4;

        for (var i = 0; i < mainrow; i++) {
            for (j = 0; j < 4; j++) {
                _this.RedFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X[j], _this.FishPositionArray_y[i], 'orangefishanim');
                _this.RedFishInAquirium.scale.setTo(0.9, 1);

                _this.RedFishInAquirium.name = RedFishCount;
                _this.RedFishNameArray.push(_this.RedFishInAquirium.name);
                _this.RedFishGroup.addChild(_this.RedFishInAquirium);
                RedFishCount++;
            }
        }

        if (valueOfX % 4 != 0) {
            if (_this.valueOfX < 4) {
                _this.GenerateRemaingRedFish2(0, reminder, RedFishCount);
            }
            else {
                _this.GenerateRemaingRedFish2(mainrow, reminder, RedFishCount);
            }
        }
        _this.showTank1Jump();


    },
    GenerateRemaingRedFish2: function (row, quesion, RedFishCount) {
        for (k = 0; k < quesion; k++) {
            _this.RedFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X[k], _this.FishPositionArray_y[row], 'orangefishanim');
            _this.RedFishInAquirium.scale.setTo(0.9, 1);

            _this.RedFishInAquirium.name = RedFishCount;
            _this.RedFishNameArray.push(_this.RedFishInAquirium.name);
            _this.RedFishGroup.addChild(_this.RedFishInAquirium);
            RedFishCount++;
        }

    },
    GenerateRemaingBlueFish: function (row, quesion, BlueFishCount) {
        for (k = 0; k < quesion; k++) {

            _this.BlueFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X[k], _this.FishPositionArray_y[row], 'bluefishanim');
            _this.BlueFishInAquirium.scale.setTo(0.9, 1);
            fish = _this.add.sprite(_this.BlueFishPositionArray_X[k], _this.FishPositionArray_y[row] - 10, 'BlueFish');
            fish.visible = false
            fish.scale.setTo(0.9, 1);
            if (Math.floor(_this.BlueFishGroup.length / 4) % 2 != 0) {

                _this.BlueFishInAquirium.anchor.setTo(1, 0);
                _this.BlueFishInAquirium.scale.x *= -1;
                fish.anchor.setTo(1, 0);
                fish.scale.x *= -1;

            }
            _this.BlueFishInAquirium.name = BlueFishCount;
            fish.name = BlueFishCount;

            _this.BlueFishNameArray.push(_this.BlueFishInAquirium.name);
            _this.BlueFishGroup.addChild(_this.BlueFishInAquirium);
            _this.BlueFishGroup2.addChild(fish);

            BlueFishCount++;
        }

    },

    placingRedFish_And_Evaluation: function (valueOfY) {
        var RedFishCount = 0;
        _this.RedFishNameArray = [];
        _this.RedFishGroup = _this.add.group();
        _this.RedFishGroup2 = _this.add.group();

        var reminder = valueOfY % 4;  //3
        var qutient = valueOfY - reminder;//15
        var mainrow = qutient / 4;//3

        for (var i = 0; i < mainrow; i++) {
            for (j = 0; j < 4; j++) {
                _this.RedFishInaquarium = _this.add.sprite(_this.RedFishPositionArray_X[j], _this.FishPositionArray_y[i], 'orangefishanim');
                fish = _this.add.sprite(_this.RedFishPositionArray_X[j], _this.FishPositionArray_y[i] - 10, 'RedFish');
                fish.visible = false
                fish.scale.setTo(0.9, 1);

                _this.RedFishInaquarium.scale.setTo(0.9, 1);
                if (i % 2 != 0) {
                    // Flip Fish
                    _this.RedFishInaquarium.anchor.setTo(1, 0);
                    _this.RedFishInaquarium.scale.x *= -1;

                    fish.anchor.setTo(1, 0);
                    fish.scale.x *= -1;
                }
                _this.RedFishInaquarium.name = RedFishCount;
                fish.name = RedFishCount;

                _this.RedFishNameArray.push(_this.BlueFishInAquirium.name);
                // _this.RedFishNameArray.push(_this.BlueFishInAquirium.name);

                _this.RedFishGroup.addChild(_this.RedFishInaquarium);
                _this.RedFishGroup2.addChild(fish);

                RedFishCount++;
                _this.RedFishInaquarium.inputEnabled = true;
                _this.RedFishInaquarium.input.useHandCursor = true;
                _this.RedFishInaquarium.events.onInputDown.add(_this.redFishClicked, _this);
            }
        }

        if (valueOfY % 4 != 0) {
            if (_this.valueOfY < 4) {
                _this.GenerateRemaingRedFish(0, reminder, RedFishCount);
            }
            else {
                _this.GenerateRemaingRedFish(mainrow, reminder, RedFishCount);
            }
        }
        // _this.fishjump();
    },

    GenerateRemaingRedFish: function (row, quesion, FishCount) {
        for (k = 0; k < quesion; k++) {
            _this.RedFishInaquarium = _this.add.sprite(_this.RedFishPositionArray_X[k], _this.FishPositionArray_y[row], 'orangefishanim');
            _this.RedFishInaquarium.scale.setTo(0.9, 1);
            fish = _this.add.sprite(_this.RedFishPositionArray_X[k], _this.FishPositionArray_y[row] - 10, 'RedFish');

            // fish = _this.add.sprite(_this.RedFishPositionArray_X[j], _this.FishPositionArray_y[i]-10, 'RedFish');
            fish.visible = false

            fish.scale.setTo(0.9, 1);

            if (Math.floor(_this.RedFishGroup.length / 4) % 2 != 0) {

                _this.RedFishInaquarium.anchor.setTo(1, 0);
                _this.RedFishInaquarium.scale.x *= -1;
                fish.anchor.setTo(1, 0);
                fish.scale.x *= -1;

            }
            _this.RedFishInaquarium.name = FishCount;
            fish.name = FishCount;

            _this.RedFishNameArray.push(_this.BlueFishInAquirium.name);
            _this.RedFishGroup.addChild(_this.RedFishInaquarium);
            _this.RedFishGroup2.addChild(fish);

            FishCount++;
            _this.RedFishInaquarium.inputEnabled = true;
            _this.RedFishInaquarium.input.useHandCursor = true;
            _this.RedFishInaquarium.events.onInputDown.add(_this.redFishClicked, _this);
        }
    },

    redFishClicked: function (target) {
        _this.puffSound.pause();
        _this.puffSound.currentTime = 0;
        _this.puffSound.play();
        _this.red_anim[target.name] = null;
        _this.blue_anim[target.name] = null;

        _this.RedFishGroup.getChildAt(target.name).visible = false;
        _this.BlueFishGroup.getChildAt(target.name).visible = false;


        _this.RedFishGroup2.getChildAt(target.name).visible = true;
        _this.RedFishGroup2.getChildAt(target.name).frame = 1;

        _this.BlueFishGroup2.getChildAt(target.name).visible = true;
        _this.BlueFishGroup2.getChildAt(target.name).frame = 1;

        // _this.BlueFishGroup.getChildAt(target.name).frame = 1;
        _this.RedFishGroup.getChildAt(target.name).inputEnabled = false;
        _this.time.events.add(500, function () {
            _this.RedFishGroup2.getChildAt(target.name).frame = 2;

            _this.BlueFishGroup2.getChildAt(target.name).frame = 2;
            _this.RedFishNameArray.pop();
            _this.BlueFishNameArray.pop();
            _this.RemainingBlueFishCount = _this.BlueFishNameArray.length;

            if (_this.RedFishNameArray == 0) {
                _this.ShowingTickBtn1();
                //     _this.loopeF.stop()

            }
        });
    },

    fishjump: function () {
        _this.flip = false
        _this.AnsFishGroup = _this.add.group();
        i = _this.RedFishGroup.length;
        _this.ansfishcount = -1;
        y = _this.AnsFishPositionArray_Y[0]
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(350, () => {

            //_this.dropSound.pause();
            //_this.dropSound.currentTime = 0;
            _this.dropSound.play();
            if (_this.BlueFishGroup2.getChildAt(i).frame == 0) {


                _this.BlueFishGroup2.getChildAt(i).visible = true;

                _this.BlueFishGroup2.getChildAt(i).frame = 2;
                _this.BlueFishGroup.getChildAt(i).visible = false;

                _this.ansfishcount += 1;

                _this.AnsFishInAquirium = _this.add.sprite(_this.BlueFishGroup2.getChildAt(i).x, _this.BlueFishGroup2.getChildAt(i).y, "bluefishanim")
                _this.fishtween1 = _this.add.tween(_this.AnsFishInAquirium);
                _this.fishtween1.to({ x: 280, y: 50 }, 300, 'Linear', true, 0);

                _this.fishtween2 = _this.add.tween(_this.AnsFishInAquirium);
                if (_this.ansfishcount == 4) {
                    y = _this.AnsFishPositionArray_Y[_this.ansfishcount % 4 + 1]
                    _this.ansfishcount = 0
                    if ((_this.AnsFishGroup.length / 4) % 2 != 0) {
                        _this.flip = true;
                    }
                    else {

                        _this.flip = false;
                    }

                }
                if (_this.flip == true) {
                    _this.AnsFishInAquirium.anchor.setTo(1, 0);
                    _this.AnsFishInAquirium.scale.x *= -1;
                }
                _this.fishtween2.to({ x: _this.AnsFishPositionArray_X[_this.ansfishcount], y: y }, 350, 'Linear', true, 0);

                _this.AnsFishGroup.addChild(_this.AnsFishInAquirium)


            }
            i += 1;

            if (i == _this.BlueFishGroup2.length) {
                _this.loope.stop()
                _this.time.events.add(1000, () => {

                    _this.ansfishnewanim();


                })


            }
        }, _this)

    },

    showTank1Jump: function () {
        _this.flip = false


        _this.Tank1FishGroup = _this.add.group();
        i = 0;
        _this.tank1fishcount = -1;
        y = _this.AnsFishPositionArray_Y[0]
        // intiiali = _this.RedFishGroup.length
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(250, () => {

            //_this.dropSound.pause();
            //_this.dropSound.currentTime = 0;
            _this.dropSound.play();
            _this.tank1fishcount += 1;
            _this.Tank1FishInAquirium = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x, _this.RedFishGroup.getChildAt(i).y, "orangefishanim")
            _this.fishtween1 = _this.add.tween(_this.Tank1FishInAquirium);
            _this.fishtween1.to({ x: 280 - 40 * _this.tank1fishcount, y: 50 }, 250, 'Linear', true, 0);

            // _this.time.events.add(250,()=>{
            _this.fishtween2 = _this.add.tween(_this.Tank1FishInAquirium);
            if (_this.tank1fishcount == 4) {

                y = _this.AnsFishPositionArray_Y[_this.Tank1FishGroup.length / 4]
                _this.tank1fishcount = 0;
                if ((_this.Tank1FishGroup.length / 4) % 2 != 0) {
                    _this.flip = true;
                }
                else {

                    _this.flip = false;
                }

            }
            if (_this.flip == true) {
                // Flip Fish
                _this.Tank1FishInAquirium.anchor.setTo(1, 0);
                _this.Tank1FishInAquirium.scale.x *= -1;
            }
            _this.fishtween2.to({ x: _this.AnsFishPositionArray_X[_this.tank1fishcount], y: y }, 350, 'Linear', true, 0);

            // })
            _this.Tank1FishGroup.addChild(_this.Tank1FishInAquirium)


            i += 1;


            if (i == _this.ValueXArray[_this.count1]) {
                _this.loope.stop()
                _this.tank1fishnewanim();

                _this.bubbleSound.play();
                _this.time.events.add(800, () => {


                    _this.showTank2jump();
                })


            }
        }, _this)
    },
    showTank2jump: function () {
        _this.flip = false
        _this.time.events.add(450, () => {
            _this.puffSound.play();

        })
        _this.Tank2FishGroup = _this.add.group();
        i = _this.ValueXArray[_this.count1];
        _this.tank2fishcount = -1;
        y = _this.AnsFishPositionArray_Y[0]
        // intiiali = _this.RedFishGroup.length
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(400, () => {
            //_this.dropSound.pause();
            //_this.dropSound.currentTime = 0;
            _this.dropSound.play();
            // for (i = 0; i < _this.ValueXArray[_this.count1]; i++) {
            // show fish jumping
            // _this.tank2fishnewanim();

            _this.tank2fishcount += 1;
            // _this.Tank1FishInAquirium = _this.RedFishGroup.getChildAt(i);
            _this.Tank2FishInAquirium = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x, _this.RedFishGroup.getChildAt(i).y, "orangefishanim")
            // _this.RedFishGroup.getChildAt(i).frame=1;
            _this.fishtween1 = _this.add.tween(_this.Tank2FishInAquirium);
            // _this.fishtween1.to({ y: 50 }, 350, 'Linear', true, 0);
            _this.fishtween1.to({ x: 600, y: 50 }, 300, 'Linear', true, 0);

            // _this.time.events.add(100,()=>{
            _this.fishtween2 = _this.add.tween(_this.Tank2FishInAquirium);
            if (_this.tank2fishcount == 4) {
                console.log(y)
                y = _this.AnsFishPositionArray_Y[_this.Tank2FishGroup.length / 4]
                _this.tank2fishcount = 0;
                if ((_this.Tank2FishGroup.length / 4) % 2 != 0) {
                    _this.flip = true;
                }
                else {

                    _this.flip = false;
                }
            }
            if (_this.flip == true) {
                // Flip Fish
                _this.Tank2FishInAquirium.anchor.setTo(1, 0);
                _this.Tank2FishInAquirium.scale.x *= -1;
            }
            _this.fishtween2.to({ x: _this.RedFishPositionArray_X[_this.tank2fishcount], y: y }, 350, 'Linear', true, 0);

            // })
            _this.Tank2FishGroup.addChild(_this.Tank2FishInAquirium)


            i += 1;

            if (i == _this.ValueZArray[_this.count1]) {
                _this.loope.stop()

                _this.tank2fishnewanim();

                _this.time.events.add(1000, () => {

                    _this.graphicsImg.destroy();
                    // _this.showBubbles(35, 180);
                    _this.bubblesAnimation1();

                    _this.aquiriumBoxA.inputEnabled = true;
                    _this.aquiriumBoxA.input.useHandCursor = true;
                    _this.aquiriumBox2.inputEnabled = true;
                    _this.aquiriumBox2.input.useHandCursor = true;
                    if (_this.firstType2 == true && _this.type21demoshown != true) {

                        _this.showtank1ClickigDemo();
                    }
                    _this.aquiriumBoxA.events.onInputDown.add(() => {
                        _this.aquiriumBox2.inputEnabled = false;
                        _this.aquiriumBoxA.inputEnabled = false;
                        if (_this.loopeF)
                            _this.loopeF.stop();
                        _this.time.events.add(600, () => {

                            _this.showRverseJump();
                        })

                    })
                    _this.aquiriumBox2.events.onInputDown.add(() => {
                        _this.aquiriumBoxA.inputEnabled = false;
                        _this.aquiriumBox2.inputEnabled = false;
                        if (_this.loopeF)
                            _this.loopeF.stop();
                        _this.time.events.add(600, () => {

                            _this.showTank2Revjump();
                        })

                    })
                    _this.RedFishGroup.destroy();
                    _this.RedFishGroup = _this.add.group();
                })

            }
        }, _this)
    },
    showTank2Revjump: function () {
        if (_this.loopeF)
            _this.loopeF.stop();
        if (_this.RedFishGroup.length == 0) {

            _this.flip = false;
        }
        else if ((_this.flip == true) && _this.RedFishGroup.length % 4 == 0) {

            _this.flip = false;
        }
        else if (_this.flip == false && _this.RedFishGroup.length % 4 == 0) {
            _this.flip = true;
        }
        else {
            _this.flip = _this.flip;
        }

        _this.clickSound.play();

        i = _this.Tank2FishGroup.length - 1;
        _this.Redfishcount = _this.RedFishGroup.length % 4 - 1;

        y = _this.AnsFishPositionArray_Y[Math.floor(_this.RedFishGroup.length / 4)]

        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(300, () => {

            //_this.dropSound.pause();
            //_this.dropSound.currentTime = 0;
            _this.dropSound.play();
            _this.Redfishcount += 1;
            _this.RedFishInAquirium = _this.Tank2FishGroup.getChildAt(i).visible = false;
            _this.RedFishInAquirium = _this.add.sprite(_this.Tank2FishGroup.getChildAt(i).x, _this.Tank2FishGroup.getChildAt(i).y, "orangefishanim")
            _this.fishtween1 = _this.add.tween(_this.RedFishInAquirium);
            _this.fishtween1.to({ x: 280 - 40 * _this.Redfishcount, y: 50 }, 350, 'Linear', true, 0);

            // _this.time.events.add(250,()=>{
            _this.fishtween2 = _this.add.tween(_this.RedFishInAquirium);
            if (_this.Redfishcount == 4) {

                y = _this.AnsFishPositionArray_Y[_this.RedFishGroup.length / 4]
                _this.Redfishcount = 0;
                if ((_this.RedFishGroup.length / 4) % 2 != 0) {
                    _this.flip = true;
                }
                else {

                    _this.flip = false;
                }
            }
            if (_this.flip == true) {
                // Flip Fish
                _this.RedFishInAquirium.anchor.setTo(1, 0);
                _this.RedFishInAquirium.scale.x *= -1;
            }
            _this.fishtween2.to({ x: _this.BlueFishPositionArray_X[_this.Redfishcount], y: y }, 350, 'Linear', true, 0);
            _this.RedFishGroup.addChild(_this.RedFishInAquirium)

            i -= 1;

            if (i == -1) {
                _this.loope.stop()
                // _this.bubbleSound.play();
                _this.redfishnewanim();

                _this.Tank2FishGroup.destroy();
                if (_this.Tank1FishGroup.length > 0) {

                    _this.aquiriumBoxA.inputEnabled = true;
                    _this.aquiriumBoxA.input.useHandCursor = true;
                }
                if (_this.RedFishGroup.length == _this.ValueZArray[_this.count1]) {
                    // Show tick button
                    _this.time.events.add(500, () => {

                    })

                    _this.ShowingTickBtn1();
                    _this.Tickbtn.y += 30;

                }
            }
        }, _this)
    },
    showRverseJump: function () {
        if (_this.loopeF)
            _this.loopeF.stop();
        if (_this.RedFishGroup.length == 0) {

            _this.flip = false;
        }
        else if ((_this.flip == true) && _this.RedFishGroup.length % 4 == 0) {

            _this.flip = false;
        }
        else if (_this.flip == false && _this.RedFishGroup.length % 4 == 0) {
            _this.flip = true;
        }
        else {
            _this.flip = _this.flip;
        }
        _this.clickSound.play();

        i = _this.Tank1FishGroup.length - 1;
        _this.Redfishcount = _this.RedFishGroup.length % 4 - 1;

        y = _this.AnsFishPositionArray_Y[Math.floor(_this.RedFishGroup.length / 4)]
        // intiiali = _this.RedFishGroup.length
        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(300, () => {

            //_this.dropSound.pause();
            //_this.dropSound.currentTime = 0;
            _this.dropSound.play();
            _this.Redfishcount += 1;
            _this.RedFishInAquirium = _this.Tank1FishGroup.getChildAt(i).visible = false;
            _this.RedFishInAquirium = _this.add.sprite(_this.Tank1FishGroup.getChildAt(i).x, _this.Tank1FishGroup.getChildAt(i).y, "orangefishanim")
            _this.fishtween1 = _this.add.tween(_this.RedFishInAquirium);
            _this.fishtween1.to({ x: 280 - 40 * _this.Redfishcount, y: 50 }, 350, 'Linear', true, 0);

            // _this.time.events.add(250,()=>{
            _this.fishtween2 = _this.add.tween(_this.RedFishInAquirium);
            if (_this.Redfishcount == 4) {

                y = _this.AnsFishPositionArray_Y[_this.RedFishGroup.length / 4]
                _this.Redfishcount = 0;
                if ((_this.RedFishGroup.length / 4) % 2 != 0) {
                    _this.flip = true;
                }
                else {

                    _this.flip = false;
                }
            }
            if (_this.flip == true) {
                // Flip Fish
                _this.RedFishInAquirium.anchor.setTo(1, 0);
                _this.RedFishInAquirium.scale.x *= -1;
            }
            _this.fishtween2.to({ x: _this.BlueFishPositionArray_X[_this.Redfishcount], y: y }, 350, 'Linear', true, 0);
            _this.RedFishGroup.addChild(_this.RedFishInAquirium)


            i -= 1;

            if (i == -1) {
                // _this.bubbleSound.play();
                _this.loope.stop()
                _this.redfishnewanim();

                // _this.bubbleSound.play();
                _this.Tank1FishGroup.destroy();

                if (_this.Tank2FishGroup.length > 0) {

                    if (_this.firstType2 == true && _this.type22demoshown != true) {
                        _this.showtank2ClickingDemo();

                    }

                    _this.aquiriumBox2.inputEnabled = true;
                    _this.aquiriumBox2.input.useHandCursor = true;
                }
                if (_this.RedFishGroup.length == _this.ValueZArray[_this.count1]) {
                    // Show tick button
                    _this.ShowingTickBtn1();
                    _this.Tickbtn.y += 30;

                    _this.time.events.add(500, () => {

                    })
                }
            }
        }, _this)
    },
    ShowingTickBtn1: function () {

        _this.Tickbtn = _this.add.image(860, 330, 'TickBtn');
        _this.Tickbtn.frame = 1;
        _this.Tickbtn.inputEnabled = true;
        _this.Tickbtn.input.useHandCursor = true;
        _this.Tickbtn.events.onInputDown.add(_this.CommonPartValidation, _this);
    },
    ShowingTickBtn2: function () {

        _this.Tickbtn = _this.add.image(805, 250, 'TickBtn');
        _this.Tickbtn.frame = 1;
        _this.Tickbtn.inputEnabled = true;
        _this.Tickbtn.input.useHandCursor = true;
        _this.Tickbtn.events.onInputDown.add(_this.CorrectOptionCheck, _this);
    },
    CorrectOptionCheck: function () {
        _this.Tickbtn.inputEnabled = false;

        if (_this.userselectedOp == _this.correcttOption1) {
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.Tickbtn.destroy();
            _this.correctAns();
            _this.Question_flag = -1;

        }
        else {
            _this.noofAttempts++;
            _this.Tickbtn.visible = false;
            _this.wrongans.play();
            _this.Tickbtn.inputEnabled = true
            _this.OptionChoices = [_this.OptionBox1, _this.OptionBox2, _this.OptionBox3]
            _this.userselectedOp.frame = 0;
            _this.optionsPos = [50, 300, 550]
            _this.shuffle(_this.optionsPos);

            _this.OptionBox1.visible = false;
            _this.OptionBox2.visible = false;

            _this.OptionBox3.visible = false;

            _this.time.events.add(500, () => {
                _this.OptionBox1.visible = true;
                _this.OptionBox2.visible = true;
                _this.OptionBox3.visible = true;
                _this.OptionBox1.x = _this.optionsPos[0]
                _this.OptionBox2.x = _this.optionsPos[1]
                _this.OptionBox3.x = _this.optionsPos[2]
            })
        }
    },
    CommonPartValidation: function () {
        _this.Tickbtn.inputEnabled = false;
        if (_this.QType[_this.count1] == 2) {
            if (_this.ValueZArray[_this.count1] == _this.RedFishGroup.length) {
                _this.Tickbtn.destroy();
                _this.counterCelebrationSound.play();
                _this.AnswerBox.x = 100;
                _this.AnswerBox.y = 370
                _this.AnswerBox.visible = true;


                _this.TextBox1.destroy();
                _this.TextBox2.destroy();
                _this.minusSignBox.destroy();
                _this.TextBox3.destroy();
                _this.EqualSignBox.destroy();
                _this.part2Ques();

                _this.addNumberPad();
            }
        }
        else {
            if (_this.ValueZArray[_this.count1] == _this.RemainingBlueFishCount) {
                _this.Tickbtn.destroy();
                _this.counterCelebrationSound.play();
                //  _this.blue_anim=[];
                _this.blue_anim.forEach(element => {
                    if (element)
                        element.stop()
                });

                _this.fishjump();
                _this.AnswerBox.visible = true;
                _this.addNumberPad();
            }
        }
        _this.time.events.add(1000, () => {
            if (_this.count1 == 0) _this.Ask_Question2.play();
        })

        _this.Question_flag = 2;
    },

    //* Change this function to show small number pad as given in GDD. (no signs)
    addNumberPad: function () {

        _this.objGroup = _this.add.group();
        _this.numGroup = _this.add.group();

        var bottomnumpadbg = _this.numGroup.create(0, 515, 'numpadbg');
        //bottomnumpadbg.anchor.setTo(0.5);
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
    tank1fishnewanim: function () {
        _this.tank1_anim = [];
        _this.tank1 = [];
        for (i = 0; i < _this.Tank1FishGroup.length; i++) {
            // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'orangefishanim');
            _this.tank1_anim[i] = _this.Tank1FishGroup.getChildAt(i).animations.add('draw');
            _this.tank1_anim[i].play(15);
            _this.tank1_anim[i].onComplete.add(function () {

                _this.tank1_anim.forEach(element => {
                    if (element)
                        element.play(15)
                });

            }, _this);

        }
    },
    tank2fishnewanim: function () {
        _this.tank2_anim = [];
        _this.tank2 = [];
        for (i = 0; i < _this.Tank2FishGroup.length; i++) {
            // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'orangefishanim');
            _this.tank2_anim[i] = _this.Tank2FishGroup.getChildAt(i).animations.add('draw');
            _this.tank2_anim[i].play(15);
            _this.tank2_anim[i].onComplete.add(function () {

                _this.tank2_anim.forEach(element => {
                    if (element)
                        element.play(15)
                });

            }, _this);

        }
    },
    ansfishnewanim: function () {
        _this.ans_anim = [];
        _this.ans = [];
        for (i = 0; i < _this.AnsFishGroup.length; i++) {
            // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'orangefishanim');
            _this.ans_anim[i] = _this.AnsFishGroup.getChildAt(i).animations.add('draw');
            _this.ans_anim[i].play(15);
            _this.ans_anim[i].onComplete.add(function () {

                _this.ans_anim.forEach(element => {
                    if (element)
                        element.play(15)
                });

            }, _this);

        }
    },
    bluefishnewanim: function () {
        _this.blue_anim = [];
        _this.blue = [];
        for (i = 0; i < _this.BlueFishGroup.length; i++) {
            // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'orangefishanim');
            _this.blue_anim[i] = _this.BlueFishGroup.getChildAt(i).animations.add('draw');
            _this.blue_anim[i].play(15);
            _this.blue_anim[i].onComplete.add(function () {

                _this.blue_anim.forEach(element => {
                    if (element)
                        element.play(15)
                });

            }, _this);

        }
    },
    redfishnewanim: function () {
        _this.red_anim = [];
        _this.red = [];
        for (i = 0; i < _this.RedFishGroup.length; i++) {
            // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'orangefishanim');
            _this.red_anim[i] = _this.RedFishGroup.getChildAt(i).animations.add('draw');
            _this.red_anim[i].play(15);
            _this.red_anim[i].onComplete.add(function () {

                _this.red_anim.forEach(element => {
                    if (element)
                        element.play(15)
                });

            }, _this);

        }
    },
    rightbtnClicked: function () {
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        _this.rightbtn_is_Clicked = true;
        _this.Validation1(); // initial Validation part

    },
    Validation1: function () {
        if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.ValueZArray[_this.count1]) {
            _this.counterCelebrationSound.pause();
            _this.counterCelebrationSound.currentTime = 0;
            _this.counterCelebrationSound.play();
            _this.time.events.add(600, () => {
                _this.ClearInitialPart();
                _this.Question_flag = -1;

                if (_this.QnBox)
                    _this.QnBox.visible = false;

            })
            _this.time.events.add(1500, () => {
                _this.CallingMCQFn();
                if (_this.count1 == 0) {
                    _this.Ask_Question3.play();
                }
                _this.Question_flag = 3;
            })
        }
        else {
            _this.rightbtn.inputEnabled = true;
            _this.wrongans.play();
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';

        }
    },

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },
    clearMcqPart1: function () {
        _this.Tickbtn.destroy();
        _this.QnBox.destroy();
        _this.BlueBackground.destroy();
        _this.OptionBox1.destroy();
        _this.OptionBox2.destroy();
        _this.OptionBox3.destroy();
        _this.Tickbtn.destroy();

    },
    ClearInitialPart: function () {
        if (_this.loopeF)
            _this.loopeF.destroy();
        if (_this.bubblesGrp)
            _this.bubblesGrp.destroy();
        _this.numGroup.destroy();
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.aquiriumBox1.destroy();
        _this.aquiriumBox2.destroy();
        if (_this.AnsFishGroup)
            _this.AnsFishGroup.destroy();
        _this.aquiriumBoxA.destroy();
        _this.Grass_1_1A.destroy();
        _this.Grass_1_2A.destroy();
        _this.Grass_2_A.destroy();
        _this.Grass_1_1.destroy();
        _this.Grass_1_2.destroy();
        _this.Grass_1_3.destroy();
        _this.Grass_1_4.destroy();
        _this.Grass_2_1.destroy();
        _this.Grass_2_2.destroy();
        _this.Plant_A.destroy();
        _this.imageb1.destroy();
        _this.imageb2.destroy();
        _this.imageb3.destroy();

        _this.imageb11.destroy();
        _this.imageb21.destroy();
        _this.imageb31.destroy();
        if (_this.BlueFishGroup2)
            _this.BlueFishGroup2.destroy();
        if (_this.RedFishGroup2)
            _this.RedFishGroup2.destroy();


        _this.imageb13.destroy();
        _this.imageb23.destroy();
        _this.imageb33.destroy();

        _this.Plant_1.destroy();
        _this.Plant_2.destroy();
        _this.sand1.destroy();
        _this.sand2.destroy();
        _this.sandA.destroy();
        if (_this.BlueFishGroup)
            _this.BlueFishGroup.destroy();
        if (_this.RedFishGroup)
            _this.RedFishGroup.destroy();

        _this.AnswerBox.destroy();
        if (_this.TextBox1)
            _this.TextBox1.destroy();
        if (_this.TextBox2)
            _this.TextBox2.destroy();
        if (_this.minusSignBox)
            _this.minusSignBox.destroy();

        if (_this.TextBox3)
            _this.TextBox3.destroy();
        _this.EqualSignBox.destroy();
    },
    randomiseOptions: function () {

        sign = _this.signQchoices[Math.floor(Math.random() * _this.signQchoices.length)]
        if (sign == '+') {

            _this.signQchoices = ["-"]
        }
        op = _this.randomQchoices[Math.floor(Math.random() * _this.randomQchoices.length)]

        op2 = (op == _this.ValueXArray[_this.count1] ? _this.ValueYArray[_this.count1] : _this.ValueXArray[_this.count1])
        while (_this.mcqoptionsArr.includes(op + "" + sign + "" + op2)) {
            // Repition
            op = _this.randomQchoices[Math.floor(Math.random() * _this.randomQchoices.length)]
            sign = _this.signQchoices[Math.floor(Math.random() * _this.signQchoices.length)]
            op2 = (op == _this.ValueXArray[_this.count1] ? _this.ValueYArray[_this.count1] : _this.ValueXArray[_this.count1])

        }
        _this.mcqoptionsArr.push(op + "" + sign + "" + op2)
        if (_this.QType[_this.count1] == 1 && sign == '-' && op - op2 == _this.ValueZArray[_this.count1]) {
            _this.gotcorrectOption = true;

        }
        else if (_this.QType[_this.count1] == 2 && sign == '+' && op + op2 == _this.ValueZArray[_this.count1]) {
            _this.gotcorrectOption = true;
        }
        if (sign == '+') {

            _this.signQchoices = ["-"]
        }
        _this.a = _this.add.text(26, 20, 'a');
        _this.a.fill = "#FF0000"
        _this.equals = _this.add.text(54, 22, '=');
        _this.equals.fill = '#65B4C3';

        _this.op1 = _this.add.text(op > 9 ? 85 : (sign == '+' ? 95 : 98), 20, op);
        _this.op1.fill = '#65B4C3'
        _this.sign = _this.add.text(sign == '+' ? 130 : 132, 20, sign);
        _this.sign.fill = '#65B4C3'

        _this.op2 = _this.add.text(op2 <= 9 ? 160 : (sign == '+' ? 160 : 155), 20, op2)
        _this.op2.fill = '#65B4C3'

    },
    part2Ques: function () {
        _this.QnBox = _this.add.image(50, 50, 'textbox');

        _this.QnBox.scale.setTo(1, 1);
        _this.a = _this.add.text(38, 18, 'a');

        _this.num1 = _this.add.text(_this.ValueXArray[_this.count1] > 9 ? 80 : 90, 20, _this.ValueXArray[_this.count1])
        _this.num2 = _this.add.text(150, 20, _this.ValueYArray[_this.count1])
        _this.a.fill = '#FF0000'
        _this.minus = _this.add.text(65, 18, '-');
        _this.minus.fill = "#65B4C3"
        _this.equals = _this.add.text(120, 20, '=');
        _this.equals.fill = "#65B4C3";
        _this.num1.fill = "#65B4C3";
        _this.num2.fill = "#65B4C3";
        _this.QnBox.addChild(_this.num1);
        _this.QnBox.addChild(_this.num2);
        _this.QnBox.addChild(_this.a);
        _this.QnBox.addChild(_this.minus);
        _this.QnBox.addChild(_this.equals);
    },
    CallingMCQFn: function () {
        _this.mcqoptionsArr = [];
        _this.randomQchoices = [_this.ValueXArray[_this.count1], _this.ValueYArray[_this.count1]];
        _this.signQchoices = ["+", "-"]
        _this.BlueBackground = _this.add.image(10, 150, 'BlueBg');

        if (_this.QType[_this.count1] == 1) {
            _this.QnBox = _this.add.image(50, 60, 'textbox');
            _this.QnBox.scale.setTo(1, 1);
            _this.num1 = _this.add.text(_this.ValueXArray[_this.count1] > 9 ? 24 : 38, 20, _this.ValueXArray[_this.count1])
            _this.num2 = _this.add.text(140, 20, _this.ValueYArray[_this.count1])
            _this.a = _this.add.text(85, 18, 'a');
            _this.a.fill = '#FF0000'
            _this.minus = _this.add.text(65, 18, '-');
            _this.minus.fill = "#65B4C3"
            _this.equals = _this.add.text(114, 20, '=');
            _this.equals.fill = "#65B4C3";
            _this.num1.fill = "#65B4C3";
            _this.num2.fill = "#65B4C3";
            _this.QnBox.addChild(_this.num1);
            _this.QnBox.addChild(_this.num2);
            _this.QnBox.addChild(_this.a);
            _this.QnBox.addChild(_this.minus);
            _this.QnBox.addChild(_this.equals);
        }
        else {
            _this.QnBox.visible = true;
            _this.QnBox.y += 10;
        }

        _this.OptionBox1 = _this.add.image(50, 250, 'textbox');
        _this.randomiseOptions();
        _this.OptionBox1.addChild(_this.a);
        _this.OptionBox1.addChild(_this.equals);
        _this.OptionBox1.addChild(_this.op1)
        _this.OptionBox1.addChild(_this.op2)
        _this.OptionBox1.addChild(_this.sign)
        // _this.mcqoptionsArr.push(op + "" + sign + "" + op2)
        _this.OptionBox1.inputEnabled = true;
        if (_this.gotcorrectOption == true) {
            _this.correcttOption1 = _this.OptionBox1
            _this.gotcorrectOption = false;
        }
        _this.OptionBox1.events.onInputDown.add(_this.mcq1Opclicked, _this)

        _this.OptionBox2 = _this.add.image(300, 250, 'textbox');
        // _this.OptionBox2.frame=1;
        _this.randomiseOptions();
        _this.OptionBox2.addChild(_this.a);
        _this.OptionBox2.addChild(_this.equals);
        _this.OptionBox2.addChild(_this.op1)
        _this.OptionBox2.addChild(_this.op2)
        _this.OptionBox2.addChild(_this.sign)
        _this.OptionBox2.inputEnabled = true;
        if (_this.gotcorrectOption == true) {
            _this.correcttOption1 = _this.OptionBox2
            _this.gotcorrectOption = false;
        }
        _this.OptionBox2.events.onInputDown.add(_this.mcq1Opclicked, _this)

        _this.OptionBox3 = _this.add.image(550, 250, 'textbox');
        _this.randomiseOptions();
        _this.OptionBox3.addChild(_this.a);
        _this.OptionBox3.addChild(_this.equals);
        _this.OptionBox3.addChild(_this.op1)
        _this.OptionBox3.addChild(_this.op2)
        _this.OptionBox3.addChild(_this.sign)
        _this.OptionBox3.inputEnabled = true;
        if (_this.gotcorrectOption == true) {
            _this.correcttOption1 = _this.OptionBox3
            _this.gotcorrectOption = false;
        }
        _this.OptionBox3.events.onInputDown.add(_this.mcq1Opclicked, _this)

    },
    mcq1Opclicked: function (target) {
        _this.clickSound.play();
        if (_this.OptionBox1.frame == 0 && _this.OptionBox2.frame == 0 && _this.OptionBox3.frame == 0)
            _this.ShowingTickBtn2();

        if (_this.OptionBox1.frame == 1)
            _this.OptionBox1.frame = 0;
        if (_this.OptionBox2.frame == 1)
            _this.OptionBox2.frame = 0;
        if (_this.OptionBox3.frame == 1)
            _this.OptionBox3.frame = 0;
        target.frame = 1;
        _this.userselectedOp = target;

    },

    //* Change this function to take 2 digit numbers only. No sign expected.
    //* this is called when a number on num pad is clicked.

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

        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.enterTxt.visible = false;

        if (_this.selectedAns1 === 10) var_selectedAns1 = 0;
        else var_selectedAns1 = _this.selectedAns1;
        if (_this.selectedAns2 === 10) _this.selectedAns2 = 0;
        else var_selectedAns2 = _this.selectedAns2;


        if (_this.selectedAns1 === "") var_selectedAns1 = " ";
        else var_selectedAns1 = _this.selectedAns1;

        if (_this.selectedAns2 === "") var_selectedAns2 = " ";
        else var_selectedAns2 = _this.selectedAns2;
        if ((var_selectedAns2 === " ")) {

            _this.enterTxt = _this.add.text(102, 20, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });

        }
        else
            _this.enterTxt = _this.add.text(95, 20, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '28px' });
        _this.enterTxt.align = 'right';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.fontWeight = 'normal';
        _this.AnswerBox.addChild(_this.enterTxt);
        _this.enterTxt.visible = true;
    },
    correctAns: function () {

        if (_this.count1 < 5) {
            _this.celebrationSound.play();
            _this.starActions(_this.count1);
            _this.time.events.add(2000, _this.clearMcqPart1);
            if (_this.QType[_this.count1] == 1) {
                _this.background3.visible = false
                _this.background2.visible = true

            }
            else {
                _this.background2.visible = false
                _this.background3.visible = true


            }
            _this.time.events.add(3000, _this.RandomizingTypes);

        }
        // else if (_this.count1 < 5) {

        //     _this.celebrationSound.play();
        //     _this.starActions(_this.count1);
        //     _this.time.events.add(2000, _this.clearMcqPart1);

        //     _this.background2.destroy();
        //     _this.time.events.add(3000, _this.randomizing_elements2)
        // }
        else {

            _this.starActions(_this.count1);
            _this.time.events.add(2000, _this.clearMcqPart1);

            // _this.time.events.add(2000, _this.eraseAll);
            _this.time.events.add(2500, () => {
                //_this.state.start('score');
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
        //  _this.game_id = "ALS_01_G6";
        //  _this.grade = "6";
        //  _this.gradeTopics = "Variable and Equation";
          _this.microConcepts = "Algebra";

        _this.count1++;
        anim.play();
    },

    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },

    //demo audio and video integration

    DemoVideo: function () {
        //* how many objects needed in a ‘variable’ tank  to balance the equation?.
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/ALS-01-MCQ-G6/" + _this.languageSelected + "/DV-ALS-01-MCQ-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* The number of remaining objects are equal to the value of the variable
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/ALS-01-MCQ-G6/" + _this.languageSelected + "/DV1-ALS-01-MCQ-G6.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //* Use One on one mapping to find the value of a variable
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALS-01-MCQ-G6/" +
            _this.languageSelected + "/ALS-01-MCQ-G6D.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Enter the value of the variable.
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALS-01-MCQ-G6/" +
            _this.languageSelected + "/ALS-01-MCQ-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* Select the correct equation
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALS-01-MCQ-G6/" +
            _this.languageSelected + "/ALS-01-MCQ-G6C.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        //* find the value of a variable by solving the equation
        // _this.q4Sound = document.createElement('audio');
        // _this.q4Soundsrc = document.createElement('source');
        // _this.q4Soundsrc.setAttribute("src",  window.baseUrl+ "questionSounds/ALS-01-MCQ-G6/" + 
        //                                 _this.languageSelected + "/ALS-01-MCQ-G6A.mp3");
        // _this.q4Sound.appendChild(_this.q4Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 390, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.stopAudio();

            if (_this.demoVideo_2)
                _this.demoVideo_2.stop(false);
            if (_this.demoVideo_1)
                _this.demoVideo_1.stop(false);
            if (_this.videoWorld_1)
                _this.videoWorld_1.destroy();
            if (_this.videoWorld_2)
                _this.videoWorld_2.destroy();
            if (_this.hintBtn) {
                _this.hintBtn.inputEnabled = true;
                _this.hintBtn.input.useHandCursor = true;
            }
            _this.game.paused = false;  //* restart the game
        });
    },

    //* function to stop the video and audio if they are playing.
    stopVideo: function () {

        if (_this.demoVideo_1) {
            console.log("removing the video1");
            _this.demoVideo_1.destroy();
        }

        if (_this.demoVideo_2) {
            console.log("removing the video2");
            _this.demoVideo_2.destroy();
        }


    },

    stopAudio: function () {
        //* clear all the timers first

        if (_this.demoAudio1Timer) clearTimeout(_this.demoAudio1Timer);
        if (_this.demoVideo1PauseTimer) clearTimeout(_this.demoVideo1PauseTimer);
        if (_this.q1Timer) clearTimeout(_this.q1Timer);
        if (_this.demoAudio2Timer) clearTimeout(_this.demoAudio2Timer);
        if (_this.q2Timer) clearTimeout(_this.q2Timer);

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

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('als01_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/ALS-01-G6_1.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();
        _this.demoAudio1.play();
        //* play the demo audio1 after 4 sec delay
        _this.demoAudio1Timer = setTimeout(function ()    //* demoAudio1 js timer to play demoAudio1Timer after 4 seconds.
        {
            console.log("inside demoAudio1sound.....")
            _this.demoVideo_1.playbackRate = 0;     //* pausing the video after 4sec
            clearTimeout(_this.demoAudio1Timer);         //* clear the time once its used.
            //_this.demoAudio1.play();
        }, 4000);

        _this.demoVideo1PauseTimer = setTimeout(function () {
            console.log("inside demoVideo1PauseTimer.....")
            _this.demoVideo_1.playbackRate = 1;  //* resuming the video after 9 sec
            clearTimeout(_this.demoVideo1PauseTimer);
        }, 7000);

        _this.q1Timer = setTimeout(function ()    //* q1 js timer to play q1 after 11 seconds.
        {
            console.log("inside q1sound.....")
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 9000);

        _this.demoAudio2Timer = setTimeout(function ()    //* demo audio2 js timer to play demo audio2 after 10 seconds.
        {
            console.log("inside demoau2sound.....")
            clearTimeout(_this.demoAudio2Timer);         //* clear the time once its used.
            _this.demoAudio2.play();
        }, 19000);

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2 after 15 seconds.
        {
            console.log("inside q2sound.....")
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 24000);

        _this.demoVideo_1.onComplete.add(function () {
            console.log("audio2 ended - pause video1");
            _this.demoVideo_2 = _this.add.video('als01_2');
            _this.demoVideo_2.play(false);
            _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/ALS-01-G6_2.mp4");  //* phaser needs this.to run in mobile
            _this.video_playing = 2;
            _this.videoWorld_2 = _this.demoVideo_2.addToWorld();

            _this.skip.bringToTop();
            _this.q3Sound.play();
            _this.demoVideo_2.onComplete.add(function () {
                console.log("demovideo 2 completed......!!!1")
                _this.stopAudio();
                _this.demoVideo_2.stop(false);
                _this.demoVideo_1.stop(false);
                _this.videoWorld_1.destroy();
                _this.videoWorld_2.destroy();
                if (_this.hintBtn) {
                    _this.hintBtn.inputEnabled = true;
                    _this.hintBtn.input.useHandCursor = true;
                }
                _this.game.paused = false;

            });
        });
    }
}