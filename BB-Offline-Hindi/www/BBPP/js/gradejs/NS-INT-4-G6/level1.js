Game.NS_INT_4_G6level1 = function () { };


Game.NS_INT_4_G6level1.prototype = {

    init: function (minutes, seconds, counterForTimer) {
        _this = this;

        //* This game is 2nd part of previous game (int_3). Drag and place the fish/bird in the specified level.
        //* 3 questions asked

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

        console.log("parameter values:m:s:counter " + minutes + ':' + seconds + ':' + counterForTimer);

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

        _this.birdPlace = document.createElement('audio');
        _this.birdPlacesrc = document.createElement('source');
        _this.birdPlacesrc.setAttribute("src", window.baseUrl + "sounds/place the bird in.mp3");


        _this.birdchirp = document.createElement('audio');
        _this.birdchirpSrc = document.createElement('source');
        _this.birdchirpSrc.setAttribute("src", window.baseUrl + "sounds/birdschirping.mp3");
        //_this.amplify1 = this.amplifyMedia(_this.birdchirp, 0.25);
        _this.birdchirp.appendChild(_this.birdchirpSrc);
        _this.birdchirp.volume = 0.6;

        _this.KFcalls = document.createElement('audio');
        _this.KFcallsSrc = document.createElement('source');
        _this.KFcallsSrc.setAttribute("src", window.baseUrl + "sounds/KFcalls.mp3");
        _this.KFcalls.appendChild(_this.KFcallsSrc);
        _this.KFcalls.volume = 0.3;

        _this.Watersplash = document.createElement('audio');
        _this.WatersplashSrc = document.createElement('source');
        _this.WatersplashSrc.setAttribute("src", window.baseUrl + "sounds/WaterSplash.mp3");
        _this.Watersplash.appendChild(_this.WatersplashSrc);


        _this.Waterbubble = document.createElement('audio');
        _this.WaterbubbleSrc = document.createElement('source');
        _this.WaterbubbleSrc.setAttribute("src", window.baseUrl + "sounds/WaterBubbling.mp3");
        _this.Waterbubble.appendChild(_this.WaterbubbleSrc);
        _this.Waterbubble.volume = 0.3;

        _this.Waterbubble1 = document.createElement('audio');
        _this.Waterbubble1Src = document.createElement('source');
        _this.Waterbubble1Src.setAttribute("src", window.baseUrl + "sounds/WaterBubbling1.mp3");
        _this.Waterbubble1.appendChild(_this.Waterbubble1Src);
        _this.Waterbubble1.volume = 0.3;

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

       // telInitializerbbpp.gameIdInit("NS_INT_3_G6", gradeSelected);

    },

    create: function (game) {

        _this.amplify = null;

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.questionid = null;

        _this.count;
        _this.speakerbtn;
        _this.celebration;
        _this.group1;
        _this.group2;
        _this.group3;

        _this.opt = new Array();
        _this.correctans = 0;
        _this.rightCount;
        _this.opt1;
        _this.opt2;
        _this.opt3;

        _this.wmusic;
        _this.wrong = true;

        _this.count;

        _this.starsGroup;

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
        // _this.game_id = "NS_INT_3_G6";
        // _this.grade = "6";
        // _this.gradeTopics = 'Integers';
      _this.microConcepts = 'Number Systems';


        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);
        _this.gra = _this.add.graphics(_this.world.centerX, _this.world.centerY);

        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count = 0;
        _this.count1 = 3;
        _this.celebration = false;

        _this.reset = -1;

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();


        _this.Q4_skyzone0 = _this.add.image(0, 254, 'zone');
        _this.Q4_skyzone0.scale.setTo(1, 0.6);

        _this.Q4_skyzone1 = _this.add.image(0, 214, 'zone');
        _this.Q4_skyzone1.scale.setTo(1, 0.6);

        _this.Q4_skyzone2 = _this.add.image(0, 171, 'zone');
        _this.Q4_skyzone2.scale.setTo(1, 0.6);

        _this.Q4_skyzone3 = _this.add.image(0, 131, 'zone');
        _this.Q4_skyzone3.scale.setTo(1, 0.6);

        _this.Q4_skyzone4 = _this.add.image(0, 97, 'zone');
        _this.Q4_skyzone4.scale.setTo(1, 0.6);

        _this.Q4_skyzone5 = _this.add.image(0, 55, 'zone');
        _this.Q4_skyzone5.scale.setTo(1, 0.6);

        _this.Q4_pondzone1 = _this.add.image(0, 288, 'zone');
        _this.Q4_pondzone1.scale.setTo(1, 0.6);

        _this.Q4_pondzone2 = _this.add.image(0, 326, 'zone');
        _this.Q4_pondzone2.scale.setTo(1, 0.6);

        _this.Q4_pondzone3 = _this.add.image(0, 365, 'zone');
        _this.Q4_pondzone3.scale.setTo(1, 0.6);

        _this.Q4_pondzone4 = _this.add.image(0, 404, 'zone');
        _this.Q4_pondzone4.scale.setTo(1, 0.6);

        _this.Q4_pondzone5 = _this.add.image(0, 443, 'zone');
        _this.Q4_pondzone5.scale.setTo(1, 0.6);

        _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, "Q3_bg");  //Q3_bg is same as Q4 bg
        _this.background.scale.setTo(1, 1);

        //_this.nav=navBar;
        //_this.nav.scale.setTo(1,1);
        _this.navBar = _this.add.sprite(0, 0, 'navBar');
        _this.navBar.scale.setTo(1, 1);

        _this.backbtn = _this.add.sprite(5, 6, 'backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;
        _this.backbtn.events.onInputDown.add(function () {
            _this.stopVoice();
            _this.stopOtherVoice();
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
            if (_this.speakerbtnClicked == false && _this.rightbtnClicked == false) {
                telInitializerbbpp.tele_interactEvent("TOUCH", "speaker");
                _this.speakerbtn.inputEnabled = false;
                _this.speakerbtn.input.useHandCursor = false;
                _this.clickSound.play();
                _this.Q4_askQ4VoiceQuestion();

                _this.time.events.add(4000, function () {
                    _this.speakerbtnClicked = false;
                    _this.Q4_EnableVoice();

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

        _this.numGroup = _this.add.group();
        _this.objGroup = _this.add.group();

        //_this.KFsitting =_this.add.image(1,1,'kingfisher_sitting');
        //_this.KFsitting.visible = false;
        _this.fish_1 = _this.add.sprite(1, 1, 'Fish_1');
        _this.fish_1.visible = false;

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
        _this.Bubbles1.animations.play('Bubbles', 5, true);

        _this.Bubbles2 = _this.add.sprite(450, 450, 'Bubbles');
        _this.Bubbles2.name = "Bubbling";
        _this.Bubbles2.anchor.setTo(0.5);
        _this.Bubbles2.scale.setTo(0.8, 0.8);
        _this.Bubbling2 = _this.Bubbles2.animations.add('Bubbles');
        _this.Bubbles2.animations.play('Bubbles', 10, true);

        _this.Bubbles3 = _this.add.sprite(750, 400, 'Bubbles');
        _this.Bubbles3.name = "Bubbling";
        _this.Bubbles3.anchor.setTo(0.5);
        _this.Bubbles3.scale.setTo(0.5, 0.5);
        _this.Bubbling3 = _this.Bubbles3.animations.add('Bubbles');
        _this.Bubbles3.animations.play('Bubbles', 25, true);

        _this.generateStarsForTheScene(6);

        /*var bottomnumpadbg = _this.numGroup.create(0,490,'numpadbg');
        bottomnumpadbg.name = "numpadbg";
        bottomnumpadbg.scale.setTo(0.3,1);*/

        //        //add the sprite for fishbowl with fish swimming in it.
        //        _this.Bowlplace = _this.add.sprite(50, 235, 'Fishbowl');
        //        _this.Bowlplace.name = "fishbowl";
        //        _this.Bowlplace.anchor.setTo(0.5);
        //        _this.Bowlplace.scale.setTo(1,1);
        //        _this.Bowlplace.frame = 0;
        //        //_this.BowlplaceAnim =_this.Bowlplace.animations.add('Fishbowl');
        //        //_this.Bowlplace.animations.play('Fishbowl', 15, true);


        _this.Fish_place = _this.add.sprite(_this.positionX, _this.positionY, 'Fish_1');
        _this.Fish_place.name = "fish1swimmingbowl";
        _this.Fish_place.anchor.setTo(0.6)
        _this.Fish_place.scale.setTo(0.4, 0.4);

        _this.fish1AnimPond = _this.Fish_place.animations.add('Fish_1');
        _this.Fish_place.animations.play('Fish_1', 50, true, false);

        _this.pondBoundaryX = 58;
        _this.pondBoundaryY = 300;

        _this.PondX = 58;
        _this.PondY = 300;
        _this.fishSwimmingPond();


        _this.Nest = _this.add.sprite(35, 122, 'Nest');
        _this.Nest.name = "Nest";
        _this.Nest.anchor.setTo(0.5);
        _this.Nest.scale.setTo(0.5, 0.5);
        _this.Nest.frame = 1;

        _this.KF_place = _this.add.image(54, 103, 'kingfisher_sitting');
        _this.KF_place.scale.setTo(1, 1);
        _this.KF_place.anchor.setTo(0.5);
        _this.KF_place.inputEnabled = true;

        _this.KF_place.visible = true;

        // 4 index used to point to the 3 level arrays+ options array. We will shuffle these arrays and ask questions to make it unique and random.
        _this.birdsittinglevel_index = 0;
        _this.fishlevel_index = 0;
        _this.fourthQOption_index = 0;
        _this.rightAns;
        _this.repeat1 = 1;



        //line1 = new Phaser.Line(0, _this.Q4_skyzone0.y, 960, _this.Q4_skyzone0.y);
        //_this.line1 = new Phaser.Line(0, 10, 960, 500);
        // _this.line1.color = "Green";
        // _this.line1.visible = true;
        // //_this.debug.ge(line1);
        //line1.

        //  _this.graphics1 = this.add.graphics({x: 400, y: 300});
        // console.log(_this.graphics1);
        //drawStar(starGraphics, 0, 0, 5, 200, 100, 0xFFFF00, 0xFF0000);
        // starGraphics.rotation = Math.random();
        //lineRectangle = this.add.graphics({x: 400, y: 300});
        // lineRectangle.lineStyle(5, 0xff0000, 1.0);
        //lineRectangle.fillStyle(0x0000FF, 1.0);
        // lineRectangle.strokeRect(-100, -100, 200, 200);

        // _this.graphics1.lineStyle(2, 0xFFFFFF, 1.0);
        //_this.graphics1.setLineDash([5]);
        //  _this.graphics1.moveTo(100, 270);
        //  _this.graphics1.lineTo(200, 500);
        //_this.Initial_FlyAway_Fn();

        _this.getQuestion();

    },


    updateTimer: function () {
        _this.counterForTimer++;
        ////console.log("lololil"+counterForTimer);
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
        _this.sceneCount++;
        _this.birdchirp.play();
        _this.Waterbubble.play();

        _this.Waterbubble.addEventListener('ended', function () {
            _this.Waterbubble.currentTime = 0;
            _this.Waterbubble.play();
            _this.Waterbubble1.play();
        }, false);


        _this.scale = _this.add.sprite(970, 255, 'level_scale');
        _this.scale.visible = true;
        _this.scale.scale.setTo(1, 1);
        _this.scale.anchor.setTo(0.5);
        _this.scale.frame = 0;

        _this.scaleTween = _this.add.tween(_this.scale);
        _this.scaleTween.to({ x: 910, y: 255 }, 1500, 'Linear', true, 0);
        _this.scaleTween.start();

        _this.Initiate_Game_Fn();
        _this.gotoFourthQuestion();

        //_this.initialTween2 = _this.add.tween(_this.KF_place).to( { alpha: 1 }, 3000, 'Linear', false, 0);

        // hover after 3 seconds - on complete call hovering function
        // _this.initialTween2.onComplete.add(_this.Initial_FlyAway_Fn);

        // _this.initialTween2.start();
        _this.questionid = 1;
    },

    Initial_FlyAway_Fn() {
        _this.KFcalls.volume = 1;
        _this.KFcalls.play();
        //fly away from screen and then call initiate game function to start the questions
        _this.KF_place.visible = false;
        _this.initial_flying = _this.add.sprite(1, 1, 'KingFisher_JumpingWater');
        _this.initial_flying.name = "KF_JumpingWater";
        _this.initial_flying.anchor.setTo(0.5);
        _this.initial_flying.scale.setTo(0.8, 0.8);
        _this.initial_flying.angle = -40;
        _this.initial_flyAnim = _this.initial_flying.animations.add('KingFisher_JumpingWater');
        _this.initial_flying.animations.play('KingFisher_JumpingWater', 90, true, false);
        _this.initial_flying.x = 54;
        _this.initial_flying.y = 103;
        _this.initialTween3 = _this.add.tween(_this.initial_flying);
        _this.initialTween3.onComplete.add(_this.Initiate_Game_Fn);
        _this.initialTween3.to({ x: 1100, y: 200 }, 2200, 'Linear', false, 0);
        _this.initialTween3.start();

        _this.scale = _this.add.sprite(970, 255, 'level_scale');
        _this.scale.visible = true;
        _this.scale.scale.setTo(1, 1);
        _this.scale.anchor.setTo(0.5);
        //_this.scaleAnim =_this.scale.animations.add('level_scale');
        _this.scaleAnim = _this.scale.animations.add('level_scale', [0, 6, 11], true);
        _this.scale.frame = 0;
        // final position of center of the scale 910,255,
        // set the scale visible and tween it to correct position on screen.
        _this.scaleTween = _this.add.tween(_this.scale);
        _this.scaleTween.to({ x: 910, y: 255 }, 1500, 'Linear', true, 0);
        _this.scaleTween.start();

        //highlight the number scale when the bird just crosses it.
        _this.time.events.add(500, function () {


            _this.scale.animations.play('level_scale', 5, true);

            _this.time.events.add(1800, function () {
                _this.scale.animations.stop();
                _this.scale.frame = 0;
            });
        });

    },

    Initiate_Game_Fn: function () {
        _this.KF_place.visible = true;
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

        _this.Q4_OptionsArray = [1, 2];
        _this.Q4_OptionsArray = _this.shuffle(_this.Q4_OptionsArray);

        _this.Q4_KFQnArray = [0, 1, 2, 3, 4, 5];
        _this.Q4_KFQnArray = _this.shuffle(_this.Q4_KFQnArray);

        _this.Q4_fishQnArray = [-1, -2, -3, -4, -5];
        _this.Q4_fishQnArray = _this.shuffle(_this.Q4_fishQnArray);

        //_this.stopOtherVoice();
        //reset the bird chirp volume to low
        _this.birdchirp.volume = 0.3;
        _this.KFcalls.volume = 0.3;

        //_this.gotoFourthQuestion();

    },

    stopOtherVoice: function () {

        //stop any of the other voices being played.
        //if (_this.birdchirp.)
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

    stopVoice: function () {

        if (_this.playQuestionSound1) {
            if (_this.playQuestionSound1.contains(_this.src)) {
                _this.playQuestionSound1.removeChild(_this.src);
                _this.src = null;
            }

            if (!_this.playQuestionSound1.paused) {
                //console.log("here");
                _this.playQuestionSound1.pause();
                _this.playQuestionSound1.currentTime = 0.0;
            }
            _this.playQuestionSound1 = null;
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

    gotoFourthQuestion: function () {

        _this.Q3stars1 = _this.add.sprite(390, 10, 'starAnim');//_this.world.centerX-20
        _this.Q3stars1.frame = 35;
        _this.Q3stars2 = _this.add.sprite(420, 10, 'starAnim');//_this.world.centerX-20
        _this.Q3stars2.frame = 35;
        _this.Q3stars3 = _this.add.sprite(450, 10, 'starAnim');//_this.world.centerX-20
        _this.Q3stars3.frame = 35;

        _this.Q4_EnableVoice();

        _this.Q4_Options = _this.Q4_OptionsArray[_this.fourthQOption_index];
        _this.Q4_KFQn = _this.Q4_KFQnArray[_this.birdsittinglevel_index];
        _this.Q4_fishQn = _this.Q4_fishQnArray[_this.fishlevel_index];

        //_this.Q4_Options = 2;
        //_this.Q4_KFQn = 2;

        _this.Q4_QnOptions();

    },


    Q4_QnOptions: function () {

        _this.speakerbtn.inputEnabled = false;

        switch (_this.Q4_Options) {
            case 1: _this.Q4_gotoQ4Option1();
                break;
            case 2: _this.Q4_gotoQ4Option2();
                break;

        }
    },


    Q4_gotoQ4Option1: function () {
        _this.Q4_askQ4VoiceQuestion();


        _this.KF_place.inputEnabled = true;

        _this.time.events.add(3000, function () {
            _this.KF_place.scale.setTo(1.2, 1.2);
            _this.scale.animations.play('level_scale', 5, true);

            _this.time.events.add(3000, function () {
                _this.scale.animations.stop();
                _this.scale.frame = 0;
            })

        });

        _this.KF_place.input.enableDrag(true);
        _this.initial_KFplace1 = _this.KF_place.x;
        _this.initial_KFplace2 = _this.KF_place.y;
        console.log(_this.initial_KFplace1);
        console.log(_this.initial_KFplace2);
        _this.KF_place.input.useHandCursor = true;
        _this.KF_place.events.onInputDown.add(_this.Q4_KFClicked, _this.KF_place);
        _this.KF_place.events.onDragStop.add(_this.Q4_treeChecklevel, _this.KF_place);
        _this.Q4_valButton();

        _this.Fish_place.inputEnabled = false;

    },


    Q4_gotoQ4Option2: function () {

        _this.Q4_askQ4VoiceQuestion();

        _this.KF_place.inputEnabled = false;
        _this.Fish_place.inputEnabled = true;
        _this.Fish_place.input.useHandCursor = true;


        _this.Fish_place.input.enableDrag(true);
        console.log(_this.Fish_place.x);
        console.log(_this.Fish_place.y);
        _this.initialFish_place1 = _this.Fish_place.x;
        _this.initialFish_place2 = _this.Fish_place.y;


        _this.Fish_place.events.onDragStop.add(_this.Q4_FishChecklevel, _this.Fish_place);
        _this.Fish_place.events.onInputDown.add(_this.Q4_FishClicked, _this.Fish_place);

        _this.Q4_valButton();

        _this.time.events.add(3000, function () {
            _this.tween_3BPond.stop();
            _this.tween_3APond.stop();
            //_this.Fish_place.x = _this.PondX+20;
            //_this.Fish_place.y = _this.PondY;
            _this.Fish_place.scale.setTo(0.5, 0.5);

            //_this.Fish_place.animations.stop();
            _this.scale.animations.play('level_scale', 5, true);
            _this.time.events.add(3000, function () {
                _this.scale.animations.stop();
                _this.scale.frame = 0;
            })

        });
    },

    Q4_EnableVoice: function () {

        console.log("SBtn: " + _this.speakerbtnClicked + " RBtn: " + _this.rightbtnClicked);

        if (_this.speakerbtnClicked == false && _this.rightbtnClicked == false) {
            _this.speakerbtn.inputEnabled = true;
            _this.speakerbtn.input.useHandCursor = true;
            _this.speakerbtnClicked = false;

        }

    },

    Q4_askQ4VoiceQuestion: function () {

        if (_this.speakerbtnClicked == false && _this.rightbtnClicked == false) {
            _this.speakerbtnClicked = true;
            _this.Q4_askQ4VoiceQuestionProcess();

            _this.time.events.add(4000, function () {
                _this.speakerbtnClicked = false;
                _this.Q4_EnableVoice();
            });
        }
    },


    Q4_askQ4VoiceQuestionProcess: function () {

        if (_this.Q4_Options == 1) {
            _this.getVoice2();
        }
        else if (_this.Q4_Options == 2) {
            _this.getVoice3();
        }
    },



    //    getVoice:function()
    //    {
    //        //_this.stopVoice();
    //
    //        _this.playQuestionSound = document.createElement('audio');
    //        _this.src = document.createElement('source');
    //        _this.src.autoplay = false;
    //        
    //        switch(_this.Q4_Options)
    //        {
    //            case 1: _this.src.setAttribute("src", "questionSounds/NS-INT-4-G6/English/place_the_bird_in.mp3");
    //                    break;
    //            case 2: _this.src.setAttribute("src", "questionSounds/NS-INT-4-G6/English/place_the_fish_in.mp3");
    //                        break; 
    //
    //        }
    //        
    //        _this.playQuestionSound.appendChild(_this.src);
    //        var playPromise = _this.playQuestionSound.play();
    //    },


    getVoice2: function () {
        //_this.stopVoice();
        _this.playQuestionSound1 = document.createElement('audio');
        _this.src = document.createElement('source');
        _this.src.autoplay = false;

        switch (_this.Q4_KFQn) {
            case 0: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-4-G6/" + _this.languageSelected + "/bird-zr.mp3");
                break;
            case 1: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-4-G6/" + _this.languageSelected + "/bird-pl-1.mp3");
                break;
            case 2: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-4-G6/" + _this.languageSelected + "/bird-pl-2.mp3");
                break;
            case 3: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-4-G6/" + _this.languageSelected + "/bird-pl-3.mp3");
                break;
            case 4: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-4-G6/" + _this.languageSelected + "/bird-pl-4.mp3");
                break;
            case 5: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-4-G6/" + _this.languageSelected + "/bird-pl-5.mp3");
                break;
        }

        _this.playQuestionSound1.appendChild(_this.src);
        var playPromise = _this.playQuestionSound1.play();

        _this.time.events.add(6000, function () { _this.Q4_EnableVoice(); });
    },

    getVoice3: function () {
        //_this.stopVoice();

        _this.playQuestionSound1 = document.createElement('audio');
        _this.src = document.createElement('source');
        _this.src.autoplay = false;

        switch (_this.Q4_fishQn) {

            case -1: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-4-G6/" + _this.languageSelected + "/fish-mns-1.mp3");
                break;
            case -2: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-4-G6/" + _this.languageSelected + "/fish-mns-2.mp3");
                break;
            case -3: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-4-G6/" + _this.languageSelected + "/fish-mns-3.mp3");
                break;
            case -4: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-4-G6/" + _this.languageSelected + "/fish-mns-4.mp3");
                break;
            case -5: _this.src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-4-G6/" + _this.languageSelected + "/fish-mns-5.mp3");
                break;
        }

        _this.playQuestionSound1.appendChild(_this.src);
        var playPromise = _this.playQuestionSound1.play();
        _this.time.events.add(6000, function () { _this.Q4_EnableVoice(); });
    },

    Q4_KFClicked: function (target) {
        _this.vx = target.x;
        _this.vy = target.y;
        target.angle = 0;

        _this.Nest.frame = 1;

        _this.clickSound.play();
        _this.reset = 1;

    },

    Q4_FishClicked: function (target) {


        _this.vx = target.x;
        _this.vy = target.y;
        _this.clickSound.play();


        _this.reset = 2;

    },

    Q4_treeChecklevel: function (target) {


        if (_this.Q4_checkOverlap(target, _this.Q4_skyzone0)) {
            //console.log("insider");
            target.visible = true;

            if (_this.Q4_skyzone0.visible == false) {
                _this.Q4_skyzone0.visible = true;
            }

            _this.Q4_skyzone0.visible = true;

            _this.rightAns = 0;
            _this.positionX = 415;
            _this.positionY = 255;
            //_this.Q4_KFsitting(_this.positionX,_this.positionY);
            target.x = _this.positionX;
            target.y = _this.positionY;
            target.angle = 10;
            _this.rightbtn.events.onInputDown.add(_this.Q4_KFvalidation, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q4_eraseClicked, _this);

        }

        else if (_this.Q4_checkOverlap(target, _this.Q4_skyzone1)) {
            //console.log("insider");
            target.visible = true;

            if (_this.Q4_skyzone1.visible == false) {
                _this.Q4_skyzone1.visible = true;
            }

            _this.Q4_skyzone1.visible = true;

            _this.rightAns = 1;
            _this.positionX = 485;
            _this.positionY = 215;
            //_this.Q4_KFsitting(_this.positionX,_this.positionY);
            target.x = _this.positionX;
            target.y = _this.positionY;
            target.angle = 10;
            _this.rightbtn.events.onInputDown.add(_this.Q4_KFvalidation, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q4_eraseClicked, _this);

        }
        else if (_this.Q4_checkOverlap(target, _this.Q4_skyzone2)) {
            //console.log("insider");
            target.visible = true;

            if (_this.Q4_skyzone2.visible == false) {
                _this.Q4_skyzone2.visible = true;
            }

            _this.Q4_skyzone2.visible = true;
            _this.rightAns = 2;
            _this.positionX = 420;
            _this.positionY = 175;
            //_this.Q4_KFsitting(_this.positionX,_this.positionY);
            target.x = _this.positionX;
            target.y = _this.positionY;
            target.angle = 10;
            _this.rightbtn.events.onInputDown.add(_this.Q4_KFvalidation, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q4_eraseClicked, _this);


        }
        else if (_this.Q4_checkOverlap(target, _this.Q4_skyzone3)) {
            //console.log("insider");
            target.visible = true;

            if (_this.Q4_skyzone3.visible == false) {
                _this.Q4_skyzone3.visible = true;
            }

            _this.Q4_skyzone3.visible = true;
            _this.rightAns = 3;
            _this.positionX = 575;
            _this.positionY = 137;
            //_this.Q4_KFsitting(_this.positionX,_this.positionY);
            target.x = _this.positionX;
            target.y = _this.positionY;
            target.angle = 10;
            _this.rightbtn.events.onInputDown.add(_this.Q4_KFvalidation, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q4_eraseClicked, _this);


        }
        else if (_this.Q4_checkOverlap(target, _this.Q4_skyzone4)) {
            //console.log("insider");
            target.visible = true;

            if (_this.Q4_skyzone4.visible == false) {
                _this.Q4_skyzone4.visible = true;
            }

            _this.Q4_skyzone4.visible = true;
            _this.rightAns = 4;
            _this.positionX = 312;
            _this.positionY = 100;
            //_this.Q4_KFsitting(_this.positionX,_this.positionY);
            target.x = _this.positionX;
            target.y = _this.positionY;
            target.angle = 10;
            _this.rightbtn.events.onInputDown.add(_this.Q4_KFvalidation, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q4_eraseClicked, _this);


        }
        else if (_this.Q4_checkOverlap(target, _this.Q4_skyzone5)) {
            //console.log("insider");
            target.visible = true;

            if (_this.Q4_skyzone5.visible == false) {
                _this.Q4_skyzone5.visible = true;
            }

            _this.Q4_skyzone5.visible = true;
            _this.rightAns = 5;
            _this.positionX = 375;
            _this.positionY = 62;
            //_this.Q4_KFsitting(_this.positionX,_this.positionY);
            target.x = _this.positionX;
            target.y = _this.positionY;
            target.angle = 10;
            _this.rightbtn.events.onInputDown.add(_this.Q4_KFvalidation, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q4_eraseClicked, _this);

        }

        else {
            target.x = _this.vx;
            target.y = _this.vy;
        }
        console.log(_this.KF_place.x);
        console.log(_this.KF_place.y);

    },


    Q4_FishChecklevel: function (target) {

        if (_this.Q4_checkOverlap(target, _this.Q4_pondzone1)) {
            //console.log("insider");
            console.log("-1");
            target.visible = true;

            if (_this.Q4_pondzone1.visible == false) {
                _this.Q4_pondzone1.visible = false;
            }

            //_this.Q4_pondzone1.visible = true;
            _this.rightAns = -1;
            _this.positionX = 100;
            _this.positionY = 295;
            //_this.Q4_fishSwimming(_this.positionX,_this.positionY);
            //_this.Fish_place.x=_this.positionX;
            _this.Fish_place.y = _this.positionY;
            if (_this.Fish_place.x > 600) {
                _this.Fish_place.x = 600;
            }
            _this.rightbtn.events.onInputDown.add(_this.Q4_Fishvalidation, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q4_eraseClicked, _this);


        }
        else if (_this.Q4_checkOverlap(target, _this.Q4_pondzone2)) {
            //console.log("insider");
            console.log("-2")
            target.visible = true;

            if (_this.Q4_pondzone2.visible == false) {
                _this.Q4_pondzone2.visible = false;
            }

            //_this.Q4_pondzone2.visible = true;
            _this.rightAns = -2;
            _this.positionX = 200;
            _this.positionY = 336;
            //_this.Fish_place.x=_this.positionX;
            _this.Fish_place.y = _this.positionY;
            if (_this.Fish_place.x > 600) {
                _this.Fish_place.x = 600;
            }

            // _this.Q4_fishSwimming(_this.positionX,_this.positionY);                            
            _this.rightbtn.events.onInputDown.add(_this.Q4_Fishvalidation, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q4_eraseClicked, _this);
        }
        else if (_this.Q4_checkOverlap(target, _this.Q4_pondzone3)) {
            //console.log("insider");
            target.visible = true;

            if (_this.Q4_pondzone3.visible == false) {
                _this.Q4_pondzone3.visible = false;
            }

            //_this.Q4_pondzone3.visible = true;
            _this.rightAns = -3;
            _this.positionX = 200;
            _this.positionY = 375;
            //_this.Fish_place.x=_this.positionX;
            _this.Fish_place.y = _this.positionY;
            if (_this.Fish_place.x > 600) {
                _this.Fish_place.x = 600;
            }


            //_this.Q4_fishSwimming(_this.positionX,_this.positionY);                            
            _this.rightbtn.events.onInputDown.add(_this.Q4_Fishvalidation, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q4_eraseClicked, _this);
        }
        else if (_this.Q4_checkOverlap(target, _this.Q4_pondzone4)) {
            //console.log("insider");
            target.visible = true;

            if (_this.Q4_pondzone4.visible == false) {
                _this.Q4_pondzone4.visible = false;
            }

            //_this.Q4_pondzone4.visible = true;
            _this.rightAns = -4;
            _this.positionX = 200;
            _this.positionY = 413;
            //_this.Fish_place.x=_this.positionX;
            _this.Fish_place.y = _this.positionY;
            if (_this.Fish_place.x > 600) {
                _this.Fish_place.x = 600;
            }

            //_this.Q4_fishSwimming(_this.positionX,_this.positionY);                            
            _this.rightbtn.events.onInputDown.add(_this.Q4_Fishvalidation, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q4_eraseClicked, _this);
        }
        else if (_this.Q4_checkOverlap(target, _this.Q4_pondzone5)) {
            //console.log("insider");
            target.visible = true;

            if (_this.Q4_pondzone5.visible == false) {
                _this.Q4_pondzone5.visible = false;
            }

            //_this.Q4_pondzone5.visible = true;
            _this.rightAns = -5;
            _this.positionX = 200;
            _this.positionY = 455;
            //_this.Fish_place.x=_this.positionX;
            _this.Fish_place.y = _this.positionY;
            if (_this.Fish_place.x > 600) {
                _this.Fish_place.x = 600;
            }

            //_this.Q4_fishSwimming(_this.positionX,_this.positionY);                            
            _this.rightbtn.events.onInputDown.add(_this.Q4_Fishvalidation, _this);
            _this.wrongbtn.events.onInputDown.add(_this.Q4_eraseClicked, _this);
        }

        else {
            target.x = _this.vx;
            target.y = _this.vy;

        }




    },

    Q4_checkOverlap: function (spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },

    //    Q4_KFsitting: function(positionX, positionY){
    //
    //        _this.KFsitting =_this.add.image(_this.positionX, _this.positionY,'kingfisher_sitting');
    //        _this.KFsitting.angle = 10;
    //        
    //        //_this.objGroup.add(_this.KFsitting);
    //
    //    },

    Q4_fishSwimming: function (positionX, positionY) {


        _this.fish_1 = _this.add.sprite(_this.positionX, _this.positionY, 'Fish_1');
        _this.fish_1.name = "fish1swimming";

        _this.fish1Anim = _this.fish_1.animations.add('Fish_1');
        _this.fish_1.animations.play('Fish_1', 50, true, false);

        _this.fish_1.anchor.setTo(0.6)
        _this.fish_1.scale.setTo(0.5, 0.5);
        _this.fish_1.scale.x *= -1;
        _this.tween_3A = _this.add.tween(_this.Fish_place);
        _this.tween_3B = _this.add.tween(_this.Fish_place);
        _this.Q4_tween_3BComplete();

    },

    Q4_tween_3AComplete: function () {

        _this.Fish_place.scale.x *= -1;
        _this.tween_3B = _this.add.tween(_this.Fish_place);
        _this.tween_3B.to({ x: 100, y: _this.positionY }, 6000, 'Linear', false, 0);
        _this.tween_3B.onComplete.add(_this.Q4_tween_3BComplete, _this);
        _this.tween_3B.start();


    },

    Q4_tween_3BComplete: function () {

        _this.Fish_place.scale.x *= -1;
        _this.tween_3A = _this.add.tween(_this.Fish_place);
        _this.tween_3A.to({ x: 800, y: _this.positionY }, 6000, 'Linear', false, 0);
        _this.tween_3A.onComplete.add(_this.Q4_tween_3AComplete, _this);
        _this.tween_3A.start();

    },

    //this is called in case correct answer is given in option 3 - where is the fish
    Q4_kingFisherJumping: function () {

        //king fisher jumping to water sprite. stop the fish if required.
        //_this.tween_3A.stop();
        //_this.tween_3B.stop();
        //calculate the slop of the bird. the first bird tweens till the water level. 
        //then change the bird to inside water sprite of the bird. same happens while returning back.
        // x3 is the point where the bird meets the water based on the slope calculated.
        // water level is known as somewhere in the mid of the screen.

        var x1 = 1;
        var y1 = 1;

        var x2 = _this.Fish_place.x;
        var y2 = _this.Fish_place.y;

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
        _this.tween_1.onComplete.add(_this.Q4_tween_1Complete, _this);
        _this.tween_1.to({ x: _this.waterlevel_x, y: _this.waterlevel_y }, 700, 'Linear', false, 0);
        _this.tween_1.start();

    },

    Q4_tween_1Complete: function (target) {

        _this.KF_InsideWater = _this.add.sprite(_this.waterlevel_x, _this.waterlevel_y, 'KingFisher_InsideWater');
        _this.Watersplash.play();

        _this.Waterbubble.currentTime = 0;
        _this.Waterbubble1.currentTime = 0;
        _this.Waterbubble.play();
        _this.Waterbubble1.play();

        _this.KF_InsideWater.name = "KingFisher_InsideWater";
        _this.KF_InsideWater.anchor.setTo(0.5);
        _this.KF_InsideWater.scale.setTo(0.8, 0.8);
        _this.InsideWater = _this.KF_JumpingWater.animations.add('KingFisher_InsideWater');
        _this.KF_InsideWater.animations.play('KingFisher_InsideWater', 50, true, false);
        //_this.KingFisher_InsideWater.x = 100;
        //_this.KingFisher_InsideWater.y = 0;
        _this.tween_1A = _this.add.tween(_this.KF_InsideWater);
        _this.tween_1A.onComplete.add(_this.Q4_tween_1AComplete, _this);

        //change tween time based on the fish level since it needs more time for lower levels to travel.
        if (_this.Q4_fishQn == -1) {
            _this.tween_1A.to({ x: _this.Fish_place.x - 10, y: _this.Fish_place.y - 10 }, 200, 'Linear', false, 0);
        }
        else if (_this.Q4_fishQn == -2) {
            _this.tween_1A.to({ x: _this.Fish_place.x - 10, y: _this.Fish_place.y - 10 }, 350, 'Linear', false, 0);

        }
        else if (_this.Q4_fishQn == -3) {
            _this.tween_1A.to({ x: _this.Fish_place.x - 10, y: _this.Fish_place.y - 10 }, 400, 'Linear', false, 0);
        }
        else if (_this.Q4_fishQn == -4) {
            _this.tween_1A.to({ x: _this.Fish_place.x - 10, y: _this.Fish_place.y - 10 }, 600, 'Linear', false, 0);
        }
        else if (_this.Q4_fishQn == -5) {
            _this.tween_1A.to({ x: _this.Fish_place.x - 10, y: _this.Fish_place.y - 10 }, 800, 'Linear', false, 0);
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

    Q4_tween_1AComplete: function (target) {

        //king fisher coming back from water sprite inside the water
        _this.fish_1.destroy();
        _this.KF_InsideWater.destroy();
        _this.Fish_place.visible = false;



        _this.KF_WaterComingUp = _this.add.sprite(500, 400, 'KingFisher_ComingUpWater');
        _this.KF_WaterComingUp.name = "KingFisher_ComingUpWater";
        _this.KF_WaterComingUp.anchor.setTo(0.5);
        _this.KF_WaterComingUp.scale.setTo(0.8, 0.8);
        _this.KF_WaterComingUp.scale.x *= -1;
        _this.ComingUpWater = _this.KF_WaterComingUp.animations.add('KingFisher_ComingUpWater');
        _this.KF_WaterComingUp.animations.play('KingFisher_ComingUpWater', 20, true, false);

        //remove the jumping water image


        // assign fish position to KF coming up in water and then destroy fish.
        _this.KF_WaterComingUp.x = _this.Fish_place.x;
        _this.KF_WaterComingUp.y = _this.Fish_place.y;



        _this.tween_1B = _this.add.tween(_this.KF_WaterComingUp);

        _this.tween_1B.to({ Angle: 45, x: 800, y: 280 }, 1000, 'Linear', false, 0);
        _this.tween_1B.onComplete.add(_this.Q4_tween_1BComplete, _this);



        _this.tween_1B.start();

    },


    Q4_tween_1BComplete: function (target) {

        _this.KF_WaterComingUp.destroy();

        _this.Watersplash.play();

        _this.KF_ComingUp = _this.add.sprite(500, 400, 'KingFisher_ComingUp');
        _this.KF_ComingUp.name = "KingFisher_ComingUp";
        _this.KF_ComingUp.anchor.setTo(0.5);
        _this.KF_ComingUp.scale.setTo(0.8, 0.8);
        _this.KF_ComingUp.scale.x *= -1;
        _this.ComingUp = _this.KF_ComingUp.animations.add('KingFisher_ComingUp');
        _this.KF_ComingUp.animations.play('KingFisher_ComingUp', 20, true, false);


        //remove the jumping water image
        _this.KF_InsideWater.destroy();




        // set starting point same ending point of under water bird. set tween to the fixed position from where KF will reach water level.
        _this.KF_ComingUp.x = 800;
        _this.KF_ComingUp.y = 280;

        _this.tween_1C = _this.add.tween(_this.KF_ComingUp);

        _this.tween_1C.to({ Angle: 0, x: 850, y: 250 }, 600, 'Linear', false, 0);
        _this.tween_1C.onComplete.add(_this.tween_1CComplete, _this);

        //splashing of water happens now while coming up
        _this.SplashWater1 = _this.add.sprite(800, 280, 'SplashWater');
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
        _this.KF_Eatingfish = _this.add.sprite(850, 250, 'KingFisher_Eatingfish');

        //_this.objGroup.add(_this.KF_Eatingfish);
        _this.KF_Eatingfish.name = "KF_Eatingfish";
        _this.KF_Eatingfish.anchor.setTo(0.5);
        _this.KF_Eatingfish.scale.setTo(1.2, 1.2);
        _this.KF_Eatingfish.scale.x *= -1;
        _this.Eatingfish = _this.KF_Eatingfish.animations.add('KingFisher_Eatingfish');
        _this.KF_Eatingfish.animations.play('KingFisher_Eatingfish', 15, true);

    },


    Q4_valButton: function () {


        //var bottomnumpadbg = _this.numGroup.create(0,490,'numpadbg');
        //bottomnumpadbg.name = "numpadbg";

        _this.wrongbtn = _this.numGroup.create(440, 505, 'Numberpad');
        //_this.wrongbtn = _this.add.sprite(_this.x+136,508,'Numberpad');
        _this.wrongbtn.frame = 12;
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(1, 1);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        //_this.wrongbtn.events.onInputDown.add(_this.Q4_eraseClicked,_this);

        _this.rightbtn = _this.numGroup.create(520, 505, 'Numberpad');
        //_this.rightbtn = _this.add.sprite(_this.x+204,508,'Numberpad');
        _this.rightbtn.frame = 13;
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1, 1);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        //_this.rightbtn.events.onInputDown.add(_this.Q4_validatefn,_this);

    },


    Q4_eraseClicked: function (target) {

        if (_this.wrongbtnClicked == false) {
            _this.wrongbtnClicked = true;
            console.log("going inside wrong btn");
            _this.clickSound.play();
            _this.Q4_eraseScreen();
            this.wrongbtnClicked = false;
        }

    },

    Q4_eraseScreen: function () {

        console.log("_this.reset is: " + _this.reset);

        if (_this.reset == 1 || _this.reset == 3) {

            //_this.KFsitting.destroy();
            _this.KF_place.x = _this.initial_KFplace1;
            _this.KF_place.y = _this.initial_KFplace2;
            _this.KF_place.angle = 0;
            console.log(_this.KF_place.x);
            console.log(_this.KF_place.y);


            _this.KF_place.visible = true;
            _this.KF_place.inputEnabled = true;
            _this.KF_place.input.useHandCursor = true;
            //_this.KF_place.events.onInputDown.add(_this.Q4_KFClicked,_this);
            _this.Fish_place.inputEnabled = false;
            _this.rightAns = null;


        }
        else if (_this.reset == 2 || _this.reset == 4) {

            _this.Fish_place.x = _this.initialFish_place1;
            _this.Fish_place.y = _this.initialFish_place2;
            console.log(_this.Fish_place.x);
            console.log(_this.Fish_place.y);


            //_this.fish_1.destroy();
            _this.Fish_place.visible = true;
            _this.Fish_place.inputEnabled = true;
            _this.KF_place.inputEnabled = false;
            _this.Fish_place.input.useHandCursor = true;
            //_this.Fish_place.events.onInputDown.add(_this.Q4_FishClicked,_this.Fish_place);

            _this.KF_place.inputEnabled = false;

            _this.rightAns = null;
        }

    },

    Q4_DisableRightBtnClick: function () {
        _this.rightbtn.inputEnabled = false;
        _this.rightbtn.events.onInputDown.removeAll();

    },

    Q4_DisableWrongBtnClick: function () {

        _this.wrongbtn.inputEnabled = false;
        _this.wrongbtn.events.onInputDown.removeAll();

    },

    Q4_KFvalidation: function (target) {

        if (_this.rightbtnClicked == false) {
            _this.rightbtnClicked = true;
            _this.Q4_KFvalidationProcess(target);
            //console.log("Rightbtn clicked made false after validation");
            //_this.rightbtnClicked = false;
        }
    },


    Q4_KFvalidationProcess: function (target) {
        console.log(target.name);


        _this.rightbtn.inputEnabled = false;
        _this.clickSound.play();
        _this.rightbtn.events.onInputDown.removeAll();
        _this.wrongbtn.events.onInputDown.removeAll();
        _this.rightbtn.inputEnabled = false;
        _this.wrongbtn.inputEnabled = false;
        _this.speakerbtn.inputEnabled = false;
        _this.speakerbtn.input.useHandCursor = false;


        if (_this.Q4_KFQn == 0 || _this.Q4_KFQn == 1 || _this.Q4_KFQn == 2 || _this.Q4_KFQn == 3 || _this.Q4_KFQn == 4 || _this.Q4_KFQn == 5) {
            if (_this.Q4_KFQn == _this.rightAns) {
                _this.celebrationSound.play();
                _this.starActions();
                _this.Bird_FlyAway_Fn();

                // ready the index for next question. if it exceeds 2, shuffle the array again and reset the index to zero.
                _this.fourthQOption_index += 1;

                if (_this.fourthQOption_index > 1) {
                    console.log("Now shuffling: ");
                    _this.Q4_OptionsArray = _this.shuffle(_this.Q4_OptionsArray);
                    _this.fourthQOption_index = 0;
                }
                _this.birdsittinglevel_index += 1;

                _this.time.events.add(3000, _this.Q4_gotonext);
                //_this.reset=1;

            }
            else {
                _this.wrongSound.play();
                _this.shake.shake(10, _this.KF_place);
                _this.reset = 3;


                _this.time.events.add(1000, function () {
                    console.log("RBtn being made false when wrong answer");
                    _this.rightbtnClicked = false;
                    _this.rightbtn.inputEnabled = true;
                    _this.rightbtn.input.useHandCursor = true;
                    _this.wrongbtn.inputEnabled = true;
                    _this.wrongbtn.input.useHandCursor = true;
                    _this.Q4_eraseScreen();
                    _this.Q4_EnableVoice();
                    _this.Q4_QnOptions();
                });

            }
        }

    },

    Q4_Fishvalidation: function (Fish_place) {

        if (_this.rightbtnClicked == false) {
            _this.rightbtnClicked = true;
            _this.Q4_FishvalidationProcess(Fish_place);
            //console.log("Rightbtn clicked made false after validation");
            //_this.rightbtnClicked = false;
        }
    },

    Q4_FishvalidationProcess: function (target) {

        _this.rightbtn.inputEnabled = false;

        _this.clickSound.play();

        _this.rightbtn.events.onInputDown.removeAll();
        _this.wrongbtn.events.onInputDown.removeAll();
        _this.speakerbtn.inputEnabled = false;
        _this.speakerbtn.input.useHandCursor = false;

        _this.wrongbtn.inputEnabled = false;

        if (_this.Q4_fishQn == -1 || _this.Q4_fishQn == -2 || _this.Q4_fishQn == -3 || _this.Q4_fishQn == -4 || _this.Q4_fishQn == -5) {
            if (_this.Q4_fishQn == _this.rightAns) {
                _this.celebrationSound.play();

                _this.Q4_kingFisherJumping();
                _this.starActions();

                // ready the index for next question. if it exceeds 2, shuffle the array again and reset the index to zero.
                _this.fourthQOption_index += 1;

                if (_this.fourthQOption_index > 1) {
                    console.log("Now shuffling: ");
                    _this.Q4_OptionsArray = _this.shuffle(_this.Q4_OptionsArray);
                    _this.fourthQOption_index = 0;
                }

                _this.fishlevel_index += 1;
                _this.time.events.add(4000, _this.Q4_gotonext);

            }
            else {
                _this.wrongSound.play();
                _this.shake.shake(10, _this.Fish_place);
                _this.reset = 4;
                _this.Fish_place.scale.setTo(0.4, 0.4);

                _this.time.events.add(1000, function () {
                    _this.rightbtnClicked = false;
                    _this.rightbtn.inputEnabled = true;
                    _this.rightbtn.input.useHandCursor = true;
                    _this.wrongbtn.inputEnabled = true;
                    _this.wrongbtn.input.useHandCursor = true;

                    _this.PondX = _this.Fish_place.x;
                    _this.PondY = _this.Fish_place.y;

                    _this.Q4_eraseScreen();
                    _this.Q4_EnableVoice();
                    _this.Q4_QnOptions();



                    _this.fish1AnimPond = _this.Fish_place.animations.add('Fish_1');
                    _this.Fish_place.animations.play('Fish_1', 50, true, false);

                    _this.fishSwimmingPond();
                });


            }
        }

    },

    Bird_FlyAway_Fn(target) {
        //fly away from screen with bird call sound
        console.log(_this.KF_place.x);
        console.log(_this.KF_place.y);
        _this.KFcalls.volume = 1;
        _this.KFcalls.play();
        _this.KF_place.visible = false;
        _this.initial_flying = _this.add.sprite(1, 1, 'KingFisher_JumpingWater');

        _this.initial_flying.name = "KF_JumpingWater";
        _this.initial_flying.anchor.setTo(0.5);
        _this.initial_flying.scale.setTo(0.8, 0.8);
        _this.initial_flying.angle = -40;
        _this.initial_flyAnim = _this.initial_flying.animations.add('KingFisher_JumpingWater');
        _this.initial_flying.animations.play('KingFisher_JumpingWater', 40, true, false);
        _this.initial_flying.x = _this.KF_place.x;
        _this.initial_flying.y = _this.KF_place.y + 25;
        //_this.KFsitting.destroy();
        _this.initialTween3 = _this.add.tween(_this.initial_flying);
        //_this.initialTween3.onComplete.add(_this.Initiate_Game_Fn);
        _this.initialTween3.to({ x: 1100, y: _this.initial_flying.y }, 1500, 'Linear', false, 0);
        _this.initialTween3.start();

    },

    Q4_clearObject: function () {

        _this.sceneCount++;
        _this.AnsTimerCount = 0;
        _this.noofAttempts = 0;
        if (_this.Q4_Options == 1) {
            _this.KF_fadeOut1 = _this.add.tween(_this.KF_place).to({ alpha: 0 }, 500, 'Linear', true, 0);
            _this.KF_fadeOut1.onComplete.add(_this.Q4_destroyObjects);
            //_this.KFsitting.destroy();
            //_this.Q4_destroyObjects;

        }
        else if (_this.Q4_Options == 2) {

            _this.KF_fadeOut2 = _this.add.tween(_this.KF_Eatingfish).to({ alpha: 0 }, 500, 'Linear', true, 0);
            _this.KF_fadeOut2.onComplete.add(_this.Q4_destroyObjects);
            //_this.Q4_destroyObjects;
            //_this.KF_Eatingfish.destroy();
        }

    },

    Q4_destroyObjects: function () {

        _this.objGroup.destroy();
        //_this.numGroup.destroy();

        //_this.Q4_clearObject();
        _this.count1++;
        _this.KF_place.destroy();


        _this.Fish_place.visible = true;
        _this.KF_place.visible = true;
        //_this.KFsitting.visible = true;
        _this.reset = -1;

        _this.rightAns = null;


        if (_this.Q4_Options == 2) {
            _this.Fish_place.scale.setTo(0.4, 0.4);

            _this.fish1AnimPond = _this.Fish_place.animations.add('Fish_1');
            _this.Fish_place.animations.play('Fish_1', 50, true, false);
            _this.PondX = _this.Fish_place.x;
            _this.PondY = _this.Fish_place.y;
            _this.fishSwimmingPond();

        }
        else if (_this.Q4_Options == 1) {
            _this.KF_place.scale.setTo(1, 1);

        }

        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
        _this.rightbtnClicked = false;
        _this.stopOtherVoice();

        _this.Q4_EnableVoice();
        _this.KF_place = _this.add.image(54, 103, 'kingfisher_sitting');
        _this.KF_place.scale.setTo(1, 1);
        _this.KF_place.anchor.setTo(0.5);

        _this.gotoFourthQuestion();

    },


    Q4_gotonext: function () {
        _this.noofAttempts++;
        if (_this.repeat1 < 3) {
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.repeat1++;
            _this.Q4_clearObject();
        }

        else {

            _this.stopOtherVoice();
            _this.timer1.stop();
            _this.timer1 = null;

            _this.time.events.add(50, function () {
                //* transition to score. Score App version will show score menu - home/replay/next.
                //* Score Diksha version will end the session and show the score.
                //* appropriate version of the score should be present in commonjsfiles folder.
                // _this.state.start('score');
                _this.state.start('score', true, false,gameID,_this.microConcepts);
            });

        }


    },


    kingFisherPerch: function (positionX, positionY) {

        _this.kingfisher_sitting = _this.add.image(positionX, positionY, 'kingfisher_sitting');
        _this.kingfisher_sitting.scale.setTo(0.8, 0.8);

    },

    kingFisherHover: function (positionX, positionY) {

        _this.Kingfisher_hovering = _this.add.sprite(positionX, positionY, 'kingfisher_hovering');
        _this.Kingfisher_hovering.name = "Kingfisher_hovering";
        _this.Kingfisher_hovering.anchor.setTo(0.5);
        _this.Kingfisher_hovering.scale.setTo(0.6, 0.6);
        _this.Hovering = _this.Kingfisher_hovering.animations.add('kingfisher_hovering');
        _this.Kingfisher_hovering.animations.play('kingfisher_hovering', 90, true);
    },

    kingFisherHoverYoyo: function (positionX, positionY) {

        _this.Kingfisher_yoyo = _this.add.sprite(positionX, positionY, 'kingfisher_hovering');
        _this.Kingfisher_yoyo.name = "Kingfisher_hovering";
        _this.Kingfisher_yoyo.anchor.setTo(0.5);
        _this.Kingfisher_yoyo.scale.setTo(1, 1);
        _this.Kingfisher_yoyo.scale.x *= -1;
        //_this.Kingfisher_yoyo.scale.y *= -0.75;
        _this.KF_Yoyo = _this.Kingfisher_yoyo.animations.add('kingfisher_hovering');
        _this.Kingfisher_yoyo.animations.play('kingfisher_hovering', 15, true);
        _this.tween_yoyo = _this.add.tween(_this.Kingfisher_yoyo);
        _this.tween_yoyo.to({ angle: 0, x: positionX + 10, y: positionY + 10 }, 1000, 'Quart', false, 0, false, true);
        _this.tween_yoyo.start();
        //_this.tween_yoyo.onComplete.add(_this.tween_3BComplete,_this);
        //_this.tween_yoyo.start();

    },



    fishSwimmingPond: function () {


        if (_this.Fish_place.scale.x > 0) {
            _this.Fish_place.scale.x *= -1;
        }

        _this.Fish_place.x = _this.PondX;
        _this.Fish_place.y = _this.PondY;
        _this.tween_3APond = _this.add.tween(_this.Fish_place);
        _this.tween_3BPond = _this.add.tween(_this.Fish_place);
        _this.swimDown = true;
        _this.DestY = _this.PondY;
        _this.SwimDepth = 13;
        _this.tween_3BCompletePond();

    },

    tween_3ACompletePond: function () {

        if (_this.swimDown == true) {
            console.log("value of Dest y: " + _this.DestY);
            if (_this.DestY + _this.SwimDepth < 475) _this.DestY = _this.DestY + _this.SwimDepth;
            else {
                _this.DestY = 455;
                _this.SwimDown = false;
            }

        }
        else if (_this.swimDown == false) {
            if (_this.DestY - _this.SwimDepth < 280) _this.DestY = _this.DestY - _this.SwimDepth;
            else {
                _this.DestY = 253
                _this.SwimDown = true;
            }

        }

        _this.Fish_place.scale.x *= -1;
        _this.tween_3BPond = _this.add.tween(_this.Fish_place);
        _this.tween_3BPond.to({ x: _this.pondBoundaryX, y: _this.DestY }, 15500, 'Quart', false, 0);
        _this.tween_3BPond.onComplete.add(_this.tween_3BCompletePond);
        _this.tween_3BPond.start();
    },

    tween_3BCompletePond: function () {

        if (_this.swimDown == true) {
            console.log("value of Dest y: " + _this.DestY);
            if (_this.DestY + _this.SwimDepth < 475) _this.DestY = _this.DestY + _this.SwimDepth;
            else {
                _this.DestY = 460;
                _this.SwimDown = false;
            }

        }
        else if (_this.swimDown == false) {
            if (_this.DestY - _this.SwimDepth < 280) _this.DestY = _this.DestY - _this.SwimDepth;
            else {
                _this.DestY = 280;
                _this.SwimDown = true;
            }

        }

        _this.Fish_place.scale.x *= -1;
        _this.tween_3APond = _this.add.tween(_this.Fish_place);
        _this.tween_3APond.to({ x: _this.pondBoundaryX + 650, y: _this.DestY }, 12500, 'Sine', false, 0);
        _this.tween_3APond.onComplete.add(_this.tween_3ACompletePond);
        _this.tween_3APond.start();

    },


    update: function (game) {



    },



    tween_1Complete: function (target) {

        _this.KF_JumpingWater.x = _this.fish_1.x;
        _this.KF_JumpingWater.y = _this.fish_1.y;

        //king fisher coming back from water sprite

        _this.KF_ComingUp = _this.add.sprite(500, 400, 'KingFisher_ComingUp');
        _this.KF_ComingUp.name = "KF_ComingUp";
        _this.KF_ComingUp.anchor.setTo(0.5);
        _this.KF_ComingUp.scale.setTo(0.8, 0.8);
        _this.ComingUp = _this.KF_ComingUp.animations.add('KingFisher_ComingUp');
        _this.KF_ComingUp.animations.play('KingFisher_ComingUp', 30, true, false);

        //remove the jumping water image
        _this.KF_JumpingWater.destroy();

        _this.KF_ComingUp.x = _this.fish_1.x;
        _this.KF_ComingUp.y = _this.fish_1.y;
        _this.tween_1A = _this.add.tween(_this.KF_ComingUp);

        _this.tween_1A.to({ Angle: 220, x: 240, y: 230 }, 2000, 'Linear', false, 0);
        _this.tween_1A.onComplete.add(_this.tween_1BComplete, _this);


        _this.fish_1.destroy();
        _this.tween_1A.start();

    },


    tween_1BComplete: function (target) {


        //_this.KF_ComingUpEnding.destroy();
        _this.KF_ComingUp.destroy();
        _this.KF_Eatingfish = _this.add.sprite(240, 230, 'KingFisher_Eatingfish');
        _this.KF_Eatingfish.name = "KF_Eatingfish";
        _this.KF_Eatingfish.anchor.setTo(0.5);
        _this.KF_Eatingfish.scale.setTo(1, 1);
        _this.Eatingfish = _this.KF_Eatingfish.animations.add('KingFisher_Eatingfish');
        _this.KF_Eatingfish.animations.play('KingFisher_Eatingfish', 15, true);

    },


    changeQuestion: function () {
        flagGroup1.destroy();
        if (_this.no11 < 6) {
            count++;
            _this.getQuestion();
        }
        else {
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
                amplify: function (multiplier) { result.gain.gain.value = multiplier; },
                getAmpLevel: function () { return result.gain.gain.value; }
            };
        result.source.connect(result.gain);
        result.gain.connect(context.destination);
        result.amplify(multiplier);

        return result;
    },

    shutdown: function () {
        // _this.stopVoice();
        //RI.gotoEndPage();
        //telInitializerbbpp.tele_end();
    },



    starActions: function () {
        _this.score++;

        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim = _this.starAnim.animations.add('star');
        // _this.userHasPlayed = 1;
        // _this.game_id = 'NS_INT_3_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Integers";
        // _this.microConcepts = "Number Systems";
        _this.anim.play();

    },

    preload_not_required: function () {

        console.log("loading preload inside game 4 itlsef///////////////");
        //this.navBar=navBar;

        this.load.atlas('unity2_1_1_backbtn', 'assets/commonAssets/backbtn.png', null, game4Json.backbtnJson);
        this.load.atlas('unity2_1_1a_CommonSpeakerBtn', 'assets/commonAssets/speaker.png', null, game4Json.speakerJson);
        this.load.atlas('unity2_1_1a_starAnim', 'assets/commonAssets/starAnim.png', null, game4Json.starAnimJson);
        this.load.atlas('unity2_1_1a_replay', 'assets/commonAssets/reply.png', null, game4Json.replyJson);
        this.load.atlas('unity2_1_1a_btn', 'assets/commonAssets/btn.png', null, game4Json.btnJson);

        this.load.image('unity2_1_1a_tittleBar', 'assets/commonAssets/tittleBar.png');
        this.load.image('unity2_1_1a_background', 'assets/commonAssets/bg.png');
        this.load.image('unity2_1_1a_navBar', 'assets/commonAssets/navBar.png');
        this.load.image('unity2_1_1a_timebg', 'assets/commonAssets/timebg.png');
        this.load.image('unity2_1_1a_topicOutline', 'assets/commonAssets/topicOutline.png');

        //game assets.
        //this.load.image('unity2_1_1a_BG_01', 'assets/gradeAssets/NS-INT-4-G6/BG_01.png');
        this.load.image('unity2_1_1a_practice', 'assets/gradeAssets/NS-INT-4-G6/practice.png');
        this.load.image('unity2_1_1a_topic', 'assets/gradeAssets/NS-INT-4-G6/topic.png');
        //this.load.image('Tick', 'assets/gradeAssets/2.1.1/Tick.png');


        console.log('///////////////////////this is loading preloader of game 4///////////////////////');
        this.load.atlas('unity2_1_1a_Tick', 'assets/gradeAssets/NS-INT-4-G6/tick.png', null, game4Json.tickJson);


        this.load.image('Q4_bg', 'assets/gradeAssets/NS-INT-4-G6/Bg.png');
        // this.load.image('level_scale', 'assets/gradeAssets/NS-INT-4-G6/Scale.png');

        this.load.atlas('level_scale', 'assets/gradeAssets/NS-INT-4-G6/Scaleanim.png', null, game4Json.level_scale);

        this.load.atlas('Fish_1', 'assets/gradeAssets/NS-INT-4-G6/Fish 1.png', null, game4Json.Fish_1);
        this.load.image('Fish_1_image', 'assets/gradeAssets/NS-INT-4-G6/Fish_1_image.png');
        this.load.image('nest', 'assets/gradeAssets/NS-INT-4-G6/number.png');
        this.load.image('pondplace', 'assets/gradeAssets/NS-INT-4-G6/timebg.png');
        this.load.image('zone', 'assets/gradeAssets/NS-INT-4-G6/Hiddenzone.png');

        this.load.image('kingfisher_sitting', 'assets/gradeAssets/NS-INT-4-G6/kingfishersitting.png');
        this.load.atlas('KingFisher_JumpingWater', 'assets/gradeAssets/NS-INT-4-G6/JumpingWater.png', null, game4Json.jumpingWaterJson);
        this.load.atlas('kingfisher_hovering', 'assets/gradeAssets/NS-INT-4-G6/kingfisherhovering.png', null, game4Json.kingfisherhoveringJson);


        this.load.atlas('Numberpad', 'assets/gradeAssets/NS-INT-4-G6/Numberpad.png', null, game4Json.numberpadJson);
        this.load.image('numpadbg', 'assets/commonAssets/numbg.png');
        this.load.atlas('ScreenTextBox', 'assets/gradeAssets/NS-INT-4-G6/ScreenTextBox.png', null, game4Json.ScreenTextBox);

        this.load.atlas('KingFisher_ComingUp', 'assets/gradeAssets/NS-INT-4-G6/ComingUp.png', null, game4Json.comingUpJson);
        this.load.atlas('KingFisher_Eatingfish', 'assets/gradeAssets/NS-INT-4-G6/EatingFish.png', null, game4Json.eatingfishJson);
        this.load.atlas('Bubbles', 'assets/gradeAssets/NS-INT-4-G6/Bubble anim.png', null, game4Json.bubbleAnimJSon);


        this.load.atlas('CommonHomeBtn', 'assets/commonAssets/homeBtn.png', null, game4Json.homebtnJson);
        this.load.atlas('CommonNextBtn', 'assets/commonAssets/nextBtn.png', null, game4Json.nextbtnJson);
        this.load.atlas('KingFisher_InsideWater', 'assets/gradeAssets/NS-INT-4-G6/InsideWater.png', null, game4Json.insideWaterJson);
        this.load.atlas('KingFisher_ComingUpWater', 'assets/gradeAssets/NS-INT-4-G6/ComingupWater.png', null, game4Json.comingupWaterJson);
        this.load.atlas('SplashWater', 'assets/gradeAssets/NS-INT-4-G6/SplashWater.png', null, game4Json.SplashWater);

        this.load.atlas('Nest', 'assets/gradeAssets/NS-INT-4-G6/Nest.png', null, game4Json.NestJson);
    },
};