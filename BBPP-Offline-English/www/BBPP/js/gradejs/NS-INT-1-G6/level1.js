Game.NS_INT_1_G6level1 = function () { };

Game.NS_INT_1_G6level1.prototype = {

    init: function (game) {
        _this = this;

        //* This game is for integers. Drag the object and place it in a specified level.

        //* use the language selected to form the string for url of the audio files.
        //* need to populate that from a parameter that is passed.
        //* 
        _this.languageSelected = window.languageSelected;

        if (_this.languageSelected == null
            || _this.languageSelected == " "
            || _this.languageSelected == "") {
            _this.languageSelected = "English";
        }
        else console.log("Language selected: " + _this.languageSelected);

        //telInitializerbbpp.gameIdInit("sequence2_1_1a",gradeSelected);

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

        _this.screen_opening = document.createElement('audio');
        _this.screen_openingsrc = document.createElement('source');
        _this.screen_openingsrc.setAttribute("src", window.baseUrl + "sounds/screen opening.wav");
        _this.screen_opening.appendChild(_this.screen_openingsrc);


        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        telInitializerbbpp.gameIdInit("NS_INT_1_G6", gradeSelected);
        console.log(gameID,"gameID...");

    },

    create: function (game) {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        _this.questionid = null;

        console.log("inside create ..........//");
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

        _this.amplify = null;

        _this.sceneCount = 0;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.group1;
        _this.group2;
        _this.group3;

        _this.opt = new Array();
        _this.correctans = 0;
        _this.questionNo = 0;

        _this.background;
        _this.click3;

        _this.click4;
        _this.rightCount;

        _this.opt1;
        _this.opt2;
        _this.opt3;

        _this.wmusic;
        _this.wrong = true;

        _this.count;
        _this.clickSound;

        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        // //* BB plus variables
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
       _this.microConcepts;
        // _this.grade;

        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count = 0;
        _this.count1 = 0;
        _this.celebration = false;

        _this.reset = -1;

        _this.shelfX;
        _this.shelfY;

        _this.qArrays = new Array();

        _this.qArrays = [1, 2, 3, 4, 5, 6];
        _this.qArrays = _this.shuffle(_this.qArrays);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        _this.Q1_stepplace0 = _this.add.image(100, 230, 'floorarea');
        _this.Q1_stepplace0.scale.setTo(0.13, 2);

        _this.Q1_stepplace1 = _this.add.image(335, 180, 'zn');
        _this.Q1_stepplace2 = _this.add.image(410, 150, 'zn');
        _this.Q1_stepplace3 = _this.add.image(490, 120, 'zn');
        _this.Q1_stepplace4 = _this.add.image(565, 90, 'zn');
        _this.Q1_stepplace5 = _this.add.image(635, 60, 'zn');

        _this.Q1_stepplacem1 = _this.add.image(250, 260, 'zn');
        _this.Q1_stepplacem2 = _this.add.image(320, 290, 'zn');
        _this.Q1_stepplacem3 = _this.add.image(395, 320, 'zn');
        _this.Q1_stepplacem4 = _this.add.image(470, 350, 'zn');
        _this.Q1_stepplacem5 = _this.add.image(540, 380, 'zn');

        _this.background = _this.add.sprite(0, 0, 'groundfloor');
        _this.background.name = "groundfloor";
        //_this.background.frame = 14;
        _this.background.scale.setTo(1, 1);
        _this.groundfloor = _this.background.animations.add('groundfloor');
        _this.background.animations.play('groundfloor', 10, false);
        _this.screen_opening.play();


        _this.underground = _this.add.sprite(0, 265, 'underground');
        _this.underground.name = "underground";
        _this.underground.frame = 1;
        _this.underground.scale.setTo(1, 1);

        _this.shelf = _this.add.image(725, 0, 'shelf');

        _this.ball = _this.add.sprite(800, 67, 'ball');
        _this.ball.frame = 0;
        //_this.ball.scale.setTo(0.6,0.6);

        _this.cat = _this.add.sprite(800, 145, 'cat');
        _this.cat.frame = 0;
        //_this.cat.scale.setTo(0.6,0.6);

        _this.dog = _this.add.sprite(800, 230, 'dog');
        _this.dog.frame = 0;
        //_this.dog.scale.setTo(0.6,0.6);

        _this.rabbit = _this.add.sprite(800, 315, 'rabbit');
        _this.rabbit.frame = 0;
        //_this.rabbit.scale.setTo(0.6,0.6);

        _this.cloth = _this.add.sprite(800, 406, 'cloth');
        _this.cloth.frame = 0;
        //_this.cloth.scale.setTo(0.6,0.6);

        _this.time.events.add(1000, this.displayNumbers);


        _this.navBar = _this.add.sprite(0, 0, 'navBar');
        _this.navBar.scale.setTo(1, 1);

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.stopVoice();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(10, function () {
                _this.state.start('grade6NumberSystems', true, false);
            });
        });

        _this.rightbtnClicked = false;
        _this.wrongbtnClicked = false;
        _this.speakerbtnClicked = false;

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');
        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            //_this.clickSound = _this.add.audio('ClickSound');
            if (_this.speakerbtnClicked == false && _this.rightbtnClicked == false) {
                telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                _this.Q1_askQ1VoiceQuestion();

                _this.time.events.add(2000, function () {
                    _this.speakerbtnClicked = false;
                    _this.Q1_EnableVoice();

                });
            }

        }, _this);

        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';

        /*_this.scale = _this.add.image(915,40,'level_scale');
        _this.scale.scale.setTo(1.8,1);*/

        _this.numGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        /*_this.KFsitting =_this.add.image('kingfisher_sitting');
        _this.KFsitting.visible = false;
        _this.fish_1 =_this.add.image('Fish_1');
        _this.fish_1.visible = false;*/

        _this.generateStarsForTheScene(6);

        // _this.KF_place =  _this.add.image( 170, 510 ,'kingfisher_sitting');
        // _this.KF_place.scale.setTo(0.7,0.7);
        // _this.KF_place.anchor.setTo(0.5);
        // _this.KF_place.inputEnabled = false;

        // _this.Fish_place =  _this.add.image( 100, 510 ,'Fish_1');
        // _this.Fish_place.scale.setTo(0.7,0.7);
        // _this.Fish_place.anchor.setTo(0.5);
        // _this.Fish_place.inputEnabled = false;

        _this.firstQOption_index = -1;
        _this.firstQPos_index = 0;

        _this.rightAns;
        _this.repeat1 = 1;
        _this.time.events.add(4000, _this.getQuestion);

    },

    //    showDemoVideo: function()
    //    {
    //        _this.demoVideo_1 = _this.add.video('int_1_1');
    //        
    //        if (_this.demoVideo_1 == null) console.log("it is not loaded");
    //        else console.log("it is  loaded: " + _this.demoVideo_1);
    //        _this.demoVideo_1.addToWorld();
    //        _this.demoVideo_1.play(false);
    //        
    ////        this.video.changeSource("assets/demoVideos/7_1_1.mp4");
    ////        this.video.addToWorld();
    ////        this.video2.stop(false);
    ////        this.video2.onComplete.add(function() {}
    //    },

    displayNumbers: function () {
        _this.time.events.add(500, function () { _this.Numbr_1 = _this.add.image(350, 220, 'Numbr_1'); });

        _this.time.events.add(750, function () { _this.Numbr_2 = _this.add.image(410, 190, 'Numbr_2'); });

        _this.time.events.add(1000, function () { _this.Numbr_3 = _this.add.image(490, 160, 'Numbr_3'); });

        _this.time.events.add(1250, function () { _this.Numbr_4 = _this.add.image(570, 130, 'Numbr_4'); });

        _this.time.events.add(1500, function () { _this.Numbr_5 = _this.add.image(640, 100, 'Numbr_5'); });

        _this.time.events.add(1750, function () { _this.Numbr_0 = _this.add.image(155, 280, 'Numbr_0'); });

        _this.time.events.add(2000, function () { _this.Numbr_m1 = _this.add.image(260, 305, 'Numbr_-1'); });

        _this.time.events.add(2250, function () { _this.Numbr_m2 = _this.add.image(320, 335, 'Numbr_-2'); });

        _this.time.events.add(2500, function () { _this.Numbr_m3 = _this.add.image(390, 365, 'Numbr_-3'); });

        _this.time.events.add(2750, function () { _this.Numbr_m4 = _this.add.image(470, 395, 'Numbr_-4'); });

        _this.time.events.add(3000, function () { _this.Numbr_m5 = _this.add.image(550, 425, 'Numbr_-5'); });





    },

    updateTimer: function () {
        _this.counterForTimer++;
        ////console.log("lololil"+counterForTimer);
        if (_this.counterForTimer > 59) {
            _this.counterForTimer = 0;

            if (_this.minutes < 10) {
                _this.minutes = _this.minutes + 1;
                _this.seconds = 00;
            } else {
                _this.minutes = _this.minutes + 1;
            }
        } else {
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
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;
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
        _this.sceneCount++;
      
        //console.log("getQuestion :"+_this.no11);
        //console.log("getQuestion :"+_this.qArrays[_this.no11]);

        _this.underground.frame = 0;
        //_this.sceneCount++;

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

        //_this.gotoFirstQuestion();

        _this.Q1_OptionsArray = [1, 2, 3, 4, 5];
        _this.Q1_OptionsArray = _this.shuffle(_this.Q1_OptionsArray);

        _this.Q1_PosArray = [0, 1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
        _this.Q1_PosArray = _this.shuffle(_this.Q1_PosArray);

        //_this.questionid =1;
        _this.qArrays[_this.no11] = 1;

        switch (_this.qArrays[_this.no11]) {
            case 1:
                _this.gotoFirstQuestion();
                break;
            /*case 2: _this.gotoFourthQuestion();
            break;
            case 3: _this.gotoThirdQuestion();
            break;
            case 4: _this.gotoFourthQuestion();
            break;
            case 5: _this.gotoFifthQuestion();
            break;
            case 6: _this.gotoSixthQuestion();
            break;
            case 7: _this.gotoSeventhQuestion();
            break;
            case 8: _this.gotoEighthQuestion();
            break;
            case 9: _this.gotoNinethQuestion();
            break;
            case 10: _this.gotoTenthQuestion();
            break; */

        }
        _this.questionid =1;
        //telInitializerbbpp.gameIdInit(_this.questionid);
    },

    stopVoice: function () {
        if (_this.playQuestionSound) {
            if (_this.playQuestionSound.contains(_this.src)) {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }

            if (!_this.playQuestionSound.paused) {
                //console.log("here");
                _this.playQuestionSound.pause();
                _this.playQuestionSound.currentTime = 0.0;
            }
            _this.playQuestionSound = null;
            _this.src = null;
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

    gotoFirstQuestion: function () {
        _this.Q1_EnableVoice();

        _this.firstQOption_index += 1;
        _this.firstQPos_index += 1;

        if (_this.firstQOption_index > 4) {
            console.log("Now shuffling: ");
            _this.Q1_OptionsArray = _this.shuffle(_this.Q1_OptionsArray);
            _this.firstQOption_index = 0;
        }

        _this.Q1_Option = _this.Q1_OptionsArray[_this.firstQOption_index];

        if (_this.firstQPos_index > 10) {
            console.log("Now shuffling: ");
            _this.Q1_PosArray = _this.shuffle(_this.Q1_PosArray);
            _this.firstQPos_index = 0;
        }

        _this.Q1_PosQn = _this.Q1_PosArray[_this.firstQPos_index];

        //_this.Q1_Option = _this.Q1_OptionsArray[0];
        //_this.Q1_PosQn = _this.Q1_PosArray[0];

        //        _this.Q1_Option=1;
        //        _this.Q1_PosQn=3;

        console.log('Inside question 1');
        console.log("object " + _this.Q1_Option);
        console.log("place at " + _this.Q1_PosQn);

        _this.Q1_QnOptions();

    },

    Q1_QnOptions: function () {
        _this.speakerbtn.inputEnabled = false;
        console.log('inside qn1 option' + _this.Q1_Option)

        switch (_this.Q1_Option) {
            case 1:
                _this.shelfX = 800;
                _this.shelfY = 67;
                _this.Q1_gotoOption1();
                break;
            case 2:
                _this.shelfX = 800;
                _this.shelfY = 145;
                _this.Q1_gotoOption2();
                break;
            case 3:
                _this.shelfX = 800;
                _this.shelfY = 230;
                _this.Q1_gotoOption3();
                break;
            case 4:
                _this.shelfX = 800;
                _this.shelfY = 315;
                _this.Q1_gotoOption4();
                break;
            case 5:
                _this.shelfX = 800;
                _this.shelfY = 406;
                _this.Q1_gotoOption5();
                break;
        }

    },

    Q1_gotoOption1: function () {
        _this.Q1_askQ1VoiceQuestion(_this.Q1_Option);
        _this.ball.frame = 1;
        _this.ball.inputEnabled = true;
        _this.ball.input.useHandCursor = true;
        _this.ball.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this.ball);
        _this.Q1_valButton();
        _this.ball.input.enableDrag(true);
        //_this.ball.inputEnabled = false;

        _this.ball.events.onDragStop.add(_this.Q1_DropCheck, _this.ball);
        //_this.rightbtn.events.onInputDown.add(_this.Q1_Validation, _this);
        //_this.wrongbtn.events.onInputDown.add(_this.Q1_eraseClicked, _this);
    },
    Q1_gotoOption2: function () {
        _this.Q1_askQ1VoiceQuestion(_this.Q1_Option);
        _this.cat.frame = 1;
        _this.cat.inputEnabled = true;
        _this.cat.input.useHandCursor = true;
        _this.cat.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this.cat);
        _this.Q1_valButton();
        _this.cat.input.enableDrag(true);
        //_this.cat.inputEnabled = false;


        _this.cat.events.onDragStop.add(_this.Q1_DropCheck, _this.cat);
        //_this.rightbtn.events.onInputDown.add(_this.Q1_Validation, _this);
        //_this.wrongbtn.events.onInputDown.add(_this.Q1_eraseClicked, _this);

    },
    Q1_gotoOption3: function () {
        _this.Q1_askQ1VoiceQuestion(_this.Q1_Option);
        _this.dog.frame = 1;
        _this.dog.inputEnabled = true;
        _this.dog.input.useHandCursor = true;
        _this.dog.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this.dog);
        _this.Q1_valButton();
        _this.dog.input.enableDrag(true);
        //_this.dog.inputEnabled = false;

        _this.dog.events.onDragStop.add(_this.Q1_DropCheck, _this.dog);
        //_this.rightbtn.events.onInputDown.add(_this.Q1_Validation, _this);
        //_this.wrongbtn.events.onInputDown.add(_this.Q1_eraseClicked, _this);

    },
    Q1_gotoOption4: function () {
        _this.Q1_askQ1VoiceQuestion(_this.Q1_Option);
        _this.rabbit.frame = 1;
        _this.rabbit.inputEnabled = true;
        _this.rabbit.input.useHandCursor = true;
        _this.rabbit.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this.rabbit);
        _this.Q1_valButton();
        _this.rabbit.input.enableDrag(true);
        //_this.rabbit.inputEnabled = false;

        _this.rabbit.events.onDragStop.add(_this.Q1_DropCheck, _this.rabbit);
        //_this.rightbtn.events.onInputDown.add(_this.Q1_Validation, _this);
        //_this.wrongbtn.events.onInputDown.add(_this.Q1_eraseClicked, _this);

    },
    Q1_gotoOption5: function () {
        _this.Q1_askQ1VoiceQuestion(_this.Q1_Option);
        _this.cloth.frame = 1;
        _this.cloth.inputEnabled = true;
        _this.cloth.input.useHandCursor = true;
        _this.cloth.events.onInputDown.add(_this.Q1_ShelfItemClicked, _this.cloth);
        _this.Q1_valButton();
        _this.cloth.input.enableDrag(true);
        //_this.cloth.inputEnabled = false;

        _this.cloth.events.onDragStop.add(_this.Q1_DropCheck, _this.cloth);
        //_this.rightbtn.events.onInputDown.add(_this.Q1_Validation, _this);
        //_this.wrongbtn.events.onInputDown.add(_this.Q1_eraseClicked, _this);

    },

    Q1_ShelfItemClicked: function (target) {
        _this.vx = target.x;
        _this.vy = target.y;
        //target.input.enableDrag(true);
        //target.frame = 1;
        //target.scale.setTo(1,1);
        _this.clickSound.play();
        _this.reset = 1;
    },

    Q1_DropCheck: function (target) {
        console.log("Q1_DropCheck");
        if (_this.Q1_checkOverlap(target, _this.Q1_stepplace5)) {
            console.log("insider1");
            //target.visible = false;
            target.frame = 0;
            _this.underground.frame = 0;

            //_this.Numbr_5.visible = true;

            //   if(  _this.Q1_stepplace1.visible == false)
            //   {
            //     _this.Q1_stepplace1.visible = true;
            // }


            _this.rightAns = 5;

            switch (_this.Q1_Option) {
                case 1:
                    _this.positionX = 640;
                    _this.positionY = 61;
                    break;
                case 2:
                    _this.positionX = 637;
                    _this.positionY = 57;
                    break;
                case 3:
                    _this.positionX = 640;
                    _this.positionY = 57;
                    break;
                case 4:
                    _this.positionX = 640;
                    _this.positionY = 57;
                    break;
                case 5:
                    _this.positionX = 636;
                    _this.positionY = 59;
                    break;
            }
            _this.Q1_DropItem(_this.positionX, _this.positionY, target);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplace4)) {
            console.log("insider2");
            //target.visible = false;
            target.frame = 0;
            _this.underground.frame = 0;

            //_this.Numbr_4.visible = true;

            //   if(  _this.Q1_stepplace2.visible == false)
            //   {
            //     _this.Q1_stepplace2.visible = true;
            // }

            // _this.Q1_stepplace2.visible = true;

            _this.rightAns = 4;
            switch (_this.Q1_Option) {
                case 1:
                    _this.positionX = 567;
                    _this.positionY = 91;
                    break;
                case 2:
                    _this.positionX = 567;
                    _this.positionY = 87;
                    break;
                case 3:
                    _this.positionX = 567;
                    _this.positionY = 87;
                    break;
                case 4:
                    _this.positionX = 570;
                    _this.positionY = 87;
                    break;
                case 5:
                    _this.positionX = 566;
                    _this.positionY = 89;
                    break;
            }
            _this.Q1_DropItem(_this.positionX, _this.positionY, target);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplace3)) {
            console.log("insider3");
            //target.visible = false;
            target.frame = 0;
            _this.underground.frame = 0;

            //_this.Numbr_3.visible = true;

            //   if(  _this.Q1_stepplace3.visible == false)
            //   {
            //     _this.Q1_stepplace3.visible = true;
            // }

            // _this.Q1_stepplace3.visible = true;
            _this.rightAns = 3;
            switch (_this.Q1_Option) {
                case 1:
                    _this.positionX = 493;
                    _this.positionY = 121;
                    break;
                case 2:
                    _this.positionX = 492;
                    _this.positionY = 117;
                    break;
                case 3:
                    _this.positionX = 492;
                    _this.positionY = 117;
                    break;
                case 4:
                    _this.positionX = 495;
                    _this.positionY = 117;
                    break;
                case 5:
                    _this.positionX = 491;
                    _this.positionY = 119;
                    break;
            }
            _this.Q1_DropItem(_this.positionX, _this.positionY, target);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplace2)) {
            console.log("insider4");
            //target.visible = false;
            target.frame = 0;
            _this.underground.frame = 0;

            //_this.Numbr_2.visible = true;

            //   if(  _this.Q1_stepplace4.visible == false)
            //   {
            //     _this.Q1_stepplace4.visible = true;
            // }

            // _this.Q1_stepplace4.visible = true;
            _this.rightAns = 2;
            switch (_this.Q1_Option) {
                case 1:
                    _this.positionX = 415;
                    _this.positionY = 152;
                    break;
                case 2:
                    _this.positionX = 412;
                    _this.positionY = 148;
                    break;
                case 3:
                    _this.positionX = 415;
                    _this.positionY = 148;
                    break;
                case 4:
                    _this.positionX = 415;
                    _this.positionY = 148;
                    break;
                case 5:
                    _this.positionX = 411;
                    _this.positionY = 150;
                    break;
            }
            _this.Q1_DropItem(_this.positionX, _this.positionY, target);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplace1)) {
            console.log("insider5");
            //target.visible = false;
            target.frame = 0;
            _this.underground.frame = 0;

            //_this.Numbr_1.visible = true;

            //   if(  _this.Q1_stepplace5.visible == false)
            //   {
            //     _this.Q1_stepplace5.visible = true;
            // }

            // _this.Q1_stepplace5.visible = true;
            _this.rightAns = 1;
            switch (_this.Q1_Option) {
                case 1:
                    _this.positionX = 340;
                    _this.positionY = 182;
                    break;
                case 2:
                    _this.positionX = 337;
                    _this.positionY = 178;
                    break;
                case 3:
                    _this.positionX = 340;
                    _this.positionY = 178;
                    break;
                case 4:
                    _this.positionX = 340;
                    _this.positionY = 178;
                    break;
                case 5:
                    _this.positionX = 336;
                    _this.positionY = 180;
                    break;
            }
            _this.Q1_DropItem(_this.positionX, _this.positionY, target);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplace0)) {
            console.log("insider5");
            //target.visible = false;
            target.frame = 0;
            _this.underground.frame = 0;

            //_this.Numbr_0.visible = true;

            //   if(  _this.Q1_stepplace5.visible == false)
            //   {
            //     _this.Q1_stepplace5.visible = true;
            // }

            // _this.Q1_stepplace5.visible = true;
            _this.rightAns = 0;
            switch (_this.Q1_Option) {
                case 1:
                    _this.positionX = 155;
                    _this.positionY = 230;
                    break;
                case 2:
                    _this.positionX = 152;
                    _this.positionY = 226;
                    break;
                case 3:
                    _this.positionX = 155;
                    _this.positionY = 226;
                    break;
                case 4:
                    _this.positionX = 155;
                    _this.positionY = 226;
                    break;
                case 5:
                    _this.positionX = 151;
                    _this.positionY = 228;
                    break;
            }
            _this.Q1_DropItem(_this.positionX, _this.positionY, target);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplacem1)) {
            console.log("insider5");

            // _this.underground1 = _this.underground.animations.add('underground');
            // _this.underground.animations.play('underground', 1, false);

            _this.underground.frame = 1;

            //target.visible = false;
            target.frame = 0;

            //_this.Numbr_m1.visible = true;



            //   if(  _this.Q1_stepplace5.visible == false)
            //   {
            //     _this.Q1_stepplace5.visible = true;
            // }

            // _this.Q1_stepplace5.visible = true;
            _this.rightAns = -1;
            switch (_this.Q1_Option) {
                case 1:
                    _this.positionX = 255;
                    _this.positionY = 261;
                    break;
                case 2:
                    _this.positionX = 252;
                    _this.positionY = 258;
                    break;
                case 3:
                    _this.positionX = 255;
                    _this.positionY = 258;
                    break;
                case 4:
                    _this.positionX = 255;
                    _this.positionY = 258;
                    break;
                case 5:
                    _this.positionX = 251;
                    _this.positionY = 260;
                    break;
            }
            _this.Q1_DropItem(_this.positionX, _this.positionY, target);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplacem2)) {
            console.log("insider5");

            // _this.underground1 = _this.underground.animations.add('underground');
            // _this.underground.animations.play('underground', 1, false);

            _this.underground.frame = 1;

            //target.visible = false;
            target.frame = 0;

            //_this.Numbr_m2.visible = true;



            //   if(  _this.Q1_stepplace5.visible == false)
            //   {
            //     _this.Q1_stepplace5.visible = true;
            // }

            // _this.Q1_stepplace5.visible = true;
            _this.rightAns = -2;
            switch (_this.Q1_Option) {
                case 1:
                    _this.positionX = 325;
                    _this.positionY = 291;
                    break;
                case 2:
                    _this.positionX = 322;
                    _this.positionY = 289;
                    break;
                case 3:
                    _this.positionX = 325;
                    _this.positionY = 289;
                    break;
                case 4:
                    _this.positionX = 325;
                    _this.positionY = 289;
                    break;
                case 5:
                    _this.positionX = 321;
                    _this.positionY = 291;
                    break;
            }
            _this.Q1_DropItem(_this.positionX, _this.positionY, target);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplacem3)) {
            console.log("insider5");

            // _this.underground1 = _this.underground.animations.add('underground');
            // _this.underground.animations.play('underground', 1, false);

            _this.underground.frame = 1;

            //target.visible = false;
            target.frame = 0;

            //_this.Numbr_m3.visible = true;



            //   if(  _this.Q1_stepplace5.visible == false)
            //   {
            //     _this.Q1_stepplace5.visible = true;
            // }

            // _this.Q1_stepplace5.visible = true;
            _this.rightAns = -3;
            switch (_this.Q1_Option) {
                case 1:
                    _this.positionX = 400;
                    _this.positionY = 322;
                    break;
                case 2:
                    _this.positionX = 397;
                    _this.positionY = 319;
                    break;
                case 3:
                    _this.positionX = 400;
                    _this.positionY = 319;
                    break;
                case 4:
                    _this.positionX = 400;
                    _this.positionY = 319;
                    break;
                case 5:
                    _this.positionX = 396;
                    _this.positionY = 321;
                    break;
            }
            _this.Q1_DropItem(_this.positionX, _this.positionY, target);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplacem4)) {
            console.log("insider5");

            // _this.underground1 = _this.underground.animations.add('underground');
            // _this.underground.animations.play('underground', 1, false);
            _this.underground.frame = 1;


            //target.visible = false;
            target.frame = 0;

            //_this.Numbr_m4.visible = true;



            //   if(  _this.Q1_stepplace5.visible == false)
            //   {
            //     _this.Q1_stepplace5.visible = true;
            // }

            // _this.Q1_stepplace5.visible = true;
            _this.rightAns = -4;
            switch (_this.Q1_Option) {
                case 1:
                    _this.positionX = 475;
                    _this.positionY = 353;
                    break;
                case 2:
                    _this.positionX = 472;
                    _this.positionY = 350;
                    break;
                case 3:
                    _this.positionX = 475;
                    _this.positionY = 350;
                    break;
                case 4:
                    _this.positionX = 475;
                    _this.positionY = 350;
                    break;
                case 5:
                    _this.positionX = 471;
                    _this.positionY = 352;
                    break;
            }
            _this.Q1_DropItem(_this.positionX, _this.positionY, target);

        } else if (_this.Q1_checkOverlap(target, _this.Q1_stepplacem5)) {
            console.log("insider5");

            // _this.underground1 = _this.underground.animations.add('underground');
            // _this.underground.animations.play('underground', 1, false);

            _this.underground.frame = 1;

            //target.visible = false;
            target.frame = 0;

            //_this.Numbr_m5.visible = true;



            //   if(  _this.Q1_stepplace5.visible == false)
            //   {
            //     _this.Q1_stepplace5.visible = true;
            // }

            // _this.Q1_stepplace5.visible = true;
            _this.rightAns = -5;
            switch (_this.Q1_Option) {
                case 1:
                    _this.positionX = 550;
                    _this.positionY = 383;
                    break;
                case 2:
                    _this.positionX = 547;
                    _this.positionY = 380;
                    break;
                case 3:
                    _this.positionX = 550;
                    _this.positionY = 380;
                    break;
                case 4:
                    _this.positionX = 550;
                    _this.positionY = 380;
                    break;
                case 5:
                    _this.positionX = 546;
                    _this.positionY = 382;
                    break;
            }
            console.log("m5x " + _this.positionX);
            console.log("m5y " + _this.positionY);
            _this.Q1_DropItem(_this.positionX, _this.positionY, target);

        } else {
            console.log("ELSE SHELF XY");
            target.x = _this.shelfX;
            target.y = _this.shelfY;
            target.frame = 1;
            _this.rightAns = "";
            _this.underground.frame = 0;
            target.scale.setTo(1, 1);
            target.anchor.setTo(0, 0);
        }

        //target.x = _this.vx;
        //target.y = _this.vy;

    },

    Q1_checkOverlap: function (spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },
    Q1_DropItem: function (posX, posY, target) {
        console.log("x " + _this.positionX + "y " + _this.positionY);
        target.scale.setTo(0.59, 0.59);
        target.anchor.setTo(0.1, 0.1);
        target.x = _this.positionX;
        target.y = _this.positionY;

        // if (_this.Q1_Option == 1) {
        //     _this.ballanim = _this.add.sprite(_this.positionX, _this.positionY, 'ballanim');
        //     _this.ballanim.name = "ballanim";
        //     _this.ballanim.scale.setTo(1, 1);
        //     _this.ballanim1 = _this.ballanim.animations.add('ballanim');
        // } else if (_this.Q1_Option == 2) {
        //     _this.catanim = _this.add.sprite(_this.positionX, _this.positionY, 'catanim');
        //     _this.catanim.name = "catanim";
        //     _this.catanim.scale.setTo(1, 1);
        //     _this.catanim1 = _this.catanim.animations.add('catanim');
        // } else if (_this.Q1_Option == 3) {
        //     _this.doganim = _this.add.sprite(_this.positionX, _this.positionY, 'doganim');
        //     _this.doganim.name = "doganim";
        //     _this.doganim.scale.setTo(1, 1);
        //     _this.doganim1 = _this.doganim.animations.add('doganim');
        // } else if (_this.Q1_Option == 4) {
        //     _this.positionY-=10;
        //     _this.rabbitanim = _this.add.sprite(_this.positionX, _this.positionY, 'rabbitanim');
        //     _this.rabbitanim.name = "rabbitanim";
        //     _this.rabbitanim.scale.setTo(1, 1);
        //     _this.rabbitanim1 = _this.rabbitanim.animations.add('rabbitanim');
        // } else if (_this.Q1_Option == 5) {
        //     _this.clothanim = _this.add.sprite(_this.positionX, _this.positionY, 'clothanim');
        //     _this.clothanim.name = "clothanim";
        //     _this.clothanim.scale.setTo(1, 1);
        //     _this.clothanim1 = _this.clothanim.animations.add('clothanim');
        // }

    },

    Q4_checkOverlap: function (spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },

    Q1_valButton: function () {

        //var bottomnumpadbg = _this.numGroup.create(0,470,'numpadbg');
        //bottomnumpadbg.name = "numpadbg";

        _this.wrongbtn = _this.numGroup.create(450, 500, 'EraseBtn');
        //_this.wrongbtn = _this.add.sprite(_this.x+136,508,'Numberpad');
        _this.wrongbtn.frame = 0;
        _this.wrongbtn.anchor.setTo(0.5);
        //_this.wrongbtn.scale.setTo(0.7, 0.7);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.Q1_eraseClicked, _this);

        _this.rightbtn = _this.numGroup.create(500, 500, 'RightBtn');
        //_this.rightbtn = _this.add.sprite(_this.x+204,508,'Numberpad');
        _this.rightbtn.frame = 0;
        _this.rightbtn.anchor.setTo(0.5);
        //_this.rightbtn.scale.setTo(0.7, 0.7);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.Q1_Validation, _this);

    },

    Q1_eraseClicked: function (target) {
        target.frame = 1;
        _this.time.events.add(500, function () {
            target.frame = 0;
        }, _this);
        console.log("going inside wrong btn " + _this.wrongbtnClicked);
        if (_this.wrongbtnClicked == false) {
            _this.wrongbtnClicked = true;
            console.log("going inside wrong btn");
            _this.clickSound.play();
            _this.Q1_eraseScreen();
            this.wrongbtnClicked = false;
        }

    },

    Q1_eraseScreen: function () {
        _this.clickSound.play();
        console.log('inside erase fn');
        console.log('item' + _this.Q1_Option);
        console.log('position' + _this.Q1_PosQn);

        if (_this.rightAns == 1) {
            //_this.Numbr_1.visible = false;
        } else if (_this.rightAns == 2) {
            //_this.Numbr_2.visible = false;
        } else if (_this.rightAns == 3) {
            //_this.Numbr_3.visible = false;
        } else if (_this.rightAns == 4) {
            //_this.Numbr_4.visible = false;
        } else if (_this.rightAns == 5) {
            //_this.Numbr_5.visible = false;
        } else if (_this.rightAns == 0) {
            //_this.Numbr_0.visible = false;
        } else if (_this.rightAns == -1) {
            //_this.Numbr_m1.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -2) {
            //_this.Numbr_m2.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -3) {
            //_this.Numbr_m3.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -4) {
            //_this.Numbr_m4.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -5) {
            //_this.Numbr_m5.visible = false;
            _this.underground.frame = 0;
        }

        if (_this.Q1_Option == 1) {
            _this.ball.visible = true;
            _this.ball.scale.setTo(1, 1);
            _this.ball.anchor.setTo(0, 0);
            _this.ball.x = _this.shelfX;
            _this.ball.y = _this.shelfY;
            _this.ball.frame = 1;
        } else if (_this.Q1_Option == 2) {
            _this.cat.visible = true;
            _this.cat.scale.setTo(1, 1);
            _this.cat.anchor.setTo(0, 0);
            _this.cat.x = _this.shelfX;
            _this.cat.y = _this.shelfY;
            _this.cat.frame = 1;
        } else if (_this.Q1_Option == 3) {
            _this.dog.visible = true;
            _this.dog.scale.setTo(1, 1);
            _this.dog.anchor.setTo(0, 0);
            _this.dog.x = _this.shelfX;
            _this.dog.y = _this.shelfY;
            _this.dog.frame = 1;
        } else if (_this.Q1_Option == 4) {
            _this.rabbit.visible = true;
            _this.rabbit.scale.setTo(1, 1);
            _this.rabbit.anchor.setTo(0, 0);
            _this.rabbit.x = _this.shelfX;
            _this.rabbit.y = _this.shelfY;
            _this.rabbit.frame = 1;
        } else if (_this.Q1_Option == 5) {
            _this.cloth.visible = true;
            _this.cloth.scale.setTo(1, 1);
            _this.cloth.anchor.setTo(0, 0);
            _this.cloth.x = _this.shelfX;
            _this.cloth.y = _this.shelfY;
            _this.cloth.frame = 1;
        }

    },

    Q1_Validation: function (target) {
        _this.rightbtn.events.onInputDown.removeAll();
        _this.wrongbtn.events.onInputDown.removeAll();
        target.frame = 1;
        _this.time.events.add(500, function () {
            target.frame = 0;
        }, _this);

        if (_this.Q1_Option == 1) {
            _this.ball.visible = false;
            _this.ball.x = _this.shelfX;
            _this.ball.y = _this.shelfY;
        } else if (_this.Q1_Option == 2) {
            _this.cat.visible = false;
            _this.cat.x = _this.shelfX;
            _this.cat.y = _this.shelfY;
        } else if (_this.Q1_Option == 3) {
            _this.dog.visible = false;
            _this.dog.x = _this.shelfX;
            _this.dog.y = _this.shelfY;
        } else if (_this.Q1_Option == 4) {
            _this.rabbit.visible = false;
            _this.rabbit.x = _this.shelfX;
            _this.rabbit.y = _this.shelfY;
        } else if (_this.Q1_Option == 5) {
            _this.cloth.visible = false;
            _this.cloth.x = _this.shelfX;
            _this.cloth.y = _this.shelfY;
        }

        _this.clickSound.play();

        console.log("stopped");

        if (_this.Q1_PosQn == _this.rightAns) {

            if (_this.Q1_Option == 1) {
                //_this.ballanim = _this.add.sprite(_this.positionX+3, _this.positionY, 'ballanim');
                _this.ballanim = _this.add.sprite(_this.positionX + 3, _this.positionY - 4, 'ballanim');
                _this.ballanim.name = "ballanim";
                _this.ballanim.anchor.setTo(0, 0);
                _this.ballanim.scale.setTo(1.07, 1.07);
                _this.ballanim1 = _this.ballanim.animations.add('ballanim');
            } else if (_this.Q1_Option == 2) {
                _this.catanim = _this.add.sprite(_this.positionX + 4, _this.positionY + 4, 'catanim');
                _this.catanim.name = "catanim";
                _this.catanim.anchor.setTo(0, 0);
                _this.catanim.scale.setTo(1.0, 1.0);
                _this.catanim1 = _this.catanim.animations.add('catanim');
            } else if (_this.Q1_Option == 3) {
                _this.doganim = _this.add.sprite(_this.positionX + 4, _this.positionY + 4, 'doganim');
                _this.doganim.name = "doganim";
                _this.doganim.anchor.setTo(0, 0);
                _this.doganim.scale.setTo(1.1, 1.1);
                _this.doganim1 = _this.doganim.animations.add('doganim');
            } else if (_this.Q1_Option == 4) {
                //_this.positionY-=10;
                _this.rabbitanim = _this.add.sprite(_this.positionX + 6, _this.positionY + 4, 'rabbitanim');
                _this.rabbitanim.name = "rabbitanim";
                _this.rabbitanim.anchor.setTo(0, 0);
                _this.rabbitanim.scale.setTo(0.9, 0.9);
                _this.rabbitanim1 = _this.rabbitanim.animations.add('rabbitanim');
            } else if (_this.Q1_Option == 5) {
                _this.clothanim = _this.add.sprite(_this.positionX + 3, _this.positionY - 1, 'clothanim');
                _this.clothanim.name = "clothanim";
                _this.clothanim.anchor.setTo(0, 0);
                _this.clothanim.scale.setTo(1.18, 1.18);
                _this.clothanim1 = _this.clothanim.animations.add('clothanim');
            }
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.starActions();
            _this.time.events.add(500, function () { _this.Q1_objectCelebrations(1) });

            _this.time.events.add(1500, function () { _this.Q1_objectCelebrations(2) });

            _this.time.events.add(3000, _this.Q1_gotonext);

        } else {
            _this.noofAttempts++;
            _this.wrongSound.play();
            _this.reset = 3;
            _this.rightbtn.events.onInputDown.add(_this.Q1_Validation, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q1_eraseClicked, _this);
            _this.rightbtn.inputEnabled = true;
            _this.wrongbtn.inputEnabled = true;
            _this.time.events.add(1000, function () {
                _this.Q1_eraseScreen();
                _this.Q1_EnableVoice();
                _this.Q1_QnOptions();
            });

        }
    },

    Q1_objectCelebrations: function (First_or_Second) {
        console.log("value of first or second is: ", First_or_Second);
        if (_this.Q1_Option == 1) {
            _this.ballanim.animations.play('ballanim', 60, false);

            _this.ball.frame = 0;
            _this.ball.inputEnabled = false;
            // if (First_or_Second == 1) {
            // _this.ball_bouncing = document.createElement('audio');
            // _this.ball_bouncingsrc = document.createElement('source');
            // _this.ball_bouncingsrc.setAttribute("src", "sounds/ball_bouncing_falling.wav");
            // _this.ball_bouncing.appendChild(_this.ball_bouncingsrc);
            // _this.ball_bouncing.play();
            // }
            if (First_or_Second == 1) {
                _this.ball_bouncing = document.createElement('audio');
                _this.ball_bouncingsrc = document.createElement('source');
                _this.ball_bouncingsrc.setAttribute("src", window.baseUrl + "sounds/ball_bouncing_falling.wav");
                _this.ball_bouncing.appendChild(_this.ball_bouncingsrc);
                _this.ball_bouncing.play();
            }
        } else if (_this.Q1_Option == 2) {
            // _this.catanim.animations.play('catanim', 60, false);

            // _this.cat.frame = 0;
            // _this.cat.inputEnabled = false;

            // _this.cat_whinning = document.createElement('audio');
            // _this.cat_whinningsrc = document.createElement('source');
            // _this.cat_whinningsrc.setAttribute("src", "sounds/cat_whinning.wav");
            // _this.cat_whinning.appendChild(_this.cat_whinningsrc);
            // _this.cat_whinning.play();
            _this.catanim.animations.play('catanim', 60, false);

            _this.cat.frame = 0;
            _this.cat.inputEnabled = false;

            _this.cat_whinning = document.createElement('audio');
            _this.cat_whinningsrc = document.createElement('source');
            _this.cat_whinningsrc.setAttribute("src", window.baseUrl + "sounds/cat_whinning.wav");
            _this.cat_whinning.appendChild(_this.cat_whinningsrc);
            _this.cat_whinning.play();
        }  else if (_this.Q1_Option == 3) {
            _this.doganim.animations.play('doganim', 60, false);

            _this.dog.frame = 0;
            _this.dog.inputEnabled = false;

            _this.dog_barking = document.createElement('audio');
            _this.dog_barkingsrc = document.createElement('source');
            _this.dog_barkingsrc.setAttribute("src", window.baseUrl + "sounds/dog_barking.wav");
            _this.dog_barking.appendChild(_this.dog_barkingsrc);
            _this.dog_barking.play();
        } else if (_this.Q1_Option == 4) {
            _this.rabbitanim.animations.play('rabbitanim', 60, false);

            _this.rabbit.frame = 0;
            _this.rabbit.inputEnabled = false;

            _this.rabbit_squeaking = document.createElement('audio');
            _this.rabbit_squeakingsrc = document.createElement('source');
            _this.rabbit_squeakingsrc.setAttribute("src", window.baseUrl + "sounds/rabbit_squeaking.mp3");
            _this.rabbit_squeaking.appendChild(_this.rabbit_squeakingsrc);
            _this.rabbit_squeaking.play();
        } else if (_this.Q1_Option == 5) {
            _this.clothanim.animations.play('clothanim', 60, false);

            _this.cloth.frame = 0;
            _this.cloth.inputEnabled = false;

            _this.cloth_blowing = document.createElement('audio');
            _this.cloth_blowingsrc = document.createElement('source');
            _this.cloth_blowingsrc.setAttribute("src", window.baseUrl + "sounds/cloth_blowing.mp3");
            _this.cloth_blowing.appendChild(_this.cloth_blowingsrc);
            _this.cloth_blowing.play();
        }

    },

    Q1_clearObject: function () {
        _this.sceneCount++;
        _this.noofAttempts =0;
        _this.AnsTimerCount =0;
        
        console.log('inside clearObject');
        //_this.Q1_destroyObjects();
        if (_this.Q1_Option == 1) {
            console.log('clear ball');
            _this.ballanim1 = _this.add.tween(_this.ballanim).to({
                alpha: 0
            }, 500, 'Linear', true, 0);
            _this.ballanim1.onComplete.add(_this.Q1_destroyObjects);
            //_this.KFsitting.destroy();
            //_this.Q4_destroyObjects;

        } else if (_this.Q1_Option == 2) {

            _this.catanim2 = _this.add.tween(_this.catanim).to({
                alpha: 0
            }, 500, 'Linear', true, 0);
            _this.catanim2.onComplete.add(_this.Q1_destroyObjects);
            //_this.Q4_destroyObjects;
            //_this.KF_Eatingfish.destroy();
        } else if (_this.Q1_Option == 3) {

            _this.doganim2 = _this.add.tween(_this.doganim).to({
                alpha: 0
            }, 500, 'Linear', true, 0);
            _this.doganim2.onComplete.add(_this.Q1_destroyObjects);
            //_this.Q4_destroyObjects;
            //_this.KF_Eatingfish.destroy();
        } else if (_this.Q1_Option == 4) {

            _this.rabbitanim2 = _this.add.tween(_this.rabbitanim).to({
                alpha: 0
            }, 500, 'Linear', true, 0);
            _this.rabbitanim2.onComplete.add(_this.Q1_destroyObjects);
            //_this.Q4_destroyObjects;
            //_this.KF_Eatingfish.destroy();
        } else if (_this.Q1_Option == 5) {

            _this.clothanim2 = _this.add.tween(_this.clothanim).to({
                alpha: 0
            }, 500, 'Linear', true, 0);
            _this.clothanim2.onComplete.add(_this.Q1_destroyObjects);
            //_this.Q4_destroyObjects;
            //_this.KF_Eatingfish.destroy();
        }

    },

    Q1_destroyObjects: function () {

        console.log("inside destroy: repeat1: " + _this.repeat1);
        _this.objGroup.destroy();
        //_this.numGroup.destroy();

        //_this.Q4_clearObject();
        _this.count1++;

        if (_this.Q1_Option == 1) {
            _this.ball.visible = true;
            _this.ball.scale.setTo(1, 1);
            _this.ball.anchor.setTo(0, 0);
        } else if (_this.Q1_Option == 2) {
            _this.cat.visible = true;
            _this.cat.scale.setTo(1, 1);
            _this.cat.anchor.setTo(0, 0);
        } else if (_this.Q1_Option == 3) {
            _this.dog.visible = true;
            _this.dog.scale.setTo(1, 1);
            _this.dog.anchor.setTo(0, 0);

        } else if (_this.Q1_Option == 4) {
            _this.rabbit.visible = true;
            _this.rabbit.scale.setTo(1, 1);
            _this.rabbit.anchor.setTo(0, 0);

        } else if (_this.Q1_Option == 5) {
            _this.cloth.visible = true;
            _this.cloth.scale.setTo(1, 1);
            _this.cloth.anchor.setTo(0, 0);

        }

        if (_this.rightAns == 1) {
            //_this.Numbr_1.visible = false;
        } else if (_this.rightAns == 2) {
            //_this.Numbr_2.visible = false;
        } else if (_this.rightAns == 3) {
            //_this.Numbr_3.visible = false;
        } else if (_this.rightAns == 4) {
            //_this.Numbr_4.visible = false;
        } else if (_this.rightAns == 5) {
            //_this.Numbr_5.visible = false;
        } else if (_this.rightAns == 0) {
            //_this.Numbr_0.visible = false;
        } else if (_this.rightAns == -1) {
            //_this.Numbr_m1.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -2) {
            //_this.Numbr_m2.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -3) {
            //_this.Numbr_m3.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -4) {
            //_this.Numbr_m4.visible = false;
            _this.underground.frame = 0;
        } else if (_this.rightAns == -5) {
            //_this.Numbr_m5.visible = false;
            _this.underground.frame = 0;
        }

        // _this.Fish_place.visible = true;
        // _this.KF_place.visible = true;
        // _this.KFsitting.visible = true;
        _this.reset = -1;
        _this.Q1_EnableVoice();
        _this.gotoFirstQuestion();

    },

    Q1_gotonext: function () {

        console.log('inside goto next');
        if (_this.repeat1 < 3) {
            _this.repeat1++;
            _this.Q1_clearObject();
        } else {
            // once three questions are over, go to the next game
            _this.timer1.stop();
            //_this.timer1 = null;
            _this.state.start('NS_INT_2_G6level1', false, false, _this.minutes, _this.seconds, _this.counterForTimer,gameID);
        }
    },

    update: function (game) { },

    changeQuestion: function () {
        flagGroup1.destroy();
        if (_this.no11 < 6) {
            count++;
            _this.getQuestion();
        } else {
            //console.log("gameEnd");
            _this.stopVoice();
            _this.state.start('level2');
        }
    },

    amplifyMedia: function (mediaElem, multiplier) {
        var context = new (window.AudioContext || window.webkitAudioContext),
            result = {
                context: context,
                source: context.createMediaElementSource(mediaElem),
                gain: context.createGain(),
                media: mediaElem,
                amplify: function (multiplier) {
                    result.gain.gain.value = multiplier;
                },
                getAmpLevel: function () {
                    return result.gain.gain.value;
                }
            };
        result.source.connect(result.gain);
        result.gain.connect(context.destination);
        result.amplify(multiplier);

        return result;
    },

    Q1_askQ1VoiceQuestion: function (target) {
        console.log('play sound');
        if (_this.speakerbtnClicked == false && _this.rightbtnClicked == false) {
            _this.speakerbtnClicked = true;
            _this.getVoice2();

            _this.time.events.add(2000, function () {
                _this.speakerbtnClicked = false;
                _this.Q1_EnableVoice();
            });
        }
    },

    Q1_EnableVoice: function () {

        console.log("SBtn: " + _this.speakerbtnClicked + " RBtn: " + _this.rightbtnClicked);

        if (_this.speakerbtnClicked == false && _this.rightbtnClicked == false) {
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
            _this.speakerbtnClicked = false;

        }

    },


    //* getvoice is not required since question is combined with the level
    //* ex: "place the highlighted object in -5" will be a single mp3.
    //* it will be taken care in getvoice2 function itself.

    //    getVoice: function () {
    //        console.log("inside get voice");
    //        _this.stopVoice();
    //
    //        _this.genText = document.createElement('audio');
    //        _this.genTextsrc = document.createElement('source');
    //        _this.genTextsrc.setAttribute("src", "questionSounds/NS-INT-1-G6/English/place the highlighted object in.mp3");
    //        _this.genText.appendChild(_this.genTextsrc);
    //        _this.genText.play();
    //
    //        //_this.time.events.add(2500, _this.getVoice2);
    //    },

    getVoice2: function () {

        _this.stopVoice();

        console.log("voice option " + _this.Q1_PosQn);
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        if (_this.Q1_PosQn == 1) {
            _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" + _this.languageSelected + "/pl-1.mp3");

        } else if (_this.Q1_PosQn == 2) {
            _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" + _this.languageSelected + "/pl-2.mp3");

        } else if (_this.Q1_PosQn == 3) {
            _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" + _this.languageSelected + "/pl-3.mp3");

        } else if (_this.Q1_PosQn == 4) {
            _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" + _this.languageSelected + "/pl-4.mp3");

        } else if (_this.Q1_PosQn == 5) {
            _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" + _this.languageSelected + "/pl-5.mp3");

        } else if (_this.Q1_PosQn == 0) {
            _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" + _this.languageSelected + "/zr.mp3");

        } else if (_this.Q1_PosQn == -1) {
            _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" + _this.languageSelected + "/mns-1.mp3");

        } else if (_this.Q1_PosQn == -2) {
            _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" + _this.languageSelected + "/mns-2.mp3");

        } else if (_this.Q1_PosQn == -3) {
            _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" + _this.languageSelected + "/mns-3.mp3");

        } else if (_this.Q1_PosQn == -4) {
            _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" + _this.languageSelected + "/mns-4.mp3");

        } else if (_this.Q1_PosQn == -5) {
            _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" + _this.languageSelected + "/mns-5.mp3");

        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();

        _this.time.events.add(6000, function () {
            _this.Q1_EnableVoice();
        });
    },

    shutdown: function () {
        _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },

    starActions: function () {
        _this.score++;
        _this.celebrationSound.play();
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim = _this.starAnim.animations.add('star');

        // _this.userHasPlayed = 1;
        // _this.game_id = 'NS_INT_1_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Integers";
        // _this.microConcepts = "Number Systems";

        _this.anim.play();

    }, 

    stopAudio: function () {
        if (_this.q1Timer) clearTimeout(_this.q1Timer);
        if (_this.q2Timer) clearTimeout(_this.q2Timer);
        if (_this.demoAudio1timer) clearTimeout(_this.demoAudio1timer);
        
        if (_this.demoAudio1) {
            console.log("removing the audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.q1Sound) {
            console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound.removeEventListener('ended', _this.q1S);
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }

        if (_this.q2Sound) {
            console.log("removing the q2");
            _this.q2Sound.pause();
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }
        _this.skip.events.onInputDown.removeAll();
    },

    DemoVideo: function () {

        _this.clickSound = document.createElement('audio');
        _this.clickSoundsrc = document.createElement('source');
        _this.clickSoundsrc.setAttribute("src", window.baseUrl + "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.screen_opening = document.createElement('audio');
        _this.screen_openingsrc = document.createElement('source');
        _this.screen_openingsrc.setAttribute("src", window.baseUrl + "sounds/screen opening.wav");
        _this.screen_opening.appendChild(_this.screen_openingsrc);

        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" +
            _this.languageSelected + "/Integer demo 1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" +
            _this.languageSelected + "/mns-3.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-2-G6/" +
            _this.languageSelected + "/NS-INT-1B-G6.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.demoVideo_1 = _this.add.video('int_1_1');
        _this.demoVideo_1.addToWorld();

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 490, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.stopAudio();
            if (_this.demoVideo_1)
                _this.demoVideo_1.stop(false);
            if (_this.videoWorld1)
                _this.videoWorld1.destroy();

            if (_this.demoVideo_2)
                _this.demoVideo_2.stop(false);
            if (_this.videoWorld2)
                _this.videoWorld2.destroy();

            if (_this.demoVideo_3)
                _this.demoVideo_3.stop(false);
            if (_this.videoWorld3)
                _this.videoWorld3.destroy();

            _this.game.paused = false;  //* restart the game
        });

    },

    q1S: function () {
        _this.q1Sound.removeEventListener('ended', _this.q1S);
        _this.demoVideo_2.playbackRate = 1;
    },

    showDemoVideo: function () {

        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NS-INT-1-G6_1.mp4");
        _this.videoWorld1 = _this.demoVideo_1.addToWorld();
        _this.video_playing = 1;
        _this.screen_opening.play();  //* sound effect when screen is opening.

        if(_this.languageSelected == 'Odiya')
        {
            _this.demoAudio1timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 27 seconds.
            {
                console.log("inside q2sound.....")
                clearTimeout(_this.demoAudio1timer);         //* clear the time once its used.
                _this.demoAudio1.play();
            }, 1300);
    
        }else
        {
            _this.demoAudio1timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 27 seconds.
            {
                console.log("inside q2sound.....")
                clearTimeout(_this.demoAudio1timer);         //* clear the time once its used.
                _this.demoAudio1.play();
            }, 2000);
        }
      
        _this.demoVideo_2 = _this.add.video('int_1_2');

        _this.demoVideo_1.onComplete.add(function ()    //* on completion of video1, play 2nd video.
        {
            if (_this.demoVideo_1) _this.demoVideo_1.stop(false);

            _this.demoVideo_2.play(false);
            _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/NS-INT-1-G6_2.mp4");
            _this.videoWorld2 = _this.demoVideo_2.addToWorld();
            _this.video_playing = 2;

            _this.skip.bringToTop();                  //* otherwise, they go behind 2nd video
            _this.demoVideo_2.currentTime = 2;  
            if(_this.languageSelected == 'English')
            {
                console.log("English.....")
                _this.q1Sound.play();
            }else
            {
                console.log("odiaaa....");
                _this.q1Timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 27 seconds.
                {
                    console.log("inside q2sound.....")
                    clearTimeout(_this.q1Timer);         //* clear the time once its used.
                    _this.q1Sound.play();
                }, 3000);
            } 
           
            _this.demoVideo_3 = _this.add.video('int_1_3');

            _this.demoVideo_2.onComplete.add(function ()   //* on completion of video2, play 3rd video.
            {
                if (_this.demoVideo_2) _this.demoVideo_2.stop(false);

                _this.demoVideo_3.play(false);
                _this.demoVideo_3.changeSource(window.baseUrl + "assets/demoVideos/NS-INT-1-G6_3.mp4");
                _this.videoWorld3 = _this.demoVideo_3.addToWorld();
                _this.video_playing = 3;

                _this.skip.bringToTop();

                // _this.time.events.add(2000, function () {
                //     _this.q2Sound.play();                    //* play the audio with a small delay.
                // });
                _this.q2Timer = setTimeout(function ()    //* q2 js timer to play q2Timer after 27 seconds.
                {
                    console.log("inside q2sound.....")
                    clearTimeout(_this.q2Timer);         //* clear the time once its used.
                    _this.q2Sound.play();
                }, 2100);

                _this.demoVideo_3.onComplete.add(function ()   //* on completion of video3, go to the game.
                {
                    _this.stopAudio();
                    if (_this.demoVideo_3) _this.demoVideo_3.stop(false);
                    if (_this.videoWorld1) _this.videoWorld1.destroy();
                    if (_this.videoWorld2) _this.videoWorld2.destroy();
                    if (_this.videoWorld3) _this.videoWorld3.destroy();
                    if (_this.demoVideo_1)
                        _this.demoVideo_1.stop(false);

                    if (_this.demoVideo_2)
                        _this.demoVideo_2.stop(false);

                    if (_this.demoVideo_3)
                        _this.demoVideo_3.stop(false);

                    _this.game.paused = false;
                });
            });

        });

    },

}
