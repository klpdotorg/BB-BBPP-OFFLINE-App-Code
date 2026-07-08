Game.NS_INT_2_G6level1 = function () { };

Game.NS_INT_2_G6level1.prototype = {

    init: function (minutes, seconds, counterForTimer,game_id) {
        _this = this;

        //* This game is for integers. 2nd part of previous game. Identify the level
        //* where the object is placed on the ladder.

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

        _this.seconds = seconds;
        _this.minutes = minutes;
        _this.counterForTimer = counterForTimer;
        _this.gameID = game_id;

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

      //  telInitializerbbpp.gameIdInit("NS_INT_1_G6", gradeSelected);

    },

    create: function (game) {

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 3;
        _this.questionid = null;

        _this.amplify = null;


        _this.qArrays;
        _this.count;
        _this.speakerbtn;
        _this.celebration;
        _this.group1;
        _this.group2;
        _this.group3;

        _this.opt = new Array();
        _this.correctans = 0;
        _this.questionNo = 0;

        _this.background;

        _this.rightCount;

        _this.opt1;
        _this.opt2;
        _this.opt3;

        _this.wmusic;
        _this.wrong = true;

        _this.count;
        _this.clickSound;

        _this.starsGroup;

        //        _this.seconds = 0;
        //        _this.minutes = 0;
        //        
        //        _this.counterForTimer = 0;

        // //* this is  for BBplus app 
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.grade;
        // _this.gradeTopics;
        // _this.microConcepts; 
        // _this.score = 3;

        // _this.userHasPlayed = 1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "NS_INT_1_G6";
        // _this.grade = "6";
        // _this.gradeTopics = 'Integers';
         _this.microConcepts = 'Number Systems';

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count = 0;
        _this.count1 = 3;
        _this.celebration = false;

        _this.reset = -1;

        _this.qArrays = new Array();

        _this.qArrays = [1, 2, 3, 4, 5, 6];
        _this.qArrays = _this.shuffle(_this.qArrays);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        _this.Q1_stepplace0 = _this.add.image(100, 230, 'floorarea');
        _this.Q1_stepplace0.scale.setTo(0.13, 2);

        _this.Q1_stepplace1 = _this.add.image(570, 180, 'zn');
        _this.Q1_stepplace2 = _this.add.image(645, 150, 'zn');
        _this.Q1_stepplace3 = _this.add.image(725, 120, 'zn');
        _this.Q1_stepplace4 = _this.add.image(800, 90, 'zn');
        _this.Q1_stepplace5 = _this.add.image(870, 60, 'zn');

        _this.Q1_stepplacem1 = _this.add.image(250, 260, 'zn');
        _this.Q1_stepplacem2 = _this.add.image(320, 290, 'zn');
        _this.Q1_stepplacem3 = _this.add.image(395, 320, 'zn');
        _this.Q1_stepplacem4 = _this.add.image(470, 350, 'zn');
        _this.Q1_stepplacem5 = _this.add.image(540, 380, 'zn');

        _this.background = _this.add.sprite(0, 0, 'topfloor');
        _this.background.name = "topfloor";
        _this.background.frame = 13;
        _this.background.scale.setTo(1, 1);
        //_this.topfloor = _this.background.animations.add('topfloor');
        //_this.background.animations.play('topfloor', 10, false);
        //        _this.screen_opening.play();
        //        _this.time.events.add(1000, function() 
        //            { _this.screen_opening.play();});

        _this.bottomfloor = _this.add.sprite(0, 265, 'bottomfloor');
        _this.bottomfloor.name = "bottomfloor";
        _this.bottomfloor.frame = 1;
        _this.bottomfloor.scale.setTo(1, 1);

        _this.displayNumbers();
        _this.navBar = _this.add.sprite(0, 0, 'navBar');

        _this.navBar.scale.setTo(1, 1);

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

        _this.rightbtnClicked = false;
        _this.wrongbtnClicked = false;
        _this.speakerbtnClicked = false;

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');
        _this.speakerbtn.events.onInputDown.add(function () {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            //_this.clickSound = _this.add.audio('ClickSound');
            //if (_this.speakerbtnClicked == false && _this.rightbtnClicked == false) {
            telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
            _this.speakerbtn.inputEnabled = false;
            _this.speakerbtn.input.useHandCursor = false;
            _this.clickSound.play();
            _this.Q2_askQ2VoiceQuestion();

            _this.time.events.add(2000, function () {
                _this.speakerbtnClicked = false;
                _this.Q2_EnableVoice();

            });
            //}

        }, _this);

        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);

        _this.selectedAns1 = "";
        _this.selectedAns2 = "";

        _this.firstQOption_index = -1;
        _this.firstQPos_index = 0;

        _this.rightAns;
        _this.repeat1 = 1;

        _this.getQuestion();

    },

    displayNumbers: function () {
        _this.Numbr_1 = _this.add.image(580, 220, 'Numbr_1');
        _this.Numbr_2 = _this.add.image(640, 190, 'Numbr_2');
        _this.Numbr_3 = _this.add.image(720, 160, 'Numbr_3');
        _this.Numbr_4 = _this.add.image(800, 130, 'Numbr_4');
        _this.Numbr_5 = _this.add.image(870, 100, 'Numbr_5');
        _this.Numbr_0 = _this.add.image(155, 280, 'Numbr_0');

        _this.Numbr_m1 = _this.add.image(260, 305, 'Numbr_-1');
        _this.Numbr_m2 = _this.add.image(320, 335, 'Numbr_-2');
        _this.Numbr_m3 = _this.add.image(390, 365, 'Numbr_-3');
        _this.Numbr_m4 = _this.add.image(470, 395, 'Numbr_-4');
        _this.Numbr_m5 = _this.add.image(550, 425, 'Numbr_-5');

    },

    updateTimer:function() 
    {
        _this.counterForTimer++;
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            
            if(_this.minutes<10){
                _this.minutes =  _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes =  _this.minutes+1;
            }
        }
        else
        {
            if (_this.counterForTimer < 10)        
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
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
       // _this.sceneCount++;
        _this.bottomfloor.frame = 0;
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

        //_this.speakerbtn.inputEnabled = true;
        //_this.speakerbtn.input.useHandCursor = true;

        //_this.gotoFirstQuestion();

        _this.Q1_OptionsArray = [1, 2, 3, 4, 5];
        _this.Q1_OptionsArray = _this.shuffle(_this.Q1_OptionsArray);

        _this.Q1_PosArray = [0, 1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
        _this.Q1_PosArray = _this.shuffle(_this.Q1_PosArray);

        _this.questionid = 1;

        _this.qArrays[_this.no11] = 1;

        _this.gotoFirstQuestion();
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
        _this.sceneCount++;
        _this.Q1stars1 = _this.add.sprite(390, 10, 'starAnim');//_this.world.centerX-20
        _this.Q1stars1.frame = 35;
        _this.Q1stars2 = _this.add.sprite(420, 10, 'starAnim');//_this.world.centerX-20
        _this.Q1stars2.frame = 35;
        _this.Q1stars3 = _this.add.sprite(450, 10, 'starAnim');//_this.world.centerX-20
        _this.Q1stars3.frame = 35;

        _this.Q2_EnableVoice();

        _this.firstQOption_index += 1;
        _this.firstQPos_index += 1;

        if (_this.firstQOption_index > 4) {

            _this.Q1_OptionsArray = _this.shuffle(_this.Q1_OptionsArray);
            _this.firstQOption_index = 0;
        }

        _this.Q1_Option = _this.Q1_OptionsArray[_this.firstQOption_index];

        if (_this.firstQPos_index > 10) {

            _this.Q1_PosArray = _this.shuffle(_this.Q1_PosArray);
            _this.firstQPos_index = 0;
        }

        _this.Q1_PosQn = _this.Q1_PosArray[_this.firstQPos_index];

        _this.Q2_addNumberPad();

        _this.Q2_QnOptions();

    },

    Q2_QnOptions: function () {

        //console.log('inside qn1 option ' + _this.Q1_Option);
        _this.Q2_askQ2VoiceQuestion(_this.Q1_Option);
        //console.log('xy decided' + _this.Q1_Option);
        switch (_this.Q1_PosQn) {

            case -1:
                switch (_this.Q1_Option) {
                    case 1:
                        _this.positionX = 253;
                        _this.positionY = 261;
                        break;
                    case 2:
                        _this.positionX = 253;
                        _this.positionY = 264;
                        break;
                    case 3:
                        _this.positionX = 253;
                        _this.positionY = 263;
                        break;
                    case 4:
                        _this.positionX = 258;
                        _this.positionY = 264;
                        break;
                    case 5:
                        _this.positionX = 253;
                        _this.positionY = 265;
                        break;
                }
                _this.bottomfloor.frame = 1;
                break;
            case -2:
                switch (_this.Q1_Option) {
                    case 1:
                        _this.positionX = 320;
                        _this.positionY = 293;
                        break;
                    case 2:
                        _this.positionX = 320;
                        _this.positionY = 295;
                        break;
                    case 3:
                        _this.positionX = 320;
                        _this.positionY = 295;
                        break;
                    case 4:
                        _this.positionX = 325;
                        _this.positionY = 295;
                        break;
                    case 5:
                        _this.positionX = 320;
                        _this.positionY = 295;
                        break;
                }
                _this.bottomfloor.frame = 1;
                break;
            case -3:
                switch (_this.Q1_Option) {
                    case 1:
                        _this.positionX = 395;
                        _this.positionY = 322;
                        break;
                    case 2:
                        _this.positionX = 395;
                        _this.positionY = 325;
                        break;
                    case 3:
                        _this.positionX = 395;
                        _this.positionY = 325;
                        break;
                    case 4:
                        _this.positionX = 400;
                        _this.positionY = 325;
                        break;
                    case 5:
                        _this.positionX = 395;
                        _this.positionY = 325;
                        break;
                }
                _this.bottomfloor.frame = 1;
                break;
            case -4:
                switch (_this.Q1_Option) {
                    case 1:
                        _this.positionX = 470;
                        _this.positionY = 353;
                        break;
                    case 2:
                        _this.positionX = 470;
                        _this.positionY = 355;
                        break;
                    case 3:
                        _this.positionX = 470;
                        _this.positionY = 355;
                        break;
                    case 4:
                        _this.positionX = 475;
                        _this.positionY = 355;
                        break;
                    case 5:
                        _this.positionX = 470;
                        _this.positionY = 355;
                        break;
                }
                _this.bottomfloor.frame = 1;
                break;
            case -5:
                switch (_this.Q1_Option) {
                    case 1:
                        _this.positionX = 540;
                        _this.positionY = 383;
                        break;
                    case 2:
                        _this.positionX = 540;
                        _this.positionY = 385;
                        break;
                    case 3:
                        _this.positionX = 540;
                        _this.positionY = 385;
                        break;
                    case 4:
                        _this.positionX = 550;
                        _this.positionY = 385;
                        break;
                    case 5:
                        _this.positionX = 540;
                        _this.positionY = 383;
                        break;
                }
                _this.bottomfloor.frame = 1;
                break;
            case 0:
                switch (_this.Q1_Option) {
                    case 1:
                        _this.positionX = 150;
                        _this.positionY = 228;
                        break;
                    case 2:
                        _this.positionX = 150;
                        _this.positionY = 230;
                        break;
                    case 3:
                        _this.positionX = 150;
                        _this.positionY = 230;
                        break;
                    case 4:
                        _this.positionX = 155;
                        _this.positionY = 230;
                        break;
                    case 5:
                        _this.positionX = 150;
                        _this.positionY = 230;
                        break;
                }
                break;
            case 1:
                switch (_this.Q1_Option) {
                    case 1:
                        _this.positionX = 570;
                        _this.positionY = 181;
                        break;
                    case 2:
                        _this.positionX = 570;
                        _this.positionY = 183;
                        break;
                    case 3:
                        _this.positionX = 570;
                        _this.positionY = 183;
                        break;
                    case 4:
                        _this.positionX = 575;
                        _this.positionY = 183;
                        break;
                    case 5:
                        _this.positionX = 570;
                        _this.positionY = 183;
                        break;
                }
                break;
            case 2:
                switch (_this.Q1_Option) {
                    case 1:
                        _this.positionX = 645;
                        _this.positionY = 151;
                        break;
                    case 2:
                        _this.positionX = 645;
                        _this.positionY = 155;
                        break;
                    case 3:
                        _this.positionX = 645;
                        _this.positionY = 155;
                        break;
                    case 4:
                        _this.positionX = 650;
                        _this.positionY = 155;
                        break;
                    case 5:
                        _this.positionX = 645;
                        _this.positionY = 155;
                        break;
                }
                break;
            case 3:
                switch (_this.Q1_Option) {
                    case 1:
                        _this.positionX = 725;
                        _this.positionY = 121;
                        break;
                    case 2:
                        _this.positionX = 725;
                        _this.positionY = 123;
                        break;
                    case 3:
                        _this.positionX = 725;
                        _this.positionY = 123;
                        break;
                    case 4:
                        _this.positionX = 730;
                        _this.positionY = 123;
                        break;
                    case 5:
                        _this.positionX = 725;
                        _this.positionY = 123;
                        break;
                }
                break;
            case 4:
                switch (_this.Q1_Option) {
                    case 1:
                        _this.positionX = 800;
                        _this.positionY = 90;
                        break;
                    case 2:
                        _this.positionX = 800;
                        _this.positionY = 93;
                        break;
                    case 3:
                        _this.positionX = 800;
                        _this.positionY = 93;
                        break;
                    case 4:
                        _this.positionX = 805;
                        _this.positionY = 93;
                        break;
                    case 5:
                        _this.positionX = 800;
                        _this.positionY = 93;
                        break;
                }
                break;
            case 5:
                switch (_this.Q1_Option) {
                    case 1:
                        _this.positionX = 870;
                        _this.positionY = 60;
                        break;
                    case 2:
                        _this.positionX = 870;
                        _this.positionY = 63;
                        break;
                    case 3:
                        _this.positionX = 870;
                        _this.positionY = 63;
                        break;
                    case 4:
                        _this.positionX = 875;
                        _this.positionY = 63;
                        break;
                    case 5:
                        _this.positionX = 870;
                        _this.positionY = 63;
                        break;
                }
                break;
        }

        if (_this.Q1_Option == 1) {
            _this.ballanim = _this.add.sprite(_this.positionX, _this.positionY, 'ballanim');
            _this.ballanim.name = "ballanim";
            _this.ballanim.scale.setTo(1, 1);
            _this.ballanim1 = _this.ballanim.animations.add('ballanim');
            //_this.objGroup.add(_this.ballanim);
        } else if (_this.Q1_Option == 2) {
            _this.catanim = _this.add.sprite(_this.positionX, _this.positionY, 'catanim');
            _this.catanim.name = "catanim";
            _this.catanim.scale.setTo(1, 1);
            _this.catanim1 = _this.catanim.animations.add('catanim');
            //_this.objGroup.add(_this.catanim);
        } else if (_this.Q1_Option == 3) {
            _this.doganim = _this.add.sprite(_this.positionX, _this.positionY, 'doganim');
            _this.doganim.name = "doganim";
            _this.doganim.scale.setTo(1, 1);
            _this.doganim1 = _this.doganim.animations.add('doganim');
            //_this.objGroup.add(_this.doganim);
        } else if (_this.Q1_Option == 4) {
            _this.positionY -= 7;
            _this.rabbitanim = _this.add.sprite(_this.positionX, _this.positionY, 'rabbitanim');
            _this.rabbitanim.name = "rabbitanim";
            _this.rabbitanim.scale.setTo(1, 1);
            _this.rabbitanim1 = _this.rabbitanim.animations.add('rabbitanim');
            //_this.objGroup.add(_this.rabbitanim);
        } else if (_this.Q1_Option == 5) {
            _this.clothanim = _this.add.sprite(_this.positionX, _this.positionY, 'clothanim');
            _this.clothanim.name = "clothanim";
            _this.clothanim.scale.setTo(1, 1);
            _this.clothanim1 = _this.clothanim.animations.add('clothanim');
            //_this.objGroup.add(_this.clothanim);
        }

        //console.log('xy end');

    },

    Q2_addNumberPad: function () {

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
            _this.numbg.name = i;
            _this.numbg.frame = i;

            //_this.numTxt = _this.add.text(-2,1);
            //_this.numTxt.anchor.setTo(0.5);
            //_this.numTxt.align = 'center';
            //_this.numTxt.font = 'Alte Haas Grotesk';
            //_this.numTxt.fontSize = 24;
            //_this.numTxt.fill = '#FFFFFF';

            //_this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);

            //_this.numbg.addChild(_this.numTxt);

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.Q2_numClicked, _this);

            _this.x += 63;
        }

        _this.minusbtn = _this.numGroup.create(_this.x, 552, 'Numberpad');
        _this.minusbtn.frame = 10;
        _this.minusbtn.anchor.setTo(0.5);
        _this.minusbtn.scale.setTo(0.8, 0.8);
        _this.minusbtn.inputEnabled = true;
        _this.minusbtn.name = "-";
        _this.minusbtn.input.useHandCursor = true;
        _this.minusbtn.events.onInputDown.add(_this.Q2_signbtnClicked, _this);

        _this.plusbtn = _this.numGroup.create(_this.x + 63, 552, 'Numberpad');
        _this.plusbtn.frame = 11;
        _this.plusbtn.anchor.setTo(0.5);
        _this.plusbtn.scale.setTo(0.8, 0.8);
        _this.plusbtn.inputEnabled = true;
        _this.plusbtn.name = "+";

        _this.plusbtn.input.useHandCursor = true;
        _this.plusbtn.events.onInputDown.add(_this.Q2_signbtnClicked, _this);

        _this.wrongbtn = _this.numGroup.create(_this.x + 126, 552, 'Numberpad');
        _this.wrongbtn.frame = 12;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.8, 0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.Q2_wrongbtnClicked, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 189, 552, 'Numberpad');
        _this.rightbtn.frame = 13;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.8, 0.8);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.Q2_rightbtnClicked, _this);

        _this.ScreenTextBox = _this.add.sprite(840, 490, 'ScreenTextBox');
        _this.ScreenTextBox.anchor.setTo(0.5);
        _this.ScreenTextBox.visible = true;
        _this.ScreenTextBox.scale.set(0.6, 0.8);
        _this.ScreenTextBox.visible = false;
        _this.ScreenTextBox.inputEnabled = true;
        _this.ScreenTextBox.frame = 0;

        _this.enterTxt = _this.add.text(0, 0, "");
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.scale.setTo(1.3, 1.3);
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = 'Akzidenz-Grotesk BQ';
        _this.enterTxt.fontSize = 40;
        _this.enterTxt.fontWeight = 250;
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.setShadow(0, 0, 'Level43A_rgba(0, 0, 0, 0)', 0);
        _this.ScreenTextBox.addChild(_this.enterTxt);

        _this.objGroup.add(_this.ScreenTextBox);

        _this.numpadTween = _this.add.tween(_this.numGroup);

        _this.ScreenTextTween = _this.add.tween(_this.ScreenTextBox);

        //tween in the number pad after a second.
        _this.time.events.add(1000, _this.Q2_tweenNumPad);
        //after 2 seconds, show the screen text box as enabled
        _this.time.events.add(2000, _this.Q2_enableScreenText);
    },

    Q2_tweenNumPad: function () {
        //console.log('tweening');
        // now set the number pad visible and tween it to correct position on screen.
        _this.numGroup.visible = true;
        _this.numpadTween.to({
            x: 0,
            y: -43
        }, 1000, 'Linear', true, 0);

        _this.ScreenTextBox.visible = true;
        _this.ScreenTextTween.to({
            x: 840,
            y: 430
        }, 1000, 'Linear', true, 0);

    },

    Q2_enableScreenText: function () {
        _this.ScreenTextBox.frame = 1;
    },

    Q2_numClicked: function (target) {

        _this.clickSound.play();
        _this.selectedAns1 = target.name;
        _this.enterTxt.text = "" + _this.selectedAns2 + _this.selectedAns1;

    },

    Q2_signbtnClicked: function (target) {

        _this.clickSound.play();
        _this.selectedAns2 = target.name;
        _this.enterTxt.text = "" + _this.selectedAns2 + _this.selectedAns1;

    },

    Q2_wrongbtnClicked: function (target) {

        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.enterTxt.text = "";
    },

    Q2_rightbtnClicked: function (target) {

        //target.frame=1;

        _this.correct_answer = true;

        _this.speakerbtn.inputEnabled = false;
        _this.speakerbtn.input.useHandCursor = false;

        target.events.onInputDown.removeAll();
        _this.wrongbtn.events.onInputDown.removeAll();
        _this.correct_answer = this.Q2_validateAnswer();
        _this.Q2_showanswerActions(_this.correct_answer);

        // add delay of 3.5 seconds before calling clear objects. option 2, takes time to complete the tween for celebration (KF eating fish)
        if (_this.correct_answer) {

            /*if (_this.Q1_PosQn == -1) {
            _this.bottomfloor.frame = 1;
            } else if (_this.Q1_PosQn == -2) {
            _this.bottomfloor.frame = 1;
            } else if (_this.Q1_PosQn == -3) {
            _this.bottomfloor.frame = 1;
            } else if (_this.Q1_PosQn == -4) {
            _this.bottomfloor.frame = 1;
            } else if (_this.Q1_PosQn == -5) {
            _this.bottomfloor.frame = 1;
            }*/
        } else {
            target.events.onInputDown.add(_this.Q2_rightbtnClicked, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q2_wrongbtnClicked, _this);
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
            _this.Q2_EnableVoice();

        }

    },

    Q2_showanswerActions: function (correct_answer) {

        _this.noofAttempts++;
        if (correct_answer == true) {
           

            _this.starActions();
            _this.time.events.add(500, function () { _this.Q2_objectCelebrations(1) });
            _this.time.events.add(1500, function () { _this.Q2_objectCelebrations(2) });
            _this.time.events.add(3500, _this.Q2_gotonext);

            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
        } else {
            _this.wrongSound.play();

            _this.selectedAns1 = "";
            _this.selectedAns2 = "";
            _this.enterTxt.text = "";
        }
    },

    Q2_objectCelebrations: function (First_or_Second) {

        if (_this.Q1_Option == 1) {
            _this.ballanim.animations.play('ballanim', 60, false);

            //* in case of ball, do the animation only once since it already has two bounces.
            if (First_or_Second == 1) {
                _this.ball_bouncing = document.createElement('audio');
                _this.ball_bouncingsrc = document.createElement('source');
                _this.ball_bouncingsrc.setAttribute("src", window.baseUrl + "sounds/ball_bouncing_falling.wav");
                _this.ball_bouncing.appendChild(_this.ball_bouncingsrc);
                _this.ball_bouncing.play();
            }
        } else if (_this.Q1_Option == 2) {
            _this.catanim.animations.play('catanim', 60, false);

            _this.cat_whinning = document.createElement('audio');
            _this.cat_whinningsrc = document.createElement('source');
            _this.cat_whinningsrc.setAttribute("src", window.baseUrl + "sounds/cat_whinning.wav");
            _this.cat_whinning.appendChild(_this.cat_whinningsrc);
            _this.cat_whinning.play();
        } else if (_this.Q1_Option == 3) {
            _this.doganim.animations.play('doganim', 60, false);

            _this.dog_barking = document.createElement('audio');
            _this.dog_barkingsrc = document.createElement('source');
            _this.dog_barkingsrc.setAttribute("src", window.baseUrl + "sounds/dog_barking.wav");
            _this.dog_barking.appendChild(_this.dog_barkingsrc);
            _this.dog_barking.play();
        } else if (_this.Q1_Option == 4) {
            _this.rabbitanim.animations.play('rabbitanim', 60, false);

            _this.rabbit_squeaking = document.createElement('audio');
            _this.rabbit_squeakingsrc = document.createElement('source');
            _this.rabbit_squeakingsrc.setAttribute("src", window.baseUrl + "sounds/rabbit_squeaking.mp3");
            _this.rabbit_squeaking.appendChild(_this.rabbit_squeakingsrc);
            _this.rabbit_squeaking.play();
        } else if (_this.Q1_Option == 5) {
            _this.clothanim.animations.play('clothanim', 60, false);

            _this.cloth_blowing = document.createElement('audio');
            _this.cloth_blowingsrc = document.createElement('source');
            _this.cloth_blowingsrc.setAttribute("src", window.baseUrl + "sounds/cloth_blowing.mp3");
            _this.cloth_blowing.appendChild(_this.cloth_blowingsrc);
            _this.cloth_blowing.play();
        }
    },


    Q2_validateAnswer: function () {


        //if zero is selected, ignore the sign by making it blank. applicable only for option 1 since only there +0,-0 and 0 answer is possible
        _this.checkSign = "+";

        // if level 0, if a zero selected with + or -, then return false since zero should not come with a sign.
        if (_this.selectedAns1 == "0" && _this.Q1_PosQn == 0 && (_this.selectedAns2 == '+' || _this.selectedAns2 == '-')) {
            return false;

        }

        _this.combinedAnswer = "" + _this.selectedAns2 + _this.selectedAns1;

        if (_this.Q1_PosQn == 0) {
            //only in this option check sign is used to compare which is set to blank if zero answer. also compare without sign in case user has not entered sign.
            if (("" + _this.combinedAnswer == "+" + _this.Q1_PosQn) || ("" + _this.combinedAnswer == "" + _this.Q1_PosQn)) {

                return true;
            } else {
                return false;
            }
        } else if (_this.Q1_PosQn > 0) {
            // compare given combined answer with signed level or without sign level. for +ve number, both with + and without + are the same.
            if (("" + _this.combinedAnswer == "+" + _this.Q1_PosQn) || ("" + _this.combinedAnswer == "" + _this.Q1_PosQn)) {
                return true;
            } else {
                return false;
            }
        } else if (_this.Q1_PosQn < 0) {
            //fishlevel already has a sign, so need to include sign while comparing
            if ("" + _this.combinedAnswer == "" + _this.Q1_PosQn) {
                return true;
            } else {
                return false;
            }
        }


    },

    Q2_eraseClicked: function (target) {

        console.log("going inside wrong btn");
        _this.clickSound.play();
        _this.Q2_eraseScreen();


    },

    Q2_eraseScreen: function () {

        _this.clickSound.play();
        console.log('inside erase fn');
        console.log('item' + _this.Q1_Option);
        console.log('position' + _this.Q1_PosQn);
        if (_this.Q1_Option == 1) {
            _this.ballanim.destroy();
        } else if (_this.Q1_Option == 2) {
            _this.catanim.destroy();
        } else if (_this.Q1_Option == 3) {
            _this.doganim.destroy();

        } else if (_this.Q1_Option == 4) {
            _this.rabbitanim.destroy();

        } else if (_this.Q1_Option == 5) {
            _this.clothanim.destroy();

        }

        if (_this.Q1_PosQn == -1) {
            _this.bottomfloor.frame = 0;
        } else if (_this.Q1_PosQn == -2) {
            _this.bottomfloor.frame = 0;
        } else if (_this.Q1_PosQn == -3) {
            _this.bottomfloor.frame = 0;
        } else if (_this.Q1_PosQn == -4) {
            _this.bottomfloor.frame = 0;
        } else if (_this.Q1_PosQn == -5) {
            _this.bottomfloor.frame = 0;
        }

    },

    Q2_clearObject: function () {

    
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        console.log('inside clearObject');
        //_this.Q1_destroyObjects();
        if (_this.Q1_Option == 1) {
            //console.log('clear ball');
            _this.ballanim1 = _this.add.tween(_this.ballanim).to({
                alpha: 0
            }, 500, 'Linear', true, 0);
            _this.ballanim1.onComplete.add(_this.Q2_destroyObjects);
            //_this.KFsitting.destroy();
            //_this.Q4_destroyObjects;

        } else if (_this.Q1_Option == 2) {

            _this.catanim2 = _this.add.tween(_this.catanim).to({
                alpha: 0
            }, 500, 'Linear', true, 0);
            _this.catanim2.onComplete.add(_this.Q2_destroyObjects);

        } else if (_this.Q1_Option == 3) {

            _this.doganim2 = _this.add.tween(_this.doganim).to({
                alpha: 0
            }, 500, 'Linear', true, 0);
            _this.doganim2.onComplete.add(_this.Q2_destroyObjects);

        } else if (_this.Q1_Option == 4) {

            _this.rabbitanim2 = _this.add.tween(_this.rabbitanim).to({
                alpha: 0
            }, 500, 'Linear', true, 0);
            _this.rabbitanim2.onComplete.add(_this.Q2_destroyObjects);

        } else if (_this.Q1_Option == 5) {

            _this.clothanim2 = _this.add.tween(_this.clothanim).to({
                alpha: 0
            }, 500, 'Linear', true, 0);
            _this.clothanim2.onComplete.add(_this.Q2_destroyObjects);

        }

    },

    Q2_destroyObjects: function () {

        _this.objGroup.destroy();
        _this.numGroup.destroy();

        //_this.Q4_clearObject();
        _this.count1++;

        if (_this.Q1_PosQn == -1) {
            _this.bottomfloor.frame = 0;
        } else if (_this.Q1_PosQn == -2) {
            _this.bottomfloor.frame = 0;
        } else if (_this.Q1_PosQn == -3) {
            _this.bottomfloor.frame = 0;
        } else if (_this.Q1_PosQn == -4) {
            _this.bottomfloor.frame = 0;
        } else if (_this.Q1_PosQn == -5) {
            _this.bottomfloor.frame = 0;
        }

        // _this.Fish_place.visible = true;
        // _this.KF_place.visible = true;
        // _this.KFsitting.visible = true;
        _this.reset = -1;
        _this.Q2_EnableVoice();
        console.log("destroyed");
        _this.gotoFirstQuestion();


    },

    Q2_gotonext: function () {
        //console.log('inside goto next ');
        if (_this.repeat1 < 3) {
            _this.repeat1++;
            _this.selectedAns1 = "";
            _this.selectedAns2 = "";
            _this.enterTxt.text = "";
            _this.Q2_clearObject();
        } else {
            console.log("in the else clause: " + _this.repeat1);
            _this.timer1.stop();
            _this.timer1 = null;

            //* make the block which shows the menu visible now to show the html menu again.
            //* it is suppresed to display=none in boot.js while calling the game.
            //* give a small delay since this backbutton is right on top of home button on the menu.
            //* if back button is pressed for little longer, it takes as home button as pressed also.
            _this.time.events.add(50, function () {
                //* transition to score. Score App version will show score menu - home/replay/next.
                //* Score Diksha version will end the session and show the score.
                //* appropriate version of the score should be present in commonjsfiles folder.
                //_this.state.start('score');
                _this.state.start('score', true, false,_this.gameID,_this.microConcepts);
            });
        }
    },

    update: function (game) { },

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

    Q2_askQ2VoiceQuestion: function (target) {

        if (_this.speakerbtnClicked == false && _this.rightbtnClicked == false) {
            _this.speakerbtnClicked = true;
            _this.Q2_askVoiceQuestionProcess();

            _this.time.events.add(4000, function () {
                _this.speakerbtnClicked = false;
                _this.Q2_EnableVoice();
            });
        }
        //console.log('play sound'+_this.speakerbtnClicked+_this.rightbtnClicked);
    },

    Q2_EnableVoice: function () {


        if (_this.speakerbtnClicked == false && _this.rightbtnClicked == false) {
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
            _this.speakerbtnClicked = false;

        }

    },

    Q2_askVoiceQuestionProcess: function () {
        //console.log("getVoice");
        //_this.getVoice();             //* commented this. it is not required. getvoice2 will handle this.
        //console.log("getVoice2");
        _this.getVoice2();  //* call voice2 directly
    },

    //* not required. One sound file for all levels/objects is sufficient.
    //    getVoice: function () {
    //
    //        _this.genText = document.createElement('audio');
    //        _this.genTextsrc = document.createElement('source');
    //        _this.genTextsrc.setAttribute("src", "questionSounds/NS-INT-2-G6/English/which level is the.mp3");
    //        _this.genText.appendChild(_this.genTextsrc);
    //        _this.genText.play();
    //    },

    getVoice2: function () {

        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-2-G6/" + _this.languageSelected + "/NS-INT-1B-G6.mp3");

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();

        _this.time.events.add(4000, function () {
            _this.Q2_EnableVoice();
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
        // _this.game_id='NS_INT_1_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Integers";
        // _this.microConcepts = "Number Systems";
        _this.anim.play();

    },

}
