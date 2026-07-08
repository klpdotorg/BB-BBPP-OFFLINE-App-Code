Game.NS_INT_3_G6level1 = function () { };


Game.NS_INT_3_G6level1.prototype = {

    init: function (game) {
        console.log("inside level....................");
        _this = this;

        //* This game is for integers. Identify the level of bird or fish as asked. 3 questions asked.

        //telInitializerbbpp.gameIdInit("sequence2_1_1a",gradeSelected);

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

        _this.clickSound = document.createElement('audio');
        _this.clickSoundsrc = document.createElement('source');
        _this.clickSoundsrc.autoplay = false;
        _this.clickSoundsrc.setAttribute("src", window.baseUrl + "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.celebrationSound = document.createElement('audio');
        _this.celebrationSoundsrc = document.createElement('source');
        _this.celebrationSoundsrc.autoplay = false;
        _this.celebrationSoundsrc.setAttribute("src", window.baseUrl + "sounds/celebration.mp3");

        _this.celebrationSound.appendChild(_this.celebrationSoundsrc);

        _this.wrongSound = document.createElement('audio');
        _this.wrongSoundsrc = document.createElement('source');
        _this.wrongSoundsrc.autoplay = false;
        _this.wrongSoundsrc.setAttribute("src", window.baseUrl + "sounds/WrongCelebrationSound.mp3");

        _this.wrongSound.appendChild(_this.wrongSoundsrc);

        _this.birdchirp = document.createElement('audio');
        _this.birdchirpSrc = document.createElement('source');
        _this.birdchirpSrc.autoplay = false;
        _this.birdchirpSrc.setAttribute("src", window.baseUrl + "sounds/birdschirping.mp3");

        //_this.amplify1 = this.amplifyMedia(_this.birdchirp, 0.25);
        _this.birdchirp.appendChild(_this.birdchirpSrc);
        _this.birdchirp.volume = 0.3;

        _this.KFcalls = document.createElement('audio');
        _this.KFcallsSrc = document.createElement('source');
        _this.KFcallsSrc.autoplay = false;
        _this.KFcallsSrc.setAttribute("src", window.baseUrl + "sounds/KFcalls.mp3");

        //_this.amplify2 = this.amplifyMedia(_this.KFcalls, 0.2);
        _this.KFcalls.appendChild(_this.KFcallsSrc);
        _this.KFcalls.volume = 0.6;

        _this.Watersplash = document.createElement('audio');
        _this.WatersplashSrc = document.createElement('source');
        _this.WatersplashSrc.setAttribute("src", window.baseUrl + "sounds/watersplash.mp3");
        _this.WatersplashSrc.autoplay = false;
        _this.Watersplash.appendChild(_this.WatersplashSrc);


        //* where is the bird
        _this.playQuestionSound_1 = document.createElement('audio');
        _this.src_1 = document.createElement('source');
        _this.src_1.autoplay = false;
        _this.src_1.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-3-G6/" + _this.languageSelected + "/NS-INT-2A-G6-b.mp3");

        //_this.amplify3 = this.amplifyMedia(_this.playQuestionSound_1, 3);
        _this.playQuestionSound_1.appendChild(_this.src_1);

        _this.Waterbubble = document.createElement('audio');
        _this.WaterbubbleSrc = document.createElement('source');
        _this.WaterbubbleSrc.autoplay = false;
        _this.WaterbubbleSrc.setAttribute("src", window.baseUrl + "sounds/WaterBubbling.mp3");

        _this.Waterbubble.appendChild(_this.WaterbubbleSrc);
        _this.Waterbubble.volume = 0.3;

        _this.Waterbubble1 = document.createElement('audio');
        _this.Waterbubble1Src = document.createElement('source');
        _this.Waterbubble1Src.autoplay = false;
        _this.Waterbubble1Src.setAttribute("src", window.baseUrl + "sounds/WaterBubbling1.mp3");

        _this.Waterbubble1.appendChild(_this.Waterbubble1Src);
        _this.Waterbubble1.volume = 0.3;

        //* where is the fish
        _this.playQuestionSound_2 = document.createElement('audio');
        _this.src_2 = document.createElement('source');
        _this.src_2.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-3-G6/" + _this.languageSelected + "/NS-INT-2A-G6-a.mp3");
        _this.src_2.autoplay = false;
        //_this.amplify4 = this.amplifyMedia(_this.playQuestionSound_2, 3);
        _this.playQuestionSound_2.appendChild(_this.src_2);


        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        telInitializerbbpp.gameIdInit("NS_INT_3_G6", gradeSelected);
        console.log(gameID, "gameID...");

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

        _this.count;
        _this.speakerbtn;
        _this.celebration;
        _this.group1;
        _this.group2;
        _this.group3;

        _this.objGroup = _this.add.group();

        _this.opt = new Array();
        _this.correctans = 0;
        _this.questionNo = 0;

        _this.background;
        _this.transparent;
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
        _this.backgrd1;
        _this.backgrd2;
        _this.backgrd3;

        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;

        // //* BB plus variables
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
        // _this.microConcepts;
        // _this.grade;

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count = 0;
        _this.count1 = 0;
        _this.celebration = false;

        // 4 index used to point to the 3 level arrays+ options array. We will shuffle these arrays and ask questions to make it unique and random.
        _this.birdsittinglevel_index = 0;
        _this.birdhoveringlevel_index = 0;
        _this.fishlevel_index = 0;
        _this.thirdQOption_index = 0;

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();


        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'Q3_bg');
        _this.background.scale.setTo(1, 1);

        _this.navBar = _this.add.sprite(0, 0, 'navBar');
        _this.navBar.scale.setTo(1, 1);

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.stopQuestionVoice();
            _this.stopOtherVoice();
            _this.time.events.removeAll();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50, function () {
                _this.state.start('grade6NumberSystems', true, false);
            });
        });

        _this.speakerbtn = _this.add.sprite(600, 6, 'CommonSpeakerBtn');
        _this.speakerbtn.events.onInputDown.add(function () {
            //telInitializerbbpp.tele_interactEvent("TOUCH","speaker");
            _this.clickSound.play();
            _this.Q3_askQ3VoiceQuestion();
        });


        //_this.scale = _this.add.image(920,40,'level_scale');
        // _this.scale.scale.setTo(1,1);

        _this.timebg = _this.add.sprite(305, 6, 'timebg');
        _this.timeDisplay = _this.add.text(330, 22, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';

        /* _this.ScreenTextBox = _this.add.sprite(840,430,'ScreenTextBox');
         _this.ScreenTextBox.anchor.setTo(0.5);
         _this.ScreenTextBox.visible=true;
         _this.ScreenTextBox.scale.set(0.5);*/

        _this.Bubbles = _this.add.sprite(100, 400, 'Bubbles');
        _this.Bubbles.name = "Bubbling";
        _this.Bubbles.anchor.setTo(0.5);
        _this.Bubbles.scale.setTo(1, 1);
        _this.Bubbling = _this.Bubbles.animations.add('Bubbles');
        _this.Bubbles.animations.play('Bubbles', 20, true);

        _this.Bubbles1 = _this.add.sprite(300, 450, 'Bubbles');
        _this.Bubbles1.name = "Bubbling";
        _this.Bubbles1.anchor.setTo(0.5);
        _this.Bubbles1.scale.setTo(1.5, 1.5);
        _this.Bubbling1 = _this.Bubbles1.animations.add('Bubbles');
        _this.Bubbles1.animations.play('Bubbles', 10, true);

        _this.Bubbles2 = _this.add.sprite(450, 450, 'Bubbles');
        _this.Bubbles2.name = "Bubbling";
        _this.Bubbles2.anchor.setTo(0.5);
        _this.Bubbles2.scale.setTo(0.8, 0.8);
        _this.Bubbling2 = _this.Bubbles2.animations.add('Bubbles');
        _this.Bubbles2.animations.play('Bubbles', 15, true);

        _this.Bubbles3 = _this.add.sprite(750, 400, 'Bubbles');
        _this.Bubbles3.name = "Bubbling";
        _this.Bubbles3.anchor.setTo(0.5);
        _this.Bubbles3.scale.setTo(0.5, 0.5);
        _this.Bubbling3 = _this.Bubbles3.animations.add('Bubbles');
        _this.Bubbles3.animations.play('Bubbles', 25, true);

        _this.PLUSFIVE_LEVEL_Y = 45;
        _this.PLUSFOUR_LEVEL_Y = 80;
        _this.PLUSTHREE_LEVEL_Y = 120;
        _this.PLUSTWO_LEVEL_Y = 160;
        _this.PLUSONE_LEVEL_Y = 200;
        _this.PLUSZERO_LEVEL_Y = 240;

        _this.MINUSONE_LEVEL_Y = 295;
        _this.MINUSTWO_LEVEL_Y = 335;
        _this.MINUSTHREE_LEVEL_Y = 375;
        _this.MINUSFOUR_LEVEL_Y = 410;
        _this.MINUSFIVE_LEVEL_Y = 450;

        _this.generateStarsForTheScene(6);
        _this.getQuestion();

        _this.selectedAns1 = "";
        _this.selectedAns2 = "";


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


        //play bird chirping sound while loading the game.


        var playPromise1 = _this.birdchirp.play();

        var playPromise2 = _this.Waterbubble.play();

        _this.Waterbubble.addEventListener('ended', function () {
            _this.Waterbubble.currentTime = 0;
            _this.Waterbubble.play();
            _this.Waterbubble1.play();
        }, false);


        //bird is sitting initially on screen on 450, 205. 
        _this.KF_initialsitting = _this.add.image(450, 205, 'kingfisher_sitting');
        _this.KF_initialsitting.scale.setTo(1, 1);

        _this.initialTween2 = _this.add.tween(_this.KF_initialsitting).to({ alpha: 1 }, 1000, 'Linear', false, 0);

        // hover after 3 seconds - on complete call hovering function
        _this.initialTween2.onComplete.add(_this.Initial_Hovering_Fn);
        _this.initialTween2.start();

        _this.questionid = 1;
    },

    Initial_Hovering_Fn: function () {
        //remove sitting bird and show hovering bird for 2 seconds.
        _this.KF_initialsitting.destroy();
        _this.KFcalls.volume = 1;
        var playPromise2 = _this.KFcalls.play();
        //play bird hovering while loading & fade it out then.
        _this.initial_hovering = _this.add.sprite(450, 220, 'kingfisher_hovering');

        _this.initial_hovering.name = "Kingfisher_hovering";
        _this.initial_hovering.anchor.setTo(0.5);
        _this.initial_hovering.scale.setTo(0.6, 0.6);
        //_this.initial_hovering.angle = 45;
        _this.iHovering = _this.initial_hovering.animations.add('kingfisher_hovering');
        _this.initial_hovering.animations.play('kingfisher_hovering', 90, true);

        //make the bird hover for 1 seconds
        _this.initialTween1 = _this.add.tween(_this.initial_hovering).to({ x: 480, y: 230 }, 1000, 'Quart', false, 0);
        _this.initialTween1.start();

        //after hovering tween is complete, start fly away the bird calling fly away function below
        _this.initialTween1.onComplete.add(_this.Initial_FlyAway_Fn);
    },

    Initial_FlyAway_Fn() {
        //fly away from screen and then call initiate game function to start the questions
        _this.initial_hovering.destroy();
        _this.initial_flying = _this.add.sprite(1, 1, 'KingFisher_JumpingWater');
        _this.initial_flying.name = "KF_JumpingWater";
        _this.initial_flying.anchor.setTo(0.5);
        _this.initial_flying.scale.setTo(0.8, 0.8);
        _this.initial_flying.angle = -40;
        _this.initial_flyAnim = _this.initial_flying.animations.add('KingFisher_JumpingWater');
        _this.initial_flying.animations.play('KingFisher_JumpingWater', 90, true, false);
        _this.initial_flying.x = 500;
        _this.initial_flying.y = 240;
        _this.initialTween3 = _this.add.tween(_this.initial_flying);
        _this.initialTween3.onComplete.add(_this.Initiate_Game_Fn);
        _this.initialTween3.to({ x: 1100, y: 200 }, 1000, 'Linear', false, 0);
        _this.initialTween3.start();


        _this.scale = _this.add.sprite(970, 255, 'level_scale');
        //_this.scale = _this.add.sprite(910, 255,'level_scale');
        _this.scale.visible = true;
        _this.scale.scale.setTo(1, 1);
        _this.scale.anchor.setTo(0.5);

        _this.scaleAnim = _this.scale.animations.add('level_scale', [0, 0, 0, 6, 6, 6, 11, 11, 11], true);

        // final position of center of the scale 910,255,
        // set the scale visible and tween it to correct position on screen.
        _this.scaleTween = _this.add.tween(_this.scale);
        _this.scaleTween.to({ x: 910, y: 255 }, 1000, 'Linear', true, 0);
        _this.scaleTween.start();

        //highlight the number scale when the bird just crosses it.
        _this.time.events.add(500, function () {


            _this.scale.animations.play('level_scale', 25, true);

            _this.time.events.add(2000, function () {
                _this.scale.animations.stop();
                _this.scale.frame = 0;
            });
        });

    },

    Initiate_Game_Fn: function () {
        // initialize the options, levels and then call the question function. Game starts from then
        _this.birdsittingLevelArray = [0, 1, 2, 3, 4, 5];
        _this.birdsittingLevelArray = _this.shuffle(_this.birdsittingLevelArray);

        _this.birdhoveringLevelArray = [1, 2, 3, 4, 5];
        _this.birdhoveringLevelArray = _this.shuffle(_this.birdhoveringLevelArray);

        _this.fishLevelArray = [-1, -2, -3, -4, -5];
        _this.fishLevelArray = _this.shuffle(_this.fishLevelArray);

        // 3 options are set below to be shuffled for each question asked.
        _this.thirdQArray = [1, 2, 3];
        _this.thirdQArray = _this.shuffle(_this.thirdQArray);

        _this.stopOtherVoice();
        //reset the bird chirp volume to low
        _this.birdchirp.volume = 0.3;
        _this.KFcalls.volume = 0.3;
        _this.Q3_gotoThirdQuestion();

    },

    stopOtherVoice: function () {

        //stop any of the other voices being played.
        _this.birdchirp.pause();
        _this.birdchirp.currentTime = 0.0


        _this.KFcalls.pause();
        _this.KFcalls.currentTime = 0.0;


        _this.Waterbubble.pause();
        _this.Waterbubble.currentTime = 0.0;
        _this.celebrationSound.removeEventListener('ended', _this.KFCalls_Celebration, false);
        _this.Waterbubble1.pause();
        _this.Waterbubble1.currentTime = 0.0;
    },

    stopQuestionVoice: function () {

        if (_this.playQuestionSound_1.isPlaying) {
            _this.playQuestionSound_1.pause();
            _this.playQuestionSound_1.currentTime = 0.0;
            _this.playQuestionSound_1 = null;

        }

        if (_this.playQuestionSound_2.isPlaying) {
            _this.playQuestionSound_2.pause();
            _this.playQuestionSound_2.currentTime = 0.0;
            _this.playQuestionSound_2 = null;
        }

        if (_this.celebrationSound.isPlaying) {
            _this.celebrationSound.pause();
            _this.celebrationSound.currentTime = 0.0;
            _this.celebrationSound.removeEventListener('ended', false);
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


    Q3_gotoThirdQuestion: function () {
        _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

        _this.thirdQOption = _this.thirdQArray[_this.thirdQOption_index];

        _this.birdsittingLevel = _this.birdsittingLevelArray[_this.birdsittinglevel_index];
        _this.birdhoveringLevel = _this.birdhoveringLevelArray[_this.birdhoveringlevel_index];
        _this.fishLevel = _this.fishLevelArray[_this.fishlevel_index];


        _this.Q3_addNumberPad();
        _this.Q3_Q3Options();

    },


    Q3_Q3Options: function () {
        //possible Q options: option 1 - where is the bird sitting (0 to +5), option 2 - where is bird hovering (0 to +5) , option 3 - where is the fish (-1 to -5)

        switch (_this.thirdQOption) {
            case 1: _this.Q3_gotoQ3Option1();
                break;
            case 2: _this.Q3_gotoQ3Option2();
                break;
            case 3: _this.Q3_gotoQ3Option3();
                break;

        }

        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;

        // ready the index for next question. if it exceeds 3, shuffle the array again and reset the index to zero.
        _this.thirdQOption_index += 1;

        if (_this.thirdQOption_index > 2) {
            _this.thirdQArray = _this.shuffle(_this.thirdQArray);
            _this.thirdQOption_index = 0;
        }

    },

    Q3_gotoQ3Option1: function () {
        //option 1 - the bird is sitting at 0 to +5). Generate the number from 0 to 5 randomly, place the bird there perching on branch and ask the question


        //Y value for different levels: 235:level0; 195:level +1, 160: level +2, 120: level +3, 80: level +4, 40: level +5
        //X value is hardcoded.


        switch (_this.birdsittingLevel) {
            case 0: _this.positionX = 400;
                _this.positionY = _this.PLUSZERO_LEVEL_Y;
                break;
            case 1: _this.positionX = 450;
                _this.positionY = _this.PLUSONE_LEVEL_Y + 4;
                break;
            case 2: _this.positionX = 410;
                _this.positionY = _this.PLUSTWO_LEVEL_Y;
                break;
            case 3: _this.positionX = 450;
                _this.positionY = _this.PLUSTHREE_LEVEL_Y;
                break;
            case 4: _this.positionX = 410;
                _this.positionY = _this.PLUSFOUR_LEVEL_Y - 5;
                break;
            case 5: _this.positionX = 352;
                _this.positionY = _this.PLUSFIVE_LEVEL_Y + 3;
                break;

        }

        _this.kingFisherPerch(_this.positionX, _this.positionY);
        _this.Q3_askQ3VoiceQuestion();

        _this.scale.animations.play('level_scale', 25, true);

        _this.time.events.add(2000, function () {
            _this.scale.animations.stop();
            _this.scale.frame = 0;
        })

        //increment the level for use in the next question.
        _this.birdsittinglevel_index += 1;


    },

    Q3_gotoQ3Option2: function () {
        //option 2 - the bird is hovering at 1 to +5). Generate the number from 1 to 5 randomly, place the bird there hovering and ask the question

        //Y value for different levels: 195:level +1, 160: level +2, 120: level +3, 80: level +4, 40: level +5
        //X value is hard coded - preferably on sky area outside the tree.

        switch (_this.birdhoveringLevel) {

            case 1: _this.positionX = 600;
                _this.positionY = _this.PLUSONE_LEVEL_Y + 15;
                break;
            case 2: _this.positionX = 200;
                _this.positionY = _this.PLUSTWO_LEVEL_Y + 20;
                break;
            case 3: _this.positionX = 700;
                _this.positionY = _this.PLUSTHREE_LEVEL_Y + 20;
                break;
            case 4: _this.positionX = 150;
                _this.positionY = _this.PLUSFOUR_LEVEL_Y + 15;
                break;
            case 5: _this.positionX = 500;
                _this.positionY = _this.PLUSFIVE_LEVEL_Y + 10;
                break;

        }

        //_this.kingFisherHover(_this.positionX, _this.positionY);
        _this.KingFisherFly(40, _this.positionY - 10);
        _this.Q3_askQ3VoiceQuestion();

        _this.scale.animations.play('level_scale', 25, true);

        _this.time.events.add(2000, function () {
            _this.scale.animations.stop();
            _this.scale.frame = 0;
        })

        //increment the level for use in the next question.
        _this.birdhoveringlevel_index += 1;


    },

    Q3_gotoQ3Option3: function () {
        //option 3 - the fish is swimming at -1 to -5). Generate the number from -1 to -5 randomly, place the fish there swimming and ask the question

        //Y value for different levels: 280:level -1, 315: level -2, 345: level -3, 375: level +4, 415: level +5
        //X value is hard coded - preferably on sky area outside the tree.


        switch (_this.fishLevel) {

            case -1: _this.positionX = 100;
                _this.positionY = _this.MINUSONE_LEVEL_Y;
                break;
            case -2: _this.positionX = 100;
                _this.positionY = _this.MINUSTWO_LEVEL_Y;
                break;
            case -3: _this.positionX = 100;
                _this.positionY = _this.MINUSTHREE_LEVEL_Y;
                break;
            case -4: _this.positionX = 100;
                _this.positionY = _this.MINUSFOUR_LEVEL_Y;
                break;
            case -5: _this.positionX = 100;
                _this.positionY = _this.MINUSFIVE_LEVEL_Y;
                break;

        }

        _this.fishSwimming(_this.positionX, _this.positionY);

        _this.Q3_askQ3VoiceQuestion();

        _this.scale.animations.play('level_scale', 25, true);

        _this.time.events.add(2000, function () {
            _this.scale.animations.stop();
            _this.scale.frame = 0;
        })

        //increment the level for use in the next question.
        _this.fishlevel_index += 1;

    },

    kingFisherPerch: function (positionX, positionY) {

        _this.kingfisher_sitting = _this.add.image(positionX, positionY, 'kingfisher_sitting');
        _this.kingfisher_sitting.scale.setTo(1, 1);

    },

    KingFisherFly(positionX, posY) {
        //fly at a given level back and forth.

        _this.Kingfisher_flying = _this.add.sprite(200, 200, 'KingFisher_JumpingWater');
        _this.Kingfisher_flying.name = "KF_JumpingWater";
        _this.Kingfisher_flying.anchor.setTo(0.5);
        _this.Kingfisher_flying.scale.setTo(0.8, 0.8);
        console.log("initial angle is: " + _this.Kingfisher_flying.angle);

        _this.Kingfisher_flying.scale.x *= -1;
        _this.Kingfisher_flying.angle = 40;


        _this.Kingfisher_flyingAnim = _this.Kingfisher_flying.animations.add('KingFisher_JumpingWater');
        _this.Kingfisher_flying.animations.play('KingFisher_JumpingWater', 90, true, false);


        _this.FyingRight = _this.add.tween(_this.Kingfisher_flying);
        _this.FyingLeft = _this.add.tween(_this.Kingfisher_flying);
        _this.FlyingRightTween();

    },

    FlyingRightTween: function () {


        _this.Kingfisher_flying.scale.x *= -1;
        _this.Kingfisher_flying.angle = -40;
        _this.FyingRight = _this.add.tween(_this.Kingfisher_flying);

        _this.Kingfisher_flying.x = 40;
        _this.Kingfisher_flying.y = _this.positionY;


        _this.FyingRight.to({ x: 850, y: _this.positionY }, 4000, 'Linear', false, 0);
        _this.FyingRight.onComplete.add(_this.FlyingLeftTween);
        _this.FyingRight.start();
    },

    FlyingLeftTween: function () {

        _this.Kingfisher_flying.scale.x *= -1;
        _this.Kingfisher_flying.angle = 40;
        _this.FyingLeft = _this.add.tween(_this.Kingfisher_flying);

        _this.Kingfisher_flying.x = 850;
        _this.Kingfisher_flying.y = _this.positionY;


        _this.FyingLeft.to({ x: 40, y: _this.positionY }, 4000, 'Linear', false, 0);
        _this.FyingLeft.onComplete.add(_this.FlyingRightTween);
        _this.FyingLeft.start();

    },

    kingFisherHover: function (positionX, positionY) {

        _this.Kingfisher_hovering = _this.add.sprite(positionX, positionY, 'kingfisher_hovering');
        _this.objGroup.add(_this.Kingfisher_hovering);
        _this.Kingfisher_hovering.name = "Kingfisher_hovering";
        _this.Kingfisher_hovering.anchor.setTo(0.5);
        _this.Kingfisher_hovering.scale.setTo(0.5, 0.5);
        _this.Hovering = _this.Kingfisher_hovering.animations.add('kingfisher_hovering');
        _this.Kingfisher_hovering.animations.play('kingfisher_hovering', 30, true);
    },

    kingFisherHoverCeleb: function (positionX, positionY) {

        _this.Kingfisher_hovering = _this.add.sprite(positionX, positionY, 'kingfisher_hovering');
        _this.objGroup.add(_this.Kingfisher_hovering);
        _this.Kingfisher_hovering.name = "Kingfisher_hovering";
        _this.Kingfisher_hovering.anchor.setTo(0.5);
        _this.Kingfisher_hovering.scale.setTo(0.7, 0.7);
        _this.Hovering = _this.Kingfisher_hovering.animations.add('kingfisher_hovering');
        _this.Kingfisher_hovering.animations.play('kingfisher_hovering', 90, true);
    },

    kingFisherHoverYoyo: function (positionX, positionY) {

        _this.Kingfisher_yoyo = _this.add.sprite(positionX, positionY, 'kingfisher_hovering');
        _this.objGroup.add(_this.Kingfisher_yoyo);
        _this.Kingfisher_yoyo.name = "Kingfisher_hovering";
        _this.Kingfisher_yoyo.anchor.setTo(0.5);
        _this.Kingfisher_yoyo.scale.setTo(0.7, 0.7);
        _this.Kingfisher_yoyo.scale.x *= -1;
        //_this.Kingfisher_yoyo.scale.y *= -0.75;
        _this.KF_Yoyo = _this.Kingfisher_yoyo.animations.add('kingfisher_hovering');
        _this.Kingfisher_yoyo.animations.play('kingfisher_hovering', 15, true);
        _this.tween_yoyo = _this.add.tween(_this.Kingfisher_yoyo);
        _this.tween_yoyo.to({ angle: 0, x: positionX + 10, y: positionY }, 1000, 'Quart', false, 0, false, true);
        _this.tween_yoyo.start();
        //_this.tween_yoyo.onComplete.add(_this.tween_3BComplete,_this);
        //_this.tween_yoyo.start();

    },

    Q3_askQ3VoiceQuestion: function () {


        if (_this.thirdQOption == 1) {
            _this.playQuestionSound_1.play();
        }
        else if (_this.thirdQOption == 2) {
            var playPromise1 = _this.playQuestionSound_1.play();

        }
        else if (_this.thirdQOption == 3) {
            var playPromise2 = _this.playQuestionSound_2.play();

        }

    },

    fishSwimming: function (positionX, positionY) {

        _this.fishSwmmingFlg = "right";
        _this.fish_1 = _this.add.sprite(_this.positionX, _this.positionY, 'Fish_1');
        _this.objGroup.add(_this.fish_1);

        _this.fish1Anim = _this.fish_1.animations.add('Fish_1');
        _this.fish_1.animations.play('Fish_1', 50, true, false);

        //_this.fish_1.rotation=3;
        _this.fish_1.anchor.setTo(0.6)
        _this.fish_1.scale.setTo(0.4, 0.4);
        _this.fish_1.scale.x *= -1;
        _this.tween_3B = _this.add.tween(_this.fish_1);
        _this.tween_3A = _this.add.tween(_this.fish_1);

        _this.tween_3BComplete();

    },

    tween_3AComplete: function () {

        _this.fish_1.scale.x *= -1;
        _this.tween_3B = _this.add.tween(_this.fish_1);
        _this.tween_3B.to({ x: _this.positionX, y: _this.positionY }, 6000, 'Linear', false, 0);
        _this.tween_3B.onComplete.add(_this.tween_3BComplete, _this);
        _this.tween_3B.start();
    },

    tween_3BComplete: function () {

        _this.fish_1.scale.x *= -1;
        _this.tween_3A = _this.add.tween(_this.fish_1);
        _this.tween_3A.to({ x: 750, y: _this.positionY }, 6000, 'Linear', false, 0);
        _this.tween_3A.onComplete.add(_this.tween_3AComplete, _this);
        _this.tween_3A.start();

    },


    //this is called in case correct answer is given in option 3 - where is the fish
    kingFisherJumping: function (positionX, positionY) {

        //king fisher jumping to water sprite. stop the fish if required.
        _this.tween_3A.stop();
        _this.tween_3B.stop();
        //calculate the slope of the bird. the first bird tweens till the water level. 
        //then change the bird to inside water sprite of the bird. same happens while returning back.
        // x3 is the point where the bird meets the water based on the slope calculated.
        // water level is known as somewhere in the mid of the screen.

        var x1 = 1;
        var y1 = 1;

        var x2 = _this.fish_1.x;
        var y2 = _this.fish_1.y;

        _this.KF_slope = (y2 - y1) / (x2 - x1);


        _this.waterlevel_y = 290;
        _this.waterlevel_x = (_this.waterlevel_y - y1 + (x1 * _this.KF_slope)) / _this.KF_slope;

        _this.waterlevel_x = Math.round(_this.waterlevel_x);




        _this.KF_JumpingWater = _this.add.sprite(1, 1, 'KingFisher_JumpingWater');

        _this.KF_JumpingWater.name = "KF_JumpingWater";
        _this.KF_JumpingWater.anchor.setTo(0.5);
        _this.KF_JumpingWater.scale.setTo(0.8, 0.8);
        //_this.JumpingWater =_this.KF_JumpingWater.animations.add('KingFisher_JumpingWater');
        //_this.KF_JumpingWater.animations.play('KingFisher_JumpingWater', 30, true, false);
        _this.KF_JumpingWater.x = 100;
        _this.KF_JumpingWater.y = 0;
        _this.tween_1 = _this.add.tween(_this.KF_JumpingWater);
        _this.tween_1.onComplete.add(_this.tween_1Complete, _this);
        _this.tween_1.to({ x: _this.waterlevel_x, y: _this.waterlevel_y }, 700, 'Linear', false, 0);
        _this.tween_1.start();

    },

    tween_1Complete: function (target) {

        _this.KF_InsideWater = _this.add.sprite(_this.waterlevel_x, _this.waterlevel_y, 'KingFisher_InsideWater');

        _this.Watersplash.play();
        _this.KF_InsideWater.name = "KingFisher_InsideWater";
        _this.KF_InsideWater.anchor.setTo(0.5);
        _this.KF_InsideWater.scale.setTo(0.8, 0.8);
        _this.InsideWater = _this.KF_JumpingWater.animations.add('KingFisher_InsideWater');
        _this.KF_InsideWater.animations.play('KingFisher_InsideWater', 50, true, false);
        //_this.KingFisher_InsideWater.x = 100;
        //_this.KingFisher_InsideWater.y = 0;
        _this.tween_1A = _this.add.tween(_this.KF_InsideWater);
        _this.tween_1A.onComplete.add(_this.tween_1AComplete, _this);

        //change tween time based on the fish level since it needs more time for lower levels to travel.
        if (_this.fishLevel == -1) {
            _this.tween_1A.to({ x: _this.fish_1.x - 10, y: _this.fish_1.y - 10 }, 200, 'Linear', false, 0);
        }
        else if (_this.fishLevel == -2) {
            _this.tween_1A.to({ x: _this.fish_1.x - 10, y: _this.fish_1.y - 10 }, 350, 'Linear', false, 0);

        }
        else if (_this.fishLevel == -3) {
            _this.tween_1A.to({ x: _this.fish_1.x - 10, y: _this.fish_1.y - 10 }, 400, 'Linear', false, 0);
        }
        else if (_this.fishLevel == -4) {
            _this.tween_1A.to({ x: _this.fish_1.x - 10, y: _this.fish_1.y - 10 }, 600, 'Linear', false, 0);
        }
        else if (_this.fishLevel == -5) {
            _this.tween_1A.to({ x: _this.fish_1.x - 10, y: _this.fish_1.y - 10 }, 800, 'Linear', false, 0);
        }

        _this.tween_1A.start();

        //splashing of water happens now. Choosing only certain frames to play.

        _this.SplashWater = _this.add.sprite(_this.waterlevel_x, _this.waterlevel_y, 'SplashWater');
        _this.SplashWater.name = "SplashWater";
        _this.SplashWater.anchor.setTo(0.5);
        _this.SplashWater.scale.setTo(0.8, 0.8);

        _this.splash_water = _this.SplashWater.animations.add('SplashWater', [5, 6, 7, 8, 9, 10, 11, 12, 13], true);
        //_this.splash_water =_this.SplashWater.animations.add('SplashWater');

        _this.SplashWater.animations.play('SplashWater', 30, false, false);

        _this.KF_JumpingWater.destroy();



    },

    tween_1AComplete: function (target) {

        //king fisher coming back from water sprite inside the water
        _this.fish_1.destroy();
        _this.KF_InsideWater.destroy();
        _this.KF_WaterComingUp = _this.add.sprite(500, 400, 'KingFisher_ComingUpWater');
        _this.KF_WaterComingUp.name = "KingFisher_ComingUpWater";
        _this.KF_WaterComingUp.anchor.setTo(0.5);
        _this.KF_WaterComingUp.scale.setTo(0.8, 0.8);
        _this.ComingUpWater = _this.KF_WaterComingUp.animations.add('KingFisher_ComingUpWater');
        _this.KF_WaterComingUp.animations.play('KingFisher_ComingUpWater', 20, true, false);

        //remove the jumping water image


        // assign fish position to KF coming up in water and then destroy fish.
        _this.KF_WaterComingUp.x = _this.fish_1.x;
        _this.KF_WaterComingUp.y = _this.fish_1.y;



        _this.tween_1B = _this.add.tween(_this.KF_WaterComingUp);

        _this.tween_1B.to({ Angle: 220, x: 180, y: 280 }, 800, 'Linear', false, 0);
        _this.tween_1B.onComplete.add(_this.tween_1BComplete, _this);



        _this.tween_1B.start();

    },

    tween_1BComplete: function (target) {

        _this.KF_WaterComingUp.destroy();

        _this.Watersplash.currentTime = 0.0;
        _this.Watersplash.play();
        _this.KF_ComingUp = _this.add.sprite(500, 400, 'KingFisher_ComingUp');
        _this.KF_ComingUp.name = "KingFisher_ComingUp";
        _this.KF_ComingUp.anchor.setTo(0.5);
        _this.KF_ComingUp.scale.setTo(0.8, 0.8);
        _this.ComingUp = _this.KF_ComingUp.animations.add('KingFisher_ComingUp');
        _this.KF_ComingUp.animations.play('KingFisher_ComingUp', 20, true, false);


        //remove the jumping water image
        _this.KF_InsideWater.destroy();




        // assign the fixed position from where KF will reach water level.
        _this.KF_ComingUp.x = 180;
        _this.KF_ComingUp.y = 280;

        _this.tween_1C = _this.add.tween(_this.KF_ComingUp);

        _this.tween_1C.to({ Angle: 220, x: 75, y: 250 }, 500, 'Linear', false, 0);
        _this.tween_1C.onComplete.add(_this.tween_1CComplete, _this);

        //splashing of water happens now while coming up
        _this.SplashWater1 = _this.add.sprite(240, 280, 'SplashWater');
        _this.SplashWater1.name = "SplashWater";
        _this.SplashWater1.anchor.setTo(0.5);
        _this.SplashWater1.scale.setTo(0.8, 0.8);
        _this.SplashArray = ["9", "10", "11", "12", "13"];
        _this.splash_water = _this.SplashWater1.animations.add('SplashWater', [9, 10, 11, 12, 13], true);


        _this.SplashWater1.animations.play('SplashWater', 30, false, false);
        _this.tween_1C.start();

    },

    tween_1CComplete: function (target) {

        //_this.KF_ComingUpEnding.destroy();
        _this.KF_ComingUp.destroy();
        _this.KF_Eatingfish = _this.add.sprite(75, 250, 'KingFisher_Eatingfish');

        _this.objGroup.add(_this.KF_Eatingfish);
        _this.KF_Eatingfish.name = "KF_Eatingfish";
        _this.KF_Eatingfish.anchor.setTo(0.5);
        _this.KF_Eatingfish.scale.setTo(1.2, 1.2);
        _this.Eatingfish = _this.KF_Eatingfish.animations.add('KingFisher_Eatingfish');
        _this.KF_Eatingfish.animations.play('KingFisher_Eatingfish', 15, true);

    },


    amplifyMedia: function (mediaElem, multiplier) {
        var context = new (window.AudioContext || window.webkitAudioContext),
            result = {
                context: context,
                source: context.createMediaElementSource(mediaElem),
                gain: context.createGain(),
                media: mediaElem,
                amplify: function (multiplier) { result.gain.gain.value = multiplier; },
                getAmpLevel: function () { return result.gain.gain.value; }
            };
        result.source.connect(result.gain);
        result.gain.connect(context.destination);
        result.amplify(multiplier);

        return result;
    },


    shutdown: function () {
        _this.stopQuestionVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },


    Q3_addNumberPad: function () {

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
            _this.numbg.events.onInputDown.add(_this.Q3_numClicked, _this);

            _this.x += 63;
        }

        _this.minusbtn = _this.numGroup.create(_this.x, 552, 'Numberpad');
        _this.minusbtn.frame = 10;
        _this.minusbtn.anchor.setTo(0.5);
        _this.minusbtn.scale.setTo(0.8, 0.8);
        _this.minusbtn.inputEnabled = true;
        _this.minusbtn.name = "-";
        _this.minusbtn.input.useHandCursor = true;
        _this.minusbtn.events.onInputDown.add(_this.Q3_signbtnClicked, _this);



        _this.plusbtn = _this.numGroup.create(_this.x + 63, 552, 'Numberpad');
        _this.plusbtn.frame = 11;
        _this.plusbtn.anchor.setTo(0.5);
        _this.plusbtn.scale.setTo(0.8, 0.8);
        _this.plusbtn.inputEnabled = true;
        _this.plusbtn.name = "+";


        _this.plusbtn.input.useHandCursor = true;
        _this.plusbtn.events.onInputDown.add(_this.Q3_signbtnClicked, _this);

        _this.wrongbtn = _this.numGroup.create(_this.x + 126, 552, 'Numberpad');
        _this.wrongbtn.frame = 12;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.8, 0.8);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(_this.Q3_wrongbtnClicked, _this);

        _this.rightbtn = _this.numGroup.create(_this.x + 189, 552, 'Numberpad');
        _this.rightbtn.frame = 13;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.8, 0.8);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(_this.Q3_rightbtnClicked, _this);


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
        //_this.enterTxt.font = 'myfont';
        _this.enterTxt.fontSize = 40;
        _this.enterTxt.fontWeight = 250;
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.setShadow(0, 0, 'Level43A_rgba(0, 0, 0, 0)', 0);
        _this.ScreenTextBox.addChild(_this.enterTxt);

        _this.objGroup.add(_this.ScreenTextBox);

        _this.numpadTween = _this.add.tween(_this.numGroup);

        _this.ScreenTextTween = _this.add.tween(_this.ScreenTextBox);

        //tween in the number pad after a second.
        _this.time.events.add(1000, _this.Q3_tweenNumPad);
        //after 2 seconds, show the screen text box as enabled
        _this.time.events.add(2000, _this.Q3_enableScreenText);



    },

    Q3_tweenNumPad: function () {

        // now set the number pad visible and tween it to correct position on screen.
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

        _this.ScreenTextBox.visible = true;
        _this.ScreenTextTween.to({ x: 840, y: 430 }, 1000, 'Linear', true, 0);

    },

    Q3_enableScreenText: function () {
        _this.ScreenTextBox.frame = 1;
    },

    Q3_numClicked: function (target) {


        _this.clickSound.play();
        _this.selectedAns1 = target.name;
        _this.enterTxt.text = "" + _this.selectedAns2 + _this.selectedAns1;

    },


    Q3_signbtnClicked: function (target) {


        _this.clickSound.play();
        _this.selectedAns2 = target.name;
        _this.enterTxt.text = "" + _this.selectedAns2 + _this.selectedAns1;

    },


    Q3_wrongbtnClicked: function (target) {


        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.enterTxt.text = "";
    },


    Q3_validateAnswer: function () {

        //if zero is selected, ignore the sign by making it blank. applicable only for option 1 since only there +0,-0 and 0 answer is possible
        _this.checkSign = "+";

        // in case of option 1 where bird is sitting in level 0, is a zero selected with + or -, then return false since zero should not come with a sign.
        if (_this.selectedAns1 == "0" && _this.thirdQOption == 1 && _this.birdsittingLevel == 0 && (_this.selectedAns2 == '+' || _this.selectedAns2 == '-')) {
            return false;

        }

        _this.combinedAnswer = "" + _this.selectedAns2 + _this.selectedAns1;

        if (_this.thirdQOption == 1) {
            //only in this option check sign is used to compare which is set to blank if zero answer. also compare without sign in case user has not entered sign.
            if (("" + _this.combinedAnswer == "+" + _this.birdsittingLevel) || ("" + _this.combinedAnswer == "" + _this.birdsittingLevel)) {

                return true;
            }
            else {
                return false;
            }
        }
        else if (_this.thirdQOption == 2) {
            // compare given combined answer with signed level or without sign level. for +ve number, both with + and without + are the same.
            if (("" + _this.combinedAnswer == "+" + _this.birdhoveringLevel) || ("" + _this.combinedAnswer == "" + _this.birdhoveringLevel)) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (_this.thirdQOption == 3) {
            //fishlevel already has a sign, so need to include sign while comparing
            if ("" + _this.combinedAnswer == "" + _this.fishLevel) {

                return true;
            }
            else {
                return false;
            }
        }

    },


    Q3_ClearObjects: function () {

        //based on the current option, fade and destroy the objects on screen

        if (_this.thirdQOption == 1) {

            _this.KF_fadeOut3 = _this.add.tween(_this.Kingfisher_hovering).to({ alpha: 0 }, 200, 'Linear', true, 0);
            _this.KF_fadeOut3.onComplete.add(_this.Q3_destroyObjects);

        }

        else if (_this.thirdQOption == 2) {


            _this.KF_fadeOut1 = _this.add.tween(_this.Kingfisher_yoyo).to({ alpha: 0 }, 200, 'Linear', true, 0);
            _this.KF_fadeOut1.onComplete.add(_this.Q3_destroyObjects);



        }
        else if (_this.thirdQOption == 3) {


            _this.KF_fadeOut2 = _this.add.tween(_this.KF_Eatingfish).to({ alpha: 0 }, 200, 'Linear', true, 0);
            _this.KF_fadeOut2.onComplete.add(_this.Q3_destroyObjects);

        }

    },

    Q3_destroyObjects: function () {
        // most of the objects are destroyed since they are added to obj group and num group to get ready for next question. Max 6 questions.

        _this.noofAttempts++;
        _this.objGroup.destroy();
        _this.numGroup.destroy();
        if (_this.count1 < 3) {

            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.selectedAns1 = "";
            _this.selectedAns2 = "";
            _this.enterTxt.text = "";

            _this.stopOtherVoice();
            _this.Q3_gotoThirdQuestion();
        }
        else {
            _this.stopOtherVoice();
            //_this.timer1.stop();
            //_this.timer1=null;
            //_this.navBar.visible=true;
            //_this.game4_preload();
            //_this.numbers_int_4_g6l1();
            //_this.state.start('numbers_int_4_g6l1',false,false);
            _this.state.start('NS_INT_4_G6level1', false, false, _this.minutes, _this.seconds, _this.counterForTimer);
        }
    },

    Q3_rightbtnClicked: function (target) {

        //target.frame=1;

        _this.correct_answer = true;

        _this.speakerbtn.inputEnabled = false;
        _this.speakerbtn.input.useHandCursor = false;

        target.events.onInputDown.removeAll();
        _this.wrongbtn.events.onInputDown.removeAll();
        _this.correct_answer = this.Q3_validateAnswer();
        _this.Q3_showanswerActions(_this.correct_answer);

        // add delay of 5000 seconds before calling clear objects. option 3, takes time to complete the tween for celebration (KF eating fish)
        if (_this.correct_answer) {
            if (_this.thirdQOption == 3) {
                _this.time.events.add(4000, _this.Q3_ClearObjects);
            }
            else {
                _this.time.events.add(1500, _this.Q3_ClearObjects);
            }

        }
        else {
            target.events.onInputDown.add(_this.Q3_rightbtnClicked, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q3_wrongbtnClicked, _this);
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;

        }

    },

    Q3_showanswerActions: function (correct_answer) {


        if (correct_answer == true) {
            _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            _this.starAnim.smoothed = false;
            _this.score++;
            _this.anim = _this.starAnim.animations.add('star');
            // _this.userHasPlayed = 1;
            // _this.game_id = 'NS_INT_3_G6';
            // _this.timeinMinutes = _this.minutes;
            // _this.timeinSeconds = _this.seconds;
            // _this.grade = "6";
            // _this.gradeTopics = "Integers";
            // _this.microConcepts = "Number Systems";
            _this.count1++;

            _this.anim.play();

            if (_this.thirdQOption == 1) {

                /* if (_this.zeroWithSign == true) -- this is not required any more.
                 {
                     // if entered zero with a sign, shake it and reset it to just zero. but answer is taken as correct.
                     _this.shake.shake(2, _this.ScreenTextBox);
                     _this.enterTxt.text = "0";
                 }*/

                _this.kingfisher_sitting.destroy();
                //if its level is zero, hover slight above current level. otherwise it shows up on water.
                if (_this.birdsittingLevel == 0) {
                    _this.kingFisherHoverCeleb(_this.positionX, _this.positionY - 20);
                }
                else {
                    _this.kingFisherHoverCeleb(_this.positionX, _this.positionY + 20);
                }
                //add event to play bird call/bubble sounds after completing the celebration sound
                _this.celebrationSound.addEventListener('ended', _this.KFCalls_Celebration, false);
                _this.celebrationSound.play();
            }
            else if (_this.thirdQOption == 2) {

                if (_this.Kingfisher_flying.x < 100)
                    _this.kingFisherHoverYoyo(100, _this.Kingfisher_flying.y);
                else if (_this.Kingfisher_flying.x > 850)
                    _this.kingFisherHoverYoyo(850, _this.Kingfisher_flying.y);
                else
                    _this.kingFisherHoverYoyo(_this.Kingfisher_flying.x, _this.Kingfisher_flying.y);

                _this.Kingfisher_flying.destroy();

                _this.celebrationSound.addEventListener('ended', _this.KFCalls_Celebration, false);
                _this.celebrationSound.play();

            }
            else if (_this.thirdQOption == 3) {
                _this.kingFisherJumping(_this.positionX, _this.positionY);


                _this.celebrationSound.addEventListener('ended', _this.KFCalls_Celebration, false);
                _this.celebrationSound.play();


            }
        }

        else {
            _this.wrongSound.play();

            _this.selectedAns1 = "";
            _this.selectedAns2 = "";
            _this.enterTxt.text = "";

            if (_this.thirdQOption == 1) {

                _this.shake.shake(10, _this.kingfisher_sitting);

            }
            else if (_this.thirdQOption == 2) {
                _this.shake.shake(10, _this.Kingfisher_flying);


            }
            else if (_this.thirdQOption == 3) {
                _this.shake.shake(10, _this.fish_1);

            }
        }
    },

    KFCalls_Celebration: function () {
        // for option 1 and 2, play bird calling sound. for option 3 only bubble sound since bird is eating fish

        if (_this.thirdQOption == 1 || _this.thirdQOption == 2) {
            _this.KFcalls.currentTime = 0.0;
            _this.KFcalls.play();
        }
        else {
            for (i = 0; i < 1; i++) {
                _this.Waterbubble.currentTime = 0;
                _this.Waterbubble1.currentTime = 0;
                _this.Waterbubble.play();
                _this.Waterbubble1.play();

            }
        }

    },

    stopAudio: function () {
        if (_this.demoAudio1) {
            console.log("removing the audio1");
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
            _this.q2Sound.removeEventListener('ended', _this.q2S);
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }
        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();
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

        //* integers are introduced in this game..uses int-1 game demo audio itself.
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" +
            _this.languageSelected + "/Integer demo 1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* where is the fish.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-3-G6/" +
            _this.languageSelected + "/NS-INT-2A-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* place the bird in plus 1
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-4-G6/" +
            _this.languageSelected + "/bird-pl-1.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        // _this.backbtn1 = _this.add.sprite(5, 6, 'backbtn');         //* back button at the top.
        // _this.backbtn1.inputEnabled = true;
        // _this.backbtn1.input.useHandCursor = true;
        // _this.backbtn1.events.onInputDown.add(function () {
        //     _this.clickSound.play();
        //     _this.stopAudio();
        //    //_this.backbtn1.events.onInputDown.removeAll();
        //     _this.time.events.add(50, function () {
        //         _this.state.start('grade6NumberSystems', true, false);
        //     });
        // });

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

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('int_2_1');
        _this.videoWorld1 = _this.demoVideo_1.addToWorld();
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NS-INT-2-G6_1.mp4");
        _this.video_playing = 1;

        _this.demoAudio1.play();

        _this.demoVideo_2 = _this.add.video('int_2_2');
        _this.demoVideo_1.onComplete.add(function ()    //* on completion of video1, play 2nd video.
        {
            if (_this.demoVideo_1) _this.demoVideo_1.stop(false);
            _this.videoWorld2 = _this.demoVideo_2.addToWorld();

            _this.skip.bringToTop();                  //* otherwise, they go behind 2nd video.

            _this.demoVideo_2.play(false);
            _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/NS-INT-2-G6_2.mp4");
            _this.video_playing = 2;
            if (_this.languageSelected == 'Odiya') {
                _this.q1Timer = setTimeout(function ()    //* q3 js timer to play 3 after 5.8 seconds.
                {
                    console.log("inside q3sound.....")
                    clearTimeout(_this.q1Timer);         //* clear the time once its used.
                    _this.q1Sound.play();
                }, 1000);
            } else {
                _this.q1Sound.play();
            }

        });

        _this.demoVideo_3 = _this.add.video('int_2_3');
        _this.demoVideo_2.onComplete.add(function ()    //* on completion of video1, play 2nd video.
        {
            if (_this.demoVideo_2) _this.demoVideo_2.stop(false);
            _this.q2Sound.play();
            _this.videoWorld3 = _this.demoVideo_3.addToWorld();

            _this.skip.bringToTop();                  //* otherwise, they go behind 2nd video.

            _this.demoVideo_3.play(false);
            _this.demoVideo_3.changeSource(window.baseUrl + "assets/demoVideos/NS-INT-2-G6_3.mp4");
            _this.video_playing = 3;

            // _this.time.events.add(1000, function()       
            // { 
            //     //_this.demoVideo_3.paused = true;
            //     _this.demoVideo_3.playbackRate = 0;
            // });
        });

        _this.demoVideo_3.onComplete.add(function () {
            if (_this.demoVideo_3) _this.demoVideo_3.stop(false);
            _this.stopAudio();

            if (_this.videoWorld1) {
                _this.videoWorld1.destroy();
            }

            if (_this.videoWorld2) {
                _this.videoWorld2.destroy();
            }

            if (_this.videoWorld3) {
                _this.videoWorld3.destroy();
            }
            if (_this.demoVideo_1)
                _this.demoVideo_1.stop(false);

            if (_this.demoVideo_2)
                _this.demoVideo_2.stop(false);

            if (_this.demoVideo_3)
                _this.demoVideo_3.stop(false);

            _this.game.paused = false;
        });
    }

};