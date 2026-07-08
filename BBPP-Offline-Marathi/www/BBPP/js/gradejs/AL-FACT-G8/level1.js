Game.AL_FACT_G8level1 = function () { };


Game.AL_FACT_G8level1.prototype =
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
            _this.languageSelected = "Marathi";
        }
        else console.log("Language selected: " + _this.languageSelected);
        _this.clickSound = document.createElement('audio');
        _this.clickSoundsrc = document.createElement('source');
        _this.clickSoundsrc.setAttribute("src", window.baseUrl + "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.successSound = document.createElement('audio');
        _this.successSoundsrc = document.createElement('source');
        _this.successSoundsrc.setAttribute("src", window.baseUrl + "sounds/Success.mp3");
        _this.successSound.appendChild(_this.successSoundsrc);

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

        _this.framechange = document.createElement('audio');
        _this.framechangesrc = document.createElement('source');
        _this.framechangesrc.setAttribute("src", window.baseUrl + "sounds/Frame_change_sound.mp3");
        _this.framechange.appendChild(_this.framechangesrc);

        _this.snapSound = document.createElement('audio');
        _this.snapSoundsrc = document.createElement('source');
        _this.snapSoundsrc.setAttribute("src", window.baseUrl + "sounds/snapSound.mp3");
        _this.snapSound.appendChild(_this.snapSoundsrc);

        _this.Ask_Question1 = _this.createAudio("AL_FACT_G8_a2");
        _this.Ask_Question2 = _this.createAudio("AL_FACT_G8_a1");
        _this.Ask_Question3 = _this.createAudio("AL_FACT_G8_a3");
        _this.Ask_Question4 = _this.createAudio("AL_FACT_G8_a4");
        _this.Ask_Question5 = _this.createAudio("AL_FACT_G8_a5");
        _this.Ask_Question6 = _this.createAudio("AL_FACT_G8_a6");

        telInitializerbbpp.gameIdInit("AL_FACT_G8", gradeSelected);
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


        //  _this.AnsTimerCount = 0;
        _this.count1 = 0;
        _this.speakerbtn;
        _this.background;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;
        _this.selectedAns1 = ''
        _this.selectedAns2 = ''
        _this.selectedAns3 = ''
        _this.reverseDemoShown = false;

        _this.part1 = false;
        _this.part2 = false;
        _this.part3 = false;
        _this.part4 = false;
        _this.finalAns = false;
        _this.signNotselected = false;

        _this.counterForTimer = 0;

        _this.speakerbtnClicked = false;
        _this.rightbtn_Clicked = false;

        _this.Question_flag = -1;
        valuesCombinations = [];

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
        //** include the background file, navigation bar, stars, timer objects.

        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.state.start('grade8Algebra', true, false);
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
                if (_this.Question_flag == 4) {
                    _this.Ask_Question4.play();
                }
                if (_this.Question_flag == 5) {
                    _this.Ask_Question5.play();
                }
                if (_this.Question_flag == 6) {
                    _this.Ask_Question6.play();
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

        _this.numGroup;
        _this.grid = [];
        _this.greenBoxArr = [];
        _this.orangeBoxArr = []

        // BULB
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
            _this.hintBtn.inputEnabled = false;
            _this.hintBtn.input.useHandCursor = false;
            //* show the demo video
            _this.time.events.add(1, function () {
                _this.ViewDemoVideo();
            });

        });

        _this.generateStarsForTheScene(6);

        //* start the game with first question
        _this.time.events.add(1000, _this.getQuestion);
    },


    createAudio: function (src) {
        audio = document.createElement('audio');
        audiosrc = document.createElement('source');
        audiosrc.setAttribute("src", window.baseUrl + "questionSounds/AL-FACT-G8/" + _this.languageSelected + "/" + src + ".mp3");
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
            _this.hintBtn.inputEnabled = true;
            _this.hintBtn.input.useHandCursor = true;
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
        _this.StoreArrayValues()
        _this.InitialScreen();
        _this.Ask_Question2.play();

        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;

        _this.questionid = 1;
    },
    stopVoice: function () {
        _this.Ask_Question1.pause();
        _this.Ask_Question1 = null;

        // _this.Ask_Question2.pause();
        // _this.Ask_Question2 = null;

        // _this.Ask_Question3.pause();
        // _this.Ask_Question3 = null;


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
    InitialScreen: function () {
        _this.power = "\u{00B2}";

        _this.Question_flag = 1;
        if (_this.count1 == 0) {
            _this.time.events.add(4000, () => {
                _this.Ask_Question1.play();
            })
        }
        _this.textBox = _this.add.sprite(230, 80, 'Text box_2')
        _this.textBox.scale.setTo(0.7, 1)
        // +"x\u{00B2}"
        _this.yellowBox1 = _this.add.sprite(20, 20, 'yellowTextBox')
        _this.textBox.addChild(_this.yellowBox1)

        _this.eq1 = _this.add.text(30, 20, eqvar1[_this.count1] == 1 || eqvar1[_this.count1] == -1 ? "x\u{00B2}" : eqvar1[_this.count1] + "x\u{00B2}")
        _this.applyingStyleGn(_this.eq1)
        _this.textBox.addChild(_this.eq1)
        _this.yellowBox1.scale.setTo(Math.ceil(_this.eq1.width) * 0.037, 1)
        if (eqvar1[_this.count1] == 1 || eqvar1[_this.count1] == -1)
            _this.yellowBox1.scale.setTo(Math.ceil(_this.eq1.width) * 0.045, 1)


        _this.yellowBox2 = _this.add.sprite(100, 20, 'yellowTextBox')
        _this.textBox.addChild(_this.yellowBox2)
        _this.yellowBox2.visible = false;


        _this.yellowBox3 = _this.add.sprite((eqvar2[_this.count1] < 10 && eqvar2[_this.count1] > 0) || (eqvar2[_this.count1] > -10 && eqvar2[_this.count1] < 0) ? 180 : 190, 20, 'yellowTextBox')
        _this.textBox.addChild(_this.yellowBox3)
        _this.yellowBox3.visible = false;


        _this.eq3 = _this.add.text(213, 20, Math.abs(eqvar3[_this.count1]))
        _this.textBox.addChild(_this.eq3)
        _this.applyingStyleGn(_this.eq3)


        if (Math.abs(eqvar2[_this.count1]) > 9) {
            if (eqvar1[_this.count1] < 0 && eqvar1[_this.count1] != -1)
                x = 124
            else
                x = 112
        }
        else {
            if (eqvar1[_this.count1] < 0 && eqvar1[_this.count1] != -1)
                x = 140
            else if (eqvar1[_this.count1] > 1)
                x = 132
            else
                x = 118
        }
        _this.eq2 = _this.add.text(x, 20, Math.abs(eqvar2[_this.count1]) + "x")
        _this.textBox.addChild(_this.eq2)
        _this.applyingStyleGn(_this.eq2)

        x = (_this.eq1.x - 6 + _this.eq2.x) / 2 + _this.eq1.width / 2
        if (eqvar2[_this.count1] > 0) {
            x -= 8
        }
        _this.signBtw2 = _this.add.text(x, 20, eqvar2[_this.count1] > 0 ? "+" : "-")
        _this.textBox.addChild(_this.signBtw2)
        _this.applyingStyleGn(_this.signBtw2)

        x = (_this.eq2.x + _this.eq3.x) / 2 + 6
        if (Math.abs(eqvar2[_this.count1]) > 9) {
            x += 12
        }
        if (eqvar3[_this.count1] < 0) {
            x += 6
        }
        _this.signBtw3 = _this.add.text(x, 20, eqvar3[_this.count1] > 0 ? "+" : "-")
        _this.textBox.addChild(_this.signBtw3)
        _this.applyingStyleGn(_this.signBtw3)


        _this.yellowBox2.x = _this.signBtw2.x - 3;
        _this.yellowBox2.scale.setTo(2.5, 1)
        len = _this.eq2.x - _this.signBtw2.x + 15;
        if (Math.abs(eqvar2[_this.count1]) > 9)
            len += 13
        _this.yellowBox2.scale.setTo(len * 0.05, 1)
        if (eqvar2[_this.count1] < 0)
            _this.yellowBox2.scale.setTo(len * 0.05 + 0.1, 1)

        len = _this.eq3.x - _this.signBtw3.x
        _this.yellowBox3.x = _this.signBtw3.x - 3;
        _this.yellowBox3.scale.setTo(len * 0.05, 1)
        if (eqvar3[_this.count1] < 0)
            _this.yellowBox3.scale.setTo(len * 0.05 + 0.4, 1)


        _this.eraser = _this.add.sprite(800, 85, 'eraser');
        _this.rightbtn = _this.add.sprite(865, 85, 'TickBtn');

        _this.eraser.inputEnabled = true;
        _this.eraser.input.enableDrag(true);
        _this.eraser.input.useHandCursor = true;
        _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
        _this.eraser.events.onDragStop.add(_this.eraserDrop, _this);

        _this.space1 = _this.add.sprite(230, 160, 'panel_2');
        _this.space1.scale.setTo(1, 0.92)

        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.rightbtnClicked, _this);

        _this.sideGray1 = _this.add.sprite(20, 270 - 110, 'sidepanel');
        _this.sideGray2 = _this.add.sprite(120, 270 - 110, 'sidepanel');


        _this.green_1cpy = _this.add.image(45 - 10, 280 - 110, 'greenSmall1');
        _this.green_2cpy = _this.add.image(45 - 10, 385 - 110, 'greenSmall2');
        _this.green_3cpy = _this.add.image(65 - 10, 450 - 110 - 3, 'greenSmall3');
        _this.green_3cpy.scale.setTo(1.15)

        _this.pink_1cpy = _this.add.image(155 - 20, 280 - 110, 'pinkSmall1');
        _this.pink_2cpy = _this.add.image(155 - 20, 385 - 110, 'pinkSmall2');
        _this.pink_3cpy = _this.add.image(175 - 20, 450 - 110 - 3, 'pinkSmall3');
        _this.pink_3cpy.scale.setTo(1.2)



        _this.green_1 = _this.add.image(45 - 10, 280 - 110, 'greenSmall1');
        _this.green_2 = _this.add.image(45 - 10, 385 - 110, 'greenSmall2');
        _this.green_3 = _this.add.image(65 - 10, 450 - 110 - 3, 'greenSmall3');
        _this.green_3.scale.setTo(1.15)

        _this.pink_1 = _this.add.image(155 - 20, 280 - 110, 'pinkSmall1');
        _this.pink_2 = _this.add.image(155 - 20, 385 - 110, 'pinkSmall2');
        _this.pink_3 = _this.add.image(175 - 20, 450 - 110 - 3, 'pinkSmall3');
        _this.pink_3.scale.setTo(1.2)


        let negstring = '-';

        string1 = negstring + 'x' + _this.power;
        _this.negSquare1 = _this.add.text(50, 295 - 110, string1);
        _this.applyingStyle(_this.negSquare1);


        string2 = negstring + 'x'
        _this.negSquare2 = _this.add.text(50, 357 - 110, string2);
        _this.applyingStyle1(_this.negSquare2);

        string3 = negstring + 1
        _this.negSquare3 = _this.add.text(50, 417 - 110, string3);
        _this.applyingStyle1(_this.negSquare3);

        let posstring = '+';

        string4 = posstring + 'x' + _this.power
        _this.posSquare1 = _this.add.text(145, 295 - 110, string4);
        _this.applyingStyle(_this.posSquare1);


        string5 = posstring + 'x'
        _this.posSquare2 = _this.add.text(145, 357 - 110, string5);
        _this.applyingStyle2(_this.posSquare2);

        string6 = posstring + 1
        _this.posSquare3 = _this.add.text(145, 417 - 110, string6);
        _this.applyingStyle2(_this.posSquare3);

        _this.green_1.inputEnabled = true;
        _this.green_2.inputEnabled = true;
        _this.green_3.inputEnabled = true;

        _this.pink_1.inputEnabled = true;
        _this.pink_2.inputEnabled = true;
        _this.pink_3.inputEnabled = true;


        _this.green_1.input.useHandCursor = true;
        _this.green_2.input.useHandCursor = true;
        _this.green_3.input.useHandCursor = true;

        _this.pink_1.input.useHandCursor = true;
        _this.pink_2.input.useHandCursor = true;
        _this.pink_3.input.useHandCursor = true;

        _this.green_1.events.onInputDown.add(_this.tilex2clicked);
        // _this.green_2.events.onInputDown.add(_this.tilexclicked);
        // _this.green_3.events.onInputDown.add(_this.tileboxclicked);

        _this.pink_1.events.onInputDown.add(_this.tilex2clicked);
        // _this.pink_2.events.onInputDown.add(_this.tilexclicked);
        // _this.pink_3.events.onInputDown.add(_this.tileboxclicked);

        _this.x2group = _this.add.group();
        _this.xgroup = _this.add.group();

        _this.constgroup = _this.add.group();

        _this.posarr = []
        for (let k = 0; k < 80; k++) {
            _this.posarr[k] = false;
        }
        _this.posarr2 = []
        for (let k = 0; k < 260; k++) {
            _this.posarr2[k] = false;
        }

        _this.part1 = true;
    },
    destroySidePanel: function () {
        _this.sideGray1.visible = false;
        _this.sideGray2.visible = false;
        _this.green_1.visible = false;
        _this.green_2.visible = false;
        _this.green_3.visible = false;
        _this.pink_1.visible = false;
        _this.pink_2.visible = false;
        _this.pink_3.visible = false;
        _this.negSquare1.visible = false;
        _this.negSquare2.visible = false;
        _this.negSquare3.visible = false;
        _this.posSquare3.visible = false;
        _this.posSquare1.visible = false;
        _this.posSquare2.visible = false;
        _this.green_1cpy.visible = false;
        _this.green_2cpy.visible = false;
        _this.green_3cpy.visible = false;
        _this.pink_1cpy.visible = false;
        _this.pink_2cpy.visible = false;
        _this.pink_3cpy.visible = false;

    },
    showSidePanel: function () {
        _this.sideGray1.visible = true;
        _this.sideGray2.visible = true;
        _this.green_1.visible = true;
        _this.green_2.visible = true;
        _this.green_3.visible = true;
        _this.pink_1.visible = true;
        _this.pink_2.visible = true;
        _this.pink_3.visible = true;
        _this.negSquare1.visible = true;
        _this.negSquare2.visible = true;
        _this.negSquare3.visible = true;
        _this.posSquare3.visible = true;
        _this.posSquare1.visible = true;
        _this.posSquare2.visible = true;
        _this.green_1cpy.visible = true;
        _this.green_2cpy.visible = true
        _this.green_3cpy.visible = true
        _this.pink_1cpy.visible = true
        _this.pink_2cpy.visible = true
        _this.pink_3cpy.visible = true



        _this.green_1cpy.inputEnabled = true;
        _this.green_2cpy.inputEnabled = true;
        _this.green_3cpy.inputEnabled = true;

        _this.pink_1cpy.inputEnabled = true;
        _this.pink_2cpy.inputEnabled = true;
        _this.pink_3cpy.inputEnabled = true;

        _this.green_1cpy.input.useHandCursor = true;
        _this.green_2cpy.input.useHandCursor = true;
        _this.green_3cpy.input.useHandCursor = true;

        _this.pink_1cpy.input.useHandCursor = true;
        _this.pink_2cpy.input.useHandCursor = true;
        _this.pink_3cpy.input.useHandCursor = true;


        _this.green_1cpy.input.enableDrag(true);
        _this.green_2cpy.input.enableDrag(true);
        _this.green_3cpy.input.enableDrag(true)
        _this.pink_1cpy.input.enableDrag(true);
        _this.pink_2cpy.input.enableDrag(true);
        _this.pink_3cpy.input.enableDrag(true);

        _this.green_1cpy.events.onDragStart.add(_this.placeholderDragged);
        _this.green_2cpy.events.onDragStart.add(_this.placeholderDragged);
        _this.green_3cpy.events.onDragStart.add(_this.placeholderDragged);
        _this.pink_1cpy.events.onDragStart.add(_this.placeholderDragged);
        _this.pink_2cpy.events.onDragStart.add(_this.placeholderDragged);
        _this.pink_3cpy.events.onDragStart.add(_this.placeholderDragged);

        _this.green_1cpy.events.onDragStop.add(_this.placeholderTileClicked);
        _this.green_2cpy.events.onDragStop.add(_this.placeholderTileClicked);
        _this.green_3cpy.events.onDragStop.add(_this.placeholderTileClicked);

        _this.pink_1cpy.events.onDragStop.add(_this.placeholderTileClicked);
        _this.pink_2cpy.events.onDragStop.add(_this.placeholderTileClicked);
        _this.pink_3cpy.events.onDragStop.add(_this.placeholderTileClicked);


        _this.green_1cpy.initialX = _this.green_1.x;
        _this.green_2cpy.initialX = _this.green_2.x;
        _this.green_3cpy.initialX = _this.green_3.x;
        _this.green_1cpy.initialY = _this.green_1.y;
        _this.green_2cpy.initialY = _this.green_2.y;
        _this.green_3cpy.initialY = _this.green_3.y;

        _this.pink_1cpy.initialX = _this.pink_1.x;
        _this.pink_2cpy.initialX = _this.pink_2.x;
        _this.pink_3cpy.initialX = _this.pink_3.x;
        _this.pink_1cpy.initialY = _this.pink_1.y;
        _this.pink_2cpy.initialY = _this.pink_2.y;
        _this.pink_3cpy.initialY = _this.pink_3.y;

        _this.wrongGrp = _this.add.group();

    },
    factroize: function (a, b, c, d, i) {
        root1num = (-b + Math.sqrt(d));
        denom1 = Math.abs(2 * a);

        for (t = denom1; t >= 2; t--) {
            if (root1num % t == 0 && denom1 % t == 0) {
                denom1 = denom1 / t;
                root1num = root1num / t;
            }
        }
        root1num = -root1num;

        if (a < 0) {
            // negative number
            root1num = -root1num;
            // denom1 = -denom1;

        }

        if (root1num > 0)
            root1num = "+" + root1num


        if (denom1 == 1) {
            if (2 * a < 0)
                root1 = "1x" + root1num;
            else
                root1 = "1x" + root1num;
        }
        else {
            // if (2 * a < 0)
            //     denom1 = -denom1;
            root1 = denom1 + "x" + root1num;
        }


        root2num = (-b - Math.sqrt(d));
        denom2 = Math.abs(2 * a);
        for (t = denom2; t >= 2; t--) {
            if (root2num % t == 0 && denom2 % t == 0) {
                denom2 = denom2 / t;
                root2num = root2num / t;
            }
        }
        root2num = -root2num;
        if (root2num > 0)
            root2num = "+" + root2num


        if (denom2 == 1) {
            if (2 * a < 0)
                root2 = "-1x" + root2num;
            else
                root2 = "1x" + root2num;
        }
        else {
            if (2 * a < 0)
                denom2 = -denom2;

            root2 = denom2 + "x" + root2num;
        }

        factor1[i] = root1;
        factor2[i] = root2;
        // console.log(root1 + " " + root2)
        if (denom1 * (denom2) != a || (Math.abs(denom1 * 4) + Math.abs(root1num)) > 13 || (Math.abs(denom2 * 4) + Math.abs(root2num)) > 13 || ((Math.abs(denom1 * 4) + Math.abs(root1num)) > 13 && (Math.abs(denom2 * 4) + Math.abs(root2num)) > 13) || ((Math.abs(denom1 * 4) + Math.abs(root1num)) > 13 && (Math.abs(denom2 * 4) + Math.abs(root2num)) > 13))
            return false;

    },
    StoreArrayValues: function () {


        valuesCombinations = [0, 0, 0, 0, 0, 0]
        val = [0, 0, 0, 0, 0, 0]

        discriminantarr = [0, 0, 0, 0, 0, 0]
        eqvar1 = [0, 0, 0, 0, 0, 0]
        eqvar2 = [0, 0, 0, 0, 0, 0]
        eqvar3 = [0, 0, 0, 0, 0, 0]
        factor1 = [0, 0, 0, 0, 0, 0];
        factor2 = [0, 0, 0, 0, 0, 0];
        zeroCn = 0

        randIdx = [0, 1, 2, 3, 4, 5]
        randIdx = _this.shuffle(randIdx)
        randarr = [randIdx[0], randIdx[1]]

        for (i = 0; i < 6; i++) {
            redo = false;
            signArrx2 = ['+', "-"]
            signArrx2 = _this.shuffle(signArrx2)

            sqrEq1 = Math.floor(Math.random() * 10) + 1;
            constvar = Math.floor(Math.random() * 9) + 1;
            if (signArrx2[0] == '-') {
                sqrEq1 = -sqrEq1;
                constvar = -constvar;
            }

            signArrx = ['+', "-"]
            signArrx = _this.shuffle(signArrx)
            sqrEq2 = Math.floor(Math.random() * 12) + 1;
            if (randarr.includes(i) && zeroCn < 2) {
                if (Number.isInteger(Math.sqrt(4 * sqrEq1 * constvar))) {
                    sqrEq2 = Math.sqrt(4 * sqrEq1 * constvar)
                }
                else {
                    while (Number.isInteger(Math.sqrt(4 * sqrEq1 * constvar)) == false) {
                        signArrx2 = ['+', "-"]
                        signArrx2 = _this.shuffle(signArrx2)
                        sqrEq1 = Math.floor(Math.random() * 10) + 1;
                        constvar = Math.floor(Math.random() * 9) + 1;
                        if (signArrx2[0] == '-') {
                            sqrEq1 = -sqrEq1;
                            constvar = -constvar;
                        }

                    }
                    sqrEq2 = Math.sqrt(4 * sqrEq1 * constvar)
                }
            }

            if (signArrx[0] == "-")
                sqrEq2 = -sqrEq2;

            discriminant = (sqrEq2 * sqrEq2) - (4 * sqrEq1 * constvar);

            while (discriminant < 0 || Number.isInteger(Math.sqrt(discriminant)) == false || _this.factroize(sqrEq1, sqrEq2, constvar, discriminant, i) == false || val.includes(sqrEq1 + "x\u{00B2}" + sqrEq2 + "x" + constvar)) {
                signArrx2 = ['+', "-"]
                signArrx2 = _this.shuffle(signArrx2)

                sqrEq1 = Math.floor(Math.random() * 10) + 1;
                constvar = Math.floor(Math.random() * 9) + 1;
                if (signArrx2[0] == '-') {
                    sqrEq1 = -sqrEq1;
                    constvar = -constvar;
                }

                signArrx = ['+', "-"]
                signArrx = _this.shuffle(signArrx)
                sqrEq2 = Math.floor(Math.random() * 12) + 1;
                if (randarr.includes(i) && zeroCn < 2) {
                    if (Number.isInteger(Math.sqrt(4 * sqrEq1 * constvar))) {
                        sqrEq2 = Math.sqrt(4 * sqrEq1 * constvar)
                    }
                    else {
                        cn = 0;
                        while (!Number.isInteger(Math.sqrt(4 * sqrEq1 * constvar))) {
                            signArrx2 = ['+', "-"]
                            signArrx2 = _this.shuffle(signArrx2)

                            sqrEq1 = Math.floor(Math.random() * 10) + 1;
                            constvar = Math.floor(Math.random() * 9) + 1;
                            if (signArrx2[0] == '-') {
                                sqrEq1 = -sqrEq1;
                                constvar = -constvar;
                            }

                        }
                        sqrEq2 = Math.sqrt(4 * sqrEq1 * constvar)
                    }
                }
                if (signArrx[0] == "-")
                    sqrEq2 = -sqrEq2;

                discriminant = (sqrEq2 * sqrEq2) - (4 * sqrEq1 * constvar);

            }

            if (discriminant == 0)
                zeroCn++;

            discriminantarr[i] = discriminant;
            eqvar1[i] = sqrEq1;
            eqvar2[i] = sqrEq2;
            eqvar3[i] = constvar


            val[i] = sqrEq1 + "x\u{00B2}" + sqrEq2 + "x" + constvar

            if (sqrEq2 > 0)
                sqrEq2 = "+" + sqrEq2
            if (constvar > 0)
                constvar = "+" + constvar
            valuesCombinations[i] = sqrEq1 + "x\u{00B2}" + sqrEq2 + "x" + constvar
        }
        // console.log(factor1)
        // console.log(factor2)
        console.log(valuesCombinations)

    },
    getpos(type, start = 0) {

        countg = start * 4;
        flag = -1;
        if (type == 'sq') {
            for (i = start; i < 15; i++) {
                if (_this.posarr[countg] == false) {
                    flag = 1;
                    for (m = countg; m < countg + 4; m++) {
                        if (_this.posarr[m] != false) {
                            flag = -1;
                            break;
                        }
                    }
                    if (flag == 1)
                        return i;
                }
                countg += 4;
            }
        }
        else if (type == 'line') {
            for (i = start; i < 60; i++) {
                if (_this.posarr[i] == false) {
                    return i;
                }
            }
        }
        else {
            for (i = start; i < 260; i++) {
                if (_this.posarr2[i] == false) {
                    return i;
                }
            }
        }

        if (start != 0) {
            start = 0;
            countg = start * 4;
            flag = -1;
            if (type == 'sq') {
                for (i = start; i < 15; i++) {
                    if (_this.posarr[countg] == false) {
                        flag = 1;
                        for (m = countg; m < countg + 4; m++) {
                            if (_this.posarr[m] != false) {
                                flag = -1;
                                break;
                            }
                        }
                        if (flag == 1)
                            return i;
                    }
                    countg += 4;
                }
            }
            else if (type == 'line') {
                for (i = start; i < 60; i++) {
                    if (_this.posarr[i] == false) {
                        return i;
                    }
                }
            }
            else {
                for (i = start; i < 260; i++) {
                    if (_this.posarr2[i] == false) {
                        return i;
                    }
                }
            }
        }

    },
    tilex2clicked: function (target) {
        y = 0
        if (target.key.includes('green')) {
            key = "grnbig"
        }
        else {
            y = 1;
            key = 'pinkbig'
        }
        if (_this.line1Count('sq') == Math.ceil(Math.abs(eqvar1[_this.count1]) / 2) && _this.line2Count('sq') != Math.floor(Math.abs(eqvar1[_this.count1]) / 2)) {
            pos = _this.getpos('sq', 5)
            // need to change line
        }
        else {
            pos = _this.getpos('sq', 0);

        }
        // if (pos < 15 && _this.x2group.children.length < Math.abs(eqvar1[_this.count1])) {
        if (pos < 15) {
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();
            box = _this.add.sprite(250 + (98 * (pos % 5)), 170 + (Math.floor(pos / 5) * 100) + y, key)
            for (let k = pos * 4; k < pos * 4 + 4; k++) {
                _this.posarr[k] = true;
            }
            _this.x2group.addChild(box);
            box.Idx = pos * 4;

        }
    },
    tilexclicked: function (target) {
        // increase 100 in x

        y = 0;
        if (target.key.includes('green')) {
            key = "grnvr"
        }
        else {
            key = 'pinkvr'
            y = 1;
        }
        if (Math.abs(eqvar1[_this.count1]) > 1 && _this.line1Count('line') == Math.ceil(Math.abs(eqvar2[_this.count1]) / 2) && _this.line2Count('line') != Math.floor(Math.abs(eqvar2[_this.count1]) / 2)) {
            pos = _this.getpos('line', 24)
            // means need to change line
        }
        else {
            pos = _this.getpos('line', 0);
        }
        // if (pos < 80 && _this.xgroup.children.length < Math.abs(eqvar2[_this.count1])) {
        if (pos < 60) {
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();
            box = _this.add.sprite(250 + (24.5 * (pos % 20)), 170 + (Math.floor(pos / 20) * 100) + y, key)
            _this.posarr[pos] = true;
            _this.xgroup.addChild(box);
            box.Idx = pos;
        }


    },
    getBoxIdx: function () {
        for (let k = 0; k < 80; k++) {
            if (_this.posarr[k] == true) {
                for (m = 0; m < 4; m++) {
                    _this.posarr2[(Math.floor(k / 20) * 20 * 4) + (k % 20 + 20 * m)] = true;
                }
            }
        }
        Initialmax = 250;
        pos = 0
        if (_this.line2Count('line') == 0) {
            currY = 270;
            pos = 80;
        }
        else {
            currY = 370;
            pos = 160;
        }
        return pos;

    },
    tileboxclicked: function (target) {

        y = 0;
        if (target.key.includes('green')) {
            key = "grnsmall"
        }
        else {
            key = 'pinksmall'
            y = 1;
        }

        if (_this.line1Count('box', 170 + Math.floor(pos / 20) * 25) == ((Math.floor(Math.abs(eqvar1[_this.count1]) / 2) * 4) != 0 ? Math.floor(Math.abs(eqvar1[_this.count1]) / 2) * 4 : 4)) {
            pos = _this.getpos('box', _this.strtIdx += 20)
        }
        else {
            pos = _this.getpos('box', _this.strtIdx);
        }
        if (pos < 260) {

            _this.snapSound.currentTime = 0;
            _this.snapSound.play();
            box = _this.add.sprite(250 + (24.5 * (pos % 20)), 170 + Math.floor(pos / 20) * 25 + y, key)
            _this.posarr2[pos] = true;
            _this.constgroup.addChild(box);
            box.Idx = pos;
        }
    },
    line1Count: function (key, currY = 0) {
        count = 0;
        if (key == 'line') {
            for (let j = 0; j < _this.xgroup.children.length; j++) {
                if (_this.xgroup.getChildAt(j).y <= 180)
                    count++;
            }
        }
        if (key == 'sq') {
            for (let j = 0; j < _this.x2group.children.length; j++) {
                if (_this.x2group.getChildAt(j).y <= 180)
                    count++;
            }
        }
        if (key == 'box') {
            for (let j = 0; j < _this.constgroup.children.length; j++) {
                if (_this.constgroup.getChildAt(j).y <= currY + 5 && _this.constgroup.getChildAt(j).y > currY - 24)
                    count++;
            }
        }
        return count;
    },
    line2Count: function (key) {
        count = 0;
        if (key == 'line') {
            for (let j = 0; j < _this.xgroup.children.length; j++) {
                if (_this.xgroup.getChildAt(j).y <= 280 && _this.xgroup.getChildAt(j).y > 180)
                    count++;
            }
        }
        if (key == 'sq') {
            for (let j = 0; j < _this.x2group.children.length; j++) {
                if (_this.x2group.getChildAt(j).y <= 280 && _this.x2group.getChildAt(j).y > 180)
                    count++;
            }
        }
        return count;
    },
    showHandtween: function () {

        _this.hand = _this.add.sprite(820, 125, 'hand');
        _this.hand.scale.setTo(0.55);

        _this.time.events.add(1200, () => {
            _this.clickSound.play()
            _this.hand.scale.setTo(0.5);
            _this.time.events.add(800, () => {
                _this.conversionBox.frame = 0;
                _this.hand.scale.setTo(0.55);
            })
        })

        _this.time.events.add(3200, () => {
            _this.hand.destroy();
            _this.conversionBox.frame = 1;
            _this.conversionBox.inputEnabled = true;
            _this.conversionBox.events.onInputDown.add(_this.convertShape)

        })
    },
    disableBoxes: function () {
        _this.pink_1.inputEnabled = false;
        _this.pink_2.inputEnabled = false;
        _this.pink_3.inputEnabled = false;
        _this.green_1.inputEnabled = false;
        _this.green_2.inputEnabled = false;
        _this.green_3.inputEnabled = false;

        _this.pink_1cpy.inputEnabled = false;
        _this.pink_2cpy.inputEnabled = false;
        _this.pink_3cpy.inputEnabled = false;
        _this.green_1cpy.inputEnabled = false;
        _this.green_2cpy.inputEnabled = false;
        _this.green_3cpy.inputEnabled = false;
    },

    dragStart: function (target) {
        _this.clickSound.play();
    },
    dragUpdate: function (target) {
        target.bringToTop();
        _this.world.bringToTop(_this.x2group)
        _this.world.bringToTop(_this.xgroup)
        _this.world.bringToTop(_this.constgroup)

    },
    dragStop: function (target) {

        if (_this.checkOverlap(target, _this.anssqgrp)) {

            _this.snapSound.pause();
            _this.snapSound.currentTime = 0;
            _this.snapSound.play();

            for (i = 0; i < _this.anssqgrp.children.length; i++) {
                element = _this.anssqgrp.getChildAt(i);
                if (element.key.includes('big') && target.key.includes('big') && element.frame == 2) {
                    element.frame = 0;
                    target.visible = false;
                    target.inputEnabled = false;
                    break;
                }
                else if (element.key.includes('small') && target.key.includes('small') && element.frame == 2) {
                    element.frame = 0;
                    target.visible = false;
                    target.inputEnabled = false;

                    break;
                }
                else if (element.frame == 2 && target.key.includes('vr') && (element.key.includes('vr') || element.key.includes('hr'))) {
                    element.frame = 0;
                    target.visible = false;
                    target.inputEnabled = false;

                    break;
                }
            }
            target.x = target.initialX;
            target.y = target.initialY;
        }
        else {
            target.x = target.initialX;
            target.y = target.initialY;
        }
        _this.world.bringToTop(_this.anssqgrp)
    },
    eraserUpdate: function (target) {
        _this.world.bringToTop(_this.eraser)
    },
    eraserDrop: function (target) {

        if (_this.part1 == true && _this.checkOverlap(target, _this.x2group)) {
            for (i = 0; i < _this.x2group.children.length; i++) {
                if (_this.checkOverlap(target, _this.x2group.getChildAt(i))) {
                    for (let k = 0; k < 4; k++)
                        _this.posarr[_this.x2group.getChildAt(i).Idx + k] = false;
                    _this.x2group.getChildAt(i).destroy();

                }
            }
        }
        else if (_this.part2 == true && _this.checkOverlap(target, _this.xgroup)) {
            for (i = 0; i < _this.xgroup.children.length; i++) {
                if (_this.checkOverlap(target, _this.xgroup.getChildAt(i))) {
                    _this.posarr[_this.xgroup.getChildAt(i).Idx] = false;
                    _this.xgroup.getChildAt(i).destroy();
                }
            }
        }
        else if (_this.part3 == true && _this.checkOverlap(target, _this.constgroup)) {
            for (i = 0; i < _this.constgroup.children.length; i++) {
                if (_this.checkOverlap(target, _this.constgroup.getChildAt(i))) {
                    _this.posarr2[_this.constgroup.getChildAt(i).Idx] = false;
                    _this.constgroup.getChildAt(i).destroy();

                    if (_this.line2Count('line') == 0) {
                        _this.strtIdx = 80;
                    }
                    else {
                        _this.strtIdx = 160;
                    }
                }
            }
        }
        else if ((_this.place1 == true || _this.place2 == true) && _this.checkOverlap(target, _this.placeholders)) {
            for (i = 0; i < _this.placeholders.children.length; i++) {
                element = _this.placeholders.getChildAt(i)
                if (_this.checkOverlap(target, element) && element.editable == true) {
                    if (element.frame != 2) {
                        element.frame = 2;
                        target.x = 800;
                        target.y = 85;
                        _this.eraser.scale.setTo(1);
                        break;
                    }
                    else {
                        for (j = 0; j < _this.wrongGrp.children.length; j++) {
                            element = _this.wrongGrp.getChildAt(j);
                            if (_this.checkOverlap(element, target)) {
                                element.destroy();
                                target.x = 800;
                                target.y = 85;
                                _this.eraser.scale.setTo(1);
                                return;
                            }
                        }
                    }
                }
            }
        }

        target.x = 800;
        target.y = 85;
        _this.eraser.scale.setTo(1);

    },
    evaluateCubes: function (grp, ans) {
        anscount = 0;
        if (grp.children.length != Math.abs(ans)) return false;
        if (ans >= 1) {
            anskey = 'pink'
        }
        else {
            anskey = 'grn'
        }
        flag = 1;
        grp.children.forEach(element => {
            if (element.key.includes(anskey) == false) {
                flag = 0
            }
        });
        return flag == 1;
    },
    evaluateCubesDrop: function () {
        flag = true;
        _this.anssqgrp.forEach(element => {
            if (element.frame == 2) {
                flag = false;
            }
        });
        return flag;
    },
    rearangeTiles: function (ans) {
        if (_this.part1 == true) {
            for (j = _this.x2group.children.length - 1; j >= 0; j--) {
                // if (!_this.x2group.getChildAt(j).key.includes(anskey)) {
                for (let k = 0; k < 4; k++)
                    _this.posarr[_this.x2group.getChildAt(j).Idx + k] = false;
                _this.x2group.getChildAt(j).destroy();
                // }
            }
            for (s = 0; s < Math.abs(ans); s++) {

                y = 0
                if (ans < 0) {
                    key = "grnbig"
                }
                else {
                    y = 1;
                    key = 'pinkbig'
                }
                if (_this.line1Count('sq') == Math.ceil(Math.abs(eqvar1[_this.count1]) / 2) && _this.line2Count('sq') != Math.floor(Math.abs(eqvar1[_this.count1]) / 2)) {
                    pos = _this.getpos('sq', 5)
                    // need to change line
                }
                else {
                    pos = _this.getpos('sq', 0);

                }
                // if (pos < 15 && _this.x2group.children.length < Math.abs(eqvar1[_this.count1])) {
                if (pos < 15) {
                    box = _this.add.sprite(250 + (98 * (pos % 5)), 170 + (Math.floor(pos / 5) * 100) + y, key)
                    for (let k = pos * 4; k < pos * 4 + 4; k++) {
                        _this.posarr[k] = true;
                    }
                    _this.x2group.addChild(box);
                    box.Idx = pos * 4;

                }
            }
        }
        else if (_this.part2 == true) {
            for (j = _this.xgroup.children.length - 1; j >= 0; j--) {
                _this.posarr[_this.xgroup.getChildAt(j).Idx] = false;
                _this.xgroup.getChildAt(j).destroy();
            }
            for (s = 0; s < Math.abs(ans); s++) {

                y = 0;
                if (ans < 0) {
                    key = "grnvr"
                }
                else {
                    key = 'pinkvr'
                    y = 1;
                }
                if (Math.abs(eqvar1[_this.count1]) > 1 && _this.line1Count('line') == Math.ceil(Math.abs(eqvar2[_this.count1]) / 2) && _this.line2Count('line') != Math.floor(Math.abs(eqvar2[_this.count1]) / 2)) {
                    pos = _this.getpos('line', 24)
                    // means need to change line
                }
                else {
                    pos = _this.getpos('line', 0);
                }
                if (pos < 80) {
                    box = _this.add.sprite(250 + (24.5 * (pos % 20)), 170 + (Math.floor(pos / 20) * 100) + y, key)
                    _this.posarr[pos] = true;
                    _this.xgroup.addChild(box);
                    box.Idx = pos;
                }
            }
        }
        else {
            for (j = _this.constgroup.children.length - 1; j >= 0; j--) {
                _this.posarr2[_this.constgroup.getChildAt(j).Idx] = false;
                _this.constgroup.getChildAt(j).destroy();
            }
            _this.strtIdx = _this.getBoxIdx();

            for (s = 0; s < Math.abs(ans); s++) {
                y = 0;
                if (ans < 0) {
                    key = "grnsmall"
                }
                else {
                    key = 'pinksmall'
                    y = 1;
                }

                if (_this.line1Count('box', 170 + Math.floor(pos / 20) * 25) == ((Math.floor(Math.abs(eqvar1[_this.count1]) / 2) * 4) != 0 ? Math.floor(Math.abs(eqvar1[_this.count1]) / 2) * 4 : 4)) {
                    pos = _this.getpos('box', _this.strtIdx += 20)
                }
                else {
                    pos = _this.getpos('box', _this.strtIdx);
                }
                // if (pos < 260 && _this.constgroup.children.length < Math.abs(eqvar3[_this.count1])) {
                if (pos < 260) {

                    _this.snapSound.currentTime = 0;
                    _this.snapSound.play();
                    box = _this.add.sprite(250 + (24.5 * (pos % 20)), 170 + Math.floor(pos / 20) * 25 + y, key)
                    _this.posarr2[pos] = true;
                    _this.constgroup.addChild(box);
                    box.Idx = pos;
                }
            }
        }
    },

    rightbtnClicked: function () {
        _this.userselected = 0;
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;
        _this.rightbtn_is_Clicked = true;

        if (_this.part1 == true) {
            _this.rightbtn.frame = 1;
            _this.disableBoxes()
            if (_this.evaluateCubes(_this.x2group, eqvar1[_this.count1])) {
                _this.rearangeTiles(eqvar1[_this.count1]);

                _this.part1 = false;
                _this.part2 = true;
                _this.counterCelebrationSound.currentTime = 0;
                _this.counterCelebrationSound.play();

                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                    _this.rightbtn.inputEnabled = true;
                    _this.yellowBox1.destroy();
                    _this.yellowBox2.visible = true;

                    _this.green_2.inputEnabled = true;
                    _this.pink_2.inputEnabled = true;
                    _this.green_2.input.useHandCursor = true;
                    _this.pink_2.input.useHandCursor = true;
                    _this.green_2.events.onInputDown.add(_this.tilexclicked);
                    _this.pink_2.events.onInputDown.add(_this.tilexclicked);

                })

            }
            else {
                _this.wrongans.play();

                if (eqvar1[_this.count1] >= 1) {
                    anskey = 'pink'
                }
                else {
                    anskey = 'grn'
                }
                for (j = _this.x2group.children.length - 1; j >= 0; j--) {
                    for (let k = 0; k < 4; k++)
                        _this.posarr[_this.x2group.getChildAt(j).Idx + k] = false;
                    _this.x2group.getChildAt(j).destroy();
                }

                _this.green_1.inputEnabled = true;
                _this.pink_1.inputEnabled = true;
                _this.green_1.input.useHandCursor = true;
                _this.pink_1.input.useHandCursor = true;
                _this.green_1.events.onInputDown.add(_this.tilex2clicked);
                _this.pink_1.events.onInputDown.add(_this.tilex2clicked);

                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                })

                _this.eraser.inputEnabled = true;
                _this.eraser.input.enableDrag(true);
                _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
                _this.eraser.events.onDragStop.add(_this.eraserDrop, _this);
                _this.eraser.bringToTop();
                _this.rightbtn.inputEnabled = true;

            }
        }
        else if (_this.part2 == true) {
            _this.rightbtn.frame = 1;
            _this.disableBoxes()
            if (_this.evaluateCubes(_this.xgroup, eqvar2[_this.count1])) {
                _this.rearangeTiles(eqvar2[_this.count1]);
                _this.part2 = false;
                _this.part3 = true;
                _this.counterCelebrationSound.currentTime = 0;
                _this.counterCelebrationSound.play();
                _this.strtIdx = _this.getBoxIdx();


                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                    _this.rightbtn.inputEnabled = true;
                    _this.yellowBox2.destroy();
                    _this.yellowBox3.visible = true;

                    _this.green_3.inputEnabled = true;
                    _this.pink_3.inputEnabled = true;
                    _this.green_3.input.useHandCursor = true;
                    _this.pink_3.input.useHandCursor = true;
                    _this.green_3.events.onInputDown.add(_this.tileboxclicked);
                    _this.pink_3.events.onInputDown.add(_this.tileboxclicked);
                })
            }
            else {
                _this.wrongans.play();

                if (eqvar2[_this.count1] >= 1) {
                    anskey = 'pink'
                }
                else {
                    anskey = 'grn'
                }
                for (j = _this.xgroup.children.length - 1; j >= 0; j--) {
                    // if (!_this.xgroup.getChildAt(j).key.includes(anskey)) {
                    _this.posarr[_this.xgroup.getChildAt(j).Idx] = false;
                    _this.xgroup.getChildAt(j).destroy();
                    // }
                }
                _this.green_2.inputEnabled = true;
                _this.pink_2.inputEnabled = true;
                _this.green_2.input.useHandCursor = true;
                _this.pink_2.input.useHandCursor = true;
                _this.green_2.events.onInputDown.add(_this.tilexclicked);
                _this.pink_2.events.onInputDown.add(_this.tilexclicked);

                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                })

                _this.eraser.inputEnabled = true;
                _this.eraser.input.enableDrag(true);
                _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
                _this.eraser.events.onDragStop.add(_this.eraserDrop, _this);
                _this.eraser.bringToTop();
                _this.rightbtn.inputEnabled = true;

            }
        }
        else if (_this.part3 == true) {
            _this.rightbtn.frame = 1;
            _this.disableBoxes()
            if (_this.evaluateCubes(_this.constgroup, eqvar3[_this.count1])) {
                _this.rearangeTiles(eqvar3[_this.count1]);
                _this.part3 = false;
                _this.counterCelebrationSound.currentTime = 0;
                _this.counterCelebrationSound.play();

                _this.Question_flag = 3;
                if (_this.count1 == 0) {
                    _this.time.events.add(1200, () => {
                        _this.Ask_Question3.play();
                    })
                }

                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                    _this.rightbtn.inputEnabled = true;
                    _this.yellowBox3.destroy();
                    _this.eraser.visible = false;

                    _this.conversionBox = _this.add.sprite(800, 85, 'yellowbox');
                    _this.conversionBox.frame = 1;
                    if (_this.count1 == 0) { _this.showHandtween() }
                    else {
                        _this.conversionBox.inputEnabled = true;
                        _this.conversionBox.events.onInputDown.add(_this.convertShape)
                    }
                })

            }
            else {
                _this.wrongans.play();

                if (eqvar3[_this.count1] >= 1) {
                    anskey = 'pink'
                }
                else {
                    anskey = 'grn'
                }
                for (j = _this.constgroup.children.length - 1; j >= 0; j--) {
                    _this.posarr2[_this.constgroup.getChildAt(j).Idx] = false;
                    _this.constgroup.getChildAt(j).destroy();
                }
                _this.strtIdx = _this.getBoxIdx();

                _this.green_3.inputEnabled = true;
                _this.pink_3.inputEnabled = true;
                _this.green_3.input.useHandCursor = true;
                _this.pink_3.input.useHandCursor = true;
                _this.green_3.events.onInputDown.add(_this.tileboxclicked);
                _this.pink_3.events.onInputDown.add(_this.tileboxclicked);

                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                })

                _this.eraser.inputEnabled = true;
                _this.eraser.input.enableDrag(true);
                _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
                _this.eraser.events.onDragStop.add(_this.eraserDrop, _this);
                _this.eraser.bringToTop();
                _this.rightbtn.inputEnabled = true;

            }
        }
        else if (_this.part4 == true) {

            _this.Question_flag = 5;
            if (_this.count1 == 0) {
                _this.time.events.add(2000, () => {
                    _this.Ask_Question5.play();
                })
            }

            _this.eraser.inputEnabled = false;
            _this.rightbtn.inputEnabled = false;
            _this.rightbtn.frame = 1;
            if (_this.evaluateCubesDrop()) {
                _this.part4 = false;
                _this.place1 = true;
                _this.counterCelebrationSound.currentTime = 0;
                _this.counterCelebrationSound.play();
                _this.showSidePanel();
                _this.makeEqualSign();
                _this.space1.destroy();
                _this.space2.destroy();

                _this.space2 = _this.add.sprite(230, 160, 'panel_1');
                _this.space2.scale.setTo(1, 0.95);
                _this.space2.visible = false;

                _this.space1 = _this.add.sprite(230, 160, 'panel_2');
                _this.space1.scale.setTo(1, 0.92);

                _this.anssqgrp.forEach(element => {
                    element.x -= 300
                    element.y += 20

                });
                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                    _this.rightbtn.inputEnabled = true;
                    _this.showPlaceholderTween();
                    _this.eraser.inputEnabled = true;
                    _this.eraser.input.enableDrag(true);
                    _this.eraser.events.onDragUpdate.add(_this.eraserUpdate, _this);
                    _this.eraser.events.onDragStop.add(_this.eraserDrop, _this);
                    _this.eraser.bringToTop();
                })

                _this.world.bringToTop(_this.anssqgrp)



            }
            else {
                _this.wrongans.play();
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.frame = 0;
            }
        }
        else if (_this.place1 == true || _this.place2 == true) {

            console.log("final !!! >XO");
            if (_this.checkPlacTiles()) {
                _this.counterCelebrationSound.currentTime = 0;
                _this.counterCelebrationSound.play();

                console.log("final !!! >XO !!");


                if (_this.place1 == true) {
                    _this.place1 = false;
                    _this.place2 = true;
                    _this.placeholders.forEach(element => {
                        element.editable = false;
                    });
                    _this.showVerticalPlaceholders();

                }
                else {
                    console.log("final !!! >Okay!!! !!");
                    _this.place2 = false;
                    _this.factor1eq = true;
                    _this.factor1done = false;
                    _this.factor2done = false;
                    _this.eraser.inputEnabled = false;
                    _this.disableBoxes();
                    _this.space1.visible = false;
                    _this.space2.visible = true;

                    _this.space3 = _this.add.sprite(610, 160, 'panel_3');
                    _this.space3.scale.setTo(1, 0.95);
                    _this.maketextBox();
                    _this.generateOptions();

                    _this.Question_flag = 6;
                    if (_this.count1 == 0) {
                        _this.time.events.add(2000, () => {
                            _this.Ask_Question6.play();
                        })
                    }
                }
                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                    _this.rightbtn.inputEnabled = true;
                })
            }
            else {
                _this.wrongans.play();
                _this.wrongGrp.destroy();
                _this.wrongGrp = _this.add.group();
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.frame = 0;
            }
        }
        else if (_this.factor1eq == true || _this.factor2eq == true) {

            if (_this.checkFactors()) {
                _this.counterCelebrationSound.currentTime = 0;
                _this.counterCelebrationSound.play();

                console.log("final !!! >XOxo !!");

                if (_this.factor1eq == true) {
                    _this.factor1eq = false;
                    _this.factor2eq = true;
                    _this.astrk = _this.add.text(_this.b2.x + 20, 100, '*')
                    _this.applyingStyleGn(_this.astrk);
                    _this.astrk.scale.setTo(1);
                    _this.text3 = _this.text1;
                    _this.text4 = _this.text2;
                    _this.text1 = null;
                    _this.text2 = null;
                    _this.b3 = _this.b1;
                    _this.b4 = _this.b2;
                    _this.b1 = null;
                    _this.b2 = null;
                    _this.s2 = _this.s1;
                    _this.s1 = null;

                    _this.time.events.add(500, () => {
                        _this.options.destroy()
                        _this.generateOptions()
                    })

                }
                else {
                    _this.factor2eq = false;
                    _this.noofAttempts++;
                    _this.correctAns();

                }
                _this.time.events.add(500, () => {
                    _this.rightbtn.frame = 0;
                    _this.rightbtn.inputEnabled = true;
                })
            }
            else {
                console.log("final !!! >hey !!");
                _this.options.forEach(element => {
                    element.frame = 0;
                    element.getChildAt(0).fill = "#FF0000"
                    element.inputEnabled = true;
                    box.events.onInputDown.add(_this.optionClicked);
                });
                if (_this.text1) _this.text1.destroy();
                if (_this.text2) _this.text2.destroy();
                if (_this.b1) _this.b1.destroy();
                if (_this.b1) _this.b2.destroy();
                if (_this.s1) _this.s1.destroy();
                _this.term1 = false;

                _this.noofAttempts++;
                _this.wrongans.play();
                _this.rightbtn.inputEnabled = true;
                _this.rightbtn.frame = 0;
            }
        }
        else {
            _this.rightbtn.inputEnabled = true;
            _this.rightbtn.frame = 0;
        }

    },
    checkFactors: function () {
        var regex = /-?\d+/g
        var matches1 = factor2[_this.count1].match(regex);
        var matches2 = factor1[_this.count1].match(regex);

        if (!_this.text2 || !_this.text1)
            return false;

        if (_this.s1._text == '-')
            _this.text2._text = "-" + _this.text2._text

        if (_this.factor1eq == true) {
            if (((Math.abs(matches1[0]) == 1 && _this.text1._text.split("x")[0] + "1" == matches1[0]) || _this.text1._text == matches1[0] + "x") && Number(_this.text2._text) == Number(matches1[1])) {
                _this.factor1done = true;
                return true;
            }
            else if (((Math.abs(matches2[0]) == 1 && _this.text1._text.split("x")[0] + "1" == matches2[0]) || _this.text1._text == matches2[0] + "x") && Number(_this.text2._text) == Number(matches2[1])) {
                _this.factor2done = true;
                return true;
            }
        }


        if (_this.factor2done == true) {
            if (((Math.abs(matches1[0]) == 1 && _this.text1._text.split("x")[0] + "1" == matches1[0]) || _this.text1._text == matches1[0] + "x") && Number(_this.text2._text) == Number(matches1[1])) {
                return true;
            }
            return false;
        }
        else {
            if (((Math.abs(matches2[0]) == 1 && _this.text1._text.split("x")[0] + "1" == matches2[0]) || _this.text1._text == matches2[0] + "x") && Number(_this.text2._text) == Number(matches2[1])) {
                return true;
            }
            return false;
        }
    },
    maketextBox: function () {
        _this.textBox.destroy();
        _this.newTextBox = _this.add.sprite(15 + 40, 80, 'Text box_7')
        _this.newTextBox.scale.setTo(0.9, 1)

        _this.eq1 = _this.add.text(35 + 40, 100, eqvar1[_this.count1] == 1 || eqvar1[_this.count1] == -1 ? "x\u{00B2}" : eqvar1[_this.count1] + "x\u{00B2}")
        _this.applyingStyleGn(_this.eq1)
        _this.eq1.scale.setTo(1)


        _this.eq3 = _this.add.text(220, 100, Math.abs(eqvar3[_this.count1]))
        _this.applyingStyleGn(_this.eq3)
        _this.eq3.scale.setTo(1)

        if (Math.abs(eqvar2[_this.count1]) > 9) {
            if (eqvar1[_this.count1] < 0 && eqvar1[_this.count1] != -1)
                x = 124 + 25
            else
                x = 112 + 25
        }
        else {
            if (eqvar1[_this.count1] < 0 && eqvar1[_this.count1] != -1)
                x = 140 + 25
            else if (eqvar1[_this.count1] > 1)
                x = 132 + 25
            else
                x = 118 + 25
        }
        _this.eq2 = _this.add.text(x, 100, Math.abs(eqvar2[_this.count1]) + "x")
        _this.applyingStyleGn(_this.eq2)

        x = (_this.eq1.x + _this.eq2.x) / 2 + 12
        if (eqvar1[_this.count1] < 0 && eqvar1[_this.count1] != -1) {
            x += 7
        }
        if (eqvar1[_this.count1] == 1)
            x -= 6


        _this.signBtw2 = _this.add.text(x, 100, eqvar2[_this.count1] > 0 ? "+" : "-")
        _this.applyingStyleGn(_this.signBtw2)

        x = (_this.eq2.x + _this.eq3.x) / 2 + 6
        if (Math.abs(eqvar2[_this.count1]) > 9) {
            x += 8
        }
        if (eqvar3[_this.count1] < 0) {
            x += 6
        }
        _this.signBtw3 = _this.add.text(x, 100, eqvar3[_this.count1] > 0 ? "+" : "-")
        _this.applyingStyleGn(_this.signBtw3)

        _this.eq2.scale.setTo(1)
        _this.signBtw2.scale.setTo(1)
        _this.signBtw3.scale.setTo(1)


        _this.pSign1 = _this.add.graphics();
        _this.pSign1.lineStyle(4, 0x65B4C3);
        _this.pSign1.moveTo(250, 118);
        _this.pSign1.lineTo(250 + 18, 118);

        _this.pSign2 = _this.add.graphics();
        _this.pSign2.lineStyle(4, 0x65B4C3);
        _this.pSign2.moveTo(250, 112);
        _this.pSign2.lineTo(250 + 18, 112);

    },
    generateOptions: function () {
        _this.options = _this.add.group();
        var regex = /-?\d+/g
        var matches1 = factor1[_this.count1].match(regex);
        var matches2 = factor2[_this.count1].match(regex);

        {
            val1 = Math.abs(matches1[0])
            val2 = Math.abs(matches1[1])
            if (val1 != Math.abs(matches2[0]))
                val3 = Math.abs(matches2[0])
            if (val2 != Math.abs(matches2[1]))
                val4 = Math.abs(matches2[1])
            if (val1 == Math.abs(matches2[0])) {
                val3 = Math.floor(Math.random() * 4)
                while (val3 == val1 || val3 == 0) {
                    val3 = Math.floor(Math.random() * 4)
                }
            }
            if (val2 == Math.abs(matches2[1])) {
                val4 = Math.floor(Math.random() * 9)
                while (val4 == val2 || val4 == 0) {
                    val4 = Math.floor(Math.random() * 9)
                }
            }
            ch = [1, 2]
            ch = _this.shuffle(ch)
            if (ch[0] == 1) {
                val5 = Math.floor(Math.random() * 5)
                while (val5 == val1 || val5 == val3 || val5 == 0) {
                    val5 = Math.floor(Math.random() * 5)
                }
            }
            else {
                val5 = Math.floor(Math.random() * 9)
                while (val5 == val2 || val5 == val4 || val5 == 0) {
                    val5 = Math.floor(Math.random() * 9)
                }
            }

        }
        // else {
        //     val1 = Math.abs(matches1[0])
        //     val2 = Math.abs(matches1[1])
        // }

        // val3 = Math.floor(Math.random() * 4)
        // while (val3 == val1 || val3 == 0) {
        //     val3 = Math.floor(Math.random() * 4)
        // }
        optionsValueArr = [];




        if (val1 > 1)
            option1 = _this.add.text(20, 25, "+" + val1 + "x")
        else
            option1 = _this.add.text(25, 25, "+" + "x")

        option2 = _this.add.text(25, 25, "+" + val2)
        if (val1 > 1)
            option3 = _this.add.text(20, 25, -val1 + "x")
        else
            option3 = _this.add.text(30, 25, "-" + "x")
        option4 = _this.add.text(30, 25, -val2)

        if (val3 > 1) {
            option5 = _this.add.text(20, 25, "+" + val3 + "x")
            option6 = _this.add.text(20, 25, -val3 + "x")
        }
        else {
            option5 = _this.add.text(25, 25, "+" + "x")
            option6 = _this.add.text(30, 25, "-" + "x")
        }
        option7 = _this.add.text(25, 25, "+" + val4)
        option8 = _this.add.text(25, 25, -val4)
        if (ch[0] == 1) {
            if (val5 > 1)
                option9 = _this.add.text(25, 25, "+" + val5 + "x")
            else
                option9 = _this.add.text(25, 25, "+" + "x")


        }
        else {
            option9 = _this.add.text(25, 25, "+" + val5)

        }

        optionsValueArr.push(option1)
        optionsValueArr.push(option2)
        optionsValueArr.push(option3)
        optionsValueArr.push(option4)
        optionsValueArr.push(option6)
        optionsValueArr.push(option5)
        optionsValueArr.push(option9)
        optionsValueArr.push(option7)
        optionsValueArr.push(option8)

        optionsValueArr = _this.shuffle(optionsValueArr)

        cn = 0;
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                // if (cn < 8)
                {
                    box = _this.add.sprite(635 + 95 * j, 220 + i * 90, 'Optionbox');
                    _this.options.addChild(box);
                    box.addChild(optionsValueArr[cn])
                    _this.applyingStyle(optionsValueArr[cn])
                    optionsValueArr[cn].fill = '#FF0000';
                    cn++;
                    box.inputEnabled = true;
                    box.events.onInputDown.add(_this.optionClicked);
                }
            }
        }

    },
    optionClicked: function (target) {

        if (target.frame == 0) {
            _this.clickSound.currentTime = 0;
            _this.clickSound.play();
            _this.options.children.forEach(element => {
                if (element.frame == 1) {
                    element.frame = 0;
                }
            });

            target.frame = 1;
            _this.selectedAns = target;
            target.inputEnabled = false;
            _this.displayInTextbox(target.getChildAt(0));
            _this.time.events.add(500, () => {
                target.frame = 2;
                target.getChildAt(0).fill = '#808080'
            })
        }

    },
    displayInTextbox: function (target) {

        xval = _this.factor1eq == true ? 330 : _this.astrk.x + 70

        if (_this.term1 == true) {

            _this.ytext2 = _this.add.sprite(_this.text1._text.length == 3 ? xval + 5 : xval, 100, 'yellowTextBox')
            val = _this.text1._text.length == 3 ? 39 : _this.text1._text.length == 2 ? 29 : _this.text1._text.length == 1 ? 17 : 49
            _this.text2 = _this.add.text(_this.text1.x + val + 25, 100, target._text.split("+").length > 1 ? target._text.split("+")[1] : target._text.split("-")[1])
            _this.applyingStyleGn(_this.text2)
            _this.text2.scale.setTo(1)

            _this.s1 = _this.add.text(_this.text1.x + val + 6, 100, target._text.split("+").length > 1 ? "+" : "-")
            _this.applyingStyleGn(_this.s1)
            _this.s1.scale.setTo(1)

            _this.ytext2.x = _this.s1.x - 4
            len = _this.text2.x - _this.s1.x
            _this.ytext2.scale.setTo(len * 0.04 + _this.text2.width * 0.04, 1)
            _this.term1 = false
            _this.options.forEach(element => {
                element.inputEnabled = false;
            });

            _this.time.events.add(600, () => {
                _this.ytext2.destroy();
                if (_this.factor1eq == true) {
                    _this.b1 = _this.add.text(xval - 48, 100, '\u{00028}')
                    _this.applyingStyleGn(_this.b1)
                    _this.b1.scale.setTo(1.2)

                    val = _this.text2._text.length == 3 ? 39 : _this.text2._text.length == 2 ? 29 : _this.text2._text.length == 1 ? 17 : 49

                    _this.b2 = _this.add.text(_this.text2.x + val + 5, 100, '\u{00029}')
                    _this.applyingStyleGn(_this.b2)
                    _this.b2.scale.setTo(1.2)
                    // _this.term1 = false
                    // _this.options.forEach(element => {
                    //     element.inputEnabled = false;
                    // });
                }
                else {
                    _this.b1 = _this.add.text(xval - 47, 100, '\u{00028}')
                    _this.applyingStyleGn(_this.b1)
                    _this.b1.scale.setTo(1.2)

                    val = _this.text2._text.length == 3 ? 39 : _this.text2._text.length == 2 ? 29 : _this.text2._text.length == 1 ? 17 : 49

                    _this.b2 = _this.add.text(_this.text2.x + val + 5, 100, '\u{00029}')
                    _this.applyingStyleGn(_this.b2)
                    _this.b2.scale.setTo(1.2)


                }
            })
        }
        else {

            _this.term1 = true

            _this.ytext1 = _this.add.sprite(xval - 40, 100, 'yellowTextBox')

            _this.text1 = _this.add.text(xval - 30, 100, target._text.includes('+') ? target._text.split("+")[1] : target._text)
            _this.applyingStyleGn(_this.text1)
            _this.text1.scale.setTo(1)

            _this.ytext1.scale.setTo(_this.text1.width * 0.04, 1)
            if (_this.text1._text.length <= 2)
                _this.ytext1.scale.setTo(_this.text1.width * 0.05 + 0.2, 1)


            _this.time.events.add(600, () => {
                _this.ytext1.destroy();
            })

        }
    },
    checkPlacTiles: function () {

        for (i = 0; i < _this.placeholders.children.length; i++) {
            element = _this.placeholders.getChildAt(i);
            if (element.frame == 2)
                return false;
        }

        return _this.wrongans.children.length > 0

    },

    convertShape: function () {
        _this.clickSound.currentTime = 0;
        _this.framechange.play();
        _this.conversionBox.inputEnabled = false;
        _this.conversionBox.frame = 0;
        _this.part4 = true;
        _this.destroySidePanel();
        _this.textBox.x = 80;
        _this.space1.destroy();
        _this.space1 = _this.add.sprite(40, 160, 'panel_3');
        _this.space1.scale.setTo(1.55, 0.95);

        _this.Question_flag = 4;
        if (_this.count1 == 0) {
            _this.time.events.add(1200, () => {
                _this.Ask_Question4.play();
            })
        }

        _this.space2 = _this.add.sprite(560, 160, 'panel_1');
        _this.space2.scale.setTo(1, 0.95);

        _this.world.bringToTop(_this.x2group)
        _this.world.bringToTop(_this.xgroup)
        _this.world.bringToTop(_this.constgroup)


        _this.x2group.children.forEach(element => {
            element.x -= 195;
            element.initialX = element.x;
            element.initialY = element.y;

        });
        _this.xgroup.children.forEach(element => {
            element.x -= 195;
            element.initialX = element.x;
            element.initialY = element.y;
        });
        _this.constgroup.children.forEach(element => {
            element.x -= 195;
            element.initialX = element.x;
            element.initialY = element.y;
        });

        _this.makeAnsGrp();
        _this.time.events.add(500, () => {
            _this.conversionBox.frame = 0;
            _this.conversionBox.inputEnabled = false;
            _this.conversionBox.destroy();
            _this.eraser.visible = true;
            _this.eraser.inputEnabled = false;
        })

    },
    makeAnsGrp: function () {

        var regex = /-?\d+/g
        var matches1 = factor1[_this.count1].match(regex);
        var matches2 = factor2[_this.count1].match(regex);
        _this.sqgrp1 = _this.add.group;
        _this.sqgrp2 = _this.add.group;
        _this.sqgrp3 = _this.add.group;
        _this.anssqgrp = _this.add.group();

        for (i = 0; i < Math.abs(matches1[0]); i++) {
            for (j = 0; j < Math.abs(matches2[0]); j++) {
                box = _this.add.sprite(570 + j * 96, 170 + i * 96, _this.x2group.getChildAt(0).key)
                box.x -= 1;
                box.scale.setTo(1.02)
                box.frame = 2;
                _this.anssqgrp.addChild(box);

            }
        }
        for (i = 0; i < Math.abs(matches1[0]); i++) {
            for (j = 0; j < Math.abs(matches2[1]); j++) {
                box = _this.add.sprite(570 + Math.abs(matches2[0]) * 96 + j * 23, 170 + i * 96, _this.xgroup.getChildAt(0).key)
                box.frame = 2;
                _this.anssqgrp.addChild(box);
            }
        }
        for (i = 0; i < Math.abs(matches1[1]); i++) {
            for (j = 0; j < Math.abs(matches2[0]); j++) {
                box = _this.add.sprite(570 + j * 96, 170 + Math.abs(matches1[0]) * 96 + i * 23, _this.xgroup.getChildAt(0).key == 'pinkvr' ? 'pinkhr' : 'grnhr')
                box.frame = 2;
                _this.anssqgrp.addChild(box);


            }
        }

        for (i = 0; i < Math.abs(matches1[1]); i++) {
            for (j = 0; j < Math.abs(matches2[1]); j++) {
                box = _this.add.sprite(570 + j * 23 + Math.abs(matches2[0]) * 96, 170 + Math.abs(matches1[0]) * 96 + i * 23, _this.constgroup.getChildAt(0).key)
                box.frame = 2;
                if ((_this.constgroup.getChildAt(0).key == 'pinksmall') || (_this.xgroup.getChildAt(0).key == 'pinkvr')) {
                    box.y -= 1;
                }
                _this.anssqgrp.addChild(box);

            }
        }
        _this.x2group.children.forEach(element => {
            element.inputEnabled = true;
            element.input.enableDrag(true);
            element.input.useHandCursor = true;
            element.events.onDragUpdate.add(_this.dragUpdate, _this);
            element.events.onDragStart.add(_this.dragStart, _this);
            element.events.onDragStop.add(_this.dragStop, _this);

        });
        _this.xgroup.children.forEach(element => {
            element.inputEnabled = true;
            element.input.enableDrag(true);
            element.input.useHandCursor = true;
            element.events.onDragUpdate.add(_this.dragUpdate, _this);
            element.events.onDragStart.add(_this.dragStart, _this);
            element.events.onDragStop.add(_this.dragStop, _this);

        });
        _this.constgroup.children.forEach(element => {
            element.inputEnabled = true;
            element.input.enableDrag(true);
            element.input.useHandCursor = true;
            element.events.onDragUpdate.add(_this.dragUpdate, _this);
            element.events.onDragStart.add(_this.dragStart, _this);
            element.events.onDragStop.add(_this.dragStop, _this);

        });

    },

    showPlaceholderTween: function () {

        var regex = /-?\d+/g
        var matches1 = factor1[_this.count1].match(regex);
        var matches2 = factor2[_this.count1].match(regex);
        _this.placeholders = _this.add.group();
        for (i = 0; i < Math.abs(matches2[0]); i++) {
            box = _this.add.sprite(270 + i * 96, 169, _this.x2group.getChildAt(0).key.includes('pink') ? 'pinkhr' : 'grnhr')
            _this.placeholders.addChild(box);
            box.frame = 2;
            box.editable = true;
        }
        for (i = 0; i < Math.abs(matches2[1]); i++) {
            box = _this.add.sprite(270 + Math.abs(matches2[0]) * 96 + i * 23, 169, _this.xgroup.getChildAt(0).key.includes('pink') ? 'pinksmall' : 'grnsmall')
            _this.placeholders.addChild(box);
            box.frame = 2;
            if (_this.x2group.getChildAt(0).key.includes('pink')) {
                box.y -= 1;
            }
            box.editable = true;
        }

        _this.anssqgrp.forEach(element => {
            element.frame = 1;
        });

    },
    showVerticalPlaceholders: function () {
        var regex = /-?\d+/g
        var matches1 = factor1[_this.count1].match(regex);
        var matches2 = factor2[_this.count1].match(regex);

        for (i = 0; i < Math.abs(matches1[0]); i++) {
            box = _this.add.sprite(270 - 23, 191 + i * 96, matches1[0] >= 1 ? 'pinkvr' : 'grnvr')
            _this.placeholders.addChild(box);
            if (box.key.includes('pink')) {
                box.x -= 1;
                box.y += 1;
            }
            box.frame = 2;
            box.editable = true;
        }
        for (i = 0; i < Math.abs(matches1[1]); i++) {
            box = _this.add.sprite(270 - 24, 190 + i * 23 + Math.abs(matches1[0]) * 96, matches1[1] >= 1 ? 'pinksmall' : 'grnsmall')
            _this.placeholders.addChild(box);
            box.frame = 2;
            if (box.key.includes('grn') && _this.x2group.getChildAt(0).key.includes('pink')) {
                box.y -= 1;
                box.x -= 1;
            }
            box.y -= 1;
            box.editable = true;
        }
    },
    placeholderDragged: function (target) {
        target.bringToTop();
        _this.clickSound.play();
    },
    oppositeTilePrsnt: function (x, y) {

        for (k = 0; k < _this.wrongGrp.children.length; k++) {
            element2 = _this.wrongGrp.getChildAt(k)
            if (element2.x == x && element2.y == y) {
                return true;
            }
        }
        return false;

    },
    placeholderTileClicked: function (target) {

        _this.world.bringToTop(_this.wrongGrp)
        if (target.key.includes('big')) {
            target.x = target.initialX;
            target.y = target.initialY;
        }
        else {
            if (_this.checkOverlap(target, _this.placeholders)) {
                for (i = 0; i < _this.placeholders.children.length; i++) {
                    element = _this.placeholders.getChildAt(i);
                    if ((element.frame == 2 && !_this.oppositeTilePrsnt(element.x, element.y))) {
                        if (target.key.includes('3') && element.key.includes('small')) {

                            if ((target.key.includes('pink') && element.key.includes('grn')) || (target.key.includes('green') && element.key.includes('pink'))) {
                                // wrong one choosed
                                box = _this.add.sprite(element.x, element.y, element.key.includes('pink') ? 'grnsmall' : 'pinksmall')
                                _this.wrongGrp.addChild(box);
                            }
                            else
                                element.frame = 0;
                            _this.snapSound.currentTime = 0;
                            _this.snapSound.play();
                            break;
                        }
                        else if (target.key.includes('2') && (element.key.includes('vr') || element.key.includes('hr'))) {
                            _this.snapSound.currentTime = 0;
                            _this.snapSound.play();
                            if ((target.key.includes('pink') && element.key.includes('grn')) || (target.key.includes('green') && element.key.includes('pink'))) {
                                // wrong one choosed
                                if (_this.place1 == true)
                                    box = _this.add.sprite(element.x, element.y, element.key.includes('pink') ? 'grnhr' : 'pinkhr')
                                else {
                                    box = _this.add.sprite(element.x, element.y, element.key.includes('pink') ? 'grnvr' : 'pinkvr')
                                }
                                _this.wrongGrp.addChild(box);
                            }
                            else
                                element.frame = 0;
                            break;
                        }

                    }
                }
                target.x = target.initialX;
                target.y = target.initialY;

            }
            else {
                target.x = target.initialX;
                target.y = target.initialY;
            }
        }
        _this.world.bringToTop(_this.negSquare1)
        _this.world.bringToTop(_this.posSquare1)
    },
    makeEqualSign: function () {
        _this.textBox.x += 190
        _this.textBox.scale.setTo(1)
        _this.eq1.scale.setTo(1, 1)
        _this.eq2.scale.setTo(1, 1)
        _this.eq3.scale.setTo(1, 1)
        _this.signBtw2.scale.setTo(1, 1)
        _this.signBtw3.scale.setTo(1, 1)
        _this.eq1.x -= 10;
        _this.eq2.x -= 25;
        _this.eq3.x -= 40;
        if (_this.signBtw2._text == '+')
            _this.signBtw2.x -= 20;
        else
            _this.signBtw2.x -= 25;
        if (_this.signBtw3._text == '+')
            _this.signBtw3.x -= 35;
        else
            _this.signBtw3.x -= 40;
        if (Math.abs(eqvar2[_this.count1]) < 9 && _this.signBtw2._text == '-') {
            _this.signBtw3.x += 5
        }



        _this.yellowBox4 = _this.add.sprite(200, 20, 'yellowTextBox')
        _this.yellowBox4.scale.setTo(1.1, 1)
        _this.textBox.addChild(_this.yellowBox4)


        _this.pSign1 = _this.add.graphics();
        _this.pSign1.lineStyle(4, 0x65B4C3);
        _this.pSign1.moveTo(210, 38);
        _this.pSign1.lineTo(210 + 18, 38);

        _this.pSign2 = _this.add.graphics();
        _this.pSign2.lineStyle(4, 0x65B4C3);
        _this.pSign2.moveTo(210, 32);
        _this.pSign2.lineTo(210 + 18, 32);

        _this.textBox.addChild(_this.pSign1)
        _this.textBox.addChild(_this.pSign2)

    },
    ClearAll: function () {

        _this.sideGray1.destroy();
        _this.sideGray2.destroy();
        _this.green_1.destroy();
        _this.green_2.destroy();
        _this.green_3.destroy();
        _this.pink_1.destroy();
        _this.pink_2.destroy();
        _this.pink_3.destroy();
        _this.green_1cpy.destroy();
        _this.green_2cpy.destroy();
        _this.green_3cpy.destroy();
        _this.pink_1cpy.destroy();
        _this.pink_2cpy.destroy();
        _this.pink_3cpy.destroy();
        _this.newTextBox.destroy();
        _this.space1.destroy();
        _this.space2.destroy();
        _this.space3.destroy();
        _this.anssqgrp.destroy();
        _this.x2group.destroy();
        _this.xgroup.destroy();
        _this.constgroup.destroy();
        _this.placeholders.destroy();
        _this.options.destroy();
        _this.eraser.destroy();
        if (_this.conversionBox)
            _this.conversionBox.destroy();
        _this.rightbtn.destroy();
        _this.pSign1.destroy();
        _this.pSign2.destroy();
        _this.eq1.destroy();
        _this.eq2.destroy();
        _this.eq3.destroy();
        _this.signBtw2.destroy();
        _this.signBtw3.destroy();

        _this.text1.destroy();
        _this.text2.destroy();
        _this.text3.destroy();
        _this.text4.destroy();
        _this.b1.destroy();
        _this.b2.destroy();
        _this.b3.destroy();
        _this.b4.destroy();
        _this.s1.destroy();
        _this.s2.destroy();
        _this.astrk.destroy();
        _this.negSquare1.destroy();
        _this.negSquare2.destroy();
        _this.negSquare3.destroy();
        _this.posSquare1.destroy();
        _this.posSquare2.destroy();
        _this.posSquare3.destroy();

        _this.optionsValueArr = [];

    },
    checkOverlap: function (spriteA, spriteB) {
        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },
    applyingStyleGn: function (target) {
        // target = text element
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
        target.scale.setTo(1.3, 1)
    },
    applyingStyle: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#FFFFFF'; //white color
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '25px';
    },
    applyingStyle1: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#32CD32'; //green color
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '25px';
    },
    applyingStyle2: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#E0115F'; //pink color
        target.fontWeight = 'normal';
        target.visible = true;
        target.fontSize = '25px';
    },
    correctAns: function () {
        _this.sceneCount++;
        if (_this.count1 < 5) {

            _this.celebrationSound.play();
            _this.starActions(_this.count1);

            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.AnsTimerCount = 0;
            _this.noofAttempts = 0;

            _this.time.events.add(2000, _this.ClearAll);
            _this.time.events.add(3000, _this.InitialScreen);
        }
        else {
            _this.celebrationSound.play();
            _this.starActions(_this.count1);

            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
            _this.AnsTimerCount = 0;
            _this.noofAttempts = 0;

            _this.time.events.add(2000, _this.ClearAll);
            _this.time.events.add(2500, () => {
                _this.state.start('score', true, false, gameID, _this.microConcepts);
            })
        }
    },
    starActions: function (target) {
        _this.microConcepts = "AlgebraG8";
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        _this.count1++;
        anim.play();
    },


    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },

    DemoVideo: function () {

        // DEMO AUDIOS
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/AL-FACT-G8/" + _this.languageSelected + "/AL_FACT_G8_d1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/AL-FACT-G8/" + _this.languageSelected + "/AL_FACT_G8_d2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        // QUESTION AUDIOS
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-FACT-G8/" +
            _this.languageSelected + "/AL_FACT_G8_a1.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-FACT-G8/" +
            _this.languageSelected + "/AL_FACT_G8_a2.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-FACT-G8/" +
            _this.languageSelected + "/AL_FACT_G8_a3.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-FACT-G8/" +
            _this.languageSelected + "/AL_FACT_G8_a4.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        _this.q5Sound = document.createElement('audio');
        _this.q5Soundsrc = document.createElement('source');
        _this.q5Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-FACT-G8/" +
            _this.languageSelected + "/AL_FACT_G8_a5.mp3");
        _this.q5Sound.appendChild(_this.q5Soundsrc);

        _this.q6Sound = document.createElement('audio');
        _this.q6Soundsrc = document.createElement('source');
        _this.q6Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/AL-FACT-G8/" +
            _this.languageSelected + "/AL_FACT_G8_a6.mp3");
        _this.q6Sound.appendChild(_this.q6Soundsrc);

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
        if (_this.demoAudio2) {
            console.log("removing the demo audio2");
            _this.demoAudio2.pause();
            _this.demoAudio2 = null;
            _this.demoAudio2src = null;
        }
        if (_this.demoAudio3) {
            console.log("removing the demo audio3");
            _this.demoAudio3.pause();
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
            console.log("removing the q3");
            _this.q4Sound.pause();
            _this.q4Sound = null;
            _this.q4Soundsrc = null;
        }

        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed

    },

    showDemoVideo: function () {

        _this.demoVideo_1 = _this.add.video('AL_FACT');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + 'assets/demoVideos/AL FACT-G8.mp4');
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        _this.q1Sound.play();
        _this.q1Sound.addEventListener('ended', () => _this.demoAudio1.play());
        _this.demoAudio1.addEventListener('ended', () => _this.q2Sound.play());

        _this.q1Timer = setTimeout(function ()    //* q1 js timer to play q1 after 5 seconds.
        {
            console.log("inside q3sound.....");
            // _this.demoVideo_1.playbackRate = 1.5;
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 37500);

        _this.q3Sound.addEventListener('ended', () => _this.q4Sound.play());

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2 after 2 min.
        {
            console.log("inside demoAudio2.....")
            // _this.demoVideo_1.playbackRate = 1;
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.demoAudio2.play();
        }, 98000);//79000

        _this.demoAudio2.addEventListener('ended', () => _this.q5Sound.play());

        _this.q3Timer = setTimeout(function ()    //* q3 js timer to play q3 after 3 min.
        {
            console.log("inside q6Sound.....")
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q6Sound.play();
        }, 131000);//110000

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
