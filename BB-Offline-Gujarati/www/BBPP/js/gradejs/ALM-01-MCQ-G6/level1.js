Game.ALM_01_MCQ_G6level1 = function () { };


Game.ALM_01_MCQ_G6level1.prototype =
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

        _this.WaterDropSound = document.createElement('audio');
        _this.WaterDropSoundsrc = document.createElement('source');
        _this.WaterDropSoundsrc.setAttribute("src", window.baseUrl + "sounds/watersplash.mp3");
        _this.WaterDropSound.appendChild(_this.WaterDropSoundsrc);

        telInitializerbbpp.gameIdInit("ALM_01_G6", gradeSelected);
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

        // //*  User Progress variables for BB++ app
        // _this.userHasPlayed = 0;
        // _this.timeinMinutes;
        // _this.timeinSeconds;
        // _this.game_id;
        // _this.score = 0;
        // _this.gradeTopics;
         _this.microConcepts;
        // _this.grade;

        _this.hint_flag = 0;
        _this.speakerbtnClicked = false;
        _this.rightbtn_is_Clicked = false;

        _this.Question_flag = -1;
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';


        _this.BlueFishPositionArray_X_RevrseFish = [20, 80, 140, 200, 260];///reverse fish

        _this.BlueFishPositionArray_X = [20, 80, 140, 200, 260];//[80,140,200,260,320];
        _this.FishPositionArray_y = [110, 150, 190, 230, 270, 310];//[190,230,270,310,350,390];



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
            //* show the demo video

            _this.hintBtn.inputEnabled = false;
            _this.hintBtn.input.useHandCursor = false;

            _this.time.events.add(1, function () {
                console.log(_this.hintBtn.inputEnabled, "status of hintBtn");
                _this.ViewDemoVideo();
            });

        });


        _this.generateStarsForTheScene(6);

        //* include variables for use - objGroup (where egg objects can be added)
        _this.objGroup;
        _this.numGroup;

        _this.XArray = []; // three array for partA
        _this.YArray = [];
        _this.ZArray = [];

        _this.XArray_PartB = [];
        _this.YArray_PartB = [];
        _this.ZArray_PartB = [];

        _this.FishBowlPositionX = [360, 550, 750];
        _this.FishBowlPositionY = [80, 250];

        _this.FishInSmallTank_X = [380, 427, 380, 427, 380, 427];//[20,82,20,82,20]////[80,140,80,140,80];
        _this.FishInSmallTank_Y = [162, 162, 135, 135, 108, 108];//[210,210,175,175,140];

        _this.FishInSecondSmallTank_X = [568, 620, 568, 620, 568, 620];//[20,80,20,80,20];
        _this.FishInThirdSmallTank_X = [768, 820, 768, 820, 768, 820];
        _this.FishInFourthSmallTank_X = [380, 427, 380, 427, 380, 427];
        _this.FishInSecondSmallTank_Y = [162, 162, 135, 135, 108, 108]; //[210,175,140];
        _this.FishInFourthSmallTank_Y = [333, 333, 306, 306, 279, 279]; //[210,175,140];

        _this.EquationFn_PartA = false;
        _this.EquationFn_PartB = false;//part B equation in not loaded

        _this.PartAQnCnt = 0;
        _this.PartBQnCnt = 0;

        _this.tweenShown = 0;

        _this.QuestionArray = [1, 2, 1, 2, 1, 2]; //1=patrA 2=PartB
        _this.QuestionArray = _this.shuffle(_this.QuestionArray);

        //* start the game with first question
        _this.getQuestion();
        //    _this.time.events.add(500, _this.getQuestion);
        // _this.addNumberPad();

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

        _this.randomizing_elements();
        _this.DecidesQn();//here dicedde which part we nees ask

        console.log("inside get question.....");
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

    bubblesAnimation1: function () {
        // 390 95
        _this.imageb11 = _this.add.sprite(90, 95, 'bubbles')
        _this.imageb11_anim = _this.imageb11.animations.add('draw');
        _this.imageb11_anim.play(15);
        // _this.showBubbles(345, 150);

        _this.imageb11_anim.onComplete.add(function () {
            _this.imageb11_anim.play(15);
        }, _this);


        _this.imageb21 = _this.add.sprite(480 - 300, 95, 'bubbles')
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

    randomizing_elements: function () {
        console.log("randomizing ele");
        _this.randomizing_elements_PartA();//PArtA
        _this.randomizing_elements_PartB();

    },

    DecidesQn: function () {
        _this.sceneCount++;
        console.log(_this.QuestionArray[_this.count1])
        console.log("_this.PartAQnCnt" + _this.PartAQnCnt)
        console.log("_this.PartBQnCnt" + _this.PartBQnCnt)
        _this.bubblesAnimation1();
        _this.AquariumBox();

        if (_this.QuestionArray[_this.count1] == 1) {
            console.log("partA");

            _this.loadingPartAObject();//PartA
            if (_this.count1 == 0) _this.VoiceNote1Fn();
            _this.Question_flag = 1;
        }
        else if (_this.QuestionArray[_this.count1] == 2) {
            console.log("partB");
            _this.loadingPartBObject();
            if (_this.count1 == 0) _this.VoiceNote4Fn();
            _this.Question_flag = 4;
        }
    },

    randomizing_elements_PartA: function () {
        // Equation Math.floor((Math.random() * (max-min)) + min);
        for (i = 0; i < 3; i++) {
            _this.Z = Math.floor(Math.random() * (7 - 2) + 2);
            _this.ZArray.push(_this.Z);

            if (_this.Z == 6) {
                _this.Y = Math.floor((Math.random() * (6 - 2)) + 2); // Generate random num 2 to 5 
            }
            else {
                _this.Y = Math.floor((Math.random() * (7 - 2)) + 2); // Generate random num 2 to 6 
            }
            for (j = 0; j < _this.YArray.length; j++) {
                if (_this.Y == _this.YArray[j]) {
                    if (_this.Z == 6) {
                        _this.Y = Math.floor((Math.random() * (6 - 2)) + 2); // Generate random num 2 to 5 
                    }
                    else {
                        _this.Y = Math.floor((Math.random() * (7 - 2)) + 2); // Generate random num 2 to 6 
                    }
                    j = -1;
                }
            }
            _this.YArray.push(_this.Y);

            _this.X = _this.Y * _this.Z;
            _this.XArray.push(_this.X);
        }

        console.log("Z", _this.ZArray);
        console.log("Y", _this.YArray);
        console.log("X", _this.XArray);
    },

    loadingPartAObject: function () {
        _this.PartB = 0;
        _this.PartA = 1;
        _this.ArrayFirstBox = [0, 0, 0, 0, 0, 0];
        _this.ArraySecondBox = [0, 0, 0, 0, 0, 0];
        _this.ArrayThirdBox = [0, 0, 0, 0, 0, 0, 0];
        _this.ArrayFourthBox = [0, 0, 0, 0, 0, 0, 0];
        _this.ArrayFifthBox = [0, 0, 0, 0, 0, 0, 0];
        _this.ArraySixthBox = [0, 0, 0, 0, 0, 0, 0];

        _this.Array_X = [];//secondTimeDrag from Big Tank to Small Tank
        _this.Array_Y = [];

        // _this.FirstSmallTankFishGrp  = _this.add.group();
        // _this.SecondSmallTankFishGrp = _this.add.group();
        // _this.ThirdSmallTankFishGrp  = _this.add.group();
        // _this.FourthSmallTankFishGrp = _this.add.group();
        // _this.FifthSmallTankFishGrp  = _this.add.group();
        // _this.SixthSmallTankFishGrp  = _this.add.group();

        _this.BowlGroup = _this.add.group();

        _this.BigTankClickedFishPosition_X = [];
        _this.BigTankClickedFishPosition_Y = [];

        _this.SmallTankClickedFishPosition_X = [];
        _this.SmallTankClickedFishPosition_Y = [];

        _this.ScecondTank_X = [];//while tweening to second tank storing x position from the big tank so that helps again add to big tank
        _this.ScecondTank_Y = [];

        _this.ThirdTank_X = [];
        _this.ThirdTank_Y = [];

        _this.FourthTank_X = [];
        _this.FourthTank_Y = [];

        _this.FifthTank_X = [];
        _this.FifthTank_Y = [];

        _this.SixthTank_X = [];
        _this.SixthTank_Y = [];

        _this.FirstSmallTank = _this.add.sprite(360, 80, 'FishBowl');
        _this.FirstSmallTank.scale.setTo(0.8, 0.8);

        // _this.AquariumBox();



        console.log(_this.PartAQnCnt, _this.XArray[_this.PartAQnCnt]);
        _this.placingBlueFish(_this.XArray[_this.PartAQnCnt]);
        // _this.EnablingSmallTankFishGrp();

        if (_this.PartAQnCnt == 0 && _this.tweenShown == 0) {
            _this.ShowingHand();
            // _this.events.add(1000,function(){

            // })
        }

        rem = _this.YArray[_this.PartAQnCnt] % 3;
        quient = _this.YArray[_this.PartAQnCnt] / 3;
        if (_this.YArray[_this.PartAQnCnt] <= 3) {
            j = 0;
            for (i = 1; i < _this.YArray[_this.PartAQnCnt]; i++) {
                _this.SmallTank = _this.add.sprite(_this.FishBowlPositionX[i], _this.FishBowlPositionY[j], 'FishBowl');
                _this.SmallTank.scale.setTo(0.8, 0.8);

                _this.BowlGroup.addChild(_this.SmallTank);
                _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).name = _this.BowlGroup.length;
                _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).inputEnabled = true;
                _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).input.useHandCursor = true;
                _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).events.onInputDown.add(_this.BowlClicked, _this);
            }
        }
        if (_this.YArray[_this.PartAQnCnt] > 3) {
            for (i = 1; i < 3; i++) {
                j = 0;
                _this.SmallTank = _this.add.sprite(_this.FishBowlPositionX[i], _this.FishBowlPositionY[j], 'FishBowl');
                _this.SmallTank.scale.setTo(0.8, 0.8);
                _this.BowlGroup.addChild(_this.SmallTank);
                _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).name = _this.BowlGroup.length;
                _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).inputEnabled = true;
                _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).input.useHandCursor = true;
                _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).events.onInputDown.add(_this.BowlClicked, _this);

            }
            if (rem == 0) {
                for (k = 0; k < 3; k++) {
                    j = 1;
                    _this.SmallTank = _this.add.sprite(_this.FishBowlPositionX[k], _this.FishBowlPositionY[j], 'FishBowl');
                    _this.SmallTank.scale.setTo(0.8, 0.8);
                    _this.BowlGroup.addChild(_this.SmallTank);
                    _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).name = _this.BowlGroup.length;
                    _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).inputEnabled = true;
                    _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).input.useHandCursor = true;
                    _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).events.onInputDown.add(_this.BowlClicked, _this);
                }
            }
            else {
                for (k = 0; k < rem; k++) {
                    j = 1;
                    _this.SmallTank = _this.add.sprite(_this.FishBowlPositionX[k], _this.FishBowlPositionY[j], 'FishBowl');
                    _this.SmallTank.scale.setTo(0.8, 0.8);
                    _this.BowlGroup.addChild(_this.SmallTank);
                    _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).name = _this.BowlGroup.length;
                    _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).inputEnabled = true;
                    _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).input.useHandCursor = true;
                    _this.BowlGroup.getChildAt(_this.BowlGroup.length - 1).events.onInputDown.add(_this.BowlClicked, _this);
                }
            }
        }

        _this.FirstSmallTankFishGrp = _this.add.group();
        _this.SecondSmallTankFishGrp = _this.add.group();
        _this.ThirdSmallTankFishGrp = _this.add.group();
        _this.FourthSmallTankFishGrp = _this.add.group();
        _this.FifthSmallTankFishGrp = _this.add.group();
        _this.SixthSmallTankFishGrp = _this.add.group();
        console.log(_this.BowlGroup.length);
        if (_this.EquationFn_PartA == false) {
            _this.EquationLoading_PartA();
            _this.EquationFn_PartA = true;
        }
        // _this.bubblesAnimationPot1();
    },

    ShowingHand: function () {
        _this.tweenShown = 1;

        fish = _this.add.sprite(50, 110, 'BlueFishAnim')
        hand = _this.add.image(80, 110, 'hand');
        // hand.addChild(fish);
        hand.scale.setTo(0.5, 0.5);
        handTween = _this.add.tween(hand);
        handTween.to({ x: 450, y: 110 }, 2000, 'Linear', true, 0)
        handTween.start();

        fishTween = _this.add.tween(fish);
        fishTween.to({ x: 400, y: 110 }, 2000, 'Linear', true, 0)
        fishTween.start();

        fishTween.onComplete.add(function () {
            _this.time.events.add(500, function () {
                hand.destroy();
                fish.destroy();
            })
        })
        // _this.fishtween1.to({ x: _this.FishInSecondSmallTank_X[0], y: _this.FishInSecondSmallTank_Y[0] }, 300, 'Linear',true,0);//, true, 0);
        //                     _this.fishtween1.start();
    },

    bubblesAnimationPot1: function () {

        // for(let i=0;i< _this.BowlGroup.length;i++)
        // {
        // _this.pot1Bubbels = _this.add.sprite(-80, 20, 'bubbles')
        // // _this.FirstSmallTank.addChild(_this.pot1Bubbels);
        // _this.pot1Bubbels_anim = _this.pot1Bubbels.animations.add('bubbles');
        // _this.pot1Bubbels_anim.play(15);
        // _this.pot1Bubbels_anim.onComplete.add(function () {
        //     _this.pot1Bubbels_anim.play(15);
        // }, _this);
        // }



        _this.pot1Bubbels = _this.add.sprite(400, -5, 'bubbles')//400,95
        // _this.pot1Bubbels.frame = [1,2,3,4,5,6,7,8];
        _this.pot1Bubbels_anim = _this.pot1Bubbels.animations.add('bubbles');
        _this.pot1Bubbels_anim.play(30);
        // this._repeat = 0

        _this.time.events.add(1000, function () {
            // _this.pot1Bubbels_anim.playbackRate = 0;
            console.log("he");
            _this.pot1Bubbels_anim.play(30);
            // _this.pot1Bubbels_anim._repeat = 1;
            // _this.pot1Bubbels_anim._paused = true;
            // _this.pot1Bubbels.destroy();
            // _this.pot1Bubbels.frame = 5;
            // _this.pot1Bubbels_anim.play(30);
        })

        // _this.pot1Bubbels.frame = 5;
        _this.pot1Bubbels_anim.onComplete.add(function () {
            // _this.drawingsound.pause()
            _this.pot1Bubbels.frame = 5;
            _this.pot1Bubbels.frame = [1, 2, 3, 4, 5, 6, 7, 8];
            _this.pot1Bubbels_anim.play(30);


        }, _this);

        // _this.imageb31 = _this.add.sprite(550 - 300, 95, 'bubbles')
        // _this.imageb31_anim = _this.imageb31.animations.add('draw');
        // _this.imageb31_anim.play(20);
        // _this.imageb31_anim.onComplete.add(function () {
        //     // _this.drawingsound.pause()
        //     _this.imageb31.frame = 17;
        //     _this.imageb31_anim.play(20);


        // }, _this);
    },



    EquationLoading_PartA: function () {
        _this.x_box = _this.add.image(100, 400, 'Text box_1');
        if (_this.XArray[_this.PartAQnCnt] >= 10) {
            x = _this.add.text(20, 20, _this.XArray[_this.PartAQnCnt]);
        }
        else {
            x = _this.add.text(27, 20, _this.XArray[_this.PartAQnCnt]);
        }

        _this.applyingStyle(x);
        _this.x_box.addChild(x);

        _this.equal_box = _this.add.image(320, 400, 'Text box_1');
        equal = _this.add.text(27, 20, "=");
        _this.applyingStyle(equal);
        _this.equal_box.addChild(equal);

        _this.y_And_z_box = _this.add.image(580, 400, 'Text box_2');
        y = _this.add.text(20, 20, _this.YArray[_this.PartAQnCnt]);
        _this.applyingStyle(y);
        _this.y_And_z_box.addChild(y);
        multiply = _this.add.text(55, 20, 'x');
        _this.applyingStyle(multiply);
        _this.y_And_z_box.addChild(multiply);
        a = _this.add.text(90, 20, 'a');
        _this.applyingStyle(a);
        a.fill = '#FF0000';
        _this.y_And_z_box.addChild(a);

        _this.tickbtn = _this.add.sprite(800, 400, 'TickBtn');
        _this.tickbtn.frame = 1;

        _this.tickbtn.inputEnabled = true;
        _this.tickbtn.input.useHandCursor = true;
        _this.tickbtn.events.onInputDown.add(_this.tickbtnClicked, _this);
    },

    tickbtnClicked: function () {
        console.log("clicked")
        console.log(_this.ZArray[_this.PartAQnCnt]);
        console.log(_this.YArray[_this.PartAQnCnt]);
        console.log(_this.FirstSmallTankFishGrp.length, _this.SecondSmallTankFishGrp.length, _this.ThirdSmallTankFishGrp.length, _this.SixthSmallTankFishGrp.length, _this.FifthSmallTankFishGrp.length, _this.FourthSmallTankFishGrp.length);
        if (_this.YArray[_this.PartAQnCnt] == 2 && _this.FirstSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.SecondSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt]) {
            console.log("correct");
            _this.CurrectAns(_this.tickbtn);
        }
        else if (_this.YArray[_this.PartAQnCnt] == 3 && _this.FirstSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.SecondSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.ThirdSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.ThirdSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt]) {
            console.log("correct");
            _this.CurrectAns(_this.tickbtn);
        }
        else if (_this.YArray[_this.PartAQnCnt] == 4 && _this.FirstSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.SecondSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.ThirdSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.FourthSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt]) {
            console.log("correct");
            _this.CurrectAns(_this.tickbtn);
        }
        else if (_this.YArray[_this.PartAQnCnt] == 5 && _this.FirstSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.SecondSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.ThirdSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.FourthSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.FifthSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt]) {
            console.log("correct");
            _this.CurrectAns(_this.tickbtn);
        }
        else if (_this.YArray[_this.PartAQnCnt] == 6 && _this.FirstSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.SecondSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.ThirdSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] &&
            _this.FourthSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.FifthSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt] && _this.SixthSmallTankFishGrp.length == _this.ZArray[_this.PartAQnCnt]) {
            console.log("correct");
            _this.CurrectAns(_this.tickbtn);
        }
        else {
            console.log("wrong");
            _this.wrongSound.play();
            _this.BowlGroup.destroy();
            _this.FirstSmallTank.destroy();
            _this.BigTankBlueFishGroup.destroy();
            // _this.FirstSmallTank.removeChildren();
            _this.FirstSmallTankFishGrp.destroy();

            _this.FourthSmallTankFishGrp.destroy();
            _this.SecondSmallTankFishGrp.destroy();
            _this.ThirdSmallTankFishGrp.destroy();
            _this.FifthSmallTankFishGrp.destroy();
            _this.SixthSmallTankFishGrp.destroy();

            _this.loadingPartAObject();

        }

    },

    CurrectAns: function (target) {
        target.destroy();

        _this.ansBoxBg = _this.add.image(800, 390, 'Text box_2');
        _this.ansBoxBg.scale.setTo(1.1, 1.1);
        if (_this.PartB == 1) {
            a = _this.add.text(15, 18, 'b');
        }
        else {
            a = _this.add.text(15, 18, 'a');
        }

        _this.applyingStyle(a);
        a.fill = '#FF0000';
        _this.ansBoxBg.addChild(a);
        equal = _this.add.text(38, 20, '=');
        _this.applyingStyle(equal);
        _this.ansBoxBg.addChild(equal);
        _this.AnswerBox = _this.add.image(70, 14, 'small_text_box');
        _this.AnswerBox.scale.setTo(0.9, 0.9);
        _this.ansBoxBg.addChild(_this.AnswerBox);
        _this.addNumberPad();

        if (_this.QuestionArray[_this.count1] == 1) {
            _this.BowlGroup.forEach(element => {
                element.inputEnabled = false;
            })
            _this.FirstSmallTankFishGrp.forEach(element => {
                element.inputEnabled = false;
            })
        }
        // _this.BowlGroup.forEach(element =>{
        //     element.inputEnabled = false;
        // })
        // _this.FirstSmallTankFishGrp.forEach(element =>{
        //     element.inputEnabled = false;
        // })
        if (_this.count1 == 0) {
            _this.Question_flag = -1;
            _this.VoiceNote2Fn();
        }
        _this.time.events.add(1000, function () {
            _this.Question_flag = 2;
        })
    },

    placingBlueFish: function (valueOfX) {
        console.log(valueOfX);
        _this.BigTankBlueFishGroup = _this.add.group();
        var BlueFishCount = 0;
        _this.BlueFishNameArray = [];

        var reminder = valueOfX % 5;
        var qutient = valueOfX - reminder;
        var mainrow = qutient / 5;
        console.log(mainrow);

        for (var i = 0; i < mainrow; i++) {
            if (i % 2 == 0) {
                for (j = 0; j < 5; j++) {
                    _this.BlueFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X[j], _this.FishPositionArray_y[i], 'BlueFishAnim');
                    _this.BlueFishInAquirium.scale.setTo(0.9, 0.9);
                    // _this.BlueFishInAquirium.anchor.setTo(0.1, 0);
                    // _this.BlueFishInAquirium.scale.x *= -1;
                    // _this.BlueFishInAquirium.name = BlueFishCount;
                    _this.BigTankBlueFishGroup.addChild(_this.BlueFishInAquirium);
                    _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).inputEnabled = true;
                    _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).input.useHandCursor = true;
                    _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).events.onInputDown.add(_this.bluefishClicked, _this);
                    // _this.BlueFishNameArray.push(_this.BlueFishInAquirium.name);
                    BlueFishCount++;
                }
            }
            else {
                for (j = 0; j < 5; j++) {
                    _this.BlueFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X[j], _this.FishPositionArray_y[i], 'BlueFishAnim');
                    _this.BlueFishInAquirium.scale.setTo(0.9, 0.9);

                    // _this.BlueFishInAquirium.anchor.setTo(1, 0);
                    // _this.BlueFishInAquirium.name = BlueFishCount;
                    _this.BigTankBlueFishGroup.addChild(_this.BlueFishInAquirium);
                    _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).inputEnabled = true;
                    _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).input.useHandCursor = true;
                    _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).events.onInputDown.add(_this.bluefishClicked, _this);
                    // _this.BlueFishNameArray.push(_this.BlueFishInAquirium.name);
                    BlueFishCount++;
                }
            }
        }

        if (valueOfX % 5 != 0) {
            if (valueOfX < 5) {
                _this.GenerateRemaingBlueFish(0, reminder, BlueFishCount);
            }
            else {
                _this.GenerateRemaingBlueFish(mainrow, reminder, BlueFishCount);
            }
        }
        _this.fishAnimFn_PartA();

    },

    GenerateRemaingBlueFish: function (row, quesion, BlueFishCount) {
        if (row % 2 == 0) {
            for (k = 0; k < quesion; k++) {
                _this.BlueFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X[k], _this.FishPositionArray_y[row], 'BlueFishAnim');
                _this.BlueFishInAquirium.scale.setTo(0.9, 0.9);
                _this.BigTankBlueFishGroup.addChild(_this.BlueFishInAquirium);
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).inputEnabled = true;
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).input.useHandCursor = true;
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).events.onInputDown.add(_this.bluefishClicked, _this);
                // _this.BlueFishNameArray.push(_this.BlueFishInAquirium.name);
                BlueFishCount++;
            }
        }
        else {
            for (k = 0; k < quesion; k++) {
                _this.BlueFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X[k], _this.FishPositionArray_y[row], 'BlueFishAnim');
                _this.BlueFishInAquirium.scale.setTo(0.9, 0.9);
                _this.BigTankBlueFishGroup.addChild(_this.BlueFishInAquirium);
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).inputEnabled = true;
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).input.useHandCursor = true;
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).events.onInputDown.add(_this.bluefishClicked, _this);
                // _this.BlueFishNameArray.push(_this.BlueFishInAquirium.name);
                BlueFishCount++;
            }
        }
    },

    fishAnimFn_PartA: function () {
        console.log("here")
        _this.Fishanim = [];
        _this.red = [];
        for (let i = 0; i < _this.BigTankBlueFishGroup.length; i++) {
            // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'orangefishanim');
            _this.Fishanim[i] = _this.BigTankBlueFishGroup.getChildAt(i).animations.add('BlueFishAnim');
            _this.Fishanim[i].play(15);
            _this.Fishanim[i].onComplete.add(function () {
                _this.Fishanim.forEach(element => {
                    if (element)
                        element.play(15)
                });

            }, _this);
        }
    },

    bluefishClicked: function (target) {
        console.log("bluefishClicked")
        target.input.enableDrag(true);
        console.log(target.x, target.y);
        _this.vx = target.x;
        _this.vy = target.y;
        _this.clickSound.play();
        target.events.onDragStop.add(_this.Overlap_FistSmallTank, target);
    },

    Overlap_FistSmallTank: function (target) {
        console.log(_this.FirstSmallTankFishGrp.length);
        if (_this.checkOverlap(target, _this.FirstSmallTank) && _this.FirstSmallTankFishGrp.length <= 5) {
            console.log("length of bowl1" + _this.FirstSmallTankFishGrp.length, _this.BigTankBlueFishGroup.length);
            target.inputEnabled = false;
            target.events.onInputDown.removeAll();
            target.input.enableDrag(false);
            target.events.destroy();

            if (_this.FirstSmallTankFishGrp.length <= 5) {
                console.log(_this.ArrayFirstBox[0]);
                _this.BigTankClickedFishPosition_X.push(_this.vx);
                _this.BigTankClickedFishPosition_Y.push(_this.vy);

                if (_this.ArrayFirstBox[0] == 0) {
                    _this.WaterDropSound.play();
                    console.log("oth" + _this.FishInSmallTank_X[0], _this.FishInSmallTank_Y[0])
                    target.x = _this.FishInSmallTank_X[0];
                    target.y = _this.FishInSmallTank_Y[0];
                    target.name = 0;
                    // _this.FirstSmallTankFishGrp.addChild(target);
                    // _this.FirstSmallTank.addChild(_this.FirstSmallTankFishGrp);
                    _this.ArrayFirstBox[0] = 1;
                }
                else if (_this.ArrayFirstBox[1] == 0) {
                    _this.WaterDropSound.play();
                    console.log("first" + _this.FishInSmallTank_X[1], _this.FishInSmallTank_Y[1])
                    target.x = _this.FishInSmallTank_X[1];
                    target.y = _this.FishInSmallTank_Y[1];
                    target.name = 1;
                    // _this.FirstSmallTankFishGrp.addChild(target);
                    // _this.FirstSmallTank.addChild(_this.FirstSmallTankFishGrp);
                    _this.ArrayFirstBox[1] = 1;
                }
                else if (_this.ArrayFirstBox[2] == 0) {
                    _this.WaterDropSound.play();
                    console.log("sec" + _this.FishInSmallTank_X[2], _this.FishInSmallTank_Y[2])
                    target.x = _this.FishInSmallTank_X[2];
                    target.y = _this.FishInSmallTank_Y[2];
                    target.name = 2;
                    // _this.FirstSmallTankFishGrp.addChild(target);
                    // _this.FirstSmallTank.addChild(_this.FirstSmallTankFishGrp);
                    _this.ArrayFirstBox[2] = 1;
                }
                else if (_this.ArrayFirstBox[3] == 0) {
                    _this.WaterDropSound.play();
                    console.log("third" + _this.FishInSmallTank_X[3], _this.FishInSmallTank_Y[3])
                    target.x = _this.FishInSmallTank_X[3];
                    target.y = _this.FishInSmallTank_Y[3];
                    target.name = 3;
                    // _this.FirstSmallTankFishGrp.addChild(target);
                    // _this.FirstSmallTank.addChild(_this.FirstSmallTankFishGrp);
                    _this.ArrayFirstBox[3] = 1;
                }
                else if (_this.ArrayFirstBox[4] == 0) {
                    _this.WaterDropSound.play();
                    console.log("fourth" + _this.FishInSmallTank_X[4], _this.FishInSmallTank_Y[4])
                    target.x = _this.FishInSmallTank_X[4];
                    target.y = _this.FishInSmallTank_Y[4];
                    target.name = 4;
                    _this.ArrayFirstBox[4] = 1;
                }
                else if (_this.ArrayFirstBox[5] == 0) {
                    _this.WaterDropSound.play();
                    console.log("fourth" + _this.FishInSmallTank_X[5], _this.FishInSmallTank_Y[5])
                    target.x = _this.FishInSmallTank_X[5];
                    target.y = _this.FishInSmallTank_Y[5];
                    target.name = 5;
                    _this.ArrayFirstBox[5] = 1;
                }
                // target.events.destroy();
                _this.FirstSmallTankFishGrp.addChild(target);
                _this.FirstSmallTankFishGrp.getChildAt(_this.FirstSmallTankFishGrp.length - 1).scale.setTo(0.7, 0.7);
                // _this.FirstSmallTank.addChild(_this.FirstSmallTankFishGrp);
                target.inputEnabled = true;
                target.input.useHandCursor = true;
                target.events.onInputDown.add(_this.FirstSmallTankFishClicked, _this);
            }
            else {
                console.log("else");
                target.x = _this.vx;
                target.y = _this.vy;
                _this.BigTankBlueFishGroup.addChild(target);
                target.inputEnabled = true;
                target.input.useHandCursor = true;
                target.events.onInputDown.add(_this.bluefishClicked, _this);
            }

        }
        else {
            target.x = _this.vx;
            target.y = _this.vy;
            _this.BigTankBlueFishGroup.addChild(target);
            target.inputEnabled = true;
            target.input.useHandCursor = true;
            target.events.onInputDown.add(_this.bluefishClicked, _this);
        }
        _this.EnablingSmallTankFishGrp();
        console.log(_this.BigTankClickedFishPosition_X, _this.BigTankClickedFishPosition_Y);
    },

    EnablingSmallTankFishGrp: function () {
        // _this.FirstSmallTankFishGrp.name = 0;
        if (_this.FirstSmallTankFishGrp.length > 1) {
            for (i = 0; i < _this.FirstSmallTankFishGrp.length; i++) {
                _this.FirstSmallTankFishGrp.getChildAt(i).inputEnabled = true;
                _this.FirstSmallTankFishGrp.getChildAt(i).input.useHandCursor = true;
                _this.FirstSmallTankFishGrp.getChildAt(i).events.onInputDown.add(_this.FirstSmallTankFishClicked, _this);
            }
        }
    },

    FirstSmallTankFishClicked: function (target) {
        // _this.BigTankBlueFishGroup.removeChild(target);
        console.log("SmallTankFishClicked", +target.name);
        target.input.enableDrag(true);
        _this.FirstBoxFish_X = target.x;
        _this.FirstBoxFish_Y = target.y;
        _this.clickSound.play();
        target.events.onDragStop.add(_this.Overlap_BigTank, target);
    },

    Overlap_BigTank: function (target) {
        // target.events.destroy();
        if (_this.checkOverlap(target, _this.Aquarium)) {
            // _this.BigTankBlueFishGroup.removeChild(target);
            console.log("hereOverlapfn")
            target.inputEnabled = false;
            target.events.onInputDown.removeAll();
            target.events.destroy();

            _this.WaterDropSound.play();
            target.x = _this.BigTankClickedFishPosition_X[_this.BigTankClickedFishPosition_X.length - 1];
            target.y = _this.BigTankClickedFishPosition_Y[_this.BigTankClickedFishPosition_Y.length - 1];
            _this.BigTankClickedFishPosition_X.pop();
            _this.BigTankClickedFishPosition_Y.pop();

            console.log("poped")

            console.log(_this.BigTankClickedFishPosition_X[_this.BigTankClickedFishPosition_X.length - 1], _this.BigTankClickedFishPosition_Y[_this.BigTankClickedFishPosition_Y.length - 1]);
            _this.ArrayFirstBox[target.name] = 0;

            _this.BigTankBlueFishGroup.addChild(target);
            _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).scale.setTo(0.9, 0.9);
            // _this.FirstSmallTankFishGrp.removeChild(target);
            target.inputEnabled = true;
            target.input.useHandCursor = true;
            target.events.onInputDown.add(_this.bluefishClicked, _this);
        }
        else {
            console.log("here else");
            target.events.destroy();
            target.x = _this.FirstBoxFish_X;
            target.y = _this.FirstBoxFish_Y;
            _this.FirstSmallTankFishGrp.addChild(target);
            _this.FirstSmallTankFishGrp.getChildAt(_this.FirstSmallTankFishGrp.length - 1).scale.setTo(0.7, 0.7);

            target.inputEnabled = true;
            target.input.useHandCursor = true;
            target.events.onInputDown.add(_this.FirstSmallTankFishClicked, _this);
        }
    },

    checkOverlap: function (spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

    BowlClicked: function (target) {
        // target.inputEnabled = false;
        console.log(target.name);
        switch (target.name) {
            case 1: _this.SecondBowlClicked(target);
                break;
            case 2: _this.ThirdBowlClicked(target);
                break;
            case 3: _this.FourthBowlClicked(target);
                break;
            case 4: _this.FifthBowlClicked(target);
                break;
            case 5: _this.SixthBowlClicked(target);
                break;
        }
    },

    SecondBowlClicked: function (target) {
        console.log("SecondBowlClicked");

        i = _this.BigTankBlueFishGroup.length - 1;
        tweenfishcount = -1;

        if (_this.SecondSmallTankFishGrp.length == 0 && _this.BigTankBlueFishGroup.length > 0 || _this.SecondSmallTankFishGrp.length < _this.FirstSmallTankFishGrp.length) {
            if (_this.BigTankBlueFishGroup.length != 0 && _this.FirstSmallTankFishGrp.length > 0) {
                for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                    _this.BowlGroup.getChildAt(j).inputEnabled = false;
                }

                _this.loope = _this.time.create(false)
                _this.loope.start();
                _this.loope.loop(500, () => {
                    // if(_this.BigTankBlueFishGroup.getChildAt(i).frame == 0)
                    // {
                    for (let i = 0; i < _this.BigTankBlueFishGroup.length; i++) {
                        _this.BigTankBlueFishGroup.getChildAt(i).inputEnabled = false;
                        _this.BigTankBlueFishGroup.getChildAt(i).input.useHandCursor = false;
                    }
                    _this.BigTankBlueFishGroup.getChildAt(i).events.destroy();//onInputDown.removeAll();
                    _this.tickbtn.inputEnabled = false;
                    _this.ScecondTank_X.push(_this.BigTankBlueFishGroup.getChildAt(i).x);
                    _this.ScecondTank_Y.push(_this.BigTankBlueFishGroup.getChildAt(i).y);

                    if (_this.ArraySecondBox[0] == 0) {
                        _this.WaterDropSound.play();
                        console.log("0th position:" + _this.FishInSecondSmallTank_X[0], _this.FishInSecondSmallTank_Y[0])
                        _this.fishtween1 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween1.to({ x: _this.FishInSecondSmallTank_X[0], y: _this.FishInSecondSmallTank_Y[0] }, 300, 'Linear', true, 0);//, true, 0);
                        _this.fishtween1.start();

                        _this.fishtween1.onComplete.add(function () {
                            _this.ArraySecondBox[0] = 1;
                        })
                    }
                    else if (_this.ArraySecondBox[1] == 0) {
                        _this.WaterDropSound.play();
                        console.log("first position:" + _this.FishInSecondSmallTank_X[1], _this.FishInSecondSmallTank_Y[1])
                        _this.fishtween2 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween2.to({ x: _this.FishInSecondSmallTank_X[1], y: _this.FishInSecondSmallTank_Y[1] }, 300, 'Linear', true, 0);

                        _this.fishtween2.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 1;
                            _this.ArraySecondBox[1] = 1;

                        })
                    }
                    else if (_this.ArraySecondBox[2] == 0) {
                        _this.WaterDropSound.play();
                        console.log("second position:" + _this.FishInSecondSmallTank_X[2], _this.FishInSecondSmallTank_Y[2])
                        _this.fishtween3 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween3.to({ x: _this.FishInSecondSmallTank_X[2], y: _this.FishInSecondSmallTank_Y[2] }, 300, 'Linear', true, 0);

                        _this.fishtween3.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 2;
                            _this.ArraySecondBox[2] = 1;
                        })
                    }
                    else if (_this.ArraySecondBox[3] == 0) {
                        _this.WaterDropSound.play();
                        console.log("third position:" + _this.FishInSecondSmallTank_X[3], _this.FishInSecondSmallTank_Y[3])
                        _this.fishtween4 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween4.to({ x: _this.FishInSecondSmallTank_X[3], y: _this.FishInSecondSmallTank_Y[3] }, 300, 'Linear', true, 0);

                        _this.fishtween4.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 3;
                            _this.ArraySecondBox[3] = 1;
                        })

                    }
                    else if (_this.ArraySecondBox[4] == 0) {
                        _this.WaterDropSound.play();
                        console.log("fourth position:" + _this.FishInSecondSmallTank_X[4], _this.FishInSecondSmallTank_Y[4])
                        _this.fishtween5 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween5.to({ x: _this.FishInSecondSmallTank_X[4], y: _this.FishInSecondSmallTank_Y[4] }, 300, 'Linear', true, 0);

                        _this.fishtween5.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 4;
                            _this.ArraySecondBox[4] = 1;
                        })

                    }
                    else if (_this.ArraySecondBox[5] == 0) {
                        _this.WaterDropSound.play();
                        console.log("fifth position:" + _this.FishInSecondSmallTank_X[5], _this.FishInSecondSmallTank_Y[5])
                        _this.fishtween5 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween5.to({ x: _this.FishInSecondSmallTank_X[5], y: _this.FishInSecondSmallTank_Y[5] }, 300, 'Linear', true, 0);

                        _this.fishtween5.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 4;
                            _this.ArraySecondBox[5] = 1;
                        })

                    }

                    _this.SecondSmallTankFishGrp.addChild(_this.BigTankBlueFishGroup.getChildAt(i));
                    _this.SecondSmallTankFishGrp.getChildAt(_this.SecondSmallTankFishGrp.length - 1).inputEnabled = false;
                    _this.SecondSmallTankFishGrp.getChildAt(_this.SecondSmallTankFishGrp.length - 1).scale.setTo(0.7, 0.7);//adding as child to the bow

                    // }
                    i -= 1;
                    if (_this.SecondSmallTankFishGrp.length == _this.FirstSmallTankFishGrp.length || _this.BigTankBlueFishGroup.length == 0) {
                        _this.loope.stop()
                        console.log("here");
                        // target.addChild(_this.SecondSmallTankFishGrp);
                        _this.tickbtn.inputEnabled = true;
                        target.inputEnabled = true;
                        target.input.useHandCursor = true;
                        console.log(_this.FirstSmallTankFishGrp.length);
                        console.log("stoped");
                        _this.bubbleSound.play();
                        for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                            _this.BowlGroup.getChildAt(j).inputEnabled = true;
                            _this.BowlGroup.getChildAt(j).input.useHandCursor = true;
                        }
                        for (let i = 0; i < _this.BigTankBlueFishGroup.length; i++) {
                            _this.BigTankBlueFishGroup.getChildAt(i).inputEnabled = true;
                            _this.BigTankBlueFishGroup.getChildAt(i).input.useHandCursor = true;
                        }
                    }
                })
            }
        }
        else if (_this.FirstSmallTankFishGrp.length != _this.SecondSmallTankFishGrp.length)//second bowl initial tweening part is done)
        {
            console.log("not tweening fn");
            _this.loope = _this.time.create(false)
            _this.loope.start();
            _this.loope.loop(10, () => {
                _this.WaterDropSound.play();
                _this.SecondSmallTankFishGrp.getChildAt(_this.SecondSmallTankFishGrp.length - 1).x = _this.ScecondTank_X[_this.ScecondTank_X.length - 1];
                _this.SecondSmallTankFishGrp.getChildAt(_this.SecondSmallTankFishGrp.length - 1).y = _this.ScecondTank_Y[_this.ScecondTank_Y.length - 1];

                _this.ScecondTank_X.pop();
                _this.ScecondTank_Y.pop();

                _this.ArraySecondBox[_this.SecondSmallTankFishGrp.length - 1] = 0;
                // fish = _this.SecondSmallTankFishGrp.getChildAt(_this.SecondSmallTankFishGrp.length-1);
                console.log(_this.BigTankBlueFishGroup.length);
                _this.BigTankBlueFishGroup.addChild(_this.SecondSmallTankFishGrp.getChildAt(_this.SecondSmallTankFishGrp.length - 1));
                console.log(_this.BigTankBlueFishGroup.length);
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).scale.setTo(0.9, 0.9)
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).inputEnabled = true;
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).input.useHandCursor = true;
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).events.onInputDown.add(_this.bluefishClicked, _this);

                // _this.SecondSmallTankFishGrp.removeChild(_this.SecondSmallTankFishGrp.length-1);//_this.SecondSmallTankFishGrp.getChildAt(i));

                if (_this.FirstSmallTankFishGrp.length == _this.SecondSmallTankFishGrp.length) {
                    console.log("equal");
                    _this.loope.stop();
                    _this.bubbleSound.play();
                    for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                        _this.BowlGroup.getChildAt(j).inputEnabled = true;
                        _this.BowlGroup.getChildAt(j).input.useHandCursor = true;
                    }
                    // target.inputEnabled = true;
                    // target.input.useHandCursor=true;
                }
            })
        }
    },

    ThirdBowlClicked: function (target) {
        console.log("ThirdBowlClicked");
        let i = _this.BigTankBlueFishGroup.length - 1;
        tweenfishcount = -1;

        if (_this.ThirdSmallTankFishGrp.length == 0 && _this.BigTankBlueFishGroup.length > 0 || _this.ThirdSmallTankFishGrp.length < _this.FirstSmallTankFishGrp.length) {
            if (_this.BigTankBlueFishGroup.length != 0 && _this.FirstSmallTankFishGrp.length > 0) {
                for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                    _this.BowlGroup.getChildAt(j).inputEnabled = false;
                }
                _this.loope = _this.time.create(false)
                _this.loope.start();
                _this.loope.loop(575, () => {
                    // if(_this.BigTankBlueFishGroup.getChildAt(i).frame == 0)
                    // {
                    for (let i = 0; i < _this.BigTankBlueFishGroup.length; i++) {
                        _this.BigTankBlueFishGroup.getChildAt(i).inputEnabled = false;
                        _this.BigTankBlueFishGroup.getChildAt(i).input.useHandCursor = false;
                    }
                    _this.tickbtn.inputEnabled = false;
                    _this.WaterDropSound.play();
                    _this.BigTankBlueFishGroup.getChildAt(i).events.destroy();//onInputDown.removeAll();

                    _this.ThirdTank_X.push(_this.BigTankBlueFishGroup.getChildAt(i).x);
                    _this.ThirdTank_Y.push(_this.BigTankBlueFishGroup.getChildAt(i).y);

                    if (_this.ArrayThirdBox[0] == 0) {
                        console.log("0th position:" + _this.FishInThirdSmallTank_X[0], _this.FishInSecondSmallTank_Y[0])
                        _this.fishtween1 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween1.to({ x: _this.FishInThirdSmallTank_X[0], y: _this.FishInSecondSmallTank_Y[0] }, 300, 'Linear', true, 0);//, true, 0);
                        _this.fishtween1.start();

                        _this.fishtween1.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 0;
                            _this.ArrayThirdBox[0] = 1;
                        })

                    }
                    else if (_this.ArrayThirdBox[1] == 0) {
                        console.log("first position:" + _this.FishInThirdSmallTank_X[1], _this.FishInSecondSmallTank_Y[1])
                        _this.fishtween2 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween2.to({ x: _this.FishInThirdSmallTank_X[1], y: _this.FishInSecondSmallTank_Y[1] }, 300, 'Linear', true, 0);

                        _this.fishtween2.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 1;
                            _this.ArrayThirdBox[1] = 1;
                        })
                    }
                    else if (_this.ArrayThirdBox[2] == 0) {
                        console.log("second position:" + _this.FishInThirdSmallTank_X[2], _this.FishInSecondSmallTank_Y[2])
                        _this.fishtween3 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween3.to({ x: _this.FishInThirdSmallTank_X[2], y: _this.FishInSecondSmallTank_Y[2] }, 300, 'Linear', true, 0);

                        _this.fishtween3.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 2;
                            _this.ArrayThirdBox[2] = 1;
                        })
                    }
                    else if (_this.ArrayThirdBox[3] == 0) {
                        console.log("third position:" + _this.FishInSecondSmallTank_X[3], _this.FishInSecondSmallTank_Y[3])
                        _this.fishtween4 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween4.to({ x: _this.FishInThirdSmallTank_X[3], y: _this.FishInSecondSmallTank_Y[3] }, 300, 'Linear', true, 0);

                        _this.fishtween4.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 3;
                            _this.ArrayThirdBox[3] = 1;
                        })

                    }
                    else if (_this.ArrayThirdBox[4] == 0) {
                        console.log("fourth position:" + _this.FishInThirdSmallTank_X[4], _this.FishInSecondSmallTank_Y[4])
                        _this.fishtween5 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween5.to({ x: _this.FishInThirdSmallTank_X[4], y: _this.FishInSecondSmallTank_Y[4] }, 300, 'Linear', true, 0);

                        _this.fishtween5.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 4;
                            _this.ArrayThirdBox[4] = 1;
                        })
                    }
                    else if (_this.ArrayThirdBox[5] == 0) {
                        console.log("fifth position:" + _this.FishInThirdSmallTank_X[5], _this.FishInSecondSmallTank_Y[5])
                        _this.fishtween6 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween6.to({ x: _this.FishInThirdSmallTank_X[5], y: _this.FishInSecondSmallTank_Y[5] }, 300, 'Linear', true, 0);

                        _this.fishtween6.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 4;
                            _this.ArrayThirdBox[5] = 1;
                        })
                    }
                    _this.ThirdSmallTankFishGrp.addChild(_this.BigTankBlueFishGroup.getChildAt(i));
                    _this.ThirdSmallTankFishGrp.getChildAt(_this.ThirdSmallTankFishGrp.length - 1).inputEnabled = false;
                    _this.ThirdSmallTankFishGrp.getChildAt(_this.ThirdSmallTankFishGrp.length - 1).scale.setTo(0.7, 0.7);
                    // target.addChild(_this.ThirdSmallTankFishGrp);//adding as child to the bow

                    // }
                    i -= 1;
                    if (_this.ThirdSmallTankFishGrp.length == _this.FirstSmallTankFishGrp.length || _this.BigTankBlueFishGroup.length == 0) {
                        _this.loope.stop()
                        console.log("here");
                        _this.tickbtn.inputEnabled = true;
                        _this.tickbtn.input.useHandCursor = true;
                        target.inputEnabled = true;
                        target.input.useHandCursor = true;
                        console.log(_this.FirstSmallTankFishGrp.length);
                        console.log("stoped");
                        _this.bubbleSound.play();
                        for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                            _this.BowlGroup.getChildAt(j).inputEnabled = true;
                            _this.BowlGroup.getChildAt(j).input.useHandCursor = true;
                        }
                        for (let i = 0; i < _this.BigTankBlueFishGroup.length; i++) {
                            _this.BigTankBlueFishGroup.getChildAt(i).inputEnabled = true;
                            _this.BigTankBlueFishGroup.getChildAt(i).input.useHandCursor = true;
                        }
                    }
                })
            }
        }
        else if (_this.FirstSmallTankFishGrp.length != _this.ThirdSmallTankFishGrp.length)//second bowl initial tweening part is done)
        {
            console.log("not tweening fn");
            _this.loope = _this.time.create(false)
            _this.loope.start();
            _this.loope.loop(10, () => {
                _this.WaterDropSound.play();
                _this.ThirdSmallTankFishGrp.getChildAt(_this.ThirdSmallTankFishGrp.length - 1).x = _this.ThirdTank_X[_this.ThirdTank_X.length - 1];
                _this.ThirdSmallTankFishGrp.getChildAt(_this.ThirdSmallTankFishGrp.length - 1).y = _this.ThirdTank_Y[_this.ThirdTank_Y.length - 1];

                _this.ThirdTank_X.pop();
                _this.ThirdTank_Y.pop();

                _this.ArrayThirdBox[_this.ThirdSmallTankFishGrp.length - 1] = 0;
                // fish = _this.SecondSmallTankFishGrp.getChildAt(_this.SecondSmallTankFishGrp.length-1);
                console.log(_this.BigTankBlueFishGroup.length);
                _this.BigTankBlueFishGroup.addChild(_this.ThirdSmallTankFishGrp.getChildAt(_this.ThirdSmallTankFishGrp.length - 1));
                console.log(_this.BigTankBlueFishGroup.length);
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).scale.setTo(0.9, 0.9);
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).inputEnabled = true;
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).input.useHandCursor = true;
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).events.onInputDown.add(_this.bluefishClicked, _this);
                // _this.SecondSmallTankFishGrp.removeChild(_this.SecondSmallTankFishGrp.length-1);//_this.SecondSmallTankFishGrp.getChildAt(i));

                if (_this.FirstSmallTankFishGrp.length == _this.ThirdSmallTankFishGrp.length) {
                    console.log("equal");
                    _this.loope.stop();
                    _this.bubbleSound.play();
                    for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                        _this.BowlGroup.getChildAt(j).inputEnabled = true;
                        _this.BowlGroup.getChildAt(j).input.useHandCursor = true;
                    }
                    // target.inputEnabled = true;
                    // target.input.useHandCursor=true;
                }
            })
        }
    },

    FourthBowlClicked: function (target) {
        console.log("FourthBowlClicked");

        let i = _this.BigTankBlueFishGroup.length - 1;
        tweenfishcount = -1;

        if (_this.FourthSmallTankFishGrp.length == 0 && _this.BigTankBlueFishGroup.length > 0 || _this.FourthSmallTankFishGrp.length < _this.FirstSmallTankFishGrp.length) {
            if (_this.BigTankBlueFishGroup.length != 0 && _this.FirstSmallTankFishGrp.length > 0) {
                for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                    _this.BowlGroup.getChildAt(j).inputEnabled = false;
                }
                _this.loope = _this.time.create(false)
                _this.loope.start();
                _this.loope.loop(650, () => {
                    // if(_this.BigTankBlueFishGroup.getChildAt(i).frame == 0)
                    // {
                    for (let i = 0; i < _this.BigTankBlueFishGroup.length; i++) {
                        _this.BigTankBlueFishGroup.getChildAt(i).inputEnabled = false;
                        _this.BigTankBlueFishGroup.getChildAt(i).input.useHandCursor = false;
                    }
                    _this.tickbtn.inputEnabled = false;
                    _this.WaterDropSound.play();
                    _this.BigTankBlueFishGroup.getChildAt(i).events.destroy();//onInputDown.removeAll();

                    _this.FourthTank_X.push(_this.BigTankBlueFishGroup.getChildAt(i).x);
                    _this.FourthTank_Y.push(_this.BigTankBlueFishGroup.getChildAt(i).y);

                    if (_this.ArrayFourthBox[0] == 0) {
                        console.log("0th position:" + _this.FishInFourthSmallTank_X[0], _this.FishInFourthSmallTank_Y[0])
                        _this.fishtween1 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween1.to({ x: _this.FishInFourthSmallTank_X[0], y: _this.FishInFourthSmallTank_Y[0] }, 300, 'Linear', true, 0);//, true, 0);
                        _this.fishtween1.start();

                        _this.fishtween1.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 0;
                            _this.ArrayFourthBox[0] = 1;
                        })

                    }
                    else if (_this.ArrayFourthBox[1] == 0) {
                        console.log("first position:" + _this.FishInFourthSmallTank_X[1], _this.FishInFourthSmallTank_Y[1])
                        _this.fishtween2 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween2.to({ x: _this.FishInFourthSmallTank_X[1], y: _this.FishInFourthSmallTank_Y[1] }, 300, 'Linear', true, 0);

                        _this.fishtween2.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 1;
                            _this.ArrayFourthBox[1] = 1;
                        })
                    }
                    else if (_this.ArrayFourthBox[2] == 0) {
                        console.log("second position:" + _this.FishInFourthSmallTank_X[2], _this.FishInFourthSmallTank_Y[2])
                        _this.fishtween3 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween3.to({ x: _this.FishInFourthSmallTank_X[2], y: _this.FishInFourthSmallTank_Y[2] }, 300, 'Linear', true, 0);

                        _this.fishtween3.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 2;
                            _this.ArrayFourthBox[2] = 1;
                        })
                    }
                    else if (_this.ArrayFourthBox[3] == 0) {
                        console.log("third position:" + _this.FishInFourthSmallTank_X[3], _this.FishInFourthSmallTank_Y[3])
                        _this.fishtween4 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween4.to({ x: _this.FishInFourthSmallTank_X[3], y: _this.FishInFourthSmallTank_Y[3] }, 300, 'Linear', true, 0);

                        _this.fishtween4.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 3;
                            _this.ArrayFourthBox[3] = 1;
                        })

                    }
                    else if (_this.ArrayFourthBox[4] == 0) {
                        console.log("fourth position:" + _this.FishInFourthSmallTank_X[4], _this.FishInFourthSmallTank_Y[4])
                        _this.fishtween5 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween5.to({ x: _this.FishInFourthSmallTank_X[4], y: _this.FishInFourthSmallTank_Y[4] }, 300, 'Linear', true, 0);

                        _this.fishtween5.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 4;
                            _this.ArrayFourthBox[4] = 1;
                        })

                    }
                    else if (_this.ArrayFourthBox[5] == 0) {
                        console.log("fifth position:" + _this.FishInFourthSmallTank_X[5], _this.FishInFourthSmallTank_Y[5])
                        _this.fishtween6 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween6.to({ x: _this.FishInFourthSmallTank_X[5], y: _this.FishInFourthSmallTank_Y[5] }, 300, 'Linear', true, 0);

                        _this.fishtween6.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 4;
                            _this.ArrayFourthBox[5] = 1;
                        })

                    }
                    _this.FourthSmallTankFishGrp.addChild(_this.BigTankBlueFishGroup.getChildAt(i));
                    _this.FourthSmallTankFishGrp.getChildAt(_this.FourthSmallTankFishGrp.length - 1).inputEnabled = false;
                    _this.FourthSmallTankFishGrp.getChildAt(_this.FourthSmallTankFishGrp.length - 1).scale.setTo(0.7, 0.7);
                    // target.addChild(_this.FourthSmallTankFishGrp);//adding as child to the bow

                    // }
                    i -= 1;
                    if (_this.FourthSmallTankFishGrp.length == _this.FirstSmallTankFishGrp.length || _this.BigTankBlueFishGroup.length == 0) {
                        _this.loope.stop()
                        console.log("here");
                        _this.tickbtn.inputEnabled = true;
                        _this.tickbtn.input.useHandCursor = true;
                        target.inputEnabled = true;
                        target.input.useHandCursor = true;
                        console.log(_this.FirstSmallTankFishGrp.length);
                        console.log("stoped");
                        _this.bubbleSound.play();
                        for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                            _this.BowlGroup.getChildAt(j).inputEnabled = true;
                            _this.BowlGroup.getChildAt(j).input.useHandCursor = true;
                        }
                        for (let i = 0; i < _this.BigTankBlueFishGroup.length; i++) {
                            _this.BigTankBlueFishGroup.getChildAt(i).inputEnabled = true;
                            _this.BigTankBlueFishGroup.getChildAt(i).input.useHandCursor = true;
                        }
                    }
                })
            }
        }
        else if (_this.FirstSmallTankFishGrp.length != _this.FourthSmallTankFishGrp.length)//second bowl initial tweening part is done)
        {
            console.log("not tweening fn");
            _this.loope = _this.time.create(false)
            _this.loope.start();
            _this.loope.loop(10, () => {
                _this.WaterDropSound.play();
                _this.FourthSmallTankFishGrp.getChildAt(_this.FourthSmallTankFishGrp.length - 1).x = _this.FourthTank_X[_this.FourthTank_X.length - 1];
                _this.FourthSmallTankFishGrp.getChildAt(_this.FourthSmallTankFishGrp.length - 1).y = _this.FourthTank_Y[_this.FourthTank_Y.length - 1];

                _this.FourthTank_X.pop();
                _this.FourthTank_Y.pop();

                _this.ArrayFourthBox[_this.FourthSmallTankFishGrp.length - 1] = 0;
                // fish = _this.SecondSmallTankFishGrp.getChildAt(_this.SecondSmallTankFishGrp.length-1);
                console.log(_this.BigTankBlueFishGroup.length);
                _this.BigTankBlueFishGroup.addChild(_this.FourthSmallTankFishGrp.getChildAt(_this.FourthSmallTankFishGrp.length - 1));
                console.log(_this.BigTankBlueFishGroup.length);
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).scale.setTo(0.9, 0.9);
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).inputEnabled = true;
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).input.useHandCursor = true;
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).events.onInputDown.add(_this.bluefishClicked, _this);
                // _this.SecondSmallTankFishGrp.removeChild(_this.Sec1ondSmallTankFishGrp.length-1);//_this.SecondSmallTankFishGrp.getChildAt(i));

                if (_this.FirstSmallTankFishGrp.length == _this.FourthSmallTankFishGrp.length) {
                    console.log("equal");
                    _this.loope.stop();
                    _this.bubbleSound.play();
                    for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                        _this.BowlGroup.getChildAt(j).inputEnabled = true;
                        _this.BowlGroup.getChildAt(j).input.useHandCursor = true;
                    }
                    // target.inputEnabled = true;
                    // target.input.useHandCursor=true;
                }
            })
        }
    },

    FifthBowlClicked: function (target) {
        console.log("FifthBowlClicked");

        let i = _this.BigTankBlueFishGroup.length - 1;
        tweenfishcount = -1;

        if (_this.FifthSmallTankFishGrp.length == 0 && _this.BigTankBlueFishGroup.length > 0 || _this.FifthSmallTankFishGrp.length < _this.FirstSmallTankFishGrp.length) {
            if (_this.BigTankBlueFishGroup.length != 0 && _this.FirstSmallTankFishGrp.length > 0) {
                for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                    _this.BowlGroup.getChildAt(j).inputEnabled = false;
                }
                _this.loope = _this.time.create(false)
                _this.loope.start();
                _this.loope.loop(725, () => {
                    // if(_this.BigTankBlueFishGroup.getChildAt(i).frame == 0)
                    // {
                    for (let i = 0; i < _this.BigTankBlueFishGroup.length; i++) {
                        _this.BigTankBlueFishGroup.getChildAt(i).inputEnabled = false;
                        _this.BigTankBlueFishGroup.getChildAt(i).input.useHandCursor = false;
                    }

                    _this.tickbtn.inputEnabled = false;
                    _this.WaterDropSound.play();
                    _this.BigTankBlueFishGroup.getChildAt(i).events.destroy();//onInputDown.removeAll();

                    _this.FifthTank_X.push(_this.BigTankBlueFishGroup.getChildAt(i).x);
                    _this.FifthTank_Y.push(_this.BigTankBlueFishGroup.getChildAt(i).y);

                    if (_this.ArrayFifthBox[0] == 0) {
                        console.log("0th position:" + _this.FishInSecondSmallTank_X[0], _this.FishInFourthSmallTank_Y[0])
                        _this.fishtween1 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween1.to({ x: _this.FishInSecondSmallTank_X[0], y: _this.FishInFourthSmallTank_Y[0] }, 300, 'Linear', true, 0);//, true, 0);
                        _this.fishtween1.start();

                        _this.fishtween1.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 0;
                            _this.ArrayFifthBox[0] = 1;
                        })

                    }
                    else if (_this.ArrayFifthBox[1] == 0) {
                        console.log("first position:" + _this.FishInSecondSmallTank_X[1], _this.FishInFourthSmallTank_Y[1])
                        _this.fishtween2 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween2.to({ x: _this.FishInSecondSmallTank_X[1], y: _this.FishInFourthSmallTank_Y[1] }, 300, 'Linear', true, 0);

                        _this.fishtween2.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 1;
                            _this.ArrayFifthBox[1] = 1;
                        })
                    }
                    else if (_this.ArrayFifthBox[2] == 0) {
                        console.log("second position:" + _this.FishInSecondSmallTank_X[2], _this.FishInFourthSmallTank_Y[2])
                        _this.fishtween3 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween3.to({ x: _this.FishInSecondSmallTank_X[2], y: _this.FishInFourthSmallTank_Y[2] }, 300, 'Linear', true, 0);

                        _this.fishtween3.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 2;
                            _this.ArrayFifthBox[2] = 1;
                        })
                    }
                    else if (_this.ArrayFifthBox[3] == 0) {
                        console.log("third position:" + _this.FishInSecondSmallTank_X[3], _this.FishInFourthSmallTank_Y[3])
                        _this.fishtween4 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween4.to({ x: _this.FishInSecondSmallTank_X[3], y: _this.FishInFourthSmallTank_Y[3] }, 300, 'Linear', true, 0);

                        _this.fishtween4.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 3;
                            _this.ArrayFifthBox[3] = 1;
                        })

                    }
                    else if (_this.ArrayFifthBox[4] == 0) {
                        console.log("fourth position:" + _this.FishInSecondSmallTank_X[4], _this.FishInFourthSmallTank_Y[4])
                        _this.fishtween5 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween5.to({ x: _this.FishInSecondSmallTank_X[4], y: _this.FishInFourthSmallTank_Y[4] }, 300, 'Linear', true, 0);

                        _this.fishtween5.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 4;
                            _this.ArrayFifthBox[4] = 1;
                        })

                    }
                    else if (_this.ArrayFifthBox[5] == 0) {
                        console.log("fifth position:" + _this.FishInSecondSmallTank_X[5], _this.FishInFourthSmallTank_Y[5])
                        _this.fishtween6 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween6.to({ x: _this.FishInSecondSmallTank_X[5], y: _this.FishInFourthSmallTank_Y[5] }, 300, 'Linear', true, 0);

                        _this.fishtween6.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 4;
                            _this.ArrayFifthBox[5] = 1;
                        })

                    }
                    _this.FifthSmallTankFishGrp.addChild(_this.BigTankBlueFishGroup.getChildAt(i));
                    _this.FifthSmallTankFishGrp.getChildAt(_this.FifthSmallTankFishGrp.length - 1).inputEnabled = false;
                    _this.FifthSmallTankFishGrp.getChildAt(_this.FifthSmallTankFishGrp.length - 1).scale.setTo(0.7, 0.7);
                    // target.addChild(_this.FifthSmallTankFishGrp);//adding as child to the bow

                    // }
                    i -= 1;
                    if (_this.FifthSmallTankFishGrp.length == _this.FirstSmallTankFishGrp.length || _this.BigTankBlueFishGroup.length == 0) {
                        _this.loope.stop()
                        console.log("here");
                        _this.tickbtn.inputEnabled = true;
                        _this.tickbtn.input.useHandCursor = true;

                        target.inputEnabled = true;
                        target.input.useHandCursor = true;
                        console.log(_this.FirstSmallTankFishGrp.length);
                        console.log("stoped");
                        _this.bubbleSound.play();
                        for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                            _this.BowlGroup.getChildAt(j).inputEnabled = true;
                            _this.BowlGroup.getChildAt(j).input.useHandCursor = true;
                        }
                        for (let i = 0; i < _this.BigTankBlueFishGroup.length; i++) {
                            _this.BigTankBlueFishGroup.getChildAt(i).inputEnabled = true;
                            _this.BigTankBlueFishGroup.getChildAt(i).input.useHandCursor = true;
                        }
                    }
                })
            }
        }
        else if (_this.FirstSmallTankFishGrp.length != _this.FifthSmallTankFishGrp.length)//second bowl initial tweening part is done)
        {
            console.log("not tweening fn");
            _this.loope = _this.time.create(false)
            _this.loope.start();
            _this.loope.loop(10, () => {
                _this.WaterDropSound.play();
                _this.FifthSmallTankFishGrp.getChildAt(_this.FifthSmallTankFishGrp.length - 1).x = _this.FifthTank_X[_this.FifthTank_X.length - 1];
                _this.FifthSmallTankFishGrp.getChildAt(_this.FifthSmallTankFishGrp.length - 1).y = _this.FifthTank_Y[_this.FifthTank_Y.length - 1];

                _this.FifthTank_X.pop();
                _this.FifthTank_Y.pop();

                _this.ArrayFifthBox[_this.FifthSmallTankFishGrp.length - 1] = 0;

                _this.BigTankBlueFishGroup.addChild(_this.FifthSmallTankFishGrp.getChildAt(_this.FifthSmallTankFishGrp.length - 1));
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).scale.setTo(0.9, 0.9);
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).inputEnabled = true;
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).input.useHandCursor = true;
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).events.onInputDown.add(_this.bluefishClicked, _this);

                if (_this.FirstSmallTankFishGrp.length == _this.FifthSmallTankFishGrp.length) {
                    console.log("equal");
                    _this.loope.stop();
                    _this.bubbleSound.play();
                    for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                        _this.BowlGroup.getChildAt(j).inputEnabled = true;
                        _this.BowlGroup.getChildAt(j).input.useHandCursor = true;
                    }
                    // target.inputEnabled = true;
                    // target.input.useHandCursor=true;
                }
            })
        }
    },

    SixthBowlClicked: function (target) {
        console.log("SixthBowlClicked");

        let i = _this.BigTankBlueFishGroup.length - 1;
        tweenfishcount = -1;

        if (_this.SixthSmallTankFishGrp.length == 0 && _this.BigTankBlueFishGroup.length > 0 || _this.SixthSmallTankFishGrp.length < _this.FirstSmallTankFishGrp.length) {
            if (_this.BigTankBlueFishGroup.length != 0 && _this.FirstSmallTankFishGrp.length > 0) {
                for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                    _this.BowlGroup.getChildAt(j).inputEnabled = false;
                }
                _this.loope = _this.time.create(false)
                _this.loope.start();
                _this.loope.loop(800, () => {
                    // if(_this.BigTankBlueFishGroup.getChildAt(i).frame == 0)
                    // {
                    for (let i = 0; i < _this.BigTankBlueFishGroup.length; i++) {
                        _this.BigTankBlueFishGroup.getChildAt(i).inputEnabled = false;
                        _this.BigTankBlueFishGroup.getChildAt(i).input.useHandCursor = false;
                    }
                    _this.tickbtn.inputEnabled = false;

                    _this.WaterDropSound.play();
                    _this.BigTankBlueFishGroup.getChildAt(i).events.destroy();//onInputDown.removeAll();

                    _this.SixthTank_X.push(_this.BigTankBlueFishGroup.getChildAt(i).x);
                    _this.SixthTank_Y.push(_this.BigTankBlueFishGroup.getChildAt(i).y);

                    if (_this.ArraySixthBox[0] == 0) {
                        console.log("0th position:" + _this.FishInThirdSmallTank_X[0], _this.FishInFourthSmallTank_Y[0])
                        _this.fishtween1 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween1.to({ x: _this.FishInThirdSmallTank_X[0], y: _this.FishInFourthSmallTank_Y[0] }, 300, 'Linear', true, 0);//, true, 0);
                        _this.fishtween1.start();

                        _this.fishtween1.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 0;
                            _this.ArraySixthBox[0] = 1;
                        })

                    }
                    else if (_this.ArraySixthBox[1] == 0) {
                        console.log("first position:" + _this.FishInThirdSmallTank_X[1], _this.FishInFourthSmallTank_Y[1])
                        _this.fishtween2 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween2.to({ x: _this.FishInThirdSmallTank_X[1], y: _this.FishInFourthSmallTank_Y[1] }, 300, 'Linear', true, 0);

                        _this.fishtween2.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 1;
                            _this.ArraySixthBox[1] = 1;
                        })
                    }
                    else if (_this.ArraySixthBox[2] == 0) {
                        console.log("second position:" + _this.FishInThirdSmallTank_X[2], _this.FishInFourthSmallTank_Y[2])
                        _this.fishtween3 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween3.to({ x: _this.FishInThirdSmallTank_X[2], y: _this.FishInFourthSmallTank_Y[2] }, 300, 'Linear', true, 0);

                        _this.fishtween3.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 2;
                            _this.ArraySixthBox[2] = 1;
                        })
                    }
                    else if (_this.ArraySixthBox[3] == 0) {
                        console.log("third position:" + _this.FishInThirdSmallTank_X[3], _this.FishInFourthSmallTank_Y[3])
                        _this.fishtween4 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween4.to({ x: _this.FishInThirdSmallTank_X[3], y: _this.FishInFourthSmallTank_Y[3] }, 300, 'Linear', true, 0);

                        _this.fishtween4.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 3;
                            _this.ArraySixthBox[3] = 1;
                        })

                    }
                    else if (_this.ArraySixthBox[4] == 0) {
                        console.log("fourth position:" + _this.FishInThirdSmallTank_X[4], _this.FishInFourthSmallTank_Y[4])
                        _this.fishtween5 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween5.to({ x: _this.FishInThirdSmallTank_X[4], y: _this.FishInFourthSmallTank_Y[4] }, 300, 'Linear', true, 0);

                        _this.fishtween5.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 4;
                            _this.ArraySixthBox[4] = 1;
                        })

                    }
                    else if (_this.ArraySixthBox[5] == 0) {
                        console.log("fifth position:" + _this.FishInThirdSmallTank_X[5], _this.FishInFourthSmallTank_Y[5])
                        _this.fishtween6 = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(i));
                        _this.fishtween6.to({ x: _this.FishInThirdSmallTank_X[5], y: _this.FishInFourthSmallTank_Y[5] }, 300, 'Linear', true, 0);

                        _this.fishtween6.onComplete.add(function () {
                            // _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1).name = 4;
                            _this.ArraySixthBox[5] = 1;
                        })

                    }
                    _this.SixthSmallTankFishGrp.addChild(_this.BigTankBlueFishGroup.getChildAt(i));
                    _this.SixthSmallTankFishGrp.getChildAt(_this.SixthSmallTankFishGrp.length - 1).inputEnabled = false;
                    _this.SixthSmallTankFishGrp.getChildAt(_this.SixthSmallTankFishGrp.length - 1).scale.setTo(0.7, 0.7);
                    // target.addChild(_this.SixthSmallTankFishGrp);//adding as child to the bow

                    // }
                    i -= 1;
                    if (_this.SixthSmallTankFishGrp.length == _this.FirstSmallTankFishGrp.length || _this.BigTankBlueFishGroup.length == 0) {
                        _this.loope.stop()
                        console.log("here");
                        _this.tickbtn.inputEnabled = true;
                        _this.tickbtn.input.useHandCursor = true;
                        target.inputEnabled = true;
                        target.input.useHandCursor = true;
                        console.log(_this.FirstSmallTankFishGrp.length);
                        console.log("stoped");
                        _this.bubbleSound.play();
                        for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                            _this.BowlGroup.getChildAt(j).inputEnabled = true;
                            _this.BowlGroup.getChildAt(j).input.useHandCursor = true;
                        }
                        for (let i = 0; i < _this.BigTankBlueFishGroup.length; i++) {
                            _this.BigTankBlueFishGroup.getChildAt(i).inputEnabled = true;
                            _this.BigTankBlueFishGroup.getChildAt(i).input.useHandCursor = true;
                        }
                    }
                })
            }
        }
        else if (_this.FirstSmallTankFishGrp.length != _this.SixthSmallTankFishGrp.length)//second bowl initial tweening part is done)
        {
            console.log("not tweening fn");
            _this.loope = _this.time.create(false)
            _this.loope.start();
            _this.loope.loop(10, () => {
                _this.WaterDropSound.play();
                _this.SixthSmallTankFishGrp.getChildAt(_this.SixthSmallTankFishGrp.length - 1).x = _this.SixthTank_X[_this.SixthTank_X.length - 1];
                _this.SixthSmallTankFishGrp.getChildAt(_this.SixthSmallTankFishGrp.length - 1).y = _this.SixthTank_Y[_this.SixthTank_Y.length - 1];

                _this.SixthTank_X.pop();
                _this.SixthTank_Y.pop();

                _this.ArraySixthBox[_this.SixthSmallTankFishGrp.length - 1] = 0;

                _this.BigTankBlueFishGroup.addChild(_this.SixthSmallTankFishGrp.getChildAt(_this.SixthSmallTankFishGrp.length - 1));
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).scale.setTo(0.9, 0.9);
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).inputEnabled = true;
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).input.useHandCursor = true;
                _this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length - 1).events.onInputDown.add(_this.bluefishClicked, _this);

                if (_this.FirstSmallTankFishGrp.length == _this.SixthSmallTankFishGrp.length) {
                    console.log("equal");
                    _this.loope.stop();
                    _this.bubbleSound.play();
                    for (let j = _this.BowlGroup.length - 1; j >= 0; j--) {
                        _this.BowlGroup.getChildAt(j).inputEnabled = true;
                        _this.BowlGroup.getChildAt(j).input.useHandCursor = true;
                    }
                    // target.inputEnabled = true;
                    // target.input.useHandCursor=true;
                }
            })
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

        if (_this.PartA == 1) {
            _this.numGroup.destroy();
            _this.selectedAns1 = "";
            _this.selectedAns2 = "";

            // console.log("parta"+Number("" +var_selectedAns1+var_selectedAns2),_this.ZArray[_this.PartAQnCnt])
            // if(Number("" +var_selectedAns1+var_selectedAns2) == _this.ZArray[_this.PartAQnCnt])
            if (_this.AnswerBox.name == _this.ZArray[_this.PartAQnCnt]) {
                console.log("currect ans entered");
                if (_this.count1 == 0) {
                    _this.Question_flag = -1;
                    _this.VoiceNote3Fn();
                    _this.time.events.add(3000, function () {
                        _this.Question_flag = 3;
                    })
                }
                else {
                    _this.Question_flag = 3;
                }

                _this.clearRemainingObjects();
                _this.PartA_MCQ();

            }
            else {
                _this.wrongSound.play();
                console.log("wrong ans entered");
                _this.enterTxt.destroy();
                _this.addNumberPad();
            }
        }

        if (_this.PartB == 1) {
            _this.numGroup.destroy();
            _this.selectedAns1 = "";
            _this.selectedAns2 = "";

            console.log(Number("" + var_selectedAns1 + var_selectedAns2), _this.YArray_PartB[_this.PartBQnCnt])
            // if(Number("" +var_selectedAns1+var_selectedAns2) == _this.YArray_PartB[_this.PartBQnCnt])
            if (_this.AnswerBox.name == _this.YArray_PartB[_this.PartBQnCnt]) {
                console.log("currect ans entered");
                if (_this.count1 == 0) {
                    _this.Question_flag = -1;
                    _this.VoiceNote3Fn();

                    _this.time.events.add(3000, function () {
                        _this.Question_flag = 3;
                    })
                }
                else {
                    _this.Question_flag = 3;
                }

                _this.clearRemainingObjects_PartB();
                _this.PartB_MCQ();

            }
            else {
                _this.wrongSound.play();
                console.log("wrong ans entered");
                _this.enterTxt.destroy();
                _this.addNumberPad();
            }
        }
    },

    clearRemainingObjects: function () {
        console.log("remaining");
        // _this.Aquarium.destroy();
        _this.Fishanim = [];
        _this.ansBoxBg.destroy();
        _this.BowlGroup.destroy();
        _this.FirstSmallTank.destroy();
        _this.FirstSmallTankFishGrp.destroy();
        _this.FourthSmallTankFishGrp.destroy();
        _this.SecondSmallTankFishGrp.destroy();
        _this.ThirdSmallTankFishGrp.destroy();
        _this.FifthSmallTankFishGrp.destroy();
        _this.SixthSmallTankFishGrp.destroy();

        _this.BigTankBlueFishGroup.destroy();
        // _this.FirstSmallTank.removeChildren();
        _this.x_box.destroy();
        _this.equal_box.destroy();
        _this.y_And_z_box.destroy();

        _this.ClearAquariumObj();
    },

    PartA_MCQ: function () {
        // _this.Aquarium.destroy();

        _this.OptionBox_X = [50, 300, 550];
        _this.OptionBox_X = _this.shuffle(_this.OptionBox_X);
        _this.OptionBox_Y = 250;

        _this.QuestionBox();

        _this.OptionPaneltickbtn = _this.add.sprite(800, 250, 'TickBtn');
        _this.OptionPaneltickbtn.frame = 1;
        _this.OptionPaneltickbtn.visible = false;

        _this.PlacingMCQoption();

        //option1

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
        if (_this.SignArray[_this.randomIndexArray[0]] == "x") {
            var OptionBox1Sign = _this.add.text(130, 22, _this.SignArray[_this.randomIndexArray[0]]);
        }
        else if (_this.SignArray[_this.randomIndexArray[0]] == '/') {
            var OptionBox1Sign = _this.add.text(132, 22, _this.SignArray[_this.randomIndexArray[0]]);
        }

        _this.applyingStyle(OptionBox1Sign);
        OptionBox1Sign.name = _this.SignArray[_this.randomIndexArray[0]];

        _this.OptionBox1 = _this.add.image(_this.OptionBox_X[0], _this.OptionBox_Y, 'Text box_4');
        _this.OptionBox1.name = '1';
        if (OptionBox1Sign.name == 'x') {
            _this.Box1result = OptionBox1Value1.name * OptionBox1Value2.name;
            _this.Box1result.name = OptionBox1Value1.name * OptionBox1Value2.name;
        }
        else if (OptionBox1Sign.name == '/') {
            _this.Box1result = OptionBox1Value1.name / OptionBox1Value2.name;
            _this.Box1result.name = OptionBox1Value1.name / OptionBox1Value2.name;
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


        //option2 
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
        if (_this.SignArray[_this.randomIndexArray[1]] == "x") {
            var OptionBox2Sign = _this.add.text(130, 22, _this.SignArray[_this.randomIndexArray[1]]);
        }
        else if (_this.SignArray[_this.randomIndexArray[1]] == '/') {
            var OptionBox2Sign = _this.add.text(134, 22, _this.SignArray[_this.randomIndexArray[1]]);
        }

        _this.applyingStyle(OptionBox2Sign);
        OptionBox2Sign.name = _this.SignArray[_this.randomIndexArray[1]];

        _this.OptionBox2 = _this.add.image(_this.OptionBox_X[1], _this.OptionBox_Y, 'Text box_4');
        _this.OptionBox2.name = '2';

        if (OptionBox2Sign.name == 'x') {
            _this.Box2result = OptionBox2Value1.name * OptionBox2Value2.name;
            _this.Box2result.name = OptionBox2Value1.name * OptionBox2Value2.name;
        }
        else if (OptionBox2Sign.name == '/') {
            _this.Box2result = OptionBox2Value1.name / OptionBox2Value2.name;
            _this.Box2result.name = OptionBox2Value1.name / OptionBox2Value2.name;
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


        //option3 
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
        if (_this.SignArray[_this.randomIndexArray[2]] == "x") {
            var OptionBox3Sign = _this.add.text(130, 22, _this.SignArray[_this.randomIndexArray[2]]);
        }
        else if (_this.SignArray[_this.randomIndexArray[2]] == '/') {
            var OptionBox3Sign = _this.add.text(132, 22, _this.SignArray[_this.randomIndexArray[2]]);
        }

        _this.applyingStyle(OptionBox3Sign);
        OptionBox3Sign.name = _this.SignArray[_this.randomIndexArray[2]];

        _this.OptionBox3 = _this.add.image(_this.OptionBox_X[2], _this.OptionBox_Y, 'Text box_4');
        _this.OptionBox3.name = '3';
        if (OptionBox3Sign.name == 'x') {
            _this.Box3result = OptionBox3Value1.name * OptionBox3Value2.name;
            _this.Box3result.name = OptionBox3Value1.name * OptionBox3Value2.name;
        }
        else if (OptionBox3Sign.name == '/') {
            _this.Box3result = OptionBox3Value1.name / OptionBox3Value2.name;
            _this.Box3result.name = OptionBox3Value1.name / OptionBox3Value2.name;
        }

        console.log(_this.Box3result);
        _this.OptionBox3.addChild(_this.a3);
        _this.OptionBox3.addChild(_this.equals3);
        _this.OptionBox3.addChild(_this.equals3);
        _this.OptionBox3.addChild(OptionBox3Value1);
        _this.OptionBox3.addChild(OptionBox3Value2);
        _this.OptionBox3.addChild(OptionBox3Sign);
        console.log(_this.OptionBox3.getChildAt(3).name);

        _this.OptionBox3.inputEnabled = true;
        _this.OptionBox3.input.useHandCursor = true;
        _this.OptionBox3.events.onInputDown.add(_this.optionClicked, _this.OptionBox3, _this.Box3result);
    },

    QuestionBox: function () {
        var x = _this.add.text(20, 20, _this.XArray[_this.PartAQnCnt]);//
        _this.applyingStyle(x);
        var equal = _this.add.text(60, 20, "=");
        _this.applyingStyle(equal);
        var y = _this.add.text(90, 20, _this.YArray[_this.PartAQnCnt]);//
        _this.applyingStyle(y);
        var minus = _this.add.text(132, 20, "x");
        _this.applyingStyle(minus);
        var z = _this.add.text(165, 20, "a");
        _this.applyingStyle(z);
        z.fill = '#FF0000';
        _this.QnBox = _this.add.image(50, 50, 'Text box_4');
        _this.QnBox.addChild(x);
        _this.QnBox.addChild(equal);
        _this.QnBox.addChild(y);
        _this.QnBox.addChild(minus);
        _this.QnBox.addChild(z);
        _this.MCQBackground = _this.add.image(10, 150, 'BlueBg');
    },

    PlacingMCQoption: function () {
        _this.CurrectAnsX = _this.XArray[_this.PartAQnCnt];
        _this.CurrectAnsY = _this.YArray[_this.PartAQnCnt];
        _this.CurrectAnsSign = '/';

        _this.XvalueArray = [_this.XArray[_this.PartAQnCnt], _this.YArray[_this.PartAQnCnt]];//,_this.YArray[_this.PartAQnCnt]];
        _this.YvalueArray = [_this.YArray[_this.PartAQnCnt], _this.XArray[_this.PartAQnCnt]];//,_this.XArray[_this.PartAQnCnt]];
        _this.SignArray = ['x', '/'];

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

    applyingStyle: function (target) {
        target.align = 'right';
        target.font = "Akzidenz-Grotesk BQ";
        target.fill = '#65B4C3';
        target.fontWeight = 'normal';
        target.visible = true;
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

        _this.OptionPaneltickbtn.name = finalResult;
        console.log("finalResult= " + finalResult);
        if (_this.OptionPaneltickbtn.visible == false) {
            _this.OptionPaneltickbtn.visible = true;
            _this.OptionPaneltickbtn.inputEnabled = true;
            _this.OptionPaneltickbtn.input.useHandCursor = true;
            _this.OptionPaneltickbtn.events.onInputDown.add(_this.OptionPanelTickbtnClicked, _this);

        }
    },

    OptionPanelTickbtnClicked: function (target) {
        console.log(target.name);
        _this.OptionPaneltickbtn.inputEnabled = false;
        _this.OptionBox1.inputEnabled = false;
        _this.OptionBox2.inputEnabled = false;
        _this.OptionBox3.inputEnabled = false;
        if (Number(target.name) == _this.ZArray[_this.PartAQnCnt]) {
            console.log("ans is correct");

            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.starActions(_this.count1);
            _this.celebrationSound.play();
            _this.time.events.add(2000, function () {
                _this.OptionPaneltickbtn.destroy();
                _this.OptionBox1.destroy();
                _this.OptionBox2.destroy();
                _this.OptionBox3.destroy();
                _this.MCQBackground.destroy();
                _this.QnBox.destroy();
                _this.CallingNextQuestion();
            });
        }
        else {
            _this.noofAttempts++;
            console.log("ans is wrong");
            _this.wrongSound.play();
            _this.OptionBox1.frame = 0;
            _this.OptionBox2.frame = 0;
            _this.OptionBox3.frame = 0;
            _this.OptionBox1.inputEnabled = true;
            _this.OptionBox1.input.useHandCursor = true;

            _this.OptionBox2.inputEnabled = true;
            _this.OptionBox2.input.useHandCursor = true;

            _this.OptionBox3.inputEnabled = true;
            _this.OptionBox3.input.useHandCursor = true;

            _this.OptionPaneltickbtn.inputEnabled = true;
            _this.OptionPaneltickbtn.input.useHandCursor = true;

        }
    },


    wrongbtnClicked: function (target) {
        _this.clickSound.play();
        _this.selectedAns1 = '';
        _this.selectedAns2 = '';
        _this.AnswerBox.removeChild(_this.enterTxt);
        _this.AnswerBox.name = 0;

    },

    tweenNumPad: function () {
        _this.numGroup.visible = true;
        _this.numpadTween.to({ x: 0, y: -43 }, 1000, 'Linear', true, 0);

    },


    CallingNextQuestion: function () {
        _this.sceneCount++;
        _this.AnsTimerCount = 0;
        _this.noofAttempts = 0;
        if (_this.QuestionArray[_this.count1] == 1) _this.PartAQnCnt++;
        if (_this.QuestionArray[_this.count1] == 2) _this.PartBQnCnt++;
        _this.count1++;
        // _this.DecidesQn();
        if (_this.count1 < 6) {
            _this.Question_flag = 1;
            console.log(_this.QuestionArray[_this.count1])
            _this.bubblesAnimation1();
            _this.AquariumBox();
            _this.EquationFn_PartA = false;
            _this.EquationFn_PartB = false;
            console.log("_this.PartAQnCnt" + _this.PartAQnCnt)
            console.log("_this.PartBQnCnt" + _this.PartBQnCnt)

            if (_this.QuestionArray[_this.count1] == 1) {
                console.log("partA");
                // _this.randomizing_elements_PartA();//PArtA
                _this.Question_flag = 1;
                _this.loadingPartAObject();//PartA

            }
            else if (_this.QuestionArray[_this.count1] == 2) {
                console.log("partB");
                // _this.randomizing_elements_PartB();
                _this.Question_flag = 4;
                _this.loadingPartBObject();
            }
        }
        else {
            _this.timer1.stop();
            _this.timer1 = null;
            _this.time.events.add(1000, function () {
                //_this.state.start('score')
                _this.state.start('score', true, false,gameID,_this.microConcepts);
            });
        }
    },

    //* Change this function to take 2 digit numbers only. No sign expected.
    //* this is called when a number on num pad is clicked.

    numClicked: function (target) {
        _this.clickSound.play();
        //_this.Question_flag = -1;
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

        if (Number('' + var_selectedAns1) == 0 && ('' + var_selectedAns2) < 10) {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.enterTxt = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
            _this.AnswerBox.addChild(_this.enterTxt);
        }
        else if (Number('' + var_selectedAns1 + var_selectedAns2) < 10) {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.enterTxt = _this.add.text(18, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
            _this.AnswerBox.addChild(_this.enterTxt);
        }
        else if (Number('' + var_selectedAns1 + var_selectedAns2) >= 10) {
            _this.AnswerBox.removeChild(_this.enterTxt);
            _this.enterTxt = _this.add.text(10, 10, "" + var_selectedAns1 + var_selectedAns2, { fontSize: '30px' });
            _this.AnswerBox.addChild(_this.enterTxt);
        }
        _this.AnswerBox.name = Number('' + var_selectedAns1 + var_selectedAns2);


        _this.enterTxt.align = 'right';
        _this.enterTxt.font = "Akzidenz-Grotesk BQ";
        _this.enterTxt.fill = '#65B4C3';
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.visible = true;
    },

    randomizing_elements_PartB: function () {
        // Math.floor((Math.random() * (max-min)) + min);
        for (i = 0; i < 3; i++) {
            _this.Z = Math.floor(Math.random() * (7 - 2) + 2);
            _this.ZArray_PartB.push(_this.Z)

            _this.Y = Math.floor((Math.random() * (6 - 2)) + 2); // Generate random num 2 to 6

            // while(_this.Z == _this.Y)
            // {
            //     _this.Y = Math.floor((Math.random() * (6-1)) + 1); // Generate random num 2 to 6
            // }
            for (j = 0; j < _this.YArray_PartB.length; j++) {
                if (_this.Y == _this.YArray_PartB[j]) {
                    _this.Y = Math.floor((Math.random() * (6 - 2)) + 2);
                    j = -1;
                }
            }
            _this.YArray_PartB.push(_this.Y);

            _this.X = _this.Y * _this.Z;
            _this.XArray_PartB.push(_this.X);
        }

        console.log(_this.ZArray_PartB);
        console.log(_this.YArray_PartB);
        console.log(_this.XArray_PartB, _this.XArray_PartB[_this.PartBQnCnt]);
    },

    loadingPartBObject: function () {
        _this.PartA = 0;
        _this.PartB = 1;
        _this.PotPlacingArray = [0, 0, 0, 0, 0];

        _this.pot1Array = [0, 0, 0, 0, 0, 0];
        _this.pot2Array = [0, 0, 0, 0, 0, 0];
        _this.pot3Array = [0, 0, 0, 0, 0, 0];
        _this.pot4Array = [0, 0, 0, 0, 0, 0];
        _this.pot5Array = [0, 0, 0, 0, 0, 0];

        _this.pot1FishPos_X = [380, 430]; //applicable for pot1 and pot3 in second row
        _this.pot2FishPos_X = [570, 620]; //applicable for pot2 and pot5 in second row
        _this.pot3FishPos_X = [770, 820];
        _this.potFishPos_Y1 = [165, 135, 105];
        _this.potFishPos_Y2 = [335, 305, 275];
        _this.PotCount = 0;

        _this.BigTank1_X = []; //storing x y while adding to first tank
        _this.BigTank1_Y = [];

        _this.BigTank2_X = []; //storing x y while adding to sec tank
        _this.BigTank2_Y = [];

        _this.BigTank3_X = []; //storing x y while adding to third tank
        _this.BigTank3_Y = [];

        _this.BigTank4_X = []; //storing x y while adding to fourth tank
        _this.BigTank4_Y = [];

        _this.BigTank5_X = []; //storing x y while adding to fifth tank
        _this.BigTank5_Y = [];

        // _this.Aquarium = _this.add.image(10,100,'aquiriumBox');
        // _this.Aquarium.scale.setTo(0.9,1.0);
        // _this.AquariumBox();


        _this.FishBowlPositionX = [360, 550, 750];
        _this.FishBowlPositionY = [80, 250];
        _this.pot1 = _this.add.sprite(360, 80, 'FishBowl');
        _this.pot1.scale.setTo(0.8, 0.8);
        _this.pot1.visible = false;
        _this.pot2 = _this.add.sprite(550, 80, 'FishBowl');
        _this.pot2.scale.setTo(0.8, 0.8);
        _this.pot2.visible = false;

        _this.pot3 = _this.add.sprite(360, 250, 'FishBowl');
        _this.pot3.scale.setTo(0.8, 0.8);
        _this.pot3.visible = false;
        _this.pot4 = _this.add.sprite(550, 250, 'FishBowl');
        _this.pot4.scale.setTo(0.8, 0.8);
        _this.pot4.visible = false;
        _this.pot5 = _this.add.sprite(750, 250, 'FishBowl');
        _this.pot5.scale.setTo(0.8, 0.8);
        _this.pot5.visible = false;

        console.log(_this.XArray_PartB[_this.PartBQnCnt]);
        _this.placingBlueFishPartB(_this.XArray_PartB[_this.PartBQnCnt]);

        _this.pot1FishGrp = _this.add.group();
        _this.pot2FishGrp = _this.add.group();
        _this.pot3FishGrp = _this.add.group();
        _this.pot4FishGrp = _this.add.group();
        _this.pot5FishGrp = _this.add.group();
        _this.pot6FishGrp = _this.add.group();

        _this.ButtonBg = _this.add.image(750, 90, 'butonBg');
        _this.potbg = _this.add.image(19, 19, 'pot_EraserBg');
        _this.eraserbg = _this.add.image(72, 19, 'pot_EraserBg');
        _this.ButtonBg.addChild(_this.eraserbg);
        _this.ButtonBg.addChild(_this.potbg);

        _this.potbtn = _this.add.image(9, 10, 'Potbtn');
        _this.potbg.addChild(_this.potbtn);

        _this.eraserbtn = _this.add.image(9, 10, 'Ereser');
        _this.eraserbg.addChild(_this.eraserbtn);

        _this.potbg.inputEnabled = true;
        _this.potbg.input.useHandCursor = true;
        _this.potbg.events.onInputDown.add(_this.potBtnClicked, _this);

        if (_this.EquationFn_PartB == false) //means if equation is not loaded
        {
            _this.EquationLoadingFn_PartB();
            _this.EquationFn_PartB = true;
        }
    },

    AquariumBox: function () {
        _this.Aquarium = _this.add.image(10, 103, 'aquiriumBox');
        _this.Aquarium.scale.setTo(0.9, 1.05);

        _this.sand = _this.add.image(16, 327, 'sand');
        _this.sand.scale.setTo(0.9, 1.0);

        _this.Plant_1 = _this.add.image(80, 280, 'Plant');
        _this.Grass_2_1 = _this.add.image(270, 241, 'Grass_2');
        _this.image11_anim = _this.Grass_2_1.animations.add('draw');
        _this.image11_anim.play(15);
        _this.image11_anim.onComplete.add(function () {
            _this.image11_anim.play(15);
        }, _this);

        _this.Grass_1_2 = _this.add.sprite(25, 208, 'Grass_1');
        _this.Grass_1_2.frame = 0;
        _this.image12_anim = _this.Grass_1_2.animations.add('draw');
        _this.image12_anim.play(15);
        _this.image12_anim.onComplete.add(function () {
            _this.image12_anim.play(15);
        }, _this);

        _this.Grass_1_1 = _this.add.sprite(346, 200, 'Grass_1');
        _this.Grass_1_1.frame = 0;
        _this.image13_anim = _this.Grass_1_1.animations.add('draw');
        _this.image13_anim.play(15);
        _this.image13_anim.onComplete.add(function () {
            _this.image13_anim.play(15);
        }, _this);
        _this.Grass_1_1.scale.x *= -1;
    },

    placingBlueFishPartB: function (valueOfX) {
        console.log(valueOfX);
        _this.BigTankBlueFishGroup_PartB = _this.add.group();
        var BlueFishCount = 0;

        _this.BlueFishNameArray = [];

        var reminder = valueOfX % 5;
        var qutient = valueOfX - reminder;
        var mainrow = qutient / 5;
        console.log(mainrow);

        for (var i = 0; i < mainrow; i++) {
            if (i % 2 == 0) {
                for (j = 0; j < 5; j++) {
                    _this.BlueFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X[j], _this.FishPositionArray_y[i], 'BlueFishAnim');
                    _this.BlueFishInAquirium.scale.setTo(0.9, 0.9);
                    // _this.BlueFishInAquirium.anchor.setTo(0.1, 0);
                    // _this.BlueFishInAquirium.scale.x *= -1;
                    _this.BigTankBlueFishGroup_PartB.addChild(_this.BlueFishInAquirium);

                    BlueFishCount++;
                }
            }
            else {
                for (j = 0; j < 5; j++) {
                    _this.BlueFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X_RevrseFish[j], _this.FishPositionArray_y[i], 'BlueFishAnim');
                    _this.BlueFishInAquirium.scale.setTo(0.9, 0.9);
                    // _this.BlueFishInAquirium.anchor.setTo(1, 0);
                    _this.BigTankBlueFishGroup_PartB.addChild(_this.BlueFishInAquirium);
                    BlueFishCount++;
                }
            }
        }

        if (valueOfX % 5 != 0) {
            if (valueOfX < 5) {
                _this.GenerateRemaingBlueFishPartB(0, reminder, BlueFishCount);
            }
            else {
                _this.GenerateRemaingBlueFishPartB(mainrow, reminder, BlueFishCount);
            }
        }
        _this.fishAnimFn_PartB();
    },

    GenerateRemaingBlueFishPartB: function (row, quesion, BlueFishCount) {
        if (row % 2 == 0) {
            for (k = 0; k < quesion; k++) {
                _this.BlueFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X[k], _this.FishPositionArray_y[row], 'BlueFishAnim');
                _this.BlueFishInAquirium.scale.setTo(0.9, 0.9);
                // _this.BlueFishInAquirium.anchor.setTo(0.1, 0);
                // _this.BlueFishInAquirium.scale.x *= -1;
                _this.BigTankBlueFishGroup_PartB.addChild(_this.BlueFishInAquirium);

                BlueFishCount++;
            }
        }
        else {
            for (k = 0; k < quesion; k++) {
                _this.BlueFishInAquirium = _this.add.sprite(_this.BlueFishPositionArray_X_RevrseFish[k], _this.FishPositionArray_y[row], 'BlueFishAnim');
                _this.BlueFishInAquirium.scale.setTo(0.9, 0.9);
                // _this.BlueFishInAquirium.anchor.setTo(0.9, 0);
                _this.BigTankBlueFishGroup_PartB.addChild(_this.BlueFishInAquirium);

                BlueFishCount++;
            }
        }
    },

    fishAnimFn_PartB: function () {
        console.log("here")
        _this.Fishanim_PartB = [];
        _this.red = [];
        for (let i = 0; i < _this.BigTankBlueFishGroup_PartB.length; i++) {
            // _this.red[i] = _this.add.sprite(_this.RedFishGroup.getChildAt(i).x+2,_this.RedFishGroup.getChildAt(i).y+10,'orangefishanim');
            _this.Fishanim_PartB[i] = _this.BigTankBlueFishGroup_PartB.getChildAt(i).animations.add('BlueFishAnim');
            _this.Fishanim_PartB[i].play(15);
            _this.Fishanim_PartB[i].onComplete.add(function () {

                _this.Fishanim_PartB.forEach(element => {
                    if (element)
                        element.play(15)
                });

            }, _this);
        }
    },

    EquationLoadingFn_PartB: function () {
        _this.PartBEquationLoading = 1;
        _this.x_box = _this.add.image(100, 400, 'Text box_1');
        if (_this.XArray_PartB[_this.PartBQnCnt] >= 10) {
            x = _this.add.text(20, 20, _this.XArray_PartB[_this.PartBQnCnt]);
        }
        else {
            x = _this.add.text(27, 20, _this.XArray_PartB[_this.PartBQnCnt]);
        }

        _this.applyingStyle(x);
        _this.x_box.addChild(x);

        _this.equal_box = _this.add.image(320, 400, 'Text box_1');
        equal = _this.add.text(27, 20, "=");
        _this.applyingStyle(equal);
        _this.equal_box.addChild(equal);

        _this.y_And_z_box = _this.add.image(580, 400, 'Text box_2');
        y = _this.add.text(20, 20, "b");

        _this.applyingStyle(y);
        y.fill = '#FF0000';
        _this.y_And_z_box.addChild(y);
        multiply = _this.add.text(60, 20, 'x');
        _this.applyingStyle(multiply);
        _this.y_And_z_box.addChild(multiply);
        a = _this.add.text(92, 20, _this.ZArray_PartB[_this.PartBQnCnt]);
        _this.applyingStyle(a);

        _this.y_And_z_box.addChild(a);

        _this.PartBTickbtn = _this.add.sprite(800, 405, 'TickBtn');
        _this.PartBTickbtn.visible = false;
    },

    potBtnClicked: function () {
        console.log("add pot")
        _this.eraserbtn.inputEnabled = true;
        _this.eraserbtn.input.useHandCursor = true;
        _this.eraserbtn.events.onInputDown.add(_this.eraserClicked, _this);


        if (_this.PotPlacingArray[0] == 1 && _this.PotPlacingArray[1] == 1 && _this.PotPlacingArray[2] == 1 && _this.PotPlacingArray[3] == 1 && _this.PotPlacingArray[4] == 1) {
            console.log("placingall")
            _this.potbg.inputEnabled = false;
        }
        else {
            console.log("increment else");
            _this.PotCount++;
        }
        console.log(_this.PotPlacingArray[0], _this.PotPlacingArray[1], _this.PotPlacingArray[2], _this.PotPlacingArray[3], _this.PotPlacingArray[4])

        if (_this.PotPlacingArray[0] == 0) {
            console.log("placing1")
            _this.pot1.visible = true;
            _this.pot1.inputEnabled = true;
            _this.pot1.input.useHandCursor = true;
            _this.pot1.events.onInputDown.add(_this.pot1Clicked, _this);
            _this.PotPlacingArray[0] = 1;
        }
        else if (_this.PotPlacingArray[1] == 0) {
            console.log("placing2")
            _this.pot2.visible = true;
            _this.pot2.inputEnabled = true;
            _this.pot2.input.useHandCursor = true;
            _this.pot2.events.onInputDown.add(_this.pot2Clicked, _this);
            _this.PotPlacingArray[1] = 1;
        }
        else if (_this.PotPlacingArray[2] == 0) {
            console.log("placing3")
            _this.pot3.visible = true;
            _this.pot3.inputEnabled = true;
            _this.pot3.input.useHandCursor = true;
            _this.pot3.events.onInputDown.add(_this.pot3Clicked, _this);
            _this.PotPlacingArray[2] = 1;
        }
        else if (_this.PotPlacingArray[3] == 0) {
            console.log("placing3")
            _this.pot4.visible = true;
            _this.pot4.inputEnabled = true;
            _this.pot4.input.useHandCursor = true;
            _this.pot4.events.onInputDown.add(_this.pot4Clicked, _this);
            _this.PotPlacingArray[3] = 1;
        }
        else if (_this.PotPlacingArray[4] == 0) {
            console.log("placing4")
            _this.pot5.visible = true;
            _this.pot5.inputEnabled = true;
            _this.pot5.input.useHandCursor = true;
            _this.pot5.events.onInputDown.add(_this.pot5Clicked, _this);
            _this.PotPlacingArray[4] = 1;
        }


    },

    pot1Clicked: function () {
        console.log(_this.ZArray_PartB[_this.PartBQnCnt])
        let col = 0;
        let row = 0;
        let i = 0;
        _this.pot1.inputEnabled = false;
        _this.pot2.inputEnabled = false;
        _this.pot3.inputEnabled = false;
        _this.pot4.inputEnabled = false;
        _this.pot5.inputEnabled = false;

        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(500, () => {
            console.log(_this.BigTankBlueFishGroup_PartB.length, _this.pot1FishGrp.length)
            if (_this.BigTankBlueFishGroup_PartB.length > 0 && _this.pot1FishGrp.length != _this.ZArray_PartB[_this.PartBQnCnt]) {
                console.log("here" + _this.pot1FishPos_X[col], _this.potFishPos_Y1[row]);
                _this.WaterDropSound.play();
                _this.BigTank1_X.push(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).x);
                _this.BigTank1_Y.push(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).y);
                // fishtween = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1));
                fishtween = _this.add.tween(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1));
                fishtween.to({ x: _this.pot1FishPos_X[col], y: _this.potFishPos_Y1[row] }, 300, 'Linear', true, 0);
                fishtween.start();

                _this.pot1.inputEnabled = false;
                _this.pot2.inputEnabled = false;
                _this.pot3.inputEnabled = false;
                _this.pot4.inputEnabled = false;
                _this.pot5.inputEnabled = false;

                _this.eraserbtn.inputEnabled = false;
                //_this.potbg.inputEnabled = false;
                fishtween.onComplete.add(function () {
                    _this.pot1FishGrp.addChild(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1))
                    _this.pot1FishGrp.getChildAt(i).scale.setTo(0.8, 0.8);

                    if (col == 1) {
                        row++;
                        col = 0;
                    }
                    else {
                        col++;
                    }
                    i++;

                    if (i == _this.ZArray_PartB[_this.PartBQnCnt]) {
                        _this.loope.stop();
                        _this.eraserbtn.inputEnabled = true;
                        _this.eraserbtn.input.useHandCursor = true;
                        // _this.potbg.inputEnabled = true;
                        // _this.potbg.input.useHandCursor = true;

                        _this.time.events.add(1000, function () {
                            console.log("enabled");
                            _this.pot1.inputEnabled = true;
                            _this.pot2.inputEnabled = true;
                            _this.pot3.inputEnabled = true;
                            _this.pot4.inputEnabled = true;
                            _this.pot5.inputEnabled = true;
                            _this.pot1.input.useHandCursor = true;
                            _this.pot2.input.useHandCursor = true;
                            _this.pot3.input.useHandCursor = true;
                            _this.pot4.input.useHandCursor = true;
                            _this.pot5.input.useHandCursor = true;
                        });
                        _this.bubbleSound.play();
                        console.log(_this.BigTankBlueFishGroup_PartB.length);
                        if (_this.BigTankBlueFishGroup_PartB.length == 0) {
                            _this.PartBTickbtn.visible = true;
                            _this.time.events.add(500, _this.PartBtickbtnFn)
                        }
                    }
                });
                console.log(_this.pot1FishGrp.length);
            }
            else {
                _this.loope.stop();
                _this.bubbleSound.play();
                _this.pot1.inputEnabled = true;
                _this.pot2.inputEnabled = true;
                _this.pot3.inputEnabled = true;
                _this.pot4.inputEnabled = true;
                _this.pot5.inputEnabled = true;
                _this.pot1.input.useHandCursor = true;
                _this.pot2.input.useHandCursor = true;
                _this.pot3.input.useHandCursor = true;
                _this.pot4.input.useHandCursor = true;
                _this.pot5.input.useHandCursor = true;
            }
        });
    },

    pot2Clicked: function () {
        console.log(_this.ZArray_PartB[_this.PartBQnCnt])
        let col = 0;
        let row = 0;
        let i = 0;
        _this.pot1.inputEnabled = false;
        _this.pot2.inputEnabled = false;
        _this.pot3.inputEnabled = false;
        _this.pot4.inputEnabled = false;
        _this.pot5.inputEnabled = false;

        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(575, () => {
            console.log(_this.BigTankBlueFishGroup_PartB.length, _this.pot2FishGrp.length)
            if (_this.BigTankBlueFishGroup_PartB.length > 0 && _this.pot2FishGrp.length != _this.ZArray_PartB[_this.PartBQnCnt]) {
                console.log("here" + _this.pot2FishPos_X[col], _this.potFishPos_Y1[row]);
                _this.WaterDropSound.play();
                _this.BigTank2_X.push(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).x);
                _this.BigTank2_Y.push(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).y);
                // fishtween = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1));
                fishtween = _this.add.tween(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1));
                fishtween.to({ x: _this.pot2FishPos_X[col], y: _this.potFishPos_Y1[row] }, 300, 'Linear', true, 0);
                fishtween.start();

                _this.pot1.inputEnabled = false;
                _this.pot2.inputEnabled = false;
                _this.pot3.inputEnabled = false;
                _this.pot4.inputEnabled = false;
                _this.pot5.inputEnabled = false;

                _this.eraserbtn.inputEnabled = false;
                //_this.potbg.inputEnabled = false;
                fishtween.onComplete.add(function () {
                    _this.pot2FishGrp.addChild(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1))
                    _this.pot2FishGrp.getChildAt(i).scale.setTo(0.8, 0.8);

                    if (col == 1) {
                        row++;
                        col = 0;
                    }
                    else {
                        col++;
                    }
                    i++;

                    if (i == _this.ZArray_PartB[_this.PartBQnCnt]) {
                        _this.loope.stop();
                        _this.eraserbtn.inputEnabled = true;
                        _this.eraserbtn.input.useHandCursor = true;
                        // _this.potbg.inputEnabled = true;
                        // _this.potbg.input.useHandCursor = true;

                        _this.bubbleSound.play();
                        _this.time.events.add(1000, function () {
                            console.log("enabled");
                            _this.pot1.inputEnabled = true;
                            _this.pot2.inputEnabled = true;
                            _this.pot3.inputEnabled = true;
                            _this.pot4.inputEnabled = true;
                            _this.pot5.inputEnabled = true;
                            _this.pot1.input.useHandCursor = true;
                            _this.pot2.input.useHandCursor = true;
                            _this.pot3.input.useHandCursor = true;
                            _this.pot4.input.useHandCursor = true;
                            _this.pot5.input.useHandCursor = true;
                        });
                        console.log(_this.BigTankBlueFishGroup_PartB.length);
                        if (_this.BigTankBlueFishGroup_PartB.length == 0) {
                            _this.PartBTickbtn.visible = true;
                            _this.time.events.add(500, _this.PartBtickbtnFn)
                        }
                    }
                });
                console.log(_this.pot1FishGrp.length);
            }
            else {
                _this.loope.stop();
                _this.bubbleSound.play();
                _this.pot1.inputEnabled = true;
                _this.pot2.inputEnabled = true;
                _this.pot3.inputEnabled = true;
                _this.pot4.inputEnabled = true;
                _this.pot5.inputEnabled = true;
                _this.pot1.input.useHandCursor = true;
                _this.pot2.input.useHandCursor = true;
                _this.pot3.input.useHandCursor = true;
                _this.pot4.input.useHandCursor = true;
                _this.pot5.input.useHandCursor = true;
            }

        });
    },

    pot3Clicked: function () {
        console.log(_this.ZArray_PartB[_this.PartBQnCnt], _this.pot3FishGrp.length)
        let col = 0;
        let row = 0;
        let i = 0;
        _this.pot1.inputEnabled = false;
        _this.pot2.inputEnabled = false;
        _this.pot3.inputEnabled = false;
        _this.pot4.inputEnabled = false;
        _this.pot5.inputEnabled = false;

        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(650, () => {
            console.log(_this.BigTankBlueFishGroup_PartB.length, _this.pot3FishGrp.length)
            if (_this.BigTankBlueFishGroup_PartB.length > 0 && _this.pot3FishGrp.length != _this.ZArray_PartB[_this.PartBQnCnt]) {
                console.log("here" + _this.pot2FishPos_X[col], _this.potFishPos_Y2[row]);
                _this.WaterDropSound.play();
                _this.BigTank3_X.push(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).x);
                _this.BigTank3_Y.push(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).y);
                // fishtween = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1));
                fishtween = _this.add.tween(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1));
                fishtween.to({ x: _this.pot1FishPos_X[col], y: _this.potFishPos_Y2[row] }, 300, 'Linear', true, 0);
                fishtween.start();

                _this.pot1.inputEnabled = false;
                _this.pot2.inputEnabled = false;
                _this.pot3.inputEnabled = false;
                _this.pot4.inputEnabled = false;
                _this.pot5.inputEnabled = false;

                _this.eraserbtn.inputEnabled = false;
                // _this.potbg.inputEnabled = false;
                fishtween.onComplete.add(function () {
                    _this.pot3FishGrp.addChild(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1))
                    _this.pot3FishGrp.getChildAt(i).scale.setTo(0.8, 0.8);

                    if (col == 1) {
                        row++;
                        col = 0;
                    }
                    else {
                        col++;
                    }
                    i++;

                    if (i == _this.ZArray_PartB[_this.PartBQnCnt]) {
                        _this.loope.stop();
                        _this.eraserbtn.inputEnabled = true;
                        _this.eraserbtn.input.useHandCursor = true;
                        // _this.potbg.inputEnabled = true;
                        // _this.potbg.input.useHandCursor = true;
                        _this.time.events.add(1000, function () {
                            console.log("enabled");
                            _this.pot1.inputEnabled = true;
                            _this.pot2.inputEnabled = true;
                            _this.pot3.inputEnabled = true;
                            _this.pot4.inputEnabled = true;
                            _this.pot5.inputEnabled = true;
                            _this.pot1.input.useHandCursor = true;
                            _this.pot2.input.useHandCursor = true;
                            _this.pot3.input.useHandCursor = true;
                            _this.pot4.input.useHandCursor = true;
                            _this.pot5.input.useHandCursor = true;
                        });
                        console.log(_this.BigTankBlueFishGroup_PartB.length);
                        _this.bubbleSound.play();
                        if (_this.BigTankBlueFishGroup_PartB.length == 0) {
                            _this.PartBTickbtn.visible = true;
                            _this.time.events.add(500, _this.PartBtickbtnFn)
                        }
                    }
                });
                console.log(_this.pot3FishGrp.length);
            }
            else {
                _this.loope.stop();
                _this.bubbleSound.play();

                _this.pot1.inputEnabled = true;
                _this.pot2.inputEnabled = true;
                _this.pot3.inputEnabled = true;
                _this.pot4.inputEnabled = true;
                _this.pot5.inputEnabled = true;

                _this.pot1.input.useHandCursor = true;
                _this.pot2.input.useHandCursor = true;
                _this.pot3.input.useHandCursor = true;
                _this.pot4.input.useHandCursor = true;
                _this.pot5.input.useHandCursor = true;
            }
        });
    },

    pot4Clicked: function () {
        console.log(_this.ZArray_PartB[_this.PartBQnCnt])
        let col = 0;
        let row = 0;
        let i = 0;
        _this.pot1.inputEnabled = false;
        _this.pot2.inputEnabled = false;
        _this.pot3.inputEnabled = false;
        _this.pot4.inputEnabled = false;
        _this.pot5.inputEnabled = false;

        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(725, () => {
            console.log(_this.BigTankBlueFishGroup_PartB.length, _this.pot4FishGrp.length)
            if (_this.BigTankBlueFishGroup_PartB.length > 0 && _this.pot4FishGrp.length != _this.ZArray_PartB[_this.PartBQnCnt]) {
                console.log("here" + _this.pot2FishPos_X[col], _this.potFishPos_Y1[row]);
                _this.WaterDropSound.play();
                _this.BigTank4_X.push(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).x);
                _this.BigTank4_Y.push(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).y);

                // fishtween = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1));
                fishtween = _this.add.tween(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1));
                fishtween.to({ x: _this.pot2FishPos_X[col], y: _this.potFishPos_Y2[row] }, 300, 'Linear', true, 0);
                fishtween.start();

                _this.pot1.inputEnabled = false;
                _this.pot2.inputEnabled = false;
                _this.pot3.inputEnabled = false;
                _this.pot4.inputEnabled = false;
                _this.pot5.inputEnabled = false;

                _this.eraserbtn.inputEnabled = false;
                // _this.potbg.inputEnabled = false;
                fishtween.onComplete.add(function () {
                    _this.pot4FishGrp.addChild(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1))
                    _this.pot4FishGrp.getChildAt(i).scale.setTo(0.8, 0.8);

                    if (col == 1) {
                        row++;
                        col = 0;
                    }
                    else {
                        col++;
                    }
                    i++;

                    if (i == _this.ZArray_PartB[_this.PartBQnCnt]) {
                        _this.loope.stop();
                        _this.eraserbtn.inputEnabled = true;
                        _this.eraserbtn.input.useHandCursor = true;
                        // _this.potbg.inputEnabled = true;
                        // _this.potbg.input.useHandCursor = true;
                        _this.time.events.add(1000, function () {
                            console.log("enabled");
                            _this.pot1.inputEnabled = true;
                            _this.pot2.inputEnabled = true;
                            _this.pot3.inputEnabled = true;
                            _this.pot4.inputEnabled = true;
                            _this.pot5.inputEnabled = true;
                            _this.pot1.input.useHandCursor = true;
                            _this.pot2.input.useHandCursor = true;
                            _this.pot3.input.useHandCursor = true;
                            _this.pot4.input.useHandCursor = true;
                            _this.pot5.input.useHandCursor = true;
                        });
                        console.log(_this.BigTankBlueFishGroup_PartB.length);
                        _this.bubbleSound.play();
                        if (_this.BigTankBlueFishGroup_PartB.length == 0) {
                            _this.PartBTickbtn.visible = true;
                            _this.time.events.add(500, _this.PartBtickbtnFn)

                        }
                    }
                });
                console.log(_this.pot4FishGrp.length);
            }
            else {
                _this.loope.stop();
                _this.bubbleSound.play();

                _this.pot1.inputEnabled = true;
                _this.pot2.inputEnabled = true;
                _this.pot3.inputEnabled = true;
                _this.pot4.inputEnabled = true;
                _this.pot5.inputEnabled = true;
                _this.pot1.input.useHandCursor = true;
                _this.pot2.input.useHandCursor = true;
                _this.pot3.input.useHandCursor = true;
                _this.pot4.input.useHandCursor = true;
                _this.pot5.input.useHandCursor = true;
            }
        });
    },

    pot5Clicked: function () {
        console.log(_this.ZArray_PartB[_this.PartBQnCnt])
        let col = 0;
        let row = 0;
        let i = 0;

        _this.pot1.inputEnabled = false;
        _this.pot2.inputEnabled = false;
        _this.pot3.inputEnabled = false;
        _this.pot4.inputEnabled = false;
        _this.pot5.inputEnabled = false;

        _this.loope = _this.time.create(false)
        _this.loope.start();
        _this.loope.loop(800, () => {
            console.log(_this.BigTankBlueFishGroup_PartB.length, _this.pot5FishGrp.length)
            if (_this.BigTankBlueFishGroup_PartB.length > 0 && _this.pot5FishGrp.length != _this.ZArray_PartB[_this.PartBQnCnt]) {
                _this.WaterDropSound.play();
                console.log("here" + _this.pot3FishPos_X[col], _this.potFishPos_Y2[row]);
                _this.BigTank5_X.push(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).x);
                _this.BigTank5_Y.push(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).y);

                // fishtween = _this.add.tween(_this.BigTankBlueFishGroup.getChildAt(_this.BigTankBlueFishGroup.length-1));
                fishtween = _this.add.tween(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1));
                fishtween.to({ x: _this.pot3FishPos_X[col], y: _this.potFishPos_Y2[row] }, 300, 'Linear', true, 0);
                fishtween.start();

                _this.pot1.inputEnabled = false;
                _this.pot2.inputEnabled = false;
                _this.pot3.inputEnabled = false;
                _this.pot4.inputEnabled = false;
                _this.pot5.inputEnabled = false;

                _this.eraserbtn.inputEnabled = false;
                // _this.potbg.inputEnabled = false;
                fishtween.onComplete.add(function () {
                    _this.pot5FishGrp.addChild(_this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1))
                    _this.pot5FishGrp.getChildAt(i).scale.setTo(0.8, 0.8);

                    if (col == 1) {
                        row++;
                        col = 0;
                    }
                    else {
                        col++;
                    }
                    i++;

                    if (i == _this.ZArray_PartB[_this.PartBQnCnt]) {
                        _this.loope.stop();
                        _this.eraserbtn.inputEnabled = true;
                        _this.eraserbtn.input.useHandCursor = true;
                        // _this.potbg.inputEnabled = true;
                        // _this.potbg.input.useHandCursor = true;
                        _this.time.events.add(1000, function () {
                            console.log("enabled");
                            _this.pot1.inputEnabled = true;
                            _this.pot2.inputEnabled = true;
                            _this.pot3.inputEnabled = true;
                            _this.pot4.inputEnabled = true;
                            _this.pot5.inputEnabled = true;
                            _this.pot1.input.useHandCursor = true;
                            _this.pot2.input.useHandCursor = true;
                            _this.pot3.input.useHandCursor = true;
                            _this.pot4.input.useHandCursor = true;
                            _this.pot5.input.useHandCursor = true;
                        });

                        console.log(_this.BigTankBlueFishGroup_PartB.length);
                        _this.bubbleSound.play();
                        if (_this.BigTankBlueFishGroup_PartB.length == 0) {
                            _this.PartBTickbtn.visible = true;
                            _this.time.events.add(500, _this.PartBtickbtnFn)
                            // _this.PartBtickbtnFn();
                        }
                    }
                });
                console.log(_this.pot1FishGrp.length);
            }
            else {
                _this.loope.stop();
                _this.bubbleSound.play();
                _this.pot1.inputEnabled = true;
                _this.pot2.inputEnabled = true;
                _this.pot3.inputEnabled = true;
                _this.pot4.inputEnabled = true;
                _this.pot5.inputEnabled = true;
                _this.pot1.input.useHandCursor = true;
                _this.pot2.input.useHandCursor = true;
                _this.pot3.input.useHandCursor = true;
                _this.pot4.input.useHandCursor = true;
                _this.pot5.input.useHandCursor = true;
            }
        });
    },

    eraserClicked: function (target) {
        target.input.enableDrag(true);
        _this.eraserX = target.x;
        _this.eraserY = target.y;
        _this.clickSound.play();
        target.events.onDragStop.add(_this.Overlap_Eraser, target);
    },

    Overlap_Eraser: function (target) {
        if (_this.checkOverlap(target, _this.pot1)) {
            _this.pot1.visible = false;
            _this.pot1.inputEnabled = false;
            _this.potbg.inputEnabled = true;
            _this.potbg.input.useHandCursor = true;
            _this.PotPlacingArray[0] = 0;
            _this.PotCount--;

            if (_this.pot1FishGrp) {
                for (let i = _this.pot1FishGrp.length - 1; i >= 0; i--) {
                    _this.pot1FishGrp.getChildAt(_this.pot1FishGrp.length - 1).x = _this.BigTank1_X[i];
                    _this.pot1FishGrp.getChildAt(_this.pot1FishGrp.length - 1).y = _this.BigTank1_Y[i];
                    _this.BigTankBlueFishGroup_PartB.addChild(_this.pot1FishGrp.getChildAt(i));
                    _this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).scale.setTo(0.9, 0.9);
                }
            }

        }
        if (_this.checkOverlap(target, _this.pot2)) {
            _this.pot2.visible = false;
            _this.pot2.inputEnabled = false;
            _this.potbg.inputEnabled = true;
            _this.potbg.input.useHandCursor = true;
            _this.PotPlacingArray[1] = 0;
            _this.PotCount--;

            if (_this.pot2FishGrp) {

                console.log(_this.pot2FishGrp.length)
                for (let j = _this.pot2FishGrp.length - 1; j >= 0; j--) {
                    _this.pot2FishGrp.getChildAt(j).x = _this.BigTank2_X[j];
                    _this.pot2FishGrp.getChildAt(j).y = _this.BigTank2_Y[j];
                    _this.BigTankBlueFishGroup_PartB.addChild(_this.pot2FishGrp.getChildAt(j));
                    _this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).scale.setTo(0.9, 0.9);
                    console.log(_this.BigTankBlueFishGroup_PartB.length)
                }
            }
        }
        if (_this.checkOverlap(target, _this.pot3)) {
            _this.pot3.visible = false;
            _this.pot3.inputEnabled = false;
            _this.potbg.inputEnabled = true;
            _this.potbg.input.useHandCursor = true;
            _this.PotPlacingArray[2] = 0;
            _this.PotCount--;

            if (_this.pot3FishGrp) {
                for (let i = _this.pot3FishGrp.length - 1; i >= 0; i--) {
                    _this.pot3FishGrp.getChildAt(_this.pot3FishGrp.length - 1).x = _this.BigTank3_X[i];
                    _this.pot3FishGrp.getChildAt(_this.pot3FishGrp.length - 1).y = _this.BigTank3_Y[i];
                    _this.BigTankBlueFishGroup_PartB.addChild(_this.pot3FishGrp.getChildAt(_this.pot3FishGrp.length - 1));
                    _this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).scale.setTo(0.9, 0.9);
                }
            }
        }
        if (_this.checkOverlap(target, _this.pot4)) {
            _this.pot4.visible = false;
            _this.pot4.inputEnabled = false;
            _this.potbg.inputEnabled = true;
            _this.potbg.input.useHandCursor = true;
            _this.PotPlacingArray[3] = 0;
            _this.PotCount--;

            if (_this.pot4FishGrp) {
                for (let i = _this.pot4FishGrp.length - 1; i >= 0; i--) {
                    _this.pot4FishGrp.getChildAt(_this.pot4FishGrp.length - 1).x = _this.BigTank4_X[i];
                    _this.pot4FishGrp.getChildAt(_this.pot4FishGrp.length - 1).y = _this.BigTank4_Y[i];
                    _this.BigTankBlueFishGroup_PartB.addChild(_this.pot4FishGrp.getChildAt(_this.pot4FishGrp.length - 1));
                    _this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).scale.setTo(0.9, 0.9);
                }
            }

        }

        if (_this.checkOverlap(target, _this.pot5)) {
            _this.pot5.visible = false;
            _this.pot5.inputEnabled = false;
            _this.potbg.inputEnabled = true;
            _this.potbg.input.useHandCursor = true;
            _this.PotPlacingArray[4] = 0;
            _this.PotCount--;

            if (_this.pot5FishGrp) {
                for (let i = _this.pot5FishGrp.length - 1; i >= 0; i--) {
                    _this.pot5FishGrp.getChildAt(_this.pot5FishGrp.length - 1).x = _this.BigTank5_X[i];
                    _this.pot5FishGrp.getChildAt(_this.pot5FishGrp.length - 1).y = _this.BigTank5_Y[i];
                    _this.BigTankBlueFishGroup_PartB.addChild(_this.pot5FishGrp.getChildAt(_this.pot5FishGrp.length - 1));
                    _this.BigTankBlueFishGroup_PartB.getChildAt(_this.BigTankBlueFishGroup_PartB.length - 1).scale.setTo(0.9, 0.9);
                }
            }

        }
        target.x = _this.eraserX;
        target.y = _this.eraserY;

    },

    PartBtickbtnFn: function () {
        _this.PartBTickbtn.inputEnabled = true;
        _this.PartBTickbtn.input.useHandCursor = true;
        _this.PartBTickbtn.events.onInputDown.add(_this.PartBTickbtnClicked, _this)
    },

    PartBTickbtnClicked: function () {
        console.log(_this.YArray_PartB[_this.PartBQnCnt], _this.PotCount);

        if (_this.PotCount == _this.YArray_PartB[_this.PartBQnCnt]) {
            _this.potbg.inputEnabled = false;
            _this.eraserbtn.inputEnabled = false;
            _this.CurrectAns(_this.PartBTickbtn);
        }
        else {
            _this.wrongSound.play();
            _this.PartBTickbtn.visible = false;
            _this.PartBTickbtn.inputEnabled = false;
            _this.BigTankBlueFishGroup_PartB.destroy();
            // _this.Aquarium.destroy();
            // _this.ClearAquariumObj();
            _this.ButtonBg.destroy();


            _this.pot1.destroy();
            _this.pot2.destroy();
            _this.pot3.destroy();
            _this.pot4.destroy();
            _this.pot5.destroy();
            // if(_this.pot1.visible == true) {_this.pot1.visible=false;}
            // if(_this.pot2.visible == true) {_this.pot2.visible=false; }
            // if(_this.pot3.visible == true) {_this.pot3.visible=false; }
            // if(_this.pot4.visible == true) {_this.pot4.visible=false; }
            // if(_this.pot5.visible == true) {_this.pot5.visible=false; }

            _this.pot1FishGrp.destroy();
            _this.pot2FishGrp.destroy();
            _this.pot3FishGrp.destroy();
            _this.pot4FishGrp.destroy();
            _this.pot5FishGrp.destroy();

            _this.loadingPartBObject();
        }
    },

    ClearAquariumObj: function () {
        _this.Aquarium.destroy();
        _this.sand.destroy();
        _this.Plant_1.destroy();
        _this.Grass_2_1.destroy();
        _this.image11_anim.destroy();

        _this.Grass_1_2.destroy();
        _this.image12_anim.destroy();

        _this.Grass_1_1.destroy();
        _this.image13_anim.destroy();

        _this.imageb11.destroy();
        _this.imageb11_anim.destroy();

        _this.imageb21.destroy();
        _this.imageb21_anim.destroy();

        _this.imageb31.destroy();
        _this.imageb31_anim.destroy();
    },

    clearRemainingObjects_PartB: function () {
        _this.x_box.destroy();
        _this.equal_box.destroy();
        _this.y_And_z_box.destroy();
        _this.ButtonBg.destroy();

        _this.ClearAquariumObj();
        _this.ansBoxBg.destroy();

        if (_this.pot1.visible == true) {
            _this.pot1.destroy();
            _this.pot1FishGrp.destroy();
        }

        if (_this.pot2.visible == true) {
            _this.pot2.destroy();
            _this.pot2FishGrp.destroy();
        }

        if (_this.pot3.visible == true) {
            _this.pot3.destroy();
            _this.pot3FishGrp.destroy();
        }

        if (_this.pot4.visible == true) {
            _this.pot4.destroy();
            _this.pot4FishGrp.destroy();
        }

        if (_this.pot5.visible == true) {
            _this.pot5.destroy();
            _this.pot5FishGrp.destroy();
        }
    },

    PartB_MCQ: function () {
        _this.OptionBox_X = [50, 300, 550];
        _this.OptionBox_X = _this.shuffle(_this.OptionBox_X);
        _this.OptionBox_Y = 250;

        _this.QuestionBox_PartB();

        _this.OptionPaneltickbtn_PartB = _this.add.sprite(800, 250, 'TickBtn');
        _this.OptionPaneltickbtn_PartB.frame = 1;
        _this.OptionPaneltickbtn_PartB.visible = false;

        _this.PlacingMCQoption_PartB();

        _this.a1 = _this.add.text(25, 20, 'b');
        _this.applyingStyle(_this.a1);
        _this.a1.fill = '#FF0000';
        _this.equals1 = _this.add.text(50, 22, '=');
        _this.applyingStyle(_this.equals1);
        var OptionBox1Value1 = _this.add.text(85, 22, _this.XvalueArray[_this.randomIndexArray[0]]);
        _this.applyingStyle(OptionBox1Value1);
        OptionBox1Value1.name = _this.XvalueArray[_this.randomIndexArray[0]];
        var OptionBox1Value2 = _this.add.text(170, 22, _this.ZvalueArray[_this.randomIndexArray[0]]);
        _this.applyingStyle(OptionBox1Value2);
        OptionBox1Value2.name = _this.ZvalueArray[_this.randomIndexArray[0]];
        if (_this.SignArray[_this.randomIndexArray[0]] == "x") {
            var OptionBox1Sign = _this.add.text(130, 22, _this.SignArray[_this.randomIndexArray[0]]);
        }
        else if (_this.SignArray[_this.randomIndexArray[0]] == '/') {
            var OptionBox1Sign = _this.add.text(132, 22, _this.SignArray[_this.randomIndexArray[0]]);
        }

        _this.applyingStyle(OptionBox1Sign);
        OptionBox1Sign.name = _this.SignArray[_this.randomIndexArray[0]];

        _this.OptionBox1_PartB = _this.add.image(_this.OptionBox_X[0], _this.OptionBox_Y, 'Text box_4');
        _this.OptionBox1_PartB.name = '1';
        if (OptionBox1Sign.name == 'x') {
            _this.Box1result_PartB = OptionBox1Value1.name * OptionBox1Value2.name;
            _this.Box1result_PartB.name = OptionBox1Value1.name * OptionBox1Value2.name;
        }
        else if (OptionBox1Sign.name == '/') {
            _this.Box1result_PartB = OptionBox1Value1.name / OptionBox1Value2.name;
            _this.Box1result_PartB.name = OptionBox1Value1.name / OptionBox1Value2.name;
        }

        console.log(_this.Box1result_PartB);
        _this.OptionBox1_PartB.addChild(_this.a1);
        _this.OptionBox1_PartB.addChild(_this.equals1);
        _this.OptionBox1_PartB.addChild(OptionBox1Value1);
        _this.OptionBox1_PartB.addChild(OptionBox1Value2);
        _this.OptionBox1_PartB.addChild(OptionBox1Sign);

        _this.OptionBox1_PartB.inputEnabled = true;
        _this.OptionBox1_PartB.input.useHandCursor = true;
        _this.OptionBox1_PartB.events.onInputDown.add(_this.optionClicked_PartB, _this.OptionBox1_PartB, _this.Box1result_PartB);


        //option2 
        _this.a2 = _this.add.text(25, 20, 'b');
        _this.applyingStyle(_this.a2);
        _this.a2.fill = '#FF0000';
        _this.equals2 = _this.add.text(50, 22, '=');
        _this.applyingStyle(_this.equals2);
        var OptionBox2Value1 = _this.add.text(85, 22, _this.XvalueArray[_this.randomIndexArray[1]]);
        _this.applyingStyle(OptionBox2Value1);
        OptionBox2Value1.name = _this.XvalueArray[_this.randomIndexArray[1]];
        var OptionBox2Value2 = _this.add.text(170, 22, _this.ZvalueArray[_this.randomIndexArray[1]]);
        _this.applyingStyle(OptionBox2Value2);
        OptionBox2Value2.name = _this.ZvalueArray[_this.randomIndexArray[1]];
        if (_this.SignArray[_this.randomIndexArray[1]] == "x") {
            var OptionBox2Sign = _this.add.text(130, 22, _this.SignArray[_this.randomIndexArray[1]]);
        }
        else if (_this.SignArray[_this.randomIndexArray[1]] == '/') {
            var OptionBox2Sign = _this.add.text(134, 22, _this.SignArray[_this.randomIndexArray[1]]);
        }

        _this.applyingStyle(OptionBox2Sign);
        OptionBox2Sign.name = _this.SignArray[_this.randomIndexArray[1]];

        _this.OptionBox2_PartB = _this.add.image(_this.OptionBox_X[1], _this.OptionBox_Y, 'Text box_4');
        _this.OptionBox2_PartB.name = '2';

        if (OptionBox2Sign.name == 'x') {
            _this.Box2result_PartB = OptionBox2Value1.name * OptionBox2Value2.name;
            _this.Box2result_PartB.name = OptionBox2Value1.name * OptionBox2Value2.name;
        }
        else if (OptionBox2Sign.name == '/') {
            _this.Box2result_PartB = OptionBox2Value1.name / OptionBox2Value2.name;
            _this.Box2result_PartB.name = OptionBox2Value1.name / OptionBox2Value2.name;
        }

        console.log(_this.Box2result_PartB);
        _this.OptionBox2_PartB.addChild(_this.a2);
        _this.OptionBox2_PartB.addChild(_this.equals2);
        _this.OptionBox2_PartB.addChild(OptionBox2Value1);
        _this.OptionBox2_PartB.addChild(OptionBox2Value2);
        _this.OptionBox2_PartB.addChild(OptionBox2Sign);

        _this.OptionBox2_PartB.inputEnabled = true;
        _this.OptionBox2_PartB.input.useHandCursor = true;
        _this.OptionBox2_PartB.events.onInputDown.add(_this.optionClicked_PartB, _this.OptionBox2_PartB, _this.Box2result_PartB);


        //option3 
        _this.a3 = _this.add.text(25, 20, 'b');
        _this.applyingStyle(_this.a3);
        _this.a3.fill = '#FF0000';
        _this.equals3 = _this.add.text(50, 22, '=');
        _this.applyingStyle(_this.equals3);
        var OptionBox3Value1 = _this.add.text(85, 22, _this.XvalueArray[_this.randomIndexArray[2]]);
        _this.applyingStyle(OptionBox3Value1);
        OptionBox3Value1.name = _this.XvalueArray[_this.randomIndexArray[2]];
        var OptionBox3Value2 = _this.add.text(170, 22, _this.ZvalueArray[_this.randomIndexArray[2]]);
        _this.applyingStyle(OptionBox3Value2);
        OptionBox3Value2.name = _this.ZvalueArray[_this.randomIndexArray[2]];
        if (_this.SignArray[_this.randomIndexArray[2]] == "x") {
            var OptionBox3Sign = _this.add.text(130, 22, _this.SignArray[_this.randomIndexArray[2]]);
        }
        else if (_this.SignArray[_this.randomIndexArray[2]] == '/') {
            var OptionBox3Sign = _this.add.text(132, 22, _this.SignArray[_this.randomIndexArray[2]]);
        }

        _this.applyingStyle(OptionBox3Sign);
        OptionBox3Sign.name = _this.SignArray[_this.randomIndexArray[2]];

        _this.OptionBox3_PartB = _this.add.image(_this.OptionBox_X[2], _this.OptionBox_Y, 'Text box_4');
        _this.OptionBox3_PartB.name = '3';
        if (OptionBox3Sign.name == 'x') {
            _this.Box3result_PartB = OptionBox3Value1.name * OptionBox3Value2.name;
            _this.Box3result_PartB.name = OptionBox3Value1.name * OptionBox3Value2.name;
        }
        else if (OptionBox3Sign.name == '/') {
            _this.Box3result_PartB = OptionBox3Value1.name / OptionBox3Value2.name;
            _this.Box3result_PartB.name = OptionBox3Value1.name / OptionBox3Value2.name;
        }

        console.log(_this.Box3result_PartB);
        _this.OptionBox3_PartB.addChild(_this.a3);
        _this.OptionBox3_PartB.addChild(_this.equals3);
        _this.OptionBox3_PartB.addChild(_this.equals3);
        _this.OptionBox3_PartB.addChild(OptionBox3Value1);
        _this.OptionBox3_PartB.addChild(OptionBox3Value2);
        _this.OptionBox3_PartB.addChild(OptionBox3Sign);
        console.log(_this.OptionBox3_PartB.getChildAt(3).name);

        _this.OptionBox3_PartB.inputEnabled = true;
        _this.OptionBox3_PartB.input.useHandCursor = true;
        _this.OptionBox3_PartB.events.onInputDown.add(_this.optionClicked_PartB, _this.OptionBox3_PartB, _this.Box3result_PartB);
    },

    QuestionBox_PartB: function () {
        var x = _this.add.text(20, 20, _this.XArray_PartB[_this.PartBQnCnt]);//
        _this.applyingStyle(x);

        var equal = _this.add.text(60, 20, "=");
        _this.applyingStyle(equal);

        var y = _this.add.text(90, 20, "b");//
        _this.applyingStyle(y);
        y.fill = '#FF0000';

        var multiply = _this.add.text(132, 20, "x");
        _this.applyingStyle(multiply);

        var z = _this.add.text(165, 20, _this.ZArray_PartB[_this.PartBQnCnt]);
        _this.applyingStyle(z);

        _this.QnBox_B = _this.add.image(50, 50, 'Text box_4');
        _this.QnBox_B.addChild(x);
        _this.QnBox_B.addChild(equal);
        _this.QnBox_B.addChild(y);
        _this.QnBox_B.addChild(multiply);
        _this.QnBox_B.addChild(z);
        _this.MCQBackground_B = _this.add.image(10, 150, 'BlueBg');
    },

    PlacingMCQoption_PartB: function () {
        _this.CurrectAnsX = _this.XArray_PartB[_this.PartBQnCnt];
        _this.CurrectAnsZ = _this.ZArray_PartB[_this.PartBQnCnt];
        _this.CurrectAnsSign = '/';

        console.log(_this.CurrectAnsX);
        console.log(_this.CurrectAnsZ);

        _this.XvalueArray = [_this.XArray_PartB[_this.PartBQnCnt], _this.ZArray_PartB[_this.PartBQnCnt]];//,_this.ZArray_PartB[_this.PartBQnCnt]];
        _this.ZvalueArray = [_this.ZArray_PartB[_this.PartBQnCnt], _this.XArray_PartB[_this.PartBQnCnt]];//,_this.XArray_PartB[_this.PartBQnCnt]];
        _this.SignArray = ['x', '/'];

        console.log(_this.XvalueArray);
        console.log(_this.ZvalueArray);

        _this.randomIndexArray = [0, 1, 2];
        _this.randomIndexArray = _this.shuffle(_this.randomIndexArray);

        _this.randomIndex = Math.floor(Math.random() * 3);
        console.log(_this.randomIndex);

        // will insert item into array at the specified index (deleting 0 items first, that is, it's just an insert).
        _this.XvalueArray.splice(_this.randomIndex, 0, _this.CurrectAnsX);
        _this.ZvalueArray.splice(_this.randomIndex, 0, _this.CurrectAnsZ);
        _this.SignArray.splice(_this.randomIndex, 0, _this.CurrectAnsSign);

        console.log(_this.XvalueArray);
        console.log(_this.ZvalueArray);
        console.log(_this.SignArray);
    },

    optionClicked_PartB: function (target1) {
        var finalResult;
        console.log("optionClicked" + target1.name);
        console.log(Number(target1.name));

        if (Number(target1.name) == 1) {
            console.log("optionClicked" + target1.name);
            _this.OptionBox1_PartB.frame = 1;
            _this.OptionBox2_PartB.frame = 0;
            _this.OptionBox3_PartB.frame = 0;
            finalResult = _this.Box1result_PartB;
        }
        if (Number(target1.name) == 2) {
            console.log("optionClicked" + target1.name);
            _this.OptionBox2_PartB.frame = 1;
            _this.OptionBox1_PartB.frame = 0;
            _this.OptionBox3_PartB.frame = 0;
            finalResult = _this.Box2result_PartB;
        }
        if (Number(target1.name) == 3) {
            console.log("optionClicked" + target1.name);
            _this.OptionBox3_PartB.frame = 1;
            _this.OptionBox1_PartB.frame = 0;
            _this.OptionBox2_PartB.frame = 0;
            finalResult = _this.Box3result_PartB;
        }

        _this.OptionPaneltickbtn_PartB.name = finalResult;
        console.log("finalResult= " + finalResult);
        if (_this.OptionPaneltickbtn_PartB.visible == false) {
            _this.OptionPaneltickbtn_PartB.visible = true;
            _this.OptionPaneltickbtn_PartB.inputEnabled = true;
            _this.OptionPaneltickbtn_PartB.input.useHandCursor = true;
            _this.OptionPaneltickbtn_PartB.events.onInputDown.add(_this.OptionPanelTickbtnClicked_PartB, _this);

        }
    },

    OptionPanelTickbtnClicked_PartB: function (target) {
        console.log(target.name);
        _this.OptionPaneltickbtn_PartB.inputEnabled = false;
        _this.OptionBox1_PartB.inputEnabled = false;
        _this.OptionBox2_PartB.inputEnabled = false;
        _this.OptionBox3_PartB.inputEnabled = false;
        if (Number(target.name) == _this.YArray_PartB[_this.PartBQnCnt]) {
            console.log("ans is correct");
            _this.noofAttempts++;
            telInitializerbbpp.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);

            _this.starActions(_this.count1);
            _this.celebrationSound.play();
            _this.time.events.add(2000, function () {
                _this.OptionPaneltickbtn_PartB.destroy();
                _this.OptionBox1_PartB.destroy();
                _this.OptionBox2_PartB.destroy();
                _this.OptionBox3_PartB.destroy();
                _this.MCQBackground_B.destroy();
                _this.QnBox_B.destroy();
                _this.clearRemainingObjects_PartB();
                _this.CallingNextQuestion();
            });
        }
        else {
            _this.noofAttempts++;
            console.log("ans is wrong");
            _this.wrongSound.play();
            _this.OptionBox1_PartB.frame = 0;
            _this.OptionBox2_PartB.frame = 0;
            _this.OptionBox3_PartB.frame = 0;
            _this.OptionBox1_PartB.inputEnabled = true;
            _this.OptionBox1_PartB.input.useHandCursor = true;
            _this.OptionBox2_PartB.inputEnabled = true;
            _this.OptionBox2_PartB.input.useHandCursor = true;
            _this.OptionBox3_PartB.inputEnabled = true;
            _this.OptionBox3_PartB.input.useHandCursor = true;
            _this.OptionPaneltickbtn_PartB.inputEnabled = true;
            _this.OptionPaneltickbtn_PartB.input.useHandCursor = true;
        }
    },

    VoiceNote1Fn: function () {
        console.log("Question");
        console.log("_this.languageSelected", _this.languageSelected);
        _this.Question_flag = -1;
        _this.VoiceNote1 = document.createElement('audio');
        _this.VoiceNote1src = document.createElement('source');
        _this.VoiceNote1src.setAttribute("src", window.baseUrl + "questionSounds/ALM-01-MCQ-G6/" + _this.languageSelected + "/ALM-01-MCQ-G6A.mp3");

        _this.VoiceNote1.appendChild(_this.VoiceNote1src);
        _this.VoiceNote1.play();

        console.log("_this.languageSelected", _this.languageSelected);

        _this.time.events.add(6000, function () {
            console.log("completed")
            _this.Question_flag = 1;
        })

    },

    VoiceNote2Fn: function () {
        if (_this.VoiceNote1) _this.VoiceNote1.pause();
        // _this.VoiceNote1.stopAudio();
        console.log("Enter The Value Of The Variable");
        _this.VoiceNote2 = document.createElement('audio');
        _this.VoiceNote2src = document.createElement('source');
        _this.VoiceNote2src.setAttribute("src", window.baseUrl + "questionSounds/ALM-01-MCQ-G6/" +
            _this.languageSelected + "/ALM-01-MCQ-G6B.mp3");
        _this.VoiceNote2.appendChild(_this.VoiceNote2src);
        _this.VoiceNote2.play();


    },

    VoiceNote3Fn: function () {

        console.log("Select The Suitable Equation To Find The Value Of a Given Variable");
        _this.VoiceNote3 = document.createElement('audio');
        _this.VoiceNote3src = document.createElement('source');
        _this.VoiceNote3src.setAttribute("src", window.baseUrl + "questionSounds/ALM-01-MCQ-G6/" +
            _this.languageSelected + "/ALM-01-MCQ-G6C.mp3");
        _this.VoiceNote3.appendChild(_this.VoiceNote3src);
        _this.VoiceNote3.play();

    },


    VoiceNote4Fn: function () {

        _this.VoiceNote3 = document.createElement('audio');
        _this.VoiceNote3src = document.createElement('source');
        _this.VoiceNote3src.setAttribute("src", window.baseUrl + "questionSounds/ALM-01-MCQ-G6/" +
            _this.languageSelected + "/ALM-01-MCQ-G6D.mp3");
        _this.VoiceNote3.appendChild(_this.VoiceNote3src);
        _this.VoiceNote3.play();

    },


    starActions: function (target) {
        _this.score++;
        starAnim = _this.starsGroup.getChildAt(_this.count1);
        starAnim.smoothed = false;
        anim = starAnim.animations.add('star');
        //_this.anim.play();
        // //* star Actions changes
        // _this.userHasPlayed =1;
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.game_id = "ALM_01_G6";
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

        //*audio for question 1
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALM-01-MCQ-G6/" +
            _this.languageSelected + "/ALM-01-MCQ-G6A.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* audio for question 2
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALM-01-MCQ-G6/" +
            _this.languageSelected + "/ALM-01-MCQ-G6B.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* audio for question 3
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALM-01-MCQ-G6/" +
            _this.languageSelected + "/ALM-01-MCQ-G6C.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        // * audio for question 4
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/ALM-01-MCQ-G6/" +
            _this.languageSelected + "/ALM-01-MCQ-G6D.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);


        _this.video_playing = 0;
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 190, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.stopAudio();

            if (_this.demoVideo_1)
                _this.demoVideo_1.stop(false);
            if (_this.demoVideo_2)
                _this.demoVideo_2.stop(false);

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

    stopAudio: function () {
        //* clear all the timers first

        if (_this.q1Timer) clearTimeout(_this.q1Timer);
        if (_this.q2Timer) clearTimeout(_this.q2Timer);
        if (_this.q3Timer) clearTimeout(_this.q3Timer);


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




        _this.skip.events.onInputDown.removeAll();
        _this.skip.destroy();                //* skip button destroyed

    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('alm01_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/ALM-01-G6_1.mp4");
        _this.video_playing = 1;
        _this.videoWorld_1 = _this.demoVideo_1.addToWorld();
        //_this.q1Sound.play();

        //* play the demo audio3 after 13 sec delay
        _this.q1Timer = setTimeout(function ()    //* demoAudio3 js timer to play demoAudio1Timer after 13 seconds.
        {
            console.log("inside q4 Sound.....")
            clearTimeout(_this.q1Timer);         //* clear the time once its used.
            _this.q1Sound.play();
        }, 2000);

        _this.q2Timer = setTimeout(function ()    //* demoAudio3 js timer to play demoAudio1Timer after 13 seconds.
        {
            console.log("inside q2 Sound.....")
            clearTimeout(_this.q2Timer);         //* clear the time once its used.
            _this.q2Sound.play();
        }, 24000);



        _this.demoVideo_1.onComplete.add(function () {
            console.log("audio2 ended - pause video1");

            _this.demoVideo_2 = _this.add.video('alm01_3');
            _this.demoVideo_2.play(false);
            _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/ALM-01-G6_3.mp4");  //* phaser needs this.to run in mobile
            _this.video_playing = 2;
            _this.videoWorld_2 = _this.demoVideo_2.addToWorld();

            _this.skip.bringToTop();
            _this.q4Sound.play();

            _this.q3Timer = setTimeout(function ()    //* q3 js timer to play q3timer after 20 seconds.
            {
                console.log("inside q3 Sound.....")
                clearTimeout(_this.q3Timer);         //* clear the time once its used.
                _this.q2Sound.play();
            }, 20000);



            _this.demoVideo_2.onComplete.add(function () {
                _this.demoVideo_3 = _this.add.video('alm01_2');
                _this.demoVideo_3.play(false);
                _this.demoVideo_3.changeSource(window.baseUrl + "assets/demoVideos/ALM-01-G6_2.mp4");  //* phaser needs this.to run in mobile
                _this.video_playing = 3;
                _this.videoWorld_3 = _this.demoVideo_3.addToWorld();

                _this.skip.bringToTop();
                _this.q3Sound.play();

                _this.demoVideo_3.onComplete.add(function () {
                    _this.stopAudio();

                    _this.demoVideo_3.stop(false);
                    _this.demoVideo_2.stop(false);
                    _this.demoVideo_1.stop(false);

                    _this.videoWorld_3.destroy();
                    _this.videoWorld_2.destroy();
                    _this.videoWorld_1.destroy();

                    if (_this.hintBtn) {
                        console.log('inside show demo video..............');
                        _this.hintBtn.inputEnabled = true;
                        _this.hintBtn.input.useHandCursor = true;
                    }
                    _this.game.paused = false;

                    console.log("demovideo 2 completed......!!!1");
                });

            });

        });
    }
}