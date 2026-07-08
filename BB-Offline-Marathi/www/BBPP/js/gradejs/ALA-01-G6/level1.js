Game.ALA_01_G6level1 = function () { };


Game.ALA_01_G6level1.prototype =
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

        _this.PuffSound = document.createElement('audio');
        _this.PuffSoundsrc = document.createElement('source');
        _this.PuffSoundsrc.setAttribute("src", window.baseUrl + "sounds/PuffSound.mp3");
        _this.PuffSound.appendChild(_this.PuffSoundsrc);

        _this.bubbleSound = document.createElement('audio');
        _this.bubbleSoundsrc = document.createElement('source');
        _this.bubbleSoundsrc.setAttribute("src", window.baseUrl + "sounds/WaterBubbling.mp3");
        _this.bubbleSound.appendChild(_this.bubbleSoundsrc);

        telInitializerbbpp.gameIdInit("ALA_01_G6", gradeSelected);
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

        // _this.AnsTimerCount = 0;
        _this.count1 = 0;

        _this.speakerbtn;
        _this.background;
        _this.count = 0;
        //_this.in;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0;

        _this.counterForTimer = 0;

        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;

        // //*  User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
        //   _this.microConcepts;
        // _this.grade;

        _this.hint_flag = 0;// * hint flag zero

        _this.Question_flag = -1;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';

        //** include the background file, navigation bar, stars, timer objects.
        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'bg');
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
            if (_this.speakerbtnClicked == false && _this.rightbtn_is_Clicked == false) {
                console.log(_this.Question_flag);
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();

                if (_this.Question_flag == 1) {
                    _this.VoiceNote1Fn();
                }
                else if (_this.Question_flag == 2) {
                    _this.VoiceNote2Fn();
                }
                else if (_this.Question_flag == 3) {
                    _this.VoiceNote3Fn();
                }
                else if (_this.Question_flag == 4) {
                    _this.VoiceNote4Fn();
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

        //* include variables for use - objGroup (where egg objects can be added)
        _this.objGroup;
        _this.numGroup;

        // _this.BlueFishPositionArray_X = [75,145,215,285,355];
        _this.BlueFishPositionArray_X = [145, 215, 285, 355, 425];
        _this.FishPositionArray_y = [130, 170, 210, 250, 290];
        _this.RedFishPositionArray_X = [595, 665, 735, 805, 875];

        _this.FIBTypeArrayCount = 0;
        _this.count = 0; // count for asking mcq or fIB question
        _this.MCQandFIBtypeArray = [2, 1, 2, 1, 2];  //1=MCQ 2=FIB
        _this.AskFIBQn = false; //for asking fib question only once 


        //* start the game with first question
        _this.getQuestion();
        //    _this.time.events.add(500, _this.getQuestion);
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

        _this.PlacingStartingObjects();//Aquarium box,grasses,
        _this.randomizing_elements();
        _this.ShowEquestion();
        _this.placingBlueFish(_this.ValueXArray[_this.count1]);
        _this.placingRedFish_And_Evaluation(_this.ValueYArray[_this.count1]);

        //* hintbtn will be true when the game is playing
        _this.hintBtn.inputEnabled = true;
        _this.hintBtn.input.useHandCursor = true;
        _this.hint_flag = 1;

        _this.questionid = 1;
    },

    stopVoice: function () {
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
        if (_this.VoiceNote4) {
            _this.VoiceNote4.pause();
            _this.VoiceNote4 = null;
            _this.VoiceNote4src = null;
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

    PlacingStartingObjects: function () {
        _this.aquiriumBox1 = _this.add.image(60, 120, 'aquiriumBox');
        _this.Plant_1 = _this.add.image(110, 295, 'Plant');
        _this.Grass_2_1 = _this.add.image(340, 265, 'Grass_2');

        _this.sand1 = _this.add.sprite(68, 335, 'sand');
        _this.Grass_1_1 = _this.add.sprite(75, 220, 'Grass_1');
        _this.image21_anim = _this.Grass_1_1.animations.add('draw');
        _this.image21_anim.play(15);
        _this.image21_anim.onComplete.add(function () {
            _this.image21_anim.play(15);

        }, _this);
        // _this.Grass_1_1.frame=0;
        _this.Grass_1_2 = _this.add.sprite(425, 208, 'Grass_1');
        _this.Grass_1_2.frame = 0;
        _this.Grass_1_2.scale.x *= -1;
        _this.image22_anim = _this.Grass_1_2.animations.add('draw');
        _this.image22_anim.play(15);
        _this.image22_anim.onComplete.add(function () {
            _this.image22_anim.play(15);
        }, _this);

        _this.aquiriumBox2 = _this.add.image(510, 120, 'aquiriumBox');
        _this.Plant_2 = _this.add.image(555, 288, 'Plant');
        _this.Grass_2_2 = _this.add.image(790, 263, 'Grass_2');
        _this.sand2 = _this.add.sprite(518, 335, 'sand');
        _this.Grass_1_3 = _this.add.sprite(522, 220, 'Grass_1');
        _this.image31_anim = _this.Grass_1_3.animations.add('draw');
        _this.image31_anim.play(15);
        _this.image31_anim.onComplete.add(function () {
            _this.image31_anim.play(15);

        }, _this);
        _this.Grass_1_4 = _this.add.sprite(875, 208, 'Grass_1');
        _this.Grass_1_4.scale.x *= -1;
        _this.image32_anim = _this.Grass_1_4.animations.add('draw');
        _this.image32_anim.play(15);
        _this.image32_anim.onComplete.add(function () {

            _this.image32_anim.play(15);


        }, _this);
    },

    bubblesAnimation1: function () {
        // 390 95
        _this.imageb11 = _this.add.sprite(90, 115, 'bubbles')
        _this.imageb11_anim = _this.imageb11.animations.add('draw');
        _this.imageb11_anim.play(15);
        _this.bubbleSound.play();
        // _this.showBubbles(345, 150);

        _this.imageb11_anim.onComplete.add(function () {
            _this.imageb11_anim.play(15);
            _this.bubbleSound.play();
        }, _this);


        _this.imageb21 = _this.add.sprite(480 - 300, 115, 'bubbles')
        _this.imageb21_anim = _this.imageb21.animations.add('draw');
        _this.imageb21_anim.play(30);
        _this.imageb21_anim.onComplete.add(function () {
            // _this.drawingsound.pause()
            _this.imageb21.frame = 17;
            _this.imageb21_anim.play(30);


        }, _this);

        _this.imageb31 = _this.add.sprite(550 - 300, 115, 'bubbles')
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
        _this.imageb1 = _this.add.sprite(390, 115, 'bubbles')
        _this.imageb1_anim = _this.imageb1.animations.add('draw');
        _this.imageb1_anim.play(20);
        _this.bubbleSound.play();
        // _this.showBubbles(345, 150);

        _this.imageb1_anim.onComplete.add(function () {
            _this.imageb1_anim.play(20);
            _this.bubbleSound.play();
        }, _this);


        // _this.imageb2 = _this.add.sprite(480, 115, 'bubbles')
        // _this.imageb2_anim = _this.imageb2.animations.add('draw');
        // _this.imageb2_anim.play(15);
        // _this.imageb2_anim.onComplete.add(function () {
        //     // _this.drawingsound.pause()
        //     _this.imageb2.frame = 17;
        //     _this.imageb2_anim.play(15);


        // }, _this);

        _this.imageb3 = _this.add.sprite(550, 115, 'bubbles')
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
        _this.imageb13 = _this.add.sprite(390 + 300, 115, 'bubbles')
        _this.imageb13_anim = _this.imageb13.animations.add('draw');
        _this.imageb13_anim.play(19);
        // _this.showBubbles(345, 150);
        _this.bubbleSound.play();

        _this.imageb13_anim.onComplete.add(function () {
            _this.imageb13_anim.play(19);
            _this.bubbleSound.play();
        }, _this);


        _this.imageb23 = _this.add.sprite(480 + 300, 115, 'bubbles')//480+300
        _this.imageb23_anim = _this.imageb23.animations.add('draw');
        _this.imageb23_anim.play(25);
        _this.imageb23_anim.onComplete.add(function () {
            // _this.drawingsound.pause()
            _this.imageb23.frame = 17;
            _this.imageb23_anim.play(25);


        }, _this);

        _this.imageb33 = _this.add.sprite(550 + 300, 115, 'bubbles')
        _this.imageb33_anim = _this.imageb33.animations.add('draw');
        _this.imageb33_anim.play(15);
        _this.imageb33_anim.onComplete.add(function () {
            // _this.drawingsound.pause()
            _this.imageb33.frame = 17;
            _this.imageb33_anim.play(15);


        }, _this);
    },

    randomizing_elements: function () {
        _this.ValueZArray = [];
        _this.ValueYArray = [];
        _this.ValueXArray = [];

        _this.MCQandFIBtypeArray = _this.shuffle(_this.MCQandFIBtypeArray);

        //* Generate 3 questions for Addition and gnenerate 3 question for subtraction.
        for (let i = 0; i < 6; i++) {
            _this.rightValueZ = Math.floor(Math.random() * (8 - 1) + 1);
            console.log(_this.rightValueZ);
            for (var j = 0; j <= i - 1; j++) {
                console.log("here");
                if (_this.rightValueZ == _this.ValueZArray[j]) {
                    console.log("....................");
                    _this.rightValueZ = Math.floor(Math.random() * (8 - 1) + 1);
                    j = -1;
                    console.log(_this.rightValueZ);
                }
            }
            _this.ValueZArray.push(_this.rightValueZ);

            _this.rightValueY = Math.floor(Math.random() * (24 - _this.rightValueZ) + 1);
            for (j = 0; j <= i - 1; j++) {
                if (_this.rightValueY == _this.ValueYArray[j]) {
                    _this.rightValueY = Math.floor(Math.random() * (24 - _this.rightValueZ) + 1);
                    j = -1;
                }
            }
            _this.ValueYArray.push(_this.rightValueY);

            //* Finding X here
            _this.leftValueX = _this.rightValueZ + _this.rightValueY;
            _this.ValueXArray.push(_this.leftValueX);
        }


        // * This for loop will generate questions for subtraction
        // for(let i=3; i<6; i++)
        // {
        //     _this.rightValueZ = Math.floor(Math.random() * (8 -1) + 1 );
        //     for(j= 0; j<= i-1; j++)
        //     {
        //         if(_this.rightValueZ == _this.ValueZArray[j])
        //         {
        //             console.log("....................");
        //             _this.rightValueZ = Math.floor(Math.random() * (8 -1) + 1 );
        //             j = 0 ;
        //         }    
        //     }
        //     _this.ValueZArray.push(_this.rightValueZ);

        //     _this.rightValueY = Math.floor(Math.random() * (25 - 1) + 1); // 30 
        //     for(j= 0; j<= i-1; j++)
        //     {
        //         if(_this.rightValueY  ==  _this.ValueYArray [j] || _this.rightValueY < _this.rightValueZ)
        //         {
        //             console.log("....................");
        //             _this.rightValueY = Math.floor(Math.random() * (25 - 1) + 1);
        //             j = 0 ;
        //         }
        //     }
        //     _this.ValueYArray.push(_this.rightValueY);
        //     _this.leftValueX = _this.rightValueY - _this.rightValueZ;
        //     _this.ValueXArray.push(_this.leftValueX);
        // }
        console.log(_this.ValueXArray);
        console.log(_this.ValueYArray);
        console.log(_this.ValueZArray);
    },

    ShowEquestion: function () {
        _this.sceneCount++;
        _this.bubblesAnimation1();
        _this.bubblesAnimation2();
        _this.bubblesAnimation3();

        _this.ValuOfX = _this.add.text(23, 20, _this.ValueXArray[_this.count1]);
        _this.applyingStyle(_this.ValuOfX);
        _this.TextBox1 = _this.add.image(200, 395, 'Text box_1');
        _this.TextBox1.addChild(_this.ValuOfX);

        _this.equalSign = _this.add.text(27, 20, '=')
        _this.applyingStyle(_this.equalSign);
        _this.equalSingBox = _this.add.image(435, 395, 'Text box_1');
        _this.equalSingBox.addChild(_this.equalSign);

        if (_this.ValueYArray[_this.count1] < 10) {
            _this.ValueOfY = _this.add.text(25, 20, _this.ValueYArray[_this.count1]);
        }
        if (_this.ValueYArray[_this.count1] >= 10) {
            _this.ValueOfY = _this.add.text(20, 20, _this.ValueYArray[_this.count1]);
        }

        _this.applyingStyle(_this.ValueOfY);
        _this.PlusSign = _this.add.text(66, 20, '+');
        _this.applyingStyle(_this.PlusSign);
        var a = _this.add.text(100, 20, 'a');
        _this.applyingStyle(a);
        a.fill = "#FF0000";
        _this.TextBox2 = _this.add.image(590, 395, 'Text box_2');
        _this.TextBox2.addChild(_this.ValueOfY);
        _this.TextBox2.addChild(_this.PlusSign);
        _this.TextBox2.addChild(a);
        if (_this.count1 == 0) {
            _this.VoiceNote1Fn();

        }
        _this.Question_flag = 1;
        // _this.time.events.add(2000,function(){

        //});
    },

    placingBlueFish: function (valueOfX) {
        console.log(valueOfX)
        _this.BlueFishGroup = _this.add.group();
        _this.BlueFishAnimGroup = _this.add.group();

        var BlueFishCount = 0;
        _this.BlueFishNameArray = [];

        var reminder = valueOfX % 5;
        var qutient = valueOfX - reminder;
        var mainrow = qutient / 5;
        console.log(mainrow);

        for (var i = 0; i < mainrow; i++) {
            console.log(i);
            if (i % 2 == 0) {
                for (j = 0; j < 5; j++) {
                    _this.BlueFishInAquiriumAnim = _this.add.sprite(_this.BlueFishPositionArray_X[j], _this.FishPositionArray_y[i], 'BlueFishAnim');
                    _this.BlueFishInAquiriumAnim.scale.x *= -1;

                    _this.BlueFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X[j], _this.FishPositionArray_y[i] - 5, 'BlueFish');
                    _this.BlueFishInAquirium.visible = false;
                    _this.BlueFishInAquirium.scale.x *= -1;

                    _this.BlueFishInAquiriumAnim.name = BlueFishCount;
                    _this.BlueFishNameArray.push(_this.BlueFishInAquiriumAnim.name);
                    _this.BlueFishGroup.addChild(_this.BlueFishInAquirium);
                    _this.BlueFishAnimGroup.addChild(_this.BlueFishInAquiriumAnim);

                    BlueFishCount++;
                }
            }
            else {
                for (j = 0; j < 5; j++) {
                    _this.BlueFishInAquiriumAnim = _this.add.sprite(_this.BlueFishPositionArray_X[j] - 60, _this.FishPositionArray_y[i], 'BlueFishAnim');

                    _this.BlueFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X[j] - 60, _this.FishPositionArray_y[i] - 5, 'BlueFish');
                    _this.BlueFishInAquirium.visible = false;

                    _this.BlueFishInAquiriumAnim.name = BlueFishCount;
                    _this.BlueFishNameArray.push(_this.BlueFishInAquiriumAnim.name);
                    _this.BlueFishGroup.addChild(_this.BlueFishInAquirium);
                    _this.BlueFishAnimGroup.addChild(_this.BlueFishInAquiriumAnim);
                    BlueFishCount++;
                }
            }
        }

        if (valueOfX % 5 != 0) {
            if (_this.valueOfX < 5) {
                _this.GenerateRemaingBlueFish(0, reminder, BlueFishCount);
            }
            else {
                _this.GenerateRemaingBlueFish(mainrow, reminder, BlueFishCount);
            }
        }

        _this.BlueFishanimFn();

    },

    GenerateRemaingBlueFish: function (row, quesion, BlueFishCount) {
        if (row % 2 == 0) {
            for (k = 0; k < quesion; k++) {
                _this.BlueFishInAquiriumAnim = _this.add.sprite(_this.BlueFishPositionArray_X[k], _this.FishPositionArray_y[row], 'BlueFishAnim');
                _this.BlueFishInAquiriumAnim.scale.x *= -1;

                _this.BlueFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X[k], _this.FishPositionArray_y[row] - 5, 'BlueFish');
                _this.BlueFishInAquirium.scale.x *= -1;
                _this.BlueFishInAquirium.visible = false;

                _this.BlueFishInAquiriumAnim.name = BlueFishCount;
                _this.BlueFishNameArray.push(_this.BlueFishInAquiriumAnim.name);
                _this.BlueFishGroup.addChild(_this.BlueFishInAquirium);
                _this.BlueFishAnimGroup.addChild(_this.BlueFishInAquiriumAnim);
                BlueFishCount++;
            }
        }
        else {
            for (k = 0; k < quesion; k++) {
                _this.BlueFishInAquiriumAnim = _this.add.sprite(_this.BlueFishPositionArray_X[k] - 60, _this.FishPositionArray_y[row], 'BlueFishAnim');

                _this.BlueFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X[k] - 60, _this.FishPositionArray_y[row] - 5, 'BlueFish');
                _this.BlueFishInAquirium.visible = false;

                _this.BlueFishInAquiriumAnim.name = BlueFishCount;

                _this.BlueFishNameArray.push(_this.BlueFishInAquirium.name);
                _this.BlueFishGroup.addChild(_this.BlueFishInAquirium);
                _this.BlueFishAnimGroup.addChild(_this.BlueFishInAquiriumAnim);
                BlueFishCount++;
            }
        }


    },

    BlueFishanimFn: function () {
        _this.BlueFish_anim = [];
        _this.ans = [];
        for (i = 0; i < _this.BlueFishAnimGroup.length; i++) {
            // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'orangefishanim');
            _this.BlueFish_anim[i] = _this.BlueFishAnimGroup.getChildAt(i).animations.add('BlueFishAnim');
            _this.BlueFish_anim[i].play(10);
            _this.BlueFish_anim[i].onComplete.add(function () {

                _this.BlueFish_anim.forEach(element => {
                    if (element)
                        element.play(10)
                });

            }, _this);

        }
    },

    RedFishanimFn: function () {
        _this.RedFish_anim = [];
        _this.red = [];
        for (let i = 0; i < _this.RedFishGroupAnim.length; i++) {
            // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'RedFishAnim');
            _this.RedFish_anim[i] = _this.RedFishGroupAnim.getChildAt(i).animations.add('draw');
            _this.RedFish_anim[i].play(10);
            _this.RedFish_anim[i].onComplete.add(function () {

                _this.RedFish_anim.forEach(element => {
                    if (element)
                        element.play(10)
                });

            }, _this);
            console.log("here");
        }
    },

    placingRedFish_And_Evaluation: function (valueOfY) {
        console.log(valueOfY)
        var RedFishCount = 0;
        _this.RedFishNameArray = [];
        _this.RedFishGroup = _this.add.group();
        _this.RedFishGroupAnim = _this.add.group();

        var reminder = valueOfY % 5;  //3
        var qutient = valueOfY - reminder;//15
        var mainrow = qutient / 5;//3
        console.log(mainrow);

        for (var i = 0; i < mainrow; i++) {
            if (i % 2 == 0) {
                for (j = 0; j < 5; j++) {
                    _this.RedFishInaquariumAnim = _this.add.sprite(_this.RedFishPositionArray_X[j], _this.FishPositionArray_y[i], 'RedFishAnim');
                    _this.RedFishInaquariumAnim.scale.x *= -1;
                    _this.RedFishInaquariumAnim.name = RedFishCount;

                    _this.RedFishInaquarium = _this.add.sprite(_this.RedFishPositionArray_X[j], _this.FishPositionArray_y[i] - 5, 'RedFish');
                    _this.RedFishInaquarium.visible = false;
                    _this.RedFishInaquarium.scale.x *= -1;

                    _this.RedFishInaquarium.name = RedFishCount;

                    _this.RedFishNameArray.push(_this.RedFishInaquarium.name);
                    _this.RedFishGroup.addChild(_this.RedFishInaquarium);
                    _this.RedFishGroupAnim.addChild(_this.RedFishInaquariumAnim);

                    RedFishCount++;
                    _this.RedFishInaquariumAnim.inputEnabled = true;
                    _this.RedFishInaquariumAnim.input.useHandCursor = true;
                    _this.RedFishInaquariumAnim.events.onInputDown.add(_this.redFishClicked, _this);
                }
            }
            else {
                for (j = 0; j < 5; j++) {
                    _this.RedFishInaquariumAnim = _this.add.sprite(_this.RedFishPositionArray_X[j] - 60, _this.FishPositionArray_y[i], 'RedFishAnim');
                    // _this.RedFishInaquariumAnim.scale.x *= -1;
                    _this.RedFishInaquariumAnim.name = RedFishCount;

                    _this.RedFishInaquarium = _this.add.sprite(_this.RedFishPositionArray_X[j] - 60, _this.FishPositionArray_y[i] - 5, 'RedFish');
                    _this.RedFishInaquarium.visible = false;
                    // _this.RedFishInaquarium.anchor.setTo(1, 0);
                    _this.RedFishInaquarium.name = RedFishCount;
                    _this.RedFishNameArray.push(_this.RedFishInaquarium.name);
                    _this.RedFishGroup.addChild(_this.RedFishInaquarium);
                    _this.RedFishGroupAnim.addChild(_this.RedFishInaquariumAnim);
                    RedFishCount++;
                    _this.RedFishInaquariumAnim.inputEnabled = true;
                    _this.RedFishInaquariumAnim.input.useHandCursor = true;
                    _this.RedFishInaquariumAnim.events.onInputDown.add(_this.redFishClicked, _this);
                }
            }
        }

        if (valueOfY % 5 != 0) {
            if (_this.valueOfY < 5) {
                _this.GenerateRemaingRedFish(0, reminder, RedFishCount);
            }
            else {
                _this.GenerateRemaingRedFish(mainrow, reminder, RedFishCount);
            }
        }

        _this.RedFishanimFn();
    },

    GenerateRemaingRedFish: function (row, quesion, FishCount) {
        if (row % 2 == 0) {
            for (k = 0; k < quesion; k++) {
                _this.RedFishInaquariumAnim = _this.add.sprite(_this.RedFishPositionArray_X[k], _this.FishPositionArray_y[row], 'RedFishAnim');
                _this.RedFishInaquariumAnim.scale.x *= -1;
                _this.RedFishInaquariumAnim.name = FishCount;

                _this.RedFishInaquarium = _this.add.sprite(_this.RedFishPositionArray_X[k], _this.FishPositionArray_y[row] - 5, 'RedFish');
                // _this.RedFishInaquarium.anchor.setTo(-1.9, 0);
                _this.RedFishInaquarium.visible = false;
                _this.RedFishInaquarium.scale.x *= -1;

                _this.RedFishInaquarium.name = FishCount;
                _this.RedFishNameArray.push(_this.RedFishInaquarium.name);
                _this.RedFishGroup.addChild(_this.RedFishInaquarium);
                _this.RedFishGroupAnim.addChild(_this.RedFishInaquariumAnim);

                FishCount++;
                _this.RedFishInaquariumAnim.inputEnabled = true;
                _this.RedFishInaquariumAnim.input.useHandCursor = true;
                _this.RedFishInaquariumAnim.events.onInputDown.add(_this.redFishClicked, _this);
            }
        }
        else {
            for (k = 0; k < quesion; k++) {
                _this.RedFishInaquariumAnim = _this.add.sprite(_this.RedFishPositionArray_X[k] - 60, _this.FishPositionArray_y[row], 'RedFishAnim');
                _this.RedFishInaquariumAnim.name = FishCount;

                _this.RedFishInaquarium = _this.add.sprite(_this.RedFishPositionArray_X[k] - 60, _this.FishPositionArray_y[row] - 5, 'RedFish');
                _this.RedFishInaquarium.visible = false;
                // _this.RedFishInaquarium.scale.x *= -1;
                _this.RedFishInaquarium.name = FishCount;
                _this.RedFishNameArray.push(_this.RedFishInaquarium.name);
                _this.RedFishGroup.addChild(_this.RedFishInaquarium);
                _this.RedFishGroupAnim.addChild(_this.RedFishInaquariumAnim);

                FishCount++;
                _this.RedFishInaquariumAnim.inputEnabled = true;
                _this.RedFishInaquariumAnim.input.useHandCursor = true;
                _this.RedFishInaquariumAnim.events.onInputDown.add(_this.redFishClicked, _this);
            }
        }

    },

    redFishClicked: function (target) {
        target.inputEnabled = false;

        _this.RedFishGroupAnim.getChildAt(target.name).visible = false;
        _this.BlueFishAnimGroup.getChildAt(target.name).visible = false;


        _this.RedFishGroup.getChildAt(target.name).visible = true;
        _this.BlueFishGroup.getChildAt(target.name).visible = true;

        _this.RedFishGroup.getChildAt(target.name).frame = 1;
        _this.BlueFishGroup.getChildAt(target.name).frame = 1;

        _this.PuffSound.play();
        _this.time.events.add(500, function () {
            _this.RedFishGroup.getChildAt(target.name).frame = 2;
            _this.BlueFishGroup.getChildAt(target.name).frame = 2;
            _this.RedFishNameArray.pop();
            _this.BlueFishNameArray.pop();
            _this.RemainingBlueFishCount = _this.BlueFishNameArray.length;

            if (_this.RedFishNameArray.length == 0) {
                _this.ShowingTickBtn();
            }
        });

    },

    ShowingTickBtn: function () {
        _this.Question_flag = -1;
        _this.IntialTickbtn = _this.add.image(800, 395, 'TickBtn');
        _this.IntialTickbtn.frame = 1;
        _this.IntialTickbtn.inputEnabled = true;
        _this.IntialTickbtn.input.useHandCursor = true;
        _this.IntialTickbtn.events.onInputDown.add(_this.CommonPartValidation, _this);
    },

    CommonPartValidation: function (target) {
        _this.IntialTickbtn.events.destroy();
        _this.IntialTickbtn.destroy();
        // _this.IntialTickbtn.inputEnabled = false;

        _this.FIBPart = 0;
        _this.commonPart = 1;
        console.log("CommonPartValidation");

        if (_this.ValueZArray[_this.count1] == _this.RemainingBlueFishCount) {
            // _this.IntialTickbtn.visible = false;
            var a = _this.add.text(25, 20, 'a');
            _this.applyingStyle(a);
            var equal = _this.add.text(54, 22, '=');
            _this.applyingStyle(equal);
            _this.AnswerBox = _this.add.image(735, 395, 'Text box_3');
            _this.AnswerBox.addChild(a);
            _this.AnswerBox.addChild(equal);
            if (_this.count1 == 0) {
                _this.VoiceNote2Fn();
                // _this.Question_flag = 2;
                _this.time.events.add(1000, function () {
                    _this.Question_flag = 2;
                    _this.addNumberPad();
                });
            }
            else {
                _this.addNumberPad();
                _this.Question_flag = 2;
            }

        }
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

        _this.enterTxt1 = _this.add.text(8, 8, "");
        _this.enterTxt1.anchor.setTo(0.5);
        _this.enterTxt1.align = 'center';
        _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt1.fontSize = "30px";
        _this.enterTxt1.fontWeight = 'normal';
        _this.enterTxt1.fill = '#65B4C3';

        //_this.objGroup.add(_this.ScreenTextBox);
        _this.numpadTween = _this.add.tween(_this.numGroup);

        //_this.ScreenTextTween = _this.add.tween(_this.ScreenTextBox);

        //tween in the number pad after a second.
        //_this.time.events.add(100, _this.tweenNumPad);
        _this.tweenNumPad();

        //after 2 seconds, show the screen text box as enabled
        //_this.time.events.add(2000, _this.enableScreenText);

    },

    rightbtnClicked: function () {
        _this.clickSound.play();
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.input.useHandCursor = false;

        // _this.rightbtn_is_Clicked=true;

        // _this.FIBPartValidation();
        if (_this.commonPart == 1) {
            _this.Validation1(); // initial Validation par
        }
        else if (_this.FIBPart == 1) {
            _this.Validation2(); // initial fib part
        }
    },
    Validation1: function () {
        if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.ValueZArray[_this.count1]) {
            console.log("initial answer is correct");
            _this.ClearInitialPart();
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.commonPart = 0;
            _this.AnswerBox.name = '';
            // _this.loopeF.stop();
            if (_this.count1 == 0) {
                _this.CallingMCQFn();
            }
            else {
                console.log(_this.count);
                console.log(_this.MCQandFIBtypeArray[_this.count]);
                if (_this.MCQandFIBtypeArray[_this.count] == 1) {
                    _this.CallingMCQFn();
                }
                if (_this.MCQandFIBtypeArray[_this.count] == 2) {
                    _this.CallingFIBFn();
                }
            }
        }
        else {
            _this.wrongSound.play();
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.numGroup.destroy();
            _this.addNumberPad();
        }
    },

    Validation2: function () {
        console.log("validation2");
        if (_this.FIBType == 1) {
            console.log("_this.FIBType" + _this.FIBType, _this.ValueYArray[_this.count1]);

            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.ValueYArray[_this.count1]) {
                console.log("FIBType 1 answer is correct");
                _this.noofAttempts++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
                _this.starActions(_this.count1);
                _this.celebrationSound.play();
                _this.time.events.add(2000, function () {
                    _this.noofAttempts = 0;
                    _this.AnsTimerCount = 0;
                    _this.ClearFIBPart();
                    _this.CallingNextQuestion();
                });
            }
            else {
                _this.noofAttempts++;
                console.log("FIBType 1 answer is wrong");
                _this.wrongSound.play();
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
                _this.AnswerBox.frame = 1;
                _this.AnswerBox.removeChild(_this.enterTxt);
                _this.numGroup.destroy();
                _this.addNumberPad();
            }
        }
        if (_this.FIBType == 2) {
            console.log("_this.FIBType" + _this.FIBType, _this.ValueXArray[_this.count1]);
            if (Number('' + _this.selectedAns1 + _this.selectedAns2) == _this.ValueXArray[_this.count1]) {
                console.log("initial answer is correct");
                _this.noofAttempts++;
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
                _this.starActions(_this.count1);
                _this.celebrationSound.play();
                _this.time.events.add(2000, function () {
                    _this.noofAttempts = 0;
                    _this.AnsTimerCount = 0;
                    _this.ClearFIBPart();
                    _this.CallingNextQuestion();
                });
            }
            else {
                _this.noofAttempts++;
                _this.wrongSound.play();
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
                _this.AnswerBox.frame = 1;
                _this.AnswerBox.removeChild(_this.enterTxt);
                _this.numGroup.destroy();
                _this.addNumberPad();
            }
        }
        if (_this.FIBType == 3) {
            console.log("ansBox1 name" + _this.ValueXArray[_this.count1] + "ansbox2 name" + _this.ValueYArray[_this.count1])
            console.log(_this.AnswerBox.name, _this.AnswerBox1.name);

            if (_this.AnswerBox.name == _this.ValueXArray[_this.count1] && _this.AnswerBox1.name == _this.ValueYArray[_this.count1]) {
                _this.noofAttempts++;
                console.log("initial answer is correct");
                telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

                _this.starActions(_this.count1);
                _this.celebrationSound.play();
                _this.time.events.add(2000, function () {
                    _this.noofAttempts = 0;
                    _this.AnsTimerCount = 0;
                    _this.ClearFIBPart();
                    _this.CallingNextQuestion();
                });
            }
            else {
                _this.noofAttempts++;
                console.log("_this.FIBType");
                _this.wrongSound.play();
                _this.AnswerBox.destroy();//_this.AnswerBox.removeChild(_this.enterTxt);// 
                _this.AnswerBox1.destroy();//_this.AnswerBox1.removeChild(_this.enterTxt);
                _this.FisrstBox = true;
                _this.secondBox = false;



                _this.AnswerBox = _this.add.image(70, 10, 'glowingTxtBox');
                _this.AnswerBox.frame = 1;
                _this.AnswerBox.inputEnabled = true;
                _this.AnswerBox.input.useHandCursor = true;
                _this.AnswerBox.events.onInputDown.add(function () {
                    _this.FisrstBox = true;
                    _this.secondBox = false;
                    _this.selectedAns2 = '';
                    _this.selectedAns1 = '';
                    _this.AnswerBox.frame = 1;
                    _this.AnswerBox1.frame = 0;
                });

                _this.AnswerBox1 = _this.add.image(150, 10, 'glowingTxtBox');
                _this.AnswerBox1.frame = 0;
                _this.AnswerBox1.inputEnabled = true;
                _this.AnswerBox1.input.useHandCursor = true;
                _this.AnswerBox1.events.onInputDown.add(function () {
                    _this.FisrstBox = false;
                    _this.secondBox = true;
                    _this.selectedAns2 = '';
                    _this.selectedAns1 = '';
                    _this.AnswerBox.frame = 0;
                    _this.AnswerBox1.frame = 1;
                });

                _this.BgAnswerBox.addChild(_this.AnswerBox);
                _this.BgAnswerBox.addChild(_this.AnswerBox1);

                _this.numGroup.destroy();
                _this.selectedAns1 = '';
                _this.selectedAns2 = '';
                _this.addNumberPad();
            }
        }
    },

    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        if (_this.FIBPart == 1 && _this.FIBType == 3) {
            if (_this.secondBox == true) {
                _this.AnswerBox1.removeChild(_this.enterTxt1);
                _this.AnswerBox1.name = 0;
            }
            if (_this.FisrstBox == true) {
                _this.AnswerBox.removeChild(_this.enterTxt);
                _this.AnswerBox.name = 0;
            }
        }
        else {
            _this.AnswerBox.removeChild(_this.enterTxt);
        }
    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },

    ClearInitialPart: function () {
        _this.numGroup.destroy();
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.aquiriumBox1.destroy();
        _this.aquiriumBox2.destroy();
        _this.Grass_1_1.destroy();
        _this.Grass_1_2.destroy();
        _this.Grass_1_3.destroy();
        _this.Grass_1_4.destroy();
        _this.Grass_2_1.destroy();
        _this.Grass_2_2.destroy();
        _this.Plant_1.destroy();
        _this.Plant_2.destroy();
        _this.sand1.destroy();
        _this.sand2.destroy();
        _this.BlueFishGroup.destroy();
        _this.RedFishGroup.destroy();
        _this.equalSingBox.destroy();
        _this.AnswerBox.destroy();
        _this.TextBox1.destroy();
        _this.TextBox2.destroy();

        _this.imageb1.destroy();
        // _this.imageb2.destroy();
        _this.imageb3.destroy();

        _this.imageb11.destroy();
        _this.imageb21.destroy();
        _this.imageb31.destroy();

        _this.imageb13.destroy();
        _this.imageb23.destroy();
        _this.imageb33.destroy();

        _this.RedFishGroupAnim.destroy();
        _this.BlueFishAnimGroup.destroy();

        if (_this.IntialTickbtn) {
            console.log("visible");
            _this.IntialTickbtn.destroy();
        }

    },

    QuestionBox: function () {
        var x = _this.add.text(20, 20, _this.ValueXArray[_this.count1]);//
        _this.applyingStyle(x);
        var equal = _this.add.text(60, 20, "=");
        _this.applyingStyle(equal);
        var y = _this.add.text(90, 20, _this.ValueYArray[_this.count1]);//
        _this.applyingStyle(y);
        var minus = _this.add.text(132, 20, "+");
        _this.applyingStyle(minus);
        var z = _this.add.text(165, 18, "a");
        _this.applyingStyle(z);
        z.fill = '#FF0000';
        _this.QnBox = _this.add.image(50, 50, 'Text box_4');
        _this.QnBox.addChild(x);
        _this.QnBox.addChild(equal);
        _this.QnBox.addChild(y);
        _this.QnBox.addChild(minus);
        _this.QnBox.addChild(z);
        _this.BlueBackground = _this.add.image(10, 150, 'BlueBg');
    },

    applyingStyle: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
    },

    CallingMCQFn: function () {
        if (_this.count1 == 0) {
            _this.VoiceNote3Fn();
            _this.Question_flag = 3;
            // _this.time.events.add(2000,function(){
            //     _this.Question_flag = 3;
            // });
        }
        else {
            _this.Question_flag = 3;
        }

        _this.OptionBox_X = [50, 300, 550];
        _this.OptionBox_X = _this.shuffle(_this.OptionBox_X);
        _this.OptionBox_Y = 250;

        _this.QuestionBox();
        _this.PlacingMCQoption();

        _this.a1 = _this.add.text(25, 20, 'a');
        _this.applyingStyle(_this.a1);
        _this.a1.fill = '#FF0000';
        _this.equals1 = _this.add.text(50, 22, '=');
        _this.applyingStyle(_this.equals1);
        var OptionBox1Value1 = _this.add.text(85, 22, _this.XvalueArray[_this.randomIndexArray[0]]);
        _this.applyingStyle(OptionBox1Value1);
        OptionBox1Value1.name = _this.XvalueArray[_this.randomIndexArray[0]];
        var OptionBox1Value2 = _this.add.text(170, 22, _this.YvalueArray[_this.randomIndexArray[0]]);
        _this.applyingStyle(OptionBox1Value2);
        OptionBox1Value2.name = _this.YvalueArray[_this.randomIndexArray[0]];
        if (_this.SignArray[_this.randomIndexArray[0]] == "+") {
            var OptionBox1Sign = _this.add.text(130, 22, _this.SignArray[_this.randomIndexArray[0]]);
        }
        else if (_this.SignArray[_this.randomIndexArray[0]] == '-') {
            var OptionBox1Sign = _this.add.text(132, 22, _this.SignArray[_this.randomIndexArray[0]]);
        }

        _this.applyingStyle(OptionBox1Sign);
        OptionBox1Sign.name = _this.SignArray[_this.randomIndexArray[0]];

        _this.OptionBox1 = _this.add.image(_this.OptionBox_X[0], _this.OptionBox_Y, 'Text box_4');
        _this.OptionBox1.name = '1';
        if (OptionBox1Sign.name == '+') {
            _this.Box1result = OptionBox1Value1.name + OptionBox1Value2.name;
            _this.Box1result.name = OptionBox1Value1.name + OptionBox1Value2.name;
        }
        else if (OptionBox1Sign.name == '-') {
            _this.Box1result = OptionBox1Value1.name - OptionBox1Value2.name;
            _this.Box1result.name = OptionBox1Value1.name + OptionBox1Value2.name;
        }

        console.log(_this.Box1result);
        _this.OptionBox1.addChild(_this.a1);
        _this.OptionBox1.addChild(_this.equals1);
        _this.OptionBox1.addChild(OptionBox1Value1);
        _this.OptionBox1.addChild(OptionBox1Value2);
        _this.OptionBox1.addChild(OptionBox1Sign);

        _this.OptionBox1.inputEnabled = true;
        _this.OptionBox1.input.useHandCursor = true;
        _this.OptionBox1.events.onInputDown.add(_this.optionClicked, _this.OptionBox1, _this.Box1result);

        _this.a2 = _this.add.text(25, 20, 'a');
        _this.applyingStyle(_this.a2);
        _this.a2.fill = '#FF0000';
        _this.equals2 = _this.add.text(50, 22, '=');
        _this.applyingStyle(_this.equals2);
        var OptionBox2Value1 = _this.add.text(85, 22, _this.XvalueArray[_this.randomIndexArray[1]]);
        _this.applyingStyle(OptionBox2Value1);
        OptionBox2Value1.name = _this.XvalueArray[_this.randomIndexArray[1]];
        var OptionBox2Value2 = _this.add.text(170, 22, _this.YvalueArray[_this.randomIndexArray[1]]);
        _this.applyingStyle(OptionBox2Value2);
        OptionBox2Value2.name = _this.YvalueArray[_this.randomIndexArray[1]];
        if (_this.SignArray[_this.randomIndexArray[1]] == "+") {
            var OptionBox2Sign = _this.add.text(130, 22, _this.SignArray[_this.randomIndexArray[1]]);
        }
        else if (_this.SignArray[_this.randomIndexArray[1]] == '-') {
            var OptionBox2Sign = _this.add.text(134, 22, _this.SignArray[_this.randomIndexArray[1]]);
        }

        _this.applyingStyle(OptionBox2Sign);
        OptionBox2Sign.name = _this.SignArray[_this.randomIndexArray[1]];

        _this.OptionBox2 = _this.add.image(_this.OptionBox_X[1], _this.OptionBox_Y, 'Text box_4');
        _this.OptionBox2.name = '2';

        if (OptionBox2Sign.name == '+') {
            _this.Box2result = OptionBox2Value1.name + OptionBox2Value2.name;
            _this.Box2result.name = OptionBox2Value1.name + OptionBox2Value2.name;
        }
        else if (OptionBox2Sign.name == '-') {
            _this.Box2result = OptionBox2Value1.name - OptionBox2Value2.name;
            _this.Box2result.name = OptionBox2Value1.name + OptionBox2Value2.name;
        }

        console.log(_this.Box2result);
        _this.OptionBox2.addChild(_this.a2);
        _this.OptionBox2.addChild(_this.equals2);
        _this.OptionBox2.addChild(OptionBox2Value1);
        _this.OptionBox2.addChild(OptionBox2Value2);
        _this.OptionBox2.addChild(OptionBox2Sign);

        _this.OptionBox2.inputEnabled = true;
        _this.OptionBox2.input.useHandCursor = true;
        _this.OptionBox2.events.onInputDown.add(_this.optionClicked, _this.OptionBox2, _this.Box2result);

        _this.a3 = _this.add.text(25, 20, 'a');
        _this.applyingStyle(_this.a3);
        _this.a3.fill = '#FF0000';
        _this.equals3 = _this.add.text(50, 22, '=');
        _this.applyingStyle(_this.equals3);
        var OptionBox3Value1 = _this.add.text(85, 22, _this.XvalueArray[_this.randomIndexArray[2]]);
        _this.applyingStyle(OptionBox3Value1);
        OptionBox3Value1.name = _this.XvalueArray[_this.randomIndexArray[2]];
        var OptionBox3Value2 = _this.add.text(170, 22, _this.YvalueArray[_this.randomIndexArray[2]]);
        _this.applyingStyle(OptionBox3Value2);
        OptionBox3Value2.name = _this.YvalueArray[_this.randomIndexArray[2]];
        if (_this.SignArray[_this.randomIndexArray[2]] == "+") {
            var OptionBox3Sign = _this.add.text(130, 22, _this.SignArray[_this.randomIndexArray[2]]);
        }
        else if (_this.SignArray[_this.randomIndexArray[2]] == '-') {
            var OptionBox3Sign = _this.add.text(132, 22, _this.SignArray[_this.randomIndexArray[2]]);
        }

        _this.applyingStyle(OptionBox3Sign);
        OptionBox3Sign.name = _this.SignArray[_this.randomIndexArray[2]];

        _this.OptionBox3 = _this.add.image(_this.OptionBox_X[2], _this.OptionBox_Y, 'Text box_4');
        _this.OptionBox3.name = '3';
        if (OptionBox3Sign.name == '+') {
            _this.Box3result = OptionBox3Value1.name + OptionBox3Value2.name;
            _this.Box3result.name = OptionBox3Value1.name + OptionBox3Value2.name;
        }
        else if (OptionBox3Sign.name == '-') {
            _this.Box3result = OptionBox3Value1.name - OptionBox3Value2.name;
            _this.Box3result.name = OptionBox3Value1.name + OptionBox3Value2.name;
        }

        console.log(_this.Box3result);
        _this.OptionBox3.addChild(_this.a3);
        _this.OptionBox3.addChild(_this.equals3);
        _this.OptionBox3.addChild(_this.equals3);
        _this.OptionBox3.addChild(OptionBox3Value1);
        _this.OptionBox3.addChild(OptionBox3Value2);
        _this.OptionBox3.addChild(OptionBox3Sign);
        console.log(_this.OptionBox3.getChildAt(3).name);

        _this.tickbtnOptionPanel = _this.add.sprite(800, 250, 'TickBtn');
        _this.tickbtnOptionPanel.frame = 1;
        _this.tickbtnOptionPanel.visible = false;

        _this.OptionBox3.inputEnabled = true;
        _this.OptionBox3.input.useHandCursor = true;
        _this.OptionBox3.events.onInputDown.add(_this.optionClicked, _this.OptionBox3, _this.Box3result);
    },

    PlacingMCQoption: function () {
        _this.CurrectAnsX = _this.ValueXArray[_this.count1];
        _this.CurrectAnsY = _this.ValueYArray[_this.count1];
        _this.CurrectAnsSign = '-';

        _this.XvalueArray = [_this.ValueXArray[_this.count1], _this.ValueYArray[_this.count1], _this.ValueYArray[_this.count1]];
        _this.YvalueArray = [_this.ValueYArray[_this.count1], _this.ValueXArray[_this.count1], _this.ValueXArray[_this.count1]];
        _this.SignArray = ['+', '+', '-'];

        console.log(_this.XvalueArray);

        _this.randomIndexArray = [0, 1, 2];
        _this.randomIndexArray = _this.shuffle(_this.randomIndexArray);

        _this.randomIndex = Math.floor(Math.random() * 3);
        console.log(_this.randomIndex);

        // will insert item into array at the specified index (deleting 0 items first, that is, it's just an insert).
        _this.XvalueArray.splice(_this.randomIndex, 0, _this.CurrectAnsX);
        _this.YvalueArray.splice(_this.randomIndex, 0, _this.CurrectAnsY);
        _this.SignArray.splice(_this.randomIndex, 0, _this.CurrectAnsSign);

        console.log(_this.XvalueArray);
        console.log(_this.YvalueArray);
        console.log(_this.SignArray);
    },

    optionClicked: function (target1) {
        var finalResult;
        console.log("optionClicked" + target1.name);
        if (Number(target1.name) == 1) {
            console.log("optionClicked" + target1.name);
            _this.OptionBox1.frame = 1;
            _this.OptionBox2.frame = 0;
            _this.OptionBox3.frame = 0;
            finalResult = _this.Box1result;
        }
        if (Number(target1.name) == 2) {
            console.log("optionClicked" + target1.name);
            _this.OptionBox2.frame = 1;
            _this.OptionBox1.frame = 0;
            _this.OptionBox3.frame = 0;
            finalResult = _this.Box2result;
        }
        if (Number(target1.name) == 3) {
            console.log("optionClicked" + target1.name);
            _this.OptionBox3.frame = 1;
            _this.OptionBox1.frame = 0;
            _this.OptionBox2.frame = 0;
            finalResult = _this.Box3result;
        }

        _this.tickbtnOptionPanel.name = finalResult;
        console.log("finalResult= " + finalResult);
        if (_this.tickbtnOptionPanel.visible == false) {
            if (_this.count1 == 0) {
                _this.time.events.add(600, function () {
                    _this.tickbtnOptionPanel.visible = true;
                    _this.tickbtnOptionPanel.inputEnabled = true;
                    _this.tickbtnOptionPanel.input.useHandCursor = true;
                    _this.tickbtnOptionPanel.events.onInputDown.add(_this.tickbtnOptionPanelClicked, _this);
                });
            }
            else {
                _this.tickbtnOptionPanel.visible = true;
                _this.tickbtnOptionPanel.inputEnabled = true;
                _this.tickbtnOptionPanel.input.useHandCursor = true;
                _this.tickbtnOptionPanel.events.onInputDown.add(_this.tickbtnOptionPanelClicked, _this);
            }
        }
    },

    tickbtnOptionPanelClicked: function (target) {
        console.log(target.name);
        _this.Question_flag = -1;
        _this.tickbtnOptionPanel.inputEnabled = false;
        _this.OptionBox1.inputEnabled = false;
        _this.OptionBox2.inputEnabled = false;
        _this.OptionBox3.inputEnabled = false;
        if (Number(target.name) == _this.ValueZArray[_this.count1]) {
            console.log("ans is correct");
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.starActions(_this.count1);
            _this.celebrationSound.play();
            _this.time.events.add(2000, function () {
                _this.noofAttempts = 0;
                _this.AnsTimerCount = 0;
                _this.tickbtnOptionPanel.destroy();
                _this.OptionBox1.destroy();
                _this.OptionBox2.destroy();
                _this.OptionBox3.destroy();
                _this.BlueBackground.destroy();
                _this.QnBox.destroy();
                _this.CallingNextQuestion();
            });
        }
        else {
            console.log("ans is wrong");
            _this.wrongSound.play();
            _this.OptionBox1.frame = 0;
            _this.OptionBox2.frame = 0;
            _this.OptionBox3.frame = 0;
            _this.OptionBox1.inputEnabled = true;
            _this.OptionBox2.inputEnabled = true;
            _this.OptionBox3.inputEnabled = true;
            _this.tickbtnOptionPanel.inputEnabled = true;
        }
    },


    CallingFIBFn: function () {
        if (_this.AskFIBQn == false && _this.count1 == 0) {
            _this.VoiceNote4Fn();
            _this.Question_flag = 4;
            // _this.time.events.add(2000,function(){
            //     _this.Question_flag = 4;
            // });          
        } else {
            _this.Question_flag = 4;
        }

        _this.FIBPart = 1;

        _this.FIBTypeArray = [1, 2, 3];//1,2,3
        _this.FIBTypeArray = _this.shuffle(_this.FIBTypeArray);
        _this.QuestionBox();
        _this.displayFIBQn(_this.FIBTypeArray[_this.FIBTypeArrayCount]);
        _this.FIBTypeArrayCount++;

        _this.addNumberPad();
    },


    displayFIBQn: function (target) {
        console.log(target);

        if (target == 1) {
            _this.FIBType = 1;
            console.log(_this.FIBType);
            var a = _this.add.text(30, 22, 'a');//_this.ValueXArray[_this.count1]
            _this.applyingStyle(a);
            a.fill = "#FF0000";
            var equal = _this.add.text(55, 24, '=');//_this.SignArray[_this.count1]
            _this.applyingStyle(equal);
            var x = _this.add.text(80, 22, _this.ValueXArray[_this.count1]);//
            _this.applyingStyle(x);
            var minus = _this.add.text(120, 20, '-');
            _this.applyingStyle(minus);
            _this.AnswerBox = _this.add.image(150, 10, 'glowingTxtBox');
            _this.AnswerBox.frame = 1;
            _this.BgAnswerBox = _this.add.image(350, 250, 'Text box_4');
            _this.BgAnswerBox.addChild(_this.AnswerBox);
            _this.BgAnswerBox.addChild(a);
            _this.BgAnswerBox.addChild(equal);
            _this.BgAnswerBox.addChild(x);
            _this.BgAnswerBox.addChild(minus);
        }

        if (target == 2) {
            _this.FIBType = 2;
            console.log(_this.FIBType);
            var a = _this.add.text(30, 22, 'a');//_this.ValueXArray[_this.count1]
            _this.applyingStyle(a);
            a.fill = "#FF0000";
            var equal = _this.add.text(55, 24, '=');//_this.SignArray[_this.count1]
            _this.applyingStyle(equal);
            var x = _this.add.text(170, 22, _this.ValueYArray[_this.count1]);//
            _this.applyingStyle(x);
            var minus = _this.add.text(145, 20, '-');
            _this.applyingStyle(minus);
            _this.AnswerBox = _this.add.image(80, 10, 'glowingTxtBox');
            _this.AnswerBox.frame = 1;
            _this.BgAnswerBox = _this.add.image(350, 250, 'Text box_4');
            _this.BgAnswerBox.addChild(_this.AnswerBox);
            _this.BgAnswerBox.addChild(a);
            _this.BgAnswerBox.addChild(equal);
            _this.BgAnswerBox.addChild(x);
            _this.BgAnswerBox.addChild(minus);
        }

        if (target == 3) {
            _this.FIBType = 3;
            console.log(_this.FIBType);
            _this.FisrstBox = true;
            _this.secondBox = false;

            var a = _this.add.text(20, 20, 'a');//_this.ValueXArray[_this.count1]
            _this.applyingStyle(a);
            a.fill = "#FF0000";
            var equal = _this.add.text(40, 22, '=');//_this.SignArray[_this.count1]
            _this.applyingStyle(equal);
            var minus = _this.add.text(133, 20, '-');
            _this.applyingStyle(minus);

            _this.AnswerBox = _this.add.image(70, 10, 'glowingTxtBox');
            _this.AnswerBox.frame = 1;
            _this.AnswerBox.inputEnabled = true;
            _this.AnswerBox.input.useHandCursor = true;
            _this.AnswerBox.events.onInputDown.add(function () {
                console.log("clickedx")
                _this.FisrstBox = true;
                _this.secondBox = false;
                _this.selectedAns2 = '';
                _this.selectedAns1 = '';
                _this.AnswerBox1.frame = 0;
                _this.AnswerBox.frame = 1;
            });

            _this.AnswerBox1 = _this.add.image(150, 10, 'glowingTxtBox');
            _this.AnswerBox1.inputEnabled = true;
            _this.AnswerBox1.input.useHandCursor = true;
            _this.AnswerBox1.events.onInputDown.add(function () {
                _this.FisrstBox = false;
                _this.secondBox = true;
                _this.selectedAns2 = '';
                _this.selectedAns1 = '';
                _this.AnswerBox1.frame = 1;
                _this.AnswerBox.frame = 0;
            });

            _this.BgAnswerBox = _this.add.image(350, 250, 'Text box_4');
            _this.BgAnswerBox.addChild(_this.AnswerBox);
            _this.BgAnswerBox.addChild(_this.AnswerBox1);
            _this.BgAnswerBox.addChild(a);
            _this.BgAnswerBox.addChild(equal);
            _this.BgAnswerBox.addChild(minus);
        }
    },

    ClearFIBPart: function () {
        _this.BgAnswerBox.destroy();
        _this.QnBox.destroy();
        _this.BlueBackground.destroy();
        _this.numGroup.destroy();
    },

    CallingNextQuestion: function () {
        _this.sceneCount++;
        if (_this.count1 >= 1) {
            _this.count++;
        }

        _this.count1++;

        if (_this.count1 < 6) {

            // _this.aquiriumBox1 = _this.add.image(60,120,'aquiriumBox');
            // _this.Plant_1 = _this.add.image(110,295,'Plant');
            // _this.Grass_2_1 = _this.add.image(340,265,'Grass_2');
            // _this.sand1 = _this.add.sprite(68,335,'sand');
            // _this.Grass_1_1 = _this.add.sprite(75,220,'Grass_1');
            // _this.Grass_1_1.frame=0;
            // _this.Grass_1_2 = _this.add.sprite(425,208,'Grass_1');
            // _this.Grass_1_2.frame=0;
            // _this.Grass_1_2.scale.x *= -1;

            // _this.aquiriumBox2 = _this.add.image(510,120,'aquiriumBox');
            // _this.Plant_2 = _this.add.image(555,288,'Plant');
            // _this.Grass_2_2 = _this.add.image(790,263,'Grass_2');
            // _this.sand2 = _this.add.sprite(518,335,'sand');
            // _this.Grass_1_3 = _this.add.sprite(522,220,'Grass_1');
            // _this.Grass_1_3.frame=0;
            // _this.Grass_1_4 = _this.add.sprite(875,208,'Grass_1');
            // _this.Grass_1_4.frame=0;
            // _this.Grass_1_4.scale.x *= -1;
            _this.BlueBackground.destroy();
            _this.QnBox.destroy();
            _this.AnswerBox.destroy();
            if (_this.AnswerBox1) {
                _this.AnswerBox1.destroy();
            }

            _this.selectedAns1 = '';
            _this.selectedAns2 = '';
            _this.PlacingStartingObjects();
            _this.ShowEquestion();
            _this.placingBlueFish(_this.ValueXArray[_this.count1]);
            _this.placingRedFish_And_Evaluation(_this.ValueYArray[_this.count1]);
        }
        else {
            _this.timer1.stop();
            _this.timer1 = null;
            _this.time.events.add(2000, function () {
                //_this.state.start('score')
                _this.state.start('score', true, false, gameID, _this.microConcepts);
            });
        }

    },


    //* Change this function to take 2 digit numbers only. No sign expected.
    //* this is called when a number on num pad is clicked.

    numClicked: function (target) {
        _this.clickSound.play();
        _this.Question_flag = -1;
        console.log(target.name);
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


        console.log(_this.FIBPart);

        if (_this.commonPart == 1) {
            _this.enterTxt.visible = false;
            _this.AnswerBox.removeChild(_this.enterTxt);
            if (Number('' + var_selectedAns1) == 0 && ('' + var_selectedAns2) < 10) {
                _this.enterTxt = _this.add.text(93, 20, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
            }
            else if (Number('' + var_selectedAns1 + var_selectedAns2) < 10) {
                _this.enterTxt = _this.add.text(100, 20, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
            }
            else if (Number('' + var_selectedAns1 + var_selectedAns2) >= 10) {
                _this.enterTxt = _this.add.text(93, 20, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
            }

            _this.AnswerBox.addChild(_this.enterTxt);
        }

        if (_this.FIBPart == 1) {
            _this.AnswerBox.frame = 0;
            if (_this.FIBType == 3) {
                if ((_this.FisrstBox == true && _this.secondBox == false)) {
                    console.log("box1");
                    _this.enterTxt.visible = false;
                    _this.AnswerBox.removeChild(_this.enterTxt);

                    if (Number('' + var_selectedAns1) == 0 && ('' + var_selectedAns2) < 10) {
                        _this.enterTxt = _this.add.text(9, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
                    }
                    else if (Number('' + var_selectedAns1 + var_selectedAns2) >= 10) {
                        _this.enterTxt = _this.add.text(9, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
                    }
                    else {
                        _this.enterTxt = _this.add.text(16, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
                    }

                    _this.AnswerBox.addChild(_this.enterTxt);
                    _this.AnswerBox.name = Number('' + var_selectedAns1 + var_selectedAns2);
                    console.log(_this.AnswerBox.name);
                }

                if (_this.secondBox == true && _this.FisrstBox == false) {
                    console.log("box2");
                    _this.AnswerBox1.frame = 0;
                    _this.AnswerBox1.removeChild(_this.enterTxt1);

                    if (Number('' + var_selectedAns1) == 0 && ('' + var_selectedAns2) < 10) {
                        _this.enterTxt1 = _this.add.text(9, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
                    }
                    else if (Number('' + var_selectedAns1 + var_selectedAns2) >= 10) {
                        _this.enterTxt1 = _this.add.text(9, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
                    }
                    else {
                        _this.enterTxt1 = _this.add.text(16, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
                    }
                    // _this.enterTxt = _this.add.text(10,10,"" +var_selectedAns1+var_selectedAns2, { fontSize: '30px' });

                    _this.AnswerBox1.addChild(_this.enterTxt1);
                    _this.AnswerBox1.name = Number('' + var_selectedAns1 + var_selectedAns2);
                    console.log(_this.AnswerBox1.name);
                    _this.enterTxt1.align = 'right';
                    _this.enterTxt1.font = "Akzidenz-Grotesk BQ";
                    _this.enterTxt1.fill = '#65B4C3';
                    _this.enterTxt1.fontWeight = 'normal';
                    _this.enterTxt1.visible = true;
                }
            }
            else if (_this.FIBType == 1 || _this.FIBType == 2) {
                _this.enterTxt.visible = false;
                _this.AnswerBox.removeChild(_this.enterTxt);
                console.log("infbpart");
                if (Number('' + var_selectedAns1) == 0 && ('' + var_selectedAns2) < 10) {
                    _this.enterTxt = _this.add.text(9, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
                }
                else if (Number('' + var_selectedAns1 + var_selectedAns2) > 10) {
                    _this.enterTxt = _this.add.text(9, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
                }
                else {
                    _this.enterTxt = _this.add.text(16, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
                }

                _this.AnswerBox.addChild(_this.enterTxt);
                _this.AnswerBox.name = Number("" + var_selectedAns1 + var_selectedAns2);
            }

        }

        _this.enterTxt.align = 'right';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.visible = true;
    },

    VoiceNote1Fn: function () {
        console.log("Find the value of a variable by solving the equation");
        _this.VoiceNote1 = document.createElement('audio');
        _this.VoiceNote1src = document.createElement('source');
        _this.VoiceNote1src.setAttribute("src", window.baseUrl + "questionSounds/ALA-01-G6/" + _this.languageSelected + "/ALA-01-A.mp3");
        _this.VoiceNote1.appendChild(_this.VoiceNote1src);
        _this.VoiceNote1.play();

    },

    VoiceNote2Fn: function () {
        console.log("Enter The Value Of The Variable");
        _this.VoiceNote2 = document.createElement('audio');
        _this.VoiceNote2src = document.createElement('source');
        _this.VoiceNote2src.setAttribute("src", window.baseUrl + "questionSounds/ALA-01-G6/" + _this.languageSelected + "/ALA-01-B.mp3");
        _this.VoiceNote2.appendChild(_this.VoiceNote2src);
        _this.VoiceNote2.play();

    },

    VoiceNote3Fn: function () {
        console.log("Select The Suitable Equation To Find The Value Of a Given Variable");
        _this.VoiceNote3 = document.createElement('audio');
        _this.VoiceNote3src = document.createElement('source');
        _this.VoiceNote3src.setAttribute("src", window.baseUrl + "questionSounds/ALA-01-G6/" + _this.languageSelected + "/ALA-01-C.mp3");
        _this.VoiceNote3.appendChild(_this.VoiceNote3src);
        _this.VoiceNote3.play();

    },

    VoiceNote4Fn: function () {
        console.log("Fill_In The Blank For The Given Variable");
        _this.VoiceNote4 = document.createElement('audio');
        _this.VoiceNote4src = document.createElement('source');
        _this.VoiceNote4src.setAttribute("src", window.baseUrl + "questionSounds/ALA-01-G6/" + _this.languageSelected + "/ALA-01-D.mp3");
        _this.VoiceNote4.appendChild(_this.VoiceNote4src);
        _this.VoiceNote4.play();
        _this.time.events.add(2000, function () { _this.AskFIBQn = true; });
    },

    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        //_this.anim.play();
        // //* star Actions changes
        // _this.userHasPlayed = 1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "ALA_01_G6";
        // _this.grade = "6";
        // _this.gradeTopics = "Variable and Equation";
        _this.microConcepts = "Algebra";

        anim.play();
    },


    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },

    DemoVideo: function () {
        //*  This game helps us convert decimals into lowest fractions
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/ALA-01-G6/" + _this.languageSelected + "/DV-ALA-01-G6.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* Drag the strips and square pieces onto the grid to represent the given decimal number.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALA-01-G6/" +
            _this.languageSelected + "/ALA-01-A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Write the corresponding fraction.
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALA-01-G6/" +
            _this.languageSelected + "/ALA-01-B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* Now, select the lowest form of the fraction.
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALA-01-G6/" +
            _this.languageSelected + "/ALA-01-C.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 50, 'skipArrow');       //* skip button shown at the bottom
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

        if (_this.demoAudio1Timer) clearTimeout(_this.demoAudio1Timer);
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
        _this.demoVideo_1 = _this.add.video('ala01_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/ALA-01-G6.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();

        //* play the demo audio1 
        // _this.demoAudio1.play();

        _this.q1Sound.play();

        _this.demoAudio1Timer = setTimeout(function ()    //* da1 js timer to play demoAudio1Timer after 4 seconds.
        {
            console.log("inside da1sound.....")
            clearTimeout(_this.demoAudio1Timer);         //* clear the time once its used.
            _this.demoAudio1.play();
        }, 9000);

        _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 27 seconds.
        {
            console.log("inside q2sound.....")
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 15000);

        _this.q3Timer = setTimeout(function ()    //* q3 js timer to play q3Timer after 47 seconds.
        {
            console.log("inside q3sound.....")
            clearTimeout(_this.q3Timer);         //* clear the time once its used.
            _this.q3Sound.play();
        }, 24000);

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